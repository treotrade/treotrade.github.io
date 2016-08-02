$(document).ready(function(){
	// hide preloder
	// $(".preloader").hide();

	// header animation on scroll
	$(window).on('load scroll',function() {
		if ($(this).scrollTop() >= 100) {
			// show header
			$("header.main-header").addClass("shown");
		} else {
			// hide header
			$("header.main-header").removeClass("shown");    
		} 
	});

	// add margin to header's next element
	$("header.main-header").next().css("margin-top","85px");


	// //google maps
	// new Maplace({
	//     map_options: {
	//     	controls_on_map : false,
	//     	show_markers: false,
	//     	draggable : false,
	//     	show_infowindows: false,

	//         set_center: [51.5044953, -0.0117329],
	//         zoom: 14,

	//         styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}],
	//     }
	// }).Load();
});