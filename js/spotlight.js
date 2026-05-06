/* ============================================================
   Cursor spotlight: a soft mint glow that follows the cursor.
   Disabled on touch / reduced-motion.
   ============================================================ */

(function () {
  const el = document.getElementById('spotlight');
  if (!el) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;
  if (reduced || isTouch) { el.remove(); return; }

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x, ty = y;
  let visible = false;

  function loop() {
    // Eased follow for smoothness
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  window.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    if (!visible) {
      el.style.opacity = '1';
      visible = true;
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    el.style.opacity = '0';
    visible = false;
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) el.style.opacity = '0';
  });
})();
