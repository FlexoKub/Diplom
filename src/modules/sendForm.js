'use strict';

const sendForm = () => {
    const name = document.querySelector('.fio'),
        phone = document.querySelector('.tel');
    //добавляем сообщения 
    const errorMessage = 'Ошибка',
        loadMessage = 'Идет отправка...',
        successMessage = 'Отправлено. Спасибо мы скоро с вами свяжемся!';
    const form = document.getElementById('form');
    const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #2fab6d';

        
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if(name.value && phone.value){

            //помещаем div на страницу
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            
            //пишем запрос на сервер
            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            
            postData(body)
                .then((response) => {
                    if(response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                    setTimeout(function(){
                        document.querySelector('.modal-callback').style.display = 'none';
                        document.querySelector('.modal-overlay').style.display = 'none';
                        document.body.style.cssText = `position: relative;`;
                        window.scroll({top:document.body.dbScrollY});
                        form.removeChild(statusMessage);
                    }, 4000);
                })
                .catch((error) => {
                    statusMessage.style.cssText = 'font-size: 2rem; color: red';
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                }); 
            statusMessage.style.cssText = 'font-size: 2rem; color: #2fab6d';
            name.value = '';
            phone.value = '';
            name.style.border = "";
            phone.style.border = "";
        } else {
            name.style.border = "2px solid red";
            phone.style.border = "2px solid red";
        }
        return;

        
    });
};

export default sendForm;