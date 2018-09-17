var indexRating = 0;
var idRating;
var el;
var currentRating;
var maxRating;
var myRating;

$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

    $(".scroll-box").mCustomScrollbar();

});

$(document).ready(function() {		

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity,
			width: "100%"
		});

	});

	$(".big_slider").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: ".miniature_slider"
    });

    $(".miniature_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: ".big_slider"
    });

	if( $(".rating").length > 0 )  {

        $(".rating").each(function() {

            indexRating++;
            idRating = $(this).attr("id");
            el = document.querySelector("#" + idRating);
            currentRating = $(this).attr("data-rate");
            maxRating= 5;
            myRating = rating(el, currentRating, maxRating);

        });
        
    }

    $(".brands-slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 3
    });

    $(".reviews-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $(".reviews-slider_wrapp .append_dots")
    });

    $(".slick-arrow_2").click(function() {

        var sliderName = $(this).closest("[data-controls]").attr('data-controls');

        parentBlock = $("[data-slider = '"+ sliderName +"']");

        if( $(this).hasClass("slick-prev_2") ) {

            parentBlock.find(".slick-prev").trigger("click");

        } else if( $(this).hasClass("slick-next_2") ){

            parentBlock.find(".slick-next").trigger("click");

        }

    });

    if( $("#denomination").length > 0 ) {

        var denominationSlider = document.getElementById('denomination');

        noUiSlider.create(denominationSlider, {
            connect: [true, false],
            // behaviour: 'tap',
            start: 500,
            range: {
                'min': [ 0 ],
                'max': [ 100000 ]
            }
        });

        var node = $("#denomination_value");

        denominationSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
            node.attr("type" , "text");
            node.val(parseInt(values[handle]) + ' руб');
        });

        node.click(function(e) {
            e.preventDefault();
            $(this).val(parseInt($(this).val()));
            $(this).attr("type" , "number");
        });

        $(document).mouseup(function (e){

            node = $("#denomination_value");

            if (!node.is(e.target)
                && node.has(e.target).length === 0) {

                node.attr("type" , "text");
                node.val(node.val() + ' руб');
                var range = parseInt( node.val() );
                denominationSlider.noUiSlider.set([range, null]);

            }

        });

    }

    $(".big_slider_2").not(".slick-initialized").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: ".miniature_slider_2"
    });

    $(".miniature_slider_2").not(".slick-initialized").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        vertical: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: false,
        verticalSwiping: true,
        asNavFor: ".big_slider_2"
    });

    $(".categories-goods-slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $(".categories-goods-slider_nav .prev_btn"),
        nextArrow: $(".categories-goods-slider_nav .next_btn")
    });

    $('[data-toggle="datepicker"]').datepicker();

    // $(".datepicker_wrapp").click(function(e) {

    //     $(this).find("input").trigger("click");

    // });

});

