(function () {
  var site = window.SITE || {};
  var root = document.getElementById("liens-list");
  var section = document.getElementById("liens");
  if (!root) return;

  var items = (site.links || []).filter(function (l) { return l && l.url; });
  if (!items.length) { if (section) section.hidden = true; return; }

  /* Regroupe en gardant l'ordre d'apparition */
  var order = [], groups = {};
  items.forEach(function (l) {
    var g = l.group || "Liens";
    if (!groups[g]) { groups[g] = []; order.push(g); }
    groups[g].push(l);
  });

  order.forEach(function (g) {
    var block = document.createElement("div");
    block.className = "lien-group";
    var h = document.createElement("h3");
    h.className = "kicker"; h.textContent = g;
    var ul = document.createElement("ul");
    ul.className = "lien-rows";
    groups[g].forEach(function (l) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.className = "lien";
      a.href = l.url;
      if (!/^mailto:/.test(l.url)) { a.target = "_blank"; a.rel = "noopener"; }
      var main = document.createElement("span"); main.className = "lien-main";
      var t = document.createElement("span"); t.className = "lien-title"; t.textContent = l.title;
      main.appendChild(t);
      if (l.detail) {
        var d = document.createElement("span"); d.className = "lien-detail"; d.textContent = l.detail;
        main.appendChild(d);
      }
      var arrow = document.createElement("span"); arrow.className = "lien-arrow"; arrow.setAttribute("aria-hidden", "true");
      arrow.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>';
      a.appendChild(main); a.appendChild(arrow); li.appendChild(a); ul.appendChild(li);
    });
    block.appendChild(h); block.appendChild(ul); root.appendChild(block);
  });
})();
