function countercart(){
    const cart = JSON.parse(
        localStorage.getItem("cart") ||[]
    )
    const cartcount=document.getElementById("cart-counter")
    if(cartcount){
        cartcount.textContent=cart.length
    }
}
countercart();