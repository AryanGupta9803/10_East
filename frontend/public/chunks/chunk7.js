(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1964], {
    19138: function(e, r, t) {
        "use strict";
        t.d(r, {
            Z: function() {
                return k
            }
        });
        var n = t(85893)
          , o = t(67294)
          , a = t(25675)
          , i = t(11163)
          , l = t(86010)
          , c = t(72148)
          , s = t(94279)
          , u = t(99317)
          , d = t(86080)
          , f = t.n(d)
          , m = t(56849)
          , p = function(e) {
            var r = e.ctaData
              , t = r.title
              , o = r.text
              , a = r.buttonText
              , i = r.buttonUrl;
            return (0,
            n.jsx)(u.JN, {
                context: "marketing",
                children: (0,
                n.jsx)("section", {
                    className: "bg-new-gray-450 font-amiri text-new-charcoal-primary",
                    children: (0,
                    n.jsxs)(m.W2, {
                        size: "full",
                        verticalPadding: !0,
                        className: "flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "lg:grow",
                            children: [(0,
                            n.jsx)(m.X6, {
                                tag: "h4",
                                level: 4,
                                children: t
                            }), !!o && (0,
                            n.jsx)(s.YI, {
                                value: o
                            })]
                        }), (0,
                        n.jsx)("div", {
                            children: (0,
                            n.jsx)(m.zx, {
                                elementType: "link",
                                type: "secondary",
                                url: i,
                                className: "w-full lg:w-auto track",
                                dataClickAction: "footer-cta-".concat(a),
                                dataClickSubjectName: a,
                                children: a
                            })
                        })]
                    })
                })
            })
        }
          , g = t(34051)
          , v = t.n(g)
          , h = t(55479)
          , x = t(23730);
        function b(e, r, t, n, o, a, i) {
            try {
                var l = e[a](i)
                  , c = l.value
            } catch (s) {
                return void t(s)
            }
            l.done ? r(c) : Promise.resolve(c).then(n, o)
        }
        function y(e) {
            var r = (0,
            o.useState)({})
              , t = r[0]
              , n = r[1];
            return (0,
            o.useMemo)((function() {
                var r = function() {
                    var r, t = (r = v().mark((function r() {
                        var t;
                        return v().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    (0,
                                    h.D4)(e);
                                case 2:
                                    t = r.sent,
                                    n({
                                        page: t
                                    });
                                case 4:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )),
                    function() {
                        var e = this
                          , t = arguments;
                        return new Promise((function(n, o) {
                            var a = r.apply(e, t);
                            function i(e) {
                                b(a, n, o, i, l, "next", e)
                            }
                            function l(e) {
                                b(a, n, o, i, l, "throw", e)
                            }
                            i(void 0)
                        }
                        ))
                    }
                    );
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                r().catch((function(e) {
                    (0,
                    x.S3)(e)
                }
                ))
            }
            ), [e]),
            t
        }
        var j = t(20148)
          , _ = t.n(j);
        function w(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t,
            e
        }
        var N = {
            marks: {
                sup: function(e) {
                    var r = e.children;
                    return (0,
                    n.jsx)("sup", {
                        children: r
                    })
                }
            }
        }
          , k = function(e) {
            var r, t, o, d = e.isLoggedIn, g = e.routeOverride, v = (0,
            u.ZS)().authenticatedUser, h = (0,
            i.useRouter)().pathname, x = y(g || h), b = d ? null === (r = x.page) || void 0 === r ? void 0 : r.loggedInCta : null === (t = x.page) || void 0 === t ? void 0 : t.loggedOutCta, j = [{
                href: "/privacy-policy",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Privacy Policy"
            }, d ? {
                href: "/terms-of-use",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Terms of Use"
            } : {
                href: "/website-terms-of-use",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Website Terms of Use"
            }], k = function() {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
            };
            return (0,
            n.jsxs)(u.JN, {
                context: "marketing",
                darkTheme: !0,
                children: [v && (0,
                n.jsx)(m.zx, {
                    elementType: "link",
                    type: "unstyled",
                    url: "/invite-a-member",
                    className: "hidden lg:block fixed bottom-[22px] right-[98px] z-[199] justify-center hover:outline hover:outline-1 hover:outline-new-gold-primary rounded px-6 py-4 bg-gradient-to-r from-new-gold-primary to-new-purple-primary hover:from-[#E8A165] hover:to-[#604746] !text-new-off-white-100 leading-none",
                    dataCy: "footer-share-button",
                    children: "Share"
                }), (0,
                n.jsxs)("footer", {
                    className: (0,
                    l.Z)(_().footer, "bg-new-black-primary font-amiri"),
                    children: [b && (0,
                    n.jsx)(p, {
                        ctaData: b
                    }), (0,
                    n.jsxs)(m.W2, {
                        verticalPadding: !0,
                        className: "flex flex-col divide-solid lg:divide-none divide-[#666666]/25 divide-x-0 divide-y text-[#E8E8E8] text-center lg:text-left",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "lg:flex lg:mb-12 lg:items-center pb-5 lg:p-0",
                            children: [(0,
                            n.jsx)(a.default, {
                                src: f(),
                                width: "48",
                                height: "39",
                                alt: "",
                                "data-cy": "10-east-logo"
                            }), (0,
                            n.jsx)("div", {
                                className: "hidden lg:block lg:ml-auto",
                                children: (0,
                                n.jsxs)("a", {
                                    className: "flex items-end gap-4 text-primary-100 leading-none whitespace-nowrap cursor-pointer",
                                    onClick: k,
                                    children: ["Top of Page ", (0,
                                    n.jsx)(c.Z, {
                                        width: 18
                                    })]
                                })
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            className: "lg:mb-24 py-5 lg:p-0",
                            children: [(0,
                            n.jsx)(m.nv, {
                                className: "mb-5 lg:mb-10",
                                children: (0,
                                n.jsx)(m.rU, {
                                    href: "mailto:contact@10east.co",
                                    children: "contact@10east.co"
                                })
                            }), (0,
                            n.jsxs)(m.nv, {
                                children: ["10 East 53rd Street", (0,
                                n.jsx)("br", {}), "New York, NY 10022"]
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            className: "lg:flex lg:gap-5 lg:mb-6 py-5 last:pb-0 lg:p0 text-xs",
                            children: [(0,
                            n.jsxs)(m.nv, {
                                className: "mb-5 lg:mb-0 lg:leading-none",
                                children: ["Copyright ", (new Date).getFullYear(), " Portage Technologies Inc. \u2014 All Rights Reserved."]
                            }), (0,
                            n.jsx)("div", {
                                className: "flex justify-center divide-solid divide-y-0 divide-x leading-none",
                                children: j.map((function(e) {
                                    return (0,
                                    n.jsx)(m.rU, function(e) {
                                        for (var r = 1; r < arguments.length; r++) {
                                            var t = null != arguments[r] ? arguments[r] : {}
                                              , n = Object.keys(t);
                                            "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                                            }
                                            )))),
                                            n.forEach((function(r) {
                                                w(e, r, t[r])
                                            }
                                            ))
                                        }
                                        return e
                                    }({}, e, {
                                        className: "px-4 first:pl-0 last:pr-0 whitespace-nowrap"
                                    }), e.href)
                                }
                                ))
                            })]
                        }), !!(null === x || void 0 === x || null === (o = x.page) || void 0 === o ? void 0 : o.footnotes) && (0,
                        n.jsx)("div", {
                            className: (0,
                            l.Z)(_().footnotes, "py-5 last:pb-0 lg:p-0 text-left text-xs"),
                            children: x.page.footnotes.map((function(e, r) {
                                return (0,
                                n.jsx)(s.YI, {
                                    value: e.text,
                                    components: N
                                }, r)
                            }
                            ))
                        }), (0,
                        n.jsx)("div", {
                            className: "lg:hidden pt-5",
                            children: (0,
                            n.jsx)("a", {
                                title: "Top of Page",
                                className: "cursor-pointer",
                                onClick: k,
                                children: (0,
                                n.jsx)(m.dY, {
                                    width: 33
                                })
                            })
                        })]
                    })]
                })]
            })
        }
    },
    12370: function(e, r, t) {
        "use strict";
        t.d(r, {
            Z: function() {
                return y
            }
        });
        var n = t(85893)
          , o = t(25675)
          , a = t(86010)
          , i = t(6803)
          , l = t.n(i)
          , c = t(94344)
          , s = t.n(c)
          , u = t(34051)
          , d = t.n(u)
          , f = t(67294)
          , m = t(55479)
          , p = t(23730);
        function g(e, r, t, n, o, a, i) {
            try {
                var l = e[a](i)
                  , c = l.value
            } catch (s) {
                return void t(s)
            }
            l.done ? r(c) : Promise.resolve(c).then(n, o)
        }
        function v() {
            var e = (0,
            f.useState)()
              , r = e[0]
              , t = e[1];
            return (0,
            f.useMemo)((function() {
                var e = function() {
                    var e, r = (e = d().mark((function e() {
                        var r;
                        return d().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    m.j$)();
                                case 2:
                                    r = e.sent,
                                    t(r);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )),
                    function() {
                        var r = this
                          , t = arguments;
                        return new Promise((function(n, o) {
                            var a = e.apply(r, t);
                            function i(e) {
                                g(a, n, o, i, l, "next", e)
                            }
                            function l(e) {
                                g(a, n, o, i, l, "throw", e)
                            }
                            i(void 0)
                        }
                        ))
                    }
                    );
                    return function() {
                        return r.apply(this, arguments)
                    }
                }();
                e().catch((function(e) {
                    (0,
                    p.S3)(e)
                }
                ))
            }
            ), []),
            r
        }
        var h = t(31413);
        function x(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
                n[t] = e[t];
            return n
        }
        function b(e) {
            return function(e) {
                if (Array.isArray(e))
                    return x(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, r) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return x(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return x(e, r)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var y = function() {
            var e = s().container
              , r = s().carousel
              , t = s().carousel__items
              , i = s().reverse
              , c = s().logo
              , u = v()
              , d = l()(h.Z);
            if (!u)
                return (0,
                n.jsx)(n.Fragment, {});
            var f = u.map((function(e) {
                return {
                    name: e.name,
                    url: d.image(e.image).url()
                }
            }
            ))
              , m = Math.ceil(f.length / 2)
              , p = f.slice(0, m)
              , g = f.slice(m)
              , x = function(e) {
                var l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , s = b(e).concat(b(e), b(e), b(e));
                return (0,
                n.jsx)("div", {
                    className: r,
                    style: {
                        "--carousel-end": "calc(-2 * ".concat(e.length, " * 144px)")
                    },
                    children: (0,
                    n.jsx)("div", {
                        className: (0,
                        a.Z)(t, l && i),
                        children: s.map((function(e, r) {
                            return (0,
                            n.jsx)("div", {
                                className: c,
                                children: (0,
                                n.jsx)(o.default, {
                                    src: e.url,
                                    alt: e.name,
                                    layout: "fill",
                                    objectFit: "contain",
                                    priority: !0
                                })
                            }, r)
                        }
                        ))
                    })
                })
            };
            return (0,
            n.jsxs)("div", {
                className: e,
                children: [x(p), x(g, !0)]
            })
        }
    },
    20148: function(e) {
        e.exports = {
            footer: "Footer_footer__1IwEk",
            footnotes: "Footer_footnotes__f5fkq"
        }
    },
    94344: function(e) {
        e.exports = {
            orangePurpleGradient: "MemberConcierge_orangePurpleGradient__OQvdV",
            pause: "MemberConcierge_pause__1szSE",
            container: "MemberConcierge_container__8JCoS",
            carousel: "MemberConcierge_carousel__CXx87",
            carousel__items: "MemberConcierge_carousel__items__MMPaZ",
            rotate: "MemberConcierge_rotate__gL32Z",
            reverse: "MemberConcierge_reverse__S62bp",
            "rotate-reverse": "MemberConcierge_rotate-reverse__4T_fc",
            logo: "MemberConcierge_logo___v1w6"
        }
    }
}]);
//# sourceMappingURL=1964-0dadb53a925f6fac.js.map
