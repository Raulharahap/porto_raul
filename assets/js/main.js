/**
 * ==========================================================================
 * MAIN.JS - Logika Navigasi, Interaktivitas, & Efek UI Portofolio
 * Portfolio: Raul Danovan Harahap
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. MOBILE MENU TOGGLE
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('main-navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.toggle('fa-xmark');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. NAVBAR BLUR ON SCROLL & BACK TO TOP
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar background effect
    if (scrollY > 50) {
      navbar.classList.add('py-3', 'shadow-lg', 'bg-[#090d16]/95', 'border-slate-800/80');
      navbar.classList.remove('py-5', 'bg-[#090d16]/70', 'border-transparent');
    } else {
      navbar.classList.add('py-5', 'bg-[#090d16]/70', 'border-transparent');
      navbar.classList.remove('py-3', 'shadow-lg', 'bg-[#090d16]/95', 'border-slate-800/80');
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.replace('opacity-0', 'opacity-100');
        backToTopBtn.classList.replace('translate-y-4', 'translate-y-0');
        backToTopBtn.classList.replace('pointer-events-none', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.replace('opacity-100', 'opacity-0');
        backToTopBtn.classList.replace('translate-y-0', 'translate-y-4');
        backToTopBtn.classList.replace('pointer-events-auto', 'pointer-events-none');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // --------------------------------------------------------------------------
  // 3. ADVANCED SCROLL REVEAL (Animasi Muncul Halus)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // --------------------------------------------------------------------------
  // 4. ACTIVE LINK HIGHLIGHTING (PERBAIKAN FITUR PELACAKAN SCROLL)
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id], footer[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    // Pengaturan ini membuat link berubah biru saat bagian (section) tepat berada di tengah layar
    const navObserverOptions = { root: null, rootMargin: '-40% 0px -50% 0px', threshold: 0 };

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');

          // Reset styling ke default (abu-abu)
          desktopLinks.forEach(link => {
            link.classList.remove('text-cyan-400', 'font-semibold', 'glow-text-cyan');
            link.classList.add('text-slate-400');
            // Jika id cocok, tambahkan efek biru & menyala
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('text-cyan-400', 'font-semibold', 'glow-text-cyan');
              link.classList.remove('text-slate-400');
            }
          });

          // Mobile styling tracking
          mobileLinks.forEach(link => {
            link.classList.remove('text-cyan-400', 'bg-cyan-950/30', 'border', 'border-cyan-800/30');
            link.classList.add('text-slate-300');
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('text-cyan-400', 'bg-cyan-950/30', 'border', 'border-cyan-800/30');
              link.classList.remove('text-slate-300');
            }
          });
        }
      });
    }, navObserverOptions);

    sections.forEach(sec => navObserver.observe(sec));
  }

  // --------------------------------------------------------------------------
  // 5. COPY TO CLIPBOARD TOAST
  // --------------------------------------------------------------------------
  window.copyToClipboard = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => showToastMessage());
    } else {
      // Fallback
      const temp = document.createElement('input');
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
      showToastMessage();
    }
  };

  function showToastMessage() {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle text-cyan-400"></i><span>Email berhasil disalin!</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
});

// --------------------------------------------------------------------------
// 6. IMAGE MODAL / LIGHTBOX (Sertifikat Preview)
// --------------------------------------------------------------------------
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
const certTriggers = document.querySelectorAll('.cert-trigger');

if (modal && modalImg && certTriggers.length > 0) {

  // Fungsi Buka Modal
  const openModal = (src) => {
    modalImg.src = src; // Ambil src gambar yang di-klik
    modal.classList.remove('hidden');

    // Trigger reflow agar animasi CSS jalan
    void modal.offsetWidth;

    modal.classList.remove('opacity-0');
    modalImg.classList.remove('scale-95');
    modalImg.classList.add('scale-100');

    // Kunci layar agar background tidak bisa di-scroll
    document.body.style.overflow = 'hidden';
  };

  // Fungsi Tutup Modal
  const closeModal = () => {
    modal.classList.add('opacity-0');
    modalImg.classList.remove('scale-100');
    modalImg.classList.add('scale-95');

    // Buka kunci layar scroll
    document.body.style.overflow = '';

    // Sembunyikan elemen setelah animasi selesai (300ms)
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  };

  // Pasang Event Listener ke semua gambar sertifikat
  certTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      openModal(trigger.src);
    });
  });

  // Pasang Event Listener untuk menutup modal
  modalClose.addEventListener('click', closeModal); // Klik tombol X
  modalBackdrop.addEventListener('click', closeModal); // Klik area luar

  // Tutup menggunakan tombol Escape di keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}