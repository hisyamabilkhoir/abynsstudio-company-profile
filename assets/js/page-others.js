/* ============================================
   STUDIO ABYND — Pages: Portfolio, Blog, Awards, Contact
   ============================================ */

const PagePortfolio = {
  render() {
    const projects = [
      { title:'Luxury Resort Bali', cat:'web', color:'#1a1535,#2d1b69', icon:'🌐' },
      { title:'FinTech Dashboard', cat:'mobile', color:'#0d1b2a,#1b3a5c', icon:'📱' },
      { title:'Elite Property Group', cat:'web', color:'#1a0f0a,#3d2914', icon:'🏢' },
      { title:'Artisan Coffee Co.', cat:'branding', color:'#0a1a0d,#1a3d1f', icon:'🎨' },
      { title:'Wellness App', cat:'mobile', color:'#1a0a2e,#3d1b69', icon:'💆' },
      { title:'Fashion E-Commerce', cat:'web', color:'#2a0d1b,#5c1b3a', icon:'👗' },
      { title:'Wedding Invitation Suite', cat:'multimedia', color:'#1a150a,#3d3014', icon:'💍' },
      { title:'Corporate Annual Report', cat:'multimedia', color:'#0a0f1a,#142a3d', icon:'📊' },
      { title:'Restaurant Brand Identity', cat:'branding', color:'#1a0a0a,#3d1414', icon:'🍽️' },
    ];
    const items = projects.map((p,i) => `
      <div class="portfolio-item reveal delay-${(i%4)+1}" data-category="${p.cat}">
        <div style="width:100%;height:100%;background:linear-gradient(135deg,${p.color});display:flex;align-items:center;justify-content:center;font-size:2.5rem;color:rgba(212,168,67,0.25);">${p.icon}</div>
        <div class="portfolio-overlay">
          <div class="portfolio-category">${p.cat}</div>
          <div class="portfolio-title">${p.title}</div>
        </div>
      </div>`).join('');

    return `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">Portfolio</div>
        <h1 class="shimmer-heading">Karya Kami</h1>
        <p>Koleksi proyek pilihan yang mencerminkan standar kualitas kami.</p>
      </div>
    </section>
    <section class="section-dark">
      <div class="container">
        <div class="portfolio-filter reveal">
          <button class="filter-btn active" data-filter="all">Semua</button>
          <button class="filter-btn" data-filter="web">Website</button>
          <button class="filter-btn" data-filter="mobile">Mobile</button>
          <button class="filter-btn" data-filter="branding">Branding</button>
          <button class="filter-btn" data-filter="multimedia">Multimedia</button>
        </div>
        <div class="portfolio-grid">${items}</div>
      </div>
    </section>
    <section class="cta-section">
      <div class="cta-content container reveal">
        <h2 class="shimmer-heading" style="font-size:var(--fs-h1);">Ingin Melihat Lebih?</h2>
        <p>Hubungi kami untuk portofolio lengkap dan studi kasus detail.</p>
        <a href="contact" class="btn btn-gold btn-lg nav-internal">Hubungi Kami →</a>
      </div>
    </section>`;
  },
  getMeta() {
    return {
      title: 'Portfolio — Studio Abynd',
      description: 'Lihat koleksi proyek premium Studio Abynd: website, mobile app, branding, dan multimedia.',
      keywords: 'portfolio, web design, mobile app, branding, Studio Abynd'
    };
  }
};

/* ============================================ */
const blogArticles = [
  {
    slug: 'pentingnya-branding-digital',
    title: 'Pentingnya Branding untuk Bisnis di Era Digital',
    excerpt: 'Di era digital yang serba cepat ini, branding bukan lagi sekadar logo atau warna. Ini adalah tentang bagaimana bisnis Anda dirasakan dan diingat oleh audiens.',
    date: '15 Maret 2026',
    tag: 'Branding',
    color: '#1a0a2e,#3d1b69'
  },
  {
    slug: 'tren-desain-website-2026',
    title: 'Tren Desain Website 2026 yang Wajib Diketahui',
    excerpt: 'Dari glassmorphism hingga 3D immersive experience, tahun 2026 membawa tren desain website yang semakin bold dan interaktif.',
    date: '28 Februari 2026',
    tag: 'Design',
    color: '#0d1b2a,#1b3a5c'
  },
  {
    slug: 'company-profile-digital-vs-brosur',
    title: 'Mengapa Company Profile Digital Lebih Efektif dari Brosur',
    excerpt: 'Brosur fisik memiliki keterbatasan. Company profile digital memberikan pengalaman interaktif, jangkauan luas, dan ROI yang lebih terukur.',
    date: '10 Februari 2026',
    tag: 'Business',
    color: '#1a0f0a,#3d2914'
  }
];

const PageBlog = {
  render() {
    const cards = blogArticles.map((a,i) => `
      <a href="blog/${a.slug}" class="blog-card reveal delay-${i+1} nav-internal" style="text-decoration:none;">
        <div class="blog-card-image">
          <div style="width:100%;height:100%;background:linear-gradient(135deg,${a.color});display:flex;align-items:center;justify-content:center;font-size:2rem;color:rgba(212,168,67,0.2);">📝</div>
        </div>
        <div class="blog-card-body">
          <div class="blog-card-meta">
            <span class="tag">${a.tag}</span>
            <span>${a.date}</span>
          </div>
          <h3 class="blog-card-title">${a.title}</h3>
          <p class="blog-card-excerpt">${a.excerpt}</p>
          <span class="blog-read-more">Baca Selengkapnya →</span>
        </div>
      </a>`).join('');

    return `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">Blog</div>
        <h1 class="shimmer-heading">Insight & Artikel</h1>
        <p>Pemikiran, tren, dan insight dari tim Studio Abynd.</p>
      </div>
    </section>
    <section class="section-dark">
      <div class="container">
        <div class="blog-grid">${cards}</div>
      </div>
    </section>`;
  },
  getMeta() {
    return {
      title: 'Blog — Studio Abynd',
      description: 'Baca insight, tips, dan tren digital terbaru dari tim Studio Abynd.',
      keywords: 'blog, digital marketing, design tips, web development, Studio Abynd'
    };
  }
};

/* ============================================ */
const PageAwards = {
  render() {
    const awards = [
      { icon:'🏆', year:'2025', title:'Best Digital Agency', org:'Indonesia Web Awards' },
      { icon:'⭐', year:'2025', title:'Top 10 Creative Studio', org:'Creative Asia Summit' },
      { icon:'🎖️', year:'2024', title:'Excellence in Web Design', org:'Digital Excellence Awards' },
      { icon:'🥇', year:'2024', title:'Innovation in Digital Media', org:'TechMedia Awards' },
      { icon:'🏅', year:'2024', title:'Best UI/UX Design', org:'Design Awards Indonesia' },
      { icon:'💎', year:'2023', title:'Rising Star Agency', org:'Startup & Agency Awards' },
      { icon:'🌟', year:'2023', title:'Best Client Satisfaction', org:'Service Excellence Awards' },
      { icon:'👑', year:'2023', title:'Premium Branding Award', org:'Brand Identity Awards' },
    ];
    const cards = awards.map((a,i) => `
      <div class="award-card reveal delay-${(i%4)+1}">
        <div class="award-icon">${a.icon}</div>
        <div class="award-year">${a.year}</div>
        <h3 class="award-title">${a.title}</h3>
        <p class="award-org">${a.org}</p>
      </div>`).join('');

    return `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">Penghargaan</div>
        <h1 class="shimmer-heading">Awards & Recognition</h1>
        <p>Pengakuan atas dedikasi kami dalam menghadirkan keunggulan digital.</p>
      </div>
    </section>
    <section class="section-dark">
      <div class="container">
        <div class="awards-grid">${cards}</div>
      </div>
    </section>
    <section class="cta-section">
      <div class="cta-content container reveal">
        <h2 class="shimmer-heading" style="font-size:var(--fs-h1);">Jadilah Project Berikutnya</h2>
        <p>Proyek Anda bisa menjadi karya pemenang penghargaan berikutnya.</p>
        <a href="contact" class="btn btn-gold btn-lg nav-internal">Mulai Proyek →</a>
      </div>
    </section>`;
  },
  getMeta() {
    return {
      title: 'Awards — Studio Abynd',
      description: 'Penghargaan dan pengakuan yang diraih Studio Abynd dalam industri digital.',
      keywords: 'awards, penghargaan, digital agency awards, Studio Abynd'
    };
  }
};

/* ============================================ */
const PageContact = {
  render() {
    return `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">Kontak</div>
        <h1 class="shimmer-heading">Hubungi Kami</h1>
        <p>Siap untuk memulai proyek luar biasa bersama? Kami mendengarkan.</p>
      </div>
    </section>
    <section class="section-dark">
      <div class="container">
        <div class="contact-grid">
          <div class="reveal-left">
            <h2 class="shimmer-heading" style="font-size:var(--fs-h3);margin-bottom:var(--space-xl);">Kirim Pesan</h2>
            <form id="contact-form" onsubmit="return false;">
              <div class="grid grid-2" style="gap:var(--space-lg);">
                <div class="form-group">
                  <label class="form-label" for="name">Nama Lengkap</label>
                  <input type="text" id="name" class="form-control" placeholder="John Doe" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="email">Email</label>
                  <input type="email" id="email" class="form-control" placeholder="john@example.com" required>
                </div>
              </div>
              <div class="grid grid-2" style="gap:var(--space-lg);">
                <div class="form-group">
                  <label class="form-label" for="phone">Telepon</label>
                  <input type="tel" id="phone" class="form-control" placeholder="+62 812 3456 789">
                </div>
                <div class="form-group">
                  <label class="form-label" for="subject">Subjek</label>
                  <input type="text" id="subject" class="form-control" placeholder="Project Website">
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="message">Pesan</label>
                <textarea id="message" class="form-control" placeholder="Ceritakan tentang proyek Anda..." required></textarea>
              </div>
              <button type="submit" class="btn btn-gold btn-lg" style="width:100%;">Kirim Pesan →</button>
            </form>
          </div>
          <div class="reveal-right">
            <h2 class="shimmer-heading" style="font-size:var(--fs-h3);margin-bottom:var(--space-xl);">Informasi Kontak</h2>
            <div class="contact-info-item">
              <div class="contact-info-icon">📍</div>
              <div class="contact-info-text">
                <h4>Alamat</h4>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">📧</div>
              <div class="contact-info-text">
                <h4>Email</h4>
                <p>hello@studioabynd.com</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">📱</div>
              <div class="contact-info-text">
                <h4>WhatsApp</h4>
                <p>+62 812 3456 789</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">⏰</div>
              <div class="contact-info-text">
                <h4>Jam Kerja</h4>
                <p>Senin - Jumat, 09:00 - 18:00 WIB</p>
              </div>
            </div>
            <div class="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295085552!2d106.68943050000001!3d-6.229386699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1" title="Studio Abynd Location" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  },
  getMeta() {
    return {
      title: 'Contact — Studio Abynd',
      description: 'Hubungi Studio Abynd untuk konsultasi proyek digital Anda. Form kontak, WhatsApp, dan lokasi kami.',
      keywords: 'contact, hubungi kami, konsultasi, Studio Abynd, digital agency'
    };
  }
};
