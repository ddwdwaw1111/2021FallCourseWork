(function(e){function t(t){for(var a,i,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6134ff6f"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,o,i){var c=Object(a["v"])("Nav"),s=Object(a["v"])("router-view");return Object(a["r"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(c),Object(a["h"])(s)],64)}var o=n("cf05"),i=n.n(o),c={class:"navbar",role:"navigation","aria-label":"main navigation"},s={class:"navbar-brand"},u=Object(a["e"])("a",{class:"navbar-item",href:"https://bulma.io"},[Object(a["e"])("img",{src:i.a,width:"112",height:"28"}),Object(a["g"])(" Be Happy ")],-1),l=Object(a["e"])("span",{"aria-hidden":"true"},null,-1),b=Object(a["e"])("span",{"aria-hidden":"true"},null,-1),d=Object(a["e"])("span",{"aria-hidden":"true"},null,-1),v=[l,b,d],p=Object(a["f"])('<div class="navbar-start"><a class="navbar-item" href="/"> Home </a><a class="navbar-item" href="/feed"> Feed </a><a class="navbar-item" href="/about"> About </a><div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link"> More </a><div class="navbar-dropdown"><a class="navbar-item"> About </a><a class="navbar-item"> Jobs </a><a class="navbar-item"> Contact </a><hr class="navbar-divider"><a class="navbar-item"> Report an issue </a></div></div></div>',1),f={class:"navbar-end"},m={class:"navbar-item"};function h(e,t,n,r,o,i){var l=Object(a["v"])("login-badge");return Object(a["r"])(),Object(a["d"])("nav",c,[Object(a["e"])("div",s,[u,Object(a["e"])("a",{role:"button",class:Object(a["n"])(["navbar-burger",{"is-active":o.isActive}]),"aria-label":"menu","aria-expanded":"false",onClick:t[0]||(t[0]=function(e){return o.isActive=!o.isActive})},v,2)]),Object(a["e"])("div",{id:"navbarBasicExample",class:Object(a["n"])(["navbar-menu",{"is-active":o.isActive}])},[p,Object(a["e"])("div",f,[Object(a["e"])("div",m,[Object(a["h"])(l)])])],2)])}n("b0c0");var j={key:0,class:"buttons"},O=Object(a["e"])("a",{class:"button is-primary"},[Object(a["e"])("strong",null,"Sign up")],-1),g={key:1};function y(e,t,n,r,o,i){return e.Session.user?(Object(a["r"])(),Object(a["d"])("div",g," Hello "+Object(a["x"])(e.name),1)):(Object(a["r"])(),Object(a["d"])("div",j,[O,Object(a["e"])("a",{class:"button is-light",onClick:t[0]||(t[0]=function(){return i.Login&&i.Login.apply(i,arguments)})}," Log in ")]))}var w={user:null,messages:[],Login:function(){w.user={FirstName:"Zihao",LastName:"Wang",Id:"12345"}}},S=w,k={data:function(){return{Session:S}},methods:{Login:function(){this.Session.login()},computed:{name:function(){return this.Session.user.FirstName+" "+this.Session.user.LastName}}}},x=n("6b0d"),L=n.n(x);const A=L()(k,[["render",y]]);var P=A,N={components:{LoginBadge:P},data:function(){return{isActive:!1}}};const _=L()(N,[["render",h]]);var C=_,H={components:{Nav:C}};const M=L()(H,[["render",r]]);var T=M,E=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),F={class:"home"},B=Object(a["e"])("img",{alt:"Vue logo",src:i.a},null,-1),J=Object(a["e"])("h1",null,"This is actually the home page",-1),q=[B,J];function I(e,t,n,r,o,i){return Object(a["r"])(),Object(a["d"])("div",F,q)}var R={name:"Home",components:{}};const V=L()(R,[["render",I]]);var W=V,Z=[{path:"/",name:"Home",component:W},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/feed",name:"Feed",component:function(){return n.e("about").then(n.bind(null,"4787"))}}],z=Object(E["a"])({history:Object(E["b"])("/"),routes:Z}),D=z;n("6597"),n("5ed1");Object(a["c"])(T).use(D).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.11ce8188.js.map