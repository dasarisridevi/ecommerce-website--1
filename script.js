let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cartItems');
    let cartTotal = document.getElementById('cartTotal');

    cartItems.innerHTML = '';
    total = 0;

    cart.forEach(item => {
        total += item.price;
        let listItem = document.createElement('li');
        listItem.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    cartTotal.textContent = total.toFixed(2);
}
    function confirmOrder() {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let address = document.getElementById('address').value;
    
        if (cart.length === 0 || !name || !email || !address) {
            alert('Please fill in all details and add items to the cart.');
            return;
        }
    
        // Here you can proceed with order confirmation, e.g., sending data to the server
        alert(`Order confirmed!\n\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nTotal: $${total.toFixed(2)}`);
        // Reset the form and cart after confirmation
        document.getElementById('orderForm').reset();
        cart = [];
        updateCart();
}

function showOrders() {
    var orderList = document.getElementById('orderList');
    orderList.style.display = 'block';
}
