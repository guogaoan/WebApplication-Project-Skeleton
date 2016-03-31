$(document).ready(function () {
    $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });
    
	$('ul a').click(function() {
		var $anchor = $(this);
		
		$('html, body').animate({
		scrollTop: $($anchor.attr('href')).offset().top
		}, 2000);
		return false;
		helpers : {
		}
		});
});