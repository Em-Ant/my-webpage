
/**************************************************************
---------------------------------------------------------------		
		Jquery Script for the EmAnt's Personal Webpage
---------------------------------------------------------------
	    		
		Author: EmAnt			Date: 05/2015
			
**************************************************************/



$(document).ready(function() { // makes sure the whole site is loaded
	
	var active = "home";
	var timeout=1500;
	var bgPos;
	
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
    
    setTimeout(function(){		//wait  then show home
			$("#info").animate({opacity:1},timeout);   
			$("#logo").animate({opacity:1,top:"0px"},timeout);
			$(".links").animate({opacity:1,left:"0px"},timeout);
			$("footer").animate({opacity:1},timeout);   
			$("#primary").animate({opacity:1},1.5*timeout);
			$("footer").animate({opacity:1},1.5*timeout);
			$("#bg").animate({opacity:1},timeout);  
    	},timeout);
    
    $('.main-links')
    	.hover(function(){
    		bgPos = $(this).css('background-position').split(' ');
    		$(this).css('background-position',bgPos[0]+' -48px');
    	},function(){
    		$(this).css('background-position',bgPos[0]+' '+bgPos[1]);
    	});
});


