/* var d=new Date()
    h=d.getHours(),
    m=d.getMinutes(),
    s=d.getSeconds(),
    time=h+"시" + m +"분" + s + "초";

document.write(time); */

/* var d=new Date()
    h=d.getHours(),
    m=d.getMinutes(),
    s=d.getSeconds();

var h12 = (h > 12) ? ( h - 12) : h;
var ampm = (h < 12) ? "오전" : "오후 ";
var min_o = (m < 10) ? "0" : "";
var sec_o = (s < 10) ? "0" : "";
var time=  ampm + "" +h12 + ":" + min_o + ":" + sec_o+ s;
document.write(time);

 */
/* var d=new Date()
var year= d.getFullYear(),
    month=d.getMonth(),
    date=d.getDate(),
    day=d.getDay();

switch(day){
    case 0 : var dd = "일"; break;
    case 1 : var dd = "월"; break;
    case 2 : var dd = "화"; break;
    case 3 : var dd = "수"; break;
    case 4 : var dd = "목"; break;
    case 5 : var dd = "금"; break;
    case 6 : var dd = "토"; break;
    default:break;
}

document.write(year + "년 ");
document.write((month + 1) + "월 ");
document.write(date + "일 ");
document.write(dd + "요일<br>"); */

//날짜 변수 2016년 7월
var new_year = 2016, new_month = 6,
    d =new Date(new_year, new_month, 1), // 달력에 표시랄 시작일 부터 조회하기 위해 마지막 변수로 1을 입력
    //월 별 일수 구하기
    d_length = 32 - new Date(new_year, new_month, 32).getDate(),
    year = d.getFullYear(),
    month = d.getMonth(),
    date = d.getDate(),
    day = d.getDay();

//caption  영역 정보와 날찌 표시 객체
var caption_year = document.querySelector('.year'),
    caption_month = document.querySelector('.month');
    //테이블 caption 영역 내의 연도와 월을 표시할 객체를 변수로 지정

var start_day = document.querySelectorAll('tr td');

for(var i = day; i< day + d_length; i++){
    start_day[i].innerHTML=date;
    date++;
}

caption_year,innerHTML = year;
caption_month.innerHTML = month + 1;

function calender(new_year, new_month){
    var d = new Date(new_year, new_month-1,1),
        d_length = 32 - new Date(new_year, new_month-1, 32).getDate(),
        year = d.getFullYear(),
        month = d.getMonth(),
        date = d.getDate(),
        day = d.getDay();

    var caption_year = document.querySelector('.year'),
        caption_month = document.querySelector('.month');

    var start_day = document.querySelectorAll('tr td');


    //테이블 초기화 
    for(var i = 0; i < start_day.length; i++){
        start_day[i].innerHTML='&nbsp;';
    }

    for(var i = day; i < day + d_length; i++){
        start_day[i].innerHTML=date;
        date++;
    }

    caption_year.innerHTML= year;
    caption_month.innerHTML=month+1;
}

    var prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        year = new Date().getFullYear(),
        month = new Date().getMonth() + 1;


    prev.onclick = function(){
        calender(year, --month);
        console.log(month);
    };

    next.onclick = function(){
        calender(year, ++month);
        console.log(month);
    };

