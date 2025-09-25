document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for hover effects on cards
    const cards = document.querySelectorAll('.stat-card, .chart-card, .recommendation-card, .about-image img');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 0 30px var(--glow-blue), 0 0 50px rgba(255, 196, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.3)';
        });
    });

    // Function to create floating justice symbols
    function createJusticeSymbol() {
        const symbol = document.createElement('div');
        symbol.classList.add('justice-symbol');
        symbol.textContent = '⚖️';
        document.body.appendChild(symbol);

        const size = Math.random() * 2 + 1;
        symbol.style.fontSize = `${size}rem`;
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        symbol.style.left = `${x}vw`;
        symbol.style.top = `${y}vh`;

        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;
        symbol.style.animationDuration = `${duration}s`;
        symbol.style.animationDelay = `${delay}s`;

        // Remove symbol after animation
        symbol.addEventListener('animationend', () => {
            symbol.remove();
        });
    }

    // Generate a few symbols on page load
    for (let i = 0; i < 5; i++) {
        createJusticeSymbol();
    }
    
    // Periodically add new symbols for continuous effect
    setInterval(createJusticeSymbol, 5000);
});
