'use strict';

const modalСallback = () => {
    
     //убираем скролл
        const disableScroll = function() {
        //ширина скролла чтобы добавить padding-right при отключении Scroll 
            const widthScroll = window.innerWidth - document.body.offsetWidth;
            //чтобы позиция не менялась сохраняем нашу позицию
            document.body.dbScrollY = window.scrollY;
            //добавляем стили к body
            document.body.style.cssText = `
            position: fixed;
            top: ${-window.scrollY}px;
            left: 0;
            width: 100%;
            overflow: hidden;
            height: 100vh;
            padding-right: ${widthScroll}px;
            `;
        };
        
        const enableScroll = function() {
            document.body.style.cssText = `position: relative;`;
            //возвращаем нашу позицию
            window.scroll({top:document.body.dbScrollY});
        };

    const fancyboxModal = document.querySelectorAll('.fancyboxModal'),
        
        modalCallback = document.querySelector('.modal-callback'),
        modalClose = document.querySelector('.modal-close'),
        modalOverlay = document.querySelector('.modal-overlay');
    
        const blockCallback = () => {
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
        disableScroll();
    };

    fancyboxModal.forEach((elem) => {
        elem.addEventListener('click', blockCallback);
    });
    
    
    const noneCallback = () => {
        modalOverlay.style.display = 'none';
        modalCallback.style.display = 'none';
        enableScroll();
    };
    modalOverlay.addEventListener('click', noneCallback); 
    modalClose.addEventListener('click', noneCallback); 

    };
    export default modalСallback;