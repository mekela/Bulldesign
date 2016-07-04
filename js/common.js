$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//show menu
	$( ".menu_item" ).click(function() {
	  $( ".fixed_menu" ).toggleClass( "active" );
	});

	
});