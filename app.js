const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');








const navLinkSlide = () => {
    burger.addEventListener('click', function(){
        navLinks.classList.toggle('nav-active');
    });

    navLinksLi.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards';
    })

}


navLinkSlide();