var m = function (e, a)
	{
		return 255 & e.charCodeAt(a) | (255 & e.charCodeAt(a + 1)) << 8 | (255 & e.charCodeAt(a + 2)) << 16 | (255 & e.charCodeAt(a + 3)) << 24
	}
	, p = Math.imul || function (e, a)
	{
		var t = 65535 & e
			, c = 65535 & a;
		return t * c + ((e >>> 16 & 65535) * c + t * (a >>> 16 & 65535) << 16 >>> 0) | 0
	}
	, q = function (e, a)
	{
		return e << a | e >>> 32 - a
	}
	, r = function (e)
	{
		return e = p(e ^ e >>> 16, 2246822507), e ^= e >>> 13, e = p(e, 3266489909), e ^= e >>> 16
	}
	, t = function (e)
	{
		return e = (e >>> 0)
			.toString(16), "00000000".substr(e.length) + e
	}
	, aa = {
		creators_name: "author"
		, creator: "author"
		, contributor: "author"
		, issued: "publication_year"
		, publication_date: "publication_year"
		, date: "year"
	}
	, ba = {
		"abstract": 1
		, description: 1
		, keyword: 1
		, keywords: 1
		, reference: 1
	}
	, ca = /^.*_(url|email|institution)$/
	, da = /  +/g
	, ea = /[?&]oi=([^&]+)/
	, v = function (e)
	{
		return e.replace(/[-+":]/g, " ")
			.substr(0, 500)
	}
	, w = function (e, a, t)
	{
		e = aa[e] || e, !a || ba[e] || ca.test(e) || t.push(encodeURIComponent(e) + "=" + encodeURIComponent(a))
	}
	, ga = function (e)
	{
		for (var a = fa; a;)
		{
			var t = e[a];
			if (t) return t;
			if (t = a.indexOf("."), 0 > t) break;
			a = a.substr(t + 1)
		}
	}
	, x = "innerText" in document.documentElement ? function (e)
	{
		return e.innerText
	} : function (e)
	{
		if (1 == e.nodeType)
		{
			var a = document.defaultView.getComputedStyle(e);
			return "none" == a.display || "hidden" == a.visibility || 0 >= parseFloat(a.fontSize) || 0 >= parseFloat(a.opacity) ? "" : Array.prototype.map.call(e.childNodes, x)
				.join(" ")
				.replace(da, " ")
		}
		return e.textContent
	}
	, ia = function ()
	{
		function e(e)
		{
			for (var a = 1463435680, c = 1463435680, o = 1463435680, d = 1463435680, n = 0, i = 0, f = 0, b = 0, l = e.length, s = l >> 4 << 4, h = 0; s > h; h += 16) n = m(e, h), i = m(e, h + 4), f = m(e, h + 8), b = m(e, h + 12), n = p(n, 597399067), n = q(n, 15), n = p(n, 2869860233), a ^= n, a = q(a, 19), a += c, a = 5 * a + 1444728091 >>> 0, i = p(i, 2869860233), i = q(i, 16), i = p(i, 951274213), c ^= i, c = q(c, 17), c += o, c = 5 * c + 197830471 >>> 0, f = p(f, 951274213), f = q(f, 17), f = p(f, 2716044179), o ^= f, o = q(o, 15), o += d, o = 5 * o + 2530024501 >>> 0, b = p(b, 2716044179), b = q(b, 18), b = p(b, 597399067), d ^= b, d = q(d, 13), d += a, d = 5 * d + 850148119 >>> 0;
			switch (b = f = i = n = 0, 15 & l)
			{
			case 15:
				b ^= (255 & e.charCodeAt(s + 14)) << 16;
			case 14:
				b ^= (255 & e.charCodeAt(s + 13)) << 8;
			case 13:
				b ^= (255 & e.charCodeAt(s + 12)) << 0, b = p(b, 2716044179), b = q(b, 18), b = p(b, 597399067), d ^= b;
			case 12:
				f ^= (255 & e.charCodeAt(s + 11)) << 24;
			case 11:
				f ^= (255 & e.charCodeAt(s + 10)) << 16;
			case 10:
				f ^= (255 & e.charCodeAt(s + 9)) << 8;
			case 9:
				f ^= (255 & e.charCodeAt(s + 8)) << 0, f = p(f, 951274213), f = q(f, 17), f = p(f, 2716044179), o ^= f;
			case 8:
				i ^= (255 & e.charCodeAt(s + 7)) << 24;
			case 7:
				i ^= (255 & e.charCodeAt(s + 6)) << 16;
			case 6:
				i ^= (255 & e.charCodeAt(s + 5)) << 8;
			case 5:
				i ^= (255 & e.charCodeAt(s + 4)) << 0, i = p(i, 2869860233), i = q(i, 16), i = p(i, 951274213), c ^= i;
			case 4:
				n ^= (255 & e.charCodeAt(s + 3)) << 24;
			case 3:
				n ^= (255 & e.charCodeAt(s + 2)) << 16;
			case 2:
				n ^= (255 & e.charCodeAt(s + 1)) << 8;
			case 1:
				n ^= (255 & e.charCodeAt(s + 0)) << 0, n = p(n, 597399067), n = q(n, 15), n = p(n, 2869860233), a ^= n
			}
			return c ^= l, o ^= l, d ^= l, a = (a ^ l) + c, a += o, a += d, c += a, o += a, d += a, a = r(a), c = r(c), o = r(o), d = r(d), a += c, a += o, a += d, c += a, o += a, d += a, 0 <= ",001fde309095b539,0185b8df4ac2f854,04a92f8c063fc87a,0683146df3567555,0ac877b4c0a3205f,0bcca1071aefa33b,0d784cf85154f1cf,0f4bcccbd8c561ac,107b135de44ac922,13a8259a5ab34e58,1414dca5ec4e1c2c,155020036a9f8ea5,1a5df52f5ea416a6,1a99fcc2e8fb347c,21de91bffcc7c1e6,22f15c1ddc8521a1,230884e2eff4d081,24161b41ba32df27,25024107d83ae836,267083cef39376db,2733d3b278ac8e32,27b4c4de40410e5a,2831a98089aa8dc4,29506a7448ded562,29fa11065b708b1d,2a33db0f6c2da04e,2b23aef8e3e91f30,2c7b6ecc2325446b,2d9a21f3fd2ef7d2,2e0d4f430297f1a1,31278be6c8f8aca2,347a06499e62e3df,366422dbaa0a4748,37baa9424345fd38,37e7d3928d33461a,3df33e342cee4bab,42c114ead5c10d68,4495d017442c4c10,4a69abb3135f6283,4a9cd50296b8c5d7,4fc30abdd64d6736,50e55854a880f685,514d0132e3115710,5366fd147b8e9d33,594f47350c2e20c0,596a4abf2c6f6f0b,5ac0a209599257cf,5c72860e547304c5,6153af1ff96193c7,65a826a8bfff3de7,670b5ca33a9726fb,695c222931a0bdc6,6b18f38643bb0885,6b58848606d74a7f,6c4564e057a04c0d,6ce471fb1c1f15f9,6e74751c30954370,72647788a1e6ac0d,7c43b63e8b467f82,82248bcc57515e86,8a910090d56bb846,974b0da894938100,9d6d8eab29cc6cd6,a2cbece521a6b706,a517803359d9da0f,a55e99e6d6e60142,a6cf3be4f72d5fca,a80ad1ae260b439b,a9653c11711b139b,aca51ebd970ea9db,ad3ad05c5d030ff1,adf7c1b725ebe04e,b49dec64c7d855aa,b785bc231e43134b,b92e1376543888cb,bad782d308f6ee8f,bb7f972a836d70b1,bc7f7464ca755854,bd7757bfefd4766c,bdc646ef43dff7f9,c1a10b4b5a2bab63,d9de8121c5ee95a2,de67b75eb5b60f70,e2a678e43b9f4f81,e42f4c587f6ceafd,e45711b5b0526b1d,e73fb2bb1b366aef,e75621876b084945,ee771c4e62b9f90c,ef1a7f2680a18753,f01b75960be4ddd4,f1029a3eed96e197,f28aa283c1f50662,f6c02b415ca52cad,f6e9ddd0c9eeb7f1,f78f8569d136a7a1,f7de21fb87b1df56,fc0daea00ec98740,fc82e65d8feb8077,fda729397d9a56d5,".indexOf("," + (t(a) + t(c) + t(o) + t(d))
				.substr(0, 16) + ",")
		}
		var a = ha;
		if (a.replace(/^(.*?)[.](com|[a-z]{2}|(com|co)[.][a-z]{2})$/, "$1")
			.match(/^(.*[.])?(google|yahoo|yandex|amazon|ebay|craigslist)$/)) return !1;
		var c = a.replace(/^(.*[.])?([a-z0-9-]+[.][a-z-]{2,})$/, "$2")
			, a = a.replace(/^(.*[.])?([a-z0-9-]+([.][a-z-]{2,}){2})$/, "$2");
		return !e(c) && !e(a)
	}
	, ha = location.hostname
	, y, ja = window.getSelection() + "";
if (!(y = ja && "scholar?oi=gsb90&q=" + encodeURIComponent(v(ja)))) e:
{
	for (var la = /<(p|br)>|<\/.*>|<.*\/>/i, ma = /<[^>]+>/g, z = document.getElementsByTagName("meta"), na = [], oa = [], pa = [], qa = [], A = [], ra = /[.-]/g, C = 0, sa = z.length; sa > C; ++C)
	{
		var D = (z[C].name || "")
			.toLowerCase()
			.replace(ra, "_")
			, E, F = z[C].content || "";
		E = F.match(la) ? F.replace(ma, "") : F, 0 == D.indexOf("citation_") ? w(D.substr(9), E, na) : 0 == D.indexOf("eprints_") ? w(D.substr(8), E, oa) : 0 == D.indexOf("bepress_citation_") ? w(D.substr(17), E, pa) : 0 == D.indexOf("wkhealth_") ? w(D.substr(9), E, qa) : 0 == D.indexOf("dc_") ? w(D.substr(3), E, A) : 0 == D.indexOf("dcterms_") && w(D.substr(8), E, A)
	}
	for (var ta = [na, oa, pa, qa, A], ua = /^author=/, va = /.*[?&]title=/, G = 0; G < ta.length; ++G)
	{
		for (var H = ta[G], wa = [], xa = 0, I = 0; I < H.length; ++I)(!ua.test(H[I]) || 5 >= ++xa) && wa.push(H[I]);
		var ya = "scholar_lookup?oi=gsb80&" + wa.join("&");
		if (va.test(ya))
		{
			y = ya;
			break e
		}
	}
	y = void 0
}
var J;
if (!(J = y))
{
	var K = document
		, za = K.querySelectorAll("[itemscope][itemtype$=ScholarlyArticle] [itemprop=headline]")
		, Aa = 1 == za.length && x(za[0]);
	if (Aa)
	{
		var Ba = K.querySelectorAll("[itemscope][itemtype$=ScholarlyArticle] [itemprop=author] [itemprop=name]")
			, Ca = K.querySelectorAll("[itemscope][itemtype$=ScholarlyArticle] [itemprop=datePublished]")
			, L = []
			, Da = 0
			, M;
		w("title", Aa + "", L);
		for (var N = 0, Ea = Ba.length; Ea > N; ++N)
			if (M = x(Ba[N]))
			{
				if (5 < ++Da) break;
				w("author", M, L)
			}
		1 == Ca.length && (M = x(Ca[0])) && w("publication_year", M, L), J = "scholar_lookup?oi=gsb70&" + L.join("&")
	}
	else J = void 0
}
var O;
if (!(O = J))
{
	var P = location.href
		, Q = P.match(/^.*[.\/](google|bing|twitter)[.].*[?&#]q=([^&]+).*$/) || P.match(/^.*[.\/]yahoo[.].*[?&#]p=([^&]+).*$/) || P.match(/^.*[.\/]baidu[.].*[?&#]wd=([^&]+).*$/) || P.match(/^.*[.\/]naver[.].*[?&#]query=([^&]+).*$/) || P.match(/^.*[.\/]yandex[.].*[?&#]text=([^&]+).*$/) || P.match(/^.*[.\/]ncbi[.]nlm[.]nih[.]gov\/.*[?&#]term=([^&]+).*$/);
	O = Q && "scholar?oi=gsb40&q=" + encodeURIComponent(decodeURIComponent(Q[Q.length - 1].replace(/[+]/g, "%20")))
}
var R;
if (!(R = O))
{
	var S;
	if (S = ia())
	{
		for (var fa = ha, T = document, Fa = T.defaultView || window, Ga = T.body.getBoundingClientRect(), Ha = T.querySelectorAll(ga(
			{
				"ebscohost.com": "#content .citation-title"
				, "webofknowledge.com": ".title value"
				, "grin.com": "h1"
			}) || "h1, h2, h3"), U = 0, V = "h9", W = "", Ia = ga(
			{
				"degruyter.com": "#masthead .pub-title"
				, "journals.aps.org": "#header .title"
			}), Ja = 0, Ka = Ha.length; Ka > Ja; ++Ja)
		{
			var X = Ha[Ja];
			if (!Ia || !(X.matches || X.mozMatchesSelector || X.webkitMatchesSelector)
				.call(X, Ia))
			{
				var La = x(X);
				if (!(10 > La.length))
				{
					var Y = X.getBoundingClientRect();
					if (!(Y.top > 1e3 + Ga.top || 100 > Y.right - Y.left || 10 > Y.bottom - Y.top))
					{
						var Ma = Fa.getComputedStyle(X);
						if (!("hidden" == Ma.visibility || 0 >= parseFloat(Ma.opacity)))
						{
							var Na = parseFloat(Ma.fontSize)
								, Oa = X.tagName.toLowerCase();
							(Na != U ? Na > U : Oa != V ? V > Oa : La.length > W.length) && (U = Na, V = Oa, W = La)
						}
					}
				}
			}
		}
		var Pa;
		if (!(Pa = W && "scholar?oi=gsb20&q=" + encodeURIComponent(v(W))))
		{
			var Z = document
				, Qa = Z.querySelectorAll("[itemscope][itemtype$=Article] [itemprop=name]")
				, Ra = 1 == Qa.length && x(Qa[0])
				, Sa = Z.querySelectorAll("meta[property=og\\:title], meta[name=og\\:title]")
				, Ta = 1 == Sa.length && Sa[0].content
				, Ua = Ra || Ta || Z.title;
			Pa = !Ua || Ua == Z.title && "application/pdf" == Z.contentType ? void 0 : "scholar?oi=gsb10&q=" + encodeURIComponent(v(Ua))
		}
		S = Pa
	}
	R = S
}! function (e)
{
	function a(e, a)
	{
		if (a)
		{
			var t = "scholar?oi=gsb85&q=" + encodeURIComponent(v(a + ""))
				, c = e
				, o = (t.match(ea) || ["", ""])[1]
				, r = (c.match(ea) || ["", ""])[1];
			(o != r ? o > r : t.length > c.length) && (e = t)
		}
		chrome.runtime.sendMessage(e)
	}

	function t(t)
	{
		(t = t.data) && "object" == typeof t && "getSelectedTextReply" == t.type && (o(), a(e, t.selectedText))
	}

	function c()
	{
		window.addEventListener("message", t), r = setTimeout(function ()
		{
			r = void 0, o(), a(e + (0 <= e.indexOf("?") ? "&" : "?") + "ct=emb")
		}, 400)
	}

	function o()
	{
		window.removeEventListener("message", t), clearTimeout(r)
	}
	var r, d = document.documentElement
		, n = document.getElementsByTagName("embed")[0];
	if (n && n.clientWidth >= .9 * d.clientWidth && n.clientHeight >= .9 * d.clientHeight)
	{
		if ("application/pdf" == n.type || "application/x-google-chrome-pdf" == n.type)
		{
			if (42 <= parseFloat((/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [])[1])) return c(), void n.postMessage(
			{
				type: "getSelectedText"
			});
			if (n.getSelectedText) return void a(e, n.getSelectedText())
		}
		e = e + (0 <= e.indexOf("?") ? "&" : "?") + "ct=emb"
	}
	a(e)
}(R || "");
