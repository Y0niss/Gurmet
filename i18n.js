// ===== LANGUAGE =====
const STRINGS = {
    en: {
        menu: "Menu",
        addToOrder: "Add to order",
        cartTitle: "🛒 Your Order",
        total: "Total",
        checkout: "Place your order",
        invoice: "Invoice",
        subtotal: "Subtotal",
        service: "Service",
        tax: "Tax",
        askWaiter: "Ask the waiter to scan your order",
        proceed: "Proceed to pay",
        clear: "Clear",
        empty: "Your cart is empty",
        max: "Max 99 per item",
        noItems: "No valid items in this order",
        orderTitle: "Your Order",
        back: "← Menu",
        qrNote: "This QR holds your order",
        qrError: "QR library didn't load, check your internet",
        langBtn: "عربي",
        added: "Added",
        welcomeTitle: "Welcome to Gourmet",
        tagline: "Fresh food, made to order. Pick your favourites and we'll have them ready for you.",
        hours: "Open daily 12:00 PM – 12:00 AM",
        orderNow: "Order Now",
        branches: "Our Branches",
        popular: "Popular right now",
        mapTitle: "Our Branches",
        searchPlaceholder: "Search by city or area",
        search: "Search",
        noResults: "No results found",
        backHome: "← Home",
        eat: "Eat",
        welcome: "Welcome, would you like...",
        askEat: "What would you like to eat?",
        askDrink: "What would you like to drink?",
        drink: "Drink",
        stepBack: "← Back"
    },
    ar: {
        menu: "المنيو",
        addToOrder: "أضف للطلب",
        cartTitle: "🛒 طلبك",
        total: "الإجمالي",
        checkout: "أكّد طلبك",
        invoice: "الفاتورة",
        subtotal: "المجموع",
        service: "السيرفيس",
        tax: "الضريبة",
        askWaiter: "اطلب من الجرسون يسكان طلبك",
        proceed: "ادفع",
        clear: "امسح الكل",
        empty: "السلة فاضية",
        max: "الحد الأقصى 99 للصنف",
        noItems: "مفيش أصناف صحيحة في الطلب",
        orderTitle: "طلبك",
        back: "المنيو →",
        qrNote: "الـ QR ده بيحمل طلبك",
        qrError: "مكتبة QR ما اتحملتش، اتأكد من الإنترنت",
        langBtn: "EN",
        added: "اتضاف",
        welcomeTitle: "أهلاً بيك في Gourmet",
        tagline: "أكل طازة، متحضر على طلبك. اختار اللي يعجبك وإحنا نجهزهولك.",
        hours: "مفتوح يومياً ١٢:٠٠ ظهراً – ١٢:٠٠ بعد نص الليل",
        orderNow: "اطلب دلوقتي",
        branches: "فروعنا",
        popular: "الأكثر طلباً دلوقتي",
        mapTitle: "فروعنا",
        searchPlaceholder: "ابحث بالمدينة أو المنطقة",
        search: "بحث",
        noResults: "مفيش نتايج",
        backHome: "الرئيسية →",
        eat: "تاكل",
        welcome: "أهلاً بيك، عايز...",
        askEat: "عايز تاكل إيه؟",
        askDrink: "عايز تشرب إيه؟",
        drink: "تشرب",
        stepBack: "رجوع →"
    }
};

let lang = localStorage.getItem("lang") || "en";

function t(key) {
    return STRINGS[lang][key] || key;
}

// يختار الاسم/الوصف حسب اللغة (field + "Ar" للعربي)
function pick(obj, field) {
    return lang === "ar" ? obj[field + "Ar"] : obj[field];
}

function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    const btn = document.getElementById("langBtn");
    if (btn) btn.textContent = t("langBtn");
}

function toggleLang() {
    localStorage.setItem("lang", lang === "en" ? "ar" : "en");
    location.reload();
}
