(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r,i,s,l,a,c;(function(){var e=document.querySelectorAll(".fancyboxModal"),t=document.querySelector(".modal-callback"),n=document.querySelector(".modal-close"),o=document.querySelector(".modal-overlay"),r=function(){var e;t.style.display="block",o.style.display="block",e=window.innerWidth-document.body.offsetWidth,document.body.dbScrollY=window.scrollY,document.body.style.cssText="\n            position: fixed;\n            top: ".concat(-window.scrollY,"px;\n            left: 0;\n            width: 100%;\n            overflow: hidden;\n            height: 100vh;\n            padding-right: ").concat(e,"px;\n            ")};e.forEach((function(e){e.addEventListener("click",r)}));var i=function(){o.style.display="none",t.style.display="none",document.body.style.cssText="position: relative;",window.scroll({top:document.body.dbScrollY})};o.addEventListener("click",i),n.addEventListener("click",i)})(),function(){var t,n=function(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){a=!0,s=e},f:function(){try{l||null==o.return||o.return()}finally{if(a)throw s}}}}(document.querySelectorAll('a[href*="#"]'));try{var o=function(){var e=t.value;e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(n.s();!(t=n.n()).done;)o()}catch(e){n.e(e)}finally{n.f()}var r=document.querySelector(".mob-menu-btn"),i=document.querySelector(".modal-overlay"),s=document.querySelector(".overlay"),l=document.querySelector(".mobile-menu"),a=function(){i.classList.toggle("overlay"),l.classList.toggle("open")};r.addEventListener("click",a),s.addEventListener("click",a),l.addEventListener("click",(function(e){var t=e.target;(t.classList.contains("mobile-menu-close")||(t=t.closest("a")))&&a()}))}(),function(){var e=document.querySelectorAll(".item"),t=document.querySelector(".top-slider"),n=document.querySelector(".dots");!function(){for(var t=0;t<=e.length-1;t++){var o=document.createElement("li");o.classList.add("dot"),n.append(o)}}();var o,r=document.querySelectorAll(".dot"),i=0,s=function(e,t,n){e[t].classList.remove(n)},l=function(e,t,n){e[t].classList.add(n)},a=function(){s(e,i,"item-active"),s(r,i,"dot-active"),++i>=e.length&&(i=0),l(e,i,"item-active"),l(r,i,"dot-active")},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;o=setInterval(a,e)};c(),t.addEventListener("click",(function(t){t.preventDefault();var n=t.target;n.matches(".dot")&&(s(e,i,"item-active"),s(r,i,"dot-active"),n.matches(".dot")&&r.forEach((function(e,t){e===n&&(i=t)})),i>=e.length&&(i=0),i<0&&(i=e.length-1),l(e,i,"item-active"),l(r,i,"dot-active"))})),t.addEventListener("mouseover",(function(e){e.target.matches(".dot")&&clearInterval(o)})),t.addEventListener("mouseout",(function(e){e.target.matches(".dot")&&c()}))}(),new(function(){function e(t){var n=t.main,o=t.wrap,r=t.next,i=t.prev,s=t.infinity,l=void 0!==s&&s,a=t.position,c=void 0===a?0:a,d=t.slidesToShow,u=void 0===d?3:d,f=t.responsive,h=void 0===f?[]:f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n&&o||console.warn('slider-carusel: Необходимо передать 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=u,this.options={position:c,widthSlide:Math.floor(100/this.slidesToShow),infinity:l},this.responsive=h}var r,i;return r=e,(i=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("slider"),this.wrap.classList.add("slider__wrap");var e,n=function(e,n){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=t(e))){o&&(e=o);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){a=!0,s=e},f:function(){try{l||null==o.return||o.return()}finally{if(a)throw s}}}}(this.slides);try{for(n.s();!(e=n.n()).done;)e.value.classList.add("slider__item")}catch(e){n.e(e)}finally{n.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarusel-style");e||((e=document.createElement("style")).id="sliderCarusel-style"),e.textContent="\n            .slider{\n                overflow: hidden !important;\n            }\n            .slider__wrap {\n                display: flex;\n                transition: transform 0.5s !important;\n                will-chande: transform !important;\n            }\n            .slider__item{\n                display: flex !important;\n                align-items: center;\n                justify-content: center;\n                flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n                margin: auto 0 !important;\n            }\n            "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.classList="slider__prev",this.next.classList="slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n            .slider__prev,\n            .slider__next{\n                margin: 0 10px;\n                border: 20px solid transparent;\n                background: transparent;\n            }\n            .slider__next {\n                border-left-color: #19b5fe\n            }\n            .slider__prev {\n                border-right-color: #19b5fe\n            }\n            .slider__prev:hover,\n            .slider__next:hover,\n            .slider__prev:focus,\n            .slider__next:focus{\n                background: transparent;\n                outline: transparent;\n            }\n            ",document.head.appendChild(e)}},{key:"responseInit",value:function(){var e,o=this,r=this.slidesToShow,i=this.responsive.map((function(e){return e.breakpoint})),s=Math.max.apply(Math,function(e){if(Array.isArray(e))return n(e)}(e=i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=function(){var e=document.documentElement.clientWidth;if(e<s)for(var t=0;t<i.length;t++)e<i[t]&&(o.slidesToShow=o.responsive[t].slidesToShow,o.options.widthSlide=Math.floor(100/o.slidesToShow),o.addStyle());else o.slidesToShow=r,o.options.widthSlide=Math.floor(100/o.slidesToShow),o.addStyle()};l(),window.addEventListener("resize",l)}}])&&o(r.prototype,i),e}())({main:".services-elements",wrap:".services-carousel",prev:".arrow-left",next:".arrow-right",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init(),l=document.querySelector(".accordeon"),a=l.querySelectorAll(".element"),c=l.querySelectorAll(".element-content"),l.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".element"))&&a.forEach((function(e,n){e===t&&function(e){for(var t=0;t<a.length;t++)e===t?(c[t].style.display="block",a[t].classList.add("active")):(c[t].style.display="none",a[t].classList.remove("active"))}(n)}))})),s=document.querySelector(".up"),window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&s.classList.add("up-show"),e<t&&s.classList.remove("up-show")})),s.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(e,20))})),r=document.querySelector(".fio"),i=document.querySelector(".tel"),r.addEventListener("input",(function(e){var t=e.target;t.value=t.value.replace(/[^А-Яа-яЁё ]/g,"")})),i.addEventListener("input",(function(e){var t=e.target;t.value=t.value.replace(/[^+0-9]/,"")})),function(){var e=document.querySelector(".fio"),t=document.querySelector(".tel"),n=document.getElementById("form"),o=document.createElement("div");o.style.cssText="font-size: 2rem; color: #2fab6d",n.addEventListener("submit",(function(r){if(r.preventDefault(),e.value&&t.value){n.appendChild(o),o.textContent="Идет отправка...";var i=new FormData(n),s={};i.forEach((function(e,t){s[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(s).then((function(e){if(200!==e.status)throw new Error("status network not 200");o.textContent="Отправлено. Спасибо мы скоро с вами свяжемся!",setTimeout((function(){document.querySelector(".modal-callback").style.display="none",document.querySelector(".modal-overlay").style.display="none",document.body.style.cssText="position: relative;",window.scroll({top:document.body.dbScrollY}),n.removeChild(o)}),4e3)})).catch((function(e){o.style.cssText="font-size: 2rem; color: red",o.textContent="Ошибка",console.error(e)})),o.style.cssText="font-size: 2rem; color: #2fab6d",e.value="",t.value="",e.style.border="",t.style.border=""}else e.style.border="2px solid red",t.style.border="2px solid red"}))}()})();