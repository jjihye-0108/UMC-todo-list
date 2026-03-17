const input = document.querySelector<HTMLInputElement>("#todo-input")!;
const addBtn = document.querySelector<HTMLButtonElement>("#add-btn")!;
const todoList = document.querySelector<HTMLUListElement>("#todo-list")!;
const doneList = document.querySelector<HTMLUListElement>("#done-list")!;

function createTodoItem(text: string) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const btnBox = document.createElement("div");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "완료";
  completeBtn.className = "complete";

  // ✅ 완료 버튼 클릭
  completeBtn.addEventListener("click", () => {
    li.remove();                 // 기존 위치에서 제거
    btnBox.innerHTML = "";       // 버튼 초기화

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "delete";

    // ✅ 삭제 버튼
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    btnBox.appendChild(deleteBtn);
    doneList.appendChild(li);    // 완료 리스트로 이동
  });

  btnBox.appendChild(completeBtn);

  li.appendChild(span);
  li.appendChild(btnBox);

  return li;
}

// ✅ 추가 버튼 클릭
addBtn.addEventListener("click", () => {
  const value = input.value.trim();

  if (!value) return;

  const todoItem = createTodoItem(value);
  todoList.appendChild(todoItem);

  input.value = "";
});