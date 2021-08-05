(function(e){function t(t){for(var o,i,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-25a19ac6":"1d9809e1","chunk-2d237cc7":"25cec8a7"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=o);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var s=new Error;r=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"28d1":function(e,t){},2919:function(e,t,n){"use strict";(function(e){var t=n("28d1"),o=n.n(t);e.lang=localStorage.getItem("lang")||"zh",e.Unit=o.a}).call(this,n("c8ba"))},"3fb4":function(e,t,n){var o={"./Blog.vue":["fd3f","chunk-2d237cc7"],"./Home.vue":["bb51","chunk-25a19ac6"]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id="3fb4",e.exports=a},5364:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=n("2877"),c={},u=Object(i["a"])(c,a,r,!1,null,null,null),s=u.exports,l=(n("159b"),n("d3b7"),n("ddb0"),n("ac1f"),n("1276"),n("8c4f"));function d(e,t){return e.keys().forEach((function(n){var o=n.split(".")[1];o.indexOf("Home")>-1&&(o="/"),t.push({path:o,name:o.substring(1),component:function(){return e(n)}})})),t}o["a"].use(l["a"]);var f=[];f=d(n("3fb4"),f);var p=new l["a"]({mode:"history",base:"/",routes:f}),b=p,m=n("2f62");o["a"].use(m["a"]);var h=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v={navHome:"个人主页",navBlog:"博客",navLang:"En/中",enName:"HI <b>,</b>我是 OLIVER<b>.</b>",personalDesc:"中文名: 陈冬<b>,</b> 我是一个web前端工程师",aboutMeTitle:"关于我",aboutMeDesc:"喜欢专研新颖的的web前端技术，热爱自己的工作和生活，对代码习惯性遵循更简单的方式，也喜欢通过博客来记录自己的成长。",aboutSocialContact:"我的技术圈:",email:"<span>email:</span> oliverchen741@gmail.com",educationTitle:"教育经历",educationItem:[{educationDate:"2012-1016",educationBackground:"西华大学"},{educationDate:"2012-1016",educationBackground:"本科学士学位"},{educationDate:"2012-1016",educationBackground:"全国计算机等级考试二级"}],skillsItem:["Html","Css","Javascript","Jquery","Vue","Axios","Git","Svn","Php","Perl","Yii2","H5","Svg","小程序","dedeCMS","node"],skillsTitle:"SKILLS",skillsLineItem:[{text:"Vue",bar:"90%"},{text:"Html",bar:"90%"},{text:"Css",bar:"90%"},{text:"Javascript",bar:"90%"},{text:"Jquery",bar:"90%"},{text:"Git",bar:"90%"},{text:"dedeCMS",bar:"90%"},{text:"node",bar:"60%"},{text:"Svn",bar:"60%"},{text:"小程序",bar:"70%"},{text:"Php",bar:"40%"},{text:"Yii2",bar:"40%"}],experienceTitle:"工作经历",experienceItem:[{date:"2016-2017",company:"世帆科技科技有限公司",desc:"负责web前端工作，主要是通过dedeCMS框架搭建具备后台功能对门户网站，主要技术栈html, css, js, jq, dedeCMS等。"},{date:"2017-Present",company:"茂松软件",desc:"负者前端任务， 主要工作是优化现有网站以及参与旧站点老代码对重构工作，主要用到技术栈vue,js,node,git,php,yii等"}],portfolioTitle:"项目",contactMeTitle:"联系我"},g={navHome:"homepage",navBlog:"blog",navLang:"En/中",enName:"HI <b>,</b>I AM OLIVER<b>.</b>",personalDesc:"Chinese name: chen dong<b>,</b> I'm a Web front-end engineer",aboutMeTitle:"ABOUT ME",aboutMeDesc:"I like to study novel Web front-end technology, love my work and life, and habitually follow a simpler way to code. I also like to record my growth through blog.",aboutSocialContact:"My tech circle:",email:"<span>email:</span> oliverchen741@gmail.com",qq:"<span>QQ:</span> 852634825@qq.com",educationTitle:"EDUCATION",educationItem:[{educationDate:"2012-1016",educationBackground:"xihua university"},{educationDate:"2012-1016",educationBackground:"bachelor's degree"},{educationDate:"2012-1016",educationBackground:"National Computer Rank Examination Level 2"}],skillsItem:["Html","Css","Javascript","Jquery","Vue","Axios","Git","Svn","Php","Perl","Yii2","H5","Svg","小程序","dedeCMS","node"],skillsTitle:"SKILLS",skillsLineItem:[{text:"Vue",bar:"90%"},{text:"Html",bar:"90%"},{text:"Css",bar:"90%"},{text:"Javascript",bar:"90%"},{text:"Jquery",bar:"90%"},{text:"Git",bar:"90%"},{text:"dedeCMS",bar:"90%"},{text:"node",bar:"60%"},{text:"Svn",bar:"60%"},{text:"小程序",bar:"70%"},{text:"Php",bar:"40%"},{text:"Yii2",bar:"40%"}],experienceTitle:"EXPERIENCE",experienceItem:[{date:"2016-2017",company:"Shifan Technology Co., Ltd",desc:"Responsible for front-end tasks. Dedecms framework is mainly used to build a portal website with background functions, using the technology stack HTML, CSS, JS, JQ, dedeCMS."},{date:"2017-Present",company:"Mason Software",desc:"The front-end task is mainly to optimize the existing website and participate in the reconstruction of the old code of the old site. It mainly uses the technology stack Vue, JS, Node, PHP, Yii,git and so on"}],portfolioTitle:"PORTFOLIO",contactMeTitle:"CONTACT ME"},y={install:function(e,t){e.mixin({computed:{language:function(){return"zh"==lang?v:g}}})}};n("2919"),n("bccf"),n("5364");o["a"].config.productionTip=!1,o["a"].use(y),new o["a"]({router:b,store:h,render:function(e){return e(s)}}).$mount("#app")},bccf:function(e,t,n){}});
//# sourceMappingURL=app.b6a541a5.js.map