if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = e.length,
                n = K.type(e);
            return "function" === n || K.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (K.isFunction(t)) return K.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return K.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (ot.test(t)) return K.filter(t, e, n);
                t = K.filter(t, e)
            }
            return K.grep(e, function(e) {
                return U.call(t, e) >= 0 !== n
            })
        }

        function a(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function r(e) {
            var t = pt[e] = {};
            return K.each(e.match(ft) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function s() {
            Q.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), K.ready()
        }

        function o() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = K.expando + o.uid++
        }

        function l(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Mt, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : vt.test(n) ? K.parseJSON(n) : n
                    } catch (a) {}
                    yt.set(e, t, n)
                } else n = void 0;
            return n
        }

        function u() {
            return !0
        }

        function d() {
            return !1
        }

        function c() {
            try {
                return Q.activeElement
            } catch (e) {}
        }

        function h(e, t) {
            return K.nodeName(e, "table") && K.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function f(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function p(e) {
            var t = Ot.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function m(e, t) {
            for (var n = 0, i = e.length; i > n; n++) gt.set(e[n], "globalEval", !t || gt.get(t[n], "globalEval"))
        }

        function _(e, t) {
            var n, i, a, r, s, o, l, u;
            if (1 === t.nodeType) {
                if (gt.hasData(e) && (r = gt.access(e), s = gt.set(t, r), u = r.events)) {
                    delete s.handle, s.events = {};
                    for (a in u)
                        for (n = 0, i = u[a].length; i > n; n++) K.event.add(t, a, u[a][n])
                }
                yt.hasData(e) && (o = yt.access(e), l = K.extend({}, o), yt.set(t, l))
            }
        }

        function g(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && K.nodeName(e, t) ? K.merge([e], n) : n
        }

        function y(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Tt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function v(t, n) {
            var i, a = K(n.createElement(t)).appendTo(n.body),
                r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(a[0])) ? i.display : K.css(a[0], "display");
            return a.detach(), r
        }

        function M(e) {
            var t = Q,
                n = Nt[e];
            return n || (n = v(e, t), "none" !== n && n || ($t = ($t || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = $t[0].contentDocument, t.write(), t.close(), n = v(e, t), $t.detach()), Nt[e] = n), n
        }

        function L(e, t, n) {
            var i, a, r, s, o = e.style;
            return n = n || Rt(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || K.contains(e.ownerDocument, e) || (s = K.style(e, t)), It.test(s) && zt.test(t) && (i = o.width, a = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = a, o.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function b(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function w(e, t) {
            if (t in e) return t;
            for (var n = t[0].toUpperCase() + t.slice(1), i = t, a = Jt.length; a--;)
                if (t = Jt[a] + n, t in e) return t;
            return i
        }

        function T(e, t, n) {
            var i = qt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function Y(e, t, n, i, a) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += K.css(e, n + bt[r], !0, a)), i ? ("content" === n && (s -= K.css(e, "padding" + bt[r], !0, a)), "margin" !== n && (s -= K.css(e, "border" + bt[r] + "Width", !0, a))) : (s += K.css(e, "padding" + bt[r], !0, a), "padding" !== n && (s += K.css(e, "border" + bt[r] + "Width", !0, a)));
            return s
        }

        function k(e, t, n) {
            var i = !0,
                a = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = Rt(e),
                s = "border-box" === K.css(e, "boxSizing", !1, r);
            if (0 >= a || null == a) {
                if (a = L(e, t, r), (0 > a || null == a) && (a = e.style[t]), It.test(a)) return a;
                i = s && (X.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0
            }
            return a + Y(e, t, n || (s ? "border" : "content"), i, r) + "px"
        }

        function D(e, t) {
            for (var n, i, a, r = [], s = 0, o = e.length; o > s; s++) i = e[s], i.style && (r[s] = gt.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && wt(i) && (r[s] = gt.access(i, "olddisplay", M(i.nodeName)))) : (a = wt(i), "none" === n && a || gt.set(i, "olddisplay", a ? n : K.css(i, "display"))));
            for (s = 0; o > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
            return e
        }

        function x(e, t, n, i, a) {
            return new x.prototype.init(e, t, n, i, a)
        }

        function S() {
            return setTimeout(function() {
                Xt = void 0
            }), Xt = K.now()
        }

        function C(e, t) {
            var n, i = 0,
                a = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = bt[i], a["margin" + n] = a["padding" + n] = e;
            return t && (a.opacity = a.width = e), a
        }

        function j(e, t, n) {
            for (var i, a = (nn[t] || []).concat(nn["*"]), r = 0, s = a.length; s > r; r++)
                if (i = a[r].call(n, t, e)) return i
        }

        function P(e, t, n) {
            var i, a, r, s, o, l, u, d, c = this,
                h = {},
                f = e.style,
                p = e.nodeType && wt(e),
                m = gt.get(e, "fxshow");
            n.queue || (o = K._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
                o.unqueued || l()
            }), o.unqueued++, c.always(function() {
                c.always(function() {
                    o.unqueued--, K.queue(e, "fx").length || o.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = K.css(e, "display"), d = "none" === u ? gt.get(e, "olddisplay") || M(e.nodeName) : u, "inline" === d && "none" === K.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (a = t[i], Zt.exec(a)) {
                    if (delete t[i], r = r || "toggle" === a, a === (p ? "hide" : "show")) {
                        if ("show" !== a || !m || void 0 === m[i]) continue;
                        p = !0
                    }
                    h[i] = m && m[i] || K.style(e, i)
                } else u = void 0;
            if (K.isEmptyObject(h)) "inline" === ("none" === u ? M(e.nodeName) : u) && (f.display = u);
            else {
                m ? "hidden" in m && (p = m.hidden) : m = gt.access(e, "fxshow", {}), r && (m.hidden = !p), p ? K(e).show() : c.done(function() {
                    K(e).hide()
                }), c.done(function() {
                    var t;
                    gt.remove(e, "fxshow");
                    for (t in h) K.style(e, t, h[t])
                });
                for (i in h) s = j(p ? m[i] : 0, i, c), i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function E(e, t) {
            var n, i, a, r, s;
            for (n in e)
                if (i = K.camelCase(n), a = t[i], r = e[n], K.isArray(r) && (a = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = K.cssHooks[i], s && "expand" in s) {
                    r = s.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = a)
                } else t[i] = a
        }

        function A(e, t, n) {
            var i, a, r = 0,
                s = tn.length,
                o = K.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (a) return !1;
                    for (var t = Xt || S(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
                    return o.notifyWith(e, [u, r, n]), 1 > r && l ? n : (o.resolveWith(e, [u]), !1)
                },
                u = o.promise({
                    elem: e,
                    props: K.extend({}, t),
                    opts: K.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Xt || S(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = K.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; i > n; n++) u.tweens[n].run(1);
                        return t ? o.resolveWith(e, [u, t]) : o.rejectWith(e, [u, t]), this
                    }
                }),
                d = u.props;
            for (E(d, u.opts.specialEasing); s > r; r++)
                if (i = tn[r].call(u, e, d, u.opts)) return i;
            return K.map(d, j, u), K.isFunction(u.opts.start) && u.opts.start.call(e, u), K.fx.timer(K.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function F(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, a = 0,
                    r = t.toLowerCase().match(ft) || [];
                if (K.isFunction(n))
                    for (; i = r[a++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function O(e, t, n, i) {
            function a(o) {
                var l;
                return r[o] = !0, K.each(e[o] || [], function(e, o) {
                    var u = o(t, n, i);
                    return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
                }), l
            }
            var r = {},
                s = e === Mn;
            return a(t.dataTypes[0]) || !r["*"] && a("*")
        }

        function W(e, t) {
            var n, i, a = K.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((a[n] ? e : i || (i = {}))[n] = t[n]);
            return i && K.extend(!0, e, i), e
        }

        function H(e, t, n) {
            for (var i, a, r, s, o = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (a in o)
                    if (o[a] && o[a].test(i)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        r = a;
                        break
                    }
                    s || (s = a)
                }
                r = r || s
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function $(e, t, n, i) {
            var a, r, s, o, l, u = {},
                d = e.dataTypes.slice();
            if (d[1])
                for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
            for (r = d.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (s = u[l + " " + r] || u["* " + r], !s)
                    for (a in u)
                        if (o = a.split(" "), o[1] === r && (s = u[l + " " + o[0]] || u["* " + o[0]])) {
                            s === !0 ? s = u[a] : u[a] !== !0 && (r = o[0], d.unshift(o[1]));
                            break
                        }
                if (s !== !0)
                    if (s && e["throws"]) t = s(t);
                    else try {
                        t = s(t)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: s ? c : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function N(e, t, n, i) {
            var a;
            if (K.isArray(t)) K.each(t, function(t, a) {
                n || Yn.test(e) ? i(e, a) : N(e + "[" + ("object" == typeof a ? t : "") + "]", a, n, i)
            });
            else if (n || "object" !== K.type(t)) i(e, t);
            else
                for (a in t) N(e + "[" + a + "]", t[a], n, i)
        }

        function z(e) {
            return K.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var I = [],
            R = I.slice,
            B = I.concat,
            q = I.push,
            U = I.indexOf,
            V = {},
            G = V.toString,
            J = V.hasOwnProperty,
            X = {},
            Q = e.document,
            Z = "2.1.3",
            K = function(e, t) {
                return new K.fn.init(e, t)
            },
            et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            tt = /^-ms-/,
            nt = /-([\da-z])/gi,
            it = function(e, t) {
                return t.toUpperCase()
            };
        K.fn = K.prototype = {
            jquery: Z,
            constructor: K,
            selector: "",
            length: 0,
            toArray: function() {
                return R.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : R.call(this)
            },
            pushStack: function(e) {
                var t = K.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return K.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(K.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(R.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: q,
            sort: I.sort,
            splice: I.splice
        }, K.extend = K.fn.extend = function() {
            var e, t, n, i, a, r, s = arguments[0] || {},
                o = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[o] || {}, o++), "object" == typeof s || K.isFunction(s) || (s = {}), o === l && (s = this, o--); l > o; o++)
                if (null != (e = arguments[o]))
                    for (t in e) n = s[t], i = e[t], s !== i && (u && i && (K.isPlainObject(i) || (a = K.isArray(i))) ? (a ? (a = !1, r = n && K.isArray(n) ? n : []) : r = n && K.isPlainObject(n) ? n : {}, s[t] = K.extend(u, r, i)) : void 0 !== i && (s[t] = i));
            return s
        }, K.extend({
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === K.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !K.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" !== K.type(e) || e.nodeType || K.isWindow(e) ? !1 : e.constructor && !J.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[G.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = K.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(tt, "ms-").replace(nt, it)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var a, r = 0,
                    s = e.length,
                    o = n(e);
                if (i) {
                    if (o)
                        for (; s > r && (a = t.apply(e[r], i), a !== !1); r++);
                    else
                        for (r in e)
                            if (a = t.apply(e[r], i), a === !1) break
                } else if (o)
                    for (; s > r && (a = t.call(e[r], r, e[r]), a !== !1); r++);
                else
                    for (r in e)
                        if (a = t.call(e[r], r, e[r]), a === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(et, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? K.merge(i, "string" == typeof e ? [e] : e) : q.call(i, e)), i
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : U.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, a = e.length; n > i; i++) e[a++] = t[i];
                return e.length = a, e
            },
            grep: function(e, t, n) {
                for (var i, a = [], r = 0, s = e.length, o = !n; s > r; r++) i = !t(e[r], r), i !== o && a.push(e[r]);
                return a
            },
            map: function(e, t, i) {
                var a, r = 0,
                    s = e.length,
                    o = n(e),
                    l = [];
                if (o)
                    for (; s > r; r++) a = t(e[r], r, i), null != a && l.push(a);
                else
                    for (r in e) a = t(e[r], r, i), null != a && l.push(a);
                return B.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, a;
                return "string" == typeof t && (n = e[t], t = e, e = n), K.isFunction(e) ? (i = R.call(arguments, 2), a = function() {
                    return e.apply(t || this, i.concat(R.call(arguments)))
                }, a.guid = e.guid = e.guid || K.guid++, a) : void 0
            },
            now: Date.now,
            support: X
        }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            V["[object " + t + "]"] = t.toLowerCase()
        });
        var at = function(e) {
            function t(e, t, n, i) {
                var a, r, s, o, l, u, c, f, p, m;
                if ((t ? t.ownerDocument || t : N) !== P && j(t), t = t || P, n = n || [], o = t.nodeType, "string" != typeof e || !e || 1 !== o && 9 !== o && 11 !== o) return n;
                if (!i && A) {
                    if (11 !== o && (a = yt.exec(e)))
                        if (s = a[1]) {
                            if (9 === o) {
                                if (r = t.getElementById(s), !r || !r.parentNode) return n;
                                if (r.id === s) return n.push(r), n
                            } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && H(t, r) && r.id === s) return n.push(r), n
                        } else {
                            if (a[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = a[3]) && L.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
                        }
                    if (L.qsa && (!F || !F.test(e))) {
                        if (f = c = $, p = t, m = 1 !== o && e, 1 === o && "object" !== t.nodeName.toLowerCase()) {
                            for (u = Y(e), (c = t.getAttribute("id")) ? f = c.replace(Mt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + h(u[l]);
                            p = vt.test(e) && d(t.parentNode) || t, m = u.join(",")
                        }
                        if (m) try {
                            return Z.apply(n, p.querySelectorAll(m)), n
                        } catch (_) {} finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return D(e.replace(lt, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[$] = !0, e
            }

            function a(e) {
                var t = P.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) b.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function o(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var a, r = e([], n.length, t), s = r.length; s--;) n[a = r[s]] && (n[a] = !(i[a] = n[a]))
                    })
                })
            }

            function d(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function c() {}

            function h(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    a = n && "parentNode" === i,
                    r = I++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || a) return e(t, n, r)
                } : function(t, n, s) {
                    var o, l, u = [z, r];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || a) && e(t, n, s)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || a) {
                                if (l = t[$] || (t[$] = {}), (o = l[i]) && o[0] === z && o[1] === r) return u[2] = o[2];
                                if (l[i] = u, u[2] = e(t, n, s)) return !0
                            }
                }
            }

            function p(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var a = e.length; a--;)
                        if (!e[a](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, i) {
                for (var a = 0, r = n.length; r > a; a++) t(e, n[a], i);
                return i
            }

            function _(e, t, n, i, a) {
                for (var r, s = [], o = 0, l = e.length, u = null != t; l > o; o++)(r = e[o]) && (!n || n(r, i, a)) && (s.push(r), u && t.push(o));
                return s
            }

            function g(e, t, n, a, r, s) {
                return a && !a[$] && (a = g(a)), r && !r[$] && (r = g(r, s)), i(function(i, s, o, l) {
                    var u, d, c, h = [],
                        f = [],
                        p = s.length,
                        g = i || m(t || "*", o.nodeType ? [o] : o, []),
                        y = !e || !i && t ? g : _(g, h, e, o, l),
                        v = n ? r || (i ? e : p || a) ? [] : s : y;
                    if (n && n(y, v, o, l), a)
                        for (u = _(v, f), a(u, [], o, l), d = u.length; d--;)(c = u[d]) && (v[f[d]] = !(y[f[d]] = c));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (u = [], d = v.length; d--;)(c = v[d]) && u.push(y[d] = c);
                                r(null, v = [], u, l)
                            }
                            for (d = v.length; d--;)(c = v[d]) && (u = r ? et(i, c) : h[d]) > -1 && (i[u] = !(s[u] = c))
                        }
                    } else v = _(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : Z.apply(s, v)
                })
            }

            function y(e) {
                for (var t, n, i, a = e.length, r = b.relative[e[0].type], s = r || b.relative[" "], o = r ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, s, !0), u = f(function(e) {
                        return et(t, e) > -1
                    }, s, !0), d = [function(e, n, i) {
                        var a = !r && (i || n !== x) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                        return t = null, a
                    }]; a > o; o++)
                    if (n = b.relative[e[o].type]) d = [f(p(d), n)];
                    else {
                        if (n = b.filter[e[o].type].apply(null, e[o].matches), n[$]) {
                            for (i = ++o; a > i && !b.relative[e[i].type]; i++);
                            return g(o > 1 && p(d), o > 1 && h(e.slice(0, o - 1).concat({
                                value: " " === e[o - 2].type ? "*" : ""
                            })).replace(lt, "$1"), n, i > o && y(e.slice(o, i)), a > i && y(e = e.slice(i)), a > i && h(e))
                        }
                        d.push(n)
                    }
                return p(d)
            }

            function v(e, n) {
                var a = n.length > 0,
                    r = e.length > 0,
                    s = function(i, s, o, l, u) {
                        var d, c, h, f = 0,
                            p = "0",
                            m = i && [],
                            g = [],
                            y = x,
                            v = i || r && b.find.TAG("*", u),
                            M = z += null == y ? 1 : Math.random() || .1,
                            L = v.length;
                        for (u && (x = s !== P && s); p !== L && null != (d = v[p]); p++) {
                            if (r && d) {
                                for (c = 0; h = e[c++];)
                                    if (h(d, s, o)) {
                                        l.push(d);
                                        break
                                    }
                                u && (z = M)
                            }
                            a && ((d = !h && d) && f--, i && m.push(d))
                        }
                        if (f += p, a && p !== f) {
                            for (c = 0; h = n[c++];) h(m, g, s, o);
                            if (i) {
                                if (f > 0)
                                    for (; p--;) m[p] || g[p] || (g[p] = X.call(l));
                                g = _(g)
                            }
                            Z.apply(l, g), u && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (z = M, x = y), m
                    };
                return a ? i(s) : s
            }
            var M, L, b, w, T, Y, k, D, x, S, C, j, P, E, A, F, O, W, H, $ = "sizzle" + 1 * new Date,
                N = e.document,
                z = 0,
                I = 0,
                R = n(),
                B = n(),
                q = n(),
                U = function(e, t) {
                    return e === t && (C = !0), 0
                },
                V = 1 << 31,
                G = {}.hasOwnProperty,
                J = [],
                X = J.pop,
                Q = J.push,
                Z = J.push,
                K = J.slice,
                et = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                at = it.replace("w", "w#"),
                rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + at + "))|)" + nt + "*\\]",
                st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                ot = new RegExp(nt + "+", "g"),
                lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ut = new RegExp("^" + nt + "*," + nt + "*"),
                dt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                ht = new RegExp(st),
                ft = new RegExp("^" + at + "$"),
                pt = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + tt + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                _t = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                vt = /[+~]/,
                Mt = /'|\\/g,
                Lt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                bt = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                wt = function() {
                    j()
                };
            try {
                Z.apply(J = K.call(N.childNodes), N.childNodes), J[N.childNodes.length].nodeType
            } catch (Tt) {
                Z = {
                    apply: J.length ? function(e, t) {
                        Q.apply(e, K.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            L = t.support = {}, T = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, j = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : N;
                return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, E = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), A = !T(i), L.attributes = a(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), L.getElementsByTagName = a(function(e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), L.getElementsByClassName = gt.test(i.getElementsByClassName), L.getById = a(function(e) {
                    return E.appendChild(e).id = $, !i.getElementsByName || !i.getElementsByName($).length
                }), L.getById ? (b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && A) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, b.filter.ID = function(e) {
                    var t = e.replace(Lt, bt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete b.find.ID, b.filter.ID = function(e) {
                    var t = e.replace(Lt, bt);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), b.find.TAG = L.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : L.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        a = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[a++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, b.find.CLASS = L.getElementsByClassName && function(e, t) {
                    return A ? t.getElementsByClassName(e) : void 0
                }, O = [], F = [], (L.qsa = gt.test(i.querySelectorAll)) && (a(function(e) {
                    E.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + $ + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + $ + "+*").length || F.push(".#.+[+~]")
                }), a(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                })), (L.matchesSelector = gt.test(W = E.matches || E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && a(function(e) {
                    L.disconnectedMatch = W.call(e, "div"), W.call(e, "[s!='']:x"), O.push("!=", st)
                }), F = F.length && new RegExp(F.join("|")), O = O.length && new RegExp(O.join("|")), t = gt.test(E.compareDocumentPosition), H = t || gt.test(E.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function(e, t) {
                    if (e === t) return C = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !L.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === N && H(N, e) ? -1 : t === i || t.ownerDocument === N && H(N, t) ? 1 : S ? et(S, e) - et(S, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return C = !0, 0;
                    var n, a = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        l = [e],
                        u = [t];
                    if (!r || !o) return e === i ? -1 : t === i ? 1 : r ? -1 : o ? 1 : S ? et(S, e) - et(S, t) : 0;
                    if (r === o) return s(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; l[a] === u[a];) a++;
                    return a ? s(l[a], u[a]) : l[a] === N ? -1 : u[a] === N ? 1 : 0
                }, i) : P
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== P && j(e), n = n.replace(ct, "='$1']"), !(!L.matchesSelector || !A || O && O.test(n) || F && F.test(n))) try {
                    var i = W.call(e, n);
                    if (i || L.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (a) {}
                return t(n, P, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== P && j(e), H(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== P && j(e);
                var n = b.attrHandle[t.toLowerCase()],
                    i = n && G.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
                return void 0 !== i ? i : L.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    a = 0;
                if (C = !L.detectDuplicates, S = !L.sortStable && e.slice(0), e.sort(U), C) {
                    for (; t = e[a++];) t === e[a] && (i = n.push(a));
                    for (; i--;) e.splice(n[i], 1)
                }
                return S = null, e
            }, w = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    a = e.nodeType;
                if (a) {
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                    } else if (3 === a || 4 === a) return e.nodeValue
                } else
                    for (; t = e[i++];) n += w(t);
                return n
            }, b = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Lt, bt), e[3] = (e[3] || e[4] || e[5] || "").replace(Lt, bt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ht.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Lt, bt).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = R[e + " "];
                        return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && R(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(a) {
                            var r = t.attr(a, e);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, a) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === i && 0 === a ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, d, c, h, f, p, m = r !== s ? "nextSibling" : "previousSibling",
                                _ = t.parentNode,
                                g = o && t.nodeName.toLowerCase(),
                                y = !l && !o;
                            if (_) {
                                if (r) {
                                    for (; m;) {
                                        for (c = t; c = c[m];)
                                            if (o ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                        p = m = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? _.firstChild : _.lastChild], s && y) {
                                    for (d = _[$] || (_[$] = {}), u = d[e] || [], f = u[0] === z && u[1], h = u[0] === z && u[2], c = f && _.childNodes[f]; c = ++f && c && c[m] || (h = f = 0) || p.pop();)
                                        if (1 === c.nodeType && ++h && c === t) {
                                            d[e] = [z, f, h];
                                            break
                                        }
                                } else if (y && (u = (t[$] || (t[$] = {}))[e]) && u[0] === z) h = u[1];
                                else
                                    for (;
                                        (c = ++f && c && c[m] || (h = f = 0) || p.pop()) && ((o ? c.nodeName.toLowerCase() !== g : 1 !== c.nodeType) || !++h || (y && ((c[$] || (c[$] = {}))[e] = [z, h]), c !== t)););
                                return h -= a, h === i || h % i === 0 && h / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var a, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[$] ? r(n) : r.length > 1 ? (a = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, a = r(e, n), s = a.length; s--;) i = et(e, a[s]), e[i] = !(t[i] = a[s])
                        }) : function(e) {
                            return r(e, 0, a)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            a = k(e.replace(lt, "$1"));
                        return a[$] ? i(function(e, t, n, i) {
                            for (var r, s = a(e, null, i, []), o = e.length; o--;)(r = s[o]) && (e[o] = !(t[o] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, a(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(Lt, bt),
                            function(t) {
                                return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return ft.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Lt, bt).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === E
                    },
                    focus: function(e) {
                        return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return _t.test(e.nodeName)
                    },
                    input: function(e) {
                        return mt.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, b.pseudos.nth = b.pseudos.eq;
            for (M in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) b.pseudos[M] = o(M);
            for (M in {
                    submit: !0,
                    reset: !0
                }) b.pseudos[M] = l(M);
            return c.prototype = b.filters = b.pseudos, b.setFilters = new c, Y = t.tokenize = function(e, n) {
                var i, a, r, s, o, l, u, d = B[e + " "];
                if (d) return n ? 0 : d.slice(0);
                for (o = e, l = [], u = b.preFilter; o;) {
                    (!i || (a = ut.exec(o))) && (a && (o = o.slice(a[0].length) || o), l.push(r = [])), i = !1, (a = dt.exec(o)) && (i = a.shift(), r.push({
                        value: i,
                        type: a[0].replace(lt, " ")
                    }), o = o.slice(i.length));
                    for (s in b.filter) !(a = pt[s].exec(o)) || u[s] && !(a = u[s](a)) || (i = a.shift(), r.push({
                        value: i,
                        type: s,
                        matches: a
                    }), o = o.slice(i.length));
                    if (!i) break
                }
                return n ? o.length : o ? t.error(e) : B(e, l).slice(0)
            }, k = t.compile = function(e, t) {
                var n, i = [],
                    a = [],
                    r = q[e + " "];
                if (!r) {
                    for (t || (t = Y(e)), n = t.length; n--;) r = y(t[n]), r[$] ? i.push(r) : a.push(r);
                    r = q(e, v(a, i)), r.selector = e
                }
                return r
            }, D = t.select = function(e, t, n, i) {
                var a, r, s, o, l, u = "function" == typeof e && e,
                    c = !i && Y(e = u.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && L.getById && 9 === t.nodeType && A && b.relative[r[1].type]) {
                        if (t = (b.find.ID(s.matches[0].replace(Lt, bt), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (a = pt.needsContext.test(e) ? 0 : r.length; a-- && (s = r[a], !b.relative[o = s.type]);)
                        if ((l = b.find[o]) && (i = l(s.matches[0].replace(Lt, bt), vt.test(r[0].type) && d(t.parentNode) || t))) {
                            if (r.splice(a, 1), e = i.length && h(r), !e) return Z.apply(n, i), n;
                            break
                        }
                }
                return (u || k(e, c))(i, t, !A, n, vt.test(e) && d(t.parentNode) || t), n
            }, L.sortStable = $.split("").sort(U).join("") === $, L.detectDuplicates = !!C, j(), L.sortDetached = a(function(e) {
                return 1 & e.compareDocumentPosition(P.createElement("div"))
            }), a(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), L.attributes && a(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), a(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(tt, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        K.find = at, K.expr = at.selectors, K.expr[":"] = K.expr.pseudos, K.unique = at.uniqueSort, K.text = at.getText, K.isXMLDoc = at.isXML, K.contains = at.contains;
        var rt = K.expr.match.needsContext,
            st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ot = /^.[^:#\[\.,]*$/;
        K.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? K.find.matchesSelector(i, e) ? [i] : [] : K.find.matches(e, K.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, K.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    i = [],
                    a = this;
                if ("string" != typeof e) return this.pushStack(K(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (K.contains(a[t], this)) return !0
                }));
                for (t = 0; n > t; t++) K.find(e, a[t], i);
                return i = this.pushStack(n > 1 ? K.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && rt.test(e) ? K(e) : e || [], !1).length
            }
        });
        var lt, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            dt = K.fn.init = function(e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ut.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || lt).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof K ? t[0] : t, K.merge(this, K.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), st.test(n[1]) && K.isPlainObject(t))
                            for (n in t) K.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return i = Q.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = Q, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : K.isFunction(e) ? "undefined" != typeof lt.ready ? lt.ready(e) : e(K) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this))
            };
        dt.prototype = K.fn, lt = K(Q);
        var ct = /^(?:parents|prev(?:Until|All))/,
            ht = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        K.extend({
            dir: function(e, t, n) {
                for (var i = [], a = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (a && K(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), K.fn.extend({
            has: function(e) {
                var t = K(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (K.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, a = this.length, r = [], s = rt.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; a > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? K.unique(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? U.call(K(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(K.unique(K.merge(this.get(), K(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), K.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return K.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return K.dir(e, "parentNode", n)
            },
            next: function(e) {
                return a(e, "nextSibling")
            },
            prev: function(e) {
                return a(e, "previousSibling")
            },
            nextAll: function(e) {
                return K.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return K.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return K.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return K.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return K.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return K.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || K.merge([], e.childNodes)
            }
        }, function(e, t) {
            K.fn[e] = function(n, i) {
                var a = K.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (a = K.filter(i, a)), this.length > 1 && (ht[e] || K.unique(a), ct.test(e) && a.reverse()), this.pushStack(a)
            }
        });
        var ft = /\S+/g,
            pt = {};
        K.Callbacks = function(e) {
            e = "string" == typeof e ? pt[e] || r(e) : K.extend({}, e);
            var t, n, i, a, s, o, l = [],
                u = !e.once && [],
                d = function(r) {
                    for (t = e.memory && r, n = !0, o = a || 0, a = 0, s = l.length, i = !0; l && s > o; o++)
                        if (l[o].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                            t = !1;
                            break
                        }
                    i = !1, l && (u ? u.length && d(u.shift()) : t ? l = [] : c.disable())
                },
                c = {
                    add: function() {
                        if (l) {
                            var n = l.length;
                            ! function r(t) {
                                K.each(t, function(t, n) {
                                    var i = K.type(n);
                                    "function" === i ? e.unique && c.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                                })
                            }(arguments), i ? s = l.length : t && (a = n, d(t))
                        }
                        return this
                    },
                    remove: function() {
                        return l && K.each(arguments, function(e, t) {
                            for (var n;
                                (n = K.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (s >= n && s--, o >= n && o--)
                        }), this
                    },
                    has: function(e) {
                        return e ? K.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], s = 0, this
                    },
                    disable: function() {
                        return l = u = t = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return u = void 0, t || c.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(e, t) {
                        return !l || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? u.push(t) : d(t)), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return c
        }, K.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", K.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return K.Deferred(function(n) {
                                K.each(t, function(t, r) {
                                    var s = K.isFunction(e[t]) && e[t];
                                    a[r[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? K.extend(e, i) : i
                        }
                    },
                    a = {};
                return i.pipe = i.then, K.each(t, function(e, r) {
                    var s = r[2],
                        o = r[3];
                    i[r[1]] = s.add, o && s.add(function() {
                        n = o
                    }, t[1 ^ e][2].disable, t[2][2].lock), a[r[0]] = function() {
                        return a[r[0] + "With"](this === a ? i : this, arguments), this
                    }, a[r[0] + "With"] = s.fireWith
                }), i.promise(a), e && e.call(a, a), a
            },
            when: function(e) {
                var t, n, i, a = 0,
                    r = R.call(arguments),
                    s = r.length,
                    o = 1 !== s || e && K.isFunction(e.promise) ? s : 0,
                    l = 1 === o ? e : K.Deferred(),
                    u = function(e, n, i) {
                        return function(a) {
                            n[e] = this, i[e] = arguments.length > 1 ? R.call(arguments) : a, i === t ? l.notifyWith(n, i) : --o || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); s > a; a++) r[a] && K.isFunction(r[a].promise) ? r[a].promise().done(u(a, i, r)).fail(l.reject).progress(u(a, n, t)) : --o;
                return o || l.resolveWith(i, r), l.promise()
            }
        });
        var mt;
        K.fn.ready = function(e) {
            return K.ready.promise().done(e), this
        }, K.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? K.readyWait++ : K.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, e !== !0 && --K.readyWait > 0 || (mt.resolveWith(Q, [K]), K.fn.triggerHandler && (K(Q).triggerHandler("ready"), K(Q).off("ready"))))
            }
        }), K.ready.promise = function(t) {
            return mt || (mt = K.Deferred(), "complete" === Q.readyState ? setTimeout(K.ready) : (Q.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), mt.promise(t)
        }, K.ready.promise();
        var _t = K.access = function(e, t, n, i, a, r, s) {
            var o = 0,
                l = e.length,
                u = null == n;
            if ("object" === K.type(n)) {
                a = !0;
                for (o in n) K.access(e, t, o, n[o], !0, r, s)
            } else if (void 0 !== i && (a = !0, K.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(K(e), n)
                })), t))
                for (; l > o; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
            return a ? e : u ? t.call(e) : l ? t(e[0], n) : r
        };
        K.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, o.uid = 1, o.accepts = K.acceptData, o.prototype = {
            key: function(e) {
                if (!o.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = o.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        }, Object.defineProperties(e, t)
                    } catch (i) {
                        t[this.expando] = n, K.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(e, t, n) {
                var i, a = this.key(e),
                    r = this.cache[a];
                if ("string" == typeof t) r[t] = n;
                else if (K.isEmptyObject(r)) K.extend(this.cache[a], t);
                else
                    for (i in t) r[i] = t[i];
                return r
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, K.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i, a, r = this.key(e),
                    s = this.cache[r];
                if (void 0 === t) this.cache[r] = {};
                else {
                    K.isArray(t) ? i = t.concat(t.map(K.camelCase)) : (a = K.camelCase(t), t in s ? i = [t, a] : (i = a, i = i in s ? [i] : i.match(ft) || [])), n = i.length;
                    for (; n--;) delete s[i[n]]
                }
            },
            hasData: function(e) {
                return !K.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var gt = new o,
            yt = new o,
            vt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Mt = /([A-Z])/g;
        K.extend({
            hasData: function(e) {
                return yt.hasData(e) || gt.hasData(e)
            },
            data: function(e, t, n) {
                return yt.access(e, t, n)
            },
            removeData: function(e, t) {
                yt.remove(e, t)
            },
            _data: function(e, t, n) {
                return gt.access(e, t, n)
            },
            _removeData: function(e, t) {
                gt.remove(e, t)
            }
        }), K.fn.extend({
            data: function(e, t) {
                var n, i, a, r = this[0],
                    s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (a = yt.get(r), 1 === r.nodeType && !gt.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = K.camelCase(i.slice(5)), l(r, i, a[i])));
                        gt.set(r, "hasDataAttrs", !0)
                    }
                    return a
                }
                return "object" == typeof e ? this.each(function() {
                    yt.set(this, e)
                }) : _t(this, function(t) {
                    var n, i = K.camelCase(e);
                    if (r && void 0 === t) {
                        if (n = yt.get(r, e), void 0 !== n) return n;
                        if (n = yt.get(r, i), void 0 !== n) return n;
                        if (n = l(r, i, void 0), void 0 !== n) return n
                    } else this.each(function() {
                        var n = yt.get(this, i);
                        yt.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    yt.remove(this, e)
                })
            }
        }), K.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = gt.get(e, t), n && (!i || K.isArray(n) ? i = gt.access(e, t, K.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = K.queue(e, t),
                    i = n.length,
                    a = n.shift(),
                    r = K._queueHooks(e, t),
                    s = function() {
                        K.dequeue(e, t)
                    };
                "inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), delete r.stop, a.call(e, s, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return gt.get(e, n) || gt.access(e, n, {
                    empty: K.Callbacks("once memory").add(function() {
                        gt.remove(e, [t + "queue", n])
                    })
                })
            }
        }), K.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? K.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = K.queue(this, e, t);
                    K._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && K.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    K.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    a = K.Deferred(),
                    r = this,
                    s = this.length,
                    o = function() {
                        --i || a.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = gt.get(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(o));
                return o(), a.promise(t)
            }
        });
        var Lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            bt = ["Top", "Right", "Bottom", "Left"],
            wt = function(e, t) {
                return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
            },
            Tt = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = Q.createDocumentFragment(),
                t = e.appendChild(Q.createElement("div")),
                n = Q.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), X.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", X.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Yt = "undefined";
        X.focusinBubbles = "onfocusin" in e;
        var kt = /^key/,
            Dt = /^(?:mouse|pointer|contextmenu)|click/,
            xt = /^(?:focusinfocus|focusoutblur)$/,
            St = /^([^.]*)(?:\.(.+)|)$/;
        K.event = {
            global: {},
            add: function(e, t, n, i, a) {
                var r, s, o, l, u, d, c, h, f, p, m, _ = gt.get(e);
                if (_)
                    for (n.handler && (r = n, n = r.handler, a = r.selector), n.guid || (n.guid = K.guid++), (l = _.events) || (l = _.events = {}), (s = _.handle) || (s = _.handle = function(t) {
                            return typeof K !== Yt && K.event.triggered !== t.type ? K.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(ft) || [""], u = t.length; u--;) o = St.exec(t[u]) || [], f = m = o[1], p = (o[2] || "").split(".").sort(), f && (c = K.event.special[f] || {}, f = (a ? c.delegateType : c.bindType) || f, c = K.event.special[f] || {}, d = K.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: a,
                        needsContext: a && K.expr.match.needsContext.test(a),
                        namespace: p.join(".")
                    }, r), (h = l[f]) || (h = l[f] = [], h.delegateCount = 0, c.setup && c.setup.call(e, i, p, s) !== !1 || e.addEventListener && e.addEventListener(f, s, !1)), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), K.event.global[f] = !0)
            },
            remove: function(e, t, n, i, a) {
                var r, s, o, l, u, d, c, h, f, p, m, _ = gt.hasData(e) && gt.get(e);
                if (_ && (l = _.events)) {
                    for (t = (t || "").match(ft) || [""], u = t.length; u--;)
                        if (o = St.exec(t[u]) || [], f = m = o[1], p = (o[2] || "").split(".").sort(), f) {
                            for (c = K.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, h = l[f] || [], o = o[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) d = h[r], !a && m !== d.origType || n && n.guid !== d.guid || o && !o.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (h.splice(r, 1), d.selector && h.delegateCount--, c.remove && c.remove.call(e, d));
                            s && !h.length && (c.teardown && c.teardown.call(e, p, _.handle) !== !1 || K.removeEvent(e, f, _.handle), delete l[f])
                        } else
                            for (f in l) K.event.remove(e, f + t[u], n, i, !0);
                    K.isEmptyObject(l) && (delete _.handle, gt.remove(e, "events"))
                }
            },
            trigger: function(t, n, i, a) {
                var r, s, o, l, u, d, c, h = [i || Q],
                    f = J.call(t, "type") ? t.type : t,
                    p = J.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = o = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(f + K.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[K.expando] ? t : new K.Event(f, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : K.makeArray(n, [t]), c = K.event.special[f] || {}, a || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!a && !c.noBubble && !K.isWindow(i)) {
                        for (l = c.delegateType || f, xt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), o = s;
                        o === (i.ownerDocument || Q) && h.push(o.defaultView || o.parentWindow || e)
                    }
                    for (r = 0;
                        (s = h[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : c.bindType || f, d = (gt.get(s, "events") || {})[t.type] && gt.get(s, "handle"), d && d.apply(s, n), d = u && s[u], d && d.apply && K.acceptData(s) && (t.result = d.apply(s, n), t.result === !1 && t.preventDefault());
                    return t.type = f, a || t.isDefaultPrevented() || c._default && c._default.apply(h.pop(), n) !== !1 || !K.acceptData(i) || u && K.isFunction(i[f]) && !K.isWindow(i) && (o = i[u], o && (i[u] = null), K.event.triggered = f, i[f](), K.event.triggered = void 0, o && (i[u] = o)), t.result
                }
            },
            dispatch: function(e) {
                e = K.event.fix(e);
                var t, n, i, a, r, s = [],
                    o = R.call(arguments),
                    l = (gt.get(this, "events") || {})[e.type] || [],
                    u = K.event.special[e.type] || {};
                if (o[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (s = K.event.handlers.call(this, e, l), t = 0;
                        (a = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = a.elem, n = 0;
                            (r = a.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((K.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, o), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, a, r, s = [],
                    o = t.delegateCount,
                    l = e.target;
                if (o && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (l.disabled !== !0 || "click" !== e.type) {
                            for (i = [], n = 0; o > n; n++) r = t[n], a = r.selector + " ", void 0 === i[a] && (i[a] = r.needsContext ? K(a, this).index(l) >= 0 : K.find(a, this, null, [l]).length), i[a] && i.push(r);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return o < t.length && s.push({
                    elem: this,
                    handlers: t.slice(o)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, a, r = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, i = n.documentElement, a = n.body, e.pageX = t.clientX + (i && i.scrollLeft || a && a.scrollLeft || 0) - (i && i.clientLeft || a && a.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || a && a.scrollTop || 0) - (i && i.clientTop || a && a.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[K.expando]) return e;
                var t, n, i, a = e.type,
                    r = e,
                    s = this.fixHooks[a];
                for (s || (this.fixHooks[a] = s = Dt.test(a) ? this.mouseHooks : kt.test(a) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new K.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
                return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== c() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === c() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return K.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var a = K.extend(new K.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? K.event.trigger(a, null, t) : K.event.dispatch.call(t, a), a.isDefaultPrevented() && n.preventDefault()
            }
        }, K.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, K.Event = function(e, t) {
            return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? u : d) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(e, t)
        }, K.Event.prototype = {
            isDefaultPrevented: d,
            isPropagationStopped: d,
            isImmediatePropagationStopped: d,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            K.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        a = e.relatedTarget,
                        r = e.handleObj;
                    return (!a || a !== i && !K.contains(i, a)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), X.focusinBubbles || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                K.event.simulate(t, e.target, K.event.fix(e), !0)
            };
            K.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        a = gt.access(i, t);
                    a || i.addEventListener(e, n, !0), gt.access(i, t, (a || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        a = gt.access(i, t) - 1;
                    a ? gt.access(i, t, a) : (i.removeEventListener(e, n, !0), gt.remove(i, t))
                }
            }
        }), K.fn.extend({
            on: function(e, t, n, i, a) {
                var r, s;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (s in e) this.on(s, t, n, e[s], a);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = d;
                else if (!i) return this;
                return 1 === a && (r = i, i = function(e) {
                    return K().off(e), r.apply(this, arguments)
                }, i.guid = r.guid || (r.guid = K.guid++)), this.each(function() {
                    K.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, a;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, K(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (a in e) this.off(a, t, e[a]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = d), this.each(function() {
                    K.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    K.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? K.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            jt = /<([\w:]+)/,
            Pt = /<|&#?\w+;/,
            Et = /<(?:script|style|link)/i,
            At = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ft = /^$|\/(?:java|ecma)script/i,
            Ot = /^true\/(.*)/,
            Wt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ht = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ht.optgroup = Ht.option, Ht.tbody = Ht.tfoot = Ht.colgroup = Ht.caption = Ht.thead, Ht.th = Ht.td, K.extend({
            clone: function(e, t, n) {
                var i, a, r, s, o = e.cloneNode(!0),
                    l = K.contains(e.ownerDocument, e);
                if (!(X.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                    for (s = g(o), r = g(e), i = 0, a = r.length; a > i; i++) y(r[i], s[i]);
                if (t)
                    if (n)
                        for (r = r || g(e), s = s || g(o), i = 0, a = r.length; a > i; i++) _(r[i], s[i]);
                    else _(e, o);
                return s = g(o, "script"), s.length > 0 && m(s, !l && g(e, "script")), o
            },
            buildFragment: function(e, t, n, i) {
                for (var a, r, s, o, l, u, d = t.createDocumentFragment(), c = [], h = 0, f = e.length; f > h; h++)
                    if (a = e[h], a || 0 === a)
                        if ("object" === K.type(a)) K.merge(c, a.nodeType ? [a] : a);
                        else if (Pt.test(a)) {
                    for (r = r || d.appendChild(t.createElement("div")), s = (jt.exec(a) || ["", ""])[1].toLowerCase(), o = Ht[s] || Ht._default, r.innerHTML = o[1] + a.replace(Ct, "<$1></$2>") + o[2], u = o[0]; u--;) r = r.lastChild;
                    K.merge(c, r.childNodes), r = d.firstChild, r.textContent = ""
                } else c.push(t.createTextNode(a));
                for (d.textContent = "", h = 0; a = c[h++];)
                    if ((!i || -1 === K.inArray(a, i)) && (l = K.contains(a.ownerDocument, a), r = g(d.appendChild(a), "script"), l && m(r), n))
                        for (u = 0; a = r[u++];) Ft.test(a.type || "") && n.push(a);
                return d
            },
            cleanData: function(e) {
                for (var t, n, i, a, r = K.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                    if (K.acceptData(n) && (a = n[gt.expando], a && (t = gt.cache[a]))) {
                        if (t.events)
                            for (i in t.events) r[i] ? K.event.remove(n, i) : K.removeEvent(n, i, t.handle);
                        gt.cache[a] && delete gt.cache[a]
                    }
                    delete yt.cache[n[yt.expando]]
                }
            }
        }), K.fn.extend({
            text: function(e) {
                return _t(this, function(e) {
                    return void 0 === e ? K.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = h(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = h(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? K.filter(e, this) : this, a = 0; null != (n = i[a]); a++) t || 1 !== n.nodeType || K.cleanData(g(n)), n.parentNode && (t && K.contains(n.ownerDocument, n) && m(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (K.cleanData(g(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return K.clone(this, e, t)
                })
            },
            html: function(e) {
                return _t(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Et.test(e) && !Ht[(jt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Ct, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (K.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (a) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, K.cleanData(g(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = B.apply([], e);
                var n, i, a, r, s, o, l = 0,
                    u = this.length,
                    d = this,
                    c = u - 1,
                    h = e[0],
                    m = K.isFunction(h);
                if (m || u > 1 && "string" == typeof h && !X.checkClone && At.test(h)) return this.each(function(n) {
                    var i = d.eq(n);
                    m && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
                });
                if (u && (n = K.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (a = K.map(g(n, "script"), f), r = a.length; u > l; l++) s = n, l !== c && (s = K.clone(s, !0, !0), r && K.merge(a, g(s, "script"))), t.call(this[l], s, l);
                    if (r)
                        for (o = a[a.length - 1].ownerDocument, K.map(a, p), l = 0; r > l; l++) s = a[l], Ft.test(s.type || "") && !gt.access(s, "globalEval") && K.contains(o, s) && (s.src ? K._evalUrl && K._evalUrl(s.src) : K.globalEval(s.textContent.replace(Wt, "")))
                }
                return this
            }
        }), K.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            K.fn[e] = function(e) {
                for (var n, i = [], a = K(e), r = a.length - 1, s = 0; r >= s; s++) n = s === r ? this : this.clone(!0), K(a[s])[t](n), q.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var $t, Nt = {},
            zt = /^margin/,
            It = new RegExp("^(" + Lt + ")(?!px)[a-z%]+$", "i"),
            Rt = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            };
        ! function() {
            function t() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", a.appendChild(r);
                var t = e.getComputedStyle(s, null);
                n = "1%" !== t.top, i = "4px" === t.width, a.removeChild(r)
            }
            var n, i, a = Q.documentElement,
                r = Q.createElement("div"),
                s = Q.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", X.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), e.getComputedStyle && K.extend(X, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return null == i && t(), i
                },
                reliableMarginRight: function() {
                    var t, n = s.appendChild(Q.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", a.appendChild(r), t = !parseFloat(e.getComputedStyle(n, null).marginRight), a.removeChild(r), s.removeChild(n), t
                }
            }))
        }(), K.swap = function(e, t, n, i) {
            var a, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            a = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return a
        };
        var Bt = /^(none|table(?!-c[ea]).+)/,
            qt = new RegExp("^(" + Lt + ")(.*)$", "i"),
            Ut = new RegExp("^([+-])=(" + Lt + ")", "i"),
            Vt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Gt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Jt = ["Webkit", "O", "Moz", "ms"];
        K.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = L(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var a, r, s, o = K.camelCase(t),
                        l = e.style;
                    return t = K.cssProps[o] || (K.cssProps[o] = w(l, o)), s = K.cssHooks[t] || K.cssHooks[o], void 0 === n ? s && "get" in s && void 0 !== (a = s.get(e, !1, i)) ? a : l[t] : (r = typeof n, "string" === r && (a = Ut.exec(n)) && (n = (a[1] + 1) * a[2] + parseFloat(K.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || K.cssNumber[o] || (n += "px"), X.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n)), void 0)
                }
            },
            css: function(e, t, n, i) {
                var a, r, s, o = K.camelCase(t);
                return t = K.cssProps[o] || (K.cssProps[o] = w(e.style, o)), s = K.cssHooks[t] || K.cssHooks[o], s && "get" in s && (a = s.get(e, !0, n)), void 0 === a && (a = L(e, t, i)), "normal" === a && t in Gt && (a = Gt[t]), "" === n || n ? (r = parseFloat(a), n === !0 || K.isNumeric(r) ? r || 0 : a) : a
            }
        }), K.each(["height", "width"], function(e, t) {
            K.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? Bt.test(K.css(e, "display")) && 0 === e.offsetWidth ? K.swap(e, Vt, function() {
                        return k(e, t, i)
                    }) : k(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var a = i && Rt(e);
                    return T(e, n, i ? Y(e, t, i, "border-box" === K.css(e, "boxSizing", !1, a), a) : 0)
                }
            }
        }), K.cssHooks.marginRight = b(X.reliableMarginRight, function(e, t) {
            return t ? K.swap(e, {
                display: "inline-block"
            }, L, [e, "marginRight"]) : void 0
        }), K.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            K.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, a = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) a[e + bt[i] + t] = r[i] || r[i - 2] || r[0];
                    return a
                }
            }, zt.test(e) || (K.cssHooks[e + t].set = T)
        }), K.fn.extend({
            css: function(e, t) {
                return _t(this, function(e, t, n) {
                    var i, a, r = {},
                        s = 0;
                    if (K.isArray(t)) {
                        for (i = Rt(e), a = t.length; a > s; s++) r[t[s]] = K.css(e, t[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? K.style(e, t, n) : K.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return D(this, !0)
            },
            hide: function() {
                return D(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    wt(this) ? K(this).show() : K(this).hide()
                })
            }
        }), K.Tween = x, x.prototype = {
            constructor: x,
            init: function(e, t, n, i, a, r) {
                this.elem = e, this.prop = n, this.easing = a || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (K.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = x.propHooks[this.prop];
                return e && e.get ? e.get(this) : x.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = x.propHooks[this.prop];
                return this.pos = t = this.options.duration ? K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : x.propHooks._default.set(this), this
            }
        }, x.prototype.init.prototype = x.prototype, x.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, x.propHooks.scrollTop = x.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, K.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, K.fx = x.prototype.init, K.fx.step = {};
        var Xt, Qt, Zt = /^(?:toggle|show|hide)$/,
            Kt = new RegExp("^(?:([+-])=|)(" + Lt + ")([a-z%]*)$", "i"),
            en = /queueHooks$/,
            tn = [P],
            nn = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        a = Kt.exec(t),
                        r = a && a[3] || (K.cssNumber[e] ? "" : "px"),
                        s = (K.cssNumber[e] || "px" !== r && +i) && Kt.exec(K.css(n.elem, e)),
                        o = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], a = a || [], s = +i || 1;
                        do o = o || ".5", s /= o, K.style(n.elem, e, s + r); while (o !== (o = n.cur() / i) && 1 !== o && --l)
                    }
                    return a && (s = n.start = +s || +i || 0, n.unit = r, n.end = a[1] ? s + (a[1] + 1) * a[2] : +a[2]), n
                }]
            };
        K.Animation = K.extend(A, {
                tweener: function(e, t) {
                    K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, a = e.length; a > i; i++) n = e[i], nn[n] = nn[n] || [], nn[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? tn.unshift(e) : tn.push(e)
                }
            }), K.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? K.extend({}, e) : {
                    complete: n || !n && t || K.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !K.isFunction(t) && t
                };
                return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    K.isFunction(i.old) && i.old.call(this), i.queue && K.dequeue(this, i.queue)
                }, i
            }, K.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(wt).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var a = K.isEmptyObject(e),
                        r = K.speed(t, n, i),
                        s = function() {
                            var t = A(this, K.extend({}, e), r);
                            (a || gt.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, a || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            a = null != e && e + "queueHooks",
                            r = K.timers,
                            s = gt.get(this);
                        if (a) s[a] && s[a].stop && i(s[a]);
                        else
                            for (a in s) s[a] && s[a].stop && en.test(a) && i(s[a]);
                        for (a = r.length; a--;) r[a].elem !== this || null != e && r[a].queue !== e || (r[a].anim.stop(n), t = !1, r.splice(a, 1));
                        (t || !n) && K.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = gt.get(this),
                            i = n[e + "queue"],
                            a = n[e + "queueHooks"],
                            r = K.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, K.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), K.each(["toggle", "show", "hide"], function(e, t) {
                var n = K.fn[t];
                K.fn[t] = function(e, i, a) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(C(t, !0), e, i, a)
                }
            }), K.each({
                slideDown: C("show"),
                slideUp: C("hide"),
                slideToggle: C("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                K.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), K.timers = [], K.fx.tick = function() {
                var e, t = 0,
                    n = K.timers;
                for (Xt = K.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || K.fx.stop(), Xt = void 0
            }, K.fx.timer = function(e) {
                K.timers.push(e), e() ? K.fx.start() : K.timers.pop()
            }, K.fx.interval = 13, K.fx.start = function() {
                Qt || (Qt = setInterval(K.fx.tick, K.fx.interval))
            }, K.fx.stop = function() {
                clearInterval(Qt), Qt = null
            }, K.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, K.fn.delay = function(e, t) {
                return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e = Q.createElement("input"),
                    t = Q.createElement("select"),
                    n = t.appendChild(Q.createElement("option"));
                e.type = "checkbox", X.checkOn = "" !== e.value, X.optSelected = n.selected, t.disabled = !0, X.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", X.radioValue = "t" === e.value
            }();
        var an, rn, sn = K.expr.attrHandle;
        K.fn.extend({
            attr: function(e, t) {
                return _t(this, K.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    K.removeAttr(this, e)
                })
            }
        }), K.extend({
            attr: function(e, t, n) {
                var i, a, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === Yt ? K.prop(e, t, n) : (1 === r && K.isXMLDoc(e) || (t = t.toLowerCase(), i = K.attrHooks[t] || (K.expr.match.bool.test(t) ? rn : an)), void 0 === n ? i && "get" in i && null !== (a = i.get(e, t)) ? a : (a = K.find.attr(e, t), null == a ? void 0 : a) : null !== n ? i && "set" in i && void 0 !== (a = i.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : void K.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, a = 0,
                    r = t && t.match(ft);
                if (r && 1 === e.nodeType)
                    for (; n = r[a++];) i = K.propFix[n] || n, K.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!X.radioValue && "radio" === t && K.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), rn = {
            set: function(e, t, n) {
                return t === !1 ? K.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, K.each(K.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = sn[t] || K.find.attr;
            sn[t] = function(e, t, i) {
                var a, r;
                return i || (r = sn[t], sn[t] = a, a = null != n(e, t, i) ? t.toLowerCase() : null, sn[t] = r), a
            }
        });
        var on = /^(?:input|select|textarea|button)$/i;
        K.fn.extend({
            prop: function(e, t) {
                return _t(this, K.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[K.propFix[e] || e]
                })
            }
        }), K.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, a, r, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !K.isXMLDoc(e), r && (t = K.propFix[t] || t, a = K.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || on.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), X.optSelected || (K.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            K.propFix[this.toLowerCase()] = this
        });
        var ln = /[\t\r\n\f]/g;
        K.fn.extend({
            addClass: function(e) {
                var t, n, i, a, r, s, o = "string" == typeof e && e,
                    l = 0,
                    u = this.length;
                if (K.isFunction(e)) return this.each(function(t) {
                    K(this).addClass(e.call(this, t, this.className))
                });
                if (o)
                    for (t = (e || "").match(ft) || []; u > l; l++)
                        if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
                            for (r = 0; a = t[r++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            s = K.trim(i), n.className !== s && (n.className = s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, a, r, s, o = 0 === arguments.length || "string" == typeof e && e,
                    l = 0,
                    u = this.length;
                if (K.isFunction(e)) return this.each(function(t) {
                    K(this).removeClass(e.call(this, t, this.className))
                });
                if (o)
                    for (t = (e || "").match(ft) || []; u > l; l++)
                        if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
                            for (r = 0; a = t[r++];)
                                for (; i.indexOf(" " + a + " ") >= 0;) i = i.replace(" " + a + " ", " ");
                            s = e ? K.trim(i) : "", n.className !== s && (n.className = s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(K.isFunction(e) ? function(n) {
                    K(this).toggleClass(e.call(this, n, this.className, t), t)
                } : function() {
                    if ("string" === n)
                        for (var t, i = 0, a = K(this), r = e.match(ft) || []; t = r[i++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                    else(n === Yt || "boolean" === n) && (this.className && gt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : gt.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        });
        var un = /\r/g;
        K.fn.extend({
            val: function(e) {
                var t, n, i, a = this[0]; {
                    if (arguments.length) return i = K.isFunction(e), this.each(function(n) {
                        var a;
                        1 === this.nodeType && (a = i ? e.call(this, n, K(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : K.isArray(a) && (a = K.map(a, function(e) {
                            return null == e ? "" : e + ""
                        })), t = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
                    });
                    if (a) return t = K.valHooks[a.type] || K.valHooks[a.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value, "string" == typeof n ? n.replace(un, "") : null == n ? "" : n)
                }
            }
        }), K.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = K.find.attr(e, "value");
                        return null != t ? t : K.trim(K.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, a = e.selectedIndex, r = "select-one" === e.type || 0 > a, s = r ? null : [], o = r ? a + 1 : i.length, l = 0 > a ? o : r ? a : 0; o > l; l++)
                            if (n = i[l], !(!n.selected && l !== a || (X.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && K.nodeName(n.parentNode, "optgroup"))) {
                                if (t = K(n).val(), r) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, a = e.options, r = K.makeArray(t), s = a.length; s--;) i = a[s], (i.selected = K.inArray(i.value, r) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), K.each(["radio", "checkbox"], function() {
            K.valHooks[this] = {
                set: function(e, t) {
                    return K.isArray(t) ? e.checked = K.inArray(K(e).val(), t) >= 0 : void 0
                }
            }, X.checkOn || (K.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            K.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), K.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var dn = K.now(),
            cn = /\?/;
        K.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, K.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                n = new DOMParser, t = n.parseFromString(e, "text/xml")
            } catch (i) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + e), t
        };
        var hn = /#.*$/,
            fn = /([?&])_=[^&]*/,
            pn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            _n = /^(?:GET|HEAD)$/,
            gn = /^\/\//,
            yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            vn = {},
            Mn = {},
            Ln = "*/".concat("*"),
            bn = e.location.href,
            wn = yn.exec(bn.toLowerCase()) || [];
        K.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: bn,
                type: "GET",
                isLocal: mn.test(wn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ln,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": K.parseJSON,
                    "text xml": K.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? W(W(e, K.ajaxSettings), t) : W(K.ajaxSettings, e)
            },
            ajaxPrefilter: F(vn),
            ajaxTransport: F(Mn),
            ajax: function(e, t) {
                function n(e, t, n, s) {
                    var l, d, g, y, M, b = t;
                    2 !== v && (v = 2, o && clearTimeout(o), i = void 0, r = s || "", L.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = H(c, L, n)), y = $(c, y, L, l), l ? (c.ifModified && (M = L.getResponseHeader("Last-Modified"), M && (K.lastModified[a] = M), M = L.getResponseHeader("etag"), M && (K.etag[a] = M)), 204 === e || "HEAD" === c.type ? b = "nocontent" : 304 === e ? b = "notmodified" : (b = y.state, d = y.data, g = y.error, l = !g)) : (g = b, (e || !b) && (b = "error", 0 > e && (e = 0))), L.status = e, L.statusText = (t || b) + "", l ? p.resolveWith(h, [d, b, L]) : p.rejectWith(h, [L, b, g]), L.statusCode(_), _ = void 0, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [L, c, l ? d : g]), m.fireWith(h, [L, b]), u && (f.trigger("ajaxComplete", [L, c]), --K.active || K.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, a, r, s, o, l, u, d, c = K.ajaxSetup({}, t),
                    h = c.context || c,
                    f = c.context && (h.nodeType || h.jquery) ? K(h) : K.event,
                    p = K.Deferred(),
                    m = K.Callbacks("once memory"),
                    _ = c.statusCode || {},
                    g = {},
                    y = {},
                    v = 0,
                    M = "canceled",
                    L = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === v) {
                                if (!s)
                                    for (s = {}; t = pn.exec(r);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === v ? r : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return v || (e = y[n] = y[n] || e, g[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return v || (c.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > v)
                                    for (t in e) _[t] = [_[t], e[t]];
                                else L.always(e[L.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || M;
                            return i && i.abort(t), n(0, t), this
                        }
                    };
                if (p.promise(L).complete = m.add, L.success = L.done, L.error = L.fail, c.url = ((e || c.url || bn) + "").replace(hn, "").replace(gn, wn[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = K.trim(c.dataType || "*").toLowerCase().match(ft) || [""], null == c.crossDomain && (l = yn.exec(c.url.toLowerCase()), c.crossDomain = !(!l || l[1] === wn[1] && l[2] === wn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (wn[3] || ("http:" === wn[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = K.param(c.data, c.traditional)), O(vn, c, t, L), 2 === v) return L;
                u = K.event && c.global, u && 0 === K.active++ && K.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !_n.test(c.type), a = c.url, c.hasContent || (c.data && (a = c.url += (cn.test(a) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = fn.test(a) ? a.replace(fn, "$1_=" + dn++) : a + (cn.test(a) ? "&" : "?") + "_=" + dn++)), c.ifModified && (K.lastModified[a] && L.setRequestHeader("If-Modified-Since", K.lastModified[a]), K.etag[a] && L.setRequestHeader("If-None-Match", K.etag[a])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && L.setRequestHeader("Content-Type", c.contentType), L.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Ln + "; q=0.01" : "") : c.accepts["*"]);
                for (d in c.headers) L.setRequestHeader(d, c.headers[d]);
                if (c.beforeSend && (c.beforeSend.call(h, L, c) === !1 || 2 === v)) return L.abort();
                M = "abort";
                for (d in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) L[d](c[d]);
                if (i = O(Mn, c, t, L)) {
                    L.readyState = 1, u && f.trigger("ajaxSend", [L, c]), c.async && c.timeout > 0 && (o = setTimeout(function() {
                        L.abort("timeout")
                    }, c.timeout));
                    try {
                        v = 1, i.send(g, n)
                    } catch (b) {
                        if (!(2 > v)) throw b;
                        n(-1, b)
                    }
                } else n(-1, "No Transport");
                return L
            },
            getJSON: function(e, t, n) {
                return K.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return K.get(e, void 0, t, "script")
            }
        }), K.each(["get", "post"], function(e, t) {
            K[t] = function(e, n, i, a) {
                return K.isFunction(n) && (a = a || i, i = n, n = void 0), K.ajax({
                    url: e,
                    type: t,
                    dataType: a,
                    data: n,
                    success: i
                })
            }
        }), K._evalUrl = function(e) {
            return K.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, K.fn.extend({
            wrapAll: function(e) {
                var t;
                return K.isFunction(e) ? this.each(function(t) {
                    K(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = K(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return this.each(K.isFunction(e) ? function(t) {
                    K(this).wrapInner(e.call(this, t))
                } : function() {
                    var t = K(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = K.isFunction(e);
                return this.each(function(n) {
                    K(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                }).end()
            }
        }), K.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, K.expr.filters.visible = function(e) {
            return !K.expr.filters.hidden(e)
        };
        var Tn = /%20/g,
            Yn = /\[\]$/,
            kn = /\r?\n/g,
            Dn = /^(?:submit|button|image|reset|file)$/i,
            xn = /^(?:input|select|textarea|keygen)/i;
        K.param = function(e, t) {
            var n, i = [],
                a = function(e, t) {
                    t = K.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function() {
                a(this.name, this.value)
            });
            else
                for (n in e) N(n, e[n], t, a);
            return i.join("&").replace(Tn, "+")
        }, K.fn.extend({
            serialize: function() {
                return K.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = K.prop(this, "elements");
                    return e ? K.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !K(this).is(":disabled") && xn.test(this.nodeName) && !Dn.test(e) && (this.checked || !Tt.test(e))
                }).map(function(e, t) {
                    var n = K(this).val();
                    return null == n ? null : K.isArray(n) ? K.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(kn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(kn, "\r\n")
                    }
                }).get()
            }
        }), K.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        };
        var Sn = 0,
            Cn = {},
            jn = {
                0: 200,
                1223: 204
            },
            Pn = K.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in Cn) Cn[e]()
        }), X.cors = !!Pn && "withCredentials" in Pn, X.ajax = Pn = !!Pn, K.ajaxTransport(function(e) {
            var t;
            return X.cors || Pn && !e.crossDomain ? {
                send: function(n, i) {
                    var a, r = e.xhr(),
                        s = ++Sn;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) r[a] = e.xhrFields[a];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (a in n) r.setRequestHeader(a, n[a]);
                    t = function(e) {
                        return function() {
                            t && (delete Cn[s], t = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? i(r.status, r.statusText) : i(jn[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                                text: r.responseText
                            } : void 0, r.getAllResponseHeaders()))
                        }
                    }, r.onload = t(), r.onerror = t("error"), t = Cn[s] = t("abort");
                    try {
                        r.send(e.hasContent && e.data || null)
                    } catch (o) {
                        if (t) throw o
                    }
                },
                abort: function() {
                    t && t()
                }
            } : void 0
        }), K.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return K.globalEval(e), e
                }
            }
        }), K.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), K.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, a) {
                        t = K("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
                        }), Q.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var En = [],
            An = /(=)\?(?=&|$)|\?\?/;
        K.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = En.pop() || K.expando + "_" + dn++;
                return this[e] = !0, e
            }
        }), K.ajaxPrefilter("json jsonp", function(t, n, i) {
            var a, r, s, o = t.jsonp !== !1 && (An.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && An.test(t.data) && "data");
            return o || "jsonp" === t.dataTypes[0] ? (a = t.jsonpCallback = K.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(An, "$1" + a) : t.jsonp !== !1 && (t.url += (cn.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function() {
                return s || K.error(a + " was not called"), s[0]
            }, t.dataTypes[0] = "json", r = e[a], e[a] = function() {
                s = arguments
            }, i.always(function() {
                e[a] = r, t[a] && (t.jsonpCallback = n.jsonpCallback, En.push(a)), s && K.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), K.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || Q;
            var i = st.exec(e),
                a = !n && [];
            return i ? [t.createElement(i[1])] : (i = K.buildFragment([e], t, a), a && a.length && K(a).remove(), K.merge([], i.childNodes))
        };
        var Fn = K.fn.load;
        K.fn.load = function(e, t, n) {
            if ("string" != typeof e && Fn) return Fn.apply(this, arguments);
            var i, a, r, s = this,
                o = e.indexOf(" ");
            return o >= 0 && (i = K.trim(e.slice(o)), e = e.slice(0, o)), K.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), s.length > 0 && K.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, s.html(i ? K("<div>").append(K.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                s.each(n, r || [e.responseText, t, e])
            }), this
        }, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            K.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), K.expr.filters.animated = function(e) {
            return K.grep(K.timers, function(t) {
                return e === t.elem
            }).length
        };
        var On = e.document.documentElement;
        K.offset = {
            setOffset: function(e, t, n) {
                var i, a, r, s, o, l, u, d = K.css(e, "position"),
                    c = K(e),
                    h = {};
                "static" === d && (e.style.position = "relative"), o = c.offset(), r = K.css(e, "top"), l = K.css(e, "left"), u = ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1, u ? (i = c.position(), s = i.top, a = i.left) : (s = parseFloat(r) || 0, a = parseFloat(l) || 0), K.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (h.top = t.top - o.top + s), null != t.left && (h.left = t.left - o.left + a), "using" in t ? t.using.call(e, h) : c.css(h)
            }
        }, K.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    K.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0],
                    a = {
                        top: 0,
                        left: 0
                    },
                    r = i && i.ownerDocument;
                if (r) return t = r.documentElement, K.contains(t, i) ? (typeof i.getBoundingClientRect !== Yt && (a = i.getBoundingClientRect()), n = z(r), {
                    top: a.top + n.pageYOffset - t.clientTop,
                    left: a.left + n.pageXOffset - t.clientLeft
                }) : a
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === K.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), K.nodeName(e[0], "html") || (i = e.offset()), i.top += K.css(e[0], "borderTopWidth", !0), i.left += K.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - K.css(n, "marginTop", !0),
                        left: t.left - i.left - K.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || On; e && !K.nodeName(e, "html") && "static" === K.css(e, "position");) e = e.offsetParent;
                    return e || On
                })
            }
        }), K.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, n) {
            var i = "pageYOffset" === n;
            K.fn[t] = function(a) {
                return _t(this, function(t, a, r) {
                    var s = z(t);
                    return void 0 === r ? s ? s[n] : t[a] : void(s ? s.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset) : t[a] = r)
                }, t, a, arguments.length, null)
            }
        }), K.each(["top", "left"], function(e, t) {
            K.cssHooks[t] = b(X.pixelPosition, function(e, n) {
                return n ? (n = L(e, t), It.test(n) ? K(e).position()[t] + "px" : n) : void 0
            })
        }), K.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            K.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                K.fn[i] = function(i, a) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || a === !0 ? "margin" : "border");
                    return _t(this, function(t, n, i) {
                        var a;
                        return K.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === i ? K.css(t, n, s) : K.style(t, n, i, s)
                    }, t, r ? i : void 0, r, null)
                }
            })
        }), K.fn.size = function() {
            return this.length
        }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return K
        });
        var Wn = e.jQuery,
            Hn = e.$;
        return K.noConflict = function(t) {
            return e.$ === K && (e.$ = Hn), t && e.jQuery === K && (e.jQuery = Wn), K
        }, typeof t === Yt && (e.jQuery = e.$ = K), K
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var a = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(a, t), this
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = e(this),
                a = n.data("bs.alert");
            a || n.data("bs.alert", a = new i(this)), "string" == typeof t && a[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(t) {
            e(t).on("click", n, this.close)
        };
    i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var a = e(this),
            r = a.attr("data-target");
        r || (r = a.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = e(r);
        t && t.preventDefault(), s.length || (s = a.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var a = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
        return e.fn.alert = a, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                a = i.data("bs.button"),
                r = "object" == typeof t && t;
            a || i.data("bs.button", a = new n(this, r)), "toggle" == t ? a.toggle() : t && a.setState(t)
        })
    }
    var n = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.2", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled",
            i = this.$element,
            a = i.is("input") ? "val" : "html",
            r = i.data();
        t += "Text", null == r.resetText && i.data("resetText", i[a]()), setTimeout(e.proxy(function() {
            i[a](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        e && this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                a = i.data("bs.carousel"),
                r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                s = "string" == typeof t ? t : r.slide;
            a || i.data("bs.carousel", a = new n(this, r)), "number" == typeof t ? a.to(t) : s ? a[s]() : r.interval && a.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.2", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t),
            i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (i && !this.options.wrap) return t;
        var a = "prev" == e ? -1 : 1,
            r = (n + a) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function(e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(t, i) {
        var a = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(t, a),
            s = this.interval,
            o = "next" == t ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var u = r[0],
            d = e.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: o
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = e(this.$indicators.children()[this.getItemIndex(r)]);
                c && c.addClass("active")
            }
            var h = e.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: o
            });
            return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, a.addClass(o), r.addClass(o), a.one("bsTransitionEnd", function() {
                r.removeClass([t, o].join(" ")).addClass("active"), a.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (a.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i, this
    };
    var a = function(n) {
        var i, a = e(this),
            r = e(a.attr("data-target") || (i = a.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = e.extend({}, r.data(), a.data()),
                o = a.attr("data-slide-to");
            o && (s.interval = !1), t.call(r, s), o && r.data("bs.carousel").to(o), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function() {
            var n = e(this),
                a = n.data("bs.collapse"),
                r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !a && r.toggle && "show" == t && (r.toggle = !1), a || n.data("bs.collapse", a = new i(this, r)), "string" == typeof t && a[t]()
        })
    }
    var i = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e(this.options.trigger).filter('[href="#' + t.id + '"], [data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.2", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, i.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(a && a.length && (t = a.data("bs.collapse"), t && t.transitioning))) {
                var r = e.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    a && a.length && (n.call(a, "hide"), t || a.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var o = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return o.call(this);
                    var l = e.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var a = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : a.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
            var a = e(i);
            this.addAriaAndCollapsedClass(t(a), a)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var a = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = a, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var a = e(this);
        a.attr("data-target") || i.preventDefault();
        var r = t(a),
            s = r.data("bs.collapse"),
            o = s ? "toggle" : e.extend({}, a.data(), {
                trigger: this
            });
        n.call(r, o)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        t && 3 === t.which || (e(a).remove(), e(r).each(function() {
            var i = e(this),
                a = n(i),
                r = {
                    relatedTarget: this
                };
            a.hasClass("open") && (a.trigger(t = e.Event("hide.bs.dropdown", r)), t.isDefaultPrevented() || (i.attr("aria-expanded", "false"), a.removeClass("open").trigger("hidden.bs.dropdown", r)))
        }))
    }

    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function i(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(n)
        })
    }
    var a = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.2", s.prototype.toggle = function(i) {
        var a = e(this);
        if (!a.is(".disabled, :disabled")) {
            var r = n(a),
                s = r.hasClass("open");
            if (t(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                var o = {
                    relatedTarget: this
                };
                if (r.trigger(i = e.Event("show.bs.dropdown", o)), i.isDefaultPrevented()) return;
                a.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", o)
            }
            return !1
        }
    }, s.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var i = e(this);
            if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
                var a = n(i),
                    s = a.hasClass("open");
                if (!s && 27 != t.which || s && 27 == t.which) return 27 == t.which && a.find(r).trigger("focus"), i.trigger("click");
                var o = " li:not(.divider):visible a",
                    l = a.find('[role="menu"]' + o + ', [role="listbox"]' + o);
                if (l.length) {
                    var u = l.index(t.target);
                    38 == t.which && u > 0 && u--, 40 == t.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var o = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = o, this
    }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', s.prototype.keydown)
}(jQuery), + function(e) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var a = e(this),
                r = a.data("bs.modal"),
                s = e.extend({}, n.DEFAULTS, a.data(), "object" == typeof t && t);
            r || a.data("bs.modal", r = new n(this, s)), "string" == typeof t ? r[t](i) : s.show && r.show(i)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.2", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var i = this,
            a = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
            var a = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.options.backdrop && i.adjustBackdrop(), i.adjustDialog(), a && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            a ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var i = this,
            a = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && a;
            if (this.$backdrop = e('<div class="modal-backdrop ' + a + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", e.proxy(function(e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else t && t()
    }, n.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, n.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this),
            a = i.attr("href"),
            r = e(i.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(a) && a
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(r, s, this)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                a = i.data("bs.tooltip"),
                r = "object" == typeof t && t;
            (a || "destroy" != t) && (a || i.data("bs.tooltip", a = new n(this, r)), "string" == typeof t && a[t]())
        })
    }
    var n = function(e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.2", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, i) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
        for (var a = this.options.trigger.split(" "), r = a.length; r--;) {
            var s = a[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != s) {
                var o = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var a = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(o);
            u && (o = o.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var d = this.getPosition(),
                c = r[0].offsetWidth,
                h = r[0].offsetHeight;
            if (u) {
                var f = o,
                    p = this.options.container ? e(this.options.container) : this.$element.parent(),
                    m = this.getPosition(p);
                o = "bottom" == o && d.bottom + h > m.bottom ? "top" : "top" == o && d.top - h < m.top ? "bottom" : "right" == o && d.right + c > m.width ? "left" : "left" == o && d.left - c < m.left ? "right" : o, r.removeClass(f).addClass(o)
            }
            var _ = this.getCalculatedOffset(o, d, c, h);
            this.applyPlacement(_, o);
            var g = function() {
                var e = a.hoverState;
                a.$element.trigger("shown.bs." + a.type), a.hoverState = null, "out" == e && a.leave(a)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var i = this.tip(),
            a = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            o = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(o) && (o = 0), t.top = t.top + s, t.left = t.left + o, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != r && (t.top = t.top + r - u);
        var d = this.getViewportAdjustedDelta(n, t, l, u);
        d.left ? t.left += d.left : t.top += d.top;
        var c = /top|bottom/.test(n),
            h = c ? 2 * d.left - a + l : 2 * d.top - r + u,
            f = c ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(h, i[0][f], c)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(t) {
        function i() {
            "in" != a.hoverState && r.detach(), a.$element.removeAttr("aria-describedby").trigger("hidden.bs." + a.type), t && t()
        }
        var a = this,
            r = this.tip(),
            s = e.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            i = "BODY" == n.tagName,
            a = n.getBoundingClientRect();
        null == a.width && (a = e.extend({}, a, {
            width: a.right - a.left,
            height: a.bottom - a.top
        }));
        var r = i ? {
                top: 0,
                left: 0
            } : t.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            o = i ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, a, s, o, r)
    }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var a = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return a;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var o = t.top - r - s.scroll,
                l = t.top + r - s.scroll + i;
            o < s.top ? a.top = s.top - o : l > s.top + s.height && (a.top = s.top + s.height - l)
        } else {
            var u = t.left - r,
                d = t.left + r + n;
            u < s.left ? a.left = s.left - u : d > s.width && (a.left = s.left + s.width - d)
        }
        return a
    }, n.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type)
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                a = i.data("bs.popover"),
                r = "object" == typeof t && t;
            (a || "destroy" != t) && (a || i.data("bs.popover", a = new n(this, r)), "string" == typeof t && a[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.2", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function() {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = i, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(n, i) {
        var a = e.proxy(this.process, this);
        this.$body = e("body"), this.$scrollElement = e(e(n).is("body") ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = e(this),
                a = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            a || i.data("bs.scrollspy", a = new t(this, r)), "string" == typeof n && a[n]()
        })
    }
    t.VERSION = "3.3.2", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = "offset",
            n = 0;
        e.isWindow(this.$scrollElement[0]) || (t = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function() {
            var i = e(this),
                a = i.data("target") || i.attr("href"),
                r = /^#./.test(a) && e(a);
            return r && r.length && r.is(":visible") && [
                [r[t]().top + n, a]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            a = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return s != (e = r[r.length - 1]) && this.activate(e);
        if (s && t < a[0]) return this.activeTarget = null, this.clear();
        for (e = a.length; e--;) s != r[e] && t >= a[e] && (!a[e + 1] || t <= a[e + 1]) && this.activate(r[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                a = i.data("bs.tab");
            a || i.data("bs.tab", a = new n(this)), "string" == typeof t && a[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.2", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var a = n.find(".active:last a"),
                r = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                s = e.Event("show.bs.tab", {
                    relatedTarget: a[0]
                });
            if (a.trigger(r), t.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var o = e(i);
                this.activate(t.closest("li"), n), this.activate(o, o.parent(), function() {
                    a.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: a[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, i, a) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a()
        }
        var s = i.find("> .active"),
            o = a && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && o ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = i, this
    };
    var a = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                a = i.data("bs.affix"),
                r = "object" == typeof t && t;
            a || i.data("bs.affix", a = new n(this, r)), "string" == typeof t && a[t]()
        })
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.2", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(e, t, n, i) {
        var a = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > a ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? a + this.unpin <= r.top ? !1 : "bottom" : e - i >= a + s ? !1 : "bottom";
        var o = null == this.affixed,
            l = o ? a : r.top,
            u = o ? s : t;
        return null != n && n >= a ? "top" : null != i && l + u >= e - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                a = i.top,
                r = i.bottom,
                s = e("body").height();
            "object" != typeof i && (r = a = i), "function" == typeof a && (a = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var o = this.getState(s, t, a, r);
            if (this.affixed != o) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (o ? "-" + o : ""),
                    u = e.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == o && this.$element.offset({
                top: s - t - r
            })
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = i, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery),
function(e) {
    function t(e, t, n) {
        switch (arguments.length) {
            case 2:
                return null != e ? e : t;
            case 3:
                return null != e ? e : null != t ? t : n;
            default:
                throw new Error("Implement me")
        }
    }

    function n(e, t) {
        return Dt.call(e, t)
    }

    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function a(e) {
        Lt.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function r(e, t) {
        var n = !0;
        return p(function() {
            return n && (a(e), n = !1), t.apply(this, arguments)
        }, t)
    }

    function s(e, t) {
        vn[e] || (a(t), vn[e] = !0)
    }

    function o(e, t) {
        return function(n) {
            return g(e.call(this, n), t)
        }
    }

    function l(e, t) {
        return function(n) {
            return this.localeData().ordinal(e.call(this, n), t)
        }
    }

    function u(e, t) {
        var n, i, a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            r = e.clone().add(a, "months");
        return 0 > t - r ? (n = e.clone().add(a - 1, "months"), i = (t - r) / (r - n)) : (n = e.clone().add(a + 1, "months"), i = (t - r) / (n - r)), -(a + i)
    }

    function d(e, t, n) {
        var i;
        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (i = e.isPM(n), i && 12 > t && (t += 12), i || 12 !== t || (t = 0), t) : t
    }

    function c() {}

    function h(e, t) {
        t !== !1 && E(e), m(this, e), this._d = new Date(+e._d), Ln === !1 && (Ln = !0, Lt.updateOffset(this), Ln = !1)
    }

    function f(e) {
        var t = k(e),
            n = t.year || 0,
            i = t.quarter || 0,
            a = t.month || 0,
            r = t.week || 0,
            s = t.day || 0,
            o = t.hour || 0,
            l = t.minute || 0,
            u = t.second || 0,
            d = t.millisecond || 0;
        this._milliseconds = +d + 1e3 * u + 6e4 * l + 36e5 * o, this._days = +s + 7 * r, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = Lt.localeData(), this._bubble()
    }

    function p(e, t) {
        for (var i in t) n(t, i) && (e[i] = t[i]);
        return n(t, "toString") && (e.toString = t.toString), n(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function m(e, t) {
        var n, i, a;
        if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = t._pf), "undefined" != typeof t._locale && (e._locale = t._locale), Ot.length > 0)
            for (n in Ot) i = Ot[n], a = t[i], "undefined" != typeof a && (e[i] = a);
        return e
    }

    function _(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }

    function g(e, t, n) {
        for (var i = "" + Math.abs(e), a = e >= 0; i.length < t;) i = "0" + i;
        return (a ? n ? "+" : "" : "-") + i
    }

    function y(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function v(e, t) {
        var n;
        return t = H(t, e), e.isBefore(t) ? n = y(e, t) : (n = y(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
    }

    function M(e, t) {
        return function(n, i) {
            var a, r;
            return null === i || isNaN(+i) || (s(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), r = n, n = i, i = r), n = "string" == typeof n ? +n : n, a = Lt.duration(n, i), L(this, a, e), this
        }
    }

    function L(e, t, n, i) {
        var a = t._milliseconds,
            r = t._days,
            s = t._months;
        i = null == i ? !0 : i, a && e._d.setTime(+e._d + a * n), r && mt(e, "Date", pt(e, "Date") + r * n), s && ft(e, pt(e, "Month") + s * n), i && Lt.updateOffset(e, r || s)
    }

    function b(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function w(e) {
        return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
    }

    function T(e, t, n) {
        var i, a = Math.min(e.length, t.length),
            r = Math.abs(e.length - t.length),
            s = 0;
        for (i = 0; a > i; i++)(n && e[i] !== t[i] || !n && x(e[i]) !== x(t[i])) && s++;
        return s + r
    }

    function Y(e) {
        if (e) {
            var t = e.toLowerCase().replace(/(.)s$/, "$1");
            e = hn[e] || fn[t] || t
        }
        return e
    }

    function k(e) {
        var t, i, a = {};
        for (i in e) n(e, i) && (t = Y(i), t && (a[t] = e[i]));
        return a
    }

    function D(t) {
        var n, i;
        if (0 === t.indexOf("week")) n = 7, i = "day";
        else {
            if (0 !== t.indexOf("month")) return;
            n = 12, i = "month"
        }
        Lt[t] = function(a, r) {
            var s, o, l = Lt._locale[t],
                u = [];
            if ("number" == typeof a && (r = a, a = e), o = function(e) {
                    var t = Lt().utc().set(i, e);
                    return l.call(Lt._locale, t, a || "")
                }, null != r) return o(r);
            for (s = 0; n > s; s++) u.push(o(s));
            return u
        }
    }

    function x(e) {
        var t = +e,
            n = 0;
        return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
    }

    function S(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }

    function C(e, t, n) {
        return ut(Lt([e, 11, 31 + t - n]), t, n).week
    }

    function j(e) {
        return P(e) ? 366 : 365
    }

    function P(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }

    function E(e) {
        var t;
        e._a && -2 === e._pf.overflow && (t = e._a[St] < 0 || e._a[St] > 11 ? St : e._a[Ct] < 1 || e._a[Ct] > S(e._a[xt], e._a[St]) ? Ct : e._a[jt] < 0 || e._a[jt] > 24 || 24 === e._a[jt] && (0 !== e._a[Pt] || 0 !== e._a[Et] || 0 !== e._a[At]) ? jt : e._a[Pt] < 0 || e._a[Pt] > 59 ? Pt : e._a[Et] < 0 || e._a[Et] > 59 ? Et : e._a[At] < 0 || e._a[At] > 999 ? At : -1, e._pf._overflowDayOfYear && (xt > t || t > Ct) && (t = Ct), e._pf.overflow = t)
    }

    function A(t) {
        return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length && t._pf.bigHour === e)), t._isValid
    }

    function F(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function O(e) {
        for (var t, n, i, a, r = 0; r < e.length;) {
            for (a = F(e[r]).split("-"), t = a.length, n = F(e[r + 1]), n = n ? n.split("-") : null; t > 0;) {
                if (i = W(a.slice(0, t).join("-"))) return i;
                if (n && n.length >= t && T(a, n, !0) >= t - 1) break;
                t--
            }
            r++
        }
        return null
    }

    function W(e) {
        var t = null;
        if (!Ft[e] && Wt) try {
            t = Lt.locale(), require("./locale/" + e), Lt.locale(t)
        } catch (n) {}
        return Ft[e]
    }

    function H(e, t) {
        var n, i;
        return t._isUTC ? (n = t.clone(), i = (Lt.isMoment(e) || w(e) ? +e : +Lt(e)) - +n, n._d.setTime(+n._d + i), Lt.updateOffset(n, !1), n) : Lt(e).local()
    }

    function $(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function N(e) {
        var t, n, i = e.match(zt);
        for (t = 0, n = i.length; n > t; t++) i[t] = yn[i[t]] ? yn[i[t]] : $(i[t]);
        return function(a) {
            var r = "";
            for (t = 0; n > t; t++) r += i[t] instanceof Function ? i[t].call(a, e) : i[t];
            return r
        }
    }

    function z(e, t) {
        return e.isValid() ? (t = I(t, e.localeData()), pn[t] || (pn[t] = N(t)), pn[t](e)) : e.localeData().invalidDate()
    }

    function I(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var i = 5;
        for (It.lastIndex = 0; i >= 0 && It.test(e);) e = e.replace(It, n), It.lastIndex = 0, i -= 1;
        return e
    }

    function R(e, t) {
        var n, i = t._strict;
        switch (e) {
            case "Q":
                return Kt;
            case "DDDD":
                return tn;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return i ? nn : qt;
            case "Y":
            case "G":
            case "g":
                return rn;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return i ? an : Ut;
            case "S":
                if (i) return Kt;
            case "SS":
                if (i) return en;
            case "SSS":
                if (i) return tn;
            case "DDD":
                return Bt;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Gt;
            case "a":
            case "A":
                return t._locale._meridiemParse;
            case "x":
                return Qt;
            case "X":
                return Zt;
            case "Z":
            case "ZZ":
                return Jt;
            case "T":
                return Xt;
            case "SSSS":
                return Vt;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return i ? en : Rt;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return Rt;
            case "Do":
                return i ? t._locale._ordinalParse : t._locale._ordinalParseLenient;
            default:
                return n = new RegExp(Z(Q(e.replace("\\", "")), "i"))
        }
    }

    function B(e) {
        e = e || "";
        var t = e.match(Jt) || [],
            n = t[t.length - 1] || [],
            i = (n + "").match(dn) || ["-", 0, 0],
            a = +(60 * i[1]) + x(i[2]);
        return "+" === i[0] ? a : -a
    }

    function q(e, t, n) {
        var i, a = n._a;
        switch (e) {
            case "Q":
                null != t && (a[St] = 3 * (x(t) - 1));
                break;
            case "M":
            case "MM":
                null != t && (a[St] = x(t) - 1);
                break;
            case "MMM":
            case "MMMM":
                i = n._locale.monthsParse(t, e, n._strict), null != i ? a[St] = i : n._pf.invalidMonth = t;
                break;
            case "D":
            case "DD":
                null != t && (a[Ct] = x(t));
                break;
            case "Do":
                null != t && (a[Ct] = x(parseInt(t.match(/\d{1,2}/)[0], 10)));
                break;
            case "DDD":
            case "DDDD":
                null != t && (n._dayOfYear = x(t));
                break;
            case "YY":
                a[xt] = Lt.parseTwoDigitYear(t);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                a[xt] = x(t);
                break;
            case "a":
            case "A":
                n._meridiem = t;
                break;
            case "h":
            case "hh":
                n._pf.bigHour = !0;
            case "H":
            case "HH":
                a[jt] = x(t);
                break;
            case "m":
            case "mm":
                a[Pt] = x(t);
                break;
            case "s":
            case "ss":
                a[Et] = x(t);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                a[At] = x(1e3 * ("0." + t));
                break;
            case "x":
                n._d = new Date(x(t));
                break;
            case "X":
                n._d = new Date(1e3 * parseFloat(t));
                break;
            case "Z":
            case "ZZ":
                n._useUTC = !0, n._tzm = B(t);
                break;
            case "dd":
            case "ddd":
            case "dddd":
                i = n._locale.weekdaysParse(t), null != i ? (n._w = n._w || {}, n._w.d = i) : n._pf.invalidWeekday = t;
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "e":
            case "E":
                e = e.substr(0, 1);
            case "gggg":
            case "GGGG":
            case "GGGGG":
                e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = x(t));
                break;
            case "gg":
            case "GG":
                n._w = n._w || {}, n._w[e] = Lt.parseTwoDigitYear(t)
        }
    }

    function U(e) {
        var n, i, a, r, s, o, l;
        n = e._w, null != n.GG || null != n.W || null != n.E ? (s = 1, o = 4, i = t(n.GG, e._a[xt], ut(Lt(), 1, 4).year), a = t(n.W, 1), r = t(n.E, 1)) : (s = e._locale._week.dow, o = e._locale._week.doy, i = t(n.gg, e._a[xt], ut(Lt(), s, o).year), a = t(n.w, 1), null != n.d ? (r = n.d, s > r && ++a) : r = null != n.e ? n.e + s : s), l = dt(i, a, r, o, s), e._a[xt] = l.year, e._dayOfYear = l.dayOfYear
    }

    function V(e) {
        var n, i, a, r, s = [];
        if (!e._d) {
            for (a = J(e), e._w && null == e._a[Ct] && null == e._a[St] && U(e), e._dayOfYear && (r = t(e._a[xt], a[xt]), e._dayOfYear > j(r) && (e._pf._overflowDayOfYear = !0), i = rt(r, 0, e._dayOfYear), e._a[St] = i.getUTCMonth(), e._a[Ct] = i.getUTCDate()), n = 0; 3 > n && null == e._a[n]; ++n) e._a[n] = s[n] = a[n];
            for (; 7 > n; n++) e._a[n] = s[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
            24 === e._a[jt] && 0 === e._a[Pt] && 0 === e._a[Et] && 0 === e._a[At] && (e._nextDay = !0, e._a[jt] = 0), e._d = (e._useUTC ? rt : at).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[jt] = 24)
        }
    }

    function G(e) {
        var t;
        e._d || (t = k(e._i), e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], V(e))
    }

    function J(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function X(t) {
        if (t._f === Lt.ISO_8601) return void et(t);
        t._a = [], t._pf.empty = !0;
        var n, i, a, r, s, o = "" + t._i,
            l = o.length,
            u = 0;
        for (a = I(t._f, t._locale).match(zt) || [], n = 0; n < a.length; n++) r = a[n], i = (o.match(R(r, t)) || [])[0], i && (s = o.substr(0, o.indexOf(i)), s.length > 0 && t._pf.unusedInput.push(s), o = o.slice(o.indexOf(i) + i.length), u += i.length), yn[r] ? (i ? t._pf.empty = !1 : t._pf.unusedTokens.push(r), q(r, i, t)) : t._strict && !i && t._pf.unusedTokens.push(r);
        t._pf.charsLeftOver = l - u, o.length > 0 && t._pf.unusedInput.push(o), t._pf.bigHour === !0 && t._a[jt] <= 12 && (t._pf.bigHour = e), t._a[jt] = d(t._locale, t._a[jt], t._meridiem), V(t), E(t)
    }

    function Q(e) {
        return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, a) {
            return t || n || i || a
        })
    }

    function Z(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function K(e) {
        var t, n, a, r, s;
        if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(0 / 0));
        for (r = 0; r < e._f.length; r++) s = 0, t = m({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._pf = i(), t._f = e._f[r], X(t), A(t) && (s += t._pf.charsLeftOver, s += 10 * t._pf.unusedTokens.length, t._pf.score = s, (null == a || a > s) && (a = s, n = t));
        p(e, n || t)
    }

    function et(e) {
        var t, n, i = e._i,
            a = sn.exec(i);
        if (a) {
            for (e._pf.iso = !0, t = 0, n = ln.length; n > t; t++)
                if (ln[t][1].exec(i)) {
                    e._f = ln[t][0] + (a[6] || " ");
                    break
                }
            for (t = 0, n = un.length; n > t; t++)
                if (un[t][1].exec(i)) {
                    e._f += un[t][0];
                    break
                }
            i.match(Jt) && (e._f += "Z"), X(e)
        } else e._isValid = !1
    }

    function tt(e) {
        et(e), e._isValid === !1 && (delete e._isValid, Lt.createFromInputFallback(e))
    }

    function nt(e, t) {
        var n, i = [];
        for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
        return i
    }

    function it(t) {
        var n, i = t._i;
        i === e ? t._d = new Date : w(i) ? t._d = new Date(+i) : null !== (n = Ht.exec(i)) ? t._d = new Date(+n[1]) : "string" == typeof i ? tt(t) : b(i) ? (t._a = nt(i.slice(0), function(e) {
            return parseInt(e, 10)
        }), V(t)) : "object" == typeof i ? G(t) : "number" == typeof i ? t._d = new Date(i) : Lt.createFromInputFallback(t)
    }

    function at(e, t, n, i, a, r, s) {
        var o = new Date(e, t, n, i, a, r, s);
        return 1970 > e && o.setFullYear(e), o
    }

    function rt(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 1970 > e && t.setUTCFullYear(e), t
    }

    function st(e, t) {
        if ("string" == typeof e)
            if (isNaN(e)) {
                if (e = t.weekdaysParse(e), "number" != typeof e) return null
            } else e = parseInt(e, 10);
        return e
    }

    function ot(e, t, n, i, a) {
        return a.relativeTime(t || 1, !!n, e, i)
    }

    function lt(e, t, n) {
        var i = Lt.duration(e).abs(),
            a = kt(i.as("s")),
            r = kt(i.as("m")),
            s = kt(i.as("h")),
            o = kt(i.as("d")),
            l = kt(i.as("M")),
            u = kt(i.as("y")),
            d = a < mn.s && ["s", a] || 1 === r && ["m"] || r < mn.m && ["mm", r] || 1 === s && ["h"] || s < mn.h && ["hh", s] || 1 === o && ["d"] || o < mn.d && ["dd", o] || 1 === l && ["M"] || l < mn.M && ["MM", l] || 1 === u && ["y"] || ["yy", u];
        return d[2] = t, d[3] = +e > 0, d[4] = n, ot.apply({}, d)
    }

    function ut(e, t, n) {
        var i, a = n - t,
            r = n - e.day();
        return r > a && (r -= 7), a - 7 > r && (r += 7), i = Lt(e).add(r, "d"), {
            week: Math.ceil(i.dayOfYear() / 7),
            year: i.year()
        }
    }

    function dt(e, t, n, i, a) {
        var r, s, o = rt(e, 0, 1).getUTCDay();
        return o = 0 === o ? 7 : o, n = null != n ? n : a, r = a - o + (o > i ? 7 : 0) - (a > o ? 7 : 0), s = 7 * (t - 1) + (n - a) + r + 1, {
            year: s > 0 ? e : e - 1,
            dayOfYear: s > 0 ? s : j(e - 1) + s
        }
    }

    function ct(t) {
        var n, i = t._i,
            a = t._f;
        return t._locale = t._locale || Lt.localeData(t._l), null === i || a === e && "" === i ? Lt.invalid({
            nullInput: !0
        }) : ("string" == typeof i && (t._i = i = t._locale.preparse(i)), Lt.isMoment(i) ? new h(i, !0) : (a ? b(a) ? K(t) : X(t) : it(t), n = new h(t), n._nextDay && (n.add(1, "d"), n._nextDay = e), n))
    }

    function ht(e, t) {
        var n, i;
        if (1 === t.length && b(t[0]) && (t = t[0]), !t.length) return Lt();
        for (n = t[0], i = 1; i < t.length; ++i) t[i][e](n) && (n = t[i]);
        return n
    }

    function ft(e, t) {
        var n;
        return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), S(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
    }

    function pt(e, t) {
        return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }

    function mt(e, t, n) {
        return "Month" === t ? ft(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }

    function _t(e, t) {
        return function(n) {
            return null != n ? (mt(this, e, n), Lt.updateOffset(this, t), this) : pt(this, e)
        }
    }

    function gt(e) {
        return 400 * e / 146097
    }

    function yt(e) {
        return 146097 * e / 400
    }

    function vt(e) {
        Lt.duration.fn[e] = function() {
            return this._data[e]
        }
    }

    function Mt(e) {
        "undefined" == typeof ender && (bt = Yt.moment, Yt.moment = e ? r("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", Lt) : Lt)
    }
    for (var Lt, bt, wt, Tt = "2.9.0", Yt = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, kt = Math.round, Dt = Object.prototype.hasOwnProperty, xt = 0, St = 1, Ct = 2, jt = 3, Pt = 4, Et = 5, At = 6, Ft = {}, Ot = [], Wt = "undefined" != typeof module && module && module.exports, Ht = /^\/?Date\((\-?\d+)/i, $t = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Nt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, zt = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, It = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rt = /\d\d?/, Bt = /\d{1,3}/, qt = /\d{1,4}/, Ut = /[+\-]?\d{1,6}/, Vt = /\d+/, Gt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Jt = /Z|[\+\-]\d\d:?\d\d/gi, Xt = /T/i, Qt = /[\+\-]?\d+/, Zt = /[\+\-]?\d+(\.\d{1,3})?/, Kt = /\d/, en = /\d\d/, tn = /\d{3}/, nn = /\d{4}/, an = /[+-]?\d{6}/, rn = /[+-]?\d+/, sn = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, on = "YYYY-MM-DDTHH:mm:ssZ", ln = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ], un = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], dn = /([\+\-]|\d\d)/gi, cn = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }), hn = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, fn = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, pn = {}, mn = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, _n = "DDD w W M D d".split(" "), gn = "M D H h m s w W".split(" "), yn = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(e) {
                return this.localeData().monthsShort(this, e)
            },
            MMMM: function(e) {
                return this.localeData().months(this, e)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(e) {
                return this.localeData().weekdaysMin(this, e)
            },
            ddd: function(e) {
                return this.localeData().weekdaysShort(this, e)
            },
            dddd: function(e) {
                return this.localeData().weekdays(this, e)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return g(this.year() % 100, 2)
            },
            YYYY: function() {
                return g(this.year(), 4)
            },
            YYYYY: function() {
                return g(this.year(), 5)
            },
            YYYYYY: function() {
                var e = this.year(),
                    t = e >= 0 ? "+" : "-";
                return t + g(Math.abs(e), 6)
            },
            gg: function() {
                return g(this.weekYear() % 100, 2)
            },
            gggg: function() {
                return g(this.weekYear(), 4)
            },
            ggggg: function() {
                return g(this.weekYear(), 5)
            },
            GG: function() {
                return g(this.isoWeekYear() % 100, 2)
            },
            GGGG: function() {
                return g(this.isoWeekYear(), 4)
            },
            GGGGG: function() {
                return g(this.isoWeekYear(), 5)
            },
            e: function() {
                return this.weekday()
            },
            E: function() {
                return this.isoWeekday()
            },
            a: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return x(this.milliseconds() / 100)
            },
            SS: function() {
                return g(x(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return g(this.milliseconds(), 3)
            },
            SSSS: function() {
                return g(this.milliseconds(), 3)
            },
            Z: function() {
                var e = this.utcOffset(),
                    t = "+";
                return 0 > e && (e = -e, t = "-"), t + g(x(e / 60), 2) + ":" + g(x(e) % 60, 2)
            },
            ZZ: function() {
                var e = this.utcOffset(),
                    t = "+";
                return 0 > e && (e = -e, t = "-"), t + g(x(e / 60), 2) + g(x(e) % 60, 2)
            },
            z: function() {
                return this.zoneAbbr()
            },
            zz: function() {
                return this.zoneName()
            },
            x: function() {
                return this.valueOf()
            },
            X: function() {
                return this.unix()
            },
            Q: function() {
                return this.quarter()
            }
        }, vn = {}, Mn = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], Ln = !1; _n.length;) wt = _n.pop(), yn[wt + "o"] = l(yn[wt], wt);
    for (; gn.length;) wt = gn.pop(), yn[wt + wt] = o(yn[wt], 2);
    yn.DDDD = o(yn.DDD, 3), p(c.prototype, {
        set: function(e) {
            var t, n;
            for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(e) {
            return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(e) {
            return this._monthsShort[e.month()]
        },
        monthsParse: function(e, t, n) {
            var i, a, r;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
                if (a = Lt.utc([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
                if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
                if (!n && this._monthsParse[i].test(e)) return i
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(e) {
            return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(e) {
            return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(e) {
            return this._weekdaysMin[e.day()]
        },
        weekdaysParse: function(e) {
            var t, n, i;
            for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
                if (this._weekdaysParse[t] || (n = Lt([2e3, 1]).day(t), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
        },
        _longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function(e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e] = t), t
        },
        isPM: function(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(e, t, n) {
            var i = this._calendar[e];
            return "function" == typeof i ? i.apply(t, [n]) : i
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(e, t, n, i) {
            var a = this._relativeTime[n];
            return "function" == typeof a ? a(e, t, n, i) : a.replace(/%d/i, e)
        },
        pastFuture: function(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
        },
        ordinal: function(e) {
            return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        _ordinalParse: /\d{1,2}/,
        preparse: function(e) {
            return e
        },
        postformat: function(e) {
            return e
        },
        week: function(e) {
            return ut(e, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        firstDayOfWeek: function() {
            return this._week.dow
        },
        firstDayOfYear: function() {
            return this._week.doy
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }), Lt = function(t, n, a, r) {
        var s;
        return "boolean" == typeof a && (r = a, a = e), s = {}, s._isAMomentObject = !0, s._i = t, s._f = n, s._l = a, s._strict = r, s._isUTC = !1, s._pf = i(), ct(s)
    }, Lt.suppressDeprecationWarnings = !1, Lt.createFromInputFallback = r("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), Lt.min = function() {
        var e = [].slice.call(arguments, 0);
        return ht("isBefore", e)
    }, Lt.max = function() {
        var e = [].slice.call(arguments, 0);
        return ht("isAfter", e)
    }, Lt.utc = function(t, n, a, r) {
        var s;
        return "boolean" == typeof a && (r = a, a = e), s = {}, s._isAMomentObject = !0, s._useUTC = !0, s._isUTC = !0, s._l = a, s._i = t, s._f = n, s._strict = r, s._pf = i(), ct(s).utc()
    }, Lt.unix = function(e) {
        return Lt(1e3 * e)
    }, Lt.duration = function(e, t) {
        var i, a, r, s, o = e,
            l = null;
        return Lt.isDuration(e) ? o = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : "number" == typeof e ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (l = $t.exec(e)) ? (i = "-" === l[1] ? -1 : 1, o = {
            y: 0,
            d: x(l[Ct]) * i,
            h: x(l[jt]) * i,
            m: x(l[Pt]) * i,
            s: x(l[Et]) * i,
            ms: x(l[At]) * i
        }) : (l = Nt.exec(e)) ? (i = "-" === l[1] ? -1 : 1, r = function(e) {
            var t = e && parseFloat(e.replace(",", "."));
            return (isNaN(t) ? 0 : t) * i
        }, o = {
            y: r(l[2]),
            M: r(l[3]),
            d: r(l[4]),
            h: r(l[5]),
            m: r(l[6]),
            s: r(l[7]),
            w: r(l[8])
        }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (s = v(Lt(o.from), Lt(o.to)), o = {}, o.ms = s.milliseconds, o.M = s.months), a = new f(o), Lt.isDuration(e) && n(e, "_locale") && (a._locale = e._locale), a
    }, Lt.version = Tt, Lt.defaultFormat = on, Lt.ISO_8601 = function() {}, Lt.momentProperties = Ot, Lt.updateOffset = function() {}, Lt.relativeTimeThreshold = function(t, n) {
        return mn[t] === e ? !1 : n === e ? mn[t] : (mn[t] = n, !0)
    }, Lt.lang = r("moment.lang is deprecated. Use moment.locale instead.", function(e, t) {
        return Lt.locale(e, t)
    }), Lt.locale = function(e, t) {
        var n;
        return e && (n = "undefined" != typeof t ? Lt.defineLocale(e, t) : Lt.localeData(e), n && (Lt.duration._locale = Lt._locale = n)), Lt._locale._abbr
    }, Lt.defineLocale = function(e, t) {
        return null !== t ? (t.abbr = e, Ft[e] || (Ft[e] = new c), Ft[e].set(t), Lt.locale(e), Ft[e]) : (delete Ft[e], null)
    }, Lt.langData = r("moment.langData is deprecated. Use moment.localeData instead.", function(e) {
        return Lt.localeData(e)
    }), Lt.localeData = function(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Lt._locale;
        if (!b(e)) {
            if (t = W(e)) return t;
            e = [e]
        }
        return O(e)
    }, Lt.isMoment = function(e) {
        return e instanceof h || null != e && n(e, "_isAMomentObject")
    }, Lt.isDuration = function(e) {
        return e instanceof f
    };
    for (wt = Mn.length - 1; wt >= 0; --wt) D(Mn[wt]);
    Lt.normalizeUnits = function(e) {
        return Y(e)
    }, Lt.invalid = function(e) {
        var t = Lt.utc(0 / 0);
        return null != e ? p(t._pf, e) : t._pf.userInvalidated = !0, t
    }, Lt.parseZone = function() {
        return Lt.apply(null, arguments).parseZone()
    }, Lt.parseTwoDigitYear = function(e) {
        return x(e) + (x(e) > 68 ? 1900 : 2e3)
    }, Lt.isDate = w, p(Lt.fn = h.prototype, {
        clone: function() {
            return Lt(this)
        },
        valueOf: function() {
            return +this._d - 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor(+this / 1e3)
        },
        toString: function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
            var e = Lt(this).utc();
            return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : z(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },
        isValid: function() {
            return A(this)
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && T(this._a, (this._isUTC ? Lt.utc(this._a) : Lt(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function() {
            return p({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function(e) {
            return this.utcOffset(0, e)
        },
        local: function(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(this._dateUtcOffset(), "m")), this
        },
        format: function(e) {
            var t = z(this, e || Lt.defaultFormat);
            return this.localeData().postformat(t)
        },
        add: M(1, "add"),
        subtract: M(-1, "subtract"),
        diff: function(e, t, n) {
            var i, a, r = H(e, this),
                s = 6e4 * (r.utcOffset() - this.utcOffset());
            return t = Y(t), "year" === t || "month" === t || "quarter" === t ? (a = u(this, r), "quarter" === t ? a /= 3 : "year" === t && (a /= 12)) : (i = this - r, a = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - s) / 864e5 : "week" === t ? (i - s) / 6048e5 : i), n ? a : _(a)
        },
        from: function(e, t) {
            return Lt.duration({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t)
        },
        fromNow: function(e) {
            return this.from(Lt(), e)
        },
        calendar: function(e) {
            var t = e || Lt(),
                n = H(t, this).startOf("day"),
                i = this.diff(n, "days", !0),
                a = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(a, this, Lt(t)))
        },
        isLeapYear: function() {
            return P(this.year())
        },
        isDST: function() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        },
        day: function(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = st(e, this.localeData()), this.add(e - t, "d")) : t
        },
        month: _t("Month", !0),
        startOf: function(e) {
            switch (e = Y(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function(t) {
            return t = Y(t), t === e || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
        },
        isAfter: function(e, t) {
            var n;
            return t = Y("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = Lt.isMoment(e) ? e : Lt(e), +this > +e) : (n = Lt.isMoment(e) ? +e : +Lt(e), n < +this.clone().startOf(t))
        },
        isBefore: function(e, t) {
            var n;
            return t = Y("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = Lt.isMoment(e) ? e : Lt(e), +e > +this) : (n = Lt.isMoment(e) ? +e : +Lt(e), +this.clone().endOf(t) < n)
        },
        isBetween: function(e, t, n) {
            return this.isAfter(e, n) && this.isBefore(t, n)
        },
        isSame: function(e, t) {
            var n;
            return t = Y(t || "millisecond"), "millisecond" === t ? (e = Lt.isMoment(e) ? e : Lt(e), +this === +e) : (n = +Lt(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
        },
        min: r("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(e) {
            return e = Lt.apply(null, arguments), this > e ? this : e
        }),
        max: r("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(e) {
            return e = Lt.apply(null, arguments), e > this ? this : e
        }),
        zone: r("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }),
        utcOffset: function(e, t) {
            var n, i = this._offset || 0;
            return null != e ? ("string" == typeof e && (e = B(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (n = this._dateUtcOffset()), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), i !== e && (!t || this._changeInProgress ? L(this, Lt.duration(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, Lt.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : this._dateUtcOffset()
        },
        isLocal: function() {
            return !this._isUTC
        },
        isUtcOffset: function() {
            return this._isUTC
        },
        isUtc: function() {
            return this._isUTC && 0 === this._offset
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(B(this._i)), this
        },
        hasAlignedHourOffset: function(e) {
            return e = e ? Lt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0
        },
        daysInMonth: function() {
            return S(this.year(), this.month())
        },
        dayOfYear: function(e) {
            var t = kt((Lt(this).startOf("day") - Lt(this).startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        },
        quarter: function(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        },
        weekYear: function(e) {
            var t = ut(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == e ? t : this.add(e - t, "y")
        },
        isoWeekYear: function(e) {
            var t = ut(this, 1, 4).year;
            return null == e ? t : this.add(e - t, "y")
        },
        week: function(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        },
        isoWeek: function(e) {
            var t = ut(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        },
        weekday: function(e) {
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        },
        isoWeekday: function(e) {
            return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        },
        isoWeeksInYear: function() {
            return C(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var e = this.localeData()._week;
            return C(this.year(), e.dow, e.doy)
        },
        get: function(e) {
            return e = Y(e), this[e]()
        },
        set: function(e, t) {
            var n;
            if ("object" == typeof e)
                for (n in e) this.set(n, e[n]);
            else e = Y(e), "function" == typeof this[e] && this[e](t);
            return this
        },
        locale: function(t) {
            var n;
            return t === e ? this._locale._abbr : (n = Lt.localeData(t), null != n && (this._locale = n), this)
        },
        lang: r("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
            return t === e ? this.localeData() : this.locale(t)
        }),
        localeData: function() {
            return this._locale
        },
        _dateUtcOffset: function() {
            return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
        }
    }), Lt.fn.millisecond = Lt.fn.milliseconds = _t("Milliseconds", !1), Lt.fn.second = Lt.fn.seconds = _t("Seconds", !1), Lt.fn.minute = Lt.fn.minutes = _t("Minutes", !1), Lt.fn.hour = Lt.fn.hours = _t("Hours", !0), Lt.fn.date = _t("Date", !0), Lt.fn.dates = r("dates accessor is deprecated. Use date instead.", _t("Date", !0)), Lt.fn.year = _t("FullYear", !0), Lt.fn.years = r("years accessor is deprecated. Use year instead.", _t("FullYear", !0)), Lt.fn.days = Lt.fn.day, Lt.fn.months = Lt.fn.month, Lt.fn.weeks = Lt.fn.week, Lt.fn.isoWeeks = Lt.fn.isoWeek, Lt.fn.quarters = Lt.fn.quarter, Lt.fn.toJSON = Lt.fn.toISOString, Lt.fn.isUTC = Lt.fn.isUtc, p(Lt.duration.fn = f.prototype, {
        _bubble: function() {
            var e, t, n, i = this._milliseconds,
                a = this._days,
                r = this._months,
                s = this._data,
                o = 0;
            s.milliseconds = i % 1e3, e = _(i / 1e3), s.seconds = e % 60, t = _(e / 60), s.minutes = t % 60, n = _(t / 60), s.hours = n % 24, a += _(n / 24), o = _(gt(a)), a -= _(yt(o)), r += _(a / 30), a %= 30, o += _(r / 12), r %= 12, s.days = a, s.months = r, s.years = o
        },
        abs: function() {
            return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
        },
        weeks: function() {
            return _(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * x(this._months / 12)
        },
        humanize: function(e) {
            var t = lt(this, !e, this.localeData());
            return e && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t)
        },
        add: function(e, t) {
            var n = Lt.duration(e, t);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
        },
        subtract: function(e, t) {
            var n = Lt.duration(e, t);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
        },
        get: function(e) {
            return e = Y(e), this[e.toLowerCase() + "s"]()
        },
        as: function(e) {
            var t, n;
            if (e = Y(e), "month" === e || "year" === e) return t = this._days + this._milliseconds / 864e5, n = this._months + 12 * gt(t), "month" === e ? n : n / 12;
            switch (t = this._days + Math.round(yt(this._months / 12)), e) {
                case "week":
                    return t / 7 + this._milliseconds / 6048e5;
                case "day":
                    return t + this._milliseconds / 864e5;
                case "hour":
                    return 24 * t + this._milliseconds / 36e5;
                case "minute":
                    return 24 * t * 60 + this._milliseconds / 6e4;
                case "second":
                    return 24 * t * 60 * 60 + this._milliseconds / 1e3;
                case "millisecond":
                    return Math.floor(24 * t * 60 * 60 * 1e3) + this._milliseconds;
                default:
                    throw new Error("Unknown unit " + e)
            }
        },
        lang: Lt.fn.lang,
        locale: Lt.fn.locale,
        toIsoString: r("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
            return this.toISOString()
        }),
        toISOString: function() {
            var e = Math.abs(this.years()),
                t = Math.abs(this.months()),
                n = Math.abs(this.days()),
                i = Math.abs(this.hours()),
                a = Math.abs(this.minutes()),
                r = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (i || a || r ? "T" : "") + (i ? i + "H" : "") + (a ? a + "M" : "") + (r ? r + "S" : "") : "P0D"
        },
        localeData: function() {
            return this._locale
        },
        toJSON: function() {
            return this.toISOString()
        }
    }), Lt.duration.fn.toString = Lt.duration.fn.toISOString;
    for (wt in cn) n(cn, wt) && vt(wt.toLowerCase());
    Lt.duration.fn.asMilliseconds = function() {
            return this.as("ms")
        }, Lt.duration.fn.asSeconds = function() {
            return this.as("s")
        }, Lt.duration.fn.asMinutes = function() {
            return this.as("m")
        }, Lt.duration.fn.asHours = function() {
            return this.as("h")
        }, Lt.duration.fn.asDays = function() {
            return this.as("d")
        }, Lt.duration.fn.asWeeks = function() {
            return this.as("weeks")
        }, Lt.duration.fn.asMonths = function() {
            return this.as("M")
        }, Lt.duration.fn.asYears = function() {
            return this.as("y")
        }, Lt.locale("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 === x(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function(e) {
                    return /^nm$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? n ? "vm" : "VM" : n ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[Môre om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                ordinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("ar-ma", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                },
                n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                };
            return e.defineLocale("ar-sa", {
                months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e) {
                    return 12 > e ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("ar-tn", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                },
                n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                },
                i = function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5
                },
                a = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                },
                r = function(e) {
                    return function(t, n) {
                        var r = i(t),
                            s = a[e][i(t)];
                        return 2 === r && (s = s[n ? 0 : 1]), s.replace(/%d/i, t)
                    }
                },
                s = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
            return e.defineLocale("ar", {
                months: s,
                monthsShort: s,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e) {
                    return 12 > e ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: r("s"),
                    m: r("m"),
                    mm: r("m"),
                    h: r("h"),
                    hh: r("h"),
                    d: r("d"),
                    dd: r("d"),
                    M: r("M"),
                    MM: r("M"),
                    y: r("y"),
                    yy: r("y")
                },
                preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                1: "-inci",
                5: "-inci",
                8: "-inci",
                70: "-inci",
                80: "-inci",
                2: "-nci",
                7: "-nci",
                20: "-nci",
                50: "-nci",
                3: "-üncü",
                4: "-üncü",
                100: "-üncü",
                6: "-ncı",
                9: "-uncu",
                10: "-uncu",
                30: "-uncu",
                60: "-ıncı",
                90: "-ıncı"
            };
            return e.defineLocale("az", {
                months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[sabah saat] LT",
                    nextWeek: "[gələn həftə] dddd [saat] LT",
                    lastDay: "[dünən] LT",
                    lastWeek: "[keçən həftə] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s əvvəl",
                    s: "birneçə saniyyə",
                    m: "bir dəqiqə",
                    mm: "%d dəqiqə",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir il",
                    yy: "%d il"
                },
                meridiemParse: /gecə|səhər|gündüz|axşam/,
                isPM: function(e) {
                    return /^(gündüz|axşam)$/.test(e)
                },
                meridiem: function(e) {
                    return 4 > e ? "gecə" : 12 > e ? "səhər" : 17 > e ? "gündüz" : "axşam"
                },
                ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                ordinal: function(e) {
                    if (0 === e) return e + "-ıncı";
                    var n = e % 10,
                        i = e % 100 - n,
                        a = e >= 100 ? 100 : null;
                    return e + (t[n] || t[i] || t[a])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, i) {
                var a = {
                    mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                };
                return "m" === i ? n ? "хвіліна" : "хвіліну" : "h" === i ? n ? "гадзіна" : "гадзіну" : e + " " + t(a[i], +e)
            }

            function i(e, t) {
                var n = {
                        nominative: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"),
                        accusative: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_")
                    },
                    i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                return n[i][e.month()]
            }

            function a(e, t) {
                var n = {
                        nominative: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                        accusative: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_")
                    },
                    i = /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
                return n[i][e.day()]
            }
            return e.defineLocale("be", {
                months: i,
                monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                weekdays: a,
                weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., LT",
                    LLLL: "dddd, D MMMM YYYY г., LT"
                },
                calendar: {
                    sameDay: "[Сёння ў] LT",
                    nextDay: "[Заўтра ў] LT",
                    lastDay: "[Учора ў] LT",
                    nextWeek: function() {
                        return "[У] dddd [ў] LT"
                    },
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return "[У мінулую] dddd [ў] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[У мінулы] dddd [ў] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "праз %s",
                    past: "%s таму",
                    s: "некалькі секунд",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "дзень",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночы|раніцы|дня|вечара/,
                isPM: function(e) {
                    return /^(дня|вечара)$/.test(e)
                },
                meridiem: function(e) {
                    return 4 > e ? "ночы" : 12 > e ? "раніцы" : 17 > e ? "дня" : "вечара"
                },
                ordinalParse: /\d{1,2}-(і|ы|га)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-ы" : e + "-і";
                        case "D":
                            return e + "-га";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("bg", {
                months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Днес в] LT",
                    nextDay: "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay: "[Вчера в] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[В изминалата] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[В изминалия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "след %s",
                    past: "преди %s",
                    s: "няколко секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дни",
                    M: "месец",
                    MM: "%d месеца",
                    y: "година",
                    yy: "%d години"
                },
                ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                    1: "১",
                    2: "২",
                    3: "৩",
                    4: "৪",
                    5: "৫",
                    6: "৬",
                    7: "৭",
                    8: "৮",
                    9: "৯",
                    0: "০"
                },
                n = {
                    "১": "1",
                    "২": "2",
                    "৩": "3",
                    "৪": "4",
                    "৫": "5",
                    "৬": "6",
                    "৭": "7",
                    "৮": "8",
                    "৯": "9",
                    "০": "0"
                };
            return e.defineLocale("bn", {
                months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"),
                weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, LT",
                    LLLL: "dddd, D MMMM YYYY, LT"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কএক সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function(e) {
                    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /রাত|শকাল|দুপুর|বিকেল|রাত/,
                isPM: function(e) {
                    return /^(দুপুর|বিকেল|রাত)$/.test(e)
                },
                meridiem: function(e) {
                    return 4 > e ? "রাত" : 10 > e ? "শকাল" : 17 > e ? "দুপুর" : 20 > e ? "বিকেল" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                    1: "༡",
                    2: "༢",
                    3: "༣",
                    4: "༤",
                    5: "༥",
                    6: "༦",
                    7: "༧",
                    8: "༨",
                    9: "༩",
                    0: "༠"
                },
                n = {
                    "༡": "1",
                    "༢": "2",
                    "༣": "3",
                    "༤": "4",
                    "༥": "5",
                    "༦": "6",
                    "༧": "7",
                    "༨": "8",
                    "༩": "9",
                    "༠": "0"
                };
            return e.defineLocale("bo", {
                months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, LT",
                    LLLL: "dddd, D MMMM YYYY, LT"
                },
                calendar: {
                    sameDay: "[དི་རིང] LT",
                    nextDay: "[སང་ཉིན] LT",
                    nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                    lastDay: "[ཁ་སང] LT",
                    lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ལ་",
                    past: "%s སྔན་ལ",
                    s: "ལམ་སང",
                    m: "སྐར་མ་གཅིག",
                    mm: "%d སྐར་མ",
                    h: "ཆུ་ཚོད་གཅིག",
                    hh: "%d ཆུ་ཚོད",
                    d: "ཉིན་གཅིག",
                    dd: "%d ཉིན་",
                    M: "ཟླ་བ་གཅིག",
                    MM: "%d ཟླ་བ",
                    y: "ལོ་གཅིག",
                    yy: "%d ལོ"
                },
                preparse: function(e) {
                    return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                isPM: function(e) {
                    return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(e)
                },
                meridiem: function(e) {
                    return 4 > e ? "མཚན་མོ" : 10 > e ? "ཞོགས་ཀས" : 17 > e ? "ཉིན་གུང" : 20 > e ? "དགོང་དག" : "མཚན་མོ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(t) {
            function n(e, t, n) {
                var i = {
                    mm: "munutenn",
                    MM: "miz",
                    dd: "devezh"
                };
                return e + " " + r(i[n], e)
            }

            function i(e) {
                switch (a(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                }
            }

            function a(e) {
                return e > 9 ? a(e % 10) : e
            }

            function r(e, t) {
                return 2 === t ? s(e) : e
            }

            function s(t) {
                var n = {
                    m: "v",
                    b: "v",
                    d: "z"
                };
                return n[t.charAt(0)] === e ? t : n[t.charAt(0)] + t.substring(1)
            }
            return t.defineLocale("br", {
                months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
                weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                longDateFormat: {
                    LT: "h[e]mm A",
                    LTS: "h[e]mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [a viz] MMMM YYYY",
                    LLL: "D [a viz] MMMM YYYY LT",
                    LLLL: "dddd, D [a viz] MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Hiziv da] LT",
                    nextDay: "[Warc'hoazh da] LT",
                    nextWeek: "dddd [da] LT",
                    lastDay: "[Dec'h da] LT",
                    lastWeek: "dddd [paset da] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "a-benn %s",
                    past: "%s 'zo",
                    s: "un nebeud segondennoù",
                    m: "ur vunutenn",
                    mm: n,
                    h: "un eur",
                    hh: "%d eur",
                    d: "un devezh",
                    dd: n,
                    M: "ur miz",
                    MM: n,
                    y: "ur bloaz",
                    yy: i
                },
                ordinalParse: /\d{1,2}(añ|vet)/,
                ordinal: function(e) {
                    var t = 1 === e ? "añ" : "vet";
                    return e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t, n) {
                var i = e + " ";
                switch (n) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return i += 1 === e ? "dan" : "dana";
                    case "MM":
                        return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            return e.defineLocale("bs", {
                months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY LT",
                    LLLL: "dddd, D. MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("ca", {
                months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: function() {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextDay: function() {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastDay: function() {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "fa %s",
                    s: "uns segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                ordinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(e, t) {
                    var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return ("w" === t || "W" === t) && (n = "a"), e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e) {
                return e > 1 && 5 > e && 1 !== ~~(e / 10)
            }

            function n(e, n, i, a) {
                var r = e + " ";
                switch (i) {
                    case "s":
                        return n || a ? "pár sekund" : "pár sekundami";
                    case "m":
                        return n ? "minuta" : a ? "minutu" : "minutou";
                    case "mm":
                        return n || a ? r + (t(e) ? "minuty" : "minut") : r + "minutami";
                    case "h":
                        return n ? "hodina" : a ? "hodinu" : "hodinou";
                    case "hh":
                        return n || a ? r + (t(e) ? "hodiny" : "hodin") : r + "hodinami";
                    case "d":
                        return n || a ? "den" : "dnem";
                    case "dd":
                        return n || a ? r + (t(e) ? "dny" : "dní") : r + "dny";
                    case "M":
                        return n || a ? "měsíc" : "měsícem";
                    case "MM":
                        return n || a ? r + (t(e) ? "měsíce" : "měsíců") : r + "měsíci";
                    case "y":
                        return n || a ? "rok" : "rokem";
                    case "yy":
                        return n || a ? r + (t(e) ? "roky" : "let") : r + "lety"
                }
            }
            var i = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                a = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
            return e.defineLocale("cs", {
                months: i,
                monthsShort: a,
                monthsParse: function(e, t) {
                    var n, i = [];
                    for (n = 0; 12 > n; n++) i[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                    return i
                }(i, a),
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY LT",
                    LLLL: "dddd D. MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[dnes v] LT",
                    nextDay: "[zítra v] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v neděli v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve středu v] LT";
                            case 4:
                                return "[ve čtvrtek v] LT";
                            case 5:
                                return "[v pátek v] LT";
                            case 6:
                                return "[v sobotu v] LT"
                        }
                    },
                    lastDay: "[včera v] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulou neděli v] LT";
                            case 1:
                            case 2:
                                return "[minulé] dddd [v] LT";
                            case 3:
                                return "[minulou středu v] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "před %s",
                    s: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("cv", {
                months: "кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),
                monthsShort: "кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),
                weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),
                weekdaysShort: "выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),
                weekdaysMin: "вр_тн_ыт_юн_кç_эр_шм".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD-MM-YYYY",
                    LL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",
                    LLL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",
                    LLLL: "dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT"
                },
                calendar: {
                    sameDay: "[Паян] LT [сехетре]",
                    nextDay: "[Ыран] LT [сехетре]",
                    lastDay: "[Ĕнер] LT [сехетре]",
                    nextWeek: "[Çитес] dddd LT [сехетре]",
                    lastWeek: "[Иртнĕ] dddd LT [сехетре]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        var t = /сехет$/i.exec(e) ? "рен" : /çул$/i.exec(e) ? "тан" : "ран";
                        return e + t
                    },
                    past: "%s каялла",
                    s: "пĕр-ик çеккунт",
                    m: "пĕр минут",
                    mm: "%d минут",
                    h: "пĕр сехет",
                    hh: "%d сехет",
                    d: "пĕр кун",
                    dd: "%d кун",
                    M: "пĕр уйăх",
                    MM: "%d уйăх",
                    y: "пĕр çул",
                    yy: "%d çул"
                },
                ordinalParse: /\d{1,2}-мĕш/,
                ordinal: "%d-мĕш",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("cy", {
                months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Heddiw am] LT",
                    nextDay: "[Yfory am] LT",
                    nextWeek: "dddd [am] LT",
                    lastDay: "[Ddoe am] LT",
                    lastWeek: "dddd [diwethaf am] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "mewn %s",
                    past: "%s yn ôl",
                    s: "ychydig eiliadau",
                    m: "munud",
                    mm: "%d munud",
                    h: "awr",
                    hh: "%d awr",
                    d: "diwrnod",
                    dd: "%d diwrnod",
                    M: "mis",
                    MM: "%d mis",
                    y: "blwyddyn",
                    yy: "%d flynedd"
                },
                ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                ordinal: function(e) {
                    var t = e,
                        n = "",
                        i = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                    return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = i[t]), e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY LT",
                    LLLL: "dddd [d.] D. MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[I dag kl.] LT",
                    nextDay: "[I morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[I går kl.] LT",
                    lastWeek: "[sidste] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "få sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "et år",
                    yy: "%d år"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t, n) {
                var i = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? i[n][0] : i[n][1]
            }
            return e.defineLocale("de-at", {
                months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY LT",
                    LLLL: "dddd, D. MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[Morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[Gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t, n) {
                var i = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? i[n][0] : i[n][1]
            }
            return e.defineLocale("de", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY LT",
                    LLLL: "dddd, D. MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[Morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[Gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months: function(e, t) {
                    return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
                },
                monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
                },
                isPM: function(e) {
                    return "μ" === (e + "").toLowerCase()[0]
                },
                meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendarEl: {
                    sameDay: "[Σήμερα {}] LT",
                    nextDay: "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Χθες {}] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 6:
                                return "[το προηγούμενο] dddd [{}] LT";
                            default:
                                return "[την προηγούμενη] dddd [{}] LT"
                        }
                    },
                    sameElse: "L"
                },
                calendar: function(e, t) {
                    var n = this._calendarEl[e],
                        i = t && t.hours();
                    return "function" == typeof n && (n = n.apply(t)), n.replace("{}", i % 12 === 1 ? "στη" : "στις")
                },
                relativeTime: {
                    future: "σε %s",
                    past: "%s πριν",
                    s: "λίγα δευτερόλεπτα",
                    m: "ένα λεπτό",
                    mm: "%d λεπτά",
                    h: "μία ώρα",
                    hh: "%d ώρες",
                    d: "μία μέρα",
                    dd: "%d μέρες",
                    M: "ένας μήνας",
                    MM: "%d μήνες",
                    y: "ένας χρόνος",
                    yy: "%d χρόνια"
                },
                ordinalParse: /\d{1,2}η/,
                ordinal: "%dη",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM, YYYY",
                    LLL: "D MMMM, YYYY LT",
                    LLLL: "dddd, D MMMM, YYYY LT"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("eo", {
                months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
                weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
                weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "YYYY-MM-DD",
                    LL: "D[-an de] MMMM, YYYY",
                    LLL: "D[-an de] MMMM, YYYY LT",
                    LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT"
                },
                meridiemParse: /[ap]\.t\.m/i,
                isPM: function(e) {
                    return "p" === e.charAt(0).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
                },
                calendar: {
                    sameDay: "[Hodiaŭ je] LT",
                    nextDay: "[Morgaŭ je] LT",
                    nextWeek: "dddd [je] LT",
                    lastDay: "[Hieraŭ je] LT",
                    lastWeek: "[pasinta] dddd [je] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "je %s",
                    past: "antaŭ %s",
                    s: "sekundoj",
                    m: "minuto",
                    mm: "%d minutoj",
                    h: "horo",
                    hh: "%d horoj",
                    d: "tago",
                    dd: "%d tagoj",
                    M: "monato",
                    MM: "%d monatoj",
                    y: "jaro",
                    yy: "%d jaroj"
                },
                ordinalParse: /\d{1,2}a/,
                ordinal: "%da",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
            return e.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, i) {
                    return /-MMM-/.test(i) ? n[e.month()] : t[e.month()]
                },
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY LT",
                    LLLL: "dddd, D [de] MMMM [de] YYYY LT"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t, n, i) {
                var a = {
                    s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                    m: ["ühe minuti", "üks minut"],
                    mm: [e + " minuti", e + " minutit"],
                    h: ["ühe tunni", "tund aega", "üks tund"],
                    hh: [e + " tunni", e + " tundi"],
                    d: ["ühe päeva", "üks päev"],
                    M: ["kuu aja", "kuu aega", "üks kuu"],
                    MM: [e + " kuu", e + " kuud"],
                    y: ["ühe aasta", "aasta", "üks aasta"],
                    yy: [e + " aasta", e + " aastat"]
                };
                return t ? a[n][2] ? a[n][2] : a[n][1] : i ? a[n][0] : a[n][1]
            }
            return e.defineLocale("et", {
                months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY LT",
                    LLLL: "dddd, D. MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Täna,] LT",
                    nextDay: "[Homme,] LT",
                    nextWeek: "[Järgmine] dddd LT",
                    lastDay: "[Eile,] LT",
                    lastWeek: "[Eelmine] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pärast",
                    past: "%s tagasi",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: "%d päeva",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] LT",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] LT",
                    llll: "ddd, YYYY[ko] MMM D[a] LT"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                    1: "۱",
                    2: "۲",
                    3: "۳",
                    4: "۴",
                    5: "۵",
                    6: "۶",
                    7: "۷",
                    8: "۸",
                    9: "۹",
                    0: "۰"
                },
                n = {
                    "۱": "1",
                    "۲": "2",
                    "۳": "3",
                    "۴": "4",
                    "۵": "5",
                    "۶": "6",
                    "۷": "7",
                    "۸": "8",
                    "۹": "9",
                    "۰": "0"
                };
            return e.defineLocale("fa", {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                meridiemParse: /قبل از ظهر|بعد از ظهر/,
                isPM: function(e) {
                    return /بعد از ظهر/.test(e)
                },
                meridiem: function(e) {
                    return 12 > e ? "قبل از ظهر" : "بعد از ظهر"
                },
                calendar: {
                    sameDay: "[امروز ساعت] LT",
                    nextDay: "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay: "[دیروز ساعت] LT",
                    lastWeek: "dddd [پیش] [ساعت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "در %s",
                    past: "%s پیش",
                    s: "چندین ثانیه",
                    m: "یک دقیقه",
                    mm: "%d دقیقه",
                    h: "یک ساعت",
                    hh: "%d ساعت",
                    d: "یک روز",
                    dd: "%d روز",
                    M: "یک ماه",
                    MM: "%d ماه",
                    y: "یک سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/[۰-۹]/g, function(e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                ordinalParse: /\d{1,2}م/,
                ordinal: "%dم",
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t, i, a) {
                var r = "";
                switch (i) {
                    case "s":
                        return a ? "muutaman sekunnin" : "muutama sekunti";
                    case "m":
                        return a ? "minuutin" : "minuutti";
                    case "mm":
                        r = a ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return a ? "tunnin" : "tunti";
                    case "hh":
                        r = a ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return a ? "päivän" : "päivä";
                    case "dd":
                        r = a ? "päivän" : "päivää";
                        break;
                    case "M":
                        return a ? "kuukauden" : "kuukausi";
                    case "MM":
                        r = a ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return a ? "vuoden" : "vuosi";
                    case "yy":
                        r = a ? "vuoden" : "vuotta"
                }
                return r = n(e, a) + " " + r
            }

            function n(e, t) {
                return 10 > e ? t ? a[e] : i[e] : e
            }
            var i = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                a = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", i[7], i[8], i[9]];
            return e.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] LT",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] LT",
                    llll: "ddd, Do MMM YYYY, [klo] LT"
                },
                calendar: {
                    sameDay: "[tänään] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past: "%s sitten",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("fo", {
                months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D. MMMM, YYYY LT"
                },
                calendar: {
                    sameDay: "[Í dag kl.] LT",
                    nextDay: "[Í morgin kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Í gjár kl.] LT",
                    lastWeek: "[síðstu] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "um %s",
                    past: "%s síðani",
                    s: "fá sekund",
                    m: "ein minutt",
                    mm: "%d minuttir",
                    h: "ein tími",
                    hh: "%d tímar",
                    d: "ein dagur",
                    dd: "%d dagar",
                    M: "ein mánaði",
                    MM: "%d mánaðir",
                    y: "eitt ár",
                    yy: "%d ár"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("fr-ca", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Aujourd'hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinalParse: /\d{1,2}(er|)/,
                ordinal: function(e) {
                    return e + (1 === e ? "er" : "")
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("fr", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Aujourd'hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinalParse: /\d{1,2}(er|)/,
                ordinal: function(e) {
                    return e + (1 === e ? "er" : "")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
            return e.defineLocale("fy", {
                months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                monthsShort: function(e, i) {
                    return /-MMM-/.test(i) ? n[e.month()] : t[e.month()]
                },
                weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[hjoed om] LT",
                    nextDay: "[moarn om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[juster om] LT",
                    lastWeek: "[ôfrûne] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oer %s",
                    past: "%s lyn",
                    s: "in pear sekonden",
                    m: "ien minút",
                    mm: "%d minuten",
                    h: "ien oere",
                    hh: "%d oeren",
                    d: "ien dei",
                    dd: "%d dagen",
                    M: "ien moanne",
                    MM: "%d moannen",
                    y: "ien jier",
                    yy: "%d jierren"
                },
                ordinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("gl", {
                months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
                monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
                weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
                weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
                weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    lastDay: function() {
                        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                    },
                    lastWeek: function() {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return "uns segundos" === e ? "nuns segundos" : "en " + e
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("he", {
                months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [ב]MMMM YYYY",
                    LLL: "D [ב]MMMM YYYY LT",
                    LLLL: "dddd, D [ב]MMMM YYYY LT",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY LT",
                    llll: "ddd, D MMM YYYY LT"
                },
                calendar: {
                    sameDay: "[היום ב־]LT",
                    nextDay: "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay: "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "בעוד %s",
                    past: "לפני %s",
                    s: "מספר שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: function(e) {
                        return 2 === e ? "שעתיים" : e + " שעות"
                    },
                    d: "יום",
                    dd: function(e) {
                        return 2 === e ? "יומיים" : e + " ימים"
                    },
                    M: "חודש",
                    MM: function(e) {
                        return 2 === e ? "חודשיים" : e + " חודשים"
                    },
                    y: "שנה",
                    yy: function(e) {
                        return 2 === e ? "שנתיים" : e % 10 === 0 && 10 !== e ? e + " שנה" : e + " שנים"
                    }
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                n = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
            return e.defineLocale("hi", {
                months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm बजे",
                    LTS: "A h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, LT",
                    LLLL: "dddd, D MMMM YYYY, LT"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[कल] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[कल] LT",
                    lastWeek: "[पिछले] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s में",
                    past: "%s पहले",
                    s: "कुछ ही क्षण",
                    m: "एक मिनट",
                    mm: "%d मिनट",
                    h: "एक घंटा",
                    hh: "%d घंटे",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महीने",
                    MM: "%d महीने",
                    y: "एक वर्ष",
                    yy: "%d वर्ष"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /रात|सुबह|दोपहर|शाम/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "रात" === t ? 4 > e ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
                },
                meridiem: function(e) {
                    return 4 > e ? "रात" : 10 > e ? "सुबह" : 17 > e ? "दोपहर" : 20 > e ? "शाम" : "रात"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t, n) {
                var i = e + " ";
                switch (n) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return i += 1 === e ? "dan" : "dana";
                    case "MM":
                        return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            return e.defineLocale("hr", {
                months: "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
                monthsShort: "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY LT",
                    LLLL: "dddd, D. MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t, n, i) {
                var a = e;
                switch (n) {
                    case "s":
                        return i || t ? "néhány másodperc" : "néhány másodperce";
                    case "m":
                        return "egy" + (i || t ? " perc" : " perce");
                    case "mm":
                        return a + (i || t ? " perc" : " perce");
                    case "h":
                        return "egy" + (i || t ? " óra" : " órája");
                    case "hh":
                        return a + (i || t ? " óra" : " órája");
                    case "d":
                        return "egy" + (i || t ? " nap" : " napja");
                    case "dd":
                        return a + (i || t ? " nap" : " napja");
                    case "M":
                        return "egy" + (i || t ? " hónap" : " hónapja");
                    case "MM":
                        return a + (i || t ? " hónap" : " hónapja");
                    case "y":
                        return "egy" + (i || t ? " év" : " éve");
                    case "yy":
                        return a + (i || t ? " év" : " éve")
                }
                return ""
            }

            function n(e) {
                return (e ? "" : "[múlt] ") + "[" + i[this.day()] + "] LT[-kor]"
            }
            var i = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
            return e.defineLocale("hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D., LT",
                    LLLL: "YYYY. MMMM D., dddd LT"
                },
                meridiemParse: /de|du/i,
                isPM: function(e) {
                    return "u" === e.charAt(1).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function() {
                        return n.call(this, !0)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function() {
                        return n.call(this, !1)
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past: "%s",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t) {
                var n = {
                        nominative: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),
                        accusative: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")
                    },
                    i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                return n[i][e.month()]
            }

            function n(e) {
                var t = "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_");
                return t[e.month()]
            }

            function i(e) {
                var t = "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_");
                return t[e.day()]
            }
            return e.defineLocale("hy-am", {
                months: t,
                monthsShort: n,
                weekdays: i,
                weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY թ.",
                    LLL: "D MMMM YYYY թ., LT",
                    LLLL: "dddd, D MMMM YYYY թ., LT"
                },
                calendar: {
                    sameDay: "[այսօր] LT",
                    nextDay: "[վաղը] LT",
                    lastDay: "[երեկ] LT",
                    nextWeek: function() {
                        return "dddd [օրը ժամը] LT"
                    },
                    lastWeek: function() {
                        return "[անցած] dddd [օրը ժամը] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s հետո",
                    past: "%s առաջ",
                    s: "մի քանի վայրկյան",
                    m: "րոպե",
                    mm: "%d րոպե",
                    h: "ժամ",
                    hh: "%d ժամ",
                    d: "օր",
                    dd: "%d օր",
                    M: "ամիս",
                    MM: "%d ամիս",
                    y: "տարի",
                    yy: "%d տարի"
                },
                meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                isPM: function(e) {
                    return /^(ցերեկվա|երեկոյան)$/.test(e)
                },
                meridiem: function(e) {
                    return 4 > e ? "գիշերվա" : 12 > e ? "առավոտվա" : 17 > e ? "ցերեկվա" : "երեկոյան"
                },
                ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "DDD":
                        case "w":
                        case "W":
                        case "DDDo":
                            return 1 === e ? e + "-ին" : e + "-րդ";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "LT.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] LT",
                    LLLL: "dddd, D MMMM YYYY [pukul] LT"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e) {
                    return 11 > e ? "pagi" : 15 > e ? "siang" : 19 > e ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e) {
                return e % 100 === 11 ? !0 : e % 10 === 1 ? !1 : !0
            }

            function n(e, n, i, a) {
                var r = e + " ";
                switch (i) {
                    case "s":
                        return n || a ? "nokkrar sekúndur" : "nokkrum sekúndum";
                    case "m":
                        return n ? "mínúta" : "mínútu";
                    case "mm":
                        return t(e) ? r + (n || a ? "mínútur" : "mínútum") : n ? r + "mínúta" : r + "mínútu";
                    case "hh":
                        return t(e) ? r + (n || a ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                    case "d":
                        return n ? "dagur" : a ? "dag" : "degi";
                    case "dd":
                        return t(e) ? n ? r + "dagar" : r + (a ? "daga" : "dögum") : n ? r + "dagur" : r + (a ? "dag" : "degi");
                    case "M":
                        return n ? "mánuður" : a ? "mánuð" : "mánuði";
                    case "MM":
                        return t(e) ? n ? r + "mánuðir" : r + (a ? "mánuði" : "mánuðum") : n ? r + "mánuður" : r + (a ? "mánuð" : "mánuði");
                    case "y":
                        return n || a ? "ár" : "ári";
                    case "yy":
                        return t(e) ? r + (n || a ? "ár" : "árum") : r + (n || a ? "ár" : "ári")
                }
            }
            return e.defineLocale("is", {
                months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] LT",
                    LLLL: "dddd, D. MMMM YYYY [kl.] LT"
                },
                calendar: {
                    sameDay: "[í dag kl.] LT",
                    nextDay: "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s síðan",
                    s: n,
                    m: n,
                    mm: n,
                    h: "klukkustund",
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
                weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
                weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("ja", {
                months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "Ah時m分",
                    LTS: "LTs秒",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日LT",
                    LLLL: "YYYY年M月D日LT dddd"
                },
                meridiemParse: /午前|午後/i,
                isPM: function(e) {
                    return "午後" === e
                },
                meridiem: function(e) {
                    return 12 > e ? "午前" : "午後"
                },
                calendar: {
                    sameDay: "[今日] LT",
                    nextDay: "[明日] LT",
                    nextWeek: "[来週]dddd LT",
                    lastDay: "[昨日] LT",
                    lastWeek: "[前週]dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t) {
                var n = {
                        nominative: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                        accusative: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
                    },
                    i = /D[oD] *MMMM?/.test(t) ? "accusative" : "nominative";
                return n[i][e.month()]
            }

            function n(e, t) {
                var n = {
                        nominative: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                        accusative: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")
                    },
                    i = /(წინა|შემდეგ)/.test(t) ? "accusative" : "nominative";
                return n[i][e.day()]
            }
            return e.defineLocale("ka", {
                months: t,
                monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                weekdays: n,
                weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[დღეს] LT[-ზე]",
                    nextDay: "[ხვალ] LT[-ზე]",
                    lastDay: "[გუშინ] LT[-ზე]",
                    nextWeek: "[შემდეგ] dddd LT[-ზე]",
                    lastWeek: "[წინა] dddd LT-ზე",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                    },
                    past: function(e) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                    },
                    s: "რამდენიმე წამი",
                    m: "წუთი",
                    mm: "%d წუთი",
                    h: "საათი",
                    hh: "%d საათი",
                    d: "დღე",
                    dd: "%d დღე",
                    M: "თვე",
                    MM: "%d თვე",
                    y: "წელი",
                    yy: "%d წელი"
                },
                ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                ordinal: function(e) {
                    return 0 === e ? e : 1 === e ? e + "-ლი" : 20 > e || 100 >= e && e % 20 === 0 || e % 100 === 0 ? "მე-" + e : e + "-ე"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("km", {
                months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[ថ្ងៃនៈ ម៉ោង] LT",
                    nextDay: "[ស្អែក ម៉ោង] LT",
                    nextWeek: "dddd [ម៉ោង] LT",
                    lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                    lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sទៀត",
                    past: "%sមុន",
                    s: "ប៉ុន្មានវិនាទី",
                    m: "មួយនាទី",
                    mm: "%d នាទី",
                    h: "មួយម៉ោង",
                    hh: "%d ម៉ោង",
                    d: "មួយថ្ងៃ",
                    dd: "%d ថ្ងៃ",
                    M: "មួយខែ",
                    MM: "%d ខែ",
                    y: "មួយឆ្នាំ",
                    yy: "%d ឆ្នាំ"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h시 m분",
                    LTS: "A h시 m분 s초",
                    L: "YYYY.MM.DD",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 LT",
                    LLLL: "YYYY년 MMMM D일 dddd LT"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇초",
                    ss: "%d초",
                    m: "일분",
                    mm: "%d분",
                    h: "한시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한달",
                    MM: "%d달",
                    y: "일년",
                    yy: "%d년"
                },
                ordinalParse: /\d{1,2}일/,
                ordinal: "%d일",
                meridiemParse: /오전|오후/,
                isPM: function(e) {
                    return "오후" === e
                },
                meridiem: function(e) {
                    return 12 > e ? "오전" : "오후"
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t, n) {
                var i = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return t ? i[n][0] : i[n][1]
            }

            function n(e) {
                var t = e.substr(0, e.indexOf(" "));
                return a(t) ? "a " + e : "an " + e
            }

            function i(e) {
                var t = e.substr(0, e.indexOf(" "));
                return a(t) ? "viru " + e : "virun " + e
            }

            function a(e) {
                if (e = parseInt(e, 10), isNaN(e)) return !1;
                if (0 > e) return !0;
                if (10 > e) return e >= 4 && 7 >= e ? !0 : !1;
                if (100 > e) {
                    var t = e % 10,
                        n = e / 10;
                    return a(0 === t ? n : t)
                }
                if (1e4 > e) {
                    for (; e >= 10;) e /= 10;
                    return a(e)
                }
                return e /= 1e3, a(e)
            }
            return e.defineLocale("lb", {
                months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY LT",
                    LLLL: "dddd, D. MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[Gëschter um] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 2:
                            case 4:
                                return "[Leschten] dddd [um] LT";
                            default:
                                return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: n,
                    past: i,
                    s: "e puer Sekonnen",
                    m: t,
                    mm: "%d Minutten",
                    h: t,
                    hh: "%d Stonnen",
                    d: t,
                    dd: "%d Deeg",
                    M: t,
                    MM: "%d Méint",
                    y: t,
                    yy: "%d Joer"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t, n, i) {
                return t ? "kelios sekundės" : i ? "kelių sekundžių" : "kelias sekundes"
            }

            function n(e, t, n, i) {
                return t ? a(n)[0] : i ? a(n)[1] : a(n)[2]
            }

            function i(e) {
                return e % 10 === 0 || e > 10 && 20 > e
            }

            function a(e) {
                return o[e].split("_")
            }

            function r(e, t, r, s) {
                var o = e + " ";
                return 1 === e ? o + n(e, t, r[0], s) : t ? o + (i(e) ? a(r)[1] : a(r)[0]) : s ? o + a(r)[1] : o + (i(e) ? a(r)[1] : a(r)[2])
            }

            function s(e, t) {
                var n = -1 === t.indexOf("dddd HH:mm"),
                    i = l[e.day()];
                return n ? i : i.substring(0, i.length - 2) + "į"
            }
            var o = {
                    m: "minutė_minutės_minutę",
                    mm: "minutės_minučių_minutes",
                    h: "valanda_valandos_valandą",
                    hh: "valandos_valandų_valandas",
                    d: "diena_dienos_dieną",
                    dd: "dienos_dienų_dienas",
                    M: "mėnuo_mėnesio_mėnesį",
                    MM: "mėnesiai_mėnesių_mėnesius",
                    y: "metai_metų_metus",
                    yy: "metai_metų_metus"
                },
                l = "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");
            return e.defineLocale("lt", {
                months: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays: s,
                weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], LT [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], LT [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"
                },
                calendar: {
                    sameDay: "[Šiandien] LT",
                    nextDay: "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Vakar] LT",
                    lastWeek: "[Praėjusį] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "po %s",
                    past: "prieš %s",
                    s: t,
                    m: n,
                    mm: r,
                    h: n,
                    hh: r,
                    d: n,
                    dd: r,
                    M: n,
                    MM: r,
                    y: n,
                    yy: r
                },
                ordinalParse: /\d{1,2}-oji/,
                ordinal: function(e) {
                    return e + "-oji"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t, n) {
                var i = e.split("_");
                return n ? t % 10 === 1 && 11 !== t ? i[2] : i[3] : t % 10 === 1 && 11 !== t ? i[0] : i[1]
            }

            function n(e, n, a) {
                return e + " " + t(i[a], e, n)
            }
            var i = {
                mm: "minūti_minūtes_minūte_minūtes",
                hh: "stundu_stundas_stunda_stundas",
                dd: "dienu_dienas_diena_dienas",
                MM: "mēnesi_mēnešus_mēnesis_mēneši",
                yy: "gadu_gadus_gads_gadi"
            };
            return e.defineLocale("lv", {
                months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "YYYY. [gada] D. MMMM",
                    LLL: "YYYY. [gada] D. MMMM, LT",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, LT"
                },
                calendar: {
                    sameDay: "[Šodien pulksten] LT",
                    nextDay: "[Rīt pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay: "[Vakar pulksten] LT",
                    lastWeek: "[Pagājušā] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s vēlāk",
                    past: "%s agrāk",
                    s: "dažas sekundes",
                    m: "minūti",
                    mm: n,
                    h: "stundu",
                    hh: n,
                    d: "dienu",
                    dd: n,
                    M: "mēnesi",
                    MM: n,
                    y: "gadu",
                    yy: n
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("mk", {
                months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Денес во] LT",
                    nextDay: "[Утре во] LT",
                    nextWeek: "dddd [во] LT",
                    lastDay: "[Вчера во] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Во изминатата] dddd [во] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Во изминатиот] dddd [во] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "после %s",
                    past: "пред %s",
                    s: "неколку секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дена",
                    M: "месец",
                    MM: "%d месеци",
                    y: "година",
                    yy: "%d години"
                },
                ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("ml", {
                months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                longDateFormat: {
                    LT: "A h:mm -നു",
                    LTS: "A h:mm:ss -നു",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, LT",
                    LLLL: "dddd, D MMMM YYYY, LT"
                },
                calendar: {
                    sameDay: "[ഇന്ന്] LT",
                    nextDay: "[നാളെ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ഇന്നലെ] LT",
                    lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s കഴിഞ്ഞ്",
                    past: "%s മുൻപ്",
                    s: "അൽപ നിമിഷങ്ങൾ",
                    m: "ഒരു മിനിറ്റ്",
                    mm: "%d മിനിറ്റ്",
                    h: "ഒരു മണിക്കൂർ",
                    hh: "%d മണിക്കൂർ",
                    d: "ഒരു ദിവസം",
                    dd: "%d ദിവസം",
                    M: "ഒരു മാസം",
                    MM: "%d മാസം",
                    y: "ഒരു വർഷം",
                    yy: "%d വർഷം"
                },
                meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                isPM: function(e) {
                    return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(e)
                },
                meridiem: function(e) {
                    return 4 > e ? "രാത്രി" : 12 > e ? "രാവിലെ" : 17 > e ? "ഉച്ച കഴിഞ്ഞ്" : 20 > e ? "വൈകുന്നേരം" : "രാത്രി"
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                n = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
            return e.defineLocale("mr", {
                months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm वाजता",
                    LTS: "A h:mm:ss वाजता",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, LT",
                    LLLL: "dddd, D MMMM YYYY, LT"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[उद्या] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[मागील] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s नंतर",
                    past: "%s पूर्वी",
                    s: "सेकंद",
                    m: "एक मिनिट",
                    mm: "%d मिनिटे",
                    h: "एक तास",
                    hh: "%d तास",
                    d: "एक दिवस",
                    dd: "%d दिवस",
                    M: "एक महिना",
                    MM: "%d महिने",
                    y: "एक वर्ष",
                    yy: "%d वर्षे"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "रात्री" === t ? 4 > e ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
                },
                meridiem: function(e) {
                    return 4 > e ? "रात्री" : 10 > e ? "सकाळी" : 17 > e ? "दुपारी" : 20 > e ? "सायंकाळी" : "रात्री"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "LT.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] LT",
                    LLLL: "dddd, D MMMM YYYY [pukul] LT"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e) {
                    return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                    1: "၁",
                    2: "၂",
                    3: "၃",
                    4: "၄",
                    5: "၅",
                    6: "၆",
                    7: "၇",
                    8: "၈",
                    9: "၉",
                    0: "၀"
                },
                n = {
                    "၁": "1",
                    "၂": "2",
                    "၃": "3",
                    "၄": "4",
                    "၅": "5",
                    "၆": "6",
                    "၇": "7",
                    "၈": "8",
                    "၉": "9",
                    "၀": "0"
                };
            return e.defineLocale("my", {
                months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                weekdaysShort: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                weekdaysMin: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[ယနေ.] LT [မှာ]",
                    nextDay: "[မနက်ဖြန်] LT [မှာ]",
                    nextWeek: "dddd LT [မှာ]",
                    lastDay: "[မနေ.က] LT [မှာ]",
                    lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "လာမည့် %s မှာ",
                    past: "လွန်ခဲ့သော %s က",
                    s: "စက္ကန်.အနည်းငယ်",
                    m: "တစ်မိနစ်",
                    mm: "%d မိနစ်",
                    h: "တစ်နာရီ",
                    hh: "%d နာရီ",
                    d: "တစ်ရက်",
                    dd: "%d ရက်",
                    M: "တစ်လ",
                    MM: "%d လ",
                    y: "တစ်နှစ်",
                    yy: "%d နှစ်"
                },
                preparse: function(e) {
                    return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "søn_man_tirs_ons_tors_fre_lør".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "H.mm",
                    LTS: "LT.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] LT",
                    LLLL: "dddd D. MMMM YYYY [kl.] LT"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "for %s siden",
                    s: "noen sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "ett år",
                    yy: "%d år"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                n = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
            return e.defineLocale("ne", {
                months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                weekdaysMin: "आइ._सो._मङ्_बु._बि._शु._श.".split("_"),
                longDateFormat: {
                    LT: "Aको h:mm बजे",
                    LTS: "Aको h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, LT",
                    LLLL: "dddd, D MMMM YYYY, LT"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "राती" === t ? 3 > e ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "बेलुका" === t || "साँझ" === t ? e + 12 : void 0
                },
                meridiem: function(e) {
                    return 3 > e ? "राती" : 10 > e ? "बिहान" : 15 > e ? "दिउँसो" : 18 > e ? "बेलुका" : 20 > e ? "साँझ" : "राती"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[भोली] LT",
                    nextWeek: "[आउँदो] dddd[,] LT",
                    lastDay: "[हिजो] LT",
                    lastWeek: "[गएको] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमा",
                    past: "%s अगाडी",
                    s: "केही समय",
                    m: "एक मिनेट",
                    mm: "%d मिनेट",
                    h: "एक घण्टा",
                    hh: "%d घण्टा",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महिना",
                    MM: "%d महिना",
                    y: "एक बर्ष",
                    yy: "%d बर्ष"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
            return e.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, i) {
                    return /-MMM-/.test(i) ? n[e.month()] : t[e.month()]
                },
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                ordinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
                weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I går klokka] LT",
                    lastWeek: "[Føregåande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "for %s sidan",
                    s: "nokre sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    M: "ein månad",
                    MM: "%d månader",
                    y: "eit år",
                    yy: "%d år"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e) {
                return 5 > e % 10 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
            }

            function n(e, n, i) {
                var a = e + " ";
                switch (i) {
                    case "m":
                        return n ? "minuta" : "minutę";
                    case "mm":
                        return a + (t(e) ? "minuty" : "minut");
                    case "h":
                        return n ? "godzina" : "godzinę";
                    case "hh":
                        return a + (t(e) ? "godziny" : "godzin");
                    case "MM":
                        return a + (t(e) ? "miesiące" : "miesięcy");
                    case "yy":
                        return a + (t(e) ? "lata" : "lat")
                }
            }
            var i = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
            return e.defineLocale("pl", {
                months: function(e, t) {
                    return /D MMMM/.test(t) ? a[e.month()] : i[e.month()]
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
                weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Dziś o] LT",
                    nextDay: "[Jutro o] LT",
                    nextWeek: "[W] dddd [o] LT",
                    lastDay: "[Wczoraj o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[W zeszłą niedzielę o] LT";
                            case 3:
                                return "[W zeszłą środę o] LT";
                            case 6:
                                return "[W zeszłą sobotę o] LT";
                            default:
                                return "[W zeszły] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "1 dzień",
                    dd: "%d dni",
                    M: "miesiąc",
                    MM: n,
                    y: "rok",
                    yy: n
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("pt-br", {
                months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
                weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
                weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [às] LT",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] LT"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "%s atrás",
                    s: "segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº"
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("pt", {
                months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
                weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
                weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY LT",
                    LLLL: "dddd, D [de] MMMM [de] YYYY LT"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t, n) {
                var i = {
                        mm: "minute",
                        hh: "ore",
                        dd: "zile",
                        MM: "luni",
                        yy: "ani"
                    },
                    a = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (a = " de "), e + a + i[n]
            }
            return e.defineLocale("ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mâine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s în urmă",
                    s: "câteva secunde",
                    m: "un minut",
                    mm: t,
                    h: "o oră",
                    hh: t,
                    d: "o zi",
                    dd: t,
                    M: "o lună",
                    MM: t,
                    y: "un an",
                    yy: t
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, i) {
                var a = {
                    mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                };
                return "m" === i ? n ? "минута" : "минуту" : e + " " + t(a[i], +e)
            }

            function i(e, t) {
                var n = {
                        nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                        accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
                    },
                    i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                return n[i][e.month()]
            }

            function a(e, t) {
                var n = {
                        nominative: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                        accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
                    },
                    i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                return n[i][e.month()]
            }

            function r(e, t) {
                var n = {
                        nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                        accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
                    },
                    i = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
                return n[i][e.day()]
            }
            return e.defineLocale("ru", {
                months: i,
                monthsShort: a,
                weekdays: r,
                weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., LT",
                    LLLL: "dddd, D MMMM YYYY г., LT"
                },
                calendar: {
                    sameDay: "[Сегодня в] LT",
                    nextDay: "[Завтра в] LT",
                    lastDay: "[Вчера в] LT",
                    nextWeek: function() {
                        return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
                    },
                    lastWeek: function(e) {
                        if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В прошлое] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В прошлый] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В прошлую] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    m: n,
                    mm: n,
                    h: "час",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function(e) {
                    return /^(дня|вечера)$/.test(e)
                },
                meridiem: function(e) {
                    return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера"
                },
                ordinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        case "w":
                        case "W":
                            return e + "-я";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e) {
                return e > 1 && 5 > e
            }

            function n(e, n, i, a) {
                var r = e + " ";
                switch (i) {
                    case "s":
                        return n || a ? "pár sekúnd" : "pár sekundami";
                    case "m":
                        return n ? "minúta" : a ? "minútu" : "minútou";
                    case "mm":
                        return n || a ? r + (t(e) ? "minúty" : "minút") : r + "minútami";
                    case "h":
                        return n ? "hodina" : a ? "hodinu" : "hodinou";
                    case "hh":
                        return n || a ? r + (t(e) ? "hodiny" : "hodín") : r + "hodinami";
                    case "d":
                        return n || a ? "deň" : "dňom";
                    case "dd":
                        return n || a ? r + (t(e) ? "dni" : "dní") : r + "dňami";
                    case "M":
                        return n || a ? "mesiac" : "mesiacom";
                    case "MM":
                        return n || a ? r + (t(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
                    case "y":
                        return n || a ? "rok" : "rokom";
                    case "yy":
                        return n || a ? r + (t(e) ? "roky" : "rokov") : r + "rokmi"
                }
            }
            var i = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
                a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
            return e.defineLocale("sk", {
                months: i,
                monthsShort: a,
                monthsParse: function(e, t) {
                    var n, i = [];
                    for (n = 0; 12 > n; n++) i[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                    return i
                }(i, a),
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY LT",
                    LLLL: "dddd D. MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[dnes o] LT",
                    nextDay: "[zajtra o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [o] LT";
                            case 3:
                                return "[v stredu o] LT";
                            case 4:
                                return "[vo štvrtok o] LT";
                            case 5:
                                return "[v piatok o] LT";
                            case 6:
                                return "[v sobotu o] LT"
                        }
                    },
                    lastDay: "[včera o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulú nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[minulý] dddd [o] LT";
                            case 3:
                                return "[minulú stredu o] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [o] LT";
                            case 6:
                                return "[minulú sobotu o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t, n) {
                var i = e + " ";
                switch (n) {
                    case "m":
                        return t ? "ena minuta" : "eno minuto";
                    case "mm":
                        return i += 1 === e ? "minuta" : 2 === e ? "minuti" : 3 === e || 4 === e ? "minute" : "minut";
                    case "h":
                        return t ? "ena ura" : "eno uro";
                    case "hh":
                        return i += 1 === e ? "ura" : 2 === e ? "uri" : 3 === e || 4 === e ? "ure" : "ur";
                    case "dd":
                        return i += 1 === e ? "dan" : "dni";
                    case "MM":
                        return i += 1 === e ? "mesec" : 2 === e ? "meseca" : 3 === e || 4 === e ? "mesece" : "mesecev";
                    case "yy":
                        return i += 1 === e ? "leto" : 2 === e ? "leti" : 3 === e || 4 === e ? "leta" : "let"
                }
            }
            return e.defineLocale("sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY LT",
                    LLLL: "dddd, D. MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[danes ob] LT",
                    nextDay: "[jutri ob] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay: "[včeraj ob] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[prejšnja] dddd [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejšnji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "čez %s",
                    past: "%s nazaj",
                    s: "nekaj sekund",
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "en dan",
                    dd: t,
                    M: "en mesec",
                    MM: t,
                    y: "eno leto",
                    yy: t
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                meridiemParse: /PD|MD/,
                isPM: function(e) {
                    return "M" === e.charAt(0)
                },
                meridiem: function(e) {
                    return 12 > e ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Sot në] LT",
                    nextDay: "[Nesër në] LT",
                    nextWeek: "dddd [në] LT",
                    lastDay: "[Dje në] LT",
                    lastWeek: "dddd [e kaluar në] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "në %s",
                    past: "%s më parë",
                    s: "disa sekonda",
                    m: "një minutë",
                    mm: "%d minuta",
                    h: "një orë",
                    hh: "%d orë",
                    d: "një ditë",
                    dd: "%d ditë",
                    M: "një muaj",
                    MM: "%d muaj",
                    y: "një vit",
                    yy: "%d vite"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                words: {
                    m: ["један минут", "једне минуте"],
                    mm: ["минут", "минуте", "минута"],
                    h: ["један сат", "једног сата"],
                    hh: ["сат", "сата", "сати"],
                    dd: ["дан", "дана", "дана"],
                    MM: ["месец", "месеца", "месеци"],
                    yy: ["година", "године", "година"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
                },
                translate: function(e, n, i) {
                    var a = t.words[i];
                    return 1 === i.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
                }
            };
            return e.defineLocale("sr-cyrl", {
                months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
                monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
                weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
                weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
                weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY LT",
                    LLLL: "dddd, D. MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[данас у] LT",
                    nextDay: "[сутра у] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[у] [недељу] [у] LT";
                            case 3:
                                return "[у] [среду] [у] LT";
                            case 6:
                                return "[у] [суботу] [у] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[у] dddd [у] LT"
                        }
                    },
                    lastDay: "[јуче у] LT",
                    lastWeek: function() {
                        var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                        return e[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пре %s",
                    s: "неколико секунди",
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "дан",
                    dd: t.translate,
                    M: "месец",
                    MM: t.translate,
                    y: "годину",
                    yy: t.translate
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                words: {
                    m: ["jedan minut", "jedne minute"],
                    mm: ["minut", "minute", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mesec", "meseca", "meseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
                },
                translate: function(e, n, i) {
                    var a = t.words[i];
                    return 1 === i.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
                }
            };
            return e.defineLocale("sr", {
                months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
                monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
                weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
                weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
                weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "LT:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY LT",
                    LLLL: "dddd, D. MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedelju] [u] LT";
                            case 3:
                                return "[u] [sredu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                        return e[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "dan",
                    dd: t.translate,
                    M: "mesec",
                    MM: t.translate,
                    y: "godinu",
                    yy: t.translate
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[Igår] LT",
                    nextWeek: "dddd LT",
                    lastWeek: "[Förra] dddd[en] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "för %s sedan",
                    s: "några sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en månad",
                    MM: "%d månader",
                    y: "ett år",
                    yy: "%d år"
                },
                ordinalParse: /\d{1,2}(e|a)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("ta", {
                months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, LT",
                    LLLL: "dddd, D MMMM YYYY, LT"
                },
                calendar: {
                    sameDay: "[இன்று] LT",
                    nextDay: "[நாளை] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[நேற்று] LT",
                    lastWeek: "[கடந்த வாரம்] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s இல்",
                    past: "%s முன்",
                    s: "ஒரு சில விநாடிகள்",
                    m: "ஒரு நிமிடம்",
                    mm: "%d நிமிடங்கள்",
                    h: "ஒரு மணி நேரம்",
                    hh: "%d மணி நேரம்",
                    d: "ஒரு நாள்",
                    dd: "%d நாட்கள்",
                    M: "ஒரு மாதம்",
                    MM: "%d மாதங்கள்",
                    y: "ஒரு வருடம்",
                    yy: "%d ஆண்டுகள்"
                },
                ordinalParse: /\d{1,2}வது/,
                ordinal: function(e) {
                    return e + "வது"
                },
                meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                meridiem: function(e) {
                    return 2 > e ? " யாமம்" : 6 > e ? " வைகறை" : 10 > e ? " காலை" : 14 > e ? " நண்பகல்" : 18 > e ? " எற்பாடு" : 22 > e ? " மாலை" : " யாமம்"
                },
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "யாமம்" === t ? 2 > e ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                longDateFormat: {
                    LT: "H นาฬิกา m นาที",
                    LTS: "LT s วินาที",
                    L: "YYYY/MM/DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา LT",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา LT"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function(e) {
                    return "หลังเที่ยง" === e
                },
                meridiem: function(e) {
                    return 12 > e ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("tl-ph", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY LT",
                    LLLL: "dddd, MMMM DD, YYYY LT"
                },
                calendar: {
                    sameDay: "[Ngayon sa] LT",
                    nextDay: "[Bukas sa] LT",
                    nextWeek: "dddd [sa] LT",
                    lastDay: "[Kahapon sa] LT",
                    lastWeek: "dddd [huling linggo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                ordinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            var t = {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            };
            return e.defineLocale("tr", {
                months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd, D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[yarın saat] LT",
                    nextWeek: "[haftaya] dddd [saat] LT",
                    lastDay: "[dün] LT",
                    lastWeek: "[geçen hafta] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s önce",
                    s: "birkaç saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yıl",
                    yy: "%d yıl"
                },
                ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
                ordinal: function(e) {
                    if (0 === e) return e + "'ıncı";
                    var n = e % 10,
                        i = e % 100 - n,
                        a = e >= 100 ? 100 : null;
                    return e + (t[n] || t[i] || t[a])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("tzm-latn", {
                months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[asdkh g] LT",
                    nextDay: "[aska g] LT",
                    nextWeek: "dddd [g] LT",
                    lastDay: "[assant g] LT",
                    lastWeek: "dddd [g] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dadkh s yan %s",
                    past: "yan %s",
                    s: "imik",
                    m: "minuḍ",
                    mm: "%d minuḍ",
                    h: "saɛa",
                    hh: "%d tassaɛin",
                    d: "ass",
                    dd: "%d ossan",
                    M: "ayowr",
                    MM: "%d iyyirn",
                    y: "asgas",
                    yy: "%d isgasn"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("tzm", {
                months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "dddd D MMMM YYYY LT"
                },
                calendar: {
                    sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                    nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                    nextWeek: "dddd [ⴴ] LT",
                    lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                    lastWeek: "dddd [ⴴ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                    past: "ⵢⴰⵏ %s",
                    s: "ⵉⵎⵉⴽ",
                    m: "ⵎⵉⵏⵓⴺ",
                    mm: "%d ⵎⵉⵏⵓⴺ",
                    h: "ⵙⴰⵄⴰ",
                    hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                    d: "ⴰⵙⵙ",
                    dd: "%d oⵙⵙⴰⵏ",
                    M: "ⴰⵢoⵓⵔ",
                    MM: "%d ⵉⵢⵢⵉⵔⵏ",
                    y: "ⴰⵙⴳⴰⵙ",
                    yy: "%d ⵉⵙⴳⴰⵙⵏ"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            function t(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, i) {
                var a = {
                    mm: "хвилина_хвилини_хвилин",
                    hh: "година_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                };
                return "m" === i ? n ? "хвилина" : "хвилину" : "h" === i ? n ? "година" : "годину" : e + " " + t(a[i], +e)
            }

            function i(e, t) {
                var n = {
                        nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),
                        accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")
                    },
                    i = /D[oD]? *MMMM?/.test(t) ? "accusative" : "nominative";
                return n[i][e.month()]
            }

            function a(e, t) {
                var n = {
                        nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                        accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                        genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                    },
                    i = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
                return n[i][e.day()]
            }

            function r(e) {
                return function() {
                    return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                }
            }
            return e.defineLocale("uk", {
                months: i,
                monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays: a,
                weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY р.",
                    LLL: "D MMMM YYYY р., LT",
                    LLLL: "dddd, D MMMM YYYY р., LT"
                },
                calendar: {
                    sameDay: r("[Сьогодні "),
                    nextDay: r("[Завтра "),
                    lastDay: r("[Вчора "),
                    nextWeek: r("[У] dddd ["),
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return r("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return r("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "%s тому",
                    s: "декілька секунд",
                    m: n,
                    mm: n,
                    h: "годину",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "місяць",
                    MM: n,
                    y: "рік",
                    yy: n
                },
                meridiemParse: /ночі|ранку|дня|вечора/,
                isPM: function(e) {
                    return /^(дня|вечора)$/.test(e)
                },
                meridiem: function(e) {
                    return 4 > e ? "ночі" : 12 > e ? "ранку" : 17 > e ? "дня" : "вечора"
                },
                ordinalParse: /\d{1,2}-(й|го)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("uz", {
                months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY LT",
                    LLLL: "D MMMM YYYY, dddd LT"
                },
                calendar: {
                    sameDay: "[Бугун соат] LT [да]",
                    nextDay: "[Эртага] LT [да]",
                    nextWeek: "dddd [куни соат] LT [да]",
                    lastDay: "[Кеча соат] LT [да]",
                    lastWeek: "[Утган] dddd [куни соат] LT [да]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Якин %s ичида",
                    past: "Бир неча %s олдин",
                    s: "фурсат",
                    m: "бир дакика",
                    mm: "%d дакика",
                    h: "бир соат",
                    hh: "%d соат",
                    d: "бир кун",
                    dd: "%d кун",
                    M: "бир ой",
                    MM: "%d ой",
                    y: "бир йил",
                    yy: "%d йил"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("vi", {
                months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "LT:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY LT",
                    LLLL: "dddd, D MMMM [năm] YYYY LT",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY LT",
                    llll: "ddd, D MMM YYYY LT"
                },
                calendar: {
                    sameDay: "[Hôm nay lúc] LT",
                    nextDay: "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay: "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần rồi lúc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "vài giây",
                    m: "một phút",
                    mm: "%d phút",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ngày",
                    dd: "%d ngày",
                    M: "một tháng",
                    MM: "%d tháng",
                    y: "một năm",
                    yy: "%d năm"
                },
                ordinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "Ah点mm",
                    LTS: "Ah点m分s秒",
                    L: "YYYY-MM-DD",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日LT",
                    LLLL: "YYYY年MMMD日ddddLT",
                    l: "YYYY-MM-DD",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日LT",
                    llll: "YYYY年MMMD日ddddLT"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function(e, t) {
                    var n = 100 * e + t;
                    return 600 > n ? "凌晨" : 900 > n ? "早上" : 1130 > n ? "上午" : 1230 > n ? "中午" : 1800 > n ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: function() {
                        return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                    },
                    nextDay: function() {
                        return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                    },
                    lastDay: function() {
                        return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                    },
                    nextWeek: function() {
                        var t, n;
                        return t = e().startOf("week"), n = this.unix() - t.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                    },
                    lastWeek: function() {
                        var t, n;
                        return t = e().startOf("week"), n = this.unix() < t.unix() ? "[上]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                    },
                    sameElse: "LL"
                },
                ordinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "周";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s内",
                    past: "%s前",
                    s: "几秒",
                    m: "1分钟",
                    mm: "%d分钟",
                    h: "1小时",
                    hh: "%d小时",
                    d: "1天",
                    dd: "%d天",
                    M: "1个月",
                    MM: "%d个月",
                    y: "1年",
                    yy: "%d年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }),
        function(e) {
            e(Lt)
        }(function(e) {
            return e.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "Ah點mm",
                    LTS: "Ah點m分s秒",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日LT",
                    LLLL: "YYYY年MMMD日ddddLT",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日LT",
                    llll: "YYYY年MMMD日ddddLT"
                },
                meridiemParse: /早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t) {
                    var n = 100 * e + t;
                    return 900 > n ? "早上" : 1130 > n ? "上午" : 1230 > n ? "中午" : 1800 > n ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                ordinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    m: "一分鐘",
                    mm: "%d分鐘",
                    h: "一小時",
                    hh: "%d小時",
                    d: "一天",
                    dd: "%d天",
                    M: "一個月",
                    MM: "%d個月",
                    y: "一年",
                    yy: "%d年"
                }
            })
        }), Lt.locale("en"), Wt ? module.exports = Lt : "function" == typeof define && define.amd ? (define(function(e, t, n) {
            return n.config && n.config() && n.config().noGlobal === !0 && (Yt.moment = bt), Lt
        }), Mt(!0)) : Mt()
}.call(this),
    function(e) {
        "use strict";
        if ("function" == typeof define && define.amd) define(["jquery", "moment"], e);
        else if ("object" == typeof exports) e(require("jquery"), require("moment"));
        else {
            if (!jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
            if (!moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
            e(jQuery, moment)
        }
    }(function(e, t) {
        "use strict";
        if (!t) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
        var n = function(n, i) {
            var a, r, s, o, l, u = {},
                d = t(),
                c = d.clone(),
                h = !0,
                f = !1,
                p = !1,
                m = 0,
                _ = [{
                    clsName: "days",
                    navFnc: "M",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "y",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "y",
                    navStep: 10
                }],
                g = ["days", "months", "years"],
                y = ["top", "bottom", "auto"],
                v = ["left", "right", "auto"],
                M = ["default", "top", "bottom"],
                L = function(e) {
                    if ("string" != typeof e || e.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
                    switch (e) {
                        case "y":
                            return -1 !== s.indexOf("Y");
                        case "M":
                            return -1 !== s.indexOf("M");
                        case "d":
                            return -1 !== s.toLowerCase().indexOf("d");
                        case "h":
                        case "H":
                            return -1 !== s.toLowerCase().indexOf("h");
                        case "m":
                            return -1 !== s.indexOf("m");
                        case "s":
                            return -1 !== s.indexOf("s");
                        default:
                            return !1
                    }
                },
                b = function() {
                    return L("h") || L("m") || L("s")
                },
                w = function() {
                    return L("y") || L("M") || L("d")
                },
                T = function() {
                    var t = e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action", "previous").append(e("<span>").addClass(i.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", i.calendarWeeks ? "6" : "5")).append(e("<th>").addClass("next").attr("data-action", "next").append(e("<span>").addClass(i.icons.next)))),
                        n = e("<tbody>").append(e("<tr>").append(e("<td>").attr("colspan", i.calendarWeeks ? "8" : "7")));
                    return [e("<div>").addClass("datepicker-days").append(e("<table>").addClass("table-condensed").append(t).append(e("<tbody>"))), e("<div>").addClass("datepicker-months").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())), e("<div>").addClass("datepicker-years").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone()))]
                },
                Y = function() {
                    var t = e("<tr>"),
                        n = e("<tr>"),
                        a = e("<tr>");
                    return L("h") && (t.append(e("<td>").append(e("<a>").attr("href", "#").addClass("btn").attr("data-action", "incrementHours").append(e("<span>").addClass(i.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-hour").attr("data-time-component", "hours").attr("data-action", "showHours"))), a.append(e("<td>").append(e("<a>").attr("href", "#").addClass("btn").attr("data-action", "decrementHours").append(e("<span>").addClass(i.icons.down))))), L("m") && (L("h") && (t.append(e("<td>").addClass("separator")), n.append(e("<td>").addClass("separator").html(":")), a.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr("href", "#").addClass("btn").attr("data-action", "incrementMinutes").append(e("<span>").addClass(i.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-minute").attr("data-time-component", "minutes").attr("data-action", "showMinutes"))), a.append(e("<td>").append(e("<a>").attr("href", "#").addClass("btn").attr("data-action", "decrementMinutes").append(e("<span>").addClass(i.icons.down))))), L("s") && (L("m") && (t.append(e("<td>").addClass("separator")), n.append(e("<td>").addClass("separator").html(":")), a.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr("href", "#").addClass("btn").attr("data-action", "incrementSeconds").append(e("<span>").addClass(i.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-second").attr("data-time-component", "seconds").attr("data-action", "showSeconds"))), a.append(e("<td>").append(e("<a>").attr("href", "#").addClass("btn").attr("data-action", "decrementSeconds").append(e("<span>").addClass(i.icons.down))))), r || (t.append(e("<td>").addClass("separator")), n.append(e("<td>").append(e("<button>").addClass("btn btn-primary").attr("data-action", "togglePeriod"))), a.append(e("<td>").addClass("separator"))), e("<div>").addClass("timepicker-picker").append(e("<table>").addClass("table-condensed").append([t, n, a]))
                },
                k = function() {
                    var t = e("<div>").addClass("timepicker-hours").append(e("<table>").addClass("table-condensed")),
                        n = e("<div>").addClass("timepicker-minutes").append(e("<table>").addClass("table-condensed")),
                        i = e("<div>").addClass("timepicker-seconds").append(e("<table>").addClass("table-condensed")),
                        a = [Y()];
                    return L("h") && a.push(t), L("m") && a.push(n), L("s") && a.push(i), a
                },
                D = function() {
                    var t = [];
                    return i.showTodayButton && t.push(e("<td>").append(e("<a>").attr("data-action", "today").append(e("<span>").addClass(i.icons.today)))), !i.sideBySide && w() && b() && t.push(e("<td>").append(e("<a>").attr("data-action", "togglePicker").append(e("<span>").addClass(i.icons.time)))), i.showClear && t.push(e("<td>").append(e("<a>").attr("data-action", "clear").append(e("<span>").addClass(i.icons.clear)))), e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(t)))
                },
                x = function() {
                    var t = e("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                        n = e("<div>").addClass("datepicker").append(T()),
                        a = e("<div>").addClass("timepicker").append(k()),
                        s = e("<ul>").addClass("list-unstyled"),
                        o = e("<li>").addClass("picker-switch" + (i.collapse ? " accordion-toggle" : "")).append(D());
                    return r && t.addClass("usetwentyfour"), i.sideBySide && w() && b() ? (t.addClass("timepicker-sbs"), t.append(e("<div>").addClass("row").append(n.addClass("col-sm-6")).append(a.addClass("col-sm-6"))), t.append(o), t) : ("top" === i.toolbarPlacement && s.append(o), w() && s.append(e("<li>").addClass(i.collapse && b() ? "collapse in" : "").append(n)), "default" === i.toolbarPlacement && s.append(o), b() && s.append(e("<li>").addClass(i.collapse && w() ? "collapse" : "").append(a)), "bottom" === i.toolbarPlacement && s.append(o), t.append(s))
                },
                S = function() {
                    var t = n.data(),
                        a = {};
                    return t.dateOptions && t.dateOptions instanceof Object && (a = e.extend(!0, a, t.dateOptions)), e.each(i, function(e) {
                        var n = "date" + e.charAt(0).toUpperCase() + e.slice(1);
                        void 0 !== t[n] && (a[e] = t[n])
                    }), a
                },
                C = function() {
                    var t, a = (f || n).position(),
                        r = i.widgetPositioning.vertical,
                        s = i.widgetPositioning.horizontal;
                    if (i.widgetParent ? t = i.widgetParent.append(p) : n.is("input") ? t = n.parent().append(p) : (t = n, n.children().first().after(p)), "auto" === r && (r = (f || n).offset().top + p.height() > e(window).height() + e(window).scrollTop() && p.height() + n.outerHeight() < (f || n).offset().top ? "top" : "bottom"), "auto" === s && (s = t.width() < a.left + p.outerWidth() ? "right" : "left"), "top" === r ? p.addClass("top").removeClass("bottom") : p.addClass("bottom").removeClass("top"), "right" === s ? p.addClass("pull-right") : p.removeClass("pull-right"), "relative" !== t.css("position") && (t = t.parents().filter(function() {
                            return "relative" === e(this).css("position")
                        }).first()), 0 === t.length) throw new Error("datetimepicker component should be placed within a relative positioned container");
                    p.css({
                        top: "top" === r ? "auto" : a.top + n.outerHeight(),
                        bottom: "top" === r ? a.top + n.outerHeight() : "auto",
                        left: "left" === s ? t.css("padding-left") : "auto",
                        right: "left" === s ? "auto" : t.css("padding-right")
                    })
                },
                j = function(e) {
                    "dp.change" === e.type && (e.date && e.date.isSame(e.oldDate) || !e.date && !e.oldDate) || n.trigger(e)
                },
                P = function(e) {
                    p && (e && (l = Math.max(m, Math.min(2, l + e))), p.find(".datepicker > div").hide().filter(".datepicker-" + _[l].clsName).show())
                },
                E = function() {
                    var t = e("<tr>"),
                        n = c.clone().startOf("w");
                    for (i.calendarWeeks === !0 && t.append(e("<th>").addClass("cw").text("#")); n.isBefore(c.clone().endOf("w"));) t.append(e("<th>").addClass("dow").text(n.format("dd"))), n.add(1, "d");
                    p.find(".datepicker-days thead").append(t)
                },
                A = function(e) {
                    return i.disabledDates ? i.disabledDates[e.format("YYYY-MM-DD")] === !0 : !1
                },
                F = function(e) {
                    return i.enabledDates ? i.enabledDates[e.format("YYYY-MM-DD")] === !0 : !1
                },
                O = function(e, t) {
                    return e.isValid() ? i.disabledDates && A(e) ? !1 : i.enabledDates && F(e) ? !0 : i.minDate && e.isBefore(i.minDate, t) ? !1 : i.maxDate && e.isAfter(i.maxDate, t) ? !1 : "d" === t && -1 !== i.daysOfWeekDisabled.indexOf(e.day()) ? !1 : !0 : !1
                },
                W = function() {
                    for (var t = [], n = c.clone().startOf("y").hour(12); n.isSame(c, "y");) t.push(e("<span>").attr("data-action", "selectMonth").addClass("month").text(n.format("MMM"))), n.add(1, "M");
                    p.find(".datepicker-months td").empty().append(t)
                },
                H = function() {
                    var t = p.find(".datepicker-months"),
                        n = t.find("th"),
                        i = t.find("tbody").find("span");
                    t.find(".disabled").removeClass("disabled"), O(c.clone().subtract(1, "y"), "y") || n.eq(0).addClass("disabled"), n.eq(1).text(c.year()), O(c.clone().add(1, "y"), "y") || n.eq(2).addClass("disabled"), i.removeClass("active"), d.isSame(c, "y") && i.eq(d.month()).addClass("active"), i.each(function(t) {
                        O(c.clone().month(t), "M") || e(this).addClass("disabled")
                    })
                },
                $ = function() {
                    var e = p.find(".datepicker-years"),
                        t = e.find("th"),
                        n = c.clone().subtract(5, "y"),
                        a = c.clone().add(6, "y"),
                        r = "";
                    for (e.find(".disabled").removeClass("disabled"), i.minDate && i.minDate.isAfter(n, "y") && t.eq(0).addClass("disabled"), t.eq(1).text(n.year() + "-" + a.year()), i.maxDate && i.maxDate.isBefore(a, "y") && t.eq(2).addClass("disabled"); !n.isAfter(a, "y");) r += '<span data-action="selectYear" class="year' + (n.isSame(d, "y") ? " active" : "") + (O(n, "y") ? "" : " disabled") + '">' + n.year() + "</span>", n.add(1, "y");
                    e.find("td").html(r)
                },
                N = function() {
                    var n, a, r, s = p.find(".datepicker-days"),
                        o = s.find("th"),
                        l = [];
                    if (w()) {
                        for (s.find(".disabled").removeClass("disabled"), o.eq(1).text(c.format(i.dayViewHeaderFormat)), O(c.clone().subtract(1, "M"), "M") || o.eq(0).addClass("disabled"), O(c.clone().add(1, "M"), "M") || o.eq(2).addClass("disabled"), n = c.clone().startOf("M").startOf("week"); !c.clone().endOf("M").endOf("w").isBefore(n, "d");) 0 === n.weekday() && (a = e("<tr>"), i.calendarWeeks && a.append('<td class="cw">' + n.week() + "</td>"), l.push(a)), r = "", n.isBefore(c, "M") && (r += " old"), n.isAfter(c, "M") && (r += " new"), n.isSame(d, "d") && !h && (r += " active"), O(n, "d") || (r += " disabled"), n.isSame(t(), "d") && (r += " today"), (0 === n.day() || 6 === n.day()) && (r += " weekend"), a.append('<td data-action="selectDay" class="day' + r + '">' + n.date() + "</td>"), n.add(1, "d");
                        s.find("tbody").empty().append(l), H(), $()
                    }
                },
                z = function() {
                    var t = p.find(".timepicker-hours table"),
                        n = c.clone().startOf("d"),
                        i = [],
                        a = e("<tr>");
                    for (c.hour() > 11 && !r && n.hour(12); n.isSame(c, "d") && (r || c.hour() < 12 && n.hour() < 12 || c.hour() > 11);) n.hour() % 4 === 0 && (a = e("<tr>"), i.push(a)), a.append('<td data-action="selectHour" class="hour' + (O(n, "h") ? "" : " disabled") + '">' + n.format(r ? "HH" : "hh") + "</td>"), n.add(1, "h");
                    t.empty().append(i)
                },
                I = function() {
                    for (var t = p.find(".timepicker-minutes table"), n = c.clone().startOf("h"), a = [], r = e("<tr>"), s = 1 === i.stepping ? 5 : i.stepping; c.isSame(n, "h");) n.minute() % (4 * s) === 0 && (r = e("<tr>"), a.push(r)), r.append('<td data-action="selectMinute" class="minute' + (O(n, "m") ? "" : " disabled") + '">' + n.format("mm") + "</td>"), n.add(s, "m");
                    t.empty().append(a)
                },
                R = function() {
                    for (var t = p.find(".timepicker-seconds table"), n = c.clone().startOf("m"), i = [], a = e("<tr>"); c.isSame(n, "m");) n.second() % 20 === 0 && (a = e("<tr>"), i.push(a)), a.append('<td data-action="selectSecond" class="second' + (O(n, "s") ? "" : " disabled") + '">' + n.format("ss") + "</td>"), n.add(5, "s");
                    t.empty().append(i)
                },
                B = function() {
                    var e = p.find(".timepicker span[data-time-component]");
                    r || p.find(".timepicker [data-action=togglePeriod]").text(d.format("A")), e.filter("[data-time-component=hours]").text(d.format(r ? "HH" : "hh")), e.filter("[data-time-component=minutes]").text(d.format("mm")), e.filter("[data-time-component=seconds]").text(d.format("ss")), z(), I(), R()
                },
                q = function() {
                    p && (N(), B())
                },
                U = function(e) {
                    var t = h ? null : d;
                    return e ? (e = e.clone().locale(i.locale), 1 !== i.stepping && e.minutes(Math.round(e.minutes() / i.stepping) * i.stepping % 60).seconds(0), void(O(e) ? (d = e, c = d.clone(), a.val(d.format(s)), n.data("date", d.format(s)), q(), h = !1, j({
                        type: "dp.change",
                        date: d.clone(),
                        oldDate: t
                    })) : (a.val(h ? "" : d.format(s)), j({
                        type: "dp.error",
                        date: e
                    })))) : (h = !0, a.val(""), n.data("date", ""), j({
                        type: "dp.change",
                        date: null,
                        oldDate: t
                    }), void q())
                },
                V = function() {
                    var t = !1;
                    return p ? (p.find(".collapse").each(function() {
                        var n = e(this).data("collapse");
                        return n && n.transitioning ? (t = !0, !1) : void 0
                    }), t ? u : (f && f.hasClass("btn") && f.toggleClass("active"), p.hide(), e(window).off("resize", C), p.off("click", "[data-action]"), p.off("mousedown", !1), p.remove(), p = !1, j({
                        type: "dp.hide",
                        date: d.clone()
                    }), u)) : u
                },
                G = {
                    next: function() {
                        c.add(_[l].navStep, _[l].navFnc), N()
                    },
                    previous: function() {
                        c.subtract(_[l].navStep, _[l].navFnc), N()
                    },
                    pickerSwitch: function() {
                        P(1)
                    },
                    selectMonth: function(t) {
                        var n = e(t.target).closest("tbody").find("span").index(e(t.target));
                        c.month(n), l === m && (U(d.clone().year(c.year()).month(c.month())), V()), P(-1), N()
                    },
                    selectYear: function(t) {
                        var n = parseInt(e(t.target).text(), 10) || 0;
                        c.year(n), l === m && (U(d.clone().year(c.year())), V()), P(-1), N()
                    },
                    selectDay: function(t) {
                        var n = c.clone();
                        e(t.target).is(".old") && n.subtract(1, "M"), e(t.target).is(".new") && n.add(1, "M"), U(n.date(parseInt(e(t.target).text(), 10))), b() || i.keepOpen || V()
                    },
                    incrementHours: function() {
                        U(d.clone().add(1, "h"))
                    },
                    incrementMinutes: function() {
                        U(d.clone().add(i.stepping, "m"))
                    },
                    incrementSeconds: function() {
                        U(d.clone().add(1, "s"))
                    },
                    decrementHours: function() {
                        U(d.clone().subtract(1, "h"))
                    },
                    decrementMinutes: function() {
                        U(d.clone().subtract(i.stepping, "m"))
                    },
                    decrementSeconds: function() {
                        U(d.clone().subtract(1, "s"))
                    },
                    togglePeriod: function() {
                        U(d.clone().add(d.hours() >= 12 ? -12 : 12, "h"))
                    },
                    togglePicker: function(t) {
                        var n, a = e(t.target),
                            r = a.closest("ul"),
                            s = r.find(".in"),
                            o = r.find(".collapse:not(.in)");
                        if (s && s.length) {
                            if (n = s.data("collapse"), n && n.transitioning) return;
                            s.collapse("hide"), o.collapse("show"), a.is("span") ? a.toggleClass(i.icons.time + " " + i.icons.date) : a.find("span").toggleClass(i.icons.time + " " + i.icons.date)
                        }
                    },
                    showPicker: function() {
                        p.find(".timepicker > div:not(.timepicker-picker)").hide(), p.find(".timepicker .timepicker-picker").show()
                    },
                    showHours: function() {
                        p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-hours").show()
                    },
                    showMinutes: function() {
                        p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-minutes").show()
                    },
                    showSeconds: function() {
                        p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-seconds").show()
                    },
                    selectHour: function(t) {
                        var n = parseInt(e(t.target).text(), 10);
                        r || (d.hours() >= 12 ? 12 !== n && (n += 12) : 12 === n && (n = 0)), U(d.clone().hours(n)), G.showPicker.call(u)
                    },
                    selectMinute: function(t) {
                        U(d.clone().minutes(parseInt(e(t.target).text(), 10))), G.showPicker.call(u)
                    },
                    selectSecond: function(t) {
                        U(d.clone().seconds(parseInt(e(t.target).text(), 10))), G.showPicker.call(u)
                    },
                    clear: function() {
                        U(null)
                    },
                    today: function() {
                        U(t())
                    }
                },
                J = function(t) {
                    return e(t.currentTarget).is(".disabled") ? !1 : (G[e(t.currentTarget).data("action")].apply(u, arguments), !1)
                },
                X = function() {
                    var n, r = {
                        year: function(e) {
                            return e.month(0).date(1).hours(0).seconds(0).minutes(0)
                        },
                        month: function(e) {
                            return e.date(1).hours(0).seconds(0).minutes(0)
                        },
                        day: function(e) {
                            return e.hours(0).seconds(0).minutes(0)
                        },
                        hour: function(e) {
                            return e.seconds(0).minutes(0)
                        },
                        minute: function(e) {
                            return e.seconds(0)
                        }
                    };
                    return a.prop("disabled") || a.prop("readonly") || p ? u : (i.useCurrent && h && (n = t(), "string" == typeof i.useCurrent && (n = r[i.useCurrent](n)), U(n)), p = x(), E(), W(), p.find(".timepicker-hours").hide(), p.find(".timepicker-minutes").hide(), p.find(".timepicker-seconds").hide(), q(), P(), e(window).on("resize", C), p.on("click", "[data-action]", J), p.on("mousedown", !1), f && f.hasClass("btn") && f.toggleClass("active"), p.show(), C(), a.is(":focus") || a.focus(), j({
                        type: "dp.show"
                    }), u)
                },
                Q = function() {
                    return p ? V() : X()
                },
                Z = function(e) {
                    return e = t.isMoment(e) || e instanceof Date ? t(e) : t(e, o, i.useStrict), e.locale(i.locale), e
                },
                K = function(e) {
                    27 === e.keyCode && V()
                },
                et = function(t) {
                    var n = e(t.target).val().trim(),
                        i = n ? Z(n) : null;
                    return U(i), t.stopImmediatePropagation(), !1
                },
                tt = function() {
                    a.on({
                        change: et,
                        blur: V,
                        keydown: K
                    }), n.is("input") ? a.on({
                        focus: X
                    }) : f && (f.on("click", Q), f.on("mousedown", !1))
                },
                nt = function() {
                    a.off({
                        change: et,
                        blur: V,
                        keydown: K
                    }), n.is("input") ? a.off({
                        focus: X
                    }) : f && (f.off("click", Q), f.off("mousedown", !1))
                },
                it = function(t) {
                    var n = {};
                    return e.each(t, function() {
                        var e = Z(this);
                        e.isValid() && (n[e.format("YYYY-MM-DD")] = !0)
                    }), Object.keys(n).length ? n : !1
                },
                at = function() {
                    var e = i.format || "L LT";
                    s = e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
                        return d.localeData().longDateFormat(e) || e
                    }), o = i.extraFormats ? i.extraFormats.slice() : [], o.indexOf(e) < 0 && o.indexOf(s) < 0 && o.push(s), r = s.toLowerCase().indexOf("a") < 1 && s.indexOf("h") < 1, L("y") && (m = 2), L("M") && (m = 1), L("d") && (m = 0), l = Math.max(m, l), h || U(d)
                };
            if (u.destroy = function() {
                    V(), nt(), n.removeData("DateTimePicker"), n.removeData("date")
                }, u.toggle = Q, u.show = X, u.hide = V, u.disable = function() {
                    return V(), f && f.hasClass("btn") && f.addClass("disabled"), a.prop("disabled", !0), u
                }, u.enable = function() {
                    return f && f.hasClass("btn") && f.removeClass("disabled"), a.prop("disabled", !1), u
                }, u.options = function(t) {
                    if (0 === arguments.length) return e.extend(!0, {}, i);
                    if (!(t instanceof Object)) throw new TypeError("options() options parameter should be an object");
                    return e.extend(!0, i, t), e.each(i, function(e, t) {
                        if (void 0 === u[e]) throw new TypeError("option " + e + " is not recognized!");
                        u[e](t)
                    }), u
                }, u.date = function(e) {
                    if (0 === arguments.length) return h ? null : d.clone();
                    if (!(null === e || "string" == typeof e || t.isMoment(e) || e instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
                    return U(null === e ? null : Z(e)), u
                }, u.format = function(e) {
                    if (0 === arguments.length) return i.format;
                    if ("string" != typeof e && ("boolean" != typeof e || e !== !1)) throw new TypeError("format() expects a sting or boolean:false parameter " + e);
                    return i.format = e, s && at(), u
                }, u.dayViewHeaderFormat = function(e) {
                    if (0 === arguments.length) return i.dayViewHeaderFormat;
                    if ("string" != typeof e) throw new TypeError("dayViewHeaderFormat() expects a string parameter");
                    return i.dayViewHeaderFormat = e, u
                }, u.extraFormats = function(e) {
                    if (0 === arguments.length) return i.extraFormats;
                    if (e !== !1 && !(e instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
                    return i.extraFormats = e, o && at(), u
                }, u.disabledDates = function(t) {
                    if (0 === arguments.length) return i.disabledDates ? e.extend({}, i.disabledDates) : i.disabledDates;
                    if (!t) return i.disabledDates = !1, q(), u;
                    if (!(t instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
                    return i.disabledDates = it(t), i.enabledDates = !1, q(), u
                }, u.enabledDates = function(t) {
                    if (0 === arguments.length) return i.enabledDates ? e.extend({}, i.enabledDates) : i.enabledDates;
                    if (!t) return i.enabledDates = !1, q(), u;
                    if (!(t instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
                    return i.enabledDates = it(t), i.disabledDates = !1, q(), u
                }, u.daysOfWeekDisabled = function(e) {
                    if (0 === arguments.length) return i.daysOfWeekDisabled.splice(0);
                    if (!(e instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
                    return i.daysOfWeekDisabled = e.reduce(function(e, t) {
                        return t = parseInt(t, 10), t > 6 || 0 > t || isNaN(t) ? e : (-1 === e.indexOf(t) && e.push(t), e)
                    }, []).sort(), q(), u
                }, u.maxDate = function(e) {
                    if (0 === arguments.length) return i.maxDate ? i.maxDate.clone() : i.maxDate;
                    if ("boolean" == typeof e && e === !1) return i.maxDate = !1, q(), u;
                    var t = Z(e);
                    if (!t.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + e);
                    if (i.minDate && t.isBefore(i.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + t.format(s));
                    return i.maxDate = t, i.maxDate.isBefore(e) && U(i.maxDate), q(), u
                }, u.minDate = function(e) {
                    if (0 === arguments.length) return i.minDate ? i.minDate.clone() : i.minDate;
                    if ("boolean" == typeof e && e === !1) return i.minDate = !1, q(), u;
                    var t = Z(e);
                    if (!t.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + e);
                    if (i.maxDate && t.isAfter(i.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + t.format(s));
                    return i.minDate = t, i.minDate.isAfter(e) && U(i.minDate), q(), u
                }, u.defaultDate = function(e) {
                    if (0 === arguments.length) return i.defaultDate ? i.defaultDate.clone() : i.defaultDate;
                    if (!e) return i.defaultDate = !1, u;
                    var t = Z(e);
                    if (!t.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + e);
                    if (!O(t)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
                    return i.defaultDate = t, i.defaultDate && "" === a.val().trim() && U(i.defaultDate), u
                }, u.locale = function(e) {
                    if (0 === arguments.length) return i.locale;
                    if (!t.localeData(e)) throw new TypeError("locale() locale " + e + " is not loaded from moment locales!");
                    return i.locale = e, d.locale(i.locale), c.locale(i.locale), s && at(), p && (V(), X()), u
                }, u.stepping = function(e) {
                    return 0 === arguments.length ? i.stepping : (e = parseInt(e, 10), (isNaN(e) || 1 > e) && (e = 1), i.stepping = e, u)
                }, u.useCurrent = function(e) {
                    var t = ["year", "month", "day", "hour", "minute"];
                    if (0 === arguments.length) return i.useCurrent;
                    if ("boolean" != typeof e && "string" != typeof e) throw new TypeError("useCurrent() expects a boolean or string parameter");
                    if ("string" == typeof e && -1 === t.indexOf(e.toLowerCase())) throw new TypeError("useCurrent() expects a string parameter of " + t.join(", "));
                    return i.useCurrent = e, u
                }, u.collapse = function(e) {
                    if (0 === arguments.length) return i.collapse;
                    if ("boolean" != typeof e) throw new TypeError("collapse() expects a boolean parameter");
                    return i.collapse === e ? u : (i.collapse = e, p && (V(), X()), u)
                }, u.icons = function(t) {
                    if (0 === arguments.length) return e.extend({}, i.icons);
                    if (!(t instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
                    return e.extend(i.icons, t), p && (V(), X()), u
                }, u.useStrict = function(e) {
                    if (0 === arguments.length) return i.useStrict;
                    if ("boolean" != typeof e) throw new TypeError("useStrict() expects a boolean parameter");
                    return i.useStrict = e, u
                }, u.sideBySide = function(e) {
                    if (0 === arguments.length) return i.sideBySide;
                    if ("boolean" != typeof e) throw new TypeError("sideBySide() expects a boolean parameter");
                    return i.sideBySide = e, p && (V(), X()), u
                }, u.viewMode = function(e) {
                    if (0 === arguments.length) return i.viewMode;
                    if ("string" != typeof e) throw new TypeError("viewMode() expects a string parameter");
                    if (-1 === g.indexOf(e)) throw new TypeError("viewMode() parameter must be one of (" + g.join(", ") + ") value");
                    return i.viewMode = e, l = Math.max(g.indexOf(e), m), P(), u
                }, u.toolbarPlacement = function(e) {
                    if (0 === arguments.length) return i.toolbarPlacement;
                    if ("string" != typeof e) throw new TypeError("toolbarPlacement() expects a string parameter");
                    if (-1 === M.indexOf(e)) throw new TypeError("toolbarPlacement() parameter must be one of (" + M.join(", ") + ") value");
                    return i.toolbarPlacement = e, p && (V(), X()), u
                }, u.widgetPositioning = function(t) {
                    if (0 === arguments.length) return e.extend({}, i.widgetPositioning);
                    if ("[object Object]" !== {}.toString.call(t)) throw new TypeError("widgetPositioning() expects an object variable");
                    if (t.horizontal) {
                        if ("string" != typeof t.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
                        if (t.horizontal = t.horizontal.toLowerCase(), -1 === v.indexOf(t.horizontal)) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + v.join(", ") + ")");
                        i.widgetPositioning.horizontal = t.horizontal
                    }
                    if (t.vertical) {
                        if ("string" != typeof t.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
                        if (t.vertical = t.vertical.toLowerCase(), -1 === y.indexOf(t.vertical)) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + y.join(", ") + ")");
                        i.widgetPositioning.vertical = t.vertical
                    }
                    return q(), u
                }, u.calendarWeeks = function(e) {
                    if (0 === arguments.length) return i.calendarWeeks;
                    if ("boolean" != typeof e) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
                    return i.calendarWeeks = e, q(), u
                }, u.showTodayButton = function(e) {
                    if (0 === arguments.length) return i.showTodayButton;
                    if ("boolean" != typeof e) throw new TypeError("showTodayButton() expects a boolean parameter");
                    return i.showTodayButton = e, p && (V(), X()), u
                }, u.showClear = function(e) {
                    if (0 === arguments.length) return i.showClear;
                    if ("boolean" != typeof e) throw new TypeError("showClear() expects a boolean parameter");
                    return i.showClear = e, p && (V(), X()), u
                }, u.widgetParent = function(t) {
                    if (0 === arguments.length) return i.widgetParent;
                    if ("string" == typeof t && (t = e(t)), null !== t && "string" != typeof t && !(t instanceof jQuery)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
                    return i.widgetParent = t, p && (V(), X()), u
                }, u.keepOpen = function(e) {
                    if (0 === arguments.length) return i.format;
                    if ("boolean" != typeof e) throw new TypeError("keepOpen() expects a boolean parameter");
                    return i.keepOpen = e, u
                }, n.is("input")) a = n;
            else if (a = n.find(".datepickerinput"), 0 === a.size()) a = n.find("input");
            else if (!a.is("input")) throw new Error('CSS class "datepickerinput" cannot be applied to non input element');
            if (n.hasClass("input-group") && (f = n.find(0 === n.find(".datepickerbutton").size() ? '[class^="input-group-"]' : ".datepickerbutton")), !a.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
            return e.extend(!0, i, S()), u.options(i), at(), tt(), a.prop("disabled") && u.disable(), 0 !== a.val().trim().length ? U(Z(a.val().trim())) : i.defaultDate && U(i.defaultDate), u
        };
        e.fn.datetimepicker = function(t) {
            return this.each(function() {
                var i = e(this);
                i.data("DateTimePicker") || (t = e.extend(!0, {}, e.fn.datetimepicker.defaults, t), i.data("DateTimePicker", n(i, t)))
            })
        }, e.fn.datetimepicker.defaults = {
            format: !1,
            dayViewHeaderFormat: "MMMM YYYY",
            extraFormats: !1,
            stepping: 1,
            minDate: !1,
            maxDate: !1,
            useCurrent: !0,
            collapse: !0,
            locale: t.locale(),
            defaultDate: !1,
            disabledDates: !1,
            enabledDates: !1,
            icons: {
                time: "glyphicon glyphicon-time",
                date: "glyphicon glyphicon-calendar",
                up: "glyphicon glyphicon-chevron-up",
                down: "glyphicon glyphicon-chevron-down",
                previous: "glyphicon glyphicon-chevron-left",
                next: "glyphicon glyphicon-chevron-right",
                today: "glyphicon glyphicon-screenshot",
                clear: "glyphicon glyphicon-trash"
            },
            useStrict: !1,
            sideBySide: !1,
            daysOfWeekDisabled: [],
            calendarWeeks: !1,
            viewMode: "days",
            toolbarPlacement: "default",
            showTodayButton: !1,
            showClear: !1,
            widgetPositioning: {
                horizontal: "auto",
                vertical: "auto"
            },
            widgetParent: null,
            keepOpen: !1
        }
    }),
    function() {
        function e(e, t, n) {
            for (var i = (n || 0) - 1, a = e ? e.length : 0; ++i < a;)
                if (e[i] === t) return i;
            return -1
        }

        function t(t, n) {
            var i = typeof n;
            if (t = t.cache, "boolean" == i || null == n) return t[n] ? 0 : -1;
            "number" != i && "string" != i && (i = "object");
            var a = "number" == i ? n : g + n;
            return t = (t = t[i]) && t[a], "object" == i ? t && e(t, n) > -1 ? 0 : -1 : t ? 0 : -1
        }

        function n(e) {
            var t = this.cache,
                n = typeof e;
            if ("boolean" == n || null == e) t[e] = !0;
            else {
                "number" != n && "string" != n && (n = "object");
                var i = "number" == n ? e : g + e,
                    a = t[n] || (t[n] = {});
                "object" == n ? (a[i] || (a[i] = [])).push(e) : a[i] = !0
            }
        }

        function i(e) {
            return e.charCodeAt(0)
        }

        function a(e, t) {
            for (var n = e.criteria, i = t.criteria, a = -1, r = n.length; ++a < r;) {
                var s = n[a],
                    o = i[a];
                if (s !== o) {
                    if (s > o || "undefined" == typeof s) return 1;
                    if (o > s || "undefined" == typeof o) return -1
                }
            }
            return e.index - t.index
        }

        function r(e) {
            var t = -1,
                i = e.length,
                a = e[0],
                r = e[i / 2 | 0],
                s = e[i - 1];
            if (a && "object" == typeof a && r && "object" == typeof r && s && "object" == typeof s) return !1;
            var o = l();
            o["false"] = o["null"] = o["true"] = o.undefined = !1;
            var u = l();
            for (u.array = e, u.cache = o, u.push = n; ++t < i;) u.push(e[t]);
            return u
        }

        function s(e) {
            return "\\" + V[e]
        }

        function o() {
            return p.pop() || []
        }

        function l() {
            return m.pop() || {
                array: null,
                cache: null,
                criteria: null,
                "false": !1,
                index: 0,
                "null": !1,
                number: null,
                object: null,
                push: null,
                string: null,
                "true": !1,
                undefined: !1,
                value: null
            }
        }

        function u(e) {
            e.length = 0, p.length < v && p.push(e)
        }

        function d(e) {
            var t = e.cache;
            t && d(t), e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null, m.length < v && m.push(e)
        }

        function c(e, t, n) {
            t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
            for (var i = -1, a = n - t || 0, r = Array(0 > a ? 0 : a); ++i < a;) r[i] = e[t + i];
            return r
        }

        function h(n) {
            function p(e) {
                return e && "object" == typeof e && !Zi(e) && Ai.call(e, "__wrapped__") ? e : new m(e)
            }

            function m(e, t) {
                this.__chain__ = !!t, this.__wrapped__ = e
            }

            function v(e) {
                function t() {
                    if (i) {
                        var e = c(i);
                        Fi.apply(e, arguments)
                    }
                    if (this instanceof t) {
                        var r = J(n.prototype),
                            s = n.apply(r, e || arguments);
                        return Ct(s) ? s : r
                    }
                    return n.apply(a, e || arguments)
                }
                var n = e[0],
                    i = e[2],
                    a = e[4];
                return Qi(t, e), t
            }

            function V(e, t, n, i, a) {
                if (n) {
                    var r = n(e);
                    if ("undefined" != typeof r) return r
                }
                var s = Ct(e);
                if (!s) return e;
                var l = Di.call(e);
                if (!R[l]) return e;
                var d = Ji[l];
                switch (l) {
                    case O:
                    case W:
                        return new d(+e);
                    case $:
                    case I:
                        return new d(e);
                    case z:
                        return r = d(e.source, Y.exec(e)), r.lastIndex = e.lastIndex, r
                }
                var h = Zi(e);
                if (t) {
                    var f = !i;
                    i || (i = o()), a || (a = o());
                    for (var p = i.length; p--;)
                        if (i[p] == e) return a[p];
                    r = h ? d(e.length) : {}
                } else r = h ? c(e) : ra({}, e);
                return h && (Ai.call(e, "index") && (r.index = e.index), Ai.call(e, "input") && (r.input = e.input)), t ? (i.push(e), a.push(r), (h ? Xt : la)(e, function(e, s) {
                    r[s] = V(e, t, n, i, a)
                }), f && (u(i), u(a)), r) : r
            }

            function J(e) {
                return Ct(e) ? Ni(e) : {}
            }

            function X(e, t, n) {
                if ("function" != typeof e) return Zn;
                if ("undefined" == typeof t || !("prototype" in e)) return e;
                var i = e.__bindData__;
                if ("undefined" == typeof i && (Xi.funcNames && (i = !e.name), i = i || !Xi.funcDecomp, !i)) {
                    var a = Pi.call(e);
                    Xi.funcNames || (i = !k.test(a)), i || (i = C.test(a), Qi(e, i))
                }
                if (i === !1 || i !== !0 && 1 & i[1]) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, i) {
                            return e.call(t, n, i)
                        };
                    case 3:
                        return function(n, i, a) {
                            return e.call(t, n, i, a)
                        };
                    case 4:
                        return function(n, i, a, r) {
                            return e.call(t, n, i, a, r)
                        }
                }
                return Fn(e, t)
            }

            function Q(e) {
                function t() {
                    var e = l ? s : this;
                    if (a) {
                        var p = c(a);
                        Fi.apply(p, arguments)
                    }
                    if ((r || d) && (p || (p = c(arguments)), r && Fi.apply(p, r), d && p.length < o)) return i |= 16, Q([n, h ? i : -4 & i, p, null, s, o]);
                    if (p || (p = arguments), u && (n = e[f]), this instanceof t) {
                        e = J(n.prototype);
                        var m = n.apply(e, p);
                        return Ct(m) ? m : e
                    }
                    return n.apply(e, p)
                }
                var n = e[0],
                    i = e[1],
                    a = e[2],
                    r = e[3],
                    s = e[4],
                    o = e[5],
                    l = 1 & i,
                    u = 2 & i,
                    d = 4 & i,
                    h = 8 & i,
                    f = n;
                return Qi(t, e), t
            }

            function Z(n, i) {
                var a = -1,
                    s = lt(),
                    o = n ? n.length : 0,
                    l = o >= y && s === e,
                    u = [];
                if (l) {
                    var c = r(i);
                    c ? (s = t, i = c) : l = !1
                }
                for (; ++a < o;) {
                    var h = n[a];
                    s(i, h) < 0 && u.push(h)
                }
                return l && d(i), u
            }

            function et(e, t, n, i) {
                for (var a = (i || 0) - 1, r = e ? e.length : 0, s = []; ++a < r;) {
                    var o = e[a];
                    if (o && "object" == typeof o && "number" == typeof o.length && (Zi(o) || ht(o))) {
                        t || (o = et(o, t, n));
                        var l = -1,
                            u = o.length,
                            d = s.length;
                        for (s.length += u; ++l < u;) s[d++] = o[l]
                    } else n || s.push(o)
                }
                return s
            }

            function tt(e, t, n, i, a, r) {
                if (n) {
                    var s = n(e, t);
                    if ("undefined" != typeof s) return !!s
                }
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                var l = typeof e,
                    d = typeof t;
                if (!(e !== e || e && U[l] || t && U[d])) return !1;
                if (null == e || null == t) return e === t;
                var c = Di.call(e),
                    h = Di.call(t);
                if (c == A && (c = N), h == A && (h = N), c != h) return !1;
                switch (c) {
                    case O:
                    case W:
                        return +e == +t;
                    case $:
                        return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                    case z:
                    case I:
                        return e == bi(t)
                }
                var f = c == F;
                if (!f) {
                    var p = Ai.call(e, "__wrapped__"),
                        m = Ai.call(t, "__wrapped__");
                    if (p || m) return tt(p ? e.__wrapped__ : e, m ? t.__wrapped__ : t, n, i, a, r);
                    if (c != N) return !1;
                    var _ = e.constructor,
                        g = t.constructor;
                    if (_ != g && !(St(_) && _ instanceof _ && St(g) && g instanceof g) && "constructor" in e && "constructor" in t) return !1
                }
                var y = !a;
                a || (a = o()), r || (r = o());
                for (var v = a.length; v--;)
                    if (a[v] == e) return r[v] == t;
                var M = 0;
                if (s = !0, a.push(e), r.push(t), f) {
                    if (v = e.length, M = t.length, s = M == v, s || i)
                        for (; M--;) {
                            var L = v,
                                b = t[M];
                            if (i)
                                for (; L-- && !(s = tt(e[L], b, n, i, a, r)););
                            else if (!(s = tt(e[M], b, n, i, a, r))) break
                        }
                } else oa(t, function(t, o, l) {
                    return Ai.call(l, o) ? (M++, s = Ai.call(e, o) && tt(e[o], t, n, i, a, r)) : void 0
                }), s && !i && oa(e, function(e, t, n) {
                    return Ai.call(n, t) ? s = --M > -1 : void 0
                });
                return a.pop(), r.pop(), y && (u(a), u(r)), s
            }

            function nt(e, t, n, i, a) {
                (Zi(t) ? Xt : la)(t, function(t, r) {
                    var s, o, l = t,
                        u = e[r];
                    if (t && ((o = Zi(t)) || ua(t))) {
                        for (var d = i.length; d--;)
                            if (s = i[d] == t) {
                                u = a[d];
                                break
                            }
                        if (!s) {
                            var c;
                            n && (l = n(u, t), (c = "undefined" != typeof l) && (u = l)), c || (u = o ? Zi(u) ? u : [] : ua(u) ? u : {}), i.push(t), a.push(u), c || nt(u, t, n, i, a)
                        }
                    } else n && (l = n(u, t), "undefined" == typeof l && (l = t)), "undefined" != typeof l && (u = l);
                    e[r] = u
                })
            }

            function it(e, t) {
                return e + ji(Gi() * (t - e + 1))
            }

            function at(n, i, a) {
                var s = -1,
                    l = lt(),
                    c = n ? n.length : 0,
                    h = [],
                    f = !i && c >= y && l === e,
                    p = a || f ? o() : h;
                if (f) {
                    var m = r(p);
                    l = t, p = m
                }
                for (; ++s < c;) {
                    var _ = n[s],
                        g = a ? a(_, s, n) : _;
                    (i ? !s || p[p.length - 1] !== g : l(p, g) < 0) && ((a || f) && p.push(g), h.push(_))
                }
                return f ? (u(p.array), d(p)) : a && u(p), h
            }

            function rt(e) {
                return function(t, n, i) {
                    var a = {};
                    n = p.createCallback(n, i, 3);
                    var r = -1,
                        s = t ? t.length : 0;
                    if ("number" == typeof s)
                        for (; ++r < s;) {
                            var o = t[r];
                            e(a, o, n(o, r, t), t)
                        } else la(t, function(t, i, r) {
                            e(a, t, n(t, i, r), r)
                        });
                    return a
                }
            }

            function st(e, t, n, i, a, r) {
                var s = 1 & t,
                    o = 2 & t,
                    l = 4 & t,
                    u = 16 & t,
                    d = 32 & t;
                if (!o && !St(e)) throw new wi;
                u && !n.length && (t &= -17, u = n = !1), d && !i.length && (t &= -33, d = i = !1);
                var h = e && e.__bindData__;
                if (h && h !== !0) return h = c(h), h[2] && (h[2] = c(h[2])), h[3] && (h[3] = c(h[3])), !s || 1 & h[1] || (h[4] = a), !s && 1 & h[1] && (t |= 8), !l || 4 & h[1] || (h[5] = r), u && Fi.apply(h[2] || (h[2] = []), n), d && Hi.apply(h[3] || (h[3] = []), i), h[1] |= t, st.apply(null, h);
                var f = 1 == t || 17 === t ? v : Q;
                return f([e, t, n, i, a, r])
            }

            function ot(e) {
                return ta[e]
            }

            function lt() {
                var t = (t = p.indexOf) === yn ? e : t;
                return t
            }

            function ut(e) {
                return "function" == typeof e && xi.test(e)
            }

            function dt(e) {
                var t, n;
                return e && Di.call(e) == N && (t = e.constructor, !St(t) || t instanceof t) ? (oa(e, function(e, t) {
                    n = t
                }), "undefined" == typeof n || Ai.call(e, n)) : !1
            }

            function ct(e) {
                return na[e]
            }

            function ht(e) {
                return e && "object" == typeof e && "number" == typeof e.length && Di.call(e) == A || !1
            }

            function ft(e, t, n, i) {
                return "boolean" != typeof t && null != t && (i = n, n = t, t = !1), V(e, t, "function" == typeof n && X(n, i, 1))
            }

            function pt(e, t, n) {
                return V(e, !0, "function" == typeof t && X(t, n, 1))
            }

            function mt(e, t) {
                var n = J(e);
                return t ? ra(n, t) : n
            }

            function _t(e, t, n) {
                var i;
                return t = p.createCallback(t, n, 3), la(e, function(e, n, a) {
                    return t(e, n, a) ? (i = n, !1) : void 0
                }), i
            }

            function gt(e, t, n) {
                var i;
                return t = p.createCallback(t, n, 3), vt(e, function(e, n, a) {
                    return t(e, n, a) ? (i = n, !1) : void 0
                }), i
            }

            function yt(e, t, n) {
                var i = [];
                oa(e, function(e, t) {
                    i.push(t, e)
                });
                var a = i.length;
                for (t = X(t, n, 3); a-- && t(i[a--], i[a], e) !== !1;);
                return e
            }

            function vt(e, t, n) {
                var i = ea(e),
                    a = i.length;
                for (t = X(t, n, 3); a--;) {
                    var r = i[a];
                    if (t(e[r], r, e) === !1) break
                }
                return e
            }

            function Mt(e) {
                var t = [];
                return oa(e, function(e, n) {
                    St(e) && t.push(n)
                }), t.sort()
            }

            function Lt(e, t) {
                return e ? Ai.call(e, t) : !1
            }

            function bt(e) {
                for (var t = -1, n = ea(e), i = n.length, a = {}; ++t < i;) {
                    var r = n[t];
                    a[e[r]] = r
                }
                return a
            }

            function wt(e) {
                return e === !0 || e === !1 || e && "object" == typeof e && Di.call(e) == O || !1
            }

            function Tt(e) {
                return e && "object" == typeof e && Di.call(e) == W || !1
            }

            function Yt(e) {
                return e && 1 === e.nodeType || !1
            }

            function kt(e) {
                var t = !0;
                if (!e) return t;
                var n = Di.call(e),
                    i = e.length;
                return n == F || n == I || n == A || n == N && "number" == typeof i && St(e.splice) ? !i : (la(e, function() {
                    return t = !1
                }), t)
            }

            function Dt(e, t, n, i) {
                return tt(e, t, "function" == typeof n && X(n, i, 2))
            }

            function xt(e) {
                return Ii(e) && !Ri(parseFloat(e))
            }

            function St(e) {
                return "function" == typeof e
            }

            function Ct(e) {
                return !(!e || !U[typeof e])
            }

            function jt(e) {
                return Et(e) && e != +e
            }

            function Pt(e) {
                return null === e
            }

            function Et(e) {
                return "number" == typeof e || e && "object" == typeof e && Di.call(e) == $ || !1
            }

            function At(e) {
                return e && "object" == typeof e && Di.call(e) == z || !1
            }

            function Ft(e) {
                return "string" == typeof e || e && "object" == typeof e && Di.call(e) == I || !1
            }

            function Ot(e) {
                return "undefined" == typeof e
            }

            function Wt(e, t, n) {
                var i = {};
                return t = p.createCallback(t, n, 3), la(e, function(e, n, a) {
                    i[n] = t(e, n, a)
                }), i
            }

            function Ht(e) {
                var t = arguments,
                    n = 2;
                if (!Ct(e)) return e;
                if ("number" != typeof t[2] && (n = t.length), n > 3 && "function" == typeof t[n - 2]) var i = X(t[--n - 1], t[n--], 2);
                else n > 2 && "function" == typeof t[n - 1] && (i = t[--n]);
                for (var a = c(arguments, 1, n), r = -1, s = o(), l = o(); ++r < n;) nt(e, a[r], i, s, l);
                return u(s), u(l), e
            }

            function $t(e, t, n) {
                var i = {};
                if ("function" != typeof t) {
                    var a = [];
                    oa(e, function(e, t) {
                        a.push(t)
                    }), a = Z(a, et(arguments, !0, !1, 1));
                    for (var r = -1, s = a.length; ++r < s;) {
                        var o = a[r];
                        i[o] = e[o]
                    }
                } else t = p.createCallback(t, n, 3), oa(e, function(e, n, a) {
                    t(e, n, a) || (i[n] = e)
                });
                return i
            }

            function Nt(e) {
                for (var t = -1, n = ea(e), i = n.length, a = pi(i); ++t < i;) {
                    var r = n[t];
                    a[t] = [r, e[r]]
                }
                return a
            }

            function zt(e, t, n) {
                var i = {};
                if ("function" != typeof t)
                    for (var a = -1, r = et(arguments, !0, !1, 1), s = Ct(e) ? r.length : 0; ++a < s;) {
                        var o = r[a];
                        o in e && (i[o] = e[o])
                    } else t = p.createCallback(t, n, 3), oa(e, function(e, n, a) {
                        t(e, n, a) && (i[n] = e)
                    });
                return i
            }

            function It(e, t, n, i) {
                var a = Zi(e);
                if (null == n)
                    if (a) n = [];
                    else {
                        var r = e && e.constructor,
                            s = r && r.prototype;
                        n = J(s)
                    }
                return t && (t = p.createCallback(t, i, 4), (a ? Xt : la)(e, function(e, i, a) {
                    return t(n, e, i, a)
                })), n
            }

            function Rt(e) {
                for (var t = -1, n = ea(e), i = n.length, a = pi(i); ++t < i;) a[t] = e[n[t]];
                return a
            }

            function Bt(e) {
                for (var t = arguments, n = -1, i = et(t, !0, !1, 1), a = t[2] && t[2][t[1]] === e ? 1 : i.length, r = pi(a); ++n < a;) r[n] = e[i[n]];
                return r
            }

            function qt(e, t, n) {
                var i = -1,
                    a = lt(),
                    r = e ? e.length : 0,
                    s = !1;
                return n = (0 > n ? qi(0, r + n) : n) || 0, Zi(e) ? s = a(e, t, n) > -1 : "number" == typeof r ? s = (Ft(e) ? e.indexOf(t, n) : a(e, t, n)) > -1 : la(e, function(e) {
                    return ++i >= n ? !(s = e === t) : void 0
                }), s
            }

            function Ut(e, t, n) {
                var i = !0;
                t = p.createCallback(t, n, 3);
                var a = -1,
                    r = e ? e.length : 0;
                if ("number" == typeof r)
                    for (; ++a < r && (i = !!t(e[a], a, e)););
                else la(e, function(e, n, a) {
                    return i = !!t(e, n, a)
                });
                return i
            }

            function Vt(e, t, n) {
                var i = [];
                t = p.createCallback(t, n, 3);
                var a = -1,
                    r = e ? e.length : 0;
                if ("number" == typeof r)
                    for (; ++a < r;) {
                        var s = e[a];
                        t(s, a, e) && i.push(s)
                    } else la(e, function(e, n, a) {
                        t(e, n, a) && i.push(e)
                    });
                return i
            }

            function Gt(e, t, n) {
                t = p.createCallback(t, n, 3);
                var i = -1,
                    a = e ? e.length : 0;
                if ("number" != typeof a) {
                    var r;
                    return la(e, function(e, n, i) {
                        return t(e, n, i) ? (r = e, !1) : void 0
                    }), r
                }
                for (; ++i < a;) {
                    var s = e[i];
                    if (t(s, i, e)) return s
                }
            }

            function Jt(e, t, n) {
                var i;
                return t = p.createCallback(t, n, 3), Qt(e, function(e, n, a) {
                    return t(e, n, a) ? (i = e, !1) : void 0
                }), i
            }

            function Xt(e, t, n) {
                var i = -1,
                    a = e ? e.length : 0;
                if (t = t && "undefined" == typeof n ? t : X(t, n, 3), "number" == typeof a)
                    for (; ++i < a && t(e[i], i, e) !== !1;);
                else la(e, t);
                return e
            }

            function Qt(e, t, n) {
                var i = e ? e.length : 0;
                if (t = t && "undefined" == typeof n ? t : X(t, n, 3), "number" == typeof i)
                    for (; i-- && t(e[i], i, e) !== !1;);
                else {
                    var a = ea(e);
                    i = a.length, la(e, function(e, n, r) {
                        return n = a ? a[--i] : --i, t(r[n], n, r)
                    })
                }
                return e
            }

            function Zt(e, t) {
                var n = c(arguments, 2),
                    i = -1,
                    a = "function" == typeof t,
                    r = e ? e.length : 0,
                    s = pi("number" == typeof r ? r : 0);
                return Xt(e, function(e) {
                    s[++i] = (a ? t : e[t]).apply(e, n)
                }), s
            }

            function Kt(e, t, n) {
                var i = -1,
                    a = e ? e.length : 0;
                if (t = p.createCallback(t, n, 3), "number" == typeof a)
                    for (var r = pi(a); ++i < a;) r[i] = t(e[i], i, e);
                else r = [], la(e, function(e, n, a) {
                    r[++i] = t(e, n, a)
                });
                return r
            }

            function en(e, t, n) {
                var a = -1 / 0,
                    r = a;
                if ("function" != typeof t && n && n[t] === e && (t = null), null == t && Zi(e))
                    for (var s = -1, o = e.length; ++s < o;) {
                        var l = e[s];
                        l > r && (r = l)
                    } else t = null == t && Ft(e) ? i : p.createCallback(t, n, 3), Xt(e, function(e, n, i) {
                        var s = t(e, n, i);
                        s > a && (a = s, r = e)
                    });
                return r
            }

            function tn(e, t, n) {
                var a = 1 / 0,
                    r = a;
                if ("function" != typeof t && n && n[t] === e && (t = null), null == t && Zi(e))
                    for (var s = -1, o = e.length; ++s < o;) {
                        var l = e[s];
                        r > l && (r = l)
                    } else t = null == t && Ft(e) ? i : p.createCallback(t, n, 3), Xt(e, function(e, n, i) {
                        var s = t(e, n, i);
                        a > s && (a = s, r = e)
                    });
                return r
            }

            function nn(e, t, n, i) {
                if (!e) return n;
                var a = arguments.length < 3;
                t = p.createCallback(t, i, 4);
                var r = -1,
                    s = e.length;
                if ("number" == typeof s)
                    for (a && (n = e[++r]); ++r < s;) n = t(n, e[r], r, e);
                else la(e, function(e, i, r) {
                    n = a ? (a = !1, e) : t(n, e, i, r)
                });
                return n
            }

            function an(e, t, n, i) {
                var a = arguments.length < 3;
                return t = p.createCallback(t, i, 4), Qt(e, function(e, i, r) {
                    n = a ? (a = !1, e) : t(n, e, i, r)
                }), n
            }

            function rn(e, t, n) {
                return t = p.createCallback(t, n, 3), Vt(e, function(e, n, i) {
                    return !t(e, n, i)
                })
            }

            function sn(e, t, n) {
                if (e && "number" != typeof e.length && (e = Rt(e)), null == t || n) return e ? e[it(0, e.length - 1)] : f;
                var i = on(e);
                return i.length = Ui(qi(0, t), i.length), i
            }

            function on(e) {
                var t = -1,
                    n = e ? e.length : 0,
                    i = pi("number" == typeof n ? n : 0);
                return Xt(e, function(e) {
                    var n = it(0, ++t);
                    i[t] = i[n], i[n] = e
                }), i
            }

            function ln(e) {
                var t = e ? e.length : 0;
                return "number" == typeof t ? t : ea(e).length
            }

            function un(e, t, n) {
                var i;
                t = p.createCallback(t, n, 3);
                var a = -1,
                    r = e ? e.length : 0;
                if ("number" == typeof r)
                    for (; ++a < r && !(i = t(e[a], a, e)););
                else la(e, function(e, n, a) {
                    return !(i = t(e, n, a))
                });
                return !!i
            }

            function dn(e, t, n) {
                var i = -1,
                    r = Zi(t),
                    s = e ? e.length : 0,
                    c = pi("number" == typeof s ? s : 0);
                for (r || (t = p.createCallback(t, n, 3)), Xt(e, function(e, n, a) {
                        var s = c[++i] = l();
                        r ? s.criteria = Kt(t, function(t) {
                            return e[t]
                        }) : (s.criteria = o())[0] = t(e, n, a), s.index = i, s.value = e
                    }), s = c.length, c.sort(a); s--;) {
                    var h = c[s];
                    c[s] = h.value, r || u(h.criteria), d(h)
                }
                return c
            }

            function cn(e) {
                return e && "number" == typeof e.length ? c(e) : Rt(e)
            }

            function hn(e) {
                for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                    var a = e[t];
                    a && i.push(a)
                }
                return i
            }

            function fn(e) {
                return Z(e, et(arguments, !0, !0, 1))
            }

            function pn(e, t, n) {
                var i = -1,
                    a = e ? e.length : 0;
                for (t = p.createCallback(t, n, 3); ++i < a;)
                    if (t(e[i], i, e)) return i;
                return -1
            }

            function mn(e, t, n) {
                var i = e ? e.length : 0;
                for (t = p.createCallback(t, n, 3); i--;)
                    if (t(e[i], i, e)) return i;
                return -1
            }

            function _n(e, t, n) {
                var i = 0,
                    a = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var r = -1;
                    for (t = p.createCallback(t, n, 3); ++r < a && t(e[r], r, e);) i++
                } else if (i = t, null == i || n) return e ? e[0] : f;
                return c(e, 0, Ui(qi(0, i), a))
            }

            function gn(e, t, n, i) {
                return "boolean" != typeof t && null != t && (i = n, n = "function" != typeof t && i && i[t] === e ? null : t, t = !1), null != n && (e = Kt(e, n, i)), et(e, t)
            }

            function yn(t, n, i) {
                if ("number" == typeof i) {
                    var a = t ? t.length : 0;
                    i = 0 > i ? qi(0, a + i) : i || 0
                } else if (i) {
                    var r = Dn(t, n);
                    return t[r] === n ? r : -1
                }
                return e(t, n, i)
            }

            function vn(e, t, n) {
                var i = 0,
                    a = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var r = a;
                    for (t = p.createCallback(t, n, 3); r-- && t(e[r], r, e);) i++
                } else i = null == t || n ? 1 : t || i;
                return c(e, 0, Ui(qi(0, a - i), a))
            }

            function Mn() {
                for (var n = [], i = -1, a = arguments.length, s = o(), l = lt(), c = l === e, h = o(); ++i < a;) {
                    var f = arguments[i];
                    (Zi(f) || ht(f)) && (n.push(f), s.push(c && f.length >= y && r(i ? n[i] : h)))
                }
                var p = n[0],
                    m = -1,
                    _ = p ? p.length : 0,
                    g = [];
                e: for (; ++m < _;) {
                    var v = s[0];
                    if (f = p[m], (v ? t(v, f) : l(h, f)) < 0) {
                        for (i = a, (v || h).push(f); --i;)
                            if (v = s[i], (v ? t(v, f) : l(n[i], f)) < 0) continue e;
                        g.push(f)
                    }
                }
                for (; a--;) v = s[a], v && d(v);
                return u(s), u(h), g
            }

            function Ln(e, t, n) {
                var i = 0,
                    a = e ? e.length : 0;
                if ("number" != typeof t && null != t) {
                    var r = a;
                    for (t = p.createCallback(t, n, 3); r-- && t(e[r], r, e);) i++
                } else if (i = t, null == i || n) return e ? e[a - 1] : f;
                return c(e, qi(0, a - i))
            }

            function bn(e, t, n) {
                var i = e ? e.length : 0;
                for ("number" == typeof n && (i = (0 > n ? qi(0, i + n) : Ui(n, i - 1)) + 1); i--;)
                    if (e[i] === t) return i;
                return -1
            }

            function wn(e) {
                for (var t = arguments, n = 0, i = t.length, a = e ? e.length : 0; ++n < i;)
                    for (var r = -1, s = t[n]; ++r < a;) e[r] === s && (Wi.call(e, r--, 1), a--);
                return e
            }

            function Tn(e, t, n) {
                e = +e || 0, n = "number" == typeof n ? n : +n || 1, null == t && (t = e, e = 0);
                for (var i = -1, a = qi(0, Si((t - e) / (n || 1))), r = pi(a); ++i < a;) r[i] = e, e += n;
                return r
            }

            function Yn(e, t, n) {
                var i = -1,
                    a = e ? e.length : 0,
                    r = [];
                for (t = p.createCallback(t, n, 3); ++i < a;) {
                    var s = e[i];
                    t(s, i, e) && (r.push(s), Wi.call(e, i--, 1), a--)
                }
                return r
            }

            function kn(e, t, n) {
                if ("number" != typeof t && null != t) {
                    var i = 0,
                        a = -1,
                        r = e ? e.length : 0;
                    for (t = p.createCallback(t, n, 3); ++a < r && t(e[a], a, e);) i++
                } else i = null == t || n ? 1 : qi(0, t);
                return c(e, i)
            }

            function Dn(e, t, n, i) {
                var a = 0,
                    r = e ? e.length : a;
                for (n = n ? p.createCallback(n, i, 1) : Zn, t = n(t); r > a;) {
                    var s = a + r >>> 1;
                    n(e[s]) < t ? a = s + 1 : r = s
                }
                return a
            }

            function xn() {
                return at(et(arguments, !0, !0))
            }

            function Sn(e, t, n, i) {
                return "boolean" != typeof t && null != t && (i = n, n = "function" != typeof t && i && i[t] === e ? null : t, t = !1), null != n && (n = p.createCallback(n, i, 3)), at(e, t, n)
            }

            function Cn(e) {
                return Z(e, c(arguments, 1))
            }

            function jn() {
                for (var e = -1, t = arguments.length; ++e < t;) {
                    var n = arguments[e];
                    if (Zi(n) || ht(n)) var i = i ? at(Z(i, n).concat(Z(n, i))) : n
                }
                return i || []
            }

            function Pn() {
                for (var e = arguments.length > 1 ? arguments : arguments[0], t = -1, n = e ? en(fa(e, "length")) : 0, i = pi(0 > n ? 0 : n); ++t < n;) i[t] = fa(e, t);
                return i
            }

            function En(e, t) {
                var n = -1,
                    i = e ? e.length : 0,
                    a = {};
                for (t || !i || Zi(e[0]) || (t = []); ++n < i;) {
                    var r = e[n];
                    t ? a[r] = t[n] : r && (a[r[0]] = r[1])
                }
                return a
            }

            function An(e, t) {
                if (!St(t)) throw new wi;
                return function() {
                    return --e < 1 ? t.apply(this, arguments) : void 0
                }
            }

            function Fn(e, t) {
                return arguments.length > 2 ? st(e, 17, c(arguments, 2), null, t) : st(e, 1, null, null, t)
            }

            function On(e) {
                for (var t = arguments.length > 1 ? et(arguments, !0, !1, 1) : Mt(e), n = -1, i = t.length; ++n < i;) {
                    var a = t[n];
                    e[a] = st(e[a], 1, null, null, e)
                }
                return e
            }

            function Wn(e, t) {
                return arguments.length > 2 ? st(t, 19, c(arguments, 2), null, e) : st(t, 3, null, null, e)
            }

            function Hn() {
                for (var e = arguments, t = e.length; t--;)
                    if (!St(e[t])) throw new wi;
                return function() {
                    for (var t = arguments, n = e.length; n--;) t = [e[n].apply(this, t)];
                    return t[0]
                }
            }

            function $n(e, t) {
                return t = "number" == typeof t ? t : +t || e.length, st(e, 4, null, null, null, t)
            }

            function Nn(e, t, n) {
                var i, a, r, s, o, l, u, d = 0,
                    c = !1,
                    h = !0;
                if (!St(e)) throw new wi;
                if (t = qi(0, t) || 0, n === !0) {
                    var p = !0;
                    h = !1
                } else Ct(n) && (p = n.leading, c = "maxWait" in n && (qi(t, n.maxWait) || 0), h = "trailing" in n ? n.trailing : h);
                var m = function() {
                        var n = t - (ma() - s);
                        if (0 >= n) {
                            a && Ci(a);
                            var c = u;
                            a = l = u = f, c && (d = ma(), r = e.apply(o, i), l || a || (i = o = null))
                        } else l = Oi(m, n)
                    },
                    _ = function() {
                        l && Ci(l), a = l = u = f, (h || c !== t) && (d = ma(), r = e.apply(o, i), l || a || (i = o = null))
                    };
                return function() {
                    if (i = arguments, s = ma(), o = this, u = h && (l || !p), c === !1) var n = p && !l;
                    else {
                        a || p || (d = s);
                        var f = c - (s - d),
                            g = 0 >= f;
                        g ? (a && (a = Ci(a)), d = s, r = e.apply(o, i)) : a || (a = Oi(_, f))
                    }
                    return g && l ? l = Ci(l) : l || t === c || (l = Oi(m, t)), n && (g = !0, r = e.apply(o, i)), !g || l || a || (i = o = null), r
                }
            }

            function zn(e) {
                if (!St(e)) throw new wi;
                var t = c(arguments, 1);
                return Oi(function() {
                    e.apply(f, t)
                }, 1)
            }

            function In(e, t) {
                if (!St(e)) throw new wi;
                var n = c(arguments, 2);
                return Oi(function() {
                    e.apply(f, n)
                }, t)
            }

            function Rn(e, t) {
                if (!St(e)) throw new wi;
                var n = function() {
                    var i = n.cache,
                        a = t ? t.apply(this, arguments) : g + arguments[0];
                    return Ai.call(i, a) ? i[a] : i[a] = e.apply(this, arguments)
                };
                return n.cache = {}, n
            }

            function Bn(e) {
                var t, n;
                if (!St(e)) throw new wi;
                return function() {
                    return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
                }
            }

            function qn(e) {
                return st(e, 16, c(arguments, 1))
            }

            function Un(e) {
                return st(e, 32, null, c(arguments, 1))
            }

            function Vn(e, t, n) {
                var i = !0,
                    a = !0;
                if (!St(e)) throw new wi;
                return n === !1 ? i = !1 : Ct(n) && (i = "leading" in n ? n.leading : i, a = "trailing" in n ? n.trailing : a), B.leading = i, B.maxWait = t, B.trailing = a, Nn(e, t, B)
            }

            function Gn(e, t) {
                return st(t, 16, [e])
            }

            function Jn(e) {
                return function() {
                    return e
                }
            }

            function Xn(e, t, n) {
                var i = typeof e;
                if (null == e || "function" == i) return X(e, t, n);
                if ("object" != i) return ni(e);
                var a = ea(e),
                    r = a[0],
                    s = e[r];
                return 1 != a.length || s !== s || Ct(s) ? function(t) {
                    for (var n = a.length, i = !1; n-- && (i = tt(t[a[n]], e[a[n]], null, !0)););
                    return i
                } : function(e) {
                    var t = e[r];
                    return s === t && (0 !== s || 1 / s == 1 / t)
                }
            }

            function Qn(e) {
                return null == e ? "" : bi(e).replace(aa, ot)
            }

            function Zn(e) {
                return e
            }

            function Kn(e, t, n) {
                var i = !0,
                    a = t && Mt(t);
                t && (n || a.length) || (null == n && (n = t), r = m, t = e, e = p, a = Mt(t)), n === !1 ? i = !1 : Ct(n) && "chain" in n && (i = n.chain);
                var r = e,
                    s = St(r);
                Xt(a, function(n) {
                    var a = e[n] = t[n];
                    s && (r.prototype[n] = function() {
                        var t = this.__chain__,
                            n = this.__wrapped__,
                            s = [n];
                        Fi.apply(s, arguments);
                        var o = a.apply(e, s);
                        if (i || t) {
                            if (n === o && Ct(o)) return this;
                            o = new r(o), o.__chain__ = t
                        }
                        return o
                    })
                })
            }

            function ei() {
                return n._ = ki, this
            }

            function ti() {}

            function ni(e) {
                return function(t) {
                    return t[e]
                }
            }

            function ii(e, t, n) {
                var i = null == e,
                    a = null == t;
                if (null == n && ("boolean" == typeof e && a ? (n = e, e = 1) : a || "boolean" != typeof t || (n = t, a = !0)), i && a && (t = 1), e = +e || 0, a ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1) {
                    var r = Gi();
                    return Ui(e + r * (t - e + parseFloat("1e-" + ((r + "").length - 1))), t)
                }
                return it(e, t)
            }

            function ai(e, t) {
                if (e) {
                    var n = e[t];
                    return St(n) ? e[t]() : n
                }
            }

            function ri(e, t, n) {
                var i = p.templateSettings;
                e = bi(e || ""), n = sa({}, n, i);
                var a, r = sa({}, n.imports, i.imports),
                    o = ea(r),
                    l = Rt(r),
                    u = 0,
                    d = n.interpolate || S,
                    c = "__p += '",
                    h = Li((n.escape || S).source + "|" + d.source + "|" + (d === D ? T : S).source + "|" + (n.evaluate || S).source + "|$", "g");
                e.replace(h, function(t, n, i, r, o, l) {
                    return i || (i = r), c += e.slice(u, l).replace(j, s), n && (c += "' +\n__e(" + n + ") +\n'"), o && (a = !0, c += "';\n" + o + ";\n__p += '"), i && (c += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), u = l + t.length, t
                }), c += "';\n";
                var m = n.variable,
                    _ = m;
                _ || (m = "obj", c = "with (" + m + ") {\n" + c + "\n}\n"), c = (a ? c.replace(L, "") : c).replace(b, "$1").replace(w, "$1;"), c = "function(" + m + ") {\n" + (_ ? "" : m + " || (" + m + " = {});\n") + "var __t, __p = '', __e = _.escape" + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + c + "return __p\n}";
                var g = "\n/*\n//# sourceURL=" + (n.sourceURL || "/lodash/template/source[" + E++ +"]") + "\n*/";
                try {
                    var y = gi(o, "return " + c + g).apply(f, l)
                } catch (v) {
                    throw v.source = c, v
                }
                return t ? y(t) : (y.source = c, y)
            }

            function si(e, t, n) {
                e = (e = +e) > -1 ? e : 0;
                var i = -1,
                    a = pi(e);
                for (t = X(t, n, 1); ++i < e;) a[i] = t(i);
                return a
            }

            function oi(e) {
                return null == e ? "" : bi(e).replace(ia, ct)
            }

            function li(e) {
                var t = ++_;
                return bi(null == e ? "" : e) + t
            }

            function ui(e) {
                return e = new m(e), e.__chain__ = !0, e
            }

            function di(e, t) {
                return t(e), e
            }

            function ci() {
                return this.__chain__ = !0, this
            }

            function hi() {
                return bi(this.__wrapped__)
            }

            function fi() {
                return this.__wrapped__
            }
            n = n ? K.defaults(G.Object(), n, K.pick(G, P)) : G;
            var pi = n.Array,
                mi = n.Boolean,
                _i = n.Date,
                gi = n.Function,
                yi = n.Math,
                vi = n.Number,
                Mi = n.Object,
                Li = n.RegExp,
                bi = n.String,
                wi = n.TypeError,
                Ti = [],
                Yi = Mi.prototype,
                ki = n._,
                Di = Yi.toString,
                xi = Li("^" + bi(Di).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                Si = yi.ceil,
                Ci = n.clearTimeout,
                ji = yi.floor,
                Pi = gi.prototype.toString,
                Ei = ut(Ei = Mi.getPrototypeOf) && Ei,
                Ai = Yi.hasOwnProperty,
                Fi = Ti.push,
                Oi = n.setTimeout,
                Wi = Ti.splice,
                Hi = Ti.unshift,
                $i = function() {
                    try {
                        var e = {},
                            t = ut(t = Mi.defineProperty) && t,
                            n = t(e, e, e) && t
                    } catch (i) {}
                    return n
                }(),
                Ni = ut(Ni = Mi.create) && Ni,
                zi = ut(zi = pi.isArray) && zi,
                Ii = n.isFinite,
                Ri = n.isNaN,
                Bi = ut(Bi = Mi.keys) && Bi,
                qi = yi.max,
                Ui = yi.min,
                Vi = n.parseInt,
                Gi = yi.random,
                Ji = {};
            Ji[F] = pi, Ji[O] = mi, Ji[W] = _i, Ji[H] = gi, Ji[N] = Mi, Ji[$] = vi, Ji[z] = Li, Ji[I] = bi, m.prototype = p.prototype;
            var Xi = p.support = {};
            Xi.funcDecomp = !ut(n.WinRTError) && C.test(h), Xi.funcNames = "string" == typeof gi.name, p.templateSettings = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: D,
                variable: "",
                imports: {
                    _: p
                }
            }, Ni || (J = function() {
                function e() {}
                return function(t) {
                    if (Ct(t)) {
                        e.prototype = t;
                        var i = new e;
                        e.prototype = null
                    }
                    return i || n.Object()
                }
            }());
            var Qi = $i ? function(e, t) {
                    q.value = t, $i(e, "__bindData__", q)
                } : ti,
                Zi = zi || function(e) {
                    return e && "object" == typeof e && "number" == typeof e.length && Di.call(e) == F || !1
                },
                Ki = function(e) {
                    var t, n = e,
                        i = [];
                    if (!n) return i;
                    if (!U[typeof e]) return i;
                    for (t in n) Ai.call(n, t) && i.push(t);
                    return i
                },
                ea = Bi ? function(e) {
                    return Ct(e) ? Bi(e) : []
                } : Ki,
                ta = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                na = bt(ta),
                ia = Li("(" + ea(na).join("|") + ")", "g"),
                aa = Li("[" + ea(ta).join("") + "]", "g"),
                ra = function(e, t, n) {
                    var i, a = e,
                        r = a;
                    if (!a) return r;
                    var s = arguments,
                        o = 0,
                        l = "number" == typeof n ? 2 : s.length;
                    if (l > 3 && "function" == typeof s[l - 2]) var u = X(s[--l - 1], s[l--], 2);
                    else l > 2 && "function" == typeof s[l - 1] && (u = s[--l]);
                    for (; ++o < l;)
                        if (a = s[o], a && U[typeof a])
                            for (var d = -1, c = U[typeof a] && ea(a), h = c ? c.length : 0; ++d < h;) i = c[d], r[i] = u ? u(r[i], a[i]) : a[i];
                    return r
                },
                sa = function(e, t, n) {
                    var i, a = e,
                        r = a;
                    if (!a) return r;
                    for (var s = arguments, o = 0, l = "number" == typeof n ? 2 : s.length; ++o < l;)
                        if (a = s[o], a && U[typeof a])
                            for (var u = -1, d = U[typeof a] && ea(a), c = d ? d.length : 0; ++u < c;) i = d[u], "undefined" == typeof r[i] && (r[i] = a[i]);
                    return r
                },
                oa = function(e, t, n) {
                    var i, a = e,
                        r = a;
                    if (!a) return r;
                    if (!U[typeof a]) return r;
                    t = t && "undefined" == typeof n ? t : X(t, n, 3);
                    for (i in a)
                        if (t(a[i], i, e) === !1) return r;
                    return r
                },
                la = function(e, t, n) {
                    var i, a = e,
                        r = a;
                    if (!a) return r;
                    if (!U[typeof a]) return r;
                    t = t && "undefined" == typeof n ? t : X(t, n, 3);
                    for (var s = -1, o = U[typeof a] && ea(a), l = o ? o.length : 0; ++s < l;)
                        if (i = o[s], t(a[i], i, e) === !1) return r;
                    return r
                },
                ua = Ei ? function(e) {
                    if (!e || Di.call(e) != N) return !1;
                    var t = e.valueOf,
                        n = ut(t) && (n = Ei(t)) && Ei(n);
                    return n ? e == n || Ei(e) == n : dt(e)
                } : dt,
                da = rt(function(e, t, n) {
                    Ai.call(e, n) ? e[n] ++ : e[n] = 1
                }),
                ca = rt(function(e, t, n) {
                    (Ai.call(e, n) ? e[n] : e[n] = []).push(t)
                }),
                ha = rt(function(e, t, n) {
                    e[n] = t
                }),
                fa = Kt,
                pa = Vt,
                ma = ut(ma = _i.now) && ma || function() {
                    return (new _i).getTime()
                },
                _a = 8 == Vi(M + "08") ? Vi : function(e, t) {
                    return Vi(Ft(e) ? e.replace(x, "") : e, t || 0)
                };
            return p.after = An, p.assign = ra, p.at = Bt, p.bind = Fn, p.bindAll = On, p.bindKey = Wn, p.chain = ui, p.compact = hn, p.compose = Hn, p.constant = Jn, p.countBy = da, p.create = mt, p.createCallback = Xn, p.curry = $n, p.debounce = Nn, p.defaults = sa, p.defer = zn, p.delay = In, p.difference = fn, p.filter = Vt, p.flatten = gn, p.forEach = Xt, p.forEachRight = Qt, p.forIn = oa, p.forInRight = yt, p.forOwn = la, p.forOwnRight = vt, p.functions = Mt, p.groupBy = ca, p.indexBy = ha, p.initial = vn, p.intersection = Mn, p.invert = bt, p.invoke = Zt, p.keys = ea, p.map = Kt, p.mapValues = Wt, p.max = en, p.memoize = Rn, p.merge = Ht, p.min = tn, p.omit = $t, p.once = Bn, p.pairs = Nt, p.partial = qn, p.partialRight = Un, p.pick = zt, p.pluck = fa, p.property = ni, p.pull = wn, p.range = Tn, p.reject = rn, p.remove = Yn, p.rest = kn, p.shuffle = on, p.sortBy = dn, p.tap = di, p.throttle = Vn, p.times = si, p.toArray = cn, p.transform = It, p.union = xn, p.uniq = Sn, p.values = Rt, p.where = pa, p.without = Cn, p.wrap = Gn, p.xor = jn, p.zip = Pn, p.zipObject = En, p.collect = Kt, p.drop = kn, p.each = Xt, p.eachRight = Qt, p.extend = ra, p.methods = Mt, p.object = En, p.select = Vt, p.tail = kn, p.unique = Sn, p.unzip = Pn, Kn(p), p.clone = ft, p.cloneDeep = pt, p.contains = qt, p.escape = Qn, p.every = Ut, p.find = Gt, p.findIndex = pn, p.findKey = _t, p.findLast = Jt, p.findLastIndex = mn, p.findLastKey = gt, p.has = Lt, p.identity = Zn, p.indexOf = yn, p.isArguments = ht, p.isArray = Zi, p.isBoolean = wt, p.isDate = Tt, p.isElement = Yt, p.isEmpty = kt, p.isEqual = Dt, p.isFinite = xt, p.isFunction = St, p.isNaN = jt, p.isNull = Pt, p.isNumber = Et, p.isObject = Ct, p.isPlainObject = ua, p.isRegExp = At, p.isString = Ft, p.isUndefined = Ot, p.lastIndexOf = bn, p.mixin = Kn, p.noConflict = ei, p.noop = ti, p.now = ma, p.parseInt = _a, p.random = ii, p.reduce = nn, p.reduceRight = an, p.result = ai, p.runInContext = h, p.size = ln, p.some = un, p.sortedIndex = Dn, p.template = ri, p.unescape = oi, p.uniqueId = li, p.all = Ut, p.any = un, p.detect = Gt, p.findWhere = Gt, p.foldl = nn, p.foldr = an, p.include = qt, p.inject = nn, Kn(function() {
                var e = {};
                return la(p, function(t, n) {
                    p.prototype[n] || (e[n] = t)
                }), e
            }(), !1), p.first = _n, p.last = Ln, p.sample = sn, p.take = _n, p.head = _n, la(p, function(e, t) {
                var n = "sample" !== t;
                p.prototype[t] || (p.prototype[t] = function(t, i) {
                    var a = this.__chain__,
                        r = e(this.__wrapped__, t, i);
                    return a || null != t && (!i || n && "function" == typeof t) ? new m(r, a) : r
                })
            }), p.VERSION = "2.4.1", p.prototype.chain = ci, p.prototype.toString = hi, p.prototype.value = fi, p.prototype.valueOf = fi, Xt(["join", "pop", "shift"], function(e) {
                var t = Ti[e];
                p.prototype[e] = function() {
                    var e = this.__chain__,
                        n = t.apply(this.__wrapped__, arguments);
                    return e ? new m(n, e) : n
                }
            }), Xt(["push", "reverse", "sort", "unshift"], function(e) {
                var t = Ti[e];
                p.prototype[e] = function() {
                    return t.apply(this.__wrapped__, arguments), this
                }
            }), Xt(["concat", "slice", "splice"], function(e) {
                var t = Ti[e];
                p.prototype[e] = function() {
                    return new m(t.apply(this.__wrapped__, arguments), this.__chain__)
                }
            }), p
        }
        var f, p = [],
            m = [],
            _ = 0,
            g = +new Date + "",
            y = 75,
            v = 40,
            M = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
            L = /\b__p \+= '';/g,
            b = /\b(__p \+=) '' \+/g,
            w = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            T = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            Y = /\w*$/,
            k = /^\s*function[ \n\r\t]+\w/,
            D = /<%=([\s\S]+?)%>/g,
            x = RegExp("^[" + M + "]*0+(?=.$)"),
            S = /($^)/,
            C = /\bthis\b/,
            j = /['\n\r\t\u2028\u2029\\]/g,
            P = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
            E = 0,
            A = "[object Arguments]",
            F = "[object Array]",
            O = "[object Boolean]",
            W = "[object Date]",
            H = "[object Function]",
            $ = "[object Number]",
            N = "[object Object]",
            z = "[object RegExp]",
            I = "[object String]",
            R = {};
        R[H] = !1, R[A] = R[F] = R[O] = R[W] = R[$] = R[N] = R[z] = R[I] = !0;
        var B = {
                leading: !1,
                maxWait: 0,
                trailing: !1
            },
            q = {
                configurable: !1,
                enumerable: !1,
                value: null,
                writable: !1
            },
            U = {
                "boolean": !1,
                "function": !0,
                object: !0,
                number: !1,
                string: !1,
                undefined: !1
            },
            V = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            G = U[typeof window] && window || this,
            J = U[typeof exports] && exports && !exports.nodeType && exports,
            X = U[typeof module] && module && !module.nodeType && module,
            Q = X && X.exports === J && J,
            Z = U[typeof global] && global;
        !Z || Z.global !== Z && Z.window !== Z || (G = Z);
        var K = h();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (G._ = K, define(function() {
            return K
        })) : J && X ? Q ? (X.exports = K)._ = K : J._ = K : G._ = K
    }.call(this),
    function() {
        var e, t = window.Messenger;
        e = window.Messenger = function() {
            return e._call.apply(this, arguments)
        }, window.Messenger.noConflict = function() {
            return window.Messenger = t, e
        }
    }(), window.Messenger._ = function() {
        if (window._) return window._;
        var e = Array.prototype,
            t = Object.prototype,
            n = Function.prototype,
            i = (e.push, e.slice),
            a = (e.concat, t.toString),
            r = (t.hasOwnProperty, e.forEach),
            s = (e.map, e.reduce, e.reduceRight, e.filter),
            o = (e.every, e.some, e.indexOf, e.lastIndexOf, Array.isArray, Object.keys),
            l = n.bind,
            u = {},
            d = {},
            c = u.each = u.forEach = function(e, t, n) {
                if (null != e)
                    if (r && e.forEach === r) e.forEach(t, n);
                    else if (e.length === +e.length) {
                    for (var i = 0, a = e.length; a > i; i++)
                        if (t.call(n, e[i], i, e) === d) return
                } else
                    for (var s in e)
                        if (u.has(e, s) && t.call(n, e[s], s, e) === d) return
            };
        u.result = function(e, t) {
            if (null == e) return null;
            var n = e[t];
            return u.isFunction(n) ? n.call(e) : n
        }, u.once = function(e) {
            var t, n = !1;
            return function() {
                return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
            }
        };
        var h = 0;
        return u.uniqueId = function(e) {
            var t = ++h + "";
            return e ? e + t : t
        }, u.filter = u.select = function(e, t, n) {
            var i = [];
            return null == e ? i : s && e.filter === s ? e.filter(t, n) : (c(e, function(e, a, r) {
                t.call(n, e, a, r) && (i[i.length] = e)
            }), i)
        }, c(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            u["is" + e] = function(t) {
                return a.call(t) == "[object " + e + "]"
            }
        }), u.defaults = function(e) {
            return c(i.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) null == e[n] && (e[n] = t[n])
            }), e
        }, u.extend = function(e) {
            return c(i.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) e[n] = t[n]
            }), e
        }, u.keys = o || function(e) {
            if (e !== Object(e)) throw new TypeError("Invalid object");
            var t = [];
            for (var n in e) u.has(e, n) && (t[t.length] = n);
            return t
        }, u.bind = function(e, t) {
            if (e.bind === l && l) return l.apply(e, i.call(arguments, 1));
            var n = i.call(arguments, 2);
            return function() {
                return e.apply(t, n.concat(i.call(arguments)))
            }
        }, u.isObject = function(e) {
            return e === Object(e)
        }, u
    }(), window.Messenger.Events = function() {
        if (window.Backbone && Backbone.Events) return Backbone.Events;
        var e = function() {
            var e = /\s+/,
                t = function(t, n, i, a) {
                    if (!i) return !0;
                    if ("object" == typeof i)
                        for (var r in i) t[n].apply(t, [r, i[r]].concat(a));
                    else {
                        if (!e.test(i)) return !0;
                        for (var s = i.split(e), o = 0, l = s.length; l > o; o++) t[n].apply(t, [s[o]].concat(a))
                    }
                },
                n = function(e, t) {
                    var n, i = -1,
                        a = e.length;
                    switch (t.length) {
                        case 0:
                            for (; ++i < a;)(n = e[i]).callback.call(n.ctx);
                            return;
                        case 1:
                            for (; ++i < a;)(n = e[i]).callback.call(n.ctx, t[0]);
                            return;
                        case 2:
                            for (; ++i < a;)(n = e[i]).callback.call(n.ctx, t[0], t[1]);
                            return;
                        case 3:
                            for (; ++i < a;)(n = e[i]).callback.call(n.ctx, t[0], t[1], t[2]);
                            return;
                        default:
                            for (; ++i < a;)(n = e[i]).callback.apply(n.ctx, t)
                    }
                },
                i = {
                    on: function(e, n, i) {
                        if (!t(this, "on", e, [n, i]) || !n) return this;
                        this._events || (this._events = {});
                        var a = this._events[e] || (this._events[e] = []);
                        return a.push({
                            callback: n,
                            context: i,
                            ctx: i || this
                        }), this
                    },
                    once: function(e, n, i) {
                        if (!t(this, "once", e, [n, i]) || !n) return this;
                        var a = this,
                            r = _.once(function() {
                                a.off(e, r), n.apply(this, arguments)
                            });
                        return r._callback = n, this.on(e, r, i), this
                    },
                    off: function(e, n, i) {
                        var a, r, s, o, l, u, d, c;
                        if (!this._events || !t(this, "off", e, [n, i])) return this;
                        if (!e && !n && !i) return this._events = {}, this;
                        for (o = e ? [e] : _.keys(this._events), l = 0, u = o.length; u > l; l++)
                            if (e = o[l], a = this._events[e]) {
                                if (s = [], n || i)
                                    for (d = 0, c = a.length; c > d; d++) r = a[d], (n && n !== r.callback && n !== r.callback._callback || i && i !== r.context) && s.push(r);
                                this._events[e] = s
                            }
                        return this
                    },
                    trigger: function(e) {
                        if (!this._events) return this;
                        var i = Array.prototype.slice.call(arguments, 1);
                        if (!t(this, "trigger", e, i)) return this;
                        var a = this._events[e],
                            r = this._events.all;
                        return a && n(a, i), r && n(r, arguments), this
                    },
                    listenTo: function(e, t, n) {
                        var i = this._listeners || (this._listeners = {}),
                            a = e._listenerId || (e._listenerId = _.uniqueId("l"));
                        return i[a] = e, e.on(t, "object" == typeof t ? this : n, this), this
                    },
                    stopListening: function(e, t, n) {
                        var i = this._listeners;
                        if (i) {
                            if (e) e.off(t, "object" == typeof t ? this : n, this), t || n || delete i[e._listenerId];
                            else {
                                "object" == typeof t && (n = this);
                                for (var a in i) i[a].off(t, n, this);
                                this._listeners = {}
                            }
                            return this
                        }
                    }
                };
            return i.bind = i.on, i.unbind = i.off, i
        };
        return e()
    }(),
    function() {
        var e, t, n, i, a, r, s, o, l, u, d, c = {}.hasOwnProperty,
            h = function(e, t) {
                function n() {
                    this.constructor = e
                }
                for (var i in t) c.call(t, i) && (e[i] = t[i]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            },
            f = [].slice,
            p = [].indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        e = jQuery, r = null != (l = window._) ? l : window.Messenger._, i = null != (u = "undefined" != typeof Backbone && null !== Backbone ? Backbone.Events : void 0) ? u : window.Messenger.Events, n = function() {
            function t(t) {
                e.extend(this, i), r.isObject(t) && (t.el && this.setElement(t.el), this.model = t.model), this.initialize.apply(this, arguments)
            }
            return t.prototype.setElement = function(t) {
                return this.$el = e(t), this.el = this.$el[0]
            }, t.prototype.delegateEvents = function(e) {
                var t, n, i, a, s, o, l;
                if (e || (e = r.result(this, "events"))) {
                    this.undelegateEvents(), t = /^(\S+)\s*(.*)$/, l = [];
                    for (i in e) {
                        if (s = e[i], r.isFunction(s) || (s = this[e[i]]), !s) throw new Error('Method "' + e[i] + '" does not exist');
                        a = i.match(t), n = a[1], o = a[2], s = r.bind(s, this), n += ".delegateEvents" + this.cid, l.push("" === o ? this.jqon(n, s) : this.jqon(n, o, s))
                    }
                    return l
                }
            }, t.prototype.jqon = function(e, t, n) {
                var i;
                return null != this.$el.on ? (i = this.$el).on.apply(i, arguments) : (null == n && (n = t, t = void 0), null != t ? this.$el.delegate(t, e, n) : this.$el.bind(e, n))
            }, t.prototype.jqoff = function(e) {
                var t;
                return null != this.$el.off ? (t = this.$el).off.apply(t, arguments) : (this.$el.undelegate(), this.$el.unbind(e))
            }, t.prototype.undelegateEvents = function() {
                return this.jqoff(".delegateEvents" + this.cid)
            }, t.prototype.remove = function() {
                return this.undelegateEvents(), this.$el.remove()
            }, t
        }(), s = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return h(n, t), n.prototype.defaults = {
                hideAfter: 10,
                scroll: !0,
                closeButtonText: "&times;"
            }, n.prototype.initialize = function(t) {
                return null == t && (t = {}), this.shown = !1, this.rendered = !1, this.messenger = t.messenger, this.options = e.extend({}, this.options, t, this.defaults)
            }, n.prototype.show = function() {
                var e;
                return this.rendered || this.render(), this.$message.removeClass("messenger-hidden"), e = this.shown, this.shown = !0, e ? void 0 : this.trigger("show")
            }, n.prototype.hide = function() {
                var e;
                if (this.rendered) return this.$message.addClass("messenger-hidden"), e = this.shown, this.shown = !1, e ? this.trigger("hide") : void 0
            }, n.prototype.cancel = function() {
                return this.hide()
            }, n.prototype.update = function(t) {
                var n, i = this;
                return r.isString(t) && (t = {
                    message: t
                }), e.extend(this.options, t), this.lastUpdate = new Date, this.rendered = !1, this.events = null != (n = this.options.events) ? n : {}, this.render(), this.actionsToEvents(), this.delegateEvents(), this.checkClickable(), this.options.hideAfter ? (this.$message.addClass("messenger-will-hide-after"), null != this._hideTimeout && clearTimeout(this._hideTimeout), this._hideTimeout = setTimeout(function() {
                    return i.hide()
                }, 1e3 * this.options.hideAfter)) : this.$message.removeClass("messenger-will-hide-after"), this.options.hideOnNavigate ? (this.$message.addClass("messenger-will-hide-on-navigate"), null != ("undefined" != typeof Backbone && null !== Backbone ? Backbone.history : void 0) && Backbone.history.on("route", function() {
                    return i.hide()
                })) : this.$message.removeClass("messenger-will-hide-on-navigate"), this.trigger("update", this)
            }, n.prototype.scrollTo = function() {
                return this.options.scroll ? e.scrollTo(this.$el, {
                    duration: 400,
                    offset: {
                        left: 0,
                        top: -20
                    }
                }) : void 0
            }, n.prototype.timeSinceUpdate = function() {
                return this.lastUpdate ? new Date - this.lastUpdate : null
            }, n.prototype.actionsToEvents = function() {
                var e, t, n, i, a = this;
                n = this.options.actions, i = [];
                for (t in n) e = n[t], i.push(this.events['click [data-action="' + t + '"] a'] = function(e) {
                    return function(n) {
                        return n.preventDefault(), n.stopPropagation(), a.trigger("action:" + t, e, n), e.action.call(a, n, a)
                    }
                }(e));
                return i
            }, n.prototype.checkClickable = function() {
                var e, t, n, i;
                n = this.events, i = [];
                for (t in n) e = n[t], i.push("click" === t ? this.$message.addClass("messenger-clickable") : void 0);
                return i
            }, n.prototype.undelegateEvents = function() {
                var e;
                return n.__super__.undelegateEvents.apply(this, arguments), null != (e = this.$message) ? e.removeClass("messenger-clickable") : void 0
            }, n.prototype.parseActions = function() {
                var t, n, i, a, r, s;
                n = [], r = this.options.actions;
                for (a in r) t = r[a], i = e.extend({}, t), i.name = a, null == (s = i.label) && (i.label = a), n.push(i);
                return n
            }, n.prototype.template = function(t) {
                var n, i, a, r, s, o, l, u, d, c, h = this;
                for (s = e("<div class='messenger-message message alert " + t.type + " message-" + t.type + " alert-" + t.type + "'>"), t.showCloseButton && (a = e('<button type="button" class="messenger-close" data-dismiss="alert">'), a.html(t.closeButtonText), a.click(function() {
                        return h.cancel(), !0
                    }), s.append(a)), o = e('<div class="messenger-message-inner">' + t.message + "</div>"), s.append(o), t.actions.length && (i = e('<div class="messenger-actions">')), c = t.actions, u = 0, d = c.length; d > u; u++) l = c[u], n = e("<span>"), n.attr("data-action", "" + l.name), r = e("<a>"), r.html(l.label), n.append(e('<span class="messenger-phrase">')), n.append(r), i.append(n);
                return s.append(i), s
            }, n.prototype.render = function() {
                var t;
                if (!this.rendered) return this._hasSlot || (this.setElement(this.messenger._reserveMessageSlot(this)), this._hasSlot = !0), t = e.extend({}, this.options, {
                    actions: this.parseActions()
                }), this.$message = e(this.template(t)), this.$el.html(this.$message), this.shown = !0, this.rendered = !0, this.trigger("render")
            }, n
        }(n), a = function(e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return h(t, e), t.prototype.initialize = function() {
                return t.__super__.initialize.apply(this, arguments), this._timers = {}
            }, t.prototype.cancel = function() {
                return this.clearTimers(), this.hide(), null != this._actionInstance && null != this._actionInstance.abort ? this._actionInstance.abort() : void 0
            }, t.prototype.clearTimers = function() {
                var e, t, n, i;
                n = this._timers;
                for (e in n) t = n[e], clearTimeout(t);
                return this._timers = {}, null != (i = this.$message) ? i.removeClass("messenger-retry-soon messenger-retry-later") : void 0
            }, t.prototype.render = function() {
                var e, n, i, a;
                t.__super__.render.apply(this, arguments), this.clearTimers(), i = this.options.actions, a = [];
                for (n in i) e = i[n], a.push(e.auto ? this.startCountdown(n, e) : void 0);
                return a
            }, t.prototype.renderPhrase = function(e, t) {
                var n;
                return n = e.phrase.replace("TIME", this.formatTime(t))
            }, t.prototype.formatTime = function(e) {
                var t;
                return t = function(e, t) {
                    return e = Math.floor(e), 1 !== e && (t += "s"), "in " + e + " " + t
                }, 0 === Math.floor(e) ? "now..." : 60 > e ? t(e, "second") : (e /= 60, 60 > e ? t(e, "minute") : (e /= 60, t(e, "hour")))
            }, t.prototype.startCountdown = function(e, t) {
                var n, i, a, r, s = this;
                if (null == this._timers[e]) return n = this.$message.find("[data-action='" + e + "'] .messenger-phrase"), i = null != (r = t.delay) ? r : 3, 10 >= i ? (this.$message.removeClass("messenger-retry-later"), this.$message.addClass("messenger-retry-soon")) : (this.$message.removeClass("messenger-retry-soon"), this.$message.addClass("messenger-retry-later")), (a = function() {
                    var r;
                    return n.text(s.renderPhrase(t, i)), i > 0 ? (r = Math.min(i, 1), i -= r, s._timers[e] = setTimeout(a, 1e3 * r)) : (s.$message.removeClass("messenger-retry-soon messenger-retry-later"), delete s._timers[e], t.action())
                })()
            }, t
        }(s), o = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return h(n, t), n.prototype.tagName = "ul", n.prototype.className = "messenger", n.prototype.messageDefaults = {
                type: "info"
            }, n.prototype.initialize = function(t) {
                return this.options = null != t ? t : {}, this.history = [], this.messageDefaults = e.extend({}, this.messageDefaults, this.options.messageDefaults)
            }, n.prototype.render = function() {
                return this.updateMessageSlotClasses()
            }, n.prototype.findById = function(e) {
                return r.filter(this.history, function(t) {
                    return t.msg.options.id === e
                })
            }, n.prototype._reserveMessageSlot = function(t) {
                var n, i, a = this;
                for (n = e("<li>"), n.addClass("messenger-message-slot"), this.$el.prepend(n), this.history.push({
                        msg: t,
                        $slot: n
                    }), this._enforceIdConstraint(t), t.on("update", function() {
                        return a._enforceIdConstraint(t)
                    }); this.options.maxMessages && this.history.length > this.options.maxMessages;) i = this.history.shift(), i.msg.remove(), i.$slot.remove();
                return n
            }, n.prototype._enforceIdConstraint = function(e) {
                var t, n, i, a, r;
                if (null != e.options.id)
                    for (r = this.history, n = 0, i = r.length; i > n; n++)
                        if (t = r[n], a = t.msg, null != a.options.id && a.options.id === e.options.id && e !== a) {
                            if (e.options.singleton) return void e.hide();
                            a.hide()
                        }
            }, n.prototype.newMessage = function(e) {
                var t, n, i, r, o = this;
                return null == e && (e = {}), e.messenger = this, s = null != (n = null != (i = Messenger.themes[null != (r = e.theme) ? r : this.options.theme]) ? i.Message : void 0) ? n : a, t = new s(e), t.on("show", function() {
                    return e.scrollTo && "fixed" !== o.$el.css("position") ? t.scrollTo() : void 0
                }), t.on("hide show render", this.updateMessageSlotClasses, this), t
            }, n.prototype.updateMessageSlotClasses = function() {
                var e, t, n, i, a, r, s;
                for (i = !0, t = null, e = !1, s = this.history, a = 0, r = s.length; r > a; a++) n = s[a], n.$slot.removeClass("messenger-first messenger-last messenger-shown"), n.msg.shown && n.msg.rendered && (n.$slot.addClass("messenger-shown"), e = !0, t = n, i && (i = !1, n.$slot.addClass("messenger-first")));
                return null != t && t.$slot.addClass("messenger-last"), this.$el["" + (e ? "remove" : "add") + "Class"]("messenger-empty")
            }, n.prototype.hideAll = function() {
                var e, t, n, i, a;
                for (i = this.history, a = [], t = 0, n = i.length; n > t; t++) e = i[t], a.push(e.msg.hide());
                return a
            }, n.prototype.post = function(t) {
                var n;
                return r.isString(t) && (t = {
                    message: t
                }), t = e.extend(!0, {}, this.messageDefaults, t), n = this.newMessage(t), n.update(t), n
            }, n
        }(n), t = function(t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return h(n, t), n.prototype.doDefaults = {
                progressMessage: null,
                successMessage: null,
                errorMessage: "Error connecting to the server.",
                showSuccessWithoutError: !0,
                retry: {
                    auto: !0,
                    allow: !0
                },
                action: e.ajax
            }, n.prototype.hookBackboneAjax = function(t) {
                var n, i = this;
                if (null == t && (t = {}), null == window.Backbone) throw "Expected Backbone to be defined";
                return t = r.defaults(t, {
                    id: "BACKBONE_ACTION",
                    errorMessage: !1,
                    successMessage: "Request completed successfully.",
                    showSuccessWithoutError: !1
                }), n = function(e) {
                    var n;
                    return n = r.extend({}, t, e.messenger), i["do"](n, e)
                }, null != Backbone.ajax ? (Backbone.ajax._withoutMessenger && (Backbone.ajax = Backbone.ajax._withoutMessenger), (null == t.action || t.action === this.doDefaults.action) && (t.action = Backbone.ajax), n._withoutMessenger = Backbone.ajax, Backbone.ajax = n) : Backbone.sync = r.wrap(Backbone.sync, function() {
                    var t, i, a;
                    return a = arguments[0], t = 2 <= arguments.length ? f.call(arguments, 1) : [], i = e.ajax, e.ajax = n, a.call.apply(a, [this].concat(f.call(t))), e.ajax = i
                })
            }, n.prototype._getHandlerResponse = function(e) {
                return e === !1 ? !1 : e === !0 || null == e ? !0 : e
            }, n.prototype._parseEvents = function(e) {
                var t, n, i, a, r, s, o;
                null == e && (e = {}), r = {};
                for (a in e) i = e[a], n = a.indexOf(" "), s = a.substring(0, n), t = a.substring(n + 1), null == (o = r[s]) && (r[s] = {}), r[s][t] = i;
                return r
            }, n.prototype._normalizeResponse = function() {
                var e, t, n, i, a, s, o;
                for (n = 1 <= arguments.length ? f.call(arguments, 0) : [], i = null, a = null, e = null, s = 0, o = n.length; o > s; s++) t = n[s], "success" === t || "timeout" === t || "abort" === t ? i = t : null != (null != t ? t.readyState : void 0) && null != (null != t ? t.responseText : void 0) ? a = t : r.isObject(t) && (e = t);
                return [i, e, a]
            }, n.prototype.run = function() {
                var t, n, i, a, s, o, l, u, d, c, h, m = this;
                if (o = arguments[0], d = arguments[1], t = 3 <= arguments.length ? f.call(arguments, 2) : [], null == d && (d = {}), o = e.extend(!0, {}, this.messageDefaults, this.doDefaults, null != o ? o : {}), n = this._parseEvents(o.events), i = function(e, t) {
                        var n;
                        return n = o[e + "Message"], r.isFunction(n) ? n.call(m, e, t) : n
                    }, l = null != (h = o.messageInstance) ? h : this.newMessage(o), null != o.id && (l.options.id = o.id), null != o.progressMessage && l.update(e.extend({}, o, {
                        message: i("progress", null),
                        type: "info"
                    })), s = {}, r.each(["error", "success"], function(a) {
                        var u;
                        return u = d[a], s[a] = function() {
                            var s, c, h, _, g, y, v, M, L, b, w, T, Y, k, D;
                            return y = 1 <= arguments.length ? f.call(arguments, 0) : [], L = m._normalizeResponse.apply(m, y), g = L[0], s = L[1], M = L[2], "success" === a && null == l.errorCount && o.showSuccessWithoutError === !1 && (o.successMessage = null), "error" === a && (null == (b = o.errorCount) && (o.errorCount = 0), o.errorCount += 1), h = o.returnsPromise ? y[0] : "function" == typeof u ? u.apply(null, y) : void 0, v = m._getHandlerResponse(h), r.isString(v) && (v = {
                                message: v
                            }), "error" !== a || 0 !== (null != M ? M.status : void 0) && "abort" !== g ? "error" === a && null != o.ignoredErrorCodes && (w = null != M ? M.status : void 0, p.call(o.ignoredErrorCodes, w) >= 0) ? void l.hide() : (c = {
                                message: i(a, M),
                                type: a,
                                events: null != (T = n[a]) ? T : {},
                                hideOnNavigate: "success" === a
                            }, _ = e.extend({}, o, c, v), "number" == typeof(null != (Y = _.retry) ? Y.allow : void 0) && _.retry.allow--, "error" === a && (null != M ? M.status : void 0) >= 500 && (null != (k = _.retry) ? k.allow : void 0) ? (null == _.retry.delay && (_.retry.delay = _.errorCount < 4 ? 10 : 300), _.hideAfter && (null == (D = _._hideAfter) && (_._hideAfter = _.hideAfter), _.hideAfter = _._hideAfter + _.retry.delay), _._retryActions = !0, _.actions = {
                                retry: {
                                    label: "retry now",
                                    phrase: "Retrying TIME",
                                    auto: _.retry.auto,
                                    delay: _.retry.delay,
                                    action: function() {
                                        return _.messageInstance = l, setTimeout(function() {
                                            return m["do"].apply(m, [_, d].concat(f.call(t)))
                                        }, 0)
                                    }
                                },
                                cancel: {
                                    action: function() {
                                        return l.cancel()
                                    }
                                }
                            }) : _._retryActions && (delete _.actions.retry, delete _.actions.cancel, delete o._retryActions), l.update(_), v && _.message ? (Messenger(r.extend({}, m.options, {
                                instance: m
                            })), l.show()) : l.hide()) : void l.hide()
                        }
                    }), !o.returnsPromise)
                    for (c in s) a = s[c], u = d[c], d[c] = a;
                return l._actionInstance = o.action.apply(o, [d].concat(f.call(t))), o.returnsPromise && l._actionInstance.then(s.success, s.error), l
            }, n.prototype["do"] = n.prototype.run, n.prototype.ajax = function() {
                var t, n;
                return n = arguments[0], t = 2 <= arguments.length ? f.call(arguments, 1) : [], n.action = e.ajax, this.run.apply(this, [n].concat(f.call(t)))
            }, n.prototype.expectPromise = function(e, t) {
                return t = r.extend({}, t, {
                    action: e,
                    returnsPromise: !0
                }), this.run(t)
            }, n.prototype.error = function(e) {
                return null == e && (e = {}), "string" == typeof e && (e = {
                    message: e
                }), e.type = "error", this.post(e)
            }, n.prototype.info = function(e) {
                return null == e && (e = {}), "string" == typeof e && (e = {
                    message: e
                }), e.type = "info", this.post(e)
            }, n.prototype.success = function(e) {
                return null == e && (e = {}), "string" == typeof e && (e = {
                    message: e
                }), e.type = "success", this.post(e)
            }, n
        }(o), e.fn.messenger = function() {
            var n, i, a, s, l, u, d, c;
            return a = arguments[0], i = 2 <= arguments.length ? f.call(arguments, 1) : [], null == a && (a = {}), n = this, null != a && r.isString(a) ? (c = n.data("messenger"))[a].apply(c, i) : (l = a, null == n.data("messenger") && (o = null != (u = null != (d = Messenger.themes[l.theme]) ? d.Messenger : void 0) ? u : t, n.data("messenger", s = new o(e.extend({
                el: n
            }, l))), s.render()), n.data("messenger"))
        }, window.Messenger._call = function(t) {
            var n, i, a, r, s, o, l, u, d, c, h;
            if (o = {
                    extraClasses: "messenger-fixed messenger-on-bottom messenger-on-right",
                    theme: "future",
                    maxMessages: 9,
                    parentLocations: ["body"]
                }, t = e.extend(o, e._messengerDefaults, Messenger.options, t), null != t.theme && (t.extraClasses += " messenger-theme-" + t.theme), l = t.instance || Messenger.instance, null == t.instance) {
                for (d = t.parentLocations, i = null, a = null, c = 0, h = d.length; h > c; c++)
                    if (u = d[c], i = e(u), i.length) {
                        r = u;
                        break
                    }
                l ? e(l._location).is(e(r)) || (l.$el.detach(), i.prepend(l.$el)) : (n = e("<ul>"), i.prepend(n), l = n.messenger(t), l._location = r, Messenger.instance = l)
            }
            return null != l._addedClasses && l.$el.removeClass(l._addedClasses), l.$el.addClass(s = "" + l.className + " " + t.extraClasses), l._addedClasses = s, l
        }, e.extend(Messenger, {
            Message: a,
            Messenger: t,
            themes: null != (d = Messenger.themes) ? d : {}
        }), e.globalMessenger = window.Messenger = Messenger
    }.call(this),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(e) : "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = e() : "undefined" != typeof Package ? Sortable = e() : window.Sortable = e()
    }(function() {
        "use strict";

        function e(e, t) {
            this.el = e, this.options = t = t || {};
            var i = {
                group: Math.random(),
                sort: !0,
                disabled: !1,
                store: null,
                handle: null,
                scroll: !0,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                draggable: /[uo]l/i.test(e.nodeName) ? "li" : ">*",
                ghostClass: "sortable-ghost",
                ignore: "a, img",
                filter: null,
                animation: 0,
                setData: function(e, t) {
                    e.setData("Text", t.textContent)
                }
            };
            for (var a in i) !(a in t) && (t[a] = i[a]);
            var s = t.group;
            s && "object" == typeof s || (s = t.group = {
                name: s
            }), ["pull", "put"].forEach(function(e) {
                e in s || (s[e] = !0)
            }), O.forEach(function(i) {
                t[i] = n(this, t[i] || W), r(e, i.substr(2).toLowerCase(), t[i])
            }, this), e[S] = s.name + " " + (s.put.join ? s.put.join(" ") : "");
            for (var o in this) "_" === o.charAt(0) && (this[o] = n(this, this[o]));
            r(e, "mousedown", this._onTapStart), r(e, "touchstart", this._onTapStart), E && r(e, "selectstart", this._onTapStart), r(e, "dragover", this._onDragOver), r(e, "dragenter", this._onDragOver), N.push(this._onDragOver), t.store && this.sort(t.store.get(this))
        }

        function t(e) {
            v && v.state !== e && (l(v, "display", e ? "none" : ""), !e && v.state && M.insertBefore(v, _), v.state = e)
        }

        function n(e, t) {
            var n = $.call(arguments, 2);
            return t.bind ? t.bind.apply(t, [e].concat(n)) : function() {
                return t.apply(e, n.concat($.call(arguments)))
            }
        }

        function i(e, t, n) {
            if (e) {
                n = n || j, t = t.split(".");
                var i = t.shift().toUpperCase(),
                    a = new RegExp("\\s(" + t.join("|") + ")\\s", "g");
                do
                    if (">*" === i && e.parentNode === n || ("" === i || e.nodeName == i) && (!t.length || ((" " + e.className + " ").match(a) || []).length == t.length)) return e;
                while (e !== n && (e = e.parentNode))
            }
            return null
        }

        function a(e) {
            e.dataTransfer.dropEffect = "move", e.preventDefault()
        }

        function r(e, t, n) {
            e.addEventListener(t, n, !1)
        }

        function s(e, t, n) {
            e.removeEventListener(t, n, !1)
        }

        function o(e, t, n) {
            if (e)
                if (e.classList) e.classList[n ? "add" : "remove"](t);
                else {
                    var i = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                    e.className = i + (n ? " " + t : "")
                }
        }

        function l(e, t, n) {
            var i = e && e.style;
            if (i) {
                if (void 0 === n) return j.defaultView && j.defaultView.getComputedStyle ? n = j.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), void 0 === t ? n : n[t];
                t in i || (t = "-webkit-" + t), i[t] = n + ("string" == typeof n ? "" : "px")
            }
        }

        function u(e, t, n) {
            if (e) {
                var i = e.getElementsByTagName(t),
                    a = 0,
                    r = i.length;
                if (n)
                    for (; r > a; a++) n(i[a], a);
                return i
            }
            return []
        }

        function d(e) {
            e.draggable = !1
        }

        function c() {
            A = !1
        }

        function h(e, t) {
            var n = e.lastElementChild,
                i = n.getBoundingClientRect();
            return t.clientY - (i.top + i.height) > 5 && n
        }

        function f(e) {
            for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, i = 0; n--;) i += t.charCodeAt(n);
            return i.toString(36)
        }

        function p(e) {
            for (var t = 0; e && (e = e.previousElementSibling) && "TEMPLATE" !== e.nodeName;) t++;
            return t
        }

        function m(e, t) {
            var n, i;
            return function() {
                void 0 === n && (n = arguments, i = this, setTimeout(function() {
                    1 === n.length ? e.call(i, n[0]) : e.apply(i, n), n = void 0
                }, t))
            }
        }
        var _, g, y, v, M, L, b, w, T, Y, k, D, x = {},
            S = "Sortable" + (new Date).getTime(),
            C = window,
            j = C.document,
            P = C.parseInt,
            E = !!j.createElement("div").dragDrop,
            A = !1,
            F = function(e, t, n, i, a, r) {
                var s = j.createEvent("Event");
                s.initEvent(t, !0, !0), s.item = n || e, s.from = i || e, s.oldIndex = a, s.newIndex = r, e.dispatchEvent(s)
            },
            O = "onAdd onUpdate onRemove onStart onEnd onFilter onSort".split(" "),
            W = function() {},
            H = Math.abs,
            $ = [].slice,
            N = [];
        return e.prototype = {
            constructor: e,
            _dragStarted: function() {
                o(_, this.options.ghostClass, !0), e.active = this, F(M, "start", _, M, g)
            },
            _onTapStart: function(e) {
                var t = e.type,
                    n = e.touches && e.touches[0],
                    a = (n || e).target,
                    s = a,
                    o = this.options,
                    c = this.el,
                    h = o.filter;
                if (!("mousedown" === t && 0 !== e.button || o.disabled)) {
                    if (o.handle && (a = i(a, o.handle, c)), a = i(a, o.draggable, c), g = p(a), "function" == typeof h) {
                        if (h.call(this, e, a, this)) return F(s, "filter", a, c, g), void e.preventDefault()
                    } else if (h && (h = h.split(",").some(function(e) {
                            return e = i(s, e.trim(), c), e ? (F(e, "filter", a, c, g), !0) : void 0
                        }))) return void e.preventDefault();
                    if (a && !_ && a.parentNode === c) {
                        "selectstart" === t && a.dragDrop(), k = e, M = this.el, _ = a, b = _.nextSibling, Y = this.options.group, _.draggable = !0, o.ignore.split(",").forEach(function(e) {
                            u(a, e.trim(), d)
                        }), n && (k = {
                            target: a,
                            clientX: n.clientX,
                            clientY: n.clientY
                        }, this._onDragStart(k, !0), e.preventDefault()), r(j, "mouseup", this._onDrop), r(j, "touchend", this._onDrop), r(j, "touchcancel", this._onDrop), r(_, "dragend", this), r(M, "dragstart", this._onDragStart), r(j, "dragover", this);
                        try {
                            j.selection ? j.selection.empty() : window.getSelection().removeAllRanges()
                        } catch (f) {}
                        "clone" == Y.pull && (v = _.cloneNode(!0), l(v, "display", "none"), M.insertBefore(v, _))
                    }
                }
            },
            _emulateDragOver: function() {
                if (D) {
                    l(y, "display", "none");
                    var e = j.elementFromPoint(D.clientX, D.clientY),
                        t = e,
                        n = this.options.group.name,
                        i = N.length;
                    if (t)
                        do {
                            if ((" " + t[S] + " ").indexOf(n) > -1) {
                                for (; i--;) N[i]({
                                    clientX: D.clientX,
                                    clientY: D.clientY,
                                    target: e,
                                    rootEl: t
                                });
                                break
                            }
                            e = t
                        } while (t = t.parentNode);
                    l(y, "display", "")
                }
            },
            _onTouchMove: function(e) {
                if (k) {
                    var t = e.touches[0],
                        n = t.clientX - k.clientX,
                        i = t.clientY - k.clientY,
                        a = "translate3d(" + n + "px," + i + "px,0)";
                    D = t, l(y, "webkitTransform", a), l(y, "mozTransform", a), l(y, "msTransform", a), l(y, "transform", a), this._onDrag(t), e.preventDefault()
                }
            },
            _onDragStart: function(e, t) {
                var n = e.dataTransfer,
                    i = this.options;
                if (this._offUpEvents(), t) {
                    var a, s = _.getBoundingClientRect(),
                        o = l(_);
                    y = _.cloneNode(!0), l(y, "top", s.top - P(o.marginTop, 10)), l(y, "left", s.left - P(o.marginLeft, 10)), l(y, "width", s.width), l(y, "height", s.height), l(y, "opacity", "0.8"), l(y, "position", "fixed"), l(y, "zIndex", "100000"), M.appendChild(y), a = y.getBoundingClientRect(), l(y, "width", 2 * s.width - a.width), l(y, "height", 2 * s.height - a.height), r(j, "touchmove", this._onTouchMove), r(j, "touchend", this._onDrop), r(j, "touchcancel", this._onDrop), this._loopId = setInterval(this._emulateDragOver, 150)
                } else n.effectAllowed = "move", i.setData && i.setData.call(this, n, _), r(j, "drop", this);
                if (L = i.scroll, L === !0) {
                    L = M;
                    do
                        if (L.offsetWidth < L.scrollWidth || L.offsetHeight < L.scrollHeight) break;
                    while (L = L.parentNode)
                }
                setTimeout(this._dragStarted, 0)
            },
            _onDrag: m(function(e) {
                if (M && this.options.scroll) {
                    var t, n, i = this.options,
                        a = i.scrollSensitivity,
                        r = i.scrollSpeed,
                        s = e.clientX,
                        o = e.clientY,
                        l = window.innerWidth,
                        u = window.innerHeight,
                        d = (a >= l - s) - (a >= s),
                        c = (a >= u - o) - (a >= o);
                    d || c ? t = C : L && (t = L, n = L.getBoundingClientRect(), d = (H(n.right - s) <= a) - (H(n.left - s) <= a), c = (H(n.bottom - o) <= a) - (H(n.top - o) <= a)), (x.vx !== d || x.vy !== c || x.el !== t) && (x.el = t, x.vx = d, x.vy = c, clearInterval(x.pid), t && (x.pid = setInterval(function() {
                        t === C ? C.scrollTo(C.scrollX + d * r, C.scrollY + c * r) : (c && (t.scrollTop += c * r), d && (t.scrollLeft += d * r))
                    }, 24)))
                }
            }, 30),
            _onDragOver: function(e) {
                var n, a, r, s = this.el,
                    o = this.options,
                    u = o.group,
                    d = u.put,
                    f = Y === u,
                    p = o.sort;
                if (void 0 !== e.preventDefault && (e.preventDefault(), e.stopPropagation()), !A && Y && (f ? p || (r = !M.contains(_)) : Y.pull && d && (Y.name === u.name || d.indexOf && ~d.indexOf(Y.name))) && (void 0 === e.rootEl || e.rootEl === this.el)) {
                    if (n = i(e.target, o.draggable, s), a = _.getBoundingClientRect(), r) return t(!0), void(v || b ? M.insertBefore(_, v || b) : p || M.appendChild(_));
                    if (0 === s.children.length || s.children[0] === y || s === e.target && (n = h(s, e))) {
                        if (n) {
                            if (n.animated) return;
                            g = n.getBoundingClientRect()
                        }
                        t(f), s.appendChild(_), this._animate(a, _), n && this._animate(g, n)
                    } else if (n && !n.animated && n !== _ && void 0 !== n.parentNode[S]) {
                        w !== n && (w = n, T = l(n));
                        var m, g = n.getBoundingClientRect(),
                            L = g.right - g.left,
                            k = g.bottom - g.top,
                            D = /left|right|inline/.test(T.cssFloat + T.display),
                            x = n.offsetWidth > _.offsetWidth,
                            C = n.offsetHeight > _.offsetHeight,
                            j = (D ? (e.clientX - g.left) / L : (e.clientY - g.top) / k) > .5,
                            P = n.nextElementSibling;
                        A = !0, setTimeout(c, 30), t(f), m = D ? n.previousElementSibling === _ && !x || j && x : P !== _ && !C || j && C, m && !P ? s.appendChild(_) : n.parentNode.insertBefore(_, m ? P : n), this._animate(a, _), this._animate(g, n)
                    }
                }
            },
            _animate: function(e, t) {
                var n = this.options.animation;
                if (n) {
                    var i = t.getBoundingClientRect();
                    l(t, "transition", "none"), l(t, "transform", "translate3d(" + (e.left - i.left) + "px," + (e.top - i.top) + "px,0)"), t.offsetWidth, l(t, "transition", "all " + n + "ms"), l(t, "transform", "translate3d(0,0,0)"), clearTimeout(t.animated), t.animated = setTimeout(function() {
                        l(t, "transition", ""), t.animated = !1
                    }, n)
                }
            },
            _offUpEvents: function() {
                s(j, "mouseup", this._onDrop), s(j, "touchmove", this._onTouchMove), s(j, "touchend", this._onDrop), s(j, "touchcancel", this._onDrop)
            },
            _onDrop: function(t) {
                var n = this.el;
                if (clearInterval(this._loopId), clearInterval(x.pid), s(j, "drop", this), s(j, "dragover", this), s(n, "dragstart", this._onDragStart), this._offUpEvents(), t) {
                    if (t.preventDefault(), t.stopPropagation(), y && y.parentNode.removeChild(y), _) {
                        s(_, "dragend", this);
                        var i = p(_);
                        d(_), o(_, this.options.ghostClass, !1), M !== _.parentNode ? (F(_.parentNode, "sort", _, M, g, i), F(M, "sort", _, M, g, i), F(_, "add", _, M, g, i), F(M, "remove", _, M, g, i)) : _.nextSibling !== b && (F(M, "update", _, M, g, i), F(M, "sort", _, M, g, i), v && v.parentNode.removeChild(v)), e.active && F(M, "end", _, M, g, i)
                    }
                    M = _ = y = b = v = k = D = w = T = Y = e.active = null, this.save()
                }
            },
            handleEvent: function(e) {
                var t = e.type;
                "dragover" === t ? (this._onDrag(e), a(e)) : ("drop" === t || "dragend" === t) && this._onDrop(e)
            },
            toArray: function() {
                for (var e, t = [], n = this.el.children, a = 0, r = n.length; r > a; a++) e = n[a], i(e, this.options.draggable, this.el) && t.push(e.getAttribute("data-id") || f(e));
                return t
            },
            sort: function(e) {
                var t = {},
                    n = this.el;
                this.toArray().forEach(function(e, a) {
                    var r = n.children[a];
                    i(r, this.options.draggable, n) && (t[e] = r)
                }, this), e.forEach(function(e) {
                    t[e] && (n.removeChild(t[e]), n.appendChild(t[e]))
                })
            },
            save: function() {
                var e = this.options.store;
                e && e.set(this)
            },
            closest: function(e, t) {
                return i(e, t || this.options.draggable, this.el)
            },
            option: function(e, t) {
                var n = this.options;
                return void 0 === t ? n[e] : void(n[e] = t)
            },
            destroy: function() {
                var e = this.el,
                    t = this.options;
                O.forEach(function(n) {
                    s(e, n.substr(2).toLowerCase(), t[n])
                }), s(e, "mousedown", this._onTapStart), s(e, "touchstart", this._onTapStart), s(e, "selectstart", this._onTapStart), s(e, "dragover", this._onDragOver), s(e, "dragenter", this._onDragOver), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(e) {
                    e.removeAttribute("draggable")
                }), N.splice(N.indexOf(this._onDragOver), 1), this._onDrop(), this.el = null
            }
        }, e.utils = {
            on: r,
            off: s,
            css: l,
            find: u,
            bind: n,
            is: function(e, t) {
                return !!i(e, t, e)
            },
            throttle: m,
            closest: i,
            toggleClass: o,
            dispatchEvent: F,
            index: p
        }, e.version = "1.0.0", e.create = function(t, n) {
            return new e(t, n)
        }, e
    }),
    function(e, t) {
        var n = 1e3,
            i = !1,
            a = e([]),
            r = function() {
                l.resume()
            },
            s = function(n, i) {
                var r = n.data("livestampdata");
                if ("number" == typeof i && (i *= 1e3), n.removeAttr("data-livestamp").removeData("livestamp"), i = t(i), t.isMoment(i) && !isNaN(+i)) {
                    var s = e.extend({}, {
                        original: n.contents()
                    }, r);
                    s.moment = t(i), n.data("livestampdata", s).empty(), a.push(n[0])
                }
            },
            o = function() {
                i || (l.update(), setTimeout(o, n))
            },
            l = {
                update: function() {
                    e("[data-livestamp]").each(function() {
                        var t = e(this);
                        s(t, t.data("livestamp"))
                    });
                    var n = [];
                    a.each(function() {
                        var i = e(this),
                            a = i.data("livestampdata");
                        if (void 0 === a) n.push(this);
                        else if (t.isMoment(a.moment)) {
                            var r = i.html(),
                                s = a.moment.fromNow();
                            if (r != s) {
                                var o = e.Event("change.livestamp");
                                i.trigger(o, [r, s]), o.isDefaultPrevented() || i.html(s)
                            }
                        }
                    }), a = a.not(n)
                },
                pause: function() {
                    i = !0
                },
                resume: function() {
                    i = !1, o()
                },
                interval: function(e) {
                    return void 0 === e ? n : void(n = e)
                }
            },
            u = {
                add: function(n, i) {
                    return "number" == typeof i && (i *= 1e3), i = t(i), t.isMoment(i) && !isNaN(+i) && (n.each(function() {
                        s(e(this), i)
                    }), l.update()), n
                },
                destroy: function(t) {
                    return a = a.not(t), t.each(function() {
                        var n = e(this),
                            i = n.data("livestampdata");
                        return void 0 === i ? t : void n.html(i.original ? i.original : "").removeData("livestampdata")
                    }), t
                },
                isLivestamp: function(e) {
                    return void 0 !== e.data("livestampdata")
                }
            };
        e.livestamp = l, e(r), e.fn.livestamp = function(e, t) {
            return u[e] || (t = e, e = "add"), u[e](this, t)
        }
    }(jQuery, moment), jQuery && function(e) {
        function t(t, n) {
            var i = e('<div class="minicolors" />'),
                a = e.minicolors.defaults;
            t.data("minicolors-initialized") || (n = e.extend(!0, {}, a, n), i.addClass("minicolors-theme-" + n.theme).toggleClass("minicolors-with-opacity", n.opacity).toggleClass("minicolors-no-data-uris", n.dataUris !== !0), void 0 !== n.position && e.each(n.position.split(" "), function() {
                i.addClass("minicolors-position-" + this)
            }), t.addClass("minicolors-input").data("minicolors-initialized", !1).data("minicolors-settings", n).prop("size", 7).wrap(i).after('<div class="minicolors-panel minicolors-slider-' + n.control + '"><div class="minicolors-slider minicolors-sprite"><div class="minicolors-picker"></div></div><div class="minicolors-opacity-slider minicolors-sprite"><div class="minicolors-picker"></div></div><div class="minicolors-grid minicolors-sprite"><div class="minicolors-grid-inner"></div><div class="minicolors-picker"><div></div></div></div></div>'), n.inline || (t.after('<span class="minicolors-swatch minicolors-sprite"><span class="minicolors-swatch-color"></span></span>'), t.next(".minicolors-swatch").on("click", function(e) {
                e.preventDefault(), t.focus()
            })), t.parent().find(".minicolors-panel").on("selectstart", function() {
                return !1
            }).end(), n.inline && t.parent().addClass("minicolors-inline"), o(t, !1), t.data("minicolors-initialized", !0))
        }

        function n(e) {
            var t = e.parent();
            e.removeData("minicolors-initialized").removeData("minicolors-settings").removeProp("size").removeClass("minicolors-input"), t.before(e).remove()
        }

        function i(e) {
            var t = e.parent(),
                n = t.find(".minicolors-panel"),
                i = e.data("minicolors-settings");
            !e.data("minicolors-initialized") || e.prop("disabled") || t.hasClass("minicolors-inline") || t.hasClass("minicolors-focus") || (a(), t.addClass("minicolors-focus"), n.stop(!0, !0).fadeIn(i.showSpeed, function() {
                i.show && i.show.call(e.get(0))
            }))
        }

        function a() {
            e(".minicolors-focus").each(function() {
                var t = e(this),
                    n = t.find(".minicolors-input"),
                    i = t.find(".minicolors-panel"),
                    a = n.data("minicolors-settings");
                i.fadeOut(a.hideSpeed, function() {
                    a.hide && a.hide.call(n.get(0)), t.removeClass("minicolors-focus")
                })
            })
        }

        function r(e, t, n) {
            var i, a, r, o, l = e.parents(".minicolors").find(".minicolors-input"),
                u = l.data("minicolors-settings"),
                d = e.find("[class$=-picker]"),
                c = e.offset().left,
                h = e.offset().top,
                f = Math.round(t.pageX - c),
                p = Math.round(t.pageY - h),
                m = n ? u.animationSpeed : 0;
            t.originalEvent.changedTouches && (f = t.originalEvent.changedTouches[0].pageX - c, p = t.originalEvent.changedTouches[0].pageY - h), 0 > f && (f = 0), 0 > p && (p = 0), f > e.width() && (f = e.width()), p > e.height() && (p = e.height()), e.parent().is(".minicolors-slider-wheel") && d.parent().is(".minicolors-grid") && (i = 75 - f, a = 75 - p, r = Math.sqrt(i * i + a * a), o = Math.atan2(a, i), 0 > o && (o += 2 * Math.PI), r > 75 && (r = 75, f = 75 - 75 * Math.cos(o), p = 75 - 75 * Math.sin(o)), f = Math.round(f), p = Math.round(p)), e.is(".minicolors-grid") ? d.stop(!0).animate({
                top: p + "px",
                left: f + "px"
            }, m, u.animationEasing, function() {
                s(l, e)
            }) : d.stop(!0).animate({
                top: p + "px"
            }, m, u.animationEasing, function() {
                s(l, e)
            })
        }

        function s(e, t) {
            function n(e, t) {
                var n, i;
                return e.length && t ? (n = e.offset().left, i = e.offset().top, {
                    x: n - t.offset().left + e.outerWidth() / 2,
                    y: i - t.offset().top + e.outerHeight() / 2
                }) : null
            }
            var i, a, r, s, o, u, d, h = e.val(),
                p = e.attr("data-opacity"),
                m = e.parent(),
                g = e.data("minicolors-settings"),
                y = m.find(".minicolors-swatch"),
                v = m.find(".minicolors-grid"),
                M = m.find(".minicolors-slider"),
                L = m.find(".minicolors-opacity-slider"),
                b = v.find("[class$=-picker]"),
                w = M.find("[class$=-picker]"),
                T = L.find("[class$=-picker]"),
                Y = n(b, v),
                k = n(w, M),
                D = n(T, L);
            if (t.is(".minicolors-grid, .minicolors-slider")) {
                switch (g.control) {
                    case "wheel":
                        s = v.width() / 2 - Y.x, o = v.height() / 2 - Y.y, u = Math.sqrt(s * s + o * o), d = Math.atan2(o, s), 0 > d && (d += 2 * Math.PI), u > 75 && (u = 75, Y.x = 69 - 75 * Math.cos(d), Y.y = 69 - 75 * Math.sin(d)), a = f(u / .75, 0, 100), i = f(180 * d / Math.PI, 0, 360), r = f(100 - Math.floor(k.y * (100 / M.height())), 0, 100), h = _({
                            h: i,
                            s: a,
                            b: r
                        }), M.css("backgroundColor", _({
                            h: i,
                            s: a,
                            b: 100
                        }));
                        break;
                    case "saturation":
                        i = f(parseInt(Y.x * (360 / v.width()), 10), 0, 360), a = f(100 - Math.floor(k.y * (100 / M.height())), 0, 100), r = f(100 - Math.floor(Y.y * (100 / v.height())), 0, 100), h = _({
                            h: i,
                            s: a,
                            b: r
                        }), M.css("backgroundColor", _({
                            h: i,
                            s: 100,
                            b: r
                        })), m.find(".minicolors-grid-inner").css("opacity", a / 100);
                        break;
                    case "brightness":
                        i = f(parseInt(Y.x * (360 / v.width()), 10), 0, 360), a = f(100 - Math.floor(Y.y * (100 / v.height())), 0, 100), r = f(100 - Math.floor(k.y * (100 / M.height())), 0, 100), h = _({
                            h: i,
                            s: a,
                            b: r
                        }), M.css("backgroundColor", _({
                            h: i,
                            s: a,
                            b: 100
                        })), m.find(".minicolors-grid-inner").css("opacity", 1 - r / 100);
                        break;
                    default:
                        i = f(360 - parseInt(k.y * (360 / M.height()), 10), 0, 360), a = f(Math.floor(Y.x * (100 / v.width())), 0, 100), r = f(100 - Math.floor(Y.y * (100 / v.height())), 0, 100), h = _({
                            h: i,
                            s: a,
                            b: r
                        }), v.css("backgroundColor", _({
                            h: i,
                            s: 100,
                            b: 100
                        }))
                }
                e.val(c(h, g.letterCase))
            }
            t.is(".minicolors-opacity-slider") && (p = g.opacity ? parseFloat(1 - D.y / L.height()).toFixed(2) : 1, g.opacity && e.attr("data-opacity", p)), y.find("SPAN").css({
                backgroundColor: h,
                opacity: p
            }), l(e, h, p)
        }

        function o(e, t) {
            var n, i, a, r, s, o, u, d = e.parent(),
                p = e.data("minicolors-settings"),
                m = d.find(".minicolors-swatch"),
                y = d.find(".minicolors-grid"),
                v = d.find(".minicolors-slider"),
                M = d.find(".minicolors-opacity-slider"),
                L = y.find("[class$=-picker]"),
                b = v.find("[class$=-picker]"),
                w = M.find("[class$=-picker]");
            switch (n = c(h(e.val(), !0), p.letterCase), n || (n = c(h(p.defaultValue, !0), p.letterCase)), i = g(n), t || e.val(n), p.opacity && (a = "" === e.attr("data-opacity") ? 1 : f(parseFloat(e.attr("data-opacity")).toFixed(2), 0, 1), isNaN(a) && (a = 1), e.attr("data-opacity", a), m.find("SPAN").css("opacity", a), s = f(M.height() - M.height() * a, 0, M.height()), w.css("top", s + "px")), m.find("SPAN").css("backgroundColor", n), p.control) {
                case "wheel":
                    o = f(Math.ceil(.75 * i.s), 0, y.height() / 2), u = i.h * Math.PI / 180, r = f(75 - Math.cos(u) * o, 0, y.width()), s = f(75 - Math.sin(u) * o, 0, y.height()), L.css({
                        top: s + "px",
                        left: r + "px"
                    }), s = 150 - i.b / (100 / y.height()), "" === n && (s = 0), b.css("top", s + "px"), v.css("backgroundColor", _({
                        h: i.h,
                        s: i.s,
                        b: 100
                    }));
                    break;
                case "saturation":
                    r = f(5 * i.h / 12, 0, 150), s = f(y.height() - Math.ceil(i.b / (100 / y.height())), 0, y.height()), L.css({
                        top: s + "px",
                        left: r + "px"
                    }), s = f(v.height() - i.s * (v.height() / 100), 0, v.height()), b.css("top", s + "px"), v.css("backgroundColor", _({
                        h: i.h,
                        s: 100,
                        b: i.b
                    })), d.find(".minicolors-grid-inner").css("opacity", i.s / 100);
                    break;
                case "brightness":
                    r = f(5 * i.h / 12, 0, 150), s = f(y.height() - Math.ceil(i.s / (100 / y.height())), 0, y.height()), L.css({
                        top: s + "px",
                        left: r + "px"
                    }), s = f(v.height() - i.b * (v.height() / 100), 0, v.height()), b.css("top", s + "px"), v.css("backgroundColor", _({
                        h: i.h,
                        s: i.s,
                        b: 100
                    })), d.find(".minicolors-grid-inner").css("opacity", 1 - i.b / 100);
                    break;
                default:
                    r = f(Math.ceil(i.s / (100 / y.width())), 0, y.width()), s = f(y.height() - Math.ceil(i.b / (100 / y.height())), 0, y.height()), L.css({
                        top: s + "px",
                        left: r + "px"
                    }), s = f(v.height() - i.h / (360 / v.height()), 0, v.height()), b.css("top", s + "px"), y.css("backgroundColor", _({
                        h: i.h,
                        s: 100,
                        b: 100
                    }))
            }
            e.data("minicolors-initialized") && l(e, n, a)
        }

        function l(e, t, n) {
            var i = e.data("minicolors-settings"),
                a = e.data("minicolors-lastChange");
            a && a.hex === t && a.opacity === n || (e.data("minicolors-lastChange", {
                hex: t,
                opacity: n
            }), i.change && (i.changeDelay ? (clearTimeout(e.data("minicolors-changeTimeout")), e.data("minicolors-changeTimeout", setTimeout(function() {
                i.change.call(e.get(0), t, n)
            }, i.changeDelay))) : i.change.call(e.get(0), t, n)), e.trigger("change").trigger("input"))
        }

        function u(t) {
            var n = h(e(t).val(), !0),
                i = v(n),
                a = e(t).attr("data-opacity");
            return i ? (void 0 !== a && e.extend(i, {
                a: parseFloat(a)
            }), i) : null
        }

        function d(t, n) {
            var i = h(e(t).val(), !0),
                a = v(i),
                r = e(t).attr("data-opacity");
            return a ? (void 0 === r && (r = 1), n ? "rgba(" + a.r + ", " + a.g + ", " + a.b + ", " + parseFloat(r) + ")" : "rgb(" + a.r + ", " + a.g + ", " + a.b + ")") : null
        }

        function c(e, t) {
            return "uppercase" === t ? e.toUpperCase() : e.toLowerCase()
        }

        function h(e, t) {
            return e = e.replace(/[^A-F0-9]/gi, ""), 3 !== e.length && 6 !== e.length ? "" : (3 === e.length && t && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), "#" + e)
        }

        function f(e, t, n) {
            return t > e && (e = t), e > n && (e = n), e
        }

        function p(e) {
            var t = {},
                n = Math.round(e.h),
                i = Math.round(255 * e.s / 100),
                a = Math.round(255 * e.b / 100);
            if (0 === i) t.r = t.g = t.b = a;
            else {
                var r = a,
                    s = (255 - i) * a / 255,
                    o = (r - s) * (n % 60) / 60;
                360 === n && (n = 0), 60 > n ? (t.r = r, t.b = s, t.g = s + o) : 120 > n ? (t.g = r, t.b = s, t.r = r - o) : 180 > n ? (t.g = r, t.r = s, t.b = s + o) : 240 > n ? (t.b = r, t.r = s, t.g = r - o) : 300 > n ? (t.b = r, t.g = s, t.r = s + o) : 360 > n ? (t.r = r, t.g = s, t.b = r - o) : (t.r = 0, t.g = 0, t.b = 0)
            }
            return {
                r: Math.round(t.r),
                g: Math.round(t.g),
                b: Math.round(t.b)
            }
        }

        function m(t) {
            var n = [t.r.toString(16), t.g.toString(16), t.b.toString(16)];
            return e.each(n, function(e, t) {
                1 === t.length && (n[e] = "0" + t)
            }), "#" + n.join("")
        }

        function _(e) {
            return m(p(e))
        }

        function g(e) {
            var t = y(v(e));
            return 0 === t.s && (t.h = 360), t
        }

        function y(e) {
            var t = {
                    h: 0,
                    s: 0,
                    b: 0
                },
                n = Math.min(e.r, e.g, e.b),
                i = Math.max(e.r, e.g, e.b),
                a = i - n;
            return t.b = i, t.s = 0 !== i ? 255 * a / i : 0, t.h = 0 !== t.s ? e.r === i ? (e.g - e.b) / a : e.g === i ? 2 + (e.b - e.r) / a : 4 + (e.r - e.g) / a : -1, t.h *= 60, t.h < 0 && (t.h += 360), t.s *= 100 / 255, t.b *= 100 / 255, t
        }

        function v(e) {
            return e = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16), {
                r: e >> 16,
                g: (65280 & e) >> 8,
                b: 255 & e
            }
        }
        e.minicolors = {
            defaults: {
                animationSpeed: 50,
                animationEasing: "swing",
                change: null,
                changeDelay: 0,
                control: "hue",
                dataUris: !0,
                defaultValue: "",
                hide: null,
                hideSpeed: 100,
                inline: !1,
                letterCase: "lowercase",
                opacity: !1,
                position: "bottom left",
                show: null,
                showSpeed: 100,
                theme: "default"
            }
        }, e.extend(e.fn, {
            minicolors: function(r, s) {
                switch (r) {
                    case "destroy":
                        return e(this).each(function() {
                            n(e(this))
                        }), e(this);
                    case "hide":
                        return a(), e(this);
                    case "opacity":
                        return void 0 === s ? e(this).attr("data-opacity") : (e(this).each(function() {
                            o(e(this).attr("data-opacity", s))
                        }), e(this));
                    case "rgbObject":
                        return u(e(this), "rgbaObject" === r);
                    case "rgbString":
                    case "rgbaString":
                        return d(e(this), "rgbaString" === r);
                    case "settings":
                        return void 0 === s ? e(this).data("minicolors-settings") : (e(this).each(function() {
                            var t = e(this).data("minicolors-settings") || {};
                            n(e(this)), e(this).minicolors(e.extend(!0, t, s))
                        }), e(this));
                    case "show":
                        return i(e(this).eq(0)), e(this);
                    case "value":
                        return void 0 === s ? e(this).val() : (e(this).each(function() {
                            o(e(this).val(s))
                        }), e(this));
                    default:
                        return "create" !== r && (s = r), e(this).each(function() {
                            t(e(this), s)
                        }), e(this)
                }
            }
        }), e(document).on("mousedown.minicolors touchstart.minicolors", function(t) {
            e(t.target).parents().add(t.target).hasClass("minicolors") || a()
        }).on("mousedown.minicolors touchstart.minicolors", ".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider", function(t) {
            var n = e(this);
            t.preventDefault(), e(document).data("minicolors-target", n), r(n, t, !0)
        }).on("mousemove.minicolors touchmove.minicolors", function(t) {
            var n = e(document).data("minicolors-target");
            n && r(n, t)
        }).on("mouseup.minicolors touchend.minicolors", function() {
            e(this).removeData("minicolors-target")
        }).on("mousedown.minicolors touchstart.minicolors", ".minicolors-swatch", function(t) {
            var n = e(this).parent().find(".minicolors-input");
            t.preventDefault(), i(n)
        }).on("focus.minicolors", ".minicolors-input", function() {
            var t = e(this);
            t.data("minicolors-initialized") && i(t)
        }).on("blur.minicolors", ".minicolors-input", function() {
            var t = e(this),
                n = t.data("minicolors-settings");
            t.data("minicolors-initialized") && (t.val(h(t.val(), !0)), "" === t.val() && t.val(h(n.defaultValue, !0)), t.val(c(t.val(), n.letterCase)))
        }).on("keydown.minicolors", ".minicolors-input", function(t) {
            var n = e(this);
            if (n.data("minicolors-initialized")) switch (t.keyCode) {
                case 9:
                    a();
                    break;
                case 13:
                case 27:
                    a(), n.blur()
            }
        }).on("keyup.minicolors", ".minicolors-input", function() {
            var t = e(this);
            t.data("minicolors-initialized") && o(t, !0)
        }).on("paste.minicolors", ".minicolors-input", function() {
            var t = e(this);
            t.data("minicolors-initialized") && setTimeout(function() {
                o(t, !0)
            }, 1)
        })
    }(jQuery),
    function(e, t) {
        if ("function" == typeof define && define.amd) define(["exports", "jquery"], function(e, n) {
            return t(e, n)
        });
        else if ("undefined" != typeof exports) {
            var n = require("jquery");
            t(exports, n)
        } else t(e, e.jQuery || e.Zepto || e.ender || e.$)
    }(this, function(e, t) {
        function n(e, n) {
            function a(e, t, n) {
                return e[t] = n, e
            }

            function r(e, t) {
                for (var n, r = e.match(i.key); void 0 !== (n = r.pop());)
                    if (i.push.test(n)) {
                        var o = s(e.replace(/\[\]$/, ""));
                        t = a([], o, t)
                    } else i.fixed.test(n) ? t = a([], n, t) : i.named.test(n) && (t = a({}, n, t));
                return t
            }

            function s(e) {
                return void 0 === f[e] && (f[e] = 0), f[e] ++
            }

            function o(e) {
                switch (t('[name="' + e.name + '"]', n).attr("type")) {
                    case "checkbox":
                        return "on" === e.value ? !0 : e.value;
                    default:
                        return e.value
                }
            }

            function l(t) {
                if (!i.validate.test(t.name)) return this;
                var n = r(t.name, o(t));
                return h = e.extend(!0, h, n), this
            }

            function u(t) {
                if (!e.isArray(t)) throw new Error("formSerializer.addPairs expects an Array");
                for (var n = 0, i = t.length; i > n; n++) this.addPair(t[n]);
                return this
            }

            function d() {
                return h
            }

            function c() {
                return JSON.stringify(d())
            }
            var h = {},
                f = {};
            this.addPair = l, this.addPairs = u, this.serialize = d, this.serializeJSON = c
        }
        var i = {
            validate: /^[a-z_][a-z0-9_]*(?:\[(?:\d*|[a-z0-9_]+)\])*$/i,
            key: /[a-z0-9_]+|(?=\[\])/gi,
            push: /^$/,
            fixed: /^\d+$/,
            named: /^[a-z0-9_]+$/i
        };
        return n.patterns = i, n.serializeObject = function() {
            return this.length > 1 ? new Error("jquery-serialize-object can only serialize one form at a time") : new n(t, this).addPairs(this.serializeArray()).serialize()
        }, n.serializeJSON = function() {
            return this.length > 1 ? new Error("jquery-serialize-object can only serialize one form at a time") : new n(t, this).addPairs(this.serializeArray()).serializeJSON()
        }, "undefined" != typeof t.fn && (t.fn.serializeObject = n.serializeObject, t.fn.serializeJSON = n.serializeJSON), e.FormSerializer = n, n
    }),
    function() {
        "use strict";
        var e = this,
            t = e.Chart,
            n = function(e) {
                this.canvas = e.canvas, this.ctx = e;
                this.width = e.canvas.width, this.height = e.canvas.height;
                return this.aspectRatio = this.width / this.height, i.retinaScale(this), this
            };
        n.defaults = {
            global: {
                animation: !0,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                showScale: !0,
                scaleOverride: !1,
                scaleSteps: null,
                scaleStepWidth: null,
                scaleStartValue: null,
                scaleLineColor: "rgba(0,0,0,.1)",
                scaleLineWidth: 1,
                scaleShowLabels: !0,
                scaleLabel: "<%=value%>",
                scaleIntegersOnly: !0,
                scaleBeginAtZero: !1,
                scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                scaleFontSize: 12,
                scaleFontStyle: "normal",
                scaleFontColor: "#666",
                responsive: !1,
                maintainAspectRatio: !0,
                showTooltips: !0,
                customTooltips: !1,
                tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                tooltipFillColor: "rgba(0,0,0,0.8)",
                tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipFontSize: 14,
                tooltipFontStyle: "normal",
                tooltipFontColor: "#fff",
                tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipTitleFontSize: 14,
                tooltipTitleFontStyle: "bold",
                tooltipTitleFontColor: "#fff",
                tooltipYPadding: 6,
                tooltipXPadding: 6,
                tooltipCaretSize: 8,
                tooltipCornerRadius: 6,
                tooltipXOffset: 10,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                multiTooltipTemplate: "<%= value %>",
                multiTooltipKeyBackground: "#fff",
                onAnimationProgress: function() {},
                onAnimationComplete: function() {}
            }
        }, n.types = {};
        var i = n.helpers = {},
            a = i.each = function(e, t, n) {
                var i = Array.prototype.slice.call(arguments, 3);
                if (e)
                    if (e.length === +e.length) {
                        var a;
                        for (a = 0; a < e.length; a++) t.apply(n, [e[a], a].concat(i))
                    } else
                        for (var r in e) t.apply(n, [e[r], r].concat(i))
            },
            r = i.clone = function(e) {
                var t = {};
                return a(e, function(n, i) {
                    e.hasOwnProperty(i) && (t[i] = n)
                }), t
            },
            s = i.extend = function(e) {
                return a(Array.prototype.slice.call(arguments, 1), function(t) {
                    a(t, function(n, i) {
                        t.hasOwnProperty(i) && (e[i] = n)
                    })
                }), e
            },
            o = i.merge = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return e.unshift({}), s.apply(null, e)
            },
            l = i.indexOf = function(e, t) {
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (var n = 0; n < e.length; n++)
                    if (e[n] === t) return n;
                return -1
            },
            u = (i.where = function(e, t) {
                var n = [];
                return i.each(e, function(e) {
                    t(e) && n.push(e)
                }), n
            }, i.findNextWhere = function(e, t, n) {
                n || (n = -1);
                for (var i = n + 1; i < e.length; i++) {
                    var a = e[i];
                    if (t(a)) return a
                }
            }, i.findPreviousWhere = function(e, t, n) {
                n || (n = e.length);
                for (var i = n - 1; i >= 0; i--) {
                    var a = e[i];
                    if (t(a)) return a
                }
            }, i.inherits = function(e) {
                var t = this,
                    n = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
                        return t.apply(this, arguments)
                    },
                    i = function() {
                        this.constructor = n
                    };
                return i.prototype = t.prototype, n.prototype = new i, n.extend = u, e && s(n.prototype, e), n.__super__ = t.prototype, n
            }),
            d = i.noop = function() {},
            c = i.uid = function() {
                var e = 0;
                return function() {
                    return "chart-" + e++
                }
            }(),
            h = i.warn = function(e) {
                window.console && "function" == typeof window.console.warn && console.warn(e)
            },
            f = i.amd = "function" == typeof define && define.amd,
            p = i.isNumber = function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            m = i.max = function(e) {
                return Math.max.apply(Math, e)
            },
            _ = i.min = function(e) {
                return Math.min.apply(Math, e)
            },
            g = (i.cap = function(e, t, n) {
                if (p(t)) {
                    if (e > t) return t
                } else if (p(n) && n > e) return n;
                return e
            }, i.getDecimalPlaces = function(e) {
                return e % 1 !== 0 && p(e) ? e.toString().split(".")[1].length : 0
            }),
            y = i.radians = function(e) {
                return e * (Math.PI / 180)
            },
            v = (i.getAngleFromPoint = function(e, t) {
                var n = t.x - e.x,
                    i = t.y - e.y,
                    a = Math.sqrt(n * n + i * i),
                    r = 2 * Math.PI + Math.atan2(i, n);
                return 0 > n && 0 > i && (r += 2 * Math.PI), {
                    angle: r,
                    distance: a
                }
            }, i.aliasPixel = function(e) {
                return e % 2 === 0 ? 0 : .5
            }),
            M = (i.splineCurve = function(e, t, n, i) {
                var a = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)),
                    r = Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2)),
                    s = i * a / (a + r),
                    o = i * r / (a + r);
                return {
                    inner: {
                        x: t.x - s * (n.x - e.x),
                        y: t.y - s * (n.y - e.y)
                    },
                    outer: {
                        x: t.x + o * (n.x - e.x),
                        y: t.y + o * (n.y - e.y)
                    }
                }
            }, i.calculateOrderOfMagnitude = function(e) {
                return Math.floor(Math.log(e) / Math.LN10)
            }),
            L = (i.calculateScaleRange = function(e, t, n, i, a) {
                var r = 2,
                    s = Math.floor(t / (1.5 * n)),
                    o = r >= s,
                    l = m(e),
                    u = _(e);
                l === u && (l += .5, u >= .5 && !i ? u -= .5 : l += .5);
                for (var d = Math.abs(l - u), c = M(d), h = Math.ceil(l / (1 * Math.pow(10, c))) * Math.pow(10, c), f = i ? 0 : Math.floor(u / (1 * Math.pow(10, c))) * Math.pow(10, c), p = h - f, g = Math.pow(10, c), y = Math.round(p / g);
                    (y > s || s > 2 * y) && !o;)
                    if (y > s) g *= 2, y = Math.round(p / g), y % 1 !== 0 && (o = !0);
                    else if (a && c >= 0) {
                    if (g / 2 % 1 !== 0) break;
                    g /= 2, y = Math.round(p / g)
                } else g /= 2, y = Math.round(p / g);
                return o && (y = r, g = p / y), {
                    steps: y,
                    stepValue: g,
                    min: f,
                    max: f + y * g
                }
            }, i.template = function(e, t) {
                function n(e, t) {
                    var n = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[e] = i[e];
                    return t ? n(t) : n
                }
                if (e instanceof Function) return e(t);
                var i = {};
                return n(e, t)
            }),
            b = (i.generateLabels = function(e, t, n, i) {
                var r = new Array(t);
                return labelTemplateString && a(r, function(t, a) {
                    r[a] = L(e, {
                        value: n + i * (a + 1)
                    })
                }), r
            }, i.easingEffects = {
                linear: function(e) {
                    return e
                },
                easeInQuad: function(e) {
                    return e * e
                },
                easeOutQuad: function(e) {
                    return -1 * e * (e - 2)
                },
                easeInOutQuad: function(e) {
                    return (e /= .5) < 1 ? .5 * e * e : -0.5 * (--e * (e - 2) - 1)
                },
                easeInCubic: function(e) {
                    return e * e * e
                },
                easeOutCubic: function(e) {
                    return 1 * ((e = e / 1 - 1) * e * e + 1)
                },
                easeInOutCubic: function(e) {
                    return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                },
                easeInQuart: function(e) {
                    return e * e * e * e
                },
                easeOutQuart: function(e) {
                    return -1 * ((e = e / 1 - 1) * e * e * e - 1)
                },
                easeInOutQuart: function(e) {
                    return (e /= .5) < 1 ? .5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2)
                },
                easeInQuint: function(e) {
                    return 1 * (e /= 1) * e * e * e * e
                },
                easeOutQuint: function(e) {
                    return 1 * ((e = e / 1 - 1) * e * e * e * e + 1)
                },
                easeInOutQuint: function(e) {
                    return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                },
                easeInSine: function(e) {
                    return -1 * Math.cos(e / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(e) {
                    return 1 * Math.sin(e / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(e) {
                    return -0.5 * (Math.cos(Math.PI * e / 1) - 1)
                },
                easeInExpo: function(e) {
                    return 0 === e ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1))
                },
                easeOutExpo: function(e) {
                    return 1 === e ? 1 : 1 * (-Math.pow(2, -10 * e / 1) + 1)
                },
                easeInOutExpo: function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
                },
                easeInCirc: function(e) {
                    return e >= 1 ? e : -1 * (Math.sqrt(1 - (e /= 1) * e) - 1)
                },
                easeOutCirc: function(e) {
                    return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e)
                },
                easeInOutCirc: function(e) {
                    return (e /= .5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                },
                easeInElastic: function(e) {
                    var t = 1.70158,
                        n = 0,
                        i = 1;
                    return 0 === e ? 0 : 1 == (e /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (1 * e - t) * Math.PI / n)))
                },
                easeOutElastic: function(e) {
                    var t = 1.70158,
                        n = 0,
                        i = 1;
                    return 0 === e ? 0 : 1 == (e /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * e) * Math.sin(2 * (1 * e - t) * Math.PI / n) + 1)
                },
                easeInOutElastic: function(e) {
                    var t = 1.70158,
                        n = 0,
                        i = 1;
                    return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .3 * 1.5), i < Math.abs(1) ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), 1 > e ? -.5 * i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (1 * e - t) * Math.PI / n) : i * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (1 * e - t) * Math.PI / n) * .5 + 1)
                },
                easeInBack: function(e) {
                    var t = 1.70158;
                    return 1 * (e /= 1) * e * ((t + 1) * e - t)
                },
                easeOutBack: function(e) {
                    var t = 1.70158;
                    return 1 * ((e = e / 1 - 1) * e * ((t + 1) * e + t) + 1)
                },
                easeInOutBack: function(e) {
                    var t = 1.70158;
                    return (e /= .5) < 1 ? .5 * e * e * (((t *= 1.525) + 1) * e - t) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
                },
                easeInBounce: function(e) {
                    return 1 - b.easeOutBounce(1 - e)
                },
                easeOutBounce: function(e) {
                    return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : 2 / 2.75 > e ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 * (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                },
                easeInOutBounce: function(e) {
                    return .5 > e ? .5 * b.easeInBounce(2 * e) : .5 * b.easeOutBounce(2 * e - 1) + .5
                }
            }),
            w = i.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                    return window.setTimeout(e, 1e3 / 60)
                }
            }(),
            T = (i.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(e) {
                    return window.clearTimeout(e, 1e3 / 60)
                }
            }(), i.animationLoop = function(e, t, n, i, a, r) {
                var s = 0,
                    o = b[n] || b.linear,
                    l = function() {
                        s++;
                        var n = s / t,
                            u = o(n);
                        e.call(r, u, n, s), i.call(r, u, n), t > s ? r.animationFrame = w(l) : a.apply(r)
                    };
                w(l)
            }, i.getRelativePosition = function(e) {
                var t, n, i = e.originalEvent || e,
                    a = e.currentTarget || e.srcElement,
                    r = a.getBoundingClientRect();
                return i.touches ? (t = i.touches[0].clientX - r.left, n = i.touches[0].clientY - r.top) : (t = i.clientX - r.left, n = i.clientY - r.top), {
                    x: t,
                    y: n
                }
            }, i.addEvent = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
            }),
            Y = i.removeEvent = function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = d
            },
            k = (i.bindEvents = function(e, t, n) {
                e.events || (e.events = {}), a(t, function(t) {
                    e.events[t] = function() {
                        n.apply(e, arguments)
                    }, T(e.chart.canvas, t, e.events[t])
                })
            }, i.unbindEvents = function(e, t) {
                a(t, function(t, n) {
                    Y(e.chart.canvas, n, t)
                })
            }),
            D = i.getMaximumWidth = function(e) {
                var t = e.parentNode;
                return t.clientWidth
            },
            x = i.getMaximumHeight = function(e) {
                var t = e.parentNode;
                return t.clientHeight
            },
            S = (i.getMaximumSize = i.getMaximumWidth, i.retinaScale = function(e) {
                var t = e.ctx,
                    n = e.canvas.width,
                    i = e.canvas.height;
                window.devicePixelRatio && (t.canvas.style.width = n + "px", t.canvas.style.height = i + "px", t.canvas.height = i * window.devicePixelRatio, t.canvas.width = n * window.devicePixelRatio, t.scale(window.devicePixelRatio, window.devicePixelRatio))
            }),
            C = i.clear = function(e) {
                e.ctx.clearRect(0, 0, e.width, e.height)
            },
            j = i.fontString = function(e, t, n) {
                return t + " " + e + "px " + n
            },
            P = i.longestText = function(e, t, n) {
                e.font = t;
                var i = 0;
                return a(n, function(t) {
                    var n = e.measureText(t).width;
                    i = n > i ? n : i
                }), i
            },
            E = i.drawRoundedRectangle = function(e, t, n, i, a, r) {
                e.beginPath(), e.moveTo(t + r, n), e.lineTo(t + i - r, n), e.quadraticCurveTo(t + i, n, t + i, n + r), e.lineTo(t + i, n + a - r), e.quadraticCurveTo(t + i, n + a, t + i - r, n + a), e.lineTo(t + r, n + a), e.quadraticCurveTo(t, n + a, t, n + a - r), e.lineTo(t, n + r), e.quadraticCurveTo(t, n, t + r, n), e.closePath()
            };
        n.instances = {}, n.Type = function(e, t, i) {
            this.options = t, this.chart = i, this.id = c(), n.instances[this.id] = this, t.responsive && this.resize(), this.initialize.call(this, e)
        }, s(n.Type.prototype, {
            initialize: function() {
                return this
            },
            clear: function() {
                return C(this.chart), this
            },
            stop: function() {
                return i.cancelAnimFrame.call(e, this.animationFrame), this
            },
            resize: function(e) {
                this.stop();
                var t = this.chart.canvas,
                    n = D(this.chart.canvas),
                    i = this.options.maintainAspectRatio ? n / this.chart.aspectRatio : x(this.chart.canvas);
                return t.width = this.chart.width = n, t.height = this.chart.height = i, S(this.chart), "function" == typeof e && e.apply(this, Array.prototype.slice.call(arguments, 1)), this
            },
            reflow: d,
            render: function(e) {
                return e && this.reflow(), this.options.animation && !e ? i.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
            },
            generateLegend: function() {
                return L(this.options.legendTemplate, this)
            },
            destroy: function() {
                this.clear(), k(this, this.events);
                var e = this.chart.canvas;
                e.width = this.chart.width, e.height = this.chart.height, e.style.removeProperty ? (e.style.removeProperty("width"), e.style.removeProperty("height")) : (e.style.removeAttribute("width"), e.style.removeAttribute("height")), delete n.instances[this.id]
            },
            showTooltip: function(e, t) {
                "undefined" == typeof this.activeElements && (this.activeElements = []);
                var r = function(e) {
                    var t = !1;
                    return e.length !== this.activeElements.length ? t = !0 : (a(e, function(e, n) {
                        e !== this.activeElements[n] && (t = !0)
                    }, this), t)
                }.call(this, e);
                if (r || t) {
                    if (this.activeElements = e, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), e.length > 0)
                        if (this.datasets && this.datasets.length > 1) {
                            for (var s, o, u = this.datasets.length - 1; u >= 0 && (s = this.datasets[u].points || this.datasets[u].bars || this.datasets[u].segments, o = l(s, e[0]), -1 === o); u--);
                            var d = [],
                                c = [],
                                h = function() {
                                    var e, t, n, a, r, s = [],
                                        l = [],
                                        u = [];
                                    return i.each(this.datasets, function(t) {
                                        e = t.points || t.bars || t.segments, e[o] && e[o].hasValue() && s.push(e[o])
                                    }), i.each(s, function(e) {
                                        l.push(e.x), u.push(e.y), d.push(i.template(this.options.multiTooltipTemplate, e)), c.push({
                                            fill: e._saved.fillColor || e.fillColor,
                                            stroke: e._saved.strokeColor || e.strokeColor
                                        })
                                    }, this), r = _(u), n = m(u), a = _(l), t = m(l), {
                                        x: a > this.chart.width / 2 ? a : t,
                                        y: (r + n) / 2
                                    }
                                }.call(this, o);
                            new n.MultiTooltip({
                                x: h.x,
                                y: h.y,
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                xOffset: this.options.tooltipXOffset,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                titleTextColor: this.options.tooltipTitleFontColor,
                                titleFontFamily: this.options.tooltipTitleFontFamily,
                                titleFontStyle: this.options.tooltipTitleFontStyle,
                                titleFontSize: this.options.tooltipTitleFontSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                labels: d,
                                legendColors: c,
                                legendColorBackground: this.options.multiTooltipKeyBackground,
                                title: e[0].label,
                                chart: this.chart,
                                ctx: this.chart.ctx,
                                custom: this.options.customTooltips
                            }).draw()
                        } else a(e, function(e) {
                            var t = e.tooltipPosition();
                            new n.Tooltip({
                                x: Math.round(t.x),
                                y: Math.round(t.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: L(this.options.tooltipTemplate, e),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this);
                    return this
                }
            },
            toBase64Image: function() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
            }
        }), n.Type.extend = function(e) {
            var t = this,
                i = function() {
                    return t.apply(this, arguments)
                };
            if (i.prototype = r(t.prototype), s(i.prototype, e), i.extend = n.Type.extend, e.name || t.prototype.name) {
                var a = e.name || t.prototype.name,
                    l = n.defaults[t.prototype.name] ? r(n.defaults[t.prototype.name]) : {};
                n.defaults[a] = s(l, e.defaults), n.types[a] = i, n.prototype[a] = function(e, t) {
                    var r = o(n.defaults.global, n.defaults[a], t || {});
                    return new i(e, r, this)
                }
            } else h("Name not provided for this chart, so it hasn't been registered");
            return t
        }, n.Element = function(e) {
            s(this, e), this.initialize.apply(this, arguments), this.save()
        }, s(n.Element.prototype, {
            initialize: function() {},
            restore: function(e) {
                return e ? a(e, function(e) {
                    this[e] = this._saved[e]
                }, this) : s(this, this._saved), this
            },
            save: function() {
                return this._saved = r(this), delete this._saved._saved, this
            },
            update: function(e) {
                return a(e, function(e, t) {
                    this._saved[t] = this[t], this[t] = e
                }, this), this
            },
            transition: function(e, t) {
                return a(e, function(e, n) {
                    this[n] = (e - this._saved[n]) * t + this._saved[n]
                }, this), this
            },
            tooltipPosition: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            hasValue: function() {
                return p(this.value)
            }
        }), n.Element.extend = u, n.Point = n.Element.extend({
            display: !0,
            inRange: function(e, t) {
                var n = this.hitDetectionRadius + this.radius;
                return Math.pow(e - this.x, 2) + Math.pow(t - this.y, 2) < Math.pow(n, 2)
            },
            draw: function() {
                if (this.display) {
                    var e = this.ctx;
                    e.beginPath(), e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), e.closePath(), e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, e.fill(), e.stroke()
                }
            }
        }), n.Arc = n.Element.extend({
            inRange: function(e, t) {
                var n = i.getAngleFromPoint(this, {
                        x: e,
                        y: t
                    }),
                    a = n.angle >= this.startAngle && n.angle <= this.endAngle,
                    r = n.distance >= this.innerRadius && n.distance <= this.outerRadius;
                return a && r
            },
            tooltipPosition: function() {
                var e = this.startAngle + (this.endAngle - this.startAngle) / 2,
                    t = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return {
                    x: this.x + Math.cos(e) * t,
                    y: this.y + Math.sin(e) * t
                }
            },
            draw: function(e) {
                var t = this.ctx;
                t.beginPath(), t.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), t.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.lineJoin = "bevel", this.showStroke && t.stroke()
            }
        }), n.Rectangle = n.Element.extend({
            draw: function() {
                var e = this.ctx,
                    t = this.width / 2,
                    n = this.x - t,
                    i = this.x + t,
                    a = this.base - (this.base - this.y),
                    r = this.strokeWidth / 2;
                this.showStroke && (n += r, i -= r, a += r), e.beginPath(), e.fillStyle = this.fillColor, e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.moveTo(n, this.base), e.lineTo(n, a), e.lineTo(i, a), e.lineTo(i, this.base), e.fill(), this.showStroke && e.stroke()
            },
            height: function() {
                return this.base - this.y
            },
            inRange: function(e, t) {
                return e >= this.x - this.width / 2 && e <= this.x + this.width / 2 && t >= this.y && t <= this.base
            }
        }), n.Tooltip = n.Element.extend({
            draw: function() {
                var e = this.chart.ctx;
                e.font = j(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var t = this.caretPadding = 2,
                    n = e.measureText(this.text).width + 2 * this.xPadding,
                    i = this.fontSize + 2 * this.yPadding,
                    a = i + this.caretHeight + t;
                this.x + n / 2 > this.chart.width ? this.xAlign = "left" : this.x - n / 2 < 0 && (this.xAlign = "right"), this.y - a < 0 && (this.yAlign = "below");
                var r = this.x - n / 2,
                    s = this.y - a;
                if (e.fillStyle = this.fillColor, this.custom) this.custom(this);
                else {
                    switch (this.yAlign) {
                        case "above":
                            e.beginPath(), e.moveTo(this.x, this.y - t), e.lineTo(this.x + this.caretHeight, this.y - (t + this.caretHeight)), e.lineTo(this.x - this.caretHeight, this.y - (t + this.caretHeight)), e.closePath(), e.fill();
                            break;
                        case "below":
                            s = this.y + t + this.caretHeight, e.beginPath(), e.moveTo(this.x, this.y + t), e.lineTo(this.x + this.caretHeight, this.y + t + this.caretHeight), e.lineTo(this.x - this.caretHeight, this.y + t + this.caretHeight), e.closePath(), e.fill()
                    }
                    switch (this.xAlign) {
                        case "left":
                            r = this.x - n + (this.cornerRadius + this.caretHeight);
                            break;
                        case "right":
                            r = this.x - (this.cornerRadius + this.caretHeight)
                    }
                    E(e, r, s, n, i, this.cornerRadius), e.fill(), e.fillStyle = this.textColor, e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.text, r + n / 2, s + i / 2)
                }
            }
        }), n.MultiTooltip = n.Element.extend({
            initialize: function() {
                this.font = j(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = j(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
                var e = this.ctx.measureText(this.title).width,
                    t = P(this.ctx, this.font, this.labels) + this.fontSize + 3,
                    n = m([t, e]);
                this.width = n + 2 * this.xPadding;
                var i = this.height / 2;
                this.y - i < 0 ? this.y = i : this.y + i > this.chart.height && (this.y = this.chart.height - i), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
            },
            getLineHeight: function(e) {
                var t = this.y - this.height / 2 + this.yPadding,
                    n = e - 1;
                return 0 === e ? t + this.titleFontSize / 2 : t + (1.5 * this.fontSize * n + this.fontSize / 2) + 1.5 * this.titleFontSize
            },
            draw: function() {
                if (this.custom) this.custom(this);
                else {
                    E(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                    var e = this.ctx;
                    e.fillStyle = this.fillColor, e.fill(), e.closePath(), e.textAlign = "left", e.textBaseline = "middle", e.fillStyle = this.titleTextColor, e.font = this.titleFont, e.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), e.font = this.font, i.each(this.labels, function(t, n) {
                        e.fillStyle = this.textColor, e.fillText(t, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(n + 1)), e.fillStyle = this.legendColorBackground, e.fillRect(this.x + this.xPadding, this.getLineHeight(n + 1) - this.fontSize / 2, this.fontSize, this.fontSize), e.fillStyle = this.legendColors[n].fill, e.fillRect(this.x + this.xPadding, this.getLineHeight(n + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                    }, this)
                }
            }
        }), n.Scale = n.Element.extend({
            initialize: function() {
                this.fit()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var e = g(this.stepValue), t = 0; t <= this.steps; t++) this.yLabels.push(L(this.templateString, {
                    value: (this.min + t * this.stepValue).toFixed(e)
                }));
                this.yLabelWidth = this.display && this.showLabels ? P(this.ctx, this.font, this.yLabels) : 0
            },
            addXLabel: function(e) {
                this.xLabels.push(e), this.valuesCount++, this.fit()
            },
            removeXLabel: function() {
                this.xLabels.shift(), this.valuesCount--, this.fit()
            },
            fit: function() {
                this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var e, t = this.endPoint - this.startPoint;
                for (this.calculateYRange(t), this.buildYLabels(), this.calculateXLabelRotation(); t > this.endPoint - this.startPoint;) t = this.endPoint - this.startPoint, e = this.yLabelWidth, this.calculateYRange(t), this.buildYLabels(), e < this.yLabelWidth && this.calculateXLabelRotation()
            },
            calculateXLabelRotation: function() {
                this.ctx.font = this.font;
                var e, t, n = this.ctx.measureText(this.xLabels[0]).width,
                    i = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                if (this.xScalePaddingRight = i / 2 + 3, this.xScalePaddingLeft = n / 2 > this.yLabelWidth + 10 ? n / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                    var a, r = P(this.ctx, this.font, this.xLabels);
                    this.xLabelWidth = r;
                    for (var s = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > s && 0 === this.xLabelRotation || this.xLabelWidth > s && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) a = Math.cos(y(this.xLabelRotation)), e = a * n, t = a * i, e + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = e + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = a * r;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(y(this.xLabelRotation)) * r + 3)
                } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
            },
            calculateYRange: d,
            drawingArea: function() {
                return this.startPoint - this.endPoint
            },
            calculateY: function(e) {
                var t = this.drawingArea() / (this.min - this.max);
                return this.endPoint - t * (e - this.min)
            },
            calculateX: function(e) {
                var t = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                    n = t / (this.valuesCount - (this.offsetGridLines ? 0 : 1)),
                    i = n * e + this.xScalePaddingLeft;
                return this.offsetGridLines && (i += n / 2), Math.round(i)
            },
            update: function(e) {
                i.extend(this, e), this.fit()
            },
            draw: function() {
                var e = this.ctx,
                    t = (this.endPoint - this.startPoint) / this.steps,
                    n = Math.round(this.xScalePaddingLeft);
                this.display && (e.fillStyle = this.textColor, e.font = this.font, a(this.yLabels, function(a, r) {
                    var s = this.endPoint - t * r,
                        o = Math.round(s),
                        l = this.showHorizontalLines;
                    e.textAlign = "right", e.textBaseline = "middle", this.showLabels && e.fillText(a, n - 10, s), 0 !== r || l || (l = !0), l && e.beginPath(), r > 0 ? (e.lineWidth = this.gridLineWidth, e.strokeStyle = this.gridLineColor) : (e.lineWidth = this.lineWidth, e.strokeStyle = this.lineColor), o += i.aliasPixel(e.lineWidth), l && (e.moveTo(n, o), e.lineTo(this.width, o), e.stroke(), e.closePath()), e.lineWidth = this.lineWidth, e.strokeStyle = this.lineColor, e.beginPath(), e.moveTo(n - 5, o), e.lineTo(n, o), e.stroke(), e.closePath()
                }, this), a(this.xLabels, function(t, n) {
                    var i = this.calculateX(n) + v(this.lineWidth),
                        a = this.calculateX(n - (this.offsetGridLines ? .5 : 0)) + v(this.lineWidth),
                        r = this.xLabelRotation > 0,
                        s = this.showVerticalLines;
                    0 !== n || s || (s = !0), s && e.beginPath(), n > 0 ? (e.lineWidth = this.gridLineWidth, e.strokeStyle = this.gridLineColor) : (e.lineWidth = this.lineWidth, e.strokeStyle = this.lineColor), s && (e.moveTo(a, this.endPoint), e.lineTo(a, this.startPoint - 3), e.stroke(), e.closePath()), e.lineWidth = this.lineWidth, e.strokeStyle = this.lineColor, e.beginPath(), e.moveTo(a, this.endPoint), e.lineTo(a, this.endPoint + 5), e.stroke(), e.closePath(), e.save(), e.translate(i, r ? this.endPoint + 12 : this.endPoint + 8), e.rotate(-1 * y(this.xLabelRotation)), e.font = this.font, e.textAlign = r ? "right" : "center", e.textBaseline = r ? "middle" : "top", e.fillText(t, 0, 0), e.restore()
                }, this))
            }
        }), n.RadialScale = n.Element.extend({
            initialize: function() {
                this.size = _([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
            },
            calculateCenterOffset: function(e) {
                var t = this.drawingArea / (this.max - this.min);
                return (e - this.min) * t
            },
            update: function() {
                this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var e = g(this.stepValue), t = 0; t <= this.steps; t++) this.yLabels.push(L(this.templateString, {
                    value: (this.min + t * this.stepValue).toFixed(e)
                }))
            },
            getCircumference: function() {
                return 2 * Math.PI / this.valuesCount
            },
            setScaleSize: function() {
                var e, t, n, i, a, r, s, o, l, u, d, c, h = _([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                    f = this.width,
                    m = 0;
                for (this.ctx.font = j(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t = 0; t < this.valuesCount; t++) e = this.getPointPosition(t, h), n = this.ctx.measureText(L(this.templateString, {
                    value: this.labels[t]
                })).width + 5, 0 === t || t === this.valuesCount / 2 ? (i = n / 2, e.x + i > f && (f = e.x + i, a = t), e.x - i < m && (m = e.x - i, s = t)) : t < this.valuesCount / 2 ? e.x + n > f && (f = e.x + n, a = t) : t > this.valuesCount / 2 && e.x - n < m && (m = e.x - n, s = t);
                l = m, u = Math.ceil(f - this.width), r = this.getIndexAngle(a), o = this.getIndexAngle(s), d = u / Math.sin(r + Math.PI / 2), c = l / Math.sin(o + Math.PI / 2), d = p(d) ? d : 0, c = p(c) ? c : 0, this.drawingArea = h - (c + d) / 2, this.setCenterPoint(c, d)
            },
            setCenterPoint: function(e, t) {
                var n = this.width - t - this.drawingArea,
                    i = e + this.drawingArea;
                this.xCenter = (i + n) / 2, this.yCenter = this.height / 2
            },
            getIndexAngle: function(e) {
                var t = 2 * Math.PI / this.valuesCount;
                return e * t - Math.PI / 2
            },
            getPointPosition: function(e, t) {
                var n = this.getIndexAngle(e);
                return {
                    x: Math.cos(n) * t + this.xCenter,
                    y: Math.sin(n) * t + this.yCenter
                }
            },
            draw: function() {
                if (this.display) {
                    var e = this.ctx;
                    if (a(this.yLabels, function(t, n) {
                            if (n > 0) {
                                var i, a = n * (this.drawingArea / this.steps),
                                    r = this.yCenter - a;
                                if (this.lineWidth > 0)
                                    if (e.strokeStyle = this.lineColor, e.lineWidth = this.lineWidth, this.lineArc) e.beginPath(), e.arc(this.xCenter, this.yCenter, a, 0, 2 * Math.PI), e.closePath(), e.stroke();
                                    else {
                                        e.beginPath();
                                        for (var s = 0; s < this.valuesCount; s++) i = this.getPointPosition(s, this.calculateCenterOffset(this.min + n * this.stepValue)), 0 === s ? e.moveTo(i.x, i.y) : e.lineTo(i.x, i.y);
                                        e.closePath(), e.stroke()
                                    }
                                if (this.showLabels) {
                                    if (e.font = j(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var o = e.measureText(t).width;
                                        e.fillStyle = this.backdropColor, e.fillRect(this.xCenter - o / 2 - this.backdropPaddingX, r - this.fontSize / 2 - this.backdropPaddingY, o + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                    }
                                    e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = this.fontColor, e.fillText(t, this.xCenter, r)
                                }
                            }
                        }, this), !this.lineArc) {
                        e.lineWidth = this.angleLineWidth, e.strokeStyle = this.angleLineColor;
                        for (var t = this.valuesCount - 1; t >= 0; t--) {
                            if (this.angleLineWidth > 0) {
                                var n = this.getPointPosition(t, this.calculateCenterOffset(this.max));
                                e.beginPath(), e.moveTo(this.xCenter, this.yCenter), e.lineTo(n.x, n.y), e.stroke(), e.closePath()
                            }
                            var i = this.getPointPosition(t, this.calculateCenterOffset(this.max) + 5);
                            e.font = j(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e.fillStyle = this.pointLabelFontColor;
                            var r = this.labels.length,
                                s = this.labels.length / 2,
                                o = s / 2,
                                l = o > t || t > r - o,
                                u = t === o || t === r - o;
                            e.textAlign = 0 === t ? "center" : t === s ? "center" : s > t ? "left" : "right", e.textBaseline = u ? "middle" : l ? "bottom" : "top", e.fillText(this.labels[t], i.x, i.y)
                        }
                    }
                }
            }
        }), i.addEvent(window, "resize", function() {
            var e;
            return function() {
                clearTimeout(e), e = setTimeout(function() {
                    a(n.instances, function(e) {
                        e.options.responsive && e.resize(e.render, !0)
                    })
                }, 50)
            }
        }()), f ? define(function() {
            return n
        }) : "object" == typeof module && module.exports && (module.exports = n), e.Chart = n, n.noConflict = function() {
            return e.Chart = t, n
        }
    }.call(this),
    function() {
        "use strict";
        var e = this,
            t = e.Chart,
            n = t.helpers,
            i = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        t.Type.extend({
            name: "Bar",
            defaults: i,
            initialize: function(e) {
                var i = this.options;
                this.ScaleClass = t.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function(e, t, n) {
                        var a = this.calculateBaseWidth(),
                            r = this.calculateX(n) - a / 2,
                            s = this.calculateBarWidth(e);
                        return r + s * t + t * i.barDatasetSpacing + s / 2
                    },
                    calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * i.barValueSpacing
                    },
                    calculateBarWidth: function(e) {
                        var t = this.calculateBaseWidth() - (e - 1) * i.barDatasetSpacing;
                        return t / e
                    }
                }), this.datasets = [], this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function(e) {
                    var t = "mouseout" !== e.type ? this.getBarsAtEvent(e) : [];
                    this.eachBars(function(e) {
                        e.restore(["fillColor", "strokeColor"])
                    }), n.each(t, function(e) {
                        e.fillColor = e.highlightFill, e.strokeColor = e.highlightStroke
                    }), this.showTooltip(t)
                }), this.BarClass = t.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), n.each(e.datasets, function(t) {
                    var i = {
                        label: t.label || null,
                        fillColor: t.fillColor,
                        strokeColor: t.strokeColor,
                        bars: []
                    };
                    this.datasets.push(i), n.each(t.data, function(n, a) {
                        i.bars.push(new this.BarClass({
                            value: n,
                            label: e.labels[a],
                            datasetLabel: t.label,
                            strokeColor: t.strokeColor,
                            fillColor: t.fillColor,
                            highlightFill: t.highlightFill || t.fillColor,
                            highlightStroke: t.highlightStroke || t.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(e.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(e, t, i) {
                    n.extend(e, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, i, t),
                        y: this.scale.endPoint
                    }), e.save()
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), n.each(this.activeElements, function(e) {
                    e.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function(e) {
                    e.save()
                }), this.render()
            },
            eachBars: function(e) {
                n.each(this.datasets, function(t, i) {
                    n.each(t.bars, e, this, i)
                }, this)
            },
            getBarsAtEvent: function(e) {
                for (var t, i = [], a = n.getRelativePosition(e), r = function(e) {
                        i.push(e.bars[t])
                    }, s = 0; s < this.datasets.length; s++)
                    for (t = 0; t < this.datasets[s].bars.length; t++)
                        if (this.datasets[s].bars[t].inRange(a.x, a.y)) return n.each(this.datasets, r), i;
                return i
            },
            buildScale: function(e) {
                var t = this,
                    i = function() {
                        var e = [];
                        return t.eachBars(function(t) {
                            e.push(t.value)
                        }), e
                    },
                    a = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: e.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(e) {
                            var t = n.calculateScaleRange(i(), e, this.fontSize, this.beginAtZero, this.integersOnly);
                            n.extend(this, t)
                        },
                        xLabels: e,
                        font: n.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && n.extend(a, {
                    calculateYRange: n.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(a)
            },
            addData: function(e, t) {
                n.each(e, function(e, n) {
                    this.datasets[n].bars.push(new this.BarClass({
                        value: e,
                        label: t,
                        x: this.scale.calculateBarX(this.datasets.length, n, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[n].strokeColor,
                        fillColor: this.datasets[n].fillColor
                    }))
                }, this), this.scale.addXLabel(t), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), n.each(this.datasets, function(e) {
                    e.bars.shift()
                }, this), this.update()
            },
            reflow: function() {
                n.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var e = n.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(e)
            },
            draw: function(e) {
                var t = e || 1;
                this.clear();
                this.chart.ctx;
                this.scale.draw(t), n.each(this.datasets, function(e, i) {
                    n.each(e.bars, function(e, n) {
                        e.hasValue() && (e.base = this.scale.endPoint, e.transition({
                            x: this.scale.calculateBarX(this.datasets.length, i, n),
                            y: this.scale.calculateY(e.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, t).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var e = this,
            t = e.Chart,
            n = t.helpers,
            i = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        t.Type.extend({
            name: "Doughnut",
            defaults: i,
            initialize: function(e) {
                this.segments = [], this.outerRadius = (n.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = t.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function(e) {
                    var t = "mouseout" !== e.type ? this.getSegmentsAtEvent(e) : [];
                    n.each(this.segments, function(e) {
                        e.restore(["fillColor"])
                    }), n.each(t, function(e) {
                        e.fillColor = e.highlightColor
                    }), this.showTooltip(t)
                }), this.calculateTotal(e), n.each(e, function(e, t) {
                    this.addData(e, t, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function(e) {
                var t = [],
                    i = n.getRelativePosition(e);
                return n.each(this.segments, function(e) {
                    e.inRange(i.x, i.y) && t.push(e)
                }, this), t
            },
            addData: function(e, t, n) {
                var i = t || this.segments.length;
                this.segments.splice(i, 0, new this.SegmentArc({
                    value: e.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: e.color,
                    highlightColor: e.highlight || e.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(e.value),
                    label: e.label
                })), n || (this.reflow(), this.update())
            },
            calculateCircumference: function(e) {
                return 2 * Math.PI * (e / this.total)
            },
            calculateTotal: function(e) {
                this.total = 0, n.each(e, function(e) {
                    this.total += e.value
                }, this)
            },
            update: function() {
                this.calculateTotal(this.segments), n.each(this.activeElements, function(e) {
                    e.restore(["fillColor"])
                }), n.each(this.segments, function(e) {
                    e.save()
                }), this.render()
            },
            removeData: function(e) {
                var t = n.isNumber(e) ? e : this.segments.length - 1;
                this.segments.splice(t, 1), this.reflow(), this.update()
            },
            reflow: function() {
                n.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (n.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, n.each(this.segments, function(e) {
                    e.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function(e) {
                var t = e ? e : 1;
                this.clear(), n.each(this.segments, function(e, n) {
                    e.transition({
                        circumference: this.calculateCircumference(e.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, t), e.endAngle = e.startAngle + e.circumference, e.draw(), 0 === n && (e.startAngle = 1.5 * Math.PI), n < this.segments.length - 1 && (this.segments[n + 1].startAngle = e.endAngle)
                }, this)
            }
        }), t.types.Doughnut.extend({
            name: "Pie",
            defaults: n.merge(i, {
                percentageInnerCutout: 0
            })
        })
    }.call(this),
    function() {
        "use strict";
        var e = this,
            t = e.Chart,
            n = t.helpers,
            i = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        t.Type.extend({
            name: "Line",
            defaults: i,
            initialize: function(e) {
                this.PointClass = t.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function(e) {
                        return Math.pow(e - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function(e) {
                    var t = "mouseout" !== e.type ? this.getPointsAtEvent(e) : [];
                    this.eachPoints(function(e) {
                        e.restore(["fillColor", "strokeColor"])
                    }), n.each(t, function(e) {
                        e.fillColor = e.highlightFill, e.strokeColor = e.highlightStroke
                    }), this.showTooltip(t)
                }), n.each(e.datasets, function(t) {
                    var i = {
                        label: t.label || null,
                        fillColor: t.fillColor,
                        strokeColor: t.strokeColor,
                        pointColor: t.pointColor,
                        pointStrokeColor: t.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(i), n.each(t.data, function(n, a) {
                        i.points.push(new this.PointClass({
                            value: n,
                            label: e.labels[a],
                            datasetLabel: t.label,
                            strokeColor: t.pointStrokeColor,
                            fillColor: t.pointColor,
                            highlightFill: t.pointHighlightFill || t.pointColor,
                            highlightStroke: t.pointHighlightStroke || t.pointStrokeColor
                        }))
                    }, this), this.buildScale(e.labels), this.eachPoints(function(e, t) {
                        n.extend(e, {
                            x: this.scale.calculateX(t),
                            y: this.scale.endPoint
                        }), e.save()
                    }, this)
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), n.each(this.activeElements, function(e) {
                    e.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function(e) {
                    e.save()
                }), this.render()
            },
            eachPoints: function(e) {
                n.each(this.datasets, function(t) {
                    n.each(t.points, e, this)
                }, this)
            },
            getPointsAtEvent: function(e) {
                var t = [],
                    i = n.getRelativePosition(e);
                return n.each(this.datasets, function(e) {
                    n.each(e.points, function(e) {
                        e.inRange(i.x, i.y) && t.push(e)
                    })
                }, this), t
            },
            buildScale: function(e) {
                var i = this,
                    a = function() {
                        var e = [];
                        return i.eachPoints(function(t) {
                            e.push(t.value)
                        }), e
                    },
                    r = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: e.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(e) {
                            var t = n.calculateScaleRange(a(), e, this.fontSize, this.beginAtZero, this.integersOnly);
                            n.extend(this, t)
                        },
                        xLabels: e,
                        font: n.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && n.extend(r, {
                    calculateYRange: n.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new t.Scale(r)
            },
            addData: function(e, t) {
                n.each(e, function(e, n) {
                    this.datasets[n].points.push(new this.PointClass({
                        value: e,
                        label: t,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[n].pointStrokeColor,
                        fillColor: this.datasets[n].pointColor
                    }))
                }, this), this.scale.addXLabel(t), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), n.each(this.datasets, function(e) {
                    e.points.shift()
                }, this), this.update()
            },
            reflow: function() {
                var e = n.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(e)
            },
            draw: function(e) {
                var t = e || 1;
                this.clear();
                var i = this.chart.ctx,
                    a = function(e) {
                        return null !== e.value
                    },
                    r = function(e, t, i) {
                        return n.findNextWhere(t, a, i) || e
                    },
                    s = function(e, t, i) {
                        return n.findPreviousWhere(t, a, i) || e
                    };
                this.scale.draw(t), n.each(this.datasets, function(e) {
                    var o = n.where(e.points, a);
                    n.each(e.points, function(e, n) {
                        e.hasValue() && e.transition({
                            y: this.scale.calculateY(e.value),
                            x: this.scale.calculateX(n)
                        }, t)
                    }, this), this.options.bezierCurve && n.each(o, function(e, t) {
                        var i = t > 0 && t < o.length - 1 ? this.options.bezierCurveTension : 0;
                        e.controlPoints = n.splineCurve(s(e, o, t), e, r(e, o, t), i), e.controlPoints.outer.y > this.scale.endPoint ? e.controlPoints.outer.y = this.scale.endPoint : e.controlPoints.outer.y < this.scale.startPoint && (e.controlPoints.outer.y = this.scale.startPoint), e.controlPoints.inner.y > this.scale.endPoint ? e.controlPoints.inner.y = this.scale.endPoint : e.controlPoints.inner.y < this.scale.startPoint && (e.controlPoints.inner.y = this.scale.startPoint)
                    }, this), i.lineWidth = this.options.datasetStrokeWidth, i.strokeStyle = e.strokeColor, i.beginPath(), n.each(o, function(e, t) {
                        if (0 === t) i.moveTo(e.x, e.y);
                        else if (this.options.bezierCurve) {
                            var n = s(e, o, t);
                            i.bezierCurveTo(n.controlPoints.outer.x, n.controlPoints.outer.y, e.controlPoints.inner.x, e.controlPoints.inner.y, e.x, e.y)
                        } else i.lineTo(e.x, e.y)
                    }, this), i.stroke(), this.options.datasetFill && o.length > 0 && (i.lineTo(o[o.length - 1].x, this.scale.endPoint), i.lineTo(o[0].x, this.scale.endPoint), i.fillStyle = e.fillColor, i.closePath(), i.fill()), n.each(o, function(e) {
                        e.draw()
                    })
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var e = this,
            t = e.Chart,
            n = t.helpers,
            i = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        t.Type.extend({
            name: "PolarArea",
            defaults: i,
            initialize: function(e) {
                this.segments = [], this.SegmentArc = t.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new t.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: e.length
                }), this.updateScaleRange(e), this.scale.update(), n.each(e, function(e, t) {
                    this.addData(e, t, !0)
                }, this), this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function(e) {
                    var t = "mouseout" !== e.type ? this.getSegmentsAtEvent(e) : [];
                    n.each(this.segments, function(e) {
                        e.restore(["fillColor"])
                    }), n.each(t, function(e) {
                        e.fillColor = e.highlightColor
                    }), this.showTooltip(t)
                }), this.render()
            },
            getSegmentsAtEvent: function(e) {
                var t = [],
                    i = n.getRelativePosition(e);
                return n.each(this.segments, function(e) {
                    e.inRange(i.x, i.y) && t.push(e)
                }, this), t
            },
            addData: function(e, t, n) {
                var i = t || this.segments.length;
                this.segments.splice(i, 0, new this.SegmentArc({
                    fillColor: e.color,
                    highlightColor: e.highlight || e.color,
                    label: e.label,
                    value: e.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(e.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), n || (this.reflow(), this.update())
            },
            removeData: function(e) {
                var t = n.isNumber(e) ? e : this.segments.length - 1;
                this.segments.splice(t, 1), this.reflow(), this.update()
            },
            calculateTotal: function(e) {
                this.total = 0, n.each(e, function(e) {
                    this.total += e.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function(e) {
                var t = [];
                n.each(e, function(e) {
                    t.push(e.value)
                });
                var i = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : n.calculateScaleRange(t, n.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                n.extend(this.scale, i, {
                    size: n.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function() {
                this.calculateTotal(this.segments), n.each(this.segments, function(e) {
                    e.save()
                }), this.render()
            },
            reflow: function() {
                n.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), n.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), n.each(this.segments, function(e) {
                    e.update({
                        outerRadius: this.scale.calculateCenterOffset(e.value)
                    })
                }, this)
            },
            draw: function(e) {
                var t = e || 1;
                this.clear(), n.each(this.segments, function(e, n) {
                    e.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(e.value)
                    }, t), e.endAngle = e.startAngle + e.circumference, 0 === n && (e.startAngle = 1.5 * Math.PI), n < this.segments.length - 1 && (this.segments[n + 1].startAngle = e.endAngle), e.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this),
    function() {
        "use strict";
        var e = this,
            t = e.Chart,
            n = t.helpers;
        t.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            },
            initialize: function(e) {
                this.PointClass = t.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(e), this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function(e) {
                    var t = "mouseout" !== e.type ? this.getPointsAtEvent(e) : [];
                    this.eachPoints(function(e) {
                        e.restore(["fillColor", "strokeColor"])
                    }), n.each(t, function(e) {
                        e.fillColor = e.highlightFill, e.strokeColor = e.highlightStroke
                    }), this.showTooltip(t)
                }), n.each(e.datasets, function(t) {
                    var i = {
                        label: t.label || null,
                        fillColor: t.fillColor,
                        strokeColor: t.strokeColor,
                        pointColor: t.pointColor,
                        pointStrokeColor: t.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(i), n.each(t.data, function(n, a) {
                        var r;
                        this.scale.animation || (r = this.scale.getPointPosition(a, this.scale.calculateCenterOffset(n))), i.points.push(new this.PointClass({
                            value: n,
                            label: e.labels[a],
                            datasetLabel: t.label,
                            x: this.options.animation ? this.scale.xCenter : r.x,
                            y: this.options.animation ? this.scale.yCenter : r.y,
                            strokeColor: t.pointStrokeColor,
                            fillColor: t.pointColor,
                            highlightFill: t.pointHighlightFill || t.pointColor,
                            highlightStroke: t.pointHighlightStroke || t.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function(e) {
                n.each(this.datasets, function(t) {
                    n.each(t.points, e, this)
                }, this)
            },
            getPointsAtEvent: function(e) {
                var t = n.getRelativePosition(e),
                    i = n.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, t),
                    a = 2 * Math.PI / this.scale.valuesCount,
                    r = Math.round((i.angle - 1.5 * Math.PI) / a),
                    s = [];
                return (r >= this.scale.valuesCount || 0 > r) && (r = 0), i.distance <= this.scale.drawingArea && n.each(this.datasets, function(e) {
                    s.push(e.points[r])
                }), s
            },
            buildScale: function(e) {
                this.scale = new t.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: e.labels,
                    valuesCount: e.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(e.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function(e) {
                var t = function() {
                        var t = [];
                        return n.each(e, function(e) {
                            e.data ? t = t.concat(e.data) : n.each(e.points, function(e) {
                                t.push(e.value)
                            })
                        }), t
                    }(),
                    i = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : n.calculateScaleRange(t, n.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                n.extend(this.scale, i)
            },
            addData: function(e, t) {
                this.scale.valuesCount++, n.each(e, function(e, n) {
                    var i = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(e));
                    this.datasets[n].points.push(new this.PointClass({
                        value: e,
                        label: t,
                        x: i.x,
                        y: i.y,
                        strokeColor: this.datasets[n].pointStrokeColor,
                        fillColor: this.datasets[n].pointColor
                    }))
                }, this), this.scale.labels.push(t), this.reflow(), this.update()
            },
            removeData: function() {
                this.scale.valuesCount--, this.scale.labels.shift(), n.each(this.datasets, function(e) {
                    e.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function() {
                this.eachPoints(function(e) {
                    e.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                n.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: n.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function(e) {
                var t = e || 1,
                    i = this.chart.ctx;
                this.clear(), this.scale.draw(), n.each(this.datasets, function(e) {
                    n.each(e.points, function(e, n) {
                        e.hasValue() && e.transition(this.scale.getPointPosition(n, this.scale.calculateCenterOffset(e.value)), t)
                    }, this), i.lineWidth = this.options.datasetStrokeWidth, i.strokeStyle = e.strokeColor, i.beginPath(), n.each(e.points, function(e, t) {
                        0 === t ? i.moveTo(e.x, e.y) : i.lineTo(e.x, e.y)
                    }, this), i.closePath(), i.stroke(), i.fillStyle = e.fillColor, i.fill(), n.each(e.points, function(e) {
                        e.hasValue() && e.draw()
                    })
                }, this)
            }
        })
    }.call(this), $(function() {
        function e(e, t) {
            $(".block-" + e).removeClass("show").addClass("hidden"), $(".block-" + t).removeClass("hidden").addClass("show"), $(".steps .step").removeClass("active").filter(":lt(" + t + ")").addClass("active")
        }
        $.ajaxPrefilter(function(e, t, n) {
            var i;
            return !e.crossDomain && (i = $('meta[name="token"]').attr("content")) ? n.setRequestHeader("X-CSRF-Token", i) : void 0
        }), $.ajaxSetup({
            statusCode: {
                401: function() {
                    window.location.href = "/"
                },
                403: function() {
                    window.location.href = "/"
                }
            }
        }), $("form").submit(function() {
            var e = $(this);
            e.find(":submit").prop("disabled", !0)
        }), $("[data-method]").not(".disabled").append(function() {
            var e = "\n";
            return e += "<form action='" + $(this).attr("href") + "' method='POST' style='display:none'>\n", e += " <input type='hidden' name='_method' value='" + $(this).attr("data-method") + "'>\n", $(this).attr("data-token") && (e += "<input type='hidden' name='_token' value='" + $(this).attr("data-token") + "'>\n"), e += "</form>\n"
        }).removeAttr("href").attr("onclick", ' if ($(this).hasClass(\'confirm-action\')) { if(confirm("Are you sure you want to do this?")) { $(this).find("form").submit(); } } else { $(this).find("form").submit(); }'), Messenger.options = {
            extraClasses: "messenger-fixed messenger-on-top",
            theme: "air"
        }, window.CachetHQ = {}, moment.locale(Global.locale), $("abbr.timeago").each(function() {
            var e = $(this);
            e.livestamp(e.data("timeago")).tooltip()
        }), window.CachetHQ.Notifier = function() {
            this.notify = function(e, t, n) {
                t = "undefined" == typeof t || "error" === t ? "error" : t;
                var i = {
                    message: e,
                    type: t,
                    showCloseButton: !0
                };
                n = _.extend(i, n), Messenger().post(n)
            }
        }, $(".sidebar-toggler").click(function(e) {
            e.preventDefault(), $(".wrapper").toggleClass("toggled")
        }), $(".color-code").minicolors({
            control: "hue",
            defaultValue: $(this).val() || "",
            inline: !1,
            letterCase: "lowercase",
            opacity: !1,
            position: "bottom left",
            theme: "bootstrap"
        }), $('[data-toggle="tooltip"]').tooltip(), $("button.close").on("click", function() {
            $(this).parents("div.alert").addClass("hide")
        }), $("form[name=IncidentForm] select[name=incident\\[component_id\\]]").on("change", function() {
            var e = $(this).find("option:selected"),
                t = $("#component-status");
            "" !== e.val() && (t.hasClass("hidden") ? t.removeClass("hidden") : t.addClass("hidden"))
        }), $("input[rel=datepicker]").datetimepicker({
            format: "DD/MM/YYYY HH:mm",
            minDate: new Date,
            sideBySide: !0,
            icons: {
                time: "ion-clock",
                date: "ion-android-calendar",
                up: "ion-ios-arrow-up",
                down: "ion-ios-arrow-down",
                previous: "ion-ios-arrow-left",
                next: "ion-ios-arrow-right",
                today: "ion-android-home",
                clear: "ion-trash-a"
            }
        });
        var t = document.getElementById("component-list");
        t && new Sortable(t, {
            group: "omega",
            handle: ".drag-handle",
            onUpdate: function() {
                var e = $("#component-list .striped-list-item");
                $.each(e, function(e) {
                    $(this).find("input[rel=order]").val(e + 1)
                }), $.ajax({
                    async: !0,
                    url: "/dashboard/api/components/order",
                    type: "POST",
                    data: $("form[name=componentList]").serializeObject(),
                    success: function() {
                        (new CachetHQ.Notifier).notify("Components updated.", "success")
                    }
                })
            }
        }), $("form.component-inline").on("click", "input[type=radio]", function() {
            var e = $(this).parents("form"),
                t = e.serializeObject();
            $.ajax({
                async: !0,
                url: "/dashboard/api/components/" + t.component_id,
                type: "POST",
                data: t,
                success: function() {
                    (new CachetHQ.Notifier).notify(e.data("messenger"), "success")
                },
                error: function() {
                    (new CachetHQ.Notifier).notify("Something went wrong updating the component.")
                }
            })
        }), $("select[name=template]").on("change", function() {
            var e = $(this).find("option:selected"),
                t = e.val();
            t && $.ajax({
                async: !0,
                dataType: "json",
                data: {
                    slug: t
                },
                url: "/dashboard/api/incidents/templates",
                success: function(e) {
                    var t = $("form[role=form]");
                    t.find("input[name=incident\\[name\\]]").val(e.name), t.find("textarea[name=incident\\[message\\]]").val(e.template)
                },
                error: function() {
                    (new CachetHQ.Notifier).notify("There was an error finding that template.")
                }
            })
        }), $("#remove-banner").click(function() {
            $("#banner-view").remove(), $("input[name=remove_banner]").val("1")
        }), $(".wizard-next").on("click", function() {
            var t = $("#setup-form"),
                n = $(this),
                i = n.data("currentBlock"),
                a = n.data("nextBlock");
            if (n.button("loading"), a > i) {
                var r = "/setup/step" + i;
                return $.post(r, t.serializeObject()).done(function() {
                    e(i, a)
                }).fail(function(e) {
                    var t = _.toArray(e.responseJSON.errors);
                    _.each(t, function(e) {
                        (new CachetHQ.Notifier).notify(e)
                    })
                }).always(function() {
                    n.button("reset")
                }), !1
            }
            e(i, a), n.button("reset")
        })
    });