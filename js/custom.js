$(document).ready(function () {

    $('input[placeholder], textarea[placeholder]').placeholder();


    jQuery(document).ready(function(){
    var params = {
            changedEl: ".custom-sel",
            visRows: 10,
            scrollArrows: true
        }
        cuSel(params);
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


    $('#header').on('click', 'a.geo', function(event) {
    	event.preventDefault();
    	var that = $(this);
    	var div = $('.geo-locations-menu', '#header');
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

    $('#services .container > button.more').click(function() {
      $(this).css('display', 'none');

      $('#services .wrapper').slideDown(200);
    });

//	### Mobile Menu ###
	$('.menu-tumbler').click(function() {
		$(this).parent().toggleClass('opened-menu');
	});

	$('.mobile-menu a').click(function() {
		$(this).parents('.header-mobile').toggleClass('opened-menu');
	});

//	### Mobile Search ###
	$('.mobile-search').click(function() {
		var parent = $(this).parent();

		if ($(parent).hasClass('opened-search'))
			doSearch();
		else
			$(this).parent().toggleClass('opened-search');
	});

	$('.search-field').keyup(function(e){
	    if(e.keyCode == 13)
			doSearch();
	});

	$('.search-field').focusout(function() {
		$(this).parents('.header-mobile').toggleClass('opened-search');
	});
});

function hideAdvancedSearch() {
	$('#header').removeClass('search-active');
	$('.search-overlay').fadeOut('300');
}

function fixHomeSliderHeight() {
	$("#slider, #slider .slide, #slider .slide .slide-info").height( $(window).height() );
	$(".home #header").css('margin-bottom', $(window).height() - 160);
}
