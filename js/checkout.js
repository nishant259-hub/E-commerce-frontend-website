const cart=JSON.parse(
    localStorage.getItem("cart") 
) ||[]



const cartProduct = products.filter(
    product => cart.includes(product.id)
)
console.log(cartProduct)


let totalprice = 0;
cartProduct.forEach(product => {
    totalprice += product.price
});
console.log(totalprice);

const buyproducts = document.getElementById("buyproduct")

cartProduct.forEach(product => {
    buyproducts.innerHTML += `
<div class="checkout-section">
    <img src="${product.image}">
    <div class="proddetail">
        <h3>${product.name}</h3>
        <p>₹${product.price.toLocaleString('en-IN')}</p>
        <button class="remove-btn" onClick="removeFromcart(${product.id})">🥡Remove<button>
    </div>
</div>
`;
});

function removeFromcart(productId){

     console.log("Remove clicked:", productId);

   let cart = JSON.parse(
    localStorage.getItem("cart")
   ) || []


   console.log("Before:", cart);

    cart = cart.filter(
      id => id != productId
   );
   console.log("After:", cart);

   localStorage.setItem(
    "cart",
    JSON.stringify(cart)
   )
   console.log(
   JSON.parse(localStorage.getItem("cart"))
);
location.reload();
}

const amounttopay= document.getElementById("amounttopay");
amounttopay.innerHTML = `
    <div class="totalprice"> <h4>Amount to pay</h4><br>
      <p>₹${totalprice}</p>
      <button onclick="paynow()">Pay Now </button>
    </div>
`
function paynow (){
        const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(15, 23, 42, 0.75)";
    overlay.style.backdropFilter = "blur(8px)";
    overlay.style.zIndex = "10000";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.animation = "fadeIn 0.3s ease forwards";

    overlay.innerHTML = `
        <div style="background: white; padding: 40px; border-radius: 12px; text-align: center; max-width: 450px; width: 90%; box-shadow: var(--shadow-lg); animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;">
            <i class="fa-solid fa-circle-check" style="font-size: 64px; color: #2e7d32; margin-bottom: 20px;"></i>
            <h2 style="font-weight: 800; color: var(--text-dark); font-size: 24px; margin-bottom: 10px;">Order Placed Successfully!</h2>
            <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 25px; line-height: 1.6;">Thank you for shopping with us. Your express payment has been processed.</p>
            <button id="close-checkout-btn" style="padding: 12px 24px; background-color: var(--primary-color); border: none; border-radius: 6px; font-weight: 700; color: white; cursor: pointer; transition: background var(--transition-speed);" onclick="window.location.href='index.html'">
                Continue Shopping
            </button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    localStorage.removeItem("cart");
}

countercart();