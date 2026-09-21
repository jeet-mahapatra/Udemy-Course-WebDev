document.addEventListener("DOMContentLoaded" , () =>{

    const products = [
        {id:1 , name:"Product 1" , price : 20.050},
        {id:2 , name:"Product 2" , price : 40.204},
        {id:3 , name:"Product 3" , price : 10.10}
    ]


    const productList = document.querySelector("#product-list")
    // const cartItems = document.querySelector("#cart-items")
    const cartProducts = document.querySelector("#cart-products")
    const emptyCartMessage = document.querySelector("#empty-cart")
    const cartTotalMessage = document.querySelector("#cart-total")
    const totalPriceDisplay = document.querySelector("#total-price")
    const checkOutBtn = document.querySelector("#checkout-btn")

    const cart = JSON.parse(localStorage.getItem("cart")) || []

    let totalCost = 0;
    
     cart.forEach(c => {
        renderCart(c)
    });

   
    products.forEach((p)=>{
        const product = document.createElement("ul");
        product.classList.add("product")
        product.innerHTML = `<span>${p.name} => $${p.price.toFixed(2)}</span>
        <button id="${p.id}">Add To Cart</button>`;
        productList.append(product)
        
    })

    productList.addEventListener("click" , (e) =>{
        if(e.target.tagName === "BUTTON"){
            const productId = parseInt( e.target.getAttribute("id"));
            const currentProduct = products.find((p) => p.id === productId)
            cart.push(currentProduct)
            saveCart();
            renderCart(currentProduct);  
        }
        
    })

    //The error is here please solve this ===============================================================

    cartProducts.addEventListener("click" , (e) =>{
        if(e.target.tagName === "BUTTON"){
            const productId = parseInt( e.target.getAttribute("rem-id"));
            const deleteProductIndex = cart.findIndex((p) => p.id === productId)
            
            if (deleteProductIndex !== -1) {
                cart.splice(deleteProductIndex , 1)
            }
            saveCart();
            location.reload(); //to refresh the webpage
            
        }
        
    })

    checkOutBtn.addEventListener("click" , ()=>{
        finalCheckout();
        location.reload();
    })

    function saveCart(){
        localStorage.setItem("cart" , JSON.stringify(cart))
    }


    function renderCart(c){
            
            if(cart.length === 0){
                cartTotalMessage.classList.add("hidden")
                emptyCartMessage.classList.remove("hidden")
                return;
            }

            const cartProduct = document.createElement("ul");
            cartProduct.classList.add("remove")
            cartProduct.innerHTML = `<span>${c.name} => $${c.price.toFixed(2)}</span>
            <button rem-id="${c.id}">Remove</button>`;    
            cartProducts.append(cartProduct)
            totalCost += c.price
            
            totalPriceDisplay.textContent = `$${totalCost.toFixed(2)}`

            cartTotalMessage.classList.remove("hidden")
            emptyCartMessage.classList.add("hidden")      
    }

    function finalCheckout(){
        const bill = totalCost;

        localStorage.removeItem("cart");
        cart.length = 0;
        totalCost = 0;

        totalPriceDisplay.textContent = "$0.00";

        alert(`Order Confirmed. Your Bill is $${bill.toFixed(2)}`);
    }

})