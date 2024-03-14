/*================================== Toggle icon navbar ==============================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')

}

/*================================== Close menu nav link ==============================*/
const links = document.querySelectorAll('.nav__link')

for (const link of links) {
    link.onclick = function () {
        navbar.classList.remove('fa-xmark')
        menuIcon.classList.remove('fa-xmark')
        menuIcon.classList.add('fa-bars')
    }
}

/*================================== Scroll section active link ==============================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*================================== sticky navbar ==============================*/
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================================remove Toggle icon navbar ==============================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*==================================Scroll Reveal==============================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, projects-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*==================================Type JS==============================*/
const type = new Typed('.multiple-text', {
    strings: ['Desarrollador Front-End', 'Diseñador Web', 'Base de Datos'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});





