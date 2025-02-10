"use strict";

let banco = [
  { tarefa: "Estudar Javascript", status: "" },
  { tarefa: "Netflix", status: "checked" },
];
console.log(banco);

function criarItem(text, status, indice) {
  const item = document.createElement("label");
  item.classList.add("todo__item");
  item.innerHTML = `
    <input type="checkbox" ${status} data-indice=${indice}/>
    <div>${text}</div>
    <input type="button" value="X" data-indice=${indice} />
    `;

  document.getElementById("todoList").appendChild(item);
}

function limparTarefas() {
  const todoList = document.getElementById("todoList");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
}

function atualizarTela() {
  limparTarefas();
  banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
}

function inserirItem(evento) {
  const tecla = evento.key;
  const texto = evento.target.value;

  if (tecla === "Enter") {
    banco.push({ tarefa: texto, status: "" });
    atualizarTela();
    evento.target.value = "";
  }
}

function clickItem(evento) {
  const elemento = evento.target;
  console.log(elemento);
}

document.getElementById("newItem").addEventListener("keypress", inserirItem);
document.getElementById("todoList").addEventListener("click", clickItem);

atualizarTela();
