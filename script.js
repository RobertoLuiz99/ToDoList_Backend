document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    li.textContent = taskText;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.classList.add("remove");
    removeButton.addEventListener("click", function(event) {
        event.stopPropagation();
        taskList.removeChild(li);
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);
}