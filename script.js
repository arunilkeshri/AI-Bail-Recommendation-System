// Wrap everything in a DOMContentLoaded listener
window.addEventListener('DOMContentLoaded', () => {

    // --- 1. GLOBAL & SITE-WIDE LOGIC ---

    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        });
    }

    // Page Transitions
    const allLinks = document.querySelectorAll('a:not([href^="#"])');
    allLinks.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            // Check if it's a valid, non-external link
            if (href && !href.startsWith('http') && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 400);
            }
        });
    });

    // Active Navbar Link
    const navLinks = document.querySelectorAll('.navbar nav a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
    
    // Other global effects (cursor, scroll reveal) from previous version...
    

    // --- 2. PAGE-SPECIFIC LOGIC ---
    // We check for a unique element on each page to run its specific code.

    // --- DASHBOARD SCRIPT ---
    if (document.getElementById('casesChart')) {
        // Chart.js implementation...
        // Live activity log implementation...
    }

    // --- CASES PAGE SCRIPT ---
    if (document.querySelector('.datagrid-container')) {
        // Dummy data for cases
        const casesData = [
            // Array of case objects: {id, name, date, status, details}
        ];
        // Functions for sorting, searching, pagination, and modal logic...
    }

    // --- RECOMMENDATIONS PAGE SCRIPT ---
    if (document.getElementById('recommendationsGrid')) {
        // Dummy data for recommendations
        const recommendationsData = [
             // Array of recommendation objects
        ];
        // Functions for filtering and rendering cards...
    }

    // --- CONTACT PAGE SCRIPT ---
    if (document.getElementById('contactForm')) {
        // Form validation logic...
    }
    
});
