//map 함수는 기존의 배열을 callbackFunction에 의해 새 배열을 만드는 함수이다.
//그러니 기존의 배열이 변하지는 않는다.
//const names = ["은빈", "silver", "gold", "been"];
//const nameList = names.map((name) => console.log(name));

//제곱근
let numbers = [4, 9, 16, 25, 36];
let result = numbers.map(Math.sqrt);
console.log(result);

//이름만 출력하고 싶다

const studentinfo = {
  studentname: document.getElementById("name"),
  studentschool: document.getElementById("school"),
  student: document.getElementById("student-info"),
};

const students = [
  {
    school: "대덕소프트웨어 마이스터고",
    name: "silverbeen",
  },
  {
    school: "대덕소프트웨어 마이스터고",
    name: "goldbeen",
  },
  {
    school: "대덕소프트웨어",
    name: "jso",
  },
];

let schools = students.map((school) => school.school);
let names = students.map((student) => student.name);
console.log(names);

for (let i of students) {
  console.log(names, schools)
  studentinfo.studentname.innerHTML = names[i];
  studentinfo.studentschool.innerHTML = schools[i];
}
