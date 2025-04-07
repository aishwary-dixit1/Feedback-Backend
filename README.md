# 🛠️ Feedback Collector Backend

This is the backend API for the Feedback Collector App. It is built using **Node.js**, **Express.js**, and **MongoDB**, and is deployed on **Render**. It supports submitting new feedback and retrieving all feedbacks.

---

## 🌐 Live API

Base URL: `https://feedback-backend-816t.onrender.com`

---

## 📌 Available Routes

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| POST   | /submit-feedback   | Submit a new feedback entry     |
| GET    | /feedbacks         | Fetch all feedback entries      |

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **CORS** enabled for frontend connection
- **Render** for deployment

---

## 📁 Project Structure

```
feedback-backend/
├── controllers/
│   └── feedbackController.js
├── lib/
│   └── db.js
├── models/
│   └── feedback.model.js
├── routes/
│   └── feedbackRoutes.js
├── .env
├── server.js
└── package.json
```

---

## 🚀 Getting Started

# Clone the repo
```bash
git clone https://github.com/yourusername/feedback-backend.git
cd feedback-backend
```

# Install dependencies
```bash
npm install
```

# Create a .env file with:
```.env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

# Start server
```bash
npm start
```

---

## 🧾 Submission Requirements Covered

- ✅ POST route to store feedback
- ✅ GET route to fetch all feedback
- ✅ Connected to MongoDB Atlas
- ✅ Deployed on Render
- ✅ CORS configured for frontend integration

---

## 🔗 Related Repositories

- **Frontend Repo:** [feedback-frontend](https://github.com/aishwary-dixit1/Feedback-Frontend)

---

## 🧑‍💻 Developer Info

**Developed by:** Aishwary Dixit  
**Submission for:** Feedback Collector Assignment  
