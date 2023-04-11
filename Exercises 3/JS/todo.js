const tasks = [];

const addTask = () => {
  const input = document.getElementById("task");
  const task = input.value.trim();
  if (task) {
    tasks.push(task);
    input.value = "";
    updateTaskList();
  }
};

const updateTaskList = () => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button class="deleteTask" data-index="${index}">Delete</button>`;
    taskList.appendChild(li);
  });
};

const deleteTask = (event) => {
    if (event.target.classList.contains("deleteTask")) {
      const index = event.target.dataset.index;
      tasks.splice(index, 1);  // delete 1 element at index
      updateTaskList();
    }
};
  
document.getElementById("taskList").addEventListener("click", deleteTask);  
document.getElementById("addTask").addEventListener("click", addTask);
