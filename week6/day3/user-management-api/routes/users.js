const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

// Register a user
router.post('/register', userController.registerUser);

// Login a user
router.post('/login', userController.loginUser);

// Get all users
router.get('/', userController.getAllUsers);

// Get a user by ID
router.get('/:id', userController.getUserById);

// Update a user by ID
router.put('/:id', userController.updateUser);

module.exports = router;
