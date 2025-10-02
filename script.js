document.addEventListener('DOMContentLoaded', () => {

    // --- PRELOADER ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('hidden');
    });

    // --- MOUSE-TRACKING SPOTLIGHT EFFECT ---
    const cursorLight = document.querySelector('.cursor-light');
    document.addEventListener('mousemove', (e) => {
        // Use requestAnimationFrame for performance
        requestAnimationFrame(() => {
            cursorLight.style.setProperty('--mouse-x', e.clientX + 'px');
            cursorLight.style.setProperty('--mouse-y', e.clientY + 'px');
        });
    });

    // --- HERO TITLE LETTER-BY-LETTER ANIMATION ---
    const heroTitleSpans = document.querySelectorAll('.hero-title span');
    heroTitleSpans.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, 100 * index + 500); // Start after preloader fades
    });

    // --- ON-SCROLL REVEAL ANIMATION ---
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: stop observing once revealed to save resources
                revealObserver.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- ACTIVE NAVBAR LINK HIGHLIGHTING ---
    const navLinks = document.querySelectorAll('.navbar nav a');
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
