/*global $, alert, console*/

$(function () {
    'use strict';
    
    var myHeight = $('.header'),
        mySlider = $(".bxslider");
    // Header height
    
    myHeight.height($(window).height());
    $(window).resize(function () {
        myHeight.height($(window).height());
        mySlider.each(function () {
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
        });

    });
    
    // Links Add Class Active

    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    // Make The Item Center
    
    mySlider.each(function () {
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
    });
    
    // Make BxSlider
    
    mySlider.bxSlider({
        pager: false
    });
    
    // Smooth Scroll To Div
    
    $(".links li a").click(function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1000);
    });
    
    // Our Auto Slider Code
    
    $(function autoSlider() {
       
        $(".slider .active").each(function () {
           
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
            
        });
    });
    
    // Trigger Nice Scroll
    
    $('html').niceScroll({
        
        cursorcolor: '#1abc9c',
        cursorwidth: '10px',
        cursorborder: '1px solid #1abc9c',
        cursorborderradius: 0,
        scrollspeed: '80'
        
    });
    
});