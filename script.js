const dayModeButton = document.getElementById('day-mode');
const nightModeButton = document.getElementById('night-mode');
const container = document.querySelector('.container');
const body = document.body;
const certificationTitle = document.querySelector('.certifications h2');

dayModeButton.addEventListener('click', function() {
    body.classList.remove('dark-mode');
    container.classList.remove('dark-mode');
    certificationTitle.classList.remove('dark-mode');
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.classList.remove('dark-mode');
    });
    dayModeButton.classList.add('active');
    nightModeButton.classList.remove('active');
});

nightModeButton.addEventListener('click', function() {
    body.classList.add('dark-mode');
    container.classList.add('dark-mode');
    certificationTitle.classList.add('dark-mode');
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.classList.add('dark-mode');
    });
    nightModeButton.classList.add('active');
    dayModeButton.classList.remove('active');
});