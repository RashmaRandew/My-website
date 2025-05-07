// Product data
const products = {
    processors: [
        { id: 'p1', name: 'AMD Ryzen 9 5950X', price: 799.99, image: 'images/products/ryzen9.jpg' },
        { id: 'p2', name: 'Intel Core i9-12900K', price: 589.99, image: 'images/products/i9.jpg' },
        { id: 'p3', name: 'AMD Ryzen 7 5800X', price: 449.99, image: 'images/products/ryzen7.jpg' },
        { id: 'p4', name: 'Intel Core i7-12700K', price: 409.99, image: 'images/products/i7.jpg' },
        { id: 'p5', name: 'AMD Ryzen 5 5600X', price: 299.99, image: 'images/products/ryzen5.jpg' },
        { id: 'p6', name: 'Intel Core i5-12600K', price: 279.99, image: 'images/products/i5.jpg' }
    ],
    graphicsCards: [
        { id: 'g1', name: 'NVIDIA RTX 4090', price: 1599.99, image: 'images/products/rtx4090.jpg' },
        { id: 'g2', name: 'AMD RX 7900 XTX', price: 999.99, image: 'images/products/rx7900.jpg' },
        { id: 'g3', name: 'NVIDIA RTX 4080', price: 1199.99, image: 'images/products/rtx4080.jpg' },
        { id: 'g4', name: 'AMD RX 7800 XT', price: 649.99, image: 'images/products/rx7800.jpg' },
        { id: 'g5', name: 'NVIDIA RTX 4070', price: 599.99, image: 'images/products/rtx4070.jpg' },
        { id: 'g6', name: 'AMD RX 7700 XT', price: 449.99, image: 'images/products/rx7700.jpg' }
    ],
    motherboards: [
        { id: 'm1', name: 'ASUS ROG X570', price: 299.99, image: 'images/products/asus-x570.jpg' },
        { id: 'm2', name: 'MSI MPG B550', price: 179.99, image: 'images/products/msi-b550.jpg' },
        { id: 'm3', name: 'GIGABYTE Z690', price: 249.99, image: 'images/products/gigabyte-z690.jpg' },
        { id: 'm4', name: 'ASRock B660', price: 149.99, image: 'images/products/asrock-b660.jpg' },
        { id: 'm5', name: 'ASUS PRIME H610', price: 119.99, image: 'images/products/asus-h610.jpg' },
        { id: 'm6', name: 'MSI PRO Z790', price: 329.99, image: 'images/products/msi-z790.jpg' }
    ],
    memory: [
        { id: 'r1', name: 'Corsair 32GB DDR4', price: 129.99, image: 'images/products/corsair-32.jpg' },
        { id: 'r2', name: 'G.SKILL 16GB DDR4', price: 79.99, image: 'images/products/gskill-16.jpg' },
        { id: 'r3', name: 'Crucial 64GB DDR5', price: 299.99, image: 'images/products/crucial-64.jpg' },
        { id: 'r4', name: 'Kingston 32GB DDR5', price: 159.99, image: 'images/products/kingston-32.jpg' }
    ],
    storage: [
        { id: 's1', name: 'Samsung 970 EVO 1TB', price: 99.99, image: 'images/products/samsung-970.jpg' },
        { id: 's2', name: 'WD Black 2TB', price: 229.99, image: 'images/products/wd-black.jpg' },
        { id: 's3', name: 'Crucial P5 2TB', price: 179.99, image: 'images/products/crucial-p5.jpg' },
        { id: 's4', name: 'Seagate 4TB HDD', price: 89.99, image: 'images/products/seagate-4tb.jpg' },
        { id: 's5', name: 'Samsung 980 PRO 2TB', price: 249.99, image: 'images/products/samsung-980.jpg' },
        { id: 's6', name: 'WD Blue 1TB SSD', price: 79.99, image: 'images/products/wd-blue.jpg' }
    ]
};

// Shopping cart
let cart = [];

// Create product card
function createProductCard(product) {
    return `
        <div class="col">
            <div class="card h-100 product-card">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <div class="d-flex align-items-center gap-2">
                        <input type="number" class="form-control quantity-input" value="1" min="1" id="qty-${product.id}">
                        <button class="btn btn-primary" onclick="addToCart('${product.id}')">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize product sections
function initializeProducts() {
    for (const [category, items] of Object.entries(products)) {
        const container = document.getElementById(category);
        if (container) {
            container.innerHTML = items.map(product => createProductCard(product)).join('');
        }
    }
}

// Find product by ID
function findProduct(id) {
    for (const category of Object.values(products)) {
        const product = category.find(p => p.id === id);
        if (product) return product;
    }
    return null;
}

// Add to cart
function addToCart(productId) {
    const product = findProduct(productId);
    const quantity = parseInt(document.getElementById(`qty-${productId}`).value);
    
    if (product && quantity > 0) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                quantity: quantity
            });
        }
        
        updateCartTable();
    }
}

// Update cart table
function updateCartTable() {
    const tbody = document.getElementById('cartBody');
    tbody.innerHTML = cart.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.id}')">Remove</button>
            </td>
        </tr>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('grandTotal').textContent = `$${total.toFixed(2)}`;
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartTable();
}

// Save to favorites
function saveToFavorites() {
    localStorage.setItem('favoriteOrder', JSON.stringify(cart));
    alert('Order saved to favorites!');
}

// Apply favorites
function applyFavorites() {
    const favoriteOrder = localStorage.getItem('favoriteOrder');
    if (favoriteOrder) {
        cart = JSON.parse(favoriteOrder);
        updateCartTable();
    } else {
        alert('No favorite order found!');
    }
}

// Buy now
function buyNow() {
    if (cart.length === 0) {
        alert('Please add items to your cart first!');
        return;
    }
    
    localStorage.setItem('currentOrder', JSON.stringify(cart));
    window.location.href = 'checkout.html';
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
    
    document.getElementById('addToFavorites').addEventListener('click', saveToFavorites);
    document.getElementById('applyFavorites').addEventListener('click', applyFavorites);
    document.getElementById('buyNow').addEventListener('click', buyNow);
});
