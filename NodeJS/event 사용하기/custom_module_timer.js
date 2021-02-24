var EventEmitter = require("events");

//1. setInteval 함수가 동작하는 interval 값을 설정, 1초에 한번씩 호출
var sec = 1;

//2. timer 변수를 EventEmitter  로 초기화
exports.timer = new EventEmitter();

// 3. javascript 내장함수인 setInterval 을 사용해서 1초에 한번씩 timer 객체에 tick 이벤트 발생
setInterval(() => {
  exports.timer.emit("tick");
}, sec * 1000);
