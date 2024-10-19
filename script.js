document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = ""; // Limpar o campo de entrada
    }
});

function addTask(taskText) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    li.textContent = taskText;

    // Marcar como concluído ao clicar
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Remover tarefa
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.classList.add("remove"); // Adiciona a classe "remove" ao botão
    removeButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Evitar que o clique no botão marque a tarefa como concluída
        taskList.removeChild(li);
    });

    li.appendChild(removeButton); // Adiciona o botão ao elemento de lista
    taskList.appendChild(li); // Adiciona o elemento de lista à lista
}