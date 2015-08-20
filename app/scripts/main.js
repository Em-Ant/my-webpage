
/**************************************************************
---------------------------------------------------------------
		Jquery Script for the EmAnt's Personal Webpage
---------------------------------------------------------------

		Author: EmAnt			Date: 05/2015

**************************************************************/

'use strict';

$(document).ready(function() { // makes sure the whole site is loaded

	var timeout = 1500;
	var bgPos;

	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow': 'visible'});

    setTimeout(function(){		//wait  then show home
			$('#info').animate({opacity: 1}, timeout);
			$('#logo').animate({opacity: 1, top: '0px'}, timeout);
			$('.links').animate({opacity: 1, left: '0px'}, timeout);
			$('footer').animate({opacity: 1}, timeout);
			$('#primary').animate({opacity: 1}, 1.5 * timeout);
			$('footer').animate({opacity: 1}, 1.5 * timeout);
			$('#bg').animate({opacity: 1}, timeout);
		}, timeout);

    $('.main-links')
	.hover(function(){
		bgPos = $(this).css('background-position').split(' ');
		$(this).css('background-position', bgPos[0] + ' -48px');
	}, function(){
		$(this).css('background-position', bgPos[0] + ' ' + bgPos[1]);
	});


	/**
	* Contacts Form validation setup
	*/

	var validator = $('#contacts-form').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			message: 'required'
		},
		errorClass: 'has-error',

		validClass: 'has-success',

		highlight: function(el, errClass, validClass){
			$('#' + $(el).attr('name') + '-group').addClass(errClass).removeClass(validClass);
		},

		unhighlight: function(el, errClass, validClass){
			$('#' + $(el).attr('name') + '-group').removeClass(errClass).addClass(validClass);
		},

		onkeyup: function(element) {
			$(element).valid();
		},
		errorPlacement: function(error, element){
			$('#' + $(element).attr('name') + '-err').append(error);
		},

		submitHandler: function(form) {
			$('.modal-footer .btn').prop('disabled', 'disabled').addClass('disabled');
			$('#message-tx').hide().append($('<label class="text-primary">Waiting for Response...</label>')).fadeIn();
			var data = {
				'action': 'secret-action'
			};
			data = $(form).serialize() + '&' + $.param(data);
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: './request.php', //Relative or absolute path to response.php file
				data: data,
				success: function(){
					$('#message-tx').empty().append($('<label class="text-success">Message Sent !</label>'));
					formReset();
					setTimeout(function(){
						$('.modal-footer .btn').prop('disabled', '').removeClass('disabled');
						$('#message-tx').fadeOut(function(){$(this).empty(); });
					}, 2000);
				},
				error: function(){
					$('#message-tx').empty().append($('<label class="text-danger">Unauthorized Operation !</label>'));
					setTimeout(function(){
						$('.modal-footer .btn').prop('disabled', '').removeClass('disabled');
						$('#message-tx').fadeOut(function(){$(this).empty(); });
					}, 2000);
				}
			});
		}
	});

	function formReset(){
		validator.resetForm();
		$('.form-group').removeClass('has-error').removeClass('has-success');
		$('#message-text').val('');
		$('#email-input').val('');
	}

	$('.modal-footer .btn').prop('disabled', '').removeClass('disabled');
	formReset();
});


