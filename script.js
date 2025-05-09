// Simple JavaScript for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            document.querySelectorAll('.main-content').forEach(section => {
                section.classList.add('hidden');
            });
            targetElement.classList.remove('hidden');
        }
    });
});

// Show home section by default
const homeSection = document.getElementById('home');
if (homeSection) {
    homeSection.classList.remove('hidden');
}