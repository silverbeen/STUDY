## url 다루기



### 서버 URI(디렉토리 + 파일)

- url 모듈은 클라이언트가 요청한 주소를 parsing 해서 서버내의 실제 로컬 자원만 따로 처리 할 수 있게 함

- 기존 URL 주소체계에서의 서버리소스는 디렉토리 + 파일의 형태였으나 RESTful이 표준화된 지금은 특정도메인 서버가 가지는 유일한 리소스를 식별하는 서버식별자라고 표현!



**서버 URI에 해당하는 문자열**

```
http://www.naver.com/my_page/firstpage?section=15 // 전체 URI

[ http://www.naver.com ] [ /my_page/firstpage ] [ ?section=15 ]
        도메인                  서버URI           쿼리스트링
```





### 코드 분석



- parsing 된 url에는 여러가지 옵션이 들어가 있는데 그 중에서 서버리소스에 해당하는 pathname에 저장된 값을 resource 변수에 대입

```
var resource = parsedUrl.pathname;
```



- 아래 소스코드는 resource 에 대입된 값을 비교하여 해당 문자열과 같으면 블럭안에 내용을 실행. 이렇게 요청한 주소를 직접적으로 문자열과 비교

```
if (resource === "/address") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("대전광역시 유성구 장동");
  } else if (resource === "/phone") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("123-123-123");
  } else if (resource === "/name") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("강은빈");
  } else {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("404 Page Not Found");
  }
```



- 서버 포트를 http 의 기본포트인 80으로 변경하면 브라우저에서 요청시 포트번호를 생략

```
server.listen(80, function(){
    ...
});
```

