// ==========================================
// Product Listing Page Logic Engine (app.js)
// ==========================================

// 1. URL Parameters Extraction
const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category"); // Isse hume category variable ki value ("mobile") milegi.
console.log("Selected Category:", selectedCategory);

// 2. Products array ko Filter Karna:
// Agar user ne koi specific category choose ki hai, to products array me se sirf wahi items filter karenge.
// Agar koi category select nahi ki (yani selectedCategory null hai), to saare products show honge.
// .toLowerCase() isliye use kiya hai taaki casing (e.g., 'Mobile' vs 'mobile') matches me issue na kare.
const filteredProducts = selectedCategory
    ? products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase())
    : products;

console.log("Filtered Products Count:", filteredProducts.length);

// 3. Dynamic Products Display (DOM Manipulation):
// HTML me jahan products show karne hain, us container elements ko ID se select karenge.
const container = document.getElementById("products-container");

// products array par loop chalake har product ke liye HTML card design taiyar karenge aur feed karenge.
filteredProducts.forEach(product => {
    // container.innerHTML += template string use karke hum products-container div me card append (add) kar rahe hain.
    container.innerHTML += `
            <div class="card">
                <a href="product-detail.html?id=${product.id}" style="text-decoration: none; color: inherit; height: 100%; display: flex; flex-direction: column;">
                    <!-- Product image panel -->
                    <div class="card-img-container">
                        <img src="${product.image}" alt="${product.name}">
                    </div>

                    <!-- Product Category metadata -->
                    <div class="card-meta">
                        <span class="card-category">
                            ${product.category}
                        </span>
                        <div class="card-rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                    </div>

                    <!-- Product name heading -->
                    <h3>${product.name}</h3>

                    <!-- Price and Buy option -->
                    <div class="card-price-row">
                <p>₹${product.price.toLocaleString('en-IN')}</p> <!-- toLocaleString format price into standard Indian style (e.g. 50,000) -->

                <!-- addToCart function runs on button click, passes item name -->
                <button onclick="addToCart('${product.id}')">
                    Add To Cart
                        </button>
                    </div>
                </a>
            </div>
        `;
});

function addToCart(productId){
    const cart = JSON.parse(
        localStorage.getItem("cart")
    ) || []
    cart.push(productId)

    localStorage.setItem(
        "cart", JSON.stringify(cart)
    );
    alert("product has been added to cart")
}
function countercart(){
    const cart = JSON.parse(
        localStorage.getItem("cart") ||[]
    )
    const cartcount=document.getElementById("cart-counter")
    if(cartcount){
        cartcount.textContent=cart.length
    }
}
// 4. Sidebar Active Link Highlight System:
// Jab user kisi category page par ho, to sidebar me wo category link highlighted (active tab format) hona chahiye.
const links = document.querySelectorAll(".list a");

links.forEach(link => {
    const href = link.getAttribute("href");

    // Agar link ke address (?category=mobile) me selected category match hoti hai, to active class lagaye.
    if (selectedCategory && href.includes(`category=${selectedCategory}`)) {
        console.log("Active Category Match Found:", selectedCategory);
        link.classList.add("active");
    }
});

// Agar selectedCategory empty hai (All Products view), to sidebar ke "All Products" link ko active status dein.
if (!selectedCategory) {
    const allLink = document.getElementById("alllink");
    if (allLink) {
        allLink.classList.add("active");
    }
}

countercart();