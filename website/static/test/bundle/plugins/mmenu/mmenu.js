! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var a = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(i, a, function(t) {
                return e[t]
            }.bind(null, a));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    n.r(t);
    var i = {
            hooks: {},
            extensions: [],
            wrappers: [],
            navbar: {
                add: !0,
                sticky: !0,
                title: "Menu",
                titleLink: "parent"
            },
            onClick: {
                close: null,
                preventDefault: null,
                setSelected: !0
            },
            slidingSubmenus: !0
        },
        a = {
            classNames: {
                inset: "Inset",
                nolistview: "NoListview",
                nopanel: "NoPanel",
                panel: "Panel",
                selected: "Selected",
                vertical: "Vertical"
            },
            language: null,
            openingInterval: 25,
            panelNodetype: ["ul", "ol", "div"],
            transitionDuration: 400
        };

    function s(e, t) {
        for (var n in "object" != o(e) && (e = {}), "object" != o(t) && (t = {}), t) t.hasOwnProperty(n) && (void 0 === e[n] ? e[n] = t[n] : "object" == o(e[n]) && s(e[n], t[n]));
        return e
    }

    function o(e) {
        return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }

    function r(e, t, n) {
        if ("function" == typeof t) {
            var i = t.call(e);
            if (void 0 !== i) return i
        }
        return null !== t && "function" != typeof t && void 0 !== t || void 0 === n ? t : n
    }

    function c(e, t, n) {
        var i = !1,
            a = function(n) {
                void 0 !== n && n.target !== e || (i || (e.removeEventListener("transitionend", a), e.removeEventListener("webkitTransitionEnd", a), t.call(e)), i = !0)
            };
        e.addEventListener("transitionend", a), e.addEventListener("webkitTransitionEnd", a), setTimeout(a, 1.1 * n)
    }

    function l() {
        return "mm-" + m++
    }
    var m = 0;

    function d(e) {
        return "mm-" == e.slice(0, 3) ? e.slice(3) : e
    }
    var p = {};

    function f(e, t) {
        void 0 === p[t] && (p[t] = {}), s(p[t], e)
    }
    var u = {
            Menu: "منو"
        },
        h = {
            Menu: "Menü"
        },
        v = {
            Menu: "Меню"
        };

    function b(e) {
        var t = e.split("."),
            n = document.createElement(t.shift());
        return t.forEach(function(e) {
            n.classList.add(e)
        }), n
    }

    function g(e, t) {
        return Array.prototype.slice.call(e.querySelectorAll(t))
    }

    function _(e, t) {
        var n = Array.prototype.slice.call(e.children);
        return t ? n.filter(function(e) {
            return e.matches(t)
        }) : n
    }

    function y(e, t) {
        for (var n = [], i = e.parentElement; i;) n.push(i), i = i.parentElement;
        return t ? n.filter(function(e) {
            return e.matches(t)
        }) : n
    }

    function L(e) {
        return e.filter(function(e) {
            return !e.matches(".mm-hidden")
        })
    }

    function w(e) {
        var t = [];
        return L(e).forEach(function(e) {
            t.push.apply(t, _(e, "a.mm-listitem__text"))
        }), t.filter(function(e) {
            return !e.matches(".mm-btn_next")
        })
    }

    function E(e, t, n) {
        e.matches("." + t) && (e.classList.remove(t), e.classList.add(n))
    }
    var x = {};

    function k(e, t, n) {
        "number" == typeof e && (e = "(min-width: " + e + "px)"), x[e] = x[e] || [], x[e].push({
            yes: t,
            no: n
        })
    }

    function P(e, t) {
        for (var n = t.matches ? "yes" : "no", i = 0; i < x[e].length; i++) x[e][i][n]()
    }
    f({
        Menu: "Menu"
    }, "nl"), f(u, "fa"), f(h, "de"), f(v, "ru");
    var S = function() {
            function e(t, n, i) {
                return this.opts = s(n, e.options), this.conf = s(i, e.configs), this._api = ["bind", "initPanel", "initListview", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.node = {}, this.vars = {}, this.hook = {}, this.clck = [], this.node.menu = "string" == typeof t ? document.querySelector(t) : t, "function" == typeof this._deprecatedWarnings && this._deprecatedWarnings(), this._initWrappers(), this._initAddons(), this._initExtensions(), this._initHooks(), this._initAPI(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(),
                    function() {
                        var e = function(e) {
                            var t = window.matchMedia(e);
                            P(e, t), t.onchange = function(n) {
                                P(e, t)
                            }
                        };
                        for (var t in x) e(t)
                    }(), this
            }
            return e.prototype.openPanel = function(e, t) {
                var n = this;
                if (this.trigger("openPanel:before", [e]), e && (e.matches(".mm-panel") || (e = e.closest(".mm-panel")), e)) {
                    if ("boolean" != typeof t && (t = !0), e.parentElement.matches(".mm-listitem_vertical")) {
                        y(e, ".mm-listitem_vertical").forEach(function(e) {
                            e.classList.add("mm-listitem_opened"), _(e, ".mm-panel").forEach(function(e) {
                                e.classList.remove("mm-hidden")
                            })
                        });
                        var i = y(e, ".mm-panel").filter(function(e) {
                            return !e.parentElement.matches(".mm-listitem_vertical")
                        });
                        this.trigger("openPanel:start", [e]), i.length && this.openPanel(i[0]), this.trigger("openPanel:finish", [e])
                    } else {
                        if (e.matches(".mm-panel_opened")) return;
                        var a = _(this.node.pnls, ".mm-panel"),
                            s = _(this.node.pnls, ".mm-panel_opened")[0];
                        a.filter(function(t) {
                            return t !== e
                        }).forEach(function(e) {
                            e.classList.remove("mm-panel_opened-parent")
                        });
                        for (var o = e.mmParent; o;)(o = o.closest(".mm-panel")) && (o.parentElement.matches(".mm-listitem_vertical") || o.classList.add("mm-panel_opened-parent"), o = o.mmParent);
                        a.forEach(function(e) {
                            e.classList.remove("mm-panel_highest")
                        }), a.filter(function(e) {
                            return e !== s
                        }).filter(function(t) {
                            return t !== e
                        }).forEach(function(e) {
                            e.classList.add("mm-hidden")
                        }), e.classList.remove("mm-hidden");
                        var r = function() {
                                s && s.classList.remove("mm-panel_opened"), e.classList.add("mm-panel_opened"), e.matches(".mm-panel_opened-parent") ? (s && s.classList.add("mm-panel_highest"), e.classList.remove("mm-panel_opened-parent")) : (s && s.classList.add("mm-panel_opened-parent"), e.classList.add("mm-panel_highest")), n.trigger("openPanel:start", [e])
                            },
                            l = function() {
                                s && (s.classList.remove("mm-panel_highest"), s.classList.add("mm-hidden")), e.classList.remove("mm-panel_highest"), n.trigger("openPanel:finish", [e])
                            };
                        t && !e.matches(".mm-panel_noanimation") ? setTimeout(function() {
                            c(e, function() {
                                l()
                            }, n.conf.transitionDuration), r()
                        }, this.conf.openingInterval) : (r(), l())
                    }
                    this.trigger("openPanel:after", [e])
                }
            }, e.prototype.closePanel = function(e) {
                this.trigger("closePanel:before", [e]);
                var t = e.parentElement;
                t.matches(".mm-listitem_vertical") && (t.classList.remove("mm-listitem_opened"), e.classList.add("mm-hidden"), this.trigger("closePanel", [e])), this.trigger("closePanel:after", [e])
            }, e.prototype.closeAllPanels = function(e) {
                this.trigger("closeAllPanels:before"), this.node.pnls.querySelectorAll(".mm-listitem").forEach(function(e) {
                    e.classList.remove("mm-listitem_selected"), e.classList.remove("mm-listitem_opened")
                });
                var t = _(this.node.pnls, ".mm-panel"),
                    n = e || t[0];
                _(this.node.pnls, ".mm-panel").forEach(function(e) {
                    e !== n && (e.classList.remove("mm-panel_opened"), e.classList.remove("mm-panel_opened-parent"), e.classList.remove("mm-panel_highest"), e.classList.add("mm-hidden"))
                }), this.openPanel(n, !1), this.trigger("closeAllPanels:after")
            }, e.prototype.togglePanel = function(e) {
                var t = e.parentElement;
                t.matches(".mm-listitem_vertical") && this[t.matches(".mm-listitem_opened") ? "closePanel" : "openPanel"](e)
            }, e.prototype.setSelected = function(e) {
                this.trigger("setSelected:before", [e]), g(this.node.menu, ".mm-listitem_selected").forEach(function(e) {
                    e.classList.remove("mm-listitem_selected")
                }), e.classList.add("mm-listitem_selected"), this.trigger("setSelected:after", [e])
            }, e.prototype.bind = function(e, t) {
                this.hook[e] = this.hook[e] || [], this.hook[e].push(t)
            }, e.prototype.trigger = function(e, t) {
                if (this.hook[e])
                    for (var n = 0, i = this.hook[e].length; n < i; n++) this.hook[e][n].apply(this, t)
            }, e.prototype._initAPI = function() {
                var e = this,
                    t = this;
                this.API = {}, this._api.forEach(function(n) {
                    e.API[n] = function() {
                        var e = t[n].apply(t, arguments);
                        return void 0 === e ? t.API : e
                    }
                }), this.node.menu.mmApi = this.API
            }, e.prototype._initHooks = function() {
                for (var e in this.opts.hooks) this.bind(e, this.opts.hooks[e])
            }, e.prototype._initWrappers = function() {
                this.trigger("initWrappers:before");
                for (var t = 0; t < this.opts.wrappers.length; t++) {
                    var n = e.wrappers[this.opts.wrappers[t]];
                    "function" == typeof n && n.call(this)
                }
                this.trigger("initWrappers:after")
            }, e.prototype._initAddons = function() {
                for (var t in this.trigger("initAddons:before"), e.addons) e.addons[t].call(this);
                this.trigger("initAddons:after")
            }, e.prototype._initExtensions = function() {
                var e = this;
                this.trigger("initExtensions:before"), "array" == o(this.opts.extensions) && (this.opts.extensions = {
                    all: this.opts.extensions
                }), Object.keys(this.opts.extensions).forEach(function(t) {
                    var n = e.opts.extensions[t].map(function(e) {
                        return "mm-menu_" + e
                    });
                    n.length && k(t, function() {
                        n.forEach(function(t) {
                            e.node.menu.classList.add(t)
                        })
                    }, function() {
                        n.forEach(function(t) {
                            e.node.menu.classList.remove(t)
                        })
                    })
                }), this.trigger("initExtensions:after")
            }, e.prototype._initMenu = function() {
                var e = this;
                this.trigger("initMenu:before"), this.node.wrpr = this.node.wrpr || this.node.menu.parentElement, this.node.wrpr.classList.add("mm-wrapper"), this.node.menu.id = this.node.menu.id || l();
                var t = b("div.mm-panels");
                _(this.node.menu).forEach(function(n) {
                    e.conf.panelNodetype.indexOf(n.nodeName.toLowerCase()) > -1 && t.append(n)
                }), this.node.menu.append(t), this.node.pnls = t, this.node.menu.classList.add("mm-menu"), this.trigger("initMenu:after")
            }, e.prototype._initPanels = function() {
                var e = this;
                this.trigger("initPanels:before"), this.clck.push(function(t, n) {
                    if (n.inMenu) {
                        var i = t.getAttribute("href");
                        if (i && i.length > 1 && "#" == i.slice(0, 1)) try {
                            var a = g(e.node.menu, i)[0];
                            if (a && a.matches(".mm-panel")) return t.parentElement.matches(".mm-listitem_vertical") ? e.togglePanel(a) : e.openPanel(a), !0
                        } catch (e) {}
                    }
                }), _(this.node.pnls).forEach(function(t) {
                    e.initPanel(t)
                }), this.trigger("initPanels:after")
            }, e.prototype.initPanel = function(e) {
                var t = this,
                    n = this.conf.panelNodetype.join(", ");
                if (e.matches(n) && (e.matches(".mm-panel") || (e = this._initPanel(e)), e)) {
                    var i = [];
                    i.push.apply(i, _(e, "." + this.conf.classNames.panel)), _(e, ".mm-listview").forEach(function(e) {
                        _(e, ".mm-listitem").forEach(function(e) {
                            i.push.apply(i, _(e, n))
                        })
                    }), i.forEach(function(e) {
                        t.initPanel(e)
                    })
                }
            }, e.prototype._initPanel = function(e) {
                var t = this;
                if (this.trigger("initPanel:before", [e]), E(e, this.conf.classNames.panel, "mm-panel"), E(e, this.conf.classNames.nopanel, "mm-nopanel"), E(e, this.conf.classNames.inset, "mm-listview_inset"), e.matches(".mm-listview_inset") && e.classList.add("mm-nopanel"), e.matches(".mm-nopanel")) return null;
                var n = e.id || l(),
                    i = e.matches("." + this.conf.classNames.vertical) || !this.opts.slidingSubmenus;
                if (e.classList.remove(this.conf.classNames.vertical), e.matches("ul, ol")) {
                    e.removeAttribute("id");
                    var a = b("div");
                    e.before(a), a.append(e), e = a
                }
                e.id = n, e.classList.add("mm-panel"), e.classList.add("mm-hidden");
                var s = [e.parentElement].filter(function(e) {
                    return e.matches("li")
                })[0];
                if (i ? s && s.classList.add("mm-listitem_vertical") : this.node.pnls.append(e), s && (s.mmChild = e, e.mmParent = s, s && s.matches(".mm-listitem") && !_(s, ".mm-btn").length)) {
                    var o = _(s, ".mm-listitem__text")[0];
                    if (o) {
                        var r = b("a.mm-btn.mm-btn_next.mm-listitem__btn");
                        r.setAttribute("href", "#" + e.id), o.matches("span") ? (r.classList.add("mm-listitem__text"), r.innerHTML = o.innerHTML, s.insertBefore(r, o.nextElementSibling), o.remove()) : s.insertBefore(r, _(s, ".mm-panel")[0])
                    }
                }
                return this._initNavbar(e), _(e, "ul, ol").forEach(function(e) {
                    t.initListview(e)
                }), this.trigger("initPanel:after", [e]), e
            }, e.prototype._initNavbar = function(e) {
                if (this.trigger("initNavbar:before", [e]), !_(e, ".mm-navbar").length) {
                    var t = null,
                        n = null;
                    if (e.dataset.mmParent ? n = g(this.node.pnls, e.dataset.mmParent)[0] : (t = e.mmParent) && (n = t.closest(".mm-panel")), !t || !t.matches(".mm-listitem_vertical")) {
                        var i = b("div.mm-navbar");
                        if (this.opts.navbar.add ? this.opts.navbar.sticky && i.classList.add("mm-navbar_sticky") : i.classList.add("mm-hidden"), n) {
                            var a = b("a.mm-btn.mm-btn_prev.mm-navbar__btn");
                            a.setAttribute("href", "#" + n.id), i.append(a)
                        }
                        var s = null;
                        t ? s = _(t, ".mm-listitem__text")[0] : n && (s = g(n, 'a[href="#' + e.id + '"]')[0]);
                        var o = b("a.mm-navbar__title");
                        switch (o.innerHTML = e.dataset.mmTitle || (s ? s.textContent : "") || this.i18n(this.opts.navbar.title) || this.i18n("Menu"), this.opts.navbar.titleLink) {
                            case "anchor":
                                s && o.setAttribute("href", s.getAttribute("href"));
                                break;
                            case "parent":
                                n && o.setAttribute("href", "#" + n.id)
                        }
                        i.append(o), e.prepend(i), this.trigger("initNavbar:after", [e])
                    }
                }
            }, e.prototype.initListview = function(e) {
                var t = this;
                this.trigger("initListview:before", [e]), E(e, this.conf.classNames.nolistview, "mm-nolistview"), e.matches(".mm-nolistview") || (e.classList.add("mm-listview"), _(e).forEach(function(e) {
                    e.classList.add("mm-listitem"), E(e, t.conf.classNames.selected, "mm-listitem_selected"), _(e, "a, span").forEach(function(e) {
                        e.matches(".mm-btn") || e.classList.add("mm-listitem__text")
                    })
                })), this.trigger("initListview:after", [e])
            }, e.prototype._initOpened = function() {
                this.trigger("initOpened:before");
                var e = this.node.pnls.querySelectorAll(".mm-listitem_selected"),
                    t = null;
                e.forEach(function(e) {
                    t = e, e.classList.remove("mm-listitem_selected")
                }), t && t.classList.add("mm-listitem_selected");
                var n = t ? t.closest(".mm-panel") : _(this.node.pnls, ".mm-panel")[0];
                this.openPanel(n, !1), this.trigger("initOpened:after")
            }, e.prototype._initAnchors = function() {
                var e = this;
                this.trigger("initAnchors:before"), document.addEventListener("click", function(t) {
                    var n = t.target.closest("a[href]");
                    if (n) {
                        for (var i = {
                                inMenu: n.closest(".mm-menu") === e.node.menu,
                                inListview: n.matches(".mm-listitem > a"),
                                toExternal: n.matches('[rel="external"]') || n.matches('[target="_blank"]')
                            }, a = {
                                close: null,
                                setSelected: null,
                                preventDefault: "#" == n.getAttribute("href").slice(0, 1)
                            }, c = 0; c < e.clck.length; c++) {
                            var l = e.clck[c].call(e, n, i);
                            if (l) {
                                if ("boolean" == typeof l) return void t.preventDefault();
                                "object" == o(l) && (a = s(l, a))
                            }
                        }
                        i.inMenu && i.inListview && !i.toExternal && (r(n, e.opts.onClick.setSelected, a.setSelected) && e.setSelected(n.parentElement), r(n, e.opts.onClick.preventDefault, a.preventDefault) && t.preventDefault(), r(n, e.opts.onClick.close, a.close) && e.opts.offCanvas && "function" == typeof e.close && e.close())
                    }
                }, !0), this.trigger("initAnchors:after")
            }, e.prototype.i18n = function(e) {
                return function(e, t) {
                    return "string" == typeof t && void 0 !== p[t] && p[t][e] || e
                }(e, this.conf.language)
            }, e.version = "8.4.0", e.options = i, e.configs = a, e.addons = {}, e.wrappers = {}, e.node = {}, e.vars = {}, e
        }(),
        M = {
            blockUI: !0,
            moveBackground: !0
        };
    var A = {
        clone: !1,
        menu: {
            insertMethod: "prepend",
            insertSelector: "body"
        },
        page: {
            nodetype: "div",
            selector: null,
            noSelector: []
        }
    };

    function T(e) {
        return e ? e.charAt(0).toUpperCase() + e.slice(1) : ""
    }

    function C(e, t, n) {
        var i = t.split(".");
        e[t = "mmEvent" + T(i[0]) + T(i[1])] = e[t] || [], e[t].push(n), e.addEventListener(i[0], n)
    }

    function N(e, t) {
        var n = t.split(".");
        t = "mmEvent" + T(n[0]) + T(n[1]), (e[t] || []).forEach(function(t) {
            e.removeEventListener(n[0], t)
        })
    }
    S.options.offCanvas = M, S.configs.offCanvas = A;
    S.prototype.open = function() {
        var e = this;
        this.trigger("open:before"), this.vars.opened || (this._openSetup(), setTimeout(function() {
            e._openStart()
        }, this.conf.openingInterval), this.trigger("open:after"))
    }, S.prototype._openSetup = function() {
        var e = this,
            t = this.opts.offCanvas;
        this.closeAllOthers(), S.node.page.mmStyle = S.node.page.getAttribute("style") || "",
            function(e, t, n) {
                var i = t.split(".");
                (e[t = "mmEvent" + T(i[0]) + T(i[1])] || []).forEach(function(e) {
                    e(n || {})
                })
            }(window, "resize.page", {
                force: !0
            });
        var n = ["mm-wrapper_opened"];
        t.blockUI && n.push("mm-wrapper_blocking"), "modal" == t.blockUI && n.push("mm-wrapper_modal"), t.moveBackground && n.push("mm-wrapper_background"), n.forEach(function(t) {
            e.node.wrpr.classList.add(t)
        }), setTimeout(function() {
            e.vars.opened = !0
        }, this.conf.openingInterval), this.node.menu.classList.add("mm-menu_opened")
    }, S.prototype._openStart = function() {
        var e = this;
        c(S.node.page, function() {
            e.trigger("open:finish")
        }, this.conf.transitionDuration), this.trigger("open:start"), this.node.wrpr.classList.add("mm-wrapper_opening")
    }, S.prototype.close = function() {
        var e = this;
        this.trigger("close:before"), this.vars.opened && (c(S.node.page, function() {
            e.node.menu.classList.remove("mm-menu_opened");
            ["mm-wrapper_opened", "mm-wrapper_blocking", "mm-wrapper_modal", "mm-wrapper_background"].forEach(function(t) {
                e.node.wrpr.classList.remove(t)
            }), S.node.page.setAttribute("style", S.node.page.mmStyle), e.vars.opened = !1, e.trigger("close:finish")
        }, this.conf.transitionDuration), this.trigger("close:start"), this.node.wrpr.classList.remove("mm-wrapper_opening"), this.trigger("close:after"))
    }, S.prototype.closeAllOthers = function() {
        var e = this;
        g(document.body, ".mm-menu_offcanvas").forEach(function(t) {
            if (t !== e.node.menu) {
                var n = t.mmApi;
                n && n.close && n.close()
            }
        })
    }, S.prototype.setPage = function(e) {
        this.trigger("setPage:before", [e]);
        var t = this.conf.offCanvas;
        if (!e) {
            var n = "string" == typeof t.page.selector ? g(document.body, t.page.selector) : _(document.body, t.page.nodetype);
            if (n = n.filter(function(e) {
                    return !e.matches(".mm-menu, .mm-wrapper__blocker")
                }), t.page.noSelector.length && (n = n.filter(function(e) {
                    return !e.matches(t.page.noSelector.join(", "))
                })), n.length > 1) {
                var i = b("div");
                n[0].before(i), n.forEach(function(e) {
                    i.append(e)
                }), n = [i]
            }
            e = n[0]
        }
        e.classList.add("mm-page"), e.classList.add("mm-slideout"), e.id = e.id || l(), S.node.page = e, this.trigger("setPage:after", [e])
    };
    var H = function() {
            var e = this;
            N(document.body, "keydown.tabguard"), C(document.body, "keydown.tabguard", function(t) {
                9 == t.keyCode && e.node.wrpr.matches(".mm-wrapper_opened") && t.preventDefault()
            })
        },
        j = function() {
            var e = this;
            this.trigger("initBlocker:before");
            var t = this.opts.offCanvas,
                n = this.conf.offCanvas;
            if (t.blockUI) {
                if (!S.node.blck) {
                    var i = b("div.mm-wrapper__blocker.mm-slideout");
                    i.innerHTML = "<a></a>", document.querySelector(n.menu.insertSelector).append(i), S.node.blck = i
                }
                var a = function(t) {
                    t.preventDefault(), t.stopPropagation(), e.node.wrpr.matches(".mm-wrapper_modal") || e.close()
                };
                S.node.blck.addEventListener("mousedown", a), S.node.blck.addEventListener("touchstart", a), S.node.blck.addEventListener("touchmove", a), this.trigger("initBlocker:after")
            }
        },
        D = {
            aria: !0,
            text: !0
        };
    var O = {
            text: {
                closeMenu: "Close menu",
                closeSubmenu: "Close submenu",
                openSubmenu: "Open submenu",
                toggleSubmenu: "Toggle submenu"
            }
        },
        I = {
            "Close menu": "بستن منو",
            "Close submenu": "بستن زیرمنو",
            "Open submenu": "بازکردن زیرمنو",
            "Toggle submenu": "سوییچ زیرمنو"
        },
        q = {
            "Close menu": "Menü schließen",
            "Close submenu": "Untermenü schließen",
            "Open submenu": "Untermenü öffnen",
            "Toggle submenu": "Untermenü wechseln"
        },
        B = {
            "Close menu": "Закрыть меню",
            "Close submenu": "Закрыть подменю",
            "Open submenu": "Открыть подменю",
            "Toggle submenu": "Переключить подменю"
        };
    f({
        "Close menu": "Menu sluiten",
        "Close submenu": "Submenu sluiten",
        "Open submenu": "Submenu openen",
        "Toggle submenu": "Submenu wisselen"
    }, "nl"), f(I, "fa"), f(q, "de"), f(B, "ru"), S.options.screenReader = D, S.configs.screenReader = O;
    var z;
    z = function(e, t, n) {
        e[t] = n, n ? e.setAttribute(t, n.toString()) : e.removeAttribute(t)
    }, S.sr_aria = function(e, t, n) {
        z(e, "aria-" + t, n)
    }, S.sr_role = function(e, t) {
        z(e, "role", t)
    }, S.sr_text = function(e) {
        return '<span class="mm-sronly">' + e + "</span>"
    };
    var R = {
        fix: !0
    };
    var U = "ontouchstart" in window || !!navigator.msMaxTouchPoints || !1;
    S.options.scrollBugFix = R;
    var W = {
        height: "default"
    };
    S.options.autoHeight = W;
    var Y = {
        close: !1,
        open: !1
    };
    S.options.backButton = Y;
    var F = {
        add: !1,
        visible: {
            min: 1,
            max: 3
        }
    };
    S.options.columns = F;
    var X = {
        add: !1,
        addTo: "panels",
        count: !1
    };
    S.options.counters = X, S.configs.classNames.counters = {
        counter: "Counter"
    };
    var V = {
        add: !1,
        addTo: "panels"
    };
    S.options.dividers = V, S.configs.classNames.divider = "Divider";
    var Z = {
        open: !1,
        node: null
    };
    var G = "ontouchstart" in window || !!navigator.msMaxTouchPoints || !1,
        K = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        Q = {
            start: 15,
            swipe: 15
        },
        J = {
            x: ["Right", "Left"],
            y: ["Down", "Up"]
        },
        $ = 0,
        ee = 1,
        te = 2,
        ne = function(e, t) {
            return "string" == typeof e && "%" == e.slice(-1) && (e = t * ((e = parseInt(e.slice(0, -1), 10)) / 100)), e
        },
        ie = function() {
            function e(e, t, n) {
                this.surface = e, this.area = s(t, K), this.treshold = s(n, Q), this.surface.mmHasDragEvents || (this.surface.addEventListener(G ? "touchstart" : "mousedown", this.start.bind(this)), this.surface.addEventListener(G ? "touchend" : "mouseup", this.stop.bind(this)), this.surface.addEventListener(G ? "touchleave" : "mouseleave", this.stop.bind(this)), this.surface.addEventListener(G ? "touchmove" : "mousemove", this.move.bind(this))), this.surface.mmHasDragEvents = !0
            }
            return e.prototype.start = function(e) {
                var t = this.surface.clientWidth,
                    n = this.surface.clientHeight,
                    i = ne(this.area.top, n);
                if (!("number" == typeof i && e.pageY < i)) {
                    var a = ne(this.area.right, t);
                    if (!("number" == typeof a && (a = t - a, e.pageX > a))) {
                        var s = ne(this.area.bottom, n);
                        if (!("number" == typeof s && (s = n - s, e.pageY > s))) {
                            var o = ne(this.area.left, t);
                            "number" == typeof o && e.pageX < o || (this.startPosition = {
                                x: e.pageX,
                                y: e.pageY
                            }, this.state = ee)
                        }
                    }
                }
            }, e.prototype.stop = function(e) {
                if (this.state == te) {
                    var t = this._dragDirection(),
                        n = this._eventDetail(t);
                    if (this._dispatchEvents("drag*End", n), Math.abs(this.movement[this.axis]) > this.treshold.swipe) {
                        var i = this._swipeDirection();
                        n.direction = i, this._dispatchEvents("swipe*", n)
                    }
                }
                this.state = $
            }, e.prototype.move = function(e) {
                switch (this.state) {
                    case ee:
                    case te:
                        this.movement = {
                            x: e.movementX,
                            y: e.movementY
                        }, this.distance = {
                            x: e.pageX - this.startPosition.x,
                            y: e.pageY - this.startPosition.y
                        }, this.axis = Math.abs(this.distance.x) > Math.abs(this.distance.y) ? "x" : "y";
                        var t = this._dragDirection(),
                            n = this._eventDetail(t);
                        this.state == ee && Math.abs(this.distance[this.axis]) > this.treshold.start && (this._dispatchEvents("drag*Start", n), this.state = te), this.state == te && this._dispatchEvents("drag*Move", n)
                }
            }, e.prototype._eventDetail = function(e) {
                var t = this.distance.x,
                    n = this.distance.y;
                return "x" == this.axis && (t -= t > 0 ? this.treshold.start : 0 - this.treshold.start), "y" == this.axis && (n -= n > 0 ? this.treshold.start : 0 - this.treshold.start), {
                    axis: this.axis,
                    direction: e,
                    movementX: this.movement.x,
                    movementY: this.movement.y,
                    distanceX: t,
                    distanceY: n
                }
            }, e.prototype._dispatchEvents = function(e, t) {
                var n = new CustomEvent(e.replace("*", ""), {
                    detail: t
                });
                this.surface.dispatchEvent(n);
                var i = new CustomEvent(e.replace("*", this.axis.toUpperCase()), {
                    detail: t
                });
                this.surface.dispatchEvent(i);
                var a = new CustomEvent(e.replace("*", t.direction), {
                    detail: t
                });
                this.surface.dispatchEvent(a)
            }, e.prototype._dragDirection = function() {
                return J[this.axis][this.distance[this.axis] > 0 ? 0 : 1]
            }, e.prototype._swipeDirection = function() {
                return J[this.axis][this.movement[this.axis] > 0 ? 0 : 1]
            }, e
        }(),
        ae = null,
        se = null,
        oe = 0,
        re = function(e, t, n) {
            switch (e.position = "left", e.zposition = "back", ["right", "top", "bottom"].forEach(function(n) {
                t.indexOf("position-" + n) > -1 && (e.position = n)
            }), ["front", "top", "bottom"].forEach(function(n) {
                t.indexOf("position-" + n) > -1 && (e.zposition = "front")
            }), ae.area = {
                top: "bottom" == e.position ? "75%" : 0,
                right: "left" == e.position ? "75%" : 0,
                bottom: "top" == e.position ? "75%" : 0,
                left: "right" == e.position ? "75%" : 0
            }, e.position) {
                case "top":
                case "bottom":
                    e.axis = "y";
                    break;
                default:
                    e.axis = "x"
            }
            switch (e.position) {
                case "top":
                    e.direction = "Down";
                    break;
                case "right":
                    e.direction = "Left";
                    break;
                case "bottom":
                    e.direction = "Up";
                    break;
                default:
                    e.direction = "Right"
            }
            switch (e.zposition) {
                case "front":
                    e.slideOutNodes = [n];
                    break;
                default:
                    e.slideOutNodes = g(document.body, ".mm-slideout")
            }
            return e
        };
    S.options.drag = Z;
    var ce = {
        drop: !1,
        fitViewport: !0,
        event: "click",
        position: {},
        tip: !0
    };
    var le = {
        offset: {
            button: {
                x: -5,
                y: 5
            },
            viewport: {
                x: 20,
                y: 20
            }
        },
        height: {
            max: 880
        },
        width: {
            max: 440
        }
    };
    S.options.dropdown = ce, S.configs.dropdown = le;
    var me = {
        insertMethod: "append",
        insertSelector: "body"
    };
    S.configs.fixedElements = me, S.configs.classNames.fixedElements = {
        fixed: "Fixed"
    };
    var de = {
        use: !1,
        top: [],
        bottom: [],
        position: "left",
        type: "default"
    };
    S.options.iconbar = de;
    var pe = {
        add: !1,
        blockPanel: !0,
        hideDivider: !1,
        hideNavbar: !0,
        visible: 3
    };
    S.options.iconPanels = pe;
    var fe = {
        enable: !1,
        enhance: !1
    };
    S.options.keyboardNavigation = fe;
    var ue = function(e) {
            var t = this;
            N(document.body, "keydown.tabguard"), N(document.body, "focusin.tabguard"), C(document.body, "focusin.tabguard", function(e) {
                if (t.node.wrpr.matches(".mm-wrapper_opened")) {
                    var n = e.target;
                    if (n.matches(".mm-tabend")) {
                        var i = void 0;
                        n.parentElement.matches(".mm-menu") && S.node.blck && (i = S.node.blck), n.parentElement.matches(".mm-wrapper__blocker") && (i = g(document.body, ".mm-menu_offcanvas.mm-menu_opened")[0]), i || (i = n.parentElement), i && _(i, ".mm-tabstart")[0].focus()
                    }
                }
            }), N(document.body, "keydown.navigate"), C(document.body, "keydown.navigate", function(t) {
                var n = t.target,
                    i = n.closest(".mm-menu");
                if (i) {
                    i.mmApi;
                    if (!n.matches("input, textarea")) switch (t.keyCode) {
                        case 13:
                            (n.matches(".mm-toggle") || n.matches(".mm-check")) && n.dispatchEvent(new Event("click"));
                            break;
                        case 32:
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            t.preventDefault()
                    }
                    if (e)
                        if (n.matches("input")) switch (t.keyCode) {
                            case 27:
                                n.value = ""
                        } else {
                            var a = i.mmApi;
                            switch (t.keyCode) {
                                case 8:
                                    var s = g(i, ".mm-panel_opened")[0].mmParent;
                                    s && a.openPanel(s.closest(".mm-panel"));
                                    break;
                                case 27:
                                    i.matches(".mm-menu_offcanvas") && a.close()
                            }
                        }
                }
            })
        },
        he = {
            load: !1
        };
    S.options.lazySubmenus = he;
    var ve = [];
    var be = {
        breadcrumbs: {
            separator: "/",
            removeFirst: !1
        }
    };

    function ge() {
        var e = this,
            t = this.opts.navbars;
        if (void 0 !== t) {
            t instanceof Array || (t = [t]);
            var n = {};
            t.length && (t.forEach(function(t) {
                if (!(t = function(e) {
                        return "boolean" == typeof e && e && (e = {}), "object" != typeof e && (e = {}), void 0 === e.content && (e.content = ["prev", "title"]), e.content instanceof Array || (e.content = [e.content]), void 0 === e.use && (e.use = !0), "boolean" == typeof e.use && e.use && (e.use = !0), e
                    }(t)).use) return !1;
                var i = b("div.mm-navbar"),
                    a = t.position;
                "bottom" !== a && (a = "top"), n[a] || (n[a] = b("div.mm-navbars_" + a)), n[a].append(i);
                for (var s = 0, o = t.content.length; s < o; s++) {
                    var r, c = t.content[s];
                    if ("string" == typeof c)
                        if ("function" == typeof(r = ge.navbarContents[c])) r.call(e, i);
                        else {
                            var l = b("span");
                            l.innerHTML = c;
                            var m = _(l);
                            1 == m.length && (l = m[0]), i.append(l)
                        }
                    else i.append(c)
                }
                "string" == typeof t.type && ("function" == typeof(r = ge.navbarTypes[t.type]) && r.call(e, i));
                "boolean" != typeof t.use && k(t.use, function() {
                    i.classList.remove("mm-hidden"), S.sr_aria(i, "hidden", !1)
                }, function() {
                    i.classList.add("mm-hidden"), S.sr_aria(i, "hidden", !0)
                })
            }), this.bind("initMenu:after", function() {
                for (var t in n) e.node.menu["bottom" == t ? "append" : "prepend"](n[t])
            }))
        }
    }
    S.options.navbars = ve, S.configs.navbars = be, S.configs.classNames.navbars = {
        panelNext: "Next",
        panelPrev: "Prev",
        panelTitle: "Title"
    }, ge.navbarContents = {
        breadcrumbs: function(e) {
            var t = this,
                n = b("div.mm-navbar__breadcrumbs");
            e.append(n), this.bind("initNavbar:after", function(e) {
                if (!e.querySelector(".mm-navbar__breadcrumbs")) {
                    _(e, ".mm-navbar")[0].classList.add("mm-hidden");
                    for (var n = [], i = b("span.mm-navbar__breadcrumbs"), a = e, s = !0; a;) {
                        if (!(a = a.closest(".mm-panel")).parentElement.matches(".mm-listitem_vertical")) {
                            var o = g(a, ".mm-navbar__title")[0];
                            if (o) {
                                var r = o.textContent;
                                r.length && n.unshift(s ? "<span>" + r + "</span>" : '<a href="#' + a.id + '">' + r + "</a>")
                            }
                            s = !1
                        }
                        a = a.mmParent
                    }
                    t.conf.navbars.breadcrumbs.removeFirst && n.shift(), i.innerHTML = n.join('<span class="mm-separator">' + t.conf.navbars.breadcrumbs.separator + "</span>"), _(e, ".mm-navbar")[0].append(i)
                }
            }), this.bind("openPanel:start", function(e) {
                var t = e.querySelector(".mm-navbar__breadcrumbs");
                n.innerHTML = t ? t.innerHTML : ""
            }), this.bind("initNavbar:after:sr-aria", function(e) {
                g(e, ".mm-breadcrumbs a").forEach(function(e) {
                    S.sr_aria(e, "owns", e.getAttribute("href").slice(1))
                })
            })
        },
        close: function(e) {
            var t = this,
                n = b("a.mm-btn.mm-btn_close.mm-navbar__btn");
            e.append(n), this.bind("setPage:after", function(e) {
                n.setAttribute("href", "#" + e.id)
            }), this.bind("setPage:after:sr-text", function() {
                n.innerHTML = S.sr_text(t.i18n(t.conf.screenReader.text.closeMenu)), S.sr_aria(n, "owns", n.getAttribute("href").slice(1))
            })
        },
        next: function(e) {
            var t, n, i, a = this,
                s = b("a.mm-btn.mm-btn_next.mm-navbar__btn");
            e.append(s), this.bind("openPanel:start", function(e) {
                t = e.querySelector("." + a.conf.classNames.navbars.panelNext), n = t ? t.getAttribute("href") : "", i = t ? t.innerHTML : "", n ? s.setAttribute("href", n) : s.removeAttribute("href"), s.classList[n || i ? "remove" : "add"]("mm-hidden"), s.innerHTML = i
            }), this.bind("openPanel:start:sr-aria", function(e) {
                S.sr_aria(s, "hidden", s.matches("mm-hidden")), S.sr_aria(s, "owns", (s.getAttribute("href") || "").slice(1))
            })
        },
        prev: function(e) {
            var t, n, i, a = this,
                s = b("a.mm-btn.mm-btn_prev.mm-navbar__btn");
            e.append(s), this.bind("initNavbar:after", function(e) {
                _(e, ".mm-navbar")[0].classList.add("mm-hidden")
            }), this.bind("openPanel:start", function(e) {
                e.parentElement.matches(".mm-listitem_vertical") || ((t = e.querySelector("." + a.conf.classNames.navbars.panelPrev)) || (t = e.querySelector(".mm-navbar__btn.mm-btn_prev")), n = t ? t.getAttribute("href") : "", i = t ? t.innerHTML : "", n ? s.setAttribute("href", n) : s.removeAttribute("href"), s.classList[n || i ? "remove" : "add"]("mm-hidden"), s.innerHTML = i)
            }), this.bind("initNavbar:after:sr-aria", function(e) {
                S.sr_aria(e.querySelector(".mm-navbar"), "hidden", !0)
            }), this.bind("openPanel:start:sr-aria", function(e) {
                S.sr_aria(s, "hidden", s.matches(".mm-hidden")), S.sr_aria(s, "owns", (s.getAttribute("href") || "").slice(1))
            })
        },
        searchfield: function(e) {
            "object" != o(this.opts.searchfield) && (this.opts.searchfield = {});
            var t = b("div.mm-navbar__searchfield");
            e.append(t), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = [t]
        },
        title: function(e) {
            var t, n, i, a, s = this,
                o = b("a.mm-navbar__title");
            e.append(o), this.bind("openPanel:start", function(e) {
                e.parentElement.matches(".mm-listitem_vertical") || ((i = e.querySelector("." + s.conf.classNames.navbars.panelTitle)) || (i = e.querySelector(".mm-navbar__title")), (t = i ? i.getAttribute("href") : "") ? o.setAttribute("href", t) : o.removeAttribute("href"), n = i ? i.innerHTML : "", o.innerHTML = n)
            }), this.bind("openPanel:start:sr-aria", function(e) {
                if (s.opts.screenReader.text && (a || _(s.node.menu, ".mm-navbars_top, .mm-navbars_bottom").forEach(function(e) {
                        var t = e.querySelector(".mm-btn_prev");
                        t && (a = t)
                    }), a)) {
                    var t = !0;
                    "parent" == s.opts.navbar.titleLink && (t = !a.matches(".mm-hidden")), S.sr_aria(o, "hidden", t)
                }
            })
        }
    }, ge.navbarTypes = {
        tabs: function(e) {
            var t = this;
            e.classList.add("mm-navbar_tabs"), e.parentElement.classList.add("mm-navbars_has-tabs");
            var n = _(e, "a");
            e.addEventListener("click", function(e) {
                var n = e.target;
                if (n.matches("a"))
                    if (n.matches(".mm-navbar__tab_selected")) e.stopImmediatePropagation();
                    else try {
                        t.openPanel(t.node.menu.querySelector(n.getAttribute("href")), !1), e.stopImmediatePropagation()
                    } catch (e) {}
            }), this.bind("openPanel:start", function e(t) {
                n.forEach(function(e) {
                    e.classList.remove("mm-navbar__tab_selected")
                });
                var i = n.filter(function(e) {
                    return e.matches('[href="#' + t.id + '"]')
                })[0];
                if (i) i.classList.add("mm-navbar__tab_selected");
                else {
                    var a = t.mmParent;
                    a && e.call(this, a.closest(".mm-panel"))
                }
            })
        }
    };
    var _e = {
        scroll: !1,
        update: !1
    };
    var ye = {
        scrollOffset: 0,
        updateOffset: 50
    };
    S.options.pageScroll = _e, S.configs.pageScroll = ye;
    var Le = {
        add: !1,
        addTo: "panels",
        cancel: !1,
        noResults: "No results found.",
        placeholder: "Search",
        panel: {
            add: !1,
            dividers: !0,
            fx: "none",
            id: null,
            splash: null,
            title: "Search"
        },
        search: !0,
        showTextItems: !1,
        showSubPanels: !0
    };
    var we = {
            clear: !1,
            form: !1,
            input: !1,
            submit: !1
        },
        Ee = {
            Search: "جستجو",
            "No results found.": "نتیجه‌ای یافت نشد.",
            cancel: "انصراف"
        },
        xe = {
            Search: "Suche",
            "No results found.": "Keine Ergebnisse gefunden.",
            cancel: "beenden"
        },
        ke = {
            Search: "Найти",
            "No results found.": "Ничего не найдено.",
            cancel: "отменить"
        };
    f({
        Search: "Zoeken",
        "No results found.": "Geen resultaten gevonden.",
        cancel: "annuleren"
    }, "nl"), f(Ee, "fa"), f(xe, "de"), f(ke, "ru"), S.options.searchfield = Le, S.configs.searchfield = we;
    var Pe = function() {
            var e = this.opts.searchfield,
                t = (this.conf.searchfield, _(this.node.pnls, ".mm-panel_search")[0]);
            if (t) return t;
            t = b("div.mm-panel.mm-panel_search.mm-hidden"), e.panel.id && (t.id = e.panel.id), e.panel.title && (t.dataset.mmTitle = e.panel.title);
            var n = b("ul");
            switch (t.append(n), this.node.pnls.append(t), this.initListview(n), this._initNavbar(t), e.panel.fx) {
                case !1:
                    break;
                case "none":
                    t.classList.add("mm-panel_noanimation");
                    break;
                default:
                    t.classList.add("mm-panel_fx-" + e.panel.fx)
            }
            if (e.panel.splash) {
                var i = b("div.mm-panel__content");
                i.innerHTML = e.panel.splash, t.append(i)
            }
            return t.classList.add("mm-panel"), t.classList.add("mm-hidden"), this.node.pnls.append(t), t
        },
        Se = function(e) {
            var t = this.opts.searchfield,
                n = this.conf.searchfield;
            if (e.parentElement.matches(".mm-listitem_vertical")) return null;
            if (s = g(e, ".mm-searchfield")[0]) return s;

            function i(e, t) {
                if (t)
                    for (var n in t) e.setAttribute(n, t[n])
            }
            var a, s = b((n.form ? "form" : "div") + ".mm-searchfield"),
                o = b("div.mm-searchfield__input"),
                r = b("input");
            (r.type = "text", r.autocomplete = "off", r.placeholder = this.i18n(t.placeholder), o.append(r), s.append(o), e.prepend(s), i(r, n.input), n.clear) && ((a = b("a.mm-btn.mm-btn_close.mm-searchfield__btn")).setAttribute("href", "#"), o.append(a));
            (i(s, n.form), n.form && n.submit && !n.clear) && ((a = b("a.mm-btn.mm-btn_next.mm-searchfield__btn")).setAttribute("href", "#"), o.append(a));
            t.cancel && ((a = b("a.mm-searchfield__cancel")).setAttribute("href", "#"), a.textContent = this.i18n("cancel"), s.append(a));
            return s
        },
        Me = function(e) {
            var t = this,
                n = this.opts.searchfield,
                i = (this.conf.searchfield, {});
            e.closest(".mm-panel_search") ? (i.panels = g(this.node.pnls, ".mm-panel"), i.noresults = [e.closest(".mm-panel")]) : e.closest(".mm-panel") ? (i.panels = [e.closest(".mm-panel")], i.noresults = i.panels) : (i.panels = g(this.node.pnls, ".mm-panel"), i.noresults = [this.node.menu]), i.panels = i.panels.filter(function(e) {
                return !e.parentElement.matches(".mm-listitem_vertical")
            }), i.panels = i.panels.filter(function(e) {
                return !e.matches(".mm-panel_search")
            }), i.listitems = [], i.dividers = [], i.panels.forEach(function(e) {
                var t, n;
                (t = i.listitems).push.apply(t, g(e, ".mm-listitem")), (n = i.dividers).push.apply(n, g(e, ".mm-divider"))
            });
            var a = _(this.node.pnls, ".mm-panel_search")[0],
                s = g(e, "input")[0],
                o = g(e, ".mm-searchfield__cancel")[0];
            s.mmSearchfield = i, n.panel.add && n.panel.splash && (N(s, "focus.splash"), C(s, "focus.splash", function(e) {
                t.openPanel(a)
            })), n.cancel && (N(s, "focus.cancel"), C(s, "focus.cancel", function(e) {
                o.classList.add("mm-searchfield__cancel-active")
            }), N(o, "click.splash"), C(o, "click.splash", function(e) {
                if (e.preventDefault(), o.classList.remove("mm-searchfield__cancel-active"), a.matches(".mm-panel_opened")) {
                    var n = _(t.node.pnls, ".mm-panel_opened-parent");
                    n.length && t.openPanel(n[n.length - 1])
                }
            })), n.panel.add && "panel" == n.addTo && this.bind("openPanel:finish", function(e) {
                e === a && s.focus()
            }), N(s, "input.search"), C(s, "input.search", function(e) {
                switch (e.keyCode) {
                    case 9:
                    case 16:
                    case 17:
                    case 18:
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        break;
                    default:
                        t.search(s)
                }
            }), this.search(s)
        },
        Ae = function(e) {
            if (e) {
                var t = this.opts.searchfield;
                this.conf.searchfield;
                if (e.closest(".mm-panel") || (e = _(this.node.pnls, ".mm-panel")[0]), !_(e, ".mm-panel__noresultsmsg").length) {
                    var n = b("div.mm-panel__noresultsmsg.mm-hidden");
                    n.innerHTML = this.i18n(t.noResults), e.append(n)
                }
            }
        };
    S.prototype.search = function(e, t) {
        var n, i = this,
            a = this.opts.searchfield;
        this.conf.searchfield;
        t = (t = t || "" + e.value).toLowerCase().trim();
        var s = e.mmSearchfield,
            o = g(e.closest(".mm-searchfield"), ".mm-btn"),
            r = _(this.node.pnls, ".mm-panel_search")[0],
            c = s.panels,
            l = s.noresults,
            m = s.listitems,
            d = s.dividers;
        if (m.forEach(function(e) {
                e.classList.remove("mm-listitem_nosubitems"), e.classList.remove("mm-listitem_onlysubitems"), e.classList.remove("mm-hidden")
            }), r && (_(r, ".mm-listview")[0].innerHTML = ""), c.forEach(function(e) {
                e.scrollTop = 0
            }), t.length) {
            d.forEach(function(e) {
                e.classList.add("mm-hidden")
            }), m.forEach(function(e) {
                var n, i = _(e, ".mm-listitem__text")[0],
                    s = !1;
                i && (n = i, Array.prototype.slice.call(n.childNodes).filter(function(e) {
                    return 3 == e.nodeType
                }).map(function(e) {
                    return e.textContent
                }).join(" ")).toLowerCase().indexOf(t) > -1 && (i.matches(".mm-listitem__btn") ? a.showSubPanels && (s = !0) : i.matches("a") ? s = !0 : a.showTextItems && (s = !0)), s || e.classList.add("mm-hidden")
            });
            var p = m.filter(function(e) {
                return !e.matches(".mm-hidden")
            }).length;
            if (a.panel.add) {
                var f = [];
                c.forEach(function(e) {
                    var t = L(g(e, ".mm-listitem"));
                    if ((t = t.filter(function(e) {
                            return !e.matches(".mm-hidden")
                        })).length) {
                        if (a.panel.dividers) {
                            var n = b("li.mm-divider"),
                                i = g(e, ".mm-navbar__title")[0];
                            i && (n.innerHTML = i.innerHTML, f.push(n))
                        }
                        t.forEach(function(e) {
                            f.push(e.cloneNode(!0))
                        })
                    }
                }), f.forEach(function(e) {
                    e.querySelectorAll(".mm-toggle, .mm-check").forEach(function(e) {
                        e.remove()
                    })
                }), (n = _(r, ".mm-listview")[0]).append.apply(n, f), this.openPanel(r)
            } else a.showSubPanels && c.forEach(function(e) {
                L(g(e, ".mm-listitem")).forEach(function(e) {
                    var t = e.mmChild;
                    t && g(t, ".mm-listitem").forEach(function(e) {
                        e.classList.remove("mm-hidden")
                    })
                })
            }), c.slice().reverse().forEach(function(t, n) {
                var a = t.mmParent;
                a && (L(g(t, ".mm-listitem")).length ? (a.matches(".mm-hidden") && a.classList.remove("mm-hidden"), a.classList.add("mm-listitem_onlysubitems")) : e.closest(".mm-panel") || ((t.matches(".mm-panel_opened") || t.matches(".mm-panel_opened-parent")) && setTimeout(function() {
                    i.openPanel(a.closest(".mm-panel"))
                }, (n + 1) * (1.5 * i.conf.openingInterval)), a.classList.add("mm-listitem_nosubitems")))
            }), c.forEach(function(e) {
                L(g(e, ".mm-listitem")).forEach(function(e) {
                    var t = function(e, t) {
                        for (var n = [], i = e.previousElementSibling; i;) t && !i.matches(t) || n.push(i), i = i.previousElementSibling;
                        return n
                    }(e, ".mm-divider")[0];
                    t && t.classList.remove("mm-hidden")
                })
            });
            o.forEach(function(e) {
                return e.classList.remove("mm-hidden")
            }), l.forEach(function(e) {
                g(e, ".mm-panel__noresultsmsg").forEach(function(e) {
                    return e.classList[p ? "add" : "remove"]("mm-hidden")
                })
            }), a.panel.add && (a.panel.splash && g(r, ".mm-panel__content").forEach(function(e) {
                return e.classList.add("mm-hidden")
            }), m.forEach(function(e) {
                return e.classList.remove("mm-hidden")
            }), d.forEach(function(e) {
                return e.classList.remove("mm-hidden")
            }))
        } else if (m.forEach(function(e) {
                return e.classList.remove("mm-hidden")
            }), d.forEach(function(e) {
                return e.classList.remove("mm-hidden")
            }), o.forEach(function(e) {
                return e.classList.add("mm-hidden")
            }), l.forEach(function(e) {
                g(e, ".mm-panel__noresultsmsg").forEach(function(e) {
                    return e.classList.add("mm-hidden")
                })
            }), a.panel.add)
            if (a.panel.splash) g(r, ".mm-panel__content").forEach(function(e) {
                return e.classList.remove("mm-hidden")
            });
            else if (!e.closest(".mm-panel_search")) {
            var u = _(this.node.pnls, ".mm-panel_opened-parent");
            this.openPanel(u.slice(-1)[0])
        }
        this.trigger("updateListview")
    };
    var Te = {
        add: !1,
        addTo: "panels"
    };
    S.options.sectionIndexer = Te;
    var Ce = {
        current: !0,
        hover: !1,
        parent: !1
    };
    S.options.setSelected = Ce;
    var Ne = {
        collapsed: {
            use: !1,
            blockMenu: !0,
            hideDivider: !1,
            hideNavbar: !0
        },
        expanded: {
            use: !1,
            initial: "open"
        }
    };
    S.options.sidebar = Ne;
    S.configs.classNames.toggles = {
        toggle: "Toggle",
        check: "Check"
    };
    /*!
     * mmenu.js
     * mmenujs.com
     *
     * Copyright (c) Fred Heusschen
     * frebsite.nl
     *
     * License: CC-BY-NC-4.0
     * http://creativecommons.org/licenses/by-nc/4.0/
     */
    S.addons = {
        offcanvas: function() {
            var e = this;
            if (this.opts.offCanvas) {
                var t = function(e) {
                    return "object" != typeof e && (e = {}), e
                }(this.opts.offCanvas);
                this.opts.offCanvas = s(t, S.options.offCanvas);
                var n = this.conf.offCanvas;
                this._api.push("open", "close", "setPage"), this.vars.opened = !1, this.bind("initMenu:before", function() {
                    n.clone && (e.node.menu = e.node.menu.cloneNode(!0), e.node.menu.id && (e.node.menu.id = "mm-" + e.node.menu.id), g(e.node.menu, "[id]").forEach(function(e) {
                        e.id = "mm-" + e.id
                    })), e.node.wrpr = document.body, document.querySelector(n.menu.insertSelector)[n.menu.insertMethod](e.node.menu)
                }), this.bind("initMenu:after", function() {
                    j.call(e), e.setPage(S.node.page), H.call(e), e.node.menu.classList.add("mm-menu_offcanvas");
                    var t = window.location.hash;
                    if (t) {
                        var n = d(e.node.menu.id);
                        n && n == t.slice(1) && setTimeout(function() {
                            e.open()
                        }, 1e3)
                    }
                }), this.bind("setPage:after", function(e) {
                    S.node.blck && _(S.node.blck, "a").forEach(function(t) {
                        t.setAttribute("href", "#" + e.id)
                    })
                }), this.bind("open:start:sr-aria", function() {
                    S.sr_aria(e.node.menu, "hidden", !1)
                }), this.bind("close:finish:sr-aria", function() {
                    S.sr_aria(e.node.menu, "hidden", !0)
                }), this.bind("initMenu:after:sr-aria", function() {
                    S.sr_aria(e.node.menu, "hidden", !0)
                }), this.bind("initBlocker:after:sr-text", function() {
                    _(S.node.blck, "a").forEach(function(t) {
                        t.innerHTML = S.sr_text(e.i18n(e.conf.screenReader.text.closeMenu))
                    })
                }), this.clck.push(function(t, n) {
                    var i = d(e.node.menu.id);
                    if (i && t.matches('[href="#' + i + '"]')) {
                        if (n.inMenu) return e.open(), !0;
                        var a = t.closest(".mm-menu");
                        if (a) {
                            var s = a.mmApi;
                            if (s && s.close) return s.close(), c(a, function() {
                                e.open()
                            }, e.conf.transitionDuration), !0
                        }
                        return e.open(), !0
                    }
                    if ((i = S.node.page.id) && t.matches('[href="#' + i + '"]')) return e.close(), !0
                })
            }
        },
        screenReader: function() {
            var e = this,
                t = function(e) {
                    return "boolean" == typeof e && (e = {
                        aria: e,
                        text: e
                    }), "object" != typeof e && (e = {}), e
                }(this.opts.screenReader);
            this.opts.screenReader = s(t, S.options.screenReader);
            var n = this.conf.screenReader;
            t.aria && (this.bind("initAddons:after", function() {
                e.bind("initMenu:after", function() {
                    this.trigger("initMenu:after:sr-aria", [].slice.call(arguments))
                }), e.bind("initNavbar:after", function() {
                    this.trigger("initNavbar:after:sr-aria", [].slice.call(arguments))
                }), e.bind("openPanel:start", function() {
                    this.trigger("openPanel:start:sr-aria", [].slice.call(arguments))
                }), e.bind("close:start", function() {
                    this.trigger("close:start:sr-aria", [].slice.call(arguments))
                }), e.bind("close:finish", function() {
                    this.trigger("close:finish:sr-aria", [].slice.call(arguments))
                }), e.bind("open:start", function() {
                    this.trigger("open:start:sr-aria", [].slice.call(arguments))
                }), e.bind("initOpened:after", function() {
                    this.trigger("initOpened:after:sr-aria", [].slice.call(arguments))
                })
            }), this.bind("updateListview", function() {
                e.node.pnls.querySelectorAll(".mm-listitem").forEach(function(e) {
                    S.sr_aria(e, "hidden", e.matches(".mm-hidden"))
                })
            }), this.bind("openPanel:start", function(t) {
                var n = g(e.node.pnls, ".mm-panel").filter(function(e) {
                        return e !== t
                    }).filter(function(e) {
                        return !e.parentElement.matches(".mm-panel")
                    }),
                    i = [t];
                g(t, ".mm-listitem_vertical .mm-listitem_opened").forEach(function(e) {
                    i.push.apply(i, _(e, ".mm-panel"))
                }), n.forEach(function(e) {
                    S.sr_aria(e, "hidden", !0)
                }), i.forEach(function(e) {
                    S.sr_aria(e, "hidden", !1)
                })
            }), this.bind("closePanel", function(e) {
                S.sr_aria(e, "hidden", !0)
            }), this.bind("initPanel:after", function(e) {
                g(e, ".mm-btn").forEach(function(e) {
                    S.sr_aria(e, "haspopup", !0);
                    var t = e.getAttribute("href");
                    t && S.sr_aria(e, "owns", t.replace("#", ""))
                })
            }), this.bind("initNavbar:after", function(e) {
                var t = _(e, ".mm-navbar")[0],
                    n = t.matches(".mm-hidden");
                S.sr_aria(t, "hidden", n)
            }), t.text && "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", function(e) {
                var t = _(e, ".mm-navbar")[0],
                    n = !!t.querySelector(".mm-btn_prev");
                S.sr_aria(g(t, ".mm-navbar__title")[0], "hidden", n)
            })), t.text && (this.bind("initAddons:after", function() {
                e.bind("setPage:after", function() {
                    this.trigger("setPage:after:sr-text", [].slice.call(arguments))
                }), e.bind("initBlocker:after", function() {
                    this.trigger("initBlocker:after:sr-text", [].slice.call(arguments))
                })
            }), this.bind("initNavbar:after", function(t) {
                var i = _(t, ".mm-navbar")[0];
                if (i) {
                    var a = _(i, ".mm-btn_prev")[0];
                    a && (a.innerHTML = S.sr_text(e.i18n(n.text.closeSubmenu)))
                }
            }), this.bind("initListview:after", function(t) {
                var i = t.closest(".mm-panel").mmParent;
                if (i) {
                    var a = _(i, ".mm-btn_next")[0];
                    if (a) {
                        var s = e.i18n(n.text[a.parentElement.matches(".mm-listitem_vertical") ? "toggleSubmenu" : "openSubmenu"]);
                        a.innerHTML += S.sr_text(s)
                    }
                }
            }))
        },
        scrollBugFix: function() {
            var e = this;
            if (U && this.opts.offCanvas && this.opts.offCanvas.blockUI) {
                var t = function(e) {
                    return "boolean" == typeof e && (e = {
                        fix: e
                    }), "object" != typeof e && (e = {}), e
                }(this.opts.scrollBugFix);
                if (this.opts.scrollBugFix = s(t, S.options.scrollBugFix), t.fix) {
                    var n, i, a = (n = this.node.menu, i = "", n.addEventListener("touchmove", function(e) {
                        e.movementY > 0 ? i = "down" : e.movementY < 0 && (i = "up"), i = null
                    }), {
                        get: function() {
                            return i
                        }
                    });
                    this.node.menu.addEventListener("scroll", o, {
                        passive: !1
                    }), this.node.menu.addEventListener("touchmove", function(e) {
                        var t = e.target.closest(".mm-panel");
                        t ? t.scrollHeight === t.offsetHeight ? o(e) : (0 == t.scrollTop && "down" == a.get() || t.scrollHeight == t.scrollTop + t.offsetHeight && "up" == a.get()) && o(e) : o(e)
                    }, {
                        passive: !1
                    }), this.bind("open:start", function() {
                        _(e.node.pnls, ".mm-panel_opened")[0].scrollTop = 0
                    }), window.addEventListener("orientationchange", function(t) {
                        var n = _(e.node.pnls, ".mm-panel_opened")[0];
                        n.scrollTop = 0, n.style["-webkit-overflow-scrolling"] = "auto", n.style["-webkit-overflow-scrolling"] = "touch"
                    })
                }
            }

            function o(e) {
                e.preventDefault(), e.stopPropagation()
            }
        },
        autoHeight: function() {
            var e = this,
                t = function(e) {
                    return "boolean" == typeof e && e && (e = {
                        height: "auto"
                    }), "string" == typeof e && (e = {
                        height: e
                    }), "object" != typeof e && (e = {}), e
                }(this.opts.autoHeight);
            if (this.opts.autoHeight = s(t, S.options.autoHeight), "auto" == t.height || "highest" == t.height) {
                var n, i = (n = function(e) {
                    return e.parentElement.matches(".mm-listitem_vertical") && (e = y(e, ".mm-panel").filter(function(e) {
                        return !e.parentElement.matches(".mm-listitem_vertical")
                    })[0]), e
                }, function() {
                    if (!e.opts.offCanvas || e.vars.opened) {
                        var i, a, s = 0,
                            o = e.node.menu.offsetHeight - e.node.pnls.offsetHeight;
                        e.node.menu.classList.add("mm-menu_autoheight-measuring"), "auto" == t.height ? ((a = _(e.node.pnls, ".mm-panel_opened")[0]) && (a = n(a)), a || (a = _(e.node.pnls, ".mm-panel")[0]), s = a.scrollHeight) : "highest" == t.height && (i = 0, _(e.node.pnls, ".mm-panel").forEach(function(e) {
                            e = n(e), i = Math.max(i, e.scrollHeight)
                        }), s = i), e.node.menu.style.height = s + o + "px", e.node.menu.classList.remove("mm-menu_autoheight-measuring")
                    }
                });
                this.bind("initMenu:after", function() {
                    e.node.menu.classList.add("mm-menu_autoheight")
                }), this.opts.offCanvas && this.bind("open:start", i), "highest" == t.height && this.bind("initPanels:after", i), "auto" == t.height && (this.bind("updateListview", i), this.bind("openPanel:start", i))
            }
        },
        backButton: function() {
            var e = this;
            if (this.opts.offCanvas) {
                var t = function(e) {
                    return "boolean" == typeof e && (e = {
                        close: e
                    }), "object" != typeof e && (e = {}), e
                }(this.opts.backButton);
                this.opts.backButton = s(t, S.options.backButton);
                var n = "#" + this.node.menu.id;
                if (t.close) {
                    var i = [],
                        a = function() {
                            i = [n], _(e.node.pnls, ".mm-panel_opened, .mm-panel_opened-parent").forEach(function(e) {
                                i.push("#" + e.id)
                            })
                        };
                    this.bind("open:finish", function() {
                        history.pushState(null, document.title, n)
                    }), this.bind("open:finish", a), this.bind("openPanel:finish", a), this.bind("close:finish", function() {
                        i = [], history.back(), history.pushState(null, document.title, location.pathname + location.search)
                    }), window.addEventListener("popstate", function(t) {
                        if (e.vars.opened && i.length) {
                            var a = (i = i.slice(0, -1))[i.length - 1];
                            a == n ? e.close() : (e.openPanel(e.node.menu.querySelector(a)), history.pushState(null, document.title, n))
                        }
                    })
                }
                t.open && window.addEventListener("popstate", function(t) {
                    e.vars.opened || location.hash != n || e.open()
                })
            }
        },
        columns: function() {
            var e = this,
                t = function(e) {
                    return "boolean" == typeof e && (e = {
                        add: e
                    }), "number" == typeof e && (e = {
                        add: !0,
                        visible: e
                    }), "object" != typeof e && (e = {}), "number" == typeof e.visible && (e.visible = {
                        min: e.visible,
                        max: e.visible
                    }), e
                }(this.opts.columns);
            if (this.opts.columns = s(t, S.options.columns), t.add) {
                t.visible.min = Math.max(1, Math.min(6, t.visible.min)), t.visible.max = Math.max(t.visible.min, Math.min(6, t.visible.max));
                for (var n = [], i = [], a = ["mm-panel_opened", "mm-panel_opened-parent", "mm-panel_highest"], o = 0; o <= t.visible.max; o++) n.push("mm-menu_columns-" + o), i.push("mm-panel_columns-" + o);
                a.push.apply(a, i), this.bind("openPanel:before", function(t) {
                    var n;
                    if (t && (n = t.mmParent), n && (n = n.closest(".mm-panel"))) {
                        var i = n.className;
                        if (i.length && (i = i.split("mm-panel_columns-")[1]))
                            for (var s = parseInt(i.split(" ")[0], 10) + 1; s > 0;) {
                                if (!(t = _(e.node.pnls, ".mm-panel_columns-" + s)[0])) {
                                    s = -1;
                                    break
                                }
                                s++, t.classList.add("mm-hidden"), a.forEach(function(e) {
                                    t.classList.remove(e)
                                })
                            }
                    }
                }), this.bind("openPanel:start", function(a) {
                    var s = _(e.node.pnls, ".mm-panel_opened-parent").length;
                    a.matches(".mm-panel_opened-parent") || s++, s = Math.min(t.visible.max, Math.max(t.visible.min, s)), n.forEach(function(t) {
                        e.node.menu.classList.remove(t)
                    }), e.node.menu.classList.add("mm-menu_columns-" + s);
                    var o = [];
                    _(e.node.pnls, ".mm-panel").forEach(function(e) {
                        i.forEach(function(t) {
                            e.classList.remove(t)
                        }), e.matches(".mm-panel_opened-parent") && o.push(e)
                    }), o.push(a), o.slice(-t.visible.max).forEach(function(e, t) {
                        e.classList.add("mm-panel_columns-" + t)
                    })
                })
            }
        },
        counters: function() {
            var e = this,
                t = function(e) {
                    return "boolean" == typeof e && (e = {
                        add: e,
                        addTo: "panels",
                        count: e
                    }), "object" != typeof e && (e = {}), "panels" == e.addTo && (e.addTo = ".mm-listview"), e
                }(this.opts.counters);
            if (this.opts.counters = s(t, S.options.counters), this.bind("initListview:after", function(t) {
                    var n = e.conf.classNames.counters.counter;
                    g(t, "." + n).forEach(function(e) {
                        E(e, n, "mm-counter")
                    })
                }), t.add && this.bind("initListview:after", function(e) {
                    if (e.matches(t.addTo)) {
                        var n = e.closest(".mm-panel").mmParent;
                        if (n && !g(n, ".mm-counter").length) {
                            var i = _(n, ".mm-btn")[0];
                            i && i.prepend(b("span.mm-counter"))
                        }
                    }
                }), t.count) {
                var n = function(t) {
                    (t ? [t.closest(".mm-panel")] : _(e.node.pnls, ".mm-panel")).forEach(function(e) {
                        var t = e.mmParent;
                        if (t) {
                            var n = g(t, ".mm-counter")[0];
                            if (n) {
                                var i = [];
                                _(e, ".mm-listview").forEach(function(e) {
                                    i.push.apply(i, _(e))
                                }), n.innerHTML = L(i).length.toString()
                            }
                        }
                    })
                };
                this.bind("initListview:after", n), this.bind("updateListview", n)
            }
        },
        dividers: function() {
            var e = this,
                t = function(e) {
                    return "boolean" == typeof e && (e = {
                        add: e
                    }), "object" != typeof e && (e = {}), "panels" == e.addTo && (e.addTo = ".mm-listview"), e
                }(this.opts.dividers);
            this.opts.dividers = s(t, S.options.dividers), this.bind("initListview:after", function(t) {
                _(t).forEach(function(t) {
                    E(t, e.conf.classNames.divider, "mm-divider"), t.matches(".mm-divider") && t.classList.remove("mm-listitem")
                })
            }), t.add && this.bind("initListview:after", function(e) {
                if (e.matches(t.addTo)) {
                    g(e, ".mm-divider").forEach(function(e) {
                        e.remove()
                    });
                    var n = "";
                    L(_(e)).forEach(function(t) {
                        var i = _(t, ".mm-listitem__text")[0].textContent.trim().toLowerCase()[0];
                        if (i.length && i != n) {
                            n = i;
                            var a = b("li.mm-divider");
                            a.textContent = i, e.insertBefore(a, t)
                        }
                    })
                }
            })
        },
        drag: function() {
            var e = this;
            if (this.opts.offCanvas) {
                var t = function(e) {
                    return "boolean" == typeof e && (e = {
                        open: e
                    }), "object" != typeof e && (e = {}), e
                }(this.opts.drag);
                this.opts.drag = s(t, S.options.drag), t.open && this.bind("setPage:after", function(n) {
                    (function(e) {
                        var t = this,
                            n = {},
                            i = !1,
                            a = function() {
                                var e = Object.keys(t.opts.extensions);
                                e.length ? (k(e.join(", "), function() {}, function() {
                                    n = re(n, [], t.node.menu)
                                }), e.forEach(function(e) {
                                    k(e, function() {
                                        n = re(n, t.opts.extensions[e], t.node.menu)
                                    }, function() {})
                                })) : n = re(n, [], t.node.menu)
                            };
                        se && (N(se, "dragStart"), N(se, "dragMove"), N(se, "dragEnd")), ae = new ie(se = e), a(), a = function() {}, se && (C(se, "dragStart", function(e) {
                            e.detail.direction == n.direction && (i = !0, t.node.wrpr.classList.add("mm-wrapper_dragging"), t._openSetup(), t.trigger("open:start"), oe = t.node.menu["x" == n.axis ? "clientWidth" : "clientHeight"])
                        }), C(se, "dragMove", function(e) {
                            if (e.detail.axis == n.axis && i) {
                                var t = e.detail["distance" + n.axis.toUpperCase()];
                                switch (n.position) {
                                    case "right":
                                    case "bottom":
                                        t = Math.min(Math.max(t, -oe), 0);
                                        break;
                                    default:
                                        t = Math.max(Math.min(t, oe), 0)
                                }
                                if ("front" == n.zposition) switch (n.position) {
                                    case "right":
                                    case "bottom":
                                        t += oe;
                                        break;
                                    default:
                                        t -= oe
                                }
                                n.slideOutNodes.forEach(function(e) {
                                    e.style.transform = "translate" + n.axis.toUpperCase() + "(" + t + "px)"
                                })
                            }
                        }), C(se, "dragEnd", function(e) {
                            if (e.detail.axis == n.axis && i) {
                                i = !1, t.node.wrpr.classList.remove("mm-wrapper_dragging"), n.slideOutNodes.forEach(function(e) {
                                    e.style.transform = ""
                                });
                                var a = Math.abs(e.detail["distance" + n.axis.toUpperCase()]) >= .75 * oe;
                                if (!a) {
                                    var s = e.detail["movement" + n.axis.toUpperCase()];
                                    switch (n.position) {
                                        case "right":
                                        case "bottom":
                                            a = s <= 0;
                                            break;
                                        default:
                                            a = s >= 0
                                    }
                                }
                                a ? t._openStart() : t.close()
                            }
                        }))
                    }).call(e, t.node || n)
                })
            }
        },
        dropdown: function() {
            var e = this;
            if (this.opts.offCanvas) {
                var t = function(e) {
                    return "boolean" == typeof e && e && (e = {
                        drop: e
                    }), "object" != typeof e && (e = {}), "string" == typeof e.position && (e.position = { of: e.position
                    }), e
                }(this.opts.dropdown);
                this.opts.dropdown = s(t, S.options.dropdown);
                var n = this.conf.dropdown;
                if (t.drop) {
                    var i;
                    this.bind("initMenu:after", function() {
                        if (e.node.menu.classList.add("mm-menu_dropdown"), "string" != typeof t.position.of) {
                            var n = d(e.node.menu.id);
                            n && (t.position.of = '[href="#' + n + '"]')
                        }
                        if ("string" == typeof t.position.of) {
                            i = g(document.body, t.position.of)[0];
                            var a = t.event.split(" ");
                            1 == a.length && (a[1] = a[0]), "hover" == a[0] && i.addEventListener("mouseenter", function() {
                                e.open()
                            }, {
                                passive: !0
                            }), "hover" == a[1] && e.node.menu.addEventListener("mouseleave", function() {
                                e.close()
                            }, {
                                passive: !0
                            })
                        }
                    }), this.bind("open:start", function() {
                        e.node.menu.mmStyle = e.node.menu.getAttribute("style"), e.node.wrpr.classList.add("mm-wrapper_dropdown")
                    }), this.bind("close:finish", function() {
                        e.node.menu.setAttribute("style", e.node.menu.mmStyle), e.node.wrpr.classList.remove("mm-wrapper_dropdown")
                    });
                    var a = function(e, a) {
                        var s, o, r, c = a[0],
                            l = a[1],
                            m = "x" == e ? "offsetWidth" : "offsetHeight",
                            d = "x" == e ? "left" : "top",
                            p = "x" == e ? "right" : "bottom",
                            f = "x" == e ? "width" : "height",
                            u = "x" == e ? "innerWidth" : "innerHeight",
                            h = "x" == e ? "maxWidth" : "maxHeight",
                            v = null,
                            b = (s = d, i.getBoundingClientRect()[s] + document.body["left" === s ? "scrollLeft" : "scrollTop"]),
                            g = b + i[m],
                            _ = window[u],
                            y = n.offset.button[e] + n.offset.viewport[e];
                        if (t.position[e]) switch (t.position[e]) {
                            case "left":
                            case "bottom":
                                v = "after";
                                break;
                            case "right":
                            case "top":
                                v = "before"
                        }
                        return null === v && (v = b + (g - b) / 2 < _ / 2 ? "after" : "before"), "after" == v ? (r = _ - ((o = "x" == e ? b : g) + y), c[d] = o + n.offset.button[e] + "px", c[p] = "auto", t.tip && l.push("mm-menu_tip-" + ("x" == e ? "left" : "top"))) : (r = (o = "x" == e ? g : b) - y, c[p] = "calc( 100% - " + (o - n.offset.button[e]) + "px )", c[d] = "auto", t.tip && l.push("mm-menu_tip-" + ("x" == e ? "right" : "bottom"))), t.fitViewport && (c[h] = Math.min(n[f].max, r) + "px"), [c, l]
                    };
                    this.bind("open:start", o), window.addEventListener("resize", function(t) {
                        o.call(e)
                    }, {
                        passive: !0
                    }), this.opts.offCanvas.blockUI || window.addEventListener("scroll", function(t) {
                        o.call(e)
                    }, {
                        passive: !0
                    })
                }
            }

            function o() {
                var e = this;
                if (this.vars.opened) {
                    this.node.menu.setAttribute("style", this.node.menu.mmStyle);
                    var n = [{},
                        []
                    ];
                    for (var i in n = a.call(this, "y", n), (n = a.call(this, "x", n))[0]) this.node.menu.style[i] = n[0][i];
                    t.tip && (["mm-menu_tip-left", "mm-menu_tip-right", "mm-menu_tip-top", "mm-menu_tip-bottom"].forEach(function(t) {
                        e.node.menu.classList.remove(t)
                    }), n[1].forEach(function(t) {
                        e.node.menu.classList.add(t)
                    }))
                }
            }
        },
        fixedElements: function() {
            var e = this;
            if (this.opts.offCanvas) {
                var t, n, i = this.conf.fixedElements;
                this.bind("setPage:after", function(a) {
                    t = e.conf.classNames.fixedElements.fixed, n = g(document, i.insertSelector)[0], g(a, "." + t).forEach(function(e) {
                        E(e, t, "mm-slideout"), n[i.insertMethod](e)
                    })
                })
            }
        },
        iconbar: function() {
            var e, t = this,
                n = function(e) {
                    return "array" == o(e) && (e = {
                        use: !0,
                        top: e
                    }), "object" != o(e) && (e = {}), void 0 === e.use && (e.use = !0), "boolean" == typeof e.use && e.use && (e.use = !0), e
                }(this.opts.iconbar);
            if (this.opts.iconbar = s(n, S.options.iconbar), n.use && (["top", "bottom"].forEach(function(t, i) {
                    var a = n[t];
                    "array" != o(a) && (a = [a]);
                    for (var s = b("div.mm-iconbar__" + t), r = 0, c = a.length; r < c; r++) "string" == typeof a[r] ? s.innerHTML += a[r] : s.append(a[r]);
                    s.children.length && (e || (e = b("div.mm-iconbar")), e.append(s))
                }), e)) {
                this.bind("initMenu:after", function() {
                    t.node.menu.prepend(e)
                });
                var i = "mm-menu_iconbar-" + n.position,
                    a = function() {
                        t.node.menu.classList.add(i), S.sr_aria(e, "hidden", !1)
                    };
                if ("boolean" == typeof n.use ? this.bind("initMenu:after", a) : k(n.use, a, function() {
                        t.node.menu.classList.remove(i), S.sr_aria(e, "hidden", !0)
                    }), "tabs" == n.type) {
                    e.classList.add("mm-iconbar_tabs"), e.addEventListener("click", function(e) {
                        var n = e.target;
                        if (n.matches("a"))
                            if (n.matches(".mm-iconbar__tab_selected")) e.stopImmediatePropagation();
                            else try {
                                var i = t.node.menu.querySelector(n.getAttribute("href"))[0];
                                i && i.matches(".mm-panel") && (e.preventDefault(), e.stopImmediatePropagation(), t.openPanel(i, !1))
                            } catch (e) {}
                    });
                    var r = function(t) {
                        g(e, "a").forEach(function(e) {
                            e.classList.remove("mm-iconbar__tab_selected")
                        });
                        var n = g(e, '[href="#' + t.id + '"]')[0];
                        if (n) n.classList.add("mm-iconbar__tab_selected");
                        else {
                            var i = t.mmParent;
                            i && r(i.closest(".mm-panel"))
                        }
                    };
                    this.bind("openPanel:start", r)
                }
            }
        },
        iconPanels: function() {
            var e = this,
                t = function(e) {
                    return "boolean" == typeof e && (e = {
                        add: e
                    }), "number" != typeof e && "string" != typeof e || (e = {
                        add: !0,
                        visible: e
                    }), "object" != typeof e && (e = {}), e
                }(this.opts.iconPanels);
            this.opts.iconPanels = s(t, S.options.iconPanels);
            var n = !1;
            if ("first" == t.visible && (n = !0, t.visible = 1), t.visible = Math.min(3, Math.max(1, t.visible)), t.visible++, t.add) {
                this.bind("initMenu:after", function() {
                    var n = ["mm-menu_iconpanel"];
                    t.hideNavbar && n.push("mm-menu_hidenavbar"), t.hideDivider && n.push("mm-menu_hidedivider"), n.forEach(function(t) {
                        e.node.menu.classList.add(t)
                    })
                });
                var i = [];
                if (!n)
                    for (var a = 0; a <= t.visible; a++) i.push("mm-panel_iconpanel-" + a);
                this.bind("openPanel:start", function(a) {
                    var s = _(e.node.pnls, ".mm-panel");
                    if (!(a = a || s[0]).parentElement.matches(".mm-listitem_vertical"))
                        if (n) s.forEach(function(e, t) {
                            e.classList[0 == t ? "add" : "remove"]("mm-panel_iconpanel-first")
                        });
                        else {
                            s.forEach(function(e) {
                                i.forEach(function(t) {
                                    e.classList.remove(t)
                                })
                            }), s = s.filter(function(e) {
                                return e.matches(".mm-panel_opened-parent")
                            });
                            var o = !1;
                            s.forEach(function(e) {
                                a === e && (o = !0)
                            }), o || s.push(a), s.forEach(function(e) {
                                e.classList.remove("mm-hidden")
                            }), (s = s.slice(-t.visible)).forEach(function(e, t) {
                                e.classList.add("mm-panel_iconpanel-" + t)
                            })
                        }
                }), this.bind("initPanel:after", function(e) {
                    if (t.blockPanel && !e.parentElement.matches(".mm-listitem_vertical") && !_(e, ".mm-panel__blocker")[0]) {
                        var n = b("a.mm-panel__blocker");
                        n.setAttribute("href", "#" + e.closest(".mm-panel").id), e.prepend(n)
                    }
                })
            }
        },
        keyboardNavigation: function() {
            var e = this;
            if (!U) {
                var t = function(e) {
                    return "boolean" != typeof e && "string" != typeof e || (e = {
                        enable: e
                    }), "object" != typeof e && (e = {}), e
                }(this.opts.keyboardNavigation);
                if (this.opts.keyboardNavigation = s(t, S.options.keyboardNavigation), t.enable) {
                    var n = b("button.mm-tabstart.mm-sronly"),
                        i = b("button.mm-tabend.mm-sronly"),
                        a = b("button.mm-tabend.mm-sronly");
                    this.bind("initMenu:after", function() {
                        t.enhance && e.node.menu.classList.add("mm-menu_keyboardfocus"), ue.call(e, t.enhance)
                    }), this.bind("initOpened:before", function() {
                        e.node.menu.prepend(n), e.node.menu.append(i), _(e.node.menu, ".mm-navbars-top, .mm-navbars-bottom").forEach(function(e) {
                            e.querySelectorAll(".mm-navbar__title").forEach(function(e) {
                                e.setAttribute("tabindex", "-1")
                            })
                        })
                    }), this.bind("initBlocker:after", function() {
                        S.node.blck.append(a), _(S.node.blck, "a")[0].classList.add("mm-tabstart")
                    });
                    var o = "input, select, textarea, button, label, a[href]",
                        r = function(n) {
                            n = n || _(e.node.pnls, ".mm-panel_opened")[0];
                            var i = null,
                                a = document.activeElement.closest(".mm-navbar");
                            if (!a || a.closest(".mm-menu") != e.node.menu) {
                                if ("default" == t.enable && ((i = g(n, ".mm-listview a[href]:not(.mm-hidden)")[0]) || (i = g(n, o + ":not(.mm-hidden)")[0]), !i)) {
                                    var s = [];
                                    _(e.node.menu, ".mm-navbars_top, .mm-navbars_bottom").forEach(function(e) {
                                        s.push.apply(s, g(e, o + ":not(.mm-hidden)"))
                                    }), i = s[0]
                                }
                                i || (i = _(e.node.menu, ".mm-tabstart")[0]), i && i.focus()
                            }
                        };
                    this.bind("open:finish", r), this.bind("openPanel:finish", r), this.bind("initOpened:after:sr-aria", function() {
                        [e.node.menu, S.node.blck].forEach(function(e) {
                            _(e, ".mm-tabstart, .mm-tabend").forEach(function(e) {
                                S.sr_aria(e, "hidden", !0), S.sr_role(e, "presentation")
                            })
                        })
                    })
                }
            }
        },
        lazySubmenus: function() {
            var e = this,
                t = function(e) {
                    return "boolean" == typeof e && (e = {
                        load: e
                    }), "object" != typeof e && (e = {}), e
                }(this.opts.lazySubmenus);
            this.opts.lazySubmenus = s(t, S.options.lazySubmenus), t.load && (this.bind("initMenu:after", function() {
                var t = [];
                g(e.node.pnls, "li").forEach(function(n) {
                    t.push.apply(t, _(n, e.conf.panelNodetype.join(", ")))
                }), t.filter(function(e) {
                    return !e.matches(".mm-listview_inset")
                }).filter(function(e) {
                    return !e.matches(".mm-nolistview")
                }).filter(function(e) {
                    return !e.matches(".mm-nopanel")
                }).forEach(function(e) {
                    ["mm-panel_lazysubmenu", "mm-nolistview", "mm-nopanel"].forEach(function(t) {
                        e.classList.add(t)
                    })
                })
            }), this.bind("initPanels:before", function() {
                _(e.node.pnls, e.conf.panelNodetype.join(", ")).forEach(function(e) {
                    var t = ".mm-panel_lazysubmenu",
                        n = g(e, t);
                    e.matches(t) && n.unshift(e), n.filter(function(e) {
                        return !e.matches(".mm-panel_lazysubmenu .mm-panel_lazysubmenu")
                    }).forEach(function(e) {
                        ["mm-panel_lazysubmenu", "mm-nolistview", "mm-nopanel"].forEach(function(t) {
                            e.classList.remove(t)
                        })
                    })
                })
            }), this.bind("initOpened:before", function() {
                var t = [];
                g(e.node.pnls, "." + e.conf.classNames.selected).forEach(function(e) {
                    t.push.apply(t, y(e, ".mm-panel_lazysubmenu"))
                }), t.length && (t.forEach(function(e) {
                    ["mm-panel_lazysubmenu", "mm-nolistview", "mm-nopanel"].forEach(function(t) {
                        e.classList.remove(t)
                    })
                }), e.initPanel(t[t.length - 1]))
            }), this.bind("openPanel:before", function(t) {
                var n = ".mm-panel_lazysubmenu",
                    i = g(t, n);
                t.matches(n) && i.unshift(t), (i = i.filter(function(e) {
                    return !e.matches(".mm-panel_lazysubmenu .mm-panel_lazysubmenu")
                })).forEach(function(t) {
                    e.initPanel(t)
                })
            }))
        },
        navbars: ge,
        pageScroll: function() {
            var e = this,
                t = function(e) {
                    return "boolean" == typeof e && (e = {
                        scroll: e
                    }), "object" != typeof e && (e = {}), e
                }(this.opts.pageScroll);
            this.opts.pageScroll = s(t, S.options.pageScroll);
            var n, i = this.conf.pageScroll;

            function a() {
                n && window.scrollTo({
                    top: n.getBoundingClientRect().top + document.scrollingElement.scrollTop - i.scrollOffset,
                    behavior: "smooth"
                }), n = null
            }

            function o(e) {
                try {
                    return "#" != e && "#" == e.slice(0, 1) ? S.node.page.querySelector(e) : null
                } catch (e) {
                    return null
                }
            }
            if (t.scroll && this.bind("close:finish", function() {
                    a()
                }), this.opts.offCanvas && t.scroll && this.clck.push(function(t, i) {
                    if (n = null, i.inMenu) {
                        var s = t.getAttribute("href");
                        if (n = o(s)) return e.node.menu.matches(".mm-menu_sidebar-expanded") && e.node.wrpr.matches(".mm-wrapper_sidebar-expanded") ? void a() : {
                            close: !0
                        }
                    }
                }), t.update) {
                var r = [];
                this.bind("initListview:after", function(e) {
                    w(_(e, ".mm-listitem")).forEach(function(e) {
                        var t = o(e.getAttribute("href"));
                        t && r.unshift(t)
                    })
                });
                var c = -1;
                window.addEventListener("scroll", function(t) {
                    for (var n = window.scrollY, a = 0; a < r.length; a++)
                        if (r[a].offsetTop < n + i.updateOffset) {
                            if (c !== a) {
                                c = a;
                                var s = w(g(_(e.node.pnls, ".mm-panel_opened")[0], ".mm-listitem"));
                                (s = s.filter(function(e) {
                                    return e.matches('[href="#' + r[a].id + '"]')
                                })).length && e.setSelected(s[0].parentElement)
                            }
                            break
                        }
                })
            }
        },
        searchfield: function() {
            var e = this,
                t = function(e) {
                    return "boolean" == typeof e && (e = {
                        add: e
                    }), "object" != typeof e && (e = {}), "boolean" == typeof e.panel && (e.panel = {
                        add: e.panel
                    }), "object" != typeof e.panel && (e.panel = {}), "panel" == e.addTo && (e.panel.add = !0), e.panel.add && (e.showSubPanels = !1, e.panel.splash && (e.cancel = !0)), e
                }(this.opts.searchfield);
            this.opts.searchfield = s(t, S.options.searchfield);
            this.conf.searchfield;
            t.add && (this.bind("close:start", function() {
                g(e.node.menu, ".mm-searchfield").forEach(function(e) {
                    e.blur()
                })
            }), this.bind("initPanel:after", function(n) {
                var i = null;
                t.panel.add && (i = Pe.call(e));
                var a = null;
                switch (t.addTo) {
                    case "panels":
                        a = [n];
                        break;
                    case "panel":
                        a = [i];
                        break;
                    default:
                        "string" == typeof t.addTo ? a = g(e.node.menu, t.addTo) : "array" == o(t.addTo) && (a = t.addTo)
                }
                a.forEach(function(n) {
                    n = Se.call(e, n), t.search && n && Me.call(e, n)
                }), t.noResults && Ae.call(e, t.panel.add ? i : n)
            }), this.clck.push(function(t, n) {
                if (n.inMenu && t.matches(".mm-searchfield__btn")) {
                    if (t.matches(".mm-btn_close")) {
                        var i = g(a = t.closest(".mm-searchfield"), "input")[0];
                        return i.value = "", e.search(i), !0
                    }
                    var a;
                    if (t.matches(".mm-btn_next")) return (a = t.closest("form")) && a.submit(), !0
                }
            }))
        },
        sectionIndexer: function() {
            var e = this,
                t = function(e) {
                    return "boolean" == typeof e && (e = {
                        add: e
                    }), "object" != typeof e && (e = {}), e
                }(this.opts.sectionIndexer);
            this.opts.sectionIndexer = s(t, S.options.sectionIndexer), t.add && this.bind("initPanels:after", function() {
                if (!e.node.indx) {
                    var t = "";
                    "abcdefghijklmnopqrstuvwxyz".split("").forEach(function(e) {
                        t += '<a href="#">' + e + "</a>"
                    });
                    var n = b("div.mm-sectionindexer");
                    n.innerHTML = t, e.node.pnls.prepend(n), e.node.indx = n, e.node.indx.addEventListener("click", function(e) {
                        e.target.matches("a") && e.preventDefault()
                    });
                    var i = function(t) {
                        if (t.target.matches("a")) {
                            var n = t.target.textContent,
                                i = _(e.node.pnls, ".mm-panel_opened")[0],
                                a = -1,
                                s = i.scrollTop;
                            i.scrollTop = 0, g(i, ".mm-divider").filter(function(e) {
                                return !e.matches(".mm-hidden")
                            }).forEach(function(e) {
                                a < 0 && n == e.textContent.trim().slice(0, 1).toLowerCase() && (a = e.offsetTop)
                            }), i.scrollTop = a > -1 ? a : s
                        }
                    };
                    U ? (e.node.indx.addEventListener("touchstart", i), e.node.indx.addEventListener("touchmove", i)) : e.node.indx.addEventListener("mouseover", i)
                }
                e.bind("openPanel:start", function(t) {
                    var n = g(t, ".mm-divider").filter(function(e) {
                        return !e.matches(".mm-hidden")
                    }).length;
                    e.node.indx.classList[n ? "add" : "remove"]("mm-sectionindexer_active")
                })
            })
        },
        setSelected: function() {
            var e = this,
                t = function(e) {
                    return "boolean" == typeof e && (e = {
                        hover: e,
                        parent: e
                    }), "object" != typeof e && (e = {}), e
                }(this.opts.setSelected);
            if (this.opts.setSelected = s(t, S.options.setSelected), "detect" == t.current) {
                var n = function(t) {
                    t = t.split("?")[0].split("#")[0];
                    var i = e.node.menu.querySelector('a[href="' + t + '"], a[href="' + t + '/"]');
                    if (i) e.setSelected(i.parentElement);
                    else {
                        var a = t.split("/").slice(0, -1);
                        a.length && n(a.join("/"))
                    }
                };
                this.bind("initMenu:after", function() {
                    n.call(e, window.location.href)
                })
            } else t.current || this.bind("initListview:after", function(e) {
                _(e, ".mm-listitem_selected").forEach(function(e) {
                    e.classList.remove("mm-listitem_selected")
                })
            });
            t.hover && this.bind("initMenu:after", function() {
                e.node.menu.classList.add("mm-menu_selected-hover")
            }), t.parent && (this.bind("openPanel:finish", function(t) {
                g(e.node.pnls, ".mm-listitem_selected-parent").forEach(function(e) {
                    e.classList.remove("mm-listitem_selected-parent")
                });
                for (var n = t.mmParent; n;) n.matches(".mm-listitem_vertical") || n.classList.add("mm-listitem_selected-parent"), n = (n = n.closest(".mm-panel")).mmParent
            }), this.bind("initMenu:after", function() {
                e.node.menu.classList.add("mm-menu_selected-parent")
            }))
        },
        sidebar: function() {
            var e = this;
            if (this.opts.offCanvas) {
                var t = function(e) {
                    return ("string" == typeof e || "boolean" == typeof e && e || "number" == typeof e) && (e = {
                        expanded: e
                    }), "object" != typeof e && (e = {}), "boolean" == typeof e.collapsed && e.collapsed && (e.collapsed = {
                        use: !0
                    }), "string" != typeof e.collapsed && "number" != typeof e.collapsed || (e.collapsed = {
                        use: e.collapsed
                    }), "object" != typeof e.collapsed && (e.collapsed = {}), "boolean" == typeof e.expanded && e.expanded && (e.expanded = {
                        use: !0
                    }), "string" != typeof e.expanded && "number" != typeof e.expanded || (e.expanded = {
                        use: e.expanded
                    }), "object" != typeof e.expanded && (e.expanded = {}), e
                }(this.opts.sidebar);
                if (this.opts.sidebar = s(t, S.options.sidebar), t.collapsed.use) {
                    this.bind("initMenu:after", function() {
                        if (e.node.menu.classList.add("mm-menu_sidebar-collapsed"), t.collapsed.blockMenu && e.opts.offCanvas && !_(e.node.menu, ".mm-menu__blocker")[0]) {
                            var n = b("a.mm-menu__blocker");
                            n.setAttribute("href", "#" + e.node.menu.id), e.node.menu.prepend(n)
                        }
                        t.collapsed.hideNavbar && e.node.menu.classList.add("mm-menu_hidenavbar"), t.collapsed.hideDivider && e.node.menu.classList.add("mm-menu_hidedivider")
                    });
                    var n = function() {
                            e.node.wrpr.classList.add("mm-wrapper_sidebar-collapsed")
                        },
                        i = function() {
                            e.node.wrpr.classList.remove("mm-wrapper_sidebar-collapsed")
                        };
                    "boolean" == typeof t.collapsed.use ? this.bind("initMenu:after", n) : k(t.collapsed.use, n, i)
                }
                if (t.expanded.use) {
                    this.bind("initMenu:after", function() {
                        e.node.menu.classList.add("mm-menu_sidebar-expanded")
                    }), n = function() {
                        e.node.wrpr.classList.add("mm-wrapper_sidebar-expanded"), e.node.wrpr.matches(".mm-wrapper_sidebar-closed") || e.open()
                    }, i = function() {
                        e.node.wrpr.classList.remove("mm-wrapper_sidebar-expanded"), e.close()
                    }, "boolean" == typeof t.expanded.use ? this.bind("initMenu:after", n) : k(t.expanded.use, n, i), this.bind("close:start", function() {
                        e.node.wrpr.matches(".mm-wrapper_sidebar-expanded") && (e.node.wrpr.classList.add("mm-wrapper_sidebar-closed"), "remember" == t.expanded.initial && window.localStorage.setItem("mmenuExpandedState", "closed"))
                    }), this.bind("open:start", function() {
                        e.node.wrpr.matches(".mm-wrapper_sidebar-expanded") && (e.node.wrpr.classList.remove("mm-wrapper_sidebar-closed"), "remember" == t.expanded.initial && window.localStorage.setItem("mmenuExpandedState", "open"))
                    });
                    var a = t.expanded.initial;
                    if ("remember" == t.expanded.initial) {
                        var o = window.localStorage.getItem("mmenuExpandedState");
                        switch (o) {
                            case "open":
                            case "closed":
                                a = o
                        }
                    }
                    "closed" == a && this.bind("initMenu:after", function() {
                        e.node.wrpr.classList.add("mm-wrapper_sidebar-closed")
                    }), this.clck.push(function(n, i) {
                        if (i.inMenu && i.inListview && e.node.wrpr.matches(".mm-wrapper_sidebar-expanded")) return {
                            close: "closed" == t.expanded.initial
                        }
                    })
                }
            }
        },
        toggles: function() {
            var e = this;
            this.bind("initPanel:after", function(t) {
                g(t, "input").forEach(function(t) {
                    E(t, e.conf.classNames.toggles.toggle, "mm-toggle"), E(t, e.conf.classNames.toggles.check, "mm-check")
                })
            })
        }
    }, S.wrappers = {
        angular: function() {
            this.opts.onClick = {
                close: !0,
                preventDefault: !1,
                setSelected: !0
            }
        },
        bootstrap: function() {
            var e = this;
            if (this.node.menu.matches(".navbar-collapse")) {
                this.conf.offCanvas && (this.conf.offCanvas.clone = !1);
                var t = b("nav"),
                    n = b("div");
                t.append(n), _(this.node.menu).forEach(function(t) {
                    switch (!0) {
                        case t.matches(".navbar-nav"):
                            n.append((i = t, a = b("ul"), g(i, ".nav-item").forEach(function(e) {
                                var t = b("li");
                                if (e.matches(".active") && t.classList.add("Selected"), !e.matches(".nav-link")) {
                                    var n = _(e, ".dropdown-menu")[0];
                                    n && t.append(o(n)), e = _(e, ".nav-link")[0]
                                }
                                t.prepend(s(e)), a.append(t)
                            }), a));
                            break;
                        case t.matches(".dropdown-menu"):
                            n.append(o(t));
                            break;
                        case t.matches(".form-inline"):
                            e.conf.searchfield.form = {
                                action: t.getAttribute("action") || null,
                                method: t.getAttribute("method") || null
                            }, e.conf.searchfield.input = {
                                name: t.querySelector("input").getAttribute("name") || null
                            }, e.conf.searchfield.clear = !1, e.conf.searchfield.submit = !0;
                            break;
                        default:
                            n.append(t.cloneNode(!0))
                    }
                    var i, a
                }), this.bind("initMenu:before", function() {
                    document.body.prepend(t), e.node.menu = t
                });
                var i = this.node.menu.parentElement;
                if (i) {
                    var a = i.querySelector(".navbar-toggler");
                    a && (delete a.dataset.target, a.removeAttribute("aria-controls"), a.outerHTML = a.outerHTML, (a = i.querySelector(".navbar-toggler")).addEventListener("click", function(t) {
                        t.preventDefault(), t.stopImmediatePropagation(), e[e.vars.opened ? "close" : "open"]()
                    }))
                }
            }

            function s(e) {
                for (var t = b(e.matches("a") ? "a" : "span"), n = ["href", "title", "target"], i = 0; i < n.length; i++) void 0 !== e.getAttribute(n[i]) && t.setAttribute(n[i], e.getAttribute(n[i]));
                return t.innerHTML = e.innerHTML, g(t, ".sr-only").forEach(function(e) {
                    e.remove()
                }), t
            }

            function o(e) {
                var t = b("ul");
                return _(e).forEach(function(e) {
                    var n = b("li");
                    e.matches(".dropdown-divider") ? n.classList.add("Divider") : e.matches(".dropdown-item") && n.append(s(e)), t.append(n)
                }), t
            }
        },
        olark: function() {
            this.conf.offCanvas.page.noSelector.push("#olark")
        },
        turbolinks: function() {
            var e;
            document.addEventListener("turbolinks:before-visit", function(t) {
                e = document.querySelector(".mm-wrapper").className.split(" ").filter(function(e) {
                    return /mm-/.test(e)
                })
            }), document.addEventListener("turbolinks:load", function(t) {
                void 0 !== e && (document.querySelector(".mm-wrapper").className = e)
            })
        },
        wordpress: function() {
            this.conf.classNames.selected = "current-menu-item";
            var e = document.getElementById("wpadminbar");
            e && (e.style.position = "fixed", e.classList.add("mm-slideout"))
        }
    };
    var He;
    t.default = S;
    window.Mmenu = S, (He = window.jQuery || window.Zepto || null) && (He.fn.mmenu = function(e, t) {
        var n = He();
        return this.each(function(i, a) {
            if (a.mmApi) return;
            let s = new S(a, e, t),
                o = He(s.node.menu);
            o.data("mmenu", s.API), n = n.add(o)
        }), n
    })
}]);