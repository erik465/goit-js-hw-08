var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=l||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return u.Date.now()};function v(e,t,n){var i,r,o,a,l,f,u=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=i,o=r;return i=r=void 0,u=t,a=e.apply(o,n)}function y(e){return u=e,l=setTimeout(S,t),c?h(e):a}function E(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-u>=o}function S(){var e=m();if(E(e))return C(e);l=setTimeout(S,function(e){var n=t-(e-f);return v?d(n,o-(e-u)):n}(e))}function C(e){return l=void 0,b&&i?h(e):(i=r=void 0,a)}function O(){var e=m(),n=E(e);if(i=arguments,r=this,f=e,n){if(void 0===l)return y(f);if(v)return l=setTimeout(S,t),h(f)}return void 0===l&&(l=setTimeout(S,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,o=(v="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==l&&clearTimeout(l),u=0,i=f=r=l=void 0},O.flush=function(){return void 0===l?a:C(m())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=r.test(e);return l||o.test(e)?a(e.slice(2),l?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector("form");localStorage.getItem("feedback-form-state")&&(b.firstElementChild.firstElementChild.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,b.children[1].lastElementChild.value=JSON.parse(localStorage.getItem("feedback-form-state")).message),b.addEventListener("input",t((()=>{localStorage.setItem("feedback-form-state",JSON.stringify({email:b.firstElementChild.firstElementChild.value,message:b.children[1].lastElementChild.value}))}),500)),b.addEventListener("submit",(e=>{e.preventDefault(),localStorage.setItem("feedback-form-state",JSON.stringify({email:b.firstElementChild.firstElementChild.value,message:b.children[1].lastElementChild.value})),""!=b.firstElementChild.firstElementChild.value&&""!=b.children[1].lastElementChild.value?(console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),b.reset(),localStorage.removeItem("feedback-form-state")):alert("Both fields must be completed")}));
//# sourceMappingURL=03-feedback.309d1707.js.map