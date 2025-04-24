const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const register = async (req, res) => {
  const { email, username, password, first_name, last_name } = req.body;
  try {
    const hashedPwd = await bcrypt.hash(password, 10);
    const newUser = await userModel.createUser(
      { email, username, first_name, last_name },
      hashedPwd
    );
    res.status(201).json({ message: 'User registered', user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.getUserByUsername(username);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Incorrect password' });

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.status(200).json(users);
};

const getUser = async (req, res) => {
  const user = await userModel.getUserById(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const updated = await userModel.updateUserById(req.params.id, req.body);
  res.status(200).json({ message: 'User updated', user: updated });
};

module.exports = { register, login, getUsers, getUser, updateUser };
