# 1. useState

- 가장 기본적인 Hook 
- 함수형 컴포넌트에서 상태를 관리해야 될 때



 Counter 

```react
const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b> 입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};
```



배열 비구조화 할당 문법

```react
const [value, setValue] = useState(0);
```

ex)

```javascript
const array = ['dog', 'cat', 'sheep'];
const [first, second] = array;
console.log(first, second); // dog cat
```

-  **함수의 파라미터에는 상태의 기본값**을 넣어준다 (즉, 0을 넣어 줬으면 카운터의 기본값은 0 으로 하겠다는 말)
- 함수가 호출되고 나면 배열을 반환 함
- **첫번째 원소는 상태값**, **두번째 원소는 상태를 설정하는 함수** (value 는 현재 상태 값, setValue  는 상태를 설정하는 함수의 이름)





## useState 여러번 사용하기

하나의 useState 함수는 하나의 상태 값만 관리한다. 

만약에 컴포넌트에서 관리해야할 상태가 여러개라면 useState 를 여러번 사용한다.



```javascript
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
```

- name , setName 를 기본값인 공백으로 설정해둠
- input의 값이 변하게 되면  onChangeName 의 함수를 실행한다
- 이때 input 의 값을 setName 에 저장한다
- 사용자가 {name} 을 불렀으니 input 의 value 를 반환한다.



# 2. useEffect