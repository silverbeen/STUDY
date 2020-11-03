$("#option1").on("change", function () {
  if ($("#option1").val() == "셔츠") {
    $(".size-select1").show();
    $(".size-select2").hide();
    $(".size-select3").hide();
  } 
  else if($('#option1').val() == "바지")
  {
    $(".size-select2").show();
    $(".size-select1").hide();
    $(".size-select3").hide();
  }

  else if($('#option1').val()=="모자"){
    $(".size-select3").show();
    $(".size-select1").hide();
    $(".size-select2").hide();
  }
});


