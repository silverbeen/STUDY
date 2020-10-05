# this

**this 는 현재 실행 문맥이다**

`실행문맥`  :  호출자가 누구냐

```Js
alert(this === window) // true, 호출자는 window

const caller = {
  f: function() {
    alert(this === window)
  },
}
caller.f() // false, 호출자는 caller 객체
```



## 생성자 함수 / 객체에서는 어떻게 쓰이나?



### 생성자 함수?

자바스크립트의 객체를 생성하는 역할

> new 생성자(인자) :: 기존함수에 new 연산자를 붙여서 호출
> 함수이름 첫문자는 대문자!!!



1. **빈 객체 생성 및 this 바인딩**

   ① 코드 실행 전 빈 객체 새로 생성

   - ```null
     자신의 부모인 프로토타입 객체와 연결되어 있어 부모 객체의 프로퍼티, 메서드를 자신의 것처럼 사용 가능하여 엄밀히 빈 객체는 아니라고 할 수 있다..
     ```

   ② this로 바인딩

   - ```null
     생성자 함수 코드 내부에서 사용된 this는 빈객체를 가리킴 (<> 일반함수는 전역변수 가리킴)
     ```



2. **this를 통한 프로퍼티(속성) 생성**

```null
this를 통해 코드 내부에 동적으로 프로퍼티, 메서드 생성 가능
```

3. **생성된 객첼르 리턴 :: this 로 바인딩 된 새로 생성된 객체가 반환**

- 일반 함수 : return undefined
- 생성자함수 : return this :: **this로 바인딩**된 새로 생성한 객체 반환



생성자는 new 로 객체를 만들어 사용하는 방식

객체지향 언어에서 일반적으로 객체를 만들 때 쓰이는 문법과 동일

```JS
function NewObject(name, color) {
  this.name = name
  this.color = color
  this.isWindow = function() {
    return this === window
  }
}

const newObj = new NewObject('nana', 'yellow')
console.log(newObj.name) // nana
console.log(newObj.color) // yellow
console.log(newObj.isWindow()) // false

const newObj2 = new NewObject('didi', 'red')
console.log(newObj2.name) // didi
console.log(newObj2.color) // red
console.log(newObj2.isWindow()) // false
```

- new 키워드로 새로운 객체를 생성했을 경우 생성자 함수 내의 this 는 new 를 통해 만들어진 새로운 변수
- `newObj`, `newObj2`는 같은 생성자 함수로 만들어진 객체이지만 완전히 별도의 객체이기 때문에 각 객체의 속성들은 서로 관련이 없다



- new 키워드가 없을때

```JS
const withoutNew = NewObject('nana', 'yellow')
console.log(withoutNew.name) // error
console.log(withoutNew.color) // error
console.log(withoutNew.isWindow()) // error
```

> new 키워드가 없으면 일반적인 함수 실행과 동일하게 동작하므로,  this 는 window 객체가 된다
>
> `withoutNew`가 함수 실행의 결과값이 할당되므로 각 property 를 가져올 수 없음

