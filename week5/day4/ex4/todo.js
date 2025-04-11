// todo.js
export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({ task, completed: false });
    }
  
    completeTask(index) {
      if (this.tasks[index]) {
        this.tasks[index].completed = true;
      }
    }
  
    listTasks() {
      this.tasks.forEach((t, i) => {
        const status = t.completed ? "✅ Done" : "❌ Not done";
        console.log(`${i + 1}. ${t.task} - ${status}`);
      });
    }
  }
  