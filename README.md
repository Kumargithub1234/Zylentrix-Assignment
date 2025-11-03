# 🧩 Zylentrix Task Management System

A simple and functional **MERN Stack** project that allows users to register, log in, and manage their personal tasks efficiently.  
Each user can create, view, update, and delete their own tasks — stored securely in MongoDB.

## 🚀 Features

- 🧾 **User Authentication** (Login / Signup with MongoDB)
- 🔒 **Protected Dashboard** (accessible only after login)
- 🗂️ **Task Management**
  - Add new tasks
  - Edit existing tasks
  - Delete tasks
  - Filter tasks by status
- 📅 **Task Deadlines**
- 💅 **TailwindCSS UI** for a clean, modern design


## 🛠️ Tech Stack

**Frontend:** React.js, Axios, TailwindCSS  
**Backend:** Node.js, Express.js, Mongoose  
**Database:** MongoDB Atlas  

---

## 📁 Folder Structure
zylentrix/
│
├── backend-zylentrix/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── userController.js
│ │ └── taskController.js
│ ├── models/
│ │ ├── userModel.js
│ │ └── taskModel.js
│ ├── routes/
│ │ ├── userRoutes.js
│ │ └── taskRoutes.js
│ └── index.js
│
├── frontend-zylentrix/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Home.js
│ │ │ ├── Login.js
│ │ │ ├── Signup.js
│ │ │ ├── Dashboard.js
│ │ │ └── TaskForm.js
│ │ └── App.js
│ └── package.json
│
└── README.md

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone <your-github-repo-link>
cd zylentrix-task-dashboard

2️⃣ Setup the Backend
cd backend
npm install


Create a .env file inside /backend and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run the backend server:

nodemon index.js

3️⃣ Setup the Frontend
cd ../frontend
npm install
npm run dev


Frontend runs on http://localhost:5173
Backend runs on http://localhost:5000

📘 API Endpoints
👤 User Routes
Method	Endpoint	Description
POST	/api/users/auth/signup	Register new user
POST	/api/users/auth/login	Login user
✅ Task Routes
Method	Endpoint	Description
POST	/api/tasks/create	Create a new task
GET	/api/tasks/:userId	Get all user tasks
PUT	/api/tasks/update/:id	Update task by ID
DELETE	/api/tasks/delete/:id	Delete task by ID
👨‍💻 Author

Kumar Damera
📧 damerakumar123@gmail.com

📞 9550755343

🏁 Future Improvements

JWT Authentication Middleware

Task completion percentage tracking

Deploy frontend (Vercel) & backend (Render)

📄 License

This project was developed as part of a Zylentrix Assignment purpose.

