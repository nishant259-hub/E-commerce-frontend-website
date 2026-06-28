# 🛍️ Shopify — Modern E-Commerce Storefront

A premium, interactive, and fully responsive e-commerce web application built using **Vanilla HTML5, CSS3, and JavaScript (ES6)**. This project was developed as a clean, feature-rich demonstration of modern front-end web design practices, including rich micro-animations, glassmorphism, dynamic data rendering, and a state-managed shopping cart.

---

## 🚀 Live Demo & Repository
- **GitHub Repository**: `https://github.com/nishant259-hub/E-commerce-frontend-website`
- **Live Website**: `https://nishant259-hub.github.io/E-commerce-frontend-website/`

---

## ✨ Features

- **🏠 Interactive Home Page**: Features a stunning hero banner, category showcases, and top featured products with custom hover transitions.
- **🔍 Dynamic Product Catalog (`product.html`)**: Real-time client-side search and category filtering system to browse products instantly.
- **📄 Detailed Product View (`product-detail.html`)**: Dynamically loaded product specifications, rating visualizations, custom discount badges, and a "Similar Products" recommendation engine.
- **🛒 Fully Functional Cart (`checkout.html`)**: 
  - Add/remove items dynamically.
  - Interactive cart quantity updates.
  - Persistent state management using `localStorage` (cart items persist across page reloads).
  - Modern form validation for delivery details and payment options.
- **📞 Help & Support Center (`support.html`)**: An interactive FAQ accordion and feedback submission system.
- **📱 Responsive Layout (Mobile Friendly)**: Designed from the ground up to support desktop, tablet, and mobile screens seamlessly.

---

## 🛠️ Tech Stack

- **Markup & Layout**: HTML5 (Semantic elements)
- **Styling**: Vanilla CSS3 (Custom variables/tokens, modern flexbox/grid layouts, micro-animations)
- **Programming Logic**: Javascript (ES6+, DOM Manipulation, LocalStorage API, state synchronization)
- **Iconography & Fonts**: FontAwesome v6, Google Fonts (Outfit, Inter)

---

## 📂 Project Structure

```bash
├── css/
│   ├── index.css            # Base stylesheet, variables & utility classes
│   ├── product.css          # Styles for the product listings page
│   ├── productdetail.css    # Styles for detailed product pages
│   └── checkout.css         # Styles for cart & checkout layouts
├── js/
│   ├── count.js             # Shared state for cart counter badge
│   ├── product.js           # Central product inventory data array
│   ├── productdetail.js     # Detail page logic & recommendation builder
│   ├── checkout.js          # Cart items management, total calculator & form submission
│   ├── app.js               # General landing page logic
│   └── prodown.js           # Dynamic filter logic
├── images/                  # Localized product webp/jpg images
├── index.html               # Main Home Page
├── product.html             # Product browsing/filtering catalog
├── product-detail.html      # Individual product detail pages
├── checkout.html            # Shopping cart overview & checkout
├── support.html             # Support desk & accordion FAQs
└── .gitignore               # Excludes node_modules & OS cache files
```

---

## 💻 Running the Project Locally

No compiler or framework installation is required. Simply clone and open!

1. **Clone the Repository**:
   ```bash
   git clone <your-repository-url>
   cd "Iwd proj"
   ```

2. **Open in Browser**:
   Double click the `index.html` file, or run it using VS Code's **Live Server** extension for the best experience.
