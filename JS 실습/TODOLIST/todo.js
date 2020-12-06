const todo = {
  input: document.querySelector("#todoinput"),
  addbutton: document.querySelector("#add"),
  list: document.querySelector("#list"),
  value: document.getElementsByClassName("value"),
};

let totalIndex = 1;
let index = 0;

/* 삭제 버튼 */
function deleteMe(e) {
  e.currentTarget.parentNode.remove();
  totalIndex -= 1;
}

/* 추가 버튼 클릭시 추가 */
todo.addbutton.addEventListener("click", () => {
  console.log(12345678);

  const todolist = ` 
    <li class="listitem">
      <div class="listvalue">
        <p class="value">${todo.input.value}</p>
      </div>
      <button onclick="modifyBut(${
        totalIndex - 1
      })" class="modifyButton" id="modify">수정</button>
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
  todo.input.value = null;
  totalIndex += 1;
});

const modify = {
  modal: document.querySelector(".modal"),
  modifybutton: document.getElementsByClassName("modifyButton"),
  complete: document.querySelector("#complete"),
  cominput: document.querySelector("#todomodify"),
};

function initialModify() {
  [...modify.modifybutton].forEach((button, i) => {
    console.log("됐어유");
    button.addEventListener("click", () => {
      test1(i);
    });
  });
}

/* 수정 버튼 클릭 */
function modifyBut(idx) {
  console.log(index, idx);
  modify.modal.style.display = "flex";

  index = idx;
}

/* 수정 완료 버튼 */
function modifySucc() {
  Array.from(todo.value).forEach((p, i) => {
    if (i == index) {
      p.textContent = modify.cominput.value;
    }
  });
}

/* 수정 완료시 모달창 닫기/수정 내용 변경 */
modify.complete.addEventListener("click", function () {
  modify.modal.style.display = "none";
  modify.cominput.value = null;
});
