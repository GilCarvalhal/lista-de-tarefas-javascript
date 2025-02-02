"use strict";

let banco = [
  { tarefa: "Estudar Javascript", status: "" },
  { tarefa: "Netflix", status: "checked" },
];
console.log(banco);

function criarItem(text, status = "") {
  const item = document.createElement("label");
  item.classList.add("todo__item");
  item.innerHTML = `
    <input type="checkbox" ${status}/>
    <div>${text}</div>
    <input type="button" value="X" />
    `;

  document.getElementById("todoList").appendChild(item);
}

// criarItem("Criação teste");
