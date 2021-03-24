'use strict';

const menu = () => {
    //якорь
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const blokcID = anchor.getAttribute('href');
            document.querySelector('' + blokcID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        })
    }

    const btnMenu = document.querySelector('.mob-menu-btn'),
        wrapMenu = document.querySelector('.modal-overlay'),
        overlay = document.querySelector('.overlay'),
        menu = document.querySelector('.mobile-menu');
    const handlerMenu = () => {
        wrapMenu.classList.toggle('overlay');
        menu.classList.toggle('open');
    };

    btnMenu.addEventListener('click', handlerMenu);
    overlay.addEventListener('click', handlerMenu);
    
    menu.addEventListener('click', (event)=>{
        let target = event.target;
        if(target.classList.contains('mobile-menu-close')){
            handlerMenu();
        } else {
            target = target.closest('a');
            if(target) {
                handlerMenu();
            }
        }
        });
    };

    export default menu;