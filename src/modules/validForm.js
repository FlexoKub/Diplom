'use strict';

const validForm = () => {
    const name = document.querySelector('.fio'),
        phone = document.querySelector('.tel');
    const funcName = function(event) {
        const target = event.target;
        target.value = target.value.replace(/[^А-Яа-яЁё ]/g, '');
    };
    const funcPhone = function(event) {
        const target = event.target;
        target.value = target.value.replace(/[^+0-9]/, '');
    };
    name.addEventListener('input', funcName);
    phone.addEventListener('input', funcPhone);
    
    
};

export default validForm;