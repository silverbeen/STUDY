// 말 그대로 de (지운다) structuring (구조를)
// 구조를 지운다라는 말이 된다.
// 객체의 구조를 분해 후 할당이나 확장 같은 연산을 수행한다.

let { id: newName1, country: newName2 } = { id: "hello", country: "korea" };

console.log(newName1, newName2);
