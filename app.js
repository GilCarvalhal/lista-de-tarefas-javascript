"use strict";

// let banco = [
//   { tarefa: "Estudar Javascript", status: "" },
//   { tarefa: "Estudar Typescript", status: "checked" },
// ];

function getBanco() {
  return JSON.parse(localStorage.getItem("@lista")) ?? [];
}

function setBanco(banco) {
  return localStorage.setItem("@lista", JSON.stringify(banco));
}

function criarItem(text, status, indice) {
  const item = document.createElement("label");
  item.classList.add("todo__item");
  item.innerHTML = `
    <input type="checkbox" ${status} data-indice=${indice} />
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
  const banco = getBanco();
  banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
}

function inserirItem(evento) {
  const tecla = evento.key;
  const texto = evento.target.value;

  if (tecla === "Enter") {
    const banco = getBanco();
    banco.push({ tarefa: texto, status: "" });
    setBanco(banco);
    atualizarTela();
    evento.target.value = "";
  }
}

function removerItem(indice) {
  const banco = getBanco();
  banco.splice(indice, 1);
  setBanco(banco);
  atualizarTela();
}

function atualizarItem(indice) {
  const banco = getBanco();
  banco[indice].status = banco[indice].status === "" ? "checked" : "";
  setBanco(banco);
  atualizarTela();
}

function clickItem(evento) {
  const elemento = evento.target;
  if (elemento.type === "button") {
    const indice = elemento.dataset.indice;
    removerItem(indice);
  } else if (elemento.type === "checkbox") {
    const indice = elemento.dataset.indice;
    atualizarItem(indice);
  }
}

document.getElementById("newItem").addEventListener("keypress", inserirItem);
document.getElementById("todoList").addEventListener("click", clickItem);

atualizarTela();
