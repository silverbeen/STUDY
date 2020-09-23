# State 

: 리액트를 다루는 핵심 !!

 state는 props 처럼 App컴포넌트의 렌더링(화면에 보이게 하는 것) 결과물에 영향을 주는

데이터를 갖고 있는 객체

- props 는(함수 매개변수처럼) 컴포넌트에 전달

- state 는  (함수 내에 선언된 변수처럼) **컴포넌트 안에서 관리**



### 사용 하는 이유

: 사용하는 쪽과 구현하는 쪽을 철저하게 분리시켜서 양쪽의 편의서을 각자 도모하는 것



## 사용하는 방법

- **constructor()** 함수를 꼭 적어주어야 한다 

```react
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

 