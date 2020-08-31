# 데이터 타입 (자료형)

## 문자열(string) 과 숫자(number)

### **숫자 (number)** 

더하기(+) 는 왼쪽에 있는 값과 오른쪽에 있는 값을 더해 하나의 값을 만든다는 의미로 **이항 연산자***

**이항 연산자** 중에서 산수를 하는 것이기에 **산술 연산자**

#### 산술 연산자

1. 더하기
2. 빼기
3. 곱하기
4. 나누기



### 문자열(string)

("") 또는 (' ') 로 이루어져 있음



#### 프로퍼티(Properties)

#### string.length

문자열의 길이를 알려줌, 단지 문자열에 .length만 붙여주면 됨 

```
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
```



#### toUpperCase()

문자열을 쓰고 .toUpperCase()를 쓰면 결과과 대문자로 출력된다.

```
str.toUpperCase()
```



#### indexOF()

```
str.indexOF(searchValue[, fromIndex])
```

indexOF() 에 찾고자 하는 값을 입력한다.

```
'Hello world'.index('O')
'Hello world'.index('o')
```

위처럼 입력하고 결과 갑으로는 -1, 4가 나오게 된다. -1은 찾을 수 없다는 결과이고 4는 'H'를 0으로 쳐서 4번째 자리에 소문자 'o'가 입력 된다는 뜻이다. 

```
'Hello world'.index('World')
```



다음처럼 입력하게 되면 공백을 포함해서 6번째에 'World' 라는 문자열이 시작한다는 것을 확인 할 수 있다. 



```
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
```



```
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");
```

만약 문자열에 찾을 수 없다면 -1을 반환합니다.



#### 문자열에서 공백 제거 하기

```
'		Hello		'.trim()
```

결과 값으로는  공백을 제거한 Hello 가 출력된다



#### .search()

**문자열에서 문자열 검색**

```
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
```



#### indexOF() , search() 는 동일한가 

두가지 방법은 동일하지 않습니다.

1. search() 메서드는 두 번째 시작 위치 인수를 사용할 수 없다.
2. indexOF()는 강력한 검색 값을 사용할ㄴ 수 없다