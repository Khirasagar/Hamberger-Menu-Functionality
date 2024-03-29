const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
})