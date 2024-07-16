(()=>{"use strict";var n={958:(n,r,t)=>{t.d(r,{A:()=>c});var o=t(354),e=t.n(o),i=t(314),a=t.n(i)()(e());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Passion+One:wght@400;700;900&family=Sriracha&display=swap);"]),a.push([n.id,':root {\n    --primary-color: #04BFAD;\n    --secondary-color: #027373;\n    --thirt-color: #5FCDD9;\n    --four-color: #04BF9D;\n    --font-padrao: "Open Sans", sans-serif;\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    background-color: var(--primary-color);\n    font-family: var(--font-padrao);\n    font-size: 1.3em;\n    line-height: 1.5em;\n    text-align: justify;\n    /*Espaçamento entre linhas*/\n}\nh1 {\n    text-align: center;\n    margin-bottom: 25px;\n}\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background-color: white;\n    padding: 20px;\n    border-radius: 20px;\n}\n\nform input,\nform label,\nform button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    text-align: center;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color)\n}\n\nform button {\n    border: none;\n    background-color: var(--primary-color);\n    color: white;\n    font-size: 18px;\n    font-weight: 700;\n    height: 120px;\n    cursor: pointer;\n    margin-top: 30px;\n}\n\nform button:hover {\n    background-color: var(--secondary-color);\n}\n\nform button:active {\n    background-color: var(--thirt-color);\n}\n\n.container h1 {\n    text-align: center;\n    margin-bottom: 40px;\n}\n\n.cpf-gerado {\n    font-size: 2em;\n    text-align: center;\n    color: var(--primary-color);\n    font-weight: bold;\n    margin-bottom: 40px;\n}',"",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,sBAAsB;IACtB,qBAAqB;IACrB,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sCAAsC;IACtC,+BAA+B;IAC/B,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,2BAA2B;AAC/B;AACA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;AACvB;;AAEA;;;IAGI,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,YAAY;IACZ,sCAAsC;IACtC,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,2BAA2B;IAC3B,iBAAiB;IACjB,mBAAmB;AACvB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Passion+One:wght@400;700;900&family=Sriracha&display=swap');\r\n\r\n:root {\r\n    --primary-color: #04BFAD;\r\n    --secondary-color: #027373;\r\n    --thirt-color: #5FCDD9;\r\n    --four-color: #04BF9D;\r\n    --font-padrao: \"Open Sans\", sans-serif;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\nbody {\r\n    background-color: var(--primary-color);\r\n    font-family: var(--font-padrao);\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n    text-align: justify;\r\n    /*Espaçamento entre linhas*/\r\n}\r\nh1 {\r\n    text-align: center;\r\n    margin-bottom: 25px;\r\n}\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background-color: white;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\nform input,\r\nform label,\r\nform button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color)\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 120px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background-color: var(--secondary-color);\r\n}\r\n\r\nform button:active {\r\n    background-color: var(--thirt-color);\r\n}\r\n\r\n.container h1 {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.cpf-gerado {\r\n    font-size: 2em;\r\n    text-align: center;\r\n    color: var(--primary-color);\r\n    font-weight: bold;\r\n    margin-bottom: 40px;\r\n}"],sourceRoot:""}]);const c=a},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",o=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),o&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),o&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,o,e,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),e&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=e):s[4]="".concat(e)),r.push(s))}},r}},354:n=>{n.exports=function(n){var r=n[1],t=n[3];if(!t)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(e," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function t(n){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var u=n[c],l=o.base?u[0]+o.base:u[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var f=t(p),A={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)r[f].references++,r[f].updater(A);else{var m=e(A,o);o.byIndex=c,r.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function e(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,e){var i=o(n=n||[],e=e||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);r[c].references--}for(var u=o(n,e),l=0;l<i.length;l++){var s=t(i[l]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}i=u}}},659:n=>{var r={};n.exports=function(n,t){var o=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var e=void 0!==t.layer;e&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,e&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(o){var e=r[o];if(void 0!==e)return e.exports;var i=r[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}function o(n){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}function e(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,o=Array(r);t<r;t++)o[t]=n[t];return o}function i(n,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,a(o.key),o)}}function a(n){var r=function(n,r){if("object"!=o(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,"string");if("object"!=o(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==o(r)?r:r+""}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var o in r)t.o(r,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),t.nc=void 0;var c=function(){function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!0,configurable:!1,value:r.replace(/\D+/g,"")})}return r=n,o=[{key:"geraDigito",value:function(n){var r,t=0,o=n.length+1,i=function(n,r){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,r){if(n){if("string"==typeof n)return e(n,r);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){t&&(n=t);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw a}}}}(n);try{for(i.s();!(r=i.n()).done;){var a=r.value;t+=o*Number(a),o--}}catch(n){i.e(n)}finally{i.f()}var c=11-t%11;return c<=9?String(c):"0"}}],(t=[{key:"eSequencia",value:function(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var r=this.cpfLimpo.slice(0,-2),t=n.geraDigito(r),o=n.geraDigito(r+t);this.novoCPF=r+t+o}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.eSequencia()&&(this.geraNovoCpf(),this.novoCPF===this.cpfLimpo)}}])&&i(r.prototype,t),o&&i(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,t,o}();function u(n){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},u(n)}function l(n,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,s(o.key),o)}}function s(n){var r=function(n,r){if("object"!=u(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,"string");if("object"!=u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==u(r)?r:r+""}console.log("Cheguei aqui.");var p,f=function(){return n=function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)},r=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(r-n)+n))}},{key:"formatado",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}},{key:"geraNovoCpf",value:function(){var n=this.rand(),r=c.geraDigito(n),t=n+r+c.geraDigito(n+r);return this.formatado(t)}}],r&&l(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(),A=t(72),m=t.n(A),d=t(825),g=t.n(d),v=t(659),y=t.n(v),h=t(56),b=t.n(h),C=t(540),B=t.n(C),I=t(113),x=t.n(I),w=t(958),S={};S.styleTagTransform=x(),S.setAttributes=b(),S.insert=y().bind(null,"head"),S.domAPI=g(),S.insertStyleElement=B(),m()(w.A,S),w.A&&w.A.locals&&w.A.locals,p=new f,document.querySelector(".cpf-gerado").innerHTML=p.geraNovoCpf()})();
//# sourceMappingURL=bundle.js.map