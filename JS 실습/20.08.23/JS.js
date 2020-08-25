// function clickHandler() {
//     alert("Hello, World!");
//  }

//  function love(){
//      alert("사랑해 윤석훈");
//  }
//  function seockhun(event) {
//  var eType = event.type;
//  /* 다음은 호환성을 위한 것이다. */
//  /* Moz는 이벤트 객체의 target 프로퍼티로 채운다. */
//  /* IE는 srcElement 프로퍼티로 채운다.*/
//  var eTarget = event.target || event.srcElement;

//  alert( "Captured Event (type=" + eType + ", target=" + eTarget );
//  }

 
//  function mouseeventHandler(event) {

//      /*다음은 호환성을 위한 것이다. */
//      /* IE는 기본적으로 이벤트 객체를 전달하지 않는다. */
//      if (!event) event = window.event;

//      /* 미리 이벤트 타입과 타켓 얻기 */
//      var eType = event.type;
//      var eTarget = event.target || event.srcElement;
//      alert(eType +' event on element with id: '+ eTarget.id);
//  }

//  function onloadHandler() {
//      /*  페이지의 body 엘리먼트를 참조하여 얻기 */
//      var body = document.body;
//      /* 클릭되기 위한 span 엘리먼트 생성하기 */
//      var span = document.createElement('span');
//      span.id = 'ExampleSpan';
//      span.appendChild(document.createTextNode ('Click Here!'));

//      /* 특정 마우스 이벤트를 받기 위해 spna 객체 등록하기 - 
//      이벤트들의 소문자에 유의하라 그러나 당신이 그것을 치환하기 위한 이름의 선택은 자유다.
//      */
//      span.onmousedown = mouseeventHandler;
//      span.onmouseup = mouseeventHandler;
//      span.onmouseover = mouseeventHandler;
//      span.onmouseout = mouseeventHandler;

//      /* 페이지에 span 보여주기 */
//      body.appendChild(span);   
//  }

//  window.onload = onloadHandler; // 우리가 핸들러를 치환한 이후에는 우리는 함수 이름 뒤에 ()을 붙여서는 안된다

// function keypressHandler() {
//     alert ("Hello, World!");
//   }



document.getElementById("name").textContent = "Hello, World";

