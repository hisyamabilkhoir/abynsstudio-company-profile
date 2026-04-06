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
        radial-gradient(ellipse at ${x}% ${y}%, rgba(74, 31, 142, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse at ${100-x}% ${100-y}%, rgba(45, 27, 105, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at ${x}% ${100-y}%, rgba(139, 105, 20, 0.1) 0%, transparent 40%),
        linear-gradient(180deg, #050211, #0a0612)
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

  /* ---------- Reinitialize on page change ---------- */
  reinit() {
    this.initTilt3D();
    this.initParallax();
    this.initHeroInteractive();
    this.initHeroParticles();
  }
};
