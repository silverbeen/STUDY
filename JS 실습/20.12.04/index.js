function init() {
  //데이터 삭제
  localStorage.removeItem("Test");

  // 데이터 취득
  var val = (localStorage.Test = "Sample");

  //데이터 출력하기
  document.querySelector("#result").innerHTML = val;
}
