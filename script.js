// ===== STATE =====
let currentSection = 'home';
let currentItems = [];

// ===== DOM REFS =====
const sections = document.querySelectorAll('.section');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartBadge = document.getElementById('cartBadge');
const toast = document.getElementById('toast');
let toastTimeout;

// ===== NAVIGATION =====
function showSection(sectionId) {
    sections.forEach(s => s.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');
    currentSection = sectionId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== RENDER SUBCATEGORIES =====
function renderSubcategories(category) {
    const container = category === 'food' 
        ? document.getElementById('foodSubcategories') 
        : document.getElementById('drinkSubcategories');
    
    const subCategories = [...new Set(
        menuItems
            .filter(item => item.category === category)
            .map(item => item.subCategory)
    )];

    const subCategoryNames = {
        'burgers': { icon: '🍔', label: 'Burgers' },
        'pizza': { icon: '🍕', label: 'Pizza' },
        'pasta': { icon: '🍝', label: 'Pasta' },
        'salads': { icon: '🥗', label: 'Salads' },
        'soft-drinks': { icon: '🥤', label: 'Soft Drinks' },
        'hot-drinks': { icon: '☕', label: 'Hot Drinks' },
        'juices': { icon: '🧃', label: 'Juices' }
    };

    container.innerHTML = subCategories.map(sub => {
        const count = menuItems.filter(item => item.subCategory === sub).length;
        const info = subCategoryNames[sub] || { icon: '📦', label: sub };
        return `
            <div class="subcategory-card" data-subcategory="${sub}">
                <span class="sub-icon">${info.icon}</span>
                <h3>${info.label}</h3>
                <div class="item-count">${count} items</div>
            </div>
        `;
    }).join('');

    // Add click listeners
    container.querySelectorAll('.subcategory-card').forEach(card => {
        card.addEventListener('click', () => {
            const sub = card.dataset.subcategory;
            showItemsBySubCategory(sub);
        });
    });
}

// ===== RENDER ITEMS =====
function showItemsBySubCategory(subCategory) {
    const items = menuItems.filter(item => item.subCategory === subCategory);
    currentItems = items;
    
    const title = document.getElementById('itemsListTitle');
    const subNames = {
        'burgers': '🍔 Burgers',
        'pizza': '🍕 Pizza',
        'pasta': '🍝 Pasta',
        'salads': '🥗 Salads',
        'soft-drinks': '🥤 Soft Drinks',
        'hot-drinks': '☕ Hot Drinks',
        'juices': '🧃 Juices'
    };
    title.textContent = subNames[subCategory] || subCategory;
    
    renderItems(items);
    showSection('items-list');
}

function renderItems(items) {
    const grid = document.getElementById('itemsGrid');
    grid.innerHTML = items.map(item => `
        <div class="item-card" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x180?text=No+Image'">
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">$${item.price.toFixed(2)}</div>
                <div class="item-rating">⭐ ${item.rating}</div>
                ${item.isPopular ? '<div class="popular-badge">🔥 Popular</div>' : ''}
                <button class="add-to-cart-btn" data-id="${item.id}">🛒 Add to Cart</button>
            </div>
        </div>
    `).join('');

    // Item card click -> detail
    grid.querySelectorAll('.item-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) return;
            const id = parseInt(card.dataset.id);
            showDetail(id);
        });
    });

    // Add to cart buttons
    grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            addToCart(id);
        });
    });
}

// ===== DETAIL =====
function showDetail(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    const container = document.getElementById('detailContainer');
    container.innerHTML = `
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/700x400?text=No+Image'">
        <div class="detail-name">${item.name}</div>
        <div class="detail-category">${item.subCategory} • ${item.category}</div>
        <div class="detail-price">$${item.price.toFixed(2)}</div>
        <div class="detail-rating">⭐ ${item.rating} / 5.0</div>
        <div class="detail-description">${item.description}</div>
        ${item.isPopular ? '<div class="popular-badge" style="margin-bottom:1rem;">🔥 Popular Item</div>' : ''}
        <button class="detail-add-btn" data-id="${item.id}">🛒 Add to Cart - $${item.price.toFixed(2)}</button>
    `;

    container.querySelector('.detail-add-btn').addEventListener('click', () => {
        addToCart(item.id);
    });

    // Back button
    document.getElementById('detailBackBtn').onclick = () => {
        if (currentItems.length > 0) {
            // Go back to items list
            const sub = currentItems[0]?.subCategory;
            if (sub) showItemsBySubCategory(sub);
        } else {
            showSection('home');
        }
    };

    showSection('detail');
}

// ===== CART FUNCTIONS =====
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(id) {
    const cart = getCart();
    const existing = cart.find(item => item.id === id);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        const item = menuItems.find(i => i.id === id);
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
            image: item.image
        });
    }
    
    saveCart(cart);
    showToast(`${existing ? 'Updated' : 'Added'} ${menuItems.find(i => i.id === id).name} to cart! ✅`);
}

function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    renderCart();
    showToast('Item removed from cart 🗑️');
}

function updateQuantity(id, change) {
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;
    
    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }
    
    saveCart(cart);
    renderCart();
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        saveCart([]);
        renderCart();
        showToast('Cart cleared 🗑️');
    }
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
}

function updateCartBadge() {
    const count = getCartCount();
    cartBadge.textContent = count;
    cartBadge.style.display = count > 0 ? 'block' : 'none';
}

// ===== RENDER CART MODAL =====
function renderCart() {
    const cart = getCart();
    
    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div style="text-align:center;padding:2rem;color:#888;">
                <div style="font-size:3rem;margin-bottom:1rem;">🛒</div>
                <p>Your cart is empty</p>
                <p style="font-size:0.9rem;">Start adding some delicious items!</p>
            </div>
        `;
        cartTotalEl.textContent = '$0.00';
        return;
    }

    cartItemsEl.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <div class="item-quantity">
                <button class="qty-btn" data-id="${item.id}" data-change="-1">−</button>
                <span style="min-width:24px;text-align:center;">${item.quantity}</span>
                <button class="qty-btn" data-id="${item.id}" data-change="1">+</button>
                <button class="remove-btn" data-id="${item.id}">✕</button>
            </div>
        </div>
    `).join('');

    // Quantity buttons
    cartItemsEl.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const change = parseInt(btn.dataset.change);
            updateQuantity(id, change);
        });
    });

    // Remove buttons
    cartItemsEl.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
        });
    });

    cartTotalEl.textContent = `$${getCartTotal().toFixed(2)}`;
}

// ===== TOAST =====
function showToast(message, isError = false) {
    toast.textContent = message;
    toast.className = 'toast';
    if (isError) toast.classList.add('error');
    
    clearTimeout(toastTimeout);
    // Force reflow
    void toast.offsetWidth;
    toast.classList.add('show');
    
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ===== EVENT LISTENERS =====

// Navigation buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;
        if (section === 'home') {
            showSection('home');
        } else if (section === 'food-categories') {
            renderSubcategories('food');
            showSection('food-categories');
        } else if (section === 'drink-categories') {
            renderSubcategories('drink');
            showSection('drink-categories');
        }
    });
});

// Category cards (home page)
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        if (category === 'food') {
            renderSubcategories('food');
            showSection('food-categories');
        } else if (category === 'drink') {
            renderSubcategories('drink');
            showSection('drink-categories');
        }
    });
});

// Back buttons
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;
        if (section === 'home') {
            showSection('home');
        } else {
            showSection('home');
        }
    });
});

// Cart icon
document.getElementById('cartIcon').addEventListener('click', () => {
    renderCart();
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close cart
document.getElementById('closeCart').addEventListener('click', () => {
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Clear cart
document.getElementById('clearCart').addEventListener('click', clearCart);

// ===== INIT =====
updateCartBadge();
showSection('home');