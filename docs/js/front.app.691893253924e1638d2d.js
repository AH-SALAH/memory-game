!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=28)}([function(t,e,n){(function(t){var o=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function r(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new r(i.call(setTimeout,o,arguments),clearTimeout)},e.setInterval=function(){return new r(i.call(setInterval,o,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(24),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){var n,o,i=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(t){n=r}try{o="function"==typeof clearTimeout?clearTimeout:s}catch(t){o=s}}();var c,l=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&p())}function p(){if(!u){var t=a(f);u=!0;for(var e=l.length;e;){for(c=l,l=[];++d<e;)c&&c[d].run();d=-1,e=l.length}c=null,u=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===s||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function h(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new m(t,e)),1!==l.length||u||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){var o={"./bathwinning.gif":4,"./dogtwerking.gif":5,"./excitedufc.gif":6,"./favicon.png":7,"./finishhim.gif":8,"./funnygrand.gif":9,"./geometry2.png":10,"./slipslidelol.gif":11,"./trophy.jpg":12,"./udacity-logo-svg-vector.svg":13,"./wininternet.gif":14};function i(t){var e=r(t);return n(e)}function r(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=3},function(t,e,n){t.exports=n.p+"img/bathwinning.gif"},function(t,e,n){t.exports=n.p+"img/dogtwerking.gif"},function(t,e,n){t.exports=n.p+"img/excitedufc.gif"},function(t,e,n){t.exports=n.p+"img/favicon.png"},function(t,e,n){t.exports=n.p+"img/finishhim.gif"},function(t,e,n){t.exports=n.p+"img/funnygrand.gif"},function(t,e,n){t.exports=n.p+"img/geometry2.png"},function(t,e,n){t.exports=n.p+"img/slipslidelol.gif"},function(t,e,n){t.exports=n.p+"img/trophy.jpg"},function(t,e,n){t.exports=n.p+"img/udacity-logo-svg-vector.svg"},function(t,e,n){t.exports=n.p+"img/wininternet.gif"},function(t,e,n){var o={"./browserconfig.xml":16,"./favicon.ico":17,"./humans.txt":18,"./robots.txt":19,"./site.webmanifest":20,"./tile-wide.png":21,"./tile.png":22};function i(t){var e=r(t);return n(e)}function r(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=15},function(t,e){t.exports="dist/browserconfig.xml"},function(t,e){t.exports="dist/favicon.ico"},function(t,e){t.exports="dist/humans.txt"},function(t,e){t.exports="dist/robots.txt"},function(t,e){t.exports="dist/site.webmanifest"},function(t,e){t.exports="dist/tile-wide.png"},function(t,e){t.exports="dist/tile.png"},function(t,e,n){},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var o,i=1,r={},s=!1,a=t.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(t);c=c&&c.setTimeout?c:t,"[object process]"==={}.toString.call(t.process)?o=function(t){e.nextTick(function(){u(t)})}:function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&u(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),o=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){u(t.data)},o=function(e){t.port2.postMessage(e)}}():a&&"onreadystatechange"in a.createElement("script")?function(){var t=a.documentElement;o=function(e){var n=a.createElement("script");n.onreadystatechange=function(){u(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():o=function(t){setTimeout(u,0,t)},c.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var s={callback:t,args:e};return r[i]=s,o(i),i++},c.clearImmediate=l}function l(t){delete r[t]}function u(t){if(s)setTimeout(u,0,t);else{var e=r[t];if(e){s=!0;try{!function(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}(e)}finally{l(t),s=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(1),n(2))},function(t,e,n){(function(t,o){var i=/%[sdj%]/g;e.format=function(t){if(!v(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var o=arguments,r=o.length,s=String(t).replace(i,function(t){if("%%"===t)return"%";if(n>=r)return t;switch(t){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(t){return"[Circular]"}default:return t}}),c=o[n];n<r;c=o[++n])h(c)||!w(c)?s+=" "+c:s+=" "+a(c);return s},e.deprecate=function(n,i){if(y(t.process))return function(){return e.deprecate(n,i).apply(this,arguments)};if(!0===o.noDeprecation)return n;var r=!1;return function(){if(!r){if(o.throwDeprecation)throw new Error(i);o.traceDeprecation?console.trace(i):console.error(i),r=!0}return n.apply(this,arguments)}};var r,s={};function a(t,n){var o={seen:[],stylize:l};return arguments.length>=3&&(o.depth=arguments[2]),arguments.length>=4&&(o.colors=arguments[3]),m(n)?o.showHidden=n:n&&e._extend(o,n),y(o.showHidden)&&(o.showHidden=!1),y(o.depth)&&(o.depth=2),y(o.colors)&&(o.colors=!1),y(o.customInspect)&&(o.customInspect=!0),o.colors&&(o.stylize=c),u(o,t,o.depth)}function c(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function l(t,e){return t}function u(t,n,o){if(t.customInspect&&n&&C(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(o,t);return v(i)||(i=u(t,i,o)),i}var r=function(t,e){if(y(e))return t.stylize("undefined","undefined");if(v(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(g(e))return t.stylize(""+e,"number");if(m(e))return t.stylize(""+e,"boolean");if(h(e))return t.stylize("null","null")}(t,n);if(r)return r;var s=Object.keys(n),a=function(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),T(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return d(n);if(0===s.length){if(C(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(b(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(_(n))return t.stylize(Date.prototype.toString.call(n),"date");if(T(n))return d(n)}var l,w="",O=!1,E=["{","}"];(p(n)&&(O=!0,E=["[","]"]),C(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(w=" "+RegExp.prototype.toString.call(n)),_(n)&&(w=" "+Date.prototype.toUTCString.call(n)),T(n)&&(w=" "+d(n)),0!==s.length||O&&0!=n.length?o<0?b(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=O?function(t,e,n,o,i){for(var r=[],s=0,a=e.length;s<a;++s)x(e,String(s))?r.push(f(t,e,n,o,String(s),!0)):r.push("");return i.forEach(function(i){i.match(/^\d+$/)||r.push(f(t,e,n,o,i,!0))}),r}(t,n,o,a,s):s.map(function(e){return f(t,n,o,a,e,O)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(l,w,E)):E[0]+w+E[1]}function d(t){return"["+Error.prototype.toString.call(t)+"]"}function f(t,e,n,o,i,r){var s,a,c;if((c=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),x(o,i)||(s="["+i+"]"),a||(t.seen.indexOf(c.value)<0?(a=h(n)?u(t,c.value,null):u(t,c.value,n-1)).indexOf("\n")>-1&&(a=r?a.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+a.split("\n").map(function(t){return"   "+t}).join("\n")):a=t.stylize("[Circular]","special")),y(s)){if(r&&i.match(/^\d+$/))return a;(s=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function p(t){return Array.isArray(t)}function m(t){return"boolean"==typeof t}function h(t){return null===t}function g(t){return"number"==typeof t}function v(t){return"string"==typeof t}function y(t){return void 0===t}function b(t){return w(t)&&"[object RegExp]"===O(t)}function w(t){return"object"==typeof t&&null!==t}function _(t){return w(t)&&"[object Date]"===O(t)}function T(t){return w(t)&&("[object Error]"===O(t)||t instanceof Error)}function C(t){return"function"==typeof t}function O(t){return Object.prototype.toString.call(t)}function E(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(y(r)&&(r=o.env.NODE_DEBUG||""),t=t.toUpperCase(),!s[t])if(new RegExp("\\b"+t+"\\b","i").test(r)){var n=o.pid;s[t]=function(){var o=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,o)}}else s[t]=function(){};return s[t]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=p,e.isBoolean=m,e.isNull=h,e.isNullOrUndefined=function(t){return null==t},e.isNumber=g,e.isString=v,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=y,e.isRegExp=b,e.isObject=w,e.isDate=_,e.isError=T,e.isFunction=C,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(26);var L=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",function(){var t=new Date,e=[E(t.getHours()),E(t.getMinutes()),E(t.getSeconds())].join(":");return[t.getDate(),L[t.getMonth()],e].join(" ")}(),e.format.apply(e,arguments))},e.inherits=n(27),e._extend=function(t,e){if(!e||!w(e))return t;for(var n=Object.keys(e),o=n.length;o--;)t[n[o]]=e[n[o]];return t}}).call(this,n(1),n(2))},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){"use strict";n.r(e);n(23);const o=(t,e)=>t.getAttribute("data-"+e),i=t=>((t,e,n)=>{var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)})(t,"was-processed","true"),r=t=>"true"===o(t,"was-processed"),s=function(t){return t.getBoundingClientRect().top+window.pageYOffset-t.ownerDocument.documentElement.clientTop},a=function(t,e,n){return(e===window?window.innerHeight+window.pageYOffset:s(e)+e.offsetHeight)<=s(t)-n},c=function(t){return t.getBoundingClientRect().left+window.pageXOffset-t.ownerDocument.documentElement.clientLeft},l=function(t,e,n){const o=window.innerWidth;return(e===window?o+window.pageXOffset:c(e)+o)<=c(t)-n},u=function(t,e,n){return(e===window?window.pageYOffset:s(e))>=s(t)+n+t.offsetHeight},d=function(t,e,n){return(e===window?window.pageXOffset:c(e))>=c(t)+n+t.offsetWidth};function f(t,e,n){return!(a(t,e,n)||u(t,e,n)||l(t,e,n)||d(t,e,n))}const p=function(t,e){var n;let o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)};const m=(t,e)=>e?t.replace(/\.(jpe?g|png)/gi,".webp"):t,h="undefined"!=typeof window,g=h&&!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),v=h&&"classList"in document.createElement("p"),y=h&&(()=>{var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")})(),b=(t,e)=>{v?t.classList.add(e):t.className+=(t.className?" ":"")+e},w=function(t,e,n,i){for(let r,s=0;r=t.children[s];s+=1)if("SOURCE"===r.tagName){let t=o(r,n);_(r,e,t,i)}},_=function(t,e,n,o){n&&t.setAttribute(e,m(n,o))},T={IMG:(t,e)=>{const n=y&&e.to_webp,i=e.data_srcset,r=t.parentNode;r&&"PICTURE"===r.tagName&&w(r,"srcset",i,n);const s=o(t,e.data_sizes);_(t,"sizes",s);const a=o(t,i);_(t,"srcset",a,n);const c=o(t,e.data_src);_(t,"src",c,n)},IFRAME:(t,e)=>{const n=o(t,e.data_src);_(t,"src",n)},VIDEO:(t,e)=>{const n=e.data_src,i=o(t,n);w(t,"src",n),_(t,"src",i),t.load()}},C=(t,e)=>{const n=e._settings,i=t.tagName,r=T[i];if(r)return r(t,n),e._updateLoadingCount(1),void(e._elements=((t,e)=>t.filter(t=>t!==e))(e._elements,t));((t,e)=>{const n=y&&e.to_webp,i=o(t,e.data_src),r=o(t,e.data_bg);if(i){let e=m(i,n);t.style.backgroundImage=`url("${e}")`}if(r){let e=m(r,n);t.style.backgroundImage=e}})(t,n)},O=function(t,e){t&&t(e)},E=(t,e,n)=>{t.addEventListener(e,n)},L=(t,e,n)=>{t.removeEventListener(e,n)},x=(t,e,n)=>{L(t,"load",e),L(t,"loadeddata",e),L(t,"error",n)},S=function(t,e,n){var o=n._settings;const i=e?o.class_loaded:o.class_error,r=e?o.callback_load:o.callback_error,s=t.target;((t,e)=>{v?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")})(s,o.class_loading),b(s,i),O(r,s),n._updateLoadingCount(-1)},j=(t,e)=>{const n=i=>{S(i,!0,e),x(t,n,o)},o=i=>{S(i,!1,e),x(t,n,o)};((t,e,n)=>{E(t,"load",e),E(t,"loadeddata",e),E(t,"error",n)})(t,n,o)},I=["IMG","IFRAME","VIDEO"];const k=function(t){this._settings=Object.assign({},{elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_enter:null,callback_finish:null,to_webp:!1},t),this._loadingCount=0,this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};k.prototype={_loopThroughElements:function(t){const e=this._settings,n=this._elements,o=n?n.length:0;let i,r=[],s=this._isFirstLoop;if(s&&(this._isFirstLoop=!1),0!==o){for(i=0;i<o;i++){let o=n[i];e.skip_invisible&&null===o.offsetParent||(t||f(o,e.container,e.threshold))&&(s&&b(o,e.class_initial),this.load(o),r.push(i))}((t,e)=>{for(;e.length;)t.splice(e.pop(),1)})(n,r)}else this._stopScrollHandler()},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},_updateLoadingCount:function(t){this._loadingCount+=t,0===this._elements.length&&0===this._loadingCount&&O(this._settings.callback_finish)},handleScroll:function(){const t=this._settings.throttle;if(0!==t){let e=Date.now(),n=t-(e-this._previousLoopTime);n<=0||n>t?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=e,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=Date.now(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),n))}else this._loopThroughElements()},loadAll:function(){this._loopThroughElements(!0)},update:function(t){const e=this._settings,n=t||this._queryOriginNode.querySelectorAll(e.elements_selector);this._elements=(t=>t.filter(t=>!r(t)))(Array.prototype.slice.call(n)),g?this.loadAll():(this._loopThroughElements(),this._startScrollHandler())},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},load:function(t,e){!function(t,e,n){var o=e._settings;!n&&r(t)||(O(o.callback_enter,t),I.indexOf(t.tagName)>-1&&(j(t,e),b(t,o.class_loading)),C(t,e),i(t),O(o.callback_set,t))}(t,this,e)}},h&&function(t,e){if(e)if(e.length)for(let n,o=0;n=e[o];o+=1)p(t,n);else p(t,e)}(k,window.lazyLoadOptions);var M=k,z=n(0),N=(n(25),{});function D(t){t.keys().forEach(function(e){N[e]=t(e);var n=e.split("/")[1].split(".")[0],o=document.querySelector('[alt="'+n+'"]');o&&[].indexOf(n)>-1&&(o.src=N[e])})}D(n(3)),D(n(15)),{container:document.querySelector("body > .container"),deck:document.querySelector(".deck"),stars:document.querySelector(".stars"),moves:document.querySelector(".moves"),countdownEl:document.querySelector(".countdown"),countdownNumberEl:document.querySelector(".countdown > .countdown-number"),modalContainer:document.querySelector(".modal-container"),modalBodyEl:document.querySelector(".modal-container > .modal-body"),countdown:60,cardsClasses:["gem","paper-plane","anchor","bolt","cube","leaf","bicycle","bomb"],cards:[],temporaryCards:[],winningCards:[],movesCount:0,numOfIcons:3,moveIconName:"star",moveIconElements:[],firstTimeModal:!0,lazyLoad:function(){return new M({elements_selector:".lazyload"})},Imgs:function(){var t={gifs:[],jpgs:[],pngs:[],svgs:[],otherFiles:[]};if(N)for(var e in N)N.hasOwnProperty(e)&&(N[e].search(/\.(gif)$/i)>-1?t.gifs.push(N[e]):N[e].search(/\.(jpe?g)$/i)>-1?t.jpgs.push(N[e]):N[e].search(/\.(png)$/i)>-1?t.pngs.push(N[e]):N[e].search(/\.(svg)$/i)>-1?t.svgs.push(N[e]):t.otherFiles.push(N[e]));return t},cardTemplate:function(t){return'<div class="card-wrapper animated">\n                    <div class="card" data-name="'+t+'">\n                        <div class="front">\n                            <object type="image/svg+xml" data="img/udacity-logo-svg-vector.svg"></object> \n                        </div>\n                        <div class="back">\n                            <i class="fas fa-'+t+'"></i>\n                        </div>\n                    </div>\n                </div>'},starTemplate:function(t){return'<i class="far fa-'+t+' animated"></i>'},modalStartTemplate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Click To",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Start";return t||(t="Click To"),e||(e="Start"),"<h2>"+t+" "+e+'</h2><button class="modal-start-btn '+e.toLocaleLowerCase()+'">'+e+"</button>"},modalWinningTemplate:function(){var t=this.Imgs(),e=t.gifs.slice(0),n=this.shuffle(e),o=n[Math.round(Math.random()*(n.length-1))],i=t.jpgs.filter(function(t,e){return t.search(/trophy/i)>-1?t:""})[0];return'<div class="winning-template" style="background:rgba(0,0,0,0.5) url('+i+') no-repeat top center/cover;">\n                    <h1>Congratulation!!</h1>\n                    <div class="omedetou">\n                        <i class="fas fa-star fa-3x"></i> \n                        <i class="fas fa-star fa-3x"></i>\n                        <i class="fas fa-star fa-3x"></i>\n                        <i class="fas fa-star fa-3x"></i>\n                        <i class="fas fa-star fa-3x"></i>\n                    </div>\n                    <h2>おめでとう~~~!</h2>\n                    <img class="lazyload" src="'+o+'" data-src="'+o+'" alt="'+i.split("/")[1].split(".")[0]+'" />\n                    '+this.modalStartTemplate(null,"Play Again")+"\n                </div>"},shuffle:function(t){for(var e=t.length,n=void 0,o=void 0;0!==e;)o=Math.floor(Math.random()*e),n=t[e-=1],t[e]=t[o],t[o]=n;return t},createCards:function(){for(var t=0;t<2;t++){var e=!0,n=!1,o=void 0;try{for(var i,r=this.cardsClasses[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var s=i.value;this.cards.push(this.cardTemplate(s))}}catch(t){n=!0,o=t}finally{try{!e&&r.return&&r.return()}finally{if(n)throw o}}}this.shuffle(this.cards),this.deck.innerHTML=this.cards.join(""),this.cards=[]},createMoveIcons:function(){for(var t=0;t<this.numOfIcons;t++)this.moveIconElements.push(this.starTemplate(this.moveIconName));this.stars.innerHTML=this.moveIconElements.join(""),this.moveIconElements=[]},openCard:function(t){t.classList.add("flip")},closeCard:function(t){t.classList.remove("flip"),t.parentElement.classList.remove("shake")},checkMatch:function(){return this.temporaryCards[0].dataset.name==this.temporaryCards[1].dataset.name},matched:function(){var t=!0,e=!1,n=void 0;try{for(var o,i=this.temporaryCards[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var r=o.value;r.classList.add("match"),r.parentElement.classList.add("tada"),this.winningCards.push(r)}}catch(t){e=!0,n=t}finally{try{!t&&i.return&&i.return()}finally{if(e)throw n}}if(this.clearTemporaryCards(),16==this.winningCards.length)return this.modalContent(this.modalWinningTemplate()),this.openModal(),this.resetTimer(),void this.lazyLoad().update();this.CountDown()},notMatched:function(){var t=this,e=0;return new Promise(function(n,o){var i=function(o){o.parentElement.classList.add("shake");var i=Object(z.setTimeout)(function(){if(t.closeCard(o),++e==t.temporaryCards.length)return Object(z.clearTimeout)(i),n({status:"complete",data:t.temporaryCards});Object(z.clearTimeout)(i)},500)},r=!0,s=!1,a=void 0;try{for(var c,l=t.temporaryCards[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){i(c.value)}}catch(t){s=!0,a=t}finally{try{!r&&l.return&&l.return()}finally{if(s)throw a}}})},notMatchedCB:function(){var t=this;this.notMatched().then(function(e){"complete"==e.status&&(t.clearTemporaryCards(),t.CountUp())}).catch(function(e){t.clearTemporaryCards()})},clearTemporaryCards:function(){this.temporaryCards=[]},clearWinningCards:function(){this.winningCards=[]},CountUp:function(){this.movesCount+=1,this.moves.innerText=this.movesCount,this.calcAvg(),this.fillIcon()},CountDown:function(){0!=this.movesCount&&(this.movesCount-=1,this.moves.innerText=this.movesCount,this.calcAvg(),this.fillIcon())},resetCount:function(){this.movesCount=0,this.moves.innerText=this.movesCount.toLocaleString()},resetTimer:function(){this.countdown=60,this.countdownNumberEl.innerText=this.countdown.toLocaleString(),this.countdownEl.classList.remove("bounceInDown","start")},calcAvg:function(){return Math.floor(this.movesCount/this.numOfIcons)},fillIcon:function(){var t=this.calcAvg(),e=this.stars.children;if(t>0&&e)for(var n=0;n<t;n++){var o=e[n];o&&!o.classList.contains("fas","pulse")&&(o.classList.add("fas","pulse"),o.classList.remove("far"))}},reset:function(t){var e=this;t&&t.classList.value.search(/\s*fa\s*/gi)>-1&&t.classList.add("rotate");var n=Object(z.setTimeout)(function(){e.container.classList.add("fade-out"),e.deck.innerHTML="",e.stars.innerHTML="",e.resetCount(),e.resetTimer(),e.clearTemporaryCards(),e.clearWinningCards(),e.init(),Object(z.clearTimeout)(n);var o=Object(z.setTimeout)(function(){t&&t.classList.contains("rotate")&&t.classList.remove("rotate"),e.container.classList.remove("fade-out"),e.timer(),Object(z.clearTimeout)(o)},500)},500)},timer:function(){var t=this,e=this;this.countdownEl.classList.add("bounceInDown","start"),this.countdownNumberEl.textContent=this.countdown.toLocaleString();var n=Object(z.setInterval)(function(){return 16==t.winningCards.length?(t.clearWinningCards(),Object(z.clearInterval)(n),!1):(e.countdown-=1,e.countdown<=0?e.countdown=60:e.countdown,e.countdownNumberEl.textContent=e.countdown.toLocaleString(),60==e.countdown?(Object(z.clearInterval)(n),e.timeOut(),!1):void 0)},1e3)},timeOut:function(){var t=this;this.countdownEl.classList.remove("bounceInDown"),this.countdownEl.classList.add("bounceOutUp");var e=Object(z.setTimeout)(function(){t.countdownEl.classList.remove("bounceOutUp","start"),Object(z.clearTimeout)(e)},500);this.modalContent(this.modalStartTemplate(null,"Restart")),this.openModal()},openModal:function(){var t=this;this.modalContainer.classList.add("open");var e=Object(z.setTimeout)(function(){t.modalBodyEl.classList.add("bounceInDown");t.modalContainer.addEventListener("click",function e(n){var o=n.target;o.innerText;if(o.classList.contains("modal-start-btn"))return o.classList.contains("modal-start-btn")&&o.classList.value.search(/\s*restart\s*|\s*play\s*again\s*/gi)>-1&&(t.firstTimeModal&&(t.firstTimeModal=!1),t.reset()),t.closeModal(),t.firstTimeModal&&t.timer(),t.modalContainer.removeEventListener("click",e),!1}),Object(z.clearTimeout)(e)},800)},closeModal:function(){var t=this;this.modalBodyEl.classList.remove("bounceInDown"),this.modalBodyEl.classList.add("bounceOutUp");var e=Object(z.setTimeout)(function(){t.modalContainer.classList.remove("open"),t.modalBodyEl.classList.remove("bounceOutUp"),Object(z.clearTimeout)(e)},1e3)},modalContent:function(t){if(!t)return console.log("Content param is undefined!");this.modalBodyEl.innerHTML=t},clickCard:function(){var t=this;this.deck.addEventListener("click",function(e){var n=e.target.parentElement;n.classList.value.search(/\s*flip\s*|\s*match\s*|^((?!card).)*$/gi)>-1||t.temporaryCards.length>=2||(t.openCard(n),t.temporaryCards.push(n),2==t.temporaryCards.length&&(t.checkMatch()?(t.matched(),t.clearTemporaryCards()):t.notMatchedCB()))})},init:function(){this.createCards(),this.createMoveIcons(),this.clickCard(),this.firstTimeModal&&(this.modalContent(this.modalStartTemplate()),this.openModal()),this.lazyLoad()}}.init()}]);