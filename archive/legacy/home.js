// JavaScript Document

    

$(document).ready(function(){
    var prevScrollpos = 100;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos ) {
           $('#fullMenu').addClass('d-none');
           $('#sidemenu_toggle').removeClass('d-inline-block');
            $('#sidemenu_toggle').removeClass('d-none');
      }          
        else {
       
        $('#fullMenu').removeClass('d-none');
        $('#sidemenu_toggle').addClass('d-none');  
      }
      //prevScrollpos = currentScrollPos;
    }
});

jQuery(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })
});

 
        /*------ Sticky MENU Fixed ------*/
    let headerHeight = $("header").outerHeight();
    let navbar = $("nav.navbar");
    if (navbar.not('.fixed-bottom').hasClass("static-nav")) {
        $window.scroll(function () {
            let $scroll = $window.scrollTop();
            let $navbar = $(".static-nav");
            let nextSection = $(".section-nav-smooth");
            if ($scroll > 250) {
                $navbar.addClass("fixedmenu");
                nextSection.css("margin-top", headerHeight);
            } else {
                $navbar.removeClass("fixedmenu");
                nextSection.css("margin-top", 0);
            }
            if ($scroll > 125) {
                $('.header-with-topbar nav').addClass('mt-0');
                $('#fullMenu').removeClass('d-none');
                 $('.top-header-area').addClass('d-none');
                  $('#sidemenu_toggle').addClass('d-none');
//                $(".menutop").css({"margin-top": "0rem", });
            } else {
                $('.header-with-topbar nav').removeClass('mt-0');
                $('#fullMenu').addClass('d-none');
               $('#sidemenu_toggle').removeClass('d-inline-block');
                 $('#sidemenu_toggle').removeClass('d-none');
                 $('.top-header-area').removeClass('d-none');
//                 $(".menutop").css({"margin-top": "3rem", });
            }
        });
        $(function () {
            if ($window.scrollTop() >= $(window).height()) {
                $(".static-nav").addClass('fixedmenu');
                
            }
        })
    }
        
    if (navbar.hasClass("fixed-bottom")) {
        let navTopMargin = $(".fixed-bottom").offset().top;
        let scrollTop = $window.scrollTop();
        $(window).scroll(function () {
            if ($(window).scrollTop() > navTopMargin) {
                $('.fixed-bottom').addClass('fixedmenu');
            } else {
                $('.fixed-bottom').removeClass('fixedmenu');
            }
            if ($(window).scrollTop() < 260) {
                $('.fixed-bottom').addClass('menu-top');
            } else {
                $('.fixed-bottom').removeClass('menu-top');
            }
        });
        $(function () {
            if (scrollTop < 230) {
                $('.fixed-bottom').addClass('menu-top');
            } else {
                $('.fixed-bottom').removeClass('menu-top');
            }
            if (scrollTop >= $(window).height()) {
                $('.fixed-bottom').addClass('fixedmenu');
            }
        })
    }

$(function() {  
  $('.btn-6')
    .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});


$(document).on('click', 'a[href^="#Financial"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
      });


// The function actually applying the offset
function offsetAnchor() {
if(location.hash.length !== 0) {
//window.scrollTo(window.scrollX, window.scrollY - 1000);
$('html, body').animate({scrollTop: $(location.hash).offset().top -100 }, 'slow');
}
}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).