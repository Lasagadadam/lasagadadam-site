(function () {
  /* ---- Thème clair / sombre ---- */
  var btn = document.getElementById("theme-toggle");
  var root = document.documentElement;
  function sync() {
    var dark = root.dataset.theme === "dark";
    btn.setAttribute("aria-pressed", String(dark));
    btn.setAttribute("aria-label", dark ? "Passer en mode clair" : "Passer en mode sombre");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#0c1530" : "#dce7ff");
  }
  btn.addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    sync();
  });
  sync();
})();
