# state



: 리액트를 다루는 핵심!!

state는 props 처럼 App 컴포넌트의 렌더링(화면에 보이게 하는 것 ) 결과물에 영향을 주는 데이터를 갖고 있는 객체

- props 는 (함수 매개 변수처럼) 컴포넌트에 전달
- state 는 (함수 내에 선언된 변수처럼 ) 컴포넌트 안에서 관리

### 사용하는 이유

: 사용하는 쪽과 구현한는 쪽을 철저하게 분리 시켜서 양쪽의 편의성을 각자 도모하는 것



### 사용하는 방법 

- **cunstructor()** 함수는 꼭 적어주어야 한다.

- ```
  class App extends Component {
    constructor(props) {
      super(props);
        this.state={
        Subject:{title:'WEB',sub:'월드와이드웹!'}
      }
    }
    render() {
      return (
        	<div className="App">
          <Subject 
          	title={this.state.subject.title} 
      		sub={this.state.subject.sub}>
          </Subject>
        </div>
      );
    }
  }
  
  ```

  

컴포넌트 시작 부분에 **constructor()** 라는 함수가 컴포넌트의 초기화를 시켜주어야 **State 에 값을 넣어 사용 가능**

```
title={this.state.subject.title} 
```

처럼 state 값을 가져와 사용함



## 주의사항 

클래스형 컴포넌트든 함수형 컴포넌트

state 값을 바꾸어야 할 때는 **setState**   **useState** 를 통해 전달 **받은 세터 함수를** 사용해야함

- 클래스형 컴포넌트 

```
this.state.number = this.state.number + 1;
this.state.array = this.array.push(2);
this.state.object.value = 5;
```

- 함수형 컴포넌트

```
const = [object, setObject] = useState({a : 1, b: 1});
object.b = 2;
```

위에 코드들 같은 경우 잘못된 코드이다.

배열이나 객체를 업데이트 해야할 때는 사본을 만들고 그 사본에 값을 업데이트 한후 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트 해야함



- 객체 다루기

  ```
  const object = { a: 1, b:2, c:3};
  const nextObject = {...object, b:2}; //사본을 만들어서 b 값만 덮어 쓰기
  ```

- 배열 다루기

```react
const array= {
	{id : 1, value : ture},
	{id : 2, value : ture},
	{id : 3, value : false}
};
let nextArray = array.concat({id : 4});
nextArray.filter(item=>item.id!==2);
nextArray.map(item => (item.id == 1 ? {...item, value:faluse} : item));
```

객체에 대한 사본을 만들 때에는 **spread** 연산자라 불리는 **"..." **를 사용하여 처리하고, 배열에 대한 사본을 만들때는 배열의 내장 함수를 활용함



