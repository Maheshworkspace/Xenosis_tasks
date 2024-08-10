// Responsive navigation menu toggle
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});
