/* ============================================
   STUDIO ABYND — Animations Controller
   Scroll Reveal, Counters, Stagger
   ============================================ */

const Animations = {
  observer: null,

  init() {
    this.initScrollReveal();
    this.initCounters();
  },

  /* ---------- Scroll Reveal (IntersectionObserver) ---------- */
  initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!revealElements.length) return;

    if (this.observer) this.observer.disconnect();

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
      this.observer.observe(el);
    });
  },

  /* ---------- Counter Animation ---------- */
  initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  },

  animateCounter(el) {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * target);

      el.textContent = prefix + current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = prefix + target + suffix;
        el.style.animation = 'counterFlash 0.6s ease';
      }
    };

    requestAnimationFrame(update);
  },

  /* ---------- Reinit on page change ---------- */
  reinit() {
    setTimeout(() => {
      this.initScrollReveal();
      this.initCounters();
    }, 100);
  }
};
