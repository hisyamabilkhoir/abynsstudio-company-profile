/* ============================================
   STUDIO ABYND — Page Content: Services
   ============================================ */

const PageServices = {
  render() {
    return `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">Layanan</div>
        <h1 class="shimmer-heading">Solusi Digital Premium</h1>
        <p>Layanan lengkap untuk transformasi digital bisnis Anda.</p>
      </div>
    </section>

    <section class="section-dark">
      <div class="container">
        <div class="services-grid">
          <div class="card card-3d reveal delay-1">
            <div class="card-icon">🌐</div>
            <h3 class="card-title">Website Portfolio</h3>
            <p class="card-text">Portfolio digital yang memukau untuk menampilkan karya terbaik Anda. Desain interaktif, responsif, dan dioptimasi untuk performa tinggi.</p>
            <ul style="margin-top:var(--space-md);display:flex;flex-direction:column;gap:var(--space-xs);">
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Desain responsif premium</li>
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Animasi interaktif</li>
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ SEO optimized</li>
            </ul>
          </div>
          <div class="card card-3d reveal delay-2">
            <div class="card-icon">🏢</div>
            <h3 class="card-title">Company Profile</h3>
            <p class="card-text">Profil perusahaan digital berkelas internasional yang meningkatkan brand authority dan kredibilitas bisnis Anda di mata klien.</p>
            <ul style="margin-top:var(--space-md);display:flex;flex-direction:column;gap:var(--space-xs);">
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Cinematic experience</li>
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Multi-page / SPA</li>
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ CMS integration</li>
            </ul>
          </div>
          <div class="card card-3d reveal delay-3">
            <div class="card-icon">⚡</div>
            <h3 class="card-title">Web Application</h3>
            <p class="card-text">Aplikasi web custom yang powerful dan scalable. Dari dashboard analitik hingga platform e-commerce, kami membangun solusi yang tepat.</p>
            <ul style="margin-top:var(--space-md);display:flex;flex-direction:column;gap:var(--space-xs);">
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Full-stack development</li>
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ API integration</li>
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Real-time features</li>
            </ul>
          </div>
          <div class="card card-3d reveal delay-4">
            <div class="card-icon">📱</div>
            <h3 class="card-title">Mobile Application</h3>
            <p class="card-text">Aplikasi mobile native dan cross-platform dengan pengalaman pengguna yang memukau. iOS dan Android dalam satu development cycle.</p>
            <ul style="margin-top:var(--space-md);display:flex;flex-direction:column;gap:var(--space-xs);">
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ React Native / Flutter</li>
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Push notifications</li>
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Offline support</li>
            </ul>
          </div>
          <div class="card card-3d reveal delay-5">
            <div class="card-icon">🖨️</div>
            <h3 class="card-title">Premium Photo Printing</h3>
            <p class="card-text">Layanan cetak foto premium dengan material berkualitas tinggi. Cocok untuk pameran, dekorasi, dan kebutuhan profesional lainnya.</p>
            <ul style="margin-top:var(--space-md);display:flex;flex-direction:column;gap:var(--space-xs);">
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Fine art printing</li>
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Canvas & acrylic</li>
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Custom framing</li>
            </ul>
          </div>
          <div class="card card-3d reveal delay-6">
            <div class="card-icon">📓</div>
            <h3 class="card-title">Produk Multimedia</h3>
            <p class="card-text">Produk multimedia custom dengan desain eksklusif. Dari notebook premium hingga wedding planner, semua dibuat dengan standar luxury.</p>
            <ul style="margin-top:var(--space-md);display:flex;flex-direction:column;gap:var(--space-xs);">
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Custom notebook</li>
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Wedding planner</li>
              <li style="color:var(--clr-text-muted);font-size:var(--fs-xs);">✦ Premium packaging</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="section-gradient">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Proses Kami</div>
          <h2 class="section-title shimmer-heading">Bagaimana Kami Bekerja</h2>
        </div>
        <div class="grid grid-4">
          <div class="card reveal delay-1" style="text-align:center;">
            <div style="font-size:2.5rem;margin-bottom:var(--space-md);opacity:0.8;">01</div>
            <h4 class="card-title gold-text-static" style="font-size:var(--fs-body);">Discovery</h4>
            <p class="card-text">Memahami kebutuhan, visi, dan target bisnis Anda secara mendalam.</p>
          </div>
          <div class="card reveal delay-2" style="text-align:center;">
            <div style="font-size:2.5rem;margin-bottom:var(--space-md);opacity:0.8;">02</div>
            <h4 class="card-title gold-text-static" style="font-size:var(--fs-body);">Design</h4>
            <p class="card-text">Merancang solusi visual dan UX yang memukau dan berorientasi pada hasil.</p>
          </div>
          <div class="card reveal delay-3" style="text-align:center;">
            <div style="font-size:2.5rem;margin-bottom:var(--space-md);opacity:0.8;">03</div>
            <h4 class="card-title gold-text-static" style="font-size:var(--fs-body);">Develop</h4>
            <p class="card-text">Membangun dengan teknologi terbaik, clean code, dan standar premium.</p>
          </div>
          <div class="card reveal delay-4" style="text-align:center;">
            <div style="font-size:2.5rem;margin-bottom:var(--space-md);opacity:0.8;">04</div>
            <h4 class="card-title gold-text-static" style="font-size:var(--fs-body);">Deliver</h4>
            <p class="card-text">Meluncurkan proyek dengan sempurna dan memberikan dukungan berkelanjutan.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-content container reveal">
        <h2 class="shimmer-heading" style="font-size:var(--fs-h1);">Butuh Solusi Digital?</h2>
        <p>Diskusikan proyek Anda bersama kami. Konsultasi awal gratis!</p>
        <a href="/contact" class="btn btn-gold btn-lg nav-internal">Konsultasi Gratis →</a>
      </div>
    </section>`;
  },

  getMeta() {
    return {
      title: 'Services — Studio Abynd',
      description: 'Layanan digital premium Studio Abynd: website portfolio, company profile, web app, mobile app, premium printing, dan produk multimedia.',
      keywords: 'layanan digital, web development, mobile app, company profile, premium printing'
    };
  }
};
