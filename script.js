const modeSwitch = document.getElementById('mode-switch');
const container = document.querySelector('.container');
const body = document.body;
const certificationTitle = document.querySelector('.certifications h2');

modeSwitch.addEventListener('change', function() {
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    certificationTitle.classList.toggle('dark-mode');

    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.classList.toggle('dark-mode');
    });
});