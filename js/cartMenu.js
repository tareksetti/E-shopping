let cartProductDivDOM = document.querySelector('.carts-products div');
let shoppingCartIcon = document.querySelector('.shoppingCart');
let cartProductMenu = document.querySelector('.carts-products');
let badgeDOM = document.querySelector('.badge');


//check if there is item in the local storage

let addedItem = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : [];

if (addedItem) {
    addedItem.map(item => {
        cartProductDivDOM.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });
    badgeDOM.style.display = "block";
    badgeDOM.innerHTML += addedItem.length;
}


//Open cart menu
function openCartMenu() {
    if (cartProductDivDOM.innerHTML != "") {
        if (cartProductMenu.style.display == "block") {
            cartProductMenu.style.display = "none";
        } else {
            cartProductMenu.style.display = "block";
        }
    }

}


//Open cart menu
shoppingCartIcon.addEventListener('click', openCartMenu);