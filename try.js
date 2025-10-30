(() => {
  var e = {
      5487: function () {
        "use strict";
        window.tram = (function (e) {
          function t(e, t) {
            return new V.Bare().init(e, t);
          }
          function n(e) {
            var t = parseInt(e.slice(1), 16);
            return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
          }
          function i(e, t, n) {
            return (
              "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
            );
          }
          function a() {}
          function r(e, t, n) {
            if ((void 0 !== t && (n = t), void 0 === e)) return n;
            var i = n;
            return (
              Q.test(e) || !q.test(e)
                ? (i = parseInt(e, 10))
                : q.test(e) && (i = 1e3 * parseFloat(e)),
              0 > i && (i = 0),
              i == i ? i : n
            );
          }
          function o(e) {
            j.debug && window && window.console.warn(e);
          }
          var c,
            u,
            d,
            l = (function (e, t, n) {
              function i(e) {
                return "object" == typeof e;
              }
              function a(e) {
                return "function" == typeof e;
              }
              function r() {}
              return function o(c, u) {
                function d() {
                  var e = new l();
                  return a(e.init) && e.init.apply(e, arguments), e;
                }
                function l() {}
                u === n && ((u = c), (c = Object)), (d.Bare = l);
                var s,
                  f = (r[e] = c[e]),
                  p = (l[e] = d[e] = new r());
                return (
                  (p.constructor = d),
                  (d.mixin = function (t) {
                    return (l[e] = d[e] = o(d, t)[e]), d;
                  }),
                  (d.open = function (e) {
                    if (
                      ((s = {}),
                      a(e) ? (s = e.call(d, p, f, d, c)) : i(e) && (s = e),
                      i(s))
                    )
                      for (var n in s) t.call(s, n) && (p[n] = s[n]);
                    return a(p.init) || (p.init = c), d;
                  }),
                  d.open(u)
                );
              };
            })("prototype", {}.hasOwnProperty),
            s = {
              ease: [
                "ease",
                function (e, t, n, i) {
                  var a = (e /= i) * e,
                    r = a * e;
                  return (
                    t +
                    n *
                      (-2.75 * r * a +
                        11 * a * a +
                        -15.5 * r +
                        8 * a +
                        0.25 * e)
                  );
                },
              ],
              "ease-in": [
                "ease-in",
                function (e, t, n, i) {
                  var a = (e /= i) * e,
                    r = a * e;
                  return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a);
                },
              ],
              "ease-out": [
                "ease-out",
                function (e, t, n, i) {
                  var a = (e /= i) * e,
                    r = a * e;
                  return (
                    t +
                    n *
                      (0.3 * r * a +
                        -1.6 * a * a +
                        2.2 * r +
                        -1.8 * a +
                        1.9 * e)
                  );
                },
              ],
              "ease-in-out": [
                "ease-in-out",
                function (e, t, n, i) {
                  var a = (e /= i) * e,
                    r = a * e;
                  return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a);
                },
              ],
              linear: [
                "linear",
                function (e, t, n, i) {
                  return (n * e) / i + t;
                },
              ],
              "ease-in-quad": [
                "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                function (e, t, n, i) {
                  return n * (e /= i) * e + t;
                },
              ],
              "ease-out-quad": [
                "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                function (e, t, n, i) {
                  return -n * (e /= i) * (e - 2) + t;
                },
              ],
              "ease-in-out-quad": [
                "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                function (e, t, n, i) {
                  return (e /= i / 2) < 1
                    ? (n / 2) * e * e + t
                    : (-n / 2) * (--e * (e - 2) - 1) + t;
                },
              ],
              "ease-in-cubic": [
                "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                function (e, t, n, i) {
                  return n * (e /= i) * e * e + t;
                },
              ],
              "ease-out-cubic": [
                "cubic-bezier(0.215, 0.610, 0.355, 1)",
                function (e, t, n, i) {
                  return n * ((e = e / i - 1) * e * e + 1) + t;
                },
              ],
              "ease-in-out-cubic": [
                "cubic-bezier(0.645, 0.045, 0.355, 1)",
                function (e, t, n, i) {
                  return (e /= i / 2) < 1
                    ? (n / 2) * e * e * e + t
                    : (n / 2) * ((e -= 2) * e * e + 2) + t;
                },
              ],
              "ease-in-quart": [
                "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                function (e, t, n, i) {
                  return n * (e /= i) * e * e * e + t;
                },
              ],
              "ease-out-quart": [
                "cubic-bezier(0.165, 0.840, 0.440, 1)",
                function (e, t, n, i) {
                  return -n * ((e = e / i - 1) * e * e * e - 1) + t;
                },
              ],
              "ease-in-out-quart": [
                "cubic-bezier(0.770, 0, 0.175, 1)",
                function (e, t, n, i) {
                  return (e /= i / 2) < 1
                    ? (n / 2) * e * e * e * e + t
                    : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
                },
              ],
              "ease-in-quint": [
                "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                function (e, t, n, i) {
                  return n * (e /= i) * e * e * e * e + t;
                },
              ],
              "ease-out-quint": [
                "cubic-bezier(0.230, 1, 0.320, 1)",
                function (e, t, n, i) {
                  return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
                },
              ],
              "ease-in-out-quint": [
                "cubic-bezier(0.860, 0, 0.070, 1)",
                function (e, t, n, i) {
                  return (e /= i / 2) < 1
                    ? (n / 2) * e * e * e * e * e + t
                    : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
                },
              ],
              "ease-in-sine": [
                "cubic-bezier(0.470, 0, 0.745, 0.715)",
                function (e, t, n, i) {
                  return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
                },
              ],
              "ease-out-sine": [
                "cubic-bezier(0.390, 0.575, 0.565, 1)",
                function (e, t, n, i) {
                  return n * Math.sin((e / i) * (Math.PI / 2)) + t;
                },
              ],
              "ease-in-out-sine": [
                "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                function (e, t, n, i) {
                  return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
                },
              ],
              "ease-in-expo": [
                "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                function (e, t, n, i) {
                  return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
                },
              ],
              "ease-out-expo": [
                "cubic-bezier(0.190, 1, 0.220, 1)",
                function (e, t, n, i) {
                  return e === i
                    ? t + n
                    : n * (-Math.pow(2, (-10 * e) / i) + 1) + t;
                },
              ],
              "ease-in-out-expo": [
                "cubic-bezier(1, 0, 0, 1)",
                function (e, t, n, i) {
                  return 0 === e
                    ? t
                    : e === i
                    ? t + n
                    : (e /= i / 2) < 1
                    ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                    : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
                },
              ],
              "ease-in-circ": [
                "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                function (e, t, n, i) {
                  return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
                },
              ],
              "ease-out-circ": [
                "cubic-bezier(0.075, 0.820, 0.165, 1)",
                function (e, t, n, i) {
                  return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
                },
              ],
              "ease-in-out-circ": [
                "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                function (e, t, n, i) {
                  return (e /= i / 2) < 1
                    ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                    : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
                },
              ],
              "ease-in-back": [
                "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                function (e, t, n, i, a) {
                  return (
                    void 0 === a && (a = 1.70158),
                    n * (e /= i) * e * ((a + 1) * e - a) + t
                  );
                },
              ],
              "ease-out-back": [
                "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                function (e, t, n, i, a) {
                  return (
                    void 0 === a && (a = 1.70158),
                    n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
                  );
                },
              ],
              "ease-in-out-back": [
                "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                function (e, t, n, i, a) {
                  return (
                    void 0 === a && (a = 1.70158),
                    (e /= i / 2) < 1
                      ? (n / 2) * e * e * (((a *= 1.525) + 1) * e - a) + t
                      : (n / 2) *
                          ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) +
                        t
                  );
                },
              ],
            },
            f = {
              "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
              "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
              "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
            },
            p = window,
            b = "bkwld-tram",
            E = /[\-\.0-9]/g,
            g = /[A-Z]/,
            y = "number",
            m = /^(rgb|#)/,
            T = /(em|cm|mm|in|pt|pc|px)$/,
            I = /(em|cm|mm|in|pt|pc|px|%)$/,
            h = /(deg|rad|turn)$/,
            O = "unitless",
            _ = /(all|none) 0s ease 0s/,
            v = /^(width|height)$/,
            A = document.createElement("a"),
            R = ["Webkit", "Moz", "O", "ms"],
            N = ["-webkit-", "-moz-", "-o-", "-ms-"],
            S = function (e) {
              if (e in A.style) return { dom: e, css: e };
              var t,
                n,
                i = "",
                a = e.split("-");
              for (t = 0; t < a.length; t++)
                i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
              for (t = 0; t < R.length; t++)
                if ((n = R[t] + i) in A.style) return { dom: n, css: N[t] + e };
            },
            L = (t.support = {
              bind: Function.prototype.bind,
              transform: S("transform"),
              transition: S("transition"),
              backface: S("backface-visibility"),
              timing: S("transition-timing-function"),
            });
          if (L.transition) {
            var C = L.timing.dom;
            if (((A.style[C] = s["ease-in-back"][0]), !A.style[C]))
              for (var w in f) s[w][0] = f[w];
          }
          var M = (t.frame =
              (c =
                p.requestAnimationFrame ||
                p.webkitRequestAnimationFrame ||
                p.mozRequestAnimationFrame ||
                p.oRequestAnimationFrame ||
                p.msRequestAnimationFrame) && L.bind
                ? c.bind(p)
                : function (e) {
                    p.setTimeout(e, 16);
                  }),
            P = (t.now =
              (d =
                (u = p.performance) &&
                (u.now || u.webkitNow || u.msNow || u.mozNow)) && L.bind
                ? d.bind(u)
                : Date.now ||
                  function () {
                    return +new Date();
                  }),
            F = l(function (t) {
              function n(e, t) {
                var n = (function (e) {
                    for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                      var a = e[t];
                      a && i.push(a);
                    }
                    return i;
                  })(("" + e).split(" ")),
                  i = n[0];
                t = t || {};
                var a = H[i];
                if (!a) return o("Unsupported property: " + i);
                if (!t.weak || !this.props[i]) {
                  var r = a[0],
                    c = this.props[i];
                  return (
                    c || (c = this.props[i] = new r.Bare()),
                    c.init(this.$el, n, a, t),
                    c
                  );
                }
              }
              function i(e, t, i) {
                if (e) {
                  var o = typeof e;
                  if (
                    (t ||
                      (this.timer && this.timer.destroy(),
                      (this.queue = []),
                      (this.active = !1)),
                    "number" == o && t)
                  )
                    return (
                      (this.timer = new B({
                        duration: e,
                        context: this,
                        complete: a,
                      })),
                      void (this.active = !0)
                    );
                  if ("string" == o && t) {
                    switch (e) {
                      case "hide":
                        u.call(this);
                        break;
                      case "stop":
                        c.call(this);
                        break;
                      case "redraw":
                        d.call(this);
                        break;
                      default:
                        n.call(this, e, i && i[1]);
                    }
                    return a.call(this);
                  }
                  if ("function" == o) return void e.call(this, this);
                  if ("object" == o) {
                    var f = 0;
                    s.call(
                      this,
                      e,
                      function (e, t) {
                        e.span > f && (f = e.span), e.stop(), e.animate(t);
                      },
                      function (e) {
                        "wait" in e && (f = r(e.wait, 0));
                      }
                    ),
                      l.call(this),
                      f > 0 &&
                        ((this.timer = new B({ duration: f, context: this })),
                        (this.active = !0),
                        t && (this.timer.complete = a));
                    var p = this,
                      b = !1,
                      E = {};
                    M(function () {
                      s.call(p, e, function (e) {
                        e.active && ((b = !0), (E[e.name] = e.nextStyle));
                      }),
                        b && p.$el.css(E);
                    });
                  }
                }
              }
              function a() {
                if (
                  (this.timer && this.timer.destroy(),
                  (this.active = !1),
                  this.queue.length)
                ) {
                  var e = this.queue.shift();
                  i.call(this, e.options, !0, e.args);
                }
              }
              function c(e) {
                var t;
                this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1),
                  "string" == typeof e
                    ? ((t = {})[e] = 1)
                    : (t = "object" == typeof e && null != e ? e : this.props),
                  s.call(this, t, f),
                  l.call(this);
              }
              function u() {
                c.call(this), (this.el.style.display = "none");
              }
              function d() {
                this.el.offsetHeight;
              }
              function l() {
                var e,
                  t,
                  n = [];
                for (e in (this.upstream && n.push(this.upstream), this.props))
                  (t = this.props[e]).active && n.push(t.string);
                (n = n.join(",")),
                  this.style !== n &&
                    ((this.style = n), (this.el.style[L.transition.dom] = n));
              }
              function s(e, t, i) {
                var a,
                  r,
                  o,
                  c,
                  u = t !== f,
                  d = {};
                for (a in e)
                  (o = e[a]),
                    a in $
                      ? (d.transform || (d.transform = {}),
                        (d.transform[a] = o))
                      : (g.test(a) &&
                          (a = a.replace(/[A-Z]/g, function (e) {
                            return "-" + e.toLowerCase();
                          })),
                        a in H ? (d[a] = o) : (c || (c = {}), (c[a] = o)));
                for (a in d) {
                  if (((o = d[a]), !(r = this.props[a]))) {
                    if (!u) continue;
                    r = n.call(this, a);
                  }
                  t.call(this, r, o);
                }
                i && c && i.call(this, c);
              }
              function f(e) {
                e.stop();
              }
              function p(e, t) {
                e.set(t);
              }
              function E(e) {
                this.$el.css(e);
              }
              function y(e, n) {
                t[e] = function () {
                  return this.children
                    ? m.call(this, n, arguments)
                    : (this.el && n.apply(this, arguments), this);
                };
              }
              function m(e, t) {
                var n,
                  i = this.children.length;
                for (n = 0; i > n; n++) e.apply(this.children[n], t);
                return this;
              }
              (t.init = function (t) {
                if (
                  ((this.$el = e(t)),
                  (this.el = this.$el[0]),
                  (this.props = {}),
                  (this.queue = []),
                  (this.style = ""),
                  (this.active = !1),
                  j.keepInherited && !j.fallback)
                ) {
                  var n = z(this.el, "transition");
                  n && !_.test(n) && (this.upstream = n);
                }
                L.backface &&
                  j.hideBackface &&
                  W(this.el, L.backface.css, "hidden");
              }),
                y("add", n),
                y("start", i),
                y("wait", function (e) {
                  (e = r(e, 0)),
                    this.active
                      ? this.queue.push({ options: e })
                      : ((this.timer = new B({
                          duration: e,
                          context: this,
                          complete: a,
                        })),
                        (this.active = !0));
                }),
                y("then", function (e) {
                  return this.active
                    ? (this.queue.push({ options: e, args: arguments }),
                      void (this.timer.complete = a))
                    : o(
                        "No active transition timer. Use start() or wait() before then()."
                      );
                }),
                y("next", a),
                y("stop", c),
                y("set", function (e) {
                  c.call(this, e), s.call(this, e, p, E);
                }),
                y("show", function (e) {
                  "string" != typeof e && (e = "block"),
                    (this.el.style.display = e);
                }),
                y("hide", u),
                y("redraw", d),
                y("destroy", function () {
                  c.call(this),
                    e.removeData(this.el, b),
                    (this.$el = this.el = null);
                });
            }),
            V = l(F, function (t) {
              function n(t, n) {
                var i = e.data(t, b) || e.data(t, b, new F.Bare());
                return i.el || i.init(t), n ? i.start(n) : i;
              }
              t.init = function (t, i) {
                var a = e(t);
                if (!a.length) return this;
                if (1 === a.length) return n(a[0], i);
                var r = [];
                return (
                  a.each(function (e, t) {
                    r.push(n(t, i));
                  }),
                  (this.children = r),
                  this
                );
              };
            }),
            x = l(function (e) {
              function t() {
                var e = this.get();
                this.update("auto");
                var t = this.get();
                return this.update(e), t;
              }
              (e.init = function (e, t, n, i) {
                (this.$el = e), (this.el = e[0]);
                var a,
                  o,
                  c,
                  u = t[0];
                n[2] && (u = n[2]),
                  Y[u] && (u = Y[u]),
                  (this.name = u),
                  (this.type = n[1]),
                  (this.duration = r(t[1], this.duration, 500)),
                  (this.ease =
                    ((a = t[2]),
                    (o = this.ease),
                    (c = "ease"),
                    void 0 !== o && (c = o),
                    a in s ? a : c)),
                  (this.delay = r(t[3], this.delay, 0)),
                  (this.span = this.duration + this.delay),
                  (this.active = !1),
                  (this.nextStyle = null),
                  (this.auto = v.test(this.name)),
                  (this.unit = i.unit || this.unit || j.defaultUnit),
                  (this.angle = i.angle || this.angle || j.defaultAngle),
                  j.fallback || i.fallback
                    ? (this.animate = this.fallback)
                    : ((this.animate = this.transition),
                      (this.string =
                        this.name +
                        " " +
                        this.duration +
                        "ms" +
                        ("ease" != this.ease ? " " + s[this.ease][0] : "") +
                        (this.delay ? " " + this.delay + "ms" : "")));
              }),
                (e.set = function (e) {
                  (e = this.convert(e, this.type)),
                    this.update(e),
                    this.redraw();
                }),
                (e.transition = function (e) {
                  (this.active = !0),
                    (e = this.convert(e, this.type)),
                    this.auto &&
                      ("auto" == this.el.style[this.name] &&
                        (this.update(this.get()), this.redraw()),
                      "auto" == e && (e = t.call(this))),
                    (this.nextStyle = e);
                }),
                (e.fallback = function (e) {
                  var n =
                    this.el.style[this.name] ||
                    this.convert(this.get(), this.type);
                  (e = this.convert(e, this.type)),
                    this.auto &&
                      ("auto" == n && (n = this.convert(this.get(), this.type)),
                      "auto" == e && (e = t.call(this))),
                    (this.tween = new D({
                      from: n,
                      to: e,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease,
                      update: this.update,
                      context: this,
                    }));
                }),
                (e.get = function () {
                  return z(this.el, this.name);
                }),
                (e.update = function (e) {
                  W(this.el, this.name, e);
                }),
                (e.stop = function () {
                  (this.active || this.nextStyle) &&
                    ((this.active = !1),
                    (this.nextStyle = null),
                    W(this.el, this.name, this.get()));
                  var e = this.tween;
                  e && e.context && e.destroy();
                }),
                (e.convert = function (e, t) {
                  if ("auto" == e && this.auto) return e;
                  var n,
                    a,
                    r = "number" == typeof e,
                    c = "string" == typeof e;
                  switch (t) {
                    case y:
                      if (r) return e;
                      if (c && "" === e.replace(E, "")) return +e;
                      a = "number(unitless)";
                      break;
                    case m:
                      if (c) {
                        if ("" === e && this.original) return this.original;
                        if (t.test(e))
                          return "#" == e.charAt(0) && 7 == e.length
                            ? e
                            : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                                ? i(n[1], n[2], n[3])
                                : e
                              ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                      }
                      a = "hex or rgb string";
                      break;
                    case T:
                      if (r) return e + this.unit;
                      if (c && t.test(e)) return e;
                      a = "number(px) or string(unit)";
                      break;
                    case I:
                      if (r) return e + this.unit;
                      if (c && t.test(e)) return e;
                      a = "number(px) or string(unit or %)";
                      break;
                    case h:
                      if (r) return e + this.angle;
                      if (c && t.test(e)) return e;
                      a = "number(deg) or string(angle)";
                      break;
                    case O:
                      if (r || (c && I.test(e))) return e;
                      a = "number(unitless) or string(unit or %)";
                  }
                  return (
                    o(
                      "Type warning: Expected: [" +
                        a +
                        "] Got: [" +
                        typeof e +
                        "] " +
                        e
                    ),
                    e
                  );
                }),
                (e.redraw = function () {
                  this.el.offsetHeight;
                });
            }),
            k = l(x, function (e, t) {
              e.init = function () {
                t.init.apply(this, arguments),
                  this.original ||
                    (this.original = this.convert(this.get(), m));
              };
            }),
            G = l(x, function (e, t) {
              (e.init = function () {
                t.init.apply(this, arguments), (this.animate = this.fallback);
              }),
                (e.get = function () {
                  return this.$el[this.name]();
                }),
                (e.update = function (e) {
                  this.$el[this.name](e);
                });
            }),
            U = l(x, function (e, t) {
              function n(e, t) {
                var n, i, a, r, o;
                for (n in e)
                  (a = (r = $[n])[0]),
                    (i = r[1] || n),
                    (o = this.convert(e[n], a)),
                    t.call(this, i, o, a);
              }
              (e.init = function () {
                t.init.apply(this, arguments),
                  this.current ||
                    ((this.current = {}),
                    $.perspective &&
                      j.perspective &&
                      ((this.current.perspective = j.perspective),
                      W(this.el, this.name, this.style(this.current)),
                      this.redraw()));
              }),
                (e.set = function (e) {
                  n.call(this, e, function (e, t) {
                    this.current[e] = t;
                  }),
                    W(this.el, this.name, this.style(this.current)),
                    this.redraw();
                }),
                (e.transition = function (e) {
                  var t = this.values(e);
                  this.tween = new X({
                    current: this.current,
                    values: t,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                  });
                  var n,
                    i = {};
                  for (n in this.current)
                    i[n] = n in t ? t[n] : this.current[n];
                  (this.active = !0), (this.nextStyle = this.style(i));
                }),
                (e.fallback = function (e) {
                  var t = this.values(e);
                  this.tween = new X({
                    current: this.current,
                    values: t,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  });
                }),
                (e.update = function () {
                  W(this.el, this.name, this.style(this.current));
                }),
                (e.style = function (e) {
                  var t,
                    n = "";
                  for (t in e) n += t + "(" + e[t] + ") ";
                  return n;
                }),
                (e.values = function (e) {
                  var t,
                    i = {};
                  return (
                    n.call(this, e, function (e, n, a) {
                      (i[e] = n),
                        void 0 === this.current[e] &&
                          ((t = 0),
                          ~e.indexOf("scale") && (t = 1),
                          (this.current[e] = this.convert(t, a)));
                    }),
                    i
                  );
                });
            }),
            D = l(function (t) {
              function r() {
                var e,
                  t,
                  n,
                  i = u.length;
                if (i)
                  for (M(r), t = P(), e = i; e--; ) (n = u[e]) && n.render(t);
              }
              var c = { ease: s.ease[1], from: 0, to: 1 };
              (t.init = function (e) {
                (this.duration = e.duration || 0), (this.delay = e.delay || 0);
                var t = e.ease || c.ease;
                s[t] && (t = s[t][1]),
                  "function" != typeof t && (t = c.ease),
                  (this.ease = t),
                  (this.update = e.update || a),
                  (this.complete = e.complete || a),
                  (this.context = e.context || this),
                  (this.name = e.name);
                var n = e.from,
                  i = e.to;
                void 0 === n && (n = c.from),
                  void 0 === i && (i = c.to),
                  (this.unit = e.unit || ""),
                  "number" == typeof n && "number" == typeof i
                    ? ((this.begin = n), (this.change = i - n))
                    : this.format(i, n),
                  (this.value = this.begin + this.unit),
                  (this.start = P()),
                  !1 !== e.autoplay && this.play();
              }),
                (t.play = function () {
                  this.active ||
                    (this.start || (this.start = P()),
                    (this.active = !0),
                    1 === u.push(this) && M(r));
                }),
                (t.stop = function () {
                  var t, n;
                  this.active &&
                    ((this.active = !1),
                    (n = e.inArray(this, u)) >= 0 &&
                      ((t = u.slice(n + 1)),
                      (u.length = n),
                      t.length && (u = u.concat(t))));
                }),
                (t.render = function (e) {
                  var t,
                    n = e - this.start;
                  if (this.delay) {
                    if (n <= this.delay) return;
                    n -= this.delay;
                  }
                  if (n < this.duration) {
                    var a,
                      r,
                      o = this.ease(n, 0, 1, this.duration);
                    return (
                      (t = this.startRGB
                        ? ((a = this.startRGB),
                          (r = this.endRGB),
                          i(
                            a[0] + o * (r[0] - a[0]),
                            a[1] + o * (r[1] - a[1]),
                            a[2] + o * (r[2] - a[2])
                          ))
                        : Math.round((this.begin + o * this.change) * d) / d),
                      (this.value = t + this.unit),
                      void this.update.call(this.context, this.value)
                    );
                  }
                  (t = this.endHex || this.begin + this.change),
                    (this.value = t + this.unit),
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy();
                }),
                (t.format = function (e, t) {
                  if (((t += ""), "#" == (e += "").charAt(0)))
                    return (
                      (this.startRGB = n(t)),
                      (this.endRGB = n(e)),
                      (this.endHex = e),
                      (this.begin = 0),
                      void (this.change = 1)
                    );
                  if (!this.unit) {
                    var i = t.replace(E, "");
                    i !== e.replace(E, "") &&
                      o("Units do not match [tween]: " + t + ", " + e),
                      (this.unit = i);
                  }
                  (t = parseFloat(t)),
                    (e = parseFloat(e)),
                    (this.begin = this.value = t),
                    (this.change = e - t);
                }),
                (t.destroy = function () {
                  this.stop(),
                    (this.context = null),
                    (this.ease = this.update = this.complete = a);
                });
              var u = [],
                d = 1e3;
            }),
            B = l(D, function (e) {
              (e.init = function (e) {
                (this.duration = e.duration || 0),
                  (this.complete = e.complete || a),
                  (this.context = e.context),
                  this.play();
              }),
                (e.render = function (e) {
                  e - this.start < this.duration ||
                    (this.complete.call(this.context), this.destroy());
                });
            }),
            X = l(D, function (e, t) {
              (e.init = function (e) {
                var t, n;
                for (t in ((this.context = e.context),
                (this.update = e.update),
                (this.tweens = []),
                (this.current = e.current),
                e.values))
                  (n = e.values[t]),
                    this.current[t] !== n &&
                      this.tweens.push(
                        new D({
                          name: t,
                          from: this.current[t],
                          to: n,
                          duration: e.duration,
                          delay: e.delay,
                          ease: e.ease,
                          autoplay: !1,
                        })
                      );
                this.play();
              }),
                (e.render = function (e) {
                  var t,
                    n,
                    i = this.tweens.length,
                    a = !1;
                  for (t = i; t--; )
                    (n = this.tweens[t]).context &&
                      (n.render(e), (this.current[n.name] = n.value), (a = !0));
                  return a
                    ? void (this.update && this.update.call(this.context))
                    : this.destroy();
                }),
                (e.destroy = function () {
                  if ((t.destroy.call(this), this.tweens)) {
                    var e;
                    for (e = this.tweens.length; e--; )
                      this.tweens[e].destroy();
                    (this.tweens = null), (this.current = null);
                  }
                });
            }),
            j = (t.config = {
              debug: !1,
              defaultUnit: "px",
              defaultAngle: "deg",
              keepInherited: !1,
              hideBackface: !1,
              perspective: "",
              fallback: !L.transition,
              agentTests: [],
            });
          (t.fallback = function (e) {
            if (!L.transition) return (j.fallback = !0);
            j.agentTests.push("(" + e + ")");
            var t = RegExp(j.agentTests.join("|"), "i");
            j.fallback = t.test(navigator.userAgent);
          }),
            t.fallback("6.0.[2-5] Safari"),
            (t.tween = function (e) {
              return new D(e);
            }),
            (t.delay = function (e, t, n) {
              return new B({ complete: t, duration: e, context: n });
            }),
            (e.fn.tram = function (e) {
              return t.call(null, this, e);
            });
          var W = e.style,
            z = e.css,
            Y = { transform: L.transform && L.transform.css },
            H = {
              color: [k, m],
              background: [k, m, "background-color"],
              "outline-color": [k, m],
              "border-color": [k, m],
              "border-top-color": [k, m],
              "border-right-color": [k, m],
              "border-bottom-color": [k, m],
              "border-left-color": [k, m],
              "border-width": [x, T],
              "border-top-width": [x, T],
              "border-right-width": [x, T],
              "border-bottom-width": [x, T],
              "border-left-width": [x, T],
              "border-spacing": [x, T],
              "letter-spacing": [x, T],
              margin: [x, T],
              "margin-top": [x, T],
              "margin-right": [x, T],
              "margin-bottom": [x, T],
              "margin-left": [x, T],
              padding: [x, T],
              "padding-top": [x, T],
              "padding-right": [x, T],
              "padding-bottom": [x, T],
              "padding-left": [x, T],
              "outline-width": [x, T],
              opacity: [x, y],
              top: [x, I],
              right: [x, I],
              bottom: [x, I],
              left: [x, I],
              "font-size": [x, I],
              "text-indent": [x, I],
              "word-spacing": [x, I],
              width: [x, I],
              "min-width": [x, I],
              "max-width": [x, I],
              height: [x, I],
              "min-height": [x, I],
              "max-height": [x, I],
              "line-height": [x, O],
              "scroll-top": [G, y, "scrollTop"],
              "scroll-left": [G, y, "scrollLeft"],
            },
            $ = {};
          L.transform &&
            ((H.transform = [U]),
            ($ = {
              x: [I, "translateX"],
              y: [I, "translateY"],
              rotate: [h],
              rotateX: [h],
              rotateY: [h],
              scale: [y],
              scaleX: [y],
              scaleY: [y],
              skew: [h],
              skewX: [h],
              skewY: [h],
            })),
            L.transform &&
              L.backface &&
              (($.z = [I, "translateZ"]),
              ($.rotateZ = [h]),
              ($.scaleZ = [y]),
              ($.perspective = [T]));
          var Q = /ms/,
            q = /s|\./;
          return (e.tram = t);
        })(window.jQuery);
      },
      5756: function (e, t, n) {
        "use strict";
        var i,
          a,
          r,
          o,
          c,
          u,
          d,
          l,
          s,
          f,
          p,
          b,
          E,
          g,
          y,
          m,
          T,
          I,
          h,
          O,
          _ = window.$,
          v = n(5487) && _.tram;
        ((i = {}).VERSION = "1.6.0-Webflow"),
          (a = {}),
          (r = Array.prototype),
          (o = Object.prototype),
          (c = Function.prototype),
          r.push,
          (u = r.slice),
          r.concat,
          o.toString,
          (d = o.hasOwnProperty),
          (l = r.forEach),
          (s = r.map),
          r.reduce,
          r.reduceRight,
          (f = r.filter),
          r.every,
          (p = r.some),
          (b = r.indexOf),
          r.lastIndexOf,
          (E = Object.keys),
          c.bind,
          (g =
            i.each =
            i.forEach =
              function (e, t, n) {
                if (null == e) return e;
                if (l && e.forEach === l) e.forEach(t, n);
                else if (e.length === +e.length) {
                  for (var r = 0, o = e.length; r < o; r++)
                    if (t.call(n, e[r], r, e) === a) return;
                } else
                  for (var c = i.keys(e), r = 0, o = c.length; r < o; r++)
                    if (t.call(n, e[c[r]], c[r], e) === a) return;
                return e;
              }),
          (i.map = i.collect =
            function (e, t, n) {
              var i = [];
              return null == e
                ? i
                : s && e.map === s
                ? e.map(t, n)
                : (g(e, function (e, a, r) {
                    i.push(t.call(n, e, a, r));
                  }),
                  i);
            }),
          (i.find = i.detect =
            function (e, t, n) {
              var i;
              return (
                y(e, function (e, a, r) {
                  if (t.call(n, e, a, r)) return (i = e), !0;
                }),
                i
              );
            }),
          (i.filter = i.select =
            function (e, t, n) {
              var i = [];
              return null == e
                ? i
                : f && e.filter === f
                ? e.filter(t, n)
                : (g(e, function (e, a, r) {
                    t.call(n, e, a, r) && i.push(e);
                  }),
                  i);
            }),
          (y =
            i.some =
            i.any =
              function (e, t, n) {
                t || (t = i.identity);
                var r = !1;
                return null == e
                  ? r
                  : p && e.some === p
                  ? e.some(t, n)
                  : (g(e, function (e, i, o) {
                      if (r || (r = t.call(n, e, i, o))) return a;
                    }),
                    !!r);
              }),
          (i.contains = i.include =
            function (e, t) {
              return (
                null != e &&
                (b && e.indexOf === b
                  ? -1 != e.indexOf(t)
                  : y(e, function (e) {
                      return e === t;
                    }))
              );
            }),
          (i.delay = function (e, t) {
            var n = u.call(arguments, 2);
            return setTimeout(function () {
              return e.apply(null, n);
            }, t);
          }),
          (i.defer = function (e) {
            return i.delay.apply(i, [e, 1].concat(u.call(arguments, 1)));
          }),
          (i.throttle = function (e) {
            var t, n, i;
            return function () {
              t ||
                ((t = !0),
                (n = arguments),
                (i = this),
                v.frame(function () {
                  (t = !1), e.apply(i, n);
                }));
            };
          }),
          (i.debounce = function (e, t, n) {
            var a,
              r,
              o,
              c,
              u,
              d = function () {
                var l = i.now() - c;
                l < t
                  ? (a = setTimeout(d, t - l))
                  : ((a = null), n || ((u = e.apply(o, r)), (o = r = null)));
              };
            return function () {
              (o = this), (r = arguments), (c = i.now());
              var l = n && !a;
              return (
                a || (a = setTimeout(d, t)),
                l && ((u = e.apply(o, r)), (o = r = null)),
                u
              );
            };
          }),
          (i.defaults = function (e) {
            if (!i.isObject(e)) return e;
            for (var t = 1, n = arguments.length; t < n; t++) {
              var a = arguments[t];
              for (var r in a) void 0 === e[r] && (e[r] = a[r]);
            }
            return e;
          }),
          (i.keys = function (e) {
            if (!i.isObject(e)) return [];
            if (E) return E(e);
            var t = [];
            for (var n in e) i.has(e, n) && t.push(n);
            return t;
          }),
          (i.has = function (e, t) {
            return d.call(e, t);
          }),
          (i.isObject = function (e) {
            return e === Object(e);
          }),
          (i.now =
            Date.now ||
            function () {
              return new Date().getTime();
            }),
          (i.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g,
          }),
          (m = /(.)^/),
          (T = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029",
          }),
          (I = /\\|'|\r|\n|\u2028|\u2029/g),
          (h = function (e) {
            return "\\" + T[e];
          }),
          (O = /^\s*(\w|\$)+\s*$/),
          (i.template = function (e, t, n) {
            !t && n && (t = n);
            var a,
              r = RegExp(
                [
                  ((t = i.defaults({}, t, i.templateSettings)).escape || m)
                    .source,
                  (t.interpolate || m).source,
                  (t.evaluate || m).source,
                ].join("|") + "|$",
                "g"
              ),
              o = 0,
              c = "__p+='";
            e.replace(r, function (t, n, i, a, r) {
              return (
                (c += e.slice(o, r).replace(I, h)),
                (o = r + t.length),
                n
                  ? (c += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                  : i
                  ? (c += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                  : a && (c += "';\n" + a + "\n__p+='"),
                t
              );
            }),
              (c += "';\n");
            var u = t.variable;
            if (u) {
              if (!O.test(u))
                throw Error("variable is not a bare identifier: " + u);
            } else (c = "with(obj||{}){\n" + c + "}\n"), (u = "obj");
            c =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              c +
              "return __p;\n";
            try {
              a = Function(t.variable || "obj", "_", c);
            } catch (e) {
              throw ((e.source = c), e);
            }
            var d = function (e) {
              return a.call(this, e, i);
            };
            return (d.source = "function(" + u + "){\n" + c + "}"), d;
          }),
          (e.exports = i);
      },
      9461: function (e, t, n) {
        "use strict";
        var i = n(3949);
        i.define(
          "brand",
          (e.exports = function (e) {
            var t,
              n = {},
              a = document,
              r = e("html"),
              o = e("body"),
              c = window.location,
              u = /PhantomJS/i.test(navigator.userAgent),
              d =
                "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
            function l() {
              var n =
                a.fullScreen ||
                a.mozFullScreen ||
                a.webkitIsFullScreen ||
                a.msFullscreenElement ||
                !!a.webkitFullscreenElement;
              e(t).attr("style", n ? "display: none !important;" : "");
            }
            function s() {
              var e = o.children(".w-webflow-badge"),
                n = e.length && e.get(0) === t,
                a = i.env("editor");
              if (n) {
                a && e.remove();
                return;
              }
              e.length && e.remove(), a || o.append(t);
            }
            return (
              (n.ready = function () {
                var n,
                  i,
                  o,
                  f = r.attr("data-wf-status"),
                  p = r.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(p) && c.hostname !== p && (f = !0),
                  f &&
                    !u &&
                    ((t =
                      t ||
                      ((n = e('<a class="w-webflow-badge"></a>').attr(
                        "href",
                        "https://webflow.com?utm_campaign=brandjs"
                      )),
                      (i = e("<img>")
                        .attr(
                          "src",
                          "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                        )
                        .attr("alt", "")
                        .css({ marginRight: "4px", width: "26px" })),
                      (o = e("<img>")
                        .attr(
                          "src",
                          "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                        )
                        .attr("alt", "Made in Webflow")),
                      n.append(i, o),
                      n[0])),
                    s(),
                    setTimeout(s, 500),
                    e(a).off(d, l).on(d, l));
              }),
              n
            );
          })
        );
      },
      322: function (e, t, n) {
        "use strict";
        var i = n(3949);
        i.define(
          "edit",
          (e.exports = function (e, t, n) {
            if (
              ((n = n || {}),
              (i.env("test") || i.env("frame")) &&
                !n.fixture &&
                !(function () {
                  try {
                    return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                  } catch (e) {
                    return !1;
                  }
                })())
            )
              return { exit: 1 };
            var a,
              r = e(window),
              o = e(document.documentElement),
              c = document.location,
              u = "hashchange",
              d =
                n.load ||
                function () {
                  var t, n, i;
                  (a = !0),
                    (window.WebflowEditor = !0),
                    r.off(u, s),
                    (t = function (t) {
                      var n;
                      e.ajax({
                        url: p(
                          "https://editor-api.webflow.com/api/editor/view"
                        ),
                        data: { siteId: o.attr("data-wf-site") },
                        xhrFields: { withCredentials: !0 },
                        dataType: "json",
                        crossDomain: !0,
                        success:
                          ((n = t),
                          function (t) {
                            var i, a, r;
                            if (!t)
                              return void console.error(
                                "Could not load editor data"
                              );
                            (t.thirdPartyCookiesSupported = n),
                              (a =
                                (i = t.scriptPath).indexOf("//") >= 0
                                  ? i
                                  : p("https://editor-api.webflow.com" + i)),
                              (r = function () {
                                window.WebflowEditor(t);
                              }),
                              e
                                .ajax({
                                  type: "GET",
                                  url: a,
                                  dataType: "script",
                                  cache: !0,
                                })
                                .then(r, f);
                          }),
                      });
                    }),
                    ((n = window.document.createElement("iframe")).src =
                      "https://webflow.com/site/third-party-cookie-check.html"),
                    (n.style.display = "none"),
                    (n.sandbox = "allow-scripts allow-same-origin"),
                    (i = function (e) {
                      "WF_third_party_cookies_unsupported" === e.data
                        ? (b(n, i), t(!1))
                        : "WF_third_party_cookies_supported" === e.data &&
                          (b(n, i), t(!0));
                    }),
                    (n.onerror = function () {
                      b(n, i), t(!1);
                    }),
                    window.addEventListener("message", i, !1),
                    window.document.body.appendChild(n);
                },
              l = !1;
            try {
              l =
                localStorage &&
                localStorage.getItem &&
                localStorage.getItem("WebflowEditor");
            } catch (e) {}
            function s() {
              !a && /\?edit/.test(c.hash) && d();
            }
            function f(e, t, n) {
              throw (console.error("Could not load editor script: " + t), n);
            }
            function p(e) {
              return e.replace(/([^:])\/\//g, "$1/");
            }
            function b(e, t) {
              window.removeEventListener("message", t, !1), e.remove();
            }
            return (
              l
                ? d()
                : c.search
                ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) ||
                    /\?edit$/.test(c.href)) &&
                  d()
                : r.on(u, s).triggerHandler(u),
              {}
            );
          })
        );
      },
      2338: function (e, t, n) {
        "use strict";
        n(3949).define(
          "focus-visible",
          (e.exports = function () {
            return {
              ready: function () {
                if ("undefined" != typeof document)
                  try {
                    document.querySelector(":focus-visible");
                  } catch (e) {
                    !(function (e) {
                      var t = !0,
                        n = !1,
                        i = null,
                        a = {
                          text: !0,
                          search: !0,
                          url: !0,
                          tel: !0,
                          email: !0,
                          password: !0,
                          number: !0,
                          date: !0,
                          month: !0,
                          week: !0,
                          time: !0,
                          datetime: !0,
                          "datetime-local": !0,
                        };
                      function r(e) {
                        return (
                          !!e &&
                          e !== document &&
                          "HTML" !== e.nodeName &&
                          "BODY" !== e.nodeName &&
                          "classList" in e &&
                          "contains" in e.classList
                        );
                      }
                      function o(e) {
                        e.getAttribute("data-wf-focus-visible") ||
                          e.setAttribute("data-wf-focus-visible", "true");
                      }
                      function c() {
                        t = !1;
                      }
                      function u() {
                        document.addEventListener("mousemove", d),
                          document.addEventListener("mousedown", d),
                          document.addEventListener("mouseup", d),
                          document.addEventListener("pointermove", d),
                          document.addEventListener("pointerdown", d),
                          document.addEventListener("pointerup", d),
                          document.addEventListener("touchmove", d),
                          document.addEventListener("touchstart", d),
                          document.addEventListener("touchend", d);
                      }
                      function d(e) {
                        (e.target.nodeName &&
                          "html" === e.target.nodeName.toLowerCase()) ||
                          ((t = !1),
                          document.removeEventListener("mousemove", d),
                          document.removeEventListener("mousedown", d),
                          document.removeEventListener("mouseup", d),
                          document.removeEventListener("pointermove", d),
                          document.removeEventListener("pointerdown", d),
                          document.removeEventListener("pointerup", d),
                          document.removeEventListener("touchmove", d),
                          document.removeEventListener("touchstart", d),
                          document.removeEventListener("touchend", d));
                      }
                      document.addEventListener(
                        "keydown",
                        function (n) {
                          n.metaKey ||
                            n.altKey ||
                            n.ctrlKey ||
                            (r(e.activeElement) && o(e.activeElement),
                            (t = !0));
                        },
                        !0
                      ),
                        document.addEventListener("mousedown", c, !0),
                        document.addEventListener("pointerdown", c, !0),
                        document.addEventListener("touchstart", c, !0),
                        document.addEventListener(
                          "visibilitychange",
                          function () {
                            "hidden" === document.visibilityState &&
                              (n && (t = !0), u());
                          },
                          !0
                        ),
                        u(),
                        e.addEventListener(
                          "focus",
                          function (e) {
                            if (r(e.target)) {
                              var n, i, c;
                              (t ||
                                ((i = (n = e.target).type),
                                ("INPUT" === (c = n.tagName) &&
                                  a[i] &&
                                  !n.readOnly) ||
                                  ("TEXTAREA" === c && !n.readOnly) ||
                                  n.isContentEditable ||
                                  0)) &&
                                o(e.target);
                            }
                          },
                          !0
                        ),
                        e.addEventListener(
                          "blur",
                          function (e) {
                            if (
                              r(e.target) &&
                              e.target.hasAttribute("data-wf-focus-visible")
                            ) {
                              var t;
                              (n = !0),
                                window.clearTimeout(i),
                                (i = window.setTimeout(function () {
                                  n = !1;
                                }, 100)),
                                (t = e.target).getAttribute(
                                  "data-wf-focus-visible"
                                ) && t.removeAttribute("data-wf-focus-visible");
                            }
                          },
                          !0
                        );
                    })(document);
                  }
              },
            };
          })
        );
      },
      8334: function (e, t, n) {
        "use strict";
        var i = n(3949);
        i.define(
          "focus",
          (e.exports = function () {
            var e = [],
              t = !1;
            function n(n) {
              t &&
                (n.preventDefault(),
                n.stopPropagation(),
                n.stopImmediatePropagation(),
                e.unshift(n));
            }
            function a(n) {
              var i, a;
              (a = (i = n.target).tagName),
                ((/^a$/i.test(a) && null != i.href) ||
                  (/^(button|textarea)$/i.test(a) && !0 !== i.disabled) ||
                  (/^input$/i.test(a) &&
                    /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                    !i.disabled) ||
                  (!/^(button|input|textarea|select|a)$/i.test(a) &&
                    !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                  /^audio$/i.test(a) ||
                  (/^video$/i.test(a) && !0 === i.controls)) &&
                  ((t = !0),
                  setTimeout(() => {
                    for (t = !1, n.target.focus(); e.length > 0; ) {
                      var i = e.pop();
                      i.target.dispatchEvent(new MouseEvent(i.type, i));
                    }
                  }, 0));
            }
            return {
              ready: function () {
                "undefined" != typeof document &&
                  document.body.hasAttribute("data-wf-focus-within") &&
                  i.env.safari &&
                  (document.addEventListener("mousedown", a, !0),
                  document.addEventListener("mouseup", n, !0),
                  document.addEventListener("click", n, !0));
              },
            };
          })
        );
      },
      7199: function (e) {
        "use strict";
        var t = window.jQuery,
          n = {},
          i = [],
          a = ".w-ix",
          r = {
            reset: function (e, t) {
              t.__wf_intro = null;
            },
            intro: function (e, i) {
              i.__wf_intro ||
                ((i.__wf_intro = !0), t(i).triggerHandler(n.types.INTRO));
            },
            outro: function (e, i) {
              i.__wf_intro &&
                ((i.__wf_intro = null), t(i).triggerHandler(n.types.OUTRO));
            },
          };
        (n.triggers = {}),
          (n.types = { INTRO: "w-ix-intro" + a, OUTRO: "w-ix-outro" + a }),
          (n.init = function () {
            for (var e = i.length, a = 0; a < e; a++) {
              var o = i[a];
              o[0](0, o[1]);
            }
            (i = []), t.extend(n.triggers, r);
          }),
          (n.async = function () {
            for (var e in r) {
              var t = r[e];
              r.hasOwnProperty(e) &&
                (n.triggers[e] = function (e, n) {
                  i.push([t, n]);
                });
            }
          }),
          n.async(),
          (e.exports = n);
      },
      5134: function (e, t, n) {
        "use strict";
        var i = n(7199);
        function a(e, t) {
          var n = document.createEvent("CustomEvent");
          n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
        }
        var r = window.jQuery,
          o = {},
          c = ".w-ix";
        (o.triggers = {}),
          (o.types = { INTRO: "w-ix-intro" + c, OUTRO: "w-ix-outro" + c }),
          r.extend(o.triggers, {
            reset: function (e, t) {
              i.triggers.reset(e, t);
            },
            intro: function (e, t) {
              i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE");
            },
            outro: function (e, t) {
              i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE");
            },
          }),
          (e.exports = o);
      },
      941: function (e, t, n) {
        "use strict";
        var i = n(3949),
          a = n(6011);
        a.setEnv(i.env),
          i.define(
            "ix2",
            (e.exports = function () {
              return a;
            })
          );
      },
      3949: function (e, t, n) {
        "use strict";
        var i,
          a,
          r = {},
          o = {},
          c = [],
          u = window.Webflow || [],
          d = window.jQuery,
          l = d(window),
          s = d(document),
          f = d.isFunction,
          p = (r._ = n(5756)),
          b = (r.tram = n(5487) && d.tram),
          E = !1,
          g = !1;
        function y(e) {
          r.env() &&
            (f(e.design) && l.on("__wf_design", e.design),
            f(e.preview) && l.on("__wf_preview", e.preview)),
            f(e.destroy) && l.on("__wf_destroy", e.destroy),
            e.ready &&
              f(e.ready) &&
              (function (e) {
                if (E) return e.ready();
                p.contains(c, e.ready) || c.push(e.ready);
              })(e);
        }
        function m(e) {
          var t;
          f(e.design) && l.off("__wf_design", e.design),
            f(e.preview) && l.off("__wf_preview", e.preview),
            f(e.destroy) && l.off("__wf_destroy", e.destroy),
            e.ready &&
              f(e.ready) &&
              ((t = e),
              (c = p.filter(c, function (e) {
                return e !== t.ready;
              })));
        }
        (b.config.hideBackface = !1),
          (b.config.keepInherited = !0),
          (r.define = function (e, t, n) {
            o[e] && m(o[e]);
            var i = (o[e] = t(d, p, n) || {});
            return y(i), i;
          }),
          (r.require = function (e) {
            return o[e];
          }),
          (r.push = function (e) {
            if (E) {
              f(e) && e();
              return;
            }
            u.push(e);
          }),
          (r.env = function (e) {
            var t = window.__wf_design,
              n = void 0 !== t;
            return e
              ? "design" === e
                ? n && t
                : "preview" === e
                ? n && !t
                : "slug" === e
                ? n && window.__wf_slug
                : "editor" === e
                ? window.WebflowEditor
                : "test" === e
                ? window.__wf_test
                : "frame" === e
                ? window !== window.top
                : void 0
              : n;
          });
        var T = navigator.userAgent.toLowerCase(),
          I = (r.env.touch =
            "ontouchstart" in window ||
            (window.DocumentTouch && document instanceof window.DocumentTouch)),
          h = (r.env.chrome =
            /chrome/.test(T) &&
            /Google/.test(navigator.vendor) &&
            parseInt(T.match(/chrome\/(\d+)\./)[1], 10)),
          O = (r.env.ios = /(ipod|iphone|ipad)/.test(T));
        (r.env.safari = /safari/.test(T) && !h && !O),
          I &&
            s.on("touchstart mousedown", function (e) {
              i = e.target;
            }),
          (r.validClick = I
            ? function (e) {
                return e === i || d.contains(e, i);
              }
            : function () {
                return !0;
              });
        var _ = "resize.webflow orientationchange.webflow load.webflow",
          v = "scroll.webflow " + _;
        function A(e, t) {
          var n = [],
            i = {};
          return (
            (i.up = p.throttle(function (e) {
              p.each(n, function (t) {
                t(e);
              });
            })),
            e && t && e.on(t, i.up),
            (i.on = function (e) {
              "function" == typeof e && (p.contains(n, e) || n.push(e));
            }),
            (i.off = function (e) {
              if (!arguments.length) {
                n = [];
                return;
              }
              n = p.filter(n, function (t) {
                return t !== e;
              });
            }),
            i
          );
        }
        function R(e) {
          f(e) && e();
        }
        function N() {
          a && (a.reject(), l.off("load", a.resolve)),
            (a = new d.Deferred()),
            l.on("load", a.resolve);
        }
        (r.resize = A(l, _)),
          (r.scroll = A(l, v)),
          (r.redraw = A()),
          (r.location = function (e) {
            window.location = e;
          }),
          r.env() && (r.location = function () {}),
          (r.ready = function () {
            (E = !0),
              g ? ((g = !1), p.each(o, y)) : p.each(c, R),
              p.each(u, R),
              r.resize.up();
          }),
          (r.load = function (e) {
            a.then(e);
          }),
          (r.destroy = function (e) {
            (e = e || {}),
              (g = !0),
              l.triggerHandler("__wf_destroy"),
              null != e.domready && (E = e.domready),
              p.each(o, m),
              r.resize.off(),
              r.scroll.off(),
              r.redraw.off(),
              (c = []),
              (u = []),
              "pending" === a.state() && N();
          }),
          d(r.ready),
          N(),
          (e.exports = window.Webflow = r);
      },
      7624: function (e, t, n) {
        "use strict";
        var i = n(3949);
        i.define(
          "links",
          (e.exports = function (e, t) {
            var n,
              a,
              r,
              o = {},
              c = e(window),
              u = i.env(),
              d = window.location,
              l = document.createElement("a"),
              s = "w--current",
              f = /index\.(html|php)$/,
              p = /\/$/;
            function b() {
              var e = c.scrollTop(),
                n = c.height();
              t.each(a, function (t) {
                if (!t.link.attr("hreflang")) {
                  var i = t.link,
                    a = t.sec,
                    r = a.offset().top,
                    o = a.outerHeight(),
                    c = 0.5 * n,
                    u = a.is(":visible") && r + o - c >= e && r + c <= e + n;
                  t.active !== u && ((t.active = u), E(i, s, u));
                }
              });
            }
            function E(e, t, n) {
              var i = e.hasClass(t);
              (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t));
            }
            return (
              (o.ready =
                o.design =
                o.preview =
                  function () {
                    (n = u && i.env("design")),
                      (r = i.env("slug") || d.pathname || ""),
                      i.scroll.off(b),
                      (a = []);
                    for (var t = document.links, o = 0; o < t.length; ++o)
                      !(function (t) {
                        if (!t.getAttribute("hreflang")) {
                          var i =
                            (n && t.getAttribute("href-disabled")) ||
                            t.getAttribute("href");
                          if (((l.href = i), !(i.indexOf(":") >= 0))) {
                            var o = e(t);
                            if (
                              l.hash.length > 1 &&
                              l.host + l.pathname === d.host + d.pathname
                            ) {
                              if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
                              var c = e(l.hash);
                              c.length &&
                                a.push({ link: o, sec: c, active: !1 });
                              return;
                            }
                            "#" !== i &&
                              "" !== i &&
                              E(
                                o,
                                s,
                                l.href === d.href ||
                                  i === r ||
                                  (f.test(i) && p.test(r))
                              );
                          }
                        }
                      })(t[o]);
                    a.length && (i.scroll.on(b), b());
                  }),
              o
            );
          })
        );
      },
      286: function (e, t, n) {
        "use strict";
        var i = n(3949);
        i.define(
          "scroll",
          (e.exports = function (e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll",
              },
              n = window.location,
              a = !(function () {
                try {
                  return !!window.frameElement;
                } catch (e) {
                  return !0;
                }
              })()
                ? window.history
                : null,
              r = e(window),
              o = e(document),
              c = e(document.body),
              u =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function (e) {
                  window.setTimeout(e, 15);
                },
              d = i.env("editor") ? ".w-editor-body" : "body",
              l =
                "header, " +
                d +
                " > .header, " +
                d +
                " > .w-nav:not([data-no-scroll])",
              s = 'a[href="#"]',
              f = 'a[href*="#"]:not(.w-tab-link):not(' + s + ")",
              p = document.createElement("style");
            p.appendChild(
              document.createTextNode(
                '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              )
            );
            var b = /^#[a-zA-Z0-9][\w:.-]*$/;
            let E =
              "function" == typeof window.matchMedia &&
              window.matchMedia("(prefers-reduced-motion: reduce)");
            function g(e, t) {
              var n;
              switch (t) {
                case "add":
                  (n = e.attr("tabindex"))
                    ? e.attr("data-wf-tabindex-swap", n)
                    : e.attr("tabindex", "-1");
                  break;
                case "remove":
                  (n = e.attr("data-wf-tabindex-swap"))
                    ? (e.attr("tabindex", n),
                      e.removeAttr("data-wf-tabindex-swap"))
                    : e.removeAttr("tabindex");
              }
              e.toggleClass("wf-force-outline-none", "add" === t);
            }
            function y(t) {
              var o = t.currentTarget;
              if (
                !(
                  i.env("design") ||
                  (window.$.mobile &&
                    /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
                )
              ) {
                var d =
                  b.test(o.hash) && o.host + o.pathname === n.host + n.pathname
                    ? o.hash
                    : "";
                if ("" !== d) {
                  var s,
                    f = e(d);
                  f.length &&
                    (t && (t.preventDefault(), t.stopPropagation()),
                    (s = d),
                    n.hash !== s &&
                      a &&
                      a.pushState &&
                      !(i.env.chrome && "file:" === n.protocol) &&
                      (a.state && a.state.hash) !== s &&
                      a.pushState({ hash: s }, "", s),
                    window.setTimeout(function () {
                      !(function (t, n) {
                        var i = r.scrollTop(),
                          a = (function (t) {
                            var n = e(l),
                              i =
                                "fixed" === n.css("position")
                                  ? n.outerHeight()
                                  : 0,
                              a = t.offset().top - i;
                            if ("mid" === t.data("scroll")) {
                              var o = r.height() - i,
                                c = t.outerHeight();
                              c < o && (a -= Math.round((o - c) / 2));
                            }
                            return a;
                          })(t);
                        if (i !== a) {
                          var o = (function (e, t, n) {
                              if (
                                "none" ===
                                  document.body.getAttribute(
                                    "data-wf-scroll-motion"
                                  ) ||
                                E.matches
                              )
                                return 0;
                              var i = 1;
                              return (
                                c.add(e).each(function (e, t) {
                                  var n = parseFloat(
                                    t.getAttribute("data-scroll-time")
                                  );
                                  !isNaN(n) && n >= 0 && (i = n);
                                }),
                                (472.143 * Math.log(Math.abs(t - n) + 125) -
                                  2e3) *
                                  i
                              );
                            })(t, i, a),
                            d = Date.now(),
                            s = function () {
                              var e,
                                t,
                                r,
                                c,
                                l,
                                f = Date.now() - d;
                              window.scroll(
                                0,
                                ((e = i),
                                (t = a),
                                (r = f) > (c = o)
                                  ? t
                                  : e +
                                    (t - e) *
                                      ((l = r / c) < 0.5
                                        ? 4 * l * l * l
                                        : (l - 1) * (2 * l - 2) * (2 * l - 2) +
                                          1))
                              ),
                                f <= o ? u(s) : "function" == typeof n && n();
                            };
                          u(s);
                        }
                      })(f, function () {
                        g(f, "add"),
                          f.get(0).focus({ preventScroll: !0 }),
                          g(f, "remove");
                      });
                    }, 300 * !t));
                }
              }
            }
            return {
              ready: function () {
                var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
                o.on(n, f, y),
                  o.on(e, s, function (e) {
                    e.preventDefault();
                  }),
                  document.head.insertBefore(p, document.head.firstChild);
              },
            };
          })
        );
      },
      3695: function (e, t, n) {
        "use strict";
        n(3949).define(
          "touch",
          (e.exports = function (e) {
            var t = {},
              n = window.getSelection;
            function i(t) {
              var i,
                a,
                r = !1,
                o = !1,
                c = Math.min(Math.round(0.04 * window.innerWidth), 40);
              function u(e) {
                var t = e.touches;
                (t && t.length > 1) ||
                  ((r = !0),
                  t ? ((o = !0), (i = t[0].clientX)) : (i = e.clientX),
                  (a = i));
              }
              function d(t) {
                if (r) {
                  if (o && "mousemove" === t.type) {
                    t.preventDefault(), t.stopPropagation();
                    return;
                  }
                  var i,
                    u,
                    d,
                    l,
                    f = t.touches,
                    p = f ? f[0].clientX : t.clientX,
                    b = p - a;
                  (a = p),
                    Math.abs(b) > c &&
                      n &&
                      "" === String(n()) &&
                      ((i = "swipe"),
                      (u = t),
                      (d = { direction: b > 0 ? "right" : "left" }),
                      (l = e.Event(i, { originalEvent: u })),
                      e(u.target).trigger(l, d),
                      s());
                }
              }
              function l(e) {
                if (r && ((r = !1), o && "mouseup" === e.type)) {
                  e.preventDefault(), e.stopPropagation(), (o = !1);
                  return;
                }
              }
              function s() {
                r = !1;
              }
              t.addEventListener("touchstart", u, !1),
                t.addEventListener("touchmove", d, !1),
                t.addEventListener("touchend", l, !1),
                t.addEventListener("touchcancel", s, !1),
                t.addEventListener("mousedown", u, !1),
                t.addEventListener("mousemove", d, !1),
                t.addEventListener("mouseup", l, !1),
                t.addEventListener("mouseout", s, !1),
                (this.destroy = function () {
                  t.removeEventListener("touchstart", u, !1),
                    t.removeEventListener("touchmove", d, !1),
                    t.removeEventListener("touchend", l, !1),
                    t.removeEventListener("touchcancel", s, !1),
                    t.removeEventListener("mousedown", u, !1),
                    t.removeEventListener("mousemove", d, !1),
                    t.removeEventListener("mouseup", l, !1),
                    t.removeEventListener("mouseout", s, !1),
                    (t = null);
                });
            }
            return (
              (e.event.special.tap = {
                bindType: "click",
                delegateType: "click",
              }),
              (t.init = function (t) {
                return (t = "string" == typeof t ? e(t).get(0) : t)
                  ? new i(t)
                  : null;
              }),
              (t.instance = t.init(document)),
              t
            );
          })
        );
      },
      1655: function (e, t, n) {
        "use strict";
        var i = n(3949),
          a = n(5134);
        let r = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        };
        i.define(
          "navbar",
          (e.exports = function (e, t) {
            var n,
              o,
              c,
              u,
              d = {},
              l = e.tram,
              s = e(window),
              f = e(document),
              p = t.debounce,
              b = i.env(),
              E = ".w-nav",
              g = "w--open",
              y = "w--nav-dropdown-open",
              m = "w--nav-dropdown-toggle-open",
              T = "w--nav-dropdown-list-open",
              I = "w--nav-link-open",
              h = a.triggers,
              O = e();
            function _() {
              i.resize.off(v);
            }
            function v() {
              o.each(F);
            }
            function A(n, i) {
              var a,
                o,
                d,
                l,
                p,
                b = e(i),
                g = e.data(i, E);
              g ||
                (g = e.data(i, E, {
                  open: !1,
                  el: b,
                  config: {},
                  selectedIdx: -1,
                })),
                (g.menu = b.find(".w-nav-menu")),
                (g.links = g.menu.find(".w-nav-link")),
                (g.dropdowns = g.menu.find(".w-dropdown")),
                (g.dropdownToggle = g.menu.find(".w-dropdown-toggle")),
                (g.dropdownList = g.menu.find(".w-dropdown-list")),
                (g.button = b.find(".w-nav-button")),
                (g.container = b.find(".w-container")),
                (g.overlayContainerId = "w-nav-overlay-" + n),
                (g.outside =
                  ((a = g).outside && f.off("click" + E, a.outside),
                  function (t) {
                    var n = e(t.target);
                    (u && n.closest(".w-editor-bem-EditorOverlay").length) ||
                      P(a, n);
                  }));
              var y = b.find(".w-nav-brand");
              y &&
                "/" === y.attr("href") &&
                null == y.attr("aria-label") &&
                y.attr("aria-label", "home"),
                g.button.attr("style", "-webkit-user-select: text;"),
                null == g.button.attr("aria-label") &&
                  g.button.attr("aria-label", "menu"),
                g.button.attr("role", "button"),
                g.button.attr("tabindex", "0"),
                g.button.attr("aria-controls", g.overlayContainerId),
                g.button.attr("aria-haspopup", "menu"),
                g.button.attr("aria-expanded", "false"),
                g.el.off(E),
                g.button.off(E),
                g.menu.off(E),
                S(g),
                c
                  ? (N(g),
                    g.el.on(
                      "setting" + E,
                      ((o = g),
                      function (e, n) {
                        n = n || {};
                        var i = s.width();
                        S(o),
                          !0 === n.open && G(o, !0),
                          !1 === n.open && D(o, !0),
                          o.open &&
                            t.defer(function () {
                              i !== s.width() && C(o);
                            });
                      })
                    ))
                  : ((d = g).overlay ||
                      ((d.overlay = e(
                        '<div class="w-nav-overlay" data-wf-ignore />'
                      ).appendTo(d.el)),
                      d.overlay.attr("id", d.overlayContainerId),
                      (d.parent = d.menu.parent()),
                      D(d, !0)),
                    g.button.on("click" + E, w(g)),
                    g.menu.on("click" + E, "a", M(g)),
                    g.button.on(
                      "keydown" + E,
                      ((l = g),
                      function (e) {
                        switch (e.keyCode) {
                          case r.SPACE:
                          case r.ENTER:
                            return (
                              w(l)(), e.preventDefault(), e.stopPropagation()
                            );
                          case r.ESCAPE:
                            return (
                              D(l), e.preventDefault(), e.stopPropagation()
                            );
                          case r.ARROW_RIGHT:
                          case r.ARROW_DOWN:
                          case r.HOME:
                          case r.END:
                            if (!l.open)
                              return e.preventDefault(), e.stopPropagation();
                            return (
                              e.keyCode === r.END
                                ? (l.selectedIdx = l.links.length - 1)
                                : (l.selectedIdx = 0),
                              L(l),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                      })
                    ),
                    g.el.on(
                      "keydown" + E,
                      ((p = g),
                      function (e) {
                        if (p.open)
                          switch (
                            ((p.selectedIdx = p.links.index(
                              document.activeElement
                            )),
                            e.keyCode)
                          ) {
                            case r.HOME:
                            case r.END:
                              return (
                                e.keyCode === r.END
                                  ? (p.selectedIdx = p.links.length - 1)
                                  : (p.selectedIdx = 0),
                                L(p),
                                e.preventDefault(),
                                e.stopPropagation()
                              );
                            case r.ESCAPE:
                              return (
                                D(p),
                                p.button.focus(),
                                e.preventDefault(),
                                e.stopPropagation()
                              );
                            case r.ARROW_LEFT:
                            case r.ARROW_UP:
                              return (
                                (p.selectedIdx = Math.max(
                                  -1,
                                  p.selectedIdx - 1
                                )),
                                L(p),
                                e.preventDefault(),
                                e.stopPropagation()
                              );
                            case r.ARROW_RIGHT:
                            case r.ARROW_DOWN:
                              return (
                                (p.selectedIdx = Math.min(
                                  p.links.length - 1,
                                  p.selectedIdx + 1
                                )),
                                L(p),
                                e.preventDefault(),
                                e.stopPropagation()
                              );
                          }
                      })
                    )),
                F(n, i);
            }
            function R(t, n) {
              var i = e.data(n, E);
              i && (N(i), e.removeData(n, E));
            }
            function N(e) {
              e.overlay && (D(e, !0), e.overlay.remove(), (e.overlay = null));
            }
            function S(e) {
              var n = {},
                i = e.config || {},
                a = (n.animation = e.el.attr("data-animation") || "default");
              (n.animOver = /^over/.test(a)),
                (n.animDirect = /left$/.test(a) ? -1 : 1),
                i.animation !== a && e.open && t.defer(C, e),
                (n.easing = e.el.attr("data-easing") || "ease"),
                (n.easing2 = e.el.attr("data-easing2") || "ease");
              var r = e.el.attr("data-duration");
              (n.duration = null != r ? Number(r) : 400),
                (n.docHeight = e.el.attr("data-doc-height")),
                (e.config = n);
            }
            function L(e) {
              if (e.links[e.selectedIdx]) {
                var t = e.links[e.selectedIdx];
                t.focus(), M(t);
              }
            }
            function C(e) {
              e.open && (D(e, !0), G(e, !0));
            }
            function w(e) {
              return p(function () {
                e.open ? D(e) : G(e);
              });
            }
            function M(t) {
              return function (n) {
                var a = e(this).attr("href");
                if (!i.validClick(n.currentTarget))
                  return void n.preventDefault();
                a && 0 === a.indexOf("#") && t.open && D(t);
              };
            }
            (d.ready =
              d.design =
              d.preview =
                function () {
                  (c = b && i.env("design")),
                    (u = i.env("editor")),
                    (n = e(document.body)),
                    (o = f.find(E)).length && (o.each(A), _(), i.resize.on(v));
                }),
              (d.destroy = function () {
                (O = e()), _(), o && o.length && o.each(R);
              });
            var P = p(function (e, t) {
              if (e.open) {
                var n = t.closest(".w-nav-menu");
                e.menu.is(n) || D(e);
              }
            });
            function F(t, n) {
              var i = e.data(n, E),
                a = (i.collapsed = "none" !== i.button.css("display"));
              if ((!i.open || a || c || D(i, !0), i.container.length)) {
                var r,
                  o =
                    ("none" === (r = i.container.css(V)) && (r = ""),
                    function (t, n) {
                      (n = e(n)).css(V, ""), "none" === n.css(V) && n.css(V, r);
                    });
                i.links.each(o), i.dropdowns.each(o);
              }
              i.open && U(i);
            }
            var V = "max-width";
            function x(e, t) {
              t.setAttribute("data-nav-menu-open", "");
            }
            function k(e, t) {
              t.removeAttribute("data-nav-menu-open");
            }
            function G(e, t) {
              if (!e.open) {
                (e.open = !0),
                  e.menu.each(x),
                  e.links.addClass(I),
                  e.dropdowns.addClass(y),
                  e.dropdownToggle.addClass(m),
                  e.dropdownList.addClass(T),
                  e.button.addClass(g);
                var n = e.config;
                ("none" === n.animation ||
                  !l.support.transform ||
                  n.duration <= 0) &&
                  (t = !0);
                var a = U(e),
                  r = e.menu.outerHeight(!0),
                  o = e.menu.outerWidth(!0),
                  u = e.el.height(),
                  d = e.el[0];
                if (
                  (F(0, d),
                  h.intro(0, d),
                  i.redraw.up(),
                  c || f.on("click" + E, e.outside),
                  t)
                )
                  return void p();
                var s = "transform " + n.duration + "ms " + n.easing;
                if (
                  (e.overlay &&
                    ((O = e.menu.prev()), e.overlay.show().append(e.menu)),
                  n.animOver)
                ) {
                  l(e.menu)
                    .add(s)
                    .set({ x: n.animDirect * o, height: a })
                    .start({ x: 0 })
                    .then(p),
                    e.overlay && e.overlay.width(o);
                  return;
                }
                l(e.menu)
                  .add(s)
                  .set({ y: -(u + r) })
                  .start({ y: 0 })
                  .then(p);
              }
              function p() {
                e.button.attr("aria-expanded", "true");
              }
            }
            function U(e) {
              var t = e.config,
                i = t.docHeight ? f.height() : n.height();
              return (
                t.animOver
                  ? e.menu.height(i)
                  : "fixed" !== e.el.css("position") &&
                    (i -= e.el.outerHeight(!0)),
                e.overlay && e.overlay.height(i),
                i
              );
            }
            function D(e, t) {
              if (e.open) {
                (e.open = !1), e.button.removeClass(g);
                var n = e.config;
                if (
                  (("none" === n.animation ||
                    !l.support.transform ||
                    n.duration <= 0) &&
                    (t = !0),
                  h.outro(0, e.el[0]),
                  f.off("click" + E, e.outside),
                  t)
                ) {
                  l(e.menu).stop(), c();
                  return;
                }
                var i = "transform " + n.duration + "ms " + n.easing2,
                  a = e.menu.outerHeight(!0),
                  r = e.menu.outerWidth(!0),
                  o = e.el.height();
                if (n.animOver)
                  return void l(e.menu)
                    .add(i)
                    .start({ x: r * n.animDirect })
                    .then(c);
                l(e.menu)
                  .add(i)
                  .start({ y: -(o + a) })
                  .then(c);
              }
              function c() {
                e.menu.height(""),
                  l(e.menu).set({ x: 0, y: 0 }),
                  e.menu.each(k),
                  e.links.removeClass(I),
                  e.dropdowns.removeClass(y),
                  e.dropdownToggle.removeClass(m),
                  e.dropdownList.removeClass(T),
                  e.overlay &&
                    e.overlay.children().length &&
                    (O.length
                      ? e.menu.insertAfter(O)
                      : e.menu.prependTo(e.parent),
                    e.overlay.attr("style", "").hide()),
                  e.el.triggerHandler("w-close"),
                  e.button.attr("aria-expanded", "false");
              }
            }
            return d;
          })
        );
      },
      9078: function (e, t, n) {
        "use strict";
        var i = n(3949),
          a = n(5134);
        i.define(
          "tabs",
          (e.exports = function (e) {
            var t,
              n,
              r = {},
              o = e.tram,
              c = e(document),
              u = i.env,
              d = u.safari,
              l = u(),
              s = "data-w-tab",
              f = ".w-tabs",
              p = "w--current",
              b = "w--tab-active",
              E = a.triggers,
              g = !1;
            function y() {
              (n = l && i.env("design")),
                (t = c.find(f)).length &&
                  (t.each(I),
                  i.env("preview") && !g && t.each(T),
                  m(),
                  i.redraw.on(r.redraw));
            }
            function m() {
              i.redraw.off(r.redraw);
            }
            function T(t, n) {
              var i = e.data(n, f);
              i &&
                (i.links && i.links.each(E.reset),
                i.panes && i.panes.each(E.reset));
            }
            function I(t, i) {
              var a = f.substr(1) + "-" + t,
                r = e(i),
                o = e.data(i, f);
              if (
                (o || (o = e.data(i, f, { el: r, config: {} })),
                (o.current = null),
                (o.tabIdentifier = a + "-" + s),
                (o.paneIdentifier = a + "-data-w-pane"),
                (o.menu = r.children(".w-tab-menu")),
                (o.links = o.menu.children(".w-tab-link")),
                (o.content = r.children(".w-tab-content")),
                (o.panes = o.content.children(".w-tab-pane")),
                o.el.off(f),
                o.links.off(f),
                o.menu.attr("role", "tablist"),
                o.links.attr("tabindex", "-1"),
                ((u = {}).easing = (c = o).el.attr("data-easing") || "ease"),
                (d = u.intro =
                  (d = parseInt(c.el.attr("data-duration-in"), 10)) == d
                    ? d
                    : 0),
                (l = u.outro =
                  (l = parseInt(c.el.attr("data-duration-out"), 10)) == l
                    ? l
                    : 0),
                (u.immediate = !d && !l),
                (c.config = u),
                !n)
              ) {
                o.links.on(
                  "click" + f,
                  ((b = o),
                  function (e) {
                    e.preventDefault();
                    var t = e.currentTarget.getAttribute(s);
                    t && h(b, { tab: t });
                  })
                ),
                  o.links.on(
                    "keydown" + f,
                    ((E = o),
                    function (e) {
                      var t,
                        n =
                          ((t = E.current),
                          Array.prototype.findIndex.call(
                            E.links,
                            (e) => e.getAttribute(s) === t,
                            null
                          )),
                        i = e.key,
                        a = {
                          ArrowLeft: n - 1,
                          ArrowUp: n - 1,
                          ArrowRight: n + 1,
                          ArrowDown: n + 1,
                          End: E.links.length - 1,
                          Home: 0,
                        };
                      if (i in a) {
                        e.preventDefault();
                        var r = a[i];
                        -1 === r && (r = E.links.length - 1),
                          r === E.links.length && (r = 0);
                        var o = E.links[r].getAttribute(s);
                        o && h(E, { tab: o });
                      }
                    })
                  );
                var c,
                  u,
                  d,
                  l,
                  b,
                  E,
                  g = o.links.filter("." + p).attr(s);
                g && h(o, { tab: g, immediate: !0 });
              }
            }
            function h(t, n) {
              n = n || {};
              var a,
                r = t.config,
                c = r.easing,
                u = n.tab;
              if (u !== t.current) {
                (t.current = u),
                  t.links.each(function (i, o) {
                    var c = e(o);
                    if (n.immediate || r.immediate) {
                      var d = t.panes[i];
                      o.id || (o.id = t.tabIdentifier + "-" + i),
                        d.id || (d.id = t.paneIdentifier + "-" + i),
                        (o.href = "#" + d.id),
                        o.setAttribute("role", "tab"),
                        o.setAttribute("aria-controls", d.id),
                        o.setAttribute("aria-selected", "false"),
                        d.setAttribute("role", "tabpanel"),
                        d.setAttribute("aria-labelledby", o.id);
                    }
                    o.getAttribute(s) === u
                      ? ((a = o),
                        c
                          .addClass(p)
                          .removeAttr("tabindex")
                          .attr({ "aria-selected": "true" })
                          .each(E.intro))
                      : c.hasClass(p) &&
                        c
                          .removeClass(p)
                          .attr({ tabindex: "-1", "aria-selected": "false" })
                          .each(E.outro);
                  });
                var l = [],
                  f = [];
                t.panes.each(function (t, n) {
                  var i = e(n);
                  n.getAttribute(s) === u
                    ? l.push(n)
                    : i.hasClass(b) && f.push(n);
                });
                var y = e(l),
                  m = e(f);
                if (n.immediate || r.immediate) {
                  y.addClass(b).each(E.intro),
                    m.removeClass(b),
                    g || i.redraw.up();
                  return;
                }
                var T = window.scrollX,
                  I = window.scrollY;
                a.focus(),
                  window.scrollTo(T, I),
                  m.length && r.outro
                    ? (m.each(E.outro),
                      o(m)
                        .add("opacity " + r.outro + "ms " + c, { fallback: d })
                        .start({ opacity: 0 })
                        .then(() => O(r, m, y)))
                    : O(r, m, y);
              }
            }
            function O(e, t, n) {
              if (
                (t
                  .removeClass(b)
                  .css({
                    opacity: "",
                    transition: "",
                    transform: "",
                    width: "",
                    height: "",
                  }),
                n.addClass(b).each(E.intro),
                i.redraw.up(),
                !e.intro)
              )
                return o(n).set({ opacity: 1 });
              o(n)
                .set({ opacity: 0 })
                .redraw()
                .add("opacity " + e.intro + "ms " + e.easing, { fallback: d })
                .start({ opacity: 1 });
            }
            return (
              (r.ready = r.design = r.preview = y),
              (r.redraw = function () {
                (g = !0), y(), (g = !1);
              }),
              (r.destroy = function () {
                (t = c.find(f)).length && (t.each(T), m());
              }),
              r
            );
          })
        );
      },
      3946: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = {
          actionListPlaybackChanged: function () {
            return z;
          },
          animationFrameChanged: function () {
            return U;
          },
          clearRequested: function () {
            return V;
          },
          elementStateChanged: function () {
            return W;
          },
          eventListenerAdded: function () {
            return x;
          },
          eventStateChanged: function () {
            return G;
          },
          instanceAdded: function () {
            return B;
          },
          instanceRemoved: function () {
            return j;
          },
          instanceStarted: function () {
            return X;
          },
          mediaQueriesDefined: function () {
            return H;
          },
          parameterChanged: function () {
            return D;
          },
          playbackRequested: function () {
            return P;
          },
          previewRequested: function () {
            return M;
          },
          rawDataImported: function () {
            return S;
          },
          sessionInitialized: function () {
            return L;
          },
          sessionStarted: function () {
            return C;
          },
          sessionStopped: function () {
            return w;
          },
          stopRequested: function () {
            return F;
          },
          testFrameRendered: function () {
            return k;
          },
          viewportWidthChanged: function () {
            return Y;
          },
        };
        for (var a in i)
          Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
        let r = n(7087),
          o = n(9468),
          {
            IX2_RAW_DATA_IMPORTED: c,
            IX2_SESSION_INITIALIZED: u,
            IX2_SESSION_STARTED: d,
            IX2_SESSION_STOPPED: l,
            IX2_PREVIEW_REQUESTED: s,
            IX2_PLAYBACK_REQUESTED: f,
            IX2_STOP_REQUESTED: p,
            IX2_CLEAR_REQUESTED: b,
            IX2_EVENT_LISTENER_ADDED: E,
            IX2_TEST_FRAME_RENDERED: g,
            IX2_EVENT_STATE_CHANGED: y,
            IX2_ANIMATION_FRAME_CHANGED: m,
            IX2_PARAMETER_CHANGED: T,
            IX2_INSTANCE_ADDED: I,
            IX2_INSTANCE_STARTED: h,
            IX2_INSTANCE_REMOVED: O,
            IX2_ELEMENT_STATE_CHANGED: _,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: v,
            IX2_VIEWPORT_WIDTH_CHANGED: A,
            IX2_MEDIA_QUERIES_DEFINED: R,
          } = r.IX2EngineActionTypes,
          { reifyState: N } = o.IX2VanillaUtils,
          S = (e) => ({ type: c, payload: { ...N(e) } }),
          L = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
            type: u,
            payload: { hasBoundaryNodes: e, reducedMotion: t },
          }),
          C = () => ({ type: d }),
          w = () => ({ type: l }),
          M = ({ rawData: e, defer: t }) => ({
            type: s,
            payload: { defer: t, rawData: e },
          }),
          P = ({
            actionTypeId: e = r.ActionTypeConsts.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: n,
            eventId: i,
            allowEvents: a,
            immediate: o,
            testManual: c,
            verbose: u,
            rawData: d,
          }) => ({
            type: f,
            payload: {
              actionTypeId: e,
              actionListId: t,
              actionItemId: n,
              testManual: c,
              eventId: i,
              allowEvents: a,
              immediate: o,
              verbose: u,
              rawData: d,
            },
          }),
          F = (e) => ({ type: p, payload: { actionListId: e } }),
          V = () => ({ type: b }),
          x = (e, t) => ({
            type: E,
            payload: { target: e, listenerParams: t },
          }),
          k = (e = 1) => ({ type: g, payload: { step: e } }),
          G = (e, t) => ({ type: y, payload: { stateKey: e, newState: t } }),
          U = (e, t) => ({ type: m, payload: { now: e, parameters: t } }),
          D = (e, t) => ({ type: T, payload: { key: e, value: t } }),
          B = (e) => ({ type: I, payload: { ...e } }),
          X = (e, t) => ({ type: h, payload: { instanceId: e, time: t } }),
          j = (e) => ({ type: O, payload: { instanceId: e } }),
          W = (e, t, n, i) => ({
            type: _,
            payload: {
              elementId: e,
              actionTypeId: t,
              current: n,
              actionItem: i,
            },
          }),
          z = ({ actionListId: e, isPlaying: t }) => ({
            type: v,
            payload: { actionListId: e, isPlaying: t },
          }),
          Y = ({ width: e, mediaQueries: t }) => ({
            type: A,
            payload: { width: e, mediaQueries: t },
          }),
          H = () => ({ type: R });
      },
      6011: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i,
          a = {
            actions: function () {
              return d;
            },
            destroy: function () {
              return b;
            },
            init: function () {
              return p;
            },
            setEnv: function () {
              return f;
            },
            store: function () {
              return s;
            },
          };
        for (var r in a)
          Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
        let o = n(9516),
          c = (i = n(7243)) && i.__esModule ? i : { default: i },
          u = n(1970),
          d = (function (e, t) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = l(t);
            if (n && n.has(e)) return n.get(e);
            var i = { __proto__: null },
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
              if (
                "default" !== r &&
                Object.prototype.hasOwnProperty.call(e, r)
              ) {
                var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                o && (o.get || o.set)
                  ? Object.defineProperty(i, r, o)
                  : (i[r] = e[r]);
              }
            return (i.default = e), n && n.set(e, i), i;
          })(n(3946));
        function l(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (l = function (e) {
            return e ? n : t;
          })(e);
        }
        let s = (0, o.createStore)(c.default);
        function f(e) {
          e() && (0, u.observeRequests)(s);
        }
        function p(e) {
          b(), (0, u.startEngine)({ store: s, rawData: e, allowEvents: !0 });
        }
        function b() {
          (0, u.stopEngine)(s);
        }
      },
      5012: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = {
          elementContains: function () {
            return T;
          },
          getChildElements: function () {
            return h;
          },
          getClosestElement: function () {
            return _;
          },
          getProperty: function () {
            return b;
          },
          getQuerySelector: function () {
            return g;
          },
          getRefType: function () {
            return v;
          },
          getSiblingElements: function () {
            return O;
          },
          getStyle: function () {
            return p;
          },
          getValidDocument: function () {
            return y;
          },
          isSiblingNode: function () {
            return I;
          },
          matchSelector: function () {
            return E;
          },
          queryDocument: function () {
            return m;
          },
          setStyle: function () {
            return f;
          },
        };
        for (var a in i)
          Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
        let r = n(9468),
          o = n(7087),
          { ELEMENT_MATCHES: c } = r.IX2BrowserSupport,
          {
            IX2_ID_DELIMITER: u,
            HTML_ELEMENT: d,
            PLAIN_OBJECT: l,
            WF_PAGE: s,
          } = o.IX2EngineConstants;
        function f(e, t, n) {
          e.style[t] = n;
        }
        function p(e, t) {
          return t.startsWith("--")
            ? window
                .getComputedStyle(document.documentElement)
                .getPropertyValue(t)
            : e.style instanceof CSSStyleDeclaration
            ? e.style[t]
            : void 0;
        }
        function b(e, t) {
          return e[t];
        }
        function E(e) {
          return (t) => t[c](e);
        }
        function g({ id: e, selector: t }) {
          if (e) {
            let t = e;
            if (-1 !== e.indexOf(u)) {
              let n = e.split(u),
                i = n[0];
              if (((t = n[1]), i !== document.documentElement.getAttribute(s)))
                return null;
            }
            return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
          }
          return t;
        }
        function y(e) {
          return null == e || e === document.documentElement.getAttribute(s)
            ? document
            : null;
        }
        function m(e, t) {
          return Array.prototype.slice.call(
            document.querySelectorAll(t ? e + " " + t : e)
          );
        }
        function T(e, t) {
          return e.contains(t);
        }
        function I(e, t) {
          return e !== t && e.parentNode === t.parentNode;
        }
        function h(e) {
          let t = [];
          for (let n = 0, { length: i } = e || []; n < i; n++) {
            let { children: i } = e[n],
              { length: a } = i;
            if (a) for (let e = 0; e < a; e++) t.push(i[e]);
          }
          return t;
        }
        function O(e = []) {
          let t = [],
            n = [];
          for (let i = 0, { length: a } = e; i < a; i++) {
            let { parentNode: a } = e[i];
            if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a))
              continue;
            n.push(a);
            let r = a.firstElementChild;
            for (; null != r; )
              -1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling);
          }
          return t;
        }
        let _ = Element.prototype.closest
          ? (e, t) =>
              document.documentElement.contains(e) ? e.closest(t) : null
          : (e, t) => {
              if (!document.documentElement.contains(e)) return null;
              let n = e;
              do {
                if (n[c] && n[c](t)) return n;
                n = n.parentNode;
              } while (null != n);
              return null;
            };
        function v(e) {
          return null != e && "object" == typeof e
            ? e instanceof Element
              ? d
              : l
            : null;
        }
      },
      1970: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = {
          observeRequests: function () {
            return K;
          },
          startActionGroup: function () {
            return eb;
          },
          startEngine: function () {
            return ei;
          },
          stopActionGroup: function () {
            return ep;
          },
          stopAllActionGroups: function () {
            return ef;
          },
          stopEngine: function () {
            return ea;
          },
        };
        for (var a in i)
          Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
        let r = m(n(9777)),
          o = m(n(4738)),
          c = m(n(4659)),
          u = m(n(3452)),
          d = m(n(6633)),
          l = m(n(3729)),
          s = m(n(2397)),
          f = m(n(5082)),
          p = n(7087),
          b = n(9468),
          E = n(3946),
          g = (function (e, t) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = T(t);
            if (n && n.has(e)) return n.get(e);
            var i = { __proto__: null },
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
              if (
                "default" !== r &&
                Object.prototype.hasOwnProperty.call(e, r)
              ) {
                var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                o && (o.get || o.set)
                  ? Object.defineProperty(i, r, o)
                  : (i[r] = e[r]);
              }
            return (i.default = e), n && n.set(e, i), i;
          })(n(5012)),
          y = m(n(8955));
        function m(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function T(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (T = function (e) {
            return e ? n : t;
          })(e);
        }
        let I = Object.keys(p.QuickEffectIds),
          h = (e) => I.includes(e),
          {
            COLON_DELIMITER: O,
            BOUNDARY_SELECTOR: _,
            HTML_ELEMENT: v,
            RENDER_GENERAL: A,
            W_MOD_IX: R,
          } = p.IX2EngineConstants,
          {
            getAffectedElements: N,
            getElementId: S,
            getDestinationValues: L,
            observeStore: C,
            getInstanceId: w,
            renderHTMLElement: M,
            clearAllStyles: P,
            getMaxDurationItemIndex: F,
            getComputedStyle: V,
            getInstanceOrigin: x,
            reduceListToGroup: k,
            shouldNamespaceEventParameter: G,
            getNamespacedParameterId: U,
            shouldAllowMediaQuery: D,
            cleanupHTMLElement: B,
            clearObjectCache: X,
            stringifyTarget: j,
            mediaQueriesEqual: W,
            shallowEqual: z,
          } = b.IX2VanillaUtils,
          {
            isPluginType: Y,
            createPluginInstance: H,
            getPluginDuration: $,
          } = b.IX2VanillaPlugins,
          Q = navigator.userAgent,
          q = Q.match(/iPad/i) || Q.match(/iPhone/);
        function K(e) {
          C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
            C({
              store: e,
              select: ({ ixRequest: e }) => e.playback,
              onChange: ee,
            }),
            C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
            C({
              store: e,
              select: ({ ixRequest: e }) => e.clear,
              onChange: en,
            });
        }
        function Z({ rawData: e, defer: t }, n) {
          let i = () => {
            ei({ store: n, rawData: e, allowEvents: !0 }), J();
          };
          t ? setTimeout(i, 0) : i();
        }
        function J() {
          document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
        }
        function ee(e, t) {
          let {
              actionTypeId: n,
              actionListId: i,
              actionItemId: a,
              eventId: r,
              allowEvents: o,
              immediate: c,
              testManual: u,
              verbose: d = !0,
            } = e,
            { rawData: l } = e;
          if (i && a && l && c) {
            let e = l.actionLists[i];
            e && (l = k({ actionList: e, actionItemId: a, rawData: l }));
          }
          if (
            (ei({ store: t, rawData: l, allowEvents: o, testManual: u }),
            (i && n === p.ActionTypeConsts.GENERAL_START_ACTION) || h(n))
          ) {
            ep({ store: t, actionListId: i }),
              es({ store: t, actionListId: i, eventId: r });
            let e = eb({
              store: t,
              eventId: r,
              actionListId: i,
              immediate: c,
              verbose: d,
            });
            d &&
              e &&
              t.dispatch(
                (0, E.actionListPlaybackChanged)({
                  actionListId: i,
                  isPlaying: !c,
                })
              );
          }
        }
        function et({ actionListId: e }, t) {
          e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ea(t);
        }
        function en(e, t) {
          ea(t), P({ store: t, elementApi: g });
        }
        function ei({ store: e, rawData: t, allowEvents: n, testManual: i }) {
          let { ixSession: a } = e.getState();
          if ((t && e.dispatch((0, E.rawDataImported)(t)), !a.active)) {
            (e.dispatch(
              (0, E.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(_),
                reducedMotion:
                  document.body.hasAttribute("data-wf-ix-vacation") &&
                  window.matchMedia("(prefers-reduced-motion)").matches,
              })
            ),
            n) &&
              ((function (e) {
                let { ixData: t } = e.getState(),
                  { eventTypeMap: n } = t;
                ec(e),
                  (0, s.default)(n, (t, n) => {
                    let i = y.default[n];
                    if (!i)
                      return void console.warn(
                        `IX2 event type not configured: ${n}`
                      );
                    !(function ({ logic: e, store: t, events: n }) {
                      !(function (e) {
                        if (!q) return;
                        let t = {},
                          n = "";
                        for (let i in e) {
                          let { eventTypeId: a, target: r } = e[i],
                            o = g.getQuerySelector(r);
                          t[o] ||
                            ((a === p.EventTypeConsts.MOUSE_CLICK ||
                              a === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                              ((t[o] = !0),
                              (n +=
                                o +
                                "{cursor: pointer;touch-action: manipulation;}")));
                        }
                        if (n) {
                          let e = document.createElement("style");
                          (e.textContent = n), document.body.appendChild(e);
                        }
                      })(n);
                      let { types: i, handler: a } = e,
                        { ixData: u } = t.getState(),
                        { actionLists: d } = u,
                        l = eu(n, el);
                      if (!(0, c.default)(l)) return;
                      (0, s.default)(l, (e, i) => {
                        let a = n[i],
                          {
                            action: c,
                            id: l,
                            mediaQueries: s = u.mediaQueryKeys,
                          } = a,
                          { actionListId: f } = c.config;
                        W(s, u.mediaQueryKeys) ||
                          t.dispatch((0, E.mediaQueriesDefined)()),
                          c.actionTypeId ===
                            p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                            (Array.isArray(a.config)
                              ? a.config
                              : [a.config]
                            ).forEach((n) => {
                              let { continuousParameterGroupId: i } = n,
                                a = (0, o.default)(
                                  d,
                                  `${f}.continuousParameterGroups`,
                                  []
                                ),
                                c = (0, r.default)(a, ({ id: e }) => e === i),
                                u = (n.smoothing || 0) / 100,
                                s = (n.restingState || 0) / 100;
                              c &&
                                e.forEach((e, i) => {
                                  !(function ({
                                    store: e,
                                    eventStateKey: t,
                                    eventTarget: n,
                                    eventId: i,
                                    eventConfig: a,
                                    actionListId: r,
                                    parameterGroup: c,
                                    smoothing: u,
                                    restingValue: d,
                                  }) {
                                    let { ixData: l, ixSession: s } =
                                        e.getState(),
                                      { events: f } = l,
                                      b = f[i],
                                      { eventTypeId: E } = b,
                                      y = {},
                                      m = {},
                                      T = [],
                                      { continuousActionGroups: I } = c,
                                      { id: h } = c;
                                    G(E, a) && (h = U(t, h));
                                    let v =
                                      s.hasBoundaryNodes && n
                                        ? g.getClosestElement(n, _)
                                        : null;
                                    I.forEach((e) => {
                                      let { keyframe: t, actionItems: i } = e;
                                      i.forEach((e) => {
                                        let { actionTypeId: i } = e,
                                          { target: a } = e.config;
                                        if (!a) return;
                                        let r = a.boundaryMode ? v : null,
                                          o = j(a) + O + i;
                                        if (
                                          ((m[o] = (function (e = [], t, n) {
                                            let i,
                                              a = [...e];
                                            return (
                                              a.some(
                                                (e, n) =>
                                                  e.keyframe === t &&
                                                  ((i = n), !0)
                                              ),
                                              null == i &&
                                                ((i = a.length),
                                                a.push({
                                                  keyframe: t,
                                                  actionItems: [],
                                                })),
                                              a[i].actionItems.push(n),
                                              a
                                            );
                                          })(m[o], t, e)),
                                          !y[o])
                                        ) {
                                          y[o] = !0;
                                          let { config: t } = e;
                                          N({
                                            config: t,
                                            event: b,
                                            eventTarget: n,
                                            elementRoot: r,
                                            elementApi: g,
                                          }).forEach((e) => {
                                            T.push({ element: e, key: o });
                                          });
                                        }
                                      });
                                    }),
                                      T.forEach(({ element: t, key: n }) => {
                                        let a = m[n],
                                          c = (0, o.default)(
                                            a,
                                            "[0].actionItems[0]",
                                            {}
                                          ),
                                          { actionTypeId: l } = c,
                                          s = (
                                            l === p.ActionTypeConsts.PLUGIN_RIVE
                                              ? 0 ===
                                                (
                                                  c.config?.target
                                                    ?.selectorGuids || []
                                                ).length
                                              : Y(l)
                                          )
                                            ? H(l)?.(t, c)
                                            : null,
                                          f = L(
                                            {
                                              element: t,
                                              actionItem: c,
                                              elementApi: g,
                                            },
                                            s
                                          );
                                        eE({
                                          store: e,
                                          element: t,
                                          eventId: i,
                                          actionListId: r,
                                          actionItem: c,
                                          destination: f,
                                          continuous: !0,
                                          parameterId: h,
                                          actionGroups: a,
                                          smoothing: u,
                                          restingValue: d,
                                          pluginInstance: s,
                                        });
                                      });
                                  })({
                                    store: t,
                                    eventStateKey: l + O + i,
                                    eventTarget: e,
                                    eventId: l,
                                    eventConfig: n,
                                    actionListId: f,
                                    parameterGroup: c,
                                    smoothing: u,
                                    restingValue: s,
                                  });
                                });
                            }),
                          (c.actionTypeId ===
                            p.ActionTypeConsts.GENERAL_START_ACTION ||
                            h(c.actionTypeId)) &&
                            es({ store: t, actionListId: f, eventId: l });
                      });
                      let b = (e) => {
                          let { ixSession: i } = t.getState();
                          ed(l, (r, o, c) => {
                            let d = n[o],
                              l = i.eventState[c],
                              {
                                action: s,
                                mediaQueries: f = u.mediaQueryKeys,
                              } = d;
                            if (!D(f, i.mediaQueryKey)) return;
                            let b = (n = {}) => {
                              let i = a(
                                {
                                  store: t,
                                  element: r,
                                  event: d,
                                  eventConfig: n,
                                  nativeEvent: e,
                                  eventStateKey: c,
                                },
                                l
                              );
                              z(i, l) ||
                                t.dispatch((0, E.eventStateChanged)(c, i));
                            };
                            s.actionTypeId ===
                            p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                              ? (Array.isArray(d.config)
                                  ? d.config
                                  : [d.config]
                                ).forEach(b)
                              : b();
                          });
                        },
                        y = (0, f.default)(b, 12),
                        m = ({
                          target: e = document,
                          types: n,
                          throttle: i,
                        }) => {
                          n.split(" ")
                            .filter(Boolean)
                            .forEach((n) => {
                              let a = i ? y : b;
                              e.addEventListener(n, a),
                                t.dispatch(
                                  (0, E.eventListenerAdded)(e, [n, a])
                                );
                            });
                        };
                      Array.isArray(i)
                        ? i.forEach(m)
                        : "string" == typeof i && m(e);
                    })({ logic: i, store: e, events: t });
                  });
                let { ixSession: i } = e.getState();
                i.eventListeners.length &&
                  (function (e) {
                    let t = () => {
                      ec(e);
                    };
                    eo.forEach((n) => {
                      window.addEventListener(n, t),
                        e.dispatch((0, E.eventListenerAdded)(window, [n, t]));
                    }),
                      t();
                  })(e);
              })(e),
              (function () {
                let { documentElement: e } = document;
                -1 === e.className.indexOf(R) && (e.className += ` ${R}`);
              })(),
              e.getState().ixSession.hasDefinedMediaQueries &&
                C({
                  store: e,
                  select: ({ ixSession: e }) => e.mediaQueryKey,
                  onChange: () => {
                    ea(e),
                      P({ store: e, elementApi: g }),
                      ei({ store: e, allowEvents: !0 }),
                      J();
                  },
                }));
            e.dispatch((0, E.sessionStarted)()),
              (function (e, t) {
                let n = (i) => {
                  let { ixSession: a, ixParameters: r } = e.getState();
                  if (a.active)
                    if ((e.dispatch((0, E.animationFrameChanged)(i, r)), t)) {
                      let t = C({
                        store: e,
                        select: ({ ixSession: e }) => e.tick,
                        onChange: (e) => {
                          n(e), t();
                        },
                      });
                    } else requestAnimationFrame(n);
                };
                n(window.performance.now());
              })(e, i);
          }
        }
        function ea(e) {
          let { ixSession: t } = e.getState();
          if (t.active) {
            let { eventListeners: n } = t;
            n.forEach(er), X(), e.dispatch((0, E.sessionStopped)());
          }
        }
        function er({ target: e, listenerParams: t }) {
          e.removeEventListener.apply(e, t);
        }
        let eo = ["resize", "orientationchange"];
        function ec(e) {
          let { ixSession: t, ixData: n } = e.getState(),
            i = window.innerWidth;
          if (i !== t.viewportWidth) {
            let { mediaQueries: t } = n;
            e.dispatch(
              (0, E.viewportWidthChanged)({ width: i, mediaQueries: t })
            );
          }
        }
        let eu = (e, t) => (0, u.default)((0, l.default)(e, t), d.default),
          ed = (e, t) => {
            (0, s.default)(e, (e, n) => {
              e.forEach((e, i) => {
                t(e, n, n + O + i);
              });
            });
          },
          el = (e) =>
            N({
              config: { target: e.target, targets: e.targets },
              elementApi: g,
            });
        function es({ store: e, actionListId: t, eventId: n }) {
          let { ixData: i, ixSession: a } = e.getState(),
            { actionLists: r, events: c } = i,
            u = c[n],
            d = r[t];
          if (d && d.useFirstGroupAsInitialState) {
            let r = (0, o.default)(d, "actionItemGroups[0].actionItems", []);
            if (
              !D(
                (0, o.default)(u, "mediaQueries", i.mediaQueryKeys),
                a.mediaQueryKey
              )
            )
              return;
            r.forEach((i) => {
              let { config: a, actionTypeId: r } = i,
                o = N({
                  config:
                    a?.target?.useEventTarget === !0 &&
                    a?.target?.objectId == null
                      ? { target: u.target, targets: u.targets }
                      : a,
                  event: u,
                  elementApi: g,
                }),
                c = Y(r);
              o.forEach((a) => {
                let o = c ? H(r)?.(a, i) : null;
                eE({
                  destination: L(
                    { element: a, actionItem: i, elementApi: g },
                    o
                  ),
                  immediate: !0,
                  store: e,
                  element: a,
                  eventId: n,
                  actionItem: i,
                  actionListId: t,
                  pluginInstance: o,
                });
              });
            });
          }
        }
        function ef({ store: e }) {
          let { ixInstances: t } = e.getState();
          (0, s.default)(t, (t) => {
            if (!t.continuous) {
              let { actionListId: n, verbose: i } = t;
              eg(t, e),
                i &&
                  e.dispatch(
                    (0, E.actionListPlaybackChanged)({
                      actionListId: n,
                      isPlaying: !1,
                    })
                  );
            }
          });
        }
        function ep({
          store: e,
          eventId: t,
          eventTarget: n,
          eventStateKey: i,
          actionListId: a,
        }) {
          let { ixInstances: r, ixSession: c } = e.getState(),
            u = c.hasBoundaryNodes && n ? g.getClosestElement(n, _) : null;
          (0, s.default)(r, (n) => {
            let r = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
              c = !i || n.eventStateKey === i;
            if (n.actionListId === a && n.eventId === t && c) {
              if (u && r && !g.elementContains(u, n.element)) return;
              eg(n, e),
                n.verbose &&
                  e.dispatch(
                    (0, E.actionListPlaybackChanged)({
                      actionListId: a,
                      isPlaying: !1,
                    })
                  );
            }
          });
        }
        function eb({
          store: e,
          eventId: t,
          eventTarget: n,
          eventStateKey: i,
          actionListId: a,
          groupIndex: r = 0,
          immediate: c,
          verbose: u,
        }) {
          let { ixData: d, ixSession: l } = e.getState(),
            { events: s } = d,
            f = s[t] || {},
            { mediaQueries: p = d.mediaQueryKeys } = f,
            { actionItemGroups: b, useFirstGroupAsInitialState: E } = (0,
            o.default)(d, `actionLists.${a}`, {});
          if (!b || !b.length) return !1;
          r >= b.length && (0, o.default)(f, "config.loop") && (r = 0),
            0 === r && E && r++;
          let y =
              (0 === r || (1 === r && E)) && h(f.action?.actionTypeId)
                ? f.config.delay
                : void 0,
            m = (0, o.default)(b, [r, "actionItems"], []);
          if (!m.length || !D(p, l.mediaQueryKey)) return !1;
          let T = l.hasBoundaryNodes && n ? g.getClosestElement(n, _) : null,
            I = F(m),
            O = !1;
          return (
            m.forEach((o, d) => {
              let { config: l, actionTypeId: s } = o,
                p = Y(s),
                { target: b } = l;
              b &&
                N({
                  config: l,
                  event: f,
                  eventTarget: n,
                  elementRoot: b.boundaryMode ? T : null,
                  elementApi: g,
                }).forEach((l, f) => {
                  let b = p ? H(s)?.(l, o) : null,
                    E = p ? $(s)(l, o) : null;
                  O = !0;
                  let m = V({ element: l, actionItem: o }),
                    T = L({ element: l, actionItem: o, elementApi: g }, b);
                  eE({
                    store: e,
                    element: l,
                    actionItem: o,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: i,
                    actionListId: a,
                    groupIndex: r,
                    isCarrier: I === d && 0 === f,
                    computedStyle: m,
                    destination: T,
                    immediate: c,
                    verbose: u,
                    pluginInstance: b,
                    pluginDuration: E,
                    instanceDelay: y,
                  });
                });
            }),
            O
          );
        }
        function eE(e) {
          let t,
            { store: n, computedStyle: i, ...a } = e,
            {
              element: r,
              actionItem: o,
              immediate: c,
              pluginInstance: u,
              continuous: d,
              restingValue: l,
              eventId: s,
            } = a,
            f = w(),
            { ixElements: b, ixSession: y, ixData: m } = n.getState(),
            T = S(b, r),
            { refState: I } = b[T] || {},
            h = g.getRefType(r),
            O = y.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
          if (O && d)
            switch (m.events[s]?.eventTypeId) {
              case p.EventTypeConsts.MOUSE_MOVE:
              case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                t = l;
                break;
              default:
                t = 0.5;
            }
          let _ = x(r, I, i, o, g, u);
          if (
            (n.dispatch(
              (0, E.instanceAdded)({
                instanceId: f,
                elementId: T,
                origin: _,
                refType: h,
                skipMotion: O,
                skipToValue: t,
                ...a,
              })
            ),
            ey(document.body, "ix2-animation-started", f),
            c)
          )
            return void (function (e, t) {
              let { ixParameters: n } = e.getState();
              e.dispatch((0, E.instanceStarted)(t, 0)),
                e.dispatch((0, E.animationFrameChanged)(performance.now(), n));
              let { ixInstances: i } = e.getState();
              em(i[t], e);
            })(n, f);
          C({ store: n, select: ({ ixInstances: e }) => e[f], onChange: em }),
            d || n.dispatch((0, E.instanceStarted)(f, y.tick));
        }
        function eg(e, t) {
          ey(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState(),
          });
          let { elementId: n, actionItem: i } = e,
            { ixElements: a } = t.getState(),
            { ref: r, refType: o } = a[n] || {};
          o === v && B(r, i, g), t.dispatch((0, E.instanceRemoved)(e.id));
        }
        function ey(e, t, n) {
          let i = document.createEvent("CustomEvent");
          i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
        }
        function em(e, t) {
          let {
              active: n,
              continuous: i,
              complete: a,
              elementId: r,
              actionItem: o,
              actionTypeId: c,
              renderType: u,
              current: d,
              groupIndex: l,
              eventId: s,
              eventTarget: f,
              eventStateKey: p,
              actionListId: b,
              isCarrier: y,
              styleProp: m,
              verbose: T,
              pluginInstance: I,
            } = e,
            { ixData: h, ixSession: O } = t.getState(),
            { events: _ } = h,
            { mediaQueries: R = h.mediaQueryKeys } = _ && _[s] ? _[s] : {};
          if (D(R, O.mediaQueryKey) && (i || n || a)) {
            if (d || (u === A && a)) {
              t.dispatch((0, E.elementStateChanged)(r, c, d, o));
              let { ixElements: e } = t.getState(),
                { ref: n, refType: i, refState: a } = e[r] || {},
                l = a && a[c];
              (i === v || Y(c)) && M(n, a, l, s, o, m, g, u, I);
            }
            if (a) {
              if (y) {
                let e = eb({
                  store: t,
                  eventId: s,
                  eventTarget: f,
                  eventStateKey: p,
                  actionListId: b,
                  groupIndex: l + 1,
                  verbose: T,
                });
                T &&
                  !e &&
                  t.dispatch(
                    (0, E.actionListPlaybackChanged)({
                      actionListId: b,
                      isPlaying: !1,
                    })
                  );
              }
              eg(e, t);
            }
          }
        }
      },
      8955: function (e, t, n) {
        "use strict";
        let i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return ep;
            },
          });
        let a = s(n(5801)),
          r = s(n(4738)),
          o = s(n(3789)),
          c = n(7087),
          u = n(1970),
          d = n(3946),
          l = n(9468);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        let {
            MOUSE_CLICK: f,
            MOUSE_SECOND_CLICK: p,
            MOUSE_DOWN: b,
            MOUSE_UP: E,
            MOUSE_OVER: g,
            MOUSE_OUT: y,
            DROPDOWN_CLOSE: m,
            DROPDOWN_OPEN: T,
            SLIDER_ACTIVE: I,
            SLIDER_INACTIVE: h,
            TAB_ACTIVE: O,
            TAB_INACTIVE: _,
            NAVBAR_CLOSE: v,
            NAVBAR_OPEN: A,
            MOUSE_MOVE: R,
            PAGE_SCROLL_DOWN: N,
            SCROLL_INTO_VIEW: S,
            SCROLL_OUT_OF_VIEW: L,
            PAGE_SCROLL_UP: C,
            SCROLLING_IN_VIEW: w,
            PAGE_FINISH: M,
            ECOMMERCE_CART_CLOSE: P,
            ECOMMERCE_CART_OPEN: F,
            PAGE_START: V,
            PAGE_SCROLL: x,
          } = c.EventTypeConsts,
          k = "COMPONENT_ACTIVE",
          G = "COMPONENT_INACTIVE",
          { COLON_DELIMITER: U } = c.IX2EngineConstants,
          { getNamespacedParameterId: D } = l.IX2VanillaUtils,
          B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
          X = B(({ element: e, nativeEvent: t }) => e === t.target),
          j = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
          W = (0, a.default)([X, j]),
          z = (e, t) => {
            if (t) {
              let { ixData: n } = e.getState(),
                { events: i } = n,
                a = i[t];
              if (a && !ee[a.eventTypeId]) return a;
            }
            return null;
          },
          Y = ({ store: e, event: t }) => {
            let { action: n } = t,
              { autoStopEventId: i } = n.config;
            return !!z(e, i);
          },
          H = ({ store: e, event: t, element: n, eventStateKey: i }, a) => {
            let { action: o, id: c } = t,
              { actionListId: d, autoStopEventId: l } = o.config,
              s = z(e, l);
            return (
              s &&
                (0, u.stopActionGroup)({
                  store: e,
                  eventId: l,
                  eventTarget: n,
                  eventStateKey: l + U + i.split(U)[1],
                  actionListId: (0, r.default)(s, "action.config.actionListId"),
                }),
              (0, u.stopActionGroup)({
                store: e,
                eventId: c,
                eventTarget: n,
                eventStateKey: i,
                actionListId: d,
              }),
              (0, u.startActionGroup)({
                store: e,
                eventId: c,
                eventTarget: n,
                eventStateKey: i,
                actionListId: d,
              }),
              a
            );
          },
          $ = (e, t) => (n, i) => !0 === e(n, i) ? t(n, i) : i,
          Q = { handler: $(W, H) },
          q = { ...Q, types: [k, G].join(" ") },
          K = [
            { target: window, types: "resize orientationchange", throttle: !0 },
            {
              target: document,
              types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
              throttle: !0,
            },
          ],
          Z = "mouseover mouseout",
          J = { types: K },
          ee = { PAGE_START: V, PAGE_FINISH: M },
          et = (() => {
            let e = void 0 !== window.pageXOffset,
              t =
                "CSS1Compat" === document.compatMode
                  ? document.documentElement
                  : document.body;
            return () => ({
              scrollLeft: e ? window.pageXOffset : t.scrollLeft,
              scrollTop: e ? window.pageYOffset : t.scrollTop,
              stiffScrollTop: (0, o.default)(
                e ? window.pageYOffset : t.scrollTop,
                0,
                t.scrollHeight - window.innerHeight
              ),
              scrollWidth: t.scrollWidth,
              scrollHeight: t.scrollHeight,
              clientWidth: t.clientWidth,
              clientHeight: t.clientHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
            });
          })(),
          en = (e, t) =>
            !(
              e.left > t.right ||
              e.right < t.left ||
              e.top > t.bottom ||
              e.bottom < t.top
            ),
          ei = ({ element: e, nativeEvent: t }) => {
            let { type: n, target: i, relatedTarget: a } = t,
              r = e.contains(i);
            if ("mouseover" === n && r) return !0;
            let o = e.contains(a);
            return "mouseout" === n && !!r && !!o;
          },
          ea = (e) => {
            let {
                element: t,
                event: { config: n },
              } = e,
              { clientWidth: i, clientHeight: a } = et(),
              r = n.scrollOffsetValue,
              o = "PX" === n.scrollOffsetUnit ? r : (a * (r || 0)) / 100;
            return en(t.getBoundingClientRect(), {
              left: 0,
              top: o,
              right: i,
              bottom: a - o,
            });
          },
          er = (e) => (t, n) => {
            let { type: i } = t.nativeEvent,
              a = -1 !== [k, G].indexOf(i) ? i === k : n.isActive,
              r = { ...n, isActive: a };
            return ((!n || r.isActive !== n.isActive) && e(t, r)) || r;
          },
          eo = (e) => (t, n) => {
            let i = { elementHovered: ei(t) };
            return (
              ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
                e(t, i)) ||
              i
            );
          },
          ec =
            (e) =>
            (t, n = {}) => {
              let i,
                a,
                { stiffScrollTop: r, scrollHeight: o, innerHeight: c } = et(),
                {
                  event: { config: u, eventTypeId: d },
                } = t,
                { scrollOffsetValue: l, scrollOffsetUnit: s } = u,
                f = o - c,
                p = Number((r / f).toFixed(2));
              if (n && n.percentTop === p) return n;
              let b = ("PX" === s ? l : (c * (l || 0)) / 100) / f,
                E = 0;
              n &&
                ((i = p > n.percentTop),
                (E = (a = n.scrollingDown !== i) ? p : n.anchorTop));
              let g = d === N ? p >= E + b : p <= E - b,
                y = {
                  ...n,
                  percentTop: p,
                  inBounds: g,
                  anchorTop: E,
                  scrollingDown: i,
                };
              return (
                (n && g && (a || y.inBounds !== n.inBounds) && e(t, y)) || y
              );
            },
          eu = (e, t) =>
            e.left > t.left &&
            e.left < t.right &&
            e.top > t.top &&
            e.top < t.bottom,
          ed =
            (e) =>
            (t, n = { clickCount: 0 }) => {
              let i = { clickCount: (n.clickCount % 2) + 1 };
              return (i.clickCount !== n.clickCount && e(t, i)) || i;
            },
          el = (e = !0) => ({
            ...q,
            handler: $(
              e ? W : X,
              er((e, t) => (t.isActive ? Q.handler(e, t) : t))
            ),
          }),
          es = (e = !0) => ({
            ...q,
            handler: $(
              e ? W : X,
              er((e, t) => (t.isActive ? t : Q.handler(e, t)))
            ),
          }),
          ef = {
            ...J,
            handler:
              ((i = (e, t) => {
                let { elementVisible: n } = t,
                  { event: i, store: a } = e,
                  { ixData: r } = a.getState(),
                  { events: o } = r;
                return !o[i.action.config.autoStopEventId] && t.triggered
                  ? t
                  : (i.eventTypeId === S) === n
                  ? (H(e), { ...t, triggered: !0 })
                  : t;
              }),
              (e, t) => {
                let n = { ...t, elementVisible: ea(e) };
                return (
                  ((t
                    ? n.elementVisible !== t.elementVisible
                    : n.elementVisible) &&
                    i(e, n)) ||
                  n
                );
              }),
          },
          ep = {
            [I]: el(),
            [h]: es(),
            [T]: el(),
            [m]: es(),
            [A]: el(!1),
            [v]: es(!1),
            [O]: el(),
            [_]: es(),
            [F]: { types: "ecommerce-cart-open", handler: $(W, H) },
            [P]: { types: "ecommerce-cart-close", handler: $(W, H) },
            [f]: {
              types: "click",
              handler: $(
                W,
                ed((e, { clickCount: t }) => {
                  Y(e) ? 1 === t && H(e) : H(e);
                })
              ),
            },
            [p]: {
              types: "click",
              handler: $(
                W,
                ed((e, { clickCount: t }) => {
                  2 === t && H(e);
                })
              ),
            },
            [b]: { ...Q, types: "mousedown" },
            [E]: { ...Q, types: "mouseup" },
            [g]: {
              types: Z,
              handler: $(
                W,
                eo((e, t) => {
                  t.elementHovered && H(e);
                })
              ),
            },
            [y]: {
              types: Z,
              handler: $(
                W,
                eo((e, t) => {
                  t.elementHovered || H(e);
                })
              ),
            },
            [R]: {
              types: "mousemove mouseout scroll",
              handler: (
                {
                  store: e,
                  element: t,
                  eventConfig: n,
                  nativeEvent: i,
                  eventStateKey: a,
                },
                r = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
              ) => {
                let {
                    basedOn: o,
                    selectedAxis: u,
                    continuousParameterGroupId: l,
                    reverse: s,
                    restingState: f = 0,
                  } = n,
                  {
                    clientX: p = r.clientX,
                    clientY: b = r.clientY,
                    pageX: E = r.pageX,
                    pageY: g = r.pageY,
                  } = i,
                  y = "X_AXIS" === u,
                  m = "mouseout" === i.type,
                  T = f / 100,
                  I = l,
                  h = !1;
                switch (o) {
                  case c.EventBasedOn.VIEWPORT:
                    T = y
                      ? Math.min(p, window.innerWidth) / window.innerWidth
                      : Math.min(b, window.innerHeight) / window.innerHeight;
                    break;
                  case c.EventBasedOn.PAGE: {
                    let {
                      scrollLeft: e,
                      scrollTop: t,
                      scrollWidth: n,
                      scrollHeight: i,
                    } = et();
                    T = y ? Math.min(e + E, n) / n : Math.min(t + g, i) / i;
                    break;
                  }
                  case c.EventBasedOn.ELEMENT:
                  default: {
                    I = D(a, l);
                    let e = 0 === i.type.indexOf("mouse");
                    if (e && !0 !== W({ element: t, nativeEvent: i })) break;
                    let n = t.getBoundingClientRect(),
                      { left: r, top: o, width: c, height: u } = n;
                    if (!e && !eu({ left: p, top: b }, n)) break;
                    (h = !0), (T = y ? (p - r) / c : (b - o) / u);
                  }
                }
                return (
                  m && (T > 0.95 || T < 0.05) && (T = Math.round(T)),
                  (o !== c.EventBasedOn.ELEMENT ||
                    h ||
                    h !== r.elementHovered) &&
                    ((T = s ? 1 - T : T),
                    e.dispatch((0, d.parameterChanged)(I, T))),
                  {
                    elementHovered: h,
                    clientX: p,
                    clientY: b,
                    pageX: E,
                    pageY: g,
                  }
                );
              },
            },
            [x]: {
              types: K,
              handler: ({ store: e, eventConfig: t }) => {
                let { continuousParameterGroupId: n, reverse: i } = t,
                  { scrollTop: a, scrollHeight: r, clientHeight: o } = et(),
                  c = a / (r - o);
                (c = i ? 1 - c : c), e.dispatch((0, d.parameterChanged)(n, c));
              },
            },
            [w]: {
              types: K,
              handler: (
                { element: e, store: t, eventConfig: n, eventStateKey: i },
                a = { scrollPercent: 0 }
              ) => {
                let {
                    scrollLeft: r,
                    scrollTop: o,
                    scrollWidth: u,
                    scrollHeight: l,
                    clientHeight: s,
                  } = et(),
                  {
                    basedOn: f,
                    selectedAxis: p,
                    continuousParameterGroupId: b,
                    startsEntering: E,
                    startsExiting: g,
                    addEndOffset: y,
                    addStartOffset: m,
                    addOffsetValue: T = 0,
                    endOffsetValue: I = 0,
                  } = n;
                if (f === c.EventBasedOn.VIEWPORT) {
                  let e = "X_AXIS" === p ? r / u : o / l;
                  return (
                    e !== a.scrollPercent &&
                      t.dispatch((0, d.parameterChanged)(b, e)),
                    { scrollPercent: e }
                  );
                }
                {
                  let n = D(i, b),
                    r = e.getBoundingClientRect(),
                    o = (m ? T : 0) / 100,
                    c = (y ? I : 0) / 100;
                  (o = E ? o : 1 - o), (c = g ? c : 1 - c);
                  let u = r.top + Math.min(r.height * o, s),
                    f = Math.min(s + (r.top + r.height * c - u), l),
                    p = Math.min(Math.max(0, s - u), f) / f;
                  return (
                    p !== a.scrollPercent &&
                      t.dispatch((0, d.parameterChanged)(n, p)),
                    { scrollPercent: p }
                  );
                }
              },
            },
            [S]: ef,
            [L]: ef,
            [N]: {
              ...J,
              handler: ec((e, t) => {
                t.scrollingDown && H(e);
              }),
            },
            [C]: {
              ...J,
              handler: ec((e, t) => {
                t.scrollingDown || H(e);
              }),
            },
            [M]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: $(X, (e, t) => {
                let n = { finished: "complete" === document.readyState };
                return n.finished && !(t && t.finshed) && H(e), n;
              }),
            },
            [V]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: $(X, (e, t) => (t || H(e), { started: !0 })),
            },
          };
      },
      4609: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixData", {
            enumerable: !0,
            get: function () {
              return a;
            },
          });
        let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
          a = (e = Object.freeze({}), t) =>
            t.type === i ? t.payload.ixData || Object.freeze({}) : e;
      },
      7718: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixInstances", {
            enumerable: !0,
            get: function () {
              return h;
            },
          });
        let i = n(7087),
          a = n(9468),
          r = n(1185),
          {
            IX2_RAW_DATA_IMPORTED: o,
            IX2_SESSION_STOPPED: c,
            IX2_INSTANCE_ADDED: u,
            IX2_INSTANCE_STARTED: d,
            IX2_INSTANCE_REMOVED: l,
            IX2_ANIMATION_FRAME_CHANGED: s,
          } = i.IX2EngineActionTypes,
          {
            optimizeFloat: f,
            applyEasing: p,
            createBezierEasing: b,
          } = a.IX2EasingUtils,
          { RENDER_GENERAL: E } = i.IX2EngineConstants,
          {
            getItemConfigByKey: g,
            getRenderType: y,
            getStyleProp: m,
          } = a.IX2VanillaUtils,
          T = (e, t) => {
            let n,
              i,
              a,
              o,
              {
                position: c,
                parameterId: u,
                actionGroups: d,
                destinationKeys: l,
                smoothing: s,
                restingValue: b,
                actionTypeId: E,
                customEasingFn: y,
                skipMotion: m,
                skipToValue: T,
              } = e,
              { parameters: I } = t.payload,
              h = Math.max(1 - s, 0.01),
              O = I[u];
            null == O && ((h = 1), (O = b));
            let _ = f((Math.max(O, 0) || 0) - c),
              v = m ? T : f(c + _ * h),
              A = 100 * v;
            if (v === c && e.current) return e;
            for (let e = 0, { length: t } = d; e < t; e++) {
              let { keyframe: t, actionItems: r } = d[e];
              if ((0 === e && (n = r[0]), A >= t)) {
                n = r[0];
                let c = d[e + 1],
                  u = c && A !== t;
                (i = u ? c.actionItems[0] : null),
                  u && ((a = t / 100), (o = (c.keyframe - t) / 100));
              }
            }
            let R = {};
            if (n && !i)
              for (let e = 0, { length: t } = l; e < t; e++) {
                let t = l[e];
                R[t] = g(E, t, n.config);
              }
            else if (n && i && void 0 !== a && void 0 !== o) {
              let e = (v - a) / o,
                t = p(n.config.easing, e, y);
              for (let e = 0, { length: a } = l; e < a; e++) {
                let a = l[e],
                  r = g(E, a, n.config),
                  o = (g(E, a, i.config) - r) * t + r;
                R[a] = o;
              }
            }
            return (0, r.merge)(e, { position: v, current: R });
          },
          I = (e, t) => {
            let {
                active: n,
                origin: i,
                start: a,
                immediate: o,
                renderType: c,
                verbose: u,
                actionItem: d,
                destination: l,
                destinationKeys: s,
                pluginDuration: b,
                instanceDelay: g,
                customEasingFn: y,
                skipMotion: m,
              } = e,
              T = d.config.easing,
              { duration: I, delay: h } = d.config;
            null != b && (I = b),
              (h = null != g ? g : h),
              c === E ? (I = 0) : (o || m) && (I = h = 0);
            let { now: O } = t.payload;
            if (n && i) {
              let t = O - (a + h);
              if (u) {
                let t = I + h,
                  n = f(Math.min(Math.max(0, (O - a) / t), 1));
                e = (0, r.set)(e, "verboseTimeElapsed", t * n);
              }
              if (t < 0) return e;
              let n = f(Math.min(Math.max(0, t / I), 1)),
                o = p(T, n, y),
                c = {},
                d = null;
              return (
                s.length &&
                  (d = s.reduce((e, t) => {
                    let n = l[t],
                      a = parseFloat(i[t]) || 0,
                      r = parseFloat(n) - a;
                    return (e[t] = r * o + a), e;
                  }, {})),
                (c.current = d),
                (c.position = n),
                1 === n && ((c.active = !1), (c.complete = !0)),
                (0, r.merge)(e, c)
              );
            }
            return e;
          },
          h = (e = Object.freeze({}), t) => {
            switch (t.type) {
              case o:
                return t.payload.ixInstances || Object.freeze({});
              case c:
                return Object.freeze({});
              case u: {
                let {
                    instanceId: n,
                    elementId: i,
                    actionItem: a,
                    eventId: o,
                    eventTarget: c,
                    eventStateKey: u,
                    actionListId: d,
                    groupIndex: l,
                    isCarrier: s,
                    origin: f,
                    destination: p,
                    immediate: E,
                    verbose: g,
                    continuous: T,
                    parameterId: I,
                    actionGroups: h,
                    smoothing: O,
                    restingValue: _,
                    pluginInstance: v,
                    pluginDuration: A,
                    instanceDelay: R,
                    skipMotion: N,
                    skipToValue: S,
                  } = t.payload,
                  { actionTypeId: L } = a,
                  C = y(L),
                  w = m(C, L),
                  M = Object.keys(p).filter(
                    (e) => null != p[e] && "string" != typeof p[e]
                  ),
                  { easing: P } = a.config;
                return (0, r.set)(e, n, {
                  id: n,
                  elementId: i,
                  active: !1,
                  position: 0,
                  start: 0,
                  origin: f,
                  destination: p,
                  destinationKeys: M,
                  immediate: E,
                  verbose: g,
                  current: null,
                  actionItem: a,
                  actionTypeId: L,
                  eventId: o,
                  eventTarget: c,
                  eventStateKey: u,
                  actionListId: d,
                  groupIndex: l,
                  renderType: C,
                  isCarrier: s,
                  styleProp: w,
                  continuous: T,
                  parameterId: I,
                  actionGroups: h,
                  smoothing: O,
                  restingValue: _,
                  pluginInstance: v,
                  pluginDuration: A,
                  instanceDelay: R,
                  skipMotion: N,
                  skipToValue: S,
                  customEasingFn:
                    Array.isArray(P) && 4 === P.length ? b(P) : void 0,
                });
              }
              case d: {
                let { instanceId: n, time: i } = t.payload;
                return (0, r.mergeIn)(e, [n], {
                  active: !0,
                  complete: !1,
                  start: i,
                });
              }
              case l: {
                let { instanceId: n } = t.payload;
                if (!e[n]) return e;
                let i = {},
                  a = Object.keys(e),
                  { length: r } = a;
                for (let t = 0; t < r; t++) {
                  let r = a[t];
                  r !== n && (i[r] = e[r]);
                }
                return i;
              }
              case s: {
                let n = e,
                  i = Object.keys(e),
                  { length: a } = i;
                for (let o = 0; o < a; o++) {
                  let a = i[o],
                    c = e[a],
                    u = c.continuous ? T : I;
                  n = (0, r.set)(n, a, u(c, t));
                }
                return n;
              }
              default:
                return e;
            }
          };
      },
      1540: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixParameters", {
            enumerable: !0,
            get: function () {
              return o;
            },
          });
        let {
            IX2_RAW_DATA_IMPORTED: i,
            IX2_SESSION_STOPPED: a,
            IX2_PARAMETER_CHANGED: r,
          } = n(7087).IX2EngineActionTypes,
          o = (e = {}, t) => {
            switch (t.type) {
              case i:
                return t.payload.ixParameters || {};
              case a:
                return {};
              case r: {
                let { key: n, value: i } = t.payload;
                return (e[n] = i), e;
              }
              default:
                return e;
            }
          };
      },
      7243: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let i = n(9516),
          a = n(4609),
          r = n(628),
          o = n(5862),
          c = n(9468),
          u = n(7718),
          d = n(1540),
          { ixElements: l } = c.IX2ElementsReducer,
          s = (0, i.combineReducers)({
            ixData: a.ixData,
            ixRequest: r.ixRequest,
            ixSession: o.ixSession,
            ixElements: l,
            ixInstances: u.ixInstances,
            ixParameters: d.ixParameters,
          });
      },
      628: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixRequest", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let i = n(7087),
          a = n(1185),
          {
            IX2_PREVIEW_REQUESTED: r,
            IX2_PLAYBACK_REQUESTED: o,
            IX2_STOP_REQUESTED: c,
            IX2_CLEAR_REQUESTED: u,
          } = i.IX2EngineActionTypes,
          d = { preview: {}, playback: {}, stop: {}, clear: {} },
          l = Object.create(null, {
            [r]: { value: "preview" },
            [o]: { value: "playback" },
            [c]: { value: "stop" },
            [u]: { value: "clear" },
          }),
          s = (e = d, t) => {
            if (t.type in l) {
              let n = [l[t.type]];
              return (0, a.setIn)(e, [n], { ...t.payload });
            }
            return e;
          };
      },
      5862: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixSession", {
            enumerable: !0,
            get: function () {
              return g;
            },
          });
        let i = n(7087),
          a = n(1185),
          {
            IX2_SESSION_INITIALIZED: r,
            IX2_SESSION_STARTED: o,
            IX2_TEST_FRAME_RENDERED: c,
            IX2_SESSION_STOPPED: u,
            IX2_EVENT_LISTENER_ADDED: d,
            IX2_EVENT_STATE_CHANGED: l,
            IX2_ANIMATION_FRAME_CHANGED: s,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
            IX2_VIEWPORT_WIDTH_CHANGED: p,
            IX2_MEDIA_QUERIES_DEFINED: b,
          } = i.IX2EngineActionTypes,
          E = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1,
          },
          g = (e = E, t) => {
            switch (t.type) {
              case r: {
                let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
                return (0, a.merge)(e, {
                  hasBoundaryNodes: n,
                  reducedMotion: i,
                });
              }
              case o:
                return (0, a.set)(e, "active", !0);
              case c: {
                let {
                  payload: { step: n = 20 },
                } = t;
                return (0, a.set)(e, "tick", e.tick + n);
              }
              case u:
                return E;
              case s: {
                let {
                  payload: { now: n },
                } = t;
                return (0, a.set)(e, "tick", n);
              }
              case d: {
                let n = (0, a.addLast)(e.eventListeners, t.payload);
                return (0, a.set)(e, "eventListeners", n);
              }
              case l: {
                let { stateKey: n, newState: i } = t.payload;
                return (0, a.setIn)(e, ["eventState", n], i);
              }
              case f: {
                let { actionListId: n, isPlaying: i } = t.payload;
                return (0, a.setIn)(e, ["playbackState", n], i);
              }
              case p: {
                let { width: n, mediaQueries: i } = t.payload,
                  r = i.length,
                  o = null;
                for (let e = 0; e < r; e++) {
                  let { key: t, min: a, max: r } = i[e];
                  if (n >= a && n <= r) {
                    o = t;
                    break;
                  }
                }
                return (0, a.merge)(e, { viewportWidth: n, mediaQueryKey: o });
              }
              case b:
                return (0, a.set)(e, "hasDefinedMediaQueries", !0);
              default:
                return e;
            }
          };
      },
      7377: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          clearPlugin: function () {
            return l;
          },
          createPluginInstance: function () {
            return u;
          },
          getPluginConfig: function () {
            return a;
          },
          getPluginDestination: function () {
            return c;
          },
          getPluginDuration: function () {
            return r;
          },
          getPluginOrigin: function () {
            return o;
          },
          renderPlugin: function () {
            return d;
          },
        };
        for (var i in n)
          Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
        let a = (e) => e.value,
          r = (e, t) => {
            if ("auto" !== t.config.duration) return null;
            let n = parseFloat(e.getAttribute("data-duration"));
            return n > 0
              ? 1e3 * n
              : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
          },
          o = (e) => e || { value: 0 },
          c = (e) => ({ value: e.value }),
          u = (e) => {
            let t = window.Webflow.require("lottie");
            if (!t) return null;
            let n = t.createInstance(e);
            return n.stop(), n.setSubframe(!0), n;
          },
          d = (e, t, n) => {
            if (!e) return;
            let i = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * i);
          },
          l = (e) => {
            let t = window.Webflow.require("lottie");
            t && t.createInstance(e).stop();
          };
      },
      2570: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          clearPlugin: function () {
            return b;
          },
          createPluginInstance: function () {
            return f;
          },
          getPluginConfig: function () {
            return u;
          },
          getPluginDestination: function () {
            return s;
          },
          getPluginDuration: function () {
            return d;
          },
          getPluginOrigin: function () {
            return l;
          },
          renderPlugin: function () {
            return p;
          },
        };
        for (var i in n)
          Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
        let a = "--wf-rive-fit",
          r = "--wf-rive-alignment",
          o = (e) => document.querySelector(`[data-w-id="${e}"]`),
          c = () => window.Webflow.require("rive"),
          u = (e, t) => e.value.inputs[t],
          d = () => null,
          l = (e, t) => {
            if (e) return e;
            let n = {},
              { inputs: i = {} } = t.config.value;
            for (let e in i) null == i[e] && (n[e] = 0);
            return n;
          },
          s = (e) => e.value.inputs ?? {},
          f = (e, t) => {
            if ((t.config?.target?.selectorGuids || []).length > 0) return e;
            let n = t?.config?.target?.pluginElement;
            return n ? o(n) : null;
          },
          p = (e, { PLUGIN_RIVE: t }, n) => {
            let i = c();
            if (!i) return;
            let o = i.getInstance(e),
              u = i.rive.StateMachineInputType,
              { name: d, inputs: l = {} } = n.config.value || {};
            function s(e) {
              if (e.loaded) n();
              else {
                let t = () => {
                  n(), e?.off("load", t);
                };
                e?.on("load", t);
              }
              function n() {
                let n = e.stateMachineInputs(d);
                if (null != n) {
                  if ((e.isPlaying || e.play(d, !1), a in l || r in l)) {
                    let t = e.layout,
                      n = l[a] ?? t.fit,
                      i = l[r] ?? t.alignment;
                    (n !== t.fit || i !== t.alignment) &&
                      (e.layout = t.copyWith({ fit: n, alignment: i }));
                  }
                  for (let e in l) {
                    if (e === a || e === r) continue;
                    let i = n.find((t) => t.name === e);
                    if (null != i)
                      switch (i.type) {
                        case u.Boolean:
                          null != l[e] && (i.value = !!l[e]);
                          break;
                        case u.Number: {
                          let n = t[e];
                          null != n && (i.value = n);
                          break;
                        }
                        case u.Trigger:
                          l[e] && i.fire();
                      }
                  }
                }
              }
            }
            o?.rive ? s(o.rive) : i.setLoadHandler(e, s);
          },
          b = (e, t) => null;
      },
      2866: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          clearPlugin: function () {
            return b;
          },
          createPluginInstance: function () {
            return f;
          },
          getPluginConfig: function () {
            return c;
          },
          getPluginDestination: function () {
            return s;
          },
          getPluginDuration: function () {
            return u;
          },
          getPluginOrigin: function () {
            return l;
          },
          renderPlugin: function () {
            return p;
          },
        };
        for (var i in n)
          Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
        let a = (e) => document.querySelector(`[data-w-id="${e}"]`),
          r = () => window.Webflow.require("spline"),
          o = (e, t) => e.filter((e) => !t.includes(e)),
          c = (e, t) => e.value[t],
          u = () => null,
          d = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          }),
          l = (e, t) => {
            let n = Object.keys(t.config.value);
            if (e) {
              let t = o(n, Object.keys(e));
              return t.length ? t.reduce((e, t) => ((e[t] = d[t]), e), e) : e;
            }
            return n.reduce((e, t) => ((e[t] = d[t]), e), {});
          },
          s = (e) => e.value,
          f = (e, t) => {
            let n = t?.config?.target?.pluginElement;
            return n ? a(n) : null;
          },
          p = (e, t, n) => {
            let i = r();
            if (!i) return;
            let a = i.getInstance(e),
              o = n.config.target.objectId,
              c = (e) => {
                if (!e)
                  throw Error("Invalid spline app passed to renderSpline");
                let n = o && e.findObjectById(o);
                if (!n) return;
                let { PLUGIN_SPLINE: i } = t;
                null != i.positionX && (n.position.x = i.positionX),
                  null != i.positionY && (n.position.y = i.positionY),
                  null != i.positionZ && (n.position.z = i.positionZ),
                  null != i.rotationX && (n.rotation.x = i.rotationX),
                  null != i.rotationY && (n.rotation.y = i.rotationY),
                  null != i.rotationZ && (n.rotation.z = i.rotationZ),
                  null != i.scaleX && (n.scale.x = i.scaleX),
                  null != i.scaleY && (n.scale.y = i.scaleY),
                  null != i.scaleZ && (n.scale.z = i.scaleZ);
              };
            a ? c(a.spline) : i.setLoadHandler(e, c);
          },
          b = () => null;
      },
      1407: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = {
          clearPlugin: function () {
            return p;
          },
          createPluginInstance: function () {
            return l;
          },
          getPluginConfig: function () {
            return o;
          },
          getPluginDestination: function () {
            return d;
          },
          getPluginDuration: function () {
            return c;
          },
          getPluginOrigin: function () {
            return u;
          },
          renderPlugin: function () {
            return f;
          },
        };
        for (var a in i)
          Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
        let r = n(380),
          o = (e, t) => e.value[t],
          c = () => null,
          u = (e, t) => {
            if (e) return e;
            let n = t.config.value,
              i = t.config.target.objectId,
              a = getComputedStyle(document.documentElement).getPropertyValue(
                i
              );
            return null != n.size
              ? { size: parseInt(a, 10) }
              : "%" === n.unit || "-" === n.unit
              ? { size: parseFloat(a) }
              : null != n.red && null != n.green && null != n.blue
              ? (0, r.normalizeColor)(a)
              : void 0;
          },
          d = (e) => e.value,
          l = () => null,
          s = {
            color: {
              match: ({ red: e, green: t, blue: n, alpha: i }) =>
                [e, t, n, i].every((e) => null != e),
              getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
                `rgba(${e}, ${t}, ${n}, ${i})`,
            },
            size: {
              match: ({ size: e }) => null != e,
              getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
            },
          },
          f = (e, t, n) => {
            let {
                target: { objectId: i },
                value: { unit: a },
              } = n.config,
              r = t.PLUGIN_VARIABLE,
              o = Object.values(s).find((e) => e.match(r, a));
            o &&
              document.documentElement.style.setProperty(i, o.getValue(r, a));
          },
          p = (e, t) => {
            let n = t.config.target.objectId;
            document.documentElement.style.removeProperty(n);
          };
      },
      3690: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "pluginMethodMap", {
            enumerable: !0,
            get: function () {
              return l;
            },
          });
        let i = n(7087),
          a = d(n(7377)),
          r = d(n(2866)),
          o = d(n(2570)),
          c = d(n(1407));
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (u = function (e) {
            return e ? n : t;
          })(e);
        }
        function d(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = u(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        }
        let l = new Map([
          [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...a }],
          [i.ActionTypeConsts.PLUGIN_SPLINE, { ...r }],
          [i.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
          [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...c }],
        ]);
      },
      8023: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
            return I;
          },
          IX2_ANIMATION_FRAME_CHANGED: function () {
            return b;
          },
          IX2_CLEAR_REQUESTED: function () {
            return s;
          },
          IX2_ELEMENT_STATE_CHANGED: function () {
            return T;
          },
          IX2_EVENT_LISTENER_ADDED: function () {
            return f;
          },
          IX2_EVENT_STATE_CHANGED: function () {
            return p;
          },
          IX2_INSTANCE_ADDED: function () {
            return g;
          },
          IX2_INSTANCE_REMOVED: function () {
            return m;
          },
          IX2_INSTANCE_STARTED: function () {
            return y;
          },
          IX2_MEDIA_QUERIES_DEFINED: function () {
            return O;
          },
          IX2_PARAMETER_CHANGED: function () {
            return E;
          },
          IX2_PLAYBACK_REQUESTED: function () {
            return d;
          },
          IX2_PREVIEW_REQUESTED: function () {
            return u;
          },
          IX2_RAW_DATA_IMPORTED: function () {
            return a;
          },
          IX2_SESSION_INITIALIZED: function () {
            return r;
          },
          IX2_SESSION_STARTED: function () {
            return o;
          },
          IX2_SESSION_STOPPED: function () {
            return c;
          },
          IX2_STOP_REQUESTED: function () {
            return l;
          },
          IX2_TEST_FRAME_RENDERED: function () {
            return _;
          },
          IX2_VIEWPORT_WIDTH_CHANGED: function () {
            return h;
          },
        };
        for (var i in n)
          Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
        let a = "IX2_RAW_DATA_IMPORTED",
          r = "IX2_SESSION_INITIALIZED",
          o = "IX2_SESSION_STARTED",
          c = "IX2_SESSION_STOPPED",
          u = "IX2_PREVIEW_REQUESTED",
          d = "IX2_PLAYBACK_REQUESTED",
          l = "IX2_STOP_REQUESTED",
          s = "IX2_CLEAR_REQUESTED",
          f = "IX2_EVENT_LISTENER_ADDED",
          p = "IX2_EVENT_STATE_CHANGED",
          b = "IX2_ANIMATION_FRAME_CHANGED",
          E = "IX2_PARAMETER_CHANGED",
          g = "IX2_INSTANCE_ADDED",
          y = "IX2_INSTANCE_STARTED",
          m = "IX2_INSTANCE_REMOVED",
          T = "IX2_ELEMENT_STATE_CHANGED",
          I = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
          h = "IX2_VIEWPORT_WIDTH_CHANGED",
          O = "IX2_MEDIA_QUERIES_DEFINED",
          _ = "IX2_TEST_FRAME_RENDERED";
      },
      2686: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          ABSTRACT_NODE: function () {
            return et;
          },
          AUTO: function () {
            return W;
          },
          BACKGROUND: function () {
            return G;
          },
          BACKGROUND_COLOR: function () {
            return k;
          },
          BAR_DELIMITER: function () {
            return H;
          },
          BORDER_COLOR: function () {
            return U;
          },
          BOUNDARY_SELECTOR: function () {
            return u;
          },
          CHILDREN: function () {
            return $;
          },
          COLON_DELIMITER: function () {
            return Y;
          },
          COLOR: function () {
            return D;
          },
          COMMA_DELIMITER: function () {
            return z;
          },
          CONFIG_UNIT: function () {
            return g;
          },
          CONFIG_VALUE: function () {
            return f;
          },
          CONFIG_X_UNIT: function () {
            return p;
          },
          CONFIG_X_VALUE: function () {
            return d;
          },
          CONFIG_Y_UNIT: function () {
            return b;
          },
          CONFIG_Y_VALUE: function () {
            return l;
          },
          CONFIG_Z_UNIT: function () {
            return E;
          },
          CONFIG_Z_VALUE: function () {
            return s;
          },
          DISPLAY: function () {
            return B;
          },
          FILTER: function () {
            return P;
          },
          FLEX: function () {
            return X;
          },
          FONT_VARIATION_SETTINGS: function () {
            return F;
          },
          HEIGHT: function () {
            return x;
          },
          HTML_ELEMENT: function () {
            return J;
          },
          IMMEDIATE_CHILDREN: function () {
            return Q;
          },
          IX2_ID_DELIMITER: function () {
            return a;
          },
          OPACITY: function () {
            return M;
          },
          PARENT: function () {
            return K;
          },
          PLAIN_OBJECT: function () {
            return ee;
          },
          PRESERVE_3D: function () {
            return Z;
          },
          RENDER_GENERAL: function () {
            return ei;
          },
          RENDER_PLUGIN: function () {
            return er;
          },
          RENDER_STYLE: function () {
            return ea;
          },
          RENDER_TRANSFORM: function () {
            return en;
          },
          ROTATE_X: function () {
            return R;
          },
          ROTATE_Y: function () {
            return N;
          },
          ROTATE_Z: function () {
            return S;
          },
          SCALE_3D: function () {
            return A;
          },
          SCALE_X: function () {
            return O;
          },
          SCALE_Y: function () {
            return _;
          },
          SCALE_Z: function () {
            return v;
          },
          SIBLINGS: function () {
            return q;
          },
          SKEW: function () {
            return L;
          },
          SKEW_X: function () {
            return C;
          },
          SKEW_Y: function () {
            return w;
          },
          TRANSFORM: function () {
            return y;
          },
          TRANSLATE_3D: function () {
            return h;
          },
          TRANSLATE_X: function () {
            return m;
          },
          TRANSLATE_Y: function () {
            return T;
          },
          TRANSLATE_Z: function () {
            return I;
          },
          WF_PAGE: function () {
            return r;
          },
          WIDTH: function () {
            return V;
          },
          WILL_CHANGE: function () {
            return j;
          },
          W_MOD_IX: function () {
            return c;
          },
          W_MOD_JS: function () {
            return o;
          },
        };
        for (var i in n)
          Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
        let a = "|",
          r = "data-wf-page",
          o = "w-mod-js",
          c = "w-mod-ix",
          u = ".w-dyn-item",
          d = "xValue",
          l = "yValue",
          s = "zValue",
          f = "value",
          p = "xUnit",
          b = "yUnit",
          E = "zUnit",
          g = "unit",
          y = "transform",
          m = "translateX",
          T = "translateY",
          I = "translateZ",
          h = "translate3d",
          O = "scaleX",
          _ = "scaleY",
          v = "scaleZ",
          A = "scale3d",
          R = "rotateX",
          N = "rotateY",
          S = "rotateZ",
          L = "skew",
          C = "skewX",
          w = "skewY",
          M = "opacity",
          P = "filter",
          F = "font-variation-settings",
          V = "width",
          x = "height",
          k = "backgroundColor",
          G = "background",
          U = "borderColor",
          D = "color",
          B = "display",
          X = "flex",
          j = "willChange",
          W = "AUTO",
          z = ",",
          Y = ":",
          H = "|",
          $ = "CHILDREN",
          Q = "IMMEDIATE_CHILDREN",
          q = "SIBLINGS",
          K = "PARENT",
          Z = "preserve-3d",
          J = "HTML_ELEMENT",
          ee = "PLAIN_OBJECT",
          et = "ABSTRACT_NODE",
          en = "RENDER_TRANSFORM",
          ei = "RENDER_GENERAL",
          ea = "RENDER_STYLE",
          er = "RENDER_PLUGIN";
      },
      262: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          ActionAppliesTo: function () {
            return r;
          },
          ActionTypeConsts: function () {
            return a;
          },
        };
        for (var i in n)
          Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
        let a = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
          },
          r = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
          };
      },
      7087: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = {
          ActionTypeConsts: function () {
            return o.ActionTypeConsts;
          },
          IX2EngineActionTypes: function () {
            return c;
          },
          IX2EngineConstants: function () {
            return u;
          },
          QuickEffectIds: function () {
            return r.QuickEffectIds;
          },
        };
        for (var a in i)
          Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
        let r = d(n(1833), t),
          o = d(n(262), t);
        d(n(8704), t), d(n(3213), t);
        let c = s(n(8023)),
          u = s(n(2686));
        function d(e, t) {
          return (
            Object.keys(e).forEach(function (n) {
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }),
            e
          );
        }
        function l(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (l = function (e) {
            return e ? n : t;
          })(e);
        }
        function s(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = l(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        }
      },
      3213: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ReducedMotionTypes", {
            enumerable: !0,
            get: function () {
              return l;
            },
          });
        let {
            TRANSFORM_MOVE: i,
            TRANSFORM_SCALE: a,
            TRANSFORM_ROTATE: r,
            TRANSFORM_SKEW: o,
            STYLE_SIZE: c,
            STYLE_FILTER: u,
            STYLE_FONT_VARIATION: d,
          } = n(262).ActionTypeConsts,
          l = { [i]: !0, [a]: !0, [r]: !0, [o]: !0, [c]: !0, [u]: !0, [d]: !0 };
      },
      1833: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          EventAppliesTo: function () {
            return r;
          },
          EventBasedOn: function () {
            return o;
          },
          EventContinuousMouseAxes: function () {
            return c;
          },
          EventLimitAffectedElements: function () {
            return u;
          },
          EventTypeConsts: function () {
            return a;
          },
          QuickEffectDirectionConsts: function () {
            return l;
          },
          QuickEffectIds: function () {
            return d;
          },
        };
        for (var i in n)
          Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
        let a = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL",
          },
          r = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
          o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
          c = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
          u = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
          },
          d = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
          },
          l = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
          };
      },
      8704: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "InteractionTypeConsts", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        let n = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
            "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION",
        };
      },
      380: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "normalizeColor", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let n = {
          aliceblue: "#F0F8FF",
          antiquewhite: "#FAEBD7",
          aqua: "#00FFFF",
          aquamarine: "#7FFFD4",
          azure: "#F0FFFF",
          beige: "#F5F5DC",
          bisque: "#FFE4C4",
          black: "#000000",
          blanchedalmond: "#FFEBCD",
          blue: "#0000FF",
          blueviolet: "#8A2BE2",
          brown: "#A52A2A",
          burlywood: "#DEB887",
          cadetblue: "#5F9EA0",
          chartreuse: "#7FFF00",
          chocolate: "#D2691E",
          coral: "#FF7F50",
          cornflowerblue: "#6495ED",
          cornsilk: "#FFF8DC",
          crimson: "#DC143C",
          cyan: "#00FFFF",
          darkblue: "#00008B",
          darkcyan: "#008B8B",
          darkgoldenrod: "#B8860B",
          darkgray: "#A9A9A9",
          darkgreen: "#006400",
          darkgrey: "#A9A9A9",
          darkkhaki: "#BDB76B",
          darkmagenta: "#8B008B",
          darkolivegreen: "#556B2F",
          darkorange: "#FF8C00",
          darkorchid: "#9932CC",
          darkred: "#8B0000",
          darksalmon: "#E9967A",
          darkseagreen: "#8FBC8F",
          darkslateblue: "#483D8B",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          darkturquoise: "#00CED1",
          darkviolet: "#9400D3",
          deeppink: "#FF1493",
          deepskyblue: "#00BFFF",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1E90FF",
          firebrick: "#B22222",
          floralwhite: "#FFFAF0",
          forestgreen: "#228B22",
          fuchsia: "#FF00FF",
          gainsboro: "#DCDCDC",
          ghostwhite: "#F8F8FF",
          gold: "#FFD700",
          goldenrod: "#DAA520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#ADFF2F",
          grey: "#808080",
          honeydew: "#F0FFF0",
          hotpink: "#FF69B4",
          indianred: "#CD5C5C",
          indigo: "#4B0082",
          ivory: "#FFFFF0",
          khaki: "#F0E68C",
          lavender: "#E6E6FA",
          lavenderblush: "#FFF0F5",
          lawngreen: "#7CFC00",
          lemonchiffon: "#FFFACD",
          lightblue: "#ADD8E6",
          lightcoral: "#F08080",
          lightcyan: "#E0FFFF",
          lightgoldenrodyellow: "#FAFAD2",
          lightgray: "#D3D3D3",
          lightgreen: "#90EE90",
          lightgrey: "#D3D3D3",
          lightpink: "#FFB6C1",
          lightsalmon: "#FFA07A",
          lightseagreen: "#20B2AA",
          lightskyblue: "#87CEFA",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#B0C4DE",
          lightyellow: "#FFFFE0",
          lime: "#00FF00",
          limegreen: "#32CD32",
          linen: "#FAF0E6",
          magenta: "#FF00FF",
          maroon: "#800000",
          mediumaquamarine: "#66CDAA",
          mediumblue: "#0000CD",
          mediumorchid: "#BA55D3",
          mediumpurple: "#9370DB",
          mediumseagreen: "#3CB371",
          mediumslateblue: "#7B68EE",
          mediumspringgreen: "#00FA9A",
          mediumturquoise: "#48D1CC",
          mediumvioletred: "#C71585",
          midnightblue: "#191970",
          mintcream: "#F5FFFA",
          mistyrose: "#FFE4E1",
          moccasin: "#FFE4B5",
          navajowhite: "#FFDEAD",
          navy: "#000080",
          oldlace: "#FDF5E6",
          olive: "#808000",
          olivedrab: "#6B8E23",
          orange: "#FFA500",
          orangered: "#FF4500",
          orchid: "#DA70D6",
          palegoldenrod: "#EEE8AA",
          palegreen: "#98FB98",
          paleturquoise: "#AFEEEE",
          palevioletred: "#DB7093",
          papayawhip: "#FFEFD5",
          peachpuff: "#FFDAB9",
          peru: "#CD853F",
          pink: "#FFC0CB",
          plum: "#DDA0DD",
          powderblue: "#B0E0E6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#FF0000",
          rosybrown: "#BC8F8F",
          royalblue: "#4169E1",
          saddlebrown: "#8B4513",
          salmon: "#FA8072",
          sandybrown: "#F4A460",
          seagreen: "#2E8B57",
          seashell: "#FFF5EE",
          sienna: "#A0522D",
          silver: "#C0C0C0",
          skyblue: "#87CEEB",
          slateblue: "#6A5ACD",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#FFFAFA",
          springgreen: "#00FF7F",
          steelblue: "#4682B4",
          tan: "#D2B48C",
          teal: "#008080",
          thistle: "#D8BFD8",
          tomato: "#FF6347",
          turquoise: "#40E0D0",
          violet: "#EE82EE",
          wheat: "#F5DEB3",
          white: "#FFFFFF",
          whitesmoke: "#F5F5F5",
          yellow: "#FFFF00",
          yellowgreen: "#9ACD32",
        };
        function i(e) {
          let t,
            i,
            a,
            r = 1,
            o = e.replace(/\s/g, "").toLowerCase(),
            c = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
          if (c.startsWith("#")) {
            let e = c.substring(1);
            3 === e.length || 4 === e.length
              ? ((t = parseInt(e[0] + e[0], 16)),
                (i = parseInt(e[1] + e[1], 16)),
                (a = parseInt(e[2] + e[2], 16)),
                4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
              : (6 === e.length || 8 === e.length) &&
                ((t = parseInt(e.substring(0, 2), 16)),
                (i = parseInt(e.substring(2, 4), 16)),
                (a = parseInt(e.substring(4, 6), 16)),
                8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
          } else if (c.startsWith("rgba")) {
            let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
            (t = parseInt(e[0], 10)),
              (i = parseInt(e[1], 10)),
              (a = parseInt(e[2], 10)),
              (r = parseFloat(e[3]));
          } else if (c.startsWith("rgb")) {
            let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
            (t = parseInt(e[0], 10)),
              (i = parseInt(e[1], 10)),
              (a = parseInt(e[2], 10));
          } else if (c.startsWith("hsla")) {
            let e,
              n,
              o,
              u = c.match(/hsla\(([^)]+)\)/)[1].split(","),
              d = parseFloat(u[0]),
              l = parseFloat(u[1].replace("%", "")) / 100,
              s = parseFloat(u[2].replace("%", "")) / 100;
            r = parseFloat(u[3]);
            let f = (1 - Math.abs(2 * s - 1)) * l,
              p = f * (1 - Math.abs(((d / 60) % 2) - 1)),
              b = s - f / 2;
            d >= 0 && d < 60
              ? ((e = f), (n = p), (o = 0))
              : d >= 60 && d < 120
              ? ((e = p), (n = f), (o = 0))
              : d >= 120 && d < 180
              ? ((e = 0), (n = f), (o = p))
              : d >= 180 && d < 240
              ? ((e = 0), (n = p), (o = f))
              : d >= 240 && d < 300
              ? ((e = p), (n = 0), (o = f))
              : ((e = f), (n = 0), (o = p)),
              (t = Math.round((e + b) * 255)),
              (i = Math.round((n + b) * 255)),
              (a = Math.round((o + b) * 255));
          } else if (c.startsWith("hsl")) {
            let e,
              n,
              r,
              o = c.match(/hsl\(([^)]+)\)/)[1].split(","),
              u = parseFloat(o[0]),
              d = parseFloat(o[1].replace("%", "")) / 100,
              l = parseFloat(o[2].replace("%", "")) / 100,
              s = (1 - Math.abs(2 * l - 1)) * d,
              f = s * (1 - Math.abs(((u / 60) % 2) - 1)),
              p = l - s / 2;
            u >= 0 && u < 60
              ? ((e = s), (n = f), (r = 0))
              : u >= 60 && u < 120
              ? ((e = f), (n = s), (r = 0))
              : u >= 120 && u < 180
              ? ((e = 0), (n = s), (r = f))
              : u >= 180 && u < 240
              ? ((e = 0), (n = f), (r = s))
              : u >= 240 && u < 300
              ? ((e = f), (n = 0), (r = s))
              : ((e = s), (n = 0), (r = f)),
              (t = Math.round((e + p) * 255)),
              (i = Math.round((n + p) * 255)),
              (a = Math.round((r + p) * 255));
          }
          if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a))
            throw Error(
              `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
            );
          return { red: t, green: i, blue: a, alpha: r };
        }
      },
      9468: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = {
          IX2BrowserSupport: function () {
            return r;
          },
          IX2EasingUtils: function () {
            return c;
          },
          IX2Easings: function () {
            return o;
          },
          IX2ElementsReducer: function () {
            return u;
          },
          IX2VanillaPlugins: function () {
            return d;
          },
          IX2VanillaUtils: function () {
            return l;
          },
        };
        for (var a in i)
          Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
        let r = f(n(2662)),
          o = f(n(8686)),
          c = f(n(3767)),
          u = f(n(5861)),
          d = f(n(1799)),
          l = f(n(4124));
        function s(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (s = function (e) {
            return e ? n : t;
          })(e);
        }
        function f(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        }
      },
      2662: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i,
          a = {
            ELEMENT_MATCHES: function () {
              return d;
            },
            FLEX_PREFIXED: function () {
              return l;
            },
            IS_BROWSER_ENV: function () {
              return c;
            },
            TRANSFORM_PREFIXED: function () {
              return s;
            },
            TRANSFORM_STYLE_PREFIXED: function () {
              return p;
            },
            withBrowser: function () {
              return u;
            },
          };
        for (var r in a)
          Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
        let o = (i = n(9777)) && i.__esModule ? i : { default: i },
          c = "undefined" != typeof window,
          u = (e, t) => (c ? e() : t),
          d = u(() =>
            (0, o.default)(
              [
                "matches",
                "matchesSelector",
                "mozMatchesSelector",
                "msMatchesSelector",
                "oMatchesSelector",
                "webkitMatchesSelector",
              ],
              (e) => e in Element.prototype
            )
          ),
          l = u(() => {
            let e = document.createElement("i"),
              t = [
                "flex",
                "-webkit-flex",
                "-ms-flexbox",
                "-moz-box",
                "-webkit-box",
              ];
            try {
              let { length: n } = t;
              for (let i = 0; i < n; i++) {
                let n = t[i];
                if (((e.style.display = n), e.style.display === n)) return n;
              }
              return "";
            } catch (e) {
              return "";
            }
          }, "flex"),
          s = u(() => {
            let e = document.createElement("i");
            if (null == e.style.transform) {
              let t = ["Webkit", "Moz", "ms"],
                { length: n } = t;
              for (let i = 0; i < n; i++) {
                let n = t[i] + "Transform";
                if (void 0 !== e.style[n]) return n;
              }
            }
            return "transform";
          }, "transform"),
          f = s.split("transform")[0],
          p = f ? f + "TransformStyle" : "transformStyle";
      },
      3767: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i,
          a = {
            applyEasing: function () {
              return s;
            },
            createBezierEasing: function () {
              return l;
            },
            optimizeFloat: function () {
              return d;
            },
          };
        for (var r in a)
          Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
        let o = (function (e, t) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = u(t);
            if (n && n.has(e)) return n.get(e);
            var i = { __proto__: null },
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
              if (
                "default" !== r &&
                Object.prototype.hasOwnProperty.call(e, r)
              ) {
                var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                o && (o.get || o.set)
                  ? Object.defineProperty(i, r, o)
                  : (i[r] = e[r]);
              }
            return (i.default = e), n && n.set(e, i), i;
          })(n(8686)),
          c = (i = n(1361)) && i.__esModule ? i : { default: i };
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (u = function (e) {
            return e ? n : t;
          })(e);
        }
        function d(e, t = 5, n = 10) {
          let i = Math.pow(n, t),
            a = Number(Math.round(e * i) / i);
          return Math.abs(a) > 1e-4 ? a : 0;
        }
        function l(e) {
          return (0, c.default)(...e);
        }
        function s(e, t, n) {
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : n
            ? d(t > 0 ? n(t) : t)
            : d(t > 0 && e && o[e] ? o[e](t) : t);
        }
      },
      8686: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i,
          a = {
            bounce: function () {
              return X;
            },
            bouncePast: function () {
              return j;
            },
            ease: function () {
              return c;
            },
            easeIn: function () {
              return u;
            },
            easeInOut: function () {
              return l;
            },
            easeOut: function () {
              return d;
            },
            inBack: function () {
              return P;
            },
            inCirc: function () {
              return L;
            },
            inCubic: function () {
              return b;
            },
            inElastic: function () {
              return x;
            },
            inExpo: function () {
              return R;
            },
            inOutBack: function () {
              return V;
            },
            inOutCirc: function () {
              return w;
            },
            inOutCubic: function () {
              return g;
            },
            inOutElastic: function () {
              return G;
            },
            inOutExpo: function () {
              return S;
            },
            inOutQuad: function () {
              return p;
            },
            inOutQuart: function () {
              return T;
            },
            inOutQuint: function () {
              return O;
            },
            inOutSine: function () {
              return A;
            },
            inQuad: function () {
              return s;
            },
            inQuart: function () {
              return y;
            },
            inQuint: function () {
              return I;
            },
            inSine: function () {
              return _;
            },
            outBack: function () {
              return F;
            },
            outBounce: function () {
              return M;
            },
            outCirc: function () {
              return C;
            },
            outCubic: function () {
              return E;
            },
            outElastic: function () {
              return k;
            },
            outExpo: function () {
              return N;
            },
            outQuad: function () {
              return f;
            },
            outQuart: function () {
              return m;
            },
            outQuint: function () {
              return h;
            },
            outSine: function () {
              return v;
            },
            swingFrom: function () {
              return D;
            },
            swingFromTo: function () {
              return U;
            },
            swingTo: function () {
              return B;
            },
          };
        for (var r in a)
          Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
        let o = (i = n(1361)) && i.__esModule ? i : { default: i },
          c = (0, o.default)(0.25, 0.1, 0.25, 1),
          u = (0, o.default)(0.42, 0, 1, 1),
          d = (0, o.default)(0, 0, 0.58, 1),
          l = (0, o.default)(0.42, 0, 0.58, 1);
        function s(e) {
          return Math.pow(e, 2);
        }
        function f(e) {
          return -(Math.pow(e - 1, 2) - 1);
        }
        function p(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 2)
            : -0.5 * ((e -= 2) * e - 2);
        }
        function b(e) {
          return Math.pow(e, 3);
        }
        function E(e) {
          return Math.pow(e - 1, 3) + 1;
        }
        function g(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 3)
            : 0.5 * (Math.pow(e - 2, 3) + 2);
        }
        function y(e) {
          return Math.pow(e, 4);
        }
        function m(e) {
          return -(Math.pow(e - 1, 4) - 1);
        }
        function T(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 4)
            : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
        }
        function I(e) {
          return Math.pow(e, 5);
        }
        function h(e) {
          return Math.pow(e - 1, 5) + 1;
        }
        function O(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 5)
            : 0.5 * (Math.pow(e - 2, 5) + 2);
        }
        function _(e) {
          return -Math.cos((Math.PI / 2) * e) + 1;
        }
        function v(e) {
          return Math.sin((Math.PI / 2) * e);
        }
        function A(e) {
          return -0.5 * (Math.cos(Math.PI * e) - 1);
        }
        function R(e) {
          return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
        }
        function N(e) {
          return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
        }
        function S(e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (e /= 0.5) < 1
            ? 0.5 * Math.pow(2, 10 * (e - 1))
            : 0.5 * (-Math.pow(2, -10 * --e) + 2);
        }
        function L(e) {
          return -(Math.sqrt(1 - e * e) - 1);
        }
        function C(e) {
          return Math.sqrt(1 - Math.pow(e - 1, 2));
        }
        function w(e) {
          return (e /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        }
        function M(e) {
          return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function P(e) {
          return e * e * (2.70158 * e - 1.70158);
        }
        function F(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }
        function V(e) {
          let t = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        }
        function x(e) {
          let t = 1.70158,
            n = 0,
            i = 1;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (n || (n = 0.3),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              -(
                i *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n)
              ));
        }
        function k(e) {
          let t = 1.70158,
            n = 0,
            i = 1;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (n || (n = 0.3),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
                1);
        }
        function G(e) {
          let t = 1.70158,
            n = 0,
            i = 1;
          return 0 === e
            ? 0
            : 2 == (e /= 0.5)
            ? 1
            : (n || (n = 0.3 * 1.5),
              i < 1
                ? ((i = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
              e < 1)
            ? -0.5 *
              (i *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n))
            : i *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n) *
                0.5 +
              1;
        }
        function U(e) {
          let t = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        }
        function D(e) {
          return e * e * (2.70158 * e - 1.70158);
        }
        function B(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }
        function X(e) {
          return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function j(e) {
          return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
            : e < 2.5 / 2.75
            ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
            : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
        }
      },
      1799: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = {
          clearPlugin: function () {
            return E;
          },
          createPluginInstance: function () {
            return p;
          },
          getPluginConfig: function () {
            return d;
          },
          getPluginDestination: function () {
            return f;
          },
          getPluginDuration: function () {
            return s;
          },
          getPluginOrigin: function () {
            return l;
          },
          isPluginType: function () {
            return c;
          },
          renderPlugin: function () {
            return b;
          },
        };
        for (var a in i)
          Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
        let r = n(2662),
          o = n(3690);
        function c(e) {
          return o.pluginMethodMap.has(e);
        }
        let u = (e) => (t) => {
            if (!r.IS_BROWSER_ENV) return () => null;
            let n = o.pluginMethodMap.get(t);
            if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
            let i = n[e];
            if (!i) throw Error(`IX2 invalid plugin method: ${e}`);
            return i;
          },
          d = u("getPluginConfig"),
          l = u("getPluginOrigin"),
          s = u("getPluginDuration"),
          f = u("getPluginDestination"),
          p = u("createPluginInstance"),
          b = u("renderPlugin"),
          E = u("clearPlugin");
      },
      4124: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = {
          cleanupHTMLElement: function () {
            return ez;
          },
          clearAllStyles: function () {
            return eX;
          },
          clearObjectCache: function () {
            return es;
          },
          getActionListProgress: function () {
            return eQ;
          },
          getAffectedElements: function () {
            return eI;
          },
          getComputedStyle: function () {
            return eh;
          },
          getDestinationValues: function () {
            return eL;
          },
          getElementId: function () {
            return eE;
          },
          getInstanceId: function () {
            return ep;
          },
          getInstanceOrigin: function () {
            return eA;
          },
          getItemConfigByKey: function () {
            return eS;
          },
          getMaxDurationItemIndex: function () {
            return e$;
          },
          getNamespacedParameterId: function () {
            return eZ;
          },
          getRenderType: function () {
            return eC;
          },
          getStyleProp: function () {
            return ew;
          },
          mediaQueriesEqual: function () {
            return e0;
          },
          observeStore: function () {
            return em;
          },
          reduceListToGroup: function () {
            return eq;
          },
          reifyState: function () {
            return eg;
          },
          renderHTMLElement: function () {
            return eM;
          },
          shallowEqual: function () {
            return l.default;
          },
          shouldAllowMediaQuery: function () {
            return eJ;
          },
          shouldNamespaceEventParameter: function () {
            return eK;
          },
          stringifyTarget: function () {
            return e2;
          },
        };
        for (var a in i)
          Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
        let r = E(n(4075)),
          o = E(n(1455)),
          c = E(n(5720)),
          u = n(1185),
          d = n(7087),
          l = E(n(7164)),
          s = n(3767),
          f = n(380),
          p = n(1799),
          b = n(2662);
        function E(e) {
          return e && e.__esModule ? e : { default: e };
        }
        let {
            BACKGROUND: g,
            TRANSFORM: y,
            TRANSLATE_3D: m,
            SCALE_3D: T,
            ROTATE_X: I,
            ROTATE_Y: h,
            ROTATE_Z: O,
            SKEW: _,
            PRESERVE_3D: v,
            FLEX: A,
            OPACITY: R,
            FILTER: N,
            FONT_VARIATION_SETTINGS: S,
            WIDTH: L,
            HEIGHT: C,
            BACKGROUND_COLOR: w,
            BORDER_COLOR: M,
            COLOR: P,
            CHILDREN: F,
            IMMEDIATE_CHILDREN: V,
            SIBLINGS: x,
            PARENT: k,
            DISPLAY: G,
            WILL_CHANGE: U,
            AUTO: D,
            COMMA_DELIMITER: B,
            COLON_DELIMITER: X,
            BAR_DELIMITER: j,
            RENDER_TRANSFORM: W,
            RENDER_GENERAL: z,
            RENDER_STYLE: Y,
            RENDER_PLUGIN: H,
          } = d.IX2EngineConstants,
          {
            TRANSFORM_MOVE: $,
            TRANSFORM_SCALE: Q,
            TRANSFORM_ROTATE: q,
            TRANSFORM_SKEW: K,
            STYLE_OPACITY: Z,
            STYLE_FILTER: J,
            STYLE_FONT_VARIATION: ee,
            STYLE_SIZE: et,
            STYLE_BACKGROUND_COLOR: en,
            STYLE_BORDER: ei,
            STYLE_TEXT_COLOR: ea,
            GENERAL_DISPLAY: er,
            OBJECT_VALUE: eo,
          } = d.ActionTypeConsts,
          ec = (e) => e.trim(),
          eu = Object.freeze({ [en]: w, [ei]: M, [ea]: P }),
          ed = Object.freeze({
            [b.TRANSFORM_PREFIXED]: y,
            [w]: g,
            [R]: R,
            [N]: N,
            [L]: L,
            [C]: C,
            [S]: S,
          }),
          el = new Map();
        function es() {
          el.clear();
        }
        let ef = 1;
        function ep() {
          return "i" + ef++;
        }
        let eb = 1;
        function eE(e, t) {
          for (let n in e) {
            let i = e[n];
            if (i && i.ref === t) return i.id;
          }
          return "e" + eb++;
        }
        function eg({ events: e, actionLists: t, site: n } = {}) {
          let i = (0, o.default)(
              e,
              (e, t) => {
                let { eventTypeId: n } = t;
                return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
              },
              {}
            ),
            a = n && n.mediaQueries,
            r = [];
          return (
            a
              ? (r = a.map((e) => e.key))
              : ((a = []),
                console.warn("IX2 missing mediaQueries in site data")),
            {
              ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: i,
                mediaQueries: a,
                mediaQueryKeys: r,
              },
            }
          );
        }
        let ey = (e, t) => e === t;
        function em({ store: e, select: t, onChange: n, comparator: i = ey }) {
          let { getState: a, subscribe: r } = e,
            o = r(function () {
              let r = t(a());
              if (null == r) return void o();
              i(r, c) || n((c = r), e);
            }),
            c = t(a());
          return o;
        }
        function eT(e) {
          let t = typeof e;
          if ("string" === t) return { id: e };
          if (null != e && "object" === t) {
            let {
              id: t,
              objectId: n,
              selector: i,
              selectorGuids: a,
              appliesTo: r,
              useEventTarget: o,
            } = e;
            return {
              id: t,
              objectId: n,
              selector: i,
              selectorGuids: a,
              appliesTo: r,
              useEventTarget: o,
            };
          }
          return {};
        }
        function eI({
          config: e,
          event: t,
          eventTarget: n,
          elementRoot: i,
          elementApi: a,
        }) {
          let r, o, c;
          if (!a) throw Error("IX2 missing elementApi");
          let { targets: u } = e;
          if (Array.isArray(u) && u.length > 0)
            return u.reduce(
              (e, r) =>
                e.concat(
                  eI({
                    config: { target: r },
                    event: t,
                    eventTarget: n,
                    elementRoot: i,
                    elementApi: a,
                  })
                ),
              []
            );
          let {
              getValidDocument: l,
              getQuerySelector: s,
              queryDocument: f,
              getChildElements: p,
              getSiblingElements: E,
              matchSelector: g,
              elementContains: y,
              isSiblingNode: m,
            } = a,
            { target: T } = e;
          if (!T) return [];
          let {
            id: I,
            objectId: h,
            selector: O,
            selectorGuids: _,
            appliesTo: v,
            useEventTarget: A,
          } = eT(T);
          if (h) return [el.has(h) ? el.get(h) : el.set(h, {}).get(h)];
          if (v === d.EventAppliesTo.PAGE) {
            let e = l(I);
            return e ? [e] : [];
          }
          let R = (t?.action?.config?.affectedElements ?? {})[I || O] || {},
            N = !!(R.id || R.selector),
            S = t && s(eT(t.target));
          if (
            (N
              ? ((r = R.limitAffectedElements), (o = S), (c = s(R)))
              : (o = c = s({ id: I, selector: O, selectorGuids: _ })),
            t && A)
          ) {
            let e = n && (c || !0 === A) ? [n] : f(S);
            if (c) {
              if (A === k) return f(c).filter((t) => e.some((e) => y(t, e)));
              if (A === F) return f(c).filter((t) => e.some((e) => y(e, t)));
              if (A === x) return f(c).filter((t) => e.some((e) => m(e, t)));
            }
            return e;
          }
          return null == o || null == c
            ? []
            : b.IS_BROWSER_ENV && i
            ? f(c).filter((e) => i.contains(e))
            : r === F
            ? f(o, c)
            : r === V
            ? p(f(o)).filter(g(c))
            : r === x
            ? E(f(o)).filter(g(c))
            : f(c);
        }
        function eh({ element: e, actionItem: t }) {
          if (!b.IS_BROWSER_ENV) return {};
          let { actionTypeId: n } = t;
          switch (n) {
            case et:
            case en:
            case ei:
            case ea:
            case er:
              return window.getComputedStyle(e);
            default:
              return {};
          }
        }
        let eO = /px/,
          e_ = (e, t) =>
            t.reduce(
              (e, t) => (null == e[t.type] && (e[t.type] = eF[t.type]), e),
              e || {}
            ),
          ev = (e, t) =>
            t.reduce(
              (e, t) => (
                null == e[t.type] &&
                  (e[t.type] = eV[t.type] || t.defaultValue || 0),
                e
              ),
              e || {}
            );
        function eA(e, t = {}, n = {}, i, a) {
          let { getStyle: o } = a,
            { actionTypeId: c } = i;
          if ((0, p.isPluginType)(c)) return (0, p.getPluginOrigin)(c)(t[c], i);
          switch (i.actionTypeId) {
            case $:
            case Q:
            case q:
            case K:
              return t[i.actionTypeId] || eP[i.actionTypeId];
            case J:
              return e_(t[i.actionTypeId], i.config.filters);
            case ee:
              return ev(t[i.actionTypeId], i.config.fontVariations);
            case Z:
              return { value: (0, r.default)(parseFloat(o(e, R)), 1) };
            case et: {
              let t,
                a = o(e, L),
                c = o(e, C);
              return {
                widthValue:
                  i.config.widthUnit === D
                    ? eO.test(a)
                      ? parseFloat(a)
                      : parseFloat(n.width)
                    : (0, r.default)(parseFloat(a), parseFloat(n.width)),
                heightValue:
                  i.config.heightUnit === D
                    ? eO.test(c)
                      ? parseFloat(c)
                      : parseFloat(n.height)
                    : (0, r.default)(parseFloat(c), parseFloat(n.height)),
              };
            }
            case en:
            case ei:
            case ea:
              return (function ({
                element: e,
                actionTypeId: t,
                computedStyle: n,
                getStyle: i,
              }) {
                let a = eu[t],
                  o = i(e, a),
                  c = (function (e, t) {
                    let n = e.exec(t);
                    return n ? n[1] : "";
                  })(eU, eG.test(o) ? o : n[a]).split(B);
                return {
                  rValue: (0, r.default)(parseInt(c[0], 10), 255),
                  gValue: (0, r.default)(parseInt(c[1], 10), 255),
                  bValue: (0, r.default)(parseInt(c[2], 10), 255),
                  aValue: (0, r.default)(parseFloat(c[3]), 1),
                };
              })({
                element: e,
                actionTypeId: i.actionTypeId,
                computedStyle: n,
                getStyle: o,
              });
            case er:
              return { value: (0, r.default)(o(e, G), n.display) };
            case eo:
              return t[i.actionTypeId] || { value: 0 };
            default:
              return;
          }
        }
        let eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
          eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
          eS = (e, t, n) => {
            if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
            switch (e) {
              case J: {
                let e = (0, c.default)(n.filters, ({ type: e }) => e === t);
                return e ? e.value : 0;
              }
              case ee: {
                let e = (0, c.default)(
                  n.fontVariations,
                  ({ type: e }) => e === t
                );
                return e ? e.value : 0;
              }
              default:
                return n[t];
            }
          };
        function eL({ element: e, actionItem: t, elementApi: n }) {
          if ((0, p.isPluginType)(t.actionTypeId))
            return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
          switch (t.actionTypeId) {
            case $:
            case Q:
            case q:
            case K: {
              let { xValue: e, yValue: n, zValue: i } = t.config;
              return { xValue: e, yValue: n, zValue: i };
            }
            case et: {
              let { getStyle: i, setStyle: a, getProperty: r } = n,
                { widthUnit: o, heightUnit: c } = t.config,
                { widthValue: u, heightValue: d } = t.config;
              if (!b.IS_BROWSER_ENV) return { widthValue: u, heightValue: d };
              if (o === D) {
                let t = i(e, L);
                a(e, L, ""), (u = r(e, "offsetWidth")), a(e, L, t);
              }
              if (c === D) {
                let t = i(e, C);
                a(e, C, ""), (d = r(e, "offsetHeight")), a(e, C, t);
              }
              return { widthValue: u, heightValue: d };
            }
            case en:
            case ei:
            case ea: {
              let {
                rValue: i,
                gValue: a,
                bValue: r,
                aValue: o,
                globalSwatchId: c,
              } = t.config;
              if (c && c.startsWith("--")) {
                let { getStyle: t } = n,
                  i = t(e, c),
                  a = (0, f.normalizeColor)(i);
                return {
                  rValue: a.red,
                  gValue: a.green,
                  bValue: a.blue,
                  aValue: a.alpha,
                };
              }
              return { rValue: i, gValue: a, bValue: r, aValue: o };
            }
            case J:
              return t.config.filters.reduce(eR, {});
            case ee:
              return t.config.fontVariations.reduce(eN, {});
            default: {
              let { value: e } = t.config;
              return { value: e };
            }
          }
        }
        function eC(e) {
          return /^TRANSFORM_/.test(e)
            ? W
            : /^STYLE_/.test(e)
            ? Y
            : /^GENERAL_/.test(e)
            ? z
            : /^PLUGIN_/.test(e)
            ? H
            : void 0;
        }
        function ew(e, t) {
          return e === Y ? t.replace("STYLE_", "").toLowerCase() : null;
        }
        function eM(e, t, n, i, a, r, c, u, d) {
          switch (u) {
            case W:
              var l = e,
                s = t,
                f = n,
                E = a,
                g = c;
              let y = ek
                  .map((e) => {
                    let t = eP[e],
                      {
                        xValue: n = t.xValue,
                        yValue: i = t.yValue,
                        zValue: a = t.zValue,
                        xUnit: r = "",
                        yUnit: o = "",
                        zUnit: c = "",
                      } = s[e] || {};
                    switch (e) {
                      case $:
                        return `${m}(${n}${r}, ${i}${o}, ${a}${c})`;
                      case Q:
                        return `${T}(${n}${r}, ${i}${o}, ${a}${c})`;
                      case q:
                        return `${I}(${n}${r}) ${h}(${i}${o}) ${O}(${a}${c})`;
                      case K:
                        return `${_}(${n}${r}, ${i}${o})`;
                      default:
                        return "";
                    }
                  })
                  .join(" "),
                { setStyle: R } = g;
              eD(l, b.TRANSFORM_PREFIXED, g),
                R(l, b.TRANSFORM_PREFIXED, y),
                (function (
                  { actionTypeId: e },
                  { xValue: t, yValue: n, zValue: i }
                ) {
                  return (
                    (e === $ && void 0 !== i) ||
                    (e === Q && void 0 !== i) ||
                    (e === q && (void 0 !== t || void 0 !== n))
                  );
                })(E, f) && R(l, b.TRANSFORM_STYLE_PREFIXED, v);
              return;
            case Y:
              return (function (e, t, n, i, a, r) {
                let { setStyle: c } = r;
                switch (i.actionTypeId) {
                  case et: {
                    let { widthUnit: t = "", heightUnit: a = "" } = i.config,
                      { widthValue: o, heightValue: u } = n;
                    void 0 !== o &&
                      (t === D && (t = "px"), eD(e, L, r), c(e, L, o + t)),
                      void 0 !== u &&
                        (a === D && (a = "px"), eD(e, C, r), c(e, C, u + a));
                    break;
                  }
                  case J:
                    var u = i.config;
                    let d = (0, o.default)(
                        n,
                        (e, t, n) => `${e} ${n}(${t}${ex(n, u)})`,
                        ""
                      ),
                      { setStyle: l } = r;
                    eD(e, N, r), l(e, N, d);
                    break;
                  case ee:
                    i.config;
                    let s = (0, o.default)(
                        n,
                        (e, t, n) => (e.push(`"${n}" ${t}`), e),
                        []
                      ).join(", "),
                      { setStyle: f } = r;
                    eD(e, S, r), f(e, S, s);
                    break;
                  case en:
                  case ei:
                  case ea: {
                    let t = eu[i.actionTypeId],
                      a = Math.round(n.rValue),
                      o = Math.round(n.gValue),
                      u = Math.round(n.bValue),
                      d = n.aValue;
                    eD(e, t, r),
                      c(
                        e,
                        t,
                        d >= 1
                          ? `rgb(${a},${o},${u})`
                          : `rgba(${a},${o},${u},${d})`
                      );
                    break;
                  }
                  default: {
                    let { unit: t = "" } = i.config;
                    eD(e, a, r), c(e, a, n.value + t);
                  }
                }
              })(e, 0, n, a, r, c);
            case z:
              var w = e,
                M = a,
                P = c;
              let { setStyle: F } = P;
              if (M.actionTypeId === er) {
                let { value: e } = M.config;
                F(w, G, e === A && b.IS_BROWSER_ENV ? b.FLEX_PREFIXED : e);
              }
              return;
            case H: {
              let { actionTypeId: e } = a;
              if ((0, p.isPluginType)(e))
                return (0, p.renderPlugin)(e)(d, t, a);
            }
          }
        }
        let eP = {
            [$]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
            [Q]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
            [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
            [K]: Object.freeze({ xValue: 0, yValue: 0 }),
          },
          eF = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100,
          }),
          eV = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
          ex = (e, t) => {
            let n = (0, c.default)(t.filters, ({ type: t }) => t === e);
            if (n && n.unit) return n.unit;
            switch (e) {
              case "blur":
                return "px";
              case "hue-rotate":
                return "deg";
              default:
                return "%";
            }
          },
          ek = Object.keys(eP),
          eG = /^rgb/,
          eU = RegExp("rgba?\\(([^)]+)\\)");
        function eD(e, t, n) {
          if (!b.IS_BROWSER_ENV) return;
          let i = ed[t];
          if (!i) return;
          let { getStyle: a, setStyle: r } = n,
            o = a(e, U);
          if (!o) return void r(e, U, i);
          let c = o.split(B).map(ec);
          -1 === c.indexOf(i) && r(e, U, c.concat(i).join(B));
        }
        function eB(e, t, n) {
          if (!b.IS_BROWSER_ENV) return;
          let i = ed[t];
          if (!i) return;
          let { getStyle: a, setStyle: r } = n,
            o = a(e, U);
          o &&
            -1 !== o.indexOf(i) &&
            r(
              e,
              U,
              o
                .split(B)
                .map(ec)
                .filter((e) => e !== i)
                .join(B)
            );
        }
        function eX({ store: e, elementApi: t }) {
          let { ixData: n } = e.getState(),
            { events: i = {}, actionLists: a = {} } = n;
          Object.keys(i).forEach((e) => {
            let n = i[e],
              { config: r } = n.action,
              { actionListId: o } = r,
              c = a[o];
            c && ej({ actionList: c, event: n, elementApi: t });
          }),
            Object.keys(a).forEach((e) => {
              ej({ actionList: a[e], elementApi: t });
            });
        }
        function ej({ actionList: e = {}, event: t, elementApi: n }) {
          let { actionItemGroups: i, continuousParameterGroups: a } = e;
          i &&
            i.forEach((e) => {
              eW({ actionGroup: e, event: t, elementApi: n });
            }),
            a &&
              a.forEach((e) => {
                let { continuousActionGroups: i } = e;
                i.forEach((e) => {
                  eW({ actionGroup: e, event: t, elementApi: n });
                });
              });
        }
        function eW({ actionGroup: e, event: t, elementApi: n }) {
          let { actionItems: i } = e;
          i.forEach((e) => {
            let i,
              { actionTypeId: a, config: r } = e;
            (i = (0, p.isPluginType)(a)
              ? (t) => (0, p.clearPlugin)(a)(t, e)
              : eY({ effect: eH, actionTypeId: a, elementApi: n })),
              eI({ config: r, event: t, elementApi: n }).forEach(i);
          });
        }
        function ez(e, t, n) {
          let { setStyle: i, getStyle: a } = n,
            { actionTypeId: r } = t;
          if (r === et) {
            let { config: n } = t;
            n.widthUnit === D && i(e, L, ""), n.heightUnit === D && i(e, C, "");
          }
          a(e, U) && eY({ effect: eB, actionTypeId: r, elementApi: n })(e);
        }
        let eY =
          ({ effect: e, actionTypeId: t, elementApi: n }) =>
          (i) => {
            switch (t) {
              case $:
              case Q:
              case q:
              case K:
                e(i, b.TRANSFORM_PREFIXED, n);
                break;
              case J:
                e(i, N, n);
                break;
              case ee:
                e(i, S, n);
                break;
              case Z:
                e(i, R, n);
                break;
              case et:
                e(i, L, n), e(i, C, n);
                break;
              case en:
              case ei:
              case ea:
                e(i, eu[t], n);
                break;
              case er:
                e(i, G, n);
            }
          };
        function eH(e, t, n) {
          let { setStyle: i } = n;
          eB(e, t, n),
            i(e, t, ""),
            t === b.TRANSFORM_PREFIXED && i(e, b.TRANSFORM_STYLE_PREFIXED, "");
        }
        function e$(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e, i) => {
              let { config: a } = e,
                r = a.delay + a.duration;
              r >= t && ((t = r), (n = i));
            }),
            n
          );
        }
        function eQ(e, t) {
          let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
            { actionItem: a, verboseTimeElapsed: r = 0 } = t,
            o = 0,
            c = 0;
          return (
            n.forEach((e, t) => {
              if (i && 0 === t) return;
              let { actionItems: n } = e,
                u = n[e$(n)],
                { config: d, actionTypeId: l } = u;
              a.id === u.id && (c = o + r);
              let s = eC(l) === z ? 0 : d.duration;
              o += d.delay + s;
            }),
            o > 0 ? (0, s.optimizeFloat)(c / o) : 0
          );
        }
        function eq({ actionList: e, actionItemId: t, rawData: n }) {
          let { actionItemGroups: i, continuousParameterGroups: a } = e,
            r = [],
            o = (e) => (
              r.push((0, u.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
              e.id === t
            );
          return (
            i && i.some(({ actionItems: e }) => e.some(o)),
            a &&
              a.some((e) => {
                let { continuousActionGroups: t } = e;
                return t.some(({ actionItems: e }) => e.some(o));
              }),
            (0, u.setIn)(n, ["actionLists"], {
              [e.id]: { id: e.id, actionItemGroups: [{ actionItems: r }] },
            })
          );
        }
        function eK(e, { basedOn: t }) {
          return (
            (e === d.EventTypeConsts.SCROLLING_IN_VIEW &&
              (t === d.EventBasedOn.ELEMENT || null == t)) ||
            (e === d.EventTypeConsts.MOUSE_MOVE && t === d.EventBasedOn.ELEMENT)
          );
        }
        function eZ(e, t) {
          return e + X + t;
        }
        function eJ(e, t) {
          return null == t || -1 !== e.indexOf(t);
        }
        function e0(e, t) {
          return (0, l.default)(e && e.sort(), t && t.sort());
        }
        function e2(e) {
          if ("string" == typeof e) return e;
          if (e.pluginElement && e.objectId)
            return e.pluginElement + j + e.objectId;
          if (e.objectId) return e.objectId;
          let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
          return t + j + n + j + i;
        }
      },
      7164: function (e, t) {
        "use strict";
        function n(e, t) {
          return e === t
            ? 0 !== e || 0 !== t || 1 / e == 1 / t
            : e != e && t != t;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let i = function (e, t) {
          if (n(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          let i = Object.keys(e),
            a = Object.keys(t);
          if (i.length !== a.length) return !1;
          for (let a = 0; a < i.length; a++)
            if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
          return !0;
        };
      },
      5861: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = {
          createElementState: function () {
            return _;
          },
          ixElements: function () {
            return O;
          },
          mergeActionState: function () {
            return v;
          },
        };
        for (var a in i)
          Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
        let r = n(1185),
          o = n(7087),
          {
            HTML_ELEMENT: c,
            PLAIN_OBJECT: u,
            ABSTRACT_NODE: d,
            CONFIG_X_VALUE: l,
            CONFIG_Y_VALUE: s,
            CONFIG_Z_VALUE: f,
            CONFIG_VALUE: p,
            CONFIG_X_UNIT: b,
            CONFIG_Y_UNIT: E,
            CONFIG_Z_UNIT: g,
            CONFIG_UNIT: y,
          } = o.IX2EngineConstants,
          {
            IX2_SESSION_STOPPED: m,
            IX2_INSTANCE_ADDED: T,
            IX2_ELEMENT_STATE_CHANGED: I,
          } = o.IX2EngineActionTypes,
          h = {},
          O = (e = h, t = {}) => {
            switch (t.type) {
              case m:
                return h;
              case T: {
                let {
                    elementId: n,
                    element: i,
                    origin: a,
                    actionItem: o,
                    refType: c,
                  } = t.payload,
                  { actionTypeId: u } = o,
                  d = e;
                return (
                  (0, r.getIn)(d, [n, i]) !== i && (d = _(d, i, c, n, o)),
                  v(d, n, u, a, o)
                );
              }
              case I: {
                let {
                  elementId: n,
                  actionTypeId: i,
                  current: a,
                  actionItem: r,
                } = t.payload;
                return v(e, n, i, a, r);
              }
              default:
                return e;
            }
          };
        function _(e, t, n, i, a) {
          let o =
            n === u ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
          return (0, r.mergeIn)(e, [i], {
            id: i,
            ref: t,
            refId: o,
            refType: n,
          });
        }
        function v(e, t, n, i, a) {
          let o = (function (e) {
            let { config: t } = e;
            return A.reduce((e, n) => {
              let i = n[0],
                a = n[1],
                r = t[i],
                o = t[a];
              return null != r && null != o && (e[a] = o), e;
            }, {});
          })(a);
          return (0, r.mergeIn)(e, [t, "refState", n], i, o);
        }
        let A = [
          [l, b],
          [s, E],
          [f, g],
          [p, y],
        ];
      },
      5062: function () {
        Webflow.require("ix2").init({
          events: {
            "e-47": {
              id: "e-47",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-17",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-17-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 100,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-17-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 100,
                  restingState: 50,
                },
              ],
              createdOn: 0x161742adc33,
            },
            "e-48": {
              id: "e-48",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-18",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|64b3cb4d-3cd6-d560-c736-12a5851445f8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|64b3cb4d-3cd6-d560-c736-12a5851445f8",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-18-p",
                  smoothing: 75,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x16178f875f1,
            },
            "e-50": {
              id: "e-50",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-49",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x161790bcc84,
            },
            "e-51": {
              id: "e-51",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-20",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|08584a36-58d3-66f1-4cb5-adbf018e1c99",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|08584a36-58d3-66f1-4cb5-adbf018e1c99",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-20-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x161791a0123,
            },
            "e-58": {
              id: "e-58",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-21",
                  affectedElements: {
                    "68eb847cbc556e76722b621a|76925845-f43b-5246-c4cb-39f4a26bd8e2":
                      {
                        id: "68eb847cbc556e76722b621a|76925845-f43b-5246-c4cb-39f4a26bd8e2",
                      },
                  },
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "68eb847cbc556e76722b621a|76925845-f43b-5246-c4cb-39f4a26bd8e2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|76925845-f43b-5246-c4cb-39f4a26bd8e2",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-21-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x161791e8490,
            },
            "e-59": {
              id: "e-59",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-22",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|7f79de50-428c-d740-a084-c030b530013d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|7f79de50-428c-d740-a084-c030b530013d",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-22-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x16179200455,
            },
            "e-60": {
              id: "e-60",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-23",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|206d532b-42ea-0990-a7a1-b27cb5cbef49",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|206d532b-42ea-0990-a7a1-b27cb5cbef49",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-23-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x16179229a13,
            },
            "e-61": {
              id: "e-61",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-24",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|41596470-0d82-9243-79b9-0e56a1d63627",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|41596470-0d82-9243-79b9-0e56a1d63627",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-24-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x161792371c3,
            },
            "e-63": {
              id: "e-63",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-21",
                  affectedElements: {
                    "68eb847cbc556e76722b621a|76925845-f43b-5246-c4cb-39f4a26bd8e2":
                      {
                        id: "68eb847cbc556e76722b621a|79f4f099-0bbd-c669-7c34-bbbae51122ce",
                      },
                  },
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|79f4f099-0bbd-c669-7c34-bbbae51122ce",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|79f4f099-0bbd-c669-7c34-bbbae51122ce",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-21-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x1617936a5d2,
            },
            "e-65": {
              id: "e-65",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-25",
                  affectedElements: {
                    "68eb847cbc556e76722b621a|cbb3d1df-135d-38b9-2639-ef0a5a268cab":
                      {
                        selector: ".image-1",
                        selectorGuids: ["04cf787c-6c54-de3a-b9ca-ecaa7cdf5eed"],
                        limitAffectedElements: null,
                      },
                    "68eb847cbc556e76722b621a|dd4402b4-90dc-d8b7-2687-580cf9ede4b9":
                      {
                        selector: ".image-22",
                        selectorGuids: ["0e8fbcfd-3d8a-00d8-fe8c-454de67ec30c"],
                        limitAffectedElements: null,
                      },
                    "68eb847cbc556e76722b621a|896c3f88-47da-ae3c-121a-013228f5d162":
                      {
                        selector: ".margined-image.v2",
                        selectorGuids: [
                          "aab4cf6a-b929-196f-9884-f9dd5175e372",
                          "aeb030a6-cf06-c8fc-0d36-8b92a6d3aa3e",
                        ],
                        limitAffectedElements: null,
                      },
                  },
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|87ab9c6f-ac50-e7f7-f8d0-3656f8f59f88",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|87ab9c6f-ac50-e7f7-f8d0-3656f8f59f88",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-25-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x1617939a5a5,
            },
            "e-67": {
              id: "e-67",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-27",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|4c35d758-3cca-8248-7ab7-b050cb267b4c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|4c35d758-3cca-8248-7ab7-b050cb267b4c",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-27-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x161793e7400,
            },
            "e-68": {
              id: "e-68",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-27",
                  affectedElements: {
                    "68eb847cbc556e76722b621a|53d3a6af-d38d-4623-ee39-ecf0f977bb2e":
                      {
                        selector: ".activity-pill._1",
                        selectorGuids: [
                          "ec2e1218-16a0-96c3-cba9-0855dfff1b54",
                          "c4f422ff-91b3-b5a7-222f-452b91e9ccd1",
                        ],
                        limitAffectedElements: null,
                      },
                    "68eb847cbc556e76722b621a|d8489c88-da08-89e6-0af6-13e9a17d2892":
                      {
                        selector: ".activity-pill._2",
                        selectorGuids: [
                          "ec2e1218-16a0-96c3-cba9-0855dfff1b54",
                          "e518713c-bb3d-3a22-da8b-dd509f11864e",
                        ],
                        limitAffectedElements: null,
                      },
                    "68eb847cbc556e76722b621a|4924e324-d86c-efcb-e065-94ceb8bc525c":
                      {
                        selector: ".activity-pill._3",
                        selectorGuids: [
                          "ec2e1218-16a0-96c3-cba9-0855dfff1b54",
                          "a225bf12-f898-dd40-e542-b1eb0e16d7e8",
                        ],
                        limitAffectedElements: null,
                      },
                    "68eb847cbc556e76722b621a|025ba718-3b59-d7c6-7072-7f38bbebea1d":
                      {
                        selector: ".activity-pill._4",
                        selectorGuids: [
                          "ec2e1218-16a0-96c3-cba9-0855dfff1b54",
                          "18daed7f-a55b-13c8-d12a-34588c3da6bb",
                        ],
                        limitAffectedElements: null,
                      },
                  },
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|47f30c3d-137d-5198-a108-a98f662dcdcb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|47f30c3d-137d-5198-a108-a98f662dcdcb",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-27-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x1617940fb3c,
            },
            "e-69": {
              id: "e-69",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-25",
                  affectedElements: {
                    "68eb847cbc556e76722b621a|cbb3d1df-135d-38b9-2639-ef0a5a268cab":
                      {
                        selector: ".image-1",
                        selectorGuids: ["04cf787c-6c54-de3a-b9ca-ecaa7cdf5eed"],
                        limitAffectedElements: null,
                      },
                    "68eb847cbc556e76722b621a|dd4402b4-90dc-d8b7-2687-580cf9ede4b9":
                      {
                        selector: ".image-22",
                        selectorGuids: ["0e8fbcfd-3d8a-00d8-fe8c-454de67ec30c"],
                        limitAffectedElements: null,
                      },
                    "68eb847cbc556e76722b621a|896c3f88-47da-ae3c-121a-013228f5d162":
                      {
                        selector: ".margined-image.v2",
                        selectorGuids: [
                          "aab4cf6a-b929-196f-9884-f9dd5175e372",
                          "aeb030a6-cf06-c8fc-0d36-8b92a6d3aa3e",
                        ],
                        limitAffectedElements: null,
                      },
                  },
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|b4b67e88-d0a1-9d04-16ee-ac5f45e8c912",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|b4b67e88-d0a1-9d04-16ee-ac5f45e8c912",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-25-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x1617944e810,
            },
            "e-70": {
              id: "e-70",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-25",
                  affectedElements: {
                    "68eb847cbc556e76722b621a|cbb3d1df-135d-38b9-2639-ef0a5a268cab":
                      {
                        selector: ".image-1",
                        selectorGuids: ["04cf787c-6c54-de3a-b9ca-ecaa7cdf5eed"],
                        limitAffectedElements: null,
                      },
                    "68eb847cbc556e76722b621a|dd4402b4-90dc-d8b7-2687-580cf9ede4b9":
                      {
                        selector: ".image-22",
                        selectorGuids: ["0e8fbcfd-3d8a-00d8-fe8c-454de67ec30c"],
                        limitAffectedElements: null,
                      },
                    "68eb847cbc556e76722b621a|896c3f88-47da-ae3c-121a-013228f5d162":
                      {
                        selector: ".margined-image.v2",
                        selectorGuids: [
                          "aab4cf6a-b929-196f-9884-f9dd5175e372",
                          "aeb030a6-cf06-c8fc-0d36-8b92a6d3aa3e",
                        ],
                        limitAffectedElements: null,
                      },
                  },
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|f44a0a96-f2e1-7630-1642-9e7f4e423827",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|f44a0a96-f2e1-7630-1642-9e7f4e423827",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-25-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x1617946ba8d,
            },
            "e-71": {
              id: "e-71",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "RUBBER_BAND_EFFECT",
                instant: !1,
                config: { actionListId: "rubberBand", autoStopEventId: "e-72" },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|38b2819c-cddb-0776-51d9-a402ecd15096",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|38b2819c-cddb-0776-51d9-a402ecd15096",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x16179484172,
            },
            "e-73": {
              id: "e-73",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "RUBBER_BAND_EFFECT",
                instant: !1,
                config: { actionListId: "rubberBand", autoStopEventId: "e-74" },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|d488a60a-25b9-93e7-91d3-e17a82bc7622",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|d488a60a-25b9-93e7-91d3-e17a82bc7622",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 100,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1617948bd60,
            },
            "e-75": {
              id: "e-75",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GROW_EFFECT",
                instant: !1,
                config: { actionListId: "growIn", autoStopEventId: "e-76" },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|2ab87ce9-6bd9-3c62-e032-78bed97c1b7c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|2ab87ce9-6bd9-3c62-e032-78bed97c1b7c",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: null,
                effectIn: !0,
              },
              createdOn: 0x161794918d3,
            },
            "e-77": {
              id: "e-77",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GROW_BIG_EFFECT",
                instant: !1,
                config: { actionListId: "growBigIn", autoStopEventId: "e-78" },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|db9887b3-eb88-4d2e-cc44-6c0f44aa3c76",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|db9887b3-eb88-4d2e-cc44-6c0f44aa3c76",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 150,
                direction: null,
                effectIn: !0,
              },
              createdOn: 0x16179494a9f,
            },
            "e-79": {
              id: "e-79",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "FLY_EFFECT",
                instant: !1,
                config: { actionListId: "flyInRight", autoStopEventId: "e-80" },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|2808e55f-3474-2aca-c091-cd6ee413a3b4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|2808e55f-3474-2aca-c091-cd6ee413a3b4",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "RIGHT",
                effectIn: !0,
              },
              createdOn: 0x16179497787,
            },
            "e-81": {
              id: "e-81",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "FLY_EFFECT",
                instant: !1,
                config: { actionListId: "flyInRight", autoStopEventId: "e-82" },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|9f662b4a-97fc-2ab6-f4ea-0ef50074286d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|9f662b4a-97fc-2ab6-f4ea-0ef50074286d",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 250,
                direction: "RIGHT",
                effectIn: !0,
              },
              createdOn: 0x1617949afff,
            },
            "e-84": {
              id: "e-84",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-21",
                  affectedElements: {
                    "68eb847cbc556e76722b621a|76925845-f43b-5246-c4cb-39f4a26bd8e2":
                      {
                        id: "68eb847cbc556e76722b621a|f3485706-4490-abf2-a49f-65488006aa28",
                      },
                  },
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|f3485706-4490-abf2-a49f-65488006aa28",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|f3485706-4490-abf2-a49f-65488006aa28",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-21-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x1617958d4c7,
            },
            "e-85": {
              id: "e-85",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-21",
                  affectedElements: {
                    "68eb847cbc556e76722b621a|76925845-f43b-5246-c4cb-39f4a26bd8e2":
                      {
                        id: "68eb847cbc556e76722b621a|71f551f8-0a7e-b819-fb7c-2ed26f16b1aa",
                      },
                  },
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|71f551f8-0a7e-b819-fb7c-2ed26f16b1aa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|71f551f8-0a7e-b819-fb7c-2ed26f16b1aa",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-21-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x1617959960f,
            },
            "e-87": {
              id: "e-87",
              animationType: "custom",
              eventTypeId: "PAGE_FINISH",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-28",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-86",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x16179623322,
            },
            "e-90": {
              id: "e-90",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-30",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-91",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "1cfac524-b5b7-2a34-ec50-8d3995e92535",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "1cfac524-b5b7-2a34-ec50-8d3995e92535",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1617df88f15,
            },
            "e-91": {
              id: "e-91",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-31",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-90",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "1cfac524-b5b7-2a34-ec50-8d3995e92535",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "1cfac524-b5b7-2a34-ec50-8d3995e92535",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1617df88f18,
            },
            "e-92": {
              id: "e-92",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-32",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-93",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|78ec5619-1445-20cd-dd74-140c363e485f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|78ec5619-1445-20cd-dd74-140c363e485f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x161831cce82,
            },
            "e-100": {
              id: "e-100",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-34",
                  affectedElements: {
                    "68eb847cbc556e76722b621a|869608ad-ee5f-500c-cec4-367ff69a9844":
                      {
                        selector: ".modal__container",
                        selectorGuids: ["3a69b61e-6b57-3a3f-a422-2f4bc2517dd4"],
                        limitAffectedElements: null,
                      },
                    "68eb847cbc556e76722b621a|c8e667b6-77d1-6a93-b68a-20fe96e45f75":
                      {
                        selector: ".modal__parent",
                        selectorGuids: ["45a89489-d8f9-ea2c-77df-f8bf13597ac6"],
                        limitAffectedElements: null,
                      },
                  },
                  playInReverse: !1,
                  autoStopEventId: "e-101",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|a9579a24-e01d-e9b7-a559-ca1d623e55ae",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|a9579a24-e01d-e9b7-a559-ca1d623e55ae",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x161873f47c2,
            },
            "e-102": {
              id: "e-102",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-34",
                  affectedElements: {
                    "68eb847cbc556e76722b621a|869608ad-ee5f-500c-cec4-367ff69a9844":
                      {
                        selector: ".modal__container",
                        selectorGuids: ["3a69b61e-6b57-3a3f-a422-2f4bc2517dd4"],
                        limitAffectedElements: null,
                      },
                    "68eb847cbc556e76722b621a|c8e667b6-77d1-6a93-b68a-20fe96e45f75":
                      {
                        selector: ".modal__parent",
                        selectorGuids: ["45a89489-d8f9-ea2c-77df-f8bf13597ac6"],
                        limitAffectedElements: null,
                      },
                  },
                  playInReverse: !1,
                  autoStopEventId: "e-103",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|550f0178-77fa-ec0b-0a95-c7f1857b9a34",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|550f0178-77fa-ec0b-0a95-c7f1857b9a34",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x161873fc476,
            },
            "e-104": {
              id: "e-104",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-34",
                  affectedElements: {
                    "68eb847cbc556e76722b621a|869608ad-ee5f-500c-cec4-367ff69a9844":
                      {
                        selector: ".modal__container",
                        selectorGuids: ["3a69b61e-6b57-3a3f-a422-2f4bc2517dd4"],
                        limitAffectedElements: null,
                      },
                    "68eb847cbc556e76722b621a|c8e667b6-77d1-6a93-b68a-20fe96e45f75":
                      {
                        selector: ".modal__parent",
                        selectorGuids: ["45a89489-d8f9-ea2c-77df-f8bf13597ac6"],
                        limitAffectedElements: null,
                      },
                  },
                  playInReverse: !1,
                  autoStopEventId: "e-105",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|5f45a503-c00f-aca1-4373-cc1f2bd11716",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|5f45a503-c00f-aca1-4373-cc1f2bd11716",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x16187407a6a,
            },
            "e-106": {
              id: "e-106",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-34",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-107",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|143ee32a-0a17-6ae0-9817-a611e7773c96",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|143ee32a-0a17-6ae0-9817-a611e7773c96",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x16187420ddb,
            },
            "e-108": {
              id: "e-108",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-34",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-109",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|2da3fe3a-187b-878b-214e-0f224b2fed06",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|2da3fe3a-187b-878b-214e-0f224b2fed06",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x16187427077,
            },
            "e-110": {
              id: "e-110",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-34",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-111",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|511f897b-3df3-d6be-7d22-84cc8153aea9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|511f897b-3df3-d6be-7d22-84cc8153aea9",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1618742a222,
            },
            "e-112": {
              id: "e-112",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-34",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-113",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|3d060102-1b60-a243-1f36-74d35705c0b8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|3d060102-1b60-a243-1f36-74d35705c0b8",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1618742c11a,
            },
            "e-114": {
              id: "e-114",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-34",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-115",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|95b9e003-502e-25f4-fa88-6a14faf3ccc1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|95b9e003-502e-25f4-fa88-6a14faf3ccc1",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x16187430780,
            },
            "e-116": {
              id: "e-116",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-34",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-117",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|d6bc1837-162d-7952-8050-1529c7e5c579",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|d6bc1837-162d-7952-8050-1529c7e5c579",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x161874324c7,
            },
            "e-118": {
              id: "e-118",
              animationType: "custom",
              eventTypeId: "NAVBAR_OPEN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-36",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-119",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|b44ef363-88d7-8d9d-eee5-8f5959dbbbe4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|b44ef363-88d7-8d9d-eee5-8f5959dbbbe4",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x16188c7f21f,
            },
            "e-119": {
              id: "e-119",
              animationType: "custom",
              eventTypeId: "NAVBAR_CLOSE",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-37",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-118",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68eb847cbc556e76722b621a|b44ef363-88d7-8d9d-eee5-8f5959dbbbe4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68eb847cbc556e76722b621a|b44ef363-88d7-8d9d-eee5-8f5959dbbbe4",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x16188c7f221,
            },
          },
          actionLists: {
            "a-17": {
              id: "a-17",
              title: "Move space man",
              continuousParameterGroups: [
                {
                  id: "a-17-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-17-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|dd698758-23ef-23cd-d8b2-5c09b19bf0f1",
                            },
                            xValue: 15,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-17-n-5",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|dd698758-23ef-23cd-d8b2-5c09b19bf0f1",
                            },
                            zValue: 3,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-17-n-7",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|1639da1c-7f06-780e-f2fe-99051ce16dd6",
                            },
                            zValue: -3,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-17-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|dd698758-23ef-23cd-d8b2-5c09b19bf0f1",
                            },
                            xValue: -15,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-17-n-6",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|dd698758-23ef-23cd-d8b2-5c09b19bf0f1",
                            },
                            zValue: -3,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-17-n-8",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|1639da1c-7f06-780e-f2fe-99051ce16dd6",
                            },
                            zValue: 3,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "a-17-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-17-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|dd698758-23ef-23cd-d8b2-5c09b19bf0f1",
                            },
                            yValue: 15,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-17-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|dd698758-23ef-23cd-d8b2-5c09b19bf0f1",
                            },
                            yValue: -15,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x161742aeb2c,
            },
            "a-18": {
              id: "a-18",
              title: "rotate",
              continuousParameterGroups: [
                {
                  id: "a-18-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-18-n",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|64b3cb4d-3cd6-d560-c736-12a5851445f8",
                            },
                            zValue: -50,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-18-n-3",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|b92ae949-4ae9-3b80-3e92-324bd9b4d3f3",
                            },
                            zValue: -15,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-18-n-5",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|22fbbb39-ad4b-ff3c-9cd8-a44bf48612d1",
                            },
                            zValue: 50,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-18-n-7",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|52ba0b3a-d4b7-37ce-4c37-4b62d30819e5",
                            },
                            zValue: 25,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-18-n-9",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|2a41a7d3-7821-9ca4-a23b-2d6a16a8cf1c",
                            },
                            zValue: -10,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-18-n-2",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|64b3cb4d-3cd6-d560-c736-12a5851445f8",
                            },
                            zValue: 360,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-18-n-4",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|b92ae949-4ae9-3b80-3e92-324bd9b4d3f3",
                            },
                            zValue: 15,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-18-n-6",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|22fbbb39-ad4b-ff3c-9cd8-a44bf48612d1",
                            },
                            zValue: 50,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-18-n-8",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|52ba0b3a-d4b7-37ce-4c37-4b62d30819e5",
                            },
                            zValue: -15,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-18-n-10",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|2a41a7d3-7821-9ca4-a23b-2d6a16a8cf1c",
                            },
                            zValue: -30,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x16178f88c9a,
            },
            "a-19": {
              id: "a-19",
              title: "Main Load Animation",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-19-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|e2e45d9c-69fc-e7de-4e80-cd02d98ddb7a",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|25f51c47-faec-e0a2-14dd-197bc8b59d1b",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-14",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          id: "68eb847cbc556e76722b621a|79930808-1437-4824-e6d7-6370aef2347d",
                        },
                        value: "block",
                      },
                    },
                    {
                      id: "a-19-n-15",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|993a679c-5a3a-c5c3-b34d-61ad76fb41ff",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-18",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|dd698758-23ef-23cd-d8b2-5c09b19bf0f1",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-19",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|1639da1c-7f06-780e-f2fe-99051ce16dd6",
                        },
                        xValue: -50,
                        xUnit: "VW",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-19-n-21",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|8b4be816-b198-bd67-58b9-70b283804b66",
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-19-n-24",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|6b70ac25-7e91-819a-c2d5-48010a57cfd3",
                        },
                        xValue: 0,
                        locked: !1,
                      },
                    },
                    {
                      id: "a-19-n-26",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|e0265ad7-07f6-fde8-5521-778f45ef26cb",
                        },
                        xValue: -50,
                        yValue: 35,
                        xUnit: "VW",
                        yUnit: "VH",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-19-n-28",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|010358e6-b0c1-0836-c3db-4efbedbc424f",
                        },
                        xValue: 0,
                        locked: !1,
                      },
                    },
                    {
                      id: "a-19-n-30",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|66857567-7af8-b66b-10cf-08c612033dd0",
                        },
                        xValue: 0,
                        locked: !1,
                      },
                    },
                    {
                      id: "a-19-n-32",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|d06a6424-4729-db83-71e6-ea941dfd1507",
                        },
                        xValue: 0,
                        locked: !1,
                      },
                    },
                    {
                      id: "a-19-n-36",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|1cb0b4e1-aa8d-f128-7dc9-0fe3bd319044",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-38",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|1449324b-0b12-2786-40f9-46dfa2fc5889",
                        },
                        xValue: 0,
                        locked: !1,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-19-n-46",
                      actionTypeId: "STYLE_BACKGROUND_COLOR",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|26eb68d4-c74a-22a0-1d6a-44ab49e02fd9",
                        },
                        globalSwatchId: "",
                        rValue: 4,
                        bValue: 14,
                        gValue: 8,
                        aValue: 0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-19-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1e3,
                        easing: "ease",
                        duration: 1500,
                        target: {
                          id: "68eb847cbc556e76722b621a|8b4be816-b198-bd67-58b9-70b283804b66",
                        },
                        xValue: 20,
                        xUnit: "VW",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-19-n-20",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1e3,
                        easing: "easeInOut",
                        duration: 1500,
                        target: {
                          id: "68eb847cbc556e76722b621a|1639da1c-7f06-780e-f2fe-99051ce16dd6",
                        },
                        xValue: 0,
                        xUnit: "VW",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-19-n-23",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 1e3,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|26eb68d4-c74a-22a0-1d6a-44ab49e02fd9",
                        },
                        xValue: 4.5,
                        yValue: 4.5,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-19-n-45",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1e3,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|26eb68d4-c74a-22a0-1d6a-44ab49e02fd9",
                        },
                        xValue: 50,
                        xUnit: "VW",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-19-n-22",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 1e3,
                        easing: "ease",
                        duration: 1500,
                        target: {
                          id: "68eb847cbc556e76722b621a|8b4be816-b198-bd67-58b9-70b283804b66",
                        },
                        xValue: 1.5,
                        yValue: 1.5,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-19-n-27",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 1e3,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|e0265ad7-07f6-fde8-5521-778f45ef26cb",
                        },
                        xValue: 0,
                        yValue: 0,
                        xUnit: "VW",
                        yUnit: "VH",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-19-n-6",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 1e3,
                        easing: "",
                        duration: 1500,
                        target: {
                          id: "68eb847cbc556e76722b621a|8b4be816-b198-bd67-58b9-70b283804b66",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-19-n-13",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          id: "68eb847cbc556e76722b621a|79930808-1437-4824-e6d7-6370aef2347d",
                        },
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-19-n-16",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|993a679c-5a3a-c5c3-b34d-61ad76fb41ff",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-19-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 1e3,
                        target: {
                          id: "68eb847cbc556e76722b621a|25f51c47-faec-e0a2-14dd-197bc8b59d1b",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-19-n-25",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|6b70ac25-7e91-819a-c2d5-48010a57cfd3",
                        },
                        xValue: 1,
                        locked: !1,
                      },
                    },
                    {
                      id: "a-19-n-29",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|010358e6-b0c1-0836-c3db-4efbedbc424f",
                        },
                        xValue: 1,
                        locked: !1,
                      },
                    },
                    {
                      id: "a-19-n-31",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|66857567-7af8-b66b-10cf-08c612033dd0",
                        },
                        xValue: 1,
                        locked: !1,
                      },
                    },
                    {
                      id: "a-19-n-34",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|d06a6424-4729-db83-71e6-ea941dfd1507",
                        },
                        xValue: 1,
                        locked: !1,
                      },
                    },
                    {
                      id: "a-19-n-39",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|1449324b-0b12-2786-40f9-46dfa2fc5889",
                        },
                        xValue: 1,
                        locked: !1,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-19-n-35",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 150,
                        target: {
                          id: "68eb847cbc556e76722b621a|1cb0b4e1-aa8d-f128-7dc9-0fe3bd319044",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-19-n-37",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|d06a6424-4729-db83-71e6-ea941dfd1507",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-43",
                      actionTypeId: "STYLE_BACKGROUND_COLOR",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|d06a6424-4729-db83-71e6-ea941dfd1507",
                        },
                        globalSwatchId: "",
                        rValue: 255,
                        bValue: 255,
                        gValue: 255,
                        aValue: 1,
                      },
                    },
                    {
                      id: "a-19-n-41",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|d06a6424-4729-db83-71e6-ea941dfd1507",
                        },
                        xValue: 110,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-19-n-40",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|1449324b-0b12-2786-40f9-46dfa2fc5889",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-44",
                      actionTypeId: "STYLE_BACKGROUND_COLOR",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|1449324b-0b12-2786-40f9-46dfa2fc5889",
                        },
                        globalSwatchId: "",
                        rValue: 255,
                        bValue: 255,
                        gValue: 255,
                        aValue: 1,
                      },
                    },
                    {
                      id: "a-19-n-42",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|1449324b-0b12-2786-40f9-46dfa2fc5889",
                        },
                        xValue: 120,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-19-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|e2e45d9c-69fc-e7de-4e80-cd02d98ddb7a",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-19-n-17",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 750,
                        target: {
                          id: "68eb847cbc556e76722b621a|dd698758-23ef-23cd-d8b2-5c09b19bf0f1",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x161790bfcda,
            },
            "a-20": {
              id: "a-20",
              title: "Scale horizontal",
              continuousParameterGroups: [
                {
                  id: "a-20-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-20-n",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|08584a36-58d3-66f1-4cb5-adbf018e1c99",
                            },
                            xValue: 0,
                            locked: !1,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 25,
                      actionItems: [
                        {
                          id: "a-20-n-2",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|08584a36-58d3-66f1-4cb5-adbf018e1c99",
                            },
                            xValue: 1,
                            locked: !1,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x161791a159b,
            },
            "a-21": {
              id: "a-21",
              title: "Slide",
              continuousParameterGroups: [
                {
                  id: "a-21-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-21-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|76925845-f43b-5246-c4cb-39f4a26bd8e2",
                            },
                            xValue: 0,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-21-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|76925845-f43b-5246-c4cb-39f4a26bd8e2",
                            },
                            xValue: 100,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x161791e9462,
            },
            "a-22": {
              id: "a-22",
              title: "Fade in photos",
              continuousParameterGroups: [
                {
                  id: "a-22-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-22-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|cbb3d1df-135d-38b9-2639-ef0a5a268cab",
                            },
                            yValue: 50,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-22-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|dd4402b4-90dc-d8b7-2687-580cf9ede4b9",
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-22-n-5",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|896c3f88-47da-ae3c-121a-013228f5d162",
                            },
                            yValue: -57,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-22-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|cbb3d1df-135d-38b9-2639-ef0a5a268cab",
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-22-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|dd4402b4-90dc-d8b7-2687-580cf9ede4b9",
                            },
                            yValue: 50,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-22-n-6",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|896c3f88-47da-ae3c-121a-013228f5d162",
                            },
                            yValue: 65,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x1617920133c,
            },
            "a-23": {
              id: "a-23",
              title: "move left",
              continuousParameterGroups: [
                {
                  id: "a-23-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-23-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|206d532b-42ea-0990-a7a1-b27cb5cbef49",
                            },
                            xValue: 0,
                            xUnit: "VW",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-23-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|206d532b-42ea-0990-a7a1-b27cb5cbef49",
                            },
                            xValue: -10,
                            xUnit: "VW",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x1617922a8e3,
            },
            "a-24": {
              id: "a-24",
              title: "move photos",
              continuousParameterGroups: [
                {
                  id: "a-24-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-24-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|8c2e3a6f-9d69-8379-d95e-c681c8d7a6d2",
                            },
                            xValue: 0,
                            xUnit: "VW",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-24-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|85bbf70f-d786-7b42-0f66-25a884590d95",
                            },
                            xValue: 0,
                            xUnit: "VW",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-24-n-5",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|21131eaf-d085-a54a-7781-49cf1b7ca921",
                            },
                            xValue: 1,
                            yValue: 1,
                            locked: !0,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-24-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|8c2e3a6f-9d69-8379-d95e-c681c8d7a6d2",
                            },
                            xValue: -15,
                            xUnit: "VW",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-24-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|85bbf70f-d786-7b42-0f66-25a884590d95",
                            },
                            xValue: -10,
                            xUnit: "VW",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-24-n-6",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|21131eaf-d085-a54a-7781-49cf1b7ca921",
                            },
                            xValue: 1.3,
                            yValue: 1.3,
                            locked: !0,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x16179249f95,
            },
            "a-25": {
              id: "a-25",
              title: "Fade in photos 2",
              continuousParameterGroups: [
                {
                  id: "a-25-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-25-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|cbb3d1df-135d-38b9-2639-ef0a5a268cab",
                            },
                            yValue: 50,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-25-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|dd4402b4-90dc-d8b7-2687-580cf9ede4b9",
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-25-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|896c3f88-47da-ae3c-121a-013228f5d162",
                            },
                            yValue: -57,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-25-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|cbb3d1df-135d-38b9-2639-ef0a5a268cab",
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-25-n-5",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|dd4402b4-90dc-d8b7-2687-580cf9ede4b9",
                            },
                            yValue: 50,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-25-n-6",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|896c3f88-47da-ae3c-121a-013228f5d162",
                            },
                            yValue: 65,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x1617920133c,
            },
            "a-27": {
              id: "a-27",
              title: "Pop in to scroll",
              continuousParameterGroups: [
                {
                  id: "a-27-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 5,
                      actionItems: [
                        {
                          id: "a-27-n",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|53d3a6af-d38d-4623-ee39-ecf0f977bb2e",
                            },
                            xValue: 0,
                            yValue: 0,
                            locked: !0,
                          },
                        },
                        {
                          id: "a-27-n-3",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|d8489c88-da08-89e6-0af6-13e9a17d2892",
                            },
                            xValue: 0,
                            yValue: 0,
                            locked: !0,
                          },
                        },
                        {
                          id: "a-27-n-5",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|4924e324-d86c-efcb-e065-94ceb8bc525c",
                            },
                            xValue: 0,
                            yValue: 0,
                            locked: !0,
                          },
                        },
                        {
                          id: "a-27-n-7",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|025ba718-3b59-d7c6-7072-7f38bbebea1d",
                            },
                            xValue: 0,
                            yValue: 0,
                            locked: !0,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 35,
                      actionItems: [
                        {
                          id: "a-27-n-2",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "inOutBack",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|53d3a6af-d38d-4623-ee39-ecf0f977bb2e",
                            },
                            xValue: 1,
                            yValue: 1,
                            locked: !0,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 40,
                      actionItems: [
                        {
                          id: "a-27-n-4",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "inOutBack",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|d8489c88-da08-89e6-0af6-13e9a17d2892",
                            },
                            xValue: 1,
                            yValue: 1,
                            locked: !0,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 45,
                      actionItems: [
                        {
                          id: "a-27-n-6",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "inOutBack",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|4924e324-d86c-efcb-e065-94ceb8bc525c",
                            },
                            xValue: 1,
                            yValue: 1,
                            locked: !0,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 50,
                      actionItems: [
                        {
                          id: "a-27-n-8",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68eb847cbc556e76722b621a|025ba718-3b59-d7c6-7072-7f38bbebea1d",
                            },
                            xValue: 1,
                            yValue: 1,
                            locked: !0,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x161793e85e3,
            },
            "a-28": {
              id: "a-28",
              title: "bar load",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-28-n",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|c8517810-bdd8-77b8-636f-4357cb2ed637",
                        },
                        xValue: 0,
                        locked: !1,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-28-n-2",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "swingTo",
                        duration: 4500,
                        target: {
                          id: "68eb847cbc556e76722b621a|c8517810-bdd8-77b8-636f-4357cb2ed637",
                        },
                        xValue: 1,
                        locked: !1,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x16179625cc1,
            },
            "a-30": {
              id: "a-30",
              title: "Show Tool tip",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-30-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: { id: "47e445f6-a9e2-ff76-a91a-958fd4a8bc2e" },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-30-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 250,
                        target: { id: "47e445f6-a9e2-ff76-a91a-958fd4a8bc2e" },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x1617df89eca,
            },
            "a-31": {
              id: "a-31",
              title: "Hide tool tip",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-31-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: { id: "47e445f6-a9e2-ff76-a91a-958fd4a8bc2e" },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x1617dfa0d0d,
            },
            "a-32": {
              id: "a-32",
              title: "Show tweet box",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-32-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: { id: "1cfac524-b5b7-2a34-ec50-8d3995e92535" },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-32-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: { id: "1cfac524-b5b7-2a34-ec50-8d3995e92535" },
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-32-n-3",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: { id: "1cfac524-b5b7-2a34-ec50-8d3995e92535" },
                        value: "block",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-32-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: { id: "1cfac524-b5b7-2a34-ec50-8d3995e92535" },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x161831cfa9b,
            },
            "a-34": {
              id: "a-34",
              title: "Show modal",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-34-n",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          id: "68eb847cbc556e76722b621a|c8e667b6-77d1-6a93-b68a-20fe96e45f75",
                        },
                        value: "none",
                      },
                    },
                    {
                      id: "a-34-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|c8e667b6-77d1-6a93-b68a-20fe96e45f75",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-34-n-5",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|869608ad-ee5f-500c-cec4-367ff69a9844",
                        },
                        xValue: 0,
                        yValue: 0,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-34-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|869608ad-ee5f-500c-cec4-367ff69a9844",
                        },
                        yValue: -50,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-34-n-3",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          id: "68eb847cbc556e76722b621a|c8e667b6-77d1-6a93-b68a-20fe96e45f75",
                        },
                        value: "block",
                      },
                    },
                    {
                      id: "a-34-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|c8e667b6-77d1-6a93-b68a-20fe96e45f75",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-34-n-6",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|869608ad-ee5f-500c-cec4-367ff69a9844",
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-34-n-7",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "68eb847cbc556e76722b621a|869608ad-ee5f-500c-cec4-367ff69a9844",
                        },
                        yValue: -50,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x1618729c0fc,
            },
            "a-36": {
              id: "a-36",
              title: "Menu Open",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-36-n",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|04d1347d-d036-b32e-985c-25a11a43abf0",
                        },
                        zValue: 45,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-36-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|04d1347d-d036-b32e-985c-25a11a43abf0",
                        },
                        yValue: 12,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-36-n-3",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|b4dd2ab0-0b56-54cf-bcba-3ad19452249b",
                        },
                        xValue: 0,
                        yValue: 0,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-36-n-4",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|ce7788a7-05e8-d2d5-6508-f5b846f0486d",
                        },
                        zValue: -45,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-36-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|ce7788a7-05e8-d2d5-6508-f5b846f0486d",
                        },
                        yValue: -13,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x16188c80edb,
            },
            "a-37": {
              id: "a-37",
              title: "Menu Close",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-37-n",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|04d1347d-d036-b32e-985c-25a11a43abf0",
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-37-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|04d1347d-d036-b32e-985c-25a11a43abf0",
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-37-n-3",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|b4dd2ab0-0b56-54cf-bcba-3ad19452249b",
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-37-n-4",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|ce7788a7-05e8-d2d5-6508-f5b846f0486d",
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-37-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutBack",
                        duration: 250,
                        target: {
                          id: "68eb847cbc556e76722b621a|ce7788a7-05e8-d2d5-6508-f5b846f0486d",
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x16188c80edb,
            },
            rubberBand: {
              id: "rubberBand",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 250,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 1.25,
                        yValue: 0.7500000000000001,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outElastic",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 1,
                        yValue: 1,
                      },
                    },
                  ],
                },
              ],
            },
            growIn: {
              id: "growIn",
              useFirstGroupAsInitialState: !0,
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        value: 0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 0.7500000000000001,
                        yValue: 0.7500000000000001,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 1,
                        yValue: 1,
                      },
                    },
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        value: 1,
                      },
                    },
                  ],
                },
              ],
            },
            growBigIn: {
              id: "growBigIn",
              useFirstGroupAsInitialState: !0,
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        value: 0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 0,
                        yValue: 0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 1,
                        yValue: 1,
                      },
                    },
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        value: 1,
                      },
                    },
                  ],
                },
              ],
            },
            flyInRight: {
              id: "flyInRight",
              useFirstGroupAsInitialState: !0,
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        value: 0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 800,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 0.25,
                        yValue: 0.25,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 0,
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "inOutQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 1,
                        yValue: 1,
                      },
                    },
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        value: 1,
                      },
                    },
                  ],
                },
              ],
            },
          },
          site: {
            mediaQueries: [
              { key: "main", min: 992, max: 1e4 },
              { key: "medium", min: 768, max: 991 },
              { key: "small", min: 480, max: 767 },
              { key: "tiny", min: 0, max: 479 },
            ],
          },
        });
      },
      3654: function (e, t, n) {
        n(9461),
          n(7624),
          n(286),
          n(8334),
          n(2338),
          n(3695),
          n(322),
          n(941),
          n(5134),
          n(1655),
          n(9078),
          n(5062);
      },
    },
    t = {};
  function n(i) {
    var a = t[i];
    if (void 0 !== a) return a.exports;
    var r = (t[i] = { id: i, loaded: !1, exports: {} });
    return e[i](r, r.exports, n), (r.loaded = !0), r.exports;
  }
  (n.m = e),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (n.g = (() => {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e = [];
      n.O = (t, i, a, r) => {
        if (i) {
          r = r || 0;
          for (var o = e.length; o > 0 && e[o - 1][2] > r; o--) e[o] = e[o - 1];
          e[o] = [i, a, r];
          return;
        }
        for (var c = 1 / 0, o = 0; o < e.length; o++) {
          for (var [i, a, r] = e[o], u = !0, d = 0; d < i.length; d++)
            (!1 & r || c >= r) && Object.keys(n.O).every((e) => n.O[e](i[d]))
              ? i.splice(d--, 1)
              : ((u = !1), r < c && (c = r));
          if (u) {
            e.splice(o--, 1);
            var l = a();
            void 0 !== l && (t = l);
          }
        }
        return t;
      };
    })(),
    (n.rv = () => "1.3.9"),
    (() => {
      var e = { 812: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, i) => {
          var a,
            r,
            [o, c, u] = i,
            d = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (a in c) n.o(c, a) && (n.m[a] = c[a]);
            if (u) var l = u(n);
          }
          for (t && t(i); d < o.length; d++)
            (r = o[d]), n.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return n.O(l);
        },
        i = (self.webpackChunk = self.webpackChunk || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })(),
    (n.ruid = "bundler=rspack@1.3.9");
  var i = n.O(void 0, ["87"], function () {
    return n(3654);
  });
  i = n.O(i);
})();
