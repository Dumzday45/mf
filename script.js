const products = [

    {
        name: "MaraFresh Toilet Wash",
        price: 2000,
        quantity: 0
    },

     {
        name: "MaraFresh Multipurpose liquid soap",
        price: 2000,
        quantity: 0
    },

     {
        name: "MaraFresh Izal",
        price: 1500,
        quantity: 0
    },

     {
        name: "MaraFresh Toilet wash",
        price: 2000,
        quantity: 0
    },

     {
        name: "MaraFresh Tiles Wash",
        price: 3000,
        quantity: 0
    },

     {
        name: "MaraFresh Bleach",
        price: 1000,
        quantity: 0
    },

     {
        name: "Air Freshener",
        price: 1000,
        quantity: 0
    },

     {
        name: "Multi-purpose liquid soap",
        price: 700,
        quantity: 0
    },

     {
        name: "Glass cleaner",
        price: 3000,
        quantity: 0
    },
];

const addButtons =
document.querySelectorAll(".info button");

const cartBtn =
document.querySelector(".cart-btn");

const searchInput =
document.querySelector(".header-right input");

const productCards =
document.querySelectorAll(".card");

const whatsapp =
document.querySelector(".whatsapp");


const cartBox =
document.createElement("div");

cartBox.classList.add("cart-box");

document.body.appendChild(cartBox);




function updateCart(){

    let totalItems = 0;

    let totalPrice = 0;

    let cartHTML = `
    <h2>Your Cart</h2>
    `;

    products.forEach((product, index) => {

        if(product.quantity > 0){

            totalItems += product.quantity;

            totalPrice +=
            product.price * product.quantity;

            cartHTML += `
            
            <div class="cart-item">
            
            <div>
            
            <h3>${product.name}</h3>
            
            <p>
            ${product.price}
            </p>
            
            </div>
            
            <div class="quantity-box">
            
            <button onclick="decreaseQty(${index})>
            -
            </button>
            
            <span>
            ${product.quantity}
            </span>
            
            <button onclick="increaseQty(${index})">
            +
            </buton>
            
            </div>
            
            <button
            class="remove-btn"
            onclick="removeItem(${index})">
            
            Remove
            
            </button>
            
            </div>
            
            `;
        }
    });

    if(totalItems === 0){

        cartHTML += `
        <p class="empty">
        Cart is empty
        </p>
        `;

    }

    cartHTML+= `
    
    <div class="total">
    
    <h3>
    Total: ${totalPrice}
    </h3>
    
    </div>
    
    `;

    cartBox.innerHTML = cartHTML;

    cartBtn.innerHTML =
    `Cart (${totalItems})`;

}

addButtons.forEach((button, index) => {

    button.addEventListener("click", () => {
        products[index].quantity++;

        updateCart();

        button.innerText = "Added";

        button.Style.background =
        "#2e7d32";

        setTimeout(() => {

            button.innerText =
            "Add To Cart";

            button.Style.background =
            "#4caf50";

        }, 1000);
    });
});


function decreaseQty(index){

    if(products[index].quantity > 1){

        products[index].quantity--;
    }

    else{

        removeItem(index);
    }

    updateCart();
}


function removeItem(index){

    products[index].quantity = 0;

    updateCart();
}


searchInput.addEventListener("keyup", () => {

    let searchValue =
    searchInput.values.tolowerCase();

    productCards.forEach((card) => {

        let productName =
        card.querySelector("h3")
        .innerText
        .tolowerCase();

        if(productName.includes(searchValue)){

            card.style.display = "none";

        }
    });
});

if(whatsapp){

    whatsapp.addEventListener("click", (e) => {

        e.preventDefault();

        let phone =
        "2349163263866";

        let message =
        "Hello MaraFresh,%0A%0A";

        message +=
        "I want to order:%0A";

        let totalPrice = 0;

        products.forEach((product) => {

            if(product.quantity > 0){

                message +=
                `${product.name} x${product.quantity}%0A`

                totalPrice +=
                product.price * product.quantity;
            }
        });

        message +=
        `%0ATotal Price: ${totalPrice}`;

        window.open(

            `https://wa.me/${phone}?text=${message}`,

            "_blank"

        );
    });
}



updateCart();