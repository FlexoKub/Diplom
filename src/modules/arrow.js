'use strict';
const arrow = () => {
    let goTop = document.querySelector('.up');
    function trackScroll() {
        let scroll = window.pageYOffset;
       
        let coord = document.documentElement.clientHeight;

        if (scroll > coord) {
        goTop.classList.add('up-show');
        }
        if (scroll < coord) { goTop.classList.remove('up-show'); } 
    } 
    function backToTop() { if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 20);
        }
    }
        window.addEventListener('scroll', trackScroll);
        goTop.addEventListener('click', backToTop);
};

export default arrow;