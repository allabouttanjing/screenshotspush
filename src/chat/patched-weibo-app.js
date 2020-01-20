(function(t) {
    function e(e) {
        for (var r, i, a = e[0], c = e[1], u = e[2], l = 0, d = []; l < a.length; l++)
            i = a[l],
            Object.prototype.hasOwnProperty.call(s, i) && s[i] && d.push(s[i][0]),
            s[i] = 0;
        for (r in c)
            Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
        f && f(e);
        while (d.length)
            d.shift()();
        return o.push.apply(o, u || []),
        n()
    }
    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], r = !0, i = 1; i < n.length; i++) {
                var a = n[i];
                0 !== s[a] && (r = !1)
            }
            r && (o.splice(e--, 1),
            t = c(c.s = n[0]))
        }
        return t
    }
    var r = {}
      , i = {
        app: 0
    }
      , s = {
        app: 0
    }
      , o = [];
    function a(t) {
        return c.p + "js/" + ({
            "async-cards": "async-cards",
            "async-largepic": "async-largepic"
        }[t] || t) + "." + {
            "async-cards": "315e7b16",
            "async-largepic": "de3bc089"
        }[t] + ".js"
    }
    function c(e) {
        if (r[e])
            return r[e].exports;
        var n = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, c),
        n.l = !0,
        n.exports
    }
    c.e = function(t) {
        var e = []
          , n = {
            "async-cards": 1,
            "async-largepic": 1
        };
        i[t] ? e.push(i[t]) : 0 !== i[t] && n[t] && e.push(i[t] = new Promise((function(e, n) {
            for (var r = "css/" + ({
                "async-cards": "async-cards",
                "async-largepic": "async-largepic"
            }[t] || t) + "." + {
                "async-cards": "e1a13820",
                "async-largepic": "84a4a4fc"
            }[t] + ".css", s = c.p + r, o = document.getElementsByTagName("link"), a = 0; a < o.length; a++) {
                var u = o[a]
                  , l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === r || l === s))
                    return e()
            }
            var d = document.getElementsByTagName("style");
            for (a = 0; a < d.length; a++) {
                u = d[a],
                l = u.getAttribute("data-href");
                if (l === r || l === s)
                    return e()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet",
            f.type = "text/css",
            f.onload = e,
            f.onerror = function(e) {
                var r = e && e.target && e.target.src || s
                  , o = new Error("Loading CSS chunk " + t + " failed.\n(" + r + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED",
                o.request = r,
                delete i[t],
                f.parentNode.removeChild(f),
                n(o)
            }
            ,
            f.href = s;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(f)
        }
        )).then((function() {
            i[t] = 0
        }
        )));
        var r = s[t];
        if (0 !== r)
            if (r)
                e.push(r[2]);
            else {
                var o = new Promise((function(e, n) {
                    r = s[t] = [e, n]
                }
                ));
                e.push(r[2] = o);
                var u, l = document.createElement("script");
                l.charset = "utf-8",
                l.timeout = 120,
                c.nc && l.setAttribute("nonce", c.nc),
                l.src = a(t);
                var d = new Error;
                u = function(e) {
                    l.onerror = l.onload = null,
                    clearTimeout(f);
                    var n = s[t];
                    if (0 !== n) {
                        if (n) {
                            var r = e && ("load" === e.type ? "missing" : e.type)
                              , i = e && e.target && e.target.src;
                            d.message = "Loading chunk " + t + " failed.\n(" + r + ": " + i + ")",
                            d.name = "ChunkLoadError",
                            d.type = r,
                            d.request = i,
                            n[1](d)
                        }
                        s[t] = void 0
                    }
                }
                ;
                var f = setTimeout((function() {
                    u({
                        type: "timeout",
                        target: l
                    })
                }
                ), 12e4);
                l.onerror = l.onload = u,
                document.head.appendChild(l)
            }
        return Promise.all(e)
    }
    ,
    c.m = t,
    c.c = r,
    c.d = function(t, e, n) {
        c.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    c.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(t, e) {
        if (1 & e && (t = c(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (c.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                c.d(n, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return n
    }
    ,
    c.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return c.d(e, "a", e),
        e
    }
    ,
    c.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    c.p = "//conchfairy.sinajs.cn/chat/",
    c.oe = function(t) {
        throw console.error(t),
        t
    }
    ;
    var u = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = u.push.bind(u);
    u.push = e,
    u = u.slice();
    for (var d = 0; d < u.length; d++)
        e(u[d]);
    var f = l;
    o.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "001a": function(t, e, n) {
        "use strict";
        var r = n("77f2")
          , i = n.n(r);
        i.a
    },
    "0300": function(t, e, n) {},
    "040d": function(t, e, n) {
        "use strict";
        var r = n("bbd5")
          , i = {
            methods: {
                convertProtocal: function(t) {
                    return Object(r["b"])(t)
                },
                listtype: function() {
                    return this.$store.state.showunfollow ? "unfollowlist" : "chatlist"
                }
            }
        };
        e["a"] = i
    },
    "0434": function(t, e, n) {},
    "0bca": function(t, e, n) {
        "use strict";
        var r = n("2b0e")
          , i = new r["a"];
        e["a"] = i
    },
    "0cc3": function(t, e, n) {
        "use strict";
        var r = n("3029")
          , i = n.n(r);
        i.a
    },
    "0d71": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAFYElEQVRYw82XiVLbShBF/f+fk7xsr14SNhN2RFhtE8AOWzBgsNkcluSUrt5EmUWLUapC3VIJaab7qKe7Z1wbW1iYXF6uR9FfImBAqk0sLc18/jy/vv6nNbe2xnVhYwPp3itgQKpBxyCNLq7FzU1paWvLlXmbFs9nV1f//fQJr/wbsgwMSOWwjA+mEPDxxcWP8/P/zcwYfZib4wnPMTu9sgKHxOD3s7MvxsZ4+2pyklchsgRrKsbyfp/7uYxk4V9PTf0zMfGmXgdCOSDf3GCNJzwnKhomva3XcdY+Onp8fBRiKKi4mCqIhQlWnWC8HB/H5dr29sn5+c3d3cPDww/fH8/vvn+/urnpX12d9/sXgwGDn56e9Hb9yxc+KR8Ll94UkZYbDSLBF7M0h92uQcHNY/jvKf4zoDxh4v39PQ8b7TbrGHIHTD4WTOATpKjRwLRxMMIfTMMYa2tvT9HKwmKlucN9SKQFAxQby03Bv+H/YmWZuNpqkXlRwB2+QMrCYiYlAxYpAtPQ56m4YLodDrkhJajHHCwcU5YhLJUMocr258p9CxO6vr2llnEcwgIGpCwsrWDn+FihyubIkIAkqpKKppXkYDGCsozi2KS10mwy4t30NBV+70NJOysiegRiIjVEUWPfdYqAASkLS0kwuL4WxGg0FhnBphIJWD4W2cMgS9QLwaQ1Y+s5KC4WvR4sfbkrYH5hAWGJVk5iEjAT/0qwiPe3szMqiTRynaJ8LNoa6YWharHOLi/ZwXCKiyAW8fCCM4cV5FW1WFzpgmznfLAXS3tdjbpgmRlhiQ0VLMZVjsUWrh6OC9dvFG93NV6TaIywtLGzwyIyjiStCsuIZcI3Lly/wICUg8VN5ViEX8e9fCxGWNrc3SXUwqowTsLSwQQXrt8Ea2FjnQRyX9P0CPWfwGLPwDff7MUCBqSaKsINFanHnlo5FqECa+/wUL8hcGTBAQNSgqXXRirDZqfTGwyeueGEAkb30jmCZUm7TrDYg4DgnRGHWu3kOp9UzpReSrzjLu0dGB4mWLwzIkgwmY5VLY2KWu1eWLhLe8/C4iHBNI3UqBIgxGGQq45cfiz2IBLNwori7YjJdGSusjIymQUkm5yXtBdbWMDwvAYvicY7o1ano7zjJIkJ6TlkZqKxhk4vLlSJadeIJyB5sITPnINuFxp2Vr5sZDIrTpjCIPfbX7/y5ZbfX1gq0VYcJCPm6KyogLlkZbEspuPTU1o564UjyzUwUQirFYOrGmgwMqfglwqYN1T8ZlGlu0y/YbFkjEhLAYOMeJKA5AEWyy6ly8T1sNslPfhay6MRMEGstCDbPTjQUpZKfyvTNX1nfx+PXHOw6GlEhXFeAaTjB0ZNhhUh8y4fV1nDbMgjMCDlYKFWvJT8LpDpIjFLA6WZur1eFPfPDHcJlhoa+CGx22sMdinMdNi8ZNbamY/hhjXCVIYvhCPG1OicrUws1Iq/gDaG9V4mmXft9DHEGyNFfIFUCIuAkYl8BKblRp5csnSoTJzEhCOKH1NFsYgto3OFUQbTdc77fTGFsEyoRLZ/cmKYcgVMOSzEwuvXB3CspilML5Y2vmb89VwLukiw1NnaR0dFBA0zibMO+2wAISxtpiw9exxLw8SCLoABqRyWgeMKmfbyDCzQqflSxhMsrJedKREGdhJld/pMpnudqJrxJlY8VAgYkJ6FRX2ZNHLFK/WhUbDM2pcS801uqeIsCYtwMqyUZWBAGhFLm5LahGlOZg8wexTVStYzuDSWUj67xVnCDTGgG+lcAE3vd5l+y4CDOGDa9YsoSXn2Tv2MLih8NDttFlG+gaC7eiU+wgkZU9QscgUMSD8BRVJiIyni/Q4AAAAASUVORK5CYII="
    },
    "0e7e": function(t, e, n) {
        "use strict";
        var r = n("4212")
          , i = n.n(r);
        i.a
    },
    1: function(t, e) {},
    1633: function(t, e, n) {
        "use strict";
        var r = n("cc95")
          , i = n.n(r);
        i.a
    },
    "16de": function(t, e, n) {},
    "16ec": function(t, e, n) {
        "use strict";
        var r = n("8e28")
          , i = n.n(r);
        i.a
    },
    "1dd4": function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "b", (function() {
                return s
            }
            )),
            n.d(e, "a", (function() {
                return a
            }
            ));
            n("96cf");
            var r = n("3b8d")
              , i = (n("34ef"),
            n("6b54"),
            n("87b3"),
            n("4917"),
            n("7618"));
            try {
                (function(e) {
                    if ("object" === ("undefined" === typeof exports ? "undefined" : Object(i["a"])(exports)))
                        t.exports = e();
                    else if ("function" === typeof define && n("3c35"))
                        define(e);
                    else {
                        var r;
                        try {
                            r = window
                        } catch (s) {
                            r = self
                        }
                        r.SparkMD5 = e()
                    }
                }
                )((function(t) {
                    var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
                    function n(t, e) {
                        var n = t[0]
                          , r = t[1]
                          , i = t[2]
                          , s = t[3];
                        n += (r & i | ~r & s) + e[0] - 680876936 | 0,
                        n = (n << 7 | n >>> 25) + r | 0,
                        s += (n & r | ~n & i) + e[1] - 389564586 | 0,
                        s = (s << 12 | s >>> 20) + n | 0,
                        i += (s & n | ~s & r) + e[2] + 606105819 | 0,
                        i = (i << 17 | i >>> 15) + s | 0,
                        r += (i & s | ~i & n) + e[3] - 1044525330 | 0,
                        r = (r << 22 | r >>> 10) + i | 0,
                        n += (r & i | ~r & s) + e[4] - 176418897 | 0,
                        n = (n << 7 | n >>> 25) + r | 0,
                        s += (n & r | ~n & i) + e[5] + 1200080426 | 0,
                        s = (s << 12 | s >>> 20) + n | 0,
                        i += (s & n | ~s & r) + e[6] - 1473231341 | 0,
                        i = (i << 17 | i >>> 15) + s | 0,
                        r += (i & s | ~i & n) + e[7] - 45705983 | 0,
                        r = (r << 22 | r >>> 10) + i | 0,
                        n += (r & i | ~r & s) + e[8] + 1770035416 | 0,
                        n = (n << 7 | n >>> 25) + r | 0,
                        s += (n & r | ~n & i) + e[9] - 1958414417 | 0,
                        s = (s << 12 | s >>> 20) + n | 0,
                        i += (s & n | ~s & r) + e[10] - 42063 | 0,
                        i = (i << 17 | i >>> 15) + s | 0,
                        r += (i & s | ~i & n) + e[11] - 1990404162 | 0,
                        r = (r << 22 | r >>> 10) + i | 0,
                        n += (r & i | ~r & s) + e[12] + 1804603682 | 0,
                        n = (n << 7 | n >>> 25) + r | 0,
                        s += (n & r | ~n & i) + e[13] - 40341101 | 0,
                        s = (s << 12 | s >>> 20) + n | 0,
                        i += (s & n | ~s & r) + e[14] - 1502002290 | 0,
                        i = (i << 17 | i >>> 15) + s | 0,
                        r += (i & s | ~i & n) + e[15] + 1236535329 | 0,
                        r = (r << 22 | r >>> 10) + i | 0,
                        n += (r & s | i & ~s) + e[1] - 165796510 | 0,
                        n = (n << 5 | n >>> 27) + r | 0,
                        s += (n & i | r & ~i) + e[6] - 1069501632 | 0,
                        s = (s << 9 | s >>> 23) + n | 0,
                        i += (s & r | n & ~r) + e[11] + 643717713 | 0,
                        i = (i << 14 | i >>> 18) + s | 0,
                        r += (i & n | s & ~n) + e[0] - 373897302 | 0,
                        r = (r << 20 | r >>> 12) + i | 0,
                        n += (r & s | i & ~s) + e[5] - 701558691 | 0,
                        n = (n << 5 | n >>> 27) + r | 0,
                        s += (n & i | r & ~i) + e[10] + 38016083 | 0,
                        s = (s << 9 | s >>> 23) + n | 0,
                        i += (s & r | n & ~r) + e[15] - 660478335 | 0,
                        i = (i << 14 | i >>> 18) + s | 0,
                        r += (i & n | s & ~n) + e[4] - 405537848 | 0,
                        r = (r << 20 | r >>> 12) + i | 0,
                        n += (r & s | i & ~s) + e[9] + 568446438 | 0,
                        n = (n << 5 | n >>> 27) + r | 0,
                        s += (n & i | r & ~i) + e[14] - 1019803690 | 0,
                        s = (s << 9 | s >>> 23) + n | 0,
                        i += (s & r | n & ~r) + e[3] - 187363961 | 0,
                        i = (i << 14 | i >>> 18) + s | 0,
                        r += (i & n | s & ~n) + e[8] + 1163531501 | 0,
                        r = (r << 20 | r >>> 12) + i | 0,
                        n += (r & s | i & ~s) + e[13] - 1444681467 | 0,
                        n = (n << 5 | n >>> 27) + r | 0,
                        s += (n & i | r & ~i) + e[2] - 51403784 | 0,
                        s = (s << 9 | s >>> 23) + n | 0,
                        i += (s & r | n & ~r) + e[7] + 1735328473 | 0,
                        i = (i << 14 | i >>> 18) + s | 0,
                        r += (i & n | s & ~n) + e[12] - 1926607734 | 0,
                        r = (r << 20 | r >>> 12) + i | 0,
                        n += (r ^ i ^ s) + e[5] - 378558 | 0,
                        n = (n << 4 | n >>> 28) + r | 0,
                        s += (n ^ r ^ i) + e[8] - 2022574463 | 0,
                        s = (s << 11 | s >>> 21) + n | 0,
                        i += (s ^ n ^ r) + e[11] + 1839030562 | 0,
                        i = (i << 16 | i >>> 16) + s | 0,
                        r += (i ^ s ^ n) + e[14] - 35309556 | 0,
                        r = (r << 23 | r >>> 9) + i | 0,
                        n += (r ^ i ^ s) + e[1] - 1530992060 | 0,
                        n = (n << 4 | n >>> 28) + r | 0,
                        s += (n ^ r ^ i) + e[4] + 1272893353 | 0,
                        s = (s << 11 | s >>> 21) + n | 0,
                        i += (s ^ n ^ r) + e[7] - 155497632 | 0,
                        i = (i << 16 | i >>> 16) + s | 0,
                        r += (i ^ s ^ n) + e[10] - 1094730640 | 0,
                        r = (r << 23 | r >>> 9) + i | 0,
                        n += (r ^ i ^ s) + e[13] + 681279174 | 0,
                        n = (n << 4 | n >>> 28) + r | 0,
                        s += (n ^ r ^ i) + e[0] - 358537222 | 0,
                        s = (s << 11 | s >>> 21) + n | 0,
                        i += (s ^ n ^ r) + e[3] - 722521979 | 0,
                        i = (i << 16 | i >>> 16) + s | 0,
                        r += (i ^ s ^ n) + e[6] + 76029189 | 0,
                        r = (r << 23 | r >>> 9) + i | 0,
                        n += (r ^ i ^ s) + e[9] - 640364487 | 0,
                        n = (n << 4 | n >>> 28) + r | 0,
                        s += (n ^ r ^ i) + e[12] - 421815835 | 0,
                        s = (s << 11 | s >>> 21) + n | 0,
                        i += (s ^ n ^ r) + e[15] + 530742520 | 0,
                        i = (i << 16 | i >>> 16) + s | 0,
                        r += (i ^ s ^ n) + e[2] - 995338651 | 0,
                        r = (r << 23 | r >>> 9) + i | 0,
                        n += (i ^ (r | ~s)) + e[0] - 198630844 | 0,
                        n = (n << 6 | n >>> 26) + r | 0,
                        s += (r ^ (n | ~i)) + e[7] + 1126891415 | 0,
                        s = (s << 10 | s >>> 22) + n | 0,
                        i += (n ^ (s | ~r)) + e[14] - 1416354905 | 0,
                        i = (i << 15 | i >>> 17) + s | 0,
                        r += (s ^ (i | ~n)) + e[5] - 57434055 | 0,
                        r = (r << 21 | r >>> 11) + i | 0,
                        n += (i ^ (r | ~s)) + e[12] + 1700485571 | 0,
                        n = (n << 6 | n >>> 26) + r | 0,
                        s += (r ^ (n | ~i)) + e[3] - 1894986606 | 0,
                        s = (s << 10 | s >>> 22) + n | 0,
                        i += (n ^ (s | ~r)) + e[10] - 1051523 | 0,
                        i = (i << 15 | i >>> 17) + s | 0,
                        r += (s ^ (i | ~n)) + e[1] - 2054922799 | 0,
                        r = (r << 21 | r >>> 11) + i | 0,
                        n += (i ^ (r | ~s)) + e[8] + 1873313359 | 0,
                        n = (n << 6 | n >>> 26) + r | 0,
                        s += (r ^ (n | ~i)) + e[15] - 30611744 | 0,
                        s = (s << 10 | s >>> 22) + n | 0,
                        i += (n ^ (s | ~r)) + e[6] - 1560198380 | 0,
                        i = (i << 15 | i >>> 17) + s | 0,
                        r += (s ^ (i | ~n)) + e[13] + 1309151649 | 0,
                        r = (r << 21 | r >>> 11) + i | 0,
                        n += (i ^ (r | ~s)) + e[4] - 145523070 | 0,
                        n = (n << 6 | n >>> 26) + r | 0,
                        s += (r ^ (n | ~i)) + e[11] - 1120210379 | 0,
                        s = (s << 10 | s >>> 22) + n | 0,
                        i += (n ^ (s | ~r)) + e[2] + 718787259 | 0,
                        i = (i << 15 | i >>> 17) + s | 0,
                        r += (s ^ (i | ~n)) + e[9] - 343485551 | 0,
                        r = (r << 21 | r >>> 11) + i | 0,
                        t[0] = n + t[0] | 0,
                        t[1] = r + t[1] | 0,
                        t[2] = i + t[2] | 0,
                        t[3] = s + t[3] | 0
                    }
                    function r(t) {
                        var e, n = [];
                        for (e = 0; e < 64; e += 4)
                            n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
                        return n
                    }
                    function i(t) {
                        var e, n = [];
                        for (e = 0; e < 64; e += 4)
                            n[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
                        return n
                    }
                    function s(t) {
                        var e, i, s, o, a, c, u = t.length, l = [1732584193, -271733879, -1732584194, 271733878];
                        for (e = 64; e <= u; e += 64)
                            n(l, r(t.substring(e - 64, e)));
                        for (t = t.substring(e - 64),
                        i = t.length,
                        s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        e = 0; e < i; e += 1)
                            s[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
                        if (s[e >> 2] |= 128 << (e % 4 << 3),
                        e > 55)
                            for (n(l, s),
                            e = 0; e < 16; e += 1)
                                s[e] = 0;
                        return o = 8 * u,
                        o = o.toString(16).match(/(.*?)(.{0,8})$/),
                        a = parseInt(o[2], 16),
                        c = parseInt(o[1], 16) || 0,
                        s[14] = a,
                        s[15] = c,
                        n(l, s),
                        l
                    }
                    function o(t) {
                        var e, r, s, o, a, c, u = t.length, l = [1732584193, -271733879, -1732584194, 271733878];
                        for (e = 64; e <= u; e += 64)
                            n(l, i(t.subarray(e - 64, e)));
                        for (t = e - 64 < u ? t.subarray(e - 64) : new Uint8Array(0),
                        r = t.length,
                        s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        e = 0; e < r; e += 1)
                            s[e >> 2] |= t[e] << (e % 4 << 3);
                        if (s[e >> 2] |= 128 << (e % 4 << 3),
                        e > 55)
                            for (n(l, s),
                            e = 0; e < 16; e += 1)
                                s[e] = 0;
                        return o = 8 * u,
                        o = o.toString(16).match(/(.*?)(.{0,8})$/),
                        a = parseInt(o[2], 16),
                        c = parseInt(o[1], 16) || 0,
                        s[14] = a,
                        s[15] = c,
                        n(l, s),
                        l
                    }
                    function a(t) {
                        var n, r = "";
                        for (n = 0; n < 4; n += 1)
                            r += e[t >> 8 * n + 4 & 15] + e[t >> 8 * n & 15];
                        return r
                    }
                    function c(t) {
                        var e;
                        for (e = 0; e < t.length; e += 1)
                            t[e] = a(t[e]);
                        return t.join("")
                    }
                    function u(t) {
                        return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))),
                        t
                    }
                    function l(t, e) {
                        var n, r = t.length, i = new ArrayBuffer(r), s = new Uint8Array(i);
                        for (n = 0; n < r; n += 1)
                            s[n] = t.charCodeAt(n);
                        return e ? s : i
                    }
                    function d(t) {
                        return String.fromCharCode.apply(null, new Uint8Array(t))
                    }
                    function f(t, e, n) {
                        var r = new Uint8Array(t.byteLength + e.byteLength);
                        return r.set(new Uint8Array(t)),
                        r.set(new Uint8Array(e), t.byteLength),
                        n ? r : r.buffer
                    }
                    function h(t) {
                        var e, n = [], r = t.length;
                        for (e = 0; e < r - 1; e += 2)
                            n.push(parseInt(t.substr(e, 2), 16));
                        return String.fromCharCode.apply(String, n)
                    }
                    function m() {
                        this.reset()
                    }
                    return "5d41402abc4b2a76b9719d911017c592" !== c(s("hello")) && function(t, e) {
                        var n = (65535 & t) + (65535 & e)
                          , r = (t >> 16) + (e >> 16) + (n >> 16);
                        return r << 16 | 65535 & n
                    }
                    ,
                    "undefined" === typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
                        function e(t, e) {
                            return t = 0 | t || 0,
                            t < 0 ? Math.max(t + e, 0) : Math.min(t, e)
                        }
                        ArrayBuffer.prototype.slice = function(n, r) {
                            var i, s, o, a, c = this.byteLength, u = e(n, c), l = c;
                            return r !== t && (l = e(r, c)),
                            u > l ? new ArrayBuffer(0) : (i = l - u,
                            s = new ArrayBuffer(i),
                            o = new Uint8Array(s),
                            a = new Uint8Array(this,u,i),
                            o.set(a),
                            s)
                        }
                    }(),
                    m.prototype.append = function(t) {
                        return this.appendBinary(u(t)),
                        this
                    }
                    ,
                    m.prototype.appendBinary = function(t) {
                        this._buff += t,
                        this._length += t.length;
                        var e, i = this._buff.length;
                        for (e = 64; e <= i; e += 64)
                            n(this._hash, r(this._buff.substring(e - 64, e)));
                        return this._buff = this._buff.substring(e - 64),
                        this
                    }
                    ,
                    m.prototype.end = function(t) {
                        var e, n, r = this._buff, i = r.length, s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (e = 0; e < i; e += 1)
                            s[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
                        return this._finish(s, i),
                        n = c(this._hash),
                        t && (n = h(n)),
                        this.reset(),
                        n
                    }
                    ,
                    m.prototype.reset = function() {
                        return this._buff = "",
                        this._length = 0,
                        this._hash = [1732584193, -271733879, -1732584194, 271733878],
                        this
                    }
                    ,
                    m.prototype.getState = function() {
                        return {
                            buff: this._buff,
                            length: this._length,
                            hash: this._hash
                        }
                    }
                    ,
                    m.prototype.setState = function(t) {
                        return this._buff = t.buff,
                        this._length = t.length,
                        this._hash = t.hash,
                        this
                    }
                    ,
                    m.prototype.destroy = function() {
                        delete this._hash,
                        delete this._buff,
                        delete this._length
                    }
                    ,
                    m.prototype._finish = function(t, e) {
                        var r, i, s, o = e;
                        if (t[o >> 2] |= 128 << (o % 4 << 3),
                        o > 55)
                            for (n(this._hash, t),
                            o = 0; o < 16; o += 1)
                                t[o] = 0;
                        r = 8 * this._length,
                        r = r.toString(16).match(/(.*?)(.{0,8})$/),
                        i = parseInt(r[2], 16),
                        s = parseInt(r[1], 16) || 0,
                        t[14] = i,
                        t[15] = s,
                        n(this._hash, t)
                    }
                    ,
                    m.hash = function(t, e) {
                        return m.hashBinary(u(t), e)
                    }
                    ,
                    m.hashBinary = function(t, e) {
                        var n = s(t)
                          , r = c(n);
                        return e ? h(r) : r
                    }
                    ,
                    m.ArrayBuffer = function() {
                        this.reset()
                    }
                    ,
                    m.ArrayBuffer.prototype.append = function(t) {
                        var e, r = f(this._buff.buffer, t, !0), s = r.length;
                        for (this._length += t.byteLength,
                        e = 64; e <= s; e += 64)
                            n(this._hash, i(r.subarray(e - 64, e)));
                        return this._buff = e - 64 < s ? new Uint8Array(r.buffer.slice(e - 64)) : new Uint8Array(0),
                        this
                    }
                    ,
                    m.ArrayBuffer.prototype.end = function(t) {
                        var e, n, r = this._buff, i = r.length, s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (e = 0; e < i; e += 1)
                            s[e >> 2] |= r[e] << (e % 4 << 3);
                        return this._finish(s, i),
                        n = c(this._hash),
                        t && (n = h(n)),
                        this.reset(),
                        n
                    }
                    ,
                    m.ArrayBuffer.prototype.reset = function() {
                        return this._buff = new Uint8Array(0),
                        this._length = 0,
                        this._hash = [1732584193, -271733879, -1732584194, 271733878],
                        this
                    }
                    ,
                    m.ArrayBuffer.prototype.getState = function() {
                        var t = m.prototype.getState.call(this);
                        return t.buff = d(t.buff),
                        t
                    }
                    ,
                    m.ArrayBuffer.prototype.setState = function(t) {
                        return t.buff = l(t.buff, !0),
                        m.prototype.setState.call(this, t)
                    }
                    ,
                    m.ArrayBuffer.prototype.destroy = m.prototype.destroy,
                    m.ArrayBuffer.prototype._finish = m.prototype._finish,
                    m.ArrayBuffer.hash = function(t, e) {
                        var n = o(new Uint8Array(t))
                          , r = c(n);
                        return e ? h(r) : r
                    }
                    ,
                    m
                }
                ))
            } catch (c) {
                console.log(c),
                window.SparkMD5 = null
            }
            function s(t) {
                return new Promise((function(e, n) {
                    if (SparkMD5) {
                        var r = setTimeout((function() {
                            n()
                        }
                        ), 1e3)
                          , i = new FileReader
                          , s = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice
                          , o = 2097152
                          , a = Math.ceil(t.size / o)
                          , c = 0
                          , u = new SparkMD5;
                        i.onload = function(t) {
                            u.appendBinary(t.target.result),
                            c++,
                            c < a ? l() : (e(u.end()),
                            clearTimeout(r))
                        }
                        ,
                        l()
                    } else
                        n();
                    function l() {
                        var e = c * o
                          , n = e + o >= t.size ? t.size : e + o;
                        i.readAsBinaryString(s.call(t, e, n))
                    }
                }
                ))
            }
            var o = function(t, e, n) {
                return new Promise((function(r, i) {
                    var s = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice
                      , o = new FileReader;
                    o.onload = function(t) {
                        return r(t.target.result)
                    }
                    ,
                    o.readAsArrayBuffer(s.call(t, e, n))
                }
                ))
            }
              , a = function() {
                var t = Object(r["a"])(regeneratorRuntime.mark((function t(e, n, r) {
                    var i;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return i = new SparkMD5.ArrayBuffer,
                                t.t0 = i,
                                t.next = 4,
                                o(e, n, r);
                            case 4:
                                return t.t1 = t.sent,
                                t.t0.append.call(t.t0, t.t1),
                                t.abrupt("return", i.end());
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function(e, n, r) {
                    return t.apply(this, arguments)
                }
            }()
        }
        ).call(this, n("dd40")(t))
    },
    "1fa1": function(t, e, n) {
        "use strict";
        var r = n("8b2f")
          , i = n.n(r);
        i.a
    },
    2045: function(t, e, n) {},
    "23be": function(t, e, n) {},
    "2b9b": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTMzNzRGMTI5MTY2MTFFOUIyQjJCNkM0NzBCQzI1MkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTcxQzEzMDg5MTY3MTFFOUIyQjJCNkM0NzBCQzI1MkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMzM3NEYxMDkxNjYxMUU5QjJCMkI2QzQ3MEJDMjUyRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMzM3NEYxMTkxNjYxMUU5QjJCMkI2QzQ3MEJDMjUyRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjaWdl4AAAHASURBVHjarNVLKERhFAfwa1iMRyxEiNlIFrIQTZKSspG8YuexsJSUDaUsSdKUbGxsPAvlsbBARllKKBtSEkIes5jJlNL4H51bp9s3d+Y+Tv2Kc7/5zv2++z1SRoP3mo3ogVmYgnmRz4EDeIRuSngsdlwIO7ACBVArnmXANvghT09aKdAH19CueJYK69AIDzzC/0hLouMiWIBWkzYz0Abv0ARPyY6gn99a7/wNxuDX0K4aItzuTj7QR1AFuSJPhYehReQ2YRA+YJw/qB5dkMXToxkLTPIP4kUIhmDNpM0n01QFBhJ0XgnPms2gAun89yvPN4UX6iHspHPjKjoWy8unmk+nBZwG7YVsQy7sZoETnlYZNx4XC0QUuW83R9CsSro5goQfmeZvQ5yMrhWI8rb3MRle3idRuwVoiqYhFud5PlxAnZMCc1ACNYJfnD3lcAoBsetVF1GZ2Uem4+BcOONd3clHCLUbgSs+uzIN/WzBJTRYXUV0PVbAKv9Pb7moOAGCvDB2+XC0tEy/oJevypc4bSb4JWix7EOpnX2wx6NZVjyL8dQdQjEs2d1oIb5G6Wq85RNYjx/ogCM6g/TknwADABbhU6HkAN0BAAAAAElFTkSuQmCC"
    },
    "2c67": function(t, e, n) {
        "use strict";
        var r = n("681c")
          , i = n.n(r);
        i.a
    },
    "2db5": function(t, e, n) {},
    "2df7": function(t, e, n) {
        "use strict";
        var r = n("3a73")
          , i = n.n(r);
        i.a
    },
    3029: function(t, e, n) {},
    3167: function(t, e, n) {
        "use strict";
        var r = n("9ce1")
          , i = n.n(r);
        i.a
    },
    3501: function(t, e, n) {
        "use strict";
        var r = n("a264")
          , i = n.n(r);
        i.a
    },
    3582: function(t, e, n) {},
    "358e": function(t, e, n) {},
    3634: function(t, e, n) {},
    "365c": function(t, e, n) {
        "use strict";
        var r = {};
        n.r(r),
        n.d(r, "remarklist", (function() {
            return f
        }
        )),
        n.d(r, "picinfos", (function() {
            return h
        }
        )),
        n.d(r, "clearunreadMsg", (function() {
            return m
        }
        )),
        n.d(r, "clearUnfollowUnreadMsg", (function() {
            return p
        }
        )),
        n.d(r, "clearunread", (function() {
            return g
        }
        )),
        n.d(r, "getbasicmsg", (function() {
            return v
        }
        )),
        n.d(r, "userdetail", (function() {
            return b
        }
        )),
        n.d(r, "showbatch", (function() {
            return y
        }
        )),
        n.d(r, "destroymsg", (function() {
            return _
        }
        )),
        n.d(r, "destroypubmsg", (function() {
            return w
        }
        )),
        n.d(r, "getchatlist", (function() {
            return x
        }
        )),
        n.d(r, "getunfollowlist", (function() {
            return j
        }
        )),
        n.d(r, "getconverstion", (function() {
            return k
        }
        )),
        n.d(r, "getpubconverstion", (function() {
            return O
        }
        )),
        n.d(r, "relative", (function() {
            return C
        }
        )),
        n.d(r, "blockuser", (function() {
            return I
        }
        )),
        n.d(r, "checkisblockuser", (function() {
            return $
        }
        )),
        n.d(r, "unblockuser", (function() {
            return T
        }
        )),
        n.d(r, "setnotice", (function() {
            return A
        }
        )),
        n.d(r, "checksetnotice", (function() {
            return P
        }
        )),
        n.d(r, "getemotions", (function() {
            return S
        }
        )),
        n.d(r, "cardshow", (function() {
            return D
        }
        )),
        n.d(r, "newmsg", (function() {
            return q
        }
        )),
        n.d(r, "updateremark", (function() {
            return M
        }
        )),
        n.d(r, "getbilateral", (function() {
            return E
        }
        )),
        n.d(r, "msgboxsearch", (function() {
            return R
        }
        )),
        n.d(r, "creategroup", (function() {
            return N
        }
        )),
        n.d(r, "updategroupmsg", (function() {
            return L
        }
        )),
        n.d(r, "groupquery", (function() {
            return G
        }
        )),
        n.d(r, "querynick", (function() {
            return U
        }
        )),
        n.d(r, "querygroup", (function() {
            return B
        }
        )),
        n.d(r, "getgroupmsg", (function() {
            return W
        }
        )),
        n.d(r, "getlastgroupmsg", (function() {
            return z
        }
        )),
        n.d(r, "getgroupmsgs", (function() {
            return V
        }
        )),
        n.d(r, "joingroups", (function() {
            return Y
        }
        )),
        n.d(r, "msgsearch", (function() {
            return F
        }
        )),
        n.d(r, "kickuser", (function() {
            return H
        }
        )),
        n.d(r, "joinuser", (function() {
            return J
        }
        )),
        n.d(r, "sendmsg", (function() {
            return Z
        }
        )),
        n.d(r, "destroygroupmsg", (function() {
            return K
        }
        )),
        n.d(r, "destroygrouptop", (function() {
            return Q
        }
        )),
        n.d(r, "exitgroup", (function() {
            return X
        }
        )),
        n.d(r, "destroypubgroupmsg", (function() {
            return tt
        }
        )),
        n.d(r, "setbulletin", (function() {
            return et
        }
        )),
        n.d(r, "clearbulletin", (function() {
            return nt
        }
        )),
        n.d(r, "deletebulletin", (function() {
            return rt
        }
        )),
        n.d(r, "initfile", (function() {
            return it
        }
        )),
        n.d(r, "webimnas", (function() {
            return st
        }
        )),
        n.d(r, "queryispub", (function() {
            return ot
        }
        )),
        n.d(r, "queryPubRemindType", (function() {
            return at
        }
        )),
        n.d(r, "recentmsg", (function() {
            return ct
        }
        )),
        n.d(r, "report", (function() {
            return ut
        }
        )),
        n.d(r, "uploadVideoInit", (function() {
            return lt
        }
        )),
        n.d(r, "getFirstImage", (function() {
            return dt
        }
        )),
        n.d(r, "groupRecallMsg", (function() {
            return ft
        }
        )),
        n.d(r, "recallMsg", (function() {
            return ht
        }
        )),
        n.d(r, "groupDeleteMsg", (function() {
            return mt
        }
        )),
        n.d(r, "deleteMsg", (function() {
            return pt
        }
        )),
        n.d(r, "flashFid", (function() {
            return gt
        }
        )),
        n.d(r, "joinGroup", (function() {
            return vt
        }
        )),
        n.d(r, "followUser", (function() {
            return bt
        }
        )),
        n.d(r, "isMember", (function() {
            return yt
        }
        )),
        n.d(r, "checkVplusRelationship", (function() {
            return _t
        }
        )),
        n.d(r, "addAdmin", (function() {
            return wt
        }
        )),
        n.d(r, "deleteAdmin", (function() {
            return xt
        }
        )),
        n.d(r, "tansferGroup", (function() {
            return jt
        }
        )),
        n.d(r, "updateFansGroup", (function() {
            return kt
        }
        )),
        n.d(r, "searchAffi", (function() {
            return Ot
        }
        ));
        var i = {};
        n.r(i),
        n.d(i, "login", (function() {
            return Ct
        }
        ));
        var s = {};
        n.r(s),
        n.d(s, "getqrcode", (function() {
            return St
        }
        )),
        n.d(s, "metaquery", (function() {
            return Dt
        }
        )),
        n.d(s, "checkqrcode", (function() {
            return qt
        }
        )),
        n.d(s, "logout", (function() {
            return Mt
        }
        )),
        n.d(s, "cardshow", (function() {
            return Et
        }
        )),
        n.d(s, "webimnas", (function() {
            return Rt
        }
        )),
        n.d(s, "crossDomain", (function() {
            return Nt
        }
        )),
        n.d(s, "totalUnreadCount", (function() {
            return Lt
        }
        ));
        n("6762"),
        n("2fdb");
        var o = n("bc3a")
          , a = n.n(o)
          , c = n("4328")
          , u = n.n(c)
          , l = n("2b0e")
          , d = (n("a18c"),
        n("4360"),
        n("fcfc"))
          , f = (n("7f7f"),
        function() {
            return a.a.get("/webim/query_remark.json").then((function(t) {
                return t.data
            }
            ))
        }
        )
          , h = function(t) {
            return a.a.get("/webim/pic_infos.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , m = function(t) {
            return a.a.post("/webim/2/direct_messages/set_unread_count.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , p = function(t) {
            return a.a.post("/webim/2/direct_messages/public/set_unread_count.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , g = function(t) {
            return a.a.post("/webim/groupchat/clear_unread.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , v = function() {
            return a.a.get("/webim/2/account/profile/basic.json").then((function(t) {
                return t.data
            }
            ))
        }
          , b = function(t) {
            return a.a.get("/webim/2/users/show.json", t).then((function(t) {
                return t.data && (t.data.name || t.data.screen_name) ? t.data : {
                    error: "用户不存在"
                }
            }
            ))
        }
          , y = function(t) {
            return a.a.get("/webim/2/direct_messages/show_batch.json?is_complete=1&is_encoded=0", t).then((function(t) {
                return t.data
            }
            ))
        }
          , _ = function(t) {
            return a.a.post("/webim/2/direct_messages/destroy_batch.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , w = function(t) {
            return a.a.post("/webim/2/direct_messages/public/destroy_batch.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , x = function(t) {
            return a.a.get("/webim/2/direct_messages/contacts.json?special_source=3", t).then((function(t) {
                return t.data
            }
            ))
        }
          , j = function(t) {
            return a.a.get("/webim/2/direct_messages/public/contacts.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , k = function(t) {
            return a.a.get("/webim/2/direct_messages/conversation.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , O = function(t) {
            return a.a.get("/webim/2/direct_messages/public/conversation.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , C = function(t) {
            return a.a.get("/webim/2/friendships/batch_exists.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , I = function(t) {
            return a.a.post("/webim/2/direct_messages/block_batch.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , $ = function(t) {
            return a.a.get("/webim/2/direct_messages/block/check_batch.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , T = function(t) {
            return a.a.post("/webim/2/direct_messages/unblock_batch.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , A = function(t) {
            var e = "/webim/2/notice_center/discussion_group/set_push_settings.json";
            return 1 === t.affi_type && (e = "/webim/groupchat/update_user_settings.json",
            delete t.affi_type),
            a.a.post(e, u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , P = function(t) {
            return a.a.get("/webim/2/notice_center/discussion_group/push_settings.json?call_from=mobile", t).then((function(t) {
                return t.data
            }
            ))
        }
          , S = function() {
            return a.a.get("/2/emotions.json").then((function(t) {
                return t.data
            }
            ))
        }
          , D = function(t) {
            return a.a.get("/webim/2/short_url/info.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , q = function(t) {
            return a.a.post("/webim/2/direct_messages/new.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , M = function(t) {
            return a.a.post("/webim/2/friendships/remark/update.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , E = function() {
            return a.a.get("/webim/query_bilateral_friends.json").then((function(t) {
                return t.data
            }
            ))
        }
          , R = function(t) {
            return a.a.get("/webim/2/direct_messages/messageboxsearch.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , N = function(t) {
            return a.a.post("/webim/groupchat/create.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , L = function(t) {
            return a.a.post("/webim/groupchat/update.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , G = function(t) {
            return a.a.get("/webim/groupchat/query.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , U = function(t) {
            return a.a.get("/webim/groupchat/query_nick.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , B = function(t) {
            return a.a.get("/webim/query_group.json?is_pc=1&query_member=1&sort_by_jp=1&query_member_count=5000", t).then((function(t) {
                return t.data
            }
            ))
        }
          , W = function(t) {
            return a.a.get("/webim/groupchat/query_messages.json?convert_emoji=1&query_sender=1", t).then((function(t) {
                return t.data
            }
            ))
        }
          , z = function(t) {
            return a.a.get("/webim/groupchat/query_message.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , V = function(t) {
            return a.a.get("/webim/groupchat/batch_query_messages.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , Y = function() {
            return a.a.get("/webim/groupchat/query_join_groups.json").then((function(t) {
                return t.data
            }
            ))
        }
          , F = function(t) {
            return a.a.get("/webim/2/direct_messages/messageboxsearch.json?types=contact,group", t).then((function(t) {
                return t.data
            }
            ))
        }
          , H = function(t) {
            return a.a.post("/webim/groupchat/kick.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , J = function(t) {
            return a.a.post("/webim/groupchat/join.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , Z = function(t) {
            return a.a.post("/webim/groupchat/send_message.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , K = function(t) {
            return a.a.post("/webim/groupchat/delete_message.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , Q = function(t) {
            return a.a.post("/webim/2/direct_messages/delete_top_contact.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , X = function(t) {
            return a.a.post("/webim/groupchat/exit.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , tt = function(t) {
            return a.a.post("/webim/2/direct_messages/delete_top_contact.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , et = function(t) {
            return a.a.post("/webim/groupchat/send_bulletin.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , nt = function(t) {
            return a.a.post("/webim/groupchat/delete_user_bulletin.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , rt = function(t) {
            return a.a.post("/webim/groupchat/delete_bulletin.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , it = function(t) {
            return a.a.post("/webim/fileplatform/init.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , st = function() {
            return a.a.get("/webim/webim_nas.json?returntype=json&v=1.1").then((function(t) {
                return t.data
            }
            ))
        }
          , ot = function() {
            return a.a.get("/webim/2/direct_messages/query_receiver_setting.json").then((function(t) {
                return t.data
            }
            ))
        }
          , at = function() {
            return a.a.get("/webim/2/direct_messages/public/query_remind_type.json").then((function(t) {
                return t.data
            }
            ))
        }
          , ct = function(t) {
            return a.a.get("/webim/2/direct_messages/recent_messages.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , ut = function(t) {
            return a.a.post("/webim/report.json?e=".concat(Global.sid).concat(Math.floor(100 * Math.random())), u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , lt = function(t) {
            return a.a.post("/webim/2/multimedia/init.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , dt = function(t) {
            var e = "/webim/2/mss/query_video_trans.json";
            return a.a.get(e, t).then((function(t) {
                return t.data
            }
            ))
        }
          , ft = function(t) {
            return a.a.post("/webim/groupchat/recall.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , ht = function(t) {
            return a.a.post("/webim/2/direct_messages/recall.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , mt = function(t) {
            return a.a.post("/webim/groupchat/delete_message.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , pt = function(t) {
            return a.a.post("/webim/2/direct_messages/destroy.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , gt = function(t) {
            return a.a.post("/webim/2/mss/repost.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , vt = function(t) {
            return a.a.post("/webim/groupchat/apply_join.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , bt = function(t) {
            return a.a.post("/webim/follow_affi.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , yt = function(t) {
            return a.a.get("/webim/groupchat/is_members.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , _t = function(t) {
            return a.a.get("/webim/friendships/vipclub/relation/check.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , wt = function(t) {
            return a.a.post("/webim/groupchat/add_admin.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , xt = function(t) {
            return a.a.post("/webim/groupchat/delete_admin.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , jt = function(t) {
            return a.a.get("/webim/groupchat/set_group_owner.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , kt = function(t) {
            return a.a.post("/webim/groupchat/apply_update_to_affi.json", u.a.stringify(t)).then((function(t) {
                return t.data
            }
            ))
        }
          , Ot = function(t) {
            return a.a.get("/webim/query_group_affi.json", t).then((function(t) {
                return t.data
            }
            ))
        }
          , Ct = function(t) {
            return a.a.get("//login.sina.com.cn/sso/login.php?entry=weibo&returntype=TEXT&crossdomain=1&cdult=3&domain=weibo.com&savestate=30&source=209678993", t).then((function(t) {
                return t.data
            }
            ))
        }
          , It = (n("a481"),
        console.log,
        0);
        function $t() {}
        function Tt(t, e, n) {
            "function" == typeof e && (n = e,
            e = {}),
            e || (e = {});
            var r, i, s = e.prefix || "__jp", o = e.name || s + It++, a = e.param || "callback", c = null != e.timeout ? e.timeout : 1e4, u = encodeURIComponent, l = document.getElementsByTagName("body")[0] || document.head;
            function d() {
                l && r && l.removeChild(r),
                window[o] = $t,
                i && clearTimeout(i)
            }
            function f() {
                window[o] && d()
            }
            return c && (i = setTimeout((function() {
                d(),
                n && n(new Error("Timeout"))
            }
            ), c)),
            window[o] = function(t) {
                d(),
                n && n(null, t)
            }
            ,
            t += (~t.indexOf("?") ? "&" : "?") + a + "=" + u(o),
            t = t.replace("?&", "?"),
            r = document.createElement("script"),
            r.src = t,
            r.onerror = function() {
                d(),
                n && n(new Error("error"))
            }
            ,
            l.appendChild(r),
            f
        }
        function At(t, e, n) {
            return t += (t.indexOf("?") < 0 ? "?" : "&") + Pt(e),
            new Promise((function(e, r) {
                Tt(t, n, (function(t, n) {
                    t ? r(t) : e(n)
                }
                ))
            }
            )).catch((function(t) {
                console.log(t)
            }
            ))
        }
        function Pt(t) {
            var e = "";
            for (var n in t) {
                var r = void 0 !== t[n] ? t[n] : "";
                e += "&".concat(n, "=").concat(encodeURIComponent(r))
            }
            return e ? e.substring(1) : ""
        }
        var St = function() {
            var t = "//login.sina.com.cn/sso/qrcode/image"
              , e = {
                entry: "weibo",
                size: 180,
                source: 209678993
            };
            return At(t, e)
        }
          , Dt = function(t) {
            var e = "//upload.api.weibo.com/2/mss/meta_query.json?source=209678993";
            return At(e, t)
        }
          , qt = function(t) {
            var e = "//login.sina.com.cn/sso/qrcode/check?entry=weibo&source=209678993";
            return At(e, t)
        }
          , Mt = function() {
            var t = "//passport.weibo.com/wbsso/logout"
              , e = {
                r: "https://weibo.com",
                returntype: 1
            };
            return At(t, e)
        }
          , Et = function(t) {
            var e = "//weibo.com/aj/card/show?source=209678993&_t=3";
            return At(e, t)
        }
          , Rt = function() {
            var t = "//api.weibo.com/webim/webim_nas.json"
              , e = {
                source: 209678993,
                returntype: "json",
                v: "1.1"
            };
            return At(t, e)
        }
          , Nt = function(t) {
            var e = {
                source: 209678993
            };
            return At(t, e)
        }
          , Lt = function() {
            var t = "//rm.api.weibo.com/2/remind/push_count.json"
              , e = {
                source: 209678993,
                with_dm_group: !0,
                with_chat_group: !0,
                with_dm_unread: 1,
                with_settings: 1,
                sign_val: "newChat"
            };
            return At(t, e)
        };
        n.d(e, "a", (function() {
            return r
        }
        )),
        n.d(e, "c", (function() {
            return i
        }
        )),
        n.d(e, "b", (function() {
            return s
        }
        )),
        a.a.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        var Gt = ["development", "dev"].includes("production");
        a.a.defaults.baseURL = Gt ? "//api.weibo.com" : "",
        a.a.interceptors.request.use((function(t) {
            if ("get" == t.method) {
                var e = (new Date).getTime();
                t.params ? (t.params.source = "209678993",
                t.params.t = e) : t.params = {
                    source: "209678993",
                    t: e
                }
            } else
                "post" == t.method && t.url && t.url.indexOf("uploadx.json") <= 0 && (t.data && t.data.length ? t.data += "&source=209678993" : t.data = "source=209678993");
            return t
        }
        ), (function(t) {
            return Promise.reject(t)
        }
        )),
        a.a.interceptors.response.use((function(t) {
            if (null != t.data && 21301 == t.data.error_code) {
                var e = location.href.indexOf("#/login");
                e || d["e"].aborting || l["a"].prototype.$modal({
                    icon: {
                        text: n("6008")
                    },
                    text: "登录超时或失效，请重新登录",
                    okObj: {
                        text: "我知道了",
                        okFun: function() {
                            location.reload()
                        },
                        cancelFun: function() {
                            location.reload()
                        }
                    },
                    width: 430
                })
            }
            return t
        }
        ), (function(t) {
            return Promise.reject(t)
        }
        ))
    },
    "37a4": function(t, e, n) {},
    "3a73": function(t, e, n) {},
    "3c119": function(t, e, n) {},
    "3c6e": function(t, e, n) {},
    "3da8": function(t, e, n) {},
    "3dfd": function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("router-view")], 1)
        }
          , i = []
          , s = (n("ac4d"),
        n("8a81"),
        n("768b"));
        n("ac6a"),
        n("ffc1"),
        n("4917");
        function o() {
            var t = navigator.userAgent
              , e = "Win32" == navigator.platform || "Windows" == navigator.platform
              , n = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
            if (n)
                return "Mac";
            var r = "X11" == navigator.platform && !e && !n;
            if (r)
                return "Unix";
            var i = String(navigator.platform).indexOf("Linux") > -1;
            if (i)
                return "Linux";
            if (e) {
                var s = t.indexOf("Windows NT 5.0") > -1 || t.indexOf("Windows 2000") > -1;
                if (s)
                    return "Win2000";
                var o = t.indexOf("Windows NT 5.1") > -1 || t.indexOf("Windows XP") > -1;
                if (o)
                    return "WinXP";
                var a = t.indexOf("Windows NT 5.2") > -1 || t.indexOf("Windows 2003") > -1;
                if (a)
                    return "Win2003";
                var c = t.indexOf("Windows NT 6.0") > -1 || t.indexOf("Windows Vista") > -1;
                if (c)
                    return "WinVista";
                var u = t.indexOf("Windows NT 6.1") > -1 || t.indexOf("Windows 7") > -1;
                if (u)
                    return "Win7"
            }
            return "other"
        }
        var a = n("c712")
          , c = n("fcfc")
          , u = n("365c")
          , l = n("bbd5")
          , d = n("0bca")
          , f = n("4328")
          , h = n.n(f)
          , m = n("8917")
          , p = {
            data: function() {
                return {
                    statusMap: {}
                }
            },
            mounted: function() {
                var t = this;
                c["d"].start(),
                this.report(),
                window.addEventListener("resize", (function() {
                    t.$store.commit("changemodalId", -1)
                }
                ));
                var e = {
                    source: 209678993,
                    with_dm_group: !0,
                    with_chat_group: !0,
                    with_dm_unread: 1,
                    with_settings: 1,
                    sign_val: "newChat"
                };
                d["a"].$on("WEBCHAT_REFRESH_COUNT", (function() {
                    var t = "https://rm.api.weibo.com/2/remind/push_count.json?".concat(h.a.stringify(e))
                      , n = window.opener;
                    n && n.postMessage({
                        type: "WEBCHAT_REFRESH_COUNT",
                        url: t
                    }, "https://weibo.com")
                }
                )),
                setInterval((function() {
                    t.statusMap[t.getToday()] || t.report()
                }
                ), 6e4),
                window.addEventListener("beforeunload", this.report2)
            },
            methods: {
                report: function() {
                    var t = this;
                    window.Global.sid = Object(l["l"])(15);
                    var e = Object(l["n"])(Object(l["k"])(location.href), "source_from");
                    e = parseInt(e) ? parseInt(e) : "";
                    var n = {
                        sid: Global.sid,
                        type: 1,
                        browser: Object(a["a"])().broName,
                        browser_ver: Object(a["a"])().browserVersion,
                        screen: window.screen.width + "x" + window.screen.height,
                        os: o(),
                        source_from: e
                    };
                    u["a"].report({
                        data: JSON.stringify(n)
                    }).then((function(e) {
                        e && !e.error && (t.statusMap[t.getToday()] = !0,
                        console.log("【".concat(new Date, "】成功发送打码日志.")))
                    }
                    ))
                },
                getToday: function() {
                    var t = new Date;
                    return "".concat(t.getFullYear(), "-").concat(t.getMonth() + 1, "-").concat(t.getDate())
                },
                report2: function() {
                    var t = {
                        sid: Global.sid,
                        type: 2,
                        duration: Math.floor(((new Date).getTime() - c["d"].starttime) / 1e3),
                        version: document.body.getElementsByTagName("script")[1] ? document.body.getElementsByTagName("script")[1].src.match(/app.(.*).js/)[1] : "dev"
                    };
                    try {
                        for (var e = ["setAdmin", "speechForbid", "transferGroup", "updateAffi", "feedAddGroupWithoutLimit", "feedGroupCard", "addGroupWithoutLimit", "feedAddGroupWithLimit", "addGroupWithLimit", "clickGroupCard"], n = new Array(e.length), r = 0, i = Object.entries(m["a"]); r < i.length; r++) {
                            var l = Object(s["a"])(i[r], 2)
                              , d = l[0]
                              , f = l[1]
                              , h = !0
                              , p = !1
                              , g = void 0;
                            try {
                                for (var v, b = e.entries()[Symbol.iterator](); !(h = (v = b.next()).done); h = !0) {
                                    var y = Object(s["a"])(v.value, 2)
                                      , _ = y[0]
                                      , w = y[1];
                                    d === w && (n[_] = f.count)
                                }
                            } catch (x) {
                                p = !0,
                                g = x
                            } finally {
                                try {
                                    h || null == b.return || b.return()
                                } finally {
                                    if (p)
                                        throw g
                                }
                            }
                        }
                        t.action = n.join("_")
                    } catch (j) {
                        t.action = Object(a["a"])().broName + Object(a["a"])().browserVersion + o()
                    }
                    u["a"].report({
                        data: JSON.stringify(t)
                    })
                }
            },
            destroyed: function() {
                window.removeEventListener("beforeunload", this.report2)
            }
        }
          , g = p
          , v = (n("7c55"),
        n("2877"))
          , b = Object(v["a"])(g, r, i, !1, null, null, null);
        e["a"] = b.exports
    },
    4078: function(t, e, n) {
        "use strict";
        var r = n("b9c4")
          , i = n.n(r);
        i.a
    },
    4212: function(t, e, n) {},
    4360: function(t, e, n) {
        "use strict";
        var r = n("2b0e")
          , i = n("2f62")
          , s = (n("c5f6"),
        n("20d6"),
        n("75fc"))
          , o = n("0bca")
          , a = {
            changememorytop: function(t, e) {
                t.memorytop = e
            },
            updateHasPlay: function(t, e) {
                var n = t.hasPlay;
                t.hasPlay = e,
                e > 0 && n > 0 && o["a"].$emit("changePlayState")
            },
            exisWinFocus: function(t, e) {
                t.isWinFocus = e
            },
            fillusercardinfo: function(t, e) {
                t.usercardinfo = e
            },
            updateusercardremark: function(t, e) {
                t.usercardinfo.remark = e
            },
            changemodalId: function(t, e) {
                t.modalId = e
            },
            fillchatlist: function(t, e) {
                t.chatlist = e
            },
            addchatlist: function(t, e) {
                var n;
                Array.isArray(e) ? (n = t.chatlist).push.apply(n, Object(s["a"])(e)) : t.chatlist.push(e)
            },
            unshiftchatlist: function(t, e) {
                t.chatlist.unshift(e)
            },
            removechatlist: function(t, e) {
                t.chatlist.splice(e, 1)
            },
            removechatlists: function(t, e) {
                var n = e.i
                  , r = e.n;
                t.chatlist.splice(n, r)
            },
            updatechatlist: function(t, e) {
                var n = e.notTop
                  , i = e.i
                  , s = e.param;
                if (s && !s.errorsend && (s.errorsend = !1),
                -1 != i) {
                    var o = t.chatlist[i];
                    if (!(s && s.fileToken && s.errorsend && o && o.fileToken != s.fileToken)) {
                        o.fileToken && !s.errorsend && (o.fileToken = "");
                        var a = "";
                        if (s && o.urlDtails && (o.urlDtails = a),
                        s && s.url_objects && s.url_objects[0] && (s.url_objects[0].object && s.url_objects[0].object.object && s.url_objects[0].object.object.display_name ? a = "[链接]" + s.url_objects[0].object.object.display_name : s.url_objects[0].user && s.url_objects[0].user.screen_name && (a = "[链接]" + s.url_objects[0].user.screen_name),
                        o.urlDtails = a),
                        i) {
                            for (var c in s)
                                o[c] = s[c];
                            n ? r["a"].set(t.chatlist, i, o) : (t.chatlist.splice(i, 1),
                            t.chatlist.unshift(o))
                        } else {
                            for (var u in s)
                                o[u] = s[u];
                            r["a"].set(t.chatlist, i, o)
                        }
                    }
                }
            },
            exchatlistcursor: function(t, e) {
                t.chatlistcursor = e
            },
            exunfollowlistcursor: function(t, e) {
                t.unfollowlistcursor = e
            },
            fillremarklist: function(t, e) {
                Array.isArray(e) ? t.remarklist = e : t.remarklist.push(e)
            },
            updateremarklist: function(t, e) {
                var n = e.i
                  , i = e.remark;
                r["a"].set(t.remarklist[n], "remark", i)
            },
            removeremarklist: function(t, e) {
                t.remarklist.splice(e, 1)
            },
            updateremark: function(t, e) {
                var n = e.i
                  , i = e.remark;
                r["a"].set(t.chatlist[n], "remark", i)
            },
            emptyunread: function(t, e) {
                t.chatlist[e].unread_count && (t.chatlist[e].unread_count = 0)
            },
            emptyunreadId: function(t, e) {
                var n = t.chatlist.findIndex((function(t) {
                    return t.id == e
                }
                ));
                n >= 0 && t.chatlist[n].unread_count && (t.chatlist[n].unread_count = 0)
            },
            emptytopunread: function(t, e) {
                t.topuser[e].unread_count && (t.topuser[e].unread_count = 0)
            },
            extotalChatlist: function(t, e) {
                t.totalChatlist = e
            },
            extotalUnfollowlist: function(t, e) {
                t.totalUnfollowlist = e
            },
            addunfollowlist: function(t, e) {
                var n;
                Array.isArray(e) ? (n = t.unfollowlist).push.apply(n, Object(s["a"])(e)) : t.unfollowlist.push(e);
                this.commit("exunfollowlistcursor", t.unfollowlist.length)
            },
            removeunfollowlists: function(t, e) {
                var n = e.i
                  , r = e.n;
                t.unfollowlist.splice(n, r)
            },
            exallLoaded: function(t, e) {
                t.allLoaded = e
            },
            exallunfollowLoaded: function(t, e) {
                t.allunfollowLoaded = e
            },
            exchatlistcount: function(t, e) {
                t.chatlistcount = e
            },
            exunfollowlistcount: function(t, e) {
                t.unfollowlistcount = e
            },
            fillunfollowlist: function(t, e) {
                Array.isArray(e) ? t.unfollowlist = e : t.unfollowlist.push(e),
                this.commit("exunfollowlistcursor", t.unfollowlist.length)
            },
            unshiftunfollowlist: function(t, e) {
                t.unfollowlist.unshift(e)
            },
            updateunfollowlist: function(t, e) {
                var n = e.notTop
                  , i = e.i
                  , s = e.param;
                if (!(i < 0)) {
                    s && !s.errorsend && (s.errorsend = !1);
                    var o = t.unfollowlist[i];
                    if (!s.fileToken || !s.errorsend || o.fileToken == s.fileToken) {
                        for (var a in o.fileToken && !s.errorsend && (o.fileToken = ""),
                        s)
                            o[a] = s[a];
                        n ? r["a"].set(t.unfollowlist, i, o) : (t.unfollowlist.splice(i, 1),
                        t.unfollowlist.unshift(o))
                    }
                }
            },
            removeunfollowlist: function(t, e) {
                t.unfollowlist.splice(e, 1)
            },
            emptyunfollowlist: function(t) {
                t.unfollowlist = []
            },
            emptypubunread: function(t, e) {
                t.unfollowlist[e].unread_count && (t.unfollowlist[e].unread_count = 0)
            },
            emptypubunreadId: function(t, e) {
                if (t.unfollowlist) {
                    var n = t.unfollowlist.findIndex((function(t) {
                        return t.id == e
                    }
                    ));
                    n >= 0 && t.unfollowlist[n].unread_count && (t.unfollowlist[n].unread_count = 0)
                }
            },
            changefollow: function(t, e) {
                t.followuser = e
            },
            exshowunfollow: function(t, e) {
                t.showunfollow = e
            },
            fillchatrecords: function(t, e) {
                var n = e.value
                  , r = e.more;
                e.reverse;
                if (Array.isArray(n)) {
                    if (r) {
                        var i = n.concat(t.chatrecords);
                        return t.loadmore = !0,
                        void (t.chatrecords = i)
                    }
                    t.chatrecords = n
                } else
                    t.chatrecords.push(n);
                if (t.loadmore = !1,
                t.chatrecords.length > 15) {
                    t.chatrecords.shift(),
                    t.nomorerecords = !1;
                    for (var s = t.lastreadmid, o = !1, a = 0; a < t.chatrecords.length; a++) {
                        var c = t.chatrecords[a];
                        if (c.mid) {
                            o = !0,
                            s = c.mid - 1;
                            break
                        }
                    }
                    t.lastreadmid = o ? s : s + 1
                }
            },
            fillimgurl: function(t, e) {
                Array.isArray(e) && (t.largeimgUrl = e)
            },
            addimgurls: function(t, e) {
                var n = e.value
                  , r = e.more;
                if (r) {
                    try {
                        n = n.filter((function(e) {
                            return !t.largeimgUrl.some((function(t) {
                                return e.mid == t.mid
                            }
                            ))
                        }
                        ))
                    } catch (a) {
                        console.log(a)
                    }
                    var i = n.concat(t.largeimgUrl);
                    t.largeimgUrl = i
                } else {
                    var o;
                    if (Array.isArray(n))
                        (o = t.largeimgUrl).push.apply(o, Object(s["a"])(n));
                    else
                        t.largeimgUrl.push(n)
                }
            },
            removeimgurl: function(t, e) {
                var n = t.largeimgUrl.findIndex((function(t) {
                    return t.mid == e
                }
                ));
                n >= 0 && t.largeimgUrl.splice(n, 1)
            },
            deleteChatRecorder: function(t, e) {
                var n = t.chatrecords.length;
                if (n)
                    for (var r in t.chatrecords)
                        t.chatrecords[n - r - 1].fileToken == e && t.chatrecords.splice(n - r - 1, 1)
            },
            changechatrecorder: function(t, e) {
                var n = e.value
                  , i = e.fileToken
                  , s = e.fileType
                  , o = e.textToken
                  , a = e.toBottom;
                if (o) {
                    var c = t.chatrecords.length;
                    if (!c)
                        return;
                    for (var u in t.chatrecords)
                        if (t.chatrecords[c - u - 1].textToken == o) {
                            var l = t.chatrecords[c - u - 1];
                            for (var d in n)
                                l[d] = n[d];
                            a ? (t.chatrecords.splice(c - u - 1, 1),
                            this.commit("fillchatrecords", {
                                value: l
                            })) : r["a"].set(t.chatrecords, c - u - 1, l)
                        }
                } else if (i) {
                    var f = t.chatrecords.length;
                    if (!f)
                        return;
                    for (var h in t.chatrecords)
                        if (t.chatrecords[f - h - 1].fileToken == i || t.chatrecords[f - h - 1].ft == i) {
                            t.selectId;
                            var m = t.chatrecords[f - h - 1];
                            for (var p in n)
                                m[p] = n[p];
                            if (s || (m.fileToken = ""),
                            !a)
                                return void r["a"].set(t.chatrecords, f - h - 1, m);
                            t.chatrecords.splice(f - h - 1, 1),
                            this.commit("fillchatrecords", {
                                value: m
                            })
                        }
                } else
                    this.commit("fillchatrecords", {
                        value: n
                    }),
                    t.loadmore = !1
            },
            changeimgurl: function(t, e) {},
            replacerecord: function(t, e) {
                var n = e.i
                  , r = e.param
                  , i = t.chatrecords[n];
                for (var s in r)
                    i[s] = r[s];
                t.chatrecords.splice(n, 1, i)
            },
            deleteRecords: function(t, e) {
                o["a"].$emit("destorymsg");
                var n = t.chatrecords.findIndex((function(t) {
                    return Number(t.mid) === e
                }
                ));
                -1 !== n && t.chatrecords.splice(n, 1)
            },
            emptychatrecords: function(t) {
                t.chatrecords = []
            },
            emptylargeimg: function(t) {
                t.largeimgUrl = []
            },
            exnomorerecords: function(t, e) {
                t.nomorerecords = e
            },
            exlastreadmid: function(t, e) {
                t.lastreadmid = e
            },
            selectSession: function(t, e) {
                t.selectId = e
            },
            fillfriendslist: function(t, e) {
                Array.isArray(e) ? t.friendslist = e : t.friendslist.push(e)
            },
            fillfriendsearchlist: function(t, e) {
                t.friendsearchlist = e
            },
            filljoingroups: function(t, e) {
                Array.isArray(e) ? t.joingroups = e : t.joingroups.push(e)
            },
            filljoingroupsearchlist: function(t, e) {
                t.joingroupsearchlist = e
            },
            exsearch: function(t, e) {
                t.search = e
            },
            exsearchfriend: function(t, e) {
                t.searchfriend = e
            },
            exsearchgroup: function(t, e) {
                t.searchgroup = e
            },
            exsearchstate: function(t, e) {
                t.searchstate = e
            },
            exsearchlist: function(t, e) {
                var n = e.contacts
                  , i = e.groups;
                if (n && n.contact_result_list ? r["a"].set(t.searchobj, "contactlist", n.contact_result_list) : r["a"].set(t.searchobj, "contactlist", []),
                i) {
                    var s = [];
                    i.group_result_list && (s = s.concat(i.group_result_list)),
                    i.group_member_result_list && (s = s.concat(i.group_member_result_list)),
                    r["a"].set(t.searchobj, "grouplist", s)
                }
            },
            exquerygroup: function(t, e) {
                t.querygroup = e
            },
            emptyquerygroup: function(t) {
                t.querygroup = null
            },
            flashquerygroup: function(t, e) {
                for (var n in e)
                    n in t.querygroup && n && r["a"].set(t.querygroup, n, e[n])
            },
            exnogroupmodal: function(t, e) {
                t.nogroupmodal = e
            },
            fillgroupmemberset: function(t, e) {
                for (var n in e)
                    n in t.groupmemberset || r["a"].set(t.groupmemberset, n, e[n])
            },
            updategroupmemberset: function(t, e) {
                for (var n in e)
                    n in t.groupmemberset && r["a"].set(t.groupmemberset, n, e[n])
            },
            exprescrollTop: function(t, e) {
                t.prescrollTop = e
            },
            exvoice: function(t, e) {
                t.isopenvoice = e
            },
            exnotif: function(t, e) {
                t.isopenwebnotif = e
            },
            changePubRemindType: function(t, e) {
                t.pubremindtype = e
            },
            filltopuser: function(t, e) {
                t.topuser = e
            },
            addtopuser: function(t, e) {
                var n;
                Array.isArray(e) ? (n = t.topuser).push.apply(n, Object(s["a"])(e)) : t.topuser.push(e)
            },
            removetopuser: function(t, e) {
                t.topuser.splice(e, 1)
            },
            unshifttopuser: function(t, e) {
                t.topuser.unshift(e)
            },
            updatetopuser: function(t, e) {
                var n = e.i
                  , i = e.param;
                if (i && !i.errorsend && (i.errorsend = !1),
                -1 != n) {
                    var s = t.topuser[n];
                    if (!(i && i.fileToken && i.errorsend && s.fileToken != i.fileToken))
                        if (s.fileToken && !i.errorsend && (s.fileToken = ""),
                        n) {
                            for (var o in i)
                                s[o] = i[o];
                            r["a"].set(t.topuser, n, s)
                        } else {
                            for (var a in i)
                                s[a] = i[a];
                            t.topuser[n] = s
                        }
                }
            },
            emptyunreadIdTop: function(t, e) {
                var n = t.topuser.findIndex((function(t) {
                    return t.id == e
                }
                ));
                n >= 0 && t.topuser[n].unread_count && (t.topuser[n].unread_count = 0)
            },
            exqrcode: function(t, e) {
                t.qrcode = e
            },
            emptyqrcode: function(t) {
                t.qrcode = null
            },
            exbulletin: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                t.bulletinrecords = e.map((function(t) {
                    return +t
                }
                ))
            },
            exJoinGroup: function(t, e) {
                t.joinGroup = e
            }
        }
          , c = a
          , u = (new Date,
        {
            selectId: -1,
            isWinFocus: !0,
            usercardinfo: null,
            chatlist: [],
            chatlistcount: 50,
            allLoaded: !1,
            chatlistcursor: 0,
            unfollowlistcursor: 0,
            totalChatlist: 0,
            showunfollow: !1,
            unfollowlist: [],
            unfollowlistcount: 50,
            allunfollowLoaded: !1,
            totalUnfollowlist: 0,
            followuser: !0,
            chatrecords: [],
            nomorerecords: !1,
            lastreadmid: 0,
            loadmore: !1,
            friendslist: [],
            friendsearchlist: [],
            searchfriend: "",
            joingroups: [],
            joingroupsearchlist: [],
            searchgroup: "",
            search: "",
            searchstate: 0,
            searchobj: {},
            querygroup: null,
            nogroupmodal: !1,
            modalId: -1,
            remarklist: [],
            memberinfo: [],
            groupmemberset: {},
            prescrollTop: !0,
            isopenvoice: !1,
            isopenwebnotif: !1,
            pubremindtype: 0,
            topuser: [],
            largeimgUrl: [],
            qrcode: "",
            bulletinrecords: [],
            hasPlay: -1,
            memorytop: 0,
            joinGroup: null
        })
          , l = u
          , d = (n("7514"),
        {
            getuserremark: function(t) {
                return function(e) {
                    var n = t.remarklist.find((function(t) {
                        return t.uid == e
                    }
                    ));
                    return n ? n.remark : ""
                }
            }
        })
          , f = d
          , h = {}
          , m = h;
        r["a"].use(i["a"]);
        var p = new i["a"].Store({
            state: l,
            mutations: c,
            getters: f,
            actions: m
        });
        p.watch((function(t) {
            return t.chatlist
        }
        ), (function(t) {}
        ), {
            deep: !0
        });
        e["a"] = p
    },
    4678: function(t, e, n) {
        var r = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-SG": "cdab",
            "./en-SG.js": "cdab",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };
        function i(t) {
            var e = s(t);
            return n(e)
        }
        function s(t) {
            if (!n.o(r, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return r[t]
        }
        i.keys = function() {
            return Object.keys(r)
        }
        ,
        i.resolve = s,
        t.exports = i,
        i.id = "4678"
    },
    5069: function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "happy-scroll",
                staticClass: "happy-scroll"
            }, [n("div", {
                ref: "container",
                staticClass: "happy-scroll-container",
                style: [t.initSize],
                on: {
                    scroll: function(e) {
                        return e.stopPropagation(),
                        t.onScroll(e)
                    }
                }
            }, [n("div", {
                ref: "content",
                staticClass: "happy-scroll-content"
            }, [t._t("default")], 2)]), t.hideVertical ? t._e() : n("happy-scroll-strip", t._g(t._b({
                ref: "stripY",
                attrs: {
                    throttle: t.throttle,
                    right: t.right,
                    move: t.moveY
                },
                on: {
                    change: t.slideYChange
                }
            }, "happy-scroll-strip", t.$attrs, !1), t.$listeners))], 1)
        }
          , i = []
          , s = (n("c5f6"),
        n("0bca"));
        function o(t, e, n) {
            document.addEventListener ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
        }
        function a(t, e, n) {
            document.addEventListener ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
        }
        var c = function(t) {
            var e = Date.now();
            return function(n) {
                if (n - e > (t || 15))
                    return e = n,
                    !0
            }
        }
          , u = function(t, e, n) {
            var r, i, s, o, a, c = function c() {
                var u = (new Date).getTime() - o;
                u < e && u >= 0 ? r = setTimeout(c, e - u) : (r = null,
                n || (a = t.apply(s, i),
                r || (s = i = null)))
            };
            return function() {
                s = this,
                i = arguments,
                o = (new Date).getTime();
                var u = n && !r;
                return r || (r = setTimeout(c, e)),
                u && (a = t.apply(s, i),
                s = i = null),
                a
            }
        }
          , l = function() {
            var t, e = this, n = e.$createElement, r = e._self._c || n;
            return r("div", {
                ref: "stripContainer",
                staticClass: "happy-scroll-strip happy-scroll-strip--vertical",
                style: [e.initLocation, {
                    right: e.right + "px"
                }],
                on: {
                    "!wheel": function(t) {
                        return t.stopPropagation(),
                        e.handlerWheel(t)
                    }
                }
            }, [r("div", {
                ref: "strip",
                staticClass: "happy-scroll-bar",
                style: [e.translate, (t = {},
                t[e.config.sizeAttr] = e.length + "px",
                t), e.initSize, {
                    background: e.color
                }, {
                    opacity: e.isOpacity
                }],
                on: {
                    mousedown: function(t) {
                        return t.stopPropagation(),
                        e.handlerMouseDown(t)
                    }
                }
            })])
        }
          , d = []
          , f = n("bd86")
          , h = {
            name: "happy-scroll-strip",
            props: {
                right: {},
                horizontal: Boolean,
                left: Boolean,
                top: Boolean,
                move: {
                    type: Number,
                    default: 0
                },
                size: {
                    type: [Number, String],
                    default: 4
                },
                minLengthV: {
                    type: Number,
                    default: 40
                },
                minLengthH: {
                    type: Number,
                    default: 40
                },
                color: {
                    type: String,
                    default: "rgba(51,51,51,0.2)"
                },
                throttle: {
                    type: Number,
                    default: 14
                }
            },
            data: function() {
                return {
                    config: {},
                    startMove: !1,
                    binded: !1,
                    length: 0,
                    percentage: 0,
                    maxOffset: 0,
                    currentOffset: 0,
                    moveThrottle: c(this.throttle)
                }
            },
            watch: {
                currentOffset: function(t) {
                    0 === t ? (this.emitLocationEvent("start", 0),
                    this.$parent && this.$parent.$emit("update:isfirst", !1)) : this.maxOffset - t < 1 && this.emitLocationEvent("end", t / this.percentage)
                }
            },
            computed: {
                initSize: function() {
                    return Object(f["a"])({}, this.horizontal ? "height" : "width", this.size + "px")
                },
                isOpacity: function() {
                    return this.percentage < 1 ? 1 : 0
                },
                translate: function() {
                    var t = this.move * this.percentage;
                    if (this.$refs.stripContainer)
                        return t < 0 && (t = 0),
                        t > this.maxOffset && (t = this.maxOffset),
                        this.currentOffset = t,
                        {
                            transform: "".concat(this.config.translate, "(").concat(t, "px)")
                        }
                },
                initLocation: function() {
                    return this.horizontal ? this.top ? {
                        top: 0,
                        bottom: "auto"
                    } : "" : this.left ? {
                        left: 0,
                        right: "auto"
                    } : ""
                }
            },
            methods: {
                emitLocationEvent: function(t, e) {
                    var n = this.horizontal ? "horizontal" : "vertical";
                    this.$emit("".concat(n, "-").concat(t), e)
                },
                computeStrip: function(t, e) {
                    var n = this.$refs.stripContainer[this.config.client];
                    this.length = n * (e / t);
                    var r = this.horizontal ? this.minLengthH : this.minLengthV;
                    r < 1 && (r *= n),
                    this.length = this.length < r ? r : this.length;
                    var i = this.maxOffset = n - this.length;
                    this.percentage = i / (t - e)
                },
                bindEvents: function() {
                    this.binded || (o(document, "mouseup", this.handlerMouseUp),
                    o(document, "mousemove", this.handlerMove),
                    this.binded = !0)
                },
                handlerMouseDown: function(t) {
                    if (0 === t.button)
                        return t.preventDefault(),
                        t.stopPropagation(),
                        t.stopImmediatePropagation(),
                        this.startMove = !0,
                        this.axis = t[this.config.clientAxis],
                        this.bindEvents(),
                        !1
                },
                handlerMouseUp: function() {
                    this.startMove = !1
                },
                handlerMove: function(t) {
                    if (this.startMove && this.moveThrottle(Date.now())) {
                        t.preventDefault(),
                        t.stopPropagation(),
                        t.stopImmediatePropagation();
                        var e = this.$refs.stripContainer.getBoundingClientRect()
                          , n = this.$refs.strip.getBoundingClientRect()
                          , r = n[this.config.direction] - e[this.config.direction]
                          , i = t[this.config.clientAxis] - this.axis + r;
                        this.axis = t[this.config.clientAxis],
                        this.changeOffset(i)
                    }
                },
                handlerWheel: function(t) {
                    var e = this.$refs.stripContainer.getBoundingClientRect()
                      , n = this.$refs.strip.getBoundingClientRect()
                      , r = n[this.config.direction] - e[this.config.direction]
                      , i = r + t[this.config.wheelDelta];
                    this.changeOffset(i, t)
                },
                changeOffset: function(t, e) {
                    t < 0 && (t = 0),
                    t > this.maxOffset && (t = this.maxOffset),
                    e && t > 0 && t < this.maxOffset && (e.preventDefault(),
                    e.stopImmediatePropagation()),
                    this.currentOffset = t,
                    this.$refs.strip.style.transform = "".concat(this.config.translate, "(").concat(t, "px)"),
                    this.$emit("change", t / this.percentage)
                }
            },
            created: function() {
                var t = {
                    h: {
                        sizeAttr: "width",
                        client: "clientWidth",
                        clientAxis: "clientX",
                        translate: "translateX",
                        direction: "left",
                        wheelDelta: "deltaX"
                    },
                    v: {
                        sizeAttr: "height",
                        client: "clientHeight",
                        clientAxis: "clientY",
                        translate: "translateY",
                        direction: "top",
                        wheelDelta: "deltaY"
                    }
                };
                this.config = this.horizontal ? t["h"] : t["v"]
            },
            destroyed: function() {
                a(document, "mouseup", this.handlerClickUp),
                a(document, "mousemove", this.handlerMove)
            }
        }
          , m = h
          , p = (n("566f"),
        n("2877"))
          , g = Object(p["a"])(m, l, d, !1, null, "7e10bc9a", null)
          , v = g.exports
          , b = n("b35e")
          , y = n("eec4")
          , _ = n.n(y)
          , w = {
            mixins: [b["a"]],
            name: "happy-scroll",
            inheritAttrs: !1,
            components: {
                HappyScrollStrip: v
            },
            props: {
                scrollTop: {
                    type: [Number, String],
                    default: 0
                },
                isfirst: Boolean,
                right: {
                    default: 17
                },
                hideVertical: Boolean,
                throttle: {
                    type: Number,
                    default: 15
                },
                resize: Boolean,
                smallerMoveH: {
                    type: String,
                    default: ""
                },
                biggerMoveH: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    initSize: {
                        height: "0px",
                        width: "0px"
                    },
                    lastHeight: 0,
                    moveY: +this.scrollTop,
                    scrollThrottle: c(this.throttle),
                    timer: null,
                    deleteMsg: !1
                }
            },
            watch: {
                scrollTop: function(t) {
                    this.deleteMsg ? this.deleteMsg = !1 : this.$refs.container.scrollTop = this.moveY = +t
                },
                hideVertical: function(t) {
                    t || this.$nextTick(this.computeStripY)
                }
            },
            computed: {},
            methods: {
                slideYChange: function(t) {
                    this.$refs.container.scrollTop = t,
                    this.$emit("update:scrollTop", this.$refs.container.scrollTop)
                },
                updateSyncScroll: u((function() {
                    this.$emit("update:scrollTop", this.moveY)
                }
                ), 50),
                onScroll: function(t) {
                    if (!this.scrollThrottle(Date.now()))
                        return !1;
                    this.moveY = t.target.scrollTop,
                    this.$emit("scroll", t),
                    this.updateSyncScroll()
                },
                computeStripY: function() {
                    if (!this.hideVertical) {
                        var t = this.$refs["happy-scroll"]
                          , e = this.$slots.default[0]["elm"];
                        this.$refs.stripY && this.$refs.stripY.computeStrip(e.scrollHeight, t.clientHeight)
                    }
                },
                resizeListener: function() {
                    var t = this;
                    if (this.resize) {
                        var e = _()({
                            strategy: "scroll",
                            callOnAdd: !1
                        })
                          , n = this.$slots.default[0]["elm"]
                          , r = n.clientHeight;
                        this.lastHeight = r,
                        e.listenTo(n, (function(e) {
                            var n;
                            t.computeStripY(),
                            e.clientHeight < r && (n = t.smallerMoveH.toLocaleLowerCase()),
                            e.clientHeight > r && (n = t.biggerMoveH.toLocaleLowerCase()),
                            "start" === n && (t.moveY = 0,
                            t.slideYChange(t.moveY)),
                            "end" === n && (t.moveY = e.clientHeight,
                            t.slideYChange(t.moveY)),
                            r = e.clientHeight,
                            t.lastHeight = r,
                            t.isfirst && t.$emit("update:scrollTop", 1e5)
                        }
                        )),
                        e.listenTo(this.$refs["happy-scroll"], (function(e) {
                            t.$parent && t.$parent.$parent && "videoModal" === t.$parent.$parent.$refs.cardcontaininfo.curView && t.isFullscreen() || t.setContainerSize(),
                            t.computeStripY()
                        }
                        ))
                    }
                },
                setContainerSize: function() {
                    var t = this.$refs["happy-scroll"];
                    t && (this.initSize = {
                        width: t.clientWidth + "px",
                        height: t.clientHeight + "px"
                    })
                }
            },
            mounted: function() {
                var t = this;
                s["a"].$on("destorymsg", (function() {
                    t.deleteMsg = !0
                }
                )),
                this.setContainerSize(),
                this.$nextTick((function() {
                    t.computeStripY(),
                    t.$nextTick((function() {
                        t.scrollTop && (t.$refs.container.scrollTop = +t.scrollTop)
                    }
                    )),
                    s["a"].$on("isfirst", (function(e) {
                        t.$emit("update:isfirst", e),
                        t.timer || (t.timer = setTimeout((function() {
                            !e && t.$emit("update:isfirst", !0),
                            t.timer = null
                        }
                        ), 200))
                    }
                    ))
                }
                )),
                this.resizeListener()
            },
            beforeDestroy: function() {
                s["a"].$off("isfirst")
            }
        }
          , x = w
          , j = (n("0e7e"),
        Object(p["a"])(x, r, i, !1, null, "fbe9b84a", null))
          , k = j.exports;
        "undefined" !== typeof window && window.Vue && Vue.component("happy-scroll", k);
        e["a"] = {
            install: function(t) {
                t.component("happy-scroll", k)
            }
        }
    },
    "50c7": function(t, e, n) {
        "use strict";
        var r = n("2db5")
          , i = n.n(r);
        i.a
    },
    "51a4": function(t, e, n) {
        "use strict";
        (function(t) {
            n("20d6"),
            n("386d"),
            n("3b2b"),
            n("96cf");
            var r, i = n("3b8d"), s = (n("7f7f"),
            n("7514"),
            n("4360")), o = n("2b0e"), a = n("bc3a"), c = n.n(a), u = n("fcfc"), l = n("bbd5"), d = n("1dd4"), f = n("365c"), h = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s["a"].state.selectId;
                return t.find((function(t) {
                    return t.id == e
                }
                ))
            }, m = t && Object({
                NODE_ENV: "production",
                BASE_URL: "//conchfairy.sinajs.cn/chat/"
            }) && "production";
            "dev" === m && (r = "http://api.weibo.com/webim/uploadx.json?source=209678993&is_chunk=1");
            var p = function(t, e, n, a, c) {
                var u = {
                    headers: {
                        "Content-Type": ""
                    },
                    url: r || "//api.weibo.com/webim/uploadx.json?source=209678993&is_chunk=1",
                    chunk_size: "256kb",
                    filters: {
                        mime_types: [{
                            title: "files",
                            extensions: n
                        }],
                        max_file_size: e,
                        prevent_duplicates: !1
                    },
                    multipart_params: {
                        source: "209678993",
                        filelength: "",
                        filecheck: "",
                        filetoken: "",
                        startloc: "",
                        selectId: "",
                        percent: ""
                    },
                    init: {
                        PostInit: function() {},
                        FilesAdded: function(e, n) {
                            var r = !1
                              , a = s["a"].state.selectId;
                            if (plupload.each(n, (function(t) {
                                null != t.size && 0 != t.size || (r = !0)
                            }
                            )),
                            r)
                                return plupload.each(n, (function(t) {
                                    p.removeFile(t)
                                }
                                )),
                                void o["a"].prototype.$toast("文件大小不能为0");
                            var c = 0;
                            plupload.each(n, (function(e) {
                                var r = 1;
                                r = s["a"].state.showunfollow ? h(s["a"].state.unfollowlist).type : h(s["a"].state.chatlist) ? h(s["a"].state.chatlist).type : h(s["a"].state.topuser).type;
                                var u = 2 == r ? 3 : 1 == r ? 1 : 2
                                  , m = JSON.stringify({
                                    uploadType: u,
                                    recipientId: a
                                })
                                  , v = !0 === b(e.name, t) ? "dm_attachment_pic" : "dm_attachment_default";
                                if (b(e.name, t) && e.size > 26214400)
                                    o["a"].prototype.$toast("图片不能超过25M");
                                else {
                                    var _ = {
                                        extprops: m,
                                        length: e.size,
                                        name: e.name,
                                        type: v
                                    };
                                    try {
                                        if (!e.getNative())
                                            return void x();
                                        Object(d["b"])(e.getNative()).then((function(t) {
                                            x(t)
                                        }
                                        )).catch((function() {
                                            x()
                                        }
                                        ))
                                    } catch (k) {
                                        x()
                                    }
                                }
                                function x(t) {
                                    return j.apply(this, arguments)
                                }
                                function j() {
                                    return j = Object(i["a"])(regeneratorRuntime.mark((function i(u) {
                                        var d, h;
                                        return regeneratorRuntime.wrap((function(i) {
                                            while (1)
                                                switch (i.prev = i.next) {
                                                case 0:
                                                    return u && (_.md5 = u,
                                                    _.check = u),
                                                    i.next = 3,
                                                    y(e);
                                                case 3:
                                                    if (!i.sent) {
                                                        i.next = 22;
                                                        break
                                                    }
                                                    return i.next = 6,
                                                    Object(l["i"])(e, 0);
                                                case 6:
                                                    if (d = i.sent,
                                                    !(d.videotime >= 300)) {
                                                        i.next = 10;
                                                        break
                                                    }
                                                    return o["a"].prototype.$toast("视频不能大于 5 分钟"),
                                                    i.abrupt("return");
                                                case 10:
                                                    if (!(e.size >= 104857600)) {
                                                        i.next = 13;
                                                        break
                                                    }
                                                    return o["a"].prototype.$toast("视频不能大于 100 M"),
                                                    i.abrupt("return");
                                                case 13:
                                                    g(d, e),
                                                    h = {
                                                        togid: 1 !== r ? s["a"].state.selectId : 0,
                                                        touid: 1 === r ? s["a"].state.selectId : 0,
                                                        gid: 0
                                                    },
                                                    _.type = "dm_attachment_video",
                                                    e.isScreenshot = "data:," === d.screenshot ? 1 : 0,
                                                    _.mediaprops = JSON.stringify({
                                                        raw_md5: u,
                                                        video_type: "dm_video",
                                                        screenshot: e.isScreenshot,
                                                        width: d.width,
                                                        height: d.height,
                                                        duration: d.videotime,
                                                        dm_video_props: h
                                                    }),
                                                    e.params = _,
                                                    f["a"].uploadVideoInit(_).then((function(r) {
                                                        if (e.params.auth = r.auth,
                                                        !r.error) {
                                                            e.fileToken = r.fileToken,
                                                            e.chunk_size = r.length,
                                                            e.startloc = 0;
                                                            var i = w(e.fileToken, e.name, e.size, e, t, a, d);
                                                            e.msg = i,
                                                            c++,
                                                            c == n.length && p.start()
                                                        }
                                                    }
                                                    )),
                                                    i.next = 23;
                                                    break;
                                                case 22:
                                                    f["a"].initfile(_).then((function(r) {
                                                        if (!r.error) {
                                                            e.fileToken = r.fileToken,
                                                            e.chunk_size = r.length,
                                                            e.startloc = 0;
                                                            var i = w(e.fileToken, e.name, e.size, e, t, a, d);
                                                            e.msg = i,
                                                            c++,
                                                            c == n.length && p.start()
                                                        }
                                                    }
                                                    ));
                                                case 23:
                                                case "end":
                                                    return i.stop()
                                                }
                                        }
                                        ), i)
                                    }
                                    ))),
                                    j.apply(this, arguments)
                                }
                            }
                            ))
                        },
                        BeforeUpload: function(t, e) {
                            "dev" === m && (r = "http://api.weibo.com/webim/uploadx.json?source=209678993&is_chunk=1");
                            var n = r || "//api.weibo.com/webim/uploadx.json?source=209678993&is_chunk=1";
                            if (p.setOption("url", n),
                            p.setOption("chunk_size", e.chunk_size + "kb"),
                            p.settings.multipart_params["filetoken"] = e.fileToken,
                            p.settings.multipart_params["startloc"] = e.startloc,
                            p.settings.multipart_params["selectId"] = e.selectId,
                            e.params && "dm_attachment_video" === e.params.type) {
                                if (p.setOption("url", "https://up.video.weibocdn.com/2/multimedia/upload.json"),
                                p.settings.headers = {
                                    "X-Up-Auth": e.params.auth
                                },
                                p.settings.multipart = !1,
                                p.settings.multipart_params["check"] = e.params.check,
                                e.params)
                                    for (var i = 1024 * e.chunk_size, s = Math.ceil(e.size / i), o = function(n) {
                                        e.chunckNum = 0,
                                        e.chunksArr = [];
                                        var r = n * i
                                          , s = r + i >= e.size ? e.size : r + i;
                                        Object(d["a"])(e.getNative(), r, s).then((function(r) {
                                            e.chunksArr[n] = r,
                                            0 === n && (p.settings.multipart_params["sectioncheck"] = e.chunksArr[0],
                                            e.status = plupload.UPLOADING,
                                            t.trigger("UploadFile", e))
                                        }
                                        ))
                                    }, a = 0; a < s; a++)
                                        o(a);
                                return !1
                            }
                            p.settings.multipart = !0,
                            p.settings.headers = null
                        },
                        UploadProgress: function(e, n) {
                            b(n.name, t) || v(n.percent, n.fileToken, n.selectId)
                        },
                        ChunkUploaded: function(t, e, n) {
                            e.startloc = n.offset,
                            p.settings.multipart_params["startloc"] = e.startloc,
                            e.params && "dm_attachment_video" === e.params.type && (e.chunckNum++,
                            p.settings.multipart_params["sectioncheck"] = e.chunksArr[e.chunckNum])
                        },
                        Error: function(n, r) {
                            if (null != r.file) {
                                if (-600 == r.code) {
                                    var i = t.indexOf("image") >= 0 ? "图片" : "附件";
                                    return o["a"].prototype.$toast(i + "不能超过" + e),
                                    !1
                                }
                                if (-200 == r.code)
                                    return r.isimgfile = b(r.file.name, t),
                                    o["a"].prototype.$toast(r.isimgfile ? "图片上传失败" : "文件上传失败"),
                                    c(n, r),
                                    !1;
                                r.file.msg
                            }
                        },
                        FileUploaded: function(e, n, r) {
                            n.isFile = !b(n.name, t),
                            a(r.response, n)
                        }
                    }
                };
                "drag-area" !== t ? u.browse_button = t : u.drop_element = t;
                var p = new plupload.Uploader(u);
                return p.init(),
                p
            };
            function g(t, e) {
                var n = Object(l["c"])(t.screenshot)
                  , r = s["a"].state.selectId
                  , i = "/webim/uploadx.json?source=209678993";
                i += (r + "").length >= 15 ? "&gid=" + r : "&uid=" + r;
                var o = document.forms[0]
                  , a = new FormData(o);
                a.append("imageName", n),
                c.a.post(i, a).then((function(t) {
                    e.fid = t.data.fid
                }
                ))
            }
            function v(t, e, n) {
                n == s["a"].state.selectId && s["a"].commit("changechatrecorder", {
                    value: {
                        percent: t
                    },
                    fileToken: e,
                    fileType: 2
                })
            }
            function b(t, e) {
                var n = new RegExp(".(jpeg|gif|png|jpg)$","i");
                return t.search(n) >= 0 || e.indexOf("image") >= 0
            }
            function y(t) {
                return _.apply(this, arguments)
            }
            function _() {
                return _ = Object(i["a"])(regeneratorRuntime.mark((function t(e) {
                    var n, r, i, s;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                if (n = new RegExp(".(mp4)$","i"),
                                !(e.name.search(n) >= 0)) {
                                    t.next = 9;
                                    break
                                }
                                return r = e.getNative(),
                                i = new FileReader,
                                t.next = 6,
                                Object(l["g"])(i, r);
                            case 6:
                                if (s = t.sent,
                                "00020" !== s && "00018" !== s && "0001c" !== s) {
                                    t.next = 9;
                                    break
                                }
                                return t.abrupt("return", !0);
                            case 9:
                                return t.abrupt("return", !1);
                            case 10:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                _.apply(this, arguments)
            }
            function w(t, e, n, r, i, s, o) {
                return x.apply(this, arguments)
            }
            function x() {
                return x = Object(i["a"])(regeneratorRuntime.mark((function t(e, n, r, i, o, a, c) {
                    var d, f, h, m, p, g, v;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                d = 1,
                                i.selectId = a,
                                b(n, o) || (d = 2),
                                c && (d = 3),
                                f = {
                                    value: {
                                        created_at: (new Date).getTime(),
                                        ft: e,
                                        direct: "right",
                                        media_type: 0,
                                        msg_status: 0,
                                        sender_id: u["f"].basicinfo.id,
                                        file: i,
                                        feTag: Object(l["l"])(16),
                                        fileToken: e,
                                        filetype: d
                                    }
                                },
                                1 == d ? (f.value.cardtype = "card5",
                                h = i.getNative(),
                                m = new FileReader,
                                null !== h && h.type ? (m.onload = function(t) {
                                    f.value.imgurl = this.result,
                                    f.value.text = "[图片]",
                                    a == s["a"].state.selectId && s["a"].commit("fillchatrecords", f),
                                    j(f, e, a)
                                }
                                ,
                                m.readAsDataURL(h)) : (f.value.cardtype = "card6",
                                f.value.text = "[图片]",
                                p = {
                                    extension: Object(l["f"])(i.name),
                                    filename: i.name,
                                    filesize: i.size,
                                    percent: 0
                                },
                                Object.assign(p, f.value),
                                a == s["a"].state.selectId && s["a"].commit("fillchatrecords", {
                                    value: p
                                }),
                                j(f, e, a))) : 2 === d ? (f.value.cardtype = "card6",
                                f.value.text = "[文件]",
                                g = {
                                    extension: Object(l["f"])(i.name),
                                    filename: i.name,
                                    filesize: i.size,
                                    percent: 0
                                },
                                Object.assign(g, f.value),
                                a == s["a"].state.selectId && s["a"].commit("fillchatrecords", {
                                    value: g
                                }),
                                j(f, e, a)) : (f.value.cardtype = "card10",
                                f.value.text = "[视频]",
                                f.value.percent = 0,
                                v = {
                                    extension: Object(l["f"])(i.name),
                                    filename: i.name,
                                    filesize: i.size,
                                    videoUrl: c.url,
                                    videosize: [c.width, c.height],
                                    videotime: Math.floor(c.videotime),
                                    percent: 0,
                                    screenshot: c.screenshot,
                                    upload: !0
                                },
                                Object.assign(v, f.value),
                                a == s["a"].state.selectId && s["a"].commit("fillchatrecords", {
                                    value: v
                                }),
                                j(f, e, a));
                            case 6:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                x.apply(this, arguments)
            }
            function j(t, e, n) {
                var r = {
                    created_at: t.value.created_at,
                    text: t.value.text,
                    fileToken: e,
                    errorsend: !1
                };
                if (O(n)) {
                    var i = "chatlist"
                      , o = k(s["a"].state.chatlist, n);
                    o < 0 && (i = "topuser",
                    o = k(s["a"].state.topuser, n));
                    var a = {
                        sender_id: t.value.sender_id,
                        sender_screen_name: u["f"].basicinfo.name
                    };
                    Object.assign(a, r),
                    s["a"].commit("update" + i, {
                        i: o,
                        param: a
                    })
                } else {
                    var c = "chatlist"
                      , l = -1;
                    s["a"].state.showunfollow ? (l = k(s["a"].state.unfollowlist, n),
                    c = "unfollowlist") : (l = k(s["a"].state.chatlist, n),
                    l < 0 && (c = "topuser",
                    l = k(s["a"].state.topuser, n))),
                    s["a"].commit("update" + c, {
                        i: l,
                        param: r
                    })
                }
            }
            function k(t, e) {
                return t.findIndex((function(t) {
                    return t.id == e
                }
                ))
            }
            function O(t) {
                var e = t + "";
                return !(e.length < 15)
            }
            e["a"] = p
        }
        ).call(this, n("2820"))
    },
    "566f": function(t, e, n) {
        "use strict";
        var r = n("3634")
          , i = n.n(r);
        i.a
    },
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            n("a481"),
            n("cadf"),
            n("551c"),
            n("f751"),
            n("097d");
            var e = n("2b0e")
              , r = (n("54ba"),
            n("3dfd"))
              , i = n("8c4f")
              , s = n("a18c")
              , o = n("4360")
              , a = (n("f524"),
            n("3da8"),
            n("23be"),
            n("f60d"),
            n("bc3a"))
              , c = n.n(a)
              , u = n("e80e")
              , l = n("3003")
              , d = n("4eb5")
              , f = n.n(d)
              , h = n("5069")
              , m = n("f814")
              , p = n("e9c5")
              , g = n("f135")
              , v = t && Object({
                NODE_ENV: "production",
                BASE_URL: "//conchfairy.sinajs.cn/chat/"
            }) && "production";
            if (-1 === ["test", "dev"].indexOf(v)) {
                0 == window.location.href.indexOf("http://api.weibo.com") && (window.location.href = window.location.href.replace("http://", "https://"));
                try {
                    window.console.log = function() {}
                } catch (y) {}
            }
            e["a"].config.productionTip = !1,
            e["a"].config.performance = !0,
            e["a"].directive("focus", {
                inserted: function(t) {
                    t.focus()
                }
            }),
            e["a"].prototype.$https = c.a,
            f.a.config.autoSetContainer = !0,
            e["a"].use(f.a),
            e["a"].use(i["a"]),
            e["a"].use(l["a"]),
            e["a"].use(h["a"]),
            e["a"].use(m["a"]),
            e["a"].use(p["a"]),
            e["a"].use(g["a"]),
            Object(u["a"])();
            var b = new i["a"]({
                mode: "hash",
                routes: s["a"]
            });
            new e["a"]({
                router: b,
                store: o["a"],
                render: function(t) {
                    return t(r["a"])
                }
            }).$mount("#app"),
            document.addEventListener("dragleave", (function(t) {
                t.preventDefault()
            }
            ), !1),
            document.addEventListener("drop", (function(t) {
                t.preventDefault()
            }
            ), !1),
            document.addEventListener("dragenter", (function(t) {
                t.preventDefault()
            }
            ), !1),
            document.addEventListener("dragover", (function(t) {
                t.preventDefault()
            }
            ), !1)
        }
        .call(this, n("2820"))
    },
    5894: function(t, e, n) {},
    "5c48": function(t, e, n) {},
    "5fa9": function(t, e, n) {},
    6008: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEL0lEQVRoQ+2aTWgdVRTH///JK7RCsRQrKl0ILtRSEKnNTFLQKjRKC/0g4s6PduPOhSnWjyZzJ7HWj6ZLdSFIuxFE22ah2EZRsTUzxm4UrIi6UrREVBSNop2/zEv6mvfy5r2Z9+40ycPZvnP+5/zeuXfuvecO0SEPO4QD/4PUVlLm+uXAmm6g63ZAPSA2Abyyyk76FWAIxB8BOo3Vv0R85Ou/bYyKtisi030X6OyB0A9iec6kpgEcg/AKTfhBTt8q85ZBNOxtQqxDIL12Eqj4SiEc7uVQeKYVvdwgGtlwA+LSKMAdrQRs7qMxOP8OcPDsN81tL1nkApHv3QfqVZBX5AmS21b6E+JuBuHrWX0zgyjwDAA/q7AVO2mYJsoUMxOIjPcciMesJJdXRHieJtzXzK0piAJ3EOBwM6FCfxcGacKnG8VoCKKgexfgHCs0ycziupd+9GaaeSqIjLsW5BcAVmaOVc9QOgTwLSDuBZ0DbWj9DmkdTfRdPY10kMB9B+DdbQSecS39cx2fOvuDzIabwGXn2tPTSfrRPZlBZLp3gs7x9oLOeuvCtTSTP9oBAaB4F80nJ2pzq1sRGe9zEOsXJ4g+o4luaQoi420G8b4ViETEdkXKmrizdm82ryIK3KMA71/cIDpKEz04N8cqEB3uWYHf9HMLu9h07iIqAv2Blc4aPjqR7J7LTzVI4G4BeMpaNYoaWjPDawtN+G4ayDMAn1gSINBB+tGT9UGMOwZy+xIBGaMf7UypiJes5DcvDRCcox+uS6vIFMirlgjIFP3w6hQQb9rqG6vIyQ5M0w8rB7zqt5bpHJDzICrlsjLECllHyqU+Tz+65vJP9pHbbkRc+tLKnzMj0nCyd8jr17gHQT5u8V8DuriW+ye+n23kvWdNW3qWJqos3tWT3Xf74PCktWBlIb0G8CsAyUJ7qz1t9dGPxuvPkSI2jfYyv6Qk/IXVP62a2zeev4037hGQDxQR36LmEfrhQ3P15oMM99wBqa2GciWAFIN4CcA4hO0g91iBITdzaOLDhiDlUW3tqFu9Q5XxDoCo7FhbgpI+pYk21vqmnNktNR9i9TCIwotB5btb4SStoTaePM2HclVstINiDDAID1dAAvdlgA+3jqFx+lFfPf9iG3TJHAFfBJWc5HYA3N0yRHLbVXLWJ2tSLpDZqvQDfKPl4DYdY21jEL2dJpmhie0lbf3kSmHhHsmniRo20puCzLzF3BdA7l0YEo3Sj5rGzgQyCzMCcv/lhdEI/WgoS8zMIGWYTrh6q7xCk8vQC6XkNrfSwcjyj2W2kU4A8QDN5LeZfWobdHkcZTb2As6oxevp00C8j2by4zx5XLTNNbTqBSifM5L1gewHsCJXEsntLXl8QT8YqE246hMOohdQb8NPOJyuM1g1FS6aTzhyVaBA47aHVoG55ZLuGJD/AOcx4UIarUAaAAAAAElFTkSuQmCC"
    },
    6044: function(t, e, n) {},
    "681c": function(t, e, n) {},
    "6e34": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAGqklEQVRoQ+WabYxU5RXH//87szOCClp8i6DRCrhzBxog8W0FpNKWLssdQWK0NKlR2n5pfUnUsDP7ZWJghiWgJlYTsR/aNG2t2BrmwlIsISu4sDRiCWVm2CzUvqTYFKNhXdSZ3bnHPLPOMLs7O/femZ3R6Hzbvef8z/k9L/d5nnMf4ivyYz04Hulv9U8b8i7MUS4iKGJxYNjv+e/Wm14/C0LqEXNSQKLJFd/Iak3fF0u7A5DbQC4i4BmXsCALynsA/wXIURI9Q+QbW5oTH9UKVxNIOB26FyLrKfgeSG81yQgkA3A3mdseC+zeW42G8qkKpP2kcTctPkdgfrWBy/tJLy15bNO8XX91q+sKJNrfOi075N0G8MduA7mwtyDo9E0deDp6Y/enTv0cg3SkQksF8juAM52K12Yn/Zbw/s3BxN+c6DgCiSRDD4N4GYDmRHSybPLzh1wXDyT+ZKdpCxJJhp4AsdVOqF7PBSIgH4oHEr+uFKMiSHtq1f0atFfqlaRTXQFyBFpjeuIvE/lMCBJJGYtE2EuiyWnAetoJ8JFYWLR5XuJUuThlQTac/s50LTM1ReDaeibnVltETg76hhc8P2dPZqxvWZBwKvQrAg+6DdQYe+mM6Wa7LUh7n3GLlqPrBakxEFBTf0gE+tghNq5HIsnQfhDfblRi1cQRyO/jurmu1HcUSEfKuF3Aw9WIN9jH0mA1b9R39RfijgIJp0J/JHBvg5MqhhPBM6JZJsE1FD5aOQ95MaabPxsHEk6vmUHJ/b/Rq3chEaFsjQfMpwp/h1OhPgJzJ4IRkfODvuEZhTdYsUfCKWM9wV9+Eb0hgl/Eg4lHSmNHUqGTAG62yWdVTE/sVjZFkEjS+K3a1zQaRICX43rip6VxwyljNcHXbXMR2RYLmk+OBkkZ/wB4o63zJBoI5DfxgPlg6fF35KyDLoJ+u1ACORzXzZYiSDR5ny/LzLjV0k6olucC+YM/YK6LElZBpyNpLLaIfU4gRnzk/ZhuXlkEiaTa5gGev9eSmBtfgXSdClwU2sEduVIIAfaCnOpGy9c0ND06Z89Afo6olhDyoBMBAfZR0APKGoDfcuJTaqP8/eJviwZ3ZItvqOQ9txHWfrcQyl/T5Jsbm8138yCRpNEKsstBUn2+wMC8KLuHo8lll2Q47QCBhQ78CiYHfFMGVpQeYcN5CNkH4hIXOhdMZXhhLNh1bAQk3bYC4vmznZAaEnHdbCvYfb5LPuisCCG9vsuwPHqt+XHBXx0VIHyzaoj8NCkBCZ8M3UkLbzkAyWjAsk262VuwVTWtDP3dlWAEOOqXgWXRYPdgKYSA+wlMt4tb6bkGa67aquR7JJxeOZfi7XMiKMA5Qu6O6eY7o2Dg6yHZPF5Djuf8nyztvGnfuWJPpu+Zr4monqwJIt8hTUNXxefsOZsHicoybzY9bcgJSN4ZOGeRSzoDO4tvunB/65XINh0iMbtkAPf7JHt7NLj3g+LE7jOaMYxDJC93Gm9CO8FgLJi4VD2/sLK7XBBF5ENL0+4qhXkqufIaL7wHFYwA/yQyLTF973ujIHI4QDD/7q/9J70x3bxjNEgVWxQFAy9a4jebal+U/+Vh6H1V8/GHm2bv/E/h/+0nQrOpyaHJg1BDo8wWJZwO/YSC7W5bSSBn4cHSUpixGnkIykGS17jVr2QvFCMeMHeN6pFon3FFZphnqqmaKBix2FKuwtGeXn0DrdzhSYcAzg02DV09bhuvqCJJ4zWQa6tpNRH5nwiXlMKMQFhqzsyqRtPG54WYnvh5wWb0UTfd1iLi6ak2qILx+IYXb5yz5/SGpHG9BvbUCaLyUVcBhFNGN8G7aoD5EMRxAkGAV1SrY+P3SkxP/KDUpkwVZeUC0OuoAl6nJCvKqnKQBZndGTT/XREkP1dSIVUw/tEXkahdTAG2xPXEhrF2ZSuN0XdXX5b9JHeicd9C7NIfee66ZKqcOk6sutXSqFZh2yOnszRqs6qqiF0I2ZE21orwtdpSqN1bfVYAZXk8YL45kdrX40NPgV5tXyDyEkFb8Nrb/4KCekNBwwOT8untwjBTi6X2auNeANKfo7a2dHddqZFctfDI0XbKNoLrJ7Plx2jV9/N0abBIctVyofass7O6G2TpFdEejwd3HnHjpWxd9chYcXWFg5aoywPfreUKB8EuMPdSw69wjAVSBYhPNd8KWmwhsUhEZoGcWe5iTX4CU94GcEQj3vpSXKqp1P1RgXY+tfIqj9dzHSy5OG+r8fwHc88c286jjusDTodYTUPLaZBG2H0GygWtUZOEglwAAAAASUVORK5CYII="
    },
    "6eff": function(t, e, n) {},
    "72b1": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return c
        }
        ));
        var r = n("768b")
          , i = (n("4917"),
        n("3b2b"),
        n("a481"),
        n("96cf"),
        n("3b8d"))
          , s = n("365c")
          , o = n("4360")
          , a = n("bbd5");
        function c(t, e) {
            return u.apply(this, arguments)
        }
        function u() {
            return u = Object(i["a"])(regeneratorRuntime.mark((function t(e, n) {
                var r, i, s, o, a, c, u, l, d, h;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            if (r = {},
                            console.log(e),
                            !e.fid) {
                                t.next = 11;
                                break
                            }
                            return e.fid,
                            t.next = 6,
                            x(e);
                        case 6:
                            return i = t.sent,
                            n && n(i),
                            t.abrupt("return", i);
                        case 11:
                            if (!e.pic_gifs) {
                                t.next = 17;
                                break
                            }
                            return r.cardtype = "card11",
                            n && n(r),
                            t.abrupt("return", r);
                        case 17:
                            if (!e.url_short) {
                                t.next = 44;
                                break
                            }
                            if (!e.cardtitle) {
                                t.next = 24;
                                break
                            }
                            return r.cardtype = "card2",
                            n && n(r),
                            t.abrupt("return", r);
                        case 24:
                            if (!e.url_objects) {
                                t.next = 31;
                                break
                            }
                            if (!e.url_objects.length) {
                                t.next = 30;
                                break
                            }
                            return t.next = 28,
                            f(e.url_objects[0]);
                        case 28:
                            s = t.sent,
                            Object.assign(r, s);
                        case 30:
                            r.cardtype || (o = m(e),
                            Object.assign(r, o));
                        case 31:
                            if (r.cardtype) {
                                t.next = 40;
                                break
                            }
                            return t.next = 34,
                            p(e);
                        case 34:
                            return a = t.sent,
                            Object.assign(r, a),
                            n && n(r),
                            t.abrupt("return", r);
                        case 40:
                            return n && n(r),
                            t.abrupt("return", r);
                        case 42:
                            t.next = 62;
                            break;
                        case 44:
                            if (c = /(^\s+)|([\s\r\n]+$)/,
                            u = e.text.replace(c, ""),
                            l = /^(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/g,
                            d = new RegExp(l),
                            !d.test(u)) {
                                t.next = 59;
                                break
                            }
                            return u = u.match(l)[0],
                            e.url_short = u,
                            t.next = 53,
                            p(e);
                        case 53:
                            return h = t.sent,
                            Object.assign(r, h),
                            n && n(r),
                            t.abrupt("return", r);
                        case 59:
                            return r.cardtype = "card1",
                            n && n(r),
                            t.abrupt("return", r);
                        case 62:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            u.apply(this, arguments)
        }
        function l(t, e) {
            return d.apply(this, arguments)
        }
        function d() {
            return d = Object(i["a"])(regeneratorRuntime.mark((function t(e, n) {
                var r, i, s, o, c, u, l, d;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            if (r = {},
                            !e.annotations || !e.annotations.length) {
                                t.next = 37;
                                break
                            }
                            return i = e.annotations[0],
                            e.url_short && (i.url_short = e.url_short),
                            t.next = 6,
                            f(i);
                        case 6:
                            if (s = t.sent,
                            Object.assign(r, s),
                            !r.cardtype) {
                                t.next = 10;
                                break
                            }
                            return t.abrupt("return", r);
                        case 10:
                            if (i.object_type) {
                                t.next = 13;
                                break
                            }
                            return r.cardtype = "card1",
                            t.abrupt("return", r);
                        case 13:
                            if ("product" != i.object_type) {
                                t.next = 20;
                                break
                            }
                            return i.object.custom_data && i.object.custom_data.title ? r.custom_data = i.object.custom_data : r.custom_data = {
                                title: i.object.display_name,
                                img: Object(a["b"])(Object(a["n"])(i, "object.image.url")),
                                discount: i.object.custom_data.discount || "",
                                cost: i.object.custom_data.cost || ""
                            },
                            r.url = i.object.url,
                            r.cardtype = "card3",
                            t.abrupt("return", r);
                        case 20:
                            if ("priMessage" != i.object_type) {
                                t.next = 29;
                                break
                            }
                            return r.cardtitle = i.object.display_name,
                            r.desc = i.object.content_template,
                            r.ctdata = i.object.content_data,
                            r.linkurl = i.object.url,
                            r.cardtype = "card8",
                            t.abrupt("return", r);
                        case 29:
                            return r.cardtitle = i.object.display_name,
                            r.desc = i.object.summary,
                            r.thumbnail_pic = Object(a["b"])(Object(a["n"])(i, "object.image.url")),
                            o = w(i.object.url),
                            o ? (r.linkurl = i.object.url,
                            r.cardtype = "card7") : (r.linkurl = i.object.url,
                            r.cardtype = "card2"),
                            t.abrupt("return", r);
                        case 35:
                            t.next = 56;
                            break;
                        case 37:
                            if (n) {
                                t.next = 41;
                                break
                            }
                            return t.abrupt("return");
                        case 41:
                            if (!n.sender_id) {
                                t.next = 50;
                                break
                            }
                            return t.next = 44,
                            y(n.mid);
                        case 44:
                            return c = t.sent,
                            c && (u = m(c),
                            "{}" != JSON.stringify(u) && u.cardtitle && (Object.assign(r, u),
                            r.cardtype = "card2")),
                            r.cardtype || (r.cardtype = "card1"),
                            t.abrupt("return", r);
                        case 50:
                            return t.next = 52,
                            v(n.mid);
                        case 52:
                            return l = t.sent,
                            l && (d = m(l),
                            "{}" != JSON.stringify(d) && d.cardtitle && (Object.assign(r, d),
                            r.cardtype = "card2")),
                            r.cardtype || (r.cardtype = "card1"),
                            t.abrupt("return", r);
                        case 56:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            d.apply(this, arguments)
        }
        function f(t) {
            return h.apply(this, arguments)
        }
        function h() {
            return h = Object(i["a"])(regeneratorRuntime.mark((function t(e) {
                var n, r, i, o, c, u, l, d;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            if (n = {},
                            r = Object(a["n"])(e, "info.url_short"),
                            r && (n.url_short = r),
                            e.url_short && (n.url_short = e.url_short),
                            "collection" != Object(a["n"])(e, "object.object_type") || !Object(a["n"])(e, "object.object.pic_ids.length") && !Object(a["n"])(e, "object.pic_ids.length")) {
                                t.next = 22;
                                break
                            }
                            if (!Object(a["n"])(e, "object.object.gif_name")) {
                                t.next = 9;
                                break
                            }
                            i = e.object.object,
                            o = i.gif_name,
                            i.url,
                            c = i.pic_ids,
                            t.next = 14;
                            break;
                        case 9:
                            if (!Object(a["n"])(e, "object.gif_name")) {
                                t.next = 13;
                                break
                            }
                            u = e.object,
                            o = u.gif_name,
                            u.url,
                            c = u.pic_ids,
                            t.next = 14;
                            break;
                        case 13:
                            return t.abrupt("return", n);
                        case 14:
                            return n.linkurl = n.url_short,
                            n.gif_name = o,
                            n.cardtype = "card9",
                            l = {
                                params: {
                                    pids: c[0]
                                }
                            },
                            t.next = 20,
                            s["a"].picinfos(l);
                        case 20:
                            d = t.sent,
                            n.imgurl = Object(a["b"])(d[c[0]]);
                        case 22:
                            return t.abrupt("return", n);
                        case 23:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            h.apply(this, arguments)
        }
        function m(t) {
            var e = {};
            if (t.url_objects && t.url_objects[0]) {
                var n = t.url_objects[0];
                if (e.url_short = n.info.url_short,
                n.status) {
                    var r = n.status;
                    e.cardtitle = Object(a["n"])(r, "user.screen_name"),
                    e.desc = r.text,
                    e.thumbnail_pic = Object(a["b"])(r.thumbnail_pic),
                    e.linkurl = n.info.url_short,
                    e.cardtype = "card2"
                } else if (n.user) {
                    var i = n.user;
                    e.cardtitle = i.screen_name,
                    e.desc = i.verified_reason || i.description,
                    e.thumbnail_pic = Object(a["b"])(i.profile_image_url),
                    e.linkurl = "//weibo.com/" + i.profile_url,
                    e.cardtype = "card2"
                }
            }
            return e
        }
        function p(t) {
            return g.apply(this, arguments)
        }
        function g() {
            return g = Object(i["a"])(regeneratorRuntime.mark((function t(e) {
                var n, r, i, o, a;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            return {},
                            n = e.url_short,
                            t.next = 4,
                            s["a"].cardshow({
                                params: {
                                    url_short: n
                                }
                            });
                        case 4:
                            if (r = t.sent,
                            !r) {
                                t.next = 14;
                                break
                            }
                            return i = {},
                            r.urls && r.urls.length && (i = r.urls[0]),
                            t.next = 10,
                            l(i, e);
                        case 10:
                            return o = t.sent,
                            t.abrupt("return", o);
                        case 14:
                            return a = {
                                cardtype: "card1"
                            },
                            t.abrupt("return", a);
                        case 16:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            g.apply(this, arguments)
        }
        function v(t) {
            return b.apply(this, arguments)
        }
        function b() {
            return b = Object(i["a"])(regeneratorRuntime.mark((function t(e) {
                var n, r;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            if (n = {
                                params: {
                                    mid: e,
                                    id: o["a"].state.selectId
                                }
                            },
                            r = s["a"].getlastgroupmsg(n),
                            !r.error && r && r.message) {
                                t.next = 4;
                                break
                            }
                            return t.abrupt("return");
                        case 4:
                            return t.abrupt("return", r.message);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            b.apply(this, arguments)
        }
        function y(t) {
            return _.apply(this, arguments)
        }
        function _() {
            return _ = Object(i["a"])(regeneratorRuntime.mark((function t(e) {
                var n;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            s["a"].showbatch({
                                params: {
                                    dmids: e
                                }
                            });
                        case 2:
                            if (n = t.sent,
                            !n.error && n && n.length) {
                                t.next = 5;
                                break
                            }
                            return t.abrupt("return");
                        case 5:
                            return t.abrupt("return", n[0]);
                        case 6:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            _.apply(this, arguments)
        }
        function w(t) {
            return !!(t && t.indexOf("hongbao.weibo.com") >= 0)
        }
        function x(t) {
            return j.apply(this, arguments)
        }
        function j() {
            return j = Object(i["a"])(regeneratorRuntime.mark((function t(e) {
                var n, i, o, a, c, u, l, d, f, h, m, p, g, v, b;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            return n = e.fid,
                            i = !1,
                            o = {},
                            a = {
                                fid: n,
                                replace: i
                            },
                            t.next = 6,
                            s["b"].metaquery(a);
                        case 6:
                            if (c = t.sent,
                            !c) {
                                t.next = 17;
                                break
                            }
                            if (i = a.replace = c.extension && "mp4" === c.extension,
                            !i) {
                                t.next = 13;
                                break
                            }
                            return t.next = 12,
                            s["b"].metaquery(a);
                        case 12:
                            c = t.sent;
                        case 13:
                            o.querydata = c,
                            "amr" === c.extension ? o.cardtype = "card4" : null != c.thumbnail_240 ? (o.cardtype = "card5",
                            u = c.thumbnail_240.match(/(\d+),(\d+)/),
                            l = Object(r["a"])(u, 3),
                            l[0],
                            d = l[1],
                            f = l[2],
                            o.cardSize = {
                                width: d,
                                height: f
                            }) : "mp4" === c.extension && c.videosize ? o.cardtype = "card10" : o.cardtype = "card6",
                            t.next = 18;
                            break;
                        case 17:
                            o.cardtype = "card1";
                        case 18:
                            if (!e.ext_text_video_pic_fid) {
                                t.next = 26;
                                break
                            }
                            return h = {
                                fid: e.ext_text_video_pic_fid
                            },
                            t.next = 22,
                            s["b"].metaquery(h);
                        case 22:
                            m = t.sent,
                            o.videoImg = m.thumbnail_240 + "&source=209678993",
                            p = m.thumbnail_240.match(/(\d+),(\d+)/),
                            g = Object(r["a"])(p, 3),
                            g[0],
                            v = g[1],
                            b = g[2],
                            o.cardSize = {
                                width: v,
                                height: b
                            };
                        case 26:
                            return t.abrupt("return", o);
                        case 27:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            j.apply(this, arguments)
        }
    },
    "742c": function(t, e, n) {
        "use strict";
        var r = n("a4ef")
          , i = n.n(r);
        i.a
    },
    "77f2": function(t, e, n) {},
    "7c55": function(t, e, n) {
        "use strict";
        var r = n("5c48")
          , i = n.n(r);
        i.a
    },
    "855a": function(t, e, n) {
        "use strict";
        var r = n("3582")
          , i = n.n(r);
        i.a
    },
    8917: function(t, e, n) {
        "use strict";
        n("ac4d"),
        n("8a81"),
        n("ac6a");
        var r = function() {
            try {
                var t = ["setAdmin", "speechForbid", "transferGroup", "updateAffi", "feedAddGroupWithoutLimit", "feedGroupCard", "addGroupWithoutLimit", "feedAddGroupWithLimit", "addGroupWithLimit", "clickGroupCard"]
                  , e = {}
                  , n = !0
                  , r = !1
                  , i = void 0;
                try {
                    for (var s, o = t.values()[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
                        var a = s.value;
                        e[a] = {
                            count: 0,
                            addCount: function() {
                                this.count++
                            }
                        }
                    }
                } catch (c) {
                    r = !0,
                    i = c
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw i
                    }
                }
                return e
            } catch (u) {
                return {
                    deleteAdmin: {
                        count: 0,
                        addCount: function() {
                            this.count++
                        }
                    }
                }
            }
        };
        e["a"] = r()
    },
    "8b2f": function(t, e, n) {},
    "8e1e": function(t, e, n) {
        "use strict";
        var r = n("75fc")
          , i = (n("55dd"),
        n("7f7f"),
        n("7514"),
        n("20d6"),
        n("6762"),
        n("2fdb"),
        n("fcfc"))
          , s = n("bbd5")
          , o = n("4360")
          , a = "bulletinReadRecords"
          , c = {
            setLocalStorage: function(t, e) {
                window.localStorage.setItem(t, JSON.stringify(e))
            },
            clearLocalStorage: function(t) {
                window.localStorage.removeItem(t)
            },
            getLocalStorage: function(t) {
                try {
                    return JSON.parse(window.localStorage.getItem(t)) || {
                        error: !0
                    }
                } catch (e) {
                    return {
                        error: !0
                    }
                }
            },
            hasReadBulletin: function(t) {
                this.checkUserId();
                var e = this.getLocalStorage(a)
                  , n = e.records || [];
                n = n.map((function(t) {
                    return +t
                }
                )),
                n.includes(+t) || (n.push(t),
                this.setLocalStorage(a, {
                    uid: i["f"] && i["f"].basicinfo && i["f"].basicinfo.id,
                    records: n
                }),
                o["a"].commit("exbulletin", n))
            },
            checkUserId: function() {
                var t = this.getLocalStorage(a);
                t.uid != (i["f"] && i["f"].basicinfo && i["f"].basicinfo.id) ? (this.clearLocalStorage(a),
                this.setLocalStorage(a, {
                    uid: i["f"] && i["f"].basicinfo && i["f"].basicinfo.id,
                    records: []
                }),
                o["a"].commit("exbulletin", [])) : (this.setLocalStorage(a, {
                    uid: i["f"] && i["f"].basicinfo && i["f"].basicinfo.id,
                    records: t.records || []
                }),
                o["a"].commit("exbulletin", t.records || []))
            },
            clearBulletinData: function() {
                this.clearLocalStorage(a)
            },
            finditemIndex: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o["a"].state.selectId;
                return t.findIndex((function(t) {
                    return t.id == e
                }
                ))
            },
            findIndexAndLt: function(t) {
                var e = "topuser"
                  , n = this.finditemIndex(o["a"].state[e], t);
                return n < 0 && (e = "chatlist",
                n = this.finditemIndex(o["a"].state[e], t),
                n < 0 && (e = "unfollowlist",
                n = this.finditemIndex(o["a"].state[e], t))),
                n > -1 ? {
                    lt: e,
                    i: n
                } : {
                    lt: "",
                    i: -1,
                    error: !0
                }
            },
            setContactList: function(t, e) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                  , r = this.findIndexAndLt(t)
                  , i = r.lt
                  , s = r.i;
                s > -1 && o["a"].commit("update" + i, {
                    notTop: n,
                    i: s,
                    param: e
                })
            },
            newTeamSovelComeMsg: function(t) {
                var e = {
                    updateGroupSummary: 335 === t.sub_type && "groupchat" === t.type,
                    updateGroupGG: 341 === t.sub_type && "groupchat" === t.type,
                    clearGroupGG: 342 === t.sub_type && "groupchat" === t.type,
                    deleteMsg: "delete_dm_dantiao" === t.type,
                    deleteGroupMsg: 331 === t.sub_type && "groupchat" === t.type && t.info && 0 == t.info.op_type && t.info.ids && 1 === t.info.ids.length
                };
                try {
                    for (var n in e)
                        if (e[n])
                            return this[n] && this[n](t),
                            !0;
                    return !1
                } catch (r) {
                    return !1
                }
            },
            deleteGroupMsg: function(t) {
                this.updateChatlist(t.info.ids[0]),
                o["a"].state.selectId === t.info.gid && o["a"].commit("deleteRecords", t.info.ids[0])
            },
            deleteMsg: function(t) {
                this.updateChatlist(t.mid),
                o["a"].state.selectId === t.uid && o["a"].commit("deleteRecords", t.mid)
            },
            updateChatlist: function(t) {
                var e = o["a"].state.chatrecords;
                if (e[e.length - 1].mid + "" === t + "") {
                    var n = Object(s["l"])()
                      , r = this.findIndexAndLt(o["a"].state.selectId)
                      , a = r.lt
                      , c = r.i
                      , u = o["a"].state[a].find((function(t) {
                        return t.id == o["a"].state.selectId
                    }
                    ))
                      , l = e[e.length - 2]
                      , d = {
                        textToken: n,
                        fileToken: "",
                        affi_type: "",
                        fid: l.fid,
                        created_at: l.created_at,
                        dm_type: l.dm_type,
                        message_type: l.type,
                        sender_id: i["f"].basicinfo.id,
                        sender_screen_name: i["f"].basicinfo.name,
                        sub_type: l.sub_type,
                        text: l.text,
                        type: u.type,
                        unread_count: 0,
                        errorsend: !1
                    };
                    o["a"].commit("update" + a, {
                        i: c,
                        param: d
                    })
                }
            },
            updatequerygroup: function(t) {
                var e = o["a"].state.querygroup
                  , n = Object.assign(e, t);
                o["a"].commit("exquerygroup", n)
            },
            solvemembers: function(t) {
                for (var e = {}, n = [], r = 0; r < t.length; r++) {
                    var i = t[r]
                      , s = void 0;
                    s = i.jp && i.jp[0] ? i.jp[0].toUpperCase() : "others",
                    e[s] || (e[s] = []),
                    e[s].push(i)
                }
                for (var o in e) {
                    var a = e[o];
                    n.push({
                        character: o,
                        item: a
                    })
                }
                return n.sort((function(t, e) {
                    return t.character > e.character ? 1 : -1
                }
                )),
                n
            },
            backsolvemembers: function(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = t[n];
                    e.push.apply(e, Object(r["a"])(i.items))
                }
                return e
            },
            updateGroupSummary: function(t) {
                var e = t.info
                  , n = e.gid
                  , r = e.summary;
                +n === +o["a"].state.selectId && this.updatequerygroup({
                    summary: r
                })
            },
            updateGroupGG: function(t) {
                var e = t.info || {}
                  , n = e.group_id
                  , r = {
                    bulletin: {
                        bulletin_id: e.bulletin_id,
                        content: e.content,
                        group_id: e.group_id,
                        keep_time: e.keep_time,
                        scheme: e.scheme,
                        time: e.time
                    }
                };
                this.setContactList(+n, r, !1),
                +n === +o["a"].state.selectId && (this.updatequerygroup(r),
                this.hasReadBulletin(e.bulletin_id))
            },
            clearGroupGG: function(t) {
                var e = t.info || {}
                  , n = e.group_id
                  , r = e.is_del_userself
                  , i = {
                    bulletin: void 0
                };
                this.setContactList(+n, i),
                +n !== +o["a"].state.selectId || r || this.updatequerygroup(i)
            }
        };
        e["a"] = c
    },
    "8e28": function(t, e, n) {},
    9113: function(t, e, n) {
        "use strict";
        var r = n("9710")
          , i = n.n(r);
        i.a
    },
    "91e0": function(t, e, n) {},
    9710: function(t, e, n) {},
    "995c": function(t, e, n) {
        "use strict";
        var r = n("6044")
          , i = n.n(r);
        i.a
    },
    "99e7": function(t, e, n) {
        "use strict";
        var r = n("0300")
          , i = n.n(r);
        i.a
    },
    "9b86": function(t, e, n) {
        "use strict";
        var r = n("0434")
          , i = n.n(r);
        i.a
    },
    "9bff": function(t, e, n) {},
    "9ce1": function(t, e, n) {},
    a10b: function(t, e, n) {
        "use strict";
        var r = n("6eff")
          , i = n.n(r);
        i.a
    },
    a18c: function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "chat",
                on: {
                    click: t.closemodal
                }
            }, [n("div", {
                staticClass: "chatbox flex relative"
            }, [n("div", {
                staticClass: "msglist left"
            }, [t.startup ? n("user", {
                ref: "userinfo",
                attrs: {
                    userdata: t.basicinfod
                }
            }) : t._e(), t.showunfollow ? n("back") : n("search"), t.searchstate ? n("searchlist") : n("chatlist", {
                ref: "chatinfo"
            })], 1), n("Modalcontain", {
                ref: "cardcontaininfo",
                attrs: {
                    start: "start"
                }
            }), t.selectId < 0 ? n("div", {
                staticClass: "nochat font16 right overflow-hidden"
            }, [n("p", [t._v("您还未选中或发起聊天，快去跟好友聊一聊吧")])]) : n("div", {
                staticClass: "right",
                attrs: {
                    id: "drag-area"
                }
            }, [n("div", {
                staticClass: "textbox"
            }, [n("message", {
                ref: "msginfo"
            }), n("v-text", {
                ref: "textinfo"
            })], 1), 5 == t.$store.state.modalId ? n("div", {
                staticClass: "absolute userCard",
                style: t.styleObj
            }, [n("usercard", {
                attrs: {
                    userinfo: t.curusercardmsg
                }
            })], 1) : t._e()]), n("div", {
                staticClass: "collection absolute tc fff hvhd",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.showmodal(e)
                    }
                }
            }, [n("i", {
                staticClass: "icon W_ficon fff font16"
            }, [t._v("")]), n("span", {
                staticClass: "font12 text"
            }, [t._v("收藏")])])], 1)])
        }
          , i = []
          , s = (n("8e6e"),
        n("456d"),
        n("ac6a"),
        n("96cf"),
        n("3b8d"))
          , o = n("bd86")
          , a = n("365c")
          , c = (n("4360"),
        n("2b0e"))
          , u = n("bbd5")
          , l = n("fcfc")
          , d = n("8e1e")
          , f = ""
          , h = setInterval((function() {
            var t = Object(u["e"])("SUBP");
            "" == f && (f = t),
            f != t && (f = t,
            m((function(t) {
                t && (clearInterval(h),
                l["e"].aborting ? location.href = "//weibo.com/" : (c["a"].prototype.$modal({
                    icon: {
                        text: n("6008")
                    },
                    text: "您的登录状态已发生变化，请注意使用",
                    okObj: {
                        text: "我知道了",
                        okFun: function() {
                            location.reload()
                        },
                        cancelFun: function() {
                            location.reload()
                        }
                    },
                    width: 430
                }),
                d["a"].clearBulletinData()))
            }
            )))
        }
        ), 5e3)
          , m = function(t) {
            a["a"].getbasicmsg().then((function(e) {
                e.error || e.id != l["f"].basicinfo.id ? t(!0) : t(!1)
            }
            ))
        }
          , g = function() {
            var t = this
              , e = t.$createElement;
            t._self._c;
            return t._m(0)
        }
          , v = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "startup"
            }, [n("div", {
                staticClass: "W_loading"
            }, [n("div", {
                staticClass: "icon"
            }), n("p", {
                staticClass: "page fff font20"
            }, [t._v("页面加载中……")])]), n("div", {
                staticClass: "W_statement  tc absolute"
            }, [n("p", {
                staticClass: "W_txt3"
            }, [t._v("© 1998 - 2019 Sina Inc. All Rights Reserved")])])])
        }
        ]
          , b = {}
          , y = b
          , _ = (n("855a"),
        n("2877"))
          , w = Object(_["a"])(y, g, v, !1, null, "b23991f0", null)
          , x = w.exports
          , j = function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "message"
            }, [r("header", {
                staticClass: "header relative"
            }, [r("div", {
                staticClass: "friendname one-line hvhd",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.showusercard(e)
                    }
                }
            }, [t._v("\n      " + t._s(t.getname) + "\n      "), 2 == t.curuserinfo.type && t.querygroup && t.querygroup.member_count ? r("span", [t._v("(" + t._s(t.querygroup.member_count) + ")")]) : t._e()]), r("div", {
                staticClass: "set"
            }, [2 == t.curuserinfo.type && t.handleIdentity().length ? r("div", {
                staticClass: "icon W_ficon icon-msg setting",
                on: {
                    mouseenter: t.showSettingMethods,
                    mouseleave: function(e) {
                        t.showSetting = !1
                    }
                }
            }, [t.showSetting ? r("ul", {
                staticClass: "menulist hvhd font12 settinglist"
            }, [r("li", {
                on: {
                    click: t.updateSpeechForbid
                }
            }, [t._v("\n            " + t._s("1" !== t.querygroup.speech_forbid ? "开启" : "关闭") + "全员禁言\n          ")]), r("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: -1 !== t.handleIdentity().indexOf("owner"),
                    expression: "handleIdentity().indexOf('owner') !== -1"
                }],
                on: {
                    click: t.manage
                }
            }, [t._v("设置管理员")]), r("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: -1 !== t.handleIdentity().indexOf("owner"),
                    expression: "handleIdentity().indexOf('owner') !== -1"
                }],
                on: {
                    click: t.transferGroup
                }
            }, [t._v("\n            转让群主\n          ")]), 1 === t.querygroup.apply_status ? r("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: -1 !== t.handleIdentity().indexOf("owner"),
                    expression: "handleIdentity().indexOf('owner') !== -1"
                }],
                staticClass: "disabled"
            }, [t._v("\n            升级为粉丝群(等待审核)\n          ")]) : r("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: -1 !== t.handleIdentity().indexOf("owner") && t.querygroup.affi_type && void 0 === t.querygroup.affi_type[0],
                    expression: "\n              handleIdentity().indexOf('owner') !== -1 &&\n                querygroup.affi_type &&\n                querygroup.affi_type[0] === undefined\n            "
                }],
                on: {
                    click: t.updateToAffi
                }
            }, [t._v("\n            升级为粉丝群\n          ")])]) : t._e()]) : t._e(), r("i", {
                staticClass: "icon W_ficon icon-msg",
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        2 == t.curuserinfo.type ? t.showmodal2() : t.showmodal1()
                    }
                }
            }, [t._v("")]), r("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 2 == t.curuserinfo.type,
                    expression: "curuserinfo.type == 2"
                }],
                staticClass: "icon W_ficon icon-msg share",
                on: {
                    click: t.shareGroup
                }
            })])]), t.isshowtoptips ? r("div", {
                staticClass: "unfollowtips tips"
            }, [t.followuser || t.user_is_blocked ? t.user_is_blocked ? r("div", {
                staticClass: "font12"
            }, [r("span", {
                staticClass: "c333"
            }, [t._v("该用户已屏蔽，回复后即可解锁，或点击此处")]), r("span", {
                staticClass: "unblock",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.shield()
                    }
                }
            }, [t._v("解除屏蔽")])]) : t._e() : r("div", [r("span", {
                staticClass: "font12 c333"
            }, [t._v("该对话来自于未关注人")]), r("i", {
                staticClass: "icon icon-shield",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.shield()
                    }
                }
            })])]) : t._e(), t.curuserinfo && t.curuserinfo.bulletin ? r("div", {
                staticClass: "unfollowtips tips bulletintips"
            }, [r("img", {
                attrs: {
                    src: n("2b9b")
                }
            }), r("p", {
                staticClass: "c333 bulletin-content"
            }, [t._v("\n      " + t._s(t.curuserinfo.bulletin.content) + "\n      "), t.curuserinfo.bulletin.scheme ? r("a", {
                attrs: {
                    href: t.curuserinfo.bulletin.scheme,
                    target: "_blank"
                }
            }, [t._v("查看链接")]) : t._e()]), r("i", {
                staticClass: "close-btn hvhd",
                on: {
                    click: t.clearbulletin
                }
            }, [r("hover-item", {
                attrs: {
                    name: "bulletin-close"
                }
            })], 1)]) : t._e(), r("div", {
                ref: "message",
                staticClass: "message-wrapper flex-1 relative"
            }, [r("div", {
                staticClass: "scrollbg"
            }), t.chatrecords.length ? r("happy-scroll", {
                ref: "happyscroll",
                staticClass: "msg-box",
                attrs: {
                    "scroll-top": t.scrollTopvalue,
                    isfirst: t.isfirst,
                    color: "rgba(82, 85, 91, .8)",
                    size: "6",
                    "min-length-v": .05,
                    resize: "",
                    "hide-horizontal": ""
                },
                on: {
                    scroll: t.scroll,
                    "update:scrollTop": function(e) {
                        t.scrollTopvalue = e
                    },
                    "update:scroll-top": function(e) {
                        t.scrollTopvalue = e
                    },
                    "update:isfirst": function(e) {
                        t.isfirst = e
                    },
                    "vertical-start": t.scrollToTop
                }
            }, [r("ul", {
                ref: "chatcontent",
                staticClass: "chat-content"
            }, [r("bubble-loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showloading,
                    expression: "showloading"
                }]
            }), r("click-card"), t._l(t.chatrecords, (function(e, n) {
                return r("li", {
                    key: (e.replaceToken || e.feTag || e.mid || n) + t.selectId.toString()
                }, [r("div", {
                    staticClass: "hidden"
                }, [t._v(t._s(e.feTag || e.mid || n))]), e.msg_status ? r("div", [t.isshowmsgtime(n) ? r("p", {
                    staticClass: "time tc font12"
                }, [t._v("\n              " + t._s(t._f("formatDate")(e.created_at)) + "\n            ")]) : t._e(), t.checktype(e) ? r("p", {
                    staticClass: "notice_font font12 tc c333"
                }, [r("span", {
                    staticClass: "notice_in"
                }, [t._v(t._s(e.text))])]) : t.checktype2(e) && !e.userinfo && t.usercardinfo ? r("div", {
                    staticClass: "message-item flex relative other"
                }, [r("div", {
                    staticClass: "avator-box hvhd",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.showUserInfo(e, 1, 1)
                        },
                        contextmenu: function(e) {
                            return e.preventDefault(),
                            t.showusermodal(n, e)
                        }
                    }
                }, [r("img", {
                    staticClass: "avator",
                    attrs: {
                        src: t.usercardinfo.avatar_large,
                        alt: ""
                    }
                }), r("weibo-verified", {
                    attrs: {
                        user: t.usercardinfo
                    }
                })], 1), r("cardcontain", {
                    attrs: {
                        cardobj: e
                    }
                }), t.showmodalmsgk == n && 7 == t.modalId ? r("div", {
                    staticClass: "item-jumpmenu hvhd font12 absolute",
                    on: {
                        click: function(e) {
                            return t.jump(t.usercardinfo.id)
                        }
                    }
                }, [t._v("\n                进入个人主页\n              ")]) : t._e()], 1) : t.checktype2(e) && e.userinfo ? r("div", {
                    staticClass: "message-item flex relative other"
                }, [r("div", {
                    staticClass: "avator-box hvhd",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            t.showUserInfo(n, 1, 2, e)
                        },
                        contextmenu: function(e) {
                            return e.preventDefault(),
                            t.showusermodal(n, e)
                        }
                    }
                }, [r("img", {
                    staticClass: "avator hvhd",
                    attrs: {
                        src: e.userinfo.avatar_large,
                        alt: ""
                    }
                }), r("weibo-verified", {
                    attrs: {
                        user: e.userinfo
                    }
                })], 1), r("div", {
                    staticClass: "flex flex_column message-box"
                }, [r("span", {
                    staticClass: "name font12"
                }, [t._v("\n                  " + t._s(t.curuserremark(e.userinfo))), r("span", {
                    staticClass: "icon-area"
                }, [1 === t.getMark(e) ? r("i", {
                    staticClass: "qz"
                }, [t._v("群主")]) : 2 === t.getMark(e) ? r("i", {
                    staticClass: "gly"
                }, [t._v("管理员")]) : 3 === t.getMark(e) ? r("i", {
                    staticClass: "tf"
                }, [t._v("铁粉")]) : t._e()])]), r("cardcontain", {
                    attrs: {
                        cardobj: e
                    }
                }), e.alert ? r("div", {
                    staticClass: "alert-text"
                }, [t._v(t._s(e.alert))]) : t._e()], 1), t.showmodalmsgk == n && 7 == t.modalId ? r("ul", {
                    staticClass: "menulist hvhd font12",
                    style: t.modalStyle
                }, [r("li", {
                    on: {
                        click: function(n) {
                            return t.atsomeone(e.userinfo)
                        }
                    }
                }, [t._v("@")]), r("li", {
                    on: {
                        click: function(n) {
                            return t.tochat(e.userinfo.id)
                        }
                    }
                }, [t._v("发起聊天")]), r("li", {
                    on: {
                        click: function(n) {
                            return t.jump(e.userinfo.id)
                        }
                    }
                }, [t._v("进入个人主页")]), r("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.checkidentify && t.canremove(e.userinfo.id),
                        expression: "checkidentify && canremove(item.userinfo.id)"
                    }],
                    on: {
                        click: function(n) {
                            return t.removeuser(e.userinfo)
                        }
                    }
                }, [t._v("\n                  移除该成员\n                ")])]) : t._e()]) : t._e()]) : r("div", [t.isshowmsgtime(n) ? r("p", {
                    staticClass: "time tc font12"
                }, [t._v("\n              " + t._s(t._f("formatDate")(e.created_at)) + "\n            ")]) : t._e(), t.checktype(e) ? r("p", {
                    staticClass: "notice_font font12 tc c333"
                }, [r("span", {
                    staticClass: "notice_in"
                }, [t._v(t._s(e.text))])]) : t.checktype2(e) ? r("div", {
                    staticClass: "message-item flex relative me"
                }, [r("div", {
                    staticClass: "avator-box hvhd",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.showUserInfo(e, 2)
                        },
                        contextmenu: function(e) {
                            return e.preventDefault(),
                            t.showusermodal(n, e)
                        }
                    }
                }, [r("img", {
                    staticClass: "avator hvhd",
                    attrs: {
                        src: t.getbasicinfod("avatar_large"),
                        alt: ""
                    }
                }), r("weibo-verified", {
                    attrs: {
                        user: {
                            verified_type: t.getbasicinfod("verified_type"),
                            verified: t.getbasicinfod("verified"),
                            verified_type_ext: t.getbasicinfod("verified_type_ext")
                        }
                    }
                })], 1), r("div", {
                    staticClass: "flex flex_column message-box"
                }, [2 == t.curuserinfo.type ? r("span", {
                    staticClass: "name font12"
                }, [t._v("\n                  " + t._s(t.getbasicinfod("name"))), r("span", {
                    staticClass: "icon-area"
                }, [1 === t.getMyMark(e) ? r("i", {
                    staticClass: "qz"
                }, [t._v("群主")]) : 2 === t.getMyMark(e) ? r("i", {
                    staticClass: "gly"
                }, [t._v("管理员")]) : 3 === t.getMyMark(e) ? r("i", {
                    staticClass: "tf"
                }, [t._v("铁粉")]) : t._e()])]) : t._e(), r("cardcontain", {
                    attrs: {
                        cardobj: e
                    }
                }), e.alert ? r("div", {
                    staticClass: "alert-text"
                }, [t._v("\n                  " + t._s(e.alert)), e.retryConfig ? r("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(n) {
                            return t.retry(e.retryConfig)
                        }
                    }
                }, [t._v("重新发送")]) : t._e()]) : t._e()], 1), t.showmodalmsgk == n && 7 == t.modalId ? r("div", {
                    staticClass: "item-jumpmenu right hvhd font12 absolute",
                    on: {
                        click: function(e) {
                            t.jump(t.getbasicinfod("id"))
                        }
                    }
                }, [t._v("\n                进入个人主页\n              ")]) : t._e()]) : t._e()])])
            }
            ))], 2)]) : t._e(), r("large-pic")], 1)])
        }
          , k = []
          , O = (n("2fdb"),
        n("6762"),
        n("7f7f"),
        n("7514"),
        n("20d6"),
        n("2f62"))
          , C = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "cardcontain",
                class: [{
                    isclick: 11 === t.modalId && t.cardobj.mid === t.mid && t.cardobj.mid
                }, t.cardobj.direct],
                style: {
                    textAlign: t.cardobj.direct
                },
                on: {
                    contextmenu: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        t.clickCard(e)
                    }
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.cardobj.upload && "card10" === t.cardobj.cardtype,
                    expression: "cardobj.upload && cardobj.cardtype === 'card10'"
                }],
                staticClass: "cancel"
            }, [n("div", {
                staticClass: "cancel-icon",
                on: {
                    click: t.cancel
                }
            })]), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isLoading,
                    expression: "isLoading"
                }],
                staticClass: "loading"
            }, [n("div", {
                staticClass: "loading-icon"
            })]), n("div", [n("div", {
                staticClass: "bubble_arrow absolute",
                class: [t.cardobj.direct, {
                    red: "card7" == t.cardobj.cardtype,
                    hide: t.hideTriangle()
                }]
            }), n("div", {
                staticClass: "bubble_cont basi",
                class: [t.cardobj.direct, {
                    bgrgba: "card9" == t.cardobj.cardtype
                }]
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.cardobj.cardtype,
                    expression: "!cardobj.cardtype"
                }],
                ref: "cardplaceholder",
                style: t.styleobj
            }), n(t.cardobj.cardtype, {
                tag: "component",
                attrs: {
                    querydata: t.cardobj.querydata,
                    cardobj: t.cardobj
                }
            }), n("div", {
                class: [{
                    isMask: 11 === t.modalId && t.cardobj.mid && t.cardobj.mid === t.mid && "card10" === t.cardobj.cardtype
                }]
            })], 1), t.cardobj.comment ? n("div", {
                staticClass: "bubble_cont addition",
                class: t.cardobj.direct
            }, [n("card1", {
                attrs: {
                    isFj: !0,
                    cardobj: t.cardobj
                }
            })], 1) : t._e()])])
        }
          , I = []
          , T = n("0bca")
          , A = n("b35e");
        function P(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function S(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? P(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var D = function() {
            return n.e("async-cards").then(n.bind(null, "d309"))
        }
          , q = function() {
            return n.e("async-cards").then(n.bind(null, "2960"))
        }
          , M = function() {
            return n.e("async-cards").then(n.bind(null, "0853"))
        }
          , E = function() {
            return n.e("async-cards").then(n.bind(null, "d150"))
        }
          , R = function() {
            return n.e("async-cards").then(n.bind(null, "eb62"))
        }
          , N = function() {
            return n.e("async-cards").then(n.bind(null, "630a"))
        }
          , L = function() {
            return n.e("async-cards").then(n.bind(null, "9a63"))
        }
          , G = function() {
            return n.e("async-cards").then(n.bind(null, "bab8"))
        }
          , U = function() {
            return n.e("async-cards").then(n.bind(null, "c0b7"))
        }
          , B = function() {
            return n.e("async-cards").then(n.bind(null, "5107"))
        }
          , W = function() {
            return n.e("async-cards").then(n.bind(null, "3f2f"))
        }
          , z = {
            props: ["cardobj"],
            mixins: [A["a"]],
            data: function() {
                return {
                    isLoading: !1,
                    mid: void 0,
                    styleobj: {
                        width: 0,
                        height: 0,
                        background: "#fff"
                    }
                }
            },
            components: {
                card1: D,
                card2: q,
                card3: M,
                card4: E,
                card5: R,
                card6: N,
                card7: L,
                card8: G,
                card9: U,
                card10: B,
                card11: W
            },
            computed: S({}, Object(O["d"])(["modalId"])),
            watch: {
                modalId: function(t, e) {
                    -1 === t && 11 === e && (this.mid = void 0)
                }
            },
            mounted: function() {
                var t = this;
                T["a"].$on("loadingCard", (function(e) {
                    t.cardobj.mid === e && (t.isLoading = !0)
                }
                )),
                T["a"].$on("notLoadingCard", (function(e) {
                    t.cardobj.mid === e && (t.isLoading = !1)
                }
                ))
            },
            methods: S({}, Object(O["c"])(["changemodalId"]), {
                hideTriangle: function() {
                    return "card9" === this.cardobj.cardtype || "card10" === this.cardobj.cardtype
                },
                cancel: function() {
                    this.cancelFileSend(this.cardobj.file),
                    this.$store.commit("deleteChatRecorder", this.cardobj.fileToken);
                    var t = this.$store.state.chatrecords
                      , e = Object(u["l"])()
                      , n = d["a"].findIndexAndLt(this.$store.state.selectId)
                      , r = n.lt
                      , i = n.i
                      , s = this.findItem(this.$store.state[r])
                      , o = t[t.length - 1]
                      , a = {
                        textToken: e,
                        fileToken: "",
                        affi_type: "",
                        fid: o.fid,
                        created_at: o.created_at,
                        dm_type: o.dm_type,
                        message_type: o.type,
                        sender_id: l["f"].basicinfo.id,
                        sender_screen_name: l["f"].basicinfo.name,
                        sub_type: o.sub_type,
                        text: o.text,
                        type: s.type,
                        unread_count: 0,
                        errorsend: !1
                    };
                    this.$store.commit("update" + r, {
                        i: i,
                        param: a
                    }),
                    this.cardobj.percent = 0,
                    this.isCancel = !1
                },
                clickCard: function(t) {
                    var e = this;
                    this.$store.commit("changemodalId", -1),
                    this.$nextTick((function() {
                        e.mid = e.cardobj.mid,
                        e.changemodalId(11),
                        T["a"].$emit("clickCard", t, e.cardobj)
                    }
                    ))
                }
            })
        }
          , V = z
          , Y = (n("001a"),
        Object(_["a"])(V, C, I, !1, null, "223122de", null))
          , F = Y.exports
          , H = n("c1df")
          , J = n.n(H)
          , Z = function() {
            var t = this
              , e = t.$createElement;
            t._self._c;
            return t._m(0)
        }
          , K = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "bubble_loading tc"
            }, [n("span", {
                staticClass: "font12 text"
            }, [t._v("载入中")]), n("i", {
                staticClass: "dot_one"
            }), n("i", {
                staticClass: "dot_two"
            }), n("i", {
                staticClass: "dot_three"
            })])
        }
        ]
          , Q = {}
          , X = Q
          , tt = (n("16ec"),
        Object(_["a"])(X, Z, K, !1, null, "3f870468", null))
          , et = tt.exports
          , nt = n("040d")
          , rt = (n("c5f6"),
        {
            data: function() {
                return {}
            },
            methods: {
                handleCardType: function() {
                    var t = this.message.cardtype;
                    t && ("card1" === t || "card2" === t || "card3" === t ? this.media_type = 0 : "card5" === t ? this.media_type = 1 : "card6" === t ? this.media_type = 5 : "card10" === t && (this.media_type = 10))
                },
                notGroup: function(t) {
                    return ("" + t).length < 15
                },
                sendMsg: function(t) {
                    var e = this
                      , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "转发成功";
                    a["a"].flashFid({
                        fid: this.message.fid ? String(this.message.fid) : void 0,
                        tuid: Number(t.id)
                    }).then((function(i) {
                        var s = {
                            uid: t.id,
                            fids: i.tovfid,
                            text: e.message.text,
                            media_type: e.media_type,
                            extensions: JSON.stringify({
                                video_pic_fid: e.message.ext_text_video_pic_fid ? e.message.ext_text_video_pic_fid : void 0
                            })
                        };
                        a["a"].newmsg(s).then((function(i) {
                            n && (e.$toast(r),
                            e.updateChatlist(i, t.id)),
                            i.error && e.$toast(i.error)
                        }
                        ))
                    }
                    ))
                },
                sendGroupMsg: function(t) {
                    var e = this
                      , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "转发成功";
                    a["a"].flashFid({
                        fid: this.message.fid ? String(this.message.fid) : void 0,
                        tochatid: Number(t.id)
                    }).then((function(i) {
                        var s = {
                            id: t.id,
                            fids: i.tovfid,
                            content: e.message.text,
                            media_type: e.media_type,
                            annotations: JSON.stringify({
                                video_pic_fid: e.message.ext_text_video_pic_fid ? e.message.ext_text_video_pic_fid : void 0
                            })
                        };
                        a["a"].sendmsg(s).then((function(i) {
                            n && (e.$toast(r),
                            e.updateChatlist(i, t.id)),
                            i.error && e.$toast(i.error)
                        }
                        ))
                    }
                    ))
                },
                updateChatlist: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r, i, s, o;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    r = d["a"].findIndexAndLt(n),
                                    i = r.lt,
                                    s = r.i,
                                    o = {
                                        mid: e.mid,
                                        errorsend: !1
                                    },
                                    e.url_objects && (o.url_objects = e.url_objects),
                                    this.$store.commit("update" + i, {
                                        notTop: !1,
                                        i: s,
                                        param: o
                                    });
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }
        })
          , it = rt
          , st = {
            data: function() {
                return {}
            },
            methods: {
                handleIdentity: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l["f"].basicinfo.id
                      , e = [];
                    return this.querygroup && (this.querygroup.owner && t === this.querygroup.owner && e.push("owner"),
                    this.querygroup.affiliation && t === this.querygroup.affiliation[0] && e.push("affiliation"),
                    this.querygroup.admins && -1 !== this.querygroup.admins.indexOf(t) && e.push("admin"),
                    this.querygroup.emeccs && -1 !== this.querygroup.emeccs.indexOf(t) && e.push("superAdmin")),
                    e
                }
            }
        }
          , ot = st
          , at = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.cls ? n("i", {
                staticClass: "m-icon",
                class: t.spClass,
                domProps: {
                    innerHTML: t._s(t.cls)
                }
            }) : t._e()
        }
          , ct = []
          , ut = {
            props: ["user", "test", "spClass"],
            computed: {
                cls: function() {
                    if (this.test)
                        return '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAB7NJREFUWAm1mV1oHFUYhr+zm2q7U4uIu2KtdMVCxEhB7ObWFRSkBdGLFhF/khaq1KtqU/Gi4J3QqFc2oNImtSCS3IjQVqjg9jZbLYgJFSpuLK10B0RKJ/3dPb7vOXNmZzb7M7HpB2fPzPn7nnnnm3POzCq5A9N656DI7RdEMptE9EMYyiWOetkmhbx5XmTglFJHfmfF/zG13E4WrrkDYACUx5FySKuQsmEaQE67jdQI0y3ki0h/iKhTuLDp5UKnBgXgeijzPgABKeuQCOigcJjKCE/gKwCeBvCnAL6UpmdfUK13Q63r72Hg3RiwgLQ2GjhYbASVelaqvogfSOCDoR7Y6oInXh7XkvdESnnxyoWGeDmq7uwqDhAW+iuR1Z8p9SVV72o9QbXe9QDu4BfozdtMFW37Sk0HMzUVEDAAXMhmvFAvGvV2BlZAikfg7UUt5aLzq1EDdQXhMPC2Uof/cV3ac9ehvVy0HnkCVzuJiqeR7jUN5vxmfXwuI9UFC+eglvTuUkB4Qpc2SmFsqClD+UzY8gbys9BhVKmpc2FZIusIGkJ+j5aPISEOF3UwPqeCqZpVcLmACZc4McBQeKQo3tgQVM2Rg/H7J2Bf6gS7BDS83T+g0xYkhVvbqO+fzUplAXGIkpW0PAYrQ92Dwy5+GQpnoM2L7WGQAA0fnG95VegwYCBHK1mZBeGdqtjtAqnucF4Kk2UHC2U17ubqV+MPmIuRcJgb+wC5zUDidhsl7wZk/EGjAPBhfMGn9U2Gm5gKWxaB2nlS9qLKPDiMSTmO273SSroHqh0WvoxPywYGvTdkMiURKBaRD1DyoCnF0x1Mza88pIXo/AtBjE/4Dhsggg2TOTWgdlmUUZSYmK2PVzMr/uDQnVOTxx5/2gyPgvFti8kyGrK5JbDxOgrvM/WYzKXiG2DbHsLCQdBpYDTIY/CeFsIton8Qv93shDKvDv54eFUwIBnsogAmw3bArdWvOGf1qXm1JC45EAYtHiyZ1cW1rY1WZBErU8KRq4zlhgM3cmhya1Qa1Hyp7a9KDuMadbm6sSESGQrlIk6Mke1Axk7uMmiKMGdCTVsd+zWiYCB/pobVHh7DlB8rdVU66g7HZMiNlNAPVGEKTtTEoytWMpmrQU4jA1msDZIRMdrkZRplzQYj3iFs6bJgHgNACWfYaEDmnAkNV9aeM2wkD77txVYVNi7+CcKgiP7afeLcsNgeYGtuBWhmczRCpRYdth/w9jKeauPVWFVOin1UZWzn3y2hD4mZcGsn5vDTFpumJvaTYMlsBqje4KqDhfZLczWt3OyY6q12vVTtqCZU9LEcg7+nJVn0Bk5P2BCH5vaS7rwtNw+NUXU2VtNd1aSatkt9An1x1/s9gNG+1nZbnwTlxrePUYng9AKDPWrZSdWOaiIY/RmoydjsZ0kWA9radacYwKlaH++takc1DyE24aOvmryIJEuWivJt0Voh54565lTVP9Fd1e5qzqdTk96TLJcJ2nq5KvYLcY4QKoIrrk9BochasdpRTc7BaWLTjZdkuQRQFYGalzHXsE/OOPOPzqPV0lhdMm8yNg9V06uJUZMsiqC69VGAE3hKM3HWSdU9Q5IfeRKjtMIoOF5bnppkSLKco6InWU7zni02YuPbwh6/RlVuB+OqbitiFRpK9PIxwad60l0vXKNhcefSOAnQ4BecXzBlBXztGMpH1f0OjKqIO7w6x5rSS0xNrDBBDeHRipBY2y6HZCCLNbBdP5tRauYmzkNVzZshXwdSG5WqJR6qZFd/wsZmCz1Z3+kMb6dgiHqcJCMUpekp/JidNT4QKClFjVjZ26gUFAsSa7PtEsxBzbllqgnfhsEOASbDJiHotZ9R8J2tQ8N9Jfc6YIt6/PKSTKwmNiu2gz9u581lXHbo2/UgE9nCVw8eaP0mdlGqisN7GFDB2KwERzGppzCKGjC0i85B2AlK8yJSrUTo4r21UbzxYRyZcfD1RA8r9fWvHM3t8HH417zIxiM4eIcNvY+GNXYwqtNGmh3jZoYFkPA2t1laSCnjuxR8wrcKhwALmay5QnOm9RsF7E+P44RfSbhJbtR34AMElLmrhjtRmMYHiGLePen4WtLcptSxuvMbxqg7PYbJRkaQLpoSdDQD4GrvmmHsNkj6HhExLJHbBKhSAukX8TVNoyEClUbYz8ua8bPSxjE5dkxJ+KTvxXOWpeUxcetdsdbb8UCtfg5hcBhlj5jygFNQvRlM4J2/eoehwCloT6mJfWwmtjhAyeYuTO4/hXO7wzF5R1DWWNg1+EaqCGtjliIjaoLT+JA7VVMyh0hJy8wnDisOJ3MsjworD8w8hjxATGpAXoOSZgFiWcK6grIVYLMia6Co+hCnO5GgNM0C43WhEZzxs1Aamw6U+Xj06yE595N5DwnqYYPhbck38KqcbQPkB9xJePoYkBcB6V6RjZf4T09QNtRa0Oa1+zGTQV3ZB+iXkYexDShOSzSX27PWL1iNmTxSkCsOF5hP8P0Wz8Q3/7bHZNgryvqCupZalzHnPkzgZwC7A4nf9R919SnzCwDE93o9DUCsOH8DsHI7Td/UoG4wG7vr1iLoIc+qp+D0eUBvQu7+DGNOi/0hps+jzY8it37DQ4rbcOVqt1i0XZf+/gfB/t4oRX2cMgAAAABJRU5ErkJggg=="/>';
                    if (this.user) {
                        var t = this.user.verified_type;
                        if (this.user.verified) {
                            if (0 === t)
                                return 1 === this.user.verified_type_ext ? '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAB7NJREFUWAm1mV1oHFUYhr+zm2q7U4uIu2KtdMVCxEhB7ObWFRSkBdGLFhF/khaq1KtqU/Gi4J3QqFc2oNImtSCS3IjQVqjg9jZbLYgJFSpuLK10B0RKJ/3dPb7vOXNmZzb7M7HpB2fPzPn7nnnnm3POzCq5A9N656DI7RdEMptE9EMYyiWOetkmhbx5XmTglFJHfmfF/zG13E4WrrkDYACUx5FySKuQsmEaQE67jdQI0y3ki0h/iKhTuLDp5UKnBgXgeijzPgABKeuQCOigcJjKCE/gKwCeBvCnAL6UpmdfUK13Q63r72Hg3RiwgLQ2GjhYbASVelaqvogfSOCDoR7Y6oInXh7XkvdESnnxyoWGeDmq7uwqDhAW+iuR1Z8p9SVV72o9QbXe9QDu4BfozdtMFW37Sk0HMzUVEDAAXMhmvFAvGvV2BlZAikfg7UUt5aLzq1EDdQXhMPC2Uof/cV3ac9ehvVy0HnkCVzuJiqeR7jUN5vxmfXwuI9UFC+eglvTuUkB4Qpc2SmFsqClD+UzY8gbys9BhVKmpc2FZIusIGkJ+j5aPISEOF3UwPqeCqZpVcLmACZc4McBQeKQo3tgQVM2Rg/H7J2Bf6gS7BDS83T+g0xYkhVvbqO+fzUplAXGIkpW0PAYrQ92Dwy5+GQpnoM2L7WGQAA0fnG95VegwYCBHK1mZBeGdqtjtAqnucF4Kk2UHC2U17ubqV+MPmIuRcJgb+wC5zUDidhsl7wZk/EGjAPBhfMGn9U2Gm5gKWxaB2nlS9qLKPDiMSTmO273SSroHqh0WvoxPywYGvTdkMiURKBaRD1DyoCnF0x1Mza88pIXo/AtBjE/4Dhsggg2TOTWgdlmUUZSYmK2PVzMr/uDQnVOTxx5/2gyPgvFti8kyGrK5JbDxOgrvM/WYzKXiG2DbHsLCQdBpYDTIY/CeFsIton8Qv93shDKvDv54eFUwIBnsogAmw3bArdWvOGf1qXm1JC45EAYtHiyZ1cW1rY1WZBErU8KRq4zlhgM3cmhya1Qa1Hyp7a9KDuMadbm6sSESGQrlIk6Mke1Axk7uMmiKMGdCTVsd+zWiYCB/pobVHh7DlB8rdVU66g7HZMiNlNAPVGEKTtTEoytWMpmrQU4jA1msDZIRMdrkZRplzQYj3iFs6bJgHgNACWfYaEDmnAkNV9aeM2wkD77txVYVNi7+CcKgiP7afeLcsNgeYGtuBWhmczRCpRYdth/w9jKeauPVWFVOin1UZWzn3y2hD4mZcGsn5vDTFpumJvaTYMlsBqje4KqDhfZLczWt3OyY6q12vVTtqCZU9LEcg7+nJVn0Bk5P2BCH5vaS7rwtNw+NUXU2VtNd1aSatkt9An1x1/s9gNG+1nZbnwTlxrePUYng9AKDPWrZSdWOaiIY/RmoydjsZ0kWA9radacYwKlaH++takc1DyE24aOvmryIJEuWivJt0Voh54565lTVP9Fd1e5qzqdTk96TLJcJ2nq5KvYLcY4QKoIrrk9BochasdpRTc7BaWLTjZdkuQRQFYGalzHXsE/OOPOPzqPV0lhdMm8yNg9V06uJUZMsiqC69VGAE3hKM3HWSdU9Q5IfeRKjtMIoOF5bnppkSLKco6InWU7zni02YuPbwh6/RlVuB+OqbitiFRpK9PIxwad60l0vXKNhcefSOAnQ4BecXzBlBXztGMpH1f0OjKqIO7w6x5rSS0xNrDBBDeHRipBY2y6HZCCLNbBdP5tRauYmzkNVzZshXwdSG5WqJR6qZFd/wsZmCz1Z3+kMb6dgiHqcJCMUpekp/JidNT4QKClFjVjZ26gUFAsSa7PtEsxBzbllqgnfhsEOASbDJiHotZ9R8J2tQ8N9Jfc6YIt6/PKSTKwmNiu2gz9u581lXHbo2/UgE9nCVw8eaP0mdlGqisN7GFDB2KwERzGppzCKGjC0i85B2AlK8yJSrUTo4r21UbzxYRyZcfD1RA8r9fWvHM3t8HH417zIxiM4eIcNvY+GNXYwqtNGmh3jZoYFkPA2t1laSCnjuxR8wrcKhwALmay5QnOm9RsF7E+P44RfSbhJbtR34AMElLmrhjtRmMYHiGLePen4WtLcptSxuvMbxqg7PYbJRkaQLpoSdDQD4GrvmmHsNkj6HhExLJHbBKhSAukX8TVNoyEClUbYz8ua8bPSxjE5dkxJ+KTvxXOWpeUxcetdsdbb8UCtfg5hcBhlj5jygFNQvRlM4J2/eoehwCloT6mJfWwmtjhAyeYuTO4/hXO7wzF5R1DWWNg1+EaqCGtjliIjaoLT+JA7VVMyh0hJy8wnDisOJ3MsjworD8w8hjxATGpAXoOSZgFiWcK6grIVYLMia6Co+hCnO5GgNM0C43WhEZzxs1Aamw6U+Xj06yE595N5DwnqYYPhbck38KqcbQPkB9xJePoYkBcB6V6RjZf4T09QNtRa0Oa1+zGTQV3ZB+iXkYexDShOSzSX27PWL1iNmTxSkCsOF5hP8P0Wz8Q3/7bHZNgryvqCupZalzHnPkzgZwC7A4nf9R919SnzCwDE93o9DUCsOH8DsHI7Td/UoG4wG7vr1iLoIc+qp+D0eUBvQu7+DGNOi/0hps+jzY8it37DQ4rbcOVqt1i0XZf+/gfB/t4oRX2cMgAAAABJRU5ErkJggg=="/>' : '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABPhJREFUWAnNWFtoXFUUXTePyVhsmPoKjW2tNaQqFgUVSyoYxfkQFYkfKvjTr4pQqfhEqqWKRahUiOKHjx8//NAPg9rSj9G2EBsf1B8flU5jU6aaOr5STa3m0VzXOufeOXPvnZnchvSxYd97HvucvWbfffbeZzycIvm+v4hL7iTnycvInQHzhdGAS3wXyDs8zxvje/6JQPrIu8hT5LQkWa3pS4vIm02Qm62hzFZyj5ElHvy+y0P5Y+D4fmCCRvlPhiFlaaw28vlXAx13Axfd5sNrDXUMUeIpWmyvka3zCIUT0wTSzMFt5A1mcrLso/iCh9F3genxhHzNgZaF/KAPAt2bfGQ6Ql39lH2cwE7WWhMKReYIJseB98l5zEz6GN7iYeQV4OSJiFzqTvMC4PLHgK6NPpoy0in/uo+gjsX3SAAKwMi8V2GCVvm6z8OxL+Pr5tbP3QRcP+CjzVjrB27SEwcVARR8pp0UzOPvb4B9d9E/fp6b8nqrspcCN+wA2ldJQpa6o/rzNcXWyWfyxjKnA4yU6QfuY9SQ9W3okM4KVSxE66zh6GfGZ77onb/PVFEVa+jzrd4T+tTNtJI5fdUW0tGGceD58pkYhkhXOnRYLFndbJsBWkeB6wPoaO/u8uZ8moLdU790+m4dDkPCvbTSQEuw+BHzVpypdbQVS5qzVrS8HQSeTuciekH7tYDPkDN9nImFMayapEs6r3ldo8Iw4NE6yk2/wp9qRuFir2bQu44bdT6gRUDpbeC7h2y70bMpA9xyEDhviZU6/Bqw/9HkCgXP/G+K6AqUl8iHeLbRYtJBvQh8hCBCWrIWWNAV9uq/lz3swMxMAYcih8mtk06lImEgFgHKm1nlpnr0x25g7HM728R13c/Xk7Tj8o0rnnYypTd53I+4frzldOcFaKmZV6JsRAeedbOL7wcWrnL9eOsyukNbhx2VnwxviUtE+073UgFieiYpazeiP/fQtJ9aCY8W7n6xtrR8YsUTbu7wq7MfAqe70wEKSwi3VbJVbaUOul5udVJGSTRzgR2fYu788eWkTHzE6TaAFMJJJiTZZr3nX18B5Y/c7MrYp2glkOVVJ+kQwUwnErpbX2lVdPuy0FEznl1cmW7YKG5iXAl+w4W9LMJud+IrngRa221/4hdgRKVPCnK6jwqQdR5Vemlo/Fv+hPecZOhLGTrx8vVuXI4886/rN2o53aMCVDKyKjvT0sHNNvpKPncjy9V7WHw9w2jO4y46McJd37LtNE+nuyRAn5g1qoHT0j+MwD+946Sv3Mrgsc71i5sJmMEwLTndhXSpo9bGWYav3iJYkkZnx78HBpm/EPhZdDbZi6cOZtgxSg2a24GSaFpS5C29kZQuPsexlGC0WjrtzWRQWPTJRMx8JN0OQj8wA7M8hl+KFv6qccofzrKoalq6pNOSwWAAqQ7h2JC5qiiwpSWVIYrEM5MExhN1YGPalVbOBFFT8A8FGFw0POdKWCLcS9j95t6kq4puB6eLtLd02Dtaf6DbaKvEbPVoJd1Wd5J5DWIA1O3gDF+DIoACUDm+h8hn5aIYnjJhMUTzKRv2kAvmhqmrShdroVM5fXYr99Ra7aG97K21IB2BLifHVsJC4Wzw+baxv8GMnc0/G0JQegenj7nhzPwdU627YZvAzo0/rOIoCUzXJt1U8mTV46pbxCKVMmJV9PKT7fQTpabU9D98LCvWuiVWewAAAABJRU5ErkJggg==">';
                            if (t > 0 && t < 8)
                                return '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABQNJREFUWAnNWF1oHFUUPrPZzTabNGQrae1CI7UorlVLo/RhU8SXtYp5aChUqEpBQVHRIpWCIvhYrZYSRIroi1oFC6F9SNEQ8SVp6EOb+p/600JSmmgCTWqzu83+ZPy+O3d+drKbHSVpc+DszNy5937fnHvuueesIf9RTNOMY8gT0DS0DZrQiouMax3DtR96yjCMaVyXXkCkC/odtAANKuzLMV1BGRm1OmKyDvQ5BE2xb2FezMHxOaNvLC+/Txflr+y8Ur67PRZSenc8LDva6mV7ImpGQmJjDKHLAVjsNPtWE7vzgvcgUofGw9B9fDmVmzffH84YPRdvyGzBZFNNaYoYsmvTKnm9vdFsbQjZWN0YuB/ESpUmsDuVvQOZFjQch6bzsMiR87PGRz9nJVss6xb4IRYWeeG+mLy2tcmstyxG/9oNUjP+SRYQ0mRo3iStsrd/xhie+p9MfGjtrWH5NN1iW2sEr1N+UmWE9DJ9jY7pX68W5am+GZmAjyylrIeffbmjRZJrYDZrJz7uXb6QD4w+k6ZlloMMsfiBe/ChxCAWlJiOOBaCdbibBukzO3uvLtkyOUi+Gy7fyc41tk9th5XU7vNaiFtb6MBL5TM+DmWPxCCWblTYvFeEYB0GrhTNyN10s4RYeulSmoMozwKBV0iCcabS1t61KSrROutj+i/nOUkgztvWRWQznLdkmpJB7Oq5OFc2jljEfLdjNdvJ4YQBZjybJhGB65LHpoxKQe/oI83ShQBH+eK3nOwfvK7uF/tBvJEzu2+TRCPjq8gnv2TlrTOzC4YweI483cqIzkC5lkvWCQ3zOKhEhjOQhC1P3rVKNjZbIHZbpeveZINDpoANdfSnyq5ATGJjDq5WJwlx6wnPpmoyOFGQs38X1OswToAD7Y3Vuqp2RuZXt7h9Pr+QkyuZ6svswU6T0AbOwoNyMTl4zjX3zjujkoxXt9Jz98YEZ5eaLls05cj3la1j43mwN3AU8xnnxLY7+a+nYaWBK5YVETPkjYea/F3UM33ipQdizjv6Tq1NwIxBSyIwIQ7wWunRtqg8uNbepPZ8Ii/eH5N41LLOtbl5+fDHxa3DkX5CKpfAR9cUBrO+UXfrvumzUjxqyPObG5x5SOZavnaq4sE2+SkTnGGdXnNntio378CXECrU24719fJwIuL0fBlLtZr7HTKZLcnHWK4g4sGe4GjmwSrTCzJ4ZLokJy+5VrJ9iU78LJzZFjpyrmIKZvdwr8w0tYzzbowPTDuDynvDGSmpw1pka2tEHrujXvZtiUksbK376PWSHPPErlrzerDHSOhbDmAOHFQu/VOSr/644XR/e1uTPHOP6zskjMgfWDzY/STUCy0yIeeWDSqHz2ckX7J8aWNz2DnrLiCe9fzpkq01HzGJTQ7QUyHEFNZNA6wOmJAHFUbezxCB/aKc3t+4yDMxdWUyQC60EOUD/rA6YNgPKt0/MPF3t/W5yYJ8M1r9CPLPSyxi6nbFQRECsxNoHGKpwuogqDACMxJz6XIgdvCse7wEmYNYujwa0hycIo6xZWWlsGDInLabdRNLFVYHyyWcmxjEIqbGVnBl2wpW4hGuyqARlEGsDm52GVRGiBRBilXryigUSYiiSR3H7a0vpRUjixSXj0Xcrf+zwSbFq959h3Cb4vNy/x1DjEACYivjDys/WxBj2cRKhcUB83GmwFQKUxnqZSj/cunFlubRFFj+BfKAsL4k96B7AAAAAElFTkSuQmCC">'
                        } else {
                            if (220 === t)
                                return '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABjdJREFUWAnNWGtsVFUQ/u6+2S70gUXAFDE8FKoCAUReQSlFlAYpCoKJtKCg/UF4iWDkh4l/UFBASFQiEMQYIVBFISIliKkSo5KIkSgiAau8CpS+tux2H9f5Tvcu++h27xKITDr3nnPuzJmvc+bMmbMaMiRd13NFZbJwsXAv4Z4RlhfORbhG3lXC+zRNuyrvm08CpFT4kHBA2CxRljqlZhFp6QRlstEi85bwKCUbDOitP1drger9CJ0+gfCliwhfvqA+We7oDkv+nbDecy/sYyfBMWysDpvdsHFEhF4Rj32vhFM8DOGkzwLEKoNvCy/kR72uVm/5cLXm378LaGnmUHpye+Cc9DTcLyzTtbxuhq31orhUgIXam8AQivsmYHJkYKdwMQKtesvWdzTfJ+8BvpY4OdMdlxuuZyvgnrNEh91Bm4yvGQKqPnGOJEARMHTvAHqlcdlsLXT8aKLeDfWthUPRZfVHhrd+l0lGJYKKAxRZpq9EsDh48jialsyCfun8DRlPpaTl90DntZ/C1ncgReipx2OXz5KgyJgppmduBRja4j/YtHimiknaEqbNKEU9JN7hbvqOMdPw0pSMlslS0Ad6wxXojUkhETWU2ODyZb//hRFTY8RLavfFeohbGwzgTGOm0+wFcM2Yl2izwz5t0FZESNlmWw2Id5i4KrlUV6cN1zLZTVp+d+RUHoXe4kX91CHANW/EhomX7L7cyp+MIJ8mXvrM8NACqjPPZAKGOq6ZFdDsDliyc+EqLeOQeZI0omy2aSgMmngnV/q1CAasdRP7a6aTnihpni7I2XMMWpZHTcmMXV86FBKHbSbMPCV55h34kxmdibIbPVQibONxkAkY2nI+NVeB0X3XoIfD4NHhLJnFT+ZJsr6yLRhEqYSAuPXAsykjcjjhema+UvHt2ozA4b2q7XpOPG8xIsHcjDG2i4mqgGo8KNsj26ARsI95TNZH4p/MfSB/1p53w5KXL8HcDN/2DbD0KIBj/BQ17nljkxy6cuDqYfnTRUdYPNj69W6E/jqeZCbGdgEBsZ5Rp3aSpAwEfzsKV/liOEYWtfcZvh2bJAfVISQc+PFb2B8aB0fRk3GyugSvd/XydsFQkBVDhHoyqJuk46l7tHfqLevshM4bd8P+wHCl13roSwRP/Kra/sqt0JsaVNvatxBO2WnOaeXiTHpTPH/mJJpfnZNyBZRQpyzkfXOGzWYuNn2qlkG923v4r6FZzrXgKZ6Hslz3DYJ/9xb4tq2LguG4pWs3OCZMjYJhqdJQPqFjMFRsw86WTkDq9LR07c6BlEQvNC2cjtC5vyVOeiFr5btxsq6yRfDIocl8pPt98K5aCu/rFaZKlhjb5wmIdbCq9OIstNPRL18UUDMgywzHI5Nh4xK6s+B5cxvcFa9Bk90VqjmFxucnwb9nO7ghzBCrzAidI6Aadlh2miNNLQlBkbK3VMEx7gnV9h/8XJaoSHnRs+ZjuF9epcbTPWJs1xDQQSqwBjZDtkI5r0itfnRetxPW3v2gS5u7yLtyHiy5+cjevB+O0RNh7TNQZfM2hdTPGNtVBMSMFlQFuaTxdGSTsoGkOV0qS4fOnkHj/MkqyG3DxqLLlgNRb3MJbQ+mWTaxqWwLBpl2n0W2J+9N1bwdsCBPRwYgyrUe3ofG2eMR+uMYLHf1BhMigzqWbIMfju0mtZXNtptJNbHQQ6QNfPB2ACkJUpKc6tZ+hdCDAXjXrkTzinLoXqYxSW7iKR6s3jUrEPr3dHQK25CR0XZSQ2wpm20fFAYFiHWIjB3hVYW3g1Rk7X8/wldq0fhiCfw7PkgWk4zsl3OtYfoINC0vQ+CXH2AbMFhOYVeyrIzQVuR6dCSC4XpKkl2TtoRlJg7Xns2sVB04BOELolNXGwcqVQl7PUeKuIBaJ6+FrBzryyZoN/vGYSDizSNn20GjUlwv3llkfDNiyOgvlUYV3cirChVvNhnXoMhS8RpEm1GK8xBHxUs58vrfLoqJHmIWrhdA/GFBeYpXFddc+Sc62n0i3CGJLufgXDGeSbq1co4kDxkTi6dunx8bDFB8R3Yf7030muTTW/tzjLJh5iHAbo8frBLBCjCeDbyp8HLAepwlMJnEUob8jzB30F6JSR5Npuk/Y2fzgYWQ+rEAAAAASUVORK5CYII=">';
                            if (10 === t)
                                return '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABRRJREFUWAnNWF1sFFUU/s52LRYqtlbEoKWiaAOKElRitkUgukSlGjGxTXzxxSgvBKNGbYxPqCRYEonP+KYJrfig3WhSI9HaaigkGk0aDEptI/hDLUGRVNq9fufOzO7O3NnOSmrrSc7eO/d+Z8435/6du4J/KcaYeppspWapy6nLfGWBk76Osuyj5kRkguXsC4lso35CvUCtVBSrNtsqZSRJQL6shZg91IzFTuWN+WZMzOETwBg/fuIc8DtV5YpFQD21sR6yfgVkTaNBOhX4GCTieUZswGLL/ARgp5tEqti4l7rTdp75y+QPHBZ8egw4f8HBxzbUXAJsbEaqY71B3cLA1z5inyWx6TibABTqI5k6NnRTs5iaNvnuIcH7XwGTUyFcxQ8L0sBDa5Fqv5MRq1KfOr/aSepM9B0OIZ+MhncVNCq7c4LvfonaXdzzTUuR6twaRGuYL8lESYUI+cP0IYFZM3Ia5pUPgHF/flwcBdeqYRHk5QchTVdqn0bq/tLhS0UsdM5kNTL/CRl1xg80u/ih9GF9efNUe6wUIsTo6Gr63M6Zl96bvWHyHTmFDt+rjwRzqpVRsquvNEK6tGEn8GzNGYdFSQN9WF9ek/WtVUuI0dGNK2PDqKspIvLURmCFHfNIT4WP1y+BPMl3REV9eUOX8Tl4hIjboVi7z8QsbblvDaSrA9jUHH1l8jNt5PV2YMvNLpa+rE+vx3JIkZmeTRvAHdhueq6ZbRFuuLLjXiJvLIOIaW5ZaW3UtqzoRqu++WblokPWRk3rcZC0A1tS2zd7x0NZD37H5TWQ7ZswIxmFcte3vsmBT21KKKvt9mzSSoLIwmrIExsSUIA83gKpvTQRp4AS31kl1Git9KCsUCSzEmhqKI9eutieYeUBkZ6i70YlpPmMd2rbivtjYrYBeXidC/RbpO02d6iO/1oWbzMGr3dZkVCQQsSYmZ4ht7WVUVocMyTVTBLuWeXgzcGjTluhoejbEtIZPrMcGYEZPhXCSJqOW2NW3O3XQWqqQ1gb4aETobYyD0Yj5HnS5GoGMfs/g5nOhxByt7svSYSk4Yo2b/WH7JyHou9TSkjz4OSl/P1vQDTsPI/A5V0Q3W/WappdIr1fA8d+LmmIqWqW6clJJTRq60w7k8R0D8H8QGK+8EAEOEQFab4aui0EYn6agHn7i+CxfFn0PaqEPlak5sCJwiEzu3Mwp/8sQOXWawt13HJNoW7Onod5LQf8HZupFnBaKfHdp4R6qVM2IdccOElIxrz4LgpbgZLwVdY1WWszOg7TeZCTwclQ3bfTp/VNDuzMpRn2CZ4h/bwdbNaEHB996xpFW8ZJ6tAwhHNIGmohuzRZKIoZOF4ZGTVRn97NpF+5aIRU3tQfezvQhHyuhL6sT8+f5cBZ6QmjNMBaJv/Ol0DPkaA5XN5wFaTzAaB2Ab+qClIVfE8YZreHKc6dPybtnEPJQgghH70Dqcfu0qZBRkczVpQSSkxhpasdQlIq+f3cW46O2Lrzs7wB8swWSHXazjXzQo8DQZkUtkBILRilN1js1Cwu/9wBcW4cq3ns6bI+NwlEdm7Hox6+Sy6Lx/LmkerqCK5D+xidpwP7KCGeB/CuQT/yGqS3gzm+BoUIKUtGqY7FIHX+L4pKSMUn1c3q/F+lLSOPlA7fXur8/9kQkNKS0dLVt4c6J3/HqM+KhMT+H39YRdmSmKYFelPRy4Hm45oCe2lw8S+9Mbb1UXv1OGBZsfwD29hsoZa+Q14AAAAASUVORK5CYII=">'
                        }
                    }
                    return 0
                },
                clsName: function() {
                    return "m-icon-".concat(this.cls)
                }
            }
        }
          , dt = ut
          , ft = (n("b3ad"),
        Object(_["a"])(dt, at, ct, !1, null, null, null))
          , ht = ft.exports
          , mt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "hover-item",
                class: t.name
            })
        }
          , pt = []
          , gt = {
            name: "hover-item",
            props: ["name"]
        }
          , vt = gt
          , bt = (n("995c"),
        Object(_["a"])(vt, mt, pt, !1, null, "1d2a48c7", null))
          , yt = bt.exports
          , _t = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return 11 === t.modalId && t.message.mid ? n("ul", {
                staticClass: "menulist absolute",
                style: [{
                    width: t.bubbleListWeight + "px"
                }, t.clickCardStyle]
            }, t._l(t.cardMethods, (function(e, r) {
                return n("li", {
                    key: r,
                    class: {
                        "click-copy": "复制" === e.value
                    },
                    on: {
                        click: function(n) {
                            return t.filterClick(n, e)
                        }
                    }
                }, [t._v("\n    " + t._s(e.value) + "\n  ")])
            }
            )), 0) : t._e()
        }
          , wt = [];
        function xt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function jt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? xt(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : xt(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var kt = {
            mixins: [A["a"], it, ot],
            data: function() {
                return {
                    cardMethods: [],
                    clickCardStyle: {
                        top: 0,
                        left: 0
                    },
                    bubbleListWeight: 130,
                    message: null,
                    media_type: 0,
                    videoPictureFid: void 0,
                    copyItem: {
                        method: this.copy,
                        value: "复制"
                    },
                    recallItem: {
                        method: this.recall,
                        value: "撤回"
                    },
                    deleteItem: {
                        method: this.delete,
                        value: "删除"
                    },
                    shareItem: {
                        method: this.share,
                        value: "转发"
                    },
                    reportItem: {
                        method: this.report,
                        value: "投诉"
                    },
                    downloadItem: {
                        method: this.download,
                        value: "下载"
                    }
                }
            },
            computed: jt({}, Object(O["d"])(["modalId", "querygroup"])),
            methods: jt({}, Object(O["c"])(["changemodalId"]), {
                notGroup: function(t) {
                    return ("" + t).length < 15
                },
                filterClick: function(t, e) {
                    e.method()
                },
                copy: function() {
                    this.$copyText(this.message.text).then((function(t) {
                        console.log(t)
                    }
                    ), (function(t) {
                        console.log(t)
                    }
                    ))
                },
                share: function() {
                    T["a"].$emit("choose-user", {
                        id: "shareModal",
                        vm: this,
                        title: "转发",
                        confirmBtn: "确定转发",
                        cancelBtn: "取消",
                        searchText: "搜索联系人/群",
                        chosenText: "已选择联系人",
                        searchType: 2,
                        listType: 1,
                        withGroup: !0,
                        withUser: !0,
                        defaultList: [],
                        onconfirm: function(t, e) {
                            var n = this;
                            t.forEach((function(t) {
                                n.notGroup(t.id) ? n.sendMsg(t) : n.sendGroupMsg(t)
                            }
                            )),
                            e.close(!0)
                        },
                        oncancle: function(t) {
                            t.close(!0)
                        },
                        listener: function() {}
                    }),
                    this.checkgroups().then((function(t) {
                        T["a"].$emit("refresh-choose-user", {
                            id: "shareModal",
                            defaultList: t
                        })
                    }
                    ))
                },
                delete: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, r = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return T["a"].$emit("loadingCard", this.message.mid),
                                    this.notGroup(this.$store.state.selectId) ? (e = {
                                        id: this.message.mid
                                    },
                                    n = "deleteMsg") : (e = {
                                        id: this.$store.state.selectId,
                                        mid: this.message.mid
                                    },
                                    n = "groupDeleteMsg"),
                                    t.next = 4,
                                    a["a"][n](e).then((function(t) {
                                        return r.updateChatlist(),
                                        e.mid && r.$store.commit("deleteRecords", e.mid),
                                        t.error && r.finishModal("删除失败"),
                                        t
                                    }
                                    )).catch((function(t) {
                                        r.finishModal("删除失败")
                                    }
                                    ));
                                case 4:
                                    T["a"].$emit("notLoadingCard", this.message.mid);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                updateChatlist: function() {
                    var t = this.$store.state.chatrecords;
                    if (t[t.length - 1].mid === this.message.mid) {
                        var e = Object(u["l"])()
                          , n = d["a"].findIndexAndLt(this.$store.state.selectId)
                          , r = n.lt
                          , i = n.i
                          , s = this.findItem(this.$store.state[r])
                          , o = t[t.length - 2]
                          , a = {
                            textToken: e,
                            fileToken: "",
                            affi_type: "",
                            fid: o.fid,
                            created_at: o.created_at,
                            dm_type: o.dm_type,
                            message_type: o.type,
                            sender_id: l["f"].basicinfo.id,
                            sender_screen_name: l["f"].basicinfo.name,
                            sub_type: o.sub_type,
                            text: o.text,
                            type: s.type,
                            unread_count: 0,
                            errorsend: !1
                        };
                        this.$store.commit("update" + r, {
                            i: i,
                            param: a
                        })
                    }
                },
                recall: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, r = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return T["a"].$emit("loadingCard", this.message.mid),
                                    this.notGroup(this.$store.state.selectId) ? (e = {
                                        id: this.message.mid
                                    },
                                    n = "recallMsg") : (e = {
                                        gid: this.$store.state.selectId,
                                        mid: this.message.mid
                                    },
                                    n = "groupRecallMsg"),
                                    t.next = 4,
                                    a["a"][n](e).then((function(t) {
                                        "只能撤销三分钟之内的消息" === t.error || "recall msg not allowed, over 3 mins!" === t.error ? r.finishModal("无法撤回超过 3 分钟的消息") : t.error ? r.finishModal("撤回失败") : t.result && r.updateRecord(t, e.mid)
                                    }
                                    )).catch((function() {
                                        r.finishModal("撤回失败")
                                    }
                                    ));
                                case 4:
                                    T["a"].$emit("notLoadingCard", this.message.mid);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                download: function() {
                    var t = document.createElement("a")
                      , e = "//upload.api.weibo.com/2/mss/msget?source=209678993&fid=" + this.message.fid
                      , n = "this.message.filename";
                    t.href = e,
                    t.download = n,
                    t.click()
                },
                report: function() {
                    var t, e;
                    this.notGroup(this.$store.state.selectId) ? (t = 11,
                    e = "https://service.account.weibo.com/reportspam?rid=".concat(this.message.mid, "&type=").concat(t, "&from=10104")) : (t = 28,
                    e = "https://service.account.weibo.com/reportspam?gid=".concat(this.$store.state.selectId, "&rid=").concat(this.message.mid, "&type=").concat(t, "&from=10104")),
                    window.open(e, "_blank", "width=550,height=700")
                },
                checkgroups: function() {
                    var t = this;
                    return new Promise((function(e) {
                        var n = t.$store.state.chatlist.filter((function(t) {
                            return -100 !== t.id
                        }
                        ));
                        n = n.map((function(t) {
                            return {
                                id: t.id,
                                avatar: Object(u["b"])(t.round_avatar_large) || Object(u["b"])(t.avatar_large),
                                name: t.name
                            }
                        }
                        )),
                        e(n)
                    }
                    ))
                },
                finishModal: function(t) {
                    this.$modal({
                        icon: {
                            text: n("6008")
                        },
                        text: t,
                        duration: 1e3
                    })
                },
                filterFeatures: function() {
                    var t = this
                      , e = this.message.cardtype;
                    if ("card1" === e || "card2" === e || "card3" === e ? this.cardMethods = [this.copyItem, this.recallItem, this.deleteItem, this.shareItem] : "card4" === e || "card9" === e ? this.cardMethods = [this.recallItem, this.deleteItem] : "card5" === e || "card10" === e ? this.cardMethods = [this.recallItem, this.deleteItem, this.shareItem, this.downloadItem] : "card6" === e || "card8" === e ? this.cardMethods = [this.recallItem, this.deleteItem, this.shareItem] : "card11" === e && (this.cardMethods = [this.recallItem, this.deleteItem]),
                    "left" === this.message.direct) {
                        if (-1 !== this.handleIdentity().indexOf("owner"))
                            return;
                        if (this.message.userinfo) {
                            if (-1 !== this.handleIdentity(this.message.userinfo.id).indexOf("owner") || -1 !== this.handleIdentity(this.message.userinfo.id).indexOf("admin") || !this.handleIdentity().length) {
                                var n = this.cardMethods.findIndex((function(e) {
                                    return e === t.recallItem
                                }
                                ));
                                this.cardMethods.splice(n, 1)
                            }
                        } else {
                            var r = this.cardMethods.findIndex((function(e) {
                                return e === t.recallItem
                            }
                            ));
                            this.cardMethods.splice(r, 1)
                        }
                    }
                },
                handleCardPosition: function(t) {
                    var e = window.innerWidth
                      , n = t.clientX + this.bubbleListWeight > e ? t.clientX - this.bubbleListWeight : t.clientX;
                    this.clickCardStyle.left = n + "px",
                    this.clickCardStyle.top = t.clientY + "px"
                },
                updateRecord: function(t, e) {
                    var n = this.$store.state.chatrecords.length
                      , r = this.$store.state.chatrecords;
                    for (var i in r)
                        if (r[n - i - 1].mid == e) {
                            var s = {
                                fid: "",
                                text: t.info.recall_text,
                                created_at: 1e3 * t.ts,
                                sub_type: 331
                            };
                            return void this.$store.commit("replacerecord", {
                                i: n - i - 1,
                                param: s
                            })
                        }
                }
            }),
            mounted: function() {
                var t = this;
                T["a"].$on("clickCard", (function(e, n) {
                    t.message = n,
                    t.handleCardPosition(e),
                    t.filterFeatures(),
                    t.handleCardType()
                }
                ))
            }
        }
          , Ot = kt
          , Ct = Object(_["a"])(Ot, _t, wt, !1, null, null, null)
          , It = Ct.exports
          , $t = n("8917");
        function Tt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function At(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Tt(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Tt(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Pt = function() {
            return n.e("async-largepic").then(n.bind(null, "c6fa"))
        }
          , St = {
            mixins: [nt["a"], A["a"], it, ot],
            filters: {
                formatDate: function(t) {
                    t || (t = (new Date).getTime());
                    var e = (new Date).getTime()
                      , n = new Date(J()(e).format("YYYY/MM/DD") + " 00:00:00").getTime()
                      , r = n - 864e5
                      , i = r - 864e5
                      , s = new Date(J()(e).format("YYYY") + "/01/01 00:00:00").getTime();
                    if (t >= n)
                        return J()(t).format("HH:mm");
                    if (t >= r)
                        return "昨天" + J()(t).format("HH:mm");
                    if (t >= i) {
                        var o = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
                        return o[J()(t).day()] + " " + J()(t).format("HH:mm")
                    }
                    return t >= s ? J()(t).format("MM-DD HH:mm") : J()(t).format("YYYY-MM-DD")
                }
            },
            data: function() {
                return {
                    showmodalmsgk: -1,
                    showloading: !1,
                    showSetting: !1,
                    scrollTopvalue: 0,
                    startListen: !1,
                    position: 0,
                    ts: Date.now(),
                    isfirst: !0,
                    canshowmodal1: !1,
                    modalX: 0,
                    modalY: 0,
                    message: {}
                }
            },
            mounted: function() {
                var t = this;
                T["a"].$on("newMsg", (function() {
                    t.isfirst = !0
                }
                )),
                T["a"].$on("busScrollToBottom", (function() {
                    t.scrollTopvalue = t.$refs.chatcontent.scrollHeight
                }
                ))
            },
            components: {
                cardcontain: F,
                bubbleLoading: et,
                largePic: Pt,
                weiboVerified: ht,
                hoverItem: yt,
                clickCard: It
            },
            computed: At({}, Object(O["d"])(["followuser", "selectId", "remarklist", "chatrecords", "usercardinfo", "unfollowlist", "querygroup", "showunfollow", "nomorerecords", "modalId", "lastreadmid", "loadmore", "prescrollTop", "friendslist", "joingroups"]), {
                modalStyle: function() {
                    return {
                        top: "".concat(this.modalY, "px"),
                        left: "".concat(this.modalX, "px")
                    }
                },
                checkidentify: function() {
                    return !(!this.isowner && !this.isAdmin)
                },
                isowner: function() {
                    return this.querygroup.owner == l["f"].basicinfo.id
                },
                isAdmin: function() {
                    if (this.querygroup.admins) {
                        var t = this.querygroup.admins.findIndex((function(t) {
                            return t == l["f"].basicinfo.id
                        }
                        ));
                        return t >= 0
                    }
                },
                isshowtoptips: function() {
                    return !(1 != this.curuserinfo.type || this.followuser && !this.user_is_blocked)
                },
                curuserinfo: function() {
                    var t = this;
                    if (this.$store.state.showunfollow)
                        return this.$store.state.unfollowlist.find((function(e) {
                            return e.id == t.$store.state.selectId
                        }
                        ));
                    var e = this.$store.state.chatlist.find((function(e) {
                        return e.id == t.$store.state.selectId
                    }
                    ));
                    return e || (e = this.$store.state.topuser.find((function(e) {
                        return e.id == t.$store.state.selectId
                    }
                    ))),
                    e
                },
                getname: function() {
                    return 2 == this.curuserinfo.type ? this.curuserinfo.name : this.findremark(this.$store.state.selectId, this.curuserinfo.name)
                },
                user_is_blocked: function() {
                    var t = this.listtype()
                      , e = this.findItem(this.$store.state[t]);
                    return e ? e.is_blocked : !("chatlist" != t || (t = "topuser",
                    e = this.findItem(this.$store.state.topuser),
                    !e)) && e.is_blocked
                }
            }),
            watch: {
                selectId: function() {
                    this.ts = Date.now(),
                    this.iAmTfBoys = !1
                },
                chatrecords: function() {
                    var t = this;
                    if (this.startListen = !1,
                    this.chatrecords.length)
                        if (this.loadmore)
                            this.scrollTopvalue = this.$refs.chatcontent.scrollHeight - this.position,
                            this.$parent.$refs.chatinfo.isswitch = !1;
                        else {
                            var e = this.scrollTopvalue;
                            setTimeout((function() {
                                var n = t.scrollTopvalue;
                                (Math.abs(e - n) < 200 || t.$parent.$refs.chatinfo.isswitch) && t.$refs.chatcontent && (t.scrollTopvalue = +(t.$refs.chatcontent.scrollHeight + 160 * t.chatrecords.length) + 1e5),
                                t.startListen = !0,
                                t.$parent.$refs.chatinfo.isswitch = !1
                            }
                            ), 250)
                        }
                },
                scrollTopvalue: function() {
                    7 === this.$store.state.modalId && this.$store.commit("changemodalId", -1)
                }
            },
            methods: At({}, Object(O["c"])(["changemodalId", "updatechatlist", "exnogroupmodal", "exprescrollTop", "updateunfollowlist"]), {
                showSettingMethods: function() {
                    var t = this;
                    this.showSetting = !0,
                    a["a"].groupquery({
                        params: {
                            id: this.$store.state.selectId
                        }
                    }).then((function(e) {
                        var n = e.admins
                          , r = e.owner
                          , i = e.affi_type
                          , s = e.affi_join_type
                          , o = e.apply_update_type
                          , a = e.speech_forbid;
                        t.$store.commit("flashquerygroup", {
                            admins: n,
                            owner: r,
                            affi_type: i,
                            affi_join_type: s,
                            apply_update_type: o,
                            speech_forbid: a
                        })
                    }
                    ))
                },
                updateFansGroup: function() {
                    a["a"].updateFansGroup({
                        id: this.$store.state.selectId,
                        page_id: l["f"].basicinfo.id
                    }).then((function(t) {
                        console.log(t)
                    }
                    ))
                },
                transferGroup: function() {
                    var t = this;
                    $t["a"].transferGroup.addCount(),
                    T["a"].$emit("choose-user", {
                        id: "tansferGroup",
                        single_choose: 1,
                        vm: this,
                        title: "选择新群主",
                        confirmBtn: "确定",
                        cancelBtn: "取消",
                        searchText: "搜索群成员",
                        chosenText: "已选择联系人",
                        searchType: 1,
                        listType: 2,
                        withGroup: !0,
                        withUser: !0,
                        defaultList: [],
                        onconfirm: function(e, n) {
                            t.$parent.$refs.cardcontaininfo.curView.push(""),
                            e.forEach((function(e) {
                                t.$modal({
                                    icon: {
                                        text: "".concat(e.avatar)
                                    },
                                    text: "点击确定后，他将成为「".concat(t.querygroup.system_name, "」的新群主，你将失去群主资格。"),
                                    name: e.name,
                                    hidemask: !0,
                                    okObj: {
                                        text: "确定",
                                        okFun: function() {
                                            a["a"].tansferGroup({
                                                params: {
                                                    privilege_use: 0,
                                                    id: t.$store.state.selectId,
                                                    new_owner: e.id
                                                }
                                            }).then((function(e) {
                                                t.$parent.$refs.cardcontaininfo.curView.pop(),
                                                n.close(!0)
                                            }
                                            ))
                                        }
                                    },
                                    cancelObj: {
                                        text: "取消",
                                        cancelFun: function() {
                                            t.$parent.$refs.cardcontaininfo.curView.pop()
                                        }
                                    },
                                    width: 340,
                                    closebtn: !0
                                })
                            }
                            ))
                        },
                        oncancle: function(t) {
                            t.close(!0)
                        },
                        listener: function() {}
                    }),
                    this.checkgroups().then((function(t) {
                        T["a"].$emit("refresh-choose-user", {
                            id: "tansferGroup",
                            defaultList: t
                        })
                    }
                    ))
                },
                checkgroups: function() {
                    var t = this;
                    return new Promise((function(e) {
                        var n = t.querygroup.member_infos;
                        n = n.filter((function(e) {
                            return e.uid !== t.querygroup.owner
                        }
                        )),
                        n = n.map((function(t) {
                            return {
                                id: t.uid,
                                avatar: t.profile_image_url,
                                name: t.screen_name,
                                jp: t.jp,
                                qp: t.qp
                            }
                        }
                        )),
                        e(n)
                    }
                    ))
                },
                updateToAffi: function() {
                    $t["a"].updateAffi.addCount(),
                    this.$parent.$refs.cardcontaininfo.curView = "updateToAffi"
                },
                updateSpeechForbid: function() {
                    var t = this;
                    $t["a"].speechForbid.addCount();
                    var e = {
                        id: this.$store.state.selectId,
                        speech_forbid: "1" !== this.querygroup.speech_forbid ? 1 : 4
                    };
                    a["a"].updategroupmsg(e).then((function(n) {
                        if (n.result) {
                            var r = 1 !== e.speech_forbid ? "关闭" : "开启";
                            t.$toast("你已".concat(r, "全员禁言"))
                        } else
                            t.$toast(n.error)
                    }
                    ))
                },
                shareGroup: function() {
                    this.message = {
                        text: this.querygroup.group_url,
                        cardtype: "card2"
                    },
                    T["a"].$emit("choose-user", {
                        id: "manage",
                        single_choose: 0,
                        vm: this,
                        title: "群分享",
                        confirmBtn: "分享",
                        cancelBtn: "取消",
                        searchText: "搜索联系人/群",
                        chosenText: "已选择联系人",
                        searchType: 2,
                        listType: 1,
                        withGroup: !0,
                        withUser: !0,
                        defaultList: [],
                        onconfirm: function(t, e) {
                            var n = this;
                            t.forEach((function(t) {
                                1 === t.type ? n.sendMsg(t, !0, "分享成功") : 2 === t.type && n.sendGroupMsg(t, !0, "分享成功")
                            }
                            )),
                            e.close(!0)
                        },
                        oncancle: function(t) {
                            t.close(!0)
                        },
                        listener: function() {}
                    }),
                    this.checksharegroup().then((function(t) {
                        T["a"].$emit("refresh-choose-user", {
                            id: "manage",
                            defaultList: t
                        })
                    }
                    ))
                },
                manage: function() {
                    $t["a"].setAdmin.addCount(),
                    this.$parent.$refs.cardcontaininfo.curView = "manageAdmin"
                },
                checksharegroup: function() {
                    var t = this;
                    return new Promise((function(e) {
                        var n = t.$store.state.chatlist.filter((function(t) {
                            return -100 !== t.id
                        }
                        ))
                          , r = [];
                        n = n.map((function(t) {
                            if (t.id && !r.includes(t.id))
                                return r.push(t.id),
                                {
                                    id: t.id,
                                    avatar: t.round_avatar_large || t.avatar_large,
                                    name: t.name,
                                    type: t.type
                                }
                        }
                        )),
                        n = n.filter((function(t) {
                            return void 0 !== t
                        }
                        )),
                        e(n)
                    }
                    ))
                },
                getbasicinfod: function(t) {
                    return t ? l["f"].basicinfo[t] : l["f"].basicinfo
                },
                curuserremark: function(t) {
                    return this.findremark(t.id, t.name)
                },
                isshowmsgtime: function(t) {
                    var e = this.chatrecords[t].created_at;
                    if (0 == e)
                        return !1;
                    if (0 == t)
                        return !0;
                    var n = this.chatrecords[t - 1].created_at;
                    return e - n > 3e5
                },
                checktype: function(t) {
                    return !!t.type && (321 != t.type || 321 == t.type && t.sub_type > 0 || 321 == t.type && 9 === t.dm_type && 0 === t.sub_type)
                },
                checktype2: function(t) {
                    return !t.type || 321 == t.type && !t.sub_type
                },
                scrollToTop: function() {
                    this.nomorerecords || (this.showloading = !0,
                    this.position = document.querySelector(".chat-content").scrollHeight,
                    1 == this.curuserinfo.type ? this.personrecordreq(this.$store.state.selectId, this.lastreadmid) : 2 == this.curuserinfo.type && this.grouprecordreq(this.$store.state.selectId, this.lastreadmid))
                },
                showmodal1: function() {
                    T["a"].$emit("setNewGroup", [{
                        id: this.curuserinfo.id,
                        avatar: this.curuserinfo.avatar_large,
                        name: this.curuserinfo.name
                    }])
                },
                showmodal2: function() {
                    this.$parent.$refs.cardcontaininfo.curView = "modal2"
                },
                toggleset: function() {
                    this.$store.commit("changemodalId", 2)
                },
                clearbulletin: function() {
                    a["a"].clearbulletin({
                        id: this.selectId
                    }),
                    d["a"].setContactList(this.selectId, {
                        bulletin: void 0
                    })
                },
                shield: function() {
                    this.setshield(this.$store.state.selectId, this.user_is_blocked)
                },
                showusercard: function() {
                    2 == this.curuserinfo.type ? (-1 != this.$store.state.modalId && this.$store.commit("changemodalId", -1),
                    this.showmodal2()) : 1 == this.curuserinfo.type && this.showUserInfo(0, 3)
                },
                showusermodal: function(t, e) {
                    this.modalX = e.clientX,
                    this.modalY = e.clientY,
                    7 == this.$store.state.modalId ? this.$store.commit("changemodalId", -1) : this.$store.commit("changemodalId", 7),
                    this.showmodalmsgk = t
                },
                jump: function(t) {
                    window.open("//www.weibo.com/u/" + t)
                },
                tochat: function(t) {
                    this.selectUser(t),
                    this.changemodalId(-1)
                },
                atsomeone: function(t) {
                    var e = Object(u["n"])(this.$parent, "$refs.textinfo.cursor.start") || 0
                      , n = this.$parent.$refs.textinfo.inputcontent
                      , r = n.slice(0, e)
                      , i = n.slice(e)
                      , s = r + "@" + t.name + " " + i;
                    this.$parent.$refs.textinfo.inputcontent = s,
                    document.querySelector("textarea").focus();
                    var o = r + "@" + t.name + " ";
                    this.$nextTick((function() {
                        T["a"].$emit("cgcursor", {
                            start: o.length,
                            end: o.length
                        })
                    }
                    ))
                },
                removeuser: function(t) {
                    var e = this
                      , r = {
                        id: this.selectId,
                        uids: t.id
                    };
                    this.$modal({
                        icon: {
                            text: n("6008")
                        },
                        text: "移除成员：".concat(t.name),
                        okObj: {
                            text: "移除",
                            okFun: function() {
                                a["a"].kickuser(r).then((function(t) {
                                    t.error ? e.$toast(t.error) : e.getnewgroupinfo()
                                }
                                ))
                            }
                        },
                        cancelObj: {
                            text: "取消"
                        },
                        width: 340,
                        closebtn: !0
                    })
                },
                checkId: function(t) {
                    if (this.querygroup.owner == t)
                        return 1;
                    var e = this.querygroup.admins.includes(t);
                    return e ? 2 : 3
                },
                canremove: function(t) {
                    return +t !== +l["f"].basicinfo.id && (1 === this.checkId(l["f"].basicinfo.id) ? +l["f"].basicinfo.id !== +t : 2 === this.checkId(l["f"].basicinfo.id) && 3 === this.checkId(t))
                },
                showgroupinfo: function(t) {
                    this.$parent.$refs.cardcontaininfo.curView = "modal2"
                },
                scroll: function(t) {
                    [11].includes(this.$store.state.modalId) && this.changemodalId(-1)
                },
                retry: function(t) {
                    T["a"].$emit("retryMessage", t)
                },
                getMark: function(t) {
                    try {
                        var e = t.userinfo.id;
                        if (+this.querygroup.owner === +e)
                            return 1;
                        if (this.querygroup.admins.includes(e))
                            return 2;
                        if (+t.faith_status > 0)
                            return 3
                    } catch (n) {
                        return !1
                    }
                },
                getMyMark: function(t) {
                    try {
                        var e = this.getbasicinfod().id;
                        if (+this.querygroup.owner === +e)
                            return 1;
                        if (this.querygroup.admins.includes(e))
                            return 2;
                        if (this.iAmTfBoys)
                            return 3;
                        +t.faith_status > 0 && (this.iAmTfBoys = !0)
                    } catch (n) {
                        return !1
                    }
                }
            })
        }
          , Dt = St
          , qt = (n("0cc3"),
        Object(_["a"])(Dt, j, k, !1, null, "ae39a29c", null))
          , Mt = qt.exports
          , Et = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "textArea",
                staticClass: "text"
            }, [n("div", {
                staticClass: "sendbox_bar flex"
            }, [n("i", {
                staticClass: "icon icon-msg bq",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.showfaces(e)
                    }
                }
            }), n("i", {
                staticClass: "icon icon-msg tp",
                attrs: {
                    id: "btn_send_image"
                }
            }), n("i", {
                staticClass: "icon icon-msg fj",
                attrs: {
                    id: "btn_send_file"
                }
            }), n("i", {
                staticClass: "modal-contain"
            }, [2 === t.curuserinfo.type ? [1 === t.curuserinfo.remindSetting ? n("i", {
                staticClass: "icon icon-msg qc-n",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleset(e)
                    }
                }
            }) : n("i", {
                staticClass: "icon icon-msg qc",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleset(e)
                    }
                }
            })] : t._e(), 1 === t.curuserinfo.type ? [t.user_is_blocked ? n("i", {
                staticClass: "icon icon-msg pc-n",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleset(e)
                    }
                }
            }) : n("i", {
                staticClass: "icon icon-msg pc",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleset(e)
                    }
                }
            })] : t._e(), 2 == t.modalId ? n("ul", {
                staticClass: "moresets"
            }, [1 == t.curuserinfo.type ? n("li", {
                on: {
                    click: function(e) {
                        return t.shield()
                    }
                }
            }, [t._v("\n          " + t._s(t.user_is_blocked ? "取消" : "") + "屏蔽消息\n        ")]) : t._e(), 2 == t.curuserinfo.type ? n("li", {
                on: {
                    click: function(e) {
                        return t.setgroupnotice(t.selectId)
                    }
                }
            }, [t._v("\n          " + t._s(1 == t.curuserinfo.remindSetting ? "打开群消息通知" : "群消息免打扰") + "\n        ")]) : t._e()]) : t._e()], 2)]), 4 == t.modalId ? n("faces", {
                attrs: {
                    cursor: t.cursorCache
                }
            }) : t._e(), n("div", {
                staticClass: "sendbox_cont flex flex-1"
            }, [n("at", {
                attrs: {
                    members: t.atUserList
                },
                on: {
                    enterSend: t.send,
                    cursorRect: t.cursorRect
                },
                model: {
                    value: t.inputcontent,
                    callback: function(e) {
                        t.inputcontent = e
                    },
                    expression: "inputcontent"
                }
            })], 1), n("p", {
                staticClass: "sendbox_prompt"
            }, [t._v(t._s(t.showprompt))])], 1)
        }
          , Rt = []
          , Nt = n("75fc")
          , Lt = (n("3b2b"),
        function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "wrap",
                staticClass: "atwho-wrap",
                on: {
                    input: t.handleInput,
                    keydown: function(e) {
                        return e.stopPropagation(),
                        t.handleKeyDown(e)
                    }
                }
            }, [t.atwho ? n("div", {
                staticClass: "atwho-panel",
                style: t.style
            }, [n("ul", {
                ref: "atuserlist",
                staticClass: "atwho-view atwho-ul"
            }, t._l(t.atwho.list, (function(e, r) {
                return n("li", {
                    key: r,
                    ref: t.isCur(r) && "cur",
                    refInFor: !0,
                    staticClass: "atwho-li one-line flex",
                    class: t.isCur(r) && "atwho-cur",
                    attrs: {
                        "data-index": r
                    },
                    on: {
                        mouseenter: t.handleItemHover,
                        click: t.handleItemClick
                    }
                }, [n("span", {
                    domProps: {
                        textContent: t._s(e.remark)
                    }
                }), t.checkShowMore(e) ? n("img", {
                    attrs: {
                        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQ1NDgyNjY3NzY4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwODYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMzNi43MzMgMTE5LjY2N2wtNTYuMjc4IDU1LjcyIDMzNC44NTcgMzM3LjE1NC0zMzcuNjczIDMzNC4zMTUgNTUuODAyIDU2LjE4NCAzOTMuOTQ0LTM5MC4wNDB6IiBwLWlkPSIxMDg3Ij48L3BhdGg+PC9zdmc+"
                    }
                }) : t._e()])
            }
            )), 0)]) : t._e(), n("textarea", {
                directives: [{
                    name: "focus",
                    rawName: "v-focus"
                }],
                ref: "textarea",
                staticClass: "editor textarea-content",
                attrs: {
                    id: "webchat-textarea"
                },
                on: {
                    keyup: function(e) {
                        return t.getCursorRect(e)
                    },
                    keydown: function(e) {
                        return t.getCursorRect(e)
                    },
                    mousedown: function(e) {
                        return t.getCursorRect(e)
                    },
                    mouseup: function(e) {
                        return t.getCursorRect(e)
                    },
                    focus: function(e) {
                        return t.getCursorRect(e)
                    }
                }
            })])
        }
        )
          , Gt = []
          , Ut = (n("6b54"),
        n("87b3"),
        n("a481"),
        n("a0ec"))
          , Bt = n.n(Ut);
        function Wt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function zt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Wt(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Vt = {
            props: {
                value: {
                    type: String,
                    default: ""
                },
                suffix: {
                    type: String,
                    default: " "
                },
                loop: {
                    type: Boolean,
                    default: !0
                },
                avoidEmail: {
                    type: Boolean,
                    default: !0
                },
                hoverSelect: {
                    type: Boolean,
                    default: !0
                },
                members: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    atItems: ["@"],
                    bindsValue: null != this.value,
                    atwho: null
                }
            },
            computed: {
                style: function() {
                    if (this.atwho) {
                        var t = this.atwho
                          , e = (t.list,
                        t.cur,
                        t.x)
                          , n = t.y
                          , r = this.$refs
                          , i = r.wrap
                          , s = r.atuserlist
                          , o = this.$el.querySelector("textarea");
                        if (i) {
                            var a = e + o.offsetLeft - o.scrollLeft + "px"
                              , c = n + o.offsetTop - o.scrollTop + 25 + "px";
                            if (s) {
                                var u = s.clientHeight
                                  , l = 150 - parseInt(u);
                                parseInt(c) > l && (c = l + "px")
                            }
                            return {
                                left: a,
                                top: c
                            }
                        }
                    }
                    return null
                }
            },
            watch: {
                members: function() {
                    this.handleInput(!0)
                },
                value: function(t, e) {
                    this.handleValueUpdate(t)
                }
            },
            mounted: function() {
                var t = this;
                this.handleValueUpdate(this.value),
                T["a"].$on("cgcursor", (function(e) {
                    t.setCursorRect(e)
                }
                )),
                T["a"].$on("focusinput", (function() {
                    t.$refs.textarea && t.$refs.textarea.focus()
                }
                ))
            },
            methods: {
                checkShowMore: function(t) {
                    return t.remark.indexOf("展开更多成员") > -1
                },
                getAtAndIndex: function(t, e) {
                    return e.map((function(e) {
                        return {
                            at: e,
                            index: t.lastIndexOf(e)
                        }
                    }
                    )).reduce((function(t, e) {
                        return t.index > e.index ? t : e
                    }
                    ))
                },
                isCur: function(t) {
                    return t === this.atwho.cur
                },
                handleValueUpdate: function(t) {
                    var e = this.$el.querySelector("textarea");
                    t !== e.value && (e.value = t)
                },
                handleItemHover: function(t) {
                    this.hoverSelect && this.selectByMouse(t)
                },
                handleItemClick: function(t) {
                    this.selectByMouse(t),
                    this.insertItem()
                },
                handleKeyDown: function(t) {
                    var e = this
                      , n = this.atwho;
                    if (n) {
                        if (38 === t.keyCode || 40 === t.keyCode)
                            return void (t.metaKey || t.ctrlKey || (t.preventDefault(),
                            t.stopPropagation(),
                            this.selectByKeyboard(t)));
                        if (13 === t.keyCode)
                            return this.insertItem(),
                            t.preventDefault(),
                            void t.stopPropagation();
                        if (27 === t.keyCode)
                            return void this.closePanel()
                    }
                    var r = t.keyCode >= 48 && t.keyCode <= 90 || 8 === t.keyCode;
                    if (r && setTimeout((function() {
                        e.handleInput()
                    }
                    ), 50),
                    t.keyCode,
                    13 === t.keyCode) {
                        if (/macintosh|mac os x/i.test(navigator.userAgent)) {
                            if (!t.metaKey)
                                return void this.$emit("enterSend", t)
                        } else if (!t.ctrlKey)
                            return void this.$emit("enterSend", t);
                        var i = this.$el.querySelector("textarea");
                        if (!i.value.replace(/(^\s*)|(\s*$)/g, "").length)
                            return;
                        this.$emit("input", i.value + "\n")
                    }
                },
                handleInput: function(t) {
                    var e = this.$el.querySelector("textarea");
                    this.$emit("input", e.value);
                    var n = e.value.slice(0, e.selectionEnd);
                    if (n) {
                        var r = this.atItems
                          , i = this.avoidEmail
                          , s = !0
                          , o = this.getAtAndIndex(n, r)
                          , a = o.at
                          , c = o.index;
                        c < 0 && (s = !1);
                        var u = n[c - 1]
                          , l = n.slice(c + a.length, n.length);
                        if (i && /^[a-z0-9]$/i.test(u) && (s = !1),
                        /^\s/.test(l) && (s = !1),
                        s) {
                            var d = this.members;
                            this.filterMatch;
                            t || this.$emit("at", l);
                            var f = d.filter((function(t) {
                                var e = ("" + l).toLowerCase();
                                if (t.remark.toLowerCase().toString().indexOf(e) > -1 || t.name.toLowerCase().toString().indexOf(e) > -1 || t.name_py.indexOf(e) > -1 || t.remark_py.indexOf(e) > -1)
                                    return t
                            }
                            ));
                            if (f.length) {
                                var h = [];
                                f.length > 4 ? (h = f.slice(0, 4),
                                h.push({
                                    name: " ",
                                    remark: "展开更多成员"
                                })) : h = f,
                                this.openPanel(h, l, c, a)
                            } else
                                this.closePanel()
                        } else
                            this.closePanel()
                    } else
                        this.closePanel()
                },
                closePanel: function() {
                    this.atwho && (this.atwho = null)
                },
                openPanel: function(t, e, n, r) {
                    var i = this
                      , s = function() {
                        var r = i.$el.querySelector("textarea")
                          , s = r.value.slice(0, r.selectionEnd);
                        if (s) {
                            var o = i.atItems
                              , a = i.members
                              , c = i.getAtAndIndex(s, o)
                              , u = c.at
                              , l = c.index;
                            l < 0 && i.closePanel();
                            var d = s.slice(l + u.length, s.length)
                              , f = a.filter((function(t) {
                                var e = ("" + d).toLowerCase();
                                if (t.remark.toLowerCase().toString().indexOf(e) > -1 || t.name.toLowerCase().toString().indexOf(e) > -1 || t.name_py.indexOf(e) > -1 || t.remark_py.indexOf(e) > -1)
                                    return t
                            }
                            ));
                            if (!f.length)
                                return
                        }
                        var h = n + u.length
                          , m = Bt()(r, h);
                        i.atwho = {
                            chunk: e,
                            offset: n,
                            list: t,
                            atEnd: h,
                            x: m.left,
                            y: m.top - 4,
                            cur: 0
                        }
                    };
                    this.atwho ? s() : setTimeout(s, 10)
                },
                selectByMouse: function(t) {
                    function e(t, e) {
                        do {
                            if (e(t))
                                return t
                        } while (t = t && t.parentNode)
                    }
                    var n = e(t.target, (function(t) {
                        return t.getAttribute("data-index")
                    }
                    ))
                      , r = +n.getAttribute("data-index");
                    this.atwho = zt({}, this.atwho, {
                        cur: r
                    })
                },
                selectByKeyboard: function(t) {
                    var e = 38 === t.keyCode ? -1 : 1
                      , n = this.atwho
                      , r = n.cur
                      , i = n.list
                      , s = this.loop ? (r + e + i.length) % i.length : Math.max(0, Math.min(r + e, i.length));
                    this.atwho = zt({}, this.atwho, {
                        cur: s
                    })
                },
                insertText: function(t, e) {
                    var n = e.selectionStart
                      , r = e.selectionEnd;
                    e.value = e.value.slice(0, n) + t + e.value.slice(r);
                    var i = n + t.length;
                    e.selectionStart = i,
                    e.selectionEnd = i,
                    this.$emit("cursorRect", {
                        start: e.selectionStart,
                        end: e.selectionEnd
                    })
                },
                insertItem: function() {
                    var t = this.atwho
                      , e = (t.chunk,
                    t.offset,
                    t.list)
                      , n = t.cur
                      , r = t.atEnd
                      , i = this.suffix
                      , s = this.atItems
                      , o = this.$el.querySelector("textarea")
                      , a = o.value.slice(0, r)
                      , c = this.getAtAndIndex(a, s)
                      , u = c.at
                      , l = c.index
                      , d = l + u.length;
                    if (o.selectionStart = d,
                    o.focus(),
                    " " == e[n].name)
                        return T["a"].$emit("getMoreAtUser", d),
                        this.atwho = null,
                        this.insertText(" ", o),
                        this.$refs.textarea.blur(),
                        void this.handleInput();
                    var f = e[n]
                      , h = "" + f.name + i;
                    this.insertText(h, o),
                    this.handleInput()
                },
                getCursorRect: function(t) {
                    var e = !!document.all
                      , n = 0
                      , r = 0
                      , i = this.$refs.textarea;
                    if (i || (i = document.getElementById("webchat-textarea")),
                    e) {
                        var s = document.selection.createRange();
                        if (s.parentElement() == i) {
                            var o = document.body.createTextRange();
                            for (o.moveToElementText(i),
                            n = 0; o.compareEndPoints("StartToStart", s) < 0; n++)
                                o.moveStart("character", 1);
                            for (var a = 0; a <= n; a++)
                                "\n" == i.value.charAt(a) && n++;
                            for (o.moveToElementText(i),
                            r = 0; o.compareEndPoints("StartToEnd", s) < 0; r++)
                                o.moveStart("character", 1);
                            for (a = 0; a <= r; a++)
                                "\n" == i.value.charAt(a) && r++
                        }
                    } else
                        n = i.selectionStart,
                        r = i.selectionEnd;
                    this.$emit("cursorRect", {
                        start: n,
                        end: r
                    })
                },
                setCursorRect: function(t) {
                    var e = t.start
                      , n = t.end
                      , r = this.$refs.textarea;
                    r || (r = document.getElementById("webchat-textarea")),
                    (isNaN(e) || isNaN(n)) && alert("位置输入错误");
                    var i = !!document.all;
                    if (i) {
                        for (var s = r.createTextRange(), o = c, a = u, c = 0, u = 0, l = r.value, d = 0; d < l.length && d < o; d++) {
                            var f = l.charAt(d);
                            "\n" != f && c++
                        }
                        for (d = l.length - 1; d >= a && d >= 0; d--) {
                            f = l.charAt(d);
                            "\n" != f && u++
                        }
                        s.moveStart("character", c),
                        s.moveEnd("character", -u),
                        s.select(),
                        r.focus()
                    } else
                        r.selectionStart = e,
                        r.selectionEnd = n,
                        r.focus(),
                        this.$emit("cursorRect", {
                            start: r.selectionStart,
                            end: r.selectionEnd
                        })
                }
            }
        }
          , Yt = Vt
          , Ft = (n("50c7"),
        Object(_["a"])(Yt, Lt, Gt, !1, null, "6e510b48", null))
          , Ht = Ft.exports
          , Jt = n("bc3a")
          , Zt = n.n(Jt);
        n("34ef"),
        n("4917");
        (function() {
            var t, e, n, r, i;
            t = window.jQuery,
            t.paste = function(t) {
                var n;
                return "undefined" !== typeof console && null !== console && console.log("DEPRECATED: This method is deprecated. Please use $.fn.pastableNonInputable() instead."),
                n = e.mountNonInputable(t),
                n._container
            }
            ,
            t.fn.pastableNonInputable = function() {
                var n, r, i, s;
                for (s = this,
                r = 0,
                i = s.length; r < i; r++)
                    n = s[r],
                    n._pastable || t(n).is("textarea, input:text, [contenteditable]") || (e.mountNonInputable(n),
                    n._pastable = !0);
                return this
            }
            ,
            t.fn.pastableTextarea = function() {
                var n, r, i, s;
                for (s = this,
                r = 0,
                i = s.length; r < i; r++)
                    n = s[r],
                    n._pastable || t(n).is(":not(textarea, input:text)") || (e.mountTextarea(n),
                    n._pastable = !0);
                return this
            }
            ,
            t.fn.pastableContenteditable = function() {
                var n, r, i, s;
                for (s = this,
                r = 0,
                i = s.length; r < i; r++)
                    n = s[r],
                    n._pastable || t(n).is(":not([contenteditable])") || (e.mountContenteditable(n),
                    n._pastable = !0);
                return this
            }
            ,
            r = function(t, e) {
                var n, r, i, s, o, a, c, u, l, d, f;
                if (null == e && (e = 512),
                !(u = t.match(/^data\:([^\;]+)\;base64\,(.+)$/)))
                    return null;
                d = u,
                u = d[0],
                a = d[1],
                n = d[2],
                s = atob(n),
                i = [],
                l = 0;
                while (l < s.length) {
                    f = s.slice(l, l + e),
                    o = new Array(f.length),
                    c = 0;
                    while (c < f.length)
                        o[c] = f.charCodeAt(c),
                        c++;
                    r = new Uint8Array(o),
                    i.push(r),
                    l += e
                }
                return new Blob(i,{
                    type: a
                })
            }
            ,
            n = function() {
                return t(document.createElement("div")).attr("contenteditable", !0).attr("aria-hidden", !0).attr("tabindex", -1).css({
                    width: 1,
                    height: 1,
                    position: "fixed",
                    left: -100,
                    overflow: "hidden",
                    opacity: 1e-17
                })
            }
            ,
            i = function(e, n) {
                var r, i, s, o, a, c;
                return o = void 0,
                a = void 0,
                s = void 0,
                i = void 0,
                r = void 0,
                c = e.nodeName.toLowerCase(),
                "area" === c ? (o = e.parentNode,
                a = o.name,
                !(!e.href || !a || "map" !== o.nodeName.toLowerCase()) && (s = t("img[usemap='#" + a + "']"),
                s.length > 0 && s.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(c) ? (i = !e.disabled,
                i && (r = t(e).closest("fieldset")[0],
                r && (i = !r.disabled))) : i = "a" === c && e.href || n,
                i = i || t(e).is("[contenteditable]"),
                i && t(e).is(":visible"))
            }
            ,
            e = function() {
                function e(e, n) {
                    this._container = e,
                    this._target = n,
                    this._container = t(this._container),
                    this._target = t(this._target).addClass("pastable"),
                    this._container.on("paste", function(t) {
                        return function(e) {
                            var n, r, i, s, o, a, c, u, l, d, f, h, m, p, g, v, b, y, _, w;
                            if (t.originalEvent = null !== e.originalEvent ? e.originalEvent : null,
                            t._paste_event_fired = !0,
                            null != (null != (p = e.originalEvent) ? p.clipboardData : void 0))
                                if (r = e.originalEvent.clipboardData,
                                r.items) {
                                    for (h = null,
                                    t.originalEvent.pastedTypes = [],
                                    g = r.items,
                                    a = 0,
                                    l = g.length; a < l; a++)
                                        o = g[a],
                                        o.type.match(/^text\/(plain|rtf|html)/) && t.originalEvent.pastedTypes.push(o.type);
                                    for (v = r.items,
                                    n = c = 0,
                                    d = v.length; c < d; n = ++c) {
                                        if (o = v[n],
                                        o.type.match(/^image\//)) {
                                            m = new FileReader,
                                            m.onload = function(e) {
                                                return t._handleImage(e.target.result, t.originalEvent, h)
                                            }
                                            ;
                                            try {
                                                m.readAsDataURL(o.getAsFile())
                                            } catch (x) {}
                                            e.preventDefault();
                                            break
                                        }
                                        "text/plain" === o.type && (0 === n && r.items.length > 1 && r.items[1].type.match(/^image\//) && (_ = !0,
                                        s = r.items[1].type),
                                        o.getAsString((function(e) {
                                            return _ ? (h = e,
                                            t._target.trigger("pasteText", {
                                                text: e,
                                                isFilename: !0,
                                                fileType: s,
                                                originalEvent: t.originalEvent
                                            })) : t._target.trigger("pasteText", {
                                                text: e,
                                                originalEvent: t.originalEvent
                                            })
                                        }
                                        ))),
                                        "text/rtf" === o.type && o.getAsString((function(e) {
                                            return t._target.trigger("pasteTextRich", {
                                                text: e,
                                                originalEvent: t.originalEvent
                                            })
                                        }
                                        )),
                                        "text/html" === o.type && o.getAsString((function(e) {
                                            return t._target.trigger("pasteTextHtml", {
                                                text: e,
                                                originalEvent: t.originalEvent
                                            })
                                        }
                                        ))
                                    }
                                } else
                                    -1 !== Array.prototype.indexOf.call(r.types, "text/plain") && (w = r.getData("Text"),
                                    setTimeout((function() {
                                        return t._target.trigger("pasteText", {
                                            text: w,
                                            originalEvent: t.originalEvent
                                        })
                                    }
                                    ), 1)),
                                    t._checkImagesInContainer((function(e) {
                                        return t._handleImage(e, t.originalEvent)
                                    }
                                    ));
                            if (r = window.clipboardData)
                                if (null != (b = w = r.getData("Text")) ? b.length : void 0)
                                    setTimeout((function() {
                                        return t._target.trigger("pasteText", {
                                            text: w,
                                            originalEvent: t.originalEvent
                                        }),
                                        t._target.trigger("_pasteCheckContainerDone")
                                    }
                                    ), 1);
                                else {
                                    for (y = r.files,
                                    u = 0,
                                    f = y.length; u < f; u++)
                                        i = y[u],
                                        t._handleImage(URL.createObjectURL(i), t.originalEvent);
                                    t._checkImagesInContainer((function(e) {
                                        t._handleImage(e, t.originalEvent)
                                    }
                                    ))
                                }
                            return null
                        }
                    }(this))
                }
                return e.prototype._target = null,
                e.prototype._container = null,
                e.mountNonInputable = function(r) {
                    var s;
                    return s = new e(n().appendTo(r),r),
                    t(r).on("click", function(t) {
                        return function(t) {
                            if (!i(t.target, !1))
                                return s._container.focus()
                        }
                    }()),
                    s._container.on("focus", function(e) {
                        return function() {
                            return t(r).addClass("pastable-focus")
                        }
                    }()),
                    s._container.on("blur", function(e) {
                        return function() {
                            return t(r).removeClass("pastable-focus")
                        }
                    }())
                }
                ,
                e.mountTextarea = function(r) {
                    var i, s, o, a;
                    return ("undefined" !== typeof DataTransfer && null !== DataTransfer ? DataTransfer.prototype : void 0) && (null != (o = Object.getOwnPropertyDescriptor) && null != (a = o.call(Object, DataTransfer.prototype, "items")) ? a.get : void 0) ? this.mountContenteditable(r) : (s = new e(n().insertBefore(r),r),
                    i = !1,
                    t(r).on("keyup", (function(t) {
                        var e;
                        return 17 !== (e = t.keyCode) && 224 !== e || (i = !1),
                        null
                    }
                    )),
                    t(r).on("keydown", (function(t) {
                        var e;
                        return 17 !== (e = t.keyCode) && 224 !== e || (i = !0),
                        null != t.ctrlKey && null != t.metaKey && (i = t.ctrlKey || t.metaKey),
                        i && 86 === t.keyCode && (s._textarea_focus_stolen = !0,
                        s._container.focus(),
                        s._paste_event_fired = !1),
                        null
                    }
                    )),
                    t(r).on("paste", function(t) {
                        return function() {}
                    }()),
                    t(r).on("focus", function(e) {
                        return function() {
                            if (!s._textarea_focus_stolen)
                                return t(r).addClass("pastable-focus")
                        }
                    }()),
                    t(r).on("blur", function(e) {
                        return function() {
                            if (!s._textarea_focus_stolen)
                                return t(r).removeClass("pastable-focus")
                        }
                    }()),
                    t(s._target).on("_pasteCheckContainerDone", function(e) {
                        return function() {
                            return t(r).focus(),
                            s._textarea_focus_stolen = !1
                        }
                    }()),
                    t(s._target).on("pasteText", function(e) {
                        return function(e, n) {
                            var i, s, o;
                            return o = t(r).prop("selectionStart"),
                            s = t(r).prop("selectionEnd"),
                            i = t(r).val(),
                            t(r).val("" + i.slice(0, o) + n.text + i.slice(s)),
                            t(r)[0].setSelectionRange(o + n.text.length, o + n.text.length),
                            t(r).trigger("change")
                        }
                    }()))
                }
                ,
                e.mountContenteditable = function(n) {
                    return new e(n,n),
                    t(n).on("focus", function(e) {
                        return function() {
                            return t(n).addClass("pastable-focus")
                        }
                    }()),
                    t(n).on("blur", function(e) {
                        return function() {
                            return t(n).removeClass("pastable-focus")
                        }
                    }())
                }
                ,
                e.prototype._handleImage = function(t, e, n) {
                    var i;
                    return t.match(/^webkit\-fake\-url\:\/\//) ? this._target.trigger("pasteImageError", {
                        message: "You are trying to paste an image in Safari, however we are unable to retieve its data."
                    }) : (this._target.trigger("pasteImageStart"),
                    i = new Image,
                    i.crossOrigin = "anonymous",
                    i.onload = function(t) {
                        return function() {
                            var s, o, a, c;
                            o = document.createElement("canvas"),
                            o.width = i.width,
                            o.height = i.height,
                            a = o.getContext("2d"),
                            a.drawImage(i, 0, 0, o.width, o.height),
                            c = null;
                            try {
                                c = o.toDataURL("image/png"),
                                s = r(c)
                            } catch (u) {}
                            return c && t._target.trigger("pasteImage", {
                                blob: s,
                                dataURL: c,
                                width: i.width,
                                height: i.height,
                                originalEvent: e,
                                name: n
                            }),
                            t._target.trigger("pasteImageEnd")
                        }
                    }(this),
                    i.onerror = function(e) {
                        return function() {
                            return e._target.trigger("pasteImageError", {
                                message: "Failed to get image from: " + t,
                                url: t
                            }),
                            e._target.trigger("pasteImageEnd")
                        }
                    }(this),
                    i.src = t)
                }
                ,
                e.prototype._checkImagesInContainer = function(e) {
                    var n, r, i, s, o;
                    for (o = Math.floor(1e3 * Math.random()),
                    s = this._container.find("img"),
                    r = 0,
                    i = s.length; r < i; r++)
                        n = s[r],
                        n["_paste_marked_" + o] = !0;
                    return setTimeout(function(r) {
                        return function() {
                            var i, s, a;
                            for (a = r._container.find("img"),
                            i = 0,
                            s = a.length; i < s; i++)
                                n = a[i],
                                n["_paste_marked_" + o] || (e(n.src),
                                t(n).remove());
                            return r._target.trigger("_pasteCheckContainerDone")
                        }
                    }(this), 1)
                }
                ,
                e
            }()
        }
        ).call(void 0);
        var Kt = {
            methods: {
                pasteimg: function() {
                    var t = this;
                    $(".textarea-content").pastableTextarea(),
                    $(".textarea-content").on("pasteImage", (function(e, n) {
                        document.querySelector(".vue-modal") || (t.$modal({
                            title: "发送图片",
                            okObj: {
                                text: "发送",
                                okFun: function() {
                                    var e = t.selectId
                                      , r = new Date
                                      , i = "screenshot" + r.getFullYear() + (r.getMonth() >= 9 ? "" : "0") + (r.getMonth() + 1) + (r.getDate() >= 10 ? "" : "0") + r.getDate() + (r.getHours() >= 10 ? "" : "0") + r.getHours() + (r.getMinutes() >= 10 ? "" : "0") + r.getMinutes() + (r.getSeconds() >= 10 ? "" : "0") + r.getSeconds() + ".png"
                                      , s = {
                                        ispasteimg: 1,
                                        cardtype: "card5",
                                        created_at: (new Date).getTime(),
                                        direct: "right",
                                        mid: "",
                                        feTag: Object(u["l"])(16),
                                        media_type: 0,
                                        fileToken: i,
                                        ft: i,
                                        msg_status: 0,
                                        sender_id: l["f"].basicinfo.id
                                    };
                                    s.text = n.dataURL,
                                    t.curchatlist(s, i, e),
                                    t.selectId == e && t.$store.commit("fillchatrecords", {
                                        value: s
                                    });
                                    var o = "/webim/uploadx.json?source=209678993";
                                    o += t.isgroup() ? "&gid=" + e : "&uid=" + e;
                                    var a = new FormData;
                                    a.append("blob", n.blob, i),
                                    Zt.a.post(o, a).then((function(n) {
                                        var r = {
                                            fileToken: i,
                                            selectId: e
                                        };
                                        t.responsepaste(n.data, r, e)
                                    }
                                    ))
                                }
                            },
                            width: 430,
                            closebtn: !0
                        }),
                        setTimeout((function() {
                            var t = new Image;
                            t.src = n.dataURL,
                            t.style.maxWidth = "430px",
                            t.style.maxHeight = "520px",
                            t.style.width = "auto",
                            t.style.height = "auto",
                            t.className = "pasteimg",
                            document.querySelector(".vue-modal .content").appendChild(t)
                        }
                        ), 100))
                    }
                    )).on("pasteImageError", (function(t, e) {}
                    )).on("pasteText", (function(t, e) {}
                    ))
                },
                curchatlist: function(t, e, n) {
                    var r = {
                        created_at: t.created_at,
                        text: "[图片]",
                        fileToken: e,
                        errorsend: !1
                    };
                    if (this.isgroup()) {
                        var i = "chatlist"
                          , s = this.finditemIndex(this.$store.state[i], n);
                        s < 0 && (i = "topuser",
                        s = this.finditemIndex(this.$store.state[i], n));
                        var o = {
                            sender_id: t.sender_id,
                            sender_screen_name: l["f"].basicinfo.name
                        };
                        Object.assign(o, r),
                        this.$store.commit("update" + i, {
                            i: s,
                            param: o
                        })
                    } else {
                        var a = -1
                          , c = "chatlist";
                        this.$store.state.showunfollow ? (a = this.finditemIndex(this.$store.state.unfollowlist, n),
                        c = "unfollowlist") : (a = this.finditemIndex(this.$store.state.chatlist, n),
                        a < 0 && "chatlist" == c && (c = "topuser",
                        a = this.finditemIndex(this.$store.state.topuser, n))),
                        this.$store.commit("update" + c, {
                            i: a,
                            param: r
                        })
                    }
                },
                responsepaste: function(t, e, n) {
                    var r = this
                      , i = arguments
                      , s = 1;
                    if (this.$store.state.showunfollow)
                        s = this.findItem(this.$store.state.unfollowlist).type;
                    else {
                        var o = this.findItem(this.$store.state.chatlist);
                        o || (o = this.findItem(this.$store.state.topuser)),
                        s = o.type
                    }
                    if (1 == s) {
                        setTimeout(this.checkBlockStatus, 0);
                        var c = {
                            fids: t.fid,
                            text: t.filename,
                            uid: e.selectId,
                            media_type: 1,
                            extensions: JSON.stringify({
                                clientid: l["g"].clientId
                            })
                        };
                        a["a"].newmsg(c).then((function(n) {
                            if ("string" === typeof n)
                                throw Error("netWorkError");
                            n.error && T["a"].$emit("handleNonetwork", {
                                text: n.error,
                                errorcode: n.error_code,
                                config: {
                                    fileToken: e.fileToken
                                }
                            }),
                            setTimeout((function() {
                                r.changeimgloadstate(e.fileToken, e.selectId, t.fid, n, e)
                            }
                            ), 500)
                        }
                        )).catch((function(n) {
                            T["a"].$emit("handleNonetwork", {
                                text: "发送失败，网络连接异常",
                                errorcode: "nonetwork",
                                config: {
                                    fileToken: e.fileToken,
                                    retryConfig: {
                                        fun: r.responsepaste.bind(r),
                                        arguments: Object(Nt["a"])(i),
                                        fileToken: e.fileToken
                                    }
                                }
                            }),
                            r.changeimgloadstate(e.fileToken, e.selectId, t.fid, {}, e)
                        }
                        ))
                    } else if (2 == s) {
                        var u = {
                            annotations: JSON.stringify({
                                webchat: 1,
                                clientid: l["g"].clientId
                            }),
                            content: t.filename,
                            fids: t.fid,
                            media_type: 1,
                            id: e.selectId,
                            return_detail: 1
                        };
                        a["a"].sendmsg(u).then((function(n) {
                            if ("string" === typeof n)
                                throw Error("netWorkError");
                            n.error && T["a"].$emit("handleNonetwork", {
                                text: n.error,
                                errorcode: n.error_code,
                                config: {
                                    fileToken: e.fileToken
                                }
                            }),
                            r.changeimgloadstate(e.fileToken, e.selectId, t.fid, n, e)
                        }
                        )).catch((function(n) {
                            T["a"].$emit("handleNonetwork", {
                                text: "发送失败，网络连接异常",
                                errorcode: "nonetwork",
                                config: {
                                    fileToken: e.fileToken,
                                    retryConfig: {
                                        fun: r.responsepaste.bind(r),
                                        arguments: Object(Nt["a"])(i),
                                        fileToken: e.fileToken
                                    }
                                }
                            }),
                            r.changeimgloadstate(e.fileToken, e.selectId, t.fid, {}, e)
                        }
                        ))
                    }
                }
            }
        }
          , Qt = Kt
          , Xt = n("768b")
          , te = n("51a4")
          , ee = n("aa6f")
          , ne = n.n(ee)
          , re = 1
          , ie = {
            mixins: [A["a"]],
            data: function() {
                return {
                    fileUploader: null,
                    dragUploader: null
                }
            },
            methods: {
                initplupload: function() {
                    var t = this;
                    Object(te["a"])("btn_send_image", "25MB", "jpg,gif,png,bmp,jpeg,tiff", (function(e, n) {
                        t.responseimg(e, n)
                    }
                    ), (function(e, n) {
                        t.replace404img(e, n)
                    }
                    )),
                    this.fileUploader = Object(te["a"])("btn_send_file", "100MB", "*", (function(e, n) {
                        t.responseimg(e, n)
                    }
                    ), (function(e, n) {
                        t.replace404img(e, n)
                    }
                    )),
                    re && (re = 0,
                    this.dragUploader = Object(te["a"])("drag-area", "50MB", "*", (function(e, n) {
                        t.responseimg(e, n)
                    }
                    ), (function(e, n) {
                        t.replace404img(e, n)
                    }
                    )))
                },
                replace404img: function(t, e) {
                    var n = this.listtype()
                      , r = this.finditemIndex(this.$store.state[n]);
                    if ("chatlist" == n && r < 0 && (r = this.finditemIndex(this.$store.state.topuser),
                    n = "topuser"),
                    this.$store.commit("update" + n, {
                        notTop: !0,
                        i: r,
                        param: {
                            fileToken: e.file.fileToken,
                            errorsend: !0,
                            text: e.isimgfile ? "[图片上传失败]" : "[附件上传失败]"
                        }
                    }),
                    e.isimgfile) {
                        var i = e.file.fileToken
                          , s = {
                            fileToken: i,
                            value: {
                                imgurl: ne.a
                            }
                        };
                        this.$store.commit("changechatrecorder", s)
                    } else {
                        i = e.file.fileToken;
                        var o = {
                            fileToken: i,
                            value: {
                                upadataerr: !0
                            }
                        };
                        this.$store.commit("changechatrecorder", o)
                    }
                },
                responseimg: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r, i, s, o, c, u, d, f, h, m = this, p = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = 1,
                                    this.$store.state.showunfollow ? r = this.findItem(this.$store.state.unfollowlist, n.selectId).type : (i = this.findItem(this.$store.state.chatlist, n.selectId),
                                    i || (i = this.findItem(this.$store.state.topuser, n.selectId)),
                                    r = i.type),
                                    e = JSON.parse(e),
                                    u = e.fid,
                                    void 0 === n.isScreenshot) {
                                        t.next = 11;
                                        break
                                    }
                                    if (1 !== n.isScreenshot) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 8,
                                    this.getFirstFrame(n, e);
                                case 8:
                                    n.firstFrame = t.sent;
                                case 9:
                                    s = n.fid ? n.fid : n.firstFrame ? n.firstFrame : "",
                                    c = "分享视频";
                                case 11:
                                    o = n.isFile ? n.params && n.params.type && "dm_attachment_video" === n.params.type ? 10 : 5 : 1,
                                    1 == r ? (d = {
                                        clientid: l["g"].clientId,
                                        video_pic_fid: s
                                    },
                                    d = JSON.stringify(d),
                                    setTimeout(this.checkBlockStatus, 0),
                                    f = {
                                        fids: u,
                                        text: c || n.name,
                                        uid: n.selectId,
                                        extensions: d,
                                        media_type: o
                                    },
                                    a["a"].newmsg(f).then((function(t) {
                                        if ("string" === typeof t)
                                            throw Error("netWorkError");
                                        t.error && T["a"].$emit("handleNonetwork", {
                                            text: t.error,
                                            errorcode: t.error_code,
                                            config: {
                                                fileToken: n.fileToken
                                            }
                                        }),
                                        m.sudaHandleMediaType(t),
                                        m.changeimgloadstate(n.fileToken, n.selectId, e.fid, t, n),
                                        m.changeVideoChatRecorder(n.fileToken)
                                    }
                                    )).catch((function(t) {
                                        T["a"].$emit("handleNonetwork", {
                                            text: "发送失败，网络连接异常",
                                            errorcode: "nonetwork",
                                            config: {
                                                fileToken: n.fileToken,
                                                retryConfig: {
                                                    fun: m.responseimg.bind(m),
                                                    arguments: Object(Nt["a"])(p),
                                                    fileToken: n.fileToken
                                                }
                                            }
                                        }),
                                        m.changeimgloadstate(n.fileToken, n.selectId, e.fid, {}, n)
                                    }
                                    ))) : 2 == r && (h = {
                                        annotations: JSON.stringify({
                                            video_pic_fid: s,
                                            webchat: 1,
                                            clientid: l["g"].clientId
                                        }),
                                        content: c || n.name,
                                        fids: u,
                                        id: n.selectId,
                                        return_detail: 1,
                                        media_type: o
                                    },
                                    a["a"].sendmsg(h).then((function(t) {
                                        if ("string" === typeof t)
                                            throw Error("netWorkError");
                                        t.error && T["a"].$emit("handleNonetwork", {
                                            text: t.error,
                                            errorcode: t.error_code,
                                            config: {
                                                fileToken: n.fileToken
                                            }
                                        }),
                                        m.sudaHandleMediaType(t),
                                        m.changeimgloadstate(n.fileToken, n.selectId, e.fid, t, n),
                                        m.changeVideoChatRecorder(n.fileToken)
                                    }
                                    )).catch((function(t) {
                                        T["a"].$emit("handleNonetwork", {
                                            text: "发送失败，网络连接异常",
                                            errorcode: "nonetwork",
                                            config: {
                                                fileToken: n.fileToken,
                                                retryConfig: {
                                                    fun: m.responseimg.bind(m),
                                                    arguments: Object(Nt["a"])(p),
                                                    fileToken: n.fileToken
                                                }
                                            }
                                        }),
                                        m.changeimgloadstate(n.fileToken, n.selectId, e.fid, {}, n)
                                    }
                                    )));
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                sudaHandleMediaType: function(t) {
                    t.media_type && (1 === t.media_type ? this.suda("webchat_uploadpicture", "webchat_uploadpicture") : 5 === t.media_type ? this.suda("webchat_uploadfile", "webchat_uploadfile") : 10 === t.media_type && this.suda("webchat_videoupload", "webchat_videoupload"))
                },
                changeVideoChatRecorder: function(t) {
                    this.$store.commit("changechatrecorder", {
                        toBottom: !1,
                        value: {
                            upload: !1
                        },
                        fileToken: t
                    })
                },
                changeimgloadstate: function(t, e, n, r, i) {
                    var s = this.listtype()
                      , o = this.finditemIndex(this.$store.state[s], e);
                    if (o < 0 && "chatlist" == s && (s = "topuser",
                    o = this.finditemIndex(this.$store.state[s], e)),
                    o >= 0) {
                        var a = {
                            fileToken: "",
                            mid: r.mid,
                            text: r.text || r.content,
                            fid: r.media_type ? "thisIsFile" : "",
                            dm_type: r.dm_type ? r.dm_type : 6
                        };
                        this.$store.commit("update" + s, {
                            notTop: !0,
                            i: o,
                            param: a
                        })
                    }
                    if (e == this.$store.state.selectId) {
                        var c = {
                            fileToken: t
                        };
                        c.value = {
                            fid: n,
                            mid: r.mid,
                            faith_status: r.faith_status,
                            text: r.text || r.content
                        },
                        this.$store.commit("changechatrecorder", c),
                        i && !i.isFile && this.$store.commit("addimgurls", {
                            value: {
                                mid: r.mid,
                                fid: n
                            }
                        })
                    }
                },
                getFirstFrame: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new Promise((function(t) {
                                        var i = setInterval((function() {
                                            a["a"].getFirstImage({
                                                params: {
                                                    fid: n.fid
                                                }
                                            }).then((function(n) {
                                                if (n.msg && n.msg.firstFrameFId) {
                                                    var s = n.msg.firstFrameFId;
                                                    clearInterval(i),
                                                    a["b"].metaquery({
                                                        fid: s
                                                    }).then((function(t) {
                                                        var n = t.thumbnail_240.match(/(\d+),(\d+)/)
                                                          , i = Object(Xt["a"])(n, 3)
                                                          , s = (i[0],
                                                        i[1])
                                                          , o = i[2];
                                                        r.$store.commit("changechatrecorder", {
                                                            toBottom: !1,
                                                            value: {
                                                                videosize: [s, o],
                                                                screenshot: t.thumbnail_240 + "&source=209678993"
                                                            },
                                                            fileToken: e.fileToken
                                                        })
                                                    }
                                                    )),
                                                    t(s)
                                                }
                                            }
                                            ))
                                        }
                                        ), 500);
                                        setTimeout((function() {
                                            clearInterval(i),
                                            e.firstFrame = "",
                                            t()
                                        }
                                        ), 5e3)
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }
        }
          , se = ie
          , oe = n("72b1")
          , ae = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "faces W_layer W_layer_pop",
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [n("div", {
                staticClass: "content"
            }, [n("div", {
                staticClass: "W_layer_close"
            }, [n("a", {
                staticClass: "W_ficon ficon_close",
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: t.closemodal
                }
            }, [t._v("×")])]), n("div", {
                staticClass: "layer_faces"
            }, [n("div", {
                staticClass: "WB_minitab"
            }, [n("ul", {
                staticClass: "minitb_ul S_line1 S_bg1 clearfix"
            }, t._l(t.category[t.activecate], (function(e, r) {
                return n("li", {
                    key: 5 * t.activecate + r,
                    staticClass: "minitb_item S_line1",
                    class: {
                        current: t.activeindex == 5 * t.activecate + r
                    },
                    attrs: {
                        title: e || "默认"
                    },
                    on: {
                        click: function(e) {
                            return t.cuttab(5 * t.activecate + r)
                        }
                    }
                }, [n("a", {
                    staticClass: "minitb_lk S_txt1",
                    attrs: {
                        href: "javascript:;"
                    }
                }, [t._v(t._s(e || "默认"))]), n("span", {
                    staticClass: "cur_block"
                })])
            }
            )), 0), n("ul", {
                staticClass: "W_fr minitb_ul S_bg1 clearfix"
            }, [n("li", {
                staticClass: "minitb_more W_btn_b_disable",
                on: {
                    click: t.prev
                }
            }, [n("i", {
                staticClass: "W_ficon minitb_lk arrowbtn",
                class: {
                    disable: 0 == t.activecate
                }
            }, [t._v("")])]), n("li", {
                staticClass: "minitb_more S_line1",
                on: {
                    click: t.next
                }
            }, [n("i", {
                staticClass: "W_ficon minitb_lk arrowbtn",
                class: {
                    disable: t.activecate + 1 >= t.category.length
                }
            }, [t._v("")])])])]), n("div", {
                staticClass: "faces_list_box"
            }, [n("div", {
                staticClass: "faces_list"
            }, [n("div", [n("ul", {
                staticClass: "faces_list_hot clearfix"
            }, t._l(t.emotion.hot, (function(e, r) {
                return n("li", {
                    key: r,
                    attrs: {
                        title: e.phrase
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            t.addemoji(e)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: e.url
                    }
                })])
            }
            )), 0), n("ul", t._l(t.emotion.normal, (function(e, r) {
                return n("li", {
                    key: r,
                    attrs: {
                        title: e.phrase
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            t.addemoji(e)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: e.url
                    }
                })])
            }
            )), 0)])])])])])])
        }
          , ce = [];
        n("3c6e");
        function ue(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function le(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ue(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ue(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var de = {
            props: ["cursor"],
            data: function() {
                return {
                    category: [],
                    activeindex: 0,
                    emotion: {
                        hot: [],
                        normal: []
                    },
                    activecate: 0
                }
            },
            mounted: function() {
                this.initcategory()
            },
            methods: le({}, Object(O["c"])(["changemodalId"]), {
                initcategory: function() {
                    var t = [];
                    l["a"].emotions.forEach((function(e, n) {
                        t.includes(e.category) || t.push(e.category)
                    }
                    ));
                    for (var e = 0; e < t.length; e += 5)
                        this.category.push(t.slice(e, e + 5));
                    this.initemoji()
                },
                initemoji: function() {
                    var t = this;
                    this.emotion.hot = [],
                    this.emotion.normal = [];
                    var e = ~~(this.activeindex / 5)
                      , n = this.activeindex % 5
                      , r = this.category[e] && this.category[e][n];
                    l["a"].emotions.forEach((function(e, n) {
                        if (r == e.category) {
                            var i = e.hot ? "hot" : "normal";
                            t.emotion[i].push({
                                phrase: e.phrase,
                                url: e.url
                            })
                        }
                    }
                    ))
                },
                cuttab: function(t) {
                    this.activeindex != t && (this.activeindex = t,
                    this.initemoji())
                },
                prev: function() {
                    0 != this.activecate && (this.activecate--,
                    this.cuttab(5 * this.activecate))
                },
                next: function() {
                    this.activecate + 1 >= this.category.length || (this.activecate++,
                    this.cuttab(5 * this.activecate))
                },
                closemodal: function() {
                    this.changemodalId(-1)
                },
                addemoji: function(t) {
                    this.$parent.setEmojiVal(this.cursor, t.phrase),
                    this.closemodal()
                }
            })
        }
          , fe = de
          , he = (n("3167"),
        Object(_["a"])(fe, ae, ce, !1, null, "65a7124e", null))
          , me = he.exports;
        function pe(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ge(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? pe(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var ve = {
            mixins: [nt["a"], A["a"], se, Qt, it],
            data: function() {
                return {
                    content: "",
                    reply: "未找到",
                    frequency: 0,
                    warn: !1,
                    showEmoji: !1,
                    cmd: 0,
                    inputcontent: "",
                    cursor: {
                        start: 0,
                        end: 0
                    },
                    cursorCache: {
                        start: 0,
                        end: 0
                    },
                    dropListener: null,
                    message: null,
                    media_type: 0
                }
            },
            computed: ge({}, Object(O["d"])(["selectId", "emojis", "modalId", "remarklist", "showunfollow", "unfollowlist", "querygroup"]), {
                atUserList: function() {
                    var t = this;
                    if (this.querygroup && this.querygroup.member_infos) {
                        var e = this.querygroup.member_infos.map((function(e) {
                            var n = t.findremark(e.uid, e.screen_name)
                              , r = t.findremarkpy(e.uid, e.screen_name);
                            return {
                                name: e.screen_name,
                                remark: n,
                                name_py: e.qp && e.qp.toLowerCase(),
                                remark_py: r && r.toLowerCase()
                            }
                        }
                        ));
                        return e
                    }
                    return []
                },
                curuserinfo: function() {
                    var t = this;
                    if (this.$store.state.showunfollow)
                        return this.$store.state.unfollowlist.find((function(e) {
                            return e.id == t.$store.state.selectId
                        }
                        ));
                    var e = this.$store.state.chatlist.find((function(e) {
                        return e.id == t.$store.state.selectId
                    }
                    ));
                    return e || (e = this.$store.state.topuser.find((function(e) {
                        return e.id == t.$store.state.selectId
                    }
                    ))),
                    e
                },
                user_is_blocked: function() {
                    var t = this.listtype()
                      , e = this.findItem(this.$store.state[t]);
                    return e ? e.is_blocked : !("chatlist" != t || (t = "topuser",
                    e = this.findItem(this.$store.state.topuser),
                    !e)) && e.is_blocked
                },
                showprompt: function() {
                    return window.Global.isMac ? "按下Enter发送内容/ Command+Enter换行" : "按下Enter发送内容/  Ctrl+Enter换行"
                }
            }),
            components: {
                faces: me,
                at: Ht
            },
            methods: {
                setEmojiVal: function(t, e) {
                    var n = t.start
                      , r = (t.end,
                    this.inputcontent.slice(0, n))
                      , i = this.inputcontent.slice(n);
                    this.inputcontent = r + e + i,
                    this.$nextTick((function() {
                        T["a"].$emit("cgcursor", {
                            start: n + e.length,
                            end: n + e.length
                        })
                    }
                    ))
                },
                showfaces: function() {
                    this.cursorCache = ge({}, this.cursor),
                    4 == this.modalId ? this.$store.commit("changemodalId", -1) : this.$store.commit("changemodalId", 4)
                },
                onKeyup: function(t) {
                    13 === t.keyCode && this.send()
                },
                send: function(t) {
                    var e = this.selectId
                      , n = /^\s*$/
                      , r = new RegExp(n);
                    if (r.test(this.inputcontent))
                        t.preventDefault();
                    else {
                        if (91 == t.keyCode && window.Global.isMac || 17 == t.keyCode && !window.Global.isMac)
                            return t.preventDefault(),
                            void (this.cmd = 1);
                        13 == t.keyCode && (t.preventDefault(),
                        this.cmd ? this.inputcontent += "\r\n" : (this.postmsg(this.inputcontent, e),
                        this.inputcontent = "")),
                        this.cmd = 0
                    }
                },
                addrecords: function(t, e, n, r) {
                    var i = {
                        created_at: (new Date).getTime(),
                        direct: "right",
                        media_type: 0,
                        msg_status: 0,
                        mid: "",
                        sub_type: "",
                        fetextTag: Object(u["l"])(16),
                        text: t,
                        isLargeDm: !1,
                        type: 321,
                        textToken: e,
                        url_objects: "",
                        url_short: "",
                        cardtype: "card1"
                    };
                    1 == n && (i.fid = "",
                    i.sender_id = l["f"].basicinfo.id),
                    2 == n && (i.fid = "",
                    i.userinfo = l["f"].basicinfo),
                    this.$store.commit("fillchatrecords", {
                        value: i
                    }),
                    this.$nextTick((function() {
                        T["a"].$emit("newMsg")
                    }
                    ))
                },
                cgchatlist: function(t, e, n, r) {
                    var i = this.listtype()
                      , s = this.finditemIndex(this.$store.state[i], r);
                    "chatlist" == i && s < 0 && (i = "topuser",
                    s = this.finditemIndex(this.$store.state[i], r)),
                    this.$store.state[i][s].is_blocked && this.setshield(this.$store.state[i][s].id, this.$store.state[i][s].is_blocked);
                    var o = {
                        textToken: e,
                        fileToken: "",
                        affi_type: "",
                        fid: "",
                        created_at: (new Date).getTime(),
                        dm_type: 1,
                        message_type: 321,
                        sender_id: l["f"].basicinfo.id,
                        sender_screen_name: l["f"].basicinfo.name,
                        sub_type: 0,
                        text: t,
                        type: n,
                        unread_count: 0,
                        errorsend: !1
                    };
                    this.$store.commit("update" + i, {
                        i: s,
                        param: o
                    })
                },
                postmsg: function(t, e) {
                    var n = this.listtype()
                      , r = this.findItem(this.$store.state[n]);
                    if (r || "chatlist" != n || (n = "topuser",
                    r = this.findItem(this.$store.state[n])),
                    r) {
                        var i = Object(u["l"])();
                        this.addrecords(t, i, r.type, e),
                        this.cgchatlist(t, i, r.type, e),
                        1 == r.type && this.tocontact(t, i, e),
                        2 == r.type && this.togroup(t, i, e)
                    }
                },
                retry: function(t) {
                    var e = t.textToken
                      , n = t.fileToken;
                    this.$store.commit("changechatrecorder", {
                        toBottom: !0,
                        value: {
                            alert: void 0,
                            retryConfig: void 0
                        },
                        textToken: e,
                        fileToken: n
                    }),
                    setTimeout((function() {
                        t.fun.apply(t, Object(Nt["a"])(t.arguments))
                    }
                    ), 300)
                },
                tocontact: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n, r) {
                        var i, s, o, c, u, d, f, h = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return i = {
                                        text: e,
                                        uid: r,
                                        extensions: JSON.stringify({
                                            clientid: l["g"].clientId
                                        }),
                                        is_encoded: 0,
                                        decodetime: 1
                                    },
                                    t.prev = 1,
                                    t.next = 4,
                                    a["a"].newmsg(i);
                                case 4:
                                    s = t.sent,
                                    t.next = 9;
                                    break;
                                case 7:
                                    t.prev = 7,
                                    t.t0 = t["catch"](1);
                                case 9:
                                    if ("string" === typeof s && (s = null),
                                    s) {
                                        t.next = 13;
                                        break
                                    }
                                    return this.nonetwork("发送失败，网络连接异常", "nonetwork", {
                                        textToken: n,
                                        retryConfig: {
                                            fun: this.tocontact.bind(this),
                                            arguments: Array.prototype.slice.call(h),
                                            textToken: n
                                        }
                                    }),
                                    t.abrupt("return");
                                case 13:
                                    if (!s.error) {
                                        t.next = 17;
                                        break
                                    }
                                    this.nonetwork(s.error, s.error_code, {
                                        textToken: n
                                    }),
                                    t.next = 30;
                                    break;
                                case 17:
                                    return o = this.listtype(),
                                    c = this.finditemIndex(this.$store.state[o], s.recipient_id),
                                    c < 0 && "chatlist" == o && (o = "topuser",
                                    c = this.finditemIndex(this.$store.state[o], s.recipient_id)),
                                    u = {
                                        mid: s.id,
                                        errorsend: !1
                                    },
                                    s.url_objects && (u.url_objects = s.url_objects),
                                    this.$store.commit("update" + o, {
                                        notTop: !0,
                                        i: c,
                                        param: u
                                    }),
                                    d = {
                                        mid: s.id,
                                        text: s.text,
                                        isLargeDm: !!s.isLargeDm && s.isLargeDm,
                                        sender_id: s.sender_id
                                    },
                                    s.url_objects && s.url_objects[0] && s.url_objects[0].info && (d.url_short = s.url_objects[0].info.url_short,
                                    d.url_objects = s.url_objects),
                                    t.next = 27,
                                    Object(oe["a"])(d);
                                case 27:
                                    f = t.sent,
                                    f && Object.assign(d, f),
                                    this.$store.commit("changechatrecorder", {
                                        value: d,
                                        textToken: n
                                    });
                                case 30:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[1, 7]])
                    }
                    )));
                    function e(e, n, r) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                togroup: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n, r) {
                        var i, s, o, c, u, d, f, h = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return i = {
                                        content: e,
                                        id: r,
                                        media_type: 0,
                                        annotations: JSON.stringify({
                                            webchat: 1,
                                            clientid: l["g"].clientId
                                        }),
                                        is_encoded: 0
                                    },
                                    t.prev = 1,
                                    t.next = 4,
                                    a["a"].sendmsg(i);
                                case 4:
                                    s = t.sent,
                                    t.next = 9;
                                    break;
                                case 7:
                                    t.prev = 7,
                                    t.t0 = t["catch"](1);
                                case 9:
                                    if ("string" === typeof s && (s = null),
                                    s) {
                                        t.next = 13;
                                        break
                                    }
                                    return this.nonetwork("发送失败，网络连接异常", "nonetwork", {
                                        textToken: n,
                                        retryConfig: {
                                            fun: this.togroup.bind(this),
                                            arguments: Array.prototype.slice.call(h),
                                            textToken: n
                                        }
                                    }),
                                    t.abrupt("return");
                                case 13:
                                    if (!s.error) {
                                        t.next = 17;
                                        break
                                    }
                                    this.nonetwork(s.error, s.error_code, {
                                        textToken: n
                                    }),
                                    t.next = 30;
                                    break;
                                case 17:
                                    return o = this.listtype(),
                                    c = this.finditemIndex(this.$store.state[o], this.$store.state.selectId),
                                    c < 0 && "chatlist" == o && (o = "topuser",
                                    c = this.finditemIndex(this.$store.state[o], this.$store.state.selectId)),
                                    u = {
                                        mid: s.mid,
                                        errorsend: !1
                                    },
                                    s.url_objects && (u.url_objects = s.url_objects),
                                    this.$store.commit("update" + o, {
                                        notTop: !0,
                                        i: c,
                                        param: u
                                    }),
                                    d = {
                                        mid: s.mid,
                                        text: s.content,
                                        faith_status: s.faith_status
                                    },
                                    s.url_objects && s.url_objects[0] && s.url_objects[0].info && (d.url_short = s.url_objects[0].info.url_short,
                                    d.url_objects = s.url_objects),
                                    t.next = 27,
                                    Object(oe["a"])(d);
                                case 27:
                                    f = t.sent,
                                    f && Object.assign(d, f),
                                    this.$store.commit("changechatrecorder", {
                                        value: d,
                                        textToken: n
                                    });
                                case 30:
                                    l["o"].updatemids(s.mid);
                                case 31:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[1, 7]])
                    }
                    )));
                    function e(e, n, r) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                nonetwork: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , r = n.textToken
                      , i = n.fileToken
                      , s = n.retryConfig
                      , o = {
                        direct: "right",
                        msg_status: 0,
                        created_at: (new Date).getTime(),
                        media_type: 0
                    }
                      , a = {
                        type: 1,
                        text: t
                    };
                    if ("nonetwork" === e)
                        return this.$store.commit("changechatrecorder", {
                            value: {
                                alert: "发送失败，请",
                                retryConfig: s
                            },
                            textToken: r,
                            fileToken: i
                        }),
                        void T["a"].$emit("busScrollToBottom");
                    if (20331 == e)
                        a.text = "由于对方设置，您不能发送消息";
                    else if (20031 == e)
                        a.text = "今天的未关注人私信发送过多，明天再试吧";
                    else if (20308 == e)
                        a.text = "您暂时无法对该未关注人发送私信";
                    else {
                        if (21252 == e && (r || i))
                            return this.$store.commit("changechatrecorder", {
                                value: {
                                    alert: "发送失败，全员禁言中，无法发送消息"
                                },
                                textToken: r,
                                fileToken: i
                            }),
                            void T["a"].$emit("busScrollToBottom");
                        if ((21202 == e || 20354 == e) && (r || i))
                            return this.$store.commit("changechatrecorder", {
                                value: {
                                    alert: "发送失败，功能维护中"
                                },
                                textToken: r,
                                fileToken: i
                            }),
                            void T["a"].$emit("busScrollToBottom")
                    }
                    Object.assign(a, o),
                    this.$store.commit("fillchatrecords", {
                        value: a
                    })
                },
                warnmsg: function() {
                    this.$modal({
                        icon: {
                            text: n("6008")
                        },
                        text: "抱歉！浏览器暂不支持截图功能，请使用其他截图工具截取图片后CTRL+V粘贴到输入框发送",
                        okObj: {
                            text: "我知道了",
                            okFun: function() {}
                        },
                        width: 430,
                        closebtn: !0
                    })
                },
                cursorRect: function(t) {
                    var e = t.start
                      , n = t.end;
                    0 == e && 0 == n && "webchat-textarea" != document.activeElement.id || (this.cursor = {
                        start: e,
                        end: n
                    })
                },
                getMoreAtUser: function() {},
                shield: function() {
                    this.setshield(this.$store.state.selectId, this.user_is_blocked)
                },
                toggleset: function() {
                    2 != this.$store.state.modalId ? this.$store.commit("changemodalId", 2) : this.$store.commit("changemodalId", -1)
                },
                checkBlockStatus: function() {
                    var t = this.listtype()
                      , e = this.finditemIndex(this.$store.state[t], this.selectId);
                    "chatlist" == t && e < 0 && (t = "topuser",
                    e = this.finditemIndex(this.$store.state[t], this.selectId)),
                    this.$store.state[t][e].is_blocked && this.setshield(this.$store.state[t][e].id, this.$store.state[t][e].is_blocked)
                }
            },
            mounted: function() {
                var t = this
                  , e = function(e) {
                    t.handleCardType(),
                    t.$modal({
                        title: "发送图片",
                        okObj: {
                            text: "发送",
                            okFun: function() {
                                t.notGroup(t.$store.state.selectId) ? t.sendMsg({
                                    id: t.$store.state.selectId
                                }, !1) : t.sendGroupMsg({
                                    id: t.$store.state.selectId
                                }, !1)
                            }
                        },
                        width: 430,
                        closebtn: !0
                    }),
                    t.$nextTick((function() {
                        var e = new Image;
                        console.log(t.message),
                        e.src = t.message.originImgUrl,
                        e.style.maxWidth = "430px",
                        e.style.maxHeight = "520px",
                        t.message.width && t.message.height ? (e.style.width = t.message.width + "px",
                        e.style.height = t.message.height + "px") : (e.style.width = "auto",
                        e.style.height = "auto"),
                        e.className = "pasteimg",
                        document.querySelector(".vue-modal .content").appendChild(e)
                    }
                    ))
                };
                T["a"].$off("dragImage"),
                T["a"].$off("handleNonetwork"),
                T["a"].$off("retryMessage"),
                T["a"].$off("saveHistory"),
                T["a"].$on("dragImage", (function(n) {
                    t.message = n,
                    t.$refs.textArea.addEventListener("drop", e),
                    document.addEventListener("drop", (function() {
                        t.$refs.textArea.removeEventListener("drop", e)
                    }
                    ))
                }
                )),
                T["a"].$on("handleNonetwork", (function(e) {
                    var n = e.text
                      , r = e.errorcode
                      , i = e.config;
                    t.nonetwork(n, r, i)
                }
                )),
                T["a"].$on("retryMessage", (function(e) {
                    t.retry(e)
                }
                )),
                T["a"].$on("saveHistory", (function(e) {
                    var n = e.val
                      , r = e.oldVal;
                    n && l["b"].setData(r, t.inputcontent),
                    n && setTimeout((function() {
                        t.inputcontent = l["b"][n] ? l["b"][n] : ""
                    }
                    ), 100)
                }
                )),
                this.pasteimg(),
                this.initplupload()
            },
            destroyed: function() {
                T["a"].$off("dragImage"),
                T["a"].$off("handleNonetwork"),
                T["a"].$off("retryMessage"),
                T["a"].$off("saveHistory")
            }
        }
          , be = ve
          , ye = (n("4078"),
        Object(_["a"])(be, Et, Rt, !1, null, "02dbf152", null))
          , _e = ye.exports
          , we = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "search"
            }, [n("div", {
                staticClass: "search-wrapper flex align-items_c"
            }, [n("i", {
                staticClass: "icon W_ficon icon-search"
            }, [t._v("")]), n("input", {
                staticClass: "searchInput flex-1",
                attrs: {
                    type: "text",
                    placeholder: "查找联系人或群"
                },
                domProps: {
                    value: t.search
                },
                on: {
                    input: function(e) {
                        return t.change(e)
                    }
                }
            }), t.search ? n("div", {
                staticClass: "searchInput-delete",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.empty(e)
                    }
                }
            }) : t._e()])])
        }
          , xe = [];
        n("386d");
        function je(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ke(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? je(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : je(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Oe = {
            data: function() {
                return {
                    active: !1
                }
            },
            computed: ke({}, Object(O["d"])(["search"])),
            methods: ke({}, Object(O["c"])(["exsearchstate", "exsearch", "exsearchlist"]), {
                empty: function() {
                    this.exsearch("")
                },
                change: function(t) {
                    var e = this
                      , n = t.target.value;
                    if (this.exsearch(n),
                    n) {
                        var r = {
                            params: {
                                key: n,
                                pagecount: 20
                            }
                        };
                        a["a"].msgsearch(r).then((function(t) {
                            if (t) {
                                var n = {
                                    contacts: t.contacts,
                                    groups: t.groups
                                };
                                e.exsearchlist(n)
                            }
                        }
                        ))
                    }
                }
            }),
            watch: {
                search: function() {
                    this.search ? this.exsearchstate(1) : this.exsearchstate(0)
                }
            }
        }
          , Ce = Oe
          , Ie = (n("1fa1"),
        Object(_["a"])(Ce, we, xe, !1, null, "520dd35c", null))
          , $e = Ie.exports
          , Te = {
            methods: {
                initunfollowlist: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e) {
                        var n, r, i = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = 50,
                                    r = {
                                        params: {
                                            count: n,
                                            cursor: this.$store.state.unfollowlistcursor
                                        }
                                    },
                                    t.next = 4,
                                    new Promise((function(t) {
                                        a["a"].getunfollowlist(r).then((function(r) {
                                            i.$store.commit("extotalUnfollowlist", r.total_number);
                                            var s = i.getlist(r);
                                            (!s || !s.length || s.length < n) && i.$store.commit("exallunfollowLoaded", !0),
                                            i.$store.state.unfollowlistcursor ? i.$store.commit("addunfollowlist", s) : i.$store.commit("fillunfollowlist", s),
                                            t(),
                                            e && e()
                                        }
                                        ))
                                    }
                                    ));
                                case 4:
                                    this.$store.state.showunfollow || this.$store.commit("exshowunfollow", !0);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getgroupdetail: function(t, e) {
                    if (t.isAtMe) {
                        var n = "chatlist";
                        t.is_top_user && (n = "topuser"),
                        this.$store.commit("update" + n, {
                            notTop: !0,
                            i: e,
                            param: {
                                isAtMe: !1
                            }
                        })
                    }
                    this.getgroupmemberinfos(t.id),
                    this.grouprecordreq(t.id)
                },
                getgroupmemberinfos: function(t) {
                    var e = this
                      , n = JSON.parse(localStorage.getItem("".concat(t, "_mi")))
                      , r = localStorage.getItem("".concat(t, "_ts"));
                    console.log(n, r);
                    var i = {
                        params: {
                            id: t
                        }
                    };
                    a["a"].querygroup(i).then((function(n) {
                        if (n.error)
                            e.$store.commit("emptyquerygroup", null);
                        else {
                            var r = n.name
                              , i = n.system_name
                              , s = n.max_member
                              , o = n.member_count
                              , a = n.global_max_admin
                              , c = n.admins
                              , u = n.owner
                              , l = n.summary
                              , d = n.bulletin
                              , f = n.member_infos
                              , h = n.group_url
                              , m = n.speech_forbid
                              , p = n.affiliation
                              , g = n.emeccs
                              , v = n.apply_status
                              , b = n.apply_update_type
                              , y = n.affi_type
                              , _ = n.group_ts
                              , w = n.members;
                            f && (localStorage.setItem("".concat(t, "_ts"), JSON.stringify(_)),
                            localStorage.setItem("".concat(t, "_mi"), JSON.stringify(f)));
                            var x = {
                                owner: u,
                                name: r,
                                bulletin: d,
                                system_name: i,
                                max_member: s,
                                member_count: o,
                                global_max_admin: a,
                                admins: c,
                                summary: l,
                                member_infos: f,
                                group_url: h,
                                speech_forbid: m,
                                affiliation: p,
                                emeccs: g,
                                apply_status: v,
                                affi_type: y,
                                apply_update_type: b,
                                members: w
                            };
                            t == e.$store.state.selectId && e.$store.commit("exquerygroup", x)
                        }
                    }
                    ))
                }
            }
        }
          , Ae = Te
          , Pe = (n("28a5"),
        n("7618"),
        n("0d71"))
          , Se = n.n(Pe)
          , De = n("e80e");
        function qe(t) {
            function e(t, e) {
                return t << e | t >>> 32 - e
            }
            function n(t, e) {
                var n, r, i, s, o;
                return i = 2147483648 & t,
                s = 2147483648 & e,
                n = 1073741824 & t,
                r = 1073741824 & e,
                o = (1073741823 & t) + (1073741823 & e),
                n & r ? 2147483648 ^ o ^ i ^ s : n | r ? 1073741824 & o ? 3221225472 ^ o ^ i ^ s : 1073741824 ^ o ^ i ^ s : o ^ i ^ s
            }
            function r(t, e, n) {
                return t & e | ~t & n
            }
            function i(t, e, n) {
                return t & n | e & ~n
            }
            function s(t, e, n) {
                return t ^ e ^ n
            }
            function o(t, e, n) {
                return e ^ (t | ~n)
            }
            function a(t, i, s, o, a, c, u) {
                return t = n(t, n(n(r(i, s, o), a), u)),
                n(e(t, c), i)
            }
            function c(t, r, s, o, a, c, u) {
                return t = n(t, n(n(i(r, s, o), a), u)),
                n(e(t, c), r)
            }
            function u(t, r, i, o, a, c, u) {
                return t = n(t, n(n(s(r, i, o), a), u)),
                n(e(t, c), r)
            }
            function l(t, r, i, s, a, c, u) {
                return t = n(t, n(n(o(r, i, s), a), u)),
                n(e(t, c), r)
            }
            function d(t) {
                var e, n = t.length, r = n + 8, i = (r - r % 64) / 64, s = 16 * (i + 1), o = Array(s - 1), a = 0, c = 0;
                while (c < n)
                    e = (c - c % 4) / 4,
                    a = c % 4 * 8,
                    o[e] = o[e] | t.charCodeAt(c) << a,
                    c += 1;
                return e = (c - c % 4) / 4,
                a = c % 4 * 8,
                o[e] = o[e] | 128 << a,
                o[s - 2] = n << 3,
                o[s - 1] = n >>> 29,
                o
            }
            function f(t) {
                var e, n, r = "", i = "";
                for (n = 0; n <= 3; n += 1)
                    e = t >>> 8 * n & 255,
                    i = "0" + e.toString(16),
                    r += i.substr(i.length - 2, 2);
                return r
            }
            function h(t) {
                t = t.replace(/\r\n/g, "\n");
                for (var e = "", n = 0; n < t.length; n += 1) {
                    var r = t.charCodeAt(n);
                    r < 128 ? e += String.fromCharCode(r) : r > 127 && r < 2048 ? (e += String.fromCharCode(r >> 6 | 192),
                    e += String.fromCharCode(63 & r | 128)) : (e += String.fromCharCode(r >> 12 | 224),
                    e += String.fromCharCode(r >> 6 & 63 | 128),
                    e += String.fromCharCode(63 & r | 128))
                }
                return e
            }
            var m, p, g, v, b, y, _, w, x, j = Array(), k = 7, O = 12, C = 17, I = 22, $ = 5, T = 9, A = 14, P = 20, S = 4, D = 11, q = 16, M = 23, E = 6, R = 10, N = 15, L = 21;
            for (t = h(t),
            j = d(t),
            y = 1732584193,
            _ = 4023233417,
            w = 2562383102,
            x = 271733878,
            m = 0; m < j.length; m += 16)
                p = y,
                g = _,
                v = w,
                b = x,
                y = a(y, _, w, x, j[m + 0], k, 3614090360),
                x = a(x, y, _, w, j[m + 1], O, 3905402710),
                w = a(w, x, y, _, j[m + 2], C, 606105819),
                _ = a(_, w, x, y, j[m + 3], I, 3250441966),
                y = a(y, _, w, x, j[m + 4], k, 4118548399),
                x = a(x, y, _, w, j[m + 5], O, 1200080426),
                w = a(w, x, y, _, j[m + 6], C, 2821735955),
                _ = a(_, w, x, y, j[m + 7], I, 4249261313),
                y = a(y, _, w, x, j[m + 8], k, 1770035416),
                x = a(x, y, _, w, j[m + 9], O, 2336552879),
                w = a(w, x, y, _, j[m + 10], C, 4294925233),
                _ = a(_, w, x, y, j[m + 11], I, 2304563134),
                y = a(y, _, w, x, j[m + 12], k, 1804603682),
                x = a(x, y, _, w, j[m + 13], O, 4254626195),
                w = a(w, x, y, _, j[m + 14], C, 2792965006),
                _ = a(_, w, x, y, j[m + 15], I, 1236535329),
                y = c(y, _, w, x, j[m + 1], $, 4129170786),
                x = c(x, y, _, w, j[m + 6], T, 3225465664),
                w = c(w, x, y, _, j[m + 11], A, 643717713),
                _ = c(_, w, x, y, j[m + 0], P, 3921069994),
                y = c(y, _, w, x, j[m + 5], $, 3593408605),
                x = c(x, y, _, w, j[m + 10], T, 38016083),
                w = c(w, x, y, _, j[m + 15], A, 3634488961),
                _ = c(_, w, x, y, j[m + 4], P, 3889429448),
                y = c(y, _, w, x, j[m + 9], $, 568446438),
                x = c(x, y, _, w, j[m + 14], T, 3275163606),
                w = c(w, x, y, _, j[m + 3], A, 4107603335),
                _ = c(_, w, x, y, j[m + 8], P, 1163531501),
                y = c(y, _, w, x, j[m + 13], $, 2850285829),
                x = c(x, y, _, w, j[m + 2], T, 4243563512),
                w = c(w, x, y, _, j[m + 7], A, 1735328473),
                _ = c(_, w, x, y, j[m + 12], P, 2368359562),
                y = u(y, _, w, x, j[m + 5], S, 4294588738),
                x = u(x, y, _, w, j[m + 8], D, 2272392833),
                w = u(w, x, y, _, j[m + 11], q, 1839030562),
                _ = u(_, w, x, y, j[m + 14], M, 4259657740),
                y = u(y, _, w, x, j[m + 1], S, 2763975236),
                x = u(x, y, _, w, j[m + 4], D, 1272893353),
                w = u(w, x, y, _, j[m + 7], q, 4139469664),
                _ = u(_, w, x, y, j[m + 10], M, 3200236656),
                y = u(y, _, w, x, j[m + 13], S, 681279174),
                x = u(x, y, _, w, j[m + 0], D, 3936430074),
                w = u(w, x, y, _, j[m + 3], q, 3572445317),
                _ = u(_, w, x, y, j[m + 6], M, 76029189),
                y = u(y, _, w, x, j[m + 9], S, 3654602809),
                x = u(x, y, _, w, j[m + 12], D, 3873151461),
                w = u(w, x, y, _, j[m + 15], q, 530742520),
                _ = u(_, w, x, y, j[m + 2], M, 3299628645),
                y = l(y, _, w, x, j[m + 0], E, 4096336452),
                x = l(x, y, _, w, j[m + 7], R, 1126891415),
                w = l(w, x, y, _, j[m + 14], N, 2878612391),
                _ = l(_, w, x, y, j[m + 5], L, 4237533241),
                y = l(y, _, w, x, j[m + 12], E, 1700485571),
                x = l(x, y, _, w, j[m + 3], R, 2399980690),
                w = l(w, x, y, _, j[m + 10], N, 4293915773),
                _ = l(_, w, x, y, j[m + 1], L, 2240044497),
                y = l(y, _, w, x, j[m + 8], E, 1873313359),
                x = l(x, y, _, w, j[m + 15], R, 4264355552),
                w = l(w, x, y, _, j[m + 6], N, 2734768916),
                _ = l(_, w, x, y, j[m + 13], L, 1309151649),
                y = l(y, _, w, x, j[m + 4], E, 4149444226),
                x = l(x, y, _, w, j[m + 11], R, 3174756917),
                w = l(w, x, y, _, j[m + 2], N, 718787259),
                _ = l(_, w, x, y, j[m + 9], L, 3951481745),
                y = n(y, p),
                _ = n(_, g),
                w = n(w, v),
                x = n(x, b);
            return (f(y) + f(_) + f(w) + f(x)).toLowerCase()
        }
        var Me = {
            mixins: [A["a"]],
            data: function() {
                return {
                    timer: null
                }
            },
            methods: {
                onMessage: function(t) {
                    var e = this;
                    t && (console.log("-------------------cometdMsg----------------------"),
                    console.log("cometdMsg:", t),
                    console.log("cometdMsg:", JSON.stringify(t)),
                    console.log("cometdMsg_store:", this.$store.state),
                    console.log("--------------------cometdMsg---------------------"),
                    this.$nextTick((function() {
                        e.handleMsg(t)
                    }
                    )))
                },
                handleMsg: function(t) {
                    var e = this
                      , n = t.type
                      , r = t.info
                      , i = qe(JSON.stringify(t));
                    if (l["p"].memorycomtedmsg.includes(i))
                        return console.log("md5滤重"),
                        void this.cgProcessPoll();
                    if (l["p"].updatemsgs(i),
                    d["a"].newTeamSovelComeMsg(t))
                        this.cgProcessPoll();
                    else if ("publicmsg" == n || "msg" == n) {
                        if (!Object(u["n"])(t, "info.content"))
                            return void this.cgProcessPoll();
                        if (l["l"].faultTolerance && this.islessDuplastmid(r.fromuid, r.dmid))
                            return void this.cgProcessPoll();
                        if (r.fromuid == this.$store.state.selectId) {
                            var o = this.intopuser(r.fromuid)
                              , c = "chatlist";
                            o && (c = "topuser"),
                            "publicmsg" == n && (c = "unfollowlist"),
                            this.personcurmsgget(t, c)
                        } else
                            "msg" == n ? this.personmsgget("chatlist", t) : this.personmsgget("unfollowlist", t)
                    } else if ("groupchat" == n) {
                        if (l["l"].faultTolerance && this.islessDuplastmid(t.info.gid, r.id))
                            return void this.cgProcessPoll();
                        this.execgroupget(t)
                    } else {
                        if ("presence" == n)
                            return void this.cgProcessPoll();
                        if ("dmread" == n)
                            this.clearunread(t);
                        else if ("synchroniz" == n) {
                            if (!t.syncData)
                                return void this.cgProcessPoll();
                            var f = JSON.parse(t.syncData);
                            if (null != f) {
                                var h = t.seq;
                                if ("fixed-send" == h)
                                    return void this.cgProcessPoll();
                                if ("fixed-clear" == h || "fixed-chatSync" == h) {
                                    var m = f.uid || f.data.gid;
                                    if (!m)
                                        return void this.cgProcessPoll();
                                    var p = this.listtype()
                                      , g = this.getusermsg(p, m);
                                    if (g < 0 && "chatlist" == p && (p = "topuser",
                                    g = this.getusermsg(p, m)),
                                    g >= 0) {
                                        if (!this.$store.state[p][g].unread_count)
                                            return void this.cgProcessPoll();
                                        "unfollowlist" == p && 2 != this.$store.state.pubremindtype && l["s"].reduce(this.$store.state[p][g].unread_count),
                                        ("unfollowlist" != p || "unfollowlist" == p && 2 != this.$store.state.pubremindtype) && l["r"].reduce(this.$store.state[p][g].unread_count);
                                        var v = {
                                            unread_count: 0
                                        }
                                          , b = {
                                            notTop: !0,
                                            i: g,
                                            param: v
                                        };
                                        this.$store.commit("update" + p, b)
                                    }
                                    return void this.cgProcessPoll()
                                }
                                return void this.cgProcessPoll()
                            }
                            this.cgProcessPoll()
                        } else if ("msgsync" == n) {
                            var y = this.listtype()
                              , _ = {
                                created_at: r.time,
                                text: r.content,
                                pic_gifs: r.pic_infos && r.pic_infos[0],
                                url_objects: r.url_objects,
                                comment: r.comment,
                                mid: r.dmid
                            };
                            if (r.att_ids && (_.fid = r.att_ids.split(",")[0]),
                            this.$store.state.showunfollow) {
                                var w = this.getusermsg(y, r.fromuid);
                                return void (w >= 0 && this.msgfrommeExist(r, _, w, y))
                            }
                            y = "topuser";
                            var x = this.getusermsg(y, r.fromuid);
                            x < 0 && (y = "chatlist",
                            x = this.getusermsg(y, r.fromuid)),
                            x >= 0 ? this.msgfrommeExist(r, _, x, y) : this.msgfrommeUnexist(r, _)
                        } else if ("recall_dm" == n) {
                            var j = this.listtype()
                              , k = t.owneruid == l["f"].basicinfo.id ? t.otheruid : t.owneruid
                              , O = this.getusermsg(j, k);
                            if (O < 0 && "chatlist" == j && (j = "topuser",
                            O = this.getusermsg(j, k)),
                            k == this.$store.state.selectId)
                                this.recallpermsg(t, O, k),
                                this.cgperrecords(k, t);
                            else if (O >= 0)
                                this.$store.state.showunfollow && 2 == this.$store.state.pubremindtype || (this.$store.state.showunfollow && l["s"].reduce(1),
                                l["r"].reduce(1)),
                                this.recallpermsg(t, O, k);
                            else if (this.$store.state.showunfollow)
                                l["r"].reduce(1);
                            else {
                                var C = this.$store.state.chatlist.findIndex((function(t) {
                                    return 3 == t.type
                                }
                                ));
                                if (C >= 0) {
                                    2 != this.$store.state.pubremindtype && l["s"].reduce(1);
                                    var I = {
                                        params: {
                                            add_virtual_user: 3,
                                            refresh_user_count: 1,
                                            need_back: "0,0",
                                            count: this.$store.state.chatlistcount
                                        }
                                    };
                                    a["a"].getchatlist(I).then((function(t) {
                                        var n, r = t.contacts.filter((function(t) {
                                            return 3 === t.user.type
                                        }
                                        ));
                                        n = r && r[0] && r[0].user && 3 === r[0].user.type ? r[0].unread_count : 0,
                                        e.$store.commit("updatechatlist", {
                                            notTop: !0,
                                            i: C,
                                            param: {
                                                unread_count: n
                                            }
                                        })
                                    }
                                    ))
                                }
                                2 != this.$store.state.pubremindtype && l["r"].reduce(1)
                            }
                            this.cgProcessPoll()
                        } else if ("add_top_contact" == n) {
                            var $ = t.ids
                              , T = -1;
                            if (!$ || !$.length)
                                return void this.cgProcessPoll();
                            var A = function() {
                                var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                                    var n, r;
                                    return regeneratorRuntime.wrap((function(t) {
                                        while (1)
                                            switch (t.prev = t.next) {
                                            case 0:
                                                n = regeneratorRuntime.mark((function t(n) {
                                                    var r, i;
                                                    return regeneratorRuntime.wrap((function(t) {
                                                        while (1)
                                                            switch (t.prev = t.next) {
                                                            case 0:
                                                                if (r = $[n],
                                                                e.$store.state.topuser.length && (T = e.$store.state.topuser.findIndex((function(t) {
                                                                    return t.id == r.id
                                                                }
                                                                ))),
                                                                !(T < 0)) {
                                                                    t.next = 18;
                                                                    break
                                                                }
                                                                if (e.$store.state.chatlist.length && (T = e.$store.state.chatlist.findIndex((function(t) {
                                                                    return t.id == r.id
                                                                }
                                                                ))),
                                                                !(T < 0)) {
                                                                    t.next = 14;
                                                                    break
                                                                }
                                                                if ("dm" != r.type) {
                                                                    t.next = 10;
                                                                    break
                                                                }
                                                                return t.next = 8,
                                                                new Promise((function(t) {
                                                                    e.getpernewuser(r.id, (function(n) {
                                                                        n && (n.is_top_user = !0,
                                                                        e.$store.commit("unshifttopuser", n)),
                                                                        t()
                                                                    }
                                                                    ))
                                                                }
                                                                ));
                                                            case 8:
                                                                t.next = 12;
                                                                break;
                                                            case 10:
                                                                return t.next = 12,
                                                                new Promise((function(t) {
                                                                    e.getgroupnewuser(r.id, (function(n) {
                                                                        n && (n.is_top_user = !0,
                                                                        e.$store.commit("unshifttopuser", n)),
                                                                        t()
                                                                    }
                                                                    ))
                                                                }
                                                                ));
                                                            case 12:
                                                                t.next = 18;
                                                                break;
                                                            case 14:
                                                                i = e.$store.state.chatlist[T],
                                                                e.$store.commit("removechatlist", T),
                                                                i.is_top_user = !0,
                                                                e.$store.commit("unshifttopuser", i);
                                                            case 18:
                                                            case "end":
                                                                return t.stop()
                                                            }
                                                    }
                                                    ), t)
                                                }
                                                )),
                                                r = 0;
                                            case 2:
                                                if (!(r < $.length)) {
                                                    t.next = 7;
                                                    break
                                                }
                                                return t.delegateYield(n(r), "t0", 4);
                                            case 4:
                                                r++,
                                                t.next = 2;
                                                break;
                                            case 7:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }();
                            A().then((function() {
                                e.cgProcessPoll()
                            }
                            ))
                        } else {
                            if ("delete_top_contact" == n) {
                                var P = t.ids;
                                return P && P.length && P.forEach((function(t) {
                                    var n = -1;
                                    if (e.$store.state.topuser.length && (n = e.$store.state.topuser.findIndex((function(e) {
                                        return e.id == t.id
                                    }
                                    ))),
                                    n >= 0) {
                                        var r = e.$store.state.topuser[n];
                                        e.$store.commit("removetopuser", n),
                                        r.is_top_user = !1,
                                        e.$store.commit("unshiftchatlist", r)
                                    }
                                }
                                )),
                                void this.cgProcessPoll()
                            }
                            if ("delete_pubdm_conversation" == n) {
                                var S = !1
                                  , D = this.listtype();
                                if ("unfollowlist" == D) {
                                    var q = this.getusermsg(D, t.uid);
                                    this.$store.state.selectId == t.uid ? (this.$store.commit("emptychatrecords"),
                                    this.$store.commit("emptylargeimg"),
                                    this.$store.commit("update" + D, {
                                        i: q,
                                        param: {
                                            text: ""
                                        }
                                    })) : q >= 0 && this.$store.commit("remove" + D, q)
                                } else {
                                    var M = this.$store.state.chatlist.findIndex((function(t) {
                                        return 3 == t.type
                                    }
                                    ));
                                    if (M >= 0) {
                                        var E = this.$store.state.chatlist[M];
                                        E.sender_id == t.uid && (S = !0,
                                        this.getUnfollowLastMessage((function(t) {
                                            t ? e.$store.commit("updatechatlist", {
                                                i: M,
                                                param: t
                                            }) : e.$store.commit("removechatlist", M),
                                            e.cgProcessPoll()
                                        }
                                        )))
                                    }
                                }
                                if (!S)
                                    return void this.cgProcessPoll()
                            } else {
                                if ("delete_dm_conversation" == n) {
                                    var R = this.listtype();
                                    "unfollowlist" != R && this.intopuser(t.uid) && (R = "topuser");
                                    var N = this.getusermsg(R, t.uid);
                                    if (this.$store.state.selectId == t.uid)
                                        if (this.$store.commit("emptychatrecords"),
                                        this.$store.commit("emptylargeimg"),
                                        "topuser" == R) {
                                            var L = this.$store.state.topuser[N];
                                            L.text = "",
                                            L.is_top_user = !1,
                                            this.$store.commit("unshiftchatlist", L),
                                            this.$store.commit("removetopuser", N)
                                        } else
                                            this.$store.commit("update" + R, {
                                                notTop: !0,
                                                i: N,
                                                param: {
                                                    text: ""
                                                }
                                            });
                                    else
                                        N >= 0 && this.$store.commit("remove" + R, N);
                                    return void this.cgProcessPoll()
                                }
                                if ("groupchat_remind_settings" == n) {
                                    var G = this.listHandle(t.gid)
                                      , U = G.list
                                      , B = G.i
                                      , W = this.$store.state[U][B];
                                    if (W && this.isFansGroup(W))
                                        return void this.cgProcessPoll();
                                    W && this.$store.commit("update" + U, {
                                        notTop: !0,
                                        i: B,
                                        param: {
                                            remindSetting: t.settings.mobile
                                        }
                                    }),
                                    this.cgProcessPoll()
                                } else
                                    this.cgProcessPoll()
                            }
                        }
                    }
                },
                getUnfollowLastMessage: function(t) {
                    var e = {
                        params: {
                            count: 1
                        }
                    };
                    a["a"].getunfollowlist(e).then((function(e) {
                        if (e && e.contacts && e.contacts.length) {
                            var n = e.contacts[0]
                              , r = {
                                text: n.message.text,
                                created_at: n.message.created_at,
                                mid: n.message.id,
                                sender_screen_name: n.user.name,
                                sender_id: n.user.id,
                                unread_count: n.unread_count || 0
                            };
                            t && t(r)
                        } else
                            t && t()
                    }
                    ))
                },
                refreshData: function() {
                    var t = this;
                    this.$store.state.selectId;
                    var e = this.$store.state.showunfollow ? "unfollowlist" : "chatlist";
                    this.$store.commit("ex" + e + "cursor", 0),
                    "chatlist" == e && this.$store.commit("exchatlistcount", 30),
                    this["init" + e]((function() {
                        if (l["l"].setState(!0),
                        l["i"].allmsgs.length) {
                            var e = l["i"].allmsgs[0];
                            t.handleMsg(e)
                        }
                        setTimeout((function() {
                            l["l"].setData(0)
                        }
                        ), l["l"].faultTolerance)
                    }
                    ), 1)
                },
                isexistrecord: function(t, e) {
                    if (this.$store.state.chatrecords.length && this.$store.state.selectId == t)
                        for (var n = this.$store.state.chatrecords.length, r = 1; r < 51; r++) {
                            if (n - r < 0)
                                return !1;
                            if (this.$store.state.chatrecords[n - r].mid == e)
                                return !0
                        }
                    return !1
                },
                islessDuplastmid: function(t, e) {
                    if (!e)
                        return !1;
                    var n = this.listtype()
                      , r = this.$store.state[n].findIndex((function(e) {
                        return e.id == t
                    }
                    ));
                    if (r < 0 && "chatlist" == n && (n = "topuser",
                    r = this.$store.state[n].findIndex((function(e) {
                        return e.id == t
                    }
                    ))),
                    r >= 0) {
                        var i = this.$store.state[n][r];
                        if (!i.mid)
                            return !1;
                        if (e.length < i.mid.length || e <= i.mid)
                            return !0
                    }
                    return !1
                },
                isexistlists: function(t, e) {
                    return t.mid == e
                },
                getuserinfos: function(t) {
                    return !(!this.$store.state.querygroup || !this.$store.state.querygroup.member_infos) && this.$store.state.querygroup.member_infos.find((function(e) {
                        return e.uid == t
                    }
                    ))
                },
                memberinfotrans: function(t) {
                    if (!t)
                        return {};
                    var e = {
                        avatar_large: Object(u["b"])(Object(u["p"])(t.profile_image_url, t.uid)) || Se.a,
                        description: "",
                        direct: "left",
                        id: t.uid,
                        verified_type: t.verified_type,
                        verified: t.verified,
                        verified_type_ext: t.verified_type_ext,
                        msg_status: 1,
                        name: t.screen_name || t.uid,
                        profile_url: "//www.weibo.com/u/" + t.uid
                    };
                    return e
                },
                getusermsg: function(t, e) {
                    return this.$store.state[t].findIndex((function(t) {
                        return t.id == e
                    }
                    ))
                },
                personmsgget: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r, i, s, o, c, l, d, f, h, m, p, g, v, b = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = n.info,
                                    r.content && ("msg" == n.type || "publicmsg" == n.type && 2 != this.$store.state.pubremindtype) && "publicmsg" == n.type && this.$store.state.pubremindtype,
                                    "msg" != n.type || !this.$store.state.showunfollow) {
                                        t.next = 5;
                                        break
                                    }
                                    return this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 5:
                                    if (this.getusermsg(e, r.fromuid),
                                    i = {
                                        fid: r.att_ids,
                                        created_at: r.time,
                                        sender_id: r.fromuid,
                                        text: r.content,
                                        mid: r.dmid,
                                        url_objects: r.url_objects
                                    },
                                    this.$store.state.showunfollow || "publicmsg" != n.type) {
                                        t.next = 33;
                                        break
                                    }
                                    if (s = this.getusermsg("chatlist", r.fromuid),
                                    o = 0,
                                    s >= 0 && (o = this.$store.state.chatlist[s].unread_count ? this.$store.state.chatlist[s].unread_count : 0,
                                    this.$store.commit("removechatlist", s)),
                                    c = this.$store.state.chatlist.findIndex((function(t) {
                                        return 3 == t.type
                                    }
                                    )),
                                    !(c < 0)) {
                                        t.next = 18;
                                        break
                                    }
                                    return t.next = 15,
                                    new Promise((function(t) {
                                        b.getuserdetail(r.fromuid, (function(e) {
                                            e.error || (i.sender_screen_name = e.screen_name,
                                            i.avatar_large = e.avatar_large),
                                            t()
                                        }
                                        ))
                                    }
                                    ));
                                case 15:
                                    this.createunfollowbox(r.content, o + 1, r.fromuid, i),
                                    t.next = 29;
                                    break;
                                case 18:
                                    if (!this.isexistlists(this.$store.state.chatlist[c], r.dmid)) {
                                        t.next = 21;
                                        break
                                    }
                                    return this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 21:
                                    return l = this.$store.state.chatlist[c].unread_count,
                                    d = l || 0,
                                    f = {
                                        mid: r.dmid,
                                        unread_count: d + o + 1,
                                        text: r.content,
                                        create_at: +new Date
                                    },
                                    t.next = 26,
                                    a["a"].userdetail({
                                        params: {
                                            uid: r.fromuid
                                        }
                                    });
                                case 26:
                                    h = t.sent,
                                    h.error || (f.sender_screen_name = h.screen_name,
                                    f.sender_id = h.id),
                                    this.$store.commit("updatechatlist", {
                                        i: c,
                                        param: f
                                    });
                                case 29:
                                    return this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 33:
                                    if (m = -1,
                                    "chatlist" == e ? (e = "topuser",
                                    m = this.getusermsg(e, r.fromuid),
                                    m < 0 && (e = "chatlist",
                                    m = this.getusermsg(e, r.fromuid))) : m = this.getusermsg(e, r.fromuid),
                                    !(m >= 0)) {
                                        t.next = 51;
                                        break
                                    }
                                    return t.next = 38,
                                    new Promise((function(t) {
                                        b.getuserdetail(r.fromuid, (function(e) {
                                            e.error || (i.sender_screen_name = e.screen_name,
                                            i.avatar_large = e.avatar_large),
                                            t()
                                        }
                                        ))
                                    }
                                    ));
                                case 38:
                                    if (p = this.$store.state[e][m],
                                    !this.isexistlists(p, r.dmid)) {
                                        t.next = 42;
                                        break
                                    }
                                    return this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 42:
                                    return g = {
                                        unread_count: p.unread_count ? p.unread_count + 1 : 1
                                    },
                                    Object.assign(g, i),
                                    v = {
                                        i: m,
                                        param: g
                                    },
                                    "unfollowlist" != e && !this.isWinFocus && r.content && (this.$store.state.isopenwebnotif && Object(De["a"])({
                                        id: r.fromuid,
                                        name: p.name,
                                        content: r.content,
                                        icon: p.round_avatar_large || p.profile_image_url
                                    }),
                                    this.$store.state.isopenvoice && this.play()),
                                    this.$store.commit("update" + e, v),
                                    this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 51:
                                    this.getuserdetail(r.fromuid, (function(t) {
                                        if (t.error)
                                            b.cgProcessPoll();
                                        else {
                                            i.sender_screen_name = t.screen_name,
                                            i.avatar_large = t.avatar_large;
                                            var n = {
                                                is_blocked: !1,
                                                name: t.name,
                                                verified_type: t.verified_type,
                                                verified: t.verified,
                                                verified_type_ext: t.verified_type_ext,
                                                profile_image_url: Object(u["b"])(t.profile_image_url),
                                                remark: t.remark,
                                                sender_screen_name: t.screen_name,
                                                type: 1,
                                                unread_count: 1
                                            };
                                            Object.assign(n, i),
                                            "unfollowlist" != e ? (!b.isWinFocus && r.content && (b.$store.state.isopenwebnotif && Object(De["a"])({
                                                id: r.fromuid,
                                                name: n.name,
                                                content: r.content,
                                                icon: n.profile_image_url
                                            }),
                                            b.$store.state.isopenvoice && b.play()),
                                            n.id = r.fromuid,
                                            b.$store.commit("unshift" + e, n)) : b.$store.state.showunfollow && (n.id = r.fromuid,
                                            b.$store.commit("unshiftunfollowlist", n)),
                                            b.cgProcessPoll()
                                        }
                                    }
                                    ));
                                case 52:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                execgroupget: function(t) {
                    var e = this
                      , n = t.info;
                    n.gid == this.$store.state.selectId ? this.groupcurmsgget(t, n.gid) : 320 == t.sub_type ? setTimeout((function() {
                        e.groupmsgget(t, n.gid)
                    }
                    ), 150) : this.groupmsgget(t, n.gid)
                },
                groupcurmsgget: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r, i, o, c, d, f, h, m, p, g, v, b, y, _, w, x, j, k, O, C, I, $, T, A, P, S, D, q, M, E = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    new Promise((function(t) {
                                        setTimeout((function() {
                                            n == E.$store.state.selectId && e.info.id && E.isexistrecord(n, e.info.id) && (E.cgProcessPoll(),
                                            t(!1)),
                                            t(!0)
                                        }
                                        ), 100)
                                    }
                                    ));
                                case 2:
                                    if (r = t.sent,
                                    r) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", !1);
                                case 5:
                                    if (i = e.info,
                                    o = null,
                                    c = this.getusermsg("topuser", i.gid),
                                    d = "topuser",
                                    c < 0 && (c = this.getusermsg("chatlist", i.gid),
                                    d = "chatlist"),
                                    c >= 0 && (o = this.$store.state[d][c]),
                                    f = e.sub_type,
                                    407 === f) {
                                        h = this.$store.state.chatrecords.length;
                                        try {
                                            for (m = h - 1; m > h - 10; m--)
                                                this.$store.state.chatrecords[m] && this.$store.state.chatrecords[m].fid && this.$store.state.chatrecords[m].fid === i.msgs[0].fids[0] && (this.$store.state.chatrecords[m].replaceToken = Object(u["l"])(),
                                                this.$store.state.chatrecords[m].imgurl = "//upload.api.weibo.com/2/mss/msget?fid=".concat(i.msgs[0].fids[0], "&source=209678993&imageType=origin"))
                                        } catch (R) {
                                            window.console.error(R)
                                        }
                                    }
                                    if (!(333 == f && c >= 0)) {
                                        t.next = 17;
                                        break
                                    }
                                    return this.isFansGroup(listItem) && (p = 0 == user_custom_msg_setting ? 2 : 1,
                                    this.$store.commit("update" + lt, {
                                        notTop: !0,
                                        i: c,
                                        param: {
                                            remindSetting: p
                                        }
                                    })),
                                    this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 17:
                                    if (g = [323, 324, 331],
                                    v = !1,
                                    (321 != e.sub_type || 321 == e.sub_type && i.sub_type && i.sub_type > 0) && (v = !0),
                                    !v || !g.includes(f)) {
                                        t.next = 26;
                                        break
                                    }
                                    return t.next = 23,
                                    new Promise((function(t) {
                                        setTimeout((function() {
                                            var r = l["k"].exitGroups.findIndex((function(t) {
                                                return t == n
                                            }
                                            ));
                                            r >= 0 ? (e.uids && e.uids.includes(l["f"].basicinfo.id) && (E.cgProcessPoll(),
                                            t(!0)),
                                            t(!1)) : t(!1)
                                        }
                                        ))
                                    }
                                    ));
                                case 23:
                                    if (b = t.sent,
                                    !b) {
                                        t.next = 26;
                                        break
                                    }
                                    return t.abrupt("return", !1);
                                case 26:
                                    return t.next = 28,
                                    this.getuserscreenname(i.from_uid, i.gid, i.from_user);
                                case 28:
                                    if (y = t.sent,
                                    331 != f) {
                                        t.next = 40;
                                        break
                                    }
                                    if (1 != i.op_type || !i.ids || !i.ids.length) {
                                        t.next = 35;
                                        break
                                    }
                                    this.recallmsg(i, c, y),
                                    this.cgrecords(i, f, y),
                                    t.next = 40;
                                    break;
                                case 35:
                                    return this.$store.commit("emptychatrecords"),
                                    this.$store.commit("emptylargeimg"),
                                    "topuser" == d ? (_ = this.$store.state.topuser[c],
                                    _.text = "",
                                    _.is_top_user = !1,
                                    this.$store.commit("unshiftchatlist", _),
                                    this.$store.commit("removetopuser", c)) : this.$store.commit("update" + d, {
                                        notTop: !0,
                                        i: c,
                                        param: {
                                            text: ""
                                        }
                                    }),
                                    this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 40:
                                    if (332 != f) {
                                        t.next = 45;
                                        break
                                    }
                                    return w = {
                                        notTop: !0,
                                        i: c,
                                        param: {
                                            unread_count: 0
                                        }
                                    },
                                    this.$store.commit("update" + d, w),
                                    this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 45:
                                    if (x = i.content,
                                    j = i.from_uid,
                                    i.gid,
                                    k = i.media_type,
                                    i.icon,
                                    O = i.fids,
                                    i.uids,
                                    i.group_name,
                                    C = i.newname,
                                    I = i.from_user,
                                    $ = i.url_objects,
                                    i.annotations,
                                    T = i.round_avatar,
                                    A = i.time,
                                    P = i.object,
                                    i.pic_infos,
                                    S = !1,
                                    j == l["f"].basicinfo.id && (S = !0),
                                    !x) {
                                        t.next = 52;
                                        break
                                    }
                                    return (321 != e.sub_type || 321 == e.sub_type && i.sub_type && i.sub_type > 0) && this.getnewgroupinfo(),
                                    t.next = 52,
                                    new Promise((function(t) {
                                        setTimeout((function() {
                                            var r = {
                                                created_at: 1e3 * A,
                                                direct: S ? "right" : "left",
                                                msg_status: S ? 0 : 1,
                                                fid: O && O.length && O[0],
                                                media_type: k,
                                                mid: i.id,
                                                type: f,
                                                sub_type: i.sub_type,
                                                text: x,
                                                faith_status: i.faith_status,
                                                comment: i.comment,
                                                pic_gifs: i.pic_infos && i.pic_infos[0]
                                            };
                                            if ($ && $[0] && (r.url_short = $[0].info.url_short,
                                            r.url_objects = $),
                                            P && (r.object = P),
                                            S)
                                                r.userinfo = l["f"].basicinfo;
                                            else if (I && void 0 !== I.verified) {
                                                var o = {};
                                                Object.assign(o, I),
                                                o.uid = j,
                                                r.userinfo = E.memberinfotrans(o, S)
                                            } else {
                                                var a = E.getuserinfos(j);
                                                r.userinfo = E.memberinfotrans(a, S)
                                            }
                                            Object(oe["a"])(r, function() {
                                                var o = Object(s["a"])(regeneratorRuntime.mark((function s(o) {
                                                    var a;
                                                    return regeneratorRuntime.wrap((function(s) {
                                                        while (1)
                                                            switch (s.prev = s.next) {
                                                            case 0:
                                                                if (o && Object.assign(r, o),
                                                                n == E.$store.state.selectId) {
                                                                    s.next = 4;
                                                                    break
                                                                }
                                                                return E.groupmsgget(e, n),
                                                                s.abrupt("return");
                                                            case 4:
                                                                if (!i.is_large) {
                                                                    s.next = 9;
                                                                    break
                                                                }
                                                                return a = {
                                                                    text: x,
                                                                    mid: i.id,
                                                                    isLargeDm: i.is_large
                                                                },
                                                                s.next = 8,
                                                                E.loadmoreText(a, 1);
                                                            case 8:
                                                                r.text = s.sent;
                                                            case 9:
                                                                E.$store.commit("fillchatrecords", {
                                                                    value: r
                                                                }),
                                                                "card5" == r.cardtype && E.$store.commit("addimgurls", {
                                                                    value: {
                                                                        fid: r.fid,
                                                                        mid: r.mid
                                                                    }
                                                                }),
                                                                t();
                                                            case 12:
                                                            case "end":
                                                                return s.stop()
                                                            }
                                                    }
                                                    ), s)
                                                }
                                                )));
                                                return function(t) {
                                                    return o.apply(this, arguments)
                                                }
                                            }())
                                        }
                                        ), 500)
                                    }
                                    ));
                                case 52:
                                    if (D = {
                                        sub_type: i.sub_type,
                                        fid: O && O.length && O[0],
                                        created_at: 1e3 * A,
                                        isAtMe: this.isAtMe(x)
                                    },
                                    this.$store.state.isWinFocus ? (D.unread_count = 0,
                                    q = {
                                        id: i.gid
                                    },
                                    a["a"].clearunread(q)) : i.content && !(321 != e.sub_type || 321 == e.sub_type && i.sub_type && i.sub_type > 0) && (D.unread_count = 1 + (o.unread_count || 0)),
                                    i.content && (D.message_type = e.sub_type,
                                    D.sender_id = j,
                                    D.sender_screen_name = y,
                                    D.mid = i.id),
                                    x && (D.text = x),
                                    C && (D.name = C),
                                    T && (D.round_avatar_large = Object(u["b"])(i.round_avatar)),
                                    T && (D.round_profile_image_url = Object(u["b"])(i.round_avatar)),
                                    M = this.isAtMe(x) ? "[有人@我]" : "",
                                    !this.isWinFocus && 1 != o.remindSetting && i.content && (this.$store.state.isopenwebnotif && Object(De["a"])({
                                        id: n,
                                        name: o.name,
                                        content: M + y + ":" + i.content,
                                        icon: o.round_avatar_large || o.profile_image_url
                                    }),
                                    this.$store.state.isopenvoice && this.play()),
                                    D.isAtMe || o && o.isAtMe && (D.isAtMe = !0),
                                    n == this.$store.state.selectId) {
                                        t.next = 65;
                                        break
                                    }
                                    return this.groupmsgget(e, n),
                                    t.abrupt("return");
                                case 65:
                                    return this.$store.commit("update" + d, {
                                        i: c,
                                        param: D
                                    }),
                                    this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 68:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                isAtMe: function(t) {
                    return !!t && t.indexOf("@" + l["f"].basicinfo.name) >= 0
                },
                groupmsgget: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r, i, s, o, c, d, f, h, m, g, v, b, y, _, w, x, j, k, O, C, I, $, T, A, P, S, D = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = e.info,
                                    i = e.sub_type,
                                    s = r.content,
                                    o = r.from_uid,
                                    r.gid,
                                    r.media_type,
                                    r.icon,
                                    c = r.fids,
                                    r.group_name,
                                    d = r.newname,
                                    r.annotations,
                                    r.round_avatar,
                                    f = r.user_custom_msg_setting,
                                    h = r.time,
                                    m = r.uids ? r.uids : r.ids,
                                    g = "topuser",
                                    v = this.getusermsg(g, n),
                                    v < 0 && (g = "chatlist",
                                    v = this.getusermsg(g, n)),
                                    b = this.$store.state[g][v],
                                    332 == i && v >= 0 && 1 != this.$store.state[g][v].remindSetting && this.$store.state[g][v].unread_count ? l["r"].reduce(this.$store.state[g][v].unread_count) : r.content && r.from_uid != l["f"].basicinfo.id && v >= 0 && 1 != this.$store.state[g][v].remindSetting && (1 == r.op_type && r.ids && r.ids.length ? l["r"].reduce(1) : l["r"].add(1)),
                                    y = null,
                                    v >= 0 && (y = this.$store.state[g][v]),
                                    333 != i) {
                                        t.next = 15;
                                        break
                                    }
                                    return b && this.isFansGroup(b) && (_ = 0 == f ? 2 : 1,
                                    this.$store.commit("update" + g, {
                                        notTop: !0,
                                        i: v,
                                        param: {
                                            remindSetting: _
                                        }
                                    })),
                                    this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 15:
                                    if (this.$store.state.showunfollow && r.content,
                                    !(this.$store.state.showunfollow || v < 0 && !r.content)) {
                                        t.next = 19;
                                        break
                                    }
                                    return this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 19:
                                    if (323 != i) {
                                        t.next = 24;
                                        break
                                    }
                                    if (!(v >= 0 && m.includes(l["f"].basicinfo.id))) {
                                        t.next = 24;
                                        break
                                    }
                                    return this.$store.commit("remove" + g, v),
                                    this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 24:
                                    if (w = [323, 324, 331],
                                    x = !1,
                                    (321 != e.sub_type || 321 == e.sub_type && r.sub_type && r.sub_type > 0) && (x = !0),
                                    !x || !w.includes(i)) {
                                        t.next = 33;
                                        break
                                    }
                                    return t.next = 30,
                                    new Promise((function(t) {
                                        setTimeout((function() {
                                            var e = l["k"].exitGroups.findIndex((function(t) {
                                                return t == n
                                            }
                                            ));
                                            e >= 0 ? (m && m.includes(l["f"].basicinfo.id) && (D.cgProcessPoll(),
                                            t(!0)),
                                            t(!1)) : t(!1)
                                        }
                                        ))
                                    }
                                    ));
                                case 30:
                                    if (j = t.sent,
                                    !j) {
                                        t.next = 33;
                                        break
                                    }
                                    return t.abrupt("return", !1);
                                case 33:
                                    return t.next = 35,
                                    this.getuserscreenname(r.from_uid, n, r.from_user);
                                case 35:
                                    if (k = t.sent,
                                    331 != i) {
                                        t.next = 44;
                                        break
                                    }
                                    if (1 != r.op_type || !r.ids || !r.ids.length) {
                                        t.next = 41;
                                        break
                                    }
                                    this.recallmsg(r, v, k),
                                    t.next = 44;
                                    break;
                                case 41:
                                    return v >= 0 && !this.$store.state.showunfollow && this.$store.commit("remove" + g, v),
                                    this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 44:
                                    if (!(332 == i && v >= 0) || this.$store.state.showunfollow) {
                                        t.next = 51;
                                        break
                                    }
                                    return O = {
                                        notTop: !0,
                                        i: v,
                                        param: {
                                            unread_count: 0
                                        }
                                    },
                                    this.$store.commit("update" + g, O),
                                    this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 51:
                                    if (332 != i) {
                                        t.next = 55;
                                        break
                                    }
                                    return this.$store.commit("update" + g, p),
                                    this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 55:
                                    if (C = {},
                                    (r.content || v < 0) && (C = {
                                        fid: c && c.length ? r.fids[0] : "",
                                        created_at: 1e3 * h,
                                        sender_screen_name: k,
                                        sender_id: o,
                                        sub_type: r.sub_type,
                                        mid: r.id,
                                        message_type: i
                                    }),
                                    this.isAtMe(s) && (C.isAtMe = !0),
                                    !(v >= 0)) {
                                        t.next = 81;
                                        break
                                    }
                                    if (I = {},
                                    !r.id || !this.isexistlists(y, r.id)) {
                                        t.next = 63;
                                        break
                                    }
                                    return this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 63:
                                    $ = !1,
                                    (321 != e.sub_type || 321 == e.sub_type && r.sub_type && r.sub_type > 0) && ($ = !0),
                                    o != l["f"].basicinfo.id && r.content && !$ && (I.unread_count = y.unread_count ? y.unread_count + 1 : 1),
                                    T = I.isAtMe ? "[有人@我]" : "",
                                    !this.isWinFocus && r.content && r.from_uid != l["f"].basicinfo.id && 1 != y.remindSetting && (this.$store.state.isopenwebnotif && Object(De["a"])({
                                        id: n,
                                        name: y.name,
                                        content: T + k + ":" + r.content,
                                        icon: this.$store.state[g][v].round_profile_image_url || this.$store.state[g][v].profile_image_url
                                    }),
                                    this.$store.state.isopenvoice && this.play()),
                                    I.isAtMe || this.$store.state[g][v].isAtMe && (I.isAtMe = !0),
                                    s && (I.text = s),
                                    r.id && y && y.mid && r.id <= y.mid && s && (I.text = y.text),
                                    d && (I.name = d),
                                    r.round_avatar && (I.round_avatar_large = Object(u["b"])(r.round_avatar)),
                                    r.round_avatar && (I.round_profile_image_url = Object(u["b"])(r.round_avatar)),
                                    Object.assign(C, I),
                                    A = {
                                        i: v,
                                        param: C
                                    },
                                    s || (A.notTop = !0),
                                    this.$store.commit("update" + g, A),
                                    this.cgProcessPoll(),
                                    t.next = 89;
                                    break;
                                case 81:
                                    if (s && (327 != i || r.from_uid != l["f"].basicinfo.id)) {
                                        t.next = 84;
                                        break
                                    }
                                    return this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 84:
                                    P = 0,
                                    S = !1,
                                    (321 != e.sub_type || 321 == e.sub_type && r.sub_type && r.sub_type > 0) && (S = !0),
                                    r.from_uid == l["f"].basicinfo.id || S || (P = 1),
                                    a["a"].groupquery({
                                        params: {
                                            id: r.gid
                                        }
                                    }).then((function(t) {
                                        var e = D.getRemindSetting(t)
                                          , i = {
                                            member_count: t.member_count,
                                            name: t.system_name,
                                            profile_image_url: Object(u["b"])(t.avatar),
                                            remark: "",
                                            remindSetting: e,
                                            round_profile_image_url: Object(u["b"])(t.round_avatar),
                                            round_avatar_large: Object(u["b"])(t.round_avatar),
                                            avatar_large: Object(u["b"])(t.round_avatar),
                                            type: 2,
                                            unread_count: P
                                        };
                                        s && (i.text = r.content),
                                        Object.assign(i, C);
                                        var o = C.isAtMe ? "[有人@我]" : "";
                                        !D.isWinFocus && r.content && (D.$store.state.isopenwebnotif && Object(De["a"])({
                                            id: n,
                                            name: i.name,
                                            content: o + k + ":" + r.content,
                                            icon: i.round_avatar_large || i.profile_image_url
                                        }),
                                        D.$store.state.isopenvoice && D.play()),
                                        i.id = r.gid,
                                        D.$store.commit("unshift" + g, i),
                                        D.cgProcessPoll()
                                    }
                                    ));
                                case 89:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getuserscreenname: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n, r) {
                        var i, s = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!(this.$store.state.groupmemberset && e in this.$store.state.groupmemberset)) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return", this.$store.state.groupmemberset[e].screen_name);
                                case 4:
                                    if (!r) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("return", r.screen_name);
                                case 6:
                                    return t.next = 8,
                                    new Promise((function(t) {
                                        a["a"].querygroup({
                                            params: {
                                                id: n
                                            }
                                        }).then((function(n) {
                                            if (n.error)
                                                t();
                                            else {
                                                var r = {};
                                                n.member_infos.forEach((function(t) {
                                                    r[t.uid] = {
                                                        screen_name: t.screen_name,
                                                        profile_image_url: Object(u["b"])(t.profile_image_url)
                                                    }
                                                }
                                                )),
                                                s.$store.commit("fillgroupmemberset", r),
                                                t(Object(u["n"])(s.$store.state.groupmemberset[e], "screen_name"))
                                            }
                                        }
                                        ))
                                    }
                                    ));
                                case 8:
                                    return i = t.sent,
                                    t.abrupt("return", i);
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n, r) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                clearunread: function(t) {
                    var e = this
                      , n = t.uid
                      , r = "topuser"
                      , i = !1
                      , s = this.getusermsg(r, n);
                    if (s < 0 && (r = "chatlist",
                    s = this.getusermsg(r, n)),
                    s >= 0)
                        return l["r"].reduce(this.$store.state[r][s].unread_count),
                        "chatlist" == r ? this.$store.commit("emptyunreadId", n) : this.$store.commit("emptyunreadIdTop", n),
                        void this.cgProcessPoll();
                    r = "unfollowlist",
                    s = this.getusermsg(r, n);
                    var o = this.$store.state.chatlist.findIndex((function(t) {
                        return 3 == t.type
                    }
                    ));
                    if (s >= 0) {
                        if (2 != this.$store.state.pubremindtype) {
                            var a = this.$store.state.unfollowlist[s].unread_count;
                            l["s"].reduce(a),
                            l["r"].reduce(a)
                        }
                        if (this.$store.state.showunfollow) {
                            var c = this.$store.state.unfollowlist[s].unread_count
                              , u = this.$store.state.chatlist[o].unread_count - c;
                            this.$store.commit("emptypubunreadId", n),
                            o >= 0 && this.$store.commit("updatechatlist", {
                                notTop: !0,
                                i: o,
                                param: {
                                    unread_count: u > 0 ? u : 0
                                }
                            })
                        } else {
                            var d = this.$store.state.unfollowlist[s].unread_count;
                            if (o >= 0) {
                                o = this.$store.state.chatlist.findIndex((function(t) {
                                    return 3 == t.type
                                }
                                ));
                                var f = this.$store.state.unfollowlist[s].unread_count - d;
                                this.$store.commit("updatechatlist", {
                                    notTop: !0,
                                    i: o,
                                    param: {
                                        unread_count: f
                                    }
                                })
                            }
                        }
                        this.cgProcessPoll()
                    } else
                        this.isgroup(n) || (i = !0,
                        this.getUnfollowLastMessage((function(t) {
                            t || (t = {
                                unread_count: 0
                            }),
                            o >= 0 && (o = e.$store.state.chatlist.findIndex((function(t) {
                                return 3 == t.type
                            }
                            )),
                            e.$store.commit("updatechatlist", {
                                notTop: !0,
                                i: o,
                                param: t
                            })),
                            e.cgProcessPoll()
                        }
                        ))),
                        i || this.cgProcessPoll()
                },
                msgfrommeExist: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n, r, i) {
                        var s, o, a = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (s = this.$store.state[i][r],
                                    s || "chatlist" != i || (i = "topuser",
                                    s = this.$store.state[i][r]),
                                    !this.isexistlists(this.$store.state[i][r], e.dmid)) {
                                        t.next = 5;
                                        break
                                    }
                                    return this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 5:
                                    if (n.fileToken = "",
                                    s.is_blocked && (n.is_blocked = !1),
                                    this.$store.commit("update" + i, {
                                        i: r,
                                        param: n
                                    }),
                                    e.fromuid == this.$store.state.selectId) {
                                        t.next = 13;
                                        break
                                    }
                                    return this.cgProcessPoll(),
                                    t.abrupt("return", !1);
                                case 13:
                                    if (!this.isexistrecord(e.fromuid, e.dmid)) {
                                        t.next = 16;
                                        break
                                    }
                                    return this.cgProcessPoll(),
                                    t.abrupt("return", !1);
                                case 16:
                                    return o = {
                                        media_type: e.media_type,
                                        sub_type: e.sub_type,
                                        msg_status: 0,
                                        sender_id: l["f"].basicinfo.id,
                                        direct: "right",
                                        isLargeDm: !!e.isLargeDm && e.isLargeDm
                                    },
                                    Object.assign(o, n),
                                    t.next = 20,
                                    new Promise((function(t) {
                                        Object(oe["a"])(o, (function(e) {
                                            e && Object.assign(o, e),
                                            a.$store.commit("changechatrecorder", {
                                                value: o
                                            }),
                                            "card5" == o.cardtype && a.$store.commit("addimgurls", {
                                                value: {
                                                    fid: o.fid,
                                                    mid: o.mid
                                                }
                                            }),
                                            t()
                                        }
                                        ))
                                    }
                                    ));
                                case 20:
                                    this.cgProcessPoll();
                                case 21:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n, r, i) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                msgfrommeUnexist: function(t, e) {
                    var n = this;
                    a["a"].relative({
                        params: {
                            uids: t.fromuid
                        }
                    }).then((function(r) {
                        var i = {
                            params: {
                                uid: t.fromuid
                            }
                        }
                          , s = [0, 1, 4];
                        if (s.includes(r[0].result)) {
                            var o = n.getusermsg("unfollowlist", t.fromuid);
                            if (o >= 0) {
                                var c = n.$store.state.unfollowlist[o];
                                return n.$store.commit("removeunfollowlist", o),
                                Object.assign(c, e),
                                n.$store.commit("unshiftchatlist", c),
                                void n.cgProcessPoll()
                            }
                        }
                        a["a"].userdetail(i).then((function(t) {
                            if (!t.error) {
                                var r = {
                                    id: t.id,
                                    is_blocked: !1,
                                    message_type: 0,
                                    name: t.name,
                                    avatar_large: Object(u["b"])(Object(u["p"])(t.avatar_large, t.id)),
                                    profile_image_url: Object(u["b"])(t.profile_image_url),
                                    remark: "",
                                    sender_id: l["f"].basicinfo.id,
                                    sender_screen_name: l["f"].basicinfo.name,
                                    sub_type: 0,
                                    type: 1,
                                    unread_count: 0
                                };
                                Object.assign(r, e),
                                n.$store.commit("unshiftchatlist", r),
                                n.cgProcessPoll()
                            }
                        }
                        ))
                    }
                    ))
                },
                personcurmsgget: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r, i, s, o, c, u, l, d, f, h, m, p, g = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = e.info,
                                    i = this.getusermsg(n, r.fromuid),
                                    s = null,
                                    i >= 0 && (s = this.$store.state[n][i]),
                                    o = r.fromuid,
                                    !this.isexistrecord(o, r.dmid)) {
                                        t.next = 8;
                                        break
                                    }
                                    return this.cgProcessPoll(),
                                    t.abrupt("return", !1);
                                case 8:
                                    if (c = {
                                        is_include_group: 0,
                                        type: 2,
                                        uid: r.fromuid
                                    },
                                    this.$store.state.showunfollow || "publicmsg" != e.type) {
                                        t.next = 18;
                                        break
                                    }
                                    return t.next = 12,
                                    new Promise((function(t) {
                                        g.initunfollowlist((function() {
                                            t()
                                        }
                                        ))
                                    }
                                    ));
                                case 12:
                                    return this.$store.commit("selectSession", r.fromuid),
                                    u = this.getusermsg("unfollowlist", r.fromuid),
                                    this.$store.state.isWinFocus ? (this.$store.commit("emptypubunread", u),
                                    a["a"].clearUnfollowUnreadMsg(c)) : r.content && (l = 1 + (this.$store.unfollowlist[u] || 0),
                                    this.$store.commit("updateunfollowlist", {
                                        i: u,
                                        param: {
                                            unread_count: l
                                        }
                                    })),
                                    this.personrecordreq(r.fromuid),
                                    this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 18:
                                    return d = {
                                        created_at: r.time,
                                        direct: "left",
                                        media_type: r.media_type,
                                        msg_status: 1,
                                        mid: r.dmid,
                                        text: r.content,
                                        pic_gifs: r.pic_infos && r.pic_infos[0],
                                        isLargeDm: !!r.isLargeDm && r.isLargeDm,
                                        sender_id: r.fromuid,
                                        comment: r.comment,
                                        url_objects: r.url_objects
                                    },
                                    r.att_ids && (d.fid = r.att_ids.split(",")[0]),
                                    t.next = 22,
                                    Object(oe["a"])(d);
                                case 22:
                                    if (f = t.sent,
                                    f && Object.assign(d, f),
                                    o == this.$store.state.selectId) {
                                        t.next = 27;
                                        break
                                    }
                                    return this.personmsgget(n, e),
                                    t.abrupt("return");
                                case 27:
                                    if (this.$store.commit("fillchatrecords", {
                                        value: d
                                    }),
                                    "card5" == d.cardtype && this.$store.commit("addimgurls", {
                                        value: {
                                            fid: d.fid,
                                            mid: d.mid
                                        }
                                    }),
                                    this.$store.state.selectId != o) {
                                        t.next = 44;
                                        break
                                    }
                                    if (h = this.getusermsg(n, r.fromuid),
                                    h < 0 && this.$store.state.showunfollow && "msg" == e.type && (m = this.getusermsg("unfollowlist", r.fromuid),
                                    m >= 0 && (h = m),
                                    n = "unfollowlist"),
                                    !(h >= 0)) {
                                        t.next = 40;
                                        break
                                    }
                                    if (p = {
                                        created_at: r.time,
                                        text: r.content,
                                        pic_gifs: r.pic_infos && r.pic_infos[0],
                                        message_type: r.type,
                                        mid: r.dmid,
                                        url_objects: r.url_objects
                                    },
                                    this.$store.state.isWinFocus ? (p.unread_count = 0,
                                    this.$store.state.showunfollow ? a["a"].clearUnfollowUnreadMsg(c) : a["a"].clearunreadMsg(c)) : p.unread_count = 1 + (this.$store.state[n][h].unread_count || 0),
                                    "unfollowlist" != n && r.content && !this.isWinFocus && (this.$store.state.isopenwebnotif && Object(De["a"])({
                                        id: o,
                                        name: s.name,
                                        content: r.content,
                                        icon: s.round_avatar_large || s.profile_image_url
                                    }),
                                    this.$store.state.isopenvoice && this.play()),
                                    o == this.$store.state.selectId) {
                                        t.next = 39;
                                        break
                                    }
                                    return this.personmsgget(n, e),
                                    t.abrupt("return");
                                case 39:
                                    this.$store.commit("update" + n, {
                                        i: h,
                                        param: p
                                    });
                                case 40:
                                    return this.cgProcessPoll(),
                                    t.abrupt("return");
                                case 44:
                                    return this.personmsgget(n, e),
                                    t.abrupt("return");
                                case 46:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                recallmsg: function(t, e, n) {
                    var r = {}
                      , i = "chatlist"
                      , s = this.$store.state.chatlist[e];
                    if (s && s.id == t.gid || (i = "topuser"),
                    this.$store.state[i][e].mid == t.ids[0] && (r = {
                        fid: "",
                        created_at: 1e3 * t.time,
                        text: t.recall_text ? t.recall_text : n + "撤回了一条消息",
                        sender_id: t.from_uid,
                        message_type: 331,
                        id: t.gid,
                        fileToken: ""
                    }),
                    this.$store.state[i][e].unread_count && (r.unread_count = this.$store.state[i][e].unread_count - 1),
                    "{}" == JSON.stringify(r))
                        return !1;
                    this.$store.commit("update" + i, {
                        i: e,
                        param: r
                    })
                },
                recallpermsg: function(t, e, n) {
                    var r = {}
                      , i = n == t.owneruid ? "对方" : "你"
                      , s = this.listtype()
                      , o = this.$store.state[s][e];
                    o && o.id == n || "chatlist" != s || (s = "topuser");
                    var a = t.recall_text;
                    if (this.$store.state[s][e].mid == t.id && (r = {
                        fid: "",
                        text: a || i + "撤回了一条消息",
                        sender_id: t.owneruid,
                        message_type: 331,
                        sub_type: 3,
                        id: n,
                        fileToken: ""
                    }),
                    this.$store.state[s][e].unread_count && (r.unread_count = this.$store.state[s][e].unread_count - 1),
                    "{}" == JSON.stringify(r))
                        return !1;
                    this.$store.commit("update" + s, {
                        i: e,
                        param: r
                    })
                },
                cgperrecords: function(t, e) {
                    var n = this.$store.state.chatrecords.length
                      , r = t == e.owneruid ? "对方" : "你"
                      , i = this.$store.state.chatrecords;
                    for (var s in i)
                        if (i[n - s - 1].mid == e.id) {
                            var o = {
                                fid: "",
                                text: e.recall_text ? e.recall_text : r + "撤回了一条消息",
                                type: 331
                            };
                            return this.$store.commit("replacerecord", {
                                i: n - s - 1,
                                param: o
                            }),
                            void this.$store.commit("removeimgurl", e.id)
                        }
                },
                cgrecords: function(t, e, n) {
                    var r = this.$store.state.chatrecords.length;
                    for (var i in this.$store.state.chatrecords)
                        if (this.$store.state.chatrecords[r - i - 1].mid == t.ids[0] && 331 !== this.$store.state.chatrecords[r - i - 1].sub_type) {
                            t.from_uid == l["f"].basicinfo.id && (n = "你");
                            var s = {
                                created_at: 1e3 * t.time,
                                fid: "",
                                media_type: t.media_type,
                                sub_type: t.sub_type,
                                text: t.recall_text ? t.recall_text : n + "撤回了一条消息",
                                type: e
                            };
                            return this.$store.commit("replacerecord", {
                                i: r - i - 1,
                                param: s
                            }),
                            void this.$store.commit("removeimgurl", t.ids[0])
                        }
                },
                cgProcessPoll: function() {
                    var t = this;
                    if (clearTimeout(this.timer),
                    this.timer = setTimeout((function() {
                        if (l["i"].allmsgs.length) {
                            l["i"].shiftData(),
                            console.log("如果当前仍未执行完毕则强制执行下一条");
                            var e = l["i"].allmsgs[0];
                            e && t.handleMsg(e)
                        }
                    }
                    ), 16e3),
                    l["i"].shiftData(),
                    l["i"].allmsgs.length) {
                        console.log("执行完毕，从缓冲池中拿出一条数据");
                        var e = l["i"].allmsgs[0];
                        this.handleMsg(e)
                    } else
                        console.log("缓冲池清空，所有任务完成")
                },
                play: function() {
                    var t = document.getElementById("globaAudio");
                    t.paused && t.play()
                },
                createunfollowbox: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n, r, i) {
                        var s;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return s = {
                                        id: -100,
                                        name: "未关注人私信",
                                        profile_image_url: "//ww3.sinaimg.cn/large/90bb4c1djw1eu0yvzakk8j200u00u0mo",
                                        type: 3,
                                        unread_count: n,
                                        create_at: (new Date).getTime(),
                                        text: e
                                    },
                                    t.next = 3,
                                    new Promise((function(t) {
                                        a["a"].userdetail({
                                            params: {
                                                uid: r
                                            }
                                        }).then((function(e) {
                                            e.error || (s.sender_screen_name = e.screen_name,
                                            s.sender_id = e.id,
                                            t())
                                        }
                                        ))
                                    }
                                    ));
                                case 3:
                                    Object.assign(s, i),
                                    this.$store.commit("unshiftchatlist", s);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n, r, i) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                onCometReconnected: function() {}
            }
        }
          , Ee = Me
          , Re = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("div", {
                staticClass: "user flex justify-c_space-b align-items_c"
            }, [n("div", {
                staticClass: "left flex align-items_c"
            }, [n("div", {
                staticClass: "avator-box hvhd",
                on: {
                    click: t.jump
                }
            }, [n("img", {
                staticClass: "avator hvhd",
                attrs: {
                    src: t.userdata.avatar_large,
                    title: "修改头像"
                }
            }), n("weibo-verified", {
                attrs: {
                    user: t.userdata
                }
            })], 1), n("span", {
                staticClass: "name one-line hvhd",
                attrs: {
                    title: "修改昵称"
                },
                on: {
                    click: t.jump2
                }
            }, [t._v(t._s(t.userdata.name))]), n("span", {
                staticClass: "hidden"
            }, [t._v(t._s(t.userdata.id))])]), n("div", {
                staticClass: "right flex"
            }, [n("i", {
                staticClass: "icon W_ficon icon-msg",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleset(10)
                    }
                }
            }, [n("hover-item", {
                attrs: {
                    name: "qunliao"
                }
            })], 1), n("i", {
                staticClass: "icon W_ficon icon-more",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.toggleset(3)
                    }
                }
            }, [t._v("")])])]), 10 == t.modalId ? n("ul", {
                staticClass: "settings chat-set font12"
            }, [n("li", {
                on: {
                    click: function(e) {
                        return t.startgroups()
                    }
                }
            }, [t._v("新建群聊")]), n("li", {
                on: {
                    click: t.choosegroups
                }
            }, [t._v("选择群聊")])]) : t._e(), 3 == t.modalId ? n("ul", {
                staticClass: "settings font12"
            }, [n("li", {
                on: {
                    click: t.changenoticestate
                }
            }, [t._v(t._s(t.isopenwebnotif ? "关闭" : "打开") + "桌面通知")]), n("li", {
                on: {
                    click: t.changevoicestate
                }
            }, [t._v(t._s(t.isopenvoice ? "关闭" : "打开") + "提醒声音")]), n("li", {
                on: {
                    click: t.logout
                }
            }, [t._v("退出")])]) : t._e()])
        }
          , Ne = [];
        function Le(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Ge(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Le(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Ue = {
            mixins: [A["a"]],
            props: ["userdata"],
            data: function() {
                return {}
            },
            components: {
                weiboVerified: ht,
                hoverItem: yt
            },
            computed: Ge({}, Object(O["d"])(["modalId", "isopenvoice", "isopenwebnotif", "friendslist", "joingroups"])),
            methods: Ge({}, Object(O["c"])(["changemodalId", "exnogroupmodal", "exvoice", "exnotif", "fillfriendslist", "filljoingroups", "selectSession", "unshiftchatlist"]), {
                checkfriend: function() {
                    var t = this;
                    return new Promise((function(e) {
                        t.friendslist.length ? e(t.friendslist) : a["a"].getbilateral().then((function(n) {
                            t.fillfriendslist(n.friends),
                            e(n.friends)
                        }
                        ))
                    }
                    ))
                },
                checkgroups: function() {
                    var t = this;
                    return new Promise((function(e) {
                        t.joingroups.length ? e(t.joingroups) : a["a"].joingroups().then((function(n) {
                            var r = n.join_groups.map((function(t) {
                                return {
                                    id: t.id,
                                    avatar: Object(u["b"])(t.round_avatar_s),
                                    system_name: t.system_name,
                                    name: t.name
                                }
                            }
                            ));
                            t.filljoingroups(r),
                            e(r)
                        }
                        ))
                    }
                    ))
                },
                changevoicestate: function() {
                    this.exvoice(!this.isopenvoice),
                    window.localStorage && window.localStorage.setItem("isopenvoice", this.isopenvoice)
                },
                changenoticestate: function() {
                    this.exnotif(!this.isopenwebnotif),
                    window.localStorage.setItem("isopenwebnotif", this.isopenwebnotif)
                },
                startgroups: function(t) {
                    T["a"].$emit("choose-user", {
                        id: "modalCreateChat",
                        vm: this,
                        title: "新建群聊",
                        confirmBtn: "确定",
                        cancelBtn: "取消",
                        searchText: "查找联系人",
                        chosenText: "已选择联系人",
                        searchType: 2,
                        listType: 2,
                        withGroup: !1,
                        withUser: !0,
                        defaultSelects: t,
                        defaultList: [],
                        onconfirm: function(t, e) {
                            this.createnewchat(t),
                            e.close(!0)
                        },
                        oncancle: function(t) {
                            t.close(!0)
                        }
                    }),
                    this.checkfriend().then((function(t) {
                        T["a"].$emit("refresh-choose-user", {
                            id: "modalCreateChat",
                            defaultList: d["a"].backsolvemembers(t)
                        })
                    }
                    ))
                },
                createnewchat: function(t) {
                    var e = this;
                    if (t.length > 1) {
                        var n = t.map((function(t) {
                            return t.id
                        }
                        )).join(",")
                          , r = {
                            members: n
                        };
                        a["a"].creategroup(r).then((function(t) {
                            if (t.error)
                                e.$toast(t.error || "群组创建失败，请重试");
                            else {
                                var n, r = (n = {
                                    affi_type: "",
                                    fid: "",
                                    created_at: (new Date).getTime(),
                                    id: t.id,
                                    mid: "",
                                    is_block_all_public: !1,
                                    is_blocked: !1,
                                    profile_image_url: t.avatar,
                                    avatar_large: t.avatar,
                                    remindSetting: 2,
                                    round_profile_image_url: t.round_avatar,
                                    round_avatar_large: t.round_avatar,
                                    sender_id: l["f"].basicinfo.id,
                                    sender_screen_name: l["f"].basicinfo.name,
                                    sub_type: 101,
                                    type: 2,
                                    message_type: 333
                                },
                                Object(o["a"])(n, "sub_type", ""),
                                Object(o["a"])(n, "unread_count", 0),
                                n);
                                if (t.succ_uids) {
                                    var i = [];
                                    t.succ_uids.forEach((function(t) {
                                        e.friendslist.forEach((function(e) {
                                            e.items.forEach((function(e) {
                                                e.uid == t && i.push(e.name)
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    )),
                                    i.push(l["f"].basicinfo.name);
                                    var s = i.join("、");
                                    r.name = s.length > 16 ? s.slice(0, 16) + "..." : s
                                } else
                                    r.name = "群聊";
                                e.unshiftchatlist(r),
                                e.selectSession(t.id)
                            }
                        }
                        ))
                    } else
                        1 == t.length && this.unshiftuser(t[0])
                },
                unshiftuser: function(t) {
                    var e = this
                      , n = t.id
                      , r = this.$store.state.chatlist.findIndex((function(t) {
                        return t.id == n
                    }
                    ));
                    r >= 0 ? (this.$store.commit("updatechatlist", {
                        i: r
                    }),
                    this.$store.commit("selectSession", n)) : (r = this.$store.state.topuser.findIndex((function(t) {
                        return t.id == n
                    }
                    )),
                    r >= 0 ? this.$store.commit("selectSession", n) : this.getpernewuser(n, (function(t) {
                        t && (t.is_top_user = !1,
                        e.$store.commit("unshiftchatlist", t),
                        e.$store.commit("selectSession", n))
                    }
                    )))
                },
                choosegroups: function() {
                    T["a"].$emit("choose-user", {
                        id: "modalCreateGroup",
                        vm: this,
                        single_choose: 1,
                        title: "选择群聊",
                        confirmBtn: "确定",
                        searchText: "搜索群聊",
                        searchType: 2,
                        listType: 1,
                        withGroup: !0,
                        withUser: !1,
                        defaultList: [],
                        onconfirm: function(t, e) {
                            t[0] && this.selectUser(t[0].id),
                            e.close(!0)
                        },
                        oncancle: function(t) {
                            t.close(!0)
                        }
                    }),
                    this.checkgroups().then((function(t) {
                        T["a"].$emit("refresh-choose-user", {
                            id: "modalCreateGroup",
                            defaultList: t
                        })
                    }
                    ))
                },
                toggleset: function(t) {
                    this.modalId == t ? this.changemodalId(-1) : this.changemodalId(t)
                },
                logout: function() {
                    l["e"].setData("aborting", !0),
                    setTimeout((function() {
                        window.location.href = "https://weibo.com/logout.php?backurl=" + encodeURIComponent("https://api.weibo.com/chat/")
                    }
                    ))
                },
                jump: function() {
                    window.open("//account.weibo.com/set/photo")
                },
                jump2: function() {
                    window.open("//account.weibo.com/set/index")
                }
            }),
            created: function() {
                var t = this;
                T["a"].$on("setNewGroup", (function(e) {
                    t.startgroups(e)
                }
                ))
            }
        }
          , Be = Ue
          , We = (n("cbca"),
        Object(_["a"])(Be, Re, Ne, !1, null, "0b44aa2c", null))
          , ze = We.exports
          , Ve = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "chatlist",
                staticClass: "chatlist absolute",
                on: {
                    contextmenu: function(e) {
                        return e.preventDefault(),
                        t.showcontextmenu(e)
                    }
                }
            }, [n("happy-scroll", {
                attrs: {
                    "scroll-top": t.scrollTopvalue,
                    color: "rgba(82, 85, 91, .8)",
                    size: "6",
                    "min-length-v": .05,
                    resize: "",
                    "hide-horizontal": ""
                },
                on: {
                    "vertical-end": t.scrollToBottom,
                    "update:scrollTop": function(e) {
                        t.scrollTopvalue = e
                    },
                    "update:scroll-top": function(e) {
                        t.scrollTopvalue = e
                    },
                    scroll: t.scroll
                }
            }, [n("div", {
                staticClass: "chatlist-box"
            }, [t.showdata ? n("ul", {
                staticClass: "contactslist hvhd"
            }, t._l(t.showdata, (function(e, r) {
                return e.name ? n("li", {
                    key: r,
                    staticClass: "sessionlist relative flex align-items_c",
                    class: {
                        active: t.selectId == e.id
                    },
                    attrs: {
                        "data-datas": r
                    },
                    on: {
                        click: function(n) {
                            return t.selectchat(e)
                        }
                    }
                }, [t.selectId == e.id ? n("div", {
                    staticClass: "line"
                }) : t._e(), n("div", {
                    staticClass: "list-left"
                }, [n("div", {
                    staticClass: "avator-box"
                }, [2 != e.type ? n("img", {
                    staticClass: "avatar radius-c",
                    attrs: {
                        src: e.avatar_large || e.profile_image_url
                    }
                }) : n("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: e.round_avatar_large || e.avatar_large
                    }
                }), n("weibo-verified", {
                    attrs: {
                        user: e
                    }
                })], 1)]), n("div", {
                    staticClass: "list-right relative flex-1"
                }, [n("div", {
                    staticClass: "content-top flex justify-c_space-b"
                }, [n("p", {
                    staticClass: "name fff nowrap font14"
                }, [n("span", {
                    staticClass: "one-line usrn"
                }, [t._v(t._s(t.getname(e)))]), n("span", {
                    staticClass: "hidden"
                }, [t._v(t._s(e.id))]), e.is_top_user ? n("span", {
                    staticClass: "toptag time font12"
                }, [t._v("置顶")]) : t._e()]), n("span", {
                    staticClass: "time font10"
                }, [t._v(t._s(t._f("formatDate")(e.created_at)))])]), n("div", {
                    staticClass: "content-bottom flex justify-c_space-b"
                }, [3 == e.type ? n("p", {
                    staticClass: "lastmsg nowrap font14 one-line"
                }, [t._v("\n                " + t._s(e.sender_screen_name) + " 发来了新消息\n              ")]) : 2 == e.type && e.text ? n("p", {
                    staticClass: "lastmsg nowrap font14 one-line"
                }, [e.fileToken ? n("i", {
                    staticClass: "uploadicon",
                    class: {
                        errorsend: e.errorsend
                    }
                }) : t._e(), n("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 == e.remindSetting && e.unread_count,
                        expression: "i.remindSetting == 1 && i.unread_count"
                    }]
                }, [t._v("[" + t._s(t._f("noreadnum")(e.unread_count)) + "条]")]), e.bulletin && t.bulletinrecords && !t.bulletinrecords.includes(+e.bulletin.bulletin_id) ? n("span", {
                    staticClass: "atme"
                }, [t._v("[有新公告]")]) : t._e(), e.isAtMe && !e.fileToken ? n("span", {
                    staticClass: "atme"
                }, [t._v("[有人@我]")]) : t._e(), e.bulletin && t.bulletinrecords && !t.bulletinrecords.includes(+e.bulletin.bulletin_id) ? [t._v("\n                  " + t._s(e.bulletin.content) + "\n                ")] : [t.checktype(e) || e.fileToken ? t._e() : n("span", [t._v(t._s(t.findremark(e.sender_id, e.sender_screen_name)) + ":")]), t._v("\n                  " + t._s(t.filtertext(e.text, e.fid, e)) + "\n                ")]], 2) : n("p", {
                    staticClass: "lastmsg nowrap font14 one-line"
                }, [e.fileToken ? n("i", {
                    staticClass: "uploadicon",
                    class: {
                        errorsend: e.errorsend
                    }
                }) : t._e(), t._v("\n                " + t._s(t.filtertext(e.text, e.fid, e)) + "\n              ")]), 1 == e.type && e.is_blocked ? n("div", {
                    staticClass: "nosound flex"
                }, [n("i", {
                    staticClass: "icon icon-msg pc-n"
                })]) : 2 == e.type && 1 == e.remindSetting || 3 == e.type && 2 == t.pubremindtype || t.showunfollow && 2 == t.pubremindtype ? n("div", {
                    staticClass: "nosound flex"
                }, [2 == e.type ? n("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.unread_count,
                        expression: "!i.unread_count"
                    }],
                    staticClass: "icon icon-msg qc-n"
                }) : t._e(), n("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.unread_count,
                        expression: "i.unread_count"
                    }],
                    staticClass: "dot"
                })]) : e.unread_count ? n("span", {
                    staticClass: "num fff font12"
                }, [t._v(t._s(t._f("noreadnum")(e.unread_count)))]) : t._e()])])]) : t._e()
            }
            )), 0) : t._e()])]), t.menuobj && 3 != t.menuobj.type && 1 == t.modalId ? n("div", {
                staticClass: "menulist absolute",
                style: t.styleObj,
                on: {
                    contextmenu: [function(t) {
                        t.stopPropagation()
                    }
                    , function(t) {
                        t.preventDefault()
                    }
                    ]
                }
            }, [n("li", {
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.showCurrentInfo()
                    }
                }
            }, [t._v(t._s(1 === t.menuobj.type ? "查看资料" : "查看群资料"))]), 1 === t.menuobj.type ? n("li", {
                on: {
                    click: function(e) {
                        return t.jumpprofile()
                    }
                }
            }, [t._v("进入个人主页")]) : t._e(), 1 === t.menuobj.type ? n("li", {
                on: {
                    click: function(e) {
                        return t.shield()
                    }
                }
            }, [t._v("\n      " + t._s(!1 === t.menuobj.value.is_blocked ? "屏蔽此人消息" : "解除屏蔽此人消息") + "\n    ")]) : t._e(), t.menuobj.type && 1 != t.menuobj.type ? n("li", {
                on: {
                    click: function(e) {
                        return t.setgroupnotice(t.menuobj.value.id)
                    }
                }
            }, [t._v("\n      " + t._s(1 == t.menuobj.value.remindSetting ? "打开群消息通知" : "群消息免打扰") + "\n    ")]) : t._e(), n("li", {
                on: {
                    click: function(e) {
                        return t.deleteChat(t.menuobj.value)
                    }
                }
            }, [t._v("删除对话")])]) : t._e()], 1)
        }
          , Ye = [];
        function Fe(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function He(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Fe(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Fe(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Je = {
            mixins: [nt["a"], A["a"], Ae],
            data: function() {
                return {
                    openchatright: -1,
                    styleObj: {
                        top: 0,
                        left: 0
                    },
                    scrollTopvalue: 0,
                    memorytop: 0,
                    menuobj: null,
                    isswitch: !1,
                    showUserCard: !1,
                    canShowUserCard: !1,
                    bubbleListHeight: 39,
                    personallistDetail: 4,
                    grouplistDetail: 3
                }
            },
            filters: {
                noreadnum: function(t) {
                    return t > 999 ? "999+" : t
                },
                formatDate: function(t) {
                    if (t) {
                        var e = new Date(t).getTime();
                        if (!e) {
                            var n = t.split(" ")
                              , r = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(n[1])
                              , i = n[5] + "/" + r + "/" + n[2] + " " + n[3];
                            e = new Date(i)
                        }
                        var s = (new Date).getTime()
                          , o = new Date(J()(s).format("YYYY/MM/DD") + " 00:00:00").getTime()
                          , a = o - 864e5
                          , c = new Date(J()(s).format("YYYY") + "/01/01 00:00:00").getTime();
                        return e >= o ? J()(e).format("HH:mm") : e < o && e >= a ? "昨天" : e >= c ? J()(e).format("MM-DD") : J()(e).format("YYYY-MM")
                    }
                }
            },
            mounted: function() {
                var t = this;
                T["a"].$on("inittopval", (function(e) {
                    t.scrollTopvalue = t.$store.state.memorytop,
                    t.$store.commit("changememorytop", 0)
                }
                )),
                T["a"].$on("newUserCard", (function() {
                    t.showUserCard = !0
                }
                ));
                var e = parseInt(this.$route.query.source_from);
                1 !== e && 3 !== e || this.selectchat({
                    type: 3
                })
            },
            computed: He({}, Object(O["d"])(["selectId", "mycardinfo", "bulletinrecords", "usercardinfo", "chatrecords", "followuser", "showunfollow", "unfollowlist", "modalId", "allLoaded", "chatlistcount", "chatlistcursor", "remarklist", "unfollowlistcount", "allunfollowLoaded", "prescrollTop", "pubremindtype"]), {
                getname: function(t) {
                    var e = this;
                    return function(t) {
                        return 1 != t.type ? t.name || t.sender_screen_name || "用户".concat(t.id) : e.findremark(t.id, t.name)
                    }
                },
                showdata: function() {
                    var t = [];
                    if (this.showunfollow)
                        t = this.unfollowlist;
                    else {
                        t = this.$store.state.topuser.concat();
                        var e = [];
                        this.$store.state.chatlist.forEach((function(n) {
                            e.includes(n.id) || (e.push(n.id),
                            t.push(n))
                        }
                        ))
                    }
                    return t
                },
                checktype: function(t) {
                    return function(t) {
                        return !!t.message_type && (321 != t.message_type || 321 == t.message_type && t.sub_type > 0)
                    }
                }
            }),
            methods: He({}, Object(O["c"])(["selectSession", "emptyunread", "emptypubunread", "changemodalId", "exchatlistcount", "removechatlist", "updatechatlist", "exchatlistcursor", "exquerygroup", "exunfollowlistcount", "exprescrollTop", "removeunfollowlist", "emptyquerygroup"]), {
                showCurrentInfo: function() {
                    this.changemodalId(-1);
                    var t = this.$store.state.selectId === this.menuobj.value.id;
                    this.selectchat(this.menuobj.value),
                    2 === this.menuobj.type ? this.$parent.$refs.cardcontaininfo.curView = "modal2" : t ? this.showUserInfo(0, 3) : this.canShowUserCard = !0
                },
                shield: function() {
                    this.setshield(this.menuobj.value.id, this.menuobj.value.is_blocked)
                },
                jumpprofile: function() {
                    window.open("//www.weibo.com/u/" + this.menuobj.value.id)
                },
                scrollToBottom: function() {
                    var t = this
                      , e = this;
                    e.allLoaded && !e.showunfollow || e.allunfollowLoaded && e.showunfollow || document.querySelector(".vue-loading") || (e.$loading("contactslist"),
                    e.showunfollow ? (e.$store.commit("exchatlistcursor", e.$store.state.unfollowlistcount),
                    e.initunfollowlist((function() {
                        e.$loading.remove("contactslist")
                    }
                    ))) : (e.chatlistcount <= 500 ? e.$store.commit("exchatlistcount", e.chatlistcount + 30) : e.exchatlistcursor(e.chatlistcount),
                    e.initchatlist((function(n, r) {
                        n.params.count > r.contacts.length && t.$store.commit("exallLoaded", !0),
                        e.$loading.remove("contactslist")
                    }
                    ))))
                },
                selectchat: function(t) {
                    var e = this;
                    if (this.selectId != t.id) {
                        if (this.$nextTick((function() {
                            t.bulletin && t.bulletin.bulletin_id && d["a"].hasReadBulletin(t.bulletin.bulletin_id)
                        }
                        )),
                        3 == t.type)
                            return this.selectSession(-1),
                            this.$store.commit("changememorytop", this.scrollTopvalue),
                            this.$store.commit("emptyunfollowlist"),
                            void this.initunfollowlist((function() {
                                e.scrollTopvalue = 0
                            }
                            ));
                        if (this.selectSession(t.id),
                        this.showunfollow) {
                            var n = this.finditemIndex(this.unfollowlist);
                            if (n >= 0 && 2 != this.$store.state.pubremindtype && this.$store.state.unfollowlist[n].unread_count) {
                                var r = this.$store.state.unfollowlist[n].unread_count;
                                l["s"].reduce(r),
                                l["r"].reduce(r)
                            } else if (n < 0 || !this.unfollowlist[n].unread_count)
                                return;
                            this.emptypubunread(n)
                        } else {
                            var i = "chatlist"
                              , s = this.finditemIndex(this.$store.state[i]);
                            if (s >= 0 && this.$store.state[i][s].unread_count && 1 != this.$store.state[i][s].remindSetting ? l["r"].reduce(this.$store.state[i][s].unread_count) : (i = "topuser",
                            s = this.finditemIndex(this.$store.state[i]),
                            s >= 0 && this.$store.state[i][s].unread_count && 1 != this.$store.state[i][s].remindSetting && l["r"].reduce(this.$store.state[i][s].unread_count)),
                            s < 0 || !this.$store.state[i][s].unread_count)
                                return
                        }
                        var o = {
                            cmd: "synchroniz",
                            type: "dmread",
                            uid: t.id
                        };
                        if (l["h"].cometconn.publish(o),
                        1 == t.type) {
                            var c = {
                                is_include_group: 0,
                                type: 2,
                                uid: t.id
                            };
                            this.showunfollow ? a["a"].clearUnfollowUnreadMsg(c) : a["a"].clearunreadMsg(c)
                        } else if (2 == t.type) {
                            var u = {
                                id: t.id
                            };
                            a["a"].clearunread(u)
                        }
                    }
                },
                filtertext: function(t, e, n) {
                    if (n.urlDtails)
                        return n.urlDtails;
                    if (n.text && -1 !== n.text.search(/http:\/\//) && n.url_objects && n.url_objects[0])
                        return n.url_objects[0].object && n.url_objects[0].object.object && n.url_objects[0].object.object.display_name ? "[链接]" + n.url_objects[0].object.object.display_name : n.url_objects[0].user && n.url_objects[0].user.screen_name ? "[链接]" + n.url_objects[0].user.screen_name : n.text;
                    if (!e || 1 !== n.dm_type && 6 !== n.dm_type)
                        return t;
                    var r = /分享/;
                    if (r.test(t))
                        return t = t.replace(r, ""),
                        "[" + t + "]";
                    var i = new RegExp(".(jpeg|gif|png|jpg)$","i");
                    return t && t.search(i) >= 0 ? "[图片]" : 0 == t.indexOf("分享内容") || 0 == t.indexOf("分享图片") ? "[图片]" : "分享视频" === t ? "[视频]" : -1 == t.indexOf("[图片]") && -1 == t.indexOf("[视频]") && -1 == t.indexOf("[文件]") ? "[文件]" + t : void 0
                },
                showcontextmenu: function(t) {
                    this.changemodalId(-1);
                    var e = t.clientX
                      , n = t.clientY
                      , r = this.$refs.chatlist.getBoundingClientRect()
                      , i = r.left
                      , s = r.top;
                    function o(t, e) {
                        do {
                            if (e(t))
                                return t
                        } while (t = t && t.parentNode)
                    }
                    var a = o(t.target, (function(t) {
                        return t.getAttribute("data-datas")
                    }
                    ))
                      , c = a && a.getAttribute("data-datas");
                    if (-1 != c) {
                        this.menuobj = {
                            value: this.showdata[c],
                            type: this.showdata[c].type
                        };
                        var u = this.bubbleListHeight * (1 === this.menuobj.type ? this.personallistDetail : this.grouplistDetail)
                          , l = window.innerHeight;
                        this.styleObj.top = n + u > l ? n - s - u + "px" : this.styleObj.top = n - s + "px",
                        this.styleObj.left = e - i + "px",
                        this.openchatright = c,
                        this.changemodalId(1)
                    }
                },
                deleteChat: function(t) {
                    if (this.changemodalId(-1),
                    [1, 2].includes(t.type)) {
                        if (t.id == this.selectId && this.selectSession(-1),
                        this.showunfollow) {
                            var e = this.finditemIndex(this.unfollowlist, t.id);
                            if (e >= 0) {
                                var n = this.$store.state.unfollowlist[e];
                                n.unread_count && 2 != this.$store.state.pubremindtype && (l["s"].reduce(n.unread_count),
                                l["r"].reduce(n.unread_count)),
                                this.removeunfollowlist(e)
                            }
                            2 == t.type && a["a"].destroypubgroupmsg({
                                chat_ids: t.id
                            }),
                            1 == t.type && a["a"].destroypubmsg({
                                uid: t.id
                            })
                        } else {
                            var r = this.finditemIndex(this.$store.state.chatlist, t.id);
                            if (r >= 0) {
                                var i = this.$store.state.chatlist[r];
                                i.unread_count && 1 != i.remindSetting && l["r"].reduce(i.unread_count),
                                this.$store.commit("removechatlist", r)
                            } else if (r = this.finditemIndex(this.$store.state.topuser, t.id),
                            r >= 0) {
                                var s = this.$store.state.topuser[r];
                                s.unread_count && 1 != s.remindSetting && l["r"].reduce(s.unread_count),
                                this.$store.commit("removetopuser", r)
                            }
                            2 == t.type && a["a"].destroygroupmsg({
                                id: t.id,
                                keep_entrance: 0
                            }),
                            1 == t.type && a["a"].destroymsg({
                                uid: t.id
                            })
                        }
                        this.isgroup(t.id) && l["k"].updateexitGroups({
                            status: 1,
                            gid: t.id
                        })
                    }
                },
                isShowBulletin: function(t) {
                    if (!t)
                        return !1
                },
                scroll: function(t) {
                    1 == this.modalId && this.changemodalId(-1)
                }
            }),
            components: {
                weiboVerified: ht
            },
            watch: {
                showUserCard: function(t) {
                    t && this.canShowUserCard && (this.showUserInfo(0, 3),
                    this.canShowUserCard = !1),
                    this.showUserCard = !1
                },
                selectId: function(t, e) {
                    if (T["a"].$emit("saveHistory", {
                        val: t,
                        oldVal: e
                    }),
                    this.$store.commit("emptychatrecords"),
                    this.$store.commit("emptylargeimg"),
                    this.selectId >= 0) {
                        if (this.isswitch = !0,
                        this.$parent.$refs.msginfo.isfirst = !0,
                        this.emptyquerygroup(),
                        this.showunfollow)
                            var n = this.findItem(this.unfollowlist)
                              , r = this.finditemIndex(this.unfollowlist);
                        else
                            n = this.findItem(this.$store.state.topuser),
                            n ? (r = this.finditemIndex(this.$store.state.topuser),
                            this.$store.commit("emptytopunread", r)) : (n = this.findItem(this.$store.state.chatlist),
                            r = this.finditemIndex(this.$store.state.chatlist),
                            this.emptyunread(r));
                        this.prescrollTop || this.exprescrollTop(!0);
                        var i = ["getpersondetail", "getgroupdetail"];
                        this[i[+n.type - 1]](n, r),
                        T["a"].$emit("focusinput")
                    }
                }
            }
        }
          , Ze = Je
          , Ke = (n("f8c7"),
        Object(_["a"])(Ze, Ve, Ye, !1, null, "64ac5638", null))
          , Qe = Ke.exports
          , Xe = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "searchlist absolute",
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [n("happy-scroll", {
                attrs: {
                    color: "rgba(82, 85, 91, .8)",
                    size: "6",
                    "min-length-v": .2,
                    resize: "",
                    "hide-horizontal": ""
                },
                on: {
                    "vertical-end": t.scrollToBottom
                }
            }, [n("div", {
                staticClass: "searchlist-box"
            }, [t.searchobj ? n("ul", {
                staticClass: "contactslist hvhd"
            }, [n("span", {
                staticClass: "title font14"
            }, [t._v("好友")]), t._l(t.searchobj.contactlist, (function(e, r) {
                return t.searchobj.contactlist ? n("li", {
                    key: r,
                    staticClass: "sessionlist flex align-items_c",
                    on: {
                        click: function(n) {
                            return t.selectuser(e, "contact")
                        }
                    }
                }, [n("div", {
                    staticClass: "list-left"
                }, [n("div", {
                    staticClass: "avator-box"
                }, [n("img", {
                    staticClass: "avatar radius-c",
                    attrs: {
                        src: t.convertProtocal(e.avatar_large)
                    }
                }), n("weibo-verified", {
                    attrs: {
                        user: e
                    }
                })], 1)]), n("div", {
                    staticClass: "list-right relative flex-1"
                }, [n("div", {
                    staticClass: "content-top flex justify-c_space-b"
                }, [n("p", {
                    staticClass: "name fff nowrap font14 one-line"
                }, [t._v(t._s(e.remark || e.nickname))]), n("span", {
                    staticClass: "hidden"
                }, [t._v(t._s(e.uid))])])])]) : t._e()
            }
            )), n("span", {
                staticClass: "title font14"
            }, [t._v("群")]), t._l(t.searchobj.grouplist, (function(e, r) {
                return t.searchobj.grouplist ? n("li", {
                    key: -(r + 1),
                    staticClass: "sessionlist flex align-items_c",
                    on: {
                        click: function(n) {
                            return t.selectuser(e, "group")
                        }
                    }
                }, [n("div", {
                    staticClass: "line"
                }), n("div", {
                    staticClass: "list-left"
                }, [n("div", {
                    staticClass: "avator-box"
                }, [n("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.convertProtocal(e.round_avatar_large || e.avatar_large)
                    }
                })])]), n("div", {
                    staticClass: "list-right relative flex-1"
                }, [n("div", {
                    staticClass: "content-top flex justify-c_space-b"
                }, [n("p", {
                    staticClass: "name fff nowrap font14 one-line"
                }, [t._v(t._s(e.groupname))]), n("span", {
                    staticClass: "hidden"
                }, [t._v(t._s(e.gid))])])])]) : t._e()
            }
            ))], 2) : t._e()])])], 1)
        }
          , tn = [];
        function en(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function nn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? en(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : en(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var rn = {
            mixins: [nt["a"], A["a"]],
            components: {
                weiboVerified: ht
            },
            mounted: function() {},
            methods: nn({}, Object(O["c"])(["exsearchstate", "exsearch"]), {
                convertProtocal: function(t) {
                    return Object(u["b"])(t)
                },
                selectuser: function(t, e) {
                    var n = this
                      , r = "contact" == e ? t.uid : t.gid;
                    this.exsearch(""),
                    this.exsearchstate(0),
                    this.$nextTick((function() {
                        n.selectUser(r)
                    }
                    ))
                },
                scrollToBottom: function() {}
            }),
            computed: nn({}, Object(O["d"])(["searchobj"]))
        }
          , sn = rn
          , on = (n("ca5e"),
        Object(_["a"])(sn, Xe, tn, !1, null, "64d3fd6d", null))
          , an = on.exports
          , cn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.curView ? n("div", [t._l(t.curView.filter((function(t) {
                return t
            }
            )), (function(e, r) {
                return n("div", {
                    key: r
                }, [n("div", {
                    ref: "contain",
                    refInFor: !0,
                    staticClass: "modalcontain fixed-c flex justify-c_c align-items_c",
                    style: t.indexStyle(e),
                    on: {
                        click: function(e) {
                            "videoModal" === t.curView && t.close(!0)
                        }
                    }
                }, [n("div", {
                    ref: "box",
                    refInFor: !0,
                    staticClass: "relative jump",
                    class: {
                        "modal-box": "videoModal" !== t.curView[t.curView.length - 1]
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation()
                        },
                        animationend: t.animationend
                    }
                }, [n("i", {
                    staticClass: "close absolute icon W_ficon",
                    on: {
                        click: function(e) {
                            return t.close(!0)
                        }
                    }
                }, [t._v("")]), n(e, {
                    ref: "modal",
                    refInFor: !0,
                    tag: "component",
                    attrs: {
                        src: t.src,
                        selectSettings: t.selectSettings
                    }
                }), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "videoModal" === t.curView[t.curView.length - 1],
                        expression: "curView[curView.length - 1] === 'videoModal'"
                    }],
                    staticClass: "viewer-button viewer-close video-close",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.close(!0)
                        }
                    }
                })], 1)])])
            }
            )), n("div", {
                ref: "mask",
                staticClass: "modal-mask fixed-c fadein",
                class: [{
                    "float-mask": t.floatMask
                }]
            })], 2) : t._e()
        }
          , un = []
          , ln = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "modal2",
                on: {
                    click: function(e) {
                        return t.closemodal()
                    }
                }
            }, [1 === t.st ? n("div", {
                staticClass: "modal2"
            }, [n("p", {
                staticClass: "title tc font14"
            }, [t._v("群信息")]), t.querygroup ? n("div", {
                staticClass: "scroll-container"
            }, [n("happy-scroll", {
                attrs: {
                    color: "rgba(82, 85, 91, .8)",
                    size: "5",
                    "min-length-v": .05,
                    resize: "",
                    "hide-horizontal": ""
                }
            }, [n("div", {
                staticStyle: {
                    "margin-right": "15px"
                }
            }, [n("div", {
                staticClass: "group-name-box qmc container"
            }, [n("h4", {
                staticClass: "title"
            }, [t._v("\n              群名称\n              "), t.checkidentify && !t.showinput_name ? n("i", {
                staticClass: "bj-icon hvhd",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.switchinput("name")
                    }
                }
            }, [n("hover-item", {
                attrs: {
                    name: "bianji-group-info"
                }
            })], 1) : t._e(), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.showwarn_name && t.showinput_name,
                    expression: "!showwarn_name && showinput_name"
                }],
                staticClass: "alert count-tips"
            }, [t._v("\n                " + t._s(t._stringBitLength(t.curname)) + "\n              ")]), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showwarn_name && t.showinput_name,
                    expression: "showwarn_name && showinput_name"
                }],
                staticClass: "alert"
            }, [t._v("\n                不能超过15字\n              ")])]), t.querygroup && !t.showinput_name ? n("p", {
                staticClass: "groupname"
            }, [t._v("\n              " + t._s(t.curname) + "\n            ")]) : t._e(), t.querygroup && t.checkidentify && t.showinput_name ? n("input", {
                directives: [{
                    name: "focus",
                    rawName: "v-focus"
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.curname,
                    expression: "curname"
                }],
                ref: "curname",
                staticClass: "renameinput",
                attrs: {
                    type: "text",
                    placeholder: "在此输入群名称"
                },
                domProps: {
                    value: t.curname
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    },
                    blur: function(e) {
                        return t.changegroupname()
                    },
                    input: function(e) {
                        e.target.composing || (t.curname = e.target.value)
                    }
                }
            }) : t._e(), t.querygroup && t.showwarn && t.checkidentify && t.showinput_name ? n("span", {
                staticClass: "inputTips font12"
            }, [t._v("不能超过15字")]) : t._e()]), t.checkidentify ? n("div", {
                staticClass: "group-name-box container"
            }, [n("h4", {
                staticClass: "title"
            }, [t._v("\n              群公告\n              "), n("i", {
                staticClass: "bj-icon hvhd",
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.st = 4
                    }
                }
            }, [n("hover-item", {
                attrs: {
                    name: "bianji-group-info"
                }
            })], 1)]), t.bulletin ? n("p", {
                staticClass: "groupname"
            }, [t._v("\n              " + t._s(t.bulletin) + "\n              "), t.bulletin_scheme ? n("a", {
                attrs: {
                    href: t.bulletin_scheme,
                    target: "_blank"
                }
            }, [t._v("查看链接")]) : t._e()]) : n("p", {
                staticClass: "groupname"
            }, [t._v("\n              暂无群公告\n            ")])]) : t._e(), n("div", {
                staticClass: "container group-member-box"
            }, [n("h4", {
                staticClass: "title group-member-title"
            }, [n("span", [t._v("\n                群成员(" + t._s(t.querygroup ? t.querygroup.member_count : 0) + "/" + t._s(t.querygroup ? t.querygroup.max_member : 0) + ")\n              ")]), t.count_show > 10 && !t.$store.state.joinGroup ? n("span", {
                staticClass: "read-all hvhd",
                on: {
                    click: function(e) {
                        t.st = 2
                    }
                }
            }, [t._v("\n                查看全部\n              ")]) : t._e()]), t.querygroup ? n("div", {
                staticClass: "scroll-box",
                staticStyle: {
                    overflow: "hidden"
                }
            }, [n("ul", {
                staticClass: "members-list members flex flex_wrap tc"
            }, [t.$store.state.joinGroup ? t._e() : n("li", {
                staticClass: "member-box"
            }, [n("div", {
                staticClass: "action add hvhd",
                on: {
                    click: function(e) {
                        return t.adduser(!1)
                    }
                }
            }, [n("hover-item", {
                attrs: {
                    name: "add-user"
                }
            })], 1), n("p", {
                staticClass: "name W_txt1 font12"
            }, [t._v("添加成员")])]), t.checkidentify ? n("li", {
                staticClass: "member-box"
            }, [n("div", {
                staticClass: "action remove hvhd",
                on: {
                    click: function(e) {
                        return t.showRemoveToast(!1)
                    }
                }
            }, [n("hover-item", {
                attrs: {
                    name: "remove-user"
                }
            })], 1), n("p", {
                staticClass: "name W_txt1 font12"
            }, [t._v("移除成员")])]) : t._e(), t._l(t.resolveuserlistsort().slice(0, 10), (function(e, r) {
                return n("li", {
                    key: r,
                    staticClass: "member-box relative hvhd",
                    class: [{
                        "owner-card": 1 === t.checkId(e.uid)
                    }, {
                        "admins-card": 2 === t.checkId(e.uid)
                    }],
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            t.showusercard(n, e)
                        },
                        contextmenu: function(n) {
                            return n.stopPropagation(),
                            n.preventDefault(),
                            t.showmenu(n, e)
                        }
                    }
                }, [n("img", {
                    staticClass: "avator",
                    attrs: {
                        src: t.checkavatar(e.profile_image_url),
                        alt: ""
                    }
                }), n("p", {
                    staticClass: "name W_txt1 font12 one-line nowrap"
                }, [t._v(t._s(t.getmembername(e)))]), n("span", {
                    staticClass: "hidden"
                }, [t._v(t._s(e.uid))])])
            }
            ))], 2)]) : t._e()]), n("div", {
                staticClass: "group-name-box container none-bottom-line"
            }, [n("h4", {
                staticClass: "title"
            }, [t._v("\n              群简介\n              "), t.checkidentify && !t.showinput_jj ? n("i", {
                staticClass: "bj-icon hvhd",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.switchinput("jj")
                    }
                }
            }, [n("hover-item", {
                attrs: {
                    name: "bianji-group-info"
                }
            })], 1) : t._e(), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.showwarn_jj && t.showinput_jj,
                    expression: "!showwarn_jj && showinput_jj"
                }],
                staticClass: "alert count-tips"
            }, [t._v("\n                " + t._s(t._stringBitLength(t.summary)) + "\n              ")]), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showwarn_jj && t.showinput_jj,
                    expression: "showwarn_jj && showinput_jj"
                }],
                staticClass: "alert"
            }, [t._v("\n                不能超过140字\n              ")])]), t.querygroup && !t.showinput_jj ? n("p", {
                staticClass: "groupname"
            }, [t.encodeHTML(t.summary) ? n("span", {
                domProps: {
                    innerHTML: t._s(t.encodeHTML(t.summary))
                }
            }) : n("span", [t._v("暂无群简介")])]) : t._e(), t.querygroup && t.checkidentify && t.showinput_jj ? n("textarea", {
                directives: [{
                    name: "focus",
                    rawName: "v-focus"
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.summary,
                    expression: "summary"
                }],
                ref: "summary",
                staticClass: "summaryinput",
                attrs: {
                    type: "text",
                    placeholder: "在此输入群简介"
                },
                domProps: {
                    value: t.summary
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    },
                    blur: function(e) {
                        return t.changegroupjj()
                    },
                    input: function(e) {
                        e.target.composing || (t.summary = e.target.value)
                    }
                }
            }) : t._e(), t.querygroup && t.showwarn && t.checkidentify && t.showinput_jj ? n("span", {
                staticClass: "inputTips font12"
            }, [t._v("不能超过15字")]) : t._e()])])])], 1) : t._e(), t.querygroup ? n("div", {
                staticClass: "confirmbtn-box tc"
            }, [t.$store.state.joinGroup && !t.maxMemberLimit ? n("button", {
                staticClass: "confirmbtn",
                on: {
                    click: function(e) {
                        return t.addGroup()
                    }
                }
            }, [t._v("\n        加入该群\n      ")]) : t.$store.state.joinGroup && t.maxMemberLimit ? n("button", {
                staticClass: "confirmbtn maxlimit"
            }, [t._v("\n        群已满\n      ")]) : n("button", {
                staticClass: "confirmbtn",
                on: {
                    click: function(e) {
                        return t.close(1)
                    }
                }
            }, [t._v("退出该群")])]) : t._e()]) : 2 === t.st ? n("list", {
                attrs: {
                    checkidentify: t.checkidentify
                }
            }) : 3 === t.st ? n("remove-user", {
                attrs: {
                    checkidentify: t.checkidentify,
                    yc: !0
                }
            }) : 4 === t.st ? n("bulletin") : t._e(), 6 == t.modalId ? n("div", {
                staticClass: "p-fixed userCard",
                style: t.styleObj
            }, [n("usercard", {
                attrs: {
                    userinfo: t.curusercardmsg
                }
            })], 1) : t._e(), 9 == t.modalId && t.curmenumsg ? n("div", {
                staticClass: "menulist p-fixed",
                style: t.styleObj
            }, [t.curmenumsg.msg_status ? n("li", {
                on: {
                    click: function(e) {
                        return t.tochat()
                    }
                }
            }, [t._v("发起聊天")]) : t._e(), n("li", {
                on: {
                    click: function(e) {
                        return t.jumpprofile()
                    }
                }
            }, [t._v("进入个人主页")]), t.canremove(t.curmenumsg.uid, !0) && t.checkidentify ? n("li", {
                on: {
                    click: function(e) {
                        return t.removeuser(t.curmenumsg)
                    }
                }
            }, [t._v("\n      移除该成员\n    ")]) : t._e()]) : t._e()], 1)
        }
          , dn = []
          , fn = (n("55dd"),
        {
            methods: {
                kdcheck: function(t, e) {
                    if (this[e].length >= 15) {
                        var n = new RegExp("[~!@#$%-&*()_+{}'\\,./:\"[]|<>=;?^]{1}")
                          , r = t.key.match(n);
                        r && (this.showwarn = !0,
                        t.preventDefault()),
                        (t.keyCode >= 65 && t.keyCode <= 90 || t.keyCode >= 48 && t.keyCode <= 57) && (t.metaKey || t.shiftKey || t.ctrlKey || t.altKey || (this.showwarn = !0,
                        t.preventDefault()))
                    }
                },
                inputcheck: function(t, e) {
                    this[e].length <= 15 ? this.showwarn = !1 : (this.showwarn = !0,
                    this[e] = this[e].slice(0, 15))
                },
                _stringBitLength: function(t) {
                    if (!t)
                        return 0;
                    var e = t.match(/[^\x00-\xff]/g);
                    return Math.ceil((t.length + (e ? e.length : 0)) / 2)
                },
                sliceBit: function(t, e) {
                    for (var n = "", r = 0, i = 0, s = t.length, o = /\uD83C|\uD83D/, a = 0; a < t.length; a++) {
                        var c = t[a];
                        if (/[^\x00-\xff]/.test(c) ? r += 2 : r += 1,
                        s - i < 3 && o.test(t[i]) || r > 2 * e) {
                            o.test(n[n.length - 1]) && (n = n.replace(/[\uD83C|\uD83D]$/, ""));
                            break
                        }
                        n += c,
                        i++
                    }
                    return n
                },
                isLink: function(t) {
                    var e = /^(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/g;
                    return e.test(t)
                },
                getCursorRect: function(t) {
                    var e = !!document.all
                      , n = 0
                      , r = 0;
                    if (t) {
                        if (e) {
                            var i = document.selection.createRange();
                            if (i.parentElement() == t) {
                                var s = document.body.createTextRange();
                                for (s.moveToElementText(t),
                                n = 0; s.compareEndPoints("StartToStart", i) < 0; n++)
                                    s.moveStart("character", 1);
                                for (var o = 0; o <= n; o++)
                                    "\n" == t.value.charAt(o) && n++;
                                for (s.moveToElementText(t),
                                r = 0; s.compareEndPoints("StartToEnd", i) < 0; r++)
                                    s.moveStart("character", 1);
                                for (o = 0; o <= r; o++)
                                    "\n" == t.value.charAt(o) && r++
                            }
                        } else
                            n = t.selectionStart,
                            r = t.selectionEnd;
                        return {
                            start: n,
                            end: r
                        }
                    }
                },
                setCursorRect: function(t, e) {
                    var n = t.start
                      , r = t.end;
                    if (e)
                        if (isNaN(n) || isNaN(r))
                            console.log("位置输入错误");
                        else {
                            var i = !!document.all;
                            if (i) {
                                for (var s = e.createTextRange(), o = c, a = u, c = 0, u = 0, l = e.value, d = 0; d < l.length && d < o; d++) {
                                    var f = l.charAt(d);
                                    "\n" != f && c++
                                }
                                for (d = l.length - 1; d >= a && d >= 0; d--) {
                                    f = l.charAt(d);
                                    "\n" != f && u++
                                }
                                s.moveStart("character", c),
                                s.moveEnd("character", -u),
                                s.select(),
                                e.focus()
                            } else
                                e.selectionStart = n,
                                e.selectionEnd = r,
                                e.focus(),
                                this.$emit("cursorRect", {
                                    start: e.selectionStart,
                                    end: e.selectionEnd
                                })
                        }
                }
            }
        })
          , hn = fn
          , mn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.curuserinfo ? n("div", {
                staticClass: "usercard",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.switchinput(1)
                    }
                }
            }, [n("div", {
                staticClass: "title"
            }, [n("div", {
                staticClass: "avator-box",
                on: {
                    click: function(e) {
                        return t.jump(t.curuserinfo.profile_url)
                    }
                }
            }, [n("img", {
                staticClass: "avator",
                attrs: {
                    src: t.curuserinfo.avatar_large,
                    alt: ""
                }
            }), n("weibo-verified", {
                attrs: {
                    user: t.curuserinfo
                }
            })], 1), n("p", {
                staticClass: "name font14 one-line",
                on: {
                    click: function(e) {
                        return t.jump(t.curuserinfo.profile_url)
                    }
                }
            }, [t._v("\n      " + t._s(t.curuserinfo.name) + "\n    ")])]), n("div", {
                staticClass: "desc font12"
            }, [t.hasRemark && !t.setremark ? n("p", {
                staticClass: "edit-remark",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.switchinput()
                    }
                }
            }, [t.chatlistremark ? n("span", {
                staticClass: "remark-content"
            }, [t._v(t._s(t.chatlistremark)), n("i", {
                staticClass: "icon W_ficon font12"
            }, [t._v("")])]) : n("span", [t._v("设置备注"), n("i", {
                staticClass: "icon W_ficon font12"
            }, [t._v("")])])]) : t._e(), n("div", {
                staticClass: "relative"
            }, [t.showwarn && t.canedit() ? n("span", {
                staticClass: "absolute tips"
            }, [t._v("不能超过15字")]) : t._e(), t.canedit() ? n("input", {
                directives: [{
                    name: "focus",
                    rawName: "v-focus"
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.chatlistremark,
                    expression: "chatlistremark"
                }],
                staticClass: "remarkinput",
                attrs: {
                    type: "text",
                    placeholder: "在此输入备注名称"
                },
                domProps: {
                    value: t.chatlistremark
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    },
                    keydown: function(e) {
                        return t.kdcheck(e, "chatlistremark")
                    },
                    keyup: function(e) {
                        return t.inputcheck(e, "chatlistremark")
                    },
                    blur: function(e) {
                        return t.changeremark()
                    },
                    input: function(e) {
                        e.target.composing || (t.chatlistremark = e.target.value)
                    }
                }
            }) : t._e()]), t.curuserinfo.description ? n("p", {
                staticClass: "sign more-line more-line-3"
            }, [t._v("\n      " + t._s(t.curuserinfo.description) + "\n    ")]) : t._e(), -1 == t.curuserinfo.avatar_large.indexOf("image/png;base64") ? n("button", {
                staticClass: "chatbtn font12",
                on: {
                    click: t.tochat
                }
            }, [t._v("\n      聊天\n    ")]) : n("p", {
                staticClass: "font12 warning"
            }, [t._v("抱歉，你访问的用户不存在哦")])])]) : t._e()
        }
          , pn = [];
        function gn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function vn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? gn(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gn(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var bn = {
            props: ["userinfo", "k"],
            mixins: [nt["a"], A["a"], hn],
            data: function() {
                return {
                    chatlistremark: "",
                    setremark: !1,
                    curuserinfo: null,
                    hasRemark: !1,
                    showwarn: !1
                }
            },
            components: {
                weiboVerified: ht
            },
            computed: vn({}, Object(O["d"])(["selectId", "usercardinfo", "followuser"])),
            mounted: function() {
                if (this.selectId == l["f"].basicinfo.id)
                    return this.curuserinfo = l["f"].basicinfo;
                var t = this.selectId + "";
                this.selectId && t.length < 13 ? this.chatlistremark = this.usercardinfo ? this.usercardinfo.remark : "" : this.chatlistremark = this.userinfo.remark,
                this.curuserinfo = this.userinfo,
                this.checkIsExist()
            },
            methods: vn({}, Object(O["c"])(["updateremark", "changemodalId", "updateusercardremark", "fillremarklist"]), {
                switchinput: function(t) {
                    this.setremark = !t
                },
                jump: function(t) {
                    window.open(t)
                },
                changeremark: function(t) {
                    var e = this
                      , n = this.chatlistremark
                      , r = this.selectId + "";
                    this.selectId && r.length < 13 && this.updateusercardremark(n);
                    var i = {
                        uid: this.userinfo.id,
                        remark: n
                    };
                    a["a"].updateremark(i).then((function(t) {
                        a["a"].remarklist().then((function(t) {
                            t.remarks && (e.fillremarklist(t.remarks),
                            T["a"].$emit("getname"),
                            T["a"].$emit("frashremark"))
                        }
                        ))
                    }
                    ))
                },
                checkIsExist: function() {
                    var t = this;
                    this.isfollow(this.userinfo.id, (function(e) {
                        t.curuserinfo.msg_status && e ? t.hasRemark = !0 : t.hasRemark = !1
                    }
                    ))
                },
                canedit: function() {
                    return !!(this.curuserinfo.msg_status && this.setremark && this.hasRemark)
                },
                tochat: function() {
                    this.selectUser(this.userinfo.id),
                    this.changemodalId(-1),
                    Object(u["n"])(this.$parent, "$parent.$parent.$refs.cardcontaininfo") && (this.$parent.$parent.$parent.$refs.cardcontaininfo.curView = "")
                }
            })
        }
          , yn = bn
          , _n = (n("9b86"),
        Object(_["a"])(yn, mn, pn, !1, null, null, null))
          , wn = _n.exports
          , xn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "modal2 modal-list ofh"
            }, [n("p", {
                staticClass: "title tc font14"
            }, [t._v("\n    群成员(" + t._s(t.querygroup ? t.querygroup.member_count : 0) + "/" + t._s(t.querygroup ? t.querygroup.max_member : 0) + ")\n  ")]), n("div", {
                staticClass: "search-box flex align-items_c"
            }, [n("i", {
                staticClass: "icon W_ficon font14 icon-search"
            }, [t._v("")]), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.keywords,
                    expression: "keywords"
                }],
                staticClass: "search",
                attrs: {
                    placeholder: "查找群成员"
                },
                domProps: {
                    value: t.keywords
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.keywords = e.target.value)
                    }
                }
            }), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.keywords,
                    expression: "keywords"
                }],
                staticClass: "searchInput-delete",
                on: {
                    click: function(e) {
                        t.keywords = "",
                        t.$refs.input.focus()
                    }
                }
            })]), n("ul", {
                staticClass: "userlist"
            }, [n("happy-scroll", {
                attrs: {
                    color: "rgba(82, 85, 91, .8)",
                    size: "5",
                    "min-length-v": .05,
                    right: "54",
                    resize: "",
                    "hide-horizontal": ""
                }
            }, [n("div", {
                staticStyle: {
                    "margin-right": "54px"
                }
            }, [t.keywords ? t._e() : n("li", {
                staticClass: "users hvhd icon-user",
                on: {
                    click: function(e) {
                        return t.$parent.adduser(!0)
                    }
                }
            }, [n("div", {
                staticClass: "action add"
            }), n("span", {
                staticClass: "font12 c333 name one-line"
            }, [t._v("添加成员")])]), t.checkidentify && !t.keywords ? n("li", {
                staticClass: "users hvhd icon-user",
                on: {
                    click: function(e) {
                        return t.$parent.showRemoveToast(!0)
                    }
                }
            }, [n("div", {
                staticClass: "action remove"
            }), n("span", {
                staticClass: "font12 c333 name one-line"
            }, [t._v("移除成员")])]) : t._e(), t._l(t.members_solve, (function(e, r) {
                return n("li", {
                    key: r
                }, [n("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.keywords,
                        expression: "!keywords"
                    }],
                    staticClass: "character"
                }, [t._v(t._s(e.character))]), t._l(e.item, (function(e, r) {
                    return n("user", {
                        key: r,
                        attrs: {
                            showYc: t.showYc,
                            checkidentify: t.checkidentify,
                            user: e
                        }
                    })
                }
                ))], 2)
            }
            ))], 2)])], 1), t.querygroup ? n("div", {
                staticClass: "confirmbtn-box tc"
            }, [n("button", {
                staticClass: "confirmbtn",
                on: {
                    click: function(e) {
                        t.$parent.st = 1
                    }
                }
            }, [t._v("返回")])]) : t._e()])
        }
          , jn = []
          , kn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("li", {
                staticClass: "users hvhd flex align-items_c",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.$parent.$parent.$parent.showusercard(e, t.user)
                    },
                    contextmenu: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        t.$parent.$parent.$parent.showmenu(e, t.user)
                    }
                }
            }, [n("div", [n("img", {
                staticClass: "avatar",
                attrs: {
                    src: t.user.profile_image_url
                }
            }), n("span", {
                staticClass: "font12 c333 name one-line"
            }, [t._v(t._s(t.user.screen_name))])]), t.showYc && t.checkidentify && t.canremove(t.user.uid) ? n("span", {
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.removeuser(t.user)
                    }
                }
            }, [t._v("移除")]) : t._e()])
        }
          , On = [];
        function Cn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function In(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Cn(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Cn(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var $n = {
            mixins: [A["a"]],
            name: "user",
            data: function() {
                return {}
            },
            methods: {
                removeuser: function(t) {
                    var e = this
                      , r = {
                        id: this.selectId,
                        uids: t.uid
                    };
                    this.$modal({
                        icon: {
                            text: n("6008")
                        },
                        text: "移除成员：".concat(t.screen_name),
                        hidemask: !0,
                        okObj: {
                            text: "移除",
                            okFun: function() {
                                a["a"].kickuser(r).then((function(t) {
                                    t.error ? e.$toast(t.error) : e.getnewgroupinfo()
                                }
                                ))
                            }
                        },
                        cancelObj: {
                            text: "取消"
                        },
                        width: 340,
                        closebtn: !0
                    })
                },
                canremove: function(t) {
                    if (t != l["f"].basicinfo.id && this.querygroup.owner != t)
                        return !0
                }
            },
            created: function() {},
            props: ["user", "checkidentify", "showYc"],
            components: {},
            computed: In({}, Object(O["d"])(["modalId", "selectId", "querygroup", "remarklist"])),
            watch: {}
        }
          , Tn = $n
          , An = Object(_["a"])(Tn, kn, On, !1, null, null, null)
          , Pn = An.exports;
        function Sn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Dn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Sn(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var qn = {
            name: "modal-list",
            data: function() {
                return {
                    keywords: "",
                    showYc: !1
                }
            },
            created: function() {
                this.showYc = this.yc
            },
            computed: Dn({}, Object(O["d"])(["modalId", "selectId", "querygroup", "remarklist"]), {
                members_show: function() {
                    var t = this;
                    return this.keywords && this.querygroup.member_infos ? this.querygroup.member_infos.filter((function(e) {
                        function n(t, e) {
                            return e.indexOf(t.toString()) > -1
                        }
                        return n(t.keywords, e.jp) || n(t.keywords, e.qp) || n(t.keywords, e.screen_name)
                    }
                    )) : this.querygroup.member_infos || []
                },
                members_solve: function() {
                    return d["a"].solvemembers(this.members_show)
                }
            }),
            components: {
                user: Pn
            },
            props: ["checkidentify", "yc"],
            watch: {}
        }
          , Mn = qn
          , En = (n("742c"),
        Object(_["a"])(Mn, xn, jn, !1, null, null, null))
          , Rn = En.exports
          , Nn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "modal2 modal-bulletin"
            }, [n("p", {
                staticClass: "title tc font14"
            }, [t._v("\n    群公告\n  ")]), n("div", {
                staticClass: "group-name-box container"
            }, [n("h4", {
                staticClass: "title"
            }, [t._v("\n      添加群公告\n      "), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.showwarn,
                    expression: "!showwarn"
                }],
                staticClass: "alert count-tips"
            }, [t._v(t._s(t._stringBitLength(t.bulletin)))]), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showwarn,
                    expression: "showwarn"
                }],
                staticClass: "alert"
            }, [t._v("不能超过40字")])]), n("div", {
                staticClass: "edit-container"
            }, [n("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.bulletin,
                    expression: "bulletin"
                }],
                ref: "bulletin",
                staticClass: "edit-area",
                attrs: {
                    placeholder: "对大家说点什么吧"
                },
                domProps: {
                    value: t.bulletin
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.bulletin = e.target.value)
                    }
                }
            })])]), n("div", {
                staticClass: "group-name-box container"
            }, [n("h4", {
                staticClass: "title"
            }, [t._v("\n      添加群公告跳转链接（选填）\n      "), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showwarn_link,
                    expression: "showwarn_link"
                }],
                staticClass: "alert"
            }, [t._v("您输入的链接无效")])]), n("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.scheme,
                    expression: "scheme"
                }],
                staticClass: "edit-area edit-scheme",
                class: {
                    "warn-shining": t.showwarn_link
                },
                attrs: {
                    placeholder: "例如：http://weibo.com/fansgroups"
                },
                domProps: {
                    value: t.scheme
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.scheme = e.target.value)
                    }
                }
            })]), n("div", {
                staticClass: "confirmbtn-box tc"
            }, [t.loading ? n("button", {
                staticClass: "confirmbtn disabled"
            }, [t._v("发布中...")]) : n("button", {
                staticClass: "confirmbtn",
                on: {
                    click: t.setB
                }
            }, [t._v("发布公告")]), n("button", {
                staticClass: "confirmbtn calcelbtn",
                on: {
                    click: function(e) {
                        return t.back()
                    }
                }
            }, [t._v("返回")])])])
        }
          , Ln = [];
        function Gn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Un(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Gn(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Gn(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Bn = {
            mixins: [hn],
            name: "bulletin",
            data: function() {
                return {
                    bulletin: "",
                    scheme: "",
                    loading: !1,
                    showwarntimer: null,
                    showwarntimer_link: null,
                    showwarn: !1,
                    showwarn_link: !1
                }
            },
            methods: {
                back: function() {
                    this.$parent.st = 1
                },
                setB: function() {
                    var t = this;
                    this.loading = !0;
                    var e = (this.bulletin || "").trim()
                      , n = (this.scheme || "").trim();
                    if (e)
                        return n && !this.isLink(n) ? (this.linkerror(),
                        void (this.loading = !1)) : void a["a"].setbulletin({
                            id: this.selectId,
                            content: e,
                            scheme: n
                        }).then((function(e) {
                            if (e.error)
                                t.$toast(e.error);
                            else {
                                t.$parent.bulletin = t.bulletin,
                                t.$parent.scheme = t.scheme,
                                d["a"].hasReadBulletin(e.bulletin_id),
                                t.back();
                                var n = Object.assign(t.querygroup, {
                                    bulletin: {
                                        content: t.bulletin,
                                        scheme: (t.scheme || "").trim()
                                    }
                                });
                                t.$store.commit("exquerygroup", n),
                                d["a"].setContactList(t.selectId, {
                                    bulletin: {
                                        content: t.bulletin,
                                        scheme: (t.scheme || "").trim(),
                                        bulletin_id: e.bulletin_id
                                    }
                                })
                            }
                            t.loading = !1
                        }
                        ));
                    a["a"].deletebulletin({
                        id: this.selectId
                    }).then((function(e) {
                        if (t.loading = !1,
                        e.error)
                            t.$toast(e.error);
                        else {
                            t.$parent.bulletin = "",
                            t.$parent.scheme = "",
                            t.back();
                            var n = Object.assign(t.querygroup, {
                                bulletin: void 0
                            });
                            t.$store.commit("exquerygroup", n),
                            d["a"].setContactList(t.selectId, {
                                bulletin: void 0
                            })
                        }
                    }
                    ))
                },
                showalerttext: function() {
                    var t = this;
                    clearTimeout(this.showwarntimer),
                    this.showwarn = !0,
                    this.showwarntimer = setTimeout((function() {
                        t.showwarn = !1
                    }
                    ), 2500)
                },
                linkerror: function() {
                    var t = this;
                    clearTimeout(this.showwarntimer_link),
                    this.showwarn_link = !0,
                    this.showwarntimer_link = setTimeout((function() {
                        t.showwarn_link = !1
                    }
                    ), 2500)
                }
            },
            created: function() {
                this.bulletin = this.$parent.bulletin,
                this.scheme = this.$parent.bulletin_scheme
            },
            components: {},
            computed: Un({}, Object(O["d"])(["modalId", "selectId", "querygroup", "remarklist"])),
            watch: {
                bulletin: function(t) {
                    var e = this;
                    if (this._stringBitLength(t) > 40) {
                        var n = this.getCursorRect(this.$refs.bulletin);
                        this.showalerttext(),
                        this.bulletin = this.sliceBit(t, 40),
                        this.$nextTick((function() {
                            e.setCursorRect(n, e.$refs.bulletin)
                        }
                        ))
                    }
                }
            }
        }
          , Wn = Bn
          , zn = (n("e4b3"),
        n("c7ee"),
        Object(_["a"])(Wn, Nn, Ln, !1, null, "30d8bc32", null))
          , Vn = zn.exports
          , Yn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "modal1 members"
            }, [n("p", {
                staticClass: "title tc font16"
            }, [t._v("移除成员")]), n("div", {
                staticClass: "modal1-left ofh"
            }, [n("div", {
                staticClass: "search-box flex align-items_c"
            }, [n("i", {
                staticClass: "icon W_ficon font14 icon-search"
            }, [t._v("")]), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.keywords,
                    expression: "keywords"
                }],
                ref: "input",
                staticClass: "search",
                attrs: {
                    placeholder: "搜索联系人"
                },
                domProps: {
                    value: t.keywords
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.keywords = e.target.value)
                    }
                }
            }), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.keywords,
                    expression: "keywords"
                }],
                staticClass: "searchInput-delete",
                on: {
                    click: function(e) {
                        t.keywords = "",
                        t.$refs.input.focus()
                    }
                }
            })]), n("ul", {
                staticClass: "userlist"
            }, [n("happy-scroll", {
                attrs: {
                    color: "rgba(82, 85, 91, .8)",
                    size: "5",
                    "min-length-v": .05,
                    right: "25",
                    resize: "",
                    "hide-horizontal": ""
                }
            }, [n("div", {
                staticStyle: {
                    "margin-right": "37px"
                }
            }, [n("div", t._l(t.members_solve, (function(e, r) {
                return n("div", {
                    key: r
                }, [n("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.keywords,
                        expression: "!keywords"
                    }],
                    staticClass: "character font12"
                }, [t._v(t._s(e.character))]), t._l(e.item, (function(e, r) {
                    return n("li", {
                        key: r,
                        staticClass: "users hvhd flex align-items_c",
                        class: {
                            "last-active": t.lastcheckuid === e.uid
                        },
                        on: {
                            click: function(n) {
                                return t.changeCheck(e.uid, e.avatar, e.name, e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "avator-box"
                    }, [n("img", {
                        staticClass: "avatar",
                        attrs: {
                            src: t.convertProtocal(e.profile_image_url),
                            alt: ""
                        }
                    }), n("weibo-verified", {
                        attrs: {
                            user: e
                        }
                    })], 1), n("span", {
                        staticClass: "font12 c333 name one-line"
                    }, [t._v(t._s(e.screen_name))]), n("div", {
                        staticClass: "selected",
                        class: {
                            active: t.checkeduids.includes(+e.uid)
                        }
                    }), n("span", {
                        staticClass: "hidden"
                    }, [t._v(t._s(e.uid))])])
                }
                ))], 2)
            }
            )), 0)])])], 1)]), n("div", {
                staticClass: "modal1-right ofh"
            }, [n("div", {
                staticClass: "right-title"
            }, [t._v("\n      已选择\n    ")]), n("div", {
                staticClass: "userlist"
            }, [n("happy-scroll", {
                attrs: {
                    color: "rgba(82, 85, 91, .8)",
                    size: "5",
                    "min-length-v": .05,
                    resize: "",
                    "hide-horizontal": "",
                    right: "25"
                }
            }, [n("div", {
                staticStyle: {
                    "margin-right": "37px"
                }
            }, t._l(t.checkedlist, (function(e, r) {
                return n("div", {
                    key: r,
                    staticClass: "avatar-contain"
                }, [n("div", {
                    staticClass: "users hvhd flex align-items_c"
                }, [n("div", {
                    staticClass: "avator-box"
                }, [n("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.convertProtocal(e.profile_image_url)
                    }
                }), n("weibo-verified", {
                    attrs: {
                        user: e
                    }
                })], 1), n("span", {
                    staticClass: "font12 c333 name one-line"
                }, [t._v(t._s(e.screen_name))]), n("div", {
                    staticClass: "selected",
                    on: {
                        click: function(n) {
                            return t.removeuser(e.uid)
                        }
                    }
                }, [n("hover-item", {
                    attrs: {
                        name: "yichu"
                    }
                })], 1)])])
            }
            )), 0)])], 1), n("div", {
                staticClass: "confirmbtn-box tc"
            }, [n("button", {
                staticClass: "confirmbtn",
                class: {
                    disabled: !t.checkeduids.length
                },
                on: {
                    click: function(e) {
                        return t.close()
                    }
                }
            }, [t._v("\n        确定移除\n      ")]), n("button", {
                staticClass: "confirmbtn calcelbtn",
                on: {
                    click: function(e) {
                        return t.close(!0)
                    }
                }
            }, [t._v("返回")])])])])
        }
          , Fn = [];
        function Hn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Jn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Hn(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Hn(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Zn = {
            mixins: [A["a"]],
            name: "app",
            data: function() {
                return {
                    keywords: "",
                    checkeduids: [],
                    lastcheckuid: -100
                }
            },
            methods: {
                convertProtocal: function(t) {
                    return Object(u["b"])(t)
                },
                ischecked: function() {},
                changeCheck: function(t) {
                    this.lastcheckuid = t,
                    this.checkeduids.includes(+t) ? this.checkeduids = this.checkeduids.filter((function(e) {
                        return +e !== +t
                    }
                    )) : this.checkeduids.push(+t)
                },
                removeuser: function(t) {
                    this.checkeduids = this.checkeduids.filter((function(e) {
                        return +e !== +t
                    }
                    ))
                },
                canremove: function(t) {
                    return this.$parent.canremove(t)
                },
                close: function(t) {
                    var e = this;
                    if (t)
                        T["a"].$emit("closeModal2");
                    else if (this.checkeduids.length) {
                        var n = {
                            id: this.selectId,
                            uids: this.checkeduids.join(",")
                        };
                        a["a"].kickuser(n).then((function(t) {
                            t.error ? e.$toast(t.error) : (T["a"].$emit("closeModal2"),
                            e.getnewgroupinfo())
                        }
                        ))
                    }
                }
            },
            created: function() {},
            mounted: function() {
                this.$refs.input && this.$refs.input.focus()
            },
            computed: Jn({}, Object(O["d"])(["modalId", "selectId", "querygroup", "remarklist"]), {
                members_show: function() {
                    var t = this;
                    return this.keywords && this.querygroup.member_infos ? this.querygroup.member_infos.filter((function(e) {
                        function n(t, e) {
                            return e.indexOf(t.toString()) > -1
                        }
                        return n(t.keywords, e.jp) || n(t.keywords, e.qp) || n(t.keywords, e.screen_name)
                    }
                    )) : this.querygroup.member_infos || []
                },
                members_solve: function() {
                    var t = this;
                    return d["a"].solvemembers(this.members_show.filter((function(e) {
                        return t.canremove(+e.uid)
                    }
                    )))
                },
                checkedlist: function() {
                    var t = this;
                    return this.querygroup.member_infos.filter((function(e) {
                        return t.checkeduids.includes(+e.uid)
                    }
                    ))
                }
            }),
            components: {
                weiboVerified: ht,
                hoverItem: yt
            },
            watch: {}
        }
          , Kn = Zn
          , Qn = (n("2c67"),
        Object(_["a"])(Kn, Yn, Fn, !1, null, "0b963b72", null))
          , Xn = Qn.exports;
        function tr(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function er(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? tr(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tr(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var nr = {
            mixins: [nt["a"], A["a"], hn],
            data: function() {
                return {
                    showicon: !1,
                    curmenumsg: null,
                    showinput_name: !1,
                    showinput_jj: !1,
                    curname: "",
                    summary: "",
                    bulletin: "",
                    bulletin_scheme: "",
                    st: 1,
                    showwarn: !1,
                    showwarn_name: !1,
                    startwatch_name: !1,
                    showwarn_name_timer: null,
                    showwarn_jj: !1,
                    startwatch_jj: !1,
                    showwarn_jj_timer: null,
                    curusercardmsg: null,
                    groupAffiliatedPerson: null,
                    styleObj: {
                        left: 0,
                        top: 0,
                        transform: "none"
                    },
                    maxMemberLimit: !1
                }
            },
            created: function() {
                var t = this;
                T["a"].$on("changeModal2st", (function(e) {
                    t.st = e
                }
                )),
                T["a"].$on("join", (function() {
                    t.addGroup()
                }
                )),
                this.info && (this.st = 2)
            },
            mounted: function() {
                this.initData()
            },
            components: {
                usercard: wn,
                list: Rn,
                bulletin: Vn,
                hoverItem: yt,
                removeUser: Xn
            },
            computed: er({}, Object(O["d"])(["friendslist", "modalId", "selectId", "remarklist"]), {
                querygroup: function() {
                    return this.$store.state.joinGroup || this.$store.state.querygroup || {
                        admins: [],
                        bulletin: {},
                        member_infos: []
                    }
                },
                getownerinfo: function() {
                    var t = this
                      , e = {};
                    if (e = this.querygroup.member_infos.find((function(e) {
                        return e.uid == t.querygroup.owner
                    }
                    )),
                    e) {
                        var n = this.remarklist.find((function(e) {
                            return e.uid == t.querygroup.owner
                        }
                        ));
                        return n && (e.screen_name = n.remark),
                        e
                    }
                    return e = {
                        profile_image_url: Se.a,
                        screen_name: this.querygroup.owner,
                        remark: "",
                        owner: this.querygroup.owner
                    },
                    e
                },
                getownermsg: function() {
                    var t = this
                      , e = {};
                    if (e = this.querygroup.member_infos.find((function(e) {
                        return e.uid == t.querygroup.owner
                    }
                    )),
                    e) {
                        Object(u["p"])(e.profile_image_url, e.uid) || Se.a,
                        e.uid,
                        e.screen_name || e.uid,
                        e.uid;
                        var n = this.remarklist.find((function(t) {
                            return t.uid == e.uid
                        }
                        ));
                        e.remark = n ? n.remark : ""
                    } else
                        e = {
                            remark: "",
                            profile_image_url: Se.a,
                            screen_name: this.querygroup.owner
                        };
                    return e
                },
                checkidentify: function() {
                    return !(!this.isowner && !this.isAdmin)
                },
                isowner: function() {
                    return this.querygroup.owner == l["f"].basicinfo.id
                },
                isAdmin: function() {
                    var t = this.querygroup.admins.findIndex((function(t) {
                        return t == l["f"].basicinfo.id
                    }
                    ));
                    return t >= 0
                },
                count_show: function() {
                    return this.querygroup.member_infos.length + 1 + +this.checkidentify
                }
            }),
            methods: er({}, Object(O["c"])(["removechatlist", "selectSession", "exnogroupmodal", "changemodalId", "fillfriendslist"]), {
                checkfriend: function() {
                    var t = this;
                    return new Promise((function(e) {
                        t.friendslist.length ? e(t.friendslist) : a["a"].getbilateral().then((function(n) {
                            t.fillfriendslist(n.friends),
                            e(n.friends)
                        }
                        ))
                    }
                    ))
                },
                checkavatar: function(t) {
                    return t ? Object(u["b"])(t) : Se.a
                },
                canremove: function(t) {
                    return +t !== +l["f"].basicinfo.id && (1 === this.checkId(l["f"].basicinfo.id) ? +l["f"].basicinfo.id !== +t : 2 === this.checkId(l["f"].basicinfo.id) && 3 === this.checkId(t))
                },
                atsomeone: function() {
                    var t = Object(u["n"])(this.$parent, "$parent.$refs.textinfo.cursor.start") || 0
                      , e = this.$parent.$parent.$refs.textinfo.inputcontent
                      , n = e.slice(0, t)
                      , r = e.slice(t)
                      , i = n + "@" + this.curmenumsg.screen_name + " " + r;
                    this.$parent.$parent.$refs.textinfo.inputcontent = i,
                    document.querySelector("#webchat-textarea").focus(),
                    this.$parent.curView = "";
                    var s = n + "@" + this.curmenumsg.screen_name + " ";
                    this.$nextTick((function() {
                        T["a"].$emit("cgcursor", {
                            start: s.length,
                            end: s.length
                        })
                    }
                    ))
                },
                tochat: function() {
                    this.selectUser(this.curmenumsg.uid),
                    this.changemodalId(-1),
                    this.$parent.curView = ""
                },
                encodeHTML: function(t) {
                    return Object(u["d"])(t)
                },
                initData: function() {
                    if (this.summary = this.querygroup.summary || "",
                    this.bulletin = this.querygroup.bulletin && this.querygroup.bulletin.content,
                    this.bulletin_scheme = this.querygroup.bulletin && this.querygroup.bulletin.scheme,
                    this.curname = this.querygroup.name || "",
                    this.maxMemberLimit = this.querygroup.max_member <= this.querygroup.member_count,
                    !this.curname) {
                        var t = this.findItem(this.$store.state.chatlist);
                        t ? this.curname = t.name : (t = this.findItem(this.$store.state.topuser),
                        t && (this.curname = t.name))
                    }
                },
                checkId: function(t) {
                    if (this.querygroup.owner == t)
                        return 1;
                    var e = this.querygroup.admins.includes(t);
                    return e ? 2 : 3
                },
                resolveuserlistsort: function() {
                    var t = this;
                    try {
                        var e = Object.assign([], this.querygroup.member_infos);
                        return e.sort((function(e, n) {
                            return t.checkId(e.uid) - t.checkId(n.uid)
                        }
                        )),
                        e
                    } catch (n) {
                        return this.querygroup.member_infos
                    }
                },
                jumpprofile: function() {
                    window.open("//www.weibo.com/u/" + this.curmenumsg.uid)
                },
                getcurmsg: function(t) {
                    var e = this.remarklist.find((function(e) {
                        return e.uid == t.uid
                    }
                    ));
                    return t.remark = e ? e.remark : "",
                    t
                },
                getadmininfo: function(t) {
                    var e = {};
                    e = this.querygroup.member_infos.find((function(e) {
                        return e.uid == t
                    }
                    ));
                    var n = this.remarklist.find((function(e) {
                        return e.uid == t
                    }
                    ));
                    return n && (e.remark = n.remark),
                    e || (e = {
                        remark: "",
                        profile_image_url: Se.a,
                        screen_name: t
                    }),
                    e
                },
                getname: function(t) {
                    var e = this.querygroup.member_infos.find((function(e) {
                        return e.uid == t
                    }
                    ));
                    e || (e = {
                        screen_name: t,
                        remark: "",
                        profile_image_url: Se.a
                    });
                    var n = this.remarklist.find((function(e) {
                        return e.uid == t
                    }
                    ));
                    return n ? n.remark : e.screen_name
                },
                getmembername: function(t) {
                    var e = this.remarklist.find((function(e) {
                        return e.uid == t.uid
                    }
                    ));
                    return e ? e.remark : t.screen_name
                },
                changegroupname: function() {
                    var t = this;
                    this.showinput_name = !1;
                    var e = this.findItem(this.$store.state.chatlist);
                    if (e || (e = this.findItem(this.$store.state.topuser)),
                    this.curname != e.name) {
                        var n = this.curname;
                        n ? a["a"].updategroupmsg({
                            id: this.selectId,
                            name: n
                        }).then((function(e) {
                            e.error && (t.$toast(e.error),
                            t.$store.commit("fillchatrecords", {
                                value: {
                                    cardtype: "card1",
                                    comment: "",
                                    created_at: (new Date).getTime(),
                                    direct: "right",
                                    fids: "",
                                    media_type: 0,
                                    msg_status: 0,
                                    sub_type: "",
                                    text: e.error,
                                    type: 1
                                }
                            }),
                            t.curname = Object(u["n"])(t.findItem(t.$store.state.chatlist), "name"))
                        }
                        )) : this.curname = e.name
                    }
                },
                changegroupjj: function() {
                    var t = this;
                    this.showinput_jj = !1,
                    this.querygroup.summary != this.summary && a["a"].updategroupmsg({
                        id: this.selectId,
                        summary: this.summary
                    }).then((function(e) {
                        if (e.error)
                            t.$toast(e.error),
                            t.summary = t.querygroup.summary;
                        else {
                            var n = Object.assign({}, t.querygroup);
                            n.summary = t.summary,
                            t.$store.commit("exquerygroup", n)
                        }
                    }
                    ))
                },
                handleremove: function() {
                    this.showicon ? this.showicon = !1 : this.showicon = !0
                },
                switchinput: function(t) {
                    this.checkidentify && ("name" === t ? (this.showinput_jj = !1,
                    this.showinput_name = !this.showinput_name,
                    this.startwatch_name = !0) : "jj" === t && (this.showinput_jj = !this.showinput_jj,
                    this.showinput_name = !1,
                    this.startwatch_jj = !0),
                    this.changemodalId(-1))
                },
                showmenu: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    this.$refs.modal2.getBoundingClientRect(),
                                    e.target.getBoundingClientRect(),
                                    this.styleObj = {
                                        left: e.clientX + "px",
                                        top: e.clientY + "px"
                                    },
                                    n.uid == l["f"].basicinfo.id ? n.msg_status = 0 : n.msg_status = 1,
                                    this.curmenumsg = n,
                                    this.changemodalId(9);
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                showusercard: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.$refs.modal2.getBoundingClientRect(),
                                    e.target.getBoundingClientRect(),
                                    this.styleObj = {
                                        left: e.clientX + "px",
                                        top: e.clientY + "px"
                                    },
                                    6 != this.modalId) {
                                        t.next = 7;
                                        break
                                    }
                                    this.changemodalId(-1),
                                    t.next = 9;
                                    break;
                                case 7:
                                    return t.next = 9,
                                    new Promise((function(t) {
                                        r.getuserdetail(n.uid, (function(t) {
                                            if (!t.error) {
                                                var e = {
                                                    avatar_large: Object(u["b"])(Object(u["p"])(t.avatar_large, n.uid)) || Se.a,
                                                    description: t.description,
                                                    name: t.name || n.uid,
                                                    profile_url: "//www.weibo.com/u/" + n.uid,
                                                    id: n.uid,
                                                    msg_status: 1
                                                };
                                                r.curusercardmsg = r.curusercardinfo(e),
                                                r.changemodalId(6)
                                            }
                                        }
                                        ))
                                    }
                                    ));
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                showusermodal: function(t, e) {},
                adduser: function(t) {
                    T["a"].$emit("choose-user", {
                        id: "modalAddUser",
                        vm: this,
                        title: "添加成员",
                        confirmBtn: "确定添加",
                        cancelBtn: "返回",
                        searchText: "查找联系人",
                        chosenText: "已选择联系人",
                        searchType: 2,
                        listType: 2,
                        withGroup: !1,
                        withUser: !0,
                        defaultList: [],
                        onconfirm: function(e) {
                            var n = this
                              , r = e.map((function(t) {
                                return t.id
                            }
                            )).join(",")
                              , i = this.$store.state.selectId
                              , s = {
                                id: i,
                                uids: r
                            };
                            a["a"].joinuser(s).then((function(t) {
                                t.error ? n.$toast(t.error) : t.need_validate_invite_uids ? n.$toast("群主同意后，您才能成功邀请") : n.getnewgroupinfo()
                            }
                            )),
                            this.closeChooseUserModal(t)
                        },
                        oncancle: function() {
                            this.closeChooseUserModal(t)
                        },
                        listener: function() {}
                    }),
                    this.checkfriend().then((function(t) {
                        T["a"].$emit("refresh-choose-user", {
                            id: "modalAddUser",
                            defaultList: d["a"].backsolvemembers(t)
                        })
                    }
                    ))
                },
                removeuser: function(t) {
                    var e = this
                      , r = {
                        id: this.selectId,
                        uids: t.uid
                    };
                    this.$parent.curView.push(""),
                    this.$modal({
                        icon: {
                            text: n("6008")
                        },
                        text: "移除成员：".concat(t.screen_name),
                        hidemask: !0,
                        okObj: {
                            text: "移除",
                            okFun: function() {
                                e.$parent.curView.pop(),
                                a["a"].kickuser(r).then((function(t) {
                                    t.error ? e.$toast(t.error) : e.getnewgroupinfo()
                                }
                                ))
                            }
                        },
                        cancelObj: {
                            text: "取消",
                            cancelFun: function() {
                                e.$parent.curView.pop()
                            }
                        },
                        width: 340,
                        closebtn: !0
                    })
                },
                closemodal: function() {
                    this.showinput_name = !1,
                    this.showinput_jj = !1,
                    this.changemodalId(-1)
                },
                scroll: function(t) {},
                close: function(t) {
                    var e = this;
                    1 === t ? (this.$parent.curView.push(""),
                    this.$modal({
                        icon: {
                            text: n("6008")
                        },
                        text: "退出该群后，将不再接收群消息。",
                        hidemask: !0,
                        okObj: {
                            text: "退出",
                            okFun: function() {
                                var t = e.selectId
                                  , n = {
                                    id: t,
                                    keep_entrance: 0
                                };
                                a["a"].destroygroupmsg(n).then((function(r) {
                                    r.error || a["a"].exitgroup(n).then((function(n) {
                                        if (n.error)
                                            e.$toast("退出群组失败，请重试");
                                        else {
                                            var r = e.finditemIndex(e.$store.state.chatlist, t);
                                            r >= 0 ? (l["k"].updateexitGroups({
                                                status: 1,
                                                gid: t
                                            }),
                                            e.selectSession(-1),
                                            e.removechatlist(r)) : (r = e.finditemIndex(e.$store.state.topuser, t),
                                            r >= 0 && (l["k"].updateexitGroups({
                                                status: 1,
                                                gid: t
                                            }),
                                            e.selectSession(-1),
                                            e.$store.commit("removetopuser", r)))
                                        }
                                        e.$parent.curView = ""
                                    }
                                    ))
                                }
                                ))
                            }
                        },
                        cancelObj: {
                            text: "取消",
                            cancelFun: function() {
                                e.$parent.curView.pop()
                            }
                        },
                        width: 340,
                        closebtn: !0
                    })) : this.$parent.curView = ""
                },
                addGroupWithoutLimit: function() {
                    var t = this;
                    a["a"].joinGroup({
                        id: this.querygroup.id
                    }).then((function(e) {
                        t.$parent.curView = "",
                        e.error ? t.$toast(e.error) : (t.suda("webchat_addgroupwithoutlimit", "webchat_addgroupwithoutlimit"),
                        l["m"].exist ? $t["a"].feedAddGroupWithoutLimit.addCount() : $t["a"].addGroupWithoutLimit.addCount(),
                        t.finishModal("进群成功"),
                        t.$nextTick((function() {
                            t.selectUser(t.querygroup.id)
                        }
                        )))
                    }
                    )).then((function() {
                        t.$store.state.joinGroup && t.$store.commit("exJoinGroup", null)
                    }
                    ))
                },
                addNormalGroup: function() {
                    1 === this.querygroup.validate_type ? this.addGroupWithoutLimit() : 4 !== this.querygroup.validate_type && this.applyJoinGroup()
                },
                addFansGroup: function() {
                    var t = this
                      , e = this.groupAffiliatedPerson.screen_name;
                    this._stringBitLength(e);
                    this._stringBitLength(e) > 5 && (e = this.sliceBit(e, 4) + "..."),
                    this.querygroup.emeccs && this.querygroup.emeccs.includes(l["f"].basicinfo.id) ? this.addGroupWithoutLimit() : 2 === this.querygroup.affi_join_type && 2 !== this.querygroup.affi_friendship[0] ? (this.$parent.curView.push(""),
                    this.$modal({
                        icon: {
                            text: n("6008")
                        },
                        text: '<a href="https://weibo.com/'.concat(this.groupAffiliatedPerson.id, '"  target="_blank" class="W_link3">@').concat(e, "</a>的铁粉，才能申请加入粉丝群"),
                        hidemask: !0,
                        okObj: {
                            text: "如何成为铁粉",
                            okFun: function() {
                                t.$parent.curView.pop(),
                                window.open("//kefu.weibo.com/faqdetail?id=20848")
                            }
                        },
                        cancelObj: {
                            text: "取消",
                            cancelFun: function() {
                                t.$parent.curView.pop()
                            }
                        },
                        width: 400,
                        closebtn: !0
                    })) : 1 === this.querygroup.affi_join_type && 0 === this.querygroup.affi_friendship[0] ? (this.$parent.curView.push(""),
                    this.$modal({
                        icon: {
                            text: n("6008")
                        },
                        text: '申请加入粉丝群，需要关注<a href="http://weibo.com/u/'.concat(this.groupAffiliatedPerson.id, '" target="_blank" class="W_link3">@').concat(e, "</a>"),
                        hidemask: !0,
                        okObj: {
                            text: "关注",
                            okFun: function() {
                                var e = {
                                    gid: t.querygroup.id,
                                    affi: t.groupAffiliatedPerson.id
                                };
                                a["a"].followUser(e).then((function(e) {
                                    e.error ? (t.$toast(e.error),
                                    t.$parent.curView.pop()) : (t.$parent.curView.pop(),
                                    t.finishModal("关注成功"),
                                    1 === t.querygroup.validate_type && t.addGroupWithoutLimit())
                                }
                                ))
                            }
                        },
                        cancelObj: {
                            text: "取消",
                            cancelFun: function() {
                                t.$parent.curView.pop()
                            }
                        },
                        width: 400,
                        closebtn: !0
                    })) : 1 === this.querygroup.validate_type ? this.addGroupWithoutLimit() : 4 !== this.querygroup.validate_type ? this.applyJoinGroup() : a["a"].checkVplusRelationship({
                        params: {
                            vuids: this.querygroup.affiliation[0]
                        }
                    }).then((function(e) {
                        e && e.result && e.result[0] && !0 === e.result[0].result ? t.applyJoinGroup() : window.open("".concat(t.querygroup.pay_scheme))
                    }
                    ))
                },
                applyJoinGroup: function() {
                    l["j"].setGid(this.querygroup.id),
                    this.$parent.curView.push("apply-join-group")
                },
                addGroup: function() {
                    var t = this;
                    a["a"].querygroup({
                        params: {
                            id: this.querygroup.id,
                            query_affi_friendship: 1
                        }
                    }).then((function(e) {
                        e.error ? t.$toast(e.error) : (t.$store.commit("exJoinGroup", e),
                        a["a"].userdetail({
                            params: {
                                uid: t.querygroup.affiliation[0]
                            }
                        }).then((function(e) {
                            t.groupAffiliatedPerson = e,
                            l["f"].basicinfo.id === t.querygroup.affiliation[0] ? t.addGroupWithoutLimit() : t.querygroup.affi_type && void 0 === t.querygroup.affi_type[0] || 0 === t.querygroup.affiliation.length ? t.addNormalGroup() : t.querygroup.affi_type && 1 === t.querygroup.affi_type[0] && t.addFansGroup()
                        }
                        )))
                    }
                    ))
                },
                showRemoveToast: function(t) {
                    var e = this;
                    T["a"].$emit("choose-user", {
                        id: "chooseUserRemove",
                        vm: this,
                        title: "移除成员",
                        confirmBtn: "确定移除",
                        cancelBtn: "返回",
                        searchText: "搜索联系人",
                        chosenText: "已选择",
                        searchType: 1,
                        listType: 2,
                        withGroup: !1,
                        withUser: !0,
                        defaultList: this.querygroup.member_infos.filter((function(t) {
                            return e.canremove(t.uid)
                        }
                        )),
                        onconfirm: function(e) {
                            var n = this
                              , r = e.map((function(t) {
                                return t.id
                            }
                            )).join(",")
                              , i = {
                                id: this.selectId,
                                uids: r
                            };
                            a["a"].kickuser(i).then((function(e) {
                                e.error ? n.$toast(e.error) : (n.getnewgroupinfo(),
                                n.closeChooseUserModal(t))
                            }
                            ))
                        },
                        oncancle: function() {
                            this.closeChooseUserModal(t)
                        }
                    })
                },
                closeChooseUserModal: function(t) {
                    this.$parent.curView = "modal2",
                    t && this.$nextTick((function() {
                        T["a"].$emit("changeModal2st", 2)
                    }
                    ))
                }
            }),
            watch: {
                querygroup: {
                    deep: !0,
                    handler: function() {
                        this.initData()
                    }
                },
                curname: function(t) {
                    var e = this;
                    if (this.startwatch_name && this._stringBitLength(t) > 15) {
                        var n = this.getCursorRect(this.$refs.curname);
                        clearTimeout(this.showwarn_name_timer),
                        this.showwarn_name = !0,
                        this.showwarn_name_timer = setTimeout((function() {
                            e.showwarn_name = !1
                        }
                        ), 2500),
                        this.curname = this.sliceBit(t, 15),
                        this.$nextTick((function() {
                            e.setCursorRect(n, e.$refs.curname)
                        }
                        ))
                    }
                },
                summary: function(t) {
                    var e = this;
                    if (this.startwatch_jj && this._stringBitLength(t) > 140) {
                        var n = this.getCursorRect(this.$refs.summary);
                        clearTimeout(this.showwarn_jj_timer),
                        this.showwarn_jj = !0,
                        this.showwarn_jj_timer = setTimeout((function() {
                            e.showwarn_jj = !1
                        }
                        ), 2500),
                        this.summary = this.sliceBit(t, 140),
                        this.$nextTick((function() {
                            e.setCursorRect(n, e.$refs.summary)
                        }
                        ))
                    }
                }
            },
            props: ["info"]
        }
          , rr = nr
          , ir = (n("1633"),
        Object(_["a"])(rr, ln, dn, !1, null, null, null))
          , sr = ir.exports
          , or = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "modal3"
            }, [n("p", {
                staticClass: "title tc font16"
            }, [t._v("群成员")]), n("div", {
                staticClass: "search-box flex align-items_c"
            }, [n("i", {
                staticClass: "icon W_ficon font14 icon-search"
            }, [t._v("")]), n("input", {
                directives: [{
                    name: "focus",
                    rawName: "v-focus"
                }],
                staticClass: "search",
                attrs: {
                    placeholder: "查找群成员"
                },
                on: {
                    input: function(e) {
                        return t.change(e)
                    }
                }
            })]), n("ul", {
                staticClass: "userlist"
            }, [t.filterlist.length ? n("div", t._l(t.filterlist, (function(e, r) {
                return n("li", {
                    key: r,
                    staticClass: "users hvhd flex align-items_c",
                    on: {
                        "~click": function(n) {
                            return t.close(e)
                        }
                    }
                }, [n("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.convertProtocal(e.profile_image_url),
                        alt: ""
                    }
                }), n("span", {
                    staticClass: "font12 c333 one-line name"
                }, [t._v(t._s(e.remark || e.screen_name))]), n("span", {
                    staticClass: "hidden"
                }, [t._v(t._s(e.id))])])
            }
            )), 0) : t._e()])])
        }
          , ar = [];
        function cr(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ur(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? cr(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : cr(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var lr = {
            mixins: [nt["a"], A["a"]],
            data: function() {
                return {
                    memberlist: [],
                    filterlist: []
                }
            },
            mounted: function() {
                this.filtermember()
            },
            computed: ur({}, Object(O["d"])(["querygroup", "selectId", "remarklist", "nogroupmodal", "friendsearchlist", "searchfriend", "joingroupsearchlist", "searchgroup"])),
            methods: ur({}, Object(O["c"])(["fillfriendslist", "filljoingroups", "exsearchfriend", "exsearchgroup", "fillfriendsearchlist", "filljoingroupsearchlist"]), {
                filtermember: function() {
                    var t = this;
                    if (this.querygroup && this.querygroup.member_infos) {
                        var e = this.querygroup.member_infos
                          , n = [];
                        e.forEach((function(e) {
                            e["id"] = e.uid,
                            n.push(t.curusercardinfo(e))
                        }
                        )),
                        this.memberlist = this.filterlist = n
                    }
                },
                convertProtocal: function(t) {
                    return Object(u["b"])(t)
                },
                change: function(t) {
                    var e = t.target.value;
                    this.filterlist = this.memberlist.filter((function(t) {
                        if (t.remark.indexOf(e) >= 0 || t.screen_name.indexOf(e) >= 0)
                            return !0
                    }
                    ))
                },
                close: function(t) {
                    var e = this.$parent.$parent.start
                      , n = "";
                    if (e >= 0) {
                        var r = this.$parent.$parent.$refs.textinfo.inputcontent;
                        n = r.slice(0, e);
                        var i = r.slice(e + 1)
                          , s = n + t.screen_name + " " + i;
                        this.$parent.$parent.$refs.textinfo.inputcontent = s,
                        document.querySelector("#webchat-textarea").focus()
                    }
                    this.$parent.curView = "";
                    var o = n + t.screen_name + " ";
                    this.$nextTick((function() {
                        T["a"].$emit("cgcursor", {
                            start: o.length,
                            end: o.length
                        })
                    }
                    ))
                }
            })
        }
          , dr = lr
          , fr = (n("fff5"),
        Object(_["a"])(dr, or, ar, !1, null, "3a2900ac", null))
          , hr = fr.exports
          , mr = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "modal4 tc"
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showQr,
                    expression: "showQr"
                }],
                staticClass: "qr",
                attrs: {
                    id: "qrcode"
                }
            }, [n("div", {
                staticClass: "weibo"
            })]), t.showQr ? t._e() : n("div", {
                staticClass: "qr"
            }), n("p", [t._v("用微博客户端扫一扫加入粉丝群")]), t._m(0), n("p", {
                staticClass: "bottom"
            }, [t._v("请用最新版微博客户端扫码打开")])])
        }
          , pr = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("p", [t._v("位置：我>右上角 "), n("i", {
                staticClass: "sys"
            }), t._v(" >扫一扫 "), n("i", {
                staticClass: "sys"
            })])
        }
        ]
          , gr = n("d044")
          , vr = n.n(gr);
        function br(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function yr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? br(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : br(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var _r = {
            data: function() {
                return {
                    showQr: !1
                }
            },
            computed: yr({}, Object(O["d"])(["qrcode"])),
            methods: {
                close: function(t) {
                    this.$store.commit("emptyqrcode", null),
                    this.$parent.curView = ""
                }
            },
            mounted: function() {
                var t = this;
                new vr.a("qrcode",{
                    text: this.qrcode,
                    width: 200,
                    height: 200,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: vr.a.CorrectLevel.H
                }),
                setTimeout((function() {
                    t.showQr = !0
                }
                ), 0)
            }
        }
          , wr = _r
          , xr = (n("e9c1"),
        Object(_["a"])(wr, mr, pr, !1, null, null, null))
          , jr = xr.exports
          , kr = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "modal5"
            }, [t._m(0), n("div", [n("div", {
                staticClass: "apply-contain"
            }, [n("h4", {
                staticClass: "msg-title"
            }, [n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.showWarnMsg,
                    expression: "!showWarnMsg"
                }],
                staticClass: "alert count-tips"
            }, [t._v("\n          已输入" + t._s(t._stringBitLength(t.msg)) + "字\n        ")]), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showWarnMsg,
                    expression: "showWarnMsg"
                }],
                staticClass: "alert"
            }, [t._v(" 不能超过" + t._s(t.limitNum) + "字 ")])]), n("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.msg,
                    expression: "msg"
                }],
                ref: "msg",
                staticClass: "apply",
                attrs: {
                    placeholder: t.defaultMsg
                },
                domProps: {
                    value: t.msg
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.msg = e.target.value)
                    }
                }
            })]), n("div", {
                staticClass: "box tc right"
            }, [n("button", {
                staticClass: "confirmbtn",
                on: {
                    click: t.apply
                }
            }, [t._v("发送")])])])])
        }
          , Or = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "title"
            }, [n("p", {
                staticClass: "font16"
            }, [t._v("申请理由")])])
        }
        ]
          , Cr = {
            mixins: [nt["a"], A["a"], hn],
            data: function() {
                return {
                    msg: "我是@".concat(l["f"].basicinfo.name),
                    showWarnMsg: !1,
                    showWarnMsgTimer: null,
                    limitNum: 50
                }
            },
            mounted: function() {
                var t = this
                  , e = l["j"].getGid();
                a["a"].groupquery({
                    params: {
                        id: e
                    }
                }).then((function(e) {
                    1 === e.affi_type[0] && e.pay_scheme && (t.msg += " 是你的会员用户")
                }
                ))
            },
            computed: {
                defaultMsg: function() {
                    return "我是@".concat(l["f"].basicinfo.name)
                }
            },
            watch: {
                msg: function(t) {
                    var e = this;
                    if (this._stringBitLength(t) > this.limitNum) {
                        clearTimeout(this.showWarnMsgTimer),
                        this.showWarnMsg = !0,
                        this.showWarnMsgTimer = setTimeout((function() {
                            e.showWarnMsg = !1
                        }
                        ), 2500);
                        var n = this.getCursorRect(this.$refs.msg);
                        this.msg = this.sliceBit(t, this.limitNum),
                        this.$nextTick((function() {
                            e.setCursorRect(n, e.$refs.msg)
                        }
                        ))
                    }
                }
            },
            methods: {
                apply: function() {
                    var t = this
                      , e = l["j"].getGid();
                    a["a"].joinGroup({
                        id: e,
                        msg: this.msg,
                        create_attention: 1
                    }).then((function(e) {
                        e.error ? t.finishModal(e.error) : (t.suda("webchat_addgroupwithlimit", "webchat_addgroupwithlimit"),
                        l["m"].exist ? $t["a"].feedAddGroupWithLimit.addCount() : $t["a"].addGroupWithLimit.addCount(),
                        t.close(),
                        t.finishModal("申请已发送， 请耐心等待群组审核"))
                    }
                    ))
                },
                close: function(t) {
                    l["m"].set(!1),
                    this.$parent.curView = "",
                    this.$store.commit("exJoinGroup", null)
                }
            }
        }
          , Ir = Cr
          , $r = (n("99e7"),
        Object(_["a"])(Ir, kr, Or, !1, null, "6fad2134", null))
          , Tr = $r.exports
          , Ar = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "modal2",
                on: {
                    click: function(e) {
                        return t.changemodalId(-1)
                    }
                }
            }, [n("div", {
                staticClass: "manage-admin"
            }, [n("p", {
                staticClass: "title tc font14"
            }, [t._v("设置管理员")]), t.querygroup ? n("div", [n("div", {
                staticClass: "container group-member-box"
            }, [n("h4", {
                staticClass: "title group-member-title"
            }, [n("span", [t._v(" 管理员(" + t._s(t.querygroup ? t.querygroup.admins.length : 0) + "/" + t._s(10) + ") ")])]), t.querygroup ? n("div", {
                staticClass: "scroll-box"
            }, [n("ul", {
                staticClass: "members-list members flex flex_wrap tc"
            }, [t.$store.state.joinGroup ? t._e() : n("li", {
                staticClass: "member-box"
            }, [n("div", {
                staticClass: "action add hvhd",
                on: {
                    click: function(e) {
                        return t.addAdmin()
                    }
                }
            }, [n("hover-item", {
                attrs: {
                    name: "add-user"
                }
            })], 1), n("p", {
                staticClass: "name W_txt1 font12"
            }, [t._v("添加管理员")])]), n("li", {
                staticClass: "member-box"
            }, [n("div", {
                staticClass: "action remove hvhd",
                on: {
                    click: function(e) {
                        return t.removeAdminModal()
                    }
                }
            }, [n("hover-item", {
                attrs: {
                    name: "remove-user"
                }
            })], 1), n("p", {
                staticClass: "name W_txt1 font12"
            }, [t._v("移除管理员")])]), t._l(t.resolveadminlistsort(), (function(e, r) {
                return n("li", {
                    key: r,
                    staticClass: "member-box relative hvhd",
                    class: ["admins-card"],
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            t.showusercard(n, e)
                        },
                        contextmenu: function(n) {
                            return n.stopPropagation(),
                            n.preventDefault(),
                            t.showmenu(n, e)
                        }
                    }
                }, [n("img", {
                    staticClass: "avator",
                    attrs: {
                        src: t.checkavatar(e.profile_image_url),
                        alt: ""
                    }
                }), n("p", {
                    staticClass: "name W_txt1 font12 one-line nowrap"
                }, [t._v(t._s(t.getmembername(e)))]), n("span", {
                    staticClass: "hidden"
                }, [t._v(t._s(e.uid))])])
            }
            ))], 2)]) : t._e(), t._m(0)])]) : t._e()]), 6 == t.modalId ? n("div", {
                staticClass: "p-fixed userCard",
                style: t.styleObj
            }, [n("usercard", {
                attrs: {
                    userinfo: t.curusercardmsg
                }
            })], 1) : t._e(), 12 == t.modalId && t.curmenumsg ? n("div", {
                staticClass: "menulist p-fixed",
                style: t.styleObj
            }, [t.curmenumsg.msg_status ? n("li", {
                on: {
                    click: function(e) {
                        return t.tochat()
                    }
                }
            }, [t._v("发起聊天")]) : t._e(), n("li", {
                on: {
                    click: function(e) {
                        return t.jumpprofile()
                    }
                }
            }, [t._v("进入个人主页")]), n("li", {
                on: {
                    click: function(e) {
                        return t.removeAdmin(t.curmenumsg.uid)
                    }
                }
            }, [t._v("取消管理员")])]) : t._e()])
        }
          , Pr = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("span", {
                staticStyle: {
                    color: "red"
                }
            }, [t._v("*")]), t._v("在管理员头像区域点击鼠标右键，可展开更多操作")])
        }
        ];
        function Sr(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Dr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Sr(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Sr(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var qr = {
            mixins: [nt["a"], A["a"]],
            data: function() {
                return {
                    curmenumsg: null,
                    curusercardmsg: null,
                    groupAffiliatedPerson: null,
                    styleObj: {
                        left: 0,
                        top: 0,
                        transform: "none"
                    }
                }
            },
            components: {
                usercard: wn,
                hoverItem: yt
            },
            computed: Dr({}, Object(O["d"])(["friendslist", "modalId", "selectId", "remarklist"]), {
                querygroup: function() {
                    return this.$store.state.querygroup || {
                        admins: [],
                        member_infos: []
                    }
                },
                getownerinfo: function() {
                    var t = this
                      , e = {};
                    if (e = this.querygroup.member_infos.find((function(e) {
                        return e.uid == t.querygroup.owner
                    }
                    )),
                    e) {
                        var n = this.remarklist.find((function(e) {
                            return e.uid == t.querygroup.owner
                        }
                        ));
                        return n && (e.screen_name = n.remark),
                        e
                    }
                    return e = {
                        profile_image_url: Se.a,
                        screen_name: this.querygroup.owner,
                        remark: "",
                        owner: this.querygroup.owner
                    },
                    e
                },
                getownermsg: function() {
                    var t = this
                      , e = {};
                    if (e = this.querygroup.member_infos.find((function(e) {
                        return e.uid == t.querygroup.owner
                    }
                    )),
                    e) {
                        Object(u["p"])(e.profile_image_url, e.uid) || Se.a,
                        e.uid,
                        e.screen_name || e.uid,
                        e.uid;
                        var n = this.remarklist.find((function(t) {
                            return t.uid == e.uid
                        }
                        ));
                        e.remark = n ? n.remark : ""
                    } else
                        e = {
                            remark: "",
                            profile_image_url: Se.a,
                            screen_name: this.querygroup.owner
                        };
                    return e
                },
                checkidentify: function() {
                    return !(!this.isowner && !this.isAdmin)
                },
                isowner: function() {
                    return this.querygroup.owner == l["f"].basicinfo.id
                },
                isAdmin: function() {
                    var t = this.querygroup.admins.findIndex((function(t) {
                        return t == l["f"].basicinfo.id
                    }
                    ));
                    return t >= 0
                },
                count_show: function() {
                    return this.querygroup.member_infos.length + 1 + +this.checkidentify
                }
            }),
            methods: Dr({}, Object(O["c"])(["removechatlist", "selectSession", "exnogroupmodal", "changemodalId", "fillfriendslist"]), {
                addAdmin: function() {
                    var t = this;
                    this.querygroup.admins.length < 10 ? (T["a"].$emit("choose-user", {
                        id: "manage",
                        vm: this,
                        title: "新增群管理",
                        confirmBtn: "确定",
                        cancelBtn: "返回",
                        searchText: "搜索联系人/群",
                        chosenText: "已选择联系人",
                        searchType: 1,
                        listType: 2,
                        withGroup: !1,
                        withUser: !0,
                        modalPush: !0,
                        defaultList: [],
                        onconfirm: function(t, e) {
                            var r = this;
                            if (t.length + this.querygroup.admins.length > 10)
                                this.$toast("可添加人数已达到上限");
                            else {
                                var i = t.map((function(t) {
                                    return t.id
                                }
                                ))
                                  , s = {
                                    id: this.$store.state.selectId,
                                    admin_uid: i.toString()
                                };
                                a["a"].addAdmin(s).then((function(t) {
                                    t.error ? r.$toast(t.error) : t.result && r.$modal({
                                        icon: {
                                            text: n("6e34")
                                        },
                                        text: "操作成功",
                                        duration: 800
                                    })
                                }
                                )),
                                e.close(!0)
                            }
                        },
                        oncancle: function(t) {
                            t.close(!0)
                        },
                        listener: function() {}
                    }),
                    this.checkgroups().then((function(t) {
                        T["a"].$emit("refresh-choose-user", {
                            id: "manage",
                            defaultList: t
                        })
                    }
                    ))) : (this.$parent.curView.push(""),
                    this.$modal({
                        icon: {
                            text: n("6008")
                        },
                        text: "最多只能添加10个管理员。",
                        hidemask: !0,
                        okObj: {
                            text: "我知道了",
                            okFun: function() {
                                t.$parent.curView.pop("")
                            }
                        },
                        width: 340,
                        closebtn: !1
                    }))
                },
                checkgroups: function() {
                    var t = this;
                    return new Promise((function(e) {
                        var n = t.querygroup.member_infos;
                        n = n.filter((function(e) {
                            return e.uid !== t.querygroup.owner && -1 === t.querygroup.admins.indexOf(e.uid)
                        }
                        )),
                        n = n.map((function(t) {
                            return {
                                id: t.uid,
                                avatar: t.profile_image_url,
                                name: t.screen_name,
                                jp: t.jp,
                                qp: t.qp
                            }
                        }
                        )),
                        e(n)
                    }
                    ))
                },
                removeAdmin: function(t) {
                    var e = this;
                    a["a"].deleteAdmin({
                        id: this.$store.state.selectId,
                        admin_uid: t
                    }).then((function(t) {
                        t.result && e.$modal({
                            icon: {
                                text: n("6e34")
                            },
                            text: "操作成功",
                            duration: 800
                        })
                    }
                    ))
                },
                removeAdminModal: function() {
                    T["a"].$emit("choose-user", {
                        id: "manage",
                        vm: this,
                        title: "取消管理员",
                        confirmBtn: "取消管理员",
                        cancelBtn: "取消",
                        searchText: "搜索管理员",
                        chosenText: "已选择管理员",
                        searchType: 1,
                        listType: 2,
                        withGroup: !1,
                        withUser: !0,
                        modalPush: !0,
                        defaultList: [],
                        onconfirm: function(t, e) {
                            var n = t.map((function(t) {
                                return t.id
                            }
                            ));
                            this.removeAdmin(n.toString()),
                            e.close(!0)
                        },
                        oncancle: function(t) {
                            t.close(!0)
                        },
                        listener: function() {}
                    }),
                    this.checkAdmins().then((function(t) {
                        T["a"].$emit("refresh-choose-user", {
                            id: "manage",
                            defaultList: t
                        })
                    }
                    ))
                },
                checkAdmins: function() {
                    var t = this;
                    return new Promise((function(e) {
                        var n = t.querygroup.member_infos;
                        n = n.filter((function(e) {
                            return -1 !== t.querygroup.admins.indexOf(e.uid)
                        }
                        )),
                        n = n.map((function(t) {
                            return {
                                id: t.uid,
                                avatar: t.profile_image_url,
                                name: t.screen_name,
                                jp: t.jp,
                                qp: t.qp
                            }
                        }
                        )),
                        e(n)
                    }
                    ))
                },
                checkavatar: function(t) {
                    return t ? Object(u["b"])(t) : Se.a
                },
                tochat: function() {
                    this.selectUser(this.curmenumsg.uid),
                    this.changemodalId(-1),
                    this.$parent.curView = ""
                },
                encodeHTML: function(t) {
                    return Object(u["d"])(t)
                },
                checkId: function(t) {
                    if (this.querygroup.owner == t)
                        return 1;
                    var e = this.querygroup.admins.includes(t);
                    return e ? 2 : 3
                },
                resolveadminlistsort: function() {
                    var t = this;
                    try {
                        console.log(this.querygroup.member_infos);
                        var e = Object.assign([], this.querygroup.member_infos)
                          , n = [];
                        return this.querygroup.admins.forEach((function(t) {
                            e.forEach((function(e) {
                                t === e.uid && n.push(e)
                            }
                            ))
                        }
                        )),
                        n.sort((function(e, n) {
                            return t.checkId(e.uid) - t.checkId(n.uid)
                        }
                        )),
                        n
                    } catch (r) {
                        return this.querygroup.member_infos
                    }
                },
                jumpprofile: function() {
                    window.open("//www.weibo.com/u/" + this.curmenumsg.uid)
                },
                getmembername: function(t) {
                    var e = this.remarklist.find((function(e) {
                        return e.uid == t.uid
                    }
                    ));
                    return e ? e.remark : t.screen_name
                },
                showmenu: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    this.$refs.modal2.getBoundingClientRect(),
                                    e.target.getBoundingClientRect(),
                                    this.styleObj = {
                                        left: e.clientX + "px",
                                        top: e.clientY + "px"
                                    },
                                    n.uid == l["f"].basicinfo.id ? n.msg_status = 0 : n.msg_status = 1,
                                    this.curmenumsg = n,
                                    this.changemodalId(12);
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                showusercard: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.$refs.modal2.getBoundingClientRect(),
                                    e.target.getBoundingClientRect(),
                                    this.styleObj = {
                                        left: e.clientX + "px",
                                        top: e.clientY + "px"
                                    },
                                    6 != this.modalId) {
                                        t.next = 7;
                                        break
                                    }
                                    this.changemodalId(-1),
                                    t.next = 9;
                                    break;
                                case 7:
                                    return t.next = 9,
                                    new Promise((function(t) {
                                        r.getuserdetail(n.uid, (function(t) {
                                            if (!t.error) {
                                                var e = {
                                                    avatar_large: Object(u["b"])(Object(u["p"])(t.avatar_large, n.uid)) || Se.a,
                                                    description: t.description,
                                                    name: t.name || n.uid,
                                                    profile_url: "//www.weibo.com/u/" + n.uid,
                                                    id: n.uid,
                                                    msg_status: 1
                                                };
                                                r.curusercardmsg = r.curusercardinfo(e),
                                                r.changemodalId(6)
                                            }
                                        }
                                        ))
                                    }
                                    ));
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            })
        }
          , Mr = qr
          , Er = (n("2df7"),
        Object(_["a"])(Mr, Ar, Pr, !1, null, null, null))
          , Rr = Er.exports
          , Nr = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "affi"
            }, [n("div", {
                staticClass: "modal2"
            }, [n("p", {
                staticClass: "title tc font14"
            }, [t._v("升级为粉丝群")]), n("div", {
                staticClass: "scroll-container"
            }, [n("happy-scroll", {
                attrs: {
                    color: "rgba(82, 85, 91, .8)",
                    size: "5",
                    "min-length-v": .05,
                    resize: "",
                    "hide-horizontal": ""
                }
            }, [n("div", {
                staticStyle: {
                    "margin-right": "15px"
                }
            }, [n("div", {
                staticClass: "group-name-box qmc container"
            }, [n("div", {
                staticClass: "member-box"
            }, [t.affi.id ? n("div", [n("img", {
                staticClass: "add hvhd action",
                attrs: {
                    src: t.affi.avatar,
                    alt: ""
                },
                on: {
                    click: function(e) {
                        return t.chooseAffi()
                    }
                }
            }), n("p", {
                staticClass: "name W_txt1 font12"
            }, [n("span", {
                staticClass: "fans"
            }, [t._v("粉丝群")]), t._v(" " + t._s(t.affi.name))]), n("p", {
                staticClass: "name W_txt1 font12"
            }, [t._v("*修改粉丝群头像需在移动端操作。")])]) : n("div", [n("div", {
                staticClass: "add hvhd action",
                on: {
                    click: function(e) {
                        return t.chooseAffi()
                    }
                }
            }, [n("hover-item", {
                attrs: {
                    name: "add-user"
                }
            })], 1), n("p", {
                staticClass: "name W_txt1 font12"
            }, [t._v("选择隶属人")])])])]), n("text-input", {
                attrs: {
                    title: "群名称",
                    content: t.groupName,
                    placeholder: "输入粉丝群名称"
                },
                on: {
                    change: function(e) {
                        t.groupName = e
                    }
                }
            }), n("text-area-input", {
                on: {
                    change: function(e) {
                        t.groupSummary = e
                    }
                }
            }), n("div", {
                staticClass: "spancontainer"
            }, [n("p", {
                staticClass: "name W_txt1 font12"
            }, [t._v("*粉丝群均为公开群。申请成功后所有人均可搜索到该群。")]), n("p", {
                staticClass: "name W_txt1 font12"
            }, [t._v("\n              *等待审核中以及群升级成功后，隶属人和超管可以查看该群的聊天内容。\n            ")])])], 1)])], 1)]), n("div", {
                staticClass: "confirmbtn-box tc"
            }, [n("button", {
                staticClass: "confirmbtn",
                class: {
                    disabled: !t.affi.id
                },
                on: {
                    click: function(e) {
                        t.affi.id && t.update()
                    }
                }
            }, [t._v("\n      提交申请\n    ")])])])
        }
          , Lr = []
          , Gr = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "group-name-box qmc container"
            }, [n("h4", {
                staticClass: "title"
            }, [t._v("\n    " + t._s(t.title) + "\n    "), n("i", {
                staticClass: "bj-icon hvhd",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.switchInput()
                    }
                }
            }, [n("hover-item", {
                attrs: {
                    name: "bianji-group-info"
                }
            })], 1), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.showWarnText && t.editText,
                    expression: "!showWarnText && editText"
                }],
                staticClass: "alert count-tips"
            }, [t._v("\n      " + t._s(t._stringBitLength(t.text)) + "\n    ")]), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showWarnText,
                    expression: "showWarnText"
                }],
                staticClass: "alert"
            }, [t._v("\n      不能超过15字\n    ")])]), t.editText ? t._e() : n("p", {
                staticClass: "groupname"
            }, [t._v("\n    " + t._s(t.text ? t.text : t.placeholder) + "\n  ")]), t.editText ? n("input", {
                directives: [{
                    name: "focus",
                    rawName: "v-focus"
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.text,
                    expression: "text"
                }],
                ref: "text",
                staticClass: "renameinput",
                attrs: {
                    type: "text",
                    placeholder: t.placeholder
                },
                domProps: {
                    value: t.text
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    },
                    blur: t.done,
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.done(e)
                    },
                    input: function(e) {
                        e.target.composing || (t.text = e.target.value)
                    }
                }
            }) : t._e()])
        }
          , Ur = []
          , Br = {
            mixins: [hn],
            components: {
                hoverItem: yt
            },
            props: {
                title: {
                    type: String,
                    required: !0
                },
                content: {
                    type: String,
                    required: !0
                },
                placeholder: {
                    type: String,
                    default: "请输入",
                    required: !1,
                    timer: function() {}
                }
            },
            data: function() {
                return {
                    text: this.content,
                    editText: !1,
                    showWarnText: !1,
                    startWatchText: !1
                }
            },
            watch: {
                text: function(t) {
                    var e = this;
                    if (this.startWatchText && this._stringBitLength(t) > 15) {
                        var n = this.getCursorRect(this.$refs.text);
                        clearTimeout(this.timer),
                        this.showWarnText = !0,
                        this.timer = setTimeout((function() {
                            e.showWarnText = !1
                        }
                        ), 2500),
                        this.text = this.sliceBit(t, 15),
                        this.$nextTick((function() {
                            e.setCursorRect(n, e.$refs.text)
                        }
                        ))
                    }
                }
            },
            methods: {
                switchInput: function() {
                    this.editText = !this.editText,
                    this.startWatchText = !0
                },
                done: function() {
                    this.editText = !this.editText,
                    this.startWatchText = !1,
                    this.$emit("change", this.text)
                }
            }
        }
          , Wr = Br
          , zr = (n("fb79"),
        Object(_["a"])(Wr, Gr, Ur, !1, null, "1f5f1a38", null))
          , Vr = zr.exports
          , Yr = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "group-name-box container none-bottom-line"
            }, [n("h4", {
                staticClass: "title"
            }, [t._v("\n    " + t._s(t.title) + "\n    "), n("i", {
                staticClass: "bj-icon hvhd",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.switchinput(e)
                    }
                }
            }, [n("hover-item", {
                attrs: {
                    name: "bianji-group-info"
                }
            })], 1), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.warn && t.textEdit,
                    expression: "!warn && textEdit"
                }],
                staticClass: "alert count-tips"
            }, [t._v("\n      " + t._s(t._stringBitLength(t.summary)) + "\n    ")]), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.warn,
                    expression: "warn"
                }],
                staticClass: "alert"
            }, [t._v("\n      不能超过140字\n    ")])]), t.textEdit ? t._e() : n("p", {
                staticClass: "groupname"
            }, [t.encodeHTML(t.summary) ? n("span", {
                domProps: {
                    innerHTML: t._s(t.encodeHTML(t.summary))
                }
            }) : n("span", [t._v("暂无群简介(选填)")])]), t.textEdit ? n("textarea", {
                directives: [{
                    name: "focus",
                    rawName: "v-focus"
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.summary,
                    expression: "summary"
                }],
                ref: "summary",
                staticClass: "summaryinput",
                attrs: {
                    type: "text",
                    placeholder: "在此输入群简介"
                },
                domProps: {
                    value: t.summary
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    },
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.done(e)
                    },
                    blur: t.done,
                    input: function(e) {
                        e.target.composing || (t.summary = e.target.value)
                    }
                }
            }) : t._e()])
        }
          , Fr = []
          , Hr = {
            mixins: [hn],
            components: {
                hoverItem: yt
            },
            props: {
                title: {
                    type: String,
                    required: !1,
                    default: "群简介"
                }
            },
            data: function() {
                return {
                    summary: "",
                    startWatch: !1,
                    textEdit: !1,
                    warn: !1,
                    timer: function() {}
                }
            },
            methods: {
                encodeHTML: function(t) {
                    return Object(u["d"])(t)
                },
                switchinput: function() {
                    this.startWatch = !0,
                    this.textEdit = !0
                },
                done: function() {
                    this.startWatch = !1,
                    this.textEdit = !1,
                    this.$emit("change", this.summary)
                }
            },
            watch: {
                summary: function(t) {
                    var e = this;
                    if (this.startWatch && this._stringBitLength(t) > 140) {
                        var n = this.getCursorRect(this.$refs.summary);
                        clearTimeout(this.timer),
                        this.warn = !0,
                        this.timer = setTimeout((function() {
                            e.warn = !1
                        }
                        ), 2500),
                        this.summary = this.sliceBit(t, 140),
                        this.$nextTick((function() {
                            e.setCursorRect(n, e.$refs.summary)
                        }
                        ))
                    }
                }
            }
        }
          , Jr = Hr
          , Zr = Object(_["a"])(Jr, Yr, Fr, !1, null, null, null)
          , Kr = Zr.exports;
        function Qr(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Xr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Qr(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qr(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var ti = {
            components: {
                hoverItem: yt,
                textInput: Vr,
                textAreaInput: Kr
            },
            data: function() {
                return {
                    groupName: "",
                    groupSummary: "",
                    affi: {}
                }
            },
            computed: Xr({}, Object(O["d"])(["querygroup"])),
            methods: {
                update: function() {
                    var t = this
                      , e = {
                        id: this.$store.state.selectId,
                        page_id: this.affi.id
                    };
                    this.groupName && (e.name = this.groupName),
                    this.groupSummary && (e.summary = this.groupSummary),
                    a["a"].updateFansGroup(e).then((function(e) {
                        e.error ? t.$modal({
                            icon: {
                                text: n("6008")
                            },
                            width: 340,
                            text: e.error,
                            duration: 1e3
                        }) : 1 === e.apply.apply_status ? (t.$modal({
                            icon: {
                                text: n("6e34")
                            },
                            text: "已提交申请。隶属人或超管审核通过后，将自动升级为粉丝群。",
                            duration: 800,
                            width: 340
                        }),
                        t.querygroup.apply_status = 1,
                        t.$parent.curView = "") : 2 === e.apply.apply_status && (t.$modal({
                            icon: {
                                text: n("6e34")
                            },
                            text: "已升级成为 @".concat(t.affi.name, " 的粉丝群"),
                            duration: 800,
                            width: 340
                        }),
                        t.querygroup.affi_type[0],
                        t.$parent.curView = "")
                    }
                    ))
                },
                chooseAffi: function() {
                    T["a"].$emit("choose-user", {
                        id: "updateAffi",
                        vm: this,
                        single_choose: 1,
                        title: "选择粉丝群的隶属人",
                        confirmBtn: "确定",
                        cancelBtn: "取消",
                        searchText: "搜索隶属人",
                        searchType: 3,
                        listType: 2,
                        withGroup: !1,
                        withUser: !0,
                        defaultList: [],
                        modalPush: !0,
                        onconfirm: function(t, e) {
                            this.affi = t[0],
                            e.close(!0)
                        },
                        oncancle: function(t) {
                            t.close(!0)
                        }
                    }),
                    this.checkfriend().then((function(t) {
                        T["a"].$emit("refresh-choose-user", {
                            id: "updateAffi",
                            defaultList: d["a"].backsolvemembers(t)
                        })
                    }
                    ))
                },
                checkfriend: function() {
                    return new Promise((function(t) {
                        a["a"].getbilateral().then((function(e) {
                            t(e.friends)
                        }
                        ))
                    }
                    ))
                }
            }
        }
          , ei = ti
          , ni = (n("9113"),
        Object(_["a"])(ei, Nr, Lr, !1, null, null, null))
          , ri = ni.exports
          , ii = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.modalType ? n("div", {
                staticClass: "modal1 groups"
            }, [n("p", {
                staticClass: "title tc font16"
            }, [t._v(t._s(t.selectSettings.title))]), n("div", {
                staticClass: "modal1-center ofh"
            }, [n("div", {
                staticClass: "search-box flex align-items_c"
            }, [n("i", {
                staticClass: "icon W_ficon font14 icon-search"
            }, [t._v("")]), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.keywords,
                    expression: "keywords"
                }],
                ref: "input",
                staticClass: "search",
                attrs: {
                    placeholder: t.selectSettings.searchText
                },
                domProps: {
                    value: t.keywords
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.keywords = e.target.value)
                    }
                }
            }), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.keywords,
                    expression: "keywords"
                }],
                staticClass: "searchInput-delete",
                on: {
                    click: function(e) {
                        t.keywords = "",
                        t.$refs.input.focus()
                    }
                }
            })]), n("ul", {
                staticClass: "grouplist"
            }, [n("happy-scroll", {
                attrs: {
                    color: "rgba(82, 85, 91, .8)",
                    size: "5",
                    "min-length-v": .05,
                    resize: "",
                    "hide-horizontal": "",
                    right: "17"
                }
            }, [n("div", {
                staticStyle: {
                    "margin-right": "37px"
                }
            }, [n("ul", [1 === t.selectSettings.listType ? n("div", t._l(t.members_solve, (function(e, r) {
                return n("li", {
                    key: r,
                    staticClass: "group-box hvhd flex align-items_c",
                    class: {
                        active: t.reslist.some((function(t) {
                            return e.id === +t.id
                        }
                        ))
                    },
                    on: {
                        click: function(n) {
                            return t.changeCheck(e.id, e)
                        }
                    }
                }, [n("div", {
                    staticClass: "avator-box"
                }, [n("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: e.avatar,
                        alt: ""
                    }
                }), n("weibo-verified", {
                    attrs: {
                        user: e
                    }
                })], 1), n("span", {
                    staticClass: "font12 c333 one-line name"
                }, [t._v(t._s(e.name))]), n("span", {
                    staticClass: "hidden"
                }, [t._v(t._s(e.id))])])
            }
            )), 0) : 2 === t.selectSettings.listType ? t._l(t.members_solve, (function(e, r) {
                return n("div", {
                    key: r
                }, [n("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.keywords,
                        expression: "!keywords"
                    }],
                    staticClass: "character font12"
                }, [t._v(t._s(e.character))]), t._l(e.item, (function(e, r) {
                    return n("li", {
                        key: r,
                        staticClass: "users hvhd flex align-items_c",
                        class: {
                            "last-active": t.lastcheckuid === e.id
                        },
                        on: {
                            click: function(n) {
                                return t.changeCheck(e.id, e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "avator-box"
                    }, [n("img", {
                        staticClass: "avatar",
                        attrs: {
                            src: t.convertProtocal(e.avatar),
                            alt: ""
                        }
                    }), n("weibo-verified", {
                        attrs: {
                            user: e
                        }
                    })], 1), n("span", {
                        staticClass: "font12 c333 name one-line"
                    }, [t._v(t._s(e.name))]), n("div", {
                        staticClass: "selected",
                        class: {
                            active: t.reslist.some((function(t) {
                                return t.id === +e.id
                            }
                            ))
                        }
                    }), n("span", {
                        staticClass: "hide"
                    }, [t._v(t._s(e.id))])])
                }
                ))], 2)
            }
            )) : t._e()], 2)])])], 1)]), n("div", {
                staticClass: "confirmbtn-box tc"
            }, [n("button", {
                staticClass: "confirmbtn",
                class: {
                    disabled: !t.reslist.length
                },
                on: {
                    click: function(e) {
                        t.reslist.length && t.selectSettings.onconfirm.call(t.selectSettings.vm, t.reslist, t.$parent)
                    }
                }
            }, [t._v("\n      " + t._s(t.selectSettings.confirmBtn) + "\n    ")]), t.selectSettings.cancelBtn ? n("button", {
                staticClass: "confirmbtn calcelbtn",
                on: {
                    click: function(e) {
                        return t.selectSettings.oncancle.call(t.selectSettings.vm, t.$parent)
                    }
                }
            }, [t._v("\n      " + t._s(t.selectSettings.cancelBtn) + "\n    ")]) : t._e()])]) : n("div", {
                staticClass: "modal1 members"
            }, [n("p", {
                staticClass: "title tc font16"
            }, [t._v(t._s(t.selectSettings.title))]), n("div", {
                staticClass: "modal1-left ofh"
            }, [n("div", {
                staticClass: "search-box flex align-items_c"
            }, [n("i", {
                staticClass: "icon W_ficon font14 icon-search"
            }, [t._v("")]), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.keywords,
                    expression: "keywords"
                }],
                ref: "input",
                staticClass: "search",
                attrs: {
                    placeholder: t.selectSettings.searchText
                },
                domProps: {
                    value: t.keywords
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.keywords = e.target.value)
                    }
                }
            }), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.keywords,
                    expression: "keywords"
                }],
                staticClass: "searchInput-delete",
                on: {
                    click: function(e) {
                        t.keywords = "",
                        t.$refs.input.focus()
                    }
                }
            })]), n("ul", {
                staticClass: "userlist"
            }, [n("happy-scroll", {
                attrs: {
                    color: "rgba(82, 85, 91, .8)",
                    size: "5",
                    "min-length-v": .05,
                    right: "25",
                    resize: "",
                    "hide-horizontal": ""
                }
            }, [n("div", {
                staticStyle: {
                    "margin-right": "37px"
                }
            }, [n("div", [1 === t.selectSettings.listType ? n("div", t._l(t.members_solve, (function(e, r) {
                return n("li", {
                    key: r,
                    staticClass: "users hvhd flex align-items_c",
                    class: {
                        "last-active": t.lastcheckuid === e.id
                    },
                    on: {
                        click: function(n) {
                            return t.changeCheck(e.id, e)
                        }
                    }
                }, [n("div", {
                    staticClass: "avator-box"
                }, [n("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.convertProtocal(e.avatar),
                        alt: ""
                    }
                }), n("weibo-verified", {
                    attrs: {
                        user: e
                    }
                })], 1), n("span", {
                    staticClass: "font12 c333 name one-line"
                }, [t._v(t._s(e.name))]), n("div", {
                    staticClass: "selected",
                    class: {
                        active: t.reslist.some((function(t) {
                            return t.id === +e.id
                        }
                        ))
                    }
                }), n("span", {
                    staticClass: "hidden"
                }, [t._v(t._s(e.id))])])
            }
            )), 0) : 2 === t.selectSettings.listType ? t._l(t.members_solve, (function(e, r) {
                return n("div", {
                    key: r
                }, [n("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.keywords,
                        expression: "!keywords"
                    }],
                    staticClass: "character font12"
                }, [t._v(t._s(e.character))]), t._l(e.item, (function(e, r) {
                    return n("li", {
                        key: r,
                        staticClass: "users hvhd flex align-items_c",
                        class: {
                            "last-active": t.lastcheckuid === e.id
                        },
                        on: {
                            click: function(n) {
                                return t.changeCheck(e.id, e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "avator-box"
                    }, [n("img", {
                        staticClass: "avatar",
                        attrs: {
                            src: t.convertProtocal(e.avatar),
                            alt: ""
                        }
                    }), n("weibo-verified", {
                        attrs: {
                            user: e
                        }
                    })], 1), n("span", {
                        staticClass: "font12 c333 name one-line"
                    }, [t._v(t._s(e.name))]), n("div", {
                        staticClass: "selected",
                        class: {
                            active: t.reslist.some((function(t) {
                                return t.id === +e.id
                            }
                            ))
                        }
                    }), n("span", {
                        staticClass: "hidden"
                    }, [t._v(t._s(e.id))])])
                }
                ))], 2)
            }
            )) : t._e()], 2)])])], 1)]), n("div", {
                staticClass: "modal1-right ofh"
            }, [n("div", {
                staticClass: "right-title"
            }, [t._v("\n      " + t._s(t.selectSettings.chosenText) + "\n    ")]), n("div", {
                staticClass: "userlist"
            }, [n("happy-scroll", {
                attrs: {
                    color: "rgba(82, 85, 91, .8)",
                    size: "5",
                    "min-length-v": .05,
                    resize: "",
                    "hide-horizontal": "",
                    right: "25"
                }
            }, [n("div", {
                staticStyle: {
                    "margin-right": "37px"
                }
            }, t._l(t.reslist, (function(e, r) {
                return n("div", {
                    key: r,
                    staticClass: "avatar-contain"
                }, [n("div", {
                    staticClass: "users hvhd flex align-items_c"
                }, [n("div", {
                    staticClass: "avator-box"
                }, [n("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.convertProtocal(e.avatar)
                    }
                }), n("weibo-verified", {
                    attrs: {
                        user: e
                    }
                })], 1), n("span", {
                    staticClass: "font12 c333 name one-line"
                }, [t._v(t._s(e.name))]), n("div", {
                    staticClass: "selected",
                    on: {
                        click: function(n) {
                            return t.changeCheck(e.id, e, !0)
                        }
                    }
                }, [n("hover-item", {
                    attrs: {
                        name: "yichu"
                    }
                })], 1)])])
            }
            )), 0)])], 1), n("div", {
                staticClass: "confirmbtn-box tc"
            }, [n("button", {
                staticClass: "confirmbtn",
                class: {
                    disabled: !t.reslist.length
                },
                on: {
                    click: function(e) {
                        t.reslist.length && t.selectSettings.onconfirm.call(t.selectSettings.vm, t.reslist, t.$parent)
                    }
                }
            }, [t._v("\n        " + t._s(t.selectSettings.confirmBtn) + "\n      ")]), n("button", {
                staticClass: "confirmbtn calcelbtn",
                on: {
                    click: function(e) {
                        return t.selectSettings.oncancle.call(t.selectSettings.vm, t.$parent)
                    }
                }
            }, [t._v("\n        " + t._s(t.selectSettings.cancelBtn) + "\n      ")])])])])
        }
          , si = [];
        function oi(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ai(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? oi(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : oi(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var ci = {
            mixins: [A["a"]],
            name: "choose-user",
            data: function() {
                return {
                    keywords: "",
                    reslist: [],
                    checkedItem: [],
                    api_user: [],
                    api_group: [],
                    lastcheckuid: -100
                }
            },
            methods: {
                convertProtocal: function(t) {
                    return Object(u["b"])(t)
                },
                changeCheck: function(t, e, n) {
                    n || (this.lastcheckuid = t);
                    var r = this.reslist.findIndex((function(e) {
                        return e.id === t
                    }
                    ));
                    this.selectSettings.single_choose ? r > -1 ? this.reslist.splice(r, 1) : this.reslist = [e] : r > -1 ? this.reslist.splice(r, 1) : (this.reslist.push(e),
                    this.selectSettings.limit && this.reslist.length > this.selectSettings.limit && this.reslist.shift())
                },
                mergeUser: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.api_user
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.api_group;
                    return this.selectSettings.withUser && e.forEach((function(e) {
                        t.some((function(t) {
                            return t.id === e.id
                        }
                        )) || t.push(e)
                    }
                    )),
                    this.selectSettings.withGroup && n.forEach((function(e) {
                        t.some((function(t) {
                            return t.id === e.id
                        }
                        )) || t.push(e)
                    }
                    )),
                    t
                },
                resolveUserList: function(t) {
                    return t.map((function(t) {
                        return {
                            id: t.id || t.uid || t.gid,
                            name: t.remark || t.name || t.screen_name || t.nickname || t.groupname || t.system_name,
                            avatar: t.profile_image_url || t.avatar_large || t.avatar || t.round_avatar_large,
                            verified_type: t.verified_type,
                            verified: t.verified,
                            verified_type_ext: t.verified_type_ext,
                            jp: t.jp,
                            qp: t.qp,
                            type: t.type
                        }
                    }
                    ))
                },
                confirm: function() {
                    this.selectItem.id ? this.selectSettings.onconfirm.call(this.selectSettings.vm, this.selectItem, this.$parent) : this.selectSettings.oncancle.call(this.selectSettings.vm, this.$parent)
                }
            },
            mounted: function() {
                var t;
                (this.$refs.input && this.$refs.input.focus(),
                this.selectSettings.defaultSelects) && (t = this.reslist).push.apply(t, Object(Nt["a"])(this.selectSettings.defaultSelects))
            },
            props: ["selectSettings"],
            computed: ai({}, Object(O["d"])(["modalId", "selectId", "querygroup", "remarklist"]), {
                modalType: function() {
                    return this.selectSettings.single_choose
                },
                members_show: function() {
                    var t = this;
                    return this.keywords && this.defaultList ? this.mergeUser(this.defaultList.filter((function(e) {
                        function n(t, e) {
                            return e && e.indexOf(t.toString()) > -1
                        }
                        return n(t.keywords, e.jp) || n(t.keywords, e.qp) || n(t.keywords, e.name)
                    }
                    ))) : this.defaultList || []
                },
                defaultList: function() {
                    return this.resolveUserList(this.selectSettings.defaultList)
                },
                members_solve: function() {
                    return 1 === this.selectSettings.listType ? this.members_show : (console.log(this.members_show, d["a"].solvemembers(this.members_show)),
                    d["a"].solvemembers(this.members_show))
                }
            }),
            components: {
                weiboVerified: ht,
                hoverItem: yt
            },
            watch: {
                keywords: function(t) {
                    var e = this;
                    if (!t || 1 === this.selectSettings.searchType)
                        return this.api_user = [],
                        void (this.api_group = []);
                    if (this.selectSettings.onsearch) {
                        var n = this.selectSettings.onsearch.call(this.selectSettings.vm, t);
                        n && n.constructor === Promise && n.then((function(t) {
                            t && (t.users && (e.api_user = e.resolveUserList(t.users)),
                            t.groups && (e.api_group = e.resolveUserList(t.groups)))
                        }
                        ))
                    } else if (3 !== this.selectSettings.searchType) {
                        var r = {
                            params: {
                                key: t,
                                pagecount: 20
                            }
                        };
                        a["a"].msgsearch(r).then((function(t) {
                            if (t) {
                                var n = {
                                    contacts: t.contacts,
                                    groups: t.groups
                                };
                                if (n.contacts.total_num) {
                                    var r = n.contacts.contact_result_list;
                                    e.api_user = e.resolveUserList(r)
                                } else
                                    e.api_user = [];
                                if (n.groups.total_num) {
                                    var i = (n.groups.group_member_result_list || []).concat(n.groups.group_result_list || []);
                                    e.api_group = e.resolveUserList(i)
                                } else
                                    e.api_group = []
                            }
                        }
                        ))
                    } else {
                        var i = {
                            params: {
                                name: t
                            }
                        };
                        a["a"].searchAffi(i).then((function(t) {
                            if (t) {
                                var n = {
                                    contacts: t.affi_infos
                                };
                                if (n.contacts.length) {
                                    var r = n.contacts;
                                    e.api_user = e.resolveUserList(r)
                                } else
                                    e.api_user = []
                            }
                        }
                        ))
                    }
                }
            }
        }
          , ui = ci
          , li = (n("f655"),
        Object(_["a"])(ui, ii, si, !1, null, "5d50dfb8", null))
          , di = li.exports
          , fi = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "video-container",
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.$parent.curView = ""
                    }
                }
            }, [n("div", {
                staticClass: "controls",
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [n("video-player", {
                ref: "videoPlayer",
                staticClass: "video-player-box vjs-big-play-centered",
                attrs: {
                    options: t.playerOptions
                },
                on: {
                    ready: t.playerIsReady
                }
            })], 1)])
        }
          , hi = []
          , mi = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.reseted ? n("div", {
                staticClass: "video-player"
            }, [n("video", {
                ref: "video",
                staticClass: "video-js",
                class: ["modal-default"]
            })]) : t._e()
        }
          , pi = []
          , gi = n("f0e2")
          , vi = window.videojs || gi["default"];
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(t, e) {
                if (null == t)
                    throw new TypeError("Cannot convert undefined or null to object");
                for (var n = Object(t), r = 1; r < arguments.length; r++) {
                    var i = arguments[r];
                    if (null != i)
                        for (var s in i)
                            Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s])
                }
                return n
            },
            writable: !0,
            configurable: !0
        });
        var bi = ["loadeddata", "canplay", "canplaythrough", "play", "pause", "waiting", "playing", "ended", "error"]
          , yi = {
            name: "video-player",
            props: {
                start: {
                    type: Number,
                    default: 0
                },
                crossOrigin: {
                    type: String,
                    default: ""
                },
                playsinline: {
                    type: Boolean,
                    default: !1
                },
                customEventName: {
                    type: String,
                    default: "statechanged"
                },
                options: {
                    type: Object,
                    required: !0
                },
                events: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                globalOptions: {
                    type: Object,
                    default: function() {
                        return {
                            controls: !0,
                            controlBar: {
                                remainingTimeDisplay: !1,
                                playToggle: {},
                                progressControl: {},
                                fullscreenToggle: {},
                                volumeMenuButton: {
                                    inline: !1,
                                    vertical: !0
                                }
                            },
                            techOrder: ["html5"],
                            plugins: {}
                        }
                    }
                },
                globalEvents: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    player: null,
                    reseted: !0
                }
            },
            mounted: function() {
                this.player || this.initialize()
            },
            beforeDestroy: function() {
                this.player && this.dispose()
            },
            methods: {
                initialize: function() {
                    var t = this
                      , e = Object.assign({}, this.globalOptions, this.options);
                    "" !== this.crossOrigin && (this.$refs.video.crossOrigin = this.crossOrigin,
                    this.$refs.video.setAttribute("crossOrigin", this.crossOrigin)),
                    this.$refs.video.addEventListener("ended", (function() {
                        var t = document.querySelector(".vjs-slider-bar");
                        t.style.width = "100%"
                    }
                    ));
                    var n = function(e, n) {
                        e && t.$emit(e, t.player),
                        n && t.$emit(t.customEventName, Object(o["a"])({}, e, n))
                    };
                    e.plugins && delete e.plugins.__ob__;
                    var r = this;
                    this.$refs.video.addEventListener("loadeddata", (function() {
                        t.$refs.video.muted = !1,
                        t.$refs.video.volume = 1,
                        t.$refs.video.play()
                    }
                    )),
                    this.player = vi(this.$refs.video, e, (function() {
                        for (var t = this, e = bi.concat(r.events).concat(r.globalEvents), i = {}, s = 0; s < e.length; s++)
                            "string" === typeof e[s] && void 0 === i[e[s]] && function(e) {
                                i[e] = null,
                                t.on(e, (function() {
                                    n(e, !0)
                                }
                                ))
                            }(e[s]);
                        this.on("timeupdate", (function() {
                            n("timeupdate", this.currentTime())
                        }
                        )),
                        r.$emit("ready", this)
                    }
                    ))
                },
                dispose: function(t) {
                    var e = this;
                    this.player && this.player.dispose && ("Flash" !== this.player.techName_ && this.player.pause && this.player.pause(),
                    this.player.dispose(),
                    this.player = null,
                    this.$nextTick((function() {
                        e.reseted = !1,
                        e.$nextTick((function() {
                            e.reseted = !0,
                            e.$nextTick((function() {
                                t && t()
                            }
                            ))
                        }
                        ))
                    }
                    )))
                }
            },
            watch: {
                options: {
                    deep: !0,
                    handler: function(t, e) {
                        var n = this;
                        this.dispose((function() {
                            t && t.sources && t.sources.length && n.initialize()
                        }
                        ))
                    }
                }
            }
        }
          , _i = yi
          , wi = Object(_["a"])(_i, mi, pi, !1, null, null, null)
          , xi = wi.exports;
        n("3c119"),
        n("6922");
        window.videojs = n("f0e2");
        var ji = {
            mixins: [A["a"]],
            props: {
                src: {
                    type: String,
                    required: !0
                }
            },
            components: {
                videoPlayer: xi
            },
            watch: {},
            data: function() {
                return {
                    videoSrc: "",
                    showPlay: !0,
                    video: null,
                    videoSize: [],
                    playerOptions: {
                        controls: !0,
                        autoplay: !0,
                        height: "0",
                        width: "0",
                        muted: !1,
                        language: "zh-CN",
                        playbackRates: [.7, 1, 1.5, 2],
                        sources: [{
                            type: "video/mp4",
                            src: ""
                        }],
                        controlBar: {
                            children: ["playToggle", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "volumePanel", "fullscreenToggle"],
                            fullscreenToggle: !0,
                            remainingTimeDisplay: !1,
                            pictureInPictureToggle: !1,
                            playbackRateMenuButton: !1,
                            currentTimeDisplay: !0,
                            timeDivider: !0,
                            durationDisplay: !0,
                            volumePanel: {
                                inline: !1
                            }
                        },
                        poster: "/static/images/author.jpg"
                    }
                }
            },
            created: function() {
                var t = .7 * window.innerWidth
                  , e = .7 * window.innerHeight
                  , n = [t, e - 10];
                this.playerOptions.width = n[0],
                this.playerOptions.height = n[1],
                this.playerOptions.sources[0].src = this.src
            },
            mounted: function() {
                this.suda("webchat_videoplay", "webchat_videoplay")
            },
            methods: {
                playerIsReady: function(t) {
                    var e = this;
                    window.addEventListener("resize", (function() {
                        e.isFullscreen() || window.innerHeight && window.innerWidth && (t.width(.7 * window.innerWidth),
                        t.height(.7 * window.innerHeight))
                    }
                    ))
                }
            }
        }
          , ki = ji
          , Oi = (n("af7d"),
        Object(_["a"])(ki, fi, hi, !1, null, "027854d4", null))
          , Ci = Oi.exports;
        function Ii(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function $i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ii(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ii(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Ti = {
            mixins: [A["a"]],
            data: function() {
                return {
                    curView: "",
                    lastPageId: "",
                    floatMask: !1,
                    src: "",
                    isclose: !1,
                    selectSettings: {},
                    chooseUserId: ""
                }
            },
            computed: $i({}, Object(O["d"])(["querygroup"])),
            mounted: function() {
                var t = this;
                document.body.style.overflow = "hidden",
                T["a"].$on("floatmaskmodal", (function(e) {
                    t.curView && (t.floatMask = e)
                }
                )),
                T["a"].$on("choose-user", (function(e) {
                    console.log(e),
                    t.selectSettings = e,
                    console.log(t.selectSettings),
                    e.modalPush ? t.curView.push("choose-user") : t.curView = "choose-user",
                    e.id && (t.chooseUserId = e.id)
                }
                )),
                T["a"].$on("refresh-choose-user", (function(e) {
                    (Array.isArray(t.curView) ? t.curView.includes("choose-user") : "choose-user" === t.curView) && t.chooseUserId === e.id && (t.selectSettings = Object.assign(t.selectSettings, e))
                }
                )),
                T["a"].$on("modaljump", (function() {
                    var e = t.curView.length - 1;
                    t.$refs.contain[e].classList.remove("jump"),
                    setTimeout((function() {
                        t.$refs.contain[e].classList.add("jump")
                    }
                    ), 50),
                    setTimeout((function() {
                        t.$refs.contain[e].classList.remove("jump")
                    }
                    ), 500)
                }
                ))
            },
            watch: {
                curView: function() {
                    if ("" === this.curView)
                        return l["m"].set(!1),
                        [];
                    "String" === this.whichType(this.curView) && (this.curView = [this.curView])
                },
                querygroup: {
                    deep: !0,
                    handler: function() {
                        var t = this;
                        (Array.isArray(this.curView) ? this.curView.includes("choose-user") : "choose-user" === this.curView) && this.querygroup && T["a"].$emit("refresh-choose-user", {
                            id: "chooseUserRemove",
                            defaultList: this.querygroup.member_infos.filter((function(e) {
                                return t.canremove(e.uid)
                            }
                            ))
                        })
                    }
                }
            },
            components: {
                modal2: sr,
                modal3: hr,
                modal4: jr,
                applyJoinGroup: Tr,
                chooseUser: di,
                videoModal: Ci,
                manageAdmin: Rr,
                updateToAffi: ri
            },
            methods: {
                indexStyle: function(t) {
                    return t === this.curView[this.curView.length - 1] ? "zIndex: 400005;" : "zIndex: 40000;"
                },
                close: function(t) {
                    var e = this;
                    if (this.$store.state.joinGroup && 1 === this.curView.length && this.$store.commit("exJoinGroup", null),
                    !this.lastPageId || t) {
                        var n = this.curView.length;
                        n > 1 ? setTimeout((function() {
                            e.curView.pop()
                        }
                        ), 200) : setTimeout((function() {
                            e.curView = ""
                        }
                        ), 200),
                        this.$refs.contain[n - 1].classList.add("jumpout"),
                        1 === n && this.$refs.mask.classList.add("fadeout")
                    } else
                        T["a"].$emit("emitLastPageId" + this.lastPageId)
                },
                canremove: function(t) {
                    return +t !== +l["f"].basicinfo.id && (1 === this.checkId(l["f"].basicinfo.id) ? +l["f"].basicinfo.id !== +t : 2 === this.checkId(l["f"].basicinfo.id) && 3 === this.checkId(t))
                },
                checkId: function(t) {
                    if (this.querygroup.owner == t)
                        return 1;
                    var e = this.querygroup.admins.includes(t);
                    return e ? 2 : 3
                },
                animationend: function() {
                    var t = this;
                    setTimeout((function() {
                        t.$refs.box[t.curView.length - 1].classList.remove("jump")
                    }
                    ), 300)
                }
            },
            created: function() {
                var t = this;
                T["a"].$on("closeModal2", (function() {
                    t.close()
                }
                )),
                T["a"].$on("showVideo", (function(e) {
                    t.curView = "videoModal",
                    t.src = e
                }
                ))
            },
            destroyed: function() {
                document.body.style.overflow = "auto"
            }
        }
          , Ai = Ti
          , Pi = (n("3501"),
        Object(_["a"])(Ai, cn, un, !1, null, "50abf18a", null))
          , Si = Pi.exports
          , Di = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "back hvhd",
                on: {
                    click: t.handleclick
                }
            }, [n("div", {
                staticClass: "backicon"
            }), n("span", {
                staticClass: "font14 fff"
            }, [t._v("返回所有消息")])])
        }
          , qi = [];
        function Mi(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Ei(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Mi(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Mi(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Ri = {
            mixins: [nt["a"], A["a"]],
            computed: Ei({}, Object(O["d"])(["selectId", "chatlistcount"])),
            methods: Ei({}, Object(O["c"])(["exshowunfollow", "selectSession"]))
        }
          , Ni = Ri
          , Li = (n("a10b"),
        Object(_["a"])(Ni, Di, qi, !1, null, "adc20bc8", null))
          , Gi = Li.exports;
        T["a"].$on("handleReport", (function(t) {
            var e = t.old_clientId
              , n = t.new_clientId;
            Wi(e, n)
        }
        ));
        var Ui = $.cometd;
        Ui.websocketEnabled = !1;
        var Bi = {
            WebimComet: function(t) {
                var e = this
                  , n = this
                  , r = null
                  , i = null
                  , s = null
                  , o = !0;
                this.start = function(t) {
                    s = null,
                    a["b"].webimnas().then((function(e) {
                        if (e.error)
                            o && (o = !1),
                            n.reconnectDelay(),
                            t && t();
                        else {
                            i = e.channel,
                            r = e.server;
                            var s = r + "im";
                            Ui.init({
                                url: s
                            }, (function(e) {
                                if (e.clientId && l["g"].clientId != e.clientId) {
                                    var n = l["g"].clientId;
                                    Wi(n, e.clientId)
                                }
                                l["g"].setData("clientId", e.clientId),
                                o && (o = !1),
                                t && t()
                            }
                            )),
                            Ui.addListener("/meta/handshake", n.metaHandshake),
                            Ui.addListener("/meta/connect", n.metaConnect)
                        }
                    }
                    )).catch((function() {
                        t && t()
                    }
                    ))
                }
                ,
                this.reconnectDelay = function() {
                    console.log("重连reconnectDelay"),
                    !s && (s = setTimeout((function() {
                        T["a"].$emit("initconnect"),
                        e.start((function() {
                            setTimeout((function() {
                                l["l"].setData(4e3),
                                T["a"].$emit("refreshdata")
                            }
                            ), 500)
                        }
                        ))
                    }
                    ), 3e3))
                }
                ,
                this.metaHandshake = function(t) {
                    t.successful ? Ui.subscribe(i, n.receive) : t.failure && "error" == t.failure.exception && "error" == t.failure.reason && (Ui.getTransport() && Ui.getTransport().abort(),
                    Ui.disconnect(),
                    n.reconnectDelay())
                }
                ,
                this.receive = function(e) {
                    console.log("cometdMsg下推", e),
                    t.onMessageSend(e.data)
                }
                ,
                this.publish = function(t) {
                    try {
                        Ui.publish("/im/req", t)
                    } catch (e) {}
                }
                ,
                this.metaConnect = function(e) {
                    e.successful || (Ui.getTransport() && Ui.getTransport().abort(),
                    Ui.disconnect(),
                    n.reconnectDelay()),
                    t.onConnect(e.successful)
                }
                ,
                this.close = function() {
                    null != Ui.getTransport() && Ui.getTransport().abort(),
                    Ui.disconnect(),
                    n.reconnectDelay()
                }
                ,
                this.getStatus = function() {
                    return Ui.getStatus()
                }
            }
        };
        function Wi(t, e) {
            if (Global.sid) {
                var n = {
                    sid: Global.sid,
                    type: 3,
                    client_id: e,
                    client_id_old: t
                };
                a["a"].report({
                    data: JSON.stringify(n)
                })
            }
        }
        var zi = Bi;
        function Vi(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Yi(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Vi(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Vi(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        document.getElementById("globaAudio");
        var Fi = {
            mixins: [nt["a"], A["a"], Ee, Ae],
            data: function() {
                return {
                    curView: "",
                    start: -1,
                    startup: !1,
                    basicinfod: l["f"].basicinfo,
                    unloadedchatlist: !1,
                    curusercardmsg: null,
                    styleObj: {
                        left: 0,
                        top: 0,
                        right: 0,
                        webkitTransform: "none",
                        MozTransform: "none",
                        msTransform: "none",
                        OTransform: "none",
                        transform: "none"
                    }
                }
            },
            mounted: function() {
                window.goChat = !0,
                this.init(),
                window.addEventListener("wheel", (function(t) {
                    document.querySelector(".chat").scrollLeft <= 0 && t.deltaX < 0 && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                }
                ), {
                    passive: !1
                })
            },
            components: {
                message: Mt,
                vText: _e,
                Search: $e,
                Chatlist: Qe,
                User: ze,
                Modalcontain: Si,
                startup: x,
                Searchlist: an,
                Back: Gi,
                usercard: wn
            },
            computed: Yi({}, Object(O["d"])(["selectId", "isWinFocus", "chatlist", "topuser", "searchstate", "showunfollow", "chatlistcount", "chatrecords", "groupmemberset", "querygroup", "remarklist", "unfollowlist", "isopenvoice", "isopenwebnotif"]), {}, Object(O["b"])(["getuserremark"])),
            methods: Yi({}, Object(O["c"])(["changemodalId", "fillremarklist", "exvoice", "changePubRemindType"]), {
                init: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (l["f"].basicinfo) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3,
                                    this.initMyInfo();
                                case 3:
                                    this.startup = !0,
                                    this.initremindtype(),
                                    this.initremarklist(),
                                    this.initsilent(),
                                    this.initchatlist((function() {
                                        e.initconn((function() {}
                                        ))
                                    }
                                    ), 1),
                                    this.initemotions(),
                                    T["a"].$on("getMoreAtUser", (function(t) {
                                        e.start = t,
                                        e.$refs.cardcontaininfo.curView = "modal3"
                                    }
                                    )),
                                    T["a"].$on("checkGid", (function(t) {
                                        t && T["a"].$emit("join"),
                                        e.$refs.cardcontaininfo.curView = "modal2"
                                    }
                                    )),
                                    T["a"].$on("refreshdata", (function() {
                                        e.refreshData()
                                    }
                                    ));
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                initMyInfo: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    a["a"].getbasicmsg();
                                case 3:
                                    if (e = t.sent,
                                    !e.error) {
                                        t.next = 11;
                                        break
                                    }
                                    if (setTimeout((function() {
                                        d["a"].clearBulletinData()
                                    }
                                    ), 0),
                                    21301 != e.error_code) {
                                        t.next = 9;
                                        break
                                    }
                                    return this.$router.push({
                                        path: "/",
                                        query: {
                                            to_uid: this.$route.query.to_uid,
                                            check_gid: this.$route.query.check_gid,
                                            source_from: this.$route.query.source_from
                                        }
                                    }),
                                    t.abrupt("return");
                                case 9:
                                    t.next = 17;
                                    break;
                                case 11:
                                    if (!e) {
                                        t.next = 17;
                                        break
                                    }
                                    return n = {
                                        avatar_large: u["b"](e.profileImageUrl),
                                        description: e.description,
                                        direct: "right",
                                        id: e.id,
                                        msg_status: 0,
                                        name: e.screen_name,
                                        verified_type: e.verified_type,
                                        verified: e.verified,
                                        verified_type_ext: e.verified_type_ext,
                                        profile_url: "//www.weibo.com/u/" + e.id
                                    },
                                    l["f"].setData("basicinfo", n),
                                    this.basicinfod = n,
                                    d["a"].checkUserId(),
                                    t.abrupt("return");
                                case 17:
                                    t.next = 22;
                                    break;
                                case 19:
                                    t.prev = 19,
                                    t.t0 = t["catch"](0),
                                    this.$router.push({
                                        path: "/",
                                        query: {
                                            to_uid: this.$route.query.to_uid,
                                            check_gid: this.$route.query.check_gid,
                                            source_from: this.$route.query.source_from
                                        }
                                    });
                                case 22:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[0, 19]])
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                initremindtype: function() {
                    var t = this;
                    a["a"].queryPubRemindType().then((function(e) {
                        e.error || "pub_dm" == e.business && t.changePubRemindType(e.type)
                    }
                    ))
                },
                initsilent: function() {
                    window.localStorage && ("true" != window.localStorage.isopenvoice ? this.exvoice(!1) : this.exvoice(!0))
                },
                execmsg: function(t) {
                    var e = this;
                    this.unloadedchatlist ? this.onMessage(t) : setTimeout((function() {
                        e.execmsg(t)
                    }
                    ), 1e3)
                },
                initconn: function(t) {
                    var e = this;
                    clearInterval(n);
                    var n = null
                      , r = !0
                      , i = null
                      , o = 0;
                    T["a"].$on("initconnect", (function() {
                        i = null
                    }
                    ));
                    var a = {
                        onMessageSend: function(t) {
                            Global.online ? (l["i"].pushData(t),
                            l["i"].allmsgs.length <= 1 && (!l["l"].faultTolerance && !l["l"].loaded || l["l"].loaded) && e.execmsg(t)) : l["i"].emptyData()
                        },
                        onConnect: function(t) {
                            if (i = t,
                            i)
                                r && (r = !1,
                                e.initchatlist(Object(s["a"])(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        while (1)
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return e.unloadedchatlist = !0,
                                                t.next = 3,
                                                e.handleJoinGroup();
                                            case 3:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                ))), 1)),
                                o = (new Date).getTime();
                            else {
                                var n = l["g"].clientId;
                                n && (l["g"].setData("clientId", ""),
                                T["a"].$emit("handleReport", {
                                    old_clientId: n,
                                    new_clientId: ""
                                }),
                                r && (r = !1))
                            }
                        }
                    }
                      , c = new zi.WebimComet(a);
                    l["h"].setData("cometconn", c),
                    l["h"].cometconn.start(),
                    n || (n = setInterval((function() {
                        !i && o && (new Date).getTime() - o > 3e4 && window.Global.online && setTimeout((function() {
                            i || (e.$store.commit("selectSession", -1),
                            l["h"].cometconn.close(),
                            l["i"].emptyData())
                        }
                        ), 4e3)
                    }
                    ), 15e3))
                },
                initemotions: function() {
                    a["a"].getemotions().then((function(t) {
                        Array.isArray(t) && t.length && (t.forEach((function(e, n) {
                            t[n].icon = Object(u["b"])(e.icon),
                            t[n].url = Object(u["b"])(e.url)
                        }
                        )),
                        l["a"].setData(t))
                    }
                    ))
                },
                initremarklist: function() {
                    var t = this;
                    a["a"].remarklist().then((function(e) {
                        e.remarks && e.remarks.length && t.fillremarklist(e.remarks)
                    }
                    ))
                },
                closemodal: function() {
                    this.changemodalId(-1)
                },
                addFavorite: function(t) {
                    window.Global.isMozilla || (document.all && window.external ? (window.external.addFavorite(location.href, "微博聊天网页版"),
                    t(!0)) : window.sidebar && window.sidebar.addPanel ? (window.sidebar.addPanel("微博聊天网页版", location.href, ""),
                    t(!0)) : window.Global.isMac ? t(!1, !0) : t(!1, !1))
                },
                showmodal: function() {
                    var t = this
                      , e = {};
                    this.addFavorite((function(r, i) {
                        e = r ? {
                            text: "收藏成功!",
                            btntext: "确定"
                        } : i ? {
                            text: "您所使用的浏览器无法完成此操作。请使用Command+D进行添加",
                            btntext: "我知道了"
                        } : {
                            text: "您所使用的浏览器无法完成此操作。请使用Ctrl+D进行添加",
                            btntext: "我知道了"
                        },
                        t.$modal({
                            icon: {
                                text: n("6008")
                            },
                            text: e.text,
                            okObj: {
                                text: e.btntext,
                                okFun: function() {}
                            },
                            width: 430,
                            closebtn: !0
                        })
                    }
                    ))
                }
            })
        }
          , Hi = Fi
          , Ji = (n("da27"),
        Object(_["a"])(Hi, r, i, !1, null, "684113c9", null))
          , Zi = Ji.exports
          , Ki = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "login relative"
            }, [n("div", {
                staticClass: "login_bg"
            }, [n("div", {
                staticClass: "qrcode tc"
            }, [t.qrdata ? n("div", {
                staticClass: "qr_contain relative"
            }, [-1 == t.qrstatus || 0 == t.qrstatus || 1 == t.qrstatus ? n("img", {
                staticClass: "qrcode_img",
                attrs: {
                    src: t.qrdata.image,
                    alt: ""
                }
            }) : t._e(), 1 == t.qrstatus ? n("span", {
                staticClass: "qr_bg absolute"
            }) : t._e(), 1 == t.qrstatus ? n("div", {
                staticClass: "qr_cont absolute absolute_center flex flex_column align-items_c"
            }, [n("p", {
                staticClass: "icon"
            }), n("span", {
                staticClass: "text font14 fff"
            }, [t._v("扫码成功")])]) : t._e()]) : t._e(), 3 == t.qrstatus ? n("i", {
                staticClass: "icon fff W_ficon"
            }, [t._v("")]) : t._e(), 0 == t.qrstatus || -1 == t.qrstatus ? n("div", {
                staticClass: "tips fff font16"
            }, [t._v("\n        用微博手机版扫描登录聊天\n      ")]) : t._e(), 1 == t.qrstatus ? n("div", {
                staticClass: "tips fff font16"
            }, [t._v("请在手机上点击确认即登录")]) : t._e(), 3 == t.qrstatus ? n("div", {
                staticClass: "tips fff font16 sp"
            }, [t._v("该二维码已过期")]) : t._e()]), 0 == t.qrstatus || -1 == t.qrstatus ? n("div", {
                staticClass: "statement tc font14"
            }, [t._m(0), t._m(1)]) : n("div", {
                staticClass: "statement tc font14"
            }, [3 == t.qrstatus ? n("a", {
                staticClass: "links",
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: t.reload
                }
            }, [t._v("重新刷新")]) : t._e(), 1 == t.qrstatus ? n("a", {
                staticClass: "links",
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: t.back
                }
            }, [t._v("返回二维码登录")]) : t._e()])]), n("p", {
                staticClass: "copyright tc"
            }, [t._v("Copyright © 2009-2019 WEIBO 北京微梦创科网络技术有限公司")])])
        }
          , Qi = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("p", [t._v("\n        还没有微博？\n        "), n("a", {
                staticClass: "links",
                attrs: {
                    target: "_blank",
                    href: "//weibo.com/signup/signup.php"
                }
            }, [t._v("立即注册")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("p", [t._v("\n        还没有微博手机版？\n        "), n("a", {
                staticClass: "links",
                attrs: {
                    target: "_blank",
                    href: "//c.weibo.cn/"
                }
            }, [t._v("赶快去安装")])])
        }
        ];
        function Xi(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ts(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Xi(Object(n), !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Xi(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var es = {
            data: function() {
                return {
                    qrdata: null,
                    qrstatus: -1,
                    timer: null,
                    islogin: !1
                }
            },
            mounted: function() {
                var t = window.sinaSSOController.getSinaCookie();
                t && t.uid && !window.goChat ? this.loginWithOutInfo() : this.getqrcodeimg()
            },
            methods: ts({}, Object(O["c"])([]), {
                loginWithOutInfo: function() {
                    this.$router.push({
                        path: "chat",
                        query: {
                            to_uid: this.$route.query.to_uid,
                            check_gid: this.$route.query.check_gid,
                            source_from: this.$route.query.source_from
                        }
                    }),
                    this.islogin = !0
                },
                initmyinfo: function() {
                    var t = this;
                    a["a"].getbasicmsg().then((function(e) {
                        if (e.error) {
                            if (setTimeout((function() {
                                d["a"].clearBulletinData()
                            }
                            ), 0),
                            21301 == e.error_code)
                                return !1
                        } else {
                            setTimeout((function() {
                                t.islogin = !0,
                                t.clearTimer()
                            }
                            ));
                            var n = {
                                avatar_large: u["b"](e.profileImageUrl),
                                description: e.description,
                                direct: "right",
                                id: e.id,
                                msg_status: 0,
                                name: e.screen_name,
                                verified_type: e.verified_type,
                                verified: e.verified,
                                verified_type_ext: e.verified_type_ext,
                                profile_url: "//www.weibo.com/u/" + e.id
                            };
                            l["f"].setData("basicinfo", n);
                            var r = {
                                path: "chat",
                                query: {}
                            }
                              , i = u["k"](location.href);
                            i && i.to_uid && (r.query.to_uid = i.to_uid),
                            i && i.check_gid && (r.query.check_gid = i.check_gid),
                            i && i.source_from && (r.query.source_from = i.source_from),
                            t.$router.push(r)
                        }
                        d["a"].checkUserId()
                    }
                    ))
                },
                getqrcodeimg: function() {
                    var t = this;
                    a["b"].getqrcode().then((function(e) {
                        e.data && (t.qrdata = e.data,
                        t.islogin || t.pollingcheck(200))
                    }
                    )).catch((function(t) {}
                    ))
                },
                clearTimer: function() {
                    clearInterval(this.timer),
                    this.timer = null
                },
                pollingcheck: function(t) {
                    var e = this;
                    this.timer = setInterval((function() {
                        t--;
                        var n = {
                            qrid: e.qrdata.qrid
                        };
                        a["b"].checkqrcode(n).then((function(t) {
                            e.getqrstatus(t)
                        }
                        )),
                        t || e.clearTimer()
                    }
                    ), 3e3)
                },
                getqrstatus: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e) {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.retcode) {
                                        t.next = 10;
                                        break
                                    }
                                    if (this.qrstatus = [50114001, 50114002, 2e7, 50114003, 50114015].indexOf(e.retcode),
                                    !(this.qrstatus > -1)) {
                                        t.next = 10;
                                        break
                                    }
                                    if (!(this.qrstatus > 1)) {
                                        t.next = 10;
                                        break
                                    }
                                    if (this.clearTimer(),
                                    2 != this.qrstatus) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 8,
                                    this.login(e.data.alt);
                                case 8:
                                    this.loginWithOutInfo();
                                case 9:
                                    this.qrstatus > 2 && (this.qrstatus = 3);
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                reload: function() {
                    location.reload()
                },
                back: function() {
                    this.qrstatus = 0,
                    this.getqrcodeimg()
                },
                login: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e) {
                        var n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = {
                                        params: {
                                            alt: e
                                        }
                                    },
                                    t.next = 3,
                                    new Promise((function(t) {
                                        a["c"].login(n).then((function(e) {
                                            var n = e.crossDomainUrlList.length;
                                            e.crossDomainUrlList.forEach((function(e, r) {
                                                a["b"].crossDomain(e).then((function(e) {
                                                    r == n - 1 && t()
                                                }
                                                ))
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    ));
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            })
        }
          , ns = es
          , rs = (n("a681"),
        Object(_["a"])(ns, Ki, Qi, !1, null, "3879ba69", null))
          , is = rs.exports
          , ss = [{
            path: "/",
            component: is
        }, {
            path: "/chat",
            component: Zi
        }, {
            path: "*",
            redirect: "/"
        }];
        e["a"] = ss
    },
    a264: function(t, e, n) {},
    a3fe: function(t, e, n) {},
    a4ef: function(t, e, n) {},
    a681: function(t, e, n) {
        "use strict";
        var r = n("fcb7")
          , i = n.n(r);
        i.a
    },
    aa6f: function(t, e, n) {
        t.exports = n.p + "img/placeholder.0765dad2.png"
    },
    abda: function(t, e, n) {
        "use strict";
        var r = n("2045")
          , i = n.n(r);
        i.a
    },
    af7d: function(t, e, n) {
        "use strict";
        var r = n("9bff")
          , i = n.n(r);
        i.a
    },
    b30b: function(t, e, n) {},
    b35e: function(t, e, n) {
        "use strict";
        n("8e6e"),
        n("456d"),
        n("ac4d"),
        n("8a81"),
        n("55dd"),
        n("ac6a"),
        n("7514"),
        n("96cf");
        var r = n("3b8d")
          , i = (n("20d6"),
        n("6762"),
        n("2fdb"),
        n("7f7f"),
        n("6b54"),
        n("87b3"),
        n("4917"),
        n("c5f6"),
        n("ee1d"),
        n("bd86"))
          , s = n("365c")
          , o = n("bbd5")
          , a = n("2f62")
          , c = n("0d71")
          , u = n.n(c)
          , l = n("fcfc")
          , d = n("0bca")
          , f = n("72b1")
          , h = n("8e1e")
          , m = n("8917");
        function p(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function g(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? p(Object(n), !0).forEach((function(e) {
                    Object(i["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var v = {
            data: function() {
                return {
                    linkreg: /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g,
                    fileUploader: null,
                    dragUploader: null,
                    popupuser: !1
                }
            },
            methods: g({}, Object(a["c"])(["selectSession", "fillusercardinfo", "changefollow", "exshowunfollow", "fillunfollowlist", "changemodalId", "extotalChatlist", "fillchatlist", "addchatlist", "exallLoaded", "updateunfollowlist", "exchatlistcursor", "updatechatlist", "exnomorerecords", "exquerygroup", "exlastreadmid", "extotalUnfollowlist", "exallunfollowLoaded"]), {
                whichType: function(t) {
                    return !0 === Number.isNaN(t) ? "NaN" : Object.prototype.toString.call(t).match(/\w+/g)[1]
                },
                handleJoinGroup: function() {
                    var t = this;
                    return new Promise((function(e) {
                        var n = Object(o["n"])(Object(o["k"])(location.href), "check_gid")
                          , r = n || void 0;
                        r && t.handleGidExist(r),
                        t.$nextTick((function() {
                            return e()
                        }
                        ))
                    }
                    ))
                },
                handleGidExist: function(t) {
                    var e = this
                      , r = {
                        params: {
                            gids: t
                        }
                    };
                    s["a"].isMember(r).then((function(r) {
                        var i = r[t];
                        i ? e.selectUser(t, null) : s["a"].querygroup({
                            params: {
                                id: t,
                                query_affi_friendship: 1
                            }
                        }).then((function(t) {
                            if (t.error)
                                e.$modal({
                                    icon: {
                                        text: n("6008")
                                    },
                                    text: t.error,
                                    width: 430,
                                    closebtn: !0,
                                    contentStyle: !0
                                });
                            else {
                                var r = String(Object(o["n"])(Object(o["k"])(location.href), "source_from"));
                                0 === r.indexOf("11") && (m["a"].feedGroupCard.addCount(),
                                l["m"].set(!0)),
                                e.$store.commit("exJoinGroup", t),
                                e.$root.$children[0].$children[0].$refs.cardcontaininfo.curView = "modal2"
                            }
                        }
                        ))
                    }
                    ))
                },
                isFullscreen: function() {
                    return document.fullscreen || document.msFullscreen || document.mozFullScreen || document.webkitFullscreen || document.webkitIsFullScreen || null != document.msFullscreenElement || !1
                },
                suda: function(t, e) {
                    window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack(t, e)
                },
                cancelFileSend: function(t) {
                    if (!this.cannotcalcelagain) {
                        this.$root.$children[0].$children[0].$refs.textinfo.fileUploader.removeFile(t),
                        this.$root.$children[0].$children[0].$refs.textinfo.dragUploader && this.$root.$children[0].$children[0].$refs.textinfo.dragUploader.removeFile(t);
                        var e = h["a"].findIndexAndLt(this.$store.state.selectId)
                          , n = e.lt
                          , r = e.i;
                        this.$store.commit("update" + n, {
                            notTop: !0,
                            i: r,
                            param: {
                                fileToken: t.fileToken,
                                errorsend: !0,
                                text: t.name
                            }
                        }),
                        this.cannotcalcelagain = !0
                    }
                },
                listHandle: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.$store.state.selectId
                      , e = this.$store.state.showunfollow ? "unfollowlist" : "chatlist"
                      , n = this.finditemIndex(this.$store.state[e], t);
                    return n < 0 && (e = "topuser",
                    n = this.finditemIndex(this.$store.state[e], t)),
                    {
                        list: e,
                        i: n
                    }
                },
                isFansGroup: function(t) {
                    return Array.isArray(t.affi_type) && t.affi_type.includes(1)
                },
                getRemindSetting: function(t) {
                    return this.isFansGroup(t) ? 0 == t.user_custom_msg_setting ? 2 : 1 : t.remindSetting
                },
                handleclick: function(t) {
                    this.$store.commit("selectSession", -1),
                    this.$store.commit("exshowunfollow", !1),
                    this.$store.commit("exallunfollowLoaded", !1),
                    this.$store.commit("exunfollowlistcursor", 0),
                    this.$store.commit("exallLoaded", !1),
                    this.$store.commit("exchatlistcursor", 0),
                    this.$store.commit("exchatlistcount", 30),
                    this.initchatlist((function() {
                        d["a"].$emit("inittopval", (function() {}
                        ))
                    }
                    ))
                },
                isgroup: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.$store.state.selectId
                      , e = t + "";
                    return !(e.length < 15)
                },
                intopuser: function(t) {
                    if (this.$store.state.topuser.length) {
                        var e = this.$store.state.topuser.findIndex((function(e) {
                            return e.id == t
                        }
                        ));
                        return e >= 0
                    }
                    return !1
                },
                getpersondetail: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.getrelative(e.id),
                                    t.next = 3,
                                    this.getusercardinfo(e.id);
                                case 3:
                                    this.personrecordreq(e.id);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                loadmoreText: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = e.text,
                                    e.isLargeDm) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return", r);
                                case 3:
                                    if (!l["c"][e.mid]) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", l["c"][e.mid]);
                                case 5:
                                    if (!n) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.next = 8,
                                    s["a"].getlastgroupmsg({
                                        params: {
                                            mid: e.mid,
                                            id: this.$store.state.selectId
                                        }
                                    });
                                case 8:
                                    i = t.sent,
                                    !i.error && i && i.message && (r = i.message.content,
                                    l["c"].setText(e.mid, r)),
                                    t.next = 16;
                                    break;
                                case 12:
                                    return t.next = 14,
                                    s["a"].showbatch({
                                        params: {
                                            dmids: e.mid
                                        }
                                    });
                                case 14:
                                    i = t.sent,
                                    !i.error && i && i.length && (r = i[0].text,
                                    l["c"].setText(e.mid, r));
                                case 16:
                                    return t.abrupt("return", r);
                                case 17:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                curusercardinfo: function(t) {
                    var e = this.$store.state.remarklist.find((function(e) {
                        return e.uid == t.id
                    }
                    ));
                    return t.remark = e ? e.remark : "",
                    t
                },
                isfollow: function(t, e) {
                    var n = {
                        params: {
                            uids: t
                        }
                    };
                    s["a"].relative(n).then((function(t) {
                        var n = [0, 1, 4];
                        n.includes(t[0].result) ? e && e(!1) : e && e(!0)
                    }
                    ))
                },
                getrelative: function(t) {
                    var e = this;
                    this.isfollow(t, (function(t) {
                        t ? !e.followuser && e.changefollow(!0) : e.changefollow(!1)
                    }
                    ))
                },
                findItem: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.$store.state.selectId;
                    return t.find((function(t) {
                        return t.id == e
                    }
                    ))
                },
                findremark: function(t, e) {
                    var n = this.$store.state.remarklist.find((function(e) {
                        return e.uid == t
                    }
                    ));
                    return n ? n.remark : e
                },
                findremarkpy: function(t, e) {
                    var n = this.$store.state.remarklist.find((function(e) {
                        return e.uid == t
                    }
                    ));
                    return n ? n.qp : e
                },
                finditemIndex: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.$store.state.selectId;
                    return t.findIndex((function(t) {
                        return t.id == e
                    }
                    ))
                },
                showUserInfo: function(t, e, n, i) {
                    var s = this;
                    if (e) {
                        var o = this.$parent;
                        5 == this.$store.state.modalId && this.$store.commit("changemodalId", -1),
                        this.$nextTick(Object(r["a"])(regeneratorRuntime.mark((function r() {
                            var a, c, u, d;
                            return regeneratorRuntime.wrap((function(r) {
                                while (1)
                                    switch (r.prev = r.next) {
                                    case 0:
                                        if (3 != e) {
                                            r.next = 10;
                                            break
                                        }
                                        return o.styleObj.top = "50px",
                                        o.styleObj.left = "15%",
                                        o.styleObj.right = "auto",
                                        o.styleObj.webkitTransform = "translate(-50%,0)",
                                        o.styleObj.MozTransform = "translate(-50%,0)",
                                        o.styleObj.msTransform = "translate(-50%,0)",
                                        o.styleObj.OTransform = "translate(-50%,0)",
                                        o.styleObj.transform = "translate(-50%,0)",
                                        o.curusercardmsg = s.usercardinfo,
                                        s.$store.commit("changemodalId", 5),
                                        r.abrupt("return");
                                    case 10:
                                        if (a = document.querySelector(".right"),
                                        c = a.getBoundingClientRect(),
                                        u = t.target.getBoundingClientRect(),
                                        1 != e) {
                                            r.next = 33;
                                            break
                                        }
                                        if (o.styleObj.top = u.top - c.top + 30 + "px",
                                        o.styleObj.left = "55px",
                                        o.styleObj.webkitTransform = "none",
                                        o.styleObj.MozTransform = "none",
                                        o.styleObj.msTransform = "none",
                                        o.styleObj.OTransform = "none",
                                        o.styleObj.transform = "none",
                                        n) {
                                            r.next = 23;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 23:
                                        if (1 != n) {
                                            r.next = 27;
                                            break
                                        }
                                        o.curusercardmsg = s.usercardinfo,
                                        r.next = 31;
                                        break;
                                    case 27:
                                        if (2 != n) {
                                            r.next = 31;
                                            break
                                        }
                                        return d = s.curusercardinfo(i.userinfo),
                                        r.next = 31,
                                        new Promise((function(t) {
                                            s.getuserdetail(i.userinfo.id, (function(e) {
                                                e.error || (d.description = e.description,
                                                d.avatar_large = e.avatar_large),
                                                o.curusercardmsg = d,
                                                t()
                                            }
                                            ))
                                        }
                                        ));
                                    case 31:
                                        r.next = 34;
                                        break;
                                    case 33:
                                        2 == e && (o.styleObj.top = u.top - c.top + 30 + "px",
                                        o.styleObj.right = "55px",
                                        o.styleObj.left = "auto",
                                        o.styleObj.webkitTransform = "none",
                                        o.styleObj.MozTransform = "none",
                                        o.styleObj.msTransform = "none",
                                        o.styleObj.OTransform = "none",
                                        o.styleObj.transform = "none",
                                        o.curusercardmsg = l["f"].basicinfo);
                                    case 34:
                                        5 != s.$store.state.modalId && s.$store.commit("changemodalId", 5);
                                    case 35:
                                    case "end":
                                        return r.stop()
                                    }
                            }
                            ), r)
                        }
                        ))))
                    }
                },
                initchatlist: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r, i, a = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return r = this.$store.state.selectId,
                                    i = {
                                        params: {
                                            add_virtual_user: 3,
                                            is_include_group: 0,
                                            need_back: "0,0"
                                        }
                                    },
                                    this.$store.state.chatlistcount > 500 ? (i.params.count = 50,
                                    i.params.cursor = this.$store.state.chatlist.length + this.$store.state.topuser.length) : (i.params.count = this.$store.state.chatlistcount,
                                    this.$store.state.memorytop && (i.params.count = 80)),
                                    t.next = 5,
                                    new Promise((function(t) {
                                        s["a"].getchatlist(i).then((function(s) {
                                            var c = a.getlist(s, "chatlist")
                                              , u = -1
                                              , l = !1
                                              , d = null;
                                            if (-1 != r && !a.intopuser(r) && (u = a.finditemIndex(a.$store.state.chatlist, r),
                                            u >= 0)) {
                                                var f = c.findIndex((function(t) {
                                                    return t.id == r
                                                }
                                                ))
                                                  , h = Object(o["n"])(Object(o["k"])(location.href), "to_uid");
                                                f < 0 ? (d = a.$store.state.chatlist[u],
                                                l = !0) : 1 == n && h == r && (d = c[f],
                                                l = !0)
                                            }
                                            a.$store.commit("extotalChatlist", s.totalNumber),
                                            a.$store.state.chatlistcount > 500 ? a.$store.commit("addchatlist", c) : (l && c.unshift(d),
                                            a.$store.commit("fillchatlist", c)),
                                            a.$nextTick((function() {
                                                e && 1 != n ? e && e(i, s) : a.totopuser((function() {
                                                    e && e()
                                                }
                                                )),
                                                t()
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    ));
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getgroupnewuser: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r, i = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return r = {},
                                    t.next = 3,
                                    new Promise((function(t) {
                                        i.getginfo(e, (function(e) {
                                            e ? (r = {
                                                name: e.system_name,
                                                profile_image_url: Object(o["b"])(e.avatar_s),
                                                avatar_large: Object(o["b"])(e.avatar),
                                                round_profile_image_url: Object(o["b"])(e.round_avatar_s),
                                                round_avatar_large: Object(o["b"])(e.round_avatar),
                                                description: e.summary,
                                                type: 2,
                                                id: e.id
                                            },
                                            t()) : n && n()
                                        }
                                        ))
                                    }
                                    ));
                                case 3:
                                    return t.next = 5,
                                    new Promise((function(t) {
                                        i.getgrecords(e, 0, (function(e) {
                                            if (e) {
                                                if (e.messages && e.messages.length) {
                                                    var i = e.messages[e.messages.length - 1]
                                                      , s = {
                                                        fid: i.fids ? i.fids[0] : "",
                                                        created_at: 1e3 * i.time,
                                                        mid: i.id,
                                                        sender_id: i.from_uid,
                                                        sender_screen_name: Object(o["n"])(i, "from_user.screen_name") || i.from_uid,
                                                        text: i.content,
                                                        message_type: i.type,
                                                        unread_count: 0,
                                                        local: !0
                                                    };
                                                    Object.assign(r, s)
                                                }
                                                t()
                                            } else
                                                n && n()
                                        }
                                        ))
                                    }
                                    ));
                                case 5:
                                    return t.next = 7,
                                    new Promise((function(t) {
                                        s["a"].checksetnotice({
                                            params: {
                                                dgid: e
                                            }
                                        }).then((function(e) {
                                            e.error ? t() : (r.remindSetting = 1 == e.switch ? 1 : 2,
                                            t())
                                        }
                                        ))
                                    }
                                    ));
                                case 7:
                                    n && n(r);
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getpernewuser: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var r, i = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return r = {},
                                    t.next = 3,
                                    new Promise((function(t) {
                                        i.getuserdetail(e, (function(e) {
                                            e.error ? n && n() : (r = {
                                                text: "",
                                                created_at: +new Date,
                                                name: e.screen_name,
                                                id: e.id,
                                                profile_image_url: Object(o["b"])(e.profile_image_url),
                                                avatar_large: Object(o["b"])(e.avatar_large),
                                                description: e.description,
                                                verified_type: e.verified_type,
                                                verified: e.verified,
                                                verified_type_ext: e.verified_type_ext,
                                                unread_count: 0,
                                                type: 1
                                            },
                                            t())
                                        }
                                        ))
                                    }
                                    ));
                                case 3:
                                    return t.next = 5,
                                    new Promise((function(t) {
                                        i.getperrecords(e, 0, (function(e) {
                                            if (!e.error && e.direct_messages.length) {
                                                e.direct_messages.length;
                                                var n = e.direct_messages[0]
                                                  , i = {
                                                    created_at: new Date(n.created_at).getTime(),
                                                    dm_type: n.dm_type,
                                                    mid: n.id,
                                                    sender_id: n.sender_id,
                                                    sender_screen_name: n.sender_screen_name,
                                                    text: n.text,
                                                    local: !0
                                                };
                                                Object.assign(r, i)
                                            }
                                            t()
                                        }
                                        ))
                                    }
                                    ));
                                case 5:
                                    return t.next = 7,
                                    new Promise((function(t) {
                                        s["a"].checkisblockuser({
                                            params: {
                                                uids: e
                                            }
                                        }).then((function(n) {
                                            n.error ? t() : (r.is_blocked = n[e].blocked,
                                            t())
                                        }
                                        ))
                                    }
                                    ));
                                case 7:
                                    n && n(r);
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                selectUser: function(t, e) {
                    var n = this
                      , r = this.listHandle(t)
                      , i = r.list
                      , s = r.i;
                    if (this.$store.state.selectId != t)
                        if (s >= 0)
                            this.$store.commit("update" + i, {
                                i: s
                            }),
                            this.$store.commit("selectSession", t),
                            e && e();
                        else {
                            this.isgroup(t) ? this.getgroupnewuser(t, (function(r) {
                                r && (n.$store.commit("unshiftchatlist", r),
                                n.$store.commit("selectSession", t)),
                                e && e()
                            }
                            )) : this.getpernewuser(t, (function(r) {
                                r && (n.$store.commit("unshiftchatlist", r),
                                n.$store.commit("selectSession", t)),
                                e && e()
                            }
                            ))
                        }
                    else
                        e && e()
                },
                totopuser: function(t) {
                    if (this.popupuser)
                        t && t();
                    else {
                        this.popupuser = !0;
                        var e = Object(o["n"])(Object(o["k"])(location.href), "to_uid");
                        this.$store.state.selectId != e && e ? this.selectUser(e, (function() {
                            t && t()
                        }
                        )) : t && t()
                    }
                },
                getuserdetail: function(t, e) {
                    var n = {
                        params: {
                            uid: t
                        }
                    };
                    s["a"].userdetail(n).then((function(t) {
                        t.error ? e && e(t) : (t.avatar_large = Object(o["b"])(Object(o["p"])(t.avatar_large, t.id)) || u.a,
                        e && e(t))
                    }
                    ))
                },
                setgroupnotice: function(t) {
                    var e = this;
                    this.$store.commit("changemodalId", -1);
                    var n, r = this.listHandle(t), i = r.list, o = r.i, a = this.$store.state[i][o], c = 1 === a.remindSetting ? "打开" : "关闭", u = 1 === a.remindSetting ? 2 : 1;
                    a.unread_count && (1 === a.remindSetting ? l["r"].add(a.unread_count) : l["r"].reduce(a.unread_count)),
                    n = this.isFansGroup(a) ? {
                        id: t,
                        user_custom_msg_setting: 2 === u ? 0 : 1,
                        affi_type: 1
                    } : {
                        call_from: "mobile",
                        dgid: t,
                        switch: u
                    },
                    s["a"].setnotice(n).then((function() {
                        e.finishModal("已".concat(c, "群提醒")),
                        e.$store.commit("update" + i, {
                            notTop: !0,
                            i: o,
                            param: {
                                remindSetting: u
                            }
                        })
                    }
                    ))
                },
                getlist: function(t, e) {
                    var n = this
                      , r = []
                      , i = [];
                    if ("{}" != JSON.stringify(t) && "{}" != JSON.stringify(t.contacts))
                        return t.contacts.forEach((function(t, s) {
                            var a = n.getRemindSetting(t.user)
                              , c = {
                                created_at: t.message.created_at,
                                dm_type: t.message.dm_type,
                                profile_image_url: Object(o["b"])(t.user.profile_image_url),
                                avatar_large: Object(o["b"])(t.user.avatar_large),
                                name: t.user.name,
                                mid: t.message.mid,
                                message_type: t.message.group_chat_message_type,
                                sub_type: t.message.sub_type,
                                text: t.message.text,
                                fid: t.message.att_ids ? t.message.att_ids[0] : "",
                                id: t.user.id,
                                sender_id: t.message.sender_id,
                                sender_screen_name: t.message.sender_screen_name,
                                is_blocked: t.user.is_blocked,
                                unread_count: t.unread_count,
                                is_top_user: t.user.is_top_user,
                                top_timestamp: t.user.top_timestamp,
                                type: t.user.type,
                                round_profile_image_url: Object(o["b"])(t.user.round_profile_image_url),
                                round_avatar_large: Object(o["b"])(t.user.round_avatar_large),
                                remindSetting: a,
                                affi_type: t.user.affi_type && t.user.affi_type.length ? t.user.affi_type : "",
                                is_block_all_public: t.is_block_all_public,
                                bulletin: t.bulletin,
                                verified_type: t.user.verified_type,
                                verified: t.user.verified,
                                verified_type_ext: t.user.verified_type_ext
                            };
                            t.message.url_objects && (c.url_objects = t.message.url_objects),
                            e && "chatlist" == e && t.user.is_top_user ? i.push(c) : r.push(c)
                        }
                        )),
                        i.length && (i = i.sort((function(t, e) {
                            return e.top_timestamp - t.top_timestamp
                        }
                        )),
                        this.$store.commit("filltopuser", i)),
                        r
                },
                getginfo: function(t, e) {
                    var n = this
                      , r = {
                        params: {
                            id: t
                        }
                    };
                    s["a"].querygroup(r).then((function(t) {
                        t.error ? (n.$store.commit("emptyquerygroup", null),
                        e()) : e(t)
                    }
                    ))
                },
                getnewgroupinfo: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.$store.state.selectId;
                    this.getginfo(e, (function(e) {
                        e && t.$store.commit("exquerygroup", e)
                    }
                    ))
                },
                updateBlock: function(t, e) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                      , r = {};
                    r = "topuser" === t ? {
                        i: e,
                        param: {
                            is_blocked: n
                        }
                    } : {
                        notTop: !0,
                        i: e,
                        param: {
                            is_blocked: n
                        }
                    },
                    this.$store.commit("update" + t, r);
                    var i = n ? "已屏蔽" : "已解除屏蔽";
                    this.finishModal(i)
                },
                finishModal: function(t) {
                    this.$modal({
                        icon: {
                            text: n("6e34")
                        },
                        text: t,
                        duration: 800
                    })
                },
                setshield: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.$store.state.selectId
                      , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , r = n ? "unblockuser" : "blockuser"
                      , i = n ? "解除屏蔽失败,请重试" : "屏蔽失败,请重试";
                    s["a"][r]({
                        uids: e
                    }).then((function(r) {
                        if (r.error)
                            t.$toast(i);
                        else {
                            var s = t.listHandle(e)
                              , o = s.list
                              , a = s.i;
                            n ? t.updateBlock(o, a, !1) : t.updateBlock(o, a)
                        }
                    }
                    ))
                },
                getgrecords: function(t, e, n) {
                    var r = {
                        params: {
                            count: 20,
                            id: t,
                            max_mid: e
                        }
                    };
                    e || (this.$store.commit("exlastreadmid", 0),
                    this.$store.commit("exnomorerecords", !1)),
                    l["n"].change(!0),
                    s["a"].getgroupmsg(r).then((function(t) {
                        l["n"].change(!1),
                        t.error ? n && n() : n && n(t)
                    }
                    ))
                },
                grouprecordreq: function(t) {
                    var e = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this.getgrecords(t, n, (function(i) {
                        if (i)
                            if (i.messages && i.messages.length) {
                                var s = i.messages;
                                e.$store.commit("exlastreadmid", s[0].id - 1);
                                var a = []
                                  , c = []
                                  , d = function() {
                                    var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                                        var e, n, i, d, h, m, p, g;
                                        return regeneratorRuntime.wrap((function(t) {
                                            while (1)
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    e = s.map(function() {
                                                        var t = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                                                            var n, r, i, s;
                                                            return regeneratorRuntime.wrap((function(t) {
                                                                while (1)
                                                                    switch (t.prev = t.next) {
                                                                    case 0:
                                                                        return e.from_uid == l["f"].basicinfo.id ? (n = "right",
                                                                        r = 0) : (n = "left",
                                                                        r = 1),
                                                                        i = {
                                                                            fid: e.fids && e.fids.length && e.fids[0],
                                                                            type: e.type,
                                                                            sub_type: e.sub_type,
                                                                            direct: n,
                                                                            msg_status: r,
                                                                            created_at: 1e3 * e.time,
                                                                            media_type: e.media_type,
                                                                            text: e.content,
                                                                            mid: e.id,
                                                                            comment: e.comment,
                                                                            pic_gifs: e.pic_infos && e.pic_infos[0],
                                                                            faith_status: e.faith_status,
                                                                            userinfo: {
                                                                                id: e.from_uid,
                                                                                name: Object(o["n"])(e, "from_user.screen_name") || e.from_uid,
                                                                                avatar_large: Object(o["b"])(Object(o["p"])(Object(o["n"])(e, "from_user.profile_image_url"), e.from_uid)) || u.a,
                                                                                profile_url: "//www.weibo.com/u/" + e.from_uid,
                                                                                description: "",
                                                                                direct: n,
                                                                                msg_status: r,
                                                                                verified_type: Object(o["n"])(e, "from_user.verified_type"),
                                                                                verified: Object(o["n"])(e, "from_user.verified"),
                                                                                verified_type_ext: Object(o["n"])(e, "from_user.verified_type_ext")
                                                                            }
                                                                        },
                                                                        e.url_objects && e.url_objects[0] && e.url_objects[0].info && (i.url_short = e.url_objects[0].info.url_short,
                                                                        i.url_objects = e.url_objects),
                                                                        t.next = 5,
                                                                        Object(f["a"])(i);
                                                                    case 5:
                                                                        return s = t.sent,
                                                                        s && Object.assign(i, s),
                                                                        t.abrupt("return", i);
                                                                    case 8:
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
                                                    }()),
                                                    n = !0,
                                                    i = !1,
                                                    d = void 0,
                                                    t.prev = 4,
                                                    h = e[Symbol.iterator]();
                                                case 6:
                                                    if (n = (m = h.next()).done) {
                                                        t.next = 16;
                                                        break
                                                    }
                                                    return p = m.value,
                                                    t.next = 10,
                                                    p;
                                                case 10:
                                                    g = t.sent,
                                                    a.push(g),
                                                    "card5" == g.cardtype && c.push({
                                                        mid: g.mid,
                                                        fid: g.fid
                                                    });
                                                case 13:
                                                    n = !0,
                                                    t.next = 6;
                                                    break;
                                                case 16:
                                                    t.next = 22;
                                                    break;
                                                case 18:
                                                    t.prev = 18,
                                                    t.t0 = t["catch"](4),
                                                    i = !0,
                                                    d = t.t0;
                                                case 22:
                                                    t.prev = 22,
                                                    t.prev = 23,
                                                    n || null == h.return || h.return();
                                                case 25:
                                                    if (t.prev = 25,
                                                    !i) {
                                                        t.next = 28;
                                                        break
                                                    }
                                                    throw d;
                                                case 28:
                                                    return t.finish(25);
                                                case 29:
                                                    return t.finish(22);
                                                case 30:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t, null, [[4, 18, 22, 30], [23, , 25, 29]])
                                    }
                                    )));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }();
                                d().then((function() {
                                    if (n)
                                        t == e.$store.state.selectId && (e.$store.commit("fillchatrecords", {
                                            value: a,
                                            more: !0
                                        }),
                                        c.length && e.$store.commit("addimgurls", {
                                            value: c,
                                            more: !0
                                        }),
                                        e.$nextTick((function() {
                                            var t = document.querySelector(".message-wrapper");
                                            t.scrollTop = t.scrollHeight - e.position
                                        }
                                        )));
                                    else {
                                        t == e.$store.state.selectId && (e.$store.commit("fillchatrecords", {
                                            value: a
                                        }),
                                        c.length && e.$store.commit("fillimgurl", c));
                                        var r = "chatlist"
                                          , i = e.$store.state[r].findIndex((function(e) {
                                            return e.id == t
                                        }
                                        ));
                                        if (i < 0 && (r = "topuser",
                                        i = e.$store.state[r].findIndex((function(e) {
                                            return e.id == t
                                        }
                                        ))),
                                        i >= 0 && (i.text != s[s.length - 1].content || i.sender_id != s[s.length - 1].from_uid)) {
                                            var o = s[s.length - 1]
                                              , u = o.content
                                              , l = o.from_uid
                                              , d = o.time
                                              , f = o.from_user;
                                            e.$store.commit("update" + r, {
                                                notTop: !0,
                                                i: i,
                                                param: {
                                                    errorsend: !1,
                                                    fileToken: "",
                                                    text: u,
                                                    sender_id: l,
                                                    created_at: 1e3 * d,
                                                    sender_screen_name: f ? f.screen_name : ""
                                                }
                                            })
                                        }
                                    }
                                    e.showloading = !1
                                }
                                ))
                            } else
                                e.showloading = !1,
                                e.$store.commit("exnomorerecords", !0)
                    }
                    ))
                },
                getusercardinfo: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                        var e, n = this, r = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e = r.length > 0 && void 0 !== r[0] ? r[0] : this.$store.state.selectId,
                                    t.next = 3,
                                    new Promise((function(t) {
                                        n.getuserdetail(e, (function(r) {
                                            if (r.error) {
                                                var i = n.$store.state.chatlist.find((function(t) {
                                                    return t.id == e
                                                }
                                                )) || n.$store.state.topuser.find((function(t) {
                                                    return t.id == e
                                                }
                                                )) || n.$store.state.unfollowlist.find((function(t) {
                                                    return t.id == e
                                                }
                                                ));
                                                if (i) {
                                                    var s = {
                                                        msg_status: 1,
                                                        direct: "left",
                                                        profile_url: "//www.weibo.com/u/" + i.id,
                                                        name: i.name || i.id,
                                                        id: i.id,
                                                        avatar_large: Object(o["b"])(Object(o["p"])(i.avatar_large, i.id)) || u.a,
                                                        remark: i.remark,
                                                        description: i.description,
                                                        verified_type: i.verified_type,
                                                        verified: i.verified,
                                                        verified_type_ext: i.verified_type_ext
                                                    };
                                                    e == n.$store.state.selectId && n.$store.commit("fillusercardinfo", s)
                                                }
                                            } else {
                                                var a = {
                                                    msg_status: 1,
                                                    direct: "left",
                                                    profile_url: "//www.weibo.com/u/" + r.id,
                                                    name: r.screen_name || r.id,
                                                    id: r.id,
                                                    avatar_large: Object(o["b"])(Object(o["p"])(r.avatar_large, r.id)) || u.a,
                                                    remark: r.remark,
                                                    description: r.description,
                                                    verified_type: r.verified_type,
                                                    verified: r.verified,
                                                    verified_type_ext: r.verified_type_ext
                                                };
                                                e == n.$store.state.selectId && (n.$store.commit("fillusercardinfo", a),
                                                d["a"].$emit("newUserCard"))
                                            }
                                            t()
                                        }
                                        ))
                                    }
                                    ));
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getperrecords: function(t, e, n) {
                    var r = {
                        params: {
                            convert_emoji: 1,
                            count: 15,
                            max_id: e,
                            uid: t,
                            is_include_group: 0
                        }
                    };
                    if (e || (this.$store.commit("exlastreadmid", 0),
                    this.$store.commit("exnomorerecords", !1)),
                    this.$store.state.showunfollow)
                        return l["n"].change(!0),
                        void s["a"].getpubconverstion(r).then((function(t) {
                            l["n"].change(!1),
                            n(t)
                        }
                        ));
                    l["n"].change(!0),
                    s["a"].getconverstion(r).then((function(t) {
                        l["n"].change(!1),
                        t.error || (Object(o["n"])(t, "direct_messages.length") ? n(t) : (l["n"].change(!0),
                        s["a"].getpubconverstion(r).then((function(t) {
                            l["n"].change(!1),
                            n(t)
                        }
                        ))))
                    }
                    ))
                },
                personrecordreq: function(t) {
                    var e = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this.getperrecords(t, n, (function(r) {
                        r.error || e.getconver(r, t, n)
                    }
                    ))
                },
                getconver: function(t, e, n) {
                    var i = this;
                    if (t.direct_messages.length) {
                        var s = t.direct_messages
                          , a = s.length;
                        this.$store.commit("exlastreadmid", s[a - 1].id - 1);
                        var c = []
                          , u = []
                          , d = function() {
                            var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                                var e, n, i, a, d, h, m, p;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1)
                                        switch (t.prev = t.next) {
                                        case 0:
                                            e = s.map(function() {
                                                var t = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                                                    var n, r, i, s;
                                                    return regeneratorRuntime.wrap((function(t) {
                                                        while (1)
                                                            switch (t.prev = t.next) {
                                                            case 0:
                                                                return n = e.sender_id == l["f"].basicinfo.id ? 0 : 1,
                                                                r = e.sender_id == l["f"].basicinfo.id ? "right" : "left",
                                                                i = {
                                                                    sub_type: e.sub_type,
                                                                    dm_type: e.dm_type,
                                                                    created_at: new Date(e.created_at).getTime(),
                                                                    text: e.text,
                                                                    media_type: e.media_type,
                                                                    msg_status: n,
                                                                    direct: r,
                                                                    mid: e.mid,
                                                                    type: 321,
                                                                    pic_gifs: e.pic_infos && e.pic_infos[0],
                                                                    sender_id: e.sender_id,
                                                                    ext_text_sendfrom: Object(o["n"])(e, "ext_text.send_from"),
                                                                    ext_text_video_pic_fid: Object(o["n"])(e, "ext_text.video_pic_fid"),
                                                                    comment: e.comment,
                                                                    isLargeDm: !!e.isLargeDm && e.isLargeDm,
                                                                    largetext: e.text
                                                                },
                                                                e.url_objects && e.url_objects[0] && e.url_objects[0].info && (i.url_short = e.url_objects[0].info.url_short,
                                                                i.url_objects = e.url_objects),
                                                                i.fid = e.att_ids ? e.att_ids[0] : "",
                                                                t.next = 7,
                                                                Object(f["a"])(i);
                                                            case 7:
                                                                return s = t.sent,
                                                                s && Object.assign(i, s),
                                                                t.abrupt("return", i);
                                                            case 10:
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
                                            }()),
                                            n = !0,
                                            i = !1,
                                            a = void 0,
                                            t.prev = 4,
                                            d = e[Symbol.iterator]();
                                        case 6:
                                            if (n = (h = d.next()).done) {
                                                t.next = 16;
                                                break
                                            }
                                            return m = h.value,
                                            t.next = 10,
                                            m;
                                        case 10:
                                            p = t.sent,
                                            c.unshift(p),
                                            "card5" == p.cardtype && u.unshift({
                                                fid: p.fid,
                                                mid: p.mid
                                            });
                                        case 13:
                                            n = !0,
                                            t.next = 6;
                                            break;
                                        case 16:
                                            t.next = 22;
                                            break;
                                        case 18:
                                            t.prev = 18,
                                            t.t0 = t["catch"](4),
                                            i = !0,
                                            a = t.t0;
                                        case 22:
                                            t.prev = 22,
                                            t.prev = 23,
                                            n || null == d.return || d.return();
                                        case 25:
                                            if (t.prev = 25,
                                            !i) {
                                                t.next = 28;
                                                break
                                            }
                                            throw a;
                                        case 28:
                                            return t.finish(25);
                                        case 29:
                                            return t.finish(22);
                                        case 30:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t, null, [[4, 18, 22, 30], [23, , 25, 29]])
                            }
                            )));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        d().then((function() {
                            if (e == i.$store.state.selectId) {
                                if (n)
                                    i.$store.commit("fillchatrecords", {
                                        value: c,
                                        more: !0
                                    }),
                                    u.length && i.$store.commit("addimgurls", {
                                        value: u,
                                        more: !0
                                    }),
                                    i.$nextTick((function() {
                                        var t = document.querySelector(".message-wrapper");
                                        t.scrollTop = t.scrollHeight - i.position
                                    }
                                    ));
                                else {
                                    i.$store.commit("fillchatrecords", {
                                        value: c
                                    });
                                    var t = i.listtype();
                                    if (!i.showunfollow) {
                                        var r = i.$store.state[t].findIndex((function(t) {
                                            return t.id == e
                                        }
                                        ));
                                        r < 0 && (t = "topuser")
                                    }
                                    var o = i.$store.state[t].findIndex((function(t) {
                                        return t.id == e
                                    }
                                    ));
                                    if (o >= 0 && o.text != s[0].text) {
                                        var a = s[0]
                                          , l = a.text
                                          , d = a.created_at;
                                        i.$store.commit("update" + t, {
                                            notTop: !0,
                                            i: o,
                                            param: {
                                                errorsend: !1,
                                                fileToken: "",
                                                text: l,
                                                created_at: d
                                            }
                                        })
                                    }
                                    u.length && i.$store.commit("fillimgurl", u)
                                }
                                i.showloading = !1,
                                //!this.usercardinfo && this.getuserbasic();
                                i.$nextTick((function() {
                                    document.querySelector(".chat-content").offsetHeight <= document.querySelector(".message-wrapper").offsetHeight && i.personrecordreq(e, i.$store.state.lastreadmid)
                                }
                                ))
                            }
                        }
                        ))
                    } else
                        this.$store.commit("exnomorerecords", !0),
                        this.showloading = !1
                }
            })
        };
        e["a"] = v
    },
    b3ad: function(t, e, n) {
        "use strict";
        var r = n("358e")
          , i = n.n(r);
        i.a
    },
    b650: function(t, e, n) {},
    b9c4: function(t, e, n) {},
    bbd5: function(t, e, n) {
        "use strict";
        n.d(e, "p", (function() {
            return s
        }
        )),
        n.d(e, "n", (function() {
            return o
        }
        )),
        n.d(e, "e", (function() {
            return a
        }
        )),
        n.d(e, "b", (function() {
            return c
        }
        )),
        n.d(e, "f", (function() {
            return u
        }
        )),
        n.d(e, "c", (function() {
            return l
        }
        )),
        n.d(e, "k", (function() {
            return d
        }
        )),
        n.d(e, "d", (function() {
            return f
        }
        )),
        n.d(e, "l", (function() {
            return h
        }
        )),
        n.d(e, "h", (function() {
            return m
        }
        )),
        n.d(e, "a", (function() {
            return p
        }
        )),
        n.d(e, "m", (function() {
            return g
        }
        )),
        n.d(e, "j", (function() {
            return v
        }
        )),
        n.d(e, "o", (function() {
            return b
        }
        )),
        n.d(e, "g", (function() {
            return y
        }
        )),
        n.d(e, "i", (function() {
            return _
        }
        ));
        n("6b54"),
        n("87b3"),
        n("3b2b");
        var r = n("768b")
          , i = (n("ac6a"),
        n("34ef"),
        n("4917"),
        n("a481"),
        n("28a5"),
        n("c712"));
        function s(t, e) {
            return t && null != t && "" != t ? t : ""
        }
        function o(t, e) {
            return e.split(".").reduce((function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                return t[e]
            }
            ), t)
        }
        function a(t) {
            for (var e = "", n = document.cookie.split("; "), r = 0; r < n.length; r++) {
                var i = n[r].split("=");
                if (i[0] == t) {
                    var s = unescape(i[1]);
                    ("" == e || s.length < e.length) && (e = s)
                }
            }
            return e
        }
        function c(t) {
            return null != t ? t.replace("http://", "https://") : t
        }
        function u(t) {
            var e = t.lastIndexOf(".");
            return e > 0 ? t.substring(e + 1).toLowerCase() : ""
        }
        function l(t, e) {
            var n, r, i, s, o, a, c, u, l, d, f;
            if (null == e && (e = 512),
            !(u = t.match(/^data\:([^\;]+)\;base64\,(.+)$/)))
                return null;
            f = u,
            u = f[0],
            a = f[1],
            n = f[2],
            s = atob(n),
            i = [],
            l = 0;
            while (l < s.length) {
                d = s.slice(l, l + e),
                o = new Array(d.length),
                c = 0;
                while (c < d.length)
                    o[c] = d.charCodeAt(c),
                    c++;
                r = new Uint8Array(o),
                i.push(r),
                l += e
            }
            return new Blob(i,{
                type: a
            })
        }
        function d(t) {
            var e = /.+\?(.+)$/.exec(t);
            if (e) {
                e = e[1];
                var n = e.split("&")
                  , i = {};
                return n.forEach((function(t) {
                    if (/=/.test(t)) {
                        var e = t.split("=")
                          , n = Object(r["a"])(e, 2)
                          , s = n[0]
                          , o = n[1];
                        o = decodeURIComponent(o),
                        o = /^\d+$/.test(o) ? parseFloat(o) : o,
                        i.hasOwnProperty(s) ? i[s] = [].concat(i[s], o) : i[s] = o
                    } else
                        i[t] = null
                }
                )),
                i
            }
        }
        function f(t) {
            if ("string" != typeof t)
                throw "encodeHTML need a string as parameter";
            var e = /^\s+/
              , n = t.replace(e, "");
            n = n.replace(/\&/g, "&amp;").replace(/"/g, "&quot;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\'/g, "&#39;").replace(/\u00A0/g, "&nbsp;").replace(/(\u000B|\u2028|\u2029|\f)/g, "&nbsp;").replace(/\n/g, "<br>");
            var r = new Array
              , i = /([ ]{2,})/gi
              , s = "";
            while (s = i.exec(n))
                r.push(s[1]);
            for (var o in r) {
                var a = r[o]
                  , c = " " + a.substr(1).replace(/([ ])/g, "&nbsp;");
                n = n.replace(a, c)
            }
            return n
        }
        function h() {
            for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 13, e = "0123456789qwertyuioplkjhgfdsazxcvbnm", n = "", r = (new Date).getTime(), i = 0; i < t; i++)
                n += e.charAt(Math.ceil(1e8 * Math.random()) % e.length);
            return r + n
        }
        function m(t, e) {
            var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
              , r = t.match(n);
            return null != r ? unescape(r[2]) : null
        }
        function p(t, e) {
            var n = t.className
              , r = "" != n ? " " : ""
              , i = n + r + e;
            t.className = i
        }
        function g(t, e) {
            var n = " " + t.className + " ";
            n = n.replace(/(\s+)/gi, " ");
            var r = n.replace(" " + e + " ", " ");
            r = r.replace(/(^\s+)|(\s+$)/g, ""),
            t.className = r
        }
        function v(t, e) {
            var n = t.className
              , r = n.split(/\s+/)
              , i = 0;
            for (i in r)
                if (r[i] == e)
                    return !0;
            return !1
        }
        function b(t, e) {
            var n = Object(r["a"])(t, 2)
              , i = n[0]
              , s = n[1]
              , o = Object(r["a"])(e, 2)
              , a = o[0]
              , c = o[1];
            return i / a > s / c ? (s *= a / i,
            i = a) : (i *= c / s,
            s = c),
            [i, s]
        }
        function y(t, e) {
            return new Promise((function(n) {
                t.onloadend = function(t) {
                    for (var e = new Uint8Array(t.target.result).subarray(0, 4), r = "", i = 0; i < e.length; i++)
                        r += e[i].toString(16);
                    n(r)
                }
                ,
                t.readAsArrayBuffer(e)
            }
            ))
        }
        function _(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return new Promise((function(r) {
                if (!n) {
                    var s = t.getNative();
                    n = URL.createObjectURL(s)
                }
                var o, a = document.createElement("video");
                a.src = n,
                console.log("url", n, "video", a);
                var c = function() {
                    var t = document.createElement("canvas")
                      , e = t.getContext("2d");
                    t.height = a.videoHeight,
                    t.width = a.videoWidth,
                    console.log(t.height, t.width),
                    e.drawImage(a, 0, 0, t.width, t.height),
                    o = t.toDataURL();
                    var i = {
                        video: a,
                        url: n,
                        videotime: a.duration,
                        width: 0 === a.videoWidth ? 240 : a.videoWidth,
                        height: 0 === a.videoHeight ? 240 : a.videoHeight,
                        screenshot: o
                    };
                    console.log(i),
                    r(i)
                };
                a.onseeked = function() {
                    var t = Object(i["a"])();
                    "Edge" === t.broName || t.broName.match(/IE.+/g) ? setTimeout((function() {
                        c()
                    }
                    ), 30) : c()
                }
                ,
                a.onloadeddata = function() {
                    a.currentTime = e
                }
            }
            ))
        }
    },
    bcfd: function(t, e, n) {},
    c712: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        ));
        n("3b2b"),
        n("4917");
        function r() {
            var t = {
                broName: "",
                browserVersion: ""
            }
              , e = (new Array,
            window.navigator.userAgent.toLowerCase())
              , n = o();
            return -1 != n && "edge" != n ? (!0,
            t.broName = "IE" + n,
            t.browserVersion = n,
            t) : -1 != e.indexOf("edge") ? (!0,
            t.broName = "Edge",
            t.browserVersion = e.match(/edge\/([\d.]+)/)[1],
            t) : e.indexOf("2345explorer") > 0 ? (t.broName = "2345Explorer",
            t.browserVersion = e.match(/2345explorer\/([\d.]+)/)[1],
            t) : window.opera || e.indexOf("opr") > 0 ? (t.broName = "Opera",
            t.browserVersion = this.getOperaVersion(e),
            t) : e.indexOf("ubrowser") > 0 ? (t.broName = "UC",
            t.browserVersion = e.match(/ubrowser\/([\d.]+)/)[1],
            t) : e.indexOf("bidubrowser") > 0 ? (t.broName = "Baidu",
            t.browserVersion = e.match(/bidubrowser\/([\d.]+)/)[1],
            t) : e.indexOf("metasr") > 0 || e.indexOf("se 2.x") > 0 ? (t.broName = "Sogou",
            t.browserVersion = "",
            t) : e.indexOf("tencenttraveler") > 0 ? (t.broName = "QQ",
            t.browserVersion = e.match(/tencenttraveler\/([\d.]+)/)[1],
            t) : e.indexOf("qqbrowser") > 0 ? (t.broName = "QQ",
            t.browserVersion = e.match(/qqbrowser\/([\d.]+)/)[1],
            t) : e.indexOf("maxthon") > 0 ? (t.broName = "Aoyou",
            t.browserVersion = e.match(/maxthon\/([\d.]+)/)[1],
            t) : e.indexOf("firefox") > 0 ? (t.broName = "firefox",
            t.browserVersion = e.match(/firefox\/([\d.]+)/)[1],
            t) : (e.indexOf("chrome") > 0 ? s("type", "application/x360mmplugin") ? (t.broName = "360",
            t.browserVersion = e.match(/chrome\/([\d.]+)/)[1]) : i("type", "application/vnd.chromium.remoting-viewer") ? (t.broName = "360",
            t.browserVersion = e.match(/chrome\/([\d.]+)/)[1]) : (t.broName = "chrome",
            t.browserVersion = e.match(/chrome\/([\d.]+)/)[1]) : e.indexOf("safari") > -1 && (t.broName = "safari",
            t.browserVersion = e.match(/version\/([\d.]+)/)[1]),
            t.broName || (t.broName = "Others",
            t.browserVersion = ""),
            t)
        }
        function i(t, e) {
            var n = navigator.mimeTypes;
            for (var r in n)
                if (n[r][t] == e)
                    return !0;
            return !1
        }
        function s(t, e) {
            var n = window.navigator.mimeTypes;
            for (var r in n)
                if (n[r][t] == e)
                    return !0;
            return !1
        }
        function o() {
            var t = navigator.userAgent
              , e = t.indexOf("compatible") > -1 && t.indexOf("MSIE") > -1
              , n = t.indexOf("Edge") > -1 && !e
              , r = t.indexOf("Trident") > -1 && t.indexOf("rv:11.0") > -1;
            if (e) {
                var i = new RegExp("MSIE (\\d+\\.\\d+);");
                i.test(t);
                var s = parseFloat(RegExp["$1"]);
                return 7 == s ? 7 : 8 == s ? 8 : 9 == s ? 9 : 10 == s ? 10 : 6
            }
            return n ? "edge" : r ? 11 : -1
        }
    },
    c7ee: function(t, e, n) {
        "use strict";
        var r = n("16de")
          , i = n.n(r);
        i.a
    },
    ca5e: function(t, e, n) {
        "use strict";
        var r = n("91e0")
          , i = n.n(r);
        i.a
    },
    cbca: function(t, e, n) {
        "use strict";
        var r = n("d073")
          , i = n.n(r);
        i.a
    },
    cc95: function(t, e, n) {},
    ce08: function(t, e, n) {
        "use strict";
        var r = n("5fa9")
          , i = n.n(r);
        i.a
    },
    d073: function(t, e, n) {},
    da27: function(t, e, n) {
        "use strict";
        var r = n("f7b0")
          , i = n.n(r);
        i.a
    },
    e4b3: function(t, e, n) {
        "use strict";
        var r = n("f82e")
          , i = n.n(r);
        i.a
    },
    e80e: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }
        ));
        n("7f7f");
        var r = n("4360");
        function i(t) {
            "Notification"in window ? "granted" === Notification.permission ? (o(),
            t && s(t)) : "denied" !== Notification.permission && Notification.requestPermission((function(e) {
                "granted" === Notification.permission && (o(),
                t && s(t))
            }
            )) : console.log("浏览器不支持H5消息推送")
        }
        function s(t) {
            (function(t) {
                var e = new Notification(t.name,{
                    body: t.content,
                    icon: t.icon,
                    tag: "cometdmsg" + (new Date).getTime(),
                    requireInteraction: !0,
                    renotify: !0
                });
                e.onclick = function() {
                    r["a"].commit("selectSession", t.id),
                    window.focus()
                }
                ,
                setTimeout((function() {
                    e.close()
                }
                ), 5e3)
            }
            )(t)
        }
        function o() {
            "true" != window.localStorage.getItem("isopenwebnotif") ? r["a"].commit("exnotif", !1) : r["a"].commit("exnotif", !0)
        }
    },
    e9c1: function(t, e, n) {
        "use strict";
        var r = n("b650")
          , i = n.n(r);
        i.a
    },
    e9c5: function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "vue-loading flex"
            }, [n("div", {
                staticClass: "icon"
            }), n("p", {
                staticClass: "page font12"
            }, [t._v(t._s(t.text))])])
        }
          , i = []
          , s = {
            data: function() {
                return {
                    text: ""
                }
            }
        }
          , o = s
          , a = (n("ce08"),
        n("2877"))
          , c = Object(a["a"])(o, r, i, !1, null, "730d5c08", null)
          , u = c.exports
          , l = {
            installed: !1,
            install: function(t, e) {
                l.installed || (t.prototype.$loading = function(e, n) {
                    if (!document.querySelector(".vue-loading")) {
                        var r = t.extend(u)
                          , i = new r;
                        i.text = n || "加载中...",
                        document.querySelector(".".concat(e)).appendChild(i.$mount().$el),
                        l.installed = !0
                    }
                }
                ,
                t.prototype.$loading.remove = function(t) {
                    document.querySelector(".vue-loading") && document.querySelector(".".concat(t)).removeChild(document.querySelector(".vue-loading"))
                }
                )
            }
        };
        e["a"] = l
    },
    f135: function(t, e, n) {
        "use strict";
        n("7f7f");
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "vue-modal fixed-c",
                class: {
                    mask: !t.hidemask
                },
                on: {
                    click: t.cancel
                }
            }, [n("div", {
                staticClass: "modal-box tc absolute absolute_center",
                style: {
                    width: t.width
                },
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [n("div", {
                staticClass: "content",
                class: {
                    "text-padding": t.contentStyle
                }
            }, [t.title ? n("p", {
                staticClass: "title tc font14"
            }, [t._v(t._s(t.title))]) : t._e(), t.closebtn ? n("i", {
                staticClass: "close absolute icon W_ficon",
                on: {
                    click: t.cancel
                }
            }, [t._v("")]) : t._e(), n("p", {
                staticClass: "confirm-box"
            }, [n("span", {
                staticClass: "aaaa"
            }, [t.icon ? n("img", {
                staticClass: "icon",
                style: {
                    width: t.icon.width || "auto"
                },
                attrs: {
                    src: t.icon.text,
                    alt: ""
                }
            }) : t._e(), t.name ? n("span", {
                domProps: {
                    innerHTML: t._s(t.name)
                }
            }) : t._e()]), n("span", {
                staticClass: "title font14",
                domProps: {
                    innerHTML: t._s(t.text)
                }
            })]), t.tips ? n("p", {
                staticClass: "tips tc font12"
            }, [t._v(t._s(t.tips))]) : t._e()]), t.okObj || t.cancelObj ? n("div", {
                staticClass: "confirmbtn-box flex justify-c_c"
            }, [t.okObj ? n("button", {
                staticClass: "confirmbtn",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.ok(e)
                    }
                }
            }, [t._v(t._s(t.okObj.text))]) : t._e(), t.cancelObj ? n("button", {
                staticClass: "confirmbtn calcelbtn",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.cancel(e)
                    }
                }
            }, [t._v("\n        " + t._s(t.cancelObj.text) + "\n      ")]) : t._e()]) : t._e()])])
        }
          , i = []
          , s = {
            data: function() {
                return {
                    title: "",
                    closebtn: !1,
                    width: "auto",
                    text: "",
                    icon: "",
                    tips: "",
                    name: "",
                    hidemask: !1,
                    cancelObj: null,
                    okObj: null,
                    contentStyle: !1
                }
            },
            methods: {
                ok: function() {
                    this.removeModal(),
                    this.okObj && this.okObj.okFun && this.okObj.okFun()
                },
                cancel: function() {
                    this.removeModal(),
                    this.cancelObj && this.cancelObj.cancelFun && this.cancelObj.cancelFun()
                }
            }
        }
          , o = s
          , a = (n("abda"),
        n("2877"))
          , c = Object(a["a"])(o, r, i, !1, null, "48c8b429", null)
          , u = c.exports
          , l = n("0bca")
          , d = {
            installed: !1,
            install: function(t, e) {
                d.installed || (t.prototype.$modal = function(e) {
                    var n = e.title
                      , r = e.icon
                      , i = e.text
                      , s = e.name
                      , o = e.tips
                      , a = e.okObj
                      , c = e.cancelObj
                      , f = e.duration
                      , h = e.width
                      , m = e.hidemask
                      , p = e.closebtn
                      , g = e.contentStyle;
                    if (!document.querySelector(".vue-modal")) {
                        l["a"].$emit("floatmaskmodal", !0);
                        var v = t.extend(u)
                          , b = new v;
                        b.title = n,
                        b.icon = r,
                        b.text = i,
                        b.name = s,
                        b.tips = o,
                        b.hidemask = m,
                        b.closebtn = !!p,
                        b.contentStyle = !!g,
                        b.width = h ? h + "px" : "auto",
                        b.okObj = a,
                        b.cancelObj = c;
                        var y = b.$mount().$el;
                        document.body.appendChild(y),
                        f && setTimeout((function() {
                            document.body.removeChild(y)
                        }
                        ), f),
                        b.removeModal = function() {
                            l["a"].$emit("floatmaskmodal", !1),
                            setTimeout((function() {
                                document.body.removeChild(y)
                            }
                            ), 0)
                        }
                        ,
                        document.querySelector("div.vue-modal").addEventListener("touchmove", (function(t) {
                            t.stopPropagation(),
                            t.preventDefault()
                        }
                        )),
                        d.installed = !0
                    }
                }
                )
            }
        };
        e["a"] = d
    },
    f524: function(t, e, n) {
        "use strict";
        n("7f7f"),
        n("a481"),
        n("4917");
        var r = n("fcfc")
          , i = (n("0bca"),
        n("4360"));
        window.Global = {
            isMac: navigator.platform.toUpperCase().indexOf("MAC") >= 0,
            isWebkit: !1,
            isChrome: !1,
            isMozilla: !1,
            isOpera: !1,
            isIE: !1,
            isEdge: !1,
            isSafari: !1,
            toChatUid: null,
            isLogouting: !1,
            browserVersion: "",
            sid: null
        },
        window.browser = function() {
            var t, e = navigator.userAgent, n = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(n[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [],
            {
                name: "IE",
                version: t[1] || ""
            }) : "Chrome" === n[1] && (t = e.match(/\b(OPR|Edge)\/(\d+)/),
            null != t) ? {
                name: t.slice(1)[0].replace("OPR", "Opera"),
                version: t.slice(1)[1]
            } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"],
            null != (t = e.match(/version\/(\d+)/i)) && n.splice(1, 1, t[1]),
            {
                name: n[0],
                version: n[1]
            })
        }(),
        Global.isWebkit = "Chrome" === browser.name || "Safari" === browser.name,
        Global.isMozilla = "Firefox" === browser.name,
        Global.isOpera = "Opera" === browser.name,
        Global.isIE = "IE" === browser.name,
        Global.isEdge = "Edge" === browser.name,
        Global.isChrome = "Chrome" === browser.name,
        Global.isSafari = "Safari" === browser.name,
        Global.browserVersion = browser.version,
        Global.online = !0,
        window.addEventListener("online", (function() {
            i["a"].commit("selectSession", -1),
            setTimeout((function() {
                r["h"].cometconn.close(),
                r["i"].emptyData(),
                Global.online = !0,
                console.log("网络连接已建立")
            }
            ), 20)
        }
        )),
        window.addEventListener("offline", (function() {
            Global.online = !1,
            console.log("网络连接已断开")
        }
        )),
        Global.isMac || navigator.userAgent.indexOf("Windows NT 5.1") > -1 || navigator.userAgent.indexOf("Windows XP"),
        window.addEventListener("storage", (function(t) {
            r["r"].totalunread != t.newValue && r["r"].setData("totalunread", t.newValue)
        }
        ))
    },
    f60d: function(t, e, n) {
        "use strict";
        var r = n("4360")
          , i = n("fcfc")
          , s = (n("20d6"),
        n("365c"));
        function o(t, e) {
            return r["a"].state[t].findIndex((function(t) {
                return t.id == e
            }
            ))
        }
        function a(t) {
            var e = t + "";
            return !(e.length < 15)
        }
        function c() {
            var t = "topuser"
              , e = {
                is_include_group: 0,
                type: 2,
                uid: r["a"].state.selectId
            };
            if (r["a"].state.showunfollow) {
                t = "unfollowlist";
                var n = o(t, r["a"].state.selectId);
                if (n >= 0) {
                    var i = r["a"].state[t][n].unread_count;
                    if (!i)
                        return;
                    r["a"].commit("emptypubunread", n),
                    s["a"].clearUnfollowUnreadMsg(e)
                }
            } else {
                var c = o(t, r["a"].state.selectId);
                if (c < 0 && (t = "chatlist",
                c = o(t, r["a"].state.selectId)),
                c >= 0) {
                    var u = r["a"].state[t][c].unread_count;
                    if (!u)
                        return;
                    "chatlist" == t && r["a"].commit("emptyunread", c),
                    "topuser" == t && r["a"].commit("emptytopunread", c),
                    a(r["a"].state.selectId) ? (e = {
                        id: r["a"].state.selectId
                    },
                    s["a"].clearunread(e)) : s["a"].clearunreadMsg(e)
                }
            }
        }
        n("8917");
        var u = n("0bca")
          , l = n("bbd5")
          , d = 0
          , f = 0;
        function h(t) {
            i["s"].setData("udmunread", t.dm_pub_total),
            r["a"].state.pubremindtype != t.msgbox && r["a"].commit("changePubRemindType", t.msgbox),
            i["r"].setData("totalunread", t.allcountNum)
        }
        function m(t) {
            h(t)
        }
        function p() {
            d = setInterval((function() {
                r["a"].state.isWinFocus || s["b"].totalUnreadCount().then((function(t) {
                    if (t.data) {
                        var e = {}
                          , n = t.data;
                        e.time = (new Date).getTime(),
                        e.dm_pub_total = n.dm_pub_total || 0,
                        e.chat_group_client = n.chat_group_client || 0,
                        n.remind_settings && (-1 == n.remind_settings.msgbox ? (e.allcountNum = 0,
                        e.msgbox = -1) : 0 == n.remind_settings.msgbox || 2 == n.remind_settings.msgbox ? (e.allcountNum = (n.dm_total || 0) + (n.chat_group_client || 0),
                        e.msgbox = 2) : (e.allcountNum = (n.dm_total || 0) + (n.chat_group_client || 0) + (n.dm_pub_total || 0),
                        e.msgbox = 0),
                        h(e))
                    }
                }
                ))
            }
            ), 3e4)
        }
        function g() {
            f = setInterval((function() {
                var t = (new Date).getTime()
                  , e = JSON.parse(Object(l["e"])("webim_unReadCount") || '{"time":0}');
                t - e.time < 6e4 ? (m(e),
                clearInterval(d),
                d = 0) : (clearInterval(f),
                !d && p())
            }
            ), 2e3)
        }
        var v, b = null, y = !1;
        function _() {
            b || (b = setInterval((function() {
                window.localStorage && ("true" != window.localStorage.getItem("isopenwebnotif") ? r["a"].state.isopenwebnotif && r["a"].commit("exnotif", !1) : r["a"].state.isopenwebnotif || r["a"].commit("exnotif", !0),
                "true" != window.localStorage.getItem("isopenvoice") ? r["a"].state.isopenvoice && r["a"].commit("exvoice", !1) : r["a"].state.isopenvoice || r["a"].commit("exvoice", !0));
                var t = i["r"].totalunread;
                "微博聊天网页版" == document.title && t > 0 ? document.title = (+t > 999 ? "999+" : t) + "条未读-微博聊天网页版" : document.title = "微博聊天网页版"
            }
            ), 1e3))
        }
        function w() {
            b && (clearInterval(b),
            b = null)
        }
        function x() {
            y = !0
        }
        function j() {}
        function k() {
            document.hidden ? O() : C()
        }
        function O() {
            r["a"].commit("exisWinFocus", !1),
            _(),
            g(),
            u["a"].$emit("WEBCHAT_REFRESH_COUNT")
        }
        function C() {
            y = !1,
            document.title = "微博聊天网页版",
            r["a"].commit("exisWinFocus", !0),
            w(),
            Global.online && setTimeout((function() {
                !y && c()
            }
            ), 200)
        }
        "undefined" !== typeof document.hidden ? ("hidden",
        v = "visibilitychange") : "undefined" !== typeof document.mozHidden ? ("mozHidden",
        v = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? ("msHidden",
        v = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && ("webkitHidden",
        v = "webkitvisibilitychange"),
        window.onfocus = function() {
            C()
        }
        ,
        window.onblur = function() {
            O()
        }
        ,
        document.onfocusin = function() {
            C()
        }
        ,
        document.onfocusout = function() {
            O()
        }
        ,
        document.addEventListener(v, k),
        window.onbeforeunload = x,
        window.onunload = j
    },
    f655: function(t, e, n) {
        "use strict";
        var r = n("b30b")
          , i = n.n(r);
        i.a
    },
    f7b0: function(t, e, n) {},
    f814: function(t, e, n) {
        "use strict";
        n("ac6a");
        var r = n("7618")
          , i = (n("37a4"),
        {})
          , s = !1
          , o = null
          , a = !1
          , c = null;
        i.install = function(t, e) {
            var n = {
                type: "bottom",
                duration: "2500",
                wordWrap: !1,
                width: "auto"
            };
            for (var i in e)
                n[i] = e[i];
            t.prototype.$toast = function(e, i) {
                var a = JSON.parse(JSON.stringify(n));
                if ("object" === Object(r["a"])(i))
                    for (var c in i)
                        a[c] = i[c];
                else
                    i && (a["type"] = i);
                if (s && (clearTimeout(s),
                o.show = !1),
                !o) {
                    var u = t.extend({
                        data: function() {
                            return {
                                show: !1,
                                tip: e,
                                wordWrap: a.wordWrap,
                                type: a.type,
                                extStyle: {
                                    width: a.width
                                }
                            }
                        },
                        render: function(t) {
                            if (this.show)
                                return t("div", {
                                    class: ["lx-toast", "lx-toast-" + this.type, this.wordWrap ? "lx-word-wrap" : ""],
                                    style: this.extStyle,
                                    show: this.show,
                                    domProps: {
                                        innerHTML: this.tip
                                    }
                                })
                        }
                    });
                    o = new u;
                    var l = o.$mount().$el;
                    document.body.appendChild(l)
                }
                o.tip = e,
                o.wordWrap = a.wordWrap,
                o.type = a.type,
                o.extStyle.width = a.width,
                o.show = !0,
                s = setTimeout((function() {
                    o.show = s = !1
                }
                ), a.duration)
            }
            ,
            ["bottom", "center", "top"].forEach((function(e) {
                t.prototype.$toast[e] = function(n, r) {
                    return r || (r = {}),
                    r.type = e,
                    t.prototype.$toast(n, r)
                }
            }
            )),
            t.prototype.$loading = function(e, n) {
                if ("close" == n)
                    c && (c.show = a = !1);
                else {
                    if (a && c)
                        return void (c.tip = e);
                    var r = t.extend({
                        data: function() {
                            return {
                                show: !1,
                                tip: e
                            }
                        },
                        render: function(t) {
                            if (this.show)
                                return t("div", {
                                    attrs: {
                                        class: "lx-load-mark"
                                    },
                                    show: this.show
                                }, [t("div", {
                                    attrs: {
                                        class: "lx-load-box"
                                    }
                                }, [t("div", {
                                    attrs: {
                                        class: "lx-loading"
                                    }
                                }, Array.apply(null, {
                                    length: 12
                                }).map((function(e, n) {
                                    return t("div", {
                                        attrs: {
                                            class: "loading_leaf loading_leaf_" + n
                                        }
                                    })
                                }
                                ))), t("div", {
                                    attrs: {
                                        class: "lx-load-content"
                                    },
                                    domProps: {
                                        innerHTML: this.tip
                                    }
                                })])])
                        }
                    });
                    c = new r;
                    var i = c.$mount().$el;
                    document.body.appendChild(i),
                    c.show = a = !0
                }
            }
            ,
            ["open", "close"].forEach((function(e) {
                t.prototype.$loading[e] = function(n) {
                    return t.prototype.$loading(n, e)
                }
            }
            ))
        }
        ,
        e["a"] = i
    },
    f82e: function(t, e, n) {},
    f8c7: function(t, e, n) {
        "use strict";
        var r = n("a3fe")
          , i = n.n(r);
        i.a
    },
    fb79: function(t, e, n) {
        "use strict";
        var r = n("5894")
          , i = n.n(r);
        i.a
    },
    fcb7: function(t, e, n) {},
    fcfc: function(t, e, n) {
        "use strict";
        n.d(e, "m", (function() {
            return r
        }
        )),
        n.d(e, "q", (function() {
            return i
        }
        )),
        n.d(e, "n", (function() {
            return s
        }
        )),
        n.d(e, "d", (function() {
            return o
        }
        )),
        n.d(e, "l", (function() {
            return a
        }
        )),
        n.d(e, "p", (function() {
            return c
        }
        )),
        n.d(e, "c", (function() {
            return u
        }
        )),
        n.d(e, "b", (function() {
            return l
        }
        )),
        n.d(e, "a", (function() {
            return d
        }
        )),
        n.d(e, "o", (function() {
            return f
        }
        )),
        n.d(e, "i", (function() {
            return h
        }
        )),
        n.d(e, "f", (function() {
            return m
        }
        )),
        n.d(e, "k", (function() {
            return p
        }
        )),
        n.d(e, "e", (function() {
            return g
        }
        )),
        n.d(e, "g", (function() {
            return v
        }
        )),
        n.d(e, "s", (function() {
            return b
        }
        )),
        n.d(e, "r", (function() {
            return y
        }
        )),
        n.d(e, "h", (function() {
            return _
        }
        )),
        n.d(e, "j", (function() {
            return w
        }
        ));
        n("20d6"),
        n("4360");
        var r = {
            set: function(t) {
                this.exist = t
            },
            exist: !1
        }
          , i = {
            setData: function(t, e) {
                this[t] = e
            }
        }
          , s = {
            change: function(t) {
                this.lockPendiing = t
            },
            lockPendiing: !1
        }
          , o = {
            start: function() {
                this.starttime = (new Date).getTime()
            },
            starttime: 0
        }
          , a = {
            setState: function(t) {
                this.loaded = t
            },
            setData: function(t) {
                this.faultTolerance = t,
                this.savetocache = !!t
            },
            loaded: !1,
            savetocache: !1,
            faultTolerance: 0
        }
          , c = {
            updatemsgs: function(t) {
                this.memorycomtedmsg.length > 50 && this.memorycomtedmsg.pop(),
                this.memorycomtedmsg.unshift(t)
            },
            memorycomtedmsg: []
        }
          , u = {
            setText: function(t, e) {
                this[t] = e
            }
        }
          , l = {
            setData: function(t, e) {
                this[t] = e
            }
        }
          , d = {
            setData: function(t) {
                this.emotions = t
            },
            emotions: []
        }
          , f = {
            updatemids: function(t) {
                this.memorycomtedmid.length > 30 && this.memorycomtedmid.pop(),
                this.memorycomtedmid.unshift(t)
            },
            memorycomtedmid: []
        }
          , h = {
            emptyData: function() {
                this.allmsgs = []
            },
            pushData: function(t) {
                this.allmsgs.push(t)
            },
            shiftData: function() {
                return this.allmsgs.shift()
            },
            allmsgs: []
        }
          , m = {
            setData: function(t, e) {
                this[t] = e
            },
            basicinfo: null
        }
          , p = {
            updateexitGroups: function(t) {
                var e = t.status
                  , n = t.gid;
                if (1 == e)
                    this.exitGroups.length >= 5 && this.exitGroups.shift(),
                    this.exitGroups.push(n);
                else if (2 == e) {
                    var r = this.exitGroups.findIndex((function(t) {
                        return t == n
                    }
                    ));
                    this.exitGroups.splice(r, 1)
                }
            },
            exitGroups: []
        }
          , g = {
            setData: function(t, e) {
                this[t] = e
            },
            aborting: !1
        }
          , v = {
            setData: function(t, e) {
                this[t] = e
            },
            clientId: ""
        }
          , b = {
            setData: function(t, e) {},
            reduce: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            },
            add: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            },
            udmunread: 0
        }
          , y = {
            setData: function(t, e) {
                this[t] = e
            },
            reduce: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            },
            add: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            },
            totalunread: 0
        }
          , _ = {
            setData: function(t, e) {
                this[t] = e
            },
            cometconn: null
        }
          , w = {
            gid: "",
            setGid: function(t) {
                this.gid = t
            },
            getGid: function() {
                return this.gid
            }
        }
    },
    fff5: function(t, e, n) {
        "use strict";
        var r = n("bcfd")
          , i = n.n(r);
        i.a
    }
});
