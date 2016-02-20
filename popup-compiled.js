var g = function (t)
	{
		var e = typeof t;
		return "object" == e && null != t || "function" == e
	}
	, q = function ()
	{
		this.D = /&lt;(\/?(b|i|em|br))&gt;/gi, this.C = /&amp;([a-z0-9]+|#[0-9]+);/gi, this.q = document.createElement("div")
	}
	, r = function (t, e)
	{
		return t.q.textContent = e, e = t.q.innerHTML, e.replace(t.D, function (t, e)
			{
				return "<" + e + ">"
			})
			.replace(t.C, function (t, e)
			{
				return "&" + e + ";"
			})
	}
	, u = /[?&]oi=([^&]+)/
	, v = function (t, e)
	{
		var i = document.createElement(t);
		return i.className = e, i
	}
	, w = function (t, e)
	{
		var i = document.createElement(t);
		return i.id = e, i
	}
	, z = function (t, e, i)
	{
		var n = document.createElement("a");
		return n.setAttribute("href", t), n.innerHTML = e, i && (n.className = i), n
	}
	, A = function (t, e)
	{
		for (var i = e.length, n = 0; i > n; n++) t.appendChild(e[n])
	}
	, B = function (t, e, i)
	{
		var n = new XMLHttpRequest;
		n.open(e ? "POST" : "GET", "https://scholar.google.com/" + t, !0), n.onreadystatechange = function ()
		{
			4 == n.readyState && i(n.status, n.responseText)
		}, n.timeout = 3e4, e && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e ? n.send(e) : n.send()
	}
	, C = function (t, e)
	{
		var i = null;
		if (200 == t)
		{
			try
			{
				i = JSON.parse(e)
			}
			catch (n)
			{}("object" != typeof i || i instanceof Array) && (i = null)
		}
		return i
	}
	, H = function (t, e, i)
	{
		this.a = t, this.K = e, this.A = i, this.M = new q, this.w = w("div", "help"), this.j = w("a", "full-screen"), this.o = w("a", "settings"), this.B = w("div", "spinner"), this.n = w("form", "search-form"), this.e = w("input", "search-box"), this.d = w("div", "main"), this.k = w("div", "message"), this.p = this.b = "", t = document.body, t.setAttribute("dir", this.a.getMessage("@@bidi_dir")), t.innerHTML = "", e = w("button", "search-button"), e.type = "submit", A(this.n, [this.e, e]), i = w("div", "middle"), A(i, [this.d, this.B, this.k]);
		var n = w("div", "bottom");
		D(this, "", ""), this.o.setAttribute("href", "/scholar_settings?oi=gsb&hl=" + F(this.a)), A(n, [this.j, this.o, this.w]), A(t, [this.n, i, n]), document.title = this.a.getMessage("853"), i = this.a.getMessage("920"), e.setAttribute("aria-label", i), e = this.a.getMessage("625"), this.B.setAttribute("aria-label", e), this.j.title = this.a.getMessage("922"), this.o.title = this.a.getMessage("628"), this.n.addEventListener("submit", this.J.bind(this)), t.addEventListener("click", this.G.bind(this)), t.addEventListener("focus", this.H.bind(this), !0), G(this, !0)
	}
	, G = function (t, e)
	{
		document.body.classList.toggle("busy", e), I(t, "")
	}
	, I = function (t, e)
	{
		t.k.innerHTML = e
	}
	, J = function (t)
	{
		I(t, t.a.getMessage("921") + " "), t.k.appendChild(z(t.j.getAttribute("href"), t.a.getMessage("922")))
	}
	, M = function (t, e)
	{
		var i = K
			, n = (t.match(/^.*[?&](q|title)=([^&]+).*$/) || ["", "", ""])[2]
			, n = decodeURIComponent(n.replace(/[+]/g, "%20"));
		i.b = "gsb20" < (t.match(u) || ["", ""])[1] ? "" : n, i.p = i.b && t, i.e.value = i.b ? "" : n, i.e.focus();
		var s = !!n && !i.b;
		i.w.innerHTML = i.a.getMessage(e ? s ? "861" : "862" : s ? "859" : "860"), D(i, i.b ? "?oi=gsb00" : t, n), n ? L(i, t) : (i.d.innerHTML = "", G(i, !1))
	}
	, L = function (t, e)
	{
		G(t, !0);
		var i = e + (0 <= e.indexOf("?") ? "&" : "?") + "output=gsb&hl=" + F(t.a);
		t.A(i, "", t.I.bind(t))
	};
H.prototype.I = function (t, e)
{
	function i(t, e)
	{
		t && (e.firstChild && e.appendChild(document.createTextNode(" ")), e.appendChild(t))
	}
	this.d.innerHTML = "", G(this, !1);
	var n = C(t, e) ||
		{}
		, s = n.r;
	if (s instanceof Array && !n.L)
	{
		var r = Math.min(s.length, 3);
		if (this.b)
		{
			if (0 >= r || !n.h) return;
			this.e.value || (this.e.value = this.b, this.e.focus(), D(this, this.p, this.b))
		}
		for (n = 0; r > n; n++)
		{
			var a = s[n];
			if (g(a))
			{
				var o = N(this, a.t)
					, h = (a.u || "") + ""
					, d = N(this, a.x)
					, u = N(this, a.m)
					, l = N(this, a.s)
					, c = a.l ||
					{};
				if (o && g(c))
				{
					var p, a = {};
					for (p in c)
					{
						var f = c[p];
						g(f) && (a[p] = z((f.u || "") + "", N(this, f.l), p))
					}
					c = v("div", "result"), i(a.f, c);
					var f = v("h3", "result-title")
						, m = "";
					d && (m = v("span", "result-marker"), m.innerHTML = "[" + d + "]", m = m.outerHTML + " "), o = m + o, h ? (h = z(h, o), f.appendChild(h)) : f.innerHTML = o, c.appendChild(f), u && (h = v("div", "result-metadata"), h.innerHTML = u, c.appendChild(h)), l && 1 == r && (u = v("div", "result-snippet"), u.innerHTML = l, c.appendChild(u)), l = v("div", "result-links"), i(a.c, l), i(a.r, l), i(a.v, l), l.firstChild && c.appendChild(l), l = v("div", "result-access"), i(a.g, l), i(a.l, l), l.firstChild && c.appendChild(l), this.d.appendChild(c)
				}
			}
		}
		this.d.firstChild || I(this, this.a.getMessage("923"))
	}
	else J(this)
}, H.prototype.F = function (t, e)
{
	this.d.innerHTML = "", G(this, !1);
	var i = C(t, e) ||
		{}
		, n = i.l
		, s = i.i || [];
	if (n instanceof Array && s instanceof Array && !i.L)
	{
		for (var r = Math.min(n.length, 5), i = w("table", "cite"), a = 0; r > a; a++)
		{
			var o = n[a];
			if (g(o))
			{
				var h = N(this, o.l)
					, o = N(this, o.h);
				if (h && o)
				{
					var d = i.insertRow()
						, u = document.createElement("th");
					u.scope = "row", u.innerHTML = h, d.appendChild(u), h = d.insertCell(), h.tabIndex = 0, h.innerHTML = o
				}
			}
		}
		for (n = Math.min(s.length, 5), r = w("div", "import"), a = 0; n > a; a++) h = s[a], g(h) && (r.firstChild && r.appendChild(document.createTextNode(" ")), r.appendChild(z((h.u || "") + "", N(this, h.l))));
		i.firstChild ? (this.d.appendChild(i), this.d.appendChild(r)) : I(this, this.a.getMessage("923"))
	}
	else J(this)
};
var D = function (t, e, i)
{
	t.j.setAttribute("href", "/" + (e + (0 <= e.indexOf("?") ? "&" : "?")) + ((e.match(u) || ["", ""])[1] ? "" : "oi=gsb&") + (i ? "lookup=0&" : "") + "hl=" + F(t.a))
};
H.prototype.J = function (t)
{
	var e = this.e.value
		, i = "scholar?oi=gsb95&q=" + encodeURIComponent(e);
	this.b = this.p = "", D(this, i, e), L(this, i), t.preventDefault()
}, H.prototype.G = function (t)
{
	for (var e = t.target, i = document.body; e != i;)
	{
		var n = 1 == e.nodeType && e.getAttribute("href") || "";
		if ("#f" == n.substr(0, 2))
		{
			t.preventDefault(), t = n.substr(2), G(this, !0), t = "scholar?q=info:" + encodeURIComponent(t) + ":scholar.google.com/&output=gsb-cite&hl=" + F(this.a), this.A(t, "", this.F.bind(this));
			break
		}
		if (n)
		{
			t.preventDefault(), "/" == n[0] && (n = "https://scholar.google.com" + n), this.K(n);
			break
		}
		if ("TR" == e.nodeName)
		{
			t.preventDefault(), (t = e.getElementsByTagName("td")[0]) && 0 <= t.tabIndex && t.focus();
			break
		}
		e = e.parentElement
	}
}, H.prototype.H = function (t)
{
	var e = t.target;
	"TD" == e.nodeName && setTimeout(function ()
	{
		window.getSelection()
			.selectAllChildren(e)
	}, 0)
};
var N = function (t, e)
	{
		return r(t.M, (e || "") + "")
	}
	, O = function () {}
	, P = {
		en_GB: "en"
		, en_US: "en"

		, fil: "tl"
		
	};
O.prototype.getMessage = function (t, e)
{
	return chrome.i18n.getMessage(t, e)
};
var F = function (t)
{
	return t = t.getMessage("@@ui_locale"), P[t] || t
};
document.body.style.width = "400px";
var K = new H(new O, function (t)
{
	chrome.tabs.create(
	{
		url: t
	})
}, function (t, e, i)
{
	B(t, e, i)
});
chrome.runtime.onMessage.addListener(function (t)
{
	t = (t || "") + "", M(t, /^.*[?&]ct=emb(&.*)?$/.test(t))
}), chrome.tabs.executeScript(
{
	file: "contentscript-compiled.js"
}, function ()
{
	chrome.runtime.lastError && M("", !0)
});



