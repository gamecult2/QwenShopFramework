# E-commerce Site Migration to Next.js - TODO

This file tracks the migration progress from the legacy PHP application to the new Next.js 15 application.

## Core Infrastructure

- [x] **Layout:** Create a global `app/layout.tsx`.
- [x] **Bootstrap Setup:** Import Bootstrap 5 CSS and JS into the global layout.
- [ ] **Authentication:** Convert PHP session logic to Next.js middleware or NextAuth.

## Shared Components

- [x] **Navbar:** Create a reusable Navbar component (`components/Navbar.tsx`).
- [x] **Footer:** Create a reusable Footer component (`components/Footer.tsx`).
- [x] **Product Card:** Create a reusable Product Card component (`components/ProductCard.tsx`).
- [ ] **Cart Sidebar:** Create a reusable Cart Sidebar component (`components/CartSidebar.tsx`).
- [ ] **Chat Widget:** Re-implement the chat widget functionality.

## Pages

- [x] **Home Page:** Migrate `src/index.php`.
- [ ] **Product Listing Page:** Migrate `src/products.php`.
- [ ] **Product Detail Page:** Migrate `src/product.php`.
- [ ] **Cart Page:** Migrate `src/cart.php`.
- [ ] **Checkout Page:** Migrate `src/checkout.php`.
- [ ] **Login Page:** Migrate `src/login.php`.
- [ ] **Register Page:** Migrate `src/register.php`.
- [ ] **Account Page:** Migrate `src/account.php`.
- [ ] **Wishlist Page:** Migrate `src/wishlist.php`.
- [ ] **Search Results Page:** Migrate `src/search.php`.
- [ ] **About Page:** Migrate `src/about.php`.
- [ ] **Contact Page:** Migrate `src/contact.php`.
- [ ] **FAQ Page:** Migrate `src/faq.php`.

## Logic/API

- [ ] **Login/Register:** Convert PHP authentication to a Next.js API route or Server Action.
- [ ] **Fetch Products:** Convert `api/products.php` to a Next.js API route or data fetching function.
- [ ] **Add to Cart:** Convert cart logic (likely in `main.js` and PHP models) to a React Context and Server Actions.
- [ ] **Newsletter Subscription:** Convert `api/newsletter.php` to a Server Action.
- [ ] **Wishlist Logic:** Convert PHP wishlist logic to API routes/Server Actions.
- [ ] **Search Logic:** Convert PHP search logic to an API route/Server Action.
