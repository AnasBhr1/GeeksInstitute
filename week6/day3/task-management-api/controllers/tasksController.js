const fs = require('fs');
const path = require('path');
const taskFilePath = path.join(__dirname, '../tasks.json');

// Helper function to read tasks from JSON file
const readTasksFromFile = () => {
    try {
        const data = fs.readFileSync(taskFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading tasks from file:', err);
        return [];
    }
};

// Helper function to write tasks to JSON file
const writeTasksToFile = (tasks) => {
    try {
        fs.writeFileSync(taskFilePath, JSON.stringify(tasks, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing tasks to file:', err);
    }
};

// Controller to get all tasks
const getAllTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.json(tasks);
};

// Controller to get task by ID
const getTaskById = (req, res) => {
    const tasks = readTasksFromFile();
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

// Controller to create a new task
const createTask = (req, res) => {
    const { title, description } = req.body;
    
    // Validation
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const tasks = readTasksFromFile();
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        completed: false
    };
    tasks.push(newTask);
    writeTasksToFile(tasks);

    res.status(201).json(newTask);
};

// Controller to update task by ID
const updateTask = (req, res) => {
    const tasks = readTasksFromFile();
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    const { title, description, completed } = req.body;

    if (title) task.title = title;
    if (description) task.description = description;
    if (completed !== undefined) task.completed = completed;

    writeTasksToFile(tasks);
    res.json(task);
};

// Controller to delete task by ID
const deleteTask = (req, res) => {
    const tasks = readTasksFromFile();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    writeTasksToFile(tasks);
    res.status(204).send();
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
