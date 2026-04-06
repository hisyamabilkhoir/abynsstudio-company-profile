/* ============================================
   STUDIO ABYND — App (Router & Initialization)
   ============================================ */

const App = {
  currentPath: '',
  basePath: '',

  init() {
    // Show loader
    document.body.classList.add('loading');

    // Detect base path
    this.basePath = window.__BASE || '/';

    // Initialize global components
    Components.init();
    Effects.init();
    Animations.init();

    // Handle initial route (check sessionStorage for GitHub Pages redirects)
    const storedRoute = sessionStorage.getItem('route');
    if (storedRoute) {
      sessionStorage.removeItem('route');
      // If storedRoute is full path (with basePath), use it. Otherwise, prepend basePath.
      const target = storedRoute.startsWith(this.basePath) ? storedRoute : this.basePath + storedRoute.replace(/^\//, '');
      history.replaceState(null, '', target);
    }
    this.currentPath = this.getPath();
    this.renderPage(this.currentPath, false);

    // Listen for navigation
    this.initRouter();

    // Dismiss loader after content ready
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) loader.classList.add('hidden');
      document.body.classList.remove('loading');
    }, 2800);
  },

  getPath() {
    let path = window.location.pathname;
    // Remove base path prefix
    if (this.basePath !== '/' && path.startsWith(this.basePath)) {
      path = path.slice(this.basePath.length);
    }
    // Ensure leading slash
    if (!path.startsWith('/')) path = '/' + path;
    // Remove trailing slash except for root
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    return path || '/';
  },

  initRouter() {
    // Intercept internal link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a.nav-internal');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || link.hasAttribute('target')) {
        return;
      }

      e.preventDefault();
      const route = href.startsWith('/') ? href : '/' + href;
      if (route !== this.currentPath) {
        this.navigate(route);
      }
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      const path = this.getPath();
      if (path !== this.currentPath) {
        this.renderPage(path, false);
        this.currentPath = path;
      }
    });
  },

  navigate(route) {
    // Build full URL with base path
    const fullPath = this.basePath + route.replace(/^\//, '');
    history.pushState(null, '', fullPath);
    this.currentPath = route;
    this.renderPage(route, true);
  },

  renderPage(path, animate) {
    const main = document.getElementById('main-content');
    if (!main) return;

    const render = () => {
      // Determine which page to render
      const { html, meta } = this.getPageContent(path);

      // Update meta tags
      this.updateMeta(meta);

      // Inject content
      main.innerHTML = html;

      // Scroll to top
      window.scrollTo(0, 0);

      // Re-initialize page-specific components
      Components.reinitPage();
      Effects.reinit();
      Animations.reinit();

      // Remove exit class, trigger enter
      if (animate) {
        main.classList.add('page-enter');
        requestAnimationFrame(() => {
          main.classList.remove('page-enter');
        });
      }
    };

    if (animate) {
      main.classList.add('page-exit');
      setTimeout(() => {
        main.classList.remove('page-exit');
        render();
      }, 400);
    } else {
      render();
    }
  },

  getPageContent(path) {
    // Normalize path
    let cleanPath = path.replace(/\/+$/, '') || '/';
    
    // Handle home page variations
    if (cleanPath === '/index.html' || cleanPath === '/.' || cleanPath === '/./') {
      cleanPath = '/';
    }

    // Check for blog detail
    const blogMatch = cleanPath.match(/^\/blog\/(.+)$/);

    if (cleanPath === '/' || cleanPath === '') {
      return { html: PageHome.render(), meta: PageHome.getMeta() };
    } else if (cleanPath === '/about') {
      return { html: PageAbout.render(), meta: PageAbout.getMeta() };
    } else if (cleanPath === '/services') {
      return { html: PageServices.render(), meta: PageServices.getMeta() };
    } else if (cleanPath === '/portfolio') {
      return { html: PagePortfolio.render(), meta: PagePortfolio.getMeta() };
    } else if (cleanPath === '/blog' && !blogMatch) {
      return { html: PageBlog.render(), meta: PageBlog.getMeta() };
    } else if (blogMatch) {
      const slug = blogMatch[1];
      return { html: PageBlogDetail.render(slug), meta: PageBlogDetail.getMeta(slug) };
    } else if (cleanPath === '/awards') {
      return { html: PageAwards.render(), meta: PageAwards.getMeta() };
    } else if (cleanPath === '/contact') {
      return { html: PageContact.render(), meta: PageContact.getMeta() };
    }

    // 404
    return {
      html: `
        <section class="page-hero" style="min-height:60vh;display:flex;align-items:center;">
          <div class="container" style="text-align:center;">
            <h1 class="shimmer-heading" style="font-size:var(--fs-display);">404</h1>
            <p style="margin:var(--space-lg) 0;">Halaman yang Anda cari tidak ditemukan.</p>
            <a href="/" class="btn btn-gold nav-internal">Kembali ke Home →</a>
          </div>
        </section>`,
      meta: { title: '404 — Studio Abynd', description: 'Halaman tidak ditemukan.', keywords: '' }
    };
  },

  updateMeta(meta) {
    document.title = meta.title || 'Studio Abynd';

    const updateTag = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (el && value) el.setAttribute(attr, value);
    };

    updateTag('meta[name="description"]', 'content', meta.description);
    updateTag('meta[name="keywords"]', 'content', meta.keywords);
    updateTag('meta[property="og:title"]', 'content', meta.title);
    updateTag('meta[property="og:description"]', 'content', meta.description);
  }
};

// Boot
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

/* ---------- PORTFOLIO MODAL LOGIC ---------- */
const PROJECT_DATA = [
  { id: 1, title:'Luxury Resort Bali', cat:'Website', client:'Ametis Group', year:'2025', img:'portfolio_resort.png', fullDesc:'Sebuah platform reservasi dan showcase visual untuk resort mewah di Bali. Fokus pada user experience yang sinematik dan integrasi sistem booking yang seamless untuk meningkatkan konversi tamu internasional.' },
  { id: 2, title:'FinTech Dashboard', cat:'Mobile App', client:'Artha Finance', year:'2025', img:'portfolio_fintech.png', fullDesc:'Dashboard manajemen keuangan yang kompleks namun tetap intuitif. Menghadirkan visualisasi data real-time, manajemen aset, dan protokol keamanan enkripsi tingkat tinggi untuk pengguna korporat.' },
  { id: 3, title:'Elite Property Group', cat:'Company Profile', client:'Elite Realty', year:'2024', img:'portfolio_resort.png', fullDesc:'Website profil perusahaan properti yang menekankan pada eksklusivitas. Menggunakan tipografi elegan dan layout minimalis untuk menonjolkan listing properti mewah dengan nilai investasi tinggi.' },
  { id: 4, title:'Artisan Coffee Co.', cat:'Branding', client:'Artisan Bean', year:'2024', img:'portfolio_branding.png', fullDesc:'Pengembangan identitas brand menyeluruh untuk kedai kopi artisan. Mencakup desain logo, skema warna earthy-premium, hingga desain kemasan produk yang memperkuat daya tarik visual brand di pasar retail.' },
  { id: 5, title:'Wellness App', cat:'Mobile App', client:'Nuansa Jiwa', year:'2024', img:'portfolio_fintech.png', fullDesc:'Aplikasi meditasi dan kesehatan mental dengan antarmuka yang menenangkan. Menggunakan elemen visual organik dan micro-interactions yang halus untuk menciptakan lingkungan digital yang rileks.' },
  { id: 6, title:'Fashion E-Commerce', cat:'Website', client:'Vogue Elite', year:'2024', img:'portfolio_resort.png', fullDesc:'Platform belanja fashion kelas atas dengan navigasi yang sangat lancar. Mengoptimalkan performa load gambar high-resolution dan sistem checkout yang dikustomisasi untuk pengalaman belanja elit.' },
  { id: 7, title:'Wedding Suite', cat:'Multimedia', client:'The Arsa Wedding', year:'2023', img:'portfolio_branding.png', fullDesc:'Suite desain multimedia untuk pernikahan mewah. Mencakup undangan digital interaktif, animasi pembuka acara, hingga sistem RSVP online terpadu dengan desain yang artistik.' },
  { id: 8, title:'Corporate Report', cat:'Multimedia', client:'Bakti Persada', year:'2023', img:'portfolio_fintech.png', fullDesc:'Transformasi laporan tahunan cetak menjadi pengalaman digital interaktif. Menyajikan data performa perusahaan melalui grafik interaktif yang mempermudah pemangku kepentingan memahami capaian bisnis.' },
  { id: 9, title:'Restaurant Identity', cat:'Branding', client:'The Gold Leaf', year:'2023', img:'portfolio_branding.png', fullDesc:'Konsep identitas visual untuk restoran fine-dining. Memadukan elemen emas dan ornamen klasik untuk menciptakan citra eksklusif yang selaras dengan pengalaman kuliner berkualitas tinggi.' }
];

window.showProjectModal = (id) => {
  const project = PROJECT_DATA.find(p => p.id === id);
  if (!project) return;
  
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;
  
  content.innerHTML = `
    <div class="modal-image">
      <img src="assets/images/${project.img}" alt="${project.title}">
    </div>
    <div class="modal-info">
      <span class="modal-tag">${project.cat}</span>
      <h2 class="modal-title gold-text-static">${project.title}</h2>
      <p class="modal-text">${project.fullDesc}</p>
      
      <div class="modal-meta-grid">
        <div class="meta-item">
          <h4>Klien</h4>
          <p>${project.client}</p>
        </div>
        <div class="meta-item">
          <h4>Tahun</h4>
          <p>${project.year}</p>
        </div>
        <div class="meta-item">
          <h4>Layanan</h4>
          <p>${project.cat}</p>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; 
};

window.hideProjectModal = () => {
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
};
