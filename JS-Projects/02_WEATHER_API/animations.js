// ============================================================
//  animations.js — Particle canvas + ambient effects
// ============================================================

(function () {
  // ── Canvas particle background ────────────────────────────
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, particles;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticles() {
    const count = Math.floor((W * H) / 14000);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? "99,80,255" : "56,189,248",
    }));
  }

  // Mouse-reactive attraction
  const mouse = { x: W / 2, y: H / 2 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach((p) => {
      // Drift
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      // Subtle mouse attraction
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 160) {
        p.x += dx * 0.0015;
        p.y += dy * 0.0015;
      }

      // Draw glow dot
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
      grd.addColorStop(0, `rgba(${p.color},${p.alpha})`);
      grd.addColorStop(1, `rgba(${p.color},0)`);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    });

    // Draw connecting lines for nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(120,80,255,${0.08 * (1 - dist / 90)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawParticles);
  }

  resize();
  createParticles();
  drawParticles();

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });

  // ── Custom glow cursor ────────────────────────────────────
  const cursorGlow = document.createElement("div");
  cursorGlow.id = "cursor-glow";
  document.body.appendChild(cursorGlow);

  let cx = 0,
    cy = 0,
    tx = 0,
    ty = 0;
  document.addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });

  (function animateCursor() {
    cx += (tx - cx) * 0.1;
    cy += (ty - cy) * 0.1;
    cursorGlow.style.transform = `translate(${cx - 150}px, ${cy - 150}px)`;
    requestAnimationFrame(animateCursor);
  })();

  // Grow on hoverable elements
  document.querySelectorAll("button, input, a, .stat-card").forEach((el) => {
    el.addEventListener("mouseenter", () => cursorGlow.classList.add("grow"));
    el.addEventListener("mouseleave", () =>
      cursorGlow.classList.remove("grow"),
    );
  });

  // ── Weather icon animation trigger ───────────────────────
  // Re-bounce icon each time weather info appears
  const weatherInfo = document.getElementById("weather-info");
  if (weatherInfo) {
    const observer = new MutationObserver(() => {
      if (!weatherInfo.classList.contains("hidden")) {
        const icon = document.getElementById("weather-icon-main");
        if (icon) {
          icon.style.animation = "none";
          void icon.offsetWidth;
          icon.style.animation = "";
        }
      }
    });
    observer.observe(weatherInfo, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
})();
