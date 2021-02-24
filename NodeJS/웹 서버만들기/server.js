//1. 서버를 사용하기 위해서 http 모듈을 http 변수에 담는다
var http = require("http");

//2. http  모듈로 서버를 생성한다
//서버를 실행한 후 , 사용자로 부터 , http 요청이 들어오면 함수 블럭 내부를 실행해서 응답
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello node.js! \n");
});

// 3. listen 함수로 8080 포트를 가진 서버를 실행한다. 서버가 실행된 것을 콘솔창에서 확인하기 위해
server.listen(8080, function () {
  console.log("Server is running...");
});
