'use strict';

const modalСallback = () => {
    const callbackBtn = document.querySelectorAll('.callback-btn'),
        modalCallback = document.querySelector('.modal-callback'),
        buttonServices = document.querySelector('.button-services'),
        modalClose = document.querySelector('.modal-close'),
        modalOverlay = document.querySelector('.modal-overlay');
    
        const blockCallback = () => {
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
    };
    callbackBtn[1].addEventListener('click', blockCallback);
    buttonServices.addEventListener('click', blockCallback);

    const noneCallback = () => {
        modalOverlay.style.display = 'none';
        modalCallback.style.display = 'none';
    };
    modalOverlay.addEventListener('click', noneCallback); 
    modalClose.addEventListener('click', noneCallback); 
    };

    export default modalСallback;