# JS 이벤트 배우기 

## onclick

### type="button"

```
<input type="button" value="hi" onclick="alert('hi')"
```

결과 값으로는 `hi` 버튼을 클릭하게 되면 hi 라는 경고창이 뜨게 됨

<input> 태그에  onclick 이라는 속성을 썼는데, onclick 속성 값으로는 반드시 자바스트립트 코드가 와야 함

onclick 속성이 위치하고 있는 태그를 사용자가 클릭 했을 때 자바스크립트 ㅗ드를 자바스크립트 문법에 따라 해석해서 웹 브라우저가 실행 한다.

그래서 `hi` 버튼을 눌렀을 때 자바스크립트 코드를 실행하게 되어, hi 문구를 띄운 것이다.



## onchange

### type="text"

```
<input type="text" onchange="alert('onchange')"/>
```

​	text 창에 'ABC' 를 입력하고 마우스 커서를 바깥쪽으로 뺴서 클릭하게 되면 웹 브라우저가 onchange 이벤트를 실행 합니다. 

참고적으로 쓸데없는 것을 쓴 다음에 다시 'ABC' 를 쓰고 마우스 커서르 ㄹ빠져나가도 onchange  이벤트가 실행되지 않는다는 것입니다.(즉, 값이 변경되지 않으면 이벤트가 실행되지 않는다)



## onkeydown

### type="text"

```
<input type="text" onkeydown="alert('key down')"/>
```

text  창에 키보드의 중 아무 키를 누르게 되면 경고창이 뜨게 됨



## 예시



```
<input type="button" value="night" onclick="
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('body').style.color='white';
    ">

<input type="button" value="day" onclick="
	document.querySelector('body').style.backgroundColor='white';
	document.querySelector('body').style.color='black';
">
```

HTML body 에 위에 코드를 넣게 되면 HTML 에서 버튼이 `night`  `day` 두개의 버튼이 생성이 되는데

이때, `night` 버튼을 누르게 되면 body의 **backgroundColor**는 **검정색**이되고 안에 들어있는 글자의 색은 흐니색이 적용된다. 

또, `day` 버튼을 누르게 되면 body의 **backgroundColor**는 **흰색**이 되고 글자의 색은 검정색이 된다.

`night` `day` 버튼을 눌렀을때 자바스크립트의 코드가 실해 되었으니 **onclick** 이벤트를 사용한 것이다.



즉, <input> 태그 속성에 onclick 속성이 들어 있고, 속성 값으로는 자바스크립트 코드가 들어와 있고, 그 덕분에 실행이 된다. 