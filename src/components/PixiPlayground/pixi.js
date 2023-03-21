const Yd = Object.defineProperty;
const qd = Object.defineProperties;
const Kd = Object.getOwnPropertyDescriptors;
const er = Object.getOwnPropertySymbols;
const $h = Object.prototype.hasOwnProperty;
const jh = Object.prototype.propertyIsEnumerable;
const Wh = (m, et, pt) => (et in m ? Yd(m, et, { enumerable: !0, configurable: !0, writable: !0, value: pt }) : (m[et] = pt));
const Et = (m, et) =>
{
    for (var pt in et || (et = {})) $h.call(et, pt) && Wh(m, pt, et[pt]);
    if (er) for (var pt of er(et)) jh.call(et, pt) && Wh(m, pt, et[pt]);

    return m;
};
const Ji = (m, et) => qd(m, Kd(et));
const Wn = (m, et) =>
{
    const pt = {};

    for (var Rt in m) $h.call(m, Rt) && et.indexOf(Rt) < 0 && (pt[Rt] = m[Rt]);
    if (m != null && er) for (var Rt of er(m)) et.indexOf(Rt) < 0 && jh.call(m, Rt) && (pt[Rt] = m[Rt]);

    return pt;
};
/* !
 * pixi.js - v7.2.0
 * Compiled Tue, 14 Mar 2023 19:25:43 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ const PIXI = (function (m)
{
    let zh;

    ('use strict');
    var et = ((e) => (
        (e[(e.WEBGL_LEGACY = 0)] = 'WEBGL_LEGACY'), (e[(e.WEBGL = 1)] = 'WEBGL'), (e[(e.WEBGL2 = 2)] = 'WEBGL2'), e
    ))(et || {});
    var pt = ((e) => ((e[(e.UNKNOWN = 0)] = 'UNKNOWN'), (e[(e.WEBGL = 1)] = 'WEBGL'), (e[(e.CANVAS = 2)] = 'CANVAS'), e))(
        pt || {},
    );
    var Rt = ((e) => (
        (e[(e.COLOR = 16384)] = 'COLOR'), (e[(e.DEPTH = 256)] = 'DEPTH'), (e[(e.STENCIL = 1024)] = 'STENCIL'), e
    ))(Rt || {});
    var G = ((e) => (
        (e[(e.NORMAL = 0)] = 'NORMAL'),
        (e[(e.ADD = 1)] = 'ADD'),
        (e[(e.MULTIPLY = 2)] = 'MULTIPLY'),
        (e[(e.SCREEN = 3)] = 'SCREEN'),
        (e[(e.OVERLAY = 4)] = 'OVERLAY'),
        (e[(e.DARKEN = 5)] = 'DARKEN'),
        (e[(e.LIGHTEN = 6)] = 'LIGHTEN'),
        (e[(e.COLOR_DODGE = 7)] = 'COLOR_DODGE'),
        (e[(e.COLOR_BURN = 8)] = 'COLOR_BURN'),
        (e[(e.HARD_LIGHT = 9)] = 'HARD_LIGHT'),
        (e[(e.SOFT_LIGHT = 10)] = 'SOFT_LIGHT'),
        (e[(e.DIFFERENCE = 11)] = 'DIFFERENCE'),
        (e[(e.EXCLUSION = 12)] = 'EXCLUSION'),
        (e[(e.HUE = 13)] = 'HUE'),
        (e[(e.SATURATION = 14)] = 'SATURATION'),
        (e[(e.COLOR = 15)] = 'COLOR'),
        (e[(e.LUMINOSITY = 16)] = 'LUMINOSITY'),
        (e[(e.NORMAL_NPM = 17)] = 'NORMAL_NPM'),
        (e[(e.ADD_NPM = 18)] = 'ADD_NPM'),
        (e[(e.SCREEN_NPM = 19)] = 'SCREEN_NPM'),
        (e[(e.NONE = 20)] = 'NONE'),
        (e[(e.SRC_OVER = 0)] = 'SRC_OVER'),
        (e[(e.SRC_IN = 21)] = 'SRC_IN'),
        (e[(e.SRC_OUT = 22)] = 'SRC_OUT'),
        (e[(e.SRC_ATOP = 23)] = 'SRC_ATOP'),
        (e[(e.DST_OVER = 24)] = 'DST_OVER'),
        (e[(e.DST_IN = 25)] = 'DST_IN'),
        (e[(e.DST_OUT = 26)] = 'DST_OUT'),
        (e[(e.DST_ATOP = 27)] = 'DST_ATOP'),
        (e[(e.ERASE = 26)] = 'ERASE'),
        (e[(e.SUBTRACT = 28)] = 'SUBTRACT'),
        (e[(e.XOR = 29)] = 'XOR'),
        e
    ))(G || {});
    var zt = ((e) => (
        (e[(e.POINTS = 0)] = 'POINTS'),
        (e[(e.LINES = 1)] = 'LINES'),
        (e[(e.LINE_LOOP = 2)] = 'LINE_LOOP'),
        (e[(e.LINE_STRIP = 3)] = 'LINE_STRIP'),
        (e[(e.TRIANGLES = 4)] = 'TRIANGLES'),
        (e[(e.TRIANGLE_STRIP = 5)] = 'TRIANGLE_STRIP'),
        (e[(e.TRIANGLE_FAN = 6)] = 'TRIANGLE_FAN'),
        e
    ))(zt || {});
    var C = ((e) => (
        (e[(e.RGBA = 6408)] = 'RGBA'),
        (e[(e.RGB = 6407)] = 'RGB'),
        (e[(e.RG = 33319)] = 'RG'),
        (e[(e.RED = 6403)] = 'RED'),
        (e[(e.RGBA_INTEGER = 36249)] = 'RGBA_INTEGER'),
        (e[(e.RGB_INTEGER = 36248)] = 'RGB_INTEGER'),
        (e[(e.RG_INTEGER = 33320)] = 'RG_INTEGER'),
        (e[(e.RED_INTEGER = 36244)] = 'RED_INTEGER'),
        (e[(e.ALPHA = 6406)] = 'ALPHA'),
        (e[(e.LUMINANCE = 6409)] = 'LUMINANCE'),
        (e[(e.LUMINANCE_ALPHA = 6410)] = 'LUMINANCE_ALPHA'),
        (e[(e.DEPTH_COMPONENT = 6402)] = 'DEPTH_COMPONENT'),
        (e[(e.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
        e
    ))(C || {});
    var Ae = ((e) => (
        (e[(e.TEXTURE_2D = 3553)] = 'TEXTURE_2D'),
        (e[(e.TEXTURE_CUBE_MAP = 34067)] = 'TEXTURE_CUBE_MAP'),
        (e[(e.TEXTURE_2D_ARRAY = 35866)] = 'TEXTURE_2D_ARRAY'),
        (e[(e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] = 'TEXTURE_CUBE_MAP_POSITIVE_X'),
        (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] = 'TEXTURE_CUBE_MAP_NEGATIVE_X'),
        (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] = 'TEXTURE_CUBE_MAP_POSITIVE_Y'),
        (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] = 'TEXTURE_CUBE_MAP_NEGATIVE_Y'),
        (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] = 'TEXTURE_CUBE_MAP_POSITIVE_Z'),
        (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] = 'TEXTURE_CUBE_MAP_NEGATIVE_Z'),
        e
    ))(Ae || {});
    var k = ((e) => (
        (e[(e.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
        (e[(e.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
        (e[(e.UNSIGNED_SHORT_5_6_5 = 33635)] = 'UNSIGNED_SHORT_5_6_5'),
        (e[(e.UNSIGNED_SHORT_4_4_4_4 = 32819)] = 'UNSIGNED_SHORT_4_4_4_4'),
        (e[(e.UNSIGNED_SHORT_5_5_5_1 = 32820)] = 'UNSIGNED_SHORT_5_5_5_1'),
        (e[(e.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
        (e[(e.UNSIGNED_INT_10F_11F_11F_REV = 35899)] = 'UNSIGNED_INT_10F_11F_11F_REV'),
        (e[(e.UNSIGNED_INT_2_10_10_10_REV = 33640)] = 'UNSIGNED_INT_2_10_10_10_REV'),
        (e[(e.UNSIGNED_INT_24_8 = 34042)] = 'UNSIGNED_INT_24_8'),
        (e[(e.UNSIGNED_INT_5_9_9_9_REV = 35902)] = 'UNSIGNED_INT_5_9_9_9_REV'),
        (e[(e.BYTE = 5120)] = 'BYTE'),
        (e[(e.SHORT = 5122)] = 'SHORT'),
        (e[(e.INT = 5124)] = 'INT'),
        (e[(e.FLOAT = 5126)] = 'FLOAT'),
        (e[(e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] = 'FLOAT_32_UNSIGNED_INT_24_8_REV'),
        (e[(e.HALF_FLOAT = 36193)] = 'HALF_FLOAT'),
        e
    ))(k || {});
    var Qi = ((e) => ((e[(e.FLOAT = 0)] = 'FLOAT'), (e[(e.INT = 1)] = 'INT'), (e[(e.UINT = 2)] = 'UINT'), e))(Qi || {});
    var ee = ((e) => ((e[(e.NEAREST = 0)] = 'NEAREST'), (e[(e.LINEAR = 1)] = 'LINEAR'), e))(ee || {});
    var ie = ((e) => (
        (e[(e.CLAMP = 33071)] = 'CLAMP'),
        (e[(e.REPEAT = 10497)] = 'REPEAT'),
        (e[(e.MIRRORED_REPEAT = 33648)] = 'MIRRORED_REPEAT'),
        e
    ))(ie || {});
    var Wt = ((e) => (
        (e[(e.OFF = 0)] = 'OFF'),
        (e[(e.POW2 = 1)] = 'POW2'),
        (e[(e.ON = 2)] = 'ON'),
        (e[(e.ON_MANUAL = 3)] = 'ON_MANUAL'),
        e
    ))(Wt || {});
    var Nt = ((e) => (
        (e[(e.NPM = 0)] = 'NPM'),
        (e[(e.UNPACK = 1)] = 'UNPACK'),
        (e[(e.PMA = 2)] = 'PMA'),
        (e[(e.NO_PREMULTIPLIED_ALPHA = 0)] = 'NO_PREMULTIPLIED_ALPHA'),
        (e[(e.PREMULTIPLY_ON_UPLOAD = 1)] = 'PREMULTIPLY_ON_UPLOAD'),
        (e[(e.PREMULTIPLIED_ALPHA = 2)] = 'PREMULTIPLIED_ALPHA'),
        e
    ))(Nt || {});
    var $t = ((e) => (
        (e[(e.NO = 0)] = 'NO'),
        (e[(e.YES = 1)] = 'YES'),
        (e[(e.AUTO = 2)] = 'AUTO'),
        (e[(e.BLEND = 0)] = 'BLEND'),
        (e[(e.CLEAR = 1)] = 'CLEAR'),
        (e[(e.BLIT = 2)] = 'BLIT'),
        e
    ))($t || {});
    var ts = ((e) => ((e[(e.AUTO = 0)] = 'AUTO'), (e[(e.MANUAL = 1)] = 'MANUAL'), e))(ts || {});
    var Pt = ((e) => ((e.LOW = 'lowp'), (e.MEDIUM = 'mediump'), (e.HIGH = 'highp'), e))(Pt || {});
    var ct = ((e) => (
        (e[(e.NONE = 0)] = 'NONE'),
        (e[(e.SCISSOR = 1)] = 'SCISSOR'),
        (e[(e.STENCIL = 2)] = 'STENCIL'),
        (e[(e.SPRITE = 3)] = 'SPRITE'),
        (e[(e.COLOR = 4)] = 'COLOR'),
        e
    ))(ct || {});
    var $n = ((e) => (
        (e[(e.RED = 1)] = 'RED'),
        (e[(e.GREEN = 2)] = 'GREEN'),
        (e[(e.BLUE = 4)] = 'BLUE'),
        (e[(e.ALPHA = 8)] = 'ALPHA'),
        e
    ))($n || {});
    var nt = ((e) => (
        (e[(e.NONE = 0)] = 'NONE'),
        (e[(e.LOW = 2)] = 'LOW'),
        (e[(e.MEDIUM = 4)] = 'MEDIUM'),
        (e[(e.HIGH = 8)] = 'HIGH'),
        e
    ))(nt || {});
    var jt = ((e) => (
        (e[(e.ELEMENT_ARRAY_BUFFER = 34963)] = 'ELEMENT_ARRAY_BUFFER'),
        (e[(e.ARRAY_BUFFER = 34962)] = 'ARRAY_BUFFER'),
        (e[(e.UNIFORM_BUFFER = 35345)] = 'UNIFORM_BUFFER'),
        e
    ))(jt || {});
    const jn = {
        createCanvas: (e, t) =>
        {
            const i = document.createElement('canvas');

            return (i.width = e), (i.height = t), i;
        },
        getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
        getWebGLRenderingContext: () => WebGLRenderingContext,
        getNavigator: () => navigator,
        getBaseUrl: () =>
        {
            let e;

            return (e = document.baseURI) != null ? e : window.location.href;
        },
        getFontFaceSet: () => document.fonts,
        fetch: (e, t) => fetch(e, t),
        parseXML: (e) => new DOMParser().parseFromString(e, 'text/xml'),
    };
    const P = { ADAPTER: jn, RESOLUTION: 1, CREATE_IMAGE_BITMAP: !1, ROUND_PIXELS: !1 };
    const ir = /iPhone/i;
    const Yn = /iPod/i;
    const qn = /iPad/i;
    const Kn = /\biOS-universal(?:.+)Mac\b/i;
    const sr = /\bAndroid(?:.+)Mobile\b/i;
    const Zn = /Android/i;
    const Xe = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
    const es = /Silk/i;
    const ce = /Windows Phone/i;
    const Jn = /\bWindows(?:.+)ARM\b/i;
    const Qn = /BlackBerry/i;
    const to = /BB10/i;
    const eo = /Opera Mini/i;
    const io = /\b(CriOS|Chrome)(?:.+)Mobile/i;
    const so = /Mobile(?:.+)Firefox\b/i;
    const ro = function (e)
    {
        return (
            typeof e !== 'undefined'
                && e.platform === 'MacIntel'
                && typeof e.maxTouchPoints === 'number'
                && e.maxTouchPoints > 1
                && typeof MSStream === 'undefined'
        );
    };

    function Yh(e)
    {
        return function (t)
        {
            return t.test(e);
        };
    }
    function no(e)
    {
        let t = { userAgent: '', platform: '', maxTouchPoints: 0 };

        !e && typeof navigator !== 'undefined'
            ? (t = {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                maxTouchPoints: navigator.maxTouchPoints || 0,
            })
            : typeof e === 'string'
                ? (t.userAgent = e)
                : e
              && e.userAgent
              && (t = { userAgent: e.userAgent, platform: e.platform, maxTouchPoints: e.maxTouchPoints || 0 });
        let i = t.userAgent;
        let s = i.split('[FBAN');

        typeof s[1] !== 'undefined' && (i = s[0]), (s = i.split('Twitter')), typeof s[1] !== 'undefined' && (i = s[0]);
        const r = Yh(i);
        const n = {
            apple: {
                phone: r(ir) && !r(ce),
                ipod: r(Yn),
                tablet: !r(ir) && (r(qn) || ro(t)) && !r(ce),
                universal: r(Kn),
                device: (r(ir) || r(Yn) || r(qn) || r(Kn) || ro(t)) && !r(ce),
            },
            amazon: { phone: r(Xe), tablet: !r(Xe) && r(es), device: r(Xe) || r(es) },
            android: {
                phone: (!r(ce) && r(Xe)) || (!r(ce) && r(sr)),
                tablet: !r(ce) && !r(Xe) && !r(sr) && (r(es) || r(Zn)),
                device: (!r(ce) && (r(Xe) || r(es) || r(sr) || r(Zn))) || r(/\bokhttp\b/i),
            },
            windows: { phone: r(ce), tablet: r(Jn), device: r(ce) || r(Jn) },
            other: {
                blackberry: r(Qn),
                blackberry10: r(to),
                opera: r(eo),
                firefox: r(so),
                chrome: r(io),
                device: r(Qn) || r(to) || r(eo) || r(so) || r(io),
            },
            any: !1,
            phone: !1,
            tablet: !1,
        };

        return (
            (n.any = n.apple.device || n.android.device || n.windows.device || n.other.device),
            (n.phone = n.apple.phone || n.android.phone || n.windows.phone),
            (n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet),
            n
        );
    }
    const Yt = ((zh = no.default) != null ? zh : no)(globalThis.navigator);

    (P.RETINA_PREFIX = /@([0-9\.]+)x/), (P.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1);
    const rr
        = typeof globalThis !== 'undefined'
            ? globalThis
            : typeof window !== 'undefined'
                ? window
                : typeof global !== 'undefined'
                    ? global
                    : typeof self !== 'undefined'
                        ? self
                        : {};

    function Jd(e)
    {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    function nr(e, t, i)
    {
        return (
            (i = {
                path: t,
                exports: {},
                require(s, r)
                {
                    return qh(s, r == null ? i.path : r);
                },
            }),
            e(i, i.exports),
            i.exports
        );
    }
    function Qd(e)
    {
        return e && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    function tf(e)
    {
        return e && Object.prototype.hasOwnProperty.call(e, 'default') && Object.keys(e).length === 1 ? e.default : e;
    }
    function ef(e)
    {
        if (e.__esModule) return e;
        const t = Object.defineProperty({}, '__esModule', { value: !0 });

        return (
            Object.keys(e).forEach(function (i)
            {
                const s = Object.getOwnPropertyDescriptor(e, i);

                Object.defineProperty(
                    t,
                    i,
                    s.get
                        ? s
                        : {
                            enumerable: !0,
                            get()
                            {
                                return e[i];
                            },
                        },
                );
            }),
            t
        );
    }
    function qh()
    {
        throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }
    const Ve = nr(function (e)
    {
        const t = Object.prototype.hasOwnProperty;
        let i = '~';

        function s() {}
        Object.create && ((s.prototype = Object.create(null)), new s().__proto__ || (i = !1));
        function r(h, l, c)
        {
            (this.fn = h), (this.context = l), (this.once = c || !1);
        }
        function n(h, l, c, u, d)
        {
            if (typeof c !== 'function') throw new TypeError('The listener must be a function');
            const f = new r(c, u || h, d);
            const p = i ? i + l : l;

            return (
                h._events[p]
                    ? h._events[p].fn
                        ? (h._events[p] = [h._events[p], f])
                        : h._events[p].push(f)
                    : ((h._events[p] = f), h._eventsCount++),
                h
            );
        }
        function o(h, l)
        {
            --h._eventsCount === 0 ? (h._events = new s()) : delete h._events[l];
        }
        function a()
        {
            (this._events = new s()), (this._eventsCount = 0);
        }
        (a.prototype.eventNames = function ()
        {
            const l = [];
            let c;
            let u;

            if (this._eventsCount === 0) return l;
            for (u in (c = this._events)) t.call(c, u) && l.push(i ? u.slice(1) : u);

            return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l;
        }),
        (a.prototype.listeners = function (l)
        {
            const c = i ? i + l : l;
            const u = this._events[c];

            if (!u) return [];
            if (u.fn) return [u.fn];
            for (var d = 0, f = u.length, p = new Array(f); d < f; d++) p[d] = u[d].fn;

            return p;
        }),
        (a.prototype.listenerCount = function (l)
        {
            const c = i ? i + l : l;
            const u = this._events[c];

            return u ? (u.fn ? 1 : u.length) : 0;
        }),
        (a.prototype.emit = function (l, c, u, d, f, p)
        {
            const _ = i ? i + l : l;

            if (!this._events[_]) return !1;
            const g = this._events[_];
            const v = arguments.length;
            let T;
            let y;

            if (g.fn)
            {
                switch ((g.once && this.removeListener(l, g.fn, void 0, !0), v))
                {
                    case 1:
                        return g.fn.call(g.context), !0;
                    case 2:
                        return g.fn.call(g.context, c), !0;
                    case 3:
                        return g.fn.call(g.context, c, u), !0;
                    case 4:
                        return g.fn.call(g.context, c, u, d), !0;
                    case 5:
                        return g.fn.call(g.context, c, u, d, f), !0;
                    case 6:
                        return g.fn.call(g.context, c, u, d, f, p), !0;
                }
                for (y = 1, T = new Array(v - 1); y < v; y++) T[y - 1] = arguments[y];
                g.fn.apply(g.context, T);
            }
            else
            {
                const x = g.length;
                let A;

                for (y = 0; y < x; y++)
                {
                    switch ((g[y].once && this.removeListener(l, g[y].fn, void 0, !0), v))
                    {
                        case 1:
                            g[y].fn.call(g[y].context);
                            break;
                        case 2:
                            g[y].fn.call(g[y].context, c);
                            break;
                        case 3:
                            g[y].fn.call(g[y].context, c, u);
                            break;
                        case 4:
                            g[y].fn.call(g[y].context, c, u, d);
                            break;
                        default:
                            if (!T) for (A = 1, T = new Array(v - 1); A < v; A++) T[A - 1] = arguments[A];
                            g[y].fn.apply(g[y].context, T);
                    }
                }
            }

            return !0;
        }),
        (a.prototype.on = function (l, c, u)
        {
            return n(this, l, c, u, !1);
        }),
        (a.prototype.once = function (l, c, u)
        {
            return n(this, l, c, u, !0);
        }),
        (a.prototype.removeListener = function (l, c, u, d)
        {
            const f = i ? i + l : l;

            if (!this._events[f]) return this;
            if (!c) return o(this, f), this;
            const p = this._events[f];

            if (p.fn) p.fn === c && (!d || p.once) && (!u || p.context === u) && o(this, f);
            else
            {
                for (var _ = 0, g = [], v = p.length; _ < v; _++)
                { (p[_].fn !== c || (d && !p[_].once) || (u && p[_].context !== u)) && g.push(p[_]); }
                g.length ? (this._events[f] = g.length === 1 ? g[0] : g) : o(this, f);
            }

            return this;
        }),
        (a.prototype.removeAllListeners = function (l)
        {
            let c;

            return (
                l
                    ? ((c = i ? i + l : l), this._events[c] && o(this, c))
                    : ((this._events = new s()), (this._eventsCount = 0)),
                this
            );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = i),
        (a.EventEmitter = a),
        (e.exports = a);
    });
    const or = is;
    const Kh = is;

    function is(e, t, i)
    {
        i = i || 2;
        const s = t && t.length;
        const r = s ? t[0] * i : e.length;
        let n = oo(e, 0, r, i, !0);
        const o = [];

        if (!n || n.next === n.prev) return o;
        let a; let h; let l; let c; let u; let d; let
            f;

        if ((s && (n = el(e, t, n, i)), e.length > 80 * i))
        {
            (a = l = e[0]), (h = c = e[1]);
            for (let p = i; p < r; p += i)
            { (u = e[p]), (d = e[p + 1]), u < a && (a = u), d < h && (h = d), u > l && (l = u), d > c && (c = d); }
            (f = Math.max(l - a, c - h)), (f = f !== 0 ? 32767 / f : 0);
        }

        return li(n, o, i, a, h, f, 0), o;
    }
    function oo(e, t, i, s, r)
    {
        let n; let
            o;

        if (r === lr(e, t, i, s) > 0) for (n = t; n < i; n += s) o = lo(n, e[n], e[n + 1], o);
        else for (n = i - s; n >= t; n -= s) o = lo(n, e[n], e[n + 1], o);

        return o && ss(o, o.next) && (ui(o), (o = o.next)), o;
    }
    function Re(e, t)
    {
        if (!e) return e;
        t || (t = e);
        let i = e;
        let s;

        do
        {
            if (((s = !1), !i.steiner && (ss(i, i.next) || ot(i.prev, i, i.next) === 0)))
            {
                if ((ui(i), (i = t = i.prev), i === i.next)) break;
                s = !0;
            }
            else i = i.next;
        }
        while (s || i !== t);

        return t;
    }
    function li(e, t, i, s, r, n, o)
    {
        if (e)
        {
            !o && n && ol(e, s, r, n);
            for (var a = e, h, l; e.prev !== e.next;)
            {
                if (((h = e.prev), (l = e.next), n ? Jh(e, s, r, n) : Zh(e)))
                {
                    t.push((h.i / i) | 0), t.push((e.i / i) | 0), t.push((l.i / i) | 0), ui(e), (e = l.next), (a = l.next);
                    continue;
                }
                if (((e = l), e === a))
                {
                    o
                        ? o === 1
                            ? ((e = Qh(Re(e), t, i)), li(e, t, i, s, r, n, 2))
                            : o === 2 && tl(e, t, i, s, r, n)
                        : li(Re(e), t, i, s, r, n, 1);
                    break;
                }
            }
        }
    }
    function Zh(e)
    {
        const t = e.prev;
        const i = e;
        const s = e.next;

        if (ot(t, i, s) >= 0) return !1;
        for (
            let r = t.x,
                n = i.x,
                o = s.x,
                a = t.y,
                h = i.y,
                l = s.y,
                c = r < n ? (r < o ? r : o) : n < o ? n : o,
                u = a < h ? (a < l ? a : l) : h < l ? h : l,
                d = r > n ? (r > o ? r : o) : n > o ? n : o,
                f = a > h ? (a > l ? a : l) : h > l ? h : l,
                p = s.next;
            p !== t;

        )
        {
            if (p.x >= c && p.x <= d && p.y >= u && p.y <= f && ze(r, a, n, h, o, l, p.x, p.y) && ot(p.prev, p, p.next) >= 0)
            { return !1; }
            p = p.next;
        }

        return !0;
    }
    function Jh(e, t, i, s)
    {
        const r = e.prev;
        const n = e;
        const o = e.next;

        if (ot(r, n, o) >= 0) return !1;
        for (
            var a = r.x,
                h = n.x,
                l = o.x,
                c = r.y,
                u = n.y,
                d = o.y,
                f = a < h ? (a < l ? a : l) : h < l ? h : l,
                p = c < u ? (c < d ? c : d) : u < d ? u : d,
                _ = a > h ? (a > l ? a : l) : h > l ? h : l,
                g = c > u ? (c > d ? c : d) : u > d ? u : d,
                v = ar(f, p, t, i, s),
                T = ar(_, g, t, i, s),
                y = e.prevZ,
                x = e.nextZ;
            y && y.z >= v && x && x.z <= T;

        )
        {
            if (
                (y.x >= f
                    && y.x <= _
                    && y.y >= p
                    && y.y <= g
                    && y !== r
                    && y !== o
                    && ze(a, c, h, u, l, d, y.x, y.y)
                    && ot(y.prev, y, y.next) >= 0)
                || ((y = y.prevZ),
                x.x >= f
                    && x.x <= _
                    && x.y >= p
                    && x.y <= g
                    && x !== r
                    && x !== o
                    && ze(a, c, h, u, l, d, x.x, x.y)
                    && ot(x.prev, x, x.next) >= 0)
            )
            { return !1; }
            x = x.nextZ;
        }
        for (; y && y.z >= v;)
        {
            if (
                y.x >= f
                && y.x <= _
                && y.y >= p
                && y.y <= g
                && y !== r
                && y !== o
                && ze(a, c, h, u, l, d, y.x, y.y)
                && ot(y.prev, y, y.next) >= 0
            )
            { return !1; }
            y = y.prevZ;
        }
        for (; x && x.z <= T;)
        {
            if (
                x.x >= f
                && x.x <= _
                && x.y >= p
                && x.y <= g
                && x !== r
                && x !== o
                && ze(a, c, h, u, l, d, x.x, x.y)
                && ot(x.prev, x, x.next) >= 0
            )
            { return !1; }
            x = x.nextZ;
        }

        return !0;
    }
    function Qh(e, t, i)
    {
        let s = e;

        do
        {
            const r = s.prev;
            const n = s.next.next;

            !ss(r, n)
                && ao(r, s, s.next, n)
                && ci(r, n)
                && ci(n, r)
                && (t.push((r.i / i) | 0), t.push((s.i / i) | 0), t.push((n.i / i) | 0), ui(s), ui(s.next), (s = e = n)),
            (s = s.next);
        } while (s !== e);

        return Re(s);
    }
    function tl(e, t, i, s, r, n)
    {
        let o = e;

        do
        {
            for (let a = o.next.next; a !== o.prev;)
            {
                if (o.i !== a.i && ll(o, a))
                {
                    let h = ho(o, a);

                    (o = Re(o, o.next)), (h = Re(h, h.next)), li(o, t, i, s, r, n, 0), li(h, t, i, s, r, n, 0);

                    return;
                }
                a = a.next;
            }
            o = o.next;
        } while (o !== e);
    }
    function el(e, t, i, s)
    {
        const r = [];
        let n;
        let o;
        let a;
        let h;
        let l;

        for (n = 0, o = t.length; n < o; n++)
        {
            (a = t[n] * s),
            (h = n < o - 1 ? t[n + 1] * s : e.length),
            (l = oo(e, a, h, s, !1)),
            l === l.next && (l.steiner = !0),
            r.push(hl(l));
        }
        for (r.sort(il), n = 0; n < r.length; n++) i = sl(r[n], i);

        return i;
    }
    function il(e, t)
    {
        return e.x - t.x;
    }
    function sl(e, t)
    {
        const i = rl(e, t);

        if (!i) return t;
        const s = ho(i, e);

        return Re(s, s.next), Re(i, i.next);
    }
    function rl(e, t)
    {
        let i = t;
        const s = e.x;
        const r = e.y;
        let n = -1 / 0;
        let o;

        do
        {
            if (r <= i.y && r >= i.next.y && i.next.y !== i.y)
            {
                const a = i.x + ((r - i.y) * (i.next.x - i.x)) / (i.next.y - i.y);

                if (a <= s && a > n && ((n = a), (o = i.x < i.next.x ? i : i.next), a === s)) return o;
            }
            i = i.next;
        } while (i !== t);
        if (!o) return null;
        const h = o;
        const l = o.x;
        const c = o.y;
        let u = 1 / 0;
        let d;

        i = o;
        do
        {
            s >= i.x
                && i.x >= l
                && s !== i.x
                && ze(r < c ? s : n, r, l, c, r < c ? n : s, r, i.x, i.y)
                && ((d = Math.abs(r - i.y) / (s - i.x)),
                ci(i, e) && (d < u || (d === u && (i.x > o.x || (i.x === o.x && nl(o, i))))) && ((o = i), (u = d))),
            (i = i.next);
        }
        while (i !== h);

        return o;
    }
    function nl(e, t)
    {
        return ot(e.prev, e, t.prev) < 0 && ot(t.next, e, e.next) < 0;
    }
    function ol(e, t, i, s)
    {
        let r = e;

        do r.z === 0 && (r.z = ar(r.x, r.y, t, i, s)), (r.prevZ = r.prev), (r.nextZ = r.next), (r = r.next);
        while (r !== e);
        (r.prevZ.nextZ = null), (r.prevZ = null), al(r);
    }
    function al(e)
    {
        let t;
        let i;
        let s;
        let r;
        let n;
        let o;
        let a;
        let h;
        let l = 1;

        do
        {
            for (i = e, e = null, n = null, o = 0; i;)
            {
                for (o++, s = i, a = 0, t = 0; t < l && (a++, (s = s.nextZ), !!s); t++);
                for (h = l; a > 0 || (h > 0 && s);)
                {
                    a !== 0 && (h === 0 || !s || i.z <= s.z) ? ((r = i), (i = i.nextZ), a--) : ((r = s), (s = s.nextZ), h--),
                    n ? (n.nextZ = r) : (e = r),
                    (r.prevZ = n),
                    (n = r);
                }
                i = s;
            }
            (n.nextZ = null), (l *= 2);
        } while (o > 1);

        return e;
    }
    function ar(e, t, i, s, r)
    {
        return (
            (e = ((e - i) * r) | 0),
            (t = ((t - s) * r) | 0),
            (e = (e | (e << 8)) & 16711935),
            (e = (e | (e << 4)) & 252645135),
            (e = (e | (e << 2)) & 858993459),
            (e = (e | (e << 1)) & 1431655765),
            (t = (t | (t << 8)) & 16711935),
            (t = (t | (t << 4)) & 252645135),
            (t = (t | (t << 2)) & 858993459),
            (t = (t | (t << 1)) & 1431655765),
            e | (t << 1)
        );
    }
    function hl(e)
    {
        let t = e;
        let i = e;

        do (t.x < i.x || (t.x === i.x && t.y < i.y)) && (i = t), (t = t.next);
        while (t !== e);

        return i;
    }
    function ze(e, t, i, s, r, n, o, a)
    {
        return (
            (r - o) * (t - a) >= (e - o) * (n - a)
            && (e - o) * (s - a) >= (i - o) * (t - a)
            && (i - o) * (n - a) >= (r - o) * (s - a)
        );
    }
    function ll(e, t)
    {
        return (
            e.next.i !== t.i
            && e.prev.i !== t.i
            && !cl(e, t)
            && ((ci(e, t) && ci(t, e) && ul(e, t) && (ot(e.prev, e, t.prev) || ot(e, t.prev, t)))
                || (ss(e, t) && ot(e.prev, e, e.next) > 0 && ot(t.prev, t, t.next) > 0))
        );
    }
    function ot(e, t, i)
    {
        return (t.y - e.y) * (i.x - t.x) - (t.x - e.x) * (i.y - t.y);
    }
    function ss(e, t)
    {
        return e.x === t.x && e.y === t.y;
    }
    function ao(e, t, i, s)
    {
        const r = ns(ot(e, t, i));
        const n = ns(ot(e, t, s));
        const o = ns(ot(i, s, e));
        const a = ns(ot(i, s, t));

        return !!(
            (r !== n && o !== a)
            || (r === 0 && rs(e, i, t))
            || (n === 0 && rs(e, s, t))
            || (o === 0 && rs(i, e, s))
            || (a === 0 && rs(i, t, s))
        );
    }
    function rs(e, t, i)
    {
        return (
            t.x <= Math.max(e.x, i.x) && t.x >= Math.min(e.x, i.x) && t.y <= Math.max(e.y, i.y) && t.y >= Math.min(e.y, i.y)
        );
    }
    function ns(e)
    {
        return e > 0 ? 1 : e < 0 ? -1 : 0;
    }
    function cl(e, t)
    {
        let i = e;

        do
        {
            if (i.i !== e.i && i.next.i !== e.i && i.i !== t.i && i.next.i !== t.i && ao(i, i.next, e, t)) return !0;
            i = i.next;
        } while (i !== e);

        return !1;
    }
    function ci(e, t)
    {
        return ot(e.prev, e, e.next) < 0
            ? ot(e, t, e.next) >= 0 && ot(e, e.prev, t) >= 0
            : ot(e, t, e.prev) < 0 || ot(e, e.next, t) < 0;
    }
    function ul(e, t)
    {
        let i = e;
        let s = !1;
        const r = (e.x + t.x) / 2;
        const n = (e.y + t.y) / 2;

        do
        {
            i.y > n != i.next.y > n
                && i.next.y !== i.y
                && r < ((i.next.x - i.x) * (n - i.y)) / (i.next.y - i.y) + i.x
                && (s = !s),
            (i = i.next);
        }
        while (i !== e);

        return s;
    }
    function ho(e, t)
    {
        const i = new hr(e.i, e.x, e.y);
        const s = new hr(t.i, t.x, t.y);
        const r = e.next;
        const n = t.prev;

        return (
            (e.next = t), (t.prev = e), (i.next = r), (r.prev = i), (s.next = i), (i.prev = s), (n.next = s), (s.prev = n), s
        );
    }
    function lo(e, t, i, s)
    {
        const r = new hr(e, t, i);

        return s ? ((r.next = s.next), (r.prev = s), (s.next.prev = r), (s.next = r)) : ((r.prev = r), (r.next = r)), r;
    }
    function ui(e)
    {
        (e.next.prev = e.prev),
        (e.prev.next = e.next),
        e.prevZ && (e.prevZ.nextZ = e.nextZ),
        e.nextZ && (e.nextZ.prevZ = e.prevZ);
    }
    function hr(e, t, i)
    {
        (this.i = e),
        (this.x = t),
        (this.y = i),
        (this.prev = null),
        (this.next = null),
        (this.z = 0),
        (this.prevZ = null),
        (this.nextZ = null),
        (this.steiner = !1);
    }
    is.deviation = function (e, t, i, s)
    {
        const r = t && t.length;
        const n = r ? t[0] * i : e.length;
        let o = Math.abs(lr(e, 0, n, i));

        if (r)
        {
            for (var a = 0, h = t.length; a < h; a++)
            {
                const l = t[a] * i;
                const c = a < h - 1 ? t[a + 1] * i : e.length;

                o -= Math.abs(lr(e, l, c, i));
            }
        }
        let u = 0;

        for (a = 0; a < s.length; a += 3)
        {
            const d = s[a] * i;
            const f = s[a + 1] * i;
            const p = s[a + 2] * i;

            u += Math.abs((e[d] - e[p]) * (e[f + 1] - e[d + 1]) - (e[d] - e[f]) * (e[p + 1] - e[d + 1]));
        }

        return o === 0 && u === 0 ? 0 : Math.abs((u - o) / o);
    };
    function lr(e, t, i, s)
    {
        for (var r = 0, n = t, o = i - s; n < i; n += s) (r += (e[o] - e[n]) * (e[n + 1] + e[o + 1])), (o = n);

        return r;
    }
    (is.flatten = function (e)
    {
        for (var t = e[0][0].length, i = { vertices: [], holes: [], dimensions: t }, s = 0, r = 0; r < e.length; r++)
        {
            for (let n = 0; n < e[r].length; n++) for (let o = 0; o < t; o++) i.vertices.push(e[r][n][o]);
            r > 0 && ((s += e[r - 1].length), i.holes.push(s));
        }

        return i;
    }),
    (or.default = Kh);
    const dl = nr(function (e, t)
    {
        /* ! https://mths.be/punycode v1.3.2 by @mathias */ (function (i)
        {
            const s = t && !t.nodeType && t;
            const r = e && !e.nodeType && e;
            const n = typeof rr === 'object' && rr;

            (n.global === n || n.window === n || n.self === n) && (i = n);
            let o;
            const a = 2147483647;
            const h = 36;
            const l = 1;
            const c = 26;
            const u = 38;
            const d = 700;
            const f = 72;
            const p = 128;
            const _ = '-';
            const g = /^xn--/;
            const v = /[^\x20-\x7E]/;
            const T = /[\x2E\u3002\uFF0E\uFF61]/g;
            const y = {
                overflow: 'Overflow: input needs wider integers to process',
                'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                'invalid-input': 'Invalid input',
            };
            const x = h - l;
            const A = Math.floor;
            const D = String.fromCharCode;
            let R;

            function E(S)
            {
                throw RangeError(y[S]);
            }
            function O(S, X)
            {
                for (var K = S.length, J = []; K--;) J[K] = X(S[K]);

                return J;
            }
            function H(S, X)
            {
                const K = S.split('@');
                let J = '';

                K.length > 1 && ((J = `${K[0]}@`), (S = K[1])), (S = S.replace(T, '.'));
                const Q = S.split('.');
                const vt = O(Q, X).join('.');

                return J + vt;
            }
            function I(S)
            {
                for (var X = [], K = 0, J = S.length, Q, vt; K < J;)
                {
                    (Q = S.charCodeAt(K++)),
                    Q >= 55296 && Q <= 56319 && K < J
                        ? ((vt = S.charCodeAt(K++)),
                        (vt & 64512) == 56320
                            ? X.push(((Q & 1023) << 10) + (vt & 1023) + 65536)
                            : (X.push(Q), K--))
                        : X.push(Q);
                }

                return X;
            }
            function N(S)
            {
                return O(S, function (X)
                {
                    let K = '';

                    return (
                        X > 65535 && ((X -= 65536), (K += D(((X >>> 10) & 1023) | 55296)), (X = 56320 | (X & 1023))),
                        (K += D(X)),
                        K
                    );
                }).join('');
            }
            function w(S)
            {
                return S - 48 < 10 ? S - 22 : S - 65 < 26 ? S - 65 : S - 97 < 26 ? S - 97 : h;
            }
            function b(S, X)
            {
                return S + 22 + 75 * (S < 26) - ((X != 0) << 5);
            }
            function W(S, X, K)
            {
                let J = 0;

                for (S = K ? A(S / d) : S >> 1, S += A(S / X); S > (x * c) >> 1; J += h) S = A(S / x);

                return A(J + ((x + 1) * S) / (S + u));
            }
            function q(S)
            {
                const X = [];
                const K = S.length;
                let J;
                let Q = 0;
                let vt = p;
                let ut = f;
                let xt;
                let wt;
                let Ft;
                let bt;
                let rt;
                let dt;
                let ft;
                let he;
                let le;

                for (xt = S.lastIndexOf(_), xt < 0 && (xt = 0), wt = 0; wt < xt; ++wt)
                { S.charCodeAt(wt) >= 128 && E('not-basic'), X.push(S.charCodeAt(wt)); }
                for (Ft = xt > 0 ? xt + 1 : 0; Ft < K;)
                {
                    for (
                        bt = Q, rt = 1, dt = h;
                        Ft >= K && E('invalid-input'),
                        (ft = w(S.charCodeAt(Ft++))),
                        (ft >= h || ft > A((a - Q) / rt)) && E('overflow'),
                        (Q += ft * rt),
                        (he = dt <= ut ? l : dt >= ut + c ? c : dt - ut),
                        !(ft < he);
                        dt += h
                    )
                    { (le = h - he), rt > A(a / le) && E('overflow'), (rt *= le); }
                    (J = X.length + 1),
                    (ut = W(Q - bt, J, bt == 0)),
                    A(Q / J) > a - vt && E('overflow'),
                    (vt += A(Q / J)),
                    (Q %= J),
                    X.splice(Q++, 0, vt);
                }

                return N(X);
            }
            function F(S)
            {
                let X;
                let K;
                let J;
                let Q;
                let vt;
                let ut;
                let xt;
                let wt;
                let Ft;
                let bt;
                let rt;
                const dt = [];
                let ft;
                let he;
                let le;
                let Zi;

                for (S = I(S), ft = S.length, X = p, K = 0, vt = f, ut = 0; ut < ft; ++ut)
                { (rt = S[ut]), rt < 128 && dt.push(D(rt)); }
                for (J = Q = dt.length, Q && dt.push(_); J < ft;)
                {
                    for (xt = a, ut = 0; ut < ft; ++ut) (rt = S[ut]), rt >= X && rt < xt && (xt = rt);
                    for (
                        he = J + 1, xt - X > A((a - K) / he) && E('overflow'), K += (xt - X) * he, X = xt, ut = 0;
                        ut < ft;
                        ++ut
                    )
                    {
                        if (((rt = S[ut]), rt < X && ++K > a && E('overflow'), rt == X))
                        {
                            for (wt = K, Ft = h; (bt = Ft <= vt ? l : Ft >= vt + c ? c : Ft - vt), !(wt < bt); Ft += h)
                            { (Zi = wt - bt), (le = h - bt), dt.push(D(b(bt + (Zi % le), 0))), (wt = A(Zi / le)); }
                            dt.push(D(b(wt, 0))), (vt = W(K, he, J == Q)), (K = 0), ++J;
                        }
                    }
                    ++K, ++X;
                }

                return dt.join('');
            }
            function Z(S)
            {
                return H(S, function (X)
                {
                    return g.test(X) ? q(X.slice(4).toLowerCase()) : X;
                });
            }
            function ht(S)
            {
                return H(S, function (X)
                {
                    return v.test(X) ? `xn--${F(X)}` : X;
                });
            }
            if (
                ((o = {
                    version: '1.3.2',
                    ucs2: { decode: I, encode: N },
                    decode: q,
                    encode: F,
                    toASCII: ht,
                    toUnicode: Z,
                }),
                s && r)
            )
            {
                if (e.exports == s) r.exports = o;
                else for (R in o) o.hasOwnProperty(R) && (s[R] = o[R]);
            }
            else i.punycode = o;
        })(rr);
    });
    const se = {
        isString(e)
        {
            return typeof e === 'string';
        },
        isObject(e)
        {
            return typeof e === 'object' && e !== null;
        },
        isNull(e)
        {
            return e === null;
        },
        isNullOrUndefined(e)
        {
            return e == null;
        },
    };

    function fl(e, t)
    {
        return Object.prototype.hasOwnProperty.call(e, t);
    }
    const pl = function (e, t, i, s)
    {
        (t = t || '&'), (i = i || '=');
        const r = {};

        if (typeof e !== 'string' || e.length === 0) return r;
        const n = /\+/g;

        e = e.split(t);
        let o = 1e3;

        s && typeof s.maxKeys === 'number' && (o = s.maxKeys);
        let a = e.length;

        o > 0 && a > o && (a = o);
        for (let h = 0; h < a; ++h)
        {
            const l = e[h].replace(n, '%20');
            const c = l.indexOf(i);
            var u;
            var d;
            var f;
            var p;

            c >= 0 ? ((u = l.substr(0, c)), (d = l.substr(c + 1))) : ((u = l), (d = '')),
            (f = decodeURIComponent(u)),
            (p = decodeURIComponent(d)),
            fl(r, f) ? (Array.isArray(r[f]) ? r[f].push(p) : (r[f] = [r[f], p])) : (r[f] = p);
        }

        return r;
    };
    const di = function (e)
    {
        switch (typeof e)
        {
            case 'string':
                return e;
            case 'boolean':
                return e ? 'true' : 'false';
            case 'number':
                return isFinite(e) ? e : '';
            default:
                return '';
        }
    };
    const ml = function (e, t, i, s)
    {
        return (
            (t = t || '&'),
            (i = i || '='),
            e === null && (e = void 0),
            typeof e === 'object'
                ? Object.keys(e)
                    .map(function (r)
                    {
                        const n = encodeURIComponent(di(r)) + i;

                        return Array.isArray(e[r])
                            ? e[r]
                                .map(function (o)
                                {
                                    return n + encodeURIComponent(di(o));
                                })
                                .join(t)
                            : n + encodeURIComponent(di(e[r]));
                    })
                    .join(t)
                : s
                    ? encodeURIComponent(di(s)) + i + encodeURIComponent(di(e))
                    : ''
        );
    };
    const cr = nr(function (e, t)
    {
        (t.decode = t.parse = pl), (t.encode = t.stringify = ml);
    });
    const co = fi;
    const uo = Rl;
    const _l = Cl;
    const fo = Al;
    const gl = Lt;

    function Lt()
    {
        (this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.host = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.query = null),
        (this.pathname = null),
        (this.path = null),
        (this.href = null);
    }
    const yl = /^([a-z0-9.+-]+:)/i;
    const vl = /:[0-9]*$/;
    const xl = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    const Tl = [
        '<',
        '>',
        '"',
        '`',
        ' ',
        '\r',
        `
`,
        '	',
    ];
    const bl = ['{', '}', '|', '\\', '^', '`'].concat(Tl);
    const ur = ['\''].concat(bl);
    const po = ['%', '/', '?', ';', '#'].concat(ur);
    const mo = ['/', '?', '#'];
    const El = 255;
    const _o = /^[+a-z0-9A-Z_-]{0,63}$/;
    const wl = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    const Sl = { javascript: !0, 'javascript:': !0 };
    const dr = { javascript: !0, 'javascript:': !0 };
    const We = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        'http:': !0,
        'https:': !0,
        'ftp:': !0,
        'gopher:': !0,
        'file:': !0,
    };

    function fi(e, t, i)
    {
        if (e && se.isObject(e) && e instanceof Lt) return e;
        const s = new Lt();

        return s.parse(e, t, i), s;
    }
    Lt.prototype.parse = function (e, t, i)
    {
        if (!se.isString(e)) throw new TypeError(`Parameter 'url' must be a string, not ${typeof e}`);
        const s = e.indexOf('?');
        const r = s !== -1 && s < e.indexOf('#') ? '?' : '#';
        const n = e.split(r);
        const o = /\\/g;

        (n[0] = n[0].replace(o, '/')), (e = n.join(r));
        let a = e;

        if (((a = a.trim()), !i && e.split('#').length === 1))
        {
            const h = xl.exec(a);

            if (h)
            {
                return (
                    (this.path = a),
                    (this.href = a),
                    (this.pathname = h[1]),
                    h[2]
                        ? ((this.search = h[2]),
                        t ? (this.query = cr.parse(this.search.substr(1))) : (this.query = this.search.substr(1)))
                        : t && ((this.search = ''), (this.query = {})),
                    this
                );
            }
        }
        let l = yl.exec(a);

        if (l)
        {
            l = l[0];
            var c = l.toLowerCase();

            (this.protocol = c), (a = a.substr(l.length));
        }
        if (i || l || a.match(/^\/\/[^@\/]+@[^@\/]+/))
        {
            var u = a.substr(0, 2) === '//';

            u && !(l && dr[l]) && ((a = a.substr(2)), (this.slashes = !0));
        }
        if (!dr[l] && (u || (l && !We[l])))
        {
            for (var d = -1, f = 0; f < mo.length; f++)
            {
                var p = a.indexOf(mo[f]);

                p !== -1 && (d === -1 || p < d) && (d = p);
            }
            let _; let
                g;

            d === -1 ? (g = a.lastIndexOf('@')) : (g = a.lastIndexOf('@', d)),
            g !== -1 && ((_ = a.slice(0, g)), (a = a.slice(g + 1)), (this.auth = decodeURIComponent(_))),
            (d = -1);
            for (var f = 0; f < po.length; f++)
            {
                var p = a.indexOf(po[f]);

                p !== -1 && (d === -1 || p < d) && (d = p);
            }
            d === -1 && (d = a.length),
            (this.host = a.slice(0, d)),
            (a = a.slice(d)),
            this.parseHost(),
            (this.hostname = this.hostname || '');
            const v = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

            if (!v)
            {
                for (var T = this.hostname.split(/\./), f = 0, y = T.length; f < y; f++)
                {
                    const x = T[f];

                    if (!!x && !x.match(_o))
                    {
                        for (var A = '', D = 0, R = x.length; D < R; D++) x.charCodeAt(D) > 127 ? (A += 'x') : (A += x[D]);
                        if (!A.match(_o))
                        {
                            const E = T.slice(0, f);
                            const O = T.slice(f + 1);
                            const H = x.match(wl);

                            H && (E.push(H[1]), O.unshift(H[2])),
                            O.length && (a = `/${O.join('.')}${a}`),
                            (this.hostname = E.join('.'));
                            break;
                        }
                    }
                }
            }
            this.hostname.length > El ? (this.hostname = '') : (this.hostname = this.hostname.toLowerCase()),
            v || (this.hostname = dl.toASCII(this.hostname));
            var I = this.port ? `:${this.port}` : '';
            const N = this.hostname || '';

            (this.host = N + I),
            (this.href += this.host),
            v && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), a[0] !== '/' && (a = `/${a}`));
        }
        if (!Sl[c])
        {
            for (var f = 0, y = ur.length; f < y; f++)
            {
                const w = ur[f];

                if (a.indexOf(w) !== -1)
                {
                    let b = encodeURIComponent(w);

                    b === w && (b = escape(w)), (a = a.split(w).join(b));
                }
            }
        }
        const W = a.indexOf('#');

        W !== -1 && ((this.hash = a.substr(W)), (a = a.slice(0, W)));
        const q = a.indexOf('?');

        if (
            (q !== -1
                ? ((this.search = a.substr(q)),
                (this.query = a.substr(q + 1)),
                t && (this.query = cr.parse(this.query)),
                (a = a.slice(0, q)))
                : t && ((this.search = ''), (this.query = {})),
            a && (this.pathname = a),
            We[c] && this.hostname && !this.pathname && (this.pathname = '/'),
            this.pathname || this.search)
        )
        {
            var I = this.pathname || '';
            const F = this.search || '';

            this.path = I + F;
        }

        return (this.href = this.format()), this;
    };
    function Al(e)
    {
        return se.isString(e) && (e = fi(e)), e instanceof Lt ? e.format() : Lt.prototype.format.call(e);
    }
    Lt.prototype.format = function ()
    {
        let e = this.auth || '';

        e && ((e = encodeURIComponent(e)), (e = e.replace(/%3A/i, ':')), (e += '@'));
        let t = this.protocol || '';
        let i = this.pathname || '';
        let s = this.hash || '';
        let r = !1;
        let n = '';

        this.host
            ? (r = e + this.host)
            : this.hostname
              && ((r = e + (this.hostname.indexOf(':') === -1 ? this.hostname : `[${this.hostname}]`)),
              this.port && (r += `:${this.port}`)),
        this.query && se.isObject(this.query) && Object.keys(this.query).length && (n = cr.stringify(this.query));
        let o = this.search || (n && `?${n}`) || '';

        return (
            t && t.substr(-1) !== ':' && (t += ':'),
            this.slashes || ((!t || We[t]) && r !== !1)
                ? ((r = `//${r || ''}`), i && i.charAt(0) !== '/' && (i = `/${i}`))
                : r || (r = ''),
            s && s.charAt(0) !== '#' && (s = `#${s}`),
            o && o.charAt(0) !== '?' && (o = `?${o}`),
            (i = i.replace(/[?#]/g, function (a)
            {
                return encodeURIComponent(a);
            })),
            (o = o.replace('#', '%23')),
            t + r + i + o + s
        );
    };
    function Rl(e, t)
    {
        return fi(e, !1, !0).resolve(t);
    }
    Lt.prototype.resolve = function (e)
    {
        return this.resolveObject(fi(e, !1, !0)).format();
    };
    function Cl(e, t)
    {
        return e ? fi(e, !1, !0).resolveObject(t) : t;
    }
    (Lt.prototype.resolveObject = function (e)
    {
        if (se.isString(e))
        {
            const t = new Lt();

            t.parse(e, !1, !0), (e = t);
        }
        for (var i = new Lt(), s = Object.keys(this), r = 0; r < s.length; r++)
        {
            const n = s[r];

            i[n] = this[n];
        }
        if (((i.hash = e.hash), e.href === '')) return (i.href = i.format()), i;
        if (e.slashes && !e.protocol)
        {
            for (let o = Object.keys(e), a = 0; a < o.length; a++)
            {
                const h = o[a];

                h !== 'protocol' && (i[h] = e[h]);
            }

            return We[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = '/'), (i.href = i.format()), i;
        }
        if (e.protocol && e.protocol !== i.protocol)
        {
            if (!We[e.protocol])
            {
                for (let l = Object.keys(e), c = 0; c < l.length; c++)
                {
                    const u = l[c];

                    i[u] = e[u];
                }

                return (i.href = i.format()), i;
            }
            if (((i.protocol = e.protocol), !e.host && !dr[e.protocol]))
            {
                for (var y = (e.pathname || '').split('/'); y.length && !(e.host = y.shift()););
                e.host || (e.host = ''),
                e.hostname || (e.hostname = ''),
                y[0] !== '' && y.unshift(''),
                y.length < 2 && y.unshift(''),
                (i.pathname = y.join('/'));
            }
            else i.pathname = e.pathname;
            if (
                ((i.search = e.search),
                (i.query = e.query),
                (i.host = e.host || ''),
                (i.auth = e.auth),
                (i.hostname = e.hostname || e.host),
                (i.port = e.port),
                i.pathname || i.search)
            )
            {
                const d = i.pathname || '';
                const f = i.search || '';

                i.path = d + f;
            }

            return (i.slashes = i.slashes || e.slashes), (i.href = i.format()), i;
        }
        const p = i.pathname && i.pathname.charAt(0) === '/';
        const _ = e.host || (e.pathname && e.pathname.charAt(0) === '/');
        let g = _ || p || (i.host && e.pathname);
        const v = g;
        let T = (i.pathname && i.pathname.split('/')) || [];
        var y = (e.pathname && e.pathname.split('/')) || [];
        const x = i.protocol && !We[i.protocol];

        if (
            (x
                && ((i.hostname = ''),
                (i.port = null),
                i.host && (T[0] === '' ? (T[0] = i.host) : T.unshift(i.host)),
                (i.host = ''),
                e.protocol
                    && ((e.hostname = null),
                    (e.port = null),
                    e.host && (y[0] === '' ? (y[0] = e.host) : y.unshift(e.host)),
                    (e.host = null)),
                (g = g && (y[0] === '' || T[0] === ''))),
            _)
        )
        {
            (i.host = e.host || e.host === '' ? e.host : i.host),
            (i.hostname = e.hostname || e.hostname === '' ? e.hostname : i.hostname),
            (i.search = e.search),
            (i.query = e.query),
            (T = y);
        }
        else if (y.length) T || (T = []), T.pop(), (T = T.concat(y)), (i.search = e.search), (i.query = e.query);
        else if (!se.isNullOrUndefined(e.search))
        {
            if (x)
            {
                i.hostname = i.host = T.shift();
                var A = i.host && i.host.indexOf('@') > 0 ? i.host.split('@') : !1;

                A && ((i.auth = A.shift()), (i.host = i.hostname = A.shift()));
            }

            return (
                (i.search = e.search),
                (i.query = e.query),
                (!se.isNull(i.pathname) || !se.isNull(i.search))
                    && (i.path = (i.pathname ? i.pathname : '') + (i.search ? i.search : '')),
                (i.href = i.format()),
                i
            );
        }
        if (!T.length)
        { return (i.pathname = null), i.search ? (i.path = `/${i.search}`) : (i.path = null), (i.href = i.format()), i; }
        for (
            var D = T.slice(-1)[0],
                R = ((i.host || e.host || T.length > 1) && (D === '.' || D === '..')) || D === '',
                E = 0,
                O = T.length;
            O >= 0;
            O--
        )
        { (D = T[O]), D === '.' ? T.splice(O, 1) : D === '..' ? (T.splice(O, 1), E++) : E && (T.splice(O, 1), E--); }
        if (!g && !v) for (; E--; E) T.unshift('..');
        g && T[0] !== '' && (!T[0] || T[0].charAt(0) !== '/') && T.unshift(''),
        R && T.join('/').substr(-1) !== '/' && T.push('');
        const H = T[0] === '' || (T[0] && T[0].charAt(0) === '/');

        if (x)
        {
            i.hostname = i.host = H ? '' : T.length ? T.shift() : '';
            var A = i.host && i.host.indexOf('@') > 0 ? i.host.split('@') : !1;

            A && ((i.auth = A.shift()), (i.host = i.hostname = A.shift()));
        }

        return (
            (g = g || (i.host && T.length)),
            g && !H && T.unshift(''),
            T.length ? (i.pathname = T.join('/')) : ((i.pathname = null), (i.path = null)),
            (!se.isNull(i.pathname) || !se.isNull(i.search))
                && (i.path = (i.pathname ? i.pathname : '') + (i.search ? i.search : '')),
            (i.auth = e.auth || i.auth),
            (i.slashes = i.slashes || e.slashes),
            (i.href = i.format()),
            i
        );
    }),
    (Lt.prototype.parseHost = function ()
    {
        let e = this.host;
        let t = vl.exec(e);

        t && ((t = t[0]), t !== ':' && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))),
        e && (this.hostname = e);
    });
    const sf = { parse: co, resolve: uo, resolveObject: _l, format: fo, Url: gl };
    const go = { parse: co, format: fo, resolve: uo };

    function qt(e)
    {
        if (typeof e !== 'string') throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`);
    }
    function pi(e)
    {
        return e.split('?')[0].split('#')[0];
    }
    function Il(e)
    {
        return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    function Pl(e, t, i)
    {
        return e.replace(new RegExp(Il(t), 'g'), i);
    }
    function Ml(e, t)
    {
        let i = '';
        let s = 0;
        let r = -1;
        let n = 0;
        let o = -1;

        for (let a = 0; a <= e.length; ++a)
        {
            if (a < e.length) o = e.charCodeAt(a);
            else
            {
                if (o === 47) break;
                o = 47;
            }
            if (o === 47)
            {
                if (!(r === a - 1 || n === 1))
                {
                    if (r !== a - 1 && n === 2)
                    {
                        if (
                            i.length < 2
                            || s !== 2
                            || i.charCodeAt(i.length - 1) !== 46
                            || i.charCodeAt(i.length - 2) !== 46
                        )
                        {
                            if (i.length > 2)
                            {
                                const h = i.lastIndexOf('/');

                                if (h !== i.length - 1)
                                {
                                    h === -1
                                        ? ((i = ''), (s = 0))
                                        : ((i = i.slice(0, h)), (s = i.length - 1 - i.lastIndexOf('/'))),
                                    (r = a),
                                    (n = 0);
                                    continue;
                                }
                            }
                            else if (i.length === 2 || i.length === 1)
                            {
                                (i = ''), (s = 0), (r = a), (n = 0);
                                continue;
                            }
                        }
                        t && (i.length > 0 ? (i += '/..') : (i = '..'), (s = 2));
                    }
                    else i.length > 0 ? (i += `/${e.slice(r + 1, a)}`) : (i = e.slice(r + 1, a)), (s = a - r - 1);
                }
                (r = a), (n = 0);
            }
            else o === 46 && n !== -1 ? ++n : (n = -1);
        }

        return i;
    }
    const Tt = {
        toPosix(e)
        {
            return Pl(e, '\\', '/');
        },
        isUrl(e)
        {
            return (/^https?:/).test(this.toPosix(e));
        },
        isDataUrl(e)
        {
            return (/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i).test(
                e,
            );
        },
        hasProtocol(e)
        {
            return (/^[^/:]+:\//).test(this.toPosix(e));
        },
        getProtocol(e)
        {
            qt(e), (e = this.toPosix(e));
            let t = '';
            const i = (/^file:\/\/\//).exec(e);
            const s = (/^[^/:]+:\/\//).exec(e);
            const r = (/^[^/:]+:\//).exec(e);

            if (i || s || r)
            {
                const n = (i == null ? void 0 : i[0]) || (s == null ? void 0 : s[0]) || (r == null ? void 0 : r[0]);

                (t = n), (e = e.slice(n.length));
            }

            return t;
        },
        toAbsolute(e, t, i)
        {
            if (this.isDataUrl(e)) return e;
            const s = pi(this.toPosix(t != null ? t : P.ADAPTER.getBaseUrl()));
            const r = pi(this.toPosix(i != null ? i : this.rootname(s)));

            return (
                qt(e),
                (e = this.toPosix(e)),
                e.startsWith('/') ? Tt.join(r, e.slice(1)) : this.isAbsolute(e) ? e : this.join(s, e)
            );
        },
        normalize(e)
        {
            if (((e = this.toPosix(e)), qt(e), e.length === 0)) return '.';
            let t = '';
            const i = e.startsWith('/');

            this.hasProtocol(e) && ((t = this.rootname(e)), (e = e.slice(t.length)));
            const s = e.endsWith('/');

            return (e = Ml(e, !1)), e.length > 0 && s && (e += '/'), i ? `/${e}` : t + e;
        },
        isAbsolute(e)
        {
            return qt(e), (e = this.toPosix(e)), this.hasProtocol(e) ? !0 : e.startsWith('/');
        },
        join(...e)
        {
            let i;

            if (e.length === 0) return '.';
            let t;

            for (let s = 0; s < e.length; ++s)
            {
                const r = e[s];

                if ((qt(r), r.length > 0))
                {
                    if (t === void 0) t = r;
                    else
                    {
                        const n = (i = e[s - 1]) != null ? i : '';

                        this.extname(n) ? (t += `/../${r}`) : (t += `/${r}`);
                    }
                }
            }

            return t === void 0 ? '.' : this.normalize(t);
        },
        dirname(e)
        {
            if ((qt(e), e.length === 0)) return '.';
            e = this.toPosix(e);
            let t = e.charCodeAt(0);
            const i = t === 47;
            let s = -1;
            let r = !0;
            const n = this.getProtocol(e);
            const o = e;

            e = e.slice(n.length);
            for (let a = e.length - 1; a >= 1; --a)
            {
                if (((t = e.charCodeAt(a)), t === 47))
                {
                    if (!r)
                    {
                        s = a;
                        break;
                    }
                }
                else r = !1;
            }

            return s === -1 ? (i ? '/' : this.isUrl(o) ? n + e : n) : i && s === 1 ? '//' : n + e.slice(0, s);
        },
        rootname(e)
        {
            qt(e), (e = this.toPosix(e));
            let t = '';

            if ((e.startsWith('/') ? (t = '/') : (t = this.getProtocol(e)), this.isUrl(e)))
            {
                const i = e.indexOf('/', t.length);

                i !== -1 ? (t = e.slice(0, i)) : (t = e), t.endsWith('/') || (t += '/');
            }

            return t;
        },
        basename(e, t)
        {
            qt(e), t && qt(t), (e = pi(this.toPosix(e)));
            let i = 0;
            let s = -1;
            let r = !0;
            let n;

            if (t !== void 0 && t.length > 0 && t.length <= e.length)
            {
                if (t.length === e.length && t === e) return '';
                let o = t.length - 1;
                let a = -1;

                for (n = e.length - 1; n >= 0; --n)
                {
                    const h = e.charCodeAt(n);

                    if (h === 47)
                    {
                        if (!r)
                        {
                            i = n + 1;
                            break;
                        }
                    }
                    else
                    {
                        a === -1 && ((r = !1), (a = n + 1)),
                        o >= 0 && (h === t.charCodeAt(o) ? --o === -1 && (s = n) : ((o = -1), (s = a)));
                    }
                }

                return i === s ? (s = a) : s === -1 && (s = e.length), e.slice(i, s);
            }
            for (n = e.length - 1; n >= 0; --n)
            {
                if (e.charCodeAt(n) === 47)
                {
                    if (!r)
                    {
                        i = n + 1;
                        break;
                    }
                }
                else s === -1 && ((r = !1), (s = n + 1));
            }

            return s === -1 ? '' : e.slice(i, s);
        },
        extname(e)
        {
            qt(e), (e = pi(this.toPosix(e)));
            let t = -1;
            let i = 0;
            let s = -1;
            let r = !0;
            let n = 0;

            for (let o = e.length - 1; o >= 0; --o)
            {
                const a = e.charCodeAt(o);

                if (a === 47)
                {
                    if (!r)
                    {
                        i = o + 1;
                        break;
                    }
                    continue;
                }
                s === -1 && ((r = !1), (s = o + 1)),
                a === 46 ? (t === -1 ? (t = o) : n !== 1 && (n = 1)) : t !== -1 && (n = -1);
            }

            return t === -1 || s === -1 || n === 0 || (n === 1 && t === s - 1 && t === i + 1) ? '' : e.slice(t, s);
        },
        parse(e)
        {
            qt(e);
            const t = { root: '', dir: '', base: '', ext: '', name: '' };

            if (e.length === 0) return t;
            e = pi(this.toPosix(e));
            let i = e.charCodeAt(0);
            const s = this.isAbsolute(e);
            let r;
            const n = '';

            (t.root = this.rootname(e)), s || this.hasProtocol(e) ? (r = 1) : (r = 0);
            let o = -1;
            let a = 0;
            let h = -1;
            let l = !0;
            let c = e.length - 1;
            let u = 0;

            for (; c >= r; --c)
            {
                if (((i = e.charCodeAt(c)), i === 47))
                {
                    if (!l)
                    {
                        a = c + 1;
                        break;
                    }
                    continue;
                }
                h === -1 && ((l = !1), (h = c + 1)),
                i === 46 ? (o === -1 ? (o = c) : u !== 1 && (u = 1)) : o !== -1 && (u = -1);
            }

            return (
                o === -1 || h === -1 || u === 0 || (u === 1 && o === h - 1 && o === a + 1)
                    ? h !== -1 && (a === 0 && s ? (t.base = t.name = e.slice(1, h)) : (t.base = t.name = e.slice(a, h)))
                    : (a === 0 && s
                        ? ((t.name = e.slice(1, o)), (t.base = e.slice(1, h)))
                        : ((t.name = e.slice(a, o)), (t.base = e.slice(a, h))),
                    (t.ext = e.slice(o, h))),
                (t.dir = this.dirname(e)),
                n && (t.dir = n + t.dir),
                t
            );
        },
        sep: '/',
        delimiter: ':',
    };
    const yo = {};

    function z(e, t, i = 3)
    {
        if (yo[t]) return;
        let s = new Error().stack;

        typeof s === 'undefined'
            ? console.warn(
                'PixiJS Deprecation Warning: ',
                `${t}
Deprecated since v${e}`,
            )
            : ((s = s
                .split(
                    `
`,
                )
                .splice(i).join(`
`)),
            console.groupCollapsed
                ? (console.groupCollapsed(
                    '%cPixiJS Deprecation Warning: %c%s',
                    'color:#614108;background:#fffbe6',
                    'font-weight:normal;color:#614108;background:#fffbe6',
                    `${t}
Deprecated since v${e}`,
                ),
                console.warn(s),
                console.groupEnd())
                : (console.warn(
                    'PixiJS Deprecation Warning: ',
                    `${t}
Deprecated since v${e}`,
                ),
                console.warn(s))),
        (yo[t] = !0);
    }
    function Bl()
    {
        z('7.0.0', 'skipHello is deprecated, please use settings.RENDER_OPTIONS.hello');
    }
    function Dl()
    {
        z('7.0.0', `sayHello is deprecated, please use Renderer's "hello" option`);
    }
    let fr;

    function vo()
    {
        return (
            typeof fr === 'undefined'
                && (fr = (function ()
                {
                    let i;
                    const t = { stencil: !0, failIfMajorPerformanceCaveat: P.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT };

                    try
                    {
                        if (!P.ADAPTER.getWebGLRenderingContext()) return !1;
                        const s = P.ADAPTER.createCanvas();
                        let r = s.getContext('webgl', t) || s.getContext('experimental-webgl', t);
                        const n = !!((i = r == null ? void 0 : r.getContextAttributes()) != null && i.stencil);

                        if (r)
                        {
                            const o = r.getExtension('WEBGL_lose_context');

                            o && o.loseContext();
                        }

                        return (r = null), n;
                    }
                    catch (s)
                    {
                        return !1;
                    }
                })()),
            fr
        );
    }
    const Fl = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
    const ue = function (e)
    {
        return typeof e === 'string' ? e.length > 0 : typeof e === 'number';
    };
    const mt = function (e, t, i)
    {
        return t === void 0 && (t = 0), i === void 0 && (i = Math.pow(10, t)), Math.round(i * e) / i + 0;
    };
    const Ot = function (e, t, i)
    {
        return t === void 0 && (t = 0), i === void 0 && (i = 1), e > i ? i : e > t ? e : t;
    };
    const xo = function (e)
    {
        return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360;
    };
    const To = function (e)
    {
        return { r: Ot(e.r, 0, 255), g: Ot(e.g, 0, 255), b: Ot(e.b, 0, 255), a: Ot(e.a) };
    };
    const pr = function (e)
    {
        return { r: mt(e.r), g: mt(e.g), b: mt(e.b), a: mt(e.a, 3) };
    };
    const Nl = /^#([0-9a-f]{3,8})$/i;
    const os = function (e)
    {
        const t = e.toString(16);

        return t.length < 2 ? `0${t}` : t;
    };
    const bo = function (e)
    {
        const t = e.r;
        const i = e.g;
        const s = e.b;
        const r = e.a;
        const n = Math.max(t, i, s);
        const o = n - Math.min(t, i, s);
        const a = o ? (n === t ? (i - s) / o : n === i ? 2 + (s - t) / o : 4 + (t - i) / o) : 0;

        return { h: 60 * (a < 0 ? a + 6 : a), s: n ? (o / n) * 100 : 0, v: (n / 255) * 100, a: r };
    };
    const Eo = function (e)
    {
        let t = e.h;
        let i = e.s;
        let s = e.v;
        const r = e.a;

        (t = (t / 360) * 6), (i /= 100), (s /= 100);
        const n = Math.floor(t);
        const o = s * (1 - i);
        const a = s * (1 - (t - n) * i);
        const h = s * (1 - (1 - t + n) * i);
        const l = n % 6;

        return { r: 255 * [s, a, o, o, h, s][l], g: 255 * [h, s, s, a, o, o][l], b: 255 * [o, o, h, s, s, a][l], a: r };
    };
    const wo = function (e)
    {
        return { h: xo(e.h), s: Ot(e.s, 0, 100), l: Ot(e.l, 0, 100), a: Ot(e.a) };
    };
    const So = function (e)
    {
        return { h: mt(e.h), s: mt(e.s), l: mt(e.l), a: mt(e.a, 3) };
    };
    const Ao = function (e)
    {
        return Eo(
            ((i = (t = e).s),
            {
                h: t.h,
                s: (i *= ((s = t.l) < 50 ? s : 100 - s) / 100) > 0 ? ((2 * i) / (s + i)) * 100 : 0,
                v: s + i,
                a: t.a,
            }),
        );
        let t; let i; let
            s;
    };
    const mi = function (e)
    {
        return {
            h: (t = bo(e)).h,
            s:
                    (r = ((200 - (i = t.s)) * (s = t.v)) / 100) > 0 && r < 200
                        ? ((i * s) / 100 / (r <= 100 ? r : 200 - r)) * 100
                        : 0,
            l: r / 2,
            a: t.a,
        };
        let t; let i; let s; let
            r;
    };
    const Ll
            = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
    const Ol
            = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
    const Ul
            = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
    const kl
            = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
    const mr = {
        string: [
            [
                function (e)
                {
                    const t = Nl.exec(e);

                    return t
                        ? (e = t[1]).length <= 4
                            ? {
                                r: parseInt(e[0] + e[0], 16),
                                g: parseInt(e[1] + e[1], 16),
                                b: parseInt(e[2] + e[2], 16),
                                a: e.length === 4 ? mt(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
                            }
                            : e.length === 6 || e.length === 8
                                ? {
                                    r: parseInt(e.substr(0, 2), 16),
                                    g: parseInt(e.substr(2, 2), 16),
                                    b: parseInt(e.substr(4, 2), 16),
                                    a: e.length === 8 ? mt(parseInt(e.substr(6, 2), 16) / 255, 2) : 1,
                                }
                                : null
                        : null;
                },
                'hex',
            ],
            [
                function (e)
                {
                    const t = Ul.exec(e) || kl.exec(e);

                    return t
                        ? t[2] !== t[4] || t[4] !== t[6]
                            ? null
                            : To({
                                r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                                g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                                b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                                a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                            })
                        : null;
                },
                'rgb',
            ],
            [
                function (e)
                {
                    const t = Ll.exec(e) || Ol.exec(e);

                    if (!t) return null;
                    let i;
                    let s;
                    const r = wo({
                        h: ((i = t[1]), (s = t[2]), s === void 0 && (s = 'deg'), Number(i) * (Fl[s] || 1)),
                        s: Number(t[3]),
                        l: Number(t[4]),
                        a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
                    });

                    return Ao(r);
                },
                'hsl',
            ],
        ],
        object: [
            [
                function (e)
                {
                    const t = e.r;
                    const i = e.g;
                    const s = e.b;
                    const r = e.a;
                    const n = r === void 0 ? 1 : r;

                    return ue(t) && ue(i) && ue(s)
                        ? To({ r: Number(t), g: Number(i), b: Number(s), a: Number(n) })
                        : null;
                },
                'rgb',
            ],
            [
                function (e)
                {
                    const t = e.h;
                    const i = e.s;
                    const s = e.l;
                    const r = e.a;
                    const n = r === void 0 ? 1 : r;

                    if (!ue(t) || !ue(i) || !ue(s)) return null;
                    const o = wo({ h: Number(t), s: Number(i), l: Number(s), a: Number(n) });

                    return Ao(o);
                },
                'hsl',
            ],
            [
                function (e)
                {
                    const t = e.h;
                    const i = e.s;
                    const s = e.v;
                    const r = e.a;
                    const n = r === void 0 ? 1 : r;

                    if (!ue(t) || !ue(i) || !ue(s)) return null;
                    const o = (function (a)
                    {
                        return { h: xo(a.h), s: Ot(a.s, 0, 100), v: Ot(a.v, 0, 100), a: Ot(a.a) };
                    })({ h: Number(t), s: Number(i), v: Number(s), a: Number(n) });

                    return Eo(o);
                },
                'hsv',
            ],
        ],
    };
    const Ro = function (e, t)
    {
        for (let i = 0; i < t.length; i++)
        {
            const s = t[i][0](e);

            if (s) return [s, t[i][1]];
        }

        return [null, void 0];
    };
    const Co = function (e)
    {
        return typeof e === 'string'
            ? Ro(e.trim(), mr.string)
            : typeof e === 'object' && e !== null
                ? Ro(e, mr.object)
                : [null, void 0];
    };
    const rf = function (e)
    {
        return Co(e)[1];
    };
    const _r = function (e, t)
    {
        const i = mi(e);

        return { h: i.h, s: Ot(i.s + 100 * t, 0, 100), l: i.l, a: i.a };
    };
    const gr = function (e)
    {
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255;
    };
    const Io = function (e, t)
    {
        const i = mi(e);

        return { h: i.h, s: i.s, l: Ot(i.l + 100 * t, 0, 100), a: i.a };
    };
    const as = (function ()
    {
        function e(t)
        {
            (this.parsed = Co(t)[0]), (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 });
        }

        return (
            (e.prototype.isValid = function ()
            {
                return this.parsed !== null;
            }),
            (e.prototype.brightness = function ()
            {
                return mt(gr(this.rgba), 2);
            }),
            (e.prototype.isDark = function ()
            {
                return gr(this.rgba) < 0.5;
            }),
            (e.prototype.isLight = function ()
            {
                return gr(this.rgba) >= 0.5;
            }),
            (e.prototype.toHex = function ()
            {
                return (
                    (t = pr(this.rgba)),
                    (i = t.r),
                    (s = t.g),
                    (r = t.b),
                    (o = (n = t.a) < 1 ? os(mt(255 * n)) : ''),
                    `#${os(i)}${os(s)}${os(r)}${o}`
                );
                let t; let i; let s; let r; let n; let
                    o;
            }),
            (e.prototype.toRgb = function ()
            {
                return pr(this.rgba);
            }),
            (e.prototype.toRgbString = function ()
            {
                return (
                    (t = pr(this.rgba)),
                    (i = t.r),
                    (s = t.g),
                    (r = t.b),
                    (n = t.a) < 1
                        ? `rgba(${i}, ${s}, ${r}, ${n})`
                        : `rgb(${i}, ${s}, ${r})`
                );
                let t; let i; let s; let r; let
                    n;
            }),
            (e.prototype.toHsl = function ()
            {
                return So(mi(this.rgba));
            }),
            (e.prototype.toHslString = function ()
            {
                return (
                    (t = So(mi(this.rgba))),
                    (i = t.h),
                    (s = t.s),
                    (r = t.l),
                    (n = t.a) < 1
                        ? `hsla(${i}, ${s}%, ${r}%, ${n})`
                        : `hsl(${i}, ${s}%, ${r}%)`
                );
                let t; let i; let s; let r; let
                    n;
            }),
            (e.prototype.toHsv = function ()
            {
                return (t = bo(this.rgba)), { h: mt(t.h), s: mt(t.s), v: mt(t.v), a: mt(t.a, 3) };
                let t;
            }),
            (e.prototype.invert = function ()
            {
                return re({ r: 255 - (t = this.rgba).r, g: 255 - t.g, b: 255 - t.b, a: t.a });
                let t;
            }),
            (e.prototype.saturate = function (t)
            {
                return t === void 0 && (t = 0.1), re(_r(this.rgba, t));
            }),
            (e.prototype.desaturate = function (t)
            {
                return t === void 0 && (t = 0.1), re(_r(this.rgba, -t));
            }),
            (e.prototype.grayscale = function ()
            {
                return re(_r(this.rgba, -1));
            }),
            (e.prototype.lighten = function (t)
            {
                return t === void 0 && (t = 0.1), re(Io(this.rgba, t));
            }),
            (e.prototype.darken = function (t)
            {
                return t === void 0 && (t = 0.1), re(Io(this.rgba, -t));
            }),
            (e.prototype.rotate = function (t)
            {
                return t === void 0 && (t = 15), this.hue(this.hue() + t);
            }),
            (e.prototype.alpha = function (t)
            {
                return typeof t === 'number' ? re({ r: (i = this.rgba).r, g: i.g, b: i.b, a: t }) : mt(this.rgba.a, 3);
                let i;
            }),
            (e.prototype.hue = function (t)
            {
                const i = mi(this.rgba);

                return typeof t === 'number' ? re({ h: t, s: i.s, l: i.l, a: i.a }) : mt(i.h);
            }),
            (e.prototype.isEqual = function (t)
            {
                return this.toHex() === re(t).toHex();
            }),
            e
        );
    })();
    var re = function (e)
    {
        return e instanceof as ? e : new as(e);
    };
    const Po = [];
    const Gl = function (e)
    {
        e.forEach(function (t)
        {
            Po.indexOf(t) < 0 && (t(as, mr), Po.push(t));
        });
    };
    const nf = function ()
    {
        return new as({ r: 255 * Math.random(), g: 255 * Math.random(), b: 255 * Math.random() });
    };

    function Hl(e, t)
    {
        const i = {
            white: '#ffffff',
            bisque: '#ffe4c4',
            blue: '#0000ff',
            cadetblue: '#5f9ea0',
            chartreuse: '#7fff00',
            chocolate: '#d2691e',
            coral: '#ff7f50',
            antiquewhite: '#faebd7',
            aqua: '#00ffff',
            azure: '#f0ffff',
            whitesmoke: '#f5f5f5',
            papayawhip: '#ffefd5',
            plum: '#dda0dd',
            blanchedalmond: '#ffebcd',
            black: '#000000',
            gold: '#ffd700',
            goldenrod: '#daa520',
            gainsboro: '#dcdcdc',
            cornsilk: '#fff8dc',
            cornflowerblue: '#6495ed',
            burlywood: '#deb887',
            aquamarine: '#7fffd4',
            beige: '#f5f5dc',
            crimson: '#dc143c',
            cyan: '#00ffff',
            darkblue: '#00008b',
            darkcyan: '#008b8b',
            darkgoldenrod: '#b8860b',
            darkkhaki: '#bdb76b',
            darkgray: '#a9a9a9',
            darkgreen: '#006400',
            darkgrey: '#a9a9a9',
            peachpuff: '#ffdab9',
            darkmagenta: '#8b008b',
            darkred: '#8b0000',
            darkorchid: '#9932cc',
            darkorange: '#ff8c00',
            darkslateblue: '#483d8b',
            gray: '#808080',
            darkslategray: '#2f4f4f',
            darkslategrey: '#2f4f4f',
            deeppink: '#ff1493',
            deepskyblue: '#00bfff',
            wheat: '#f5deb3',
            firebrick: '#b22222',
            floralwhite: '#fffaf0',
            ghostwhite: '#f8f8ff',
            darkviolet: '#9400d3',
            magenta: '#ff00ff',
            green: '#008000',
            dodgerblue: '#1e90ff',
            grey: '#808080',
            honeydew: '#f0fff0',
            hotpink: '#ff69b4',
            blueviolet: '#8a2be2',
            forestgreen: '#228b22',
            lawngreen: '#7cfc00',
            indianred: '#cd5c5c',
            indigo: '#4b0082',
            fuchsia: '#ff00ff',
            brown: '#a52a2a',
            maroon: '#800000',
            mediumblue: '#0000cd',
            lightcoral: '#f08080',
            darkturquoise: '#00ced1',
            lightcyan: '#e0ffff',
            ivory: '#fffff0',
            lightyellow: '#ffffe0',
            lightsalmon: '#ffa07a',
            lightseagreen: '#20b2aa',
            linen: '#faf0e6',
            mediumaquamarine: '#66cdaa',
            lemonchiffon: '#fffacd',
            lime: '#00ff00',
            khaki: '#f0e68c',
            mediumseagreen: '#3cb371',
            limegreen: '#32cd32',
            mediumspringgreen: '#00fa9a',
            lightskyblue: '#87cefa',
            lightblue: '#add8e6',
            midnightblue: '#191970',
            lightpink: '#ffb6c1',
            mistyrose: '#ffe4e1',
            moccasin: '#ffe4b5',
            mintcream: '#f5fffa',
            lightslategray: '#778899',
            lightslategrey: '#778899',
            navajowhite: '#ffdead',
            navy: '#000080',
            mediumvioletred: '#c71585',
            powderblue: '#b0e0e6',
            palegoldenrod: '#eee8aa',
            oldlace: '#fdf5e6',
            paleturquoise: '#afeeee',
            mediumturquoise: '#48d1cc',
            mediumorchid: '#ba55d3',
            rebeccapurple: '#663399',
            lightsteelblue: '#b0c4de',
            mediumslateblue: '#7b68ee',
            thistle: '#d8bfd8',
            tan: '#d2b48c',
            orchid: '#da70d6',
            mediumpurple: '#9370db',
            purple: '#800080',
            pink: '#ffc0cb',
            skyblue: '#87ceeb',
            springgreen: '#00ff7f',
            palegreen: '#98fb98',
            red: '#ff0000',
            yellow: '#ffff00',
            slateblue: '#6a5acd',
            lavenderblush: '#fff0f5',
            peru: '#cd853f',
            palevioletred: '#db7093',
            violet: '#ee82ee',
            teal: '#008080',
            slategray: '#708090',
            slategrey: '#708090',
            aliceblue: '#f0f8ff',
            darkseagreen: '#8fbc8f',
            darkolivegreen: '#556b2f',
            greenyellow: '#adff2f',
            seagreen: '#2e8b57',
            seashell: '#fff5ee',
            tomato: '#ff6347',
            silver: '#c0c0c0',
            sienna: '#a0522d',
            lavender: '#e6e6fa',
            lightgreen: '#90ee90',
            orange: '#ffa500',
            orangered: '#ff4500',
            steelblue: '#4682b4',
            royalblue: '#4169e1',
            turquoise: '#40e0d0',
            yellowgreen: '#9acd32',
            salmon: '#fa8072',
            saddlebrown: '#8b4513',
            sandybrown: '#f4a460',
            rosybrown: '#bc8f8f',
            darksalmon: '#e9967a',
            lightgoldenrodyellow: '#fafad2',
            snow: '#fffafa',
            lightgrey: '#d3d3d3',
            lightgray: '#d3d3d3',
            dimgray: '#696969',
            dimgrey: '#696969',
            olivedrab: '#6b8e23',
            olive: '#808000',
        };
        const s = {};

        for (const r in i) s[i[r]] = r;
        const n = {};

        (e.prototype.toName = function (o)
        {
            if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return 'transparent';
            let a;
            let h;
            const l = s[this.toHex()];

            if (l) return l;
            if (o != null && o.closest)
            {
                const c = this.toRgb();
                let u = 1 / 0;
                let d = 'black';

                if (!n.length) for (const f in i) n[f] = new e(i[f]).toRgb();
                for (const p in i)
                {
                    const _ = ((a = c), (h = n[p]), Math.pow(a.r - h.r, 2) + Math.pow(a.g - h.g, 2) + Math.pow(a.b - h.b, 2));

                    _ < u && ((u = _), (d = p));
                }

                return d;
            }
        }),
        t.string.push([
            function (o)
            {
                const a = o.toLowerCase();
                const h = a === 'transparent' ? '#0000' : i[a];

                return h ? new e(h).toRgb() : null;
            },
            'name',
        ]);
    }
    Gl([Hl]);
    const $e = class
    {
        constructor(e = 16777215)
        {
            (this._value = null),
            (this._components = new Float32Array(4)),
            this._components.fill(1),
            (this._int = 16777215),
            (this.value = e);
        }
        get red()
        {
            return this._components[0];
        }
        get green()
        {
            return this._components[1];
        }
        get blue()
        {
            return this._components[2];
        }
        get alpha()
        {
            return this._components[3];
        }
        setValue(e)
        {
            return (this.value = e), this;
        }
        set value(e)
        {
            if (e instanceof $e) (this._value = e._value), (this._int = e._int), this._components.set(e._components);
            else
            {
                if (e === null) throw new Error('Cannot set PIXI.Color#value to null');
                this._value !== e && (this.normalize(e), (this._value = e));
            }
        }
        get value()
        {
            return this._value;
        }
        toRgba()
        {
            const [e, t, i, s] = this._components;

            return { r: e, g: t, b: i, a: s };
        }
        toRgb()
        {
            const [e, t, i] = this._components;

            return { r: e, g: t, b: i };
        }
        toRgbaString()
        {
            const [e, t, i] = this.toUint8RgbArray();

            return `rgba(${e},${t},${i},${this.alpha})`;
        }
        toUint8RgbArray(e)
        {
            const [t, i, s] = this._components;

            return (
                (e = e != null ? e : []),
                (e[0] = Math.round(t * 255)),
                (e[1] = Math.round(i * 255)),
                (e[2] = Math.round(s * 255)),
                e
            );
        }
        toRgbArray(e)
        {
            e = e != null ? e : [];
            const [t, i, s] = this._components;

            return (e[0] = t), (e[1] = i), (e[2] = s), e;
        }
        toNumber()
        {
            return this._int;
        }
        toLittleEndianNumber()
        {
            const e = this._int;

            return (e >> 16) + (e & 65280) + ((e & 255) << 16);
        }
        multiply(e)
        {
            const [t, i, s, r] = $e.temp.setValue(e)._components;

            return (
                (this._components[0] *= t),
                (this._components[1] *= i),
                (this._components[2] *= s),
                (this._components[3] *= r),
                this.refreshInt(),
                (this._value = null),
                this
            );
        }
        premultiply(e, t = !0)
        {
            return (
                t && ((this._components[0] *= e), (this._components[1] *= e), (this._components[2] *= e)),
                (this._components[3] = e),
                this.refreshInt(),
                (this._value = null),
                this
            );
        }
        toPremultiplied(e)
        {
            if (e === 1) return ((e * 255) << 24) + this._int;
            if (e === 0) return 0;
            let t = (this._int >> 16) & 255;
            let i = (this._int >> 8) & 255;
            let s = this._int & 255;

            return (
                (t = (t * e + 0.5) | 0),
                (i = (i * e + 0.5) | 0),
                (s = (s * e + 0.5) | 0),
                ((e * 255) << 24) + (t << 16) + (i << 8) + s
            );
        }
        toHex()
        {
            const e = this._int.toString(16);

            return `#${'000000'.substring(0, 6 - e.length) + e}`;
        }
        toHexa()
        {
            const t = Math.round(this._components[3] * 255).toString(16);

            return this.toHex() + '00'.substring(0, 2 - t.length) + t;
        }
        setAlpha(e)
        {
            return (this._components[3] = e), this;
        }
        round(e)
        {
            const [t, i, s] = this._components;

            return (
                this._components.set([Math.min(255, (t / e) * e), Math.min(255, (i / e) * e), Math.min(255, (s / e) * e)]),
                this.refreshInt(),
                (this._value = null),
                this
            );
        }
        toArray(e)
        {
            e = e != null ? e : [];
            const [t, i, s, r] = this._components;

            return (e[0] = t), (e[1] = i), (e[2] = s), (e[3] = r), e;
        }
        normalize(e)
        {
            let t;

            if ((typeof e === 'number' || e instanceof Number) && e >= 0 && e <= 16777215)
            {
                const i = e;

                t = [((i >> 16) & 255) / 255, ((i >> 8) & 255) / 255, (i & 255) / 255, 1];
            }
            else if (
                (Array.isArray(e) || e instanceof Float32Array)
                && e.length >= 3
                && e.length <= 4
                && e.every((i) => i <= 1 && i >= 0)
            )
            {
                const [i, s, r, n = 1] = e;

                t = [i, s, r, n];
            }
            else if ((e instanceof Uint8Array || e instanceof Uint8ClampedArray) && e.length >= 3 && e.length <= 4)
            {
                const [i, s, r, n = 255] = e;

                t = [i / 255, s / 255, r / 255, n / 255];
            }
            else if (typeof e === 'string' || typeof e === 'object')
            {
                if (typeof e === 'string')
                {
                    const s = $e.HEX_PATTERN.exec(e);

                    s && (e = `#${s[2]}`);
                }
                const i = re(e);

                if (i.isValid())
                {
                    const { r: s, g: r, b: n, a: o } = i.rgba;

                    t = [s / 255, r / 255, n / 255, o];
                }
            }
            if (t) this._components.set(t), this.refreshInt();
            else throw new Error(`Unable to convert color ${e}`);
        }
        refreshInt()
        {
            const [e, t, i] = this._components;

            this._int = ((e * 255) << 16) + ((t * 255) << 8) + ((i * 255) | 0);
        }
    };
    const j = $e;

    (j.shared = new $e()), (j.temp = new $e()), (j.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i);
    function Xl(e, t = [])
    {
        return z('7.2.0', 'utils.hex2rgb is deprecated, use Color#toRgbArray instead'), j.shared.setValue(e).toRgbArray(t);
    }
    function Mo(e)
    {
        return z('7.2.0', 'utils.hex2string is deprecated, use Color#toHex instead'), j.shared.setValue(e).toHex();
    }
    function Vl(e)
    {
        return z('7.2.0', 'utils.string2hex is deprecated, use Color#toNumber instead'), j.shared.setValue(e).toNumber();
    }
    function Bo(e)
    {
        return z('7.2.0', 'utils.rgb2hex is deprecated, use Color#toNumber instead'), j.shared.setValue(e).toNumber();
    }
    function zl()
    {
        const e = [];
        const t = [];

        for (let s = 0; s < 32; s++) (e[s] = s), (t[s] = s);
        (e[G.NORMAL_NPM] = G.NORMAL),
        (e[G.ADD_NPM] = G.ADD),
        (e[G.SCREEN_NPM] = G.SCREEN),
        (t[G.NORMAL] = G.NORMAL_NPM),
        (t[G.ADD] = G.ADD_NPM),
        (t[G.SCREEN] = G.SCREEN_NPM);
        const i = [];

        return i.push(t), i.push(e), i;
    }
    const yr = zl();

    function vr(e, t)
    {
        return yr[t ? 1 : 0][e];
    }
    function Wl(e, t, i, s = !0)
    {
        return (
            z('7.2.0', 'utils.premultiplyRgba has moved to Color.premultiply'),
            j.shared
                .setValue(e)
                .premultiply(t, s)
                .toArray(i != null ? i : new Float32Array(4))
        );
    }
    function $l(e, t)
    {
        return (
            z('7.2.0', 'utils.premultiplyTint has moved to Color.toPremultiplied'), j.shared.setValue(e).toPremultiplied(t)
        );
    }
    function jl(e, t, i, s = !0)
    {
        return (
            z('7.2.0', 'utils.premultiplyTintToRgba has moved to Color.premultiply'),
            j.shared
                .setValue(e)
                .premultiply(t, s)
                .toArray(i != null ? i : new Float32Array(4))
        );
    }
    const Do = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;

    function Fo(e, t = null)
    {
        const i = e * 6;

        if (((t = t || new Uint16Array(i)), t.length !== i))
        { throw new Error(`Out buffer length is incorrect, got ${t.length} and expected ${i}`); }
        for (let s = 0, r = 0; s < i; s += 6, r += 4)
        {
            (t[s + 0] = r + 0),
            (t[s + 1] = r + 1),
            (t[s + 2] = r + 2),
            (t[s + 3] = r + 0),
            (t[s + 4] = r + 2),
            (t[s + 5] = r + 3);
        }

        return t;
    }
    function hs(e)
    {
        if (e.BYTES_PER_ELEMENT === 4)
        { return e instanceof Float32Array ? 'Float32Array' : e instanceof Uint32Array ? 'Uint32Array' : 'Int32Array'; }
        if (e.BYTES_PER_ELEMENT === 2)
        {
            if (e instanceof Uint16Array) return 'Uint16Array';
        }
        else if (e.BYTES_PER_ELEMENT === 1 && e instanceof Uint8Array) return 'Uint8Array';

        return null;
    }
    const Yl = { Float32Array, Uint32Array, Int32Array, Uint8Array };

    function ql(e, t)
    {
        let i = 0;
        let s = 0;
        const r = {};

        for (let h = 0; h < e.length; h++) (s += t[h]), (i += e[h].length);
        const n = new ArrayBuffer(i * 4);
        let o = null;
        let a = 0;

        for (let h = 0; h < e.length; h++)
        {
            const l = t[h];
            const c = e[h];
            const u = hs(c);

            r[u] || (r[u] = new Yl[u](n)), (o = r[u]);
            for (let d = 0; d < c.length; d++)
            {
                const f = ((d / l) | 0) * s + a;
                const p = d % l;

                o[f + p] = c[d];
            }
            a += l;
        }

        return new Float32Array(n);
    }
    function _i(e)
    {
        return (
            (e += e === 0 ? 1 : 0),
            --e,
            (e |= e >>> 1),
            (e |= e >>> 2),
            (e |= e >>> 4),
            (e |= e >>> 8),
            (e |= e >>> 16),
            e + 1
        );
    }
    function xr(e)
    {
        return !(e & (e - 1)) && !!e;
    }
    function Tr(e)
    {
        let t = (e > 65535 ? 1 : 0) << 4;

        e >>>= t;
        let i = (e > 255 ? 1 : 0) << 3;

        return (
            (e >>>= i),
            (t |= i),
            (i = (e > 15 ? 1 : 0) << 2),
            (e >>>= i),
            (t |= i),
            (i = (e > 3 ? 1 : 0) << 1),
            (e >>>= i),
            (t |= i),
            t | (e >> 1)
        );
    }
    function Ce(e, t, i)
    {
        const s = e.length;
        let r;

        if (t >= s || i === 0) return;
        i = t + i > s ? s - t : i;
        const n = s - i;

        for (r = t; r < n; ++r) e[r] = e[r + i];
        e.length = n;
    }
    function de(e)
    {
        return e === 0 ? 0 : e < 0 ? -1 : 1;
    }
    let Kl = 0;

    function Te()
    {
        return ++Kl;
    }
    const No = class
    {
        constructor(e, t, i, s)
        {
            (this.left = e), (this.top = t), (this.right = i), (this.bottom = s);
        }
        get width()
        {
            return this.right - this.left;
        }
        get height()
        {
            return this.bottom - this.top;
        }
        isEmpty()
        {
            return this.left === this.right || this.top === this.bottom;
        }
    };
    const ls = No;

    ls.EMPTY = new No(0, 0, 0, 0);
    const br = {};
    const St = Object.create(null);
    const Mt = Object.create(null);

    function Zl()
    {
        let e;

        for (e in St) St[e].destroy();
        for (e in Mt) Mt[e].destroy();
    }
    function Jl()
    {
        let e;

        for (e in St) delete St[e];
        for (e in Mt) delete Mt[e];
    }
    class Er
    {
        constructor(t, i, s)
        {
            (this._canvas = P.ADAPTER.createCanvas()),
            (this._context = this._canvas.getContext('2d')),
            (this.resolution = s || P.RESOLUTION),
            this.resize(t, i);
        }
        clear()
        {
            this._checkDestroyed(),
            this._context.setTransform(1, 0, 0, 1, 0, 0),
            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        }
        resize(t, i)
        {
            this._checkDestroyed(),
            (this._canvas.width = Math.round(t * this.resolution)),
            (this._canvas.height = Math.round(i * this.resolution));
        }
        destroy()
        {
            (this._context = null), (this._canvas = null);
        }
        get width()
        {
            return this._checkDestroyed(), this._canvas.width;
        }
        set width(t)
        {
            this._checkDestroyed(), (this._canvas.width = Math.round(t));
        }
        get height()
        {
            return this._checkDestroyed(), this._canvas.height;
        }
        set height(t)
        {
            this._checkDestroyed(), (this._canvas.height = Math.round(t));
        }
        get canvas()
        {
            return this._checkDestroyed(), this._canvas;
        }
        get context()
        {
            return this._checkDestroyed(), this._context;
        }
        _checkDestroyed()
        {
            if (this._canvas === null) throw new TypeError('The CanvasRenderTarget has already been destroyed');
        }
    }
    function Lo(e, t, i)
    {
        for (let s = 0, r = 4 * i * t; s < t; ++s, r += 4) if (e[r + 3] !== 0) return !1;

        return !0;
    }
    function Oo(e, t, i, s, r)
    {
        const n = 4 * t;

        for (let o = s, a = s * n + 4 * i; o <= r; ++o, a += n) if (e[a + 3] !== 0) return !1;

        return !0;
    }
    function Uo(e)
    {
        const { width: t, height: i } = e;
        const s = e.getContext('2d', { willReadFrequently: !0 });

        if (s === null) throw new TypeError('Failed to get canvas 2D context');
        const n = s.getImageData(0, 0, t, i).data;
        let o = 0;
        let a = 0;
        let h = t - 1;
        let l = i - 1;

        for (; a < i && Lo(n, t, a);) ++a;
        if (a === i) return ls.EMPTY;
        for (; Lo(n, t, l);) --l;
        for (; Oo(n, t, o, a, l);) ++o;
        for (; Oo(n, t, h, a, l);) --h;

        return ++h, ++l, new ls(o, a, h, l);
    }
    function ko(e)
    {
        const t = Uo(e);
        const { width: i, height: s } = t;
        let r = null;

        if (!t.isEmpty())
        {
            const n = e.getContext('2d');

            if (n === null) throw new TypeError('Failed to get canvas 2D context');
            r = n.getImageData(t.left, t.top, i, s);
        }

        return { width: i, height: s, data: r };
    }
    function Ql(e)
    {
        const t = Do.exec(e);

        if (t)
        {
            return {
                mediaType: t[1] ? t[1].toLowerCase() : void 0,
                subType: t[2] ? t[2].toLowerCase() : void 0,
                charset: t[3] ? t[3].toLowerCase() : void 0,
                encoding: t[4] ? t[4].toLowerCase() : void 0,
                data: t[5],
            };
        }
    }
    let cs;

    function Go(e, t = globalThis.location)
    {
        if (e.startsWith('data:')) return '';
        (t = t || globalThis.location), cs || (cs = document.createElement('a')), (cs.href = e);
        const i = go.parse(cs.href);
        const s = (!i.port && t.port === '') || i.port === t.port;

        return i.hostname !== t.hostname || !s || i.protocol !== t.protocol ? 'anonymous' : '';
    }
    function fe(e, t = 1)
    {
        let s;
        const i = (s = P.RETINA_PREFIX) == null ? void 0 : s.exec(e);

        return i ? parseFloat(i[1]) : t;
    }
    const tc = {
        __proto__: null,
        isMobile: Yt,
        EventEmitter: Ve,
        earcut: or,
        url: go,
        path: Tt,
        sayHello: Dl,
        skipHello: Bl,
        isWebGLSupported: vo,
        hex2rgb: Xl,
        hex2string: Mo,
        rgb2hex: Bo,
        string2hex: Vl,
        correctBlendMode: vr,
        premultiplyBlendMode: yr,
        premultiplyRgba: Wl,
        premultiplyTint: $l,
        premultiplyTintToRgba: jl,
        DATA_URI: Do,
        createIndicesForQuads: Fo,
        getBufferType: hs,
        interleaveTypedArrays: ql,
        isPow2: xr,
        log2: Tr,
        nextPow2: _i,
        removeItems: Ce,
        sign: de,
        uid: Te,
        deprecation: z,
        BoundingBox: ls,
        BaseTextureCache: Mt,
        ProgramCache: br,
        TextureCache: St,
        clearTextureCache: Jl,
        destroyTextureCache: Zl,
        CanvasRenderTarget: Er,
        getCanvasBoundingBox: Uo,
        trimCanvas: ko,
        decomposeDataUri: Ql,
        determineCrossOrigin: Go,
        getResolutionOfUrl: fe,
    };
    var M = ((e) => (
        (e.Renderer = 'renderer'),
        (e.Application = 'application'),
        (e.RendererSystem = 'renderer-webgl-system'),
        (e.RendererPlugin = 'renderer-webgl-plugin'),
        (e.CanvasRendererSystem = 'renderer-canvas-system'),
        (e.CanvasRendererPlugin = 'renderer-canvas-plugin'),
        (e.Asset = 'asset'),
        (e.LoadParser = 'load-parser'),
        (e.ResolveParser = 'resolve-parser'),
        (e.CacheParser = 'cache-parser'),
        (e.DetectionParser = 'detection-parser'),
        e
    ))(M || {});
    const wr = (e) =>
    {
        if (typeof e === 'function' || (typeof e === 'object' && e.extension))
        {
            if (!e.extension) throw new Error('Extension class must have an extension object');
            const t = typeof e.extension !== 'object' ? { type: e.extension } : e.extension;

            e = Ji(Et({}, t), { ref: e });
        }
        if (typeof e === 'object') e = Et({}, e);
        else throw new Error('Invalid extension type');

        return typeof e.type === 'string' && (e.type = [e.type]), e;
    };
    const Ho = (e, t) =>
    {
        let i;

        return (i = wr(e).priority) != null ? i : t;
    };
    const U = {
        _addHandlers: {},
        _removeHandlers: {},
        _queue: {},
        remove(...e)
        {
            return (
                e.map(wr).forEach((t) =>
                {
                    t.type.forEach((i) =>
                    {
                        let s; let
                            r;

                        return (r = (s = this._removeHandlers)[i]) == null ? void 0 : r.call(s, t);
                    });
                }),
                this
            );
        },
        add(...e)
        {
            return (
                e.map(wr).forEach((t) =>
                {
                    t.type.forEach((i) =>
                    {
                        const s = this._addHandlers;
                        const r = this._queue;

                        s[i] ? s[i](t) : ((r[i] = r[i] || []), r[i].push(t));
                    });
                }),
                this
            );
        },
        handle(e, t, i)
        {
            const s = this._addHandlers;
            const r = this._removeHandlers;

            if (s[e] || r[e]) throw new Error(`Extension type ${e} already has a handler`);
            (s[e] = t), (r[e] = i);
            const n = this._queue;

            return n[e] && (n[e].forEach((o) => t(o)), delete n[e]), this;
        },
        handleByMap(e, t)
        {
            return this.handle(
                e,
                (i) =>
                {
                    t[i.name] = i.ref;
                },
                (i) =>
                {
                    delete t[i.name];
                },
            );
        },
        handleByList(e, t, i = -1)
        {
            return this.handle(
                e,
                (s) =>
                {
                    t.includes(s.ref) || (t.push(s.ref), t.sort((r, n) => Ho(n, i) - Ho(r, i)));
                },
                (s) =>
                {
                    const r = t.indexOf(s.ref);

                    r !== -1 && t.splice(r, 1);
                },
            );
        },
    };

    class us
    {
        constructor(t)
        {
            typeof t === 'number'
                ? (this.rawBinaryData = new ArrayBuffer(t))
                : t instanceof Uint8Array
                    ? (this.rawBinaryData = t.buffer)
                    : (this.rawBinaryData = t),
            (this.uint32View = new Uint32Array(this.rawBinaryData)),
            (this.float32View = new Float32Array(this.rawBinaryData));
        }
        get int8View()
        {
            return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
        }
        get uint8View()
        {
            return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
        }
        get int16View()
        {
            return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
        }
        get uint16View()
        {
            return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View;
        }
        get int32View()
        {
            return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
        }
        view(t)
        {
            return this[`${t}View`];
        }
        destroy()
        {
            (this.rawBinaryData = null),
            (this._int8View = null),
            (this._uint8View = null),
            (this._int16View = null),
            (this._uint16View = null),
            (this._int32View = null),
            (this.uint32View = null),
            (this.float32View = null);
        }
        static sizeOf(t)
        {
            switch (t)
            {
                case 'int8':
                case 'uint8':
                    return 1;
                case 'int16':
                case 'uint16':
                    return 2;
                case 'int32':
                case 'uint32':
                case 'float32':
                    return 4;
                default:
                    throw new Error(`${t} isn't a valid view type`);
            }
        }
    }
    const ec = [
        'precision mediump float;',
        'void main(void){',
        'float test = 0.1;',
        '%forloop%',
        'gl_FragColor = vec4(0.0);',
        '}',
    ].join(`
`);

    function ic(e)
    {
        let t = '';

        for (let i = 0; i < e; ++i)
        {
            i > 0
                && (t += `
else `),
            i < e - 1 && (t += `if(test == ${i}.0){}`);
        }

        return t;
    }
    function Xo(e, t)
    {
        if (e === 0) throw new Error('Invalid value of `0` passed to `checkMaxIfStatementsInShader`');
        const i = t.createShader(t.FRAGMENT_SHADER);

        for (;;)
        {
            const s = ec.replace(/%forloop%/gi, ic(e));

            if ((t.shaderSource(i, s), t.compileShader(i), !t.getShaderParameter(i, t.COMPILE_STATUS))) e = (e / 2) | 0;
            else break;
        }

        return e;
    }
    const Sr = 0;
    const Ar = 1;
    const Rr = 2;
    const Cr = 3;
    const Ir = 4;
    const Pr = 5;

    class ne
    {
        constructor()
        {
            (this.data = 0), (this.blendMode = G.NORMAL), (this.polygonOffset = 0), (this.blend = !0), (this.depthMask = !0);
        }
        get blend()
        {
            return !!(this.data & (1 << Sr));
        }
        set blend(t)
        {
            !!(this.data & (1 << Sr)) !== t && (this.data ^= 1 << Sr);
        }
        get offsets()
        {
            return !!(this.data & (1 << Ar));
        }
        set offsets(t)
        {
            !!(this.data & (1 << Ar)) !== t && (this.data ^= 1 << Ar);
        }
        get culling()
        {
            return !!(this.data & (1 << Rr));
        }
        set culling(t)
        {
            !!(this.data & (1 << Rr)) !== t && (this.data ^= 1 << Rr);
        }
        get depthTest()
        {
            return !!(this.data & (1 << Cr));
        }
        set depthTest(t)
        {
            !!(this.data & (1 << Cr)) !== t && (this.data ^= 1 << Cr);
        }
        get depthMask()
        {
            return !!(this.data & (1 << Pr));
        }
        set depthMask(t)
        {
            !!(this.data & (1 << Pr)) !== t && (this.data ^= 1 << Pr);
        }
        get clockwiseFrontFace()
        {
            return !!(this.data & (1 << Ir));
        }
        set clockwiseFrontFace(t)
        {
            !!(this.data & (1 << Ir)) !== t && (this.data ^= 1 << Ir);
        }
        get blendMode()
        {
            return this._blendMode;
        }
        set blendMode(t)
        {
            (this.blend = t !== G.NONE), (this._blendMode = t);
        }
        get polygonOffset()
        {
            return this._polygonOffset;
        }
        set polygonOffset(t)
        {
            (this.offsets = !!t), (this._polygonOffset = t);
        }
        toString()
        {
            return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
        }
        static for2d()
        {
            const t = new ne();

            return (t.depthTest = !1), (t.blend = !0), t;
        }
    }
    const ds = [];

    function Mr(e, t)
    {
        if (!e) return null;
        let i = '';

        if (typeof e === 'string')
        {
            const s = (/\.(\w{3,4})(?:$|\?|#)/i).exec(e);

            s && (i = s[1].toLowerCase());
        }
        for (let s = ds.length - 1; s >= 0; --s)
        {
            const r = ds[s];

            if (r.test && r.test(e, i)) return new r(e, t);
        }
        throw new Error('Unrecognized source type to auto-detect Resource');
    }
    class Bt
    {
        constructor(t)
        {
            (this.items = []), (this._name = t), (this._aliasCount = 0);
        }
        emit(t, i, s, r, n, o, a, h)
        {
            if (arguments.length > 8) throw new Error('max arguments reached');
            const { name: l, items: c } = this;

            this._aliasCount++;
            for (let u = 0, d = c.length; u < d; u++) c[u][l](t, i, s, r, n, o, a, h);

            return c === this.items && this._aliasCount--, this;
        }
        ensureNonAliasedItems()
        {
            this._aliasCount > 0 && this.items.length > 1 && ((this._aliasCount = 0), (this.items = this.items.slice(0)));
        }
        add(t)
        {
            return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this;
        }
        remove(t)
        {
            const i = this.items.indexOf(t);

            return i !== -1 && (this.ensureNonAliasedItems(), this.items.splice(i, 1)), this;
        }
        contains(t)
        {
            return this.items.includes(t);
        }
        removeAll()
        {
            return this.ensureNonAliasedItems(), (this.items.length = 0), this;
        }
        destroy()
        {
            this.removeAll(), (this.items = null), (this._name = null);
        }
        get empty()
        {
            return this.items.length === 0;
        }
        get name()
        {
            return this._name;
        }
    }
    Object.defineProperties(Bt.prototype, { dispatch: { value: Bt.prototype.emit }, run: { value: Bt.prototype.emit } });
    class je
    {
        constructor(t = 0, i = 0)
        {
            (this._width = t),
            (this._height = i),
            (this.destroyed = !1),
            (this.internal = !1),
            (this.onResize = new Bt('setRealSize')),
            (this.onUpdate = new Bt('update')),
            (this.onError = new Bt('onError'));
        }
        bind(t)
        {
            this.onResize.add(t),
            this.onUpdate.add(t),
            this.onError.add(t),
            (this._width || this._height) && this.onResize.emit(this._width, this._height);
        }
        unbind(t)
        {
            this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t);
        }
        resize(t, i)
        {
            (t !== this._width || i !== this._height) && ((this._width = t), (this._height = i), this.onResize.emit(t, i));
        }
        get valid()
        {
            return !!this._width && !!this._height;
        }
        update()
        {
            this.destroyed || this.onUpdate.emit();
        }
        load()
        {
            return Promise.resolve(this);
        }
        get width()
        {
            return this._width;
        }
        get height()
        {
            return this._height;
        }
        style(t, i, s)
        {
            return !1;
        }
        dispose() {}
        destroy()
        {
            this.destroyed
                || ((this.destroyed = !0),
                this.dispose(),
                this.onError.removeAll(),
                (this.onError = null),
                this.onResize.removeAll(),
                (this.onResize = null),
                this.onUpdate.removeAll(),
                (this.onUpdate = null));
        }
        static test(t, i)
        {
            return !1;
        }
    }
    class Ye extends je
    {
        constructor(t, i)
        {
            const { width: s, height: r } = i || {};

            if (!s || !r) throw new Error('BufferResource width or height invalid');
            super(s, r), (this.data = t);
        }
        upload(t, i, s)
        {
            const r = t.gl;

            r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.alphaMode === Nt.UNPACK);
            const n = i.realWidth;
            const o = i.realHeight;

            return (
                s.width === n && s.height === o
                    ? r.texSubImage2D(i.target, 0, 0, 0, n, o, i.format, s.type, this.data)
                    : ((s.width = n),
                    (s.height = o),
                    r.texImage2D(i.target, 0, s.internalFormat, n, o, 0, i.format, s.type, this.data)),
                !0
            );
        }
        dispose()
        {
            this.data = null;
        }
        static test(t)
        {
            return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array;
        }
    }
    const sc = { scaleMode: ee.NEAREST, format: C.RGBA, alphaMode: Nt.NPM };
    const qe = class extends Ve
    {
        constructor(e = null, t = null)
        {
            super(), (t = Object.assign({}, qe.defaultOptions, t));
            const {
                alphaMode: i,
                mipmap: s,
                anisotropicLevel: r,
                scaleMode: n,
                width: o,
                height: a,
                wrapMode: h,
                format: l,
                type: c,
                target: u,
                resolution: d,
                resourceOptions: f,
            } = t;

            e && !(e instanceof je) && ((e = Mr(e, f)), (e.internal = !0)),
            (this.resolution = d || P.RESOLUTION),
            (this.width = Math.round((o || 0) * this.resolution) / this.resolution),
            (this.height = Math.round((a || 0) * this.resolution) / this.resolution),
            (this._mipmap = s),
            (this.anisotropicLevel = r),
            (this._wrapMode = h),
            (this._scaleMode = n),
            (this.format = l),
            (this.type = c),
            (this.target = u),
            (this.alphaMode = i),
            (this.uid = Te()),
            (this.touched = 0),
            (this.isPowerOfTwo = !1),
            this._refreshPOT(),
            (this._glTextures = {}),
            (this.dirtyId = 0),
            (this.dirtyStyleId = 0),
            (this.cacheId = null),
            (this.valid = o > 0 && a > 0),
            (this.textureCacheIds = []),
            (this.destroyed = !1),
            (this.resource = null),
            (this._batchEnabled = 0),
            (this._batchLocation = 0),
            (this.parentTextureArray = null),
            this.setResource(e);
        }
        get realWidth()
        {
            return Math.round(this.width * this.resolution);
        }
        get realHeight()
        {
            return Math.round(this.height * this.resolution);
        }
        get mipmap()
        {
            return this._mipmap;
        }
        set mipmap(e)
        {
            this._mipmap !== e && ((this._mipmap = e), this.dirtyStyleId++);
        }
        get scaleMode()
        {
            return this._scaleMode;
        }
        set scaleMode(e)
        {
            this._scaleMode !== e && ((this._scaleMode = e), this.dirtyStyleId++);
        }
        get wrapMode()
        {
            return this._wrapMode;
        }
        set wrapMode(e)
        {
            this._wrapMode !== e && ((this._wrapMode = e), this.dirtyStyleId++);
        }
        setStyle(e, t)
        {
            let i;

            return (
                e !== void 0 && e !== this.scaleMode && ((this.scaleMode = e), (i = !0)),
                t !== void 0 && t !== this.mipmap && ((this.mipmap = t), (i = !0)),
                i && this.dirtyStyleId++,
                this
            );
        }
        setSize(e, t, i)
        {
            return (i = i || this.resolution), this.setRealSize(e * i, t * i, i);
        }
        setRealSize(e, t, i)
        {
            return (
                (this.resolution = i || this.resolution),
                (this.width = Math.round(e) / this.resolution),
                (this.height = Math.round(t) / this.resolution),
                this._refreshPOT(),
                this.update(),
                this
            );
        }
        _refreshPOT()
        {
            this.isPowerOfTwo = xr(this.realWidth) && xr(this.realHeight);
        }
        setResolution(e)
        {
            const t = this.resolution;

            return t === e
                ? this
                : ((this.resolution = e),
                this.valid
                          && ((this.width = Math.round(this.width * t) / e),
                          (this.height = Math.round(this.height * t) / e),
                          this.emit('update', this)),
                this._refreshPOT(),
                this);
        }
        setResource(e)
        {
            if (this.resource === e) return this;
            if (this.resource) throw new Error('Resource can be set only once');

            return e.bind(this), (this.resource = e), this;
        }
        update()
        {
            this.valid
                ? (this.dirtyId++, this.dirtyStyleId++, this.emit('update', this))
                : this.width > 0
                      && this.height > 0
                      && ((this.valid = !0), this.emit('loaded', this), this.emit('update', this));
        }
        onError(e)
        {
            this.emit('error', this, e);
        }
        destroy()
        {
            this.resource
                    && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), (this.resource = null)),
            this.cacheId && (delete Mt[this.cacheId], delete St[this.cacheId], (this.cacheId = null)),
            this.dispose(),
            qe.removeFromCache(this),
            (this.textureCacheIds = null),
            (this.destroyed = !0);
        }
        dispose()
        {
            this.emit('dispose', this);
        }
        castToBaseTexture()
        {
            return this;
        }
        static from(e, t, i = P.STRICT_TEXTURE_CACHE)
        {
            const s = typeof e === 'string';
            let r = null;

            if (s) r = e;
            else
            {
                if (!e._pixiId)
                {
                    const o = (t == null ? void 0 : t.pixiIdPrefix) || 'pixiid';

                    e._pixiId = `${o}_${Te()}`;
                }
                r = e._pixiId;
            }
            let n = Mt[r];

            if (s && i && !n) throw new Error(`The cacheId "${r}" does not exist in BaseTextureCache.`);

            return n || ((n = new qe(e, t)), (n.cacheId = r), qe.addToCache(n, r)), n;
        }
        static fromBuffer(e, t, i, s)
        {
            e = e || new Float32Array(t * i * 4);
            const r = new Ye(e, { width: t, height: i });
            const n = e instanceof Float32Array ? k.FLOAT : k.UNSIGNED_BYTE;

            return new qe(r, Object.assign({}, sc, s || { width: t, height: i, type: n }));
        }
        static addToCache(e, t)
        {
            t
                    && (e.textureCacheIds.includes(t) || e.textureCacheIds.push(t),
                    Mt[t]
                        && Mt[t] !== e
                        && console.warn(`BaseTexture added to the cache with an id [${t}] that already had an entry`),
                    (Mt[t] = e));
        }
        static removeFromCache(e)
        {
            if (typeof e === 'string')
            {
                const t = Mt[e];

                if (t)
                {
                    const i = t.textureCacheIds.indexOf(e);

                    return i > -1 && t.textureCacheIds.splice(i, 1), delete Mt[e], t;
                }
            }
            else if (e != null && e.textureCacheIds)
            {
                for (let t = 0; t < e.textureCacheIds.length; ++t) delete Mt[e.textureCacheIds[t]];

                return (e.textureCacheIds.length = 0), e;
            }

            return null;
        }
    };
    const V = qe;

    (V.defaultOptions = {
        mipmap: Wt.POW2,
        anisotropicLevel: 0,
        scaleMode: ee.LINEAR,
        wrapMode: ie.CLAMP,
        alphaMode: Nt.UNPACK,
        target: Ae.TEXTURE_2D,
        format: C.RGBA,
        type: k.UNSIGNED_BYTE,
    }),
    (V._globalBatch = 0);
    class fs
    {
        constructor()
        {
            (this.texArray = null),
            (this.blend = 0),
            (this.type = zt.TRIANGLES),
            (this.start = 0),
            (this.size = 0),
            (this.data = null);
        }
    }
    let rc = 0;

    class at
    {
        constructor(t, i = !0, s = !1)
        {
            (this.data = t || new Float32Array(1)),
            (this._glBuffers = {}),
            (this._updateID = 0),
            (this.index = s),
            (this.static = i),
            (this.id = rc++),
            (this.disposeRunner = new Bt('disposeBuffer'));
        }
        update(t)
        {
            t instanceof Array && (t = new Float32Array(t)), (this.data = t || this.data), this._updateID++;
        }
        dispose()
        {
            this.disposeRunner.emit(this, !1);
        }
        destroy()
        {
            this.dispose(), (this.data = null);
        }
        set index(t)
        {
            this.type = t ? jt.ELEMENT_ARRAY_BUFFER : jt.ARRAY_BUFFER;
        }
        get index()
        {
            return this.type === jt.ELEMENT_ARRAY_BUFFER;
        }
        static from(t)
        {
            return t instanceof Array && (t = new Float32Array(t)), new at(t);
        }
    }
    class gi
    {
        constructor(t, i = 0, s = !1, r = k.FLOAT, n, o, a, h = 1)
        {
            (this.buffer = t),
            (this.size = i),
            (this.normalized = s),
            (this.type = r),
            (this.stride = n),
            (this.start = o),
            (this.instance = a),
            (this.divisor = h);
        }
        destroy()
        {
            this.buffer = null;
        }
        static from(t, i, s, r, n)
        {
            return new gi(t, i, s, r, n);
        }
    }
    const nc = { Float32Array, Uint32Array, Int32Array, Uint8Array };

    function oc(e, t)
    {
        let i = 0;
        let s = 0;
        const r = {};

        for (let h = 0; h < e.length; h++) (s += t[h]), (i += e[h].length);
        const n = new ArrayBuffer(i * 4);
        let o = null;
        let a = 0;

        for (let h = 0; h < e.length; h++)
        {
            const l = t[h];
            const c = e[h];
            const u = hs(c);

            r[u] || (r[u] = new nc[u](n)), (o = r[u]);
            for (let d = 0; d < c.length; d++)
            {
                const f = ((d / l) | 0) * s + a;
                const p = d % l;

                o[f + p] = c[d];
            }
            a += l;
        }

        return new Float32Array(n);
    }
    const Vo = { 5126: 4, 5123: 2, 5121: 1 };
    let ac = 0;
    const hc = { Float32Array, Uint32Array, Int32Array, Uint8Array, Uint16Array };

    class pe
    {
        constructor(t = [], i = {})
        {
            (this.buffers = t),
            (this.indexBuffer = null),
            (this.attributes = i),
            (this.glVertexArrayObjects = {}),
            (this.id = ac++),
            (this.instanced = !1),
            (this.instanceCount = 1),
            (this.disposeRunner = new Bt('disposeGeometry')),
            (this.refCount = 0);
        }
        addAttribute(t, i, s = 0, r = !1, n, o, a, h = !1)
        {
            if (!i) throw new Error('You must pass a buffer when creating an attribute');
            i instanceof at || (i instanceof Array && (i = new Float32Array(i)), (i = new at(i)));
            const l = t.split('|');

            if (l.length > 1)
            {
                for (let u = 0; u < l.length; u++) this.addAttribute(l[u], i, s, r, n);

                return this;
            }
            let c = this.buffers.indexOf(i);

            return (
                c === -1 && (this.buffers.push(i), (c = this.buffers.length - 1)),
                (this.attributes[t] = new gi(c, s, r, n, o, a, h)),
                (this.instanced = this.instanced || h),
                this
            );
        }
        getAttribute(t)
        {
            return this.attributes[t];
        }
        getBuffer(t)
        {
            return this.buffers[this.getAttribute(t).buffer];
        }
        addIndex(t)
        {
            return (
                t instanceof at || (t instanceof Array && (t = new Uint16Array(t)), (t = new at(t))),
                (t.type = jt.ELEMENT_ARRAY_BUFFER),
                (this.indexBuffer = t),
                this.buffers.includes(t) || this.buffers.push(t),
                this
            );
        }
        getIndex()
        {
            return this.indexBuffer;
        }
        interleave()
        {
            if (this.buffers.length === 1 || (this.buffers.length === 2 && this.indexBuffer)) return this;
            const t = [];
            const i = [];
            const s = new at();
            let r;

            for (r in this.attributes)
            {
                const n = this.attributes[r];
                const o = this.buffers[n.buffer];

                t.push(o.data), i.push((n.size * Vo[n.type]) / 4), (n.buffer = 0);
            }
            for (s.data = oc(t, i), r = 0; r < this.buffers.length; r++)
            { this.buffers[r] !== this.indexBuffer && this.buffers[r].destroy(); }

            return (this.buffers = [s]), this.indexBuffer && this.buffers.push(this.indexBuffer), this;
        }
        getSize()
        {
            for (const t in this.attributes)
            {
                const i = this.attributes[t];

                return this.buffers[i.buffer].data.length / (i.stride / 4 || i.size);
            }

            return 0;
        }
        dispose()
        {
            this.disposeRunner.emit(this, !1);
        }
        destroy()
        {
            this.dispose(), (this.buffers = null), (this.indexBuffer = null), (this.attributes = null);
        }
        clone()
        {
            const t = new pe();

            for (let i = 0; i < this.buffers.length; i++) t.buffers[i] = new at(this.buffers[i].data.slice(0));
            for (const i in this.attributes)
            {
                const s = this.attributes[i];

                t.attributes[i] = new gi(s.buffer, s.size, s.normalized, s.type, s.stride, s.start, s.instance);
            }

            return (
                this.indexBuffer
                    && ((t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)]),
                    (t.indexBuffer.type = jt.ELEMENT_ARRAY_BUFFER)),
                t
            );
        }
        static merge(t)
        {
            const i = new pe();
            const s = [];
            const r = [];
            const n = [];
            let o;

            for (let a = 0; a < t.length; a++)
            {
                o = t[a];
                for (let h = 0; h < o.buffers.length; h++)
                { (r[h] = r[h] || 0), (r[h] += o.buffers[h].data.length), (n[h] = 0); }
            }
            for (let a = 0; a < o.buffers.length; a++)
            { (s[a] = new hc[hs(o.buffers[a].data)](r[a])), (i.buffers[a] = new at(s[a])); }
            for (let a = 0; a < t.length; a++)
            {
                o = t[a];
                for (let h = 0; h < o.buffers.length; h++)
                { s[h].set(o.buffers[h].data, n[h]), (n[h] += o.buffers[h].data.length); }
            }
            if (((i.attributes = o.attributes), o.indexBuffer))
            {
                (i.indexBuffer = i.buffers[o.buffers.indexOf(o.indexBuffer)]),
                (i.indexBuffer.type = jt.ELEMENT_ARRAY_BUFFER);
                let a = 0;
                let h = 0;
                let l = 0;
                let c = 0;

                for (let u = 0; u < o.buffers.length; u++)
                {
                    if (o.buffers[u] !== o.indexBuffer)
                    {
                        c = u;
                        break;
                    }
                }
                for (const u in o.attributes)
                {
                    const d = o.attributes[u];

                    (d.buffer | 0) === c && (h += (d.size * Vo[d.type]) / 4);
                }
                for (let u = 0; u < t.length; u++)
                {
                    const d = t[u].indexBuffer.data;

                    for (let f = 0; f < d.length; f++) i.indexBuffer.data[f + l] += a;
                    (a += t[u].buffers[c].data.length / h), (l += d.length);
                }
            }

            return i;
        }
    }
    class Br extends pe
    {
        constructor(t = !1)
        {
            super(),
            (this._buffer = new at(null, t, !1)),
            (this._indexBuffer = new at(null, t, !0)),
            this.addAttribute('aVertexPosition', this._buffer, 2, !1, k.FLOAT)
                .addAttribute('aTextureCoord', this._buffer, 2, !1, k.FLOAT)
                .addAttribute('aColor', this._buffer, 4, !0, k.UNSIGNED_BYTE)
                .addAttribute('aTextureId', this._buffer, 1, !0, k.FLOAT)
                .addIndex(this._indexBuffer);
        }
    }
    const yi = Math.PI * 2;
    const zo = 180 / Math.PI;
    const Wo = Math.PI / 180;
    var _t = ((e) => (
        (e[(e.POLY = 0)] = 'POLY'),
        (e[(e.RECT = 1)] = 'RECT'),
        (e[(e.CIRC = 2)] = 'CIRC'),
        (e[(e.ELIP = 3)] = 'ELIP'),
        (e[(e.RREC = 4)] = 'RREC'),
        e
    ))(_t || {});

    class Y
    {
        constructor(t = 0, i = 0)
        {
            (this.x = 0), (this.y = 0), (this.x = t), (this.y = i);
        }
        clone()
        {
            return new Y(this.x, this.y);
        }
        copyFrom(t)
        {
            return this.set(t.x, t.y), this;
        }
        copyTo(t)
        {
            return t.set(this.x, this.y), t;
        }
        equals(t)
        {
            return t.x === this.x && t.y === this.y;
        }
        set(t = 0, i = t)
        {
            return (this.x = t), (this.y = i), this;
        }
        toString()
        {
            return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
        }
    }
    const ps = [new Y(), new Y(), new Y(), new Y()];

    class $
    {
        constructor(t = 0, i = 0, s = 0, r = 0)
        {
            (this.x = Number(t)),
            (this.y = Number(i)),
            (this.width = Number(s)),
            (this.height = Number(r)),
            (this.type = _t.RECT);
        }
        get left()
        {
            return this.x;
        }
        get right()
        {
            return this.x + this.width;
        }
        get top()
        {
            return this.y;
        }
        get bottom()
        {
            return this.y + this.height;
        }
        static get EMPTY()
        {
            return new $(0, 0, 0, 0);
        }
        clone()
        {
            return new $(this.x, this.y, this.width, this.height);
        }
        copyFrom(t)
        {
            return (this.x = t.x), (this.y = t.y), (this.width = t.width), (this.height = t.height), this;
        }
        copyTo(t)
        {
            return (t.x = this.x), (t.y = this.y), (t.width = this.width), (t.height = this.height), t;
        }
        contains(t, i)
        {
            return this.width <= 0 || this.height <= 0
                ? !1
                : t >= this.x && t < this.x + this.width && i >= this.y && i < this.y + this.height;
        }
        intersects(t, i)
        {
            if (!i)
            {
                const E = this.x < t.x ? t.x : this.x;

                if ((this.right > t.right ? t.right : this.right) <= E) return !1;
                const H = this.y < t.y ? t.y : this.y;

                return (this.bottom > t.bottom ? t.bottom : this.bottom) > H;
            }
            const s = this.left;
            const r = this.right;
            const n = this.top;
            const o = this.bottom;

            if (r <= s || o <= n) return !1;
            const a = ps[0].set(t.left, t.top);
            const h = ps[1].set(t.left, t.bottom);
            const l = ps[2].set(t.right, t.top);
            const c = ps[3].set(t.right, t.bottom);

            if (l.x <= a.x || h.y <= a.y) return !1;
            const u = Math.sign(i.a * i.d - i.b * i.c);

            if (
                u === 0
                || (i.apply(a, a),
                i.apply(h, h),
                i.apply(l, l),
                i.apply(c, c),
                Math.max(a.x, h.x, l.x, c.x) <= s
                    || Math.min(a.x, h.x, l.x, c.x) >= r
                    || Math.max(a.y, h.y, l.y, c.y) <= n
                    || Math.min(a.y, h.y, l.y, c.y) >= o)
            )
            { return !1; }
            const d = u * (h.y - a.y);
            const f = u * (a.x - h.x);
            const p = d * s + f * n;
            const _ = d * r + f * n;
            const g = d * s + f * o;
            const v = d * r + f * o;

            if (Math.max(p, _, g, v) <= d * a.x + f * a.y || Math.min(p, _, g, v) >= d * c.x + f * c.y) return !1;
            const T = u * (a.y - l.y);
            const y = u * (l.x - a.x);
            const x = T * s + y * n;
            const A = T * r + y * n;
            const D = T * s + y * o;
            const R = T * r + y * o;

            return !(Math.max(x, A, D, R) <= T * a.x + y * a.y || Math.min(x, A, D, R) >= T * c.x + y * c.y);
        }
        pad(t = 0, i = t)
        {
            return (this.x -= t), (this.y -= i), (this.width += t * 2), (this.height += i * 2), this;
        }
        fit(t)
        {
            const i = Math.max(this.x, t.x);
            const s = Math.min(this.x + this.width, t.x + t.width);
            const r = Math.max(this.y, t.y);
            const n = Math.min(this.y + this.height, t.y + t.height);

            return (this.x = i), (this.width = Math.max(s - i, 0)), (this.y = r), (this.height = Math.max(n - r, 0)), this;
        }
        ceil(t = 1, i = 0.001)
        {
            const s = Math.ceil((this.x + this.width - i) * t) / t;
            const r = Math.ceil((this.y + this.height - i) * t) / t;

            return (
                (this.x = Math.floor((this.x + i) * t) / t),
                (this.y = Math.floor((this.y + i) * t) / t),
                (this.width = s - this.x),
                (this.height = r - this.y),
                this
            );
        }
        enlarge(t)
        {
            const i = Math.min(this.x, t.x);
            const s = Math.max(this.x + this.width, t.x + t.width);
            const r = Math.min(this.y, t.y);
            const n = Math.max(this.y + this.height, t.y + t.height);

            return (this.x = i), (this.width = s - i), (this.y = r), (this.height = n - r), this;
        }
        toString()
        {
            return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
        }
    }
    class ms
    {
        constructor(t = 0, i = 0, s = 0)
        {
            (this.x = t), (this.y = i), (this.radius = s), (this.type = _t.CIRC);
        }
        clone()
        {
            return new ms(this.x, this.y, this.radius);
        }
        contains(t, i)
        {
            if (this.radius <= 0) return !1;
            const s = this.radius * this.radius;
            let r = this.x - t;
            let n = this.y - i;

            return (r *= r), (n *= n), r + n <= s;
        }
        getBounds()
        {
            return new $(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        }
        toString()
        {
            return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
        }
    }
    class _s
    {
        constructor(t = 0, i = 0, s = 0, r = 0)
        {
            (this.x = t), (this.y = i), (this.width = s), (this.height = r), (this.type = _t.ELIP);
        }
        clone()
        {
            return new _s(this.x, this.y, this.width, this.height);
        }
        contains(t, i)
        {
            if (this.width <= 0 || this.height <= 0) return !1;
            let s = (t - this.x) / this.width;
            let r = (i - this.y) / this.height;

            return (s *= s), (r *= r), s + r <= 1;
        }
        getBounds()
        {
            return new $(this.x - this.width, this.y - this.height, this.width, this.height);
        }
        toString()
        {
            return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
        }
    }
    class Ie
    {
        constructor(...t)
        {
            let i = Array.isArray(t[0]) ? t[0] : t;

            if (typeof i[0] !== 'number')
            {
                const s = [];

                for (let r = 0, n = i.length; r < n; r++) s.push(i[r].x, i[r].y);
                i = s;
            }
            (this.points = i), (this.type = _t.POLY), (this.closeStroke = !0);
        }
        clone()
        {
            const t = this.points.slice();
            const i = new Ie(t);

            return (i.closeStroke = this.closeStroke), i;
        }
        contains(t, i)
        {
            let s = !1;
            const r = this.points.length / 2;

            for (let n = 0, o = r - 1; n < r; o = n++)
            {
                const a = this.points[n * 2];
                const h = this.points[n * 2 + 1];
                const l = this.points[o * 2];
                const c = this.points[o * 2 + 1];

                h > i != c > i && t < (l - a) * ((i - h) / (c - h)) + a && (s = !s);
            }

            return s;
        }
        toString()
        {
            return `[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce(
                (t, i) => `${t}, ${i}`,
                '',
            )}]`;
        }
    }
    class gs
    {
        constructor(t = 0, i = 0, s = 0, r = 0, n = 20)
        {
            (this.x = t), (this.y = i), (this.width = s), (this.height = r), (this.radius = n), (this.type = _t.RREC);
        }
        clone()
        {
            return new gs(this.x, this.y, this.width, this.height, this.radius);
        }
        contains(t, i)
        {
            if (this.width <= 0 || this.height <= 0) return !1;
            if (t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height)
            {
                const s = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));

                if ((i >= this.y + s && i <= this.y + this.height - s) || (t >= this.x + s && t <= this.x + this.width - s))
                { return !0; }
                let r = t - (this.x + s);
                let n = i - (this.y + s);
                const o = s * s;

                if (
                    r * r + n * n <= o
                    || ((r = t - (this.x + this.width - s)), r * r + n * n <= o)
                    || ((n = i - (this.y + this.height - s)), r * r + n * n <= o)
                    || ((r = t - (this.x + s)), r * r + n * n <= o)
                )
                { return !0; }
            }

            return !1;
        }
        toString()
        {
            return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
        }
    }
    class tt
    {
        constructor(t = 1, i = 0, s = 0, r = 1, n = 0, o = 0)
        {
            (this.array = null), (this.a = t), (this.b = i), (this.c = s), (this.d = r), (this.tx = n), (this.ty = o);
        }
        fromArray(t)
        {
            (this.a = t[0]), (this.b = t[1]), (this.c = t[3]), (this.d = t[4]), (this.tx = t[2]), (this.ty = t[5]);
        }
        set(t, i, s, r, n, o)
        {
            return (this.a = t), (this.b = i), (this.c = s), (this.d = r), (this.tx = n), (this.ty = o), this;
        }
        toArray(t, i)
        {
            this.array || (this.array = new Float32Array(9));
            const s = i || this.array;

            return (
                t
                    ? ((s[0] = this.a),
                    (s[1] = this.b),
                    (s[2] = 0),
                    (s[3] = this.c),
                    (s[4] = this.d),
                    (s[5] = 0),
                    (s[6] = this.tx),
                    (s[7] = this.ty),
                    (s[8] = 1))
                    : ((s[0] = this.a),
                    (s[1] = this.c),
                    (s[2] = this.tx),
                    (s[3] = this.b),
                    (s[4] = this.d),
                    (s[5] = this.ty),
                    (s[6] = 0),
                    (s[7] = 0),
                    (s[8] = 1)),
                s
            );
        }
        apply(t, i)
        {
            i = i || new Y();
            const s = t.x;
            const r = t.y;

            return (i.x = this.a * s + this.c * r + this.tx), (i.y = this.b * s + this.d * r + this.ty), i;
        }
        applyInverse(t, i)
        {
            i = i || new Y();
            const s = 1 / (this.a * this.d + this.c * -this.b);
            const r = t.x;
            const n = t.y;

            return (
                (i.x = this.d * s * r + -this.c * s * n + (this.ty * this.c - this.tx * this.d) * s),
                (i.y = this.a * s * n + -this.b * s * r + (-this.ty * this.a + this.tx * this.b) * s),
                i
            );
        }
        translate(t, i)
        {
            return (this.tx += t), (this.ty += i), this;
        }
        scale(t, i)
        {
            return (this.a *= t), (this.d *= i), (this.c *= t), (this.b *= i), (this.tx *= t), (this.ty *= i), this;
        }
        rotate(t)
        {
            const i = Math.cos(t);
            const s = Math.sin(t);
            const r = this.a;
            const n = this.c;
            const o = this.tx;

            return (
                (this.a = r * i - this.b * s),
                (this.b = r * s + this.b * i),
                (this.c = n * i - this.d * s),
                (this.d = n * s + this.d * i),
                (this.tx = o * i - this.ty * s),
                (this.ty = o * s + this.ty * i),
                this
            );
        }
        append(t)
        {
            const i = this.a;
            const s = this.b;
            const r = this.c;
            const n = this.d;

            return (
                (this.a = t.a * i + t.b * r),
                (this.b = t.a * s + t.b * n),
                (this.c = t.c * i + t.d * r),
                (this.d = t.c * s + t.d * n),
                (this.tx = t.tx * i + t.ty * r + this.tx),
                (this.ty = t.tx * s + t.ty * n + this.ty),
                this
            );
        }
        setTransform(t, i, s, r, n, o, a, h, l)
        {
            return (
                (this.a = Math.cos(a + l) * n),
                (this.b = Math.sin(a + l) * n),
                (this.c = -Math.sin(a - h) * o),
                (this.d = Math.cos(a - h) * o),
                (this.tx = t - (s * this.a + r * this.c)),
                (this.ty = i - (s * this.b + r * this.d)),
                this
            );
        }
        prepend(t)
        {
            const i = this.tx;

            if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1)
            {
                const s = this.a;
                const r = this.c;

                (this.a = s * t.a + this.b * t.c),
                (this.b = s * t.b + this.b * t.d),
                (this.c = r * t.a + this.d * t.c),
                (this.d = r * t.b + this.d * t.d);
            }

            return (this.tx = i * t.a + this.ty * t.c + t.tx), (this.ty = i * t.b + this.ty * t.d + t.ty), this;
        }
        decompose(t)
        {
            const i = this.a;
            const s = this.b;
            const r = this.c;
            const n = this.d;
            const o = t.pivot;
            const a = -Math.atan2(-r, n);
            const h = Math.atan2(s, i);
            const l = Math.abs(a + h);

            return (
                l < 1e-5 || Math.abs(yi - l) < 1e-5
                    ? ((t.rotation = h), (t.skew.x = t.skew.y = 0))
                    : ((t.rotation = 0), (t.skew.x = a), (t.skew.y = h)),
                (t.scale.x = Math.sqrt(i * i + s * s)),
                (t.scale.y = Math.sqrt(r * r + n * n)),
                (t.position.x = this.tx + (o.x * i + o.y * r)),
                (t.position.y = this.ty + (o.x * s + o.y * n)),
                t
            );
        }
        invert()
        {
            const t = this.a;
            const i = this.b;
            const s = this.c;
            const r = this.d;
            const n = this.tx;
            const o = t * r - i * s;

            return (
                (this.a = r / o),
                (this.b = -i / o),
                (this.c = -s / o),
                (this.d = t / o),
                (this.tx = (s * this.ty - r * n) / o),
                (this.ty = -(t * this.ty - i * n) / o),
                this
            );
        }
        identity()
        {
            return (this.a = 1), (this.b = 0), (this.c = 0), (this.d = 1), (this.tx = 0), (this.ty = 0), this;
        }
        clone()
        {
            const t = new tt();

            return (t.a = this.a), (t.b = this.b), (t.c = this.c), (t.d = this.d), (t.tx = this.tx), (t.ty = this.ty), t;
        }
        copyTo(t)
        {
            return (t.a = this.a), (t.b = this.b), (t.c = this.c), (t.d = this.d), (t.tx = this.tx), (t.ty = this.ty), t;
        }
        copyFrom(t)
        {
            return (this.a = t.a), (this.b = t.b), (this.c = t.c), (this.d = t.d), (this.tx = t.tx), (this.ty = t.ty), this;
        }
        toString()
        {
            return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
        }
        static get IDENTITY()
        {
            return new tt();
        }
        static get TEMP_MATRIX()
        {
            return new tt();
        }
    }
    const Pe = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
    const Me = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
    const Be = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
    const De = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
    const Dr = [];
    const $o = [];
    const ys = Math.sign;

    function lc()
    {
        for (let e = 0; e < 16; e++)
        {
            const t = [];

            Dr.push(t);
            for (let i = 0; i < 16; i++)
            {
                const s = ys(Pe[e] * Pe[i] + Be[e] * Me[i]);
                const r = ys(Me[e] * Pe[i] + De[e] * Me[i]);
                const n = ys(Pe[e] * Be[i] + Be[e] * De[i]);
                const o = ys(Me[e] * Be[i] + De[e] * De[i]);

                for (let a = 0; a < 16; a++)
                {
                    if (Pe[a] === s && Me[a] === r && Be[a] === n && De[a] === o)
                    {
                        t.push(a);
                        break;
                    }
                }
            }
        }
        for (let e = 0; e < 16; e++)
        {
            const t = new tt();

            t.set(Pe[e], Me[e], Be[e], De[e], 0, 0), $o.push(t);
        }
    }
    lc();
    const it = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MAIN_DIAGONAL: 10,
        MIRROR_HORIZONTAL: 12,
        REVERSE_DIAGONAL: 14,
        uX: (e) => Pe[e],
        uY: (e) => Me[e],
        vX: (e) => Be[e],
        vY: (e) => De[e],
        inv: (e) => (e & 8 ? e & 15 : -e & 7),
        add: (e, t) => Dr[e][t],
        sub: (e, t) => Dr[e][it.inv(t)],
        rotate180: (e) => e ^ 4,
        isVertical: (e) => (e & 3) === 2,
        byDirection: (e, t) =>
            (Math.abs(e) * 2 <= Math.abs(t)
                ? t >= 0
                    ? it.S
                    : it.N
                : Math.abs(t) * 2 <= Math.abs(e)
                    ? e > 0
                        ? it.E
                        : it.W
                    : t > 0
                        ? e > 0
                            ? it.SE
                            : it.SW
                        : e > 0
                            ? it.NE
                            : it.NW),
        matrixAppendRotationInv: (e, t, i = 0, s = 0) =>
        {
            const r = $o[it.inv(t)];

            (r.tx = i), (r.ty = s), e.append(r);
        },
    };

    class me
    {
        constructor(t, i, s = 0, r = 0)
        {
            (this._x = s), (this._y = r), (this.cb = t), (this.scope = i);
        }
        clone(t = this.cb, i = this.scope)
        {
            return new me(t, i, this._x, this._y);
        }
        set(t = 0, i = t)
        {
            return (this._x !== t || this._y !== i) && ((this._x = t), (this._y = i), this.cb.call(this.scope)), this;
        }
        copyFrom(t)
        {
            return (
                (this._x !== t.x || this._y !== t.y) && ((this._x = t.x), (this._y = t.y), this.cb.call(this.scope)), this
            );
        }
        copyTo(t)
        {
            return t.set(this._x, this._y), t;
        }
        equals(t)
        {
            return t.x === this._x && t.y === this._y;
        }
        toString()
        {
            return `[@pixi/math:ObservablePoint x=${0} y=${0} scope=${this.scope}]`;
        }
        get x()
        {
            return this._x;
        }
        set x(t)
        {
            this._x !== t && ((this._x = t), this.cb.call(this.scope));
        }
        get y()
        {
            return this._y;
        }
        set y(t)
        {
            this._y !== t && ((this._y = t), this.cb.call(this.scope));
        }
    }
    const jo = class
    {
        constructor()
        {
            (this.worldTransform = new tt()),
            (this.localTransform = new tt()),
            (this.position = new me(this.onChange, this, 0, 0)),
            (this.scale = new me(this.onChange, this, 1, 1)),
            (this.pivot = new me(this.onChange, this, 0, 0)),
            (this.skew = new me(this.updateSkew, this, 0, 0)),
            (this._rotation = 0),
            (this._cx = 1),
            (this._sx = 0),
            (this._cy = 0),
            (this._sy = 1),
            (this._localID = 0),
            (this._currentLocalID = 0),
            (this._worldID = 0),
            (this._parentID = 0);
        }
        onChange()
        {
            this._localID++;
        }
        updateSkew()
        {
            (this._cx = Math.cos(this._rotation + this.skew.y)),
            (this._sx = Math.sin(this._rotation + this.skew.y)),
            (this._cy = -Math.sin(this._rotation - this.skew.x)),
            (this._sy = Math.cos(this._rotation - this.skew.x)),
            this._localID++;
        }
        toString()
        {
            return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
        }
        updateLocalTransform()
        {
            const e = this.localTransform;

            this._localID !== this._currentLocalID
                && ((e.a = this._cx * this.scale.x),
                (e.b = this._sx * this.scale.x),
                (e.c = this._cy * this.scale.y),
                (e.d = this._sy * this.scale.y),
                (e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c)),
                (e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d)),
                (this._currentLocalID = this._localID),
                (this._parentID = -1));
        }
        updateTransform(e)
        {
            const t = this.localTransform;

            if (
                (this._localID !== this._currentLocalID
                    && ((t.a = this._cx * this.scale.x),
                    (t.b = this._sx * this.scale.x),
                    (t.c = this._cy * this.scale.y),
                    (t.d = this._sy * this.scale.y),
                    (t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c)),
                    (t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)),
                    (this._currentLocalID = this._localID),
                    (this._parentID = -1)),
                this._parentID !== e._worldID)
            )
            {
                const i = e.worldTransform;
                const s = this.worldTransform;

                (s.a = t.a * i.a + t.b * i.c),
                (s.b = t.a * i.b + t.b * i.d),
                (s.c = t.c * i.a + t.d * i.c),
                (s.d = t.c * i.b + t.d * i.d),
                (s.tx = t.tx * i.a + t.ty * i.c + i.tx),
                (s.ty = t.tx * i.b + t.ty * i.d + i.ty),
                (this._parentID = e._worldID),
                this._worldID++;
            }
        }
        setFromMatrix(e)
        {
            e.decompose(this), this._localID++;
        }
        get rotation()
        {
            return this._rotation;
        }
        set rotation(e)
        {
            this._rotation !== e && ((this._rotation = e), this.updateSkew());
        }
    };
    const vi = jo;

    vi.IDENTITY = new jo();
    const cc = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`;
    const uc = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;

    function Yo(e, t, i)
    {
        const s = e.createShader(t);

        return e.shaderSource(s, i), e.compileShader(s), s;
    }
    function Fr(e)
    {
        const t = new Array(e);

        for (let i = 0; i < t.length; i++) t[i] = !1;

        return t;
    }
    function qo(e, t)
    {
        switch (e)
        {
            case 'float':
                return 0;
            case 'vec2':
                return new Float32Array(2 * t);
            case 'vec3':
                return new Float32Array(3 * t);
            case 'vec4':
                return new Float32Array(4 * t);
            case 'int':
            case 'uint':
            case 'sampler2D':
            case 'sampler2DArray':
                return 0;
            case 'ivec2':
                return new Int32Array(2 * t);
            case 'ivec3':
                return new Int32Array(3 * t);
            case 'ivec4':
                return new Int32Array(4 * t);
            case 'uvec2':
                return new Uint32Array(2 * t);
            case 'uvec3':
                return new Uint32Array(3 * t);
            case 'uvec4':
                return new Uint32Array(4 * t);
            case 'bool':
                return !1;
            case 'bvec2':
                return Fr(2 * t);
            case 'bvec3':
                return Fr(3 * t);
            case 'bvec4':
                return Fr(4 * t);
            case 'mat2':
                return new Float32Array([1, 0, 0, 1]);
            case 'mat3':
                return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
            case 'mat4':
                return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        }

        return null;
    }
    const Fe = [
        {
            test: (e) => e.type === 'float' && e.size === 1 && !e.isArray,
            code: (e) => `
            if(uv["${e}"] !== ud["${e}"].value)
            {
                ud["${e}"].value = uv["${e}"]
                gl.uniform1f(ud["${e}"].location, uv["${e}"])
            }
            `,
        },
        {
            test: (e, t) =>
                (e.type === 'sampler2D' || e.type === 'samplerCube' || e.type === 'sampler2DArray')
                    && e.size === 1
                    && !e.isArray
                    && (t == null || t.castToBaseTexture !== void 0),
            code: (e) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${e}"], t);

            if(ud["${e}"].value !== t)
            {
                ud["${e}"].value = t;
                gl.uniform1i(ud["${e}"].location, t);
; // eslint-disable-line max-len
            }`,
        },
        {
            test: (e, t) => e.type === 'mat3' && e.size === 1 && !e.isArray && t.a !== void 0,
            code: (e) => `
            gl.uniformMatrix3fv(ud["${e}"].location, false, uv["${e}"].toArray(true));
            `,
            codeUbo: (e) => `
                var ${e}_matrix = uv.${e}.toArray(true);

                data[offset] = ${e}_matrix[0];
                data[offset+1] = ${e}_matrix[1];
                data[offset+2] = ${e}_matrix[2];

                data[offset + 4] = ${e}_matrix[3];
                data[offset + 5] = ${e}_matrix[4];
                data[offset + 6] = ${e}_matrix[5];

                data[offset + 8] = ${e}_matrix[6];
                data[offset + 9] = ${e}_matrix[7];
                data[offset + 10] = ${e}_matrix[8];
            `,
        },
        {
            test: (e, t) => e.type === 'vec2' && e.size === 1 && !e.isArray && t.x !== void 0,
            code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${e}"].location, v.x, v.y);
                }`,
            codeUbo: (e) => `
                v = uv.${e};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `,
        },
        {
            test: (e) => e.type === 'vec2' && e.size === 1 && !e.isArray,
            code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${e}"].location, v[0], v[1]);
                }
            `,
        },
        {
            test: (e, t) => e.type === 'vec4' && e.size === 1 && !e.isArray && t.width !== void 0,
            code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${e}"].location, v.x, v.y, v.width, v.height)
                }`,
            codeUbo: (e) => `
                    v = uv.${e};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `,
        },
        {
            test: (e, t) => e.type === 'vec4' && e.size === 1 && !e.isArray && t.red !== void 0,
            code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${e}"].location, v.red, v.green, v.blue, v.alpha)
                }`,
            codeUbo: (e) => `
                    v = uv.${e};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `,
        },
        {
            test: (e, t) => e.type === 'vec3' && e.size === 1 && !e.isArray && t.red !== void 0,
            code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;

                    gl.uniform3f(ud["${e}"].location, v.red, v.green, v.blue)
                }`,
            codeUbo: (e) => `
                    v = uv.${e};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `,
        },
        {
            test: (e) => e.type === 'vec4' && e.size === 1 && !e.isArray,
            code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${e}"].location, v[0], v[1], v[2], v[3])
                }`,
        },
    ];
    const dc = {
        float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
        vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
        vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
        vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
        int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
        ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
        ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
        ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
        uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
        uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
        uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
        uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
        bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
        bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
        bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
        bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
        mat2: 'gl.uniformMatrix2fv(location, false, v)',
        mat3: 'gl.uniformMatrix3fv(location, false, v)',
        mat4: 'gl.uniformMatrix4fv(location, false, v)',
        sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
        samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
        sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    };
    const fc = {
        float: 'gl.uniform1fv(location, v)',
        vec2: 'gl.uniform2fv(location, v)',
        vec3: 'gl.uniform3fv(location, v)',
        vec4: 'gl.uniform4fv(location, v)',
        mat4: 'gl.uniformMatrix4fv(location, false, v)',
        mat3: 'gl.uniformMatrix3fv(location, false, v)',
        mat2: 'gl.uniformMatrix2fv(location, false, v)',
        int: 'gl.uniform1iv(location, v)',
        ivec2: 'gl.uniform2iv(location, v)',
        ivec3: 'gl.uniform3iv(location, v)',
        ivec4: 'gl.uniform4iv(location, v)',
        uint: 'gl.uniform1uiv(location, v)',
        uvec2: 'gl.uniform2uiv(location, v)',
        uvec3: 'gl.uniform3uiv(location, v)',
        uvec4: 'gl.uniform4uiv(location, v)',
        bool: 'gl.uniform1iv(location, v)',
        bvec2: 'gl.uniform2iv(location, v)',
        bvec3: 'gl.uniform3iv(location, v)',
        bvec4: 'gl.uniform4iv(location, v)',
        sampler2D: 'gl.uniform1iv(location, v)',
        samplerCube: 'gl.uniform1iv(location, v)',
        sampler2DArray: 'gl.uniform1iv(location, v)',
    };

    function pc(e, t)
    {
        let s;
        const i = [
            `
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `,
        ];

        for (const r in e.uniforms)
        {
            const n = t[r];

            if (!n)
            {
                (s = e.uniforms[r]) != null
                    && s.group
                    && (e.uniforms[r].ubo
                        ? i.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${r}, '${r}');
                    `)
                        : i.push(`
                        renderer.shader.syncUniformGroup(uv.${r}, syncData);
                    `));
                continue;
            }
            const o = e.uniforms[r];
            let a = !1;

            for (let h = 0; h < Fe.length; h++)
            {
                if (Fe[h].test(n, o))
                {
                    i.push(Fe[h].code(r, o)), (a = !0);
                    break;
                }
            }
            if (!a)
            {
                const l = (n.size === 1 && !n.isArray ? dc : fc)[n.type].replace('location', `ud["${r}"].location`);

                i.push(`
            cu = ud["${r}"];
            cv = cu.value;
            v = uv["${r}"];
            ${l};`);
            }
        }

        return new Function(
            'ud',
            'uv',
            'renderer',
            'syncData',
            i.join(`
`),
        );
    }
    const Ko = {};
    let Ke = Ko;

    function Zo()
    {
        if (Ke === Ko || (Ke == null ? void 0 : Ke.isContextLost()))
        {
            const e = P.ADAPTER.createCanvas();
            let t;

            P.PREFER_ENV >= et.WEBGL2 && (t = e.getContext('webgl2', {})),
            t
                    || ((t = e.getContext('webgl', {}) || e.getContext('experimental-webgl', {})),
                    t ? t.getExtension('WEBGL_draw_buffers') : (t = null)),
            (Ke = t);
        }

        return Ke;
    }
    let vs;

    function mc()
    {
        if (!vs)
        {
            vs = Pt.MEDIUM;
            const e = Zo();

            e
                && e.getShaderPrecisionFormat
                && (vs = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision ? Pt.HIGH : Pt.MEDIUM);
        }

        return vs;
    }
    function Jo(e, t)
    {
        const i = e
            .getShaderSource(t)
            .split(
                `
`,
            )
            .map((l, c) => `${c}: ${l}`);
        const s = e.getShaderInfoLog(t);
        const r = s.split(`
`);
        const n = {};
        const o = r
            .map((l) => parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/, '$1')))
            .filter((l) => (l && !n[l] ? ((n[l] = !0), !0) : !1));
        const a = [''];

        o.forEach((l) =>
        {
            (i[l - 1] = `%c${i[l - 1]}%c`), a.push('background: #FF0000; color:#FFFFFF; font-size: 10px', 'font-size: 10px');
        });
        const h = i.join(`
`);

        (a[0] = h),
        console.error(s),
        console.groupCollapsed('click to view full shader code'),
        console.warn(...a),
        console.groupEnd();
    }
    function _c(e, t, i, s)
    {
        e.getProgramParameter(t, e.LINK_STATUS)
            || (e.getShaderParameter(i, e.COMPILE_STATUS) || Jo(e, i),
            e.getShaderParameter(s, e.COMPILE_STATUS) || Jo(e, s),
            console.error('PixiJS Error: Could not initialize shader.'),
            e.getProgramInfoLog(t) !== '' && console.warn('PixiJS Warning: gl.getProgramInfoLog()', e.getProgramInfoLog(t)));
    }
    const gc = {
        float: 1,
        vec2: 2,
        vec3: 3,
        vec4: 4,
        int: 1,
        ivec2: 2,
        ivec3: 3,
        ivec4: 4,
        uint: 1,
        uvec2: 2,
        uvec3: 3,
        uvec4: 4,
        bool: 1,
        bvec2: 2,
        bvec3: 3,
        bvec4: 4,
        mat2: 4,
        mat3: 9,
        mat4: 16,
        sampler2D: 1,
    };

    function Qo(e)
    {
        return gc[e];
    }
    let xs = null;
    const ta = {
        FLOAT: 'float',
        FLOAT_VEC2: 'vec2',
        FLOAT_VEC3: 'vec3',
        FLOAT_VEC4: 'vec4',
        INT: 'int',
        INT_VEC2: 'ivec2',
        INT_VEC3: 'ivec3',
        INT_VEC4: 'ivec4',
        UNSIGNED_INT: 'uint',
        UNSIGNED_INT_VEC2: 'uvec2',
        UNSIGNED_INT_VEC3: 'uvec3',
        UNSIGNED_INT_VEC4: 'uvec4',
        BOOL: 'bool',
        BOOL_VEC2: 'bvec2',
        BOOL_VEC3: 'bvec3',
        BOOL_VEC4: 'bvec4',
        FLOAT_MAT2: 'mat2',
        FLOAT_MAT3: 'mat3',
        FLOAT_MAT4: 'mat4',
        SAMPLER_2D: 'sampler2D',
        INT_SAMPLER_2D: 'sampler2D',
        UNSIGNED_INT_SAMPLER_2D: 'sampler2D',
        SAMPLER_CUBE: 'samplerCube',
        INT_SAMPLER_CUBE: 'samplerCube',
        UNSIGNED_INT_SAMPLER_CUBE: 'samplerCube',
        SAMPLER_2D_ARRAY: 'sampler2DArray',
        INT_SAMPLER_2D_ARRAY: 'sampler2DArray',
        UNSIGNED_INT_SAMPLER_2D_ARRAY: 'sampler2DArray',
    };

    function ea(e, t)
    {
        if (!xs)
        {
            const i = Object.keys(ta);

            xs = {};
            for (let s = 0; s < i.length; ++s)
            {
                const r = i[s];

                xs[e[r]] = ta[r];
            }
        }

        return xs[t];
    }
    function ia(e, t, i)
    {
        if (e.substring(0, 9) !== 'precision')
        {
            let s = t;

            return (
                t === Pt.HIGH && i !== Pt.HIGH && (s = Pt.MEDIUM),
                `precision ${s} float;
${e}`
            );
        }
        else if (i !== Pt.HIGH && e.substring(0, 15) === 'precision highp')
        { return e.replace('precision highp', 'precision mediump'); }

        return e;
    }
    let xi;

    function sa()
    {
        if (typeof xi === 'boolean') return xi;
        try
        {
            xi
                = new Function('param1', 'param2', 'param3', 'return param1[param2] === param3;')({ a: 'b' }, 'a', 'b') === !0;
        }
        catch (e)
        {
            xi = !1;
        }

        return xi;
    }
    let yc = 0;
    const Ts = {};
    const Ze = class
    {
        constructor(e, t, i = 'pixi-shader', s = {})
        {
            (this.extra = {}),
            (this.id = yc++),
            (this.vertexSrc = e || Ze.defaultVertexSrc),
            (this.fragmentSrc = t || Ze.defaultFragmentSrc),
            (this.vertexSrc = this.vertexSrc.trim()),
            (this.fragmentSrc = this.fragmentSrc.trim()),
            (this.extra = s),
            this.vertexSrc.substring(0, 8) !== '#version'
                        && ((i = i.replace(/\s+/g, '-')),
                        Ts[i] ? (Ts[i]++, (i += `-${Ts[i]}`)) : (Ts[i] = 1),
                        (this.vertexSrc = `#define SHADER_NAME ${i}
${this.vertexSrc}`),
                        (this.fragmentSrc = `#define SHADER_NAME ${i}
${this.fragmentSrc}`),
                        (this.vertexSrc = ia(this.vertexSrc, Ze.defaultVertexPrecision, Pt.HIGH)),
                        (this.fragmentSrc = ia(this.fragmentSrc, Ze.defaultFragmentPrecision, mc()))),
            (this.glPrograms = {}),
            (this.syncUniforms = null);
        }
        static get defaultVertexSrc()
        {
            return uc;
        }
        static get defaultFragmentSrc()
        {
            return cc;
        }
        static from(e, t, i)
        {
            const s = e + t;
            let r = br[s];

            return r || (br[s] = r = new Ze(e, t, i)), r;
        }
    };
    const Ut = Ze;

    (Ut.defaultVertexPrecision = Pt.HIGH), (Ut.defaultFragmentPrecision = Yt.apple.device ? Pt.HIGH : Pt.MEDIUM);
    let vc = 0;

    class kt
    {
        constructor(t, i, s)
        {
            (this.group = !0),
            (this.syncUniforms = {}),
            (this.dirtyId = 0),
            (this.id = vc++),
            (this.static = !!i),
            (this.ubo = !!s),
            t instanceof at
                ? ((this.buffer = t), (this.buffer.type = jt.UNIFORM_BUFFER), (this.autoManage = !1), (this.ubo = !0))
                : ((this.uniforms = t),
                this.ubo
                          && ((this.buffer = new at(new Float32Array(1))),
                          (this.buffer.type = jt.UNIFORM_BUFFER),
                          (this.autoManage = !0)));
        }
        update()
        {
            this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
        }
        add(t, i, s)
        {
            if (!this.ubo) this.uniforms[t] = new kt(i, s);
            else
            {
                throw new Error(
                    '[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them',
                );
            }
        }
        static from(t, i, s)
        {
            return new kt(t, i, s);
        }
        static uboFrom(t, i)
        {
            return new kt(t, i != null ? i : !0, !0);
        }
    }
    class Kt
    {
        constructor(t, i)
        {
            (this.uniformBindCount = 0),
            (this.program = t),
            i
                ? i instanceof kt
                    ? (this.uniformGroup = i)
                    : (this.uniformGroup = new kt(i))
                : (this.uniformGroup = new kt({})),
            (this.disposeRunner = new Bt('disposeShader'));
        }
        checkUniformExists(t, i)
        {
            if (i.uniforms[t]) return !0;
            for (const s in i.uniforms)
            {
                const r = i.uniforms[s];

                if (r.group && this.checkUniformExists(t, r)) return !0;
            }

            return !1;
        }
        destroy()
        {
            (this.uniformGroup = null), this.disposeRunner.emit(this), this.disposeRunner.destroy();
        }
        get uniforms()
        {
            return this.uniformGroup.uniforms;
        }
        static from(t, i, s)
        {
            const r = Ut.from(t, i);

            return new Kt(r, s);
        }
    }
    class ra
    {
        constructor(t, i)
        {
            if (
                ((this.vertexSrc = t),
                (this.fragTemplate = i),
                (this.programCache = {}),
                (this.defaultGroupCache = {}),
                !i.includes('%count%'))
            )
            { throw new Error('Fragment template must contain "%count%".'); }
            if (!i.includes('%forloop%')) throw new Error('Fragment template must contain "%forloop%".');
        }
        generateShader(t)
        {
            if (!this.programCache[t])
            {
                const s = new Int32Array(t);

                for (let n = 0; n < t; n++) s[n] = n;
                this.defaultGroupCache[t] = kt.from({ uSamplers: s }, !0);
                let r = this.fragTemplate;

                (r = r.replace(/%count%/gi, `${t}`)),
                (r = r.replace(/%forloop%/gi, this.generateSampleSrc(t))),
                (this.programCache[t] = new Ut(this.vertexSrc, r));
            }
            const i = {
                tint: new Float32Array([1, 1, 1, 1]),
                translationMatrix: new tt(),
                default: this.defaultGroupCache[t],
            };

            return new Kt(this.programCache[t], i);
        }
        generateSampleSrc(t)
        {
            let i = '';

            (i += `
`),
            (i += `
`);
            for (let s = 0; s < t; s++)
            {
                s > 0
                    && (i += `
else `),
                s < t - 1 && (i += `if(vTextureId < ${s}.5)`),
                (i += `
{`),
                (i += `
	color = texture2D(uSamplers[${s}], vTextureCoord);`),
                (i += `
}`);
            }

            return (
                (i += `
`),
                (i += `
`),
                i
            );
        }
    }
    class bs
    {
        constructor()
        {
            (this.elements = []), (this.ids = []), (this.count = 0);
        }
        clear()
        {
            for (let t = 0; t < this.count; t++) this.elements[t] = null;
            this.count = 0;
        }
    }
    function xc()
    {
        return !Yt.apple.device;
    }
    function Tc(e)
    {
        let t = !0;
        const i = P.ADAPTER.getNavigator();

        if (Yt.tablet || Yt.phone)
        {
            if (Yt.apple.device)
            {
                const s = i.userAgent.match(/OS (\d+)_(\d+)?/);

                s && parseInt(s[1], 10) < 11 && (t = !1);
            }
            if (Yt.android.device)
            {
                const s = i.userAgent.match(/Android\s([0-9.]*)/);

                s && parseInt(s[1], 10) < 7 && (t = !1);
            }
        }

        return t ? e : 4;
    }
    class Ti
    {
        constructor(t)
        {
            this.renderer = t;
        }
        flush() {}
        destroy()
        {
            this.renderer = null;
        }
        start() {}
        stop()
        {
            this.flush();
        }
        render(t) {}
    }
    const bc = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`;
    const Ec = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
    const Zt = class extends Ti
    {
        constructor(e)
        {
            super(e),
            this.setShaderGenerator(),
            (this.geometryClass = Br),
            (this.vertexSize = 6),
            (this.state = ne.for2d()),
            (this.size = Zt.defaultBatchSize * 4),
            (this._vertexCount = 0),
            (this._indexCount = 0),
            (this._bufferedElements = []),
            (this._bufferedTextures = []),
            (this._bufferSize = 0),
            (this._shader = null),
            (this._packedGeometries = []),
            (this._packedGeometryPoolSize = 2),
            (this._flushId = 0),
            (this._aBuffers = {}),
            (this._iBuffers = {}),
            (this.maxTextures = 1),
            this.renderer.on('prerender', this.onPrerender, this),
            e.runners.contextChange.add(this),
            (this._dcIndex = 0),
            (this._aIndex = 0),
            (this._iIndex = 0),
            (this._attributeBuffer = null),
            (this._indexBuffer = null),
            (this._tempBoundTextures = []);
        }
        static get defaultMaxTextures()
        {
            let e;

            return (
                (this._defaultMaxTextures = (e = this._defaultMaxTextures) != null ? e : Tc(32)), this._defaultMaxTextures
            );
        }
        static set defaultMaxTextures(e)
        {
            this._defaultMaxTextures = e;
        }
        static get canUploadSameBuffer()
        {
            let e;

            return (
                (this._canUploadSameBuffer = (e = this._canUploadSameBuffer) != null ? e : xc()), this._canUploadSameBuffer
            );
        }
        static set canUploadSameBuffer(e)
        {
            this._canUploadSameBuffer = e;
        }
        get MAX_TEXTURES()
        {
            return z('7.1.0', 'BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures'), this.maxTextures;
        }
        static get defaultVertexSrc()
        {
            return Ec;
        }
        static get defaultFragmentTemplate()
        {
            return bc;
        }
        setShaderGenerator({ vertex: e = Zt.defaultVertexSrc, fragment: t = Zt.defaultFragmentTemplate } = {})
        {
            this.shaderGenerator = new ra(e, t);
        }
        contextChange()
        {
            const e = this.renderer.gl;

            P.PREFER_ENV === et.WEBGL_LEGACY
                ? (this.maxTextures = 1)
                : ((this.maxTextures = Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), Zt.defaultMaxTextures)),
                (this.maxTextures = Xo(this.maxTextures, e))),
            (this._shader = this.shaderGenerator.generateShader(this.maxTextures));
            for (let t = 0; t < this._packedGeometryPoolSize; t++) this._packedGeometries[t] = new this.geometryClass();
            this.initFlushBuffers();
        }
        initFlushBuffers()
        {
            const { _drawCallPool: e, _textureArrayPool: t } = Zt;
            const i = this.size / 4;
            const s = Math.floor(i / this.maxTextures) + 1;

            for (; e.length < i;) e.push(new fs());
            for (; t.length < s;) t.push(new bs());
            for (let r = 0; r < this.maxTextures; r++) this._tempBoundTextures[r] = null;
        }
        onPrerender()
        {
            this._flushId = 0;
        }
        render(e)
        {
            !e._texture.valid
                || (this._vertexCount + e.vertexData.length / 2 > this.size && this.flush(),
                (this._vertexCount += e.vertexData.length / 2),
                (this._indexCount += e.indices.length),
                (this._bufferedTextures[this._bufferSize] = e._texture.baseTexture),
                (this._bufferedElements[this._bufferSize++] = e));
        }
        buildTexturesAndDrawCalls()
        {
            const { _bufferedTextures: e, maxTextures: t } = this;
            const i = Zt._textureArrayPool;
            const s = this.renderer.batch;
            const r = this._tempBoundTextures;
            const n = this.renderer.textureGC.count;
            let o = ++V._globalBatch;
            let a = 0;
            let h = i[0];
            let l = 0;

            s.copyBoundTextures(r, t);
            for (let c = 0; c < this._bufferSize; ++c)
            {
                const u = e[c];

                (e[c] = null),
                u._batchEnabled !== o
                        && (h.count >= t
                            && (s.boundArray(h, r, o, t), this.buildDrawCalls(h, l, c), (l = c), (h = i[++a]), ++o),
                        (u._batchEnabled = o),
                        (u.touched = n),
                        (h.elements[h.count++] = u));
            }
            h.count > 0 && (s.boundArray(h, r, o, t), this.buildDrawCalls(h, l, this._bufferSize), ++a, ++o);
            for (let c = 0; c < r.length; c++) r[c] = null;
            V._globalBatch = o;
        }
        buildDrawCalls(e, t, i)
        {
            const { _bufferedElements: s, _attributeBuffer: r, _indexBuffer: n, vertexSize: o } = this;
            const a = Zt._drawCallPool;
            let h = this._dcIndex;
            let l = this._aIndex;
            let c = this._iIndex;
            let u = a[h];

            (u.start = this._iIndex), (u.texArray = e);
            for (let d = t; d < i; ++d)
            {
                const f = s[d];
                const p = f._texture.baseTexture;
                const _ = yr[p.alphaMode ? 1 : 0][f.blendMode];

                (s[d] = null),
                t < d
                        && u.blend !== _
                        && ((u.size = c - u.start), (t = d), (u = a[++h]), (u.texArray = e), (u.start = c)),
                this.packInterleavedGeometry(f, r, n, l, c),
                (l += (f.vertexData.length / 2) * o),
                (c += f.indices.length),
                (u.blend = _);
            }
            t < i && ((u.size = c - u.start), ++h), (this._dcIndex = h), (this._aIndex = l), (this._iIndex = c);
        }
        bindAndClearTexArray(e)
        {
            const t = this.renderer.texture;

            for (let i = 0; i < e.count; i++) t.bind(e.elements[i], e.ids[i]), (e.elements[i] = null);
            e.count = 0;
        }
        updateGeometry()
        {
            const { _packedGeometries: e, _attributeBuffer: t, _indexBuffer: i } = this;

            Zt.canUploadSameBuffer
                ? (e[this._flushId]._buffer.update(t.rawBinaryData),
                e[this._flushId]._indexBuffer.update(i),
                this.renderer.geometry.updateBuffers())
                : (this._packedGeometryPoolSize <= this._flushId
                      && (this._packedGeometryPoolSize++, (e[this._flushId] = new this.geometryClass())),
                e[this._flushId]._buffer.update(t.rawBinaryData),
                e[this._flushId]._indexBuffer.update(i),
                this.renderer.geometry.bind(e[this._flushId]),
                this.renderer.geometry.updateBuffers(),
                this._flushId++);
        }
        drawBatches()
        {
            const e = this._dcIndex;
            const { gl: t, state: i } = this.renderer;
            const s = Zt._drawCallPool;
            let r = null;

            for (let n = 0; n < e; n++)
            {
                const { texArray: o, type: a, size: h, start: l, blend: c } = s[n];

                r !== o && ((r = o), this.bindAndClearTexArray(o)),
                (this.state.blendMode = c),
                i.set(this.state),
                t.drawElements(a, h, t.UNSIGNED_SHORT, l * 2);
            }
        }
        flush()
        {
            this._vertexCount !== 0
                && ((this._attributeBuffer = this.getAttributeBuffer(this._vertexCount)),
                (this._indexBuffer = this.getIndexBuffer(this._indexCount)),
                (this._aIndex = 0),
                (this._iIndex = 0),
                (this._dcIndex = 0),
                this.buildTexturesAndDrawCalls(),
                this.updateGeometry(),
                this.drawBatches(),
                (this._bufferSize = 0),
                (this._vertexCount = 0),
                (this._indexCount = 0));
        }
        start()
        {
            this.renderer.state.set(this.state),
            this.renderer.texture.ensureSamplerType(this.maxTextures),
            this.renderer.shader.bind(this._shader),
            Zt.canUploadSameBuffer && this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
        }
        stop()
        {
            this.flush();
        }
        destroy()
        {
            for (let e = 0; e < this._packedGeometryPoolSize; e++)
            { this._packedGeometries[e] && this._packedGeometries[e].destroy(); }
            this.renderer.off('prerender', this.onPrerender, this),
            (this._aBuffers = null),
            (this._iBuffers = null),
            (this._packedGeometries = null),
            (this._attributeBuffer = null),
            (this._indexBuffer = null),
            this._shader && (this._shader.destroy(), (this._shader = null)),
            super.destroy();
        }
        getAttributeBuffer(e)
        {
            const t = _i(Math.ceil(e / 8));
            const i = Tr(t);
            const s = t * 8;

            this._aBuffers.length <= i && (this._iBuffers.length = i + 1);
            let r = this._aBuffers[s];

            return r || (this._aBuffers[s] = r = new us(s * this.vertexSize * 4)), r;
        }
        getIndexBuffer(e)
        {
            const t = _i(Math.ceil(e / 12));
            const i = Tr(t);
            const s = t * 12;

            this._iBuffers.length <= i && (this._iBuffers.length = i + 1);
            let r = this._iBuffers[i];

            return r || (this._iBuffers[i] = r = new Uint16Array(s)), r;
        }
        packInterleavedGeometry(e, t, i, s, r)
        {
            const { uint32View: n, float32View: o } = t;
            const a = s / this.vertexSize;
            const h = e.uvs;
            const l = e.indices;
            const c = e.vertexData;
            const u = e._texture.baseTexture._batchLocation;
            const d = Math.min(e.worldAlpha, 1);
            const f = j.shared.setValue(e._tintRGB).toPremultiplied(d);

            for (let p = 0; p < c.length; p += 2)
            { (o[s++] = c[p]), (o[s++] = c[p + 1]), (o[s++] = h[p]), (o[s++] = h[p + 1]), (n[s++] = f), (o[s++] = u); }
            for (let p = 0; p < l.length; p++) i[r++] = a + l[p];
        }
    };
    const Gt = Zt;

    (Gt.defaultBatchSize = 4096),
    (Gt.extension = { name: 'batch', type: M.RendererPlugin }),
    (Gt._drawCallPool = []),
    (Gt._textureArrayPool = []),
    U.add(Gt);
    const wc = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`;
    const Sc = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
    const bi = class extends Kt
    {
        constructor(e, t, i)
        {
            const s = Ut.from(e || bi.defaultVertexSrc, t || bi.defaultFragmentSrc);

            super(s, i),
            (this.padding = 0),
            (this.resolution = bi.defaultResolution),
            (this.multisample = bi.defaultMultisample),
            (this.enabled = !0),
            (this.autoFit = !0),
            (this.state = new ne());
        }
        apply(e, t, i, s, r)
        {
            e.applyFilter(this, t, i, s);
        }
        get blendMode()
        {
            return this.state.blendMode;
        }
        set blendMode(e)
        {
            this.state.blendMode = e;
        }
        get resolution()
        {
            return this._resolution;
        }
        set resolution(e)
        {
            this._resolution = e;
        }
        static get defaultVertexSrc()
        {
            return Sc;
        }
        static get defaultFragmentSrc()
        {
            return wc;
        }
    };
    const gt = bi;

    (gt.defaultResolution = 1), (gt.defaultMultisample = nt.NONE);
    class Ei
    {
        constructor()
        {
            (this.clearBeforeRender = !0), (this._backgroundColor = new j(0)), (this.alpha = 1);
        }
        init(t)
        {
            this.clearBeforeRender = t.clearBeforeRender;
            const { backgroundColor: i, background: s, backgroundAlpha: r } = t;
            const n = s != null ? s : i;

            n !== void 0 && (this.color = n), (this.alpha = r);
        }
        get color()
        {
            return this._backgroundColor.value;
        }
        set color(t)
        {
            this._backgroundColor.setValue(t);
        }
        get alpha()
        {
            return this._backgroundColor.alpha;
        }
        set alpha(t)
        {
            this._backgroundColor.setAlpha(t);
        }
        get backgroundColor()
        {
            return this._backgroundColor;
        }
        destroy() {}
    }
    (Ei.defaultOptions = { backgroundAlpha: 1, backgroundColor: 0, clearBeforeRender: !0 }),
    (Ei.extension = { type: [M.RendererSystem, M.CanvasRendererSystem], name: 'background' }),
    U.add(Ei);
    class Nr
    {
        constructor(t)
        {
            (this.renderer = t), (this.emptyRenderer = new Ti(t)), (this.currentRenderer = this.emptyRenderer);
        }
        setObjectRenderer(t)
        {
            this.currentRenderer !== t
                && (this.currentRenderer.stop(), (this.currentRenderer = t), this.currentRenderer.start());
        }
        flush()
        {
            this.setObjectRenderer(this.emptyRenderer);
        }
        reset()
        {
            this.setObjectRenderer(this.emptyRenderer);
        }
        copyBoundTextures(t, i)
        {
            const { boundTextures: s } = this.renderer.texture;

            for (let r = i - 1; r >= 0; --r) (t[r] = s[r] || null), t[r] && (t[r]._batchLocation = r);
        }
        boundArray(t, i, s, r)
        {
            const { elements: n, ids: o, count: a } = t;
            let h = 0;

            for (let l = 0; l < a; l++)
            {
                const c = n[l];
                const u = c._batchLocation;

                if (u >= 0 && u < r && i[u] === c)
                {
                    o[l] = u;
                    continue;
                }
                for (; h < r;)
                {
                    const d = i[h];

                    if (d && d._batchEnabled === s && d._batchLocation === h)
                    {
                        h++;
                        continue;
                    }
                    (o[l] = h), (c._batchLocation = h), (i[h] = c);
                    break;
                }
            }
        }
        destroy()
        {
            this.renderer = null;
        }
    }
    (Nr.extension = { type: M.RendererSystem, name: 'batch' }), U.add(Nr);
    let na = 0;

    class wi
    {
        constructor(t)
        {
            (this.renderer = t),
            (this.webGLVersion = 1),
            (this.extensions = {}),
            (this.supports = { uint32Indices: !1 }),
            (this.handleContextLost = this.handleContextLost.bind(this)),
            (this.handleContextRestored = this.handleContextRestored.bind(this));
        }
        get isLost()
        {
            return !this.gl || this.gl.isContextLost();
        }
        contextChange(t)
        {
            (this.gl = t), (this.renderer.gl = t), (this.renderer.CONTEXT_UID = na++);
        }
        init(t)
        {
            if (t.context) this.initFromContext(t.context);
            else
            {
                const i = this.renderer.background.alpha < 1;
                const s = t.premultipliedAlpha;

                (this.preserveDrawingBuffer = t.preserveDrawingBuffer),
                (this.useContextAlpha = t.useContextAlpha),
                (this.powerPreference = t.powerPreference),
                this.initFromOptions({
                    alpha: i,
                    premultipliedAlpha: s,
                    antialias: t.antialias,
                    stencil: !0,
                    preserveDrawingBuffer: t.preserveDrawingBuffer,
                    powerPreference: t.powerPreference,
                });
            }
        }
        initFromContext(t)
        {
            (this.gl = t),
            this.validateContext(t),
            (this.renderer.gl = t),
            (this.renderer.CONTEXT_UID = na++),
            this.renderer.runners.contextChange.emit(t);
            const i = this.renderer.view;

            i.addEventListener !== void 0
                && (i.addEventListener('webglcontextlost', this.handleContextLost, !1),
                i.addEventListener('webglcontextrestored', this.handleContextRestored, !1));
        }
        initFromOptions(t)
        {
            const i = this.createContext(this.renderer.view, t);

            this.initFromContext(i);
        }
        createContext(t, i)
        {
            let s;

            if ((P.PREFER_ENV >= et.WEBGL2 && (s = t.getContext('webgl2', i)), s)) this.webGLVersion = 2;
            else if (((this.webGLVersion = 1), (s = t.getContext('webgl', i) || t.getContext('experimental-webgl', i)), !s))
            { throw new Error('This browser does not support WebGL. Try using the canvas renderer'); }

            return (this.gl = s), this.getExtensions(), this.gl;
        }
        getExtensions()
        {
            const { gl: t } = this;
            const i = {
                loseContext: t.getExtension('WEBGL_lose_context'),
                anisotropicFiltering: t.getExtension('EXT_texture_filter_anisotropic'),
                floatTextureLinear: t.getExtension('OES_texture_float_linear'),
                s3tc: t.getExtension('WEBGL_compressed_texture_s3tc'),
                s3tc_sRGB: t.getExtension('WEBGL_compressed_texture_s3tc_srgb'),
                etc: t.getExtension('WEBGL_compressed_texture_etc'),
                etc1: t.getExtension('WEBGL_compressed_texture_etc1'),
                pvrtc:
                        t.getExtension('WEBGL_compressed_texture_pvrtc')
                        || t.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
                atc: t.getExtension('WEBGL_compressed_texture_atc'),
                astc: t.getExtension('WEBGL_compressed_texture_astc'),
            };

            this.webGLVersion === 1
                ? Object.assign(this.extensions, i, {
                    drawBuffers: t.getExtension('WEBGL_draw_buffers'),
                    depthTexture: t.getExtension('WEBGL_depth_texture'),
                    vertexArrayObject:
                          t.getExtension('OES_vertex_array_object')
                          || t.getExtension('MOZ_OES_vertex_array_object')
                          || t.getExtension('WEBKIT_OES_vertex_array_object'),
                    uint32ElementIndex: t.getExtension('OES_element_index_uint'),
                    floatTexture: t.getExtension('OES_texture_float'),
                    floatTextureLinear: t.getExtension('OES_texture_float_linear'),
                    textureHalfFloat: t.getExtension('OES_texture_half_float'),
                    textureHalfFloatLinear: t.getExtension('OES_texture_half_float_linear'),
                })
                : this.webGLVersion === 2
                  && Object.assign(this.extensions, i, { colorBufferFloat: t.getExtension('EXT_color_buffer_float') });
        }
        handleContextLost(t)
        {
            t.preventDefault(),
            setTimeout(() =>
            {
                this.gl.isContextLost() && this.extensions.loseContext && this.extensions.loseContext.restoreContext();
            }, 0);
        }
        handleContextRestored()
        {
            this.renderer.runners.contextChange.emit(this.gl);
        }
        destroy()
        {
            const t = this.renderer.view;

            (this.renderer = null),
            t.removeEventListener !== void 0
                    && (t.removeEventListener('webglcontextlost', this.handleContextLost),
                    t.removeEventListener('webglcontextrestored', this.handleContextRestored)),
            this.gl.useProgram(null),
            this.extensions.loseContext && this.extensions.loseContext.loseContext();
        }
        postrender()
        {
            this.renderer.objectRenderer.renderingToScreen && this.gl.flush();
        }
        validateContext(t)
        {
            const i = t.getContextAttributes();
            const s = 'WebGL2RenderingContext' in globalThis && t instanceof globalThis.WebGL2RenderingContext;

            s && (this.webGLVersion = 2),
            i
                    && !i.stencil
                    && console.warn('Provided WebGL context does not have a stencil buffer, masks may not render correctly');
            const r = s || !!t.getExtension('OES_element_index_uint');

            (this.supports.uint32Indices = r),
            r
                    || console.warn(
                        'Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly',
                    );
        }
    }
    (wi.defaultOptions = {
        context: null,
        antialias: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1,
        powerPreference: 'default',
    }),
    (wi.extension = { type: M.RendererSystem, name: 'context' }),
    U.add(wi);
    class Ac extends Ye
    {
        upload(t, i, s)
        {
            const r = t.gl;

            r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.alphaMode === Nt.UNPACK);
            const n = i.realWidth;
            const o = i.realHeight;

            return (
                s.width === n && s.height === o
                    ? r.texSubImage2D(i.target, 0, 0, 0, n, o, i.format, s.type, this.data)
                    : ((s.width = n),
                    (s.height = o),
                    r.texImage2D(i.target, 0, s.internalFormat, n, o, 0, i.format, s.type, this.data)),
                !0
            );
        }
    }
    class Es
    {
        constructor(t, i)
        {
            (this.width = Math.round(t || 100)),
            (this.height = Math.round(i || 100)),
            (this.stencil = !1),
            (this.depth = !1),
            (this.dirtyId = 0),
            (this.dirtyFormat = 0),
            (this.dirtySize = 0),
            (this.depthTexture = null),
            (this.colorTextures = []),
            (this.glFramebuffers = {}),
            (this.disposeRunner = new Bt('disposeFramebuffer')),
            (this.multisample = nt.NONE);
        }
        get colorTexture()
        {
            return this.colorTextures[0];
        }
        addColorTexture(t = 0, i)
        {
            return (
                (this.colorTextures[t]
                    = i
                    || new V(null, {
                        scaleMode: ee.NEAREST,
                        resolution: 1,
                        mipmap: Wt.OFF,
                        width: this.width,
                        height: this.height,
                    })),
                this.dirtyId++,
                this.dirtyFormat++,
                this
            );
        }
        addDepthTexture(t)
        {
            return (
                (this.depthTexture
                    = t
                    || new V(new Ac(null, { width: this.width, height: this.height }), {
                        scaleMode: ee.NEAREST,
                        resolution: 1,
                        width: this.width,
                        height: this.height,
                        mipmap: Wt.OFF,
                        format: C.DEPTH_COMPONENT,
                        type: k.UNSIGNED_SHORT,
                    })),
                this.dirtyId++,
                this.dirtyFormat++,
                this
            );
        }
        enableDepth()
        {
            return (this.depth = !0), this.dirtyId++, this.dirtyFormat++, this;
        }
        enableStencil()
        {
            return (this.stencil = !0), this.dirtyId++, this.dirtyFormat++, this;
        }
        resize(t, i)
        {
            if (((t = Math.round(t)), (i = Math.round(i)), !(t === this.width && i === this.height)))
            {
                (this.width = t), (this.height = i), this.dirtyId++, this.dirtySize++;
                for (let s = 0; s < this.colorTextures.length; s++)
                {
                    const r = this.colorTextures[s];
                    const n = r.resolution;

                    r.setSize(t / n, i / n);
                }
                if (this.depthTexture)
                {
                    const s = this.depthTexture.resolution;

                    this.depthTexture.setSize(t / s, i / s);
                }
            }
        }
        dispose()
        {
            this.disposeRunner.emit(this, !1);
        }
        destroyDepthTexture()
        {
            this.depthTexture
                && (this.depthTexture.destroy(), (this.depthTexture = null), ++this.dirtyId, ++this.dirtyFormat);
        }
    }
    class Lr extends V
    {
        constructor(t = {})
        {
            let i;

            if (typeof t === 'number')
            {
                const s = arguments[0];
                const r = arguments[1];
                const n = arguments[2];
                const o = arguments[3];

                t = { width: s, height: r, scaleMode: n, resolution: o };
            }
            (t.width = t.width || 100),
            (t.height = t.height || 100),
            (i = t.multisample) != null || (t.multisample = nt.NONE),
            super(null, t),
            (this.mipmap = Wt.OFF),
            (this.valid = !0),
            (this._clear = new j([0, 0, 0, 0])),
            (this.framebuffer = new Es(this.realWidth, this.realHeight).addColorTexture(0, this)),
            (this.framebuffer.multisample = t.multisample),
            (this.maskStack = []),
            (this.filterStack = [{}]);
        }
        set clearColor(t)
        {
            this._clear.setValue(t);
        }
        get clearColor()
        {
            return this._clear.value;
        }
        get clear()
        {
            return this._clear;
        }
        resize(t, i)
        {
            this.framebuffer.resize(t * this.resolution, i * this.resolution),
            this.setRealSize(this.framebuffer.width, this.framebuffer.height);
        }
        dispose()
        {
            this.framebuffer.dispose(), super.dispose();
        }
        destroy()
        {
            super.destroy(), this.framebuffer.destroyDepthTexture(), (this.framebuffer = null);
        }
    }
    class _e extends je
    {
        constructor(t)
        {
            const i = t;
            const s = i.naturalWidth || i.videoWidth || i.width;
            const r = i.naturalHeight || i.videoHeight || i.height;

            super(s, r), (this.source = t), (this.noSubImage = !1);
        }
        static crossOrigin(t, i, s)
        {
            s === void 0 && !i.startsWith('data:')
                ? (t.crossOrigin = Go(i))
                : s !== !1 && (t.crossOrigin = typeof s === 'string' ? s : 'anonymous');
        }
        upload(t, i, s, r)
        {
            const n = t.gl;
            const o = i.realWidth;
            const a = i.realHeight;

            if (((r = r || this.source), typeof HTMLImageElement !== 'undefined' && r instanceof HTMLImageElement))
            {
                if (!r.complete || r.naturalWidth === 0) return !1;
            }
            else if (
                typeof HTMLVideoElement !== 'undefined'
                && r instanceof HTMLVideoElement
                && r.readyState <= 1
                && r.buffered.length === 0
            )
            { return !1; }

            return (
                n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.alphaMode === Nt.UNPACK),
                !this.noSubImage && i.target === n.TEXTURE_2D && s.width === o && s.height === a
                    ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, i.format, s.type, r)
                    : ((s.width = o), (s.height = a), n.texImage2D(i.target, 0, s.internalFormat, i.format, s.type, r)),
                !0
            );
        }
        update()
        {
            if (this.destroyed) return;
            const t = this.source;
            const i = t.naturalWidth || t.videoWidth || t.width;
            const s = t.naturalHeight || t.videoHeight || t.height;

            this.resize(i, s), super.update();
        }
        dispose()
        {
            this.source = null;
        }
    }
    class Or extends _e
    {
        constructor(t, i)
        {
            let s;

            if (((i = i || {}), typeof t === 'string'))
            {
                const r = new Image();

                _e.crossOrigin(r, t, i.crossorigin), (r.src = t), (t = r);
            }
            super(t),
            !t.complete && !!this._width && !!this._height && ((this._width = 0), (this._height = 0)),
            (this.url = t.src),
            (this._process = null),
            (this.preserveBitmap = !1),
            (this.createBitmap
                    = ((s = i.createBitmap) != null ? s : P.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap),
            (this.alphaMode = typeof i.alphaMode === 'number' ? i.alphaMode : null),
            (this.bitmap = null),
            (this._load = null),
            i.autoLoad !== !1 && this.load();
        }
        load(t)
        {
            return this._load
                ? this._load
                : (t !== void 0 && (this.createBitmap = t),
                (this._load = new Promise((i, s) =>
                {
                    const r = this.source;

                    this.url = r.src;
                    const n = () =>
                    {
                        this.destroyed
                              || ((r.onload = null),
                              (r.onerror = null),
                              this.resize(r.width, r.height),
                              (this._load = null),
                              this.createBitmap ? i(this.process()) : i(this));
                    };

                    r.complete && r.src
                        ? n()
                        : ((r.onload = n),
                        (r.onerror = (o) =>
                        {
                            s(o), this.onError.emit(o);
                        }));
                })),
                this._load);
        }
        process()
        {
            const t = this.source;

            if (this._process !== null) return this._process;
            if (this.bitmap !== null || !globalThis.createImageBitmap) return Promise.resolve(this);
            const i = globalThis.createImageBitmap;
            const s = !t.crossOrigin || t.crossOrigin === 'anonymous';

            return (
                (this._process = fetch(t.src, { mode: s ? 'cors' : 'no-cors' })
                    .then((r) => r.blob())
                    .then((r) =>
                        i(r, 0, 0, t.width, t.height, {
                            premultiplyAlpha:
                                this.alphaMode === null || this.alphaMode === Nt.UNPACK ? 'premultiply' : 'none',
                        }),
                    )
                    .then((r) =>
                        (this.destroyed
                            ? Promise.reject()
                            : ((this.bitmap = r), this.update(), (this._process = null), Promise.resolve(this))),
                    )),
                this._process
            );
        }
        upload(t, i, s)
        {
            if ((typeof this.alphaMode === 'number' && (i.alphaMode = this.alphaMode), !this.createBitmap))
            { return super.upload(t, i, s); }
            if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
            if ((super.upload(t, i, s, this.bitmap), !this.preserveBitmap))
            {
                let r = !0;
                const n = i._glTextures;

                for (const o in n)
                {
                    const a = n[o];

                    if (a !== s && a.dirtyId !== i.dirtyId)
                    {
                        r = !1;
                        break;
                    }
                }
                r && (this.bitmap.close && this.bitmap.close(), (this.bitmap = null));
            }

            return !0;
        }
        dispose()
        {
            (this.source.onload = null),
            (this.source.onerror = null),
            super.dispose(),
            this.bitmap && (this.bitmap.close(), (this.bitmap = null)),
            (this._process = null),
            (this._load = null);
        }
        static test(t)
        {
            return typeof HTMLImageElement !== 'undefined' && (typeof t === 'string' || t instanceof HTMLImageElement);
        }
    }
    class Ur
    {
        constructor()
        {
            (this.x0 = 0),
            (this.y0 = 0),
            (this.x1 = 1),
            (this.y1 = 0),
            (this.x2 = 1),
            (this.y2 = 1),
            (this.x3 = 0),
            (this.y3 = 1),
            (this.uvsFloat32 = new Float32Array(8));
        }
        set(t, i, s)
        {
            const r = i.width;
            const n = i.height;

            if (s)
            {
                const o = t.width / 2 / r;
                const a = t.height / 2 / n;
                const h = t.x / r + o;
                const l = t.y / n + a;

                (s = it.add(s, it.NW)),
                (this.x0 = h + o * it.uX(s)),
                (this.y0 = l + a * it.uY(s)),
                (s = it.add(s, 2)),
                (this.x1 = h + o * it.uX(s)),
                (this.y1 = l + a * it.uY(s)),
                (s = it.add(s, 2)),
                (this.x2 = h + o * it.uX(s)),
                (this.y2 = l + a * it.uY(s)),
                (s = it.add(s, 2)),
                (this.x3 = h + o * it.uX(s)),
                (this.y3 = l + a * it.uY(s));
            }
            else
            {
                (this.x0 = t.x / r),
                (this.y0 = t.y / n),
                (this.x1 = (t.x + t.width) / r),
                (this.y1 = t.y / n),
                (this.x2 = (t.x + t.width) / r),
                (this.y2 = (t.y + t.height) / n),
                (this.x3 = t.x / r),
                (this.y3 = (t.y + t.height) / n);
            }
            (this.uvsFloat32[0] = this.x0),
            (this.uvsFloat32[1] = this.y0),
            (this.uvsFloat32[2] = this.x1),
            (this.uvsFloat32[3] = this.y1),
            (this.uvsFloat32[4] = this.x2),
            (this.uvsFloat32[5] = this.y2),
            (this.uvsFloat32[6] = this.x3),
            (this.uvsFloat32[7] = this.y3);
        }
        toString()
        {
            return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
        }
    }
    const oa = new Ur();

    function ws(e)
    {
        (e.destroy = function () {}), (e.on = function () {}), (e.once = function () {}), (e.emit = function () {});
    }
    class B extends Ve
    {
        constructor(t, i, s, r, n, o, a)
        {
            if (
                (super(),
                (this.noFrame = !1),
                i || ((this.noFrame = !0), (i = new $(0, 0, 1, 1))),
                t instanceof B && (t = t.baseTexture),
                (this.baseTexture = t),
                (this._frame = i),
                (this.trim = r),
                (this.valid = !1),
                (this._uvs = oa),
                (this.uvMatrix = null),
                (this.orig = s || i),
                (this._rotate = Number(n || 0)),
                n === !0)
            )
            { this._rotate = 2; }
            else if (this._rotate % 2 !== 0)
            { throw new Error('attempt to use diamond-shaped UVs. If you are sure, set rotation manually'); }
            (this.defaultAnchor = o ? new Y(o.x, o.y) : new Y(0, 0)),
            (this.defaultBorders = a),
            (this._updateID = 0),
            (this.textureCacheIds = []),
            t.valid
                ? this.noFrame
                    ? t.valid && this.onBaseTextureUpdated(t)
                    : (this.frame = i)
                : t.once('loaded', this.onBaseTextureUpdated, this),
            this.noFrame && t.on('update', this.onBaseTextureUpdated, this);
        }
        update()
        {
            this.baseTexture.resource && this.baseTexture.resource.update();
        }
        onBaseTextureUpdated(t)
        {
            if (this.noFrame)
            {
                if (!this.baseTexture.valid) return;
                (this._frame.width = t.width), (this._frame.height = t.height), (this.valid = !0), this.updateUvs();
            }
            else this.frame = this._frame;
            this.emit('update', this);
        }
        destroy(t)
        {
            if (this.baseTexture)
            {
                if (t)
                {
                    const { resource: i } = this.baseTexture;

                    (i == null ? void 0 : i.url) && St[i.url] && B.removeFromCache(i.url), this.baseTexture.destroy();
                }
                this.baseTexture.off('loaded', this.onBaseTextureUpdated, this),
                this.baseTexture.off('update', this.onBaseTextureUpdated, this),
                (this.baseTexture = null);
            }
            (this._frame = null),
            (this._uvs = null),
            (this.trim = null),
            (this.orig = null),
            (this.valid = !1),
            B.removeFromCache(this),
            (this.textureCacheIds = null);
        }
        clone()
        {
            let r;
            const t = this._frame.clone();
            const i = this._frame === this.orig ? t : this.orig.clone();
            const s = new B(
                this.baseTexture,
                !this.noFrame && t,
                i,
                (r = this.trim) == null ? void 0 : r.clone(),
                this.rotate,
                this.defaultAnchor,
                this.defaultBorders,
            );

            return this.noFrame && (s._frame = t), s;
        }
        updateUvs()
        {
            this._uvs === oa && (this._uvs = new Ur()),
            this._uvs.set(this._frame, this.baseTexture, this.rotate),
            this._updateID++;
        }
        static from(t, i = {}, s = P.STRICT_TEXTURE_CACHE)
        {
            const r = typeof t === 'string';
            let n = null;

            if (r) n = t;
            else if (t instanceof V)
            {
                if (!t.cacheId)
                {
                    const a = (i == null ? void 0 : i.pixiIdPrefix) || 'pixiid';

                    (t.cacheId = `${a}-${Te()}`), V.addToCache(t, t.cacheId);
                }
                n = t.cacheId;
            }
            else
            {
                if (!t._pixiId)
                {
                    const a = (i == null ? void 0 : i.pixiIdPrefix) || 'pixiid';

                    t._pixiId = `${a}_${Te()}`;
                }
                n = t._pixiId;
            }
            let o = St[n];

            if (r && s && !o) throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);

            return (
                !o && !(t instanceof V)
                    ? (i.resolution || (i.resolution = fe(t)),
                    (o = new B(new V(t, i))),
                    (o.baseTexture.cacheId = n),
                    V.addToCache(o.baseTexture, n),
                    B.addToCache(o, n))
                    : !o && t instanceof V && ((o = new B(t)), B.addToCache(o, n)),
                o
            );
        }
        static fromURL(t, i)
        {
            const s = Object.assign({ autoLoad: !1 }, i == null ? void 0 : i.resourceOptions);
            const r = B.from(t, Object.assign({ resourceOptions: s }, i), !1);
            const n = r.baseTexture.resource;

            return r.baseTexture.valid ? Promise.resolve(r) : n.load().then(() => Promise.resolve(r));
        }
        static fromBuffer(t, i, s, r)
        {
            return new B(V.fromBuffer(t, i, s, r));
        }
        static fromLoader(t, i, s, r)
        {
            const n = new V(t, Object.assign({ scaleMode: V.defaultOptions.scaleMode, resolution: fe(i) }, r));
            const { resource: o } = n;

            o instanceof Or && (o.url = i);
            const a = new B(n);

            return (
                s || (s = i),
                V.addToCache(a.baseTexture, s),
                B.addToCache(a, s),
                s !== i && (V.addToCache(a.baseTexture, i), B.addToCache(a, i)),
                a.baseTexture.valid
                    ? Promise.resolve(a)
                    : new Promise((h) =>
                    {
                        a.baseTexture.once('loaded', () => h(a));
                    })
            );
        }
        static addToCache(t, i)
        {
            i
                && (t.textureCacheIds.includes(i) || t.textureCacheIds.push(i),
                St[i]
                    && St[i] !== t
                    && console.warn(`Texture added to the cache with an id [${i}] that already had an entry`),
                (St[i] = t));
        }
        static removeFromCache(t)
        {
            if (typeof t === 'string')
            {
                const i = St[t];

                if (i)
                {
                    const s = i.textureCacheIds.indexOf(t);

                    return s > -1 && i.textureCacheIds.splice(s, 1), delete St[t], i;
                }
            }
            else if (t != null && t.textureCacheIds)
            {
                for (let i = 0; i < t.textureCacheIds.length; ++i)
                { St[t.textureCacheIds[i]] === t && delete St[t.textureCacheIds[i]]; }

                return (t.textureCacheIds.length = 0), t;
            }

            return null;
        }
        get resolution()
        {
            return this.baseTexture.resolution;
        }
        get frame()
        {
            return this._frame;
        }
        set frame(t)
        {
            (this._frame = t), (this.noFrame = !1);
            const { x: i, y: s, width: r, height: n } = t;
            const o = i + r > this.baseTexture.width;
            const a = s + n > this.baseTexture.height;

            if (o || a)
            {
                const h = o && a ? 'and' : 'or';
                const l = `X: ${i} + ${r} = ${i + r} > ${this.baseTexture.width}`;
                const c = `Y: ${s} + ${n} = ${s + n} > ${this.baseTexture.height}`;

                throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${l} ${h} ${c}`);
            }
            (this.valid = r && n && this.baseTexture.valid),
            !this.trim && !this.rotate && (this.orig = t),
            this.valid && this.updateUvs();
        }
        get rotate()
        {
            return this._rotate;
        }
        set rotate(t)
        {
            (this._rotate = t), this.valid && this.updateUvs();
        }
        get width()
        {
            return this.orig.width;
        }
        get height()
        {
            return this.orig.height;
        }
        castToBaseTexture()
        {
            return this.baseTexture;
        }
        static get EMPTY()
        {
            return B._EMPTY || ((B._EMPTY = new B(new V())), ws(B._EMPTY), ws(B._EMPTY.baseTexture)), B._EMPTY;
        }
        static get WHITE()
        {
            if (!B._WHITE)
            {
                const t = P.ADAPTER.createCanvas(16, 16);
                const i = t.getContext('2d');

                (t.width = 16),
                (t.height = 16),
                (i.fillStyle = 'white'),
                i.fillRect(0, 0, 16, 16),
                (B._WHITE = new B(V.from(t))),
                ws(B._WHITE),
                ws(B._WHITE.baseTexture);
            }

            return B._WHITE;
        }
    }
    class ge extends B
    {
        constructor(t, i)
        {
            super(t, i), (this.valid = !0), (this.filterFrame = null), (this.filterPoolKey = null), this.updateUvs();
        }
        get framebuffer()
        {
            return this.baseTexture.framebuffer;
        }
        get multisample()
        {
            return this.framebuffer.multisample;
        }
        set multisample(t)
        {
            this.framebuffer.multisample = t;
        }
        resize(t, i, s = !0)
        {
            const r = this.baseTexture.resolution;
            const n = Math.round(t * r) / r;
            const o = Math.round(i * r) / r;

            (this.valid = n > 0 && o > 0),
            (this._frame.width = this.orig.width = n),
            (this._frame.height = this.orig.height = o),
            s && this.baseTexture.resize(n, o),
            this.updateUvs();
        }
        setResolution(t)
        {
            const { baseTexture: i } = this;

            i.resolution !== t && (i.setResolution(t), this.resize(i.width, i.height, !1));
        }
        static create(t)
        {
            return new ge(new Lr(t));
        }
    }
    class kr
    {
        constructor(t)
        {
            (this.texturePool = {}),
            (this.textureOptions = t || {}),
            (this.enableFullScreen = !1),
            (this._pixelsWidth = 0),
            (this._pixelsHeight = 0);
        }
        createTexture(t, i, s = nt.NONE)
        {
            const r = new Lr(Object.assign({ width: t, height: i, resolution: 1, multisample: s }, this.textureOptions));

            return new ge(r);
        }
        getOptimalTexture(t, i, s = 1, r = nt.NONE)
        {
            let n;

            (t = Math.ceil(t * s - 1e-6)),
            (i = Math.ceil(i * s - 1e-6)),
            !this.enableFullScreen || t !== this._pixelsWidth || i !== this._pixelsHeight
                ? ((t = _i(t)),
                (i = _i(i)),
                (n = (((t & 65535) << 16) | (i & 65535)) >>> 0),
                r > 1 && (n += r * 4294967296))
                : (n = r > 1 ? -r : -1),
            this.texturePool[n] || (this.texturePool[n] = []);
            let o = this.texturePool[n].pop();

            return o || (o = this.createTexture(t, i, r)), (o.filterPoolKey = n), o.setResolution(s), o;
        }
        getFilterTexture(t, i, s)
        {
            const r = this.getOptimalTexture(t.width, t.height, i || t.resolution, s || nt.NONE);

            return (r.filterFrame = t.filterFrame), r;
        }
        returnTexture(t)
        {
            const i = t.filterPoolKey;

            (t.filterFrame = null), this.texturePool[i].push(t);
        }
        returnFilterTexture(t)
        {
            this.returnTexture(t);
        }
        clear(t)
        {
            if (((t = t !== !1), t))
            {
                for (const i in this.texturePool)
                {
                    const s = this.texturePool[i];

                    if (s) for (let r = 0; r < s.length; r++) s[r].destroy(!0);
                }
            }
            this.texturePool = {};
        }
        setScreenSize(t)
        {
            if (!(t.width === this._pixelsWidth && t.height === this._pixelsHeight))
            {
                this.enableFullScreen = t.width > 0 && t.height > 0;
                for (const i in this.texturePool)
                {
                    if (!(Number(i) < 0)) continue;
                    const s = this.texturePool[i];

                    if (s) for (let r = 0; r < s.length; r++) s[r].destroy(!0);
                    this.texturePool[i] = [];
                }
                (this._pixelsWidth = t.width), (this._pixelsHeight = t.height);
            }
        }
    }
    kr.SCREEN_KEY = -1;
    class aa extends pe
    {
        constructor()
        {
            super(), this.addAttribute('aVertexPosition', new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]);
        }
    }
    class Gr extends pe
    {
        constructor()
        {
            super(),
            (this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])),
            (this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
            (this.vertexBuffer = new at(this.vertices)),
            (this.uvBuffer = new at(this.uvs)),
            this.addAttribute('aVertexPosition', this.vertexBuffer)
                .addAttribute('aTextureCoord', this.uvBuffer)
                .addIndex([0, 1, 2, 0, 2, 3]);
        }
        map(t, i)
        {
            let s = 0;
            let r = 0;

            return (
                (this.uvs[0] = s),
                (this.uvs[1] = r),
                (this.uvs[2] = s + i.width / t.width),
                (this.uvs[3] = r),
                (this.uvs[4] = s + i.width / t.width),
                (this.uvs[5] = r + i.height / t.height),
                (this.uvs[6] = s),
                (this.uvs[7] = r + i.height / t.height),
                (s = i.x),
                (r = i.y),
                (this.vertices[0] = s),
                (this.vertices[1] = r),
                (this.vertices[2] = s + i.width),
                (this.vertices[3] = r),
                (this.vertices[4] = s + i.width),
                (this.vertices[5] = r + i.height),
                (this.vertices[6] = s),
                (this.vertices[7] = r + i.height),
                this.invalidate(),
                this
            );
        }
        invalidate()
        {
            return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
        }
    }
    class ha
    {
        constructor()
        {
            (this.renderTexture = null),
            (this.target = null),
            (this.legacy = !1),
            (this.resolution = 1),
            (this.multisample = nt.NONE),
            (this.sourceFrame = new $()),
            (this.destinationFrame = new $()),
            (this.bindingSourceFrame = new $()),
            (this.bindingDestinationFrame = new $()),
            (this.filters = []),
            (this.transform = null);
        }
        clear()
        {
            (this.target = null), (this.filters = null), (this.renderTexture = null);
        }
    }
    const Ss = [new Y(), new Y(), new Y(), new Y()];
    const Hr = new tt();

    class Xr
    {
        constructor(t)
        {
            (this.renderer = t),
            (this.defaultFilterStack = [{}]),
            (this.texturePool = new kr()),
            (this.statePool = []),
            (this.quad = new aa()),
            (this.quadUv = new Gr()),
            (this.tempRect = new $()),
            (this.activeState = {}),
            (this.globalUniforms = new kt(
                {
                    outputFrame: new $(),
                    inputSize: new Float32Array(4),
                    inputPixel: new Float32Array(4),
                    inputClamp: new Float32Array(4),
                    resolution: 1,
                    filterArea: new Float32Array(4),
                    filterClamp: new Float32Array(4),
                },
                !0,
            )),
            (this.forceClear = !1),
            (this.useMaxPadding = !1);
        }
        init()
        {
            this.texturePool.setScreenSize(this.renderer.view);
        }
        push(t, i)
        {
            let p; let
                _;
            const s = this.renderer;
            const r = this.defaultFilterStack;
            const n = this.statePool.pop() || new ha();
            const o = this.renderer.renderTexture;
            let a = i[0].resolution;
            let h = i[0].multisample;
            let l = i[0].padding;
            let c = i[0].autoFit;
            let u = (p = i[0].legacy) != null ? p : !0;

            for (let g = 1; g < i.length; g++)
            {
                const v = i[g];

                (a = Math.min(a, v.resolution)),
                (h = Math.min(h, v.multisample)),
                (l = this.useMaxPadding ? Math.max(l, v.padding) : l + v.padding),
                (c = c && v.autoFit),
                (u = u || ((_ = v.legacy) != null ? _ : !0));
            }
            r.length === 1 && (this.defaultFilterStack[0].renderTexture = o.current),
            r.push(n),
            (n.resolution = a),
            (n.multisample = h),
            (n.legacy = u),
            (n.target = t),
            n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)),
            n.sourceFrame.pad(l);
            const d = this.tempRect.copyFrom(o.sourceFrame);

            s.projection.transform && this.transformAABB(Hr.copyFrom(s.projection.transform).invert(), d),
            c
                ? (n.sourceFrame.fit(d),
                (n.sourceFrame.width <= 0 || n.sourceFrame.height <= 0)
                          && ((n.sourceFrame.width = 0), (n.sourceFrame.height = 0)))
                : n.sourceFrame.intersects(d) || ((n.sourceFrame.width = 0), (n.sourceFrame.height = 0)),
            this.roundFrame(
                n.sourceFrame,
                o.current ? o.current.resolution : s.resolution,
                o.sourceFrame,
                o.destinationFrame,
                s.projection.transform,
            ),
            (n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, a, h)),
            (n.filters = i),
            (n.destinationFrame.width = n.renderTexture.width),
            (n.destinationFrame.height = n.renderTexture.height);
            const f = this.tempRect;

            (f.x = 0),
            (f.y = 0),
            (f.width = n.sourceFrame.width),
            (f.height = n.sourceFrame.height),
            (n.renderTexture.filterFrame = n.sourceFrame),
            n.bindingSourceFrame.copyFrom(o.sourceFrame),
            n.bindingDestinationFrame.copyFrom(o.destinationFrame),
            (n.transform = s.projection.transform),
            (s.projection.transform = null),
            o.bind(n.renderTexture, n.sourceFrame, f),
            s.framebuffer.clear(0, 0, 0, 0);
        }
        pop()
        {
            const t = this.defaultFilterStack;
            const i = t.pop();
            const s = i.filters;

            this.activeState = i;
            const r = this.globalUniforms.uniforms;

            (r.outputFrame = i.sourceFrame), (r.resolution = i.resolution);
            const n = r.inputSize;
            const o = r.inputPixel;
            const a = r.inputClamp;

            if (
                ((n[0] = i.destinationFrame.width),
                (n[1] = i.destinationFrame.height),
                (n[2] = 1 / n[0]),
                (n[3] = 1 / n[1]),
                (o[0] = Math.round(n[0] * i.resolution)),
                (o[1] = Math.round(n[1] * i.resolution)),
                (o[2] = 1 / o[0]),
                (o[3] = 1 / o[1]),
                (a[0] = 0.5 * o[2]),
                (a[1] = 0.5 * o[3]),
                (a[2] = i.sourceFrame.width * n[2] - 0.5 * o[2]),
                (a[3] = i.sourceFrame.height * n[3] - 0.5 * o[3]),
                i.legacy)
            )
            {
                const l = r.filterArea;

                (l[0] = i.destinationFrame.width),
                (l[1] = i.destinationFrame.height),
                (l[2] = i.sourceFrame.x),
                (l[3] = i.sourceFrame.y),
                (r.filterClamp = r.inputClamp);
            }
            this.globalUniforms.update();
            const h = t[t.length - 1];

            if ((this.renderer.framebuffer.blit(), s.length === 1))
            { s[0].apply(this, i.renderTexture, h.renderTexture, $t.BLEND, i), this.returnFilterTexture(i.renderTexture); }
            else
            {
                let l = i.renderTexture;
                let c = this.getOptimalFilterTexture(l.width, l.height, i.resolution);

                c.filterFrame = l.filterFrame;
                let u = 0;

                for (u = 0; u < s.length - 1; ++u)
                {
                    u === 1
                        && i.multisample > 1
                        && ((c = this.getOptimalFilterTexture(l.width, l.height, i.resolution)),
                        (c.filterFrame = l.filterFrame)),
                    s[u].apply(this, l, c, $t.CLEAR, i);
                    const d = l;

                    (l = c), (c = d);
                }
                s[u].apply(this, l, h.renderTexture, $t.BLEND, i),
                u > 1 && i.multisample > 1 && this.returnFilterTexture(i.renderTexture),
                this.returnFilterTexture(l),
                this.returnFilterTexture(c);
            }
            i.clear(), this.statePool.push(i);
        }
        bindAndClear(t, i = $t.CLEAR)
        {
            const { renderTexture: s, state: r } = this.renderer;

            if (
                (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture
                    ? (this.renderer.projection.transform = this.activeState.transform)
                    : (this.renderer.projection.transform = null),
                t != null && t.filterFrame)
            )
            {
                const o = this.tempRect;

                (o.x = 0),
                (o.y = 0),
                (o.width = t.filterFrame.width),
                (o.height = t.filterFrame.height),
                s.bind(t, t.filterFrame, o);
            }
            else
            {
                t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture
                    ? s.bind(t)
                    : this.renderer.renderTexture.bind(
                        t,
                        this.activeState.bindingSourceFrame,
                        this.activeState.bindingDestinationFrame,
                    );
            }
            const n = r.stateId & 1 || this.forceClear;

            (i === $t.CLEAR || (i === $t.BLIT && n)) && this.renderer.framebuffer.clear(0, 0, 0, 0);
        }
        applyFilter(t, i, s, r)
        {
            const n = this.renderer;

            n.state.set(t.state),
            this.bindAndClear(s, r),
            (t.uniforms.uSampler = i),
            (t.uniforms.filterGlobals = this.globalUniforms),
            n.shader.bind(t),
            (t.legacy = !!t.program.attributeData.aTextureCoord),
            t.legacy
                ? (this.quadUv.map(i._frame, i.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(zt.TRIANGLES))
                : (n.geometry.bind(this.quad), n.geometry.draw(zt.TRIANGLE_STRIP));
        }
        calculateSpriteMatrix(t, i)
        {
            const { sourceFrame: s, destinationFrame: r } = this.activeState;
            const { orig: n } = i._texture;
            const o = t.set(r.width, 0, 0, r.height, s.x, s.y);
            const a = i.worldTransform.copyTo(tt.TEMP_MATRIX);

            return a.invert(), o.prepend(a), o.scale(1 / n.width, 1 / n.height), o.translate(i.anchor.x, i.anchor.y), o;
        }
        destroy()
        {
            (this.renderer = null), this.texturePool.clear(!1);
        }
        getOptimalFilterTexture(t, i, s = 1, r = nt.NONE)
        {
            return this.texturePool.getOptimalTexture(t, i, s, r);
        }
        getFilterTexture(t, i, s)
        {
            if (typeof t === 'number')
            {
                const n = t;

                (t = i), (i = n);
            }
            t = t || this.activeState.renderTexture;
            const r = this.texturePool.getOptimalTexture(t.width, t.height, i || t.resolution, s || nt.NONE);

            return (r.filterFrame = t.filterFrame), r;
        }
        returnFilterTexture(t)
        {
            this.texturePool.returnTexture(t);
        }
        emptyPool()
        {
            this.texturePool.clear(!0);
        }
        resize()
        {
            this.texturePool.setScreenSize(this.renderer.view);
        }
        transformAABB(t, i)
        {
            const s = Ss[0];
            const r = Ss[1];
            const n = Ss[2];
            const o = Ss[3];

            s.set(i.left, i.top),
            r.set(i.left, i.bottom),
            n.set(i.right, i.top),
            o.set(i.right, i.bottom),
            t.apply(s, s),
            t.apply(r, r),
            t.apply(n, n),
            t.apply(o, o);
            const a = Math.min(s.x, r.x, n.x, o.x);
            const h = Math.min(s.y, r.y, n.y, o.y);
            const l = Math.max(s.x, r.x, n.x, o.x);
            const c = Math.max(s.y, r.y, n.y, o.y);

            (i.x = a), (i.y = h), (i.width = l - a), (i.height = c - h);
        }
        roundFrame(t, i, s, r, n)
        {
            if (!(t.width <= 0 || t.height <= 0 || s.width <= 0 || s.height <= 0))
            {
                if (n)
                {
                    const { a: o, b: a, c: h, d: l } = n;

                    if ((Math.abs(a) > 1e-4 || Math.abs(h) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(l) > 1e-4)) return;
                }
                (n = n ? Hr.copyFrom(n) : Hr.identity()),
                n
                    .translate(-s.x, -s.y)
                    .scale(r.width / s.width, r.height / s.height)
                    .translate(r.x, r.y),
                this.transformAABB(n, t),
                t.ceil(i),
                this.transformAABB(n.invert(), t);
            }
        }
    }
    (Xr.extension = { type: M.RendererSystem, name: 'filter' }), U.add(Xr);
    class la
    {
        constructor(t)
        {
            (this.framebuffer = t),
            (this.stencil = null),
            (this.dirtyId = -1),
            (this.dirtyFormat = -1),
            (this.dirtySize = -1),
            (this.multisample = nt.NONE),
            (this.msaaBuffer = null),
            (this.blitFramebuffer = null),
            (this.mipLevel = 0);
        }
    }
    const Rc = new $();

    class Vr
    {
        constructor(t)
        {
            (this.renderer = t),
            (this.managedFramebuffers = []),
            (this.unknownFramebuffer = new Es(10, 10)),
            (this.msaaSamples = null);
        }
        contextChange()
        {
            this.disposeAll(!0);
            const t = (this.gl = this.renderer.gl);

            if (
                ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
                (this.current = this.unknownFramebuffer),
                (this.viewport = new $()),
                (this.hasMRT = !0),
                (this.writeDepthTexture = !0),
                this.renderer.context.webGLVersion === 1)
            )
            {
                let i = this.renderer.context.extensions.drawBuffers;
                let s = this.renderer.context.extensions.depthTexture;

                P.PREFER_ENV === et.WEBGL_LEGACY && ((i = null), (s = null)),
                i ? (t.drawBuffers = (r) => i.drawBuffersWEBGL(r)) : ((this.hasMRT = !1), (t.drawBuffers = () => {})),
                s || (this.writeDepthTexture = !1);
            }
            else this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES);
        }
        bind(t, i, s = 0)
        {
            const { gl: r } = this;

            if (t)
            {
                const n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);

                this.current !== t && ((this.current = t), r.bindFramebuffer(r.FRAMEBUFFER, n.framebuffer)),
                n.mipLevel !== s && (t.dirtyId++, t.dirtyFormat++, (n.mipLevel = s)),
                n.dirtyId !== t.dirtyId
                        && ((n.dirtyId = t.dirtyId),
                        n.dirtyFormat !== t.dirtyFormat
                            ? ((n.dirtyFormat = t.dirtyFormat), (n.dirtySize = t.dirtySize), this.updateFramebuffer(t, s))
                            : n.dirtySize !== t.dirtySize && ((n.dirtySize = t.dirtySize), this.resizeFramebuffer(t)));
                for (let o = 0; o < t.colorTextures.length; o++)
                {
                    const a = t.colorTextures[o];

                    this.renderer.texture.unbind(a.parentTextureArray || a);
                }
                if ((t.depthTexture && this.renderer.texture.unbind(t.depthTexture), i))
                {
                    const o = i.width >> s;
                    const a = i.height >> s;
                    const h = o / i.width;

                    this.setViewport(i.x * h, i.y * h, o, a);
                }
                else
                {
                    const o = t.width >> s;
                    const a = t.height >> s;

                    this.setViewport(0, 0, o, a);
                }
            }
            else
            {
                this.current && ((this.current = null), r.bindFramebuffer(r.FRAMEBUFFER, null)),
                i
                    ? this.setViewport(i.x, i.y, i.width, i.height)
                    : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
            }
        }
        setViewport(t, i, s, r)
        {
            const n = this.viewport;

            (t = Math.round(t)),
            (i = Math.round(i)),
            (s = Math.round(s)),
            (r = Math.round(r)),
            (n.width !== s || n.height !== r || n.x !== t || n.y !== i)
                    && ((n.x = t), (n.y = i), (n.width = s), (n.height = r), this.gl.viewport(t, i, s, r));
        }
        get size()
        {
            return this.current
                ? { x: 0, y: 0, width: this.current.width, height: this.current.height }
                : { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height };
        }
        clear(t, i, s, r, n = Rt.COLOR | Rt.DEPTH)
        {
            const { gl: o } = this;

            o.clearColor(t, i, s, r), o.clear(n);
        }
        initFramebuffer(t)
        {
            const { gl: i } = this;
            const s = new la(i.createFramebuffer());

            return (
                (s.multisample = this.detectSamples(t.multisample)),
                (t.glFramebuffers[this.CONTEXT_UID] = s),
                this.managedFramebuffers.push(t),
                t.disposeRunner.add(this),
                s
            );
        }
        resizeFramebuffer(t)
        {
            const { gl: i } = this;
            const s = t.glFramebuffers[this.CONTEXT_UID];

            s.stencil
                && (i.bindRenderbuffer(i.RENDERBUFFER, s.stencil),
                s.msaaBuffer
                    ? i.renderbufferStorageMultisample(i.RENDERBUFFER, s.multisample, i.DEPTH24_STENCIL8, t.width, t.height)
                    : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t.width, t.height));
            const r = t.colorTextures;
            let n = r.length;

            i.drawBuffers || (n = Math.min(n, 1));
            for (let o = 0; o < n; o++)
            {
                const a = r[o];
                const h = a.parentTextureArray || a;

                this.renderer.texture.bind(h, 0),
                o === 0
                        && s.msaaBuffer
                        && (i.bindRenderbuffer(i.RENDERBUFFER, s.msaaBuffer),
                        i.renderbufferStorageMultisample(
                            i.RENDERBUFFER,
                            s.multisample,
                            h._glTextures[this.CONTEXT_UID].internalFormat,
                            t.width,
                            t.height,
                        ));
            }
            t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0);
        }
        updateFramebuffer(t, i)
        {
            const { gl: s } = this;
            const r = t.glFramebuffers[this.CONTEXT_UID];
            const n = t.colorTextures;
            let o = n.length;

            s.drawBuffers || (o = Math.min(o, 1)),
            r.multisample > 1 && this.canMultisampleFramebuffer(t)
                ? (r.msaaBuffer = r.msaaBuffer || s.createRenderbuffer())
                : r.msaaBuffer
                      && (s.deleteRenderbuffer(r.msaaBuffer),
                      (r.msaaBuffer = null),
                      r.blitFramebuffer && (r.blitFramebuffer.dispose(), (r.blitFramebuffer = null)));
            const a = [];

            for (let h = 0; h < o; h++)
            {
                const l = n[h];
                const c = l.parentTextureArray || l;

                this.renderer.texture.bind(c, 0),
                h === 0 && r.msaaBuffer
                    ? (s.bindRenderbuffer(s.RENDERBUFFER, r.msaaBuffer),
                    s.renderbufferStorageMultisample(
                        s.RENDERBUFFER,
                        r.multisample,
                        c._glTextures[this.CONTEXT_UID].internalFormat,
                        t.width,
                        t.height,
                    ),
                    s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, r.msaaBuffer))
                    : (s.framebufferTexture2D(
                        s.FRAMEBUFFER,
                        s.COLOR_ATTACHMENT0 + h,
                        l.target,
                        c._glTextures[this.CONTEXT_UID].texture,
                        i,
                    ),
                    a.push(s.COLOR_ATTACHMENT0 + h));
            }
            if ((a.length > 1 && s.drawBuffers(a), t.depthTexture && this.writeDepthTexture))
            {
                const l = t.depthTexture;

                this.renderer.texture.bind(l, 0),
                s.framebufferTexture2D(
                    s.FRAMEBUFFER,
                    s.DEPTH_ATTACHMENT,
                    s.TEXTURE_2D,
                    l._glTextures[this.CONTEXT_UID].texture,
                    i,
                );
            }
            (t.stencil || t.depth) && !(t.depthTexture && this.writeDepthTexture)
                ? ((r.stencil = r.stencil || s.createRenderbuffer()),
                s.bindRenderbuffer(s.RENDERBUFFER, r.stencil),
                r.msaaBuffer
                    ? s.renderbufferStorageMultisample(
                        s.RENDERBUFFER,
                        r.multisample,
                        s.DEPTH24_STENCIL8,
                        t.width,
                        t.height,
                    )
                    : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, t.width, t.height),
                s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, r.stencil))
                : r.stencil && (s.deleteRenderbuffer(r.stencil), (r.stencil = null));
        }
        canMultisampleFramebuffer(t)
        {
            return this.renderer.context.webGLVersion !== 1 && t.colorTextures.length <= 1 && !t.depthTexture;
        }
        detectSamples(t)
        {
            const { msaaSamples: i } = this;
            let s = nt.NONE;

            if (t <= 1 || i === null) return s;
            for (let r = 0; r < i.length; r++)
            {
                if (i[r] <= t)
                {
                    s = i[r];
                    break;
                }
            }

            return s === 1 && (s = nt.NONE), s;
        }
        blit(t, i, s)
        {
            const { current: r, renderer: n, gl: o, CONTEXT_UID: a } = this;

            if (n.context.webGLVersion !== 2 || !r) return;
            const h = r.glFramebuffers[a];

            if (!h) return;
            if (!t)
            {
                if (!h.msaaBuffer) return;
                const c = r.colorTextures[0];

                if (!c) return;
                h.blitFramebuffer
                    || ((h.blitFramebuffer = new Es(r.width, r.height)), h.blitFramebuffer.addColorTexture(0, c)),
                (t = h.blitFramebuffer),
                t.colorTextures[0] !== c && ((t.colorTextures[0] = c), t.dirtyId++, t.dirtyFormat++),
                (t.width !== r.width || t.height !== r.height)
                        && ((t.width = r.width), (t.height = r.height), t.dirtyId++, t.dirtySize++);
            }
            i || ((i = Rc), (i.width = r.width), (i.height = r.height)), s || (s = i);
            const l = i.width === s.width && i.height === s.height;

            this.bind(t),
            o.bindFramebuffer(o.READ_FRAMEBUFFER, h.framebuffer),
            o.blitFramebuffer(
                i.left,
                i.top,
                i.right,
                i.bottom,
                s.left,
                s.top,
                s.right,
                s.bottom,
                o.COLOR_BUFFER_BIT,
                l ? o.NEAREST : o.LINEAR,
            );
        }
        disposeFramebuffer(t, i)
        {
            const s = t.glFramebuffers[this.CONTEXT_UID];
            const r = this.gl;

            if (!s) return;
            delete t.glFramebuffers[this.CONTEXT_UID];
            const n = this.managedFramebuffers.indexOf(t);

            n >= 0 && this.managedFramebuffers.splice(n, 1),
            t.disposeRunner.remove(this),
            i
                    || (r.deleteFramebuffer(s.framebuffer),
                    s.msaaBuffer && r.deleteRenderbuffer(s.msaaBuffer),
                    s.stencil && r.deleteRenderbuffer(s.stencil)),
            s.blitFramebuffer && this.disposeFramebuffer(s.blitFramebuffer, i);
        }
        disposeAll(t)
        {
            const i = this.managedFramebuffers;

            this.managedFramebuffers = [];
            for (let s = 0; s < i.length; s++) this.disposeFramebuffer(i[s], t);
        }
        forceStencil()
        {
            const t = this.current;

            if (!t) return;
            const i = t.glFramebuffers[this.CONTEXT_UID];

            if (!i || i.stencil) return;
            t.stencil = !0;
            const s = t.width;
            const r = t.height;
            const n = this.gl;
            const o = n.createRenderbuffer();

            n.bindRenderbuffer(n.RENDERBUFFER, o),
            i.msaaBuffer
                ? n.renderbufferStorageMultisample(n.RENDERBUFFER, i.multisample, n.DEPTH24_STENCIL8, s, r)
                : n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, s, r),
            (i.stencil = o),
            n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o);
        }
        reset()
        {
            (this.current = this.unknownFramebuffer), (this.viewport = new $());
        }
        destroy()
        {
            this.renderer = null;
        }
    }
    (Vr.extension = { type: M.RendererSystem, name: 'framebuffer' }), U.add(Vr);
    const zr = { 5126: 4, 5123: 2, 5121: 1 };

    class Wr
    {
        constructor(t)
        {
            (this.renderer = t),
            (this._activeGeometry = null),
            (this._activeVao = null),
            (this.hasVao = !0),
            (this.hasInstance = !0),
            (this.canUseUInt32ElementIndex = !1),
            (this.managedGeometries = {});
        }
        contextChange()
        {
            this.disposeAll(!0);
            const t = (this.gl = this.renderer.gl);
            const i = this.renderer.context;

            if (((this.CONTEXT_UID = this.renderer.CONTEXT_UID), i.webGLVersion !== 2))
            {
                let s = this.renderer.context.extensions.vertexArrayObject;

                P.PREFER_ENV === et.WEBGL_LEGACY && (s = null),
                s
                    ? ((t.createVertexArray = () => s.createVertexArrayOES()),
                    (t.bindVertexArray = (r) => s.bindVertexArrayOES(r)),
                    (t.deleteVertexArray = (r) => s.deleteVertexArrayOES(r)))
                    : ((this.hasVao = !1),
                    (t.createVertexArray = () => null),
                    (t.bindVertexArray = () => null),
                    (t.deleteVertexArray = () => null));
            }
            if (i.webGLVersion !== 2)
            {
                const s = t.getExtension('ANGLE_instanced_arrays');

                s
                    ? ((t.vertexAttribDivisor = (r, n) => s.vertexAttribDivisorANGLE(r, n)),
                    (t.drawElementsInstanced = (r, n, o, a, h) => s.drawElementsInstancedANGLE(r, n, o, a, h)),
                    (t.drawArraysInstanced = (r, n, o, a) => s.drawArraysInstancedANGLE(r, n, o, a)))
                    : (this.hasInstance = !1);
            }
            this.canUseUInt32ElementIndex = i.webGLVersion === 2 || !!i.extensions.uint32ElementIndex;
        }
        bind(t, i)
        {
            i = i || this.renderer.shader.shader;
            const { gl: s } = this;
            let r = t.glVertexArrayObjects[this.CONTEXT_UID];
            let n = !1;

            r
                || ((this.managedGeometries[t.id] = t),
                t.disposeRunner.add(this),
                (t.glVertexArrayObjects[this.CONTEXT_UID] = r = {}),
                (n = !0));
            const o = r[i.program.id] || this.initGeometryVao(t, i, n);

            (this._activeGeometry = t),
            this._activeVao !== o
                    && ((this._activeVao = o), this.hasVao ? s.bindVertexArray(o) : this.activateVao(t, i.program)),
            this.updateBuffers();
        }
        reset()
        {
            this.unbind();
        }
        updateBuffers()
        {
            const t = this._activeGeometry;
            const i = this.renderer.buffer;

            for (let s = 0; s < t.buffers.length; s++)
            {
                const r = t.buffers[s];

                i.update(r);
            }
        }
        checkCompatibility(t, i)
        {
            const s = t.attributes;
            const r = i.attributeData;

            for (const n in r)
            { if (!s[n]) throw new Error(`shader and geometry incompatible, geometry missing the "${n}" attribute`); }
        }
        getSignature(t, i)
        {
            const s = t.attributes;
            const r = i.attributeData;
            const n = ['g', t.id];

            for (const o in s) r[o] && n.push(o, r[o].location);

            return n.join('-');
        }
        initGeometryVao(t, i, s = !0)
        {
            const r = this.gl;
            const n = this.CONTEXT_UID;
            const o = this.renderer.buffer;
            const a = i.program;

            a.glPrograms[n] || this.renderer.shader.generateProgram(i), this.checkCompatibility(t, a);
            const h = this.getSignature(t, a);
            const l = t.glVertexArrayObjects[this.CONTEXT_UID];
            let c = l[h];

            if (c) return (l[a.id] = c), c;
            const u = t.buffers;
            const d = t.attributes;
            const f = {};
            const p = {};

            for (const _ in u) (f[_] = 0), (p[_] = 0);
            for (const _ in d)
            {
                !d[_].size && a.attributeData[_]
                    ? (d[_].size = a.attributeData[_].size)
                    : d[_].size
                      || console.warn(
                          `PIXI Geometry attribute '${_}' size cannot be determined (likely the bound shader does not have the attribute)`,
                      ),
                (f[d[_].buffer] += d[_].size * zr[d[_].type]);
            }
            for (const _ in d)
            {
                const g = d[_];
                const v = g.size;

                g.stride === void 0 && (f[g.buffer] === v * zr[g.type] ? (g.stride = 0) : (g.stride = f[g.buffer])),
                g.start === void 0 && ((g.start = p[g.buffer]), (p[g.buffer] += v * zr[g.type]));
            }
            (c = r.createVertexArray()), r.bindVertexArray(c);
            for (let _ = 0; _ < u.length; _++)
            {
                const g = u[_];

                o.bind(g), s && g._glBuffers[n].refCount++;
            }

            return this.activateVao(t, a), (l[a.id] = c), (l[h] = c), r.bindVertexArray(null), o.unbind(jt.ARRAY_BUFFER), c;
        }
        disposeGeometry(t, i)
        {
            let a;

            if (!this.managedGeometries[t.id]) return;
            delete this.managedGeometries[t.id];
            const s = t.glVertexArrayObjects[this.CONTEXT_UID];
            const r = this.gl;
            const n = t.buffers;
            const o = (a = this.renderer) == null ? void 0 : a.buffer;

            if ((t.disposeRunner.remove(this), !!s))
            {
                if (o)
                {
                    for (let h = 0; h < n.length; h++)
                    {
                        const l = n[h]._glBuffers[this.CONTEXT_UID];

                        l && (l.refCount--, l.refCount === 0 && !i && o.dispose(n[h], i));
                    }
                }
                if (!i)
                {
                    for (const h in s)
                    {
                        if (h[0] === 'g')
                        {
                            const l = s[h];

                            this._activeVao === l && this.unbind(), r.deleteVertexArray(l);
                        }
                    }
                }
                delete t.glVertexArrayObjects[this.CONTEXT_UID];
            }
        }
        disposeAll(t)
        {
            const i = Object.keys(this.managedGeometries);

            for (let s = 0; s < i.length; s++) this.disposeGeometry(this.managedGeometries[i[s]], t);
        }
        activateVao(t, i)
        {
            const s = this.gl;
            const r = this.CONTEXT_UID;
            const n = this.renderer.buffer;
            const o = t.buffers;
            const a = t.attributes;

            t.indexBuffer && n.bind(t.indexBuffer);
            let h = null;

            for (const l in a)
            {
                const c = a[l];
                const u = o[c.buffer];
                const d = u._glBuffers[r];

                if (i.attributeData[l])
                {
                    h !== d && (n.bind(u), (h = d));
                    const f = i.attributeData[l].location;

                    if (
                        (s.enableVertexAttribArray(f),
                        s.vertexAttribPointer(f, c.size, c.type || s.FLOAT, c.normalized, c.stride, c.start),
                        c.instance)
                    )
                    {
                        if (this.hasInstance) s.vertexAttribDivisor(f, c.divisor);
                        else throw new Error('geometry error, GPU Instancing is not supported on this device');
                    }
                }
            }
        }
        draw(t, i, s, r)
        {
            const { gl: n } = this;
            const o = this._activeGeometry;

            if (o.indexBuffer)
            {
                const a = o.indexBuffer.data.BYTES_PER_ELEMENT;
                const h = a === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;

                a === 2 || (a === 4 && this.canUseUInt32ElementIndex)
                    ? o.instanced
                        ? n.drawElementsInstanced(t, i || o.indexBuffer.data.length, h, (s || 0) * a, r || 1)
                        : n.drawElements(t, i || o.indexBuffer.data.length, h, (s || 0) * a)
                    : console.warn('unsupported index buffer type: uint32');
            }
            else
            { o.instanced ? n.drawArraysInstanced(t, s, i || o.getSize(), r || 1) : n.drawArrays(t, s, i || o.getSize()); }

            return this;
        }
        unbind()
        {
            this.gl.bindVertexArray(null), (this._activeVao = null), (this._activeGeometry = null);
        }
        destroy()
        {
            this.renderer = null;
        }
    }
    (Wr.extension = { type: M.RendererSystem, name: 'geometry' }), U.add(Wr);
    const ca = new tt();

    class As
    {
        constructor(t, i)
        {
            (this._texture = t),
            (this.mapCoord = new tt()),
            (this.uClampFrame = new Float32Array(4)),
            (this.uClampOffset = new Float32Array(2)),
            (this._textureID = -1),
            (this._updateID = 0),
            (this.clampOffset = 0),
            (this.clampMargin = typeof i === 'undefined' ? 0.5 : i),
            (this.isSimple = !1);
        }
        get texture()
        {
            return this._texture;
        }
        set texture(t)
        {
            (this._texture = t), (this._textureID = -1);
        }
        multiplyUvs(t, i)
        {
            i === void 0 && (i = t);
            const s = this.mapCoord;

            for (let r = 0; r < t.length; r += 2)
            {
                const n = t[r];
                const o = t[r + 1];

                (i[r] = n * s.a + o * s.c + s.tx), (i[r + 1] = n * s.b + o * s.d + s.ty);
            }

            return i;
        }
        update(t)
        {
            const i = this._texture;

            if (!i || !i.valid || (!t && this._textureID === i._updateID)) return !1;
            (this._textureID = i._updateID), this._updateID++;
            const s = i._uvs;

            this.mapCoord.set(s.x1 - s.x0, s.y1 - s.y0, s.x3 - s.x0, s.y3 - s.y0, s.x0, s.y0);
            const r = i.orig;
            const n = i.trim;

            n
                && (ca.set(r.width / n.width, 0, 0, r.height / n.height, -n.x / n.width, -n.y / n.height),
                this.mapCoord.append(ca));
            const o = i.baseTexture;
            const a = this.uClampFrame;
            const h = this.clampMargin / o.resolution;
            const l = this.clampOffset;

            return (
                (a[0] = (i._frame.x + h + l) / o.width),
                (a[1] = (i._frame.y + h + l) / o.height),
                (a[2] = (i._frame.x + i._frame.width - h + l) / o.width),
                (a[3] = (i._frame.y + i._frame.height - h + l) / o.height),
                (this.uClampOffset[0] = l / o.realWidth),
                (this.uClampOffset[1] = l / o.realHeight),
                (this.isSimple = i._frame.width === o.width && i._frame.height === o.height && i.rotate === 0),
                !0
            );
        }
    }
    const Cc = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`;
    const Ic = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;

    class ua extends gt
    {
        constructor(t, i, s)
        {
            let r = null;

            typeof t !== 'string' && i === void 0 && s === void 0 && ((r = t), (t = void 0), (i = void 0), (s = void 0)),
            super(t || Ic, i || Cc, s),
            (this.maskSprite = r),
            (this.maskMatrix = new tt());
        }
        get maskSprite()
        {
            return this._maskSprite;
        }
        set maskSprite(t)
        {
            (this._maskSprite = t), this._maskSprite && (this._maskSprite.renderable = !1);
        }
        apply(t, i, s, r)
        {
            const n = this._maskSprite;
            const o = n._texture;

            !o.valid
                || (o.uvMatrix || (o.uvMatrix = new As(o, 0)),
                o.uvMatrix.update(),
                (this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1),
                (this.uniforms.mask = o),
                (this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.uvMatrix.mapCoord)),
                (this.uniforms.alpha = n.worldAlpha),
                (this.uniforms.maskClamp = o.uvMatrix.uClampFrame),
                t.applyFilter(this, i, s, r));
        }
    }
    class da
    {
        constructor(t = null)
        {
            (this.type = ct.NONE),
            (this.autoDetect = !0),
            (this.maskObject = t || null),
            (this.pooled = !1),
            (this.isMaskData = !0),
            (this.resolution = null),
            (this.multisample = gt.defaultMultisample),
            (this.enabled = !0),
            (this.colorMask = 15),
            (this._filters = null),
            (this._stencilCounter = 0),
            (this._scissorCounter = 0),
            (this._scissorRect = null),
            (this._scissorRectLocal = null),
            (this._colorMask = 15),
            (this._target = null);
        }
        get filter()
        {
            return this._filters ? this._filters[0] : null;
        }
        set filter(t)
        {
            t ? (this._filters ? (this._filters[0] = t) : (this._filters = [t])) : (this._filters = null);
        }
        reset()
        {
            this.pooled && ((this.maskObject = null), (this.type = ct.NONE), (this.autoDetect = !0)),
            (this._target = null),
            (this._scissorRectLocal = null);
        }
        copyCountersOrReset(t)
        {
            t
                ? ((this._stencilCounter = t._stencilCounter),
                (this._scissorCounter = t._scissorCounter),
                (this._scissorRect = t._scissorRect))
                : ((this._stencilCounter = 0), (this._scissorCounter = 0), (this._scissorRect = null));
        }
    }
    class $r
    {
        constructor(t)
        {
            (this.renderer = t),
            (this.enableScissor = !0),
            (this.alphaMaskPool = []),
            (this.maskDataPool = []),
            (this.maskStack = []),
            (this.alphaMaskIndex = 0);
        }
        setMaskStack(t)
        {
            (this.maskStack = t), this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t);
        }
        push(t, i)
        {
            let s = i;

            if (!s.isMaskData)
            {
                const n = this.maskDataPool.pop() || new da();

                (n.pooled = !0), (n.maskObject = i), (s = n);
            }
            const r = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;

            if (
                (s.copyCountersOrReset(r),
                (s._colorMask = r ? r._colorMask : 15),
                s.autoDetect && this.detect(s),
                (s._target = t),
                s.type !== ct.SPRITE && this.maskStack.push(s),
                s.enabled)
            )
            {
                switch (s.type)
                {
                    case ct.SCISSOR:
                        this.renderer.scissor.push(s);
                        break;
                    case ct.STENCIL:
                        this.renderer.stencil.push(s);
                        break;
                    case ct.SPRITE:
                        s.copyCountersOrReset(null), this.pushSpriteMask(s);
                        break;
                    case ct.COLOR:
                        this.pushColorMask(s);
                        break;
                    default:
                        break;
                }
            }
            s.type === ct.SPRITE && this.maskStack.push(s);
        }
        pop(t)
        {
            const i = this.maskStack.pop();

            if (!(!i || i._target !== t))
            {
                if (i.enabled)
                {
                    switch (i.type)
                    {
                        case ct.SCISSOR:
                            this.renderer.scissor.pop(i);
                            break;
                        case ct.STENCIL:
                            this.renderer.stencil.pop(i.maskObject);
                            break;
                        case ct.SPRITE:
                            this.popSpriteMask(i);
                            break;
                        case ct.COLOR:
                            this.popColorMask(i);
                            break;
                        default:
                            break;
                    }
                }
                if ((i.reset(), i.pooled && this.maskDataPool.push(i), this.maskStack.length !== 0))
                {
                    const s = this.maskStack[this.maskStack.length - 1];

                    s.type === ct.SPRITE && s._filters && (s._filters[0].maskSprite = s.maskObject);
                }
            }
        }
        detect(t)
        {
            const i = t.maskObject;

            i
                ? i.isSprite
                    ? (t.type = ct.SPRITE)
                    : this.enableScissor && this.renderer.scissor.testScissor(t)
                        ? (t.type = ct.SCISSOR)
                        : (t.type = ct.STENCIL)
                : (t.type = ct.COLOR);
        }
        pushSpriteMask(t)
        {
            let c; let
                u;
            const { maskObject: i } = t;
            const s = t._target;
            let r = t._filters;

            r
                || ((r = this.alphaMaskPool[this.alphaMaskIndex]),
                r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new ua()]));
            const n = this.renderer;
            const o = n.renderTexture;
            let a; let
                h;

            if (o.current)
            {
                const d = o.current;

                (a = t.resolution || d.resolution), (h = (c = t.multisample) != null ? c : d.multisample);
            }
            else (a = t.resolution || n.resolution), (h = (u = t.multisample) != null ? u : n.multisample);
            (r[0].resolution = a), (r[0].multisample = h), (r[0].maskSprite = i);
            const l = s.filterArea;

            (s.filterArea = i.getBounds(!0)), n.filter.push(s, r), (s.filterArea = l), t._filters || this.alphaMaskIndex++;
        }
        popSpriteMask(t)
        {
            this.renderer.filter.pop(),
            t._filters
                ? (t._filters[0].maskSprite = null)
                : (this.alphaMaskIndex--, (this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null));
        }
        pushColorMask(t)
        {
            const i = t._colorMask;
            const s = (t._colorMask = i & t.colorMask);

            s !== i && this.renderer.gl.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0);
        }
        popColorMask(t)
        {
            const i = t._colorMask;
            const s = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;

            s !== i && this.renderer.gl.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0);
        }
        destroy()
        {
            this.renderer = null;
        }
    }
    ($r.extension = { type: M.RendererSystem, name: 'mask' }), U.add($r);
    class fa
    {
        constructor(t)
        {
            (this.renderer = t), (this.maskStack = []), (this.glConst = 0);
        }
        getStackLength()
        {
            return this.maskStack.length;
        }
        setMaskStack(t)
        {
            const { gl: i } = this.renderer;
            const s = this.getStackLength();

            this.maskStack = t;
            const r = this.getStackLength();

            r !== s && (r === 0 ? i.disable(this.glConst) : (i.enable(this.glConst), this._useCurrent()));
        }
        _useCurrent() {}
        destroy()
        {
            (this.renderer = null), (this.maskStack = null);
        }
    }
    const pa = new tt();
    const ma = [];
    const Rs = class extends fa
    {
        constructor(e)
        {
            super(e), (this.glConst = P.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST);
        }
        getStackLength()
        {
            const e = this.maskStack[this.maskStack.length - 1];

            return e ? e._scissorCounter : 0;
        }
        calcScissorRect(e)
        {
            let o;

            if (e._scissorRectLocal) return;
            const t = e._scissorRect;
            const { maskObject: i } = e;
            const { renderer: s } = this;
            const r = s.renderTexture;
            const n = i.getBounds(!0, (o = ma.pop()) != null ? o : new $());

            this.roundFrameToPixels(
                n,
                r.current ? r.current.resolution : s.resolution,
                r.sourceFrame,
                r.destinationFrame,
                s.projection.transform,
            ),
            t && n.fit(t),
            (e._scissorRectLocal = n);
        }
        static isMatrixRotated(e)
        {
            if (!e) return !1;
            const { a: t, b: i, c: s, d: r } = e;

            return (Math.abs(i) > 1e-4 || Math.abs(s) > 1e-4) && (Math.abs(t) > 1e-4 || Math.abs(r) > 1e-4);
        }
        testScissor(e)
        {
            const { maskObject: t } = e;

            if (
                !t.isFastRect
                    || !t.isFastRect()
                    || Rs.isMatrixRotated(t.worldTransform)
                    || Rs.isMatrixRotated(this.renderer.projection.transform)
            )
            { return !1; }
            this.calcScissorRect(e);
            const i = e._scissorRectLocal;

            return i.width > 0 && i.height > 0;
        }
        roundFrameToPixels(e, t, i, s, r)
        {
            Rs.isMatrixRotated(r)
                    || ((r = r ? pa.copyFrom(r) : pa.identity()),
                    r
                        .translate(-i.x, -i.y)
                        .scale(s.width / i.width, s.height / i.height)
                        .translate(s.x, s.y),
                    this.renderer.filter.transformAABB(r, e),
                    e.fit(s),
                    (e.x = Math.round(e.x * t)),
                    (e.y = Math.round(e.y * t)),
                    (e.width = Math.round(e.width * t)),
                    (e.height = Math.round(e.height * t)));
        }
        push(e)
        {
            e._scissorRectLocal || this.calcScissorRect(e);
            const { gl: t } = this.renderer;

            e._scissorRect || t.enable(t.SCISSOR_TEST),
            e._scissorCounter++,
            (e._scissorRect = e._scissorRectLocal),
            this._useCurrent();
        }
        pop(e)
        {
            const { gl: t } = this.renderer;

            e && ma.push(e._scissorRectLocal),
            this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST);
        }
        _useCurrent()
        {
            const e = this.maskStack[this.maskStack.length - 1]._scissorRect;
            let t;

            this.renderer.renderTexture.current ? (t = e.y) : (t = this.renderer.height - e.height - e.y),
            this.renderer.gl.scissor(e.x, t, e.width, e.height);
        }
    };
    const jr = Rs;

    (jr.extension = { type: M.RendererSystem, name: 'scissor' }), U.add(jr);
    class Yr extends fa
    {
        constructor(t)
        {
            super(t), (this.glConst = P.ADAPTER.getWebGLRenderingContext().STENCIL_TEST);
        }
        getStackLength()
        {
            const t = this.maskStack[this.maskStack.length - 1];

            return t ? t._stencilCounter : 0;
        }
        push(t)
        {
            const i = t.maskObject;
            const { gl: s } = this.renderer;
            const r = t._stencilCounter;

            r === 0
                && (this.renderer.framebuffer.forceStencil(),
                s.clearStencil(0),
                s.clear(s.STENCIL_BUFFER_BIT),
                s.enable(s.STENCIL_TEST)),
            t._stencilCounter++;
            const n = t._colorMask;

            n !== 0 && ((t._colorMask = 0), s.colorMask(!1, !1, !1, !1)),
            s.stencilFunc(s.EQUAL, r, 4294967295),
            s.stencilOp(s.KEEP, s.KEEP, s.INCR),
            (i.renderable = !0),
            i.render(this.renderer),
            this.renderer.batch.flush(),
            (i.renderable = !1),
            n !== 0 && ((t._colorMask = n), s.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0)),
            this._useCurrent();
        }
        pop(t)
        {
            const i = this.renderer.gl;

            if (this.getStackLength() === 0) i.disable(i.STENCIL_TEST);
            else
            {
                const s = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
                const r = s ? s._colorMask : 15;

                r !== 0 && ((s._colorMask = 0), i.colorMask(!1, !1, !1, !1)),
                i.stencilOp(i.KEEP, i.KEEP, i.DECR),
                (t.renderable = !0),
                t.render(this.renderer),
                this.renderer.batch.flush(),
                (t.renderable = !1),
                r !== 0 && ((s._colorMask = r), i.colorMask((r & 1) !== 0, (r & 2) !== 0, (r & 4) !== 0, (r & 8) !== 0)),
                this._useCurrent();
            }
        }
        _useCurrent()
        {
            const t = this.renderer.gl;

            t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
        }
    }
    (Yr.extension = { type: M.RendererSystem, name: 'stencil' }), U.add(Yr);
    class qr
    {
        constructor(t)
        {
            (this.renderer = t),
            (this.plugins = {}),
            Object.defineProperties(this.plugins, {
                extract: {
                    enumerable: !1,
                    get()
                    {
                        return z('7.0.0', 'renderer.plugins.extract has moved to renderer.extract'), t.extract;
                    },
                },
                prepare: {
                    enumerable: !1,
                    get()
                    {
                        return z('7.0.0', 'renderer.plugins.prepare has moved to renderer.prepare'), t.prepare;
                    },
                },
                interaction: {
                    enumerable: !1,
                    get()
                    {
                        return (
                            z('7.0.0', 'renderer.plugins.interaction has been deprecated, use renderer.events'), t.events
                        );
                    },
                },
            });
        }
        init()
        {
            const t = this.rendererPlugins;

            for (const i in t) this.plugins[i] = new t[i](this.renderer);
        }
        destroy()
        {
            for (const t in this.plugins) this.plugins[t].destroy(), (this.plugins[t] = null);
        }
    }
    (qr.extension = { type: [M.RendererSystem, M.CanvasRendererSystem], name: '_plugin' }), U.add(qr);
    class Kr
    {
        constructor(t)
        {
            (this.renderer = t),
            (this.destinationFrame = null),
            (this.sourceFrame = null),
            (this.defaultFrame = null),
            (this.projectionMatrix = new tt()),
            (this.transform = null);
        }
        update(t, i, s, r)
        {
            (this.destinationFrame = t || this.destinationFrame || this.defaultFrame),
            (this.sourceFrame = i || this.sourceFrame || t),
            this.calculateProjection(this.destinationFrame, this.sourceFrame, s, r),
            this.transform && this.projectionMatrix.append(this.transform);
            const n = this.renderer;

            (n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix),
            n.globalUniforms.update(),
            n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals);
        }
        calculateProjection(t, i, s, r)
        {
            const n = this.projectionMatrix;
            const o = r ? -1 : 1;

            n.identity(),
            (n.a = (1 / i.width) * 2),
            (n.d = o * ((1 / i.height) * 2)),
            (n.tx = -1 - i.x * n.a),
            (n.ty = -o - i.y * n.d);
        }
        setTransform(t) {}
        destroy()
        {
            this.renderer = null;
        }
    }
    (Kr.extension = { type: M.RendererSystem, name: 'projection' }), U.add(Kr);
    const Pc = new vi();

    class Zr
    {
        constructor(t)
        {
            (this.renderer = t), (this._tempMatrix = new tt());
        }
        generateTexture(t, i)
        {
            const h = i || {};
            const { region: s } = h;
            const r = Wn(h, ['region']);
            const n = s || t.getLocalBounds(null, !0);

            n.width === 0 && (n.width = 1), n.height === 0 && (n.height = 1);
            const o = ge.create(Et({ width: n.width, height: n.height }, r));

            (this._tempMatrix.tx = -n.x), (this._tempMatrix.ty = -n.y);
            const a = t.transform;

            return (
                (t.transform = Pc),
                this.renderer.render(t, {
                    renderTexture: o,
                    transform: this._tempMatrix,
                    skipUpdateTransform: !!t.parent,
                    blit: !0,
                }),
                (t.transform = a),
                o
            );
        }
        destroy() {}
    }
    (Zr.extension = { type: [M.RendererSystem, M.CanvasRendererSystem], name: 'textureGenerator' }), U.add(Zr);
    const Ne = new $();
    const Si = new $();

    class Jr
    {
        constructor(t)
        {
            (this.renderer = t),
            (this.defaultMaskStack = []),
            (this.current = null),
            (this.sourceFrame = new $()),
            (this.destinationFrame = new $()),
            (this.viewportFrame = new $());
        }
        bind(t = null, i, s)
        {
            const r = this.renderer;

            this.current = t;
            let n; let o; let
                a;

            t
                ? ((n = t.baseTexture),
                (a = n.resolution),
                i || ((Ne.width = t.frame.width), (Ne.height = t.frame.height), (i = Ne)),
                s || ((Si.x = t.frame.x), (Si.y = t.frame.y), (Si.width = i.width), (Si.height = i.height), (s = Si)),
                (o = n.framebuffer))
                : ((a = r.resolution),
                i || ((Ne.width = r._view.screen.width), (Ne.height = r._view.screen.height), (i = Ne)),
                s || ((s = Ne), (s.width = i.width), (s.height = i.height)));
            const h = this.viewportFrame;

            (h.x = s.x * a),
            (h.y = s.y * a),
            (h.width = s.width * a),
            (h.height = s.height * a),
            t || (h.y = r.view.height - (h.y + h.height)),
            h.ceil(),
            this.renderer.framebuffer.bind(o, h),
            this.renderer.projection.update(s, i, a, !o),
            t ? this.renderer.mask.setMaskStack(n.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack),
            this.sourceFrame.copyFrom(i),
            this.destinationFrame.copyFrom(s);
        }
        clear(t, i)
        {
            const s = this.current ? this.current.baseTexture.clear : this.renderer.background.backgroundColor;
            const r = t ? j.shared.setValue(t) : s;
            const n = this.destinationFrame;
            const o = this.current ? this.current.baseTexture : this.renderer._view.screen;
            const a = n.width !== o.width || n.height !== o.height;

            if (a)
            {
                let { x: h, y: l, width: c, height: u } = this.viewportFrame;

                (h = Math.round(h)),
                (l = Math.round(l)),
                (c = Math.round(c)),
                (u = Math.round(u)),
                this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),
                this.renderer.gl.scissor(h, l, c, u);
            }
            this.renderer.framebuffer.clear(r.red, r.green, r.blue, r.alpha, i), a && this.renderer.scissor.pop();
        }
        resize()
        {
            this.bind(null);
        }
        reset()
        {
            this.bind(null);
        }
        destroy()
        {
            this.renderer = null;
        }
    }
    (Jr.extension = { type: M.RendererSystem, name: 'renderTexture' }), U.add(Jr);
    class Mc {}
    class _a
    {
        constructor(t, i)
        {
            (this.program = t),
            (this.uniformData = i),
            (this.uniformGroups = {}),
            (this.uniformDirtyGroups = {}),
            (this.uniformBufferBindings = {});
        }
        destroy()
        {
            (this.uniformData = null),
            (this.uniformGroups = null),
            (this.uniformDirtyGroups = null),
            (this.uniformBufferBindings = null),
            (this.program = null);
        }
    }
    function Bc(e, t)
    {
        const i = {};
        const s = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);

        for (let r = 0; r < s; r++)
        {
            const n = t.getActiveAttrib(e, r);

            if (n.name.startsWith('gl_')) continue;
            const o = ea(t, n.type);
            const a = { type: o, name: n.name, size: Qo(o), location: t.getAttribLocation(e, n.name) };

            i[n.name] = a;
        }

        return i;
    }
    function Dc(e, t)
    {
        const i = {};
        const s = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);

        for (let r = 0; r < s; r++)
        {
            const n = t.getActiveUniform(e, r);
            const o = n.name.replace(/\[.*?\]$/, '');
            const a = !!n.name.match(/\[.*?\]$/);
            const h = ea(t, n.type);

            i[o] = { name: o, index: r, type: h, size: n.size, isArray: a, value: qo(h, n.size) };
        }

        return i;
    }
    function ga(e, t)
    {
        let h;
        const i = Yo(e, e.VERTEX_SHADER, t.vertexSrc);
        const s = Yo(e, e.FRAGMENT_SHADER, t.fragmentSrc);
        const r = e.createProgram();

        e.attachShader(r, i), e.attachShader(r, s);
        const n = (h = t.extra) == null ? void 0 : h.transformFeedbackVaryings;

        if (
            (n
                && (typeof e.transformFeedbackVaryings !== 'function'
                    ? console.warn('TransformFeedback is not supported but TransformFeedbackVaryings are given.')
                    : e.transformFeedbackVaryings(
                        r,
                        n.names,
                        n.bufferMode === 'separate' ? e.SEPARATE_ATTRIBS : e.INTERLEAVED_ATTRIBS,
                    )),
            e.linkProgram(r),
            e.getProgramParameter(r, e.LINK_STATUS) || _c(e, r, i, s),
            (t.attributeData = Bc(r, e)),
            (t.uniformData = Dc(r, e)),
            !(/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m).test(t.vertexSrc))
        )
        {
            const l = Object.keys(t.attributeData);

            l.sort((c, u) => (c > u ? 1 : -1));
            for (let c = 0; c < l.length; c++) (t.attributeData[l[c]].location = c), e.bindAttribLocation(r, c, l[c]);
            e.linkProgram(r);
        }
        e.deleteShader(i), e.deleteShader(s);
        const o = {};

        for (const l in t.uniformData)
        {
            const c = t.uniformData[l];

            o[l] = { location: e.getUniformLocation(r, l), value: qo(c.type, c.size) };
        }

        return new _a(r, o);
    }
    function Fc(e, t, i, s, r)
    {
        i.buffer.update(r);
    }
    const Nc = {
        float: `
        data[offset] = v;
    `,
        vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
        vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
        vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
        mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
        mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
        mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `,
    };
    const ya = {
        float: 4,
        vec2: 8,
        vec3: 12,
        vec4: 16,
        int: 4,
        ivec2: 8,
        ivec3: 12,
        ivec4: 16,
        uint: 4,
        uvec2: 8,
        uvec3: 12,
        uvec4: 16,
        bool: 4,
        bvec2: 8,
        bvec3: 12,
        bvec4: 16,
        mat2: 16 * 2,
        mat3: 16 * 3,
        mat4: 16 * 4,
    };

    function va(e)
    {
        const t = e.map((n) => ({ data: n, offset: 0, dataLen: 0, dirty: 0 }));
        let i = 0;
        let s = 0;
        let r = 0;

        for (let n = 0; n < t.length; n++)
        {
            const o = t[n];

            if (
                ((i = ya[o.data.type]),
                o.data.size > 1 && (i = Math.max(i, 16) * o.data.size),
                (o.dataLen = i),
                s % i !== 0 && s < 16)
            )
            {
                const a = (s % i) % 16;

                (s += a), (r += a);
            }
            s + i > 16
                ? ((r = Math.ceil(r / 16) * 16), (o.offset = r), (r += i), (s = i))
                : ((o.offset = r), (s += i), (r += i));
        }

        return (r = Math.ceil(r / 16) * 16), { uboElements: t, size: r };
    }
    function xa(e, t)
    {
        const i = [];

        for (const s in e) t[s] && i.push(t[s]);

        return i.sort((s, r) => s.index - r.index), i;
    }
    function Ta(e, t)
    {
        if (!e.autoManage) return { size: 0, syncFunc: Fc };
        const i = xa(e.uniforms, t);
        const { uboElements: s, size: r } = va(i);
        const n = [
            `
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `,
        ];

        for (let o = 0; o < s.length; o++)
        {
            const a = s[o];
            const h = e.uniforms[a.data.name];
            const l = a.data.name;
            let c = !1;

            for (let u = 0; u < Fe.length; u++)
            {
                const d = Fe[u];

                if (d.codeUbo && d.test(a.data, h))
                {
                    n.push(`offset = ${a.offset / 4};`, Fe[u].codeUbo(a.data.name, h)), (c = !0);
                    break;
                }
            }
            if (!c)
            {
                if (a.data.size > 1)
                {
                    const u = Qo(a.data.type);
                    const d = Math.max(ya[a.data.type] / 16, 1);
                    const f = u / d;
                    const p = (4 - (f % 4)) % 4;

                    n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${a.offset / 4};

                t = 0;

                for(var i=0; i < ${a.data.size * d}; i++)
                {
                    for(var j = 0; j < ${f}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${p};
                }

                `);
                }
                else
                {
                    const u = Nc[a.data.type];

                    n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${a.offset / 4};
                ${u};
                `);
                }
            }
        }

        return (
            n.push(`
       renderer.buffer.update(buffer);
    `),
            {
                size: r,
                syncFunc: new Function(
                    'ud',
                    'uv',
                    'renderer',
                    'syncData',
                    'buffer',
                    n.join(`
`),
                ),
            }
        );
    }
    let Lc = 0;
    const Cs = { textureCount: 0, uboCount: 0 };

    class Qr
    {
        constructor(t)
        {
            (this.destroyed = !1),
            (this.renderer = t),
            this.systemCheck(),
            (this.gl = null),
            (this.shader = null),
            (this.program = null),
            (this.cache = {}),
            (this._uboCache = {}),
            (this.id = Lc++);
        }
        systemCheck()
        {
            if (!sa())
            {
                throw new Error(
                    'Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.',
                );
            }
        }
        contextChange(t)
        {
            (this.gl = t), this.reset();
        }
        bind(t, i)
        {
            t.disposeRunner.add(this), (t.uniforms.globals = this.renderer.globalUniforms);
            const s = t.program;
            const r = s.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);

            return (
                (this.shader = t),
                this.program !== s && ((this.program = s), this.gl.useProgram(r.program)),
                i || ((Cs.textureCount = 0), (Cs.uboCount = 0), this.syncUniformGroup(t.uniformGroup, Cs)),
                r
            );
        }
        setUniforms(t)
        {
            const i = this.shader.program;
            const s = i.glPrograms[this.renderer.CONTEXT_UID];

            i.syncUniforms(s.uniformData, t, this.renderer);
        }
        syncUniformGroup(t, i)
        {
            const s = this.getGlProgram();

            (!t.static || t.dirtyId !== s.uniformDirtyGroups[t.id])
                && ((s.uniformDirtyGroups[t.id] = t.dirtyId), this.syncUniforms(t, s, i));
        }
        syncUniforms(t, i, s)
        {
            (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(
                i.uniformData,
                t.uniforms,
                this.renderer,
                s,
            );
        }
        createSyncGroups(t)
        {
            const i = this.getSignature(t, this.shader.program.uniformData, 'u');

            return (
                this.cache[i] || (this.cache[i] = pc(t, this.shader.program.uniformData)),
                (t.syncUniforms[this.shader.program.id] = this.cache[i]),
                t.syncUniforms[this.shader.program.id]
            );
        }
        syncUniformBufferGroup(t, i)
        {
            const s = this.getGlProgram();

            if (!t.static || t.dirtyId !== 0 || !s.uniformGroups[t.id])
            {
                t.dirtyId = 0;
                const r = s.uniformGroups[t.id] || this.createSyncBufferGroup(t, s, i);

                t.buffer.update(), r(s.uniformData, t.uniforms, this.renderer, Cs, t.buffer);
            }
            this.renderer.buffer.bindBufferBase(t.buffer, s.uniformBufferBindings[i]);
        }
        createSyncBufferGroup(t, i, s)
        {
            const { gl: r } = this.renderer;

            this.renderer.buffer.bind(t.buffer);
            const n = this.gl.getUniformBlockIndex(i.program, s);

            (i.uniformBufferBindings[s] = this.shader.uniformBindCount),
            r.uniformBlockBinding(i.program, n, this.shader.uniformBindCount),
            this.shader.uniformBindCount++;
            const o = this.getSignature(t, this.shader.program.uniformData, 'ubo');
            let a = this._uboCache[o];

            if ((a || (a = this._uboCache[o] = Ta(t, this.shader.program.uniformData)), t.autoManage))
            {
                const h = new Float32Array(a.size / 4);

                t.buffer.update(h);
            }

            return (i.uniformGroups[t.id] = a.syncFunc), i.uniformGroups[t.id];
        }
        getSignature(t, i, s)
        {
            const r = t.uniforms;
            const n = [`${s}-`];

            for (const o in r) n.push(o), i[o] && n.push(i[o].type);

            return n.join('-');
        }
        getGlProgram()
        {
            return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null;
        }
        generateProgram(t)
        {
            const i = this.gl;
            const s = t.program;
            const r = ga(i, s);

            return (s.glPrograms[this.renderer.CONTEXT_UID] = r), r;
        }
        reset()
        {
            (this.program = null), (this.shader = null);
        }
        disposeShader(t)
        {
            this.shader === t && (this.shader = null);
        }
        destroy()
        {
            (this.renderer = null), (this.destroyed = !0);
        }
    }
    (Qr.extension = { type: M.RendererSystem, name: 'shader' }), U.add(Qr);
    class Ai
    {
        constructor(t)
        {
            this.renderer = t;
        }
        run(t)
        {
            const { renderer: i } = this;

            i.runners.init.emit(i.options),
            t.hello && console.log(`PixiJS 7.2.0 - ${i.rendererLogId} - https://pixijs.com`),
            i.resize(i.screen.width, i.screen.height);
        }
        destroy() {}
    }
    (Ai.defaultOptions = { hello: !1 }),
    (Ai.extension = { type: [M.RendererSystem, M.CanvasRendererSystem], name: 'startup' }),
    U.add(Ai);
    function Oc(e, t = [])
    {
        return (
            (t[G.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.ADD] = [e.ONE, e.ONE]),
            (t[G.MULTIPLY] = [e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.SCREEN] = [e.ONE, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.NONE] = [0, 0]),
            (t[G.NORMAL_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.ADD_NPM] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE]),
            (t[G.SCREEN_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.SRC_IN] = [e.DST_ALPHA, e.ZERO]),
            (t[G.SRC_OUT] = [e.ONE_MINUS_DST_ALPHA, e.ZERO]),
            (t[G.SRC_ATOP] = [e.DST_ALPHA, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.DST_OVER] = [e.ONE_MINUS_DST_ALPHA, e.ONE]),
            (t[G.DST_IN] = [e.ZERO, e.SRC_ALPHA]),
            (t[G.DST_OUT] = [e.ZERO, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.DST_ATOP] = [e.ONE_MINUS_DST_ALPHA, e.SRC_ALPHA]),
            (t[G.XOR] = [e.ONE_MINUS_DST_ALPHA, e.ONE_MINUS_SRC_ALPHA]),
            (t[G.SUBTRACT] = [e.ONE, e.ONE, e.ONE, e.ONE, e.FUNC_REVERSE_SUBTRACT, e.FUNC_ADD]),
            t
        );
    }
    const Uc = 0;
    const kc = 1;
    const Gc = 2;
    const Hc = 3;
    const Xc = 4;
    const Vc = 5;
    const tn = class
    {
        constructor()
        {
            (this.gl = null),
            (this.stateId = 0),
            (this.polygonOffset = 0),
            (this.blendMode = G.NONE),
            (this._blendEq = !1),
            (this.map = []),
            (this.map[Uc] = this.setBlend),
            (this.map[kc] = this.setOffset),
            (this.map[Gc] = this.setCullFace),
            (this.map[Hc] = this.setDepthTest),
            (this.map[Xc] = this.setFrontFace),
            (this.map[Vc] = this.setDepthMask),
            (this.checks = []),
            (this.defaultState = new ne()),
            (this.defaultState.blend = !0);
        }
        contextChange(e)
        {
            (this.gl = e), (this.blendModes = Oc(e)), this.set(this.defaultState), this.reset();
        }
        set(e)
        {
            if (((e = e || this.defaultState), this.stateId !== e.data))
            {
                let t = this.stateId ^ e.data;
                let i = 0;

                for (; t;) t & 1 && this.map[i].call(this, !!(e.data & (1 << i))), (t = t >> 1), i++;
                this.stateId = e.data;
            }
            for (let t = 0; t < this.checks.length; t++) this.checks[t](this, e);
        }
        forceState(e)
        {
            e = e || this.defaultState;
            for (let t = 0; t < this.map.length; t++) this.map[t].call(this, !!(e.data & (1 << t)));
            for (let t = 0; t < this.checks.length; t++) this.checks[t](this, e);
            this.stateId = e.data;
        }
        setBlend(e)
        {
            this.updateCheck(tn.checkBlendMode, e), this.gl[e ? 'enable' : 'disable'](this.gl.BLEND);
        }
        setOffset(e)
        {
            this.updateCheck(tn.checkPolygonOffset, e), this.gl[e ? 'enable' : 'disable'](this.gl.POLYGON_OFFSET_FILL);
        }
        setDepthTest(e)
        {
            this.gl[e ? 'enable' : 'disable'](this.gl.DEPTH_TEST);
        }
        setDepthMask(e)
        {
            this.gl.depthMask(e);
        }
        setCullFace(e)
        {
            this.gl[e ? 'enable' : 'disable'](this.gl.CULL_FACE);
        }
        setFrontFace(e)
        {
            this.gl.frontFace(this.gl[e ? 'CW' : 'CCW']);
        }
        setBlendMode(e)
        {
            if (e === this.blendMode) return;
            this.blendMode = e;
            const t = this.blendModes[e];
            const i = this.gl;

            t.length === 2 ? i.blendFunc(t[0], t[1]) : i.blendFuncSeparate(t[0], t[1], t[2], t[3]),
            t.length === 6
                ? ((this._blendEq = !0), i.blendEquationSeparate(t[4], t[5]))
                : this._blendEq && ((this._blendEq = !1), i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD));
        }
        setPolygonOffset(e, t)
        {
            this.gl.polygonOffset(e, t);
        }
        reset()
        {
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
            this.forceState(this.defaultState),
            (this._blendEq = !0),
            (this.blendMode = -1),
            this.setBlendMode(0);
        }
        updateCheck(e, t)
        {
            const i = this.checks.indexOf(e);

            t && i === -1 ? this.checks.push(e) : !t && i !== -1 && this.checks.splice(i, 1);
        }
        static checkBlendMode(e, t)
        {
            e.setBlendMode(t.blendMode);
        }
        static checkPolygonOffset(e, t)
        {
            e.setPolygonOffset(1, t.polygonOffset);
        }
        destroy()
        {
            this.gl = null;
        }
    };
    const en = tn;

    (en.extension = { type: M.RendererSystem, name: 'state' }), U.add(en);
    class ba extends Ve
    {
        constructor()
        {
            super(...arguments), (this.runners = {}), (this._systemsHash = {});
        }
        setup(t)
        {
            let r;

            this.addRunners(...t.runners);
            const i = ((r = t.priority) != null ? r : []).filter((n) => t.systems[n]);
            const s = [...i, ...Object.keys(t.systems).filter((n) => !i.includes(n))];

            for (const n of s) this.addSystem(t.systems[n], n);
        }
        addRunners(...t)
        {
            t.forEach((i) =>
            {
                this.runners[i] = new Bt(i);
            });
        }
        addSystem(t, i)
        {
            const s = new t(this);

            if (this[i]) throw new Error(`Whoops! The name "${i}" is already in use`);
            (this[i] = s), (this._systemsHash[i] = s);
            for (const r in this.runners) this.runners[r].add(s);

            return this;
        }
        emitWithCustomOptions(t, i)
        {
            const s = Object.keys(this._systemsHash);

            t.items.forEach((r) =>
            {
                const n = s.find((o) => this._systemsHash[o] === r);

                r[t.name](i[n]);
            });
        }
        destroy()
        {
            Object.values(this.runners).forEach((t) =>
            {
                t.destroy();
            }),
            (this._systemsHash = {});
        }
    }
    const Is = class
    {
        constructor(e)
        {
            (this.renderer = e),
            (this.count = 0),
            (this.checkCount = 0),
            (this.maxIdle = Is.defaultMaxIdle),
            (this.checkCountMax = Is.defaultCheckCountMax),
            (this.mode = Is.defaultMode);
        }
        postrender()
        {
            !this.renderer.objectRenderer.renderingToScreen
                || (this.count++,
                this.mode !== ts.MANUAL
                    && (this.checkCount++, this.checkCount > this.checkCountMax && ((this.checkCount = 0), this.run())));
        }
        run()
        {
            const e = this.renderer.texture;
            const t = e.managedTextures;
            let i = !1;

            for (let s = 0; s < t.length; s++)
            {
                const r = t[s];

                !r.framebuffer
                    && this.count - r.touched > this.maxIdle
                    && (e.destroyTexture(r, !0), (t[s] = null), (i = !0));
            }
            if (i)
            {
                let s = 0;

                for (let r = 0; r < t.length; r++) t[r] !== null && (t[s++] = t[r]);
                t.length = s;
            }
        }
        unload(e)
        {
            const t = this.renderer.texture;
            const i = e._texture;

            i && !i.framebuffer && t.destroyTexture(i);
            for (let s = e.children.length - 1; s >= 0; s--) this.unload(e.children[s]);
        }
        destroy()
        {
            this.renderer = null;
        }
    };
    const Ht = Is;

    (Ht.defaultMode = ts.AUTO),
    (Ht.defaultMaxIdle = 3600),
    (Ht.defaultCheckCountMax = 600),
    (Ht.extension = { type: M.RendererSystem, name: 'textureGC' }),
    U.add(Ht);
    class Ps
    {
        constructor(t)
        {
            (this.texture = t),
            (this.width = -1),
            (this.height = -1),
            (this.dirtyId = -1),
            (this.dirtyStyleId = -1),
            (this.mipmap = !1),
            (this.wrapMode = 33071),
            (this.type = k.UNSIGNED_BYTE),
            (this.internalFormat = C.RGBA),
            (this.samplerType = 0);
        }
    }
    function zc(e)
    {
        let t;

        return (
            'WebGL2RenderingContext' in globalThis && e instanceof globalThis.WebGL2RenderingContext
                ? (t = {
                    [k.UNSIGNED_BYTE]: {
                        [C.RGBA]: e.RGBA8,
                        [C.RGB]: e.RGB8,
                        [C.RG]: e.RG8,
                        [C.RED]: e.R8,
                        [C.RGBA_INTEGER]: e.RGBA8UI,
                        [C.RGB_INTEGER]: e.RGB8UI,
                        [C.RG_INTEGER]: e.RG8UI,
                        [C.RED_INTEGER]: e.R8UI,
                        [C.ALPHA]: e.ALPHA,
                        [C.LUMINANCE]: e.LUMINANCE,
                        [C.LUMINANCE_ALPHA]: e.LUMINANCE_ALPHA,
                    },
                    [k.BYTE]: {
                        [C.RGBA]: e.RGBA8_SNORM,
                        [C.RGB]: e.RGB8_SNORM,
                        [C.RG]: e.RG8_SNORM,
                        [C.RED]: e.R8_SNORM,
                        [C.RGBA_INTEGER]: e.RGBA8I,
                        [C.RGB_INTEGER]: e.RGB8I,
                        [C.RG_INTEGER]: e.RG8I,
                        [C.RED_INTEGER]: e.R8I,
                    },
                    [k.UNSIGNED_SHORT]: {
                        [C.RGBA_INTEGER]: e.RGBA16UI,
                        [C.RGB_INTEGER]: e.RGB16UI,
                        [C.RG_INTEGER]: e.RG16UI,
                        [C.RED_INTEGER]: e.R16UI,
                        [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT16,
                    },
                    [k.SHORT]: {
                        [C.RGBA_INTEGER]: e.RGBA16I,
                        [C.RGB_INTEGER]: e.RGB16I,
                        [C.RG_INTEGER]: e.RG16I,
                        [C.RED_INTEGER]: e.R16I,
                    },
                    [k.UNSIGNED_INT]: {
                        [C.RGBA_INTEGER]: e.RGBA32UI,
                        [C.RGB_INTEGER]: e.RGB32UI,
                        [C.RG_INTEGER]: e.RG32UI,
                        [C.RED_INTEGER]: e.R32UI,
                        [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT24,
                    },
                    [k.INT]: {
                        [C.RGBA_INTEGER]: e.RGBA32I,
                        [C.RGB_INTEGER]: e.RGB32I,
                        [C.RG_INTEGER]: e.RG32I,
                        [C.RED_INTEGER]: e.R32I,
                    },
                    [k.FLOAT]: {
                        [C.RGBA]: e.RGBA32F,
                        [C.RGB]: e.RGB32F,
                        [C.RG]: e.RG32F,
                        [C.RED]: e.R32F,
                        [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT32F,
                    },
                    [k.HALF_FLOAT]: { [C.RGBA]: e.RGBA16F, [C.RGB]: e.RGB16F, [C.RG]: e.RG16F, [C.RED]: e.R16F },
                    [k.UNSIGNED_SHORT_5_6_5]: { [C.RGB]: e.RGB565 },
                    [k.UNSIGNED_SHORT_4_4_4_4]: { [C.RGBA]: e.RGBA4 },
                    [k.UNSIGNED_SHORT_5_5_5_1]: { [C.RGBA]: e.RGB5_A1 },
                    [k.UNSIGNED_INT_2_10_10_10_REV]: { [C.RGBA]: e.RGB10_A2, [C.RGBA_INTEGER]: e.RGB10_A2UI },
                    [k.UNSIGNED_INT_10F_11F_11F_REV]: { [C.RGB]: e.R11F_G11F_B10F },
                    [k.UNSIGNED_INT_5_9_9_9_REV]: { [C.RGB]: e.RGB9_E5 },
                    [k.UNSIGNED_INT_24_8]: { [C.DEPTH_STENCIL]: e.DEPTH24_STENCIL8 },
                    [k.FLOAT_32_UNSIGNED_INT_24_8_REV]: { [C.DEPTH_STENCIL]: e.DEPTH32F_STENCIL8 },
                })
                : (t = {
                    [k.UNSIGNED_BYTE]: {
                        [C.RGBA]: e.RGBA,
                        [C.RGB]: e.RGB,
                        [C.ALPHA]: e.ALPHA,
                        [C.LUMINANCE]: e.LUMINANCE,
                        [C.LUMINANCE_ALPHA]: e.LUMINANCE_ALPHA,
                    },
                    [k.UNSIGNED_SHORT_5_6_5]: { [C.RGB]: e.RGB },
                    [k.UNSIGNED_SHORT_4_4_4_4]: { [C.RGBA]: e.RGBA },
                    [k.UNSIGNED_SHORT_5_5_5_1]: { [C.RGBA]: e.RGBA },
                }),
            t
        );
    }
    class sn
    {
        constructor(t)
        {
            (this.renderer = t),
            (this.boundTextures = []),
            (this.currentLocation = -1),
            (this.managedTextures = []),
            (this._unknownBoundTextures = !1),
            (this.unknownTexture = new V()),
            (this.hasIntegerTextures = !1);
        }
        contextChange()
        {
            const t = (this.gl = this.renderer.gl);

            (this.CONTEXT_UID = this.renderer.CONTEXT_UID),
            (this.webGLVersion = this.renderer.context.webGLVersion),
            (this.internalFormats = zc(t));
            const i = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);

            this.boundTextures.length = i;
            for (let r = 0; r < i; r++) this.boundTextures[r] = null;
            this.emptyTextures = {};
            const s = new Ps(t.createTexture());

            t.bindTexture(t.TEXTURE_2D, s.texture),
            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)),
            (this.emptyTextures[t.TEXTURE_2D] = s),
            (this.emptyTextures[t.TEXTURE_CUBE_MAP] = new Ps(t.createTexture())),
            t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
            for (let r = 0; r < 6; r++)
            { t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null); }
            t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR),
            t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
            for (let r = 0; r < this.boundTextures.length; r++) this.bind(null, r);
        }
        bind(t, i = 0)
        {
            const { gl: s } = this;

            if (
                ((t = t == null ? void 0 : t.castToBaseTexture()), (t == null ? void 0 : t.valid) && !t.parentTextureArray)
            )
            {
                t.touched = this.renderer.textureGC.count;
                const r = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);

                this.boundTextures[i] !== t
                    && (this.currentLocation !== i && ((this.currentLocation = i), s.activeTexture(s.TEXTURE0 + i)),
                    s.bindTexture(t.target, r.texture)),
                r.dirtyId !== t.dirtyId
                    ? (this.currentLocation !== i && ((this.currentLocation = i), s.activeTexture(s.TEXTURE0 + i)),
                    this.updateTexture(t))
                    : r.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t),
                (this.boundTextures[i] = t);
            }
            else
            {
                this.currentLocation !== i && ((this.currentLocation = i), s.activeTexture(s.TEXTURE0 + i)),
                s.bindTexture(s.TEXTURE_2D, this.emptyTextures[s.TEXTURE_2D].texture),
                (this.boundTextures[i] = null);
            }
        }
        reset()
        {
            (this._unknownBoundTextures = !0), (this.hasIntegerTextures = !1), (this.currentLocation = -1);
            for (let t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture;
        }
        unbind(t)
        {
            const { gl: i, boundTextures: s } = this;

            if (this._unknownBoundTextures)
            {
                this._unknownBoundTextures = !1;
                for (let r = 0; r < s.length; r++) s[r] === this.unknownTexture && this.bind(null, r);
            }
            for (let r = 0; r < s.length; r++)
            {
                s[r] === t
                    && (this.currentLocation !== r && (i.activeTexture(i.TEXTURE0 + r), (this.currentLocation = r)),
                    i.bindTexture(t.target, this.emptyTextures[t.target].texture),
                    (s[r] = null));
            }
        }
        ensureSamplerType(t)
        {
            const { boundTextures: i, hasIntegerTextures: s, CONTEXT_UID: r } = this;

            if (s)
            {
                for (let n = t - 1; n >= 0; --n)
                {
                    const o = i[n];

                    o && o._glTextures[r].samplerType !== Qi.FLOAT && this.renderer.texture.unbind(o);
                }
            }
        }
        initTexture(t)
        {
            const i = new Ps(this.gl.createTexture());

            return (
                (i.dirtyId = -1),
                (t._glTextures[this.CONTEXT_UID] = i),
                this.managedTextures.push(t),
                t.on('dispose', this.destroyTexture, this),
                i
            );
        }
        initTextureType(t, i)
        {
            let s; let
                r;

            (i.internalFormat
                = (r = (s = this.internalFormats[t.type]) == null ? void 0 : s[t.format]) != null ? r : t.format),
            this.webGLVersion === 2 && t.type === k.HALF_FLOAT ? (i.type = this.gl.HALF_FLOAT) : (i.type = t.type);
        }
        updateTexture(t)
        {
            let r;
            const i = t._glTextures[this.CONTEXT_UID];

            if (!i) return;
            const s = this.renderer;

            if ((this.initTextureType(t, i), (r = t.resource) != null && r.upload(s, t, i)))
            { i.samplerType !== Qi.FLOAT && (this.hasIntegerTextures = !0); }
            else
            {
                const n = t.realWidth;
                const o = t.realHeight;
                const a = s.gl;

                (i.width !== n || i.height !== o || i.dirtyId < 0)
                    && ((i.width = n),
                    (i.height = o),
                    a.texImage2D(t.target, 0, i.internalFormat, n, o, 0, t.format, i.type, null));
            }
            t.dirtyStyleId !== i.dirtyStyleId && this.updateTextureStyle(t), (i.dirtyId = t.dirtyId);
        }
        destroyTexture(t, i)
        {
            const { gl: s } = this;

            if (
                ((t = t.castToBaseTexture()),
                t._glTextures[this.CONTEXT_UID]
                    && (this.unbind(t),
                    s.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),
                    t.off('dispose', this.destroyTexture, this),
                    delete t._glTextures[this.CONTEXT_UID],
                    !i))
            )
            {
                const r = this.managedTextures.indexOf(t);

                r !== -1 && Ce(this.managedTextures, r, 1);
            }
        }
        updateTextureStyle(t)
        {
            let s;
            const i = t._glTextures[this.CONTEXT_UID];

            !i
                || ((t.mipmap === Wt.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo
                    ? (i.mipmap = !1)
                    : (i.mipmap = t.mipmap >= 1),
                this.webGLVersion !== 2 && !t.isPowerOfTwo ? (i.wrapMode = ie.CLAMP) : (i.wrapMode = t.wrapMode),
                ((s = t.resource) != null && s.style(this.renderer, t, i)) || this.setStyle(t, i),
                (i.dirtyStyleId = t.dirtyStyleId));
        }
        setStyle(t, i)
        {
            const s = this.gl;

            if (
                (i.mipmap && t.mipmap !== Wt.ON_MANUAL && s.generateMipmap(t.target),
                s.texParameteri(t.target, s.TEXTURE_WRAP_S, i.wrapMode),
                s.texParameteri(t.target, s.TEXTURE_WRAP_T, i.wrapMode),
                i.mipmap)
            )
            {
                s.texParameteri(
                    t.target,
                    s.TEXTURE_MIN_FILTER,
                    t.scaleMode === ee.LINEAR ? s.LINEAR_MIPMAP_LINEAR : s.NEAREST_MIPMAP_NEAREST,
                );
                const r = this.renderer.context.extensions.anisotropicFiltering;

                if (r && t.anisotropicLevel > 0 && t.scaleMode === ee.LINEAR)
                {
                    const n = Math.min(t.anisotropicLevel, s.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));

                    s.texParameterf(t.target, r.TEXTURE_MAX_ANISOTROPY_EXT, n);
                }
            }
            else s.texParameteri(t.target, s.TEXTURE_MIN_FILTER, t.scaleMode === ee.LINEAR ? s.LINEAR : s.NEAREST);
            s.texParameteri(t.target, s.TEXTURE_MAG_FILTER, t.scaleMode === ee.LINEAR ? s.LINEAR : s.NEAREST);
        }
        destroy()
        {
            this.renderer = null;
        }
    }
    (sn.extension = { type: M.RendererSystem, name: 'texture' }), U.add(sn);
    class rn
    {
        constructor(t)
        {
            this.renderer = t;
        }
        contextChange()
        {
            (this.gl = this.renderer.gl), (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
        }
        bind(t)
        {
            const { gl: i, CONTEXT_UID: s } = this;
            const r = t._glTransformFeedbacks[s] || this.createGLTransformFeedback(t);

            i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, r);
        }
        unbind()
        {
            const { gl: t } = this;

            t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null);
        }
        beginTransformFeedback(t, i)
        {
            const { gl: s, renderer: r } = this;

            i && r.shader.bind(i), s.beginTransformFeedback(t);
        }
        endTransformFeedback()
        {
            const { gl: t } = this;

            t.endTransformFeedback();
        }
        createGLTransformFeedback(t)
        {
            const { gl: i, renderer: s, CONTEXT_UID: r } = this;
            const n = i.createTransformFeedback();

            (t._glTransformFeedbacks[r] = n), i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, n);
            for (let o = 0; o < t.buffers.length; o++)
            {
                const a = t.buffers[o];

                !a
                    || (s.buffer.update(a),
                    a._glBuffers[r].refCount++,
                    i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER, o, a._glBuffers[r].buffer || null));
            }

            return i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, null), t.disposeRunner.add(this), n;
        }
        disposeTransformFeedback(t, i)
        {
            const s = t._glTransformFeedbacks[this.CONTEXT_UID];
            const r = this.gl;

            t.disposeRunner.remove(this);
            const n = this.renderer.buffer;

            if (n)
            {
                for (let o = 0; o < t.buffers.length; o++)
                {
                    const a = t.buffers[o];

                    if (!a) continue;
                    const h = a._glBuffers[this.CONTEXT_UID];

                    h && (h.refCount--, h.refCount === 0 && !i && n.dispose(a, i));
                }
            }
            !s || (i || r.deleteTransformFeedback(s), delete t._glTransformFeedbacks[this.CONTEXT_UID]);
        }
        destroy()
        {
            this.renderer = null;
        }
    }
    (rn.extension = { type: M.RendererSystem, name: 'transformFeedback' }), U.add(rn);
    class Ri
    {
        constructor(t)
        {
            this.renderer = t;
        }
        init(t)
        {
            (this.screen = new $(0, 0, t.width, t.height)),
            (this.element = t.view || P.ADAPTER.createCanvas()),
            (this.resolution = t.resolution || P.RESOLUTION),
            (this.autoDensity = !!t.autoDensity);
        }
        resizeView(t, i)
        {
            (this.element.width = Math.round(t * this.resolution)), (this.element.height = Math.round(i * this.resolution));
            const s = this.element.width / this.resolution;
            const r = this.element.height / this.resolution;

            (this.screen.width = s),
            (this.screen.height = r),
            this.autoDensity && ((this.element.style.width = `${s}px`), (this.element.style.height = `${r}px`)),
            this.renderer.emit('resize', s, r),
            this.renderer.runners.resize.emit(this.screen.width, this.screen.height);
        }
        destroy(t)
        {
            let i;

            t && ((i = this.element.parentNode) == null || i.removeChild(this.element)),
            (this.renderer = null),
            (this.element = null),
            (this.screen = null);
        }
    }
    (Ri.defaultOptions = { width: 800, height: 600, resolution: P.RESOLUTION, autoDensity: !1 }),
    (Ri.extension = { type: [M.RendererSystem, M.CanvasRendererSystem], name: '_view' }),
    U.add(Ri),
    (P.PREFER_ENV = et.WEBGL2),
    (P.STRICT_TEXTURE_CACHE = !1),
    (P.RENDER_OPTIONS = Et(Et(Et(Et({}, wi.defaultOptions), Ei.defaultOptions), Ri.defaultOptions), Ai.defaultOptions)),
    Object.defineProperties(P, {
        WRAP_MODE: {
            get()
            {
                return V.defaultOptions.wrapMode;
            },
            set(e)
            {
                z('7.1.0', 'settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode'),
                (V.defaultOptions.wrapMode = e);
            },
        },
        SCALE_MODE: {
            get()
            {
                return V.defaultOptions.scaleMode;
            },
            set(e)
            {
                z('7.1.0', 'settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode'),
                (V.defaultOptions.scaleMode = e);
            },
        },
        MIPMAP_TEXTURES: {
            get()
            {
                return V.defaultOptions.mipmap;
            },
            set(e)
            {
                z('7.1.0', 'settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap'),
                (V.defaultOptions.mipmap = e);
            },
        },
        ANISOTROPIC_LEVEL: {
            get()
            {
                return V.defaultOptions.anisotropicLevel;
            },
            set(e)
            {
                z('7.1.0', 'settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel'),
                (V.defaultOptions.anisotropicLevel = e);
            },
        },
        FILTER_RESOLUTION: {
            get()
            {
                return (
                    z('7.1.0', 'settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution'),
                    gt.defaultResolution
                );
            },
            set(e)
            {
                gt.defaultResolution = e;
            },
        },
        FILTER_MULTISAMPLE: {
            get()
            {
                return (
                    z('7.1.0', 'settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample'),
                    gt.defaultMultisample
                );
            },
            set(e)
            {
                gt.defaultMultisample = e;
            },
        },
        SPRITE_MAX_TEXTURES: {
            get()
            {
                return Gt.defaultMaxTextures;
            },
            set(e)
            {
                z('7.1.0', 'settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures'),
                (Gt.defaultMaxTextures = e);
            },
        },
        SPRITE_BATCH_SIZE: {
            get()
            {
                return Gt.defaultBatchSize;
            },
            set(e)
            {
                z('7.1.0', 'settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize'),
                (Gt.defaultBatchSize = e);
            },
        },
        CAN_UPLOAD_SAME_BUFFER: {
            get()
            {
                return Gt.canUploadSameBuffer;
            },
            set(e)
            {
                z('7.1.0', 'settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer'),
                (Gt.canUploadSameBuffer = e);
            },
        },
        GC_MODE: {
            get()
            {
                return Ht.defaultMode;
            },
            set(e)
            {
                z('7.1.0', 'settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode'), (Ht.defaultMode = e);
            },
        },
        GC_MAX_IDLE: {
            get()
            {
                return Ht.defaultMaxIdle;
            },
            set(e)
            {
                z('7.1.0', 'settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle'),
                (Ht.defaultMaxIdle = e);
            },
        },
        GC_MAX_CHECK_COUNT: {
            get()
            {
                return Ht.defaultCheckCountMax;
            },
            set(e)
            {
                z('7.1.0', 'settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax'),
                (Ht.defaultCheckCountMax = e);
            },
        },
        PRECISION_VERTEX: {
            get()
            {
                return Ut.defaultVertexPrecision;
            },
            set(e)
            {
                z('7.1.0', 'settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision'),
                (Ut.defaultVertexPrecision = e);
            },
        },
        PRECISION_FRAGMENT: {
            get()
            {
                return Ut.defaultFragmentPrecision;
            },
            set(e)
            {
                z('7.1.0', 'settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision'),
                (Ut.defaultFragmentPrecision = e);
            },
        },
    });
    var ye = ((e) => (
        (e[(e.INTERACTION = 50)] = 'INTERACTION'),
        (e[(e.HIGH = 25)] = 'HIGH'),
        (e[(e.NORMAL = 0)] = 'NORMAL'),
        (e[(e.LOW = -25)] = 'LOW'),
        (e[(e.UTILITY = -50)] = 'UTILITY'),
        e
    ))(ye || {});

    class nn
    {
        constructor(t, i = null, s = 0, r = !1)
        {
            (this.next = null),
            (this.previous = null),
            (this._destroyed = !1),
            (this.fn = t),
            (this.context = i),
            (this.priority = s),
            (this.once = r);
        }
        match(t, i = null)
        {
            return this.fn === t && this.context === i;
        }
        emit(t)
        {
            this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
            const i = this.next;

            return this.once && this.destroy(!0), this._destroyed && (this.next = null), i;
        }
        connect(t)
        {
            (this.previous = t), t.next && (t.next.previous = this), (this.next = t.next), (t.next = this);
        }
        destroy(t = !1)
        {
            (this._destroyed = !0),
            (this.fn = null),
            (this.context = null),
            this.previous && (this.previous.next = this.next),
            this.next && (this.next.previous = this.previous);
            const i = this.next;

            return (this.next = t ? null : i), (this.previous = null), i;
        }
    }
    const Dt = class
    {
        constructor()
        {
            (this.autoStart = !1),
            (this.deltaTime = 1),
            (this.lastTime = -1),
            (this.speed = 1),
            (this.started = !1),
            (this._requestId = null),
            (this._maxElapsedMS = 100),
            (this._minElapsedMS = 0),
            (this._protected = !1),
            (this._lastFrame = -1),
            (this._head = new nn(null, null, 1 / 0)),
            (this.deltaMS = 1 / Dt.targetFPMS),
            (this.elapsedMS = 1 / Dt.targetFPMS),
            (this._tick = (e) =>
            {
                (this._requestId = null),
                this.started
                            && (this.update(e),
                            this.started
                                && this._requestId === null
                                && this._head.next
                                && (this._requestId = requestAnimationFrame(this._tick)));
            });
        }
        _requestIfNeeded()
        {
            this._requestId === null
                && this._head.next
                && ((this.lastTime = performance.now()),
                (this._lastFrame = this.lastTime),
                (this._requestId = requestAnimationFrame(this._tick)));
        }
        _cancelIfNeeded()
        {
            this._requestId !== null && (cancelAnimationFrame(this._requestId), (this._requestId = null));
        }
        _startIfPossible()
        {
            this.started ? this._requestIfNeeded() : this.autoStart && this.start();
        }
        add(e, t, i = ye.NORMAL)
        {
            return this._addListener(new nn(e, t, i));
        }
        addOnce(e, t, i = ye.NORMAL)
        {
            return this._addListener(new nn(e, t, i, !0));
        }
        _addListener(e)
        {
            let t = this._head.next;
            let i = this._head;

            if (!t) e.connect(i);
            else
            {
                for (; t;)
                {
                    if (e.priority > t.priority)
                    {
                        e.connect(i);
                        break;
                    }
                    (i = t), (t = t.next);
                }
                e.previous || e.connect(i);
            }

            return this._startIfPossible(), this;
        }
        remove(e, t)
        {
            let i = this._head.next;

            for (; i;) i.match(e, t) ? (i = i.destroy()) : (i = i.next);

            return this._head.next || this._cancelIfNeeded(), this;
        }
        get count()
        {
            if (!this._head) return 0;
            let e = 0;
            let t = this._head;

            for (; (t = t.next);) e++;

            return e;
        }
        start()
        {
            this.started || ((this.started = !0), this._requestIfNeeded());
        }
        stop()
        {
            this.started && ((this.started = !1), this._cancelIfNeeded());
        }
        destroy()
        {
            if (!this._protected)
            {
                this.stop();
                let e = this._head.next;

                for (; e;) e = e.destroy(!0);
                this._head.destroy(), (this._head = null);
            }
        }
        update(e = performance.now())
        {
            let t;

            if (e > this.lastTime)
            {
                if (
                    ((t = this.elapsedMS = e - this.lastTime),
                    t > this._maxElapsedMS && (t = this._maxElapsedMS),
                    (t *= this.speed),
                    this._minElapsedMS)
                )
                {
                    const r = (e - this._lastFrame) | 0;

                    if (r < this._minElapsedMS) return;
                    this._lastFrame = e - (r % this._minElapsedMS);
                }
                (this.deltaMS = t), (this.deltaTime = this.deltaMS * Dt.targetFPMS);
                const i = this._head;
                let s = i.next;

                for (; s;) s = s.emit(this.deltaTime);
                i.next || this._cancelIfNeeded();
            }
            else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
            this.lastTime = e;
        }
        get FPS()
        {
            return 1e3 / this.elapsedMS;
        }
        get minFPS()
        {
            return 1e3 / this._maxElapsedMS;
        }
        set minFPS(e)
        {
            const t = Math.min(this.maxFPS, e);
            const i = Math.min(Math.max(0, t) / 1e3, Dt.targetFPMS);

            this._maxElapsedMS = 1 / i;
        }
        get maxFPS()
        {
            return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
        }
        set maxFPS(e)
        {
            if (e === 0) this._minElapsedMS = 0;
            else
            {
                const t = Math.max(this.minFPS, e);

                this._minElapsedMS = 1 / (t / 1e3);
            }
        }
        static get shared()
        {
            if (!Dt._shared)
            {
                const e = (Dt._shared = new Dt());

                (e.autoStart = !0), (e._protected = !0);
            }

            return Dt._shared;
        }
        static get system()
        {
            if (!Dt._system)
            {
                const e = (Dt._system = new Dt());

                (e.autoStart = !0), (e._protected = !0);
            }

            return Dt._system;
        }
    };
    const lt = Dt;

    (lt.targetFPMS = 0.06),
    Object.defineProperties(P, {
        TARGET_FPMS: {
            get()
            {
                return lt.targetFPMS;
            },
            set(e)
            {
                z('7.1.0', 'settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS'), (lt.targetFPMS = e);
            },
        },
    });
    class on
    {
        static init(t)
        {
            (t = Object.assign({ autoStart: !0, sharedTicker: !1 }, t)),
            Object.defineProperty(this, 'ticker', {
                set(i)
                {
                    this._ticker && this._ticker.remove(this.render, this),
                    (this._ticker = i),
                    i && i.add(this.render, this, ye.LOW);
                },
                get()
                {
                    return this._ticker;
                },
            }),
            (this.stop = () =>
            {
                this._ticker.stop();
            }),
            (this.start = () =>
            {
                this._ticker.start();
            }),
            (this._ticker = null),
            (this.ticker = t.sharedTicker ? lt.shared : new lt()),
            t.autoStart && this.start();
        }
        static destroy()
        {
            if (this._ticker)
            {
                const t = this._ticker;

                (this.ticker = null), t.destroy();
            }
        }
    }
    (on.extension = M.Application), U.add(on);
    const Ea = [];

    U.handleByList(M.Renderer, Ea);
    function wa(e)
    {
        for (const t of Ea) if (t.test(e)) return new t(e);
        throw new Error('Unable to auto-detect a suitable renderer.');
    }
    const Wc = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`;
    const $c = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
    const Sa = Wc;
    const an = $c;

    class hn
    {
        constructor(t)
        {
            this.renderer = t;
        }
        contextChange(t)
        {
            let i;

            if (this.renderer.context.webGLVersion === 1)
            {
                const s = t.getParameter(t.FRAMEBUFFER_BINDING);

                t.bindFramebuffer(t.FRAMEBUFFER, null), (i = t.getParameter(t.SAMPLES)), t.bindFramebuffer(t.FRAMEBUFFER, s);
            }
            else
            {
                const s = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);

                t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
                (i = t.getParameter(t.SAMPLES)),
                t.bindFramebuffer(t.DRAW_FRAMEBUFFER, s);
            }
            i >= nt.HIGH
                ? (this.multisample = nt.HIGH)
                : i >= nt.MEDIUM
                    ? (this.multisample = nt.MEDIUM)
                    : i >= nt.LOW
                        ? (this.multisample = nt.LOW)
                        : (this.multisample = nt.NONE);
        }
        destroy() {}
    }
    (hn.extension = { type: M.RendererSystem, name: '_multisample' }), U.add(hn);
    class jc
    {
        constructor(t)
        {
            (this.buffer = t || null), (this.updateID = -1), (this.byteLength = -1), (this.refCount = 0);
        }
    }
    class ln
    {
        constructor(t)
        {
            (this.renderer = t), (this.managedBuffers = {}), (this.boundBufferBases = {});
        }
        destroy()
        {
            this.renderer = null;
        }
        contextChange()
        {
            this.disposeAll(!0), (this.gl = this.renderer.gl), (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
        }
        bind(t)
        {
            const { gl: i, CONTEXT_UID: s } = this;
            const r = t._glBuffers[s] || this.createGLBuffer(t);

            i.bindBuffer(t.type, r.buffer);
        }
        unbind(t)
        {
            const { gl: i } = this;

            i.bindBuffer(t, null);
        }
        bindBufferBase(t, i)
        {
            const { gl: s, CONTEXT_UID: r } = this;

            if (this.boundBufferBases[i] !== t)
            {
                const n = t._glBuffers[r] || this.createGLBuffer(t);

                (this.boundBufferBases[i] = t), s.bindBufferBase(s.UNIFORM_BUFFER, i, n.buffer);
            }
        }
        bindBufferRange(t, i, s)
        {
            const { gl: r, CONTEXT_UID: n } = this;

            s = s || 0;
            const o = t._glBuffers[n] || this.createGLBuffer(t);

            r.bindBufferRange(r.UNIFORM_BUFFER, i || 0, o.buffer, s * 256, 256);
        }
        update(t)
        {
            const { gl: i, CONTEXT_UID: s } = this;
            const r = t._glBuffers[s] || this.createGLBuffer(t);

            if (t._updateID !== r.updateID)
            {
                if (((r.updateID = t._updateID), i.bindBuffer(t.type, r.buffer), r.byteLength >= t.data.byteLength))
                { i.bufferSubData(t.type, 0, t.data); }
                else
                {
                    const n = t.static ? i.STATIC_DRAW : i.DYNAMIC_DRAW;

                    (r.byteLength = t.data.byteLength), i.bufferData(t.type, t.data, n);
                }
            }
        }
        dispose(t, i)
        {
            if (!this.managedBuffers[t.id]) return;
            delete this.managedBuffers[t.id];
            const s = t._glBuffers[this.CONTEXT_UID];
            const r = this.gl;

            t.disposeRunner.remove(this), s && (i || r.deleteBuffer(s.buffer), delete t._glBuffers[this.CONTEXT_UID]);
        }
        disposeAll(t)
        {
            const i = Object.keys(this.managedBuffers);

            for (let s = 0; s < i.length; s++) this.dispose(this.managedBuffers[i[s]], t);
        }
        createGLBuffer(t)
        {
            const { CONTEXT_UID: i, gl: s } = this;

            return (
                (t._glBuffers[i] = new jc(s.createBuffer())),
                (this.managedBuffers[t.id] = t),
                t.disposeRunner.add(this),
                t._glBuffers[i]
            );
        }
    }
    (ln.extension = { type: M.RendererSystem, name: 'buffer' }), U.add(ln);
    class cn
    {
        constructor(t)
        {
            this.renderer = t;
        }
        render(t, i)
        {
            const s = this.renderer;
            let r; let n; let o; let
                a;

            if (
                (i && ((r = i.renderTexture), (n = i.clear), (o = i.transform), (a = i.skipUpdateTransform)),
                (this.renderingToScreen = !r),
                s.runners.prerender.emit(),
                s.emit('prerender'),
                (s.projection.transform = o),
                !s.context.isLost)
            )
            {
                if ((r || (this.lastObjectRendered = t), !a))
                {
                    const h = t.enableTempParent();

                    t.updateTransform(), t.disableTempParent(h);
                }
                s.renderTexture.bind(r),
                s.batch.currentRenderer.start(),
                (n != null ? n : s.background.clearBeforeRender) && s.renderTexture.clear(),
                t.render(s),
                s.batch.currentRenderer.flush(),
                r && (i.blit && s.framebuffer.blit(), r.baseTexture.update()),
                s.runners.postrender.emit(),
                (s.projection.transform = null),
                s.emit('postrender');
            }
        }
        destroy()
        {
            (this.renderer = null), (this.lastObjectRendered = null);
        }
    }
    (cn.extension = { type: M.RendererSystem, name: 'objectRenderer' }), U.add(cn);
    const un = class extends ba
    {
        constructor(e)
        {
            super(),
            (this.type = pt.WEBGL),
            (e = Object.assign({}, P.RENDER_OPTIONS, e)),
            (this.gl = null),
            (this.CONTEXT_UID = 0),
            (this.globalUniforms = new kt({ projectionMatrix: new tt() }, !0));
            const t = {
                runners: [
                    'init',
                    'destroy',
                    'contextChange',
                    'resolutionChange',
                    'reset',
                    'update',
                    'postrender',
                    'prerender',
                    'resize',
                ],
                systems: un.__systems,
                priority: [
                    '_view',
                    'textureGenerator',
                    'background',
                    '_plugin',
                    'startup',
                    'context',
                    'state',
                    'texture',
                    'buffer',
                    'geometry',
                    'framebuffer',
                    'transformFeedback',
                    'mask',
                    'scissor',
                    'stencil',
                    'projection',
                    'textureGC',
                    'filter',
                    'renderTexture',
                    'batch',
                    'objectRenderer',
                    '_multisample',
                ],
            };

            this.setup(t),
            'useContextAlpha' in e
                    && (z(
                        '7.0.0',
                        'options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead',
                    ),
                    (e.premultipliedAlpha = e.useContextAlpha && e.useContextAlpha !== 'notMultiplied'),
                    (e.backgroundAlpha = e.useContextAlpha === !1 ? 1 : e.backgroundAlpha)),
            (this._plugin.rendererPlugins = un.__plugins),
            (this.options = e),
            this.startup.run(this.options);
        }
        static test(e)
        {
            return e != null && e.forceCanvas ? !1 : vo();
        }
        render(e, t)
        {
            this.objectRenderer.render(e, t);
        }
        resize(e, t)
        {
            this._view.resizeView(e, t);
        }
        reset()
        {
            return this.runners.reset.emit(), this;
        }
        clear()
        {
            this.renderTexture.bind(), this.renderTexture.clear();
        }
        destroy(e = !1)
        {
            this.runners.destroy.items.reverse(),
            this.emitWithCustomOptions(this.runners.destroy, { _view: e }),
            super.destroy();
        }
        get plugins()
        {
            return this._plugin.plugins;
        }
        get multisample()
        {
            return this._multisample.multisample;
        }
        get width()
        {
            return this._view.element.width;
        }
        get height()
        {
            return this._view.element.height;
        }
        get resolution()
        {
            return this._view.resolution;
        }
        set resolution(e)
        {
            (this._view.resolution = e), this.runners.resolutionChange.emit(e);
        }
        get autoDensity()
        {
            return this._view.autoDensity;
        }
        get view()
        {
            return this._view.element;
        }
        get screen()
        {
            return this._view.screen;
        }
        get lastObjectRendered()
        {
            return this.objectRenderer.lastObjectRendered;
        }
        get renderingToScreen()
        {
            return this.objectRenderer.renderingToScreen;
        }
        get rendererLogId()
        {
            return `WebGL ${this.context.webGLVersion}`;
        }
        get clearBeforeRender()
        {
            return (
                z(
                    '7.0.0',
                    'renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead.',
                ),
                this.background.clearBeforeRender
            );
        }
        get useContextAlpha()
        {
            return (
                z(
                    '7.0.0',
                    'renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead.',
                ),
                this.context.useContextAlpha
            );
        }
        get preserveDrawingBuffer()
        {
            return (
                z(
                    '7.0.0',
                    'renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context',
                ),
                this.context.preserveDrawingBuffer
            );
        }
        get backgroundColor()
        {
            return (
                z('7.0.0', 'renderer.backgroundColor has been deprecated, use renderer.background.color instead.'),
                this.background.color
            );
        }
        set backgroundColor(e)
        {
            z('7.0.0', 'renderer.backgroundColor has been deprecated, use renderer.background.color instead.'),
            (this.background.color = e);
        }
        get backgroundAlpha()
        {
            return (
                z('7.0.0', 'renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead.'),
                this.background.alpha
            );
        }
        set backgroundAlpha(e)
        {
            z('7.0.0', 'renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead.'),
            (this.background.alpha = e);
        }
        get powerPreference()
        {
            return (
                z(
                    '7.0.0',
                    'renderer.powerPreference has been deprecated, we can only know this if pixi creates the context',
                ),
                this.context.powerPreference
            );
        }
        generateTexture(e, t)
        {
            return this.textureGenerator.generateTexture(e, t);
        }
    };
    const Le = un;

    (Le.extension = { type: M.Renderer, priority: 1 }),
    (Le.__plugins = {}),
    (Le.__systems = {}),
    U.handleByMap(M.RendererPlugin, Le.__plugins),
    U.handleByMap(M.RendererSystem, Le.__systems),
    U.add(Le);
    class dn extends je
    {
        constructor(t, i)
        {
            const { width: s, height: r } = i || {};

            super(s, r), (this.items = []), (this.itemDirtyIds = []);
            for (let n = 0; n < t; n++)
            {
                const o = new V();

                this.items.push(o), this.itemDirtyIds.push(-2);
            }
            (this.length = t), (this._load = null), (this.baseTexture = null);
        }
        initFromArray(t, i)
        {
            for (let s = 0; s < this.length; s++)
            {
                !t[s]
                    || (t[s].castToBaseTexture
                        ? this.addBaseTextureAt(t[s].castToBaseTexture(), s)
                        : t[s] instanceof je
                            ? this.addResourceAt(t[s], s)
                            : this.addResourceAt(Mr(t[s], i), s));
            }
        }
        dispose()
        {
            for (let t = 0, i = this.length; t < i; t++) this.items[t].destroy();
            (this.items = null), (this.itemDirtyIds = null), (this._load = null);
        }
        addResourceAt(t, i)
        {
            if (!this.items[i]) throw new Error(`Index ${i} is out of bounds`);

            return t.valid && !this.valid && this.resize(t.width, t.height), this.items[i].setResource(t), this;
        }
        bind(t)
        {
            if (this.baseTexture !== null) throw new Error('Only one base texture per TextureArray is allowed');
            super.bind(t);
            for (let i = 0; i < this.length; i++)
            { (this.items[i].parentTextureArray = t), this.items[i].on('update', t.update, t); }
        }
        unbind(t)
        {
            super.unbind(t);
            for (let i = 0; i < this.length; i++)
            { (this.items[i].parentTextureArray = null), this.items[i].off('update', t.update, t); }
        }
        load()
        {
            if (this._load) return this._load;
            const i = this.items
                .map((s) => s.resource)
                .filter((s) => s)
                .map((s) => s.load());

            return (
                (this._load = Promise.all(i).then(() =>
                {
                    const { realWidth: s, realHeight: r } = this.items[0];

                    return this.resize(s, r), Promise.resolve(this);
                })),
                this._load
            );
        }
    }
    class Aa extends dn
    {
        constructor(t, i)
        {
            const { width: s, height: r } = i || {};
            let n; let
                o;

            Array.isArray(t) ? ((n = t), (o = t.length)) : (o = t),
            super(o, { width: s, height: r }),
            n && this.initFromArray(n, i);
        }
        addBaseTextureAt(t, i)
        {
            if (t.resource) this.addResourceAt(t.resource, i);
            else throw new Error('ArrayResource does not support RenderTexture');

            return this;
        }
        bind(t)
        {
            super.bind(t), (t.target = Ae.TEXTURE_2D_ARRAY);
        }
        upload(t, i, s)
        {
            const { length: r, itemDirtyIds: n, items: o } = this;
            const { gl: a } = t;

            s.dirtyId < 0
                && a.texImage3D(
                    a.TEXTURE_2D_ARRAY,
                    0,
                    s.internalFormat,
                    this._width,
                    this._height,
                    r,
                    0,
                    i.format,
                    s.type,
                    null,
                );
            for (let h = 0; h < r; h++)
            {
                const l = o[h];

                n[h] < l.dirtyId
                    && ((n[h] = l.dirtyId),
                    l.valid
                        && a.texSubImage3D(
                            a.TEXTURE_2D_ARRAY,
                            0,
                            0,
                            0,
                            h,
                            l.resource.width,
                            l.resource.height,
                            1,
                            i.format,
                            s.type,
                            l.resource.source,
                        ));
            }

            return !0;
        }
    }
    class Ra extends _e
    {
        constructor(t)
        {
            super(t);
        }
        static test(t)
        {
            const { OffscreenCanvas: i } = globalThis;

            return i && t instanceof i ? !0 : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement;
        }
    }
    const Ci = class extends dn
    {
        constructor(e, t)
        {
            const { width: i, height: s, autoLoad: r, linkBaseTexture: n } = t || {};

            if (e && e.length !== Ci.SIDES) throw new Error(`Invalid length. Got ${e.length}, expected 6`);
            super(6, { width: i, height: s });
            for (let o = 0; o < Ci.SIDES; o++) this.items[o].target = Ae.TEXTURE_CUBE_MAP_POSITIVE_X + o;
            (this.linkBaseTexture = n !== !1), e && this.initFromArray(e, t), r !== !1 && this.load();
        }
        bind(e)
        {
            super.bind(e), (e.target = Ae.TEXTURE_CUBE_MAP);
        }
        addBaseTextureAt(e, t, i)
        {
            if ((i === void 0 && (i = this.linkBaseTexture), !this.items[t])) throw new Error(`Index ${t} is out of bounds`);
            if (!this.linkBaseTexture || e.parentTextureArray || Object.keys(e._glTextures).length > 0)
            {
                if (e.resource) this.addResourceAt(e.resource, t);
                else throw new Error('CubeResource does not support copying of renderTexture.');
            }
            else
            {
                (e.target = Ae.TEXTURE_CUBE_MAP_POSITIVE_X + t),
                (e.parentTextureArray = this.baseTexture),
                (this.items[t] = e);
            }

            return e.valid && !this.valid && this.resize(e.realWidth, e.realHeight), (this.items[t] = e), this;
        }
        upload(e, t, i)
        {
            const s = this.itemDirtyIds;

            for (let r = 0; r < Ci.SIDES; r++)
            {
                const n = this.items[r];

                (s[r] < n.dirtyId || i.dirtyId < t.dirtyId)
                    && (n.valid && n.resource
                        ? (n.resource.upload(e, n, i), (s[r] = n.dirtyId))
                        : s[r] < -1
                          && (e.gl.texImage2D(
                              n.target,
                              0,
                              i.internalFormat,
                              t.realWidth,
                              t.realHeight,
                              0,
                              t.format,
                              i.type,
                              null,
                          ),
                          (s[r] = -1)));
            }

            return !0;
        }
        static test(e)
        {
            return Array.isArray(e) && e.length === Ci.SIDES;
        }
    };
    const fn = Ci;

    fn.SIDES = 6;
    class Oe extends _e
    {
        constructor(t, i)
        {
            let n;

            i = i || {};
            let s; let
                r;

            typeof t === 'string' ? ((s = Oe.EMPTY), (r = t)) : ((s = t), (r = null)),
            super(s),
            (this.url = r),
            (this.crossOrigin = (n = i.crossOrigin) != null ? n : !0),
            (this.alphaMode = typeof i.alphaMode === 'number' ? i.alphaMode : null),
            (this._load = null),
            i.autoLoad !== !1 && this.load();
        }
        load()
        {
            return this._load
                ? this._load
                : ((this._load = new Promise(async (t, i) =>
                {
                    if (this.url === null)
                    {
                        t(this);

                        return;
                    }
                    try
                    {
                        const s = await P.ADAPTER.fetch(this.url, { mode: this.crossOrigin ? 'cors' : 'no-cors' });

                        if (this.destroyed) return;
                        const r = await s.blob();

                        if (this.destroyed) return;
                        const n = await createImageBitmap(r, {
                            premultiplyAlpha:
                                  this.alphaMode === null || this.alphaMode === Nt.UNPACK ? 'premultiply' : 'none',
                        });

                        if (this.destroyed) return;
                        (this.source = n), this.update(), t(this);
                    }
                    catch (s)
                    {
                        if (this.destroyed) return;
                        i(s), this.onError.emit(s);
                    }
                })),
                this._load);
        }
        upload(t, i, s)
        {
            return this.source instanceof ImageBitmap
                ? (typeof this.alphaMode === 'number' && (i.alphaMode = this.alphaMode), super.upload(t, i, s))
                : (this.load(), !1);
        }
        dispose()
        {
            this.source instanceof ImageBitmap && this.source.close(), super.dispose(), (this._load = null);
        }
        static test(t)
        {
            return (
                !!globalThis.createImageBitmap
                && typeof ImageBitmap !== 'undefined'
                && (typeof t === 'string' || t instanceof ImageBitmap)
            );
        }
        static get EMPTY()
        {
            let t;

            return (Oe._EMPTY = (t = Oe._EMPTY) != null ? t : P.ADAPTER.createCanvas(0, 0)), Oe._EMPTY;
        }
    }
    const Ms = class extends _e
    {
        constructor(e, t)
        {
            (t = t || {}),
            super(P.ADAPTER.createCanvas()),
            (this._width = 0),
            (this._height = 0),
            (this.svg = e),
            (this.scale = t.scale || 1),
            (this._overrideWidth = t.width),
            (this._overrideHeight = t.height),
            (this._resolve = null),
            (this._crossorigin = t.crossorigin),
            (this._load = null),
            t.autoLoad !== !1 && this.load();
        }
        load()
        {
            return this._load
                ? this._load
                : ((this._load = new Promise((e) =>
                {
                    if (
                        ((this._resolve = () =>
                        {
                            this.resize(this.source.width, this.source.height), e(this);
                        }),
                        Ms.SVG_XML.test(this.svg.trim()))
                    )
                    {
                        if (!btoa) throw new Error('Your browser doesn\'t support base64 conversions.');
                        this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`;
                    }
                    this._loadSvg();
                })),
                this._load);
        }
        _loadSvg()
        {
            const e = new Image();

            _e.crossOrigin(e, this.svg, this._crossorigin),
            (e.src = this.svg),
            (e.onerror = (t) =>
            {
                !this._resolve || ((e.onerror = null), this.onError.emit(t));
            }),
            (e.onload = () =>
            {
                if (!this._resolve) return;
                const t = e.width;
                const i = e.height;

                if (!t || !i)
                {
                    throw new Error(
                        'The SVG image must have width and height defined (in pixels), canvas API needs them.',
                    );
                }
                let s = t * this.scale;
                let r = i * this.scale;

                (this._overrideWidth || this._overrideHeight)
                        && ((s = this._overrideWidth || (this._overrideHeight / i) * t),
                        (r = this._overrideHeight || (this._overrideWidth / t) * i)),
                (s = Math.round(s)),
                (r = Math.round(r));
                const n = this.source;

                (n.width = s),
                (n.height = r),
                (n._pixiId = `canvas_${Te()}`),
                n.getContext('2d').drawImage(e, 0, 0, t, i, 0, 0, s, r),
                this._resolve(),
                (this._resolve = null);
            });
        }
        static getSize(e)
        {
            const t = Ms.SVG_SIZE.exec(e);
            const i = {};

            return t && ((i[t[1]] = Math.round(parseFloat(t[3]))), (i[t[5]] = Math.round(parseFloat(t[7])))), i;
        }
        dispose()
        {
            super.dispose(), (this._resolve = null), (this._crossorigin = null);
        }
        static test(e, t)
        {
            return (
                t === 'svg'
                || (typeof e === 'string' && e.startsWith('data:image/svg+xml'))
                || (typeof e === 'string' && Ms.SVG_XML.test(e))
            );
        }
    };
    const Je = Ms;

    (Je.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m),
    (Je.SVG_SIZE
            = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i);
    const pn = class extends _e
    {
        constructor(e, t)
        {
            if (((t = t || {}), !(e instanceof HTMLVideoElement)))
            {
                const i = document.createElement('video');

                i.setAttribute('preload', 'auto'),
                i.setAttribute('webkit-playsinline', ''),
                i.setAttribute('playsinline', ''),
                typeof e === 'string' && (e = [e]);
                const s = e[0].src || e[0];

                _e.crossOrigin(i, s, t.crossorigin);
                for (let r = 0; r < e.length; ++r)
                {
                    const n = document.createElement('source');
                    let { src: o, mime: a } = e[r];

                    o = o || e[r];
                    const h = o.split('?').shift().toLowerCase();
                    const l = h.slice(h.lastIndexOf('.') + 1);

                    (a = a || pn.MIME_TYPES[l] || `video/${l}`), (n.src = o), (n.type = a), i.appendChild(n);
                }
                e = i;
            }
            super(e),
            (this.noSubImage = !0),
            (this._autoUpdate = !0),
            (this._isConnectedToTicker = !1),
            (this._updateFPS = t.updateFPS || 0),
            (this._msToNextUpdate = 0),
            (this.autoPlay = t.autoPlay !== !1),
            (this._load = null),
            (this._resolve = null),
            (this._onCanPlay = this._onCanPlay.bind(this)),
            (this._onError = this._onError.bind(this)),
            t.autoLoad !== !1 && this.load();
        }
        update(e = 0)
        {
            if (!this.destroyed)
            {
                const t = lt.shared.elapsedMS * this.source.playbackRate;

                (this._msToNextUpdate = Math.floor(this._msToNextUpdate - t)),
                (!this._updateFPS || this._msToNextUpdate <= 0)
                        && (super.update(), (this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0));
            }
        }
        load()
        {
            if (this._load) return this._load;
            const e = this.source;

            return (
                (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA)
                    && e.width
                    && e.height
                    && (e.complete = !0),
                e.addEventListener('play', this._onPlayStart.bind(this)),
                e.addEventListener('pause', this._onPlayStop.bind(this)),
                this._isSourceReady()
                    ? this._onCanPlay()
                    : (e.addEventListener('canplay', this._onCanPlay),
                    e.addEventListener('canplaythrough', this._onCanPlay),
                    e.addEventListener('error', this._onError, !0)),
                (this._load = new Promise((t) =>
                {
                    this.valid ? t(this) : ((this._resolve = t), e.load());
                })),
                this._load
            );
        }
        _onError(e)
        {
            this.source.removeEventListener('error', this._onError, !0), this.onError.emit(e);
        }
        _isSourcePlaying()
        {
            const e = this.source;

            return !e.paused && !e.ended && this._isSourceReady();
        }
        _isSourceReady()
        {
            return this.source.readyState > 2;
        }
        _onPlayStart()
        {
            this.valid || this._onCanPlay(),
            this.autoUpdate
                    && !this._isConnectedToTicker
                    && (lt.shared.add(this.update, this), (this._isConnectedToTicker = !0));
        }
        _onPlayStop()
        {
            this._isConnectedToTicker && (lt.shared.remove(this.update, this), (this._isConnectedToTicker = !1));
        }
        _onCanPlay()
        {
            const e = this.source;

            e.removeEventListener('canplay', this._onCanPlay), e.removeEventListener('canplaythrough', this._onCanPlay);
            const t = this.valid;

            this.resize(e.videoWidth, e.videoHeight),
            !t && this._resolve && (this._resolve(this), (this._resolve = null)),
            this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && e.play();
        }
        dispose()
        {
            this._isConnectedToTicker && (lt.shared.remove(this.update, this), (this._isConnectedToTicker = !1));
            const e = this.source;

            e && (e.removeEventListener('error', this._onError, !0), e.pause(), (e.src = ''), e.load()), super.dispose();
        }
        get autoUpdate()
        {
            return this._autoUpdate;
        }
        set autoUpdate(e)
        {
            e !== this._autoUpdate
                && ((this._autoUpdate = e),
                !this._autoUpdate && this._isConnectedToTicker
                    ? (lt.shared.remove(this.update, this), (this._isConnectedToTicker = !1))
                    : this._autoUpdate
                      && !this._isConnectedToTicker
                      && this._isSourcePlaying()
                      && (lt.shared.add(this.update, this), (this._isConnectedToTicker = !0)));
        }
        get updateFPS()
        {
            return this._updateFPS;
        }
        set updateFPS(e)
        {
            e !== this._updateFPS && (this._updateFPS = e);
        }
        static test(e, t)
        {
            return (globalThis.HTMLVideoElement && e instanceof HTMLVideoElement) || pn.TYPES.includes(t);
        }
    };
    const Bs = pn;

    (Bs.TYPES = ['mp4', 'm4v', 'webm', 'ogg', 'ogv', 'h264', 'avi', 'mov']),
    (Bs.MIME_TYPES = { ogv: 'video/ogg', mov: 'video/quicktime', m4v: 'video/mp4' }),
    ds.push(Oe, Or, Ra, Bs, Je, Ye, fn, Aa);
    class Yc
    {
        constructor()
        {
            (this._glTransformFeedbacks = {}),
            (this.buffers = []),
            (this.disposeRunner = new Bt('disposeTransformFeedback'));
        }
        bindBuffer(t, i)
        {
            this.buffers[t] = i;
        }
        destroy()
        {
            this.disposeRunner.emit(this, !1);
        }
    }
    const qc = '7.2.0';

    class Ii
    {
        constructor()
        {
            (this.minX = 1 / 0),
            (this.minY = 1 / 0),
            (this.maxX = -1 / 0),
            (this.maxY = -1 / 0),
            (this.rect = null),
            (this.updateID = -1);
        }
        isEmpty()
        {
            return this.minX > this.maxX || this.minY > this.maxY;
        }
        clear()
        {
            (this.minX = 1 / 0), (this.minY = 1 / 0), (this.maxX = -1 / 0), (this.maxY = -1 / 0);
        }
        getRectangle(t)
        {
            return this.minX > this.maxX || this.minY > this.maxY
                ? $.EMPTY
                : ((t = t || new $(0, 0, 1, 1)),
                (t.x = this.minX),
                (t.y = this.minY),
                (t.width = this.maxX - this.minX),
                (t.height = this.maxY - this.minY),
                t);
        }
        addPoint(t)
        {
            (this.minX = Math.min(this.minX, t.x)),
            (this.maxX = Math.max(this.maxX, t.x)),
            (this.minY = Math.min(this.minY, t.y)),
            (this.maxY = Math.max(this.maxY, t.y));
        }
        addPointMatrix(t, i)
        {
            const { a: s, b: r, c: n, d: o, tx: a, ty: h } = t;
            const l = s * i.x + n * i.y + a;
            const c = r * i.x + o * i.y + h;

            (this.minX = Math.min(this.minX, l)),
            (this.maxX = Math.max(this.maxX, l)),
            (this.minY = Math.min(this.minY, c)),
            (this.maxY = Math.max(this.maxY, c));
        }
        addQuad(t)
        {
            let i = this.minX;
            let s = this.minY;
            let r = this.maxX;
            let n = this.maxY;
            let o = t[0];
            let a = t[1];

            (i = o < i ? o : i),
            (s = a < s ? a : s),
            (r = o > r ? o : r),
            (n = a > n ? a : n),
            (o = t[2]),
            (a = t[3]),
            (i = o < i ? o : i),
            (s = a < s ? a : s),
            (r = o > r ? o : r),
            (n = a > n ? a : n),
            (o = t[4]),
            (a = t[5]),
            (i = o < i ? o : i),
            (s = a < s ? a : s),
            (r = o > r ? o : r),
            (n = a > n ? a : n),
            (o = t[6]),
            (a = t[7]),
            (i = o < i ? o : i),
            (s = a < s ? a : s),
            (r = o > r ? o : r),
            (n = a > n ? a : n),
            (this.minX = i),
            (this.minY = s),
            (this.maxX = r),
            (this.maxY = n);
        }
        addFrame(t, i, s, r, n)
        {
            this.addFrameMatrix(t.worldTransform, i, s, r, n);
        }
        addFrameMatrix(t, i, s, r, n)
        {
            const o = t.a;
            const a = t.b;
            const h = t.c;
            const l = t.d;
            const c = t.tx;
            const u = t.ty;
            let d = this.minX;
            let f = this.minY;
            let p = this.maxX;
            let _ = this.maxY;
            let g = o * i + h * s + c;
            let v = a * i + l * s + u;

            (d = g < d ? g : d),
            (f = v < f ? v : f),
            (p = g > p ? g : p),
            (_ = v > _ ? v : _),
            (g = o * r + h * s + c),
            (v = a * r + l * s + u),
            (d = g < d ? g : d),
            (f = v < f ? v : f),
            (p = g > p ? g : p),
            (_ = v > _ ? v : _),
            (g = o * i + h * n + c),
            (v = a * i + l * n + u),
            (d = g < d ? g : d),
            (f = v < f ? v : f),
            (p = g > p ? g : p),
            (_ = v > _ ? v : _),
            (g = o * r + h * n + c),
            (v = a * r + l * n + u),
            (d = g < d ? g : d),
            (f = v < f ? v : f),
            (p = g > p ? g : p),
            (_ = v > _ ? v : _),
            (this.minX = d),
            (this.minY = f),
            (this.maxX = p),
            (this.maxY = _);
        }
        addVertexData(t, i, s)
        {
            let r = this.minX;
            let n = this.minY;
            let o = this.maxX;
            let a = this.maxY;

            for (let h = i; h < s; h += 2)
            {
                const l = t[h];
                const c = t[h + 1];

                (r = l < r ? l : r), (n = c < n ? c : n), (o = l > o ? l : o), (a = c > a ? c : a);
            }
            (this.minX = r), (this.minY = n), (this.maxX = o), (this.maxY = a);
        }
        addVertices(t, i, s, r)
        {
            this.addVerticesMatrix(t.worldTransform, i, s, r);
        }
        addVerticesMatrix(t, i, s, r, n = 0, o = n)
        {
            const a = t.a;
            const h = t.b;
            const l = t.c;
            const c = t.d;
            const u = t.tx;
            const d = t.ty;
            let f = this.minX;
            let p = this.minY;
            let _ = this.maxX;
            let g = this.maxY;

            for (let v = s; v < r; v += 2)
            {
                const T = i[v];
                const y = i[v + 1];
                const x = a * T + l * y + u;
                const A = c * y + h * T + d;

                (f = Math.min(f, x - n)), (_ = Math.max(_, x + n)), (p = Math.min(p, A - o)), (g = Math.max(g, A + o));
            }
            (this.minX = f), (this.minY = p), (this.maxX = _), (this.maxY = g);
        }
        addBounds(t)
        {
            const i = this.minX;
            const s = this.minY;
            const r = this.maxX;
            const n = this.maxY;

            (this.minX = t.minX < i ? t.minX : i),
            (this.minY = t.minY < s ? t.minY : s),
            (this.maxX = t.maxX > r ? t.maxX : r),
            (this.maxY = t.maxY > n ? t.maxY : n);
        }
        addBoundsMask(t, i)
        {
            const s = t.minX > i.minX ? t.minX : i.minX;
            const r = t.minY > i.minY ? t.minY : i.minY;
            const n = t.maxX < i.maxX ? t.maxX : i.maxX;
            const o = t.maxY < i.maxY ? t.maxY : i.maxY;

            if (s <= n && r <= o)
            {
                const a = this.minX;
                const h = this.minY;
                const l = this.maxX;
                const c = this.maxY;

                (this.minX = s < a ? s : a),
                (this.minY = r < h ? r : h),
                (this.maxX = n > l ? n : l),
                (this.maxY = o > c ? o : c);
            }
        }
        addBoundsMatrix(t, i)
        {
            this.addFrameMatrix(i, t.minX, t.minY, t.maxX, t.maxY);
        }
        addBoundsArea(t, i)
        {
            const s = t.minX > i.x ? t.minX : i.x;
            const r = t.minY > i.y ? t.minY : i.y;
            const n = t.maxX < i.x + i.width ? t.maxX : i.x + i.width;
            const o = t.maxY < i.y + i.height ? t.maxY : i.y + i.height;

            if (s <= n && r <= o)
            {
                const a = this.minX;
                const h = this.minY;
                const l = this.maxX;
                const c = this.maxY;

                (this.minX = s < a ? s : a),
                (this.minY = r < h ? r : h),
                (this.maxX = n > l ? n : l),
                (this.maxY = o > c ? o : c);
            }
        }
        pad(t = 0, i = t)
        {
            this.isEmpty() || ((this.minX -= t), (this.maxX += t), (this.minY -= i), (this.maxY += i));
        }
        addFramePad(t, i, s, r, n, o)
        {
            (t -= n),
            (i -= o),
            (s += n),
            (r += o),
            (this.minX = this.minX < t ? this.minX : t),
            (this.maxX = this.maxX > s ? this.maxX : s),
            (this.minY = this.minY < i ? this.minY : i),
            (this.maxY = this.maxY > r ? this.maxY : r);
        }
    }
    class st extends Ve
    {
        constructor()
        {
            super(),
            (this.tempDisplayObjectParent = null),
            (this.transform = new vi()),
            (this.alpha = 1),
            (this.visible = !0),
            (this.renderable = !0),
            (this.cullable = !1),
            (this.cullArea = null),
            (this.parent = null),
            (this.worldAlpha = 1),
            (this._lastSortedIndex = 0),
            (this._zIndex = 0),
            (this.filterArea = null),
            (this.filters = null),
            (this._enabledFilters = null),
            (this._bounds = new Ii()),
            (this._localBounds = null),
            (this._boundsID = 0),
            (this._boundsRect = null),
            (this._localBoundsRect = null),
            (this._mask = null),
            (this._maskRefCount = 0),
            (this._destroyed = !1),
            (this.isSprite = !1),
            (this.isMask = !1);
        }
        static mixin(t)
        {
            const i = Object.keys(t);

            for (let s = 0; s < i.length; ++s)
            {
                const r = i[s];

                Object.defineProperty(st.prototype, r, Object.getOwnPropertyDescriptor(t, r));
            }
        }
        get destroyed()
        {
            return this._destroyed;
        }
        _recursivePostUpdateTransform()
        {
            this.parent
                ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform))
                : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
        }
        updateTransform()
        {
            this._boundsID++,
            this.transform.updateTransform(this.parent.transform),
            (this.worldAlpha = this.alpha * this.parent.worldAlpha);
        }
        getBounds(t, i)
        {
            return (
                t
                    || (this.parent
                        ? (this._recursivePostUpdateTransform(), this.updateTransform())
                        : ((this.parent = this._tempDisplayObjectParent), this.updateTransform(), (this.parent = null))),
                this._bounds.updateID !== this._boundsID
                    && (this.calculateBounds(), (this._bounds.updateID = this._boundsID)),
                i || (this._boundsRect || (this._boundsRect = new $()), (i = this._boundsRect)),
                this._bounds.getRectangle(i)
            );
        }
        getLocalBounds(t)
        {
            t || (this._localBoundsRect || (this._localBoundsRect = new $()), (t = this._localBoundsRect)),
            this._localBounds || (this._localBounds = new Ii());
            const i = this.transform;
            const s = this.parent;

            (this.parent = null), (this.transform = this._tempDisplayObjectParent.transform);
            const r = this._bounds;
            const n = this._boundsID;

            this._bounds = this._localBounds;
            const o = this.getBounds(!1, t);

            return (
                (this.parent = s), (this.transform = i), (this._bounds = r), (this._bounds.updateID += this._boundsID - n), o
            );
        }
        toGlobal(t, i, s = !1)
        {
            return (
                s
                    || (this._recursivePostUpdateTransform(),
                    this.parent
                        ? this.displayObjectUpdateTransform()
                        : ((this.parent = this._tempDisplayObjectParent),
                        this.displayObjectUpdateTransform(),
                        (this.parent = null))),
                this.worldTransform.apply(t, i)
            );
        }
        toLocal(t, i, s, r)
        {
            return (
                i && (t = i.toGlobal(t, s, r)),
                r
                    || (this._recursivePostUpdateTransform(),
                    this.parent
                        ? this.displayObjectUpdateTransform()
                        : ((this.parent = this._tempDisplayObjectParent),
                        this.displayObjectUpdateTransform(),
                        (this.parent = null))),
                this.worldTransform.applyInverse(t, s)
            );
        }
        setParent(t)
        {
            if (!t || !t.addChild) throw new Error('setParent: Argument must be a Container');

            return t.addChild(this), t;
        }
        removeFromParent()
        {
            let t;

            (t = this.parent) == null || t.removeChild(this);
        }
        setTransform(t = 0, i = 0, s = 1, r = 1, n = 0, o = 0, a = 0, h = 0, l = 0)
        {
            return (
                (this.position.x = t),
                (this.position.y = i),
                (this.scale.x = s || 1),
                (this.scale.y = r || 1),
                (this.rotation = n),
                (this.skew.x = o),
                (this.skew.y = a),
                (this.pivot.x = h),
                (this.pivot.y = l),
                this
            );
        }
        destroy(t)
        {
            this.removeFromParent(),
            (this._destroyed = !0),
            (this.transform = null),
            (this.parent = null),
            (this._bounds = null),
            (this.mask = null),
            (this.cullArea = null),
            (this.filters = null),
            (this.filterArea = null),
            (this.hitArea = null),
            (this.eventMode = 'auto'),
            (this.interactiveChildren = !1),
            this.emit('destroyed'),
            this.removeAllListeners();
        }
        get _tempDisplayObjectParent()
        {
            return (
                this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new Ca()),
                this.tempDisplayObjectParent
            );
        }
        enableTempParent()
        {
            const t = this.parent;

            return (this.parent = this._tempDisplayObjectParent), t;
        }
        disableTempParent(t)
        {
            this.parent = t;
        }
        get x()
        {
            return this.position.x;
        }
        set x(t)
        {
            this.transform.position.x = t;
        }
        get y()
        {
            return this.position.y;
        }
        set y(t)
        {
            this.transform.position.y = t;
        }
        get worldTransform()
        {
            return this.transform.worldTransform;
        }
        get localTransform()
        {
            return this.transform.localTransform;
        }
        get position()
        {
            return this.transform.position;
        }
        set position(t)
        {
            this.transform.position.copyFrom(t);
        }
        get scale()
        {
            return this.transform.scale;
        }
        set scale(t)
        {
            this.transform.scale.copyFrom(t);
        }
        get pivot()
        {
            return this.transform.pivot;
        }
        set pivot(t)
        {
            this.transform.pivot.copyFrom(t);
        }
        get skew()
        {
            return this.transform.skew;
        }
        set skew(t)
        {
            this.transform.skew.copyFrom(t);
        }
        get rotation()
        {
            return this.transform.rotation;
        }
        set rotation(t)
        {
            this.transform.rotation = t;
        }
        get angle()
        {
            return this.transform.rotation * zo;
        }
        set angle(t)
        {
            this.transform.rotation = t * Wo;
        }
        get zIndex()
        {
            return this._zIndex;
        }
        set zIndex(t)
        {
            (this._zIndex = t), this.parent && (this.parent.sortDirty = !0);
        }
        get worldVisible()
        {
            let t = this;

            do
            {
                if (!t.visible) return !1;
                t = t.parent;
            } while (t);

            return !0;
        }
        get mask()
        {
            return this._mask;
        }
        set mask(t)
        {
            if (this._mask !== t)
            {
                if (this._mask)
                {
                    const i = this._mask.isMaskData ? this._mask.maskObject : this._mask;

                    i && (i._maskRefCount--, i._maskRefCount === 0 && ((i.renderable = !0), (i.isMask = !1)));
                }
                if (((this._mask = t), this._mask))
                {
                    const i = this._mask.isMaskData ? this._mask.maskObject : this._mask;

                    i && (i._maskRefCount === 0 && ((i.renderable = !1), (i.isMask = !0)), i._maskRefCount++);
                }
            }
        }
    }
    class Ca extends st
    {
        constructor()
        {
            super(...arguments), (this.sortDirty = null);
        }
    }
    st.prototype.displayObjectUpdateTransform = st.prototype.updateTransform;
    const Kc = new tt();

    function Zc(e, t)
    {
        return e.zIndex === t.zIndex ? e._lastSortedIndex - t._lastSortedIndex : e.zIndex - t.zIndex;
    }
    const mn = class extends st
    {
        constructor()
        {
            super(), (this.children = []), (this.sortableChildren = mn.defaultSortableChildren), (this.sortDirty = !1);
        }
        onChildrenChange(e) {}
        addChild(...e)
        {
            if (e.length > 1) for (let t = 0; t < e.length; t++) this.addChild(e[t]);
            else
            {
                const t = e[0];

                t.parent && t.parent.removeChild(t),
                (t.parent = this),
                (this.sortDirty = !0),
                (t.transform._parentID = -1),
                this.children.push(t),
                this._boundsID++,
                this.onChildrenChange(this.children.length - 1),
                this.emit('childAdded', t, this, this.children.length - 1),
                t.emit('added', this);
            }

            return e[0];
        }
        addChildAt(e, t)
        {
            if (t < 0 || t > this.children.length)
            { throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${this.children.length}`); }

            return (
                e.parent && e.parent.removeChild(e),
                (e.parent = this),
                (this.sortDirty = !0),
                (e.transform._parentID = -1),
                this.children.splice(t, 0, e),
                this._boundsID++,
                this.onChildrenChange(t),
                e.emit('added', this),
                this.emit('childAdded', e, this, t),
                e
            );
        }
        swapChildren(e, t)
        {
            if (e === t) return;
            const i = this.getChildIndex(e);
            const s = this.getChildIndex(t);

            (this.children[i] = t), (this.children[s] = e), this.onChildrenChange(i < s ? i : s);
        }
        getChildIndex(e)
        {
            const t = this.children.indexOf(e);

            if (t === -1) throw new Error('The supplied DisplayObject must be a child of the caller');

            return t;
        }
        setChildIndex(e, t)
        {
            if (t < 0 || t >= this.children.length)
            { throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`); }
            const i = this.getChildIndex(e);

            Ce(this.children, i, 1), this.children.splice(t, 0, e), this.onChildrenChange(t);
        }
        getChildAt(e)
        {
            if (e < 0 || e >= this.children.length) throw new Error(`getChildAt: Index (${e}) does not exist.`);

            return this.children[e];
        }
        removeChild(...e)
        {
            if (e.length > 1) for (let t = 0; t < e.length; t++) this.removeChild(e[t]);
            else
            {
                const t = e[0];
                const i = this.children.indexOf(t);

                if (i === -1) return null;
                (t.parent = null),
                (t.transform._parentID = -1),
                Ce(this.children, i, 1),
                this._boundsID++,
                this.onChildrenChange(i),
                t.emit('removed', this),
                this.emit('childRemoved', t, this, i);
            }

            return e[0];
        }
        removeChildAt(e)
        {
            const t = this.getChildAt(e);

            return (
                (t.parent = null),
                (t.transform._parentID = -1),
                Ce(this.children, e, 1),
                this._boundsID++,
                this.onChildrenChange(e),
                t.emit('removed', this),
                this.emit('childRemoved', t, this, e),
                t
            );
        }
        removeChildren(e = 0, t = this.children.length)
        {
            const i = e;
            const s = t;
            const r = s - i;
            let n;

            if (r > 0 && r <= s)
            {
                n = this.children.splice(i, r);
                for (let o = 0; o < n.length; ++o) (n[o].parent = null), n[o].transform && (n[o].transform._parentID = -1);
                this._boundsID++, this.onChildrenChange(e);
                for (let o = 0; o < n.length; ++o) n[o].emit('removed', this), this.emit('childRemoved', n[o], this, o);

                return n;
            }
            else if (r === 0 && this.children.length === 0) return [];
            throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
        }
        sortChildren()
        {
            let e = !1;

            for (let t = 0, i = this.children.length; t < i; ++t)
            {
                const s = this.children[t];

                (s._lastSortedIndex = t), !e && s.zIndex !== 0 && (e = !0);
            }
            e && this.children.length > 1 && this.children.sort(Zc), (this.sortDirty = !1);
        }
        updateTransform()
        {
            this.sortableChildren && this.sortDirty && this.sortChildren(),
            this._boundsID++,
            this.transform.updateTransform(this.parent.transform),
            (this.worldAlpha = this.alpha * this.parent.worldAlpha);
            for (let e = 0, t = this.children.length; e < t; ++e)
            {
                const i = this.children[e];

                i.visible && i.updateTransform();
            }
        }
        calculateBounds()
        {
            this._bounds.clear(), this._calculateBounds();
            for (let e = 0; e < this.children.length; e++)
            {
                const t = this.children[e];

                if (!(!t.visible || !t.renderable))
                {
                    if ((t.calculateBounds(), t._mask))
                    {
                        const i = t._mask.isMaskData ? t._mask.maskObject : t._mask;

                        i
                            ? (i.calculateBounds(), this._bounds.addBoundsMask(t._bounds, i._bounds))
                            : this._bounds.addBounds(t._bounds);
                    }
                    else
                    {
                        t.filterArea
                            ? this._bounds.addBoundsArea(t._bounds, t.filterArea)
                            : this._bounds.addBounds(t._bounds);
                    }
                }
            }
            this._bounds.updateID = this._boundsID;
        }
        getLocalBounds(e, t = !1)
        {
            const i = super.getLocalBounds(e);

            if (!t)
            {
                for (let s = 0, r = this.children.length; s < r; ++s)
                {
                    const n = this.children[s];

                    n.visible && n.updateTransform();
                }
            }

            return i;
        }
        _calculateBounds() {}
        _renderWithCulling(e)
        {
            const t = e.renderTexture.sourceFrame;

            if (!(t.width > 0 && t.height > 0)) return;
            let i; let
                s;

            this.cullArea
                ? ((i = this.cullArea), (s = this.worldTransform))
                : this._render !== mn.prototype._render && (i = this.getBounds(!0));
            const r = e.projection.transform;

            if ((r && (s ? ((s = Kc.copyFrom(s)), s.prepend(r)) : (s = r)), i && t.intersects(i, s))) this._render(e);
            else if (this.cullArea) return;
            for (let n = 0, o = this.children.length; n < o; ++n)
            {
                const a = this.children[n];
                const h = a.cullable;

                (a.cullable = h || !this.cullArea), a.render(e), (a.cullable = h);
            }
        }
        render(e)
        {
            let t;

            if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
            {
                if (this._mask || ((t = this.filters) == null ? void 0 : t.length)) this.renderAdvanced(e);
                else if (this.cullable) this._renderWithCulling(e);
                else
                {
                    this._render(e);
                    for (let i = 0, s = this.children.length; i < s; ++i) this.children[i].render(e);
                }
            }
        }
        renderAdvanced(e)
        {
            let r; let n; let
                o;
            const t = this.filters;
            const i = this._mask;

            if (t)
            {
                this._enabledFilters || (this._enabledFilters = []), (this._enabledFilters.length = 0);
                for (let a = 0; a < t.length; a++) t[a].enabled && this._enabledFilters.push(t[a]);
            }
            const s
                = (t && ((r = this._enabledFilters) == null ? void 0 : r.length))
                || (i && (!i.isMaskData || (i.enabled && (i.autoDetect || i.type !== ct.NONE))));

            if (
                (s && e.batch.flush(),
                t && ((n = this._enabledFilters) == null ? void 0 : n.length) && e.filter.push(this, this._enabledFilters),
                i && e.mask.push(this, this._mask),
                this.cullable)
            )
            { this._renderWithCulling(e); }
            else
            {
                this._render(e);
                for (let a = 0, h = this.children.length; a < h; ++a) this.children[a].render(e);
            }
            s && e.batch.flush(),
            i && e.mask.pop(this),
            t && ((o = this._enabledFilters) == null ? void 0 : o.length) && e.filter.pop();
        }
        _render(e) {}
        destroy(e)
        {
            super.destroy(), (this.sortDirty = !1);
            const t = typeof e === 'boolean' ? e : e == null ? void 0 : e.children;
            const i = this.removeChildren(0, this.children.length);

            if (t) for (let s = 0; s < i.length; ++s) i[s].destroy(e);
        }
        get width()
        {
            return this.scale.x * this.getLocalBounds().width;
        }
        set width(e)
        {
            const t = this.getLocalBounds().width;

            t !== 0 ? (this.scale.x = e / t) : (this.scale.x = 1), (this._width = e);
        }
        get height()
        {
            return this.scale.y * this.getLocalBounds().height;
        }
        set height(e)
        {
            const t = this.getLocalBounds().height;

            t !== 0 ? (this.scale.y = e / t) : (this.scale.y = 1), (this._height = e);
        }
    };
    const Ct = mn;

    (Ct.defaultSortableChildren = !1),
    (Ct.prototype.containerUpdateTransform = Ct.prototype.updateTransform),
    Object.defineProperties(P, {
        SORTABLE_CHILDREN: {
            get()
            {
                return Ct.defaultSortableChildren;
            },
            set(e)
            {
                z('7.1.0', 'settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren'),
                (Ct.defaultSortableChildren = e);
            },
        },
    });
    const Pi = new Y();
    const Jc = new Uint16Array([0, 1, 2, 0, 2, 3]);

    class ve extends Ct
    {
        constructor(t)
        {
            super(),
            (this._anchor = new me(this._onAnchorUpdate, this, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0)),
            (this._texture = null),
            (this._width = 0),
            (this._height = 0),
            (this._tintColor = new j(16777215)),
            (this._tintRGB = null),
            (this.tint = 16777215),
            (this.blendMode = G.NORMAL),
            (this._cachedTint = 16777215),
            (this.uvs = null),
            (this.texture = t || B.EMPTY),
            (this.vertexData = new Float32Array(8)),
            (this.vertexTrimmedData = null),
            (this._transformID = -1),
            (this._textureID = -1),
            (this._transformTrimmedID = -1),
            (this._textureTrimmedID = -1),
            (this.indices = Jc),
            (this.pluginName = 'batch'),
            (this.isSprite = !0),
            (this._roundPixels = P.ROUND_PIXELS);
        }
        _onTextureUpdate()
        {
            (this._textureID = -1),
            (this._textureTrimmedID = -1),
            (this._cachedTint = 16777215),
            this._width && (this.scale.x = (de(this.scale.x) * this._width) / this._texture.orig.width),
            this._height && (this.scale.y = (de(this.scale.y) * this._height) / this._texture.orig.height);
        }
        _onAnchorUpdate()
        {
            (this._transformID = -1), (this._transformTrimmedID = -1);
        }
        calculateVertices()
        {
            const t = this._texture;

            if (this._transformID === this.transform._worldID && this._textureID === t._updateID) return;
            this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32),
            (this._transformID = this.transform._worldID),
            (this._textureID = t._updateID);
            const i = this.transform.worldTransform;
            const s = i.a;
            const r = i.b;
            const n = i.c;
            const o = i.d;
            const a = i.tx;
            const h = i.ty;
            const l = this.vertexData;
            const c = t.trim;
            const u = t.orig;
            const d = this._anchor;
            let f = 0;
            let p = 0;
            let _ = 0;
            let g = 0;

            if (
                (c
                    ? ((p = c.x - d._x * u.width), (f = p + c.width), (g = c.y - d._y * u.height), (_ = g + c.height))
                    : ((p = -d._x * u.width), (f = p + u.width), (g = -d._y * u.height), (_ = g + u.height)),
                (l[0] = s * p + n * g + a),
                (l[1] = o * g + r * p + h),
                (l[2] = s * f + n * g + a),
                (l[3] = o * g + r * f + h),
                (l[4] = s * f + n * _ + a),
                (l[5] = o * _ + r * f + h),
                (l[6] = s * p + n * _ + a),
                (l[7] = o * _ + r * p + h),
                this._roundPixels)
            )
            {
                const v = P.RESOLUTION;

                for (let T = 0; T < l.length; ++T) l[T] = Math.round(l[T] * v) / v;
            }
        }
        calculateTrimmedVertices()
        {
            if (!this.vertexTrimmedData) this.vertexTrimmedData = new Float32Array(8);
            else if (
                this._transformTrimmedID === this.transform._worldID
                && this._textureTrimmedID === this._texture._updateID
            )
            { return; }
            (this._transformTrimmedID = this.transform._worldID), (this._textureTrimmedID = this._texture._updateID);
            const t = this._texture;
            const i = this.vertexTrimmedData;
            const s = t.orig;
            const r = this._anchor;
            const n = this.transform.worldTransform;
            const o = n.a;
            const a = n.b;
            const h = n.c;
            const l = n.d;
            const c = n.tx;
            const u = n.ty;
            const d = -r._x * s.width;
            const f = d + s.width;
            const p = -r._y * s.height;
            const _ = p + s.height;

            (i[0] = o * d + h * p + c),
            (i[1] = l * p + a * d + u),
            (i[2] = o * f + h * p + c),
            (i[3] = l * p + a * f + u),
            (i[4] = o * f + h * _ + c),
            (i[5] = l * _ + a * f + u),
            (i[6] = o * d + h * _ + c),
            (i[7] = l * _ + a * d + u);
        }
        _render(t)
        {
            this.calculateVertices(),
            t.batch.setObjectRenderer(t.plugins[this.pluginName]),
            t.plugins[this.pluginName].render(this);
        }
        _calculateBounds()
        {
            const t = this._texture.trim;
            const i = this._texture.orig;

            !t || (t.width === i.width && t.height === i.height)
                ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData))
                : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData));
        }
        getLocalBounds(t)
        {
            return this.children.length === 0
                ? (this._localBounds || (this._localBounds = new Ii()),
                (this._localBounds.minX = this._texture.orig.width * -this._anchor._x),
                (this._localBounds.minY = this._texture.orig.height * -this._anchor._y),
                (this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x)),
                (this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y)),
                t || (this._localBoundsRect || (this._localBoundsRect = new $()), (t = this._localBoundsRect)),
                this._localBounds.getRectangle(t))
                : super.getLocalBounds.call(this, t);
        }
        containsPoint(t)
        {
            this.worldTransform.applyInverse(t, Pi);
            const i = this._texture.orig.width;
            const s = this._texture.orig.height;
            const r = -i * this.anchor.x;
            let n = 0;

            return Pi.x >= r && Pi.x < r + i && ((n = -s * this.anchor.y), Pi.y >= n && Pi.y < n + s);
        }
        destroy(t)
        {
            if (
                (super.destroy(t),
                this._texture.off('update', this._onTextureUpdate, this),
                (this._anchor = null),
                typeof t === 'boolean' ? t : t == null ? void 0 : t.texture)
            )
            {
                const s = typeof t === 'boolean' ? t : t == null ? void 0 : t.baseTexture;

                this._texture.destroy(!!s);
            }
            this._texture = null;
        }
        static from(t, i)
        {
            const s = t instanceof B ? t : B.from(t, i);

            return new ve(s);
        }
        set roundPixels(t)
        {
            this._roundPixels !== t && (this._transformID = -1), (this._roundPixels = t);
        }
        get roundPixels()
        {
            return this._roundPixels;
        }
        get width()
        {
            return Math.abs(this.scale.x) * this._texture.orig.width;
        }
        set width(t)
        {
            const i = de(this.scale.x) || 1;

            (this.scale.x = (i * t) / this._texture.orig.width), (this._width = t);
        }
        get height()
        {
            return Math.abs(this.scale.y) * this._texture.orig.height;
        }
        set height(t)
        {
            const i = de(this.scale.y) || 1;

            (this.scale.y = (i * t) / this._texture.orig.height), (this._height = t);
        }
        get anchor()
        {
            return this._anchor;
        }
        set anchor(t)
        {
            this._anchor.copyFrom(t);
        }
        get tint()
        {
            return this._tintColor.value;
        }
        set tint(t)
        {
            this._tintColor.setValue(t), (this._tintRGB = this._tintColor.toLittleEndianNumber());
        }
        get tintValue()
        {
            return this._tintColor.toNumber();
        }
        get texture()
        {
            return this._texture;
        }
        set texture(t)
        {
            this._texture !== t
                && (this._texture && this._texture.off('update', this._onTextureUpdate, this),
                (this._texture = t || B.EMPTY),
                (this._cachedTint = 16777215),
                (this._textureID = -1),
                (this._textureTrimmedID = -1),
                t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once('update', this._onTextureUpdate, this)));
        }
    }
    const Ia = new tt();

    (st.prototype._cacheAsBitmap = !1),
    (st.prototype._cacheData = null),
    (st.prototype._cacheAsBitmapResolution = null),
    (st.prototype._cacheAsBitmapMultisample = null);
    class Qc
    {
        constructor()
        {
            (this.textureCacheId = null),
            (this.originalRender = null),
            (this.originalRenderCanvas = null),
            (this.originalCalculateBounds = null),
            (this.originalGetLocalBounds = null),
            (this.originalUpdateTransform = null),
            (this.originalDestroy = null),
            (this.originalMask = null),
            (this.originalFilterArea = null),
            (this.originalContainsPoint = null),
            (this.sprite = null);
        }
    }
    Object.defineProperties(st.prototype, {
        cacheAsBitmapResolution: {
            get()
            {
                return this._cacheAsBitmapResolution;
            },
            set(e)
            {
                e !== this._cacheAsBitmapResolution
                    && ((this._cacheAsBitmapResolution = e),
                    this.cacheAsBitmap && ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
            },
        },
        cacheAsBitmapMultisample: {
            get()
            {
                return this._cacheAsBitmapMultisample;
            },
            set(e)
            {
                e !== this._cacheAsBitmapMultisample
                    && ((this._cacheAsBitmapMultisample = e),
                    this.cacheAsBitmap && ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
            },
        },
        cacheAsBitmap: {
            get()
            {
                return this._cacheAsBitmap;
            },
            set(e)
            {
                if (this._cacheAsBitmap === e) return;
                this._cacheAsBitmap = e;
                let t;

                e
                    ? (this._cacheData || (this._cacheData = new Qc()),
                    (t = this._cacheData),
                    (t.originalRender = this.render),
                    (t.originalRenderCanvas = this.renderCanvas),
                    (t.originalUpdateTransform = this.updateTransform),
                    (t.originalCalculateBounds = this.calculateBounds),
                    (t.originalGetLocalBounds = this.getLocalBounds),
                    (t.originalDestroy = this.destroy),
                    (t.originalContainsPoint = this.containsPoint),
                    (t.originalMask = this._mask),
                    (t.originalFilterArea = this.filterArea),
                    (this.render = this._renderCached),
                    (this.renderCanvas = this._renderCachedCanvas),
                    (this.destroy = this._cacheAsBitmapDestroy))
                    : ((t = this._cacheData),
                    t.sprite && this._destroyCachedDisplayObject(),
                    (this.render = t.originalRender),
                    (this.renderCanvas = t.originalRenderCanvas),
                    (this.calculateBounds = t.originalCalculateBounds),
                    (this.getLocalBounds = t.originalGetLocalBounds),
                    (this.destroy = t.originalDestroy),
                    (this.updateTransform = t.originalUpdateTransform),
                    (this.containsPoint = t.originalContainsPoint),
                    (this._mask = t.originalMask),
                    (this.filterArea = t.originalFilterArea));
            },
        },
    }),
    (st.prototype._renderCached = function (t)
    {
        !this.visible
                || this.worldAlpha <= 0
                || !this.renderable
                || (this._initCachedDisplayObject(t),
                (this._cacheData.sprite.transform._worldID = this.transform._worldID),
                (this._cacheData.sprite.worldAlpha = this.worldAlpha),
                this._cacheData.sprite._render(t));
    }),
    (st.prototype._initCachedDisplayObject = function (t)
    {
        let d; let f; let
            p;

        if ((d = this._cacheData) != null && d.sprite) return;
        const i = this.alpha;

        (this.alpha = 1), t.batch.flush();
        const s = this.getLocalBounds(null, !0).clone();

        if ((f = this.filters) != null && f.length)
        {
            const _ = this.filters[0].padding;

            s.pad(_);
        }
        s.ceil(P.RESOLUTION);
        const r = t.renderTexture.current;
        const n = t.renderTexture.sourceFrame.clone();
        const o = t.renderTexture.destinationFrame.clone();
        const a = t.projection.transform;
        const h = ge.create({
            width: s.width,
            height: s.height,
            resolution: this.cacheAsBitmapResolution || t.resolution,
            multisample: (p = this.cacheAsBitmapMultisample) != null ? p : t.multisample,
        });
        const l = `cacheAsBitmap_${Te()}`;

        (this._cacheData.textureCacheId = l), V.addToCache(h.baseTexture, l), B.addToCache(h, l);
        const c = this.transform.localTransform.copyTo(Ia).invert().translate(-s.x, -s.y);

        (this.render = this._cacheData.originalRender),
        t.render(this, { renderTexture: h, clear: !0, transform: c, skipUpdateTransform: !1 }),
        t.framebuffer.blit(),
        (t.projection.transform = a),
        t.renderTexture.bind(r, n, o),
        (this.render = this._renderCached),
        (this.updateTransform = this.displayObjectUpdateTransform),
        (this.calculateBounds = this._calculateCachedBounds),
        (this.getLocalBounds = this._getCachedLocalBounds),
        (this._mask = null),
        (this.filterArea = null),
        (this.alpha = i);
        const u = new ve(h);

        (u.transform.worldTransform = this.transform.worldTransform),
        (u.anchor.x = -(s.x / s.width)),
        (u.anchor.y = -(s.y / s.height)),
        (u.alpha = i),
        (u._bounds = this._bounds),
        (this._cacheData.sprite = u),
        (this.transform._parentID = -1),
        this.parent
            ? this.updateTransform()
            : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)),
        (this.containsPoint = u.containsPoint.bind(u));
    }),
    (st.prototype._renderCachedCanvas = function (t)
    {
        !this.visible
                || this.worldAlpha <= 0
                || !this.renderable
                || (this._initCachedDisplayObjectCanvas(t),
                (this._cacheData.sprite.worldAlpha = this.worldAlpha),
                this._cacheData.sprite._renderCanvas(t));
    }),
    (st.prototype._initCachedDisplayObjectCanvas = function (t)
    {
        let c;

        if ((c = this._cacheData) != null && c.sprite) return;
        const i = this.getLocalBounds(null, !0);
        const s = this.alpha;

        this.alpha = 1;
        const r = t.canvasContext.activeContext;
        const n = t._projTransform;

        i.ceil(P.RESOLUTION);
        const o = ge.create({ width: i.width, height: i.height });
        const a = `cacheAsBitmap_${Te()}`;

        (this._cacheData.textureCacheId = a), V.addToCache(o.baseTexture, a), B.addToCache(o, a);
        const h = Ia;

        this.transform.localTransform.copyTo(h),
        h.invert(),
        (h.tx -= i.x),
        (h.ty -= i.y),
        (this.renderCanvas = this._cacheData.originalRenderCanvas),
        t.render(this, { renderTexture: o, clear: !0, transform: h, skipUpdateTransform: !1 }),
        (t.canvasContext.activeContext = r),
        (t._projTransform = n),
        (this.renderCanvas = this._renderCachedCanvas),
        (this.updateTransform = this.displayObjectUpdateTransform),
        (this.calculateBounds = this._calculateCachedBounds),
        (this.getLocalBounds = this._getCachedLocalBounds),
        (this._mask = null),
        (this.filterArea = null),
        (this.alpha = s);
        const l = new ve(o);

        (l.transform.worldTransform = this.transform.worldTransform),
        (l.anchor.x = -(i.x / i.width)),
        (l.anchor.y = -(i.y / i.height)),
        (l.alpha = s),
        (l._bounds = this._bounds),
        (this._cacheData.sprite = l),
        (this.transform._parentID = -1),
        this.parent
            ? this.updateTransform()
            : ((this.parent = t._tempDisplayObjectParent), this.updateTransform(), (this.parent = null)),
        (this.containsPoint = l.containsPoint.bind(l));
    }),
    (st.prototype._calculateCachedBounds = function ()
    {
        this._bounds.clear(),
        (this._cacheData.sprite.transform._worldID = this.transform._worldID),
        this._cacheData.sprite._calculateBounds(),
        (this._bounds.updateID = this._boundsID);
    }),
    (st.prototype._getCachedLocalBounds = function ()
    {
        return this._cacheData.sprite.getLocalBounds(null);
    }),
    (st.prototype._destroyCachedDisplayObject = function ()
    {
        this._cacheData.sprite._texture.destroy(!0),
        (this._cacheData.sprite = null),
        V.removeFromCache(this._cacheData.textureCacheId),
        B.removeFromCache(this._cacheData.textureCacheId),
        (this._cacheData.textureCacheId = null);
    }),
    (st.prototype._cacheAsBitmapDestroy = function (t)
    {
        (this.cacheAsBitmap = !1), this.destroy(t);
    }),
    (st.prototype.name = null),
    (Ct.prototype.getChildByName = function (t, i)
    {
        for (let s = 0, r = this.children.length; s < r; s++) if (this.children[s].name === t) return this.children[s];
        if (i)
        {
            for (let s = 0, r = this.children.length; s < r; s++)
            {
                const n = this.children[s];

                if (!n.getChildByName) continue;
                const o = n.getChildByName(t, !0);

                if (o) return o;
            }
        }

        return null;
    }),
    (st.prototype.getGlobalPosition = function (t = new Y(), i = !1)
    {
        return (
            this.parent ? this.parent.toGlobal(this.position, t, i) : ((t.x = this.position.x), (t.y = this.position.y)),
            t
        );
    });
    const tu = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;

    class Pa extends gt
    {
        constructor(t = 1)
        {
            super(Sa, tu, { uAlpha: 1 }), (this.alpha = t);
        }
        get alpha()
        {
            return this.uniforms.uAlpha;
        }
        set alpha(t)
        {
            this.uniforms.uAlpha = t;
        }
    }
    const eu = {
        5: [0.153388, 0.221461, 0.250301],
        7: [0.071303, 0.131514, 0.189879, 0.214607],
        9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
        11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
        13: [0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
        15: [489e-6, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448],
    };
    const iu = [
        'varying vec2 vBlurTexCoords[%size%];',
        'uniform sampler2D uSampler;',
        'void main(void)',
        '{',
        '    gl_FragColor = vec4(0.0);',
        '    %blur%',
        '}',
    ].join(`
`);

    function su(e)
    {
        const t = eu[e];
        const i = t.length;
        let s = iu;
        let r = '';
        const n = 'gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;';
        let o;

        for (let a = 0; a < e; a++)
        {
            let h = n.replace('%index%', a.toString());

            (o = a),
            a >= i && (o = e - a - 1),
            (h = h.replace('%value%', t[o].toString())),
            (r += h),
            (r += `
`);
        }

        return (s = s.replace('%blur%', r)), (s = s.replace('%size%', e.toString())), s;
    }
    const ru = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;

    function nu(e, t)
    {
        const i = Math.ceil(e / 2);
        let s = ru;
        let r = '';
        let n;

        t
            ? (n = 'vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);')
            : (n = 'vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);');
        for (let o = 0; o < e; o++)
        {
            let a = n.replace('%index%', o.toString());

            (a = a.replace('%sampleIndex%', `${o - (i - 1)}.0`)),
            (r += a),
            (r += `
`);
        }

        return (s = s.replace('%blur%', r)), (s = s.replace('%size%', e.toString())), s;
    }
    class Ds extends gt
    {
        constructor(t, i = 8, s = 4, r = gt.defaultResolution, n = 5)
        {
            const o = nu(n, t);
            const a = su(n);

            super(o, a),
            (this.horizontal = t),
            (this.resolution = r),
            (this._quality = 0),
            (this.quality = s),
            (this.blur = i);
        }
        apply(t, i, s, r)
        {
            if (
                (s
                    ? this.horizontal
                        ? (this.uniforms.strength = (1 / s.width) * (s.width / i.width))
                        : (this.uniforms.strength = (1 / s.height) * (s.height / i.height))
                    : this.horizontal
                        ? (this.uniforms.strength = (1 / t.renderer.width) * (t.renderer.width / i.width))
                        : (this.uniforms.strength = (1 / t.renderer.height) * (t.renderer.height / i.height)),
                (this.uniforms.strength *= this.strength),
                (this.uniforms.strength /= this.passes),
                this.passes === 1)
            )
            { t.applyFilter(this, i, s, r); }
            else
            {
                const n = t.getFilterTexture();
                const o = t.renderer;
                let a = i;
                let h = n;

                (this.state.blend = !1), t.applyFilter(this, a, h, $t.CLEAR);
                for (let l = 1; l < this.passes - 1; l++)
                {
                    t.bindAndClear(a, $t.BLIT), (this.uniforms.uSampler = h);
                    const c = h;

                    (h = a), (a = c), o.shader.bind(this), o.geometry.draw(5);
                }
                (this.state.blend = !0), t.applyFilter(this, h, s, r), t.returnFilterTexture(n);
            }
        }
        get blur()
        {
            return this.strength;
        }
        set blur(t)
        {
            (this.padding = 1 + Math.abs(t) * 2), (this.strength = t);
        }
        get quality()
        {
            return this._quality;
        }
        set quality(t)
        {
            (this._quality = t), (this.passes = t);
        }
    }
    class Ma extends gt
    {
        constructor(t = 8, i = 4, s = gt.defaultResolution, r = 5)
        {
            super(),
            (this._repeatEdgePixels = !1),
            (this.blurXFilter = new Ds(!0, t, i, s, r)),
            (this.blurYFilter = new Ds(!1, t, i, s, r)),
            (this.resolution = s),
            (this.quality = i),
            (this.blur = t),
            (this.repeatEdgePixels = !1);
        }
        apply(t, i, s, r)
        {
            const n = Math.abs(this.blurXFilter.strength);
            const o = Math.abs(this.blurYFilter.strength);

            if (n && o)
            {
                const a = t.getFilterTexture();

                this.blurXFilter.apply(t, i, a, $t.CLEAR), this.blurYFilter.apply(t, a, s, r), t.returnFilterTexture(a);
            }
            else o ? this.blurYFilter.apply(t, i, s, r) : this.blurXFilter.apply(t, i, s, r);
        }
        updatePadding()
        {
            this._repeatEdgePixels
                ? (this.padding = 0)
                : (this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2);
        }
        get blur()
        {
            return this.blurXFilter.blur;
        }
        set blur(t)
        {
            (this.blurXFilter.blur = this.blurYFilter.blur = t), this.updatePadding();
        }
        get quality()
        {
            return this.blurXFilter.quality;
        }
        set quality(t)
        {
            this.blurXFilter.quality = this.blurYFilter.quality = t;
        }
        get blurX()
        {
            return this.blurXFilter.blur;
        }
        set blurX(t)
        {
            (this.blurXFilter.blur = t), this.updatePadding();
        }
        get blurY()
        {
            return this.blurYFilter.blur;
        }
        set blurY(t)
        {
            (this.blurYFilter.blur = t), this.updatePadding();
        }
        get blendMode()
        {
            return this.blurYFilter.blendMode;
        }
        set blendMode(t)
        {
            this.blurYFilter.blendMode = t;
        }
        get repeatEdgePixels()
        {
            return this._repeatEdgePixels;
        }
        set repeatEdgePixels(t)
        {
            (this._repeatEdgePixels = t), this.updatePadding();
        }
    }
    const ou = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;

    class Fs extends gt
    {
        constructor()
        {
            const t = { m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]), uAlpha: 1 };

            super(an, ou, t), (this.alpha = 1);
        }
        _loadMatrix(t, i = !1)
        {
            let s = t;

            i && (this._multiply(s, this.uniforms.m, t), (s = this._colorMatrix(s))), (this.uniforms.m = s);
        }
        _multiply(t, i, s)
        {
            return (
                (t[0] = i[0] * s[0] + i[1] * s[5] + i[2] * s[10] + i[3] * s[15]),
                (t[1] = i[0] * s[1] + i[1] * s[6] + i[2] * s[11] + i[3] * s[16]),
                (t[2] = i[0] * s[2] + i[1] * s[7] + i[2] * s[12] + i[3] * s[17]),
                (t[3] = i[0] * s[3] + i[1] * s[8] + i[2] * s[13] + i[3] * s[18]),
                (t[4] = i[0] * s[4] + i[1] * s[9] + i[2] * s[14] + i[3] * s[19] + i[4]),
                (t[5] = i[5] * s[0] + i[6] * s[5] + i[7] * s[10] + i[8] * s[15]),
                (t[6] = i[5] * s[1] + i[6] * s[6] + i[7] * s[11] + i[8] * s[16]),
                (t[7] = i[5] * s[2] + i[6] * s[7] + i[7] * s[12] + i[8] * s[17]),
                (t[8] = i[5] * s[3] + i[6] * s[8] + i[7] * s[13] + i[8] * s[18]),
                (t[9] = i[5] * s[4] + i[6] * s[9] + i[7] * s[14] + i[8] * s[19] + i[9]),
                (t[10] = i[10] * s[0] + i[11] * s[5] + i[12] * s[10] + i[13] * s[15]),
                (t[11] = i[10] * s[1] + i[11] * s[6] + i[12] * s[11] + i[13] * s[16]),
                (t[12] = i[10] * s[2] + i[11] * s[7] + i[12] * s[12] + i[13] * s[17]),
                (t[13] = i[10] * s[3] + i[11] * s[8] + i[12] * s[13] + i[13] * s[18]),
                (t[14] = i[10] * s[4] + i[11] * s[9] + i[12] * s[14] + i[13] * s[19] + i[14]),
                (t[15] = i[15] * s[0] + i[16] * s[5] + i[17] * s[10] + i[18] * s[15]),
                (t[16] = i[15] * s[1] + i[16] * s[6] + i[17] * s[11] + i[18] * s[16]),
                (t[17] = i[15] * s[2] + i[16] * s[7] + i[17] * s[12] + i[18] * s[17]),
                (t[18] = i[15] * s[3] + i[16] * s[8] + i[17] * s[13] + i[18] * s[18]),
                (t[19] = i[15] * s[4] + i[16] * s[9] + i[17] * s[14] + i[18] * s[19] + i[19]),
                t
            );
        }
        _colorMatrix(t)
        {
            const i = new Float32Array(t);

            return (i[4] /= 255), (i[9] /= 255), (i[14] /= 255), (i[19] /= 255), i;
        }
        brightness(t, i)
        {
            const s = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];

            this._loadMatrix(s, i);
        }
        tint(t, i)
        {
            const [s, r, n] = j.shared.setValue(t).toArray();
            const o = [s, 0, 0, 0, 0, 0, r, 0, 0, 0, 0, 0, n, 0, 0, 0, 0, 0, 1, 0];

            this._loadMatrix(o, i);
        }
        greyscale(t, i)
        {
            const s = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];

            this._loadMatrix(s, i);
        }
        blackAndWhite(t)
        {
            const i = [0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1, 0];

            this._loadMatrix(i, t);
        }
        hue(t, i)
        {
            t = ((t || 0) / 180) * Math.PI;
            const s = Math.cos(t);
            const r = Math.sin(t);
            const n = Math.sqrt;
            const o = 1 / 3;
            const a = n(o);
            const h = s + (1 - s) * o;
            const l = o * (1 - s) - a * r;
            const c = o * (1 - s) + a * r;
            const u = o * (1 - s) + a * r;
            const d = s + o * (1 - s);
            const f = o * (1 - s) - a * r;
            const p = o * (1 - s) - a * r;
            const _ = o * (1 - s) + a * r;
            const g = s + o * (1 - s);
            const v = [h, l, c, 0, 0, u, d, f, 0, 0, p, _, g, 0, 0, 0, 0, 0, 1, 0];

            this._loadMatrix(v, i);
        }
        contrast(t, i)
        {
            const s = (t || 0) + 1;
            const r = -0.5 * (s - 1);
            const n = [s, 0, 0, 0, r, 0, s, 0, 0, r, 0, 0, s, 0, r, 0, 0, 0, 1, 0];

            this._loadMatrix(n, i);
        }
        saturate(t = 0, i)
        {
            const s = (t * 2) / 3 + 1;
            const r = (s - 1) * -0.5;
            const n = [s, r, r, 0, 0, r, s, r, 0, 0, r, r, s, 0, 0, 0, 0, 0, 1, 0];

            this._loadMatrix(n, i);
        }
        desaturate()
        {
            this.saturate(-1);
        }
        negative(t)
        {
            const i = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];

            this._loadMatrix(i, t);
        }
        sepia(t)
        {
            const i = [
                0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0, 0.272, 0.5339999, 0.13099999, 0, 0,
                0, 0, 0, 1, 0,
            ];

            this._loadMatrix(i, t);
        }
        technicolor(t)
        {
            const i = [
                1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0, 11.793603434377337, -0.3087833385928097,
                1.7658908555458428, -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616, -0.7501899197440212,
                1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0,
            ];

            this._loadMatrix(i, t);
        }
        polaroid(t)
        {
            const i = [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0];

            this._loadMatrix(i, t);
        }
        toBGR(t)
        {
            const i = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];

            this._loadMatrix(i, t);
        }
        kodachrome(t)
        {
            const i = [
                1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502, -0.16404339962244616,
                1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763, -0.5603416277695248,
                1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0,
            ];

            this._loadMatrix(i, t);
        }
        browni(t)
        {
            const i = [
                0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0, 47.43192855600873, -0.037703249837783157,
                0.8609577587992641, 0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335, -0.07441037908422492,
                0.44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0,
            ];

            this._loadMatrix(i, t);
        }
        vintage(t)
        {
            const i = [
                0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0, 9.651285835294123, 0.02578397704808868,
                0.6441188644374771, 0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719, -0.0851232987247891,
                0.5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0,
            ];

            this._loadMatrix(i, t);
        }
        colorTone(t, i, s, r, n)
        {
            (t = t || 0.2), (i = i || 0.15), (s = s || 16770432), (r = r || 3375104);
            const o = j.shared;
            const [a, h, l] = o.setValue(s).toArray();
            const [c, u, d] = o.setValue(r).toArray();
            const f = [0.3, 0.59, 0.11, 0, 0, a, h, l, t, 0, c, u, d, i, 0, a - c, h - u, l - d, 0, 0];

            this._loadMatrix(f, n);
        }
        night(t, i)
        {
            t = t || 0.1;
            const s = [t * -2, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, t * 2, 0, 0, 0, 0, 0, 1, 0];

            this._loadMatrix(s, i);
        }
        predator(t, i)
        {
            const s = [
                11.224130630493164 * t,
                -4.794486999511719 * t,
                -2.8746118545532227 * t,
                0 * t,
                0.40342438220977783 * t,
                -3.6330697536468506 * t,
                9.193157196044922 * t,
                -2.951810836791992 * t,
                0 * t,
                -1.316135048866272 * t,
                -3.2184197902679443 * t,
                -4.2375030517578125 * t,
                7.476448059082031 * t,
                0 * t,
                0.8044459223747253 * t,
                0,
                0,
                0,
                1,
                0,
            ];

            this._loadMatrix(s, i);
        }
        lsd(t)
        {
            const i = [2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0, 1, 0];

            this._loadMatrix(i, t);
        }
        reset()
        {
            const t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

            this._loadMatrix(t, !1);
        }
        get matrix()
        {
            return this.uniforms.m;
        }
        set matrix(t)
        {
            this.uniforms.m = t;
        }
        get alpha()
        {
            return this.uniforms.uAlpha;
        }
        set alpha(t)
        {
            this.uniforms.uAlpha = t;
        }
    }
    Fs.prototype.grayscale = Fs.prototype.greyscale;
    const au = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`;
    const hu = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;

    class Ba extends gt
    {
        constructor(t, i)
        {
            const s = new tt();

            (t.renderable = !1),
            super(hu, au, {
                mapSampler: t._texture,
                filterMatrix: s,
                scale: { x: 1, y: 1 },
                rotation: new Float32Array([1, 0, 0, 1]),
            }),
            (this.maskSprite = t),
            (this.maskMatrix = s),
            i == null && (i = 20),
            (this.scale = new Y(i, i));
        }
        apply(t, i, s, r)
        {
            (this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite)),
            (this.uniforms.scale.x = this.scale.x),
            (this.uniforms.scale.y = this.scale.y);
            const n = this.maskSprite.worldTransform;
            const o = Math.sqrt(n.a * n.a + n.b * n.b);
            const a = Math.sqrt(n.c * n.c + n.d * n.d);

            o !== 0
                && a !== 0
                && ((this.uniforms.rotation[0] = n.a / o),
                (this.uniforms.rotation[1] = n.b / o),
                (this.uniforms.rotation[2] = n.c / a),
                (this.uniforms.rotation[3] = n.d / a)),
            t.applyFilter(this, i, s, r);
        }
        get map()
        {
            return this.uniforms.mapSampler;
        }
        set map(t)
        {
            this.uniforms.mapSampler = t;
        }
    }
    const lu = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`;
    const cu = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;

    class Da extends gt
    {
        constructor()
        {
            super(cu, lu);
        }
    }
    const uu = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;

    class Fa extends gt
    {
        constructor(t = 0.5, i = Math.random())
        {
            super(an, uu, { uNoise: 0, uSeed: 0 }), (this.noise = t), (this.seed = i);
        }
        get noise()
        {
            return this.uniforms.uNoise;
        }
        set noise(t)
        {
            this.uniforms.uNoise = t;
        }
        get seed()
        {
            return this.uniforms.uSeed;
        }
        set seed(t)
        {
            this.uniforms.uSeed = t;
        }
    }
    const _n = {
        AlphaFilter: Pa,
        BlurFilter: Ma,
        BlurFilterPass: Ds,
        ColorMatrixFilter: Fs,
        DisplacementFilter: Ba,
        FXAAFilter: Da,
        NoiseFilter: Fa,
    };

    Object.entries(_n).forEach(([e, t]) =>
    {
        Object.defineProperty(_n, e, {
            get()
            {
                return t;
            },
        });
    });
    class du
    {
        constructor()
        {
            (this.interactionFrequency = 10),
            (this._deltaTime = 0),
            (this._didMove = !1),
            (this.tickerAdded = !1),
            (this._pauseUpdate = !0);
        }
        init(t)
        {
            this.removeTickerListener(),
            (this.events = t),
            (this.interactionFrequency = 10),
            (this._deltaTime = 0),
            (this._didMove = !1),
            (this.tickerAdded = !1),
            (this._pauseUpdate = !0);
        }
        get pauseUpdate()
        {
            return this._pauseUpdate;
        }
        set pauseUpdate(t)
        {
            this._pauseUpdate = t;
        }
        addTickerListener()
        {
            this.tickerAdded
                || !this.domElement
                || (lt.system.add(this.tickerUpdate, this, ye.INTERACTION), (this.tickerAdded = !0));
        }
        removeTickerListener()
        {
            !this.tickerAdded || (lt.system.remove(this.tickerUpdate, this), (this.tickerAdded = !1));
        }
        pointerMoved()
        {
            this._didMove = !0;
        }
        update()
        {
            if (!this.domElement || this._pauseUpdate) return;
            if (this._didMove)
            {
                this._didMove = !1;

                return;
            }
            const t = this.events.rootPointerEvent;

            (this.events.supportsTouchEvents && t.pointerType === 'touch')
                || globalThis.document.dispatchEvent(
                    new PointerEvent('pointermove', { clientX: t.clientX, clientY: t.clientY }),
                );
        }
        tickerUpdate(t)
        {
            (this._deltaTime += t), !(this._deltaTime < this.interactionFrequency) && ((this._deltaTime = 0), this.update());
        }
    }
    const Ue = new du();

    class Qe
    {
        constructor(t)
        {
            (this.bubbles = !0),
            (this.cancelBubble = !0),
            (this.cancelable = !1),
            (this.composed = !1),
            (this.defaultPrevented = !1),
            (this.eventPhase = Qe.prototype.NONE),
            (this.propagationStopped = !1),
            (this.propagationImmediatelyStopped = !1),
            (this.layer = new Y()),
            (this.page = new Y()),
            (this.AT_TARGET = 1),
            (this.BUBBLING_PHASE = 2),
            (this.CAPTURING_PHASE = 3),
            (this.NONE = 0),
            (this.manager = t);
        }
        get layerX()
        {
            return this.layer.x;
        }
        get layerY()
        {
            return this.layer.y;
        }
        get pageX()
        {
            return this.page.x;
        }
        get pageY()
        {
            return this.page.y;
        }
        get data()
        {
            return this;
        }
        composedPath()
        {
            return (
                this.manager
                    && (!this.path || this.path[this.path.length - 1] !== this.target)
                    && (this.path = this.target ? this.manager.propagationPath(this.target) : []),
                this.path
            );
        }
        initEvent(t, i, s)
        {
            throw new Error('initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.');
        }
        initUIEvent(t, i, s, r, n)
        {
            throw new Error('initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.');
        }
        preventDefault()
        {
            this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(),
            (this.defaultPrevented = !0);
        }
        stopImmediatePropagation()
        {
            this.propagationImmediatelyStopped = !0;
        }
        stopPropagation()
        {
            this.propagationStopped = !0;
        }
    }
    class Mi extends Qe
    {
        constructor()
        {
            super(...arguments),
            (this.client = new Y()),
            (this.movement = new Y()),
            (this.offset = new Y()),
            (this.global = new Y()),
            (this.screen = new Y());
        }
        get clientX()
        {
            return this.client.x;
        }
        get clientY()
        {
            return this.client.y;
        }
        get x()
        {
            return this.clientX;
        }
        get y()
        {
            return this.clientY;
        }
        get movementX()
        {
            return this.movement.x;
        }
        get movementY()
        {
            return this.movement.y;
        }
        get offsetX()
        {
            return this.offset.x;
        }
        get offsetY()
        {
            return this.offset.y;
        }
        get globalX()
        {
            return this.global.x;
        }
        get globalY()
        {
            return this.global.y;
        }
        get screenX()
        {
            return this.screen.x;
        }
        get screenY()
        {
            return this.screen.y;
        }
        getLocalPosition(t, i, s)
        {
            return t.worldTransform.applyInverse(s || this.global, i);
        }
        getModifierState(t)
        {
            return 'getModifierState' in this.nativeEvent && this.nativeEvent.getModifierState(t);
        }
        initMouseEvent(t, i, s, r, n, o, a, h, l, c, u, d, f, p, _)
        {
            throw new Error('Method not implemented.');
        }
    }
    class Xt extends Mi
    {
        constructor()
        {
            super(...arguments), (this.width = 0), (this.height = 0), (this.isPrimary = !1);
        }
        getCoalescedEvents()
        {
            return this.type === 'pointermove' || this.type === 'mousemove' || this.type === 'touchmove' ? [this] : [];
        }
        getPredictedEvents()
        {
            throw new Error('getPredictedEvents is not supported!');
        }
    }
    class ke extends Mi
    {
        constructor()
        {
            super(...arguments), (this.DOM_DELTA_PIXEL = 0), (this.DOM_DELTA_LINE = 1), (this.DOM_DELTA_PAGE = 2);
        }
    }
    (ke.DOM_DELTA_PIXEL = 0), (ke.DOM_DELTA_LINE = 1), (ke.DOM_DELTA_PAGE = 2);
    const fu = 2048;
    const pu = new Y();
    const gn = new Y();

    class Na
    {
        constructor(t)
        {
            (this.dispatch = new Ve()),
            (this.moveOnAll = !1),
            (this.enableGlobalMoveEvents = !0),
            (this.mappingState = { trackingData: {} }),
            (this.eventPool = new Map()),
            (this._allInteractiveElements = []),
            (this._hitElements = []),
            (this._collectInteractiveElements = !1),
            (this.rootTarget = t),
            (this.hitPruneFn = this.hitPruneFn.bind(this)),
            (this.hitTestFn = this.hitTestFn.bind(this)),
            (this.mapPointerDown = this.mapPointerDown.bind(this)),
            (this.mapPointerMove = this.mapPointerMove.bind(this)),
            (this.mapPointerOut = this.mapPointerOut.bind(this)),
            (this.mapPointerOver = this.mapPointerOver.bind(this)),
            (this.mapPointerUp = this.mapPointerUp.bind(this)),
            (this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this)),
            (this.mapWheel = this.mapWheel.bind(this)),
            (this.mappingTable = {}),
            this.addEventMapping('pointerdown', this.mapPointerDown),
            this.addEventMapping('pointermove', this.mapPointerMove),
            this.addEventMapping('pointerout', this.mapPointerOut),
            this.addEventMapping('pointerleave', this.mapPointerOut),
            this.addEventMapping('pointerover', this.mapPointerOver),
            this.addEventMapping('pointerup', this.mapPointerUp),
            this.addEventMapping('pointerupoutside', this.mapPointerUpOutside),
            this.addEventMapping('wheel', this.mapWheel);
        }
        addEventMapping(t, i)
        {
            this.mappingTable[t] || (this.mappingTable[t] = []),
            this.mappingTable[t].push({ fn: i, priority: 0 }),
            this.mappingTable[t].sort((s, r) => s.priority - r.priority);
        }
        dispatchEvent(t, i)
        {
            (t.propagationStopped = !1),
            (t.propagationImmediatelyStopped = !1),
            this.propagate(t, i),
            this.dispatch.emit(i || t.type, t);
        }
        mapEvent(t)
        {
            if (!this.rootTarget) return;
            const i = this.mappingTable[t.type];

            if (i) for (let s = 0, r = i.length; s < r; s++) i[s].fn(t);
            else console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`);
        }
        hitTest(t, i)
        {
            Ue.pauseUpdate = !0;
            const s = this.hitTestRecursive(
                this.rootTarget,
                this.rootTarget.eventMode,
                pu.set(t, i),
                this.hitTestFn,
                this.hitPruneFn,
            );

            return s && s[0];
        }
        propagate(t, i)
        {
            if (!t.target) return;
            const s = t.composedPath();

            t.eventPhase = t.CAPTURING_PHASE;
            for (let r = 0, n = s.length - 1; r < n; r++)
            {
                if (
                    ((t.currentTarget = s[r]),
                    this.notifyTarget(t, i),
                    t.propagationStopped || t.propagationImmediatelyStopped)
                )
                { return; }
            }
            if (
                ((t.eventPhase = t.AT_TARGET),
                (t.currentTarget = t.target),
                this.notifyTarget(t, i),
                !(t.propagationStopped || t.propagationImmediatelyStopped))
            )
            {
                t.eventPhase = t.BUBBLING_PHASE;
                for (let r = s.length - 2; r >= 0; r--)
                {
                    if (
                        ((t.currentTarget = s[r]),
                        this.notifyTarget(t, i),
                        t.propagationStopped || t.propagationImmediatelyStopped)
                    )
                    { return; }
                }
            }
        }
        all(t, i, s = this._allInteractiveElements)
        {
            if (s.length === 0) return;
            t.eventPhase = t.BUBBLING_PHASE;
            const r = Array.isArray(i) ? i : [i];

            for (let n = s.length - 1; n >= 0; n--)
            {
                r.forEach((o) =>
                {
                    (t.currentTarget = s[n]), this.notifyTarget(t, o);
                });
            }
        }
        propagationPath(t)
        {
            const i = [t];

            for (let s = 0; s < fu && t !== this.rootTarget; s++)
            {
                if (!t.parent) throw new Error('Cannot find propagation path to disconnected target');
                i.push(t.parent), (t = t.parent);
            }

            return i.reverse(), i;
        }
        hitTestRecursive(t, i, s, r, n)
        {
            if (n(t, s)) return null;
            if (
                ((t.eventMode === 'dynamic' || i === 'dynamic') && (Ue.pauseUpdate = !1),
                t.interactiveChildren && t.children)
            )
            {
                const h = t.children;

                for (let l = h.length - 1; l >= 0; l--)
                {
                    const c = h[l];
                    const u = this.hitTestRecursive(c, this._isInteractive(i) ? i : c.eventMode, s, r, n);

                    if (u)
                    {
                        if (u.length > 0 && !u[u.length - 1].parent) continue;
                        const d = t.isInteractive();

                        if (
                            ((u.length > 0 || d)
                                && (this._collectInteractiveElements && d && this._allInteractiveElements.push(t), u.push(t)),
                            this._collectInteractiveElements && this._hitElements.length === 0 && (this._hitElements = u),
                            !this._collectInteractiveElements)
                        )
                        { return u; }
                    }
                }
            }
            const o = this._isInteractive(i);
            const a = t.isInteractive();

            return this._collectInteractiveElements
                && (o && a && this._allInteractiveElements.push(t), this._hitElements.length > 0)
                ? null
                : o && r(t, s)
                    ? a
                        ? [t]
                        : []
                    : null;
        }
        _isInteractive(t)
        {
            return t === 'static' || t === 'dynamic';
        }
        hitPruneFn(t, i)
        {
            let s;

            if (
                !t
                || t.isMask
                || !t.visible
                || !t.renderable
                || t.eventMode === 'none'
                || (t.eventMode === 'passive' && !t.interactiveChildren)
                || t.isMask
            )
            { return !0; }
            if (this._collectInteractiveElements && this._hitElements.length > 0) return !1;
            if (t.hitArea && (t.worldTransform.applyInverse(i, gn), !t.hitArea.contains(gn.x, gn.y))) return !0;
            if (t._mask)
            {
                const r = t._mask.isMaskData ? t._mask.maskObject : t._mask;

                if (r && !((s = r.containsPoint) != null && s.call(r, i))) return !0;
            }

            return !1;
        }
        hitTestFn(t, i)
        {
            return t.eventMode === 'passive' ? !1 : t.hitArea ? !0 : t.containsPoint ? t.containsPoint(i) : !1;
        }
        notifyTarget(t, i)
        {
            let n; let
                o;

            i = i != null ? i : t.type;
            const s = `on${i}`;

            (o = (n = t.currentTarget)[s]) == null || o.call(n, t);
            const r = t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET ? `${i}capture` : i;

            this.notifyListeners(t, r), t.eventPhase === t.AT_TARGET && this.notifyListeners(t, i);
        }
        mapPointerDown(t)
        {
            if (!(t instanceof Xt))
            {
                console.warn('EventBoundary cannot map a non-pointer event as a pointer event');

                return;
            }
            const i = this.createPointerEvent(t);

            if ((this.dispatchEvent(i, 'pointerdown'), i.pointerType === 'touch')) this.dispatchEvent(i, 'touchstart');
            else if (i.pointerType === 'mouse' || i.pointerType === 'pen')
            {
                const r = i.button === 2;

                this.dispatchEvent(i, r ? 'rightdown' : 'mousedown');
            }
            const s = this.trackingData(t.pointerId);

            (s.pressTargetsByButton[t.button] = i.composedPath()), this.freeEvent(i);
        }
        mapPointerMove(t)
        {
            let h; let l; let
                c;

            if (!(t instanceof Xt))
            {
                console.warn('EventBoundary cannot map a non-pointer event as a pointer event');

                return;
            }
            (this._allInteractiveElements.length = 0),
            (this._hitElements.length = 0),
            (this._collectInteractiveElements = !0);
            const i = this.createPointerEvent(t);

            this._collectInteractiveElements = !1;
            const s = i.pointerType === 'mouse' || i.pointerType === 'pen';
            const r = this.trackingData(t.pointerId);
            const n = this.findMountedTarget(r.overTargets);

            if (((h = r.overTargets) == null ? void 0 : h.length) > 0 && n !== i.target)
            {
                const u = t.type === 'mousemove' ? 'mouseout' : 'pointerout';
                const d = this.createPointerEvent(t, u, n);

                if (
                    (this.dispatchEvent(d, 'pointerout'),
                    s && this.dispatchEvent(d, 'mouseout'),
                    !i.composedPath().includes(n))
                )
                {
                    const f = this.createPointerEvent(t, 'pointerleave', n);

                    for (f.eventPhase = f.AT_TARGET; f.target && !i.composedPath().includes(f.target);)
                    {
                        (f.currentTarget = f.target),
                        this.notifyTarget(f),
                        s && this.notifyTarget(f, 'mouseleave'),
                        (f.target = f.target.parent);
                    }
                    this.freeEvent(f);
                }
                this.freeEvent(d);
            }
            if (n !== i.target)
            {
                const u = t.type === 'mousemove' ? 'mouseover' : 'pointerover';
                const d = this.clonePointerEvent(i, u);

                this.dispatchEvent(d, 'pointerover'), s && this.dispatchEvent(d, 'mouseover');
                let f = n == null ? void 0 : n.parent;

                for (; f && f !== this.rootTarget.parent && f !== i.target;) f = f.parent;
                if (!f || f === this.rootTarget.parent)
                {
                    const _ = this.clonePointerEvent(i, 'pointerenter');

                    for (_.eventPhase = _.AT_TARGET; _.target && _.target !== n && _.target !== this.rootTarget.parent;)
                    {
                        (_.currentTarget = _.target),
                        this.notifyTarget(_),
                        s && this.notifyTarget(_, 'mouseenter'),
                        (_.target = _.target.parent);
                    }
                    this.freeEvent(_);
                }
                this.freeEvent(d);
            }
            const o = [];
            const a = (l = this.enableGlobalMoveEvents) != null ? l : !0;

            this.moveOnAll ? o.push('pointermove') : this.dispatchEvent(i, 'pointermove'),
            a && o.push('globalpointermove'),
            i.pointerType === 'touch'
                    && (this.moveOnAll ? o.splice(1, 0, 'touchmove') : this.dispatchEvent(i, 'touchmove'),
                    a && o.push('globaltouchmove')),
            s
                    && (this.moveOnAll ? o.splice(1, 0, 'mousemove') : this.dispatchEvent(i, 'mousemove'),
                    a && o.push('globalmousemove'),
                    (this.cursor = (c = i.target) == null ? void 0 : c.cursor)),
            o.length > 0 && this.all(i, o),
            (this._allInteractiveElements.length = 0),
            (this._hitElements.length = 0),
            (r.overTargets = i.composedPath()),
            this.freeEvent(i);
        }
        mapPointerOver(t)
        {
            let o;

            if (!(t instanceof Xt))
            {
                console.warn('EventBoundary cannot map a non-pointer event as a pointer event');

                return;
            }
            const i = this.trackingData(t.pointerId);
            const s = this.createPointerEvent(t);
            const r = s.pointerType === 'mouse' || s.pointerType === 'pen';

            this.dispatchEvent(s, 'pointerover'),
            r && this.dispatchEvent(s, 'mouseover'),
            s.pointerType === 'mouse' && (this.cursor = (o = s.target) == null ? void 0 : o.cursor);
            const n = this.clonePointerEvent(s, 'pointerenter');

            for (n.eventPhase = n.AT_TARGET; n.target && n.target !== this.rootTarget.parent;)
            {
                (n.currentTarget = n.target),
                this.notifyTarget(n),
                r && this.notifyTarget(n, 'mouseenter'),
                (n.target = n.target.parent);
            }
            (i.overTargets = s.composedPath()), this.freeEvent(s), this.freeEvent(n);
        }
        mapPointerOut(t)
        {
            if (!(t instanceof Xt))
            {
                console.warn('EventBoundary cannot map a non-pointer event as a pointer event');

                return;
            }
            const i = this.trackingData(t.pointerId);

            if (i.overTargets)
            {
                const s = t.pointerType === 'mouse' || t.pointerType === 'pen';
                const r = this.findMountedTarget(i.overTargets);
                const n = this.createPointerEvent(t, 'pointerout', r);

                this.dispatchEvent(n), s && this.dispatchEvent(n, 'mouseout');
                const o = this.createPointerEvent(t, 'pointerleave', r);

                for (o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent;)
                {
                    (o.currentTarget = o.target),
                    this.notifyTarget(o),
                    s && this.notifyTarget(o, 'mouseleave'),
                    (o.target = o.target.parent);
                }
                (i.overTargets = null), this.freeEvent(n), this.freeEvent(o);
            }
            this.cursor = null;
        }
        mapPointerUp(t)
        {
            if (!(t instanceof Xt))
            {
                console.warn('EventBoundary cannot map a non-pointer event as a pointer event');

                return;
            }
            const i = performance.now();
            const s = this.createPointerEvent(t);

            if ((this.dispatchEvent(s, 'pointerup'), s.pointerType === 'touch')) this.dispatchEvent(s, 'touchend');
            else if (s.pointerType === 'mouse' || s.pointerType === 'pen')
            {
                const a = s.button === 2;

                this.dispatchEvent(s, a ? 'rightup' : 'mouseup');
            }
            const r = this.trackingData(t.pointerId);
            const n = this.findMountedTarget(r.pressTargetsByButton[t.button]);
            let o = n;

            if (n && !s.composedPath().includes(n))
            {
                let a = n;

                for (; a && !s.composedPath().includes(a);)
                {
                    if (((s.currentTarget = a), this.notifyTarget(s, 'pointerupoutside'), s.pointerType === 'touch'))
                    { this.notifyTarget(s, 'touchendoutside'); }
                    else if (s.pointerType === 'mouse' || s.pointerType === 'pen')
                    {
                        const h = s.button === 2;

                        this.notifyTarget(s, h ? 'rightupoutside' : 'mouseupoutside');
                    }
                    a = a.parent;
                }
                delete r.pressTargetsByButton[t.button], (o = a);
            }
            if (o)
            {
                const a = this.clonePointerEvent(s, 'click');

                (a.target = o),
                (a.path = null),
                r.clicksByButton[t.button]
                        || (r.clicksByButton[t.button] = { clickCount: 0, target: a.target, timeStamp: i });
                const h = r.clicksByButton[t.button];

                if (
                    (h.target === a.target && i - h.timeStamp < 200 ? ++h.clickCount : (h.clickCount = 1),
                    (h.target = a.target),
                    (h.timeStamp = i),
                    (a.detail = h.clickCount),
                    a.pointerType === 'mouse')
                )
                {
                    const l = a.button === 2;

                    this.dispatchEvent(a, l ? 'rightclick' : 'click');
                }
                else a.pointerType === 'touch' && this.dispatchEvent(a, 'tap');
                this.dispatchEvent(a, 'pointertap'), this.freeEvent(a);
            }
            this.freeEvent(s);
        }
        mapPointerUpOutside(t)
        {
            if (!(t instanceof Xt))
            {
                console.warn('EventBoundary cannot map a non-pointer event as a pointer event');

                return;
            }
            const i = this.trackingData(t.pointerId);
            const s = this.findMountedTarget(i.pressTargetsByButton[t.button]);
            const r = this.createPointerEvent(t);

            if (s)
            {
                let n = s;

                for (; n;)
                {
                    (r.currentTarget = n),
                    this.notifyTarget(r, 'pointerupoutside'),
                    r.pointerType === 'touch'
                        ? this.notifyTarget(r, 'touchendoutside')
                        : (r.pointerType === 'mouse' || r.pointerType === 'pen')
                              && this.notifyTarget(r, r.button === 2 ? 'rightupoutside' : 'mouseupoutside'),
                    (n = n.parent);
                }
                delete i.pressTargetsByButton[t.button];
            }
            this.freeEvent(r);
        }
        mapWheel(t)
        {
            if (!(t instanceof ke))
            {
                console.warn('EventBoundary cannot map a non-wheel event as a wheel event');

                return;
            }
            const i = this.createWheelEvent(t);

            this.dispatchEvent(i), this.freeEvent(i);
        }
        findMountedTarget(t)
        {
            if (!t) return null;
            let i = t[0];

            for (let s = 1; s < t.length && t[s].parent === i; s++) i = t[s];

            return i;
        }
        createPointerEvent(t, i, s)
        {
            let n;
            const r = this.allocateEvent(Xt);

            return (
                this.copyPointerData(t, r),
                this.copyMouseData(t, r),
                this.copyData(t, r),
                (r.nativeEvent = t.nativeEvent),
                (r.originalEvent = t),
                (r.target = (n = s != null ? s : this.hitTest(r.global.x, r.global.y)) != null ? n : this._hitElements[0]),
                typeof i === 'string' && (r.type = i),
                r
            );
        }
        createWheelEvent(t)
        {
            const i = this.allocateEvent(ke);

            return (
                this.copyWheelData(t, i),
                this.copyMouseData(t, i),
                this.copyData(t, i),
                (i.nativeEvent = t.nativeEvent),
                (i.originalEvent = t),
                (i.target = this.hitTest(i.global.x, i.global.y)),
                i
            );
        }
        clonePointerEvent(t, i)
        {
            const s = this.allocateEvent(Xt);

            return (
                (s.nativeEvent = t.nativeEvent),
                (s.originalEvent = t.originalEvent),
                this.copyPointerData(t, s),
                this.copyMouseData(t, s),
                this.copyData(t, s),
                (s.target = t.target),
                (s.path = t.composedPath().slice()),
                (s.type = i != null ? i : s.type),
                s
            );
        }
        copyWheelData(t, i)
        {
            (i.deltaMode = t.deltaMode), (i.deltaX = t.deltaX), (i.deltaY = t.deltaY), (i.deltaZ = t.deltaZ);
        }
        copyPointerData(t, i)
        {
            t instanceof Xt
                && i instanceof Xt
                && ((i.pointerId = t.pointerId),
                (i.width = t.width),
                (i.height = t.height),
                (i.isPrimary = t.isPrimary),
                (i.pointerType = t.pointerType),
                (i.pressure = t.pressure),
                (i.tangentialPressure = t.tangentialPressure),
                (i.tiltX = t.tiltX),
                (i.tiltY = t.tiltY),
                (i.twist = t.twist));
        }
        copyMouseData(t, i)
        {
            t instanceof Mi
                && i instanceof Mi
                && ((i.altKey = t.altKey),
                (i.button = t.button),
                (i.buttons = t.buttons),
                i.client.copyFrom(t.client),
                (i.ctrlKey = t.ctrlKey),
                (i.metaKey = t.metaKey),
                i.movement.copyFrom(t.movement),
                i.screen.copyFrom(t.screen),
                (i.shiftKey = t.shiftKey),
                i.global.copyFrom(t.global));
        }
        copyData(t, i)
        {
            (i.isTrusted = t.isTrusted),
            (i.srcElement = t.srcElement),
            (i.timeStamp = performance.now()),
            (i.type = t.type),
            (i.detail = t.detail),
            (i.view = t.view),
            (i.which = t.which),
            i.layer.copyFrom(t.layer),
            i.page.copyFrom(t.page);
        }
        trackingData(t)
        {
            return (
                this.mappingState.trackingData[t]
                    || (this.mappingState.trackingData[t] = { pressTargetsByButton: {}, clicksByButton: {}, overTarget: null }),
                this.mappingState.trackingData[t]
            );
        }
        allocateEvent(t)
        {
            this.eventPool.has(t) || this.eventPool.set(t, []);
            const i = this.eventPool.get(t).pop() || new t(this);

            return (i.eventPhase = i.NONE), (i.currentTarget = null), (i.path = null), (i.target = null), i;
        }
        freeEvent(t)
        {
            if (t.manager !== this) throw new Error('It is illegal to free an event not managed by this EventBoundary!');
            const i = t.constructor;

            this.eventPool.has(i) || this.eventPool.set(i, []), this.eventPool.get(i).push(t);
        }
        notifyListeners(t, i)
        {
            const s = t.currentTarget._events[i];

            if (!!s && !!t.currentTarget.isInteractive())
            {
                if ('fn' in s) s.once && t.currentTarget.removeListener(i, s.fn, void 0, !0), s.fn.call(s.context, t);
                else
                {
                    for (let r = 0, n = s.length; r < n && !t.propagationImmediatelyStopped; r++)
                    { s[r].once && t.currentTarget.removeListener(i, s[r].fn, void 0, !0), s[r].fn.call(s[r].context, t); }
                }
            }
        }
    }
    const mu = 1;
    const _u = {
        touchstart: 'pointerdown',
        touchend: 'pointerup',
        touchendoutside: 'pointerupoutside',
        touchmove: 'pointermove',
        touchcancel: 'pointercancel',
    };
    const yn = class
    {
        constructor(e)
        {
            (this.supportsTouchEvents = 'ontouchstart' in globalThis),
            (this.supportsPointerEvents = !!globalThis.PointerEvent),
            (this.domElement = null),
            (this.resolution = 1),
            (this.renderer = e),
            (this.rootBoundary = new Na(null)),
            Ue.init(this),
            (this.autoPreventDefault = !0),
            (this.eventsAdded = !1),
            (this.rootPointerEvent = new Xt(null)),
            (this.rootWheelEvent = new ke(null)),
            (this.cursorStyles = { default: 'inherit', pointer: 'pointer' }),
            (this.features = new Proxy(Et({}, yn.defaultEventFeatures), {
                set: (t, i, s) => (
                    i === 'globalMove' && (this.rootBoundary.enableGlobalMoveEvents = s), (t[i] = s), !0
                ),
            })),
            (this.onPointerDown = this.onPointerDown.bind(this)),
            (this.onPointerMove = this.onPointerMove.bind(this)),
            (this.onPointerUp = this.onPointerUp.bind(this)),
            (this.onPointerOverOut = this.onPointerOverOut.bind(this)),
            (this.onWheel = this.onWheel.bind(this));
        }
        static get defaultEventMode()
        {
            return this._defaultEventMode;
        }
        init(e)
        {
            let s; let
                r;
            const { view: t, resolution: i } = this.renderer;

            this.setTargetElement(t),
            (this.resolution = i),
            (yn._defaultEventMode = (s = e.eventMode) != null ? s : 'auto'),
            Object.assign(this.features, (r = e.eventFeatures) != null ? r : {}),
            (this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove);
        }
        resolutionChange(e)
        {
            this.resolution = e;
        }
        destroy()
        {
            this.setTargetElement(null), (this.renderer = null);
        }
        setCursor(e)
        {
            e = e || 'default';
            let t = !0;

            if (
                (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (t = !1),
                this.currentCursor === e)
            )
            { return; }
            this.currentCursor = e;
            const i = this.cursorStyles[e];

            if (i)
            {
                switch (typeof i)
                {
                    case 'string':
                        t && (this.domElement.style.cursor = i);
                        break;
                    case 'function':
                        i(e);
                        break;
                    case 'object':
                        t && Object.assign(this.domElement.style, i);
                        break;
                }
            }
            else
            {
                t
                        && typeof e === 'string'
                        && !Object.prototype.hasOwnProperty.call(this.cursorStyles, e)
                        && (this.domElement.style.cursor = e);
            }
        }
        get pointer()
        {
            return this.rootPointerEvent;
        }
        onPointerDown(e)
        {
            if (
                !this.features.click
                    || ((this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
                    this.supportsTouchEvents && e.pointerType === 'touch')
            )
            { return; }
            const t = this.normalizeToPointerData(e);

            this.autoPreventDefault && t[0].isNormalized && (e.cancelable || !('cancelable' in e)) && e.preventDefault();
            for (let i = 0, s = t.length; i < s; i++)
            {
                const r = t[i];
                const n = this.bootstrapEvent(this.rootPointerEvent, r);

                this.rootBoundary.mapEvent(n);
            }
            this.setCursor(this.rootBoundary.cursor);
        }
        onPointerMove(e)
        {
            if (
                !this.features.move
                    || ((this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
                    this.supportsTouchEvents && e.pointerType === 'touch')
            )
            { return; }
            Ue.pointerMoved();
            const t = this.normalizeToPointerData(e);

            for (let i = 0, s = t.length; i < s; i++)
            {
                const r = this.bootstrapEvent(this.rootPointerEvent, t[i]);

                this.rootBoundary.mapEvent(r);
            }
            this.setCursor(this.rootBoundary.cursor);
        }
        onPointerUp(e)
        {
            if (
                !this.features.click
                    || ((this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
                    this.supportsTouchEvents && e.pointerType === 'touch')
            )
            { return; }
            let t = e.target;

            e.composedPath && e.composedPath().length > 0 && (t = e.composedPath()[0]);
            const i = t !== this.domElement ? 'outside' : '';
            const s = this.normalizeToPointerData(e);

            for (let r = 0, n = s.length; r < n; r++)
            {
                const o = this.bootstrapEvent(this.rootPointerEvent, s[r]);

                (o.type += i), this.rootBoundary.mapEvent(o);
            }
            this.setCursor(this.rootBoundary.cursor);
        }
        onPointerOverOut(e)
        {
            if (
                !this.features.click
                    || ((this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
                    this.supportsTouchEvents && e.pointerType === 'touch')
            )
            { return; }
            const t = this.normalizeToPointerData(e);

            for (let i = 0, s = t.length; i < s; i++)
            {
                const r = this.bootstrapEvent(this.rootPointerEvent, t[i]);

                this.rootBoundary.mapEvent(r);
            }
            this.setCursor(this.rootBoundary.cursor);
        }
        onWheel(e)
        {
            if (!this.features.wheel) return;
            const t = this.normalizeWheelEvent(e);

            (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered), this.rootBoundary.mapEvent(t);
        }
        setTargetElement(e)
        {
            this.removeEvents(), (this.domElement = e), (Ue.domElement = e), this.addEvents();
        }
        addEvents()
        {
            if (this.eventsAdded || !this.domElement) return;
            Ue.addTickerListener();
            const e = this.domElement.style;

            e
                    && (globalThis.navigator.msPointerEnabled
                        ? ((e.msContentZooming = 'none'), (e.msTouchAction = 'none'))
                        : this.supportsPointerEvents && (e.touchAction = 'none')),
            this.supportsPointerEvents
                ? (globalThis.document.addEventListener('pointermove', this.onPointerMove, !0),
                this.domElement.addEventListener('pointerdown', this.onPointerDown, !0),
                this.domElement.addEventListener('pointerleave', this.onPointerOverOut, !0),
                this.domElement.addEventListener('pointerover', this.onPointerOverOut, !0),
                globalThis.addEventListener('pointerup', this.onPointerUp, !0))
                : (globalThis.document.addEventListener('mousemove', this.onPointerMove, !0),
                this.domElement.addEventListener('mousedown', this.onPointerDown, !0),
                this.domElement.addEventListener('mouseout', this.onPointerOverOut, !0),
                this.domElement.addEventListener('mouseover', this.onPointerOverOut, !0),
                globalThis.addEventListener('mouseup', this.onPointerUp, !0)),
            this.supportsTouchEvents
                        && (this.domElement.addEventListener('touchstart', this.onPointerDown, !0),
                        this.domElement.addEventListener('touchend', this.onPointerUp, !0),
                        this.domElement.addEventListener('touchmove', this.onPointerMove, !0)),
            this.domElement.addEventListener('wheel', this.onWheel, { passive: !0, capture: !0 }),
            (this.eventsAdded = !0);
        }
        removeEvents()
        {
            if (!this.eventsAdded || !this.domElement) return;
            Ue.removeTickerListener();
            const e = this.domElement.style;

            globalThis.navigator.msPointerEnabled
                ? ((e.msContentZooming = ''), (e.msTouchAction = ''))
                : this.supportsPointerEvents && (e.touchAction = ''),
            this.supportsPointerEvents
                ? (globalThis.document.removeEventListener('pointermove', this.onPointerMove, !0),
                this.domElement.removeEventListener('pointerdown', this.onPointerDown, !0),
                this.domElement.removeEventListener('pointerleave', this.onPointerOverOut, !0),
                this.domElement.removeEventListener('pointerover', this.onPointerOverOut, !0),
                globalThis.removeEventListener('pointerup', this.onPointerUp, !0))
                : (globalThis.document.removeEventListener('mousemove', this.onPointerMove, !0),
                this.domElement.removeEventListener('mousedown', this.onPointerDown, !0),
                this.domElement.removeEventListener('mouseout', this.onPointerOverOut, !0),
                this.domElement.removeEventListener('mouseover', this.onPointerOverOut, !0),
                globalThis.removeEventListener('mouseup', this.onPointerUp, !0)),
            this.supportsTouchEvents
                        && (this.domElement.removeEventListener('touchstart', this.onPointerDown, !0),
                        this.domElement.removeEventListener('touchend', this.onPointerUp, !0),
                        this.domElement.removeEventListener('touchmove', this.onPointerMove, !0)),
            this.domElement.removeEventListener('wheel', this.onWheel, !0),
            (this.domElement = null),
            (this.eventsAdded = !1);
        }
        mapPositionToPoint(e, t, i)
        {
            let s;

            this.domElement.parentElement
                ? (s = this.domElement.getBoundingClientRect())
                : (s = { x: 0, y: 0, width: this.domElement.width, height: this.domElement.height, left: 0, top: 0 });
            const r = 1 / this.resolution;

            (e.x = (t - s.left) * (this.domElement.width / s.width) * r),
            (e.y = (i - s.top) * (this.domElement.height / s.height) * r);
        }
        normalizeToPointerData(e)
        {
            const t = [];

            if (this.supportsTouchEvents && e instanceof TouchEvent)
            {
                for (let i = 0, s = e.changedTouches.length; i < s; i++)
                {
                    const r = e.changedTouches[i];

                    typeof r.button === 'undefined' && (r.button = 0),
                    typeof r.buttons === 'undefined' && (r.buttons = 1),
                    typeof r.isPrimary === 'undefined'
                                && (r.isPrimary = e.touches.length === 1 && e.type === 'touchstart'),
                    typeof r.width === 'undefined' && (r.width = r.radiusX || 1),
                    typeof r.height === 'undefined' && (r.height = r.radiusY || 1),
                    typeof r.tiltX === 'undefined' && (r.tiltX = 0),
                    typeof r.tiltY === 'undefined' && (r.tiltY = 0),
                    typeof r.pointerType === 'undefined' && (r.pointerType = 'touch'),
                    typeof r.pointerId === 'undefined' && (r.pointerId = r.identifier || 0),
                    typeof r.pressure === 'undefined' && (r.pressure = r.force || 0.5),
                    typeof r.twist === 'undefined' && (r.twist = 0),
                    typeof r.tangentialPressure === 'undefined' && (r.tangentialPressure = 0),
                    typeof r.layerX === 'undefined' && (r.layerX = r.offsetX = r.clientX),
                    typeof r.layerY === 'undefined' && (r.layerY = r.offsetY = r.clientY),
                    (r.isNormalized = !0),
                    (r.type = e.type),
                    t.push(r);
                }
            }
            else if (
                !globalThis.MouseEvent
                    || (e instanceof MouseEvent && (!this.supportsPointerEvents || !(e instanceof globalThis.PointerEvent)))
            )
            {
                const i = e;

                typeof i.isPrimary === 'undefined' && (i.isPrimary = !0),
                typeof i.width === 'undefined' && (i.width = 1),
                typeof i.height === 'undefined' && (i.height = 1),
                typeof i.tiltX === 'undefined' && (i.tiltX = 0),
                typeof i.tiltY === 'undefined' && (i.tiltY = 0),
                typeof i.pointerType === 'undefined' && (i.pointerType = 'mouse'),
                typeof i.pointerId === 'undefined' && (i.pointerId = mu),
                typeof i.pressure === 'undefined' && (i.pressure = 0.5),
                typeof i.twist === 'undefined' && (i.twist = 0),
                typeof i.tangentialPressure === 'undefined' && (i.tangentialPressure = 0),
                (i.isNormalized = !0),
                t.push(i);
            }
            else t.push(e);

            return t;
        }
        normalizeWheelEvent(e)
        {
            const t = this.rootWheelEvent;

            return (
                this.transferMouseData(t, e),
                (t.deltaX = e.deltaX),
                (t.deltaY = e.deltaY),
                (t.deltaZ = e.deltaZ),
                (t.deltaMode = e.deltaMode),
                this.mapPositionToPoint(t.screen, e.clientX, e.clientY),
                t.global.copyFrom(t.screen),
                t.offset.copyFrom(t.screen),
                (t.nativeEvent = e),
                (t.type = e.type),
                t
            );
        }
        bootstrapEvent(e, t)
        {
            return (
                (e.originalEvent = null),
                (e.nativeEvent = t),
                (e.pointerId = t.pointerId),
                (e.width = t.width),
                (e.height = t.height),
                (e.isPrimary = t.isPrimary),
                (e.pointerType = t.pointerType),
                (e.pressure = t.pressure),
                (e.tangentialPressure = t.tangentialPressure),
                (e.tiltX = t.tiltX),
                (e.tiltY = t.tiltY),
                (e.twist = t.twist),
                this.transferMouseData(e, t),
                this.mapPositionToPoint(e.screen, t.clientX, t.clientY),
                e.global.copyFrom(e.screen),
                e.offset.copyFrom(e.screen),
                (e.isTrusted = t.isTrusted),
                e.type === 'pointerleave' && (e.type = 'pointerout'),
                e.type.startsWith('mouse') && (e.type = e.type.replace('mouse', 'pointer')),
                e.type.startsWith('touch') && (e.type = _u[e.type] || e.type),
                e
            );
        }
        transferMouseData(e, t)
        {
            (e.isTrusted = t.isTrusted),
            (e.srcElement = t.srcElement),
            (e.timeStamp = performance.now()),
            (e.type = t.type),
            (e.altKey = t.altKey),
            (e.button = t.button),
            (e.buttons = t.buttons),
            (e.client.x = t.clientX),
            (e.client.y = t.clientY),
            (e.ctrlKey = t.ctrlKey),
            (e.metaKey = t.metaKey),
            (e.movement.x = t.movementX),
            (e.movement.y = t.movementY),
            (e.page.x = t.pageX),
            (e.page.y = t.pageY),
            (e.relatedTarget = null),
            (e.shiftKey = t.shiftKey);
        }
    };
    const ti = yn;

    (ti.extension = { name: 'events', type: [M.RendererSystem, M.CanvasRendererSystem] }),
    (ti.defaultEventFeatures = { move: !0, globalMove: !0, click: !0, wheel: !0 }),
    U.add(ti);
    function La(e)
    {
        return e === 'dynamic' || e === 'static';
    }
    const Oa = {
        onclick: null,
        onmousedown: null,
        onmouseenter: null,
        onmouseleave: null,
        onmousemove: null,
        onglobalmousemove: null,
        onmouseout: null,
        onmouseover: null,
        onmouseup: null,
        onmouseupoutside: null,
        onpointercancel: null,
        onpointerdown: null,
        onpointerenter: null,
        onpointerleave: null,
        onpointermove: null,
        onglobalpointermove: null,
        onpointerout: null,
        onpointerover: null,
        onpointertap: null,
        onpointerup: null,
        onpointerupoutside: null,
        onrightclick: null,
        onrightdown: null,
        onrightup: null,
        onrightupoutside: null,
        ontap: null,
        ontouchcancel: null,
        ontouchend: null,
        ontouchendoutside: null,
        ontouchmove: null,
        onglobaltouchmove: null,
        ontouchstart: null,
        onwheel: null,
        _internalInteractive: void 0,
        get interactive()
        {
            let e;

            return (e = this._internalInteractive) != null ? e : La(ti.defaultEventMode);
        },
        set interactive(e)
        {
            z(
                '7.2.0',
                'Setting interactive is deprecated, use eventMode = \'none\'/\'passive\'/\'auto\'/\'static\'/\'dynamic\' instead.',
            ),
            (this._internalInteractive = e),
            (this.eventMode = e ? 'static' : 'auto');
        },
        _internalEventMode: void 0,
        get eventMode()
        {
            let e;

            return (e = this._internalEventMode) != null ? e : ti.defaultEventMode;
        },
        set eventMode(e)
        {
            (this._internalInteractive = La(e)), (this._internalEventMode = e);
        },
        isInteractive()
        {
            return this.eventMode === 'static' || this.eventMode === 'dynamic';
        },
        interactiveChildren: !0,
        hitArea: null,
        addEventListener(e, t, i)
        {
            const s = (typeof i === 'boolean' && i) || (typeof i === 'object' && i.capture);
            const r = typeof t === 'function' ? void 0 : t;

            (e = s ? `${e}capture` : e), (t = typeof t === 'function' ? t : t.handleEvent), this.on(e, t, r);
        },
        removeEventListener(e, t, i)
        {
            const s = (typeof i === 'boolean' && i) || (typeof i === 'object' && i.capture);
            const r = typeof t === 'function' ? void 0 : t;

            (e = s ? `${e}capture` : e), (t = typeof t === 'function' ? t : t.handleEvent), this.off(e, t, r);
        },
        dispatchEvent(e)
        {
            if (!(e instanceof Qe))
            { throw new Error('DisplayObject cannot propagate events outside of the Federated Events API'); }

            return (
                (e.defaultPrevented = !1),
                (e.path = null),
                (e.target = this),
                e.manager.dispatchEvent(e),
                !e.defaultPrevented
            );
        },
    };

    st.mixin(Oa);
    const Ua = {
        accessible: !1,
        accessibleTitle: null,
        accessibleHint: null,
        tabIndex: 0,
        _accessibleActive: !1,
        _accessibleDiv: null,
        accessibleType: 'button',
        accessiblePointerEvents: 'auto',
        accessibleChildren: !0,
        renderId: -1,
    };

    st.mixin(Ua);
    const gu = 9;
    const Ns = 100;
    const yu = 0;
    const vu = 0;
    const ka = 2;
    const Ga = 1;
    const xu = -1e3;
    const Tu = -1e3;
    const bu = 2;

    class vn
    {
        constructor(t)
        {
            (this.debug = !1),
            (this._isActive = !1),
            (this._isMobileAccessibility = !1),
            (this.pool = []),
            (this.renderId = 0),
            (this.children = []),
            (this.androidUpdateCount = 0),
            (this.androidUpdateFrequency = 500),
            (this._hookDiv = null),
            (Yt.tablet || Yt.phone) && this.createTouchHook();
            const i = document.createElement('div');

            (i.style.width = `${Ns}px`),
            (i.style.height = `${Ns}px`),
            (i.style.position = 'absolute'),
            (i.style.top = `${yu}px`),
            (i.style.left = `${vu}px`),
            (i.style.zIndex = ka.toString()),
            (this.div = i),
            (this.renderer = t),
            (this._onKeyDown = this._onKeyDown.bind(this)),
            (this._onMouseMove = this._onMouseMove.bind(this)),
            globalThis.addEventListener('keydown', this._onKeyDown, !1);
        }
        get isActive()
        {
            return this._isActive;
        }
        get isMobileAccessibility()
        {
            return this._isMobileAccessibility;
        }
        createTouchHook()
        {
            const t = document.createElement('button');

            (t.style.width = `${Ga}px`),
            (t.style.height = `${Ga}px`),
            (t.style.position = 'absolute'),
            (t.style.top = `${xu}px`),
            (t.style.left = `${Tu}px`),
            (t.style.zIndex = bu.toString()),
            (t.style.backgroundColor = '#FF0000'),
            (t.title = 'select to enable accessibility for this content'),
            t.addEventListener('focus', () =>
            {
                (this._isMobileAccessibility = !0), this.activate(), this.destroyTouchHook();
            }),
            document.body.appendChild(t),
            (this._hookDiv = t);
        }
        destroyTouchHook()
        {
            !this._hookDiv || (document.body.removeChild(this._hookDiv), (this._hookDiv = null));
        }
        activate()
        {
            let t;

            this._isActive
                || ((this._isActive = !0),
                globalThis.document.addEventListener('mousemove', this._onMouseMove, !0),
                globalThis.removeEventListener('keydown', this._onKeyDown, !1),
                this.renderer.on('postrender', this.update, this),
                (t = this.renderer.view.parentNode) == null || t.appendChild(this.div));
        }
        deactivate()
        {
            let t;

            !this._isActive
                || this._isMobileAccessibility
                || ((this._isActive = !1),
                globalThis.document.removeEventListener('mousemove', this._onMouseMove, !0),
                globalThis.addEventListener('keydown', this._onKeyDown, !1),
                this.renderer.off('postrender', this.update),
                (t = this.div.parentNode) == null || t.removeChild(this.div));
        }
        updateAccessibleObjects(t)
        {
            if (!t.visible || !t.accessibleChildren) return;
            t.accessible && t.isInteractive() && (t._accessibleActive || this.addChild(t), (t.renderId = this.renderId));
            const i = t.children;

            if (i) for (let s = 0; s < i.length; s++) this.updateAccessibleObjects(i[s]);
        }
        update()
        {
            const t = performance.now();

            if (
                (Yt.android.device && t < this.androidUpdateCount)
                || ((this.androidUpdateCount = t + this.androidUpdateFrequency), !this.renderer.renderingToScreen)
            )
            { return; }
            this.renderer.lastObjectRendered && this.updateAccessibleObjects(this.renderer.lastObjectRendered);
            const { x: i, y: s, width: r, height: n } = this.renderer.view.getBoundingClientRect();
            const { width: o, height: a, resolution: h } = this.renderer;
            const l = (r / o) * h;
            const c = (n / a) * h;
            let u = this.div;

            (u.style.left = `${i}px`), (u.style.top = `${s}px`), (u.style.width = `${o}px`), (u.style.height = `${a}px`);
            for (let d = 0; d < this.children.length; d++)
            {
                const f = this.children[d];

                if (f.renderId !== this.renderId)
                {
                    (f._accessibleActive = !1),
                    Ce(this.children, d, 1),
                    this.div.removeChild(f._accessibleDiv),
                    this.pool.push(f._accessibleDiv),
                    (f._accessibleDiv = null),
                    d--;
                }
                else
                {
                    u = f._accessibleDiv;
                    let p = f.hitArea;
                    const _ = f.worldTransform;

                    f.hitArea
                        ? ((u.style.left = `${(_.tx + p.x * _.a) * l}px`),
                        (u.style.top = `${(_.ty + p.y * _.d) * c}px`),
                        (u.style.width = `${p.width * _.a * l}px`),
                        (u.style.height = `${p.height * _.d * c}px`))
                        : ((p = f.getBounds()),
                        this.capHitArea(p),
                        (u.style.left = `${p.x * l}px`),
                        (u.style.top = `${p.y * c}px`),
                        (u.style.width = `${p.width * l}px`),
                        (u.style.height = `${p.height * c}px`),
                        u.title !== f.accessibleTitle && f.accessibleTitle !== null && (u.title = f.accessibleTitle),
                        u.getAttribute('aria-label') !== f.accessibleHint
                              && f.accessibleHint !== null
                              && u.setAttribute('aria-label', f.accessibleHint)),
                    (f.accessibleTitle !== u.title || f.tabIndex !== u.tabIndex)
                            && ((u.title = f.accessibleTitle),
                            (u.tabIndex = f.tabIndex),
                            this.debug && this.updateDebugHTML(u));
                }
            }
            this.renderId++;
        }
        updateDebugHTML(t)
        {
            t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`;
        }
        capHitArea(t)
        {
            t.x < 0 && ((t.width += t.x), (t.x = 0)), t.y < 0 && ((t.height += t.y), (t.y = 0));
            const { width: i, height: s } = this.renderer;

            t.x + t.width > i && (t.width = i - t.x), t.y + t.height > s && (t.height = s - t.y);
        }
        addChild(t)
        {
            let i = this.pool.pop();

            i
                || ((i = document.createElement('button')),
                (i.style.width = `${Ns}px`),
                (i.style.height = `${Ns}px`),
                (i.style.backgroundColor = this.debug ? 'rgba(255,255,255,0.5)' : 'transparent'),
                (i.style.position = 'absolute'),
                (i.style.zIndex = ka.toString()),
                (i.style.borderStyle = 'none'),
                navigator.userAgent.toLowerCase().includes('chrome')
                    ? i.setAttribute('aria-live', 'off')
                    : i.setAttribute('aria-live', 'polite'),
                navigator.userAgent.match(/rv:.*Gecko\//)
                    ? i.setAttribute('aria-relevant', 'additions')
                    : i.setAttribute('aria-relevant', 'text'),
                i.addEventListener('click', this._onClick.bind(this)),
                i.addEventListener('focus', this._onFocus.bind(this)),
                i.addEventListener('focusout', this._onFocusOut.bind(this))),
            (i.style.pointerEvents = t.accessiblePointerEvents),
            (i.type = t.accessibleType),
            t.accessibleTitle && t.accessibleTitle !== null
                ? (i.title = t.accessibleTitle)
                : (!t.accessibleHint || t.accessibleHint === null) && (i.title = `displayObject ${t.tabIndex}`),
            t.accessibleHint && t.accessibleHint !== null && i.setAttribute('aria-label', t.accessibleHint),
            this.debug && this.updateDebugHTML(i),
            (t._accessibleActive = !0),
            (t._accessibleDiv = i),
            (i.displayObject = t),
            this.children.push(t),
            this.div.appendChild(t._accessibleDiv),
            (t._accessibleDiv.tabIndex = t.tabIndex);
        }
        _dispatchEvent(t, i)
        {
            const { displayObject: s } = t.target;
            const r = this.renderer.events.rootBoundary;
            const n = Object.assign(new Qe(r), { target: s });

            (r.rootTarget = this.renderer.lastObjectRendered), i.forEach((o) => r.dispatchEvent(n, o));
        }
        _onClick(t)
        {
            this._dispatchEvent(t, ['click', 'pointertap', 'tap']);
        }
        _onFocus(t)
        {
            t.target.getAttribute('aria-live') || t.target.setAttribute('aria-live', 'assertive'),
            this._dispatchEvent(t, ['mouseover']);
        }
        _onFocusOut(t)
        {
            t.target.getAttribute('aria-live') || t.target.setAttribute('aria-live', 'polite'),
            this._dispatchEvent(t, ['mouseout']);
        }
        _onKeyDown(t)
        {
            t.keyCode === gu && this.activate();
        }
        _onMouseMove(t)
        {
            (t.movementX === 0 && t.movementY === 0) || this.deactivate();
        }
        destroy()
        {
            this.destroyTouchHook(),
            (this.div = null),
            globalThis.document.removeEventListener('mousemove', this._onMouseMove, !0),
            globalThis.removeEventListener('keydown', this._onKeyDown),
            (this.pool = null),
            (this.children = null),
            (this.renderer = null);
        }
    }
    (vn.extension = { name: 'accessibility', type: [M.RendererPlugin, M.CanvasRendererPlugin] }), U.add(vn);
    const xn = class
    {
        constructor(e)
        {
            (this.stage = new Ct()),
            (e = Object.assign({ forceCanvas: !1 }, e)),
            (this.renderer = wa(e)),
            xn._plugins.forEach((t) =>
            {
                t.init.call(this, e);
            });
        }
        render()
        {
            this.renderer.render(this.stage);
        }
        get view()
        {
            return this.renderer.view;
        }
        get screen()
        {
            return this.renderer.screen;
        }
        destroy(e, t)
        {
            const i = xn._plugins.slice(0);

            i.reverse(),
            i.forEach((s) =>
            {
                s.destroy.call(this);
            }),
            this.stage.destroy(t),
            (this.stage = null),
            this.renderer.destroy(e),
            (this.renderer = null);
        }
    };
    const Tn = xn;

    (Tn._plugins = []), U.handleByList(M.Application, Tn._plugins);
    class bn
    {
        static init(t)
        {
            Object.defineProperty(this, 'resizeTo', {
                set(i)
                {
                    globalThis.removeEventListener('resize', this.queueResize),
                    (this._resizeTo = i),
                    i && (globalThis.addEventListener('resize', this.queueResize), this.resize());
                },
                get()
                {
                    return this._resizeTo;
                },
            }),
            (this.queueResize = () =>
            {
                !this._resizeTo || (this.cancelResize(), (this._resizeId = requestAnimationFrame(() => this.resize())));
            }),
            (this.cancelResize = () =>
            {
                this._resizeId && (cancelAnimationFrame(this._resizeId), (this._resizeId = null));
            }),
            (this.resize = () =>
            {
                if (!this._resizeTo) return;
                this.cancelResize();
                let i; let
                    s;

                if (this._resizeTo === globalThis.window) (i = globalThis.innerWidth), (s = globalThis.innerHeight);
                else
                {
                    const { clientWidth: r, clientHeight: n } = this._resizeTo;

                    (i = r), (s = n);
                }
                this.renderer.resize(i, s), this.render();
            }),
            (this._resizeId = null),
            (this._resizeTo = null),
            (this.resizeTo = t.resizeTo || null);
        }
        static destroy()
        {
            globalThis.removeEventListener('resize', this.queueResize),
            this.cancelResize(),
            (this.cancelResize = null),
            (this.queueResize = null),
            (this.resizeTo = null),
            (this.resize = null);
        }
    }
    (bn.extension = M.Application), U.add(bn);
    const Ha = { loader: M.LoadParser, resolver: M.ResolveParser, cache: M.CacheParser, detection: M.DetectionParser };

    U.handle(
        M.Asset,
        (e) =>
        {
            const t = e.ref;

            Object.entries(Ha)
                .filter(([i]) => !!t[i])
                .forEach(([i, s]) =>
                {
                    let r;

                    return U.add(Object.assign(t[i], { extension: (r = t[i].extension) != null ? r : s }));
                });
        },
        (e) =>
        {
            const t = e.ref;

            Object.keys(Ha)
                .filter((i) => !!t[i])
                .forEach((i) => U.remove(t[i]));
        },
    );
    class Eu
    {
        constructor(t, i = !1)
        {
            (this._loader = t),
            (this._assetList = []),
            (this._isLoading = !1),
            (this._maxConcurrent = 1),
            (this.verbose = i);
        }
        add(t)
        {
            t.forEach((i) =>
            {
                this._assetList.push(i);
            }),
            this.verbose && console.log('[BackgroundLoader] assets: ', this._assetList),
            this._isActive && !this._isLoading && this._next();
        }
        async _next()
        {
            if (this._assetList.length && this._isActive)
            {
                this._isLoading = !0;
                const t = [];
                const i = Math.min(this._assetList.length, this._maxConcurrent);

                for (let s = 0; s < i; s++) t.push(this._assetList.pop());
                await this._loader.load(t), (this._isLoading = !1), this._next();
            }
        }
        get active()
        {
            return this._isActive;
        }
        set active(t)
        {
            this._isActive !== t && ((this._isActive = t), t && !this._isLoading && this._next());
        }
    }
    function ei(e, t)
    {
        if (Array.isArray(t))
        {
            for (const i of t) if (e.startsWith(`data:${i}`)) return !0;

            return !1;
        }

        return e.startsWith(`data:${t}`);
    }
    function be(e, t)
    {
        const i = e.split('?')[0];
        const s = Tt.extname(i).toLowerCase();

        return Array.isArray(t) ? t.includes(s) : s === t;
    }
    const oe = (e, t) => (Array.isArray(e) || (e = [e]), t ? e.map((i) => (typeof i === 'string' ? t(i) : i)) : e);
    const Ls = (e, t) =>
    {
        const i = t.split('?')[1];

        return i && (e += `?${i}`), e;
    };

    function Xa(e, t, i, s, r)
    {
        const n = t[i];

        for (let o = 0; o < n.length; o++)
        {
            const a = n[o];

            i < t.length - 1 ? Xa(e.replace(s[i], a), t, i + 1, s, r) : r.push(e.replace(s[i], a));
        }
    }
    function Va(e)
    {
        const t = /\{(.*?)\}/g;
        const i = e.match(t);
        const s = [];

        if (i)
        {
            const r = [];

            i.forEach((n) =>
            {
                const o = n.substring(1, n.length - 1).split(',');

                r.push(o);
            }),
            Xa(e, r, 0, i, s);
        }
        else s.push(e);

        return s;
    }
    const Bi = (e) => !Array.isArray(e);

    class wu
    {
        constructor()
        {
            (this._parsers = []), (this._cache = new Map()), (this._cacheMap = new Map());
        }
        reset()
        {
            this._cacheMap.clear(), this._cache.clear();
        }
        has(t)
        {
            return this._cache.has(t);
        }
        get(t)
        {
            const i = this._cache.get(t);

            return i || console.warn(`[Assets] Asset id ${t} was not found in the Cache`), i;
        }
        set(t, i)
        {
            const s = oe(t);
            let r;

            for (let a = 0; a < this.parsers.length; a++)
            {
                const h = this.parsers[a];

                if (h.test(i))
                {
                    r = h.getCacheableAssets(s, i);
                    break;
                }
            }
            r
                || ((r = {}),
                s.forEach((a) =>
                {
                    r[a] = i;
                }));
            const n = Object.keys(r);
            const o = { cacheKeys: n, keys: s };

            if (
                (s.forEach((a) =>
                {
                    this._cacheMap.set(a, o);
                }),
                n.forEach((a) =>
                {
                    this._cache.has(a) && this._cache.get(a) !== i && console.warn('[Cache] already has key:', a),
                    this._cache.set(a, r[a]);
                }),
                i instanceof B)
            )
            {
                const a = i;

                s.forEach((h) =>
                {
                    a.baseTexture !== B.EMPTY.baseTexture && V.addToCache(a.baseTexture, h), B.addToCache(a, h);
                });
            }
        }
        remove(t)
        {
            if ((this._cacheMap.get(t), !this._cacheMap.has(t)))
            {
                console.warn(`[Assets] Asset id ${t} was not found in the Cache`);

                return;
            }
            const i = this._cacheMap.get(t);

            i.cacheKeys.forEach((r) =>
            {
                this._cache.delete(r);
            }),
            i.keys.forEach((r) =>
            {
                this._cacheMap.delete(r);
            });
        }
        get parsers()
        {
            return this._parsers;
        }
    }
    const ii = new wu();

    class Su
    {
        constructor()
        {
            (this._parsers = []),
            (this._parsersValidated = !1),
            (this.parsers = new Proxy(this._parsers, {
                set: (t, i, s) => ((this._parsersValidated = !1), (t[i] = s), !0),
            })),
            (this.promiseCache = {});
        }
        reset()
        {
            (this._parsersValidated = !1), (this.promiseCache = {});
        }
        _getLoadPromiseAndParser(t, i)
        {
            const s = { promise: null, parser: null };

            return (
                (s.promise = (async () =>
                {
                    let o; let
                        a;
                    let r = null;
                    let n = null;

                    if (
                        (i.loadParser
                            && ((n = this._parserHash[i.loadParser]),
                            n
                                || console.warn(
                                    `[Assets] specified load parser "${i.loadParser}" not found while loading ${t}`,
                                )),
                        !n)
                    )
                    {
                        for (let h = 0; h < this.parsers.length; h++)
                        {
                            const l = this.parsers[h];

                            if (l.load && ((o = l.test) == null ? void 0 : o.call(l, t, i, this)))
                            {
                                n = l;
                                break;
                            }
                        }
                        if (!n)
                        {
                            return (
                                console.warn(
                                    `[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`,
                                ),
                                null
                            );
                        }
                    }
                    (r = await n.load(t, i, this)), (s.parser = n);
                    for (let h = 0; h < this.parsers.length; h++)
                    {
                        const l = this.parsers[h];

                        l.parse
                            && l.parse
                            && (await ((a = l.testParse) == null ? void 0 : a.call(l, r, i, this)))
                            && ((r = (await l.parse(r, i, this)) || r), (s.parser = l));
                    }

                    return r;
                })()),
                s
            );
        }
        async load(t, i)
        {
            this._parsersValidated || this._validateParsers();
            let s = 0;
            const r = {};
            const n = Bi(t);
            const o = oe(t, (l) => ({ src: l }));
            const a = o.length;
            const h = o.map(async (l) =>
            {
                const c = Tt.toAbsolute(l.src);

                if (!r[l.src])
                {
                    try
                    {
                        this.promiseCache[c] || (this.promiseCache[c] = this._getLoadPromiseAndParser(c, l)),
                        (r[l.src] = await this.promiseCache[c].promise),
                        i && i(++s / a);
                    }
                    catch (u)
                    {
                        throw (
                            (delete this.promiseCache[c],
                            delete r[l.src],
                            new Error(`[Loader.load] Failed to load ${c}.
${u}`))
                        );
                    }
                }
            });

            return await Promise.all(h), n ? r[o[0].src] : r;
        }
        async unload(t)
        {
            const s = oe(t, (r) => ({ src: r })).map(async (r) =>
            {
                let a; let
                    h;
                const n = Tt.toAbsolute(r.src);
                const o = this.promiseCache[n];

                if (o)
                {
                    const l = await o.promise;

                    (h = (a = o.parser) == null ? void 0 : a.unload) == null || h.call(a, l, r, this),
                    delete this.promiseCache[n];
                }
            });

            await Promise.all(s);
        }
        _validateParsers()
        {
            (this._parsersValidated = !0),
            (this._parserHash = this._parsers
                .filter((t) => t.name)
                .reduce(
                    (t, i) => (
                        t[i.name] && console.warn(`[Assets] loadParser name conflict "${i.name}"`),
                        Ji(Et({}, t), { [i.name]: i })
                    ),
                    {},
                ));
        }
    }
    var Jt = ((e) => ((e[(e.Low = 0)] = 'Low'), (e[(e.Normal = 1)] = 'Normal'), (e[(e.High = 2)] = 'High'), e))(Jt || {});
    const Au = '.json';
    const Ru = 'application/json';
    const za = {
        extension: { type: M.LoadParser, priority: Jt.Low },
        name: 'loadJson',
        test(e)
        {
            return ei(e, Ru) || be(e, Au);
        },
        async load(e)
        {
            return await (await P.ADAPTER.fetch(e)).json();
        },
    };

    U.add(za);
    const Cu = '.txt';
    const Iu = 'text/plain';
    const Wa = {
        name: 'loadTxt',
        extension: { type: M.LoadParser, priority: Jt.Low },
        test(e)
        {
            return ei(e, Iu) || be(e, Cu);
        },
        async load(e)
        {
            return await (await P.ADAPTER.fetch(e)).text();
        },
    };

    U.add(Wa);
    const Pu = ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
    const Mu = ['.ttf', '.otf', '.woff', '.woff2'];
    const Bu = ['font/ttf', 'font/otf', 'font/woff', 'font/woff2'];

    function $a(e)
    {
        const t = Tt.extname(e);

        return Tt.basename(e, t)
            .replace(/(-|_)/g, ' ')
            .toLowerCase()
            .split(' ')
            .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
            .join(' ');
    }
    const ja = {
        extension: { type: M.LoadParser, priority: Jt.Low },
        name: 'loadWebFont',
        test(e)
        {
            return ei(e, Bu) || be(e, Mu);
        },
        async load(e, t)
        {
            let s; let r; let n; let o; let a; let
                h;
            const i = P.ADAPTER.getFontFaceSet();

            if (i)
            {
                const l = [];
                const c = (r = (s = t.data) == null ? void 0 : s.family) != null ? r : $a(e);
                const u
                        = (a
                            = (o = (n = t.data) == null ? void 0 : n.weights) == null
                                ? void 0
                                : o.filter((f) => Pu.includes(f))) != null
                            ? a
                            : ['normal'];
                const d = (h = t.data) != null ? h : {};

                for (let f = 0; f < u.length; f++)
                {
                    const p = u[f];
                    const _ = new FontFace(c, `url(${encodeURI(e)})`, Ji(Et({}, d), { weight: p }));

                    await _.load(), i.add(_), l.push(_);
                }

                return l.length === 1 ? l[0] : l;
            }

            return console.warn('[loadWebFont] FontFace API is not supported. Skipping loading font'), null;
        },
        unload(e)
        {
            (Array.isArray(e) ? e : [e]).forEach((t) => P.ADAPTER.getFontFaceSet().delete(t));
        },
    };

    U.add(ja);
    let Ya = 0;
    let En;
    const Du = {
        id: 'checkImageBitmap',
        code: `
    async function checkImageBitmap()
    {
        try
        {
            if (typeof createImageBitmap !== 'function') return false;

            const response = await fetch('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=');
            const imageBlob =  await response.blob();
            const imageBitmap = await createImageBitmap(imageBlob);

            return imageBitmap.width === 1 && imageBitmap.height === 1;
        }
        catch (e)
        {
            return false;
        }
    }
    checkImageBitmap().then((result) => { self.postMessage(result); });
    `,
    };
    const Fu = {
        id: 'loadImageBitmap',
        code: `
    async function loadImageBitmap(url)
    {
        const response = await fetch(url);

        if (!response.ok)
        {
            throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \`
                + \`\${response.status} \${response.statusText}\`);
        }

        const imageBlob =  await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);

        return imageBitmap;
    }
    self.onmessage = async (event) =>
    {
        try
        {
            const imageBitmap = await loadImageBitmap(event.data.data[0]);

            self.postMessage({
                data: imageBitmap,
                uuid: event.data.uuid,
                id: event.data.id,
            }, [imageBitmap]);
        }
        catch(e)
        {
            self.postMessage({
                error: e,
                uuid: event.data.uuid,
                id: event.data.id,
            });
        }
    };`,
    };
    let wn;

    class Nu
    {
        constructor()
        {
            (this._initialized = !1),
            (this._createdWorkers = 0),
            (this.workerPool = []),
            (this.queue = []),
            (this.resolveHash = {});
        }
        isImageBitmapSupported()
        {
            return this._isImageBitmapSupported !== void 0
                ? this._isImageBitmapSupported
                : ((this._isImageBitmapSupported = new Promise((t) =>
                {
                    const i = URL.createObjectURL(new Blob([Du.code], { type: 'application/javascript' }));
                    const s = new Worker(i);

                    s.addEventListener('message', (r) =>
                    {
                        s.terminate(), URL.revokeObjectURL(i), t(r.data);
                    });
                })),
                this._isImageBitmapSupported);
        }
        loadImageBitmap(t)
        {
            return this._run('loadImageBitmap', [t]);
        }
        async _initWorkers()
        {
            this._initialized || (this._initialized = !0);
        }
        getWorker()
        {
            En === void 0 && (En = navigator.hardwareConcurrency || 4);
            let t = this.workerPool.pop();

            return (
                !t
                    && this._createdWorkers < En
                    && (wn || (wn = URL.createObjectURL(new Blob([Fu.code], { type: 'application/javascript' }))),
                    this._createdWorkers++,
                    (t = new Worker(wn)),
                    t.addEventListener('message', (i) =>
                    {
                        this.complete(i.data), this.returnWorker(i.target), this.next();
                    })),
                t
            );
        }
        returnWorker(t)
        {
            this.workerPool.push(t);
        }
        complete(t)
        {
            t.error !== void 0 ? this.resolveHash[t.uuid].reject(t.error) : this.resolveHash[t.uuid].resolve(t.data),
            (this.resolveHash[t.uuid] = null);
        }
        async _run(t, i)
        {
            await this._initWorkers();
            const s = new Promise((r, n) =>
            {
                this.queue.push({ id: t, arguments: i, resolve: r, reject: n });
            });

            return this.next(), s;
        }
        next()
        {
            if (!this.queue.length) return;
            const t = this.getWorker();

            if (!t) return;
            const i = this.queue.pop();
            const s = i.id;

            (this.resolveHash[Ya] = { resolve: i.resolve, reject: i.reject }),
            t.postMessage({ data: i.arguments, uuid: Ya++, id: s });
        }
    }
    const qa = new Nu();

    function Di(e, t, i)
    {
        const s = new B(e);

        return (
            s.baseTexture.on('dispose', () =>
            {
                delete t.promiseCache[i];
            }),
            s
        );
    }
    const Lu = ['.jpeg', '.jpg', '.png', '.webp', '.avif'];
    const Ou = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];

    async function Ka(e)
    {
        const t = await P.ADAPTER.fetch(e);

        if (!t.ok) throw new Error(`[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`);
        const i = await t.blob();

        return await createImageBitmap(i);
    }
    const Fi = {
        name: 'loadTextures',
        extension: { type: M.LoadParser, priority: Jt.High },
        config: { preferWorkers: !0, preferCreateImageBitmap: !0, crossOrigin: 'anonymous' },
        test(e)
        {
            return ei(e, Ou) || be(e, Lu);
        },
        async load(e, t, i)
        {
            let s = null;

            globalThis.createImageBitmap && this.config.preferCreateImageBitmap
                ? this.config.preferWorkers && (await qa.isImageBitmapSupported())
                    ? (s = await qa.loadImageBitmap(e))
                    : (s = await Ka(e))
                : (s = await new Promise((n) =>
                {
                    (s = new Image()),
                    (s.crossOrigin = this.config.crossOrigin),
                    (s.src = e),
                    s.complete
                        ? n(s)
                        : (s.onload = () =>
                        {
                            n(s);
                        });
                }));
            const r = new V(s, Et({ resolution: fe(e) }, t.data));

            return (r.resource.src = e), Di(r, i, e);
        },
        unload(e)
        {
            e.destroy(!0);
        },
    };

    U.add(Fi);
    const Uu = '.svg';
    const ku = 'image/svg+xml';
    const Za = {
        extension: { type: M.LoadParser, priority: Jt.High },
        name: 'loadSVG',
        test(e)
        {
            return ei(e, ku) || be(e, Uu);
        },
        async testParse(e)
        {
            return Je.test(e);
        },
        async parse(e, t, i)
        {
            let o; let a; let
                h;
            const s = new Je(e, (o = t == null ? void 0 : t.data) == null ? void 0 : o.resourceOptions);
            const r = new V(s, Et({ resolution: fe(e) }, t == null ? void 0 : t.data));

            r.resource.src = e;
            const n = Di(r, i, e);

            return (
                ((h = (a = t == null ? void 0 : t.data) == null ? void 0 : a.resourceOptions) != null && h.autoLoad)
                        || (await s.load()),
                n
            );
        },
        async load(e, t)
        {
            return (await P.ADAPTER.fetch(e)).text();
        },
        unload: Fi.unload,
    };

    U.add(Za);
    class Gu
    {
        constructor()
        {
            (this._defaultBundleIdentifierOptions = {
                connector: '-',
                createBundleAssetId: (t, i) => `${t}${this._bundleIdConnector}${i}`,
                extractAssetIdFromBundle: (t, i) => i.replace(`${t}${this._bundleIdConnector}`, ''),
            }),
            (this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector),
            (this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId),
            (this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle),
            (this._assetMap = {}),
            (this._preferredOrder = []),
            (this._parsers = []),
            (this._resolverHash = {}),
            (this._bundles = {});
        }
        setBundleIdentifier(t)
        {
            let i; let s; let
                r;

            if (
                ((this._bundleIdConnector = (i = t.connector) != null ? i : this._bundleIdConnector),
                (this._createBundleAssetId = (s = t.createBundleAssetId) != null ? s : this._createBundleAssetId),
                (this._extractAssetIdFromBundle
                    = (r = t.extractAssetIdFromBundle) != null ? r : this._extractAssetIdFromBundle),
                this._extractAssetIdFromBundle('foo', this._createBundleAssetId('foo', 'bar')) !== 'bar')
            )
            { throw new Error('[Resolver] GenerateBundleAssetId are not working correctly'); }
        }
        prefer(...t)
        {
            t.forEach((i) =>
            {
                this._preferredOrder.push(i), i.priority || (i.priority = Object.keys(i.params));
            }),
            (this._resolverHash = {});
        }
        set basePath(t)
        {
            this._basePath = t;
        }
        get basePath()
        {
            return this._basePath;
        }
        set rootPath(t)
        {
            this._rootPath = t;
        }
        get rootPath()
        {
            return this._rootPath;
        }
        get parsers()
        {
            return this._parsers;
        }
        reset()
        {
            this.setBundleIdentifier(this._defaultBundleIdentifierOptions),
            (this._assetMap = {}),
            (this._preferredOrder = []),
            (this._resolverHash = {}),
            (this._rootPath = null),
            (this._basePath = null),
            (this._manifest = null),
            (this._bundles = {}),
            (this._defaultSearchParams = null);
        }
        setDefaultSearchParams(t)
        {
            if (typeof t === 'string') this._defaultSearchParams = t;
            else
            {
                const i = t;

                this._defaultSearchParams = Object.keys(i)
                    .map((s) => `${encodeURIComponent(s)}=${encodeURIComponent(i[s])}`)
                    .join('&');
            }
        }
        addManifest(t)
        {
            this._manifest && console.warn('[Resolver] Manifest already exists, this will be overwritten'),
            (this._manifest = t),
            t.bundles.forEach((i) =>
            {
                this.addBundle(i.name, i.assets);
            });
        }
        addBundle(t, i)
        {
            const s = [];

            Array.isArray(i)
                ? i.forEach((r) =>
                {
                    if (typeof r.name === 'string')
                    {
                        const n = this._createBundleAssetId(t, r.name);

                        s.push(n), this.add([r.name, n], r.srcs, r.data);
                    }
                    else
                    {
                        const n = r.name.map((o) => this._createBundleAssetId(t, o));

                        n.forEach((o) =>
                        {
                            s.push(o);
                        }),
                        this.add([...r.name, ...n], r.srcs);
                    }
                })
                : Object.keys(i).forEach((r) =>
                {
                    s.push(this._createBundleAssetId(t, r)), this.add([r, this._createBundleAssetId(t, r)], i[r]);
                }),
            (this._bundles[t] = s);
        }
        add(t, i, s)
        {
            const r = oe(t);

            r.forEach((o) =>
            {
                this.hasKey(o) && console.warn(`[Resolver] already has key: ${o} overwriting`);
            }),
            Array.isArray(i) || (typeof i === 'string' ? (i = Va(i)) : (i = [i]));
            const n = i.map((o) =>
            {
                let h;
                let a = o;

                if (typeof o === 'string')
                {
                    let l = !1;

                    for (let c = 0; c < this._parsers.length; c++)
                    {
                        const u = this._parsers[c];

                        if (u.test(o))
                        {
                            (a = u.parse(o)), (l = !0);
                            break;
                        }
                    }
                    l || (a = { src: o });
                }

                return (
                    a.format || (a.format = a.src.split('.').pop()),
                    a.alias || (a.alias = r),
                    (this._basePath || this._rootPath) && (a.src = Tt.toAbsolute(a.src, this._basePath, this._rootPath)),
                    (a.src = this._appendDefaultSearchParams(a.src)),
                    (a.data = (h = a.data) != null ? h : s),
                    a
                );
            });

            r.forEach((o) =>
            {
                this._assetMap[o] = n;
            });
        }
        resolveBundle(t)
        {
            const i = Bi(t);

            t = oe(t);
            const s = {};

            return (
                t.forEach((r) =>
                {
                    const n = this._bundles[r];

                    if (n)
                    {
                        const o = this.resolve(n);
                        const a = {};

                        for (const h in o)
                        {
                            const l = o[h];

                            a[this._extractAssetIdFromBundle(r, h)] = l;
                        }
                        s[r] = a;
                    }
                }),
                i ? s[t[0]] : s
            );
        }
        resolveUrl(t)
        {
            const i = this.resolve(t);

            if (typeof t !== 'string')
            {
                const s = {};

                for (const r in i) s[r] = i[r].src;

                return s;
            }

            return i.src;
        }
        resolve(t)
        {
            const i = Bi(t);

            t = oe(t);
            const s = {};

            return (
                t.forEach((r) =>
                {
                    let n;

                    if (!this._resolverHash[r])
                    {
                        if (this._assetMap[r])
                        {
                            let o = this._assetMap[r];
                            const a = this._getPreferredOrder(o);
                            const h = o[0];

                            a == null
                                || a.priority.forEach((l) =>
                                {
                                    a.params[l].forEach((c) =>
                                    {
                                        const u = o.filter((d) => (d[l] ? d[l] === c : !1));

                                        u.length && (o = u);
                                    });
                                }),
                            (this._resolverHash[r] = (n = o[0]) != null ? n : h);
                        }
                        else
                        {
                            let o = r;

                            (this._basePath || this._rootPath) && (o = Tt.toAbsolute(o, this._basePath, this._rootPath)),
                            (o = this._appendDefaultSearchParams(o)),
                            (this._resolverHash[r] = { src: o });
                        }
                    }
                    s[r] = this._resolverHash[r];
                }),
                i ? s[t[0]] : s
            );
        }
        hasKey(t)
        {
            return !!this._assetMap[t];
        }
        hasBundle(t)
        {
            return !!this._bundles[t];
        }
        _getPreferredOrder(t)
        {
            for (let i = 0; i < t.length; i++)
            {
                const s = t[0];
                const r = this._preferredOrder.find((n) => n.params.format.includes(s.format));

                if (r) return r;
            }

            return this._preferredOrder[0];
        }
        _appendDefaultSearchParams(t)
        {
            if (!this._defaultSearchParams) return t;
            const i = (/\?/).test(t) ? '&' : '?';

            return `${t}${i}${this._defaultSearchParams}`;
        }
    }
    class Ja
    {
        constructor()
        {
            (this._detections = []),
            (this._initialized = !1),
            (this.resolver = new Gu()),
            (this.loader = new Su()),
            (this.cache = ii),
            (this._backgroundLoader = new Eu(this.loader)),
            (this._backgroundLoader.active = !0),
            this.reset();
        }
        async init(t = {})
        {
            let n; let o; let a; let
                h;

            if (this._initialized)
            {
                console.warn('[Assets]AssetManager already initialized, did you load before calling this Asset.init()?');

                return;
            }
            if (
                ((this._initialized = !0),
                t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams),
                t.basePath && (this.resolver.basePath = t.basePath),
                t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier),
                t.manifest)
            )
            {
                let l = t.manifest;

                typeof l === 'string' && (l = await this.load(l)), this.resolver.addManifest(l);
            }
            const i = (o = (n = t.texturePreference) == null ? void 0 : n.resolution) != null ? o : 1;
            const s = typeof i === 'number' ? [i] : i;
            let r = [];

            if ((a = t.texturePreference) != null && a.format)
            {
                const l = (h = t.texturePreference) == null ? void 0 : h.format;

                r = typeof l === 'string' ? [l] : l;
                for (const c of this._detections) (await c.test()) || (r = await c.remove(r));
            }
            else for (const l of this._detections) (await l.test()) && (r = await l.add(r));
            this.resolver.prefer({ params: { format: r, resolution: s } }),
            t.preferences && this.setPreferences(t.preferences);
        }
        add(t, i, s)
        {
            this.resolver.add(t, i, s);
        }
        async load(t, i)
        {
            this._initialized || (await this.init());
            const s = Bi(t);
            const r = oe(t).map((a) =>
                (typeof a !== 'string'
                    ? (this.resolver.add(a.src, a), a.src)
                    : (this.resolver.hasKey(a) || this.resolver.add(a, a), a)),
            );
            const n = this.resolver.resolve(r);
            const o = await this._mapLoadToResolve(n, i);

            return s ? o[r[0]] : o;
        }
        addBundle(t, i)
        {
            this.resolver.addBundle(t, i);
        }
        async loadBundle(t, i)
        {
            this._initialized || (await this.init());
            let s = !1;

            typeof t === 'string' && ((s = !0), (t = [t]));
            const r = this.resolver.resolveBundle(t);
            const n = {};
            const o = Object.keys(r);
            let a = 0;
            let h = 0;
            const l = () =>
            {
                i == null || i(++a / h);
            };
            const c = o.map((u) =>
            {
                const d = r[u];

                return (
                    (h += Object.keys(d).length),
                    this._mapLoadToResolve(d, l).then((f) =>
                    {
                        n[u] = f;
                    })
                );
            });

            return await Promise.all(c), s ? n[t[0]] : n;
        }
        async backgroundLoad(t)
        {
            this._initialized || (await this.init()), typeof t === 'string' && (t = [t]);
            const i = this.resolver.resolve(t);

            this._backgroundLoader.add(Object.values(i));
        }
        async backgroundLoadBundle(t)
        {
            this._initialized || (await this.init()), typeof t === 'string' && (t = [t]);
            const i = this.resolver.resolveBundle(t);

            Object.values(i).forEach((s) =>
            {
                this._backgroundLoader.add(Object.values(s));
            });
        }
        reset()
        {
            this.resolver.reset(), this.loader.reset(), this.cache.reset(), (this._initialized = !1);
        }
        get(t)
        {
            if (typeof t === 'string') return ii.get(t);
            const i = {};

            for (let s = 0; s < t.length; s++) i[s] = ii.get(t[s]);

            return i;
        }
        async _mapLoadToResolve(t, i)
        {
            const s = Object.values(t);
            const r = Object.keys(t);

            this._backgroundLoader.active = !1;
            const n = await this.loader.load(s, i);

            this._backgroundLoader.active = !0;
            const o = {};

            return (
                s.forEach((a, h) =>
                {
                    const l = n[a.src];
                    const c = [a.src];

                    a.alias && c.push(...a.alias), (o[r[h]] = l), ii.set(c, l);
                }),
                o
            );
        }
        async unload(t)
        {
            this._initialized || (await this.init());
            const i = oe(t).map((r) => (typeof r !== 'string' ? r.src : r));
            const s = this.resolver.resolve(i);

            await this._unloadFromResolved(s);
        }
        async unloadBundle(t)
        {
            this._initialized || (await this.init()), (t = oe(t));
            const i = this.resolver.resolveBundle(t);
            const s = Object.keys(i).map((r) => this._unloadFromResolved(i[r]));

            await Promise.all(s);
        }
        async _unloadFromResolved(t)
        {
            const i = Object.values(t);

            i.forEach((s) =>
            {
                ii.remove(s.src);
            }),
            await this.loader.unload(i);
        }
        get detections()
        {
            return this._detections;
        }
        get preferWorkers()
        {
            return Fi.config.preferWorkers;
        }
        set preferWorkers(t)
        {
            z('7.2.0', 'Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead.'),
            this.setPreferences({ preferWorkers: t });
        }
        setPreferences(t)
        {
            this.loader.parsers.forEach((i) =>
            {
                !i.config
                    || Object.keys(i.config)
                        .filter((s) => s in t)
                        .forEach((s) =>
                        {
                            i.config[s] = t[s];
                        });
            });
        }
    }
    const Ni = new Ja();

    U.handleByList(M.LoadParser, Ni.loader.parsers)
        .handleByList(M.ResolveParser, Ni.resolver.parsers)
        .handleByList(M.CacheParser, Ni.cache.parsers)
        .handleByList(M.DetectionParser, Ni.detections);
    const Qa = {
        extension: M.CacheParser,
        test: (e) => Array.isArray(e) && e.every((t) => t instanceof B),
        getCacheableAssets: (e, t) =>
        {
            const i = {};

            return (
                e.forEach((s) =>
                {
                    t.forEach((r, n) =>
                    {
                        i[s + (n === 0 ? '' : n + 1)] = r;
                    });
                }),
                i
            );
        },
    };

    U.add(Qa);
    const th = {
        extension: { type: M.DetectionParser, priority: 1 },
        test: async () =>
        {
            if (!globalThis.createImageBitmap) return !1;
            const e
                    = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
            const t = await P.ADAPTER.fetch(e).then((i) => i.blob());

            return createImageBitmap(t).then(
                () => !0,
                () => !1,
            );
        },
        add: async (e) => [...e, 'avif'],
        remove: async (e) => e.filter((t) => t !== 'avif'),
    };

    U.add(th);
    const eh = {
        extension: { type: M.DetectionParser, priority: 0 },
        test: async () =>
        {
            if (!globalThis.createImageBitmap) return !1;
            const e = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
            const t = await P.ADAPTER.fetch(e).then((i) => i.blob());

            return createImageBitmap(t).then(
                () => !0,
                () => !1,
            );
        },
        add: async (e) => [...e, 'webp'],
        remove: async (e) => e.filter((t) => t !== 'webp'),
    };

    U.add(eh);
    const ih = ['png', 'jpg', 'jpeg'];
    const sh = {
        extension: { type: M.DetectionParser, priority: -1 },
        test: () => Promise.resolve(!0),
        add: async (e) => [...e, ...ih],
        remove: async (e) => e.filter((t) => !ih.includes(t)),
    };

    U.add(sh);
    const rh = {
        extension: M.ResolveParser,
        test: Fi.test,
        parse: (e) =>
        {
            let t; let
                i;

            return {
                resolution: parseFloat((i = (t = P.RETINA_PREFIX.exec(e)) == null ? void 0 : t[1]) != null ? i : '1'),
                format: e.split('.').pop(),
                src: e,
            };
        },
    };

    U.add(rh);
    var It = ((e) => (
        (e[(e.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] = 'COMPRESSED_RGB_S3TC_DXT1_EXT'),
        (e[(e.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] = 'COMPRESSED_RGBA_S3TC_DXT1_EXT'),
        (e[(e.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] = 'COMPRESSED_RGBA_S3TC_DXT3_EXT'),
        (e[(e.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] = 'COMPRESSED_RGBA_S3TC_DXT5_EXT'),
        (e[(e.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917)] = 'COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT'),
        (e[(e.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918)] = 'COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT'),
        (e[(e.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919)] = 'COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT'),
        (e[(e.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916)] = 'COMPRESSED_SRGB_S3TC_DXT1_EXT'),
        (e[(e.COMPRESSED_R11_EAC = 37488)] = 'COMPRESSED_R11_EAC'),
        (e[(e.COMPRESSED_SIGNED_R11_EAC = 37489)] = 'COMPRESSED_SIGNED_R11_EAC'),
        (e[(e.COMPRESSED_RG11_EAC = 37490)] = 'COMPRESSED_RG11_EAC'),
        (e[(e.COMPRESSED_SIGNED_RG11_EAC = 37491)] = 'COMPRESSED_SIGNED_RG11_EAC'),
        (e[(e.COMPRESSED_RGB8_ETC2 = 37492)] = 'COMPRESSED_RGB8_ETC2'),
        (e[(e.COMPRESSED_RGBA8_ETC2_EAC = 37496)] = 'COMPRESSED_RGBA8_ETC2_EAC'),
        (e[(e.COMPRESSED_SRGB8_ETC2 = 37493)] = 'COMPRESSED_SRGB8_ETC2'),
        (e[(e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] = 'COMPRESSED_SRGB8_ALPHA8_ETC2_EAC'),
        (e[(e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] = 'COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
        (e[(e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] = 'COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
        (e[(e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840)] = 'COMPRESSED_RGB_PVRTC_4BPPV1_IMG'),
        (e[(e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842)] = 'COMPRESSED_RGBA_PVRTC_4BPPV1_IMG'),
        (e[(e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841)] = 'COMPRESSED_RGB_PVRTC_2BPPV1_IMG'),
        (e[(e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843)] = 'COMPRESSED_RGBA_PVRTC_2BPPV1_IMG'),
        (e[(e.COMPRESSED_RGB_ETC1_WEBGL = 36196)] = 'COMPRESSED_RGB_ETC1_WEBGL'),
        (e[(e.COMPRESSED_RGB_ATC_WEBGL = 35986)] = 'COMPRESSED_RGB_ATC_WEBGL'),
        (e[(e.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986)] = 'COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL'),
        (e[(e.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798)] = 'COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL'),
        (e[(e.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808)] = 'COMPRESSED_RGBA_ASTC_4x4_KHR'),
        e
    ))(It || {});
    const Li = {
        33776: 0.5,
        33777: 0.5,
        33778: 1,
        33779: 1,
        35916: 0.5,
        35917: 0.5,
        35918: 1,
        35919: 1,
        37488: 0.5,
        37489: 0.5,
        37490: 1,
        37491: 1,
        37492: 0.5,
        37496: 1,
        37493: 0.5,
        37497: 1,
        37494: 0.5,
        37495: 0.5,
        35840: 0.5,
        35842: 0.5,
        35841: 0.25,
        35843: 0.25,
        36196: 0.5,
        35986: 0.5,
        35986: 1,
        34798: 1,
        37808: 1,
    };
    let xe; let
        si;

    function nh()
    {
        si = {
            s3tc: xe.getExtension('WEBGL_compressed_texture_s3tc'),
            s3tc_sRGB: xe.getExtension('WEBGL_compressed_texture_s3tc_srgb'),
            etc: xe.getExtension('WEBGL_compressed_texture_etc'),
            etc1: xe.getExtension('WEBGL_compressed_texture_etc1'),
            pvrtc:
                xe.getExtension('WEBGL_compressed_texture_pvrtc')
                || xe.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
            atc: xe.getExtension('WEBGL_compressed_texture_atc'),
            astc: xe.getExtension('WEBGL_compressed_texture_astc'),
        };
    }
    const oh = {
        extension: { type: M.DetectionParser, priority: 2 },
        test: async () =>
        {
            const t = P.ADAPTER.createCanvas().getContext('webgl');

            return t ? ((xe = t), !0) : (console.warn('WebGL not available for compressed textures.'), !1);
        },
        add: async (e) =>
        {
            si || nh();
            const t = [];

            for (const i in si) !si[i] || t.push(i);

            return [...t, ...e];
        },
        remove: async (e) => (si || nh(), e.filter((t) => !(t in si))),
    };

    U.add(oh);
    class ah extends Ye
    {
        constructor(t, i = { width: 1, height: 1, autoLoad: !0 })
        {
            let s; let
                r;

            typeof t === 'string' ? ((s = t), (r = new Uint8Array())) : ((s = null), (r = t)),
            super(r, i),
            (this.origin = s),
            (this.buffer = r ? new us(r) : null),
            this.origin && i.autoLoad !== !1 && this.load(),
            r != null && r.length && ((this.loaded = !0), this.onBlobLoaded(this.buffer.rawBinaryData));
        }
        onBlobLoaded(t) {}
        async load()
        {
            const s = await (await (await fetch(this.origin)).blob()).arrayBuffer();

            return (
                (this.data = new Uint32Array(s)),
                (this.buffer = new us(s)),
                (this.loaded = !0),
                this.onBlobLoaded(s),
                this.update(),
                this
            );
        }
    }
    class Ee extends ah
    {
        constructor(t, i)
        {
            super(t, i),
            (this.format = i.format),
            (this.levels = i.levels || 1),
            (this._width = i.width),
            (this._height = i.height),
            (this._extension = Ee._formatToExtension(this.format)),
            (i.levelBuffers || this.buffer)
                    && (this._levelBuffers
                        = i.levelBuffers
                        || Ee._createLevelBuffers(
                            t instanceof Uint8Array ? t : this.buffer.uint8View,
                            this.format,
                            this.levels,
                            4,
                            4,
                            this.width,
                            this.height,
                        ));
        }
        upload(t, i, s)
        {
            const r = t.gl;

            if (!t.context.extensions[this._extension])
            { throw new Error(`${this._extension} textures are not supported on the current machine`); }
            if (!this._levelBuffers) return !1;
            for (let o = 0, a = this.levels; o < a; o++)
            {
                const { levelID: h, levelWidth: l, levelHeight: c, levelBuffer: u } = this._levelBuffers[o];

                r.compressedTexImage2D(r.TEXTURE_2D, h, this.format, l, c, 0, u);
            }

            return !0;
        }
        onBlobLoaded()
        {
            this._levelBuffers = Ee._createLevelBuffers(
                this.buffer.uint8View,
                this.format,
                this.levels,
                4,
                4,
                this.width,
                this.height,
            );
        }
        static _formatToExtension(t)
        {
            if (t >= 33776 && t <= 33779) return 's3tc';
            if (t >= 37488 && t <= 37497) return 'etc';
            if (t >= 35840 && t <= 35843) return 'pvrtc';
            if (t >= 36196) return 'etc1';
            if (t >= 35986 && t <= 34798) return 'atc';
            throw new Error('Invalid (compressed) texture format given!');
        }
        static _createLevelBuffers(t, i, s, r, n, o, a)
        {
            const h = new Array(s);
            let l = t.byteOffset;
            let c = o;
            let u = a;
            let d = (c + r - 1) & ~(r - 1);
            let f = (u + n - 1) & ~(n - 1);
            let p = d * f * Li[i];

            for (let _ = 0; _ < s; _++)
            {
                (h[_] = {
                    levelID: _,
                    levelWidth: s > 1 ? c : d,
                    levelHeight: s > 1 ? u : f,
                    levelBuffer: new Uint8Array(t.buffer, l, p),
                }),
                (l += p),
                (c = c >> 1 || 1),
                (u = u >> 1 || 1),
                (d = (c + r - 1) & ~(r - 1)),
                (f = (u + n - 1) & ~(n - 1)),
                (p = d * f * Li[i]);
            }

            return h;
        }
    }
    const Sn = 4;
    const Os = 124;
    const Hu = 32;
    const hh = 20;
    const Xu = 542327876;
    const Us = { SIZE: 1, FLAGS: 2, HEIGHT: 3, WIDTH: 4, MIPMAP_COUNT: 7, PIXEL_FORMAT: 19 };
    const Vu = { SIZE: 0, FLAGS: 1, FOURCC: 2, RGB_BITCOUNT: 3, R_BIT_MASK: 4, G_BIT_MASK: 5, B_BIT_MASK: 6, A_BIT_MASK: 7 };
    const ks = { DXGI_FORMAT: 0, RESOURCE_DIMENSION: 1, MISC_FLAG: 2, ARRAY_SIZE: 3, MISC_FLAGS2: 4 };
    var zu = ((e) => (
        (e[(e.DXGI_FORMAT_UNKNOWN = 0)] = 'DXGI_FORMAT_UNKNOWN'),
        (e[(e.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1)] = 'DXGI_FORMAT_R32G32B32A32_TYPELESS'),
        (e[(e.DXGI_FORMAT_R32G32B32A32_FLOAT = 2)] = 'DXGI_FORMAT_R32G32B32A32_FLOAT'),
        (e[(e.DXGI_FORMAT_R32G32B32A32_UINT = 3)] = 'DXGI_FORMAT_R32G32B32A32_UINT'),
        (e[(e.DXGI_FORMAT_R32G32B32A32_SINT = 4)] = 'DXGI_FORMAT_R32G32B32A32_SINT'),
        (e[(e.DXGI_FORMAT_R32G32B32_TYPELESS = 5)] = 'DXGI_FORMAT_R32G32B32_TYPELESS'),
        (e[(e.DXGI_FORMAT_R32G32B32_FLOAT = 6)] = 'DXGI_FORMAT_R32G32B32_FLOAT'),
        (e[(e.DXGI_FORMAT_R32G32B32_UINT = 7)] = 'DXGI_FORMAT_R32G32B32_UINT'),
        (e[(e.DXGI_FORMAT_R32G32B32_SINT = 8)] = 'DXGI_FORMAT_R32G32B32_SINT'),
        (e[(e.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9)] = 'DXGI_FORMAT_R16G16B16A16_TYPELESS'),
        (e[(e.DXGI_FORMAT_R16G16B16A16_FLOAT = 10)] = 'DXGI_FORMAT_R16G16B16A16_FLOAT'),
        (e[(e.DXGI_FORMAT_R16G16B16A16_UNORM = 11)] = 'DXGI_FORMAT_R16G16B16A16_UNORM'),
        (e[(e.DXGI_FORMAT_R16G16B16A16_UINT = 12)] = 'DXGI_FORMAT_R16G16B16A16_UINT'),
        (e[(e.DXGI_FORMAT_R16G16B16A16_SNORM = 13)] = 'DXGI_FORMAT_R16G16B16A16_SNORM'),
        (e[(e.DXGI_FORMAT_R16G16B16A16_SINT = 14)] = 'DXGI_FORMAT_R16G16B16A16_SINT'),
        (e[(e.DXGI_FORMAT_R32G32_TYPELESS = 15)] = 'DXGI_FORMAT_R32G32_TYPELESS'),
        (e[(e.DXGI_FORMAT_R32G32_FLOAT = 16)] = 'DXGI_FORMAT_R32G32_FLOAT'),
        (e[(e.DXGI_FORMAT_R32G32_UINT = 17)] = 'DXGI_FORMAT_R32G32_UINT'),
        (e[(e.DXGI_FORMAT_R32G32_SINT = 18)] = 'DXGI_FORMAT_R32G32_SINT'),
        (e[(e.DXGI_FORMAT_R32G8X24_TYPELESS = 19)] = 'DXGI_FORMAT_R32G8X24_TYPELESS'),
        (e[(e.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20)] = 'DXGI_FORMAT_D32_FLOAT_S8X24_UINT'),
        (e[(e.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21)] = 'DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS'),
        (e[(e.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22)] = 'DXGI_FORMAT_X32_TYPELESS_G8X24_UINT'),
        (e[(e.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23)] = 'DXGI_FORMAT_R10G10B10A2_TYPELESS'),
        (e[(e.DXGI_FORMAT_R10G10B10A2_UNORM = 24)] = 'DXGI_FORMAT_R10G10B10A2_UNORM'),
        (e[(e.DXGI_FORMAT_R10G10B10A2_UINT = 25)] = 'DXGI_FORMAT_R10G10B10A2_UINT'),
        (e[(e.DXGI_FORMAT_R11G11B10_FLOAT = 26)] = 'DXGI_FORMAT_R11G11B10_FLOAT'),
        (e[(e.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27)] = 'DXGI_FORMAT_R8G8B8A8_TYPELESS'),
        (e[(e.DXGI_FORMAT_R8G8B8A8_UNORM = 28)] = 'DXGI_FORMAT_R8G8B8A8_UNORM'),
        (e[(e.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29)] = 'DXGI_FORMAT_R8G8B8A8_UNORM_SRGB'),
        (e[(e.DXGI_FORMAT_R8G8B8A8_UINT = 30)] = 'DXGI_FORMAT_R8G8B8A8_UINT'),
        (e[(e.DXGI_FORMAT_R8G8B8A8_SNORM = 31)] = 'DXGI_FORMAT_R8G8B8A8_SNORM'),
        (e[(e.DXGI_FORMAT_R8G8B8A8_SINT = 32)] = 'DXGI_FORMAT_R8G8B8A8_SINT'),
        (e[(e.DXGI_FORMAT_R16G16_TYPELESS = 33)] = 'DXGI_FORMAT_R16G16_TYPELESS'),
        (e[(e.DXGI_FORMAT_R16G16_FLOAT = 34)] = 'DXGI_FORMAT_R16G16_FLOAT'),
        (e[(e.DXGI_FORMAT_R16G16_UNORM = 35)] = 'DXGI_FORMAT_R16G16_UNORM'),
        (e[(e.DXGI_FORMAT_R16G16_UINT = 36)] = 'DXGI_FORMAT_R16G16_UINT'),
        (e[(e.DXGI_FORMAT_R16G16_SNORM = 37)] = 'DXGI_FORMAT_R16G16_SNORM'),
        (e[(e.DXGI_FORMAT_R16G16_SINT = 38)] = 'DXGI_FORMAT_R16G16_SINT'),
        (e[(e.DXGI_FORMAT_R32_TYPELESS = 39)] = 'DXGI_FORMAT_R32_TYPELESS'),
        (e[(e.DXGI_FORMAT_D32_FLOAT = 40)] = 'DXGI_FORMAT_D32_FLOAT'),
        (e[(e.DXGI_FORMAT_R32_FLOAT = 41)] = 'DXGI_FORMAT_R32_FLOAT'),
        (e[(e.DXGI_FORMAT_R32_UINT = 42)] = 'DXGI_FORMAT_R32_UINT'),
        (e[(e.DXGI_FORMAT_R32_SINT = 43)] = 'DXGI_FORMAT_R32_SINT'),
        (e[(e.DXGI_FORMAT_R24G8_TYPELESS = 44)] = 'DXGI_FORMAT_R24G8_TYPELESS'),
        (e[(e.DXGI_FORMAT_D24_UNORM_S8_UINT = 45)] = 'DXGI_FORMAT_D24_UNORM_S8_UINT'),
        (e[(e.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46)] = 'DXGI_FORMAT_R24_UNORM_X8_TYPELESS'),
        (e[(e.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47)] = 'DXGI_FORMAT_X24_TYPELESS_G8_UINT'),
        (e[(e.DXGI_FORMAT_R8G8_TYPELESS = 48)] = 'DXGI_FORMAT_R8G8_TYPELESS'),
        (e[(e.DXGI_FORMAT_R8G8_UNORM = 49)] = 'DXGI_FORMAT_R8G8_UNORM'),
        (e[(e.DXGI_FORMAT_R8G8_UINT = 50)] = 'DXGI_FORMAT_R8G8_UINT'),
        (e[(e.DXGI_FORMAT_R8G8_SNORM = 51)] = 'DXGI_FORMAT_R8G8_SNORM'),
        (e[(e.DXGI_FORMAT_R8G8_SINT = 52)] = 'DXGI_FORMAT_R8G8_SINT'),
        (e[(e.DXGI_FORMAT_R16_TYPELESS = 53)] = 'DXGI_FORMAT_R16_TYPELESS'),
        (e[(e.DXGI_FORMAT_R16_FLOAT = 54)] = 'DXGI_FORMAT_R16_FLOAT'),
        (e[(e.DXGI_FORMAT_D16_UNORM = 55)] = 'DXGI_FORMAT_D16_UNORM'),
        (e[(e.DXGI_FORMAT_R16_UNORM = 56)] = 'DXGI_FORMAT_R16_UNORM'),
        (e[(e.DXGI_FORMAT_R16_UINT = 57)] = 'DXGI_FORMAT_R16_UINT'),
        (e[(e.DXGI_FORMAT_R16_SNORM = 58)] = 'DXGI_FORMAT_R16_SNORM'),
        (e[(e.DXGI_FORMAT_R16_SINT = 59)] = 'DXGI_FORMAT_R16_SINT'),
        (e[(e.DXGI_FORMAT_R8_TYPELESS = 60)] = 'DXGI_FORMAT_R8_TYPELESS'),
        (e[(e.DXGI_FORMAT_R8_UNORM = 61)] = 'DXGI_FORMAT_R8_UNORM'),
        (e[(e.DXGI_FORMAT_R8_UINT = 62)] = 'DXGI_FORMAT_R8_UINT'),
        (e[(e.DXGI_FORMAT_R8_SNORM = 63)] = 'DXGI_FORMAT_R8_SNORM'),
        (e[(e.DXGI_FORMAT_R8_SINT = 64)] = 'DXGI_FORMAT_R8_SINT'),
        (e[(e.DXGI_FORMAT_A8_UNORM = 65)] = 'DXGI_FORMAT_A8_UNORM'),
        (e[(e.DXGI_FORMAT_R1_UNORM = 66)] = 'DXGI_FORMAT_R1_UNORM'),
        (e[(e.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67)] = 'DXGI_FORMAT_R9G9B9E5_SHAREDEXP'),
        (e[(e.DXGI_FORMAT_R8G8_B8G8_UNORM = 68)] = 'DXGI_FORMAT_R8G8_B8G8_UNORM'),
        (e[(e.DXGI_FORMAT_G8R8_G8B8_UNORM = 69)] = 'DXGI_FORMAT_G8R8_G8B8_UNORM'),
        (e[(e.DXGI_FORMAT_BC1_TYPELESS = 70)] = 'DXGI_FORMAT_BC1_TYPELESS'),
        (e[(e.DXGI_FORMAT_BC1_UNORM = 71)] = 'DXGI_FORMAT_BC1_UNORM'),
        (e[(e.DXGI_FORMAT_BC1_UNORM_SRGB = 72)] = 'DXGI_FORMAT_BC1_UNORM_SRGB'),
        (e[(e.DXGI_FORMAT_BC2_TYPELESS = 73)] = 'DXGI_FORMAT_BC2_TYPELESS'),
        (e[(e.DXGI_FORMAT_BC2_UNORM = 74)] = 'DXGI_FORMAT_BC2_UNORM'),
        (e[(e.DXGI_FORMAT_BC2_UNORM_SRGB = 75)] = 'DXGI_FORMAT_BC2_UNORM_SRGB'),
        (e[(e.DXGI_FORMAT_BC3_TYPELESS = 76)] = 'DXGI_FORMAT_BC3_TYPELESS'),
        (e[(e.DXGI_FORMAT_BC3_UNORM = 77)] = 'DXGI_FORMAT_BC3_UNORM'),
        (e[(e.DXGI_FORMAT_BC3_UNORM_SRGB = 78)] = 'DXGI_FORMAT_BC3_UNORM_SRGB'),
        (e[(e.DXGI_FORMAT_BC4_TYPELESS = 79)] = 'DXGI_FORMAT_BC4_TYPELESS'),
        (e[(e.DXGI_FORMAT_BC4_UNORM = 80)] = 'DXGI_FORMAT_BC4_UNORM'),
        (e[(e.DXGI_FORMAT_BC4_SNORM = 81)] = 'DXGI_FORMAT_BC4_SNORM'),
        (e[(e.DXGI_FORMAT_BC5_TYPELESS = 82)] = 'DXGI_FORMAT_BC5_TYPELESS'),
        (e[(e.DXGI_FORMAT_BC5_UNORM = 83)] = 'DXGI_FORMAT_BC5_UNORM'),
        (e[(e.DXGI_FORMAT_BC5_SNORM = 84)] = 'DXGI_FORMAT_BC5_SNORM'),
        (e[(e.DXGI_FORMAT_B5G6R5_UNORM = 85)] = 'DXGI_FORMAT_B5G6R5_UNORM'),
        (e[(e.DXGI_FORMAT_B5G5R5A1_UNORM = 86)] = 'DXGI_FORMAT_B5G5R5A1_UNORM'),
        (e[(e.DXGI_FORMAT_B8G8R8A8_UNORM = 87)] = 'DXGI_FORMAT_B8G8R8A8_UNORM'),
        (e[(e.DXGI_FORMAT_B8G8R8X8_UNORM = 88)] = 'DXGI_FORMAT_B8G8R8X8_UNORM'),
        (e[(e.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89)] = 'DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM'),
        (e[(e.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90)] = 'DXGI_FORMAT_B8G8R8A8_TYPELESS'),
        (e[(e.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91)] = 'DXGI_FORMAT_B8G8R8A8_UNORM_SRGB'),
        (e[(e.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92)] = 'DXGI_FORMAT_B8G8R8X8_TYPELESS'),
        (e[(e.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93)] = 'DXGI_FORMAT_B8G8R8X8_UNORM_SRGB'),
        (e[(e.DXGI_FORMAT_BC6H_TYPELESS = 94)] = 'DXGI_FORMAT_BC6H_TYPELESS'),
        (e[(e.DXGI_FORMAT_BC6H_UF16 = 95)] = 'DXGI_FORMAT_BC6H_UF16'),
        (e[(e.DXGI_FORMAT_BC6H_SF16 = 96)] = 'DXGI_FORMAT_BC6H_SF16'),
        (e[(e.DXGI_FORMAT_BC7_TYPELESS = 97)] = 'DXGI_FORMAT_BC7_TYPELESS'),
        (e[(e.DXGI_FORMAT_BC7_UNORM = 98)] = 'DXGI_FORMAT_BC7_UNORM'),
        (e[(e.DXGI_FORMAT_BC7_UNORM_SRGB = 99)] = 'DXGI_FORMAT_BC7_UNORM_SRGB'),
        (e[(e.DXGI_FORMAT_AYUV = 100)] = 'DXGI_FORMAT_AYUV'),
        (e[(e.DXGI_FORMAT_Y410 = 101)] = 'DXGI_FORMAT_Y410'),
        (e[(e.DXGI_FORMAT_Y416 = 102)] = 'DXGI_FORMAT_Y416'),
        (e[(e.DXGI_FORMAT_NV12 = 103)] = 'DXGI_FORMAT_NV12'),
        (e[(e.DXGI_FORMAT_P010 = 104)] = 'DXGI_FORMAT_P010'),
        (e[(e.DXGI_FORMAT_P016 = 105)] = 'DXGI_FORMAT_P016'),
        (e[(e.DXGI_FORMAT_420_OPAQUE = 106)] = 'DXGI_FORMAT_420_OPAQUE'),
        (e[(e.DXGI_FORMAT_YUY2 = 107)] = 'DXGI_FORMAT_YUY2'),
        (e[(e.DXGI_FORMAT_Y210 = 108)] = 'DXGI_FORMAT_Y210'),
        (e[(e.DXGI_FORMAT_Y216 = 109)] = 'DXGI_FORMAT_Y216'),
        (e[(e.DXGI_FORMAT_NV11 = 110)] = 'DXGI_FORMAT_NV11'),
        (e[(e.DXGI_FORMAT_AI44 = 111)] = 'DXGI_FORMAT_AI44'),
        (e[(e.DXGI_FORMAT_IA44 = 112)] = 'DXGI_FORMAT_IA44'),
        (e[(e.DXGI_FORMAT_P8 = 113)] = 'DXGI_FORMAT_P8'),
        (e[(e.DXGI_FORMAT_A8P8 = 114)] = 'DXGI_FORMAT_A8P8'),
        (e[(e.DXGI_FORMAT_B4G4R4A4_UNORM = 115)] = 'DXGI_FORMAT_B4G4R4A4_UNORM'),
        (e[(e.DXGI_FORMAT_P208 = 116)] = 'DXGI_FORMAT_P208'),
        (e[(e.DXGI_FORMAT_V208 = 117)] = 'DXGI_FORMAT_V208'),
        (e[(e.DXGI_FORMAT_V408 = 118)] = 'DXGI_FORMAT_V408'),
        (e[(e.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119)] = 'DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE'),
        (e[(e.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120)]
                = 'DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE'),
        (e[(e.DXGI_FORMAT_FORCE_UINT = 121)] = 'DXGI_FORMAT_FORCE_UINT'),
        e
    ))(zu || {});
    var Wu = ((e) => (
        (e[(e.DDS_DIMENSION_TEXTURE1D = 2)] = 'DDS_DIMENSION_TEXTURE1D'),
        (e[(e.DDS_DIMENSION_TEXTURE2D = 3)] = 'DDS_DIMENSION_TEXTURE2D'),
        (e[(e.DDS_DIMENSION_TEXTURE3D = 6)] = 'DDS_DIMENSION_TEXTURE3D'),
        e
    ))(Wu || {});
    const $u = 1;
    const ju = 2;
    const Yu = 4;
    const qu = 64;
    const Ku = 512;
    const Zu = 131072;
    const Ju = 827611204;
    const Qu = 861165636;
    const td = 894720068;
    const ed = 808540228;
    const id = 4;
    const sd = {
        [Ju]: It.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        [Qu]: It.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        [td]: It.COMPRESSED_RGBA_S3TC_DXT5_EXT,
    };
    const rd = {
        70: It.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        71: It.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        73: It.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        74: It.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        76: It.COMPRESSED_RGBA_S3TC_DXT5_EXT,
        77: It.COMPRESSED_RGBA_S3TC_DXT5_EXT,
        72: It.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
        75: It.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
        78: It.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
    };

    function lh(e)
    {
        const t = new Uint32Array(e);

        if (t[0] !== Xu) throw new Error('Invalid DDS file magic word');
        const s = new Uint32Array(e, 0, Os / Uint32Array.BYTES_PER_ELEMENT);
        const r = s[Us.HEIGHT];
        const n = s[Us.WIDTH];
        const o = s[Us.MIPMAP_COUNT];
        const a = new Uint32Array(e, Us.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT, Hu / Uint32Array.BYTES_PER_ELEMENT);
        const h = a[$u];

        if (h & Yu)
        {
            const l = a[Vu.FOURCC];

            if (l !== ed)
            {
                const y = sd[l];
                const x = Sn + Os;
                const A = new Uint8Array(e, x);

                return [new Ee(A, { format: y, width: n, height: r, levels: o })];
            }
            const c = Sn + Os;
            const u = new Uint32Array(t.buffer, c, hh / Uint32Array.BYTES_PER_ELEMENT);
            const d = u[ks.DXGI_FORMAT];
            const f = u[ks.RESOURCE_DIMENSION];
            const p = u[ks.MISC_FLAG];
            const _ = u[ks.ARRAY_SIZE];
            const g = rd[d];

            if (g === void 0) throw new Error(`DDSParser cannot parse texture data with DXGI format ${d}`);
            if (p === id) throw new Error('DDSParser does not support cubemap textures');
            if (f === 6) throw new Error('DDSParser does not supported 3D texture data');
            const v = new Array();
            const T = Sn + Os + hh;

            if (_ === 1) v.push(new Uint8Array(e, T));
            else
            {
                const y = Li[g];
                let x = 0;
                let A = n;
                let D = r;

                for (let E = 0; E < o; E++)
                {
                    const O = Math.max(1, (A + 3) & -4);
                    const H = Math.max(1, (D + 3) & -4);

                    (x += O * H * y), (A = A >>> 1), (D = D >>> 1);
                }
                let R = T;

                for (let E = 0; E < _; E++) v.push(new Uint8Array(e, R, x)), (R += x);
            }

            return v.map((y) => new Ee(y, { format: g, width: n, height: r, levels: o }));
        }
        throw h & qu
            ? new Error('DDSParser does not support uncompressed texture data.')
            : h & Ku
                ? new Error('DDSParser does not supported YUV uncompressed texture data.')
                : h & Zu
                    ? new Error('DDSParser does not support single-channel (lumninance) texture data!')
                    : h & ju
                        ? new Error('DDSParser does not support single-channel (alpha) texture data!')
                        : new Error('DDSParser failed to load a texture file due to an unknown reason!');
    }
    const ch = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10];
    const nd = 67305985;
    const Qt = {
        FILE_IDENTIFIER: 0,
        ENDIANNESS: 12,
        GL_TYPE: 16,
        GL_TYPE_SIZE: 20,
        GL_FORMAT: 24,
        GL_INTERNAL_FORMAT: 28,
        GL_BASE_INTERNAL_FORMAT: 32,
        PIXEL_WIDTH: 36,
        PIXEL_HEIGHT: 40,
        PIXEL_DEPTH: 44,
        NUMBER_OF_ARRAY_ELEMENTS: 48,
        NUMBER_OF_FACES: 52,
        NUMBER_OF_MIPMAP_LEVELS: 56,
        BYTES_OF_KEY_VALUE_DATA: 60,
    };
    const An = 64;
    const Rn = {
        [k.UNSIGNED_BYTE]: 1,
        [k.UNSIGNED_SHORT]: 2,
        [k.INT]: 4,
        [k.UNSIGNED_INT]: 4,
        [k.FLOAT]: 4,
        [k.HALF_FLOAT]: 8,
    };
    const uh = { [C.RGBA]: 4, [C.RGB]: 3, [C.RG]: 2, [C.RED]: 1, [C.LUMINANCE]: 1, [C.LUMINANCE_ALPHA]: 2, [C.ALPHA]: 1 };
    const dh = { [k.UNSIGNED_SHORT_4_4_4_4]: 2, [k.UNSIGNED_SHORT_5_5_5_1]: 2, [k.UNSIGNED_SHORT_5_6_5]: 2 };

    function fh(e, t, i = !1)
    {
        const s = new DataView(t);

        if (!od(e, s)) return null;
        const r = s.getUint32(Qt.ENDIANNESS, !0) === nd;
        const n = s.getUint32(Qt.GL_TYPE, r);
        const o = s.getUint32(Qt.GL_FORMAT, r);
        const a = s.getUint32(Qt.GL_INTERNAL_FORMAT, r);
        const h = s.getUint32(Qt.PIXEL_WIDTH, r);
        const l = s.getUint32(Qt.PIXEL_HEIGHT, r) || 1;
        const c = s.getUint32(Qt.PIXEL_DEPTH, r) || 1;
        const u = s.getUint32(Qt.NUMBER_OF_ARRAY_ELEMENTS, r) || 1;
        const d = s.getUint32(Qt.NUMBER_OF_FACES, r);
        const f = s.getUint32(Qt.NUMBER_OF_MIPMAP_LEVELS, r);
        const p = s.getUint32(Qt.BYTES_OF_KEY_VALUE_DATA, r);

        if (l === 0 || c !== 1) throw new Error('Only 2D textures are supported');
        if (d !== 1) throw new Error('CubeTextures are not supported by KTXLoader yet!');
        if (u !== 1) throw new Error('WebGL does not support array textures');
        const _ = 4;
        const g = 4;
        const v = (h + 3) & -4;
        const T = (l + 3) & -4;
        const y = new Array(u);
        let x = h * l;

        n === 0 && (x = v * T);
        let A;

        if ((n !== 0 ? (Rn[n] ? (A = Rn[n] * uh[o]) : (A = dh[n])) : (A = Li[a]), A === void 0))
        { throw new Error('Unable to resolve the pixel format stored in the *.ktx file!'); }
        const D = i ? hd(s, p, r) : null;
        let E = x * A;
        let O = h;
        let H = l;
        let I = v;
        let N = T;
        let w = An + p;

        for (let b = 0; b < f; b++)
        {
            const W = s.getUint32(w, r);
            let q = w + 4;

            for (let F = 0; F < u; F++)
            {
                let Z = y[F];

                Z || (Z = y[F] = new Array(f)),
                (Z[b] = {
                    levelID: b,
                    levelWidth: f > 1 || n !== 0 ? O : I,
                    levelHeight: f > 1 || n !== 0 ? H : N,
                    levelBuffer: new Uint8Array(t, q, E),
                }),
                (q += E);
            }
            (w += W + 4),
            (w = w % 4 !== 0 ? w + 4 - (w % 4) : w),
            (O = O >> 1 || 1),
            (H = H >> 1 || 1),
            (I = (O + _ - 1) & ~(_ - 1)),
            (N = (H + g - 1) & ~(g - 1)),
            (E = I * N * A);
        }

        return n !== 0
            ? {
                uncompressed: y.map((b) =>
                {
                    let W = b[0].levelBuffer;
                    let q = !1;

                    return (
                        n === k.FLOAT
                            ? (W = new Float32Array(
                                b[0].levelBuffer.buffer,
                                b[0].levelBuffer.byteOffset,
                                b[0].levelBuffer.byteLength / 4,
                            ))
                            : n === k.UNSIGNED_INT
                                ? ((q = !0),
                                (W = new Uint32Array(
                                    b[0].levelBuffer.buffer,
                                    b[0].levelBuffer.byteOffset,
                                    b[0].levelBuffer.byteLength / 4,
                                )))
                                : n === k.INT
                                && ((q = !0),
                                (W = new Int32Array(
                                    b[0].levelBuffer.buffer,
                                    b[0].levelBuffer.byteOffset,
                                    b[0].levelBuffer.byteLength / 4,
                                ))),
                        {
                            resource: new Ye(W, { width: b[0].levelWidth, height: b[0].levelHeight }),
                            type: n,
                            format: q ? ad(o) : o,
                        }
                    );
                }),
                kvData: D,
            }
            : {
                compressed: y.map((b) => new Ee(null, { format: a, width: h, height: l, levels: f, levelBuffers: b })),
                kvData: D,
            };
    }
    function od(e, t)
    {
        for (let i = 0; i < ch.length; i++)
        { if (t.getUint8(i) !== ch[i]) return console.error(`${e} is not a valid *.ktx file!`), !1; }

        return !0;
    }
    function ad(e)
    {
        switch (e)
        {
            case C.RGBA:
                return C.RGBA_INTEGER;
            case C.RGB:
                return C.RGB_INTEGER;
            case C.RG:
                return C.RG_INTEGER;
            case C.RED:
                return C.RED_INTEGER;
            default:
                return e;
        }
    }
    function hd(e, t, i)
    {
        const s = new Map();
        let r = 0;

        for (; r < t;)
        {
            const n = e.getUint32(An + r, i);
            const o = An + r + 4;
            const a = 3 - ((n + 3) % 4);

            if (n === 0 || n > t - r)
            {
                console.error('KTXLoader: keyAndValueByteSize out of bounds');
                break;
            }
            let h = 0;

            for (; h < n && e.getUint8(o + h) !== 0; h++);
            if (h === -1)
            {
                console.error('KTXLoader: Failed to find null byte terminating kvData key');
                break;
            }
            const l = new TextDecoder().decode(new Uint8Array(e.buffer, o, h));
            const c = new DataView(e.buffer, o + h + 1, n - h - 1);

            s.set(l, c), (r += 4 + n + a);
        }

        return s;
    }
    const ph = {
        extension: { type: M.LoadParser, priority: Jt.High },
        name: 'loadDDS',
        test(e)
        {
            return be(e, '.dds');
        },
        async load(e, t, i)
        {
            const r = await (await P.ADAPTER.fetch(e)).arrayBuffer();
            const o = lh(r).map((a) =>
            {
                const h = new V(
                    a,
                    Et({ mipmap: Wt.OFF, alphaMode: Nt.NO_PREMULTIPLIED_ALPHA, resolution: fe(e) }, t.data),
                );

                return Di(h, i, e);
            });

            return o.length === 1 ? o[0] : o;
        },
        unload(e)
        {
            Array.isArray(e) ? e.forEach((t) => t.destroy(!0)) : e.destroy(!0);
        },
    };

    U.add(ph);
    const mh = {
        extension: { type: M.LoadParser, priority: Jt.High },
        name: 'loadKTX',
        test(e)
        {
            return be(e, '.ktx');
        },
        async load(e, t, i)
        {
            const r = await (await P.ADAPTER.fetch(e)).arrayBuffer();
            const { compressed: n, uncompressed: o, kvData: a } = fh(e, r);
            const h = n != null ? n : o;
            const l = Et({ mipmap: Wt.OFF, alphaMode: Nt.NO_PREMULTIPLIED_ALPHA, resolution: fe(e) }, t.data);
            const c = h.map((u) =>
            {
                h === o && Object.assign(l, { type: u.type, format: u.format });
                const d = new V(u, l);

                return (d.ktxKeyValueData = a), Di(d, i, e);
            });

            return c.length === 1 ? c[0] : c;
        },
        unload(e)
        {
            Array.isArray(e) ? e.forEach((t) => t.destroy(!0)) : e.destroy(!0);
        },
    };

    U.add(mh);
    const _h = {
        extension: M.ResolveParser,
        test: (e) =>
        {
            const i = e.split('?')[0].split('.').pop();

            return ['basis', 'ktx', 'dds'].includes(i);
        },
        parse: (e) =>
        {
            let s; let r; let n; let
                o;

            if (e.split('?')[0].split('.').pop() === 'ktx')
            {
                const a = ['.s3tc.ktx', '.s3tc_sRGB.ktx', '.etc.ktx', '.etc1.ktx', '.pvrt.ktx', '.atc.ktx', '.astc.ktx'];

                if (a.some((h) => e.endsWith(h)))
                {
                    return {
                        resolution: parseFloat(
                            (r = (s = P.RETINA_PREFIX.exec(e)) == null ? void 0 : s[1]) != null ? r : '1',
                        ),
                        format: a.find((h) => e.endsWith(h)),
                        src: e,
                    };
                }
            }

            return {
                resolution: parseFloat((o = (n = P.RETINA_PREFIX.exec(e)) == null ? void 0 : n[1]) != null ? o : '1'),
                format: e.split('.').pop(),
                src: e,
            };
        },
    };

    U.add(_h);
    const ld = new $();
    const cd = 4;
    const Cn = class
    {
        constructor(e)
        {
            this.renderer = e;
        }
        async image(e, t, i)
        {
            const s = new Image();

            return (s.src = await this.base64(e, t, i)), s;
        }
        async base64(e, t, i)
        {
            const s = this.canvas(e);

            if (s.toDataURL !== void 0) return s.toDataURL(t, i);
            if (s.convertToBlob !== void 0)
            {
                const r = await s.convertToBlob({ type: t, quality: i });

                return await new Promise((n) =>
                {
                    const o = new FileReader();

                    (o.onload = () => n(o.result)), o.readAsDataURL(r);
                });
            }
            throw new Error('Extract.base64() requires ICanvas.toDataURL or ICanvas.convertToBlob to be implemented');
        }
        canvas(e, t)
        {
            const { pixels: i, width: s, height: r, flipY: n } = this._rawPixels(e, t);
            let o = new Er(s, r, 1);
            const a = o.context.getImageData(0, 0, s, r);

            if ((Cn.arrayPostDivide(i, a.data), o.context.putImageData(a, 0, 0), n))
            {
                const h = new Er(o.width, o.height, 1);

                h.context.scale(1, -1), h.context.drawImage(o.canvas, 0, -r), o.destroy(), (o = h);
            }

            return o.canvas;
        }
        pixels(e, t)
        {
            const { pixels: i } = this._rawPixels(e, t);

            return Cn.arrayPostDivide(i, i), i;
        }
        _rawPixels(e, t)
        {
            const i = this.renderer;

            if (!i) throw new Error('The Extract has already been destroyed');
            let s;
            let r = !1;
            let n;
            let o = !1;

            if (e)
            {
                if (e instanceof ge) n = e;
                else
                {
                    const u = i.context.webGLVersion >= 2 ? i.multisample : nt.NONE;

                    if (((n = i.generateTexture(e, { multisample: u })), u !== nt.NONE))
                    {
                        const d = ge.create({ width: n.width, height: n.height });

                        i.framebuffer.bind(n.framebuffer),
                        i.framebuffer.blit(d.framebuffer),
                        i.framebuffer.bind(),
                        n.destroy(!0),
                        (n = d);
                    }
                    o = !0;
                }
            }
            n
                ? ((s = n.baseTexture.resolution), (t = t != null ? t : n.frame), (r = !1), i.renderTexture.bind(n))
                : ((s = i.resolution),
                t || ((t = ld), (t.width = i.width), (t.height = i.height)),
                (r = !0),
                i.renderTexture.bind());
            const a = Math.round(t.width * s);
            const h = Math.round(t.height * s);
            const l = new Uint8Array(cd * a * h);
            const c = i.gl;

            return (
                c.readPixels(Math.round(t.x * s), Math.round(t.y * s), a, h, c.RGBA, c.UNSIGNED_BYTE, l),
                o && (n == null || n.destroy(!0)),
                { pixels: l, width: a, height: h, flipY: r }
            );
        }
        destroy()
        {
            this.renderer = null;
        }
        static arrayPostDivide(e, t)
        {
            for (let i = 0; i < e.length; i += 4)
            {
                const s = (t[i + 3] = e[i + 3]);

                s !== 0
                    ? ((t[i] = Math.round(Math.min((e[i] * 255) / s, 255))),
                    (t[i + 1] = Math.round(Math.min((e[i + 1] * 255) / s, 255))),
                    (t[i + 2] = Math.round(Math.min((e[i + 2] * 255) / s, 255))))
                    : ((t[i] = e[i]), (t[i + 1] = e[i + 1]), (t[i + 2] = e[i + 2]));
            }
        }
    };
    const In = Cn;

    (In.extension = { name: 'extract', type: M.RendererSystem }), U.add(In);
    const Oi = {
        build(e)
        {
            const t = e.points;
            let i; let s; let r; let n; let o; let
                a;

            if (e.type === _t.CIRC)
            {
                const p = e.shape;

                (i = p.x), (s = p.y), (o = a = p.radius), (r = n = 0);
            }
            else if (e.type === _t.ELIP)
            {
                const p = e.shape;

                (i = p.x), (s = p.y), (o = p.width), (a = p.height), (r = n = 0);
            }
            else
            {
                const p = e.shape;
                const _ = p.width / 2;
                const g = p.height / 2;

                (i = p.x + _),
                (s = p.y + g),
                (o = a = Math.max(0, Math.min(p.radius, Math.min(_, g)))),
                (r = _ - o),
                (n = g - a);
            }
            if (!(o >= 0 && a >= 0 && r >= 0 && n >= 0))
            {
                t.length = 0;

                return;
            }
            const h = Math.ceil(2.3 * Math.sqrt(o + a));
            const l = h * 8 + (r ? 4 : 0) + (n ? 4 : 0);

            if (((t.length = l), l === 0)) return;
            if (h === 0)
            {
                (t.length = 8), (t[0] = t[6] = i + r), (t[1] = t[3] = s + n), (t[2] = t[4] = i - r), (t[5] = t[7] = s - n);

                return;
            }
            let c = 0;
            let u = h * 4 + (r ? 2 : 0) + 2;
            let d = u;
            let f = l;

            {
                const p = r + o;
                const _ = n;
                const g = i + p;
                const v = i - p;
                const T = s + _;

                if (((t[c++] = g), (t[c++] = T), (t[--u] = T), (t[--u] = v), n))
                {
                    const y = s - _;

                    (t[d++] = v), (t[d++] = y), (t[--f] = y), (t[--f] = g);
                }
            }
            for (let p = 1; p < h; p++)
            {
                const _ = (Math.PI / 2) * (p / h);
                const g = r + Math.cos(_) * o;
                const v = n + Math.sin(_) * a;
                const T = i + g;
                const y = i - g;
                const x = s + v;
                const A = s - v;

                (t[c++] = T),
                (t[c++] = x),
                (t[--u] = x),
                (t[--u] = y),
                (t[d++] = y),
                (t[d++] = A),
                (t[--f] = A),
                (t[--f] = T);
            }
            {
                const p = r;
                const _ = n + a;
                const g = i + p;
                const v = i - p;
                const T = s + _;
                const y = s - _;

                (t[c++] = g),
                (t[c++] = T),
                (t[--f] = y),
                (t[--f] = g),
                r && ((t[c++] = v), (t[c++] = T), (t[--f] = y), (t[--f] = v));
            }
        },
        triangulate(e, t)
        {
            const i = e.points;
            const s = t.points;
            const r = t.indices;

            if (i.length === 0) return;
            let n = s.length / 2;
            const o = n;
            let a; let
                h;

            if (e.type !== _t.RREC)
            {
                const c = e.shape;

                (a = c.x), (h = c.y);
            }
            else
            {
                const c = e.shape;

                (a = c.x + c.width / 2), (h = c.y + c.height / 2);
            }
            const l = e.matrix;

            s.push(e.matrix ? l.a * a + l.c * h + l.tx : a, e.matrix ? l.b * a + l.d * h + l.ty : h),
            n++,
            s.push(i[0], i[1]);
            for (let c = 2; c < i.length; c += 2) s.push(i[c], i[c + 1]), r.push(n++, o, n);
            r.push(o + 1, o, n);
        },
    };

    function gh(e, t = !1)
    {
        const i = e.length;

        if (i < 6) return;
        let s = 0;

        for (let r = 0, n = e[i - 2], o = e[i - 1]; r < i; r += 2)
        {
            const a = e[r];
            const h = e[r + 1];

            (s += (a - n) * (h + o)), (n = a), (o = h);
        }
        if ((!t && s > 0) || (t && s <= 0))
        {
            const r = i / 2;

            for (let n = r + (r % 2); n < i; n += 2)
            {
                const o = i - n - 2;
                const a = i - n - 1;
                const h = n;
                const l = n + 1;

                ([e[o], e[h]] = [e[h], e[o]]), ([e[a], e[l]] = [e[l], e[a]]);
            }
        }
    }
    const Pn = {
        build(e)
        {
            e.points = e.shape.points.slice();
        },
        triangulate(e, t)
        {
            let i = e.points;
            const s = e.holes;
            const r = t.points;
            const n = t.indices;

            if (i.length >= 6)
            {
                gh(i, !1);
                const o = [];

                for (let l = 0; l < s.length; l++)
                {
                    const c = s[l];

                    gh(c.points, !0), o.push(i.length / 2), (i = i.concat(c.points));
                }
                const a = or(i, o, 2);

                if (!a) return;
                const h = r.length / 2;

                for (let l = 0; l < a.length; l += 3) n.push(a[l] + h), n.push(a[l + 1] + h), n.push(a[l + 2] + h);
                for (let l = 0; l < i.length; l++) r.push(i[l]);
            }
        },
    };
    const yh = {
        build(e)
        {
            const t = e.shape;
            const i = t.x;
            const s = t.y;
            const r = t.width;
            const n = t.height;
            const o = e.points;

            (o.length = 0), r >= 0 && n >= 0 && o.push(i, s, i + r, s, i + r, s + n, i, s + n);
        },
        triangulate(e, t)
        {
            const i = e.points;
            const s = t.points;

            if (i.length === 0) return;
            const r = s.length / 2;

            s.push(i[0], i[1], i[2], i[3], i[6], i[7], i[4], i[5]), t.indices.push(r, r + 1, r + 2, r + 1, r + 2, r + 3);
        },
    };
    const vh = {
        build(e)
        {
            Oi.build(e);
        },
        triangulate(e, t)
        {
            Oi.triangulate(e, t);
        },
    };
    var Vt = ((e) => ((e.MITER = 'miter'), (e.BEVEL = 'bevel'), (e.ROUND = 'round'), e))(Vt || {});
    var we = ((e) => ((e.BUTT = 'butt'), (e.ROUND = 'round'), (e.SQUARE = 'square'), e))(we || {});
    const Se = {
        adaptive: !0,
        maxLength: 10,
        minSegments: 8,
        maxSegments: 2048,
        epsilon: 1e-4,
        _segmentsCount(e, t = 20)
        {
            if (!this.adaptive || !e || isNaN(e)) return t;
            let i = Math.ceil(e / this.maxLength);

            return i < this.minSegments ? (i = this.minSegments) : i > this.maxSegments && (i = this.maxSegments), i;
        },
    };
    const ud = Se;

    class Mn
    {
        static curveTo(t, i, s, r, n, o)
        {
            const a = o[o.length - 2];
            const l = o[o.length - 1] - i;
            const c = a - t;
            const u = r - i;
            const d = s - t;
            const f = Math.abs(l * d - c * u);

            if (f < 1e-8 || n === 0) return (o[o.length - 2] !== t || o[o.length - 1] !== i) && o.push(t, i), null;
            const p = l * l + c * c;
            const _ = u * u + d * d;
            const g = l * u + c * d;
            const v = (n * Math.sqrt(p)) / f;
            const T = (n * Math.sqrt(_)) / f;
            const y = (v * g) / p;
            const x = (T * g) / _;
            const A = v * d + T * c;
            const D = v * u + T * l;
            const R = c * (T + y);
            const E = l * (T + y);
            const O = d * (v + x);
            const H = u * (v + x);
            const I = Math.atan2(E - D, R - A);
            const N = Math.atan2(H - D, O - A);

            return { cx: A + t, cy: D + i, radius: n, startAngle: I, endAngle: N, anticlockwise: c * u > d * l };
        }
        static arc(t, i, s, r, n, o, a, h, l)
        {
            const c = a - o;
            const u = Se._segmentsCount(Math.abs(c) * n, Math.ceil(Math.abs(c) / yi) * 40);
            const d = c / (u * 2);
            const f = d * 2;
            const p = Math.cos(d);
            const _ = Math.sin(d);
            const g = u - 1;
            const v = (g % 1) / g;

            for (let T = 0; T <= g; ++T)
            {
                const y = T + v * T;
                const x = d + o + f * y;
                const A = Math.cos(x);
                const D = -Math.sin(x);

                l.push((p * A + _ * D) * n + s, (p * -D + _ * A) * n + r);
            }
        }
    }
    class xh
    {
        constructor()
        {
            this.reset();
        }
        begin(t, i, s)
        {
            this.reset(), (this.style = t), (this.start = i), (this.attribStart = s);
        }
        end(t, i)
        {
            (this.attribSize = i - this.attribStart), (this.size = t - this.start);
        }
        reset()
        {
            (this.style = null), (this.size = 0), (this.start = 0), (this.attribStart = 0), (this.attribSize = 0);
        }
    }
    class Gs
    {
        static curveLength(t, i, s, r, n, o, a, h)
        {
            let c = 0;
            let u = 0;
            let d = 0;
            let f = 0;
            let p = 0;
            let _ = 0;
            let g = 0;
            let v = 0;
            let T = 0;
            let y = 0;
            let x = 0;
            let A = t;
            let D = i;

            for (let R = 1; R <= 10; ++R)
            {
                (u = R / 10),
                (d = u * u),
                (f = d * u),
                (p = 1 - u),
                (_ = p * p),
                (g = _ * p),
                (v = g * t + 3 * _ * u * s + 3 * p * d * n + f * a),
                (T = g * i + 3 * _ * u * r + 3 * p * d * o + f * h),
                (y = A - v),
                (x = D - T),
                (A = v),
                (D = T),
                (c += Math.sqrt(y * y + x * x));
            }

            return c;
        }
        static curveTo(t, i, s, r, n, o, a)
        {
            const h = a[a.length - 2];
            const l = a[a.length - 1];

            a.length -= 2;
            const c = Se._segmentsCount(Gs.curveLength(h, l, t, i, s, r, n, o));
            let u = 0;
            let d = 0;
            let f = 0;
            let p = 0;
            let _ = 0;

            a.push(h, l);
            for (let g = 1, v = 0; g <= c; ++g)
            {
                (v = g / c),
                (u = 1 - v),
                (d = u * u),
                (f = d * u),
                (p = v * v),
                (_ = p * v),
                a.push(f * h + 3 * d * v * t + 3 * u * p * s + _ * n, f * l + 3 * d * v * i + 3 * u * p * r + _ * o);
            }
        }
    }
    function Th(e, t, i, s, r, n, o, a)
    {
        const h = e - i * r;
        const l = t - s * r;
        const c = e + i * n;
        const u = t + s * n;
        let d; let
            f;

        o ? ((d = s), (f = -i)) : ((d = -s), (f = i));
        const p = h + d;
        const _ = l + f;
        const g = c + d;
        const v = u + f;

        return a.push(p, _, g, v), 2;
    }
    function Ge(e, t, i, s, r, n, o, a)
    {
        const h = i - e;
        const l = s - t;
        let c = Math.atan2(h, l);
        let u = Math.atan2(r - e, n - t);

        a && c < u ? (c += Math.PI * 2) : !a && c > u && (u += Math.PI * 2);
        let d = c;
        const f = u - c;
        const p = Math.abs(f);
        const _ = Math.sqrt(h * h + l * l);
        const g = (((15 * p * Math.sqrt(_)) / Math.PI) >> 0) + 1;
        const v = f / g;

        if (((d += v), a))
        {
            o.push(e, t, i, s);
            for (let T = 1, y = d; T < g; T++, y += v) o.push(e, t, e + Math.sin(y) * _, t + Math.cos(y) * _);
            o.push(e, t, r, n);
        }
        else
        {
            o.push(i, s, e, t);
            for (let T = 1, y = d; T < g; T++, y += v) o.push(e + Math.sin(y) * _, t + Math.cos(y) * _, e, t);
            o.push(r, n, e, t);
        }

        return g * 2;
    }
    function dd(e, t)
    {
        const i = e.shape;
        let s = e.points || i.points.slice();
        const r = t.closePointEps;

        if (s.length === 0) return;
        const n = e.lineStyle;
        const o = new Y(s[0], s[1]);
        const a = new Y(s[s.length - 2], s[s.length - 1]);
        const h = i.type !== _t.POLY || i.closeStroke;
        const l = Math.abs(o.x - a.x) < r && Math.abs(o.y - a.y) < r;

        if (h)
        {
            (s = s.slice()), l && (s.pop(), s.pop(), a.set(s[s.length - 2], s[s.length - 1]));
            const F = (o.x + a.x) * 0.5;
            const Z = (a.y + o.y) * 0.5;

            s.unshift(F, Z), s.push(F, Z);
        }
        const c = t.points;
        const u = s.length / 2;
        let d = s.length;
        const f = c.length / 2;
        const p = n.width / 2;
        const _ = p * p;
        const g = n.miterLimit * n.miterLimit;
        let v = s[0];
        let T = s[1];
        let y = s[2];
        let x = s[3];
        let A = 0;
        let D = 0;
        let R = -(T - x);
        let E = v - y;
        let O = 0;
        let H = 0;
        let I = Math.sqrt(R * R + E * E);

        (R /= I), (E /= I), (R *= p), (E *= p);
        const N = n.alignment;
        const w = (1 - N) * 2;
        const b = N * 2;

        h
            || (n.cap === we.ROUND
                ? (d
                      += Ge(v - R * (w - b) * 0.5, T - E * (w - b) * 0.5, v - R * w, T - E * w, v + R * b, T + E * b, c, !0)
                      + 2)
                : n.cap === we.SQUARE && (d += Th(v, T, R, E, w, b, !0, c))),
        c.push(v - R * w, T - E * w, v + R * b, T + E * b);
        for (let F = 1; F < u - 1; ++F)
        {
            (v = s[(F - 1) * 2]),
            (T = s[(F - 1) * 2 + 1]),
            (y = s[F * 2]),
            (x = s[F * 2 + 1]),
            (A = s[(F + 1) * 2]),
            (D = s[(F + 1) * 2 + 1]),
            (R = -(T - x)),
            (E = v - y),
            (I = Math.sqrt(R * R + E * E)),
            (R /= I),
            (E /= I),
            (R *= p),
            (E *= p),
            (O = -(x - D)),
            (H = y - A),
            (I = Math.sqrt(O * O + H * H)),
            (O /= I),
            (H /= I),
            (O *= p),
            (H *= p);
            const Z = y - v;
            const ht = T - x;
            const S = y - A;
            const X = D - x;
            const K = Z * S + ht * X;
            const J = ht * S - X * Z;
            const Q = J < 0;

            if (Math.abs(J) < 0.001 * Math.abs(K))
            {
                c.push(y - R * w, x - E * w, y + R * b, x + E * b),
                K >= 0
                        && (n.join === Vt.ROUND
                            ? (d += Ge(y, x, y - R * w, x - E * w, y - O * w, x - H * w, c, !1) + 4)
                            : (d += 2),
                        c.push(y - O * b, x - H * b, y + O * w, x + H * w));
                continue;
            }
            const vt = (-R + v) * (-E + x) - (-R + y) * (-E + T);
            const ut = (-O + A) * (-H + x) - (-O + y) * (-H + D);
            const xt = (Z * ut - S * vt) / J;
            const wt = (X * vt - ht * ut) / J;
            const Ft = (xt - y) * (xt - y) + (wt - x) * (wt - x);
            const bt = y + (xt - y) * w;
            const rt = x + (wt - x) * w;
            const dt = y - (xt - y) * b;
            const ft = x - (wt - x) * b;
            const he = Math.min(Z * Z + ht * ht, S * S + X * X);
            const le = Q ? w : b;
            const Zi = he + le * le * _;
            const jd = Ft <= Zi;
            let tr = n.join;

            if ((tr === Vt.MITER && Ft / _ > g && (tr = Vt.BEVEL), jd))
            {
                switch (tr)
                {
                    case Vt.MITER: {
                        c.push(bt, rt, dt, ft);
                        break;
                    }
                    case Vt.BEVEL: {
                        Q
                            ? c.push(bt, rt, y + R * b, x + E * b, bt, rt, y + O * b, x + H * b)
                            : c.push(y - R * w, x - E * w, dt, ft, y - O * w, x - H * w, dt, ft),
                        (d += 2);
                        break;
                    }
                    case Vt.ROUND: {
                        Q
                            ? (c.push(bt, rt, y + R * b, x + E * b),
                            (d += Ge(y, x, y + R * b, x + E * b, y + O * b, x + H * b, c, !0) + 4),
                            c.push(bt, rt, y + O * b, x + H * b))
                            : (c.push(y - R * w, x - E * w, dt, ft),
                            (d += Ge(y, x, y - R * w, x - E * w, y - O * w, x - H * w, c, !1) + 4),
                            c.push(y - O * w, x - H * w, dt, ft));
                        break;
                    }
                }
            }
            else
            {
                switch ((c.push(y - R * w, x - E * w, y + R * b, x + E * b), tr))
                {
                    case Vt.MITER: {
                        Q ? c.push(dt, ft, dt, ft) : c.push(bt, rt, bt, rt), (d += 2);
                        break;
                    }
                    case Vt.ROUND: {
                        Q
                            ? (d += Ge(y, x, y + R * b, x + E * b, y + O * b, x + H * b, c, !0) + 2)
                            : (d += Ge(y, x, y - R * w, x - E * w, y - O * w, x - H * w, c, !1) + 2);
                        break;
                    }
                }
                c.push(y - O * w, x - H * w, y + O * b, x + H * b), (d += 2);
            }
        }
        (v = s[(u - 2) * 2]),
        (T = s[(u - 2) * 2 + 1]),
        (y = s[(u - 1) * 2]),
        (x = s[(u - 1) * 2 + 1]),
        (R = -(T - x)),
        (E = v - y),
        (I = Math.sqrt(R * R + E * E)),
        (R /= I),
        (E /= I),
        (R *= p),
        (E *= p),
        c.push(y - R * w, x - E * w, y + R * b, x + E * b),
        h
                || (n.cap === we.ROUND
                    ? (d
                          += Ge(
                            y - R * (w - b) * 0.5,
                            x - E * (w - b) * 0.5,
                            y - R * w,
                            x - E * w,
                            y + R * b,
                            x + E * b,
                            c,
                            !1,
                        ) + 2)
                    : n.cap === we.SQUARE && (d += Th(y, x, R, E, w, b, !1, c)));
        const W = t.indices;
        const q = Se.epsilon * Se.epsilon;

        for (let F = f; F < d + f - 2; ++F)
        {
            (v = c[F * 2]),
            (T = c[F * 2 + 1]),
            (y = c[(F + 1) * 2]),
            (x = c[(F + 1) * 2 + 1]),
            (A = c[(F + 2) * 2]),
            (D = c[(F + 2) * 2 + 1]),
            !(Math.abs(v * (x - D) + y * (D - T) + A * (T - x)) < q) && W.push(F, F + 1, F + 2);
        }
    }
    function fd(e, t)
    {
        let i = 0;
        const s = e.shape;
        const r = e.points || s.points;
        const n = s.type !== _t.POLY || s.closeStroke;

        if (r.length === 0) return;
        const o = t.points;
        const a = t.indices;
        const h = r.length / 2;
        const l = o.length / 2;
        let c = l;

        for (o.push(r[0], r[1]), i = 1; i < h; i++) o.push(r[i * 2], r[i * 2 + 1]), a.push(c, c + 1), c++;
        n && a.push(c, l);
    }
    function Bn(e, t)
    {
        e.lineStyle.native ? fd(e, t) : dd(e, t);
    }
    class Hs
    {
        static curveLength(t, i, s, r, n, o)
        {
            const a = t - 2 * s + n;
            const h = i - 2 * r + o;
            const l = 2 * s - 2 * t;
            const c = 2 * r - 2 * i;
            const u = 4 * (a * a + h * h);
            const d = 4 * (a * l + h * c);
            const f = l * l + c * c;
            const p = 2 * Math.sqrt(u + d + f);
            const _ = Math.sqrt(u);
            const g = 2 * u * _;
            const v = 2 * Math.sqrt(f);
            const T = d / _;

            return (g * p + _ * d * (p - v) + (4 * f * u - d * d) * Math.log((2 * _ + T + p) / (T + v))) / (4 * g);
        }
        static curveTo(t, i, s, r, n)
        {
            const o = n[n.length - 2];
            const a = n[n.length - 1];
            const h = Se._segmentsCount(Hs.curveLength(o, a, t, i, s, r));
            let l = 0;
            let c = 0;

            for (let u = 1; u <= h; ++u)
            {
                const d = u / h;

                (l = o + (t - o) * d),
                (c = a + (i - a) * d),
                n.push(l + (t + (s - t) * d - l) * d, c + (i + (r - i) * d - c) * d);
            }
        }
    }
    const Xs = { [_t.POLY]: Pn, [_t.CIRC]: Oi, [_t.ELIP]: Oi, [_t.RECT]: yh, [_t.RREC]: vh };
    const Dn = [];
    const Ui = [];

    class ki
    {
        constructor(t, i = null, s = null, r = null)
        {
            (this.points = []),
            (this.holes = []),
            (this.shape = t),
            (this.lineStyle = s),
            (this.fillStyle = i),
            (this.matrix = r),
            (this.type = t.type);
        }
        clone()
        {
            return new ki(this.shape, this.fillStyle, this.lineStyle, this.matrix);
        }
        destroy()
        {
            (this.shape = null),
            (this.holes.length = 0),
            (this.holes = null),
            (this.points.length = 0),
            (this.points = null),
            (this.lineStyle = null),
            (this.fillStyle = null);
        }
    }
    const ri = new Y();
    const bh = class extends Br
    {
        constructor()
        {
            super(),
            (this.closePointEps = 1e-4),
            (this.boundsPadding = 0),
            (this.uvsFloat32 = null),
            (this.indicesUint16 = null),
            (this.batchable = !1),
            (this.points = []),
            (this.colors = []),
            (this.uvs = []),
            (this.indices = []),
            (this.textureIds = []),
            (this.graphicsData = []),
            (this.drawCalls = []),
            (this.batchDirty = -1),
            (this.batches = []),
            (this.dirty = 0),
            (this.cacheDirty = -1),
            (this.clearDirty = 0),
            (this.shapeIndex = 0),
            (this._bounds = new Ii()),
            (this.boundsDirty = -1);
        }
        get bounds()
        {
            return (
                this.updateBatches(),
                this.boundsDirty !== this.dirty && ((this.boundsDirty = this.dirty), this.calculateBounds()),
                this._bounds
            );
        }
        invalidate()
        {
            (this.boundsDirty = -1),
            this.dirty++,
            this.batchDirty++,
            (this.shapeIndex = 0),
            (this.points.length = 0),
            (this.colors.length = 0),
            (this.uvs.length = 0),
            (this.indices.length = 0),
            (this.textureIds.length = 0);
            for (let e = 0; e < this.drawCalls.length; e++)
            { this.drawCalls[e].texArray.clear(), Ui.push(this.drawCalls[e]); }
            this.drawCalls.length = 0;
            for (let e = 0; e < this.batches.length; e++)
            {
                const t = this.batches[e];

                t.reset(), Dn.push(t);
            }
            this.batches.length = 0;
        }
        clear()
        {
            return (
                this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, (this.graphicsData.length = 0)),
                this
            );
        }
        drawShape(e, t = null, i = null, s = null)
        {
            const r = new ki(e, t, i, s);

            return this.graphicsData.push(r), this.dirty++, this;
        }
        drawHole(e, t = null)
        {
            if (!this.graphicsData.length) return null;
            const i = new ki(e, null, null, t);
            const s = this.graphicsData[this.graphicsData.length - 1];

            return (i.lineStyle = s.lineStyle), s.holes.push(i), this.dirty++, this;
        }
        destroy()
        {
            super.destroy();
            for (let e = 0; e < this.graphicsData.length; ++e) this.graphicsData[e].destroy();
            (this.points.length = 0),
            (this.points = null),
            (this.colors.length = 0),
            (this.colors = null),
            (this.uvs.length = 0),
            (this.uvs = null),
            (this.indices.length = 0),
            (this.indices = null),
            this.indexBuffer.destroy(),
            (this.indexBuffer = null),
            (this.graphicsData.length = 0),
            (this.graphicsData = null),
            (this.drawCalls.length = 0),
            (this.drawCalls = null),
            (this.batches.length = 0),
            (this.batches = null),
            (this._bounds = null);
        }
        containsPoint(e)
        {
            const t = this.graphicsData;

            for (let i = 0; i < t.length; ++i)
            {
                const s = t[i];

                if (
                    !!s.fillStyle.visible
                        && s.shape
                        && (s.matrix ? s.matrix.applyInverse(e, ri) : ri.copyFrom(e), s.shape.contains(ri.x, ri.y))
                )
                {
                    let r = !1;

                    if (s.holes)
                    {
                        for (let n = 0; n < s.holes.length; n++)
                        {
                            if (s.holes[n].shape.contains(ri.x, ri.y))
                            {
                                r = !0;
                                break;
                            }
                        }
                    }
                    if (!r) return !0;
                }
            }

            return !1;
        }
        updateBatches()
        {
            if (!this.graphicsData.length)
            {
                this.batchable = !0;

                return;
            }
            if (!this.validateBatching()) return;
            this.cacheDirty = this.dirty;
            const e = this.uvs;
            const t = this.graphicsData;
            let i = null;
            let s = null;

            this.batches.length > 0 && ((i = this.batches[this.batches.length - 1]), (s = i.style));
            for (let a = this.shapeIndex; a < t.length; a++)
            {
                this.shapeIndex++;
                const h = t[a];
                const l = h.fillStyle;
                const c = h.lineStyle;

                Xs[h.type].build(h),
                h.matrix && this.transformPoints(h.points, h.matrix),
                (l.visible || c.visible) && this.processHoles(h.holes);
                for (let d = 0; d < 2; d++)
                {
                    const f = d === 0 ? l : c;

                    if (!f.visible) continue;
                    const p = f.texture.baseTexture;
                    const _ = this.indices.length;
                    const g = this.points.length / 2;

                    (p.wrapMode = ie.REPEAT), d === 0 ? this.processFill(h) : this.processLine(h);
                    const v = this.points.length / 2 - g;

                    v !== 0
                            && (i && !this._compareStyles(s, f) && (i.end(_, g), (i = null)),
                            i || ((i = Dn.pop() || new xh()), i.begin(f, _, g), this.batches.push(i), (s = f)),
                            this.addUvs(this.points, e, f.texture, g, v, f.matrix));
                }
            }
            const r = this.indices.length;
            const n = this.points.length / 2;

            if ((i && i.end(r, n), this.batches.length === 0))
            {
                this.batchable = !0;

                return;
            }
            const o = n > 65535;

            this.indicesUint16
                && this.indices.length === this.indicesUint16.length
                && o === this.indicesUint16.BYTES_PER_ELEMENT > 2
                ? this.indicesUint16.set(this.indices)
                : (this.indicesUint16 = o ? new Uint32Array(this.indices) : new Uint16Array(this.indices)),
            (this.batchable = this.isBatchable()),
            this.batchable ? this.packBatches() : this.buildDrawCalls();
        }
        _compareStyles(e, t)
        {
            return !(
                !e
                    || !t
                    || e.texture.baseTexture !== t.texture.baseTexture
                    || e.color + e.alpha !== t.color + t.alpha
                    || !!e.native != !!t.native
            );
        }
        validateBatching()
        {
            if (this.dirty === this.cacheDirty || !this.graphicsData.length) return !1;
            for (let e = 0, t = this.graphicsData.length; e < t; e++)
            {
                const i = this.graphicsData[e];
                const s = i.fillStyle;
                const r = i.lineStyle;

                if ((s && !s.texture.baseTexture.valid) || (r && !r.texture.baseTexture.valid)) return !1;
            }

            return !0;
        }
        packBatches()
        {
            this.batchDirty++, (this.uvsFloat32 = new Float32Array(this.uvs));
            const e = this.batches;

            for (let t = 0, i = e.length; t < i; t++)
            {
                const s = e[t];

                for (let r = 0; r < s.size; r++)
                {
                    const n = s.start + r;

                    this.indicesUint16[n] = this.indicesUint16[n] - s.attribStart;
                }
            }
        }
        isBatchable()
        {
            if (this.points.length > 65535 * 2) return !1;
            const e = this.batches;

            for (let t = 0; t < e.length; t++) if (e[t].style.native) return !1;

            return this.points.length < bh.BATCHABLE_SIZE * 2;
        }
        buildDrawCalls()
        {
            let e = ++V._globalBatch;

            for (let c = 0; c < this.drawCalls.length; c++)
            { this.drawCalls[c].texArray.clear(), Ui.push(this.drawCalls[c]); }
            this.drawCalls.length = 0;
            const t = this.colors;
            const i = this.textureIds;
            let s = Ui.pop();

            s || ((s = new fs()), (s.texArray = new bs())),
            (s.texArray.count = 0),
            (s.start = 0),
            (s.size = 0),
            (s.type = zt.TRIANGLES);
            let r = 0;
            let n = null;
            let o = 0;
            let a = !1;
            let h = zt.TRIANGLES;
            let l = 0;

            this.drawCalls.push(s);
            for (let c = 0; c < this.batches.length; c++)
            {
                const u = this.batches[c];
                const d = 8;
                const f = u.style;
                const p = f.texture.baseTexture;

                a !== !!f.native && ((a = !!f.native), (h = a ? zt.LINES : zt.TRIANGLES), (n = null), (r = d), e++),
                n !== p
                            && ((n = p),
                            p._batchEnabled !== e
                                && (r === d
                                    && (e++,
                                    (r = 0),
                                    s.size > 0
                                        && ((s = Ui.pop()),
                                        s || ((s = new fs()), (s.texArray = new bs())),
                                        this.drawCalls.push(s)),
                                    (s.start = l),
                                    (s.size = 0),
                                    (s.texArray.count = 0),
                                    (s.type = h)),
                                (p.touched = 1),
                                (p._batchEnabled = e),
                                (p._batchLocation = r),
                                (p.wrapMode = ie.REPEAT),
                                (s.texArray.elements[s.texArray.count++] = p),
                                r++)),
                (s.size += u.size),
                (l += u.size),
                (o = p._batchLocation),
                this.addColors(t, f.color, f.alpha, u.attribSize, u.attribStart),
                this.addTextureIds(i, o, u.attribSize, u.attribStart);
            }
            (V._globalBatch = e), this.packAttributes();
        }
        packAttributes()
        {
            const e = this.points;
            const t = this.uvs;
            const i = this.colors;
            const s = this.textureIds;
            const r = new ArrayBuffer(e.length * 3 * 4);
            const n = new Float32Array(r);
            const o = new Uint32Array(r);
            let a = 0;

            for (let h = 0; h < e.length / 2; h++)
            {
                (n[a++] = e[h * 2]),
                (n[a++] = e[h * 2 + 1]),
                (n[a++] = t[h * 2]),
                (n[a++] = t[h * 2 + 1]),
                (o[a++] = i[h]),
                (n[a++] = s[h]);
            }
            this._buffer.update(r), this._indexBuffer.update(this.indicesUint16);
        }
        processFill(e)
        {
            e.holes.length ? Pn.triangulate(e, this) : Xs[e.type].triangulate(e, this);
        }
        processLine(e)
        {
            Bn(e, this);
            for (let t = 0; t < e.holes.length; t++) Bn(e.holes[t], this);
        }
        processHoles(e)
        {
            for (let t = 0; t < e.length; t++)
            {
                const i = e[t];

                Xs[i.type].build(i), i.matrix && this.transformPoints(i.points, i.matrix);
            }
        }
        calculateBounds()
        {
            const e = this._bounds;

            e.clear(),
            e.addVertexData(this.points, 0, this.points.length),
            e.pad(this.boundsPadding, this.boundsPadding);
        }
        transformPoints(e, t)
        {
            for (let i = 0; i < e.length / 2; i++)
            {
                const s = e[i * 2];
                const r = e[i * 2 + 1];

                (e[i * 2] = t.a * s + t.c * r + t.tx), (e[i * 2 + 1] = t.b * s + t.d * r + t.ty);
            }
        }
        addColors(e, t, i, s, r = 0)
        {
            const n = j.shared.setValue(t).toLittleEndianNumber();
            const o = j.shared.setValue(n).toPremultiplied(i);

            e.length = Math.max(e.length, r + s);
            for (let a = 0; a < s; a++) e[r + a] = o;
        }
        addTextureIds(e, t, i, s = 0)
        {
            e.length = Math.max(e.length, s + i);
            for (let r = 0; r < i; r++) e[s + r] = t;
        }
        addUvs(e, t, i, s, r, n = null)
        {
            let o = 0;
            const a = t.length;
            const h = i.frame;

            for (; o < r;)
            {
                let c = e[(s + o) * 2];
                let u = e[(s + o) * 2 + 1];

                if (n)
                {
                    const d = n.a * c + n.c * u + n.tx;

                    (u = n.b * c + n.d * u + n.ty), (c = d);
                }
                o++, t.push(c / h.width, u / h.height);
            }
            const l = i.baseTexture;

            (h.width < l.width || h.height < l.height) && this.adjustUvs(t, i, a, r);
        }
        adjustUvs(e, t, i, s)
        {
            const r = t.baseTexture;
            const n = 1e-6;
            const o = i + s * 2;
            const a = t.frame;
            const h = a.width / r.width;
            const l = a.height / r.height;
            let c = a.x / a.width;
            let u = a.y / a.height;
            let d = Math.floor(e[i] + n);
            let f = Math.floor(e[i + 1] + n);

            for (let p = i + 2; p < o; p += 2)
            { (d = Math.min(d, Math.floor(e[p] + n))), (f = Math.min(f, Math.floor(e[p + 1] + n))); }
            (c -= d), (u -= f);
            for (let p = i; p < o; p += 2) (e[p] = (e[p] + c) * h), (e[p + 1] = (e[p + 1] + u) * l);
        }
    };
    const Fn = bh;

    Fn.BATCHABLE_SIZE = 100;
    class Gi
    {
        constructor()
        {
            (this.color = 16777215),
            (this.alpha = 1),
            (this.texture = B.WHITE),
            (this.matrix = null),
            (this.visible = !1),
            this.reset();
        }
        clone()
        {
            const t = new Gi();

            return (
                (t.color = this.color),
                (t.alpha = this.alpha),
                (t.texture = this.texture),
                (t.matrix = this.matrix),
                (t.visible = this.visible),
                t
            );
        }
        reset()
        {
            (this.color = 16777215), (this.alpha = 1), (this.texture = B.WHITE), (this.matrix = null), (this.visible = !1);
        }
        destroy()
        {
            (this.texture = null), (this.matrix = null);
        }
    }
    class Vs extends Gi
    {
        constructor()
        {
            super(...arguments),
            (this.width = 0),
            (this.alignment = 0.5),
            (this.native = !1),
            (this.cap = we.BUTT),
            (this.join = Vt.MITER),
            (this.miterLimit = 10);
        }
        clone()
        {
            const t = new Vs();

            return (
                (t.color = this.color),
                (t.alpha = this.alpha),
                (t.texture = this.texture),
                (t.matrix = this.matrix),
                (t.visible = this.visible),
                (t.width = this.width),
                (t.alignment = this.alignment),
                (t.native = this.native),
                (t.cap = this.cap),
                (t.join = this.join),
                (t.miterLimit = this.miterLimit),
                t
            );
        }
        reset()
        {
            super.reset(), (this.color = 0), (this.alignment = 0.5), (this.width = 0), (this.native = !1);
        }
    }
    const Nn = {};
    const zs = class extends Ct
    {
        constructor(e = null)
        {
            super(),
            (this.shader = null),
            (this.pluginName = 'batch'),
            (this.currentPath = null),
            (this.batches = []),
            (this.batchTint = -1),
            (this.batchDirty = -1),
            (this.vertexData = null),
            (this._fillStyle = new Gi()),
            (this._lineStyle = new Vs()),
            (this._matrix = null),
            (this._holeMode = !1),
            (this.state = ne.for2d()),
            (this._geometry = e || new Fn()),
            this._geometry.refCount++,
            (this._transformID = -1),
            (this._tintColor = new j(16777215)),
            (this.blendMode = G.NORMAL);
        }
        get geometry()
        {
            return this._geometry;
        }
        clone()
        {
            return this.finishPoly(), new zs(this._geometry);
        }
        set blendMode(e)
        {
            this.state.blendMode = e;
        }
        get blendMode()
        {
            return this.state.blendMode;
        }
        get tint()
        {
            return this._tintColor.value;
        }
        set tint(e)
        {
            this._tintColor.setValue(e);
        }
        get fill()
        {
            return this._fillStyle;
        }
        get line()
        {
            return this._lineStyle;
        }
        lineStyle(e = null, t = 0, i, s = 0.5, r = !1)
        {
            return (
                typeof e === 'number' && (e = { width: e, color: t, alpha: i, alignment: s, native: r }),
                this.lineTextureStyle(e)
            );
        }
        lineTextureStyle(e)
        {
            const t = {
                width: 0,
                texture: B.WHITE,
                color: e != null && e.texture ? 16777215 : 0,
                matrix: null,
                alignment: 0.5,
                native: !1,
                cap: we.BUTT,
                join: Vt.MITER,
                miterLimit: 10,
            };

            (e = Object.assign(t, e)), this.normalizeColor(e), this.currentPath && this.startPoly();
            const i = e.width > 0 && e.alpha > 0;

            return (
                i
                    ? (e.matrix && ((e.matrix = e.matrix.clone()), e.matrix.invert()),
                    Object.assign(this._lineStyle, { visible: i }, e))
                    : this._lineStyle.reset(),
                this
            );
        }
        startPoly()
        {
            if (this.currentPath)
            {
                const e = this.currentPath.points;
                const t = this.currentPath.points.length;

                t > 2
                        && (this.drawShape(this.currentPath),
                        (this.currentPath = new Ie()),
                        (this.currentPath.closeStroke = !1),
                        this.currentPath.points.push(e[t - 2], e[t - 1]));
            }
            else (this.currentPath = new Ie()), (this.currentPath.closeStroke = !1);
        }
        finishPoly()
        {
            this.currentPath
                    && (this.currentPath.points.length > 2
                        ? (this.drawShape(this.currentPath), (this.currentPath = null))
                        : (this.currentPath.points.length = 0));
        }
        moveTo(e, t)
        {
            return this.startPoly(), (this.currentPath.points[0] = e), (this.currentPath.points[1] = t), this;
        }
        lineTo(e, t)
        {
            this.currentPath || this.moveTo(0, 0);
            const i = this.currentPath.points;
            const s = i[i.length - 2];
            const r = i[i.length - 1];

            return (s !== e || r !== t) && i.push(e, t), this;
        }
        _initCurve(e = 0, t = 0)
        {
            this.currentPath
                ? this.currentPath.points.length === 0 && (this.currentPath.points = [e, t])
                : this.moveTo(e, t);
        }
        quadraticCurveTo(e, t, i, s)
        {
            this._initCurve();
            const r = this.currentPath.points;

            return r.length === 0 && this.moveTo(0, 0), Hs.curveTo(e, t, i, s, r), this;
        }
        bezierCurveTo(e, t, i, s, r, n)
        {
            return this._initCurve(), Gs.curveTo(e, t, i, s, r, n, this.currentPath.points), this;
        }
        arcTo(e, t, i, s, r)
        {
            this._initCurve(e, t);
            const n = this.currentPath.points;
            const o = Mn.curveTo(e, t, i, s, r, n);

            if (o)
            {
                const { cx: a, cy: h, radius: l, startAngle: c, endAngle: u, anticlockwise: d } = o;

                this.arc(a, h, l, c, u, d);
            }

            return this;
        }
        arc(e, t, i, s, r, n = !1)
        {
            if (s === r) return this;
            if ((!n && r <= s ? (r += yi) : n && s <= r && (s += yi), r - s === 0)) return this;
            const a = e + Math.cos(s) * i;
            const h = t + Math.sin(s) * i;
            const l = this._geometry.closePointEps;
            let c = this.currentPath ? this.currentPath.points : null;

            if (c)
            {
                const u = Math.abs(c[c.length - 2] - a);
                const d = Math.abs(c[c.length - 1] - h);

                (u < l && d < l) || c.push(a, h);
            }
            else this.moveTo(a, h), (c = this.currentPath.points);

            return Mn.arc(a, h, e, t, i, s, r, n, c), this;
        }
        beginFill(e = 0, t)
        {
            return this.beginTextureFill({ texture: B.WHITE, color: e, alpha: t });
        }
        normalizeColor(e)
        {
            let i; let
                s;
            const t = j.shared.setValue((i = e.color) != null ? i : 0);

            (e.color = t.toNumber()), (s = e.alpha) != null || (e.alpha = t.alpha);
        }
        beginTextureFill(e)
        {
            const t = { texture: B.WHITE, color: 16777215, matrix: null };

            (e = Object.assign(t, e)), this.normalizeColor(e), this.currentPath && this.startPoly();
            const i = e.alpha > 0;

            return (
                i
                    ? (e.matrix && ((e.matrix = e.matrix.clone()), e.matrix.invert()),
                    Object.assign(this._fillStyle, { visible: i }, e))
                    : this._fillStyle.reset(),
                this
            );
        }
        endFill()
        {
            return this.finishPoly(), this._fillStyle.reset(), this;
        }
        drawRect(e, t, i, s)
        {
            return this.drawShape(new $(e, t, i, s));
        }
        drawRoundedRect(e, t, i, s, r)
        {
            return this.drawShape(new gs(e, t, i, s, r));
        }
        drawCircle(e, t, i)
        {
            return this.drawShape(new ms(e, t, i));
        }
        drawEllipse(e, t, i, s)
        {
            return this.drawShape(new _s(e, t, i, s));
        }
        drawPolygon(...e)
        {
            let t;
            let i = !0;
            const s = e[0];

            s.points ? ((i = s.closeStroke), (t = s.points)) : Array.isArray(e[0]) ? (t = e[0]) : (t = e);
            const r = new Ie(t);

            return (r.closeStroke = i), this.drawShape(r), this;
        }
        drawShape(e)
        {
            return (
                this._holeMode
                    ? this._geometry.drawHole(e, this._matrix)
                    : this._geometry.drawShape(e, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix),
                this
            );
        }
        clear()
        {
            return (
                this._geometry.clear(),
                this._lineStyle.reset(),
                this._fillStyle.reset(),
                this._boundsID++,
                (this._matrix = null),
                (this._holeMode = !1),
                (this.currentPath = null),
                this
            );
        }
        isFastRect()
        {
            const e = this._geometry.graphicsData;

            return (
                e.length === 1
                    && e[0].shape.type === _t.RECT
                    && !e[0].matrix
                    && !e[0].holes.length
                    && !(e[0].lineStyle.visible && e[0].lineStyle.width)
            );
        }
        _render(e)
        {
            this.finishPoly();
            const t = this._geometry;

            t.updateBatches(),
            t.batchable
                ? (this.batchDirty !== t.batchDirty && this._populateBatches(), this._renderBatched(e))
                : (e.batch.flush(), this._renderDirect(e));
        }
        _populateBatches()
        {
            const e = this._geometry;
            const t = this.blendMode;
            const i = e.batches.length;

            (this.batchTint = -1),
            (this._transformID = -1),
            (this.batchDirty = e.batchDirty),
            (this.batches.length = i),
            (this.vertexData = new Float32Array(e.points));
            for (let s = 0; s < i; s++)
            {
                const r = e.batches[s];
                const n = r.style.color;
                const o = new Float32Array(this.vertexData.buffer, r.attribStart * 4 * 2, r.attribSize * 2);
                const a = new Float32Array(e.uvsFloat32.buffer, r.attribStart * 4 * 2, r.attribSize * 2);
                const h = new Uint16Array(e.indicesUint16.buffer, r.start * 2, r.size);
                const l = {
                    vertexData: o,
                    blendMode: t,
                    indices: h,
                    uvs: a,
                    _batchRGB: j.shared.setValue(n).toRgbArray(),
                    _tintRGB: n,
                    _texture: r.style.texture,
                    alpha: r.style.alpha,
                    worldAlpha: 1,
                };

                this.batches[s] = l;
            }
        }
        _renderBatched(e)
        {
            if (this.batches.length)
            {
                e.batch.setObjectRenderer(e.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
                for (let t = 0, i = this.batches.length; t < i; t++)
                {
                    const s = this.batches[t];

                    (s.worldAlpha = this.worldAlpha * s.alpha), e.plugins[this.pluginName].render(s);
                }
            }
        }
        _renderDirect(e)
        {
            const t = this._resolveDirectShader(e);
            const i = this._geometry;
            const s = this.worldAlpha;
            const r = t.uniforms;
            const n = i.drawCalls;

            (r.translationMatrix = this.transform.worldTransform),
            j.shared.setValue(this._tintColor).multiply([s, s, s]).setAlpha(s).toArray(r.tint),
            e.shader.bind(t),
            e.geometry.bind(i, t),
            e.state.set(this.state);
            for (let o = 0, a = n.length; o < a; o++) this._renderDrawCallDirect(e, i.drawCalls[o]);
        }
        _renderDrawCallDirect(e, t)
        {
            const { texArray: i, type: s, size: r, start: n } = t;
            const o = i.count;

            for (let a = 0; a < o; a++) e.texture.bind(i.elements[a], a);
            e.geometry.draw(s, r, n);
        }
        _resolveDirectShader(e)
        {
            let t = this.shader;
            const i = this.pluginName;

            if (!t)
            {
                if (!Nn[i])
                {
                    const { maxTextures: s } = e.plugins[i];
                    const r = new Int32Array(s);

                    for (let a = 0; a < s; a++) r[a] = a;
                    const n = {
                        tint: new Float32Array([1, 1, 1, 1]),
                        translationMatrix: new tt(),
                        default: kt.from({ uSamplers: r }, !0),
                    };
                    const o = e.plugins[i]._shader.program;

                    Nn[i] = new Kt(o, n);
                }
                t = Nn[i];
            }

            return t;
        }
        _calculateBounds()
        {
            this.finishPoly();
            const e = this._geometry;

            if (!e.graphicsData.length) return;
            const { minX: t, minY: i, maxX: s, maxY: r } = e.bounds;

            this._bounds.addFrame(this.transform, t, i, s, r);
        }
        containsPoint(e)
        {
            return this.worldTransform.applyInverse(e, zs._TEMP_POINT), this._geometry.containsPoint(zs._TEMP_POINT);
        }
        calculateTints()
        {
            if (this.batchTint !== this.tint)
            {
                this.batchTint = this._tintColor.toNumber();
                for (let e = 0; e < this.batches.length; e++)
                {
                    const t = this.batches[e];

                    t._tintRGB = j.shared.setValue(this._tintColor).multiply(t._batchRGB).toLittleEndianNumber();
                }
            }
        }
        calculateVertices()
        {
            const e = this.transform._worldID;

            if (this._transformID === e) return;
            this._transformID = e;
            const t = this.transform.worldTransform;
            const i = t.a;
            const s = t.b;
            const r = t.c;
            const n = t.d;
            const o = t.tx;
            const a = t.ty;
            const h = this._geometry.points;
            const l = this.vertexData;
            let c = 0;

            for (let u = 0; u < h.length; u += 2)
            {
                const d = h[u];
                const f = h[u + 1];

                (l[c++] = i * d + r * f + o), (l[c++] = n * f + s * d + a);
            }
        }
        closePath()
        {
            const e = this.currentPath;

            return e && ((e.closeStroke = !0), this.finishPoly()), this;
        }
        setMatrix(e)
        {
            return (this._matrix = e), this;
        }
        beginHole()
        {
            return this.finishPoly(), (this._holeMode = !0), this;
        }
        endHole()
        {
            return this.finishPoly(), (this._holeMode = !1), this;
        }
        destroy(e)
        {
            this._geometry.refCount--,
            this._geometry.refCount === 0 && this._geometry.dispose(),
            (this._matrix = null),
            (this.currentPath = null),
            this._lineStyle.destroy(),
            (this._lineStyle = null),
            this._fillStyle.destroy(),
            (this._fillStyle = null),
            (this._geometry = null),
            (this.shader = null),
            (this.vertexData = null),
            (this.batches.length = 0),
            (this.batches = null),
            super.destroy(e);
        }
    };
    const Hi = zs;

    (Hi.curves = Se), (Hi._TEMP_POINT = new Y());
    const pd = {
        buildPoly: Pn,
        buildCircle: Oi,
        buildRectangle: yh,
        buildRoundedRectangle: vh,
        buildLine: Bn,
        ArcUtils: Mn,
        BezierUtils: Gs,
        QuadraticUtils: Hs,
        BatchPart: xh,
        FILL_COMMANDS: Xs,
        BATCH_POOL: Dn,
        DRAW_CALL_POOL: Ui,
    };

    class Eh
    {
        constructor(t, i)
        {
            (this.uvBuffer = t),
            (this.uvMatrix = i),
            (this.data = null),
            (this._bufferUpdateId = -1),
            (this._textureUpdateId = -1),
            (this._updateID = 0);
        }
        update(t)
        {
            if (!t && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID)
            { return; }
            (this._bufferUpdateId = this.uvBuffer._updateID), (this._textureUpdateId = this.uvMatrix._updateID);
            const i = this.uvBuffer.data;

            (!this.data || this.data.length !== i.length) && (this.data = new Float32Array(i.length)),
            this.uvMatrix.multiplyUvs(i, this.data),
            this._updateID++;
        }
    }
    const Ln = new Y();
    const wh = new Ie();
    const Sh = class extends Ct
    {
        constructor(e, t, i, s = zt.TRIANGLES)
        {
            super(),
            (this.geometry = e),
            (this.shader = t),
            (this.state = i || ne.for2d()),
            (this.drawMode = s),
            (this.start = 0),
            (this.size = 0),
            (this.uvs = null),
            (this.indices = null),
            (this.vertexData = new Float32Array(1)),
            (this.vertexDirty = -1),
            (this._transformID = -1),
            (this._roundPixels = P.ROUND_PIXELS),
            (this.batchUvs = null);
        }
        get geometry()
        {
            return this._geometry;
        }
        set geometry(e)
        {
            this._geometry !== e
                    && (this._geometry
                        && (this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose()),
                    (this._geometry = e),
                    this._geometry && this._geometry.refCount++,
                    (this.vertexDirty = -1));
        }
        get uvBuffer()
        {
            return this.geometry.buffers[1];
        }
        get verticesBuffer()
        {
            return this.geometry.buffers[0];
        }
        set material(e)
        {
            this.shader = e;
        }
        get material()
        {
            return this.shader;
        }
        set blendMode(e)
        {
            this.state.blendMode = e;
        }
        get blendMode()
        {
            return this.state.blendMode;
        }
        set roundPixels(e)
        {
            this._roundPixels !== e && (this._transformID = -1), (this._roundPixels = e);
        }
        get roundPixels()
        {
            return this._roundPixels;
        }
        get tint()
        {
            return 'tint' in this.shader ? this.shader.tint : null;
        }
        set tint(e)
        {
            this.shader.tint = e;
        }
        get tintValue()
        {
            return this.shader.tintValue;
        }
        get texture()
        {
            return 'texture' in this.shader ? this.shader.texture : null;
        }
        set texture(e)
        {
            this.shader.texture = e;
        }
        _render(e)
        {
            const t = this.geometry.buffers[0].data;

            this.shader.batchable && this.drawMode === zt.TRIANGLES && t.length < Sh.BATCHABLE_SIZE * 2
                ? this._renderToBatch(e)
                : this._renderDefault(e);
        }
        _renderDefault(e)
        {
            const t = this.shader;

            (t.alpha = this.worldAlpha),
            t.update && t.update(),
            e.batch.flush(),
            (t.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0)),
            e.shader.bind(t),
            e.state.set(this.state),
            e.geometry.bind(this.geometry, t),
            e.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
        }
        _renderToBatch(e)
        {
            const t = this.geometry;
            const i = this.shader;

            i.uvMatrix && (i.uvMatrix.update(), this.calculateUvs()),
            this.calculateVertices(),
            (this.indices = t.indexBuffer.data),
            (this._tintRGB = i._tintRGB),
            (this._texture = i.texture);
            const s = this.material.pluginName;

            e.batch.setObjectRenderer(e.plugins[s]), e.plugins[s].render(this);
        }
        calculateVertices()
        {
            const t = this.geometry.buffers[0];
            const i = t.data;
            const s = t._updateID;

            if (s === this.vertexDirty && this._transformID === this.transform._worldID) return;
            (this._transformID = this.transform._worldID),
            this.vertexData.length !== i.length && (this.vertexData = new Float32Array(i.length));
            const r = this.transform.worldTransform;
            const n = r.a;
            const o = r.b;
            const a = r.c;
            const h = r.d;
            const l = r.tx;
            const c = r.ty;
            const u = this.vertexData;

            for (let d = 0; d < u.length / 2; d++)
            {
                const f = i[d * 2];
                const p = i[d * 2 + 1];

                (u[d * 2] = n * f + a * p + l), (u[d * 2 + 1] = o * f + h * p + c);
            }
            if (this._roundPixels)
            {
                const d = P.RESOLUTION;

                for (let f = 0; f < u.length; ++f) u[f] = Math.round(u[f] * d) / d;
            }
            this.vertexDirty = s;
        }
        calculateUvs()
        {
            const e = this.geometry.buffers[1];
            const t = this.shader;

            t.uvMatrix.isSimple
                ? (this.uvs = e.data)
                : (this.batchUvs || (this.batchUvs = new Eh(e, t.uvMatrix)),
                this.batchUvs.update(),
                (this.uvs = this.batchUvs.data));
        }
        _calculateBounds()
        {
            this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
        }
        containsPoint(e)
        {
            if (!this.getBounds().contains(e.x, e.y)) return !1;
            this.worldTransform.applyInverse(e, Ln);
            const t = this.geometry.getBuffer('aVertexPosition').data;
            const i = wh.points;
            const s = this.geometry.getIndex().data;
            const r = s.length;
            const n = this.drawMode === 4 ? 3 : 1;

            for (let o = 0; o + 2 < r; o += n)
            {
                const a = s[o] * 2;
                const h = s[o + 1] * 2;
                const l = s[o + 2] * 2;

                if (
                    ((i[0] = t[a]),
                    (i[1] = t[a + 1]),
                    (i[2] = t[h]),
                    (i[3] = t[h + 1]),
                    (i[4] = t[l]),
                    (i[5] = t[l + 1]),
                    wh.contains(Ln.x, Ln.y))
                )
                { return !0; }
            }

            return !1;
        }
        destroy(e)
        {
            super.destroy(e),
            this._cachedTexture && (this._cachedTexture.destroy(), (this._cachedTexture = null)),
            (this.geometry = null),
            (this.shader = null),
            (this.state = null),
            (this.uvs = null),
            (this.indices = null),
            (this.vertexData = null);
        }
    };
    const He = Sh;

    He.BATCHABLE_SIZE = 100;
    class Xi extends pe
    {
        constructor(t, i, s)
        {
            super();
            const r = new at(t);
            const n = new at(i, !0);
            const o = new at(s, !0, !0);

            this.addAttribute('aVertexPosition', r, 2, !1, k.FLOAT)
                .addAttribute('aTextureCoord', n, 2, !1, k.FLOAT)
                .addIndex(o),
            (this._updateId = -1);
        }
        get vertexDirtyId()
        {
            return this.buffers[0]._updateID;
        }
    }
    const md = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`;
    const _d = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;

    class ni extends Kt
    {
        constructor(t, i)
        {
            const s = { uSampler: t, alpha: 1, uTextureMatrix: tt.IDENTITY, uColor: new Float32Array([1, 1, 1, 1]) };

            (i = Object.assign({ tint: 16777215, alpha: 1, pluginName: 'batch' }, i)),
            i.uniforms && Object.assign(s, i.uniforms),
            super(i.program || Ut.from(_d, md), s),
            (this._colorDirty = !1),
            (this.uvMatrix = new As(t)),
            (this.batchable = i.program === void 0),
            (this.pluginName = i.pluginName),
            (this._tintColor = new j(i.tint)),
            (this._tintRGB = this._tintColor.toLittleEndianNumber()),
            (this._colorDirty = !0),
            (this.alpha = i.alpha);
        }
        get texture()
        {
            return this.uniforms.uSampler;
        }
        set texture(t)
        {
            this.uniforms.uSampler !== t
                && (!this.uniforms.uSampler.baseTexture.alphaMode != !t.baseTexture.alphaMode && (this._colorDirty = !0),
                (this.uniforms.uSampler = t),
                (this.uvMatrix.texture = t));
        }
        set alpha(t)
        {
            t !== this._alpha && ((this._alpha = t), (this._colorDirty = !0));
        }
        get alpha()
        {
            return this._alpha;
        }
        set tint(t)
        {
            t !== this.tint
                && (this._tintColor.setValue(t),
                (this._tintRGB = this._tintColor.toLittleEndianNumber()),
                (this._colorDirty = !0));
        }
        get tint()
        {
            return this._tintColor.value;
        }
        get tintValue()
        {
            return this._tintColor.toNumber();
        }
        update()
        {
            if (this._colorDirty)
            {
                this._colorDirty = !1;
                const i = this.texture.baseTexture.alphaMode;

                j.shared.setValue(this._tintColor).premultiply(this._alpha, i).toArray(this.uniforms.uColor);
            }
            this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
        }
    }
    class Ah extends Xi
    {
        constructor(t = 100, i = 100, s = 10, r = 10)
        {
            super(), (this.segWidth = s), (this.segHeight = r), (this.width = t), (this.height = i), this.build();
        }
        build()
        {
            const t = this.segWidth * this.segHeight;
            const i = [];
            const s = [];
            const r = [];
            const n = this.segWidth - 1;
            const o = this.segHeight - 1;
            const a = this.width / n;
            const h = this.height / o;

            for (let c = 0; c < t; c++)
            {
                const u = c % this.segWidth;
                const d = (c / this.segWidth) | 0;

                i.push(u * a, d * h), s.push(u / n, d / o);
            }
            const l = n * o;

            for (let c = 0; c < l; c++)
            {
                const u = c % n;
                const d = (c / n) | 0;
                const f = d * this.segWidth + u;
                const p = d * this.segWidth + u + 1;
                const _ = (d + 1) * this.segWidth + u;
                const g = (d + 1) * this.segWidth + u + 1;

                r.push(f, p, _, p, g, _);
            }
            (this.buffers[0].data = new Float32Array(i)),
            (this.buffers[1].data = new Float32Array(s)),
            (this.indexBuffer.data = new Uint16Array(r)),
            this.buffers[0].update(),
            this.buffers[1].update(),
            this.indexBuffer.update();
        }
    }
    class Rh extends Xi
    {
        constructor(t = 200, i, s = 0)
        {
            super(new Float32Array(i.length * 4), new Float32Array(i.length * 4), new Uint16Array((i.length - 1) * 6)),
            (this.points = i),
            (this._width = t),
            (this.textureScale = s),
            this.build();
        }
        get width()
        {
            return this._width;
        }
        build()
        {
            const t = this.points;

            if (!t) return;
            const i = this.getBuffer('aVertexPosition');
            const s = this.getBuffer('aTextureCoord');
            const r = this.getIndex();

            if (t.length < 1) return;
            i.data.length / 4 !== t.length
                && ((i.data = new Float32Array(t.length * 4)),
                (s.data = new Float32Array(t.length * 4)),
                (r.data = new Uint16Array((t.length - 1) * 6)));
            const n = s.data;
            const o = r.data;

            (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 1);
            let a = 0;
            let h = t[0];
            const l = this._width * this.textureScale;
            const c = t.length;

            for (let d = 0; d < c; d++)
            {
                const f = d * 4;

                if (this.textureScale > 0)
                {
                    const p = h.x - t[d].x;
                    const _ = h.y - t[d].y;
                    const g = Math.sqrt(p * p + _ * _);

                    (h = t[d]), (a += g / l);
                }
                else a = d / (c - 1);
                (n[f] = a), (n[f + 1] = 0), (n[f + 2] = a), (n[f + 3] = 1);
            }
            let u = 0;

            for (let d = 0; d < c - 1; d++)
            {
                const f = d * 2;

                (o[u++] = f), (o[u++] = f + 1), (o[u++] = f + 2), (o[u++] = f + 2), (o[u++] = f + 1), (o[u++] = f + 3);
            }
            s.update(), r.update(), this.updateVertices();
        }
        updateVertices()
        {
            const t = this.points;

            if (t.length < 1) return;
            let i = t[0];
            let s;
            let r = 0;
            let n = 0;
            const o = this.buffers[0].data;
            const a = t.length;
            const h = this.textureScale > 0 ? (this.textureScale * this._width) / 2 : this._width / 2;

            for (let l = 0; l < a; l++)
            {
                const c = t[l];
                const u = l * 4;

                l < t.length - 1 ? (s = t[l + 1]) : (s = c), (n = -(s.x - i.x)), (r = s.y - i.y);
                let d = (1 - l / (a - 1)) * 10;

                d > 1 && (d = 1);
                const f = Math.sqrt(r * r + n * n);

                f < 1e-6 ? ((r = 0), (n = 0)) : ((r /= f), (n /= f), (r *= h), (n *= h)),
                (o[u] = c.x + r),
                (o[u + 1] = c.y + n),
                (o[u + 2] = c.x - r),
                (o[u + 3] = c.y - n),
                (i = c);
            }
            this.buffers[0].update();
        }
        update()
        {
            this.textureScale > 0 ? this.build() : this.updateVertices();
        }
    }
    class Ch extends He
    {
        constructor(t, i, s)
        {
            const r = new Ah(t.width, t.height, i, s);
            const n = new ni(B.WHITE);

            super(r, n), (this.texture = t), (this.autoResize = !0);
        }
        textureUpdated()
        {
            this._textureID = this.shader.texture._updateID;
            const t = this.geometry;
            const { width: i, height: s } = this.shader.texture;

            this.autoResize
                && (t.width !== i || t.height !== s)
                && ((t.width = this.shader.texture.width), (t.height = this.shader.texture.height), t.build());
        }
        set texture(t)
        {
            this.shader.texture !== t
                && ((this.shader.texture = t),
                (this._textureID = -1),
                t.baseTexture.valid ? this.textureUpdated() : t.once('update', this.textureUpdated, this));
        }
        get texture()
        {
            return this.shader.texture;
        }
        _render(t)
        {
            this._textureID !== this.shader.texture._updateID && this.textureUpdated(), super._render(t);
        }
        destroy(t)
        {
            this.shader.texture.off('update', this.textureUpdated, this), super.destroy(t);
        }
    }
    const Ws = 10;

    class gd extends Ch
    {
        constructor(t, i, s, r, n)
        {
            let o; let a; let h; let l; let c; let u; let d; let
                f;

            super(B.WHITE, 4, 4),
            (this._origWidth = t.orig.width),
            (this._origHeight = t.orig.height),
            (this._width = this._origWidth),
            (this._height = this._origHeight),
            (this._leftWidth = (a = i != null ? i : (o = t.defaultBorders) == null ? void 0 : o.left) != null ? a : Ws),
            (this._rightWidth
                    = (l = r != null ? r : (h = t.defaultBorders) == null ? void 0 : h.right) != null ? l : Ws),
            (this._topHeight = (u = s != null ? s : (c = t.defaultBorders) == null ? void 0 : c.top) != null ? u : Ws),
            (this._bottomHeight
                    = (f = n != null ? n : (d = t.defaultBorders) == null ? void 0 : d.bottom) != null ? f : Ws),
            (this.texture = t);
        }
        textureUpdated()
        {
            (this._textureID = this.shader.texture._updateID), this._refresh();
        }
        get vertices()
        {
            return this.geometry.getBuffer('aVertexPosition').data;
        }
        set vertices(t)
        {
            this.geometry.getBuffer('aVertexPosition').data = t;
        }
        updateHorizontalVertices()
        {
            const t = this.vertices;
            const i = this._getMinScale();

            (t[9] = t[11] = t[13] = t[15] = this._topHeight * i),
            (t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * i),
            (t[25] = t[27] = t[29] = t[31] = this._height);
        }
        updateVerticalVertices()
        {
            const t = this.vertices;
            const i = this._getMinScale();

            (t[2] = t[10] = t[18] = t[26] = this._leftWidth * i),
            (t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * i),
            (t[6] = t[14] = t[22] = t[30] = this._width);
        }
        _getMinScale()
        {
            const t = this._leftWidth + this._rightWidth;
            const i = this._width > t ? 1 : this._width / t;
            const s = this._topHeight + this._bottomHeight;
            const r = this._height > s ? 1 : this._height / s;

            return Math.min(i, r);
        }
        get width()
        {
            return this._width;
        }
        set width(t)
        {
            (this._width = t), this._refresh();
        }
        get height()
        {
            return this._height;
        }
        set height(t)
        {
            (this._height = t), this._refresh();
        }
        get leftWidth()
        {
            return this._leftWidth;
        }
        set leftWidth(t)
        {
            (this._leftWidth = t), this._refresh();
        }
        get rightWidth()
        {
            return this._rightWidth;
        }
        set rightWidth(t)
        {
            (this._rightWidth = t), this._refresh();
        }
        get topHeight()
        {
            return this._topHeight;
        }
        set topHeight(t)
        {
            (this._topHeight = t), this._refresh();
        }
        get bottomHeight()
        {
            return this._bottomHeight;
        }
        set bottomHeight(t)
        {
            (this._bottomHeight = t), this._refresh();
        }
        _refresh()
        {
            const t = this.texture;
            const i = this.geometry.buffers[1].data;

            (this._origWidth = t.orig.width), (this._origHeight = t.orig.height);
            const s = 1 / this._origWidth;
            const r = 1 / this._origHeight;

            (i[0] = i[8] = i[16] = i[24] = 0),
            (i[1] = i[3] = i[5] = i[7] = 0),
            (i[6] = i[14] = i[22] = i[30] = 1),
            (i[25] = i[27] = i[29] = i[31] = 1),
            (i[2] = i[10] = i[18] = i[26] = s * this._leftWidth),
            (i[4] = i[12] = i[20] = i[28] = 1 - s * this._rightWidth),
            (i[9] = i[11] = i[13] = i[15] = r * this._topHeight),
            (i[17] = i[19] = i[21] = i[23] = 1 - r * this._bottomHeight),
            this.updateHorizontalVertices(),
            this.updateVerticalVertices(),
            this.geometry.buffers[0].update(),
            this.geometry.buffers[1].update();
        }
    }
    class yd extends He
    {
        constructor(t = B.EMPTY, i, s, r, n)
        {
            const o = new Xi(i, s, r);

            o.getBuffer('aVertexPosition').static = !1;
            const a = new ni(t);

            super(o, a, null, n), (this.autoUpdate = !0);
        }
        get vertices()
        {
            return this.geometry.getBuffer('aVertexPosition').data;
        }
        set vertices(t)
        {
            this.geometry.getBuffer('aVertexPosition').data = t;
        }
        _render(t)
        {
            this.autoUpdate && this.geometry.getBuffer('aVertexPosition').update(), super._render(t);
        }
    }
    class vd extends He
    {
        constructor(t, i, s = 0)
        {
            const r = new Rh(t.height, i, s);
            const n = new ni(t);

            s > 0 && (t.baseTexture.wrapMode = ie.REPEAT), super(r, n), (this.autoUpdate = !0);
        }
        _render(t)
        {
            const i = this.geometry;

            (this.autoUpdate || i._width !== this.shader.texture.height)
                && ((i._width = this.shader.texture.height), i.update()),
            super._render(t);
        }
    }
    class xd extends Ct
    {
        constructor(t = 1500, i, s = 16384, r = !1)
        {
            super();
            const n = 16384;

            s > n && (s = n),
            (this._properties = [!1, !0, !1, !1, !1]),
            (this._maxSize = t),
            (this._batchSize = s),
            (this._buffers = null),
            (this._bufferUpdateIDs = []),
            (this._updateID = 0),
            (this.interactiveChildren = !1),
            (this.blendMode = G.NORMAL),
            (this.autoResize = r),
            (this.roundPixels = !0),
            (this.baseTexture = null),
            this.setProperties(i),
            (this._tintColor = new j(0)),
            (this.tintRgb = new Float32Array(3)),
            (this.tint = 16777215);
        }
        setProperties(t)
        {
            t
                && ((this._properties[0] = 'vertices' in t || 'scale' in t ? !!t.vertices || !!t.scale : this._properties[0]),
                (this._properties[1] = 'position' in t ? !!t.position : this._properties[1]),
                (this._properties[2] = 'rotation' in t ? !!t.rotation : this._properties[2]),
                (this._properties[3] = 'uvs' in t ? !!t.uvs : this._properties[3]),
                (this._properties[4] = 'tint' in t || 'alpha' in t ? !!t.tint || !!t.alpha : this._properties[4]));
        }
        updateTransform()
        {
            this.displayObjectUpdateTransform();
        }
        get tint()
        {
            return this._tintColor.value;
        }
        set tint(t)
        {
            this._tintColor.setValue(t), this._tintColor.toRgbArray(this.tintRgb);
        }
        render(t)
        {
            !this.visible
                || this.worldAlpha <= 0
                || !this.children.length
                || !this.renderable
                || (this.baseTexture
                    || ((this.baseTexture = this.children[0]._texture.baseTexture),
                    this.baseTexture.valid || this.baseTexture.once('update', () => this.onChildrenChange(0))),
                t.batch.setObjectRenderer(t.plugins.particle),
                t.plugins.particle.render(this));
        }
        onChildrenChange(t)
        {
            const i = Math.floor(t / this._batchSize);

            for (; this._bufferUpdateIDs.length < i;) this._bufferUpdateIDs.push(0);
            this._bufferUpdateIDs[i] = ++this._updateID;
        }
        dispose()
        {
            if (this._buffers)
            {
                for (let t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
                this._buffers = null;
            }
        }
        destroy(t)
        {
            super.destroy(t),
            this.dispose(),
            (this._properties = null),
            (this._buffers = null),
            (this._bufferUpdateIDs = null);
        }
    }
    class Ih
    {
        constructor(t, i, s)
        {
            (this.geometry = new pe()),
            (this.indexBuffer = null),
            (this.size = s),
            (this.dynamicProperties = []),
            (this.staticProperties = []);
            for (let r = 0; r < t.length; ++r)
            {
                let n = t[r];

                (n = {
                    attributeName: n.attributeName,
                    size: n.size,
                    uploadFunction: n.uploadFunction,
                    type: n.type || k.FLOAT,
                    offset: n.offset,
                }),
                i[r] ? this.dynamicProperties.push(n) : this.staticProperties.push(n);
            }
            (this.staticStride = 0),
            (this.staticBuffer = null),
            (this.staticData = null),
            (this.staticDataUint32 = null),
            (this.dynamicStride = 0),
            (this.dynamicBuffer = null),
            (this.dynamicData = null),
            (this.dynamicDataUint32 = null),
            (this._updateID = 0),
            this.initBuffers();
        }
        initBuffers()
        {
            const t = this.geometry;
            let i = 0;

            (this.indexBuffer = new at(Fo(this.size), !0, !0)), t.addIndex(this.indexBuffer), (this.dynamicStride = 0);
            for (let o = 0; o < this.dynamicProperties.length; ++o)
            {
                const a = this.dynamicProperties[o];

                (a.offset = i), (i += a.size), (this.dynamicStride += a.size);
            }
            const s = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);

            (this.dynamicData = new Float32Array(s)),
            (this.dynamicDataUint32 = new Uint32Array(s)),
            (this.dynamicBuffer = new at(this.dynamicData, !1, !1));
            let r = 0;

            this.staticStride = 0;
            for (let o = 0; o < this.staticProperties.length; ++o)
            {
                const a = this.staticProperties[o];

                (a.offset = r), (r += a.size), (this.staticStride += a.size);
            }
            const n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);

            (this.staticData = new Float32Array(n)),
            (this.staticDataUint32 = new Uint32Array(n)),
            (this.staticBuffer = new at(this.staticData, !0, !1));
            for (let o = 0; o < this.dynamicProperties.length; ++o)
            {
                const a = this.dynamicProperties[o];

                t.addAttribute(
                    a.attributeName,
                    this.dynamicBuffer,
                    0,
                    a.type === k.UNSIGNED_BYTE,
                    a.type,
                    this.dynamicStride * 4,
                    a.offset * 4,
                );
            }
            for (let o = 0; o < this.staticProperties.length; ++o)
            {
                const a = this.staticProperties[o];

                t.addAttribute(
                    a.attributeName,
                    this.staticBuffer,
                    0,
                    a.type === k.UNSIGNED_BYTE,
                    a.type,
                    this.staticStride * 4,
                    a.offset * 4,
                );
            }
        }
        uploadDynamic(t, i, s)
        {
            for (let r = 0; r < this.dynamicProperties.length; r++)
            {
                const n = this.dynamicProperties[r];

                n.uploadFunction(
                    t,
                    i,
                    s,
                    n.type === k.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData,
                    this.dynamicStride,
                    n.offset,
                );
            }
            this.dynamicBuffer._updateID++;
        }
        uploadStatic(t, i, s)
        {
            for (let r = 0; r < this.staticProperties.length; r++)
            {
                const n = this.staticProperties[r];

                n.uploadFunction(
                    t,
                    i,
                    s,
                    n.type === k.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData,
                    this.staticStride,
                    n.offset,
                );
            }
            this.staticBuffer._updateID++;
        }
        destroy()
        {
            (this.indexBuffer = null),
            (this.dynamicProperties = null),
            (this.dynamicBuffer = null),
            (this.dynamicData = null),
            (this.dynamicDataUint32 = null),
            (this.staticProperties = null),
            (this.staticBuffer = null),
            (this.staticData = null),
            (this.staticDataUint32 = null),
            this.geometry.destroy();
        }
    }
    const Td = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`;
    const bd = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;

    class On extends Ti
    {
        constructor(t)
        {
            super(t),
            (this.shader = null),
            (this.properties = null),
            (this.tempMatrix = new tt()),
            (this.properties = [
                { attributeName: 'aVertexPosition', size: 2, uploadFunction: this.uploadVertices, offset: 0 },
                { attributeName: 'aPositionCoord', size: 2, uploadFunction: this.uploadPosition, offset: 0 },
                { attributeName: 'aRotation', size: 1, uploadFunction: this.uploadRotation, offset: 0 },
                { attributeName: 'aTextureCoord', size: 2, uploadFunction: this.uploadUvs, offset: 0 },
                { attributeName: 'aColor', size: 1, type: k.UNSIGNED_BYTE, uploadFunction: this.uploadTint, offset: 0 },
            ]),
            (this.shader = Kt.from(bd, Td, {})),
            (this.state = ne.for2d());
        }
        render(t)
        {
            const i = t.children;
            const s = t._maxSize;
            const r = t._batchSize;
            const n = this.renderer;
            let o = i.length;

            if (o === 0) return;
            o > s && !t.autoResize && (o = s);
            let a = t._buffers;

            a || (a = t._buffers = this.generateBuffers(t));
            const h = i[0]._texture.baseTexture;
            const l = h.alphaMode > 0;

            (this.state.blendMode = vr(t.blendMode, l)), n.state.set(this.state);
            const c = n.gl;
            const u = t.worldTransform.copyTo(this.tempMatrix);

            u.prepend(n.globalUniforms.uniforms.projectionMatrix),
            (this.shader.uniforms.translationMatrix = u.toArray(!0)),
            (this.shader.uniforms.uColor = j.shared
                .setValue(t.tintRgb)
                .premultiply(t.worldAlpha, l)
                .toArray(this.shader.uniforms.uColor)),
            (this.shader.uniforms.uSampler = h),
            this.renderer.shader.bind(this.shader);
            let d = !1;

            for (let f = 0, p = 0; f < o; f += r, p += 1)
            {
                let _ = o - f;

                _ > r && (_ = r), p >= a.length && a.push(this._generateOneMoreBuffer(t));
                const g = a[p];

                g.uploadDynamic(i, f, _);
                const v = t._bufferUpdateIDs[p] || 0;

                (d = d || g._updateID < v),
                d && ((g._updateID = t._updateID), g.uploadStatic(i, f, _)),
                n.geometry.bind(g.geometry),
                c.drawElements(c.TRIANGLES, _ * 6, c.UNSIGNED_SHORT, 0);
            }
        }
        generateBuffers(t)
        {
            const i = [];
            const s = t._maxSize;
            const r = t._batchSize;
            const n = t._properties;

            for (let o = 0; o < s; o += r) i.push(new Ih(this.properties, n, r));

            return i;
        }
        _generateOneMoreBuffer(t)
        {
            const i = t._batchSize;
            const s = t._properties;

            return new Ih(this.properties, s, i);
        }
        uploadVertices(t, i, s, r, n, o)
        {
            let a = 0;
            let h = 0;
            let l = 0;
            let c = 0;

            for (let u = 0; u < s; ++u)
            {
                const d = t[i + u];
                const f = d._texture;
                const p = d.scale.x;
                const _ = d.scale.y;
                const g = f.trim;
                const v = f.orig;

                g
                    ? ((h = g.x - d.anchor.x * v.width),
                    (a = h + g.width),
                    (c = g.y - d.anchor.y * v.height),
                    (l = c + g.height))
                    : ((a = v.width * (1 - d.anchor.x)),
                    (h = v.width * -d.anchor.x),
                    (l = v.height * (1 - d.anchor.y)),
                    (c = v.height * -d.anchor.y)),
                (r[o] = h * p),
                (r[o + 1] = c * _),
                (r[o + n] = a * p),
                (r[o + n + 1] = c * _),
                (r[o + n * 2] = a * p),
                (r[o + n * 2 + 1] = l * _),
                (r[o + n * 3] = h * p),
                (r[o + n * 3 + 1] = l * _),
                (o += n * 4);
            }
        }
        uploadPosition(t, i, s, r, n, o)
        {
            for (let a = 0; a < s; a++)
            {
                const h = t[i + a].position;

                (r[o] = h.x),
                (r[o + 1] = h.y),
                (r[o + n] = h.x),
                (r[o + n + 1] = h.y),
                (r[o + n * 2] = h.x),
                (r[o + n * 2 + 1] = h.y),
                (r[o + n * 3] = h.x),
                (r[o + n * 3 + 1] = h.y),
                (o += n * 4);
            }
        }
        uploadRotation(t, i, s, r, n, o)
        {
            for (let a = 0; a < s; a++)
            {
                const h = t[i + a].rotation;

                (r[o] = h), (r[o + n] = h), (r[o + n * 2] = h), (r[o + n * 3] = h), (o += n * 4);
            }
        }
        uploadUvs(t, i, s, r, n, o)
        {
            for (let a = 0; a < s; ++a)
            {
                const h = t[i + a]._texture._uvs;

                h
                    ? ((r[o] = h.x0),
                    (r[o + 1] = h.y0),
                    (r[o + n] = h.x1),
                    (r[o + n + 1] = h.y1),
                    (r[o + n * 2] = h.x2),
                    (r[o + n * 2 + 1] = h.y2),
                    (r[o + n * 3] = h.x3),
                    (r[o + n * 3 + 1] = h.y3),
                    (o += n * 4))
                    : ((r[o] = 0),
                    (r[o + 1] = 0),
                    (r[o + n] = 0),
                    (r[o + n + 1] = 0),
                    (r[o + n * 2] = 0),
                    (r[o + n * 2 + 1] = 0),
                    (r[o + n * 3] = 0),
                    (r[o + n * 3 + 1] = 0),
                    (o += n * 4));
            }
        }
        uploadTint(t, i, s, r, n, o)
        {
            for (let a = 0; a < s; ++a)
            {
                const h = t[i + a];
                const l = j.shared.setValue(h._tintRGB).toPremultiplied(h.alpha);

                (r[o] = l), (r[o + n] = l), (r[o + n * 2] = l), (r[o + n * 3] = l), (o += n * 4);
            }
        }
        destroy()
        {
            super.destroy(), this.shader && (this.shader.destroy(), (this.shader = null)), (this.tempMatrix = null);
        }
    }
    (On.extension = { name: 'particle', type: M.RendererPlugin }), U.add(On);
    var Vi = ((e) => (
        (e[(e.LINEAR_VERTICAL = 0)] = 'LINEAR_VERTICAL'), (e[(e.LINEAR_HORIZONTAL = 1)] = 'LINEAR_HORIZONTAL'), e
    ))(Vi || {});
    const $s = { willReadFrequently: !0 };
    const L = class
    {
        static get experimentalLetterSpacingSupported()
        {
            let e = L._experimentalLetterSpacingSupported;

            if (e !== void 0)
            {
                const t = P.ADAPTER.getCanvasRenderingContext2D().prototype;

                e = L._experimentalLetterSpacingSupported = 'letterSpacing' in t || 'textLetterSpacing' in t;
            }

            return e;
        }
        constructor(e, t, i, s, r, n, o, a, h)
        {
            (this.text = e),
            (this.style = t),
            (this.width = i),
            (this.height = s),
            (this.lines = r),
            (this.lineWidths = n),
            (this.lineHeight = o),
            (this.maxLineWidth = a),
            (this.fontProperties = h);
        }
        static measureText(e, t, i, s = L._canvas)
        {
            i = i == null ? t.wordWrap : i;
            const r = t.toFontString();
            const n = L.measureFont(r);

            n.fontSize === 0 && ((n.fontSize = t.fontSize), (n.ascent = t.fontSize));
            const o = s.getContext('2d', $s);

            o.font = r;
            const h = (i ? L.wordWrap(e, t, s) : e).split(/(?:\r\n|\r|\n)/);
            const l = new Array(h.length);
            let c = 0;

            for (let p = 0; p < h.length; p++)
            {
                const _ = L._measureText(h[p], t.letterSpacing, o);

                (l[p] = _), (c = Math.max(c, _));
            }
            let u = c + t.strokeThickness;

            t.dropShadow && (u += t.dropShadowDistance);
            const d = t.lineHeight || n.fontSize + t.strokeThickness;
            let f = Math.max(d, n.fontSize + t.strokeThickness * 2) + (h.length - 1) * (d + t.leading);

            return t.dropShadow && (f += t.dropShadowDistance), new L(e, t, u, f, h, l, d + t.leading, c, n);
        }
        static _measureText(e, t, i)
        {
            let s = !1;

            L.experimentalLetterSpacingSupported
                    && (L.experimentalLetterSpacing
                        ? ((i.letterSpacing = `${t}px`), (i.textLetterSpacing = `${t}px`), (s = !0))
                        : ((i.letterSpacing = '0px'), (i.textLetterSpacing = '0px')));
            let r = i.measureText(e).width;

            return r > 0 && (s ? (r -= t) : (r += (L.graphemeSegmenter(e).length - 1) * t)), r;
        }
        static wordWrap(e, t, i = L._canvas)
        {
            const s = i.getContext('2d', $s);
            let r = 0;
            let n = '';
            let o = '';
            const a = Object.create(null);
            const { letterSpacing: h, whiteSpace: l } = t;
            const c = L.collapseSpaces(l);
            const u = L.collapseNewlines(l);
            let d = !c;
            const f = t.wordWrapWidth + h;
            const p = L.tokenize(e);

            for (let _ = 0; _ < p.length; _++)
            {
                let g = p[_];

                if (L.isNewline(g))
                {
                    if (!u)
                    {
                        (o += L.addLine(n)), (d = !c), (n = ''), (r = 0);
                        continue;
                    }
                    g = ' ';
                }
                if (c)
                {
                    const T = L.isBreakingSpace(g);
                    const y = L.isBreakingSpace(n[n.length - 1]);

                    if (T && y) continue;
                }
                const v = L.getFromCache(g, h, a, s);

                if (v > f)
                {
                    if ((n !== '' && ((o += L.addLine(n)), (n = ''), (r = 0)), L.canBreakWords(g, t.breakWords)))
                    {
                        const T = L.wordWrapSplit(g);

                        for (let y = 0; y < T.length; y++)
                        {
                            let x = T[y];
                            let A = x;
                            let D = 1;

                            for (; T[y + D];)
                            {
                                const E = T[y + D];

                                if (!L.canBreakChars(A, E, g, y, t.breakWords)) x += E;
                                else break;
                                (A = E), D++;
                            }
                            y += D - 1;
                            const R = L.getFromCache(x, h, a, s);

                            R + r > f && ((o += L.addLine(n)), (d = !1), (n = ''), (r = 0)), (n += x), (r += R);
                        }
                    }
                    else
                    {
                        n.length > 0 && ((o += L.addLine(n)), (n = ''), (r = 0));
                        const T = _ === p.length - 1;

                        (o += L.addLine(g, !T)), (d = !1), (n = ''), (r = 0);
                    }
                }
                else
                {
                    v + r > f && ((d = !1), (o += L.addLine(n)), (n = ''), (r = 0)),
                    (n.length > 0 || !L.isBreakingSpace(g) || d) && ((n += g), (r += v));
                }
            }

            return (o += L.addLine(n, !1)), o;
        }
        static addLine(e, t = !0)
        {
            return (
                (e = L.trimRight(e)),
                (e = t
                    ? `${e}
`
                    : e),
                e
            );
        }
        static getFromCache(e, t, i, s)
        {
            let r = i[e];

            return typeof r !== 'number' && ((r = L._measureText(e, t, s) + t), (i[e] = r)), r;
        }
        static collapseSpaces(e)
        {
            return e === 'normal' || e === 'pre-line';
        }
        static collapseNewlines(e)
        {
            return e === 'normal';
        }
        static trimRight(e)
        {
            if (typeof e !== 'string') return '';
            for (let t = e.length - 1; t >= 0; t--)
            {
                const i = e[t];

                if (!L.isBreakingSpace(i)) break;
                e = e.slice(0, -1);
            }

            return e;
        }
        static isNewline(e)
        {
            return typeof e !== 'string' ? !1 : L._newlines.includes(e.charCodeAt(0));
        }
        static isBreakingSpace(e, t)
        {
            return typeof e !== 'string' ? !1 : L._breakingSpaces.includes(e.charCodeAt(0));
        }
        static tokenize(e)
        {
            const t = [];
            let i = '';

            if (typeof e !== 'string') return t;
            for (let s = 0; s < e.length; s++)
            {
                const r = e[s];
                const n = e[s + 1];

                if (L.isBreakingSpace(r, n) || L.isNewline(r))
                {
                    i !== '' && (t.push(i), (i = '')), t.push(r);
                    continue;
                }
                i += r;
            }

            return i !== '' && t.push(i), t;
        }
        static canBreakWords(e, t)
        {
            return t;
        }
        static canBreakChars(e, t, i, s, r)
        {
            return !0;
        }
        static wordWrapSplit(e)
        {
            return L.graphemeSegmenter(e);
        }
        static measureFont(e)
        {
            if (L._fonts[e]) return L._fonts[e];
            const t = { ascent: 0, descent: 0, fontSize: 0 };
            const i = L._canvas;
            const s = L._context;

            s.font = e;
            const r = L.METRICS_STRING + L.BASELINE_SYMBOL;
            const n = Math.ceil(s.measureText(r).width);
            let o = Math.ceil(s.measureText(L.BASELINE_SYMBOL).width);
            const a = Math.ceil(L.HEIGHT_MULTIPLIER * o);

            if (((o = (o * L.BASELINE_MULTIPLIER) | 0), n === 0 || a === 0)) return (L._fonts[e] = t), t;
            (i.width = n),
            (i.height = a),
            (s.fillStyle = '#f00'),
            s.fillRect(0, 0, n, a),
            (s.font = e),
            (s.textBaseline = 'alphabetic'),
            (s.fillStyle = '#000'),
            s.fillText(r, 0, o);
            const h = s.getImageData(0, 0, n, a).data;
            const l = h.length;
            const c = n * 4;
            let u = 0;
            let d = 0;
            let f = !1;

            for (u = 0; u < o; ++u)
            {
                for (let p = 0; p < c; p += 4)
                {
                    if (h[d + p] !== 255)
                    {
                        f = !0;
                        break;
                    }
                }
                if (!f) d += c;
                else break;
            }
            for (t.ascent = o - u, d = l - c, f = !1, u = a; u > o; --u)
            {
                for (let p = 0; p < c; p += 4)
                {
                    if (h[d + p] !== 255)
                    {
                        f = !0;
                        break;
                    }
                }
                if (!f) d -= c;
                else break;
            }

            return (t.descent = u - o), (t.fontSize = t.ascent + t.descent), (L._fonts[e] = t), t;
        }
        static clearMetrics(e = '')
        {
            e ? delete L._fonts[e] : (L._fonts = {});
        }
        static get _canvas()
        {
            if (!L.__canvas)
            {
                let e;

                try
                {
                    const t = new OffscreenCanvas(0, 0);
                    const i = t.getContext('2d', $s);

                    if (i != null && i.measureText) return (L.__canvas = t), t;
                    e = P.ADAPTER.createCanvas();
                }
                catch (t)
                {
                    e = P.ADAPTER.createCanvas();
                }
                (e.width = e.height = 10), (L.__canvas = e);
            }

            return L.__canvas;
        }
        static get _context()
        {
            return L.__context || (L.__context = L._canvas.getContext('2d', $s)), L.__context;
        }
    };
    const yt = L;

    (yt.METRICS_STRING = '|\xC9q\xC5'),
    (yt.BASELINE_SYMBOL = 'M'),
    (yt.BASELINE_MULTIPLIER = 1.4),
    (yt.HEIGHT_MULTIPLIER = 2),
    (yt.graphemeSegmenter = (() =>
    {
        if (typeof (Intl == null ? void 0 : Intl.Segmenter) === 'function')
        {
            const e = new Intl.Segmenter();

            return (t) => [...e.segment(t)].map((i) => i.segment);
        }

        return (e) => [...e];
    })()),
    (yt.experimentalLetterSpacing = !1),
    (yt._fonts = {}),
    (yt._newlines = [10, 13]),
    (yt._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288]);
    const Ed = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'system-ui'];
    const zi = class
    {
        constructor(e)
        {
            (this.styleID = 0), this.reset(), kn(this, e, e);
        }
        clone()
        {
            const e = {};

            return kn(e, this, zi.defaultStyle), new zi(e);
        }
        reset()
        {
            kn(this, zi.defaultStyle, zi.defaultStyle);
        }
        get align()
        {
            return this._align;
        }
        set align(e)
        {
            this._align !== e && ((this._align = e), this.styleID++);
        }
        get breakWords()
        {
            return this._breakWords;
        }
        set breakWords(e)
        {
            this._breakWords !== e && ((this._breakWords = e), this.styleID++);
        }
        get dropShadow()
        {
            return this._dropShadow;
        }
        set dropShadow(e)
        {
            this._dropShadow !== e && ((this._dropShadow = e), this.styleID++);
        }
        get dropShadowAlpha()
        {
            return this._dropShadowAlpha;
        }
        set dropShadowAlpha(e)
        {
            this._dropShadowAlpha !== e && ((this._dropShadowAlpha = e), this.styleID++);
        }
        get dropShadowAngle()
        {
            return this._dropShadowAngle;
        }
        set dropShadowAngle(e)
        {
            this._dropShadowAngle !== e && ((this._dropShadowAngle = e), this.styleID++);
        }
        get dropShadowBlur()
        {
            return this._dropShadowBlur;
        }
        set dropShadowBlur(e)
        {
            this._dropShadowBlur !== e && ((this._dropShadowBlur = e), this.styleID++);
        }
        get dropShadowColor()
        {
            return this._dropShadowColor;
        }
        set dropShadowColor(e)
        {
            const t = Un(e);

            this._dropShadowColor !== t && ((this._dropShadowColor = t), this.styleID++);
        }
        get dropShadowDistance()
        {
            return this._dropShadowDistance;
        }
        set dropShadowDistance(e)
        {
            this._dropShadowDistance !== e && ((this._dropShadowDistance = e), this.styleID++);
        }
        get fill()
        {
            return this._fill;
        }
        set fill(e)
        {
            const t = Un(e);

            this._fill !== t && ((this._fill = t), this.styleID++);
        }
        get fillGradientType()
        {
            return this._fillGradientType;
        }
        set fillGradientType(e)
        {
            this._fillGradientType !== e && ((this._fillGradientType = e), this.styleID++);
        }
        get fillGradientStops()
        {
            return this._fillGradientStops;
        }
        set fillGradientStops(e)
        {
            wd(this._fillGradientStops, e) || ((this._fillGradientStops = e), this.styleID++);
        }
        get fontFamily()
        {
            return this._fontFamily;
        }
        set fontFamily(e)
        {
            this.fontFamily !== e && ((this._fontFamily = e), this.styleID++);
        }
        get fontSize()
        {
            return this._fontSize;
        }
        set fontSize(e)
        {
            this._fontSize !== e && ((this._fontSize = e), this.styleID++);
        }
        get fontStyle()
        {
            return this._fontStyle;
        }
        set fontStyle(e)
        {
            this._fontStyle !== e && ((this._fontStyle = e), this.styleID++);
        }
        get fontVariant()
        {
            return this._fontVariant;
        }
        set fontVariant(e)
        {
            this._fontVariant !== e && ((this._fontVariant = e), this.styleID++);
        }
        get fontWeight()
        {
            return this._fontWeight;
        }
        set fontWeight(e)
        {
            this._fontWeight !== e && ((this._fontWeight = e), this.styleID++);
        }
        get letterSpacing()
        {
            return this._letterSpacing;
        }
        set letterSpacing(e)
        {
            this._letterSpacing !== e && ((this._letterSpacing = e), this.styleID++);
        }
        get lineHeight()
        {
            return this._lineHeight;
        }
        set lineHeight(e)
        {
            this._lineHeight !== e && ((this._lineHeight = e), this.styleID++);
        }
        get leading()
        {
            return this._leading;
        }
        set leading(e)
        {
            this._leading !== e && ((this._leading = e), this.styleID++);
        }
        get lineJoin()
        {
            return this._lineJoin;
        }
        set lineJoin(e)
        {
            this._lineJoin !== e && ((this._lineJoin = e), this.styleID++);
        }
        get miterLimit()
        {
            return this._miterLimit;
        }
        set miterLimit(e)
        {
            this._miterLimit !== e && ((this._miterLimit = e), this.styleID++);
        }
        get padding()
        {
            return this._padding;
        }
        set padding(e)
        {
            this._padding !== e && ((this._padding = e), this.styleID++);
        }
        get stroke()
        {
            return this._stroke;
        }
        set stroke(e)
        {
            const t = Un(e);

            this._stroke !== t && ((this._stroke = t), this.styleID++);
        }
        get strokeThickness()
        {
            return this._strokeThickness;
        }
        set strokeThickness(e)
        {
            this._strokeThickness !== e && ((this._strokeThickness = e), this.styleID++);
        }
        get textBaseline()
        {
            return this._textBaseline;
        }
        set textBaseline(e)
        {
            this._textBaseline !== e && ((this._textBaseline = e), this.styleID++);
        }
        get trim()
        {
            return this._trim;
        }
        set trim(e)
        {
            this._trim !== e && ((this._trim = e), this.styleID++);
        }
        get whiteSpace()
        {
            return this._whiteSpace;
        }
        set whiteSpace(e)
        {
            this._whiteSpace !== e && ((this._whiteSpace = e), this.styleID++);
        }
        get wordWrap()
        {
            return this._wordWrap;
        }
        set wordWrap(e)
        {
            this._wordWrap !== e && ((this._wordWrap = e), this.styleID++);
        }
        get wordWrapWidth()
        {
            return this._wordWrapWidth;
        }
        set wordWrapWidth(e)
        {
            this._wordWrapWidth !== e && ((this._wordWrapWidth = e), this.styleID++);
        }
        toFontString()
        {
            const e = typeof this.fontSize === 'number' ? `${this.fontSize}px` : this.fontSize;
            let t = this.fontFamily;

            Array.isArray(this.fontFamily) || (t = this.fontFamily.split(','));
            for (let i = t.length - 1; i >= 0; i--)
            {
                let s = t[i].trim();

                !(/([\"\'])[^\'\"]+\1/).test(s) && !Ed.includes(s) && (s = `"${s}"`), (t[i] = s);
            }

            return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${e} ${t.join(',')}`;
        }
    };
    const ae = zi;

    ae.defaultStyle = {
        align: 'left',
        breakWords: !1,
        dropShadow: !1,
        dropShadowAlpha: 1,
        dropShadowAngle: Math.PI / 6,
        dropShadowBlur: 0,
        dropShadowColor: 'black',
        dropShadowDistance: 5,
        fill: 'black',
        fillGradientType: Vi.LINEAR_VERTICAL,
        fillGradientStops: [],
        fontFamily: 'Arial',
        fontSize: 26,
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: 'normal',
        leading: 0,
        letterSpacing: 0,
        lineHeight: 0,
        lineJoin: 'miter',
        miterLimit: 10,
        padding: 0,
        stroke: 'black',
        strokeThickness: 0,
        textBaseline: 'alphabetic',
        trim: !1,
        whiteSpace: 'pre',
        wordWrap: !1,
        wordWrapWidth: 100,
    };
    function Un(e)
    {
        const t = j.shared;

        return Array.isArray(e) ? e.map((i) => t.setValue(i).toHex()) : t.setValue(e).toHex();
    }
    function wd(e, t)
    {
        if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
        for (let i = 0; i < e.length; ++i) if (e[i] !== t[i]) return !1;

        return !0;
    }
    function kn(e, t, i)
    {
        for (const s in i) Array.isArray(t[s]) ? (e[s] = t[s].slice()) : (e[s] = t[s]);
    }
    const Sd = { texture: !0, children: !1, baseTexture: !0 };
    const Gn = class extends ve
    {
        constructor(e, t, i)
        {
            let n;
            let s = !1;

            i || ((i = P.ADAPTER.createCanvas()), (s = !0)), (i.width = 3), (i.height = 3);
            const r = B.from(i);

            (r.orig = new $()),
            (r.trim = new $()),
            super(r),
            (this._ownCanvas = s),
            (this.canvas = i),
            (this.context = i.getContext('2d', { willReadFrequently: !0 })),
            (this._resolution = (n = Gn.defaultResolution) != null ? n : P.RESOLUTION),
            (this._autoResolution = Gn.defaultAutoResolution),
            (this._text = null),
            (this._style = null),
            (this._styleListener = null),
            (this._font = ''),
            (this.text = e),
            (this.style = t),
            (this.localStyleID = -1);
        }
        static get experimentalLetterSpacing()
        {
            return yt.experimentalLetterSpacing;
        }
        static set experimentalLetterSpacing(e)
        {
            z('7.1.0', 'Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing'),
            (yt.experimentalLetterSpacing = e);
        }
        updateText(e)
        {
            const t = this._style;

            if (
                (this.localStyleID !== t.styleID && ((this.dirty = !0), (this.localStyleID = t.styleID)),
                !this.dirty && e)
            )
            { return; }
            this._font = this._style.toFontString();
            const i = this.context;
            const s = yt.measureText(this._text || ' ', this._style, this._style.wordWrap, this.canvas);
            const r = s.width;
            const n = s.height;
            const o = s.lines;
            const a = s.lineHeight;
            const h = s.lineWidths;
            const l = s.maxLineWidth;
            const c = s.fontProperties;

            (this.canvas.width = Math.ceil(Math.ceil(Math.max(1, r) + t.padding * 2) * this._resolution)),
            (this.canvas.height = Math.ceil(Math.ceil(Math.max(1, n) + t.padding * 2) * this._resolution)),
            i.scale(this._resolution, this._resolution),
            i.clearRect(0, 0, this.canvas.width, this.canvas.height),
            (i.font = this._font),
            (i.lineWidth = t.strokeThickness),
            (i.textBaseline = t.textBaseline),
            (i.lineJoin = t.lineJoin),
            (i.miterLimit = t.miterLimit);
            let u; let
                d;
            const f = t.dropShadow ? 2 : 1;

            for (let p = 0; p < f; ++p)
            {
                const _ = t.dropShadow && p === 0;
                const g = _ ? Math.ceil(Math.max(1, n) + t.padding * 2) : 0;
                const v = g * this._resolution;

                if (_)
                {
                    (i.fillStyle = 'black'), (i.strokeStyle = 'black');
                    const y = t.dropShadowColor;
                    const x = t.dropShadowBlur * this._resolution;
                    const A = t.dropShadowDistance * this._resolution;

                    (i.shadowColor = j.shared.setValue(y).setAlpha(t.dropShadowAlpha).toRgbaString()),
                    (i.shadowBlur = x),
                    (i.shadowOffsetX = Math.cos(t.dropShadowAngle) * A),
                    (i.shadowOffsetY = Math.sin(t.dropShadowAngle) * A + v);
                }
                else
                {
                    (i.fillStyle = this._generateFillStyle(t, o, s)),
                    (i.strokeStyle = t.stroke),
                    (i.shadowColor = 'black'),
                    (i.shadowBlur = 0),
                    (i.shadowOffsetX = 0),
                    (i.shadowOffsetY = 0);
                }
                let T = (a - c.fontSize) / 2;

                a - c.fontSize < 0 && (T = 0);
                for (let y = 0; y < o.length; y++)
                {
                    (u = t.strokeThickness / 2),
                    (d = t.strokeThickness / 2 + y * a + c.ascent + T),
                    t.align === 'right' ? (u += l - h[y]) : t.align === 'center' && (u += (l - h[y]) / 2),
                    t.stroke
                                && t.strokeThickness
                                && this.drawLetterSpacing(o[y], u + t.padding, d + t.padding - g, !0),
                    t.fill && this.drawLetterSpacing(o[y], u + t.padding, d + t.padding - g);
                }
            }
            this.updateTexture();
        }
        drawLetterSpacing(e, t, i, s = !1)
        {
            const n = this._style.letterSpacing;
            let o = !1;

            if (
                (yt.experimentalLetterSpacingSupported
                        && (yt.experimentalLetterSpacing
                            ? ((this.context.letterSpacing = `${n}px`),
                            (this.context.textLetterSpacing = `${n}px`),
                            (o = !0))
                            : ((this.context.letterSpacing = '0px'), (this.context.textLetterSpacing = '0px'))),
                n === 0 || o)
            )
            {
                s ? this.context.strokeText(e, t, i) : this.context.fillText(e, t, i);

                return;
            }
            let a = t;
            const h = yt.graphemeSegmenter(e);
            let l = this.context.measureText(e).width;
            let c = 0;

            for (let u = 0; u < h.length; ++u)
            {
                const d = h[u];

                s ? this.context.strokeText(d, a, i) : this.context.fillText(d, a, i);
                let f = '';

                for (let p = u + 1; p < h.length; ++p) f += h[p];
                (c = this.context.measureText(f).width), (a += l - c + n), (l = c);
            }
        }
        updateTexture()
        {
            const e = this.canvas;

            if (this._style.trim)
            {
                const n = ko(e);

                n.data && ((e.width = n.width), (e.height = n.height), this.context.putImageData(n.data, 0, 0));
            }
            const t = this._texture;
            const i = this._style;
            const s = i.trim ? 0 : i.padding;
            const r = t.baseTexture;

            (t.trim.width = t._frame.width = e.width / this._resolution),
            (t.trim.height = t._frame.height = e.height / this._resolution),
            (t.trim.x = -s),
            (t.trim.y = -s),
            (t.orig.width = t._frame.width - s * 2),
            (t.orig.height = t._frame.height - s * 2),
            this._onTextureUpdate(),
            r.setRealSize(e.width, e.height, this._resolution),
            t.updateUvs(),
            (this.dirty = !1);
        }
        _render(e)
        {
            this._autoResolution
                    && this._resolution !== e.resolution
                    && ((this._resolution = e.resolution), (this.dirty = !0)),
            this.updateText(!0),
            super._render(e);
        }
        updateTransform()
        {
            this.updateText(!0), super.updateTransform();
        }
        getBounds(e, t)
        {
            return this.updateText(!0), this._textureID === -1 && (e = !1), super.getBounds(e, t);
        }
        getLocalBounds(e)
        {
            return this.updateText(!0), super.getLocalBounds.call(this, e);
        }
        _calculateBounds()
        {
            this.calculateVertices(), this._bounds.addQuad(this.vertexData);
        }
        _generateFillStyle(e, t, i)
        {
            const s = e.fill;

            if (Array.isArray(s))
            {
                if (s.length === 1) return s[0];
            }
            else return s;
            let r;
            const n = e.dropShadow ? e.dropShadowDistance : 0;
            const o = e.padding || 0;
            const a = this.canvas.width / this._resolution - n - o * 2;
            const h = this.canvas.height / this._resolution - n - o * 2;
            const l = s.slice();
            const c = e.fillGradientStops.slice();

            if (!c.length)
            {
                const u = l.length + 1;

                for (let d = 1; d < u; ++d) c.push(d / u);
            }
            if (
                (l.unshift(s[0]),
                c.unshift(0),
                l.push(s[s.length - 1]),
                c.push(1),
                e.fillGradientType === Vi.LINEAR_VERTICAL)
            )
            {
                r = this.context.createLinearGradient(a / 2, o, a / 2, h + o);
                const u = i.fontProperties.fontSize + e.strokeThickness;

                for (let d = 0; d < t.length; d++)
                {
                    const f = i.lineHeight * (d - 1) + u;
                    const p = i.lineHeight * d;
                    let _ = p;

                    d > 0 && f > p && (_ = (p + f) / 2);
                    const g = p + u;
                    const v = i.lineHeight * (d + 1);
                    let T = g;

                    d + 1 < t.length && v < g && (T = (g + v) / 2);
                    const y = (T - _) / h;

                    for (let x = 0; x < l.length; x++)
                    {
                        let A = 0;

                        typeof c[x] === 'number' ? (A = c[x]) : (A = x / l.length);
                        let D = Math.min(1, Math.max(0, _ / h + A * y));

                        (D = Number(D.toFixed(5))), r.addColorStop(D, l[x]);
                    }
                }
            }
            else
            {
                r = this.context.createLinearGradient(o, h / 2, a + o, h / 2);
                const u = l.length + 1;
                let d = 1;

                for (let f = 0; f < l.length; f++)
                {
                    let p;

                    typeof c[f] === 'number' ? (p = c[f]) : (p = d / u), r.addColorStop(p, l[f]), d++;
                }
            }

            return r;
        }
        destroy(e)
        {
            typeof e === 'boolean' && (e = { children: e }),
            (e = Object.assign({}, Sd, e)),
            super.destroy(e),
            this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
            (this.context = null),
            (this.canvas = null),
            (this._style = null);
        }
        get width()
        {
            return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width;
        }
        set width(e)
        {
            this.updateText(!0);
            const t = de(this.scale.x) || 1;

            (this.scale.x = (t * e) / this._texture.orig.width), (this._width = e);
        }
        get height()
        {
            return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height;
        }
        set height(e)
        {
            this.updateText(!0);
            const t = de(this.scale.y) || 1;

            (this.scale.y = (t * e) / this._texture.orig.height), (this._height = e);
        }
        get style()
        {
            return this._style;
        }
        set style(e)
        {
            (e = e || {}),
            e instanceof ae ? (this._style = e) : (this._style = new ae(e)),
            (this.localStyleID = -1),
            (this.dirty = !0);
        }
        get text()
        {
            return this._text;
        }
        set text(e)
        {
            (e = String(e == null ? '' : e)), this._text !== e && ((this._text = e), (this.dirty = !0));
        }
        get resolution()
        {
            return this._resolution;
        }
        set resolution(e)
        {
            (this._autoResolution = !1), this._resolution !== e && ((this._resolution = e), (this.dirty = !0));
        }
    };
    const js = Gn;

    js.defaultAutoResolution = !0;
    class Ph
    {
        constructor(t)
        {
            (this.maxItemsPerFrame = t), (this.itemsLeft = 0);
        }
        beginFrame()
        {
            this.itemsLeft = this.maxItemsPerFrame;
        }
        allowedToUpload()
        {
            return this.itemsLeft-- > 0;
        }
    }
    function Ad(e, t)
    {
        let s;
        let i = !1;

        if ((s = e == null ? void 0 : e._textures) != null && s.length)
        {
            for (let r = 0; r < e._textures.length; r++)
            {
                if (e._textures[r] instanceof B)
                {
                    const n = e._textures[r].baseTexture;

                    t.includes(n) || (t.push(n), (i = !0));
                }
            }
        }

        return i;
    }
    function Rd(e, t)
    {
        if (e.baseTexture instanceof V)
        {
            const i = e.baseTexture;

            return t.includes(i) || t.push(i), !0;
        }

        return !1;
    }
    function Cd(e, t)
    {
        if (e._texture && e._texture instanceof B)
        {
            const i = e._texture.baseTexture;

            return t.includes(i) || t.push(i), !0;
        }

        return !1;
    }
    function Id(e, t)
    {
        return t instanceof js ? (t.updateText(!0), !0) : !1;
    }
    function Pd(e, t)
    {
        if (t instanceof ae)
        {
            const i = t.toFontString();

            return yt.measureFont(i), !0;
        }

        return !1;
    }
    function Md(e, t)
    {
        if (e instanceof js)
        {
            t.includes(e.style) || t.push(e.style), t.includes(e) || t.push(e);
            const i = e._texture.baseTexture;

            return t.includes(i) || t.push(i), !0;
        }

        return !1;
    }
    function Bd(e, t)
    {
        return e instanceof ae ? (t.includes(e) || t.push(e), !0) : !1;
    }
    const Mh = class
    {
        constructor(e)
        {
            (this.limiter = new Ph(Mh.uploadsPerFrame)),
            (this.renderer = e),
            (this.uploadHookHelper = null),
            (this.queue = []),
            (this.addHooks = []),
            (this.uploadHooks = []),
            (this.completes = []),
            (this.ticking = !1),
            (this.delayedTick = () =>
            {
                !this.queue || this.prepareItems();
            }),
            this.registerFindHook(Md),
            this.registerFindHook(Bd),
            this.registerFindHook(Ad),
            this.registerFindHook(Rd),
            this.registerFindHook(Cd),
            this.registerUploadHook(Id),
            this.registerUploadHook(Pd);
        }
        upload(e)
        {
            return new Promise((t) =>
            {
                e && this.add(e),
                this.queue.length
                    ? (this.completes.push(t),
                    this.ticking || ((this.ticking = !0), lt.system.addOnce(this.tick, this, ye.UTILITY)))
                    : t();
            });
        }
        tick()
        {
            setTimeout(this.delayedTick, 0);
        }
        prepareItems()
        {
            for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();)
            {
                const e = this.queue[0];
                let t = !1;

                if (e && !e._destroyed)
                {
                    for (let i = 0, s = this.uploadHooks.length; i < s; i++)
                    {
                        if (this.uploadHooks[i](this.uploadHookHelper, e))
                        {
                            this.queue.shift(), (t = !0);
                            break;
                        }
                    }
                }
                t || this.queue.shift();
            }
            if (this.queue.length) lt.system.addOnce(this.tick, this, ye.UTILITY);
            else
            {
                this.ticking = !1;
                const e = this.completes.slice(0);

                this.completes.length = 0;
                for (let t = 0, i = e.length; t < i; t++) e[t]();
            }
        }
        registerFindHook(e)
        {
            return e && this.addHooks.push(e), this;
        }
        registerUploadHook(e)
        {
            return e && this.uploadHooks.push(e), this;
        }
        add(e)
        {
            for (let t = 0, i = this.addHooks.length; t < i && !this.addHooks[t](e, this.queue); t++);
            if (e instanceof Ct) for (let t = e.children.length - 1; t >= 0; t--) this.add(e.children[t]);

            return this;
        }
        destroy()
        {
            this.ticking && lt.system.remove(this.tick, this),
            (this.ticking = !1),
            (this.addHooks = null),
            (this.uploadHooks = null),
            (this.renderer = null),
            (this.completes = null),
            (this.queue = null),
            (this.limiter = null),
            (this.uploadHookHelper = null);
        }
    };
    const Wi = Mh;

    (Wi.uploadsPerFrame = 4),
    Object.defineProperties(P, {
        UPLOADS_PER_FRAME: {
            get()
            {
                return Wi.uploadsPerFrame;
            },
            set(e)
            {
                z('7.1.0', 'settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame'),
                (Wi.uploadsPerFrame = e);
            },
        },
    });
    function Bh(e, t)
    {
        return t instanceof V ? (t._glTextures[e.CONTEXT_UID] || e.texture.bind(t), !0) : !1;
    }
    function Dd(e, t)
    {
        if (!(t instanceof Hi)) return !1;
        const { geometry: i } = t;

        t.finishPoly(), i.updateBatches();
        const { batches: s } = i;

        for (let r = 0; r < s.length; r++)
        {
            const { texture: n } = s[r].style;

            n && Bh(e, n.baseTexture);
        }

        return i.batchable || e.geometry.bind(i, t._resolveDirectShader(e)), !0;
    }
    function Fd(e, t)
    {
        return e instanceof Hi ? (t.push(e), !0) : !1;
    }
    class Hn extends Wi
    {
        constructor(t)
        {
            super(t),
            (this.uploadHookHelper = this.renderer),
            this.registerFindHook(Fd),
            this.registerUploadHook(Bh),
            this.registerUploadHook(Dd);
        }
    }
    (Hn.extension = { name: 'prepare', type: M.RendererSystem }), U.add(Hn);
    class Nd
    {
        constructor(t)
        {
            (this.maxMilliseconds = t), (this.frameStart = 0);
        }
        beginFrame()
        {
            this.frameStart = Date.now();
        }
        allowedToUpload()
        {
            return Date.now() - this.frameStart < this.maxMilliseconds;
        }
    }
    class Ys extends ve
    {
        constructor(t, i = !0)
        {
            super(t[0] instanceof B ? t[0] : t[0].texture),
            (this._textures = null),
            (this._durations = null),
            (this._autoUpdate = i),
            (this._isConnectedToTicker = !1),
            (this.animationSpeed = 1),
            (this.loop = !0),
            (this.updateAnchor = !1),
            (this.onComplete = null),
            (this.onFrameChange = null),
            (this.onLoop = null),
            (this._currentTime = 0),
            (this._playing = !1),
            (this._previousFrame = null),
            (this.textures = t);
        }
        stop()
        {
            !this._playing
                || ((this._playing = !1),
                this._autoUpdate
                    && this._isConnectedToTicker
                    && (lt.shared.remove(this.update, this), (this._isConnectedToTicker = !1)));
        }
        play()
        {
            this._playing
                || ((this._playing = !0),
                this._autoUpdate
                    && !this._isConnectedToTicker
                    && (lt.shared.add(this.update, this, ye.HIGH), (this._isConnectedToTicker = !0)));
        }
        gotoAndStop(t)
        {
            this.stop(), (this.currentFrame = t);
        }
        gotoAndPlay(t)
        {
            (this.currentFrame = t), this.play();
        }
        update(t)
        {
            if (!this._playing) return;
            const i = this.animationSpeed * t;
            const s = this.currentFrame;

            if (this._durations !== null)
            {
                let r = (this._currentTime % 1) * this._durations[this.currentFrame];

                for (r += (i / 60) * 1e3; r < 0;) this._currentTime--, (r += this._durations[this.currentFrame]);
                const n = Math.sign(this.animationSpeed * t);

                for (this._currentTime = Math.floor(this._currentTime); r >= this._durations[this.currentFrame];)
                { (r -= this._durations[this.currentFrame] * n), (this._currentTime += n); }
                this._currentTime += r / this._durations[this.currentFrame];
            }
            else this._currentTime += i;
            this._currentTime < 0 && !this.loop
                ? (this.gotoAndStop(0), this.onComplete && this.onComplete())
                : this._currentTime >= this._textures.length && !this.loop
                    ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete())
                    : s !== this.currentFrame
                  && (this.loop
                      && this.onLoop
                      && ((this.animationSpeed > 0 && this.currentFrame < s)
                          || (this.animationSpeed < 0 && this.currentFrame > s))
                      && this.onLoop(),
                  this.updateTexture());
        }
        updateTexture()
        {
            const t = this.currentFrame;

            this._previousFrame !== t
                && ((this._previousFrame = t),
                (this._texture = this._textures[t]),
                (this._textureID = -1),
                (this._textureTrimmedID = -1),
                (this._cachedTint = 16777215),
                (this.uvs = this._texture._uvs.uvsFloat32),
                this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor),
                this.onFrameChange && this.onFrameChange(this.currentFrame));
        }
        destroy(t)
        {
            this.stop(), super.destroy(t), (this.onComplete = null), (this.onFrameChange = null), (this.onLoop = null);
        }
        static fromFrames(t)
        {
            const i = [];

            for (let s = 0; s < t.length; ++s) i.push(B.from(t[s]));

            return new Ys(i);
        }
        static fromImages(t)
        {
            const i = [];

            for (let s = 0; s < t.length; ++s) i.push(B.from(t[s]));

            return new Ys(i);
        }
        get totalFrames()
        {
            return this._textures.length;
        }
        get textures()
        {
            return this._textures;
        }
        set textures(t)
        {
            if (t[0] instanceof B) (this._textures = t), (this._durations = null);
            else
            {
                (this._textures = []), (this._durations = []);
                for (let i = 0; i < t.length; i++) this._textures.push(t[i].texture), this._durations.push(t[i].time);
            }
            (this._previousFrame = null), this.gotoAndStop(0), this.updateTexture();
        }
        get currentFrame()
        {
            let t = Math.floor(this._currentTime) % this._textures.length;

            return t < 0 && (t += this._textures.length), t;
        }
        set currentFrame(t)
        {
            if (t < 0 || t > this.totalFrames - 1)
            {
                throw new Error(
                    `[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`,
                );
            }
            const i = this.currentFrame;

            (this._currentTime = t), i !== this.currentFrame && this.updateTexture();
        }
        get playing()
        {
            return this._playing;
        }
        get autoUpdate()
        {
            return this._autoUpdate;
        }
        set autoUpdate(t)
        {
            t !== this._autoUpdate
                && ((this._autoUpdate = t),
                !this._autoUpdate && this._isConnectedToTicker
                    ? (lt.shared.remove(this.update, this), (this._isConnectedToTicker = !1))
                    : this._autoUpdate
                      && !this._isConnectedToTicker
                      && this._playing
                      && (lt.shared.add(this.update, this), (this._isConnectedToTicker = !0)));
        }
    }
    const $i = new Y();

    class Xn extends ve
    {
        constructor(t, i = 100, s = 100)
        {
            super(t),
            (this.tileTransform = new vi()),
            (this._width = i),
            (this._height = s),
            (this.uvMatrix = this.texture.uvMatrix || new As(t)),
            (this.pluginName = 'tilingSprite'),
            (this.uvRespectAnchor = !1);
        }
        get clampMargin()
        {
            return this.uvMatrix.clampMargin;
        }
        set clampMargin(t)
        {
            (this.uvMatrix.clampMargin = t), this.uvMatrix.update(!0);
        }
        get tileScale()
        {
            return this.tileTransform.scale;
        }
        set tileScale(t)
        {
            this.tileTransform.scale.copyFrom(t);
        }
        get tilePosition()
        {
            return this.tileTransform.position;
        }
        set tilePosition(t)
        {
            this.tileTransform.position.copyFrom(t);
        }
        _onTextureUpdate()
        {
            this.uvMatrix && (this.uvMatrix.texture = this._texture), (this._cachedTint = 16777215);
        }
        _render(t)
        {
            const i = this._texture;

            !i
                || !i.valid
                || (this.tileTransform.updateLocalTransform(),
                this.uvMatrix.update(),
                t.batch.setObjectRenderer(t.plugins[this.pluginName]),
                t.plugins[this.pluginName].render(this));
        }
        _calculateBounds()
        {
            const t = this._width * -this._anchor._x;
            const i = this._height * -this._anchor._y;
            const s = this._width * (1 - this._anchor._x);
            const r = this._height * (1 - this._anchor._y);

            this._bounds.addFrame(this.transform, t, i, s, r);
        }
        getLocalBounds(t)
        {
            return this.children.length === 0
                ? ((this._bounds.minX = this._width * -this._anchor._x),
                (this._bounds.minY = this._height * -this._anchor._y),
                (this._bounds.maxX = this._width * (1 - this._anchor._x)),
                (this._bounds.maxY = this._height * (1 - this._anchor._y)),
                t || (this._localBoundsRect || (this._localBoundsRect = new $()), (t = this._localBoundsRect)),
                this._bounds.getRectangle(t))
                : super.getLocalBounds.call(this, t);
        }
        containsPoint(t)
        {
            this.worldTransform.applyInverse(t, $i);
            const i = this._width;
            const s = this._height;
            const r = -i * this.anchor._x;

            if ($i.x >= r && $i.x < r + i)
            {
                const n = -s * this.anchor._y;

                if ($i.y >= n && $i.y < n + s) return !0;
            }

            return !1;
        }
        destroy(t)
        {
            super.destroy(t), (this.tileTransform = null), (this.uvMatrix = null);
        }
        static from(t, i)
        {
            const s = t instanceof B ? t : B.from(t, i);

            return new Xn(s, i.width, i.height);
        }
        get width()
        {
            return this._width;
        }
        set width(t)
        {
            this._width = t;
        }
        get height()
        {
            return this._height;
        }
        set height(t)
        {
            this._height = t;
        }
    }
    const Ld = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`;
    const Od = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`;
    const Ud = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord)
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`;
    const Dh = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`;
    const kd = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
    const qs = new tt();

    class Vn extends Ti
    {
        constructor(t)
        {
            super(t), t.runners.contextChange.add(this), (this.quad = new Gr()), (this.state = ne.for2d());
        }
        contextChange()
        {
            const t = this.renderer;
            const i = { globals: t.globalUniforms };

            (this.simpleShader = Kt.from(Dh, kd, i)),
            (this.shader = t.context.webGLVersion > 1 ? Kt.from(Od, Ld, i) : Kt.from(Dh, Ud, i));
        }
        render(t)
        {
            const i = this.renderer;
            const s = this.quad;
            let r = s.vertices;

            (r[0] = r[6] = t._width * -t.anchor.x),
            (r[1] = r[3] = t._height * -t.anchor.y),
            (r[2] = r[4] = t._width * (1 - t.anchor.x)),
            (r[5] = r[7] = t._height * (1 - t.anchor.y));
            const n = t.uvRespectAnchor ? t.anchor.x : 0;
            const o = t.uvRespectAnchor ? t.anchor.y : 0;

            (r = s.uvs),
            (r[0] = r[6] = -n),
            (r[1] = r[3] = -o),
            (r[2] = r[4] = 1 - n),
            (r[5] = r[7] = 1 - o),
            s.invalidate();
            const a = t._texture;
            const h = a.baseTexture;
            const l = h.alphaMode > 0;
            const c = t.tileTransform.localTransform;
            const u = t.uvMatrix;
            let d = h.isPowerOfTwo && a.frame.width === h.width && a.frame.height === h.height;

            d
                && (h._glTextures[i.CONTEXT_UID]
                    ? (d = h.wrapMode !== ie.CLAMP)
                    : h.wrapMode === ie.CLAMP && (h.wrapMode = ie.REPEAT));
            const f = d ? this.simpleShader : this.shader;
            const p = a.width;
            const _ = a.height;
            const g = t._width;
            const v = t._height;

            qs.set((c.a * p) / g, (c.b * p) / v, (c.c * _) / g, (c.d * _) / v, c.tx / g, c.ty / v),
            qs.invert(),
            d
                ? qs.prepend(u.mapCoord)
                : ((f.uniforms.uMapCoord = u.mapCoord.toArray(!0)),
                (f.uniforms.uClampFrame = u.uClampFrame),
                (f.uniforms.uClampOffset = u.uClampOffset)),
            (f.uniforms.uTransform = qs.toArray(!0)),
            (f.uniforms.uColor = j.shared.setValue(t.tint).premultiply(t.worldAlpha, l).toArray(f.uniforms.uColor)),
            (f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0)),
            (f.uniforms.uSampler = a),
            i.shader.bind(f),
            i.geometry.bind(s),
            (this.state.blendMode = vr(t.blendMode, l)),
            i.state.set(this.state),
            i.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
        }
    }
    (Vn.extension = { name: 'tilingSprite', type: M.RendererPlugin }), U.add(Vn);
    const ji = class
    {
        constructor(e, t, i = null)
        {
            (this.linkedSheets = []),
            (this._texture = e instanceof B ? e : null),
            (this.baseTexture = e instanceof V ? e : this._texture.baseTexture),
            (this.textures = {}),
            (this.animations = {}),
            (this.data = t);
            const s = this.baseTexture.resource;

            (this.resolution = this._updateResolution(i || (s ? s.url : null))),
            (this._frames = this.data.frames),
            (this._frameKeys = Object.keys(this._frames)),
            (this._batchIndex = 0),
            (this._callback = null);
        }
        _updateResolution(e = null)
        {
            const { scale: t } = this.data.meta;
            let i = fe(e, null);

            return i === null && (i = parseFloat(t != null ? t : '1')), i !== 1 && this.baseTexture.setResolution(i), i;
        }
        parse()
        {
            return new Promise((e) =>
            {
                (this._callback = e),
                (this._batchIndex = 0),
                this._frameKeys.length <= ji.BATCH_SIZE
                    ? (this._processFrames(0), this._processAnimations(), this._parseComplete())
                    : this._nextBatch();
            });
        }
        _processFrames(e)
        {
            let t = e;
            const i = ji.BATCH_SIZE;

            for (; t - e < i && t < this._frameKeys.length;)
            {
                const s = this._frameKeys[t];
                const r = this._frames[s];
                const n = r.frame;

                if (n)
                {
                    let o = null;
                    let a = null;
                    const h = r.trimmed !== !1 && r.sourceSize ? r.sourceSize : r.frame;
                    const l = new $(0, 0, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution);

                    r.rotated
                        ? (o = new $(
                            Math.floor(n.x) / this.resolution,
                            Math.floor(n.y) / this.resolution,
                            Math.floor(n.h) / this.resolution,
                            Math.floor(n.w) / this.resolution,
                        ))
                        : (o = new $(
                            Math.floor(n.x) / this.resolution,
                            Math.floor(n.y) / this.resolution,
                            Math.floor(n.w) / this.resolution,
                            Math.floor(n.h) / this.resolution,
                        )),
                    r.trimmed !== !1
                            && r.spriteSourceSize
                            && (a = new $(
                                Math.floor(r.spriteSourceSize.x) / this.resolution,
                                Math.floor(r.spriteSourceSize.y) / this.resolution,
                                Math.floor(n.w) / this.resolution,
                                Math.floor(n.h) / this.resolution,
                            )),
                    (this.textures[s] = new B(this.baseTexture, o, l, a, r.rotated ? 2 : 0, r.anchor, r.borders)),
                    B.addToCache(this.textures[s], s);
                }
                t++;
            }
        }
        _processAnimations()
        {
            const e = this.data.animations || {};

            for (const t in e)
            {
                this.animations[t] = [];
                for (let i = 0; i < e[t].length; i++)
                {
                    const s = e[t][i];

                    this.animations[t].push(this.textures[s]);
                }
            }
        }
        _parseComplete()
        {
            const e = this._callback;

            (this._callback = null), (this._batchIndex = 0), e.call(this, this.textures);
        }
        _nextBatch()
        {
            this._processFrames(this._batchIndex * ji.BATCH_SIZE),
            this._batchIndex++,
            setTimeout(() =>
            {
                this._batchIndex * ji.BATCH_SIZE < this._frameKeys.length
                    ? this._nextBatch()
                    : (this._processAnimations(), this._parseComplete());
            }, 0);
        }
        destroy(e = !1)
        {
            let t;

            for (const i in this.textures) this.textures[i].destroy();
            (this._frames = null),
            (this._frameKeys = null),
            (this.data = null),
            (this.textures = null),
            e && ((t = this._texture) == null || t.destroy(), this.baseTexture.destroy()),
            (this._texture = null),
            (this.baseTexture = null),
            (this.linkedSheets = []);
        }
    };
    const Ks = ji;

    Ks.BATCH_SIZE = 1e3;
    const Gd = ['jpg', 'png', 'jpeg', 'avif', 'webp'];

    function Fh(e, t, i)
    {
        const s = {};

        if (
            (e.forEach((r) =>
            {
                s[r] = t;
            }),
            Object.keys(t.textures).forEach((r) =>
            {
                s[r] = t.textures[r];
            }),
            !i)
        )
        {
            const r = Tt.dirname(e[0]);

            t.linkedSheets.forEach((n, o) =>
            {
                const a = Fh([`${r}/${t.data.meta.related_multi_packs[o]}`], n, !0);

                Object.assign(s, a);
            });
        }

        return s;
    }
    const Nh = {
        extension: M.Asset,
        cache: { test: (e) => e instanceof Ks, getCacheableAssets: (e, t) => Fh(e, t, !1) },
        resolver: {
            test: (e) =>
            {
                const i = e.split('?')[0].split('.');
                const s = i.pop();
                const r = i.pop();

                return s === 'json' && Gd.includes(r);
            },
            parse: (e) =>
            {
                let i; let
                    s;
                const t = e.split('.');

                return {
                    resolution: parseFloat((s = (i = P.RETINA_PREFIX.exec(e)) == null ? void 0 : i[1]) != null ? s : '1'),
                    format: t[t.length - 2],
                    src: e,
                };
            },
        },
        loader: {
            name: 'spritesheetLoader',
            extension: { type: M.LoadParser, priority: Jt.Normal },
            async testParse(e, t)
            {
                return Tt.extname(t.src).toLowerCase() === '.json' && !!e.frames;
            },
            async parse(e, t, i)
            {
                let l; let
                    c;
                let s = Tt.dirname(t.src);

                s && s.lastIndexOf('/') !== s.length - 1 && (s += '/');
                let r = s + e.meta.image;

                r = Ls(r, t.src);
                const o = (await i.load([r]))[r];
                const a = new Ks(o.baseTexture, e, t.src);

                await a.parse();
                const h = (l = e == null ? void 0 : e.meta) == null ? void 0 : l.related_multi_packs;

                if (Array.isArray(h))
                {
                    const u = [];

                    for (const f of h)
                    {
                        if (typeof f !== 'string') continue;
                        let p = s + f;

                        ((c = t.data) != null && c.ignoreMultiPack)
                            || ((p = Ls(p, t.src)), u.push(i.load({ src: p, data: { ignoreMultiPack: !0 } })));
                    }
                    const d = await Promise.all(u);

                    (a.linkedSheets = d),
                    d.forEach((f) =>
                    {
                        f.linkedSheets = [a].concat(a.linkedSheets.filter((p) => p !== f));
                    });
                }

                return a;
            },
            unload(e)
            {
                e.destroy(!0);
            },
        },
    };

    U.add(Nh);
    class Yi
    {
        constructor()
        {
            (this.info = []),
            (this.common = []),
            (this.page = []),
            (this.char = []),
            (this.kerning = []),
            (this.distanceField = []);
        }
    }
    class qi
    {
        static test(t)
        {
            return typeof t === 'string' && t.startsWith('info face=');
        }
        static parse(t)
        {
            const i = t.match(/^[a-z]+\s+.+$/gm);
            const s = { info: [], common: [], page: [], char: [], chars: [], kerning: [], kernings: [], distanceField: [] };

            for (const n in i)
            {
                const o = i[n].match(/^[a-z]+/gm)[0];
                const a = i[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm);
                const h = {};

                for (const l in a)
                {
                    const c = a[l].split('=');
                    const u = c[0];
                    const d = c[1].replace(/"/gm, '');
                    const f = parseFloat(d);
                    const p = isNaN(f) ? d : f;

                    h[u] = p;
                }
                s[o].push(h);
            }
            const r = new Yi();

            return (
                s.info.forEach((n) => r.info.push({ face: n.face, size: parseInt(n.size, 10) })),
                s.common.forEach((n) => r.common.push({ lineHeight: parseInt(n.lineHeight, 10) })),
                s.page.forEach((n) => r.page.push({ id: parseInt(n.id, 10), file: n.file })),
                s.char.forEach((n) =>
                    r.char.push({
                        id: parseInt(n.id, 10),
                        page: parseInt(n.page, 10),
                        x: parseInt(n.x, 10),
                        y: parseInt(n.y, 10),
                        width: parseInt(n.width, 10),
                        height: parseInt(n.height, 10),
                        xoffset: parseInt(n.xoffset, 10),
                        yoffset: parseInt(n.yoffset, 10),
                        xadvance: parseInt(n.xadvance, 10),
                    }),
                ),
                s.kerning.forEach((n) =>
                    r.kerning.push({
                        first: parseInt(n.first, 10),
                        second: parseInt(n.second, 10),
                        amount: parseInt(n.amount, 10),
                    }),
                ),
                s.distanceField.forEach((n) =>
                    r.distanceField.push({ distanceRange: parseInt(n.distanceRange, 10), fieldType: n.fieldType }),
                ),
                r
            );
        }
    }
    class Zs
    {
        static test(t)
        {
            const i = t;

            return (
                'getElementsByTagName' in i
                && i.getElementsByTagName('page').length
                && i.getElementsByTagName('info')[0].getAttribute('face') !== null
            );
        }
        static parse(t)
        {
            const i = new Yi();
            const s = t.getElementsByTagName('info');
            const r = t.getElementsByTagName('common');
            const n = t.getElementsByTagName('page');
            const o = t.getElementsByTagName('char');
            const a = t.getElementsByTagName('kerning');
            const h = t.getElementsByTagName('distanceField');

            for (let l = 0; l < s.length; l++)
            { i.info.push({ face: s[l].getAttribute('face'), size: parseInt(s[l].getAttribute('size'), 10) }); }
            for (let l = 0; l < r.length; l++) i.common.push({ lineHeight: parseInt(r[l].getAttribute('lineHeight'), 10) });
            for (let l = 0; l < n.length; l++)
            { i.page.push({ id: parseInt(n[l].getAttribute('id'), 10) || 0, file: n[l].getAttribute('file') }); }
            for (let l = 0; l < o.length; l++)
            {
                const c = o[l];

                i.char.push({
                    id: parseInt(c.getAttribute('id'), 10),
                    page: parseInt(c.getAttribute('page'), 10) || 0,
                    x: parseInt(c.getAttribute('x'), 10),
                    y: parseInt(c.getAttribute('y'), 10),
                    width: parseInt(c.getAttribute('width'), 10),
                    height: parseInt(c.getAttribute('height'), 10),
                    xoffset: parseInt(c.getAttribute('xoffset'), 10),
                    yoffset: parseInt(c.getAttribute('yoffset'), 10),
                    xadvance: parseInt(c.getAttribute('xadvance'), 10),
                });
            }
            for (let l = 0; l < a.length; l++)
            {
                i.kerning.push({
                    first: parseInt(a[l].getAttribute('first'), 10),
                    second: parseInt(a[l].getAttribute('second'), 10),
                    amount: parseInt(a[l].getAttribute('amount'), 10),
                });
            }
            for (let l = 0; l < h.length; l++)
            {
                i.distanceField.push({
                    fieldType: h[l].getAttribute('fieldType'),
                    distanceRange: parseInt(h[l].getAttribute('distanceRange'), 10),
                });
            }

            return i;
        }
    }
    class Js
    {
        static test(t)
        {
            return typeof t === 'string' && t.includes('<font>') ? Zs.test(P.ADAPTER.parseXML(t)) : !1;
        }
        static parse(t)
        {
            return Zs.parse(P.ADAPTER.parseXML(t));
        }
    }
    const zn = [qi, Zs, Js];

    function Lh(e)
    {
        for (let t = 0; t < zn.length; t++) if (zn[t].test(e)) return zn[t];

        return null;
    }
    function Hd(e, t, i, s, r, n)
    {
        const o = i.fill;

        if (Array.isArray(o))
        {
            if (o.length === 1) return o[0];
        }
        else return o;
        let a;
        const h = i.dropShadow ? i.dropShadowDistance : 0;
        const l = i.padding || 0;
        const c = e.width / s - h - l * 2;
        const u = e.height / s - h - l * 2;
        const d = o.slice();
        const f = i.fillGradientStops.slice();

        if (!f.length)
        {
            const p = d.length + 1;

            for (let _ = 1; _ < p; ++_) f.push(_ / p);
        }
        if ((d.unshift(o[0]), f.unshift(0), d.push(o[o.length - 1]), f.push(1), i.fillGradientType === Vi.LINEAR_VERTICAL))
        {
            a = t.createLinearGradient(c / 2, l, c / 2, u + l);
            let p = 0;
            const g = (n.fontProperties.fontSize + i.strokeThickness) / u;

            for (let v = 0; v < r.length; v++)
            {
                const T = n.lineHeight * v;

                for (let y = 0; y < d.length; y++)
                {
                    let x = 0;

                    typeof f[y] === 'number' ? (x = f[y]) : (x = y / d.length);
                    const A = T / u + x * g;
                    let D = Math.max(p, A);

                    (D = Math.min(D, 1)), a.addColorStop(D, d[y]), (p = D);
                }
            }
        }
        else
        {
            a = t.createLinearGradient(l, u / 2, c + l, u / 2);
            const p = d.length + 1;
            let _ = 1;

            for (let g = 0; g < d.length; g++)
            {
                let v;

                typeof f[g] === 'number' ? (v = f[g]) : (v = _ / p), a.addColorStop(v, d[g]), _++;
            }
        }

        return a;
    }
    function Xd(e, t, i, s, r, n, o)
    {
        const a = i.text;
        const h = i.fontProperties;

        t.translate(s, r), t.scale(n, n);
        const l = o.strokeThickness / 2;
        const c = -(o.strokeThickness / 2);

        if (
            ((t.font = o.toFontString()),
            (t.lineWidth = o.strokeThickness),
            (t.textBaseline = o.textBaseline),
            (t.lineJoin = o.lineJoin),
            (t.miterLimit = o.miterLimit),
            (t.fillStyle = Hd(e, t, o, n, [a], i)),
            (t.strokeStyle = o.stroke),
            o.dropShadow)
        )
        {
            const u = o.dropShadowColor;
            const d = o.dropShadowBlur * n;
            const f = o.dropShadowDistance * n;

            (t.shadowColor = j.shared.setValue(u).setAlpha(o.dropShadowAlpha).toRgbaString()),
            (t.shadowBlur = d),
            (t.shadowOffsetX = Math.cos(o.dropShadowAngle) * f),
            (t.shadowOffsetY = Math.sin(o.dropShadowAngle) * f);
        }
        else (t.shadowColor = 'black'), (t.shadowBlur = 0), (t.shadowOffsetX = 0), (t.shadowOffsetY = 0);
        o.stroke && o.strokeThickness && t.strokeText(a, l, c + i.lineHeight - h.descent),
        o.fill && t.fillText(a, l, c + i.lineHeight - h.descent),
        t.setTransform(1, 0, 0, 1, 0, 0),
        (t.fillStyle = 'rgba(0, 0, 0, 0)');
    }
    function Qs(e)
    {
        return e.codePointAt ? e.codePointAt(0) : e.charCodeAt(0);
    }
    function Oh(e)
    {
        return Array.from ? Array.from(e) : e.split('');
    }
    function Vd(e)
    {
        typeof e === 'string' && (e = [e]);
        const t = [];

        for (let i = 0, s = e.length; i < s; i++)
        {
            const r = e[i];

            if (Array.isArray(r))
            {
                if (r.length !== 2)
                { throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${r.length}.`); }
                const n = r[0].charCodeAt(0);
                const o = r[1].charCodeAt(0);

                if (o < n) throw new Error('[BitmapFont]: Invalid character range.');
                for (let a = n, h = o; a <= h; a++) t.push(String.fromCharCode(a));
            }
            else t.push(...Oh(r));
        }
        if (t.length === 0) throw new Error('[BitmapFont]: Empty set when resolving characters.');

        return t;
    }
    const te = class
    {
        constructor(e, t, i)
        {
            let l; let
                c;
            const [s] = e.info;
            const [r] = e.common;
            const [n] = e.page;
            const [o] = e.distanceField;
            const a = fe(n.file);
            const h = {};

            (this._ownsTextures = i),
            (this.font = s.face),
            (this.size = s.size),
            (this.lineHeight = r.lineHeight / a),
            (this.chars = {}),
            (this.pageTextures = h);
            for (let u = 0; u < e.page.length; u++)
            {
                const { id: d, file: f } = e.page[u];

                (h[d] = t instanceof Array ? t[u] : t[f]),
                (o == null ? void 0 : o.fieldType)
                        && o.fieldType !== 'none'
                        && ((h[d].baseTexture.alphaMode = Nt.NO_PREMULTIPLIED_ALPHA), (h[d].baseTexture.mipmap = Wt.OFF));
            }
            for (let u = 0; u < e.char.length; u++)
            {
                const { id: d, page: f } = e.char[u];
                let { x: p, y: _, width: g, height: v, xoffset: T, yoffset: y, xadvance: x } = e.char[u];

                (p /= a), (_ /= a), (g /= a), (v /= a), (T /= a), (y /= a), (x /= a);
                const A = new $(p + h[f].frame.x / a, _ + h[f].frame.y / a, g, v);

                this.chars[d] = {
                    xOffset: T,
                    yOffset: y,
                    xAdvance: x,
                    kerning: {},
                    texture: new B(h[f].baseTexture, A),
                    page: f,
                };
            }
            for (let u = 0; u < e.kerning.length; u++)
            {
                let { first: d, second: f, amount: p } = e.kerning[u];

                (d /= a), (f /= a), (p /= a), this.chars[f] && (this.chars[f].kerning[d] = p);
            }
            (this.distanceFieldRange = o == null ? void 0 : o.distanceRange),
            (this.distanceFieldType
                    = (c = (l = o == null ? void 0 : o.fieldType) == null ? void 0 : l.toLowerCase()) != null ? c : 'none');
        }
        destroy()
        {
            for (const e in this.chars) this.chars[e].texture.destroy(), (this.chars[e].texture = null);
            for (const e in this.pageTextures)
            { this._ownsTextures && this.pageTextures[e].destroy(!0), (this.pageTextures[e] = null); }
            (this.chars = null), (this.pageTextures = null);
        }
        static install(e, t, i)
        {
            let s;

            if (e instanceof Yi) s = e;
            else
            {
                const n = Lh(e);

                if (!n) throw new Error('Unrecognized data format for font.');
                s = n.parse(e);
            }
            t instanceof B && (t = [t]);
            const r = new te(s, t, i);

            return (te.available[r.font] = r), r;
        }
        static uninstall(e)
        {
            const t = te.available[e];

            if (!t) throw new Error(`No font found named '${e}'`);
            t.destroy(), delete te.available[e];
        }
        static from(e, t, i)
        {
            if (!e) throw new Error('[BitmapFont] Property `name` is required.');
            const D = Object.assign({}, te.defaultOptions, i);
            const { chars: s, padding: r, resolution: n, textureWidth: o, textureHeight: a } = D;
            const h = Wn(D, ['chars', 'padding', 'resolution', 'textureWidth', 'textureHeight']);
            const l = Vd(s);
            const c = t instanceof ae ? t : new ae(t);
            const u = o;
            const d = new Yi();

            (d.info[0] = { face: c.fontFamily, size: c.fontSize }), (d.common[0] = { lineHeight: c.fontSize });
            let f = 0;
            let p = 0;
            let _;
            let g;
            let v;
            let T = 0;
            const y = [];
            const x = [];

            for (let R = 0; R < l.length; R++)
            {
                _
                    || ((_ = P.ADAPTER.createCanvas()),
                    (_.width = o),
                    (_.height = a),
                    (g = _.getContext('2d')),
                    (v = new V(_, Et({ resolution: n }, h))),
                    y.push(v),
                    x.push(new B(v)),
                    d.page.push({ id: x.length - 1, file: '' }));
                const E = l[R];
                const O = yt.measureText(E, c, !1, _);
                const H = O.width;
                const I = Math.ceil(O.height);
                const N = Math.ceil((c.fontStyle === 'italic' ? 2 : 1) * H);

                if (p >= a - I * n)
                {
                    if (p === 0)
                    {
                        throw new Error(
                            `[BitmapFont] textureHeight ${a}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${E}')`,
                        );
                    }
                    --R, (_ = null), (g = null), (v = null), (p = 0), (f = 0), (T = 0);
                    continue;
                }
                if (((T = Math.max(I + O.fontProperties.descent, T)), N * n + f >= u))
                {
                    if (f === 0)
                    {
                        throw new Error(
                            `[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${E}')`,
                        );
                    }
                    --R, (p += T * n), (p = Math.ceil(p)), (f = 0), (T = 0);
                    continue;
                }
                Xd(_, g, O, f, p, n, c);
                const w = Qs(O.text);

                d.char.push({
                    id: w,
                    page: x.length - 1,
                    x: f / n,
                    y: p / n,
                    width: N,
                    height: I,
                    xoffset: 0,
                    yoffset: 0,
                    xadvance: H - (c.dropShadow ? c.dropShadowDistance : 0) - (c.stroke ? c.strokeThickness : 0),
                }),
                (f += (N + 2 * r) * n),
                (f = Math.ceil(f));
            }
            for (let R = 0, E = l.length; R < E; R++)
            {
                const O = l[R];

                for (let H = 0; H < E; H++)
                {
                    const I = l[H];
                    const N = g.measureText(O).width;
                    const w = g.measureText(I).width;
                    const W = g.measureText(O + I).width - (N + w);

                    W && d.kerning.push({ first: Qs(O), second: Qs(I), amount: W });
                }
            }
            const A = new te(d, x, !0);

            return te.available[e] !== void 0 && te.uninstall(e), (te.available[e] = A), A;
        }
    };
    const At = te;

    (At.ALPHA = [['a', 'z'], ['A', 'Z'], ' ']),
    (At.NUMERIC = [['0', '9']]),
    (At.ALPHANUMERIC = [['a', 'z'], ['A', 'Z'], ['0', '9'], ' ']),
    (At.ASCII = [[' ', '~']]),
    (At.defaultOptions = { resolution: 1, textureWidth: 512, textureHeight: 512, padding: 4, chars: te.ALPHANUMERIC }),
    (At.available = {});
    const zd = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`;
    const Wd = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;
    const Uh = [];
    const kh = [];
    const Gh = [];
    const Hh = class extends Ct
    {
        constructor(e, t = {})
        {
            super();
            const {
                align: i,
                tint: s,
                maxWidth: r,
                letterSpacing: n,
                fontName: o,
                fontSize: a,
            } = Object.assign({}, Hh.styleDefaults, t);

            if (!At.available[o]) throw new Error(`Missing BitmapFont "${o}"`);
            (this._activePagesMeshData = []),
            (this._textWidth = 0),
            (this._textHeight = 0),
            (this._align = i),
            (this._tintColor = new j(s)),
            (this._font = void 0),
            (this._fontName = o),
            (this._fontSize = a),
            (this.text = e),
            (this._maxWidth = r),
            (this._maxLineHeight = 0),
            (this._letterSpacing = n),
            (this._anchor = new me(
                () =>
                {
                    this.dirty = !0;
                },
                this,
                0,
                0,
            )),
            (this._roundPixels = P.ROUND_PIXELS),
            (this.dirty = !0),
            (this._resolution = P.RESOLUTION),
            (this._autoResolution = !0),
            (this._textureCache = {});
        }
        updateText()
        {
            let H;
            const e = At.available[this._fontName];
            const t = this.fontSize;
            const i = t / e.size;
            const s = new Y();
            const r = [];
            const n = [];
            const o = [];
            const a
                        = this._text.replace(
                            /(?:\r\n|\r)/g,
                            `
`,
                        ) || ' ';
            const h = Oh(a);
            const l = (this._maxWidth * e.size) / t;
            const c = e.distanceFieldType === 'none' ? Uh : kh;
            let u = null;
            let d = 0;
            let f = 0;
            let p = 0;
            let _ = -1;
            let g = 0;
            let v = 0;
            let T = 0;
            let y = 0;

            for (let I = 0; I < h.length; I++)
            {
                const N = h[I];
                const w = Qs(N);

                if (
                    ((/(?:\s)/).test(N) && ((_ = I), (g = d), y++),
                    N === '\r'
                            || N
                                === `
`)
                )
                {
                    n.push(d),
                    o.push(-1),
                    (f = Math.max(f, d)),
                    ++p,
                    ++v,
                    (s.x = 0),
                    (s.y += e.lineHeight),
                    (u = null),
                    (y = 0);
                    continue;
                }
                const b = e.chars[w];

                if (!b) continue;
                u && b.kerning[u] && (s.x += b.kerning[u]);
                const W = Gh.pop() || { texture: B.EMPTY, line: 0, charCode: 0, prevSpaces: 0, position: new Y() };

                (W.texture = b.texture),
                (W.line = p),
                (W.charCode = w),
                (W.position.x = Math.round(s.x + b.xOffset + this._letterSpacing / 2)),
                (W.position.y = Math.round(s.y + b.yOffset)),
                (W.prevSpaces = y),
                r.push(W),
                (d = W.position.x + Math.max(b.xAdvance - b.xOffset, b.texture.orig.width)),
                (s.x += b.xAdvance + this._letterSpacing),
                (T = Math.max(T, b.yOffset + b.texture.height)),
                (u = w),
                _ !== -1
                            && l > 0
                            && s.x > l
                            && (++v,
                            Ce(r, 1 + _ - v, 1 + I - _),
                            (I = _),
                            (_ = -1),
                            n.push(g),
                            o.push(r.length > 0 ? r[r.length - 1].prevSpaces : 0),
                            (f = Math.max(f, g)),
                            p++,
                            (s.x = 0),
                            (s.y += e.lineHeight),
                            (u = null),
                            (y = 0));
            }
            const x = h[h.length - 1];

            x !== '\r'
                    && x
                        !== `
`
                    && ((/(?:\s)/).test(x) && (d = g), n.push(d), (f = Math.max(f, d)), o.push(-1));
            const A = [];

            for (let I = 0; I <= p; I++)
            {
                let N = 0;

                this._align === 'right'
                    ? (N = f - n[I])
                    : this._align === 'center'
                        ? (N = (f - n[I]) / 2)
                        : this._align === 'justify' && (N = o[I] < 0 ? 0 : (f - n[I]) / o[I]),
                A.push(N);
            }
            const D = r.length;
            const R = {};
            const E = [];
            const O = this._activePagesMeshData;

            c.push(...O);
            for (let I = 0; I < D; I++)
            {
                const N = r[I].texture;
                const w = N.baseTexture.uid;

                if (!R[w])
                {
                    let b = c.pop();

                    if (!b)
                    {
                        const q = new Xi();
                        let F; let
                            Z;

                        e.distanceFieldType === 'none'
                            ? ((F = new ni(B.EMPTY)), (Z = G.NORMAL))
                            : ((F = new ni(B.EMPTY, { program: Ut.from(Wd, zd), uniforms: { uFWidth: 0 } })),
                            (Z = G.NORMAL_NPM));
                        const ht = new He(q, F);

                        (ht.blendMode = Z),
                        (b = {
                            index: 0,
                            indexCount: 0,
                            vertexCount: 0,
                            uvsCount: 0,
                            total: 0,
                            mesh: ht,
                            vertices: null,
                            uvs: null,
                            indices: null,
                        });
                    }
                    (b.index = 0), (b.indexCount = 0), (b.vertexCount = 0), (b.uvsCount = 0), (b.total = 0);
                    const { _textureCache: W } = this;

                    (W[w] = W[w] || new B(N.baseTexture)),
                    (b.mesh.texture = W[w]),
                    (b.mesh.tint = this._tintColor.value),
                    E.push(b),
                    (R[w] = b);
                }
                R[w].total++;
            }
            for (let I = 0; I < O.length; I++) E.includes(O[I]) || this.removeChild(O[I].mesh);
            for (let I = 0; I < E.length; I++) E[I].mesh.parent !== this && this.addChild(E[I].mesh);
            this._activePagesMeshData = E;
            for (const I in R)
            {
                const N = R[I];
                const w = N.total;

                if (
                    !(((H = N.indices) == null ? void 0 : H.length) > 6 * w)
                        || N.vertices.length < He.BATCHABLE_SIZE * 2
                )
                {
                    (N.vertices = new Float32Array(4 * 2 * w)),
                    (N.uvs = new Float32Array(4 * 2 * w)),
                    (N.indices = new Uint16Array(6 * w));
                }
                else
                {
                    const b = N.total;
                    const W = N.vertices;

                    for (let q = b * 4 * 2; q < W.length; q++) W[q] = 0;
                }
                N.mesh.size = 6 * w;
            }
            for (let I = 0; I < D; I++)
            {
                const N = r[I];
                let w = N.position.x + A[N.line] * (this._align === 'justify' ? N.prevSpaces : 1);

                this._roundPixels && (w = Math.round(w));
                const b = w * i;
                const W = N.position.y * i;
                const q = N.texture;
                const F = R[q.baseTexture.uid];
                const Z = q.frame;
                const ht = q._uvs;
                const S = F.index++;

                (F.indices[S * 6 + 0] = 0 + S * 4),
                (F.indices[S * 6 + 1] = 1 + S * 4),
                (F.indices[S * 6 + 2] = 2 + S * 4),
                (F.indices[S * 6 + 3] = 0 + S * 4),
                (F.indices[S * 6 + 4] = 2 + S * 4),
                (F.indices[S * 6 + 5] = 3 + S * 4),
                (F.vertices[S * 8 + 0] = b),
                (F.vertices[S * 8 + 1] = W),
                (F.vertices[S * 8 + 2] = b + Z.width * i),
                (F.vertices[S * 8 + 3] = W),
                (F.vertices[S * 8 + 4] = b + Z.width * i),
                (F.vertices[S * 8 + 5] = W + Z.height * i),
                (F.vertices[S * 8 + 6] = b),
                (F.vertices[S * 8 + 7] = W + Z.height * i),
                (F.uvs[S * 8 + 0] = ht.x0),
                (F.uvs[S * 8 + 1] = ht.y0),
                (F.uvs[S * 8 + 2] = ht.x1),
                (F.uvs[S * 8 + 3] = ht.y1),
                (F.uvs[S * 8 + 4] = ht.x2),
                (F.uvs[S * 8 + 5] = ht.y2),
                (F.uvs[S * 8 + 6] = ht.x3),
                (F.uvs[S * 8 + 7] = ht.y3);
            }
            (this._textWidth = f * i), (this._textHeight = (s.y + e.lineHeight) * i);
            for (const I in R)
            {
                const N = R[I];

                if (this.anchor.x !== 0 || this.anchor.y !== 0)
                {
                    let q = 0;
                    const F = this._textWidth * this.anchor.x;
                    const Z = this._textHeight * this.anchor.y;

                    for (let ht = 0; ht < N.total; ht++)
                    {
                        (N.vertices[q++] -= F),
                        (N.vertices[q++] -= Z),
                        (N.vertices[q++] -= F),
                        (N.vertices[q++] -= Z),
                        (N.vertices[q++] -= F),
                        (N.vertices[q++] -= Z),
                        (N.vertices[q++] -= F),
                        (N.vertices[q++] -= Z);
                    }
                }
                this._maxLineHeight = T * i;
                const w = N.mesh.geometry.getBuffer('aVertexPosition');
                const b = N.mesh.geometry.getBuffer('aTextureCoord');
                const W = N.mesh.geometry.getIndex();

                (w.data = N.vertices), (b.data = N.uvs), (W.data = N.indices), w.update(), b.update(), W.update();
            }
            for (let I = 0; I < r.length; I++) Gh.push(r[I]);
            (this._font = e), (this.dirty = !1);
        }
        updateTransform()
        {
            this.validate(), this.containerUpdateTransform();
        }
        _render(e)
        {
            this._autoResolution
                    && this._resolution !== e.resolution
                    && ((this._resolution = e.resolution), (this.dirty = !0));
            const { distanceFieldRange: t, distanceFieldType: i, size: s } = At.available[this._fontName];

            if (i !== 'none')
            {
                const { a: r, b: n, c: o, d: a } = this.worldTransform;
                const h = Math.sqrt(r * r + n * n);
                const l = Math.sqrt(o * o + a * a);
                const c = (Math.abs(h) + Math.abs(l)) / 2;
                const u = this.fontSize / s;
                const d = e._view.resolution;

                for (const f of this._activePagesMeshData) f.mesh.shader.uniforms.uFWidth = c * t * u * d;
            }
            super._render(e);
        }
        getLocalBounds()
        {
            return this.validate(), super.getLocalBounds();
        }
        validate()
        {
            const e = At.available[this._fontName];

            if (!e) throw new Error(`Missing BitmapFont "${this._fontName}"`);
            this._font !== e && (this.dirty = !0), this.dirty && this.updateText();
        }
        get tint()
        {
            return this._tintColor.value;
        }
        set tint(e)
        {
            if (this.tint !== e)
            {
                this._tintColor.setValue(e);
                for (let t = 0; t < this._activePagesMeshData.length; t++) this._activePagesMeshData[t].mesh.tint = e;
            }
        }
        get align()
        {
            return this._align;
        }
        set align(e)
        {
            this._align !== e && ((this._align = e), (this.dirty = !0));
        }
        get fontName()
        {
            return this._fontName;
        }
        set fontName(e)
        {
            if (!At.available[e]) throw new Error(`Missing BitmapFont "${e}"`);
            this._fontName !== e && ((this._fontName = e), (this.dirty = !0));
        }
        get fontSize()
        {
            let e;

            return (e = this._fontSize) != null ? e : At.available[this._fontName].size;
        }
        set fontSize(e)
        {
            this._fontSize !== e && ((this._fontSize = e), (this.dirty = !0));
        }
        get anchor()
        {
            return this._anchor;
        }
        set anchor(e)
        {
            typeof e === 'number' ? this._anchor.set(e) : this._anchor.copyFrom(e);
        }
        get text()
        {
            return this._text;
        }
        set text(e)
        {
            (e = String(e == null ? '' : e)), this._text !== e && ((this._text = e), (this.dirty = !0));
        }
        get maxWidth()
        {
            return this._maxWidth;
        }
        set maxWidth(e)
        {
            this._maxWidth !== e && ((this._maxWidth = e), (this.dirty = !0));
        }
        get maxLineHeight()
        {
            return this.validate(), this._maxLineHeight;
        }
        get textWidth()
        {
            return this.validate(), this._textWidth;
        }
        get letterSpacing()
        {
            return this._letterSpacing;
        }
        set letterSpacing(e)
        {
            this._letterSpacing !== e && ((this._letterSpacing = e), (this.dirty = !0));
        }
        get roundPixels()
        {
            return this._roundPixels;
        }
        set roundPixels(e)
        {
            e !== this._roundPixels && ((this._roundPixels = e), (this.dirty = !0));
        }
        get textHeight()
        {
            return this.validate(), this._textHeight;
        }
        get resolution()
        {
            return this._resolution;
        }
        set resolution(e)
        {
            (this._autoResolution = !1), this._resolution !== e && ((this._resolution = e), (this.dirty = !0));
        }
        destroy(e)
        {
            const { _textureCache: t } = this;
            const s = At.available[this._fontName].distanceFieldType === 'none' ? Uh : kh;

            s.push(...this._activePagesMeshData);
            for (const r of this._activePagesMeshData) this.removeChild(r.mesh);
            (this._activePagesMeshData = []),
            s
                .filter((r) => t[r.mesh.texture.baseTexture.uid])
                .forEach((r) =>
                {
                    r.mesh.texture = B.EMPTY;
                });
            for (const r in t) t[r].destroy(), delete t[r];
            (this._font = null), (this._tintColor = null), (this._textureCache = null), super.destroy(e);
        }
    };
    const Xh = Hh;

    Xh.styleDefaults = { align: 'left', tint: 16777215, maxWidth: 0, letterSpacing: 0 };
    const $d = ['.xml', '.fnt'];
    const Vh = {
        extension: { type: M.LoadParser, priority: Jt.Normal },
        name: 'loadBitmapFont',
        test(e)
        {
            return $d.includes(Tt.extname(e).toLowerCase());
        },
        async testParse(e)
        {
            return qi.test(e) || Js.test(e);
        },
        async parse(e, t, i)
        {
            const s = qi.test(e) ? qi.parse(e) : Js.parse(e);
            const { src: r } = t;
            const { page: n } = s;
            const o = [];

            for (let l = 0; l < n.length; ++l)
            {
                const c = n[l].file;
                let u = Tt.join(Tt.dirname(r), c);

                (u = Ls(u, r)), o.push(u);
            }
            const a = await i.load(o);
            const h = o.map((l) => a[l]);

            return At.install(s, h, !0);
        },
        async load(e, t)
        {
            return (await P.ADAPTER.fetch(e)).text();
        },
        unload(e)
        {
            e.destroy();
        },
    };

    U.add(Vh);
    const oi = class extends ae
    {
        constructor()
        {
            super(...arguments), (this._fonts = []), (this._overrides = []), (this._stylesheet = ''), (this.fontsDirty = !1);
        }
        static from(e)
        {
            return new oi(Object.keys(oi.defaultOptions).reduce((t, i) => Ji(Et({}, t), { [i]: e[i] }), {}));
        }
        cleanFonts()
        {
            this._fonts.length > 0
                && (this._fonts.forEach((e) =>
                {
                    URL.revokeObjectURL(e.src),
                    e.refs--,
                    e.refs === 0
                            && (e.fontFace && document.fonts.delete(e.fontFace), delete oi.availableFonts[e.originalUrl]);
                }),
                (this.fontFamily = 'Arial'),
                (this._fonts.length = 0),
                this.styleID++,
                (this.fontsDirty = !0));
        }
        loadFont(e, t = {})
        {
            const { availableFonts: i } = oi;

            if (i[e])
            {
                const s = i[e];

                return this._fonts.push(s), s.refs++, this.styleID++, (this.fontsDirty = !0), Promise.resolve();
            }

            return P.ADAPTER.fetch(e)
                .then((s) => s.blob())
                .then(
                    async (s) =>
                        new Promise((r, n) =>
                        {
                            const o = URL.createObjectURL(s);
                            const a = new FileReader();

                            (a.onload = () => r([o, a.result])), (a.onerror = n), a.readAsDataURL(s);
                        }),
                )
                .then(async ([s, r]) =>
                {
                    const n = Object.assign(
                        {
                            family: Tt.basename(e, Tt.extname(e)),
                            weight: 'normal',
                            style: 'normal',
                            src: s,
                            dataSrc: r,
                            refs: 1,
                            originalUrl: e,
                            fontFace: null,
                        },
                        t,
                    );

                    (i[e] = n), this._fonts.push(n), this.styleID++;
                    const o = new FontFace(n.family, `url(${n.src})`, { weight: n.weight, style: n.style });

                    (n.fontFace = o),
                    await o.load(),
                    document.fonts.add(o),
                    await document.fonts.ready,
                    this.styleID++,
                    (this.fontsDirty = !0);
                });
        }
        addOverride(...e)
        {
            const t = e.filter((i) => !this._overrides.includes(i));

            t.length > 0 && (this._overrides.push(...t), this.styleID++);
        }
        removeOverride(...e)
        {
            const t = e.filter((i) => this._overrides.includes(i));

            t.length > 0 && ((this._overrides = this._overrides.filter((i) => !t.includes(i))), this.styleID++);
        }
        toCSS(e)
        {
            return [
                `transform: scale(${e})`,
                'transform-origin: top left',
                'display: inline-block',
                `color: ${this.normalizeColor(this.fill)}`,
                `font-size: ${this.fontSize}px`,
                `font-family: ${this.fontFamily}`,
                `font-weight: ${this.fontWeight}`,
                `font-style: ${this.fontStyle}`,
                `font-variant: ${this.fontVariant}`,
                `letter-spacing: ${this.letterSpacing}px`,
                `text-align: ${this.align}`,
                `padding: ${this.padding}px`,
                `white-space: ${this.whiteSpace}`,
                ...(this.lineHeight ? [`line-height: ${this.lineHeight}px`] : []),
                ...(this.wordWrap
                    ? [`word-wrap: ${this.breakWords ? 'break-all' : 'break-word'}`, `max-width: ${this.wordWrapWidth}px`]
                    : []),
                ...(this.strokeThickness
                    ? [
                        `-webkit-text-stroke-width: ${this.strokeThickness}px`,
                        `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`,
                        `text-stroke-width: ${this.strokeThickness}px`,
                        `text-stroke-color: ${this.normalizeColor(this.stroke)}`,
                        'paint-order: stroke',
                    ]
                    : []),
                ...(this.dropShadow ? [this.dropShadowToCSS()] : []),
                ...this._overrides,
            ].join(';');
        }
        toGlobalCSS()
        {
            return this._fonts.reduce(
                (e, t) => `${e}
            @font-face {
                font-family: "${t.family}";
                src: url('${t.dataSrc}');
                font-weight: ${t.weight};
                font-style: ${t.style};
            }`,
                this._stylesheet,
            );
        }
        get stylesheet()
        {
            return this._stylesheet;
        }
        set stylesheet(e)
        {
            this._stylesheet !== e && ((this._stylesheet = e), this.styleID++);
        }
        normalizeColor(e)
        {
            return Array.isArray(e) && (e = Bo(e)), typeof e === 'number' ? Mo(e) : e;
        }
        dropShadowToCSS()
        {
            let e = this.normalizeColor(this.dropShadowColor);
            const t = this.dropShadowAlpha;
            const i = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance);
            const s = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);

            e.startsWith('#') && t < 1 && (e += ((t * 255) | 0).toString(16).padStart(2, '0'));
            const r = `${i}px ${s}px`;

            return this.dropShadowBlur > 0 ? `text-shadow: ${r} ${this.dropShadowBlur}px ${e}` : `text-shadow: ${r} ${e}`;
        }
        reset()
        {
            Object.assign(this, oi.defaultOptions);
        }
        onBeforeDraw()
        {
            const { fontsDirty: e } = this;

            return (
                (this.fontsDirty = !1),
                this.isSafari && this._fonts.length > 0 && e ? new Promise((t) => setTimeout(t, 100)) : Promise.resolve()
            );
        }
        get isSafari()
        {
            const { userAgent: e } = P.ADAPTER.getNavigator();

            return (/^((?!chrome|android).)*safari/i).test(e);
        }
        set fillGradientStops(e)
        {
            console.warn('[HTMLTextStyle] fillGradientStops is not supported by HTMLText');
        }
        get fillGradientStops()
        {
            return super.fillGradientStops;
        }
        set fillGradientType(e)
        {
            console.warn('[HTMLTextStyle] fillGradientType is not supported by HTMLText');
        }
        get fillGradientType()
        {
            return super.fillGradientType;
        }
        set miterLimit(e)
        {
            console.warn('[HTMLTextStyle] miterLimit is not supported by HTMLText');
        }
        get miterLimit()
        {
            return super.miterLimit;
        }
        set trim(e)
        {
            console.warn('[HTMLTextStyle] trim is not supported by HTMLText');
        }
        get trim()
        {
            return super.trim;
        }
        set textBaseline(e)
        {
            console.warn('[HTMLTextStyle] textBaseline is not supported by HTMLText');
        }
        get textBaseline()
        {
            return super.textBaseline;
        }
        set leading(e)
        {
            console.warn('[HTMLTextStyle] leading is not supported by HTMLText');
        }
        get leading()
        {
            return super.leading;
        }
        set lineJoin(e)
        {
            console.warn('[HTMLTextStyle] lineJoin is not supported by HTMLText');
        }
        get lineJoin()
        {
            return super.lineJoin;
        }
    };
    const ai = oi;

    (ai.availableFonts = {}),
    (ai.defaultOptions = {
        align: 'left',
        breakWords: !1,
        dropShadow: !1,
        dropShadowAlpha: 1,
        dropShadowAngle: Math.PI / 6,
        dropShadowBlur: 0,
        dropShadowColor: 'black',
        dropShadowDistance: 5,
        fill: 'black',
        fontFamily: 'Arial',
        fontSize: 26,
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: 'normal',
        letterSpacing: 0,
        lineHeight: 0,
        padding: 0,
        stroke: 'black',
        strokeThickness: 0,
        whiteSpace: 'normal',
        wordWrap: !1,
        wordWrapWidth: 100,
    });
    const hi = class extends ve
    {
        constructor(e = '', t = {})
        {
            let c;

            super(B.EMPTY),
            (this._text = null),
            (this._style = null),
            (this._autoResolution = !0),
            (this._loading = !1),
            (this.localStyleID = -1),
            (this.dirty = !1),
            (this.ownsStyle = !1);
            const i = new Image();
            const s = B.from(i, { scaleMode: P.SCALE_MODE, resourceOptions: { autoLoad: !1 } });

            (s.orig = new $()), (s.trim = new $()), (this.texture = s);
            const r = 'http://www.w3.org/2000/svg';
            const n = 'http://www.w3.org/1999/xhtml';
            const o = document.createElementNS(r, 'svg');
            const a = document.createElementNS(r, 'foreignObject');
            const h = document.createElementNS(n, 'div');
            const l = document.createElementNS(n, 'style');

            a.setAttribute('width', '10000'),
            a.setAttribute('height', '10000'),
            (a.style.overflow = 'hidden'),
            o.appendChild(a),
            (this.maxWidth = hi.defaultMaxWidth),
            (this.maxHeight = hi.defaultMaxHeight),
            (this._domElement = h),
            (this._styleElement = l),
            (this._svgRoot = o),
            (this._foreignObject = a),
            this._foreignObject.appendChild(l),
            this._foreignObject.appendChild(h),
            (this._image = i),
            (this._loadImage = new Image()),
            (this._autoResolution = hi.defaultAutoResolution),
            (this._resolution = (c = hi.defaultResolution) != null ? c : P.RESOLUTION),
            (this.text = e),
            (this.style = t);
        }
        measureText(e)
        {
            let a; let
                h;
            const {
                text: t,
                style: i,
                resolution: s,
            } = Object.assign({ text: this._text, style: this._style, resolution: this._resolution }, e);

            Object.assign(this._domElement, { innerHTML: t, style: i.toCSS(s) }),
            (this._styleElement.textContent = i.toGlobalCSS()),
            document.body.appendChild(this._svgRoot);
            const r = this._domElement.getBoundingClientRect();

            this._svgRoot.remove();
            const n = Math.min(this.maxWidth, Math.ceil(r.width));
            const o = Math.min(this.maxHeight, Math.ceil(r.height));

            return (
                this._svgRoot.setAttribute('width', n.toString()),
                this._svgRoot.setAttribute('height', o.toString()),
                t !== this._text && (this._domElement.innerHTML = this._text),
                i !== this._style
                    && (Object.assign(this._domElement, { style: (a = this._style) == null ? void 0 : a.toCSS(s) }),
                    (this._styleElement.textContent = (h = this._style) == null ? void 0 : h.toGlobalCSS())),
                { width: n + i.padding * 2, height: o + i.padding * 2 }
            );
        }
        async updateText(e = !0)
        {
            const { style: t, _image: i, _loadImage: s } = this;

            if ((this.localStyleID !== t.styleID && ((this.dirty = !0), (this.localStyleID = t.styleID)), !this.dirty && e))
            { return; }
            const { width: r, height: n } = this.measureText();

            (i.width = s.width = Math.ceil(Math.max(1, r))),
            (i.height = s.height = Math.ceil(Math.max(1, n))),
            this._loading
                    || ((this._loading = !0),
                    await new Promise((o) =>
                    {
                        s.onload = async () =>
                        {
                            await t.onBeforeDraw(),
                            (this._loading = !1),
                            (i.src = s.src),
                            (s.onload = null),
                            (s.src = ''),
                            this.updateTexture(),
                            o();
                        };
                        const a = new XMLSerializer().serializeToString(this._svgRoot);

                        s.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(a)}`;
                    }));
        }
        get source()
        {
            return this._image;
        }
        updateTexture()
        {
            const { style: e, texture: t, _image: i, resolution: s } = this;
            const { padding: r } = e;
            const { baseTexture: n } = t;

            (t.trim.width = t._frame.width = i.width / s),
            (t.trim.height = t._frame.height = i.height / s),
            (t.trim.x = -r),
            (t.trim.y = -r),
            (t.orig.width = t._frame.width - r * 2),
            (t.orig.height = t._frame.height - r * 2),
            this._onTextureUpdate(),
            n.setRealSize(i.width, i.height, s),
            (this.dirty = !1);
        }
        _render(e)
        {
            this._autoResolution
                && this._resolution !== e.resolution
                && ((this._resolution = e.resolution), (this.dirty = !0)),
            this.updateText(!0),
            super._render(e);
        }
        _renderCanvas(e)
        {
            this._autoResolution
                && this._resolution !== e.resolution
                && ((this._resolution = e.resolution), (this.dirty = !0)),
            this.updateText(!0),
            super._renderCanvas(e);
        }
        getLocalBounds(e)
        {
            return this.updateText(!0), super.getLocalBounds(e);
        }
        _calculateBounds()
        {
            this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData);
        }
        _onStyleChange()
        {
            this.dirty = !0;
        }
        destroy(e)
        {
            let i; let s; let r; let n; let
                o;

            typeof e === 'boolean' && (e = { children: e }),
            (e = Object.assign({}, hi.defaultDestroyOptions, e)),
            super.destroy(e);
            const t = null;

            this.ownsStyle && ((i = this._style) == null || i.cleanFonts()),
            (this._style = t),
            (s = this._svgRoot) == null || s.remove(),
            (this._svgRoot = t),
            (r = this._domElement) == null || r.remove(),
            (this._domElement = t),
            (n = this._foreignObject) == null || n.remove(),
            (this._foreignObject = t),
            (o = this._styleElement) == null || o.remove(),
            (this._styleElement = t),
            (this._loadImage.src = ''),
            (this._loadImage.onload = null),
            (this._loadImage = t),
            (this._image.src = ''),
            (this._image = t);
        }
        get width()
        {
            return this.updateText(!0), (Math.abs(this.scale.x) * this._image.width) / this.resolution;
        }
        set width(e)
        {
            this.updateText(!0);
            const t = de(this.scale.x) || 1;

            (this.scale.x = (t * e) / this._image.width / this.resolution), (this._width = e);
        }
        get height()
        {
            return this.updateText(!0), (Math.abs(this.scale.y) * this._image.height) / this.resolution;
        }
        set height(e)
        {
            this.updateText(!0);
            const t = de(this.scale.y) || 1;

            (this.scale.y = (t * e) / this._image.height / this.resolution), (this._height = e);
        }
        get style()
        {
            return this._style;
        }
        set style(e)
        {
            this._style !== e
                && ((e = e || {}),
                e instanceof ai
                    ? ((this.ownsStyle = !1), (this._style = e))
                    : e instanceof ae
                        ? (console.warn('[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle'),
                        (this.ownsStyle = !0),
                        (this._style = ai.from(e)))
                        : ((this.ownsStyle = !0), (this._style = new ai(e))),
                (this.localStyleID = -1),
                (this.dirty = !0));
        }
        get text()
        {
            return this._text;
        }
        set text(e)
        {
            (e = String(e === '' || e === null || e === void 0 ? ' ' : e)),
            (e = this.sanitiseText(e)),
            this._text !== e && ((this._text = e), (this.dirty = !0));
        }
        get resolution()
        {
            return this._resolution;
        }
        set resolution(e)
        {
            (this._autoResolution = !1), this._resolution !== e && ((this._resolution = e), (this.dirty = !0));
        }
        sanitiseText(e)
        {
            return e
                .replace(/<br>/gi, '<br/>')
                .replace(/<hr>/gi, '<hr/>')
                .replace(/&nbsp;/gi, '&#160;');
        }
    };
    const Ki = hi;

    return (
        (Ki.defaultDestroyOptions = { texture: !0, children: !1, baseTexture: !0 }),
        (Ki.defaultMaxWidth = 2024),
        (Ki.defaultMaxHeight = 2024),
        (Ki.defaultAutoResolution = !0),
        (m.ALPHA_MODES = Nt),
        (m.AbstractMultiResource = dn),
        (m.AccessibilityManager = vn),
        (m.AlphaFilter = Pa),
        (m.AnimatedSprite = Ys),
        (m.Application = Tn),
        (m.ArrayResource = Aa),
        (m.Assets = Ni),
        (m.AssetsClass = Ja),
        (m.Attribute = gi),
        (m.BLEND_MODES = G),
        (m.BUFFER_BITS = Rt),
        (m.BUFFER_TYPE = jt),
        (m.BackgroundSystem = Ei),
        (m.BaseImageResource = _e),
        (m.BasePrepare = Wi),
        (m.BaseRenderTexture = Lr),
        (m.BaseTexture = V),
        (m.BatchDrawCall = fs),
        (m.BatchGeometry = Br),
        (m.BatchRenderer = Gt),
        (m.BatchShaderGenerator = ra),
        (m.BatchSystem = Nr),
        (m.BatchTextureArray = bs),
        (m.BitmapFont = At),
        (m.BitmapFontData = Yi),
        (m.BitmapText = Xh),
        (m.BlobResource = ah),
        (m.BlurFilter = Ma),
        (m.BlurFilterPass = Ds),
        (m.Bounds = Ii),
        (m.BrowserAdapter = jn),
        (m.Buffer = at),
        (m.BufferResource = Ye),
        (m.BufferSystem = ln),
        (m.CLEAR_MODES = $t),
        (m.COLOR_MASK_BITS = $n),
        (m.Cache = ii),
        (m.CanvasResource = Ra),
        (m.Circle = ms),
        (m.Color = j),
        (m.ColorMatrixFilter = Fs),
        (m.CompressedTextureResource = Ee),
        (m.Container = Ct),
        (m.ContextSystem = wi),
        (m.CountLimiter = Ph),
        (m.CubeResource = fn),
        (m.DEG_TO_RAD = Wo),
        (m.DRAW_MODES = zt),
        (m.DisplacementFilter = Ba),
        (m.DisplayObject = st),
        (m.ENV = et),
        (m.Ellipse = _s),
        (m.EventBoundary = Na),
        (m.EventSystem = ti),
        (m.ExtensionType = M),
        (m.Extract = In),
        (m.FORMATS = C),
        (m.FORMATS_TO_COMPONENTS = uh),
        (m.FXAAFilter = Da),
        (m.FederatedDisplayObject = Oa),
        (m.FederatedEvent = Qe),
        (m.FederatedMouseEvent = Mi),
        (m.FederatedPointerEvent = Xt),
        (m.FederatedWheelEvent = ke),
        (m.FillStyle = Gi),
        (m.Filter = gt),
        (m.FilterState = ha),
        (m.FilterSystem = Xr),
        (m.Framebuffer = Es),
        (m.FramebufferSystem = Vr),
        (m.GC_MODES = ts),
        (m.GLFramebuffer = la),
        (m.GLProgram = _a),
        (m.GLTexture = Ps),
        (m.GRAPHICS_CURVES = ud),
        (m.GenerateTextureSystem = Zr),
        (m.Geometry = pe),
        (m.GeometrySystem = Wr),
        (m.Graphics = Hi),
        (m.GraphicsData = ki),
        (m.GraphicsGeometry = Fn),
        (m.HTMLText = Ki),
        (m.HTMLTextStyle = ai),
        (m.IGLUniformData = Mc),
        (m.INSTALLED = ds),
        (m.INTERNAL_FORMATS = It),
        (m.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL = Li),
        (m.ImageBitmapResource = Oe),
        (m.ImageResource = Or),
        (m.LINE_CAP = we),
        (m.LINE_JOIN = Vt),
        (m.LineStyle = Vs),
        (m.LoaderParserPriority = Jt),
        (m.MASK_TYPES = ct),
        (m.MIPMAP_MODES = Wt),
        (m.MSAA_QUALITY = nt),
        (m.MaskData = da),
        (m.MaskSystem = $r),
        (m.Matrix = tt),
        (m.Mesh = He),
        (m.MeshBatchUvs = Eh),
        (m.MeshGeometry = Xi),
        (m.MeshMaterial = ni),
        (m.MultisampleSystem = hn),
        (m.NineSlicePlane = gd),
        (m.NoiseFilter = Fa),
        (m.ObjectRenderer = Ti),
        (m.ObjectRendererSystem = cn),
        (m.ObservablePoint = me),
        (m.PI_2 = yi),
        (m.PRECISION = Pt),
        (m.ParticleContainer = xd),
        (m.ParticleRenderer = On),
        (m.PlaneGeometry = Ah),
        (m.PluginSystem = qr),
        (m.Point = Y),
        (m.Polygon = Ie),
        (m.Prepare = Hn),
        (m.Program = Ut),
        (m.ProjectionSystem = Kr),
        (m.Quad = aa),
        (m.QuadUv = Gr),
        (m.RAD_TO_DEG = zo),
        (m.RENDERER_TYPE = pt),
        (m.Rectangle = $),
        (m.RenderTexture = ge),
        (m.RenderTexturePool = kr),
        (m.RenderTextureSystem = Jr),
        (m.Renderer = Le),
        (m.ResizePlugin = bn),
        (m.Resource = je),
        (m.RopeGeometry = Rh),
        (m.RoundedRectangle = gs),
        (m.Runner = Bt),
        (m.SAMPLER_TYPES = Qi),
        (m.SCALE_MODES = ee),
        (m.SHAPES = _t),
        (m.SVGResource = Je),
        (m.ScissorSystem = jr),
        (m.Shader = Kt),
        (m.ShaderSystem = Qr),
        (m.SimpleMesh = yd),
        (m.SimplePlane = Ch),
        (m.SimpleRope = vd),
        (m.Sprite = ve),
        (m.SpriteMaskFilter = ua),
        (m.Spritesheet = Ks),
        (m.StartupSystem = Ai),
        (m.State = ne),
        (m.StateSystem = en),
        (m.StencilSystem = Yr),
        (m.SystemManager = ba),
        (m.TARGETS = Ae),
        (m.TEXT_GRADIENT = Vi),
        (m.TYPES = k),
        (m.TYPES_TO_BYTES_PER_COMPONENT = Rn),
        (m.TYPES_TO_BYTES_PER_PIXEL = dh),
        (m.TemporaryDisplayObject = Ca),
        (m.Text = js),
        (m.TextFormat = qi),
        (m.TextMetrics = yt),
        (m.TextStyle = ae),
        (m.Texture = B),
        (m.TextureGCSystem = Ht),
        (m.TextureMatrix = As),
        (m.TextureSystem = sn),
        (m.TextureUvs = Ur),
        (m.Ticker = lt),
        (m.TickerPlugin = on),
        (m.TilingSprite = Xn),
        (m.TilingSpriteRenderer = Vn),
        (m.TimeLimiter = Nd),
        (m.Transform = vi),
        (m.TransformFeedback = Yc),
        (m.TransformFeedbackSystem = rn),
        (m.UPDATE_PRIORITY = ye),
        (m.UniformGroup = kt),
        (m.VERSION = qc),
        (m.VideoResource = Bs),
        (m.ViewSystem = Ri),
        (m.ViewableBuffer = us),
        (m.WRAP_MODES = ie),
        (m.XMLFormat = Zs),
        (m.XMLStringFormat = Js),
        (m.accessibleTarget = Ua),
        (m.autoDetectFormat = Lh),
        (m.autoDetectRenderer = wa),
        (m.autoDetectResource = Mr),
        (m.cacheTextureArray = Qa),
        (m.checkDataUrl = ei),
        (m.checkExtension = be),
        (m.checkMaxIfStatementsInShader = Xo),
        (m.convertToList = oe),
        (m.copySearchParams = Ls),
        (m.createStringVariations = Va),
        (m.createTexture = Di),
        (m.createUBOElements = va),
        (m.curves = Se),
        (m.defaultFilterVertex = an),
        (m.defaultVertex = Sa),
        (m.detectAvif = th),
        (m.detectCompressedTextures = oh),
        (m.detectDefaults = sh),
        (m.detectWebp = eh),
        (m.extensions = U),
        (m.filters = _n),
        (m.generateProgram = ga),
        (m.generateUniformBufferSync = Ta),
        (m.getFontFamilyName = $a),
        (m.getTestContext = Zo),
        (m.getUBOData = xa),
        (m.graphicsUtils = pd),
        (m.groupD8 = it),
        (m.isMobile = Yt),
        (m.isSingleItem = Bi),
        (m.loadBitmapFont = Vh),
        (m.loadDDS = ph),
        (m.loadImageBitmap = Ka),
        (m.loadJson = za),
        (m.loadKTX = mh),
        (m.loadSVG = Za),
        (m.loadTextures = Fi),
        (m.loadTxt = Wa),
        (m.loadWebFont = ja),
        (m.parseDDS = lh),
        (m.parseKTX = fh),
        (m.resolveCompressedTextureUrl = _h),
        (m.resolveTextureUrl = rh),
        (m.settings = P),
        (m.spritesheetAsset = Nh),
        (m.uniformParsers = Fe),
        (m.unsafeEvalSupported = sa),
        (m.utils = tc),
        Object.defineProperty(m, '__esModule', { value: !0 }),
        m
    );
})({});
// # sourceMappingURL=pixi.min.js.map
