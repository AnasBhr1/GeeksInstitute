// app.js
import { TodoList } from './todo.js';

const myList = new TodoList();

myList.addTask("Learn JavaScript modules");
myList.addTask("Write ES6 class");
myList.addTask("Test todo list app");

myList.completeTask(1); // Mark second task as complete

myList.listTasks();
