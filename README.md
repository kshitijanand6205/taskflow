# TaskFlow 📝

TaskFlow is a **RESTful task management backend application** built using **Node.js, Express, PostgreSQL, and JWT authentication**.  
It follows **MVC architecture** and REST principles to provide a secure, scalable, and maintainable backend for user-specific task management.

---

## 🚀 Features

- User registration and login
- **JWT-based authentication & authorization**
- Secure password hashing using **bcrypt**
- Protected routes for authenticated users
- User-specific task creation and management
- CRUD operations for tasks
- Relational database design using **PostgreSQL**
- Clean and scalable **MVC architecture**

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL  
- **Authentication:** JSON Web Tokens (JWT)  
- **Security:** bcrypt  
- **Architecture:** MVC (Model–View–Controller)  
- **API Style:** RESTful APIs  

---

## 🔐 Authentication Flow

1. **Register User** → Stores hashed password in the database  
2. **Login User** → Returns a JWT token  
3. **Access Protected Routes** → Token required in request headers  

---

## 📌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT |

### Tasks (Protected)
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/tasks` | Create a task |
| GET | `/api/tasks` | Get all user tasks |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

▶️ Run Locally
1️⃣ Clone the repository
git clone https://github.com/kshitijanand6205/taskflow.git
cd taskflow/backend

2️⃣ Install dependencies
npm install

3️⃣ Create database
CREATE DATABASE taskflow;

4️⃣ Start the server
npm run dev


Server will run at:

http://localhost:5000

---

👤 Author

Kshitij Anand
GitHub: https://github.com/kshitijanand6205

📄 License

This project is licensed under the MIT License.





