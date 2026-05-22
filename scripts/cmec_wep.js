/*
 * CoreMedia Engagement Cloud Script
 * https://coremedia.com
 *
 * v20250407a
 */
var bysideWebcare_versionid = "v20250407a";
var bysideWebcare_baseurl = "https://bywe1.byside.com/";
var bysideWebcare_postMessage_baseurl = "https://bywe1.byside.com/";
var bysideWebcare_s3_baseurl = "https://s0.byside.com/";
var bysideWebcare_websockets_baseurl = "https://wwe1.byside.com:443";
var bysideWebcare_webpush_baseurl = window.bysideWebcare_webpush_baseurl || "https://pnwe1.byside.com";
if (typeof window.bysideWebcare_script_tag_loaded === "undefined" || !window.bysideWebcare_script_tag_loaded) {
    var bysideWebcare_currentrevision = "";
    var bysideWebcare_loadnow_ready = false;
    var bysideWebcare_identification_type = "A";
    var bysideWebcare_default_cookie_lifetime = 365 * 2;
    var bysideWebcare_pageStartTime = new Date().getTime();
    var iwc_loadjs = 1;
    var bysideWebcare_is_IE6_or_IE7 = false;
    var bysideWebcareInfoProcessed = false;
    var byside_webcare_tuid_ttl = 0;
    var bysideWebcare_onwindowclose_alreadyshown = false;
    var bysideWebcare_onwindowclose_allow = true;
    var bysideWebcare_onwindowclosepopupid = "";
    var bysideWebcare_onwindowclosedestinationtype = "";
    var bysideWebcare_onwindowclosedestination = "";
    var bysideWebcare_onwindowclosewindowid = "";
    var bysideWebcare_onwindowclosewindowmode = "";
    var bysideWebcare_onwindowcloseeventid = "";
    var bysideWebcare_onwindowclosetext1 = "";
    var bysideWebcare_onwindowclosetext2 = "";
    var bysideWebcare_onwindowcloseps = null;
    var bysideWebcare_onwindowclosefired = false;
    var bysideWebcare_timeelapsedriggerevents = [];
    var bysideWebcare_inactivitytimers = [];
    var bysideWebcare_manualtriggerevents = [];
    var bysideWebcare_scrolltriggerevents = [];
    var bysideWebcare_abandontriggerevents = [];
    var bysideWebcare_renderedevents = [];
    var bysideWebcare_iscontactwindowopen = false;
    var bysideWebcare_isanycampaignopen = false;
    var bysideWebcare_tagLoadedDate = new Date();
    var bysideWebcare_maxScroll = 0;
    var bysideWebcare_detectWindowScroll_enabled = false;
    var bysideWebcare_detectMouseMovement_enabled = false;
    var bysideWebcareHighZ = 600;
    var bysideWebcareSlideTime = 700;
    var bysideWebcarePopUps = [];
    var bysideWebcareScrollPopUps = [];
    var bysideWebcareOpenBlockingBGLayers = 0;
    var bysideWebcare_landing_id;
    var bysideWebcare_elements_to_load = 0;
    var bysideWebcare_widget_counter = 1;
    var bysideWebcare_widgets = [];
    var bysideWebcare_widgets_by_label = [];
    var bysideWebcare_banner_counter = 1;
    var bysideWebcare_banner_last_loaded = 1;
    var bysideWebcare_banners = [];
    var iwc_alphaopacity = typeof window.iwc_alphaopacity !== "undefined" ? window.iwc_alphaopacity : 50;
    var iwc_alphacolour = window.iwc_alphacolour || "#000";
    var iwc_alphaopacity2 = (iwc_alphaopacity / 100) + "";
    iwc_alphaopacity2 = iwc_alphaopacity2.replace(",", ".");
    var bysideWebcare_hasFocus = false;
    var bysideWebcareVisitorP13n = [];
    var bysideWebcareVisitorP13nABvariants = [];
    var byside_webcare_tuid = window.byside_webcare_tuid || null;
    var byside_webcare_suid = window.byside_webcare_suid || null;
    var byside_webcare_puid = window.byside_webcare_puid || null;
    var bysideWebcare_uatk = window.bysideWebcare_uatk || null;
    var bysideWebcare_currentPageUrl = window.bysideWebcare_currentPageUrl || null;
    var bysideWebcare_maxWaitTimeForCMECElementsMS = window.bysideWebcare_maxWaitTimeForCMECElementsMS || 5000;
    var bysideWebcare_maxWaitTimeForCMCCElementsMS = window.bysideWebcare_maxWaitTimeForCMCCElementsMS || 5000;
    if (typeof bysideWebcare_channel === "undefined" || bysideWebcare_channel === null) {
        bysideWebcare_channel = ""
    }
    if (typeof bysideWebcare_lang === "undefined" || bysideWebcare_lang === null) {
        bysideWebcare_lang = "en"
    }
    if (typeof bysideWebcare_lang === "string" && bysideWebcare_lang) {
        bysideWebcare_lang = bysideWebcare_lang.split("-")[0].toLowerCase()
    }
    if (!bysideWebcare_fid_isValidFid()) {
        bysideWebcare_fid = ""
    }
    if (bysideWebcare_fid) {
        bysideWebcare_identification_type = "I"
    }
    if (typeof bysideWebcare_default_timeout !== "number" || bysideWebcare_default_timeout === null) {
        bysideWebcare_default_timeout = -1
    }
    if (typeof bysideWebcare_use_websockets === "undefined" || bysideWebcare_use_websockets === null) {
        bysideWebcare_use_websockets = true
    }
    try {
        bysideWebcare_cookie_lifetime = bysideWebcare_isValidCookieLifetime() ? parseInt(bysideWebcare_cookie_lifetime, 10) : bysideWebcare_default_cookie_lifetime
    } catch (err) {
        bysideWebcare_cookie_lifetime = bysideWebcare_default_cookie_lifetime
    }
    if (typeof bysideWebcare_visitor_segments_ls_key === "undefined") {
        bysideWebcare_visitor_segments_ls_key = null
    }
    if (typeof bysideWebcare_querystring !== "undefined") {
        bysideWebcare_querystring = bysideWebcare_querystring || ""
    } else {
        bysideWebcare_querystring = ""
    }
    if (typeof bysideWebcare_cspid === "undefined") {
        bysideWebcare_cspid = bysideWebcare_findPageNonce()
    }
    if (typeof bysideWebcare_cookie_expiration_reset === "undefined") {
        bysideWebcare_cookie_expiration_reset = true
    }
    bysideWebcare_cookie_expiration_reset = !bysideWebcare_cookie_expiration_reset || bysideWebcare_cookie_expiration_reset === "0" ? false : !!bysideWebcare_cookie_expiration_reset;
    var byside_webcare_bwatfb = !!bysideWebcare_getcurrentpageparam("BWATFB");
    var byside_webcare_bwasc = +bysideWebcare_getcurrentpageparam("BWASC") === 1;
    var byside_webcare_bwcocva = bysideWebcare_getcurrentpageparam("bwcocva");
    window.bysideWebcare_content_locale = window.bysideWebcare_content_locale || "";
    window.bysideWebcare_content_type = window.bysideWebcare_content_type || null;
    window.bysideWebcare_content_uuid = window.bysideWebcare_content_uuid || null;
    window.bysideWebcare_content_unavailable = window.bysideWebcare_content_unavailable || null;
    window.bysideWebcare_site_id = window.bysideWebcare_site_id || null;
    window.bysideWebcare_preview = window.bysideWebcare_preview || false;
    window.bysideWebcare_isInStudioIframe = window.bysideWebcare_isInStudioIframe || false;
    if (window.bysideWebcare_preview) {
        try {
            window.bysideWebcare_isInStudioIframe = window.self !== window.top
        } catch (error) {
            window.bysideWebcare_isInStudioIframe = error instanceof DOMException && error.name === "SecurityError"
        }
    }
    window.bysideWebcare_processAfterContentLoaded = (window.bysideWebcare_site_id && !window.bysideWebcare_content_uuid) || window.bysideWebcare_processAfterContentLoaded;
    /* contentloaded.min.js - https://github.com/dperini/ContentLoaded - Author: Diego Perini - License: MIT */
}
function bysideWebcare_contentLoaded(y, s) {
    var r = false
      , q = true
      , z = y.document
      , p = z.documentElement
      , v = z.addEventListener
      , t = v ? "addEventListener" : "attachEvent"
      , d = v ? "removeEventListener" : "detachEvent"
      , u = v ? "" : "on"
      , x = function(a) {
        if (a.type == "readystatechange" && z.readyState != "complete") {
            return
        }
        (a.type == "load" ? y : z)[d](u + a.type, x, false);
        if (!r && (r = true)) {
            s.call(y, a.type || a)
        }
    }
      , o = function() {
        try {
            p.doScroll("left")
        } catch (a) {
            setTimeout(o, 50);
            return
        }
        x("poll")
    };
    if (z.readyState == "complete") {
        s.call(y, "lazy")
    } else {
        if (!v && p.doScroll) {
            try {
                q = !y.frameElement
            } catch (w) {}
            if (q) {
                o()
            }
        }
        z[t](u + "DOMContentLoaded", x, false);
        z[t](u + "readystatechange", x, false);
        y[t](u + "load", x, false)
    }
}
/*
 * Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL
 * Copyright 2006-2007 Michael Foster (Cross-Browser.com)
 */
function xBackground(d, f, b) {
    if (!(d = xGetElementById(d))) {
        return ""
    }
    var a = "";
    if (d.style) {
        if (xStr(f)) {
            d.style.backgroundColor = f
        }
        if (xStr(b)) {
            d.style.backgroundImage = (b != "") ? "url(" + b + ")" : null
        }
        a = d.style.backgroundColor
    }
    return a
}
function xCamelize(d) {
    var e, g, b = d.split("-");
    var f = b[0];
    for (e = 1; e < b.length; ++e) {
        g = b[e].charAt(0);
        f += b[e].replace(g, g.toUpperCase())
    }
    return f
}
function xClientHeight() {
    var b = 0
      , c = document
      , a = window;
    if ((!c.compatMode || c.compatMode == "CSS1Compat") && c.documentElement && c.documentElement.clientHeight) {
        b = c.documentElement.clientHeight
    } else {
        if (c.body && c.body.clientHeight) {
            b = c.body.clientHeight
        } else {
            if (xDef(a.innerWidth, a.innerHeight, c.width)) {
                b = a.innerHeight;
                if (c.width > a.innerWidth) {
                    b -= 16
                }
            }
        }
    }
    return b
}
function xClientWidth() {
    var b = 0
      , c = document
      , a = window;
    if (c.compatMode == "CSS1Compat" && !a.opera && c.documentElement && c.documentElement.clientWidth) {
        b = c.documentElement.clientWidth
    } else {
        if (c.body && c.body.clientWidth) {
            b = c.body.clientWidth
        } else {
            if (xDef(a.innerWidth, a.innerHeight, c.height)) {
                b = a.innerWidth;
                if (c.height > a.innerHeight) {
                    b -= 16
                }
            }
        }
    }
    return b
}
function xClip(g, d, f, a, c) {
    if (!(g = xGetElementById(g))) {
        return
    }
    if (g.style) {
        if (xNum(c)) {
            g.style.clip = "rect(" + d + "px " + f + "px " + a + "px " + c + "px)"
        } else {
            g.style.clip = "rect(0 " + parseInt(g.style.width) + "px " + parseInt(g.style.height) + "px 0)"
        }
    }
}
function xColor(b, a) {
    if (!(b = xGetElementById(b))) {
        return ""
    }
    var d = "";
    if (b.style && xDef(b.style.color)) {
        if (xStr(a)) {
            b.style.color = a
        }
        d = b.style.color
    }
    return d
}
function xDef() {
    for (var a = 0; a < arguments.length; ++a) {
        if (typeof (arguments[a]) == "undefined") {
            return false
        }
    }
    return true
}
function xDisplay(c, b) {
    if ((c = xGetElementById(c)) && c.style && xDef(c.style.display)) {
        if (xStr(b)) {
            try {
                c.style.display = b
            } catch (a) {
                c.style.display = ""
            }
        }
        return c.style.display
    }
    return null
}
function xGetComputedStyle(g, f, c) {
    if (!(g = xGetElementById(g))) {
        return null
    }
    var d, a = "undefined", b = document.defaultView;
    if (b && b.getComputedStyle) {
        d = b.getComputedStyle(g, "");
        if (d) {
            a = d.getPropertyValue(f)
        }
    } else {
        if (g.currentStyle) {
            a = g.currentStyle[xCamelize(f)]
        } else {
            return null
        }
    }
    return c ? (parseInt(a) || 0) : a
}
function xGetElementById(a) {
    if (typeof (a) == "string") {
        if (document.getElementById) {
            a = document.getElementById(a)
        } else {
            if (document.all) {
                a = document.all[a]
            } else {
                a = null
            }
        }
    }
    return a
}
function xGetElementsByTagName(a, c) {
    var b = null;
    a = a || "*";
    c = c || document;
    if (typeof c.getElementsByTagName != "undefined") {
        b = c.getElementsByTagName(a);
        if (a == "*" && (!b || !b.length)) {
            b = c.all
        }
    } else {
        if (a == "*") {
            b = c.all
        } else {
            if (c.all && c.all.tags) {
                b = c.all.tags(a)
            }
        }
    }
    return b || new Array()
}
function xHasPoint(f, j, g, k, a, h, d) {
    if (!xNum(k)) {
        k = a = h = d = 0
    } else {
        if (!xNum(a)) {
            a = h = d = k
        } else {
            if (!xNum(h)) {
                d = a;
                h = k
            }
        }
    }
    var c = xPageX(f)
      , m = xPageY(f);
    return (j >= c + d && j <= c + xWidth(f) - a && g >= m + k && g <= m + xHeight(f) - h)
}
function xHeight(j, f) {
    if (!(j = xGetElementById(j))) {
        return 0
    }
    if (xNum(f)) {
        if (f < 0) {
            f = 0
        } else {
            f = Math.round(f)
        }
    } else {
        f = -1
    }
    var d = xDef(j.style);
    if (j == document || j.tagName.toLowerCase() == "html" || j.tagName.toLowerCase() == "body") {
        f = xClientHeight()
    } else {
        if (d && xDef(j.offsetHeight) && xStr(j.style.height)) {
            if (f >= 0) {
                var g = 0
                  , c = 0
                  , b = 0
                  , k = 0;
                if (document.compatMode == "CSS1Compat") {
                    var a = xGetComputedStyle;
                    g = a(j, "padding-top", 1);
                    if (g !== null) {
                        c = a(j, "padding-bottom", 1);
                        b = a(j, "border-top-width", 1);
                        k = a(j, "border-bottom-width", 1)
                    } else {
                        if (xDef(j.offsetHeight, j.style.height)) {
                            j.style.height = f + "px";
                            g = j.offsetHeight - f
                        }
                    }
                }
                f -= (g + c + b + k);
                if (isNaN(f) || f < 0) {
                    return
                } else {
                    j.style.height = f + "px"
                }
            }
            f = j.offsetHeight
        } else {
            if (d && xDef(j.style.pixelHeight)) {
                if (f >= 0) {
                    j.style.pixelHeight = f
                }
                f = j.style.pixelHeight
            }
        }
    }
    return f
}
function xHide(a) {
    return xVisibility(a, 0)
}
function xLeft(c, a) {
    if (!(c = xGetElementById(c))) {
        return 0
    }
    var b = xDef(c.style);
    if (b && xStr(c.style.left)) {
        if (xNum(a)) {
            c.style.left = a + "px"
        } else {
            a = parseInt(c.style.left);
            if (isNaN(a)) {
                a = xGetComputedStyle(c, "left", 1)
            }
            if (isNaN(a)) {
                a = 0
            }
        }
    } else {
        if (b && xDef(c.style.pixelLeft)) {
            if (xNum(a)) {
                c.style.pixelLeft = a
            } else {
                a = c.style.pixelLeft
            }
        }
    }
    return a
}
xLibrary = {
    version: "4.12",
    license: "GNU LGPL",
    url: "http://cross-browser.com/"
};
function xMoveTo(b, a, c) {
    xLeft(b, a);
    xTop(b, c)
}
function xNum() {
    for (var a = 0; a < arguments.length; ++a) {
        if (isNaN(arguments[a]) || typeof (arguments[a]) != "number") {
            return false
        }
    }
    return true
}
function xOffsetLeft(a) {
    if (!(a = xGetElementById(a))) {
        return 0
    }
    if (xDef(a.offsetLeft)) {
        return a.offsetLeft
    } else {
        return 0
    }
}
function xOffsetTop(a) {
    if (!(a = xGetElementById(a))) {
        return 0
    }
    if (xDef(a.offsetTop)) {
        return a.offsetTop
    } else {
        return 0
    }
}
function xOpacity(a, b) {
    var c = xDef(b);
    if (!(a = xGetElementById(a))) {
        return 2
    }
    if (xStr(a.style.opacity)) {
        if (c) {
            a.style.opacity = b + ""
        } else {
            b = parseFloat(a.style.opacity)
        }
    } else {
        if (xStr(a.style.filter)) {
            if (c) {
                a.style.filter = "alpha(opacity=" + (100 * b) + ")"
            } else {
                if (a.filters && a.filters.alpha) {
                    b = a.filters.alpha.opacity / 100
                }
            }
        } else {
            if (xStr(a.style.MozOpacity)) {
                if (c) {
                    a.style.MozOpacity = b + ""
                } else {
                    b = parseFloat(a.style.MozOpacity)
                }
            } else {
                if (xStr(a.style.KhtmlOpacity)) {
                    if (c) {
                        a.style.KhtmlOpacity = b + ""
                    } else {
                        b = parseFloat(a.style.KhtmlOpacity)
                    }
                }
            }
        }
    }
    return isNaN(b) ? 1 : b
}
function xPageX(b) {
    var a = 0;
    b = xGetElementById(b);
    while (b) {
        if (xDef(b.offsetLeft)) {
            a += b.offsetLeft
        }
        b = xDef(b.offsetParent) ? b.offsetParent : null
    }
    return a
}
function xPageY(a) {
    var b = 0;
    a = xGetElementById(a);
    while (a) {
        if (xDef(a.offsetTop)) {
            b += a.offsetTop
        }
        a = xDef(a.offsetParent) ? a.offsetParent : null
    }
    return b
}
function xParent(c, b) {
    if (!(c = xGetElementById(c))) {
        return null
    }
    var a = null;
    if (!b && xDef(c.offsetParent)) {
        a = c.offsetParent
    } else {
        if (xDef(c.parentNode)) {
            a = c.parentNode
        } else {
            if (xDef(c.parentElement)) {
                a = c.parentElement
            }
        }
    }
    return a
}
function xResizeTo(c, a, b) {
    xWidth(c, a);
    xHeight(c, b)
}
function xScrollLeft(c, b) {
    var d = 0;
    if (!xDef(c) || b || c == document || c.tagName.toLowerCase() == "html" || c.tagName.toLowerCase() == "body") {
        var a = window;
        if (b && c) {
            a = c
        }
        if (a.document.documentElement && a.document.documentElement.scrollLeft) {
            d = a.document.documentElement.scrollLeft
        } else {
            if (a.document.body && xDef(a.document.body.scrollLeft)) {
                d = a.document.body.scrollLeft
            }
        }
    } else {
        c = xGetElementById(c);
        if (c && xNum(c.scrollLeft)) {
            d = c.scrollLeft
        }
    }
    return d
}
function xScrollTop(c, b) {
    var d = 0;
    if (!xDef(c) || b || c == document || c.tagName.toLowerCase() == "html" || c.tagName.toLowerCase() == "body") {
        var a = window;
        if (b && c) {
            a = c
        }
        if (a.document.documentElement && a.document.documentElement.scrollTop) {
            d = a.document.documentElement.scrollTop
        } else {
            if (a.document.body && xDef(a.document.body.scrollTop)) {
                d = a.document.body.scrollTop
            }
        }
    } else {
        c = xGetElementById(c);
        if (c && xNum(c.scrollTop)) {
            d = c.scrollTop
        }
    }
    return d
}
function xShow(a) {
    return xVisibility(a, 1)
}
function xSlideTo(c, a, g, b) {
    if (!(c = xGetElementById(c))) {
        return
    }
    if (!c.timeout) {
        c.timeout = 25
    }
    c.xTarget = a;
    c.yTarget = g;
    c.slideTime = b;
    c.stop = false;
    c.yA = c.yTarget - xTop(c);
    c.xA = c.xTarget - xLeft(c);
    if (c.slideLinear) {
        c.B = 1 / c.slideTime
    } else {
        c.B = Math.PI / (2 * c.slideTime)
    }
    c.yD = xTop(c);
    c.xD = xLeft(c);
    var f = new Date();
    c.C = f.getTime();
    if (!c.moving) {
        _xSlideTo(c)
    }
}
function _xSlideTo(f) {
    if (!(f = xGetElementById(f))) {
        return
    }
    var a, c, b, d, g;
    a = new Date();
    b = a.getTime() - f.C;
    if (f.stop) {
        f.moving = false
    } else {
        if (b < f.slideTime) {
            setTimeout(function() {
                _xSlideTo(f.id)
            }, f.timeout);
            c = f.B * b;
            if (!f.slideLinear) {
                c = Math.sin(c)
            }
            g = Math.round(f.xA * c + f.xD);
            d = Math.round(f.yA * c + f.yD);
            xMoveTo(f, g, d);
            f.moving = true
        } else {
            xMoveTo(f, f.xTarget, f.yTarget);
            f.moving = false;
            if (f.onslideend) {
                f.onslideend()
            }
        }
    }
}
function xStr(b) {
    for (var a = 0; a < arguments.length; ++a) {
        if (typeof (arguments[a]) != "string") {
            return false
        }
    }
    return true
}
function xTop(b, c) {
    if (!(b = xGetElementById(b))) {
        return 0
    }
    var a = xDef(b.style);
    if (a && xStr(b.style.top)) {
        if (xNum(c)) {
            b.style.top = c + "px"
        } else {
            c = parseInt(b.style.top);
            if (isNaN(c)) {
                c = xGetComputedStyle(b, "top", 1)
            }
            if (isNaN(c)) {
                c = 0
            }
        }
    } else {
        if (a && xDef(b.style.pixelTop)) {
            if (xNum(c)) {
                b.style.pixelTop = c
            } else {
                c = b.style.pixelTop
            }
        }
    }
    return c
}
function xVisibility(b, a) {
    if (!(b = xGetElementById(b))) {
        return null
    }
    if (b.style && xDef(b.style.visibility)) {
        if (xDef(a)) {
            b.style.visibility = a ? "visible" : "hidden"
        }
        return b.style.visibility
    }
    return null
}
function xWidth(g, b) {
    if (!(g = xGetElementById(g))) {
        return 0
    }
    if (xNum(b)) {
        if (b < 0) {
            b = 0
        } else {
            b = Math.round(b)
        }
    } else {
        b = -1
    }
    var d = xDef(g.style);
    if (g == document || g.tagName.toLowerCase() == "html" || g.tagName.toLowerCase() == "body") {
        b = xClientWidth()
    } else {
        if (d && xDef(g.offsetWidth) && xStr(g.style.width)) {
            if (b >= 0) {
                var f = 0
                  , j = 0
                  , h = 0
                  , c = 0;
                if (document.compatMode == "CSS1Compat") {
                    var a = xGetComputedStyle;
                    f = a(g, "padding-left", 1);
                    if (f !== null) {
                        j = a(g, "padding-right", 1);
                        h = a(g, "border-left-width", 1);
                        c = a(g, "border-right-width", 1)
                    } else {
                        if (xDef(g.offsetWidth, g.style.width)) {
                            g.style.width = b + "px";
                            f = g.offsetWidth - b
                        }
                    }
                }
                b -= (f + j + h + c);
                if (isNaN(b) || b < 0) {
                    return
                } else {
                    g.style.width = b + "px"
                }
            }
            b = g.offsetWidth
        } else {
            if (d && xDef(g.style.pixelWidth)) {
                if (b >= 0) {
                    g.style.pixelWidth = b
                }
                b = g.style.pixelWidth
            }
        }
    }
    return b
}
function xZIndex(b, a) {
    if (!(b = xGetElementById(b))) {
        return 0
    }
    if (b.style && xDef(b.style.zIndex)) {
        if (xNum(a)) {
            b.style.zIndex = a
        }
        a = parseInt(b.style.zIndex)
    }
    return a
}
function xDisableDrag(c, a) {
    if (!window._xDrgMgr) {
        return
    }
    var b = xGetElementById(c);
    b.xDraggable = false;
    b.xODS = null;
    b.xOD = null;
    b.xODE = null;
    xRemoveEventListener(b, "mousedown", _xOMD, false);
    if (_xDrgMgr.mm && a) {
        _xDrgMgr.mm = false;
        xRemoveEventListener(document, "mousemove", _xOMM, false)
    }
}
function xDisableDrop(b) {
    if (!window._xDrgMgr) {
        return
    }
    var a = xGetElementById(b);
    if (a && a.xODp) {
        a.xODp = null;
        for (i = 0; i < _xDrgMgr.drops.length; ++i) {
            if (a == _xDrgMgr.drops[i]) {
                _xDrgMgr.drops.splice(i, 1)
            }
        }
    }
}
var _xDrgMgr = {
    ele: null,
    mm: false
};
function xEnableDrag(b, j, f, e, c, h, a, g) {
    var d = xGetElementById(b);
    if (d) {
        d.xDraggable = true;
        d.xODS = j;
        d.xOD = f;
        d.xODE = e;
        d.xREC = null;
        if (xDef(c, h, a, g)) {
            d.xREC = {
                x1: c,
                y1: h,
                x2: a,
                y2: g
            }
        }
        xAddEventListener(d, "mousedown", _xOMD, false);
        if (!_xDrgMgr.mm) {
            _xDrgMgr.mm = true;
            xAddEventListener(document, "mousemove", _xOMM, false)
        }
    }
}
function _xOMD(c) {
    var b = new xEvent(c);
    if (b.button != 0) {
        return
    }
    var a = b.target;
    while (a && !a.xDraggable) {
        a = xParent(a)
    }
    if (a) {
        xPreventDefault(c);
        a.xDPX = b.pageX;
        a.xDPY = b.pageY;
        _xDrgMgr.ele = a;
        xAddEventListener(document, "mouseup", _xOMU, false);
        if (a.xODS) {
            a.xODS(a, b.pageX, b.pageY, b)
        }
    }
}
function _xOMM(d) {
    var g = new xEvent(d);
    if (_xDrgMgr.ele) {
        xPreventDefault(d);
        var h = true
          , c = _xDrgMgr.ele;
        var l = g.pageX - c.xDPX;
        var k = g.pageY - c.xDPY;
        c.xDPX = g.pageX;
        c.xDPY = g.pageY;
        if (c.xREC) {
            var a = c.xREC
              , j = xPageX(c) + l
              , f = xPageY(c) + k;
            var h = (j >= a.x1 && j + xWidth(c) <= a.x2 && f >= a.y1 && f + xHeight(c) <= a.y2)
        }
        if (c.xOD) {
            c.xOD(c, l, k, h, g)
        } else {
            if (h) {
                xMoveTo(c, xLeft(c) + l, xTop(c) + k)
            }
        }
    }
}
function _xOMU(b) {
    if (_xDrgMgr.ele) {
        xPreventDefault(b);
        xRemoveEventListener(document, "mouseup", _xOMU, false);
        if (_xDrgMgr.ele.xODE) {
            var a = new xEvent(b);
            _xDrgMgr.ele.xODE(_xDrgMgr.ele, a.pageX, a.pageY, a)
        }
        _xDrgMgr.ele = null
    }
}
function xEnableDrop(c, a) {
    var b = xGetElementById(c);
    if (b) {
        b.xODp = a;
        if (!_xDrgMgr.drops) {
            _xDrgMgr.drops = new Array()
        }
        _xDrgMgr.drops[_xDrgMgr.drops.length] = b;
        if (!_xDrgMgr.omu) {
            _xDrgMgr.omu = _xOMU;
            _xOMU = _xOMU2
        }
    }
}
function _xOMU2(f) {
    var a, g, d = 0, c = null;
    f = new xEvent(f);
    for (a = 0; a < _xDrgMgr.drops.length; ++a) {
        if (xHasPoint(_xDrgMgr.drops[a], f.pageX, f.pageY)) {
            g = xZIndex(_xDrgMgr.drops[a]) || 0;
            if (g >= d) {
                d = g;
                c = _xDrgMgr.drops[a]
            }
        }
    }
    var b = _xDrgMgr.ele;
    _xDrgMgr.omu(f);
    if (c && c.xODp) {
        c.xODp(b, f.pageX, f.pageY)
    }
}
xLibrary = {
    version: "4.12",
    license: "GNU LGPL",
    url: "http://cross-browser.com/"
};
function xAddEventListener(d, c, b, a) {
    if (!(d = xGetElementById(d))) {
        return
    }
    c = c.toLowerCase();
    if (d.addEventListener) {
        d.addEventListener(c, b, a || false)
    } else {
        if (d.attachEvent) {
            d.attachEvent("on" + c, b)
        } else {
            var f = d["on" + c];
            d["on" + c] = typeof f == "function" ? function(e) {
                f(e);
                b(e)
            }
            : b
        }
    }
}
function xEvent(evt) {
    var e = evt || window.event;
    if (!e) {
        return
    }
    if (e.type) {
        this.type = e.type
    }
    if (e.target) {
        this.target = e.target
    } else {
        if (e.srcElement) {
            this.target = e.srcElement
        }
    }
    if (e.relatedTarget) {
        this.relatedTarget = e.relatedTarget
    } else {
        if (e.type == "mouseover" && e.fromElement) {
            this.relatedTarget = e.fromElement
        } else {
            if (e.type == "mouseout") {
                this.relatedTarget = e.toElement
            }
        }
    }
    if (xDef(e.pageX, e.pageY)) {
        this.pageX = e.pageX;
        this.pageY = e.pageY
    } else {
        if (xDef(e.clientX, e.clientY)) {
            this.pageX = e.clientX + xScrollLeft();
            this.pageY = e.clientY + xScrollTop()
        }
    }
    if (xDef(e.offsetX, e.offsetY)) {
        this.offsetX = e.offsetX;
        this.offsetY = e.offsetY
    } else {
        if (xDef(e.layerX, e.layerY)) {
            this.offsetX = e.layerX;
            this.offsetY = e.layerY
        } else {
            this.offsetX = this.pageX - xPageX(this.target);
            this.offsetY = this.pageY - xPageY(this.target)
        }
    }
    this.keyCode = e.keyCode || e.which || 0;
    this.shiftKey = e.shiftKey;
    this.ctrlKey = e.ctrlKey;
    this.altKey = e.altKey;
    this.button = null;
    if (e.type.indexOf("click") != -1) {
        this.button = 0
    } else {
        if (e.type.indexOf("mouse") != -1) {
            var ie = 0
              , v = navigator.vendor;
            /*@cc_on ie=1;@*/
            if (ie || (v && v.indexOf("Apple") != -1)) {
                if (e.button & 1) {
                    this.button = 0
                } else {
                    if (e.button & 2) {
                        this.button = 2
                    } else {
                        if (e.button & 4) {
                            this.button = 1
                        }
                    }
                }
            } else {
                this.button = e.button
            }
        }
    }
}
xLibrary = {
    version: "4.12",
    license: "GNU LGPL",
    url: "http://cross-browser.com/"
};
function xPreventDefault(a) {
    if (a && a.preventDefault) {
        a.preventDefault()
    } else {
        if (window.event) {
            window.event.returnValue = false
        }
    }
}
function xRemoveEventListener(d, c, b, a) {
    if (!(d = xGetElementById(d))) {
        return
    }
    c = c.toLowerCase();
    if (d.removeEventListener) {
        d.removeEventListener(c, b, a || false)
    } else {
        if (d.detachEvent) {
            d.detachEvent("on" + c, b)
        } else {
            d["on" + c] = null
        }
    }
}
function xStopPropagation(a) {
    if (a && a.stopPropagation) {
        a.stopPropagation()
    } else {
        if (window.event) {
            window.event.cancelBubble = true
        }
    }
}
function xHttpRequest() {
    var b = this;
    var j = null;
    var h = null;
    var c = null;
    var g = false;
    var a = null;
    b.OK = 0;
    b.NOXMLOBJ = 1;
    b.REQERR = 2;
    b.TIMEOUT = 4;
    b.RSPERR = 8;
    b.NOXMLCT = 16;
    b.status = b.OK;
    b.busy = false;
    function f() {
        if (j.readyState == 4) {
            if (h) {
                clearTimeout(h)
            }
            if (j.status != 200) {
                b.status = b.RSPERR
            }
            if (g) {
                var e = j.getResponseHeader("Content-Type");
                if (e && e.indexOf("xml") == -1) {
                    b.status |= b.NOXMLCT
                }
            }
            if (c) {
                c(j, b.status, a)
            }
            b.busy = false
        }
    }
    function k() {
        j.onreadystatechange = function() {}
        ;
        j.abort();
        b.status |= b.TIMEOUT;
        if (c) {
            c(j, b.status, a)
        }
        b.busy = false
    }
    this.send = function(p, z, w, A, l, y, n, s) {
        if (!j || b.busy) {
            return false
        }
        p = p.toUpperCase();
        if (p != "POST") {
            if (w) {
                w = "?" + w;
                if (l) {
                    w += "&" + l + "=" + Math.round(10000 * Math.random())
                }
            } else {
                w = ""
            }
        }
        g = y;
        a = n;
        c = s;
        b.busy = true;
        b.status = b.OK;
        if (A) {
            h = setTimeout(k, A)
        }
        try {
            if (p == "GET") {
                j.open(p, z + w, true);
                w = null;
                j.setRequestHeader("Cache-Control", "no-cache");
                var q = "text/" + (y ? "xml" : "plain");
                if (j.overrideMimeType) {
                    j.overrideMimeType(q)
                }
                j.setRequestHeader("Content-Type", q)
            } else {
                if (p == "POST") {
                    j.open(p, z, true);
                    j.setRequestHeader("Method", "POST " + z + " HTTP/1.1");
                    j.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                } else {
                    j.open(p, z + w, true);
                    w = null
                }
            }
            j.onreadystatechange = f;
            j.send(w)
        } catch (v) {
            if (h) {
                clearTimeout(h)
            }
            c = null;
            b.busy = false;
            b.status = b.REQERR;
            b.error = v;
            return false
        }
        return true
    }
    ;
    try {
        j = new XMLHttpRequest()
    } catch (d) {
        try {
            j = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (d) {
            try {
                j = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (d) {
                j = null
            }
        }
    }
    if (!j) {
        b.status = b.NOXMLOBJ
    }
}
function xLoadScript(a) {
    if (document.createElement && document.getElementsByTagName) {
        var c = document.createElement("script");
        c.setAttribute("nonce", bysideWebcare_cspid || null);
        var b = document.getElementsByTagName("head");
        if (c && b.length) {
            c.src = a;
            b[0].appendChild(c)
        }
    }
}
function xLoadScriptRnd(a) {
    a += "&rnd=" + Math.round(10000 * Math.random());
    xLoadScript(a)
}
function xDocSize() {
    var j = document.body
      , h = document.documentElement;
    var l = 0
      , d = 0
      , a = 0
      , g = 0
      , f = 0
      , m = 0
      , k = 0
      , c = 0;
    if (h) {
        l = h.scrollWidth;
        d = h.offsetWidth;
        f = h.scrollHeight;
        m = h.offsetHeight
    }
    if (j) {
        a = j.scrollWidth;
        g = j.offsetWidth;
        k = j.scrollHeight;
        c = j.offsetHeight
    }
    return {
        w: Math.max(l, d, a, g),
        h: Math.max(f, m, k, c)
    }
}
function MM_openBrWindow(c, a, b) {
    window.open(c, a, b)
}
function correctPNG() {}
function array2json(a) {
    return JSON.stringify(a)
}
function bysideWebcare_isObject(a) {
    return Object.prototype.toString.call(a) === "[object Object]"
}
function bysideWebcare_isValidJSON(b) {
    if (!b || typeof b !== "string") {
        return false
    }
    try {
        JSON.parse(b);
        return true
    } catch (a) {
        return false
    }
}
function bysideWebcare_mergeObjects() {
    var a = {};
    if (!arguments.length) {
        return a
    }
    for (var c = 0; c < arguments.length; c++) {
        for (var b in arguments[c]) {
            if (Object.prototype.hasOwnProperty.call(arguments[c], b)) {
                a[b] = arguments[c][b]
            }
        }
    }
    return a
}
function bysideWebcare_isPageLoaded() {
    var a = document.getElementsByTagName("BODY");
    if (a.length && /loaded|complete/.test(document.readyState)) {
        return true
    }
    return false
}
function bysideWebcare_getcurrentpage() {
    var a = bysideWebcare_currentPageUrl || document.location.href;
    if (typeof bysideWebcare_add_auid !== "undefined") {
        if (a.indexOf("?") < 0) {
            a = a + "?auid=" + encodeURIComponent(bysideWebcare_add_auid)
        } else {
            a = a + "&auid=" + encodeURIComponent(bysideWebcare_add_auid)
        }
    }
    return a
}
function bysideWebcare_getcurrentpageparam(c) {
    var a;
    var e = bysideWebcare_getcurrentpage();
    var g = e.indexOf("?");
    if (g >= 0) {
        e = e.substr(g + 1);
        var d = e.split("&");
        for (var b = 0; b < d.length; b++) {
            var f = d[b].indexOf("=");
            if (f >= 0 && d[b].substring(0, f) === c) {
                a = d[b].substring(f + 1)
            }
        }
    }
    return a
}
function bysideWebcare_getUrlQueryString(a) {
    var c = document.createElement("a");
    c.href = a;
    var b = c.search.substring(1);
    return b
}
function bysideWebcare_getCurrentQueryString() {
    return (bysideWebcare_querystring && bysideWebcare_querystring[0] !== "&") ? "&" + bysideWebcare_querystring : bysideWebcare_querystring
}
function bysideWebcare_createPostParams(d, a) {
    var b = {
        webcare_id: bysideWebcare_webcare_id,
        bwch: bysideWebcare_channel,
        lang: bysideWebcare_lang,
        bwit: bysideWebcare_identification_type,
        fid: bysideWebcare_fid,
        tuid: byside_webcare_tuid,
        suid: byside_webcare_suid,
        puid: byside_webcare_puid,
        referrer: document.referrer,
        page: bysideWebcare_getcurrentpage(),
        bwpt: bysideWebcare_getPageTitle(),
        bres: bysideWebcare_getBrowserResolution(),
        res: screen.width + "x" + screen.height,
        pnsi: bysideWebcare_getPushNotificationSubscriptionInfo(),
        cklt: bysideWebcare_cookie_lifetime,
        bwcsl: bysideWebcare_getCookieServiceLevel(),
        v: bysideWebcare_versionid
    };
    if (typeof bysideWebcare_preview !== "undefined") {
        b.cmcc_preview = bysideWebcare_preview ? 1 : 0
    }
    if (typeof bysideWebcare_site_id !== "undefined" && bysideWebcare_site_id) {
        b.cmcc_site_id = bysideWebcare_site_id
    }
    if (bysideWebcare_content_uuid) {
        b = bysideWebcare_mergeObjects(b, {
            cmcc_content_locale: bysideWebcare_content_locale || "",
            cmcc_content_uuid: bysideWebcare_content_uuid,
            cmcc_content_type: bysideWebcare_content_type
        })
    }
    d = d || {};
    if (a) {
        d.qs = bysideWebcare_querystring !== "" ? bysideWebcare_querystring : bysideWebcare_getUrlQueryString(bysideWebcare_getcurrentpage())
    }
    var c = bysideWebcare_mergeObjects(b, d);
    return c
}
function bysideWebcare_createQueryStringParams(e, b) {
    var c = {
        webcare_id: bysideWebcare_webcare_id,
        bwch: bysideWebcare_channel,
        lang: bysideWebcare_lang,
        bwit: encodeURIComponent(bysideWebcare_identification_type),
        fid: encodeURIComponent(bysideWebcare_fid),
        tuid: byside_webcare_tuid,
        suid: byside_webcare_suid,
        puid: byside_webcare_puid,
        referrer: encodeURIComponent(document.referrer),
        page: encodeURIComponent(bysideWebcare_getcurrentpage()),
        bwpt: encodeURIComponent(bysideWebcare_getPageTitle()),
        bres: bysideWebcare_getBrowserResolution(),
        res: screen.width + "x" + screen.height,
        pnsi: bysideWebcare_getPushNotificationSubscriptionInfo(),
        cklt: bysideWebcare_cookie_lifetime,
        bwcsl: bysideWebcare_getCookieServiceLevel(),
        v: bysideWebcare_versionid
    };
    
    c={
	    "webcare_id": "038412DCC2",
	    "bwch": "UZO",
	    "lang": "pt",
	    "bwit": "A",
	    "fid": "",
	    "tuid": "68963hy7kvdnngxpt3nasjk9egod7l07t7327k924pwu7oe5fu",
	    "suid": null,
	    "puid": "n7eda51erjnlowyclphh68en0s0y4ua451b6lqozdu0dekuvhn",
	    "referrer": "",
	    "page": "https%3A%2F%2Fdemo.engagement.coremedia.cloud%2Fmeo_demos%2F2025%2Fdemo_uzo_placeholder.html",
	    "bwpt": "UZO",
	    "bres": "657x910",
	    "res": "1920x1080",
	    "pnsi": "1::0",
	    "cklt": 730,
	    "bwcsl": "TARGETING",
	    "v": "v20250407a"
	};
    
    if (typeof bysideWebcare_preview !== "undefined") {
        c.cmcc_preview = bysideWebcare_preview ? 1 : 0
    }
    if (typeof bysideWebcare_site_id !== "undefined" && bysideWebcare_site_id) {
        c.cmcc_site_id = bysideWebcare_site_id
    }
    if (bysideWebcare_content_uuid) {
        c = bysideWebcare_mergeObjects(c, {
            cmcc_content_locale: bysideWebcare_content_locale || "",
            cmcc_content_uuid: bysideWebcare_content_uuid,
            cmcc_content_type: bysideWebcare_content_type
        })
    }
    e = e || {};
    if (b) {
        e.qs = bysideWebcare_querystring !== "" ? encodeURIComponent(bysideWebcare_querystring) : encodeURIComponent(bysideWebcare_getUrlQueryString(bysideWebcare_getcurrentpage()))
    }
    var d = bysideWebcare_mergeObjects(c, e);
    var a = bysideWebcare_serializeQueryStringParams(d);
    return a
}
function bysideWebcare_serializeQueryStringParams(e, c) {
    var f = [], d;
    for (d in e) {
        if (Object.prototype.hasOwnProperty.call(e, d) && typeof e[d] !== "undefined") {
            var b = c ? c + "[" + d + "]" : d
              , a = e[d];
            f.push(a !== null && typeof a === "object" ? bysideWebcare_serializeQueryStringParams(a, b) : b + "=" + a)
        }
    }
    return f.join("&")
}
function bysideWebcare_findPageNonce() {
    var a = /^[\w+/_-]+[=]{0,2}$/, b, c;
    b = document.querySelector("script[nonce]");
    if (b) {
        c = b.nonce || b.getAttribute("nonce")
    }
    if (c && a.test(c)) {
        return c
    }
    return null
}
function bysideWebcare_getPageTitle() {
    var a = document.title || "";
    return a.substring(0, 255)
}
function bysideWebcare_getBrowserResolution() {
    var c, a, b;
    c = (document.documentElement && document.documentElement.clientHeight !== 0) ? document.documentElement : document.body;
    if (typeof c !== "undefined" && c !== null && c) {
        a = c.clientWidth;
        b = c.clientHeight;
        return a + "x" + b
    }
    return ""
}
function bysideWebcare_getWindowScrollPosition() {
    var a = typeof window.pageYOffset !== "undefined";
    var b = ((document.compatMode || "") === "CSS1Compat");
    return a ? window.pageYOffset : (b ? document.documentElement.scrollTop : document.body.scrollTop)
}
function bysideWebcareFixPng() {}
function bysideWebcare_detect_IE6_or_IE7() {
    return false
}
function bysideWebcare_onblur() {
    bysideWebcare_hasFocus = false
}
function bysideWebcare_onfocus() {
    bysideWebcare_hasFocus = true
}
function bysideWebcare_void() {
    return
}
function bysideWebcare_generateTUID(a) {
    var f = "0123456789abcdefghijklmnopqrstuvwxyz", b = typeof a !== "undefined" ? a : 50, e = "", d;
    for (d = 0; d < b; d++) {
        e += f.charAt(Math.floor(f.length * Math.random()))
    }
    return e
}
function bysideWebcare_get_agent_baseurl() {
    return bysideWebcare_baseurl + "BWA" + bysideWebcare_webcare_id + "/"
}
function bysideWebcare_getAgentUrl(a) {
    var b = bysideWebcare_get_agent_baseurl();
    if (a) {
        b += a
    }
    return b
}
/*
* Socket.IO.min.js build:0.9.16, production. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed
*/
if ((typeof window.bysideWebcare_script_tag_loaded === "undefined" || !window.bysideWebcare_script_tag_loaded) && bysideWebcare_use_websockets) {
    var io = "undefined" == typeof module || "undefined" == typeof module.exports ? {} : module.exports;
    (function() {
        (function(a, b) {
            var c = a;
            c.version = "0.9.16",
            c.protocol = 1,
            c.transports = [],
            c.j = [],
            c.sockets = {},
            c.connect = function(a, d) {
                var e = c.util.parseUri(a), f, g;
                b && b.location && (e.protocol = e.protocol || b.location.protocol.slice(0, -1),
                e.host = e.host || (b.document ? b.document.domain : b.location.hostname),
                e.port = e.port || b.location.port),
                f = c.util.uniqueUri(e);
                var h = {
                    host: e.host,
                    secure: "https" == e.protocol,
                    port: e.port || ("https" == e.protocol ? 443 : 80),
                    query: e.query || ""
                };
                c.util.merge(h, d);
                if (h["force new connection"] || !c.sockets[f]) {
                    g = new c.Socket(h)
                }
                return !h["force new connection"] && g && (c.sockets[f] = g),
                g = g || c.sockets[f],
                g.of(e.path.length > 1 ? e.path : "")
            }
        }
        )("object" == typeof module && "object" == typeof module.exports ? module.exports : this.io = {}, this),
        function(a, b) {
            var c = a.util = {}
              , d = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
              , e = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            c.parseUri = function(a) {
                var b = d.exec(a || "")
                  , c = {}
                  , f = 14;
                while (f--) {
                    c[e[f]] = b[f] || ""
                }
                return c
            }
            ,
            c.uniqueUri = function(a) {
                var c = a.protocol
                  , d = a.host
                  , e = a.port;
                return "document"in b ? (d = d || document.domain,
                e = e || (c == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)) : (d = d || "localhost",
                !e && c == "https" && (e = 443)),
                (c || "http") + "://" + d + ":" + (e || 80)
            }
            ,
            c.query = function(a, b) {
                var d = c.chunkQuery(a || "")
                  , e = [];
                c.merge(d, c.chunkQuery(b || ""));
                for (var f in d) {
                    d.hasOwnProperty(f) && e.push(f + "=" + d[f])
                }
                return e.length ? "?" + e.join("&") : ""
            }
            ,
            c.chunkQuery = function(a) {
                var b = {}, c = a.split("&"), d = 0, e = c.length, f;
                for (; d < e; ++d) {
                    f = c[d].split("="),
                    f[0] && (b[f[0]] = f[1])
                }
                return b
            }
            ;
            var f = !1;
            c.load = function(a) {
                if ("document"in b && document.readyState === "complete" || f) {
                    return a()
                }
                c.on(b, "load", a, !1)
            }
            ,
            c.on = function(a, b, c, d) {
                a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener && a.addEventListener(b, c, d)
            }
            ,
            c.request = function(a) {
                if (a && "undefined" != typeof XDomainRequest && !c.ua.hasCORS) {
                    return new XDomainRequest
                }
                if ("undefined" != typeof XMLHttpRequest && (!a || c.ua.hasCORS)) {
                    return new XMLHttpRequest
                }
                if (!a) {
                    try {
                        return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                    } catch (b) {}
                }
                return null
            }
            ,
            "undefined" != typeof window && c.load(function() {
                f = !0
            }),
            c.defer = function(a) {
                if (!c.ua.webkit || "undefined" != typeof importScripts) {
                    return a()
                }
                c.load(function() {
                    setTimeout(a, 500)
                })
            }
            ,
            c.merge = function(b, d, e, f) {
                var g = f || [], h = typeof e == "undefined" ? 2 : e, i;
                for (i in d) {
                    d.hasOwnProperty(i) && c.indexOf(g, i) < 0 && (typeof b[i] != "object" || !h ? (b[i] = d[i],
                    g.push(d[i])) : c.merge(b[i], d[i], h - 1, g))
                }
                return b
            }
            ,
            c.mixin = function(a, b) {
                c.merge(a.prototype, b.prototype)
            }
            ,
            c.inherit = function(a, b) {
                function c() {}
                c.prototype = b.prototype,
                a.prototype = new c
            }
            ,
            c.isArray = Array.isArray || function(a) {
                return Object.prototype.toString.call(a) === "[object Array]"
            }
            ,
            c.intersect = function(a, b) {
                var d = []
                  , e = a.length > b.length ? a : b
                  , f = a.length > b.length ? b : a;
                for (var g = 0, h = f.length; g < h; g++) {
                    ~c.indexOf(e, f[g]) && d.push(f[g])
                }
                return d
            }
            ,
            c.indexOf = function(a, b, c) {
                for (var d = a.length, c = c < 0 ? c + d < 0 ? 0 : c + d : c || 0; c < d && a[c] !== b; c++) {}
                return d <= c ? -1 : c
            }
            ,
            c.toArray = function(a) {
                var b = [];
                for (var c = 0, d = a.length; c < d; c++) {
                    b.push(a[c])
                }
                return b
            }
            ,
            c.ua = {},
            c.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
                try {
                    var a = new XMLHttpRequest
                } catch (b) {
                    return !1
                }
                return a.withCredentials != undefined
            }(),
            c.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent),
            c.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
        }("undefined" != typeof io ? io : module.exports, this),
        function(a, b) {
            function c() {}
            a.EventEmitter = c,
            c.prototype.on = function(a, c) {
                return this.$events || (this.$events = {}),
                this.$events[a] ? b.util.isArray(this.$events[a]) ? this.$events[a].push(c) : this.$events[a] = [this.$events[a], c] : this.$events[a] = c,
                this
            }
            ,
            c.prototype.addListener = c.prototype.on,
            c.prototype.once = function(a, b) {
                function d() {
                    c.removeListener(a, d),
                    b.apply(this, arguments)
                }
                var c = this;
                return d.listener = b,
                this.on(a, d),
                this
            }
            ,
            c.prototype.removeListener = function(a, c) {
                if (this.$events && this.$events[a]) {
                    var d = this.$events[a];
                    if (b.util.isArray(d)) {
                        var e = -1;
                        for (var f = 0, g = d.length; f < g; f++) {
                            if (d[f] === c || d[f].listener && d[f].listener === c) {
                                e = f;
                                break
                            }
                        }
                        if (e < 0) {
                            return this
                        }
                        d.splice(e, 1),
                        d.length || delete this.$events[a]
                    } else {
                        (d === c || d.listener && d.listener === c) && delete this.$events[a]
                    }
                }
                return this
            }
            ,
            c.prototype.removeAllListeners = function(a) {
                return a === undefined ? (this.$events = {},
                this) : (this.$events && this.$events[a] && (this.$events[a] = null),
                this)
            }
            ,
            c.prototype.listeners = function(a) {
                return this.$events || (this.$events = {}),
                this.$events[a] || (this.$events[a] = []),
                b.util.isArray(this.$events[a]) || (this.$events[a] = [this.$events[a]]),
                this.$events[a]
            }
            ,
            c.prototype.emit = function(a) {
                if (!this.$events) {
                    return !1
                }
                var c = this.$events[a];
                if (!c) {
                    return !1
                }
                var d = Array.prototype.slice.call(arguments, 1);
                if ("function" == typeof c) {
                    c.apply(this, d)
                } else {
                    if (!b.util.isArray(c)) {
                        return !1
                    }
                    var e = c.slice();
                    for (var f = 0, g = e.length; f < g; f++) {
                        e[f].apply(this, d)
                    }
                }
                return !0
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports),
        function(exports, nativeJSON) {
            function f(a) {
                return a < 10 ? "0" + a : a
            }
            function date(a, b) {
                return isFinite(a.valueOf()) ? a.getUTCFullYear() + "-" + f(a.getUTCMonth() + 1) + "-" + f(a.getUTCDate()) + "T" + f(a.getUTCHours()) + ":" + f(a.getUTCMinutes()) + ":" + f(a.getUTCSeconds()) + "Z" : null
            }
            function quote(a) {
                return escapable.lastIndex = 0,
                escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                    var b = meta[a];
                    return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + a + '"'
            }
            function str(a, b) {
                var c, d, e, f, g = gap, h, i = b[a];
                i instanceof Date && (i = date(a)),
                typeof rep == "function" && (i = rep.call(b, a, i));
                switch (typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) {
                        return "null"
                    }
                    gap += indent,
                    h = [];
                    if (Object.prototype.toString.apply(i) === "[object Array]") {
                        f = i.length;
                        for (c = 0; c < f; c += 1) {
                            h[c] = str(c, i) || "null"
                        }
                        return e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]",
                        gap = g,
                        e
                    }
                    if (rep && typeof rep == "object") {
                        f = rep.length;
                        for (c = 0; c < f; c += 1) {
                            typeof rep[c] == "string" && (d = rep[c],
                            e = str(d, i),
                            e && h.push(quote(d) + (gap ? ": " : ":") + e))
                        }
                    } else {
                        for (d in i) {
                            Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i),
                            e && h.push(quote(d) + (gap ? ": " : ":") + e))
                        }
                    }
                    return e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}",
                    gap = g,
                    e
                }
            }
            "use strict";
            if (nativeJSON && nativeJSON.parse) {
                return exports.JSON = {
                    parse: nativeJSON.parse,
                    stringify: nativeJSON.stringify
                }
            }
            var JSON = exports.JSON = {}, cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, rep;
            JSON.stringify = function(a, b, c) {
                var d;
                gap = "",
                indent = "";
                if (typeof c == "number") {
                    for (d = 0; d < c; d += 1) {
                        indent += " "
                    }
                } else {
                    typeof c == "string" && (indent = c)
                }
                rep = b;
                if (!b || typeof b == "function" || typeof b == "object" && typeof b.length == "number") {
                    return str("", {
                        "": a
                    })
                }
                throw new Error("JSON.stringify")
            }
            ,
            JSON.parse = function(text, reviver) {
                function walk(a, b) {
                    var c, d, e = a[b];
                    if (e && typeof e == "object") {
                        for (c in e) {
                            Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c),
                            d !== undefined ? e[c] = d : delete e[c])
                        }
                    }
                    return reviver.call(a, b, e)
                }
                var j;
                text = String(text),
                cx.lastIndex = 0,
                cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }));
                if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                    return j = eval("(" + text + ")"),
                    typeof reviver == "function" ? walk({
                        "": j
                    }, "") : j
                }
                throw new SyntaxError("JSON.parse")
            }
        }("undefined" != typeof io ? io : module.exports, typeof JSON != "undefined" ? JSON : undefined),
        function(a, b) {
            var c = a.parser = {}
              , d = c.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"]
              , e = c.reasons = ["transport not supported", "client not handshaken", "unauthorized"]
              , f = c.advice = ["reconnect"]
              , g = b.JSON
              , h = b.util.indexOf;
            c.encodePacket = function(a) {
                var b = h(d, a.type)
                  , c = a.id || ""
                  , i = a.endpoint || ""
                  , j = a.ack
                  , k = null;
                switch (a.type) {
                case "error":
                    var l = a.reason ? h(e, a.reason) : ""
                      , m = a.advice ? h(f, a.advice) : "";
                    if (l !== "" || m !== "") {
                        k = l + (m !== "" ? "+" + m : "")
                    }
                    break;
                case "message":
                    a.data !== "" && (k = a.data);
                    break;
                case "event":
                    var n = {
                        name: a.name
                    };
                    a.args && a.args.length && (n.args = a.args),
                    k = g.stringify(n);
                    break;
                case "json":
                    k = g.stringify(a.data);
                    break;
                case "connect":
                    a.qs && (k = a.qs);
                    break;
                case "ack":
                    k = a.ackId + (a.args && a.args.length ? "+" + g.stringify(a.args) : "")
                }
                var o = [b, c + (j == "data" ? "+" : ""), i];
                return k !== null && k !== undefined && o.push(k),
                o.join(":")
            }
            ,
            c.encodePayload = function(a) {
                var b = "";
                if (a.length == 1) {
                    return a[0]
                }
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    b += "\ufffd" + e.length + "\ufffd" + a[c]
                }
                return b
            }
            ;
            var i = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
            c.decodePacket = function(a) {
                var b = a.match(i);
                if (!b) {
                    return {}
                }
                var c = b[2] || ""
                  , a = b[5] || ""
                  , h = {
                    type: d[b[1]],
                    endpoint: b[4] || ""
                };
                c && (h.id = c,
                b[3] ? h.ack = "data" : h.ack = !0);
                switch (h.type) {
                case "error":
                    var b = a.split("+");
                    h.reason = e[b[0]] || "",
                    h.advice = f[b[1]] || "";
                    break;
                case "message":
                    h.data = a || "";
                    break;
                case "event":
                    try {
                        var j = g.parse(a);
                        h.name = j.name,
                        h.args = j.args
                    } catch (k) {}
                    h.args = h.args || [];
                    break;
                case "json":
                    try {
                        h.data = g.parse(a)
                    } catch (k) {}
                    break;
                case "connect":
                    h.qs = a || "";
                    break;
                case "ack":
                    var b = a.match(/^([0-9]+)(\+)?(.*)/);
                    if (b) {
                        h.ackId = b[1],
                        h.args = [];
                        if (b[3]) {
                            try {
                                h.args = b[3] ? g.parse(b[3]) : []
                            } catch (k) {}
                        }
                    }
                    break;
                case "disconnect":
                case "heartbeat":
                }
                return h
            }
            ,
            c.decodePayload = function(a) {
                if (a.charAt(0) == "\ufffd") {
                    var b = [];
                    for (var d = 1, e = ""; d < a.length; d++) {
                        a.charAt(d) == "\ufffd" ? (b.push(c.decodePacket(a.substr(d + 1).substr(0, e))),
                        d += Number(e) + 1,
                        e = "") : e += a.charAt(d)
                    }
                    return b
                }
                return [c.decodePacket(a)]
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports),
        function(a, b) {
            function c(a, b) {
                this.socket = a,
                this.sessid = b
            }
            a.Transport = c,
            b.util.mixin(c, b.EventEmitter),
            c.prototype.heartbeats = function() {
                return !0
            }
            ,
            c.prototype.onData = function(a) {
                this.clearCloseTimeout(),
                (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout();
                if (a !== "") {
                    var c = b.parser.decodePayload(a);
                    if (c && c.length) {
                        for (var d = 0, e = c.length; d < e; d++) {
                            this.onPacket(c[d])
                        }
                    }
                }
                return this
            }
            ,
            c.prototype.onPacket = function(a) {
                return this.socket.setHeartbeatTimeout(),
                a.type == "heartbeat" ? this.onHeartbeat() : (a.type == "connect" && a.endpoint == "" && this.onConnect(),
                a.type == "error" && a.advice == "reconnect" && (this.isOpen = !1),
                this.socket.onPacket(a),
                this)
            }
            ,
            c.prototype.setCloseTimeout = function() {
                if (!this.closeTimeout) {
                    var a = this;
                    this.closeTimeout = setTimeout(function() {
                        a.onDisconnect()
                    }, this.socket.closeTimeout)
                }
            }
            ,
            c.prototype.onDisconnect = function() {
                return this.isOpen && this.close(),
                this.clearTimeouts(),
                this.socket.onDisconnect(),
                this
            }
            ,
            c.prototype.onConnect = function() {
                return this.socket.onConnect(),
                this
            }
            ,
            c.prototype.clearCloseTimeout = function() {
                this.closeTimeout && (clearTimeout(this.closeTimeout),
                this.closeTimeout = null)
            }
            ,
            c.prototype.clearTimeouts = function() {
                this.clearCloseTimeout(),
                this.reopenTimeout && clearTimeout(this.reopenTimeout)
            }
            ,
            c.prototype.packet = function(a) {
                this.send(b.parser.encodePacket(a))
            }
            ,
            c.prototype.onHeartbeat = function(a) {
                this.packet({
                    type: "heartbeat"
                })
            }
            ,
            c.prototype.onOpen = function() {
                this.isOpen = !0,
                this.clearCloseTimeout(),
                this.socket.onOpen()
            }
            ,
            c.prototype.onClose = function() {
                var a = this;
                this.isOpen = !1,
                this.socket.onClose(),
                this.onDisconnect()
            }
            ,
            c.prototype.prepareUrl = function() {
                var a = this.socket.options;
                return this.scheme() + "://" + a.host + ":" + a.port + "/" + a.resource + "/" + b.protocol + "/" + this.name + "/" + this.sessid
            }
            ,
            c.prototype.ready = function(a, b) {
                b.call(this)
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports),
        function(a, b, c) {
            function d(a) {
                this.options = {
                    port: 80,
                    secure: !1,
                    document: "document"in c ? document : !1,
                    resource: "socket.io",
                    transports: b.transports,
                    "connect timeout": 10000,
                    "try multiple transports": !0,
                    reconnect: !0,
                    "reconnection delay": 500,
                    "reconnection limit": Infinity,
                    "reopen delay": 3000,
                    "max reconnection attempts": 10,
                    "sync disconnect on unload": !1,
                    "auto connect": !0,
                    "flash policy port": 10843,
                    manualFlush: !1
                },
                b.util.merge(this.options, a),
                this.connected = !1,
                this.open = !1,
                this.connecting = !1,
                this.reconnecting = !1,
                this.namespaces = {},
                this.buffer = [],
                this.doBuffer = !1;
                if (this.options["sync disconnect on unload"] && (!this.isXDomain() || b.util.ua.hasCORS)) {
                    var d = this;
                    b.util.on(c, "beforeunload", function() {
                        d.disconnectSync()
                    }, !1)
                }
                this.options["auto connect"] && this.connect()
            }
            function e() {}
            a.Socket = d,
            b.util.mixin(d, b.EventEmitter),
            d.prototype.of = function(a) {
                return this.namespaces[a] || (this.namespaces[a] = new b.SocketNamespace(this,a),
                a !== "" && this.namespaces[a].packet({
                    type: "connect"
                })),
                this.namespaces[a]
            }
            ,
            d.prototype.publish = function() {
                this.emit.apply(this, arguments);
                var a;
                for (var b in this.namespaces) {
                    this.namespaces.hasOwnProperty(b) && (a = this.of(b),
                    a.$emit.apply(a, arguments))
                }
            }
            ,
            d.prototype.handshake = function(a) {
                function f(b) {
                    b instanceof Error ? (c.connecting = !1,
                    c.onError(b.message)) : a.apply(null, b.split(":"))
                }
                var c = this
                  , d = this.options
                  , g = ["http" + (d.secure ? "s" : "") + ":/", d.host + ":" + d.port, d.resource, b.protocol, b.util.query(this.options.query, "t=" + +(new Date))].join("/");
                if (this.isXDomain() && !b.util.ua.hasCORS) {
                    var h = document.getElementsByTagName("script")[0]
                      , i = document.createElement("script");
                    i.src = g + "&jsonp=" + b.j.length,
                    h.parentNode.insertBefore(i, h),
                    b.j.push(function(a) {
                        f(a),
                        i.parentNode.removeChild(i)
                    })
                } else {
                    var j = b.util.request();
                    j.open("GET", g, !0),
                    this.isXDomain() && (j.withCredentials = !0),
                    j.onreadystatechange = function() {
                        j.readyState == 4 && (j.onreadystatechange = e,
                        j.status == 200 ? f(j.responseText) : j.status == 403 ? c.onError(j.responseText) : (c.connecting = !1,
                        !c.reconnecting && c.onError(j.responseText)))
                    }
                    ,
                    j.send(null)
                }
            }
            ,
            d.prototype.getTransport = function(a) {
                var c = a || this.transports, d;
                for (var e = 0, f; f = c[e]; e++) {
                    if (b.Transport[f] && b.Transport[f].check(this) && (!this.isXDomain() || b.Transport[f].xdomainCheck(this))) {
                        return new b.Transport[f](this,this.sessionid)
                    }
                }
                return null
            }
            ,
            d.prototype.connect = function(a) {
                if (this.connecting) {
                    return this
                }
                var c = this;
                return c.connecting = !0,
                this.handshake(function(d, e, f, g) {
                    function h(a) {
                        c.transport && c.transport.clearTimeouts(),
                        c.transport = c.getTransport(a);
                        if (!c.transport) {
                            return c.publish("connect_failed")
                        }
                        c.transport.ready(c, function() {
                            c.connecting = !0,
                            c.publish("connecting", c.transport.name),
                            c.transport.open(),
                            c.options["connect timeout"] && (c.connectTimeoutTimer = setTimeout(function() {
                                if (!c.connected) {
                                    c.connecting = !1;
                                    if (c.options["try multiple transports"]) {
                                        var a = c.transports;
                                        while (a.length > 0 && a.splice(0, 1)[0] != c.transport.name) {}
                                        a.length ? h(a) : c.publish("connect_failed")
                                    }
                                }
                            }, c.options["connect timeout"]))
                        })
                    }
                    c.sessionid = d,
                    c.closeTimeout = f * 1000,
                    c.heartbeatTimeout = e * 1000,
                    c.transports || (c.transports = c.origTransports = g ? b.util.intersect(g.split(","), c.options.transports) : c.options.transports),
                    c.setHeartbeatTimeout(),
                    h(c.transports),
                    c.once("connect", function() {
                        clearTimeout(c.connectTimeoutTimer),
                        a && typeof a == "function" && a()
                    })
                }),
                this
            }
            ,
            d.prototype.setHeartbeatTimeout = function() {
                clearTimeout(this.heartbeatTimeoutTimer);
                if (this.transport && !this.transport.heartbeats()) {
                    return
                }
                var a = this;
                this.heartbeatTimeoutTimer = setTimeout(function() {
                    a.transport.onClose()
                }, this.heartbeatTimeout)
            }
            ,
            d.prototype.packet = function(a) {
                return this.connected && !this.doBuffer ? this.transport.packet(a) : this.buffer.push(a),
                this
            }
            ,
            d.prototype.setBuffer = function(a) {
                this.doBuffer = a,
                !a && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer())
            }
            ,
            d.prototype.flushBuffer = function() {
                this.transport.payload(this.buffer),
                this.buffer = []
            }
            ,
            d.prototype.disconnect = function() {
                if (this.connected || this.connecting) {
                    this.open && this.of("").packet({
                        type: "disconnect"
                    }),
                    this.onDisconnect("booted")
                }
                return this
            }
            ,
            d.prototype.disconnectSync = function() {
                var a = b.util.request()
                  , c = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, b.protocol, this.sessionid].join("/") + "/?disconnect=1";
                a.open("GET", c, !1),
                a.send(null),
                this.onDisconnect("booted")
            }
            ,
            d.prototype.isXDomain = function() {
                var a = c.location.port || ("https:" == c.location.protocol ? 443 : 80);
                return this.options.host !== c.location.hostname || this.options.port != a
            }
            ,
            d.prototype.onConnect = function() {
                this.connected || (this.connected = !0,
                this.connecting = !1,
                this.doBuffer || this.setBuffer(!1),
                this.emit("connect"))
            }
            ,
            d.prototype.onOpen = function() {
                this.open = !0
            }
            ,
            d.prototype.onClose = function() {
                this.open = !1,
                clearTimeout(this.heartbeatTimeoutTimer)
            }
            ,
            d.prototype.onPacket = function(a) {
                this.of(a.endpoint).onPacket(a)
            }
            ,
            d.prototype.onError = function(a) {
                a && a.advice && a.advice === "reconnect" && (this.connected || this.connecting) && (this.disconnect(),
                this.options.reconnect && this.reconnect()),
                this.publish("error", a && a.reason ? a.reason : a)
            }
            ,
            d.prototype.onDisconnect = function(a) {
                var b = this.connected
                  , c = this.connecting;
                this.connected = !1,
                this.connecting = !1,
                this.open = !1;
                if (b || c) {
                    this.transport.close(),
                    this.transport.clearTimeouts(),
                    b && (this.publish("disconnect", a),
                    "booted" != a && this.options.reconnect && !this.reconnecting && this.reconnect())
                }
            }
            ,
            d.prototype.reconnect = function() {
                function e() {
                    if (a.connected) {
                        for (var b in a.namespaces) {
                            a.namespaces.hasOwnProperty(b) && "" !== b && a.namespaces[b].packet({
                                type: "connect"
                            })
                        }
                        a.publish("reconnect", a.transport.name, a.reconnectionAttempts)
                    }
                    clearTimeout(a.reconnectionTimer),
                    a.removeListener("connect_failed", f),
                    a.removeListener("connect", f),
                    a.reconnecting = !1,
                    delete a.reconnectionAttempts,
                    delete a.reconnectionDelay,
                    delete a.reconnectionTimer,
                    delete a.redoTransports,
                    a.options["try multiple transports"] = c
                }
                function f() {
                    if (!a.reconnecting) {
                        return
                    }
                    if (a.connected) {
                        return e()
                    }
                    if (a.connecting && a.reconnecting) {
                        return a.reconnectionTimer = setTimeout(f, 1000)
                    }
                    a.reconnectionAttempts++ >= b ? a.redoTransports ? (a.publish("reconnect_failed"),
                    e()) : (a.on("connect_failed", f),
                    a.options["try multiple transports"] = !0,
                    a.transports = a.origTransports,
                    a.transport = a.getTransport(),
                    a.redoTransports = !0,
                    a.connect()) : (a.reconnectionDelay < d && (a.reconnectionDelay *= 2),
                    a.connect(),
                    a.publish("reconnecting", a.reconnectionDelay, a.reconnectionAttempts),
                    a.reconnectionTimer = setTimeout(f, a.reconnectionDelay))
                }
                this.reconnecting = !0,
                this.reconnectionAttempts = 0,
                this.reconnectionDelay = this.options["reconnection delay"];
                var a = this
                  , b = this.options["max reconnection attempts"]
                  , c = this.options["try multiple transports"]
                  , d = this.options["reconnection limit"];
                this.options["try multiple transports"] = !1,
                this.reconnectionTimer = setTimeout(f, this.reconnectionDelay),
                this.on("connect", f)
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this),
        function(a, b) {
            function c(a, b) {
                this.socket = a,
                this.name = b || "",
                this.flags = {},
                this.json = new d(this,"json"),
                this.ackPackets = 0,
                this.acks = {}
            }
            function d(a, b) {
                this.namespace = a,
                this.name = b
            }
            a.SocketNamespace = c,
            b.util.mixin(c, b.EventEmitter),
            c.prototype.$emit = b.EventEmitter.prototype.emit,
            c.prototype.of = function() {
                return this.socket.of.apply(this.socket, arguments)
            }
            ,
            c.prototype.packet = function(a) {
                return a.endpoint = this.name,
                this.socket.packet(a),
                this.flags = {},
                this
            }
            ,
            c.prototype.send = function(a, b) {
                var c = {
                    type: this.flags.json ? "json" : "message",
                    data: a
                };
                return "function" == typeof b && (c.id = ++this.ackPackets,
                c.ack = !0,
                this.acks[c.id] = b),
                this.packet(c)
            }
            ,
            c.prototype.emit = function(a) {
                var b = Array.prototype.slice.call(arguments, 1)
                  , c = b[b.length - 1]
                  , d = {
                    type: "event",
                    name: a
                };
                return "function" == typeof c && (d.id = ++this.ackPackets,
                d.ack = "data",
                this.acks[d.id] = c,
                b = b.slice(0, b.length - 1)),
                d.args = b,
                this.packet(d)
            }
            ,
            c.prototype.disconnect = function() {
                return this.name === "" ? this.socket.disconnect() : (this.packet({
                    type: "disconnect"
                }),
                this.$emit("disconnect")),
                this
            }
            ,
            c.prototype.onPacket = function(a) {
                function d() {
                    c.packet({
                        type: "ack",
                        args: b.util.toArray(arguments),
                        ackId: a.id
                    })
                }
                var c = this;
                switch (a.type) {
                case "connect":
                    this.$emit("connect");
                    break;
                case "disconnect":
                    this.name === "" ? this.socket.onDisconnect(a.reason || "booted") : this.$emit("disconnect", a.reason);
                    break;
                case "message":
                case "json":
                    var e = ["message", a.data];
                    a.ack == "data" ? e.push(d) : a.ack && this.packet({
                        type: "ack",
                        ackId: a.id
                    }),
                    this.$emit.apply(this, e);
                    break;
                case "event":
                    var e = [a.name].concat(a.args);
                    a.ack == "data" && e.push(d),
                    this.$emit.apply(this, e);
                    break;
                case "ack":
                    this.acks[a.ackId] && (this.acks[a.ackId].apply(this, a.args),
                    delete this.acks[a.ackId]);
                    break;
                case "error":
                    a.advice ? this.socket.onError(a) : a.reason == "unauthorized" ? this.$emit("connect_failed", a.reason) : this.$emit("error", a.reason)
                }
            }
            ,
            d.prototype.send = function() {
                this.namespace.flags[this.name] = !0,
                this.namespace.send.apply(this.namespace, arguments)
            }
            ,
            d.prototype.emit = function() {
                this.namespace.flags[this.name] = !0,
                this.namespace.emit.apply(this.namespace, arguments)
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports),
        function(a, b, c) {
            function d(a) {
                b.Transport.apply(this, arguments)
            }
            a.websocket = d,
            b.util.inherit(d, b.Transport),
            d.prototype.name = "websocket",
            d.prototype.open = function() {
                var a = b.util.query(this.socket.options.query), d = this, e;
                return e || (e = c.MozWebSocket || c.WebSocket),
                this.websocket = new e(this.prepareUrl() + a),
                this.websocket.onopen = function() {
                    d.onOpen(),
                    d.socket.setBuffer(!1)
                }
                ,
                this.websocket.onmessage = function(a) {
                    d.onData(a.data)
                }
                ,
                this.websocket.onclose = function() {
                    d.onClose(),
                    d.socket.setBuffer(!0)
                }
                ,
                this.websocket.onerror = function(a) {
                    d.onError(a)
                }
                ,
                this
            }
            ,
            b.util.ua.iDevice ? d.prototype.send = function(a) {
                var b = this;
                return setTimeout(function() {
                    b.websocket.send(a)
                }, 0),
                this
            }
            : d.prototype.send = function(a) {
                return this.websocket.send(a),
                this
            }
            ,
            d.prototype.payload = function(a) {
                for (var b = 0, c = a.length; b < c; b++) {
                    this.packet(a[b])
                }
                return this
            }
            ,
            d.prototype.close = function() {
                return this.websocket.close(),
                this
            }
            ,
            d.prototype.onError = function(a) {
                this.socket.onError(a)
            }
            ,
            d.prototype.scheme = function() {
                return this.socket.options.secure ? "wss" : "ws"
            }
            ,
            d.check = function() {
                return "WebSocket"in c && !("__addTask"in WebSocket) || "MozWebSocket"in c
            }
            ,
            d.xdomainCheck = function() {
                return !0
            }
            ,
            b.transports.push("websocket")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this),
        function(a, b, c) {
            function d(a) {
                if (!a) {
                    return
                }
                b.Transport.apply(this, arguments),
                this.sendBuffer = []
            }
            function e() {}
            a.XHR = d,
            b.util.inherit(d, b.Transport),
            d.prototype.open = function() {
                return this.socket.setBuffer(!1),
                this.onOpen(),
                this.get(),
                this.setCloseTimeout(),
                this
            }
            ,
            d.prototype.payload = function(a) {
                var c = [];
                for (var d = 0, e = a.length; d < e; d++) {
                    c.push(b.parser.encodePacket(a[d]))
                }
                this.send(b.parser.encodePayload(c))
            }
            ,
            d.prototype.send = function(a) {
                return this.post(a),
                this
            }
            ,
            d.prototype.post = function(a) {
                function d() {
                    this.readyState == 4 && (this.onreadystatechange = e,
                    b.posting = !1,
                    this.status == 200 ? b.socket.setBuffer(!1) : b.onClose())
                }
                function f() {
                    this.onload = e,
                    b.socket.setBuffer(!1)
                }
                var b = this;
                this.socket.setBuffer(!0),
                this.sendXHR = this.request("POST"),
                c.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = f : this.sendXHR.onreadystatechange = d,
                this.sendXHR.send(a)
            }
            ,
            d.prototype.close = function() {
                return this.onClose(),
                this
            }
            ,
            d.prototype.request = function(a) {
                var c = b.util.request(this.socket.isXDomain())
                  , d = b.util.query(this.socket.options.query, "t=" + +(new Date));
                c.withCredentials = true;
                c.open(a || "GET", this.prepareUrl() + d, !0);
                if (a == "POST") {
                    try {
                        c.setRequestHeader ? c.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : c.contentType = "text/plain"
                    } catch (e) {}
                }
                return c
            }
            ,
            d.prototype.scheme = function() {
                return this.socket.options.secure ? "https" : "http"
            }
            ,
            d.check = function(a, d) {
                try {
                    var e = b.util.request(d)
                      , f = c.XDomainRequest && e instanceof XDomainRequest
                      , g = a && a.options && a.options.secure ? "https:" : "http:"
                      , h = c.location && g != c.location.protocol;
                    if (e && (!f || !h)) {
                        return !0
                    }
                } catch (i) {}
                return !1
            }
            ,
            d.xdomainCheck = function(a) {
                return d.check(a, !0)
            }
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this),
        function(a, b) {
            function c(a) {
                b.Transport.XHR.apply(this, arguments)
            }
            a.htmlfile = c,
            b.util.inherit(c, b.Transport.XHR),
            c.prototype.name = "htmlfile",
            c.prototype.get = function() {
                this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile"),
                this.doc.open(),
                this.doc.write("<html></html>"),
                this.doc.close(),
                this.doc.parentWindow.s = this;
                var a = this.doc.createElement("div");
                a.className = "socketio",
                this.doc.body.appendChild(a),
                this.iframe = this.doc.createElement("iframe"),
                a.appendChild(this.iframe);
                var c = this
                  , d = b.util.query(this.socket.options.query, "t=" + +(new Date));
                this.iframe.src = this.prepareUrl() + d,
                b.util.on(window, "unload", function() {
                    c.destroy()
                })
            }
            ,
            c.prototype._ = function(a, b) {
                a = a.replace(/\\\//g, "/"),
                this.onData(a);
                try {
                    var c = b.getElementsByTagName("script")[0];
                    c.parentNode.removeChild(c)
                } catch (d) {}
            }
            ,
            c.prototype.destroy = function() {
                if (this.iframe) {
                    try {
                        this.iframe.src = "about:blank"
                    } catch (a) {}
                    this.doc = null,
                    this.iframe.parentNode.removeChild(this.iframe),
                    this.iframe = null,
                    CollectGarbage()
                }
            }
            ,
            c.prototype.close = function() {
                return this.destroy(),
                b.Transport.XHR.prototype.close.call(this)
            }
            ,
            c.check = function(a) {
                if (typeof window != "undefined" && ["Active"].concat("Object").join("X")in window) {
                    try {
                        var c = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                        return c && b.Transport.XHR.check(a)
                    } catch (d) {}
                }
                return !1
            }
            ,
            c.xdomainCheck = function() {
                return !1
            }
            ,
            b.transports.push("htmlfile")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports),
        function(a, b, c) {
            function d() {
                b.Transport.XHR.apply(this, arguments)
            }
            function e() {}
            a["xhr-polling"] = d,
            b.util.inherit(d, b.Transport.XHR),
            b.util.merge(d, b.Transport.XHR),
            d.prototype.name = "xhr-polling",
            d.prototype.heartbeats = function() {
                return !1
            }
            ,
            d.prototype.open = function() {
                var a = this;
                return b.Transport.XHR.prototype.open.call(a),
                !1
            }
            ,
            d.prototype.get = function() {
                function b() {
                    this.readyState == 4 && (this.onreadystatechange = e,
                    this.status == 200 ? (a.onData(this.responseText),
                    a.get()) : a.onClose())
                }
                function d() {
                    this.onload = e,
                    this.onerror = e,
                    a.retryCounter = 1,
                    a.onData(this.responseText),
                    a.get()
                }
                function f() {
                    a.retryCounter++,
                    !a.retryCounter || a.retryCounter > 3 ? a.onClose() : a.get()
                }
                if (!this.isOpen) {
                    return
                }
                var a = this;
                this.xhr = this.request(),
                c.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = d,
                this.xhr.onerror = f) : this.xhr.onreadystatechange = b,
                this.xhr.send(null)
            }
            ,
            d.prototype.onClose = function() {
                b.Transport.XHR.prototype.onClose.call(this);
                if (this.xhr) {
                    this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = e;
                    try {
                        this.xhr.abort()
                    } catch (a) {}
                    this.xhr = null
                }
            }
            ,
            d.prototype.ready = function(a, c) {
                var d = this;
                b.util.defer(function() {
                    c.call(d)
                })
            }
            ,
            b.transports.push("xhr-polling")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this),
        function(a, b, c) {
            function e(a) {
                b.Transport["xhr-polling"].apply(this, arguments),
                this.index = b.j.length;
                var c = this;
                b.j.push(function(a) {
                    c._(a)
                })
            }
            var d = c.document && "MozAppearance"in c.document.documentElement.style;
            a["jsonp-polling"] = e,
            b.util.inherit(e, b.Transport["xhr-polling"]),
            e.prototype.name = "jsonp-polling",
            e.prototype.post = function(a) {
                function i() {
                    j(),
                    c.socket.setBuffer(!1)
                }
                function j() {
                    c.iframe && c.form.removeChild(c.iframe);
                    try {
                        h = document.createElement('<iframe src="javascript:0" name="' + c.iframeId + '">')
                    } catch (a) {
                        h = document.createElement("iframe"),
                        h.name = c.iframeId,
                        h.src = "javascript:0"
                    }
                    h.id = c.iframeId,
                    c.form.appendChild(h),
                    c.iframe = h
                }
                var c = this
                  , d = b.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
                if (!this.form) {
                    var e = document.createElement("form"), f = document.createElement("textarea"), g = this.iframeId = "socketio_iframe_" + this.index, h;
                    e.className = "socketio",
                    e.style.position = "absolute",
                    e.style.top = "0px",
                    e.style.left = "0px",
                    e.style.display = "none",
                    e.target = g,
                    e.method = "POST",
                    e.setAttribute("accept-charset", "utf-8"),
                    f.name = "d",
                    e.appendChild(f),
                    document.body.appendChild(e),
                    this.form = e,
                    this.area = f
                }
                this.form.action = this.prepareUrl() + d,
                j(),
                this.area.value = b.JSON.stringify(a);
                try {
                    this.form.submit()
                } catch (k) {}
                this.iframe.attachEvent ? h.onreadystatechange = function() {
                    c.iframe.readyState == "complete" && i()
                }
                : this.iframe.onload = i,
                this.socket.setBuffer(!0)
            }
            ,
            e.prototype.get = function() {
                var a = this
                  , c = document.createElement("script")
                  , e = b.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
                this.script && (this.script.parentNode.removeChild(this.script),
                this.script = null),
                c.async = !0,
                c.src = this.prepareUrl() + e,
                c.onerror = function() {
                    a.onClose()
                }
                ;
                var f = document.getElementsByTagName("script")[0];
                f.parentNode.insertBefore(c, f),
                this.script = c,
                d && setTimeout(function() {
                    var a = document.createElement("iframe");
                    a.src = "javascript:0",
                    document.body.appendChild(a),
                    document.body.removeChild(a)
                }, 100)
            }
            ,
            e.prototype._ = function(a) {
                return this.onData(a),
                this.isOpen && this.get(),
                this
            }
            ,
            e.prototype.ready = function(a, c) {
                var e = this;
                if (!d) {
                    return c.call(this)
                }
                b.util.load(function() {
                    c.call(e)
                })
            }
            ,
            e.check = function() {
                return "document"in c
            }
            ,
            e.xdomainCheck = function() {
                return !0
            }
            ,
            b.transports.push("jsonp-polling")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this)
    }
    )()
}
function bysideWebcare_applicationEventHandler(data) {
    var instruction;
    if (Object.prototype.toString.call(data) !== "[object Array]") {
        data = [].concat(data)
    }
    for (var i = data.length - 1; i >= 0; i--) {
        instruction = data[i];
        if (typeof instruction.type === "undefined" || typeof instruction.value === "undefined") {
            continue
        }
        try {
            switch (instruction.type) {
            case "loadDependencies":
                if (Object.prototype.toString.call(instruction.value) !== "[object Array]") {
                    instruction.value = [].concat(instruction.value)
                }
                for (var j = instruction.value.length - 1; j >= 0; j--) {
                    var url = instruction.value[j].indexOf("?") === -1 ? instruction.value[j] + "?" : instruction.value[j] + "&";
                    url += "bysideWebcare_webcare_id=" + bysideWebcare_webcare_id + "&bwch=" + bysideWebcare_channel + "&bysideWebcare_lang=" + bysideWebcare_lang + "&bwit=" + encodeURIComponent(bysideWebcare_identification_type) + "&bysideWebcare_fid=" + encodeURIComponent(bysideWebcare_fid) + "&byside_webcare_tuid=" + byside_webcare_tuid + "&byside_webcare_suid=" + byside_webcare_suid + "&byside_webcare_puid=" + byside_webcare_puid + "&referrer=" + encodeURIComponent(document.referrer) + "&page=" + encodeURIComponent(bysideWebcare_getcurrentpage()) + "&bwpt=" + encodeURIComponent(bysideWebcare_getPageTitle()) + "&bres=" + bysideWebcare_getBrowserResolution() + "&w=" + xClientWidth() + "&h=" + xClientHeight() + "&res=" + screen.width + "x" + screen.height + "&v=" + bysideWebcare_versionid;
                    bysideWebcare_dhtml_load_script(url)
                }
                break;
            case "executeScript":
                (window.execScript || (function(instructionData) {
                    window.eval.call(window, instructionData)
                }
                )(instruction.value));
                break;
            default:
                break
            }
        } catch (e) {}
    }
}
function bysideWebcareCloseSocket() {
    try {
        window.bysideWebcareSocket.disconnect()
    } catch (a) {
        return
    }
}
function bysideWebcareEmitInfo() {
    var a = {
        webcare_id: bysideWebcare_webcare_id,
        bwit: encodeURIComponent(bysideWebcare_identification_type),
        fid: encodeURIComponent(bysideWebcare_fid),
        tuid: byside_webcare_tuid,
        suid: byside_webcare_suid,
        puid: byside_webcare_puid,
        page: encodeURIComponent(bysideWebcare_getcurrentpage())
    };
    window.bysideWebcareSocket.emit("info", a, function(b) {
        if (b) {
            bysideWebcareInfoProcessed = true;
            window.bysideWebcareSocket.removeListener("applicationEvent", bysideWebcare_applicationEventHandler);
            window.bysideWebcareSocket.on("applicationEvent", bysideWebcare_applicationEventHandler);
            window.bysideWebcareSocket.emit("applicationReady", a)
        } else {
            bysideWebcareCloseSocket()
        }
    })
}
function bysideWebcareSetCampaigns() {
    var b = "", a;
    if (!bysideWebcareInfoProcessed) {
        window.setTimeout(function() {
            bysideWebcareSetCampaigns()
        }, 150)
    } else {
        window.bysideWebcareSocket.on("fireCampaign", function(d) {
            try {
                var e = d.id;
                bysideWebcare_triggerevent(e)
            } catch (c) {}
        });
        for (a in bysideWebcare_manualtriggerevents) {
            if (Object.prototype.hasOwnProperty.call(bysideWebcare_manualtriggerevents, a)) {
                b += a + ";"
            }
        }
        if (b !== "") {
            window.bysideWebcareSocket.emit("infoCampaigns", {
                webcare_id: bysideWebcare_webcare_id,
                bwit: encodeURIComponent(bysideWebcare_identification_type),
                fid: encodeURIComponent(bysideWebcare_fid),
                tuid: byside_webcare_tuid,
                suid: byside_webcare_suid,
                puid: byside_webcare_puid,
                campaigns: b
            })
        }
    }
}
function bysideWebcareSocketOnConnect() {
    bysideWebcareEmitInfo()
}
function bysideWebcareStartSocket(b) {
    try {
        window.bysideWebcareSocket = io.connect(bysideWebcare_websockets_baseurl, {
            "sync disconnect on unload": false
        })
    } catch (a) {
        return
    }
    if (b) {
        window.bysideWebcareSocket.on("connect", bysideWebcareSocketOnConnect)
    }
}
function bysideWebcareReconnectSocket() {
    try {
        if (!window.bysideWebcareSocket || !window.bysideWebcareSocket.socket) {
            bysideWebcareStartSocket(true);
            return
        }
        window.bysideWebcareSocket.removeAllListeners();
        window.bysideWebcareSocket.socket.disconnectSync();
        window.bysideWebcareSocket.on("connect", bysideWebcareSocketOnConnect);
        window.bysideWebcareSocket.socket.connect()
    } catch (a) {
        return
    }
}
var xCookie = {
    get: function(a) {
        var b = document.cookie.match(new RegExp("(^|;)\\s*" + a + "=([^;\\s]*)"));
        return ((b && b.length >= 3) ? unescape(b[2]) : null)
    },
    set: function(b, g, j, l, c, a, e, k) {
        var f = new Date()
          , h = location.protocol === "https:";
        if (j) {
            f.setTime(f.getTime() + (j * 86400000))
        }
        if (typeof c === "undefined" || !c) {
            c = bysideWebcare_getCookieDomain(b, g)
        }
        if (typeof k === "undefined") {
            k = "Lax"
        }
        document.cookie = b + "=" + escape(g) + (j ? ("; expires=" + f.toGMTString()) : "") + "; path=" + (l || "/") + (c ? ("; domain=" + c) : "") + (k ? "; SameSite=" + k : "") + (e === true ? "; HttpOnly" : "") + ((typeof a === "undefined" && h) || a ? "; Secure" : "")
    },
    del: function(a, c, b) {
        this.set(a, "DELETE", -1, c, b)
    }
};
function bysideWebcare_getCookieDomain(b, e) {
    if (typeof bysideWebcare_cookie_domain !== "undefined" && !!bysideWebcare_cookie_domain) {
        return bysideWebcare_cookie_domain
    }
    var d = null;
    function c() {
        var k = location.hostname.split("."), j = k.length, h = null, f, g;
        if (j === 1) {
            return null
        }
        while (j-- > 2) {
            f = k.slice(1).join(".");
            if (!f) {
                break
            }
            xCookie.set(b, e, bysideWebcare_cookie_lifetime, h, f);
            g = xCookie.get(b);
            if (!g) {
                break
            }
            xCookie.del(b, h, f);
            k.shift()
        }
        return k.join(".")
    }
    try {
        d = c();
        d = d ? "." + d : null
    } catch (a) {
        console.warn("== could not get cookie root domain ==", a)
    }
    if (!d) {
        d = (location.host.match(/([^.]+)\.\w{2,}(?:\.\w{2})?$/));
        d = d && d[0] ? "." + d[0].replace("www.", "") : null
    }
    bysideWebcare_cookie_domain = d;
    return bysideWebcare_cookie_domain
}
function bysideWebcare_isValidCookieLifetime() {
    return typeof bysideWebcare_cookie_lifetime !== "undefined" && !isNaN(bysideWebcare_cookie_lifetime) && +bysideWebcare_cookie_lifetime > 0
}
function bysideWebcare_setDoNotTrack(d, b, c) {
    var a;
    switch (d) {
    case "OFF":
        a = "TARGETING";
        break;
    case "ON":
        a = "DO_NOT_TRACK";
        break;
    default:
        a = d || "DO_NOT_TRACK";
        break
    }
    return bysideWebcare_setCookieServiceLevel(a, b, c)
}
function bysideWebcare_unsetDoNotTrack(a, b) {
    return bysideWebcare_setCookieServiceLevel("TARGETING", a, b)
}
function bysideWebcare_setCookieServiceLevel(f, d, e) {
    var c = {
        DO_NOT_TRACK: 1,
        FUNCTIONAL: 1,
        PERSONALIZATION: 1,
        TARGETING: 1
    };
    var b = null;
    switch (f || "DO_NOT_TRACK") {
    case "TARGETING":
        break;
    case "PERSONALIZATION":
        c.TARGETING = 0;
        break;
    case "FUNCTIONAL":
        c.PERSONALIZATION = 0;
        c.TARGETING = 0;
        break;
    case "DO_NOT_TRACK":
        b = "DO_NOT_TRACK_0";
        c.FUNCTIONAL = 0;
        c.PERSONALIZATION = 0;
        c.TARGETING = 0;
        break;
    default:
        break
    }
    function a() {
        if (typeof e === "function") {
            e()
        }
        if (typeof d === "undefined" || d === true) {
            setTimeout(function() {
                window.location.reload()
            }, 250)
        }
    }
    bysideWebcare_saveCookieServiceLevelInfo(c);
    if (b) {
        byside_webcare_tuid = b;
        byside_webcare_suid = xCookie.get("byside_webcare_session_tid") || bysideWebcare_generateTUID();
        xCookie.del("byside_webcare_tuid");
        xCookie.set("byside_webcare_session_tid", byside_webcare_suid, 0);
        bysideWebcare_persistCookieServiceLevelInfo(a);
        return
    }
    if (!byside_webcare_tuid || byside_webcare_tuid.indexOf("DO_NOT_TRACK") === 0) {
        byside_webcare_tuid = bysideWebcare_generateTUID();
        byside_webcare_suid = null;
        xCookie.set("byside_webcare_tuid", byside_webcare_tuid, bysideWebcare_cookie_lifetime);
        xCookie.del("byside_webcare_session_tid");
        bysideWebcare_persistCookieServiceLevelInfo(a);
        return
    }
    bysideWebcare_persistCookieServiceLevelInfo(a)
}
function bysideWebcare_saveCookieServiceLevelInfo(a) {
    var e = "byside_cookie_service_level";
    var c = "byside_cookie_service_level_dirty";
    var d = 1;
    try {
        d = bysideWebcare_isDiffCookieServiceLevel(a) ? 1 : 0
    } catch (b) {
        console.error("== error checking cookie service level info diff ==", b)
    }
    try {
        localStorage.setItem(e, JSON.stringify(a));
        localStorage.setItem(c, d)
    } catch (b) {
        console.error("== error saving cookie service level info ==", b)
    }
}
function bysideWebcare_getCookieServiceLevelInfo() {
    var c = "byside_cookie_service_level";
    var a = null;
    try {
        a = localStorage.getItem(c);
        a = a ? JSON.parse(a) : null
    } catch (b) {
        console.error("== error getting cookie service level info ==", b)
    }
    return a
}
function bysideWebcare_isDiffCookieServiceLevel(a, c) {
    var d = false;
    var e;
    try {
        if (!c) {
            c = bysideWebcare_getCookieServiceLevelInfo()
        }
        if (!c) {
            return true
        }
        for (e in c) {
            if (Object.hasOwnProperty.call(c, e) && c[e] !== a[e]) {
                d = true
            }
        }
    } catch (b) {}
    return d
}
function bysideWebcare_resetCookieExpiration() {
    var a = xCookie.get("byside_webcare_tuid");
    if (a) {
        xCookie.set("byside_webcare_tuid", a, bysideWebcare_cookie_lifetime)
    }
}
function bysideWebcare_persistCookieServiceLevelInfo(g) {
    var f = "byside_cookie_service_level_dirty";
    var d;
    var c;
    function b() {
        if (typeof g === "function") {
            g()
        }
    }
    try {
        d = bysideWebcare_getCookieServiceLevelInfo();
        c = localStorage.getItem(f);
        if (!!+c && d) {
            localStorage.removeItem(f);
            var a = bysideWebcare_createQueryStringParams({
                info: d,
                action: "set"
            });
            if (!window.bysideWebcare_isInStudioIframe) {
                bysideWebcare_make_post_request(bysideWebcare_get_agent_baseurl() + "csl/action.php", a, b)
            }
        } else {
            localStorage.removeItem(f);
            b()
        }
    } catch (e) {
        b()
    }
}
function bysideWebcare_getCookieServiceLevel() {
    var a;
    try {
        a = bysideWebcare_getCookieServiceLevelInfo();
        if (a) {
            if (a.TARGETING === 1) {
                return "TARGETING"
            }
            if (a.PERSONALIZATION === 1) {
                return "PERSONALIZATION"
            }
            if (a.FUNCTIONAL === 1) {
                return "FUNCTIONAL"
            }
            if (a.DO_NOT_TRACK === 1) {
                return "DO_NOT_TRACK"
            }
        }
    } catch (b) {}
    if (bysideWebcare_fid) {
        return "TARGETING"
    }
    if (byside_webcare_tuid) {
        switch (byside_webcare_tuid) {
        case "DO_NOT_TRACK":
            return "DO_NOT_TRACK";
        case "DO_NOT_TRACK_10":
            return "FUNCTIONAL";
        default:
            return "TARGETING"
        }
    }
    return ""
}
function bysideWebcare_dhtml_load_script(a, j, f, k) {
    var e = false;
    var d = {
        id: null,
        useRandom: true
    };
    var b = bysideWebcare_mergeObjects(d, k || {});
    if (b.id && document.getElementById(b.id)) {
        return
    }
    if (a.indexOf("?") > 0) {
        a = a + "&rndc=" + (b.useRandom ? new Date().getTime() : 0)
    } else {
        a = a + "?rndc=" + (b.useRandom ? new Date().getTime() : 0)
    }
    a += (typeof bysideWebcare_cspid !== "undefined" && bysideWebcare_cspid) ? "&cspid=" + encodeURIComponent(bysideWebcare_cspid) : "";
    var h = document.getElementsByTagName("head")[0] || document.documentElement;
    var g = document.createElement("script");
    if (b.id) {
        g.id = b.id;
        g.type = "text/javascript"
    }
    g.src = a;
    if (typeof window.bysideWebcare_cspid !== "undefined" && window.bysideWebcare_cspid) {
        g.setAttribute("nonce", window.bysideWebcare_cspid)
    }
    var c;
    if (typeof j !== "undefined" && typeof f !== "undefined" && f !== null) {
        c = setTimeout(function() {
            e = true;
            f()
        }, j * 1000)
    }
    g.onload = g.onreadystatechange = function() {
        if (!e && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            e = true;
            if (typeof c !== "undefined") {
                clearTimeout(c)
            }
            g.onload = g.onreadystatechange = null;
            if (h && g.parentNode && !b.id) {
                h.removeChild(g)
            }
        }
    }
    ;
    if (b.id) {
        h.appendChild(g)
    } else {
        h.insertBefore(g, h.firstChild)
    }
}
function bysideWebcare_loadCSS(c, b, g) {
    var a = {
        id: null
    };
    var e = bysideWebcare_mergeObjects(a, b || {});
    if (!e.id || !document.getElementById(e.id)) {
        var d = document.getElementsByTagName("head")[0] || document.documentElement;
        var f = document.createElement("link");
        if (e.id) {
            f.id = e.id
        }
        f.rel = "stylesheet";
        f.type = "text/css";
        f.href = c;
        f.media = "all";
        if (g && typeof g === "function") {
            f.onload = g
        }
        if (e.id) {
            d.appendChild(f)
        } else {
            d.insertBefore(f, d.firstChild)
        }
    }
}
function bysideWebcare_requireCSS(b, a, c) {
    bysideWebcare_loadCSS(b, a, c)
}
function bysideWebcare_ajax_request(a, d, b) {
    var c;
    if (window.XMLHttpRequest) {
        c = new XMLHttpRequest()
    } else {
        if (window.ActiveXObject) {
            c = new ActiveXObject("Microsoft.XMLHTTP")
        }
    }
    if (a.indexOf("?") > 0) {
        a = a + "&c=" + new Date().getTime()
    } else {
        a = a + "?c=" + new Date().getTime()
    }
    a += (typeof bysideWebcare_cspid !== "undefined" && bysideWebcare_cspid) ? "&cspid=" + encodeURIComponent(bysideWebcare_cspid) : "";
    c.open("GET", a, b);
    if (d !== null && !!d) {
        c.onreadystatechange = d
    }
    c.send(null);
    return c
}
function bysideWebcare_make_request(a, c) {
    var b = new Image(1,1);
    if (a.indexOf("?") < 0) {
        a = a + "?rnd=" + Math.round(10000 * Math.random())
    } else {
        a = a + "&rnd=" + Math.round(10000 * Math.random())
    }
    a += (typeof bysideWebcare_cspid !== "undefined" && bysideWebcare_cspid) ? "&cspid=" + encodeURIComponent(bysideWebcare_cspid) : "";
    b.onload = function() {
        if (typeof c === "function") {
            c();
            c = null
        } else {
            bysideWebcare_void()
        }
    }
    ;
    b.src = a
}
function bysideWebcare_make_post_request(a, c, d) {
    if ("withCredentials"in new XMLHttpRequest()) {
        if (typeof bysideWebcare_cspid !== "undefined" && bysideWebcare_cspid) {
            c = c || "";
            c += (c.length ? "&" : "") + "cspid=" + bysideWebcare_cspid
        }
        var b = new xHttpRequest();
        b.send("POST", a, c, false, "rnd", true, {}, d || bysideWebcare_void)
    } else {
        bysideWebcare_make_request(a + "?" + c, d)
    }
}
function bysideWebcare_sendBeacon(a, d) {
    var g = false;
    var e = new FormData();
    var c;
    var b = Object.keys(d);
    if (b.length !== 0) {
        for (var f = 0; f < b.length; f++) {
            c = b[f];
            if (Object.prototype.hasOwnProperty.call(d, c)) {
                e.append(c, d[c])
            }
        }
    }
    if ("sendBeacon"in navigator) {
        try {
            g = navigator.sendBeacon.bind(navigator)(a, e)
        } catch (h) {}
    }
    if (!g) {
        var j = new XMLHttpRequest();
        j.open("POST", a, true);
        j.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        j.withCredentials = true;
        j.send(d)
    }
}
function bysideWebcare_processTUID() {
    if (!bysideWebcare_fid_isValidFid() && !!bysideWebcare_getcurrentpageparam("bwuatk")) {
        bysideWebcare_uatk = bysideWebcare_getcurrentpageparam("bwuatk")
    } else {
        if (!bysideWebcare_fid_isValidFid()) {
            bysideWebcare_fid_retrieveFromStorage()
        }
    }
    byside_webcare_tuid = xCookie.get("byside_webcare_tuid");
    byside_webcare_suid = xCookie.get("byside_webcare_session_tid");
    if (!byside_webcare_tuid && byside_webcare_suid) {
        byside_webcare_tuid = "DO_NOT_TRACK_0"
    }
    if (typeof byside_webcare_puid === "undefined" || !byside_webcare_puid) {
        byside_webcare_puid = bysideWebcare_generateTUID()
    }
    if (bysideWebcare_fid) {
        bysideWebcare_processTUID_step2()
    } else {
        if (!!bysideWebcare_uatk && (byside_webcare_tuid === null || byside_webcare_tuid.indexOf("DO_NOT_TRACK_0") === -1)) {
            byside_webcare_tuid = null;
            byside_webcare_suid = null;
            bysideWebcare_dhtml_load_script(bysideWebcare_get_agent_baseurl() + "uatk.php?tk=" + bysideWebcare_uatk)
        } else {
            bysideWebcare_processTUID_step2()
        }
    }
}
function bysideWebcare_processTUID_step2(b) {
    var d = bysideWebcare_getCookieServiceLevel();
    var c = typeof b !== "undefined" && b === false ? false : true;
    function a() {
        if (bysideWebcare_cookie_expiration_reset) {
            bysideWebcare_resetCookieExpiration()
        }
        bysideWebcare_persistCookieServiceLevelInfo(function() {
            bysideWebcare_loadnow_ready = true;
            if (c) {
                bysideWebcare_process_stat()
            }
            bysideWebcare_process_socketOnConnect()
        })
    }
    if (bysideWebcare_fid) {
        bysideWebcare_setCookieServiceLevel("TARGETING", false, a);
        return
    }
    if (!byside_webcare_tuid && typeof bysideWebcare_privacy !== "undefined" && +bysideWebcare_privacy === 1) {
        bysideWebcare_setCookieServiceLevel("DO_NOT_TRACK", false, a);
        return
    }
    if (byside_webcare_tuid && byside_webcare_tuid.indexOf("DO_NOT_TRACK_10") === 0) {
        bysideWebcare_setCookieServiceLevel("FUNCTIONAL", false, a);
        return
    }
    if (byside_webcare_tuid && byside_webcare_tuid.indexOf("DO_NOT_TRACK") === 0) {
        bysideWebcare_setCookieServiceLevel("DO_NOT_TRACK", false, a);
        return
    }
    if (!byside_webcare_tuid) {
        if (d) {
            bysideWebcare_setCookieServiceLevel(d, false, a);
            return
        }
        bysideWebcare_setCookieServiceLevel("TARGETING", false, a);
        return
    }
    a()
}
function bysideWebcare_process_socketOnConnect() {
    if ((typeof bysideWebcare_just_funcs !== "undefined" && bysideWebcare_just_funcs) || window.bysideWebcare_isInStudioIframe || !bysideWebcare_webcare_id) {
        return
    }
    if (window.bysideWebcareSocket) {
        if (window.bysideWebcareSocket.socket && window.bysideWebcareSocket.socket.connected) {
            bysideWebcareSocketOnConnect()
        } else {
            window.bysideWebcareSocket.on("connect", bysideWebcareSocketOnConnect)
        }
    }
}
function bysideWebcare_process_stat() {
    if ((typeof bysideWebcare_just_funcs !== "undefined" && bysideWebcare_just_funcs) || window.bysideWebcare_isInStudioIframe || !bysideWebcare_webcare_id) {
        return
    }
    if (byside_webcare_bwatfb) {
        return
    }
    if (typeof bysideWebcare_alternate_id !== "undefined" && bysideWebcare_alternate_id) {
        var a = bysideWebcare_createQueryStringParams({
            alternate_id: encodeURIComponent(bysideWebcare_alternate_id)
        });
        bysideWebcare_dhtml_load_script(bysideWebcare_get_agent_baseurl() + "alternate.php?" + a);
        return
    }
    bysideWebcare_process_stat_continue()
}
function bysideWebcare_getPagePostParams(a) {
    return {
        webcare_id: a || bysideWebcare_webcare_id,
        referrer: document.referrer,
        page: bysideWebcare_getcurrentpage(),
        bwpt: bysideWebcare_getPageTitle(),
        bwpkwd: document.head.querySelector('meta[name="keywords"]') ? document.head.querySelector('meta[name="keywords"]').content : "",
        bwpdsc: document.head.querySelector('meta[name="description"]') ? document.head.querySelector('meta[name="description"]').content : ""
    }
}
function bysideWebcare_getPageQueryStringParams(a) {
    return {
        webcare_id: a || bysideWebcare_webcare_id,
        referrer: encodeURIComponent(document.referrer),
        page: encodeURIComponent(bysideWebcare_getcurrentpage()),
        bwpt: encodeURIComponent(bysideWebcare_getPageTitle()),
        bwpkwd: encodeURIComponent(document.head.querySelector('meta[name="keywords"]') ? document.head.querySelector('meta[name="keywords"]').content : ""),
        bwpdsc: encodeURIComponent(document.head.querySelector('meta[name="description"]') ? document.head.querySelector('meta[name="description"]').content : "")
    }
}
function bysideWebcare_process_stat_continue() {
    var a = bysideWebcare_createQueryStringParams(bysideWebcare_getPageQueryStringParams(), true);
    var b = bysideWebcare_get_agent_baseurl() + "st.php?" + a;
    if (typeof byside_webcare_bwcocva !== "undefined" && byside_webcare_bwcocva) {
        b += "&bwcocva=" + encodeURIComponent(byside_webcare_bwcocva)
    }
    bysideWebcare_make_request(b)
}
function bysideWebcare_additional_stat(b) {
    if ((typeof bysideWebcare_just_funcs === "undefined" || !bysideWebcare_just_funcs) && !window.bysideWebcare_isInStudioIframe && (b || bysideWebcare_webcare_id)) {
        var a = bysideWebcare_createQueryStringParams(bysideWebcare_getPageQueryStringParams(b));
        bysideWebcare_make_request(bysideWebcare_get_agent_baseurl() + "st.php?" + a)
    }
}
function bysideWebcare_processPageUnload() {
    if (window.bysideWebcare_isInStudioIframe || !bysideWebcare_webcare_id) {
        return
    }
    var b = bysideWebcare_getPagePostParams();
    if (typeof byside_webcare_bwcocva !== "undefined" && byside_webcare_bwcocva) {
        b.bwcocva = byside_webcare_bwcocva
    }
    b.duration = Math.round((new Date().getTime() - bysideWebcare_pageStartTime) / 1000);
    var a = bysideWebcare_createPostParams(b, true);
    bysideWebcare_sendBeacon(bysideWebcare_getAgentUrl("track/unload.php"), a)
}
function bysideWebcare_fid_cookie_set(b, a) {
    xCookie.set("byside_webcare_fid", b, a)
}
function bysideWebcare_fid_cookie_get() {
    return xCookie.get("byside_webcare_fid")
}
function bysideWebcare_fid_cookie_remove() {
    xCookie.del("byside_webcare_fid")
}
function bysideWebcare_fid_ls_set(g, d) {
    var c = "byside_webcare_fid";
    if (typeof Storage !== "undefined") {
        try {
            if (d === 0) {
                sessionStorage.setItem(c, g);
                localStorage.removeItem(c);
                localStorage.removeItem(c + "_exp")
            } else {
                var a = new Date();
                var b = Math.round((a.setSeconds(a.getSeconds() + d * 86400)) / 1000);
                localStorage.setItem(c, g);
                localStorage.setItem(c + "_exp", b);
                sessionStorage.removeItem(c)
            }
        } catch (f) {}
    }
}
function bysideWebcare_fid_ls_get() {
    var c = "byside_webcare_fid", a, d;
    if (typeof Storage !== "undefined") {
        try {
            a = sessionStorage.getItem(c);
            if (!a) {
                d = localStorage.getItem(c + "_exp");
                if (typeof d !== "undefined" && d && d !== "null") {
                    var b = new Date();
                    var f = Math.round(+b / 1000);
                    if (d < f) {
                        bysideWebcare_fid_ls_remove()
                    } else {
                        a = localStorage.getItem(c)
                    }
                }
            }
        } catch (g) {}
    }
    return a
}
function bysideWebcare_fid_ls_remove() {
    var a = "byside_webcare_fid";
    if (typeof Storage !== "undefined") {
        try {
            sessionStorage.removeItem(a);
            localStorage.removeItem(a);
            localStorage.removeItem(a + "_exp")
        } catch (b) {}
    }
}
function bysideWebcare_fid_retrieveFromStorage() {
    var a = bysideWebcare_fid_cookie_get();
    if (typeof a !== "undefined" && a) {
        window.bysideWebcare_fid = a;
        window.bysideWebcare_identification_type = "P"
    }
    a = bysideWebcare_fid_ls_get();
    if (typeof a !== "undefined" && a) {
        window.bysideWebcare_fid = a;
        window.bysideWebcare_identification_type = "P"
    }
}
function bysideWebcare_fid_isValidFid() {
    return typeof bysideWebcare_fid !== "undefined" && Boolean(bysideWebcare_fid) && bysideWebcare_fid !== "0"
}
function bysideWebcare_get_visitor_UUID() {
    var a = "";
    if (!bysideWebcare_fid_isValidFid()) {
        a = "C#WUT#" + byside_webcare_tuid
    } else {
        a = "F#WUT#" + bysideWebcare_fid
    }
    return a
}
function bysideWebcare_detectWindowScroll() {
    if (typeof bysideWebcare_detectWindowScroll_enabled !== "undefined" && bysideWebcare_detectWindowScroll_enabled) {
        return
    }
    bysideWebcare_detectWindowScroll_enabled = true;
    function b() {
        var c = bysideWebcare_getWindowScrollPosition();
        if (c > bysideWebcare_maxScroll) {
            bysideWebcare_maxScroll = c
        }
    }
    var a = +new Date();
    xAddEventListener(window, "scroll", function() {
        if ((+new Date() - a) < 250) {
            return
        }
        a = +new Date();
        bysideWebcare_onactivitydetected();
        bysideWebcare_onscrolldetected();
        b()
    }, false)
}
function bysideWebcare_detectMouseMovement() {
    if (typeof bysideWebcare_detectMouseMovement_enabled !== "undefined" && bysideWebcare_detectMouseMovement_enabled) {
        return
    }
    bysideWebcare_detectMouseMovement_enabled = true;
    var a = +new Date();
    xAddEventListener(document, "mousemove", function() {
        if ((+new Date() - a) < 250) {
            return
        }
        a = +new Date();
        bysideWebcare_onactivitydetected()
    }, false)
}
function bysideWebcare_clearCurrentEvents() {
    var h, g, a, f, b, c, m, d;
    if (window.ExtendedWindow && typeof window.ExtendedWindow.destroy === "function") {
        try {
            window.ExtendedWindow.destroy()
        } catch (l) {
            console.error("== [bysideWebcare_clearCurrentEvents]: error destroying ExtendedWindow ==", l)
        }
    }
    for (a in bysideWebcare_manualtriggerevents) {
        if (Object.prototype.hasOwnProperty.call(bysideWebcare_manualtriggerevents, a)) {
            f = bysideWebcare_manualtriggerevents[a];
            if (f) {
                b = f[1];
                c = document.getElementById(b);
                if (c) {
                    c.parentElement.removeChild(c)
                }
            }
        }
    }
    bysideWebcare_manualtriggerevents.length = 0;
    for (h = 0; h < bysideWebcare_scrolltriggerevents.length; h++) {
        f = bysideWebcare_scrolltriggerevents[h];
        if (f) {
            c = document.getElementById(f.popup_id);
            if (c) {
                c.parentElement.removeChild(c)
            }
        }
    }
    bysideWebcare_scrolltriggerevents.length = 0;
    for (h = 0; h < bysideWebcare_inactivitytimers.length; h++) {
        f = bysideWebcare_inactivitytimers[h];
        if (f && f[0] && f[0].popup_id) {
            c = document.getElementById(f[0].popup_id);
            if (c) {
                c.parentElement.removeChild(c)
            }
        }
        if (f && f[0] && !f[0].fired) {
            window.clearInterval(f[1]);
            window.clearInterval(f[2])
        }
    }
    bysideWebcare_inactivitytimers.length = 0;
    for (h = 0; h < bysideWebcare_abandontriggerevents.length; h++) {
        f = bysideWebcare_abandontriggerevents[h];
        if (f && f.popup_id) {
            c = document.getElementById(f.popup_id);
            if (c) {
                c.parentElement.removeChild(c)
            }
        }
        var k = f.listeners || [], e;
        for (g = 0; g < k.length; g++) {
            e = k[g];
            if (e.el && e.evt) {
                xRemoveEventListener(e.el, e.evt, e.fn, e.cap)
            }
        }
    }
    bysideWebcare_abandontriggerevents.length = 0;
    for (a in bysideWebcare_timeelapsedriggerevents) {
        if (Object.prototype.hasOwnProperty.call(bysideWebcare_timeelapsedriggerevents, a)) {
            f = bysideWebcare_timeelapsedriggerevents[a];
            if (f) {
                clearTimeout(f.timeoutId);
                c = document.getElementById(f.popupId);
                if (c) {
                    c.parentElement.removeChild(c)
                }
            }
        }
    }
    bysideWebcare_timeelapsedriggerevents.length = 0;
    bysideWebcarePopUps.length = 0;
    bysideWebcareScrollPopUps.length = 0;
    bysideWebcare_isanycampaignopen = false;
    bysideWebcare_onwindowclose_trigger_info = {};
    bysideWebcare_onwindowclosefired = false;
    bysideWebcare_onwindowclose_alreadyshown = false;
    bysideWebcare_onwindowclose_allow = true;
    bysideWebcareHideBlockingBG();
    bysideWebcareOpenBlockingBGLayers = 0;
    m = document.getElementsByClassName("bwc-prescript-fix");
    for (h = m.length - 1; h >= 0; h--) {
        d = m[h];
        if (d) {
            d.parentElement.removeChild(d)
        }
    }
    bysideWebcare_renderedevents = []
}
function bysideWebcare_settrigger_timeelapsedonpage(b, d, e, c, a) {
    var f = parseInt(d.substr(1), 10);
    bysideWebcare_timeelapsedriggerevents[f] = {
        revision: bysideWebcare_currentrevision,
        popupId: b,
        eventId: d,
        ps: e,
        timeElapsed: c,
        triggerInfo: a
    };
    bysideWebcare_timeelapsedriggerevents[f].timeoutId = window.setTimeout(function() {
        bysideWebcareShowAlert(bysideWebcare_currentrevision, b, d, e, a || {})
    }, c)
}
function bysideWebcare_setmanualtrigger_eventinfo(a, b, c) {
    var d = parseInt(b.substr(1), 10);
    bysideWebcare_manualtriggerevents[d] = new Array(4);
    bysideWebcare_manualtriggerevents[d][0] = bysideWebcare_currentrevision;
    bysideWebcare_manualtriggerevents[d][1] = a;
    bysideWebcare_manualtriggerevents[d][2] = b;
    bysideWebcare_manualtriggerevents[d][3] = c
}
function bysideWebcare_triggerevent(a) {
    if (typeof bysideWebcare_manualtriggerevents[a] === "undefined") {
        window.setTimeout(function() {
            bysideWebcare_triggerevent(a)
        }, 200)
    } else {
        bysideWebcareShowAlert(bysideWebcare_currentrevision, bysideWebcare_manualtriggerevents[a][1], bysideWebcare_manualtriggerevents[a][2], bysideWebcare_manualtriggerevents[a][3], {})
    }
}
function bysideWebcare_settrigger_inactivitytimeelapsed(b, d, f, c, a) {
    var e = bysideWebcare_inactivitytimers.length;
    (function(m, j, k, h, g, l) {
        bysideWebcare_inactivitytimers[m] = [];
        bysideWebcare_inactivitytimers[m][0] = {
            popup_id: j,
            event_id: k,
            ps: h,
            timeElapsed: g,
            trigger_info: l,
            fired: false
        };
        bysideWebcare_inactivitytimers[m][1] = window.setInterval(function() {
            bysideWebcareShowAlert(bysideWebcare_currentrevision, j, k, h, l)
        }, g);
        bysideWebcare_inactivitytimers[m][2] = window.setInterval(function() {
            bysideWebcare_oninactivitytriggerfired(m)
        }, g + 10)
    }
    )(e, b, d, f, c, a);
    bysideWebcare_detectMouseMovement()
}
function bysideWebcare_settrigger_scrolledonpage(b, d, f, c, a) {
    var e = bysideWebcare_scrolltriggerevents.length;
    bysideWebcare_scrolltriggerevents[e] = {
        triggered: false,
        popup_id: b,
        event_id: d,
        ps: f,
        scrollPx: c,
        trigger_info: a
    };
    bysideWebcare_onscrolldetected()
}
function bysideWebcare_settrigger_onwindowclose(e, d, a, b) {
    var f = bysideWebcare_abandontriggerevents.length;
    bysideWebcare_abandontriggerevents[f] = {
        triggered: false,
        popup_id: b && b.popup_id ? b.popup_id : null,
        event_id: b && b.event_id ? b.event_id : null,
        ps: b && b.ps ? b.ps : "",
        trigger_info: a,
        listeners: []
    };
    bysideWebcare_onwindowcloseps = bysideWebcare_abandontriggerevents[f].ps;
    bysideWebcare_onwindowclosetext1 = e.replace(/<br>/gi, "\n");
    bysideWebcare_onwindowclosetext2 = d.replace(/<br>/gi, "\n");
    a = a || {};
    if (typeof a.triggers !== "undefined" && Object.prototype.toString.call(a.triggers) === "[object Array]" && a.triggers.length) {
        for (var c = a.triggers.length - 1; c >= 0; c--) {
            if (a.triggers[c] === "beforeunload") {
                xAddEventListener(window, "beforeunload", bysideWebcare_onwindowclose);
                bysideWebcare_abandontriggerevents[f].listeners.push({
                    el: window,
                    evt: "beforeunload",
                    fn: bysideWebcare_onwindowclose,
                    cap: undefined
                })
            } else {
                if (a.triggers[c] === "mouseout") {
                    xAddEventListener(document, "mouseout", bysideWebcare_checkMouseOut, false);
                    bysideWebcare_abandontriggerevents[f].listeners.push({
                        el: document,
                        evt: "mouseout",
                        fn: bysideWebcare_checkMouseOut,
                        cap: false
                    })
                }
            }
        }
        delete a.triggers
    } else {
        xAddEventListener(window, "beforeunload", bysideWebcare_onwindowclose);
        bysideWebcare_abandontriggerevents[f].listeners.push({
            el: window,
            evt: "beforeunload",
            fn: bysideWebcare_onwindowclose,
            cap: undefined
        })
    }
    bysideWebcare_onwindowclose_trigger_info = a
}
function bysideWebcare_onwindowclose(a) {
    a = a || window.event;
    if (!bysideWebcare_onwindowclosefired) {
        if (!bysideWebcare_validateTriggerConditions(bysideWebcare_onwindowclose_trigger_info || {})) {
            return
        }
        if (!bysideWebcare_validateAlignmentRestriction("abandon", bysideWebcare_onwindowcloseps)) {
            return
        }
        bysideWebcare_onwindowclosefired = true;
        xRemoveEventListener(document, "mouseout", bysideWebcare_checkMouseOut);
        if (window.bysideWebcare_onwindowclose_validate) {
            window.bysideWebcare_onwindowclose_validate()
        }
        if (typeof bysideWebcare_onwindowclose_allow === "undefined" || bysideWebcare_onwindowclose_allow) {
            if (bysideWebcare_onwindowclosetext1 !== "") {
                alert(bysideWebcare_onwindowclosetext1)
            }
            if (bysideWebcare_onwindowclosetext2 !== "") {
                bysideWebcare_onwindowclose_showpopup();
                xAddEventListener(window, "focus", bysideWebcare_onwindowclose_handler);
                if (a) {
                    a.returnValue = bysideWebcare_onwindowclosetext2
                }
                return bysideWebcare_onwindowclosetext2
            }
            bysideWebcare_onwindowclose_showpopup()
        }
    }
}
function bysideWebcare_onwindowclose_handler() {
    xRemoveEventListener(window, "focus", bysideWebcare_onwindowclose_handler);
    if (typeof window.bysideWebcare_onwindowclose_alreadyshown === "undefined" || window.bysideWebcare_onwindowclose_alreadyshown === false) {
        bysideWebcare_onwindowclose_showpopup()
    }
}
function bysideWebcare_onwindowclose_showpopup() {
    window.bysideWebcare_onwindowclose_alreadyshown = true;
    if (bysideWebcare_onwindowclosedestinationtype === "S") {
        bysideWebcareOpenSurveyWindow(bysideWebcare_onwindowclosepopupid, bysideWebcare_onwindowclosedestination, bysideWebcare_onwindowclosewindowid, bysideWebcare_onwindowclosewindowmode, bysideWebcare_onwindowcloseeventid)
    } else {
        if (bysideWebcare_onwindowclosedestinationtype === "U") {
            bysideWebcareOpenURL(bysideWebcare_onwindowclosepopupid, bysideWebcare_onwindowclosedestination, bysideWebcare_onwindowclosewindowid, bysideWebcare_onwindowclosewindowmode, bysideWebcare_onwindowcloseeventid)
        } else {
            if (bysideWebcare_onwindowclosedestinationtype === "W") {
                if (bysideWebcare_onwindowclosewindowmode === "I") {
                    bysideWebcareShowAlert(bysideWebcare_currentrevision, bysideWebcare_onwindowclosepopupid, bysideWebcare_onwindowcloseeventid, bysideWebcare_onwindowclosewindowps)
                } else {
                    if (bysideWebcare_onwindowclosewindowmode === "P") {
                        var b = bysideWebcare_createQueryStringParams({
                            campaign_id: bysideWebcare_onwindowclosewindowid,
                            abandon_id: bysideWebcare_onwindowclosedestination,
                            slot_id: bysideWebcare_onwindowcloseslotid
                        }) + bysideWebcare_getCurrentQueryString()
                          , a = bysideWebcare_get_agent_baseurl() + "usert_abandon.php?" + b;
                        bysideWebcareOpenURL(bysideWebcare_onwindowclosepopupid, a, bysideWebcare_onwindowclosewindowid, "B", bysideWebcare_onwindowcloseeventid)
                    }
                }
                return
            } else {
                bysideWebcareOpenWebcareWindow(bysideWebcare_onwindowclosepopupid, bysideWebcare_onwindowclosedestination, bysideWebcare_onwindowclosewindowmode, bysideWebcare_onwindowcloseeventid)
            }
        }
    }
    sendFeedback(bysideWebcare_onwindowcloseeventid, "O")
}
var bysideWebcare_triggerConditionsValidators = window.bysideWebcare_triggerConditionsValidators || {
    scroll: function(a) {
        var b = xDocSize();
        if (a.from === "top" && typeof a.px !== "undefined") {
            if (parseInt(a.px, 10) > bysideWebcare_maxScroll) {
                return false
            }
        } else {
            if (a.from === "bottom" && typeof a.px !== "undefined" && b) {
                if (parseInt(a.px, 10) < b.h - bysideWebcare_maxScroll) {
                    return false
                }
            }
        }
        return true
    },
    elapsedtime: function(a) {
        var b = function(f, g, e) {
            f = f.toLowerCase();
            e = e || (new Date());
            var h = e - g;
            var d = {
                w: 604800000,
                d: 86400000,
                h: 3600000,
                n: 60000,
                s: 1000
            };
            return Math.floor(h / d[f])
        };
        if (a.secs) {
            var c = b("s", bysideWebcare_tagLoadedDate);
            if (c < a.secs) {
                return false
            }
        }
        return true
    }
};
function bysideWebcare_validateTriggerConditions(b) {
    var d = true, a = bysideWebcare_triggerConditionsValidators || {}, c;
    b = b || {};
    var e = b.conditions || {};
    for (c in e) {
        if (Object.prototype.hasOwnProperty.call(e, c)) {
            if (typeof a[c] === "function") {
                d = d && a[c].call(window, e[c])
            }
            if (!d) {
                return false
            }
        }
    }
    return d
}
function bysideWebcare_validateAlignmentRestriction(k, a) {
    var b = true, e = "CC000000000000000", n = (a || e).charAt(0), g = (a || e).charAt(1), l = (a || e).charAt(17), d, c, m, f, j;
    if (l === "1") {
        for (var h = bysideWebcarePopUps.length - 1; h >= 0; h--) {
            d = bysideWebcarePopUps[h][0];
            c = bysideWebcarePopUps[h][3];
            m = bysideWebcarePopUps[h][6] && bysideWebcarePopUps[h][6].align;
            f = bysideWebcarePopUps[h][6] && bysideWebcarePopUps[h][7].align;
            j = d && d.style.display !== "none";
            if (k !== c && n === m && g === f && j) {
                b = false;
                break
            }
        }
    }
    return b
}
function bysideWebcare_checkMouseOut(a) {
    a = a ? a : window.event;
    var b = a.relatedTarget || a.toElement;
    if (!b || b.nodeName === "HTML") {
        if (typeof a.clientY !== "undefined" && parseInt(a.clientY, 10) <= 0) {
            bysideWebcare_onwindowclose()
        }
    }
}
function bysideWebcare_onscrolldetected() {
    for (var b = 0; b < bysideWebcare_scrolltriggerevents.length; b++) {
        if (bysideWebcare_scrolltriggerevents[b] && bysideWebcare_scrolltriggerevents[b].triggered === false) {
            if (bysideWebcare_maxScroll >= bysideWebcare_scrolltriggerevents[b].scrollPx) {
                var a = bysideWebcareShowAlert(bysideWebcare_currentrevision, bysideWebcare_scrolltriggerevents[b].popup_id, bysideWebcare_scrolltriggerevents[b].event_id, bysideWebcare_scrolltriggerevents[b].ps, bysideWebcare_scrolltriggerevents[b].trigger_info);
                if (a) {
                    bysideWebcare_scrolltriggerevents[b].triggered = true
                }
            }
        }
    }
}
function bysideWebcare_onactivitydetected() {
    for (var a = 0; a < bysideWebcare_inactivitytimers.length; a++) {
        if (bysideWebcare_inactivitytimers[a][0] && +bysideWebcare_inactivitytimers[a][0].timeElapsed !== 0 && !bysideWebcare_inactivitytimers[a][0].fired) {
            window.clearInterval(bysideWebcare_inactivitytimers[a][1]);
            window.clearInterval(bysideWebcare_inactivitytimers[a][2]);
            (function(g, d, e, c, b, f) {
                bysideWebcare_inactivitytimers[g][1] = window.setInterval(function() {
                    bysideWebcareShowAlert(bysideWebcare_currentrevision, d, e, c, f)
                }, b);
                bysideWebcare_inactivitytimers[g][2] = window.setInterval(function() {
                    bysideWebcare_oninactivitytriggerfired(g)
                }, b + 10)
            }
            )(a, bysideWebcare_inactivitytimers[a][0].popup_id, bysideWebcare_inactivitytimers[a][0].event_id, bysideWebcare_inactivitytimers[a][0].ps, bysideWebcare_inactivitytimers[a][0].timeElapsed, bysideWebcare_inactivitytimers[a][0].trigger_info || {})
        }
    }
}
function bysideWebcare_oninactivitytriggerfired(a) {
    bysideWebcare_inactivitytimers[a][0].fired = true;
    window.clearInterval(bysideWebcare_inactivitytimers[a][1]);
    window.clearInterval(bysideWebcare_inactivitytimers[a][2])
}
function bysideWebcare_append_html_by_label(a, b) {
    var d, c;
    if (typeof bysideWebcare_widgets_by_label !== "undefined" && bysideWebcare_widgets_by_label[a]) {
        d = escape(window.bysideWebcare_widgets_by_label[a][2] || "");
        c = escape(window.bysideWebcare_widgets_by_label[a][3] || "");
        bysideWebcare_append_html(b, d, c)
    }
}
function bysideWebcare_append_html(html, base_elem, doc_obj) {
    var base_elem_obj, node;
    if (!doc_obj) {
        doc_obj = document
    } else {
        if (typeof doc_obj === "string") {
            doc_obj = eval(doc_obj)
        }
    }
    if (!base_elem) {
        base_elem_obj = doc_obj.body
    } else {
        if (typeof base_elem === "string") {
            base_elem_obj = doc_obj.getElementById(base_elem)
        } else {
            base_elem_obj = base_elem
        }
    }
    var myDiv = doc_obj.getElementById("bysideWebcare_ParseArea");
    if (!myDiv) {
        myDiv = doc_obj.createElement("div");
        myDiv.style.display = "none";
        myDiv.id = "bysideWebcare_ParseArea";
        doc_obj.body.appendChild(myDiv);
        xHide(myDiv)
    }
    if (html.replace(/^\s+|\s+$/, "").substr(1, 6).toLowerCase() === "script") {
        html = '<span id="bwc-prescript-fix" style="display:none">.</span>' + html
    }
    myDiv.innerHTML = html;
    var x, hh, el;
    do {
        x = xGetElementsByTagName("script", myDiv);
        if (x.length > 0) {
            var ss = doc_obj.createElement("script");
            if (typeof bysideWebcare_cspid !== "undefined" && bysideWebcare_cspid) {
                ss.setAttribute("nonce", bysideWebcare_cspid)
            }
            ss.text = x[0].text;
            if (x[0].src) {
                ss.src = x[0].src
            }
            x[0].parentNode.removeChild(x[0]);
            hh = xGetElementsByTagName("head", doc_obj)[0];
            hh.appendChild(ss)
        }
    } while (x.length > 0);
    while (myDiv.childNodes.length > 0 && base_elem_obj) {
        node = myDiv.childNodes[0];
        if ((node.tagName === "STYLE" || node.tagName === "IFRAME") && typeof bysideWebcare_cspid !== "undefined" && bysideWebcare_cspid) {
            node.setAttribute("nonce", bysideWebcare_cspid)
        }
        base_elem_obj.appendChild(node)
    }
    myDiv.innerHTML = "";
    var psFix = document.getElementById("bwc-prescript-fix");
    if (psFix) {
        psFix.parentElement.removeChild(psFix)
    }
    var preScriptFixes = document.getElementsByClassName("bwc-prescript-fix");
    for (var i = preScriptFixes.length - 1; i >= 0; i--) {
        el = preScriptFixes[i];
        if (el) {
            el.parentElement.removeChild(el)
        }
    }
}
function bysideWebcareShowAlert(s, a, e, m, h) {
    var v = xGetElementById(a), u = m.charAt(0), n = m.charAt(1), o = m.charAt(2), g = m.charAt(3), b = m.substring(4, 8) * 1, r = m.substring(8, 12) * 1, d = m.charAt(12), f = m.charAt(13), c = m.charAt(14), l = m.charAt(15), j = m.charAt(16), t;
    if (!bysideWebcare_validateTriggerConditions(h || {})) {
        return false
    }
    if (!bysideWebcare_validateAlignmentRestriction(a, m)) {
        return false
    }
    if ((g === "X" || +j === 1 || !bysideWebcare_isanycampaignopen) && !bysideWebcare_iscontactwindowopen && (bysideWebcare_currentrevision === "" || s === bysideWebcare_currentrevision) && v) {
        if (g !== "X") {
            bysideWebcare_isanycampaignopen = true
        }
        if (window.webcareSetIFrameVisibility) {
            window.webcareSetIFrameVisibility(false)
        }
        v.style.display = "block";
        var k = bysideWebcarePopUps.length;
        for (var q = bysideWebcarePopUps.length - 1; q >= 0; q--) {
            if (a === bysideWebcarePopUps[q][3]) {
                k = q;
                break
            }
        }
        bysideWebcarePopUps[k] = new Array(6);
        bysideWebcarePopUps[k][0] = v;
        bysideWebcarePopUps[k][3] = a;
        bysideWebcarePopUps[k][4] = g !== "X";
        bysideWebcarePopUps[k][5] = +l === 1;
        bysideWebcarePopUps[k][6] = {
            align: u,
            offset: b
        };
        bysideWebcarePopUps[k][7] = {
            align: n,
            offset: r
        };
        if (u === "L") {
            bysideWebcarePopUps[k][1] = 0 + b
        } else {
            if (u === "R") {
                bysideWebcarePopUps[k][1] = xClientWidth() - xWidth(v) + b
            } else {
                bysideWebcarePopUps[k][1] = Math.round((xClientWidth() - xWidth(v)) / 2) + b
            }
        }
        if (n === "T") {
            bysideWebcarePopUps[k][2] = 0 + r
        } else {
            if (n === "B") {
                bysideWebcarePopUps[k][2] = xClientHeight() - xHeight(v) + r
            } else {
                bysideWebcarePopUps[k][2] = Math.round((xClientHeight() - xHeight(v)) / 2) + r
            }
        }
        if (+d !== 1) {
            if (+f === 1) {
                xAddEventListener(window, "scroll", bysideWebcareWinOnScroll, false);
                xAddEventListener(window, "resize", bysideWebcareWinOnResize, false);
                bysideWebcareScrollPopUps.push([bysideWebcarePopUps[k][0], bysideWebcarePopUps[k][1], bysideWebcarePopUps[k][2], bysideWebcarePopUps[k][6], bysideWebcarePopUps[k][7]])
            }
            if (o === "T") {
                xMoveTo(v, bysideWebcarePopUps[k][1], -xHeight(v))
            } else {
                if (o === "B") {
                    xMoveTo(v, bysideWebcarePopUps[k][1], xClientHeight() + xHeight(v))
                } else {
                    if (o === "L") {
                        xMoveTo(v, -xWidth(v), bysideWebcarePopUps[k][2])
                    } else {
                        if (o === "R") {
                            xMoveTo(v, xClientWidth() + xWidth(v), bysideWebcarePopUps[k][2])
                        } else {
                            xMoveTo(v, bysideWebcarePopUps[k][1], bysideWebcarePopUps[k][2])
                        }
                    }
                }
            }
            if (+c === 1 && navigator.userAgent.toLowerCase().indexOf("chrome") === -1) {
                xEnableDrag(v, bysideWebcarePopUpOnDragStart, bysideWebcarePopUpOnDrag, null)
            }
            if (+l === 1) {
                t = xGetElementById("iwc_pane");
                if (t && parseInt(v.style.zIndex, 10) <= parseInt(t.style.zIndex, 10)) {
                    t.style.zIndex = parseInt(v.style.zIndex, 10) - 1
                }
                bysideWebcareShowBlockingBG()
            }
            xShow(v);
            bysideWebcareSlideToInitialPosition([bysideWebcarePopUps[k][0], bysideWebcarePopUps[k][1], bysideWebcarePopUps[k][2]])
        } else {
            if (+l === 1) {
                t = xGetElementById("iwc_pane");
                if (t && parseInt(v.style.zIndex, 10) <= parseInt(t.style.zIndex, 10)) {
                    t.style.zIndex = parseInt(v.style.zIndex, 10) - 1
                }
                bysideWebcareShowBlockingBG()
            }
            xMoveTo(v, bysideWebcarePopUps[k][1], bysideWebcarePopUps[k][2]);
            xShow(v)
        }
        bysideWebcare_addPopupEventHandlers(a);
        if (typeof window["bysideWebcare_fired_" + a] === "function") {
            window["bysideWebcare_fired_" + a]()
        } else {
            sendFeedback(e, g)
        }
        return true
    }
    return false
}
function bysideWebcareCloseAlert(a) {
    var b = xGetElementById(a), c;
    if (b) {
        b.style.display = "none"
    }
    for (c = 0; c < bysideWebcarePopUps.length; c++) {
        if (bysideWebcarePopUps[c][3] === a && bysideWebcarePopUps[c][5]) {
            bysideWebcareHideBlockingBG()
        }
    }
    if (window.webcareSetIFrameVisibility) {
        window.webcareSetIFrameVisibility(true)
    }
    for (c = 0; c < bysideWebcarePopUps.length; c++) {
        if (bysideWebcarePopUps[c][3] === a && bysideWebcarePopUps[c][4]) {
            bysideWebcare_isanycampaignopen = false
        }
    }
}
function bysideWebcare_addPopupEventHandlers(a) {
    var c = xGetElementById(a + "-action-cancel");
    var b = function b(d) {
        if (d && typeof d.preventDefault === "function") {
            d.preventDefault()
        }
        xRemoveEventListener(c, "click", b);
        bysideWebcare_onwindowclose_allow = false;
        if (typeof window["bwc_" + a + "_cancel"] === "function") {
            window["bwc_" + a + "_cancel"]()
        }
    };
    if (c) {
        if (c.removeAttribute) {
            c.removeAttribute("onclick")
        }
        xAddEventListener(c, "click", b)
    }
}
function bysideWebcareOpenWebcareWindow(j, k, e, g, a, d, c) {
    var h = false;
    var f = bysideWebcare_createQueryStringParams({
        wid: k
    }) + bysideWebcare_getCurrentQueryString();
    var b = "width=400,height=365,menubar=no,directories=no,location=no,toolbar=no,status=no,resizable=yes,scrollbars=no";
    if (e === "P") {
        window.open(bysideWebcare_get_agent_baseurl() + "index.php?" + f, "webcare", b)
    } else {
        if (typeof iwcShow === "function") {
            h = true;
            iwcShow(g, bysideWebcare_get_agent_baseurl() + "index.php?" + f)
        } else {
            window.open(bysideWebcare_get_agent_baseurl() + "index.php?" + f, "webcare", b)
        }
    }
    bysideWebcareCloseAlert(j);
    sendFeedback(g, "O", a, d, c);
    if (h && window.webcareSetIFrameVisibility) {
        window.webcareSetIFrameVisibility(false)
    }
}
function bysideWebcareCloseWebcareAlert(c, d, b, a, e) {
    bysideWebcareCloseAlert(c);
    sendFeedback(d, "C", b, a, e)
}
function bysideWebcareOpenSurveyWindow(h, b, j, e, g, a, d, c) {
    var f = bysideWebcare_createQueryStringParams({
        window_id: j,
        survey_id: b
    }) + bysideWebcare_getCurrentQueryString();
    if (e === "P") {
        window.open(bysideWebcare_get_agent_baseurl() + "survey.php?" + f, "webcare", "width=400,height=365")
    } else {
        if (typeof iwcShow === "function") {
            iwcShow(g, bysideWebcare_get_agent_baseurl() + "survey.php?" + f)
        } else {
            window.open(bysideWebcare_get_agent_baseurl() + "survey.php?" + f, "webcare", "width=400,height=365")
        }
    }
    bysideWebcareCloseAlert(h);
    sendFeedback(g, "O", a, d, c)
}
function bysideWebcareCloseSurveyAlert(c, d, b, a, e) {
    bysideWebcareCloseAlert(c);
    sendFeedback(d, "C", b, a, e)
}
function bysideWebcareOpenURL(e, d, g, a, f, c, b, h) {
    if (a === "P") {
        window.open(d, "_blank", "")
    } else {
        if (a === "B") {
            window.open(d, "webcare", "width=400,height=365,menubar=no,directories=no,location=no,toolbar=no,status=no,resizable=yes,scrollbars=no")
        } else {
            window.open(d, "_self", "")
        }
    }
    bysideWebcareCloseAlert(e);
    sendFeedback(f, "O", c, b, h)
}
function bysideWebcareOpenExtURL(h, k, j, e, g, b, d, c) {
    var f = bysideWebcare_createQueryStringParams({
        wid: encodeURIComponent(k),
        action1: encodeURIComponent(c || ""),
        rndc: (new Date().getTime())
    }) + bysideWebcare_getCurrentQueryString();
    var a = bysideWebcare_get_agent_baseurl() + "extlink.php?" + f;
    switch (e) {
    case "P":
        window.open(a, "_blank", "");
        break;
    case "B":
        window.open(a, "webcare", "width=400,height=365,menubar=no,directories=no,location=no,toolbar=no,status=no,resizable=yes,scrollbars=no");
        break;
    case "T":
        window.open(a, "_top", "");
        break;
    default:
        window.open(a, "_self", "");
        break
    }
    bysideWebcareCloseAlert(h)
}
function bysideWebcareCloseURLAlert(c, d, b, a, e) {
    bysideWebcareCloseAlert(c);
    sendFeedback(d, "C", b, a, e)
}
function bysideWebcareShowBlockingBG() {
    bysideWebcareOpenBlockingBGLayers++;
    if (bysideWebcareOpenBlockingBGLayers === 1) {
        var a = xGetElementById("iwc_pane");
        if (a) {
            var b = xDocSize();
            xMoveTo(a, 0, 0);
            xResizeTo(a, b.w, b.h);
            xShow(a)
        }
    }
}
function bysideWebcareHideBlockingBG() {
    bysideWebcareOpenBlockingBGLayers--;
    if (bysideWebcareOpenBlockingBGLayers === 0) {
        var a = xGetElementById("iwc_pane");
        if (a) {
            xHide(a)
        }
    }
}
function bysideWebcareShowInlineCampaign(b, a) {
    try {
        var d = new Function("var $=jQuery=arguments[0];" + a);
        d.call(this, window.bysideWebcare_$ || window.jQuery || null)
    } catch (c) {}
}
function bysideWebcarePopUpOnDragStart(a) {
    xZIndex(a, bysideWebcareHighZ++);
    a.totalMX = 0;
    a.totalMY = 0
}
function bysideWebcarePopUpOnDrag(c, b, a) {
    xMoveTo(c, xLeft(c) + b, xTop(c) + a);
    c.totalMX += b;
    c.totalMY += a;
    for (var d = 0; d < bysideWebcarePopUps.length; d++) {
        if (bysideWebcarePopUps[d][0] === c) {
            bysideWebcarePopUps[d][1] = xLeft(c) - xScrollLeft();
            bysideWebcarePopUps[d][2] = xTop(c) - xScrollTop()
        }
    }
}
function bysideWebcareSlideToInitialPosition(a) {
    if (a && a.length >= 3) {
        xSlideTo(a[0], xScrollLeft() + a[1], xScrollTop() + a[2], bysideWebcareSlideTime)
    }
}
function bysideWebcareWinOnScroll() {
    for (var b = 0, a = bysideWebcareScrollPopUps.length; b < a; b++) {
        xSlideTo(bysideWebcareScrollPopUps[b][0], xScrollLeft() + bysideWebcareScrollPopUps[b][1], xScrollTop() + bysideWebcareScrollPopUps[b][2], bysideWebcareSlideTime)
    }
}
function bysideWebcareWinOnResize() {
    for (var e = 0, d = bysideWebcareScrollPopUps.length; e < d; e++) {
        var a = bysideWebcareScrollPopUps[e], c, b;
        c = a[3].offset;
        switch (a[3].align) {
        case "L":
            a[1] = 0 + c;
            break;
        case "R":
            a[1] = xClientWidth() - xWidth(a[0]) + c;
            break;
        default:
            a[1] = Math.round((xClientWidth() - xWidth(a[0])) / 2) + c;
            break
        }
        b = a[4].offset;
        switch (a[4].align) {
        case "T":
            a[2] = 0 + b;
            break;
        case "B":
            a[2] = xClientHeight() - xHeight(a[0]) + b;
            break;
        default:
            a[2] = Math.round((xClientHeight() - xHeight(a[0])) / 2) + b;
            break
        }
        xSlideTo(a[0], xScrollLeft() + a[1], xScrollTop() + a[2], bysideWebcareSlideTime)
    }
}
function sendFeedback(e, b, d, c, f) {
    if (!!d && !!c) {
        sendWidgetFeedback(d, c, b, f)
    } else {
        var a = bysideWebcare_createQueryStringParams({
            event_id: e,
            feedback_type: b
        });
        bysideWebcare_make_request(bysideWebcare_get_agent_baseurl() + "usert_feedback.php?" + a)
    }
}
function sendWidgetFeedback(d, c, b, e) {
    var a = bysideWebcare_createQueryStringParams({
        event_id: "W" + d,
        slot_id: c,
        feedback_type: b,
        action1: (typeof e === "undefined" || e === null ? "" : encodeURIComponent(e))
    });
    bysideWebcare_make_request(bysideWebcare_get_agent_baseurl() + "usert_feedback.php?" + a)
}
function sendInlineCampaignFeedback(d, c, b, e) {
    var a = bysideWebcare_createQueryStringParams({
        event_id: "N" + d,
        slot_id: (c || ""),
        feedback_type: b,
        action1: (typeof e === "undefined" || e === null ? "" : encodeURIComponent(e))
    });
    bysideWebcare_make_request(bysideWebcare_get_agent_baseurl() + "usert_feedback.php?" + a)
}
function sendActiveCampaignFeedback(e, c, b, d) {
    var a = bysideWebcare_createQueryStringParams({
        event_id: "A" + e,
        slot_id: c,
        feedback_type: b,
        action1: (typeof d === "undefined" || d === null ? "" : encodeURIComponent(d))
    });
    bysideWebcare_make_request(bysideWebcare_get_agent_baseurl() + "usert_feedback.php?" + a)
}
function sendAbandonCampaignFeedback(d, c, b, e) {
    var a = bysideWebcare_createQueryStringParams({
        event_id: "B" + d,
        slot_id: c,
        feedback_type: b,
        action1: (typeof e === "undefined" || e === null ? "" : encodeURIComponent(e))
    });
    bysideWebcare_make_request(bysideWebcare_get_agent_baseurl() + "usert_feedback.php?" + a)
}
function sendLandingFeedback(e, c, b, d) {
    var a = bysideWebcare_createQueryStringParams({
        event_id: "L" + e,
        slot_id: c,
        feedback_type: b,
        action1: (typeof d === "undefined" || d === null ? "" : encodeURIComponent(d))
    });
    bysideWebcare_make_request(bysideWebcare_get_agent_baseurl() + "usert_feedback.php?" + a)
}
function sendCMECFeedback(e, b, d, c) {
    var a = bysideWebcare_createQueryStringParams({
        event_id: "C" + e,
        slot_id: b,
        feedback_type: d,
        action1: c && bysideWebcare_isObject(c) ? encodeURIComponent(JSON.stringify(c)) : ""
    }, true);
    bysideWebcare_make_request(bysideWebcare_get_agent_baseurl() + "usert_feedback.php?" + a)
}
function bysideWebcare_event(c, b) {
    var a = bysideWebcare_createQueryStringParams({
        event_id: c,
        fields: encodeURIComponent(array2json(b))
    });
    bysideWebcare_make_post_request(bysideWebcare_get_agent_baseurl() + "usert_signal.php", a)
}
function bysideWebcareLoadCampaigns() {
    bysideWebcare_currentrevision = bysideWebcare_generateTUID(10);
    var b = bysideWebcare_mergeObjects(bysideWebcare_getPageQueryStringParams(), {
        partial: "initial",
        rev: bysideWebcare_currentrevision
    });
    var a = bysideWebcare_createQueryStringParams(b) + bysideWebcare_getCurrentQueryString();
    bysideWebcare_dhtml_load_script(bysideWebcare_get_agent_baseurl() + "usert_agent.php?" + a)
}
function bysideWebcareWaitForCMECElements(b) {
    var a = document.querySelectorAll("[data-cm-experience-links]");
    if (new Date().getTime() - b >= bysideWebcare_maxWaitTimeForCMECElementsMS) {
        return
    }
    if (a && a.length > 0) {
        bysideWebcareLoadCMECElements()
    } else {
        window.setTimeout(function() {
            bysideWebcareWaitForCMECElements(b)
        }, 100)
    }
}
function bysideWebcareLoadCMECElements() {
    var a = document.querySelectorAll("[data-cm-experience-links]");
    if (a && a.length === 0) {
        bysideWebcareWaitForCMECElements(new Date().getTime())
    }
    if (a && a.length && typeof cm_p13n !== "undefined" && typeof Promise === "function") {
        Promise.all([bysideWebcareGetVisitorSegmentation(), bysideWebcareGetVisitorABVariants()]).then(function() {
            bysideWebcareVisitorP13n.forEach(function(c) {
                var b = "cmec:///p13n/segment/" + c.id + ";cmecType=" + c.type;
                cm_p13n.pushSegment(b)
            });
            bysideWebcareVisitorP13nABvariants.forEach(function(b) {
                cm_p13n.pushVariant("cmec:///p13n/variant/" + b.campaign_id)
            });
            cm_p13n.completed("cmec")
        })
    }
}
function bysideWebcareWaitForCMCCContentLoaded() {
    if (!bysideWebcare_site_id) {
        return Promise.resolve()
    }
    function a() {
        return (!!bysideWebcare_content_uuid && bysideWebcare_content_uuid !== window.bysideWebcare_content_uuid_diff) || (!!bysideWebcare_content_unavailable && bysideWebcare_content_unavailable !== window.bysideWebcare_content_unavailable_diff)
    }
    return new Promise(function(e) {
        function b() {
            window.bysideWebcare_content_uuid_diff = bysideWebcare_content_uuid;
            window.bysideWebcare_content_unavailable_diff = bysideWebcare_content_unavailable;
            e()
        }
        var d = new Date().getTime(), c;
        if (a()) {
            b()
        } else {
            c = setInterval(function() {
                if (a() || new Date().getTime() - d > bysideWebcare_maxWaitTimeForCMCCElementsMS) {
                    clearInterval(c);
                    b()
                }
            }, 100)
        }
    }
    )
}
function bysideWebcareTrackPageContentElement() {
    if (!window.bysideWebcare_content_uuid) {
        return
    }
    var a = {
        uuid: bysideWebcare_content_uuid,
        name: "",
        url: window.location.href,
        title: document.title,
        referrer: document.referrer,
        keywords: document.head.querySelector('meta[name="keywords"]') ? document.head.querySelector('meta[name="keywords"]').content : "",
        description: document.head.querySelector('meta[name="description"]') ? document.head.querySelector('meta[name="description"]').content : "",
        type: "page",
        content: {
            type: bysideWebcare_content_type || "",
            title: document.title,
            name: "",
            uuid: bysideWebcare_content_uuid,
            url: window.location.href,
            locale: bysideWebcare_content_locale || ""
        },
        site_id: bysideWebcare_site_id || "",
        preview: bysideWebcare_preview ? 1 : 0
    };
    sendCMECFeedback(bysideWebcare_content_uuid, null, "S", a)
}
function bysideWebcareGetVisitorSegmentation() {
    return new Promise(function(c) {
        var a = bysideWebcare_createQueryStringParams({});
        try {
            bysideWebcare_make_post_request(bysideWebcare_get_agent_baseurl() + "visitor/segmentation.php", a, function(f) {
                var d = {
                    result: false,
                    data: null,
                    errors: []
                };
                try {
                    d = JSON.parse(f.responseText);
                    bysideWebcareVisitorP13n = d.segments.concat(d.profiles).map(function(g) {
                        return {
                            type: g.segment_name ? "segment" : "profile",
                            name: g.segment_name || g.profile_name,
                            id: g.segment_id || String(g.profile_id)
                        }
                    }).sort(function(h, g) {
                        return h.name.localeCompare(g.name)
                    })
                } catch (e) {
                    bysideWebcareVisitorP13n = []
                }
                c(bysideWebcareVisitorP13n)
            })
        } catch (b) {
            c([])
        }
    }
    )
}
function bysideWebcareGetVisitorABVariants() {
    return new Promise(function(c) {
        var a = bysideWebcare_createQueryStringParams({});
        try {
            bysideWebcare_make_post_request(bysideWebcare_get_agent_baseurl() + "visitor/ab.php", a, function(f) {
                var d = {
                    result: false,
                    data: null,
                    errors: []
                };
                try {
                    d = JSON.parse(f.responseText);
                    bysideWebcareVisitorP13nABvariants = Array.isArray(d) ? d : Object.values(d || {}).map(function(g) {
                        return g
                    })
                } catch (e) {
                    bysideWebcareVisitorP13nABvariants = []
                }
                c(bysideWebcareVisitorP13nABvariants)
            })
        } catch (b) {
            c([])
        }
    }
    )
}
function bysideWebcare_reloadAgentContent(e) {
    bysideWebcare_currentrevision = bysideWebcare_generateTUID(10);
    var b = {
        campaigns: true,
        tags: true,
        params: {}
    };
    var d = bysideWebcare_mergeObjects(b, bysideWebcare_isObject(e) ? e || {} : {});
    var c = bysideWebcare_mergeObjects(bysideWebcare_getPageQueryStringParams(), bysideWebcare_isObject(d.params) ? d.params || {} : {}, {
        rev: bysideWebcare_currentrevision,
        clo: {
            cmp: d.campaigns ? 1 : 0,
            tgs: d.tags ? 1 : 0
        }
    });
    var a = bysideWebcare_createQueryStringParams(c) + bysideWebcare_getCurrentQueryString();
    if (bysideWebcare_use_websockets) {
        bysideWebcareReconnectSocket()
    }
    bysideWebcare_dhtml_load_script(bysideWebcare_get_agent_baseurl() + "usert_agent.php?" + a)
}
function bysideWebcareTrackSubPage(d, c, f) {
    if (!d || typeof d !== "string") {
        d = bysideWebcare_getcurrentpage()
    }
    if (d === bysideWebcare_currentPageUrl || !bysideWebcare_webcare_id) {
        return
    }
    bysideWebcare_processPageUnload();
    bysideWebcare_currentPageUrl = d;
    byside_webcare_puid = bysideWebcare_generateTUID();
    bysideWebcare_pageStartTime = new Date().getTime();
    var a = typeof c === "boolean" ? c : false;
    var g = {
        partial: "0," + (!a ? bysideWebcare_renderedevents.join(",") : ""),
        page: encodeURIComponent(d)
    };
    var e = bysideWebcare_mergeObjects({
        params: g
    }, bysideWebcare_isObject(f) ? f || {} : {});
    if (a) {
        try {
            bysideWebcare_clearCurrentEvents()
        } catch (b) {
            console.error("== [bysideWebcareTrackSubPage]: Error clearing current events ==", b)
        }
    }
    if (!window.bysideWebcare_isInStudioIframe) {
        bysideWebcareWaitForCMCCContentLoaded().then(function() {
            bysideWebcare_reloadAgentContent(e);
            bysideWebcareTrackPageContentElement();
            bysideWebcareLoadCMECElements()
        })
    }
}
function bysideWebcareLoadWidgets() {
    for (var a = 1; a < bysideWebcare_widget_counter; a++) {
        if (bysideWebcare_widgets[a] && bysideWebcare_widgets[a][7] === false) {
            bysideWebcareLoadWidgetByIndex(a)
        }
    }
}
function bysideWebcareLoadNowWidgetByIndex(a) {
    if (bysideWebcare_loadnow_ready) {
        bysideWebcareLoadWidgetByIndex(a)
    } else {
        setTimeout(function() {
            bysideWebcareLoadNowWidgetByIndex(a)
        }, 10)
    }
}
function bysideWebcareLoadWidgetByIndex(f) {
    var d;
    var e = bysideWebcare_getCurrentQueryString();
    if (bysideWebcare_widgets[f][1]) {
        e = "&" + bysideWebcare_widgets[f][1]
    }
    var b = "";
    if (bysideWebcare_widgets[f][2]) {
        b += "&dest_div=" + bysideWebcare_widgets[f][2]
    }
    if (bysideWebcare_widgets[f][3]) {
        b += "&base_doc=" + encodeURIComponent(bysideWebcare_widgets[f][3])
    }
    if (bysideWebcare_widgets[f][4]) {
        b += "&dest_doc=" + encodeURIComponent(bysideWebcare_widgets[f][4])
    }
    if (bysideWebcare_widgets[f][5]) {
        b += "&impr_js=" + encodeURIComponent(bysideWebcare_widgets[f][5])
    }
    window["bysideWebcare_showBackupContentForWidget_" + f] = undefined;
    d = bysideWebcareGenerateWidgetBackupContentTimeout(f);
    if (!byside_webcare_bwatfb || byside_webcare_bwasc) {
        var a = bysideWebcare_createQueryStringParams({
            won: f,
            label: encodeURIComponent(bysideWebcare_widgets[f][0])
        }) + b + e;
        bysideWebcare_dhtml_load_script(bysideWebcare_get_agent_baseurl() + "widget.php?" + a, d, window["bysideWebcare_showBackupContentForWidget_" + f])
    }
    bysideWebcare_elements_to_load--
}
function bysideWebcareGenerateWidgetBackupContentTimeout(c) {
    var backup_content_obj = bysideWebcare_widgets[c][6] || {};
    var timeout_in_secs = backup_content_obj ? parseInt(backup_content_obj.backup_timeout, 10) : null;
    var backup_origin = backup_content_obj ? backup_content_obj.backup_origin : "cloud";
    var backup_content = backup_content_obj ? backup_content_obj.backup_content : "";
    if (timeout_in_secs >= 1) {
        var dest_div = window.bysideWebcare_widgets[c][2] ? escape(bysideWebcare_widgets[c][2]) : "bysideWebcare_widget_" + c;
        var base_doc = window.bysideWebcare_widgets[c][3] ? escape(bysideWebcare_widgets[c][3]) : "";
        (function(docObj, destDiv, backupOrigin, backupContent) {
            window["bysideWebcare_showBackupContentForWidget_" + c] = function() {
                var baseElemObj, label = bysideWebcare_widgets[c][0];
                if (typeof docObj === "undefined" || !docObj) {
                    docObj = document
                } else {
                    if (typeof docObj === "string") {
                        docObj = eval(docObj)
                    }
                }
                if (docObj) {
                    baseElemObj = docObj.getElementById(destDiv);
                    if (baseElemObj) {
                        baseElemObj.id = destDiv + "_defaulted"
                    } else {
                        return
                    }
                    bysideWebcare_widgets[c][2] = destDiv + "_defaulted";
                    bysideWebcare_widgets_by_label[label][2] = bysideWebcare_widgets[c][2];
                    if (backupOrigin === "cloud") {
                        var s3Url = bysideWebcare_s3_baseurl + "cbk/" + bysideWebcare_webcare_id + "/" + label + "/" + bysideWebcare_lang + "/index.js";
                        bysideWebcare_dhtml_load_script(s3Url)
                    } else {
                        if (backupOrigin === "html" && backupContent) {
                            bysideWebcare_append_html(backupContent, destDiv + "_defaulted", docObj)
                        }
                    }
                }
            }
        }
        )(base_doc, dest_div, backup_origin, backup_content)
    } else {
        timeout_in_secs = undefined
    }
    return timeout_in_secs
}
function bysideWebcare_widgetslot(b, g, f, a, d, c, e) {
    bysideWebcare_placeholder(b, g, f, a, d, c, e)
}
function bysideWebcare_placeholder_loadnow(b, g, f, a, d, c, e) {
    bysideWebcare_placeholder(b, g, f, a, d, c, e, true)
}
function bysideWebcare_placeholder(k, d, e, h, a, g, f, b) {
    bysideWebcare_elements_to_load++;
    var j = bysideWebcare_widget_counter++;
    if (typeof e === "undefined" || !e) {
        e = "bysideWebcare_widget_" + j;
        if (!bysideWebcare_isPageLoaded()) {
            document.write('<div id="' + e + '"></div>')
        } else {
            return
        }
    }
    bysideWebcare_widgets[j] = new Array(6);
    bysideWebcare_widgets[j][0] = k;
    bysideWebcare_widgets[j][1] = d;
    bysideWebcare_widgets[j][2] = e;
    bysideWebcare_widgets[j][3] = h;
    bysideWebcare_widgets[j][4] = a;
    bysideWebcare_widgets[j][5] = g;
    if (!bysideWebcare_default_timeout && !f) {
        bysideWebcare_widgets[j][6] = {
            backup_timeout: -1,
            backup_origin: "",
            backup_content: ""
        }
    } else {
        if (bysideWebcare_default_timeout && !f) {
            bysideWebcare_widgets[j][6] = {
                backup_timeout: bysideWebcare_default_timeout,
                backup_origin: "cloud",
                backup_content: ""
            }
        } else {
            if (typeof f === "string") {
                bysideWebcare_widgets[j][6] = {
                    backup_timeout: bysideWebcare_default_timeout,
                    backup_origin: "html",
                    backup_content: f
                }
            } else {
                if (typeof f === "object") {
                    bysideWebcare_widgets[j][6] = {
                        backup_timeout: f.backup_timeout || bysideWebcare_default_timeout,
                        backup_content: f.backup_content || ""
                    };
                    bysideWebcare_widgets[j][6].backup_origin = f.backup_origin ? f.backup_origin : (bysideWebcare_widgets[j][6].backup_content ? "html" : "cloud")
                }
            }
        }
    }
    bysideWebcare_widgets[j][7] = b || false;
    if (k) {
        bysideWebcare_widgets_by_label[k] = bysideWebcare_widgets[j]
    }
    if (bysideWebcare_widgets[j][7]) {
        bysideWebcareLoadNowWidgetByIndex(j)
    }
}
function bysideWebcareLoadLanding() {
    if (bysideWebcare_landing_id) {
        var a = bysideWebcare_createQueryStringParams({
            inline: 1,
            site_id: encodeURIComponent(bysideWebcare_webcare_id),
            page_id: encodeURIComponent(bysideWebcare_landing_id)
        }) + bysideWebcare_getCurrentQueryString();
        bysideWebcare_dhtml_load_script(bysideWebcare_get_agent_baseurl() + "landing_page.php?" + a)
    }
}
function bysideWebcare_landing(a) {
    bysideWebcare_landing_id = a;
    if (bysideWebcare_isPageLoaded()) {
        return
    }
    document.write("<div id='bysideWebcare_landing_" + bysideWebcare_landing_id + "'></div>")
}
function bysideWebcareLoadBanners() {
    var d = bysideWebcare_banner_last_loaded;
    bysideWebcare_banner_last_loaded = bysideWebcare_banner_counter;
    for (var e = d; e < bysideWebcare_banner_counter; e++) {
        var b = bysideWebcare_getCurrentQueryString();
        if (bysideWebcare_banners[e][3]) {
            b = "&" + bysideWebcare_banners[e][3]
        }
        if (bysideWebcare_banners[e][4]) {
            b = "&custom_div=" + bysideWebcare_banners[e][4]
        }
        var a = bysideWebcare_createQueryStringParams({
            bon: e,
            wid: encodeURIComponent(bysideWebcare_banners[e][0]),
            custom_trigger_function: bysideWebcare_banners[e][1] ? encodeURIComponent(bysideWebcare_banners[e][1]) : null,
            custom_obj: bysideWebcare_banners[e][2] ? encodeURIComponent(bysideWebcare_banners[e][2]) : null
        }) + b;
        if (bysideWebcare_banners[e][5]) {
            bysideWebcare_dhtml_load_script(bysideWebcare_get_agent_baseurl() + "button.php?" + a, 7, "bysideWebcare_bannertimeout(" + e + ")")
        } else {
            bysideWebcare_dhtml_load_script(bysideWebcare_get_agent_baseurl() + "button.php?" + a)
        }
        bysideWebcare_elements_to_load--
    }
}
function bysideWebcare_banner(g, f, b, h, e, a) {
    bysideWebcare_elements_to_load++;
    var j = bysideWebcare_banner_counter++;
    if (!e) {
        var d = "bysideWebcare_banner_" + j;
        if (bysideWebcare_isPageLoaded()) {
            return
        }
        document.write('<div id="' + d + '"></div>')
    }
    bysideWebcare_banners[j] = new Array(6);
    bysideWebcare_banners[j][0] = g;
    bysideWebcare_banners[j][1] = f;
    bysideWebcare_banners[j][2] = b;
    bysideWebcare_banners[j][3] = h;
    bysideWebcare_banners[j][4] = e;
    bysideWebcare_banners[j][5] = a
}
function bysideWebcare_bannertimeout(a) {
    bysideWebcare_append_html(bysideWebcare_banners[a][5], "bysideWebcare_banner_" + a)
}
function bysideWebcare_onload() {
    if ((!bysideWebcare_fid && !byside_webcare_tuid && !byside_webcare_suid) || !bysideWebcare_loadnow_ready) {
        byside_webcare_tuid_ttl++;
        if (byside_webcare_tuid_ttl < 300) {
            setTimeout(function() {
                bysideWebcare_onload()
            }, 50);
            return
        }
    }
    iwcLoadPanes();
    if ((typeof bysideWebcare_just_funcs === "undefined" || !bysideWebcare_just_funcs) && !window.bysideWebcare_isInStudioIframe && bysideWebcare_webcare_id) {
        bysideWebcareLoadBanners();
        bysideWebcareLoadWidgets();
        if (!window.bysideWebcare_isInStudioIframe && bysideWebcare_webcare_id) {
            bysideWebcareTrackPageContentElement()
        }
        if (!window.bysideWebcare_preview) {
            bysideWebcareLoadCMECElements()
        }
        bysideWebcareLoadLanding();
        if (!byside_webcare_bwatfb || byside_webcare_bwasc) {
            bysideWebcareLoadCampaigns()
        }
        if (bysideWebcare_visitor_segments_ls_key) {
            bysideWebcareCopyVisitorSegmentsFromLS(bysideWebcare_visitor_segments_ls_key)
        }
    }
}
function iwcShow(c, b) {
    if (window.webcareSetIFrameVisibility) {
        window.webcareSetIFrameVisibility(false)
    }
    bysideWebcare_iscontactwindowopen = true;
    bysideWebcareShowBlockingBG();
    var a = xGetElementById("iwc");
    a.src = b + "&iwcid=" + c;
    window.setTimeout(function() {
        iwcShow2(c)
    }, 800)
}
function iwcShow2(g) {
    var d = xGetElementById("iwc");
    var b = xGetElementById("iwc_closebtn_" + g);
    var a = "iwc_skin_height_" + g;
    var c = false;
    if (typeof window["iwc_skin_fixed_height_" + g] !== "undefined" && window["iwc_skin_fixed_height_" + g]) {
        c = true
    }
    if (!c) {
        xResizeTo(d, window["iwc_skin_width_" + g], Math.max(xClientHeight(), window[a]))
    } else {
        xResizeTo(d, window["iwc_skin_width_" + g], window[a])
    }
    var f = Math.max(Math.round((xClientWidth() - xWidth(d)) / 2), 0);
    var e = Math.max(Math.round((xClientHeight() - window[a]) / 2), 0);
    xMoveTo(d, f, -xHeight(d));
    xShow(d);
    xSlideTo(d, xScrollLeft() + f, xScrollTop() + e, 700);
    if (b) {
        xMoveTo(b, f + window["iwc_closebtn_left_" + g], -xHeight(d) + window["iwc_closebtn_top_" + g]);
        xShow(b);
        xSlideTo(b, xScrollLeft() + f + window["iwc_closebtn_left_" + g], xScrollTop() + e + window["iwc_closebtn_top_" + g], 700);
        (function() {
            var j = xGetElementById("iwc_closebtn_" + g + "_close");
            var h = function h(k) {
                if (k && typeof k.preventDefault === "function") {
                    k.preventDefault()
                }
                xRemoveEventListener(j, "click", h);
                iwcClose(g)
            };
            if (j) {
                xAddEventListener(j, "click", h)
            }
        }())
    }
}
function iwcClose(c) {
    var b = xGetElementById("iwc");
    var a = xGetElementById("iwc_closebtn_" + c);
    xSlideTo(b, xLeft(b), -xHeight(b), 700);
    if (a) {
        xSlideTo(a, xLeft(a), -xHeight(b) + window["iwc_closebtn_top_" + c], 700)
    }
    window.setTimeout(function() {
        iwcClose2(c)
    }, 400)
}
function iwcClose2(c) {
    var b = xGetElementById("iwc");
    var a = xGetElementById("iwc_closebtn_" + c);
    xHide(b);
    if (a) {
        xHide(a)
    }
    bysideWebcareHideBlockingBG();
    b.src = bysideWebcare_baseurl + "agent/blank.htm";
    if (window.webcareSetIFrameVisibility) {
        window.webcareSetIFrameVisibility(true)
    }
    bysideWebcare_iscontactwindowopen = false
}
function iwcLoadPanes() {
    bysideWebcare_append_html("<div id='iwc_pane' style='position: absolute; overflow: hidden; width: 10px; height: 10px; left: -10px; top: -10px; z-index: 1000; opacity: " + iwc_alphaopacity2 + "; filter: alpha(opacity=" + iwc_alphaopacity + "); background-color: " + iwc_alphacolour + ";'></div>");
    bysideWebcare_append_html("<iframe id='iwc' src='about:blank' frameborder='0' allowtransparency='true' style='position:absolute;overflow:hidden;width:10px;height:10px;left:-10px;top:-10px;visibility:hidden;margin:0;border:0;padding:0;cursor:default;z-index:1001'></iframe>")
}
function bysideWebcareCatchClickHeat() {}
function bysideWebcareInitClickHeat() {}
function bysideWebcareSetVisitorInfo(b) {
    var a = bysideWebcare_createQueryStringParams({
        vi: array2json(b)
    });
    bysideWebcare_make_request(bysideWebcare_get_agent_baseurl() + "svi.php?" + a)
}
function bysideWebcareMarkConversion() {
    var a = bysideWebcare_createQueryStringParams({
        mc: 1
    });
    bysideWebcare_make_request(bysideWebcare_get_agent_baseurl() + "usert_action.php?" + a)
}
function bysideWebcareAddVisitorToGroup(b) {
    var a = bysideWebcare_createQueryStringParams({
        avtg: b
    });
    bysideWebcare_make_request(bysideWebcare_get_agent_baseurl() + "usert_action.php?" + a)
}
function bysideWebcareRemoveVisitorFromGroup(b) {
    var a = bysideWebcare_createQueryStringParams({
        rvfg: b
    });
    bysideWebcare_make_request(bysideWebcare_get_agent_baseurl() + "usert_action.php?" + a)
}
function bysideWebcareCopyVisitorSegmentsFromLS(b, g) {
    if (typeof (Storage) !== "undefined" && typeof b === "string" && b) {
        try {
            var a = localStorage.getItem(b);
            var f = "byside.svsl";
            var d = localStorage.getItem(f);
            if (a !== null && d !== a) {
                bysideWebcareSyncVisitorSegments(a, g)
            }
        } catch (c) {
            console.error("bysideWebcareCopyVisitorSegmentsFromLS:", c)
        }
    }
}
function bysideWebcareSyncVisitorSegments(e, d) {
    var c = typeof e === "string" ? e : "";
    var a = bysideWebcare_createQueryStringParams({
        svsl: c
    });
    var b = "byside.svsl";
    bysideWebcare_make_post_request(bysideWebcare_get_agent_baseurl() + "segment/action.php", a, function(h) {
        var f = {
            result: false,
            data: null,
            errors: []
        };
        try {
            f = JSON.parse(h.responseText)
        } catch (g) {}
        if (typeof (Storage) !== "undefined" && f.success) {
            try {
                localStorage.setItem(b, c)
            } catch (j) {
                console.error("bysideWebcareSyncVisitorSegments:", j)
            }
        }
        if (typeof d === "function") {
            d(f)
        }
    })
}
function bysideWebcareAddVisitorToSegmentId(b) {
    var a = bysideWebcare_createQueryStringParams({
        avts: b || 0
    });
    bysideWebcare_make_post_request(bysideWebcare_get_agent_baseurl() + "segment/action.php", a)
}
function bysideWebcareRemoveVisitorFromSegmentId(b) {
    var a = bysideWebcare_createQueryStringParams({
        rvfs: b
    });
    bysideWebcare_make_post_request(bysideWebcare_get_agent_baseurl() + "segment/action.php", a)
}
function bysideWebcareCheckVisitorInSegmentId(b, c) {
    var a = bysideWebcare_createQueryStringParams({
        cvis: b
    });
    bysideWebcare_make_post_request(bysideWebcare_get_agent_baseurl() + "segment/action.php", a, function(f) {
        var d = {
            result: false,
            data: null,
            errors: []
        };
        try {
            d = JSON.parse(f.responseText)
        } catch (e) {}
        if (typeof c === "function") {
            c(d)
        }
    })
}
function bysideWebcare_getPushNotificationSubscriptionInfo() {
    var d = "PushManager"in window;
    var c = "serviceWorker"in navigator && d && typeof window.fetch !== "undefined" ? 1 : 0;
    var f = "Notification"in window ? (Notification.permission === "granted" ? "G" : (Notification.permission === "denied" ? "D" : "")) : "";
    var e = 0, b;
    try {
        if (typeof Storage !== "undefined" && "localStorage"in window) {
            b = localStorage.getItem("sidetalk");
            if (b) {
                try {
                    b = JSON.parse(b);
                    e = b.pn && b.pn.subscribed && (!bysideWebcare_fid || (b.pn.data && b.pn.data.visitor && b.pn.data.visitor.fid === bysideWebcare_fid)) ? 1 : 0
                } catch (a) {}
            }
        }
    } catch (a) {
        c = 0;
        f = "";
        e = 0
    }
    return c + ":" + f + ":" + e
}
function bysideWebcare_startSubPageTrackerEvents() {
    if (window.navigation && "addEventListener"in window.navigation && window.navigation.currentEntry) {
        window.navigation.addEventListener("navigatesuccess", function(c) {
            bysideWebcareTrackSubPage(c.target.currentEntry.url, true)
        })
    } else {
        window.addEventListener("popstate", function() {
            bysideWebcareTrackSubPage(window.location.href, true)
        });
        var b = history.pushState;
        var a = history.replaceState;
        history.pushState = function() {
            b.apply(this, arguments);
            bysideWebcareTrackSubPage(window.location.href, true)
        }
        ;
        history.replaceState = function() {
            a.apply(this, arguments);
            bysideWebcareTrackSubPage(window.location.href, true)
        }
    }
}
if (typeof window.bysideWebcare_script_tag_loaded === "undefined" || !window.bysideWebcare_script_tag_loaded) {
    if (bysideWebcare_use_websockets) {
        bysideWebcareStartSocket(false)
    }
    if (typeof bysideWebcare_processAfterContentLoaded === "undefined" || !bysideWebcare_processAfterContentLoaded) {
        bysideWebcare_processTUID()
    }
    bysideWebcare_contentLoaded(window, function() {
        var a = 50;
        var b = {
            iframe_mouseup: bysideWebcare_onactivitydetected,
            iframe_keypress: bysideWebcare_onactivitydetected
        };
        document.addEventListener("keypress", bysideWebcare_onactivitydetected);
        document.addEventListener("mouseup", bysideWebcare_onactivitydetected);
        document.addEventListener("visibilitychange", function() {
            if (document.visibilityState === "hidden") {
                bysideWebcare_processPageUnload()
            }
        });
        bysideWebcare_detectWindowScroll();
        bysideWebcare_startSubPageTrackerEvents();
        if (!window.bysideWebcare_preview) {
            document.addEventListener("coremedia.p13n.experience", function(f) {
                try {
                    var d = f.detail || {};
                    var e = d.content || {};
                    console.log("[CMEC]: CoreMedia P13N Event listener :: event detail:", d);
                    sendCMECFeedback(e.uuid, d.uuid, "S", d)
                } catch (c) {
                    console.warn("[CMEC]: CoreMedia P13N Event listener :: exception: ", f, c)
                }
            })
        }
        window.addEventListener("message", function(g) {
            try {
                var f = g && g.data && bysideWebcare_isValidJSON(g.data) && JSON.parse(g.data);
                if (!f) {
                    return
                }
                var e = f.event || "";
                var c = f.args || {};
                if (e && b[e]) {
                    b[e](c)
                }
            } catch (d) {
                console.warn("[byside]: Message Event listener exception: ", g, d)
            }
        }, false);
        if (typeof bysideWebcare_processAfterContentLoaded !== "undefined" && !!bysideWebcare_processAfterContentLoaded) {
            bysideWebcareWaitForCMCCContentLoaded().then(function() {
                a = 150;
                setTimeout(function() {
                    bysideWebcare_processTUID()
                }, 50);
                setTimeout(function() {
                    bysideWebcare_onload()
                }, a)
            });
            return
        }
        setTimeout(function() {
            bysideWebcare_onload()
        }, a)
    });
    xAddEventListener(window, "blur", bysideWebcare_onblur, false);
    xAddEventListener(window, "focus", bysideWebcare_onfocus, false);
    window.bysideWebcare_BTM = window.bysideWebcare_BTM || [];
    (function() {
        var a = ["setUserInfo", "trackEvent", "trackClick", "pageview"]
          , b = function(d) {
            return function() {
                window.bysideWebcare_BTM.push([d].concat(Array.prototype.slice.call(arguments, 0)))
            }
        };
        for (var c = 0; c < a.length; c++) {
            window.bysideWebcare_BTM[a[c]] = b(a[c])
        }
    }());
    window.bysideWebcare_script_tag_loaded = true
}
;