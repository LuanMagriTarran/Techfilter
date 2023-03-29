!function(y, k) {
    async function T(e) {
        const t = await fetch("/checkout/current-cart");
        var a = await t.json();
        k = a,
        Object.assign(e, k)
    }
    y(function() {
        "use strict";
        var c = '<div class="item"><div class="row"><div class="col-sm-2"><img src="{PRODUCT_IMAGE}" alt="{VARIANT_NAME}" class="pull-left" /></div><div class="col-sm-7"><p>{VARIANT_NAME}</p></div><div class="col-sm-3 col-price"><span>{VARIANT_PRICE}<br/>{VARIANT_QUANTITY_PRESENTATION}</span></div></div></div>'
          , d = '<div class="row"><div class="col-md-12 text-right"><span class="cart-sumary-total">Descontos: {CART_DISCOUNT_TOTAL}</span></div></div>'
          , m = '<div class="row"><div class="col-md-12 text-right">' + (SHOW_PRODUCT_PRICE ? '<span class="cart-sumary-total">Total: {CART_TOTAL}</span>' : "") + '</br></br><a href="/cart/" class=" pull-right btn-blue btn-cart-sumary"><i class="fa fa-shopping-cart"></i> &nbsp;&nbsp;Ir para o carrinho</a></div></div>'
          , u = "<h4>Nenhum produto em seu carrinho.</h4>";
        function p(e) {
            var t = [];
            if (0 < e.items.length && (t = y.merge(t, e.items)),
            e.sales && 0 < e.sales.length)
                for (var a = 0; a < e.sales.length; a++)
                    t = y.merge(t, e.sales[a].items);
            return t
        }
        async function t(e) {
            y(".shopping-cart-content").empty().append('<img src="/bundles/flexyftwostore/img/loading.gif" alt="carregando" class="center" />'),
            await T(e);
            var t = SHOW_PRODUCT_PRICE ? y.number(e.totalWithDiscount, 2, ",", ".") : ""
              , a = y(".shopping-cart-content").empty()
              , o = p(e);
            if (e && 0 != o.length) {
                a.append('<div class="cart-container-items">');
                for (var i = 0, n = 0; n < o.length; n++) {
                    var s = o[n]
                      , r = SHOW_PRODUCT_PRICE ? "R$ " + y.number(s.totalPriceWithDiscount, 2, ",", ".") : ""
                      , l = s.quantity;
                    s.variant.isFractionalStock && (l = 1),
                    a.append(c.replace("{PRODUCT_IMAGE}", s.image || "/bundles/flexyftwostore/img/product-placeholder.gif").replace("{VARIANT_NAME}", s.name).replace("{VARIANT_PRICE}", r).replace("{VARIANT_QUANTITY_PRESENTATION}", "Qtd: " + w(s.quantity))),
                    i += l
                }
                a.append('</div>');
                0 < e.salePromotionDiscountTotal && SHOW_PRODUCT_PRICE && a.append(d.replace("{CART_DISCOUNT_TOTAL}", "R$ " + y.number(e.salePromotionDiscountTotal, 2, ",", "."))),
                window.innerWidth < 991 || screen.width < 991 ? y(".cart-items-count").html('<span class="badge badge-danger">' + Number(i) + "</span>") : y(".cart-items-count").html(Number(i)),
                a.append(m.replace("{CART_TOTAL}", "R$ " + t))
            } else
                a.html(u)
        }
        function a(e) {
            for (var t = p(e), a = 0, o = 0; o < t.length; o++) {
                var i = t[o]
                  , n = i.quantity;
                a += n = i.variant.isFractionalStock ? 1 : n
            }
            window.innerWidth < 991 || screen.width < 991 ? y(".cart-items-count").html('<span class="badge badge-danger">' + Number(a) + "</span>") : y(".cart-items-count").html(Number(a))
        }
        function i(e, t) {
            if (!(t && t < e))
                return 1;
            alert("Não foi possível adicionar " + e + " produtos ao carrinho. Atualmente possuímos apenas " + t)
        }
        var o = 0
          , n = y("#header")
          , s = y("#header-main-fixed")
          , r = y(".header-bg")
          , l = y(".top-header-bg")
          , v = document.getElementById("gotop")
          , f = null != v;
        y(window).scroll(function() {
            var e = y(this).scrollTop();
            o < e ? 50 < e && (n.addClass("header-top-fixed"),
            n.find(".header-top-row").addClass("dis-n"),
            r.addClass("header-bg-fixed"),
            s.addClass("header-main-fixed"),
            l.addClass("top-header-bg-fix"),
            f && (v.style.display = "block")) : e < 50 && (n.removeClass("header-top-fixed"),
            n.find(".header-top-row").removeClass("dis-n"),
            s.removeClass("header-main-fixed"),
            r.removeClass("header-bg-fixed"),
            l.removeClass("top-header-bg-fix"),
            f && (v.style.display = "none")),
            o = e
        }),
        y(".top-page").click(function() {
            document.body.scrollTop = 0,
            document.documentElement.scrollTop = 0
        }),
        y("#nav-bestseller .next").click(function() {
            y("#owl-bestseller").trigger("owl.next")
        }),
        y("#nav-bestseller .prev").click(function() {
            y("#owl-bestseller").trigger("owl.prev")
        }),
        y("#owl-bestseller").owlCarousel({
            items: 4,
            itemsCustom: !1,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [630, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1
        }),
        y("#nav-summer-sale .next").click(function() {
            y("#owl-summer-sale").trigger("owl.next")
        }),
        y("#nav-summer-sale .prev").click(function() {
            y("#owl-summer-sale").trigger("owl.prev")
        }),
        y("#owl-summer-sale").owlCarousel({
            items: 3,
            itemsCustom: !1,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [630, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1
        }),
        y("#nav-child .next").click(function() {
            y("#owl-child").trigger("owl.next")
        }),
        y("#nav-child .prev").click(function() {
            y("#owl-child").trigger("owl.prev")
        }),
        y("#owl-child").owlCarousel({
            items: 3,
            itemsCustom: !1,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [630, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1
        }),
        y("#nav-tabs .next").click(function() {
            y("#owl-new").trigger("owl.next"),
            y("#owl-featured").trigger("owl.next")
        }),
        y("#nav-tabs .prev").click(function() {
            y("#owl-new").trigger("owl.prev"),
            y("#owl-featured").trigger("owl.prev")
        }),
        y("#owl-new").owlCarousel({
            items: 4,
            itemsCustom: !1,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [630, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1
        }),
        y("#owl-featured").owlCarousel({
            items: 4,
            itemsCustom: !1,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [630, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1
        }),
        y("#nav-tabs2 .next").click(function() {
            y("#owl-new2").trigger("owl.next"),
            y("#owl-featured2").trigger("owl.next")
        }),
        y("#nav-tabs2 .prev").click(function() {
            y("#owl-new2").trigger("owl.prev"),
            y("#owl-featured2").trigger("owl.prev")
        }),
        y("#owl-new2").owlCarousel({
            items: 3,
            itemsCustom: !1,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [630, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1
        }),
        y("#owl-featured2").owlCarousel({
            items: 3,
            itemsCustom: !1,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [630, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1
        }),
        y("#owl-partners").owlCarousel({
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [630, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoPlay: !0,
            stopOnHover: !1,
            navigation: !1
        }),
        y("#owl-home-slider").owlCarousel({
            items: 1,
            itemsCustom: !1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [630, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoPlay: !0,
            stopOnHover: !1,
            navigation: !1
        }),
        y(function() {
            y(".dropdown").hover(function() {
                y(this).addClass("open")
            }, function() {
                y(this).removeClass("open")
            })
        });
        y("body").find(".holder").length || y("body").append("<div class='holder'></div>"),
        y("div.holder").jPages({
            containerID: "products",
            previous: ".feature-block a[data-role='prev']",
            next: ".feature-block a[data-role='next']",
            animation: "fadeInRight",
            perPage: 4
        }),
        y(".revolution").revolution({
            delay: 9e3,
            startwidth: 1170,
            startheight: 500,
            hideThumbs: 10,
            fullWidth: "on",
            fullScreen: "on",
            navigationType: "none",
            navigationArrows: "solo",
            navigationStyle: "round",
            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 30,
            navigationVOffset: 30,
            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,
            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,
            touchenabled: "on"
        }),
        y(".tool_tip").tooltip(),
        y("#product-zoom").elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 750
        });
        var e = y("#gal1")
          , e = (e.find("a[data-image]").hover(function() {
            y(".product-media-details").removeClass("video");
            var e = y(this).attr("data-image")
              , t = y(this).attr("data-zoom-image");
            y("#product-zoom").data("elevateZoom").swaptheimage(e, t)
        }),
        e.find("a[data-video]").on("mouseover", function() {
            var e = y(this)
              , t = y(".product-media-details")
              , a = t.find(".product-video");
            a.find("iframe").remove(),
            a.append('<div id="player"></div>'),
            new YT.Player("player",{
                width: "100%",
                videoId: e.data("video"),
                events: {
                    onReady: function(e) {
                        e.target.playVideo()
                    }
                }
            });
            t.addClass("video")
        }),
        (new Date).getTime())
          , e = new Date(e + 864e5);
        function h() {
            var e, t, a;
            y("[name='customer[type]']").length && (e = y("[name='customer[type]']").val(),
            a = (t = y("#customer_customerType")).find("option"),
            "cpf" == e ? (y(".cpf").show().find(":input").attr("required", "required"),
            y(".cnpj").hide().find(":input").removeAttr("required"),
            t.val(a.filter(function() {
                return "B2C" == y(this).text()
            }).val())) : (y(".cnpj").show().find(":input:not(#check):not(#customer_taxationRegime)").attr("required", "required"),
            y(".cpf").hide().find(":input").removeAttr("required"),
            t.val(a.filter(function() {
                return "B2B" == y(this).text()
            }).val())))
        }
        function g(e) {
            return e = e.replace(/\./g, ""),
            parseFloat(e.replace(/,/g, "."))
        }
        function w(e) {
            return e = -1 < (e = e.toString()).indexOf(".") ? (e = Number(e).toFixed(3)).replace(".", ",") : e
        }
        y(".time").countdown({
            date: e,
            yearsAndMonths: !0,
            leadingZero: !0
        }),
        y(".ul-side-category li a").click(function() {
            var e = y(this).next();
            return !e.hasClass("sub-category") || ("none" === e.css("display") ? y(this).next().slideDown() : (y(this).next().slideUp(),
            y(this).next().find(".sub-category").slideUp()),
            !1)
        }),
        y("[name='customer[type]']").on("change blur", function() {
            h()
        }),
        y(".cart-sumary .header-mini-cart").on("click", function(e) {
            t(e)
        }),
        y("#check").on("change click", function() {
            y(this).is(":checked") ? y("#customer_cnpj_stateRegistration").addClass("readonly").attr("readonly", "readonly").val("ISENTO") : y("#customer_cnpj_stateRegistration").removeClass("readonly").removeAttr("readonly").val("")
        }),
        y(".main-category-block label").on("click", function() {
            window.location.href = y(this).data("url")
        }),
        y("#partners img").on("mouseenter", function(e) {
            var t = y(this);
            t.data("src", t.attr("src")).attr("src", t.data("hover"))
        }).on("mouseleave", function(e) {
            var t = y(this);
            t.attr("src", t.data("src"))
        }),
        y(".product-related-carousel").owlCarousel({
            items: 6,
            itemsCustom: !1,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [630, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            autoPlay: !0,
            stopOnHover: !0,
            navigation: !1
        }),
        y(".product-related-nav .next").click(function() {
            y(y(this).data("carousel")).trigger("owl.next")
        }),
        y(".product-related-nav .prev").click(function() {
            y(y(this).data("carousel")).trigger("owl.prev")
        }),
        y(".flexy-cart-product-quantity, .input-number-inf").on("focus", function(e) {
            var t = y(this);
            t.data("quantity", g(t.val()))
        }).on("blur", function(e) {
            var t = y(this);
            t.val() && t.val() != t.data("quantity") ? t.trigger("change") : t.val(t.data("quantity"))
        }),
        y("body").on("cart-success", ".flexy-add-to-cart, .flexy-add-to-booking", function(e, t) {
            a(t),
            (window.innerWidth < 991 || screen.width < 991) && alert("Produto adicionado ao carrinho!")
        }),
        y("body").on("cart-error", function(e, t) {
            alert(t)
        }),
        y("#create-gift-list-form").on("submit", function() {
            if (y("#create-gift-list-button").attr("disabled", !0),
            y(this).attr("data-sent"))
                return !1;
            y(this).attr("data-sent", "data-sent")
        });
        var b, e = y(".flexy-weight-mask");
        e.mask("#######0,000", {
            placeholder: "0,000",
            reverse: !0
        });
        e.on("keyup", function(e) {
            clearTimeout(b),
            b = setTimeout(function() {
                !function(e, t, a) {
                    var o = a.data("stock");
                    if (i(g(t), o))
                        return 1;
                    a.val(w(o)).trigger("change"),
                    e.preventDefault(),
                    e.stopImmediatePropagation()
                }(e, y(this).val(), y(this)) || y(this).trigger("blur")
            }, 1200)
        }),
        e.on("keydown", function(e) {
            clearTimeout(b)
        }),
        y(".stock-verified").on("change keypress keyup keydown", function(e) {
            var t = y(this);
            i(Number(t.val()), t.data("stock")) || (t.val(w(t.data("stock"))).trigger("change"),
            e.preventDefault(),
            e.stopImmediatePropagation())
        }),
        h(),
        a(k)
    }),
    (new WOW).init()
}(jQuery, CART),
function() {
    var t = []
      , a = new Set([]);
    function o(e) {
        return t.indexOf(e)
    }
    function e() {
        $(".search-box").animate({
            opacity: "toggle"
        }, 500, function() {}),
        $(".search-modal-background").animate({
            opacity: "toggle"
        }, 500, function() {})
    }
    $(function() {
        $(".additional-add-to-cart").on("click", function() {
            var e = $(this).data("variant-id");
            -1 < o(e) ? (t.splice(o(e), 1),
            alert("Produto removido!")) : (t.push(e),
            alert("Produto adicionado!")),
            $(".main_cart_add").data("additional-variant-ids", t)
        })
    }),
    $(function() {
        $(".additional-to-cart").on("click", function() {
            var e = $(this).data("addition-id");
            a.add(e),
            $(".flexy-add-to-cart, .flexy-add-to-booking").one("cart-error", function() {
                a.delete(e)
            })
        })
    }),
    $(function() {
        $(".search-box-toggle").click(function() {
            e(),
            $(".search-input").focus()
        }),
        $(".search-modal-background").click(function() {
            e()
        })
    }),
    $(function() {
        $(".coupon-validate").on("keyup", function(e) {
            $(this).val($(this).val().replace(/[^0-9a-zA-Z_]/g, ""))
        })
    }),
    $(function() {
        $("#zipCodeCart").on("keyup", function(e) {
            var t, a;
            9 === $(this).val().length && (container = $(".cep_validate"),
            t = "https://viacep.com.br/ws/" + $(this).val() + "/json/",
            (a = new XMLHttpRequest).onreadystatechange = function() {
                if (4 == a.readyState && 200 == a.status) {
                    var e = JSON.parse(a.responseText);
                    if (e.erro)
                        return $("#calculation_cep").attr("disabled", !0),
                        container.html("<span><br>Este CEP não existe. <br>Favor informe um CEP válido </span>"),
                        $(".shipping-estimate").hide(),
                        !1
                }
                e.logradouro && ($(".cep_validate").html(""),
                $("#calculation_cep").attr("disabled", !1),
                $("#calculation_cep").focus())
            }
            ,
            a.open("GET", t, !0),
            a.send()),
            0 === $(this).val().length && $(".cep_validate").html("")
        })
    }),
    $(function() {
        $("#zipCode").click(function() {
            var e, a;
            -1 !== window.location.pathname.indexOf("quote") && (e = $(".flexy-input-postcode").val(),
            e = [location.protocol, "//", location.host, location.pathname].join("") + "?zipCode=" + e,
            a = "",
            $(".f2-quote-observation").each(function() {
                var e = $(this).data("observation")
                  , t = $(this).val();
                a += "&" + e + "=" + t
            }),
            window.location = e + a)
        })
    }),
    $(function() {
        $(".copy-to-clipboard").click(function() {
            let e = $(this);
            var t = e.data("text");
            let a = document.createElement("input");
            document.body.appendChild(a),
            a.setAttribute("id", "dummy_id"),
            document.getElementById("dummy_id").value = t,
            a.select(),
            document.execCommand("copy"),
            document.body.removeChild(a),
            e.find(".fa-check").length || (t = document.createElement("span"),
            e.append(t),
            $(t).addClass("fa fa-check")),
            e.fadeOut(300).fadeIn(300).prop("title", "Copiado!")
        })
    }),
    $(function() {
        $(".payment-box .nav-tabs [role=tab]").on("click", function() {
            var e = $("[name='checkout[paymentMethod][0][name]']:checked").val();
            let t = new RegExp("payment.method.creditcard..+");
            t.test(e) || $("#installments-tax").hide()
        })
    })
}();
