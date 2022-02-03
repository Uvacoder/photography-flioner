(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80],{9080:function(t,e,r){"use strict";r.d(e,{p8:function(){return q},cI:function(){return H}});var n=r(7294);var o=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){return e.reject(r)}))}))};var i=function(t){return new this((function(e,r){if(!t||"undefined"===typeof t.length)return r(new TypeError(typeof t+" "+t+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var n=Array.prototype.slice.call(t);if(0===n.length)return e([]);var o=n.length;function i(t,r){if(r&&("object"===typeof r||"function"===typeof r)){var s=r.then;if("function"===typeof s)return void s.call(r,(function(e){i(t,e)}),(function(r){n[t]={status:"rejected",reason:r},0===--o&&e(n)}))}n[t]={status:"fulfilled",value:r},0===--o&&e(n)}for(var s=0;s<n.length;s++)i(s,n[s])}))},s=setTimeout,a="undefined"!==typeof setImmediate?setImmediate:null;function u(t){return Boolean(t&&"undefined"!==typeof t.length)}function f(){}function c(t){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],b(t,this)}function l(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,c._immediateFn((function(){var r=1===t._state?e.onFulfilled:e.onRejected;if(null!==r){var n;try{n=r(t._value)}catch(o){return void h(e.promise,o)}d(e.promise,n)}else(1===t._state?d:h)(e.promise,t._value)}))):t._deferreds.push(e)}function d(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"===typeof e||"function"===typeof e)){var r=e.then;if(e instanceof c)return t._state=3,t._value=e,void p(t);if("function"===typeof r)return void b((n=r,o=e,function(){n.apply(o,arguments)}),t)}t._state=1,t._value=e,p(t)}catch(i){h(t,i)}var n,o}function h(t,e){t._state=2,t._value=e,p(t)}function p(t){2===t._state&&0===t._deferreds.length&&c._immediateFn((function(){t._handled||c._unhandledRejectionFn(t._value)}));for(var e=0,r=t._deferreds.length;e<r;e++)l(t,t._deferreds[e]);t._deferreds=null}function y(t,e,r){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=r}function b(t,e){var r=!1;try{t((function(t){r||(r=!0,d(e,t))}),(function(t){r||(r=!0,h(e,t))}))}catch(n){if(r)return;r=!0,h(e,n)}}c.prototype.catch=function(t){return this.then(null,t)},c.prototype.then=function(t,e){var r=new this.constructor(f);return l(this,new y(t,e,r)),r},c.prototype.finally=o,c.all=function(t){return new c((function(e,r){if(!u(t))return r(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(t);if(0===n.length)return e([]);var o=n.length;function i(t,s){try{if(s&&("object"===typeof s||"function"===typeof s)){var a=s.then;if("function"===typeof a)return void a.call(s,(function(e){i(t,e)}),r)}n[t]=s,0===--o&&e(n)}catch(u){r(u)}}for(var s=0;s<n.length;s++)i(s,n[s])}))},c.allSettled=i,c.resolve=function(t){return t&&"object"===typeof t&&t.constructor===c?t:new c((function(e){e(t)}))},c.reject=function(t){return new c((function(e,r){r(t)}))},c.race=function(t){return new c((function(e,r){if(!u(t))return r(new TypeError("Promise.race accepts an array"));for(var n=0,o=t.length;n<o;n++)c.resolve(t[n]).then(e,r)}))},c._immediateFn="function"===typeof a&&function(t){a(t)}||function(t){s(t,0)},c._unhandledRejectionFn=function(t){"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var m=c,v=r(7559),w=r.n(v);function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function A(t,e,r){return e&&_(t.prototype,e),r&&_(t,r),t}var E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",T=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var j,x=function(t){return function(t){for(var e,r,n,o,i="",s=0,a=(t=String(t)).length%3;s<t.length;){if((r=t.charCodeAt(s++))>255||(n=t.charCodeAt(s++))>255||(o=t.charCodeAt(s++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");i+=E.charAt((e=r<<16|n<<8|o)>>18&63)+E.charAt(e>>12&63)+E.charAt(e>>6&63)+E.charAt(63&e)}return a?i.slice(0,a-3)+"===".substring(a):i}(JSON.stringify(t))},S=function(t){var e="@formspree/core@".concat("2.6.2");return t?"".concat(t," ").concat(e):e},F=function(){return navigator.webdriver||!!document.documentElement.getAttribute(function(t){if(t=String(t).replace(/[\t\n\f\r ]+/g,""),!T.test(t))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");t+="==".slice(2-(3&t.length));for(var e,r,n,o="",i=0;i<t.length;)e=E.indexOf(t.charAt(i++))<<18|E.indexOf(t.charAt(i++))<<12|(r=E.indexOf(t.charAt(i++)))<<6|(n=E.indexOf(t.charAt(i++))),o+=64===r?String.fromCharCode(e>>16&255):64===n?String.fromCharCode(e>>16&255,e>>8&255):String.fromCharCode(e>>16&255,e>>8&255,255&e);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom},O=function(){function t(){g(this,t),this.loadedAt=1*new Date,this.webdriver=F()}return A(t,[{key:"teardown",value:function(){}},{key:"data",value:function(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}}]),t}(),B=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g(this,t),this.project=e.project,"undefined"!==typeof window&&this.startBrowserSession()}return A(t,[{key:"startBrowserSession",value:function(){this.session||(this.session=new O)}},{key:"teardown",value:function(){this.session&&this.session.teardown()}},{key:"submitForm",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.endpoint||"https://formspree.io",o=r.fetchImpl||w()({Promise:m}).fetch,i=this.project?"".concat(n,"/p/").concat(this.project,"/f/").concat(t):"".concat(n,"/f/").concat(t),s=function(t){return t instanceof FormData?t:JSON.stringify(t)},a={Accept:"application/json","Formspree-Client":S(r.clientName)};this.session&&(a["Formspree-Session-Data"]=x(this.session.data())),e instanceof FormData||(a["Content-Type"]="application/json");var u={method:"POST",mode:"cors",body:s(e),headers:a};return o(i,u).then((function(t){return t.json().then((function(e){return{body:e,response:t}}))}))}}]),t}(),P=function(){var t;return j||(j=new B(t)),j};function R(t){return(R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function U(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function C(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function I(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var D=n.createContext({client:void 0});D.displayName="Formspree";function k(){return(0,n.useContext)(D).client||P()}var N="2.2.4";function L(t){return void 0!==t.preventDefault}function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,n.useState)(!1),o=I(r,2),i=o[0],s=o[1],a=(0,n.useState)(!1),u=I(a,2),f=u[0],c=u[1],l=(0,n.useState)([]),d=I(l,2),h=d[0],p=d[1],y=k(),b=e.client||y;if(!b)throw new Error("You must provide a Formspree client");if(!t)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');var m=!!e.debug,v=e.data,w=function(){s(!1),c(!1),p([])},g=function(r){var n=L(r)?function(t){t.preventDefault();var e=t.target;if("FORM"!=e.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(e)}(r):r,o=function(t,e){n instanceof FormData?n.append(t,e):n=Object.assign(n,U({},t,e))};if("object"===R(v))for(var i in v)"function"===typeof v[i]?o(i,v[i].call(null)):o(i,v[i]);return s(!0),b.submitForm(t,n,{endpoint:e.endpoint,clientName:"@formspree/react@".concat(N)}).then((function(t){var e,r=t.response.status;return 200===r?(m&&console.log("Form submitted",t),c(!0),p([])):r>=400&&r<500?((e=t.body).errors&&p(e.errors),m&&console.log("Validation error",t),c(!1)):(m&&console.log("Unexpected error",t),c(!1)),t})).catch((function(t){throw m&&console.log("Unexpected error",t),c(!1),t})).finally((function(){s(!1)}))};return[{submitting:i,succeeded:f,errors:h},g,w]}var q=function(t){var e=t.prefix,r=t.field,o=t.errors,i=C(t,["prefix","field","errors"]),s=(o||[]).find((function(t){return t.field==r}));return s?n.createElement("div",i,e," ",s.message):null}},7559:function(t,e,r){var n;!function(o){"use strict";function i(t){var e=t&&t.Promise||o.Promise,r=t&&t.XMLHttpRequest||o.XMLHttpRequest,n=o;return function(){var t=Object.create(n,{fetch:{value:void 0,writable:!0}});return function(t){if(!t.fetch){var n="URLSearchParams"in t,o="Symbol"in t&&"iterator"in Symbol,i="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in t,a="ArrayBuffer"in t;if(a)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=function(t){return t&&DataView.prototype.isPrototypeOf(t)},c=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};b.prototype.append=function(t,e){t=h(t),e=p(e);var r=this.map[t];this.map[t]=r?r+","+e:e},b.prototype.delete=function(t){delete this.map[h(t)]},b.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},b.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},b.prototype.set=function(t,e){this.map[h(t)]=p(e)},b.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},b.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),y(t)},b.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),y(t)},b.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),y(t)},o&&(b.prototype[Symbol.iterator]=b.prototype.entries);var l=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];A.prototype.clone=function(){return new A(this,{body:this._bodyInit})},_.call(A.prototype),_.call(j.prototype),j.prototype.clone=function(){return new j(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new b(this.headers),url:this.url})},j.error=function(){var t=new j(null,{status:0,statusText:""});return t.type="error",t};var d=[301,302,303,307,308];j.redirect=function(t,e){if(-1===d.indexOf(e))throw new RangeError("Invalid status code");return new j(null,{status:e,headers:{location:t}})},t.Headers=b,t.Request=A,t.Response=j,t.fetch=function(t,n){return new e((function(e,o){var s=new A(t,n),a=new r;a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:T(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var r="response"in a?a.response:a.responseText;e(new j(r,t))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&i&&(a.responseType="blob"),s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),a.send("undefined"===typeof s._bodyInit?null:s._bodyInit)}))},t.fetch.polyfill=!0}function h(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function p(t){return"string"!==typeof t&&(t=String(t)),t}function y(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function b(t){this.map={},t instanceof b?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function m(t){if(t.bodyUsed)return e.reject(new TypeError("Already read"));t.bodyUsed=!0}function v(t){return new e((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function w(t){var e=new FileReader,r=v(e);return e.readAsArrayBuffer(t),r}function g(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(i&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(s&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(n&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(a&&i&&f(t))this._bodyArrayBuffer=g(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!a||!ArrayBuffer.prototype.isPrototypeOf(t)&&!c(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=g(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=m(this);if(t)return t;if(this._bodyBlob)return e.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return e.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?m(this)||e.resolve(this._bodyArrayBuffer):this.blob().then(w)}),this.text=function(){var t=m(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=v(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return e.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(E)}),this.json=function(){return this.text().then(JSON.parse)},this}function A(t,e){var r=(e=e||{}).body;if(t instanceof A){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new b(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new b(e.headers)),this.method=function(t){var e=t.toUpperCase();return l.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function E(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function T(t){var e=new b;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e}function j(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new b(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!==typeof t?t:this),{fetch:t.fetch,Headers:t.Headers,Request:t.Request,Response:t.Response}}()}void 0===(n=function(){return i}.call(e,r,e,t))||(t.exports=n)}("undefined"!==typeof self?self:"undefined"!==typeof r.g?r.g:this)}}]);