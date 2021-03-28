'use strict';

const modalСallback = () => {
    const fancyboxModal = document.querySelectorAll('.fancyboxModal'),
        
        modalCallback = document.querySelector('.modal-callback'),
        modalClose = document.querySelector('.modal-close'),
        modalOverlay = document.querySelector('.modal-overlay');
    
        const blockCallback = () => {
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
    };

    fancyboxModal.forEach((elem) => {
        elem.addEventListener('click', blockCallback);
    });
    
    const noneCallback = () => {
        modalOverlay.style.display = 'none';
        modalCallback.style.display = 'none';
    };
    modalOverlay.addEventListener('click', noneCallback); 
    modalClose.addEventListener('click', noneCallback); 
    };

    export default modalСallback;