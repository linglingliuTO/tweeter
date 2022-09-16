

$(document).ready(function() {

  
  
  $(textbox).on('input', function() {

  
   const remainingChar = 140-$(this).val().length;
   //const counter1 = document.getElementsByClassName("counter");
   const counter2 = $(this).parent().children('#counter_div').children('.counter');
   $(counter2).val(remainingChar);
  });



  

  
  
  



});