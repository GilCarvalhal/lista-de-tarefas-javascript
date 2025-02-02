"use strict";

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
