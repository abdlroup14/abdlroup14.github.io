// 1. Navigasi Sticky (Berubah warna saat di-scroll)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Menu Hamburger Mobile
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenuBtn.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});

// Tutup menu saat link diklik
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});

// 3. Efek Mengetik di Hero Section
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Edukator.", "Problem Solver.", "Inovator.", "Teknisi."]; // SESUAIKAN DISINI
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Kecepatan mengetik
    } else {
        setTimeout(erase, 2000); // Waktu tunggu sebelum menghapus
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Kecepatan menghapus
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 500); // Waktu tunggu sebelum mengetik kata berikutnya
    }
}

document.addEventListener("DOMContentLoaded", function() { // Mulai saat halaman dimuat
    if(typedTextSpan) setTimeout(type, 1000);
});


// 4. Scroll Reveal Animation (Animasi saat elemen muncul di layar)
// Menggunakan Intersection Observer API untuk performa yang lebih baik
const revealElements = document.querySelectorAll('.reveal-text, .reveal-left, .reveal-right, .reveal-up');

const revealOptions = {
    threshold: 0.15, // Elemen harus 15% terlihat sebelum animasi dimulai
    rootMargin: "0px 0px -50px 0px" // Memicu sedikit sebelum elemen benar-benar masuk view bawah
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Hentikan observasi setelah animasi berjalan sekali
        }
    });
}, revealOptions);

revealElements.forEach(element => {
    revealOnScroll.observe(element);
});