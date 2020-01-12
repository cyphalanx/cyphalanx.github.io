jQuery(function ($) { "use strict";
	$("#navigation").sticky({
		topSpacing : 0
	});
	$('.image-popup').magnificPopup({
    type: 'image',
    removalDelay: 160, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            // just a hack that adds mfp-anim class to markup
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    closeOnContentClick: true,
    midClick: true,
    fixedContentPos: false,
    fixedBgPos: true
});

});
var wow = new WOW(
    {
      offset:       100,
      mobile:       false
    }
 );
 wow.init();
var scroll = new SmoothScroll('a[href*="#"]');
