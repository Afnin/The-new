let cart = [];
let product = [];
let Inventory = [];
let firstNameInput = document.getElementById('first');
let lastNameInput = document.getElementById('last');
let nameFirst = document.getElementById("nameFirst");
let nameLast = document.getElementById("nameLast");
let quantityInput = document.getElementById('quantityInput');
let productNameInput = document.getElementById('productNameInput');
let unitPriceInput = document.getElementById('unitPriceInput');
let stockInput = document.querySelector('#stockInput');
let register= document.getElementById('register')
let AddToCart= document.getElementById("addtoCart");
let Total = document.querySelector('#total');
let message = document.getElementById('message');
let PlasticBag = document.getElementById('PlasticBag');
let taxInput = document.getElementById('taxInput');
let productToCart = document.getElementById('product');
let lowInventoryBtn = document.querySelector('#lowInventoryBtn');

firstNameInput.addEventListener('keyup', function () {
    nameFirst.innerHTML = this.value;
});
lastNameInput.addEventListener('keyup', function(){
    nameLast.innerHTML = this.value;
});
register.addEventListener('click', function () {
    if (productNameInput.value != ""
        && unitPriceInput.value != "" && unitPriceInput.value != 0
        && stockInput.value != "" && stockInput.value != 0) {
        let item = {};
        item.productName = productNameInput.value;
        item.unitPrice = unitPriceInput.value;
        item.stock = stockInput.value;
        Inventory.push(item);
        message.innerHTML = "Successfully added " + item.productName + " !";
    } else {
        message.classList.add("error"); 
        message.innerHTML = "Please provide all product, price and quantity to proceed";
    }
});
AddToCart.addEventListener('click', function () {
    if (productToCart.value != "" && quantityInput.value != "") {

        let toCart = null; 
        for (let i=0; i < Inventory.length ;i++) {
            if (Inventory[i].productName == productToCart.value) {
                toCart = Inventory[i];
                break;
            }
        }

        if (toCart != null) {
            let cartItem = {};
            cartItem['productName'] = toCart.productName;
            cartItem['price'] = toCart.unitPrice;
            cartItem['quantity'] = quantityInput.value;
            cart.push(cartItem);
            message.innerHTML = "Successfully added " + toCart.productName + " !";
        } else {
            message.innerHTML = "Please make sure you type the right product, we cant find it";
        }
    }
    console.log(cart);
});
total.addEventListener('click', function(){
   let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total = total + (cart[i].price * cart[i].quantity);
    }   
    if (PlasticBag.checked){
        total = total + 0.15;
    }
    if (taxInput.value > 0){
        total = total + (total * taxInput.value) / 100;
    }

    message.innerHTML = "The total price is $ " + total;
});

lowInventoryBtn.addEventListener('click', function(){
    let lowInvs = [];
    for (let i=0; i < Inventory.length ; i++) {
        if (Inventory[i].stock < 10) {
            lowInvs.push(Inventory[i]);
        }
    }
    console.table(lowInvs);
});
