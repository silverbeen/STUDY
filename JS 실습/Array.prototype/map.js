//map 함수는 기존의 배열을 callbackFunction에 의해 새 배열을 만드는 함수이다.
//그러니 기존의 배열이 변하지는 않는다.
//const names = ["은빈", "silver", "gold", "been"];
//const nameList = names.map((name) => console.log(name));

const studentinfo = {
  studentname: document.getElementById("name"),
  studentschool: document.getElementById("school"),
  student: document.getElementById("student-info"),
  print: document.querySelector("section"),
  searchInput: document.getElementById("search"),
};

const students = [
  {
    school: "대덕소프트웨어 마이스터고",
    name: "silverbeen",
    img: "https://placeimg.com/64/64/any",
  },
  {
    school: "대덕소프트웨어 마이스터고",
    name: "silverbeen",
    img: "https://placeimg.com/64/64/any",
  },
  {
    school: "대덕소프트웨어 마이스터고",
    name: "goldbeen",
    img: "https://placeimg.com/64/64/any",
  },
  {
    school: "대덕소프트웨어",
    name: "jso",
    img: "https://placeimg.com/64/64/any",
  },
];

//학생 정보 리스트
function showList() {
  students.map((c) => {
    let name = c.name;
    let school = c.school;
    let img = c.img;

    const info = `
      <div id="student-info">
          <input id="checkbox" type="checkbox" name="checked" onchange="checkbox()"/>
          <img src="${img}" alt="프로필" />
          <p id="name">${name}</p>
          <p id="school">${school}</p>
          </div>`;
    studentinfo.print.insertAdjacentHTML("beforeend", info);
  });
}
showList();

//검색 필터링
function isName(e) {
  studentinfo.searchInput.addEventListener("keyup", function () {
    let nameValue = studentinfo.searchInput.value;
    if (e.name === nameValue) {
      console.log("확인");
      alert(`${e.name}님의 정보를 가져오는 중입니다.`);
      return true;
    }
  });
}

const names = students.filter(isName);

//합치기
function checkbox() {
  /*   let check = document.getElementById("checkbox");
  if (check.checked === true) {
    let name = students.name;
    console.log(name);
    console.log("선택되었슈");
  } else {
    console.log("취소되었슈");
  } */
  let check = document.getElementsByName("checked").length;


  for (let i = 0; i < check; i++) {
    if (document.getElementsByName("checked")[i].checked == true) {
      //alert(document.getElementsByName("checked")[i].value);
    }
  }
}


function concat() {
  let check_value = document.getElementById("checkbox").length;
  let query = 'input[name = "checked"]:checked'; //name = "checked" 이고 checked = "true" 검색

  let selectedEls = document.querySelectorAll(query);
  let result = "";
  selectedEls.forEach((el) => {
    result += el.value + " ";
  });

  document.getElementById("result").innerText = result;
}


function concat1() {
  const name1 = students[0].name;
  const result = name1.concat(students[2].name);
  document.getElementById("result").innerText = result;
}