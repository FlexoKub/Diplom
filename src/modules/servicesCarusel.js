'use strict';

const servicesCarusel = () => {
    class SliderCarousel {
        constructor({main, 
            wrap, 
            next, 
            prev, 
            infinity = false, 
            position = 0, 
            slidesToShow = 3,
            responsive = []
        }){
                if(!main || !wrap){
                    console.warn('slider-carusel: Необходимо передать 2 свойства, "main" и "wrap"!');
                }
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.options = {
                position,
                widthSlide: Math.floor(100 / this.slidesToShow),
                infinity
            };
            this.responsive = responsive;
            
        }
    
        init(){
            
            this.addGloClass();
            this.addStyle();
            if(this.prev && this.next){
                this.controlSlider();
            } else {
                this.addArrow();
                this.controlSlider();
            }
            if(this.responsive){
                this.responseInit();
            }
        }
        //добавление классов
        addGloClass() {
            this.main.classList.add('slider');
            this.wrap.classList.add('slider__wrap');
            for( const item of this.slides) {
                item.classList.add('slider__item');
            }
        }
    
        addStyle(){
            let style = document.getElementById('sliderCarusel-style');
            if(!style){
            style = document.createElement('style');
            style.id = 'sliderCarusel-style';
            }
            
            style.textContent = `
            .slider{
                overflow: hidden !important;
            }
            .slider__wrap {
                display: flex;
                transition: transform 0.5s !important;
                will-chande: transform !important;
            }
            .slider__item{
                display: flex !important;
                align-items: center;
                justify-content: center;
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
            }
            `;
            document.head.appendChild(style);
        }
        controlSlider(){
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }
        prevSlider(){
            if(this.options.infinity || this.options.position > 0){
    
                --this.options.position;
                // console.log(this.options.position);
                if(this.options.position < 0){
                    this.options.position = this.slides.length - this.slidesToShow;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }
        nextSlider(){
            //велечина позиции меньше чем кол-во слайдов минус кол-во показанных
            if(this.options.infinity || this.options.position < this.slides.length - this.slidesToShow){
    
                ++this.options.position;
                // console.log(this.options.position);
                if(this.options.position > this.slides.length - this.slidesToShow){
                    this.options.position = 0;
                }
                //перемещаем слайдер на велечину длинны слайда
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }
        addArrow(){
            this.prev = document.createElement('button');
            this.next = document.createElement('button');
            //добавляем классы
            this.prev.classList = 'slider__prev';
            this.next.classList = 'slider__next';
            //добавл. на страницу
            this.main.appendChild(this.prev);
            this.main.appendChild(this.next);
            //стили кнопок
            const style = document.createElement('style');
            style.textContent = `
            .slider__prev,
            .slider__next{
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
            }
            .slider__next {
                border-left-color: #19b5fe
            }
            .slider__prev {
                border-right-color: #19b5fe
            }
            .slider__prev:hover,
            .slider__next:hover,
            .slider__prev:focus,
            .slider__next:focus{
                background: transparent;
                outline: transparent;
            }
            `;
            //добавляем на страницу
            document.head.appendChild(style);
        }
        //ф-я перебора данных адаптива
        responseInit(){
            const slidesToShowDefault = this.slidesToShow;
            //заносим в массив данные responsive
            const allRespone = this.responsive.map(item => item.breakpoint);
            // console.log(allRespone);
            const maxResponse = Math.max(...allRespone);
            //узнаем ширину экрана
            const checkResponse = () => {
                const widthWindow = document.documentElement.clientWidth;
                if(widthWindow < maxResponse){
                    //перебираем значения
                    for (let i=0; i<allRespone.length; i++){
                        if(widthWindow<allRespone[i]){
                            this.slidesToShow = this.responsive[i].slidesToShow;
                            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                            this.addStyle();
                        }
                    }
                } else {
                    this.slidesToShow = slidesToShowDefault;
                    this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                    this.addStyle();
                }
            };
            checkResponse();
            window.addEventListener('resize', checkResponse);
        }
    }
    const carousel = new SliderCarousel({
		main: '.services-elements',
		wrap: '.services-carousel',
		prev: '.arrow-left',
		next: '.arrow-right',
		slidesToShow: 4,
		infinity: true,

		responsive:[{
			breakpoint: 1024,
			slidesToShow: 3
		},
		{
			breakpoint: 768,
			slidesToShow: 2
		},{
			breakpoint: 576,
			slidesToShow: 1
		},
	]

	});
	carousel.init();
};

export default servicesCarusel;