jQuery((function(e) {
    if (e("#animateHomeSection").length) {
        var i = new ScrollMagic.Controller,
            n = new ScrollMagic.Scene({
                triggerElement: "#animateHomeSection",
                triggerHook: 0,
                duration: "50%",
                offset: 0,
                reverse: !0
            }),
            s = new ScrollMagic.Scene({
                triggerElement: "#animateHomeSection",
                triggerHook: .5,
                duration: "50%",
                offset: function() {
                    var e = 0;
                    e = window.innerHeight < 800 ? window.innerHeight + 200 : window.innerHeight;
                    return e
                }(),
                reverse: !0
            }),
            r = new ScrollMagic.Scene({
                triggerElement: "#animateHomeSection",
                triggerHook: .5,
                duration: 900,
                offset: 260,
                reverse: !0
            }),
            o = new ScrollMagic.Scene({
                triggerElement: "#animateHomeSection",
                triggerHook: .5,
                duration: 620,
                offset: 50,
                reverse: !0
            });

        function t(i) {
            e(".line-wrapper .line-desktop .icon-active svg").css("stroke-dashoffset", 2653 - 2653 * i.progress / 2), e(".step-top").each((function() {
                var n = e(this).data("progress");
                i.progress >= n ? e(this).find("svg").removeClass("inactive") : e(this).find("svg").addClass("inactive")
            }))
        }

        function a(i) {
            e(".line-wrapper .line-desktop .icon-active svg").css("stroke-dashoffset", 1326.5 - 1326.5 * i.progress), e(".step-bottom").each((function() {
                var n = e(this).data("progress");
                i.progress >= n ? e(this).find("svg").removeClass("inactive") : e(this).find("svg").addClass("inactive")
            }))
        }

        function c(i) {
            e(".line-wrapper .line-tablet .icon-active svg").css("stroke-dashoffset", 1054 - 1054 * i.progress), e(".step").each((function() {
                var n = e(this).data("progress-tablet");
                i.progress >= n ? e(this).find("svg").removeClass("inactive") : e(this).find("svg").addClass("inactive")
            }))
        }

        function g(i) {
            e(".line-wrapper .line-mobile .icon-active svg").css("stroke-dashoffset", 627 - 627 * i.progress), e(".step").each((function() {
                var n = e(this).data("progress-mobile");
                i.progress >= n ? e(this).find("svg").removeClass("inactive") : e(this).find("svg").addClass("inactive")
            }))
        }
        e(window).resize((function() {
            var v = e(window).width();
            v > 975 ? (i.removeScene([r, o]), i.addScene([n, s]), n.setPin("#animateHomeSection"), s.setPin("#animateHomeSection"), n.on("progress", t), s.on("progress", a)) : v > 751 && v < 976 ? (n.removePin(!0), s.removePin(!0), i.removeScene([n, s, o]), i.addScene(r), r.on("progress", c)) : (n.removePin(!0), s.removePin(!0), i.removeScene([n, s, r]), i.addScene(o), o.on("progress", g))
        })).resize()
    }
}));