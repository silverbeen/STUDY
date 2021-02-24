## event 사용



- **EventEmitter** : node.js 의 모든 이벤트 처리가 정의된 기본 객체. 이벤트를 사용하기 위해서는 이 객체를 재정의 해서 사용해야 할 수 있음
- **on()** :  이벤트를 연결하는 함수.
- **emit()**  : 이벤트를 발생시키는 함수. on() 함수에서 'data' 라는 이벤트가 캐치되기 위해서는 emit('data') 형태로 이벤트를 발생시켜야 함



### 사용법

1. EventEmitter 재정의

```
var EventEmitter = require("events");
```



2. 이벤트 모듈을 사용하기 위해 초기화

```
var test = new EventEmitter();
```



3. event 모듈에 선언되어있는 on() 함수를 재정의하여 'call' 이벤트실행

```
test.on("call", () => {
  console.log("called events!");
});
```



4. emit 를 사용하여 call 이벤트를 강제로 발생

```
custom_object.emit("call");
```

