document.addEventListener('DOMContentLoaded', () => {
    // 1. Enhanced Hover Effects (Now managed primarily by CSS, keeping JS minimal)
    const cards = document.querySelectorAll('.stat-card, .chart-card, .recommendation-card');
    // We can still use JS to add/remove a special class if a more complex animation is needed,
    // but for now, the CSS handles the slick translateY and glow on :hover.

    // 2. Continuous Floating Symbols (Enhanced)
    function createJusticeSymbol() {
        const symbol = document.createElement('div');
        symbol.classList.add('justice-symbol');
        
        // Use a more abstract, high-tech icon or character
        const symbols = ['\u25b2', '\u25c6', '0', '1']; // Triangle, Diamond, Binary
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        document.body.appendChild(symbol);

        const size = Math.random() * 1.5 + 1; // Smaller, more subtle size
        symbol.style.fontSize = `${size}rem`;
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        symbol.style.left = `${x}vw`;
        symbol.style.top = `${y}vh`;

        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        symbol.style.animationDuration = `${duration}s`;
        symbol.style.animationDelay = `${delay}s`;

        // Remove symbol after a long time
        setTimeout(() => {
            symbol.remove();
        }, duration * 1000 + 500); 
    }

    // Generate a good number of initial symbols for ambiance
    for (let i = 0; i < 15; i++) {
        createJusticeSymbol();
    }
    
    // Periodically add new symbols for continuous effect
    setInterval(createJusticeSymbol, 3000); 
});
