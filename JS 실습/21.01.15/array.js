const numbers = [1, 2, 3, 4, 12, 3, 4213, 2312, 12312, 2, 3];
const Anumber = (number) => number >10;
const arr1 = ["강금빈", "강은빈", "강동빈"];
const arr2 = ["강강강", "은은은", "빈빈빈"];

//map 
function map(array, func) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    temp = [...temp, func(array[i], i)];
  }

  return temp;
}

map([1, 2, 3, 4], (i) => console.log(i));


//filter
function filter(item, array) {
    let temp = [];
    for(let i = 0; i<array.length; i++) {
        if(item(array[i])) {
            temp.push(array[i]);
        }
    }
    return temp;
}

console.log(...filter(Anumber, numbers));

//concat
const newArr = [
    ...arr1,
    ...arr2,
]
console.log(...newArr);