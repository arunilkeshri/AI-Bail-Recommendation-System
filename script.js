// Wrap everything in a DOMContentLoaded listener to ensure the HTML is loaded first
window.addEventListener('DOMContentLoaded', () => {

    // --- 1. GLOBAL & SITE-WIDE LOGIC ---

    // Preloader Logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        });
    }

    // Smooth Page Transition Logic
    document.body.style.opacity = 1; // Ensure body is visible on load
    const allLinks = document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])');
    allLinks.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 400);
            }
        });
    });

    // Active Navbar Link Highlighting
    const navLinks = document.querySelectorAll('.navbar nav a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    if(currentPath){
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }


    // On-Scroll Reveal Animations
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-scroll-reveal]').forEach(el => {
        scrollObserver.observe(el);
    });
    
    // --- 2. PAGE-SPECIFIC LOGIC ---

    // --- SCRIPT FOR: dashboard.html ---
    if (document.getElementById('casesChart')) {
        // Chart.js Default Styling
        Chart.defaults.color = 'rgba(224, 230, 255, 0.8)';
        Chart.defaults.borderColor = 'rgba(60, 65, 85, 0.8)';

        // Cases Per Day Chart (Line)
        const casesCtx = document.getElementById('casesChart').getContext('2d');
        new Chart(casesCtx, {
            type: 'line',
            data: {
                labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
                datasets: [{
                    label: 'Cases Processed',
                    data: [120, 190, 150, 250, 220, 300, 280],
                    borderColor: '#00bfff',
                    backgroundColor: 'rgba(0, 191, 255, 0.2)',
                    fill: true,
                    tension: 0.4
                }]
            }
        });

        // Recommendation Distribution (Doughnut)
        const distCtx = document.getElementById('distributionChart').getContext('2d');
        new Chart(distCtx, {
            type: 'doughnut',
            data: {
                labels: ['Recommended', 'Denied', 'Pending Review'],
                datasets: [{
                    data: [65, 25, 10],
                    backgroundColor: ['#00bfff', '#ff5555', '#ffc107'],
                    borderWidth: 0,
                }]
            }
        });

        // Risk Factor Analysis (Bar)
        const riskCtx = document.getElementById('riskFactorChart').getContext('2d');
        new Chart(riskCtx, {
            type: 'bar',
            data: {
                labels: ['Prior Offenses', 'Flight Risk', 'Community Ties', 'Employment'],
                datasets: [{
                    label: 'Influence on Decision',
                    data: [85, 70, 40, 55],
                    backgroundColor: 'rgba(0, 191, 255, 0.5)',
                }]
            },
            options: { indexAxis: 'y' }
        });
        
        // Live Activity Log
        const activityLog = document.querySelector('.activity-log');
        const activities = [
            "Analyzed Case #9C1F8A...",
            "System model re-calibrated.",
            "Recommendation generated for J. Doe.",
            "High-risk alert triggered for Case #A4B3D1.",
            "Data ingestion complete from District 5."
        ];
        let activityIndex = 0;
        if(activityLog) {
            setInterval(() => {
                if (activityLog.children.length > 5) {
                    activityLog.removeChild(activityLog.lastChild);
                }
                const li = document.createElement('li');
                li.textContent = `[${new Date().toLocaleTimeString()}] ${activities[activityIndex]}`;
                activityLog.prepend(li);
                activityIndex = (activityIndex + 1) % activities.length;
            }, 3000);
        }
    }

    // --- SCRIPT FOR: cases.html ---
    if (document.querySelector('.datagrid-container')) {
        const casesData = [
            { id: '8B3D4F', name: 'John Doe', date: '2025-09-28', status: 'Recommended', details: 'Low flight risk, strong community ties.' },
            { id: 'A4B3D1', name: 'Jane Smith', date: '2025-09-27', status: 'Denied', details: 'Multiple prior offenses for similar charges.' },
            { id: 'C9E2A7', name: 'Peter Jones', date: '2025-09-27', status: 'Pending', details: 'Awaiting psych evaluation results.' },
            { id: 'F1G8H2', name: 'Mary Johnson', date: '2025-09-26', status: 'Recommended', details: 'First-time offender, stable employment.' },
            { id: 'K5L3M9', name: 'David Miller', date: '2025-09-25', status: 'Denied', details: 'Previous failure to appear in court.' },
            { id: 'P2Q7R4', name: 'Susan Wilson', date: '2025-09-24', status: 'Recommended', details: 'Non-violent offense, has dependents.' },
        ];

        const tableBody = document.getElementById('caseTableBody');
        const searchInput = document.getElementById('searchInput');
        const modal = document.getElementById('caseModal');
        const modalBody = document.getElementById('modalBody');
        const closeModal = document.querySelector('.modal-close');

        const renderTable = (data) => {
            if(!tableBody) return;
            tableBody.innerHTML = '';
            data.forEach(caseItem => {
                const row = document.createElement('tr');
                // Note: a simple status-tag class for basic styling
                row.innerHTML = `
                    <td>${caseItem.id}</td>
                    <td>${caseItem.name}</td>
                    <td>${caseItem.date}</td>
                    <td><span class="status-tag status-${caseItem.status.toLowerCase()}">${caseItem.status}</span></td>
                    <td><button class="action-btn" data-id="${caseItem.id}">View Details</button></td>
                `;
                tableBody.appendChild(row);
            });
        };
        
        renderTable(casesData);

        if(searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredData = casesData.filter(item => 
                    item.name.toLowerCase().includes(searchTerm) || 
                    item.id.toLowerCase().includes(searchTerm)
                );
                renderTable(filteredData);
            });
        }
        
        if(tableBody) {
            tableBody.addEventListener('click', (e) => {
                if (e.target.classList.contains('action-btn')) {
                    const caseId = e.target.getAttribute('data-id');
                    const caseDetails = casesData.find(item => item.id === caseId);
                    modalBody.innerHTML = `
                        <h2>Case Details: ${caseDetails.id}</h2>
                        <p><strong>Defendant:</strong> ${caseDetails.name}</p>
                        <p><strong>Date Filed:</strong> ${caseDetails.date}</p>
                        <p><strong>Status:</strong> ${caseDetails.status}</p>
                        <hr>
                        <p><strong>AI Analysis Summary:</strong></p>
                        <p>${caseDetails.details}</p>
                    `;
                    modal.style.display = 'block';
                }
            });
        }

        if(closeModal) {
            closeModal.onclick = () => modal.style.display = "none";
        }
        window.onclick = (e) => {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});
