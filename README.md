# 🛍️ Simplified E-Commerce Platform (Shopee-Like)

A full-featured, scalable, and responsive e-commerce web platform inspired by Shopee — built for small to medium sellers. This project includes essential marketplace features like product listings, seller dashboards, cart and checkout, and admin control.

## 📌 Features

### 👥 User & Authentication
- User registration and login
- Password recovery
- User roles: Buyer, Seller, Admin

### 🛒 Marketplace Core
- Product listing with CRUD functionality
- Product categories, search, and filters
- Product ratings and reviews
- Shopping cart and simple checkout flow
- Order tracking (Pending, Shipped, Completed)

### 🧑‍💼 Seller Dashboard
- Seller account management
- Product and order control panel

### 🛠️ Admin Panel
- View and manage all users, products, and orders
- Admin-only controls

### 💳 Payment Integration *(optional)*
- Integrate with PayMongo, GCash, or PayPal
- Secure checkout via tokenized payments

### 📬 Notifications
- Email or in-app alerts for order status and updates

### 📱 Mobile-Responsive UI
- Designed to work seamlessly on desktop, tablet, and mobile browsers

## 🧰 Tech Stack

| Layer        | Technology                  |
|--------------|------------------------------|
| Frontend     | Vue.js / React.js *(TBD)*    |
| Backend      | Node.js / Express.js         |
| Database     | MongoDB / MySQL *(TBD)*      |
| Auth         | JWT + Bcrypt                 |
| Payment      | PayMongo / GCash / PayPal    |
| Deployment   | Vercel / Heroku / Render     |

## 🚀 Installation

```bash
git clone https://github.com/patkyu/shopswift-hub.git
cd shopswift-hub
npm install
npm run dev
