const fs = require('fs');
const bcrypt = require('bcryptjs');
const userConfig = require('../config/userConfig'); // Import the config file

// Helper function to read users from the JSON file
const readUsersFromFile = () => {
    try {
        const data = fs.readFileSync(userConfig.userFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading users from file:', err);
        return [];
    }
};

// Helper function to write users to the JSON file
const writeUsersToFile = (users) => {
    try {
        fs.writeFileSync(userConfig.userFilePath, JSON.stringify(users, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing users to file:', err);
    }
};

// Register a new user
const registerUser = (req, res) => {
    const { name, lastName, email, username, password } = req.body;

    if (!name || !lastName || !email || !username || !password) {
        return res.status(400).send({ message: 'Please provide all the required fields.' });
    }

    const users = readUsersFromFile();

    // Check if the username already exists
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        return res.status(400).send({ message: 'Username already exists!' });
    }

    // Hash the password before saving
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a new user object
    const newUser = {
        id: users.length + 1, // Simple ID generation
        name,
        lastName,
        email,
        username,
        password: hashedPassword
    };

    // Add new user to the list and save to the JSON file
    users.push(newUser);
    writeUsersToFile(users);

    return res.status(201).send({ message: 'User registered successfully!' });
};

// Login an existing user
const loginUser = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send({ message: 'Please provide both username and password.' });
    }

    const users = readUsersFromFile();

    // Find the user by username
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(404).send({ message: 'User not found!' });
    }

    // Compare the hashed password with the one provided
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.status(400).send({ message: 'Invalid password!' });
    }

    return res.status(200).send({ message: 'Login successful!' });
};

// Get a list of all users (for demonstration purposes)
const getAllUsers = (req, res) => {
    const users = readUsersFromFile();
    return res.status(200).json(users);
};

// Get a specific user by ID
const getUserById = (req, res) => {
    const { id } = req.params;
    const users = readUsersFromFile();

    // Find the user by ID
    const user = users.find(user => user.id === parseInt(id));
    if (!user) {
        return res.status(404).send({ message: 'User not found!' });
    }

    return res.status(200).json(user);
};

// Update user information by ID
const updateUserById = (req, res) => {
    const { id } = req.params;
    const { name, lastName, email, username, password } = req.body;

    if (!name || !lastName || !email || !username || !password) {
        return res.status(400).send({ message: 'Please provide all the required fields.' });
    }

    const users = readUsersFromFile();

    // Find the user by ID
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) {
        return res.status(404).send({ message: 'User not found!' });
    }

    // Hash the password before saving
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Update the user data
    users[userIndex] = { id: parseInt(id), name, lastName, email, username, password: hashedPassword };

    // Save updated users list to file
    writeUsersToFile(users);

    return res.status(200).send({ message: 'User information updated successfully!' });
};

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUserById
};
