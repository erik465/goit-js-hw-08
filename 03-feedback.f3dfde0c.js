var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,u=f||l||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return u.Date.now()};function g(e,t,n){var i,r,o,a,f,l,u=0,c=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,u=t,a=e.apply(o,n)}function h(e){return u=e,f=setTimeout(E,t),c?y(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||g&&e-u>=o}function E(){var e=m();if(S(e))return O(e);f=setTimeout(E,function(e){var n=t-(e-l);return g?d(n,o-(e-u)):n}(e))}function O(e){return f=void 0,b&&i?y(e):(i=r=void 0,a)}function j(){var e=m(),n=S(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return h(l);if(g)return f=setTimeout(E,t),y(l)}return void 0===f&&(f=setTimeout(E,t)),a}return t=v(t)||0,p(n)&&(c=!!n.leading,o=(g="maxWait"in n)?s(v(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),j.cancel=function(){void 0!==f&&clearTimeout(f),u=0,i=l=r=f=void 0},j.flush=function(){return void 0===f?a:O(m())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector("form");localStorage.getItem("feedback-form-state")&&(b.firstElementChild.firstElementChild.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,b.children[1].lastElementChild.value=JSON.parse(localStorage.getItem("feedback-form-state")).message),b.addEventListener("input",t((()=>{localStorage.setItem("feedback-form-state",JSON.stringify({email:b.firstElementChild.firstElementChild.value,message:b.children[1].lastElementChild.value}))}),500)),b.addEventListener("submit",(e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.clear()}));
//# sourceMappingURL=03-feedback.f3dfde0c.js.map
