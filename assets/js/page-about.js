/* ============================================
   STUDIO ABYND — Page Content: About
   ============================================ */

const PageAbout = {
  render() {
    return `
    <section class="page-hero">
      <div class="container">
        <div class="section-label">Tentang Kami</div>
        <h1 class="shimmer-heading">Studio Abynd</h1>
        <p>Digital agency premium yang menghadirkan keunggulan di setiap pixel.</p>
      </div>
    </section>

    <section class="section-dark">
      <div class="container">
        <div class="about-content">
          <div class="reveal-left">
            <div class="about-image-wrap">
              <div style="width:100%;height:100%;background:linear-gradient(135deg,var(--clr-purple-deep),var(--clr-purple-mid));display:flex;align-items:center;justify-content:center;font-size:5rem;color:rgba(212,168,67,0.15);">✦</div>
            </div>
          </div>
          <div class="reveal-right">
            <div class="section-label">Our Story</div>
            <h2 class="section-title shimmer-heading">Dari Passion Menjadi Mahakarya</h2>
            <p style="margin-bottom:var(--space-lg);">Studio Abynd didirikan pada tahun 2021 dengan satu tujuan sederhana namun ambisius: menghadirkan solusi digital berkelas internasional dari Indonesia untuk dunia.</p>
            <p style="margin-bottom:var(--space-lg);">Nama "Abynd" terinspirasi dari kata "beyond" — melampaui batas, melampaui ekspektasi. Kami percaya bahwa setiap proyek adalah kanvas, dan setiap klien layak mendapatkan mahakarya digital yang tak hanya indah di mata, tetapi juga berdampak nyata bagi bisnis mereka.</p>
            <p>Dengan pendekatan yang menggabungkan keahlian teknis, kreativitas tanpa batas, dan obsesi terhadap detail, kami telah membantu 50+ brand mewujudkan visi digital mereka.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="section-gradient">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Filosofi</div>
          <h2 class="section-title shimmer-heading">Prinsip Yang Kami Pegang</h2>
        </div>
        <div class="grid grid-3">
          <div class="philosophy-card reveal delay-1">
            <h3 class="gold-text-static" style="font-size:var(--fs-h3);margin-bottom:var(--space-md);">Excellence</h3>
            <div class="divider"></div>
            <p style="font-size:var(--fs-small);">Kami tidak bekerja untuk standar "cukup bagus". Setiap proyek harus mencerminkan standar kualitas tertinggi yang melampaui ekspektasi.</p>
          </div>
          <div class="philosophy-card reveal delay-2">
            <h3 class="gold-text-static" style="font-size:var(--fs-h3);margin-bottom:var(--space-md);">Innovation</h3>
            <div class="divider"></div>
            <p style="font-size:var(--fs-small);">Kami terus mendorong batas kreativitas dengan mengadopsi teknologi terbaru dan pendekatan desain yang inovatif.</p>
          </div>
          <div class="philosophy-card reveal delay-3">
            <h3 class="gold-text-static" style="font-size:var(--fs-h3);margin-bottom:var(--space-md);">Integrity</h3>
            <div class="divider"></div>
            <p style="font-size:var(--fs-small);">Kejujuran dan transparansi adalah fondasi dari setiap hubungan kami. Kami berkomunikasi dengan jelas dan deliver sesuai janji.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Mission -->
    <section class="section-dark">
      <div class="container">
        <div class="vision-mission-grid">
          <div class="vm-card reveal-left">
            <div class="section-label">Visi</div>
            <h3 class="shimmer-heading" style="font-size:var(--fs-h3);">Visi Kami</h3>
            <div class="divider"></div>
            <p>Menjadi digital agency terdepan di Asia Tenggara yang dikenal karena inovasi, kualitas premium, dan dampak transformatif bagi setiap klien kami.</p>
          </div>
          <div class="vm-card reveal-right">
            <div class="section-label">Misi</div>
            <h3 class="shimmer-heading" style="font-size:var(--fs-h3);">Misi Kami</h3>
            <div class="divider"></div>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:var(--space-sm);">
              <li style="color:var(--clr-text-secondary);font-size:var(--fs-small);">✦ Menghadirkan solusi digital berkelas internasional</li>
              <li style="color:var(--clr-text-secondary);font-size:var(--fs-small);">✦ Memberdayakan bisnis melalui teknologi dan kreativitas</li>
              <li style="color:var(--clr-text-secondary);font-size:var(--fs-small);">✦ Membangun hubungan jangka panjang berbasis kepercayaan</li>
              <li style="color:var(--clr-text-secondary);font-size:var(--fs-small);">✦ Menginspirasi standar baru dalam industri digital Indonesia</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FOUNDERS -->
    <section class="section-gradient" id="founders">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Founder</div>
          <h2 class="section-title shimmer-heading">Di Balik Studio Abynd</h2>
          <p class="section-subtitle">Dua kreator yang berdedikasi menghadirkan keunggulan digital.</p>
        </div>
        <div class="founder-grid">
          <div class="founder-card card-3d reveal delay-1">
            <div class="founder-avatar">
              <div style="width:100%;height:100%;background:linear-gradient(135deg,#2d1b69,#4a1f8e);display:flex;align-items:center;justify-content:center;font-size:2.5rem;">👨‍💻</div>
            </div>
            <h3 class="founder-name gold-text-static">Hisyam Abilkhoir</h3>
            <div class="founder-role">Programmer & Co-Founder</div>
            <p class="card-text" style="margin-bottom:var(--space-lg);">Fullstack developer dengan passion mendalami setiap teknologi web dan mobile. Mengubah ide kompleks menjadi solusi digital yang elegan dan powerful.</p>
            <a href="#" class="founder-link" target="_blank" rel="noopener">🔗 Website Personal</a>
          </div>
          <div class="founder-card card-3d reveal delay-2">
            <div class="founder-avatar">
              <div style="width:100%;height:100%;background:linear-gradient(135deg,#69351b,#8e5a1f);display:flex;align-items:center;justify-content:center;font-size:2.5rem;">🎬</div>
            </div>
            <h3 class="founder-name gold-text-static">Annisa Hanif</h3>
            <div class="founder-role">Content Creator & Video Editor</div>
            <p class="card-text" style="margin-bottom:var(--space-lg);">Kreator konten berbakat dengan kemampuan storytelling visual yang memukau. Menghadirkan narasi brand yang autentik melalui multimedia premium.</p>
            <a href="#" class="founder-link" target="_blank" rel="noopener">🔗 Website Personal</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-content container reveal">
        <h2 class="shimmer-heading" style="font-size:var(--fs-h1);">Mari Berkolaborasi</h2>
        <p>Ceritakan visi Anda dan biarkan kami mewujudkannya menjadi karya digital yang luar biasa.</p>
        <a href="/contact" class="btn btn-gold btn-lg nav-internal">Hubungi Kami →</a>
      </div>
    </section>`;
  },

  getMeta() {
    return {
      title: 'About — Studio Abynd',
      description: 'Kenali lebih dekat Studio Abynd, digital agency premium Indonesia. Visi, misi, filosofi, dan tim founder kami.',
      keywords: 'about studio abynd, digital agency Indonesia, founder, visi misi'
    };
  }
};
