!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/show-cover"]=t():e["video/player/show-cover"]=t()}(self,(function(){return function(){var e,t,n={343:function(e,t,n){var o=n(645)((function(e){return e[1]}));o.push([e.id,'.bilibili-player-video::after {\n  position: absolute;\n  content: "";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  background: black var(--cover-url) center no-repeat;\n  background-size: contain;\n  pointer-events: none;\n  z-index: 10;\n}\n\n.bilibili-player-area.video-control-show.video-state-pause .bilibili-player-video::after {\n  display: block;\n}',""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var u=0;u<e.length;u++){var a=[].concat(e[u]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},879:function(e,t,n){var o=n(343);e.exports="string"==typeof o?o:o.toString()},705:function(e){"use strict";e.exports=coreApis.componentApis.video.videoInfo}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){c[e]=function(){return n[e]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return o}});var e=coreApis.observer,t=coreApis.spinQuery,n=coreApis.utils;const o={name:"showCoverBeforePlay",displayName:"播放前显示封面",urlInclude:coreApis.utils.urls.playerUrls,entry:async()=>{let o;// eslint-disable-next-line prefer-arrow-callback
(0,n.createHook)((0,n.isBwpVideo)()?BwpElement.prototype:HTMLVideoElement.prototype,"play",(function(){return document.body.style.removeProperty("--cover-url"),!0}));(0,e.videoChange)((async()=>{const e=await(0,t.select)((()=>unsafeWindow.aid));if(!e)return void console.warn("[播放前显示封面] 未找到av号");if(e===o)return;o=e;const{VideoInfo:n}=await Promise.resolve().then(r.t.bind(r,705,23)),i=new n(e);await i.fetchInfo(),document.body.style.setProperty("--cover-url",`url('${i.coverUrl}')`)}))},instantStyles:[{name:"showCoverBeforePlay",style:()=>Promise.resolve().then(r.t.bind(r,879,23))}],description:{"zh-CN":"在视频开始播放前, 在播放器中显示封面."},tags:[componentsTags.video]}}(),i=i.component}()}));