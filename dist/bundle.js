(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t,n,r;(function(){var e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".modal-callback"),n=document.querySelector(".button-services"),r=document.querySelector(".modal-close"),o=document.querySelector(".modal-overlay"),l=function(){t.style.display="block",o.style.display="block"};e[1].addEventListener("click",l),n.addEventListener("click",l);var c=function(){o.style.display="none",t.style.display="none"};o.addEventListener("click",c),r.addEventListener("click",c)})(),function(){var t,n=function(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,l=function(){};return{s:l,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,c=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw c}}}}(document.querySelectorAll('a[href*="#"]'));try{var r=function(){var e=t.value;e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(n.s();!(t=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}var o=document.querySelector(".mob-menu-btn"),l=document.querySelector(".modal-overlay"),c=document.querySelector(".overlay"),a=document.querySelector(".mobile-menu"),i=function(){l.classList.toggle("overlay"),a.classList.toggle("open")};o.addEventListener("click",i),c.addEventListener("click",i),a.addEventListener("click",(function(e){var t=e.target;(t.classList.contains("mobile-menu-close")||(t=t.closest("a")))&&i()}))}(),t=document.querySelector(".accordeon"),n=t.querySelectorAll(".element"),r=t.querySelectorAll(".element-content"),t.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".element"))&&n.forEach((function(e,o){e===t&&function(e){for(var t=0;t<n.length;t++)e===t?(r[t].style.display="block",n[t].classList.add("active")):(r[t].style.display="none",n[t].classList.remove("active"))}(o)}))}))})();