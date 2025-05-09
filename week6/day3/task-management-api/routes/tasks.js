const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasksController');

// Get all tasks
router.get('/', taskController.getAllTasks);

// Get task by ID
router.get('/:id', taskController.getTaskById);

// Create a new task
router.post('/', taskController.createTask);

// Update a task by ID
router.put('/:id', taskController.updateTask);

// Delete a task by ID
router.delete('/:id', taskController.deleteTask);

module.exports = router;
