var h1 = document.querySelector("h1");
var inner = document.querySelector("h1").innerHTML;
$("button").click(function () {
  h1.innerHTML = "";
  for (let i = 0; i < inner.length; i++) {
    setTimeout(function () {
      h1.innerHTML = h1.innerHTML + inner[i];
    }, i*500);
  }
});
