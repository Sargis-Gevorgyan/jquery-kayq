$(document).ready(function() {







    $({ counter: 0 }).animate({ counter: 120 }, {
        easing: "linear",
        duration: 2000,
        step: function() {
            $(".tiv1").text(Math.ceil(this.counter))
        }
    })

    $({ counter: 0 }).animate({ counter: 540 }, {
        easing: "linear",
        duration: 1500,
        step: function() {
            $(".tiv2").text(Math.ceil(this.counter))
        }
    })
    $({ counter: 0 }).animate({ counter: 543 }, {
        easing: "linear",
        duration: 3000,
        step: function() {
            $(".tiv3").text(Math.ceil(this.counter))
        }
    })

    $({ counter: 0 }).animate({ counter: 250 }, {
        easing: "linear",
        duration: 3000,
        step: function() {
            $(".tiv4").text(Math.ceil(this.counter))
        }
    })

    // $(window).scroll(function() {
    //     $(".section").each(function() {
    //         var x = $(window).scrollTop() + $(window).height();
    //         var y = $(this).offset().top + $(this).height() / 2;
    //         if (x >= y) {
    //             $(this).addClass("active")
    //         } else {
    //             $(this).removeClass("active")
    //         }
    //     })
    // })


    $(".accordion").on("click", ".accordion-header", function() {
        $(this).toggleClass("active").next().slideToggle();
    });






    $(window).scroll(function() {
        if ($(window).scrollTop() > $(window).height()) {
            $("nav").css({ "background-color": "#0d1522" });
        } else {
            $("nav").css({ "background-color": "transparent" });
        }

    })





})