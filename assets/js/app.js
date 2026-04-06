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
    if (cleanPath === '/index.html') cleanPath = '/';

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
