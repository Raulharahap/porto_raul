/**
 * ==========================================================================
 * TILT-CARD.JS - 3D Tilt Effect (Revisi: Super Smooth, Anti-Jitter, & Nyaman Diklik)
 * Portfolio: Raul Danovan Harahap
 * ==========================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const tiltWrappers = document.querySelectorAll('.tilt-card-wrapper');

  // Deteksi hanya mematikan efek jika perangkat BENAR-BENAR HP (tidak punya kursor mouse).
  // Laptop Windows yang punya layar sentuh tetap akan menjalankan efek ini.
  const canHover = window.matchMedia('(hover: hover)').matches;
  if (!canHover) return;

  tiltWrappers.forEach(wrapper => {
    const card = wrapper.querySelector('.tilt-card');
    if (!card) return;

    // Buat elemen pantulan cahaya (Glare) secara dinamis
    let glare = card.querySelector('.tilt-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'tilt-glare';
      card.appendChild(glare);
    }

    // Event ketika mouse bergerak di dalam kartu
    wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // BATAS KEMIRINGAN DITURUNKAN KE 4 DERAJAT
      // Agar efek 3D tetap elegan tapi tombol tidak lari saat mau diklik
      const maxRotate = 4;

      const rotateX = ((y - centerY) / centerY) * -maxRotate;
      const rotateY = ((x - centerX) / centerX) * maxRotate;

      // Putar kartu (sedikit zoom out 1.01 agar lebih halus)
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;

      // Posisi pantulan cahaya mengikuti kursor
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.12) 0%, transparent 60%)`;
    });

    // Event ketika mouse keluar dari kartu
    wrapper.addEventListener('mouseleave', () => {
      // Kembalikan kartu ke posisi datar (0 derajat) dengan mulus
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      glare.style.opacity = '0';
    });
  });
});