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

yaml
Copy code

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
Install dependencies:

bash
Copy code
npm install
Start server:

bash
Copy code
node server.js
Visit in browser:

arduino
Copy code
http://localhost:3000
💡 Example Usage
Fill:

makefile
Copy code
Name: Royal
Email: royal@example.com
Click Add User.

✅ The user will instantly appear in the list below without page refresh.

