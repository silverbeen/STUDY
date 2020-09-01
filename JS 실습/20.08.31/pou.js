function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    document.getElementById("sum").innerHTML =11+5;
    //document.write(5+10);  테스트용으로만 써야함
    
    document.getElementById("demo1").innerHTML="hello, nice meet you!!";
    document.getElementById("demo2").innerHTML="my name is eunbin";

  }

function mysum(){
    let a, b,c;
    a=4;
    b=5;
    c=a+b;
    document.getElementById("test").innerHTML=c;
}

function myname(){
    var name, nickname;
    name = "강은빈";
    nickname = " kelly";
    document.getElementById("test2").innerHTML=name+nickname;
}
  
let x= mydustks(4,3);
document.getElementById("dustks").innerHTML=x;

function mydustks(a, b){
    return a*b;
}

// type 유용하게 사용하기
let car={type:"fiat", modal:"modal", money:"1000$"};
document.getElementById("car").innerHTML=car.type + car.modal + car.money;

//날짜를 알려주는 함수
function displayDate(){
    document.getElementById("Date").innerHTML=Date();
}

//문자열의 길이를 알려줌
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

document.getElementById("lenght").innerHTML= txt + sln;

//indexOF() 어디서 몇번째 부터 시작되는지
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

document.getElementById("indexOF2").innerHTML=str;
document.getElementById("indexOF").innerHTML=pos+ "번쨰에서부터 시작됩니다";

//slice() 그부분만 잘라서 표헌
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

document.getElementById("slice").innerHTML=res;

//7 부터 출력 
var str = "Apple, Banana, Kiwi";
var res = str.slice(7);
document.getElementById("slice1").innerHTML=res;

//substring() slice 와 유사
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
document.getElementById("substring").innerHTML=res;

//substr() slice 와 유사
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
document.getElementById("substr").innerHTML=res;

//replace
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
document.getElementById("replace").innerHTML=n;



