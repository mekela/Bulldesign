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
	  $( ".fixed_menu_overlay" ).toggleClass( "active" );
	});
	$( ".hamburger" ).click(function() {
	  $( '.hamburger' ).toggleClass( "is-active" );
	});
	$( ".fixed_menu_overlay" ).click(function() {
	  $( ".fixed_menu" ).toggleClass( "active" );
	  $( ".fixed_menu_overlay" ).toggleClass( "active" );
	  $( '.hamburger' ).toggleClass( "is-active" );
	});

	//load
	$( ".load_page_wrap" ).delay( 8000 ).fadeOut( 400 );

	$(".load_text").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        stringsElement: $('.typed-strings'),
        typeSpeed: 7,
        backDelay: 500,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false
        
    });

    //load2
 //    Revealer.prototype.options = {
	// 	// total number of revealing layers (min is 1)
	// 	nmbLayers : 1,
	// 	// bg color for the revealing layers
	// 	bgcolor : '#fff',
	// 	// effect classname
	// 	effect : 'anim--effect-1',
	// 	// callback
	// 	onStart : function(direction) { return false; },
	// 	// callback
	// 	onEnd : function(direction) { return false; }
	// };






});

new WOW().init();

$(window).scroll(function(){
  var threshold = 10; 
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
	if( op <= 0 ){
		$(".load_page_wrap").hide(); 
	} else {
		$(".load_page_wrap").hide();
	}
	
});

$(window).scroll(function() {
	var st = $(this).scrollTop();
	var photo_grid = $( ".photo_grid" ).offset().top;
	if(st>photo_grid){
		st2=(st-photo_grid)/20;
		$(".photo_grid_item.float_left").stop().animate({"marginTop": (st2) + "px"}, "slow" );
	}
});

// $(window).scroll(function() {

// 	var st = $(this).scrollTop() /20;

// 	$(".photo_grid_item.float_left").css({
// 		"transform" : "translate3d(0px, " +  st + "%, .01px)",
// 		"-webkit-transform" : "translate3d(0px, " +  st  + "%, .01px)"
// 	});

// });
// $(window).scroll(function() {

// 	var st = $(this).scrollTop() /60;

// 	$(".photo_grid_item.float_right").css({
// 		"transform" : "translate3d(0px, " +  st + "%, .01px)",
// 		"-webkit-transform" : "translate3d(0px, " +  st  + "%, .01px)"
// 	});

// });

// $(window).scroll(function() {

// 	var st = $(this).scrollTop() / -60;

// 	$(".photo_grid").css({
// 		"transform" : "translate3d(0px, " +  st + "%, .01px)",
// 		"-webkit-transform" : "translate3d(0px, " +  st  + "%, .01px)"
// 	});

// });