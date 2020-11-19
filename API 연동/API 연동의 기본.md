# API 연동의 기본



API를 호출하기 위해 

1. axios 라이브러리 설치

```
$ cd api-integrate
$ yarn add axios
```

axios를 사용해서 GET, PUT, POST, DELETE 등의 메서드로 API 요청을 할 수 있다. 

[REST API](https://meetup.toast.com/posts/92) 위 내용을 모른다면 읽어보기 !





## REST API ?

**Representational State Transfer API**



### 구성

- 자원 - URL
- 행위 - HTTP METHOD
- 표현



### 특징 

- 유니폼 인터페이스 : URI로 지정한 리소스에 대한 조작을 통일되고 한정적인 인터페이스로 수행

- Steateless (무상태성) : 상태정보를 따로 저장하고 관리 하지 않음, 세션 정보나 쿠키 정보를 별도 저장하지 않으므로 API 서버는 들어오는 요청단 처리하면 되어서 서비스의 자유도가 높아짐-

- Cacheable (캐시 기능) : 웹 에서 사용하는 기존 인프라를 그대로 활용가능

   HTTP 프로토콜 표준에서 사용하는 Last-Modified태그나 E-Tag를 이용하면 캐싱 구현이 가능

- Self-descriptiveness (자체 표현 구조) :  REST API 메시지만 보고 쉽게 이해 할 수 있음

- client-server 구조 : REST 서버는 API 제공, 클라이언트는 사용자 인증이나 세션, 로그인 정보를 직저ㅓㅂ 관리하는 구조로, 각각의 역할이 확실히 구분되기에 개발해야 할 내용이 명확해진다. 

- 계층형 구조 : 다중 계층으로 구성될 수 있으며 보안, 로드 밸런싱, 암호화 계층층을 추가하여 유연성을 둘 수 있고 PROXY, 게이트웨이 네트워크 기반의 중간매체를 사용 할 수 있게 한다. 



### REST API 중식 규칙

- **UPI 는 정보의 자원은 표현해야 한다.** (리소스명은 동사보다는 명사를 사용!)

```
 GET /members/delete/1
```

위와 같은 방식은 REST 를 제대로 적용하지 않은 URI입니다.

URI는 자원을 표현하는데 중점을 두어야 하기에 delete와 같은 행위에 대한 표현이 들어가면 안된다. 

 

- **자원에 대한 행위는 HTTP 메서드로 표현한다. (GET, PUT, POST, DELETE )**



