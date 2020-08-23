# **JS 구성요소 **

### 반복문 (loop)

**반복적인 작업을 빠르게 동일한 작업을 반복해서 수행하여 완료하는 것**

-counter :  loop의 시작점이자 특정 값으로 초기화 된다. 

-exit condition : loop가 멈추는 기준이 되는 조건

-iterator : 끝나는 조건에 도달 할 때까지 counter를 연속된 루프에서 증가시키는 것



```html
loop(food = 0; foodNeeded = 10) {
  if (food = foodNeeded) {
    exit loop;
    // We have enough food; let's go home
  } else {
    food += 2; // Spend an hour collecting 2 more food
    // loop will then run again
  }
}
```

필요한 음식의 양은 10으로 정해주고,  현재 농부의 양은 0으로 설정한다(counter). 

매 반복문 마다 농부의 음식 양이 필요한 양과 같은지 확인한다.(exit condition)

필요한 양(10)을 얻었다면 loop를 종료 할 수 있다(iterator).



![](C:\Users\user\Downloads\다운로드.png)



```js
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
  ctx.fill();
}
```



> **loop를 사용해야 위에 있는 원들을 그릴때 편하게 할 수 있다.**
>
> **만약 loop를 사용하지 않았더라면 하고 싶은 만큼 코드를 직접 반복해서 써야한다.**



#### loop의 표준

```
for (initializer; exit-condition; final-expression) {
  // code to run
}
```

1. initializer : 일반적으로 숫자로 설정된 변수 루프가 실행 된 횟수가 얼마나 된지 알지 위해 증가시킴(counter variable)
2. exiyt-condition : loop가 언제 멈출지 정의 하는 것 
3. final-expression : 매번 loop 전체가 반복이 될 때 항상 분석한다. 일반적으로 counter variable 를 증가하여 종료 조건 값으로 점점 가까워지게 한다. 



```js
const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}

para.textContent = info;
```

 

> 결과 : My cats are called Bill, Jeff, Pete, Biggles, Jasmin,



1. interator i는 0부터 시작한다.(let =0)
2. cats의 길이보다 작을때까지 실행 명령 
3. info("Bill, ") -> info("Jeff, ") 열에 위치한다. 계속해서 추가하다가 cats 배열의 길이보다 작을때까지 실행
4. i = cats.length 같아질때, loop는 멈추고, 다음코드로 넘어간다.



#### break을 가지고 있는 loops

