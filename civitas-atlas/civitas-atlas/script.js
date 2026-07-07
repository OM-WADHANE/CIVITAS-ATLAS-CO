/**
 * Civitas Atlas — script.js
 * Vanilla JS: cursor, navbar, scroll reveal, counter, marquee, magnetic buttons,
 * contact form, back-to-top, hero canvas grid, typing effect.
 */

/* ═══════════════════════════════════════════
   1. UTILITY
════════════════════════════════════════════ */

/** Select a single element (throws friendly error if missing) */
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
/** Select multiple elements */
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/** Run fn after DOM is ready */
function onReady(fn) {
  if (document.readyState !== 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
}

/* ═══════════════════════════════════════════
   2. CUSTOM CURSOR
════════════════════════════════════════════ */
function initCursor() {
  const dot  = qs('#cursorDot');
  const ring = qs('#cursorRing');
  if (!dot || !ring) return;

  // Only enable on true pointer (non-touch) devices
  if (!window.matchMedia('(hover: hover)').matches) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  let rafId;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Ring follows with lerp for smooth lag
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const interactives = 'a, button, .pillar-card, .feature-card, .future-card, .research-item, .stat-card';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactives)) ring.classList.add('cursor-ring--hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactives)) ring.classList.remove('cursor-ring--hover');
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
}

/* ═══════════════════════════════════════════
   3. NAVBAR — scroll shadow + mobile menu
════════════════════════════════════════════ */
function initNavbar() {
  const navbar     = qs('#navbar');
  const hamburger  = qs('#hamburger');
  const mobileMenu = qs('#mobileMenu');
  if (!navbar) return;

  // Scroll class
  const onScroll = () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 12);
    // Back-to-top button
    const btn = qs('#backToTop');
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run immediately

  // Mobile menu toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('navbar__mobile--open');
      hamburger.classList.toggle('navbar__hamburger--open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
    });
  }

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('navbar__mobile--open')) {
      if (!navbar.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });
}

/** Exported so inline onclick on nav links can call it */
function closeMobileMenu() {
  const hamburger  = qs('#hamburger');
  const mobileMenu = qs('#mobileMenu');
  if (!mobileMenu) return;
  mobileMenu.classList.remove('navbar__mobile--open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  if (hamburger) {
    hamburger.classList.remove('navbar__hamburger--open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
}

/* ═══════════════════════════════════════════
   4. SCROLL REVEAL  (IntersectionObserver)
════════════════════════════════════════════ */
function initScrollReveal() {
  const elements = qsa('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el    = entry.target;
        const delay = parseInt(el.dataset.delay || '0', 10);
        setTimeout(() => el.classList.add('is-visible'), delay);
        observer.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ═══════════════════════════════════════════
   5. COUNTER ANIMATION
════════════════════════════════════════════ */
function initCounters() {
  const counters = qsa('.stat-card__value[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

function animateCounter(el) {
  const target   = parseFloat(el.dataset.target);
  const suffix   = el.dataset.suffix   || '';
  const prefix   = el.dataset.prefix   || '';
  const decimal  = parseInt(el.dataset.decimal || '0', 10);
  const duration = 1800; // ms
  const start    = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    // easeOutCubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const value  = eased * target;
    el.textContent = prefix + value.toFixed(decimal) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/* ═══════════════════════════════════════════
   6. MARQUEE — duplicate items for infinite loop
════════════════════════════════════════════ */
function initMarquee() {
  const track = qs('#marqueeTrack');
  if (!track) return;

  // Clone all children and append for seamless loop
  const items = qsa('.tech-chip', track);
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });
}

/* ═══════════════════════════════════════════
   7. MAGNETIC BUTTONS
════════════════════════════════════════════ */
function initMagneticButtons() {
  if (!window.matchMedia('(hover: hover)').matches) return;

  qsa('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect   = btn.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) * 0.3;
      const dy     = (e.clientY - cy) * 0.3;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ═══════════════════════════════════════════
   8. CONTACT FORM
════════════════════════════════════════════ */
function initContactForm() {
  const form    = qs('#contactForm');
  const success = qs('#contactSuccess');
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const inputs = qsa('[required]', form);
    let valid = true;
    inputs.forEach((input) => {
      input.style.borderColor = '';
      if (!input.value.trim()) {
        input.style.borderColor = 'rgba(239,68,68,0.6)';
        valid = false;
      }
    });
    if (!valid) return;

    // Simulate async submit
    const submitBtn = form.querySelector('[type="submit"]');
    const origText  = submitBtn.textContent.trim();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    setTimeout(() => {
      form.hidden    = true;
      success.hidden = false;
    }, 800);
  });
}

/* ═══════════════════════════════════════════
   9. BACK TO TOP
════════════════════════════════════════════ */
function initBackToTop() {
  const btn = qs('#backToTop');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════════════
   10. HERO CANVAS — animated grid + particles
════════════════════════════════════════════ */
function initHeroCanvas() {
  const canvas = qs('#heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles;
  const GRID_SIZE  = 50;
  const PARTICLE_N = 40;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeParticle() {
    return {
      x:   Math.random() * W,
      y:   Math.random() * H,
      r:   Math.random() * 1.5 + 0.4,
      vx:  (Math.random() - 0.5) * 0.3,
      vy:  (Math.random() - 0.5) * 0.3,
      a:   Math.random(),
      da:  (Math.random() - 0.5) * 0.008,
    };
  }

  function initParticles() {
    particles = Array.from({ length: PARTICLE_N }, makeParticle);
  }

  function drawGrid() {
    ctx.strokeStyle = 'rgba(91,33,182,0.12)';
    ctx.lineWidth   = 0.5;

    for (let x = 0; x <= W; x += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y <= H; y += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    // Dot at intersections
    ctx.fillStyle = 'rgba(91,33,182,0.18)';
    for (let x = 0; x <= W; x += GRID_SIZE) {
      for (let y = 0; y <= H; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function drawParticles() {
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.a += p.da;
      if (p.a > 1 || p.a < 0) p.da *= -1;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212,175,55,${p.a * 0.6})`;
      ctx.fill();
    });
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    drawGrid();
    drawParticles();
    requestAnimationFrame(render);
  }

  window.addEventListener('resize', () => { resize(); });
  resize();
  initParticles();
  render();
}

/* ═══════════════════════════════════════════
   11. ACTIVE NAV LINK — highlight on scroll
════════════════════════════════════════════ */
function initActiveNav() {
  const sections = qsa('section[id]');
  const navLinks = qsa('.navbar__link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === '#' + id;
          link.style.color = active ? 'var(--gold-light)' : '';
        });
      });
    },
    { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
  );

  sections.forEach((s) => observer.observe(s));
}

/* ═══════════════════════════════════════════
   12. HERO TYPING EFFECT (eyebrow badge)
════════════════════════════════════════════ */
function initTyping() {
  const badge = qs('.hero__badge');
  if (!badge) return;

  const phrases = [
    'Digital Public Infrastructure, built from Maharashtra',
    'Land Intelligence for Citizens, Institutions & Government',
    'Reconciling India\'s fragmented land records',
  ];

  // Find the text node (last child)
  let current = 0;
  let charIdx  = phrases[0].length; // already rendered in HTML
  let deleting = false;
  const SPEED_TYPE = 55;
  const SPEED_DEL  = 30;
  const PAUSE      = 2800;

  // Remove static text and replace with live span
  const spans = badge.childNodes;
  let textNode = null;
  spans.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      textNode = node;
    }
  });
  if (!textNode) return;

  function tick() {
    const phrase = phrases[current];

    if (!deleting) {
      if (charIdx < phrase.length) {
        textNode.textContent = phrase.slice(0, ++charIdx);
        setTimeout(tick, SPEED_TYPE);
      } else {
        setTimeout(() => { deleting = true; tick(); }, PAUSE);
      }
    } else {
      if (charIdx > 0) {
        textNode.textContent = phrase.slice(0, --charIdx);
        setTimeout(tick, SPEED_DEL);
      } else {
        deleting = false;
        current  = (current + 1) % phrases.length;
        setTimeout(tick, 400);
      }
    }
  }

  // Start after initial pause so hero renders first
  setTimeout(tick, PAUSE);
}

/* ═══════════════════════════════════════════
   13. PARALLAX — subtle background blobs
════════════════════════════════════════════ */
function initParallax() {
  if (!window.matchMedia('(hover: hover)').matches) return;
  const blob1 = qs('.hero__blob--1');
  const blob2 = qs('.hero__blob--2');
  if (!blob1 || !blob2) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    blob1.style.transform = `translateY(${y * 0.18}px)`;
    blob2.style.transform = `translateY(${-y * 0.1}px)`;
  }, { passive: true });
}

/* ═══════════════════════════════════════════
   14. SMOOTH SCROLL for anchor links
════════════════════════════════════════════ */
function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = 80; // navbar height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════════════
   15. INIT ALL
════════════════════════════════════════════ */
onReady(() => {
  initCursor();
  initNavbar();
  initBackToTop();
  initScrollReveal();
  initCounters();
  initMarquee();
  initMagneticButtons();
  initContactForm();
  initHeroCanvas();
  initActiveNav();
  initTyping();
  initParallax();
  initSmoothScroll();
});
