const todo = {
  input: document.querySelector("#todoinput"),
  addbutton: document.querySelector("#add"),
  list: document.querySelector("#list"),
  listvalue: document.querySelector("#listvalue"),
};

let listd = document.getElementById("listd");
let Lchild = todo.list.children; // 자식 탐색

window.onload = function () {
  setInterval(() => {
    for (let i = 0; i < Lchild.length; i++) {
      Lchild[i];
      //     console.log(Lchild[i]) // 자식을 찾는 방법
    }
  }, 1000);
};

/* 삭제 버튼 */
function deleteMe(e) {
  e.currentTarget.parentNode.remove();
}

/* 추가 버튼 클릭시 추가 */
todo.addbutton.addEventListener("click", () => {
  console.log(12345678);
  const todolist = ` 
  <li class="listitem">
              <div class="listvalue">
                <p>${todo.input.value}</p>
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
  // 귀찮은게 프로그래머야 이 븅진아

  todo.list.insertAdjacentHTML("beforeend", todolist);
  todo.input.value = null;
});

const modify = {
  modal: document.querySelector(".modal"),
  modifybutton: document.querySelector("#modify"),
  complete: document.querySelector("#complete"),
  cominput: document.querySelector("#todomodify"),
};

/* 수정 버튼 클릭 */
modify.modifybutton.addEventListener("click", function () {
  console.log(12345);
  modify.modal.style.display = "flex";
});

/* 수정 완료시 모달창 닫기/수정 내용 변경 */
modify.complete.addEventListener("click", function () {
  modify.modal.style.display = "none";
  //modify.cominput.value = null;
  console.log("됐다");
  todo.listvalue.innerHTML = modify.cominput.value;
});
