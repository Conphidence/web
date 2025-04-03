// Hero Section & Black Friday Section: Shop Now Button Hover Effect
document.querySelectorAll('.shop-btn').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.querySelector('.arrow').style.transform = 'translateX(5px)';
    });

    button.addEventListener('mouseout', function() {
        this.querySelector('.arrow').style.transform = 'translateX(0)';
    });
});

// Our Weekly Pick Section: Quantity Selector
let quantity = 0;
const quantityDisplay = document.getElementById('quantity');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
});

decreaseBtn.addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
});

// CTA Section: Sign Up Button Hover Effect
document.querySelector('.signup-btn').addEventListener('mouseover', function() {
    this.querySelector('.arrow').style.transform = 'translateX(5px)';
});

document.querySelector('.signup-btn').addEventListener('mouseout', function() {
    this.querySelector('.arrow').style.transform = 'translateX(0)';
});
