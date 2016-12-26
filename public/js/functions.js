;(function($, window, document, undefined) {
	// vars
	var $win = $(window);
	var $doc = $(document);

	$doc.on('ready', function() {
		var owl = $('.main-slider');
		owl.owlCarousel({
			loop:true,
			dots:true,
			items: 1,
			autoplay: true
		});

		// owl.on('mousewheel', '.owl-stage', function(e) {
		//     if (e.deltaY > 0) {
		//         owl.trigger('prev.owl');
		//     } else {
		//         owl.trigger('next.owl');
		//     }

		//     e.preventDefault();
		// });

		$('.open-popup-link').magnificPopup({
			type:'inline',
			midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		});

		$('.close-popup').on( "click", function(e) {
			$.magnificPopup.close();
			e.preventDefault();
		});
	});

	
	$win
		.on('scroll', function() {
			var scrollTop = $win.scrollTop(),
				winHeight = $(window).height(),
				offsetTop = $('.stacking-imgs').offset().top + 360;
				
			if($win.width() > 767) {
				if (scrollTop > (offsetTop-winHeight)) {  
					$('.stacking-imgs').addClass('animate');
				} else {
					$('.stacking-imgs').removeClass('animate');
				}
			}
		});
})(jQuery, window, document);	