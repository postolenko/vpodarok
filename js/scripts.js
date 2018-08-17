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

        $(this).find(".tab-link").eq(indexActiveTab).click();
        $(this).find(".tab-link").eq(indexActiveTab).addClass("active");

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