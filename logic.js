// --- Advanced E-Commerce Logic ---

const PRODUCTS = [
    { id: 1, name: "Amritprash Power Booster", price: 850, oldPrice: 1200, tag: "Best Seller", img: "logo.png" },
    { id: 2, name: "Nyala Herbal Hair Oil", price: 350, oldPrice: 499, tag: "New Arrival", img: "logo.png" },
    { id: 3, name: "Panch Tulsi Pure Drops", price: 195, oldPrice: 250, tag: "Pure", img: "logo.png" },
    { id: 4, name: "Dantvam Toothpaste", price: 95, oldPrice: 150, tag: "Natural", img: "logo.png" },
    { id: 5, name: "Ashwagandha KSM-66", price: 1250, oldPrice: 1500, tag: "Premium", img: "logo.png" },
    { id: 6, name: "Triphala Digestive Care", price: 299, oldPrice: 400, tag: "Organic", img: "logo.png" }
];

let cart = [];

// Initialize App
function init() {
    renderProducts();
    startSlider();
    setupCartListeners();
}

// Render Products with Animation Delays
function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = PRODUCTS.map((p, index) => `
        <div class="product-card" style="animation: slideIn 0.8s ease ${index * 0.1}s forwards; opacity:0">
            <div class="badge-new">${p.tag}</div>
            <div class="img-holder">
                <img src="https://raw.githubusercontent.com/nemimart/The-Nemi-Mart/main/${p.img}" alt="${p.name}">
            </div>
            <div class="p-info">
                <h3>${p.name}</h3>
                <div class="price-row">
                    <span class="price-tag">₹${p.price}</span>
                    <span class="old-price">₹${p.oldPrice}</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${p.id})">
                    <i class="fas fa-cart-plus"></i> ADD TO BASKET
                </button>
            </div>
        </div>
    `).join('');
}

// Cart Logic
function addToCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    cart.push(product);
    
    // Update UI
    document.getElementById('cartCount').innerText = cart.length;
    
    // Show Toast
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
    
    // Haptic Feedback Simulation
    if (window.navigator.vibrate) {
        window.navigator.vibrate(50);
    }
}

// Slider Logic
function startSlider() {
    const slider = document.getElementById('mainSlider');
    let index = 0;
    
    setInterval(() => {
        index++;
        if (index >= 2) index = 0;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }, 5000);
}

// Search Simulation
document.querySelector('.search-bar input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(term));
    // Yahan hum grid ko refresh kar sakte hain real-time
});

// Run Init
window.addEventListener('DOMContentLoaded', init);
