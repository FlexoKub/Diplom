'use strict';
const tabs = () => {
    const tabHeader = document.querySelector('.accordeon'),
        tab = tabHeader.querySelectorAll('.element'),
        tabContent = tabHeader.querySelectorAll('.element-content');
        
        //ф-я меняет контент
        const toggletab = (index) => {
            for(let i=0; i < tab.length; i++){
                if (index === i){
                    tabContent[i].style.display = 'block';
                    tab[i].classList.add('active');
                } else {
                    tabContent[i].style.display = 'none';
                    tab[i].classList.remove('active');
                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            let target =event.target;
            //проверяем селектор если нет поднимаемся выше к родителю
            target = target.closest('.element');
            //проверяем на какой tab кликнули
            if(target){
                tab.forEach((item, i) => {
                    if(item === target) {
                        toggletab(i);
                    }
                });
            }
        } );
    };

    export default tabs;