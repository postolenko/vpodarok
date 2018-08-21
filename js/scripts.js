var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var parentBlock;
var indexActiveTab;
var tabsParent;
var attrForTabLink;
var activeTabRadio;
var activeTabLink;

var titleVal;

var parentWrapp;
var dropdownBlock;

var fullHeight;
var hideHeight;

$(window).load(function() {

    $("select").each(function() {

        var parentBlock = $(this).closest(".select-block");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

});

$(window).resize(function() {

    getNavLinkHeight();
    getHLinesParams();

});

$(document).ready(function() {
   
	getNavLinkHeight();
	getHLinesParams();

    $(".count-box button").click(function(e) {

        e.preventDefault();

        parentBlock= $(this).closest(".count-box");

        var countInput = parentBlock.find(".count-num input");

        var countVal = countInput.val();

        if(countVal == "") {

            countVal = 1;

        }

        if( $(this).hasClass("minus-btn") && countVal > 1 ) {

            countVal--;

        } else if( $(this).hasClass("plus-btn")) {

            countVal++;

        }

        countInput.val(countVal);

    });


    $(".tooltip_link").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".tooltip_wrapp");

        var tooltip = parentBlock.find(".tooltip");

        tooltip.fadeIn(300);

    });

    $(".close-tooltip").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".tooltip");

        parentBlock.fadeOut(300);

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27 &&
            $(".tooltip").is(":visible") ) {

                $(".tooltip").fadeOut(300);

        }

    });

    $(document).mouseup(function (e){

        hide_element = $('.tooltip');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.fadeOut(300);
        }

    });

    // ---------------------------

    $(".tabs").each(function() {

        $(this).find(".tab-link").each(function() {

            if( $(this).hasClass("active") ) {

                indexActiveTab = $(this).index(".tab-link");

                $(this).click();

                return false;

            } else {

                indexActiveTab = 0;

            }

        });

        activeTabLink = $(this).find(".tab-link").eq(indexActiveTab);

        activeTabLink.click();
        activeTabLink.addClass("active");

        if( $(this).hasClass("cabinet_tabs") ) {

            titleVal = activeTabLink.attr("data-title");

            $(".cabinet_title").text(titleVal);

        }

    });

    $(".tab-link").click(function (e) {

        if( $(this).hasClass("active") ) {

            e.preventDefault();

        } else {

            tabsParent = $(this).closest(".tabs");
            attrForTabLink = $(this).attr("for");
            activeTabRadio = tabsParent.find(".radio-tab[id = '"+ attrForTabLink +"']");
            activeTabRadio.prop("checked", true);

            tabsParent.find(".tab-link").each(function () {
                
                if( $(this).hasClass("active") ) {

                    $(this).removeClass("active")

                }

            });

            $(this).addClass("active");

            if( tabsParent.hasClass("cabinet_tabs") ) {

                titleVal = $(this).attr("data-title");

                $(".cabinet_title").text(titleVal);

            }

        }

    });

    // -------------------------

    $(".fade-block .close_btn").click(function() {

        $(this).closest(".fade-block").slideUp(300);

    });

    // -------------------------

    $("input[type='tel']").mask("+7 (999) 999-99-99");

    $("input.input_type").mask("999 999 999 999");

    // -------------------------

    $(".table-row .checkbox input").click(function() {

        parentBlock = $(this).closest(".table-row");

        if($(this).prop("checked")) {

            parentBlock.addClass("active");

        } else {

            parentBlock.removeClass("active");

        }

    });

    // -------------------------

    $("[data-card-num]").click(function(e) {

        e.preventDefault();

        var cardNum = $(this).attr("data-card-num");

        cardNumInput = $(this).closest(".dropdown_input").find(".input_type");

        console.log(cardNum);

        cardNumInput.val(cardNum);

    });

    $(".show_list").click(function() {

        var dropdownList = $(this).closest(".dropdown_input").find(".dropdown_list");

        if( dropdownList.is(":hidden") ) {

            dropdownList.slideDown(300);

        } else {

            dropdownList.slideUp(300);

        }

    });

    // ---------------------------------

    $(".accordeon_wrapp").each(function() {

        $(this).find(".accordeon_item").each(function() {

            dropdownBlock = $(this).closest(".accordeon_item").find(".dropdown_block");

            if( !$(this).hasClass("active") ) {

                dropdownBlock.css({
                    "display" : "none"
                });

            }

        });

    });


    $(".accordeon_item_title").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".accordeon_item");

        dropdownBlock = parentBlock.find(".dropdown_block");

        if( parentBlock.hasClass("active") || dropdownBlock.is(":visible") ) {

            dropdownBlock.slideUp(300);

            parentBlock.removeClass("active");

        } else {

            parentWrapp = $(this).closest(".accordeon_wrapp");

            parentWrapp.find(".accordeon_item").each(function() {

                if( $(this).hasClass("active") || dropdownBlock.is(":visible") ) {

                    $(this).find(".dropdown_block").slideUp(300);

                    $(this).removeClass("active");

                }

            });

            dropdownBlock.slideDown(300);

            parentBlock.addClass("active");

        }

    });

    // ----------------------

    $(".scroll-box").each(function() {
        hideHeight = parseInt( $(this).attr("data-hideheight") );
        $(this).height(hideHeight);
        $(this).closest(".scroll-box_wrapp").find(".show_more").addClass("hide");
    });

    $(".show_more").click(function(e) {

        e.preventDefault();

        var scrollBox = $(this).closest(".scroll-box_wrapp").find(".scroll-box");

        if( $(this).hasClass("hide") ) {

            scrollBox.animate({
                "height" : 350 + "px"
            }, 400);

            $(this).removeClass("hide");

        } else {

            scrollBox.animate({
                "height" : 200 + "px"
            }, 400);

            $(this).addClass("hide");

        }

    });

    // ----------------------

    $(".dropdown_input").each(function() {

        $(this).find(".dropdown_list").css({
            "display" : "none"
        });

    });

    // -----------------------

    $(".show_popup").click(function(e) {

        e.preventDefault();

        popupName = $(this).attr("data-popup-name");
        popupBlock = $("[data-popup = '"+ popupName +"']");

        popupBlock.fadeIn(400);

    });

     $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            if ( $(".popup_wrapp").is(":visible") ) {

                $(".popup_wrapp").fadeOut(300);

            }

        }

    });

    $(".close-popup, .close_review").click(function(e) {
        
        e.preventDefault();

        popupBlock = $(this).closest(".popup_wrapp");

        popupBlock.fadeOut(300);

    });


    $(document).mouseup(function (e){

        hide_element = $('.popup');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.closest(".popup_wrapp").fadeOut(300);
        }

    });

});

function getNavLinkHeight() {

	$(".main-nav").find("a").each(function() {

		$(this).css({
			"height" : "auto"
		});

		parentBlock = $(this).closest("li");

		$(this).height(parentBlock.height());

	});

}


function getHLinesParams() {

	$(".h2_wrapp").each(function() {

		var line = $(this).find(".line");

		var hWidth = $(this).find("h2").outerWidth(true);

		line.css({
			"width" : ( $(this).width() - hWidth ) / 2 + "px"
		});

	});


}