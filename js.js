jQuery(document).ready(function($){

	$('.block_question_1 .button').click(function(e){
		e.preventDefault();
		$('.block_question_1').hide();
		$('.block_question_2').fadeIn(600);
	});
	$('.block_question_2 .button').click(function(e){
		e.preventDefault();
		$('.block_question_2').hide();
		$('.block_question_3').fadeIn(600);
	});
	$('.block_question_3 .button').click(function(e){
		e.preventDefault();
		$('.block_questions').hide();
		$('.block_wait').fadeIn(600);
		setTimeout(function(){
			$('.progressbar').each(function(){
				var t = $(this);
				var dataperc = t.attr('data-perc'),
					barperc = Math.round(dataperc*4.34);
				t.find('.bar').animate({width:barperc}, dataperc*25);
			});
			setTimeout(function(){
				$('.block_wait').hide();
				$('.block_thank_you').fadeIn(600);
/*
				$('.bg_2').fadeIn(600);
*/
			}, 4000);
		}, 1000);
	});

});