$(window).scroll(function () {
    var height = $(window).scrollTop();
    /*     console.log(height); */

    var y = (-1 / 900) * height + 1000 / 900; // 투명도
  // -1*600*height                    1222/600(원래투명도)
  console.log(y);
 /*  var a = (-1 / 200) * height + 1000 / 150; */
  $(".flower1").css("opacity", y);
/*   if(y>1){
      y=1;
      $(".flower1").css('transform', 'scale('+(y*4)+')');
      
    } 
  $(".flower1").css('transform', 'scale('+y+')'); */
  $(".flower2").css("opacity", y+1);
  
/*   if(a>1){
      a=1;
      $(".flower2").css('transform', 'scale('+(a*4)+')');
    }
    $(".flower2").css('transform', 'scale('+a+')'); */
    
});
