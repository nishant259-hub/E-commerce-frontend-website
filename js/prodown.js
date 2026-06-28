const params = new URLSearchParams(window.location.search)
const selectid = params.get("id")
const ratingVal = Number((Math.random()*2+3) .toFixed(1));
console.log(ratingVal)
const reviewsCount = Math.floor((Math.random()*1000 +100) .toFixed(0));
console.log(reviewsCount)
let starsHtml = ""
for(i=1; i<=ratingVal; i++){
    if(ratingVal<=i){
        starsHtml+=`<i class="fa-regular fa-star" style="color:gold"></i>`
    }else{
        starsHtml+=`<i class="fa-solid fa-star" style="color:gold"></i>`
    }
}
console.log(starsHtml)


const product = products.find(
    product => product.id == selectid
   
)

//price
let formattedPrice= product.price
let formattedMrp = formattedPrice*1.20
const discountPercent = 20
const specs = getCategorySpecs(product)
console.log(specs)
const container = document.getElementById("detailpage")
     container.innerHTML = `
          <!-- Left Column: Media Gallery -->
        <div class="image-column">
            <div class="bigimage">
                <img src="${product.image}" id="main-product-img" alt="${product.name}">
            </div>
            <div class="image-gallery-thumbs">
                <div class="thumb-item active" onclick="changeImage('${product.image}', this)">
                    <img src="${product.image}" alt="Angle 1">
                </div>
                <div class="thumb-item" onclick="changeImage('${product.image}', this, 'grayscale(15%) brightness(105%)')">
                    <img src="${product.image}" style="filter: grayscale(15%) brightness(105%);" alt="Angle 2">
                </div>
                <div class="thumb-item" onclick="changeImage('${product.image}', this, 'hue-rotate(30deg)')">
                    <img src="${product.image}" style="filter: hue-rotate(30deg);" alt="Angle 3">
                </div>
            </div>
        </div>

        <!-- Right Column: Product Metadata -->
        <div class="imagedetail">
            <!-- Badges Row -->
            <div class="meta-badges">
                <span class="category-badge">${product.category}</span>
                <span class="stock-badge"><i class="fa-solid fa-circle-check"></i> In Stock</span>
            </div>

            <p class="brand-name">${product.brand}</p>
            <h1 class="product-title">${product.name}</h1>

            <!-- Ratings Row -->
            <div class="rating-row">
                <div class="stars">${starsHtml}</div>
                <span class="review-count"><b>${ratingVal}</b> (${reviewsCount} customer reviews)</span>
            </div>

            <!-- Price Container -->
            <div class="price-container">
                <div class="pricing-row">
                    <span class="deal-price">₹${formattedPrice}</span>
                    <span class="mrp-price">M.R.P. ₹${formattedMrp}</span>
                    <span class="discount-tag">${discountPercent}% OFF</span>
                </div>
                <span class="tax-info">Inclusive of all taxes. Free delivery tomorrow on orders over ₹499.</span>
            </div>

            <!-- Description -->
            <div class="about-product">
                <h3>Product Overview</h3>
                <p>${product.about}</p>
            </div>

            <!-- Product Specs Table -->
            <div class="product-specs">
                <div class="product-specs-title">Product Details</div>
                <div class="specs-grid">
                    ${specs}
                </div>
            </div>

            <!-- Quantity Selector Section -->
            <div class="quantity-container">
                <span class="quantity-label">Quantity:</span>
                <div class="qty-spinner">
                    <button class="qty-btn" id="qty-minus" onclick="adjustQty(-1)"><i class="fa-solid fa-minus"></i></button>
                    <input type="text" class="qty-val" id="product-qty" value="1" readonly>
                    <button class="qty-btn" id="qty-plus" onclick="adjustQty(1)"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>

            <!-- Checkout and Add Actions -->
            <div class="action-buttons-row">
                <button class="action-btn btn-add-cart" id="add-to-cart-btn" onclick="handleAddToCart(${product.id})">
                    <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                </button>
                <button class="action-btn btn-buy-now" id="buy-now-btn" onclick="handleBuyNow()">
                    <i class="fa-solid fa-bolt"></i> Buy Now
                </button>
            </div>

            <!-- Logistics Trust Badges -->
            <div class="delivery-features">
                <div class="feature-item">
                    <i class="fa-solid fa-truck-fast"></i>
                    <span class="feature-title">Fast Delivery</span>
                    <span class="feature-desc">By tomorrow afternoon</span>
                </div>
                <div class="feature-item">
                    <i class="fa-solid fa-arrows-rotate"></i>
                    <span class="feature-title">7 Days Replacement</span>
                    <span class="feature-desc">Hassle free replacement</span>
                </div>
                <div class="feature-item">
                    <i class="fa-solid fa-shield-halved"></i>
                    <span class="feature-title">1 Year Warranty</span>
                    <span class="feature-desc">Manufacturer warranty</span>
                </div>
            </div>
        </div>
    `;



//product catogery wise speces

// Generate Specifications Grid based on Category
function getCategorySpecs(prod) {
    const cat = prod.category.toLowerCase();
    
    let specs = `
        <span class="spec-label">Brand</span><span class="spec-val">${prod.brand}</span>
        <span class="spec-label">Category</span><span class="spec-val">${prod.category}</span>
    `;

    if (cat.includes("computer") || cat.includes("laptop")) {
        specs += `
            <span class="spec-label">Processor</span><span class="spec-val">Intel i7 / Ryzen 7 Core</span>
            <span class="spec-label">Memory</span><span class="spec-val">16 GB DDR5 RAM</span>
            <span class="spec-label">Storage Capacity</span><span class="spec-val">512 GB NVMe SSD</span>
            <span class="spec-label">OS System</span><span class="spec-val">Windows 11 Home Edition</span>
        `;
    } else if (cat.includes("mobile")) {
        specs += `
            <span class="spec-label">Connectivity</span><span class="spec-val">5G Dual Network Enabled</span>
            <span class="spec-label">Capacity</span><span class="spec-val">128 GB Storage Space</span>
            <span class="spec-label">RAM Memory</span><span class="spec-val">8 GB High Speed RAM</span>
            <span class="spec-label">Power Unit</span><span class="spec-val">5000 mAh High Density Battery</span>
        `;
    } else if (cat.includes("watch")) {
        specs += `
            <span class="spec-label">Type</span><span class="spec-val">Digital Health Wearable</span>
            <span class="spec-label">Strap Material</span><span class="spec-val">Premium Sweat-Proof Silicon</span>
            <span class="spec-label">Water Resistance</span><span class="spec-val">IP68 up to 50m</span>
            <span class="spec-label">Compatible OS</span><span class="spec-val">Android 8.0 & iOS 12+</span>
        `;
    } else if (cat.includes("headphone")) {
        specs += `
            <span class="spec-label">Type</span><span class="spec-val">Wireless Acoustic Headset</span>
            <span class="spec-label">Battery Capacity</span><span class="spec-val">Up to 30 Hours Playback</span>
            <span class="spec-label">Acoustics Driver</span><span class="spec-val">40mm Dynamic Bass Drivers</span>
            <span class="spec-label">Charging System</span><span class="spec-val">Type-C Fast Charge support</span>
        `;
    } else if (cat.includes("footwear")) {
        specs += `
            <span class="spec-label">Upper Material</span><span class="spec-val">Premium Mesh fabric</span>
            <span class="spec-label">Sole Construction</span><span class="spec-val">Anti-slip Grip Rubber</span>
            <span class="spec-label">Closing Mechanism</span><span class="spec-val">Adjustable Laces</span>
        `;
    } else {
        // Clothes categories and generic specs
        specs += `
            <span class="spec-label">Material Composition</span><span class="spec-val">100% Breathable Cotton</span>
            <span class="spec-label">Style Pattern</span><span class="spec-val">Classic Regular Fit Solid Color</span>
            <span class="spec-label">Washing Instructions</span><span class="spec-val">Safe for Machine Wash</span>
        `;
    }
    
    return specs;
}

const relatedProduct = products.filter(
    p => p.category===product.category && p.id!==product.id
)
let onlyprod = relatedProduct.slice(0,4);

console.log(relatedProduct.slice(0,4));

const relatedproduct = document.getElementById("related-products-container")
onlyprod.forEach(product =>{
    relatedproduct.innerHTML +=`
     <div class="card">
                <a href="product-detail.html?id=${product.id}" style="text-decoration: none; color: inherit;">
                    <div class="card-img-container">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="card-meta">
                        <span class="card-category">${product.category}</span>
                    </div>
                    <h3>${product.name}</h3>
                    <div class="card-price-row">
                        <p>₹${product.price}</p>
                        <button class="action-btn-small" style="padding: 8px 16px; background-color: var(--primary-color); border: none; border-radius: 4px; color: white; font-weight: 700; font-size: 12px; cursor: pointer; transition: background var(--transition-speed);"
                         onclick="event.preventDefault(); addRelatedToCart('${product.id}', 1)">
                            Add +
                        </button>
                    </div>
                </a>
            </div>
`
});
const breadcrumbCat = document.getElementById("breadcrumb-category")
breadcrumbCat.innerText = `${product.category}`

const breadcrumbname = document.getElementById("breadcrumb-product")
breadcrumbname.innerText = `${product.name}`

function handleBuyNow(){
   let cart = JSON.parse(
    localStorage.getItem("cart")
   ) || [];
    
   cart.push(product.id)
  
   localStorage.setItem("cart",
    JSON.stringify(cart)
   );
   window.location.href="checkout.html"
}

window.changeImage = function(imagesrc){
    document.getElementById("main-product-img").src = imagesrc;
}

function addRelatedToCart(productId){
    const cart = JSON.parse(
        localStorage.getItem("cart")
    ) || []
    cart.push(productId)

    localStorage.setItem(
        "cart", JSON.stringify(cart)
    );
    alert("added to cart")
    window.location.href="checkout.html"
}
countercart();