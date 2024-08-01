// JavaScript for interactive navigation
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#0044cc'; // Darker background on scroll
            navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.backgroundColor = 'linear-gradient(to right, #007BFF, #00BFFF)';
            navbar.style.boxShadow = 'none';
        }
    });
});
