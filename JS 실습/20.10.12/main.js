//로그인 모달 띄우기
/* $('#login').on('click', function(){
    $('.login-modal').show();
});
$('#close').on('click', function(){
    $('.login-modal').hide();
}); */

let login = document.getElementById('login');
let login_modal = document.querySelector('.login-modal');
let close = document.querySelector('#close');

login.addEventListener('click', function(){
    login_modal.style.display = 'block';
})
close.addEventListener('click', function() {
    login_modal.style.display = 'none';
})

//hover 로 아래 띄우기 
$('#header').on('mouseover', function(){
  $('#header-nav-right').slideToggle();
});


/*  let header = document.querySelector('#header');
 let header_nav = document.querySelector('#header-nav-right');

 header.addEventListener('mouseover', function(){
    header_nav.style.display = 'block';
    header_nav.style.transition = 'all 1s';
 }); */




//슬라이드 바 
var toggle = false;
/* $('#show-menu').on('click', function(){
  toggle = !toggle;
  if(toggle){
    $('.left-menu').css('margin-left', '0px');
  }
  else{
    $('.left-menu').css('margin-left', '-250px');
  }
}); */

let show_menu = document.getElementById('show-menu');
let left_menu = document.querySelector('.left-menu');

show_menu.addEventListener('click', function() {
    toggle = !toggle;
    if(toggle){
        left_menu.style.marginLeft = '0px'; 
    }
    else{
        left_menu.style.marginLeft = '-250px';
    }
})
//슬라이드 버튼
/*$('#slide-1').on('click', function(){
  $('.slide-container').css('transform', 'translateX(0vw');
});

$('#slide-2').on('click', function(){
  $('.slide-container').css('transform', 'translateX(-100vw');
});3
$('#slide-3').on('click', function(){
  $('.slide-container').css('transform', 'translateX(-200vw');
});*/


//슬라이드
/* let button1 = document.getElementById('slide-1');
let button2 = document.getElementById('slide-2');
let button3 = document.getElementById('slide-3');
let slide = document.getElementById('slide');

button1.addEventListener('click', function() {
    slide.style.transform = 'translateX(0vw)';
});
button2.addEventListener('click', function() {
    slide.style.transform = 'translateX(-100vw)';
});
button3.addEventListener('click', function() {
    slide.style.transform = 'translateX(-200vw)';
}); */


//배열로 슬라이드 하기
let slide = document.getElementById('slide');
let buttonDiv = document.getElementById('buttonDiv');
let slideChild = buttonDiv.children;
let i = 0;
window.onload = function(){
    for(i = 0; i < 3; i++){
        slideChild[i];
        console.log(slideChild[i]);
    }
}

slideChild[0].addEventListener('click', function(){
    slide.style.transform = 'translateX(0vw)';
});
slideChild[1].addEventListener('click', function(){
    slide.style.transform = 'translateX(-100vw)';
});
slideChild[2].addEventListener('click', function(){
    slide.style.transform = 'translateX(-200vw)';
});

//스크롤을 내리면 상단 메뉴의 배경 색, 글자 색 바뀜

/* $(window).on('scroll', function() {
    $('.nav-menu').css({backgroundColor: 'black', color: 'withe', transform: '1s'});
}) */

$(window).on('scroll', function() {
    if($(window).scrollTop() > 200 ){
        $('.nav-menu').addClass('nav-black');
        $('.nav-menu h4').addClass('.tilte');
    }
    else if($(window).scrollTop() <= 200 ) {
        $('.nav-menu').removeClass('nav-black');
        $('.nav-menu h4').removeClass('.tilte');
    }
})

