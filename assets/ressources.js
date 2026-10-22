(function () {
  var all = (window.RESOURCES || []).slice().sort(function (a, b) {
    return String(b.added || "").localeCompare(String(a.added || ""));
  });
  var order = ["Tournage", "Montage", "Réseaux", "Collaboration"];
  var list = document.getElementById("res-list");
  var empty = document.getElementById("res-empty");
  var filters = document.getElementById("filters");
  var current = "Toutes";

  var present = [];
  all.forEach(function (r) { if (r.category && present.indexOf(r.category) === -1) present.push(r.category); });
  present.sort(function (a, b) {
    var ia = order.indexOf(a), ib = order.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });

  var arrow = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';
  var download = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function render() {
    list.textContent = "";
    var shown = all.filter(function (r) { return current === "Toutes" || r.category === current; });
    shown.forEach(function (r) {
      var li = el("li", "res");
      var a = el("a", "res-link");
      a.href = r.href;
      if (r.download) a.setAttribute("download", "");
      var main = el("div", "res-main");
      var tags = el("ul", "res-tags");
      [r.category, r.format, r.detail].forEach(function (t) { if (t) tags.appendChild(el("li", "", t)); });
      main.appendChild(tags);
      main.appendChild(el("h2", "res-title", r.title));
      if (r.description) main.appendChild(el("p", "res-desc", r.description));
      var go = el("span", "res-go");
      go.appendChild(el("span", "res-go-label", r.download ? "Télécharger" : "Ouvrir"));
      var circle = el("span", "res-go-arrow");
      circle.innerHTML = r.download ? download : arrow;
      go.appendChild(circle);
      a.appendChild(main); a.appendChild(go);
      li.appendChild(a);
      if (r.video) {
        var v = el("a", "res-video", "Voir la vidéo");
        v.href = r.video; v.target = "_blank"; v.rel = "noopener";
        li.appendChild(v);
      }
      list.appendChild(li);
    });
    empty.hidden = shown.length > 0;
  }

  /* Les filtres n'apparaissent que s'il y a au moins deux thèmes. */
  if (present.length > 1) {
    ["Toutes"].concat(present).forEach(function (name) {
      var b = el("button", "chip", name);
      b.type = "button";
      b.setAttribute("aria-pressed", String(name === current));
      b.addEventListener("click", function () {
        current = name;
        Array.prototype.forEach.call(filters.children, function (c) {
          c.setAttribute("aria-pressed", String(c.textContent === current));
        });
        render();
      });
      filters.appendChild(b);
    });
    filters.hidden = false;
  }
  render();
})();
