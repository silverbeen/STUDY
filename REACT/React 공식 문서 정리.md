# 1. JSX

```react
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```



-  컴파일 후 JSX는 일반 JavaScript 함수 호출이되어 JavaScript 객체로 평가됨

- `if`문과 `for`루프 내에서 JSX를 사용 하고 , 변수에 할당하고, 인수로 받아들이고, 함수에서 반환 할 수 있음



```react
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```



## JSX로 자식 지정

태그가 비어있으면 />로 닫을 수 있음

```react
const element = <img src={user.avatarUrl} />;
```



## JSX는 객체

- 아래 두개는 같은 의미

```react
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```react
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```



- `React.createElement()` 버그없는 코드를 작성하는 데 도움이되는 몇 가지 검사를 수행하지만 기본적으로 다음과 같은 객체를 생성

```react
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

위와 같은 개체 : 반응 요소

화면에서 보고싶은 내용에 대한 설명 React는 이러한 객체를 읽로 DOM 구성하고 최신 상태 유지



# 2. 렌더링 요소

- React 요소는 불변
- 요소를 생성한 후에는 하위 또는 속성을 변경 할 수 없다
- UI를 업데이트하는 유일한 방법은 새 요소를 만들어  `ReactDOM.render()`

시계 예제

```react
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

콜백  `ReactDOM.render()`에서 1초마다 `setInter()`호출

`setInter()` : 각 호출 사이에 고정 된 시간 지연으로 함수를 반복적으로 호출하거나 코드 조각을 실행



## 필요한 것만 업데이트 하는 반응

React DOM은 요소와 하위 요소를 이전 요소와 비교하고 DOM을 원하는 상태로 가져 오는 데 필요한 DOM 업데이트 만 적용



# 3. 구성 요소 및 소품

- 구성요소는 JS 함수와 같음
- 임의의 입력 ( "props"라고 함)을 받아들이고 화면에 표시되어야하는 내용을 설명하는 React 요소를 반환



## 함수 및 클래스 구성 요소

- 함수

```react
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

위 코드는 단일 "props" 개체로 인수를 받고 React 요소를 반환 하므로 "함수 구성 요소" 라고 함



- 클래스

```react
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```



## 구성 요소 렌더링

```react
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

1. 요소로  `ReactDOM.render()` 과 `<Welcome name="Sara" />` 호출함
2. react는 {name: 'Sara'}이(가) 포함된 `Welcome` 구성 요소를 props으로 호출한다.
3. 결과로 `<h1>Hello, {props.name}</h1>;` 요소



## 구성 요소 추출



```react
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```



- Avatar 추출

```react
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

- 추출후

```react
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

```



- `UserInfo`렌더링하는 구성 요소를 추출

```react
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```



- 추출후 Comment 단순화

```react
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```



###  추출 하는 이유

- 재사용 가능하기 때문



# 4. 상태 및 수명 주기

```react
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

위 코드를 클래스로 변환하면

```react
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

- `render`메서드는 업데이트가 발생할 때마다 호출되지만 `<Clock />`동일한 DOM 노드로 렌더링 하는 한 `Clock`클래스 의 단일 인스턴스 만 사용
- 이를 통해 로컬 상태 및 수명주기 메서드와 같은 추가 기능 사용 가능

### 클래스에 로컬 상태 추가

props 에서 state로 이동

1. 체 `this.props.date`로 `this.state.date`의 `render()`방법 :

   ```react
   class Clock extends React.Component {
     render() {
       return (
         <div>
           <h1>Hello, world!</h1>
           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
         </div>
       );
     }
   }
   ```

2. 이니셜을 할당 하는 [클래스 생성자](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor) 를 추가

```react
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

3. 요소 에서 `date`소품을 제거

```react
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```



### 클래스에 수명주기 메서드 추가

- DOM에 렌더링 될 때마다 타이머를 설정 하는 것을 마운팅이라고 한다

- 타이머를 지우고 싶은 것은 언 마운트 라고 한다



# 5. 이벤트처리

- react 이벤트는 소문자가 아닌 camelCase(맨 처음글자를 대문자로 표기) 를 사용하려 이름이 지정됨
- JSX를 사용하면 문자열이 아닌 이벤트 핸들러로 함수를 전달

ex) HTML 

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

ex) React

```react
<button onClick={activateLasers}>
  Activate Lasers
</button>
```



> **preventDefault ,  stopPtopagation,  return false  :** 이벤트 중단을 위해 자주 사용되는 코드
>
> **event.preventDefault ** :  현재 이벤트의 기본 동작을 중단
>
> **event.stopPtopagation** : 현재 이벤트가 상위로 전파되지 않도록 중단



- React를 사용할 때 일반적으로 `addEventListener` DOM 요소가 생성된 후 리스너를 추가하기 위해 호출 할 필요가 없음

- 대신 요소가 처음 렌더링 될 때 리스너를 제공



**사용자가 "ON", "OFF" 상태를 전환 할 수 있는 버튼**

```react
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```



- 위 코드는 React 전용 동작이 아니고, 단지 **JS 에서 함수가 작동하는 방식**의 일부기 떄문에 `onClick={this.handleClick}`  로 바꾸어야 한다

```react
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}		
```

- 화살표 함수를 사용

```react
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  
```



## 이벤트 핸들러에 인수 전달



```react
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

- 두줄은 동일하며 각각 화살표 기능을 사용





# 6. 조건부 렌더링

조건부 렌더링은 JS 조건이 작동하는 방식과 동일