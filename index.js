// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t=Math.floor,n=function(n){return t(n)===n},e=function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&n(t.length)&&t.length>=0&&t.length<=4294967295},o=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var o,r;if(!e(n))return!1;if(0===(o=n.length))return!1;for(r=0;r<o;r++)if(!1===t(n[r]))return!1;return!0}},r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),u=function(){return r&&"symbol"==typeof Symbol.toStringTag},f=Object.prototype.toString,l=f,i=function(t){return l.call(t)},c=Object.prototype.hasOwnProperty,a=function(t,n){return null!=t&&c.call(t,n)},y="function"==typeof Symbol?Symbol.toStringTag:"",p=a,b=y,d=f,g=i,s=function(t){var n,e,o;if(null==t)return d.call(t);e=t[b],n=p(t,b);try{t[b]=void 0}catch(n){return d.call(t)}return o=d.call(t),n?t[b]=e:delete t[b],o},h=u()?s:g,m=Date.prototype.getDay,S=h,v=function(t){try{return m.call(t),!0}catch(t){return!1}},j=u();return o((function(t){return"object"==typeof t&&(t instanceof Date||(j?v(t):"[object Date]"===S(t)))}))},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).isDateObjectArray=n();
//# sourceMappingURL=index.js.map
