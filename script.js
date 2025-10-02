document.addEventListener('DOMContentLoaded', () => {

    // Keep existing preloader & cursor light functions...

    // --- ANIMATED COUNTERS ---
    const statNumbers = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target'));
                let currentValue = 0;
                const increment = Math.ceil(targetValue / 100);

                const updateCounter = () => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        target.innerText = targetValue.toLocaleString(); // Add commas for big numbers
                        clearInterval(interval);
                    } else {
                        target.innerText = currentValue.toLocaleString();
                    }
                };
                const interval = setInterval(updateCounter, 20);
                observer.unobserve(target); // Animate only once
            }
        });
    }, { threshold: 0.7 });

    statNumbers.forEach(num => counterObserver.observe(num));

    // --- BENTO CELL CURSOR GLOW EFFECT ---
    const bentoCells = document.querySelectorAll('.bento-cell');
    bentoCells.forEach(cell => {
        cell.addEventListener('mousemove', e => {
            const rect = cell.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cell.style.setProperty('--mouse-x-card', `${x}px`);
            cell.style.setProperty('--mouse-y-card', `${y}px`);
        });
    });

    // --- "DID YOU KNOW" FACT CAROUSEL ---
    const factCards = document.querySelectorAll('.fact-card');
    let currentFactIndex = 0;

    function showNextFact() {
        factCards[currentFactIndex].classList.remove('active');
        currentFactIndex = (currentFactIndex + 1) % factCards.length;
        factCards[currentFactIndex].classList.add('active');
    }

    if (factCards.length > 0) {
        setInterval(showNextFact, 5000); // Change fact every 5 seconds
    }
    
    // Existing scroll reveal & navbar logic...
});
