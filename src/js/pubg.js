let header = document.querySelector('.header');
let nav = document.querySelector('.header .nav');
window.addEventListener('scroll', function () {
    var y = scrollY;
    if (y > 100) {
        header.style.display = 'none';
    } else {
        header.style.display = 'inline';
    }
});

document.querySelector('.header .tools #menu').onclick = ()=>{
    nav.classList.toggle('active');
}

