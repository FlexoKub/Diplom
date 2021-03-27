'use strict';

const slider = () => {

    const slide = document.querySelectorAll('.item'),
        // btn = document.querySelectorAll('.portfolio-btn'),
        // dot = document.querySelectorAll('.dot'),
        slider = document.querySelector('.top-slider'),
        ul = document.querySelector('.dots');

        
        
        const newDot = () => {
            for (let i=0; i<=slide.length-1; i++){
                let newDot = document.createElement('li');
                newDot.classList.add('dot');
                ul.append(newDot);
            }
        };
        newDot();
        const dot = document.querySelectorAll('.dot');

    //номер слайда
    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        
        elem[index].classList.add(strClass);
        
    };
    


    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide,currentSlide, 'item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time=3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };
    startSlide();
    //кнопки next & prev
    slider.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;

    //ограничение входа по классам
    if(!target.matches('.dot')){
        return;
    }

        prevSlide(slide, currentSlide, 'item-active');
            prevSlide(dot, currentSlide, 'dot-active');

    if (target.matches('.dot')){
        dot.forEach((elem, index) => {
            if(elem === target){
                currentSlide = index;
            }
        });
    }
    //условия продолжения
    if(currentSlide >= slide.length){
        currentSlide = 0;
    }
    if(currentSlide < 0) {
        currentSlide = slide.length - 1;
    }
    nextSlide(slide,currentSlide, 'item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });
    //наведение на стрелки или точки
    slider.addEventListener('mouseover', (event) => {
        if(
        event.target.matches('.dot')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if(
        event.target.matches('.dot')) {
            startSlide();
        }
    });

    };

    export default slider;