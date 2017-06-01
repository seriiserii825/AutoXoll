$(function () {
	/*Services popup
	===============================*/
	$('#js-services .services__arrow-down').on('click', function(){
		var ths = $(this);
		var attr = ths.attr('data-toggle');
		if($(attr).is(':visible')){
			$('#js-services .services-popup').fadeOut();
			$('#js-services .services__arrow-down').removeClass('active');
			$('#js-services .services__item').removeClass('active');
		}else{
			$('#js-services .services-popup').fadeOut();
			$('#js-services .services__arrow-down').removeClass('active');
			$('#js-services .services__item').removeClass('active');
			$(attr).fadeIn();
			ths.addClass('active');
			ths.parent().addClass('active');
		}
	});

	/*fancybox
	===============================*/
	$('[data-fancybox]').fancybox();



}());
