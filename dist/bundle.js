(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var t,n,o,r;(function(){var e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".modal-callback"),n=document.querySelector(".button-services"),o=document.querySelector(".modal-close"),r=document.querySelector(".modal-overlay"),c=function(){t.style.display="block",r.style.display="block"};e[1].addEventListener("click",c),n.addEventListener("click",c);var l=function(){r.style.display="none",t.style.display="none"};r.addEventListener("click",l),o.addEventListener("click",l)})(),function(){var t,n=function(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var r=0,c=function(){};return{s:c,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,i=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){i=!0,l=e},f:function(){try{a||null==o.return||o.return()}finally{if(i)throw l}}}}(document.querySelectorAll('a[href*="#"]'));try{var o=function(){var e=t.value;e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(n.s();!(t=n.n()).done;)o()}catch(e){n.e(e)}finally{n.f()}var r=document.querySelector(".mob-menu-btn"),c=document.querySelector(".modal-overlay"),l=document.querySelector(".overlay"),a=document.querySelector(".mobile-menu"),i=function(){c.classList.toggle("overlay"),a.classList.toggle("open")};r.addEventListener("click",i),l.addEventListener("click",i),a.addEventListener("click",(function(e){var t=e.target;(t.classList.contains("mobile-menu-close")||(t=t.closest("a")))&&i()}))}(),function(){var e=document.querySelectorAll(".item"),t=document.querySelector(".top-slider"),n=document.querySelector(".dots");!function(){for(var t=0;t<=e.length-1;t++){var o=document.createElement("li");o.classList.add("dot"),n.append(o)}}();var o,r=document.querySelectorAll(".dot"),c=0,l=function(e,t,n){e[t].classList.remove(n)},a=function(e,t,n){e[t].classList.add(n)},i=function(){l(e,c,"item-active"),l(r,c,"dot-active"),++c>=e.length&&(c=0),a(e,c,"item-active"),a(r,c,"dot-active")},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;o=setInterval(i,e)};u(),t.addEventListener("click",(function(t){t.preventDefault();var n=t.target;n.matches(".dot")&&(l(e,c,"item-active"),l(r,c,"dot-active"),n.matches(".dot")&&r.forEach((function(e,t){e===n&&(c=t)})),c>=e.length&&(c=0),c<0&&(c=e.length-1),a(e,c,"item-active"),a(r,c,"dot-active"))})),t.addEventListener("mouseover",(function(e){e.target.matches(".dot")&&clearInterval(o)})),t.addEventListener("mouseout",(function(e){e.target.matches(".dot")&&u()}))}(),n=document.querySelector(".accordeon"),o=n.querySelectorAll(".element"),r=n.querySelectorAll(".element-content"),n.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".element"))&&o.forEach((function(e,n){e===t&&function(e){for(var t=0;t<o.length;t++)e===t?(r[t].style.display="block",o[t].classList.add("active")):(r[t].style.display="none",o[t].classList.remove("active"))}(n)}))})),t=document.querySelector(".up"),window.addEventListener("scroll",(function(){var e=window.pageYOffset,n=document.documentElement.clientHeight;e>n&&t.classList.add("up-show"),e<n&&t.classList.remove("up-show")})),t.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(e,20))}))})();