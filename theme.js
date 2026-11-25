// ===== DARK MODE =====
const THEME_KEY = "theme";

function applyTheme() {
    const dark = localStorage.getItem(THEME_KEY) === "dark";
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    const btn = document.getElementById("themeBtn");
    if (btn) btn.textContent = dark ? "☀️" : "🌙";
}

function toggleTheme() {
    const isDark = document.documentElement.dataset.theme === "dark";
    localStorage.setItem(THEME_KEY, isDark ? "light" : "dark");
    applyTheme();
}

applyTheme();
document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    const btn = document.getElementById("themeBtn");
    if (btn) btn.addEventListener("click", toggleTheme);
});
