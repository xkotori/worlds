(function() {
    function aa(a) {
        var b = 0;
        return function() {
            if (b < a.length) {
                return {
                    done: false,
                    value: a[b++]
                };
            } else {
                return {
                    done: true
                };
            }
        };
    }

    function ba(a) {
        var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
        if (b) {
            return b.call(a);
        } else {
            return {
                next: aa(a)
            };
        }
    }

    function da(a, b) {
        if (b) {
            var e = d;
            a = a.split(".");
            for (var f = 0; f < a.length - 1; f++) {
                var g = a[f];
                if (!(g in e)) {
                    e[g] = {};
                }
                e = e[g];
            }
            a = a[a.length - 1];
            f = e[a];
            b = b(f);
            if (b != f && b != null) {
                ca(e, a, {
                    configurable: true,
                    writable: true,
                    value: b
                });
            }
        }
    }

    function ea() {
        ea = function() {};
        if (!d.Symbol) {
            d.Symbol = ja;
        }
    }

    function h() {
        ea();
        var a = d.Symbol.iterator;
        if (!a) {
            a = d.Symbol.iterator = d.Symbol("iterator");
        }
        if (typeof Array.prototype[a] != "function") {
            ca(Array.prototype, a, {
                configurable: true,
                writable: true,
                value: function() {
                    return ka(aa(this));
                }
            });
        }
        h = function() {};
    }

    function ka(a) {
        h();
        a = {
            next: a
        };
        a[d.Symbol.iterator] = function() {
            return this;
        };
        return a;
    }

    function m() {
        this.Fe = false;
        this.bd = null;
        this.eg = void 0;
        this.Bc = 1;
        this.Ci = this.vf = 0;
        this.Od = null;
    }

    function n(a) {
        if (a.Fe) {
            throw new TypeError("Generator is already running");
        }
        a.Fe = true;
    }

    function q(a, b, e) {
        a.Bc = e;
        return {
            value: b
        };
    }

    function la(a) {
        a.Bc = 7;
        a.vf = 0;
    }

    function ma(a) {
        a.vf = 0;
        a.Od = null;
    }

    function r(a) {
        this.na = new m;
        this.Bn = a;
    }

    function na(a, b) {
        n(a.na);
        var e = a.na.bd;
        if (e) {
            return t(a, "return" in e ? e.return : function(a) {
                return {
                    value: a,
                    done: true
                };
            }, b, a.na.return);
        }
        a.na.return(b);
        return w(a);
    }

    function t(a, b, e, f) {
        try {
            var g = b.call(a.na.bd, e);
            if (!(g instanceof Object)) {
                throw new TypeError("Iterator result " + g + " is not an object");
            }
            if (!g.done) {
                a.na.Fe = false;
                return g;
            }
            var l = g.value;
        } catch (k) {
            a.na.bd = null;
            a.na.Xe(k);
            return w(a);
        }
        a.na.bd = null;
        f.call(a.na, l);
        return w(a);
    }

    function w(a) {
        while (a.na.Bc) {
            try {
                var b = a.Bn(a.na);
                if (b) {
                    a.na.Fe = false;
                    return {
                        value: b.value,
                        done: false
                    };
                }
            } catch (e) {
                a.na.eg = void 0;
                a.na.Xe(e);
            }
        }
        a.na.Fe = false;
        if (a.na.Od) {
            b = a.na.Od;
            a.na.Od = null;
            if (b.Jl) {
                throw b.kl;
            }
            return {
                value: b.return,
                done: true
            };
        }
        return {
            value: void 0,
            done: true
        };
    }

    function oa(a) {
        this.next = function(b) {
            return a.Ie(b);
        };
        this.throw = function(b) {
            return a.Xe(b);
        };
        this.return = function(b) {
            return na(a, b);
        };
        h();
        this[Symbol.iterator] = function() {
            return this;
        };
    }

    function pa(a) {
        function b(b) {
            return a.next(b);
        }

        function e(b) {
            return a.throw(b);
        }
        new Promise(function(f, g) {
            function l(a) {
                if (a.done) {
                    f(a.value);
                } else {
                    Promise.resolve(a.value).then(b, e).then(l, g);
                }
            }
            l(a.next());
        });
    }

    function Q(a, b) {
        if (!a) {
            throw Error("Failed to create player.");
        }
        if (this.Zk() === false) {
            throw Error("Domain " + this.Wd() + " is not supported.");
        }
        window.focus();
        this.Lk = "2.0.21101101";
        this.c = "cda.Player";
        this.fd = this.ne = this.ki = this.oi = -1;
        this.me = this.hg = false;
        this.hf = 0;
        this.ff = this.fi = this.kg = this.li = this.jf = false;
        this.kb = 0;
        this.Nh = this.Ld = false;
        this.options = a;
        this.element = document.getElementById(this.Xa(this.options, "id"));
        this.C = new Ca;
        this.storage = new Da;
        this.v = this.view = new Ea(this);
        this.view.gl(this.element);
        this.view.Qn();
        this.Ub = null;
        this.state = Fa;
        this.event = new R;
        this.h = new Ga;
        this.Y = new Ha(this);
        this.video = this.view.video;
        this.T = this.view.T;
        this.contextMenu = this.view.contextMenu;
        this.V = null;
        this.Sd = this.Td = -1;
        this.Oa = null;
        this.yd = true;
        this.bc = this.Zg = false;
        this.Ka = null;
        this.$g = 7;
        this.Nf = "204px";
        this.sc = false;
        this.xb = null;
        this.Zd = false;
        this.s = this.wc = null;
        this.K = false;
        this.xh = this.duration = this.currentTime = -1;
        this.L = false;
        this.id = null;
        this.loop = this.ended = this.autoplay = false;
        this.Kf = this.Lf = this.Pb = this.ud = this.vd = this.Db = this.Sc = this.ea = this.Fh = this.src = null;
        this.Wg = -1;
        this.Rc = this.Xg = false;
        this.o = null;
        this.wf = this.Vd = this.zg = this.Ud = this.Pc = this.Bi = this.yg = false;
        this.nd = null;
        this.Mh = this.Ag = false;
        this.da = null;
        this.O = this.Yf = false;
        this.ja = null;
        this.$e = false;
        this.Jd = null;
        this.Hh = this.Ze = false;
        this.P = null;
        this.Vj = false;
        this.Uf = this.Qa = -1;
        this.b = null;
        this.qf = [];
        this.ti = false;
        this.i = {};
        this.fa = false;
        this.ca = "play playing pause seeking seeked canplay canplaythrough loadstart loadeddata loadedmetadata error abort stalled suspend volumechange progress durationchange ratechange timeupdate waiting contextmenu click ended".split(" ");
        this.updating = false;
        this.test = 0;
        this.$c = null;
        this.sb = this.disabled = this.Xj = this.Sb = this.$a = this.pa = this.Rb = false;
        this.xe = null;
        this.ha = -1;
        this.ce = this.yi = false;
        this.mf = -1;
        this.poster = {
            yo: "//static.cda.pl/v001/img/mobile/poster16x9.png"
        };
        this.volume = -1;
        this.rh = this.ni = this.Ng = this.Yg = this.Na = this.ac = this.Ab = this.Sg = false;
        this.fullScreen = new Ia(this.view, this.C.bind(this, this.fm), this.C.bind(this, this.gm), this);
        window.onmessage = this.C.bind(this, this.ih);
        this.cj();
        this.Sa(this.state.fb);
        this.ej();
        if (this.V == null || this.src || this.ea) {
            this.jc();
        } else {
            try {
                var e = this;
                window[this.V.client].videoGetLink(this.f.id, this.f.quality, this.f.ts, this.f.hash, {
                    success: function(a) {
                        this.log(this.f);
                        this.log(a.resp);
                        if (a.status == "ok" && a.resp != null) {
                            e.src = a.resp;
                        }
                        e.jc();
                    },
                    error: function() {
                        e.jc();
                    }
                });
            } catch (f) {
                this.jc();
            }
        }
        e = this;
        new MutationObserver(function(a) {
            a.forEach(function(a) {
                if (a.type == "attributes" && a.attributeName == "player_data") {
                    a = JSON.parse(b.getAttribute("player_data"));
                    e.vk(a);
                }
            });
        }).observe(b, {
            attributes: true
        });
        try {
            this.ao();
        } catch (f) {}
    }

    function Ea(a) {
        if (!a) {
            throw new TypeError("playerObject is null or empty.");
        }
        this.a = a;
        this.C = a.C;
    }

    function Ca() {}

    function V() {}

    function Da() {
        this.Wn();
    }

    function S(a, b, e) {
        if (a == "undefined" || a == null || e === null) {
            return false;
        }
        this.c = "cda.Player.Controls";
        this.T = a;
        this.a = b;
        this.sc = e;
        this.view = b.view;
        this.C = b.C;
        this.wb = this.view.j(".pb-play");
        this.U = this.view.j(".pb-play-ico");
        this.ba = this.view.j(".pb-loader-ico");
        this.za = this.view.j(".pb-progress-time");
        this.ob = this.view.j(".pb-progress-bar-time");
        this.Jb = this.view.j(".pb-progress-bar-area");
        this.sh = this.view.j(".pb-bar");
        this.tg = this.view.j(".pb-progress-time-progress");
        this.currentTime = this.view.j(".pb-actual-time");
        this.Bg = this.view.j(".pb-max-time");
        this.fullScreen = this.view.j(".pb-fullscreen");
        this.Gc = this.view.j(".pb-volume-mute");
        this.tb = this.view.j(".pb-progress-bar-volume");
        this.Oh = this.view.j(".pb-volume-max");
        this.xc = this.view.j(".pb-progress-bar-volume-area");
        this.controls = this.view.j(".button-players");
        this.Tb = this.view.j(".pb-video-player-wrap");
        this.oa = this.view.j(".pb-player-html");
        this.gk = this.view.j(".pb-settings-click");
        this.view.j(".pb-settings-menu");
        this.view.j(".pb-fl-player-wrap");
        this.view.j(".pb-time-tv-bar");
        this.ie = this.view.j(".pb-time-tv-info-live");
        this.Kh = this.view.j(".pb-actual-time-tv-pos");
        this.Lh = this.view.j(".pb-actual-time-tv");
        this.Ih = this.view.j(".pb-max-time-tv-pos");
        this.Jh = this.view.j(".pb-max-time-tv");
        this.rk = this.view.j(".pb-progress-bar-time-tv-pos");
        this.sk = this.view.j(".pb-progress-bar-time-tv");
        this.tk = this.view.j(".pb-progress-time-tv-pos-progress");
        this.view.j(".pb-info-tvoff");
        this.sa = this.view.j(".pb-tv-list-g");
        this.La = 0;
        this.ag = false;
        this.Ta = null;
        this.ab = this.Bb = this.Kb = this.bj = this.aj = -1;
        this.Fc = 70;
        this.Ge = this.Ca = false;
        this.sd = true;
        this.i = {};
        this.Va = null;
        this.Ab = this.gg = this.Hc = this.gc = false;
        this.zb = this.Wb = null;
        this.Gb = 0;
        this.event = null;
        this.Ja = "click timeupdate loadeddata loadedmetadata progress waiting play pause".split(" ");
        if (typeof R === "function") {
            this.event = new R;
        }
        if (this.T.getAttribute("tabindex") == null) {
            this.T.setAttribute("tabindex", "1");
        }
        try {
            var f = this.a.Cf();
            if (f != 0 && f.hasOwnProperty("volume")) {
                this.J(f.volume);
            } else if (this.a.qd("cda.player.volume")) {
                this.J(this.a.Yb("cda.player.volume"));
            } else {
                this.J(this.Fc);
            }
        } catch (k) {
            this.J(this.Fc);
        }
        if (this.a.Yg || this.a.ac) {
            this.J(0);
        }
        if (!this.a.O && this.a.Vj && this.a.f.qualities) {
            e = b = a = "";
            for (var g in this.a.f.qualities) {
                if (this.a.f.quality == this.a.f.qualities[g]) {
                    b = g;
                    e = "pb-active";
                } else {
                    e = "";
                }
                a += '<li data-quality="' + g + '" data-value="' + this.a.f.qualities[g] + '" class="settings-quality ' + e + '"><a><span class="pb-radio"><span class="pb-radio-btn"></span></span>' + g + "</a></li>";
            }
            this.view.ua.querySelector("ul").Ba(a);
            this.view.Wj.Ba(b);
        }
        if (this.a.O && this.a.ja) {
            if (this.Ta != null) {
                window.clearInterval(this.Ta);
                this.Ta = null;
            }
            var l = this;
            this.Ta = window.setInterval(function() {
                l.af(l.a.ja.program.start_time_ts, l.a.ja.program.start_time_format, l.a.ja.program.end_time_ts, l.a.ja.program.end_time_format);
            }, 100);
        }
        if (this.a.O && this.a.ka) {
            g = "";
            for (a = 0; a < this.a.ka.length; a++) {
                g += '<span class="pb-li-canal-logo" data-url="' + this.a.ka[a].url + '" data-logo="' + this.a.ka[a].logo + '" data-title="' + this.a.ka[a].title + '"><span class="pb-li-canal-g-title-logo"><img class="pb-li-canal-g-title-logo-img" src="' + this.a.ka[a].logo + '"><span class="pb-loading-tv-logo"></span></span></span>';
            }
            this.sa.querySelector(".pb-tv-canals-scroll-g").innerHTML = g + '<span class="pb-li-canal-logo-last"></span>';
            this.Tg = false;
            this.Pa = window.$(".pb-tv-canals-scroll-g").first();
            this.Zf = this.Vg = 0;
            this.Uj = 1;
            this.Gh = false;
            this.Jn = .35;
            this.gj = 1;
            l = this;
            g = this.sa.querySelectorAll(".pb-li-canal-logo");
            Array.prototype.slice.call(g).forEach(function(a, b) {
                return a.addEventListener("click", function() {
                    a.w("channel-active");
                    l.La = b;
                    if (l.a.controls.Ca) {
                        l.sa.show();
                        l.dc();
                    }
                    l.Kg();
                    a.querySelector(".pb-loading-tv-logo").w("pb-loading-tv-logo-show");
                    var e = 0;
                    if (l.Tg) {
                        e = "touch";
                    }
                    if (e) {
                        l.Pa.addClass("pb-smooth-scroll");
                    } else {
                        l.Pa.removeClass("pb-smooth-scroll");
                    }
                    l.Ye(l.Pa, 0, a);
                    l.Tg = false;
                    l.Xc();
                    e = a.getAttribute("data-url");
                    var f = a.getAttribute("data-logo");
                    var g = a.getAttribute("data-title");
                    window.tvChangeChannel(e, g, f, true);
                });
            });
            Array.prototype.slice.call(g).forEach(function(a) {
                return a.querySelector(".pb-li-canal-g-title-logo").addEventListener("touchstart", function() {
                    l.Tg = true;
                });
            });
            Array.prototype.slice.call(g).forEach(function(a, b) {
                if (a.getAttribute("data-url") == l.a.ja.url) {
                    a.w("channel-active");
                    l.La = b;
                    if (0 < b) {
                        l.ag = true;
                    }
                    l.Xc();
                }
            });
            this.Pa.bind("mousewheel, wheel", function(a, b, e, f) {
                l.Pa.removeClass("pb-smooth-scroll");
                f = Math.sign(a.originalEvent.deltaY);
                l.Ye(window.$(this), f, 1);
                a.preventDefault();
            });
            this.Pa.on("touchstart", function() {
                l.Pa.removeClass("pb-smooth-scroll");
                l.Gh = true;
            });
            this.Pa[0].addEventListener("touchend", function() {
                l.Gh = false;
                l.qk();
            });
            this.uk();
            window.setInterval(function() {
                l.uk();
            }, 6e4);
        }
        this.Ae();
    }

    function R() {}

    function T(a, b, e, f) {
        if (typeof a === "undefined" || a === null) {
            return false;
        }
        if (typeof a.addEventListener === "function") {
            a.addEventListener(b, a = function(a) {
                e.call(f, a);
            }, false);
            return a;
        }
        if (typeof a.attachEvent === "function") {
            a.attachEvent("on" + b, a = function(a) {
                e.call(f, a);
            }, false);
            return a;
        }
    }

    function U(a, b, e) {
        if (typeof a !== "undefined" && a !== null) {
            if (typeof a.removeEventListener === "function") {
                a.removeEventListener(b, e, false);
            }
            if (typeof a.detachEvent === "function") {
                a.detachEvent("on" + b, e, false);
            }
        }
    }

    function Ia(a, b, e, f) {
        if (0 < arguments.length) {
            this.view = a;
            this.Wk = b;
            this.jl = e;
            this.a = f;
        } else {
            this.view = null;
        }
        this.ca = {
            il: "requestFullscreen requestFullScreen mozRequestFullScreen webkitRequestFullscreen  webkitEnterFullscreen msRequestFullscreen".split(" "),
            Lb: "exitFullscreen exitFullScreen cancelFullscreen mozCancelFullScreen webkitCancelFullscreen webkitExitFullscreen msExitFullscreen".split(" "),
            enabled: ["fullscreenEnabled", "fullScreenEnabled", "mozFullScreenEnabled", "webkitFullscreenEnabled", "msFullscreenEnabled"],
            element: "fullscreenElement fullScreenElement mozFullScreenElement webkitFullscreenElement webkitCurrentFullScreenElement msFullscreenElement".split(" "),
            yc: ["fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "MSFullscreenChange"],
            error: ["fullscreenerror", "mozfullscreenerror", "webkitfullscreenerror", "MSFullscreenError"],
            is: "fullscreen fullScreen webkitIsFullScreen webkitIsFullscreen mozFullScreen msFullscreenElement".split(" "),
            xl: ["webkitbeginfullscreen", "webkitendfullscreen"]
        };
        this.V = null;
        this.sf = {
            webkit: {
                is: "webkitIsFullScreen",
                enabled: "webkitFullscreenEnabled",
                element: "webkitFullscreenElement",
                request: "webkitRequestFullscreen",
                Lb: "webkitExitFullscreen",
                ca: {
                    yc: "webkitfullscreenchange",
                    error: "webkitfullscreenerror"
                }
            },
            iq: {
                is: "webkitIsFullScreen",
                enabled: "webkitFullscreenEnabled",
                element: "webkitCurrentFullScreenElement",
                request: "webkitRequestFullScreen",
                Lb: "webkitCancelFullScreen",
                ca: {
                    yc: "webkitfullscreenchange",
                    error: "webkitfullscreenerror"
                }
            },
            op: {
                is: "",
                enabled: "msFullscreenEnabled",
                element: "msFullscreenElement",
                request: "msRequestFullscreen",
                Lb: "msExitFullscreen",
                ca: {
                    yc: "MSFullscreenChange",
                    error: "MSFullscreenError"
                }
            },
            hq: {
                is: "fullscreen",
                enabled: "fullscreenEnabled",
                element: "fullscreenElement",
                request: "requestFullscreen",
                Lb: "exitFullscreen",
                ca: {
                    yc: "fullscreenchange",
                    error: "fullscreenerror"
                }
            },
            np: {
                is: "mozFullScreen",
                enabled: "mozFullScreenEnabled",
                element: "mozFullScreenElement",
                request: "mozRequestFullScreen",
                Lb: "mozCancelFullScreen",
                ca: {
                    yc: "mozfullscreenchange",
                    error: "mozfullscreenerror"
                }
            },
            Pk: {
                is: "webkitDisplayingFullscreen",
                enabled: "webkitSupportsFullscreen",
                element: "webkitFullscreenElement",
                request: "webkitEnterFullscreen",
                Lb: "webkitExitFullscreen",
                ca: {
                    yc: "webkitbeginfullscreen webkitendfullscreen",
                    error: "webkitfullscreenerror"
                }
            }
        };
        for (var g in this.sf) {
            if (this.sf[g].enabled in window.document) {
                this.V = this.sf[g];
                break;
            }
        }
        if (this.a.h.ra()) {
            this.V = this.sf.Pk;
        }
        this.userAgent = window.navigator.userAgent;
        this.h = {
            Co: /Chrome/.test(this.userAgent),
            Ho: /Firefox/.test(this.userAgent),
            opera: /Opera/.test(this.userAgent),
            pp: /MSIE/.test(this.userAgent),
            xo: /Android/.test(this.userAgent),
            xl: /iP(hone|od|ad)/.test(this.userAgent)
        };
        this.view.j(".pb-video-player-wrap");
        this.timeout = null;
        this.xa();
    }

    function Ga() {
        this.Mf = va();
        this.B = ua();
        this.h = -1;
        this.Ma = {
            Qh: "CHROME",
            Rh: "FIREFOX",
            Ak: "FIREFOX_MOBILE",
            Uh: "OPERA",
            Bk: "OPERA_MOBILE",
            Dk: "SAFARI",
            Th: "MSIE",
            zk: "EDGE",
            Ph: "ANDROID",
            yk: "APPLE",
            Fk: "TV",
            Gk: "TV_CONSOLE",
            Ck: "OTHER",
            po: "DESKTOP"
        };
        this.ak();
    }

    function Y(a, b) {
        if (0 >= arguments.length) {
            throw Error("Failed initialize Ads Manager.");
        }
        if (!B(a) || y(a)) {
            throw new TypeError("Player reference is NULL.");
        }
        if (z(b) || y(b) || 0 >= b.length) {
            return this.Fa();
        }
        this.c = "cda.Player.Ads.Manager";
        this.type = Ka;
        this.error = Z;
        this.state = Ja;
        this.a = a;
        this.Vb = null;
        this.cd = false;
        this.lb = this.a.view.j(".pb-video-ad-container");
        this.mb = this.a.view.j(".pb-video-ad-content");
        this.wc = this.xb = null;
        this.b = b;
        this.pf = b.length;
        this.kd = [];
        this.gb = false;
        this.hd = 0;
        this.Xb = 1;
        this.Cb = this.R = 0;
        this.Da = -1;
        this.gd = 1;
        this.bf = null;
        this.Nb = [];
        this.oc = [];
        this.eb = {
            creativeView: [],
            start: [],
            firstQuartile: [],
            midpoint: [],
            thirdQuartile: [],
            complete: []
        };
        this.jg = false;
        this.hi = 0;
        this.tc = "";
        this.dd = 0;
        this.le = null;
        this.ii = 10;
        var e = this.a.storage.get("cda-gdpr");
        if (!!e && !z(e.gdpr) && !z(e.gdpr_consent)) {
            this.dd = e.gdpr;
            this.tc = e.gdpr_consent;
        }
        try {
            var f = this;
            this.le = setInterval(function() {
                if (f.ii == 0) {
                    clearInterval(f.le);
                    f.le = null;
                } else if (f.ii--, typeof window.__tcfapi !== "undefined") {
                    clearInterval(f.le);
                    f.le = null;
                    var a = function(a) {
                        if (!!a && a.cmpStatus == "loaded" && (a.eventStatus == "useractioncomplete" || a.eventStatus == "tcloaded")) {
                            f.hi = a.gdprApplies === false ? 0 : 1;
                            if (a.tcString && a.tcString.length) {
                                f.tc = a.tcString;
                            }
                            if (f.hi) {
                                f.dd = a.purpose && a.purpose.consents && a.purpose.consents[1] && a.vendor && a.vendor.consents && a.vendor.consents[255] ? 0 : 1;
                            }
                            f.a.storage.set("cda-gdpr", {
                                gdpr: f.dd,
                                gdpr_consent: f.tc
                            });
                        }
                    };
                    window.__tcfapi("addEventListener", 0, a);
                    window.__tcfapi("getTCData", 0, a);
                }
            }, 200);
        } catch (u) {}
        this.a.log(this.c, this.b);
        if (!z(this.b[this.R]) && !y(this.b[this.R])) {
            if (this.b[this.R].hasOwnProperty("displayAs")) {
                this.Wf(this.b[this.R].displayAs);
            } else {
                this.Wf(this.state.ec);
            }
        }
        this.a.controls.vb();
        this.xa();
        if (!z(this.b[this.R]) && !y(this.b[this.R])) {
            try {
                if (this.b[this.R].hasOwnProperty("displayAs")) {
                    this.Wf(this.b[this.R].displayAs);
                } else {
                    this.Wf(this.state.ec);
                }
                this.a.log(this.c, "ad state type: " + this.wa);
                var g = this.b[this.R].tag;
                if (this.b[this.R].hasOwnProperty("safe")) {
                    var l = !!this.b[this.R].safe;
                    if (!y(g) && g.indexOf("google_safe") !== -1 && g.indexOf("google_unsafe") !== -1) {
                        try {
                            var k = g.match(/\x3c!--google_safe_begin--\x3e(.+?)\x3c!--google_safe_end--\x3e/i);
                            if (!y(k) && !z(k[1]) && !!E(k[1])) {
                                k = k[1];
                            }
                            var p = g.match(/\x3c!--google_unsafe_begin--\x3e(.+?)\x3c!--google_unsafe_end--\x3e/i);
                            if (!y(p) && !z(p[1]) && !!E(p[1])) {
                                p = p[1];
                            }
                            this.b[this.R].tag = l ? k : p;
                            if (this.Zd(this.b[this.R].tag)) {
                                this.b[this.R].type = this.type.Ua;
                            } else {
                                this.b[this.R].type = this.type.fc;
                            }
                            this.a.log(this.c, "safe: " + this.Rp);
                            this.a.log(this.c, "googleSafeTag: " + k);
                            this.a.log(this.c, "googleUnsafeTag: " + p);
                        } catch (u) {
                            this.a.log(this.c, u);
                        }
                    }
                }
                if (this.a.Na) {
                    this.a.disabled = true;
                    this.bf = window.setInterval(this.a.C.bind(this, this.$k), 100);
                } else {
                    this.Li();
                }
            } catch (u) {
                this.a.log(this.c, u);
                this.Fa();
            }
        }
    }

    function X(a, b, e, f, g, l, k) {
        if (3 > arguments.length) {
            throw Error("Failed initialize Adsense advertisement.");
        }
        if (!B(a) || y(a)) {
            throw new TypeError("Player reference is NULL.");
        }
        if (!B(b) || y(b)) {
            throw new TypeError("Ads Manager reference is NULL.");
        }
        if (z(e) || y(e)) {
            this.finish();
        }
        this.c = "cda.Player.Ads.Adsense";
        this.a = a;
        this.u = b;
        this.b = e;
        this.Ha = null;
        this.event = new R;
        this.error = Z;
        this.ca = [google.ima.AdEvent.Type.AD_BREAK_READY, google.ima.AdEvent.Type.AD_METADATA, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, google.ima.AdEvent.Type.CLICK, google.ima.AdEvent.Type.COMPLETE, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, google.ima.AdEvent.Type.DURATION_CHANGE, google.ima.AdEvent.Type.FIRST_QUARTILE, google.ima.AdEvent.Type.IMPRESSION, google.ima.AdEvent.Type.LINEAR_CHANGED, google.ima.AdEvent.Type.LOADED, google.ima.AdEvent.Type.LOG, google.ima.AdEvent.Type.MIDPOINT, google.ima.AdEvent.Type.PAUSED, google.ima.AdEvent.Type.RESUMED, google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, google.ima.AdEvent.Type.SKIPPED, google.ima.AdEvent.Type.STARTED, google.ima.AdEvent.Type.THIRD_QUARTILE, google.ima.AdEvent.Type.USER_CLOSE, google.ima.AdEvent.Type.VOLUME_CHANGED, google.ima.AdEvent.Type.VOLUME_MUTED];
        this.Cg = ["fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "MSFullscreenChange"];
        this.Mg = null;
        this.i = {};
        this.qe = this.Qd = false;
        this.lb = this.a.view.lb;
        this.mb = this.a.view.mb;
        this.bb = this.a.view.bb;
        this.pe = null;
        if (this.a.view.ub(".pb-ad-video-player", this.lb) != null) {
            this.mb.innerHTML = "";
        }
        this.bk(this.mb, this.a.video);
        if (this.u.wa !== this.u.state.yb || this.a.h.H()) {
            this.lb.show();
        }
        this.s = this.Lc = this.jd = null;
        this.F();
        this.Ic = null;
        this.Jc = this.Kc = this.Ib = -1;
        this.lf = false;
        window.encodeURIComponent(location.href);
        this.S = false;
        this.aa = 5;
        this.qb = this.Fb = null;
        this.Gd = false;
        this.X = 5;
        this.Hd = true;
        this.vc = this.uc = this.rc = this.Md = this.gi = this.fk = false;
        this.eb = {
            creativeView: [],
            start: [],
            firstQuartile: [],
            midpoint: [],
            thirdQuartile: [],
            complete: []
        };
        this.Nb = [];
        this.oc = [];
        this.Oc = [];
        if (!y(f) && !z(f)) {
            this.eb = f;
        }
        if (!y(g) && !z(g)) {
            this.Nb = g;
        }
        if (!y(l) && !z(l)) {
            this.Oc = l;
        }
        if (!y(k) && !z(k)) {
            this.oc = k;
        }
        this.ek();
        if (-1 < this.b.tag.indexOf("MTc2_MDVhMDdjNDFjMGYxZGU1YmU1OTYyMjhiZTAwODgxYmQ_MzEwMw")) {
            this.S = true;
            this.X = this.aa = 20;
        }
        var p = this.a.video.Zb();
        var u = this.a.video.Qc();
        if (u == 0) {
            u = Math.ceil(p / 1.77);
        }
        this.Mn(p);
        this.Ln(u);
        try {
            if (-1 < this.b.tag.indexOf("[referrer_url]")) {
                this.b.tag = this.b.tag.replace("[referrer_url]", encodeURIComponent(window.location.href));
            }
            if (-1 < this.b.tag.indexOf("[player_h]")) {
                this.b.tag = this.b.tag.replace("[player_h]", u);
            }
            if (-1 < this.b.tag.indexOf("[player_w]")) {
                this.b.tag = this.b.tag.replace("[player_w]", p);
            }
        } catch (v) {}
        this.De = false;
        if (y(this.a.ib("vast_test"))) {
            this.De = true;
        }
        if (!this.a.Na && !this.a.ta() && (!this.a.h.H() || !!this.a.h.H() && this.b.displayAs != "midrol") && !this.a.h.Ga() && (this.b.displayAs == "prerol" || this.b.displayAs == "postrol" || this.b.displayAs == "midrol") && !!y(this.a.ib("vast_test")) && (this.a.f.type != "plain" || !z(this.a.f.video_promoted) && !!this.a.f.video_promoted) && (!!(300 <= this.a.f.duration) || this.b.displayAs == "postrol") && this.u.hd == 0 && !(-1 < this.b.tag.indexOf("g_zaslepka_dzieci.php")) && !(-1 < this.b.tag.indexOf("MjA_ZDMwYzA2NTg5NTBiNmU0MzMyMDU4MjQ4OGZhZjQ0MjQ_MjM5NQ")) && !(-1 < this.b.tag.indexOf("MjA_N2JhODc3Y2U3NTJkNTI4Yjc4NmZiMTdjYzFlNDJhYWU_MTIyMQ")) && !(-1 < this.b.tag.indexOf("MjA_MGYzNWQyMzlhN2U0NThlMGQ3OTNiYTMwYzQ3ZmU3NmI_MjUyOQ")) && !(-1 < this.b.tag.indexOf("MjA_YjcxYjg4ODFlYmUwNmYwYWM0ZWVhZWYzZGRlMWExYjY_MjUzOQ")) && !(-1 < this.b.tag.indexOf("MjA_YTg0ZmRmMDg5ZjM4MjI2NzkyZWUzODMwYzExNmNjZjc_MjY0MQ")) && !(-1 < this.b.tag.indexOf("MjA_Y2I2YjBkNjVkZTA5M2U1NGQ3ZTY2YjkwYTQ1NTI1ZWY_MzIxNw")) && !(-1 < this.b.tag.indexOf("MjA_MGE0OTJhMzc0YjZmOGQ5YjRlNWE1MTc4OTkwMDk2Y2Y_MzIxNA")) && !(-1 < this.b.tag.indexOf("MjA_YTQ1MDkxYmJiZjgxOGFkNDdlNGQzZTgwMWIxMjc1ZDE_MzE2Ng")) && !(-1 < this.b.tag.indexOf("MjA_NjNkNDgyZjU4YTJhZGE5ZTY2NGM4MTc4ZDQyNDk2Zjk_MzEwMA")) && !(-1 < this.b.tag.indexOf("MjA_NzFlYzcyMDJmYzlhODE0NzVmNTM2NWQ3MzJiZjBmMjc_MzA5Nw")) && !(-1 < this.b.tag.indexOf("MjA_YTc4YzZhOGIwN2U0ZjVjZTBkOGNlNTQ1ZWJkMGZhMTc_MzA5NA")) && !(-1 < this.b.tag.indexOf("MjA_MDZiYWRiODMyODhiMDkxMWE5YzM2MGJkNDBiYmMwNGM_MzA5MQ")) && !(-1 < this.b.tag.indexOf("MjA_YzU3ZmMyNDcxODk0ZTdhY2JkNGE5ZDEyOTllMWQ0N2I_MzA0Mw")) && !(-1 < this.b.tag.indexOf("MjA_YjE1NTVlOGZhY2YyYTAxZmVjYWJiNDQ1NzYzZTExOTM_MzI0NA")) && !(-1 < this.b.tag.indexOf("MjA_ZWU3YjlhZWMyMmVmYzk1MDdiY2E2NDJhZTM1YmZiM2Q_MzI0Nw")) && !(-1 < this.b.tag.indexOf("MjA_OTQyM2VhYzkyZWJmNGY5MWJiNDE1ZTBhNGJjMTFmM2U_MzI1MA")) && !(-1 < this.b.tag.indexOf("MjA_YmMwYTA5NzAyYTA4MTQwMzMzYTMzNWFjYWI5MjM3MTA_MzI1Mw")) && !(-1 < this.b.tag.indexOf("MjA_YjEyNWI0N2Y1NzE4M2Q0ZTAxYWQ3MmI3OWEzMDc5ODM_MzI1OQ")) && !(-1 < this.b.tag.indexOf("MjA_YzliYjJkMmVhMWRlNmU5Y2Q2NDA0YjU1ZjJlMDgzNTg_MzI1Ng")) && typeof this.b.pool !== "undefined") {
            p = new URLSearchParams(this.b.tag);
            p.set("ts", "[timestamp]");
            p = window.decodeURIComponent(p.toString());
            p = p.replace("ads=&", "ads&");
            p = this.b.pool + "&remove_from_pool=" + window.encodeURIComponent(p);
            this.u.gd = 2;
            this.Ha = {
                tag: p,
                autoplay: true,
                counter: true,
                displayAs: this.b.displayAs,
                key: typeof this.b.key2 != "undefined" ? this.b.key2 : "",
                skip: false,
                click: true,
                time: 0,
                type: "pool",
                length: 30
            };
        }
    }

    function W(a, b, e) {
        if (0 >= arguments.length) {
            throw Error("Failed initialize VAST advertisement.");
        }
        if (!B(a) || y(a)) {
            throw new TypeError("Player reference is NULL.");
        }
        if (!B(b) || y(b)) {
            throw new TypeError("Ads Manager refrence is NULL.");
        }
        if (z(e) || y(e)) {
            return this.finish();
        }
        this.c = "cda.Player.Ads.Vast";
        this.eb = {
            creativeView: [],
            start: [],
            firstQuartile: [],
            midpoint: [],
            thirdQuartile: [],
            complete: [],
            skip: [],
            mute: [],
            unmute: [],
            pause: [],
            resume: [],
            video5sec: [],
            video10sec: [],
            video15sec: [],
            video20sec: [],
            video25sec: [],
            video30sec: []
        };
        this.Nb = [];
        this.oc = [];
        this.we = "";
        this.Oc = [];
        this.He = "";
        this.R = 0;
        this.S = false;
        this.aa = 5;
        this.qb = this.Fb = null;
        this.Gd = false;
        this.X = 5;
        this.Hd = true;
        this.autoplay = false;
        this.i = {};
        this.Rd = 0;
        this.b = e;
        this.Ha = null;
        this.gf = this.Md = this.ig = this.pg = this.og = this.ng = this.mg = this.lg = this.qg = this.vc = this.uc = this.rc = this.Nd = false;
        this.kb = 0;
        this.$a = false;
        this.ya = null;
        this.Kd = this.pa = false;
        this.duration = this.currentTime = -1;
        this.a = a;
        this.u = b;
        this.event = this.video = null;
        this.Ja = "click timeupdate error abort ended pause play playing loadstart load loadeddata loadedmetadata progress waiting canplay canplaythrough volumechange".split(" ");
        this.state = null;
        this.un = "//static.cda.pl/v001/img/mobile/poster16x9.png";
        this.lb = this.a.view.lb;
        this.mb = this.a.view.mb;
        this.v = this.a.view;
        this.event = new R;
        this.error = Z;
        this.Si = false;
        if (this.b.hasOwnProperty("autoplay")) {
            this.autoplay = !!this.b.autoplay;
        }
        if (this.b.hasOwnProperty("skip")) {
            this.S = !!this.b.skip;
        }
        this.S = false;
        if (this.a.nb()) {
            this.S = true;
            this.aa = 5;
        }
        try {
            if (-1 < this.b.tag.indexOf("${GDPR}")) {
                this.b.tag = this.b.tag.replace("${GDPR}", this.u.dd);
            }
            if (-1 < this.b.tag.indexOf("${GDPR_CONSENT_755}")) {
                this.b.tag = this.b.tag.replace("${GDPR_CONSENT_755}", this.u.tc);
            }
            if (-1 < this.b.tag.indexOf("${GDPR_CONSENT}")) {
                this.b.tag = this.b.tag.replace("${GDPR_CONSENT}", this.u.tc);
            }
            if (this.b.tag.indexOf("gdpr_consent=") == -1) {
                var f = -1 < this.b.tag.indexOf("?") ? "&" : "?";
                this.b.tag += f + "gdpr_consent=" + this.u.tc;
            }
            if (this.b.tag.indexOf("gdpr=") == -1) {
                f = -1 < this.b.tag.indexOf("?") ? "&" : "?";
                this.b.tag += f + "gdpr=" + this.u.dd;
            }
        } catch (g) {}
        if (-1 < this.b.tag.indexOf("MjA_MTI3M2FjYjVmMzI3YTljMzI1Y2NmYWZkMTIyM2RhOGE_NjIz") || -1 < this.b.tag.indexOf("MjA_ZGMyN2E2NmFhYjZhNjE3YTE1N2E0ZTgzODk2ZTVlNWI_NjE3") || -1 < this.b.tag.indexOf("MjA_Y2YyYmM1ZmJiOTJkNzU1ZDgwMmJmYzgxOGNmNzZiMjQ_NjE0") || -1 < this.b.tag.indexOf("MjA_YTk1ZjkwZGViMmZkZDc4YmE4MzhiM2U1MmY0NjhkODY_NjA4") || -1 < this.b.tag.indexOf("MjA_MDk1ODNhM2U4MDdmNjJjODBhMWIxMTAzNDk3ZjdkNTE_NjMy") || -1 < this.b.tag.indexOf("NzY_MGI4MThkZjU2MmEwM2Y2MzY4NDllM2RkYjhjYzM1MDQ_NjU1")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MjA_YmY3OGEwODRkOTNkNDAwNTI4YjE5ZDM1MDdmNWY2M2E_NjAw") || -1 < this.b.tag.indexOf("MjA_OGJkM2RkZTI5YjIxNjE5ZDYxZGUzYjU3ZDUwOGVhYzk_NTUy") || -1 < this.b.tag.indexOf("MjA_MzY1ZmIzZGNhMzhhZmY0ZmI2NWE2NTdjMmQ0YWQzMDI_NTQ5") || -1 < this.b.tag.indexOf("MjA_M2YzNTJmZDMwOGVhNDgyMjllZmFlNjNlOTQ2OThmZTY_NTQ2") || -1 < this.b.tag.indexOf("MjA_MjRkZDcxOGQ4MmFhYTQ0NWU0OGFhYmVjMjM1ZGJlM2Q_NTQz") || -1 < this.b.tag.indexOf("MjA_NTNhZjNmY2NiYmE5ZTVmZDEwY2FlYTQyNWYxYmM3MzI_NTI4") || -1 < this.b.tag.indexOf("MjA_OGIyMWVkNGMwNzhhZjA0YTc2Y2Y1N2EzYmEwYjI3Y2Y_NTI1") || -1 < this.b.tag.indexOf("MjA_MWFhOWQyYzM3NWQyZWM0N2ZlODkzNDE0ZDExZTFiOGE_NTIy") || -1 < this.b.tag.indexOf("MjA_NzY0ZWYwNjRjNzJhZDU0MWYzYWI5NDYxM2Q4YzNmMmU_NDkz") || -1 < this.b.tag.indexOf("MjA_N2NkZjEzZDIwNDliNWY3MDc1YzQzYmM3ZmViYTc0NTM_NDg0") || -1 < this.b.tag.indexOf("MjA_Njc1MTI4Y2NkNGIxMTFiNGQxNjg5NGFjOTJkZjUxNDM_MzY5") || -1 < this.b.tag.indexOf("MjA_NTI5NzU2NDQ2YzEwY2Y1OGZlZmRlNjU1MzEzNDQzODc_NjI2") || -1 < this.b.tag.indexOf("MjA_ZDY5ODE4MjM2MmEzMjEwMzIwOTU3YzJkMTYzMDU0ZmU_NjEx") || -1 < this.b.tag.indexOf("MjA_ZGNiMTBiMjJhOTdjMDlhY2I2YTBlNDUxMWM4MGRiODc_NjM3") || -1 < this.b.tag.indexOf("MjA_Nzc3ZDhkYzYyYjUwNzQ4ZmRiMmVhNDgxOWJiOWYwMTk_NjM0") || -1 < this.b.tag.indexOf("MjA_NDg0ZGE4ZTI5MWRlMTdiY2IyNGU3YzE3N2Q1ODZlNDA_NjQy") || -1 < this.b.tag.indexOf("MjA_NDhmZDZlY2U2YTIwZWExMTlkMjAzZDJkM2IzMGZkYzU_NjY0") || -1 < this.b.tag.indexOf("MjA_YjY5NGNjZmJjN2NmMDJmMDU2YzkyNmY3OGE1YTE1MWY_Njcw") || -1 < this.b.tag.indexOf("MjA_N2Q2MjY3ZDQwZmQzNDVkZDhlZDM5YzNhNmQ0YWI0MGE_NjY3") || -1 < this.b.tag.indexOf("MjA_YTk4NGJhMGMxM2RmOThmZDQ0MjAxNzMyOWM1ODlkYTA_Njk0") || -1 < this.b.tag.indexOf("MjA_ODljOGQ2MzdkZWQxOWRiZTlmNmIxYTc0OGUyODViOTM_Njkx") || -1 < this.b.tag.indexOf("MjA_MmNjNTU5NDc5NDc0ZDU4NzAyNTFmYmVlYTQ1ZDJiNjc_Njg4") || -1 < this.b.tag.indexOf("MjA_NTQzOGNiNDViZmY5NjVjZTk4MTFlMzdkZWU4NWE0YzI_Njg1") || -1 < this.b.tag.indexOf("MjA_N2NmNWZiMzU0OGYyZTNjODQ4NTI3NGQ4YmU4MmY3YTA_Njgy") || -1 < this.b.tag.indexOf("MjA_ZDhiMDVhYzRkMGJjNTFjZTQyZGU4Y2ZhNjNmZWM5YWQ_NzIw") || -1 < this.b.tag.indexOf("MjA_N2QxZTE0NTg4NTdmNmM5MTY3NDdkOTdmNmViMzA5NTY_NzE3") || -1 < this.b.tag.indexOf("MjA_ZDc0MDdlMmQ5NDBiNzZiYjg2MjE4ZjgxMTgxOGYwMDc_NzMw") || -1 < this.b.tag.indexOf("MjA_ZTY5YWQ3NzljMzMzMjI4OGQ0NzIzZGM1ZjUwZjRhMDg_NzI3") || -1 < this.b.tag.indexOf("MjA_NTY1ZWFkMjJjNDFiMDM2MGYzNGE3MzVhYjEzNDY3M2Q_ODA1") || -1 < this.b.tag.indexOf("MjA_ZTZhNzM4NmI4YTk1ZWMwZWM0NGYxYjg5ZTY0MGUwYzU_ODE0") || -1 < this.b.tag.indexOf("MjA_MjMxYTdmYTg2ZDFmYTJkNTE2Yjc5MDYzZGViMGNhNDg_ODE3") || -1 < this.b.tag.indexOf("MjA_YjYzOTQ5M2Q0NDhkZmY3NGNmOTVkZjhmYWYzMzEyODg_ODQx") || -1 < this.b.tag.indexOf("MjA_MWRkNTQyMWM3NWZiZGQyMDJkYzRmZGVhNzgwNDYxNWE_ODY4") || -1 < this.b.tag.indexOf("MjA_MDdkMzkxM2RlNTQyODBmMzM3NWIyNmM2NjY1ZDNlYWI_ODY1") || -1 < this.b.tag.indexOf("MjA_NDIzNTk0OGM1NjM2MzExM2UzZGNkMjUzNGZlMGYxOTk_ODYy") || -1 < this.b.tag.indexOf("MjA_YmI5ZWM3MDRmM2YxYWQxYzdmN2YyMTRhNjA1NDZlYWU_ODU5") || -1 < this.b.tag.indexOf("MjA_YTU4YmQ2NjI0MzEwZWVmNTIwM2I0ODFkYTdmZDAxMmQ_OTU1") || -1 < this.b.tag.indexOf("MjA_YTQwNjQ1YWYwNTA4ZDE3OGRlYThjYWU2ZjU0ZTM4YmY_OTUy") || -1 < this.b.tag.indexOf("MjA_M2MxZjhlNzA4YWY1MjA3NzYwNjE2YzJjZjJkMmI2NjQ_OTkx") || -1 < this.b.tag.indexOf("MjA_OTBmNmQ5ODA1MjQ3ZTYxNzRiNDA2Mjk3YTNiNTUwZDE_OTg4") || -1 < this.b.tag.indexOf("MjA_Y2RmM2M2ZWYyNWZlMDVmNTBhNzgzODQ1ZGQxM2ZkZDU_OTg1") || -1 < this.b.tag.indexOf("MjA_MDIzYjAwODgzMDdhNmVkZDg2NDZkMjlmYjM1OWVhNTE_MTAxOQ") || -1 < this.b.tag.indexOf("MjA_MDRjN2Y5MGVkNTA5N2I4OGRmMDgwMmE2NTIyNGM0Njk_MTAzNA") || -1 < this.b.tag.indexOf("MjA_NGNkZmZhYjFmMzIxMjM3MjdiNzM0MDQyNGFmYmEyNWQ_MTA3Nw") || -1 < this.b.tag.indexOf("MjA_NzM4ODI4ZGNjY2JjOTZiOGQwYTc4ZWY3ZjY5OWY3Zjc_MTA3NA") || -1 < this.b.tag.indexOf("MjA_ZTZiMDE1YjA1OTliMTJkYjE3ZGE2YWRhNmNkZmVjZTQ_MTA4Ng") || -1 < this.b.tag.indexOf("MjA_NDliODM4ODBmZjY2ZTliNDYwYThkMWQwNjM4ZGUzMTk_MTExOA") || -1 < this.b.tag.indexOf("MjA_NGU3NTJmNTM3M2I1ZTQ0MDhiN2MyNjdmOGJlZjRiYTA_MTEyNA") || -1 < this.b.tag.indexOf("MjA_OWJhZWJjNjdiYjVhYTBkNzMyZjhhMTUyY2MxNDJhN2I_MTEyNg") || -1 < this.b.tag.indexOf("MjA_YmMyYmIxMWVhNWQ5YjkxYzE5ZjczNDk5NmU3YmQ1ZmI_MTEyOA") || -1 < this.b.tag.indexOf("MjA_MjM1Zjc1MTAxZDZjMzU3ZDI4NDYxMTg5MTI4NTYyMDU_MTEzMA") || -1 < this.b.tag.indexOf("MjA_ZTI2YWQxOTRmZjY4YmJjZTBlYjk3MDE4MDRjODE4NDA_MTEzNg") || -1 < this.b.tag.indexOf("MjA_Y2VmOWVmY2VhNWM0NzZhZjE5NjE1YzQxMzI2ZDg2ZGY_MTM2NQ") || -1 < this.b.tag.indexOf("MjA_ODRmOWEwN2ViOTcwYmE1Mzg1YjQyMmNmNWMyOTIzY2Y_MTM2Mg") || -1 < this.b.tag.indexOf("MjA_NWYzMjY4OWYyYjI2OGFkZWY4NDNkMDQwMmY4YWNhOTE_MTM1OQ") || -1 < this.b.tag.indexOf("MjA_MDYwYTEyMmU5MmU1YzdhNTg0ZWU5MDNmNDcyZGQzNDg_MTM1Ng") || -1 < this.b.tag.indexOf("MjA_YmFmMzI3N2EyMDYyZjMwNWU0ZDE5YzhlMzhhMzdhZjY_MTM1Mw") || -1 < this.b.tag.indexOf("MjA_MzkzNDg5OWI5MGQ1YTk4NTBlNjg5Y2I2M2I3MWUwNTc_MTQ4Mw") || -1 < this.b.tag.indexOf("MjA_YzQ0MzgzNGNhMDIxMjVhMGExNWM2YTBiMjRkZTI4ZWQ_MTk0Mg") || -1 < this.b.tag.indexOf("MjA_YjM1YWIxMWNkZDk5NTcwYTcyYWYyOWM5NjcwZmM1Mzk_MTkzOQ") || -1 < this.b.tag.indexOf("MjA_NjFlYjM3OWIxNDRjY2U5MmE1YTAzYzY0YmQ0Zjc4ZGE_MTgxNg") || -1 < this.b.tag.indexOf("MjA_NzYwZDhjMzU1ZjRjNWExYWRjMWM3MzQ3MzkzY2YxMzQ_MTY5MA")) {
            this.S = true;
            this.aa = 5;
        }
        this.De = false;
        if (y(this.a.ib("vast_test"))) {
            this.De = true;
        }
        if (-1 < this.b.tag.indexOf("MjYw_MzljNjA0NDkwMjc3M2ZjZDZmZjg4YTE5OTMyZmNkNTY_MzYzOA")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_ZGZlYjIyYjVmYzk0MmI5ZThlMmVhMTE2Yzg2ZWQ5YWE_MjkzOA") || -1 < this.b.tag.indexOf("MTk2_Y2VlNTczYzAyYTJjMjdmNTUzNjJiNTJiMGJjMzZkZjE_MjkzNQ") || -1 < this.b.tag.indexOf("MTk2_NGRiMGI0YWFiZGQ5NTIxZDExZDkxYWZjYTQzNTIyM2E_MzAxOQ")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MjA_NjNkNDgyZjU4YTJhZGE5ZTY2NGM4MTc4ZDQyNDk2Zjk_MzEwMA") || -1 < this.b.tag.indexOf("MjA_MDZiYWRiODMyODhiMDkxMWE5YzM2MGJkNDBiYmMwNGM_MzA5MQ") || -1 < this.b.tag.indexOf("MjA_NjkwOWIyOTVkOTkyNzVhODI1ODEyMmRmYzA0YmUwOWU_MzA4OA")) {
            this.S = true;
            this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_ZTcwZTkwN2EyMzM4NDQzMTYyN2M4Nzg5MzIwZDhkOGE_MzAyMg") || -1 < this.b.tag.indexOf("MTk2_ZTcwZTkwN2EyMzM4NDQzMTYyN2M4Nzg5MzIwZDhkOGE_MzAyMg")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_MjIzMjA0ZDU2OTA0Mzg0YjE3Y2I5NGY4ZmE2MTdiNzY_MzQ5MA") || -1 < this.b.tag.indexOf("MTk2_MjI2ZjFiNjQxOWJkY2Q0ZTY1NzZhNWIyZDRhNDE2YzE_MzQ5Mw")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_YmZjYjRkNDJiOTJmYTY2MWMxOTNmNmNmMWYyZWZjMzE_MzQ4Nw") || -1 < this.b.tag.indexOf("MTk2_ZWRkOGY0OTFhMDJkZGJhY2VhZDQ1MGI2ZjViOGRiYmQ_MzQ5Ng")) {
            this.S = true;
            this.X = this.aa = 15;
        }
        if (-1 < this.b.tag.indexOf("MTk2_Mzc3YTc2ZjI2YmUzNGMyNTEwMDJkMTVjYTYxYzE5YjY_MjY0NA")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_ZmE5ZTY1NGFhMzQ4MTRiMGIwZTg5OTg5NzA3Y2MwOGQ_Mzk0MA")) {
            this.S = true;
            this.X = this.aa = 7;
        }
        if (-1 < this.b.tag.indexOf("MTk2_ODI2ZWM2M2U2ZTI4MzI3MGJmZDFhY2QwMjhjOTU1ZmI_MjU2Mw") || -1 < this.b.tag.indexOf("MTk2_Njk3OGNlNDFmYmJkMWIxY2JkMzQxZGJmNWEyNTlkYzk_Mjc3MA") || -1 < this.b.tag.indexOf("MTk2_YmQxOTdhYzQ0MjA2MDVlNTYwODM2ZTJiMzI0N2EyYTI_Mjc4OA") || -1 < this.b.tag.indexOf("MTk2_MTA5YmJlYTg2YWRhOTY0YjIyNTgzZmU2MTc0YjQxYmI_Mjc5MQ")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MjY2_ZGYxMmVkMzQzZGE1MDNkNDNlZjBkMjMzY2ZjOTJlMDQ_MzgyMA") || -1 < this.b.tag.indexOf("MjY2_MWEyZWRkMDgxYzBjZjZkZmFiNjMwMWVlN2I5OThkOWU_MzgyMw") || -1 < this.b.tag.indexOf("MjY2_ODFlMTI2ZDQ4ODYxZWMxNGJlZjU4YjA2ZmJhYWI5MjY_MzgyNg") || -1 < this.b.tag.indexOf("MjY2_OGYzNGY2ZWE2ZjYzMjYzYzgxYTcyZjU2ZjgzYzdiYjA_MzgyOQ")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_ZGJjMTMxZDdmMjQwMTc5NTZiZmE5OGU4MDJkYTZiMzg_MzczNg") || -1 < this.b.tag.indexOf("MTk2_MGUzYmQ1ZWYyMDBjMTFlMmZmMTY1NzE1ZjhmZTEzYTY_MzczMw")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_ZTNhZjY5OTk3MGU2YjZhYzc2NWMxZWRjNmRlYTIzYzU_MzIyMA") || -1 < this.b.tag.indexOf("MTk2_MjMyNmVmZTUzODRiM2E3MWFmNmQ5Mjk0YTAyZWU1ZTk_MzI2Mg")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_MTQ3ZjcyNzRmMDA5NDA4YzE1YjdkZDQ3ZmM2M2UwOTE_MzQ3OQ") || -1 < this.b.tag.indexOf("MTk2_ZmI2YWEzZDQwZTY0YzlhMTM0YWUzNGQ4ZjdiZDFjZDQ_MzQ3Ng")) {
            this.S = true;
            this.X = this.aa = 15;
        }
        if (-1 < this.b.tag.indexOf("MTk2_OWI3ZGZlMDMxZjU4NTI4OTcyMDYwYTkyNjhjOTk2YjU_MzQ3Mw")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_Y2FiNjZhMjQ1MWU0ODBkZjEyYzBhNDE1ZTZiYTQ0MDI_Mzk2MQ")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_YTU3Mjg2NTk1MjU3YWYwNzY2ZTYyZGJmZmI4ZjkwMGY_MzU1OQ")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_ODc3MzBiMjM5NWE1N2JhNjZmN2IwNWI1ZTdmMTI2MDQ_Mjg2Mw") || -1 < this.b.tag.indexOf("MTk2_YzBmODkzNmNkYTBkNzljYWE2ODVmN2NlZTJkODE1NTM_Mjg2Ng")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_ZTY4YmEyY2RhN2NiYjI3NzkzYTA3ZmVmNDQ2YjY4MTE_MjgyNA")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_ZmJmZjgyY2I4N2MxMjgyMjEyNTY0YzM1OWM1YTY2NmM_MjgyNw")) {
            this.S = true;
            this.X = this.aa = 10;
        }
        if (-1 < this.b.tag.indexOf("MTk2_MWRmY2ExZWQ4YWYyMGNiYjM1MTE1ZWQ1ZDg1Njc5YmQ_MjkzMg")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_YTQ1OTk2MmEwNTk0NzVjMjQ2M2Y5MmQwOGFiYjA5ZmI_MzE4NA") || -1 < this.b.tag.indexOf("MTk2_MzAxYWRlM2Q4MDUyNGZlNWQ2OGU2N2U0MDE3NzU4OTE_MzE4MQ")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MTk2_M2JjOGI5Y2I3Mjk0YWZiMjhjOTZhNTFiNWQ2OWZiYzA_MzI2OA")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MjA_Y2U5ODIxYWI5MmQ3ZGMyZGQzNGEzY2E3MmQyZDlhOTM_MzUzNQ")) {
            this.S = true;
            this.X = this.aa = 10;
        }
        if (-1 < this.b.tag.indexOf("MjA_NjZjMTkyNGE3ZjE2NzRmY2Y4MDA2YjE4YjZhNmUzNjE_MzU0MQ")) {
            this.S = true;
            this.X = this.aa = 10;
        }
        if (-1 < this.b.tag.indexOf("MjA_OTlmYjJhMzdmZGJiNTJmMGI4NmRlMDM2OWVjOWNhM2Y_MzYwMQ")) {
            this.S = true;
            this.X = this.aa = 15;
        }
        if (-1 < this.b.tag.indexOf("MjA_OWVkODllZTc0ZTU1OWMzYzQwZDFlOGExYmI4MzI3YjQ_MzY1OQ")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MjY2_ZDRiM2Q0NzJjMjYwNzIxZGQwZjk4MDlmNjhhMDkzMjU_MzY0Nw")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MjY2_MTk4MGI2OTc1MzRhNjAyYjVhN2RmZTM3ZjAzNzkwMjA_MzY1MA")) {
            this.S = true;
            this.X = this.aa = 15;
        }
        if (-1 < this.b.tag.indexOf("MjU2_YzBiMWNlMTZhNjkzYjVjOTcxMWZiN2I1ZWM0MjQ0YTc_MzcyNw")) {
            this.S = true;
            this.X = this.aa = 5;
        }
        if (-1 < this.b.tag.indexOf("MjA_ZDNhNmI2NjMwZTRhMzgxZTMxYWRhMTc3MTBiZTNmZTY_MzgwOA")) {
            this.S = false;
        }
        if (-1 < this.b.tag.indexOf("MjA_MWNkM2JmYThmYjFkYWFhZDViOGFlNTk0NGM3YzRmZGE_Mzg1Ng")) {
            this.S = true;
            this.X = this.aa = 20;
        }
        if (-1 < this.b.tag.indexOf("MjIw_OWJmZjkxNjA4M2IwNDc4MjJjY2YwMWQyYzg5MjRjOWM_MjgxOA")) {
            this.S = true;
            this.X = this.aa = 15;
            try {
                this.S = false;
            } catch (g) {}
        }
        if (-1 < this.b.tag.indexOf("g_zaslepka_dzieci") && this.a.f.type != "plain") {
            this.b.tag = -1 < this.b.tag.indexOf("?") ? this.b.tag + "&partner" : this.b.tag + "?partner";
        }
        if (this.b.tag) {
            f = new URL(this.b.tag);
            if (f.searchParams.get("cpv")) {
                this.S = true;
                this.aa = parseInt(f.searchParams.get("cpv"));
                this.X = parseInt(f.searchParams.get("cpv"));
                this.Si = true;
            }
            if (f.searchParams.get("skip")) {
                this.S = true;
                this.aa = parseInt(f.searchParams.get("skip"));
                this.X = parseInt(f.searchParams.get("skip"));
            }
        }
        if (this.a.Na) {
            this.S = false;
        }
        try {
            if (-1 < window.location.href.indexOf("skipoff=1")) {
                this.S = false;
            }
        } catch (g) {}
        f = -1 < this.b.tag.indexOf("MjA_");
        if (this.a.Na && this.u.hd == 0 && !this.a.nb()) {
            this.u.gd = 2;
            this.Ha = {
                tag: this.b.tag,
                autoplay: true,
                counter: true,
                displayAs: this.b.displayAs,
                key: "",
                skip: false,
                click: true,
                time: 0,
                type: "vast",
                length: 15
            };
        } else if (!this.a.Na && !this.a.nb() && !this.a.ta() && (!this.a.h.H() || !!this.a.h.H() && this.b.displayAs != "midrol") && !this.a.h.Ga() && (this.b.displayAs == "prerol" || this.b.displayAs == "postrol" || this.b.displayAs == "midrol") && !f && !!y(this.a.ib("vast_test")) && (this.a.f.type != "plain" || !z(this.a.f.video_promoted) && !!this.a.f.video_promoted) && (!!(300 <= this.a.f.duration) || this.b.displayAs == "postrol") && this.u.hd == 0) {
            if (-1 < this.b.tag.indexOf("MjA_ZDMwYzA2NTg5NTBiNmU0MzMyMDU4MjQ4OGZhZjQ0MjQ_MjM5NQ") || -1 < this.b.tag.indexOf("MjA_N2JhODc3Y2U3NTJkNTI4Yjc4NmZiMTdjYzFlNDJhYWU_MTIyMQ") || -1 < this.b.tag.indexOf("MjA_MGYzNWQyMzlhN2U0NThlMGQ3OTNiYTMwYzQ3ZmU3NmI_MjUyOQ") || -1 < this.b.tag.indexOf("MjA_YjcxYjg4ODFlYmUwNmYwYWM0ZWVhZWYzZGRlMWExYjY_MjUzOQ") || -1 < this.b.tag.indexOf("MjA_YTg0ZmRmMDg5ZjM4MjI2NzkyZWUzODMwYzExNmNjZjc_MjY0MQ") || -1 < this.b.tag.indexOf("MjA_Y2I2YjBkNjVkZTA5M2U1NGQ3ZTY2YjkwYTQ1NTI1ZWY_MzIxNw") || -1 < this.b.tag.indexOf("MjA_MGE0OTJhMzc0YjZmOGQ5YjRlNWE1MTc4OTkwMDk2Y2Y_MzIxNA") || -1 < this.b.tag.indexOf("MjA_YTQ1MDkxYmJiZjgxOGFkNDdlNGQzZTgwMWIxMjc1ZDE_MzE2Ng") || -1 < this.b.tag.indexOf("MjA_NjNkNDgyZjU4YTJhZGE5ZTY2NGM4MTc4ZDQyNDk2Zjk_MzEwMA") || -1 < this.b.tag.indexOf("MjA_NzFlYzcyMDJmYzlhODE0NzVmNTM2NWQ3MzJiZjBmMjc_MzA5Nw") || -1 < this.b.tag.indexOf("MjA_YTc4YzZhOGIwN2U0ZjVjZTBkOGNlNTQ1ZWJkMGZhMTc_MzA5NA") || -1 < this.b.tag.indexOf("MjA_MDZiYWRiODMyODhiMDkxMWE5YzM2MGJkNDBiYmMwNGM_MzA5MQ") || -1 < this.b.tag.indexOf("MjA_YzU3ZmMyNDcxODk0ZTdhY2JkNGE5ZDEyOTllMWQ0N2I_MzA0Mw") || -1 < this.b.tag.indexOf("MjA_YjE1NTVlOGZhY2YyYTAxZmVjYWJiNDQ1NzYzZTExOTM_MzI0NA") || -1 < this.b.tag.indexOf("MjA_ZWU3YjlhZWMyMmVmYzk1MDdiY2E2NDJhZTM1YmZiM2Q_MzI0Nw") || -1 < this.b.tag.indexOf("MjA_OTQyM2VhYzkyZWJmNGY5MWJiNDE1ZTBhNGJjMTFmM2U_MzI1MA") || -1 < this.b.tag.indexOf("MjA_YmMwYTA5NzAyYTA4MTQwMzMzYTMzNWFjYWI5MjM3MTA_MzI1Mw") || -1 < this.b.tag.indexOf("MjA_YjEyNWI0N2Y1NzE4M2Q0ZTAxYWQ3MmI3OWEzMDc5ODM_MzI1OQ") || -1 < this.b.tag.indexOf("MjA_YzliYjJkMmVhMWRlNmU5Y2Q2NDA0YjU1ZjJlMDgzNTg_MzI1Ng")) {
                this.u.gd = 1;
            } else if (-1 < this.b.tag.indexOf("g_zaslepka_dzieci.php")) {
                this.u.gd = 2;
                this.Ha = {
                    tag: this.b.tag,
                    autoplay: true,
                    counter: true,
                    displayAs: this.b.displayAs,
                    key: "",
                    skip: false,
                    click: true,
                    time: 0,
                    type: "vast",
                    length: 15
                };
            } else if (typeof this.b.pool !== "undefined") {
                f = new URLSearchParams(this.b.tag);
                f.set("ts", "[timestamp]");
                f = window.decodeURIComponent(f.toString());
                f = f.replace("ads=&", "ads&");
                f = this.b.pool + "&remove_from_pool=" + window.encodeURIComponent(f);
                this.u.gd = 2;
                this.Ha = {
                    tag: f,
                    autoplay: true,
                    counter: true,
                    displayAs: this.b.displayAs,
                    key: typeof this.b.key2 != "undefined" ? this.b.key2 : "",
                    skip: false,
                    click: true,
                    time: 0,
                    type: "pool",
                    length: 15
                };
            }
        }
        this.a.log(this.c, this.b);
    }

    function La() {
        this.zf = window.document;
    }
    var d = typeof window != "undefined" && window === this ? this : typeof global != "undefined" && global != null ? global : this;
    var ca = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, e) {
        if (a != Array.prototype && a != Object.prototype) {
            a[b] = e.value;
        }
    };
    da("Promise", function(a) {
        function b(a) {
            this.We = 0;
            this.vh = void 0;
            this.fe = [];
            var b = this.xg();
            try {
                a(b.resolve, b.reject);
            } catch (u) {
                b.reject(u);
            }
        }

        function e() {
            this.Mc = null;
        }

        function f(a) {
            if (a instanceof b) {
                return a;
            } else {
                return new b(function(b) {
                    b(a);
                });
            }
        }
        if (a) {
            return a;
        }
        e.prototype.ui = function(a) {
            if (this.Mc == null) {
                this.Mc = [];
                this.Qk();
            }
            this.Mc.push(a);
        };
        e.prototype.Qk = function() {
            var a = this;
            this.vi(function() {
                a.ll();
            });
        };
        var g = d.setTimeout;
        e.prototype.vi = function(a) {
            g(a, 0);
        };
        e.prototype.ll = function() {
            while (this.Mc && this.Mc.length) {
                var a = this.Mc;
                this.Mc = [];
                for (var b = 0; b < a.length; ++b) {
                    var e = a[b];
                    a[b] = null;
                    try {
                        e();
                    } catch (v) {
                        this.Rk(v);
                    }
                }
            }
            this.Mc = null;
        };
        e.prototype.Rk = function(a) {
            this.vi(function() {
                throw a;
            });
        };
        b.prototype.xg = function() {
            function a(a) {
                return function(f) {
                    if (!e) {
                        e = true;
                        a.call(b, f);
                    }
                };
            }
            var b = this;
            var e = false;
            return {
                resolve: a(this.Fn),
                reject: a(this.th)
            };
        };
        b.prototype.Fn = function(a) {
            if (a === this) {
                this.th(new TypeError("A Promise cannot resolve to itself"));
            } else if (a instanceof b) {
                this.Zn(a);
            } else {
                a: switch (typeof a) {
                    case "object":
                        var e = a != null;
                        break a;
                    case "function":
                        e = true;
                        break a;
                    default:
                        e = false;
                }
                if (e) {
                    this.En(a);
                } else {
                    this.Ei(a);
                }
            }
        };
        b.prototype.En = function(a) {
            var b = void 0;
            try {
                b = a.then;
            } catch (u) {
                this.th(u);
                return;
            }
            if (typeof b == "function") {
                this.$n(b, a);
            } else {
                this.Ei(a);
            }
        };
        b.prototype.th = function(a) {
            this.ik(2, a);
        };
        b.prototype.Ei = function(a) {
            this.ik(1, a);
        };
        b.prototype.ik = function(a, b) {
            if (this.We != 0) {
                throw Error("Cannot settle(" + a + ", " + b + "): Promise already settled in state" + this.We);
            }
            this.We = a;
            this.vh = b;
            this.ml();
        };
        b.prototype.ml = function() {
            if (this.fe != null) {
                for (var a = 0; a < this.fe.length; ++a) {
                    l.ui(this.fe[a]);
                }
                this.fe = null;
            }
        };
        var l = new e;
        b.prototype.Zn = function(a) {
            var b = this.xg();
            a.tf(b.resolve, b.reject);
        };
        b.prototype.$n = function(a, b) {
            var e = this.xg();
            try {
                a.call(b, e.resolve, e.reject);
            } catch (v) {
                e.reject(v);
            }
        };
        b.prototype.then = function(a, e) {
            function f(a, b) {
                if (typeof a == "function") {
                    return function(b) {
                        try {
                            g(a(b));
                        } catch (Ba) {
                            k(Ba);
                        }
                    };
                } else {
                    return b;
                }
            }
            var g;
            var k;
            var l = new b(function(a, b) {
                g = a;
                k = b;
            });
            this.tf(f(a, g), f(e, k));
            return l;
        };
        b.prototype.catch = function(a) {
            return this.then(void 0, a);
        };
        b.prototype.tf = function(a, b) {
            function e() {
                switch (f.We) {
                    case 1:
                        a(f.vh);
                        break;
                    case 2:
                        b(f.vh);
                        break;
                    default:
                        throw Error("Unexpected state: " + f.We);
                }
            }
            var f = this;
            if (this.fe == null) {
                l.ui(e);
            } else {
                this.fe.push(e);
            }
        };
        b.resolve = f;
        b.reject = function(a) {
            return new b(function(b, e) {
                e(a);
            });
        };
        b.race = function(a) {
            return new b(function(b, e) {
                var g = ba(a);
                for (var k = g.next(); !k.done; k = g.next()) {
                    f(k.value).tf(b, e);
                }
            });
        };
        b.all = function(a) {
            var e = ba(a);
            var g = e.next();
            if (g.done) {
                return f([]);
            } else {
                return new b(function(a, b) {
                    function k(b) {
                        return function(e) {
                            l[b] = e;
                            p--;
                            if (p == 0) {
                                a(l);
                            }
                        };
                    }
                    var l = [];
                    var p = 0;
                    do {
                        l.push(void 0);
                        p++;
                        f(g.value).tf(k(l.length - 1), b);
                        g = e.next();
                    } while (!g.done);
                });
            }
        };
        return b;
    });
    var ja = function() {
        var a = 0;
        return function(b) {
            return "jscomp_symbol_" + (b || "") + a++;
        };
    }();
    m.prototype.Ie = function(a) {
        this.eg = a;
    };
    m.prototype.Xe = function(a) {
        this.Od = {
            kl: a,
            Jl: true
        };
        this.Bc = this.vf || this.Ci;
    };
    m.prototype.return = function(a) {
        this.Od = {
            return: a
        };
        this.Bc = this.Ci;
    };
    r.prototype.Ie = function(a) {
        n(this.na);
        if (this.na.bd) {
            return t(this, this.na.bd.next, a, this.na.Ie);
        }
        this.na.Ie(a);
        return w(this);
    };
    r.prototype.Xe = function(a) {
        n(this.na);
        if (this.na.bd) {
            return t(this, this.na.bd.throw, a, this.na.Ie);
        }
        this.na.Xe(a);
        return w(this);
    };
    da("Math.sign", function(a) {
        if (a) {
            return a;
        } else {
            return function(a) {
                a = Number(a);
                if (a === 0 || isNaN(a)) {
                    return a;
                } else if (0 < a) {
                    return 1;
                } else {
                    return -1;
                }
            };
        }
    });
    var x = function(a) {
        var b = typeof a;
        if (b == "object") {
            if (a) {
                if (a instanceof Array) {
                    return "array";
                }
                if (a instanceof Object) {
                    return "object";
                }
                var e = Object.prototype.toString.call(a);
                if (e == "[object Window]") {
                    return "object";
                }
                if (e == "[object Array]" && typeof a.length == "number") {
                    return "array";
                }
                if (e == "[object Function]" && typeof a.call != "undefined") {
                    return "function";
                }
            } else {
                return "null";
            }
        } else if (b == "function" && typeof a.call == "undefined") {
            return "object";
        }
        return b;
    };
    var y = function(a) {
        return a == null;
    };
    var z = function(a) {
        return typeof a == "undefined";
    };
    var A = function(a) {
        return x(a) == "function";
    };
    var B = function(a) {
        return x(a) == "object";
    };
    var C = function(a) {
        var b = x(a);
        return b == "array" || b == "object" && typeof a.length == "number";
    };
    var D = function(a) {
        return typeof a == "number";
    };
    var E = function(a) {
        return typeof a == "string";
    };
    var F = function(a) {
        return typeof a == "boolean";
    };
    var G = function(a) {
        return Number(a) === a && a % 1 === 0;
    };
    var H = function(a) {
        return Number(a) === a && a % 1 !== 0;
    };
    var qa = function() {
        if (y(window.frameElement) && window.self == window.top) {
            return false;
        } else {
            return true;
        }
    };
    var Aa = function(a) {
        a = a.replace(".cda.mp4", "");
        a = a.replace(".2cda.pl", ".cda.pl");
        a = a.replace(".3cda.pl", ".cda.pl");
        if (-1 < a.indexOf("/upstream")) {
            a = a.replace("/upstream", ".mp4/upstream");
            return "https://" + a;
        } else {
            return "https://" + a + ".mp4";
        }
    };
    var za = function(a) {
        return decodeURIComponent(a);
    };
    var I = function(a, b) {
        return a.indexOf(b) != -1;
    };
    var J = function(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1;
    };
    var K = function(a, b) {
        try {
            var e = b.exec(a);
            if (e && 1 <= e.length) {
                return e[1];
            } else {
                return "";
            }
        } catch (f) {
            return "";
        }
    };
    var wa = function(a) {
        var b = [];
        for (var e = 0; e < a.length; e++) {
            var f = a.charCodeAt(e);
            b[e] = 33 <= f && 126 >= f ? String.fromCharCode(33 + (f + 14) % 94) : String.fromCharCode(f);
        }
        return Aa(b.join(""));
    };
    var ra = function() {
        var a = null;
        try {
            a = window.localStorage || null;
        } catch (b) {}
        return a;
    };
    var sa = function() {
        var a = null;
        try {
            a = window.sessionStorage || null;
        } catch (b) {}
        return a;
    };
    var ta = function() {
        var a = 0;
        var b = 0;
        if (D(window.innerWidth)) {
            a = window.innerWidth;
            b = window.innerHeight;
        } else if (z(document.documentElement) || z(document.documentElement.clientWidth) && z(document.documentElement.clientHeight)) {
            if (!z(document.body) && (!z(document.body.clientWidth) || !z(document.body.clientHeight))) {
                a = document.body.clientWidth;
                b = document.body.clientHeight;
            }
        } else {
            a = document.documentElement.clientWidth;
            b = document.documentElement.clientHeight;
        }
        return {
            width: a,
            height: b
        };
    };
    var ua = function() {
        var a = window.navigator;
        if (z(a) || z(a.userAgent)) {
            return "";
        } else {
            return a.userAgent;
        }
    };
    var ya = function(a) {
        return xa(za(L(a)));
    };
    var va = function() {
        return window.navigator;
    };
    var N = function(a) {
        String.fromCharCode(("Z" >= a ? 11 : 344) >= (c = a.charCodeAt(0) + 22) ? c : c - 11);
        a = a.replace("_XDDD", "");
        a = a.replace("_CDA", "");
        a = a.replace("_ADC", "");
        a = a.replace("_CXD", "");
        a = a.replace("_QWE", "");
        a = a.replace("_Q5", "");
        a = a.replace("_IKSDE", "");
        return ya(L(a));
    };
    var L = function(a) {
        return a.replace(/[a-zA-Z]/g, function(a) {
            return String.fromCharCode(("Z" >= a ? 90 : 122) >= (a = a.charCodeAt(0) + 13) ? a : a - 26);
        });
    };
    var xa = function(a) {
        String.fromCharCode(("Z" >= a ? 82 : 132) >= (c = a.charCodeAt(0) + 11) ? c : c - 55);
        return wa(a);
    };
    var O = function(a) {
        return !I(a, "http") && !I(a, ".mp4") && !I(a, "uggcf://");
    };
    var P = (typeof HTMLElement !== "undefined" ? HTMLElement : Element).prototype;
    P.w = function(a) {
        if (z(this.classList)) {
            this.className = this.className + " " + a;
        } else {
            this.classList.add(a);
        }
    };
    P.D = function(a) {
        if (y(a) || z(a)) {
            this.className = "";
        } else if (z(this.classList)) {
            var b = this.className.split(" ");
            var e = "";
            for (var f = 0; f < b.length; f++) {
                if (a != b[f]) {
                    e += b[f] + " ";
                }
            }
            this.className = e;
        } else {
            this.classList.remove(a);
        }
    };
    P.I = function(a) {
        if (z(this) || this.className.indexOf(a) === -1) {
            return false;
        } else {
            return true;
        }
    };
    P.Af = function() {
        if (!z(this) && A(this.getBoundingClientRect)) {
            return this.getBoundingClientRect();
        } else {
            return false;
        }
    };
    P.Za = function(a) {
        if (!z(this) && !y(this)) {
            this.style.width = a;
        }
    };
    P.Zb = function() {
        if (z(this)) {
            return 0;
        } else {
            return this.offsetWidth;
        }
    };
    P.zh = function(a) {
        if (!z(this) && !y(this)) {
            this.style.height = a;
        }
    };
    P.Qc = function() {
        if (z(this)) {
            return 0;
        } else {
            return this.offsetHeight;
        }
    };
    P.W = function() {
        if (z(this) || z(this.offsetParent) || y(this.offsetParent)) {
            return false;
        } else {
            return true;
        }
    };
    P.m = function() {
        if (!z(this) && !y(this)) {
            this.style.display = "none";
        }
    };
    P.show = function() {
        if (!z(this) && !y(this)) {
            this.style.display = "block";
        }
    };
    P.kk = function() {
        if (!z(this) && !y(this)) {
            this.style.display = "flex";
        }
    };
    P.Ba = function(a) {
        if (!z(this)) {
            this.innerHTML = a;
        }
    };
    P = Q.prototype = {};
    P.vk = function(a) {
        if (this.getState() != this.state.fb) {
            this.view.m(this.view.alert);
            this.controls.enable();
            this.disabled = false;
            if (this.o == null) {
                if (this.P == null) {
                    if (this.da == null) {
                        this.video.pause();
                    } else {
                        this.da.unload();
                    }
                } else {
                    this.P.pause();
                    this.Mh = true;
                }
            } else {
                if (this.h.H()) {
                    this.o.pause();
                    this.o.reset();
                    this.Dn();
                    this.o = null;
                }
                this.yg = true;
                this.Ag = false;
                if (this.nd != null) {
                    window.clearTimeout(this.nd);
                    this.nd = null;
                }
            }
        }
        if (this.O) {
            this.Jd = null;
            this.Ze = false;
            window.clearInterval(this.controls.Ta);
            this.controls.Ta = null;
            this.controls.ag = true;
            var b = this;
            this.controls.Ta = window.setInterval(function() {
                b.controls.af(b.ja.program.start_time_ts, b.ja.program.start_time_format, b.ja.program.end_time_ts, b.ja.program.end_time_format);
            }, 100);
        }
        this.options = a;
        this.ej();
        if (this.ea && -1 < this.ea.indexOf("redefine")) {
            this.Y.Te(false);
            this.Y.Ed(false);
        }
        this.Y.xa();
        this.jc(true);
    };
    P.jc = function(a) {
        if (z(a)) {
            if (J(window.navigator.userAgent, "AppleTV") || this.h.ra()) {
                this.video.setAttribute("x-webkit-airplay", "allow");
            }
            a = false;
            try {
                var b = this.h.Dg();
                if (b != 0 && 4 > parseInt(b)) {
                    a = true;
                }
            } catch (k) {}
            b = this.fullScreen.isEnabled();
            try {
                if (!this.ta() && this.h.ra() && 10 <= parseInt(this.h.Hg()) && !b) {
                    b = true;
                }
            } catch (k) {}
            if (this.h.Kl() || this.h.Ml() || (!!b || !!this.ta()) && (!this.h.$d() || !this.h.El()) && !this.h.$i() && !this.h.Ri() && !this.h.Dl() && !this.h.Gl() && !J(window.navigator.userAgent, "AppleTV") && !a) {
                if (this.Na) {
                    this.autoplay = true;
                }
                this.On();
                this.Pn();
                this.view.m(this.view.contextMenu);
                if (typeof S === "function") {
                    if (!this.L) {
                        a = new S(this.T, this, this.fullScreen);
                        if (a !== null && a !== false) {
                            this.controls = a;
                            this.controls.enable();
                        }
                    }
                } else {
                    throw Error("Failed to load controls class.");
                }
                if (this.h.H() && !this.Na) {
                    this.view.w(this.view.T, "pb-mobile");
                }
                if (this.h.Ga() && !this.Na) {
                    this.view.w(this.view.T, "pb-tv");
                }
                if (this.h.Jf()) {
                    this.view.w(this.view.T, "pb-browser-opera");
                }
                this.i.Fj = T(this.Tb, "dblclick", this.Fj, this);
                this.i.oj = T(this.contextMenu, "click", this.oj, this);
                this.i.Lj = T(this.view.xn, "click", this.Lj, this);
                this.i.Nj = T(this.view.yn, "click", this.Nj, this);
                this.i.tp = T(this.view.wn, "click", this.Mj, this);
                this.i.up = T(this.view.An, "click", this.Mj, this);
                this.i.si = T(this.view.j(".pb-ad-pause-plt-skip"), "click", this.si, this);
                g = this;
                var e = "hidden";
                a = function() {
                    g.ce = !z(window.document[e]) && window.document[e] ? false : true;
                };
                if (e in window.document) {
                    window.document.addEventListener("visibilitychange", a);
                } else if ((e = "mozHidden") in window.document) {
                    window.document.addEventListener("mozvisibilitychange", a);
                } else if ((e = "webkitHidden") in window.document) {
                    window.document.addEventListener("webkitvisibilitychange", a);
                } else if ((e = "msHidden") in window.document) {
                    window.document.addEventListener("msvisibilitychange", a);
                }
                this.ce = !z(window.document[e]) && window.document[e] ? false : true;
                if (!this.h.Ga()) {
                    g = this;
                    var f = false;
                    setInterval(function() {
                        if (!g.Zd && g.wc === null) {
                            if (g.getState() === g.state.ga) {
                                if (0 >= g.currentTime) {
                                    g.controls.F(true);
                                } else {
                                    if (g.networkState() === 2 && 3 > g.readyState()) {
                                        g.controls.F(true);
                                        if (g.jf === false) {
                                            g.$j(true);
                                            g.Mk();
                                        }
                                    } else if (g.networkState() === 1 || 3 <= g.readyState()) {
                                        if (g.da == null) {
                                            if (!g.Vd) {
                                                g.controls.F(false);
                                            }
                                        } else if (!g.Yf) {
                                            g.controls.F(false);
                                        }
                                    }
                                    if (g.video.currentTime < g.currentTime && g.ne === g.state.Sh) {
                                        g.controls.F(true);
                                    }
                                    if (g.video.currentTime > g.currentTime && g.ne === g.state.Wh) {
                                        g.controls.F(true);
                                    }
                                }
                                if (g.o != null && g.Pc && g.autoplay && g.video.paused && !g.controls.ba.W() && !g.controls.U.W() && !g.K) {
                                    g.video.muted = true;
                                    g.video.autoplay = "autoplay";
                                    g.Ab = true;
                                    g.J(0, true);
                                    g.controls.J(0, true);
                                    g.controls.he();
                                    g.o.play();
                                }
                            }
                            if (g.controls !== null) {
                                g.controls.de();
                            }
                        }
                        if (g.getState() === g.state.fb && !!g.ended && !g.K && !g.loop) {
                            g.xi();
                        }
                        if (g.view.oa.I("pb-playing") && g.getState() != g.state.ga && 0 >= g.video.currentTime && !f && !g.controls.ba.W() && g.s != null) {
                            g.s.play();
                            f = true;
                        }
                        try {
                            if (!g.ta()) {
                                g.Ld = g.wg();
                            }
                        } catch (k) {}
                    }, 50);
                }
                if (this.Pi() && this.Og()) {
                    this.Nk();
                }
                if (this.ta()) {
                    if (!this.Ng) {
                        this.dj();
                    }
                }
            } else if (this.video.m(), this.L = true, this.video.controls = true, this.view.D(this.view.T, "pb-controls"), this.view.D(this.view.T, "pb-video-full"), this.view.w(this.view.T, "pb-nocontrols"), this.view.w(this.view.T, "pb-video-native-light"), this.view.m(this.view.j(".pb-play-ico")), this.view.m(this.view.j(".pb-loader-ico")), this.view.m(this.view.j(".pb-video-click")), this.view.m(this.view.j(".pb-vid-click")), this.f.poster && (a = document.createElement("img"), a.src = this.f.poster, a.alt = "poster", this.view.dg.insertBefore(a, this.view.dg.firstChild), this.view.U.show()), this.i.mh = T(this.view.dg, "click", this.mh, this), this.i.Bd = T(this.view.U, "click", this.mh, this), !this.h.Ga()) {
                var g = this;
                setInterval(function() {
                    if (g.getState() === g.state.fb && !!g.ended && !g.K && !g.loop) {
                        g.xi();
                    }
                }, 50);
            }
            if (window.Worker && !this.L) {
                try {
                    var l = new Worker("/js/player_html5/player.worker.js");
                } catch (k) {
                    l = null;
                }
                if (l == null) {
                    this.Ub = window;
                } else {
                    this.Ub = {
                        id: 0,
                        ug: {},
                        setInterval: function(a, b, e) {
                            this.id++;
                            var f = this.id;
                            this.ug[f] = {
                                Di: a,
                                context: e
                            };
                            l.postMessage({
                                command: "interval:start",
                                interval: b,
                                id: f
                            });
                            return f;
                        },
                        ih: function(a) {
                            switch (a.data.message) {
                                case "interval:tick":
                                    if ((a = this.ug[a.data.id]) && a.Di) {
                                        a.Di.apply(a.context);
                                    }
                                    break;
                                case "interval:cleared":
                                    delete this.ug[a.data.id];
                            }
                        },
                        clearInterval: function(a) {
                            l.postMessage({
                                command: "interval:clear",
                                id: a
                            });
                        }
                    };
                    l.onmessage = this.Ub.ih.bind(this.Ub);
                }
            } else {
                this.Ub = window;
            }
        }
        if (!this.h.Ga() || this.h.rd()) {
            if (!this.h.ra() && !this.h.Rg()) {
                this.video.preload = "none";
            }
        }
        if (this.disabled) {
            this.video.preload = "none";
            this.controls.disable();
            if (this.f.duration) {
                this.controls.Ra(Number(this.f.duration));
            }
        } else {
            this.Se();
            if (!this.ea && !this.L) {
                this.Ae();
            }
            if (!this.L && !!this.h.Wi() && !z(this.f.width) && !z(this.f.height)) {
                a = this.f.height / this.f.width * 100;
                if (a < window.screen.height / window.screen.width * 100) {
                    this.view.cg.style["padding-top"] = a + "%";
                    this.view.content.w("pb-playstation-panorama");
                } else {
                    this.view.cg.style.width = window.screen.height / window.screen.width * (this.f.width / this.f.height) * 100 + "%";
                    this.view.content.w("pb-playstation-vertical");
                }
            }
            this.log(this.c, "autoplay: " + this.autoplay);
            if (this.L) {
                this.video.controls = true;
                this.video.src = this.src;
                if (this.autoplay) {
                    this.video.autoplay = true;
                }
                if (!this.h.H() && !this.h.rd()) {
                    this.load();
                    this.log(this.c, "video.load()");
                }
            } else {
                if (!this.O && !this.ac && !this.v.hk.I("pb-quality-posible")) {
                    this.v.hk.w("pb-quality-posible");
                }
                if (this.autoplay) {
                    if (this.h.H()) {
                        if (!this.h.H() && !this.h.rd()) {
                            this.load();
                            this.log(this.c, "video.load()");
                        }
                        this.se();
                        if (this.ea) {
                            this.Y.xa();
                        } else {
                            this.Y.xa();
                            this.ze();
                        }
                    } else if (this.O) {
                        this.rb();
                    } else {
                        if (!this.h.H() && !this.h.rd()) {
                            this.load();
                            this.log(this.c, "video.load()");
                        }
                        if (this.ea) {
                            this.Y.xa();
                        } else {
                            this.Y.xa();
                            this.ze();
                        }
                        this.rb();
                    }
                } else {
                    if (!this.h.H() && !this.h.rd()) {
                        this.load();
                        this.log(this.c, "video.load()");
                    }
                    if (this.ea) {
                        this.Y.xa();
                    } else {
                        this.Y.xa();
                        this.ze();
                    }
                }
            }
            g = this;
            window.onbeforeunload = function() {
                g.Xj = true;
            };
        }
    };
    P.ej = function() {
        if (this.Xa(this.options, "video")) {
            this.f = this.options.video;
        }
        if (this.Xa(this.options, "api")) {
            this.V = this.options.api;
        }
        if (this.Xa(this.options, "ads")) {
            this.b = this.options.ads;
        }
        if (this.Xa(this.options, "id")) {
            this.id = this.options.id;
        }
        if (this.Xa(this.options, "disabled")) {
            this.disabled = this.options.disabled;
        }
        if (this.Xa(this.options, "nextVideo")) {
            this.Oa = this.options.nextVideo;
        }
        if (this.Xa(this.options, "autoplay")) {
            this.ni = this.autoplay = this.options.autoplay;
        }
        if (this.Xa(this.options, "seekTo") && 0 < this.Xa(this.options, "seekTo")) {
            this.Qa = this.options.seekTo;
        }
        if (this.Xa(this.options, "mute")) {
            this.Yg = this.options.mute;
        }
        if (this.Xa(this.options, "widget")) {
            this.ac = true;
        }
        if (this.Xa(this.options, "embed_related_video")) {
            this.Na = true;
        }
        if (this.f.file) {
            if (O(this.f.file)) {
                this.f.file = N(this.f.file);
            }
            if (this.f.file.indexOf("http") == -1) {
                this.f.file = L(this.f.file);
            }
            if (this.f.file.indexOf(".webm") == -1 && this.f.file.indexOf(".mp4") == -1) {
                this.f.file += ".mp4";
            }
        }
        if (this.f.file_cast) {
            if (O(this.f.file_cast)) {
                this.f.file_cast = N(this.f.file_cast);
            }
            if (this.f.file_cast.indexOf("http") == -1) {
                this.f.file_cast = L(this.f.file_cast);
            }
            if (this.f.file_cast.indexOf(".mp4") == -1) {
                this.f.file_cast += ".mp4";
            }
            if (-1 < this.f.file_cast.indexOf("adc.mp4")) {
                this.f.file_cast = this.f.file_cast.replace("adc.mp4", ".mp4");
            }
        }
        if (this.f.file) {
            this.src = this.f.file;
        }
        if (this.f.file_cast) {
            this.Fh = this.f.file_cast;
        }
        if (!y(this.f.manifest) && !z(this.f.manifest)) {
            this.ea = this.f.manifest;
        }
        if (!y(this.f.manifest_drm_proxy) && !z(this.f.manifest_drm_proxy)) {
            this.Sc = this.f.manifest_drm_proxy;
        }
        if (!y(this.f.manifest_drm_header) && !z(this.f.manifest_drm_header)) {
            this.Db = this.f.manifest_drm_header;
        }
        if (!y(this.f.manifest_drm_pr_proxy) && !z(this.f.manifest_drm_pr_proxy)) {
            this.vd = this.f.manifest_drm_pr_proxy;
        }
        if (!y(this.f.manifest_drm_pr_header) && !z(this.f.manifest_drm_pr_header)) {
            this.ud = this.f.manifest_drm_pr_header;
        }
        if (!y(this.f.manifest_apple) && !z(this.f.manifest_apple)) {
            this.Pb = this.f.manifest_apple;
        }
        if (!y(this.f.manifest_drm_apple_certificate) && !z(this.f.manifest_drm_apple_certificate)) {
            this.Kf = this.f.manifest_drm_apple_certificate;
        }
        if (!y(this.f.manifest_drm_apple_license) && !z(this.f.manifest_drm_apple_license)) {
            this.Lf = this.f.manifest_drm_apple_license;
        }
        if (!y(this.f.manifest_audio_stereo_bitrate) && !z(this.f.manifest_audio_stereo_bitrate)) {
            this.Wg = this.f.manifest_audio_stereo_bitrate;
        }
        if (!y(this.f.manifest_forced_audio_hd) && !z(this.f.manifest_forced_audio_hd)) {
            this.Xg = this.f.manifest_forced_audio_hd;
        }
        if (!y(this.f.manifest_auto_quality) && !z(this.f.manifest_auto_quality)) {
            this.Rc = this.f.manifest_auto_quality;
        }
        if (!z(this.f.quality_change_in_player) && this.f.quality_change_in_player) {
            this.Vj = true;
        }
        if (this.Xa(this.options, "tv_live")) {
            this.O = true;
            this.ja = this.options.tv_live.channel;
            this.ka = this.options.tv_live.channels;
        }
        if (this.f.hasOwnProperty("cast_available") && this.f.cast_available != null && this.Y != null) {
            this.Y.Nn(this.f.cast_available);
        }
        if (this.f.poster) {
            this.Bh(this.f.poster);
        }
        if (this.Xa(this.options, "premium") && this.options.premium === true) {
            this.view.w(this.view.td, "pb-logo-premium");
        }
        if (this.Xa(this.options, "cuePoints")) {
            this.xe = this.options.cuePoints;
        }
        if (this.Yb("cda.player.ppst") !== false) {
            var a = this.Yb("cda.player.ppst").split(":");
            if (this.options.video.id == a[0] && this.Ug() === true) {
                this.Qa = Number(a[1]);
                try {
                    document.cookie = "cda.player.ppst=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                } catch (b) {}
            }
        }
    };
    P.Ae = function() {
        this.log(this.c, "initEvents");
        if (!this.hg) {
            for (var a in this.ca) {
                if (this.ca[a] != "") {
                    this.i[this.ca[a]] = this.ca[a] == "contextmenu" ? T(this.view.nc, this.ca[a], this.lc(this.ca[a]), this) : T(this.video, this.ca[a], this.lc(this.ca[a]), this);
                }
            }
            this.hg = true;
        }
    };
    P.Qe = function() {
        this.log(this.c, "removeEvents");
        for (var a in this.ca) {
            if (this.ca[a] != "") {
                if (this.ca[a] == "contextmenu") {
                    U(this.view.nc, this.ca[a], this.i[this.ca[a]]);
                } else {
                    U(this.video, this.ca[a], this.i[this.ca[a]]);
                }
                this.i[this.ca[a]] = null;
            }
        }
        this.hg = false;
    };
    P.lc = function(a) {
        var b = null;
        switch (a) {
            case "play":
                b = this.ee;
                break;
            case "playing":
                b = this.jh;
                break;
            case "pause":
                b = this.kc;
                break;
            case "seeking":
                b = this.lh;
                break;
            case "seeked":
                b = this.kh;
                break;
            case "canplay":
                b = this.dh;
                break;
            case "canplaythrough":
                b = this.Le;
                break;
            case "loadstart":
                b = this.hh;
                break;
            case "loadeddata":
                b = this.fh;
                break;
            case "loadedmetadata":
                b = this.gh;
                break;
            case "error":
                b = this.Me;
                break;
            case "abort":
                b = this.ah;
                break;
            case "stalled":
                b = this.Km;
                break;
            case "suspend":
                b = this.Om;
                break;
            case "volumechange":
                b = this.fn;
                break;
            case "progress":
                b = this.pm;
                break;
            case "durationchange":
                b = this.em;
                break;
            case "ratechange":
                b = this.ym;
                break;
            case "timeupdate":
                b = this.Uc;
                break;
            case "waiting":
                b = this.Pe;
                break;
            case "contextmenu":
                b = this.bm;
                break;
            case "click":
                b = this.Ec;
                break;
            case "ended":
                b = this.Ad;
        }
        return b;
    };
    P.Xa = function(a, b) {
        if (a !== null && typeof a !== "undefined") {
            if (a.hasOwnProperty(b)) {
                return a[b];
            } else {
                return null;
            }
        }
        throw new TypeError("Nie mo\u017Cna pobra\u0107 w\u0142a\u015Bciwo\u015Bci " + b + " obiektu " + a + " poniewa\u017C obiekt jest pusty.");
    };
    P.Za = function(a) {
        if (!isNaN(Number(a))) {
            this.video.Za(a);
        }
    };
    P.zh = function(a) {
        if (!isNaN(Number(a))) {
            this.video.zh(a);
        }
    };
    P.Bh = function(a) {
        this.video.poster = a;
        this.video.setAttribute("poster", a);
    };
    P.To = function() {
        return this.video.poster || this.video.getAttribute("poster");
    };
    P.Xf = function(a) {
        this.log(a);
        if (a) {
            if (this.video.canPlayType("video/mp4")) {
                this.video.src = a;
                this.video.setAttribute("src", a);
            } else {
                a = this.fl();
                if (a !== false) {
                    a.show();
                    this.video.remove();
                    this.controls.ba.m();
                    this.controls.U.m();
                    this.controls.controls.m();
                }
            }
        }
    };
    P.l = function() {
        if (this.P == null) {
            return this.video.currentTime || 0;
        } else {
            return this.P.currentTime() || 0;
        }
    };
    P.Eb = function(a) {
        if (this.ae(a) || this.Hf(a)) {
            this.currentTime = a;
            this.video.currentTime = a;
            if (this.P != null) {
                this.P.currentTime(a);
            }
        }
    };
    P.M = function() {
        if (this.P == null) {
            if (this.zg) {
                return this.l();
            } else {
                return this.video.duration || 0;
            }
        } else {
            return this.P.duration() || 0;
        }
    };
    P.Ii = function() {
        return this.video.getAttribute("src");
    };
    P.Sa = function(a) {
        this.oi = a;
    };
    P.getState = function() {
        return this.oi;
    };
    P.Ah = function(a) {
        this.ki = a;
    };
    P.Ro = function() {
        return this.ki;
    };
    P.Fd = function(a) {
        this.ne = a;
    };
    P.Vo = function() {
        return this.ne;
    };
    P.load = function() {
        this.log(this.c, "load");
        if (this.h.pd() && this.h.Zi() && !this.nb()) {
            if (this.fa || this.sb || this.autoplay) {
                this.Qb();
            } else if (this.o == null && this.P == null) {
                this.video.preload = "metadata";
            }
        } else if (this.o == null && this.P == null) {
            this.video.load();
        }
    };
    P.play = function(a) {
        this.log(this.c, "play");
        this.log(this.c, arguments);
        this.log(this.c, "autoplay: " + this.autoplay);
        window.MediaSource = window.MediaSource || window.WebKitMediaSource;
        if (A(window.MediaSource) || this.h.ra()) {
            if (this.h.be() || this.h.ra()) {
                if (!y(this.Pb) && this.Pb != "" && (this.P == null || !!this.Mh)) {
                    if (this.da == null) {
                        this.Be();
                    }
                }
            } else if (!y(this.ea) && this.ea != "" && (this.o == null || !!this.yg)) {
                if (this.h.If()) {
                    this.Ff();
                } else if (this.da == null || this.O) {
                    this.Be();
                }
            }
        }
        if (!this.L) {
            this.controls.U.m();
        }
        if (!z(a) && a && !this.pa) {
            if (this.h.Ga()) {
                try {
                    this.video.play();
                } catch (b) {}
                this.load();
                this.Sa(this.state.ga);
                this.log(this.c, "video.play()");
            } else {
                this.load();
            }
            this.log(this.c, "video.load()");
            this.Rb = true;
        }
        if (this.o != null && this.o.isReady()) {
            this.o.play();
            this.Sa(this.state.ga);
        } else if (this.P == null) {
            if (this.da == null) {
                if (!this.Rb) {
                    if (this.pa) {
                        if (this.hl || this.o == null) {
                            if (this.autoplay || this.fa || 0 < this.l()) {
                                this.Qb();
                            }
                        } else {
                            this.o.play();
                            this.hl = true;
                            this.Sa(this.state.ga);
                        }
                    } else if (this.$a) {
                        if (this.autoplay || this.fa || 0 < this.l()) {
                            this.Qb();
                        }
                    } else {
                        this.load();
                        this.log(this.c, "video.load()");
                    }
                }
            } else {
                if ((!this.O || this.h.be() || this.h.ra()) && 0 < this.l()) {
                    this.video.play();
                }
                this.Sa(this.state.ga);
            }
        } else {
            this.P.play();
            this.Sa(this.state.ga);
        }
        if (this.view.I(this.view.va, "pb-video-active") === false) {
            this.view.w(this.view.va, "pb-video-active");
        }
    };
    P.ph = function(a) {
        if (this.o == null) {
            if (a !== "undefined") {
                a = a.toString();
                if (-1 < a.indexOf("play() failed because the user didn't interact with the document first")) {
                    this.log(this.c, "video promise - play() failed because the user didn't interact with the document first");
                    this.sb = true;
                } else {
                    this.log(this.c, a);
                }
            }
            if (0 < this.l() && !this.video.paused && !this.video.ended && 2 < this.video.readyState) {
                this.sb = false;
            } else {
                if (this.sb) {
                    this.$a = this.pa = this.Rb = this.autoplay = false;
                }
                this.log(this.c, "video promise error");
                this.Sa(this.state.qc);
                this.controls.qa(true);
                this.controls.F(false);
                if ((this.autoplay || this.ac) && 2 >= this.kb) {
                    this.se();
                }
            }
        }
    };
    P.Qb = function() {
        this.sb = false;
        this.Sa(this.state.ga);
        if (this.o == null && this.P == null) {
            var a = this.video.play();
            var b = this;
            if (!z(a) && !y(a)) {
                a.then(function() {
                    b.Re();
                    if (0 < b.kb) {
                        b.kb = 0;
                    }
                }).catch(this.C.G(this.ph, this));
            }
        } else if (this.o == null) {
            if (this.P != null) {
                this.P.play();
            }
        } else {
            this.o.play();
        }
        this.log(this.c, "video play promise");
    };
    P.pause = function() {
        if (this.getState() !== this.state.qc || !this.video.paused) {
            if (this.o == null && this.P == null) {
                try {
                    this.video.pause();
                } catch (a) {}
            } else {
                if (this.o == null) {
                    if (this.P != null) {
                        this.P.pause();
                    }
                } else {
                    this.o.pause();
                }
                this.controls.qa(true);
            }
            this.Ah(this.getState());
            this.Sa(this.state.qc);
        }
    };
    P.resume = function() {
        if (this.getState() !== this.state.ga) {
            if (this.h.Ga()) {
                try {
                    this.video.pause();
                } catch (a) {}
            }
            if (this.o == null && this.P == null) {
                this.video.play();
            } else {
                if (this.o == null) {
                    if (this.P != null) {
                        this.P.play();
                    }
                } else {
                    this.o.play();
                }
                this.controls.Z(true);
            }
            this.Ah(this.getState());
            this.Sa(this.state.ga);
        }
    };
    P.stop = function() {
        this.pause();
        this.video.src = "";
        this.Ah(this.getState());
        this.Sa(this.state.fb);
        if (this.view.I(this.view.va, "pb-video-active")) {
            this.view.D(this.view.va, "pb-video-active");
        }
    };
    P.cb = function(a) {
        if (!this.K && (!!G(a) || !!H(a)) && !(a > this.M())) {
            this.ge();
            this.controls.F(true);
            if (a > this.l()) {
                this.Fd(this.state.Sh);
            } else {
                this.Fd(this.state.Wh);
            }
            this.log(this.c, "seekTo: " + a);
            this.Eb(a);
            if (this.getState() === this.state.fb) {
                this.Qa = a;
                if (0 >= this.Qa) {
                    this.Fd(-1);
                }
                if (!this.L) {
                    this.controls.Z();
                }
            }
        }
    };
    P.Yj = function(a) {
        if (this.ae(a) || this.Hf(a)) {
            if (this.currentTime + a < this.M()) {
                this.cb(this.currentTime + a);
            } else {
                this.cb(this.M() - 1);
            }
        }
    };
    P.Zj = function(a) {
        if (this.ae(a) || this.Hf(a)) {
            if (0 > this.currentTime - a) {
                this.cb(0);
            } else {
                this.cb(this.currentTime - a);
            }
        }
    };
    P.ic = function() {
        var a = this.ib("vol");
        if (!y(a) && a != "" && (a = Number(a), 0 <= a && 100 >= a)) {
            return a;
        } else {
            return false;
        }
    };
    P.J = function(a, b) {
        a = Number(a);
        if (this.ic() !== false && this.Ab === false) {
            a = this.ic();
        }
        if (!isNaN(a) && 0 <= a) {
            if (this.K) {
                if (this.view.j(".pb-block-video-player") !== null) {
                    this.view.j(".pb-block-video-player").volume = (a / 100).toFixed(2);
                    this.view.j(".pb-block-video-player").muted = false;
                }
                if (this.view.j(".pb-ad-video-player") !== null) {
                    this.view.j(".pb-ad-video-player").volume = (a / 100).toFixed(2);
                    this.view.j(".pb-ad-video-player").muted = false;
                }
            }
            this.volume = a.toFixed(2);
            if (this.volume == 0) {
                this.Sg = true;
            } else {
                this.Sg = false;
                this.video.muted = false;
                if (this.P != null) {
                    this.P.muted(false);
                }
            }
            var e = false;
            if (this.element.I("pb-mobile") || this.element.I("pb-tv")) {
                e = true;
            }
            if (this.h.H() || this.h.Ga() || e) {
                if (0 < this.volume) {
                    this.volume = 100;
                }
                if (0 < a) {
                    this.video.muted = false;
                    if (this.P != null) {
                        this.P.muted(false);
                    }
                } else {
                    this.video.muted = true;
                    if (this.P != null) {
                        this.P.muted(true);
                    }
                }
            }
            try {
                this.video.volume = (this.volume / 100).toFixed(2);
            } catch (f) {}
            if (this.P != null) {
                this.P.volume((this.volume / 100).toFixed(2));
            }
            if (!this.ac && typeof b === "undefined") {
                this.Hn(this.volume, this.Sg);
            }
        }
    };
    P.Hn = function(a, b) {
        if (this.ic() !== false && this.Ab === false) {
            this.Ab = true;
        } else {
            a = {
                volume: a,
                muted: b
            };
            if (this.storage.isEnabled()) {
                this.storage.set("cda-player-volume", a);
            } else if (V.isEnabled()) {
                V.set("cda-player-volume", JSON.stringify(a), 30);
            }
        }
    };
    P.Cf = function() {
        var a = null;
        if (this.storage.isEnabled()) {
            a = this.storage.get("cda-player-volume");
        } else if (V.nl()) {
            a = JSON.parse(V.get("cda-player-volume"));
        }
        if (!y(a) && a.hasOwnProperty("volume") && a.hasOwnProperty("muted")) {
            return a;
        } else {
            return false;
        }
    };
    P.Yo = function() {
        return this.video.gq;
    };
    P.Yg = function() {
        this.video.muted = true;
    };
    P.Wp = function() {
        this.video.muted = false;
    };
    P.Uo = function() {
        return 5;
    };
    P.Ca = function() {
        if (document.pl !== "undefined" && document.pl || document.webkitIsFullScreen !== "undefined" && document.webkitIsFullScreen || document.mozFullScreen !== "undefined" && document.mozFullScreen || document.msFullscreenElement !== "undefined" && document.msFullscreenElement) {
            return true;
        } else {
            return false;
        }
    };
    P.kc = function() {
        if (this.video.paused && !this.L) {
            this.controls.qa();
            if (this.Pi() && 0 < this.l() && this.l() < this.M()) {
                this.bo();
            }
        }
        if (A(window.onPause) && !this.K) {
            window.onPause();
        }
    };
    P.ee = function() {
        this.view.m(this.view.contextMenu);
        if (-1 < this.duration && !this.L) {
            this.controls.Ra(this.duration);
        }
        if (!this.video.paused) {
            if (!this.L) {
                this.controls.Z();
                this.Ki();
            }
            if (this.ended && 12 > this.mf) {
                this.ended = false;
            }
            if (this.Ka !== null) {
                this.mk();
            }
        }
        if (!this.K && !!this.view.content.I("pb-pip-enabled") && !this.view.content.I("pb-frame-posible")) {
            this.view.content.w("pb-frame-posible");
        }
        if (A(window.onPlay) && !this.K) {
            window.onPlay();
        }
    };
    P.jh = function() {
        if (this.ha == -1 && 0 < this.f.duration && this.zc() != 33 && !this.K && this.hb() !== false && (this.Ob() || this.f.type == "premium" || this.f.type == "premium_free")) {
            try {
                var a = this;
                window.$.ajax({
                    url: "//api.cda.pl/h.php?uid=" + this.hb(),
                    type: "post",
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true
                    },
                    data: {
                        currentTime: 0,
                        duration: this.f.duration,
                        test: this.Ob(),
                        server: this.Xd()
                    },
                    success: function() {
                        a.ha = 0;
                    }
                });
            } catch (e) {
                this.log(this.c, e);
            }
        }
        if (this.A != null && !this.K && 0 < this.f.duration) {
            try {
                if (this.A.impression.fired === false) {
                    this.A.impression.fired = true;
                    this.N(this.A.impression.url);
                }
                if (this.A.start.fired === false) {
                    this.A.start.fired = true;
                    this.N(this.A.start.url);
                }
            } catch (e) {
                this.log(this.c, e);
            }
        }
        if (this.jf === true) {
            this.$j(false);
        }
        if (this.fa) {
            this.fa = false;
        }
        if (!this.L) {
            this.view.m(this.controls.ba);
        }
        if (this.getState() !== this.state.ga) {
            this.Sa(this.state.ga);
        }
        if (0 < this.Qa && this.fd === -1 && this.Qa < this.M() && this.o == null && this.P == null && this.da == null) {
            this.cb(this.Qa);
            this.fd = this.Qa;
        }
        if (-1 < this.Uf) {
            var b = this.Uf / 100 * this.M();
            if (0 < b) {
                this.cb(b);
            }
            this.Uf = -1;
        }
    };
    P.ql = function(a) {
        for (var b = 0; b <= this.video.buffered.length - 1; b++) {
            if (this.video.buffered.start(b) <= a && this.video.buffered.end(b) >= a) {
                return b;
            }
        }
        return this.video.buffered.length - 1;
    };
    P.lh = function() {
        this.Yc(true);
        this.ge();
        this.xh = this.l();
        if (3 > this.networkState()) {
            if (!this.L) {
                this.controls.F(true);
            }
        }
    };
    P.kh = function() {
        this.Yc(false);
        this.Fd(-1);
        this.ge();
        if (-1 < this.ha) {
            this.ha = this.l();
        }
        if (this.video.paused) {
            this.resume();
        }
        if (!this.L) {
            this.controls.F(false);
        }
        try {
            var a = this.controls.za.querySelectorAll(".pb-progress-midroll-marker");
            if (!y(a) && 0 < a.length) {
                for (var b = 0; b < a.length; b++) {
                    var e = a[b];
                    if (!y(e) && !y(e.getAttribute("data-time")) && e.getAttribute("data-time") < this.l()) {
                        e.m();
                    }
                }
            }
        } catch (f) {
            this.log(this.c, f);
        }
    };
    P.hh = function() {
        this.log(this.c, "Event", "onLoadstart");
        this.log(this.c, "videoLoaded: " + this.pa);
        this.log(this.c, "videoLoading: " + this.$a);
        this.log(this.c, "startByClick: " + this.fa);
        this.log(this.c, "videoPromiseAutoplayError: " + this.sb);
        if (this.sb) {
            if (!this.controls.ba.W() && !this.controls.U.W()) {
                this.controls.F(true);
            }
            this.se();
        } else {
            if (this.pa) {
                this.pa = false;
            }
            this.$a = true;
            if (this.fa || this.autoplay) {
                this.controls.F(true);
            } else if (!this.view.va.I("pb-ady-player-wait")) {
                this.controls.F(false);
                this.controls.U.show();
            }
        }
    };
    P.gh = function(a) {
        this.log(this.c, "Event", "onLoadedmetadata");
        this.log(this.c, "videoLoaded: " + this.pa);
        this.log(this.c, "videoLoading: " + this.$a);
        this.log(this.c, "startByClick: " + this.fa);
        this.log(this.c, "videoPromiseAutoplayError: " + this.sb);
        if (!z(this.video.duration)) {
            this.duration = isNaN(this.video.duration) ? 0 : this.video.duration;
        }
        if (!this.K && -1 < this.duration && !this.L) {
            this.controls.Ra(this.duration);
            this.Dh();
        }
        if (this.view.Ac(this.view.alert)) {
            this.view.m(this.view.alert);
            this.controls.enable();
        }
        if (this.sb) {
            try {
                if (2 >= a.target.networkState && a.target.readyState === 4 && !this.controls.U.W() && 0 >= this.l()) {
                    this.controls.F(false);
                    this.controls.qa(true);
                }
            } catch (e) {}
        } else if (this.fa || this.Sk || this.Rb) {
            var b = this;
            if (this.$c == null) {
                this.$c = window.setTimeout(function() {
                    window.clearTimeout(b.$c);
                    b.$c = null;
                    if (!b.Sb) {
                        b.Le();
                    }
                }, 2e3);
            }
        }
    };
    P.fh = function(a) {
        this.log(this.c, "Event", "onLoadeddata");
        this.log(this.c, "videoLoaded: true");
        this.log(this.c, "videoLoading: false");
        this.log(this.c, "startByClick: " + this.fa);
        this.log(this.c, "videoPromiseAutoplayError: " + this.sb);
        this.pa = true;
        this.$a = false;
        if (!z(this.video.duration)) {
            this.duration = isNaN(this.video.duration) ? 0 : this.video.duration;
        }
        if (!this.K && -1 < this.duration && !this.L) {
            this.controls.Ra(this.duration);
            this.Dh();
        }
        if (this.view.Ac(this.view.alert)) {
            this.view.m(this.view.alert);
            this.controls.enable();
        }
        if (this.sb) {
            try {
                if (2 >= a.target.networkState && a.target.readyState === 4 && !this.controls.U.W() && 0 >= this.l()) {
                    this.controls.F(false);
                    this.controls.qa(true);
                }
            } catch (e) {}
        } else if (this.fa || this.Sk || this.Rb) {
            var b = this;
            if (this.$c == null) {
                this.$c = window.setTimeout(function() {
                    window.clearTimeout(b.$c);
                    b.$c = null;
                    if (!b.Sb) {
                        b.Le();
                    }
                }, 2e3);
            }
        }
    };
    P.Ad = function() {
        this.log(this.c, "Event", "onEnded");
        this.Sa(this.state.fb);
        this.ended = true;
        if (-1 < this.ha && (this.l() >= this.f.duration || this.l() == this.M()) && 0 < this.f.duration && this.zc() != 33 && !this.K && (this.Ob() || this.f.type == "premium" || this.f.type == "premium_free") && this.hb() !== false) {
            try {
                this.ha = this.f.duration;
                this.log(this.c, "saving watching seconds: " + this.ha);
                window.$.ajax({
                    url: "//api.cda.pl/h.php?uid=" + this.hb(),
                    type: "post",
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true
                    },
                    data: {
                        currentTime: this.ha,
                        duration: this.f.duration,
                        test: this.Ob(),
                        server: this.Xd()
                    },
                    success: function() {}
                });
            } catch (a) {
                this.log(this.c, a);
            }
        }
        if (this.A != null && !this.K && 0 < this.f.duration) {
            try {
                if (this.l() >= this.f.duration || this.l() == this.M() && this.A.complete.fired === false) {
                    this.A.complete.fired = true;
                    this.N(this.A.complete.url);
                }
            } catch (a) {
                this.log(this.c, a);
            }
        }
        if (this.loop) {
            this.play();
        } else {
            this.Ue();
        }
    };
    P.Me = function(a) {
        window.MediaSource = window.MediaSource || window.WebKitMediaSource;
        if ((y(this.ea) || this.ea == "" || !A(window.MediaSource) && !this.h.ra()) && !this.Xj && !this.K) {
            this.log(this.c, "Event", "onError");
            if (!y(a) && !z(a.target)) {
                this.log(this.c, "networkState: " + a.target.networkState);
                this.log(this.c, "readyState: " + a.target.readyState);
                try {
                    if (a.target.networkState == 2 && a.target.readyState == 4 && !this.controls.ba.W()) {
                        this.video.play();
                        this.log(this.c, "video.play()");
                        return;
                    }
                } catch (e) {
                    this.log(this.c, "error: " + e);
                }
            }
            if (a.target.networkState === 3) {
                this.view.show(this.view.alert);
                this.view.pb(this.view.Wa, "404 Not found: Nie znaleziono podanego wideo");
                if (!this.L) {
                    this.controls.disable();
                }
                if (!z(this.V.client) && !y(this.V.client)) {
                    try {
                        window[this.V.client].fileNotFound(this.src, {
                            fo: this.log,
                            error: this.log
                        });
                    } catch (e) {}
                }
                if (-1 < this.ha && 0 < this.l()) {
                    a = window.location.href;
                    var b = Math.floor(this.l());
                    if (-1 < window.location.href.indexOf("?")) {
                        if (this.ib("t") == null) {
                            a += "&t=" + b;
                        } else {
                            a = new URL(a);
                            a.searchParams.set("t", b);
                            a = a.toString();
                        }
                    } else {
                        a += "?t=" + b;
                    }
                    window.location.href = a;
                }
            } else {
                b = -1;
                if (this.video.error != null && typeof this.video.error.code !== "undefined") {
                    b = this.video.error.code;
                    if (b == 3) {
                        return;
                    }
                    if (!this.L) {
                        this.controls.disable();
                    }
                }
                if (-1 < b) {
                    if (b == 2 && a.target.networkState === 1 && -1 < this.ha && 0 < this.l()) {
                        a = window.location.href;
                        b = Math.floor(this.l());
                        if (-1 < window.location.href.indexOf("?")) {
                            if (this.ib("t") == null) {
                                a += "&t=" + b;
                            } else {
                                a = new URL(a);
                                a.searchParams.set("t", b);
                                a = a.toString();
                            }
                        } else {
                            a += "?t=" + b;
                        }
                        window.location.href = a;
                    } else {
                        switch (b) {
                            case 1:
                                if (100 > this.video.currentTime) {
                                    this.view.show(this.view.alert);
                                    this.view.pb(this.view.Wa, "Wyst\u0105pi\u0142 b\u0142\u0105d podczas odtwarzania. Od\u015Bwie\u017C stron\u0119 i spr\xF3buj ponownie.<br>(error code: P1032)");
                                }
                                break;
                            case 2:
                                if (100 > this.video.currentTime) {
                                    this.view.show(this.view.alert);
                                    this.view.pb(this.view.Wa, "Wyst\u0105pi\u0142 b\u0142\u0105d podczas odtwarzania. Od\u015Bwie\u017C stron\u0119 i spr\xF3buj ponownie.<br>(error code: P1031)");
                                }
                                break;
                            case 3:
                                this.view.show(this.view.alert);
                                this.view.pb(this.view.Wa, "Wyst\u0105pi\u0142 b\u0142\u0105d przegl\u0105darki. Od\u015Bwie\u017C stron\u0119 i spr\xF3buj ponownie.<br>(error code: P1030)");
                                break;
                            case 4:
                                this.view.show(this.view.alert);
                                this.view.pb(this.view.Wa, "Format wideo jest nieobs\u0142ugiwany.");
                        }
                    }
                }
            }
        }
    };
    P.Km = function(a) {
        this.log(this.c, "Event", "onStalled");
        this.log(this.c, "networkState: " + a.target.networkState);
        this.log(this.c, "readyState: " + a.target.readyState);
        return false;
    };
    P.ah = function() {};
    P.Om = function() {};
    P.dh = function(a) {
        this.log(this.c, "Event", "onCanplay");
        this.log(this.c, "startLoading: " + this.Rb);
        this.log(this.c, "videoCanPlay: " + this.Sb);
        this.log(this.c, "startByClick: " + this.fa);
        this.log(this.c, "videoPromiseAutoplayError: " + this.sb);
        if (this.sb) {
            try {
                if (2 >= a.target.networkState && a.target.readyState === 4 && !this.controls.U.W() && 0 >= this.l()) {
                    this.controls.F(false);
                    this.controls.qa(true);
                }
            } catch (b) {}
        } else {
            if (this.$a) {
                this.$a = false;
            }
            if (!this.L && (!!this.h.H() || !this.K)) {
                if (!this.autoplay) {
                    this.Sb = true;
                }
                if (this.Rb) {
                    this.Rb = false;
                }
                if (this.fa) {
                    this.fa = false;
                }
                if (!y(this.video) && !!this.video.paused && (!!this.controls.ba.W() || !this.Sb || this.getState() == this.state.ga)) {
                    this.Sb = true;
                    if (!this.autoplay && this.nb()) {
                        this.controls.F(false);
                        this.controls.qa(true);
                    } else {
                        this.Qb();
                    }
                }
            }
        }
    };
    P.Le = function(a) {
        this.log(this.c, "Event", "onCanplaythrough");
        this.log(this.c, "startLoading: " + this.Rb);
        this.log(this.c, "startByClick: " + this.fa);
        this.log(this.c, "videoCanPlay: " + this.Sb);
        this.log(this.c, "videoPromiseAutoplayError: " + this.sb);
        if (!y(a) && !z(a.target)) {
            this.log(this.c, "networkState: " + a.target.networkState);
            this.log(this.c, "readyState: " + a.target.readyState);
        }
        if (this.sb) {
            try {
                if (2 >= a.target.networkState && a.target.readyState === 4 && !this.controls.U.W() && 0 >= this.l()) {
                    this.controls.F(false);
                    this.controls.qa(true);
                }
            } catch (b) {}
        } else {
            if (this.$a) {
                this.$a = false;
            }
            if (!this.L && (!!this.h.H() || !this.K)) {
                if (!this.autoplay) {
                    this.Sb = true;
                }
                if (this.Rb) {
                    this.Rb = false;
                }
                if (this.fa) {
                    this.fa = false;
                }
                if (!y(this.video) && !!this.video.paused && (!!this.controls.ba.W() || !this.Sb || this.getState() == this.state.ga)) {
                    this.Sb = true;
                    if (!this.autoplay && this.nb()) {
                        this.controls.F(false);
                        this.controls.qa(true);
                    } else {
                        this.Qb();
                    }
                }
            }
        }
    };
    P.fn = function() {};
    P.ym = function() {};
    P.em = function() {};
    P.Pe = function() {
        try {
            var a = (new Date).getHours();
            if (!this.kg && this.Ug() == 0 && 16 <= a && 2 <= this.hf && this.li === false) {
                this.li = true;
                this.view.Tf.D("pb-context-wrapp-hide");
                this.view.Tf.w("pb-context-wrapp-show");
            }
        } catch (b) {}
        if (A(window.onWaiting) && !this.K) {
            window.onWaiting();
        }
    };
    P.On = function() {
        if (0 < this.contextMenu.offsetHeight && this.Sd === -1) {
            this.Sd = this.contextMenu.offsetHeight;
        }
    };
    P.Pn = function() {
        if (0 < this.contextMenu.offsetWidth && this.Td === -1) {
            this.Td = this.contextMenu.offsetWidth;
        }
    };
    P.bm = function(a) {
        a = a || window.event;
        if (this.view.contextMenu.style.display == "block") {
            this.view.m(this.view.contextMenu);
        } else {
            if (0 < this.view.contextMenu.offsetHeight && this.Sd === -1) {
                this.Sd = this.view.contextMenu.offsetHeight;
            }
            if (0 < this.view.contextMenu.offsetWidth && this.Td === -1) {
                this.Td = this.view.contextMenu.offsetWidth;
            }
            var b = this.Td + a.offsetX > this.view.Tb.offsetWidth ? this.view.Tb.offsetWidth - this.Td : a.offsetX;
            var e = this.Sd + a.offsetY > this.view.Tb.offsetHeight ? this.view.Tb.offsetHeight - this.Sd : a.offsetY;
            this.view.contextMenu.style.top = e + "px";
            this.view.contextMenu.style.left = b + "px";
            if (!this.ta()) {
                if (window.document.querySelector("#tv-player-stats") != null) {
                    this.view.contextMenu.querySelector('[item="4"]').show();
                }
            }
            this.view.show(this.view.contextMenu);
        }
        a.preventDefault();
    };
    P.oj = function(a) {
        switch (parseInt(a.target.parentNode.getAttribute("item"))) {
            case 1:
                a = document.createElement("div");
                var b = document.createRange();
                a.style.position = "absolute";
                a.style.left = "-1000px";
                a.style.top = "-1000px";
                a.innerHTML = "https://www.cda.pl/video/" + this.f.id;
                document.body.appendChild(a);
                b.selectNodeContents(a);
                var e = window.getSelection();
                e.removeAllRanges();
                e.addRange(b);
                try {
                    document.execCommand("copy");
                } catch (f) {}
                delete a;
                break;
            case 2:
                a = document.createElement("input");
                b = "";
                if (this.Ee()) {
                    b = "https://ebd.cda.pl/620x368/" + this.f.id;
                } else if (this.Gf()) {
                    b = window.location.origin + window.location.pathname + "?iframe";
                }
                a.style.position = "absolute";
                a.style.left = "-1000px";
                a.style.top = "-1000px";
                a.type = "text";
                a.setAttribute("value", '<iframe src="' + b + '" width="620" height="368" style="border:none;" scrolling="no" allowfullscreen name="v2" allow="encrypted-media"></iframe>');
                document.body.appendChild(a);
                a.select();
                try {
                    document.execCommand("copy");
                } catch (f) {}
                delete a;
                break;
            case 3:
                if (this.getState() === this.state.ga) {
                    this.pause();
                }
                b = "";
                if (this.Ee()) {
                    b = "http://www.cda.pl/kontakt";
                } else if (this.Gf()) {
                    b = "http://superfilm.pl/kontakt";
                }
                if (b != "") {
                    window.open(b, "_blank").focus();
                }
                break;
            case 4:
                if (this.view.Ac(window.document.querySelector("#tv-player-stats"))) {
                    window.document.querySelector("#tv-player-stats").m();
                    this.view.contextMenu.querySelector('[item="4"]').innerHTML = "<a>Poka\u017C statystyki</a>";
                } else {
                    window.document.querySelector("#tv-player-stats").show();
                    this.view.contextMenu.querySelector('[item="4"]').innerHTML = "<a>Ukryj statystyki</a>";
                }
        }
        if (this.view.Ac(this.view.contextMenu)) {
            this.view.m(this.view.contextMenu);
        }
    };
    P.pm = function() {};
    P.Uc = function() {
        try {
            if (A(window.onVideoTimeUpdate)) {
                window.onVideoTimeUpdate(this.l());
            }
        } catch (g) {}
        if (!this.Vd && this.o != null || !this.Yf && this.da != null) {
            if (this.video.networkState === 2 && 3 > this.video.readyState) {
                this.controls.F(true);
            } else if (this.video.networkState === 1 || 3 <= this.video.readyState) {
                this.controls.F(false);
            }
        }
        if (this.getState() === this.state.ga && this.controls.U.W()) {
            this.controls.Z(true);
        }
        if (this.getState() === this.state.ga && !this.controls.wb.I("pb-play-pause")) {
            this.controls.wb.w("pb-play-pause");
        }
        var a = 600;
        if (this.f.hasOwnProperty("duration") && this.f.duration != null && 0 < this.f.duration && 600 >= this.f.duration) {
            a = 60;
        }
        if (this.l() >= a && this.me === false) {
            this.vn();
        }
        if (!y(this.xe)) {
            for (a = 0; a < this.xe.length; a++) {
                var b = this.xe[a];
                if (!y(b) && b.hasOwnProperty("time") && b.hasOwnProperty("id") && this.l() >= b.time && !b.fire) {
                    this.xe[a].fire = true;
                    if (!!this.Gf() && !z(this.V.client) && !y(this.V.client)) {
                        window[this.V.client].pixel(b.id, "pc", {
                            fo: this.log,
                            error: this.log
                        });
                    }
                }
            }
        }
        if (this.O && -1 < this.ha && this.l() >= this.ha + 10) {
            try {
                this.ha = Math.round(this.l());
                this.log(this.c, "tv watching - request_id: " + this.options.request_id + ", ct: " + this.ha);
                var e = this;
                window.$.ajax({
                    url: "//api.cda.pl/htv.php?uid=" + this.hb(),
                    type: "post",
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true
                    },
                    data: {
                        request_id: this.options.request_id,
                        channel_id: this.options.tv_live.channel_id,
                        channel_url: this.ja.url
                    },
                    success: function() {}
                });
            } catch (g) {
                this.log(this.c, g);
            }
        }
        if (-1 < this.ha && this.l() >= this.ha + 10 && 0 < this.f.duration && this.zc() != 33 && !this.K && (this.Ob() || this.f.type == "premium" || this.f.type == "premium_free") && this.hb() !== false) {
            try {
                this.ha = Math.round(this.l());
                this.log(this.c, "saving watching seconds: " + this.ha);
                window.$.ajax({
                    url: "//api.cda.pl/h.php?uid=" + this.hb(),
                    type: "post",
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true
                    },
                    data: {
                        currentTime: this.ha,
                        duration: this.f.duration,
                        test: this.Ob(),
                        server: this.Xd()
                    },
                    success: function() {}
                });
            } catch (g) {
                this.log(this.c, g);
            }
            if (this.yi === false && (this.f.type == "premium" || this.f.type == "premium_free") && this.hb() == 114184580) {
                this.yi = true;
                try {
                    e = this;
                    window.$.ajax({
                        url: "//api.cda.pl/cl.php?uid=" + this.hb(),
                        type: "post",
                        crossDomain: true,
                        xhrFields: {
                            withCredentials: true
                        },
                        success: function() {},
                        error: function(a) {
                            if (a && a.status == 429) {
                                if (e.o == null) {
                                    e.pause();
                                } else {
                                    e.o.reset();
                                }
                                e.view.show(e.view.alert);
                                e.view.pb(e.view.Wa, "Zbyt wiele os\xF3b (3) korzysta z Twojego konta.");
                                e.controls.disable();
                                e.disabled = true;
                            }
                        }
                    });
                } catch (g) {
                    this.log(this.c, g);
                }
            }
        }
        if (this.A != null && !this.K && 0 < this.f.duration) {
            try {
                if (0 < Math.floor(this.l()) && this.l() < this.M()) {
                    var f = Math.floor(this.l() / this.M() * 100);
                    if (25 <= f && this.A.firstQuartile.fired === false) {
                        this.A.firstQuartile.fired = true;
                        this.N(this.A.firstQuartile.url);
                    } else if (50 <= f && this.A.midpoint.fired === false) {
                        this.A.midpoint.fired = true;
                        this.N(this.A.midpoint.url);
                    } else if (75 <= f && this.A.thirdQuartile.fired === false) {
                        this.A.thirdQuartile.fired = true;
                        this.N(this.A.thirdQuartile.url);
                    }
                    if (60 <= this.l() && this.A.video60sec.fired === false) {
                        this.A.video60sec.fired = true;
                        this.N(this.A.video60sec.url);
                    } else if (120 <= this.l() && this.A.video120sec.fired === false) {
                        this.A.video120sec.fired = true;
                        this.N(this.A.video120sec.url);
                    } else if (180 <= this.l() && this.A.video180sec.fired === false) {
                        this.A.video180sec.fired = true;
                        this.N(this.A.video180sec.url);
                    } else if (240 <= this.l() && this.A.video240sec.fired === false) {
                        this.A.video240sec.fired = true;
                        this.N(this.A.video240sec.url);
                    } else if (300 <= this.l() && this.A.video300sec.fired === false) {
                        this.A.video300sec.fired = true;
                        this.N(this.A.video300sec.url);
                    } else if (360 <= this.l() && this.A.video360sec.fired === false) {
                        this.A.video360sec.fired = true;
                        this.N(this.A.video360sec.url);
                    } else if (420 <= this.l() && this.A.video420sec.fired === false) {
                        this.A.video420sec.fired = true;
                        this.N(this.A.video420sec.url);
                    } else if (480 <= this.l() && this.A.video480sec.fired === false) {
                        this.A.video480sec.fired = true;
                        this.N(this.A.video480sec.url);
                    } else if (540 <= this.l() && this.A.video540sec.fired === false) {
                        this.A.video540sec.fired = true;
                        this.N(this.A.video540sec.url);
                    } else if (600 <= this.l() && this.A.video600sec.fired === false) {
                        this.A.video600sec.fired = true;
                        this.N(this.A.video600sec.url);
                    }
                    try {
                        if (this.f.id == "4125787e0") {
                            if (193 <= this.l() && this.A.video193sec.fired === false) {
                                this.A.video193sec.fired = true;
                                this.N(this.A.video193sec.url);
                            } else if (220 <= this.l() && this.A.video220sec.fired === false) {
                                this.A.video220sec.fired = true;
                                this.N(this.A.video220sec.url);
                            }
                        }
                        if (this.f.id == "412582640" && 148 <= this.l() && this.A.video148sec.fired === false) {
                            this.A.video148sec.fired = true;
                            this.N(this.A.video148sec.url);
                        }
                        if (this.f.id == "412584104") {
                            if (50 <= this.l() && this.A.video50sec.fired === false) {
                                this.A.video50sec.fired = true;
                                this.N(this.A.video50sec.url);
                            } else if (115 <= this.l() && this.A.video115sec.fired === false) {
                                this.A.video115sec.fired = true;
                                this.N(this.A.video115sec.url);
                            } else if (122 <= this.l() && this.A.video122sec.fired === false) {
                                this.A.video122sec.fired = true;
                                this.N(this.A.video122sec.url);
                            }
                        }
                        if (this.f.id == "4125850f4" && 54 <= this.l() && this.A.video54sec.fired === false) {
                            this.A.video54sec.fired = true;
                            this.N(this.A.video54sec.url);
                        }
                        if (this.f.id == "41258896e") {
                            if (229 <= this.l() && this.A.video229sec.fired === false) {
                                this.A.video229sec.fired = true;
                                this.N(this.A.video229sec.url);
                            } else if (247 <= this.l() && this.A.video247sec.fired === false) {
                                this.A.video247sec.fired = true;
                                this.N(this.A.video247sec.url);
                            } else if (253 <= this.l() && this.A.video253sec.fired === false) {
                                this.A.video253sec.fired = true;
                                this.N(this.A.video253sec.url);
                            }
                        }
                    } catch (g) {
                        this.log(this.c, g);
                    }
                }
            } catch (g) {
                this.log(this.c, g);
            }
        }
    };
    P.fm = function() {
        if (!this.L) {
            var a = this.fullScreen.Ca();
            if (!a && !y(this.fullScreen.element())) {
                a = true;
            }
            this.controls.Ca = a;
            this.controls.Sn(a);
            if (a) {
                if (!z(window.screen.orientation)) {
                    try {
                        if (window.screen.orientation.type.indexOf("landscape") === -1 && this.f.height < this.f.width) {
                            window.screen.orientation.lock("landscape-primary");
                        }
                    } catch (e) {
                        this.log(this.c, e);
                    }
                }
                this.controls.ck(true);
                try {
                    if (!this.L && this.h.Wi() && !z(this.f.width) && !z(this.f.height)) {
                        var b = this.f.height / this.f.width * 100;
                        if (b < window.screen.height / window.screen.width * 100) {
                            this.view.cg.style["padding-top"] = b + "%";
                            this.view.content.w("pb-playstation-panorama");
                        } else {
                            this.view.cg.style.width = window.screen.height / window.screen.width * (this.f.width / this.f.height) * 100 + "%";
                            this.view.content.w("pb-playstation-vertical");
                        }
                    }
                } catch (e) {}
            } else {
                this.controls.ck(false);
                if (!z(window.screen.orientation)) {
                    try {
                        window.screen.orientation.unlock();
                    } catch (e) {
                        this.log(this.c, e);
                    }
                }
                if (this.h.H()) {
                    this.controls.dc();
                }
                if (!this.L) {
                    this.controls.Eh();
                }
                this.video.setAttribute("webkit-playsinline", "true");
                this.video.setAttribute("playsinline", "true");
            }
        }
    };
    P.gm = function() {
        if (!this.L) {
            if (this.view.va.I("pb-video-fullscreen") && !this.fullScreen.is()) {
                this.view.va.D("pb-video-fullscreen");
                if (!this.L) {
                    this.controls.Eh();
                }
            }
            this.controls.Rn();
        }
    };
    P.Ec = function() {
        if (this.view.Ac(this.view.contextMenu)) {
            this.view.m(this.view.contextMenu);
        } else if (!(0 >= this.l()) && this.Ka === null) {
            if (this.h.H() && !this.L && this.controls.Ca) {
                if (this.controls.T.I("pb-nocontrols")) {
                    this.controls.T.D("pb-nocontrols");
                    var a = this;
                    clearTimeout(this.controls.Va);
                    this.controls.Va = setTimeout(function() {
                        a.controls.T.w("pb-nocontrols");
                    }, 3e3);
                } else if (this.getState() === this.state.ga) {
                    this.pause();
                    clearTimeout(this.controls.Va);
                    this.controls.Va = null;
                } else if (this.getState() === this.state.qc) {
                    this.resume();
                    a = this;
                    clearTimeout(this.controls.Va);
                    this.controls.Va = setTimeout(function() {
                        a.controls.T.w("pb-nocontrols");
                    }, 3e3);
                }
            } else if (this.getState() === this.state.ga) {
                this.pause();
            } else if (this.getState() === this.state.qc) {
                this.resume();
            }
        }
    };
    P.Rj = function() {};
    P.Fj = function() {
        if (this.Ka === null) {
            this.controls.Qf();
        }
    };
    P.Se = function() {
        this.log(this.c, "setVideoFile");
        if (!this.src) {
            this.pa = false;
            this.view.show(this.view.td);
            if (this.h.ra() && this.L) {
                this.view.m(this.view.td);
            }
            if (!this.L) {
                this.controls.Wc(0);
            }
            window.MediaSource = window.MediaSource || window.WebKitMediaSource;
            if (y(this.ea) || this.ea == "" || !A(window.MediaSource) && !this.h.ra()) {
                this.view.show(this.view.alert);
                this.view.pb(this.view.Wa, "Aby obejrze\u0107 ten materia\u0142 zaaktualizuj lub zainstaluj najnowsz\u0105 przegl\u0105dark\u0119.");
                if (!this.L) {
                    this.controls.disable();
                }
            }
            if (!this.L) {
                this.v.show(this.controls.a);
            }
        } else if (this.Ii() !== this.src) {
            this.log(this.c, "setSrc");
            this.pa = false;
            this.view.show(this.view.td);
            if (this.h.ra() && this.L) {
                this.view.m(this.view.td);
            }
            if (!this.L) {
                this.controls.Wc(0);
            }
            window.MediaSource = window.MediaSource || window.WebKitMediaSource;
            if (y(this.ea) || this.ea == "" || !A(window.MediaSource) && !this.h.ra()) {
                if (this.src) {
                    this.Xf(this.src);
                    this.video.pause();
                } else {
                    this.view.show(this.view.alert);
                    this.view.pb(this.view.Wa, "Aby obejrze\u0107 ten materia\u0142 zaaktualizuj lub zainstaluj najnowsz\u0105 przegl\u0105dark\u0119.");
                    if (!this.L) {
                        this.controls.disable();
                    }
                }
            }
            if (!this.L) {
                this.v.show(this.controls.a);
            }
        }
        this.log(this.c, "autoplay: " + this.autoplay);
    };
    P.rb = function() {
        this.log(this.c, "startVideo");
        this.controls.he();
        if (A(window.startVideo)) {
            window.startVideo();
        }
        window.MediaSource = window.MediaSource || window.WebKitMediaSource;
        if (y(this.Pb) || this.Pb == "" || !A(window.MediaSource) && !this.h.ra() || !this.h.be() && !this.h.ra()) {
            if (!y(this.ea) && this.ea != "" && A(window.MediaSource)) {
                if (this.h.If()) {
                    this.Ff();
                } else {
                    this.Be();
                }
            } else {
                if (this.src && this.Ii() !== this.src) {
                    this.Se();
                }
                if (this.Rb) {
                    this.play();
                } else {
                    this.play(true);
                }
                this.Sb = this.fa = true;
                if (this.getState() != this.state.ga) {
                    this.Qb();
                }
            }
        } else {
            this.Be();
        }
        if (!this.L) {
            this.controls.Ra(this.M());
            this.controls.enable();
        }
        if (this.K) {
            this.K = false;
        }
        this.ze();
        this.log(this.c, "autoplay: " + this.autoplay);
    };
    P.fl = function() {
        var a = this.T.querySelector(".pb-video-player-noise");
        if (a !== "undefined" && a && (a.width = this.Tb.Zb() ? this.Tb.Zb() : 0, a.height = this.Tb.Qc() ? this.Tb.Qc() : 0, 0 < a.Zb() && 0 < a.Qc())) {
            var b = a.getContext("2d");
            var e = b.createImageData(b.canvas.width, b.canvas.height);
            var f = new Uint32Array(e.data.buffer);
            var g = f.length;
            for (var l = 0; l < g;) {
                f[l++] = (255 * Math.random() | 0) << 24;
            }
            b.putImageData(e, 0, 0);
            return a;
        }
        return false;
    };
    P.readyState = function() {
        return this.video.readyState;
    };
    P.networkState = function() {
        return this.video.networkState;
    };
    P.Hi = function() {
        var a = navigator.userAgent.toLowerCase();
        if (a.indexOf("iphone") !== -1 || a.indexOf("ipod") !== -1 || a.indexOf("ipad") !== -1) {
            return "ios";
        } else if (a.indexOf("android") === -1) {
            return "pc";
        } else {
            return "android";
        }
    };
    P.Dg = function() {
        var a = navigator.userAgent.match(/Android\s([0-9\.]*)/);
        if (a) {
            return a[1];
        } else {
            return false;
        }
    };
    P.Mo = function() {
        if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
            var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            return (parseInt(a[1], 10) + "." + parseInt(a[2], 10) + "." + parseInt(a[3] || 0, 10)).toString();
        }
    };
    P.bp = function() {
        var a = navigator.userAgent;
        return -1 < a.indexOf("Mozilla/5.0") && -1 < a.indexOf("Android ") && -1 < a.indexOf("Version/") && -1 < a.indexOf("AppleWebKit");
    };
    P.yh = function(a, b, e, f) {
        var g = new Date;
        if (e != null) {
            if (f) {
                g.setHours(g.getHours() + e);
            } else {
                g.setDate(g.getDate() + e);
            }
        }
        try {
            document.cookie = a + "=" + escape(b) + (e == null ? "" : ";expires=" + g.toGMTString());
        } catch (l) {}
    };
    P.Yb = function(a) {
        try {
            var b = document.cookie.split(";");
        } catch (l) {
            b = [];
        }
        for (var e = 0; e < b.length; e++) {
            var f = b[e].substr(0, b[e].indexOf("="));
            var g = b[e].substr(b[e].indexOf("=") + 1);
            f = f.replace(/^\s+|\s+$/g, "");
            if (f == a) {
                return unescape(g);
            }
        }
        return false;
    };
    P.qd = function(a) {
        if (this.Yb(a) === false) {
            return false;
        } else {
            return true;
        }
    };
    P.cj = function() {
        var a = document.getElementsByTagName("head")[0] || document.head || document.documentElement;
        var b = document.createElement("script");
        b.async = true;
        b.type = "text/javascript";
        b.src = window.location.host == "m.cda.pl" ? "//m.cda.pl/adx.js" : "//www.cda.pl/adx.js";
        a.insertBefore(b, a.firstChild);
        a.appendChild(b);
        this.fi = true;
    };
    P.nb = function() {
        if (!this.fi) {
            this.cj();
        }
        if (this.h.H()) {
            this.ff = false;
        }
        if (this.ta() && typeof window.adblock == "undefined") {
            this.ff = true;
        }
        if (typeof window.adbloczek === "undefined") {
            this.ff = true;
        }
        return this.ff;
    };
    P.log = function(a, b, e) {
        if (!(2 > arguments.length)) {
            if (arguments.length === 3) {
                console.log(a + "[" + b + "]: " + JSON.stringify(e));
            } else if (arguments.length === 2) {
                console.log(a + ": " + JSON.stringify(b));
            }
        }
    };
    P.wg = function() {
        var a = this.T.getBoundingClientRect();
        var b = window.innerHeight || document.documentElement.clientHeight;
        var e = window.innerWidth || document.documentElement.clientWidth;
        return 0 < a.bottom && a.top < b && 0 < a.right && a.left < e || document.body.scrollTop === 0;
    };
    P.qp = function() {
        var a = this;
        var b = setInterval(function() {
            a.yd = typeof window.nextVideoEnabled !== "undefined" && window.nextVideoEnabled ? true : false;
            if (a.yd && a.ended && a.Ka === null && a.bc === false) {
                clearInterval(b);
                b = null;
                a.Ue();
            } else if (!a.ended) {
                clearInterval(b);
                b = null;
            }
        }, 50);
    };
    P.Ue = function() {
        this.log(this.c, "startNextVideo");
        if (this.K) {
            this.K = false;
        }
        if (this.loop) {
            this.play();
        } else if (this.L || (this.video.paused ? this.controls.qa(true) : this.controls.qa()), this.h.H() && (this.Sb = this.pa = false), this.Oa) {
            this.controls.vb(true);
            if (this.Ee()) {
                this.vg();
                if (this.yd) {
                    if (!this.ce && this.Ka === null && (this.fullScreen.Lb(), !this.bc)) {
                        this.bc = true;
                        if (this.h.Ga()) {
                            window.location.replace(this.ye());
                        } else {
                            window.location.href = this.ye();
                        }
                        return;
                    }
                    if (!this.L) {
                        if (this.controls.isEnabled()) {
                            this.controls.disable();
                        }
                    }
                    this.view.zd.show();
                    this.view.fj.href = this.ye(true);
                    this.view.fj.title = this.Oa.title;
                    this.view.Ul.innerHTML = this.Oa.title;
                    this.view.Tl.src = this.Oa.thumb;
                    this.view.xd.setAttribute("stroke-dashoffset", this.Nf);
                    if (this.L) {
                        this.view.m(this.view.j(".pb-next-timer-wrapper"));
                        this.view.show(this.view.j(".pb-ie-next-loader"));
                        this.view.j(".pb-ie-next-loader-progress").style.width = "0%";
                    }
                    if (-1 < window.location.href.indexOf("dlugiczasprzewijania")) {
                        this.$g = 1e3;
                    }
                    var a = this;
                    var b = 1e3 * this.$g / parseInt(this.Nf);
                    if (this.L) {
                        b = 1e3 * this.$g / 100;
                    }
                    this.view.Sl.addEventListener("click", function() {
                        if (!a.L) {
                            a.controls.enable();
                        }
                        a.yd = false;
                        a.Zg = true;
                        a.bc = false;
                        a.controls.F(false);
                        if (!a.L) {
                            if (a.video.paused) {
                                a.controls.qa(true);
                            } else {
                                a.controls.qa();
                            }
                        }
                    }, false);
                    if (this.Ka === null) {
                        this.Ka = this.Ub.setInterval(function() {
                            if (a.yd == 0) {
                                a.mk();
                            }
                            if (a.wg()) {
                                if (a.L) {
                                    if (100 > parseInt(a.view.j(".pb-ie-next-loader-progress").style.width)) {
                                        a.view.j(".pb-ie-next-loader-progress").style.width = parseInt(a.view.j(".pb-ie-next-loader-progress").style.width) + 1 + "%";
                                    } else {
                                        a.Ub.clearInterval(a.Ka);
                                        a.Ka = null;
                                    }
                                } else if (0 < parseInt(a.view.xd.getAttribute("stroke-dashoffset"))) {
                                    a.view.xd.setAttribute("stroke-dashoffset", parseInt(a.view.xd.getAttribute("stroke-dashoffset")) - 1 + "px");
                                } else {
                                    a.Ub.clearInterval(a.Ka);
                                    a.Ka = null;
                                }
                                if (parseInt(a.view.xd.getAttribute("stroke-dashoffset")) == 0 || parseInt(a.view.j(".pb-ie-next-loader-progress").style.width) === 100) {
                                    a.fullScreen.Lb();
                                    if (!a.bc) {
                                        a.bc = true;
                                        if (a.h.Ga()) {
                                            window.location.replace(a.ye());
                                        } else {
                                            window.location.href = a.ye();
                                        }
                                    }
                                }
                            } else if (a.L) {
                                if (a.view.j(".pb-ie-next-loader-progress").style.width !== "0%") {
                                    a.view.j(".pb-ie-next-loader-progress").style.width = "0%";
                                }
                            } else if (a.view.xd.getAttribute("stroke-dashoffset") !== a.Nf) {
                                a.view.xd.setAttribute("stroke-dashoffset", a.Nf);
                            }
                            a.vg();
                        }, b);
                    }
                } else {
                    this.controls.F(false);
                }
            } else if (this.Gf()) {
                this.view.zd.m();
                this.view.zd.innerHTML = '<div class="pb-nxt-loader-wrapper"><div class="pb-nxt-loader-wrapper-background"></div>  <div class="pb-nxt-loader"><div class="pb-nxt-wrapper-preview-next-video"><div class="pb-nxt-preview-next-video-rot"><div class="pb-nxt-preview-next-video"><img src="" title="" alt=""></div></div><div class="pb-nxt-preview-video-title">Nast\u0119pne video: <a href=""><h4></h4></a></div></div><div class="pb-nxt-loader-area"></div><a class="pb-nxt-loader-content" href=""><div class="pb-nxt-loader-content-circle"><div class="pb-nxt-loader-progress"></div></div><div class="pb-nxt-loader-play"></div></a><a class="btn btn-dark btn-next-cancel pb-btn-cancel" href="" style="position: absolute;top: 87px;left: -12px;width: 70px;padding: 5px 0;">Anuluj</a>  </div></div>';
                this.view.zd.show();
                b = this.view.zd;
                var e = this.Oa.url;
                var f = this.view.ub(".pb-nxt-preview-video-title h4", b);
                var g = this.view.ub(".pb-nxt-preview-video-title a", b);
                var l = this.view.ub(".pb-nxt-loader-content", b);
                var k = this.view.ub(".pb-nxt-preview-next-video img", b);
                var p = this.view.ub(".pb-nxt-loader-progress", b);
                var u = this.view.ub(".pb-btn-cancel", b);
                var v = 0;
                f.innerHTML = this.Oa.title;
                g.setAttribute("href", this.Oa.url);
                k.setAttribute("src", this.Oa.thumb);
                k.setAttribute("title", this.Oa.title);
                k.setAttribute("alt", this.Oa.title);
                l.setAttribute("href", this.Oa.url);
                if (k == "/uploads/filmico.png") {
                    this.view.ub(".pb-nxt-preview-next-video", b).m();
                }
                a = this;
                u.addEventListener("click", function(b) {
                    if (!a.L) {
                        a.controls.enable();
                    }
                    a.Zg = true;
                    a.bc = false;
                    a.controls.F(false);
                    if (!a.L) {
                        if (a.video.paused) {
                            a.controls.qa(true);
                        } else {
                            a.controls.qa();
                        }
                    }
                    a.view.zd.m();
                    a.Ub.clearInterval(a.Ka);
                    v = 0;
                    p.style.width = "0%";
                    b.preventDefault();
                    return false;
                });
                if (this.Ka === null) {
                    this.Ka = this.Ub.setInterval(function() {
                        if (100 > v) {
                            v++;
                            p.style.width = v + "%";
                        }
                        if (100 <= v && !a.bc) {
                            a.bc = true;
                            a.Ub.clearInterval(a.Ka);
                            a.fullScreen.Lb();
                            if (a.h.Ga()) {
                                window.location.replace(e);
                            } else {
                                window.location.href = e;
                            }
                        }
                    }, 100);
                }
            }
        }
    };
    P.mk = function() {
        this.Ub.clearInterval(this.Ka);
        this.Ka = null;
        this.view.zd.m();
        this.bc = false;
        if (!this.L && !this.controls.isEnabled()) {
            this.controls.enable();
        }
    };
    P.vg = function() {
        this.yd = typeof window.nextVideoEnabled !== "undefined" && window.nextVideoEnabled ? true : false;
    };
    P.xi = function() {
        if (this.Ka === null) {
            this.vg();
            if (this.yd && this.wg() && !this.Zg && !this.bc) {
                this.Ue();
            }
        }
    };
    P.ye = function(a) {
        var b = window.location.href;
        var e = "";
        if (typeof a === "undefined") {
            e = this.Oa.quality !== null ? "?wersja=" + this.Oa.quality + "&a=1" : "?a=1";
        } else if (this.Oa.quality !== null) {
            e = "?wersja=" + this.Oa.quality;
        }
        if (b.indexOf("&html5") !== -1) {
            e = e == "" ? "?html5" : "&html5&vol=10";
        }
        if (this.Oa.hasOwnProperty("link")) {
            return this.Oa.link + e;
        } else {
            return b.slice(0, b.indexOf("/video/")) + "/video/" + this.Oa.id + e;
        }
    };
    P.Dh = function() {
        if (!this.ti) {
            this.ti = true;
            var a = this.nb();
            var b = false;
            if (A(W) && A(X) && A(Y)) {
                b = true;
            }
            if (!a && b && !this.h.H() && !this.h.Ga() && !this.h.rd()) {
                if (z(e) || y(e)) {
                    var e = this.b;
                }
                if (!y(e)) {
                    b = "";
                    if (this.f.type == "plain") {
                        b = "opacity:0;";
                    }
                    a = "position: absolute;width: 3px;height: 6px;background: #FFCC00;top: 8px;margin-left:0px;z-index:10;" + b;
                    if (this.h.H() || this.h.Ga()) {
                        a = "position: absolute;width: 5px;height: 12px;background: #FFCC00;top: 16px;margin-left:0px;z-index:10;" + b;
                    }
                    if (this.Xa(e, "schedule")) {
                        b = this.M() || this.f.duration;
                        for (var f = 0; f < e.schedule.length; f++) {
                            if (e.schedule[f].hasOwnProperty("time")) {
                                var g = e.schedule[f].time;
                                if (0 < g) {
                                    var l = g / b * 100;
                                    if (!(100 <= l) && !(0 >= l)) {
                                        var k = window.document.createElement("span");
                                        k.setAttribute("style", a + "left: " + l + "%");
                                        k.setAttribute("data-time", g);
                                        k.setAttribute("class", "pb-progress-midroll-marker");
                                        this.controls.za.insertBefore(k, this.controls.za.firstChild);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    P.Ce = function(a, b) {
        if (!(-1 < this.qf.indexOf(b))) {
            if (this.h.Ga() || this.L) {
                return false;
            }
            if (this.h.H()) {
                if (this.h.$d()) {
                    var e = this.h.Dg();
                    this.log(this.c, "android version: " + e);
                    e = parseFloat(e);
                    if (4.1 >= e) {
                        return false;
                    }
                }
                if (this.h.ra()) {
                    if (this.h.Hg() === false) {
                        return false;
                    } else {
                        e = parseInt(this.h.Hg());
                        if (10 > e) {
                            return false;
                        }
                    }
                }
            }
            if (a !== null) {
                e = this.nb();
                var f = false;
                if (A(W) && A(X) && A(Y)) {
                    f = true;
                }
                if (this.h.Qg() && this.h.Zi() && e) {
                    return false;
                }
                if (this.Xa(a, "schedule")) {
                    for (a = 0; a < this.b.schedule.length; a++) {
                        if (this.b.schedule[a].hasOwnProperty("time") && this.b.schedule[a].hasOwnProperty("tag") && this.b.schedule[a].tag != "" && this.b.schedule[a].hasOwnProperty("enabled") && this.b.schedule[a].enabled === true && this.b.schedule[a].hasOwnProperty("type") && this.b.schedule[a].time === b && f && (this.b.schedule[a].hasOwnProperty("tagAdblock") && this.b.schedule[a].tagAdblock != null || !e)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
    };
    P.Mb = function(a) {
        if (typeof a !== "undefined" && typeof a.getBoundingClientRect === "function") {
            return a.getBoundingClientRect();
        } else {
            return false;
        }
    };
    P.vn = function() {
        if (this.V !== null && this.me === false && (this.f.type == "premium" || this.f.type == "premium_free")) {
            this.me = true;
            var a = this;
            try {
                window[this.V.client][this.V.method](this.V.ts, this.V.key, {
                    success: function() {
                        a.me = true;
                    },
                    error: function() {
                        a.me = false;
                    }
                });
            } catch (b) {}
        }
    };
    P.ae = function(a) {
        return Number(a) === a && a % 1 === 0;
    };
    P.Hf = function(a) {
        return Number(a) === a && a % 1 !== 0;
    };
    P.Dp = function() {
        this.log(this.c, "window focus");
        this.log(this.c, "focus? " + document.hasFocus());
        this.ce = true;
    };
    P.Cp = function() {
        this.log(this.c, "window blur");
        this.log(this.c, "focus? " + document.hasFocus());
        this.ce = false;
    };
    P.ib = function(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        a = new RegExp("[\\?&]" + a + "=([^&#]*)").exec(window.location.href);
        if (a == null) {
            return null;
        } else {
            return a[1];
        }
    };
    P.Wd = function() {
        return window.location.hostname;
    };
    P.Zk = function() {
        var a = this.Wd();
        if (-1 < a.indexOf("cda.pl") || -1 < a.indexOf("superfilm.pl")) {
            return true;
        } else {
            return false;
        }
    };
    P.Ee = function() {
        return -1 < this.Wd().indexOf("cda.pl");
    };
    P.ta = function() {
        return this.Ee() && (-1 < this.Wd().indexOf("ebd.") || -1 < this.Wd().indexOf("ebdcda.pl"));
    };
    P.Gf = function() {
        return -1 < this.Wd().indexOf("superfilm.pl");
    };
    P.mh = function() {
        this.video.show();
        this.view.dg.m();
        this.view.U.m();
        this.load();
        this.video.play();
    };
    P.Oo = function() {
        return this.hf;
    };
    P.Mk = function() {
        this.hf++;
    };
    P.ge = function() {
        this.hf = 0;
    };
    P.$j = function(a) {
        this.jf = !!a;
    };
    P.Po = function() {
        return this.jf;
    };
    P.Lj = function(a) {
        a = a || window.event;
        this.view.Tf.D("pb-context-wrapp-show");
        this.view.Tf.w("pb-context-wrapp-hide");
        a.preventDefault();
        return false;
    };
    P.Nj = function(a) {
        a = a || window.event;
        if (this.h.H()) {
            alert("CDA nie limituje przepustowo\u015Bci oraz transferu danych. \nW godzinach wieczornych mo\u017Ce zdarzy\u0107 si\u0119 jednak, i\u017C ilo\u015B\u0107 u\u017Cytkownik\xF3w przekracza mo\u017Cliwo\u015Bci naszych serwer\xF3w wideo. W\xF3wczas odbi\xF3r mo\u017Ce by\u0107 zak\u0142\xF3cony, a plik wideo mo\u017Ce \u0142adowa\u0107 si\u0119 d\u0142u\u017Cej ni\u017C zwykle. \n\nW Opcji CDA Premium gwarantujemy, i\u017C przepustowo\u015Bci i transferu nie braknie dla \u017Cadnego u\u017Cytkownika.");
        } else {
            this.view.zn.w("pb-why-more-answer-show");
        }
        a.preventDefault();
        return false;
    };
    P.jp = function() {
        return this.kg;
    };
    P.Yc = function(a) {
        this.kg = !!a;
    };
    P.Ug = function() {
        if (this.options.hasOwnProperty("user") && this.options.user.hasOwnProperty("role") && this.options.user.role == "premium" || this.options.hasOwnProperty("premium") && this.options.premium === true) {
            return true;
        } else {
            return false;
        }
    };
    P.Ob = function() {
        return this.options.hasOwnProperty("user") && this.options.user.hasOwnProperty("video_history") && this.options.user.video_history;
    };
    P.zc = function() {
        if (this.options.hasOwnProperty("user") && this.options.user.hasOwnProperty("id") && !y(this.options.user.id)) {
            return this.options.user.id;
        } else {
            return 33;
        }
    };
    P.hb = function() {
        if (this.options.hasOwnProperty("user") && this.options.user.hasOwnProperty("uid") && !y(this.options.user.uid)) {
            return this.options.user.uid;
        } else {
            return false;
        }
    };
    P.Fg = function() {
        if (this.options.hasOwnProperty("user") && this.options.user.hasOwnProperty("gender") && !y(this.options.user.gender)) {
            return this.options.user.gender;
        } else {
            return "";
        }
    };
    P.Gg = function() {
        if (y(this.f) || !this.f.hasOwnProperty("premium_categories") || y(this.f.premium_categories)) {
            return "";
        } else {
            return this.f.premium_categories;
        }
    };
    P.Mj = function() {
        if (!this.K && this.Ug() == 0) {
            var a = this.options.video.id + ":" + Number(Math.floor(this.l()));
            this.yh("cda.player.ppst", a, 2, true);
        }
    };
    P.Yi = function() {
        if (this.options.hasOwnProperty("user") && this.options.user.hasOwnProperty("role") && this.options.user.role == "admin") {
            return true;
        } else {
            return false;
        }
    };
    P.Pi = function() {
        var a = !this.h.pd();
        if (this.ta()) {
            a = true;
        }
        if (this.Og() && a || this.Oi() && a) {
            return true;
        } else {
            return false;
        }
    };
    P.Og = function() {
        return this.options.hasOwnProperty("plista") && this.options.plista && !this.nb() && !this.K;
    };
    P.Oi = function() {
        return this.options.hasOwnProperty("adOnPauseEnabled") && this.options.adOnPauseEnabled && !this.nb() && !this.K && !this.h.H() && !this.h.Ga();
    };
    P.dj = function() {
        this.Ng = true;
        if (this.Og()) {
            this.Rl();
        } else if (this.Oi()) {
            this.Ql();
        }
    };
    P.bo = function() {
        if (!this.Ng) {
            this.dj();
        }
        if (!this.rh) {
            this.view.j(".pb-ad-pause-plt").w("pb-ad-pause-plt-show");
        }
    };
    P.Ki = function() {
        if (this.view.j(".pb-ad-pause-plt").I("pb-ad-pause-plt-show")) {
            this.view.j(".pb-ad-pause-plt").D("pb-ad-pause-plt-show");
        }
    };
    P.Nk = function() {
        this.view.j(".pb-ad-pause-plt-content").Ba('<div data-widget="plista_widget_infeed_3"></div>');
    };
    P.Rl = function() {
        var a = {
            publickey: "60e3bc9c547ec9c0d4858cee",
            origin: "pl"
        };
        var b = "script";
        var e = window;
        var f = a.name || "PLISTA";
        if (!e[f]) {
            e[f] = a;
            f = e.document.getElementsByTagName(b)[0];
            b = e.document.createElement(b);
            b.async = true;
            b.type = "text/javascript";
            b.src = (e.location.protocol === "https:" ? "https:" : "http:") + "//static" + (a.origin ? "-" + a.origin : "") + ".plista.com/async" + (a.name ? "/" + a.name : "") + ".js";
            f.parentNode.insertBefore(b, f);
        }
    };
    P.Ql = function() {
        if (this.options.hasOwnProperty("adOnPauseElement") && !y(this.options.adOnPauseElement)) {
            this.view.j(".pb-ad-pause-plt-content").Ba(this.options.adOnPauseElement);
            if (this.ta()) {
                window.__nc_widgets = window.__nc_widgets || [];
                window.__nc_j = window.__nc_j || null;
                window.__nc_widgets.push(["1DF4-A6D5-5098-A1FD-1lEIw4", "ebd.cda.pl", "advertisement", 1, 1]);
                window.__nc = document.createElement("script");
                window.__nc.type = "text/javascript";
                window.__nc.async = true;
                window.__nc.id = "Nextclick_Manager";
                window.__nc.src = "//nextclick.pl/widget/widget.advertisement.1.js";
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(window.__nc, a);
            } else {
                window._taboola = window._taboola || [];
                window._taboola.push({
                    mode: "thumbnails-a",
                    container: "taboola-below-player-thumbnails",
                    placement: "Below Player Thumbnails",
                    target_type: "mix"
                });
            }
        }
    };
    P.si = function() {
        this.Ki();
        this.resume();
    };
    P.ao = function() {
        var a = this.f.id;
        this.A = a == "269170516" ? {
            impression: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=impression&ct=[timestamp]",
                fired: false
            },
            start: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=start&ct=[timestamp]",
                fired: false
            },
            firstQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=firstQuartile&ct=[timestamp]",
                fired: false
            },
            midpoint: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=midpoint&ct=[timestamp]",
                fired: false
            },
            thirdQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=thirdQuartile&ct=[timestamp]",
                fired: false
            },
            complete: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=complete&ct=[timestamp]",
                fired: false
            },
            video60sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=video60sec&ct=[timestamp]",
                fired: false
            },
            video120sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=video120sec&ct=[timestamp]",
                fired: false
            },
            video180sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=video180sec&ct=[timestamp]",
                fired: false
            },
            video240sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=video240sec&ct=[timestamp]",
                fired: false
            },
            video300sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=video300sec&ct=[timestamp]",
                fired: false
            },
            video360sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=video360sec&ct=[timestamp]",
                fired: false
            },
            video420sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=video420sec&ct=[timestamp]",
                fired: false
            },
            video480sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=video480sec&ct=[timestamp]",
                fired: false
            },
            video540sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=video540sec&ct=[timestamp]",
                fired: false
            },
            video600sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NjRiYjMwODg5ODcwOWY4Y2U2NGUwMDBkYjAwNDFhYTg_MTAwMA&pl=video600sec&ct=[timestamp]",
                fired: false
            }
        } : a == "26916244a" ? {
            impression: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=impression&ct=[timestamp]",
                fired: false
            },
            start: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=start&ct=[timestamp]",
                fired: false
            },
            firstQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=firstQuartile&ct=[timestamp]",
                fired: false
            },
            midpoint: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=midpoint&ct=[timestamp]",
                fired: false
            },
            thirdQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=thirdQuartile&ct=[timestamp]",
                fired: false
            },
            complete: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=complete&ct=[timestamp]",
                fired: false
            },
            video60sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=video60sec&ct=[timestamp]",
                fired: false
            },
            video120sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=video120sec&ct=[timestamp]",
                fired: false
            },
            video180sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=video180sec&ct=[timestamp]",
                fired: false
            },
            video240sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=video240sec&ct=[timestamp]",
                fired: false
            },
            video300sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=video300sec&ct=[timestamp]",
                fired: false
            },
            video360sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=video360sec&ct=[timestamp]",
                fired: false
            },
            video420sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=video420sec&ct=[timestamp]",
                fired: false
            },
            video480sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=video480sec&ct=[timestamp]",
                fired: false
            },
            video540sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=video540sec&ct=[timestamp]",
                fired: false
            },
            video600sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NGMwYjY0Y2M2YmFlMTIxNmFhZmJiNDM0MTUwNjA0Nzk_OTk3&pl=video600sec&ct=[timestamp]",
                fired: false
            }
        } : a == "2691633fd" ? {
            impression: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=impression&ct=[timestamp]",
                fired: false
            },
            start: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=start&ct=[timestamp]",
                fired: false
            },
            firstQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=firstQuartile&ct=[timestamp]",
                fired: false
            },
            midpoint: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=midpoint&ct=[timestamp]",
                fired: false
            },
            thirdQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=thirdQuartile&ct=[timestamp]",
                fired: false
            },
            complete: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=complete&ct=[timestamp]",
                fired: false
            },
            video60sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=video60sec&ct=[timestamp]",
                fired: false
            },
            video120sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=video120sec&ct=[timestamp]",
                fired: false
            },
            video180sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=video180sec&ct=[timestamp]",
                fired: false
            },
            video240sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=video240sec&ct=[timestamp]",
                fired: false
            },
            video300sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=video300sec&ct=[timestamp]",
                fired: false
            },
            video360sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=video360sec&ct=[timestamp]",
                fired: false
            },
            video420sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=video420sec&ct=[timestamp]",
                fired: false
            },
            video480sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=video480sec&ct=[timestamp]",
                fired: false
            },
            video540sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=video540sec&ct=[timestamp]",
                fired: false
            },
            video600sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MDdjOGM5ZTMwNmEwYmEwYWY4MDIxMTg1NGMwNzc1MTk_MTAwMw&pl=video600sec&ct=[timestamp]",
                fired: false
            }
        } : a == "269163615" ? {
            impression: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=impression&ct=[timestamp]",
                fired: false
            },
            start: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=start&ct=[timestamp]",
                fired: false
            },
            firstQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=firstQuartile&ct=[timestamp]",
                fired: false
            },
            midpoint: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=midpoint&ct=[timestamp]",
                fired: false
            },
            thirdQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=thirdQuartile&ct=[timestamp]",
                fired: false
            },
            complete: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=complete&ct=[timestamp]",
                fired: false
            },
            video60sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=video60sec&ct=[timestamp]",
                fired: false
            },
            video120sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=video120sec&ct=[timestamp]",
                fired: false
            },
            video180sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=video180sec&ct=[timestamp]",
                fired: false
            },
            video240sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=video240sec&ct=[timestamp]",
                fired: false
            },
            video300sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=video300sec&ct=[timestamp]",
                fired: false
            },
            video360sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=video360sec&ct=[timestamp]",
                fired: false
            },
            video420sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=video420sec&ct=[timestamp]",
                fired: false
            },
            video480sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=video480sec&ct=[timestamp]",
                fired: false
            },
            video540sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=video540sec&ct=[timestamp]",
                fired: false
            },
            video600sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MjdmOThmNTkzODE4MzA3MTk2ZjgzMjU3MTlkZDQyMmM_MTAwNg&pl=video600sec&ct=[timestamp]",
                fired: false
            }
        } : a == "2691648cb" ? {
            impression: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=impression&ct=[timestamp]",
                fired: false
            },
            start: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=start&ct=[timestamp]",
                fired: false
            },
            firstQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=firstQuartile&ct=[timestamp]",
                fired: false
            },
            midpoint: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=midpoint&ct=[timestamp]",
                fired: false
            },
            thirdQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=thirdQuartile&ct=[timestamp]",
                fired: false
            },
            complete: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=complete&ct=[timestamp]",
                fired: false
            },
            video60sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=video60sec&ct=[timestamp]",
                fired: false
            },
            video120sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=video120sec&ct=[timestamp]",
                fired: false
            },
            video180sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=video180sec&ct=[timestamp]",
                fired: false
            },
            video240sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=video240sec&ct=[timestamp]",
                fired: false
            },
            video300sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=video300sec&ct=[timestamp]",
                fired: false
            },
            video360sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=video360sec&ct=[timestamp]",
                fired: false
            },
            video420sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=video420sec&ct=[timestamp]",
                fired: false
            },
            video480sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=video480sec&ct=[timestamp]",
                fired: false
            },
            video540sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=video540sec&ct=[timestamp]",
                fired: false
            },
            video600sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=MzM2ZGJlYTFmOGY2MWEyOWNhYjE1ZTIyNjAwNTE1ZjE_MTAwOQ&pl=video600sec&ct=[timestamp]",
                fired: false
            }
        } : a == "269165137" ? {
            impression: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=impression&ct=[timestamp]",
                fired: false
            },
            start: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=start&ct=[timestamp]",
                fired: false
            },
            firstQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=firstQuartile&ct=[timestamp]",
                fired: false
            },
            midpoint: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=midpoint&ct=[timestamp]",
                fired: false
            },
            thirdQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=thirdQuartile&ct=[timestamp]",
                fired: false
            },
            complete: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=complete&ct=[timestamp]",
                fired: false
            },
            video60sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=video60sec&ct=[timestamp]",
                fired: false
            },
            video120sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=video120sec&ct=[timestamp]",
                fired: false
            },
            video180sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=video180sec&ct=[timestamp]",
                fired: false
            },
            video240sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=video240sec&ct=[timestamp]",
                fired: false
            },
            video300sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=video300sec&ct=[timestamp]",
                fired: false
            },
            video360sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=video360sec&ct=[timestamp]",
                fired: false
            },
            video420sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=video420sec&ct=[timestamp]",
                fired: false
            },
            video480sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=video480sec&ct=[timestamp]",
                fired: false
            },
            video540sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=video540sec&ct=[timestamp]",
                fired: false
            },
            video600sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=NzVkMmYzOTA1ZDQzOTBiMWRhZDNhMDcyZDEyYWM2OTM_MTAxMg&pl=video600sec&ct=[timestamp]",
                fired: false
            }
        } : a == "269166053" ? {
            impression: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=impression&ct=[timestamp]",
                fired: false
            },
            start: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=start&ct=[timestamp]",
                fired: false
            },
            firstQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=firstQuartile&ct=[timestamp]",
                fired: false
            },
            midpoint: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=midpoint&ct=[timestamp]",
                fired: false
            },
            thirdQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=thirdQuartile&ct=[timestamp]",
                fired: false
            },
            complete: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=complete&ct=[timestamp]",
                fired: false
            },
            video60sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=video60sec&ct=[timestamp]",
                fired: false
            },
            video120sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=video120sec&ct=[timestamp]",
                fired: false
            },
            video180sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=video180sec&ct=[timestamp]",
                fired: false
            },
            video240sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=video240sec&ct=[timestamp]",
                fired: false
            },
            video300sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=video300sec&ct=[timestamp]",
                fired: false
            },
            video360sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=video360sec&ct=[timestamp]",
                fired: false
            },
            video420sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=video420sec&ct=[timestamp]",
                fired: false
            },
            video480sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=video480sec&ct=[timestamp]",
                fired: false
            },
            video540sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=video540sec&ct=[timestamp]",
                fired: false
            },
            video600sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZWFlZDgxZDkzYzljOGNjOWQ1YTU1OGJkMDczNGE2NWI_MTAxNQ&pl=video600sec&ct=[timestamp]",
                fired: false
            }
        } : a == "4125787e0" ? {
            impression: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=impression&ct=[timestamp]",
                fired: false
            },
            start: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=start&ct=[timestamp]",
                fired: false
            },
            firstQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=firstQuartile&ct=[timestamp]",
                fired: false
            },
            midpoint: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=midpoint&ct=[timestamp]",
                fired: false
            },
            thirdQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=thirdQuartile&ct=[timestamp]",
                fired: false
            },
            complete: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=complete&ct=[timestamp]",
                fired: false
            },
            video60sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=video60sec&ct=[timestamp]",
                fired: false
            },
            video120sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=video120sec&ct=[timestamp]",
                fired: false
            },
            video180sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=video180sec&ct=[timestamp]",
                fired: false
            },
            video240sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=video240sec&ct=[timestamp]",
                fired: false
            },
            video300sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=video300sec&ct=[timestamp]",
                fired: false
            },
            video360sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=video360sec&ct=[timestamp]",
                fired: false
            },
            video420sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=video420sec&ct=[timestamp]",
                fired: false
            },
            video480sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=video480sec&ct=[timestamp]",
                fired: false
            },
            video540sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=video540sec&ct=[timestamp]",
                fired: false
            },
            video600sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=video600sec&ct=[timestamp]",
                fired: false
            },
            video193sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=video193sec&ct=[timestamp]",
                fired: false
            },
            video220sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=Y2EwZWJhOGI4ZDc1Njc4ZjM1YmY3ZjFiNTU0M2M5YzA_MTg5MQ&pl=video220sec&ct=[timestamp]",
                fired: false
            }
        } : a == "412582640" ? {
            impression: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=impression&ct=[timestamp]",
                fired: false
            },
            start: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=start&ct=[timestamp]",
                fired: false
            },
            firstQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=firstQuartile&ct=[timestamp]",
                fired: false
            },
            midpoint: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=midpoint&ct=[timestamp]",
                fired: false
            },
            thirdQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=thirdQuartile&ct=[timestamp]",
                fired: false
            },
            complete: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=complete&ct=[timestamp]",
                fired: false
            },
            video60sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=video60sec&ct=[timestamp]",
                fired: false
            },
            video120sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=video120sec&ct=[timestamp]",
                fired: false
            },
            video180sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=video180sec&ct=[timestamp]",
                fired: false
            },
            video240sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=video240sec&ct=[timestamp]",
                fired: false
            },
            video300sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=video300sec&ct=[timestamp]",
                fired: false
            },
            video360sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=video360sec&ct=[timestamp]",
                fired: false
            },
            video420sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=video420sec&ct=[timestamp]",
                fired: false
            },
            video480sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=video480sec&ct=[timestamp]",
                fired: false
            },
            video540sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=video540sec&ct=[timestamp]",
                fired: false
            },
            video600sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=video600sec&ct=[timestamp]",
                fired: false
            },
            video148sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ZTRkZjEyMWJkNTFlOTY5MTQyODkyZGVjODM0MWFkNTU_MTg5NA&pl=video148sec&ct=[timestamp]",
                fired: false
            }
        } : a == "412584104" ? {
            impression: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=impression&ct=[timestamp]",
                fired: false
            },
            start: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=start&ct=[timestamp]",
                fired: false
            },
            firstQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=firstQuartile&ct=[timestamp]",
                fired: false
            },
            midpoint: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=midpoint&ct=[timestamp]",
                fired: false
            },
            thirdQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=thirdQuartile&ct=[timestamp]",
                fired: false
            },
            complete: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=complete&ct=[timestamp]",
                fired: false
            },
            video60sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video60sec&ct=[timestamp]",
                fired: false
            },
            video120sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video120sec&ct=[timestamp]",
                fired: false
            },
            video180sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video180sec&ct=[timestamp]",
                fired: false
            },
            video240sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video240sec&ct=[timestamp]",
                fired: false
            },
            video300sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video300sec&ct=[timestamp]",
                fired: false
            },
            video360sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video360sec&ct=[timestamp]",
                fired: false
            },
            video420sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video420sec&ct=[timestamp]",
                fired: false
            },
            video480sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video480sec&ct=[timestamp]",
                fired: false
            },
            video540sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video540sec&ct=[timestamp]",
                fired: false
            },
            video600sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video600sec&ct=[timestamp]",
                fired: false
            },
            video50sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video50sec&ct=[timestamp]",
                fired: false
            },
            video115sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video115sec&ct=[timestamp]",
                fired: false
            },
            video122sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YjA2YTg0Y2Y5YjFlNGI2MGI3OTRlZWM1NTJjZDgxZTE_MTg5Nw&pl=video122sec&ct=[timestamp]",
                fired: false
            }
        } : a == "4125850f4" ? {
            impression: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=impression&ct=[timestamp]",
                fired: false
            },
            start: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=start&ct=[timestamp]",
                fired: false
            },
            firstQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=firstQuartile&ct=[timestamp]",
                fired: false
            },
            midpoint: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=midpoint&ct=[timestamp]",
                fired: false
            },
            thirdQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=thirdQuartile&ct=[timestamp]",
                fired: false
            },
            complete: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=complete&ct=[timestamp]",
                fired: false
            },
            video60sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=video60sec&ct=[timestamp]",
                fired: false
            },
            video120sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=video120sec&ct=[timestamp]",
                fired: false
            },
            video180sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=video180sec&ct=[timestamp]",
                fired: false
            },
            video240sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=video240sec&ct=[timestamp]",
                fired: false
            },
            video300sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=video300sec&ct=[timestamp]",
                fired: false
            },
            video360sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=video360sec&ct=[timestamp]",
                fired: false
            },
            video420sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=video420sec&ct=[timestamp]",
                fired: false
            },
            video480sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=video480sec&ct=[timestamp]",
                fired: false
            },
            video540sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=video540sec&ct=[timestamp]",
                fired: false
            },
            video600sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=video600sec&ct=[timestamp]",
                fired: false
            },
            video54sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=ODgxYjMzZWQ3MWEwMjMzYjkyNDE2YWM0YTEzMjk4ODM_MTkwMA&pl=video54sec&ct=[timestamp]",
                fired: false
            }
        } : a == "41258896e" ? {
            impression: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=impression&ct=[timestamp]",
                fired: false
            },
            start: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=start&ct=[timestamp]",
                fired: false
            },
            firstQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=firstQuartile&ct=[timestamp]",
                fired: false
            },
            midpoint: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=midpoint&ct=[timestamp]",
                fired: false
            },
            thirdQuartile: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=thirdQuartile&ct=[timestamp]",
                fired: false
            },
            complete: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=complete&ct=[timestamp]",
                fired: false
            },
            video60sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video60sec&ct=[timestamp]",
                fired: false
            },
            video120sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video120sec&ct=[timestamp]",
                fired: false
            },
            video180sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video180sec&ct=[timestamp]",
                fired: false
            },
            video240sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video240sec&ct=[timestamp]",
                fired: false
            },
            video300sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video300sec&ct=[timestamp]",
                fired: false
            },
            video360sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video360sec&ct=[timestamp]",
                fired: false
            },
            video420sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video420sec&ct=[timestamp]",
                fired: false
            },
            video480sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video480sec&ct=[timestamp]",
                fired: false
            },
            video540sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video540sec&ct=[timestamp]",
                fired: false
            },
            video600sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video600sec&ct=[timestamp]",
                fired: false
            },
            video229sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video229sec&ct=[timestamp]",
                fired: false
            },
            video247sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video247sec&ct=[timestamp]",
                fired: false
            },
            video253sec: {
                url: "https://g.cda.pl/g.php?pixel&vi=YTNmYmM1MWExNjMzMWM1NGZhMGFmZjUzNDdlNDNjODU_MTkwMw&pl=video253sec&ct=[timestamp]",
                fired: false
            }
        } : null;
    };
    P.N = function(a) {
        if (E(a)) {
            var b = new window.Image(1, 1);
            b.onload = b.onerror = function() {
                delete b;
            };
            b.src = a;
        }
    };
    P.se = function() {
        if (this.video != null && !(0 < this.l()) && !(2 < this.kb)) {
            this.kb += 1;
            this.video.muted = true;
            this.video.autoplay = "autoplay";
            this.Ab = true;
            this.J(0, true);
            this.controls.J(0, true);
            this.controls.F(true);
            if (!this.K && !this.ta()) {
                this.controls.he();
            }
            this.rb();
            this.sg();
        }
    };
    P.md = function() {
        this.rb();
        this.Re();
    };
    P.Re = function() {
        if (!z(this.i.ve)) {
            U(window, "touchstart", this.i.ve);
        }
        if (!z(this.i.ue)) {
            U(window, "scroll", this.i.ue);
        }
        if (!z(this.i.te)) {
            U(window, "resize", this.i.te);
        }
    };
    P.sg = function() {
        this.i.ve = T(window, "touchstart", this.md, this);
        this.i.ue = T(window, "scroll", this.md, this);
        this.i.te = T(window, "resize", this.md, this);
    };
    P.ih = function() {
        var a = event || window.event;
        if (a !== null && a.data !== null) {
            a = a.data;
            if (a == "player-viewable") {
                this.Ld = this.Nh = true;
            } else if (a == "player-notviewable") {
                this.Nh = true;
                this.Ld = false;
            } else if (a == "player-mini-fly-show") {
                this.rh = true;
            } else if (a == "player-mini-fly-hide") {
                this.rh = false;
            }
        }
    };
    P.ze = function() {
        if (window.WebKitPlaybackTargetAvailabilityEvent) {
            var a = this;
            this.video.addEventListener("webkitplaybacktargetavailabilitychanged", function(b) {
                switch (b.availability) {
                    case "available":
                        a.view.content.w("pb-airplay-posible");
                        break;
                    default:
                        a.view.content.D("pb-airplay-posible");
                }
                a.view.Ok.addEventListener("click", function() {
                    a.video.webkitShowPlaybackTargetPicker();
                });
            });
        } else {
            this.view.content.D("pb-airplay-posible");
        }
    };
    P.wl = function() {
        this.view.content.D("pb-airplay-posible");
    };
    P.qj = function(a) {
        if (a != null) {
            if (z(a.reason) || a.reason != "InsufficientBufferRule: Buffer is empty") {
                if (!z(a.type) && a.type == "streamUpdated") {
                    this.wf = false;
                }
            } else {
                this.wf = true;
            }
        }
        for (var b in a) {
            if (typeof a[b] == "object") {
                for (var f in a[b]) {
                    this.log("cda.Player.DashJS", f, JSON.stringify(a[b][f]));
                }
            } else {
                if (b == "message") {
                    this.log("cda.Player.DashJS", "log", a[b]);
                    try {
                        if (-1 < a[b].indexOf("Denied by stream limiting")) {
                            this.o.reset();
                            this.view.show(this.view.alert);
                            this.view.pb(this.view.Wa, "Zbyt wiele os\xF3b (3) korzysta z Twojego konta.");
                            this.controls.disable();
                            this.disabled = true;
                            break;
                        }
                        if (-1 < a[b].indexOf("Buffer is empty! Stalling")) {
                            this.cb(Math.ceil(this.l()));
                            break;
                        }
                        if (-1 < a[b].indexOf("play() failed because the user didn't interact with the document first") && this.Pc && this.autoplay && this.video.paused && !this.controls.ba.W() && !this.controls.U.W() && !this.K) {
                            this.video.muted = true;
                            this.video.autoplay = "autoplay";
                            this.Ab = true;
                            this.J(0, true);
                            this.controls.J(0, true);
                            this.controls.he();
                            this.o.play();
                            break;
                        }
                        if (-1 < a[b].indexOf("requestMediaKeySystemAccess is disabled by feature policy")) {
                            this.o.reset();
                            this.view.show(this.view.alert);
                            this.view.Wa.innerHTML = 'Wyst\u0105pi\u0142 problem z odtwarzaniem materia\u0142u wideo. <br>Kliknij i przejd\u017A na podstron\u0119 z filmem <a href="https://www.cda.pl/video/' + this.f.id + '" target="_blank" style="color:#e28525">www.cda.pl/video/' + this.f.id + "</a>";
                            this.controls.disable();
                            this.disabled = true;
                        } else if (-1 < a[b].indexOf("KeySystem Access Denied") && this.h.H() && this.h.pd()) {
                            this.o.reset();
                            this.view.show(this.view.alert);
                            var e = "market://details?id=pl.cda";
                            if (this.h.ra()) {
                                e = "https://apps.apple.com/pl/app/cda-pl/id1318175670";
                            }
                            this.view.Wa.innerHTML = 'Od\u015Bwie\u017C stron\u0119 i spr\xF3buj ponownie. <br>(Je\u015Bli jeste\u015B w trybie incognito to uruchom przegl\u0105dark\u0119 w trybie normalnym lub <a href="' + e + '" style="color:#e28525">pobierz aplikacj\u0119 CDA na swoje urz\u0105dzenie</a>.)';
                            this.controls.disable();
                            this.disabled = true;
                        }
                    } catch (g) {}
                }
                if (b == "type" && a[b] == "playbackNotAllowed" && this.O && this.autoplay && this.video.paused && !this.controls.ba.W() && !this.controls.U.W() && !this.K) {
                    this.video.muted = true;
                    this.video.autoplay = "autoplay";
                    this.Ab = true;
                    this.J(0, true);
                    this.controls.J(0, true);
                    this.controls.he();
                    this.o.play();
                    break;
                }
                if (b != "message" && b != "type" && b != "level") {
                    this.log("cda.Player.DashJS", b, a[b]);
                }
            }
        }
    };
    P.xj = function() {
        this.log(this.c, "PLAYBACK PLAYING");
        if (!this.K && !!this.view.content.I("pb-pip-enabled") && !this.view.content.I("pb-frame-posible")) {
            this.view.content.w("pb-frame-posible");
        }
        this.Vd = false;
        this.controls.F(false);
        this.Sa(this.state.ga);
        this.controls.Z(true);
        if (this.O && this.$e) {
            this.$e = false;
            this.controls.Kg();
            if (this.controls.Ca) {
                this.controls.cc();
            }
        }
        if (this.Ze) {
            this.Ze = false;
        }
        if (this.ha == -1 && 0 < this.f.duration && this.zc() != 33 && !this.K && this.hb() !== false && (this.Ob() || this.f.type == "premium" || this.f.type == "premium_free")) {
            try {
                var a = this;
                window.$.ajax({
                    url: "//api.cda.pl/h.php?uid=" + this.hb(),
                    type: "post",
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true
                    },
                    data: {
                        currentTime: 0,
                        duration: this.f.duration,
                        test: this.Ob(),
                        server: this.Xd()
                    },
                    success: function() {
                        a.ha = 0;
                    }
                });
            } catch (b) {
                this.log(this.c, b);
            }
        }
    };
    P.pj = function(a) {
        if (this.Pc) {
            this.view.m(this.view.alert);
            this.controls.enable();
            if (this.getState() === this.state.ga && this.video.paused) {
                this.o.play();
            }
        } else if (this.Bi === false) {
            this.Bi = true;
            this.o.reset();
            this.o = null;
            this.Ff();
        } else {
            try {
                var b = a.error.message;
                if (-1 < b.indexOf("MEDIA_ERR_DECODE")) {
                    try {
                        window[this.V.client].playerDrmError(this.f.id, this.f.quality, this.ea, b);
                    } catch (g) {}
                }
                if (-1 < b.toLowerCase().indexOf("license") || -1 < b.indexOf("MEDIA_ERR_DECODE")) {
                    if (this.O) {
                        this.controls.ie.w("pb-time-tv-info-live-disable");
                    }
                    this.view.show(this.view.alert);
                    this.view.pb(this.view.Wa, "Wyst\u0105pi\u0142 b\u0142\u0105d podczas odtwarzania. Od\u015Bwie\u017C stron\u0119 i spr\xF3buj ponownie.<br>(error code: P1033)");
                    this.controls.disable();
                    this.disabled = true;
                    var e = window.location.href;
                    var f = Math.floor(this.l());
                    if (-1 < window.location.href.indexOf("?")) {
                        if (this.ib("t") == null) {
                            e += "&t=" + f;
                        } else {
                            e = new URL(e);
                            e.searchParams.set("t", f);
                            e = e.toString();
                        }
                    } else {
                        e += "?t=" + f;
                    }
                    if (e.indexOf("pr") == -1) {
                        window.location.href = e + "&pr";
                    }
                } else if (-1 < b.indexOf("KeySystem Access Denied") && this.h.H() && this.h.pd()) {
                    this.o.reset();
                    this.view.show(this.view.alert);
                    a = "market://details?id=pl.cda";
                    if (this.h.ra()) {
                        a = "https://apps.apple.com/pl/app/cda-pl/id1318175670";
                    }
                    this.view.Wa.innerHTML = this.O ? "Od\u015Bwie\u017C stron\u0119 i spr\xF3buj ponownie. <br>(Je\u015Bli jeste\u015B w trybie incognito to uruchom przegl\u0105dark\u0119 w trybie normalnym.)" : 'Od\u015Bwie\u017C stron\u0119 i spr\xF3buj ponownie. <br>(Je\u015Bli jeste\u015B w trybie incognito to uruchom przegl\u0105dark\u0119 w trybie normalnym lub <a href="' + a + '" style="color:#e28525">pobierz aplikacj\u0119 CDA na swoje urz\u0105dzenie</a>.)';
                    this.controls.disable();
                    this.disabled = true;
                }
            } catch (g) {}
        }
    };
    P.wj = function(a) {
        this.log(this.c, "player error");
        try {
            var b = a.error.message;
            this.log(this.c, b);
            try {
                window[this.V.client].playerDrmError(this.f.id, this.f.quality, this.ea, b);
            } catch (e) {}
        } catch (e) {}
    };
    P.Cj = function() {
        this.log(this.c, "PLAYBACK WAITING");
        this.Vd = true;
        this.controls.F(true);
        var a = this.o.getBufferLength();
        if (this.O && this.nd == null && (this.wf || .5 > this.o.getBufferLength()) && !this.Ag) {
            var b = this;
            this.nd = window.setTimeout(function() {
                if ((b.wf || .5 > b.o.getBufferLength()) && b.Vd && a == b.o.getBufferLength()) {
                    b.Ag = true;
                } else {
                    window.clearTimeout(b.nd);
                }
                b.nd = null;
            }, 5e3);
        }
    };
    P.yj = function() {};
    P.Bj = function() {
        return this.Uc();
    };
    P.Ej = function() {
        this.log(this.c, "STREAM INIT");
        if (this.O) {
            this.$e = true;
        }
        try {
            if (A(window.onVideoDashStreamInit)) {
                window.onVideoDashStreamInit(this.o);
            }
        } catch (a) {}
        try {
            this.Dh();
        } catch (a) {}
    };
    P.rj = function(a) {
        if (!a.request || z(a.request.mediaInfo) || z(a.request.mediaInfo.streamInfo) || z(a.request.mediaInfo.streamInfo.manifestInfo) || z(a.request.mediaInfo.streamInfo.manifestInfo.isDynamic) || !a.request.mediaInfo.streamInfo.manifestInfo.isDynamic) {
            this.zg = false;
        } else {
            this.zg = true;
            this.controls.Bg.m();
            this.controls.za.m();
            this.Qa = -1;
        }
        if (a.request && (a.request.type === "InitializationSegment" || a.request.type == "MediaSegment") && !this.Ud) {
            this.Ud = true;
            a = this.o.getBitrateInfoListFor("video");
            var b = -1;
            if (-1 < this.ea.indexOf("redefine.pl")) {
                b = a.length - 1;
                this.o.setQualityFor("video", b);
            }
            if (1 < a.length && b == -1) {
                for (var e = 0; e < a.length; e++) {
                    if (a[e].width == 1920 && this.f.quality == "hd") {
                        b = a[e].qualityIndex;
                        break;
                    }
                    if (a[e].width == 1280 && this.f.quality == "sd") {
                        b = a[e].qualityIndex;
                        break;
                    }
                    if (a[e].width == 854 && this.f.quality == "lq") {
                        b = a[e].qualityIndex;
                        break;
                    }
                    if (a[e].width == 640 && this.f.quality == "vl") {
                        b = a[e].qualityIndex;
                        break;
                    }
                }
                this.o.setQualityFor("video", b);
            }
            this.log(this.c, "video qualities");
            this.log(this.c, a);
            this.log(this.c, "current video quality: " + b);
            a = this.o.getBitrateInfoListFor("audio");
            b = -1;
            if (-1 < this.Wg) {
                if (0 < a.length) {
                    for (e = 0; e < a.length; e++) {
                        if (a[e].bitrate == this.Wg) {
                            b = a[e].qualityIndex;
                            break;
                        }
                    }
                }
            } else if (this.f.quality == "hd" || this.Xg) {
                if (0 < a.length) {
                    b = a.length - 1;
                }
            } else {
                b = 0;
            }
            this.log(this.c, "audio qualities");
            this.log(this.c, a);
            this.log(this.c, "current audio quality: " + b);
            this.o.setQualityFor("audio", b);
        }
    };
    P.vj = function() {
        return this.Ad();
    };
    P.zj = function() {
        this.Yc(false);
        this.Fd(-1);
        this.ge();
        if (-1 < this.ha) {
            this.ha = this.l();
        }
        this.o.play();
        this.controls.F(false);
        try {
            var a = this.controls.za.querySelectorAll(".pb-progress-midroll-marker");
            if (!y(a) && 0 < a.length) {
                for (var b = 0; b < a.length; b++) {
                    var e = a[b];
                    if (!y(e) && !y(e.getAttribute("data-time")) && e.getAttribute("data-time") < this.l()) {
                        e.m();
                    }
                }
            }
        } catch (f) {
            this.log(this.c, f);
        }
    };
    P.Aj = function() {
        this.Yc(true);
        this.controls.F(true);
    };
    P.tj = function(a) {
        if (a.error) {
            this.log(this.c, "LICENSE REQUEST ERROR");
        } else {
            this.log(this.c, "LICENSE REQUEST COMPLETE");
        }
    };
    P.sj = function(a) {
        var b = this;
        try {
            a.data.session.keyStatuses.forEach(function(a) {
                b.log(b.c, "KEY STATUS: " + a);
                switch (a) {
                    case "expired":
                        b.Pc = false;
                        break;
                    case "output-restricted":
                        b.Pc = false;
                        break;
                    case "usable":
                        b.Pc = true;
                        if (0 < b.Qa && b.fd === -1 && b.Qa < b.M()) {
                            b.fd = b.Qa;
                            b.autoplay = true;
                            b.o.seek(b.Qa);
                        }
                }
            });
        } catch (e) {
            this.log(this.c, e);
        }
    };
    P.Dj = function() {
        if (0 >= this.l()) {
            this.controls.F(true);
        }
    };
    P.uj = function(a) {
        if (a.data && a.data.availabilityStartTime && (a = new Date(a.data.availabilityStartTime).getTime(), this.Jd == null && (this.Jd = a, this.log(this.c, "availabilityStartTime saved: " + this.Jd)), this.Jd != null && this.Jd != a && !this.Ze)) {
            this.log(this.c, "availabilityStartTime changed - restarting...");
            this.Ze = true;
            this.Jd = null;
            this.autoplay = true;
            var b = this;
            window.setTimeout(function() {
                b.vk(b.options);
            }, 2e3);
        }
    };
    P.Ff = function() {
        this.log(this.c, "init dashjs");
        if (this.storage.get("dashjs_video_bitrate")) {
            this.storage.remove("dashjs_video_bitrate");
        }
        try {
            if (this.o == null) {
                this.o = dashjs.MediaPlayer().create();
                this.Ud = this.Pc = false;
                a = {};
                if (!y(this.Sc)) {
                    a["com.widevine.alpha"] = {};
                    a["com.widevine.alpha"].serverURL = this.Sc;
                    a["com.widevine.alpha"].videoRobustness = "SW_SECURE_CRYPTO";
                    a["com.widevine.alpha"].audioRobustness = "SW_SECURE_CRYPTO";
                    if (!y(this.Db)) {
                        a["com.widevine.alpha"].httpRequestHeaders = {
                            "x-dt-custom-data": this.Db
                        };
                    }
                }
                if (!y(this.vd)) {
                    a["com.microsoft.playready"] = {};
                    a["com.microsoft.playready"].serverURL = this.vd;
                    if (!y(this.ud)) {
                        a["com.microsoft.playready"].httpRequestHeaders = {
                            "x-dt-custom-data": this.ud
                        };
                    }
                }
                this.o.initialize(this.video, this.ea, true);
                this.o.setProtectionData(a);
                this.Bl();
                if (!this.i.contextmenu) {
                    this.i.contextmenu = T(this.view.nc, "contextmenu", this.lc("contextmenu"), this);
                }
                if (!this.i.contextmenu2) {
                    this.i.contextmenu2 = T(this.video, "contextmenu", this.lc("contextmenu"), this);
                }
                if (!this.i.click) {
                    this.i.click = T(this.video, "click", this.lc("click"), this);
                }
                if (!this.O) {
                    this.o.updateSettings({
                        streaming: {
                            abr: {
                                autoSwitchBitrate: {
                                    video: this.Rc,
                                    audio: this.Rc
                                }
                            }
                        }
                    });
                }
                a = true;
                if (this.O) {
                    a = !this.h.H();
                }
                this.o.updateSettings({
                    streaming: {
                        abr: {
                            bandwidthSafetyFactor: this.O ? .7 : .9,
                            initialBitrate: {}
                        },
                        lastBitrateCachingInfo: {
                            enabled: this.O ? false : true
                        },
                        lastMediaSettingsCachingInfo: {
                            enabled: this.O ? false : true
                        },
                        buffer: {
                            fastSwitchEnabled: a
                        },
                        retryIntervals: {
                            MPD: 1e3
                        },
                        retryAttempts: {
                            MPD: 5e3,
                            XLinkExpansion: 5e3,
                            MediaSegment: 5e3,
                            InitializationSegment: 5e3,
                            BitstreamSwitchingSegment: 5e3,
                            IndexSegment: 5e3,
                            other: 5e3,
                            license: 10,
                            lowLatencyMultiplyFactor: 100,
                            FragmentInfoSegment: 5e3
                        },
                        fragmentRequestTimeout: this.O ? 5e3 : 0
                    }
                });
                if (this.Rc) {
                    this.Ud = true;
                }
                this.o.setAutoPlay(true);
            } else {
                this.Ud = this.Pc = this.yg = false;
                var a = {};
                if (!y(this.Sc)) {
                    a["com.widevine.alpha"] = {};
                    a["com.widevine.alpha"].serverURL = this.Sc;
                    a["com.widevine.alpha"].videoRobustness = "SW_SECURE_CRYPTO";
                    a["com.widevine.alpha"].audioRobustness = "SW_SECURE_CRYPTO";
                    if (!y(this.Db)) {
                        a["com.widevine.alpha"].httpRequestHeaders = {
                            "x-dt-custom-data": this.Db
                        };
                    }
                }
                if (!y(this.vd)) {
                    a["com.microsoft.playready"] = {};
                    a["com.microsoft.playready"].serverURL = this.vd;
                    if (!y(this.ud)) {
                        a["com.microsoft.playready"].httpRequestHeaders = {
                            "x-dt-custom-data": this.ud
                        };
                    }
                }
                this.o.setProtectionData(a);
                this.o.attachSource(this.ea);
            }
            this.Sa(this.state.ga);
            this.controls.Z(true);
            this.controls.F(true);
            window.__cda_dashjs = this.o;
        } catch (b) {
            this.log(this.c, b);
        }
    };
    P.Qo = function() {
        return "BUFFER_EMPTY BUFFER_LOADED CAN_PLAY ERROR LOG MANIFEST_LOADED FRAGMENT_LOADING_STARTED FRAGMENT_LOADING_PROGRESS FRAGMENT_LOADING_COMPLETED PERIOD_SWITCH_COMPLETED PERIOD_SWITCH_STARTED PLAYBACK_ENDED PLAYBACK_ERROR PLAYBACK_METADATA_LOADED PLAYBACK_PAUSED PLAYBACK_PLAYING PLAYBACK_PROGRESS PLAYBACK_RATE_CHANGED PLAYBACK_SEEKED PLAYBACK_SEEKING PLAYBACK_STARTED PLAYBACK_STALLED PLAYBACK_TIME_UPDATED PLAYBACK_WAITING PLAYBACK_NOT_ALLOWED GAP_CAUSED_INTERNAL_SEEK GAP_CAUSED_SEEK_TO_PERIOD_END AST_IN_FUTURE STREAM_INITIALIZED STREAM_INITIALIZING STREAM_TEARDOWN_COMPLETE STREAM_UPDATED SOURCE_INITIALIZED QUALITY_CHANGE_REQUESTED QUALITY_CHANGE_RENDERED TEXT_TRACK_ADDED TEXT_TRACKS_ADDED".split(" ");
    };
    P.Bl = function() {
        var a = "BUFFER_EMPTY BUFFER_LOADED CAN_PLAY ERROR LOG MANIFEST_LOADED FRAGMENT_LOADING_STARTED FRAGMENT_LOADING_PROGRESS FRAGMENT_LOADING_COMPLETED PERIOD_SWITCH_COMPLETED PERIOD_SWITCH_STARTED PLAYBACK_ENDED PLAYBACK_ERROR PLAYBACK_METADATA_LOADED PLAYBACK_PAUSED PLAYBACK_PLAYING PLAYBACK_PROGRESS PLAYBACK_RATE_CHANGED PLAYBACK_SEEKED PLAYBACK_SEEKING PLAYBACK_STARTED PLAYBACK_STALLED PLAYBACK_TIME_UPDATED PLAYBACK_WAITING PLAYBACK_NOT_ALLOWED GAP_CAUSED_INTERNAL_SEEK GAP_CAUSED_SEEK_TO_PERIOD_END AST_IN_FUTURE STREAM_INITIALIZED STREAM_INITIALIZING STREAM_TEARDOWN_COMPLETE STREAM_UPDATED SOURCE_INITIALIZED QUALITY_CHANGE_REQUESTED QUALITY_CHANGE_RENDERED TEXT_TRACK_ADDED TEXT_TRACKS_ADDED".split(" ");
        for (var b = 0; b < a.length; b++) {
            try {
                if (a[b] == "STREAM_INITIALIZED") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.Ej, this));
                } else if (a[b] == "ERROR") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.pj, this));
                } else if (a[b] == "PLAYBACK_ERROR") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.wj, this));
                } else if (a[b] == "PLAYBACK_TIME_UPDATED") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.Bj, this));
                } else if (a[b] == "PLAYBACK_PLAYING") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.xj, this));
                } else if (a[b] == "PLAYBACK_ENDED") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.vj, this));
                } else if (a[b] == "PLAYBACK_SEEKED") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.zj, this));
                } else if (a[b] == "PLAYBACK_SEEKING") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.Aj, this));
                } else if (a[b] == "PLAYBACK_WAITING") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.Cj, this));
                } else if (a[b] == "PLAYBACK_PROGRESS") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.yj, this));
                } else if (a[b] == "FRAGMENT_LOADING_STARTED") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.Dj, this));
                } else if (a[b] == "FRAGMENT_LOADING_COMPLETED") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.rj, this));
                } else if (a[b] == "MANIFEST_LOADED") {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.uj, this));
                } else {
                    this.o.on(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.qj, this));
                }
            } catch (e) {}
        }
        this.o.on("public_licenseRequestComplete", this.C.G(this.tj, this));
        this.o.on("public_keyStatusesChanged", this.C.G(this.sj, this));
    };
    P.Dn = function() {
        var a = "BUFFER_EMPTY BUFFER_LOADED CAN_PLAY ERROR LOG MANIFEST_LOADED FRAGMENT_LOADING_STARTED FRAGMENT_LOADING_PROGRESS FRAGMENT_LOADING_COMPLETED PERIOD_SWITCH_COMPLETED PERIOD_SWITCH_STARTED PLAYBACK_ENDED PLAYBACK_ERROR PLAYBACK_METADATA_LOADED PLAYBACK_PAUSED PLAYBACK_PLAYING PLAYBACK_PROGRESS PLAYBACK_RATE_CHANGED PLAYBACK_SEEKED PLAYBACK_SEEKING PLAYBACK_STARTED PLAYBACK_STALLED PLAYBACK_TIME_UPDATED PLAYBACK_WAITING PLAYBACK_NOT_ALLOWED GAP_CAUSED_INTERNAL_SEEK GAP_CAUSED_SEEK_TO_PERIOD_END AST_IN_FUTURE STREAM_INITIALIZED STREAM_INITIALIZING STREAM_TEARDOWN_COMPLETE STREAM_UPDATED SOURCE_INITIALIZED QUALITY_CHANGE_REQUESTED QUALITY_CHANGE_RENDERED TEXT_TRACK_ADDED TEXT_TRACKS_ADDED".split(" ");
        for (var b = 0; b < a.length; b++) {
            try {
                if (a[b] == "STREAM_INITIALIZED") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.Ej, this));
                } else if (a[b] == "ERROR") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.pj, this));
                } else if (a[b] == "PLAYBACK_ERROR") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.wj, this));
                } else if (a[b] == "PLAYBACK_TIME_UPDATED") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.Bj, this));
                } else if (a[b] == "PLAYBACK_PLAYING") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.xj, this));
                } else if (a[b] == "PLAYBACK_ENDED") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.vj, this));
                } else if (a[b] == "PLAYBACK_SEEKED") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.zj, this));
                } else if (a[b] == "PLAYBACK_SEEKING") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.Aj, this));
                } else if (a[b] == "PLAYBACK_WAITING") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.Cj, this));
                } else if (a[b] == "PLAYBACK_PROGRESS") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.yj, this));
                } else if (a[b] == "FRAGMENT_LOADING_STARTED") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.Dj, this));
                } else if (a[b] == "FRAGMENT_LOADING_COMPLETED") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.rj, this));
                } else if (a[b] == "MANIFEST_LOADED") {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.uj, this));
                } else {
                    this.o.off(window.dashjs.MediaPlayer.events[a[b]], this.C.G(this.qj, this));
                }
            } catch (e) {}
        }
        this.o.off("public_licenseRequestComplete", this.C.G(this.tj, this));
        this.o.off("public_keyStatusesChanged", this.C.G(this.sj, this));
    };
    P.ap = function() {
        this.log(this.c, "init videojs");
        try {
            if (this.P == null) {
                this.P = window.videojs(this.video, {
                    autoplay: false,
                    preload: "auto"
                });
                this.P.eme();
            } else {
                this.Mh = false;
            }
            var a = this;
            this.P.src({
                src: this.Pb,
                type: "application/x-mpegURL",
                keySystems: {
                    "com.apple.fps.1_0": {
                        certificateUri: this.Kf,
                        certificateHeaders: {
                            "x-dt-custom-data": this.Db
                        },
                        getContentId: function(a, b) {
                            a = b;
                            b = Array(a.length / 2);
                            for (var e = 0; e < a.length / 2; e++) {
                                b[e] = a[2 * e];
                            }
                            a = String.fromCharCode.apply(null, b);
                            b = a.indexOf("skd://drmtoday?");
                            if (b === -1) {
                                return "";
                            }
                            a = a.substring(b + 6);
                            a = a.replace(/assetid/gi, "assetId");
                            a = a.replace(/variantid/gi, "variantId");
                            this.log(a);
                            return a;
                        },
                        getLicense: function(b, f, g, l) {
                            window.videojs.xhr({
                                url: a.Lf,
                                method: "POST",
                                responseType: "text",
                                body: "spc=" + encodeURIComponent(btoa(String.fromCharCode.apply(null, g))),
                                headers: {
                                    "Cache-Control": "max-age=0",
                                    Pragma: "no-cache",
                                    "Content-type": "application/x-www-form-urlencoded",
                                    "x-dt-custom-data": a.Db
                                }
                            }, function(a, b, e) {
                                if (a) {
                                    l(a);
                                } else {
                                    l(null, e);
                                }
                            });
                        }
                    }
                }
            });
            this.P.play();
            this.P.el().querySelector("video").classList.add("pb-video-player");
            this.P.on("play", this.C.G(this.Vm, this));
            this.P.on("playing", this.C.G(this.Wm, this));
            this.P.on("pause", this.C.G(this.Um, this));
            this.P.on("timeupdate", this.C.G(this.Zm, this));
            this.P.on("seeking", this.C.G(this.Ym, this));
            this.P.on("seeked", this.C.G(this.Xm, this));
            this.P.on("ended", this.C.G(this.Rm, this));
            this.P.on("error", this.C.G(this.Sm, this));
            this.P.on("loadedmetadata", this.C.G(this.Tm, this));
            this.video = this.P.tech({
                IWillNotUseThisInPlugins: true
            }).el();
            this.controls.F(true);
            try {
                var b = this.Cf();
                if (b != 0 && b.hasOwnProperty("volume")) {
                    this.controls.J(b.volume);
                } else if (this.qd("cda.player.volume")) {
                    this.controls.J(this.Yb("cda.player.volume"));
                } else {
                    this.controls.J(this.controls.Fc);
                }
            } catch (e) {
                this.controls.J(this.controls.Fc);
            }
            this.controls.Ae();
        } catch (e) {
            this.log(this.c, e);
        }
    };
    P.Vm = function() {
        if (!this.K && !!this.view.content.I("pb-pip-enabled") && !this.view.content.I("pb-frame-posible")) {
            this.view.content.w("pb-frame-posible");
        }
    };
    P.Wm = function() {
        this.Sa(this.state.ga);
        this.controls.Z(true);
        if (this.ha == -1 && 0 < this.f.duration && this.zc() != 33 && !this.K && this.hb() !== false && (this.Ob() || this.f.type == "premium" || this.f.type == "premium_free")) {
            try {
                var a = this;
                window.$.ajax({
                    url: "//api.cda.pl/h.php?uid=" + this.hb(),
                    type: "post",
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true
                    },
                    data: {
                        currentTime: 0,
                        duration: this.f.duration,
                        test: this.Ob(),
                        server: this.Xd()
                    },
                    success: function() {
                        a.ha = 0;
                    }
                });
            } catch (b) {
                this.log(this.c, b);
            }
        }
    };
    P.Um = function() {};
    P.Zm = function() {
        return this.Uc();
    };
    P.Rm = function() {
        return this.Ad();
    };
    P.Ym = function() {
        this.Yc(true);
        this.controls.F(true);
    };
    P.Xm = function() {
        this.Yc(false);
        this.Fd(-1);
        this.ge();
        if (-1 < this.ha) {
            this.ha = this.l();
        }
        this.P.play();
        this.controls.F(false);
        try {
            var a = this.controls.za.querySelectorAll(".pb-progress-midroll-marker");
            if (!y(a) && 0 < a.length) {
                for (var b = 0; b < a.length; b++) {
                    var e = a[b];
                    if (!y(e) && !y(e.getAttribute("data-time")) && e.getAttribute("data-time") < this.l()) {
                        e.m();
                    }
                }
            }
        } catch (f) {
            this.log(this.c, f);
        }
    };
    P.Sm = function() {};
    P.Tm = function() {};
    P.jo = function() {
        window[this.V.client].tvGetProgramForAllChannels({
            success: this.C.G(this.ko, this)
        });
    };
    P.ko = function(a) {
        if (a && 0 < a.length) {
            for (var b = 0; b < a.length; b++) {
                for (var e = 0; e < this.ka.length; e++) {
                    if (a[b].channel == this.ka[e].url) {
                        if (a[b].program.actual.start_time_ts > this.ka[e].program.actual.start_time_ts) {
                            this.ka[e].program = a[b].program;
                        }
                        break;
                    }
                }
            }
            try {
                window.tvUpdatePrograms(a);
            } catch (f) {}
        }
        this.controls.wk(this);
    };
    P.ho = function() {
        if (!(1 >= this.ja.program.end_time_ts) && !((new Date).getTime() / 1e3 < this.ja.program.end_time_ts) && !this.Hh) {
            this.Hh = true;
            window[this.V.client].tvGetCurrentProgram(this.ja.url, this.ja.program.start_time_ts, {
                success: this.C.G(this.io, this)
            });
        }
    };
    P.io = function(a) {
        if (a) {
            this.ja.program = a;
            for (var b = 0; b < this.ka.length; b++) {
                if (this.ja.url == this.ka[b].url) {
                    this.ka[b].program.actual = a;
                    this.controls.Xc();
                    break;
                }
            }
        }
        this.Hh = false;
        this.controls.wk(this);
    };
    P.Xk = function(a, b, e) {
        try {
            window[this.V.client].videoGetLink(this.f.id, a, this.f.ts, this.f.hash2, {
                success: function(a) {
                    this.log(this.f, a)
                    this.log(this.c, "urlloader", a.resp);
                    if (a.status == "ok" && a.resp != null) {
                        b(a.resp);
                    } else {
                        e();
                    }
                }.bind(this),
                error: function() {
                    e();
                }
            });
        } catch (f) {
            e();
        }
    };
    P.Gn = function(a) {
        if (this.zc() != 33) {
            try {
                window[this.V.client].saveVideoQuality(a);
            } catch (b) {}
        }
    };
    P.Be = function() {
        var a = this;
        var b;
        var e;
        var f;
        var g;
        var l;
        var k;
        var p;
        var u;
        pa(new oa(new r(function(v) {
            switch (v.Bc) {
                case 1:
                    a.log(a.c, "init Shaka Player");
                    window.shaka.polyfill.installAll();
                    a.video.autoplay = true;
                    if (a.da == null) {
                        a.da = new window.shaka.Player(a.video);
                        b = new window.shaka.util.EventManager;
                        e = a;
                        b.listen(a.da, "buffering", function(a) {
                            e.controls.F(a.buffering);
                            e.Yf = a.buffering;
                        });
                        b.listen(a.video, "timeupdate", a.C.G(a.Jm, a));
                        b.listen(a.video, "pause", a.C.G(a.Fm, a));
                        b.listen(a.video, "playing", a.C.G(a.Gm, a));
                        b.listen(a.video, "ended", a.C.G(a.Bm, a));
                        b.listen(a.video, "seeking", a.C.G(a.Im, a));
                        b.listen(a.video, "seeked", a.C.G(a.Hm, a));
                        a.da.addEventListener("error", a.C.G(a.Cm, a));
                        if (!a.i.contextmenu) {
                            a.i.contextmenu = T(a.view.nc, "contextmenu", a.lc("contextmenu"), a);
                        }
                        if (!a.i.contextmenu2) {
                            a.i.contextmenu2 = T(a.video, "contextmenu", a.lc("contextmenu"), a);
                        }
                        if (!a.i.click) {
                            a.i.click = T(a.video, "click", a.lc("click"), a);
                        }
                    }
                    f = null;
                    if (y(a.Pb) || a.Pb == "" || !a.h.be() && !a.h.Xi() || !a.h.ra() && !a.h.Rg()) {
                        if (!y(a.Sc)) {
                            g = a.Db;
                            if (!y(a.Db)) {
                                a.da.getNetworkingEngine().registerRequestFilter(function(a, b) {
                                    if (a == window.shaka.net.NetworkingEngine.RequestType.LICENSE) {
                                        b.headers["x-dt-custom-data"] = g;
                                    }
                                });
                            }
                            a.da.configure({
                                drm: {
                                    servers: {
                                        "com.widevine.alpha": a.Sc
                                    },
                                    advanced: {
                                        "com.widevine.alpha": {
                                            videoRobustness: "SW_SECURE_CRYPTO",
                                            audioRobustness: "SW_SECURE_CRYPTO"
                                        }
                                    }
                                }
                            });
                        }
                        if (!y(a.vd)) {
                            g = a.ud;
                            if (!y(a.ud)) {
                                a.da.getNetworkingEngine().registerRequestFilter(function(a, b) {
                                    if (a == window.shaka.net.NetworkingEngine.RequestType.LICENSE) {
                                        b.headers["x-dt-custom-data"] = g;
                                    }
                                });
                            }
                            a.da.configure({
                                drm: {
                                    servers: {
                                        "com.microsoft.playready": a.vd
                                    }
                                }
                            });
                        }
                        f = a.ea;
                        v.Bc = 2;
                        break;
                    }
                    e = a;
                    a.da.configure("streaming.useNativeHlsOnSafari", true);
                    a.da.configure("drm.initDataTransform", function(a, b) {
                        if (b != "skd") {
                            return a;
                        }
                        window.shaka.util.StringUtils.fromBytesAutoDetect(a);
                        b = String.fromCharCode.apply(null, a);
                        b = b.replace("skd://", "");
                        var f = e.da.drmInfo().serverCertificate;
                        return window.shaka.util.FairPlayUtils.initDataTransform(a, b, f);
                    });
                    if (!y(a.Db)) {
                        g = a.Db;
                        a.da.getNetworkingEngine().registerRequestFilter(function(a, b) {
                            if (a == window.shaka.net.NetworkingEngine.RequestType.LICENSE) {
                                a = new Uint8Array(b.body);
                                a = window.shaka.util.Uint8ArrayUtils.toStandardBase64(a);
                                a = "spc=" + encodeURIComponent(a);
                                b.headers["Content-Type"] = "application/x-www-form-urlencoded";
                                b.headers["x-dt-custom-data"] = g;
                                b.body = a;
                            }
                        });
                        a.da.getNetworkingEngine().registerResponseFilter(function(a, b) {
                            if (a == window.shaka.net.NetworkingEngine.RequestType.LICENSE) {
                                a = window.shaka.util.StringUtils.fromUTF8(b.data);
                                a = a.trim();
                                if (a.substr(0, 5) === "<ckc>" && a.substr(-6) === "</ckc>") {
                                    a = a.slice(5, -6);
                                }
                                b.data = window.shaka.util.Uint8ArrayUtils.fromBase64(a).buffer;
                            }
                        });
                    }
                    if (y(a.Kf) || y(a.Lf)) {
                        v.Bc = 3;
                        break;
                    }
                    return q(v, fetch(a.Kf, {
                        headers: {
                            "x-dt-custom-data": a.Db
                        }
                    }), 4);
                case 4:
                    l = v.eg;
                    return q(v, l.arrayBuffer(), 5);
                case 5:
                    k = v.eg;
                    if (!l.ok) {
                        if (a.O) {
                            a.controls.ie.w("pb-time-tv-info-live-disable");
                        }
                        a.view.show(a.view.alert);
                        a.view.pb(a.view.Wa, "Wyst\u0105pi\u0142 b\u0142\u0105d podczas odtwarzania. Od\u015Bwie\u017C stron\u0119 i spr\xF3buj ponownie.<br>(error code: P1038)");
                        a.controls.disable();
                        a.disabled = true;
                        return v.return();
                    }
                    a.da.configure({
                        drm: {
                            servers: {
                                "com.apple.fps.1_0": a.Lf
                            },
                            advanced: {
                                "com.apple.fps.1_0": {
                                    serverCertificate: new Uint8Array(k)
                                }
                            }
                        }
                    });
                case 3:
                    f = a.Pb.replace("/stereo", "");
                case 2:
                    p = a.Rc == 1;
                    a.da.configure({
                        abr: {
                            enabled: p
                        }
                    });
                    u = false;
                    if (a.O && f && -1 < f.indexOf("tvp")) {
                        u = true;
                        a.da.configure({
                            streaming: {
                                lowLatencyMode: u
                            }
                        });
                    }
                    if (0 < a.Qa && a.autoplay) {
                        a.video.muted = true;
                    }
                    v.vf = 6;
                    return q(v, a.da.load(f).then(a.C.G(a.Em, a)).catch(a.C.G(a.Dm, a)), 8);
                case 8:
                    la(v);
                    break;
                case 6:
                    ma(v);
                case 7:
                    a.Sa(a.state.ga);
                    a.controls.Z(true);
                    a.controls.F(true);
                    window.__cda_shakaPlayer = a.da;
                    v.Bc = 0;
            }
        })));
    };
    P.Em = function() {
        this.log(this.c, "manifest loaded");
        try {
            if (A(window.onShakaPlayerInit)) {
                window.onShakaPlayerInit(this.da);
            }
        } catch (b) {}
        if (!this.O) {
            var a = null;
            switch (this.f.quality) {
                case "hd":
                    a = 1920;
                    break;
                case "sd":
                    a = 1280;
                    break;
                case "lq":
                    a = 854;
                    break;
                case "vl":
                    a = 640;
            }
            if (a != null) {
                this.jk(a);
            }
        }
    };
    P.Dm = function(a) {
        this.log(this.c, "manifest load error");
        if (a && (!a || typeof a.code != "undefined")) {
            var b = "";
            if (a && a.code != "undefined") {
                if (a.code == 7e3) {
                    return;
                }
                b = " / " + a.code;
            }
            if (this.O) {
                this.controls.ie.w("pb-time-tv-info-live-disable");
            }
            if (this.h.H() && this.h.pd() && a && a.code == 6001) {
                a = "market://details?id=pl.cda";
                if (this.h.ra()) {
                    a = "https://apps.apple.com/pl/app/cda-pl/id1318175670";
                }
                this.view.pb(this.view.Wa, 'Je\u015Bli jeste\u015B w trybie incognito to uruchom przegl\u0105dark\u0119 w trybie normalnym lub <a href="' + a + '" style="color:#e28525">pobierz aplikacj\u0119 CDA na swoje urz\u0105dzenie</a>.<br><br>Od\u015Bwie\u017C stron\u0119 i spr\xF3buj ponownie (error code: P1038' + b + ").");
            } else {
                this.view.pb(this.view.Wa, "Wyst\u0105pi\u0142 b\u0142\u0105d podczas odtwarzania. Od\u015Bwie\u017C stron\u0119 i spr\xF3buj ponownie.<br>(error code: P1036" + b + ")");
            }
            this.view.show(this.view.alert);
            this.controls.disable();
            this.disabled = true;
        }
    };
    P.Cm = function(a) {
        this.log(this.c, "shaka Player error");
        if (10 > this.l() && this.h.Hl() && 90 > this.h.rl()) {
            this.view.pb(this.view.Wa, 'W zwi\u0105zku z tym, i\u017C nowe urz\u0105dzenia ChromeBook maj\u0105 problemy z odtwarzaniem wideo z protoko\u0142em DRM, polecamy zainstalowa\u0107 aplikacj\u0119 na android CDA, kt\xF3ra umo\u017Cliwi odtwarzanie wideo. <b>Aby zainstalowa\u0107 nale\u017Cy wej\u015B\u0107 w Android Apps i wyszuka\u0107 "cda.pl".</b> <br>Mamy nadziej\u0119, i\u017C firma Google szybko upora si\u0119 z problemem odtwarzania wideo na urz\u0105dzeniach ChromeBook.<br>(error code: P1039)');
            this.view.show(this.view.alert);
            this.controls.disable();
            this.disabled = true;
        } else if (a && (!a || typeof a.code != "undefined")) {
            var b = "";
            if (a && a.code != "undefined") {
                b = " / " + a.code;
            }
            if (this.O) {
                this.controls.ie.w("pb-time-tv-info-live-disable");
            }
            this.view.show(this.view.alert);
            this.view.pb(this.view.Wa, "Wyst\u0105pi\u0142 b\u0142\u0105d podczas odtwarzania. Od\u015Bwie\u017C stron\u0119 i spr\xF3buj ponownie.<br>(error code: P1037" + b + ")");
            this.controls.disable();
            this.disabled = true;
        }
    };
    P.Jm = function() {
        return this.Uc();
    };
    P.Bm = function() {
        return this.Ad();
    };
    P.Fm = function() {
        this.log(this.c, "on shaka Player pause");
        this.Sa(this.state.qc);
        this.controls.qa(true);
        this.controls.F(false);
    };
    P.Gm = function() {
        this.log(this.c, "on shaka Player playing");
        if (!this.K && !!this.view.content.I("pb-pip-enabled") && !this.view.content.I("pb-frame-posible")) {
            this.view.content.w("pb-frame-posible");
        }
        this.Sa(this.state.ga);
        if (!this.Yf) {
            this.controls.F(false);
            this.controls.Z(true);
        }
        if (this.O && this.$e) {
            this.$e = false;
            this.controls.Kg();
            if (this.controls.Ca) {
                this.controls.cc();
            }
        }
        if (this.ha == -1 && 0 < this.f.duration && this.zc() != 33 && !this.K && this.hb() !== false && (this.Ob() || this.f.type == "premium" || this.f.type == "premium_free")) {
            try {
                var a = this;
                window.$.ajax({
                    url: "//api.cda.pl/h.php?uid=" + this.hb(),
                    type: "post",
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true
                    },
                    data: {
                        currentTime: 0,
                        duration: this.f.duration,
                        test: this.Ob(),
                        server: this.Xd()
                    },
                    success: function() {
                        a.ha = 0;
                    }
                });
            } catch (b) {
                this.log(this.c, b);
            }
        }
        if (this.O && this.ha == -1) {
            try {
                a = this;
                window.$.ajax({
                    url: "//api.cda.pl/htv.php?uid=" + this.hb(),
                    type: "post",
                    crossDomain: true,
                    xhrFields: {
                        withCredentials: true
                    },
                    data: {
                        request_id: this.options.request_id,
                        channel_id: this.options.tv_live.channel_id,
                        channel_url: this.ja.url
                    },
                    success: function() {
                        a.ha = 0;
                    }
                });
            } catch (b) {
                this.log(this.c, b);
            }
        }
        if (0 < this.Qa && this.fd === -1 && this.Qa < this.M()) {
            this.cb(this.Qa);
            this.fd = this.Qa;
        }
    };
    P.Hm = function() {
        this.log(this.c, "shaka player seeked");
        this.Yc(false);
        this.Fd(-1);
        this.ge();
        if (-1 < this.ha) {
            this.ha = this.l();
        }
        if (this.video.paused) {
            this.video.play();
        }
        this.controls.F(false);
        try {
            var a = this.controls.za.querySelectorAll(".pb-progress-midroll-marker");
            if (!y(a) && 0 < a.length) {
                for (var b = 0; b < a.length; b++) {
                    var e = a[b];
                    if (!y(e) && !y(e.getAttribute("data-time")) && e.getAttribute("data-time") < this.l()) {
                        e.m();
                    }
                }
            }
        } catch (f) {
            this.log(this.c, f);
        }
    };
    P.Im = function() {
        this.log(this.c, "shaka player seeking");
        this.Yc(true);
        this.controls.F(true);
    };
    P.jk = function(a) {
        if (854 <= a) {
            this.da.configure({
                abr: {
                    enabled: true
                }
            });
        } else if (this.da.configure({
                abr: {
                    enabled: false
                }
            }), a != null) {
            var b = this.f.quality == "hd" || this.Xg ? this.da.getVariantTracks().filter(function(b) {
                return b.width === a;
            }).pop() : this.da.getVariantTracks().filter(function(b) {
                return b.width === a;
            }).shift();
            if (b) {
                this.log(this.c, "change quality");
                this.log(this.c, b);
                this.da.selectVariantTrack(b, true);
            }
        }
    };
    P.Xd = function() {
        try {
            var a = "";
            if (this.da != null || this.o != null) {
                if (y(this.Pb) || this.Pb == "" || !this.h.be() && !this.h.Xi() || !this.h.ra() && !this.h.Rg()) {
                    if (!y(this.ea) && this.ea != "") {
                        a = new URL(this.ea);
                    }
                } else {
                    a = new URL(this.Pb);
                }
            }
            if (a == "") {
                a = new URL(this.src);
            }
            return a.hostname.replace(".cda.pl", "");
        } catch (b) {
            return "";
        }
    };
    P = Ea.prototype;
    P.gl = function(a) {
        if (this.C.Ti(a)) {
            var b = this.Uk(this.a.options.video.width, this.a.options.video.height);
            var e = "";
            if (b.x == 1 && b.y == 1) {
                e = "pb-format16x9";
            }
            var f = '<span class="pb-ico-above-hide"></span>';
            if (!y(this.a.options.video.content_rating)) {
                f = '<span class="pb-ico-above-wrapp"><span class="pb-ico-above-' + this.a.options.video.content_rating + 'y"></span></span>';
            }
            this.dk(a, '<div class="pb-player-html-wrapper"><div class="pb-player-settings-posible"><div class="pb-player-content ' + b.className + " " + e + '"> <style>' + ("#" + this.a.options.id + " .pb-video-active .pb-stretching-full .pb-video-player {transform: scaleX(" + b.x + ") scaleY(" + b.y + ")} .pb-vid-click {position: absolute;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;} .pb-block-video-player {width: 100%; background: #000; position: relative; object-fit: contain;} .pb-tv .pb-block-video-player, .pb-mobile .pb-block-video-player{position:absolute;top:0;left:0;height:100%} .pb-browser-opera .pb-block-video-player{object-fit:initial} .brdPlayerWrapper :-webkit-full-screen .pb-block-video-player {display:inline-block;vertical-align:middle;width:100%;height:100% !important} .brdPlayerWrapper :-moz-full-screen .pb-block-video-player {display:inline-block;vertical-align:middle;width:100%;height:100% !important} :-ms-fullscreen .pb-block-video-player {display:inline-block;vertical-align:middle;width:100%;height:100% !important} .brdPlayerWrapper :full-screen .pb-block-video-player {display:inline-block;vertical-align:middle;width:100%;height:100% !important} .brdPlayerWrapper :fullscreen .pb-block-video-player {display:inline-block;vertical-align:middle;width:100%;height:100% !important} .pb-video-fullscreen .pb-block-video-player {display:inline-block;vertical-align:middle;width:100%;height:100% !important}") + ' .pb-run-ad .pb-progress-midroll-marker {display:none;}</style><div class="pb-player-html"><span class="pb-ady-counter"></span><span class="pb-ady-player-wrap"><span id="pb-yt-iframe"></span><span class="pb-ady-skip"></span></span><span class="pb-video-player-wrap"><div class="player-mute-off" style="display:none;width:100%; height:100%; z-index:10000; position: absolute; background:#000; opacity:0.6; text-align:center; align-items: center; justify-content: center;"><div style="width: 400px;margin-top: -20px;"><div style="width: 100%;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYuNSAxMmMwLTEuNzctMS4wMi0zLjI5LTIuNS00LjAzdjIuMjFsMi40NSAyLjQ1Yy4wMy0uMi4wNS0uNDEuMDUtLjYzem0yLjUgMGMwIC45NC0uMiAxLjgyLS41NCAyLjY0bDEuNTEgMS41MUMyMC42MyAxNC45MSAyMSAxMy41IDIxIDEyYzAtNC4yOC0yLjk5LTcuODYtNy04Ljc3djIuMDZjMi44OS44NiA1IDMuNTQgNSA2Ljcxek00LjI3IDNMMyA0LjI3IDcuNzMgOUgzdjZoNGw1IDV2LTYuNzNsNC4yNSA0LjI1Yy0uNjcuNTItMS40Mi45My0yLjI1IDEuMTh2Mi4wNmMxLjM4LS4zMSAyLjYzLS45NSAzLjY5LTEuODFMMTkuNzMgMjEgMjEgMTkuNzNsLTktOUw0LjI3IDN6TTEyIDRMOS45MSA2LjA5IDEyIDguMThWNHoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+" style="filter: invert(1); height: 200px; opacity:0.7;"></div><div style="width:100%;font-size: 28px;">Wy\u0142\u0105cz wyciszenie</div></div></div> <img class="pb-resp-width-max" src="//static.cda.pl/v001/img/mobile/v16x9.png"><span class="pb-fl-player-wrap"><span class="pb-post-fl"><span class="pb-video-player-content"><video class="pb-video-player" webkit-playsinline="true" playsinline="true"></video></span><span class="pb-valign-middle"></span></span></span> <span class="pb-video-poster"><span class="pb-valign-middle"></span></span><span class="pb-logo"></span> <span class="pb-vid-click"></span><span class="pb-video-ad-container"><span class="pb-video-ad-content"></span><span class="pb-valign-middle"></span></span><span class="pb-play-ico"></span> <span class="pb-loader-ico"></span> <span class="pb-next-video-wrapper" style="display: none"> <span class="pb-next-video-content"> <span class="pb-next-video-title"></span> <span class="pb-next-viteo-thumb-wrapper"> <img class="pb-next-thumb-video" src=""/> <span class="pb-next-timer-wrapper"> <svg width="100%" viewBox="0 0 98 98" height="100%"> <circle transform="rotate(-90)" stroke-width="18" stroke="rgba(0,0,0,0.5)" r="32.5" fill-opacity="0" cy="49" cx="-49" class="load-new-film"/> <circle class="pb-next-video-circle-progress" transform="rotate(-90)" stroke-width="14" stroke-dasharray="208.2%" stroke-dashoffset="204px" stroke="rgba(249, 249, 249, 0.5)" r="32.5" fill-opacity="0" cy="49" cx="-49" class="load-new-film"/> <polygon points="42,37 62,49 42,61"fill="rgba(255,255,255,0.7)" class="pb-next-play"/> </svg> </span> <span class="pb-ie-next-loader" style="display: none"> <span class="pb-ie-next-loader-progress"></span> </span> <a href="#" title="" class="pb-next-click"></a> </span> <span class="pb-btn-wrapper"> <a class="pb-btn-cancel">anuluj</a> </span> </span> </span> <span class="pb-alert" style="display:none"> <span class="pb-alert-body"> <span class="header-alert"></span> <span class="text-alert"></span> </span> <span class="pb-alert-valign-middle"></span> </span> <span class="pb-ad-counter" style="display: none"></span><span class="pb-ad-info" style="display: none;"></span><span class="pb-ad-premium-click" style="display:none"><span>Aktywuj CDA Premium aby wy\u0142\u0105czy\u0107 reklamy <img src="https://scdn.cda.pl/v001/img/player/touch_app_white_18.png" /></span></span><span class="pb-ad-pause-plt"> <span class="pb-ad-pause-plt-body"> <span class="pb-ad-pause-plt-content"></span> <span class="pb-ad-pause-plt-skip">Zamknij reklam\u0119 aby wznowi\u0107 odtwarzanie<span class="pb-ad-pause-close-body">\xD7</span></span></span></span><span class="pb-info" style="display: none"><span class="pb-info-container"><span class="pb-info-content"></span></span><span class="pb-valign-middle"></span></span><span class="pb-info-tvoff"><span class="pb-info-tvoff-container"><span class="pb-info-tvoff-content">Czy nadal ogl\u0105dasz?<span class="pb-info-tvoff-btn-true">tak</span><span class="pb-info-tvoff-btn-false">nie</span></span></span><span class="pb-valign-middle"></span></span> ' + f + ' <span class="pb-ccast-float"></span><span class="pb-airplay-float"></span><span class="pb-frame-player-float"></span><a class="pb-ad-close"> <span class="pb pb-ad-close-body" style="display: none"></span> </a> <a class="pb-skip" style="display: none"> <span class=pb-skip-body>pomi\u0144</span> </a> <span class="pb-premium-promotion pb-context-wrapp pb-context-wrapp-hide"><span class="pb-context-body"><span class="pb pb-context-close pb-premium-promotion-close"></span><span class="pb-context-content"><span class="pb-ico-speed"><span></span></span><span class="pb-context-content-body">Potrzebujesz szybszego \u0142adowania wideo? <span class="pb-context-block"><a class="pb-context-button pb-premium-promotion-button" href="https://premium.cda.pl/rejestracja?cd2_sid=1&cd2_n=baner-playertransfer&cd2_hash=3b7e9aec07749895077743bd2c62686ffada59ad">W\u0142\u0105cz konto premium na 14 dni za darmo</a></span><span class="pb-why-more">Dlaczego widz\u0119 ten komunikat?</span></span><span class="pb-why-more-answer"><p>CDA nie limituje przepustowo\u015Bci oraz transferu danych. <br />W godzinach wieczornych mo\u017Ce zdarzy\u0107 si\u0119 jednak, i\u017C ilo\u015B\u0107 u\u017Cytkownik\xF3w przekracza mo\u017Cliwo\u015Bci naszych serwer\xF3w wideo. W\xF3wczas odbi\xF3r mo\u017Ce by\u0107 zak\u0142\xF3cony, a plik wideo mo\u017Ce \u0142adowa\u0107 si\u0119 d\u0142u\u017Cej ni\u017C zwykle.</p><p>W opcji CDA Premium gwarantujemy, i\u017C przepustowo\u015Bci i transferu nie braknie dla \u017Cadnego u\u017Cytkownika. <a href="https://premium.cda.pl/rejestracja?cd2_sid=1&cd2_n=baner-playertransfer&cd2_hash=3b7e9aec07749895077743bd2c62686ffada59ad" class="pb-why-more-register pb-link-color">Zarejestruj swoje konto premium ju\u017C teraz!</a></p></span></span></span></span><span class="pb-box-info"><span class="pb-box-info-content"></span></span><div class="rewind-click-wrapper r-c-right" style="display: none;"><div class="r-c-circle"></div><div class="r-c-circle-min"></div><div class="r-c-text-wrapper"><div class="r-c-text"><img class="r-c-rewind-icon" src="https://scdn.cda.pl/v001/img/player/r-c-rewind-icon-r.png"></div><div class="r-c-text-1 r-c-seconds-counter">10 sekund</div></div></div><div class="rewind-click-wrapper r-c-left" style="display: none;"><div class="r-c-circle"></div><div class="r-c-circle-min"></div><div class="r-c-text-wrapper"><div class="r-c-text"><img class="r-c-rewind-icon" src="https://scdn.cda.pl/v001/img/player/r-c-rewind-icon-l.png"></div><div class="r-c-text r-c-seconds-counter">10 sekund</div></div></div><span class="pb-tv-list-g"> <span class="pb-tv-list-g-bg-logo"></span> <span class="pb-tv-list-g-bg-content"> <a class="pb-tv-list-g-bg-content-bx"> <span class="pb-grap" id="pb-progId-0"></span> <span class="pb-tv-list-g-bg-content-bx-bg"> <span class="pb-tv-list-g-bg-content-pd"> <div class="pb-tvpr-title-header pb-tv-text"> </div><span class="ico-above-24" style="position: absolute; top: 20px; right: 20px; margin-top: 0; margin-right: 0;"></span> <span class="pb-tvpr-info pb-tv-text"> </span> <div class="pb-mrg-m"> <div class="tvpr-row"> <span class="pb-tvpr-header-td pb-tv-text" style="display:none">obsada:</span><span class="pb-tvpr-value-td pb-tv-text"></span> </div><p class="pb-tvpr-description pb-tv-text"></p></div></span> <span class="pb-time-tv-pos-bar"> <span class="pb-actual-time-tv-pos"></span> <span class="pb-max-time-tv-pos"></span> <span class="pb-progress-time-tv-pos pb-progress-time-tv-pos-active"> <span class="pb-progress-time-tv-pos-progress" style="width: 0%;"></span> <span class="pb-progress-bar-tv-pos-area"> <span class="pb-time-tv-pos-position" style="left: 66.0099%;"> <span class="pb-time-tv-pos-cloud"> <span class="pb-time-tv-pos-container">0:00</span> <span class="pb-time-tv-pos-cloud-arrow"></span> </span> </span> <span class="pb pb-progress-bar-time-tv-pos" style="width: 0%"> <span class="bar-line-handle"></span> </span> </span> </span> </span> </span></a><span class="pb-tv-list-end"></span></span><span class="pb-tv-canals-scroll-gw"> <span class="pb-tv-canals-scroll-g" style1="display: none;"> <span class="pb-li-canal-logo-last"></span> </span> </span> </span></span><span class="button-players"> <span class="pb pb-bar"> <span class="pb pb-play"></span> <span class="pb pb-guide"></span> <span class="pb pb-volume"> <span class="pb pb-volume-mute"></span> <span class="pb pb-progress-bar-volume-area"> <span class="pb pb-progress-bar-volume"></span> </span> <span class="pb pb-volume-max"></span> </span> <span class="pb-quality"><span class="pb pb-quality-txt"></span><span class="pb-settings-click"></span><span class="pb-settings-menu pb-settings-menu-quality"><span class="pb-settings-menu-wrapper"><span class="pb-settings-cloud"><span class="pb-settings-container"><span class="pb-menu pb-menu-static"><span class="pb pb-close-settings"></span><span class="pb-header-menu">Jako\u015B\u0107</span><ul class="pb-menu-slave pb-menu-slave-indent"></ul></span></span></span></span><span class="pb-settings-cloud-arrow"></span></span></span><span class="pb pb-settings"><span class="pb-settings-click"></span><span class="pb-settings-menu"><span class="pb-settings-menu-wrapper"><span class="pb-settings-cloud"><span class="pb-settings-container"><span class="pb-menu pb-menu-static"><span class="pb pb-close-settings"></span><span class="pb-header-menu">Ustawienia</span><ul><li><span class="pb-menu-head">Format obrazu </span><ul class="pb-menu-slave"><li item="5"><a><span class="pb-ico-exp"></span><span class="pb-radio"><span class="pb-radio-btn"></span></span>rozszerzony</a></li><li item="6" class="pb-active"><a><span class="pb-ico-norm"></span><span class="pb-radio"><span class="pb-radio-btn"></span></span>normalny</a></li><li item="7"><a><span class="pb-ico-full"></span><span class="pb-radio"><span class="pb-radio-btn"></span></span>rozci\u0105gni\u0119ty</a></li><li item="8"><a><span class="pb-ico-oryg"></span><span class="pb-radio"><span class="pb-radio-btn"></span></span>nieskalowany</a></li></ul></li><li item="1" style="display: none" class="pb-settings-nextvideo"><a><span class="pb-switch"><span class="pb-switch-on-text">on</span><span class="pb-switch-off-text">off</span><span class="pb-switch-btn"></span></span>Autoodtwarzanie nast\u0119pnego video</a></li><li item="4" class="pb-settings-autoplay"><a><span class="pb-switch"><span class="pb-switch-on-text">on</span><span class="pb-switch-off-text">off</span><span class="pb-switch-btn"></span></span>Autoplay</a></li><li style="display: none" item="2" class="pb-settings-loop"><a><span class="pb-switch"><span class="pb-switch-on-text">on</span><span class="pb-switch-off-text">off</span><span class="pb-switch-btn"></span></span>Odtwarzaj w p\u0119tli</a></li><li item="2" style="display: none"><a><span class="pb-switch"><span class="pb-switch-on-text">on</span><span class="pb-switch-off-text">off</span><span class="pb-switch-btn"></span></span>Odtwarzanie w p\u0119tli</a></li><li item="3"><a>Zg\u0142o\u015B problem z playerem</a></li></ul></span></span></span></span><span class="pb-settings-cloud-arrow"></span></span></span><span class="pb pb-ccast"></span><span class="pb pb-fullscreen"></span> <span class="pb-time-bar"> <span class="pb-actual-time">0:00</span> <span class="pb-max-time">0:00</span> <span class="pb pb-progress-time pb-progress-time-active"> <span class="pb pb-progress-time-progress"></span> <span class="pb-progress-bar-area"> <span class="pb-time-position"> <span class="pb-time-cloud"> <span class="pb-time-container">0:00</span> <span class="pb-time-cloud-arrow"></span> </span> </span> <span class="pb pb-progress-bar-time"> <span class="bar-line-handle"></span> </span> </span> </span> </span> <span class="pb-time-tv-bar"> <span class="pb-time-tv-info-live pb-time-tv-info-live-disable"><span class="pb-time-tv-info-live-ico"></span><span class="pb-time-tv-info-live-txt">NA \u017BYWO</span></span><span class="pb-actual-time-tv">00:00</span> <span class="pb-max-time-tv">00:00</span> <span class="pb pb-progress-time-tv pb-progress-time-tv-active"> <span class="pb pb-progress-time-tv-progress" style="width: 0%;"></span> <span class="pb-progress-bar-area"> <span class="pb-time-tv-position" style="left: 0%;"> <span class="pb-time-tv-cloud"> <span class="pb-time-tv-container">0:00</span> <span class="pb-time-tv-cloud-arrow"></span> </span> </span> <span class="pb pb-progress-bar-time-tv" style="width: 0%"> <span class="bar-line-handle"></span> </span> </span> </span> </span> </span> </span><span class="pb-menu-context"><span class="pb-menu"><span class="pb-header-menu">Player wersja: ' + this.a.Lk + '</span><ul><li item="1"><a>Kopiuj adres filmu</a></li><li item="2"><a>Skopiuj kod embed</a></li><li item="3"><a>Zg\u0142o\u015B problem z playerem</a></li><li item="4" style="display:none"><a>Poka\u017C statystyki</a></li></ul></span></span></div></div></div></div>');
        }
    };
    P.Qn = function() {
        this.T = this.ub(".pb-player-html-wrapper", this.a.element);
        this.content = this.j(".pb-player-content");
        this.video = this.j(".pb-video-player");
        this.nc = this.j(".pb-vid-click");
        this.Tb = this.j(".pb-video-player-wrap");
        this.j(".pb-fl-player-wrap");
        this.va = this.j(".pb-player-html");
        this.dg = this.j(".pb-video-poster");
        this.cg = this.j(".pb-video-player-content");
        this.td = this.j(".pb-logo");
        this.contextMenu = this.j(".pb-menu-context");
        this.fj = this.j(".pb-next-click");
        this.zd = this.j(".pb-next-video-wrapper");
        this.Ul = this.j(".pb-next-video-title");
        this.Tl = this.j(".pb-next-thumb-video");
        this.xd = this.j(".pb-next-video-circle-progress");
        this.j(".pb-ie-next-loader");
        this.j(".pb-ie-next-loader-progress");
        this.Sl = this.j(".pb-btn-cancel");
        this.alert = this.j(".pb-alert");
        this.Wa = this.j(".text-alert");
        this.wb = this.j(".pb-play");
        this.U = this.j(".pb-play-ico");
        this.ba = this.j(".pb-loader-ico");
        this.za = this.j(".pb-progress-time");
        this.ob = this.j(".pb-progress-bar-time");
        this.Jb = this.j(".pb-progress-bar-area");
        this.sh = this.j(".pb-bar");
        this.tg = this.j(".pb-progress-time-progress");
        this.currentTime = this.j(".pb-actual-time");
        this.Bg = this.j(".pb-max-time");
        this.fullScreen = this.j(".pb-fullscreen");
        this.Gc = this.j(".pb-volume-mute");
        this.tb = this.j(".pb-progress-bar-volume");
        this.Oh = this.j(".pb-volume-max");
        this.xc = this.j(".pb-progress-bar-volume-area");
        this.controls = this.j(".button-players");
        this.Tb = this.j(".pb-video-player-wrap");
        this.oa = this.j(".pb-player-html");
        this.gk = this.j(".pb-settings-click");
        this.j(".pb-settings-menu");
        this.Yn = this.j(".pb-close-settings");
        this.j(".pb-settings-click");
        this.Wj = this.j(".pb-quality-txt");
        this.ua = this.j(".pb-settings-menu-quality");
        this.Vk = this.j(".pb-ccast");
        this.Nc = this.j(".pb-ccast-float");
        this.Ok = this.j(".pb-airplay-float");
        this.tn = this.j(".pb-frame-player-float");
        this.hk = this.j(".pb-player-settings-posible");
        this.lb = this.j(".pb-video-ad-container");
        this.mb = this.j(".pb-video-ad-content");
        this.j(".pb-ad-video-player");
        this.bb = this.j(".pb-ad-counter");
        this.re = this.j(".pb-ad-close-body");
        this.Aa = this.j(".pb-skip");
        this.la = this.j(".pb-ad-info");
        this.hc = this.j(".pb-ad-premium-click");
        this.xk = this.ub(".pb-ady-player-wrap");
        this.pc = this.ub(".pb-ady-skip");
        this.cf = this.ub(".pb-ady-counter");
        this.info = this.j(".pb-info");
        this.j(".pb-info-content");
        this.Yd = this.j(".pb-box-info");
        this.Ef = this.j(".pb-box-info-content");
        this.Tf = this.j(".pb-premium-promotion");
        this.xn = this.j(".pb-premium-promotion-close");
        this.wn = this.j(".pb-premium-promotion-button");
        this.yn = this.j(".pb-why-more");
        this.zn = this.j(".pb-why-more-answer");
        this.An = this.j(".pb-why-more-register");
        this.od = this.j(".r-c-right");
        this.Dd = this.j(".r-c-left");
        this.wd = this.j(".player-mute-off");
    };
    P.Uk = function(a, b) {
        a = this.C.ae(Number(a)) ? a : 640;
        var e = this.C.ae(Number(b)) ? b : 360;
        var f = window.screen.width;
        var g = window.screen.height;
        var l = "";
        if (a / e >= f / g) {
            b = 1;
            a = a / f * (g / e);
        } else {
            b = e / g * (f / a);
            a = 1;
            l = "pb-h-vid";
        }
        return {
            x: b,
            y: a,
            className: l
        };
    };
    P.j = function(a) {
        if (!this.C.Ol(this.T)) {
            return this.ub(a, this.T);
        }
    };
    P.ub = function(a, b) {
        if (1 < arguments.length && b !== null) {
            if (this.C.Ui(b.querySelector)) {
                return b.querySelector(a);
            }
            if (a.indexOf("#") !== -1) {
                return document.getElementById(a.substring(1));
            }
            if (0 < b.Eg(a.substring(1)).length) {
                return b.Eg(a.substring(1))[0];
            }
        } else {
            if (this.C.Ui(document.querySelector)) {
                return document.querySelector(a);
            }
            if (a.indexOf("#") !== -1) {
                return document.getElementById(a.substring(1));
            }
            if (0 < document.Eg(a.substring(1)).length) {
                return document.Eg(a.substring(1))[0];
            }
        }
        return null;
    };
    P.dk = function(a, b) {
        if (this.C.Ti(a)) {
            a.innerHTML = b;
        }
    };
    P.pb = function(a, b) {
        this.dk(a, b);
    };
    P.w = function(a, b) {
        if (typeof a !== "undefined") {
            if (typeof a.classList === "undefined") {
                a.className = a.className + " " + b;
            } else {
                a.classList.add(b);
            }
        }
    };
    P.D = function(a, b) {
        if (typeof a !== "undefined") {
            if (typeof a.classList === "undefined") {
                var e = a.className.split(" ");
                var f = "";
                for (var g = 0; g < e.length; g++) {
                    if (b != e[g]) {
                        f += e[g] + " ";
                    }
                }
                a.className = f;
            } else {
                a.classList.remove(b);
            }
        }
    };
    P.I = function(a, b) {
        if (typeof a !== "undefined" && a.className.indexOf(b) !== -1) {
            return true;
        } else {
            return false;
        }
    };
    P.Mb = function(a) {
        if (typeof a !== "undefined" && typeof a.getBoundingClientRect === "function") {
            return a.getBoundingClientRect();
        } else {
            return false;
        }
    };
    P.Za = function(a) {
        if (!z(a) && !y(a) && !isNaN(void 0)) {
            a.style.width = void 0;
        }
    };
    P.Zb = function(a) {
        if (z(a) || y(a)) {
            return 0;
        } else {
            return a.offsetWidth;
        }
    };
    P.zh = function(a) {
        if (!z(a) && !y(a) && !isNaN(void 0)) {
            a.style.height = void 0;
        }
    };
    P.Qc = function(a) {
        if (z(a) || y(a)) {
            return 0;
        } else {
            return a.offsetHeight;
        }
    };
    P.Ac = function(a) {
        if (z(a) || y(a) || typeof a.offsetParent === "undefined" || a.offsetParent === null) {
            return false;
        } else {
            return true;
        }
    };
    P.m = function(a) {
        if (!z(a) && !y(a) && !z(a.style)) {
            if (a.style.visiblity === "visible") {
                a.style.visiblity = "hidden";
            } else {
                a.style.display = "none";
            }
        }
    };
    P.show = function(a) {
        if (!z(a) && !y(a) && !z(a.style)) {
            if (a.style.visiblity === "hidden") {
                a.style.visiblity = "visible";
            } else {
                a.style.display = "block";
            }
        }
    };
    P = Ca.prototype;
    P.Xo = function(a) {
        if (typeof a == "object") {
            if (a === null) {
                return "null";
            }
            if (a instanceof Array) {
                return "array";
            }
            if (a instanceof Object) {
                return "object";
            }
        }
    };
    P.gp = function(a) {
        return a === null;
    };
    P.Ol = function(a) {
        return typeof a === "undefined";
    };
    P.Ui = function(a) {
        return typeof a === "function";
    };
    P.ip = function(a) {
        return typeof a === "object";
    };
    P.Ti = function(a) {
        if (typeof HTMLElement === "undefined") {
            return a instanceof Element;
        } else {
            return a instanceof HTMLElement;
        }
    };
    P.hp = function(a) {
        return typeof a === "number";
    };
    P.kp = function(a) {
        return typeof a === "string";
    };
    P.Fl = function(a) {
        return typeof a === "boolean";
    };
    P.ae = function(a) {
        return Number(a) === a && a % 1 === 0;
    };
    P.Hf = function(a) {
        return Number(a) === a && a % 1 !== 0;
    };
    if (typeof Array.isArray === "undefined") {
        Array.isArray = function(a) {
            return Object.prototype.toString.call(a) === "[object Array]";
        };
    }
    P.yh = function(a, b, e, f) {
        var g = new Date;
        if (e != null) {
            if (f) {
                g.setHours(g.getHours() + e);
            } else {
                g.setDate(g.getDate() + e);
            }
        }
        try {
            document.cookie = a + "=" + escape(b) + (e == null ? "" : ";expires=" + g.toGMTString());
        } catch (l) {}
    };
    P.Yb = function(a) {
        try {
            var b = document.cookie.split(";");
        } catch (l) {
            b = [];
        }
        for (var e = 0; e < b.length; e++) {
            var f = b[e].substr(0, b[e].indexOf("="));
            var g = b[e].substr(b[e].indexOf("=") + 1);
            f = f.replace(/^\s+|\s+$/g, "");
            if (f == a) {
                return unescape(g);
            }
        }
        return false;
    };
    P.qd = function(a) {
        if (this.Yb(a) === false) {
            return false;
        } else {
            return true;
        }
    };
    P.bind = function(a, b) {
        return function() {
            b.apply(a, b);
        };
    };
    P.Tk = function(a, b) {
        return a.call.apply(a.bind, arguments);
    };
    P.G = function(a, b) {
        return this.Tk.apply(null, arguments);
    };
    P = V;
    P.isEnabled = function() {
        if (z(window.navigator.cookieEnabled)) {
            return !isEmpty(window.document.cookie);
        } else {
            return window.navigator.cookieEnabled;
        }
    };
    P.set = function(a, b, e, f) {
        var g = new Date;
        if (e != null) {
            if (f) {
                g.setHours(g.getHours() + e);
            } else {
                g.setDate(g.getDate() + e);
            }
        }
        try {
            document.cookie = a + "=" + escape(b) + (e == null ? "" : ";expires=" + g.toGMTString());
        } catch (l) {}
    };
    P.get = function(a) {
        try {
            var b = document.cookie.split(";");
        } catch (l) {
            b = [];
        }
        for (var e = 0; e < b.length; e++) {
            var f = b[e].substr(0, b[e].indexOf("="));
            var g = b[e].substr(b[e].indexOf("=") + 1);
            f = f.replace(/^\s+|\s+$/g, "");
            if (f == a) {
                return unescape(g);
            }
        }
        return null;
    };
    P.nl = function() {
        if (this.get("cda-player-volume") === false) {
            return false;
        } else {
            return true;
        }
    };
    P = Da.prototype;
    P.isEnabled = function() {
        return !y(this.storage);
    };
    P.Wn = function() {
        this.type = "local";
        this.storage = this.type === "session" ? sa() : ra();
    };
    P.set = function(a, b) {
        if (0 < arguments.length && !z(a) && !z(b)) {
            try {
                if (this.isEnabled()) {
                    this.storage.setItem(a, JSON.stringify(b));
                }
            } catch (e) {}
        }
    };
    P.get = function(a) {
        try {
            if (this.isEnabled()) {
                var b = this.storage.getItem(a);
                if (y(b) && z(b)) {
                    return null;
                } else {
                    return JSON.parse(b);
                }
            }
        } catch (e) {
            return null;
        }
    };
    P.remove = function(a) {
        try {
            if (this.isEnabled()) {
                this.storage.removeItem(a);
            }
        } catch (b) {}
    };
    P.clear = function() {
        try {
            if (this.isEnabled()) {
                this.storage.clear();
            }
        } catch (a) {}
    };
    P = S.prototype = {};
    P.wk = function(a) {
        this.a = a;
    };
    P.Ae = function() {
        for (var a in this.Ja) {
            if (this.Ja[a] != "") {
                var b = null;
                switch (this.Ja[a]) {
                    case "click":
                        b = this.Ec;
                        break;
                    case "timeupdate":
                        b = this.Uc;
                        break;
                    case "loadeddata":
                        b = this.fh;
                        break;
                    case "loadedmetadata":
                        b = this.gh;
                        break;
                    case "progress":
                        b = this.de;
                        break;
                    case "waiting":
                        b = this.Pe;
                        break;
                    case "play":
                        b = this.ee;
                        break;
                    case "pause":
                        b = this.kc;
                        break;
                    case "seeking":
                        b = this.lh;
                        break;
                    case "seeked":
                        b = this.kh;
                }
                if (b !== null && typeof b === "function") {
                    this.i[this.Ja[a]] = T(this.a.video, this.Ja[a], b, this);
                }
            }
        }
        if (!this.a.h.Ga()) {
            this.i.mp = T(this.T, "keydown", this.jm, this);
        }
        if (this.a.h.Ga()) {
            this.i.Ip = T(document.querySelector(".btn-fullscreen"), "click", this.om, this);
        }
        this.i.nc = T(this.view.nc, "click", this.Rj, this);
        this.i.Yp = T(this.view.nc, "dblclick", this.Qm, this);
        this.i.Io = T(this.fullScreen, "click", this.Qf, this);
        this.i.Hp = T(this.wb, "click", this.Tc, this);
        this.i.Gp = T(this.U, "click", this.Bd, this);
        this.i.aq = T(this.Gc, "click", this.bn, this);
        this.i.Oh = T(this.Oh, "click", this.an, this);
        this.i.Tp = T(this.gk, "click", this.zm, this);
        this.i.Up = T(this.view.ua, "click", this.Am, this);
        this.i.Gj = T(window.document, "click", this.Gj, this);
        this.i.Pj = T(this.view.Yn, "click", this.Pj, this);
        this.i.Jj = T(this.view.wd, "click", this.Jj, this);
        this.i.Kj = T(this.view.tn, "click", this.Kj, this);
        if (!this.a.h.H()) {
            this.i.Jp = T(this.za, "mousedown", this.qm, this);
            this.i.Lp = T(this.za, "mouseup", this.sm, this);
            this.i.Pp = T(this.sh, "mousemove", this.wm, this);
            this.i.bq = T(this.xc, "mousedown", this.cn, this);
            this.i.eq = T(this.xc, "mouseup", this.en, this);
            this.i.cq = T(this.xc, "mousemove", this.dn, this);
            this.i.Kp = T(this.za, "mousemove", this.rm, this);
            this.i.Zp = T(this.Tb, "mousemove", this.$m, this);
            this.i.dl = T(this.controls, "mouseenter", this.zi, this);
            this.i.dl = T(this.controls, "mouseover", this.zi, this);
            this.i.cl = T(this.controls, "mouseleave", this.Ai, this);
            this.i.cl = T(this.controls, "mouseout", this.Ai, this);
            this.i.kq = T(this.T, "mouseup", this.gn, this);
            this.i.Fo = T(document, "mouseup", this.dm, this);
            this.i.Eo = T(document, "mousedown", this.cm, this);
        }
        if (this.a.h.H()) {
            this.i.Op = T(this.za, "touchstart", this.vm, this);
            this.i.Mp = T(this.za, "touchend", this.tm, this);
            this.i.Qp = T(this.sh, "touchmove", this.xm, this);
            this.i.Np = T(this.za, "touchmove", this.um, this);
        }
        this.ba.m();
        this.oa.w("pb-paused");
        this.oa.w("pb-bar-no-seeking");
    };
    P.Kj = function() {
        if (document.pictureInPictureElement) {
            window.document.exitPictureInPicture();
        } else {
            try {
                this.a.video.requestPictureInPicture();
            } catch (a) {}
        }
    };
    P.Ye = function(a, b, e) {
        var f = this.sa.querySelectorAll(".pb-li-canal-logo");
        this.cc();
        var g = window.$(".pb-li-canal-logo", this.Pa).length;
        var l = window.$(".pb-li-canal-logo", this.Pa)[0];
        var k = window.$(l).height();
        var p = a.scrollTop();
        b = typeof e !== "object" && typeof e !== "function" || e === null ? e ? b ? p + (k * (e - 1) + k / 2 + 1) * b : k * (e - 1) : p + (k / 2 * (1 - this.Jn) + 1) * b : window.$(e).context.offsetTop - window.$(l).context.offsetTop;
        b = Math.round(b / k) * k;
        if (0 > b) {
            b = 0;
        }
        if (b >= (g - 1) * k) {
            b = (g - 1) * k;
        }
        this.gj = Math.round(b / k) + 1;
        this.La = this.gj - 1;
        Array.prototype.slice.call(f).forEach(function(a) {
            a.D("channel-active");
        });
        a.scrollTop(b);
        this.Xc();
    };
    P.Vp = function(a) {
        this.Pa.removeClass("pb-smooth-scroll");
        this.Ye(this.Pa, a, 1);
    };
    P.bg = function(a) {
        this.Pa.removeClass("pb-smooth-scroll");
        this.Ye(this.Pa, 0, a);
    };
    P.lo = function() {
        this.Pa.addClass("pb-smooth-scroll");
        this.Ye(this.Pa, this.Uj, 0);
    };
    P.pk = function() {
        var a = window.$(".pb-li-canal-logo", this.Pa)[0];
        a = window.$(a).height();
        var b = this.Pa.scrollTop();
        b = Math.round(b / a) * a;
        return Math.round(b / a) + 1;
    };
    P.qk = function() {
        if (!this.Gh) {
            this.Vg = this.Zf;
            this.Zf = this.Pa.scrollTop();
            if (this.Vg == this.Zf) {
                this.lo();
            } else {
                this.Uj = Math.sign(this.Zf - this.Vg);
                var a = this;
                setTimeout(function() {
                    a.qk();
                }, 100);
            }
        }
    };
    P.enable = function() {
        this.gg = true;
        this.view.D(this.view.va, "pb-nocloud");
    };
    P.disable = function() {
        this.gg = false;
        this.view.w(this.view.va, "pb-nocloud");
    };
    P.isEnabled = function() {
        return this.gg;
    };
    P.Eh = function() {
        clearInterval(this.Va);
        this.Va = null;
        this.T.D("pb-nocontrols");
    };
    P.Zo = function() {
        clearInterval(this.Va);
        this.Va = null;
        this.T.w("pb-nocontrols");
    };
    P.mc = function(a) {
        a = Number(a);
        var b = Math.floor(a / 3600);
        var e = Math.floor(a % 3600 / 60);
        a = Math.floor(a % 3600 % 60);
        return (0 < b ? b + ":" + (10 > e ? "0" : "") : "") + e + ":" + (10 > a ? "0" : "") + a;
    };
    P.w = function(a, b) {
        if (typeof a.classList === "undefined") {
            a.className = a.className + " " + b;
        } else {
            a.classList.add(b);
        }
    };
    P.D = function(a, b) {
        if (typeof a.classList === "undefined") {
            var e = a.className.split(" ");
            var f = "";
            for (var g = 0; g < e.length; g++) {
                if (b != e[g]) {
                    f += e[g] + " ";
                }
            }
            a.className = f;
        } else {
            a.classList.remove(b);
        }
    };
    P.I = function(a, b) {
        if (a.className.indexOf(b) === -1) {
            return false;
        } else {
            return true;
        }
    };
    P.Mb = function(a) {
        if (a !== "undefined" && typeof a.getBoundingClientRect === "function") {
            return a.getBoundingClientRect();
        } else {
            return false;
        }
    };
    P.Eb = function(a) {
        if (D(a) && !isNaN(a)) {
            this.currentTime.innerHTML = this.mc(a);
        }
    };
    P.Ra = function(a) {
        if (D(a) && !isNaN(a)) {
            this.Bg.innerHTML = this.mc(a);
        }
    };
    P.Sn = function(a) {
        if (this.C.Fl(a)) {
            if (a) {
                if (this.view.I(this.view.fullScreen, "pb-fullscreen-active") === false) {
                    this.view.w(this.view.fullScreen, "pb-fullscreen-active");
                }
            } else if (this.view.I(this.view.fullScreen, "pb-fullscreen-active")) {
                this.view.D(this.view.fullScreen, "pb-fullscreen-active");
            }
        }
    };
    P.ck = function(a) {
        var b = this;
        if (this.view.I(this.view.ua, "pb-settings-menu-on")) {
            this.view.D(this.view.ua, "pb-settings-menu-on");
            this.view.w(this.view.ua, "pb-settings-menu-off");
        }
        if (this.view.Ac(this.view.contextMenu)) {
            this.view.m(this.view.contextMenu);
        }
        if (a) {
            this.Ca = true;
            if (this.a.O) {
                this.sa.show();
                if (this.ag) {
                    this.ag = false;
                    this.sa.querySelectorAll(".pb-li-canal-logo").forEach(function(a, f) {
                        a.D("channel-active");
                        if (a.getAttribute("data-url") == b.a.ja.url) {
                            a.w("channel-active");
                            b.La = f;
                            b.bg(b.La + 1);
                        }
                    }, this);
                } else {
                    this.Xc();
                }
            }
            if (this.a.O && this.a.getState() === this.a.state.fb) {
                this.a.play();
            }
            if (this.a.getState() === this.a.state.ga) {
                if (this.a.h.H()) {
                    this.gc = false;
                }
                this.cc();
            }
            this.view.va.w("pb-video-fullscreen");
            this.view.fullScreen.w("pb-fullscreen-active");
        } else {
            this.Ca = false;
            if (this.a.O) {
                this.sa.querySelectorAll(".pb-li-canal-logo").forEach(function(a, f) {
                    if (a.getAttribute("data-url") == b.a.ja.url) {
                        b.La = f;
                        if (0 < b.La) {
                            a = a.Qc() * b.La;
                            window.$(".pb-tv-canals-scroll-g").scrollTop(a);
                            if (b.Ta != null) {
                                window.clearInterval(b.Ta);
                                b.Ta = null;
                            }
                            b.Ta = window.setInterval(function() {
                                b.af(b.a.ja.program.start_time_ts, b.a.ja.program.start_time_format, b.a.ja.program.end_time_ts, b.a.ja.program.end_time_format);
                            }, 100);
                        }
                    }
                }, this);
                this.sa.m(true);
            }
            if (this.a.h.H()) {
                this.gc = false;
            }
            this.dc();
            this.view.va.D("pb-video-fullscreen");
            this.view.fullScreen.D("pb-fullscreen-active");
        }
    };
    P.Rn = function() {
        var a = true;
        this.Lg();
        if (a) {
            if (this.a.ta()) {
                a = "http://www.cda.pl/video/" + this.a.f.id + "?html5";
                if (1 < this.a.l()) {
                    a += "&t=" + Math.floor(this.a.l());
                }
                a = 'Tryb pe\u0142noekranowy jest niedost\u0119pny. <a href="' + a + '" target="_blank">Kliknij tutaj, aby otworzy\u0107 film w nowym oknie.</a>';
            } else {
                a = "Tryb pe\u0142noekranowy jest niedost\u0119pny na Twoim urz\u0105dzeniu.";
            }
            this.i.Rf = T(this.view.Ef, "click", this.Rf, this);
            this.zl(a);
        } else {
            U(this.view.Ef, "click", this.i.Rf);
            this.i.Rf = null;
        }
    };
    P.Qf = function() {
        if (!this.a.disabled) {
            if (this.$b()) {
                this.vb();
            }
            if (this.sc.is() || !this.sc.is() && !y(this.sc.element())) {
                this.sc.Lb();
            } else if (!this.a.K || !this.a.h.ra()) {
                this.sc.request();
            }
        }
    };
    P.qm = function(a) {
        if (this.isEnabled() && (a = a || window.event, typeof a.which === "undefined" || a.which == 1)) {
            if (this.$b()) {
                this.vb();
            }
            this.sd = false;
            this.za.setAttribute("data-click", "click");
            this.Hc = true;
            if (this.oa.I("pb-bar-no-seeking")) {
                this.oa.D("pb-bar-no-seeking");
            }
            this.oa.w("pb-bar-seeking");
            var b = (a.pageX - this.Mb(this.Jb).left) / this.Jb.offsetWidth * 100;
            if (100 < b) {
                b = 100;
            } else if (0 > b) {
                b = 0;
            }
            if (this.a.M() === 0) {
                this.a.Uf = b;
            }
            this.Kb = b;
            this.ob.style.width = b + "%";
            a.preventDefault();
            return false;
        }
    };
    P.vm = function(a) {
        if (this.isEnabled()) {
            a = a || window.event;
            var b = a.changedTouches;
            if (b !== "undefined" && b.length == 1) {
                if (this.sc.Ca()) {
                    if (this.a.h.H()) {
                        this.gc = true;
                    }
                    this.dc();
                }
                this.sd = false;
                this.za.setAttribute("data-click", "click");
                this.Hc = true;
                if (this.oa.I("pb-bar-no-seeking")) {
                    this.oa.D("pb-bar-no-seeking");
                }
                this.oa.w("pb-bar-seeking");
                this.oa.w("pb-time-cloud-show");
                b = (b[0].pageX - this.Mb(this.Jb).left) / this.Jb.offsetWidth * 100;
                if (100 < b) {
                    b = 100;
                } else if (0 > b) {
                    b = 0;
                }
                this.Kb = b;
                this.ob.style.width = b + "%";
            }
            a.preventDefault();
            return false;
        }
    };
    P.sm = function(a) {
        if (this.isEnabled() && (a = a || window.event, typeof a.which === "undefined" || a.which == 1)) {
            if (this.$b()) {
                this.vb();
            }
            this.sd = true;
            this.za.setAttribute("data-click", "none");
            this.Hc = false;
            if (this.oa.I("pb-bar-seeking")) {
                this.oa.D("pb-bar-seeking");
            }
            this.oa.w("pb-bar-no-seeking");
            if (this.a.M() != -1 && this.Kb != -1) {
                var b = this.Kb / 100 * this.a.M();
                if (this.a.Y.isConnected()) {
                    this.a.Y.cb(b);
                } else {
                    this.a.cb(b);
                }
            } else {
                this.Tc();
                this.a.rb();
            }
            a.preventDefault();
            return false;
        }
    };
    P.tm = function(a) {
        if (this.isEnabled()) {
            a = a || window.event;
            var b = a.changedTouches;
            if (b !== "undefined" && b.length == 1) {
                if (this.sc.Ca()) {
                    if (this.a.h.H()) {
                        this.gc = false;
                    }
                    this.cc();
                }
                if (this.$b()) {
                    this.vb();
                }
                this.sd = true;
                this.za.setAttribute("data-click", "none");
                this.Hc = false;
                if (this.oa.I("pb-bar-seeking")) {
                    this.oa.D("pb-bar-seeking");
                }
                this.oa.w("pb-bar-no-seeking");
                this.oa.D("pb-time-cloud-show");
                if (this.a.M() != -1 && this.Kb != -1) {
                    b = this.Kb / 100 * this.a.M();
                    if (this.a.Y.isConnected()) {
                        this.a.Y.cb(b);
                    } else {
                        this.a.cb(b);
                    }
                } else {
                    this.Tc();
                    this.a.rb();
                }
            }
            a.preventDefault();
            return false;
        }
    };
    P.wm = function(a) {
        if (this.isEnabled() && (a = a || window.event, typeof a.which === "undefined" || a.which == 1)) {
            if (this.za.getAttribute("data-click") == "click") {
                var b = (a.pageX - this.Mb(this.Jb).left) / this.Jb.offsetWidth * 100;
                if (100 < b) {
                    b = 100;
                } else if (0 > b) {
                    b = 0;
                }
                this.Kb = b;
                this.ob.style.width = b + "%";
            }
            a.preventDefault();
            return false;
        }
    };
    P.xm = function(a) {
        if (this.isEnabled()) {
            a = a || window.event;
            var b = a.changedTouches;
            if (b !== "undefined" && b.length == 1 && this.za.getAttribute("data-click") == "click") {
                b = (b[0].pageX - this.Mb(this.za).left) / this.Jb.offsetWidth * 100;
                if (100 < b) {
                    b = 100;
                } else if (0 > b) {
                    b = 0;
                }
                this.Kb = b;
                this.ob.style.width = b + "%";
            }
            a.preventDefault();
            return false;
        }
    };
    P.rm = function(a) {
        if (this.isEnabled()) {
            a = a || window.event;
            var b = (a.pageX - this.Mb(this.Jb).left) / this.Jb.offsetWidth * 100;
            if (100 < b) {
                b = 100;
            } else if (0 > b) {
                b = 0;
            }
            this.a.M();
            var e = this.mc(b / 100 * this.a.M());
            this.T.querySelector(".pb-time-position").style.left = b + "%";
            b = this.T.querySelector(".pb-time-container");
            if (b != null) {
                b.innerHTML = e;
            }
            a.preventDefault();
            return false;
        }
    };
    P.um = function(a) {
        if (this.isEnabled()) {
            a = a || window.event;
            var b = a.changedTouches;
            if (b !== "undefined" && b.length == 1) {
                if (this.sc.Ca()) {
                    if (this.a.h.H()) {
                        this.gc = true;
                    }
                    this.dc();
                }
                var e = (b[0].pageX - this.Mb(this.Jb).left) / this.Jb.offsetWidth * 100;
                if (100 < e) {
                    e = 100;
                } else if (0 > e) {
                    e = 0;
                }
                this.a.M();
                b = this.mc(e / 100 * this.a.M());
                this.T.querySelector(".pb-time-position").style.left = e + "%";
                e = this.T.querySelector(".pb-time-container");
                if (e != null) {
                    e.innerHTML = b;
                }
            }
            a.preventDefault();
            return false;
        }
    };
    P.Bd = function() {
        if (!this.a.disabled) {
            if (this.$b()) {
                this.vb();
            }
            if (!this.a.pa || this.a.getState() === this.a.state.fb) {
                this.a.fa = true;
            }
            if (this.U.W()) {
                if (this.a.K) {
                    this.Z();
                } else {
                    if (!this.a.pa || this.a.getState() === this.a.state.fb) {
                        this.a.fa = true;
                    }
                    if (this.a.Y.isConnected()) {
                        this.Z(true);
                        this.a.Y.play();
                    } else {
                        this.Z();
                        this.F(true);
                    }
                }
            }
        }
    };
    P.Tc = function() {
        if (!this.view.j(".pb-ad-pause-plt").I("pb-ad-pause-plt-show") && !this.a.disabled) {
            if (this.$b()) {
                this.vb();
            }
            if (!this.a.pa || this.a.getState() === this.a.state.fb) {
                this.a.fa = true;
            }
            if (this.wb.className.indexOf("pb-play-pause") === -1) {
                this.wb.w("pb-play-pause");
                if (this.a.Y.isConnected()) {
                    this.Z(true);
                    this.a.Y.play();
                } else {
                    if (!this.a.pa || this.a.getState() === this.a.state.fb) {
                        this.a.fa = true;
                    }
                    this.Z();
                    this.F(true);
                }
            } else {
                this.wb.D("pb-play-pause");
                if (this.a.Y.isConnected()) {
                    this.qa(true);
                    this.a.Y.pause();
                } else {
                    this.qa();
                }
            }
        }
    };
    P.Z = function(a) {
        if (this.a.O) {
            this.ie.D("pb-time-tv-info-live-disable");
        }
        if (!this.wb.I("pb-play-pause")) {
            this.wb.w("pb-play-pause");
        }
        if (this.U.W()) {
            this.U.m();
        }
        if (this.oa.I("pb-paused")) {
            this.oa.D("pb-paused");
        }
        this.oa.w("pb-playing");
        if (!this.$b()) {
            this.he();
        }
        if (!F(a) || !a) {
            if (this.a.K) {
                if (this.a.s != null) {
                    this.a.s.play();
                }
            } else {
                this.a.play();
            }
        }
    };
    P.qa = function(a) {
        if (this.a.O) {
            this.ie.w("pb-time-tv-info-live-disable");
        }
        if (this.wb.I("pb-play-pause")) {
            this.wb.D("pb-play-pause");
        }
        if (!this.U.W()) {
            this.U.show();
            this.F(false);
        }
        if (this.oa.I("pb-playing")) {
            this.oa.D("pb-playing");
        }
        if (this.$b()) {
            this.vb();
        }
        if (!F(a) || !a) {
            if (this.a.K) {
                if (this.a.s != null) {
                    this.a.s.pause();
                }
            } else {
                this.a.pause();
            }
        }
    };
    P.F = function(a) {
        if (F(a)) {
            if (a) {
                if (this.U.W()) {
                    this.U.m();
                }
                if (!this.ba.W()) {
                    this.ba.show();
                }
            } else {
                this.ba.m();
            }
        }
    };
    P.Xn = function() {
        if (this.a.qd("cda.player.volume")) {
            this.J(this.a.Yb("cda.player.volume"));
        } else {
            this.J(this.Fc);
        }
    };
    P.J = function(a, b) {
        a = Number(a);
        if (this.a.ic() !== false && this.Ab === false) {
            a = this.a.ic();
        }
        if (0 < a && this.$b()) {
            this.vb();
        }
        this.ab = isNaN(a) ? this.Fc : a;
        if (this.ab == 0) {
            this.Ge = true;
            if (!this.Gc.I("pb-volume-mute-active")) {
                this.Gc.w("pb-volume-mute-active");
            }
        } else {
            this.Ge = false;
            if (this.Gc.I("pb-volume-mute-active")) {
                this.Gc.D("pb-volume-mute-active");
            }
        }
        this.tb.Za(this.ab + "%");
        if (!this.a.ac) {
            this.wh(this.ab);
        }
        this.a.J(this.ab, b);
        if (this.a.Y.isConnected()) {
            this.a.Y.J(this.ab, this.ab == 0 ? true : false);
        }
        if (!y(this.a.s) && this.a.s.Da == this.a.s.type.Ua && this.a.s.gb) {
            try {
                this.a.s.wc.J(this.ab);
            } catch (e) {}
        }
    };
    P.wh = function(a) {
        if (this.a.ic() !== false && this.Ab === false) {
            this.Ab = true;
        } else {
            if (0 > a) {
                a = 0;
            } else if (100 < a) {
                a = 100;
            }
            a = parseInt(a);
            this.a.yh("cda.player.volume", a, 7);
        }
    };
    P.Wc = function(a) {
        if (0 > a) {
            a = 0;
        } else if (100 < a) {
            a = 100;
        }
        this.Bb = a;
        this.tg.Za(this.Bb + "%");
    };
    P.bn = function() {
        this.tb.setAttribute("data-click", "none");
        if (this.Ge === false && this.Gc.I("pb-volume-mute-active") === false) {
            this.Ge = true;
            this.Gc.w("pb-volume-mute-active");
            this.tb.Za("0%");
            this.wh(0);
            this.a.J(0);
            if (this.a.Y.isConnected()) {
                this.a.Y.J(0, true);
            }
            if (!y(this.a.s) && this.a.s.Da == this.a.s.type.Ua && this.a.s.gb) {
                try {
                    this.a.s.wc.J(0);
                } catch (a) {}
            }
        } else if (0 >= this.ab && (this.ab = this.Fc), this.Ge = false, this.Gc.D("pb-volume-mute-active"), this.tb.Za(this.ab + "%"), this.wh(this.ab), this.a.J(this.ab), this.a.Y.isConnected() && this.a.Y.J(this.ab, false), !y(this.a.s) && this.a.s.Da == this.a.s.type.Ua && this.a.s.gb) {
            try {
                this.a.s.wc.J(this.ab);
            } catch (a) {}
        }
    };
    P.cn = function(a) {
        a = a || window.event;
        if (typeof a.which === "undefined" || a.which == 1) {
            this.tb.setAttribute("data-click", "click");
            var b = (a.pageX - this.xc.Af().left) / (this.xc.Zb() - 1) * 100;
            if (100 < b) {
                b = 100;
            } else if (0 > b) {
                b = 0;
            }
            this.J(b);
            a.preventDefault();
            return false;
        }
    };
    P.en = function(a) {
        a = a || window.event;
        if (typeof a.which === "undefined" || a.which == 1) {
            this.tb.setAttribute("data-click", "none");
            a.preventDefault();
            return false;
        }
    };
    P.dn = function(a) {
        a = a || window.event;
        if (typeof a.which === "undefined" || a.which == 1) {
            if (this.tb.getAttribute("data-click") == "click") {
                var b = (a.pageX - this.tb.Af().left) / (this.xc.Zb() - 1) * 100;
                if (100 < b) {
                    b = 100;
                } else if (0 > b) {
                    b = 0;
                }
                this.ab = b;
                this.J(b);
            }
            a.preventDefault();
            return false;
        }
    };
    P.Bp = function(a) {
        a = a || window.event;
        var b = a.changedTouches;
        if (b !== "undefined" && b.length == 1) {
            this.tb.setAttribute("data-click", "click");
            b = (b[0].pageX - this.tb.Af().left) / (this.xc.Zb() - 1) * 100;
            if (100 < b) {
                b = 100;
            } else if (0 > b) {
                b = 0;
            }
            this.J(b);
        }
        a.preventDefault();
        return false;
    };
    P.zp = function(a) {
        a = a || window.event;
        this.tb.setAttribute("data-click", "none");
        a.preventDefault();
        return false;
    };
    P.Ap = function(a) {
        a = a || window.event;
        var b = a.changedTouches;
        if (b !== "undefined" && b.length == 1 && this.tb.getAttribute("data-click") == "click") {
            b = (b[0].pageX - this.tb.Af().left) / (this.xc.Zb() - 1) * 100;
            if (100 < b) {
                b = 100;
            } else if (0 > b) {
                b = 0;
            }
            this.ab = b;
            this.J(b);
        }
        a.preventDefault();
        return false;
    };
    P.an = function() {
        this.tb.setAttribute("data-click", "none");
        if (this.ab === 100) {
            this.J(0);
        } else {
            this.J(100);
        }
    };
    P.yp = function() {
        if (this.a.Na) {
            if (this.a.disabled && !y(this.a.s) && this.a.s.Da == this.a.s.type.Ua) {
                return;
            }
        } else if (this.a.disabled) {
            return;
        }
        if (0 < this.Mb(this.a.contextMenu).width && 0 < this.Mb(this.a.contextMenu).height) {
            this.a.contextMenu.m();
        } else {
            if (!this.a.pa || this.a.getState() === this.a.state.fb) {
                this.a.fa = true;
            }
            if (this.a.Ka === null && this.view.Ac(this.view.U)) {
                if (this.a.getState() === this.a.state.fb) {
                    this.a.fa = true;
                }
                if (y(this.a.s) || !y(this.a.s) && this.a.s.Da != this.a.s.type.Ua) {
                    this.Z();
                }
            }
        }
    };
    P.jm = function(a) {
        a = a || window.event;
        switch (a.keyCode) {
            case 32:
                if (y(this.a.s) || !y(this.a.s) && this.a.s.Da != this.a.s.type.Ua) {
                    if (this.a.video.paused == 0) {
                        this.qa();
                    } else {
                        this.Z();
                    }
                }
                a.preventDefault();
                break;
            case 27:
                if (this.a.Ca()) {
                    this.Qf();
                    this.Eh();
                }
                a.preventDefault();
                break;
            case 39:
                if (!this.a.O) {
                    if (y(this.a.s) || !y(this.a.s) && this.a.s.Da != this.a.s.type.Ua) {
                        this.a.Yj(5);
                    }
                }
                a.preventDefault();
                break;
            case 37:
                if (!this.a.O) {
                    if (y(this.a.s) || !y(this.a.s) && this.a.s.Da != this.a.s.type.Ua) {
                        this.a.Zj(5);
                    }
                }
                a.preventDefault();
                break;
            case 38:
                if (this.a.O && this.Ca) {
                    this.sa.show();
                    this.cc();
                    a = this.pk();
                    this.La = a - 1;
                    var b = this.sa.querySelectorAll(".pb-li-canal-logo");
                    if (0 < this.La) {
                        b[this.La].D("channel-active");
                        this.bg(a - 1);
                    }
                    this.Xc();
                }
                break;
            case 40:
                if (this.a.O && this.Ca) {
                    this.sa.show();
                    this.cc();
                    a = this.pk();
                    this.La = a - 1;
                    b = this.sa.querySelectorAll(".pb-li-canal-logo");
                    if (this.La + 1 < b.length) {
                        b[this.La].D("channel-active");
                        this.bg(a + 1);
                    }
                    this.Xc();
                }
                break;
            case 13:
                if (this.a.O && this.Ca) {
                    this.sa.show();
                    this.dc();
                    var e = this.sa.querySelectorAll(".pb-li-canal-logo")[this.La];
                    a = e.getAttribute("data-url");
                    b = e.getAttribute("data-logo");
                    e = e.getAttribute("data-title");
                    window.tvChangeChannel(a, e, b, true);
                }
                break;
            case 116:
                location.reload();
        }
        return false;
    };
    P.Bo = function(a) {
        return 3 * (1 - a) * (1 - a) * (1 - a) * (1 - a) + 1;
    };
    P.de = function() {
        if (!this.a.K) {
            if (0 <= this.a.M() && this.a.ne === -1) {
                var a = this.a.video;
                if (a.buffered !== "undefined" && 0 < a.buffered.length && a.buffered.end !== "undefined") {
                    var b = a.buffered.length - 1;
                    if (-1 < this.a.xh) {
                        b = this.a.ql(this.a.xh);
                    }
                    a.buffered.end(b);
                    this.a.M();
                    var e = this.a.M();
                    var f = this.a.l();
                    this.Bb = a.buffered.end(b) / e * 100;
                    if (this.Bb < f / e * 100 + 2) {
                        this.Bb = f / e * 100 + 2;
                    }
                    this.Bb = Math.ceil(10 * this.Bb) / 10;
                } else {
                    this.Bb = a.wi !== "undefined" && 0 < a.wi && a.Ao !== "undefined" ? a.zo / a.wi : 0;
                }
            }
            if (0 > this.Bb) {
                this.Bb = 0;
            } else if (100 < this.Bb) {
                this.Bb = 100;
            }
            this.tg.Za(this.Bb + "%");
        }
    };
    P.Hj = function() {
        this.ba.m();
        if (this.a.getState() == this.a.state.ga) {
            this.U.m();
        } else {
            this.U.show();
        }
    };
    P.fh = function() {
        if (0 <= this.a.M() && this.a.K === false) {
            this.Ra(this.a.M());
        }
    };
    P.gh = function() {
        if (0 <= this.a.M() && this.a.K === false) {
            this.Ra(this.a.M());
        }
    };
    P.Pe = function() {
        if (y(this.a.s) || !y(this.a.s) && this.a.s.Da != this.a.s.type.Ua) {
            this.ba.show();
        }
    };
    P.Ec = function() {
        if (this.a.nb() && 0 >= this.a.l() && !this.a.fa && this.ba.W()) {
            this.a.autoplay = true;
        } else if (this.a.nb() && 0 >= this.a.l() && !this.a.fa && !this.ba.W()) {
            this.a.fa = true;
            return this.a.cb(0);
        }
    };
    P.ee = function() {
        if (this.Ca && !this.view.I(this.view.T, "pb-nocontrols") && this.Va === null) {
            if (this.a.h.H()) {
                this.gc = false;
            }
            this.cc();
        }
    };
    P.kc = function() {};
    P.Uc = function() {
        this.de();
        if (this.a.da == null) {
            if (!this.a.Vd) {
                if (this.ba.W()) {
                    this.ba.m();
                }
            }
        }
        if (this.a.video.currentTime !== "undefined" && !isNaN(this.a.video.currentTime)) {
            this.a.currentTime = this.a.video.currentTime;
        }
        if (this.sd) {
            var a = 100 / this.a.M() * this.a.currentTime;
            this.ob.Za(a + "%");
        }
        this.Eb(this.a.currentTime);
    };
    P.lh = function() {
        try {
            window.clearTimeout(this.Wb);
            this.Wb = null;
        } catch (a) {}
    };
    P.kh = function() {
        try {
            window.clearTimeout(this.Wb);
            this.Wb = null;
        } catch (a) {}
    };
    P.cc = function() {
        if (this.Va !== null) {
            window.clearTimeout(this.Va);
            this.Va = null;
        }
        var a = this;
        this.Va = window.setTimeout(function() {
            if (!a.gc) {
                a.T.w("pb-nocontrols");
                if (a.a.O && a.sa.W()) {
                    a.sa.querySelectorAll(".pb-li-canal-logo").forEach(function(b, e) {
                        if (b.getAttribute("data-url") == a.a.ja.url) {
                            a.La = e;
                            a.bg(a.La + 1);
                            if (a.Ta != null) {
                                window.clearInterval(a.Ta);
                                a.Ta = null;
                            }
                            a.Ta = window.setInterval(function() {
                                a.af(a.a.ja.program.start_time_ts, a.a.ja.program.start_time_format, a.a.ja.program.end_time_ts, a.a.ja.program.end_time_format);
                            }, 100);
                        }
                    });
                    a.sa.m(true);
                }
            }
        }, this.a.O ? 5e3 : 2e3);
    };
    P.dc = function() {
        window.clearTimeout(this.Va);
        this.Va = null;
        this.T.D("pb-nocontrols");
    };
    P.$m = function(a) {
        if (this.aj !== a.clientX || this.bj !== a.clientY) {
            this.dc();
            if (this.Ca && this.a.O && !this.sa.W()) {
                this.sa.show();
                this.Xc();
            }
            if (this.Ca && this.a.getState() === this.a.state.ga) {
                if (this.gc === false) {
                    if (this.T.I("pb-nocontrols") || this.Va !== null) {
                        this.T.D("pb-nocontrols");
                    } else {
                        this.cc();
                    }
                } else {
                    this.dc();
                }
            } else {
                this.dc();
            }
        }
        this.aj = a.clientX;
        this.bj = a.clientY;
    };
    P.gn = function() {
        if (this.Hc === true) {
            if (0 <= this.a.M() && this.Kb != -1) {
                var a = this.Kb / 100 * this.a.M();
                this.a.cb(a);
            }
            this.za.setAttribute("data-click", "none");
            this.Hc = false;
            this.sd = true;
            if (this.oa.I("pb-bar-seeking")) {
                this.oa.D("pb-bar-seeking");
            }
            this.oa.w("pb-bar-no-seeking");
        }
    };
    P.dm = function() {
        if (this.Hc === true) {
            if (0 <= this.a.M() && this.Kb != -1) {
                var a = this.Kb / 100 * this.a.M();
                this.a.cb(a);
            }
            this.za.setAttribute("data-click", "none");
            this.Hc = false;
            this.sd = true;
            if (this.oa.I("pb-bar-seeking")) {
                this.oa.D("pb-bar-seeking");
            }
            this.oa.w("pb-bar-no-seeking");
        }
    };
    P.cm = function() {};
    P.zm = function() {
        if (this.$b()) {
            this.vb();
        }
        if (this.view.ua.I("pb-settings-menu-on")) {
            this.view.ua.D("pb-settings-menu-on");
            this.view.ua.w("pb-settings-menu-off");
        } else {
            this.view.ua.w("pb-settings-menu-on");
            this.view.ua.D("pb-settings-menu-off");
        }
    };
    P.Rj = function(a) {
        if (this.a.h.H() && !y(this.zb) && !y(a) && !z(a)) {
            var b = a.offsetX / this.Mb(this.view.nc).width * 100;
            if (60 < b && 0 < this.Gb) {
                return this.Fi();
            }
            if (40 > b && 0 > this.Gb) {
                return this.Gi();
            }
        }
        try {
            window.clearTimeout(this.Wb);
            this.Wb = null;
        } catch (f) {}
        if (0 >= this.a.l()) {
            return this.Sj();
        }
        if (y(a) || a.detail !== 2) {
            var e = this;
            this.Wb = window.setTimeout(function() {
                window.clearTimeout(e.Wb);
                e.Wb = null;
                e.Sj();
            }, 300);
        }
    };
    P.Sj = function() {
        if (this.a.Na) {
            if (this.a.disabled && !y(this.a.s) && this.a.s.Da == this.a.s.type.Ua) {
                return;
            }
        } else if (this.a.disabled) {
            return;
        }
        if (this.view.Ac(this.view.contextMenu)) {
            this.view.m(this.view.contextMenu);
        } else if (this.view.I(this.view.ua, "pb-settings-menu-on")) {
            this.view.D(this.view.ua, "pb-settings-menu-on");
            this.view.w(this.view.ua, "pb-settings-menu-off");
        } else if (this.view.Yd.I("pb-box-info-open")) {
            this.Lg();
        } else if (this.a.pa || (this.a.fa = true, this.a.h.H() ? this.a.K && !y(this.a.s) && (this.a.s.Mi() || this.a.s.Ni()) && this.F(true) : this.F(true)), this.a.Y.isConnected()) {
            if (this.a.getState() != this.a.state.fb && this.a.getState() != this.a.state.qc || !this.U.W()) {
                this.qa(true);
                this.a.Y.pause();
            } else {
                this.Z(true);
                this.a.Y.play();
            }
        } else if (this.a.K) {
            if (this.U.W()) {
                if (this.a.h.H()) {
                    if (!y(this.a.s) && (!!this.a.s.Mi() || !!this.a.s.Ni())) {
                        this.Z();
                    }
                } else {
                    this.Z();
                }
            } else if (!y(this.a.s)) {
                this.a.s.click();
            }
        } else if (this.a.Ka === null) {
            if (this.a.h.H() && !this.a.L && this.Ca) {
                if (this.T.I("pb-nocontrols")) {
                    this.T.D("pb-nocontrols");
                    if (this.a.O) {
                        this.sa.show();
                    }
                    this.cc();
                } else if (this.a.getState() === this.a.state.ga) {
                    this.a.pause();
                    this.dc();
                } else if (this.a.getState() === this.a.state.qc) {
                    this.a.resume();
                    this.cc();
                }
            } else {
                switch (this.a.getState()) {
                    case this.a.state.ga:
                        if (this.a.Y.isConnected()) {
                            this.qa(true);
                            this.a.Y.pause();
                            break;
                        }
                        this.qa();
                        break;
                    case this.a.state.qc:
                        if (this.a.Y.isConnected()) {
                            this.Z(true);
                            this.a.Y.play();
                            break;
                        }
                        this.Z();
                        break;
                    case this.a.state.fb:
                        this.a.fa = true;
                        if (y(this.a.s) || !y(this.a.s) && this.a.s.Da != this.a.s.type.Ua) {
                            this.Z();
                        } else if (this.U.W()) {
                            this.Z();
                            this.F(true);
                        }
                }
            }
        }
    };
    P.Qm = function(a) {
        try {
            window.clearTimeout(this.Wb);
            this.Wb = null;
        } catch (b) {}
        if (!this.a.K && !(0 >= this.a.l()) && !y(a) && !z(a)) {
            a = a.offsetX / this.Mb(this.view.nc).width * 100;
            if (60 < a) {
                return this.Fi();
            }
            if (40 > a) {
                return this.Gi();
            }
        }
    };
    P.Fi = function() {
        this.Gb = y(this.zb) ? 10 : this.Gb + 10;
        this.Tn(this.Gb);
        try {
            window.clearTimeout(this.zb);
            this.zb = null;
        } catch (b) {}
        this.Ig();
        this.Jg();
        this.co();
        var a = this;
        this.zb = window.setTimeout(function() {
            a.Ig();
            a.a.Yj(Math.abs(a.Gb));
            a.Gb = 0;
            window.clearTimeout(a.zb);
            a.zb = null;
        }, 700);
    };
    P.Gi = function() {
        this.Gb = y(this.zb) ? -10 : this.Gb - 10;
        this.Un(this.Gb);
        try {
            window.clearTimeout(this.zb);
            this.zb = null;
        } catch (b) {}
        this.Jg();
        this.Ig();
        this.eo();
        var a = this;
        this.zb = window.setTimeout(function() {
            a.Jg();
            a.a.Zj(Math.abs(a.Gb));
            a.Gb = 0;
            window.clearTimeout(a.zb);
            a.zb = null;
        }, 700);
    };
    P.Ig = function() {
        this.a.view.od.m();
        this.a.view.od.querySelector(".r-c-circle").D("r-c-big-circle");
        this.a.view.od.querySelector(".r-c-circle-min").D("r-c-big-circle");
    };
    P.co = function() {
        this.a.view.od.kk();
        this.a.view.od.querySelector(".r-c-circle").w("r-c-big-circle");
        this.a.view.od.querySelector(".r-c-circle-min").w("r-c-big-circle");
    };
    P.Jg = function() {
        this.a.view.Dd.m();
        this.a.view.Dd.querySelector(".r-c-circle").D("r-c-big-circle");
        this.a.view.Dd.querySelector(".r-c-circle-min").D("r-c-big-circle");
    };
    P.eo = function() {
        this.a.view.Dd.kk();
        this.a.view.Dd.querySelector(".r-c-circle").w("r-c-big-circle");
        this.a.view.Dd.querySelector(".r-c-circle-min").w("r-c-big-circle");
    };
    P.Tn = function(a) {
        this.a.view.od.querySelector(".r-c-seconds-counter").Ba("" + Math.abs(a) + " sekund");
    };
    P.Un = function(a) {
        this.a.view.Dd.querySelector(".r-c-seconds-counter").Ba("" + Math.abs(a) + " sekund");
    };
    P.Am = function(a) {
        if (!y(a.target) && !y(a.target.parentNode) && a.target.parentNode.I("settings-quality")) {
            if (!this.a.K) {
                var b = a.target.parentNode.getAttribute("data-quality");
                var e = a.target.parentNode.getAttribute("data-value");
                this.a.log(this.c, "change quality to " + b + " (" + e + ")");
                if (e != this.a.f.quality) {
                    if (this.a.ea) {
                        this.a.Rc = b == "auto" ? true : false;
                        if (this.a.o == null) {
                            if (this.a.da != null && (this.a.da.configure({
                                    abr: {
                                        enabled: b == "auto"
                                    }
                                }), b != "auto")) {
                                var f = null;
                                switch (e) {
                                    case "hd":
                                        f = 1920;
                                        break;
                                    case "sd":
                                        f = 1280;
                                        break;
                                    case "lq":
                                        f = 854;
                                        break;
                                    case "vl":
                                        f = 640;
                                }
                                this.a.jk(f);
                            }
                        } else {
                            this.a.o.updateSettings({
                                streaming: {
                                    abr: {
                                        autoSwitchBitrate: {
                                            video: this.a.Rc,
                                            audio: this.a.Rc
                                        }
                                    }
                                }
                            });
                        }
                        this.a.f.quality = e;
                        this.a.Ud = false;
                    } else {
                        var g = this;
                        this.a.Xk(e, function(a) {
                            g.a.log(g.c, "link " + a);
                            g.a.f.quality = e;
                            g.a.autoplay = true;
                            g.a.src = a;
                            g.a.Qa = g.a.l();
                            g.a.fd = -1;
                            g.a.Se();
                            g.a.play();
                            g.a.Gn(b);
                        }, function() {
                            var a = new URLSearchParams(window.location.search);
                            a.get("wersja");
                            a.set("wersja", b);
                            a.set("a", 1);
                            a.set("t", parseInt(g.a.l()));
                            document.location.search = a;
                        });
                    }
                    for (f = 0; f < this.view.ua.querySelectorAll("li.settings-quality").length; f++) {
                        this.view.ua.querySelectorAll("li.settings-quality")[f].D("pb-active");
                    }
                    a.target.parentNode.w("pb-active");
                }
                this.view.Wj.Ba(b);
            }
            if (this.view.ua.I("pb-settings-menu-on")) {
                this.view.ua.D("pb-settings-menu-on");
                this.view.ua.w("pb-settings-menu-off");
            } else {
                this.view.ua.w("pb-settings-menu-on");
                this.view.ua.D("pb-settings-menu-off");
            }
        }
    };
    P.Jj = function() {
        if (this.$b()) {
            this.vb();
        }
    };
    P.Ai = function() {
        this.gc = false;
    };
    P.zi = function() {
        this.dc();
        this.gc = true;
    };
    P.Gj = function(a) {
        if (!/pb/.test(a.target.className) && (a.target.parentNode === null || !/pb/.test(a.target.parentNode.className))) {
            if (this.view.Ac(this.view.contextMenu)) {
                this.view.m(this.view.contextMenu);
            } else if (this.view.I(this.view.ua, "pb-settings-menu-on")) {
                this.view.D(this.view.ua, "pb-settings-menu-on");
                this.view.w(this.view.ua, "pb-settings-menu-off");
            }
        }
    };
    P.Pj = function() {
        if (this.view.I(this.view.ua, "pb-settings-menu-on")) {
            this.view.D(this.view.ua, "pb-settings-menu-on");
            this.view.w(this.view.ua, "pb-settings-menu-off");
        }
    };
    P.om = function() {
        this.Qf();
        document.querySelector(".btn-fullscreen").m();
        this.U.focus();
        this.T.w("pb-nocontrols-absolute");
    };
    P.zl = function(a) {
        this.view.Yd.D("pb-box-info-close");
        this.view.Yd.w("pb-box-info-open");
        this.view.Yd.w("pb-box-info-for-fullscreen");
        this.view.Ef.Ba(a);
    };
    P.Lg = function() {
        this.view.Yd.D();
        this.view.Yd.w("pb-box-info");
        this.view.Ef.Ba("");
    };
    P.Rf = function() {
        this.Lg();
        try {
            if (this.a.h.If()) {
                if (window.self != window.top && 0 < this.a.l()) {
                    this.a.pause();
                }
            } else if (!y(window.frameElement) || window.self != window.top) {
                if (0 < this.a.l()) {
                    this.a.pause();
                }
            }
        } catch (a) {}
    };
    P.$b = function() {
        try {
            if (this.view.wd.style.display == "flex") {
                return true;
            }
        } catch (a) {}
        return false;
    };
    P.he = function() {
        try {
            if (this.a.ni && !this.a.K) {
                var a = 0;
                var b = this.a.Cf();
                if (b != 0 && b.hasOwnProperty("volume")) {
                    a = b.volume;
                } else if (this.a.qd("cda.player.volume")) {
                    a = this.a.Yb("cda.player.volume");
                }
                if (0 < a && this.a.video.muted && this.a.view.wd.style.display == "none" && !this.a.ta()) {
                    this.a.view.wd.style.display = "flex";
                }
            }
        } catch (e) {}
    };
    P.vb = function(a) {
        try {
            if (this.view.wd.style.display == "flex" && (this.view.wd.style.display = "none", typeof ononlyHide === "undefined" || !a)) {
                try {
                    var b = this.a.Cf();
                    if (b != 0 && b.hasOwnProperty("volume")) {
                        this.J(b.volume);
                    } else if (this.a.qd("cda.player.volume")) {
                        this.J(this.a.Yb("cda.player.volume"));
                    } else {
                        this.J(this.Fc);
                    }
                } catch (e) {
                    this.J(this.Fc);
                }
            }
        } catch (e) {}
    };
    P.uk = function() {
        this.a.jo();
    };
    P.Xc = function() {
        var a = this.sa.querySelectorAll(".pb-li-canal-logo");
        if (!a[this.La].I("channel-active")) {
            a[this.La].w("channel-active");
        }
        for (var b = {
                Ea: 0
            }; b.Ea < this.a.ka.length; b = {
                Ea: b.Ea
            }, b.Ea++) {
            if (this.a.ka[b.Ea].url == a[this.La].getAttribute("data-url")) {
                if (this.Ta != null) {
                    window.clearInterval(this.Ta);
                    this.Ta = null;
                }
                var e = this;
                this.Ta = window.setInterval(function() {
                    var a = b;
                    return function() {
                        e.af(e.a.ka[a.Ea].program.actual.start_time_ts, e.a.ka[a.Ea].program.actual.start_time_format, e.a.ka[a.Ea].program.actual.end_time_ts, e.a.ka[a.Ea].program.actual.end_time_format);
                    };
                }(), 100);
                if (this.a.ka[b.Ea].program.actual.title) {
                    this.sa.querySelector(".pb-tvpr-title-header").innerText = this.a.ka[b.Ea].program.actual.title;
                }
                if (this.a.ka[b.Ea].program.actual.description) {
                    this.sa.querySelector(".pb-tvpr-description").innerText = this.a.ka[b.Ea].program.actual.description;
                }
                a = "";
                if (this.a.ka[b.Ea].program.actual.year) {
                    a += this.a.ka[b.Ea].program.actual.year;
                }
                if (this.a.ka[b.Ea].program.actual.genre) {
                    a += " | " + this.a.ka[b.Ea].program.actual.genre;
                }
                if (this.a.ka[b.Ea].program.actual.country) {
                    a += " | " + this.a.ka[b.Ea].program.actual.country.replace("|", ", ");
                }
                this.sa.querySelector(".pb-tvpr-info").innerText = a;
                this.sa.querySelector(".ico-above-24").className = "ico-above-24";
                if (this.a.ka[b.Ea].program.actual.age_rating) {
                    this.sa.querySelector(".ico-above-24").w("ico-above-" + this.a.ka[b.Ea].program.actual.age_rating + "y");
                }
                break;
            }
        }
    };
    P.af = function(a, b, e, f) {
        if (1 >= a && 1 >= e) {
            this.Kh.innerHTML = "";
            this.Lh.innerHTML = "";
            this.Ih.innerHTML = "";
            this.Jh.innerHTML = "";
            this.rk.style.width = "0%";
            this.sk.style.width = "0%";
            this.tk.style.width = "0%";
        } else {
            a = ((new Date).getTime() / 1e3 - a) / (e - a) * 100;
            if (this.Kh.innerHTML != b) {
                this.Kh.innerHTML = b;
            }
            if (this.Lh.innerHTML != b) {
                this.Lh.innerHTML = b;
            }
            if (this.Ih.innerHTML != f) {
                this.Ih.innerHTML = f;
            }
            if (this.Jh.innerHTML != f) {
                this.Jh.innerHTML = f;
            }
            this.rk.style.width = a + "%";
            this.sk.style.width = a + "%";
            this.tk.style.width = a + "%";
            this.a.ho();
        }
    };
    P.Kg = function() {
        Array.prototype.slice.call(this.sa.querySelectorAll(".pb-li-canal-logo")).forEach(function(a) {
            a.querySelector(".pb-loading-tv-logo").D("pb-loading-tv-logo-show");
        });
    };
    R.prototype.bind = function(a, b) {
        return function() {
            b.apply(a, b);
        };
    };
    var Fa = {
        fb: 0,
        ga: 1,
        qc: 2,
        uo: 3,
        Sh: 4,
        Wh: 5,
        ec: 10,
        yb: 11,
        je: 12
    };
    P = Ia.prototype;
    P.xa = function() {
        try {
            if (E(this.V.ca.yc)) {
                if (this.a.h.ra()) {
                    var a = this.V.ca.yc.split(" ");
                    var b;
                    for (b in a) {
                        T(this.a.video, a[b], this.mj, this);
                    }
                } else {
                    T(window.document, this.V.ca.yc, this.mj, this);
                }
            }
            if (E(this.V.ca.error)) {
                T(window.document, this.V.ca.error, this.Me, this);
            }
        } catch (e) {}
    };
    P.mj = function(a) {
        this.Wk(a);
    };
    P.Me = function(a) {
        this.jl(a);
    };
    P.request = P.il = function() {
        if (y(this.V)) {
            return false;
        }
        try {
            this.a.video.removeAttribute("webkit-playsinline");
            this.a.video.removeAttribute("playsinline");
        } catch (a) {}
        if (this.a.h.ra()) {
            try {
                this.a.video[this.V.request]();
                return true;
            } catch (a) {
                return false;
            }
        } else {
            try {
                this.view.T[this.V.request]({
                    navigationUI: "hide"
                });
                return true;
            } catch (a) {
                return false;
            }
        }
    };
    P.Lb = function() {
        if (y(this.V)) {
            return false;
        }
        try {
            window.document[this.V.Lb]();
            return true;
        } catch (a) {}
        return false;
    };
    P.is = P.Ca = function() {
        if (y(this.V)) {
            return false;
        }
        try {
            if (this.V.is != "") {
                return window.document[this.V.is];
            }
        } catch (a) {}
        return false;
    };
    P.enabled = P.isEnabled = function() {
        if (y(this.V)) {
            return false;
        }
        try {
            this.view.w(this.view.T, "pb-video-full");
            return window.document[this.V.enabled];
        } catch (a) {}
        return false;
    };
    P.ub = P.element = function() {
        if (y(this.V)) {
            return false;
        }
        try {
            return window.document[this.V.element];
        } catch (a) {}
        return false;
    };
    P = Ga.prototype;
    P.ak = function() {
        this.h = this.Ga() ? this.Ma.Fk : this.Nl() ? this.Ma.Gk : this.Vi() ? this.Ma.Bk : this.Ll() ? this.Ma.Ak : this.$d() ? this.Ma.Ph : this.ra() ? this.Ma.yk : this.pd() ? this.Ma.Qh : this.Qg() ? this.Ma.Rh : this.Jf() ? this.Ma.Uh : this.be() ? this.Ma.Dk : this.If() ? this.Ma.Th : this.Il() ? this.Ma.zk : this.Ma.Ck;
    };
    P.Hi = function() {
        if (this.h === -1) {
            this.ak();
        }
        return this.h;
    };
    P.Ga = function() {
        return J(this.B, "SMART-TV") || J(this.B, "SmartTV") || J(this.B, "SmartTvA") || J(this.B, "Maple") || J(this.B, "Opera TV") || J(this.B, "NetCast.TV") || J(this.B, "AppleTV") || J(this.B, "GoogleTV") || J(this.B, "HbbTV") || J(this.B, "CrKey") || J(this.B, "POV_TV") || J(this.B, "GTV100") || J(this.B, "STB") || J(this.B, "NETTV") || J(this.B, "PhilipsTV") || J(this.B, "Roku") || J(this.B, "Viera") || J(this.B, "PlayStation") || J(this.B, "Xbox") || J(this.B, "BRAVIA") || J(this.B, "HYUNDAI") || J(this.B, "Hisense") || J(this.B, "Tizen") || J(this.B, "SRAF") || J(this.B, "Linux; U") || J(this.B, "InettvBrowser") || J(this.B, "Puffin");
    };
    P.Nl = function() {
        return J(this.B, "PlayStation") || J(this.B, "Xbox") || J(this.B, "Nintendo WiiU");
    };
    P.Wi = function() {
        return J(this.B, "PlayStation");
    };
    P.pd = function() {
        return I(this.B, "Chrome") && I(this.Mf.vendor, "Google Inc") && !I(this.B, "OPR/");
    };
    P.Qg = function() {
        return I(this.B, "Firefox");
    };
    P.Jf = function() {
        return I(this.B, "Opera") || I(this.B, "OPR/");
    };
    P.be = function() {
        return I(this.B, "Safari") && I(this.B, "Chrome") == 0 && I(this.B, "Mobile") == 0;
    };
    P.Xi = function() {
        return I(this.B, "Safari") && I(this.B, "Chrome") == 0 && this.ra();
    };
    P.If = function() {
        return I(this.B, "MSIE") || I(this.B, "Trident");
    };
    P.Il = function() {
        return I(this.B, "Edge");
    };
    P.$d = function() {
        return I(this.B, "Android");
    };
    P.ep = function() {
        return I(this.B, "iPhone");
    };
    P.ra = function() {
        return /iP(hone|ad|od)/.test(this.B);
    };
    P.Rg = function() {
        return I(this.B, "Macintosh");
    };
    P.cp = function() {
        return I(this.B, "iPad");
    };
    P.$i = function() {
        return J(this.B, "iemobile") || J(this.B, "windows phone") && J(this.B, "edge") || I(this.B, " WPDesktop");
    };
    P.Vi = function() {
        return this.Jf() && I(this.B, "Mobile");
    };
    P.Ll = function() {
        return this.Qg() && I(this.B, "Mobile");
    };
    P.Ri = function() {
        return I(this.B, "BlackBerry");
    };
    P.Dl = function() {
        return I(this.B, "ALCATEL");
    };
    P.H = function() {
        return this.$d() || this.ra() || this.$i() || this.Ri();
    };
    P.Gl = function() {
        return I(this.B, "CrKey");
    };
    P.Hl = function() {
        return I(this.B, "CrOS") && I(this.Xp, "Chrome");
    };
    P.rl = function() {
        return K(this.B, /Chrome\/([0-9.]+)/);
    };
    P.lp = function() {
        return I(this.B, "Tizen");
    };
    P.No = function() {
        switch (this.Hi()) {
            case this.Ma.Qh:
                return K(this.B, /Chrome\/([0-9.]+)/);
            case this.Ma.Rh:
                return K(this.B, /Firefox\/([0-9.]+)/);
            case this.Ma.Uh:
                if (I(this.B, "OPR")) {
                    return K(this.B, /OPR\/([0-9.]+)/);
                } else if (I(this.B, "Version")) {
                    return K(this.B, /Version\/([0-9.]+)/);
                } else {
                    return K(this.B, /Opera\s+([0-9]+)/);
                }
            case this.Ma.qo:
                return K(this.B, /Version\/([0-9.]+)/);
            case this.Ma.Th:
                return K(this.B, /MSIE\s+([0-9.]+)/);
            case this.Ma.Ph:
                return K(this.B, /Android\s([0-9\.]*)/);
            default:
                if (I(this.B, "Version")) {
                    return K(this.B, /Version\/([0-9.]+)/);
                } else {
                    return "";
                }
        }
    };
    P.tl = function() {
        try {
            var a = /AppleWebKit\/([\d.]+)/.exec(this.B);
            if (a) {
                return parseFloat(a[1]);
            }
        } catch (b) {}
        return false;
    };
    P.rd = function() {
        try {
            var a = this.tl();
            if (!y(a) && a !== false && 537 > a) {
                return true;
            }
        } catch (b) {}
        return false;
    };
    P.Zi = function() {
        return /Windows/.test(this.Mf.platform) || I(this.B, "Windows");
    };
    P.fp = function() {
        return /Linux/.test(this.Mf.platform);
    };
    P.El = function() {
        if (this.$d()) {
            return I(this.B, "Mozilla/5.0") && I(this.B, "Android ") && I(this.B, "Version/") && I(this.B, "AppleWebKit") && !this.Vi();
        } else {
            return false;
        }
    };
    P.Dg = function() {
        if (this.$d()) {
            var a = this.B.match(/Android\s([0-9\.]*)/);
            if (a && a[1]) {
                return a[1];
            } else {
                return false;
            }
        }
        return false;
    };
    P.Hg = function() {
        if (this.ra()) {
            var a = this.Mf.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            if (a === null) {
                return -1;
            } else {
                return parseInt(a[1], 10) + (typeof a[2] !== "undefined" ? "." + parseInt(a[2], 10) + (typeof a[3] !== "undefined" ? "." + parseInt(a[3], 10) : "") : "");
            }
        }
        return false;
    };
    P.Kl = function() {
        var a = window.navigator.userAgent || window.navigator.vendor || window.opera;
        return -1 < a.indexOf("FBAN") || -1 < a.indexOf("FBAV");
    };
    P.Ml = function() {
        return -1 < window.navigator.userAgent.indexOf("Instagram");
    };
    var Ja = {
        ec: 10,
        yb: 11,
        je: 12,
        oo: 13,
        vo: 14,
        ro: 15,
        to: 16,
        wo: 17,
        no: 18,
        mo: 19,
        so: 20
    };
    P = Y.prototype = {};
    P.xa = function(a) {
        this.hd = 0;
        if (this.wa !== this.state.yb || !z(a) || this.a.h.H()) {
            if (!y(this.a.Y)) {
                this.a.Y.Te(false);
            }
            this.a.wl();
            this.a.controls.disable();
            this.a.v.va.w("pb-nocloud");
            this.a.v.m(this.a.v.td);
            this.a.controls.Wc(0);
            this.a.controls.ob.Za("0%");
            this.a.controls.Eb(0);
            this.a.controls.Ra(0);
            if (this.a.h.H()) {
                this.a.Qe();
            }
        }
    };
    P.$k = function() {
        if (this.a.Nh) {
            window.clearInterval(this.bf);
            this.bf = null;
            this.Li();
        }
    };
    P.Li = function() {
        if (this.Zd(this.b[this.R].tag)) {
            this.xf(this.b[this.R].tag);
            this.$f(this.b[this.R]);
        } else {
            switch (this.b[this.R].type) {
                case this.type.fc:
                    this.xf(this.b[this.R].tag);
                    this.Ve(this.b[this.R]);
                    break;
                case this.type.Ua:
                    this.xf(this.b[this.R].tag);
                    this.$f(this.b[this.R]);
                    break;
                case this.type.Vh:
                    this.Bf(this.b[this.R].tag);
                    break;
                case this.type.ef:
                    this.lk(this.b[this.R]);
                    break;
                default:
                    this.Fa();
            }
        }
    };
    P.Fa = function(a) {
        this.a.log(this.c, "destroy");
        try {
            if (this.a.ta()) {
                window.parent.postMessage("player-ad-finish", "*");
            }
        } catch (g) {}
        try {
            if (window.document.querySelector("#player_branding_top")) {
                window.document.querySelector("#player_branding_top").innerHTML = "";
            }
            if (window.document.querySelector("#player_branding_bottom")) {
                window.document.querySelector("#player_branding_bottom").innerHTML = "";
            }
        } catch (g) {}
        if (this.a.Na) {
            window.clearInterval(this.bf);
            this.bf = null;
            this.a.disabled = false;
            if (!this.gb) {
                this.a.autoplay = false;
            }
        }
        this.a.ze();
        this.a.controls.enable();
        this.a.s = null;
        this.jg = this.a.K = false;
        if (!y(this.mb)) {
            this.mb.innerHTML = "";
        }
        if (!y(this.lb)) {
            this.lb.m();
        }
        if (this.wa !== this.state.yb || this.gb || this.a.h.H()) {
            this.a.v.show(this.a.v.td);
            this.a.v.m(this.a.v.bb);
            this.a.v.m(this.a.v.re);
            this.a.v.va.D("pb-run-ad");
            this.a.controls.Wc(0);
            this.a.controls.ob.Za("0%");
            this.a.controls.Eb(0);
            this.a.controls.Ra(this.a.M());
            if (this.a.h.H()) {
                this.a.controls.Ra(0);
            }
        }
        this.a.Y.xa();
        if (this.wa !== this.state.ec && !y(this.a.Y) && this.a.Y.Pg()) {
            this.a.Y.Te(true);
        }
        if (this.wa === this.state.ec) {
            if (this.a.h.H() && (this.a.Ae(), this.a.Se(), this.a.autoplay && !this.gb && this.wa != this.state.je)) {
                var b = this;
                window.addEventListener("touchstart", function l() {
                    b.a.rb();
                    this.removeEventListener("touchstart", l);
                });
            }
            this.a.video.load();
        }
        if (this.wa === this.state.je) {
            this.a.log(this.c, "start next video");
            this.ma("Startuje kolejny film");
            this.a.Ue();
        } else if (this.wa === this.state.ec) {
            if (!z(a) && a) {
                this.a.log(this.c, "start video force");
                this.ma("Startuje film");
                this.a.rb();
            } else if (this.gb) {
                this.a.log(this.c, "adsDisplay true, start video");
                this.ma("Startuje film");
                this.a.rb();
            } else if (this.a.autoplay || this.a.fa) {
                this.a.log(this.c, "autoplay true, start video");
                this.ma("Startuje film");
                this.a.rb();
            } else {
                this.a.log(this.c, "set video file");
                this.ma("Wracam do filmu");
                this.a.Se();
                if (this.a.Na) {
                    this.a.controls.qa(true);
                    this.a.controls.ba.m();
                } else if (this.a.controls.ba.W() || this.a.controls.wb.I("pb-play-pause")) {
                    this.a.rb();
                }
            }
        } else if (this.wa === this.state.yb) {
            this.a.log(this.c, "start video after midroll");
            try {
                var e = this.a.controls.za.querySelectorAll(".pb-progress-midroll-marker");
                if (!y(e) && 0 < e.length) {
                    for (a = 0; a < e.length; a++) {
                        var f = e[a];
                        if (!y(f) && !y(f.getAttribute("data-time")) && f.getAttribute("data-time") == this.b[this.R - 1].time) {
                            f.m();
                        }
                    }
                }
            } catch (g) {
                this.a.log(this.c, g);
            }
            if (!this.a.h.H()) {
                if (0 < this.a.l()) {
                    this.a.play();
                } else {
                    this.a.rb();
                }
            }
        }
    };
    P.Wf = function(a) {
        switch (a) {
            case "prerol":
            case "preroll":
                this.wa = this.state.ec;
                break;
            case "midrol":
            case "midroll":
                this.wa = this.state.yb;
                break;
            case "postrol":
            case "postroll":
                this.wa = this.state.je;
                break;
            default:
                this.wa = this.state.ec;
        }
        this.a.mf = this.wa;
    };
    P.Ko = function() {
        return this.wa;
    };
    P.Sp = function(a) {
        this.mf = a;
    };
    P.Jo = function() {
        return this.mf;
    };
    P.Bf = function(a, b) {
        this.a.log(this.c, "getPool", a);
        if ((!!this.a.fa || !!this.a.autoplay) && !this.a.controls.ba.W()) {
            this.a.controls.ba.show();
            this.a.controls.U.m();
        }
        this.ma("Pobieram pule reklam...");
        this.ma(a);
        if (window.location.host.indexOf("cda.pl") != -1) {
            a += "&wa=" + Number(this.a.ce);
        }
        try {
            this.rf(a, "GET", true, true, function(a) {
                this.a.log(this.c, "getPool", a);
                try {
                    if (!y(a)) {
                        var e = JSON.parse(a);
                        if (!y(e) && 0 < e.length) {
                            try {
                                this.ma("Lista dost\u0119pnych reklam:");
                                for (a = 0; a < e.length; a++) {
                                    this.ma(e[a]);
                                }
                            } catch (g) {}
                            this.kd = e;
                            this.Cb = 0;
                            this.xf(e);
                            return this.oh(this.kd, this.Cb, b);
                        }
                    }
                } catch (g) {
                    this.a.log(this.c, "getPool", g);
                    this.ma("Wyst\u0105pi\u0142 b\u0142\u0105d: " + g);
                }
                this.a.log(this.c, "getPool", "response null");
                return this.Fa();
            }.bind(this));
        } catch (e) {
            this.a.log(this.c, "getPool", e);
            this.Fa();
        }
    };
    P.oh = function(a, b, e) {
        if ((!!this.a.fa || !!this.a.autoplay) && !this.a.controls.ba.W()) {
            this.a.controls.ba.show();
            this.a.controls.U.m();
        }
        this.a.log(this.c, "parsePool", arguments);
        this.ma("Sprawdzam reklam\u0119 nr " + (b + 1));
        if (E(a[b])) {
            if (e) {
                this.jg = true;
            }
            if (typeof e == "undefined") {
                e = this.jg;
            }
            var f = {
                autoplay: 0 < this.R ? true : this.b[this.R].autoplay,
                counter: this.b[this.R].counter,
                displayAs: this.b[this.R].displayAs,
                key: e && typeof this.b[this.R].key2 != "undefined" ? this.b[this.R].key2 : this.b[this.R].key,
                key2: typeof this.b[this.R].key2 != "undefined" ? this.b[this.R].key2 : "",
                skip: this.b[this.R].skip,
                click: this.b[this.R].click,
                time: this.b[this.R].time,
                pool: this.b[this.R].tag,
                tag: a[b]
            };
            if (this.nf) {
                f.autoplay = true;
            }
            if (this.a.fa) {
                f.autoplay = true;
            }
            this.a.log(this.c, "startbyclick: " + this.a.fa);
            this.a.log(this.c, "autoplay: " + f.autoplay);
            this.a.log(this.c, "state: " + this.a.getState());
            if (this.wa == this.state.je || this.wa == this.state.yb) {
                f.autoplay = true;
            }
            if (this.Zd(a[b])) {
                f.type = this.type.Ua;
                return this.$f(f);
            }
            if (this.Pl(a[b]) && !this.a.h.H()) {
                this.a.log(this.c, "youtube embed ads: " + a[b]);
                this.a.log(this.c, "youtube video id: " + this.Ji(a[b]));
                f.type = this.type.ef;
                return this.lk(f);
            }
            f.type = this.type.fc;
            return this.Ve(f);
        }
        return this.Fa();
    };
    P.Ve = function(a) {
        this.a.log(this.c, "startVast", a);
        this.ma("Reklama VAST");
        this.ma("Pobieram: " + a.tag);
        this.yf(this.Cb, true);
        this.a.controls.vb();
        this.Da = this.type.fc;
        this.xb = new W(this.a, this, a);
        this.xb.Vc(function(a) {
            this.xb.Al(a);
        }.bind(this), function() {
            this.Ya(this.error.ei);
        }.bind(this));
        if (this.a.ac) {
            var b = this;
            window.videoAdPlay = function() {
                if (b.xb.video != null && y(document.querySelector(".pb-run-ad"))) {
                    b.xb.video.preload = "auto";
                    b.xb.video.autoplay = "autoplay";
                    b.xb.video.muted = "muted";
                    b.xb.play();
                    return true;
                } else {
                    return false;
                }
            };
        }
    };
    P.$f = function(a) {
        this.a.log(this.c, "startAdsense", a);
        this.a.controls.vb();
        if (!this.ul()) {
            this.Cb++;
            if (this.Cb < this.kd.length) {
                return this.oh(this.kd, this.Cb);
            } else {
                return this.Cc();
            }
        }
        this.ma("Reklama ADSENSE");
        this.ma("Pobieram: " + a.tag);
        this.yf(this.Cb, true);
        this.Da = this.type.Ua;
        this.wc = new X(this.a, this, a);
        this.wc.xa();
    };
    P.lk = function(a) {
        function b(a) {
            if (k.a.controls.ba.W()) {
                k.a.controls.F(false);
            }
            k.a.controls.U.m();
            a.target.setVolume(50);
            k.a.view.va.D("pb-ady-player-wait");
            k.a.controls.U.show();
            k.cd = true;
        }

        function e(a) {
            if (!fa && k.cd) {
                k.qh();
                fa = true;
                if (0 < k.ri) {
                    k.Vb.seekTo(k.ri);
                }
            }
            if (a.data == window.YT.PlayerState.PLAYING) {
                if (k.a.view.va.I("pb-ady-player-active")) {
                    k.a.view.va.D("pb-ady-player-active");
                }
                p = window.setInterval(function() {
                    if (y(k.Vb) || z(k.Vb)) {
                        window.clearInterval(p);
                        p = null;
                    } else {
                        k.hn(k.Vb.getCurrentTime(), k.Vb.getDuration());
                        if (k.kf && !u) {
                            k.a.view.pc.show();
                            k.a.view.pc.Ba("Pomi\u0144 reklam\u0119 za " + k.ed);
                            k.a.view.pc.style.opacity = "0.5";
                            u = true;
                            v = window.setInterval(function() {
                                k.ed--;
                                if (0 < k.ed) {
                                    k.a.view.pc.Ba("Pomi\u0144 reklam\u0119 za " + k.ed);
                                } else {
                                    k.a.view.pc.Ba("Pomi\u0144 reklam\u0119");
                                    k.a.view.pc.style.opacity = "1";
                                    k.mi = true;
                                    window.clearTimeout(v);
                                    v = null;
                                }
                            }, 1e3);
                        }
                        if (k.Ik && !ia) {
                            ia = true;
                            M = window.setInterval(function() {
                                var a = Math.round(k.Vb.getDuration() - k.Vb.getCurrentTime());
                                if (!isNaN(a) && 0 < a) {
                                    k.a.view.cf.show();
                                    k.a.view.cf.Ba("Reklama zniknie za " + a + " sek");
                                } else {
                                    k.a.view.cf.m();
                                }
                                if (0 >= a) {
                                    window.clearInterval(M);
                                    M = null;
                                }
                            }, 500);
                        }
                    }
                }, 500);
            }
            if (a.data == window.YT.PlayerState.ENDED) {
                if (k.cd) {
                    k.N(k.Df().complete);
                    window.setTimeout(function() {
                        k.nk();
                    }, 500);
                } else {
                    k.cd = true;
                    k.a.view.va.D("pb-ady-player-wait");
                    k.a.controls.U.show();
                }
            }
        }
        this.a.log(this.c, "start yt", a);
        this.a.controls.U.m();
        this.a.view.va.w("pb-ady-player-wait");
        this.a.view.va.w("pb-ady-player-active");
        this.a.view.va.w("pb-ady-player-show");
        this.ma("Reklama Youtube Embed");
        this.ma("Wy\u015Bwietlam: " + a.tag);
        this.yf(this.Cb, true);
        this.Da = this.type.ef;
        this.pi = this.Nd = this.vc = this.uc = this.rc = false;
        this.kf = true;
        this.ed = 60;
        this.Ik = this.mi = false;
        this.ri = this.oe = 0;
        try {
            if (this.a.ib("controls") != null) {
                this.oe = parseInt(this.a.ib("controls"));
                if (!D(this.oe)) {
                    this.oe = 0;
                }
            }
        } catch (ha) {
            this.oe = 0;
        }
        try {
            if (this.a.ib("skip") != null) {
                if (parseInt(this.a.ib("skip"))) {
                    this.kf = true;
                } else {
                    this.kf = false;
                }
            }
        } catch (ha) {
            this.kf = false;
        }
        try {
            if (this.a.ib("skip_sec") != null) {
                var f = parseInt(this.a.ib("skip_sec"));
                if (!D(f) || 0 >= f || 15 < f) {
                    f = 5;
                }
                this.ed = f;
            }
        } catch (ha) {
            this.ed = 5;
        }
        f = document.createElement("script");
        f.src = "https://www.youtube.com/iframe_api";
        var g = document.getElementsByTagName("script")[0];
        g.parentNode.insertBefore(f, g);
        this.Hb = a.tag;
        var l = this.Ji(a.tag);
        if (y(l)) {
            return this.Fa();
        }
        if (this.Hb == "https://www.youtube.com/watch?v=lq1k3B4D_tQ" || this.Hb == "https://www.youtube.com/watch?v=SAqEE8AJvDE" || this.Hb == "https://www.youtube.com/watch?v=v2K7b2JhH5o" || this.Hb == "https://www.youtube.com/watch?v=DjZpjpJr4FU" || this.Hb == "https://www.youtube.com/watch?v=ItVe60UwwMU") {
            this.ed = 60;
        }
        var k = this;
        window.onYouTubeIframeAPIReady = function() {
            k.Vb = new window.YT.Player("pb-yt-iframe", {
                height: k.a.view.Qc(k.a.view.T),
                width: k.a.view.Zb(k.a.view.T),
                videoId: l,
                playerVars: {
                    rel: 0,
                    showinfo: 1,
                    playsinline: 1,
                    autoplay: 0,
                    controls: k.oe,
                    disablekb: 0,
                    fs: 0,
                    modestbranding: 1,
                    autohide: 1,
                    wmode: "opaque"
                },
                events: {
                    onReady: b,
                    onStateChange: e
                }
            });
        };
        k = this;
        var p = null;
        k = this;
        var u = false;
        var v = null;
        var M = null;
        var ia = false;
        var fa = false;
        this.a.view.pc.m();
        T(this.a.view.pc, "click", this.jn, this);
    };
    P.nk = function() {
        try {
            this.a.view.va.D("pb-ady-player-show");
            this.a.view.pc.Ba("");
            this.a.view.pc.m();
            this.a.view.cf.Ba("");
            this.a.view.cf.m();
            this.Vb = null;
            this.cd = false;
            this.a.rb();
            this.a.view.xk.Ba("");
            this.a.view.xk.m();
        } catch (a) {
            this.a.log(this.c, a);
        }
    };
    P.Zd = function(a) {
        return /ima3vpaid/.test(a) || /doubleclick.net/.test(a) || /svastx.moatads.com/.test(a) || /s418.mxcdn.net/.test(a) || /services.bilsyndication.com/.test(a) || /secure.adnxs.com/.test(a) || /bdr.wpcdn.pl/.test(a) || /vpaid=1/.test(a) || /pubmatic.com/.test(a);
    };
    P.ul = function() {
        try {
            if (typeof window.google.ima != "undefined") {
                return true;
            }
        } catch (a) {}
        return false;
    };
    P.Pl = function(a) {
        return -1 < a.indexOf("www.youtube.com/watch?v=");
    };
    P.Ji = function(a) {
        try {
            return a.split("v=")[1];
        } catch (b) {
            return null;
        }
    };
    P.Df = function() {
        if (this.Hb == "https://www.youtube.com/watch?v=lq1k3B4D_tQ") {
            return {
                impression: ["https://g.cda.pl/g.php?pixel&vi=Y2RiZDNlNDFlMDI0YjkwODViNTdjODdhYzNlZmU4M2M_MTkzNg&pl=impression&ct=[timestamp]"],
                start: "https://g.cda.pl/g.php?pixel&vi=Y2RiZDNlNDFlMDI0YjkwODViNTdjODdhYzNlZmU4M2M_MTkzNg&pl=start&ct=[timestamp]",
                firstQuartile: "https://g.cda.pl/g.php?pixel&vi=Y2RiZDNlNDFlMDI0YjkwODViNTdjODdhYzNlZmU4M2M_MTkzNg&pl=firstQuartile&ct=[timestamp]",
                midpoint: "https://g.cda.pl/g.php?pixel&vi=Y2RiZDNlNDFlMDI0YjkwODViNTdjODdhYzNlZmU4M2M_MTkzNg&pl=midpoint&ct=[timestamp]]",
                thirdQuartile: "https://g.cda.pl/g.php?pixel&vi=Y2RiZDNlNDFlMDI0YjkwODViNTdjODdhYzNlZmU4M2M_MTkzNg&pl=thirdQuartile&ct=[timestamp]",
                complete: "https://g.cda.pl/g.php?pixel&vi=Y2RiZDNlNDFlMDI0YjkwODViNTdjODdhYzNlZmU4M2M_MTkzNg&pl=complete&ct=[timestamp]",
                skip: "https://g.cda.pl/g.php?pixel&vi=Y2RiZDNlNDFlMDI0YjkwODViNTdjODdhYzNlZmU4M2M_MTkzNg&pl=skip&ct=[timestamp]",
                clickTracking: "https://g.cda.pl/g.php?pixel&vi=Y2RiZDNlNDFlMDI0YjkwODViNTdjODdhYzNlZmU4M2M_MTkzNg&pl=clickTracking&ct=[timestamp]",
                video60sec: "https://g.cda.pl/g.php?pixel&vi=Y2RiZDNlNDFlMDI0YjkwODViNTdjODdhYzNlZmU4M2M_MTkzNg&pl=video60sec&ct=[timestamp]"
            };
        }
        if (this.Hb == "https://www.youtube.com/watch?v=SAqEE8AJvDE") {
            return {
                impression: ["https://g.cda.pl/g.php?pixel&vi=YTNhYzdiOTY5NWNmMTdmNTQ1OTdmMjg1NjVjNTBlZDA_MTk1NA&pl=impression&ct=[timestamp]"],
                start: "https://g.cda.pl/g.php?pixel&vi=YTNhYzdiOTY5NWNmMTdmNTQ1OTdmMjg1NjVjNTBlZDA_MTk1NA&pl=start&ct=[timestamp]",
                firstQuartile: "https://g.cda.pl/g.php?pixel&vi=YTNhYzdiOTY5NWNmMTdmNTQ1OTdmMjg1NjVjNTBlZDA_MTk1NA&pl=firstQuartile&ct=[timestamp]",
                midpoint: "https://g.cda.pl/g.php?pixel&vi=YTNhYzdiOTY5NWNmMTdmNTQ1OTdmMjg1NjVjNTBlZDA_MTk1NA&pl=midpoint&ct=[timestamp]]",
                thirdQuartile: "https://g.cda.pl/g.php?pixel&vi=YTNhYzdiOTY5NWNmMTdmNTQ1OTdmMjg1NjVjNTBlZDA_MTk1NA&pl=thirdQuartile&ct=[timestamp]",
                complete: "https://g.cda.pl/g.php?pixel&vi=YTNhYzdiOTY5NWNmMTdmNTQ1OTdmMjg1NjVjNTBlZDA_MTk1NA&pl=complete&ct=[timestamp]",
                skip: "https://g.cda.pl/g.php?pixel&vi=YTNhYzdiOTY5NWNmMTdmNTQ1OTdmMjg1NjVjNTBlZDA_MTk1NA&pl=skip&ct=[timestamp]",
                clickTracking: "https://g.cda.pl/g.php?pixel&vi=YTNhYzdiOTY5NWNmMTdmNTQ1OTdmMjg1NjVjNTBlZDA_MTk1NA&pl=clickTracking&ct=[timestamp]",
                video60sec: "https://g.cda.pl/g.php?pixel&vi=YTNhYzdiOTY5NWNmMTdmNTQ1OTdmMjg1NjVjNTBlZDA_MTk1NA&pl=video60sec&ct=[timestamp]"
            };
        }
        if (this.Hb == "https://www.youtube.com/watch?v=v2K7b2JhH5o") {
            return {
                impression: ["https://g.cda.pl/g.php?pixel&vi=OTI4Yjc0MTRhMjU2YzgyOTY3YTg2ODliMzUwYzVhNjY_MTk1Nw&pl=impression&ct=[timestamp]"],
                start: "https://g.cda.pl/g.php?pixel&vi=OTI4Yjc0MTRhMjU2YzgyOTY3YTg2ODliMzUwYzVhNjY_MTk1Nw&pl=start&ct=[timestamp]",
                firstQuartile: "https://g.cda.pl/g.php?pixel&vi=OTI4Yjc0MTRhMjU2YzgyOTY3YTg2ODliMzUwYzVhNjY_MTk1Nw&pl=firstQuartile&ct=[timestamp]",
                midpoint: "https://g.cda.pl/g.php?pixel&vi=OTI4Yjc0MTRhMjU2YzgyOTY3YTg2ODliMzUwYzVhNjY_MTk1Nw&pl=midpoint&ct=[timestamp]]",
                thirdQuartile: "https://g.cda.pl/g.php?pixel&vi=OTI4Yjc0MTRhMjU2YzgyOTY3YTg2ODliMzUwYzVhNjY_MTk1Nw&pl=thirdQuartile&ct=[timestamp]",
                complete: "https://g.cda.pl/g.php?pixel&vi=OTI4Yjc0MTRhMjU2YzgyOTY3YTg2ODliMzUwYzVhNjY_MTk1Nw&pl=complete&ct=[timestamp]",
                skip: "https://g.cda.pl/g.php?pixel&vi=OTI4Yjc0MTRhMjU2YzgyOTY3YTg2ODliMzUwYzVhNjY_MTk1Nw&pl=skip&ct=[timestamp]",
                clickTracking: "https://g.cda.pl/g.php?pixel&vi=OTI4Yjc0MTRhMjU2YzgyOTY3YTg2ODliMzUwYzVhNjY_MTk1Nw&pl=clickTracking&ct=[timestamp]",
                video60sec: "https://g.cda.pl/g.php?pixel&vi=OTI4Yjc0MTRhMjU2YzgyOTY3YTg2ODliMzUwYzVhNjY_MTk1Nw&pl=video60sec&ct=[timestamp]"
            };
        }
        if (this.Hb == "https://www.youtube.com/watch?v=DjZpjpJr4FU") {
            return {
                impression: ["https://g.cda.pl/g.php?pixel&vi=ZDk1NmZiMGMxY2E4OTMxY2RjMzYzOTVmYzI4YjllNDU_MTk2MA&pl=impression&ct=[timestamp]"],
                start: "https://g.cda.pl/g.php?pixel&vi=ZDk1NmZiMGMxY2E4OTMxY2RjMzYzOTVmYzI4YjllNDU_MTk2MA&pl=start&ct=[timestamp]",
                firstQuartile: "https://g.cda.pl/g.php?pixel&vi=ZDk1NmZiMGMxY2E4OTMxY2RjMzYzOTVmYzI4YjllNDU_MTk2MA&pl=firstQuartile&ct=[timestamp]",
                midpoint: "https://g.cda.pl/g.php?pixel&vi=ZDk1NmZiMGMxY2E4OTMxY2RjMzYzOTVmYzI4YjllNDU_MTk2MA&pl=midpoint&ct=[timestamp]]",
                thirdQuartile: "https://g.cda.pl/g.php?pixel&vi=ZDk1NmZiMGMxY2E4OTMxY2RjMzYzOTVmYzI4YjllNDU_MTk2MA&pl=thirdQuartile&ct=[timestamp]",
                complete: "https://g.cda.pl/g.php?pixel&vi=ZDk1NmZiMGMxY2E4OTMxY2RjMzYzOTVmYzI4YjllNDU_MTk2MA&pl=complete&ct=[timestamp]",
                skip: "https://g.cda.pl/g.php?pixel&vi=ZDk1NmZiMGMxY2E4OTMxY2RjMzYzOTVmYzI4YjllNDU_MTk2MA&pl=skip&ct=[timestamp]",
                clickTracking: "https://g.cda.pl/g.php?pixel&vi=ZDk1NmZiMGMxY2E4OTMxY2RjMzYzOTVmYzI4YjllNDU_MTk2MA&pl=clickTracking&ct=[timestamp]",
                video60sec: "https://g.cda.pl/g.php?pixel&vi=ZDk1NmZiMGMxY2E4OTMxY2RjMzYzOTVmYzI4YjllNDU_MTk2MA&pl=video60sec&ct=[timestamp]"
            };
        }
        if (this.Hb == "https://www.youtube.com/watch?v=ItVe60UwwMU") {
            return {
                impression: ["https://g.cda.pl/g.php?pixel&vi=MWI0NmUwNDcyMDkwMmI2YjYwODFjMmViYWNiMWRjYzY_MTk2Mw&pl=impression&ct=[timestamp]"],
                start: "https://g.cda.pl/g.php?pixel&vi=MWI0NmUwNDcyMDkwMmI2YjYwODFjMmViYWNiMWRjYzY_MTk2Mw&pl=start&ct=[timestamp]",
                firstQuartile: "https://g.cda.pl/g.php?pixel&vi=MWI0NmUwNDcyMDkwMmI2YjYwODFjMmViYWNiMWRjYzY_MTk2Mw&pl=firstQuartile&ct=[timestamp]",
                midpoint: "https://g.cda.pl/g.php?pixel&vi=MWI0NmUwNDcyMDkwMmI2YjYwODFjMmViYWNiMWRjYzY_MTk2Mw&pl=midpoint&ct=[timestamp]]",
                thirdQuartile: "https://g.cda.pl/g.php?pixel&vi=MWI0NmUwNDcyMDkwMmI2YjYwODFjMmViYWNiMWRjYzY_MTk2Mw&pl=thirdQuartile&ct=[timestamp]",
                complete: "https://g.cda.pl/g.php?pixel&vi=MWI0NmUwNDcyMDkwMmI2YjYwODFjMmViYWNiMWRjYzY_MTk2Mw&pl=complete&ct=[timestamp]",
                skip: "https://g.cda.pl/g.php?pixel&vi=MWI0NmUwNDcyMDkwMmI2YjYwODFjMmViYWNiMWRjYzY_MTk2Mw&pl=skip&ct=[timestamp]",
                clickTracking: "https://g.cda.pl/g.php?pixel&vi=MWI0NmUwNDcyMDkwMmI2YjYwODFjMmViYWNiMWRjYzY_MTk2Mw&pl=clickTracking&ct=[timestamp]",
                video60sec: "https://g.cda.pl/g.php?pixel&vi=MWI0NmUwNDcyMDkwMmI2YjYwODFjMmViYWNiMWRjYzY_MTk2Mw&pl=video60sec&ct=[timestamp]"
            };
        }
        if (this.Hb == "https://www.youtube.com/watch?v=YJO9VAx9PPM") {
            return {
                impression: ["https://g.cda.pl/g.php?pixel&vi=YjI2NzhhMDMzMDY2OTVhNzUyZmYyYjM5NTRmN2QzZDc_MTk0NQ&pl=impression&ct=[timestamp]"],
                start: "https://g.cda.pl/g.php?pixel&vi=YjI2NzhhMDMzMDY2OTVhNzUyZmYyYjM5NTRmN2QzZDc_MTk0NQ&pl=start&ct=[timestamp]",
                firstQuartile: "https://g.cda.pl/g.php?pixel&vi=YjI2NzhhMDMzMDY2OTVhNzUyZmYyYjM5NTRmN2QzZDc_MTk0NQ&pl=firstQuartile&ct=[timestamp]",
                midpoint: "https://g.cda.pl/g.php?pixel&vi=YjI2NzhhMDMzMDY2OTVhNzUyZmYyYjM5NTRmN2QzZDc_MTk0NQ&pl=midpoint&ct=[timestamp]]",
                thirdQuartile: "https://g.cda.pl/g.php?pixel&vi=YjI2NzhhMDMzMDY2OTVhNzUyZmYyYjM5NTRmN2QzZDc_MTk0NQ&pl=thirdQuartile&ct=[timestamp]",
                complete: "https://g.cda.pl/g.php?pixel&vi=YjI2NzhhMDMzMDY2OTVhNzUyZmYyYjM5NTRmN2QzZDc_MTk0NQ&pl=complete&ct=[timestamp]",
                skip: "https://g.cda.pl/g.php?pixel&vi=YjI2NzhhMDMzMDY2OTVhNzUyZmYyYjM5NTRmN2QzZDc_MTk0NQ&pl=skip&ct=[timestamp]",
                clickTracking: "https://g.cda.pl/g.php?pixel&vi=YjI2NzhhMDMzMDY2OTVhNzUyZmYyYjM5NTRmN2QzZDc_MTk0NQ&pl=clickTracking&ct=[timestamp]"
            };
        }
        if (this.Hb == "https://www.youtube.com/watch?v=uPyQzjzhYEE") {
            return {
                impression: ["https://g.cda.pl/g.php?pixel&vi=MWQwYmVmNjdiODA2YmYzMGNmMDc4ZGRlNGVkZWZlMWQ_MjI3Mg&pl=impression&ct=[timestamp]"],
                start: "https://g.cda.pl/g.php?pixel&vi=MWQwYmVmNjdiODA2YmYzMGNmMDc4ZGRlNGVkZWZlMWQ_MjI3Mg&pl=start&ct=[timestamp]",
                firstQuartile: "https://g.cda.pl/g.php?pixel&vi=MWQwYmVmNjdiODA2YmYzMGNmMDc4ZGRlNGVkZWZlMWQ_MjI3Mg&pl=firstQuartile&ct=[timestamp]",
                midpoint: "https://g.cda.pl/g.php?pixel&vi=MWQwYmVmNjdiODA2YmYzMGNmMDc4ZGRlNGVkZWZlMWQ_MjI3Mg&pl=midpoint&ct=[timestamp]]",
                thirdQuartile: "https://g.cda.pl/g.php?pixel&vi=MWQwYmVmNjdiODA2YmYzMGNmMDc4ZGRlNGVkZWZlMWQ_MjI3Mg&pl=thirdQuartile&ct=[timestamp]",
                complete: "https://g.cda.pl/g.php?pixel&vi=MWQwYmVmNjdiODA2YmYzMGNmMDc4ZGRlNGVkZWZlMWQ_MjI3Mg&pl=complete&ct=[timestamp]",
                skip: "https://g.cda.pl/g.php?pixel&vi=MWQwYmVmNjdiODA2YmYzMGNmMDc4ZGRlNGVkZWZlMWQ_MjI3Mg&pl=skip&ct=[timestamp]",
                clickTracking: "https://g.cda.pl/g.php?pixel&vi=MWQwYmVmNjdiODA2YmYzMGNmMDc4ZGRlNGVkZWZlMWQ_MjI3Mg&pl=clickTracking&ct=[timestamp]"
            };
        }
    };
    P.hn = function(a, b) {
        var e = this.Df();
        b = Math.floor(a / b * 100);
        if (0 <= a && this.Nd === false) {
            try {
                this.N(e.start);
                this.Nd = true;
            } catch (f) {}
        }
        if (60 <= a && this.pi === false) {
            try {
                if (typeof e.video60sec !== "undefined") {
                    this.N(e.video60sec);
                    this.pi = true;
                }
            } catch (f) {}
        }
        if (25 <= b && this.rc === false) {
            try {
                this.N(e.firstQuartile);
                this.rc = true;
            } catch (f) {}
        } else if (50 <= b && this.uc === false) {
            try {
                this.N(e.midpoint);
                this.uc = true;
            } catch (f) {}
        } else if (75 <= b && this.vc == 0) {
            try {
                this.N(e.thirdQuartile);
                this.vc = true;
            } catch (f) {}
        }
    };
    P.N = function(a) {
        this.a.log(this.c, "sendPixel", a);
        if (E(a)) {
            var b = new window.Image(1, 1);
            b.onload = b.onerror = function() {
                delete b;
            };
            b.src = a;
        }
    };
    P.Wo = function() {
        return this.Da;
    };
    P.play = function() {
        if (this.Da == this.type.fc) {
            this.xb.play();
        } else if (this.Da == this.type.ef) {
            if (this.cd) {
                this.qh();
            } else {
                var a = this;
                var b = window.setInterval(function() {
                    a.a.log(a.c, "yt ready: " + a.cd);
                    if (a.cd) {
                        a.qh();
                        a.a.controls.F(false);
                        window.clearInterval(b);
                        b = null;
                    } else {
                        a.a.controls.F(true);
                        if (!y(a.Vb) && A(a.Vb.getCurrentTime) && 0 < a.Vb.getCurrentTime()) {
                            window.clearInterval(b);
                            b = null;
                        }
                    }
                }, 50);
            }
        }
    };
    P.qh = function() {
        var a = this.Df();
        if (C(a.impression)) {
            for (var b = 0; b < a.impression.length; b++) {
                this.N(a.impression[b]);
            }
        } else {
            this.N(a.impression);
        }
        this.a.view.va.D("pb-ady-player-active");
    };
    P.jn = function() {
        if (this.mi) {
            this.N(this.Df().skip);
            this.nk();
        }
    };
    P.pause = function() {
        if (this.Da == this.type.fc) {
            this.xb.pause();
        }
    };
    P.click = function() {
        if (this.Da == this.type.fc) {
            this.xb.Ec();
        }
    };
    P.Mi = function() {
        if (this.Da == this.type.fc) {
            return this.xb.pa;
        }
    };
    P.Ni = function() {
        if (this.Da == this.type.fc) {
            return this.xb.Kd;
        }
    };
    P.lj = function() {
        this.a.log(this.c, "onAdSkipped");
        if (A(window.onAdSkipped)) {
            window.onAdSkipped(this.a.id);
        }
        return this.Cc();
    };
    P.Cc = function() {
        this.a.log(this.c, "onAdComplete");
        this.kd = [];
        this.Cb = 0;
        this.Xb++;
        this.R++;
        this.a.log(this.c, "currentAd: " + this.Xb);
        this.a.log(this.c, "adsCount: " + this.pf);
        if (A(window.onAdComplete)) {
            window.onAdComplete(this.a.id, this.gb);
        }
        if (this.a.h.H() && 1 < this.Xb && this.gb) {
            return this.Fa();
        }
        if (this.Xb <= this.pf) {
            if (!z(this.b[this.R]) && !y(this.b[this.R])) {
                try {
                    switch (this.b[this.R].type) {
                        case this.type.fc:
                            this.Ve(this.b[this.R]);
                            break;
                        case this.type.Ua:
                            this.$f(this.b[this.R]);
                            break;
                        case this.type.Vh:
                            this.Bf(this.b[this.R].tag);
                            break;
                        default:
                            this.Fa();
                    }
                } catch (a) {
                    this.a.log(this.c, "onAdComplete Error", a);
                    this.Fa();
                }
            }
        } else {
            this.Fa();
        }
    };
    P.jj = function() {};
    P.Ya = function(a, b) {
        this.a.log(this.c, "onAdError", arguments);
        this.ma("Wyst\u0105pi\u0142 b\u0142\u0105d: " + a);
        if (A(window.onAdError)) {
            window.onAdError(this.a.id, this.gb);
        }
        this.yf(this.Cb, false);
        switch (a) {
            case this.error.bi:
            case this.error.df:
            case this.error.$h:
            case this.error.ke:
            case this.error.fg:
            case this.error.ci:
            case this.error.di:
            case this.error.Hk:
            case this.error.ei:
            case this.error.Zh:
            case this.error.UNKNOWN_ERROR:
            case this.error.Xh:
                this.Cb++;
                if (this.Cb < this.kd.length) {
                    return this.oh(this.kd, this.Cb);
                } else {
                    return this.Cc();
                }
            case this.error.ai:
                var e = false;
                if (!this.gb && this.a.autoplay) {
                    e = true;
                }
                return this.Fa(e);
            case this.error.Yh:
                return this.Pm(b);
            default:
                e = false;
                if (!this.gb && this.a.autoplay) {
                    e = true;
                }
                return this.Fa(e);
        }
    };
    P.Pm = function(a) {
        this.a.log(this.c, "startAdsense", a);
        this.ma("Reklama ADSENSE");
        this.ma("Pobieram: " + a.ad.tag);
        try {
            this.Da = this.type.Ua;
            this.wc = new X(this.a, this, a.ad, a.tracking, a.impression, a.clickTracking, a.viewableImpression);
            this.wc.xa();
        } catch (b) {
            this.a.log(this.c, b);
            this.Fa();
        }
    };
    P.rf = function(a, b, e, f, g) {
        this.a.log(this.c, "ajax", arguments);
        if (E(a)) {
            try {
                var l = new XMLHttpRequest;
                var k = this;
                l.onload = function() {};
                l.onreadystatechange = function() {
                    if (l.readyState == 4 && l.status == 200) {
                        if (z(l.response) || y(l.response) || !l.response) {
                            k.Fa();
                        } else {
                            g(l.response);
                        }
                    } else if (200 < l.status) {
                        k.Fa();
                    }
                };
                l.onerror = function() {
                    k.ma("Wyst\u0105pi\u0142 b\u0142\u0105d podczas pobierania!");
                    k.Fa();
                };
                l.ontimeout = function() {
                    k.ma("Przekoczono czas odpowiedzi!");
                    k.Fa();
                };
                l.withCredentials = f;
                l.open(b, a, e);
                l.timeout = 5e3;
                l.send(null);
            } catch (p) {
                this.a.log(this.c, "ajax", p);
                this.Fa();
            }
        } else {
            this.Fa();
        }
    };
    P.ma = function(a) {
        if (this.a.options.hasOwnProperty("debugAds") && this.a.options.debugAds == 1) {
            var b = document.querySelector(".console-player-container");
            if (b !== null) {
                if (/http/.test(a)) {
                    a = '<a href="' + a + '" target="_blank">' + a + "</a>";
                }
                b.insertAdjacentHTML("beforeend", '<div class="console-player-line">' + a + "</div>");
            }
        }
    };
    P.xf = function(a) {
        if (this.a.Yi() != 0) {
            var b = window.document.querySelector(".player-vast-pool");
            if (!y(b) && !z(b)) {
                var e = "<ul>";
                if (C(a)) {
                    for (var f = 0; f < a.length; f++) {
                        e += '<li class="vast-' + f + '">' + (f + 1) + ": " + a[f] + "</li>";
                    }
                } else {
                    e += '<li class="vast-0">' + a + "</li>";
                }
                b.innerHTML = e + "</ul>";
            }
        }
    };
    P.yf = function(a, b) {
        if (this.a.Yi() != 0) {
            var e = window.document.querySelector(".player-vast-pool");
            if (!y(e) && !z(e)) {
                a = window.document.querySelector(".player-vast-pool ul li.vast-" + a);
                if (!y(a)) {
                    a.style.color = b ? "green" : "red";
                }
            }
        }
    };
    var Ka = {
        fc: "vast",
        Ua: "adsense",
        Vh: "pool",
        ef: "yt"
    };
    var Z = {
        bi: "VAST_NOT_FOUND",
        $h: "VAST_LOADING_ERROR",
        df: "VAST_LOAD_TIMEOUT",
        ke: "VAST_EMPTY",
        fg: "VAST_PARSE_ERROR",
        ci: "VAST_UNSUPPORTED_VERSION",
        di: "VAST_WRAPPER_ERROR",
        Hk: "VAST_MEDIA_ERROR",
        ai: "VAST_MEDIA_LOAD_TIMEOUT",
        Zh: "VAST_AD_NOT_FOUND",
        ei: "VAST_XML_ERROR",
        Yh: "VAST_ADSENSE_FOUND",
        Ek: "SERVER_ERROR",
        UNKNOWN_ERROR: "UNKNOWN_ERROR",
        Xh: "UNKNOWN_RESPONSE"
    };
    P = X.prototype;
    P.xa = function() {
        this.a.log(this.c, "init");
        google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE);
        google.ima.settings.setNumRedirects(9);
        google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
        google.ima.settings.setPlayerVersion("5.0.0");
        if (this.pe === null) {
            this.bk(this.mb, this.a.video);
            if (this.u.wa !== this.u.state.yb) {
                this.lb.show();
            }
        }
        if (this.Lc === null) {
            this.F();
        }
        if (this.i === null) {
            this.i = {};
        }
        this.i[google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED] = T(this.Lc, google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.Xl, this);
        this.i[google.ima.AdErrorEvent.Type.AD_ERROR] = T(this.Lc, google.ima.AdErrorEvent.Type.AD_ERROR, this.Ya, this);
        this.i.Of = T(this.mb, "click", this.Of, this);
        this.i.Bd = T(this.a.controls.U, "click", this.Bd, this);
        this.i.Tc = T(this.a.controls.wb, "click", this.Tc, this);
        this.i.Oe = T(this.a.view.Aa, "click", this.Cd, this);
        this.i.Dc = T(this.a.view.hc, "click", this.Dc, this);
        this.pe.initialize();
        if (!this.Qd && this.b.autoplay) {
            this.a.controls.Z(true);
            this.Vc();
        } else if (this.a.controls.ba.W()) {
            this.a.controls.Z(true);
            this.Vc();
        }
    };
    P.restore = function() {
        window.clearTimeout(this.jd);
        this.jd = null;
        this.mb.innerHTML = "";
        this.lb.m();
        this.s = this.Lc = this.pe = this.Ic = null;
        this.qe = this.Qd = false;
    };
    P.bk = function(a, b) {
        this.ek();
        this.pe = new google.ima.AdDisplayContainer(a, b);
    };
    P.F = function() {
        this.Lc = new google.ima.AdsLoader(this.pe);
    };
    P.Vn = function(a, b, e) {
        this.s = a.getAdsManager(b, e);
    };
    P.sl = function() {
        var a = new google.ima.AdsRenderingSettings;
        a.AUTO_SCALE = true;
        a.restoreCustomPlaybackStateOnAdBreakComplete = true;
        a.uiElements = [];
        a.useStyledNonLinearAds = true;
        a.loadVideoTimeout = 4e3;
        a.autoAlign = true;
        return a;
    };
    P.finish = function() {
        this.a.log(this.c, "finish");
        if (this.s !== null) {
            this.s.destroy();
        }
        this.Qe();
        this.restore();
        this.a.v.m(this.a.v.bb);
        this.a.v.m(this.a.v.re);
        this.a.v.m(this.a.v.la);
        this.a.v.m(this.a.v.hc);
        this.a.v.m(this.a.v.Aa);
        if (!y(this.Ha) && B(this.Ha)) {
            if (this.Ha.type == "vast") {
                if (this.qe) {
                    this.u.Xb++;
                }
                return this.u.Ve(this.Ha);
            }
            if (this.Ha.type == "pool") {
                if (this.qe) {
                    this.u.Xb++;
                }
                return this.u.Bf(this.Ha.tag, true);
            }
        }
        return this.u.Cc();
    };
    P.rg = function() {
        this.a.log(this.c, "add events");
        for (var a in this.ca) {
            this.i[this.ca[a]] = T(this.s, this.ca[a], this.jj, this);
        }
        this.i[google.ima.AdErrorEvent.Type.AD_ERROR] = T(this.s, google.ima.AdErrorEvent.Type.AD_ERROR, this.Ya, this);
        for (a in this.Cg) {
            this.i[this.Cg[a]] = T(this.a.view.T, this.Cg[a], this.Ne, this);
        }
        this.i.Ne = T(window, "resize", this.Ne, this);
    };
    P.Qe = function() {
        this.a.log(this.c, "remove events");
        for (var a in this.ca) {
            if (this.i[this.ca[a]] != null) {
                U(this.s, this.ca[a], this.i[this.ca[a]]);
            }
        }
        if (this.i[google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED] != null) {
            U(this.Lc, google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.i[google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED]);
        }
        if (this.i[google.ima.AdErrorEvent.Type.AD_ERROR] != null) {
            U(this.Lc, google.ima.AdErrorEvent.Type.AD_ERROR, this.i[google.ima.AdErrorEvent.Type.AD_ERROR]);
        }
        if (this.i.Of != null) {
            U(this.mb, "click", this.i.Of);
        }
        if (this.i.Bd != null) {
            U(this.a.controls.U, "click", this.i.Bd);
        }
        if (this.i.Tc != null) {
            U(this.a.controls.wb, "click", this.i.Tc);
        }
        if (this.i.Oe != null) {
            U(this.a.view.Aa, "click", this.i.Oe);
        }
        if (!z(this.i.Dc)) {
            U(this.a.view.hc, "click", this.i.Dc);
        }
        if (this.i.Ne != null) {
            U(window, "resize", this.Ne);
        }
        this.i = null;
    };
    P.ek = function() {
        this.a.log(this.c, "set locale to pl");
        google.ima.settings.setLocale("pl");
    };
    P.Mn = function(a) {
        this.Kc = a;
        this.a.log(this.c, "set width to " + a + "px");
    };
    P.Ln = function(a) {
        this.Jc = a;
        this.a.log(this.c, "set height to " + a + "px");
    };
    P.Vc = function(a) {
        this.a.log(this.c, "requestAd");
        var b = this;
        this.jd = window.setTimeout(function() {
            b.ij(b.error.df);
        }, 1e4);
        if (this.u.wa !== this.u.state.yb || this.a.h.H()) {
            this.a.controls.ba.show();
        }
        this.Qd = true;
        var e = new google.ima.AdsRequest;
        e.adTagUrl = this.b.tag;
        e.linearAdSlotWidth = this.Kc;
        e.linearAdSlotHeight = this.Jc;
        e.nonLinearAdSlotWidth = 10;
        e.nonLinearAdSlotHeight = 10;
        e.forceNonLinearFullSlot = false;
        e.setAdWillAutoPlay(this.b.autoplay);
        if (typeof a !== "undefined" && a) {
            e.setAdWillPlayMuted(true);
        }
        this.a.log(this.c, e);
        this.Lc.requestAds(e);
    };
    P.Xl = function(a) {
        this.a.log(this.c, "onAdsManagerLoaded");
        this.Vn(a, this.a.video, this.sl);
        this.rg();
        if (this.a.fullScreen.Ca()) {
            this.Kc = window.screen.width;
            this.Jc = window.screen.height;
        }
        try {
            this.s.init(this.Kc, this.Jc, google.ima.ViewMode.NORMAL);
        } catch (b) {
            this.a.log(this.c, b);
            this.finish();
        }
    };
    P.Id = function() {
        this.a.log(this.c, "startAd");
        if (this.a.ic() === false) {
            this.a.controls.Xn();
        } else {
            var a = this.a.ic();
            this.a.controls.J(a);
        }
        try {
            this.s.start();
        } catch (b) {
            this.a.log(this.c, b);
            this.finish();
        }
    };
    P.jj = function(a) {
        this.a.log(this.c, "AdEvent", a.type);
        try {
            if (a.type == "allAdsCompleted" && !this.qe) {
                return this.ij(this.error.ke);
            }
        } catch (b) {}
        this.Ic = a.getAd();
        switch (a.type) {
            case google.ima.AdEvent.Type.LOADED:
                this.Vl();
                break;
            case google.ima.AdEvent.Type.STARTED:
                this.Wl();
                break;
            case google.ima.AdEvent.Type.COMPLETE:
                this.Cc();
                break;
            case google.ima.AdEvent.Type.CLICK:
                try {
                    this.ia("clicktracking");
                } catch (b) {}
                this.hj();
                break;
            case google.ima.AdEvent.Type.PAUSED:
                if (this.a.Na && this.a.disabled) {
                    try {
                        this.s.resume();
                    } catch (b) {}
                } else {
                    this.a.controls.qa(true);
                    this.lf = true;
                }
                break;
            case google.ima.AdEvent.Type.RESUMED:
                if (!this.a.Na || !this.a.disabled) {
                    this.a.controls.Z(true);
                    this.lf = false;
                }
                break;
            case google.ima.AdEvent.Type.SKIPPED:
            case google.ima.AdEvent.Type.USER_CLOSE:
                this.Qj();
        }
    };
    P.Vl = function() {
        this.a.log(this.c, "onAdLoaded");
        try {
            if (this.u.a.ta()) {
                window.parent.postMessage("player-ad-playing", "*");
            }
        } catch (a) {}
        window.clearTimeout(this.jd);
        this.jd = null;
        this.Ib = this.Ic.getDuration();
        this.a.controls.Eb(0);
        this.a.controls.Ra(0);
        this.a.log(this.c, "adDuration: " + this.Ib);
        if (this.u.wa === this.u.state.yb) {
            if (!this.a.video.paused) {
                this.a.pause();
            }
        }
        if (this.b.autoplay && this.a.h.H()) {
            this.s.setVolume(0);
            this.a.video.muted = true;
            this.a.Ab = true;
            this.a.J(0, true);
            this.a.controls.J(0, true);
            try {
                this.a.view.wd.style.display = "none";
            } catch (a) {}
        }
    };
    P.Wl = function() {
        this.a.log(this.c, "onAdStarted");
        this.u.ma("Startuje reklam\u0119");
        this.a.K = true;
        try {
            if (this.u.a.ta()) {
                window.parent.postMessage("player-ad-playing", "*");
            }
        } catch (e) {}
        if (this.u.wa === this.u.state.yb) {
            this.u.xa(true);
            this.a.controls.ba.show();
            this.lb.show();
        }
        if (this.De && !this.a.ta()) {
            this.a.v.hc.show();
        }
        window.clearTimeout(this.jd);
        this.jd = null;
        this.qe = this.u.gb = true;
        if (!this.a.v.va.I("pb-run-ad")) {
            this.a.v.va.w("pb-run-ad");
        }
        try {
            this.ia("impression");
        } catch (e) {}
        try {
            if (this.a.Ld) {
                var a = this;
                window.setTimeout(function() {
                    if (a.a.Ld) {
                        a.ia("viewableImpression");
                    }
                }, 2e3);
            }
        } catch (e) {}
        if (this.a.ac) {
            try {
                this.N("https://g.cda.pl/g.php?pixel&vi=MTcwYjVmZjFjMTA0MzU5NDExMjcwNDQ3MWZjZDc4NzQ_Nzc4&pl=impression&ct=[timestamp]");
            } catch (e) {}
        }
        try {
            if (this.b.hasOwnProperty("counter") && this.b.counter && this.b.hasOwnProperty("key") && this.b.hasOwnProperty("displayAs")) {
                var b = "";
                if (!z(this.Ic.g) && !y(this.Ic.g)) {
                    b = this.Ic.g.clickThroughUrl != "" ? this.Ic.g.clickThroughUrl : this.Ic.g.adQueryId + "/" + (new Date).getTime();
                }
                if (E(b)) {
                    b = b.trim();
                }
                if (b != "" && b != null && typeof b != "undefined") {
                    this.Pd(b, this.b.key, this.b.displayAs);
                }
            }
        } catch (e) {
            this.a.log(this.c, e);
        }
        try {
            this.ia("start");
            this.ia("creativeView");
        } catch (e) {}
        if (0 < this.Ib) {
            this.a.controls.Ra(this.Ib);
        }
        this.a.controls.Z();
        this.a.controls.F(false);
        this.lb.show();
        this.Xb++;
        a = this;
        this.Mg = setInterval(function() {
            if (a.s != null && typeof a.s.getRemainingTime !== "undefined") {
                var b = a.s.getRemainingTime();
                if (!isNaN(b) && 0 < b) {
                    if (!a.fk && b != a.Ib) {
                        a.Ib = b;
                        a.a.controls.Ra(a.Ib);
                        a.fk = true;
                    }
                } else {
                    b = 0;
                }
            }
            b = a.Ib - b;
            var f = Math.floor(b / a.Ib * 100);
            if (25 <= f && a.rc === false) {
                try {
                    a.ia("firstQuartile");
                    a.rc = true;
                } catch (g) {}
            } else if (50 <= f && a.uc === false) {
                try {
                    a.ia("midpoint");
                    a.uc = true;
                } catch (g) {}
            } else if (75 <= f && a.vc == 0) {
                try {
                    a.ia("thirdQuartile");
                    a.vc = true;
                } catch (g) {}
            }
            if (!isNaN(b) && 0 <= b) {
                f = "Reklama: ";
                if (a.a.h.H()) {
                    f = "";
                }
                a.a.controls.Eb(b);
                a.bb.innerHTML = f + "" + a.u.Xb + " z " + a.u.gd;
                a.bb.show();
                f = 100 / a.Ib * b;
                a.a.controls.ob.Za(f + "%");
                if (0 < a.X && a.S === true && !a.Zc().W() && a.Gd === false) {
                    a.Hd = false;
                    a.a.view.Aa.show();
                    a.a.view.Aa.Ba('<span class="pb-skip-body">Pomi\u0144 reklam\u0119 za ' + a.X + "</span>");
                    a.a.view.Aa.style.opacity = "0.5";
                    b = Math.ceil(a.X - b);
                    if (0 >= b) {
                        a.a.view.Aa.Ba('<span class="pb-skip-body">Pomi\u0144 reklam\u0119</span>');
                        a.a.view.Aa.style.opacity = "1";
                        a.Hd = true;
                    } else {
                        a.a.view.Aa.Ba('<span class="pb-skip-body">Pomi\u0144 reklam\u0119 za ' + b + "</span>");
                    }
                }
            }
        }, 100);
    };
    P.Cc = function() {
        this.a.log(this.c, "onAdComplete");
        this.u.ma("Koniec reklamy");
        this.u.hd++;
        this.a.controls.currentTime.innerHTML = this.a.controls.mc(this.Ib);
        this.a.controls.ob.Za("100%");
        this.bb.m();
        clearInterval(this.Mg);
        try {
            this.ia("complete");
        } catch (a) {}
        return this.finish();
    };
    P.hj = function() {
        this.a.log(this.c, "onAdClick");
        if (this.a.Na) {
            return false;
        }
    };
    P.Ya = function(a) {
        var b = a.getError();
        b.getInnerError();
        var e = b.getErrorCode();
        this.a.log(this.c, "AdError", a.getError().toString());
        this.a.log(this.c, "AdError", "ErrorCode: " + b.getErrorCode());
        if (-1 < a.getError().toString().indexOf("AdError 1205") && this.gi === false) {
            this.gi = true;
            this.Vc(true);
        } else {
            switch (e) {
                case google.ima.AdError.ErrorCode.VAST_LOAD_TIMEOUT:
                    a = this.error.df;
                    break;
                case google.ima.AdError.ErrorCode.VAST_EMPTY_RESPONSE:
                    a = this.error.ke;
                    break;
                case google.ima.AdError.ErrorCode.VAST_SCHEMA_VALIDATION_ERROR:
                    a = this.error.fg;
                    break;
                case google.ima.AdError.ErrorCode.VAST_UNSUPPORTED_VERSION:
                    a = this.error.ci;
                    break;
                case google.ima.AdError.ErrorCode.VAST_WRAPPER_ERROR:
                    a = this.error.di;
                    break;
                case google.ima.AdError.ErrorCode.UNKNOWN_AD_RESPONSE:
                    a = this.error.Xh;
                    break;
                default:
                    a = this.error.UNKNOWN_ERROR;
            }
            if (this.s !== null) {
                this.s.destroy();
            }
            this.Qe();
            this.restore();
            return this.u.Ya(a);
        }
    };
    P.ij = function(a) {
        if (this.s !== null) {
            this.s.destroy();
        }
        this.Qe();
        this.restore();
        return this.u.Ya(a);
    };
    P.ee = function() {
        if (this.s !== null) {
            this.a.controls.Z(true);
        }
    };
    P.kc = function() {
        if (this.s !== null) {
            if (!this.a.Na || !this.a.disabled) {
                this.a.controls.qa(true);
                this.s.pause();
            }
            this.a.log(this.c, "pause ad");
        }
    };
    P.Sf = function() {
        if (this.s !== null) {
            if (!this.a.Na || !this.a.disabled) {
                this.a.controls.Z(true);
                this.a.controls.ba.m();
                this.s.resume();
            }
            this.a.log(this.c, "resume ad");
        }
    };
    P.Qj = function() {
        this.a.log(this.c, "onSkipped");
        this.u.ma("Reklama przewini\u0119ta");
        this.u.hd++;
        this.a.controls.currentTime.innerHTML = this.a.controls.mc(this.Ib);
        this.a.controls.ob.Za("100%");
        this.bb.m();
        clearInterval(this.Mg);
        this.finish();
    };
    P.Ne = function() {
        var a = this;
        window.setTimeout(function() {
            a.Kc = a.a.video.Zb();
            a.Jc = a.a.video.Qc();
            if (a.a.controls.Ca) {
                a.Kc = window.screen.width;
                a.Jc = window.screen.height;
            }
            a.a.log(a.c, "resize", "new width: " + a.Kc);
            a.a.log(a.c, "resize", "new height: " + a.Jc);
            if (a.s !== null) {
                a.s.resize(a.Kc, a.Jc, google.ima.ViewMode.NORMAL);
            }
        }, 100);
    };
    P.Of = function() {
        this.u.nf = true;
        if (this.b.autoplay === true || this.Qd) {
            return this.hj();
        }
        this.a.controls.Z(true);
        this.Vc();
    };
    P.Bd = function() {
        this.u.nf = true;
        if (this.b.autoplay === true || this.Qd) {
            if (this.lf === false) {
                this.kc();
            } else {
                this.Sf();
            }
        } else {
            this.a.controls.Z(true);
            this.Vc();
        }
    };
    P.Tc = function() {
        this.u.nf = true;
        if (this.b.autoplay === true || this.Qd) {
            if (!this.a.disabled) {
                if (this.lf === false) {
                    this.kc();
                } else {
                    this.Sf();
                }
            }
        } else {
            this.a.controls.Z(true);
            this.Vc();
        }
    };
    P.J = function(a) {
        this.a.log(this.c, "setVolume", a);
        if (this.s !== null) {
            a = Number(a);
            if (!isNaN(a) && 0 <= a) {
                if (a === 0) {
                    this.s.setVolume(0);
                } else {
                    this.s.setVolume((a / 100).toFixed(2));
                }
            }
        }
    };
    P.ia = function(a) {
        this.a.log(this.c, "tracking", a);
        if (a == "impression") {
            for (var b = 0; b < this.Nb.length; b++) {
                this.N(this.Nb[b]);
            }
        } else if (a == "viewableImpression") {
            for (b = 0; b < this.oc.length; b++) {
                this.N(this.oc[b]);
            }
        } else if (a == "clicktracking") {
            for (b = 0; b < this.Oc.length; b++) {
                this.N(this.Oc[b]);
            }
        } else {
            for (var e in this.eb) {
                if (a == e) {
                    for (b = 0; b < this.eb[a].length; b++) {
                        this.N(this.eb[a][b]);
                    }
                }
            }
        }
    };
    P.N = function(a) {
        this.a.log(this.c, "sendPixel", a);
        if (a) {
            var b = new window.Image(1, 1);
            b.onload = b.onerror = function() {
                delete b;
            };
            b.src = a;
        }
    };
    P.Pd = function(a, b, e) {
        this.a.log(this.c, "adHit", arguments);
        if (this.a.V !== null && this.Md === false) {
            var f = this;
            try {
                window[this.a.V.client].zliczReklame(a, b, e, {
                    success: function(a) {
                        f.Md = true;
                        f.a.log(f.c, "adHit", "response: " + a);
                    },
                    error: function(a) {
                        f.a.log(f.c, "adHit", "erorr: " + a);
                    }
                });
            } catch (g) {
                f.a.log(f.c, "adHit", "erorr: " + g);
            }
        }
    };
    P.Cd = function() {
        if (this.Hd) {
            try {
                this.ia("skip");
            } catch (a) {
                this.a.log(this.c, a);
            }
            clearTimeout(this.Fb);
            this.Fb = null;
            window.clearInterval(this.qb);
            this.qb = null;
            this.Gd = false;
            this.Zc().m();
            this.a.view.Aa.m();
            this.gf = true;
            return this.Qj();
        }
    };
    P.Zc = function() {
        return this.a.view.T.querySelector(".pb-ad-close-body");
    };
    P.Dc = function() {
        return window.open("https://premium.cda.pl/rejestracja?cd2_sid=1&cd2_n=baner-wideoadpremium&cd2_hash=40fc7a5638fc18189a3a00d9892e30fde92da781", "_blank");
    };
    P = W.prototype = {};
    P.Vc = function(a, b) {
        this.a.log(this.c, "requestAd");
        try {
            this.rf(this.b.tag, "GET", true, true, "xml", function(e) {
                if (!y(e) && e) {
                    a(e);
                } else {
                    b();
                }
            }.bind(this));
        } catch (e) {
            this.a.log(this.c, "requestAd error", e);
        }
    };
    P.Go = function() {
        return this.u.sp();
    };
    P.Al = function(a) {
        this.a.log(this.c, "initAd");
        this.Tj(a);
    };
    P.finish = function() {
        this.a.log(this.c, "finish");
        this.u.gb = false;
        this.uh();
        window.clearTimeout(this.Fb);
        this.Fb = null;
        window.clearInterval(this.qb);
        this.qb = null;
        window.clearTimeout(this.ya);
        this.ya = null;
        this.a.v.m(this.a.v.bb);
        this.a.v.m(this.a.v.re);
        this.a.v.m(this.a.v.la);
        this.a.v.m(this.a.v.hc);
        this.a.v.m(this.a.v.Aa);
        if (!this.a.h.H()) {
            this.video = null;
        }
        return this.u.Fa();
    };
    P.Xf = function(a) {
        this.log(a);
        if (a && -1 < a.indexOf(".mp4")) {
            if (this.video.canPlayType("video/mp4")) {
                this.video.src = a;
                this.video.setAttribute("src", a);
            } else {
                this.finish();
            }
        } else {
            this.finish();
        }
    };
    P.Bh = function(a) {
        if (!y(this.video)) {
            this.video.poster = a;
        }
    };
    P.l = function() {
        return this.video.currentTime || 0;
    };
    P.Eb = function(a) {
        if (G(a) || H(a)) {
            this.currentTime = a;
            this.video.currentTime = a;
        }
    };
    P.M = function() {
        return this.video.duration || 0;
    };
    P.play = function() {
        this.a.log(this.c, "play");
        if (!y(this.video)) {
            if (0 < this.l()) {
                this.resume();
            } else {
                if (this.u.wa === this.u.state.yb) {
                    this.u.xa(true);
                }
                this.a.controls.F(true);
                if (!this.pa && !this.$a) {
                    this.video.load();
                }
                this.Qb();
            }
        }
    };
    P.ph = function(a) {
        if (a !== "undefined") {
            a = a.toString();
            if (-1 < a.indexOf("play() failed because the user didn't interact with the document first")) {
                this.a.log(this.c, "video promise - play() failed because the user didn't interact with the document first");
            } else {
                this.a.log(this.c, a);
            }
        }
        if (A(window.videoAdPlayError)) {
            window.videoAdPlayError(this.a.id);
        }
        if (!(0 < this.l()) || !!this.video.paused || !!this.video.ended || !(2 < this.video.readyState)) {
            this.a.log(this.c, "video promise error");
            this.a.controls.qa(true);
            this.a.controls.F(false);
            if (this.u.wa == this.u.state.ec && 2 >= this.kb) {
                this.se();
            }
        }
    };
    P.Qb = function() {
        var a = this.video.play();
        var b = this;
        if (!z(a) && !y(a)) {
            a.then(function() {
                if (A(window.videoAdPlayPromise)) {
                    window.videoAdPlayPromise(b.a.id);
                }
                b.Re();
                if (0 < b.kb) {
                    b.kb = 0;
                }
            }).catch(this.a.C.G(this.ph, this));
        }
        this.a.log(this.c, "video.play()");
    };
    P.pause = function() {
        this.a.log(this.c, "pause");
        if (!y(this.video)) {
            if (this.video.paused) {
                this.resume();
            } else {
                this.video.pause();
            }
        }
    };
    P.resume = function() {
        this.a.log(this.c, "resume");
        if (!y(this.video)) {
            if (this.video.paused) {
                this.video.play();
            }
        }
    };
    P.Cl = function() {
        if (!this.ig) {
            for (var a in this.Ja) {
                if (this.Ja[a] != "") {
                    this.i[this.Ja[a]] = T(this.video, this.Ja[a], this.lc(this.Ja[a]), this);
                }
            }
            this.i.Oe = T(this.a.view.Aa, "click", this.Cd, this);
            this.i.Cd = T(this.Zc(), "click", this.Cd, this);
            this.i.Dc = T(this.a.view.hc, "click", this.Dc, this);
            this.ig = true;
        }
    };
    P.uh = function() {
        for (var a in this.Ja) {
            if (this.Ja[a] != "" && !z(this.i[this.Ja[a]])) {
                if (this.Ja[a] == "click") {
                    U(this.a.view.nc, this.Ja[a], this.i[this.Ja[a]]);
                } else {
                    U(this.video, this.Ja[a], this.i[this.Ja[a]]);
                }
                this.i[this.Ja[a]] = null;
            }
        }
        if (!z(this.i.Cd)) {
            U(this.Zc(), "click", this.i.Cd);
        }
        if (!z(this.i.Oe)) {
            U(this.a.view.Aa, "click", this.i.Oe);
        }
        if (!z(this.i.Dc)) {
            U(this.a.view.hc, "click", this.i.Dc);
        }
        try {
            if (!z(this.i.Ke)) {
                U(window.document.querySelector("#player_branding_top"), "click", this.i.Ke);
            }
            if (!z(this.i.Pf)) {
                U(window.document.querySelector("#player_branding_bottom"), "click", this.i.Pf);
            }
        } catch (b) {}
    };
    P.lc = function(a) {
        var b = null;
        switch (a) {
            case "click":
                b = this.Ec;
                break;
            case "timeupdate":
                b = this.Uc;
                break;
            case "error":
                b = this.Me;
                break;
            case "abort":
                b = this.ah;
                break;
            case "ended":
                b = this.Ad;
                break;
            case "pause":
                b = this.kc;
                break;
            case "play":
                b = this.ee;
                break;
            case "playing":
                b = this.jh;
                break;
            case "loadstart":
                b = this.hh;
                break;
            case "load":
                b = this.eh;
                break;
            case "loadeddata":
                b = this.Hj;
                break;
            case "loadedmetadata":
                b = this.lm;
                break;
            case "progress":
                b = this.de;
                break;
            case "waiting":
                b = this.Pe;
                break;
            case "canplaythrough":
                b = this.Le;
                break;
            case "canplay":
                b = this.dh;
                break;
            case "volumechange":
                b = this.nh;
        }
        return b;
    };
    P.Do = function() {
        return this.a.view.bb;
    };
    P.Zc = function() {
        return this.a.view.T.querySelector(".pb-ad-close-body");
    };
    P.Tj = function(a) {
        if (a) {
            if ((a = a.getElementsByTagName("Ad")) && 0 < a.length) {
                for (var b = 0; b <= a.length; b++) {
                    var e = a[b];
                    if (e) {
                        if (e.querySelector("Wrapper") == null && e.querySelectorAll("MediaFiles").length == 0) {
                            this.Ya(this.error.ke);
                            break;
                        }
                        var f = e.querySelectorAll("Impression");
                        if (f !== null && 0 < f.length) {
                            this.mn(f);
                        }
                        f = e.querySelectorAll("ViewableImpression");
                        if (f !== null && 0 < f.length) {
                            this.rn(f);
                        }
                        f = e.querySelectorAll("TrackingEvents");
                        if (f !== null && 0 < f.length) {
                            this.qn(f);
                        }
                        f = e.querySelectorAll("ClickThrough");
                        if (f !== null && 0 < f.length) {
                            this.kn(f);
                        }
                        f = e.querySelectorAll("ClickTracking");
                        if (f !== null && 0 < f.length) {
                            this.ln(f);
                        }
                        f = e.querySelector("Wrapper");
                        if (f !== null) {
                            this.sn(f);
                        }
                        var g = e.querySelectorAll("Script");
                        if (g !== null && 0 < g.length) {
                            this.pn(g);
                        }
                        e = e.querySelectorAll("MediaFiles");
                        if (e !== null && 0 < e.length && (this.nn(e), this.He !== "")) {
                            this.u.gb = true;
                            if (this.a.h.H()) {
                                this.video = this.a.video;
                                if (this.u.wa != this.u.state.ec) {
                                    this.a.Bh("//static.cda.pl/v001/img/mobile/poster16x9.png");
                                }
                            } else if (this.video === null) {
                                this.video = window.document.createElement("video");
                                if (this.a.nb()) {
                                    this.video.className = "pb-block-video-player";
                                } else {
                                    this.video.className = "pb-ad-video-player";
                                }
                                this.video.poster = this.un;
                                this.mb.appendChild(this.video);
                                this.v.show(this.lb);
                                if (this.a.Na) {
                                    this.a.controls.J(0);
                                    this.video.volume = 0;
                                } else if (this.a.ac) {
                                    this.a.controls.J(0);
                                    this.video.volume = 0;
                                } else if (this.a.nb()) {
                                    this.video.volume = .3;
                                } else if (this.a.ic() === false) {
                                    if (this.a.qd("cda.player.volume")) {
                                        this.a.controls.J(this.a.Yb("cda.player.volume"));
                                    } else if (this.u.wa === this.u.state.yb) {
                                        this.video.volume = .3;
                                    } else {
                                        this.a.controls.J(this.a.controls.$p);
                                    }
                                } else {
                                    a = this.a.ic();
                                    this.a.controls.J(a);
                                }
                            }
                            this.a.controls.Wc(0);
                            this.Cl();
                            if (this.a.h.H()) {
                                this.a.Xf(this.He);
                            } else {
                                this.Xf(this.He);
                                if (!this.a.video.paused) {
                                    this.a.pause();
                                }
                            }
                            if (this.autoplay || this.a.controls.ba.W()) {
                                if (this.video) {
                                    this.video.setAttribute("webkit-playsinline", "true");
                                    this.video.setAttribute("playsinline", "true");
                                }
                                this.a.controls.Z(true);
                                this.play();
                            }
                            break;
                        }
                        if (f == null && this.He == "") {
                            this.Ya(this.error.ke);
                            break;
                        }
                    }
                }
            } else {
                this.Ya(this.error.Zh);
            }
        }
    };
    P.sn = function(a) {
        try {
            if (a !== null) {
                var b = a.querySelector("VASTAdTagURL") || a.querySelector("VASTAdTagURI");
                if (typeof b === "object" && b.hasChildNodes()) {
                    var e = b.querySelector("URL") || b.querySelector("URI");
                    a = null;
                    a = e !== null && e.hasChildNodes() ? e.childNodes : b.childNodes;
                    for (b = 0; b < a.length; b++) {
                        if (a[b].nodeValue.trim() !== "") {
                            var f = a[b].nodeValue.trim();
                            if (f == this.b.tag) {
                                break;
                            }
                            this.u.ma("Pobieram wrapper: " + f);
                            try {
                                if (-1 < f.indexOf("${GDPR}")) {
                                    f = f.replace("${GDPR}", this.u.dd);
                                }
                                if (-1 < f.indexOf("${GDPR_CONSENT_755}")) {
                                    f = f.replace("${GDPR_CONSENT_755}", this.u.tc);
                                }
                                if (-1 < f.indexOf("${GDPR_CONSENT}")) {
                                    f = f.replace("${GDPR_CONSENT}", this.u.tc);
                                }
                                if (f.indexOf("gdpr_consent=") == -1) {
                                    var g = -1 < f.indexOf("?") ? "&" : "?";
                                    f += g + "gdpr_consent=" + this.u.tc;
                                }
                                if (f.indexOf("gdpr=") == -1) {
                                    g = -1 < f.indexOf("?") ? "&" : "?";
                                    f += g + "gdpr=" + this.u.dd;
                                }
                            } catch (l) {}
                            if (this.u.Zd(f) && this.b.tag.indexOf("polsat") == -1) {
                                this.u.ma("Wrapper ADSENSE");
                                try {
                                    if (-1 < f.indexOf("[referrer_url]")) {
                                        f = f.replace("[referrer_url]", encodeURIComponent(window.location.href));
                                    }
                                } catch (l) {}
                                g = [];
                                g.ad = {
                                    autoplay: this.b.autoplay,
                                    counter: this.b.counter,
                                    displayAs: this.b.displayAs,
                                    key: this.b.key,
                                    key2: typeof this.b.key2 != "undefined" ? this.b.key2 : "",
                                    skip: this.b.skip,
                                    tag: f,
                                    time: this.b.time,
                                    type: this.u.type.Ua
                                };
                                g.tracking = this.eb;
                                g.impression = this.Nb;
                                g.viewableImpression = this.oc;
                                g.clickTracking = this.Oc;
                                this.Ya(this.error.Yh, g);
                                break;
                            }
                            try {
                                this.rf(f, "GET", true, true, "xml", function(a) {
                                    if (a != null && a) {
                                        this.Tj(a);
                                    } else {
                                        this.finish();
                                    }
                                }.bind(this));
                            } catch (l) {
                                this.a.log(this.c, "getWrapper", l);
                            }
                        }
                    }
                }
            }
        } catch (l) {
            this.a.log(this.c, "parseWrapper", l);
        }
    };
    P.qn = function(a) {
        try {
            for (var b = 0; b < a.length; b++) {
                var e = a[b].querySelectorAll("Tracking");
                if (e !== null && 0 < e.length) {
                    for (var f = 0; f < e.length; f++) {
                        if (e[f].getAttribute("event") !== "undefined") {
                            for (var g in this.eb) {
                                if (g == e[f].getAttribute("event")) {
                                    var l = e[f].querySelector("URL") || e[f].querySelector("URI");
                                    var k = null;
                                    if (l !== null && l.hasChildNodes()) {
                                        k = l.childNodes;
                                    } else if (e[f] !== null && e[f].hasChildNodes()) {
                                        k = e[f].childNodes;
                                    }
                                    if (k !== null) {
                                        for (var p = 0; p < k.length; p++) {
                                            if (k[p].nodeValue.trim() !== "") {
                                                this.eb[g].push(k[p].nodeValue.trim());
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (u) {
            this.a.log(this.c, "parseTrackingEvents", u);
        }
    };
    P.mn = function(a) {
        try {
            for (var b = 0; b < a.length; b++) {
                var e = a[b].querySelector("URL") || a[b].querySelector("URI");
                var f = null;
                if (e !== null && e.hasChildNodes()) {
                    f = e.childNodes;
                } else if (a[b] !== null && a[b].hasChildNodes()) {
                    f = a[b].childNodes;
                }
                if (f !== null) {
                    for (var g = 0; g < f.length; g++) {
                        if (f[g].nodeValue.trim() !== "") {
                            this.Nb.push(f[g].nodeValue.trim());
                        }
                    }
                }
            }
        } catch (l) {
            this.a.log(this.c, "parseImpression", l);
        }
    };
    P.rn = function(a) {
        try {
            if (a !== null && 0 < a.length) {
                for (var b = 0; b < a.length; b++) {
                    if (a[b].hasChildNodes()) {
                        var e = a[b].childNodes;
                        for (var f = 0; f < e.length; f++) {
                            if (e[f].nodeName === "Viewable" && e[f].hasChildNodes()) {
                                var g = e[f].childNodes;
                                for (var l = 0; l < g.length; l++) {
                                    if (g[l].nodeValue.trim() !== "") {
                                        this.oc.push(g[l].nodeValue.trim());
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (k) {
            this.a.log(this.c, "parseViewableImpression", k);
        }
    };
    P.kn = function(a) {
        try {
            for (var b = 0; b < a.length; b++) {
                if (a[b].hasChildNodes()) {
                    var e = a[b].childNodes;
                    for (var f = 0; f < e.length; f++) {
                        if (e[f].nodeValue.trim() !== "") {
                            this.we = e[f].nodeValue.trim();
                            return;
                        }
                    }
                }
            }
        } catch (g) {
            this.a.log(this.c, "parseClickThrough", g);
        }
    };
    P.ln = function(a) {
        try {
            for (var b = 0; b < a.length; b++) {
                if (a[b].hasChildNodes()) {
                    var e = a[b].childNodes;
                    for (var f = 0; f < e.length; f++) {
                        if (e[f].nodeValue.trim() !== "") {
                            this.Oc.push(e[f].nodeValue.trim());
                        }
                    }
                }
            }
        } catch (g) {
            this.a.log(this.c, "parseClickTracking", g);
        }
    };
    P.nn = function(a) {
        try {
            var b = null;
            for (var e = 0; e < a.length; e++) {
                var f = a[e].getElementsByTagName("MediaFile");
                if (f !== "undefined") {
                    if (1 < f.length) {
                        for (var g = 0; g < f.length; g++) {
                            if (f[g].getAttribute("type") !== "undefined" && (f[g].getAttribute("type") == "video/mp4" || f[g].getAttribute("type") == "mp4")) {
                                b = f[g];
                                break;
                            }
                        }
                    } else if (f.length == 1) {
                        b = f[0];
                    }
                }
            }
            if (b !== null && b.hasChildNodes) {
                var l = b.childNodes;
                for (a = 0; a < l.length; a++) {
                    if (l[a].nodeValue.trim() !== "" && l[a].nodeValue.trim().indexOf("mp4")) {
                        this.He = l[a].nodeValue.trim();
                    }
                }
            }
        } catch (k) {
            this.a.log(this.c, "parseMediaFiles", k);
        }
    };
    P.pn = function(a) {
        try {
            for (var b = 0; b < a.length; b++) {
                if (a[b].hasChildNodes) {
                    var e = a[b].childNodes;
                    for (var f = 0; f < e.length; f++) {
                        if (e[f].nodeValue != "") {
                            eval(e[f].nodeValue);
                        }
                    }
                }
            }
        } catch (g) {
            this.a.log(this.c, "parseScripts", g);
        }
    };
    P.rf = function(a, b, e, f, g, l) {
        this.a.log(this.c, "ajax", arguments);
        try {
            var k = new XMLHttpRequest;
            var p = this;
            k.onload = function() {};
            k.onreadystatechange = function() {
                if (k.readyState == 4 && k.status == 200) {
                    if (k.responseXML !== "undefined" && k.responseXML) {
                        l(k.responseXML);
                    } else {
                        p.Ya(p.error.fg);
                    }
                } else if (200 < k.status) {
                    if (400 < k.status && 500 > k.status) {
                        p.Ya(p.error.bi);
                    } else {
                        p.Ya(p.error.Ek);
                    }
                }
            };
            k.onerror = function() {
                p.Ya(p.error.$h);
            };
            k.ontimeout = function() {
                p.Ya(p.error.df);
            };
            k.withCredentials = f;
            k.open(b, a, e);
            k.timeout = 5e3;
            k.send(null);
        } catch (u) {
            this.a.log(this.c, "ajax", u);
        }
    };
    P.ia = function(a) {
        this.a.log(this.c, "tracking", a);
        if (a == "impression") {
            for (var b = 0; b < this.Nb.length; b++) {
                this.N(this.Nb[b]);
            }
        } else if (a == "viewableImpression") {
            for (b = 0; b < this.oc.length; b++) {
                this.N(this.oc[b]);
            }
        } else if (a == "clicktracking") {
            for (b = 0; b < this.Oc.length; b++) {
                this.N(this.Oc[b]);
            }
        } else {
            for (var e in this.eb) {
                if (a == e) {
                    for (b = 0; b < this.eb[a].length; b++) {
                        this.N(this.eb[a][b]);
                    }
                }
            }
        }
    };
    P.N = function(a) {
        try {
            if (-1 < a.indexOf("[timestamp]")) {
                a = a.replace("[timestamp]", parseInt((new Date).getTime() / 1e3));
            }
            if (-1 < a.indexOf("[TIMESTAMP]")) {
                a = a.replace("[TIMESTAMP]", parseInt((new Date).getTime() / 1e3));
            }
        } catch (e) {}
        try {
            if (-1 < a.indexOf("g.cda.pl") && 33 < this.a.zc()) {
                a += "&uid=" + this.a.zc();
            }
        } catch (e) {}
        this.a.log(this.c, "sendPixel", a);
        if (E(a)) {
            var b = new window.Image(1, 1);
            b.onload = b.onerror = function() {
                delete b;
            };
            b.src = a;
        }
    };
    P.mc = function(a) {
        a = Number(a);
        var b = Math.floor(a / 3600);
        var e = Math.floor(a % 3600 / 60);
        a = Math.floor(a % 3600 % 60);
        return (0 < b ? b + ":" + (10 > e ? "0" : "") : "") + e + ":" + (10 > a ? "0" : "") + a;
    };
    P.setTime = function(a) {
        if (0 < this.M()) {
            if (!y(this.Ha) && B(this.Ha)) {
                var b = this.Ha.length;
                if (50 < b + this.M()) {
                    b = 50 - this.M();
                }
                a = b + this.M() - a;
            } else {
                a = this.M() - a;
            }
            if (!isNaN(a) && D(a)) {
                if (-1 < this.b.tag.indexOf("MjA_ZmFlNGExNDQ3ODg3ZmM1MmZhZTExMWQxMjhkNGY2NWI_NTg1") || this.a.ac) {
                    this.a.view.bb.innerHTML = this.mc(a);
                } else {
                    a = "Reklama: ";
                    if (this.a.h.H()) {
                        a = "";
                    }
                    this.a.view.bb.innerHTML = a + "" + this.u.Xb + " z " + this.u.gd;
                }
                if (!this.a.view.bb.W()) {
                    this.a.view.bb.show();
                }
            } else {
                this.a.view.bb.m();
            }
        }
    };
    P.nh = function() {
        this.a.log(this.c, "onVolumeChange", this.video.volume);
        if (0 < this.video.volume) {
            try {
                this.ia("unmute");
            } catch (a) {}
        } else {
            try {
                this.ia("mute");
            } catch (a) {}
        }
    };
    P.Uc = function() {
        this.de();
        if (this.video.networkState === 2 && 3 > this.video.readyState) {
            this.a.controls.F(true);
        } else if (this.video.networkState === 1 || 3 <= this.video.readyState) {
            this.a.controls.F(false);
        }
        this.a.controls.Eb(this.l());
        this.a.controls.Ra(this.M());
        this.setTime(this.l());
        var a = 100 / this.M() * this.l();
        this.a.controls.ob.Za(a + "%");
        if (this.a.controls.U.W() && 0 < this.l()) {
            this.a.controls.U.m();
        }
        if (0 < this.l() && this.S === true && !this.Zc().W() && this.Gd === false) {
            var b = this;
            if (-1 < this.b.tag.indexOf("Njk_OTVkOTRkOGU0NmJkN2VlMGFkNDA5ZTE1YmM5YmIwYWI_NjAz") || -1 < this.b.tag.indexOf("MjA_YmQ3NzhiNzUyMmRiNmE3NTljNDg3YzBhMDVhNTk0Y2Q_NjA1") || -1 < this.b.tag.indexOf("MjA_MTI3M2FjYjVmMzI3YTljMzI1Y2NmYWZkMTIyM2RhOGE_NjIz") || -1 < this.b.tag.indexOf("MjA_ZGMyN2E2NmFhYjZhNjE3YTE1N2E0ZTgzODk2ZTVlNWI_NjE3") || -1 < this.b.tag.indexOf("MjA_Y2YyYmM1ZmJiOTJkNzU1ZDgwMmJmYzgxOGNmNzZiMjQ_NjE0") || -1 < this.b.tag.indexOf("MjA_YTk1ZjkwZGViMmZkZDc4YmE4MzhiM2U1MmY0NjhkODY_NjA4") || -1 < this.b.tag.indexOf("MjA_MDk1ODNhM2U4MDdmNjJjODBhMWIxMTAzNDk3ZjdkNTE_NjMy") || -1 < this.b.tag.indexOf("MjA_YmVhOWFjNzQ3NWFlZmQ4ZTllNmNlNDdkMThhNTA3ZTM_NjQ5") || -1 < this.b.tag.indexOf("NzM_NmM5M2ViYjU2ZmY5MTViMWFmNWFiM2ZjYmFlZGEwMmQ_NzM5") || -1 < this.b.tag.indexOf("OTQ_MjgxMTM3ZjMzNTAxNjYzYThiMjgzMjlmNzBiYzY3OTM_ODc3") || -1 < this.b.tag.indexOf("MTA5_NmQxZjM1NGM1ZTYyZjVkMmNlYWIwYTUwYzgxODc2ZTE_OTY0") || -1 < this.b.tag.indexOf("MTA5_NDYxYzk1MWRjNjQ1YmEzODIzODNhMDUyZjlhNjhhYjI_OTYx") || -1 < this.b.tag.indexOf("MTY2_MGM3MWEyY2VlNDNlNWZjYmIxNDA4MTJhNTI4YzZjZGQ_MTkwNg") || -1 < this.b.tag.indexOf("MTg3_OGQ4YjBhOTYyMWU0MWMwNmNhZGNjNDJmOTIzMjgwYWQ_MjI2Ng") || -1 < this.b.tag.indexOf("MTk2_Mzc3YTc2ZjI2YmUzNGMyNTEwMDJkMTVjYTYxYzE5YjY_MjY0NA") || -1 < this.b.tag.indexOf("MTk2_ZDFhN2ZkNzdlYjM3YTAwZDBlZGFlYWQ5ZWI4NzBiY2E_MjUzNg") || -1 < this.b.tag.indexOf("MTk2_ODI2ZWM2M2U2ZTI4MzI3MGJmZDFhY2QwMjhjOTU1ZmI_MjU2Mw") || -1 < this.b.tag.indexOf("MTg3_YjU5OTJlYWVlYjI5MjNiNWI3M2YzNmQ4MDhkNjdmZDM_MjUxNQ") || -1 < this.b.tag.indexOf("MTk2_ZWYzZWEwZDAzMDBkMzM5NjcyZjc1MDYyYmRjNWFjNmU_MjU3Mg") || -1 < this.b.tag.indexOf("MTk2_MWI2M2RiM2ZkYTg0NTFhNTE2MmFkODU3NmJiMjhkMDA_MjU4MQ") || -1 < this.b.tag.indexOf("MTk2_NGQ0ZWY4ZTFlMmM4YWQ2NzM3YWY1NmEwZDU3Y2ZkNDk_MjU4NA") || -1 < this.b.tag.indexOf("MTk2_OTM0YTdmMDVjNTE1MmNhZjdhZjQ0M2I2YzgzY2JiNjg_MjY1Mw") || -1 < this.b.tag.indexOf("MTk2_ZmQzYTZmZGNkN2Q5YmViZDhjYmY0Zjg3MzI2ZDM1NDY_MjY2Mg") || -1 < this.b.tag.indexOf("MTk2_YjE3ZWNmZDVhMTVjYmQ2NzEzODE3ZGI2ZjE4MzQ2NzA_MjY2NQ") || -1 < this.b.tag.indexOf("MTk2_ZjM2MTRiODZjMmM5NGVkZDJmNjE1NmQ3NDNhYTA3ZDQ_MjY2OA") || -1 < this.b.tag.indexOf("MTk2_ODI2ZWM2M2U2ZTI4MzI3MGJmZDFhY2QwMjhjOTU1ZmI_MjU2Mw") || -1 < this.b.tag.indexOf("MTk2_Njk3OGNlNDFmYmJkMWIxY2JkMzQxZGJmNWEyNTlkYzk_Mjc3MA") || -1 < this.b.tag.indexOf("MTk2_YmQxOTdhYzQ0MjA2MDVlNTYwODM2ZTJiMzI0N2EyYTI_Mjc4OA") || -1 < this.b.tag.indexOf("MTk2_YWMyNjE3NzI3ZjNhODZiZTA4MWNkMmJlOTc2N2JkZmE_Mjc3Mw") || -1 < this.b.tag.indexOf("MTk2_MTA5YmJlYTg2YWRhOTY0YjIyNTgzZmU2MTc0YjQxYmI_Mjc5MQ") || -1 < this.b.tag.indexOf("MTk2_Mzk3ZGM5MDYxZmFhYWE3NmU0NzAxNjVmOWM5N2ZlZWM_Mjc5Nw") || -1 < this.b.tag.indexOf("MTg3_N2Q1MDAwNTMwZDE3MjRmYzI2MjkxYzg3ZDU4N2I2NDk_Mjc5OQ") || -1 < this.b.tag.indexOf("MjIw_OWJmZjkxNjA4M2IwNDc4MjJjY2YwMWQyYzg5MjRjOWM_MjgxOA") || -1 < this.b.tag.indexOf("MTk2_ZmJmZjgyY2I4N2MxMjgyMjEyNTY0YzM1OWM1YTY2NmM_MjgyNw") || -1 < this.b.tag.indexOf("MTk2_ZTY4YmEyY2RhN2NiYjI3NzkzYTA3ZmVmNDQ2YjY4MTE_MjgyNA") || -1 < this.b.tag.indexOf("MTk2_ODc3MzBiMjM5NWE1N2JhNjZmN2IwNWI1ZTdmMTI2MDQ_Mjg2Mw") || -1 < this.b.tag.indexOf("MTk2_YzBmODkzNmNkYTBkNzljYWE2ODVmN2NlZTJkODE1NTM_Mjg2Ng") || -1 < this.b.tag.indexOf("MTk2_NWE2YzRiM2Y4YmY3ODlkMzFhYTg1NTgzZTFkOThhYzc_Mjg2OQ") || -1 < this.b.tag.indexOf("MTk2_MWRmY2ExZWQ4YWYyMGNiYjM1MTE1ZWQ1ZDg1Njc5YmQ_MjkzMg") || -1 < this.b.tag.indexOf("MTk2_ZGZlYjIyYjVmYzk0MmI5ZThlMmVhMTE2Yzg2ZWQ5YWE_MjkzOA") || -1 < this.b.tag.indexOf("MTk2_Y2VlNTczYzAyYTJjMjdmNTUzNjJiNTJiMGJjMzZkZjE_MjkzNQ") || -1 < this.b.tag.indexOf("MTk2_Mjk3ZjNkZDEwN2U1M2Q2NDBiYzViNDdkOGJkMjFhODU_MzAwMQ") || -1 < this.b.tag.indexOf("MTk2_YjM3ZTkwMzMxNWI1MGE3YzBjMDc0MTAyYzI2NzkxOTk_MzAwNA") || -1 < this.b.tag.indexOf("MTk2_NGRiMGI0YWFiZGQ5NTIxZDExZDkxYWZjYTQzNTIyM2E_MzAxOQ") || -1 < this.b.tag.indexOf("MTk2_ZTcwZTkwN2EyMzM4NDQzMTYyN2M4Nzg5MzIwZDhkOGE_MzAyMg") || -1 < this.b.tag.indexOf("MTk2_MzU4Zjg3NDVlOGU1OGVlY2JlODEwNzZjYjgwNDU2OTk_MzA1NQ") || -1 < this.b.tag.indexOf("MTk2_ODg2ZmZhNzE1MjA2YzE4ZDY5OGY0ZjMxZjMwNDBhYWY_MzA1OA") || -1 < this.b.tag.indexOf("MTk2_OWNkYmM1ZGNjZmIzZTE3YzMwNTMxOWJiODlhYzk3ZjI_MzA2MQ") || -1 < this.b.tag.indexOf("MTk2_MzAxYWRlM2Q4MDUyNGZlNWQ2OGU2N2U0MDE3NzU4OTE_MzE4MQ") || -1 < this.b.tag.indexOf("MTk2_YTQ1OTk2MmEwNTk0NzVjMjQ2M2Y5MmQwOGFiYjA5ZmI_MzE4NA") || -1 < this.b.tag.indexOf("MTk2_ZTNhZjY5OTk3MGU2YjZhYzc2NWMxZWRjNmRlYTIzYzU_MzIyMA") || -1 < this.b.tag.indexOf("MTk2_ZWMwMTcxMWZkZDJmODdmMDZlMDc3Y2U0YzE3N2JkMTg_MzI2NQ") || -1 < this.b.tag.indexOf("MTk2_MjMyNmVmZTUzODRiM2E3MWFmNmQ5Mjk0YTAyZWU1ZTk_MzI2Mg") || -1 < this.b.tag.indexOf("MTk2_M2JjOGI5Y2I3Mjk0YWZiMjhjOTZhNTFiNWQ2OWZiYzA_MzI2OA") || -1 < this.b.tag.indexOf("MjU2_YTJiZDExNjBlYTZjOTc1ZjUyZWI5NmNhZGI0NzlmOGE_MzQwMA") || -1 < this.b.tag.indexOf("MTk2_OWI3ZGZlMDMxZjU4NTI4OTcyMDYwYTkyNjhjOTk2YjU_MzQ3Mw") || -1 < this.b.tag.indexOf("MTk2_ZmI2YWEzZDQwZTY0YzlhMTM0YWUzNGQ4ZjdiZDFjZDQ_MzQ3Ng") || -1 < this.b.tag.indexOf("MTk2_MTQ3ZjcyNzRmMDA5NDA4YzE1YjdkZDQ3ZmM2M2UwOTE_MzQ3OQ") || -1 < this.b.tag.indexOf("MTk2_ZWRkOGY0OTFhMDJkZGJhY2VhZDQ1MGI2ZjViOGRiYmQ_MzQ5Ng") || -1 < this.b.tag.indexOf("MTk2_YmZjYjRkNDJiOTJmYTY2MWMxOTNmNmNmMWYyZWZjMzE_MzQ4Nw") || -1 < this.b.tag.indexOf("MTk2_MjI2ZjFiNjQxOWJkY2Q0ZTY1NzZhNWIyZDRhNDE2YzE_MzQ5Mw") || -1 < this.b.tag.indexOf("MTk2_MjIzMjA0ZDU2OTA0Mzg0YjE3Y2I5NGY4ZmE2MTdiNzY_MzQ5MA") || -1 < this.b.tag.indexOf("MTk2_YTU3Mjg2NTk1MjU3YWYwNzY2ZTYyZGJmZmI4ZjkwMGY_MzU1OQ") || -1 < this.b.tag.indexOf("MjYw_MzljNjA0NDkwMjc3M2ZjZDZmZjg4YTE5OTMyZmNkNTY_MzYzOA") || -1 < this.b.tag.indexOf("MjY2_MTk4MGI2OTc1MzRhNjAyYjVhN2RmZTM3ZjAzNzkwMjA_MzY1MA") || -1 < this.b.tag.indexOf("MjY2_ZDRiM2Q0NzJjMjYwNzIxZGQwZjk4MDlmNjhhMDkzMjU_MzY0Nw") || -1 < this.b.tag.indexOf("MTk2_MGUzYmQ1ZWYyMDBjMTFlMmZmMTY1NzE1ZjhmZTEzYTY_MzczMw") || -1 < this.b.tag.indexOf("MTk2_ZGJjMTMxZDdmMjQwMTc5NTZiZmE5OGU4MDJkYTZiMzg_MzczNg") || -1 < this.b.tag.indexOf("MjU2_YzBiMWNlMTZhNjkzYjVjOTcxMWZiN2I1ZWM0MjQ0YTc_MzcyNw") || -1 < this.b.tag.indexOf("MjY2_ZGYxMmVkMzQzZGE1MDNkNDNlZjBkMjMzY2ZjOTJlMDQ_MzgyMA") || -1 < this.b.tag.indexOf("MjY2_MWEyZWRkMDgxYzBjZjZkZmFiNjMwMWVlN2I5OThkOWU_MzgyMw") || -1 < this.b.tag.indexOf("MjY2_ODFlMTI2ZDQ4ODYxZWMxNGJlZjU4YjA2ZmJhYWI5MjY_MzgyNg") || -1 < this.b.tag.indexOf("MjY2_OGYzNGY2ZWE2ZjYzMjYzYzgxYTcyZjU2ZjgzYzdiYjA_MzgyOQ") || -1 < this.b.tag.indexOf("MTk2_ZmE5ZTY1NGFhMzQ4MTRiMGIwZTg5OTg5NzA3Y2MwOGQ_Mzk0MA") || -1 < this.b.tag.indexOf("MTI1_ZDRmNjdlMjMyYTRhNTgwZjhlYTYxOWJjNDlhY2ZiODk_Mzk1Mg") || -1 < this.b.tag.indexOf("MTI1_ZTliNDk0MmY2YzQ4NmMwZTNlYmE4NDMxM2QwZDk3Yzg_Mzk0OQ") || this.Si === true) {
                if (this.qb === null && 0 < this.X) {
                    this.Hd = false;
                    this.a.view.Aa.show();
                    this.a.view.Aa.Ba('<span class="pb-skip-body">Pomi\u0144 reklam\u0119 za ' + b.X + "</span>");
                    this.a.view.Aa.style.opacity = "0.5";
                    this.qb = window.setInterval(function() {
                        b.X--;
                        if (0 < b.X) {
                            b.a.view.Aa.Ba('<span class="pb-skip-body">Pomi\u0144 reklam\u0119 za ' + b.X + "</span>");
                        } else {
                            b.a.view.Aa.Ba('<span class="pb-skip-body">Pomi\u0144 reklam\u0119</span>');
                            b.a.view.Aa.style.opacity = "1";
                            b.Hd = true;
                            window.clearInterval(b.qb);
                            b.qb = null;
                        }
                    }, 1e3);
                }
            } else if (this.Fb === null) {
                this.Fb = setTimeout(function() {
                    if (-1 < b.b.tag.indexOf("NTc_MWM1ZjEwYjg5ZGM1ZjVkZDA3YjJmYjI5MzBhOGEwMWE_NTc2") || -1 < b.b.tag.indexOf("NTc_ZjBmNmZkOTYzOTQ1ZTcwMzQ0YWJjN2VlYzg1Y2NiZDE_NTcw") || -1 < b.b.tag.indexOf("MjA_ZmFlNGExNDQ3ODg3ZmM1MmZhZTExMWQxMjhkNGY2NWI_NTg1") || -1 < b.b.tag.indexOf("NjY_ZTc2M2ZmMDA3YWRiMTZjMjViMjZjMzM1N2RhNWJlOWQ_NTkx") || -1 < b.b.tag.indexOf("Njk_OTVkOTRkOGU0NmJkN2VlMGFkNDA5ZTE1YmM5YmIwYWI_NjAz") || -1 < b.b.tag.indexOf("NzY_MGI4MThkZjU2MmEwM2Y2MzY4NDllM2RkYjhjYzM1MDQ_NjU1")) {
                        b.a.view.Aa.show();
                    } else {
                        b.Zc().show();
                    }
                    b.S = false;
                    b.Gd = true;
                }, 1e3 * this.aa);
            }
        }
        a = Math.floor(this.l() / this.M() * 100);
        if (25 <= a && this.rc === false) {
            try {
                this.ia("firstQuartile");
                this.rc = true;
            } catch (e) {}
        } else if (50 <= a && this.uc === false) {
            try {
                this.ia("midpoint");
                this.uc = true;
            } catch (e) {}
        } else if (75 <= a && this.vc == 0) {
            try {
                this.ia("thirdQuartile");
                this.vc = true;
            } catch (e) {}
        }
        if (5 <= this.l() && this.qg === false) {
            try {
                this.ia("video5sec");
                this.qg = true;
            } catch (e) {}
        } else if (10 <= this.l() && this.lg === false) {
            try {
                this.ia("video10sec");
                this.lg = true;
            } catch (e) {}
        } else if (15 <= this.l() && this.mg === false) {
            try {
                this.ia("video15sec");
                this.mg = true;
            } catch (e) {}
        } else if (20 <= this.l() && this.ng === false) {
            try {
                this.ia("video20sec");
                this.ng = true;
            } catch (e) {}
        } else if (25 <= this.l() && this.og === false) {
            try {
                this.ia("video25sec");
                this.og = true;
            } catch (e) {}
        } else if (30 <= this.l() && this.pg === false) {
            try {
                this.ia("video30sec");
                this.pg = true;
            } catch (e) {}
        }
    };
    P.Me = function(a) {
        this.a.log(this.c, "onError");
        if (a.target.networkState === 3) {
            this.finish();
        } else {
            a = -1;
            if (this.video.error != null && typeof this.video.error.code !== "undefined") {
                a = this.video.error.code;
            }
            if (-1 < a) {
                this.finish();
            }
        }
    };
    P.ah = function() {};
    P.Ad = function() {
        if (this.gf === false) {
            try {
                this.ia("complete");
            } catch (a) {}
        }
        this.a.v.m(this.a.v.bb);
        this.a.v.m(this.a.v.re);
        this.a.v.m(this.a.v.la);
        this.a.v.m(this.a.v.hc);
        this.a.v.m(this.a.v.Aa);
        this.a.controls.F(true);
        this.a.controls.Wc(0);
        this.a.controls.ob.Za("0%");
        this.a.controls.Eb(0);
        this.a.controls.Ra(0);
        window.clearTimeout(this.ya);
        this.ya = null;
        window.clearInterval(this.qb);
        this.qb = null;
        window.clearTimeout(this.Fb);
        this.Fb = null;
        this.Gd = false;
        this.eb = {
            creativeView: [],
            start: [],
            firstQuartile: [],
            midpoint: [],
            thirdQuartile: [],
            complete: [],
            video5sec: [],
            video10sec: [],
            video15sec: [],
            video20sec: [],
            video25sec: [],
            video30sec: []
        };
        this.Nb = [];
        this.oc = [];
        this.we = "";
        this.gf = this.Md = this.ig = this.pg = this.og = this.ng = this.mg = this.lg = this.qg = this.vc = this.uc = this.rc = this.Nd = false;
        this.uh();
        this.lb.m();
        this.mb.innerHTML = "";
        this.video = null;
        if (A(window.videoAdEnded)) {
            window.videoAdEnded(this.a.id);
        }
        return this.Cc();
    };
    P.Ec = function() {
        if (this.a.h.H()) {
            if (-1 < this.b.tag.indexOf("MjA_N2JhODc3Y2U3NTJkNTI4Yjc4NmZiMTdjYzFlNDJhYWU_MTIyMQ")) {
                return;
            }
            this.nj();
        }
        if (this.pa) {
            this.a.controls.Z(true);
        } else if (this.Kd) {
            this.a.controls.Z();
        }
        if (!y(this.video) && this.video.paused) {
            this.video.play();
        } else {
            if (0 < this.Rd) {
                this.nj();
            }
            this.Rd++;
        }
    };
    P.nj = function() {
        if (this.b.click && (!(1 > this.l()) || !(-1 < this.b.tag.indexOf("MTI4_ODEwOGQ2ZTkwMTkwOWJjZjFjNjY0NWYzYzAzMDBiNGU_MTE4NA")) && !(-1 < this.b.tag.indexOf("MTI4_M2M5ZTMwNmU0OGJlOTQ3Y2VhOWU0OWM0M2JmY2VhNDE_MTE4MQ"))) && 0 < this.Rd && (this.Rd++, !y(this.we) && this.we !== "")) {
            var a = this.we;
            try {
                if (-1 < a.indexOf("myphone.pl/klasycznie") || -1 < a.indexOf("myphone.pl/produkty")) {
                    if (!y(this.a.Fg()) && this.a.Fg() != "") {
                        a += "&utm_term=" + this.a.Fg();
                    }
                    if (!y(this.a.Gg()) && this.a.Gg() != "") {
                        a += "&utm_content=" + this.a.Gg();
                    }
                }
            } catch (b) {}
            try {
                if (-1 < a.indexOf("http://sprawachrystusa.pl") && Math.round(Math.random())) {
                    a = "http://sprawachrystusa.pl/lista-kin/";
                }
            } catch (b) {}
            try {
                if (!window.open(a, "_blank").closed) {
                    try {
                        this.ia("clicktracking");
                    } catch (b) {}
                }
            } catch (b) {}
        }
    };
    P.kc = function() {
        try {
            this.ia("pause");
        } catch (a) {
            this.a.log(this.c, a);
        }
    };
    P.ee = function() {
        this.a.log(this.c, "Event", "onPlay");
        if (!this.a.v.va.I("pb-run-ad")) {
            this.a.v.va.w("pb-run-ad");
        }
        if (!y(this.ya)) {
            window.clearTimeout(this.ya);
            this.ya = null;
        }
        if (0 < this.M()) {
            this.a.controls.Ra(this.M());
        }
        this.u.nf = true;
        if (this.Rd === 0) {
            this.Rd++;
        }
        this.a.controls.ba.m();
    };
    P.jh = function() {
        this.a.controls.F(false);
        if (this.a.controls.U.W()) {
            this.a.controls.U.m();
        }
        if (this.Nd === false) {
            this.Nd = true;
            if (-1 < this.b.tag.indexOf("ODQ_NjM2ZDE0NDQxZjZjZGY5ZmQ1MmE0MTNmNDA4OWI1YWU_MTQzMg")) {
                try {
                    window.document.querySelector("#player_branding_top").innerHTML = '<a href="https://gde-default.hit.gemius.pl/lshitredir/id=B8M1j_s4gXFBYe7iKMDiLMRqXtFKLO_aZu6AH7NbvSz.T7/fastid=gqpuotncdlryxcgwixbcgacbbfkc/stparam=tpqrfnisav/nc=0/gdpr=0/gdpr_consent=/url=https://www.facebook.com/KozelPL/?utm_campaign=KOZEL VOD_07-09.19_SABM_19_0225&utm_source=DISPLAY_desktop&utm_medium=/VOD/VOD/CDA_BRANDING/CDA_634x75" target="_blank"><img src="https://www.cda.pl/img/branding/KP_Kozel_Digital_Cda_[634x75]_v5.jpg" /></a>';
                    window.document.querySelector("#player_branding_bottom").innerHTML = '<a href="https://gde-default.hit.gemius.pl/lshitredir/id=B8M1j_s4gXFBYe7iKMDiLMRqXtFKLO_aZu6AH7NbvSz.T7/fastid=gqpuotncdlryxcgwixbcgacbbfkc/stparam=tpqrfnisav/nc=0/gdpr=0/gdpr_consent=/url=https://www.facebook.com/KozelPL/?utm_campaign=KOZEL VOD_07-09.19_SABM_19_0225&utm_source=DISPLAY_desktop&utm_medium=/VOD/VOD/CDA_BRANDING/CDA_634x75" target="_blank"><img src="https://www.cda.pl/img/branding/KP_Kozel_Digital_Cda_[634x75]_v5a.jpg" /></a>';
                    this.bh();
                    this.i.Pf = T(window.document.querySelector("#player_branding_bottom"), "click", this.Je, this);
                    this.i.Ke = T(window.document.querySelector("#player_branding_top"), "click", this.Je, this);
                } catch (g) {}
            }
            if (-1 < this.b.tag.indexOf("MjUw_MTkxNzAxODhiZDRhM2Y1YTY2OGY1ODY5YmY1NzZlZTY_MzgzMg") || -1 < this.b.tag.indexOf("MjUw_ODZmN2RlN2U3NTZlZTZkOWYwY2JmMjg0MzE1NTQ1YmI_MzgzNQ") || -1 < this.b.tag.indexOf("MjUw_ZWQ2NDM4MWFkODlhZDdiNmE4NTk5ZWFhODRhMDMxMjc_MzgzOA")) {
                try {
                    window.document.querySelector("#player_branding_top").innerHTML = '<a href="https://wyborowa.pl/" target="_blank"><img src="https://static.cda.pl/branding/wyborowa/CDA_634x75_01_UP_v3.jpg" /></a>';
                    window.document.querySelector("#player_branding_bottom").innerHTML = '<a href="https://wyborowa.pl/" target="_blank"><img src="https://static.cda.pl/branding/wyborowa/CDA_634x75_02_DOWN_v3.jpg" /></a>';
                    this.bh();
                    this.i.Pf = T(window.document.querySelector("#player_branding_bottom"), "click", this.Je, this);
                    this.i.Ke = T(window.document.querySelector("#player_branding_top"), "click", this.Je, this);
                } catch (g) {}
            }
            try {
                if (-1 < this.b.tag.indexOf("MTI4_YWUxOGM3NWRlMTE4NzFhMGNhNjk1NjI1YzE1YmJiNWY_MzQ0MA")) {
                    window.document.querySelector("#player_branding_top").innerHTML = '<a href="https://ad.doubleclick.net/ddm/trackclk/N873153.1864356CDA.PL/B21115792.289352162;dc_trk_aid=482758879;dc_trk_cid=141063125;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}" target="_blank"><img src="https://static.cda.pl/branding/vivus/413_PLVivus202011_Pierwsza_na61dni_Luty_CDA-634x75_2-2.png" /></a>';
                    window.document.querySelector("#player_branding_bottom").innerHTML = '<a href="https://ad.doubleclick.net/ddm/trackclk/N873153.1864356CDA.PL/B21115792.289352162;dc_trk_aid=482682062;dc_trk_cid=141063125;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}" target="_blank"><img src="https://static.cda.pl/branding/vivus/413_PLVivus202011_Old_CDA-634x75_2.png" /></a>';
                    this.am();
                    this.Zl();
                    this.i.Pf = T(window.document.querySelector("#player_branding_bottom"), "click", this.Yl, this);
                    this.i.Ke = T(window.document.querySelector("#player_branding_top"), "click", this.$l, this);
                }
            } catch (g) {}
            if (-1 < this.b.tag.indexOf("MTg3_N2Q1MDAwNTMwZDE3MjRmYzI2MjkxYzg3ZDU4N2I2NDk_Mjc5OQ")) {
                try {
                    window.document.querySelector("#player_branding_top").innerHTML = '<a href="https://ad.doubleclick.net/ddm/trackclk/N542601.3487212LEVELUPDISPLAY/B24256105.275212015;dc_trk_aid=469492119;dc_trk_cid=133371240;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=" target="_blank"><img src="https://scdn2.cda.pl/branding/monini_cda_01.png" /></a>';
                    this.bh();
                    this.i.Ke = T(window.document.querySelector("#player_branding_top"), "click", this.Je, this);
                } catch (g) {}
            }
            if (-1 < this.b.tag.indexOf("NTc_OGIyNDIyYWFlNzAxNzcyMzMwNjgwYTcwZmUxMzAxODc_NTM0") || -1 < this.b.tag.indexOf("NTc_OGYxYzdmZWY2NTIyMDllOWM1YWQ4NTQ1MGQyODg2NTA_NTM3") || -1 < this.b.tag.indexOf("NTc_MWM1ZjEwYjg5ZGM1ZjVkZDA3YjJmYjI5MzBhOGEwMWE_NTc2") || -1 < this.b.tag.indexOf("NTc_MGQ4ZWRhMjJlMmJlODAwNWVjYjhlMGJjZDU2MjcyYTI_NTcz") || -1 < this.b.tag.indexOf("NTc_ZjBmNmZkOTYzOTQ1ZTcwMzQ0YWJjN2VlYzg1Y2NiZDE_NTcw") || -1 < this.b.tag.indexOf("NTc_NTc3YWZmOWQ5ZDkyMjljYjNjMmRkYWUxNzYwMGIzNzk_NTY3")) {
                this.a.v.la.show();
                this.a.v.la.innerHTML = "Dowiedz si\u0119 wi\u0119cej na myphone.pl";
            }
            if (-1 < this.b.tag.indexOf("NjM_NDhlOGU2YzE4M2Q0N2RhMWEyZjg0YjlhM2NlMmM5Mjc_NTc5")) {
                this.a.v.la.show();
                this.a.v.la.innerHTML = "Sprawa Chrystusa - ju\u017C w kinach!";
            }
            if (-1 < this.b.tag.indexOf("MjA_ZmFlNGExNDQ3ODg3ZmM1MmZhZTExMWQxMjhkNGY2NWI_NTg1")) {
                this.a.v.la.show();
                this.a.v.la.innerHTML = "Zosta\u0144 wsp\xF3\u0142w\u0142a\u015Bcicielem CDA! Zapisy do 8 grudnia";
            }
            if (-1 < this.b.tag.indexOf("Njk_OTVkOTRkOGU0NmJkN2VlMGFkNDA5ZTE1YmM5YmIwYWI_NjAz")) {
                this.a.v.la.show();
                this.a.v.la.innerHTML = '"Najlepszy" - nowy film tw\xF3rcy "Bog\xF3w". Ju\u017C w kinach!';
            }
            if (-1 < this.b.tag.indexOf("MjA_YmQ3NzhiNzUyMmRiNmE3NTljNDg3YzBhMDVhNTk0Y2Q_NjA1")) {
                this.a.v.la.show();
                this.a.v.la.innerHTML = "CDA Premium - nowo\u015Bci na luty 2018!";
            }
            if (-1 < this.b.tag.indexOf("MjA_YmVhOWFjNzQ3NWFlZmQ4ZTllNmNlNDdkMThhNTA3ZTM_NjQ5")) {
                this.a.v.la.show();
                this.a.v.la.innerHTML = "CDA Premium - nowo\u015Bci na marzec 2018!";
            }
            if (-1 < this.b.tag.indexOf("MjA_MTI3M2FjYjVmMzI3YTljMzI1Y2NmYWZkMTIyM2RhOGE_NjIz")) {
                this.a.v.la.show();
                this.a.v.la.innerHTML = '"The Boy" - ogl\u0105daj w CDA Premium!';
            }
            if (-1 < this.b.tag.indexOf("MjA_ZGMyN2E2NmFhYjZhNjE3YTE1N2E0ZTgzODk2ZTVlNWI_NjE3")) {
                this.a.v.la.show();
                this.a.v.la.innerHTML = '"Summer Camp" - ogl\u0105daj w CDA Premium!';
            }
            if (-1 < this.b.tag.indexOf("MjA_Y2YyYmM1ZmJiOTJkNzU1ZDgwMmJmYzgxOGNmNzZiMjQ_NjE0")) {
                this.a.v.la.show();
                this.a.v.la.innerHTML = '"Robinson Crusoe" - ogl\u0105daj ju\u017C teraz w CDA Premium!';
            }
            if (-1 < this.b.tag.indexOf("MjA_YTk1ZjkwZGViMmZkZDc4YmE4MzhiM2U1MmY0NjhkODY_NjA4")) {
                this.a.v.la.show();
                this.a.v.la.innerHTML = '"Modelka" - ogl\u0105daj w CDA Premium!';
            }
            if (-1 < this.b.tag.indexOf("MjA_MDk1ODNhM2U4MDdmNjJjODBhMWIxMTAzNDk3ZjdkNTE_NjMy")) {
                this.a.v.la.show();
                this.a.v.la.innerHTML = '"Ma\u0142y ksi\u0105\u017C\u0119" - ogl\u0105daj ju\u017C teraz w CDA Premium!';
            }
            if (-1 < this.b.tag.indexOf("MTg3_YjU5OTJlYWVlYjI5MjNiNWI3M2YzNmQ4MDhkNjdmZDM_MjUxNQ")) {
                this.a.v.la.show();
                this.a.v.la.innerHTML = "Z mi\u0142o\u015Bci do oliwy od 100 lat";
                this.a.v.la.style["pointer-events"] = "auto";
                this.i.kj = T(this.a.v.la, "click", this.kj, this);
            }
            if (this.De && !this.a.ta()) {
                this.a.v.hc.show();
            }
            if (-1 < this.b.tag.indexOf("MjA_N2JhODc3Y2U3NTJkNTI4Yjc4NmZiMTdjYzFlNDJhYWU_MTIyMQ")) {
                this.a.v.hc.show();
            }
            this.u.ma("Startuje reklam\u0119");
            try {
                this.ia("impression");
            } catch (g) {}
            try {
                if (this.a.Ld) {
                    var a = this;
                    window.setTimeout(function() {
                        if (a.a.Ld) {
                            a.ia("viewableImpression");
                        }
                    }, 2e3);
                }
            } catch (g) {}
            if (this.a.ac) {
                try {
                    this.N("https://g.cda.pl/g.php?pixel&vi=MTcwYjVmZjFjMTA0MzU5NDExMjcwNDQ3MWZjZDc4NzQ_Nzc4&pl=impression&ct=[timestamp]");
                } catch (g) {}
            }
            if (this.b.hasOwnProperty("counter") && this.b.counter && this.b.hasOwnProperty("key") && this.b.hasOwnProperty("displayAs")) {
                var b = "";
                if (0 < this.Nb.length) {
                    b = this.Nb[0];
                } else if (0 < this.eb.start.length) {
                    b = this.eb.start[0];
                } else if (0 < this.eb.creativeView.length) {
                    b = this.eb.creativeView[0];
                }
                var e = "2017premium-wakacje 2017premium-recepcjonista 2017premium-gosc 2017premium-wakacje 2017premium-piekna 2017premium-frankenstein 2017premium-dziendobry 2017premium-kobietawklatce 2017premium-nikoratujebrata 2017premium-kumba 2017premium-body 2017premium-sonofagun 2017premium wosp_25 2017premium-facetniepotrzebnyodzaraz 2017premium-carteblanche 2017premium-sarila 2017premium-anatomia-zla 2017premium-popek 2017premium-maruderzy 2017premium-loft 2017premium-to-wlasnie-seks 2017premium-kroczac-wsrod-cieni 2017premium-kevin 2017premium-upsarka 2017premium-honorisila 2017premium-dawcapamieci 2017premium-kochanek 2017premium-wszystkowidzaca 2017premium-72godziny 2017premium-naukaspadania 2017premium-boy7 2017premium-przekret 2017premium-poslancy 2017premium-wakacjemikolajka 2017premium_cda24 2017premium_cdapopcorntv grudzien2016premium 2017premium_hugoilowcyduchow 2017premium_nieracjonalnymezczyzna 2017premium_pantameron 2017premium_transporternowamoc 2017premium_zycnieumierac 2017premium_7psychopatow 2017premium_theduff 2017premium_asterixiobelix 2017premium_teostatniegodziny 2017premium_marsylskilacznik 2017premium_juzzatobatesknie 2017premium_whoami 2017premium_bananki 2017premium_wdrodzenagielde35s 2017premium_bonypodarunkowe 2017premium_cda24swieta 2018premium_ofertaluty 2018premium_theboy 2018premium_sypiajaczinnymi 2018premium_summercamp 2018premium_robinsoncrusoe 2018premium_racheticlank 2018premium_modelka 2018premium_misiek 2018premium_malyksiaze 2018premium_ojcowieicorki 2018premium_sypiajaczinnymi 2018premium_sprawachrystusa 2018premium_poradynazdrady YmY3OGEwODRkOTNkNDAwNTI4YjE5ZDM1MDdmNWY2M2E_NjAw N2U3ODlkZjNkOTI3OGMzZjQ2NzYyZjNlNTU1NzliN2Q_NTk0 NzY0ZWYwNjRjNzJhZDU0MWYzYWI5NDYxM2Q4YzNmMmU_NDkz MGM4YjFmYTA3OTU5ZDI4MWQyZDgzMGE3MTc3N2Y3MzU_NDk2 ZGRkZGZhN2Q0OTZhMDBjOThkMzFhZGU2YTYzMDZiNWQ_NDk5 ZGFhN2ZmZTEzMzQ0Nzc3MDIzNjgxOWJiYzE4OThlNTY_NTAy NWU5MjlhNDAyOGY5MTZlYjI0ODAxMzRkMDNjZGU0Yjc_NTA1 YmFjMDk2ZTA4MGRjMzJjODlkZWVjODMwMDI5ZjkyZmY_NDg3 N2NkZjEzZDIwNDliNWY3MDc1YzQzYmM3ZmViYTc0NTM_NDg0 MjAwZTljNDMzYThjOGFlYWVlNmNiZjQ0MTljNzY3ZWM_Mzgy ZjZmMWU5ZjI1MzQzNWNkMDU2MGU0NjkyZTg4MDVjMDY_Mzg1 OTU2MjBjNjMwMDZjZDY1YjBjNjJkZmVmYzMzZWNmYjU_Mzcx MzJkOGIxYTI3NWU3Y2Q3NTY2YTllYzkyYTQ3NDY1NjE_Mzcz YTJmMGI4ODFkZGZkNzkzMGNiNDE3Y2QyZDhlZjEwZjE_NDAw M2ZkZjJhNTk0MjBhMjY4NWFlNjk1ZTAxYWEyNmJkN2Q_NDAz OTNiM2VkYTY1Y2M0YWFlYWI4MjQ4NDlkNTIxMGNjOGI_MjYz ZmY2MzA0MGJmNDQ3ZjcwZmQwNjdmNTdiMmNlOTQ1OGQ_NDA2 NGRkYTQzMTMzODcxOGM0YmZmMGJlNTliYTA0YzNlNDI_NDA5 ODIwMzdhNjQ5ZmRkMWQyOGI5NDE2YjExN2MxODhkOGY_NDE1 YmE1NTJmOTQzZDE3ODg4YmMwZTZjNGVlMTkyNjcxZWE_NDI0 M2M1MTQyYmIxNDZjYjQ0YjIzYTM4YWU4OGRjNGIwNmU_NDIx NjE1ZjUwZTQ5OTU4MzE0MTYwOTM0NmM2YjIzNDUwOWY_NDQy NWNmYTVhOGUwYmVmOGMxYjA4ZmMxYTAxZjUwMDU5ZTc_NDMz NWQwM2I4MTFlNTAzZWY3OWQ2ZWIxMjQ0OTlkNGZlZGE_NDM5 OTFlNzgxMDhmMmMwNWFhMjQzMDEwNjQwYjhiMDRhNTY_NDM2 NjNjNmJhZmQwZTc1NDViM2E3MmJhYmE5YzliOTE0MTU_NDU0 ZmI4ZTNmOGI5ZTAyOGM5MTgwODhmZjMwMDEwZWExZjI_NDYy ZjcyODk1N2NjMWUyMzYwODZkZjg2OTkwZjAwNzRlOTg_NDYz MWFhOWQyYzM3NWQyZWM0N2ZlODkzNDE0ZDExZTFiOGE_NTIy NmEyODVhMzgzZDI1Y2FjYmYxYjI3YmJiMDBjMDg2ZDY_NTMx NTNhZjNmY2NiYmE5ZTVmZDEwY2FlYTQyNWYxYmM3MzI_NTI4 OGIyMWVkNGMwNzhhZjA0YTc2Y2Y1N2EzYmEwYjI3Y2Y_NTI1 MjRkZDcxOGQ4MmFhYTQ0NWU0OGFhYmVjMjM1ZGJlM2Q_NTQz M2YzNTJmZDMwOGVhNDgyMjllZmFlNjNlOTQ2OThmZTY_NTQ2 MzY1ZmIzZGNhMzhhZmY0ZmI2NWE2NTdjMmQ0YWQzMDI_NTQ5 OGJkM2RkZTI5YjIxNjE5ZDYxZGUzYjU3ZDUwOGVhYzk_NTUy ZjE5Mzk4YmM3ZmRiZTdiMTZhNzIxYjlmY2M1ZGQ3NjU_NTU1 ZmFlNGExNDQ3ODg3ZmM1MmZhZTExMWQxMjhkNGY2NWI_NTg1 YmQ3NzhiNzUyMmRiNmE3NTljNDg3YzBhMDVhNTk0Y2Q_NjA1 MTI3M2FjYjVmMzI3YTljMzI1Y2NmYWZkMTIyM2RhOGE_NjIz OWE1NjRmYjBmODhhZDRjMWVlNzU2MGUzNDFkNDk4YmM_NjIw ZGMyN2E2NmFhYjZhNjE3YTE1N2E0ZTgzODk2ZTVlNWI_NjE3 Y2YyYmM1ZmJiOTJkNzU1ZDgwMmJmYzgxOGNmNzZiMjQ_NjE0 ZDY5ODE4MjM2MmEzMjEwMzIwOTU3YzJkMTYzMDU0ZmU_NjEx YTk1ZjkwZGViMmZkZDc4YmE4MzhiM2U1MmY0NjhkODY_NjA4 NTI5NzU2NDQ2YzEwY2Y1OGZlZmRlNjU1MzEzNDQzODc_NjI2 MDk1ODNhM2U4MDdmNjJjODBhMWIxMTAzNDk3ZjdkNTE_NjMy Nzc3ZDhkYzYyYjUwNzQ4ZmRiMmVhNDgxOWJiOWYwMTk_NjM0 ZGNiMTBiMjJhOTdjMDlhY2I2YTBlNDUxMWM4MGRiODc_NjM3 NjFlYzhlYzQ3OTM1ODhkMzIyN2ViYzM5OGYxNzY3ZTk_NjM5 NDg0ZGE4ZTI5MWRlMTdiY2IyNGU3YzE3N2Q1ODZlNDA_NjQy YmVhOWFjNzQ3NWFlZmQ4ZTllNmNlNDdkMThhNTA3ZTM_NjQ5 MGI4MThkZjU2MmEwM2Y2MzY4NDllM2RkYjhjYzM1MDQ_NjU1 NDhmZDZlY2U2YTIwZWExMTlkMjAzZDJkM2IzMGZkYzU_NjY0 YjY5NGNjZmJjN2NmMDJmMDU2YzkyNmY3OGE1YTE1MWY_Njcw N2Q2MjY3ZDQwZmQzNDVkZDhlZDM5YzNhNmQ0YWI0MGE_NjY3 MWNkNGIwMGE4NzQxYmU2NTA5MGIxZDFmYTA0MDk1Njc_Njc5 YTk4NGJhMGMxM2RmOThmZDQ0MjAxNzMyOWM1ODlkYTA_Njk0 ODljOGQ2MzdkZWQxOWRiZTlmNmIxYTc0OGUyODViOTM_Njkx MmNjNTU5NDc5NDc0ZDU4NzAyNTFmYmVlYTQ1ZDJiNjc_Njg4 NTQzOGNiNDViZmY5NjVjZTk4MTFlMzdkZWU4NWE0YzI_Njg1 N2NmNWZiMzU0OGYyZTNjODQ4NTI3NGQ4YmU4MmY3YTA_Njgy N2QxZTE0NTg4NTdmNmM5MTY3NDdkOTdmNmViMzA5NTY_NzE3 ZDhiMDVhYzRkMGJjNTFjZTQyZGU4Y2ZhNjNmZWM5YWQ_NzIw ZDc0MDdlMmQ5NDBiNzZiYjg2MjE4ZjgxMTgxOGYwMDc_NzMw ZTY5YWQ3NzljMzMzMjI4OGQ0NzIzZGM1ZjUwZjRhMDg_NzI3 NTY1ZWFkMjJjNDFiMDM2MGYzNGE3MzVhYjEzNDY3M2Q_ODA1 MjMxYTdmYTg2ZDFmYTJkNTE2Yjc5MDYzZGViMGNhNDg_ODE3 ZTZhNzM4NmI4YTk1ZWMwZWM0NGYxYjg5ZTY0MGUwYzU_ODE0 YjYzOTQ5M2Q0NDhkZmY3NGNmOTVkZjhmYWYzMzEyODg_ODQx MWRkNTQyMWM3NWZiZGQyMDJkYzRmZGVhNzgwNDYxNWE_ODY4 MDdkMzkxM2RlNTQyODBmMzM3NWIyNmM2NjY1ZDNlYWI_ODY1 NDIzNTk0OGM1NjM2MzExM2UzZGNkMjUzNGZlMGYxOTk_ODYy YmI5ZWM3MDRmM2YxYWQxYzdmN2YyMTRhNjA1NDZlYWU_ODU5 YTQwNjQ1YWYwNTA4ZDE3OGRlYThjYWU2ZjU0ZTM4YmY_OTUy YTU4YmQ2NjI0MzEwZWVmNTIwM2I0ODFkYTdmZDAxMmQ_OTU1 M2M3MTBiMWI3ZjhmOWUzNDA3ZTVlMDJmYWRmOWRkMTc_OTMx MGNmYjBhNDEwOWQ1M2YyMzcyNjVhYmQ5MzBiYjM1ZmE_OTI4 NzFjOTMzYzIyM2YzMzdhM2NhM2ExNzJhNjAwZDliMTc_ODU2 M2MxZjhlNzA4YWY1MjA3NzYwNjE2YzJjZjJkMmI2NjQ_OTkx OTBmNmQ5ODA1MjQ3ZTYxNzRiNDA2Mjk3YTNiNTUwZDE_OTg4 Y2RmM2M2ZWYyNWZlMDVmNTBhNzgzODQ1ZGQxM2ZkZDU_OTg1 MDIzYjAwODgzMDdhNmVkZDg2NDZkMjlmYjM1OWVhNTE_MTAxOQ MDRjN2Y5MGVkNTA5N2I4OGRmMDgwMmE2NTIyNGM0Njk_MTAzNA NzM4ODI4ZGNjY2JjOTZiOGQwYTc4ZWY3ZjY5OWY3Zjc_MTA3NA NGNkZmZhYjFmMzIxMjM3MjdiNzM0MDQyNGFmYmEyNWQ_MTA3Nw NzhkODVkNzQ1OGVkNzYwYTY5MGRhY2ZlMzA2MzJkMGY_MTA4Mw YTBlNGZlNTE1ZjA1YThiY2RkZWQ0ZDBmMWRiNWJjNTg_MTA4MA ZTZiMDE1YjA1OTliMTJkYjE3ZGE2YWRhNmNkZmVjZTQ_MTA4Ng NDliODM4ODBmZjY2ZTliNDYwYThkMWQwNjM4ZGUzMTk_MTExOA NGU3NTJmNTM3M2I1ZTQ0MDhiN2MyNjdmOGJlZjRiYTA_MTEyNA OWJhZWJjNjdiYjVhYTBkNzMyZjhhMTUyY2MxNDJhN2I_MTEyNg YmMyYmIxMWVhNWQ5YjkxYzE5ZjczNDk5NmU3YmQ1ZmI_MTEyOA MjM1Zjc1MTAxZDZjMzU3ZDI4NDYxMTg5MTI4NTYyMDU_MTEzMA ZTI2YWQxOTRmZjY4YmJjZTBlYjk3MDE4MDRjODE4NDA_MTEzNg YjdkMGFkNjc1ZWQzMzQ2MTg4NDNmN2RlOThlNzYwMWE_MTEzMw Y2VmOWVmY2VhNWM0NzZhZjE5NjE1YzQxMzI2ZDg2ZGY_MTM2NQ ODRmOWEwN2ViOTcwYmE1Mzg1YjQyMmNmNWMyOTIzY2Y_MTM2Mg NWYzMjY4OWYyYjI2OGFkZWY4NDNkMDQwMmY4YWNhOTE_MTM1OQ MDYwYTEyMmU5MmU1YzdhNTg0ZWU5MDNmNDcyZGQzNDg_MTM1Ng YmFmMzI3N2EyMDYyZjMwNWU0ZDE5YzhlMzhhMzdhZjY_MTM1Mw MzkzNDg5OWI5MGQ1YTk4NTBlNjg5Y2I2M2I3MWUwNTc_MTQ4Mw NzYwZDhjMzU1ZjRjNWExYWRjMWM3MzQ3MzkzY2YxMzQ_MTY5MA NjFlYjM3OWIxNDRjY2U5MmE1YTAzYzY0YmQ0Zjc4ZGE_MTgxNg YjM1YWIxMWNkZDk5NTcwYTcyYWYyOWM5NjcwZmM1Mzk_MTkzOQ YzQ0MzgzNGNhMDIxMjVhMGExNWM2YTBiMjRkZTI4ZWQ_MTk0Mg YjI2NzhhMDMzMDY2OTVhNzUyZmYyYjM5NTRmN2QzZDc_MTk0NQ N2JhODc3Y2U3NTJkNTI4Yjc4NmZiMTdjYzFlNDJhYWU_MTIyMQ ZDMwYzA2NTg5NTBiNmU0MzMyMDU4MjQ4OGZhZjQ0MjQ_MjM5NQ MGYzNWQyMzlhN2U0NThlMGQ3OTNiYTMwYzQ3ZmU3NmI_MjUyOQ YjcxYjg4ODFlYmUwNmYwYWM0ZWVhZWYzZGRlMWExYjY_MjUzOQ YTg0ZmRmMDg5ZjM4MjI2NzkyZWUzODMwYzExNmNjZjc_MjY0MQ MDIzODI5OGQ1ZDI5NDY3MjI4MjVhZDAxOWU5YTMyMzQ_MjgxMQ ODU0NjY0MDQwNmUzNTRiOWYwODhkYTQ2NGVlNDgxZDA_MjgzNg YmNjNDZhZjY2YThkYTllYTVlMDlmYThmNWM2ZDEzOTc_Mjk0Nw YzA3ZjNhNzE1NzM3ZDYyMjNmNTMyNDE4M2E0NjY1MzY_MzAyNQ NjkwOWIyOTVkOTkyNzVhODI1ODEyMmRmYzA0YmUwOWU_MzA4OA MDZiYWRiODMyODhiMDkxMWE5YzM2MGJkNDBiYmMwNGM_MzA5MQ YTc4YzZhOGIwN2U0ZjVjZTBkOGNlNTQ1ZWJkMGZhMTc_MzA5NA NzFlYzcyMDJmYzlhODE0NzVmNTM2NWQ3MzJiZjBmMjc_MzA5Nw NjNkNDgyZjU4YTJhZGE5ZTY2NGM4MTc4ZDQyNDk2Zjk_MzEwMA YTQ1MDkxYmJiZjgxOGFkNDdlNGQzZTgwMWIxMjc1ZDE_MzE2Ng MGE0OTJhMzc0YjZmOGQ5YjRlNWE1MTc4OTkwMDk2Y2Y_MzIxNA Y2I2YjBkNjVkZTA5M2U1NGQ3ZTY2YjkwYTQ1NTI1ZWY_MzIxNw YjE1NTVlOGZhY2YyYTAxZmVjYWJiNDQ1NzYzZTExOTM_MzI0NA ZWU3YjlhZWMyMmVmYzk1MDdiY2E2NDJhZTM1YmZiM2Q_MzI0Nw OTQyM2VhYzkyZWJmNGY5MWJiNDE1ZTBhNGJjMTFmM2U_MzI1MA YmMwYTA5NzAyYTA4MTQwMzMzYTMzNWFjYWI5MjM3MTA_MzI1Mw YzliYjJkMmVhMWRlNmU5Y2Q2NDA0YjU1ZjJlMDgzNTg_MzI1Ng YjEyNWI0N2Y1NzE4M2Q0ZTAxYWQ3MmI3OWEzMDc5ODM_MzI1OQ OTMxMmQ3ZDg4ZDY5MTEzMmJiZGIwYjc4YzY0ZDM1MzA_MzI5OA YTcxYWY5ZTYwNzcwN2ZkMzZmNWUyODdhMjdkNjk2MWM_MzMwMQ N2RjOThkZWEzMDhkOTgyMzdjZGEzMTcwODU3MDEyODA_MzM0OQ MzVlNmJjNDU1ODc4YzAwNzIxNDNhNjMzYzljNWNhZmM_MzM1OA MzczNmVhMTlhZTlhNDY3YTg1MjhlMzEyYzFiN2MyNGE_MzM2MQ NmRjMjUyYmU2NGZhOWUzZTU4NDM2MDY3MDIwODk2NWY_MzM5NA NjQ3ZGZmYzcwNTQ3Zjk4ZjZhY2I4ZTQ1ZmMzMGY4Yzk_MzM5Nw MzEzY2U3NjBmYWM0MTZlZmRlN2YwMDAyOGZkNGZlMzU_MzQzNw MGQxMGZjMTA4NjViZDhjYzEzMDgxZTVmMWYzYTI2OGQ_MzQzNA NjgzNWIyMzA3YzVhNzA4NjMzZDU5MTBlZjFkMWE3MDk_MzQ2NA NmJkNTA5YmJmNWRjYWNmZDFhNGI4Y2RiOWMxMzVlYmE_MzQ2Nw OGU1NWQxYThlYjFjMzgxMzY2ZGRjNjI2MTdhZWQyYTk_MzUxNA ODQ0ODUxZjY1MmJlNmZkNThmMjM1Nzk1MmNmYmYyNDM_MzUxNw NmI1ZjE1NzA0YmExMGUwMGRmNzFhNmRjYzM0NDEzNWY_MzUyMA Y2U5ODIxYWI5MmQ3ZGMyZGQzNGEzY2E3MmQyZDlhOTM_MzUzNQ OGNkZDAwOTZhOTc0NjRkOGYyNGFlZjNhYWQxNjcxNWQ_MzUzOA NjZjMTkyNGE3ZjE2NzRmY2Y4MDA2YjE4YjZhNmUzNjE_MzU0MQ ZWEzOWFmMjk4NmFlZjAyM2M2ZGQ2NjAyOWM2ODU4ODU_MzU0NA OThlMzJlMmIzZDY4MzMwNzQyOWNmYWYzZDNkNzdiMjg_MzU2Mg NDFhY2RkYzRmMmY3MjQ2YzA4MDA1MTgzMTY5YzYzZWU_MzU4Mw MjViYzE2MmM4OGI5NDBmNTUxOTg1NmJlMzFkZmM3ZTQ_MzU4Ng ODQ2YTc3YzEwYTg0NTI0YTU4OGIxYzg3NzAxODcyNDU_MzU4OQ OWFmMTRjMjViMDZlMjBhM2JmMmNhNDAyOTAzMWY4ODY_MzU5Mg YmFmN2IwNGNkNzRlYTAxODdiMTg5OGE5MmZkMmFmN2Y_MzU5NQ OTlmYjJhMzdmZGJiNTJmMGI4NmRlMDM2OWVjOWNhM2Y_MzYwMQ YWFlOTFkYjUwMjE5NjBlODVkOWU2NThmNWYwZDEzZGE_MzYxNw N2FlYjQ0NGYyNjczN2RjZmYyODU0MTcyYmUxOWZkZGI_MzYzNQ OWVkODllZTc0ZTU1OWMzYzQwZDFlOGExYmI4MzI3YjQ_MzY1OQ N2FlYjQ0NGYyNjczN2RjZmYyODU0MTcyYmUxOWZkZGI_MzYzNQ NDBhZjY5YzkzODc5YTMzYjU5NjNlODY1ZTdlMTJhZjg_MzY2Mg MGI3ZTAxY2Y2MGNjYzdjM2RlOTI3ODBmYTI2YTJkMDQ_MzczOQ NjQwZjA3Y2RkMWIwZmM0YTdmZDAwODM5NmY5Zjk0ZDI_Mzc5Mw ZDNhNmI2NjMwZTRhMzgxZTMxYWRhMTc3MTBiZTNmZTY_MzgwOA MWNkM2JmYThmYjFkYWFhZDViOGFlNTk0NGM3YzRmZGE_Mzg1Ng YTg0NzMyMGFmNjUyZThmYmZhN2NiNDk2MDY4YzQyYTA_Mzg1OQ MzFhODQwN2RmYmUwNDYyM2JmNDQyNzQxZWY5M2YxZmQ_Mzg2OA ODUyOWNhYmFjMzQxNTU2YmNmMDkzYzVkNjI2NTlmZTM_Mzg3MQ YzkxMDQ5NDhhNTNkNDg1ZTAzNDMzNDIyN2I2MjZlYWM_Mzg5NQ YjU2OTkzNzVhZTdmOGMyN2RjYzViYTdjMGUwOGM4NWU_Mzg5OA YTg1OTM3ZjZiZDc5ZmZmOTY5MjQzOWU2MzNlZmE1MmM_Mzk5MQ MTMwYjRhMzMwODg1N2YwYmQzYzE1ZTllNzZiNzcyY2U_Mzk5NA YTUwOWY4ZmNmMDUwOTJmNDdkYzQ4NTY5MmU2ZWFhODk_NDAxNQ YTcxNjdiZTU1ODlmNzg5OTFlZDYxMmViZDFlMWRjNWE_NDAxOA".split(" ");
                if (E(b)) {
                    b = b.trim();
                }
                if (b != "" && b != null && typeof b != "undefined") {
                    for (var f = 0; f < e.length && (!this.a.f.hasOwnProperty("partner_id") || this.a.f.partner_id != 1060857); f++) {
                        if (-1 < b.indexOf(e[f])) {
                            b = "";
                            break;
                        }
                    }
                }
                if (b != "" && b != null && typeof b != "undefined") {
                    if (this.a.ta() && window.location.search.indexOf("aju")) {
                        this.Pd("aju_" + b, this.b.key, "display");
                    } else if (this.a.ta() && window.location.search.indexOf("obcas")) {
                        this.Pd("obcas_" + b, this.b.key, "display");
                    } else if (this.a.ta() && window.location.search.indexOf("kobieceinspiracje")) {
                        this.Pd("ki_" + b, this.b.key, "display");
                    } else {
                        this.Pd(b, this.b.key, this.b.displayAs);
                    }
                }
            }
            try {
                this.ia("start");
                this.ia("creativeView");
            } catch (g) {}
            if (this.video != null && (this.video.volume == 0 || this.video.muted)) {
                try {
                    this.ia("mute");
                } catch (g) {}
            }
        }
    };
    P.eh = function() {
        this.a.log(this.c, "onLoad");
        this.pa = false;
        this.$a = true;
        try {
            if (this.u.a.ta()) {
                window.parent.postMessage("player-ad-playing", "*");
            }
        } catch (a) {}
    };
    P.hh = function() {
        this.a.log(this.c, "onLoadstart");
        this.pa = false;
        this.$a = true;
        try {
            if (this.u.a.ta()) {
                window.parent.postMessage("player-ad-playing", "*");
            }
        } catch (e) {}
        if (this.a.fa && !this.a.controls.ba.W()) {
            this.a.controls.ba.show();
            this.a.controls.U.m();
            this.play();
        }
        var a = this;
        var b = window.setTimeout(function() {
            a.Kd = true;
            window.clearTimeout(b);
            b = null;
        }, 1e3);
        if (y(this.ya)) {
            this.ya = window.setTimeout(function() {
                window.clearTimeout(a.ya);
                a.ya = null;
                return a.Ya(a.error.ai);
            }, 8e3);
        }
        this.a.controls.Ra(0);
        this.a.controls.Eb(0);
    };
    P.lm = function() {
        this.a.log(this.c, "onLoadedMetaData");
        try {
            if (this.u.a.ta()) {
                window.parent.postMessage("player-ad-playing", "*");
            }
        } catch (a) {}
        if (!y(this.ya)) {
            window.clearTimeout(this.ya);
            this.ya = null;
        }
        if (!z(this.video.duration)) {
            this.pa = true;
            this.Kd = false;
            this.duration = isNaN(this.video.duration) ? 0 : this.video.duration;
        }
        this.a.controls.Ra(0);
        this.a.controls.Eb(0);
    };
    P.Hj = function() {
        this.a.log(this.c, "onLoadedData");
        if (!y(this.ya)) {
            window.clearTimeout(this.ya);
            this.ya = null;
        }
        if (!z(this.video.duration)) {
            this.pa = true;
            this.Kd = false;
            this.duration = isNaN(this.video.duration) ? 0 : this.video.duration;
        }
        this.a.controls.Ra(0);
        this.a.controls.Eb(0);
    };
    P.Pe = function() {
        this.a.controls.F(true);
    };
    P.de = function() {
        var a = this.video;
        if (a.buffered !== "undefined" && 0 < a.buffered.length && a.buffered.end !== "undefined") {
            a = a.buffered.end(a.buffered.length - 1) / this.M() * 100;
            if (100 < a) {
                a = 100;
            } else if (0 > a) {
                a = 0;
            }
            this.a.controls.Wc(a);
        } else {
            this.a.controls.Wc(0);
        }
    };
    P.dh = function() {
        this.a.log(this.c, "onCanplay");
        try {
            if (this.u.a.ta()) {
                window.parent.postMessage("player-ad-playing", "*");
            }
        } catch (a) {}
        if (this.a.controls.ba.W()) {
            this.a.controls.F(false);
            this.a.controls.U.show();
        }
        if (!y(this.ya)) {
            window.clearTimeout(this.ya);
            this.ya = null;
        }
        if (isNaN(this.duration) || 0 >= this.duration || !D(this.duration)) {
            this.duration = isNaN(this.video.duration) ? 0 : this.video.duration;
        }
        if (this.autoplay && this.$a && this.pa && this.video.paused) {
            this.Kd = this.$a = false;
            this.a.controls.Z(true);
            this.Qb();
        }
        if (this.autoplay && this.pa && 2 < this.kb && 0 >= this.l()) {
            this.video.muted = "muted";
            this.video.autoplay = "autoplay";
            this.Qb();
        }
    };
    P.Le = function() {
        this.a.log(this.c, "onCanplaythrough");
        try {
            if (this.u.a.ta()) {
                window.parent.postMessage("player-ad-playing", "*");
            }
        } catch (a) {}
        if (this.a.controls.ba.W()) {
            this.a.controls.F(false);
            this.a.controls.U.show();
        }
        if (!y(this.ya)) {
            window.clearTimeout(this.ya);
            this.ya = null;
        }
        if (isNaN(this.duration) || 0 >= this.duration || !D(this.duration)) {
            this.duration = isNaN(this.video.duration) ? 0 : this.video.duration;
        }
        if (this.autoplay && this.$a && this.pa && this.video.paused) {
            this.Kd = this.$a = false;
            this.a.controls.Z(true);
            this.Qb();
        }
        if (this.autoplay && this.pa && 2 < this.kb && 0 >= this.l()) {
            this.video.muted = "muted";
            this.video.autoplay = "autoplay";
            this.Qb();
        }
    };
    P.Ya = function(a, b) {
        this.a.log(this.c, "onAdError", arguments);
        this.u.gb = false;
        this.uh();
        window.clearTimeout(this.Fb);
        this.Fb = null;
        window.clearInterval(this.qb);
        this.qb = null;
        window.clearTimeout(this.ya);
        this.ya = null;
        this.a.v.m(this.a.v.bb);
        this.a.v.m(this.a.v.re);
        this.a.v.m(this.a.v.la);
        this.a.v.m(this.a.v.Aa);
        if (!this.a.h.H()) {
            this.video = null;
        }
        return this.u.Ya(a, b);
    };
    P.Cc = function() {
        this.a.log(this.c, "onAdComplete");
        this.u.ma("Koniec reklamy");
        this.u.hd++;
        if (!y(this.Ha) && B(this.Ha)) {
            if (this.Ha.type == "vast") {
                this.u.Xb++;
                return this.u.Ve(this.Ha);
            }
            if (this.Ha.type == "pool") {
                this.u.Xb++;
                return this.u.Bf(this.Ha.tag, true);
            }
        }
        return this.u.Cc();
    };
    P.lj = function() {
        this.a.log(this.c, "onAdSkipped");
        this.u.ma("Reklama przewini\u0119ta");
        try {
            this.ia("skip");
        } catch (a) {
            this.a.log(this.c, a);
        }
        if (this.video.muted || this.video.volume == 0) {
            this.video.muted = false;
            this.video.volume = .1;
            this.nh();
        }
        return this.u.lj();
    };
    P.random = function(a, b) {
        return Math.random(Math.random() * (b - a) + a);
    };
    P.Pd = function(a, b, e) {
        this.a.log(this.c, "adHit", arguments);
        if (this.a.V !== null && this.Md === false) {
            var f = this;
            try {
                window[this.a.V.client].zliczReklame(a, b, e, {
                    success: function(a) {
                        f.Md = true;
                        f.a.log(f.c, "adHit", "response: " + a);
                    },
                    error: function(a) {
                        f.a.log(f.c, "adHit", "erorr: " + a);
                    }
                });
            } catch (g) {
                this.a.log(this.c, "adHit", "error: " + g);
            }
        }
    };
    P.Dc = function() {
        return window.open("https://premium.cda.pl/rejestracja?cd2_sid=1&cd2_n=baner-wideoadpremium&cd2_hash=40fc7a5638fc18189a3a00d9892e30fde92da781", "_blank");
    };
    P.Cd = function() {
        if (this.Hd) {
            try {
                this.ia("skip");
            } catch (a) {
                this.a.log(this.c, a);
            }
            if (this.video.muted || this.video.volume == 0) {
                this.video.muted = false;
                this.video.volume = .1;
                this.nh();
            }
            clearTimeout(this.Fb);
            this.Fb = null;
            window.clearInterval(this.qb);
            this.qb = null;
            this.Gd = false;
            this.Zc().m();
            this.a.view.Aa.m();
            this.gf = true;
            if (A(window.videoAdSkip)) {
                window.videoAdSkip(this.a.id);
            }
            return this.Ad();
        }
    };
    P.se = function() {
        this.a.log(this.c, "check autoplay");
        if (this.video != null && !(0 < this.l()) && !(2 < this.kb)) {
            this.kb += 1;
            this.video.muted = true;
            this.video.autoplay = "autoplay";
            this.a.video.muted = true;
            this.a.Ab = true;
            this.a.J(0, true);
            this.a.controls.J(0, true);
            this.a.controls.F(true);
            this.play();
            this.sg();
        }
    };
    P.md = function() {
        this.a.log(this.c, "check scroll");
        this.play();
        this.Re();
    };
    P.Re = function() {
        if (!z(this.i.ve)) {
            U(window, "touchstart", this.i.ve);
        }
        if (!z(this.i.ue)) {
            U(window, "scroll", this.i.ue);
        }
        if (!z(this.i.te)) {
            U(window, "resize", this.i.te);
        }
    };
    P.sg = function() {
        this.i.ve = T(window, "touchstart", this.md, this);
        this.i.ue = T(window, "scroll", this.md, this);
        this.i.te = T(window, "resize", this.md, this);
    };
    P.$l = function() {
        var a = new Image(1, 1);
        a.onload = a.onerror = function() {
            delete a;
        };
        a.src = "https://g.cda.pl/g.php?pixel&vi=NjZjNTc3NGY4OWY0MzRkNjkwZWY3M2JjNTkzODYxMmM_MzQ4Mg&pl=clickTracking&ct=" + (new Date).getTime();
    };
    P.Yl = function() {
        var a = new Image(1, 1);
        a.onload = a.onerror = function() {
            delete a;
        };
        a.src = "https://g.cda.pl/g.php?pixel&vi=OGRmNjFkYTU4MDg0MjJkMmQ5NWYzNjMwZjhjODQ4Y2U_MzQ4NQ&pl=clickTracking&ct=" + (new Date).getTime();
    };
    P.Je = function() {
        var a = new Image(1, 1);
        a.onload = a.onerror = function() {
            delete a;
        };
        a.src = "https://g.cda.pl/g.php?pixel&vi=YzhhMjg5ZTQzMWQ1Mjg1Njk4NDRlYzU0ZDdhZGI0YTE_Mzg0MQ&pl=clickTracking&ct=" + (new Date).getTime();
    };
    P.am = function() {
        var a = new Image(1, 1);
        a.onload = a.onerror = function() {
            delete a;
        };
        a.src = "https://g.cda.pl/g.php?pixel&vi=NjZjNTc3NGY4OWY0MzRkNjkwZWY3M2JjNTkzODYxMmM_MzQ4Mg&pl=impression&ct=" + (new Date).getTime();
        var b = new Image(1, 1);
        b.onload = b.onerror = function() {
            delete b;
        };
        b.src = "https://ad.doubleclick.net/ddm/trackimp/N873153.1864356CDA.PL/B21115792.289352162;dc_trk_aid=482758879;dc_trk_cid=141063125;ord=" + (new Date).getTime() + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}?";
    };
    P.Zl = function() {
        var a = new Image(1, 1);
        a.onload = a.onerror = function() {
            delete a;
        };
        a.src = "https://g.cda.pl/g.php?pixel&vi=OGRmNjFkYTU4MDg0MjJkMmQ5NWYzNjMwZjhjODQ4Y2U_MzQ4NQ&pl=impression&ct=" + (new Date).getTime();
        var b = new Image(1, 1);
        b.onload = b.onerror = function() {
            delete b;
        };
        b.src = "https://ad.doubleclick.net/ddm/trackimp/N873153.1864356CDA.PL/B21115792.289352162;dc_trk_aid=482682062;dc_trk_cid=141063125;ord=" + (new Date).getTime() + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}?";
    };
    P.bh = function() {
        var a = new Image(1, 1);
        a.onload = a.onerror = function() {
            delete a;
        };
        a.src = "https://g.cda.pl/g.php?pixel&vi=YzhhMjg5ZTQzMWQ1Mjg1Njk4NDRlYzU0ZDdhZGI0YTE_Mzg0MQ&pl=impression&ct=" + (new Date).getTime();
    };
    P.kj = function() {
        try {
            window.open("https://ad.doubleclick.net/ddm/trackclk/N542601.3487212LEVELUPDISPLAY/B23796369.266785103;dc_trk_aid=465732965;dc_trk_cid=130809051;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=", "_blank");
            return true;
        } catch (a) {}
    };
    P = La.prototype;
    P.Jk = function() {
        if (typeof this.zf.createElement === "function") {
            return this.zf.createElement("video");
        } else {
            return false;
        }
    };
    P.video = function() {
        var a = this.Jk();
        var b = false;
        if (typeof a === "object") {
            try {
                if (typeof a.canPlayType === "function") {
                    b = !!a.canPlayType;
                    b = new Boolean(b);
                    b.vl = a.canPlayType('video/mp4; codecs="avc1.4D401E, mp4a.40.2"').replace(/^no$/, "");
                    b.jq = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "");
                    b.rp = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "");
                    b.fq = a.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, "");
                    b.$o = a.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, "");
                }
            } catch (e) {}
        }
        return b;
    };
    P.ol = function() {
        var a = false;
        var b = window.navigator;
        if ("ActiveXObject" in window) {
            try {
                a = !!new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            } catch (e) {}
        } else {
            try {
                if (typeof b.plugins !== "undefined" && typeof b.plugins["Shockwave Flash"] === "object" && typeof b.mimeTypes !== "undefined" && b.mimeTypes["application/x-shockwave-flash"] !== "undefined" && b.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
                    a = true;
                }
            } catch (e) {}
        }
        return a;
    };
    P.fullScreen = function() {
        var a = ["fullscreenEnabled", "fullScreenEnabled", "mozFullScreenEnabled", "webkitFullscreenEnabled", "msFullscreenEnabled"];
        for (var b = 0; b < a.length; b++) {
            if (typeof this.zf[a[b]] !== "undefined") {
                return this.zf[a[b]];
            }
        }
        return false;
    };
    P.yl = function() {
        try {
            if (!y(window.frameElement) || window.self != window.top) {
                return true;
            }
        } catch (a) {
            if (window.self != window.top) {
                return true;
            }
        }
        return false;
    };
    P = function(a) {
        if (y(a) || z(a)) {
            throw new TypeError("Options can not be null.");
        }
        this.c = "cda.Player.Flash";
        this.T = a.id;
        this.options = a;
        this.In = "/jw5/jw5.js";
        this.protocol = window.location.protocol;
        this.a = null;
        this.xa();
    }.prototype;
    P.xa = function() {
        if (typeof window.jwplayer === "function") {
            this.a = window.jwplayer(this.options.id);
            this.Ch();
        } else {
            this.load();
        }
    };
    P.load = function() {
        var a = document.getElementsByTagName("head")[0] || document.head || document.documentElement;
        var b = document.createElement("script");
        var e = this;
        b.src = this.In;
        b.type = "text/javascript";
        b.async = true;
        b.onload = b.onreadystatechange = function() {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                b.onload = b.onreadystatechange = null;
                if (a && b.parentNode) {
                    a.removeChild(b);
                }
                e.xa();
            }
        };
        b.onerror = function() {
            e.xa();
        };
        a.insertBefore(b, a.firstChild);
        a.appendChild(b);
    };
    P.Ch = function() {
        var a = 620;
        var b = 371;
        if (qa() && -1 < window.location.href.indexOf("ebd.cda.pl")) {
            b = ta();
            a = b.width;
            b = b.height;
        }
        if (this.options.video.file.indexOf("http") == -1) {
            this.options.video.file = L(this.options.video.file);
        }
        if (this.options.video.file.indexOf(".mp4") == -1) {
            this.options.video.file += ".mp4";
        }
        if (-1 < this.options.video.file.indexOf("adc.mp4")) {
            this.options.video.file = this.options.video.file.replace("adc.mp4", ".mp4");
        }
        this.a.setup({
            width: a,
            height: b - 19,
            "logo.file": "//static.cda.pl/v001/img/player/logo-player-creme.png",
            "logo.position": "top-left",
            "logo.link": "",
            "logo.hide": false,
            "logo.over": .7,
            "logo.out": .4,
            dock: true,
            autostart: this.options.autoplay,
            "controlbar.position": "bottom",
            "controlbar.idlehide": "false",
            modes: [{
                type: "flash",
                src: "//static.cda.pl/player5.9/player.swf",
                config: {
                    file: this.options.video.file,
                    duration: this.options.video.durationFull,
                    provider: "http"
                }
            }],
            plugins: {
                "https://static.cda.pl/timeslidertooltipplugin.swf": {
                    marginbottom: 0
                }
            }
        });
    };
    P.Ep = function(a, b, e) {
        return {
            "http://static.cda.pl/ova-jw.swf": {
                canFireEventAPICalls: true,
                useV2APICalls: true,
                overlays: {
                    regions: [{
                        id: "czas",
                        verticalAlign: "bottom",
                        horizontalAlign: "center",
                        backgroundColor: "black",
                        width: 250,
                        height: 20,
                        padding: "0 0 -10 2",
                        opacity: .7
                    }]
                },
                debug: {
                    levels: "fatal, config, vast_template, vpaid, http_calls"
                },
                ads: {
                    skipAd: {
                        enabled: b,
                        showAfterSeconds: 5,
                        image: "http://static.cda.pl/images/close-btn-video3.png",
                        width: 22,
                        height: 17
                    },
                    notice: {
                        message: '<p class="smalltext" align="center">Reklama zniknie za _countdown_ sekund</p>',
                        type: "countdown",
                        region: "czas"
                    },
                    schedule: a,
                    clickSign: {
                        html: "KLIKNIJ",
                        width: 62,
                        enabled: e
                    },
                    companions: {
                        restore: false,
                        regions: {
                            id: "companion" + (new Date).getTime(),
                            width: 1,
                            heigth: 1
                        }
                    }
                }
            }
        };
    };
    P.Ue = function() {};
    P = function(a) {
        if (y(a) && z(a)) {
            throw new TypeError("Options can not be null.");
        }
        this.c = "cda.Player.Flash.SF";
        this.id = a.id + "-flash";
        this.T = document.querySelector("#" + a.id);
        this.options = a;
        this.a = null;
        this.pf = 0;
        this.Kk = this.options.flash.swf;
        this.ji = this.options.flash.js;
        this.xa();
    }.prototype;
    P.xa = function() {
        if (A(window.flowplayer)) {
            this.Ch();
        } else {
            this.load(this.ji[0], function() {
                this.load(this.ji[1], function() {
                    this.xa();
                }.bind(this));
            }.bind(this));
        }
    };
    P.load = function(a, b) {
        var e = document.getElementsByTagName("head")[0] || document.head || document.documentElement;
        var f = document.createElement("script");
        var g = this;
        f.src = a;
        f.type = "text/javascript";
        f.async = true;
        f.onload = f.onreadystatechange = function() {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                f.onload = f.onreadystatechange = null;
                if (e && f.parentNode) {
                    e.removeChild(f);
                }
                b();
            }
        };
        f.onerror = function() {
            g.xa();
        };
        e.insertBefore(f, e.firstChild);
        e.appendChild(f);
    };
    P.ib = function(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        a = new RegExp("[\\?&]" + a + "=([^&#]*)").exec(window.location.href);
        if (a == null) {
            return null;
        } else {
            return a[1];
        }
    };
    P.al = function() {
        return {
            canvas: {
                backgroundGradient: "none",
                borderRadius: 20
            },
            key: "#$13db964f8eb518e52fc",
            play: {
                opacity: 1
            },
            wmode: "opaque",
            clip: {
                autoplay: this.options.autoplay,
                url: this.options.video.file,
                scaling: "fit",
                provider: "pseudo",
                duration: this.options.video.duration,
                metadata: false,
                autoBuffering: false
            },
            logo: {
                url: this.options.logo,
                linkUrl: "http://superfilm.pl",
                linkWindow: "_blank",
                fullscreenOnly: false,
                displayTime: 0,
                fadeSpeed: 0,
                top: 5,
                right: 5,
                opacity: "0.7"
            },
            plugins: {
                pseudo: {
                    url: "/flowplayer/flowplayer.pseudostreaming-3.2.12.swf"
                },
                controls: {
                    bufferGradient: "none",
                    volumeSliderColor: "#ffffff",
                    durationColor: "#a3a3a3",
                    timeColor: "#ffffff",
                    sliderGradient: "none",
                    callType: "default",
                    sliderColor: "#000000",
                    timeBorder: "0px solid rgba(0, 0, 0, 0.3)",
                    timeBgColor: "rgb(0, 0, 0, 0)",
                    volumeColor: "#ffffff",
                    progressColor: "#BD0F1C",
                    bufferColor: "#BD0F1C",
                    progressGradient: "none",
                    scrubberBarHeightRatio: "0.6",
                    scrubberHeightRatio: "0.38",
                    tooltipColor: "#000000",
                    buttonOffColor: "rgba(130,130,130,1)",
                    timeSeparator: " ",
                    borderRadius: "0",
                    buttonOverColor: "#ffffff",
                    backgroundColor: "#222222",
                    tooltipTextColor: "#ffffff",
                    disabledWidgetColor: "#555555",
                    volumeBorder: "1px solid rgba(128, 128, 128, 0.7)",
                    sliderBorder: "1px solid rgba(128, 128, 128, 0.7)",
                    buttonColor: "#ffffff",
                    volumeSliderGradient: "none",
                    backgroundGradient: "none",
                    height: 42,
                    opacity: "1.0",
                    autoHide: {
                        fullscreenOnly: true,
                        hideDelay: 2e3
                    }
                },
                myContent: {
                    url: "/flowplayer/flowplayer.content-3.2.9.swf",
                    top: 5,
                    left: 5,
                    width: 275,
                    height: 30,
                    border: 0,
                    borderRadius: 0,
                    backgroundColor: "#000000",
                    zIndex: 9999,
                    style: {
                        ".title": {
                            "text-decoration": "outline",
                            fontSize: 12,
                            color: "#FFFFFF",
                            "font-weight": "bold",
                            "z-index": 99999
                        }
                    },
                    html: '<p class="title">Dzi\u0119ki tej reklamie ogl\u0105dasz legalnie i za darmo</p>'
                },
                myContent2: {
                    url: "/flowplayer/flowplayer.content-3.2.9.swf",
                    bottom: 47,
                    right: 5,
                    width: 195,
                    height: 30,
                    border: 0,
                    borderRadius: 0,
                    backgroundColor: "#000000",
                    zIndex: 9999,
                    style: {
                        ".title": {
                            "text-decoration": "outline",
                            fontSize: 12,
                            color: "#FFFFFF",
                            "font-weight": "bold"
                        }
                    }
                },
                myContent3: {
                    url: "/flowplayer/flowplayer.content-3.2.9.swf",
                    bottom: 47,
                    left: 5,
                    width: 100,
                    height: 30,
                    border: 0,
                    borderRadius: 0,
                    backgroundColor: "#000000",
                    zIndex: 9999,
                    style: {
                        ".title": {
                            "text-decoration": "outline",
                            fontSize: 12,
                            color: "#FFFFFF",
                            "font-weight": "bold"
                        }
                    }
                },
                ova: this.bl()
            }
        };
    };
    P.bl = function() {
        return {
            debug: {
                levels: "none"
            },
            url: "/flowplayer/ova.swf",
            player: {
                modes: {
                    linear: {
                        controls: {
                            enablePlay: false,
                            enablePause: false,
                            enableMute: true,
                            enableVolume: true
                        }
                    }
                }
            },
            autoPlay: true,
            delayAdRequestUntilPlay: false,
            canFireEventAPICalls: true,
            fireTrackingEvents: true,
            regions: {
                id: "adnotice",
                verticalAlign: "bottom",
                horizontalAlign: "right",
                backgroundColor: "transparent",
                height: 0,
                width: 0,
                style: ".normaltext { font-style: italic; font-size:40px; }"
            },
            ads: {
                pauseOnClickThrough: false,
                linearScaling: "fill",
                clickSign: {
                    html: '<p class="smalltext" align="center">KLIKNIJ</p>',
                    style: ".smalltext { font-size:12; margin-bottom:50px }"
                },
                notice: {
                    region: "adnotice",
                    message: '<p class="normaltext" style="color:green;" align="right"></p>'
                },
                schedule: [{
                    position: "pre-roll",
                    tag: window.encodeURIComponent("http://go.goldbachpoland.bbelements.com/please/showit/7502/1/1/43/?typkodu=js&_xml=1"),
                    type: "direct"
                }, {
                    position: "pre-roll",
                    tag: window.encodeURIComponent("http://myao.adocean.pl/ad.xml?id=Uq2mbZcb8fWVw3..rnMiwPKIL.ofr9BixO3PavJI363.E7/aocodetype=1"),
                    type: "direct"
                }, {
                    position: "pre-roll",
                    tag: window.encodeURIComponent("http://go.goldbachpoland.bbelements.com/please/showit/7502/1/1/43/?typkodu=js&_xml=1"),
                    type: "direct"
                }, {
                    position: "pre-roll",
                    tag: window.encodeURIComponent("http://myao.adocean.pl/ad.xml?id=Uq2mbZcb8fWVw3..rnMiwPKIL.ofr9BixO3PavJI363.E7/aocodetype=1"),
                    type: "direct"
                }]
            }
        };
    };
    P.Ch = function() {
        this.T.Ba('<div class="pb-flash-wrapper" id="' + this.id + '"></div>');
        try {
            this.a = window.flowplayer(this.id, {
                src: this.Kk,
                wmode: "opaque"
            }, this.al());
            this.a.ipad();
            this.rg();
        } catch (a) {
            this.log(a);
        }
    };
    P.rg = function() {
        this.a.onLoad(this.eh.bind(this));
        this.a.onResume(this.Sf.bind(this));
        this.a.onPause(this.kc.bind(this));
        this.a.onStop(this.Mm.bind(this));
        this.a.onStart(this.Lm.bind(this));
    };
    P.eh = function() {
        var a = this.ib("vol");
        if (!y(a) && a != "") {
            a = Number(a);
            if (0 <= a && 100 >= a) {
                this.a.setVolume(a);
            }
        }
        this.a.getPlugin("myContent").hide();
        this.a.getPlugin("myContent2").hide();
        this.a.getPlugin("myContent3").hide();
        this.pf = this.a.So().length - 1;
    };
    P.Sf = function() {
        this.a.getPlugin("myContent").hide();
        this.a.getPlugin("myContent2").hide();
        this.a.getPlugin("myContent3").hide();
    };
    P.kc = function() {
        this.a.getPlugin("myContent").hide();
        this.a.getPlugin("myContent2").hide();
        this.a.getPlugin("myContent3").hide();
    };
    P.Mm = function() {
        this.a.getPlugin("myContent").hide();
        this.a.getPlugin("myContent2").hide();
        this.a.getPlugin("myContent3").hide();
    };
    P.Lm = function(a) {
        if (!a.Fp) {
            this.a.getPlugin("myContent").hide();
            this.a.getPlugin("myContent2").hide();
            this.a.getPlugin("myContent3").hide();
        }
    };
    try {
        var Ha = function(a) {
            this.c = "cda.Player.Chromecast";
            this.a = a;
            this.Ia = this.Vf = this.jb = null;
            this.Qi = true;
            this.uf = false;
            this.ld = null;
        };
        P = Ha.prototype;
        P.Te = function(a) {
            this.a.log(this.c, "setView: " + a);
            if (a) {
                if (!this.a.view.content.I("pb-ccast-posible")) {
                    this.a.view.content.w("pb-ccast-posible");
                }
            } else {
                this.a.view.content.D("pb-ccast-posible");
            }
        };
        P.Ed = function(a) {
            this.a.log(this.c, "setIcon: " + a);
            if (a) {
                if (!this.a.view.Nc.I("pb-ccast-float-on")) {
                    this.a.view.Nc.w("pb-ccast-float-on");
                }
            } else {
                this.a.view.Nc.D("pb-ccast-float-on");
            }
        };
        P.Nn = function(a) {
            this.a.log(this.c, "set cast available: " + a);
            this.Qi = !!a;
        };
        P.Lo = function() {
            if (A(window.__onGCastApiAvailable)) {
                return window.__onGCastApiAvailable;
            } else {
                return null;
            }
        };
        P.Pg = function() {
            if (typeof window.chrome === "undefined") {
                this.a.log(this.c, "isApiAvailable: false");
                return false;
            }
            if (typeof window.chrome.cast === "undefined") {
                if (this.ld != null) {
                    window.clearInterval(this.ld);
                    this.ld = null;
                }
                this.ld = window.setInterval(this.a.C.G(this.Yk, this), 100);
                return false;
            }
            try {
                var a = window.chrome.cast && window.chrome.cast.isAvailable;
                return this.uf = a;
            } catch (b) {
                this.a.log(this.c, b);
                return false;
            }
        };
        P.Yk = function() {
            if (typeof window.chrome.cast !== "undefined" && window.chrome.cast.isAvailable) {
                if (this.ld != null) {
                    window.clearInterval(this.ld);
                    this.ld = null;
                }
                this.jc();
                this.uf = true;
                this.Te(this.uf);
            }
        };
        P.isConnected = function() {
            if (y(this.jb) || y(this.jb) || this.jb.status != window.chrome.cast.SessionStatus.CONNECTED || this.Ia == null) {
                return false;
            } else {
                return true;
            }
        };
        P.xa = function() {
            if ((!this.a.ea || !(-1 < this.a.ea.indexOf("redefine"))) && (!!this.a.h.Jf() || !!this.a.h.pd()) && !this.a.h.Ga()) {
                if (this.Pg()) {
                    this.jc();
                } else {
                    var a = this;
                    window.__onGCastApiAvailable = function(b) {
                        if (b) {
                            a.jc();
                        } else {
                            window.setTimeout(function() {
                                if (a.Pg()) {
                                    a.jc();
                                }
                            }, 1e3);
                        }
                    };
                }
                T(this.a.view.Vk, "click", this.Ec, this);
                T(this.a.view.Nc, "click", this.Ec, this);
            }
        };
        P.jc = function() {
            var a = new window.chrome.cast.SessionRequest("89B0DA1D");
            a = new window.chrome.cast.ApiConfig(a, this.a.C.G(this.Kn, this), this.a.C.G(this.Cn, this));
            window.chrome.cast.initialize(a, this.im, this.hm);
        };
        P.Cn = function(a) {
            this.a.log(this.c, "receiverListener: " + a);
            if (a == window.chrome.cast.ReceiverAvailability.AVAILABLE) {
                this.uf = true;
                this.Te(true);
            }
        };
        P.Kn = function(a) {
            this.jb = a;
            this.Vf = this.jb.status;
            if (0 < this.jb.media.length) {
                this.Ij(this.a.C.G(this.Oj, this), this.jb.media[0]);
            }
        };
        P.im = function() {};
        P.hm = function() {};
        P.Ec = function() {
            if (this.Qi) {
                if (this.isConnected()) {
                    this.Ed(true);
                    this.a.controls.Z(true);
                } else {
                    this.Ed(false);
                    if (this.a.getState() == this.a.state.ga) {
                        this.a.pause();
                    } else if (this.a.h.H()) {
                        this.a.video.load();
                    }
                }
                if (!y(this.jb)) {
                    this.Vf = this.jb.status;
                }
                if (this.isConnected()) {
                    this.Nm();
                } else {
                    window.chrome.cast.requestSession(this.a.C.G(this.Oj, this), this.km);
                }
            } else {
                alert("Materia\u0142 chwilowo niedost\u0119pny dla urz\u0105dzenia Chromecast.\n\nNajnowsza wersja Chromecast 2.0 oraz Chromecast 4K wraz z aktualizacj\u0105 1.28 przesta\u0142a wspiera\u0107 filmy wideo w formacie .mp4 i d\u017Awi\u0119kiem AAC 5.1 (wci\u0105\u017C dzia\u0142a .mp4 z d\u017Awi\u0119kiem stereo 2.0).\n\nZdecydowali\u015Bmy si\u0119 na zmian\u0119 formatu wideo z .mp4 na technologi\u0119 MediaSource z obs\u0142ug\u0105 d\u017Awi\u0119ku 5.1, analogicznie robi to np. serwis YouTube.\n\nJest to do\u015B\u0107 problematyczne rozwi\u0105zanie, kt\xF3re wymaga przekonwertowania wszystkich plik\xF3w, co zajmie kilkana\u015Bcie dni. Nie mniej jednak problem w najbli\u017Cszym czasie powinien znikn\u0105\u0107, prosimy o cierpliwo\u015B\u0107.");
            }
        };
        P.Oj = function(a) {
            this.jb = a;
            a = this.a.src;
            if (!a && this.a.ea) {
                a = this.a.ea;
            }
            if (this.a.Fh != null) {
                a = this.a.Fh;
            }
            if (this.a.ea) {
                a = this.a.ea;
                a = a.replace("/stereo", "");
                if (this.a.O) {
                    this.a.Be();
                } else if (this.a.o == null) {
                    this.a.Ff();
                }
            }
            this.a.log(this.c, "file: " + a);
            a = new window.chrome.cast.media.MediaInfo(a, "video/mp4");
            if (this.a.ea) {
                a.customData = {
                    licenseUrl: this.a.Sc,
                    licenseHeader: this.a.Db
                };
                if (this.a.O) {
                    a.streamType = window.chrome.cast.media.StreamType.LIVE;
                } else {
                    a.duration = this.a.f.duration;
                }
            }
            var b = new window.chrome.cast.media.MovieMediaMetadata;
            b.type = window.chrome.cast.media.MetadataType.MOVIE;
            if (this.a.f.hasOwnProperty("title") && this.a.f.title != null) {
                b.title = window.decodeURIComponent(this.a.f.title);
            }
            if (this.a.O) {
                b.images = [new window.chrome.cast.Image(this.a.ja.logo)];
                b.title = window.decodeURIComponent(this.a.ja.title);
            } else {
                b.images = [new window.chrome.cast.Image(this.a.f.thumb)];
            }
            a.metadata = b;
            a = new window.chrome.cast.media.LoadRequest(a);
            a.autoplay = true;
            if (!this.a.O) {
                a.currentTime = 0;
            }
            this.jb.loadMedia(a, this.Ij.bind(this, "loadMedia"), this.mm.bind(this));
        };
        P.Nm = function() {
            this.Vf == window.chrome.cast.SessionStatus.STOPPED;
            if (!y(this.Ia)) {
                this.a.video.currentTime = this.Ia.currentTime;
                this.a.controls.currentTime.innerHTML = this.a.controls.mc(this.Ia.currentTime);
                this.a.controls.ob.Za(100 / this.a.video.duration * this.Ia.currentTime + "%");
            }
            var a = this;
            this.jb.stop(function() {
                a.Ed(false);
                a.a.controls.qa(true);
            }, function() {});
        };
        P.xp = function() {
            this.a.view.Nc.D("pb-ccast-float-on");
        };
        P.wp = function() {
            this.a.view.Nc.D("pb-ccast-float-on");
        };
        P.km = function() {};
        P.Ij = function(a, b) {
            if (b != null && b.media.metadata.title == window.decodeURIComponent(this.a.f.title)) {
                this.a.view.Nc.w("pb-ccast-float-on");
                if (this.a.getState() == this.a.state.ga) {
                    this.a.pause();
                }
                this.Ia = b;
                this.Ia.addUpdateListener(this.nm.bind(this));
                if (0 < this.a.l()) {
                    this.cb(this.a.l());
                    a = this.a.video.volume;
                    this.J(100 * a, 0 >= a);
                }
                this.a.controls.Z(true);
            }
        };
        P.mm = function() {
            this.a.view.Nc.D("pb-ccast-float-on");
        };
        P.nm = function() {
            if (!y(this.jb)) {
                this.Vf = this.jb.status;
            }
            if (this.isConnected()) {
                if (this.a.getState() == this.a.state.ga) {
                    this.a.pause();
                }
                this.Ed(true);
            } else {
                this.Ed(false);
            }
            if (0 < this.jb.media.length) {
                this.Ia = this.jb.media[0];
                this.a.controls.currentTime.innerHTML = this.a.controls.mc(this.Ia.currentTime);
                this.a.controls.ob.Za(100 / this.a.video.duration * this.Ia.currentTime + "%");
            }
        };
        P.vp = function() {
            this.Ed(false);
            this.a.controls.qa(true);
        };
        P.play = P.resume = function() {
            if (!y(this.Ia)) {
                this.Ia.play(null, function() {}, function() {});
            }
        };
        P.pause = function() {
            if (!y(this.Ia)) {
                this.Ia.pause(null, function() {}, function() {});
            }
        };
        P.stop = function() {
            if (!y(this.Ia)) {
                this.Ia.stop(null, function() {}, function() {});
            }
        };
        P.cb = function(a) {
            if (!y(this.Ia)) {
                var b = new window.chrome.cast.media.SeekRequest;
                b.currentTime = a;
                this.Ia.seek(b, function() {}, function() {});
            }
        };
        P.J = function(a, b) {
            if (1 >= a) {
                a *= 100;
            }
            if (!y(this.Ia)) {
                var e = new window.chrome.cast.Volume;
                a = Number(a);
                if (0 < a) {
                    a /= 100;
                }
                e.level = a;
                e.muted = b;
                a = new window.chrome.cast.media.VolumeRequest;
                a.volume = e;
                this.Ia.setVolume(a, function() {}, function() {});
            }
        };
    } catch (a) {}
    (function() {
        var a = "";
        a = typeof window.document.querySelectorAll !== "undefined" ? window.document.querySelectorAll("div[id^='mediaplayer']") : function() {
            var a = window.document;
            var b = "mediaplayers";
            var e = [];
            b = new RegExp("(^| )" + b + "( |$)");
            a = a.getElementsByTagName("*");
            var f = 0;
            for (var g = a.length; f < g; f++) {
                if (b.test(a[f].className)) {
                    e.push(a[f]);
                }
            }
            return e;
        }();
        var b = "";
        var e = null;
        if (typeof La === "function") {
            e = new La;
        }
        if (e !== null) {
            if (e.video() && e.video().vl != "") {
                b = "html5";
            } else if (e.ol()) {
                b = "flash";
            }
        }
        if (e.yl()) {
            b = "html5";
        }
        if (window.navigator.userAgent.indexOf("Android") != -1) {
            b = "html5";
        }
        for (e = 0; e < a.length; e++) {
            if (a[e].hasAttribute("player_data")) {
                if (b === "html5" && typeof Q === "function") {
                    new Q(JSON.parse(a[e].getAttribute("player_data")), a[e]);
                } else {
                    a[e].innerHTML = '<!--googleoff: all--><div class="pb-info-error-plug"><img class="pb-resp-width-max" src="//static.cda.pl/v001/img/mobile/v16x9.png"><div class="pb-info-error-plug-txt">Aby ogl\u0105da\u0107 zaaktualizuj swoj\u0105 przegl\u0105dark\u0119.</div></div><!--googleon: all-->';
                    try {
                        var f = new Image(1, 1);
                        f.onload = function() {};
                        f.src = "https://g.cda.pl/g.php?pixel&vi=YmNiYjM2NTFlZjdjN2QxZGQzZGNkNmE3ZmIwMmQ2OWE_MTUyOA&pl=impression&ct=" + (new Date).getTime();
                    } catch (g) {}
                }
            }
        }
    }());
}.call(window));
