var fixed = !1;
(jQuery.easing.jswing = jQuery.easing.swing),
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (e, t, i, s, a) {
            return jQuery.easing[jQuery.easing.def](e, t, i, s, a);
        },
        easeInQuad: function (e, t, i, s, a) {
            return s * (t /= a) * t + i;
        },
        easeOutQuad: function (e, t, i, s, a) {
            return -s * (t /= a) * (t - 2) + i;
        },
        easeInOutQuad: function (e, t, i, s, a) {
            return (t /= a / 2) < 1 ? (s / 2) * t * t + i : (-s / 2) * (--t * (t - 2) - 1) + i;
        },
        easeInCubic: function (e, t, i, s, a) {
            return s * (t /= a) * t * t + i;
        },
        easeOutCubic: function (e, t, i, s, a) {
            return s * ((t = t / a - 1) * t * t + 1) + i;
        },
        easeInOutCubic: function (e, t, i, s, a) {
            return (t /= a / 2) < 1 ? (s / 2) * t * t * t + i : (s / 2) * ((t -= 2) * t * t + 2) + i;
        },
        easeInQuart: function (e, t, i, s, a) {
            return s * (t /= a) * t * t * t + i;
        },
        easeOutQuart: function (e, t, i, s, a) {
            return -s * ((t = t / a - 1) * t * t * t - 1) + i;
        },
        easeInOutQuart: function (e, t, i, s, a) {
            return (t /= a / 2) < 1 ? (s / 2) * t * t * t * t + i : (-s / 2) * ((t -= 2) * t * t * t - 2) + i;
        },
        easeInQuint: function (e, t, i, s, a) {
            return s * (t /= a) * t * t * t * t + i;
        },
        easeOutQuint: function (e, t, i, s, a) {
            return s * ((t = t / a - 1) * t * t * t * t + 1) + i;
        },
        easeInOutQuint: function (e, t, i, s, a) {
            return (t /= a / 2) < 1 ? (s / 2) * t * t * t * t * t + i : (s / 2) * ((t -= 2) * t * t * t * t + 2) + i;
        },
        easeInSine: function (e, t, i, s, a) {
            return -s * Math.cos((t / a) * (Math.PI / 2)) + s + i;
        },
        easeOutSine: function (e, t, i, s, a) {
            return s * Math.sin((t / a) * (Math.PI / 2)) + i;
        },
        easeInOutSine: function (e, t, i, s, a) {
            return (-s / 2) * (Math.cos((Math.PI * t) / a) - 1) + i;
        },
        easeInExpo: function (e, t, i, s, a) {
            return 0 == t ? i : s * Math.pow(2, 10 * (t / a - 1)) + i;
        },
        easeOutExpo: function (e, t, i, s, a) {
            return t == a ? i + s : s * (1 - Math.pow(2, (-10 * t) / a)) + i;
        },
        easeInOutExpo: function (e, t, i, s, a) {
            return 0 == t ? i : t == a ? i + s : (t /= a / 2) < 1 ? (s / 2) * Math.pow(2, 10 * (t - 1)) + i : (s / 2) * (2 - Math.pow(2, -10 * --t)) + i;
        },
        easeInCirc: function (e, t, i, s, a) {
            return -s * (Math.sqrt(1 - (t /= a) * t) - 1) + i;
        },
        easeOutCirc: function (e, t, i, s, a) {
            return s * Math.sqrt(1 - (t = t / a - 1) * t) + i;
        },
        easeInOutCirc: function (e, t, i, s, a) {
            return (t /= a / 2) < 1 ? (-s / 2) * (Math.sqrt(1 - t * t) - 1) + i : (s / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + i;
        },
        easeInElastic: function (e, t, i, s, a) {
            var n = 1.70158,
                r = 0,
                o = s;
            return 0 == t ? i : 1 == (t /= a) ? i + s : ((r = r || 0.3 * a), (n = o < Math.abs(s) ? ((o = s), r / 4) : (r / (2 * Math.PI)) * Math.asin(s / o)), -(o * Math.pow(2, 10 * --t) * Math.sin(((t * a - n) * (2 * Math.PI)) / r)) + i);
        },
        easeOutElastic: function (e, t, i, s, a) {
            var n = 1.70158,
                r = 0,
                o = s;
            return 0 == t ? i : 1 == (t /= a) ? i + s : ((r = r || 0.3 * a), (n = o < Math.abs(s) ? ((o = s), r / 4) : (r / (2 * Math.PI)) * Math.asin(s / o)), o * Math.pow(2, -10 * t) * Math.sin(((t * a - n) * (2 * Math.PI)) / r) + s + i);
        },
        easeInOutElastic: function (e, t, i, s, a) {
            var n = 1.70158,
                r = 0,
                o = s;
            return 0 == t
                ? i
                : 2 == (t /= a / 2)
                ? i + s
                : ((r = r || a * (0.3 * 1.5)),
                  (n = o < Math.abs(s) ? ((o = s), r / 4) : (r / (2 * Math.PI)) * Math.asin(s / o)),
                  t < 1 ? o * Math.pow(2, 10 * --t) * Math.sin(((t * a - n) * (2 * Math.PI)) / r) * -0.5 + i : o * Math.pow(2, -10 * --t) * Math.sin(((t * a - n) * (2 * Math.PI)) / r) * 0.5 + s + i);
        },
        easeInBack: function (e, t, i, s, a, n) {
            return s * (t /= a) * t * (((n = null == n ? 1.70158 : n) + 1) * t - n) + i;
        },
        easeOutBack: function (e, t, i, s, a, n) {
            return s * ((t = t / a - 1) * t * (((n = null == n ? 1.70158 : n) + 1) * t + n) + 1) + i;
        },
        easeInOutBack: function (e, t, i, s, a, n) {
            return null == n && (n = 1.70158), (t /= a / 2) < 1 ? (s / 2) * (t * t * ((1 + (n *= 1.525)) * t - n)) + i : (s / 2) * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + i;
        },
        easeInBounce: function (e, t, i, s, a) {
            return s - jQuery.easing.easeOutBounce(e, a - t, 0, s, a) + i;
        },
        easeOutBounce: function (e, t, i, s, a) {
            return (t /= a) < 1 / 2.75
                ? s * (7.5625 * t * t) + i
                : t < 2 / 2.75
                ? s * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + i
                : t < 2.5 / 2.75
                ? s * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + i
                : s * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + i;
        },
        easeInOutBounce: function (e, t, i, s, a) {
            return t < a / 2 ? 0.5 * jQuery.easing.easeInBounce(e, 2 * t, 0, s, a) + i : 0.5 * jQuery.easing.easeOutBounce(e, 2 * t - a, 0, s, a) + 0.5 * s + i;
        },
    }),
    (jQuery.throttle = function (a, n, r, o) {
        var l,
            d = !1,
            h = 0;
        function p() {
            l && clearTimeout(l);
        }
        function e() {
            var e = this,
                t = Date.now() - h,
                i = arguments;
            function s() {
                (h = Date.now()), r.apply(e, i);
            }
            d ||
                (o && !l && s(),
                p(),
                void 0 === o && a < t
                    ? s()
                    : !0 !== n &&
                      (l = setTimeout(
                          o
                              ? function () {
                                    l = void 0;
                                }
                              : s,
                          void 0 === o ? a - t : a
                      )));
        }
        return (
            "boolean" != typeof n && ((o = r), (r = n), (n = void 0)),
            (e.cancel = function () {
                p(), (d = !0);
            }),
            e
        );
    }),
    (jQuery.debounce = function (e, t, i) {
        return void 0 === i ? jQuery.throttle(e, t, !1) : jQuery.throttle(e, i, !1 !== t);
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).Swiper = t());
    })(this, function () {
        "use strict";
        function D(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
        }
        function s(t, i) {
            void 0 === t && (t = {}),
                void 0 === i && (i = {}),
                Object.keys(i).forEach(function (e) {
                    void 0 === t[e] ? (t[e] = i[e]) : D(i[e]) && D(t[e]) && 0 < Object.keys(i[e]).length && s(t[e], i[e]);
                });
        }
        function l(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return (this.length = e.length), this;
        }
        var v = "undefined" != typeof document ? document : {},
            e = {
                body: {},
                addEventListener: function () {},
                removeEventListener: function () {},
                activeElement: { blur: function () {}, nodeName: "" },
                querySelector: function () {
                    return null;
                },
                querySelectorAll: function () {
                    return [];
                },
                getElementById: function () {
                    return null;
                },
                createEvent: function () {
                    return { initEvent: function () {} };
                },
                createElement: function () {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function () {},
                        getElementsByTagName: function () {
                            return [];
                        },
                    };
                },
                createElementNS: function () {
                    return {};
                },
                importNode: function () {
                    return null;
                },
                location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            },
            K = (s(v, e), "undefined" != typeof window ? window : {});
        s(K, {
            document: e,
            navigator: { userAgent: "" },
            location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
            CustomEvent: function () {
                return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
                return {
                    getPropertyValue: function () {
                        return "";
                    },
                };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
            matchMedia: function () {
                return {};
            },
        });
        function E(e, t) {
            var i = [],
                s = 0;
            if (e && !t && e instanceof l) return e;
            if (e)
                if ("string" == typeof e) {
                    var a,
                        n,
                        r = e.trim();
                    if (0 <= r.indexOf("<") && 0 <= r.indexOf(">")) {
                        var o = "div";
                        for (
                            0 === r.indexOf("<li") && (o = "ul"),
                                0 === r.indexOf("<tr") && (o = "tbody"),
                                (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) || (o = "tr"),
                                0 === r.indexOf("<tbody") && (o = "table"),
                                0 === r.indexOf("<option") && (o = "select"),
                                (n = v.createElement(o)).innerHTML = r,
                                s = 0;
                            s < n.childNodes.length;
                            s += 1
                        )
                            i.push(n.childNodes[s]);
                    } else for (a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || v).querySelectorAll(e.trim()) : [v.getElementById(e.trim().split("#")[1])], s = 0; s < a.length; s += 1) a[s] && i.push(a[s]);
                } else if (e.nodeType || e === K || e === v) i.push(e);
                else if (0 < e.length && e[0].nodeType) for (s = 0; s < e.length; s += 1) i.push(e[s]);
            return new l(i);
        }
        function n(e) {
            for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t;
        }
        (E.fn = l.prototype), (E.Class = l), (E.Dom7 = l);
        function t(e) {
            var t = this;
            (t.params = e = void 0 === e ? {} : e),
                (t.eventsListeners = {}),
                t.params &&
                    t.params.on &&
                    Object.keys(t.params.on).forEach(function (e) {
                        t.on(e, t.params.on[e]);
                    });
        }
        var i,
            a,
            A,
            r,
            B = {
                addClass: function (e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
                    return this;
                },
                removeClass: function (e) {
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
                    return this;
                },
                hasClass: function (e) {
                    return !!this[0] && this[0].classList.contains(e);
                },
                toggleClass: function (e) {
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
                    return this;
                },
                attr: function (e, t) {
                    var i = arguments;
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var s = 0; s < this.length; s += 1)
                        if (2 === i.length) this[s].setAttribute(e, t);
                        else for (var a in e) (this[s][a] = e[a]), this[s].setAttribute(a, e[a]);
                    return this;
                },
                removeAttr: function (e) {
                    for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this;
                },
                data: function (e, t) {
                    var i;
                    if (void 0 !== t) {
                        for (var s = 0; s < this.length; s += 1) (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), (i.dom7ElementDataStorage[e] = t);
                        return this;
                    }
                    if ((i = this[0])) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0;
                },
                transform: function (e) {
                    for (var t = 0; t < this.length; t += 1) {
                        var i = this[t].style;
                        (i.webkitTransform = e), (i.transform = e);
                    }
                    return this;
                },
                transition: function (e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t += 1) {
                        var i = this[t].style;
                        (i.webkitTransitionDuration = e), (i.transitionDuration = e);
                    }
                    return this;
                },
                on: function () {
                    for (var e = arguments, t = [], i = arguments.length; i--; ) t[i] = e[i];
                    var s = t[0],
                        n = t[1],
                        r = t[2],
                        a = t[3];
                    function o(e) {
                        var t = e.target;
                        if (t) {
                            var i = e.target.dom7EventData || [];
                            if ((i.indexOf(e) < 0 && i.unshift(e), E(t).is(n))) r.apply(t, i);
                            else for (var s = E(t).parents(), a = 0; a < s.length; a += 1) E(s[a]).is(n) && r.apply(s[a], i);
                        }
                    }
                    function l(e) {
                        var t = (e && e.target && e.target.dom7EventData) || [];
                        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
                    }
                    "function" == typeof t[1] && ((s = t[0]), (r = t[1]), (a = t[2]), (n = void 0));
                    for (var d, a = a || !1, h = s.split(" "), p = 0; p < this.length; p += 1) {
                        var c = this[p];
                        if (n)
                            for (d = 0; d < h.length; d += 1) {
                                var u = h[d];
                                c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[u] || (c.dom7LiveListeners[u] = []), c.dom7LiveListeners[u].push({ listener: r, proxyListener: o }), c.addEventListener(u, o, a);
                            }
                        else
                            for (d = 0; d < h.length; d += 1) {
                                var m = h[d];
                                c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[m] || (c.dom7Listeners[m] = []), c.dom7Listeners[m].push({ listener: r, proxyListener: l }), c.addEventListener(m, l, a);
                            }
                    }
                    return this;
                },
                off: function () {
                    for (var e = arguments, t = [], i = arguments.length; i--; ) t[i] = e[i];
                    var s = t[0],
                        a = t[1],
                        n = t[2],
                        r = t[3];
                    "function" == typeof t[1] && ((s = t[0]), (n = t[1]), (r = t[2]), (a = void 0));
                    for (var r = r || !1, o = s.split(" "), l = 0; l < o.length; l += 1)
                        for (var d = o[l], h = 0; h < this.length; h += 1) {
                            var p = this[h],
                                c = void 0;
                            if ((!a && p.dom7Listeners ? (c = p.dom7Listeners[d]) : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length))
                                for (var u = c.length - 1; 0 <= u; --u) {
                                    var m = c[u];
                                    ((n && m.listener === n) || (n && m.listener && m.listener.dom7proxy && m.listener.dom7proxy === n) || !n) && (p.removeEventListener(d, m.proxyListener, r), c.splice(u, 1));
                                }
                        }
                    return this;
                },
                trigger: function () {
                    for (var e = arguments, t = [], i = arguments.length; i--; ) t[i] = e[i];
                    for (var s = t[0].split(" "), a = t[1], n = 0; n < s.length; n += 1)
                        for (var r = s[n], o = 0; o < this.length; o += 1) {
                            var l = this[o],
                                d = void 0;
                            try {
                                d = new K.CustomEvent(r, { detail: a, bubbles: !0, cancelable: !0 });
                            } catch (t) {
                                (d = v.createEvent("Event")).initEvent(r, !0, !0), (d.detail = a);
                            }
                            (l.dom7EventData = t.filter(function (e, t) {
                                return 0 < t;
                            })),
                                l.dispatchEvent(d),
                                (l.dom7EventData = []),
                                delete l.dom7EventData;
                        }
                    return this;
                },
                transitionEnd: function (t) {
                    var i,
                        s = ["webkitTransitionEnd", "transitionend"],
                        a = this;
                    function n(e) {
                        if (e.target === this) for (t.call(this, e), i = 0; i < s.length; i += 1) a.off(s[i], n);
                    }
                    if (t) for (i = 0; i < s.length; i += 1) a.on(s[i], n);
                    return this;
                },
                outerWidth: function (e) {
                    return 0 < this.length ? (e ? ((e = this.styles()), this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))) : this[0].offsetWidth) : null;
                },
                outerHeight: function (e) {
                    return 0 < this.length ? (e ? ((e = this.styles()), this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))) : this[0].offsetHeight) : null;
                },
                offset: function () {
                    var e, t, i, s, a;
                    return 0 < this.length
                        ? ((e = (a = this[0]).getBoundingClientRect()),
                          (i = v.body),
                          (t = a.clientTop || i.clientTop || 0),
                          (i = a.clientLeft || i.clientLeft || 0),
                          (s = a === K ? K.scrollY : a.scrollTop),
                          (a = a === K ? K.scrollX : a.scrollLeft),
                          { top: e.top + s - t, left: e.left + a - i })
                        : null;
                },
                css: function (e, t) {
                    var i;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (i = 0; i < this.length; i += 1) for (var s in e) this[i].style[s] = e[s];
                            return this;
                        }
                        if (this[0]) return K.getComputedStyle(this[0], null).getPropertyValue(e);
                    }
                    if (2 !== arguments.length || "string" != typeof e) return this;
                    for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this;
                },
                each: function (e) {
                    if (!e) return this;
                    for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
                    return this;
                },
                html: function (e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                    for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this;
                },
                text: function (e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this;
                },
                is: function (e) {
                    var t,
                        i,
                        s = this[0];
                    if (!s || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (s.matches) return s.matches(e);
                        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                        if (s.msMatchesSelector) return s.msMatchesSelector(e);
                        for (t = E(e), i = 0; i < t.length; i += 1) if (t[i] === s) return !0;
                        return !1;
                    }
                    if (e === v) return s === v;
                    if (e === K) return s === K;
                    if (e.nodeType || e instanceof l) {
                        for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === s) return !0;
                        return !1;
                    }
                    return !1;
                },
                index: function () {
                    var e,
                        t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                        return e;
                    }
                },
                eq: function (e) {
                    if (void 0 === e) return this;
                    var t = this.length;
                    return new l(t - 1 < e ? [] : e < 0 ? ((t = t + e) < 0 ? [] : [this[t]]) : [this[e]]);
                },
                append: function () {
                    for (var e = arguments, t = [], i = arguments.length; i--; ) t[i] = e[i];
                    for (var s = 0; s < t.length; s += 1)
                        for (var a = t[s], n = 0; n < this.length; n += 1)
                            if ("string" == typeof a) {
                                var r = v.createElement("div");
                                for (r.innerHTML = a; r.firstChild; ) this[n].appendChild(r.firstChild);
                            } else if (a instanceof l) for (var o = 0; o < a.length; o += 1) this[n].appendChild(a[o]);
                            else this[n].appendChild(a);
                    return this;
                },
                prepend: function (e) {
                    for (var t, i = this, s = 0; s < this.length; s += 1)
                        if ("string" == typeof e) {
                            var a = v.createElement("div");
                            for (a.innerHTML = e, t = a.childNodes.length - 1; 0 <= t; --t) i[s].insertBefore(a.childNodes[t], i[s].childNodes[0]);
                        } else if (e instanceof l) for (t = 0; t < e.length; t += 1) i[s].insertBefore(e[t], i[s].childNodes[0]);
                        else i[s].insertBefore(e, i[s].childNodes[0]);
                    return this;
                },
                next: function (e) {
                    return 0 < this.length
                        ? e
                            ? this[0].nextElementSibling && E(this[0].nextElementSibling).is(e)
                                ? new l([this[0].nextElementSibling])
                                : new l([])
                            : this[0].nextElementSibling
                            ? new l([this[0].nextElementSibling])
                            : new l([])
                        : new l([]);
                },
                nextAll: function (e) {
                    var t = [],
                        i = this[0];
                    if (!i) return new l([]);
                    for (; i.nextElementSibling; ) {
                        var s = i.nextElementSibling;
                        (e && !E(s).is(e)) || t.push(s), (i = s);
                    }
                    return new l(t);
                },
                prev: function (e) {
                    var t;
                    return 0 < this.length
                        ? ((t = this[0]), e ? (t.previousElementSibling && E(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([])) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]))
                        : new l([]);
                },
                prevAll: function (e) {
                    var t = [],
                        i = this[0];
                    if (!i) return new l([]);
                    for (; i.previousElementSibling; ) {
                        var s = i.previousElementSibling;
                        (e && !E(s).is(e)) || t.push(s), (i = s);
                    }
                    return new l(t);
                },
                parent: function (e) {
                    for (var t = [], i = 0; i < this.length; i += 1) null === this[i].parentNode || (e && !E(this[i].parentNode).is(e)) || t.push(this[i].parentNode);
                    return E(n(t));
                },
                parents: function (e) {
                    for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].parentNode; s; ) (e && !E(s).is(e)) || t.push(s), (s = s.parentNode);
                    return E(n(t));
                },
                closest: function (e) {
                    var t = this;
                    return void 0 === e ? new l([]) : (t = t.is(e) ? t : t.parents(e).eq(0));
                },
                find: function (e) {
                    for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) t.push(s[a]);
                    return new l(t);
                },
                children: function (e) {
                    for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].childNodes, a = 0; a < s.length; a += 1) e ? 1 === s[a].nodeType && E(s[a]).is(e) && t.push(s[a]) : 1 === s[a].nodeType && t.push(s[a]);
                    return new l(n(t));
                },
                filter: function (e) {
                    for (var t = [], i = 0; i < this.length; i += 1) e.call(this[i], i, this[i]) && t.push(this[i]);
                    return new l(t);
                },
                remove: function () {
                    for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this;
                },
                add: function () {
                    for (var e = arguments, t = [], i = arguments.length; i--; ) t[i] = e[i];
                    for (var s = 0; s < t.length; s += 1) for (var a = E(t[s]), n = 0; n < a.length; n += 1) (this[this.length] = a[n]), (this.length += 1);
                    return this;
                },
                styles: function () {
                    return this[0] ? K.getComputedStyle(this[0], null) : {};
                },
            },
            U =
                (Object.keys(B).forEach(function (e) {
                    E.fn[e] = E.fn[e] || B[e];
                }),
                {
                    deleteProps: function (e) {
                        var t = e;
                        Object.keys(t).forEach(function (e) {
                            try {
                                t[e] = null;
                            } catch (e) {}
                            try {
                                delete t[e];
                            } catch (e) {}
                        });
                    },
                    nextTick: function (e, t) {
                        return void 0 === t && (t = 0), setTimeout(e, t);
                    },
                    now: function () {
                        return Date.now();
                    },
                    getTranslate: function (e, t) {
                        void 0 === t && (t = "x");
                        var i,
                            s,
                            a,
                            e = K.getComputedStyle(e, null);
                        return (
                            K.WebKitCSSMatrix
                                ? (6 < (s = e.transform || e.webkitTransform).split(",").length &&
                                      (s = s
                                          .split(", ")
                                          .map(function (e) {
                                              return e.replace(",", ".");
                                          })
                                          .join(", ")),
                                  (a = new K.WebKitCSSMatrix("none" === s ? "" : s)))
                                : (i = (a = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                            "x" === t && (s = K.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                            (s = "y" === t ? (K.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])) : s) || 0
                        );
                    },
                    parseUrlQuery: function (e) {
                        var t,
                            i,
                            s,
                            a,
                            n = {},
                            e = e || K.location.href;
                        if ("string" == typeof e && e.length)
                            for (
                                a = (i = (e = -1 < e.indexOf("?") ? e.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                                    return "" !== e;
                                })).length,
                                    t = 0;
                                t < a;
                                t += 1
                            )
                                (s = i[t].replace(/#\S+/g, "").split("=")), (n[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "");
                        return n;
                    },
                    isObject: function (e) {
                        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
                    },
                    extend: function () {
                        for (var e = arguments, t = [], i = arguments.length; i--; ) t[i] = e[i];
                        for (var s = Object(t[0]), a = 1; a < t.length; a += 1) {
                            var n = t[a];
                            if (null != n)
                                for (var r = Object.keys(Object(n)), o = 0, l = r.length; o < l; o += 1) {
                                    var d = r[o],
                                        h = Object.getOwnPropertyDescriptor(n, d);
                                    void 0 !== h && h.enumerable && (U.isObject(s[d]) && U.isObject(n[d]) ? U.extend(s[d], n[d]) : !U.isObject(s[d]) && U.isObject(n[d]) ? ((s[d] = {}), U.extend(s[d], n[d])) : (s[d] = n[d]));
                                }
                        }
                        return s;
                    },
                }),
            x = {
                touch: !!("ontouchstart" in K || (K.DocumentTouch && v instanceof K.DocumentTouch)),
                pointerEvents: !!K.PointerEvent && "maxTouchPoints" in K.navigator && 0 <= K.navigator.maxTouchPoints,
                observer: "MutationObserver" in K || "WebkitMutationObserver" in K,
                passiveListener: (function () {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function () {
                                e = !0;
                            },
                        });
                        K.addEventListener("testPassiveListener", null, t);
                    } catch (e) {}
                    return e;
                })(),
                gestures: "ongesturestart" in K,
            },
            e = { components: { configurable: !0 } },
            e =
                ((t.prototype.on = function (e, t, i) {
                    var s = this;
                    if ("function" != typeof t) return s;
                    var a = i ? "unshift" : "push";
                    return (
                        e.split(" ").forEach(function (e) {
                            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
                        }),
                        s
                    );
                }),
                (t.prototype.once = function (s, a, e) {
                    var n = this;
                    return "function" != typeof a ? n : ((r.f7proxy = a), n.on(s, r, e));
                    function r() {
                        for (var e = arguments, t = [], i = arguments.length; i--; ) t[i] = e[i];
                        n.off(s, r), r.f7proxy && delete r.f7proxy, a.apply(n, t);
                    }
                }),
                (t.prototype.off = function (e, s) {
                    var a = this;
                    return (
                        a.eventsListeners &&
                            e.split(" ").forEach(function (i) {
                                void 0 === s
                                    ? (a.eventsListeners[i] = [])
                                    : a.eventsListeners[i] &&
                                      a.eventsListeners[i].length &&
                                      a.eventsListeners[i].forEach(function (e, t) {
                                          (e === s || (e.f7proxy && e.f7proxy === s)) && a.eventsListeners[i].splice(t, 1);
                                      });
                            }),
                        a
                    );
                }),
                (t.prototype.emit = function () {
                    for (var e = arguments, t = [], i = arguments.length; i--; ) t[i] = e[i];
                    var s,
                        a,
                        n = this;
                    if (!n.eventsListeners) return n;
                    var r = "string" == typeof t[0] || Array.isArray(t[0]) ? ((s = t[0]), (a = t.slice(1, t.length)), n) : ((s = t[0].events), (a = t[0].data), t[0].context || n);
                    return (
                        (Array.isArray(s) ? s : s.split(" ")).forEach(function (e) {
                            var t;
                            n.eventsListeners &&
                                n.eventsListeners[e] &&
                                ((t = []),
                                n.eventsListeners[e].forEach(function (e) {
                                    t.push(e);
                                }),
                                t.forEach(function (e) {
                                    e.apply(r, a);
                                }));
                        }),
                        n
                    );
                }),
                (t.prototype.useModulesParams = function (t) {
                    var i = this;
                    i.modules &&
                        Object.keys(i.modules).forEach(function (e) {
                            e = i.modules[e];
                            e.params && U.extend(t, e.params);
                        });
                }),
                (t.prototype.useModules = function (t) {
                    void 0 === t && (t = {});
                    var s = this;
                    s.modules &&
                        Object.keys(s.modules).forEach(function (e) {
                            var i = s.modules[e],
                                e = t[e] || {};
                            i.instance &&
                                Object.keys(i.instance).forEach(function (e) {
                                    var t = i.instance[e];
                                    s[e] = "function" == typeof t ? t.bind(s) : t;
                                }),
                                i.on &&
                                    s.on &&
                                    Object.keys(i.on).forEach(function (e) {
                                        s.on(e, i.on[e]);
                                    }),
                                i.create && i.create.bind(s)(e);
                        });
                }),
                (e.components.set = function (e) {
                    this.use && this.use(e);
                }),
                (t.installModule = function (t) {
                    for (var e = arguments, i = [], s = arguments.length - 1; 0 < s--; ) i[s] = e[s + 1];
                    var a = this,
                        n = (a.prototype.modules || (a.prototype.modules = {}), t.name || Object.keys(a.prototype.modules).length + "_" + U.now());
                    return (
                        (a.prototype.modules[n] = t).proto &&
                            Object.keys(t.proto).forEach(function (e) {
                                a.prototype[e] = t.proto[e];
                            }),
                        t.static &&
                            Object.keys(t.static).forEach(function (e) {
                                a[e] = t.static[e];
                            }),
                        t.install && t.install.apply(a, i),
                        a
                    );
                }),
                (t.use = function (e) {
                    for (var t = arguments, i = [], s = arguments.length - 1; 0 < s--; ) i[s] = t[s + 1];
                    var a = this;
                    return Array.isArray(e)
                        ? (e.forEach(function (e) {
                              return a.installModule(e);
                          }),
                          a)
                        : a.installModule.apply(a, [e].concat(i));
                }),
                Object.defineProperties(t, e),
                {
                    updateSize: function () {
                        var e = this.$el,
                            t = void 0 !== this.params.width ? this.params.width : e[0].clientWidth,
                            i = void 0 !== this.params.height ? this.params.height : e[0].clientHeight;
                        (0 === t && this.isHorizontal()) ||
                            (0 === i && this.isVertical()) ||
                            ((t = t - parseInt(e.css("padding-left"), 10) - parseInt(e.css("padding-right"), 10)),
                            (i = i - parseInt(e.css("padding-top"), 10) - parseInt(e.css("padding-bottom"), 10)),
                            U.extend(this, { width: t, height: i, size: this.isHorizontal() ? t : i }));
                    },
                    updateSlides: function () {
                        var e = this,
                            t = this.params,
                            i = this.$wrapperEl,
                            s = this.size,
                            a = this.rtlTranslate,
                            B = this.wrongRTL,
                            n = this.virtual && t.virtual.enabled,
                            G = (n ? this.virtual : this).slides.length,
                            r = i.children("." + this.params.slideClass),
                            o = (n ? this.virtual.slides : r).length,
                            l = [],
                            d = [],
                            h = [];
                        function p(e) {
                            return !t.cssMode || e !== r.length - 1;
                        }
                        var c,
                            u = t.slidesOffsetBefore,
                            m = ("function" == typeof u && (u = t.slidesOffsetBefore.call(this)), t.slidesOffsetAfter),
                            n = ("function" == typeof m && (m = t.slidesOffsetAfter.call(this)), this.snapGrid.length),
                            H = this.snapGrid.length,
                            f = t.spaceBetween,
                            v = -u,
                            g = 0,
                            b = 0;
                        if (void 0 !== s) {
                            "string" == typeof f && 0 <= f.indexOf("%") && (f = (parseFloat(f.replace("%", "")) / 100) * s),
                                (this.virtualSize = -f),
                                a ? r.css({ marginLeft: "", marginTop: "" }) : r.css({ marginRight: "", marginBottom: "" }),
                                1 < t.slidesPerColumn &&
                                    ((c = Math.floor(o / t.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn),
                                    "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (c = Math.max(c, t.slidesPerView * t.slidesPerColumn)));
                            for (var N, V, w, X, y = t.slidesPerColumn, Y = c / y, F = Math.floor(o / t.slidesPerColumn), x = 0; x < o; x += 1) {
                                z = 0;
                                var E,
                                    T,
                                    S,
                                    C,
                                    M,
                                    P,
                                    z,
                                    k,
                                    I,
                                    $,
                                    q,
                                    W,
                                    j,
                                    L = r.eq(x);
                                1 < t.slidesPerColumn &&
                                    ((P = M = C = void 0),
                                    "row" === t.slidesPerColumnFill && 1 < t.slidesPerGroup
                                        ? ((S = Math.floor(x / (t.slidesPerGroup * t.slidesPerColumn))),
                                          (E = x - t.slidesPerColumn * t.slidesPerGroup * S),
                                          (T = 0 === S ? t.slidesPerGroup : Math.min(Math.ceil((o - S * y * t.slidesPerGroup) / y), t.slidesPerGroup)),
                                          (C = (M = E - (P = Math.floor(E / T)) * T + S * t.slidesPerGroup) + (P * c) / y),
                                          L.css({ "-webkit-box-ordinal-group": C, "-moz-box-ordinal-group": C, "-ms-flex-order": C, "-webkit-order": C, order: C }))
                                        : "column" === t.slidesPerColumnFill
                                        ? ((P = x - (M = Math.floor(x / y)) * y), (F < M || (M === F && P === y - 1)) && (P += 1) >= y && ((P = 0), (M += 1)))
                                        : (M = x - (P = Math.floor(x / Y)) * Y),
                                    L.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== P && t.spaceBetween && t.spaceBetween + "px")),
                                    "none" !== L.css("display") &&
                                        ("auto" === t.slidesPerView
                                            ? ((E = K.getComputedStyle(L[0], null)),
                                              (T = L[0].style.transform),
                                              (S = L[0].style.webkitTransform),
                                              T && (L[0].style.transform = "none"),
                                              S && (L[0].style.webkitTransform = "none"),
                                              (z = t.roundLengths
                                                  ? e.isHorizontal()
                                                      ? L.outerWidth(!0)
                                                      : L.outerHeight(!0)
                                                  : e.isHorizontal()
                                                  ? ((C = parseFloat(E.getPropertyValue("width"))),
                                                    (M = parseFloat(E.getPropertyValue("padding-left"))),
                                                    (P = parseFloat(E.getPropertyValue("padding-right"))),
                                                    (I = parseFloat(E.getPropertyValue("margin-left"))),
                                                    ($ = parseFloat(E.getPropertyValue("margin-right"))),
                                                    (k = E.getPropertyValue("box-sizing")) && "border-box" === k ? C + I + $ : C + M + P + I + $)
                                                  : ((k = parseFloat(E.getPropertyValue("height"))),
                                                    (I = parseFloat(E.getPropertyValue("padding-top"))),
                                                    ($ = parseFloat(E.getPropertyValue("padding-bottom"))),
                                                    (q = parseFloat(E.getPropertyValue("margin-top"))),
                                                    (W = parseFloat(E.getPropertyValue("margin-bottom"))),
                                                    (j = E.getPropertyValue("box-sizing")) && "border-box" === j ? k + q + W : k + I + $ + q + W)),
                                              T && (L[0].style.transform = T),
                                              S && (L[0].style.webkitTransform = S),
                                              t.roundLengths && (z = Math.floor(z)))
                                            : ((z = (s - (t.slidesPerView - 1) * f) / t.slidesPerView), t.roundLengths && (z = Math.floor(z)), r[x] && (e.isHorizontal() ? (r[x].style.width = z + "px") : (r[x].style.height = z + "px"))),
                                        r[x] && (r[x].swiperSlideSize = z),
                                        h.push(z),
                                        t.centeredSlides
                                            ? ((v = v + z / 2 + g / 2 + f),
                                              0 === g && 0 !== x && (v = v - s / 2 - f),
                                              0 === x && (v = v - s / 2 - f),
                                              Math.abs(v) < 0.001 && (v = 0),
                                              t.roundLengths && (v = Math.floor(v)),
                                              b % t.slidesPerGroup == 0 && l.push(v),
                                              d.push(v))
                                            : (t.roundLengths && (v = Math.floor(v)), (b - Math.min(e.params.slidesPerGroupSkip, b)) % e.params.slidesPerGroup == 0 && l.push(v), d.push(v), (v = v + z + f)),
                                        (e.virtualSize += z + f),
                                        (g = z),
                                        (b += 1));
                            }
                            if (
                                ((this.virtualSize = Math.max(this.virtualSize, s) + m),
                                a && B && ("slide" === t.effect || "coverflow" === t.effect) && i.css({ width: this.virtualSize + t.spaceBetween + "px" }),
                                t.setWrapperSize && (this.isHorizontal() ? i.css({ width: this.virtualSize + t.spaceBetween + "px" }) : i.css({ height: this.virtualSize + t.spaceBetween + "px" })),
                                1 < t.slidesPerColumn &&
                                    ((this.virtualSize = (z + t.spaceBetween) * c),
                                    (this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                                    this.isHorizontal() ? i.css({ width: this.virtualSize + t.spaceBetween + "px" }) : i.css({ height: this.virtualSize + t.spaceBetween + "px" }),
                                    t.centeredSlides))
                            ) {
                                for (var O = [], D = 0; D < l.length; D += 1) {
                                    var R = l[D];
                                    t.roundLengths && (R = Math.floor(R)), l[D] < e.virtualSize + l[0] && O.push(R);
                                }
                                l = O;
                            }
                            if (!t.centeredSlides) {
                                O = [];
                                for (var A = 0; A < l.length; A += 1) {
                                    var Q = l[A];
                                    t.roundLengths && (Q = Math.floor(Q)), l[A] <= e.virtualSize - s && O.push(Q);
                                }
                                (l = O), 1 < Math.floor(this.virtualSize - s) - Math.floor(l[l.length - 1]) && l.push(this.virtualSize - s);
                            }
                            0 === l.length && (l = [0]),
                                0 !== t.spaceBetween && (this.isHorizontal() ? (a ? r.filter(p).css({ marginLeft: f + "px" }) : r.filter(p).css({ marginRight: f + "px" })) : r.filter(p).css({ marginBottom: f + "px" })),
                                t.centeredSlides &&
                                    t.centeredSlidesBounds &&
                                    ((N = 0),
                                    h.forEach(function (e) {
                                        N += e + (t.spaceBetween || 0);
                                    }),
                                    (V = (N -= t.spaceBetween) - s),
                                    (l = l.map(function (e) {
                                        return e < 0 ? -u : V < e ? V + m : e;
                                    }))),
                                t.centerInsufficientSlides &&
                                    ((w = 0),
                                    h.forEach(function (e) {
                                        w += e + (t.spaceBetween || 0);
                                    }),
                                    (w -= t.spaceBetween) < s &&
                                        ((X = (s - w) / 2),
                                        l.forEach(function (e, t) {
                                            l[t] = e - X;
                                        }),
                                        d.forEach(function (e, t) {
                                            d[t] = e + X;
                                        }))),
                                U.extend(this, { slides: r, snapGrid: l, slidesGrid: d, slidesSizesGrid: h }),
                                o !== G && this.emit("slidesLengthChange"),
                                l.length !== n && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")),
                                d.length !== H && this.emit("slidesGridLengthChange"),
                                (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset();
                        }
                    },
                    updateAutoHeight: function (e) {
                        var t,
                            i,
                            s = [],
                            a = 0;
                        if (("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && 1 < this.params.slidesPerView))
                            if (this.params.centeredSlides)
                                this.visibleSlides.each(function (e, t) {
                                    s.push(t);
                                });
                            else
                                for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                                    var n = this.activeIndex + t;
                                    if (n > this.slides.length) break;
                                    s.push(this.slides.eq(n)[0]);
                                }
                        else s.push(this.slides.eq(this.activeIndex)[0]);
                        for (t = 0; t < s.length; t += 1) void 0 !== s[t] && (a = a < (i = s[t].offsetHeight) ? i : a);
                        a && this.$wrapperEl.css("height", a + "px");
                    },
                    updateSlidesOffset: function () {
                        for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
                    },
                    updateSlidesProgress: function (e) {
                        var t = this,
                            i = (void 0 === e && (e = (this && this.translate) || 0), this.params),
                            s = this.slides,
                            a = this.rtlTranslate;
                        if (0 !== s.length) {
                            void 0 === s[0].swiperSlideOffset && this.updateSlidesOffset();
                            var n = a ? e : -e;
                            s.removeClass(i.slideVisibleClass), (this.visibleSlidesIndexes = []), (this.visibleSlides = []);
                            for (var r = 0; r < s.length; r += 1) {
                                var o,
                                    l,
                                    d = s[r],
                                    h = (n + (i.centeredSlides ? t.minTranslate() : 0) - d.swiperSlideOffset) / (d.swiperSlideSize + i.spaceBetween);
                                (i.watchSlidesVisibility || (i.centeredSlides && i.autoHeight)) &&
                                    ((l = (o = -(n - d.swiperSlideOffset)) + t.slidesSizesGrid[r]),
                                    ((0 <= o && o < t.size - 1) || (1 < l && l <= t.size) || (o <= 0 && l >= t.size)) && (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(r), s.eq(r).addClass(i.slideVisibleClass))),
                                    (d.progress = a ? -h : h);
                            }
                            this.visibleSlides = E(this.visibleSlides);
                        }
                    },
                    updateProgress: function (e) {
                        void 0 === e && ((t = this.rtlTranslate ? -1 : 1), (e = (this && this.translate && this.translate * t) || 0));
                        var t = this.params,
                            i = this.maxTranslate() - this.minTranslate(),
                            s = this.progress,
                            a = this.isBeginning,
                            n = a,
                            r = (o = this.isEnd),
                            o = 0 == i ? (a = !(s = 0)) : ((a = (s = (e - this.minTranslate()) / i) <= 0), 1 <= s);
                        U.extend(this, { progress: s, isBeginning: a, isEnd: o }),
                            (t.watchSlidesProgress || t.watchSlidesVisibility || (t.centeredSlides && t.autoHeight)) && this.updateSlidesProgress(e),
                            a && !n && this.emit("reachBeginning toEdge"),
                            o && !r && this.emit("reachEnd toEdge"),
                            ((n && !a) || (r && !o)) && this.emit("fromEdge"),
                            this.emit("progress", s);
                    },
                    updateSlidesClasses: function () {
                        var e = this.slides,
                            t = this.params,
                            i = this.$wrapperEl,
                            s = this.activeIndex,
                            a = this.realIndex,
                            n = this.virtual && t.virtual.enabled,
                            s =
                                (e.removeClass(t.slideActiveClass + " " + t.slideNextClass + " " + t.slidePrevClass + " " + t.slideDuplicateActiveClass + " " + t.slideDuplicateNextClass + " " + t.slideDuplicatePrevClass),
                                (n = n ? this.$wrapperEl.find("." + t.slideClass + '[data-swiper-slide-index="' + s + '"]') : e.eq(s)).addClass(t.slideActiveClass),
                                t.loop &&
                                    (n.hasClass(t.slideDuplicateClass)
                                        ? i.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]')
                                        : i.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]')
                                    ).addClass(t.slideDuplicateActiveClass),
                                n
                                    .nextAll("." + t.slideClass)
                                    .eq(0)
                                    .addClass(t.slideNextClass)),
                            a =
                                (t.loop && 0 === s.length && (s = e.eq(0)).addClass(t.slideNextClass),
                                n
                                    .prevAll("." + t.slideClass)
                                    .eq(0)
                                    .addClass(t.slidePrevClass));
                        t.loop && 0 === a.length && (a = e.eq(-1)).addClass(t.slidePrevClass),
                            t.loop &&
                                ((s.hasClass(t.slideDuplicateClass)
                                    ? i.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]')
                                    : i.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]')
                                ).addClass(t.slideDuplicateNextClass),
                                (a.hasClass(t.slideDuplicateClass)
                                    ? i.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]')
                                    : i.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]')
                                ).addClass(t.slideDuplicatePrevClass));
                    },
                    updateActiveIndex: function (e) {
                        var t = this.rtlTranslate ? this.translate : -this.translate,
                            i = this.slidesGrid,
                            s = this.snapGrid,
                            a = this.params,
                            n = this.activeIndex,
                            r = this.realIndex,
                            o = this.snapIndex,
                            l = e;
                        if (void 0 === l) {
                            for (var d = 0; d < i.length; d += 1) void 0 !== i[d + 1] ? (t >= i[d] && t < i[d + 1] - (i[d + 1] - i[d]) / 2 ? (l = d) : t >= i[d] && t < i[d + 1] && (l = d + 1)) : t >= i[d] && (l = d);
                            a.normalizeSlideIndex && (l < 0 || void 0 === l) && (l = 0);
                        }
                        (e = 0 <= s.indexOf(t) ? s.indexOf(t) : (e = Math.min(a.slidesPerGroupSkip, l)) + Math.floor((l - e) / a.slidesPerGroup)) >= s.length && (e = s.length - 1),
                            l !== n
                                ? ((a = parseInt(this.slides.eq(l).attr("data-swiper-slide-index") || l, 10)),
                                  U.extend(this, { snapIndex: e, realIndex: a, previousIndex: n, activeIndex: l }),
                                  this.emit("activeIndexChange"),
                                  this.emit("snapIndexChange"),
                                  r !== a && this.emit("realIndexChange"),
                                  (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange"))
                                : e !== o && ((this.snapIndex = e), this.emit("snapIndexChange"));
                    },
                    updateClickedSlide: function (e) {
                        var t = this.params,
                            i = E(e.target).closest("." + t.slideClass)[0],
                            s = !1;
                        if (i) for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0);
                        if (!i || !s) return (this.clickedSlide = void 0), void (this.clickedIndex = void 0);
                        (this.clickedSlide = i),
                            this.virtual && this.params.virtual.enabled ? (this.clickedIndex = parseInt(E(i).attr("data-swiper-slide-index"), 10)) : (this.clickedIndex = E(i).index()),
                            t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
                    },
                }),
            G = {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        i = this.rtlTranslate,
                        s = this.translate,
                        a = this.$wrapperEl;
                    if (t.virtualTranslate) return i ? -s : s;
                    if (t.cssMode) return s;
                    t = U.getTranslate(a[0], e);
                    return (t = i ? -t : t) || 0;
                },
                setTranslate: function (e, t) {
                    var i = this.rtlTranslate,
                        s = this.params,
                        a = this.$wrapperEl,
                        n = this.wrapperEl,
                        r = this.progress,
                        o = 0,
                        l = 0,
                        i =
                            (this.isHorizontal() ? (o = i ? -e : e) : (l = e),
                            s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                            s.cssMode ? (n[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l) : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
                            (this.previousTranslate = this.translate),
                            (this.translate = this.isHorizontal() ? o : l),
                            this.maxTranslate() - this.minTranslate());
                    (0 == i ? 0 : (e - this.minTranslate()) / i) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
                },
                minTranslate: function () {
                    return -this.snapGrid[0];
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1];
                },
                translateTo: function (e, t, i, s, a) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                    var n = this,
                        r = n.params,
                        o = n.wrapperEl;
                    if (n.animating && r.preventInteractionOnTransition) return !1;
                    var l = n.minTranslate(),
                        d = n.maxTranslate();
                    return (
                        n.updateProgress((l = s && l < e ? l : s && e < d ? d : e)),
                        r.cssMode
                            ? ((s = n.isHorizontal()), 0 !== t && o.scrollTo ? o.scrollTo((((d = {})[s ? "left" : "top"] = -l), (d.behavior = "smooth"), d)) : (o[s ? "scrollLeft" : "scrollTop"] = -l))
                            : 0 === t
                            ? (n.setTransition(0), n.setTranslate(l), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd")))
                            : (n.setTransition(t),
                              n.setTranslate(l),
                              i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")),
                              n.animating ||
                                  ((n.animating = !0),
                                  n.onTranslateToWrapperTransitionEnd ||
                                      (n.onTranslateToWrapperTransitionEnd = function (e) {
                                          n &&
                                              !n.destroyed &&
                                              e.target === this &&
                                              (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                                              n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd),
                                              (n.onTranslateToWrapperTransitionEnd = null),
                                              delete n.onTranslateToWrapperTransitionEnd,
                                              i && n.emit("transitionEnd"));
                                      }),
                                  n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                                  n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))),
                        !0
                    );
                },
            },
            H = {
                slideTo: function (e, t, i, s) {
                    void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var a = this,
                        n = (e = void 0 === e ? 0 : e),
                        e = (n < 0 && (n = 0), a.params),
                        r = a.snapGrid,
                        o = a.slidesGrid,
                        l = a.previousIndex,
                        d = a.activeIndex,
                        h = a.rtlTranslate,
                        p = a.wrapperEl;
                    if (a.animating && e.preventInteractionOnTransition) return !1;
                    var c = Math.min(a.params.slidesPerGroupSkip, n),
                        c = c + Math.floor((n - c) / a.params.slidesPerGroup);
                    c >= r.length && (c = r.length - 1), (d || e.initialSlide || 0) === (l || 0) && i && a.emit("beforeSlideChangeStart");
                    var u,
                        m = -r[c];
                    if ((a.updateProgress(m), e.normalizeSlideIndex)) for (var f = 0; f < o.length; f += 1) -Math.floor(100 * m) >= Math.floor(100 * o[f]) && (n = f);
                    if (a.initialized && n !== d) {
                        if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
                        if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (d || 0) !== n) return !1;
                    }
                    return (
                        (u = d < n ? "next" : n < d ? "prev" : "reset"),
                        (h && -m === a.translate) || (!h && m === a.translate)
                            ? (a.updateActiveIndex(n), e.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== e.effect && a.setTranslate(m), "reset" != u && (a.transitionStart(i, u), a.transitionEnd(i, u)), !1)
                            : (e.cssMode
                                  ? ((l = a.isHorizontal()),
                                    (r = -m),
                                    h && (r = p.scrollWidth - p.offsetWidth - r),
                                    0 !== t && p.scrollTo ? p.scrollTo((((c = {})[l ? "left" : "top"] = r), (c.behavior = "smooth"), c)) : (p[l ? "scrollLeft" : "scrollTop"] = r))
                                  : 0 === t
                                  ? (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, u), a.transitionEnd(i, u))
                                  : (a.setTransition(t),
                                    a.setTranslate(m),
                                    a.updateActiveIndex(n),
                                    a.updateSlidesClasses(),
                                    a.emit("beforeTransitionStart", t, s),
                                    a.transitionStart(i, u),
                                    a.animating ||
                                        ((a.animating = !0),
                                        a.onSlideToWrapperTransitionEnd ||
                                            (a.onSlideToWrapperTransitionEnd = function (e) {
                                                a &&
                                                    !a.destroyed &&
                                                    e.target === this &&
                                                    (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                                    a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                                                    (a.onSlideToWrapperTransitionEnd = null),
                                                    delete a.onSlideToWrapperTransitionEnd,
                                                    a.transitionEnd(i, u));
                                            }),
                                        a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                        a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))),
                              !0)
                    );
                },
                slideToLoop: function (e, t, i, s) {
                    void 0 === t && (t = this.params.speed);
                    e = void 0 === e ? 0 : e;
                    return this.params.loop && (e += this.loopedSlides), this.slideTo(e, t, (i = void 0 === i ? !0 : i), s);
                },
                slideNext: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.params,
                        a = this.animating,
                        n = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                    if (s.loop) {
                        if (a) return !1;
                        this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                    }
                    return this.slideTo(this.activeIndex + n, e, t, i);
                },
                slidePrev: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.params,
                        a = this.animating,
                        n = this.snapGrid,
                        r = this.slidesGrid,
                        o = this.rtlTranslate;
                    if (s.loop) {
                        if (a) return !1;
                        this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                    }
                    function l(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                    }
                    var d,
                        h = l(o ? this.translate : -this.translate),
                        a = n.map(l),
                        p = (r.map(l), n[a.indexOf(h)], n[a.indexOf(h) - 1]);
                    return (
                        void 0 === p &&
                            s.cssMode &&
                            n.forEach(function (e) {
                                !p && e <= h && (p = e);
                            }),
                        void 0 !== p && (d = r.indexOf(p)) < 0 && (d = this.activeIndex - 1),
                        this.slideTo(d, e, t, i)
                    );
                },
                slideReset: function (e, t, i) {
                    return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, (t = void 0 === t ? !0 : t), i);
                },
                slideToClosest: function (e, t, i, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = 0.5);
                    var a,
                        n = this.activeIndex,
                        r = Math.min(this.params.slidesPerGroupSkip, n),
                        r = r + Math.floor((n - r) / this.params.slidesPerGroup),
                        o = this.rtlTranslate ? this.translate : -this.translate;
                    return (
                        o >= this.snapGrid[r]
                            ? o - (a = this.snapGrid[r]) > (this.snapGrid[r + 1] - a) * s && (n += this.params.slidesPerGroup)
                            : o - (a = this.snapGrid[r - 1]) <= (this.snapGrid[r] - a) * s && (n -= this.params.slidesPerGroup),
                        (n = Math.max(n, 0)),
                        (n = Math.min(n, this.slidesGrid.length - 1)),
                        this.slideTo(n, e, t, i)
                    );
                },
                slideToClickedSlide: function () {
                    var e,
                        t = this,
                        i = t.params,
                        s = t.$wrapperEl,
                        a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                        n = t.clickedIndex;
                    i.loop
                        ? t.animating ||
                          ((e = parseInt(E(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                          i.centeredSlides
                              ? n < t.loopedSlides - a / 2 || n > t.slides.length - t.loopedSlides + a / 2
                                  ? (t.loopFix(),
                                    (n = s
                                        .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                                        .eq(0)
                                        .index()),
                                    U.nextTick(function () {
                                        t.slideTo(n);
                                    }))
                                  : t.slideTo(n)
                              : n > t.slides.length - a
                              ? (t.loopFix(),
                                (n = s
                                    .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                                    .eq(0)
                                    .index()),
                                U.nextTick(function () {
                                    t.slideTo(n);
                                }))
                              : t.slideTo(n))
                        : t.slideTo(n);
                },
            },
            N = {
                loopCreate: function () {
                    var s = this,
                        e = s.params,
                        t = s.$wrapperEl,
                        a = (t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove(), t.children("." + e.slideClass));
                    if (e.loopFillGroupWithBlank) {
                        var i = e.slidesPerGroup - (a.length % e.slidesPerGroup);
                        if (i !== e.slidesPerGroup) {
                            for (var n = 0; n < i; n += 1) {
                                var r = E(v.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                                t.append(r);
                            }
                            a = t.children("." + e.slideClass);
                        }
                    }
                    "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = a.length),
                        (s.loopedSlides = Math.ceil(parseFloat(e.loopedSlides || e.slidesPerView, 10))),
                        (s.loopedSlides += e.loopAdditionalSlides),
                        s.loopedSlides > a.length && (s.loopedSlides = a.length);
                    var o = [],
                        l = [];
                    a.each(function (e, t) {
                        var i = E(t);
                        e < s.loopedSlides && l.push(t), e < a.length && e >= a.length - s.loopedSlides && o.push(t), i.attr("data-swiper-slide-index", e);
                    });
                    for (var d = 0; d < l.length; d += 1) t.append(E(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
                    for (var h = o.length - 1; 0 <= h; --h) t.prepend(E(o[h].cloneNode(!0)).addClass(e.slideDuplicateClass));
                },
                loopFix: function () {
                    this.emit("beforeLoopFix");
                    var e,
                        t = this.activeIndex,
                        i = this.slides,
                        s = this.loopedSlides,
                        a = this.allowSlidePrev,
                        n = this.allowSlideNext,
                        r = this.snapGrid,
                        o = this.rtlTranslate,
                        r = ((this.allowSlidePrev = !0), (this.allowSlideNext = !0), -r[t] - this.getTranslate());
                    t < s
                        ? ((e = i.length - 3 * s + t), this.slideTo((e += s), 0, !1, !0) && 0 != r && this.setTranslate((o ? -this.translate : this.translate) - r))
                        : t >= i.length - s && ((e = -i.length + t + s), this.slideTo((e += s), 0, !1, !0) && 0 != r && this.setTranslate((o ? -this.translate : this.translate) - r)),
                        (this.allowSlidePrev = a),
                        (this.allowSlideNext = n),
                        this.emit("loopFix");
                },
                loopDestroy: function () {
                    var e = this.$wrapperEl,
                        t = this.params,
                        i = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
                },
            },
            V = {
                setGrabCursor: function (e) {
                    var t;
                    x.touch ||
                        !this.params.simulateTouch ||
                        (this.params.watchOverflow && this.isLocked) ||
                        this.params.cssMode ||
                        (((t = this.el).style.cursor = "move"), (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (t.style.cursor = e ? "grabbing" : "grab"));
                },
                unsetGrabCursor: function () {
                    x.touch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode || (this.el.style.cursor = "");
                },
            },
            X = {
                appendSlide: function (e) {
                    var t = this.$wrapperEl,
                        i = this.params;
                    if ((i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                    else t.append(e);
                    i.loop && this.loopCreate(), (i.observer && x.observer) || this.update();
                },
                prependSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex,
                        a = (t.loop && this.loopDestroy(), s + 1);
                    if ("object" == typeof e && "length" in e) {
                        for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                        a = s + e.length;
                    } else i.prepend(e);
                    t.loop && this.loopCreate(), (t.observer && x.observer) || this.update(), this.slideTo(a, 0, !1);
                },
                addSlide: function (e, t) {
                    var i = this.$wrapperEl,
                        s = this.params,
                        a = this.activeIndex,
                        n = (s.loop && ((a -= this.loopedSlides), this.loopDestroy(), (this.slides = i.children("." + s.slideClass))), this.slides.length);
                    if (e <= 0) this.prependSlide(t);
                    else if (n <= e) this.appendSlide(t);
                    else {
                        for (var r = e < a ? a + 1 : a, o = [], l = n - 1; e <= l; --l) {
                            var d = this.slides.eq(l);
                            d.remove(), o.unshift(d);
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
                            r = e < a ? a + t.length : a;
                        } else i.append(t);
                        for (var p = 0; p < o.length; p += 1) i.append(o[p]);
                        s.loop && this.loopCreate(), (s.observer && x.observer) || this.update(), s.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
                    }
                },
                removeSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    t.loop && ((s -= this.loopedSlides), this.loopDestroy(), (this.slides = i.children("." + t.slideClass)));
                    var a,
                        n = s;
                    if ("object" == typeof e && "length" in e) {
                        for (var r = 0; r < e.length; r += 1) (a = e[r]), this.slides[a] && this.slides.eq(a).remove(), a < n && --n;
                        n = Math.max(n, 0);
                    } else this.slides[(a = e)] && this.slides.eq(a).remove(), a < n && --n, (n = Math.max(n, 0));
                    t.loop && this.loopCreate(), (t.observer && x.observer) || this.update(), t.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
                },
                removeAllSlides: function () {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e);
                },
            },
            o =
                ((r = K.navigator.platform),
                (O = K.navigator.userAgent),
                (i = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    edge: !1,
                    ie: !1,
                    firefox: !1,
                    macos: !1,
                    windows: !1,
                    cordova: !(!K.cordova && !K.phonegap),
                    phonegap: !(!K.cordova && !K.phonegap),
                    electron: !1,
                }),
                (p = K.screen.width),
                (u = K.screen.height),
                (m = O.match(/(Android);?[\s\/]+([\d.]+)?/)),
                (w = O.match(/(iPad).*OS\s([\d_]+)/)),
                (y = O.match(/(iPod)(.*OS\s([\d_]+))?/)),
                (g = !w && O.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
                (Q = 0 <= O.indexOf("MSIE ") || 0 <= O.indexOf("Trident/")),
                (d = 0 <= O.indexOf("Edge/")),
                (_ = 0 <= O.indexOf("Gecko/") && 0 <= O.indexOf("Firefox/")),
                (a = "Win32" === r),
                (A = 0 <= O.toLowerCase().indexOf("electron")),
                (r = "MacIntel" === r),
                !w && r && x.touch && ((1024 === p && 1366 === u) || (834 === p && 1194 === u) || (834 === p && 1112 === u) || (768 === p && 1024 === u)) && ((w = O.match(/(Version)\/([\d.]+)/)), (r = !1)),
                (i.ie = Q),
                (i.edge = d),
                (i.firefox = _),
                m && !a && ((i.os = "android"), (i.osVersion = m[2]), (i.android = !0), (i.androidChrome = 0 <= O.toLowerCase().indexOf("chrome"))),
                (w || g || y) && ((i.os = "ios"), (i.ios = !0)),
                g && !y && ((i.osVersion = g[2].replace(/_/g, ".")), (i.iphone = !0)),
                w && ((i.osVersion = w[2].replace(/_/g, ".")), (i.ipad = !0)),
                y && ((i.osVersion = y[3] ? y[3].replace(/_/g, ".") : null), (i.ipod = !0)),
                i.ios && i.osVersion && 0 <= O.indexOf("Version/") && "10" === i.osVersion.split(".")[0] && (i.osVersion = O.toLowerCase().split("version/")[1].split(" ")[0]),
                (i.webView = !(!(g || w || y) || (!O.match(/.*AppleWebKit(?!.*Safari)/i) && !K.navigator.standalone)) || (K.matchMedia && K.matchMedia("(display-mode: standalone)").matches)),
                (i.webview = i.webView),
                (i.standalone = i.webView),
                (i.desktop = !(i.ios || i.android) || A),
                i.desktop && ((i.electron = A), (i.macos = r), (i.windows = a), i.macos && (i.os = "macos"), i.windows && (i.os = "windows")),
                (i.pixelRatio = K.devicePixelRatio || 1),
                i);
        function Y() {
            var e,
                t,
                i = this.params,
                s = this.el;
            (s && 0 === s.offsetWidth) ||
                (i.breakpoints && this.setBreakpoint(),
                (s = this.allowSlideNext),
                (e = this.allowSlidePrev),
                (t = this.snapGrid),
                (this.allowSlideNext = !0),
                (this.allowSlidePrev = !0),
                this.updateSize(),
                this.updateSlides(),
                this.updateSlidesClasses(),
                ("auto" === i.slidesPerView || 1 < i.slidesPerView) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
                this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
                (this.allowSlidePrev = e),
                (this.allowSlideNext = s),
                this.params.watchOverflow && t !== this.snapGrid && this.checkOverflow());
        }
        var F = !1;
        function q() {}
        var d,
            h,
            p,
            W = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: 0.02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: 0.5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: 0.85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
            },
            j = {
                update: e,
                translate: G,
                transition: {
                    setTransition: function (e, t) {
                        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
                    },
                    transitionStart: function (e, t) {
                        void 0 === e && (e = !0);
                        var i = this.activeIndex,
                            s = this.params,
                            a = this.previousIndex;
                        s.cssMode ||
                            (s.autoHeight && this.updateAutoHeight(),
                            (s = (s = t) || (a < i ? "next" : i < a ? "prev" : "reset")),
                            this.emit("transitionStart"),
                            e && i !== a && ("reset" === s ? this.emit("slideResetTransitionStart") : (this.emit("slideChangeTransitionStart"), "next" === s ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart"))));
                    },
                    transitionEnd: function (e, t) {
                        void 0 === e && (e = !0);
                        var i = this.activeIndex,
                            s = this.previousIndex,
                            a = this.params;
                        (this.animating = !1),
                            a.cssMode ||
                                (this.setTransition(0),
                                (a = (a = t) || (s < i ? "next" : i < s ? "prev" : "reset")),
                                this.emit("transitionEnd"),
                                e && i !== s && ("reset" === a ? this.emit("slideResetTransitionEnd") : (this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd"))));
                    },
                },
                slide: H,
                loop: N,
                grabCursor: V,
                manipulation: X,
                events: {
                    attachEvents: function () {
                        var e,
                            t = this.params,
                            i = this.touchEvents,
                            s = this.el,
                            a = this.wrapperEl,
                            n =
                                ((this.onTouchStart = function (e) {
                                    var t,
                                        i,
                                        s,
                                        a,
                                        n,
                                        r = this.touchEventsData,
                                        o = this.params,
                                        l = this.touches;
                                    (this.animating && o.preventInteractionOnTransition) ||
                                        ((t = E((e = (e = e).originalEvent ? e.originalEvent : e).target)),
                                        ("wrapper" === o.touchEventsTarget && !t.closest(this.wrapperEl).length) ||
                                            ((r.isTouchEvent = "touchstart" === e.type), (!r.isTouchEvent && "which" in e && 3 === e.which) || (!r.isTouchEvent && "button" in e && 0 < e.button) || (r.isTouched && r.isMoved)) ||
                                            (o.noSwiping && t.closest(o.noSwipingSelector || "." + o.noSwipingClass)[0]
                                                ? (this.allowClick = !0)
                                                : (o.swipeHandler && !t.closest(o.swipeHandler)[0]) ||
                                                  ((l.currentX = ("touchstart" === e.type ? e.targetTouches[0] : e).pageX),
                                                  (l.currentY = ("touchstart" === e.type ? e.targetTouches[0] : e).pageY),
                                                  (i = l.currentX),
                                                  (s = l.currentY),
                                                  (a = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection),
                                                  (n = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold),
                                                  (a && (i <= n || i >= K.screen.width - n)) ||
                                                      (U.extend(r, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                                                      (l.startX = i),
                                                      (l.startY = s),
                                                      (r.touchStartTime = U.now()),
                                                      (this.allowClick = !0),
                                                      this.updateSize(),
                                                      (this.swipeDirection = void 0),
                                                      0 < o.threshold && (r.allowThresholdMove = !1),
                                                      "touchstart" !== e.type &&
                                                          ((a = !0),
                                                          t.is(r.formElements) && (a = !1),
                                                          v.activeElement && E(v.activeElement).is(r.formElements) && v.activeElement !== t[0] && v.activeElement.blur(),
                                                          (n = a && this.allowTouchMove && o.touchStartPreventDefault),
                                                          (o.touchStartForcePreventDefault || n) && e.preventDefault()),
                                                      this.emit("touchStart", e)))));
                                }.bind(this)),
                                (this.onTouchMove = function (e) {
                                    var t = this.touchEventsData,
                                        i = this.params,
                                        s = this.touches,
                                        a = this.rtlTranslate;
                                    if ((e.originalEvent && (e = e.originalEvent), t.isTouched)) {
                                        if (!t.isTouchEvent || "touchmove" === e.type) {
                                            var n = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]),
                                                r = ("touchmove" === e.type ? n : e).pageX,
                                                n = ("touchmove" === e.type ? n : e).pageY;
                                            if (e.preventedByNestedSwiper) return (s.startX = r), void (s.startY = n);
                                            if (!this.allowTouchMove) return (this.allowClick = !1), void (t.isTouched && (U.extend(s, { startX: r, startY: n, currentX: r, currentY: n }), (t.touchStartTime = U.now())));
                                            if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                                if (this.isVertical()) {
                                                    if ((n < s.startY && this.translate <= this.maxTranslate()) || (n > s.startY && this.translate >= this.minTranslate())) return (t.isTouched = !1), void (t.isMoved = !1);
                                                } else if ((r < s.startX && this.translate <= this.maxTranslate()) || (r > s.startX && this.translate >= this.minTranslate())) return;
                                            if (t.isTouchEvent && v.activeElement && e.target === v.activeElement && E(e.target).is(t.formElements)) return (t.isMoved = !0), void (this.allowClick = !1);
                                            if ((t.allowTouchCallbacks && this.emit("touchMove", e), !(e.targetTouches && 1 < e.targetTouches.length))) {
                                                (s.currentX = r), (s.currentY = n);
                                                (r = s.currentX - s.startX), (n = s.currentY - s.startY);
                                                if (!(this.params.threshold && Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2)) < this.params.threshold))
                                                    if (
                                                        (void 0 === t.isScrolling &&
                                                            ((this.isHorizontal() && s.currentY === s.startY) || (this.isVertical() && s.currentX === s.startX)
                                                                ? (t.isScrolling = !1)
                                                                : 25 <= r * r + n * n && ((o = (180 * Math.atan2(Math.abs(n), Math.abs(r))) / Math.PI), (t.isScrolling = this.isHorizontal() ? o > i.touchAngle : 90 - o > i.touchAngle))),
                                                        t.isScrolling && this.emit("touchMoveOpposite", e),
                                                        void 0 !== t.startMoving || (s.currentX === s.startX && s.currentY === s.startY) || (t.startMoving = !0),
                                                        t.isScrolling)
                                                    )
                                                        t.isTouched = !1;
                                                    else if (t.startMoving) {
                                                        (this.allowClick = !1),
                                                            !i.cssMode && e.cancelable && e.preventDefault(),
                                                            i.touchMoveStopPropagation && !i.nested && e.stopPropagation(),
                                                            t.isMoved ||
                                                                (i.loop && this.loopFix(),
                                                                (t.startTranslate = this.getTranslate()),
                                                                this.setTransition(0),
                                                                this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                                                (t.allowMomentumBounce = !1),
                                                                !i.grabCursor || (!0 !== this.allowSlideNext && !0 !== this.allowSlidePrev) || this.setGrabCursor(!0),
                                                                this.emit("sliderFirstMove", e)),
                                                            this.emit("sliderMove", e),
                                                            (t.isMoved = !0);
                                                        var o = this.isHorizontal() ? r : n,
                                                            r = ((s.diff = o), (o *= i.touchRatio), (this.swipeDirection = 0 < (o = a ? -o : o) ? "prev" : "next"), (t.currentTranslate = o + t.startTranslate), !0),
                                                            n = i.resistanceRatio;
                                                        if (
                                                            (i.touchReleaseOnEdges && (n = 0),
                                                            0 < o && t.currentTranslate > this.minTranslate()
                                                                ? ((r = !1), i.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + o, n)))
                                                                : o < 0 &&
                                                                  t.currentTranslate < this.maxTranslate() &&
                                                                  ((r = !1), i.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - o, n))),
                                                            r && (e.preventedByNestedSwiper = !0),
                                                            !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate),
                                                            !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate),
                                                            0 < i.threshold)
                                                        ) {
                                                            if (!(Math.abs(o) > i.threshold || t.allowThresholdMove)) return void (t.currentTranslate = t.startTranslate);
                                                            if (!t.allowThresholdMove)
                                                                return (
                                                                    (t.allowThresholdMove = !0),
                                                                    (s.startX = s.currentX),
                                                                    (s.startY = s.currentY),
                                                                    (t.currentTranslate = t.startTranslate),
                                                                    void (s.diff = this.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                                                );
                                                        }
                                                        i.followFinger &&
                                                            !i.cssMode &&
                                                            ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()),
                                                            i.freeMode &&
                                                                (0 === t.velocities.length && t.velocities.push({ position: s[this.isHorizontal() ? "startX" : "startY"], time: t.touchStartTime }),
                                                                t.velocities.push({ position: s[this.isHorizontal() ? "currentX" : "currentY"], time: U.now() })),
                                                            this.updateProgress(t.currentTranslate),
                                                            this.setTranslate(t.currentTranslate));
                                                    }
                                            }
                                        }
                                    } else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", e);
                                }.bind(this)),
                                (this.onTouchEnd = function (e) {
                                    var t = this,
                                        i = t.touchEventsData,
                                        s = t.params,
                                        a = t.touches,
                                        n = t.rtlTranslate,
                                        r = t.$wrapperEl,
                                        o = t.slidesGrid,
                                        l = t.snapGrid;
                                    if ((e.originalEvent && (e = e.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", e), (i.allowTouchCallbacks = !1), !i.isTouched))
                                        return i.isMoved && s.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
                                    s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                                    var d,
                                        h = (f = U.now()) - i.touchStartTime;
                                    if (
                                        (t.allowClick && (t.updateClickedSlide(e), t.emit("tap click", e), h < 300 && f - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", e)),
                                        (i.lastClickTime = U.now()),
                                        U.nextTick(function () {
                                            t.destroyed || (t.allowClick = !0);
                                        }),
                                        !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
                                    )
                                        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
                                    if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (d = s.followFinger ? (n ? t.translate : -t.translate) : -i.currentTranslate), !s.cssMode))
                                        if (s.freeMode)
                                            if (d < -t.minTranslate()) t.slideTo(t.activeIndex);
                                            else if (d > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                                            else {
                                                if (s.freeModeMomentum) {
                                                    1 < i.velocities.length
                                                        ? ((f = i.velocities.pop()),
                                                          (a = i.velocities.pop()),
                                                          (p = f.position - a.position),
                                                          (a = f.time - a.time),
                                                          (t.velocity = p / a),
                                                          (t.velocity /= 2),
                                                          Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
                                                          (150 < a || 300 < U.now() - f.time) && (t.velocity = 0))
                                                        : (t.velocity = 0),
                                                        (t.velocity *= s.freeModeMomentumVelocityRatio),
                                                        (i.velocities.length = 0);
                                                    var p = 1e3 * s.freeModeMomentumRatio,
                                                        a = t.velocity * p,
                                                        c = t.translate + a;
                                                    n && (c = -c);
                                                    var u,
                                                        m,
                                                        f = !1,
                                                        a = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                                                    if (c < t.maxTranslate())
                                                        s.freeModeMomentumBounce ? (c + t.maxTranslate() < -a && (c = t.maxTranslate() - a), (u = t.maxTranslate()), (i.allowMomentumBounce = f = !0)) : (c = t.maxTranslate()),
                                                            s.loop && s.centeredSlides && (m = !0);
                                                    else if (c > t.minTranslate())
                                                        s.freeModeMomentumBounce ? (c - t.minTranslate() > a && (c = t.minTranslate() + a), (u = t.minTranslate()), (i.allowMomentumBounce = f = !0)) : (c = t.minTranslate()),
                                                            s.loop && s.centeredSlides && (m = !0);
                                                    else if (s.freeModeSticky) {
                                                        for (var v, g = 0; g < l.length; g += 1)
                                                            if (l[g] > -c) {
                                                                v = g;
                                                                break;
                                                            }
                                                        c = -(Math.abs(l[v] - c) < Math.abs(l[v - 1] - c) || "next" === t.swipeDirection ? l[v] : l[v - 1]);
                                                    }
                                                    if (
                                                        (m &&
                                                            t.once("transitionEnd", function () {
                                                                t.loopFix();
                                                            }),
                                                        0 !== t.velocity)
                                                    )
                                                        (p = n ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity)),
                                                            s.freeModeSticky && (p = (a = Math.abs((n ? -c : c) - t.translate)) < (m = t.slidesSizesGrid[t.activeIndex]) ? s.speed : a < 2 * m ? 1.5 * s.speed : 2.5 * s.speed);
                                                    else if (s.freeModeSticky) return void t.slideToClosest();
                                                    s.freeModeMomentumBounce && f
                                                        ? (t.updateProgress(u),
                                                          t.setTransition(p),
                                                          t.setTranslate(c),
                                                          t.transitionStart(!0, t.swipeDirection),
                                                          (t.animating = !0),
                                                          r.transitionEnd(function () {
                                                              t &&
                                                                  !t.destroyed &&
                                                                  i.allowMomentumBounce &&
                                                                  (t.emit("momentumBounce"),
                                                                  t.setTransition(s.speed),
                                                                  setTimeout(function () {
                                                                      t.setTranslate(u),
                                                                          r.transitionEnd(function () {
                                                                              t && !t.destroyed && t.transitionEnd();
                                                                          });
                                                                  }, 0));
                                                          }))
                                                        : t.velocity
                                                        ? (t.updateProgress(c),
                                                          t.setTransition(p),
                                                          t.setTranslate(c),
                                                          t.transitionStart(!0, t.swipeDirection),
                                                          t.animating ||
                                                              ((t.animating = !0),
                                                              r.transitionEnd(function () {
                                                                  t && !t.destroyed && t.transitionEnd();
                                                              })))
                                                        : t.updateProgress(c),
                                                        t.updateActiveIndex(),
                                                        t.updateSlidesClasses();
                                                } else if (s.freeModeSticky) return void t.slideToClosest();
                                                (!s.freeModeMomentum || h >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                                            }
                                        else {
                                            for (var b = 0, w = t.slidesSizesGrid[0], y = 0; y < o.length; y += y < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                                                var x = y < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                                                void 0 !== o[y + x] ? d >= o[y] && d < o[y + x] && (w = o[(b = y) + x] - o[y]) : d >= o[y] && ((b = y), (w = o[o.length - 1] - o[o.length - 2]));
                                            }
                                            (n = (d - o[b]) / w), (a = b < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup);
                                            h > s.longSwipesMs
                                                ? s.longSwipes
                                                    ? ("next" === t.swipeDirection && (n >= s.longSwipesRatio ? t.slideTo(b + a) : t.slideTo(b)), "prev" === t.swipeDirection && (n > 1 - s.longSwipesRatio ? t.slideTo(b + a) : t.slideTo(b)))
                                                    : t.slideTo(t.activeIndex)
                                                : s.shortSwipes
                                                ? !t.navigation || (e.target !== t.navigation.nextEl && e.target !== t.navigation.prevEl)
                                                    ? ("next" === t.swipeDirection && t.slideTo(b + a), "prev" === t.swipeDirection && t.slideTo(b))
                                                    : e.target === t.navigation.nextEl
                                                    ? t.slideTo(b + a)
                                                    : t.slideTo(b)
                                                : t.slideTo(t.activeIndex);
                                        }
                                }.bind(this)),
                                t.cssMode &&
                                    (this.onScroll = function () {
                                        var e = this.wrapperEl,
                                            t = this.rtlTranslate;
                                        (this.previousTranslate = this.translate),
                                            this.isHorizontal() ? (this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft) : (this.translate = -e.scrollTop),
                                            -0 === this.translate && (this.translate = 0),
                                            this.updateActiveIndex(),
                                            this.updateSlidesClasses(),
                                            (0 == (e = this.maxTranslate() - this.minTranslate()) ? 0 : (this.translate - this.minTranslate()) / e) !== this.progress && this.updateProgress(t ? -this.translate : this.translate),
                                            this.emit("setTranslate", this.translate, !1);
                                    }.bind(this)),
                                (this.onClick = function (e) {
                                    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
                                }.bind(this)),
                                !!t.nested);
                        !x.touch && x.pointerEvents
                            ? (s.addEventListener(i.start, this.onTouchStart, !1), v.addEventListener(i.move, this.onTouchMove, n), v.addEventListener(i.end, this.onTouchEnd, !1))
                            : (x.touch &&
                                  ((e = !("touchstart" !== i.start || !x.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 }),
                                  s.addEventListener(i.start, this.onTouchStart, e),
                                  s.addEventListener(i.move, this.onTouchMove, x.passiveListener ? { passive: !1, capture: n } : n),
                                  s.addEventListener(i.end, this.onTouchEnd, e),
                                  i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, e),
                                  F || (v.addEventListener("touchstart", q), (F = !0))),
                              ((t.simulateTouch && !o.ios && !o.android) || (t.simulateTouch && !x.touch && o.ios)) &&
                                  (s.addEventListener("mousedown", this.onTouchStart, !1), v.addEventListener("mousemove", this.onTouchMove, n), v.addEventListener("mouseup", this.onTouchEnd, !1))),
                            (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0),
                            t.cssMode && a.addEventListener("scroll", this.onScroll),
                            t.updateOnWindowResize ? this.on(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Y, !0) : this.on("observerUpdate", Y, !0);
                    },
                    detachEvents: function () {
                        var e,
                            t = this.params,
                            i = this.touchEvents,
                            s = this.el,
                            a = this.wrapperEl,
                            n = !!t.nested;
                        !x.touch && x.pointerEvents
                            ? (s.removeEventListener(i.start, this.onTouchStart, !1), v.removeEventListener(i.move, this.onTouchMove, n), v.removeEventListener(i.end, this.onTouchEnd, !1))
                            : (x.touch &&
                                  ((e = !("onTouchStart" !== i.start || !x.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 }),
                                  s.removeEventListener(i.start, this.onTouchStart, e),
                                  s.removeEventListener(i.move, this.onTouchMove, n),
                                  s.removeEventListener(i.end, this.onTouchEnd, e),
                                  i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, e)),
                              ((t.simulateTouch && !o.ios && !o.android) || (t.simulateTouch && !x.touch && o.ios)) &&
                                  (s.removeEventListener("mousedown", this.onTouchStart, !1), v.removeEventListener("mousemove", this.onTouchMove, n), v.removeEventListener("mouseup", this.onTouchEnd, !1))),
                            (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0),
                            t.cssMode && a.removeEventListener("scroll", this.onScroll),
                            this.off(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Y);
                    },
                },
                breakpoints: {
                    setBreakpoint: function () {
                        var e,
                            i,
                            t,
                            s,
                            a = this.activeIndex,
                            n = this.initialized,
                            r = this.loopedSlides,
                            o = (void 0 === r && (r = 0), this.params),
                            l = this.$el,
                            d = o.breakpoints;
                        d &&
                            0 !== Object.keys(d).length &&
                            (e = this.getBreakpoint(d)) &&
                            this.currentBreakpoint !== e &&
                            ((i = e in d ? d[e] : void 0) &&
                                ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                                    var t = i[e];
                                    void 0 !== t && (i[e] = "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t) ? ("slidesPerView" === e ? parseFloat(t) : parseInt(t, 10)) : "auto");
                                }),
                            (d = i || this.originalParams),
                            (t = 1 < o.slidesPerColumn),
                            (s = 1 < d.slidesPerColumn),
                            t && !s
                                ? l.removeClass(o.containerModifierClass + "multirow " + o.containerModifierClass + "multirow-column")
                                : !t && s && (l.addClass(o.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && l.addClass(o.containerModifierClass + "multirow-column")),
                            (t = d.direction && d.direction !== o.direction),
                            (s = o.loop && (d.slidesPerView !== o.slidesPerView || t)),
                            t && n && this.changeDirection(),
                            U.extend(this.params, d),
                            U.extend(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }),
                            (this.currentBreakpoint = e),
                            s && n && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(a - r + this.loopedSlides, 0, !1)),
                            this.emit("breakpoint", d));
                    },
                    getBreakpoint: function (e) {
                        if (e) {
                            var t = !1,
                                i = Object.keys(e).map(function (e) {
                                    var t;
                                    return "string" == typeof e && 0 === e.indexOf("@") ? ((t = parseFloat(e.substr(1))), { value: K.innerHeight * t, point: e }) : { value: e, point: e };
                                });
                            i.sort(function (e, t) {
                                return parseInt(e.value, 10) - parseInt(t.value, 10);
                            });
                            for (var s = 0; s < i.length; s += 1) {
                                var a = i[s],
                                    n = a.point;
                                a.value <= K.innerWidth && (t = n);
                            }
                            return t || "max";
                        }
                    },
                },
                checkOverflow: {
                    checkOverflow: function () {
                        var e = this.params,
                            t = this.isLocked,
                            i = 0 < this.slides.length && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                        e.slidesOffsetBefore && e.slidesOffsetAfter && i ? (this.isLocked = i <= this.size) : (this.isLocked = 1 === this.snapGrid.length),
                            (this.allowSlideNext = !this.isLocked),
                            (this.allowSlidePrev = !this.isLocked),
                            t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                            t && t !== this.isLocked && ((this.isEnd = !1), this.navigation && this.navigation.update());
                    },
                },
                classes: {
                    addClasses: function () {
                        var t = this.classNames,
                            i = this.params,
                            e = this.rtl,
                            s = this.$el,
                            a = [];
                        a.push("initialized"),
                            a.push(i.direction),
                            i.freeMode && a.push("free-mode"),
                            i.autoHeight && a.push("autoheight"),
                            e && a.push("rtl"),
                            1 < i.slidesPerColumn && (a.push("multirow"), "column" === i.slidesPerColumnFill && a.push("multirow-column")),
                            o.android && a.push("android"),
                            o.ios && a.push("ios"),
                            i.cssMode && a.push("css-mode"),
                            a.forEach(function (e) {
                                t.push(i.containerModifierClass + e);
                            }),
                            s.addClass(t.join(" "));
                    },
                    removeClasses: function () {
                        var e = this.$el,
                            t = this.classNames;
                        e.removeClass(t.join(" "));
                    },
                },
                images: {
                    loadImage: function (e, t, i, s, a, n) {
                        function r() {
                            n && n();
                        }
                        !(E(e).parent("picture")[0] || (e.complete && a)) && t ? (((e = new K.Image()).onload = r), (e.onerror = r), s && (e.sizes = s), i && (e.srcset = i), t && (e.src = t)) : r();
                    },
                    preloadImages: function () {
                        var e = this;
                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                            var s = e.imagesToLoad[i];
                            e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
                        }
                    },
                },
            },
            R = {},
            c =
                ((h = t) && (S.__proto__ = h),
                (p = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } }),
                (((S.prototype = Object.create(h && h.prototype)).constructor = S).prototype.slidesPerViewDynamic = function () {
                    var e = this.params,
                        t = this.slides,
                        i = this.slidesGrid,
                        s = this.size,
                        a = this.activeIndex,
                        n = 1;
                    if (e.centeredSlides) {
                        for (var r, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !r && ((n += 1), (o += t[l].swiperSlideSize) > s && (r = !0));
                        for (var d = a - 1; 0 <= d; --d) t[d] && !r && ((n += 1), (o += t[d].swiperSlideSize) > s && (r = !0));
                    } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (n += 1);
                    return n;
                }),
                (S.prototype.update = function () {
                    var e,
                        t,
                        i = this;
                    function s() {
                        var e = i.rtlTranslate ? -1 * i.translate : i.translate,
                            e = Math.min(Math.max(e, i.maxTranslate()), i.minTranslate());
                        i.setTranslate(e), i.updateActiveIndex(), i.updateSlidesClasses();
                    }
                    i &&
                        !i.destroyed &&
                        ((e = i.snapGrid),
                        (t = i.params).breakpoints && i.setBreakpoint(),
                        i.updateSize(),
                        i.updateSlides(),
                        i.updateProgress(),
                        i.updateSlidesClasses(),
                        i.params.freeMode
                            ? (s(), i.params.autoHeight && i.updateAutoHeight())
                            : (("auto" === i.params.slidesPerView || 1 < i.params.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || s(),
                        t.watchOverflow && e !== i.snapGrid && i.checkOverflow(),
                        i.emit("update"));
                }),
                (S.prototype.changeDirection = function (i, e) {
                    void 0 === e && (e = !0);
                    var t = this.params.direction;
                    return (
                        (i = i || ("horizontal" === t ? "vertical" : "horizontal")) === t ||
                            ("horizontal" !== i && "vertical" !== i) ||
                            (this.$el.removeClass("" + this.params.containerModifierClass + t).addClass("" + this.params.containerModifierClass + i),
                            (this.params.direction = i),
                            this.slides.each(function (e, t) {
                                "vertical" === i ? (t.style.width = "") : (t.style.height = "");
                            }),
                            this.emit("changeDirection"),
                            e && this.update()),
                        this
                    );
                }),
                (S.prototype.init = function () {
                    this.initialized ||
                        (this.emit("beforeInit"),
                        this.params.breakpoints && this.setBreakpoint(),
                        this.addClasses(),
                        this.params.loop && this.loopCreate(),
                        this.updateSize(),
                        this.updateSlides(),
                        this.params.watchOverflow && this.checkOverflow(),
                        this.params.grabCursor && this.setGrabCursor(),
                        this.params.preloadImages && this.preloadImages(),
                        this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
                        this.attachEvents(),
                        (this.initialized = !0),
                        this.emit("init"));
                }),
                (S.prototype.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var i = this,
                        s = i.params,
                        a = i.$el,
                        n = i.$wrapperEl,
                        r = i.slides;
                    return (
                        void 0 === i.params ||
                            i.destroyed ||
                            (i.emit("beforeDestroy"),
                            (i.initialized = !1),
                            i.detachEvents(),
                            s.loop && i.loopDestroy(),
                            t &&
                                (i.removeClasses(),
                                a.removeAttr("style"),
                                n.removeAttr("style"),
                                r && r.length && r.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                            i.emit("destroy"),
                            Object.keys(i.eventsListeners).forEach(function (e) {
                                i.off(e);
                            }),
                            !1 !== e && ((i.$el[0].swiper = null), i.$el.data("swiper", null), U.deleteProps(i)),
                            (i.destroyed = !0)),
                        null
                    );
                }),
                (S.extendDefaults = function (e) {
                    U.extend(R, e);
                }),
                (p.extendedDefaults.get = function () {
                    return R;
                }),
                (p.defaults.get = function () {
                    return W;
                }),
                (p.Class.get = function () {
                    return h;
                }),
                (p.$.get = function () {
                    return E;
                }),
                Object.defineProperties(S, p),
                S),
            u = { name: "device", proto: { device: o }, static: { device: o } },
            Q = { name: "support", proto: { support: x }, static: { support: x } },
            T = {
                isEdge: !!K.navigator.userAgent.match(/Edge/g),
                isSafari: 0 <= (d = K.navigator.userAgent.toLowerCase()).indexOf("safari") && d.indexOf("chrome") < 0 && d.indexOf("android") < 0,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(K.navigator.userAgent),
            },
            _ = { name: "browser", proto: { browser: T }, static: { browser: T } },
            m = {
                name: "resize",
                create: function () {
                    var e = this;
                    U.extend(e, {
                        resize: {
                            resizeHandler: function () {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                            },
                            orientationChangeHandler: function () {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange");
                            },
                        },
                    });
                },
                on: {
                    init: function () {
                        K.addEventListener("resize", this.resize.resizeHandler), K.addEventListener("orientationchange", this.resize.orientationChangeHandler);
                    },
                    destroy: function () {
                        K.removeEventListener("resize", this.resize.resizeHandler), K.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
                    },
                },
            },
            f = {
                func: K.MutationObserver || K.WebkitMutationObserver,
                attach: function (e, t) {
                    void 0 === t && (t = {});
                    var i = this,
                        s = new f.func(function (e) {
                            var t;
                            1 !== e.length
                                ? ((t = function () {
                                      i.emit("observerUpdate", e[0]);
                                  }),
                                  K.requestAnimationFrame ? K.requestAnimationFrame(t) : K.setTimeout(t, 0))
                                : i.emit("observerUpdate", e[0]);
                        });
                    s.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), i.observer.observers.push(s);
                },
                init: function () {
                    if (x.observer && this.params.observer) {
                        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                        this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
                    }
                },
                destroy: function () {
                    this.observer.observers.forEach(function (e) {
                        e.disconnect();
                    }),
                        (this.observer.observers = []);
                },
            },
            g = {
                name: "observer",
                params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
                create: function () {
                    U.extend(this, { observer: { init: f.init.bind(this), attach: f.attach.bind(this), destroy: f.destroy.bind(this), observers: [] } });
                },
                on: {
                    init: function () {
                        this.observer.init();
                    },
                    destroy: function () {
                        this.observer.destroy();
                    },
                },
            },
            b = {
                update: function (e) {
                    var t = this,
                        i = t.params,
                        s = i.slidesPerView,
                        a = i.slidesPerGroup,
                        i = i.centeredSlides,
                        n = t.params.virtual,
                        r = n.addSlidesBefore,
                        n = n.addSlidesAfter,
                        o = t.virtual,
                        l = o.from,
                        d = o.to,
                        h = o.slides,
                        p = o.slidesGrid,
                        c = o.renderSlide,
                        o = o.offset;
                    t.updateActiveIndex();
                    var u,
                        m = t.activeIndex || 0,
                        f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
                        i = i ? ((u = Math.floor(s / 2) + a + r), Math.floor(s / 2) + a + n) : ((u = s + (a - 1) + r), a + n),
                        v = Math.max((m || 0) - i, 0),
                        g = Math.min((m || 0) + u, h.length - 1),
                        s = (t.slidesGrid[v] || 0) - (t.slidesGrid[0] || 0);
                    function b() {
                        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
                    }
                    if ((U.extend(t.virtual, { from: v, to: g, offset: s, slidesGrid: t.slidesGrid }), l === v && d === g && !e)) return t.slidesGrid !== p && s !== o && t.slides.css(f, s + "px"), void t.updateProgress();
                    if (t.params.virtual.renderExternal)
                        return (
                            t.params.virtual.renderExternal.call(t, {
                                offset: s,
                                from: v,
                                to: g,
                                slides: (function () {
                                    for (var e = [], t = v; t <= g; t += 1) e.push(h[t]);
                                    return e;
                                })(),
                            }),
                            void b()
                        );
                    var w = [],
                        y = [];
                    if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                    else for (var x = l; x <= d; x += 1) (x < v || g < x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + x + '"]').remove();
                    for (var E = 0; E < h.length; E += 1) v <= E && E <= g && (void 0 === d || e ? y.push(E) : (d < E && y.push(E), E < l && w.push(E)));
                    y.forEach(function (e) {
                        t.$wrapperEl.append(c(h[e], e));
                    }),
                        w
                            .sort(function (e, t) {
                                return t - e;
                            })
                            .forEach(function (e) {
                                t.$wrapperEl.prepend(c(h[e], e));
                            }),
                        t.$wrapperEl.children(".swiper-slide").css(f, s + "px"),
                        b();
                },
                renderSlide: function (e, t) {
                    var i = this.params.virtual;
                    if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                    e = i.renderSlide ? E(i.renderSlide.call(this, e, t)) : E('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                    return e.attr("data-swiper-slide-index") || e.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = e), e;
                },
                appendSlide: function (e) {
                    if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                    else this.virtual.slides.push(e);
                    this.virtual.update(!0);
                },
                prependSlide: function (e) {
                    var s,
                        a,
                        t = this.activeIndex,
                        i = t + 1,
                        n = 1;
                    if (Array.isArray(e)) {
                        for (var r = 0; r < e.length; r += 1) e[r] && this.virtual.slides.unshift(e[r]);
                        (i = t + e.length), (n = e.length);
                    } else this.virtual.slides.unshift(e);
                    this.params.virtual.cache &&
                        ((s = this.virtual.cache),
                        (a = {}),
                        Object.keys(s).forEach(function (e) {
                            var t = s[e],
                                i = t.attr("data-swiper-slide-index");
                            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), (a[parseInt(e, 10) + n] = t);
                        }),
                        (this.virtual.cache = a)),
                        this.virtual.update(!0),
                        this.slideTo(i, 0);
                },
                removeSlide: function (e) {
                    if (null != e) {
                        var t = this.activeIndex;
                        if (Array.isArray(e)) for (var i = e.length - 1; 0 <= i; --i) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && --t, (t = Math.max(t, 0));
                        else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && --t, (t = Math.max(t, 0));
                        this.virtual.update(!0), this.slideTo(t, 0);
                    }
                },
                removeAllSlides: function () {
                    (this.virtual.slides = []), this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
                },
            },
            w = {
                name: "virtual",
                params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
                create: function () {
                    U.extend(this, {
                        virtual: {
                            update: b.update.bind(this),
                            appendSlide: b.appendSlide.bind(this),
                            prependSlide: b.prependSlide.bind(this),
                            removeSlide: b.removeSlide.bind(this),
                            removeAllSlides: b.removeAllSlides.bind(this),
                            renderSlide: b.renderSlide.bind(this),
                            slides: this.params.virtual.slides,
                            cache: {},
                        },
                    });
                },
                on: {
                    beforeInit: function () {
                        var e;
                        this.params.virtual.enabled &&
                            (this.classNames.push(this.params.containerModifierClass + "virtual"),
                            U.extend(this.params, (e = { watchSlidesProgress: !0 })),
                            U.extend(this.originalParams, e),
                            this.params.initialSlide || this.virtual.update());
                    },
                    setTranslate: function () {
                        this.params.virtual.enabled && this.virtual.update();
                    },
                },
            },
            Z = {
                handle: function (e) {
                    var t = this.rtlTranslate,
                        i = (e = e.originalEvent ? e.originalEvent : e).keyCode || e.charCode,
                        s = this.params.keyboard.pageUpDown,
                        a = s && 33 === i,
                        s = s && 34 === i,
                        n = 37 === i,
                        r = 39 === i,
                        o = 38 === i,
                        l = 40 === i;
                    if (!this.allowSlideNext && ((this.isHorizontal() && r) || (this.isVertical() && l) || s)) return !1;
                    if (!this.allowSlidePrev && ((this.isHorizontal() && n) || (this.isVertical() && o) || a)) return !1;
                    if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || (v.activeElement && v.activeElement.nodeName && ("input" === v.activeElement.nodeName.toLowerCase() || "textarea" === v.activeElement.nodeName.toLowerCase())))) {
                        if (this.params.keyboard.onlyInViewport && (a || s || n || r || o || l)) {
                            var d = !1;
                            if (0 < this.$el.parents("." + this.params.slideClass).length && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                            var h = K.innerWidth,
                                p = K.innerHeight,
                                c = this.$el.offset();
                            t && (c.left -= this.$el[0].scrollLeft);
                            for (
                                var u = [
                                        [c.left, c.top],
                                        [c.left + this.width, c.top],
                                        [c.left, c.top + this.height],
                                        [c.left + this.width, c.top + this.height],
                                    ],
                                    m = 0;
                                m < u.length;
                                m += 1
                            ) {
                                var f = u[m];
                                0 <= f[0] && f[0] <= h && 0 <= f[1] && f[1] <= p && (d = !0);
                            }
                            if (!d) return;
                        }
                        this.isHorizontal()
                            ? ((a || s || n || r) && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)), (((s || r) && !t) || ((a || n) && t)) && this.slideNext(), (((a || n) && !t) || ((s || r) && t)) && this.slidePrev())
                            : ((a || s || o || l) && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)), (s || l) && this.slideNext(), (a || o) && this.slidePrev()),
                            this.emit("keyPress", i);
                    }
                },
                enable: function () {
                    this.keyboard.enabled || (E(v).on("keydown", this.keyboard.handle), (this.keyboard.enabled = !0));
                },
                disable: function () {
                    this.keyboard.enabled && (E(v).off("keydown", this.keyboard.handle), (this.keyboard.enabled = !1));
                },
            },
            y = {
                name: "keyboard",
                params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
                create: function () {
                    U.extend(this, { keyboard: { enabled: !1, enable: Z.enable.bind(this), disable: Z.disable.bind(this), handle: Z.handle.bind(this) } });
                },
                on: {
                    init: function () {
                        this.params.keyboard.enabled && this.keyboard.enable();
                    },
                    destroy: function () {
                        this.keyboard.enabled && this.keyboard.disable();
                    },
                },
            };
        function S() {
            for (var i, e = arguments, t = [], s = arguments.length; s--; ) t[s] = e[s];
            (i = (i = 1 === t.length && t[0].constructor && t[0].constructor === Object ? t[0] : ((r = t[0]), t[1])) || {}),
                (i = U.extend({}, i)),
                r && !i.el && (i.el = r),
                h.call(this, i),
                Object.keys(j).forEach(function (t) {
                    Object.keys(j[t]).forEach(function (e) {
                        S.prototype[e] || (S.prototype[e] = j[t][e]);
                    });
                });
            var a,
                n,
                r,
                o = this,
                l =
                    (void 0 === o.modules && (o.modules = {}),
                    Object.keys(o.modules).forEach(function (e) {
                        var t,
                            e = o.modules[e];
                        e.params &&
                            ((t = Object.keys(e.params)[0]),
                            "object" == typeof (e = e.params[t]) &&
                                null !== e &&
                                t in i &&
                                "enabled" in e &&
                                (!0 === i[t] && (i[t] = { enabled: !0 }), "object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = { enabled: !1 })));
                    }),
                    U.extend({}, W)),
                d = (o.useModulesParams(l), (o.params = U.extend({}, l, R, i)), (o.originalParams = U.extend({}, o.params)), (o.passedParams = U.extend({}, i)), (o.$ = E)(o.params.el));
            if ((r = d[0]))
                return 1 < d.length
                    ? ((a = []),
                      d.each(function (e, t) {
                          t = U.extend({}, i, { el: t });
                          a.push(new S(t));
                      }),
                      a)
                    : ((r.swiper = o),
                      d.data("swiper", o),
                      r && r.shadowRoot && r.shadowRoot.querySelector
                          ? ((n = E(r.shadowRoot.querySelector("." + o.params.wrapperClass))).children = function (e) {
                                return d.children(e);
                            })
                          : (n = d.children("." + o.params.wrapperClass)),
                      U.extend(o, {
                          $el: d,
                          el: r,
                          $wrapperEl: n,
                          wrapperEl: n[0],
                          classNames: [],
                          slides: E(),
                          slidesGrid: [],
                          snapGrid: [],
                          slidesSizesGrid: [],
                          isHorizontal: function () {
                              return "horizontal" === o.params.direction;
                          },
                          isVertical: function () {
                              return "vertical" === o.params.direction;
                          },
                          rtl: "rtl" === r.dir.toLowerCase() || "rtl" === d.css("direction"),
                          rtlTranslate: "horizontal" === o.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === d.css("direction")),
                          wrongRTL: "-webkit-box" === n.css("display"),
                          activeIndex: 0,
                          realIndex: 0,
                          isBeginning: !0,
                          isEnd: !1,
                          translate: 0,
                          previousTranslate: 0,
                          progress: 0,
                          velocity: 0,
                          animating: !1,
                          allowSlideNext: o.params.allowSlideNext,
                          allowSlidePrev: o.params.allowSlidePrev,
                          touchEvents:
                              ((l = x.pointerEvents ? ["pointerdown", "pointermove", "pointerup"] : ["mousedown", "mousemove", "mouseup"]),
                              (o.touchEventsTouch = { start: (r = ["touchstart", "touchmove", "touchend", "touchcancel"])[0], move: r[1], end: r[2], cancel: r[3] }),
                              (o.touchEventsDesktop = { start: l[0], move: l[1], end: l[2] }),
                              x.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
                          touchEventsData: {
                              isTouched: void 0,
                              isMoved: void 0,
                              allowTouchCallbacks: void 0,
                              touchStartTime: void 0,
                              isScrolling: void 0,
                              currentTranslate: void 0,
                              startTranslate: void 0,
                              allowThresholdMove: void 0,
                              formElements: "input, select, option, textarea, button, video, label",
                              lastClickTime: U.now(),
                              clickTimeout: void 0,
                              velocities: [],
                              allowMomentumBounce: void 0,
                              isTouchEvent: void 0,
                              startMoving: void 0,
                          },
                          allowClick: !0,
                          allowTouchMove: o.params.allowTouchMove,
                          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                          imagesToLoad: [],
                          imagesLoaded: 0,
                      }),
                      o.useModules(),
                      o.params.init && o.init(),
                      o);
        }
        var C = {
                lastScrollTime: U.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                event: function () {
                    return -1 < K.navigator.userAgent.indexOf("firefox")
                        ? "DOMMouseScroll"
                        : ((t = "onwheel" in v) || ((e = v.createElement("div")).setAttribute("onwheel", "return;"), (t = "function" == typeof e.onwheel)),
                          (t = !t && v.implementation && v.implementation.hasFeature && !0 !== v.implementation.hasFeature("", "") ? v.implementation.hasFeature("Events.wheel", "3.0") : t) ? "wheel" : "mousewheel");
                    var e, t;
                },
                normalize: function (e) {
                    var t = 0,
                        i = 0,
                        s = 0,
                        a = 0;
                    return (
                        "detail" in e && (i = e.detail),
                        "wheelDelta" in e && (i = -e.wheelDelta / 120),
                        "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
                        "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                        "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
                        (s = 10 * t),
                        (a = 10 * i),
                        "deltaY" in e && (a = e.deltaY),
                        "deltaX" in e && (s = e.deltaX),
                        e.shiftKey && !s && ((s = a), (a = 0)),
                        (s || a) && e.deltaMode && (1 === e.deltaMode ? ((s *= 40), (a *= 40)) : ((s *= 800), (a *= 800))),
                        { spinX: (t = s && !t ? (s < 1 ? -1 : 1) : t), spinY: (i = a && !i ? (a < 1 ? -1 : 1) : i), pixelX: s, pixelY: a }
                    );
                },
                handleMouseEnter: function () {
                    this.mouseEntered = !0;
                },
                handleMouseLeave: function () {
                    this.mouseEntered = !1;
                },
                handle: function (e) {
                    var t = e,
                        i = this,
                        s = i.params.mousewheel,
                        a = (i.params.cssMode && t.preventDefault(), i.$el);
                    if (("container" !== i.params.mousewheel.eventsTarged && (a = E(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges)) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    var a = 0,
                        n = i.rtlTranslate ? -1 : 1,
                        r = C.normalize(t);
                    if (s.forceToAxis)
                        if (i.isHorizontal()) {
                            if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0;
                            a = -r.pixelX * n;
                        } else {
                            if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0;
                            a = -r.pixelY;
                        }
                    else a = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * n : -r.pixelY;
                    if (0 === a) return !0;
                    if ((s.invert && (a = -a), i.params.freeMode)) {
                        var o = { time: U.now(), delta: Math.abs(a), direction: Math.sign(a) },
                            n = i.mousewheel.lastEventBeforeSnap,
                            r = n && o.time < n.time + 500 && o.delta <= n.delta && o.direction === n.direction;
                        if (!r) {
                            (i.mousewheel.lastEventBeforeSnap = void 0), i.params.loop && i.loopFix();
                            var l,
                                d,
                                n = i.getTranslate() + a * s.sensitivity,
                                s = i.isBeginning,
                                h = i.isEnd;
                            if (
                                ((n = n >= i.minTranslate() ? i.minTranslate() : n) <= i.maxTranslate() && (n = i.maxTranslate()),
                                i.setTransition(0),
                                i.setTranslate(n),
                                i.updateProgress(),
                                i.updateActiveIndex(),
                                i.updateSlidesClasses(),
                                ((!s && i.isBeginning) || (!h && i.isEnd)) && i.updateSlidesClasses(),
                                i.params.freeModeSticky &&
                                    (clearTimeout(i.mousewheel.timeout),
                                    (i.mousewheel.timeout = void 0),
                                    15 <= (l = i.mousewheel.recentWheelEvents).length && l.shift(),
                                    (s = l.length ? l[l.length - 1] : void 0),
                                    (h = l[0]),
                                    l.push(o),
                                    s && (o.delta > s.delta || o.direction !== s.direction)
                                        ? l.splice(0)
                                        : 15 <= l.length &&
                                          o.time - h.time < 500 &&
                                          1 <= h.delta - o.delta &&
                                          o.delta <= 6 &&
                                          ((d = 0 < a ? 0.8 : 0.2),
                                          (i.mousewheel.lastEventBeforeSnap = o),
                                          l.splice(0),
                                          (i.mousewheel.timeout = U.nextTick(function () {
                                              i.slideToClosest(i.params.speed, !0, void 0, d);
                                          }, 0))),
                                    i.mousewheel.timeout ||
                                        (i.mousewheel.timeout = U.nextTick(function () {
                                            (i.mousewheel.lastEventBeforeSnap = o), l.splice(0), i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                                        }, 500))),
                                r || i.emit("scroll", t),
                                i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
                                n === i.minTranslate() || n === i.maxTranslate())
                            )
                                return !0;
                        }
                    } else {
                        (s = { time: U.now(), delta: Math.abs(a), direction: Math.sign(a), raw: e }), (h = i.mousewheel.recentWheelEvents), (r = (2 <= h.length && h.shift(), h.length ? h[h.length - 1] : void 0));
                        if ((h.push(s), (!r || s.direction !== r.direction || s.delta > r.delta || s.time > r.time + 150) && i.mousewheel.animateSlider(s), i.mousewheel.releaseScroll(s))) return !0;
                    }
                    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
                },
                animateSlider: function (e) {
                    return (
                        (6 <= e.delta && U.now() - this.mousewheel.lastScrollTime < 60) ||
                        (e.direction < 0
                            ? (this.isEnd && !this.params.loop) || this.animating || (this.slideNext(), this.emit("scroll", e.raw))
                            : (this.isBeginning && !this.params.loop) || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)),
                        (this.mousewheel.lastScrollTime = new K.Date().getTime()),
                        !1)
                    );
                },
                releaseScroll: function (e) {
                    var t = this.params.mousewheel;
                    if (e.direction < 0) {
                        if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
                    } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                    return !1;
                },
                enable: function () {
                    var e = C.event();
                    if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
                    if (!e) return !1;
                    if (this.mousewheel.enabled) return !1;
                    var t = this.$el;
                    return (
                        (t = "container" !== this.params.mousewheel.eventsTarged ? E(this.params.mousewheel.eventsTarged) : t).on("mouseenter", this.mousewheel.handleMouseEnter),
                        t.on("mouseleave", this.mousewheel.handleMouseLeave),
                        t.on(e, this.mousewheel.handle),
                        (this.mousewheel.enabled = !0)
                    );
                },
                disable: function () {
                    var e = C.event();
                    if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                    if (!e) return !1;
                    if (!this.mousewheel.enabled) return !1;
                    var t = this.$el;
                    return (t = "container" !== this.params.mousewheel.eventsTarged ? E(this.params.mousewheel.eventsTarged) : t).off(e, this.mousewheel.handle), !(this.mousewheel.enabled = !1);
                },
            },
            M = {
                update: function () {
                    var e,
                        t,
                        i = this.params.navigation;
                    this.params.loop ||
                        ((e = (t = this.navigation).$nextEl),
                        (t = t.$prevEl) && 0 < t.length && (this.isBeginning ? t.addClass(i.disabledClass) : t.removeClass(i.disabledClass), t[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](i.lockClass)),
                        e && 0 < e.length && (this.isEnd ? e.addClass(i.disabledClass) : e.removeClass(i.disabledClass), e[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](i.lockClass)));
                },
                onPrevClick: function (e) {
                    e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
                },
                onNextClick: function (e) {
                    e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
                },
                init: function () {
                    var e,
                        t,
                        i = this.params.navigation;
                    (i.nextEl || i.prevEl) &&
                        (i.nextEl && ((e = E(i.nextEl)), this.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))),
                        i.prevEl && ((t = E(i.prevEl)), this.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))),
                        e && 0 < e.length && e.on("click", this.navigation.onNextClick),
                        t && 0 < t.length && t.on("click", this.navigation.onPrevClick),
                        U.extend(this.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
                },
                destroy: function () {
                    var e = this.navigation,
                        t = e.$nextEl,
                        e = e.$prevEl;
                    t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)),
                        e && e.length && (e.off("click", this.navigation.onPrevClick), e.removeClass(this.params.navigation.disabledClass));
                },
            },
            P = {
                update: function () {
                    var e = this.rtl,
                        s = this.params.pagination;
                    if (s.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var a,
                            t = (this.virtual && this.params.virtual.enabled ? this.virtual : this).slides.length,
                            i = this.pagination.$el,
                            n = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                        if (
                            (this.params.loop
                                ? ((a = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > t - 1 - 2 * this.loopedSlides && (a -= t - 2 * this.loopedSlides),
                                  n - 1 < a && (a -= n),
                                  a < 0 && "bullets" !== this.params.paginationType && (a = n + a))
                                : (a = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0),
                            "bullets" === s.type && this.pagination.bullets && 0 < this.pagination.bullets.length)
                        ) {
                            var r,
                                o,
                                l,
                                d = this.pagination.bullets;
                            if (
                                (s.dynamicBullets &&
                                    ((this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                    i.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"),
                                    1 < s.dynamicMainBullets &&
                                        void 0 !== this.previousIndex &&
                                        ((this.pagination.dynamicBulletIndex += a - this.previousIndex),
                                        this.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1
                                            ? (this.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1)
                                            : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                                    (r = a - this.pagination.dynamicBulletIndex),
                                    (l = ((o = r + (Math.min(d.length, s.dynamicMainBullets) - 1)) + r) / 2)),
                                d.removeClass(
                                    s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"
                                ),
                                1 < i.length)
                            )
                                d.each(function (e, t) {
                                    var t = E(t),
                                        i = t.index();
                                    i === a && t.addClass(s.bulletActiveClass),
                                        s.dynamicBullets &&
                                            (r <= i && i <= o && t.addClass(s.bulletActiveClass + "-main"),
                                            i === r &&
                                                t
                                                    .prev()
                                                    .addClass(s.bulletActiveClass + "-prev")
                                                    .prev()
                                                    .addClass(s.bulletActiveClass + "-prev-prev"),
                                            i === o &&
                                                t
                                                    .next()
                                                    .addClass(s.bulletActiveClass + "-next")
                                                    .next()
                                                    .addClass(s.bulletActiveClass + "-next-next"));
                                });
                            else {
                                var t = d.eq(a),
                                    h = t.index();
                                if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                                    for (var t = d.eq(r), p = d.eq(o), c = r; c <= o; c += 1) d.eq(c).addClass(s.bulletActiveClass + "-main");
                                    if (this.params.loop)
                                        if (h >= d.length - s.dynamicMainBullets) {
                                            for (var u = s.dynamicMainBullets; 0 <= u; --u) d.eq(d.length - u).addClass(s.bulletActiveClass + "-main");
                                            d.eq(d.length - s.dynamicMainBullets - 1).addClass(s.bulletActiveClass + "-prev");
                                        } else
                                            t
                                                .prev()
                                                .addClass(s.bulletActiveClass + "-prev")
                                                .prev()
                                                .addClass(s.bulletActiveClass + "-prev-prev"),
                                                p
                                                    .next()
                                                    .addClass(s.bulletActiveClass + "-next")
                                                    .next()
                                                    .addClass(s.bulletActiveClass + "-next-next");
                                    else
                                        t
                                            .prev()
                                            .addClass(s.bulletActiveClass + "-prev")
                                            .prev()
                                            .addClass(s.bulletActiveClass + "-prev-prev"),
                                            p
                                                .next()
                                                .addClass(s.bulletActiveClass + "-next")
                                                .next()
                                                .addClass(s.bulletActiveClass + "-next-next");
                                }
                            }
                            s.dynamicBullets &&
                                ((h = Math.min(d.length, s.dynamicMainBullets + 4)),
                                (t = (this.pagination.bulletSize * h - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize),
                                (p = e ? "right" : "left"),
                                d.css(this.isHorizontal() ? p : "top", t + "px"));
                        }
                        "fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(a + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))),
                            "progressbar" === s.type &&
                                ((h = s.progressbarOpposite ? (this.isHorizontal() ? "vertical" : "horizontal") : this.isHorizontal() ? "horizontal" : "vertical"),
                                (l = (a + 1) / n),
                                (p = e = 1),
                                "horizontal" == h ? (e = l) : (p = l),
                                i
                                    .find("." + s.progressbarFillClass)
                                    .transform("translate3d(0,0,0) scaleX(" + e + ") scaleY(" + p + ")")
                                    .transition(this.params.speed)),
                            "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(this, a + 1, n)), this.emit("paginationRender", this, i[0])) : this.emit("paginationUpdate", this, i[0]),
                            i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](s.lockClass);
                    }
                },
                render: function () {
                    var e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var t = (this.virtual && this.params.virtual.enabled ? this.virtual : this).slides.length,
                            i = this.pagination.$el,
                            s = "";
                        if ("bullets" === e.type) {
                            for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, n = 0; n < a; n += 1)
                                e.renderBullet ? (s += e.renderBullet.call(this, n, e.bulletClass)) : (s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">");
                            i.html(s), (this.pagination.bullets = i.find("." + e.bulletClass));
                        }
                        "fraction" === e.type && ((s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>'), i.html(s)),
                            "progressbar" === e.type && ((s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>'), i.html(s)),
                            "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
                    }
                },
                init: function () {
                    var e,
                        t = this,
                        i = t.params.pagination;
                    i.el &&
                        0 !== (e = E(i.el)).length &&
                        (t.params.uniqueNavElements && "string" == typeof i.el && 1 < e.length && (e = t.$el.find(i.el)),
                        "bullets" === i.type && i.clickable && e.addClass(i.clickableClass),
                        e.addClass(i.modifierClass + i.type),
                        "bullets" === i.type && i.dynamicBullets && (e.addClass("" + i.modifierClass + i.type + "-dynamic"), (t.pagination.dynamicBulletIndex = 0), i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)),
                        "progressbar" === i.type && i.progressbarOpposite && e.addClass(i.progressbarOppositeClass),
                        i.clickable &&
                            e.on("click", "." + i.bulletClass, function (e) {
                                e.preventDefault();
                                e = E(this).index() * t.params.slidesPerGroup;
                                t.params.loop && (e += t.loopedSlides), t.slideTo(e);
                            }),
                        U.extend(t.pagination, { $el: e, el: e[0] }));
                },
                destroy: function () {
                    var e,
                        t = this.params.pagination;
                    t.el &&
                        this.pagination.el &&
                        this.pagination.$el &&
                        0 !== this.pagination.$el.length &&
                        ((e = this.pagination.$el).removeClass(t.hiddenClass),
                        e.removeClass(t.modifierClass + t.type),
                        this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass),
                        t.clickable && e.off("click", "." + t.bulletClass));
                },
            },
            z = {
                setTranslate: function () {
                    var e, t, i, s, a, n, r, o;
                    this.params.scrollbar.el &&
                        this.scrollbar.el &&
                        ((n = this.scrollbar),
                        (e = this.rtlTranslate),
                        (o = this.progress),
                        (t = n.dragSize),
                        (i = n.trackSize),
                        (s = n.$dragEl),
                        (a = n.$el),
                        (n = this.params.scrollbar),
                        (o = (i - (r = t)) * o),
                        e ? (0 < (o = -o) ? ((r = t - o), (o = 0)) : i < -o + t && (r = i + o)) : o < 0 ? ((r = t + o), (o = 0)) : i < o + t && (r = i - o),
                        this.isHorizontal() ? (s.transform("translate3d(" + o + "px, 0, 0)"), (s[0].style.width = r + "px")) : (s.transform("translate3d(0px, " + o + "px, 0)"), (s[0].style.height = r + "px")),
                        n.hide &&
                            (clearTimeout(this.scrollbar.timeout),
                            (a[0].style.opacity = 1),
                            (this.scrollbar.timeout = setTimeout(function () {
                                (a[0].style.opacity = 0), a.transition(400);
                            }, 1e3))));
                },
                setTransition: function (e) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
                },
                updateSize: function () {
                    var e, t, i, s, a, n, r;
                    this.params.scrollbar.el &&
                        this.scrollbar.el &&
                        ((t = (e = this.scrollbar).$dragEl),
                        (i = e.$el),
                        (t[0].style.width = ""),
                        (t[0].style.height = ""),
                        (s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight),
                        (n = (a = this.size / this.virtualSize) * (s / this.size)),
                        (r = "auto" === this.params.scrollbar.dragSize ? s * a : parseInt(this.params.scrollbar.dragSize, 10)),
                        this.isHorizontal() ? (t[0].style.width = r + "px") : (t[0].style.height = r + "px"),
                        (i[0].style.display = 1 <= a ? "none" : ""),
                        this.params.scrollbar.hide && (i[0].style.opacity = 0),
                        U.extend(e, { trackSize: s, divider: a, moveDivider: n, dragSize: r }),
                        e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass));
                },
                getPointerPosition: function (e) {
                    return this.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientX : ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientY;
                },
                setDragPosition: function (e) {
                    var t = this.scrollbar,
                        i = this.rtlTranslate,
                        s = t.$el,
                        a = t.dragSize,
                        n = t.trackSize,
                        r = t.dragStartPos,
                        t = (t.getPointerPosition(e) - s.offset()[this.isHorizontal() ? "left" : "top"] - (null !== r ? r : a / 2)) / (n - a),
                        e = ((t = Math.max(Math.min(t, 1), 0)), i && (t = 1 - t), this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t);
                    this.updateProgress(e), this.setTranslate(e), this.updateActiveIndex(), this.updateSlidesClasses();
                },
                onDragStart: function (e) {
                    var t = this.params.scrollbar,
                        i = this.scrollbar,
                        s = this.$wrapperEl,
                        a = i.$el,
                        n = i.$dragEl;
                    (this.scrollbar.isTouched = !0),
                        (this.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null),
                        e.preventDefault(),
                        e.stopPropagation(),
                        s.transition(100),
                        n.transition(100),
                        i.setDragPosition(e),
                        clearTimeout(this.scrollbar.dragTimeout),
                        a.transition(0),
                        t.hide && a.css("opacity", 1),
                        this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"),
                        this.emit("scrollbarDragStart", e);
                },
                onDragMove: function (e) {
                    var t = this.scrollbar,
                        i = this.$wrapperEl,
                        s = t.$el,
                        a = t.$dragEl;
                    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
                },
                onDragEnd: function (e) {
                    var t = this.params.scrollbar,
                        i = this.scrollbar,
                        s = this.$wrapperEl,
                        a = i.$el;
                    this.scrollbar.isTouched &&
                        ((this.scrollbar.isTouched = !1),
                        this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
                        t.hide &&
                            (clearTimeout(this.scrollbar.dragTimeout),
                            (this.scrollbar.dragTimeout = U.nextTick(function () {
                                a.css("opacity", 0), a.transition(400);
                            }, 1e3))),
                        this.emit("scrollbarDragEnd", e),
                        t.snapOnRelease && this.slideToClosest());
                },
                enableDraggable: function () {
                    var e, t, i, s, a;
                    this.params.scrollbar.el &&
                        ((i = this.scrollbar),
                        (e = this.touchEventsTouch),
                        (t = this.touchEventsDesktop),
                        (a = this.params),
                        (i = i.$el[0]),
                        (s = !(!x.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 }),
                        (a = !(!x.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 }),
                        x.touch
                            ? (i.addEventListener(e.start, this.scrollbar.onDragStart, s), i.addEventListener(e.move, this.scrollbar.onDragMove, s), i.addEventListener(e.end, this.scrollbar.onDragEnd, a))
                            : (i.addEventListener(t.start, this.scrollbar.onDragStart, s), v.addEventListener(t.move, this.scrollbar.onDragMove, s), v.addEventListener(t.end, this.scrollbar.onDragEnd, a)));
                },
                disableDraggable: function () {
                    var e, t, i, s, a;
                    this.params.scrollbar.el &&
                        ((i = this.scrollbar),
                        (e = this.touchEventsTouch),
                        (t = this.touchEventsDesktop),
                        (a = this.params),
                        (i = i.$el[0]),
                        (s = !(!x.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 }),
                        (a = !(!x.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 }),
                        x.touch
                            ? (i.removeEventListener(e.start, this.scrollbar.onDragStart, s), i.removeEventListener(e.move, this.scrollbar.onDragMove, s), i.removeEventListener(e.end, this.scrollbar.onDragEnd, a))
                            : (i.removeEventListener(t.start, this.scrollbar.onDragStart, s), v.removeEventListener(t.move, this.scrollbar.onDragMove, s), v.removeEventListener(t.end, this.scrollbar.onDragEnd, a)));
                },
                init: function () {
                    var e, t, i, s;
                    this.params.scrollbar.el &&
                        ((e = this.scrollbar),
                        (s = this.$el),
                        (i = E((t = this.params.scrollbar).el)),
                        0 === (s = (i = this.params.uniqueNavElements && "string" == typeof t.el && 1 < i.length && 1 === s.find(t.el).length ? s.find(t.el) : i).find("." + this.params.scrollbar.dragClass)).length &&
                            ((s = E('<div class="' + this.params.scrollbar.dragClass + '"></div>')), i.append(s)),
                        U.extend(e, { $el: i, el: i[0], $dragEl: s, dragEl: s[0] }),
                        t.draggable && e.enableDraggable());
                },
                destroy: function () {
                    this.scrollbar.disableDraggable();
                },
            },
            J = {
                setTransform: function (e, t) {
                    var i = this.rtl,
                        e = E(e),
                        i = i ? -1 : 1,
                        s = e.attr("data-swiper-parallax") || "0",
                        a = e.attr("data-swiper-parallax-x"),
                        n = e.attr("data-swiper-parallax-y"),
                        r = e.attr("data-swiper-parallax-scale"),
                        o = e.attr("data-swiper-parallax-opacity");
                    a || n ? ((a = a || "0"), (n = n || "0")) : this.isHorizontal() ? ((a = s), (n = "0")) : ((n = s), (a = "0")),
                        (a = 0 <= a.indexOf("%") ? parseInt(a, 10) * t * i + "%" : a * t * i + "px"),
                        (n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t + "%" : n * t + "px"),
                        null != o && ((s = o - (o - 1) * (1 - Math.abs(t))), (e[0].style.opacity = s)),
                        null == r ? e.transform("translate3d(" + a + ", " + n + ", 0px)") : ((i = r - (r - 1) * (1 - Math.abs(t))), e.transform("translate3d(" + a + ", " + n + ", 0px) scale(" + i + ")"));
                },
                setTranslate: function () {
                    var s = this,
                        e = s.$el,
                        t = s.slides,
                        a = s.progress,
                        n = s.snapGrid;
                    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e, t) {
                        s.parallax.setTransform(t, a);
                    }),
                        t.each(function (e, t) {
                            var i = t.progress;
                            1 < s.params.slidesPerGroup && "auto" !== s.params.slidesPerView && (i += Math.ceil(e / 2) - a * (n.length - 1)),
                                (i = Math.min(Math.max(i, -1), 1)),
                                E(t)
                                    .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                                    .each(function (e, t) {
                                        s.parallax.setTransform(t, i);
                                    });
                        });
                },
                setTransition: function (s) {
                    void 0 === s && (s = this.params.speed),
                        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e, t) {
                            var t = E(t),
                                i = parseInt(t.attr("data-swiper-parallax-duration"), 10) || s;
                            0 === s && (i = 0), t.transition(i);
                        });
                },
            },
            ee = {
                getDistanceBetweenTouches: function (e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        i = e.targetTouches[0].pageY,
                        s = e.targetTouches[1].pageX,
                        e = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(s - t, 2) + Math.pow(e - i, 2));
                },
                onGestureStart: function (e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !x.gestures)) {
                        if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                        (i.fakeGestureTouched = !0), (s.scaleStart = ee.getDistanceBetweenTouches(e));
                    }
                    (s.$slideEl && s.$slideEl.length) ||
                    ((s.$slideEl = E(e.target).closest("." + this.params.slideClass)),
                    0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)),
                    (s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                    (s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass)),
                    (s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
                    0 !== s.$imageWrapEl.length)
                        ? (s.$imageEl && s.$imageEl.transition(0), (this.zoom.isScaling = !0))
                        : (s.$imageEl = void 0);
                },
                onGestureChange: function (e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (!x.gestures) {
                        if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                        (i.fakeGestureMoved = !0), (s.scaleMove = ee.getDistanceBetweenTouches(e));
                    }
                    s.$imageEl &&
                        0 !== s.$imageEl.length &&
                        ((i.scale = x.gestures ? e.scale * i.currentScale : (s.scaleMove / s.scaleStart) * i.currentScale),
                        i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
                        i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
                        s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
                },
                onGestureEnd: function (e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (!x.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !o.android)) return;
                        (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
                    }
                    s.$imageEl &&
                        0 !== s.$imageEl.length &&
                        ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
                        s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
                        (i.currentScale = i.scale),
                        (i.isScaling = !1),
                        1 === i.scale && (s.$slideEl = void 0));
                },
                onTouchStart: function (e) {
                    var t = this.zoom,
                        i = t.gesture,
                        t = t.image;
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        !t.isTouched &&
                        (o.android && e.cancelable && e.preventDefault(),
                        (t.isTouched = !0),
                        (t.touchesStart.x = ("touchstart" === e.type ? e.targetTouches[0] : e).pageX),
                        (t.touchesStart.y = ("touchstart" === e.type ? e.targetTouches[0] : e).pageY));
                },
                onTouchMove: function (e) {
                    var t = this.zoom,
                        i = t.gesture,
                        s = t.image,
                        a = t.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && ((this.allowClick = !1), s.isTouched && i.$slideEl)) {
                        s.isMoved ||
                            ((s.width = i.$imageEl[0].offsetWidth),
                            (s.height = i.$imageEl[0].offsetHeight),
                            (s.startX = U.getTranslate(i.$imageWrapEl[0], "x") || 0),
                            (s.startY = U.getTranslate(i.$imageWrapEl[0], "y") || 0),
                            (i.slideWidth = i.$slideEl[0].offsetWidth),
                            (i.slideHeight = i.$slideEl[0].offsetHeight),
                            i.$imageWrapEl.transition(0),
                            this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
                        var n = s.width * t.scale,
                            r = s.height * t.scale;
                        if (!(n < i.slideWidth && r < i.slideHeight)) {
                            if (
                                ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                                (s.maxX = -s.minX),
                                (s.minY = Math.min(i.slideHeight / 2 - r / 2, 0)),
                                (s.maxY = -s.minY),
                                (s.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX),
                                (s.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY),
                                !s.isMoved && !t.isScaling)
                            ) {
                                if (this.isHorizontal() && ((Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x) || (Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)))
                                    return void (s.isTouched = !1);
                                if (!this.isHorizontal() && ((Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y) || (Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)))
                                    return void (s.isTouched = !1);
                            }
                            e.cancelable && e.preventDefault(),
                                e.stopPropagation(),
                                (s.isMoved = !0),
                                (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
                                (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
                                s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                                s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                                s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                                s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                                a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                                a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                                a.prevTime || (a.prevTime = Date.now()),
                                (a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2),
                                (a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2),
                                Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                                Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                                (a.prevPositionX = s.touchesCurrent.x),
                                (a.prevPositionY = s.touchesCurrent.y),
                                (a.prevTime = Date.now()),
                                i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                        }
                    }
                },
                onTouchEnd: function () {
                    var e = this.zoom,
                        t = e.gesture,
                        i = e.image,
                        s = e.velocity;
                    if (t.$imageEl && 0 !== t.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return (i.isTouched = !1), void (i.isMoved = !1);
                        (i.isTouched = !1), (i.isMoved = !1);
                        var a = 300,
                            n = 300,
                            r = s.x * a,
                            r = i.currentX + r,
                            o = s.y * n,
                            o = i.currentY + o,
                            s = (0 !== s.x && (a = Math.abs((r - i.currentX) / s.x)), 0 !== s.y && (n = Math.abs((o - i.currentY) / s.y)), Math.max(a, n)),
                            a = ((i.currentX = r), (i.currentY = o), i.width * e.scale),
                            n = i.height * e.scale;
                        (i.minX = Math.min(t.slideWidth / 2 - a / 2, 0)),
                            (i.maxX = -i.minX),
                            (i.minY = Math.min(t.slideHeight / 2 - n / 2, 0)),
                            (i.maxY = -i.minY),
                            (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                            (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                            t.$imageWrapEl.transition(s).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
                    }
                },
                onTransitionEnd: function () {
                    var e = this.zoom,
                        t = e.gesture;
                    t.$slideEl &&
                        this.previousIndex !== this.activeIndex &&
                        (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                        t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
                        (e.scale = 1),
                        (e.currentScale = 1),
                        (t.$slideEl = void 0),
                        (t.$imageEl = void 0),
                        (t.$imageWrapEl = void 0));
                },
                toggle: function (e) {
                    var t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e);
                },
                in: function (e) {
                    var t,
                        i,
                        s,
                        a,
                        n = this.zoom,
                        r = this.params.zoom,
                        o = n.gesture,
                        l = n.image;
                    o.$slideEl ||
                        (this.params.virtual && this.params.virtual.enabled && this.virtual ? (o.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass)) : (o.$slideEl = this.slides.eq(this.activeIndex)),
                        (o.$imageEl = o.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                        (o.$imageWrapEl = o.$imageEl.parent("." + r.containerClass))),
                        o.$imageEl &&
                            0 !== o.$imageEl.length &&
                            (o.$slideEl.addClass("" + r.zoomedSlideClass),
                            (l = void 0 === l.touchesStart.x && e ? ((t = ("touchend" === e.type ? e.changedTouches[0] : e).pageX), ("touchend" === e.type ? e.changedTouches[0] : e).pageY) : ((t = l.touchesStart.x), l.touchesStart.y)),
                            (n.scale = o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio),
                            (n.currentScale = o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio),
                            e
                                ? ((r = o.$slideEl[0].offsetWidth),
                                  (e = o.$slideEl[0].offsetHeight),
                                  (t = o.$slideEl.offset().left + r / 2 - t),
                                  (l = o.$slideEl.offset().top + e / 2 - l),
                                  (s = o.$imageEl[0].offsetWidth),
                                  (a = o.$imageEl[0].offsetHeight),
                                  (s = s * n.scale),
                                  (a = a * n.scale),
                                  (s = -(r = Math.min(r / 2 - s / 2, 0))),
                                  (a = -(e = Math.min(e / 2 - a / 2, 0))),
                                  s < (i = (i = t * n.scale) < r ? r : i) && (i = s),
                                  a < (s = (s = l * n.scale) < e ? e : s) && (s = a))
                                : (s = i = 0),
                            o.$imageWrapEl.transition(300).transform("translate3d(" + i + "px, " + s + "px,0)"),
                            o.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + n.scale + ")"));
                },
                out: function () {
                    var e = this.zoom,
                        t = this.params.zoom,
                        i = e.gesture;
                    i.$slideEl ||
                        (this.params.virtual && this.params.virtual.enabled && this.virtual ? (i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass)) : (i.$slideEl = this.slides.eq(this.activeIndex)),
                        (i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                        (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
                        i.$imageEl &&
                            0 !== i.$imageEl.length &&
                            ((e.scale = 1),
                            (e.currentScale = 1),
                            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                            i.$slideEl.removeClass("" + t.zoomedSlideClass),
                            (i.$slideEl = void 0));
                },
                enable: function () {
                    var e,
                        t,
                        i,
                        s = this.zoom;
                    s.enabled ||
                        ((s.enabled = !0),
                        (e = !("touchstart" !== this.touchEvents.start || !x.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 }),
                        (t = !x.passiveListener || { passive: !1, capture: !0 }),
                        (i = "." + this.params.slideClass),
                        x.gestures
                            ? (this.$wrapperEl.on("gesturestart", i, s.onGestureStart, e), this.$wrapperEl.on("gesturechange", i, s.onGestureChange, e), this.$wrapperEl.on("gestureend", i, s.onGestureEnd, e))
                            : "touchstart" === this.touchEvents.start &&
                              (this.$wrapperEl.on(this.touchEvents.start, i, s.onGestureStart, e),
                              this.$wrapperEl.on(this.touchEvents.move, i, s.onGestureChange, t),
                              this.$wrapperEl.on(this.touchEvents.end, i, s.onGestureEnd, e),
                              this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, i, s.onGestureEnd, e)),
                        this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, s.onTouchMove, t));
                },
                disable: function () {
                    var e,
                        t,
                        i,
                        s = this.zoom;
                    s.enabled &&
                        ((this.zoom.enabled = !1),
                        (e = !("touchstart" !== this.touchEvents.start || !x.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 }),
                        (t = !x.passiveListener || { passive: !1, capture: !0 }),
                        (i = "." + this.params.slideClass),
                        x.gestures
                            ? (this.$wrapperEl.off("gesturestart", i, s.onGestureStart, e), this.$wrapperEl.off("gesturechange", i, s.onGestureChange, e), this.$wrapperEl.off("gestureend", i, s.onGestureEnd, e))
                            : "touchstart" === this.touchEvents.start &&
                              (this.$wrapperEl.off(this.touchEvents.start, i, s.onGestureStart, e),
                              this.$wrapperEl.off(this.touchEvents.move, i, s.onGestureChange, t),
                              this.$wrapperEl.off(this.touchEvents.end, i, s.onGestureEnd, e),
                              this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, i, s.onGestureEnd, e)),
                        this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, s.onTouchMove, t));
                },
            },
            te = {
                loadInSlide: function (e, l) {
                    void 0 === l && (l = !0);
                    var d,
                        h = this,
                        p = h.params.lazy;
                    void 0 !== e &&
                        0 !== h.slides.length &&
                        ((e = (d = h.virtual && h.params.virtual.enabled ? h.$wrapperEl.children("." + h.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : h.slides.eq(e)).find(
                            "." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")"
                        )),
                        0 !== (e = !d.hasClass(p.elementClass) || d.hasClass(p.loadedClass) || d.hasClass(p.loadingClass) ? e : e.add(d[0])).length &&
                            e.each(function (e, t) {
                                var i = E(t),
                                    s = (i.addClass(p.loadingClass), i.attr("data-background")),
                                    a = i.attr("data-src"),
                                    n = i.attr("data-srcset"),
                                    r = i.attr("data-sizes"),
                                    o = i.parent("picture");
                                h.loadImage(i[0], a || s, n, r, !1, function () {
                                    var e, t;
                                    null == h ||
                                        !h ||
                                        (h && !h.params) ||
                                        h.destroyed ||
                                        (s
                                            ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background"))
                                            : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")),
                                              r && (i.attr("sizes", r), i.removeAttr("data-sizes")),
                                              o.length &&
                                                  o.children("source").each(function (e, t) {
                                                      t = E(t);
                                                      t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                                                  }),
                                              a && (i.attr("src", a), i.removeAttr("data-src"))),
                                        i.addClass(p.loadedClass).removeClass(p.loadingClass),
                                        d.find("." + p.preloaderClass).remove(),
                                        h.params.loop &&
                                            l &&
                                            ((e = d.attr("data-swiper-slide-index")),
                                            d.hasClass(h.params.slideDuplicateClass)
                                                ? ((t = h.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + h.params.slideDuplicateClass + ")")), h.lazy.loadInSlide(t.index(), !1))
                                                : ((t = h.$wrapperEl.children("." + h.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]')), h.lazy.loadInSlide(t.index(), !1))),
                                        h.emit("lazyImageReady", d[0], i[0]),
                                        h.params.autoHeight && h.updateAutoHeight());
                                }),
                                    h.emit("lazyImageLoad", d[0], i[0]);
                            }));
                },
                load: function () {
                    var i = this,
                        t = i.$wrapperEl,
                        s = i.params,
                        a = i.slides,
                        e = i.activeIndex,
                        n = i.virtual && s.virtual.enabled,
                        r = s.lazy,
                        o = s.slidesPerView;
                    function l(e) {
                        if (n) {
                            if (t.children("." + s.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return 1;
                        } else if (a[e]) return 1;
                    }
                    function d(e) {
                        return n ? E(e).attr("data-swiper-slide-index") : E(e).index();
                    }
                    if (("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility))
                        t.children("." + s.slideVisibleClass).each(function (e, t) {
                            t = n ? E(t).attr("data-swiper-slide-index") : E(t).index();
                            i.lazy.loadInSlide(t);
                        });
                    else if (1 < o) for (var h = e; h < e + o; h += 1) l(h) && i.lazy.loadInSlide(h);
                    else i.lazy.loadInSlide(e);
                    if (r.loadPrevNext)
                        if (1 < o || (r.loadPrevNextAmount && 1 < r.loadPrevNextAmount)) {
                            for (var r = r.loadPrevNextAmount, p = o, c = Math.min(e + p + Math.max(r, p), a.length), p = Math.max(e - Math.max(p, r), 0), u = e + o; u < c; u += 1) l(u) && i.lazy.loadInSlide(u);
                            for (var m = p; m < e; m += 1) l(m) && i.lazy.loadInSlide(m);
                        } else {
                            (r = t.children("." + s.slideNextClass)), (p = (0 < r.length && i.lazy.loadInSlide(d(r)), t.children("." + s.slidePrevClass)));
                            0 < p.length && i.lazy.loadInSlide(d(p));
                        }
                },
            },
            k = {
                LinearSpline: function (e, t) {
                    var i, s, a, n, r;
                    return (
                        (this.x = e),
                        (this.y = t),
                        (this.lastIndex = e.length - 1),
                        (this.interpolate = function (e) {
                            return e
                                ? ((r = (function (e, t) {
                                      for (s = -1, i = e.length; 1 < i - s; ) e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
                                      return i;
                                  })(this.x, e)),
                                  (n = r - 1),
                                  ((e - this.x[n]) * (this.y[r] - this.y[n])) / (this.x[r] - this.x[n]) + this.y[n])
                                : 0;
                        }),
                        this
                    );
                },
                getInterpolateFunction: function (e) {
                    this.controller.spline || (this.controller.spline = this.params.loop ? new k.LinearSpline(this.slidesGrid, e.slidesGrid) : new k.LinearSpline(this.snapGrid, e.snapGrid));
                },
                setTranslate: function (e, t) {
                    var i,
                        s,
                        a = this,
                        n = a.controller.control;
                    function r(e) {
                        var t = a.rtlTranslate ? -a.translate : a.translate;
                        "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), (s = -a.controller.spline.interpolate(-t))),
                            (s && "container" !== a.params.controller.by) || ((i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate())), (s = (t - a.minTranslate()) * i + e.minTranslate())),
                            a.params.controller.inverse && (s = e.maxTranslate() - s),
                            e.updateProgress(s),
                            e.setTranslate(s, a),
                            e.updateActiveIndex(),
                            e.updateSlidesClasses();
                    }
                    if (Array.isArray(n)) for (var o = 0; o < n.length; o += 1) n[o] !== t && n[o] instanceof c && r(n[o]);
                    else n instanceof c && t !== n && r(n);
                },
                setTransition: function (t, e) {
                    var i,
                        s = this,
                        a = s.controller.control;
                    function n(e) {
                        e.setTransition(t, s),
                            0 !== t &&
                                (e.transitionStart(),
                                e.params.autoHeight &&
                                    U.nextTick(function () {
                                        e.updateAutoHeight();
                                    }),
                                e.$wrapperEl.transitionEnd(function () {
                                    a && (e.params.loop && "slide" === s.params.controller.by && e.loopFix(), e.transitionEnd());
                                }));
                    }
                    if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== e && a[i] instanceof c && n(a[i]);
                    else a instanceof c && e !== a && n(a);
                },
            },
            ie = {
                makeElFocusable: function (e) {
                    return e.attr("tabIndex", "0"), e;
                },
                makeElNotFocusable: function (e) {
                    return e.attr("tabIndex", "-1"), e;
                },
                addElRole: function (e, t) {
                    return e.attr("role", t), e;
                },
                addElLabel: function (e, t) {
                    return e.attr("aria-label", t), e;
                },
                disableEl: function (e) {
                    return e.attr("aria-disabled", !0), e;
                },
                enableEl: function (e) {
                    return e.attr("aria-disabled", !1), e;
                },
                onEnterKey: function (e) {
                    var t = this.params.a11y;
                    13 === e.keyCode &&
                        ((e = E(e.target)),
                        this.navigation &&
                            this.navigation.$nextEl &&
                            e.is(this.navigation.$nextEl) &&
                            ((this.isEnd && !this.params.loop) || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                        this.navigation &&
                            this.navigation.$prevEl &&
                            e.is(this.navigation.$prevEl) &&
                            ((this.isBeginning && !this.params.loop) || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                        this.pagination && e.is("." + this.params.pagination.bulletClass) && e[0].click());
                },
                notify: function (e) {
                    var t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e));
                },
                updateNavigation: function () {
                    var e, t;
                    !this.params.loop &&
                        this.navigation &&
                        ((e = (t = this.navigation).$nextEl),
                        (t = t.$prevEl) && 0 < t.length && (this.isBeginning ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t))),
                        e && 0 < e.length && (this.isEnd ? (this.a11y.disableEl(e), this.a11y.makeElNotFocusable(e)) : (this.a11y.enableEl(e), this.a11y.makeElFocusable(e))));
                },
                updatePagination: function () {
                    var i = this,
                        s = i.params.a11y;
                    i.pagination &&
                        i.params.pagination.clickable &&
                        i.pagination.bullets &&
                        i.pagination.bullets.length &&
                        i.pagination.bullets.each(function (e, t) {
                            t = E(t);
                            i.a11y.makeElFocusable(t), i.a11y.addElRole(t, "button"), i.a11y.addElLabel(t, s.paginationBulletMessage.replace(/\{\{index\}\}/, t.index() + 1));
                        });
                },
                init: function () {
                    this.$el.append(this.a11y.liveRegion);
                    var e,
                        t,
                        i = this.params.a11y;
                    this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                        this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
                        e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)),
                        t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)),
                        this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
                },
                destroy: function () {
                    var e, t;
                    this.a11y.liveRegion && 0 < this.a11y.liveRegion.length && this.a11y.liveRegion.remove(),
                        this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                        this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
                        e && e.off("keydown", this.a11y.onEnterKey),
                        t && t.off("keydown", this.a11y.onEnterKey),
                        this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
                },
            },
            I = {
                init: function () {
                    if (this.params.history) {
                        if (!K.history || !K.history.pushState) return (this.params.history.enabled = !1), void (this.params.hashNavigation.enabled = !0);
                        var e = this.history;
                        (e.initialized = !0),
                            (e.paths = I.getPathValues()),
                            (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || K.addEventListener("popstate", this.history.setHistoryPopState));
                    }
                },
                destroy: function () {
                    this.params.history.replaceState || K.removeEventListener("popstate", this.history.setHistoryPopState);
                },
                setHistoryPopState: function () {
                    (this.history.paths = I.getPathValues()), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
                },
                getPathValues: function () {
                    var e = K.location.pathname
                            .slice(1)
                            .split("/")
                            .filter(function (e) {
                                return "" !== e;
                            }),
                        t = e.length;
                    return { key: e[t - 2], value: e[t - 1] };
                },
                setHistory: function (e, t) {
                    this.history.initialized &&
                        this.params.history.enabled &&
                        ((t = this.slides.eq(t)),
                        (t = I.slugify(t.attr("data-history"))),
                        K.location.pathname.includes(e) || (t = e + "/" + t),
                        ((e = K.history.state) && e.value === t) || (this.params.history.replaceState ? K.history.replaceState({ value: t }, null, t) : K.history.pushState({ value: t }, null, t)));
                },
                slugify: function (e) {
                    return e
                        .toString()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]+/g, "")
                        .replace(/--+/g, "-")
                        .replace(/^-+/, "")
                        .replace(/-+$/, "");
                },
                scrollToSlide: function (e, t, i) {
                    if (t)
                        for (var s = 0, a = this.slides.length; s < a; s += 1) {
                            var n = this.slides.eq(s);
                            I.slugify(n.attr("data-history")) !== t || n.hasClass(this.params.slideDuplicateClass) || ((n = n.index()), this.slideTo(n, e, i));
                        }
                    else this.slideTo(0, e, i);
                },
            },
            $ = {
                onHashCange: function () {
                    this.emit("hashChange");
                    var e = v.location.hash.replace("#", "");
                    e !== this.slides.eq(this.activeIndex).attr("data-hash") && void 0 !== (e = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index()) && this.slideTo(e);
                },
                setHash: function () {
                    var e;
                    this.hashNavigation.initialized &&
                        this.params.hashNavigation.enabled &&
                        (this.params.hashNavigation.replaceState && K.history && K.history.replaceState
                            ? K.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "")
                            : ((e = (e = this.slides.eq(this.activeIndex)).attr("data-hash") || e.attr("data-history")), (v.location.hash = e || "")),
                        this.emit("hashSet"));
                },
                init: function () {
                    if (!(!this.params.hashNavigation.enabled || (this.params.history && this.params.history.enabled))) {
                        this.hashNavigation.initialized = !0;
                        var e = v.location.hash.replace("#", "");
                        if (e)
                            for (var t = 0, i = this.slides.length; t < i; t += 1) {
                                var s = this.slides.eq(t);
                                (s.attr("data-hash") || s.attr("data-history")) !== e || s.hasClass(this.params.slideDuplicateClass) || ((s = s.index()), this.slideTo(s, 0, this.params.runCallbacksOnInit, !0));
                            }
                        this.params.hashNavigation.watchState && E(K).on("hashchange", this.hashNavigation.onHashCange);
                    }
                },
                destroy: function () {
                    this.params.hashNavigation.watchState && E(K).off("hashchange", this.hashNavigation.onHashCange);
                },
            },
            L = {
                run: function () {
                    var e = this,
                        t = e.slides.eq(e.activeIndex),
                        i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                        clearTimeout(e.autoplay.timeout),
                        (e.autoplay.timeout = U.nextTick(function () {
                            e.params.autoplay.reverseDirection
                                ? e.params.loop
                                    ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                    : e.isBeginning
                                    ? e.params.autoplay.stopOnLastSlide
                                        ? e.autoplay.stop()
                                        : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay"))
                                    : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                : e.params.loop
                                ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                                : e.isEnd
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                                : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
                                e.params.cssMode && e.autoplay.running && e.autoplay.run();
                        }, i));
                },
                start: function () {
                    return void 0 === this.autoplay.timeout && !this.autoplay.running && ((this.autoplay.running = !0), this.emit("autoplayStart"), this.autoplay.run(), !0);
                },
                stop: function () {
                    return (
                        !!this.autoplay.running &&
                        void 0 !== this.autoplay.timeout &&
                        (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), (this.autoplay.timeout = void 0)), (this.autoplay.running = !1), this.emit("autoplayStop"), !0)
                    );
                },
                pause: function (e) {
                    !this.autoplay.running ||
                        this.autoplay.paused ||
                        (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
                        (this.autoplay.paused = !0),
                        0 !== e && this.params.autoplay.waitForTransition
                            ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd))
                            : ((this.autoplay.paused = !1), this.autoplay.run()));
                },
            },
            se = {
                setTranslate: function () {
                    for (var e = this, t = this.slides, i = 0; i < t.length; i += 1) {
                        var s = e.slides.eq(i),
                            a = -s[0].swiperSlideOffset,
                            n = (e.params.virtualTranslate || (a -= e.translate), 0),
                            r = (e.isHorizontal() || ((n = a), (a = 0)), e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(s[0].progress), 0) : 1 + Math.min(Math.max(s[0].progress, -1), 0));
                        s.css({ opacity: r }).transform("translate3d(" + a + "px, " + n + "px, 0px)");
                    }
                },
                setTransition: function (e) {
                    var i,
                        s = this,
                        t = s.slides,
                        a = s.$wrapperEl;
                    t.transition(e),
                        s.params.virtualTranslate &&
                            0 !== e &&
                            ((i = !1),
                            t.transitionEnd(function () {
                                if (!i && s && !s.destroyed) {
                                    (i = !0), (s.animating = !1);
                                    for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) a.trigger(e[t]);
                                }
                            }));
                },
            },
            ae = {
                setTranslate: function () {
                    var e,
                        t = this.$el,
                        i = this.$wrapperEl,
                        s = this.slides,
                        a = this.width,
                        n = this.height,
                        r = this.rtlTranslate,
                        o = this.size,
                        l = this.params.cubeEffect,
                        d = this.isHorizontal(),
                        h = this.virtual && this.params.virtual.enabled,
                        p = 0;
                    l.shadow &&
                        (d
                            ? (0 === (e = i.find(".swiper-cube-shadow")).length && ((e = E('<div class="swiper-cube-shadow"></div>')), i.append(e)), e.css({ height: a + "px" }))
                            : 0 === (e = t.find(".swiper-cube-shadow")).length && ((e = E('<div class="swiper-cube-shadow"></div>')), t.append(e)));
                    for (var c, u = 0; u < s.length; u += 1) {
                        var m = s.eq(u),
                            f = u,
                            v = 90 * (f = h ? parseInt(m.attr("data-swiper-slide-index"), 10) : f),
                            g = Math.floor(v / 360),
                            b = (r && ((v = -v), (g = Math.floor(-v / 360))), Math.max(Math.min(m[0].progress, 1), -1)),
                            w = 0,
                            y = 0,
                            x = 0,
                            g =
                                (f % 4 == 0 ? ((w = 4 * -g * o), (x = 0)) : (f - 1) % 4 == 0 ? ((w = 0), (x = 4 * -g * o)) : (f - 2) % 4 == 0 ? ((w = o + 4 * g * o), (x = o)) : (f - 3) % 4 == 0 && ((w = -o), (x = 3 * o + 4 * o * g)),
                                r && (w = -w),
                                d || ((y = w), (w = 0)),
                                "rotateX(" + (d ? 0 : -v) + "deg) rotateY(" + (d ? v : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)");
                        b <= 1 && -1 < b && (p = r ? 90 * -f - 90 * b : 90 * f + 90 * b),
                            m.transform(g),
                            l.slideShadows &&
                                ((v = d ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top")),
                                (w = d ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom")),
                                0 === v.length && ((v = E('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>')), m.append(v)),
                                0 === w.length && ((w = E('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>')), m.append(w)),
                                v.length && (v[0].style.opacity = Math.max(-b, 0)),
                                w.length && (w[0].style.opacity = Math.max(b, 0)));
                    }
                    i.css({ "-webkit-transform-origin": "50% 50% -" + o / 2 + "px", "-moz-transform-origin": "50% 50% -" + o / 2 + "px", "-ms-transform-origin": "50% 50% -" + o / 2 + "px", "transform-origin": "50% 50% -" + o / 2 + "px" }),
                        l.shadow &&
                            (d
                                ? e.transform("translate3d(0px, " + (a / 2 + l.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + l.shadowScale + ")")
                                : ((t = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90)),
                                  (a = 1.5 - (Math.sin((2 * t * Math.PI) / 360) / 2 + Math.cos((2 * t * Math.PI) / 360) / 2)),
                                  (t = l.shadowScale),
                                  (a = l.shadowScale / a),
                                  (c = l.shadowOffset),
                                  e.transform("scale3d(" + t + ", 1, " + a + ") translate3d(0px, " + (n / 2 + c) + "px, " + -n / 2 / a + "px) rotateX(-90deg)"))),
                        i.transform("translate3d(0px,0," + (T.isSafari || T.isWebView ? -o / 2 : 0) + "px) rotateX(" + (this.isHorizontal() ? 0 : p) + "deg) rotateY(" + (this.isHorizontal() ? -p : 0) + "deg)");
                },
                setTransition: function (e) {
                    var t = this.$el;
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
                },
            },
            ne = {
                setTranslate: function () {
                    for (var e = this, t = this.slides, i = this.rtlTranslate, s = 0; s < t.length; s += 1) {
                        var a,
                            n,
                            r = t.eq(s),
                            o = r[0].progress,
                            l = -180 * (o = e.params.flipEffect.limitRotation ? Math.max(Math.min(r[0].progress, 1), -1) : o),
                            d = 0,
                            h = -r[0].swiperSlideOffset,
                            p = 0;
                        e.isHorizontal() ? i && (l = -l) : ((p = h), (d = -l), (l = h = 0)),
                            (r[0].style.zIndex = -Math.abs(Math.round(o)) + t.length),
                            e.params.flipEffect.slideShadows &&
                                ((a = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top")),
                                (n = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom")),
                                0 === a.length && ((a = E('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>')), r.append(a)),
                                0 === n.length && ((n = E('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>')), r.append(n)),
                                a.length && (a[0].style.opacity = Math.max(-o, 0)),
                                n.length && (n[0].style.opacity = Math.max(o, 0))),
                            r.transform("translate3d(" + h + "px, " + p + "px, 0px) rotateX(" + d + "deg) rotateY(" + l + "deg)");
                    }
                },
                setTransition: function (e) {
                    var i,
                        s = this,
                        t = s.slides,
                        a = s.activeIndex,
                        n = s.$wrapperEl;
                    t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        s.params.virtualTranslate &&
                            0 !== e &&
                            ((i = !1),
                            t.eq(a).transitionEnd(function () {
                                if (!i && s && !s.destroyed) {
                                    (i = !0), (s.animating = !1);
                                    for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) n.trigger(e[t]);
                                }
                            }));
                },
            },
            re = {
                setTranslate: function () {
                    for (
                        var e = this.width,
                            t = this.height,
                            i = this.slides,
                            s = this.$wrapperEl,
                            a = this.slidesSizesGrid,
                            n = this.params.coverflowEffect,
                            r = this.isHorizontal(),
                            o = this.translate,
                            l = r ? e / 2 - o : t / 2 - o,
                            d = r ? n.rotate : -n.rotate,
                            h = n.depth,
                            p = 0,
                            c = i.length;
                        p < c;
                        p += 1
                    ) {
                        var u = i.eq(p),
                            m = a[p],
                            f = ((l - u[0].swiperSlideOffset - m / 2) / m) * n.modifier,
                            v = r ? d * f : 0,
                            g = r ? 0 : d * f,
                            b = -h * Math.abs(f),
                            w = n.stretch,
                            m = ("string" == typeof w && -1 !== w.indexOf("%") && (w = (parseFloat(n.stretch) / 100) * m), r ? 0 : w * f),
                            w = r ? w * f : 0,
                            y = 1 - (1 - n.scale) * Math.abs(f),
                            w =
                                (Math.abs(w) < 0.001 && (w = 0),
                                Math.abs(m) < 0.001 && (m = 0),
                                Math.abs(b) < 0.001 && (b = 0),
                                Math.abs(v) < 0.001 && (v = 0),
                                "translate3d(" + w + "px," + m + "px," + b + "px)  rotateX(" + (g = Math.abs(g) < 0.001 ? 0 : g) + "deg) rotateY(" + v + "deg) scale(" + (y = Math.abs(y) < 0.001 ? 0 : y) + ")");
                        u.transform(w),
                            (u[0].style.zIndex = 1 - Math.abs(Math.round(f))),
                            n.slideShadows &&
                                ((m = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top")),
                                (b = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom")),
                                0 === m.length && ((m = E('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>')), u.append(m)),
                                0 === b.length && ((b = E('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>')), u.append(b)),
                                m.length && (m[0].style.opacity = 0 < f ? f : 0),
                                b.length && (b[0].style.opacity = 0 < -f ? -f : 0));
                    }
                    (x.pointerEvents || x.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = l + "px 50%");
                },
                setTransition: function (e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                },
            },
            oe = {
                init: function () {
                    var e = this.params.thumbs,
                        t = this.constructor;
                    e.swiper instanceof t
                        ? ((this.thumbs.swiper = e.swiper),
                          U.extend(this.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                          U.extend(this.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                        : U.isObject(e.swiper) && ((this.thumbs.swiper = new t(U.extend({}, e.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (this.thumbs.swiperCreated = !0)),
                        this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
                        this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
                },
                onThumbClick: function () {
                    var e,
                        t,
                        i,
                        s = this.thumbs.swiper;
                    s &&
                        ((e = s.clickedIndex),
                        ((i = s.clickedSlide) && E(i).hasClass(this.params.thumbs.slideThumbActiveClass)) ||
                            null == e ||
                            ((i = s.params.loop ? parseInt(E(s.clickedSlide).attr("data-swiper-slide-index"), 10) : e),
                            this.params.loop &&
                                ((s = this.activeIndex),
                                this.slides.eq(s).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft), (s = this.activeIndex)),
                                (e = this.slides
                                    .eq(s)
                                    .prevAll('[data-swiper-slide-index="' + i + '"]')
                                    .eq(0)
                                    .index()),
                                (t = this.slides
                                    .eq(s)
                                    .nextAll('[data-swiper-slide-index="' + i + '"]')
                                    .eq(0)
                                    .index()),
                                (i = void 0 === e || (void 0 !== t && t - s < s - e) ? t : e)),
                            this.slideTo(i)));
                },
                update: function (e) {
                    var t = this.thumbs.swiper;
                    if (t) {
                        var i,
                            s,
                            a,
                            n = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
                            r = this.params.thumbs.autoScrollOffset,
                            o = r && !t.params.loop,
                            l =
                                ((this.realIndex === t.realIndex && !o) ||
                                    ((i = t.activeIndex),
                                    (a = t.params.loop
                                        ? (t.slides.eq(i).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), (t._clientLeft = t.$wrapperEl[0].clientLeft), (i = t.activeIndex)),
                                          (a = t.slides
                                              .eq(i)
                                              .prevAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                                              .eq(0)
                                              .index()),
                                          (s = t.slides
                                              .eq(i)
                                              .nextAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                                              .eq(0)
                                              .index()),
                                          (s = void 0 === a ? s : void 0 === s ? a : s - i == i - a ? i : s - i < i - a ? s : a),
                                          this.activeIndex > this.previousIndex ? "next" : "prev")
                                        : (s = this.realIndex) > this.previousIndex
                                        ? "next"
                                        : "prev"),
                                    o && (s += "next" === a ? r : -1 * r),
                                    t.visibleSlidesIndexes &&
                                        t.visibleSlidesIndexes.indexOf(s) < 0 &&
                                        (t.params.centeredSlides ? (s = i < s ? s - Math.floor(n / 2) + 1 : s + Math.floor(n / 2) - 1) : i < s && (s = s - n + 1), t.slideTo(s, e ? 0 : void 0))),
                                1),
                            d = this.params.thumbs.slideThumbActiveClass;
                        if (
                            (1 < this.params.slidesPerView && !this.params.centeredSlides && (l = this.params.slidesPerView),
                            this.params.thumbs.multipleActiveThumbs || (l = 1),
                            (l = Math.floor(l)),
                            t.slides.removeClass(d),
                            t.params.loop || (t.params.virtual && t.params.virtual.enabled))
                        )
                            for (var h = 0; h < l; h += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + h) + '"]').addClass(d);
                        else for (var p = 0; p < l; p += 1) t.slides.eq(this.realIndex + p).addClass(d);
                    }
                },
            },
            O = [
                u,
                Q,
                _,
                m,
                g,
                w,
                y,
                {
                    name: "mousewheel",
                    params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
                    create: function () {
                        U.extend(this, {
                            mousewheel: {
                                enabled: !1,
                                enable: C.enable.bind(this),
                                disable: C.disable.bind(this),
                                handle: C.handle.bind(this),
                                handleMouseEnter: C.handleMouseEnter.bind(this),
                                handleMouseLeave: C.handleMouseLeave.bind(this),
                                animateSlider: C.animateSlider.bind(this),
                                releaseScroll: C.releaseScroll.bind(this),
                                lastScrollTime: U.now(),
                                lastEventBeforeSnap: void 0,
                                recentWheelEvents: [],
                            },
                        });
                    },
                    on: {
                        init: function () {
                            !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable();
                        },
                        destroy: function () {
                            this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable();
                        },
                    },
                },
                {
                    name: "navigation",
                    params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                    create: function () {
                        U.extend(this, { navigation: { init: M.init.bind(this), update: M.update.bind(this), destroy: M.destroy.bind(this), onNextClick: M.onNextClick.bind(this), onPrevClick: M.onPrevClick.bind(this) } });
                    },
                    on: {
                        init: function () {
                            this.navigation.init(), this.navigation.update();
                        },
                        toEdge: function () {
                            this.navigation.update();
                        },
                        fromEdge: function () {
                            this.navigation.update();
                        },
                        destroy: function () {
                            this.navigation.destroy();
                        },
                        click: function (e) {
                            var t,
                                i = this.navigation,
                                s = i.$nextEl,
                                i = i.$prevEl;
                            !this.params.navigation.hideOnClick ||
                                E(e.target).is(i) ||
                                E(e.target).is(s) ||
                                (s ? (t = s.hasClass(this.params.navigation.hiddenClass)) : i && (t = i.hasClass(this.params.navigation.hiddenClass)),
                                !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this),
                                s && s.toggleClass(this.params.navigation.hiddenClass),
                                i && i.toggleClass(this.params.navigation.hiddenClass));
                        },
                    },
                },
                {
                    name: "pagination",
                    params: {
                        pagination: {
                            el: null,
                            bulletElement: "span",
                            clickable: !1,
                            hideOnClick: !1,
                            renderBullet: null,
                            renderProgressbar: null,
                            renderFraction: null,
                            renderCustom: null,
                            progressbarOpposite: !1,
                            type: "bullets",
                            dynamicBullets: !1,
                            dynamicMainBullets: 1,
                            formatFractionCurrent: function (e) {
                                return e;
                            },
                            formatFractionTotal: function (e) {
                                return e;
                            },
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                            modifierClass: "swiper-pagination-",
                            currentClass: "swiper-pagination-current",
                            totalClass: "swiper-pagination-total",
                            hiddenClass: "swiper-pagination-hidden",
                            progressbarFillClass: "swiper-pagination-progressbar-fill",
                            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                            clickableClass: "swiper-pagination-clickable",
                            lockClass: "swiper-pagination-lock",
                        },
                    },
                    create: function () {
                        U.extend(this, { pagination: { init: P.init.bind(this), render: P.render.bind(this), update: P.update.bind(this), destroy: P.destroy.bind(this), dynamicBulletIndex: 0 } });
                    },
                    on: {
                        init: function () {
                            this.pagination.init(), this.pagination.render(), this.pagination.update();
                        },
                        activeIndexChange: function () {
                            (!this.params.loop && void 0 !== this.snapIndex) || this.pagination.update();
                        },
                        snapIndexChange: function () {
                            this.params.loop || this.pagination.update();
                        },
                        slidesLengthChange: function () {
                            this.params.loop && (this.pagination.render(), this.pagination.update());
                        },
                        snapGridLengthChange: function () {
                            this.params.loop || (this.pagination.render(), this.pagination.update());
                        },
                        destroy: function () {
                            this.pagination.destroy();
                        },
                        click: function (e) {
                            this.params.pagination.el &&
                                this.params.pagination.hideOnClick &&
                                0 < this.pagination.$el.length &&
                                !E(e.target).hasClass(this.params.pagination.bulletClass) &&
                                (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this),
                                this.pagination.$el.toggleClass(this.params.pagination.hiddenClass));
                        },
                    },
                },
                {
                    name: "scrollbar",
                    params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                    create: function () {
                        U.extend(this, {
                            scrollbar: {
                                init: z.init.bind(this),
                                destroy: z.destroy.bind(this),
                                updateSize: z.updateSize.bind(this),
                                setTranslate: z.setTranslate.bind(this),
                                setTransition: z.setTransition.bind(this),
                                enableDraggable: z.enableDraggable.bind(this),
                                disableDraggable: z.disableDraggable.bind(this),
                                setDragPosition: z.setDragPosition.bind(this),
                                getPointerPosition: z.getPointerPosition.bind(this),
                                onDragStart: z.onDragStart.bind(this),
                                onDragMove: z.onDragMove.bind(this),
                                onDragEnd: z.onDragEnd.bind(this),
                                isTouched: !1,
                                timeout: null,
                                dragTimeout: null,
                            },
                        });
                    },
                    on: {
                        init: function () {
                            this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
                        },
                        update: function () {
                            this.scrollbar.updateSize();
                        },
                        resize: function () {
                            this.scrollbar.updateSize();
                        },
                        observerUpdate: function () {
                            this.scrollbar.updateSize();
                        },
                        setTranslate: function () {
                            this.scrollbar.setTranslate();
                        },
                        setTransition: function (e) {
                            this.scrollbar.setTransition(e);
                        },
                        destroy: function () {
                            this.scrollbar.destroy();
                        },
                    },
                },
                {
                    name: "parallax",
                    params: { parallax: { enabled: !1 } },
                    create: function () {
                        U.extend(this, { parallax: { setTransform: J.setTransform.bind(this), setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            this.params.parallax.enabled && ((this.params.watchSlidesProgress = !0), (this.originalParams.watchSlidesProgress = !0));
                        },
                        init: function () {
                            this.params.parallax.enabled && this.parallax.setTranslate();
                        },
                        setTranslate: function () {
                            this.params.parallax.enabled && this.parallax.setTranslate();
                        },
                        setTransition: function (e) {
                            this.params.parallax.enabled && this.parallax.setTransition(e);
                        },
                    },
                },
                {
                    name: "zoom",
                    params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                    create: function () {
                        var s = this,
                            t = {
                                enabled: !1,
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {},
                                },
                                velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                            },
                            a =
                                ("onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
                                    t[e] = ee[e].bind(s);
                                }),
                                U.extend(s, { zoom: t }),
                                1);
                        Object.defineProperty(s.zoom, "scale", {
                            get: function () {
                                return a;
                            },
                            set: function (e) {
                                var t, i;
                                a !== e && ((t = s.zoom.gesture.$imageEl ? s.zoom.gesture.$imageEl[0] : void 0), (i = s.zoom.gesture.$slideEl ? s.zoom.gesture.$slideEl[0] : void 0), s.emit("zoomChange", e, t, i)), (a = e);
                            },
                        });
                    },
                    on: {
                        init: function () {
                            this.params.zoom.enabled && this.zoom.enable();
                        },
                        destroy: function () {
                            this.zoom.disable();
                        },
                        touchStart: function (e) {
                            this.zoom.enabled && this.zoom.onTouchStart(e);
                        },
                        touchEnd: function (e) {
                            this.zoom.enabled && this.zoom.onTouchEnd(e);
                        },
                        doubleTap: function (e) {
                            this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
                        },
                        transitionEnd: function () {
                            this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
                        },
                        slideChange: function () {
                            this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd();
                        },
                    },
                },
                {
                    name: "lazy",
                    params: {
                        lazy: {
                            enabled: !1,
                            loadPrevNext: !1,
                            loadPrevNextAmount: 1,
                            loadOnTransitionStart: !1,
                            elementClass: "swiper-lazy",
                            loadingClass: "swiper-lazy-loading",
                            loadedClass: "swiper-lazy-loaded",
                            preloaderClass: "swiper-lazy-preloader",
                        },
                    },
                    create: function () {
                        U.extend(this, { lazy: { initialImageLoaded: !1, load: te.load.bind(this), loadInSlide: te.loadInSlide.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
                        },
                        init: function () {
                            this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
                        },
                        scroll: function () {
                            this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
                        },
                        resize: function () {
                            this.params.lazy.enabled && this.lazy.load();
                        },
                        scrollbarDragMove: function () {
                            this.params.lazy.enabled && this.lazy.load();
                        },
                        transitionStart: function () {
                            this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || (!this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded)) && this.lazy.load();
                        },
                        transitionEnd: function () {
                            this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
                        },
                        slideChange: function () {
                            this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
                        },
                    },
                },
                {
                    name: "controller",
                    params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                    create: function () {
                        U.extend(this, {
                            controller: { control: this.params.controller.control, getInterpolateFunction: k.getInterpolateFunction.bind(this), setTranslate: k.setTranslate.bind(this), setTransition: k.setTransition.bind(this) },
                        });
                    },
                    on: {
                        update: function () {
                            this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                        },
                        resize: function () {
                            this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                        },
                        observerUpdate: function () {
                            this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                        },
                        setTranslate: function (e, t) {
                            this.controller.control && this.controller.setTranslate(e, t);
                        },
                        setTransition: function (e, t) {
                            this.controller.control && this.controller.setTransition(e, t);
                        },
                    },
                },
                {
                    name: "a11y",
                    params: {
                        a11y: {
                            enabled: !0,
                            notificationClass: "swiper-notification",
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}",
                        },
                    },
                    create: function () {
                        var t = this;
                        U.extend(t, { a11y: { liveRegion: E('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }),
                            Object.keys(ie).forEach(function (e) {
                                t.a11y[e] = ie[e].bind(t);
                            });
                    },
                    on: {
                        init: function () {
                            this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
                        },
                        toEdge: function () {
                            this.params.a11y.enabled && this.a11y.updateNavigation();
                        },
                        fromEdge: function () {
                            this.params.a11y.enabled && this.a11y.updateNavigation();
                        },
                        paginationUpdate: function () {
                            this.params.a11y.enabled && this.a11y.updatePagination();
                        },
                        destroy: function () {
                            this.params.a11y.enabled && this.a11y.destroy();
                        },
                    },
                },
                {
                    name: "history",
                    params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
                    create: function () {
                        U.extend(this, {
                            history: { init: I.init.bind(this), setHistory: I.setHistory.bind(this), setHistoryPopState: I.setHistoryPopState.bind(this), scrollToSlide: I.scrollToSlide.bind(this), destroy: I.destroy.bind(this) },
                        });
                    },
                    on: {
                        init: function () {
                            this.params.history.enabled && this.history.init();
                        },
                        destroy: function () {
                            this.params.history.enabled && this.history.destroy();
                        },
                        transitionEnd: function () {
                            this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
                        },
                        slideChange: function () {
                            this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex);
                        },
                    },
                },
                {
                    name: "hash-navigation",
                    params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                    create: function () {
                        U.extend(this, { hashNavigation: { initialized: !1, init: $.init.bind(this), destroy: $.destroy.bind(this), setHash: $.setHash.bind(this), onHashCange: $.onHashCange.bind(this) } });
                    },
                    on: {
                        init: function () {
                            this.params.hashNavigation.enabled && this.hashNavigation.init();
                        },
                        destroy: function () {
                            this.params.hashNavigation.enabled && this.hashNavigation.destroy();
                        },
                        transitionEnd: function () {
                            this.hashNavigation.initialized && this.hashNavigation.setHash();
                        },
                        slideChange: function () {
                            this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash();
                        },
                    },
                },
                {
                    name: "autoplay",
                    params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                    create: function () {
                        var t = this;
                        U.extend(t, {
                            autoplay: {
                                running: !1,
                                paused: !1,
                                run: L.run.bind(t),
                                start: L.start.bind(t),
                                stop: L.stop.bind(t),
                                pause: L.pause.bind(t),
                                onVisibilityChange: function () {
                                    "hidden" === document.visibilityState && t.autoplay.running && t.autoplay.pause(), "visible" === document.visibilityState && t.autoplay.paused && (t.autoplay.run(), (t.autoplay.paused = !1));
                                },
                                onTransitionEnd: function (e) {
                                    t &&
                                        !t.destroyed &&
                                        t.$wrapperEl &&
                                        e.target === this &&
                                        (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd),
                                        t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd),
                                        (t.autoplay.paused = !1),
                                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                                },
                            },
                        });
                    },
                    on: {
                        init: function () {
                            this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange));
                        },
                        beforeTransitionStart: function (e, t) {
                            this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
                        },
                        sliderFirstMove: function () {
                            this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
                        },
                        touchEnd: function () {
                            this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run();
                        },
                        destroy: function () {
                            this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange);
                        },
                    },
                },
                {
                    name: "effect-fade",
                    params: { fadeEffect: { crossFade: !1 } },
                    create: function () {
                        U.extend(this, { fadeEffect: { setTranslate: se.setTranslate.bind(this), setTransition: se.setTransition.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e;
                            "fade" === this.params.effect &&
                                (this.classNames.push(this.params.containerModifierClass + "fade"),
                                U.extend(this.params, (e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 })),
                                U.extend(this.originalParams, e));
                        },
                        setTranslate: function () {
                            "fade" === this.params.effect && this.fadeEffect.setTranslate();
                        },
                        setTransition: function (e) {
                            "fade" === this.params.effect && this.fadeEffect.setTransition(e);
                        },
                    },
                },
                {
                    name: "effect-cube",
                    params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
                    create: function () {
                        U.extend(this, { cubeEffect: { setTranslate: ae.setTranslate.bind(this), setTransition: ae.setTransition.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e;
                            "cube" === this.params.effect &&
                                (this.classNames.push(this.params.containerModifierClass + "cube"),
                                this.classNames.push(this.params.containerModifierClass + "3d"),
                                U.extend(this.params, (e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 })),
                                U.extend(this.originalParams, e));
                        },
                        setTranslate: function () {
                            "cube" === this.params.effect && this.cubeEffect.setTranslate();
                        },
                        setTransition: function (e) {
                            "cube" === this.params.effect && this.cubeEffect.setTransition(e);
                        },
                    },
                },
                {
                    name: "effect-flip",
                    params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                    create: function () {
                        U.extend(this, { flipEffect: { setTranslate: ne.setTranslate.bind(this), setTransition: ne.setTransition.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e;
                            "flip" === this.params.effect &&
                                (this.classNames.push(this.params.containerModifierClass + "flip"),
                                this.classNames.push(this.params.containerModifierClass + "3d"),
                                U.extend(this.params, (e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 })),
                                U.extend(this.originalParams, e));
                        },
                        setTranslate: function () {
                            "flip" === this.params.effect && this.flipEffect.setTranslate();
                        },
                        setTransition: function (e) {
                            "flip" === this.params.effect && this.flipEffect.setTransition(e);
                        },
                    },
                },
                {
                    name: "effect-coverflow",
                    params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 } },
                    create: function () {
                        U.extend(this, { coverflowEffect: { setTranslate: re.setTranslate.bind(this), setTransition: re.setTransition.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            "coverflow" === this.params.effect &&
                                (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                                this.classNames.push(this.params.containerModifierClass + "3d"),
                                (this.params.watchSlidesProgress = !0),
                                (this.originalParams.watchSlidesProgress = !0));
                        },
                        setTranslate: function () {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
                        },
                        setTransition: function (e) {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
                        },
                    },
                },
                {
                    name: "thumbs",
                    params: { thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                    create: function () {
                        U.extend(this, { thumbs: { swiper: null, init: oe.init.bind(this), update: oe.update.bind(this), onThumbClick: oe.onThumbClick.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e = this.params.thumbs;
                            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
                        },
                        slideChange: function () {
                            this.thumbs.swiper && this.thumbs.update();
                        },
                        update: function () {
                            this.thumbs.swiper && this.thumbs.update();
                        },
                        resize: function () {
                            this.thumbs.swiper && this.thumbs.update();
                        },
                        observerUpdate: function () {
                            this.thumbs.swiper && this.thumbs.update();
                        },
                        setTransition: function (e) {
                            var t = this.thumbs.swiper;
                            t && t.setTransition(e);
                        },
                        beforeDestroy: function () {
                            var e = this.thumbs.swiper;
                            e && this.thumbs.swiperCreated && e && e.destroy();
                        },
                    },
                },
            ];
        return void 0 === c.use && ((c.use = c.Class.use), (c.installModule = c.Class.installModule)), c.use(O), c;
    }),
    (function (i) {
        i.fn.lazy = function (e) {
            return this.each(function () {
                s.add(this, e);
            });
        };
        var s = {
            init: function (e, t) {
                i.data(e, "lazy.load", t);
            },
            load: function (e) {
                var t = i.data(e, "lazy.load");
                "function" == typeof t && t.call(e);
            },
        };
        window.IntersectionObserver
            ? ((s.run = function (e) {
                  e.forEach(function (e) {
                      (e.isIntersecting || 0 < e.intersectionRatio) && (s.observer.unobserve(e.target), s.load(e.target));
                  });
              }),
              (s.add = function (e, t) {
                  s.observer || (s.observer = new IntersectionObserver(s.run)), s.init(e, t), s.observer.observe(e);
              }))
            : ((s.run = function () {
                  (s.targets = i.grep(s.targets, function (e) {
                      var t = e.getBoundingClientRect(),
                          t = t.top <= window.innerHeight && 0 <= t.bottom && "none" !== window.getComputedStyle(e).display;
                      return t && s.load(e), !t;
                  })),
                      s.targets.length || i(window).off(".lazy");
              }),
              (s.add = function (e, t) {
                  (s.targets && s.targets.length) || ((s.targets = []), i(window).on("resize.lazy orientationchange.lazy scroll.lazy", i.throttle(250, s.run))), s.init(e, t), s.targets.push(e), s.run();
              }));
    })(jQuery),
    (function (e) {
        var t = document.querySelectorAll("[data-section]");
        e(window).on("scroll", function () {
            t.forEach(function (e, t) {
                var i;
                e.getBoundingClientRect().top < 0 && ((e = e.dataset.section), (i = document.querySelector(".active")), (e = document.querySelector('[data-link="' + e + '"]')), i.classList.remove("active"), e.classList.add("active"));
            });
        });
    })(jQuery),
    (function (t) {
        var i,
            s,
            a,
            n,
            e = t("[data-link]");
        (jQuery.easing.def = "easeInOutCubic"),
            e.each(function () {
                t(this).on("click", function (e) {
                    t(document.documentElement).removeClass("has-nav"),
                        e.preventDefault(),
                        (n = t(this)),
                        t(".active").removeClass("active"),
                        (s = n.attr("data-link")),
                        (a = ((windowWidth = window.innerWidth) < 630 ? window.getComputedStyle(document.querySelector(".logo-container"), null) : window.getComputedStyle(document.querySelector(".site-nav"), null)).getPropertyValue(
                            "padding-top"
                        )),
                        (s = document.querySelector('[data-section="' + s + '"]')),
                        (i = s.offsetTop),
                        (s = window.getComputedStyle(s, null).getPropertyValue("padding-top")),
                        (i = i + (parseInt(s) - parseInt(a))),
                        n.addClass("active"),
                        t("html, body").animate({ scrollTop: i, method: jQuery.easeInOutCubic }, 2500);
                });
            });
    })(jQuery),
    (function (i) {
        function e() {
            var e = i(this),
                t = e.css("background-size");
            ("cover" !== t && "contain" !== t) ||
                (i.data(this, "objectFitted") || (i.data(this, "objectFitted", !0), e.wrap("<div />").parent().addClass(this.className)), e.parent().css("backgroundImage", "url(" + (this.currentSrc || this.src) + ")"), e.css("opacity", 0));
        }
        "object-fit" in document.body.style ||
            (i("img").on("load", e).each(e),
            i(window).on(
                "resize orientationchange",
                i.throttle(250, function () {
                    i("img").each(e);
                })
            ));
    })(jQuery),
    (function () {
        function i(e, t, i, s, a) {
            return m(i, s, f(e, t, a));
        }
        var s,
            a,
            n,
            e,
            r,
            o,
            l,
            d,
            h,
            p,
            t,
            c,
            u,
            m = function (e, t, i) {
                return e * (1 - i) + t * i;
            },
            f = function (e, t, i) {
                return (i = (i - e) / (t - e)), void 0 === s && (s = 0), void 0 === a && (a = 1), Math.min(a, Math.max(s, i));
                var s, a;
            };
        function v() {
            (s = window.innerHeight),
                (a = t.getBoundingClientRect().height),
                (e = window.getComputedStyle(t, null).getPropertyValue("padding-bottom")),
                (o = window.getComputedStyle(c, null).getPropertyValue("padding-bottom")),
                (n = p.getBoundingClientRect().height + parseInt(e)),
                (l = c.getBoundingClientRect().height - u.getBoundingClientRect().height),
                (r = s - n),
                (h = !(d = 440));
        }
        (p = document.getElementById("logo")),
            (t = document.querySelector("article")),
            (c = document.querySelector(".scroll-indicator-outer")),
            (u = document.querySelector(".scroll-indicator")),
            v(),
            window.requestAnimationFrame(function e() {
                var t = i(0, a - s, 0, s - n, window.scrollY);
                t === r ? h || (document.body.classList.add("unfix-logo"), (h = !0)) : (document.body.classList.remove("unfix-logo"), (p.style.top = t + "px"), (h = !1)), window.requestAnimationFrame(e);
            }),
            window.requestAnimationFrame(function e() {
                var t = i(0, a - s, 0, l - parseInt(o), window.scrollY);
                (h = t === d ? h || !0 : ((u.style.top = t + "px"), !1)), window.requestAnimationFrame(e);
            }),
            window.addEventListener("resize", function () {
                v();
            }),
            window.addEventListener("orientationchange", function () {
                v();
            });
    })(jQuery),
    (function (e) {
        e("[data-reveal]").lazy(function () {
            e(this).attr("data-reveal", "revealed");
        });
    })(jQuery),
    (function (e) {
        var t, i, s;
        e(".swiper-slide").length &&
            ((s = e(".caption")),
            e(".swiper-container").each(function () {
                new Swiper(e(this), {
                    speed: 400,
                    keyboard: { enabled: !0, onlyInViewport: !0 },
                    slidesPerView: "auto",
                    spaceBetween: 7,
                    centredSlides: !0,
                    lazy: { loadPrevNext: !0, loadPrevNextAmount: 4 },
                    loop: !0,
                    navigation: { nextEl: ".deadzone--right", prevEl: ".deadzone--left" },
                    on: {
                        slideChangeTransitionEnd: function () {
                            (t = e(".swiper-slide-active").find("img").data("caption")),
                                (i = e(".swiper-slide-active").find("img").data("description")),
                                s.find(".caption-text").empty(),
                                s.find(".caption-description").empty(),
                                s.find(".caption-text").append(t),
                                s.find(".caption-description").append(i);
                        },
                    },
                }).lazy.load();
            }));
    })(jQuery),
    (function (t) {
        t(".navicon").on("click", function (e) {
            e.preventDefault(), t(document.documentElement).toggleClass("has-nav");
        }),
            t("img[data-src]").lazy(function () {
                var e = this;
                (this.style.opacity = "0"),
                    t(this)
                        .one("load", function () {
                            return (e.style.opacity = "");
                        })
                        .attr({ src: this.getAttribute("data-src"), sizes: this.getAttribute("data-sizes"), srcset: this.getAttribute("data-srcset"), "data-src": null, "data-sizes": null, "data-srcset": null }),
                    this.complete && t(this).trigger("load");
            }),
            t(document.body).on({
                keydown: function (e) {
                    9 === e.which && t(document.documentElement).addClass("has-tab-focus");
                },
                mousedown: function () {
                    t(document.documentElement).removeClass("has-tab-focus");
                },
            });
    })(jQuery);
