(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({article:"article",bookmarks:"bookmarks",bottombar:"bottombar",edit:"edit",index:"index",login:"login",new:"new",topbar:"topbar"}[e]||e)+"."+{article:"f71afc87",bookmarks:"42a0ff02",bottombar:"8b928998",edit:"adc0d68d",index:"e9d00429",login:"2177acca",new:"af22a362",topbar:"d165a08d"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={topbar:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({article:"article",bookmarks:"bookmarks",bottombar:"bottombar",edit:"edit",index:"index",login:"login",new:"new",topbar:"topbar"}[e]||e)+"."+{article:"31d6cfe0",bookmarks:"31d6cfe0",bottombar:"31d6cfe0",edit:"31d6cfe0",index:"31d6cfe0",login:"31d6cfe0",new:"31d6cfe0",topbar:"ef23ec71"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],d=u.getAttribute("data-href");if(d===r||d===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],l.parentNode.removeChild(l),n(i)},l.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var f=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1971:function(e,t,n){},"2e6f":function(e,t,n){"use strict";n("cef4")},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("289d"),a=(n("73ec"),n("ecee")),i=n("c074"),s=n("ad3d"),c=n("c1df"),u=n.n(c),d=n("1dce"),f=n.n(d),l={inserted:function(e,t){window.addEventListener("scroll",t.value)},unbind:function(e,t){window.removeEventListener("scroll",t.value)}},b={inserted:function(e,t){window.addEventListener("resize",t.value)},unbind:function(e,t){window.removeEventListener("resize",t.value)}},m={inserted:function(e,t){window.addEventListener("orientationchange",t.value)},unbind:function(e,t){window.removeEventListener("orientationchange",t.value)}},p={inserted:function(e,t){var n=e;n.resizeObserver=new ResizeObserver((function(e){var n,r=null===(n=e[0])||void 0===n?void 0:n.contentRect;t.value(r)})),n.resizeObserver.observe(e,{box:"border-box"})},unbind:function(e){e.resizeObserver.unobserve(e)}},h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"w-orientation",rawName:"v-w-orientation",value:e.orientation,expression:"orientation"},{name:"w-resize",rawName:"v-w-resize",value:e.resize,expression:"resize"}],attrs:{id:"app"}},[n("router-view",{attrs:{name:"topbar"}}),n("Main",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1),n("Bottombar",[n("router-view",{attrs:{name:"bottombar"}})],1)],1)},j=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"is-flex is-flex-direction-column",attrs:{id:"main"}},[e._t("default")],2)},g=[],w={},y=w,k=(n("2e6f"),n("2877")),S=Object(k["a"])(y,v,g,!1,null,null,null),x=S.exports,O=n("bd12"),E=n("87e9"),z={components:{Main:x,Bottombar:O["a"]},data:function(){return{bp:{}}},mounted:function(){this.setVHeight(),this.calcBp(),localStorage.setItem("posts",JSON.stringify(E["a"])),localStorage.setItem("users",JSON.stringify(E["b"]))},methods:{orientation:function(){this.setVHeight()},resize:function(){this.setVHeight(),this.calcBp()},setVHeight:function(){document.documentElement.style.setProperty("--v-height","".concat(window.innerHeight,"px"))},calcBp:function(){this.$store.dispatch("calcBp")}}},T=z,P=(n("5c0b"),Object(k["a"])(T,h,j,!1,null,null,null)),_=P.exports,A=(n("a623"),n("7db0"),n("d3b7"),n("8c4f")),N=n("2f62"),I=(n("4de4"),n("25f0"),n("96cf"),n("1da1")),R=function(){var e=[];try{e=JSON.parse(localStorage.getItem("users"))}catch(t){}return e},B=function(e){var t=e.login,n=e.password;return new Promise((function(e,r){setTimeout((function(){var o=R()||[],a=o.filter((function(e){return e.login===t}))[0];a&&(a.password||"").toString()===(n||"").toString()?e({id:a.id,login:a.login,role:a.role}):r(new Error("bad credentials"))}),200)}))},C=function(e){return new Promise((function(t,n){setTimeout((function(){var r=R()||[],o=r.filter((function(t){return t.id===e}))[0];o?t(o.login):n(new Error("User with ".concat(e," not found")))}),100)}))},L={namespaced:!0,state:{me:{}},mutations:{SET_ME:function(e,t){e.me=t}},actions:{login:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o=t.login,a=t.password,n.next=4,B({login:o,password:a}).then((function(e){r("SET_ME",e),localStorage.setItem("user",JSON.stringify(e))}));case 4:case"end":return n.stop()}}),n)})))()},getUserLogin:function(e,t){return C(t)},logout:function(e){var t=e.commit;t("SET_ME",{}),localStorage.removeItem("user")}}},M=(n("a4d3"),n("e01a"),n("99af"),n("d81d"),n("fb6a"),n("2909")),J=function(){var e=[];try{e=JSON.parse(localStorage.getItem("posts"))}catch(t){}return e},H=function(e){return new Promise((function(t){setTimeout((function(){var n=10,r=J().slice((e-1)*n,e*n),o=J().length;t({count:o,posts:r})}),200)}))},$=function(e){return new Promise((function(t,n){setTimeout((function(){var r=J().filter((function(t){return t.id===e}))[0];r?t(r):n(new Error("Post ".concat(e," not found")))}),200)}))},U=function(e){return new Promise((function(t){setTimeout((function(){var n=e,r=J(),o=Math.max.apply(Math,Object(M["a"])(r.map((function(e){return e.id}))))+1;n.id=o;var a=[].concat(Object(M["a"])(r),[n]);localStorage.setItem("posts",JSON.stringify(a)),t()}),200)}))},q=function(e){return new Promise((function(t,n){setTimeout((function(){var r=J(),o=r.filter((function(t){return t.id===e}))[0];if(o){var a=r.filter((function(t){return t.id!==e}));localStorage.setItem("posts",JSON.stringify(a)),t()}else n(new Error("Post ".concat(e," not found")))}),200)}))},D=function(e){return new Promise((function(t,n){setTimeout((function(){var r=J(),o=r.filter((function(t){return t.id===e.id}))[0];o?(Object.assign(o,e),localStorage.setItem("posts",JSON.stringify(r)),t()):n(new Error("Post ".concat(e.id," not found")))}),50)}))},V=function(e){return new Promise((function(t,n){var r=J(),o=r.filter((function(t){return t.id===e}))[0]||{};o.claps+=1,D(o).then((function(){return t()})).catch((function(e){return n(e)}))}))},W={namespaced:!0,state:{count:0,posts:[],post:{}},mutations:{SET_POSTS:function(e,t){e.posts=t},SET_POST:function(e,t){e.post=t},SET_COUNT:function(e,t){e.count=t}},actions:{getPosts:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o=t||1,n.next=4,H(o).then((function(e){r("SET_COUNT",e.count),r("SET_POSTS",e.posts)}));case 4:case"end":return n.stop()}}),n)})))()},getPost:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,$(t).then((function(e){r("SET_POST",e)}));case 3:case"end":return n.stop()}}),n)})))()},createPost:function(e,t){var n=this;return Object(I["a"])(regeneratorRuntime.mark((function r(){var o,a,i,s,c,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=e.rootState,a=t.title,i=t.description,s=n._vm.$moment().format(),c=o.user.me.id,u={title:a,description:i,claps:0,createdAt:s,updateAt:s,userId:c},r.next=7,U(u);case 7:case"end":return r.stop()}}),r)})))()},updatePost:function(e,t){var n=this;return Object(I["a"])(regeneratorRuntime.mark((function e(){var r,o,a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.id,o=t.title,a=t.description,i=n._vm.$moment().format(),s={id:r,title:o,description:a,updateAt:i},e.next=5,D(s);case 5:case"end":return e.stop()}}),e)})))()},deletePost:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:case"end":return e.stop()}}),e)})))()},clapPost:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:case"end":return e.stop()}}),e)})))()}}};r["a"].use(N["a"]);var Z=new N["a"].Store({state:{bp:{}},mutations:{SET_BP:function(e,t){e.bp=t}},actions:{calcBp:function(e){var t=e.commit,n=window.innerWidth,r=64,o={width:n,mobile:n<769,tablet:n>=769&&n<960+r,desktop:n>=960+r&&n<1152+r,widescreen:n>=1152+r&&n<1344+r,fullhd:n>=1344+r};t("SET_BP",o)}},modules:{user:L,post:W}}),F=function(e){var t=e.store,n={};try{n=JSON.parse(localStorage.getItem("user"))||{}}catch(r){}return"id"in n&&t.commit("user/SET_ME",n),!0},K=function(e){var t=e.store;F({store:t});var n=t.state.user.me,r=!1;return n&&"id"in n&&(r=!0),r},G=function(e){var t=e.store,n=!1;return n=!!K({store:t})&&"writer"===t.state.user.me.role,n},Q={isAuthenticated:K,isWriter:G,checkAuth:F};r["a"].use(A["a"]);var X=[{path:"/",name:"index",components:{default:function(){return n.e("index").then(n.bind(null,"1e4b"))},topbar:function(){return n.e("topbar").then(n.bind(null,"b3d0"))},bottombar:function(){return n.e("bottombar").then(n.bind(null,"ef2a"))}}},{path:"/",name:"login",components:{default:function(){return n.e("login").then(n.bind(null,"dd7b"))},topbar:function(){return n.e("topbar").then(n.bind(null,"b3d0"))},bottombar:function(){return n.e("bottombar").then(n.bind(null,"ef2a"))}}},{path:"/edit/:id",name:"edit",components:{default:function(){return n.e("edit").then(n.bind(null,"a2c6"))},topbar:function(){return n.e("topbar").then(n.bind(null,"7993"))},bottombar:function(){return n.e("bottombar").then(n.bind(null,"ef2a"))}},props:{topbar:function(e){return{title:"Edit post ".concat(e.params.id)}}},meta:{middleware:[Q.isAuthenticated,Q.isWriter]}},{path:"/:userId/:id",name:"article",components:{default:function(){return n.e("article").then(n.bind(null,"72e1"))},topbar:function(){return n.e("topbar").then(n.bind(null,"7993"))},bottombar:function(){return n.e("bottombar").then(n.bind(null,"5a30"))}}},{path:"/bookmarks",name:"bookmarks",components:{default:function(){return n.e("bookmarks").then(n.bind(null,"a658"))},topbar:function(){return n.e("topbar").then(n.bind(null,"33a5"))},bottombar:function(){return n.e("bottombar").then(n.bind(null,"ef2a"))}},meta:{middleware:[Q.isAuthenticated]}},{path:"/new",name:"new",components:{default:function(){return n.e("new").then(n.bind(null,"759b"))},topbar:function(){return n.e("topbar").then(n.bind(null,"e4d2"))},bottombar:function(){return n.e("bottombar").then(n.bind(null,"ef2a"))}},props:{topbar:{title:"New"}},meta:{middleware:[Q.isAuthenticated,Q.isWriter]}},{path:"/activity",name:"activity",components:{default:function(){return n.e("new").then(n.bind(null,"7280"))},topbar:function(){return n.e("topbar").then(n.bind(null,"e4d2"))},bottombar:function(){return n.e("bottombar").then(n.bind(null,"ef2a"))}},props:{topbar:{title:"Activity"}},meta:{middleware:[Q.isAuthenticated]}},{path:"/profile",name:"profile",components:{default:function(){return n.e("new").then(n.bind(null,"b3b1"))},topbar:function(){return n.e("topbar").then(n.bind(null,"e4d2"))},bottombar:function(){return n.e("bottombar").then(n.bind(null,"ef2a"))}},props:{topbar:{title:"Profile"}},meta:{middleware:[Q.isAuthenticated]}}],Y=new A["a"]({mode:"history",base:"/",routes:X,linkActiveClass:"is-active is-inverted"});Y.beforeEach((function(e,t,n){var r={to:e,from:t,next:n,store:Z},o={};if(e.matched.every((function(e){return!e.meta.middleware})))Q.checkAuth(r),o={};else{var a=e.matched.find((function(e){return e.meta.middleware})).meta.middleware;o=a.every((function(e){return e(r)}))?{}:{name:"login",query:{redirect:e.path}}}return n(o)}));var ee=Y;r["a"].config.productionTip=!1,u.a.locale("ru"),a["c"].add(i["a"]),r["a"].component("vue-fontawesome",s["a"]),r["a"].use(o["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas"}),r["a"].use(f.a),r["a"].directive("w-scroll",l),r["a"].directive("w-resize",b),r["a"].directive("w-orientation",m),r["a"].directive("resize",p),r["a"].prototype.$moment=u.a,new r["a"]({router:ee,store:Z,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"68a9":function(e,t,n){"use strict";n("1971")},"73ec":function(e,t,n){},"87e9":function(e){e.exports=JSON.parse('{"b":[{"id":1,"login":"writer@mail.com","password":123456,"role":"writer"},{"id":2,"login":"reader@mail.com","password":123456,"role":"reader"}],"a":[{"id":1,"title":"Название поста","description":"Текст","claps":0,"createdAt":"2019-09-29T00:00:00.000Z","updateAt":"2019-09-29T00:00:00.000Z","userId":1},{"id":2,"title":"Название поста","description":"Текст","claps":0,"createdAt":"2019-09-29T00:00:00.000Z","updateAt":"2019-09-29T00:00:00.000Z","userId":2}]}')},"9c0c":function(e,t,n){},bd12:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{directives:[{name:"resize",rawName:"v-resize",value:e.resize,expression:"resize"}],class:e.bottombarType,attrs:{id:"bottombar"}},[e._t("default")],2)},o=[],a={props:{bottombarType:{type:String,default:"has-background-black"}},mounted:function(){},methods:{resize:function(e){this.setBottombarHeight(e)},setBottombarHeight:function(e){document.documentElement.style.setProperty("--bottombar","".concat(e.height,"px"))}}},i=a,s=(n("68a9"),n("2877")),c=Object(s["a"])(i,r,o,!1,null,null,null);t["a"]=c.exports},cef4:function(e,t,n){}});
//# sourceMappingURL=app.131e8adb.js.map