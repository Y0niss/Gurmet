// ===== STATE =====
const FOOD = ["burgers", "pizza", "pasta", "salads"];
const DRINKS = ["soft-drinks", "hot-drinks", "juices"];
let activeCategory = FOOD[0];
const CART_KEY = "gourmet-cart";
const MAX_QTY = 99;

// ===== HELPERS =====
const money = n => `${n} ${CONFIG.currencyLabel}`;

function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch (e) { return []; }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderBadge();
}

function findProduct(code) {
    return PRODUCTS.find(p => p.code === code);
}

// الكود اللي بيتحول لـ QR: Pi01-0-02  (صنف - رقم الحجم - الكمية)
function orderCode() {
    return getCart()
        .map(i => `${i.code}-${i.size}-${String(i.qty).padStart(2, "0")}`)
        .join("|");
}

function cartTotal() {
    return getCart().reduce((sum, i) => {
        const p = findProduct(i.code);
        return sum + p.sizes[i.size].price * i.qty;
    }, 0);
}

function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => t.classList.remove("show"), 2000);
}

// ===== CART =====
function addItem(code, size) {
    const cart = getCart();
    const key = `${code}-${size}`;
    const existing = cart.find(i => i.key === key);
    if (existing) {
        if (existing.qty >= MAX_QTY) return showToast(t("max"));
        existing.qty++;
    } else cart.push({ key, code, size, qty: 1 });
    saveCart(cart);
    const p = findProduct(code);
    showToast(`${t("added")}: ${pick(p, "name")} ✅`);
}

function changeQty(key, delta) {
    let cart = getCart();
    const item = cart.find(i => i.key === key);
    if (!item) return;
    if (item.qty + delta > MAX_QTY) return showToast(t("max"));
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.key !== key);
    saveCart(cart);
    renderCart();
}

function removeItem(key) {
    saveCart(getCart().filter(i => i.key !== key));
    renderCart();
}

function renderBadge() {
    const count = getCart().reduce((s, i) => s + i.qty, 0);
    const badge = document.getElementById("cartBadge");
    badge.textContent = count;
    badge.style.display = count ? "block" : "none";
}

function renderCart() {
    const cart = getCart();
    const el = document.getElementById("cartItems");
    if (!cart.length) {
        el.innerHTML = `<p class="empty">${t("empty")}</p>`;
    } else {
        el.innerHTML = cart.map(i => {
            const p = findProduct(i.code);
            const s = p.sizes[i.size];
            return `
            <div class="cart-line">
                <div>
                    <div class="line-name">${pick(p, "name")} <small>(${pick(s, "label")})</small></div>
                </div>
                <div class="qty">
                    <button class="remove-btn" data-key="${i.key}" data-remove="1" aria-label="Remove">✕</button>
                    <button data-key="${i.key}" data-d="-1">−</button>
                    <span>${i.qty}</span>
                    <button data-key="${i.key}" data-d="1">+</button>
                </div>
                <div class="line-price">${money(s.price * i.qty)}</div>
            </div>`;
        }).join("");
        el.querySelectorAll("button[data-key]").forEach(b =>
            b.addEventListener("click", () => b.dataset.remove
                ? removeItem(b.dataset.key)
                : changeQty(b.dataset.key, Number(b.dataset.d))));
    }
    document.getElementById("cartTotal").textContent = money(cartTotal());
}

// ===== CATEGORY BAR (food on the left, drinks on the right) =====
function renderBar() {
    const btn = key => {
        const c = CATEGORIES[key];
        return `<button class="tab ${key === activeCategory ? "active" : ""}" data-cat="${key}">
                    ${c.icon} ${pick(c, "label")}</button>`;
    };
    document.getElementById("catLeft").innerHTML = FOOD.map(btn).join("");
    document.getElementById("catRight").innerHTML = DRINKS.map(btn).join("");
    document.querySelectorAll("#catBar .tab").forEach(b =>
        b.addEventListener("click", () => {
            activeCategory = b.dataset.cat;
            renderBar();
            renderMenu();
        }));
}

// ===== MENU GRID =====
function renderMenu() {
    const cat = CATEGORIES[activeCategory];
    document.getElementById("categoryTitle").textContent = `${cat.icon} ${pick(cat, "label")}`;
    const grid = document.getElementById("menuGrid");
    const items = PRODUCTS.filter(p => p.category === activeCategory);

    grid.innerHTML = items.map(p => `
        <div class="card">
            <img class="card-img" src="${p.image}" alt="${pick(p, "name")}">
            <h3>${pick(p, "name")}</h3>
            <p class="specs">${pick(p, "specs")}</p>
            ${p.sizes.length > 1
                ? `<select data-code="${p.code}">
                    ${p.sizes.map((s, i) => `<option value="${i}">${pick(s, "label")} — ${money(s.price)}</option>`).join("")}
                   </select>`
                : `<div class="single-size">${money(p.sizes[0].price)}</div>
                   <input type="hidden" data-code="${p.code}" value="0">`}
            <button class="primary-btn" data-add="${p.code}">${t("addToOrder")}</button>
        </div>`).join("");

    grid.querySelectorAll("button[data-add]").forEach(btn => {
        btn.addEventListener("click", () => {
            const code = btn.dataset.add;
            const size = Number(grid.querySelector(`[data-code="${code}"]`).value);
            addItem(code, size);
        });
    });
}

// ===== VIEWS =====
// 1) choice: eat / drink  ->  2) pick: category boxes  ->  3) menu: bar + items
// Back always goes ONE step (browser history).
const choiceView = document.getElementById("choiceView");
const pickView = document.getElementById("pickView");
const catBar = document.getElementById("catBar");
const menuHead = document.getElementById("menuHead");

function fadeIn(el) {
    el.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove("hide")));
}

function fadeOut(el) {
    el.classList.add("hide");
    setTimeout(() => { if (el.classList.contains("hide")) el.hidden = true; }, 350);
}

function renderPick(group) {
    const keys = group === "drinks" ? DRINKS : FOOD;
    pickView.innerHTML = keys.map(k => {
        const c = CATEGORIES[k];
        return `<button class="choice-box pick-box" data-cat="${k}">
                    <span class="choice-icon">${c.icon}</span>
                    <span>${pick(c, "label")}</span>
                </button>`;
    }).join("");
    pickView.querySelectorAll(".pick-box").forEach(b =>
        b.addEventListener("click", () => go({ view: "menu", cat: b.dataset.cat })));
}

function render(state) {
    const target = state.view === "choice" ? choiceView
                 : state.view === "pick" ? pickView
                 : null;
    [choiceView, pickView].forEach(el => { if (el !== target) fadeOut(el); });

    if (state.view === "pick") renderPick(state.group);
    if (target) fadeIn(target);

    if (state.view === "menu") {
        activeCategory = state.cat;
        catBar.hidden = false;
        catBar.classList.add("visible");
        menuHead.hidden = false;
        renderBar();
        renderMenu();
    } else {
        catBar.hidden = true;
        catBar.classList.remove("visible");
        document.getElementById("menuGrid").innerHTML = "";
        // شاشة الأقسام ليها زرار رجوع وعنوان، شاشة الاختيار لأ
        menuHead.hidden = state.view !== "pick";
        if (state.view === "pick") {
            document.getElementById("categoryTitle").textContent = state.group === "drinks" ? t("drink") : t("eat");
        }
    }
}

function go(state) {
    history.pushState(state, "");
    render(state);
}

document.querySelectorAll(".choice-box[data-group]").forEach(b =>
    b.addEventListener("click", () => go({ view: "pick", group: b.dataset.group })));

document.getElementById("backBtn").addEventListener("click", () => {
    if (history.state && history.state.view !== "choice") history.back();
});

window.addEventListener("popstate", e => render(e.state || { view: "choice" }));

// ===== LANGUAGE BUTTON =====
document.getElementById("langBtn").addEventListener("click", toggleLang);

// ===== EVENTS =====
document.getElementById("restaurantName").textContent = CONFIG.name;

document.getElementById("cartIcon").addEventListener("click", () => {
    renderCart();
    document.getElementById("cartOverlay").classList.add("active");
});
document.getElementById("closeCart").addEventListener("click", () =>
    document.getElementById("cartOverlay").classList.remove("active"));
document.getElementById("cartOverlay").addEventListener("click", e => {
    if (e.target.id === "cartOverlay") e.target.classList.remove("active");
});
document.getElementById("clearCart").addEventListener("click", () => {
    saveCart([]);
    renderCart();
});
document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (!getCart().length) return showToast(t("empty"));
    window.location.href = `${CONFIG.orderPage}?o=${encodeURIComponent(orderCode())}`;
});

// ===== INIT =====
applyLang();
history.replaceState({ view: "choice" }, "");
render({ view: "choice" });
renderBadge();

// لو الصفحة رجعت من الـ cache (زرار رجوع المتصفح) ارجع لشاشة الاختيار
window.addEventListener("pageshow", e => {
    if (e.persisted) render({ view: "choice" });
});
