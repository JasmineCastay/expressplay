$(document).ready(function(){
    $('.nav navbar-nav navbar-right').hover(function(){
        $('input').fadeIn('fast');
    },
    function(){
        $('input').fadeOut('fast');
    }
);

$(document).ready(function(){
$('li').hover(
    function(){
      $(this).addClass('.active');
   },
   function(){
      $(this).removeClass('.active');
   }
);