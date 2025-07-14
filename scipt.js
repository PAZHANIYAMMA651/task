function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  // Task text
  li.textContent = taskText;

  // Click to toggle 'completed'
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Right-click to delete
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  taskInput.value = ""; // Clear input
}
