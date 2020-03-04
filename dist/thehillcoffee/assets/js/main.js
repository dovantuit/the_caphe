
$(document).ready(function () {
    var lastScrollTop = 0;
    $(Window).scroll(function () {
        var st = $('html,body').scrollTop();
        //console.log($('html,body').height())
        const bodyScrollTop = $('html,body').scrollTop()
        const navbar = $('.navbar-expand-lg')
        const lang = $('.lang-row')
        const navbarHeight = $('.navbar-expand-lg').height()
        
        
        if (bodyScrollTop > navbar.height() + 100) {
            lang.addClass("hide")
            navbar.addClass('stricky');
            navbar.addClass('slideInDown');
        }
        else {
            lang.removeClass("hide")
            navbar.removeClass('stricky');
            navbar.removeClass('slideInDown');
        }
        // if (st >= lastScrollTop) $('.navbar-expand-lg').addClass("hide")
        // else $('.navbar-expand-lg').removeClass("hide")
        // lastScrollTop = st <= 0 ? 0 : st; 


        // if ($('html,body').scrollTop() > 0) $('.navbar-expand-lg').addClass('fixed');
        // else $('.navbar-expand-lg').removeClass('fixed');

        if ($('html,body').scrollTop() > 200) $('.back-to-top').addClass('active');
        else $('.back-to-top').removeClass('active');


    });

    $('.back-to-top').click(e => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 'easeInOutExpo')
        return false;
    });

    $("table.days td ").click(function (e) {
        //console.log(e)
        // alert( "Handler for .click() called." );
    });


    $("select").on("click", function () {

        $(this).parent(".select-box").toggleClass("open");

    });

    $(document).mouseup(function (e) {
        var container = $(".select-box");

        if (container.has(e.target).length === 0) {
            container.removeClass("open");
        }
    });


    $("select").on("change", function () {

        var selection = $(this).find("option:selected").text(),
            labelFor = $(this).attr("id"),
            label = $("[for='" + labelFor + "']");

        label.find(".label-desc").html(selection);

    });



});
$("#slide-product").click(function () {
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 2000);
});