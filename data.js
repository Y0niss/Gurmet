// ===== CATEGORIES =====
const CATEGORIES = {
    "burgers":     { label: "Burgers",     labelAr: "برجر",            icon: "🍔" },
    "pizza":       { label: "Pizza",       labelAr: "بيتزا",           icon: "🍕" },
    "pasta":       { label: "Pasta",       labelAr: "باستا",           icon: "🍝" },
    "salads":      { label: "Salads",      labelAr: "سلطات",           icon: "🥗" },
    "soft-drinks": { label: "Soft Drinks", labelAr: "مشروبات غازية",   icon: "🥤" },
    "hot-drinks":  { label: "Hot Drinks",  labelAr: "مشروبات ساخنة",   icon: "☕" },
    "juices":      { label: "Juices",      labelAr: "عصائر",           icon: "🧃" }
};

// ===== PRODUCTS =====
// code = كود الصنف (فريد). رقم الحجم = ترتيبه في sizes (0, 1, 2...)
// image = رابط الصورة (placeholder لحد ما الصور تيجي)
const PLACEHOLDER_IMG = "images/placeholder.svg";

let PRODUCTS = [
    // ----- BURGERS -----
    { code: "Bu01", category: "burgers", image: PLACEHOLDER_IMG,
      name: "Cheese Burger", nameAr: "برجر جبنة",
      specs: "Beef patty, cheddar, lettuce, tomato, signature sauce",
      specsAr: "لحم بقري، شيدر، خس، طماطم، صوص خاص",
      sizes: [
        { label: "Regular",     labelAr: "عادي",     price: 45 },
        { label: "Double",      labelAr: "دبل",      price: 60 },
        { label: "Mega Double", labelAr: "ميجا دبل", price: 75 }
      ] },
    { code: "Bu02", category: "burgers", image: PLACEHOLDER_IMG,
      name: "Beef Burger", nameAr: "برجر لحم",
      specs: "Caramelized onions, BBQ sauce, bacon",
      specsAr: "بصل مكرمل، صوص باربكيو، بيكون",
      sizes: [
        { label: "Regular",     labelAr: "عادي",     price: 40 },
        { label: "Double",      labelAr: "دبل",      price: 55 },
        { label: "Mega Double", labelAr: "ميجا دبل", price: 70 }
      ] },
    { code: "Bu03", category: "burgers", image: PLACEHOLDER_IMG,
      name: "Chicken Burger", nameAr: "برجر دجاج",
      specs: "Grilled chicken, avocado, garlic mayo, arugula",
      specsAr: "دجاج مشوي، أفوكادو، مايونيز ثوم، جرجير",
      sizes: [
        { label: "Regular",     labelAr: "عادي",     price: 38 },
        { label: "Double",      labelAr: "دبل",      price: 53 },
        { label: "Mega Double", labelAr: "ميجا دبل", price: 68 }
      ] },
    { code: "Bu04", category: "burgers", image: PLACEHOLDER_IMG,
      name: "Double Cheese Burger", nameAr: "دبل تشيز برجر",
      specs: "Two beef patties, double cheddar, pickles, mustard",
      specsAr: "قرصين لحم، شيدر دبل، مخلل، خردل",
      sizes: [
        { label: "Regular",     labelAr: "عادي",     price: 55 },
        { label: "Double",      labelAr: "دبل",      price: 70 },
        { label: "Mega Double", labelAr: "ميجا دبل", price: 85 }
      ] },
    { code: "Bu05", category: "burgers", image: PLACEHOLDER_IMG,
      name: "Mushroom Burger", nameAr: "برجر مشروم",
      specs: "Beef patty, sautéed mushrooms, swiss cheese, garlic sauce",
      specsAr: "لحم بقري، مشروم سوتيه، جبنة سويسرية، صوص ثوم",
      sizes: [
        { label: "Regular",     labelAr: "عادي",     price: 50 },
        { label: "Double",      labelAr: "دبل",      price: 65 },
        { label: "Mega Double", labelAr: "ميجا دبل", price: 80 }
      ] },
    { code: "Bu06", category: "burgers", image: PLACEHOLDER_IMG,
      name: "Crispy Chicken Burger", nameAr: "برجر دجاج كرسبي",
      specs: "Crispy fried chicken, coleslaw, spicy mayo, pickles",
      specsAr: "دجاج مقرمش، كول سلو، مايونيز حار، مخلل",
      sizes: [
        { label: "Regular",     labelAr: "عادي",     price: 42 },
        { label: "Double",      labelAr: "دبل",      price: 57 },
        { label: "Mega Double", labelAr: "ميجا دبل", price: 72 }
      ] },

    // ----- PIZZA -----
    { code: "Pi01", category: "pizza", image: PLACEHOLDER_IMG,
      name: "Margherita", nameAr: "مارجريتا",
      specs: "Tomato, fresh mozzarella, basil, olive oil",
      specsAr: "طماطم، موتزاريلا طازة، ريحان، زيت زيتون",
      sizes: [
        { label: "Small",  labelAr: "صغير", price: 55 },
        { label: "Medium", labelAr: "وسط",  price: 70 },
        { label: "Large",  labelAr: "كبير", price: 85 }
      ] },
    { code: "Pi02", category: "pizza", image: PLACEHOLDER_IMG,
      name: "Pepperoni Pizza", nameAr: "بيتزا بيبروني",
      specs: "Pepperoni, mozzarella, spicy tomato sauce",
      specsAr: "بيبروني، موتزاريلا، صوص طماطم حار",
      sizes: [
        { label: "Small",  labelAr: "صغير", price: 60 },
        { label: "Medium", labelAr: "وسط",  price: 75 },
        { label: "Large",  labelAr: "كبير", price: 90 }
      ] },
    { code: "Pi03", category: "pizza", image: PLACEHOLDER_IMG,
      name: "Veggie Pizza", nameAr: "بيتزا خضار",
      specs: "Bell peppers, mushrooms, olives, red onions, tomatoes",
      specsAr: "فلفل ملون، مشروم، زيتون، بصل أحمر، طماطم",
      sizes: [
        { label: "Small",  labelAr: "صغير", price: 50 },
        { label: "Medium", labelAr: "وسط",  price: 65 },
        { label: "Large",  labelAr: "كبير", price: 80 }
      ] },
    { code: "Pi04", category: "pizza", image: PLACEHOLDER_IMG,
      name: "BBQ Chicken Pizza", nameAr: "بيتزا دجاج باربكيو",
      specs: "Grilled chicken, BBQ sauce, red onions, cilantro, mozzarella",
      specsAr: "دجاج مشوي، صوص باربكيو، بصل أحمر، كزبرة، موتزاريلا",
      sizes: [
        { label: "Small",  labelAr: "صغير", price: 62 },
        { label: "Medium", labelAr: "وسط",  price: 77 },
        { label: "Large",  labelAr: "كبير", price: 92 }
      ] },
    { code: "Pi05", category: "pizza", image: PLACEHOLDER_IMG,
      name: "Four Cheese Pizza", nameAr: "بيتزا four cheese",
      specs: "Mozzarella, cheddar, parmesan, blue cheese",
      specsAr: "موتزاريلا، شيدر، بارميزان، جبنة زرقا",
      sizes: [
        { label: "Small",  labelAr: "صغير", price: 65 },
        { label: "Medium", labelAr: "وسط",  price: 80 },
        { label: "Large",  labelAr: "كبير", price: 95 }
      ] },
    { code: "Pi06", category: "pizza", image: PLACEHOLDER_IMG,
      name: "Hawaiian Pizza", nameAr: "بيتزا هاواي",
      specs: "Ham, pineapple, mozzarella, tomato sauce",
      specsAr: "لانشون، أناناس، موتزاريلا، صوص طماطم",
      sizes: [
        { label: "Small",  labelAr: "صغير", price: 58 },
        { label: "Medium", labelAr: "وسط",  price: 73 },
        { label: "Large",  labelAr: "كبير", price: 88 }
      ] },

    // ----- PASTA -----
    { code: "Pa01", category: "pasta", image: PLACEHOLDER_IMG,
      name: "Carbonara Pasta", nameAr: "باستا كاربونارا",
      specs: "Bacon, parmesan, egg yolk, black pepper",
      specsAr: "بيكون، بارميزان، صفار بيض، فلفل أسود",
      sizes: [
        { label: "Regular", labelAr: "عادي", price: 48 },
        { label: "Large",   labelAr: "كبير", price: 65 }
      ] },
    { code: "Pa02", category: "pasta", image: PLACEHOLDER_IMG,
      name: "Bolognese Pasta", nameAr: "باستا بولونيز",
      specs: "Beef and tomato meat sauce, herbs, spaghetti",
      specsAr: "صوص لحم بقري وطماطم، أعشاب، سباجيتي",
      sizes: [
        { label: "Regular", labelAr: "عادي", price: 42 },
        { label: "Large",   labelAr: "كبير", price: 58 }
      ] },
    { code: "Pa03", category: "pasta", image: PLACEHOLDER_IMG,
      name: "Alfredo Pasta", nameAr: "باستا ألفريدو",
      specs: "Fettuccine, parmesan, garlic cream, parsley",
      specsAr: "فيتوتشيني، بارميزان، صوص كريمة بالثوم، بقدونس",
      sizes: [
        { label: "Regular", labelAr: "عادي", price: 44 },
        { label: "Large",   labelAr: "كبير", price: 60 }
      ] },
    { code: "Pa04", category: "pasta", image: PLACEHOLDER_IMG,
      name: "Pesto Pasta", nameAr: "باستا بيستو",
      specs: "Penne, basil pesto, pine nuts, parmesan, cherry tomatoes",
      specsAr: "بيني، بيستو ريحان، صنوبر، بارميزان، طماطم كرزية",
      sizes: [
        { label: "Regular", labelAr: "عادي", price: 46 },
        { label: "Large",   labelAr: "كبير", price: 62 }
      ] },
    { code: "Pa05", category: "pasta", image: PLACEHOLDER_IMG,
      name: "Penne Arrabbiata", nameAr: "بيني أرابياتا",
      specs: "Penne, spicy tomato sauce, garlic, chili, parmesan",
      specsAr: "بيني، صوص طماطم حار، ثوم، فلفل شيلي، بارميزان",
      sizes: [
        { label: "Regular", labelAr: "عادي", price: 44 },
        { label: "Large",   labelAr: "كبير", price: 60 }
      ] },
    { code: "Pa06", category: "pasta", image: PLACEHOLDER_IMG,
      name: "Chicken Alfredo", nameAr: "شيكن ألفريدو",
      specs: "Grilled chicken, fettuccine, garlic cream, parmesan",
      specsAr: "دجاج مشوي، فيتوتشيني، صوص كريمة بالثوم، بارميزان",
      sizes: [
        { label: "Regular", labelAr: "عادي", price: 55 },
        { label: "Large",   labelAr: "كبير", price: 72 }
      ] },

    // ----- SALADS (أسعار تقريبية - راجعها) -----
    { code: "Sa01", category: "salads", image: PLACEHOLDER_IMG,
      name: "Caesar Salad", nameAr: "سلطة سيزر",
      specs: "Romaine, croutons, parmesan, Caesar dressing",
      specsAr: "خس رومين، كروتون، بارميزان، صوص سيزر",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 40 }] },
    { code: "Sa02", category: "salads", image: PLACEHOLDER_IMG,
      name: "Greek Salad", nameAr: "سلطة يوناني",
      specs: "Cucumber, tomato, olives, feta",
      specsAr: "خيار، طماطم، زيتون، جبنة فيتا",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 35 }] },
    { code: "Sa03", category: "salads", image: PLACEHOLDER_IMG,
      name: "Garden Salad", nameAr: "سلطة جاردن",
      specs: "Mixed greens, tomato, cucumber, carrot",
      specsAr: "خضار مشكلة، طماطم، خيار، جزر",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 28 }] },
    { code: "Sa04", category: "salads", image: PLACEHOLDER_IMG,
      name: "Tuna Salad", nameAr: "سلطة تونة",
      specs: "Tuna, mixed greens, egg, corn",
      specsAr: "تونة، خضار مشكلة، بيض، ذرة",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 42 }] },
    { code: "Sa05", category: "salads", image: PLACEHOLDER_IMG,
      name: "Chicken Caesar Salad", nameAr: "سلطة سيزر بالدجاج",
      specs: "Grilled chicken, romaine, croutons, parmesan, Caesar dressing",
      specsAr: "دجاج مشوي، خس رومين، كروتون، بارميزان، صوص سيزر",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 48 }] },
    { code: "Sa06", category: "salads", image: PLACEHOLDER_IMG,
      name: "Caprese Salad", nameAr: "سلطة كابريزي",
      specs: "Fresh mozzarella, tomato, basil, balsamic glaze",
      specsAr: "موتزاريلا طازة، طماطم، ريحان، صوص بلسمك",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 45 }] },

    // ----- SOFT DRINKS -----
    { code: "So01", category: "soft-drinks", image: PLACEHOLDER_IMG,
      name: "Cola", nameAr: "كولا",
      specs: "Carbonated cola, ice, lemon",
      specsAr: "كولا مثلجة، ليمون",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 10 }] },
    { code: "So02", category: "soft-drinks", image: PLACEHOLDER_IMG,
      name: "Sprite", nameAr: "سبرايت",
      specs: "Lemon-lime soda",
      specsAr: "مشروب ليمون غازي منعش",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 10 }] },
    { code: "So03", category: "soft-drinks", image: PLACEHOLDER_IMG,
      name: "Fanta", nameAr: "فانتا",
      specs: "Orange carbonated drink",
      specsAr: "مشروب برتقال غازي",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 10 }] },
    { code: "So04", category: "soft-drinks", image: PLACEHOLDER_IMG,
      name: "Root Beer", nameAr: "روت بير",
      specs: "Vanilla and caramel notes",
      specsAr: "نكهة الفانيليا والكراميل",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 12 }] },
    { code: "So05", category: "soft-drinks", image: PLACEHOLDER_IMG,
      name: "Pepsi", nameAr: "بيبسي",
      specs: "Carbonated cola, ice",
      specsAr: "كولا غازية مثلجة",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 10 }] },
    { code: "So06", category: "soft-drinks", image: PLACEHOLDER_IMG,
      name: "Lemonade", nameAr: "ليمون بالنعناع",
      specs: "Fresh lemon juice, sugar, sparkling water",
      specsAr: "عصير ليمون طازة، سكر، مياه غازية",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 15 }] },

    // ----- HOT DRINKS -----
    { code: "Ho01", category: "hot-drinks", image: PLACEHOLDER_IMG,
      name: "Coffee", nameAr: "قهوة",
      specs: "Black coffee, 100% Arabica",
      specsAr: "قهوة سوداء من 100% عربيكا",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 15 }] },
    { code: "Ho02", category: "hot-drinks", image: PLACEHOLDER_IMG,
      name: "Cappuccino", nameAr: "كابتشينو",
      specs: "Espresso, steamed milk, foam, cocoa",
      specsAr: "إسبريسو، حليب مبخر، رغوة، كاكاو",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 18 }] },
    { code: "Ho03", category: "hot-drinks", image: PLACEHOLDER_IMG,
      name: "Latte", nameAr: "لاتيه",
      specs: "Espresso, steamed milk, light foam",
      specsAr: "إسبريسو، حليب مبخر، رغوة خفيفة",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 17 }] },
    { code: "Ho04", category: "hot-drinks", image: PLACEHOLDER_IMG,
      name: "English Tea", nameAr: "شاي إنجليزي",
      specs: "English breakfast tea, milk and sugar on the side",
      specsAr: "شاي إنجليش بريكفاست، حليب وسكر جانبي",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 12 }] },
    { code: "Ho05", category: "hot-drinks", image: PLACEHOLDER_IMG,
      name: "Espresso", nameAr: "إسبريسو",
      specs: "Double shot of espresso",
      specsAr: "دبل شوت إسبريسو",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 12 }] },
    { code: "Ho06", category: "hot-drinks", image: PLACEHOLDER_IMG,
      name: "Mocha", nameAr: "موكا",
      specs: "Espresso, dark chocolate, steamed milk, whipped cream",
      specsAr: "إسبريسو، شوكولاتة داكنة، حليب مبخر، كريمة مخفوقة",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 20 }] },

    // ----- JUICES -----
    { code: "Ju01", category: "juices", image: PLACEHOLDER_IMG,
      name: "Orange Juice", nameAr: "عصير برتقال",
      specs: "Freshly squeezed, vitamin C",
      specsAr: "برتقال طازة معصور، فيتامين سي",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 12 }] },
    { code: "Ju02", category: "juices", image: PLACEHOLDER_IMG,
      name: "Apple Juice", nameAr: "عصير تفاح",
      specs: "100% pressed apple juice",
      specsAr: "عصير تفاح طبيعي 100%",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 12 }] },
    { code: "Ju03", category: "juices", image: PLACEHOLDER_IMG,
      name: "Mango Juice", nameAr: "عصير مانجو",
      specs: "Fresh Alphonso mangoes",
      specsAr: "مانجو ألفونسو طازة",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 14 }] },
    { code: "Ju04", category: "juices", image: PLACEHOLDER_IMG,
      name: "Strawberry Juice", nameAr: "عصير فراولة",
      specs: "Strawberry with natural sweetness",
      specsAr: "فراولة بحلاوة طبيعية",
      sizes: [{ label: "Standard", labelAr: "عادي", price: 14 }] },
];

// ===== LIVE MENU FROM GOOGLE SHEET =====
// الشيت لازم يكون "Anyone with the link → Viewer".
// لو الشيت مش متاح، الموقع بيستخدم الأصناف اللي فوق (نسخة احتياطية).
// بنقرأه بـ JSONP (script tag) عشان يشتغل من file:// كمان.
const SHEET_ID = "1ODtu5Nb46aZBFOk0MlKiB-6s4UCtqCNvEfsoAQAp774";
const SHEET_TAB = "Sheet1";

// كل صف في الشيت = حجم واحد. الكود "Pi01-0" = الصنف Pi01 + رقم الحجم 0
function buildProducts(head, rows) {
    const recs = rows
        .map(r => {
            const o = {};
            head.forEach((h, i) => o[h] = (r[i] || "").trim());
            return o;
        })
        .filter(r => r.Code && r.Code !== "Code");

    const byCode = new Map();
    recs.forEach(r => {
        const [code, idx] = r.Code.split("-");
        if (!/^[A-Za-z]{2}\d{2}$/.test(code || "") || isNaN(Number(idx))) return;
        if (!byCode.has(code)) byCode.set(code, []);
        byCode.get(code).push({ idx: Number(idx), r });
    });

    const products = [];
    byCode.forEach((list, code) => {
        // الصنف بيظهر بس لو كل أحجامه Available = TRUE
        if (!list.every(x => x.r.Available.toUpperCase() === "TRUE")) return;
        list.sort((a, b) => a.idx - b.idx);
        const first = list[0].r;
        products.push({
            code,
            category: first.Category.toLowerCase().replace(/\s+/g, "-"),
            image: first.Image || PLACEHOLDER_IMG,
            name: first.Name,
            nameAr: first.NameAr || first.Name,
            specs: first.Specs,
            specsAr: first.SpecsAr || first.Specs,
            sizes: list.map(({ r }) => ({
                label: r.Size,
                labelAr: r.SizeAr || r.Size,
                price: Number(r.Price)
            }))
        });
    });
    return products;
}

// بيحمل المنيو من الشيت، ولو فشل يفضل على الأصناف الاحتياطية
function loadMenu() {
    return new Promise(resolve => {
        window.google = window.google || {};
        google.visualization = google.visualization || {};
        google.visualization.Query = google.visualization.Query || {};

        const script = document.createElement("script");
        let done = false;
        const finish = reason => {
            if (done) return;
            done = true;
            if (reason) console.warn("Menu sheet " + reason + ", using built-in menu");
            clearTimeout(timer);
            google.visualization.Query.setResponse = () => {};
            script.remove();
            resolve();
        };
        const timer = setTimeout(() => finish("timed out"), 8000);

        google.visualization.Query.setResponse = data => {
            try {
                const head = data.table.cols.map(c => (c.label || "").trim());
                const rows = data.table.rows.map(r =>
                    (r.c || []).map(c => (c && c.v != null) ? String(c.v) : ""));
                const items = buildProducts(head, rows);
                if (items.length) PRODUCTS = items;
            } catch (err) {
                console.warn("Menu sheet parse failed, using built-in menu:", err);
            }
            finish();
        };

        script.onerror = () => finish("not reachable");
        script.src = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq` +
                     `?tqx=out:json&sheet=${encodeURIComponent(SHEET_TAB)}&t=${Date.now()}`;
        document.head.appendChild(script);
    });
}
