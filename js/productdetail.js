// ==========================================
// Product Detail Page Logic Engine
// ==========================================

// 1. Initial State & Elements Selection
const params = new URLSearchParams(window.location.search);
const selectedId = Number(params.get("id"));
const detailsContainer = document.getElementById("detailpage");
const relatedContainer = document.getElementById("related-products-container");

// Navbar elements
const cartBadge = document.getElementById("cart-counter");
const searchInput = document.querySelector(".search-section input");

// Initialize Navbar Cart Counter on Page Load
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
if (cartBadge) {
    cartBadge.innerText = cartCount;
}

// Navbar Search Redirect Capability
if (searchInput) {
    searchInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `product.html?search=${encodeURIComponent(query)}`;
            }
        }
    });
}

// 2. Find Product
const product = products.find(p => p.id === selectedId);

if (!product) {
    // Graceful error state if product is invalid
    document.title = "ShopEasy | Product Not Found";
    if (detailsContainer) {
        detailsContainer.style.display = "block";
        detailsContainer.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; width: 100%;">
                <i class="fa-solid fa-circle-exclamation" style="font-size: 60px; color: var(--primary-color); margin-bottom: 20px;"></i>
                <h2 style="font-size: 26px; color: var(--text-dark); margin-bottom: 10px;">Oops! Product Not Found</h2>
                <p style="color: var(--text-muted); margin-bottom: 30px; font-size: 16px;">The product you are looking for might have been removed or does not exist.</p>
                <a href="product.html" class="action-btn btn-buy-now" style="display: inline-flex; max-width: 250px; text-decoration: none; margin: 0 auto; align-items: center; justify-content: center;">
                    <i class="fa-solid fa-arrow-left"></i> Back to Shop
                </a>
            </div>
        `;
    }
    // Hide Breadcrumbs and Related Products Title
    const breadcrumbProduct = document.getElementById("breadcrumb-product");
    if (breadcrumbProduct) breadcrumbProduct.innerText = "Error";
    const relatedSection = document.querySelector(".related-section");
    if (relatedSection) relatedSection.style.display = "none";
} else {
    // 3. Populate Page Metadata and Breadcrumbs
    document.title = `ShopEasy | ${product.name}`;
    
    const breadcrumbCategory = document.getElementById("breadcrumb-category");
    const breadcrumbCategoryLink = document.getElementById("breadcrumb-category-link");
    const breadcrumbProduct = document.getElementById("breadcrumb-product");

    if (breadcrumbCategory) breadcrumbCategory.innerText = product.category;
    if (breadcrumbCategoryLink) breadcrumbCategoryLink.href = `product.html?category=${encodeURIComponent(product.category.toLowerCase())}`;
    if (breadcrumbProduct) breadcrumbProduct.innerText = product.name;

    // Generate semi-deterministic rating and review metrics based on product ID
    const ratingVal = (4.0 + (product.id % 9) * 0.1).toFixed(1);
    const reviewsCount = (45 + (product.id * 17) % 350);
    
    // Create rating stars HTML
    let starsHtml = "";
    const fullStars = Math.floor(ratingVal);
    const hasHalf = ratingVal % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHtml += `<i class="fa-solid fa-star"></i>`;
        } else if (i === fullStars + 1 && hasHalf) {
            starsHtml += `<i class="fa-solid fa-star-half-stroke"></i>`;
        } else {
            starsHtml += `<i class="fa-regular fa-star"></i>`;
        }
    }

    // Pricing details
    const formattedPrice = product.price.toLocaleString("en-IN");
    const mrpVal = Math.floor(product.price * 1.25);
    const formattedMrp = mrpVal.toLocaleString("en-IN");
    const discountPercent = 20; // 20% flat discount representation

    // Product specs based on category
    const specs = getCategorySpecs(product);

    // 4. Render Product Details
    detailsContainer.innerHTML = `
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
                <button class="action-btn btn-add-cart" id="add-to-cart-btn" onclick="handleAddToCart()">
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

    // 5. Render Related Products
    renderRelatedProducts(product);
}

// 6. Utility Helper Functions

// Image Gallery Picker
function changeImage(src, element, filter = '') {
    const mainImg = document.getElementById("main-product-img");
    if (mainImg) {
        mainImg.src = src;
        mainImg.style.filter = filter;
    }
    
    // Toggle active border class in thumbnails
    const thumbnails = document.querySelectorAll(".thumb-item");
    thumbnails.forEach(thumb => thumb.classList.remove("active"));
    element.classList.add("active");
}

// Quantity Adjustments
function adjustQty(amount) {
    const qtyInput = document.getElementById("product-qty");
    if (qtyInput) {
        let currentQty = Number(qtyInput.value);
        currentQty += amount;
        if (currentQty < 1) currentQty = 1;
        if (currentQty > 10) currentQty = 10; // Max quantity validation
        qtyInput.value = currentQty;
    }
}

// Add To Cart Core Action
function handleAddToCart() {
    const qtyInput = document.getElementById("product-qty");
    const quantity = qtyInput ? Number(qtyInput.value) : 1;

    cartCount = cartCount + quantity;
    localStorage.setItem("cartCount", cartCount);
    
    if (cartBadge) {
        cartBadge.innerText = cartCount;
    }

    // Button active visual transition feedback
    const cartBtn = document.getElementById("add-to-cart-btn");
    if (cartBtn) {
        const originalContent = cartBtn.innerHTML;
        cartBtn.style.backgroundColor = "#2e7d32"; // Green success state
        cartBtn.innerHTML = `<i class="fa-solid fa-check"></i> Added to Cart!`;
        cartBtn.disabled = true;

        setTimeout(() => {
            cartBtn.style.backgroundColor = "";
            cartBtn.innerHTML = originalContent;
            cartBtn.disabled = false;
        }, 1500);
    }

    showNotification(`${quantity} x ${product.name} added to cart!`);
}

// Buy Now Quick Checkout Simulation
function handleBuyNow() {
    const qtyInput = document.getElementById("product-qty");
    const quantity = qtyInput ? Number(qtyInput.value) : 1;

    // Fast adding to cart first
    cartCount = cartCount + quantity;
    localStorage.setItem("cartCount", cartCount);
    if (cartBadge) {
        cartBadge.innerText = cartCount;
    }

    showNotification("Redirecting to Express Checkout...");

    // Spawn checkout completion overlay modal
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
            <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 25px; line-height: 1.6;">Thank you for shopping with us. Your express payment of <b>₹${(product.price * quantity).toLocaleString('en-IN')}</b> for <b>${quantity} unit(s)</b> has been processed.</p>
            <button id="close-checkout-btn" style="padding: 12px 24px; background-color: var(--primary-color); border: none; border-radius: 6px; font-weight: 700; color: white; cursor: pointer; transition: background var(--transition-speed);" onclick="window.location.href='index.html'">
                Continue Shopping
            </button>
        </div>
    `;

    document.body.appendChild(overlay);
}

// Toast Popup Trigger Helper
function showNotification(message) {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

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

// Render Related Products Grid
function renderRelatedProducts(currProd) {
    if (!relatedContainer) return;

    // Filter products in the same category, excluding current product
    let related = products.filter(p => p.category === currProd.category && p.id !== currProd.id);

    // If we have less than 4, fill with other random items
    if (related.length < 4) {
        const extraItems = products.filter(p => p.id !== currProd.id && p.category !== currProd.category);
        const needed = 4 - related.length;
        related = related.concat(extraItems.slice(0, needed));
    } else {
        related = related.slice(0, 4); // Limit to top 4 items
    }

    relatedContainer.innerHTML = ""; // Clear loader spinner

    related.forEach(item => {
        const formattedPrice = item.price.toLocaleString("en-IN");
        relatedContainer.innerHTML += `
            <div class="card">
                <a href="product-detail.html?id=${item.id}" style="text-decoration: none; color: inherit;">
                    <div class="card-img-container">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="card-meta">
                        <span class="card-category">${item.category}</span>
                    </div>
                    <h3>${item.name}</h3>
                    <div class="card-price-row">
                        <p>₹${formattedPrice}</p>
                        <button class="action-btn-small" style="padding: 8px 16px; background-color: var(--primary-color); border: none; border-radius: 4px; color: white; font-weight: 700; font-size: 12px; cursor: pointer; transition: background var(--transition-speed);" onclick="event.preventDefault(); addRelatedToCart('${item.name.replace(/'/g, "\\'")}', 1)">
                            Add +
                        </button>
                    </div>
                </a>
            </div>
        `;
    });
}

// Independent helper function to add items directly from similar products section
function addRelatedToCart(productName, quantity) {
    cartCount = cartCount + quantity;
    localStorage.setItem("cartCount", cartCount);
    if (cartBadge) {
        cartBadge.innerText = cartCount;
    }
    showNotification(`${productName} added to cart!`);
}