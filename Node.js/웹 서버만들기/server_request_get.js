var http = require("http");

//1. 요청한 url 을 객체로 만들기 위해  url 모듈 사용
var url = require("url");

//2. 요청한 url 중에 쿼리 스트릴을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require("querystring");

var server = http.createServer(function (req, res) {
  //3. 콘솔 화면에 로그 시작부분을 출력
  console.log("----log start---");

  //4. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
  var parsedUrl = url.parse(req.url);
  console.log(parsedUrl);

  //5.  객체화 된 url 중에 뭐크 스트링 부분만 따로 객체화 후 출력
  var parsedQuery = querystring.parse(parsedUrl.query, "&", "=");
  console.log(parsedQuery);

  //6. 콘솔 화면에 로그 종효 부분을 출력
  console.log("---log end---");

  res.writeHead(200, { "Content-Type": "text/html" });
  //res.end("hello node.js!!");
  res.end("var1의 값은" + parsedQuery.var1);
});

server.listen(8080, function () {
  console.log("Server is running");
});
