// 생명 주기를 다한 외부 함수의 변수를 참조하는 중첩함수
// 변수를 은닉화 하여 값을 함부로 수정 할 수 없다.
// 렉시컬 스코핑? 함수를 실행하거나 변수하 초기화 되는 공간은 각각의 렉시컬 환경이 만들어진다.

function addSum(x) {
  return function (y) {
    return x + y;
  };
}

let add3 = addSum(10);
let add5 = addSum(3);
console.log(add3(5));
console.log(add3(4));
console.log(add5(5));
console.log(add5(3));
