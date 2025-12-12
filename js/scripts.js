let money_to_pay = 0
let number_i_donated = 0

const gallery_page = document.getElementById("gallery_page");
const dinner_1 = document.getElementById("dinner_1");
const shopping_cart = document.getElementById("shopping_cart");
const checkout_page = document.getElementById("checkout_page");
const thanksPage = document.getElementById("thanksPage");

function homeButton(clickedButton) {
    console.log(clickedButton);
    checkout_page.classList.add("d-none");
    gallery_page.classList.remove("d-none");
    shopping_cart.classList.add("d-none");
}
function openCart(clickedButton) {
    console.log(clickedButton);
    gallery_page.classList.add("d-none");
    shopping_cart.classList.remove("d-none");
    checkout_page.classList.add("d-none");
    if (number_i_donated == 0) {
        console.log("works");
        document.getElementById("checkout").classList.add("disabled");
    } else {
        document.getElementById("checkout").classList.remove("disabled");
    }
}
function checkout(clickedButton) {
    console.log(clickedButton);
    shopping_cart.classList.add("d-none");
    checkout_page.classList.remove("d-none");
}
function moveToCart(clickedButton) {
    console.log(clickedButton.id);
    const clicked_id = document.getElementById(clickedButton.id);
    clicked_id.classList.remove("btn-primary");
    clicked_id.classList.add("btn-secondary");
    clicked_id.classList.add("disabled");
    let item = clickedButton.parentNode.querySelector(".card-title").textContent;
    let textNode = document.createTextNode(item);
    let td = document.createElement("td");
    let tr = document.createElement("tr");
    tr.appendChild(td);
    td.appendChild(textNode);
    let price = clickedButton.parentNode.querySelector(".card-text").textContent;
    let td_price = document.createElement("td");
    let textPrice = document.createTextNode(price);
    let td_remove = document.createElement("td");
    const remove_button = document.createElement("div");
    remove_button.innerHTML = "<button class='btn btn-danger' onclick='removeFromCart(this)'>X</button>";
    td_remove.appendChild(remove_button);
    td_price.appendChild(textPrice);
    tr.appendChild(td_price);
    tr.appendChild(td_remove);
    document.getElementById("table").appendChild(tr);
    let price_str = clickedButton.parentNode.querySelector(".card-text").textContent.toString().slice(0, -1);
    money_to_pay += Number(price_str);
    number_i_donated += 1;
    let tax_price = money_to_pay + (money_to_pay / 100 * 20);
    document.getElementById("total_price_position").innerText = money_to_pay.toString() + "€ " + "--- Tax included: " + tax_price.toString() + "€";


    if (number_i_donated >= 3) {
        document.getElementById("thank_you").classList.remove("d-none");

    } else {
        document.getElementById("thank_you").classList.add("d-none");

    }


    console.log(clickedButton.id)
    let td_id_div = document.createElement("td");
    const id_div = document.createElement("div");
    id_div.innerHTML = `<p class='d-none'>${clickedButton.id}</p>`;
    td_id_div.appendChild(id_div);
    tr.appendChild(td_id_div);
}
function removeFromCart(clickedButton) {
    console.log(clickedButton);
    number_i_donated -= 1;
    let price = clickedButton.parentNode.parentNode.parentNode.children.item(1);
    let price_number = Number(price.textContent.slice(0, -1));
    money_to_pay -= price_number;
    clickedButton.parentNode.parentNode.parentNode.classList.add("d-none");
    let tax_price = money_to_pay + money_to_pay / 100 * 20
    document.getElementById("total_price_position").innerText = money_to_pay.toString() + "€ " + "--- Tax included: " + tax_price.toString() + "€";


    if (number_i_donated == 0) {
        console.log("works");
        document.getElementById("checkout").classList.add("disabled");
    } else {
        document.getElementById("checkout").classList.remove("disabled");
    }
    if (number_i_donated >= 3) {
        document.getElementById("thank_you").classList.remove("d-none");

    } else {
        document.getElementById("thank_you").classList.add("d-none");

    }


    let path_to_id_rm = clickedButton.parentNode.parentNode.parentNode.children.item(3).children.item(0).children.item(0)
    console.log(path_to_id_rm)
    let id = path_to_id_rm.textContent
    document.getElementById(id).classList.remove("btn-secondary")
    document.getElementById(id).classList.remove("disabled")
    document.getElementById(id).classList.add("btn-primary")
}

// from Bootstrp:
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    const cvv = document.getElementById("cvv")



    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')

        }, false)
    })
})()
