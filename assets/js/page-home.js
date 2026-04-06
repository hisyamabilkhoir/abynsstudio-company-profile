/* ============================================
   STUDIO ABYND — Page Content: Home
   ============================================ */

const PageHome = {
  render() {
    return `
    <!-- HERO -->
    <section class="hero" id="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-particles"></div>
      <div class="hero-content">
        <div class="hero-label">✦ Premium Digital Agency ✦</div>
        <h1 class="hero-title shimmer-heading">Where Vision Meets<br>Digital Excellence</h1>
        <p class="hero-subtitle">Kami menciptakan pengalaman digital berkelas internasional yang mengubah visi menjadi karya luar biasa. Setiap pixel dirancang untuk kesempurnaan.</p>
        <div class="hero-cta">
          <a href="/portfolio" class="btn btn-gold nav-internal">Lihat Portfolio</a>
          <a href="/contact" class="btn btn-outline nav-internal">Hubungi Kami</a>
        </div>
      </div>
      <div class="hero-scroll-indicator">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item reveal delay-1">
            <div class="stat-number gold-text" data-count="150" data-suffix="+">0</div>
            <div class="stat-label">Project Selesai</div>
          </div>
          <div class="stat-item reveal delay-2">
            <div class="stat-number gold-text" data-count="50" data-suffix="+">0</div>
            <div class="stat-label">Klien Puas</div>
          </div>
          <div class="stat-item reveal delay-3">
            <div class="stat-number gold-text" data-count="5" data-suffix="+">0</div>
            <div class="stat-label">Tahun Pengalaman</div>
          </div>
          <div class="stat-item reveal delay-4">
            <div class="stat-number gold-text" data-count="99" data-suffix="%">0</div>
            <div class="stat-label">Kepuasan Klien</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT PREVIEW -->
    <section class="section-dark" id="about-preview">
      <div class="container">
        <div class="about-content">
          <div class="reveal-left">
            <div class="about-image-wrap">
              <div style="width:100%;height:100%;background:linear-gradient(135deg, var(--clr-purple-deep), var(--clr-purple-mid));display:flex;align-items:center;justify-content:center;font-size:4rem;color:rgba(212,168,67,0.2);">✦</div>
            </div>
          </div>
          <div class="reveal-right">
            <div class="section-label">Tentang Kami</div>
            <h2 class="section-title shimmer-heading">Crafting Digital Excellence Since 2021</h2>
            <p style="margin-bottom:var(--space-lg);">Studio Abynd lahir dari visi untuk menghadirkan solusi digital berkelas internasional. Kami percaya bahwa setiap pixel memiliki makna, setiap interaksi harus memukau, dan setiap proyek adalah mahakarya.</p>
            <p style="margin-bottom:var(--space-2xl);">Dengan tim yang terdiri dari programmer berpengalaman dan kreator konten berbakat, kami menghadirkan pengalaman digital yang tidak hanya indah, tetapi juga berdampak nyata bagi bisnis klien kami.</p>
            <a href="/about" class="btn btn-outline nav-internal">Selengkapnya →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES PREVIEW -->
    <section class="section-gradient" id="services-preview">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Layanan Kami</div>
          <h2 class="section-title shimmer-heading">Solusi Digital Premium</h2>
          <p class="section-subtitle">Layanan lengkap untuk kebutuhan digital dan multimedia bisnis Anda.</p>
        </div>
        <div class="services-grid">
          <div class="card card-3d reveal delay-1">
            <div class="card-icon">🌐</div>
            <h3 class="card-title">Website Portfolio</h3>
            <p class="card-text">Portfolio digital yang memukau untuk menampilkan karya terbaik Anda dengan desain premium dan interaktif.</p>
          </div>
          <div class="card card-3d reveal delay-2">
            <div class="card-icon">🏢</div>
            <h3 class="card-title">Company Profile</h3>
            <p class="card-text">Profil perusahaan digital yang elegan dan profesional untuk meningkatkan kredibilitas brand Anda.</p>
          </div>
          <div class="card card-3d reveal delay-3">
            <div class="card-icon">⚡</div>
            <h3 class="card-title">Web Application</h3>
            <p class="card-text">Aplikasi web custom yang powerful, scalable, dan dirancang untuk memenuhi kebutuhan bisnis spesifik Anda.</p>
          </div>
          <div class="card card-3d reveal delay-4">
            <div class="card-icon">📱</div>
            <h3 class="card-title">Mobile App</h3>
            <p class="card-text">Aplikasi mobile cross-platform dengan UI/UX premium yang menghadirkan pengalaman pengguna terbaik.</p>
          </div>
          <div class="card card-3d reveal delay-5">
            <div class="card-icon">🖨️</div>
            <h3 class="card-title">Premium Printing</h3>
            <p class="card-text">Layanan cetak foto premium berkualitas tinggi untuk kebutuhan personal dan profesional.</p>
          </div>
          <div class="card card-3d reveal delay-6">
            <div class="card-icon">📓</div>
            <h3 class="card-title">Produk Multimedia</h3>
            <p class="card-text">Notebook premium, wedding planner, dan produk multimedia custom dengan desain eksklusif.</p>
          </div>
        </div>
        <div class="text-center reveal" style="margin-top:var(--space-3xl);">
          <a href="/services" class="btn btn-gold nav-internal">Semua Layanan →</a>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="section-dark" id="why-us">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Keunggulan Kami</div>
          <h2 class="section-title shimmer-heading">Mengapa Memilih Kami?</h2>
        </div>
        <div class="grid grid-4">
          <div class="card reveal delay-1" style="text-align:center;">
            <div class="card-icon" style="margin:0 auto var(--space-lg);">✨</div>
            <h4 class="card-title" style="font-size:var(--fs-body);">Premium Quality</h4>
            <p class="card-text">Standar kualitas internasional di setiap proyek</p>
          </div>
          <div class="card reveal delay-2" style="text-align:center;">
            <div class="card-icon" style="margin:0 auto var(--space-lg);">🎯</div>
            <h4 class="card-title" style="font-size:var(--fs-body);">Detail Oriented</h4>
            <p class="card-text">Perhatian mendalam pada setiap detail piksel</p>
          </div>
          <div class="card reveal delay-3" style="text-align:center;">
            <div class="card-icon" style="margin:0 auto var(--space-lg);">🚀</div>
            <h4 class="card-title" style="font-size:var(--fs-body);">Fast Delivery</h4>
            <p class="card-text">Pengerjaan cepat tanpa mengorbankan kualitas</p>
          </div>
          <div class="card reveal delay-4" style="text-align:center;">
            <div class="card-icon" style="margin:0 auto var(--space-lg);">💬</div>
            <h4 class="card-title" style="font-size:var(--fs-body);">24/7 Support</h4>
            <p class="card-text">Dukungan penuh selama dan setelah proyek</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO PREVIEW -->
    <section class="section-gradient" id="portfolio-preview">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Portfolio</div>
          <h2 class="section-title shimmer-heading">Karya Terbaik Kami</h2>
          <p class="section-subtitle">Beberapa proyek unggulan yang telah kami kerjakan.</p>
        </div>
        <div class="portfolio-grid">
          <div class="portfolio-item reveal delay-1">
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#1a1535,#2d1b69);display:flex;align-items:center;justify-content:center;font-size:2rem;color:rgba(212,168,67,0.3);">🌐</div>
            <div class="portfolio-overlay">
              <div class="portfolio-category">Website</div>
              <div class="portfolio-title">Luxury Resort Bali</div>
            </div>
          </div>
          <div class="portfolio-item reveal delay-2">
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#0d1b2a,#1b3a5c);display:flex;align-items:center;justify-content:center;font-size:2rem;color:rgba(212,168,67,0.3);">📱</div>
            <div class="portfolio-overlay">
              <div class="portfolio-category">Mobile App</div>
              <div class="portfolio-title">FinTech Dashboard</div>
            </div>
          </div>
          <div class="portfolio-item reveal delay-3">
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#1a0f0a,#3d2914);display:flex;align-items:center;justify-content:center;font-size:2rem;color:rgba(212,168,67,0.3);">🏢</div>
            <div class="portfolio-overlay">
              <div class="portfolio-category">Company Profile</div>
              <div class="portfolio-title">Elite Property Group</div>
            </div>
          </div>
          <div class="portfolio-item reveal delay-4">
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#0a1a0d,#1a3d1f);display:flex;align-items:center;justify-content:center;font-size:2rem;color:rgba(212,168,67,0.3);">🎨</div>
            <div class="portfolio-overlay">
              <div class="portfolio-category">Branding</div>
              <div class="portfolio-title">Artisan Coffee Co.</div>
            </div>
          </div>
        </div>
        <div class="text-center reveal" style="margin-top:var(--space-3xl);">
          <a href="/portfolio" class="btn btn-outline nav-internal">Lihat Semua →</a>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section-dark" id="testimonials">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Testimoni</div>
          <h2 class="section-title shimmer-heading">Apa Kata Klien Kami</h2>
        </div>
        <div class="testimonial-slider reveal">
          <div class="testimonial-track">
            <div class="testimonial-slide">
              <div class="testimonial-quote">
                <p class="testimonial-text">Studio Abynd menghadirkan website yang jauh melampaui ekspektasi kami. Desainnya sangat premium dan elegan, persis seperti yang kami inginkan untuk brand luxury kami.</p>
                <div class="testimonial-author">Ahmad Rizki</div>
                <div class="testimonial-role">CEO, Elite Property Group</div>
              </div>
            </div>
            <div class="testimonial-slide">
              <div class="testimonial-quote">
                <p class="testimonial-text">Profesionalisme dan kreativitas tim Studio Abynd luar biasa. Mereka tidak hanya membangun website, tapi menciptakan pengalaman digital yang memukau.</p>
                <div class="testimonial-author">Sarah Amelia</div>
                <div class="testimonial-role">Marketing Director, Lumina Brand</div>
              </div>
            </div>
            <div class="testimonial-slide">
              <div class="testimonial-quote">
                <p class="testimonial-text">Aplikasi mobile yang dibangun Studio Abynd sangat smooth dan user-friendly. Rating di app store naik drastis sejak redesign bersama mereka.</p>
                <div class="testimonial-author">Budi Santoso</div>
                <div class="testimonial-role">CTO, FinTech Solutions</div>
              </div>
            </div>
          </div>
          <div class="testimonial-nav">
            <button class="testimonial-dot active" aria-label="Slide 1"></button>
            <button class="testimonial-dot" aria-label="Slide 2"></button>
            <button class="testimonial-dot" aria-label="Slide 3"></button>
          </div>
        </div>
      </div>
    </section>

    <!-- PARTNERS -->
    <section class="section-gradient" id="partners">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Partner Kami</div>
          <h2 class="section-title shimmer-heading">Dipercaya Oleh Brand Terbaik</h2>
        </div>
        <div class="partner-track-wrapper reveal">
          <div class="partner-track">
            <span class="partner-logo">LUMINA</span>
            <span class="partner-logo">NEXUS CORP</span>
            <span class="partner-logo">ELITE GROUP</span>
            <span class="partner-logo">ARTISAN CO</span>
            <span class="partner-logo">VANGUARD</span>
            <span class="partner-logo">PINNACLE</span>
            <span class="partner-logo">AURORA TECH</span>
            <span class="partner-logo">ZENITH</span>
            <span class="partner-logo">LUMINA</span>
            <span class="partner-logo">NEXUS CORP</span>
            <span class="partner-logo">ELITE GROUP</span>
            <span class="partner-logo">ARTISAN CO</span>
            <span class="partner-logo">VANGUARD</span>
            <span class="partner-logo">PINNACLE</span>
            <span class="partner-logo">AURORA TECH</span>
            <span class="partner-logo">ZENITH</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-content container reveal">
        <h2 class="shimmer-heading" style="font-size:var(--fs-h1);">Siap Memulai Proyek Anda?</h2>
        <p>Konsultasikan kebutuhan digital Anda bersama kami dan wujudkan visi yang luar biasa.</p>
        <a href="/contact" class="btn btn-gold btn-lg nav-internal">Mulai Sekarang →</a>
      </div>
    </section>`;
  },

  getMeta() {
    return {
      title: 'Studio Abynd — Premium Digital Agency',
      description: 'Studio Abynd adalah digital agency premium yang menghadirkan solusi website, mobile app, dan multimedia berkelas internasional.',
      keywords: 'digital agency, web development, premium website, company profile, Studio Abynd'
    };
  }
};
