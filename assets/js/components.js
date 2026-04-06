/* ============================================
   STUDIO ABYND — Components Controller
   Navbar, Sliders, Chatbot, Filters, etc.
   ============================================ */

const Components = {
  init() {
    this.initNavbar();
    this.initScrollProgress();
    this.initScrollTop();
    this.initChatbot();
    this.initMobileMenu();
  },

  /* ---------- Navbar Scroll ---------- */
  initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      lastScroll = scrollY;
    });

    // Active link
    this.updateActiveLink();
  },

  updateActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
    links.forEach(link => {
      const href = link.getAttribute('href').replace(/\/+$/, '') || '/';
      link.classList.toggle('active', href === currentPath);
    });
  },

  /* ---------- Scroll Progress ---------- */
  initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    const progressSide = document.querySelector('#scroll-progress-side .fill');

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (progressBar) progressBar.style.width = progress + '%';
      if (progressSide) progressSide.style.height = progress + '%';
    });
  },

  /* ---------- Scroll To Top ---------- */
  initScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.pageYOffset > 400);
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  /* ---------- Mobile Menu ---------- */
  initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    const overlay = document.querySelector('.nav-overlay');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
      if (overlay) overlay.classList.toggle('active');
      document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    links.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    if (overlay) {
      overlay.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  },

  /* ---------- Testimonial Slider ---------- */
  initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const dots = document.querySelectorAll('.testimonial-dot');
    if (!track || !dots.length) return;

    let current = 0;
    const total = dots.length;

    const goTo = (index) => {
      current = index;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    };

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goTo(i));
    });

    // Auto play
    setInterval(() => {
      goTo((current + 1) % total);
    }, 6000);
  },

  /* ---------- Portfolio Filter ---------- */
  initPortfolioFilter() {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');
    if (!buttons.length || !items.length) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.filter;

        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        items.forEach(item => {
          if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('hidden-item');
            item.style.animation = 'fadeInScale 0.5s var(--ease-out-expo) forwards';
          } else {
            item.classList.add('hidden-item');
          }
        });
      });
    });
  },

  /* ---------- Chatbot ---------- */
  initChatbot() {
    const toggle = document.getElementById('chatbot-toggle');
    const chatbot = document.getElementById('chatbot');
    const close = document.querySelector('.chatbot-close');
    const input = document.querySelector('.chatbot-input');
    const send = document.querySelector('.chatbot-send');
    const messages = document.querySelector('.chatbot-messages');
    if (!toggle || !chatbot) return;

    toggle.addEventListener('click', () => {
      chatbot.classList.toggle('open');
      toggle.classList.toggle('active');
    });

    if (close) {
      close.addEventListener('click', () => {
        chatbot.classList.remove('open');
        toggle.classList.remove('active');
      });
    }

    const botResponses = {
      'halo': 'Halo! Selamat datang di Studio Abynd. Ada yang bisa kami bantu?',
      'hai': 'Hai! Terima kasih sudah menghubungi kami. Ada yang bisa kami bantu?',
      'harga': 'Untuk informasi harga, silakan hubungi kami melalui WhatsApp atau halaman Contact kami.',
      'layanan': 'Kami menyediakan layanan Website Portfolio, Company Profile, Web App, Mobile App, Printing Premium, dan Produk Multimedia.',
      'kontak': 'Anda bisa menghubungi kami melalui halaman Contact atau WhatsApp di tombol hijau sebelah kiri.',
      'portfolio': 'Silakan kunjungi halaman Portfolio kami untuk melihat karya-karya terbaik kami.',
      'default': 'Terima kasih atas pesan Anda. Tim kami akan segera menghubungi Anda. Atau Anda bisa langsung chat via WhatsApp untuk respons lebih cepat! 😊'
    };

    const addMsg = (text, type) => {
      if (!messages) return;
      const msg = document.createElement('div');
      msg.className = `chat-msg ${type}`;
      msg.textContent = text;
      messages.appendChild(msg);
      messages.scrollTop = messages.scrollHeight;
    };

    const handleSend = () => {
      if (!input) return;
      const text = input.value.trim();
      if (!text) return;

      addMsg(text, 'user');
      input.value = '';

      setTimeout(() => {
        const lower = text.toLowerCase();
        let response = botResponses.default;
        for (const [key, val] of Object.entries(botResponses)) {
          if (key !== 'default' && lower.includes(key)) {
            response = val;
            break;
          }
        }
        addMsg(response, 'bot');
      }, 800);
    };

    if (send) send.addEventListener('click', handleSend);
    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
      });
    }
  },

  /* ---------- Reinit page-specific components ---------- */
  reinitPage() {
    this.updateActiveLink();
    this.initTestimonialSlider();
    this.initPortfolioFilter();
  }
};
