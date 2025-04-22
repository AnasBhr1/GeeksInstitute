const express = require('express');
const router = express.Router();

let todos = [];
let idCounter = 1;

// Get all to-do items
router.get('/', (req, res) => {
  res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: 'Task is required' });

  const newTodo = { id: idCounter++, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const { task } = req.body;

  const todo = todos.find((t) => t.id === todoId);
  if (!todo) return res.status(404).json({ error: 'To-do not found' });

  todo.task = task || todo.task;
  res.json(todo);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === todoId);

  if (index === -1) return res.status(404).json({ error: 'To-do not found' });

  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
