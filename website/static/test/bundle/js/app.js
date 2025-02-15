$(function() {
    var window_width = $(window).width();
    var window_height = $(window).height();

    var languageTag = [];
    $(".language a").each(function(index) {
        var tag =
            '<a class="lang-bt" href="' +
            $(this).attr("href") +
            '">' +
            $(this).html() +
            "</a>";
        languageTag.push(tag);
    });
    // //Mobile Menu
    // new Mmenu( '#mobile-menu', {
    //     "navbars": [
    //         {
    //             "position": "bottom",
    //             "content": languageTag
    //         }
    //     ]
    // } );

    //Mobile Menu
    if ($("#mobile-menu").length) {
        // new Mmenu( document.querySelector( '#mobile-menu' ));
        new Mmenu("#mobile-menu", {
            navbars: [{
                    position: "top",
                    content: ["prev", "breadcrumbs", "close"],
                },
                // {
                //     "position": "bottom",
                //     "content": languageTag
                // }
            ],
        });

        $(".mobile-bar").removeClass("d-none");
    } else {}

    $('.service-list .box-service').hover(
        // function(){ $(this).addClass('hover') },
        // function(){ $(this).removeClass('hover') }
        function() {
            if ($(this).hasClass('ss1')) {
                $('.service-list .ss1').removeClass('hover');
                $(this).addClass('hover');
            }
            if ($(this).hasClass('ss2')) {
                $('.service-list .ss2').removeClass('hover');
                $(this).addClass('hover');
            }
        },
    )

    //click để show tìm kiếm mobile
    $(".search_mobile_button").click(function() {
        if ($(".search_mobile_wrap").css("display") == "block") {
            $(".search_mobile_wrap").hide();
            $(".search_mobile_button .fa-times").hide();
            $(".search_mobile_button .fa-search").show();
        } else {
            $(".search_mobile_wrap").show();
            $(".search_mobile_button .fa-times").show();
            $(".search_mobile_button .fa-search").hide();
        }
    });
    //Click vào tìm kiếm hiển thị box tìm kiếm
    $(".search_desktop_button").click(function() {
        if ($(".search_desktop_wrap").css("display") == "block") {
            $(".search_desktop_wrap").hide();
            $(".search_desktop_button .fa-times").hide();
            $(".search_desktop_button .fa-search").show();
        } else {
            $(".search_desktop_wrap").show();
            $(".search_desktop_button .fa-times").show();
            $(".search_desktop_button .fa-search").hide();
        }
    });
    $(".search_desktop_button_fix").click(function() {
        if ($(".search_desktop_wrap_fix").css("display") == "block") {
            $(".search_desktop_wrap_fix").hide();
            $(".search_desktop_button_fix .fa-times").hide();
            $(".search_desktop_button_fix .fa-search").css('display', 'inline-block');
        } else {
            $(".search_desktop_wrap_fix").show();
            $(".search_desktop_button_fix .fa-times").css('display', 'inline-block');
            $(".search_desktop_button_fix .fa-search").hide();
        }
    });
    $(".open-search").click((e) => {
        e.preventDefault();
        $(".search-full").addClass("active");
        $(".keyword-search").focus();
    });
    $(".search-close").click(() => {
        $(".search-full").removeClass("active");
    });


    if ($(".swiper-service-home").length) {
        var swiper = new Swiper('.swiper-service-home', {
            slidesPerView: 2,
            navigation: {
                nextEl: '.swiper-button-next-unique',
                prevEl: '.swiper-button-prev-unique',
            },
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            spaceBetween: 0,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    freeMode: false,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    freeMode: false,
                },
                920: {
                    slidesPerView: 3,
                    freeMode: true
                },
                1200: {
                    slidesPerView: 3,
                    freeMode: false
                }
            }
        });

        $('.swiper-button-prev-unique').click(function() {
            const swiper = document.querySelector($(this).data('target')).swiper;

            // Now you can use all slider methods like
            swiper.slidePrev();
        });

        $('.swiper-button-next-unique').click(function() {
            const swiper = document.querySelector($(this).data('target')).swiper;

            // Now you can use all slider methods like
            swiper.slideNext();
        });
    }


    //slider mobile
    if ($(".owl-slider-mobile").length) {
        $(".owl-slider-mobile").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            nav: false,
            margin: 0,
            dots: true,
            animateOut: "fadeOut",
            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>',
            ],
            items: 1,
        });
    }

    //slider
    if ($('.owl-slider').length) {
        $('.owl-slider').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 15000,
            nav: true,
            margin: 0,
            dots: true,
            animateOut: 'fadeOut',
            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],
            items: 1
        });
    }

    //slider
    if ($('.owl-slider-right').length) {
        $('.owl-slider-right').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 15000,
            nav: true,
            margin: 0,
            dots: false,
            animateOut: 'fadeOut',
            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],
            items: 1
        });
    }

    //comment
    if ($(".owl-comments").length) {
        $(".owl-comments").owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 15000,
            nav: true,
            margin: 10,
            dots: false,
            animateOut: "fadeOut",
            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                450: {
                    items: 1,
                    margin: 10,
                },
                992: {
                    items: 1,
                    margin: 20,
                },
                1200: {
                    items: 1,
                    margin: 20,
                },
            },
        });
    }

    //service
    if ($(".owl-service").length) {
        $(".owl-service").owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 15000,
            nav: true,
            margin: 0,
            dots: true,
            animateOut: "fadeOut",
            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>',
            ],
            responsive: {
                0: {
                    items: 2,
                },
                450: {
                    items: 3,
                    margin: 10,
                },
                992: {
                    items: 3,
                    margin: 10,
                },
                1200: {
                    items: 3,
                    margin: 10,
                },
            },
        });
    }

    //services
    if ($(".owl-services").length) {
        $(".owl-services").owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 15000,
            nav: true,
            margin: 20,
            dots: true,
            animateOut: "fadeOut",
            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                450: {
                    items: 1,
                    margin: 20,
                },
                992: {
                    items: 2,
                    margin: 20,
                },
                1200: {
                    items: 2,
                    margin: 20,
                },
            },
        });
    }

    if ($(".owl-list-agent").length) {
        $(".owl-list-agent").owlCarousel({
            loop: false,
            autoplay: false,
            autoplayTimeout: 15000,
            nav: true,
            margin: 0,
            dots: false,
            // animateOut: "fadeOut",
            navText: [
                '<i class="fas fa-angle-left"></i>',
                '<i class="fas fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,

                }
            },
        });
    }

    if ($(".owl-our").length) {
        $(".owl-our").owlCarousel({
            loop: false,
            autoplay: false,
            autoplayTimeout: 15000,
            nav: true,
            margin: 0,
            dots: false,
            animateOut: "fadeOut",
            navText: [
                '<i class="fas fa-angle-left"></i>',
                '<i class="fas fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                },
                450: {
                    items: 1,

                },
                992: {
                    items: 3,

                },
                1200: {
                    items: 3,

                },
            },
        });
    }

    if ($(".owl-home-product").length) {
        $(".owl-home-product").owlCarousel({
            loop: false,
            autoplay: false,
            autoplayTimeout: 15000,
            nav: true,
            margin: 0,
            dots: false,
            animateOut: "fadeOut",
            navText: [
                '<i class="fas fa-angle-left"></i>',
                '<i class="fas fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,

                },
                992: {
                    items: 3,

                },
                1200: {
                    items: 4,

                },
            },
        });
    }

    if ($('.owl-news').length > 0) {
        $('.owl-news').owlCarousel({
            loop: false,
            margin: 0,
            autoplay: false,
            nav: true,
            dots: false,
            navText: [
                '<i class="fas fa-angle-left"></i>',
                '<i class="fas fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }
    $('.open-expand-button').click(function() {
        $(this).parent().parent().removeClass('expand-box');
        $(this).remove();
    })



    if ($(".owl-project").length > 0) {
        $(".owl-project").owlCarousel({
            loop: true,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 8000,
            nav: true,
            dots: false,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>",
            ],
            responsive: {
                0: {
                    items: 2,
                    dots: true
                },
                600: {
                    items: 2,
                    dots: true
                },
                800: {
                    items: 3,
                },
                1200: {
                    items: 5,
                },
            },
        });
    }

    if ($(".owl-partner").length > 0) {
        $(".owl-partner").owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            nav: true,
            dots: false,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>",
            ],
            responsive: {
                0: {
                    items: 3,
                },
                450: {
                    items: 3,
                },
                768: {
                    items: 5,
                },
                992: {
                    items: 5,
                },
                1200: {
                    items: 7,
                },
            },
        });
    }

    if ($(".owl-slider-video").length > 0) {
        $(".owl-slider-video").owlCarousel({
            loop: false,
            margin: 0,
            autoplay: false,
            nav: false,
            dots: true,
            items: 1
        });
    }

    if ($(".owl-list-products").length > 0) {
        $(".owl-list-products").owlCarousel({
            loop: false,
            margin: 15,
            autoplay: false,
            nav: true,
            dots: false,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>",
            ],
            responsive: {
                0: {
                    items: 2,
                },
                450: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
            },
        });
    }

    $(".formbox form").submit(function(e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.

        var form = $(this);
        var url = form.attr("action");
        var type = form.find('[name="SubscribeForm[type]"]').val();

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes the form's elements.
            dataType: "JSON",
            beforeSend: function() {
                $(".formbox .btn").hide();
                $(".form-footer").append('<div class="loading-anim"></div>');
                form.find("p.help-block").html("");
            },
            success: function(data) {
                if (data.success == 1) {
                    $(".form-footer .btn").remove();

                    if (type == 0)
                        form
                        .find(".form-footer")
                        .html(
                            '<div class="alert alert-success" role="alert">' +
                            data.msg +
                            "</div>"
                        );
                    else
                        form.html(
                            '<div class="alert alert-success" role="alert">' +
                            data.msg +
                            "</div>"
                        );
                } else {
                    for (let k in data.msg) {
                        $(".field-subscribeform-" + k + " .help-block").html(data.msg[k]);
                    }
                }
            },
            complete: function() {
                $(".form-footer .btn").show();
                $(".form-footer .loading-anim").remove();
            },
        });
    });

    $(".left_tool_box")
        .find("select")
        .change(function() {
            var value = $(this).val();
            var url = $(location).attr("href");
            url = url.split("?");
            if (value.length > 0) value = "?sort_by=" + value;
            window.location.href = url[0] + value;
        });
    $("#show_format")
        .find("a")
        .on("click", function(e) {
            e.preventDefault();
            var that = $(this);
            that.parent().find("a").removeClass("active");
            that.addClass("active");
            var plist_box = $(".product-grid");
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            // plist_box.addClass('gird_active;');
            // alert(that.attr("href"))
            if (that.attr("href") == "view_list") {
                plist_box.addClass("view_list");
                plist_box.removeClass("view_grid");
                $.ajax({
                    type: "GET",
                    url: "site/saveformat",
                    dataType: "json",
                    data: {
                        type: "view_list",
                        "_csrf-frontend": csrfToken
                    },
                    cache: false,
                    success: function(data) {
                        alert(data);
                    },
                });
            } else {
                plist_box.addClass("view_grid");
                plist_box.removeClass("view_list");
                $.ajax({
                    type: "GET",
                    url: "site/saveformat",
                    dataType: "json",
                    data: {
                        type: "view_grid",
                        "_csrf-frontend": csrfToken
                    },
                    cache: false,
                    success: function(data) {
                        alert(data);
                    },
                });
            }
        });
    $(".left_tool_box")
        .find('input[type="radio"]')
        .on("click", function(e) {
            //Giá trị để sắp xếp sản phẩm
            var order_id = $(".left_tool_box")
                .find('input[type="radio"]:checked')
                .val();
            window.location.href =
                $(".tool_box").attr("data-content") + "?sort_by=" + order_id;
        });

    //Product Images
    if ($(".owl-productimg").length > 0) {
        $(".owl-productimg").owlCarousel({
            loop: false,
            margin: 15,
            autoplay: false,
            nav: true,
            dots: false,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>",
            ],
            responsive: {
                0: {
                    items: 2,
                },
                400: {
                    items: 3,
                },
                768: {
                    items: 4,
                },
            },
        });
    }

    $(".owl-productimg a.thumb-img").click(function() {
        $(".owl-productimg a.thumb-img").attr("data-fancybox", "images");
        $(this).removeAttr("data-fancybox");
        var img = $(this).attr("href");
        $(".big-image").attr("href", img);
        $(".big-image img").attr("src", img);

        return false;
    });

    $(window).scroll(function(e) {
        // add/remove class to navbar when scrolling to hide/show
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
            $(".fixed-mobile").addClass("fixed");
            $(".menu-fixed").removeClass("fixed1");
            $(".menu-fixed").addClass("fixed");
            $("#gototop").addClass("fixed");
            $(".product-tab").addClass("fixed");
            // $(".menu_cat").addClass("hover_show");
            $("header .search_desktop_wrap").hide();
            $("header .search_desktop_button .fa-times").hide();
            $("header .search_desktop_button .fa-search").show();
            if (window_width > 990) {
                $('.fix-top-product').addClass("fixed");
                $('.menu-cart.menu-fixed').addClass("fixed");
            } else {
                // $("header").addClass("fixed");
            }
            $('.hover_show_alway .menu_cat').unbind('mouseenter  mouseleave');
            $('.hover_show_alway').hover(function() {
                $(".menu-fixed .menu_cat>ul").addClass("show_alway");
                console.log('testa');
            });

            $(".hover_show_alway")
                .mouseenter(function() {
                    $(".menu-fixed .menu_cat>ul").addClass("show_alway");
                })
                .mouseleave(function() {
                    $(".menu-fixed .menu_cat>ul").removeClass("show_alway");
                });

            $(".go-to-booking").show();

        } else {
            // $("header").removeClass("fixed");
            $(".menu-fixed").removeClass("fixed");
            $(".menu-fixed").addClass("fixed1");
            $(".menu-fixed .search_desktop_wrap_fix").hide();
            $(".search_desktop_button_fix .fa-times").hide();
            $(".search_desktop_button_fix .fa-search").show();
            $(".fixed-mobile").removeClass("fixed");
            $('.menu-fixed .search-suggest').removeClass('show');
            $("#gototop").removeClass("fixed");
            $(".product-tab").removeClass("fixed");
            // $(".menu_cat>ul").addClass($(".menu_cat>ul").attr("data-content"));
            // $(".menu_cat").removeClass("hover_show");
            if (window_width > 990) {
                $('.fix-top-product').hide();
            }
            // $(".menu_cat>ul").addClass($(".menu_cat>ul").attr("data-content"));
            // $(".menu_cat").removeClass("hover_show");
            //
            $('.hover_show_alway .menu_cat').unbind('mouseenter  mouseleave');

            // if($('.menu_cat').hasClass('hover_show_alway')){
            //   $(".menu_cat").addClass("hover_show");
            // }
            $('.hover_show_alway').hover(function() {
                // $(".menu_cat>ul").slideToggle("slow", function () {});
                $("header .menu_cat>ul").addClass("show_alway");
                console.log('test');
            });

            $(".hover_show_alway")
                .mouseenter(function() {
                    $("header .menu_cat>ul").addClass("show_alway");
                })
                .mouseleave(function() {
                    $("header .menu_cat>ul").removeClass("show_alway");
                });
            $(".go-to-booking").hide();
        }

        if ($(".counter").length > 0) {
            var counter_top = $(".counter").offset().top - window_height;
            if (scroll > counter_top) {
                //bộ đếm
                // $(".counter.first .count_to").each(count);
                $('.counter.first .count_to').each(function(i, obj) {
                    var num = $(this).attr('data-to');
                    var speed = parseInt($(this).attr('data-speed'));
                    // console.log(speed);
                    $(this).animateNumbers(num, true, speed);
                });

                $(".counter").removeClass("first");
            }
        }
    });

    $(".menu-fixed .btn-toggle-fx").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".menu-fixed").removeClass("active");
        } else {
            $(this).addClass("active");
            $(".menu-fixed").addClass("active");
        }
    });
    $(".btdk").click(function() {
        var mail = $(".maildk").val();
        var name = $(".namedk").val();
        var phone = $(".phonedk").val();
        var content = $(".contentdk").val();
        var address = $(".addressdk").val();
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
        var chuoi = "";
        var csrfToken = $('meta[name="csrf-token"]').attr("content");
        if (name == "") {
            alert("Nhập thông tin Họ tên!");
            $(".namedk").focus();
        } else {
            if (phone == "") {
                alert("Nhập thông tin Điện thoại");
                $(".phonedk").focus();
            } else {
                if (mail == "") {
                    alert("Nhập thông tin Email!");
                    $(".maildk").focus();
                } else {
                    if (!re.test(mail)) {
                        $(".maildk").val("");
                        $(".maildk").focus();
                        alert("Định dạng email không đúng! Đề nghị nhập lại email.");
                    } else {
                        if (content == "") {
                            alert("Nhập thông tin sản phẩm quan tâm");
                            $(".nddk").focus();
                        } else {
                            $.ajax({
                                type: "POST",
                                url: "site/savemail",
                                dataType: "json",
                                data: {
                                    mail: mail,
                                    name: name,
                                    phone: phone,
                                    content: content,
                                    address: address,
                                    type: 1,
                                    "_csrf-frontend": csrfToken,
                                },
                                cache: false,
                                success: function(data) {
                                    // alert(data);
                                    alert(
                                        "Đăng ký thành công! Chúng tôi sẽ liên hệ lại với bạn sớm nhất."
                                    );
                                    $(".namedk").val("");
                                    $(".phonedk").val("");
                                    $(".maildk").val("");
                                    $(".contentdk").val("");
                                    $(".addressdk").val("");
                                },
                            });
                        }
                    }
                }
            }
        }
    });
    $("#gototop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    $(".shopping-order .custom_radio_box input:radio").change(function() {
        $(".shopping-order .custom_radio_box")
            .find(".radio-wrap")
            .removeClass("show");
        $(this).parent().parent().addClass("show");
    });
    $(".shopping-order .province select").on("change", function() {
        var csrfToken = $('meta[name="csrf-token"]').attr("content");
        $.ajax({
            type: "GET",
            url: "site/getdistrict",
            dataType: "json",
            data: {
                province_id: this.value,
                "_csrf-frontend": csrfToken
            },
            cache: false,
            success: function(data) {
                if ($(".field-orderform-district").hasClass("has-error")) {
                    $(".field-orderform-district").removeClass("has-error");
                    $(".field-orderform-district p").html("");
                }
                if ($(".field-orderform-ward").hasClass("has-error")) {
                    $(".field-orderform-ward").removeClass("has-error");
                    $(".field-orderform-ward p").html("");
                }
                $(".shopping-order .district select").html("");
                $(".shopping-order .district select").append(data.list_district);
                $(".shopping-order .ward select").html("");
                $(".shopping-order .ward select").append(data.list_war);
            },
        });
    });
    $(".shopping-order .district select").on("change", function() {
        var csrfToken = $('meta[name="csrf-token"]').attr("content");
        $.ajax({
            type: "GET",
            url: "site/getward",
            dataType: "json",
            data: {
                district_id: this.value,
                "_csrf-frontend": csrfToken
            },
            cache: false,
            success: function(data) {
                if ($(".field-orderform-ward").hasClass("has-error")) {
                    $(".field-orderform-ward").removeClass("has-error");
                    $(".field-orderform-ward p").html("");
                }
                $(".shopping-order .ward select").html("");
                $(".shopping-order .ward select").append(data.list_war);
            },
        });
    });
    $(".slidebar .cat-menu .list>ul>li").click(function() {
        $(this)
            .children("ul")
            .slideToggle("slow", function() {});
        if ($(this).hasClass("expand")) $(this).removeClass("expand");
        else $(this).addClass("expand");
    });
    $(".menu_cat>p").click(function() {
        $(".menu_cat>ul").slideToggle("slow", function() {});
    });
    $(".btn-support").click(function(e) {
        e.preventDefault();
        if (!$(".support-content").hasClass("show"))
            $(".support-content").addClass("show");
        else $(".support-content").removeClass("show");
    });
    //Hover vào giỏ hàng show chi tiết giơ hàng
    $(".cart_menu").hover(
        function() {
            $(".show-cart").addClass("show");
        },
        function() {
            var isHovered = $(".show-cart").is(":hover");
            if (isHovered == false) {
                $(".show-cart").removeClass("show");
            }
        }
    );
    //Hover vào show chi tiết giơ hàng thì hiển thị và ra ngoài thì đóng lại
    $(".show-cart").hover(
        function() {
            $(this).addClass("show");
        },
        function() {
            $(this).removeClass("show");
        }
    );


    $(".news-list .box-news").hover(
        function() {
            $(".news-list .box-news").removeClass("hover");
            $(this).addClass("hover");
        },
        function() {}
    );
    $(".news-list .box-news:first-child").addClass("hover");

    $('[data-toggle="tooltip"]').tooltip();

    $('#btCatMenu').click(function() {
        $('.menucat').toggleClass('show');

        return false;
    });
});

function submitSubscribe() {
    var mail = $(".maildk").val();
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
    var csrfToken = $('meta[name="csrf-token"]').attr("content");
    if (mail == "") {
        alert("Nhập thông tin Email!");
        $(".maildk").focus();
    } else {
        if (!re.test(mail)) {
            $(".maildk").val("");
            $(".maildk").focus();
            alert("Định dạng email không đúng! Đề nghị nhập lại email.");
        } else {
            $.ajax({
                type: "POST",
                url: "site/savemail",
                dataType: "json",
                data: {
                    mail: mail,
                    "_csrf-frontend": csrfToken
                },
                cache: false,
                success: function(data) {
                    // alert(data);
                    alert(
                        "Đăng ký thành công! Chúng tôi sẽ liên hệ lại với bạn sớm nhất."
                    );
                    $(".namedk").val("");
                    $(".phonedk").val("");
                    $(".maildk").val("");
                    $(".ndđk").val("");
                },
            });
        }
    }
}

function minusOrder(ele, id, price) {
    var csrfToken = $('meta[name="csrf-token"]').attr("content");
    var qty = $(ele).parent().children("#qty").val();
    if (!isNaN(qty) && qty > 1) {
        var val = parseInt(qty) - 1;
        $(ele).parent().children("#qty").val(val);
        var new_price = price * val;
        var tien =
            new_price.toFixed(0).replace(/./g, function(c, i, a) {
                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
            }) + " đ";
        $(ele).parent().parent().parent().find(".total-price").html(tien);
        $.ajax({
            type: "POST",
            url: "site/changecart",
            dataType: "json",
            data: {
                quantity: val,
                id: id,
                "_csrf-frontend": csrfToken
            },
            cache: false,
            success: function(data) {
                $(".col-total").html(data);
            },
        });
    }
    return false;
}

function plusOrder(ele, id, price) {
    var csrfToken = $('meta[name="csrf-token"]').attr("content");
    var qty = $(ele).parent().children("#qty").val();
    // alert(qty);
    if (!isNaN(qty)) {
        var val = parseInt(qty) + 1;
        $(ele).parent().children("#qty").val(val);
        var new_price = price * val;
        var tien =
            new_price.toFixed(0).replace(/./g, function(c, i, a) {
                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
            }) + " đ";
        $(ele).parent().parent().parent().find(".total-price").html(tien);
        $.ajax({
            type: "POST",
            url: "site/changecart",
            dataType: "json",
            data: {
                quantity: val,
                id: id,
                "_csrf-frontend": csrfToken
            },
            cache: false,
            success: function(data) {
                $(".col-total").html(data);
            },
        });
    }
    return false;
}

function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
}

$(document).ready(function() {
    AOS.init({
        offset: 80,
        easing: "ease-out-back",
        duration: 1500,
        delay: 700,
        disable: "mobile",
        once: true,
        // offset: 0,
    });
});