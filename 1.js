let currentIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("myslides");
    for (let slide of slides) {
        slide.style.display = "none";
    }
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = "block";
    setTimeout(showSlides, 1500);
}

document.getElementById('myhome').addEventListener('click', function() {
    document.getElementById('home').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('myabout').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('mysweets').addEventListener('click', function() {
    document.getElementById('sweets').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('mycontact').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('myfeedback').addEventListener('click', function() {
    document.getElementById('feedback').scrollIntoView({
        behavior: 'smooth'
    });
});
function addToCart(itemName, price) {
    // Create a new list item for the cart
    var cartItem = document.createElement("li");
    cartItem.textContent = itemName + " - $" + price;

    // Append the new item to the cart list
    var cartList = document.getElementById("cart-items");
    cartList.appendChild(cartItem);

    // Update the total price
    var totalElement = document.getElementById("total");
    var currentTotal = parseFloat(totalElement.textContent);
    var newTotal = currentTotal + price;
    totalElement.textContent = newTotal.toFixed(2);
}
function resetCart() {
    // Clear the cart items
    var cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    // Reset the total price
    var totalElement = document.getElementById("total");
    totalElement.textContent = "0.00";
}