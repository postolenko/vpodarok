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
var actualHeight;

$(window).load(function() {

    $("select").each(function() {

        var parentBlock = $(this).closest(".select-block");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

    setTimeout(function() {

        $("body").removeClass("load");

    }, 700);

});

$(window).resize(function() {

    getNavLinkHeight();
    getHLinesParams();

});

$(document).ready(function() {

    $("body").addClass("load");
   
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

    $(".time_input").mask("99 :: 99");

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
        hideHeight = parseInt( scrollBox.attr("data-hideheight") );
        fullHeight = parseInt( scrollBox.attr("data-fullheight") );
        actualHeight = scrollBox.find(".mCSB_container").height() + $(this).closest(".scroll-box_wrapp").find(".scroll-box_footer").outerHeight();

        if( $(this).hasClass("hide") ) {

            if( actualHeight < fullHeight ) {

                scrollBox.animate({
                    "height" : actualHeight + "px"
                }, 400);

            } else {

                scrollBox.animate({
                    "height" : fullHeight + "px"
                }, 400);

            }            

            $(this).removeClass("hide");

        } else {

            scrollBox.animate({
                "height" : hideHeight + "px"
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

    // ----------------

    $(".dropdown_wrapp .dropdown-list").each(function() {

        $(this).css({
            "display" : "none"
        })

    });

    $(".dropdown-title").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".dropdown_wrapp");

        var dropdownList = parentBlock.find(".dropdown-list");

        if( dropdownList.is(":hidden") ) {

            dropdownList.slideDown(300);
            parentBlock.addClass("active");

        } else {

            dropdownList.slideUp(300);
            parentBlock.removeClass("active");

        }

    });

    $(document).mouseup(function (e){

        hide_element = $('.dropdown-list');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            parentBlock = hide_element.closest(".dropdown_wrapp");
            hide_element.slideUp(300);
            parentBlock.removeClass("active");
        }

    });

    $(".dropdown_wrapp .dropdown-list p").click(function(e) {

        e.preventDefault();

        if( !$(this).hasClass("show_enternum") ) {
            parentBlock = $(this).closest(".dropdown_wrapp");
            var dropdownInput = $(this).closest(".dropdown_wrapp").find(".dropdown-title input");
            var numVal = $(this).text();
            dropdownInput.val(numVal);
            parentBlock.find(".dropdown-list").css({
                "display" : "none"
            });
            parentBlock.removeClass("active");


        } else {

            $(this).closest(".dropdown_wrapp").css({
                "display" : "none"
            });

            $(".denomination_wrapp").addClass("active");

        }        

    });

    // -----------------

    $(".dropdown_2_list").each(function() {

        $(this).css({
            "display" : "none"
        });

    });


    $(".dropdown_wrapp-box").click(function(e) {

        parentBlock = $(this).closest(".dropdown_wrapp_2");

        dropdownBlock = parentBlock.find(".dropdown_2_list");

        if( dropdownBlock.is(":visible") ) {

            dropdownBlock.slideUp(300);

        } else {

            dropdownBlock.slideDown(300);

        }

    });

    $(document).mouseup(function (e){

        hide_element = $('.dropdown_2_list');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.slideUp(300);
        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            $('.dropdown_2_list').slideUp(300);

        }

    });


    $(".dropdown_2_list p").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".dropdown_wrapp_2");

        var priceValBox = parentBlock.find(".insert_val");

        insertVal = $(this).text();

        if(priceValBox.prop("tagName") == "INPUT") {

            priceValBox.val(insertVal);

        } else {

            priceValBox.text(insertVal);

        }

    });

    // -----------------

    $(".nominal input").click(function(e) {

        e.preventDefault();

        $(this).closest(".nominal").addClass("active");

        parentBlock = $(this).closest(".nominals_wrapp");

        var nominalRadio = parentBlock.find(".radio_2 input");

        nominalRadio.each(function() {

            if( $(this).prop("checked") == true ) {

                $(this).prop("checked", false);

            }

        });

    });

    $(document).mouseup(function (e){

        hide_element = $('.nominal');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.removeClass("active");
        }

    });

    $(".nominals_wrapp .radio_2 input").click(function() {

        $(this).closest(".nominals_wrapp ").find(".nominal input").val("");

    });

    // ----------------------------

    $(".del-btn").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".card_box");

        parentBlock.remove();

    });

    // ------------------------------

    $(".dropdown_list_3").each(function() {

        $(this).css({
            "display" : "none"
        });

    });

    $(".dropdown_wrapp_3 input").click(function(e) {

        parentBlock = $(this).closest(".dropdown_wrapp_3");

        dropdownBlock = parentBlock.find(".dropdown_list_3");

        if( dropdownBlock.is(":visible") ) {

            dropdownBlock.css({
                "display" : "none"
            });

        } else {

            dropdownBlock.css({
                "display" : "block"
            });

        }

    });

    $(".dropdown_list_3 li").click(function(e) {

        e.preventDefault();

        if( $(this).hasClass("insert_time") ) {

            $(this).closest(".dropdown_wrapp_3").css({
                "display" : "none"
            });

            parentBlock = $(this).closest(".time_wrapp");

            parentBlock.find(".time_input_wrapp").css({
                "display" : "block"
            });

        } else {

            dropdownBlock = $(this).closest(".dropdown_list_3");

            if( dropdownBlock.is(":visible") ) {

                parentBlock = $(this).closest(".dropdown_wrapp_3");
                var dropdownInput = parentBlock.find(".insert_input");
                var numVal = $(this).text();
                dropdownInput.val(numVal);

                dropdownBlock.css({
                    "display" : "none"
                });

            } else {

                dropdownBlock.css({
                    "display" : "block"
                });

            }

        }

    });

    $(document).mouseup(function (e){

        hide_element = $('.dropdown_list_3');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.css({
                "display" : "none"
            });
        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            $('.dropdown_list_3').css({
                "display" : "none"
            });

        }

    });

    // ------------------------

    $("[data-choose] input[type='radio'").click(function() {

        parentBlock = $(this).closest("[data-choose]");

        var chooseBoxName = parentBlock.attr("data-choose");

        var chooseVariant = $(this).attr("data-choosetet");

        $("[data-chooseinput = '"+ chooseBoxName +"']").attr("placeholder", chooseVariant);

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