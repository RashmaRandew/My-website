// Wait for the DOM (HTML elements) to be fully loaded before running this script
document.addEventListener('DOMContentLoaded', () => {

    // Load the current order from localStorage
    // If nothing is stored yet, default to an empty array
    const currentOrder = JSON.parse(localStorage.getItem('currentOrder') || '[]');
    
    // Get references to the order summary container and total amount element
    const orderSummary = document.getElementById('orderSummary');
    const totalAmount = document.getElementById('totalAmount');
    
    // Initialize total to calculate the total price of the order
    let total = 0;

    // Generate HTML for each product in the order and calculate total
    orderSummary.innerHTML = currentOrder.map(item => {
        const itemTotal = item.price * item.quantity; // total for this item
        total += itemTotal; // add to total amount
        return `
            <div class="d-flex justify-content-between mb-2">
                <span>${item.name} x ${item.quantity}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>
        `;
    }).join(''); // join the array into a single string of HTML

    // Display the total amount to the user
    totalAmount.textContent = `$${total.toFixed(2)}`;

    // Select the checkout form from the page
    const form = document.getElementById('checkoutForm');
    
    // Listen for form submission event
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent default form submission (page reload)

        // Check if form fields are valid using built-in HTML validation
        if (!form.checkValidity()) {
            e.stopPropagation(); // stop the event from bubbling further
            form.classList.add('was-validated'); // show validation feedback styles
            return; // stop execution if form is invalid
        }

        // --- If the form is valid ---

        // Create a new Date object representing today's date
        const deliveryDate = new Date();

        // Add 3 days to simulate a 3-business-day delivery estimate
        deliveryDate.setDate(deliveryDate.getDate() + 3);

        // Format the delivery date to show as "Monday, January 1, 2025"
        const formattedDate = deliveryDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Prepare the success message HTML with delivery date included
        const successMessage = `
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Thank you for your purchase!</h4>
                <p>Your order has been successfully processed.</p>
                <hr>
                <p class="mb-0">Expected delivery date: ${formattedDate}</p>
            </div>
        `;

        // Replace the entire form container with the success message
        const container = document.querySelector('.container');
        container.innerHTML = successMessage;

        // Clear the cart from localStorage so user can start fresh next time
        localStorage.removeItem('currentOrder');
    });
});
