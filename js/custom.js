$(document).ready(function () {

    $('input[placeholder], textarea[placeholder]').placeholder();



    var params = {
        changedEl: ".custom-sel",
        visRows: 10,
        scrollArrows: true
    }
    cuSel(params);

    $(window).load(function(){
        $(".panorama").panorama_viewer({
            repeat: true
        });
    });


    if($('#slider').length) {
	    $('#slider').slick({
	    	fade: true,
	    	speed: 1000,
	    	autoplay: true,
	    	autoplaySpeed: 6000,
	    	dots: true
	    });
    }

    fixHomeSliderHeight();
    $(window).on('resize', fixHomeSliderHeight);


    $(window).scroll(function(event) {
        var fromTop = $(this).scrollTop();
        var $up = $("#to-top");
        if(fromTop > $(window).height() * 0.75)
            $up.fadeIn(200);
        else
            $up.fadeOut(200);
    });
    $('#to-top').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $("body, html").animate({scrollTop: 0}, '400');
    });

    $('.search-form').on('focus', '.s', function(event) {
    	event.preventDefault();
    	$('#header').addClass('search-active');

    	$('.search-overlay').fadeIn(300);
    });
    $('.search-overlay').on('click', '.close', hideAdvancedSearch);


    $('header').on('click', 'a.geo-btn', function(event) {
    	event.preventDefault();
    	var that = $(this);
    	var div = $('.geo-locations-menu', that.parent());
    	div.fadeToggle(300);


    	$(document).mouseup(function (e){
            if ( ! that.is(e.target)
                && ! div.is(e.target)
                && div.has(e.target).length === 0) {
                div.fadeOut(300);
            }
        });
    });


    $('.main-menu').on('mousemove', '>li', function(event) {
    	var obj = $(this);

    	if(	! $('ul', obj).length )
    		return false;

    	obj.addClass('active');
    });

    $('.main-menu').on('mouseleave', '>li', function(event) {
    	var obj = $(this);

    	if(	! $('ul', obj).length )
    		return false;

    	obj.removeClass('active');
    });

    $('.container .moreWrapper').click(function(event) {
        event.preventDefault();

        $(this).css('display', 'none');

        $(this).parents('.container').find('.wrapper').slideDown(200);

    });

//	### Mobile Menu ###
	$('.menu-tumbler').click(function() {
		$(this).parent().toggleClass('opened-menu');
	});

	$('.mobile-menu a').click(function() {
		$(this).parents('.header-mobile').toggleClass('opened-menu');
	});

//	### Mobile Search ###
	$('.mobile-search').click(function(e) {
		var parent = $(this).parents('.header-mobile');

		if ( ! $(parent).hasClass('opened-search')) {
			parent.addClass('opened-search');
			$('.search-field').animate({width:'toggle'}, 500, function() {
				$('.search-field').focus();
			});

			return false;
        }
	});

	$('.search-field').focusout(function(e) {
	    $(this).animate({width:'toggle'}, 500, function() {
			$('.header-mobile').removeClass('opened-search');
		});
	});

    handleFixedMenu();
    $(window).on('scroll', handleFixedMenu);

//	### Pansion Galery ###
	$('.pansion-slider').each(function() {
		$(this).slick({
			fade: true,
			speed: 1000,
			autoplay: false,
			dots: false,
			prevArrow: $(this).prev('.photoControls').find('.prevPhoto'),
			nextArrow: $(this).prev('.photoControls').find('.nextPhoto')
		});
		$(this).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			var currSlideDiv = $(this).find('.slide')[currentSlide];
			var currA = $(currSlideDiv).find('a');

			var nextSlideDiv = $(this).find('.slide')[nextSlide];
			var nextA = $(nextSlideDiv).find('a');
			var nextHref = $(nextA).attr('href');

			var zoom = $(this).prev('.photoControls').find('.zoom');
			$(zoom).attr('href', nextHref);

			$(currA).removeClass('zoomOut');
			$(currA).addClass('zoom');

			$(nextA).removeClass('zoom');
			$(nextA).addClass('zoomOut');
		});
	});

	$('.zoom').fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

//	### Yandex Socials ###
	$('.shareButtons').click(function(event) {
        event.preventDefault();

		console.log(this);
		$(this).parent().find('.ya-share2').toggle();
	});
});

slideHeight = 0;

function hideAdvancedSearch() {
	$('#header').removeClass('search-active');
	$('.search-overlay').fadeOut('300');
}

function fixHomeSliderHeight() {
    var wW = $('body').outerWidth(),
        strangeMargin = 15;

    if(wW > 991 - strangeMargin) {
        slideHeight = $(window).height();
	   $("#slider, #slider .slide, #slider .slide .slide-info").height( $(window).height() );
	//    $(".home #header").css('margin-bottom', $(window).height() - 160);
	   $('#slider-placeholder').css('height', $(window).height() - 170);
    } else {
        slideHeight = 0;
        $("#slider, #slider .slide, #slider .slide .slide-info").css( 'height', 'auto' );
        // $(".home #header").css('margin-bottom', 'auto');
		$('#slider-placeholder').css('height', 'auto');
    }
}

function handleFixedMenu() {
    if( ! slideHeight)
        return false;

    if($(window).scrollTop() > slideHeight)
        $('#header-fixed').fadeIn(300);
    else
        $("#header-fixed").fadeOut(200);
}



