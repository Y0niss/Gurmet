// ===== HOME PAGE =====
const POPULAR_CODES = ["Bu01", "Pi01", "Pa01", "Pi02", "Pa06"];

document.getElementById("restaurantName").textContent = CONFIG.name;
document.getElementById("langBtn").addEventListener("click", toggleLang);

function renderPopular() {
    const track = document.getElementById("popularTrack");
    track.innerHTML = POPULAR_CODES
        .map(code => PRODUCTS.find(p => p.code === code))
        .filter(Boolean)
        .map(p => `
            <div class="popular-card">
                <img src="${p.image}" alt="${pick(p, "name")}" draggable="false">
                <h3>${pick(p, "name")}</h3>
            </div>`).join("");
}

// سحب الكروت بالماوس / اللمس (من غير سكرولبار أو عجلة الماوس)
function enableDragScroll(track) {
    let startX = 0, startScroll = 0, dragging = false, moved = false;

    track.addEventListener("pointerdown", e => {
        dragging = true;
        moved = false;
        startX = e.clientX;
        startScroll = track.scrollLeft;
    });
    track.addEventListener("pointermove", e => {
        if (!dragging) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 5) {
            moved = true;
            track.classList.add("dragging");
        }
        track.scrollLeft = startScroll - dx;
    });
    const stop = () => {
        dragging = false;
        track.classList.remove("dragging");
    };
    track.addEventListener("pointerup", stop);
    track.addEventListener("pointerleave", stop);
    track.addEventListener("pointercancel", stop);
    // ما يفتحش الكارت لو كان في سحب
    track.addEventListener("click", e => {
        if (moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);
}

applyLang();
renderPopular();
loadMenu().then(renderPopular);
enableDragScroll(document.getElementById("popularTrack"));
