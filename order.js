// ===== ORDER PAGE =====
// الشكل في الـ URL: ?o=0201-0-02|0101-0-01  (صنف-حجم-كمية)
const CODE_RE = /^(\d{4})-(\d+)-(\d{2})$/;
const MAX_QTY = 99;

let lines = []; // [{ code, size, qty }]

function parseOrder(raw) {
    return raw.split("|").map(part => {
        const m = part.trim().match(CODE_RE);
        if (!m) return null;
        const product = PRODUCTS.find(p => p.code === m[1]);
        if (!product) return null;
        const size = Number(m[2]);
        if (!product.sizes[size]) return null;
        const qty = Math.min(Number(m[3]), MAX_QTY);
        if (qty < 1) return null;
        return { code: m[1], size, qty };
    }).filter(Boolean);
}

function encodeOrder() {
    return lines.map(l => `${l.code}-${l.size}-${String(l.qty).padStart(2, "0")}`).join("|");
}

function lineInfo(l) {
    const product = PRODUCTS.find(p => p.code === l.code);
    const size = product.sizes[l.size];
    return { product, size, line: size.price * l.qty };
}

// الحسبة: السيرفيس على الإجمالي، والضريبة على (الإجمالي + السيرفيس)
function calcTotals() {
    const subtotal = lines.reduce((s, l) => s + lineInfo(l).line, 0);
    const service = Math.round(subtotal * CONFIG.serviceRate * 100) / 100;
    const tax = Math.round((subtotal + service) * CONFIG.taxRate * 100) / 100;
    const total = Math.round((subtotal + service + tax) * 100) / 100;
    return { subtotal, service, tax, total };
}

// يحفظ الطلب في الـ URL ويعيد رسم الصفحة (والـ QR)
function save() {
    const raw = encodeOrder();
    const url = new URL(location.href);
    url.search = raw ? `?o=${encodeURIComponent(raw)}` : "";
    history.replaceState(null, "", url);
    render();
}

function render() {
    const list = document.getElementById("orderItems");
    const totalsBox = document.getElementById("orderTotals");
    const qrBox = document.getElementById("qrBox");
    const payBtn = document.getElementById("payBtn");

    if (!lines.length) {
        list.innerHTML = `<p class="empty">${t("noItems")}</p>`;
        totalsBox.innerHTML = "";
        qrBox.style.display = "none";
        payBtn.style.display = "none";
        return;
    }

    list.innerHTML = lines.map((l, i) => {
        const { product, size, line } = lineInfo(l);
        return `
        <div class="cart-line">
            <div>
                <div class="line-name">${pick(product, "name")} <small>(${pick(size, "label")})</small></div>
            </div>
            <div class="qty">
                <button class="remove-btn" data-i="${i}" data-remove="1" aria-label="Remove">✕</button>
                <button data-i="${i}" data-d="-1">−</button>
                <span>${l.qty}</span>
                <button data-i="${i}" data-d="1">+</button>
            </div>
            <div class="line-price">${line} ${CONFIG.currencyLabel}</div>
        </div>`;
    }).join("");

    list.querySelectorAll("button[data-i]").forEach(b => b.addEventListener("click", () => {
        const i = Number(b.dataset.i);
        if (b.dataset.remove) {
            lines.splice(i, 1);
        } else {
            const q = lines[i].qty + Number(b.dataset.d);
            if (q > MAX_QTY) return;
            if (q < 1) lines.splice(i, 1);
            else lines[i].qty = q;
        }
        save();
    }));

    const tot = calcTotals();
    totalsBox.innerHTML = `
        <div class="cart-total sub"><span>${t("subtotal")}</span><span>${tot.subtotal} ${CONFIG.currencyLabel}</span></div>
        <div class="cart-total sub"><span>${t("service")} (${Math.round(CONFIG.serviceRate * 100)}%)</span><span>${tot.service} ${CONFIG.currencyLabel}</span></div>
        <div class="cart-total sub"><span>${t("tax")} (${Math.round(CONFIG.taxRate * 100)}%)</span><span>${tot.tax} ${CONFIG.currencyLabel}</span></div>
        <div class="cart-total"><span>${t("total")}</span><span>${tot.total} ${CONFIG.currencyLabel}</span></div>`;

    // QR بيحمل رابط صفحة الأوردر بالأكواد
    qrBox.style.display = "block";
    payBtn.style.display = "block";
    const canvas = document.getElementById("qrCanvas");
    const msg = document.getElementById("qrError");
    if (window.QRCode) {
        msg.textContent = "";
        QRCode.toCanvas(canvas, location.href, { width: 240, margin: 2 }, err => {
            if (err) msg.textContent = "QR error: " + err.message;
        });
    } else {
        msg.textContent = t("qrError");
    }
}

// ===== INVOICE (popup only: items + totals, no payment options) =====
function openInvoice() {
    const tot = calcTotals();
    document.getElementById("invoiceBody").innerHTML = `
        ${lines.map(l => {
            const { product, size, line } = lineInfo(l);
            return `
            <div class="cart-line">
                <div><div class="line-name">${pick(product, "name")} <small>(${pick(size, "label")})</small></div></div>
                <div>× ${l.qty}</div>
                <div class="line-price">${line} ${CONFIG.currencyLabel}</div>
            </div>`;
        }).join("")}
        <div class="cart-total sub"><span>${t("subtotal")}</span><span>${tot.subtotal} ${CONFIG.currencyLabel}</span></div>
        <div class="cart-total sub"><span>${t("service")} (${Math.round(CONFIG.serviceRate * 100)}%)</span><span>${tot.service} ${CONFIG.currencyLabel}</span></div>
        <div class="cart-total sub"><span>${t("tax")} (${Math.round(CONFIG.taxRate * 100)}%)</span><span>${tot.tax} ${CONFIG.currencyLabel}</span></div>
        <div class="cart-total"><span>${t("total")}</span><span>${tot.total} ${CONFIG.currencyLabel}</span></div>`;
    document.getElementById("invoiceOverlay").classList.add("active");
}

function closeInvoice() {
    document.getElementById("invoiceOverlay").classList.remove("active");
}

// ===== INIT =====
document.getElementById("restaurantName").textContent = CONFIG.name;
document.getElementById("langBtn").addEventListener("click", toggleLang);
document.getElementById("payBtn").addEventListener("click", openInvoice);
document.getElementById("closeInvoice").addEventListener("click", closeInvoice);
document.getElementById("invoiceOverlay").addEventListener("click", e => {
    if (e.target.id === "invoiceOverlay") closeInvoice();
});
applyLang();

loadMenu().then(() => {
    lines = parseOrder(new URLSearchParams(location.search).get("o") || "");
    save();
});
