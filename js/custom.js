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

    $('.control-block').mousemove(function(event) {
        $('.control-body', this).stop(true, true).slideDown(400);
    });


    $('.control-block').mouseleave(function(event) {
        $('.control-body', this).stop(true, true).slideUp(200);
    });

    $('.control-block').on('click', '.next', function(event) {
        var $block = $(this).parent().parent().parent(),
            next = $('.head.active', $block).removeClass('active').next();

        if(next.length)
            next.addClass('active');
        else
            $('.head:first', $block).addClass('active');

        var pans = $('.head.active', $block).data('pans');

        changeFloor_Pans($block, pans);
    });

    $('.control-block').on('click', '.prev', function(event) {
        var $block = $(this).parent().parent().parent(),
            prev = $('.head.active', $block).removeClass('active').prev();

        if(prev.index() != 1) // strange behaviour. FIX later
            prev.addClass('active');
        else
            $('.head:last', $block).addClass('active');

        var pans = $('.head.active', $block).data('pans');

        changeFloor_Pans($block, pans);
    });


    $('.control-block').on('click', '.up', function(event) {
        var $block = $(this).parent().parent().parent(),
            $cont = $('.floors.active', $block)
            next = $('.floor.active', $cont).removeClass('active').next();

        console.log(next);
        if(next.length)
            next.addClass('active');
        else
            $('.floor:first', $cont).addClass('active');

        var pans = $('.head.active', $block).data('pans');

        changeFloor_Pans($block, pans);
    });

    $('.control-block').on('click', '.down', function(event) {
        var $block = $(this).parent().parent().parent(),
            $cont = $('.floors.active', $block)
            prev = $('.floor.active', $cont).removeClass('active').prev();

        if(prev.length)
            prev.addClass('active');
        else
            $('.floor:last', $cont).addClass('active');

        var pans = $('.head.active', $block).data('pans');

        changeFloor_Pans($block, pans);
    });




    function changeFloor_Pans($block, pans) {
        $('.floors', $block).removeClass('active');
        $('.floors[data-pans="' + pans + '"]', $block).addClass('active');

        var floor = $('.floors.active .floor.active', $block).data('floor');

        $('.body', $block).removeClass('active');
        $('.body[data-pans="' + pans + '"][data-floor="' + floor + '"]', $block).addClass('active');

        var pano = $('.panorama .img[data-pans="' + pans + '"][data-floor="' + floor + '"]'),
            panoSrc = pano.data('src');

        $('.panorama img.active').removeClass('active');
        pano.addClass('active');

        $('.pv-inner').css('background', 'url("' + panoSrc + '") repeat');
    }



    $('#pansion-description').on('click', '.toggler', function(event) {
        event.preventDefault();
        var parent = $(this).parents('.row'),
            html = $(this).html();

       $('.hidden-text', parent).toggleClass('hidden');

       $(this).html(html == "Развернуть<span>...</span>" ? "Свернуть<span>...</span>" : "Развернуть<span>...</span>");
    });


    if($('#slider').length) {
	    $('#slider').slick({
	    	fade: true,
	    	speed: 1000,
	    	autoplay: true,
	    	autoplaySpeed: 6000,
	    	dots: true
	    });

        fixHomeSliderHeight();
        $(window).on('resize', fixHomeSliderHeight);
    }




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

        $(this).hide();

		if ($(this).parent('.centered').length)
			$(this).parent('.centered').hide();

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
			dots: true,
			appendDots: $(this).next('.pansion-slider-dots'),
			customPaging: function(slider, i) {
				var imgUrl = $(slider.$slides[i]).find('img').attr('src');
				return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0"><div class="thumbMark"></div><img class="thumb" src="' + imgUrl + '"></button>';
			},
			prevArrow: $(this).parent().find('.pansion-slider-controls .prevPhoto')[0],
			nextArrow: $(this).parent().find('.pansion-slider-controls .nextPhoto')[0],
			slickFilter: '.tab1'
		});
		$(this).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			syncSliderWFancybox(this, currentSlide, nextSlide);
			check4ImgTitle(this, nextSlide);
		});
	});

	$('.zoom').fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$('.tabSelector .tabButton').click(chooseSliderTab);
	$('.tabSelector .tabButton.selected').click();

	// $('.tabSelector').each(function());

//	### Yandex Socials ###
	$('.shareButtons').click(function(event) {
        event.preventDefault();

		$(this).parent().find('.ya-share2').toggle();
	});
});

function syncSliderWFancybox(_this, currentSlide, nextSlide) {
	if ($(_this).prev('.pansion-slider-controls').find('.zoom').length) {
		var currSlideDiv = $(_this).find('.slide')[currentSlide];
		var currA = $(currSlideDiv).find('a');

		var nextSlideDiv = $(_this).find('.slide')[nextSlide];
		var nextA = $(nextSlideDiv).find('a');
		var nextHref = $(nextA).attr('href');

		var zoom = $(_this).prev('.pansion-slider-controls').find('.zoom');
		$(zoom).attr('href', nextHref);

		$(currA).removeClass('zoomOut');
		$(currA).addClass('zoom');

		$(nextA).removeClass('zoom');
		$(nextA).addClass('zoomOut');
	}
}

function check4ImgTitle(_this, currentSlide) {
	var currSlideDiv = $(_this).find('.slide')[currentSlide];
	var slideInfo = $(_this).parents('.pansionPhoto').find('.pansion-slider-info')[0];

	if ($(currSlideDiv).find('img[title]').length) {
		var img = $(currSlideDiv).find('img[title]')[0];
		var title = $(img).attr('title');
		var description = $(img).attr('description');

		$(slideInfo).find('h3').text(title);
		$(slideInfo).find('p').text(description);
		$(slideInfo).show();
	}
	else {
		$(slideInfo).hide();
	}
}

function chooseSliderTab(e) {
	var thisButton = e.currentTarget;
	var currTab = $(thisButton).attr('tab');
	var slider = $(thisButton).parents('.pansionPhoto').find('.pansion-slider')[0];

	$(thisButton).parents('.tabSelector').find('.tabButton').removeClass('selected');
	$(thisButton).addClass('selected');

	$(slider).slick('slickFilter','.tab'+currTab);
	$(slider).slick('slickGoTo', 0);
}

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
        slideHeight = 170; //offset from menu

    if($(window).scrollTop() > slideHeight)
        $('#header-fixed').fadeIn(300);
    else
        $("#header-fixed").fadeOut(200);
}
