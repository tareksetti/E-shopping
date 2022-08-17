
let productsDOM = document.querySelector('.products');
let noProductsDOM = document.querySelector('.noProducts');




function drawFavoriteProductsUI(allProducts = []) {


    if (JSON.parse(localStorage.getItem('productsFavorite')).length === 0)
        noProductsDOM.innerHTML = "There is no items";


    let products = JSON.parse(localStorage.getItem('productsFavorite')) || allProducts;
    let productsUI = products.map((item) => {
        return `
        <div class="product-item">
        <img src="${item.imageUrl}" class="product-item-img" alt="image">
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <span> Size: ${item.size}</span><br>
            <span> Quantity: ${item.qty}</span>

        </div>
        <div class="product-item-actions">
            <button class="Add-to-cart" onclick="removeItemFromCart(${item.id})" >Remove from  favorite</button>
           
        </div>

    </div>
        
        `
    });

    productsDOM.innerHTML = productsUI.join("");

}

drawFavoriteProductsUI();


function removeItemFromCart(id) {
    let productsInCart = localStorage.getItem('productsFavorite')
    if (productsInCart) {
        let items = JSON.parse(productsInCart);
        let filteredItems = items.filter((item) => item.id !== id);


        localStorage.setItem('productsFavorite', JSON.stringify(filteredItems));
        drawFavoriteProductsUI(filteredItems);
    }
}

