// San Diego Leisure — interacciones del sitio
(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;

  // Encabezado compacto al hacer scroll
  var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 24); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menú en celular
  var btn = header.querySelector(".menu-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Cerrar "All Services" al hacer clic fuera
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".nav details[open]").forEach(function (d) {
      if (!d.contains(e.target)) d.removeAttribute("open");
    });
  });
})();

// Tamaño de letra (se recuerda en este navegador)
(function () {
  var root = document.documentElement;
  var btns = document.querySelectorAll(".textsize button");
  if (!btns.length) return;
  var current = "1";
  try { current = localStorage.getItem("sdl-text") || "1"; } catch (e) {}
  function apply(size) {
    root.style.fontSize = (parseFloat(size) * 100) + "%";
    btns.forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.size === size ? "true" : "false"); });
  }
  apply(current);
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.dataset.size);
      try { localStorage.setItem("sdl-text", b.dataset.size); } catch (e) {}
    });
  });
})();

// Cifras que cuentan al aparecer en pantalla
(function () {
  var els = document.querySelectorAll("[data-count]");
  if (!els.length || !("IntersectionObserver" in window)) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      var el = e.target, end = parseInt(el.dataset.count, 10), start = end > 1000 ? end - 24 : 0, t0 = null;
      function step(t) {
        if (!t0) t0 = t;
        var p = Math.min((t - t0) / 1200, 1), v = Math.round(start + (end - start) * (1 - Math.pow(1 - p, 3)));
        el.textContent = v;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  els.forEach(function (el) { io.observe(el); });
})();
