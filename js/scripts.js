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
    console.log(clickedButton.id);
    const clicked_id = document.getElementById(clickedButton.id)
    clicked_id.classList.remove("btn-primary");
    clicked_id.classList.add("btn-secondary");
    clicked_id.classList.add("disabled");
    let item = clickedButton.parentNode.querySelector(".card-title").textContent;
    let textNode = document.createTextNode(item+"   ");
    let td = document.createElement("td");
    let tr = document.createElement("tr");
    tr.appendChild(td);
    td.appendChild(textNode);
    let price = clickedButton.parentNode.querySelector(".card-text").textContent;
    let textPrice = document.createTextNode(price);
    td.appendChild(textPrice)
    document.getElementById("table").appendChild(tr);


}             