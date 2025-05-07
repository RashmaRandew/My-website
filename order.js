// ------------------------------
// Product Data (Organized by Categories)
// ------------------------------
const products = {
    processors: [
        { id: 'p1', name: 'AMD Ryzen 9 5950X', price: 799.99, image: 'https://th.bing.com/th/id/OIP.cMtShwl8EHnKLYHKm1D2sQHaHa?rs=1&pid=ImgDetMain' },
        { id: 'p2', name: 'Intel Core i9-12900K', price: 589.99, image: 'https://th.bing.com/th/id/OIP.KC6JArBsxZEMbq272Xa2KwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'p3', name: 'AMD Ryzen 7 5800X', price: 449.99, image: 'https://th.bing.com/th/id/OIP.d_eJe13ciMK6qIpbhVSp-wHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'p4', name: 'Intel Core i7-12700K', price: 409.99, image: 'https://th.bing.com/th/id/OIP.mBZAIATkLp92R7TGBB3AzgHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'p5', name: 'AMD Ryzen 5 5600X', price: 299.99, image: 'https://th.bing.com/th/id/OIP.9eNH_bEpi2DN8aB7S-1vIAHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'p6', name: 'Intel Core i5-12600K', price: 279.99, image: 'https://th.bing.com/th/id/OIP.oFJZszmCWIPxgGRHUGNAeQHaIV?w=173&h=195&c=7&r=0&o=5&dpr=1.1&pid=1.7' }
    ],
    graphicsCards: [
        { id: 'g1', name: 'NVIDIA RTX 4090', price: 1599.99, image: 'https://th.bing.com/th/id/OIP.vFH7IN1TrJT6H-qArbc5ywHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'g2', name: 'AMD RX 7900 XTX', price: 999.99, image: 'https://th.bing.com/th/id/OIP.vFH7IN1TrJT6H-qArbc5ywHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'g3', name: 'NVIDIA RTX 4080', price: 1199.99, image: 'https://th.bing.com/th/id/OIP.vFH7IN1TrJT6H-qArbc5ywHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'g4', name: 'AMD RX 7800 XT', price: 649.99, image: 'https://th.bing.com/th/id/OIP.vFH7IN1TrJT6H-qArbc5ywHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'g5', name: 'NVIDIA RTX 4070', price: 599.99, image: 'https://th.bing.com/th/id/OIP.vFH7IN1TrJT6H-qArbc5ywHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'g6', name: 'AMD RX 7700 XT', price: 449.99, image: 'https://th.bing.com/th/id/OIP.vFH7IN1TrJT6H-qArbc5ywHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' }
    ],
    motherboards: [
        { id: 'm1', name: 'ASUS ROG X570', price: 299.99, image: 'https://th.bing.com/th/id/OIP.hAZVSzowlUuE4cHzLn4QZAHaHa?w=181&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7g' },
        { id: 'm2', name: 'MSI MPG B550', price: 179.99, image: 'https://th.bing.com/th/id/OIP.hAZVSzowlUuE4cHzLn4QZAHaHa?w=181&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'm3', name: 'GIGABYTE Z690', price: 249.99, image: 'https://th.bing.com/th/id/OIP.hAZVSzowlUuE4cHzLn4QZAHaHa?w=181&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'm4', name: 'ASRock B660', price: 149.99, image: 'https://th.bing.com/th/id/OIP.hAZVSzowlUuE4cHzLn4QZAHaHa?w=181&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'm5', name: 'ASUS PRIME H610', price: 119.99, image: 'https://th.bing.com/th/id/OIP.hAZVSzowlUuE4cHzLn4QZAHaHa?w=181&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'm6', name: 'MSI PRO Z790', price: 329.99, image: 'https://th.bing.com/th/id/OIP.hAZVSzowlUuE4cHzLn4QZAHaHa?w=181&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7' }
    ],
    memory: [
        { id: 'r1', name: 'Corsair 32GB DDR4', price: 129.99, image: 'https://th.bing.com/th/id/OIP.gsy8pjx4_Isn3tIXP6dZEgHaH6?w=177&h=189&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'r2', name: 'G.SKILL 16GB DDR4', price: 79.99, image: 'https://th.bing.com/th/id/OIP.gsy8pjx4_Isn3tIXP6dZEgHaH6?w=177&h=189&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'r3', name: 'Crucial 64GB DDR5', price: 299.99, image: 'https://th.bing.com/th/id/OIP.gsy8pjx4_Isn3tIXP6dZEgHaH6?w=177&h=189&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 'r4', name: 'Kingston 32GB DDR5', price: 159.99, image: 'https://th.bing.com/th/id/OIP.gsy8pjx4_Isn3tIXP6dZEgHaH6?w=177&h=189&c=7&r=0&o=5&dpr=1.1&pid=1.7' }
    ],
    storage: [
        { id: 's1', name: 'Samsung 970 EVO 1TB', price: 99.99, image: 'https://th.bing.com/th/id/OIP.rJcBTbZYf5sisvsd4O3AJQHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 's2', name: 'WD Black 2TB', price: 229.99, image: 'https://th.bing.com/th/id/OIP.rJcBTbZYf5sisvsd4O3AJQHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 's3', name: 'Crucial P5 2TB', price: 179.99, image: 'https://th.bing.com/th/id/OIP.rJcBTbZYf5sisvsd4O3AJQHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 's4', name: 'Seagate 4TB HDD', price: 89.99, image: 'https://th.bing.com/th/id/OIP.rJcBTbZYf5sisvsd4O3AJQHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 's5', name: 'Samsung 980 PRO 2TB', price: 249.99, image: 'https://th.bing.com/th/id/OIP.rJcBTbZYf5sisvsd4O3AJQHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
        { id: 's6', name: 'WD Blue 1TB SSD', price: 79.99, image: 'https://th.bing.com/th/id/OIP.rJcBTbZYf5sisvsd4O3AJQHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' }
    ]
};

// ------------------------------
// Shopping Cart (in-memory array)
// ------------------------------
let cart = []; // Stores cart items with id, name, price, quantity

// ------------------------------
// Creates a product card using a template literal
// ------------------------------
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

// ------------------------------
// Loads all products into the HTML
// ------------------------------
function initializeProducts() {
    // Loop through each category (e.g., processors, graphicsCards)
    for (const [category, items] of Object.entries(products)) {
        const container = document.getElementById(category); // get container div for category
        if (container) {
            // For each item, create a card and insert into DOM
            container.innerHTML = items.map(product => createProductCard(product)).join('');
        }
    }
}

// ------------------------------
// Find a product by its ID in all categories
// ------------------------------
function findProduct(id) {
    for (const category of Object.values(products)) {
        const product = category.find(p => p.id === id);
        if (product) return product;
    }
    return null; // if product not found
}

// ------------------------------
// Add item to cart, or update quantity if it already exists
// ------------------------------
function addToCart(productId) {
    const product = findProduct(productId); // get product details
    const quantity = parseInt(document.getElementById(`qty-${productId}`).value); // get selected quantity

    if (product && quantity > 0) {
        const existingItem = cart.find(item => item.id === productId); // check if product already in cart

        if (existingItem) {
            existingItem.quantity += quantity; // update quantity
        } else {
            cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                quantity: quantity
            });
        }

        updateCartTable(); // refresh cart table
    }
}

// ------------------------------
// Update cart table in the UI
// ------------------------------
function updateCartTable() {
    const tbody = document.getElementById('cartBody'); // tbody in the cart table

    // Replace table rows with current cart items
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

    // Calculate total amount
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('grandTotal').textContent = `$${total.toFixed(2)}`;
}

// ------------------------------
// Remove a product from the cart by ID
// ------------------------------
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId); // keep all items except the one to remove
    updateCartTable(); // refresh table
}

// ------------------------------
// Save current cart to localStorage as 'favoriteOrder'
// ------------------------------
function saveToFavorites() {
    localStorage.setItem('favoriteOrder', JSON.stringify(cart)); // convert array to JSON string
    alert('Order saved to favorites!');
}

// ------------------------------
// Load favorite order from localStorage and apply to cart
// ------------------------------
function applyFavorites() {
    const favoriteOrder = localStorage.getItem('favoriteOrder'); // get JSON string

    if (favoriteOrder) {
        cart = JSON.parse(favoriteOrder); // convert string back to array
        updateCartTable(); // show it in the table
    } else {
        alert('No favorite order found!');
    }
}

// ------------------------------
// Save cart to localStorage and go to checkout page
// ------------------------------
function buyNow() {
    if (cart.length === 0) {
        alert('Please add items to your cart first!');
        return;
    }

    localStorage.setItem('currentOrder', JSON.stringify(cart)); // store cart in localStorage
    window.location.href = 'checkout.html'; // go to checkout page
}



// ------------------------------
// Run when page loads
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts(); // show all products

    // Add click handlers to buttons
    document.getElementById('addToFavorites').addEventListener('click', saveToFavorites);
    document.getElementById('applyFavorites').addEventListener('click', applyFavorites);
    document.getElementById('buyNow').addEventListener('click', buyNow);
});
