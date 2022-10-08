

$(document).ready(function() {
  
  $('#tweet-text').on('keyup', function() {
   const remainingChar = 140-$(this).val().length;
   //const counter1 = $('.counter')
   //const counter1 = document.getElementsByClassName("counter");
   //const counter2 = $(this).parent().children('#counter_div').children('.counter');
   $('.counter').val(remainingChar);
   
   


   // 

   if (remainingChar < 0) {
  $('.counter').addClass('negative');
   } else {
    $('.counter').removeClass('negative');
   }

   
  })

});


