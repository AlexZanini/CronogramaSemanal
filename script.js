// Obtém os elementos HTML necessários para a interação
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Adiciona um "event listener" ao botão "addTaskBtn" para executar a função quando o botão for clicado
addTaskBtn.addEventListener("click", function () {
  // Obtém os valores dos campos de entrada e do estado das caixas de seleção
  const taskInput = document.getElementById("task-input").value;
  const timeInput1 = document.getElementById("time-input").value;
  const timeInput2 = document.getElementById("time-input2").value;
  const segundaCheckbox = document.getElementById("checkbox-segunda").checked;
  const tercaCheckbox = document.getElementById("checkbox-terca").checked;
  const quartaCheckbox = document.getElementById("checkbox-quarta").checked;
  const quintaCheckbox = document.getElementById("checkbox-quinta").checked;
  const sextaCheckbox = document.getElementById("checkbox-sexta").checked;

  // Cria uma nova linha (tr) para a tabela
  const newRow = document.createElement("tr");
  // Define o conteúdo da nova linha utilizando os valores obtidos anteriormente
  newRow.innerHTML = `
    <td>${taskInput}</td>
    <td>${timeInput1}</td>
    <td>${timeInput2}</td>
    <td><input type="checkbox" ${segundaCheckbox ? "checked" : ""}></td>
    <td><input type="checkbox" ${tercaCheckbox ? "checked" : ""}></td>
    <td><input type="checkbox" ${quartaCheckbox ? "checked" : ""}></td>
    <td><input type="checkbox" ${quintaCheckbox ? "checked" : ""}></td>
    <td><input type="checkbox" ${sextaCheckbox ? "checked" : ""}></td>
  `;

  // Adiciona a nova linha à tabela "taskList"
  taskList.appendChild(newRow);
});

  