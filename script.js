// Função para adicionar uma nova tarefa
function addTask() {
    let input = document.getElementById("taskInput"); // Captura o campo de entrada de texto
    let taskText = input.value.trim(); // Obtém o valor digitado e remove espaços extras

    if (taskText === "") return; // Se o campo estiver vazio, a função para aqui

    let li = document.createElement("li"); // Cria um novo elemento <li> para a lista
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">X</button>`; // Adiciona o texto da tarefa e um botão de remoção

    // Adiciona um evento de clique ao item da lista para marcar como concluído
    li.addEventListener("click", function() {
        this.classList.toggle("done"); // Alterna a classe "done" para riscar ou não a tarefa
    });

    document.getElementById("taskList").appendChild(li); // Adiciona o item <li> à lista de tarefas
    input.value = ""; // Limpa o campo de entrada após adicionar a tarefa
}

// Função para remover uma tarefa
function removeTask(button) {
    button.parentElement.remove(); // Remove o elemento pai do botão (o <li> da tarefa)
}
