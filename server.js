const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let users = []; // temporary in-memory DB

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Render Home Page
app.get('/', (req, res) => {
  res.render('index');
});

// REST API Endpoints
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: "Invalid data" });

  users.push({ id: users.length + 1, name, email });
  res.json({ message: "User added successfully" });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
