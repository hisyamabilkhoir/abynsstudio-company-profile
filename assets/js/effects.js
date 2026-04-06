/* ============================================
   STUDIO ABYND — Effects
   Cursor Glow, 3D Tilt, Parallax, Hero
   ============================================ */

const Effects = {
  init() {
    this.initCursorGlow();
    this.initTilt3D();
    this.initParallax();
    this.initHeroInteractive();
    this.initHeroParticles();
    this.initSinkScroll();
  },

  /* ---------- Cursor Glow ---------- */
  initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow || window.innerWidth < 768) return;

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      glow.style.left = currentX + 'px';
      glow.style.top = currentY + 'px';
      requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
    document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  },

  /* ---------- 3D Tilt Effect ---------- */
  initTilt3D() {
    document.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.card-3d');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) / rect.width;
        const deltaY = (e.clientY - centerY) / rect.height;
        const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (dist < 1.5) {
          const rotateY = deltaX * 8;
          const rotateX = -deltaY * 8;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
        } else {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        }
      });
    });
  },

  /* ---------- Parallax Depth ---------- */
  initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (!parallaxElements.length) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.pageYOffset;
          parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.3;
            const rect = el.getBoundingClientRect();
            const offset = (rect.top + scrollY - window.innerHeight / 2) * speed;
            el.style.transform = `translateY(${-offset * 0.1}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    });
  },

  /* ---------- Hero Interactive Background ---------- */
  initHeroInteractive() {
    const hero = document.querySelector('.hero');
    if (!hero || window.innerWidth < 768) return;

    const bg = hero.querySelector('.hero-bg');
    if (!bg) return;

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      bg.style.background = `
        radial-gradient(ellipse 500px 500px at ${x}% ${y}%, rgba(120, 50, 200, 0.12) 0%, transparent 70%),
        radial-gradient(ellipse 300px 300px at ${x}% ${y}%, rgba(212, 168, 67, 0.06) 0%, transparent 60%),
        radial-gradient(ellipse at 30% 20%, rgba(80, 30, 140, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse at 70% 60%, rgba(60, 20, 120, 0.35) 0%, transparent 55%),
        radial-gradient(ellipse at 50% 30%, rgba(100, 40, 160, 0.2) 0%, transparent 60%),
        radial-gradient(ellipse at 20% 80%, rgba(212, 168, 67, 0.08) 0%, transparent 40%),
        linear-gradient(180deg, #0a0318 0%, #150830 20%, #1a0d40 40%, #140a38 60%, #0e062a 80%, #080315 100%)
      `;
    });

    hero.addEventListener('mouseleave', () => {
      bg.style.background = '';
    });
  },

  /* ---------- Hero Particles ---------- */
  initHeroParticles() {
    const container = document.querySelector('.hero-particles');
    if (!container) return;

    const particles = 25;
    for (let i = 0; i < particles; i++) {
      const p = document.createElement('div');
      p.classList.add('hero-particle');
      const size = Math.random() * 4 + 2;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.opacity = Math.random() * 0.5 + 0.1;
      p.style.animationDuration = (Math.random() * 15 + 10) + 's';
      p.style.animationDelay = (Math.random() * 5) + 's';

      const animations = ['particleFloat1', 'particleFloat2', 'particleFloat3'];
      p.style.animationName = animations[Math.floor(Math.random() * animations.length)];
      p.style.animationIterationCount = 'infinite';
      p.style.animationTimingFunction = 'ease-in-out';

      container.appendChild(p);
    }
  },

  /* ---------- Hero Sinking Scroll Effect ---------- */
  initSinkScroll() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const split = hero.querySelector('.hero-split');
    const banner = hero.querySelector('.hero-banner-3d');
    const florals = hero.querySelector('.hero-florals');
    const waves = hero.querySelector('.hero-wave-wrap');

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.pageYOffset;
          const heroH = hero.offsetHeight;
          const progress = Math.min(scrollY / heroH, 1); // 0 to 1

          // Sink the content down and fade out
          if (split) {
            split.style.transform = `translateY(${progress * 80}px)`;
            split.style.opacity = 1 - progress * 0.8;
          }
          // Banner sinks deeper & rotates
          if (banner) {
            banner.style.transform = `translateY(${progress * 120}px) rotateX(${progress * 8}deg) scale(${1 - progress * 0.15})`;
          }
          // Florals float up (opposite)
          if (florals) {
            florals.style.transform = `translateY(${-progress * 60}px)`;
            florals.style.opacity = 1 - progress * 1.2;
          }
          // Waves rise
          if (waves) {
            waves.style.transform = `translateY(${-progress * 40}px) scaleY(${1 + progress * 0.3})`;
          }

          ticking = false;
        });
        ticking = true;
      }
    });
  },

  /* ---------- Reinitialize on page change ---------- */
  reinit() {
    this.initTilt3D();
    this.initParallax();
    this.initHeroInteractive();
    this.initHeroParticles();
    this.initSinkScroll();
  }
};
