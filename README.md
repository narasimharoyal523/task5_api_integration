# 🌐 Task 5: API Integration and Front-End Interaction

**Level:** Advanced  
**Objective:**  
- Create a RESTful API to handle user data (CRUD - limited to Create/Read)  
- Interact with the API using **Fetch API** on the front end  
- Dynamically update the UI with submitted data without reloading the page

---

## 🛠 Technologies Used

- HTML + CSS
- Bootstrap 5
- JavaScript (Fetch API + DOM)
- Node.js + Express.js
- EJS
- Body-parser

---

## 📁 Project Structure

task5_api_integration/ ├── views/ │ └── index.ejs ├── public/ │ └── script.js ├── server.js ├── package.json

---

## 🎯 Features

- Front-end user form: **Name + Email**
- REST API:
  - `POST /api/users` → Add new user
  - `GET /api/users` → Get all users
- Dynamic list of users rendered via DOM
- Uses **Fetch API** to send and receive data
- No page reload on submission

---

## 🖥️ How to Run

1. Open terminal and go to this folder:
   ```bash
   cd task5_api_integration
2. Install dependencies:
   ```bash
   npm install
3. Start server:
   ```bash
   node server.js
4. Visit in browser:
   ```arduino
   http://localhost:3000
💡 Example Usage
Fill:

Name: Royal
Email: royal@example.com
Click Add User.

✅ The user will instantly appear in the list below without page refresh.

