let money_to_pay = 0

const gallery_page = document.getElementById("gallery_page");
const dinner_1 = document.getElementById("dinner_1");
const shopping_cart = document.getElementById("shopping_cart");
const checkout_page = document.getElementById("checkout_page");

function homeButton(clickedButton) {
    console.log(clickedButton);
    checkout_page.classList.add("d-none")
    gallery_page.classList.remove("d-none")
    shopping_cart.classList.add("d-none")
}
function openCart(clickedButton) {
    console.log(clickedButton);
    gallery_page.classList.add("d-none")
    shopping_cart.classList.remove("d-none")
    checkout_page.classList.add("d-none")
}
function checkout(clickedButton) {
    console.log(clickedButton);
    shopping_cart.classList.add("d-none");
    checkout_page.classList.remove("d-none")
}
function moveToCart(clickedButton) {
    console.log(clickedButton)
    dinner_1.classList.remove("btn-primary");
    dinner_1.classList.add("btn-secondary");
}