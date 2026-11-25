// ===== BRANCHES MAP (OpenStreetMap + Nominatim search) =====
const DEFAULT_CENTER = [30.0444, 31.2357]; // Cairo
const map = L.map("map").setView(DEFAULT_CENTER, 11);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

let markers = [];
let activeIndex = -1;

document.getElementById("restaurantName").textContent = CONFIG.name;
document.getElementById("langBtn").addEventListener("click", toggleLang);

// يترجم الـ placeholder
document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
});

function clearResults() {
    markers.forEach(m => map.removeLayer(m));
    markers = [];
    activeIndex = -1;
    document.getElementById("results").innerHTML = "";
}

function highlight(index) {
    activeIndex = index;
    document.querySelectorAll("#results li").forEach((li, i) =>
        li.classList.toggle("active", i === index));
    markers.forEach((m, i) => m.setIcon(i === index ? highlightIcon : normalIcon));
    if (markers[index]) {
        map.setView(markers[index].getLatLng(), 15);
        markers[index].openPopup();
    }
}

const normalIcon = L.divIcon({ className: "pin", html: "📍", iconSize: [28, 28], iconAnchor: [14, 28] });
const highlightIcon = L.divIcon({ className: "pin pin-active", html: "📍", iconSize: [36, 36], iconAnchor: [18, 36] });

async function search(query) {
    clearResults();
    const list = document.getElementById("results");
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=10&q=${encodeURIComponent(query)}`;
    try {
        const res = await fetch(url, { headers: { "Accept-Language": lang === "ar" ? "ar" : "en" } });
        const data = await res.json();
        if (!data.length) {
            list.innerHTML = `<li class="empty">${t("noResults")}</li>`;
            return;
        }
        const bounds = [];
        data.forEach((place, i) => {
            const latlng = [Number(place.lat), Number(place.lon)];
            bounds.push(latlng);
            const marker = L.marker(latlng, { icon: normalIcon })
                .addTo(map)
                .bindPopup(place.display_name);
            marker.on("click", () => highlight(i));
            markers.push(marker);

            const li = document.createElement("li");
            li.textContent = place.display_name;
            li.addEventListener("click", () => highlight(i));
            list.appendChild(li);
        });
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
        highlight(0);
    } catch (e) {
        list.innerHTML = `<li class="empty">${t("noResults")}</li>`;
    }
}

document.getElementById("mapSearch").addEventListener("submit", e => {
    e.preventDefault();
    const q = document.getElementById("searchInput").value.trim();
    if (q) search(q);
});

applyLang();
