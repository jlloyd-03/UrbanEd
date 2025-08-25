const burger = document.querySelector('.burger');
const navRight = document.querySelector('.nav-right');
const overlay = document.querySelector('.overlay');

// Toggle sidebar + overlay
burger.addEventListener('click', () => {
    navRight.classList.toggle('active');
    burger.classList.toggle('open');
    overlay.classList.toggle('show');
});

// Close sidebar when clicking overlay
overlay.addEventListener('click', () => {
    navRight.classList.remove('active');
    burger.classList.remove('open');
    overlay.classList.remove('show');
});
