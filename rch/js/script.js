//калькулятор
$(document).ready(function(){
  if (window.calc) {  
    $('#calc').recalc(calc);
  };
});

//меню
$(function(){ 
"use strict"; 
	$('#menu_icon').click( function() { 
	$('#menu').toggleClass('open'); 
	}); 
});