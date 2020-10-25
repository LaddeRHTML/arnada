
    $(document).ready(function() {
        var owl = $('.one');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            nav:true,
            navText : ["",""],
        });
    })


    $(document).ready(function() {
        var owl = $('.three');
        owl.owlCarousel({
            items: 3,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    })


    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight()+10,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+10;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 400);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });


    $('.faq-box').click(function() {
        $(this).find('.faq-txt').slideToggle();
        $(".faq-wrap .faq-box").not($(this)).find('.faq-txt').slideUp();
    });


    $(function() {
        $('.faq-box').click(function() {
            $(this).find('.faq-title').addClass("selected");
            $(".faq-box").not($(this)).find('.faq-title').removeClass("selected");
        });
    });


    function c_image (a) {
        document.u_img.src=a
    }


    $(function() {
        $('.choice').click(function() {
            $(this).find('a').addClass("selected_a");
            $(".choice").not($(this)).find('a').removeClass("selected_a");
        });
    });


    document.getElementById("my_select").addEventListener("change", function(){
        document.getElementById("my_span").innerHTML = this.value;
    });
