# Modern Developer Portfolio - Raul Danovan Harahap

Portofolio web modern, responsif, dan interaktif yang dibangun menggunakan **HTML5 Semantic**, **Tailwind CSS (CDN)**, **Vanilla JavaScript**, **Font Awesome Icons**, dan **Google Fonts Inter**. 

Desain mengusung tema **Dark Mode Futuristik** (`#090d16` / `#0b0f19`) dengan aksen glowing neon Cyan & Emerald serta efek interaktif **3D Tilt Card dengan Glare Reflection** murni Vanilla JS.

---

## 📁 Struktur Direktori & File Proyek

```
my-portfolio/ (atau c:/laragon/www/porto folio/)
├── index.html              # Struktur semantic HTML lengkap & komentar konfigurasi
├── assets/
│   ├── css/
│   │   └── style.css       # Kustom efek neon glow, keyframe animasi, 3D tilt, & scrollbar
│   ├── js/
│   │   ├── main.js         # Navigasi, mobile navbar toggle, smooth scroll, copy email toast
│   │   └── tilt-card.js    # Logika Vanilla JS 3D Tilt dinamis & pantulan cahaya (glare)
│   └── img/
│       ├── profile.jpg     # Foto profil Raul Danovan Harahap (dengan auto fallback)
│       └── projects/       # Screenshot demo banner tiap proyek (Rasio 16:9)
│           ├── dumas-yu.png
│           ├── reang-app.png
│           ├── rekam-medis.png
│           ├── apotek-kasir.png
│           └── ratna-cake.png
└── README.md               # Panduan penggunaan & kustomisasi
```

---

## 🚀 Cara Menjalankan Proyek

Portofolio ini dibangun murni di sisi front-end (*zero build tools required*), sehingga sangat fleksibel:

### Opsi 1: Lewat Laragon (Rekomendasi)
Karena proyek ini sudah berada di dalam direktori `c:\laragon\www\porto folio`:
1. Buka aplikasi **Laragon**.
2. Klik tombol **"Start All"** (Apache & MySQL).
3. Buka browser dan akses salah satu alamat berikut:
   - `http://porto-folio.test`
   - atau `http://localhost/porto%20folio/`

### Opsi 2: Buka Langsung di Browser
- Klik kanan file `index.html` > Pilih **"Open with"** > Pilih browser favorit Anda (Chrome, Edge, Firefox).

### Opsi 3: Menggunakan VS Code Live Server
- Buka folder di VS Code, klik kanan pada `index.html` dan pilih **"Open with Live Server"**.

---

## 🛠️ Panduan Kustomisasi & Penggantian Data

Setiap bagian URL dan gambar pada `index.html` telah dilengkapi komentar pembatas khusus (`<!-- GANTI ... DI SINI -->`) agar sangat mudah Anda temukan:

### 1. Mengganti Foto Profil
1. Siapkan foto Anda (disarankan foto rasio 1:1 / persegi, format `.jpg` atau `.png`).
2. Timpa/ganti file:
   ```
   assets/img/profile.jpg
   ```
3. Jika ingin memakai URL gambar online, buka `index.html`, cari baris tag `<img>` pada Hero Section, lalu ubah atribut `src` dan `onerror`.

### 2. Mengganti Gambar Banner & Link 5 Proyek
Banner proyek berada di dalam folder `assets/img/projects/` dengan rasio ideal **16:9**:
1. **Dumas-yu**: `assets/img/projects/dumas-yu.png`
2. **Reang App**: `assets/img/projects/reang-app.png`
3. **Sistem Rekam Medis Elektronik (RME)**: `assets/img/projects/rekam-medis.png`
4. **Apotek Kasir & Manajemen Stok Obat**: `assets/img/projects/apotek-kasir.png`
5. **E-Commerce Ratna Cake**: `assets/img/projects/ratna-cake.png`

Untuk mengganti tautan **Live Demo** dan **GitHub Repository**, buka `index.html` dan cari bagian Proyek:
```html
<!-- Contoh pada Kartu Proyek: -->
<a href="https://your-demo-url.com" target="_blank" rel="noopener noreferrer">
  <span>Live Demo</span>
</a>

<a href="https://github.com/yourusername/dumas-yu" target="_blank" rel="noopener noreferrer">
  <span>GitHub</span>
</a>
```
Ganti `https://your-demo-url.com` dan `https://github.com/yourusername/...` dengan URL asli Anda.

### 3. Mengganti Kontak (WhatsApp & Email)
Cari tautan kontak di `index.html`:
- **WhatsApp**:
  ```html
  href="https://wa.me/6285860814756?text=Halo%20Raul..."
  ```
- **Email**:
  ```html
  href="mailto:raulharahap776@gmail.com"
  ```
- **Fungsi Salin Email**:
  ```javascript
  copyToClipboard('raulharahap776@gmail.com')
  ```

### 4. Menyesuaikan Efek 3D Tilt Card
Jika ingin mengatur sensitivitas kemiringan atau pantulan cahaya kartu proyek, buka file `assets/js/tilt-card.js`:
```javascript
const DEFAULT_OPTIONS = {
  maxTilt: 12,        // Derajat kemiringan kartu (default: 12)
  perspective: 1000,  // Kedalaman perspektif 3D
  scale: 1.025,       // Skala zoom halus saat disentuh mouse
  speed: 300,         // Kecepatan transisi kembali
  glare: true,        // Efek pantulan cahaya
  maxGlare: 0.25      // Intensitas pantulan cahaya
};
```

---

## 🎨 Spesifikasi Teknologi yang Digunakan
- **HTML5 Semantic**: Struktur standar W3C yang SEO-friendly dan ramah aksesibilitas.
- **Tailwind CSS 3.x via CDN**: Utility-first CSS dengan custom configuration tema gelap.
- **Vanilla JavaScript**: Tanpa dependensi eksternal berat (No jQuery / No external tilt libs), performa 60 FPS murni.
- **Font Awesome 6.5.1 CDN**: Koleksi ikon developer & media sosial terlengkap.
- **Google Fonts Inter**: Tipografi sans-serif modern standar industri software internasional.

---

## 📄 Lisensi & Hak Cipta
Hak Cipta &copy; 2026 **Raul Danovan Harahap**. Didesain & dikembangkan untuk kebutuhan portofolio profesional Full-Stack Web & Mobile Developer.
