var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
  //1. 실제 요청한 주소 전체를 콘솔에 출력
  console.log(req.url);

  var parsedUrl = url.parse(req.url);

  //2. parsing 된 url 중  서버 URI 에 해당하는 pathname 만 따로 지정
  var resource = parsedUrl.pathname;
  console.log("resource path = %s", resource);

  //3. 리소스에 해당하는 문자열이 아래와 같으면 해당 메세지를 전달
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
});

server.listen(80, function () {
  console.log("Server is running...");
});
