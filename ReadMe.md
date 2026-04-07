# 🔗 URL Shortener 

A **URL Shortener** built with modern technologies.
Includes authentication, custom short links, analytics, and a beautiful UI.

---

## 🚀 Features

### 🔐 Authentication

* User Registration & Login (JWT-based)
* Protected Routes
* Persistent Sessions

### 🔗 URL Shortening

* Generate short URLs instantly
* Custom aliases (e.g., `/dhruv`)
* URL validation
* Duplicate handling

### 📊 Dashboard

* View all shortened URLs
* Click tracking (analytics)
* Copy-to-clipboard functionality
* Clean UI with Tailwind CSS

### 💎 UI/UX

* Modern glassmorphism design
* Toast notifications (no alerts)
* Loading states
* Responsive design

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router DOM
* React Hot Toast
* Lucide Icons

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* NanoID (short URL generation)

---

## 📁 Folder Structure

```
shortify/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── urlController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── URL.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── urlRoutes.js
│   ├── utils/
│   │   └── generateCode.js
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md
```

---

## 🌐 API Endpoints

### Auth

```
POST /api/auth/register
POST /api/auth/login
```

### URL

```
POST /api/url/shorten
GET /api/url/history
GET /:code (redirect)
```

