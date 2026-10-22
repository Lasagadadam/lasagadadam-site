(function () {
  var site = window.SITE || { socials: [], sponsors: [] };
  var fr = new Intl.NumberFormat("fr-FR");

  /* ---- Réseaux + total ---- */
  var list = document.getElementById("socials");
  var total = 0;
  site.socials.forEach(function (s) {
    total += s.followers;
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = s.url; a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("aria-label", s.platform + " " + s.handle + ", " + fr.format(s.followers) + " abonnés");
    var n = document.createElement("span"); n.className = "p-name"; n.textContent = s.platform;
    var c = document.createElement("span"); c.className = "p-count"; c.textContent = fr.format(s.followers);
    a.appendChild(n); a.appendChild(c); li.appendChild(a); list.appendChild(li);
  });

  /* 14840 -> "14,8K" */
  function short(n) {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(".", ",").replace(",0", "") + "K";
    return String(n);
  }

  var totalEl = document.getElementById("total");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || total === 0) {
    totalEl.textContent = short(total);
  } else {
    var start = null, dur = 1400;
    (function tick(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      totalEl.textContent = short(Math.round(total * eased));
      if (p < 1) requestAnimationFrame(tick); else totalEl.textContent = short(total);
    })(performance.now());
  }

  /* ---- Sponsors ---- */
  var sp = site.sponsors || [];
  if (sp.length) {
    var ul = document.getElementById("sponsors-list");
    sp.forEach(function (name) {
      var li = document.createElement("li"); li.textContent = name; ul.appendChild(li);
    });
    document.getElementById("sponsors").hidden = false;
  }
})();
