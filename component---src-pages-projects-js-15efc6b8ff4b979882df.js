(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"16l3":function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),a=r("vrFN"),i=r("hTlr"),c=r("kD0k"),l=r.n(c);r("ls82");function u(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,c,"next",t)}function c(t){u(a,n,o,i,c,"throw",t)}i(void 0)}))}}var f=function(){var t=s(l.a.mark((function t(e,r,n,o){var a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(!0);case 2:return t.prev=2,t.next=5,fetch(e);case 5:return a=t.sent,t.next=8,a.json();case 8:return i=t.sent,t.next=11,o(i);case 11:return t.next=13,r(!1);case 13:t.next=21;break;case 15:return t.prev=15,t.t0=t.catch(2),t.next=19,n(t.t0);case 19:return t.next=21,r(!1);case 21:case"end":return t.stop()}}),t,null,[[2,15]])})));return function(e,r,n,o){return t.apply(this,arguments)}}();e.default=function(){var t=Object(n.useState)([]),e=t[0],r=t[1],c=function(t){var e=Object(n.useState)([]),r=e[0],o=e[1],a=Object(n.useState)(!1),i=a[0],c=a[1],l=Object(n.useState)("idle"),u=l[0],s=(l[1],Object(n.useState)("")),h=s[0],p=s[1];return Object(n.useEffect)((function(){t&&f(t,c,p,o)}),[t]),{data:r,isloading:i,status:u,error:h}}("https://lmanzanero.herokuapp.com/projects"),l=c.data,u=c.status,s=c.isloading,h=c.error;return console.log(l,u,s,h),Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/photos/?albumId=1").then((function(t){return t.json()})).then((function(t){return r(t)}))}),[]),o.a.createElement(i.a,null,o.a.createElement(a.a,{title:"Projects",description:"Here is a collection of many of the projects that I have worked on."}),o.a.createElement("div",{className:"page"},o.a.createElement("h1",null,"My Recent Work"),o.a.createElement("div",{className:"projects-options"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{className:"option active",href:"#all",rel:"noreferrer"},"All")),o.a.createElement("li",null,o.a.createElement("a",{className:"option",href:"#web-design",rel:"noreferrer"},"Web Design")),o.a.createElement("li",null,o.a.createElement("a",{className:"option",href:"#mobile-development",rel:"noreferrer"},"Mobile Development")),o.a.createElement("li",null,o.a.createElement("a",{className:"option",href:"#videos",rel:"noreferrer"},"Videos")),o.a.createElement("li",null,o.a.createElement("a",{className:"option",href:"#music",rel:"noreferrer"},"Music")))),o.a.createElement("div",{className:"project-items"},s?"loading...":e.map((function(t){return o.a.createElement("div",{key:t.id,className:"project-item"},o.a.createElement("img",{alt:"",src:t.thumbnailUrl}),o.a.createElement("div",{className:"project-inner"},o.a.createElement("div",{className:"title"},t.title),o.a.createElement("div",{className:"category"},"Web Design"),o.a.createElement("div",{className:"links"},o.a.createElement("a",{href:t.url,target:"_blank",rel:"noreferrer"},o.a.createElement("button",null,"Live Link")))))})))))}},kD0k:function(t,e,r){t.exports=r("ls82")},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,a=Object.create(o.prototype),i=new b(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var u={};function s(){}function f(){}function h(){}var p={};p[o]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(L([])));m&&m!==e&&r.call(m,o)&&(p=m);var d=h.prototype=s.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=d.constructor=h,h.constructor=f,h[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(d),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new g(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(d),d[i]="Generator",d[o]=function(){return this},d.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-15efc6b8ff4b979882df.js.map