document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const tasksList = document.getElementById("tasks");

  createTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (newTaskDescription.value.trim()) {
      const newTask = document.createElement("li");
      newTask.textContent = newTaskDescription.value.trim();
      tasksList.appendChild(newTask);
      newTaskDescription.value = "";
    }
  });
});
