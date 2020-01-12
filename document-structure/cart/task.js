const increaseQuant = Array.from(document.getElementsByClassName('product__quantity-control_inc'));
const decreaseQuant = Array.from(document.getElementsByClassName('product__quantity-control_dec'));
const addToCart = Array.from(document.getElementsByClassName('product__add'));
const cartProducts = Array.from(document.getElementsByClassName('cart__products'));
const cart = Array.from(cartProducts[0]);
console.log(cart);

increaseQuant.forEach(e => {
    e.addEventListener('click', function (){
        let targetQuantContr = this.closest('.product__quantity-controls');
        let targetValue = targetQuantContr.getElementsByClassName('product__quantity-value');
        let nowQuant = parseInt(targetValue[0].innerText);
        targetValue[0].innerText = nowQuant + 1;
    })
})

decreaseQuant.forEach(e => {
    e.addEventListener('click', function (){
        let targetQuantContr = this.closest('.product__quantity-controls');
        let targetValue = targetQuantContr.getElementsByClassName('product__quantity-value');        
        let nowQuant = parseInt(targetValue[0].innerText);
        if (nowQuant === 1) {

        } else {
            targetValue[0].innerText = nowQuant - 1;    
        }
    })
})

addToCart.forEach(e => {
    e.addEventListener('click', function () {
        let product = this.closest('.product');
        let img = Array.from(product.getElementsByTagName('img'));
        let quantity = Array.from(product.getElementsByClassName('product__quantity-value'));
        let productInCart;

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].getAttribute("data-id") === product.getAttribute("data-id")) {
                productInCart = cart[i];
            }
        }
        
        if (productInCart !== undefined) {
            
            let nowInCart = Array.from(productInCart.getElementsByClassName('cart__product-count'));
            nowInCart[0].innerText = parseInt(nowInCart[0].innerText) + parseInt(quantity[0].innerText)

        } else {
            cartProducts[0].insertAdjacentHTML("beforeEnd",`
            <div class="cart__product" data-id="${product.getAttribute("data-id")}">
                    <img class="cart__product-image" src="${img[0].src}">
                    <div class="cart__product-count">${quantity[0].innerText}</div>
            </div>
            `);
            cart.push(cartProducts[0].lastElementChild); 
        }
        

    })
})







