// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var e=4294967295;function i(i){return null!=i&&"function"!=typeof i&&"number"==typeof i.length&&(t=i.length,r(t)===t)&&i.length>=0&&i.length<=e;var t}function t(r){return"number"==typeof r}function a(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function n(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+a(n):a(n)+r,t&&(r="-"+r)),r}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(r){var e,i,a;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,a=parseInt(i,10),!isFinite(a)){if(!t(i))throw new Error("invalid integer. Value: "+i);a=0}return a<0&&("u"===r.specifier||10!==e)&&(a=4294967295+a+1),a<0?(i=(-a).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=a.toString(e),a||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===c.call(r.specifier)?c.call(i):o.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var p=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,i,a=parseFloat(r.arg);if(!isFinite(a)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);a=r.arg}switch(r.specifier){case"e":case"E":i=a.toExponential(r.precision);break;case"f":case"F":i=a.toFixed(r.precision);break;case"g":case"G":p(a)<1e-4?((e=r.precision)>0&&(e-=1),i=a.toExponential(e)):i=a.toPrecision(r.precision),r.alternate||(i=u.call(i,b,"$1e"),i=u.call(i,y,"e"),i=u.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=u.call(i,g,"e+0$1"),i=u.call(i,h,"e-0$1"),r.alternate&&(i=u.call(i,d,"$1."),i=u.call(i,w,"$1.e")),a>=0&&r.sign&&(i=r.sign+i),i=r.specifier===f.call(r.specifier)?f.call(i):l.call(i)}function S(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}var x=String.fromCharCode,k=Array.isArray;function E(r){return r!=r}function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $(r){var e,i,t,a,o,c,p,l,f,u,g,h,d;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",p=1,l=0;l<r.length;l++)if(t=r[l],"string"==typeof t)c+=t;else{if(e=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,E(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(u=t.arg,g=t.width,h=t.padRight,d=void 0,(d=g-u.length)<0?u:u=h?u+S(d):S(d)+u)),c+=t.arg||"",p+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,i,t,a;for(i=[],a=0,t=T.exec(r);t;)(e=r.slice(a,T.lastIndex-t[0].length)).length&&i.push(e),i.push(F(t)),a=T.lastIndex,t=T.exec(r);return(e=r.slice(a)).length&&i.push(e),i}function C(r){var e,i;if("string"!=typeof r)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return $.apply(null,e)}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function A(){return R&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var D="function"==typeof Symbol?Symbol:void 0,O="function"==typeof D?D.toStringTag:"";var W=A()?function(r){var e,i,t,a,n;if(null==r)return Z.call(r);i=r[O],n=O,e=null!=(a=r)&&j.call(a,n);try{r[O]=void 0}catch(e){return Z.call(r)}return t=Z.call(r),e?r[O]=i:delete r[O],t}:function(r){return Z.call(r)},L=Date.prototype.getDay;var M=A();var G=function(r){if("function"!=typeof r)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,a;if(!i(e))return!1;if(0===(t=e.length))return!1;for(a=0;a<t;a++)if(!1===r(e[a]))return!1;return!0}}((function(r){return"object"==typeof r&&(r instanceof Date||(M?function(r){try{return L.call(r),!0}catch(r){return!1}}(r):"[object Date]"===W(r)))}));export{G as default};
//# sourceMappingURL=mod.js.map
