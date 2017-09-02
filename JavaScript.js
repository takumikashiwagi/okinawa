$(document).ready(function(){
  var position = $(".section-margin").offset().top;

  $(".scroll-button").click(function(){
    $("html,body").animate({
        scrollTop : position
    }, {
        queue : false
    });
  });
});
