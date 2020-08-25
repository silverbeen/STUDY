# console.log() 사용하기

console.log() 함수는 Hello, world!출력합니다

 Hello, world!콘솔에 보내고 **undefined 반환**합니다(콘솔 출력 창에 위에 표시). 

이는 console.log() 에 명시적인 반환값이 없기 때문입니다.



## 로깅변수

console.log() 는 모든 종류의 변수를 기록하는 데 사용할 수 있습니다. 

뿐만 아니라 문자열, 콘솔에 표시할 변수를 전달하세요 .

```
var foo = "bar";
console.log(foo);
```

그러면 콘솔에는 **bar** 가 표시 됩니다.

```js
var thisVar = 'first value';
var thatVar = 'second value';
console.log("thisVar:", thisVar, "and thatVar:", thatVar); 
```

결과 값 : **thisVar: first value and thatVar: second value**



## 자리 표시 자

placeholder 와 함께 console.log()를 사용 할 수 있습니다.

```
var greet = "Hello", who = "World";
console.log("%s, %s!", greet, who);
```

결과 값 :**Hello, World!**



## 객체 로깅

**`API` 호출에서 `JSON` 응답을 로깅하는데 종종 유용합니다.**

```js
console.log({
    'Email': '', 
    'Groups': {},
    'Id': 33,
    'IsHiddenInUI': false,
    'IsSiteAdmin': false,
    'LoginName': 'i:0#.w|virtualdomain\\user2',
    'PrincipalType': 1,
    'Title': 'user2'
});
```



## HTML 요소 로깅 

DOM 내에 존재하는 모든 요소를 기록 할 수 있습니다.

```
console.log(document.body);
```



## DOM API 사용하기 

> `DOM`은 D의 document O를 object M의 MODEL을 의미합니다.
>
> `XML` 및 `HTML`과 같은 구조화 된 문서의 객체 지향 표현
>
> `Element` 의` textContent` 속성을 설정 하는 것은 웹 페이지에서 텍스트를 출력하는 한가지 방법

ex) 다음 HTML 태그를 고려하십시오.

```
<p id="paragraph"></p>
```

 `textCounment` 속성을 변경하려면 다음 JS 를 실행 할 수 있습니다.

```
document.getElementById("paragraph").textContent = "Hello, World";
```

id `paragraph` 이있는 요소를 선택하고 텍스트 내용을 "Hello, World"로 설정합니다.

```
<p id="paragraph">Hello, World</p>
```



## window.alert() 사용하기

`alert` 방법은 화면에 시각적 경고 상자를 표시합니다.

매개 변수는 일반 텍스트로 사용자에세 표시

```
window.alert(message);
```

`window` 는 전역 객체이기 때문에 아래와 같은 단축형 사용

```
alert(message);
```

`window.alert()` 가 하는 일

```
alert('hello, World');
```



### 노트

`window.alert()` 대신 `alert()` 를 직접 사용할 수 있다.

`console.log`  사용 하는것과는 달리, `alert`는 프롬프트에 응답 할 때까지 코드 호출 `alert`가 일시 중지 의미

경고가 해제 될 때까지 다른 JS 코드 실행 되지 않음 의미

```
alert('Pause!');
console.log('Alert was dismissed');
```

실제로 모달 대화 상자가 표시 되어도 사양에 따라 다른 이벤트로 코드가 실행될 수 있음

이러한 구현에서는 모달 대화 상자가 표시되는 동안 다른 코든 실행

알림을 사용하면 사용자가 페이지를 사용하지 못하도록 차단하는 방법이 사용자 환경을 개선 할 수 있다.



## window.confirm() 사용하기

`window.confirm()` 선택적 메시지롸 확인 및 취소라는 **두 개의 버튼**이 존재

```
result = window.confirm(message);
 
```

**message**는 대화 상자에 표시될 선택적 문자열 

**result** 는 OK또는 Cancel이 선택 되었는지 나타내는 값



`window.confirm()` 일반 적으로 제어판에서 무언가르 삭제하는 것과 같은 위험한 작업을 수행 하기 전에 사용자 확인을 요청하는 데 사용함

```
if(window.confirm("Are you sure you want to delete this?")) {
    deleteItem(itemId);
}
```



사용자의 변수가 필요하다면 사용자의 결과 값을 저장하면 됨

```
var deleteConfirm = window.confirm("Are you sure you want to delete this?");
```



### 노트



# console.log() 실수



## log

```
var a = 1;
var b = 'hello';
var c = true;
console.log(a); // 하나만 로그
console.log(a, b, c); // 여러 개를 동시에 로그
console.log('%d는 숫자 %s는 문자열', a, b); // C 언어처럼 로그
```

마지막 용법 : C언어의 printf처럼 %d %s를 뒤에 입력한 인자로 치환

```
console.log('기본');
console.info('정보');
console.warn('경고');
console.error('에러'); // 직접 실행해보자
```



### **가장 많이 실수 하는 부분**

```
var obj = {};
console.log(obj);
obj.a = 1;
console.log(obj);
```

결과 값  : 처음은 당연히 {}가 되고, 두 번째는 {a:1}가 된다.

> 첫 번째 로그를 봤더니 a :1 이라고 들어있다. 실제 코드에서는 a에 1을 넣기 전에 콘솔 로그를 찍엇지만 
>
> console.log 는 참조를 로깅하기 때문에, 객체와 같이 내용물이 변 할 수 있는 것들은 실시간으로 바뀐다.

**객체를 로깅할 때는 객체의 내용 변경사항이 실시간으로 업데이트 된다는 것**



## dir

**객체는 dir, 나머지는 log로 로깅하는 것이 편함**

```
console.log(document.body); // <body>...</body>
```

DOM 객체의 메서드가 뭐가 있는지 보고 싶은데 대크만 보인다. 이럴때 dir을 쓰면 된다

위에서는 body를 보여주게 된다.



## count

**몇 번 호출되었나 로깅하고 싶을 때 사용함**

```
console.count('카운터1'); // 카운터1: 1
console.count('카운터1'); // 카운터1: 2
console.count('카운터2'); // 카운터2: 1
console.count('카운터2'); // 카운터2: 2
console.count('카운터1'); // 카운터1: 3
```



## time, timeEnd

코드 수행 시간을 확일 할때 유용 time 과 timeEnd에 같은 타이머 이름을 주어야 정상적으로 작동

```
console.time('타이머');
for (var i = 0; i < 1000000; i++) z = 5;
console.timeEnd('타이머'); // 타이머: 6.76611328125ms
```

