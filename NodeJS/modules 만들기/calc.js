//함수 모듈
function calculate(a, b) {
  return a * b;
}
module.exports = calculate;

//객체 모듈
module.exports = {
  geometricSum(a, b, c) {
    return a * b * c;
  },
  arithmeticSum(n) {
    return n + 1;
  },
};
