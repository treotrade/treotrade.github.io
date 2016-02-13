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

	// drop down in menu
	$("ul.first-level_menu").children("li").children("a").each(function(){
		$(this).click(function(e){
			// $("ul.second-level_menu").each(function(){
			// 	$(this).slideUp(200, "easeInCirc");
			// });

			if($(this).next("ul.second-level_menu").html() !== undefined){
				e.preventDefault();
				$(this).next("ul.second-level_menu").slideToggle(200, "easeInCirc");
			}

			if($(this).find(".error").html() !== undefined){
				e.preventDefault();
				$(this).find(".error").show();
			}
		});
	});

	$(".menu-wrapper .menu_demo").children("li").children("a").each(function(){
		$(this).mouseenter(function() {
			if ($(".demorolle img").css('opacity') != "0.25")
				$(".demorolle img").stop().animate({
					top: "-200px",
					opacity : "0.25"
				},800);
			$(".demorolle img").attr("src",$(this).data("img"));
		});
		$(this).mouseout(function() {
			$(".demorolle img").attr("src","");
			$(".demorolle img").finish().animate({
				top: "0px",
				opacity : "0"
			},200);
		});
		$(this).click(function(e){
			e.preventDefault();
		});
	});

	// show menu content
	$(".menu").click(function(){
		$(".menu-content").animate({
			left : "0",
			opacity : "1"
		},200,"easeInCirc");
		$(".menu-wrapper").delay(300).fadeIn(200,"easeInCirc");
		$(".first-level_menu").children("li").each(function(){
			var _index = $(this).index();
			$(this).children("a").delay((_index * 25) + 100).animate({
				marginBottom : '0',
				opacity : "1"
			},200);
		});
	});

	// hide meny content
	$(".close-button").click(function(e){
		e.preventDefault();
		var links_length = $(".first-level_menu").children("li").length;
		// reset links' styles
		$(".first-level_menu").children("li").each(function(){
			var _index = $(this).index();
			$(this).children("a").delay( ( (links_length - _index) * 25 ) + 100 ).animate({
				marginBottom : '50px',
				opacity : "0"
			},200);
		});
		// hide menu link
		$(".menu-wrapper").delay( (links_length * 25) + 200).fadeOut(200,"easeInCirc");
		// hide menu content
		$(".menu-content").delay( (links_length * 25) + 600).animate({
			left : "-100%",
		},200,"easeInCirc");
	});

	//google maps
	new Maplace({
	    map_options: {
	    	controls_on_map : false,
	    	show_markers: false,
	    	draggable : false,
	    	show_infowindows: false,

	        set_center: [51.5044953, -0.0117329],
	        zoom: 14,

	        styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}],
	    }
	}).Load();
});