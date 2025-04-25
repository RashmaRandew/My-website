document.addEventListener('DOMContentLoaded', () => {
    // Load order from localStorage
    const currentOrder = JSON.parse(localStorage.getItem('currentOrder') || '[]');
    
    // Display order summary
    const orderSummary = document.getElementById('orderSummary');
    const totalAmount = document.getElementById('totalAmount');
    
    let total = 0;
    orderSummary.innerHTML = currentOrder.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="d-flex justify-content-between mb-2">
                <span>${item.name} x ${item.quantity}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>
        `;
    }).join('');
    
    totalAmount.textContent = `$${total.toFixed(2)}`;

    // Form validation and submission
    const form = document.getElementById('checkoutForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        // Calculate delivery date (3 business days from now)
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 3);
        const formattedDate = deliveryDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Show success message
        const successMessage = `
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Thank you for your purchase!</h4>
                <p>Your order has been successfully processed.</p>
                <hr>
                <p class="mb-0">Expected delivery date: ${formattedDate}</p>
            </div>
        `;

        // Replace form with success message
        const container = document.querySelector('.container');
        container.innerHTML = successMessage;

        // Clear cart and order from localStorage
        localStorage.removeItem('currentOrder');
    });
});
