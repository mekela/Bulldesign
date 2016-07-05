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
	$( ".hamburger" ).click(function() {
	  $( '.hamburger' ).toggleClass( "is-active" );
	});

	//load
	$( ".load_page_wrap" ).delay( 15000 ).fadeOut( 400 );

	$(".load_text").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        stringsElement: $('.typed-strings'),
        typeSpeed: 30,
        backDelay: 500,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });
});

new WOW().init();