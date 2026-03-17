"use strict";
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");
const doneList = document.querySelector("#done-list");
function createTodoItem(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    const btnBox = document.createElement("div");
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "완료";
    completeBtn.className = "complete";
    completeBtn.addEventListener("click", () => {
        li.remove();
        btnBox.innerHTML = "";
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "삭제";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });
        btnBox.appendChild(deleteBtn);
        doneList.appendChild(li);
    });
    btnBox.appendChild(completeBtn);
    li.appendChild(span);
    li.appendChild(btnBox);
    return li;
}
addBtn.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value)
        return;
    const todoItem = createTodoItem(value);
    todoList.appendChild(todoItem);
    input.value = "";
});
