const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const SALT_ROUNDS = 10;

async function register(req, res) {
  try {
    const { email, username, password, first_name, last_name } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ error: 'email, username, and password are required' });
    }

    const existing = await userModel.getUserByUsername(username);
    if (existing) {
      return res.status(409).json({ error: 'Username already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await userModel.createUser({
      email,
      username,
      first_name,
      last_name,
      hashedPassword
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong during registration' });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'username and password are required' });
    }

    const user = await userModel.getUserByUsername(username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const hashRecord = await userModel.getHashedPasswordByUsername(username);
    if (!hashRecord) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const match = await bcrypt.compare(password, hashRecord.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong during login' });
  }
}

async function getUsers(req, res) {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch users' });
  }
}

async function getUserById(req, res) {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch user' });
  }
}

async function updateUser(req, res) {
  try {
    const { email, first_name, last_name } = req.body;

    const updatedUser = await userModel.updateUser(req.params.id, {
      email,
      first_name,
      last_name
    });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User updated', user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not update user' });
  }
}

module.exports = {
  register,
  login,
  getUsers,
  getUserById,
  updateUser
};