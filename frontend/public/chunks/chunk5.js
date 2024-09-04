(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2822], {
    13233: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return r
            }
        });
        var r, i = n(34051), a = n.n(i), o = n(85893), l = (n(67294),
        n(94600)), s = n(2060), c = n(75012), u = n(88746), d = n(74231), f = n(95496), m = n(11576), v = n(87536), p = n(23730), I = n(70003), g = n(72740);
        function y(e, t, n, r, i, a, o) {
            try {
                var l = e[a](o)
                  , s = l.value
            } catch (c) {
                return void n(c)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function b(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var a = e.apply(t, n);
                    function o(e) {
                        y(a, r, i, o, l, "next", e)
                    }
                    function l(e) {
                        y(a, r, i, o, l, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        !function(e) {
            e[e.FIRST_REMINDER = 0] = "FIRST_REMINDER",
            e[e.SECOND_REMINDER = 1] = "SECOND_REMINDER"
        }(r || (r = {}));
        var x = d.Ry().shape({
            personalizedFollowUpText: d.Z_().required("Follow Up Email Text is a required field")
        });
        t.Z = function(e) {
            var t = e.type
              , n = e.isOpened
              , i = e.item
              , d = e.onClose
              , y = e.refetch
              , h = (0,
            m.useToastMessages)().addMessages
              , N = (0,
            v.cI)({
                defaultValues: {},
                resolver: (0,
                f.X)(x)
            })
              , j = N.register
              , M = N.handleSubmit
              , w = N.reset
              , T = N.formState
              , E = T.errors
              , O = T.isSubmitting
              , S = function() {
                var e = b(a().mark((function e(t) {
                    return a().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                D(t.personalizedFollowUpText);
                            case 3:
                                w(),
                                setTimeout(y, 3e3),
                                d(),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                (0,
                                p.S3)(e.t0);
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , D = function() {
                var e = b(a().mark((function e(n) {
                    return a().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0,
                                g.GW)(t, i, !0, n);
                            case 2:
                                h([{
                                    message: "Invite Reminder Sent",
                                    variant: I.U.SUCCESS
                                }]);
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            o.jsx)(u.Z, {
                onClose: d,
                open: n,
                title: "Send Personalized ".concat(t === r.FIRST_REMINDER ? "1st" : "2nd", " Invite Follow Up"),
                classes: {
                    modal: "w-[500px] absolute top-1"
                },
                children: (0,
                o.jsxs)("form", {
                    name: "Create Profile",
                    className: "mt-8 space-y-8",
                    onSubmit: M(S),
                    children: [(0,
                    o.jsx)(l.K, {
                        name: "personalizedFollowUpText",
                        labelText: "Personalized Follow Up Email Text",
                        register: j,
                        errors: E
                    }), (0,
                    o.jsx)(s.Z, {
                        children: (0,
                        o.jsx)(c.Z, {
                            text: "Send Email",
                            type: "submit",
                            disabled: O,
                            loading: O,
                            className: "",
                            "data-cy": "create-profile-submit-button"
                        })
                    })]
                })
            })
        }
    },
    71542: function(e, t, n) {
        "use strict";
        n.d(t, {
            q: function() {
                return i
            }
        });
        var r = n(67294)
          , i = function(e) {
            var t = (0,
            r.useState)(1)
              , n = t[0]
              , i = t[1]
              , a = (0,
            r.useState)(n)
              , o = a[0]
              , l = a[1]
              , s = (0,
            r.useState)(0)
              , c = s[0]
              , u = s[1]
              , d = function() {
                return window.scrollTo({
                    top: 0
                })
            };
            return {
                currentStep: o,
                nextStep: function() {
                    if (o < c)
                        return l(o + 1),
                        void (window.scrollY > 0 && d());
                    e && e()
                },
                prevStep: function() {
                    if (o > 1)
                        return l(o - 1),
                        void (window.scrollY > 0 && d());
                    e && e()
                },
                isFirstStep: 1 === o,
                isLastStep: o === c,
                setTotalSteps: u,
                setStartStep: i,
                setCurrentStep: l
            }
        }
    },
    4555: function(e, t, n) {
        "use strict";
        var r = n(85893)
          , i = n(67294);
        t.Z = function(e) {
            var t = i.Children.toArray(e.children)
              , n = e.useSteps
              , a = (0,
            i.useState)()
              , o = a[0]
              , l = a[1];
            return (0,
            i.useEffect)((function() {
                n.setTotalSteps(t.length),
                l(t[n.currentStep - 1])
            }
            ), [e.children]),
            (0,
            r.jsx)(r.Fragment, {
                children: t && o
            })
        }
    },
    3074: function(e, t, n) {
        "use strict";
        n.d(t, {
            QH: function() {
                return j
            },
            h4: function() {
                return ze
            },
            ad: function() {
                return k
            },
            gR: function() {
                return o.gR
            },
            DR: function() {
                return Ge
            },
            Zx: function() {
                return Ue
            },
            Hp: function() {
                return $e
            },
            xE: function() {
                return o.xE
            },
            bp: function() {
                return R
            },
            pq: function() {
                return Q
            },
            XL: function() {
                return Qt
            },
            IS: function() {
                return he
            },
            fP: function() {
                return Kt
            },
            L3: function() {
                return un
            },
            HN: function() {
                return Le
            },
            az: function() {
                return Me
            },
            W_: function() {
                return Se
            },
            i$: function() {
                return Ce
            },
            Ld: function() {
                return o.Ld
            },
            VW: function() {
                return X
            },
            Fu: function() {
                return l
            }
        });
        var r = n(85893)
          , i = n(18499)
          , a = n(99317)
          , o = n(97517)
          , l = function(e, t) {
            return !t || !t.restrict || (!(e && e.metadata && Array.isArray(e.metadata.assetClasses) && 0 !== e.metadata.assetClasses.length) || !s(null !== e && void 0 !== e ? e : void 0, t))
        }
          , s = function(e, t) {
            var n;
            return !(!(null === t || void 0 === t ? void 0 : t.restrict) || !(null === (n = t.assetClass) || void 0 === n ? void 0 : n.length)) && t.assetClass.some((function(t) {
                var n, r;
                return null === e || void 0 === e || null === (n = e.metadata) || void 0 === n || null === (r = n.assetClasses) || void 0 === r ? void 0 : r.includes(t)
            }
            ))
        }
          , c = function(e, t) {
            var n = (0,
            a.ZS)()
              , r = n.adminUser
              , i = n.member
              , l = !1
              , c = !1
              , u = !1
              , d = !1
              , f = !1
              , m = !1
              , v = !1
              , p = !1
              , I = !1
              , g = !1
              , y = !1
              , b = !1;
            if (e && t) {
                var x, h, N, j, M, w, T, E = null !== (T = o.xE.fromString(e.status.toUpperCase())) && void 0 !== T ? T : o.xE.CLOSED, O = E !== o.xE.CLOSED, S = t.value >= o.gR.APPROVED.value, D = function(e, t, n) {
                    var r = t.status
                      , i = o.xE.fromString(r.toUpperCase())
                      , a = i !== o.xE.CLOSED
                      , l = n.value >= o.gR.APPROVED.value;
                    return (e || l || a) && i !== o.xE.PREVIEW
                }(r, e, t), A = s(i, e);
                l = [o.gR.DOCS_INITIATED, o.gR.APPROVED].includes(t),
                c = !D && E === o.xE.PREVIEW,
                u = !!(null === (h = null === (x = e.resources) || void 0 === x ? void 0 : x.find((function(e) {
                    return "Executive Summary" === e.label
                }
                ))) || void 0 === h ? void 0 : h.fileUrl),
                d = E.canInvest && [o.gR.NONE, o.gR.INDICATE_INTEREST, o.gR.REQUESTED].includes(t) && !A,
                f = !0,
                m = !0,
                v = O || S,
                p = D && !A,
                I = !!(null === (j = null === (N = e.resources) || void 0 === N ? void 0 : N.find((function(e) {
                    var t;
                    return null === (t = e.label) || void 0 === t ? void 0 : t.includes("Investment Report")
                }
                ))) || void 0 === j ? void 0 : j.fileUrl),
                g = !!(null === (w = null === (M = e.resources) || void 0 === M ? void 0 : M.find((function(e) {
                    var t;
                    return null === (t = e.label) || void 0 === t ? void 0 : t.includes("CIO Q&A Summary")
                }
                ))) || void 0 === w ? void 0 : w.fileUrl),
                y = !0,
                b = D && !!e.playbackId && !A
            }
            return {
                completeDocuments: l,
                indicateInterest: c,
                printPdf: u,
                requestAllocation: d,
                reviewWithColleague: f,
                scheduleCall: m,
                viewDataRoom: v,
                viewDetails: p,
                viewInvestmentReport: I,
                viewCIOSummary: g,
                viewResources: y,
                viewVideo: b
            }
        }
          , u = n(19377)
          , d = n(30423)
          , f = n(67294)
          , m = n(86010)
          , v = n(76323)
          , p = n(93605)
          , I = n(56849);
        function g(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    g(e, t, n[t])
                }
                ))
            }
            return e
        }
        function b(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var x = function(e) {
            var t = e.allowInternationalUsers
              , n = void 0 !== t && t
              , i = e.allowRestrictedUsers
              , o = void 0 !== i && i
              , l = e.allowRestrictedByAssetClassUsers
              , c = void 0 !== l && l
              , u = e.children
              , g = e.className
              , x = e.gaEvent
              , h = e.Icon
              , N = e.iconClassName
              , j = e.offering
              , M = e.onClick
              , w = e.restrictedGaEvent
              , T = e.restrictedUserActivitySubjectType
              , E = e.showIcon
              , O = e.type
              , S = e.userActivitySubjectType
              , D = b(e, ["allowInternationalUsers", "allowRestrictedUsers", "allowRestrictedByAssetClassUsers", "children", "className", "gaEvent", "Icon", "iconClassName", "offering", "onClick", "restrictedGaEvent", "restrictedUserActivitySubjectType", "showIcon", "type", "userActivitySubjectType"])
              , A = (0,
            a.ZS)()
              , C = A.member
              , k = A.activeProfile
              , P = A.internationalUser
              , L = A.restrictedUser
              , _ = (0,
            p.Z)().trackEvent
              , Z = (0,
            f.useState)(!1)
              , R = Z[0]
              , V = Z[1]
              , W = s(C, j);
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(I.zx, y({
                    type: O,
                    onClick: function() {
                        if (P && !n || L && !o || W && !c)
                            return V(!0),
                            w && d.$.ecommerceEvent(w, j, k),
                            void (T && _(T, {
                                dealName: j.title,
                                subjectId: j._id,
                                offering: j,
                                profile: k
                            }));
                        M(),
                        x && d.$.ecommerceEvent(x, j, k),
                        S && _(S, {
                            dealName: j.title,
                            subjectId: j._id,
                            offering: j,
                            profile: k
                        })
                    },
                    className: (0,
                    m.Z)("unstyled" === O && "flex items-center text-base text-current hover:text-new-gold-100 whitespace-nowrap", g)
                }, D, {
                    children: [E && !!h && (0,
                    r.jsx)(h, {
                        className: (0,
                        m.Z)("w-4 mr-4", N)
                    }), u]
                })), (0,
                r.jsx)(v.Z, {
                    open: R,
                    onClose: function() {
                        V(!1)
                    }
                })]
            })
        };
        function h(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function N(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var j = function(e) {
            var t = e.children
              , n = e.investmentState
              , o = e.offering
              , l = N(e, ["children", "investmentState", "offering"])
              , s = (0,
            a.ZS)().activeProfile;
            return c(o, n).completeDocuments ? (0,
            r.jsx)(x, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        h(e, t, n[t])
                    }
                    ))
                }
                return e
            }({
                gaEvent: u.Z.BEGIN_CHECKOUT,
                Icon: i.Z,
                investmentState: n,
                offering: o,
                onClick: function() {
                    d.$.ecommerceEvent(u.Z.BEGIN_CHECKOUT, o, s),
                    o.subDocUrl ? window.open(o.subDocUrl, "_blank") : console.error("No subDocUrl specified for ".concat(o.name))
                }
            }, l, {
                children: t || (0,
                r.jsx)(r.Fragment, {
                    children: "Complete Documents"
                })
            })) : null
        }
          , M = n(34051)
          , w = n.n(M)
          , T = n(96055)
          , E = n(82911)
          , O = n(93666)
          , S = n(23730);
        function D(e, t, n, r, i, a, o) {
            try {
                var l = e[a](o)
                  , s = l.value
            } catch (c) {
                return void n(c)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function A(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function C(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var k = function(e) {
            var t = e.children
              , n = e.investmentState
              , i = e.offering
              , l = e.setInvestmentState
              , s = e.type
              , u = C(e, ["children", "investmentState", "offering", "setInvestmentState", "type"])
              , d = (0,
            O.a)().hubspotContactId
              , m = (0,
            a.ZS)()
              , v = m.user
              , p = m.activeProfile
              , I = c(i, n).indicateInterest
              , g = (0,
            f.useState)(n === o.gR.INDICATE_INTEREST)
              , y = g[0]
              , b = g[1]
              , h = (0,
            f.useState)(!1)
              , N = h[0]
              , j = h[1];
            (0,
            f.useEffect)((function() {
                b(n === o.gR.INDICATE_INTEREST)
            }
            ), [n]);
            var M = function() {
                var e, t = (e = w().mark((function e() {
                    var t;
                    return w().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!y && !N) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (d) {
                                    e.next = 5;
                                    break
                                }
                                return (0,
                                S.S3)(new Error("No HubSpot Contact ID found in session storage for ".concat(v.name, " on ").concat(i.name))),
                                e.abrupt("return");
                            case 5:
                                try {
                                    j(!0),
                                    t = {
                                        owner: v.user_id,
                                        offeringId: i._id,
                                        status: o.gR.INDICATE_INTEREST.value.toString(),
                                        waitlist: !1,
                                        amount: "0",
                                        profileInvestmentId: p.id,
                                        fundId: i.fundId || "",
                                        referMemberPopup: !1,
                                        createdByAdmin: !1
                                    },
                                    l(t),
                                    b(!0)
                                } catch (n) {
                                    (0,
                                    S.S3)(n)
                                } finally {
                                    j(!1)
                                }
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )),
                function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);
                        function o(e) {
                            D(a, r, i, o, l, "next", e)
                        }
                        function l(e) {
                            D(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }
                    ))
                }
                );
                return function() {
                    return t.apply(this, arguments)
                }
            }();
            return I ? (0,
            r.jsx)(x, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        A(e, t, n[t])
                    }
                    ))
                }
                return e
            }({
                allowInternationalUsers: !0,
                allowRestrictedUsers: !0,
                allowRestrictedByAssetClassUsers: !0,
                disabled: y || u.disabled,
                Icon: T.Z,
                investmentState: n,
                offering: i,
                onClick: M,
                type: s
            }, u, {
                children: t || (0,
                r.jsxs)(r.Fragment, {
                    children: ["Indicate Interest", y && "unstyled" !== s && (0,
                    r.jsx)(E.Z, {
                        className: "h-[1.25em] w-[1.25em] ml-2"
                    })]
                })
            })) : null
        }
          , P = n(68613)
          , L = n(7183);
        function _(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Z(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var R = function(e) {
            var t, n, i = e.children, a = e.investmentState, o = e.offering, l = Z(e, ["children", "investmentState", "offering"]), s = c(o, a).printPdf, d = null === (n = null === (t = o.resources) || void 0 === t ? void 0 : t.find((function(e) {
                return "Executive Summary" === e.label
            }
            ))) || void 0 === n ? void 0 : n.fileUrl;
            return s && d ? (0,
            r.jsx)(x, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        _(e, t, n[t])
                    }
                    ))
                }
                return e
            }({
                gaEvent: u.Z.EXEC_SUMMARY,
                Icon: P.Z,
                investmentState: a,
                offering: o,
                onClick: function() {
                    window.open(d, "_blank")
                },
                userActivitySubjectType: L.w.DOWNLOAD_EXEC_SUMMARY,
                restrictedUserActivitySubjectType: L.w.DOWNLOAD_EXEC_SUMMARY_ATTEMPT
            }, l, {
                children: i || (0,
                r.jsx)(r.Fragment, {
                    children: "Print Summary"
                })
            })) : null
        }
          , V = n(37010)
          , W = n(2237);
        function z(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function G(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    z(e, t, n[t])
                }
                ))
            }
            return e
        }
        function U(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var Y = function(e) {
            var t = e.open
              , n = e.onClose
              , i = e.children;
            return (0,
            r.jsx)(a.JN, {
                context: "default",
                darkTheme: !1,
                children: (0,
                r.jsx)(I.u_, {
                    open: t,
                    onClose: n,
                    children: (0,
                    r.jsx)(I.cf, {
                        className: "mb-6 last:mb-0",
                        children: i
                    })
                })
            })
        }
          , X = function(e, t, n) {
            var i, a, l, s = !e.restrictByAccreditationLevel || (null !== (i = null === n || void 0 === n ? void 0 : n.accreditationLevel) && void 0 !== i ? i : 0) >= e.accreditationLevel, c = null !== (a = V.v.fromValue(e.accreditationLevel)) && void 0 !== a ? a : V.v.QUALIFIED_PURCHASER, u = t.value > o.gR.INDICATE_INTEREST.value;
            return s || (l = e.accreditationLevelNotice || (0,
            r.jsx)(I.nv, {
                children: (0,
                r.jsx)(W.Z, {
                    name: "Offering - Default Accreditation Level Notice",
                    defaultText: "The member profile does not qualify for this offering, which is only available to {{accrediationLevel}}s. If you believe you are receiving this message in error, please contact a member of our team.",
                    data: {
                        accrediationLevel: c.label
                    }
                })
            })),
            {
                accredited: s,
                invested: u,
                message: l
            }
        }
          , Q = function(e) {
            var t = e.children
              , n = e.disabled
              , o = e.investmentState
              , l = e.offering
              , s = e.redirectAfterAllocation
              , d = void 0 !== s && s
              , m = e.type
              , v = U(e, ["children", "disabled", "investmentState", "offering", "redirectAfterAllocation", "type"])
              , p = (0,
            f.useState)(!1)
              , I = p[0]
              , g = p[1]
              , y = (0,
            f.useState)(!1)
              , b = y[0]
              , h = y[1]
              , N = (0,
            a.ZS)().activeProfile;
            if (!c(l, o).requestAllocation)
                return null;
            var j = X(l, o, N);
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(x, G({
                    disabled: n || j.invested,
                    gaEvent: u.Z.SELECT_ITEM,
                    Icon: i.Z,
                    investmentState: o,
                    offering: l,
                    onClick: function() {
                        j.invested || (j.accredited ? g(!0) : h(!0))
                    },
                    type: "highlighted" === m && j.invested ? "primary" : m,
                    userActivitySubjectType: j.accredited ? L.w.OPEN_REQUEST_ALLOCATION_MODAL : L.w.OPEN_REQUEST_ALLOCATION_MODAL_ATTEMPT
                }, v, {
                    children: t || (0,
                    r.jsxs)(r.Fragment, {
                        children: ["Request Allocation", j.invested && "unstyled" !== m && (0,
                        r.jsx)(E.Z, {
                            className: "h-[1.25em] w-[1.25em] ml-2"
                        })]
                    })
                })), (0,
                r.jsx)(Qt, {
                    open: I,
                    onClose: function() {
                        g(!1)
                    },
                    offering: l,
                    redirectOnCompletion: d
                }), (0,
                r.jsx)(Y, {
                    open: b,
                    onClose: function() {
                        h(!1)
                    },
                    children: j.message
                })]
            })
        }
          , F = n(98523);
        function B(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function J(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var H = function(e) {
            var t = e.children
              , n = e.investmentState
              , i = e.offering
              , a = e.url
              , o = J(e, ["children", "investmentState", "offering", "url"]);
            return c(i, n).viewResources && a ? (0,
            r.jsx)(x, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        B(e, t, n[t])
                    }
                    ))
                }
                return e
            }({
                gaEvent: u.Z.OFFERING_RESOURCE,
                Icon: F.Z,
                investmentState: n,
                offering: i,
                onClick: function() {
                    window.open(a, "_blank")
                },
                userActivitySubjectType: L.w.DOWNLOAD_RESOURCE,
                restrictedUserActivitySubjectType: L.w.DOWNLOAD_RESOURCE_ATTEMPT
            }, o, {
                children: t
            })) : null
        }
          , K = n(65350)
          , q = n(87536)
          , $ = n(10552)
          , ee = n(50907)
          , te = n(25934)
          , ne = n(74231)
          , re = n(18968)
          , ie = n(31415)
          , ae = n(95496)
          , oe = n(75015)
          , le = n(62278)
          , se = n(72740)
          , ce = n(3660)
          , ue = n(42886)
          , de = n(42229)
          , fe = n(76170);
        function me(e, t, n, r, i, a, o) {
            try {
                var l = e[a](o)
                  , s = l.value
            } catch (c) {
                return void n(c)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function ve(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var a = e.apply(t, n);
                    function o(e) {
                        me(a, r, i, o, l, "next", e)
                    }
                    function l(e) {
                        me(a, r, i, o, l, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        var pe = function() {
            var e = ve(w().mark((function e(t, n, r, i, a, o, l) {
                return w().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.t0 = $.b,
                            e.next = 3,
                            ee.g.currentSession();
                        case 3:
                            return e.t1 = e.sent.getAccessToken().getJwtToken(),
                            e.t2 = {
                                Authorization: e.t1
                            },
                            e.t3 = {
                                owner_id: "",
                                email_type: ue.p$[ue.p$.MEMBER_REVIEW_WITH_COLLEAGUE_EMAIL],
                                target: ue.He.USER,
                                to_email: t,
                                metadata: {
                                    customProperties: {
                                        invitor_first: i,
                                        invitor_last: a,
                                        offering_name: o,
                                        offering_url: l
                                    },
                                    contactProperties: {
                                        firstname: n,
                                        lastname: r
                                    }
                                }
                            },
                            e.t4 = {
                                headers: e.t2,
                                body: e.t3
                            },
                            e.next = 9,
                            e.t0.post.call(e.t0, "usersnspublisher", "/notifications/create", e.t4);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r, i, a, o, l) {
                return e.apply(this, arguments)
            }
        }()
          , Ie = function() {
            var e = ve(w().mark((function e(t, n, r, i) {
                var a, o;
                return w().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = Boolean(window.location.hostname.indexOf("app.10east.co") > -1),
                            o = a ? "contact@10east.co" : "engineering@10east.co",
                            e.t0 = $.b,
                            e.next = 5,
                            ee.g.currentSession();
                        case 5:
                            return e.t1 = e.sent.getAccessToken().getJwtToken(),
                            e.t2 = {
                                Authorization: e.t1
                            },
                            e.t3 = {
                                owner_id: "",
                                email_type: ue.p$[ue.p$.ADMIN_REVIEW_WITH_COLLEAGUE_EMAIL],
                                target: ue.He.ADMIN,
                                to_email: o,
                                metadata: {
                                    customProperties: {
                                        member_name: t,
                                        colleague_name: n,
                                        colleague_email: r,
                                        offering_name: i
                                    },
                                    contactProperties: {}
                                }
                            },
                            e.t4 = {
                                headers: e.t2,
                                body: e.t3
                            },
                            e.next = 11,
                            e.t0.post.call(e.t0, "usersnspublisher", "/notifications/create", e.t4);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r, i) {
                return e.apply(this, arguments)
            }
        }()
          , ge = function(e) {
            var t = e.offering
              , n = e.open
              , i = void 0 === n || n
              , o = e.onClose
              , l = (0,
            O.a)().user
              , s = (0,
            a.ZS)().activeProfile
              , c = null === l || void 0 === l ? void 0 : l.user_id
              , m = Boolean(c)
              , v = le.Y.trackBehavioralEvent
              , p = le.Y.CustomTrackingEvents
              , I = ne.Ry().shape({
                firstName: ne.Z_().required("First name cannot be empty"),
                lastName: ne.Z_().required("Last name cannot be empty"),
                email: ne.Z_().required("Email cannot be empty").email("Email must be valid")
            }).required()
              , g = (0,
            q.cI)({
                resolver: (0,
                ae.X)(I)
            })
              , y = g.register
              , b = g.handleSubmit
              , x = g.reset
              , h = g.formState
              , N = h.errors
              , j = h.isSubmitting
              , M = (0,
            f.useState)(!1)
              , T = M[0]
              , E = M[1]
              , S = (0,
            f.useState)()
              , D = S[0]
              , A = S[1]
              , C = (0,
            f.useState)(!1)
              , k = C[0]
              , P = C[1]
              , L = (0,
            f.useState)("")
              , _ = L[0]
              , Z = L[1]
              , R = (0,
            f.useState)(0)
              , V = R[0]
              , W = R[1]
              , z = function() {
                var e = ve(w().mark((function e(n) {
                    var r, i, a, f, m, I;
                    return w().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = n.firstName,
                                i = n.lastName,
                                a = n.email,
                                e.prev = 1,
                                E(!0),
                                !t) {
                                    e.next = 16;
                                    break
                                }
                                return e.next = 7,
                                (0,
                                de.jQ)(a);
                            case 7:
                                if (I = e.sent,
                                0 !== (null === (f = I.data) || void 0 === f || null === (m = f.searchOnboardingApplications) || void 0 === m ? void 0 : m.total)) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 11,
                                (0,
                                se.l8)({
                                    id: (0,
                                    te.Z)(),
                                    owner: c,
                                    firstname: r,
                                    lastname: i,
                                    createdByAdmin: !1,
                                    email: a,
                                    inviteType: ce.P.REVIEW_WITH_COLLEAGUE.value,
                                    usageStatus: ce.a.PENDING,
                                    hubspotSendStatusId: "",
                                    feeWaiver: !1
                                }, c);
                            case 11:
                                return e.next = 13,
                                pe(a, r, i, l.given_name, l.family_name, t.title, (0,
                                de.X4)() + t.slug.current + "?utm_source=review-colleague");
                            case 13:
                                return e.next = 15,
                                Ie(l.given_name + "" + l.family_name, r + " " + i, a, t.title);
                            case 15:
                                v(null === l || void 0 === l ? void 0 : l.email, p.REVIEW_WITH_COLLEAGUE, {
                                    offering: t.title,
                                    colleague_name: r + " " + i,
                                    colleague_email: a
                                });
                            case 16:
                                Z(r.concat(" ", i)),
                                o(),
                                P(!0),
                                E(!1),
                                W(V + 1),
                                d.$.event(u.Z.REVIEW_WITH_COLLEAGUE, s, {
                                    offering_id: null === t || void 0 === t ? void 0 : t._id
                                }),
                                e.next = 28;
                                break;
                            case 24:
                                e.prev = 24,
                                e.t0 = e.catch(1),
                                A("There was an error sending the email."),
                                E(!1);
                            case 28:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 24]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            f.useEffect)((function() {
                x()
            }
            ), [V]),
            i ? (0,
            r.jsxs)(r.Fragment, {
                children: [T && (0,
                r.jsx)(fe.Z, {}), (0,
                r.jsxs)(re.V, {
                    open: !0,
                    onClose: o,
                    className: "relative z-50",
                    as: "div",
                    children: [(0,
                    r.jsx)("div", {
                        className: "fixed inset-0 bg-black/30",
                        "aria-hidden": "true"
                    }), (0,
                    r.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center p-4 text-charcoal-100",
                        children: (0,
                        r.jsx)(re.V.Panel, {
                            className: "w-4/5 md:w-2/3 lg:w-1/2 bg-off-white-100 p-8 drop-shadow-lg rounded-lg",
                            children: (0,
                            r.jsxs)("form", {
                                id: "review-with-colleague",
                                name: "Review with a colleague",
                                onSubmit: b(z),
                                children: [(0,
                                r.jsx)("div", {
                                    className: "absolute top-4 right-4",
                                    children: (0,
                                    r.jsx)("button", {
                                        className: "border-0 bg-transparent",
                                        onClick: o,
                                        children: (0,
                                        r.jsx)(ie.Z, {
                                            className: "h-5 w-5 align-top"
                                        })
                                    })
                                }), (0,
                                r.jsxs)(re.V.Title, {
                                    className: "text-1.1xl font-libre uppercase my-2",
                                    "data-cy": "review-with-colleague-header",
                                    children: ["Review ", null === t || void 0 === t ? void 0 : t.name, " with a colleague"]
                                }), (0,
                                r.jsx)("div", {
                                    className: "font-libre mb-8",
                                    "data-cy": "review-with-colleague-subheader",
                                    children: "The recipient will receive an email with a link to the offering."
                                }), D && (0,
                                r.jsx)("div", {
                                    className: "py-2 px-4 my-6 text-center text-error bg-error/10",
                                    children: D
                                }), (0,
                                r.jsx)("div", {
                                    className: "w-full border-0 border-b-1 border-solid border-silver-300 my-4 ".concat(m && "hidden"),
                                    children: (0,
                                    r.jsx)("span", {
                                        className: "font-libre uppercase pb-1 inline-block",
                                        children: "Send To"
                                    })
                                }), (0,
                                r.jsxs)("div", {
                                    className: "font-libre text-justify text-sm flex flex-col gap-6 uppercase font-semibold",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "flex flex-row gap-3",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "flex flex-col w-1/2",
                                            children: (0,
                                            r.jsx)(oe.I, {
                                                name: "firstName",
                                                type: "text",
                                                labelText: "First Name",
                                                register: y,
                                                errors: N,
                                                labelClassNames: "!text-charcoal-100 !text-sm !font-libre",
                                                dataCy: "first-name"
                                            })
                                        }), (0,
                                        r.jsx)("div", {
                                            className: "flex flex-col w-1/2",
                                            children: (0,
                                            r.jsx)(oe.I, {
                                                name: "lastName",
                                                type: "text",
                                                labelText: "Last Name",
                                                register: y,
                                                errors: N,
                                                labelClassNames: "!text-charcoal-100 !text-sm !font-libre",
                                                dataCy: "last-name"
                                            })
                                        })]
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "flex flex-col",
                                        children: (0,
                                        r.jsx)(oe.I, {
                                            name: "email",
                                            type: "text",
                                            labelText: "Email Address",
                                            register: y,
                                            errors: N,
                                            labelClassNames: "!text-charcoal-100 !text-sm !font-libre",
                                            dataCy: "email"
                                        })
                                    })]
                                }), (0,
                                r.jsx)("div", {
                                    className: "text-right mt-8 mb-2 pt-6 border-0 border-t-2 border-solid border-silver-300",
                                    children: (0,
                                    r.jsx)("button", {
                                        type: "submit",
                                        disabled: j,
                                        "data-cy": "event-invite-a-friend-submit",
                                        className: "text-center px-8 py-3 bg-primary-gold hover:bg-gold-100 rounded-lg text-white text-md border-0 hover:outline-none",
                                        children: "Send Message"
                                    })
                                })]
                            })
                        })
                    })]
                }), (0,
                r.jsxs)(re.V, {
                    open: k,
                    onClose: function() {
                        P(!1)
                    },
                    className: "relative z-50",
                    as: "div",
                    children: [(0,
                    r.jsx)("div", {
                        className: "fixed inset-0 bg-black/30",
                        "aria-hidden": "true"
                    }), (0,
                    r.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center p-4 text-charcoal-100",
                        children: (0,
                        r.jsxs)(re.V.Panel, {
                            className: "w-1/2 bg-off-white-100 p-8 drop-shadow-lg rounded-lg",
                            children: [(0,
                            r.jsx)("div", {
                                className: "absolute top-4 right-4",
                                children: (0,
                                r.jsx)("button", {
                                    className: "border-0 bg-transparent",
                                    onClick: function() {
                                        P(!1)
                                    },
                                    children: (0,
                                    r.jsx)(ie.Z, {
                                        className: "h-5 w-5 align-top"
                                    })
                                })
                            }), (0,
                            r.jsxs)(re.V.Title, {
                                className: "text-1.1xl font-libre uppercase my-2",
                                children: ["Your Message to ", _, " has been sent"]
                            }), (0,
                            r.jsx)("div", {
                                className: "font-libre mt-3 mb-8",
                                children: "They will receive an email with details about the offering."
                            }), (0,
                            r.jsx)("div", {
                                className: "text-right mt-8 mb-2 pt-6 border-0 border-t-1 border-solid border-silver-300",
                                children: (0,
                                r.jsx)("button", {
                                    onClick: function() {
                                        P(!1)
                                    },
                                    "data-cy": "event-invite-a-friend-confirm-close",
                                    className: "text-center px-8 py-3 bg-primary-gold hover:bg-gold-100 rounded-lg text-white text-md border-0 hover:outline-none",
                                    children: "Close"
                                })
                            })]
                        })
                    })]
                })]
            }) : null
        };
        function ye(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function be(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    ye(e, t, n[t])
                }
                ))
            }
            return e
        }
        function xe(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var he = function(e) {
            var t = e.children
              , n = e.investmentState
              , i = e.offering
              , a = xe(e, ["children", "investmentState", "offering"])
              , o = (0,
            f.useState)(!1)
              , l = o[0]
              , s = o[1];
            return c(i, n).reviewWithColleague ? (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(x, be({
                    allowInternationalUsers: !0,
                    allowRestrictedUsers: !0,
                    allowRestrictedByAssetClassUsers: !0,
                    Icon: K.Z,
                    investmentState: n,
                    offering: i,
                    onClick: function() {
                        s(!0)
                    }
                }, a, {
                    children: t || (0,
                    r.jsx)(r.Fragment, {
                        children: "Review with a Colleague"
                    })
                })), (0,
                r.jsx)(ge, {
                    offering: i,
                    open: l,
                    onClose: function() {
                        s(!1)
                    }
                })]
            }) : null
        };
        function Ne(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function je(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var Me = function(e) {
            var t = e.children
              , n = e.investmentState
              , i = e.offering
              , a = je(e, ["children", "investmentState", "offering"]);
            return c(i, n).viewDataRoom && i.dataRoomUrl ? (0,
            r.jsx)(x, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        Ne(e, t, n[t])
                    }
                    ))
                }
                return e
            }({
                gaEvent: u.Z.DATA_ROOM,
                Icon: F.Z,
                investmentState: n,
                offering: i,
                onClick: function() {
                    window.open(i.dataRoomUrl, "_blank")
                },
                userActivitySubjectType: L.w.VISIT_DATA_ROOM,
                restrictedGaEvent: u.Z.DATA_ROOM,
                restrictedUserActivitySubjectType: L.w.VISIT_DATA_ROOM_ATTEMPT
            }, a, {
                children: t || (0,
                r.jsx)(r.Fragment, {
                    children: "Data Room"
                })
            })) : null
        }
          , we = n(11163)
          , Te = n(82313);
        function Ee(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Oe(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var Se = function(e) {
            var t = e.children
              , n = e.investmentState
              , i = e.offering
              , a = Oe(e, ["children", "investmentState", "offering"])
              , o = (0,
            we.useRouter)();
            return c(i, n).viewDetails ? (0,
            r.jsx)(x, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        Ee(e, t, n[t])
                    }
                    ))
                }
                return e
            }({
                allowInternationalUsers: !0,
                allowRestrictedUsers: !0,
                gaEvent: u.Z.VIEW_ITEM,
                Icon: Te.Z,
                investmentState: n,
                offering: i,
                onClick: function() {
                    var e = "/offerings/".concat(i.slug.current);
                    o.push(e)
                }
            }, a, {
                children: t || (0,
                r.jsx)(r.Fragment, {
                    children: "View Details"
                })
            })) : null
        };
        function De(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Ae(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var Ce = function(e) {
            var t, n, i = e.children, a = e.investmentState, o = e.offering, l = Ae(e, ["children", "investmentState", "offering"]), s = c(o, a).viewInvestmentReport, d = null === (n = null === (t = o.resources) || void 0 === t ? void 0 : t.find((function(e) {
                var t;
                return null === (t = e.label) || void 0 === t ? void 0 : t.includes("Investment Report")
            }
            ))) || void 0 === n ? void 0 : n.fileUrl;
            return s && d ? (0,
            r.jsx)(x, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        De(e, t, n[t])
                    }
                    ))
                }
                return e
            }({
                gaEvent: u.Z.INVESTMENT_MEMO,
                Icon: F.Z,
                investmentState: a,
                offering: o,
                onClick: function() {
                    window.open(d, "_blank")
                },
                userActivitySubjectType: L.w.DOWNLOAD_INVESTMENT_REPORT,
                restrictedUserActivitySubjectType: L.w.DOWNLOAD_INVESTMENT_REPORT_ATTEMPT
            }, l, {
                children: i || (0,
                r.jsx)(r.Fragment, {
                    children: "10 East Investment Report"
                })
            })) : null
        };
        function ke(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Pe(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var Le = function(e) {
            var t, n, i = e.children, a = e.investmentState, o = e.offering, l = Pe(e, ["children", "investmentState", "offering"]), s = c(o, a).viewCIOSummary, d = null === (n = null === (t = o.resources) || void 0 === t ? void 0 : t.find((function(e) {
                return e.label.includes("CIO Q&A Summary")
            }
            ))) || void 0 === n ? void 0 : n.fileUrl;
            return s && d ? (0,
            r.jsx)(x, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        ke(e, t, n[t])
                    }
                    ))
                }
                return e
            }({
                gaEvent: u.Z.FILE_DOWNLOAD,
                Icon: F.Z,
                investmentState: a,
                offering: o,
                onClick: function() {
                    window.open(d, "_blank")
                },
                userActivitySubjectType: L.w.DOWNLOAD_CIO_SUMMARY,
                restrictedUserActivitySubjectType: L.w.DOWNLOAD_CIO_SUMMARY_ATTEMPT
            }, l, {
                children: i || (0,
                r.jsx)(r.Fragment, {
                    children: "Q&A Summary"
                })
            })) : null
        }
          , _e = n(94574);
        function Ze(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Re(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, a = [], o = !0, l = !1;
                    try {
                        for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (s) {
                        l = !0,
                        i = s
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || We(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Ve(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Ze(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || We(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function We(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return Ze(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ze(e, t) : void 0
            }
        }
        var ze = function(e) {
            var t, n = e.investmentState, i = e.offering, o = (0,
            a.ZS)().activeProfile, l = c(i, n), s = l.printPdf, u = l.requestAllocation, d = l.reviewWithColleague, m = l.scheduleCall, v = l.viewDataRoom, p = l.viewCIOSummary, g = l.viewInvestmentReport, y = l.viewVideo, b = X(i, n, o), x = (0,
            f.useMemo)((function() {
                var e, t = Ve(null !== (e = i.statistics) && void 0 !== e ? e : []);
                return i.timePeriod && t.push({
                    _key: "timePeriod",
                    label: i.timePeriod.label,
                    stat: i.timePeriod.value
                }),
                t
            }
            ), [i]), h = (0,
            f.useMemo)((function() {
                var e = "w-full px-6 py-4 hover:text-new-gold-primary"
                  , t = "text-new-gold-primary"
                  , a = {};
                return v && (a.viewDataRoom = (0,
                r.jsx)(Me, {
                    offering: i,
                    investmentState: n,
                    type: "unstyled",
                    showIcon: !0,
                    className: e,
                    iconClassName: t,
                    dataCy: "view-data-room-button-mobile"
                })),
                p && (a.viewCIOSummary = (0,
                r.jsx)(Le, {
                    offering: i,
                    investmentState: n,
                    type: "unstyled",
                    showIcon: !0,
                    className: e,
                    iconClassName: t,
                    dataCy: "view-cio-summary-button-mobile"
                })),
                s && (a.printPdf = (0,
                r.jsx)(R, {
                    offering: i,
                    investmentState: n,
                    type: "unstyled",
                    showIcon: !0,
                    className: e,
                    iconClassName: t,
                    dataCy: "print-pdf-button-mobile"
                })),
                m && (a.scheduleCall = (0,
                r.jsx)(I.ZT, {
                    type: "unstyled",
                    className: e,
                    iconClassName: t
                })),
                a
            }
            ), [n, i, s, m, v, p]);
            return (0,
            r.jsx)(a.JN, {
                context: "default",
                darkTheme: !0,
                children: (0,
                r.jsx)("header", {
                    className: "bg-new-black-primary text-new-off-white-100",
                    children: (0,
                    r.jsxs)(I.W2, {
                        verticalPadding: !0,
                        className: "flex flex-col lg:flex-row lg:items-center gap-6 xl:gap-14",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "flex flex-col gap-6 grow",
                            children: [(0,
                            r.jsx)(Ue, {
                                tags: i.assetClass,
                                currentIncome: i.currentIncome,
                                className: "mb-4",
                                "data-cy": "offering-asset-classes"
                            }), (0,
                            r.jsx)(I.X6, {
                                tag: "h1",
                                level: 2,
                                dataCy: "offering-title-".concat(i.name.replaceAll(" ", "-").toLowerCase()),
                                children: i.name
                            }), !!(null === (t = i.projectTags) || void 0 === t ? void 0 : t.length) && (0,
                            r.jsx)("div", {
                                className: "flex flex-col gap-1 @xl:block @xl:divide-solid @xl:divide-new-gray-350 @xl:divide-x @xl:divide-y-0 @5xl:hidden",
                                children: i.projectTags.map((function(e) {
                                    return (0,
                                    r.jsx)("span", {
                                        className: "mb-4 @xl:px-4 @xl:first:pl-0 @xl:last:pr-0",
                                        "data-cy": "project-tags",
                                        children: e
                                    }, e)
                                }
                                ))
                            }), (0,
                            r.jsx)("div", {
                                className: "hidden lg:flex flex-col gap-6",
                                children: (g || d) && (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col gap-6",
                                    children: [g && (0,
                                    r.jsx)(Ce, {
                                        offering: i,
                                        investmentState: n,
                                        type: "unstyled",
                                        className: "hidden lg:flex lg:justify-center hover:outline hover:outline-1 hover:outline-new-gold-primary rounded w-full px-6 py-4 !bg-gradient-to-r !from-new-gold-primary !to-new-purple-primary hover:!from-[#E8A165] hover:!to-[#604746] !text-new-off-white-100",
                                        dataCy: "view-investment-report-button"
                                    }), d && (0,
                                    r.jsx)(he, {
                                        offering: i,
                                        investmentState: n,
                                        type: "unstyled",
                                        className: "hidden lg:flex lg:justify-center hover:outline hover:outline-1 hover:outline-new-gray-250 rounded w-full px-6 py-4 !bg-[#303030] hover:!bg-[#262626] !text-new-off-white-100",
                                        showIcon: !0,
                                        dataCy: "review-with-colleague-button"
                                    })]
                                })
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "lg:w-[600px] xl:w-[800px]",
                            children: [y && (0,
                            r.jsx)(I.Y7, {
                                playbackId: i.playbackId,
                                tracking: {
                                    onPlay: {
                                        event: L.w.VIEW_DEAL_SUMMARY_VIDEO,
                                        data: {
                                            dealName: i.title,
                                            subjectId: i._id,
                                            offering: i
                                        }
                                    }
                                },
                                className: "mb-6 lg:mb-0",
                                dataCy: "mux-video"
                            }), (0,
                            r.jsxs)("div", {
                                className: "lg:hidden",
                                children: [!!(null === x || void 0 === x ? void 0 : x.length) && (0,
                                r.jsx)("div", {
                                    className: "mb-6 p-4 last:mb-0 rounded-lg bg-[#2d2d2d]",
                                    children: x.map((function(e) {
                                        return (0,
                                        r.jsxs)("div", {
                                            className: "flex gap-2 @sm:gap-4 @xl:gap-6 items-baseline justify-between border-solid border-new-gray-100 border-0 border-b last:border-b-0 py-4 first:pt-0 last:pb-0",
                                            children: [(0,
                                            r.jsxs)("div", {
                                                className: "text-new-gray-400",
                                                children: [e.label, e.footnoteReference && (0,
                                                r.jsx)("sup", {
                                                    className: "text-xxs",
                                                    children: e.footnoteReference
                                                })]
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "text-new-off-white-100 text-right",
                                                children: e.stat
                                            })]
                                        }, e._key)
                                    }
                                    ))
                                }), (g || d) && (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col gap-6 mb-6",
                                    children: [g && (0,
                                    r.jsx)(Ce, {
                                        offering: i,
                                        investmentState: n,
                                        type: "unstyled",
                                        className: "justify-center hover:outline hover:outline-1 hover:outline-new-gold-primary rounded w-full px-6 py-4 bg-gradient-to-r from-new-gold-primary to-new-purple-primary !text-new-off-white-100 hover:from-[#E8A165] hover:to-[#604746]",
                                        dataCy: "view-investment-report-button-mobile"
                                    }), d && (0,
                                    r.jsx)(he, {
                                        offering: i,
                                        investmentState: n,
                                        type: "unstyled",
                                        className: "justify-center hover:outline hover:outline-1 hover:outline-new-gray-250 rounded w-full px-6 py-4 !bg-[#303030] hover:!bg-[#262626] !text-new-off-white-100",
                                        showIcon: !0,
                                        dataCy: "review-with-colleague-button-mobile"
                                    })]
                                }), !!Object.keys(h).length && (0,
                                r.jsx)("ul", {
                                    className: "list-none mb-4",
                                    children: Object.entries(h).map((function(e) {
                                        var t = Re(e, 2)
                                          , n = t[0]
                                          , i = t[1];
                                        return (0,
                                        r.jsx)("li", {
                                            className: "border-solid border-new-gray-100 border-0 border-b last:border-b-0",
                                            children: i
                                        }, n)
                                    }
                                    ))
                                }), u && !b.invested && (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col gap-4",
                                    children: [(0,
                                    r.jsx)(Q, {
                                        offering: i,
                                        investmentState: n,
                                        type: "unstyled",
                                        className: "justify-center hover:outline hover:outline-1 hover:outline-[#384657] rounded w-full px-6 py-4 !bg-[#334559] hover:!bg-gradient-to-r hover:!from-[#1c2631] hover:!to-[#293848] !text-new-off-white-100",
                                        dataCy: "request-allocation-button"
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "font-light text-[#878787] text-center",
                                        "data-cy": "statistic-stat-minimum-investment",
                                        children: "$".concat((0,
                                        _e.CN)(i.minimumInvestment, 0), " Minimum Commitment")
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            })
        }
          , Ge = function(e) {
            var t, n, i = e.offering, a = e.investment, l = e.isMicro, s = void 0 !== l && l, c = e.className, u = null !== (n = o.gR.fromValue(Number(null !== (t = null === a || void 0 === a ? void 0 : a.status) && void 0 !== t ? t : ""))) && void 0 !== n ? n : o.gR.NONE, d = u.Alert, f = a ? "".concat((0,
            _e.CN)(a.amount, 0)) : void 0;
            return d ? (0,
            r.jsx)("div", {
                className: c,
                children: (0,
                r.jsx)(d, {
                    offering: i,
                    investmentState: u,
                    amount: f,
                    isMicro: s
                })
            }) : null
        }
          , Ue = function(e) {
            var t = e.className
              , n = e.tags
              , i = e.tagClassName
              , a = e.currentIncome
              , o = (0,
            f.useMemo)((function() {
                return a && !n.includes("Current Income") && n.push("Current Income"),
                n
            }
            ), [n, a]);
            return (null === o || void 0 === o ? void 0 : o.length) ? (0,
            r.jsx)("div", {
                className: (0,
                m.Z)("flex flex-wrap gap-2", t),
                children: o.map((function(e) {
                    var t = function(e) {
                        switch (e.toLowerCase()) {
                        case "private equity":
                            return "red";
                        case "real estate":
                            return "gray";
                        case "venture capital":
                            return "white";
                        case "private credit":
                            return "darkGray";
                        case "current income":
                        case "tax efficiencies":
                            return "darkOrange"
                        }
                    }(e);
                    return (0,
                    r.jsx)(I.Vp, {
                        className: i,
                        color: t,
                        children: e
                    }, e)
                }
                ))
            }) : null
        }
          , Ye = n(41664)
          , Xe = n(2804)
          , Qe = n(79111)
          , Fe = n(20445)
          , Be = n(4738);
        function Je(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function He(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, a = [], o = !0, l = !1;
                    try {
                        for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (s) {
                        l = !0,
                        i = s
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || qe(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Ke(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Je(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || qe(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function qe(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return Je(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Je(e, t) : void 0
            }
        }
        var $e = function(e) {
            var t, n, i, l, s, u = e.offering, d = e.className, p = (0,
            a.ZS)(), g = p.user, y = p.internationalUser, b = p.restrictedUser, x = p.activeProfile, h = (0,
            f.useState)(!1), N = h[0], M = h[1], w = (0,
            f.useState)(!1), T = w[0], E = w[1], O = (0,
            f.useMemo)((function() {
                return (0,
                o.Ld)(u)
            }
            ), [u]), S = {
                userId: g.user_id,
                offeringId: u._id,
                profileId: null !== (i = null === x || void 0 === x ? void 0 : x.id) && void 0 !== i ? i : ""
            }, D = He((0,
            Xe.RL)((0,
            Be.Kq)(S)), 2), A = D[0], C = D[1], P = (0,
            f.useMemo)((function() {
                if ("hasValue" === A.state)
                    return A.contents
            }
            ), [A]), _ = null !== (s = o.gR.fromValue(Number(null !== (l = null === P || void 0 === P ? void 0 : P.status) && void 0 !== l ? l : ""))) && void 0 !== s ? s : o.gR.NONE, Z = c(u, _), R = Z.completeDocuments, V = Z.indicateInterest, W = Z.requestAllocation, z = Z.viewDetails, G = Z.viewVideo, U = (0,
            f.useMemo)((function() {
                var e, t = Ke(null !== (e = u.statistics) && void 0 !== e ? e : []);
                return "current" === O && t.push({
                    _key: "minimumInvestment",
                    stat: "$".concat((0,
                    _e.CN)(u.minimumInvestment, 0)),
                    label: "Minimum Investment"
                }),
                t
            }
            ), [u, O]), Y = (0,
            r.jsxs)("section", {
                className: (0,
                m.Z)("@container", {
                    "group hover:shadow-tile cursor-pointer": z
                }, d),
                "data-cy": "offering-card-root-".concat(u._id),
                children: ["past" !== O && (0,
                r.jsx)(Ge, {
                    offering: u,
                    investment: P,
                    isMicro: !0,
                    className: "rounded-t-lg border-solid border-new-gray-400 border border-b-0 overflow-hidden"
                }), (0,
                r.jsxs)("div", {
                    className: "flex flex-col @5xl:flex-row gap-8 border-solid border-new-gray-400 border border-y-0 first:border-t last:border-b first:rounded-t-lg last:rounded-b-lg p-4 @5xl:p-6 bg-new-off-white-100 font-franklin text-new-charcoal-primary leading-normal",
                    children: [(0,
                    r.jsxs)("header", {
                        className: "flex flex-col @5xl:w-[360px] @5xl:grow-0 @5xl:shrink-0 border-solid border-new-gray-400 border-0 border-b @5xl:border-b-0 @5xl:border-r pb-8 @5xl:pb-0 @5xl:pr-8",
                        children: [(0,
                        r.jsxs)(I.X6, {
                            tag: "h3",
                            level: 3,
                            responsiveContext: "container",
                            className: (0,
                            m.Z)("mb-4", {
                                "group-hover:text-new-gold-100": z
                            }),
                            children: [(0,
                            r.jsx)("span", {
                                className: "mr-4",
                                "data-cy": "offering-title-".concat(u.title.replaceAll(" ", "-").toLowerCase()),
                                children: u.title
                            }), G && (0,
                            r.jsx)("button", {
                                onClick: function(e) {
                                    e.preventDefault(),
                                    y || b ? E(!0) : M(!0)
                                },
                                type: "button",
                                className: "inline-flex items-center align-middle focus:outline-none rounded-full border border-transparent p-1.5 bg-new-gray-450 hover:bg-new-gray-400",
                                "data-cy": "video-icon",
                                children: (0,
                                r.jsx)(Qe.Z, {
                                    className: "h-4 w-4 stroke-2 text-new-charcoal-primary",
                                    "aria-hidden": "true"
                                })
                            })]
                        }), !!(null === (t = u.projectTags) || void 0 === t ? void 0 : t.length) && (0,
                        r.jsx)("div", {
                            className: "flex flex-col gap-1 @xl:block @xl:divide-solid @xl:divide-new-gray-350 @xl:divide-x @xl:divide-y-0 @5xl:hidden mb-4 font-bold text-sm text-new-gray-150 uppercase",
                            children: u.projectTags.map((function(e) {
                                return (0,
                                r.jsx)("span", {
                                    className: "@xl:px-4 @xl:first:pl-0 @xl:last:pr-0",
                                    "data-cy": "offering-project-tags",
                                    children: e
                                }, e)
                            }
                            ))
                        }), (0,
                        r.jsx)(Ue, {
                            tags: u.assetClass,
                            currentIncome: u.currentIncome,
                            className: "mb-4 last:mb-0"
                        }), !!u.timePeriod && (0,
                        r.jsxs)("div", {
                            className: "flex gap-1 @5xl:mt-auto",
                            children: [(0,
                            r.jsx)("div", {
                                className: "grow-0 text-new-gray-400",
                                children: (0,
                                r.jsx)(Fe.Z, {
                                    width: 22
                                })
                            }), (0,
                            r.jsxs)("div", {
                                className: "grow",
                                children: [(0,
                                r.jsx)("span", {
                                    className: "block font-medium",
                                    "data-cy": "offering-time-period-value",
                                    children: u.timePeriod.value
                                }), (0,
                                r.jsx)("span", {
                                    children: u.timePeriod.label
                                })]
                            })]
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "@5xl:grow",
                        children: [(0,
                        r.jsx)(I.nv, {
                            className: "mb-8 text-justify",
                            children: u.summary
                        }), !!(null === U || void 0 === U ? void 0 : U.length) && (0,
                        r.jsx)("div", {
                            className: "mt-auto mb-2.5 last:mb-0",
                            children: U.map((function(e) {
                                return (0,
                                r.jsxs)("div", {
                                    className: "flex gap-2 @sm:gap-4 @xl:gap-6 items-baseline justify-between border-solid border-new-gray-400 border-0 border-b last:border-b-0 py-2.5 first:pt-0 last:pb-0",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        children: [e.label, e.footnoteReference && (0,
                                        r.jsx)("sup", {
                                            className: "text-xxs",
                                            children: e.footnoteReference
                                        })]
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "text-right",
                                        "data-cy": "statistic-stat-".concat(e.label.replaceAll(" ", "-").toLowerCase()),
                                        children: e.stat
                                    })]
                                }, e._key)
                            }
                            ))
                        }), !!u.disclaimer && (0,
                        r.jsx)(I.nv, {
                            className: "text-[10px] text-new-gray-250 italic text-right",
                            children: u.disclaimer
                        })]
                    })]
                }), (z || V || R || W) && (0,
                r.jsxs)("footer", {
                    className: "@5xl:flex @5xl:items-center rounded-b-lg p-4 @5xl:px-6 bg-new-charcoal-primary text-off-white-100",
                    children: [!!(null === (n = u.projectTags) || void 0 === n ? void 0 : n.length) && (0,
                    r.jsx)("div", {
                        className: "hidden @5xl:block divide-solid divide-new-gray-400 divide-x divide-y-0 font-bold text-sm text-new-gray-400 uppercase",
                        "data-cy": "project-tags-div",
                        children: u.projectTags.map((function(e) {
                            return (0,
                            r.jsx)("span", {
                                className: "px-4 first:pl-0 last:pr-0",
                                "data-cy": "project-tags",
                                children: e
                            }, e)
                        }
                        ))
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex flex-col @5xl:flex-row gap-2 @5xl:ml-auto",
                        children: [z && (0,
                        r.jsx)(Se, {
                            offering: u,
                            investmentState: _,
                            type: "primary",
                            dataCy: "view-details-button"
                        }), V && (0,
                        r.jsx)(k, {
                            offering: u,
                            investmentState: _,
                            setInvestmentState: C,
                            type: "primary",
                            dataCy: "indicate-interest-button"
                        }), R && (0,
                        r.jsx)(j, {
                            offering: u,
                            investmentState: _,
                            type: "highlighted",
                            dataCy: "complete-documents-button"
                        }), W && (0,
                        r.jsx)(Q, {
                            offering: u,
                            investmentState: _,
                            type: "highlighted",
                            dataCy: "request-allocation-button"
                        })]
                    })]
                })]
            });
            return (0,
            r.jsxs)(a.JN, {
                context: "default",
                children: [z ? (0,
                r.jsx)(Ye.default, {
                    href: "/offerings/".concat(u.slug.current),
                    passHref: !0,
                    children: Y
                }) : Y, N && (0,
                r.jsx)(I.Y7, {
                    playbackId: u.playbackId,
                    forceModal: !0,
                    onModalClose: function() {
                        M(!1)
                    },
                    tracking: {
                        onPlay: {
                            event: L.w.VIEW_DEAL_SUMMARY_VIDEO,
                            data: {
                                dealName: u.title,
                                subjectId: u._id,
                                offering: u
                            }
                        }
                    }
                }), (0,
                r.jsx)(v.Z, {
                    open: T,
                    onClose: function() {
                        E(!1)
                    }
                })]
            })
        }
          , et = (n(87072),
        n(91650));
        n(98907),
        n(9082),
        n(25491),
        n(75012),
        n(88746);
        var tt = n(25675)
          , nt = n(44080)
          , rt = n(13245)
          , it = n(70256)
          , at = n(17152)
          , ot = n(4555)
          , lt = n(71542)
          , st = n(4069);
        function ct(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var ut = (0,
        Xe.CG)({
            key: "requestAllocationSelector",
            get: function(e) {
                return function(t) {
                    return (0,
                    t.get)(dt(e))
                }
            },
            set: function(e) {
                return function(t, n) {
                    var r = t.set
                      , i = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {}
                              , r = Object.keys(n);
                            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }
                            )))),
                            r.forEach((function(t) {
                                ct(e, t, n[t])
                            }
                            ))
                        }
                        return e
                    }({}, (0,
                    t.get)(dt(e)), n);
                    r(dt(e), i)
                }
            }
        })
          , dt = (0,
        Xe.xu)({
            key: "requestAllocationState",
            default: (0,
            Xe.CG)({
                key: "requestAllocationState/default",
                get: function(e) {
                    return function() {
                        return {
                            offeringId: e,
                            amount: void 0,
                            acknowledgements: []
                        }
                    }
                }
            })
        });
        function ft(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function mt(e, t, n, r, i, a, o) {
            try {
                var l = e[a](o)
                  , s = l.value
            } catch (c) {
                return void n(c)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function vt(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, a = [], o = !0, l = !1;
                    try {
                        for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (s) {
                        l = !0,
                        i = s
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return ft(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return ft(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var pt = function(e) {
            var t = e.offering
              , n = e.useSteps
              , i = vt((0,
            Xe.FV)(ut(t._id)), 2)
              , a = i[0]
              , o = i[1]
              , l = t ? t.minimumInvestment : 0
              , s = t ? t.investmentIncrement : 0
              , c = (0,
            _e.CN)(l)
              , u = function(e, t) {
                return ne.Ry().shape({
                    amount: ne.Rx().typeError("Amount must be a number").positive("Amount must be greater than zero").required("Amount is required").min(e, "The minimum investment amount for this offering is " + _e.oB.format(e)).test("increment", "Amounts must be in increments of " + _e.oB.format(t), (function(e) {
                        return !!e && e % t === 0
                    }
                    ))
                }).required()
            }(l, s)
              , d = (0,
            q.cI)({
                resolver: (0,
                ae.X)(u),
                shouldFocusError: !0,
                defaultValues: {
                    amount: null === a || void 0 === a ? void 0 : a.amount
                }
            })
              , v = d.handleSubmit
              , p = d.setValue
              , I = d.getValues
              , g = d.formState.errors
              , y = function() {
                var e, t = (e = w().mark((function e() {
                    return w().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                o({
                                    amount: I("amount")
                                }),
                                n.nextStep();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )),
                function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);
                        function o(e) {
                            mt(a, r, i, o, l, "next", e)
                        }
                        function l(e) {
                            mt(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }
                    ))
                }
                );
                return function() {
                    return t.apply(this, arguments)
                }
            }();
            return (0,
            f.useEffect)((function() {
                return function() {
                    o({
                        amount: I("amount")
                    })
                }
            }
            ), []),
            (0,
            r.jsxs)("form", {
                onSubmit: v(y),
                children: [(0,
                r.jsxs)("h1", {
                    className: "font-amiri font-normal text-charcoal-1 tracking-normal text-4xl lg:text-4.5xl lg:leading-12",
                    children: ["How much would you like to invest in ", null === t || void 0 === t ? void 0 : t.name, "?"]
                }), (0,
                r.jsxs)("div", {
                    className: "text-charcoal-100 mb-6 font-light text-base",
                    children: ["Please enter an amount in increments of ", _e.oB.format(s), "."]
                }), (0,
                r.jsxs)("div", {
                    className: "font-franklin text-lg font-light text-body",
                    children: [(0,
                    r.jsx)(st.h3, {
                        type: "tel",
                        thousandSeparator: !0,
                        prefix: "$ ",
                        allowNegative: !1,
                        defaultValue: null === a || void 0 === a ? void 0 : a.amount,
                        onValueChange: function(e) {
                            p("amount", e.floatValue)
                        },
                        customInput: function(e) {
                            return (0,
                            r.jsx)(oe.I, {
                                additionalInputClassNames: (0,
                                m.Z)("flex items-center pl-4 pr-4 pt-0 pb-0 w-full md:w-3/5 leading-[1.69]", "text-black font-amiri font-normal !text-4.5xl tracking-wide proportional-nums", "border-2 border-solid border-silver-200 rounded-[3px]"),
                                labelClassNames: "!font-franklin tracking-wide !mb-0.5 text-md",
                                errorClassNames: (0,
                                m.Z)("!text-red-100 font-franklin italic font-light text-md block mt-1 tracking-wider", !g.amount && "hidden"),
                                name: "amount",
                                labelText: "Amount",
                                additionalProps: e,
                                errors: g,
                                dataCy: "allocation-amount-input",
                                autoFocus: !0
                            })
                        }
                    }), (0,
                    r.jsxs)("div", {
                        className: (0,
                        m.Z)("font-franklin italic font-light text-md text-silver-100 block leading-8 tracking-wider", g.amount && "hidden"),
                        "data-cy": "investment-validation",
                        "data-increment": s,
                        "data-minimum": l,
                        children: ["$", c, " Minimum Investment"]
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "flex my-12 md:my-16",
                    children: (0,
                    r.jsx)("button", {
                        type: "submit",
                        className: "btn btn-md btn-primary w-full md:w-auto",
                        "data-cy": "allocation-btn-step-1",
                        children: "Next"
                    })
                })]
            })
        }
          , It = n(96486)
          , gt = n(94279)
          , yt = n(56547);
        function bt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function xt(e, t, n, r, i, a, o) {
            try {
                var l = e[a](o)
                  , s = l.value
            } catch (c) {
                return void n(c)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function ht(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, a = [], o = !0, l = !1;
                    try {
                        for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (s) {
                        l = !0,
                        i = s
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return bt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return bt(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Nt = {
            marks: {
                link: function(e) {
                    var t = e.value
                      , n = e.children
                      , i = t.blank
                      , a = t.href;
                    return i ? (0,
                    r.jsx)("a", {
                        href: a,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: "text-primary-1 link-hover-effect",
                        children: n
                    }) : (0,
                    r.jsx)("a", {
                        href: a,
                        children: n
                    })
                }
            }
        }
          , jt = function(e) {
            var t, n = e.offering, i = e.defaultTerms, a = e.useSteps, o = ht((0,
            Xe.FV)(ut(n._id)), 2), l = o[0], s = o[1], c = null === i || void 0 === i ? void 0 : i.concat(null !== (t = null === n || void 0 === n ? void 0 : n.allocationTerms) && void 0 !== t ? t : []), u = function(e) {
                return ne.Ry().shape({
                    acknowledgements: ne.IX().min(e)
                }).required()
            }((n && (0,
            It.isArray)(n.allocationTerms) ? n.allocationTerms.length : 0) + (i && (0,
            It.isArray)(i) ? i.length : 0)), d = (0,
            q.cI)({
                resolver: (0,
                ae.X)(u),
                shouldFocusError: !0,
                defaultValues: {
                    acknowledgements: null === l || void 0 === l ? void 0 : l.acknowledgements
                }
            }), m = d.handleSubmit, v = d.register, p = d.control, I = d.formState.errors, g = d.watch, y = (0,
            q.qo)({
                name: "acknowledgements",
                control: p
            });
            (0,
            f.useEffect)((function() {
                s({
                    acknowledgements: y
                })
            }
            ), [y]);
            var b = function() {
                var e, t = (e = w().mark((function e() {
                    return w().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                a.nextStep();
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )),
                function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);
                        function o(e) {
                            xt(a, r, i, o, l, "next", e)
                        }
                        function l(e) {
                            xt(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }
                    ))
                }
                );
                return function() {
                    return t.apply(this, arguments)
                }
            }()
              , x = g("acknowledgements")
              , h = (0,
            f.useRef)(null)
              , N = (0,
            f.useRef)(null);
            return (0,
            f.useEffect)((function() {
                x.length > 0 && function() {
                    if (N) {
                        for (var e, t = null === (e = N.current) || void 0 === e ? void 0 : e.querySelectorAll('input[type="checkbox"]'), n = -1, r = 0; r < t.length; r++)
                            if (!t[r].checked) {
                                n = r;
                                break
                            }
                        if (n >= 0)
                            t[n].scrollIntoView({
                                behavior: "smooth",
                                block: "nearest"
                            });
                        else if (t.length > 0) {
                            var i;
                            h && (null === (i = h.current) || void 0 === i || i.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            }))
                        }
                    }
                }()
            }
            ), [x]),
            (0,
            r.jsxs)("form", {
                onSubmit: m(b),
                children: [(0,
                r.jsx)("h1", {
                    className: "font-amiri font-normal text-charcoal-1 tracking-normal text-4xl lg:text-4.5xl mb-2 lg:mb-0 lg:leading-12",
                    children: "Acknowledgements"
                }), (0,
                r.jsx)("p", {
                    className: "mt-2 mb-5 text-charcoal-1 text-md font-light font-franklin leading-6",
                    children: "Please acknowledge and agree to the following statements to continue."
                }), (0,
                r.jsx)("div", {
                    className: "allocation-terms space-y-2",
                    ref: N,
                    children: c && c.map((function(e, t) {
                        var n = e.term.map((function(e) {
                            return (0,
                            r.jsx)(gt.YI, {
                                components: Nt,
                                value: e
                            }, e._key)
                        }
                        ));
                        return (0,
                        r.jsx)(yt.Z, {
                            register: v,
                            labelText: n,
                            name: "acknowledgements",
                            id: "checkbox_".concat(t, "_id"),
                            value: t.toString(),
                            inputStyles: "scroll-my-8 cursor-pointer"
                        }, t)
                    }
                    ))
                }), (0,
                r.jsx)("p", {
                    className: "my-2 md:my-4 font-franklin italic font-light text-md text-red-100 block leading-6 md:leading-8 tracking-wider ".concat(I.acknowledgements ? "visible" : "invisible"),
                    children: "You must accept all acknowledgements to request an allocation"
                }), (0,
                r.jsx)("div", {
                    className: "flex my-4 md:my-10",
                    children: (0,
                    r.jsx)("button", {
                        type: "submit",
                        className: "btn btn-md btn-primary w-full md:w-auto",
                        "data-cy": "allocation-btn-step-2",
                        ref: h,
                        children: "Next"
                    })
                })]
            })
        };
        function Mt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function wt(e, t, n, r, i, a, o) {
            try {
                var l = e[a](o)
                  , s = l.value
            } catch (c) {
                return void n(c)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function Tt(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var a = e.apply(t, n);
                    function o(e) {
                        wt(a, r, i, o, l, "next", e)
                    }
                    function l(e) {
                        wt(a, r, i, o, l, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function Et(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, a = [], o = !0, l = !1;
                    try {
                        for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (s) {
                        l = !0,
                        i = s
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return Mt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Mt(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Ot = function() {
            var e = Tt(w().mark((function e(t, n, r, i, a) {
                var o, l;
                return w().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return o = Boolean(window.location.hostname.indexOf("app.10east.co") > -1),
                            l = o ? "contact@10east.co" : "engineering@10east.co",
                            e.t0 = $.b,
                            e.next = 5,
                            ee.g.currentSession();
                        case 5:
                            return e.t1 = e.sent.getAccessToken().getJwtToken(),
                            e.t2 = {
                                Authorization: e.t1
                            },
                            e.t3 = {
                                owner_id: "",
                                email_type: ue.p$[ue.p$.ADMIN_NEW_ALLOCATION_REQUEST_EMAIL],
                                target: ue.He.ADMIN,
                                to_email: l,
                                metadata: {
                                    customProperties: {
                                        member_fullname: t,
                                        offering_title: n,
                                        investment_amount: r,
                                        profile_name: i,
                                        review_url: a
                                    },
                                    contactProperties: {}
                                }
                            },
                            e.t4 = {
                                headers: e.t2,
                                body: e.t3
                            },
                            e.next = 11,
                            e.t0.post.call(e.t0, "usersnspublisher", "/notifications/create", e.t4);
                        case 11:
                            return e.abrupt("return", e.sent);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r, i, a) {
                return e.apply(this, arguments)
            }
        }()
          , St = function(e) {
            var t, n, i = e.user, a = e.profile, l = e.offering, s = e.useSteps, c = le.Y.trackBehavioralEvent, f = le.Y.CustomTrackingEvents, m = (0,
            p.Z)().trackEvent, v = Et((0,
            Xe.FV)(ut(l._id)), 2), I = v[0], g = v[1], y = i.user_id, b = {
                userId: y,
                profileId: a.id,
                offeringId: null === l || void 0 === l ? void 0 : l._id
            }, x = Et((0,
            Xe.FV)((0,
            Be.Kq)(b)), 2), h = x[0], N = x[1], j = null !== (t = null === l || void 0 === l ? void 0 : l._id) && void 0 !== t ? t : "", M = _e.oB.format(null !== (n = null === I || void 0 === I ? void 0 : I.amount) && void 0 !== n ? n : 0), T = function() {
                var e = Tt(w().mark((function e() {
                    var t, n, r, v, p;
                    return w().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if ((null === h || void 0 === h ? void 0 : h.status) !== o.gR.INDICATE_INTEREST.value.toString() || !h.id) {
                                    e.next = 3;
                                    break
                                }
                                return e.next = 3,
                                (0,
                                et.JX)(h.id);
                            case 3:
                                t = {
                                    owner: y,
                                    offeringId: j,
                                    status: o.gR.REQUESTED.value.toString(),
                                    waitlist: !1,
                                    amount: String(null === I || void 0 === I ? void 0 : I.amount),
                                    profileInvestmentId: a.id,
                                    fundId: (null === l || void 0 === l ? void 0 : l.fundId) || "",
                                    createdByAdmin: !1
                                },
                                N(t),
                                c(null === i || void 0 === i ? void 0 : i.email, f.ALLOCATION_REQUESTED, {
                                    offering: null !== (n = null === l || void 0 === l ? void 0 : l.title) && void 0 !== n ? n : "Unknown Offering",
                                    profile: null !== (r = null === a || void 0 === a ? void 0 : a.name) && void 0 !== r ? r : "Unknown Profile",
                                    amount: M
                                }),
                                Ot(i.given_name + " " + i.family_name, null !== (v = null === l || void 0 === l ? void 0 : l.title) && void 0 !== v ? v : "the offering", M, null !== (p = null === a || void 0 === a ? void 0 : a.name) && void 0 !== p ? p : "the profile", "https://app.10east.co/admin/investments").catch((function(e) {
                                    return (0,
                                    S.S3)(e)
                                }
                                ));
                                try {
                                    m(L.w.REQUESTED_ALLOCATION, {
                                        offering: l,
                                        profile: a,
                                        dealName: l.title,
                                        subjectId: l._id,
                                        amountRequested: null === I || void 0 === I ? void 0 : I.amount
                                    })
                                } catch (b) {
                                    console.error("Error tracking indicate interest event")
                                }
                                d.$.ecommerceEvent(u.Z.ADD_TO_CART, l, a, t),
                                g({
                                    offeringId: l._id,
                                    amount: void 0,
                                    acknowledgements: []
                                }),
                                s.nextStep();
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            r.jsxs)("div", {
                className: "text-left",
                children: [(0,
                r.jsx)("h1", {
                    className: "font-amiri font-normal text-charcoal-1 tracking-normal text-4xl lg:text-4.5xl mb-2 lg:mb-2 lg:leading-12",
                    children: "Allocation Request Summary"
                }), (0,
                r.jsx)("p", {
                    className: "mb-10 text-charcoal-1 text-md font-light font-franklin leading-6",
                    children: "Please review the information below. \xa0You may return to the previous screens to make changes as necessary."
                }), (0,
                r.jsxs)("section", {
                    className: "space-y-4",
                    children: [(0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsx)("h2", {
                            className: "font-light !mb-0.5 text-md",
                            children: "Selected Investment Profile"
                        }), (0,
                        r.jsx)("h2", {
                            className: "font-bold text-md",
                            children: null === a || void 0 === a ? void 0 : a.name
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsx)("h2", {
                            className: "font-light !mb-0.5 text-md",
                            children: "Selected Offering"
                        }), (0,
                        r.jsx)("h2", {
                            className: "font-bold text-md",
                            children: null === l || void 0 === l ? void 0 : l.name
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsx)("h2", {
                            className: "font-light !mb-0.5 text-md",
                            children: "Amount Requested"
                        }), (0,
                        r.jsx)("h2", {
                            className: "font-bold text-md",
                            children: (0,
                            r.jsx)(st.h3, {
                                displayType: "text",
                                thousandSeparator: !0,
                                prefix: "$ ",
                                value: null === I || void 0 === I ? void 0 : I.amount
                            })
                        })]
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "flex my-12 md:my-16",
                    children: (0,
                    r.jsx)("button", {
                        type: "button",
                        className: "btn btn-md btn-primary w-full md:w-auto",
                        "data-cy": "allocation-btn-step-3",
                        onClick: T,
                        children: "Submit"
                    })
                })]
            })
        }
          , Dt = n(78438);
        function At(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Ct(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, a = [], o = !0, l = !1;
                    try {
                        for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (s) {
                        l = !0,
                        i = s
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return At(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return At(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var kt = function(e) {
            var t = e.user
              , n = e.profile
              , i = e.offering
              , a = e.useSteps
              , o = e.redirectOnCompletion
              , l = void 0 !== o && o
              , s = {
                userId: t.user_id,
                profileId: n.id,
                offeringId: null === i || void 0 === i ? void 0 : i._id
            }
              , c = Ct((0,
            Xe.FV)((0,
            Be.Kq)(s)), 1)[0]
              , u = (0,
            we.useRouter)();
            return (0,
            r.jsxs)("div", {
                "data-cy": "allocation-success-screen",
                "data-investment-id": null === c || void 0 === c ? void 0 : c.id,
                children: [(0,
                r.jsx)("div", {
                    className: "flex justify-center mt-2 mb-8 text-3xl font-amiri font-thin text-green-100",
                    children: (0,
                    r.jsx)(Dt.Z, {
                        className: "w-10 h-10"
                    })
                }), (0,
                r.jsxs)("h1", {
                    className: "font-amiri font-normal text-charcoal-1 tracking-normal text-4xl lg:text-4.5xl mb-2 lg:mb-0 lg:leading-12",
                    children: ["We received your allocation request for ", null === i || void 0 === i ? void 0 : i.name, "."]
                }), (0,
                r.jsx)("p", {
                    className: "mt-2 leading-6 font-light text-charcoal-100 text-md",
                    children: "A member of our team will review the request and will revert back shortly (typically within 3 business days)."
                }), (0,
                r.jsx)("div", {
                    className: "flex mt-20 lg:mt-40 my-16",
                    children: (0,
                    r.jsx)("button", {
                        type: "button",
                        className: "btn btn-md btn-primary w-full md:w-auto",
                        "data-cy": "allocation-btn-step-4",
                        onClick: function() {
                            l ? u.push("/offerings") : a.nextStep()
                        },
                        children: "Back to Offerings"
                    })
                })]
            })
        }
          , Pt = n(80356)
          , Lt = n.n(Pt)
          , _t = n(16510)
          , Zt = n.n(_t)
          , Rt = n(21220)
          , Vt = n.n(Rt)
          , Wt = n(41734)
          , zt = n.n(Wt)
          , Gt = n(55479);
        function Ut(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Yt(e, t, n, r, i, a, o) {
            try {
                var l = e[a](o)
                  , s = l.value
            } catch (c) {
                return void n(c)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function Xt(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Ut(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return Ut(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Ut(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Qt = function(e) {
            var t = e.open
              , n = void 0 === t || t
              , i = e.offering
              , l = e.redirectOnCompletion
              , s = void 0 !== l && l
              , c = e.onClose
              , u = (0,
            f.useRef)(null)
              , d = (0,
            f.useState)([])
              , v = d[0]
              , p = d[1]
              , g = (0,
            f.useState)(!1)
              , y = g[0]
              , b = g[1]
              , x = (0,
            a.ZS)()
              , h = x.user
              , N = x.activeProfile
              , j = x.profiles
              , M = x.selectProfile;
            (0,
            f.useEffect)((function() {
                if (n) {
                    var e = function(e) {
                        var t;
                        e.target && (null === (t = u.current) || void 0 === t ? void 0 : t.contains(e.target)) || b(!1)
                    };
                    return document.addEventListener("click", e, {
                        capture: !0
                    }),
                    function() {
                        document.removeEventListener("click", e, {
                            capture: !0
                        })
                    }
                }
            }
            ), [n]),
            (0,
            f.useEffect)((function() {
                var e = function() {
                    var e, t = (e = w().mark((function e() {
                        var t;
                        return w().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    et.eJ)(h.user_id);
                                case 2:
                                    t = e.sent,
                                    p(t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )),
                    function() {
                        var t = this
                          , n = arguments;
                        return new Promise((function(r, i) {
                            var a = e.apply(t, n);
                            function o(e) {
                                Yt(a, r, i, o, l, "next", e)
                            }
                            function l(e) {
                                Yt(a, r, i, o, l, "throw", e)
                            }
                            o(void 0)
                        }
                        ))
                    }
                    );
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                e()
            }
            ), [h]);
            var T = (0,
            f.useMemo)((function() {
                var e = []
                  , t = [];
                return null === j || void 0 === j || j.forEach((function(n) {
                    var a, l, s, c, u, d = v.find((function(e) {
                        return e.offeringId === i._id && e.profileInvestmentId === n.id
                    }
                    )), f = null !== (l = o.gR.fromValue(Number(null !== (a = null === d || void 0 === d ? void 0 : d.status) && void 0 !== a ? a : ""))) && void 0 !== l ? l : o.gR.NONE, m = !i.restrictByAccreditationLevel || (null !== (s = n.accreditationLevel) && void 0 !== s ? s : 0) >= i.accreditationLevel, p = null !== (c = V.v.fromValue(i.accreditationLevel)) && void 0 !== c ? c : V.v.QUALIFIED_PURCHASER, g = f.value > o.gR.INDICATE_INTEREST.value, y = m && !g;
                    g ? u = (0,
                    r.jsx)(I.nv, {
                        children: (0,
                        r.jsx)(W.Z, {
                            name: "Offering - Default Already Requested Allocation Notice",
                            defaultText: "This profile has already requested allocation in {{offering}}.",
                            data: {
                                offering: i.name
                            }
                        })
                    }) : m || (u = i.accreditationLevelNotice || (0,
                    r.jsx)(I.nv, {
                        children: (0,
                        r.jsx)(W.Z, {
                            name: "Offering - Default Accreditation Level Notice",
                            defaultText: "The member profile does not qualify for this offering, which is only available to {{accrediationLevel}}s. If you believe you are receiving this message in error, please contact a member of our team.",
                            data: {
                                accrediationLevel: p.label
                            }
                        })
                    }));
                    var b = {
                        profile: n,
                        enabled: y,
                        accredited: m,
                        invested: g,
                        tooltip: u
                    };
                    y ? e.push(b) : t.push(b)
                }
                )),
                Xt(e.sort((function(e, t) {
                    return e.profile.name.localeCompare(t.profile.name)
                }
                ))).concat(Xt(t.sort((function(e, t) {
                    return e.profile.name.localeCompare(t.profile.name)
                }
                ))))
            }
            ), [v, i, j])
              , E = (0,
            lt.q)((function() {
                c()
            }
            ))
              , O = function() {
                var e = (0,
                f.useState)()
                  , t = e[0]
                  , n = e[1];
                return (0,
                f.useEffect)((function() {
                    (0,
                    Gt.bA)().then((function(e) {
                        n(e)
                    }
                    )).catch((function(e) {
                        (0,
                        S.S3)(e)
                    }
                    ))
                }
                ), []),
                t
            }()
              , D = N && N.accreditationLevel && i && (null === N || void 0 === N ? void 0 : N.accreditationLevel) >= (null === i || void 0 === i ? void 0 : i.accreditationLevel)
              , A = (0,
            f.useState)(!1)
              , C = A[0]
              , k = A[1];
            (0,
            f.useEffect)((function() {
                k(!D)
            }
            ), [D]);
            var P = (null === i || void 0 === i ? void 0 : i.accreditationLevel) && i.accreditationLevel === V.v.QUALIFIED_CLIENT.value ? (0,
            r.jsx)("a", {
                href: "https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.205-3#p-275.205-3(d)(1)",
                target: "_blank",
                rel: "noreferrer noopener",
                className: "underline",
                children: "Qualified Clients"
            }) : (0,
            r.jsx)("a", {
                href: "https://www.ecfr.gov/current/title-17/chapter-II/part-270/section-270.2a51-1",
                target: "_blank",
                rel: "noreferrer noopener",
                className: "underline",
                children: "Qualified Purchasers"
            });
            return N ? (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("style", {
                    children: "\n        body {\n            background: transparent;\n        }\n    "
                }), (0,
                r.jsx)(nt.u, {
                    show: n,
                    enter: "transition duration-150 ease-out",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "transition duration-150 ease-out",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    as: f.Fragment,
                    children: (0,
                    r.jsx)(re.V, {
                        onClose: c,
                        className: "fixed inset-0 z-[150] h-full block items-center overflow-y-scroll",
                        children: (0,
                        r.jsx)(re.V.Panel, {
                            className: "flex items-start justify-center bg-off-white-100 min-h-screen",
                            "data-cy": "allocation-modal",
                            "data-offering-id": i._id,
                            children: (0,
                            r.jsxs)("div", {
                                className: "flex flex-col grow max-w-[644px] md:max-w-[1250px] px-8 md:px-12 lg:px-24 pb-4",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "grid grid-cols-3 items-center h-16",
                                    children: [(0,
                                    r.jsx)(at.Z, {
                                        onClick: function() {
                                            E.isFirstStep ? c() : E.prevStep()
                                        },
                                        "data-cy": "allocation-back-btn",
                                        className: E.isLastStep ? "invisible" : "visible"
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex justify-center",
                                        children: [(0,
                                        r.jsx)(tt.default, {
                                            src: Vt(),
                                            layout: "raw",
                                            width: "126",
                                            height: "18",
                                            alt: "10 East",
                                            className: "!hidden md:!block",
                                            "data-cy": "10-east-logo"
                                        }), (0,
                                        r.jsx)(tt.default, {
                                            src: zt(),
                                            layout: "raw",
                                            width: "39",
                                            height: "29",
                                            alt: "10 East",
                                            className: "!block md:!hidden"
                                        })]
                                    }), (0,
                                    r.jsx)("div", {})]
                                }), E.currentStep <= 2 && (0,
                                r.jsx)("div", {
                                    className: "relative min-h-[60px] bg-silver-400 w-screen flex justify-center left-1/2 ml-[-50vw] pb-2 py-3",
                                    children: (0,
                                    r.jsxs)("div", {
                                        className: "max-w-[644px] md:max-w-[1250px] px-8 md:px-12 lg:px-24 flex grow",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "flex",
                                            children: (0,
                                            r.jsxs)("span", {
                                                className: "flex",
                                                children: [(0,
                                                r.jsx)(tt.default, {
                                                    src: Zt(),
                                                    width: "16",
                                                    height: "20",
                                                    alt: "Profile icon",
                                                    layout: "raw",
                                                    "aria-hidden": "true",
                                                    className: "mr-2"
                                                }), (0,
                                                r.jsxs)("div", {
                                                    children: [(0,
                                                    r.jsxs)("div", {
                                                        className: "cursor-pointer",
                                                        onClick: function() {
                                                            (null === j || void 0 === j ? void 0 : j.length) && b((function(e) {
                                                                return !e
                                                            }
                                                            ))
                                                        },
                                                        children: [(0,
                                                        r.jsx)("div", {
                                                            className: "font-light !text-xs",
                                                            children: "Selected Profile"
                                                        }), (0,
                                                        r.jsxs)("div", {
                                                            className: "font-bold text-sm",
                                                            children: [null === N || void 0 === N ? void 0 : N.name, !!j && j.length > 1 && (0,
                                                            r.jsx)(rt.Z, {
                                                                width: 16,
                                                                className: "ml-2 align-middle"
                                                            })]
                                                        })]
                                                    }), y && !!T.length && (0,
                                                    r.jsx)("ul", {
                                                        ref: u,
                                                        className: "absolute top-[60px] z-10 -ml-6 min-w-[240px] max-w-[300px] md:max-w-[380px] px-6 shadow rounded border-new-gray-400 bg-new-off-white-100 list-none",
                                                        children: null === T || void 0 === T ? void 0 : T.map((function(e) {
                                                            return (0,
                                                            r.jsx)("li", {
                                                                onClick: function() {
                                                                    return function(e) {
                                                                        e.enabled && (M(e.profile.id),
                                                                        b(!1))
                                                                    }(e)
                                                                },
                                                                className: "border-solid border-new-gray-400 border-0 border-b last:border-b-0",
                                                                children: (0,
                                                                r.jsxs)("span", {
                                                                    className: (0,
                                                                    m.Z)({
                                                                        "block -mx-6 px-6 py-3  font-semibold ": !0,
                                                                        "hover:bg-silver-400 hover:text-new-gold-100 cursor-pointer": e.enabled,
                                                                        "text-new-gray-350": !e.enabled
                                                                    }),
                                                                    children: [e.profile.name, !e.enabled && e.tooltip && (0,
                                                                    r.jsx)(I.u, {
                                                                        className: "ml-2",
                                                                        children: e.tooltip
                                                                    })]
                                                                })
                                                            }, e.profile.id)
                                                        }
                                                        ))
                                                    })]
                                                })]
                                            })
                                        }), (0,
                                        r.jsx)("div", {
                                            className: "flex pl-10",
                                            children: (0,
                                            r.jsxs)("span", {
                                                className: "flex",
                                                children: [(0,
                                                r.jsx)(tt.default, {
                                                    src: Lt(),
                                                    width: "18",
                                                    height: "20",
                                                    alt: "Offering icon",
                                                    layout: "raw",
                                                    "aria-hidden": "true",
                                                    className: "mr-2"
                                                }), (0,
                                                r.jsxs)("div", {
                                                    children: [(0,
                                                    r.jsx)("div", {
                                                        className: "font-light !text-xs flex",
                                                        children: "Selected Offering"
                                                    }), (0,
                                                    r.jsx)("div", {
                                                        className: "font-bold text-sm",
                                                        children: i.name
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }), E.currentStep <= 3 && (0,
                                r.jsxs)("div", {
                                    className: "flex my-6 text-lg font-medium text-silver-150",
                                    children: ["Step ", E.currentStep, " of 3"]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "relative flex items-center mb-10 py-6 px-7 pr-10 w-full bg-black text-white text-sm text-justify leading-6 ".concat(!C && "hidden"),
                                        children: [(0,
                                        r.jsx)("button", {
                                            className: "absolute top-2 right-2 bg-transparent text-white border-0",
                                            onClick: function() {
                                                k(!1)
                                            },
                                            "data-cy": "unqualified-close",
                                            children: (0,
                                            r.jsx)(it.Z, {
                                                className: "w-6 h-6 hover:opacity-90 active:opacity-70",
                                                "aria-hidden": "true"
                                            })
                                        }), (0,
                                        r.jsxs)("p", {
                                            children: ["The member profile that you are currently using does not qualify for this offering, which is only available to ", P, ". If you believe you are receiving this message in error, please contact a", " ", (0,
                                            r.jsx)("a", {
                                                href: "mailto:contact@10east.co",
                                                className: "underline",
                                                children: "member of our team"
                                            }), "."]
                                        })]
                                    }), (0,
                                    r.jsxs)(ot.Z, {
                                        useSteps: E,
                                        children: [(0,
                                        r.jsx)(pt, {
                                            offering: i,
                                            useSteps: E
                                        }), (0,
                                        r.jsx)(jt, {
                                            offering: i,
                                            defaultTerms: O,
                                            useSteps: E
                                        }), (0,
                                        r.jsx)(St, {
                                            user: h,
                                            profile: N,
                                            offering: i,
                                            useSteps: E
                                        }), (0,
                                        r.jsx)(kt, {
                                            user: h,
                                            profile: N,
                                            offering: i,
                                            redirectOnCompletion: s,
                                            useSteps: E
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                })]
            }) : null
        };
        function Ft(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Bt(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, a = [], o = !0, l = !1;
                    try {
                        for (n = n.call(e); !(o = (r = n.next()).done) && (a.push(r.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (s) {
                        l = !0,
                        i = s
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || Ht(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Jt(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Ft(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || Ht(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Ht(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return Ft(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ft(e, t) : void 0
            }
        }
        var Kt = function(e) {
            var t = e.investmentState
              , n = e.offering
              , i = (0,
            a.ZS)().activeProfile
              , o = c(n, t)
              , l = o.completeDocuments
              , s = o.printPdf
              , u = o.requestAllocation
              , d = o.reviewWithColleague
              , m = o.scheduleCall
              , v = o.viewDataRoom
              , p = o.viewInvestmentReport
              , g = o.viewCIOSummary
              , y = X(n, t, i)
              , b = (0,
            f.useMemo)((function() {
                var e, t = Jt(null !== (e = n.statistics) && void 0 !== e ? e : []);
                return n.timePeriod && t.push({
                    _key: "timePeriod",
                    label: n.timePeriod.label,
                    stat: n.timePeriod.value
                }),
                t
            }
            ), [n])
              , x = (0,
            f.useMemo)((function() {
                var e = {}
                  , i = "text-new-gold-100";
                return p && (e.viewInvestmentReport = (0,
                r.jsx)(Ce, {
                    offering: n,
                    investmentState: t,
                    type: "unstyled",
                    showIcon: !0,
                    iconClassName: i,
                    dataCy: "view-investment-report-button-sticky"
                })),
                v && (e.viewDataRoom = (0,
                r.jsx)(Me, {
                    offering: n,
                    investmentState: t,
                    type: "unstyled",
                    showIcon: !0,
                    iconClassName: i,
                    dataCy: "view-data-room-button-sticky"
                })),
                g && (e.viewCIOSummary = (0,
                r.jsx)(Le, {
                    offering: n,
                    investmentState: t,
                    type: "unstyled",
                    showIcon: !0,
                    iconClassName: i,
                    dataCy: "view-cio-summary-button-sticky"
                })),
                s && (e.printPdf = (0,
                r.jsx)(R, {
                    offering: n,
                    investmentState: t,
                    type: "unstyled",
                    showIcon: !0,
                    iconClassName: i,
                    dataCy: "print-pdf-button-sticky"
                })),
                d && (e.reviewWithColleague = (0,
                r.jsx)(he, {
                    offering: n,
                    investmentState: t,
                    type: "unstyled",
                    showIcon: !0,
                    iconClassName: i,
                    dataCy: "review-with-colleague-button-sticky"
                })),
                m && (e.scheduleCall = (0,
                r.jsx)(I.ZT, {
                    type: "unstyled",
                    iconClassName: i,
                    dataCy: "schedule-call-button-sticky"
                })),
                e
            }
            ), [n, t, s, d, m, v, p, g]);
            return (0,
            r.jsxs)("div", {
                className: "hidden lg:flex flex-col gap-6 sticky top-[92px]",
                children: [u && !y.invested && (0,
                r.jsxs)("div", {
                    className: "flex flex-col gap-4 p-6 bg-[#f0f0f0]",
                    children: [(0,
                    r.jsx)(Q, {
                        offering: n,
                        investmentState: t,
                        type: "unstyled",
                        className: "justify-center hover:outline hover:outline-1 hover:outline-[#384657] rounded w-full px-6 py-4 !bg-[#334559] hover:!bg-gradient-to-r hover:!from-[#1c2631] hover:!to-[#293848] !text-new-off-white-100",
                        dataCy: "request-allocation-button"
                    }), (0,
                    r.jsx)("div", {
                        className: "font-light text-new-gray-100 text-center",
                        "data-cy": "statistic-stat-minimum-investment",
                        children: "$".concat((0,
                        _e.CN)(n.minimumInvestment, 0), " Minimum Commitment")
                    })]
                }), (u || l) && (0,
                r.jsxs)("div", {
                    className: "flex flex-col gap-10 p-6 bg-[#f0f0f0]",
                    children: [!!(null === b || void 0 === b ? void 0 : b.length) && (0,
                    r.jsx)("ul", {
                        className: "flex flex-col gap-8 list-none",
                        children: b.map((function(e) {
                            return (0,
                            r.jsxs)("li", {
                                children: [(0,
                                r.jsx)("div", {
                                    className: "text-3xl",
                                    "data-cy": "statistic-stat-".concat(e.label.replaceAll(" ", "-").toLowerCase()),
                                    children: e.stat
                                }), (0,
                                r.jsxs)("div", {
                                    className: "text-new-gray-100",
                                    children: [e.label, e.footnoteReference && (0,
                                    r.jsx)("sup", {
                                        className: "text-xxs",
                                        children: e.footnoteReference
                                    })]
                                })]
                            }, e._key)
                        }
                        ))
                    }), !!Object.keys(x).length && (0,
                    r.jsx)("ul", {
                        className: "list-none",
                        children: Object.entries(x).map((function(e) {
                            var t = Bt(e, 2)
                              , n = t[0]
                              , i = t[1];
                            return (0,
                            r.jsx)("li", {
                                className: "py-3 first:pt-0 last:pb-0 border-new-gray-350 border-solid border-0 border-b last:border-b-0",
                                children: i
                            }, n)
                        }
                        ))
                    })]
                })]
            })
        }
          , qt = n(10766)
          , $t = n.n(qt)
          , en = {
            marks: {
                sup: function(e) {
                    var t = e.children;
                    return (0,
                    r.jsx)("sup", {
                        children: t
                    })
                }
            },
            types: {
                detailTable: function(e) {
                    return (0,
                    r.jsxs)("table", {
                        cellSpacing: "0",
                        children: [(e.value.title || e.value.subtitle) && (0,
                        r.jsxs)("thead", {
                            children: [e.value.title && (0,
                            r.jsx)("tr", {
                                children: (0,
                                r.jsx)("th", {
                                    colSpan: 2,
                                    children: e.value.title
                                })
                            }), e.value.subtitle && (0,
                            r.jsx)("tr", {
                                children: (0,
                                r.jsx)("th", {
                                    colSpan: 2,
                                    children: (0,
                                    r.jsx)("strong", {
                                        children: e.value.subtitle
                                    })
                                })
                            })]
                        }), (0,
                        r.jsx)("tbody", {
                            children: e.value.rows.map((function(e, t) {
                                return (0,
                                r.jsxs)("tr", {
                                    children: [(0,
                                    r.jsx)("th", {
                                        children: e.label
                                    }), (0,
                                    r.jsx)("td", {
                                        children: e.value
                                    })]
                                }, t)
                            }
                            ))
                        })]
                    })
                }
            }
        }
          , tn = function(e) {
            var t, n = e.offering;
            return (null === (t = n.strategySummary) || void 0 === t ? void 0 : t.length) ? (0,
            r.jsx)("div", {
                className: $t().offeringDetail,
                children: (0,
                r.jsx)(gt.YI, {
                    value: n.strategySummary,
                    components: en
                })
            }) : null
        }
          , nn = {
            marks: {
                sup: function(e) {
                    var t = e.children;
                    return (0,
                    r.jsx)("sup", {
                        children: t
                    })
                }
            }
        }
          , rn = function(e) {
            var t = e.investmentState
              , n = e.offering
              , i = c(n, t)
              , a = i.printPdf
              , o = i.viewInvestmentReport
              , l = i.viewCIOSummary
              , s = (0,
            f.useMemo)((function() {
                var e, t = ["Investment Report", "Executive Summary", "CIO Q&A Summary"];
                return null === (e = n.resources) || void 0 === e ? void 0 : e.filter((function(e) {
                    return !t.some((function(t) {
                        var n;
                        return null === (n = e.label) || void 0 === n ? void 0 : n.includes(t)
                    }
                    ))
                }
                ))
            }
            ), [n]);
            return a || o || l || (null === s || void 0 === s ? void 0 : s.length) ? (0,
            r.jsxs)("div", {
                className: $t().offeringDetail,
                children: [(0,
                r.jsx)(gt.YI, {
                    value: n.additionalResourcesTab,
                    components: nn
                }), (0,
                r.jsxs)("ul", {
                    className: "list-none !m-0",
                    children: [o && (0,
                    r.jsx)("li", {
                        children: (0,
                        r.jsx)(Ce, {
                            offering: n,
                            investmentState: t,
                            type: "unstyled",
                            showIcon: !0,
                            dataCy: "view-investment-report-button-tab"
                        })
                    }), l && (0,
                    r.jsx)("li", {
                        children: (0,
                        r.jsx)(Le, {
                            offering: n,
                            investmentState: t,
                            type: "unstyled",
                            showIcon: !0,
                            dataCy: "view-cio-summary-button-tab"
                        })
                    }), a && (0,
                    r.jsx)("li", {
                        children: (0,
                        r.jsx)(R, {
                            offering: n,
                            investmentState: t,
                            type: "unstyled",
                            showIcon: !0,
                            dataCy: "print-pdf-button-tab",
                            children: "Executive Summary"
                        })
                    }), null === s || void 0 === s ? void 0 : s.map((function(e) {
                        return (0,
                        r.jsx)("li", {
                            children: (0,
                            r.jsx)(H, {
                                offering: n,
                                investmentState: t,
                                url: e.fileUrl,
                                type: "unstyled",
                                showIcon: !0,
                                className: "hover:text-new-gold-100",
                                children: e.label
                            })
                        }, e.fileUrl)
                    }
                    ))]
                })]
            }) : null
        }
          , an = function(e) {
            var t = e.offering
              , n = {
                marks: {
                    sup: function(e) {
                        var t = e.children;
                        return (0,
                        r.jsx)("sup", {
                            children: t
                        })
                    }
                }
            };
            return (0,
            r.jsx)("div", {
                className: $t().offeringDetail,
                children: (0,
                r.jsx)(gt.YI, {
                    value: t.dueDiligenceTab,
                    components: n
                })
            })
        }
          , on = {
            marks: {
                sup: function(e) {
                    var t = e.children;
                    return (0,
                    r.jsx)("sup", {
                        children: t
                    })
                }
            },
            types: {
                detailTable: function(e) {
                    return (0,
                    r.jsxs)("table", {
                        cellSpacing: "0",
                        children: [(e.value.title || e.value.subtitle) && (0,
                        r.jsxs)("thead", {
                            children: [e.value.title && (0,
                            r.jsx)("tr", {
                                children: (0,
                                r.jsx)("th", {
                                    colSpan: 2,
                                    children: e.value.title
                                })
                            }), e.value.subtitle && (0,
                            r.jsx)("tr", {
                                children: (0,
                                r.jsx)("th", {
                                    colSpan: 2,
                                    children: (0,
                                    r.jsx)("strong", {
                                        children: e.value.subtitle
                                    })
                                })
                            })]
                        }), (0,
                        r.jsx)("tbody", {
                            children: e.value.rows.map((function(e, t) {
                                return (0,
                                r.jsxs)("tr", {
                                    children: [(0,
                                    r.jsx)("th", {
                                        children: e.label
                                    }), (0,
                                    r.jsx)("td", {
                                        children: e.value
                                    })]
                                }, t)
                            }
                            ))
                        })]
                    })
                }
            }
        }
          , ln = function(e) {
            var t, n = e.offering;
            return (null === (t = n.privateDetails) || void 0 === t ? void 0 : t.length) ? (0,
            r.jsx)("div", {
                className: $t().offeringDetail,
                children: (0,
                r.jsx)(gt.YI, {
                    value: n.privateDetails,
                    components: on
                })
            }) : null
        }
          , sn = {
            marks: {
                sup: function(e) {
                    var t = e.children;
                    return (0,
                    r.jsx)("sup", {
                        children: t
                    })
                }
            },
            types: {
                statistic: function(e) {
                    return (0,
                    r.jsxs)("div", {
                        className: $t().statistic,
                        children: [(0,
                        r.jsxs)("div", {
                            className: $t().statistic__label + " relative",
                            children: [e.value.label, " ", e.value.footnoteReference && (0,
                            r.jsx)("sup", {
                                className: "text-xs -top-0.5 ml-1",
                                children: e.value.footnoteReference
                            })]
                        }), (0,
                        r.jsx)("div", {
                            className: $t().statistic__value,
                            children: e.value.stat
                        }), (0,
                        r.jsx)("div", {
                            className: $t().statistic__description,
                            children: e.value.secondaryLabel
                        })]
                    })
                },
                detailTable: function(e) {
                    return (0,
                    r.jsxs)("table", {
                        cellSpacing: "0",
                        children: [(e.value.title || e.value.subtitle) && (0,
                        r.jsxs)("thead", {
                            children: [e.value.title && (0,
                            r.jsx)("tr", {
                                children: (0,
                                r.jsx)("th", {
                                    colSpan: 2,
                                    children: e.value.title
                                })
                            }), e.value.subtitle && (0,
                            r.jsx)("tr", {
                                children: (0,
                                r.jsx)("td", {
                                    colSpan: 2,
                                    children: (0,
                                    r.jsx)("strong", {
                                        children: e.value.subtitle
                                    })
                                })
                            })]
                        }), (0,
                        r.jsx)("tbody", {
                            children: e.value.rows.map((function(e, t) {
                                return (0,
                                r.jsxs)("tr", {
                                    children: [(0,
                                    r.jsxs)("th", {
                                        children: [e.label, " ", e.footnoteReference && (0,
                                        r.jsx)("sup", {
                                            className: "text-xs -top-0.5 ml-1",
                                            children: e.footnoteReference
                                        })]
                                    }), (0,
                                    r.jsx)("td", {
                                        children: e.value
                                    })]
                                }, t)
                            }
                            ))
                        })]
                    })
                }
            }
        }
          , cn = function(e) {
            var t, n = e.offering;
            return (null === (t = n.terms) || void 0 === t ? void 0 : t.length) ? (0,
            r.jsxs)("div", {
                className: $t().offeringDetail,
                children: [n.terms.slice(0, 1).map((function(e, t) {
                    return (0,
                    r.jsx)(gt.YI, {
                        value: e,
                        components: sn
                    }, t)
                }
                )), (0,
                r.jsx)("div", {
                    className: "flex flex-col md:flex-row gap-10 md:gap-20 justify-center my-10",
                    children: n.terms.slice(1).filter((function(e) {
                        return "statistic" === e._type
                    }
                    )).map((function(e, t) {
                        return (0,
                        r.jsx)(gt.YI, {
                            value: e,
                            components: sn
                        }, t)
                    }
                    ))
                }), n.terms.slice(1).filter((function(e) {
                    return "statistic" !== e._type
                }
                )).map((function(e, t) {
                    return (0,
                    r.jsx)(gt.YI, {
                        value: e,
                        components: sn
                    }, t)
                }
                ))]
            }) : null
        }
          , un = function(e) {
            var t = e.dataCy
              , n = e.elementRef
              , i = e.investmentState
              , a = e.offering
              , o = e.onItemSelected
              , l = e.selectedItemId
              , s = e.showContent
              , c = void 0 === s || s
              , u = (0,
            f.useMemo)((function() {
                return [{
                    id: "overview",
                    name: "Overview",
                    content: (0,
                    r.jsx)(ln, {
                        offering: a
                    }),
                    dataCy: t ? "".concat(t, "-overview") : void 0
                }, {
                    id: "due-diligence",
                    name: "Due Diligence",
                    content: (0,
                    r.jsx)(an, {
                        offering: a
                    }),
                    dataCy: t ? "".concat(t, "-due-dilligence") : void 0
                }, {
                    id: "terms",
                    name: "Key Terms",
                    content: (0,
                    r.jsx)(cn, {
                        offering: a
                    }),
                    dataCy: t ? "".concat(t, "-terms") : void 0
                }, {
                    id: "additional-resources",
                    name: "Additional Resources",
                    content: (0,
                    r.jsx)(rn, {
                        offering: a,
                        investmentState: i
                    }),
                    dataCy: t ? "".concat(t, "-additional-resources") : void 0
                }, {
                    id: "strategy-summary",
                    name: "Strategy Summary",
                    content: (0,
                    r.jsx)(tn, {
                        offering: a
                    }),
                    dataCy: t ? "".concat(t, "-strategy-summary") : void 0
                }].filter((function(e) {
                    var t;
                    return !(null === (t = a.hideSections) || void 0 === t ? void 0 : t.includes(e.id))
                }
                ))
            }
            ), [t, a, i]);
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("div", {
                    ref: n,
                    className: "scroll-mt-[60px] lg:scroll-mt-[60px]"
                }), (0,
                r.jsx)(I.mQ, {
                    items: u,
                    onItemSelected: o,
                    selectedItemId: l,
                    showContent: c,
                    className: "lg:pt-10 bg-new-off-white-100",
                    dataCy: t
                })]
            })
        }
    },
    97517: function(e, t, n) {
        "use strict";
        n.d(t, {
            xE: function() {
                return f
            },
            Ld: function() {
                return v
            },
            gR: function() {
                return g
            }
        });
        var r = n(85893)
          , i = (n(67294),
        n(98523))
          , a = n(19377)
          , o = n(90158)
          , l = n(73689)
          , s = n(3074);
        function c(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    u(e, t, n[t])
                }
                ))
            }
            return e
        }
        var f = function() {
            function e(t, n, r, i, a, o) {
                c(this, e),
                this.key = t,
                this.label = n,
                this.backgroundColor = r,
                this.foregroundColor = i,
                this.canInvest = a,
                this.showState = o
            }
            return e.prototype.toString = function() {
                return this.key
            }
            ,
            e._init = function() {
                0 === e.stateMap.size && (e.stateMap.set(e.DRAFT.key, e.DRAFT),
                e.stateMap.set(e.PREVIEW.key, e.PREVIEW),
                e.stateMap.set(e.RESERVING.key, e.RESERVING),
                e.stateMap.set(e.INVESTING.key, e.INVESTING),
                e.stateMap.set(e.CLOSED.key, e.CLOSED))
            }
            ,
            e.fromString = function(t) {
                return this._init(),
                e.stateMap.get(t)
            }
            ,
            e
        }();
        f.DRAFT = new f("DRAFT","Draft","bg-gray-300","text-grey-80",!1,!1),
        f.PREVIEW = new f("PREVIEW","Preview","bg-gray-300","text-grey-80",!1,!1),
        f.RESERVING = new f("RESERVING","Reserving","bg-dash-success","text-white",!0,!0),
        f.INVESTING = new f("INVESTING","Investing","bg-dash-success","text-white",!0,!0),
        f.CLOSED = new f("CLOSED","Closed","bg-gray-300","text-grey-80",!1,!0),
        f.stateMap = new Map;
        var m, v = function(e) {
            var t = f.fromString(e.status.toUpperCase());
            return t === f.CLOSED ? "past" : t === f.PREVIEW ? "upcoming" : "current"
        }, p = (m = o.Z,
        function(e) {
            var t = d({}, e);
            return e.isMicro && (delete t.title,
            t.message = "".concat(e.amount, " ").concat(e.message)),
            (0,
            r.jsx)(m, d({
                customClassName: e.isMicro ? {
                    message: "!text-xs",
                    icon: "!w-4 !h-4 !mx-1",
                    body: "!ml-1"
                } : void 0,
                padding: e.isMicro ? 1.5 : 6
            }, t))
        }
        ), I = function(e) {
            var t, n, a = "Allocation Pending Document Submission";
            return e.isMicro || (t = "Complete Documents for ".concat(e.offering.title),
            a = "To continue your allocation request, please complete subscription documents.",
            n = (0,
            r.jsx)(s.QH, {
                offering: e.offering,
                investmentState: e.investmentState,
                type: "unstyled",
                className: "justify-center hover:outline hover:outline-1 hover:outline-[#384657] rounded w-full px-6 py-4 !bg-[#334559] hover:!bg-gradient-to-r hover:!from-[#1c2631] hover:!to-[#293848] !text-new-off-white-100"
            })),
            (0,
            r.jsx)(p, d({
                title: t,
                message: a,
                iconOverride: (0,
                r.jsx)(i.Z, {
                    className: "w-6 h-6"
                }),
                type: l.N.WARNING,
                buttons: n
            }, e))
        }, g = function() {
            function e(t, n, r, i, a, o) {
                c(this, e),
                this.key = t,
                this.value = n,
                this.label = r,
                this.showInStats = i,
                this.gaEventName = a,
                this.Alert = o
            }
            return e.prototype.toString = function() {
                return this.key
            }
            ,
            e._init = function() {
                0 === e.stateMap.size && (e.stateMap.set(e.DELETED.value, e.DELETED),
                e.stateMap.set(e.REJECTED.value, e.REJECTED),
                e.stateMap.set(e.NONE.value, e.NONE),
                e.stateMap.set(e.REQUESTED.value, e.REQUESTED),
                e.stateMap.set(e.APPROVED.value, e.APPROVED),
                e.stateMap.set(e.DOCS_INITIATED.value, e.DOCS_INITIATED),
                e.stateMap.set(e.IN_REVIEW.value, e.IN_REVIEW),
                e.stateMap.set(e.INVESTED.value, e.INVESTED),
                e.stateMap.set(e.INDICATE_INTEREST.value, e.INDICATE_INTEREST))
            }
            ,
            e.fromValue = function(t) {
                return this._init(),
                e.stateMap.get(t)
            }
            ,
            e.getMap = function() {
                return this._init(),
                e.stateMap
            }
            ,
            e
        }();
        g.DELETED = new g("DELETED",-100,"Allocation Deleted",!1,a.Z.NONE),
        g.REJECTED = new g("REJECTED",-10,"Allocation Rejected",!1,a.Z.REMOVE_FROM_CART,(function(e) {
            var t = "Allocation Denied";
            return (0,
            r.jsx)(p, d({
                title: "".concat(e.amount, " ").concat(t),
                message: e.isMicro ? t : "The 10 East Team has denied your allocation request.",
                type: l.N.INFO
            }, e))
        }
        )),
        g.NONE = new g("NONE",0,"",!1,a.Z.NONE),
        g.REQUESTED = new g("REQUESTED",10,"Allocation Requested",!0,a.Z.ADD_TO_CART,(function(e) {
            var t = "Allocation Pending Approval";
            return (0,
            r.jsx)(p, d({
                title: "".concat(e.amount, " ").concat(t),
                message: e.isMicro ? t : "The 10 East Team is currently reviewing your allocation request.",
                type: l.N.INFO
            }, e))
        }
        )),
        g.APPROVED = new g("APPROVED",20,"Allocation Approved",!0,a.Z.ALLOCATION_APPROVED,I),
        g.DOCS_INITIATED = new g("DOCS_INITIATED",23,"Documents Initiated",!1,a.Z.ALLOCATION_APPROVED,I),
        g.IN_REVIEW = new g("IN_REVIEW",30,"Submitted by Investor",!0,a.Z.PURCHASE,(function(e) {
            var t = "Allocation Confirmed";
            return (0,
            r.jsx)(p, d({
                title: "".concat(e.amount, " ").concat(t),
                message: e.isMicro ? t : "The 10 East Team is currently reviewing your submitted documents.",
                type: l.N.INFO
            }, e))
        }
        )),
        g.INVESTED = new g("INVESTED",40,"Invested",!0,a.Z.INVESTED,(function(e) {
            var t = "Capital Committed";
            return (0,
            r.jsx)(p, d({
                title: "".concat(e.amount, " ").concat(t),
                message: e.isMicro ? t : "The 10 East Team has successfully processed your allocation request.",
                type: l.N.SUCCESS
            }, e))
        }
        )),
        g.INDICATE_INTEREST = new g("INDICATE_INTEREST",5,"Indicated Interest",!1,a.Z.INVESTED),
        g.stateMap = new Map
    },
    90158: function(e, t, n) {
        "use strict";
        var r = n(85893)
          , i = n(86010);
        t.Z = function(e) {
            var t = e.children
              , n = e.message
              , a = e.title
              , o = e.padding
              , l = e.iconOverride
              , s = e.type
              , c = e.header
              , u = e.buttons
              , d = e.customClassName
              , f = e.dontStackButton
              , m = "p-6";
            "undefined" !== typeof o && (m = 0 !== o ? "p-".concat(o) : void 0);
            var v = s ? s.backgroundColor : "bg-silver-300"
              , p = l || s && s.icon;
            return null === l && (p = null),
            (0,
            r.jsxs)("div", {
                className: (0,
                i.Z)(v, m, "flex items-center font-franklin relative", null === d || void 0 === d ? void 0 : d.container),
                children: [(0,
                r.jsx)("div", {
                    className: "flex-shrink-0",
                    children: p && (0,
                    r.jsx)("div", {
                        className: (0,
                        i.Z)("w-7 h-7 align-middle mx-2 flex items-center", null === d || void 0 === d ? void 0 : d.icon),
                        children: p
                    })
                }), (0,
                r.jsxs)("div", {
                    className: (0,
                    i.Z)("flex-1 flex justify-between ml-3", null === d || void 0 === d ? void 0 : d.body, !f && "flex-col lg:flex-row"),
                    children: [(0,
                    r.jsxs)("div", {
                        children: [c, a && (0,
                        r.jsx)("h3", {
                            className: (0,
                            i.Z)("text-xs md:text-md font-semibold text-charcoal-100", null === d || void 0 === d ? void 0 : d.header),
                            children: a
                        }), n && (0,
                        r.jsx)("p", {
                            className: (0,
                            i.Z)("text-sm text-charcoal-100", null === d || void 0 === d ? void 0 : d.message),
                            children: n
                        }), t]
                    }), u && (0,
                    r.jsx)("div", {
                        className: (0,
                        i.Z)("mt-3 text-sm flex items-center", null === d || void 0 === d ? void 0 : d.buttons, !f && "mt-6 lg:mt-0 ml-0 lg:ml-6"),
                        children: u
                    })]
                })]
            })
        }
    },
    73689: function(e, t, n) {
        "use strict";
        n.d(t, {
            N: function() {
                return o
            }
        });
        var r = n(85893)
          , i = n(82313)
          , a = n(6244);
        var o = function() {
            function e(t, n, r) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.key = t,
                this.icon = n,
                this.backgroundColor = r
            }
            return e.prototype.toString = function() {
                return this.key
            }
            ,
            e.fromString = function(e) {
                return this.typeMap.get(e)
            }
            ,
            e
        }();
        o.INFO = new o("INFO",(0,
        r.jsx)(i.Z, {
            className: "h-6 w-6 text-[#262626]",
            "aria-hidden": "true"
        }),"bg-[#f0f0f0]"),
        o.SUCCESS = new o("SUCCESS",(0,
        r.jsx)(i.Z, {
            className: "h-6 w-6 text-[#262626]",
            "aria-hidden": "true"
        }),"bg-success-100"),
        o.WARNING = new o("WARNING",(0,
        r.jsx)(a.Z, {
            className: "h-6 w-6 text-[#262626]",
            "aria-hidden": "true"
        }),"bg-[#f0f0f0]"),
        o.ERROR_INFO = new o("INFO",(0,
        r.jsx)(i.Z, {
            className: "h-10 w-10 text-off-white-100",
            "aria-hidden": "true"
        }),"bg-red-100"),
        o.DARK = new o("DARK",(0,
        r.jsx)(r.Fragment, {}),"dark-gradient-bg"),
        o.typeMap = new Map(Object.entries(o))
    },
    17152: function(e, t, n) {
        "use strict";
        var r = n(85893)
          , i = (n(67294),
        n(86010))
          , a = n(13454)
          , o = n(45342);
        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    l(e, t, n[t])
                }
                ))
            }
            return e
        }
        function c(e, t) {
            if (null == e)
                return {};
            var n, r, i = function(e, t) {
                if (null == e)
                    return {};
                var n, r, i = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        t.Z = function(e) {
            var t = e.onClick
              , n = e.className
              , l = c(e, ["onClick", "className"]);
            return (0,
            r.jsx)(a.E.span, {
                whileHover: o.b6.hover,
                whileTap: o.b6.tap,
                className: "w-fit",
                children: (0,
                r.jsx)("button", s({
                    type: "button",
                    "aria-label": "Go back",
                    "data-cy": "go-back",
                    onClick: t,
                    className: (0,
                    i.Z)("group flex justify-start items-center w-fit -ml-4 px-4 py-3 box-content cursor-pointer bg-transparent border-0", n)
                }, l, {
                    children: (0,
                    r.jsx)("svg", {
                        className: "fill-black/50 group-hover:fill-primary-100 group-active:fill-black/50 group-active:opacity-50",
                        width: "22",
                        height: "16",
                        viewBox: "0 0 22 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0.792968 7.79289L8.50008 0.0857865L9.91429 1.5L4.6214 6.79289L21.2072 6.79289L21.2072 8.79289L4.6214 8.79289L9.91429 14.0858L8.50008 15.5L0.792968 7.79289Z"
                        })
                    })
                }))
            })
        }
    },
    7183: function(e, t, n) {
        "use strict";
        n.d(t, {
            w: function() {
                return i
            }
        });
        var r = n(32877);
        var i = function() {
            function e(t, n, r, i, a, o, l) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.key = t,
                this.label = n,
                this.activityDescription = r,
                this.sendSlackNotification = i,
                this.buyingSignal = a,
                this.hubspotDealProperty = o,
                this.hubspotDealStage = l
            }
            return e.prototype.toString = function() {
                return this.key
            }
            ,
            e._init = function() {
                0 === e.stateMap.size && (e.stateMap.set(e.VIEW_OFFERING_DETAILS_PAGE.key, e.VIEW_OFFERING_DETAILS_PAGE),
                e.stateMap.set(e.VIEW_DEAL_SUMMARY_VIDEO.key, e.VIEW_DEAL_SUMMARY_VIDEO),
                e.stateMap.set(e.DOWNLOAD_EXEC_SUMMARY.key, e.DOWNLOAD_EXEC_SUMMARY),
                e.stateMap.set(e.DOWNLOAD_INVESTMENT_REPORT.key, e.DOWNLOAD_INVESTMENT_REPORT),
                e.stateMap.set(e.VISIT_DATA_ROOM.key, e.VISIT_DATA_ROOM),
                e.stateMap.set(e.VISIT_DATA_ROOM_ATTEMPT.key, e.VISIT_DATA_ROOM_ATTEMPT),
                e.stateMap.set(e.VIEW_OFFERINGS_PAGE.key, e.VIEW_OFFERINGS_PAGE),
                e.stateMap.set(e.OPEN_REQUEST_ALLOCATION_MODAL.key, e.OPEN_REQUEST_ALLOCATION_MODAL),
                e.stateMap.set(e.OPEN_REQUEST_ALLOCATION_MODAL_ATTEMPT.key, e.OPEN_REQUEST_ALLOCATION_MODAL_ATTEMPT),
                e.stateMap.set(e.DOWNLOAD_RESOURCE.key, e.DOWNLOAD_RESOURCE),
                e.stateMap.set(e.INDICATE_INTEREST.key, e.INDICATE_INTEREST),
                e.stateMap.set(e.INVESTED.key, e.INVESTED),
                e.stateMap.set(e.VIEW_EVENT_VIDEO.key, e.VIEW_EVENT_VIDEO))
            }
            ,
            e.fromString = function(t) {
                return this._init(),
                e.stateMap.get(t)
            }
            ,
            e.getMap = function() {
                return this._init(),
                e.stateMap
            }
            ,
            e.getSignalMap = function() {
                var t = new Map;
                return t.set(e.VIEW_OFFERING_DETAILS_PAGE.key, 0),
                t.set(e.VIEW_DEAL_SUMMARY_VIDEO.key, 0),
                t.set(e.DOWNLOAD_EXEC_SUMMARY.key, 0),
                t.set(e.DOWNLOAD_INVESTMENT_REPORT.key, 0),
                t.set(e.VISIT_DATA_ROOM.key, 0),
                t.set(e.INVESTED.key, 0),
                t
            }
            ,
            e.getClosedSignalMap = function() {
                var t = new Map;
                return t.set(e.VIEW_OFFERING_DETAILS_PAGE.key, -1),
                t.set(e.VIEW_DEAL_SUMMARY_VIDEO.key, -1),
                t.set(e.DOWNLOAD_EXEC_SUMMARY.key, -1),
                t.set(e.DOWNLOAD_INVESTMENT_REPORT.key, -1),
                t.set(e.VISIT_DATA_ROOM.key, -1),
                t.set(e.INVESTED.key, -1),
                t
            }
            ,
            e
        }();
        i.DOWNLOAD_EXEC_SUMMARY = new i("DOWNLOAD_EXEC_SUMMARY","Download exec summary",(function(e) {
            var t = e.dealName;
            return "Downloaded exec summary for ".concat(t)
        }
        ),!0,!0,!0),
        i.DOWNLOAD_EXEC_SUMMARY_ATTEMPT = new i("DOWNLOAD_EXEC_SUMMARY_ATTEMPT","Download exec summary attempt",(function(e) {
            var t = e.dealName;
            return "Attempted to download exec summary for ".concat(t, ". Access was restricted due to international residence or is marked as a restricted user.")
        }
        ),!0,!1,!1),
        i.DOWNLOAD_INVESTMENT_REPORT = new i("DOWNLOAD_INVESTMENT_REPORT","Download investment report",(function(e) {
            var t = e.dealName;
            return "Downloaded investment report for ".concat(t)
        }
        ),!0,!0,!0),
        i.DOWNLOAD_INVESTMENT_REPORT_ATTEMPT = new i("DOWNLOAD_INVESTMENT_REPORT_ATTEMPT","Download investment report attempt",(function(e) {
            var t = e.dealName;
            return "Attempted to download investment report for ".concat(t, ". Access was restricted due to international residence or is marked as a restricted user.")
        }
        ),!0,!1,!1),
        i.DOWNLOAD_CIO_SUMMARY = new i("DOWNLOAD_CIO_SUMMARY","Download CIO Q&A Summary",(function(e) {
            var t = e.dealName;
            return "Downloaded CIO Q&A Summary for ".concat(t)
        }
        ),!0,!0,!0),
        i.DOWNLOAD_CIO_SUMMARY_ATTEMPT = new i("DOWNLOAD_CIO_SUMMARY_ATTEMPT","Download CIO Q&A Summary attempt",(function(e) {
            var t = e.dealName;
            return "Attempted to download CIO Q&A Summary for ".concat(t, ". Access was restricted due to international residence or is marked as a restricted user.")
        }
        ),!0,!1,!1),
        i.DOWNLOAD_RESOURCE = new i("DOWNLOAD_RESOURCE","Download offering resource",(function(e) {
            var t = e.dealName
              , n = e.fileName;
            return "Downloaded ".concat(n, " for ").concat(t)
        }
        ),!0,!1,!0),
        i.DOWNLOAD_RESOURCE_ATTEMPT = new i("DOWNLOAD_RESOURCE_ATTEMPT","Download offering resource attempt",(function(e) {
            var t = e.dealName
              , n = e.fileName;
            return "Attempted to download ".concat(n, " for ").concat(t, ". Access was restricted due to international residence or is marked as a restricted user.")
        }
        ),!0,!1,!1),
        i.VIEW_DEAL_SUMMARY_VIDEO = new i("VIEW_DEAL_SUMMARY_VIDEO","View deal summary video",(function(e) {
            var t = e.dealName;
            return "Viewed deal summary video for ".concat(t)
        }
        ),!0,!0,!0),
        i.VISIT_DATA_ROOM = new i("VISIT_DATA_ROOM","Visit data room",(function(e) {
            var t = e.dealName;
            return "Visited deal data room for ".concat(t)
        }
        ),!0,!0,!0),
        i.VISIT_DATA_ROOM_ATTEMPT = new i("VISIT_DATA_ROOM_ATTEMPT","Visit data room attempt",(function(e) {
            var t = e.dealName;
            return "Attempted to visit deal data room for ".concat(t, ". Access was restricted due to international residence or is marked as a restricted user.")
        }
        ),!0,!1,!1),
        i.VIEW_OFFERING_DETAILS_PAGE = new i("VIEW_OFFERING_DETAILS_PAGE","View offering details page",(function(e) {
            var t = e.dealName;
            return "Viewed offering details page for ".concat(t)
        }
        ),!0,!0,!0),
        i.VIEW_OFFERINGS_PAGE = new i("VIEW_OFFERINGS_PAGE","View offerings page",(function() {
            return "Viewed offerings page"
        }
        ),!1,!1,!1),
        i.OPEN_REQUEST_ALLOCATION_MODAL = new i("OPEN_REQUEST_ALLOCATION_MODAL","Open request allocation modal",(function(e) {
            var t = e.dealName;
            return "Opened Request Allocation Modal for ".concat(t)
        }
        ),!0,!1,!0),
        i.OPEN_REQUEST_ALLOCATION_MODAL_ATTEMPT = new i("OPEN_REQUEST_ALLOCATION_MODAL_ATTEMPT","Open request allocation modal attempt",(function(e) {
            var t = e.dealName;
            return "Attempted to open Request Allocation Modal for ".concat(t, " but was restricted due to accreditation level")
        }
        ),!0,!1,!1),
        i.INDICATE_INTEREST = new i("INDICATE_INTEREST","Indicate interest",(function(e) {
            var t = e.dealName;
            return "Indicated interest for ".concat(t)
        }
        ),!0,!1,!0,r.k.INDICATED_INTEREST),
        i.REQUESTED_ALLOCATION = new i("REQUESTED_ALLOCATION","Requested Allocation",(function(e) {
            var t = e.dealName;
            return "requested allocation in ".concat(t)
        }
        ),!1,!1,!0,r.k.REQUESTED_ALLOCATION),
        i.INVESTED = new i("INVESTED","Invested",(function(e) {
            var t = e.dealName;
            return "Invested in ".concat(t)
        }
        ),!1,!0,!1),
        i.VIEW_EVENT_VIDEO = new i("VIEW_EVENT_VIDEO","View event video",(function(e) {
            var t = e.eventName;
            return "Viewed event video for ".concat(t)
        }
        ),!0,!1,!1),
        i.stateMap = new Map
    },
    91650: function(e, t, n) {
        "use strict";
        n.d(t, {
            $4: function() {
                return I
            },
            Gi: function() {
                return g
            },
            JX: function() {
                return y
            },
            eJ: function() {
                return b
            },
            oo: function() {
                return x
            },
            Ui: function() {
                return N
            }
        });
        var r = n(34051)
          , i = n.n(r)
          , a = n(11114)
          , o = n(23730)
          , l = n(62128)
          , s = n(94574)
          , c = n(97517)
          , u = n(23765)
          , d = n(18490);
        function f(e, t, n, r, i, a, o) {
            try {
                var l = e[a](o)
                  , s = l.value
            } catch (c) {
                return void n(c)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function m(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var a = e.apply(t, n);
                    function o(e) {
                        f(a, r, i, o, l, "next", e)
                    }
                    function l(e) {
                        f(a, r, i, o, l, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    v(e, t, n[t])
                }
                ))
            }
            return e
        }
        var I = function() {
            var e = m(i().mark((function e(t, n) {
                var r, s;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 2,
                            e.next = 5,
                            l.t.userMutation({
                                query: u.$4,
                                input: (0,
                                a.F)(n, t)
                            });
                        case 5:
                            s = e.sent,
                            e.next = 11;
                            break;
                        case 8:
                            e.prev = 8,
                            e.t0 = e.catch(2),
                            (0,
                            o.S3)(e.t0, "Error creating Investment");
                        case 11:
                            return e.abrupt("return", null === s || void 0 === s || null === (r = s.data) || void 0 === r ? void 0 : r.createInvestment);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[2, 8]])
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , g = function() {
            var e = m(i().mark((function e(t, n) {
                var r, s;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 2,
                            e.next = 5,
                            l.t.userMutation({
                                query: u.Gi,
                                input: (0,
                                a.F)(n, t)
                            });
                        case 5:
                            s = e.sent,
                            e.next = 11;
                            break;
                        case 8:
                            e.prev = 8,
                            e.t0 = e.catch(2),
                            (0,
                            o.S3)(e.t0, "Error updating Investment");
                        case 11:
                            return e.abrupt("return", null === s || void 0 === s || null === (r = s.data) || void 0 === r ? void 0 : r.updateInvestment);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[2, 8]])
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , y = function() {
            var e = m(i().mark((function e(t) {
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            l.t.userMutation({
                                query: u.JX,
                                input: {
                                    id: t
                                }
                            });
                        case 3:
                            e.next = 8;
                            break;
                        case 5:
                            e.prev = 5,
                            e.t0 = e.catch(0),
                            (0,
                            o.S3)(e.t0, "Error deleting Investment");
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 5]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , b = function() {
            var e = m(i().mark((function e(t, n) {
                var r, a, s, u;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return u = n || {
                                ne: c.gR.DELETED.value
                            },
                            e.prev = 3,
                            e.next = 6,
                            l.t.graphqlQuery({
                                query: d.v1,
                                variables: {
                                    owner: t,
                                    filter: {
                                        status: u
                                    }
                                }
                            });
                        case 6:
                            s = e.sent,
                            e.next = 12;
                            break;
                        case 9:
                            e.prev = 9,
                            e.t0 = e.catch(3),
                            (0,
                            o.S3)(e.t0, "Error getting investments");
                        case 12:
                            return e.abrupt("return", (null === s || void 0 === s || null === (r = s.data) || void 0 === r || null === (a = r.listInvestmentsByOwnerAndOffering) || void 0 === a ? void 0 : a.items) || []);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 9]])
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , x = function() {
            var e = m(i().mark((function e(t) {
                var n, r, a, s, u, f;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.userId,
                            r = t.profileId,
                            a = t.offeringId,
                            e.prev = 3,
                            e.next = 6,
                            l.t.graphqlQuery({
                                query: d.v1,
                                variables: p({
                                    owner: n
                                }, a ? {
                                    offeringId: {
                                        eq: a
                                    }
                                } : {}, {
                                    filter: {
                                        profileInvestmentId: {
                                            eq: r
                                        },
                                        status: {
                                            ne: c.gR.DELETED.value
                                        }
                                    }
                                })
                            });
                        case 6:
                            f = e.sent,
                            e.next = 12;
                            break;
                        case 9:
                            e.prev = 9,
                            e.t0 = e.catch(3),
                            (0,
                            o.S3)(e.t0, "Error getting investments");
                        case 12:
                            return e.abrupt("return", (null === f || void 0 === f || null === (s = f.data) || void 0 === s || null === (u = s.listInvestmentsByOwnerAndOffering) || void 0 === u ? void 0 : u.items) || []);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 9]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , h = function(e) {
            var t = function() {
                return {
                    operation: function() {
                        return l.t.graphqlQuery({
                            query: d.Nw
                        })
                    },
                    result: "listInvestments"
                }
            }
              , n = function(e, t, n) {
                return {
                    operation: function() {
                        return l.t.graphqlQuery({
                            query: d.v1,
                            variables: p({
                                owner: e
                            }, t ? {
                                offeringId: {
                                    eq: t
                                }
                            } : {}, {
                                filter: {
                                    status: {
                                        eq: n
                                    }
                                }
                            })
                        })
                    },
                    result: "listInvestmentsByOwnerAndOffering"
                }
            }
              , r = function(e, t) {
                return {
                    operation: function() {
                        return l.t.graphqlQuery({
                            query: d.wc,
                            variables: p({
                                offeringId: e
                            }, t ? {
                                status: {
                                    eq: t
                                }
                            } : {
                                status: {
                                    gt: c.gR.DELETED.value
                                }
                            })
                        })
                    },
                    result: "listInvestmentsByOfferingAndStatus"
                }
            }
              , i = function(e) {
                return {
                    operation: function() {
                        return l.t.graphqlQuery({
                            query: d.j_,
                            variables: {
                                status: e
                            }
                        })
                    },
                    result: "listInvestmentsByStatus"
                }
            }
              , a = e.offeringId
              , o = e.owner
              , u = e.status
              , f = t();
            return !(0,
            s.fp)(u) && (0,
            s.fp)(o) && (0,
            s.fp)(a) && (f = i(u)),
            (0,
            s.fp)(o) || (f = n(o, a, u)),
            !(0,
            s.fp)(a) && (0,
            s.fp)(o) && (f = r(a, u)),
            f
        }
          , N = function() {
            var e = m(i().mark((function e(t) {
                var n, r, a, l, s, c, u;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            a = t.offeringId,
                            l = t.owner,
                            s = t.status,
                            c = h({
                                owner: null === l || void 0 === l ? void 0 : l.eq,
                                offeringId: null === a || void 0 === a ? void 0 : a.eq,
                                status: null === s || void 0 === s ? void 0 : s.eq
                            }),
                            e.next = 6,
                            c.operation();
                        case 6:
                            return u = e.sent,
                            e.abrupt("return", (null === u || void 0 === u || null === (n = u.data) || void 0 === n || null === (r = n[c.result]) || void 0 === r ? void 0 : r.items) || []);
                        case 10:
                            return e.prev = 10,
                            e.t0 = e.catch(0),
                            (0,
                            o.S3)(e.t0, "Error getting investments"),
                            e.abrupt("return", []);
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 10]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    },
    4738: function(e, t, n) {
        "use strict";
        n.d(t, {
            Kq: function() {
                return g
            }
        });
        var r = n(34051)
          , i = n.n(r)
          , a = n(2804)
          , o = n(91650)
          , l = n(96486)
          , s = n.n(l)
          , c = n(97517);
        var u = function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            t.id && (this.id = t.id),
            this.owner = t.owner,
            this.offeringId = t.offeringId,
            this.fundId = t.fundId || "",
            this.profileInvestmentId = t.profileInvestmentId || "",
            this.amount = (t.amount || 0).toString(),
            this.status = t.status,
            this.waitlist = t.waitlist || !1,
            this.createdByAdmin = t.createdByAdmin || !1,
            this.referMemberPopup = t.referMemberPopup || !1
        }
          , d = n(23730);
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function m(e, t, n, r, i, a, o) {
            try {
                var l = e[a](o)
                  , s = l.value
            } catch (c) {
                return void n(c)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function v(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var a = e.apply(t, n);
                    function o(e) {
                        m(a, r, i, o, l, "next", e)
                    }
                    function l(e) {
                        m(a, r, i, o, l, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function p(e) {
            return function(e) {
                if (Array.isArray(e))
                    return f(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return f(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var I = (0,
        a.xu)({
            key: "investmentsAtom",
            effects: function(e) {
                return [function() {
                    var t = v(i().mark((function t(n) {
                        var r, a, l, f, m, p;
                        return i().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    r = n.setSelf,
                                    a = n.onSet,
                                    l = n.trigger,
                                    f = e.userId,
                                    m = e.profileId,
                                    p = e.offeringId,
                                    "get" === l && f && m && r((0,
                                    o.oo)({
                                        userId: f,
                                        profileId: m,
                                        offeringId: p
                                    })),
                                    a((function(e, t) {
                                        var n, a = [], l = [], m = [];
                                        e.map((function(e) {
                                            var n;
                                            e.id ? (t && Array.isArray(n) && (n = t ? t.find((function(t) {
                                                return t.id === e.id
                                            }
                                            )) : []),
                                            n && s().isEqual(n, e) || e.status === c.gR.INDICATE_INTEREST.value.toString() || l.push(e)) : a.push(e)
                                        }
                                        )),
                                        a.length > 0 && (n = a.map(function() {
                                            var e = v(i().mark((function e(t) {
                                                return i().wrap((function(e) {
                                                    for (; ; )
                                                        switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2,
                                                            (0,
                                                            o.$4)(f, t).then((function(e) {
                                                                if (!e)
                                                                    throw new Error("Created investment is empty");
                                                                m.push(new u(e))
                                                            }
                                                            )).catch((function(e) {
                                                                (0,
                                                                d.S3)(e, "Error creating Investment (atom)")
                                                            }
                                                            ));
                                                        case 2:
                                                        case "end":
                                                            return e.stop()
                                                        }
                                                }
                                                ), e)
                                            }
                                            )));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }())),
                                        l.length > 0 && (n = l.map(function() {
                                            var e = v(i().mark((function e(t) {
                                                return i().wrap((function(e) {
                                                    for (; ; )
                                                        switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2,
                                                            (0,
                                                            o.Gi)(f, t).then((function(e) {
                                                                if (!e)
                                                                    throw new Error("Updated investment is empty");
                                                                m.push(new u(e))
                                                            }
                                                            )).catch((function(e) {
                                                                (0,
                                                                d.S3)(e, "Error updating Investment")
                                                            }
                                                            ));
                                                        case 2:
                                                        case "end":
                                                            return e.stop()
                                                        }
                                                }
                                                ), e)
                                            }
                                            )));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }())),
                                        n && Promise.all(n).then((function() {
                                            try {
                                                r(m)
                                            } catch (e) {
                                                (0,
                                                d.S3)(e, "Error updating investments state")
                                            }
                                        }
                                        ))
                                    }
                                    ));
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()]
            }
        })
          , g = (0,
        a.CG)({
            key: "offeringInvestment",
            get: function(e) {
                var t = e.userId
                  , n = e.profileId
                  , r = e.offeringId;
                return function(e) {
                    var i = e.get;
                    if (t && n && r)
                        return i(I({
                            userId: t,
                            profileId: n,
                            offeringId: r
                        })).find((function(e) {
                            return e.offeringId === r
                        }
                        ))
                }
            },
            set: function(e) {
                var t = e.userId
                  , n = e.profileId
                  , r = e.offeringId;
                return function(e, i) {
                    var o = e.set
                      , l = e.get;
                    if (i) {
                        var c, u, d = l(I({
                            userId: t,
                            profileId: n,
                            offeringId: r
                        }));
                        if (c = i,
                        !(null != (u = a.nY) && "undefined" !== typeof Symbol && u[Symbol.hasInstance] ? u[Symbol.hasInstance](c) : c instanceof u)) {
                            var f = s().findIndex(d, (function(e) {
                                return e.id === i.id
                            }
                            ));
                            if (f >= 0) {
                                var m = p(d);
                                m[f] = i,
                                o(I({
                                    userId: t,
                                    profileId: n,
                                    offeringId: r
                                }), m)
                            } else {
                                var v = p(d);
                                v.push(i),
                                o(I({
                                    userId: t,
                                    profileId: n,
                                    offeringId: r
                                }), v)
                            }
                        }
                    }
                }
            }
        });
        (0,
        a.CG)({
            key: "offeringInvestmentState",
            get: function(e) {
                var t = e.userId
                  , n = e.profileId
                  , r = e.offeringId;
                return function(e) {
                    var i = e.get;
                    if (!t || !n || !r)
                        return c.gR.NONE;
                    var a, o = i(g({
                        userId: t,
                        profileId: n,
                        offeringId: r
                    }));
                    return o && null !== (a = c.gR.fromValue(Number.parseInt(o.status))) && void 0 !== a ? a : c.gR.NONE
                }
            }
        })
    },
    72740: function(e, t, n) {
        "use strict";
        n.d(t, {
            vm: function() {
                return I
            },
            l8: function() {
                return y
            },
            GW: function() {
                return b
            }
        });
        var r = n(34051)
          , i = n.n(r)
          , a = n(62128)
          , o = n(18490)
          , l = n(10552)
          , s = n(50907)
          , c = n(23765)
          , u = n(11114)
          , d = n(62791)
          , f = n(42886)
          , m = n(13233);
        function v(e, t, n, r, i, a, o) {
            try {
                var l = e[a](o)
                  , s = l.value
            } catch (c) {
                return void n(c)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function p(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var a = e.apply(t, n);
                    function o(e) {
                        v(a, r, i, o, l, "next", e)
                    }
                    function l(e) {
                        v(a, r, i, o, l, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        var I = function() {
            var e = p(i().mark((function e(t) {
                var n, r, l;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 3,
                            a.t.graphqlQuery({
                                query: o.Oz,
                                variables: {
                                    owner: t
                                }
                            });
                        case 3:
                            return l = e.sent,
                            e.abrupt("return", g(null === l || void 0 === l || null === (n = l.data) || void 0 === n || null === (r = n.listInvitesByOwner) || void 0 === r ? void 0 : r.items));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , g = function(e) {
            return null === e || void 0 === e ? void 0 : e.sort((function(e, t) {
                return new Date(t.createdAt).getTime() - new Date(e.createdAt).getTime()
            }
            ))
        }
          , y = function() {
            var e = p(i().mark((function e(t, n) {
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            l.b.graphql({
                                query: c.l8,
                                variables: {
                                    input: (0,
                                    u.F)(t, n)
                                }
                            });
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , b = function() {
            var e = p(i().mark((function e(t, n, r, a) {
                var o, u, v, p, I;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0,
                            n) {
                                e.next = 4;
                                break
                            }
                            return console.error("Invite not found", t, n, r, a),
                            e.abrupt("return");
                        case 4:
                            return e.next = 6,
                            (0,
                            d.VW)(n.owner);
                        case 6:
                            if (o = e.sent) {
                                e.next = 10;
                                break
                            }
                            return console.error("Invite owner not found", o, t, n, r, a),
                            e.abrupt("return");
                        case 10:
                            return r ? (v = t === m.$.FIRST_REMINDER ? f.p$.ADMIN_INVITE_FIRST_FOLLOW_UP_EMAIL_PERSONALIZED : f.p$.ADMIN_INVITE_SECOND_FOLLOW_UP_EMAIL_PERSONALIZED,
                            u = {
                                customProperties: {
                                    personalizedText: (null === a || void 0 === a ? void 0 : a.replace(/(?:\r\n|\r|\n)/g, "<br>")) || "",
                                    referrer_first: o.givenName,
                                    referrer_last: o.familyName
                                },
                                contactProperties: {}
                            }) : (p = "".concat(window.location.origin, "/onboarding/").concat(n.id),
                            v = t === m.$.FIRST_REMINDER ? f.p$.ADMIN_INVITE_FIRST_FOLLOW_UP_EMAIL : f.p$.ADMIN_INVITE_SECOND_FOLLOW_UP_EMAIL,
                            u = {
                                customProperties: {
                                    onboarding_url: p,
                                    referrer_first: o.givenName,
                                    referrer_last: o.familyName
                                },
                                contactProperties: {
                                    firstName: n.firstname,
                                    lastName: n.lastname
                                }
                            }),
                            e.t0 = l.b,
                            e.next = 16,
                            s.g.currentSession();
                        case 16:
                            return e.t1 = e.sent.getAccessToken().getJwtToken(),
                            e.t2 = {
                                Authorization: e.t1
                            },
                            e.t3 = {
                                owner_id: "",
                                email_type: f.p$[v],
                                target: f.He.USER,
                                to_email: n.email,
                                metadata: u
                            },
                            e.t4 = {
                                headers: e.t2,
                                body: e.t3
                            },
                            e.next = 22,
                            e.t0.post.call(e.t0, "usersnspublisher", "/notifications/create", e.t4);
                        case 22:
                            return I = t === m.$.FIRST_REMINDER ? {
                                id: n.id,
                                firstFollowUpSent: !0
                            } : {
                                id: n.id,
                                secondFollowUpSent: !0
                            },
                            e.next = 25,
                            l.b.graphql({
                                query: c.Dy,
                                variables: {
                                    input: I
                                }
                            });
                        case 25:
                            e.next = 30;
                            break;
                        case 27:
                            throw e.prev = 27,
                            e.t5 = e.catch(0),
                            e.t5;
                        case 30:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 27]])
            }
            )));
            return function(t, n, r, i) {
                return e.apply(this, arguments)
            }
        }()
    },
    98907: function(e, t, n) {
        "use strict";
        n.d(t, {
            k3: function() {
                return d
            },
            fT: function() {
                return f
            },
            Sz: function() {
                return m
            },
            WF: function() {
                return v
            },
            N1: function() {
                return p
            },
            lk: function() {
                return I
            }
        });
        var r = n(34051)
          , i = n.n(r)
          , a = n(10552)
          , o = n(50907)
          , l = n(72236)
          , s = n(42886);
        function c(e, t, n, r, i, a, o) {
            try {
                var l = e[a](o)
                  , s = l.value
            } catch (c) {
                return void n(c)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function u(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var a = e.apply(t, n);
                    function o(e) {
                        c(a, r, i, o, l, "next", e)
                    }
                    function l(e) {
                        c(a, r, i, o, l, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        var d = function() {
            var e = u(i().mark((function e(t, n, r, c, u, d, f, m) {
                var v;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return v = l.gV.isProduction ? "contact@10east.co" : "engineering@10east.co",
                            e.t0 = a.b,
                            e.next = 4,
                            o.g.currentSession();
                        case 4:
                            return e.t1 = e.sent.getAccessToken().getJwtToken(),
                            e.t2 = {
                                Authorization: e.t1
                            },
                            e.t3 = {
                                owner_id: "",
                                email_type: s.p$[s.p$.ADMIN_NEW_INVITEE_EMAIL],
                                target: s.He.ADMIN,
                                to_email: v,
                                metadata: {
                                    customProperties: {
                                        email_subject: t,
                                        member_fullname: n,
                                        member_since: r,
                                        hubspot_contact_url: c,
                                        invited_first_name: u,
                                        invited_last_name: d,
                                        invited_email: f,
                                        invited_hubspot_contact_url: m
                                    },
                                    contactProperties: {}
                                }
                            },
                            e.t4 = {
                                headers: e.t2,
                                body: e.t3
                            },
                            e.next = 10,
                            e.t0.post.call(e.t0, "usersnspublisher", "/notifications/create", e.t4);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r, i, a, o, l, s) {
                return e.apply(this, arguments)
            }
        }()
          , f = function() {
            var e = u(i().mark((function e(t, n, r, l, c, u, d) {
                var f, m;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return f = Boolean(window.location.hostname.indexOf("app.10east.co") > -1),
                            m = f ? "contact@10east.co" : "engineering@10east.co",
                            e.t0 = a.b,
                            e.next = 5,
                            o.g.currentSession();
                        case 5:
                            return e.t1 = e.sent.getAccessToken().getJwtToken(),
                            e.t2 = {
                                Authorization: e.t1
                            },
                            e.t3 = {
                                owner_id: "",
                                email_type: s.p$[s.p$.ADMIN_MEMBER_CONCIERGE_EMAIL],
                                target: s.He.ADMIN,
                                to_email: m,
                                metadata: {
                                    customProperties: {
                                        fullname: t + " " + n,
                                        phone: r,
                                        email: l,
                                        adminUrl: c,
                                        contactUrl: d,
                                        message: u
                                    },
                                    contactProperties: {}
                                }
                            },
                            e.t4 = {
                                headers: e.t2,
                                body: e.t3
                            },
                            e.next = 11,
                            e.t0.post.call(e.t0, "usersnspublisher", "/notifications/create", e.t4);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r, i, a, o, l) {
                return e.apply(this, arguments)
            }
        }()
          , m = function() {
            var e = u(i().mark((function e(t, n, r, l, c, u, d) {
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.t0 = a.b,
                            e.next = 3,
                            o.g.currentSession();
                        case 3:
                            return e.t1 = e.sent.getAccessToken().getJwtToken(),
                            e.t2 = {
                                Authorization: e.t1
                            },
                            e.t3 = {
                                owner_id: t,
                                email_type: s.p$[s.p$.MEMBER_NEW_CAPITAL_CALL_EMAIL],
                                target: s.He.USER,
                                to_email: n,
                                metadata: {
                                    customProperties: {
                                        link_text: r,
                                        link_href: l,
                                        final_date: c,
                                        offering_name: u,
                                        number_of_days: d
                                    },
                                    contactProperties: {}
                                }
                            },
                            e.t4 = {
                                headers: e.t2,
                                body: e.t3
                            },
                            e.next = 9,
                            e.t0.post.call(e.t0, "usersnspublisher", "/notifications/create", e.t4);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r, i, a, o, l) {
                return e.apply(this, arguments)
            }
        }()
          , v = function() {
            var e = u(i().mark((function e(t, n, r, l, c, u) {
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.t0 = a.b,
                            e.next = 3,
                            o.g.currentSession();
                        case 3:
                            return e.t1 = e.sent.getAccessToken().getJwtToken(),
                            e.t2 = {
                                Authorization: e.t1
                            },
                            e.t3 = {
                                owner_id: t,
                                email_type: s.p$[s.p$.MEMBER_NEW_INVESTMENT_UPDATE_EMAIL],
                                target: s.He.USER,
                                to_email: n,
                                metadata: {
                                    customProperties: {
                                        link_text: r,
                                        link_href: l,
                                        message_text: c,
                                        offering_name: u
                                    },
                                    contactProperties: {}
                                }
                            },
                            e.t4 = {
                                headers: e.t2,
                                body: e.t3
                            },
                            e.next = 9,
                            e.t0.post.call(e.t0, "usersnspublisher", "/notifications/create", e.t4);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r, i, a, o) {
                return e.apply(this, arguments)
            }
        }()
          , p = function() {
            var e = u(i().mark((function e(t, n, r, l, c, u) {
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.t0 = a.b,
                            e.next = 3,
                            o.g.currentSession();
                        case 3:
                            return e.t1 = e.sent.getAccessToken().getJwtToken(),
                            e.t2 = {
                                Authorization: e.t1
                            },
                            e.t3 = {
                                owner_id: t,
                                email_type: s.p$[s.p$.MEMBER_NEW_DOCUMENT_EMAIL],
                                target: s.He.USER,
                                to_email: n,
                                metadata: {
                                    customProperties: {
                                        link_text: r,
                                        link_href: l,
                                        document_type: c,
                                        offering_name: u
                                    },
                                    contactProperties: {}
                                }
                            },
                            e.t4 = {
                                headers: e.t2,
                                body: e.t3
                            },
                            e.next = 9,
                            e.t0.post.call(e.t0, "usersnspublisher", "/notifications/create", e.t4);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r, i, a, o) {
                return e.apply(this, arguments)
            }
        }()
          , I = function() {
            var e = u(i().mark((function e(t, n, r, l, c, u, d) {
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.t0 = a.b,
                            e.next = 3,
                            o.g.currentSession();
                        case 3:
                            return e.t1 = e.sent.getAccessToken().getJwtToken(),
                            e.t2 = {
                                Authorization: e.t1
                            },
                            e.t3 = {
                                owner_id: t,
                                email_type: s.p$[s.p$.MEMBER_THANK_YOU_REFERRER_EMAIL],
                                target: s.He.USER,
                                to_email: n,
                                metadata: {
                                    customProperties: {
                                        firstName: r,
                                        lastName: l,
                                        invited_first_name: c,
                                        invited_last_name: u,
                                        invited_email: d
                                    },
                                    contactProperties: {}
                                }
                            },
                            e.t4 = {
                                headers: e.t2,
                                body: e.t3
                            },
                            e.next = 9,
                            e.t0.post.call(e.t0, "usersnspublisher", "/notifications/create", e.t4);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r, i, a, o, l) {
                return e.apply(this, arguments)
            }
        }();
        !function() {
            var e = u(i().mark((function e(t, n, r, l, c, u, d) {
                var f, m, v;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return f = Boolean(window.location.hostname.indexOf("app.10east.co") > -1),
                            m = f ? "ir@10east.co" : "engineering@10east.co",
                            v = s.p$[s.p$.ADMIN_NEW_OFFERING_QUESTION_RECEIVED_EMAIL],
                            e.t0 = a.b,
                            e.next = 6,
                            o.g.currentSession();
                        case 6:
                            return e.t1 = e.sent.getAccessToken().getJwtToken(),
                            e.t2 = {
                                Authorization: e.t1
                            },
                            e.t3 = {
                                owner_id: "",
                                email_type: v,
                                target: s.He.ADMIN,
                                to_email: m,
                                metadata: {
                                    customProperties: {
                                        fullname: t + " " + n,
                                        offering_name: r,
                                        phone: l,
                                        email: c,
                                        hubspot_href: d,
                                        message: u
                                    },
                                    contactProperties: {}
                                }
                            },
                            e.t4 = {
                                headers: e.t2,
                                body: e.t3
                            },
                            e.next = 12,
                            e.t0.post.call(e.t0, "usersnspublisher", "/notifications/create", e.t4);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))
        }()
    },
    25491: function(e, t, n) {
        "use strict";
        n.d(t, {
            k: function() {
                return u
            }
        });
        var r = n(34051)
          , i = n.n(r)
          , a = n(23730)
          , o = n(42229)
          , l = n(62278)
          , s = n(50907);
        function c(e, t, n, r, i, a, o) {
            try {
                var l = e[a](o)
                  , s = l.value
            } catch (c) {
                return void n(c)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        var u = function() {
            var e, t = (e = i().mark((function e() {
                var t, n, r, c, u, d, f = arguments;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = f.length > 0 && void 0 !== f[0] ? f[0] : {},
                            n = t.contactId,
                            r = t.email,
                            e.prev = 1,
                            n) {
                                e.next = 18;
                                break
                            }
                            return e.next = 6,
                            s.g.currentAuthenticatedUser();
                        case 6:
                            if (u = e.sent,
                            r = null === u || void 0 === u || null === (c = u.attributes) || void 0 === c ? void 0 : c.email) {
                                e.next = 11;
                                break
                            }
                            return (0,
                            a.S3)(new Error("Error getting hubspot contact URL. No user/email found")),
                            e.abrupt("return");
                        case 11:
                            return e.next = 13,
                            (0,
                            o.xV)(r);
                        case 13:
                            if ((d = e.sent) && d.contactId) {
                                e.next = 17;
                                break
                            }
                            return (0,
                            a.S3)(new Error("Error getting hubspot contact URL. No contact ID found")),
                            e.abrupt("return");
                        case 17:
                            n = d.contactId;
                        case 18:
                            return e.abrupt("return", "".concat(l.Y.APP_BASE_URL, "/contacts/").concat(l.Y.ACCOUNT_ID, "/contact/").concat(n));
                        case 21:
                            e.prev = 21,
                            e.t0 = e.catch(1),
                            (0,
                            a.S3)(e.t0);
                        case 24:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 21]])
            }
            )),
            function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var a = e.apply(t, n);
                    function o(e) {
                        c(a, r, i, o, l, "next", e)
                    }
                    function l(e) {
                        c(a, r, i, o, l, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
            );
            return function() {
                return t.apply(this, arguments)
            }
        }()
    },
    10766: function(e) {
        e.exports = {
            offeringDetail: "OfferingDetail_offeringDetail__ETzLL",
            statistic: "OfferingDetail_statistic__lqgYA",
            statistic__label: "OfferingDetail_statistic__label__XAAYO",
            statistic__value: "OfferingDetail_statistic__value__75Pta",
            statistic__description: "OfferingDetail_statistic__description__O1V0m"
        }
    },
    80356: function(e) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzM4MjVfMTkwNzIiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxOCI+CjxwYXRoIGQ9Ik01LjU0Njg4IDkuNzY4MjNINS40Mjk2OVY5Ljg4NTQyVjEzLjQyNzFWMTMuNTQ0M0g1LjU0Njg4SDcuMzI4MTJINy40NDUzMVYxMy40MjcxVjkuODg1NDJWOS43NjgyM0g3LjMyODEySDUuNTQ2ODhaTTkuMTA5MzggNC40NTU3M0g4Ljk5MjE5VjQuNTcyOTJWMTMuNDI3MVYxMy41NDQzSDkuMTA5MzhIMTAuODkwNkgxMS4wMDc4VjEzLjQyNzFWNC41NzI5MlY0LjQ1NTczSDEwLjg5MDZIOS4xMDkzOFpNMTIuNjcxOSA3LjExMTk4SDEyLjU1NDdWNy4yMjkxN1YxMy40MjcxVjEzLjU0NDNIMTIuNjcxOUgxNC40NTMxSDE0LjU3MDNWMTMuNDI3MVY3LjIyOTE3VjcuMTExOThIMTQuNDUzMUgxMi42NzE5Wk0xOC4wMTU2IDAuOTE0MDYySDEuOTg0MzhDMS43MTczMSAwLjkxNDA2MiAxLjQ2MTA0IDEuMDE5NTMgMS4yNzE5OSAxLjIwNzQ4QzEuMDgyOTEgMS4zOTU0NSAwLjk3NjU2MiAxLjY1MDU0IDAuOTc2NTYyIDEuOTE2NjdWMTYuMDgzM0MwLjk3NjU2MiAxNi4zNDk1IDEuMDgyOTEgMTYuNjA0NiAxLjI3MTk5IDE2Ljc5MjVDMS40NjEwNCAxNi45ODA1IDEuNzE3MzEgMTcuMDg1OSAxLjk4NDM4IDE3LjA4NTlIMTguMDE1NkMxOC4yODI3IDE3LjA4NTkgMTguNTM5IDE2Ljk4MDUgMTguNzI4IDE2Ljc5MjVDMTguOTE3MSAxNi42MDQ2IDE5LjAyMzQgMTYuMzQ5NSAxOS4wMjM0IDE2LjA4MzNWMS45MTY2N0MxOS4wMjM0IDEuNjUwNTQgMTguOTE3MSAxLjM5NTQ1IDE4LjcyOCAxLjIwNzQ4QzE4LjUzOSAxLjAxOTUzIDE4LjI4MjcgMC45MTQwNjIgMTguMDE1NiAwLjkxNDA2MlpNMTcuMDA3OCAxNS4wODA3SDIuOTkyMTlWMi45MTkyN0gxNy4wMDc4VjE1LjA4MDdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzgyNV8xOTA3MikiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC4yMzQzNzUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzM4MjVfMTkwNzIpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0tOS41NDM4NSAtMjQuNzg2NUw0NS45NDEgNy4yNDc2Nkw0Ni4wMzU1IDcuMDgzODlMLTkuNDQ5MyAtMjQuOTUwM0wtOS41NDM4NSAtMjQuNzg2NVoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8zODI1XzE5MDcyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS05LjExODM2IC0yNS41MjM1TDQ2LjM2NjUgNi41MTA3TDQ2LjQ2MSA2LjM0NjkzTC05LjAyMzgxIC0yNS42ODcyTC05LjExODM2IC0yNS41MjM1WiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzM4MjVfMTkwNzIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTkuOTIyMDUgLTI0LjEzMTRMNDUuNTYyOCA3LjkwMjczTDQ1LjY1NzMgNy43Mzg5N0wtOS44Mjc1IC0yNC4yOTUyTC05LjkyMjA1IC0yNC4xMzE0WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzM4MjVfMTkwNzIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTEwLjM5NDggLTIzLjMxMjZMNDUuMDkgOC43MjE1N0w0NS4xODQ2IDguNTU3ODFMLTEwLjMwMDMgLTIzLjQ3NjRMLTEwLjM5NDggLTIzLjMxMjZaIiBmaWxsPSJ1cmwoI3BhaW50NF9saW5lYXJfMzgyNV8xOTA3MikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0tMTAuODIwMyAtMjIuNTc1Nkw0NC42NjQ1IDkuNDU4NTNMNDQuNzU5MSA5LjI5NDc2TC0xMC43MjU3IC0yMi43Mzk0TC0xMC44MjAzIC0yMi41NzU2WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzM4MjVfMTkwNzIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTExLjYyNCAtMjEuMTgzNkw0My44NjA4IDEwLjg1MDZMNDQuMDAyNyAxMC42MDQ5TC0xMS40ODIyIC0yMS40MjkzTC0xMS42MjQgLTIxLjE4MzZaIiBmaWxsPSJ1cmwoI3BhaW50Nl9saW5lYXJfMzgyNV8xOTA3MikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0tMTEuMTk4NSAtMjEuOTIwNkw0NC4yODYzIDEwLjExMzZMNDQuMzgwOSA5Ljk0OTgzTC0xMS4xMDM5IC0yMi4wODQzTC0xMS4xOTg1IC0yMS45MjA2WiIgZmlsbD0idXJsKCNwYWludDdfbGluZWFyXzM4MjVfMTkwNzIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTEyLjA5NjcgLTIwLjM2NDhMNDMuMzg4MSAxMS42Njk0TDQzLjUyOTkgMTEuNDIzOEwtMTEuOTU0OSAtMjAuNjEwNEwtMTIuMDk2NyAtMjAuMzY0OFoiIGZpbGw9InVybCgjcGFpbnQ4X2xpbmVhcl8zODI1XzE5MDcyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xMi41Njk1IC0xOS41NDU5TDQyLjkxNTMgMTIuNDg4M0w0My4wNTcxIDEyLjI0MjZMLTEyLjQyNzcgLTE5Ljc5MTZMLTEyLjU2OTUgLTE5LjU0NTlaIiBmaWxsPSJ1cmwoI3BhaW50OV9saW5lYXJfMzgyNV8xOTA3MikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0tMTMuMDQyMyAtMTguNzI3MUw0Mi40NDI2IDEzLjMwNzFMNDIuNTg0NCAxMy4wNjE1TC0xMi45MDA0IC0xOC45NzI3TC0xMy4wNDIzIC0xOC43MjcxWiIgZmlsbD0idXJsKCNwYWludDEwX2xpbmVhcl8zODI1XzE5MDcyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xMy41MTUgLTE3LjkwODJMNDEuOTY5OCAxNC4xMjU5TDQyLjExMTYgMTMuODgwM0wtMTMuMzczMiAtMTguMTUzOUwtMTMuNTE1IC0xNy45MDgyWiIgZmlsbD0idXJsKCNwYWludDExX2xpbmVhcl8zODI1XzE5MDcyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xMy45ODc4IC0xNy4wODk0TDQxLjQ5NyAxNC45NDQ4TDQxLjYzODkgMTQuNjk5MUwtMTMuODQ2IC0xNy4zMzVMLTEzLjk4NzggLTE3LjA4OTRaIiBmaWxsPSJ1cmwoI3BhaW50MTJfbGluZWFyXzM4MjVfMTkwNzIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTE0LjQ2MDYgLTE2LjI3MDVMNDEuMDI0MyAxNS43NjM3TDQxLjE2NjEgMTUuNTE4TC0xNC4zMTg3IC0xNi41MTYyTC0xNC40NjA2IC0xNi4yNzA1WiIgZmlsbD0idXJsKCNwYWludDEzX2xpbmVhcl8zODI1XzE5MDcyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xNC45MzMzIC0xNS40NTE3TDQwLjU1MTUgMTYuNTgyNUw0MC42OTMzIDE2LjMzNjlMLTE0Ljc5MTUgLTE1LjY5NzNMLTE0LjkzMzMgLTE1LjQ1MTdaIiBmaWxsPSJ1cmwoI3BhaW50MTRfbGluZWFyXzM4MjVfMTkwNzIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTE1LjkyNjEgLTEzLjczMjFMMzkuNTU4NyAxOC4zMDIxTDM5Ljc0NzggMTcuOTc0NkwtMTUuNzM3IC0xNC4wNTk2TC0xNS45MjYxIC0xMy43MzIxWiIgZmlsbD0idXJsKCNwYWludDE1X2xpbmVhcl8zODI1XzE5MDcyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xNi40OTM0IC0xMi43NDk1TDM4Ljk5MTQgMTkuMjg0N0wzOS4yMjc4IDE4Ljg3NTNMLTE2LjI1NzEgLTEzLjE1ODlMLTE2LjQ5MzQgLTEyLjc0OTVaIiBmaWxsPSJ1cmwoI3BhaW50MTZfbGluZWFyXzM4MjVfMTkwNzIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTE3LjA2MDggLTExLjc2NjhMMzguNDI0MSAyMC4yNjczTDM4LjY2MDQgMTkuODU3OUwtMTYuODI0NCAtMTIuMTc2M0wtMTcuMDYwOCAtMTEuNzY2OFoiIGZpbGw9InVybCgjcGFpbnQxN19saW5lYXJfMzgyNV8xOTA3MikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0tMTcuNjI4MSAtMTAuNzg0MkwzNy44NTY3IDIxLjI1TDM4LjE0MDQgMjAuNzU4N0wtMTcuMzQ0NCAtMTEuMjc1NUwtMTcuNjI4MSAtMTAuNzg0MloiIGZpbGw9InVybCgjcGFpbnQxOF9saW5lYXJfMzgyNV8xOTA3MikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0tMTguMTk1NCAtOS44MDE1OEwzNy4yODk0IDIyLjIzMjZMMzcuNjIwNCAyMS42NTk0TC0xNy44NjQ1IC0xMC4zNzQ4TC0xOC4xOTU0IC05LjgwMTU4WiIgZmlsbD0idXJsKCNwYWludDE5X2xpbmVhcl8zODI1XzE5MDcyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xOC43NjI3IC04LjgxODk2TDM2LjcyMjEgMjMuMjE1MkwzNy4xMDAzIDIyLjU2MDFMLTE4LjM4NDUgLTkuNDc0MDVMLTE4Ljc2MjcgLTguODE4OTZaIiBmaWxsPSJ1cmwoI3BhaW50MjBfbGluZWFyXzM4MjVfMTkwNzIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTE5LjMzIC03LjgzNjM0TDM2LjE1NDggMjQuMTk3OEwzNi41ODAzIDIzLjQ2MDlMLTE4LjkwNDUgLTguNTczMzFMLTE5LjMzIC03LjgzNjM0WiIgZmlsbD0idXJsKCNwYWludDIxX2xpbmVhcl8zODI1XzE5MDcyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xOS44OTc0IC02Ljg1MzcyTDM1LjU4NzUgMjUuMTgwNUwzNi4wNjAyIDI0LjM2MTZMLTE5LjQyNDYgLTcuNjcyNTdMLTE5Ljg5NzQgLTYuODUzNzJaIiBmaWxsPSJ1cmwoI3BhaW50MjJfbGluZWFyXzM4MjVfMTkwNzIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTIxLjEyNjUgLTQuNzI0N0wzNC4zNTgzIDI3LjMwOTVMMzQuOTI1NiAyNi4zMjY5TC0yMC41NTkyIC01LjcwNzMyTC0yMS4xMjY1IC00LjcyNDdaIiBmaWxsPSJ1cmwoI3BhaW50MjNfbGluZWFyXzM4MjVfMTkwNzIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTIwLjUxMTkgLTUuNzg5MjFMMzQuOTcyOSAyNi4yNDVMMzUuNDkyOSAyNS4zNDQyTC0xOS45OTE5IC02LjY4OTk1TC0yMC41MTE5IC01Ljc4OTIxWiIgZmlsbD0idXJsKCNwYWludDI0X2xpbmVhcl8zODI1XzE5MDcyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xNS40MDYxIC0xNC42MzI4TDQwLjA3ODcgMTcuNDAxNEw0MC4yMjA2IDE3LjE1NTdMLTE1LjI2NDMgLTE0Ljg3ODVMLTE1LjQwNjEgLTE0LjYzMjhaIiBmaWxsPSJ1cmwoI3BhaW50MjVfbGluZWFyXzM4MjVfMTkwNzIpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNLTMwLjU0NjkgMTEuNTkxOEwyNC45Mzc5IDQzLjYyNkwzNC4zODI2IDI3LjI2NzNMLTIxLjEwMjIgLTQuNzY2OUwtMzAuNTQ2OSAxMS41OTE4WiIgZmlsbD0idXJsKCNwYWludDI2X2xpbmVhcl8zODI1XzE5MDcyKSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzgyNV8xOTA3MiIgeDE9IjEuMDkzNzUiIHkxPSI5LjA4MDQ5IiB4Mj0iMTguOTA2MyIgeTI9IjkuMDgwNDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDRfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDVfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDZfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDdfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDhfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDlfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDEwX2xpbmVhcl8zODI1XzE5MDcyIiB4MT0iLTIuNTI0MjQiIHkxPSIyNy43NzA3IiB4Mj0iMTguOTk4OCIgeTI9Ii05LjUwODM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNDNzhCNTgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTU2QTY4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxMV9saW5lYXJfMzgyNV8xOTA3MiIgeDE9Ii0yLjUyNDI0IiB5MT0iMjcuNzcwNyIgeDI9IjE4Ljk5ODgiIHkyPSItOS41MDgzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQzc4QjU4Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk1NkE2OCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTJfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDEzX2xpbmVhcl8zODI1XzE5MDcyIiB4MT0iLTIuNTI0MjQiIHkxPSIyNy43NzA3IiB4Mj0iMTguOTk4OCIgeTI9Ii05LjUwODM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNDNzhCNTgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTU2QTY4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxNF9saW5lYXJfMzgyNV8xOTA3MiIgeDE9Ii0yLjUyNDI0IiB5MT0iMjcuNzcwNyIgeDI9IjE4Ljk5ODgiIHkyPSItOS41MDgzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQzc4QjU4Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk1NkE2OCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MTVfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDE2X2xpbmVhcl8zODI1XzE5MDcyIiB4MT0iLTIuNTI0MjQiIHkxPSIyNy43NzA3IiB4Mj0iMTguOTk4OCIgeTI9Ii05LjUwODM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNDNzhCNTgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTU2QTY4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxN19saW5lYXJfMzgyNV8xOTA3MiIgeDE9Ii0yLjUyNDI0IiB5MT0iMjcuNzcwNyIgeDI9IjE4Ljk5ODgiIHkyPSItOS41MDgzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQzc4QjU4Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk1NkE2OCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MThfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDE5X2xpbmVhcl8zODI1XzE5MDcyIiB4MT0iLTIuNTI0MjQiIHkxPSIyNy43NzA3IiB4Mj0iMTguOTk4OCIgeTI9Ii05LjUwODM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNDNzhCNTgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTU2QTY4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyMF9saW5lYXJfMzgyNV8xOTA3MiIgeDE9Ii0yLjUyNDI0IiB5MT0iMjcuNzcwNyIgeDI9IjE4Ljk5ODgiIHkyPSItOS41MDgzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQzc4QjU4Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk1NkE2OCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MjFfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDIyX2xpbmVhcl8zODI1XzE5MDcyIiB4MT0iLTIuNTI0MjQiIHkxPSIyNy43NzA3IiB4Mj0iMTguOTk4OCIgeTI9Ii05LjUwODM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNDNzhCNTgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTU2QTY4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyM19saW5lYXJfMzgyNV8xOTA3MiIgeDE9Ii0yLjUyNDI0IiB5MT0iMjcuNzcwNyIgeDI9IjE4Ljk5ODgiIHkyPSItOS41MDgzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQzc4QjU4Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk1NkE2OCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MjRfbGluZWFyXzM4MjVfMTkwNzIiIHgxPSItMi41MjQyNCIgeTE9IjI3Ljc3MDciIHgyPSIxOC45OTg4IiB5Mj0iLTkuNTA4MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0M3OEI1OCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5NTZBNjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDI1X2xpbmVhcl8zODI1XzE5MDcyIiB4MT0iLTIuNTI0MjQiIHkxPSIyNy43NzA3IiB4Mj0iMTguOTk4OCIgeTI9Ii05LjUwODM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNDNzhCNTgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTU2QTY4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyNl9saW5lYXJfMzgyNV8xOTA3MiIgeDE9Ii0yLjUyNDI0IiB5MT0iMjcuNzcwNyIgeDI9IjE4Ljk5ODgiIHkyPSItOS41MDgzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQzc4QjU4Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzk1NkE2OCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
    }
}]);
//# sourceMappingURL=2822-9f0787de3a46a2a6.js.map
