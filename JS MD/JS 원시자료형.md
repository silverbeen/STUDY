<h1> 원시 자료형
<h3>

Number 타입 
- 정수 표현

string 타입(문자열)
- 텍스트 데이터를 나타낼때 사용

Undefined 타입
- 값을 할당하지 않은 변수는 undefined의 값을 가짐

Boolean 타입
- ture와  false로 두가지의 값을 가짐

Null 타입
- 한 가지 값

symbol
- 유일하고 변경 불가능한 기본 값
***
<h1>객체(Objects)란?

<h3>데이터를 담는 그릇(배열), 속성을 담고있는 가방

데이터 속성(Data property)

특성 | 자료형 | 설명 | 기본값
---|:---:|:---:|---:
`[[value]]`|자바스크립 타입 모두 가능 | get 접근으로 반환되는 값|`undefined`
`[[Writable]`|Boolean| false 라면, [[value]]을 바꿀 수 없음 | `false`
`[[Enumerable]]`|Boolean|true 라면, 이 속성은 for...in 루프에서 열거될 수 있음|`false`
`[[configurable]]`|Boolean|false 라면, 이 속성은 제거될 수 없고, [[Value]]와 [[Writable]] 외에는 수정될 수 없음|`false`
***

