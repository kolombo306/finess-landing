document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimations();
    initMobileMenu();
    initScrollAnimations();
    initNavbarScroll();
    initLightbox();
    initGalleryDots();
});

function initHeroAnimations() {
    requestAnimationFrame(() => {
        document.body.classList.add('is-ready');
    });

    const counters = document.querySelectorAll('[data-countup]');
    counters.forEach((el) => {
        el.textContent = '0' + (el.dataset.suffix || '');
    });

    window.setTimeout(() => {
        counters.forEach((el) => animateCount(el));
    }, 450);
}

function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
}

function initScrollAnimations() {
    const items = document.querySelectorAll('.fade-in');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach((el) => observer.observe(el));
}

function animateCount(el) {
    if (el.dataset.counted === 'true') return;
    el.dataset.counted = 'true';

    const target = Number(el.dataset.countup || 0);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        el.textContent = value + suffix;

        if (progress < 1) {
            requestAnimationFrame(tick);
        }
    }

    requestAnimationFrame(tick);
}

function initNavbarScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-dark/95');
        } else {
            nav.classList.remove('bg-dark/95');
        }
    });
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lbImages = [];
    let lbIndex = 0;

    document.querySelectorAll('#gallery-slider [onclick]').forEach((el) => {
        const image = el.querySelector('img');
        if (image) lbImages.push(image.src);
    });

    window.openLightbox = function openLightbox(el) {
        const image = el.querySelector('img');
        if (!image) return;

        const src = image.src;
        lbIndex = lbImages.indexOf(src);
        if (lbIndex === -1) lbIndex = 0;
        showLbImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.lbNav = function lbNav(dir) {
        lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
        showLbImage();
    };

    window.closeLightbox = function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') window.closeLightbox();
        if (e.key === 'ArrowLeft') window.lbNav(-1);
        if (e.key === 'ArrowRight') window.lbNav(1);
    });

    let lbTouchStart = 0;
    lightbox.addEventListener('touchstart', (e) => {
        lbTouchStart = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        const diff = lbTouchStart - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            window.lbNav(diff > 0 ? 1 : -1);
        }
    }, { passive: true });

    function showLbImage() {
        const lightboxImg = document.getElementById('lightbox-img');
        const counter = document.getElementById('lb-counter');
        if (!lightboxImg || !counter) return;

        lightboxImg.src = lbImages[lbIndex];
        counter.textContent = (lbIndex + 1) + ' / ' + lbImages.length;
    }
}

function initGalleryDots() {
    const slider = document.getElementById('gallery-slider');
    const dotsContainer = document.getElementById('gallery-dots');
    if (!slider || !dotsContainer) return;

    const slides = slider.children;
    for (let i = 0; i < slides.length; i += 1) {
        const dot = document.createElement('span');
        dot.className = 'w-2 h-2 rounded-full bg-white/20 transition-colors cursor-pointer';
        if (i === 0) dot.classList.replace('bg-white/20', 'bg-gold');

        dot.addEventListener('click', () => {
            slides[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });

        dotsContainer.appendChild(dot);
    }

    slider.addEventListener('scroll', () => {
        const slideWidth = slides[0].offsetWidth + 12;
        const active = Math.round(slider.scrollLeft / slideWidth);

        dotsContainer.querySelectorAll('span').forEach((dot, i) => {
            dot.className = i === active
                ? 'w-2 h-2 rounded-full bg-gold transition-colors cursor-pointer'
                : 'w-2 h-2 rounded-full bg-white/20 transition-colors cursor-pointer';
        });
    });
}
