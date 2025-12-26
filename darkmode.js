const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const toggleSlider = themeToggle.querySelector('.theme-toggle-slider');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    toggleSlider.textContent = '☀️';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        toggleSlider.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        toggleSlider.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});