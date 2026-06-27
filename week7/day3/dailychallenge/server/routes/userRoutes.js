const express = require('express');
const router = express.Router();
const fs = require('fs');
const bcrypt = require('bcrypt');

const filePath = './server/data/users.json';

// helper to read file
const getUsers = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// helper to write file
const saveUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};


//  REGISTER
router.post('/register', async (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  let users = getUsers();

  const userExists = users.find(
    u => u.username === username || u.password === password
  );

  if (userExists) {
    return res.json({ message: 'Username or password already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    name,
    lastName,
    email,
    username,
    password: hashedPassword
  };

  users.push(newUser);
  saveUsers(users);

  res.json({ message: 'User registered successfully' });
});


//  LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const users = getUsers();

  const user = users.find(u => u.username === username);

  if (!user) {
    return res.json({ message: 'User not found' });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.json({ message: 'Incorrect password' });
  }

  res.json({ message: 'Login successful' });
});


//  GET ALL USERS
router.get('/users', (req, res) => {
  const users = getUsers();
  res.json(users);
});


//  GET USER BY ID
router.get('/users/:id', (req, res) => {
  const users = getUsers();
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});


//  UPDATE USER
router.put('/users/:id', (req, res) => {
  let users = getUsers();

  const index = users.findIndex(u => u.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[index] = { ...users[index], ...req.body };

  saveUsers(users);

  res.json({ message: 'User updated' });
});

module.exports = router;