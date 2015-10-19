;(function($) {
	var $window = $(window),
		$body = $('body'),
		winHeight = $(window).height(),
		$wizard = $('.wizard');

		$('html')toggleClass('no-js js');

	$('.container-content').css({minHeight: winHeight - $('header').outerHeight() - $('footer').outerHeight()});

	if( typeof $wizard != 'undefined' && $wizard.length > 0 ) {
		$('.pace').css({
			zIndex: 9999
		});
	}

  	$('.toggle').on('click', function(e) {
    	var $this = $(this);

    	$($this.data('selector')).toggleClass($this.data('class'));
    
    	e.preventDefault();
  	});

	$('[data-toggle="popover"]').popover();

	$body.on('click touchstart', function(e) {
		var $target = $(e.target);

		if( $target.data('toggle') !== 'popover' && $target.parents('[data-toggle="popover"]').length === 0  && $target.parents('.popover.in').length === 0 ) { 
			$('[data-toggle="popover"]').popover('hide');
		}
	});

	$('.switch button').on('click', function(e) {
		var $this = $(this),
			$switch = $this.parents('.switch');

		$switch.find('.active').removeClass('active');
		$($switch.data('targets')).addClass('hide');

		$this.addClass('active');
		$($this.data('target')).removeClass('hide');

		if( $switch.data('block') ) {
			if( $this.data('trigger') == 'add' )
				$($switch.data('block')).addClass('hide');
			else
				$($switch.data('block')).removeClass('hide');
		}

		e.preventDefault();
	});
})(window.jQuery);