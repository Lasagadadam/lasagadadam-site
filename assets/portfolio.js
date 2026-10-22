(function () {
  var site = window.SITE || {};
  var reels = site.reels || [];
  var section = document.getElementById("portfolio");
  var list = document.getElementById("reels");
  if (!reels.length) { if (section) section.hidden = true; return; }

  var playIcon = '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function code(url) {
    var m = /\/(?:reel|p)\/([A-Za-z0-9_-]+)/.exec(url || "");
    return m ? m[1] : "";
  }

  reels.forEach(function (r, i) {
    var id = code(r.url);
    if (!id) return;
    var li = el("li", "reel" + (i === 0 ? " is-featured" : ""));
    var frame = el("div", "reel-frame");
    var poster = el("button", "reel-poster" + (r.cover ? " has-cover" : ""));
    poster.type = "button";
    poster.setAttribute("aria-label", "Lire le reel " + (i + 1) + (r.title ? " : " + r.title : ""));
    if (r.cover) poster.style.backgroundImage = "url('" + r.cover + "')";
    var play = el("span", "reel-play"); play.innerHTML = playIcon;
    poster.appendChild(play);
    if (i === 0) poster.appendChild(el("span", "reel-badge", "À la une"));
    poster.appendChild(el("span", "reel-label", r.title || "Voir le reel"));

    /* L'embed Instagram ne se charge qu'au clic : la page reste légère. */
    poster.addEventListener("click", function () {
      var f = document.createElement("iframe");
      f.src = "https://www.instagram.com/reel/" + id + "/embed/";
      f.title = "Reel Instagram " + (i + 1);
      f.setAttribute("allowfullscreen", "");
      f.setAttribute("allow", "autoplay; encrypted-media; fullscreen");
      f.setAttribute("scrolling", "no");
      f.loading = "lazy";
      frame.replaceChild(f, poster);
    });
    frame.appendChild(poster);

    var open = el("a", "reel-open", "Ouvrir sur Instagram");
    open.href = "https://www.instagram.com/reel/" + id + "/";
    open.target = "_blank"; open.rel = "noopener";

    li.appendChild(frame); li.appendChild(open);
    list.appendChild(li);
  });
})();
