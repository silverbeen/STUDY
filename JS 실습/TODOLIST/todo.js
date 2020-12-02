const todo = {
  input: document.querySelector("#todoinput"),
  addbutton: document.querySelector("#add"),
  list: document.querySelector("#list"),
  modify: document.querySelector("#modify"),
};

function deleteMe(e) {
  e.currentTarget.parentNode.remove();
}

todo.addbutton.addEventListener("click", () => {
  const todolist = ` 
  <li class="listitem">
              <div class="listvalue">
                <input placeholder="${todo.input.value}" disabled="true"></input>
              </div>
              <button id="modify">수정</button>
              <!-- 삭제 버튼 -->
              <img
                class="itemDelete"
                onclick="deleteMe(event);"
                src="./close.png"
                alt="delete"
                title="delete"
              />
            </li>`;

  todo.list.insertAdjacentHTML("beforeend", todolist);
});

/* todo.modify.addEventListener("click", ) */
