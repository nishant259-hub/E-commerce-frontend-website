function handleAddToCart(productId){
    let cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];
    cart.push(productId);

    localStorage.setItem(
          "cart",
        JSON.stringify(cart)
    );

    alert("Product Added To Cart");
    console.log(cart)
}
countercart();