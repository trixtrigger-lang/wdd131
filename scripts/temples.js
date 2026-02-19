const yearSpan = document.querySelector('#year');
const modifiedSpan = document.querySelector('#last-modified');
const menuBtn = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuBtn.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});