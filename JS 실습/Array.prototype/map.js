//map 함수는 기존의 배열을 callbackFunction에 의해 새 배열을 만드는 함수이다.
//그러니 기존의 배열이 변하지는 않는다.
//const names = ["은빈", "silver", "gold", "been"];
//const nameList = names.map((name) => console.log(name));

//제곱근
let numbers = [4, 9, 16, 25, 36];
let result = numbers.map(Math.sqrt);
console.log(result);

//이름만 출력하고 싶
const studentinfo = {
  studentname: document.getElementById("name"),
  studentschool: document.getElementById("school"),
  student: document.getElementById("student-info"),
  print : document.querySelector('section'),
  search : document.getElementById('search'),
}

const students = [
  {
    school: "대덕소프트웨어 마이스터고",
    name: "silverbeen",
    img : "https://placeimg.com/64/64/any"
  },
  {
    school: "대덕소프트웨어 마이스터고",
    name: "goldbeen",
    img : "https://placeimg.com/64/64/any"
  },
  {
    school: "대덕소프트웨어",
    name: "jso",
    img : "https://placeimg.com/64/64/any"
  },
];

//학생 정보 리스트
students.map((c) => {
  let name = c.name;
  let school = c.school;
  let img = c.img;
  console.log(name, school);
  
  const info = `
  <div id="student-info">
      <img src="${img}" alt="프로필" />
      <p id="name">${name}</p>
      <p id="school">${school}</p>
      </div>`;
    studentinfo.print.insertAdjacentHTML('beforeend', info);
  });

/*   //학생 검색 필터
  let studentSerch = students.search.value; 
  students.filter(students.name) */
