// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t=Math.floor;function e(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&(n=e.length,t(n)===n)&&e.length>=0&&e.length<=4294967295;var n}var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function o(){return n&&"symbol"==typeof Symbol.toStringTag}var r=Object.prototype.toString,f=Object.prototype.hasOwnProperty,u="function"==typeof Symbol?Symbol.toStringTag:"",l=o()?function(t){var e,n,o,l,i;if(null==t)return r.call(t);n=t[u],i=u,e=null!=(l=t)&&f.call(l,i);try{t[u]=void 0}catch(e){return r.call(t)}return o=r.call(t),e?t[u]=n:delete t[u],o}:function(t){return r.call(t)},i=Date.prototype.getDay,a=o();return function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var o,r;if(!e(n))return!1;if(0===(o=n.length))return!1;for(r=0;r<o;r++)if(!1===t(n[r]))return!1;return!0}}((function(t){return"object"==typeof t&&(t instanceof Date||(a?function(t){try{return i.call(t),!0}catch(t){return!1}}(t):"[object Date]"===l(t)))}))},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isDateObjectArray=e();
//# sourceMappingURL=index.js.map
