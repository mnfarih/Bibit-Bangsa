(function(t){function e(e){for(var a,n,u=e[0],o=e[1],l=e[2],c=0,m=[];c<u.length;c++)n=u[c],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,n=1;n<i.length;n++){var o=i[n];0!==s[o]&&(a=!1)}a&&(r.splice(e--,1),t=u(u.s=i[0]))}return t}var a={},s={app:0},r=[];function n(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"55cd7e11"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.e=function(t){var e=[],i=s[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,a){i=s[t]=[e,a]}));e.push(i[2]=a);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.src=n(t);var l=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(c);var i=s[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,i[1](l)}s[t]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,i){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(i,a,function(e){return t[e]}.bind(null,a));return i},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"272f":function(t,e,i){"use strict";i("f907")},"366a":function(t,e,i){"use strict";i("4574")},"3d5b":function(t,e,i){"use strict";i("8423")},4574:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("4989"),i("f9e3");var a=i("5f5b"),s=(i("2dd8"),i("812b"),i("2b0e")),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view"),i("custom-footer")],1)},n=[],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"footer"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[t._m(0),i("div",{staticClass:"col-md-6"},[i("h4",[t._v("Our Social Media")]),i("div",{staticStyle:{display:"flex","flex-direction":"row"}},[i("div",{staticClass:"socmed",on:{click:function(e){return t.goTo("facebook")}}},[i("i",{staticClass:"fab fa-facebook-f fa-2x"})]),i("div",{staticClass:"socmed",on:{click:function(e){return t.goTo("twitter")}}},[i("i",{staticClass:"fab fa-twitter fa-2x"})]),i("div",{staticClass:"socmed",on:{click:function(e){return t.goTo("instagram")}}},[i("i",{staticClass:"fab fa-instagram fa-2x"})])])])])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md-6"},[i("h1",{staticClass:"bibit-bangsa",staticStyle:{color:"white"}},[t._v("Bibit Bangsa")])])}],l={data(){return{}},mounted(){},methods:{goTo(t){window.open(`https://www.${t}.com`)}}},c=l,d=(i("641b"),i("2877")),m=Object(d["a"])(c,u,o,!1,null,"3eeccd72",null),p=m.exports,v={data(){return{}},components:{customFooter:p},mounted(){},methods:{}},f=v,h=(i("034f"),Object(d["a"])(f,r,n,!1,null,null,null)),g=h.exports,b=i("8c4f"),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[t._m(0),t._m(1),i("div",{staticClass:"container mt-5"},[i("h1",[t._v("Guides")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 padding-40",on:{click:function(e){return t.$router.push("/guide")}}},[t._m(2),t._m(3)]),t._m(4),t._m(5),t._m(6)])])])},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pinned-to-top"},[i("h1",{staticClass:"bibit-bangsa",staticStyle:{"margin-left":"140px","margin-top":"20px",color:"white"}},[t._v("Bibit Bangsa")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carousel slide brund--style",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[i("ol",{staticClass:"carousel-indicators"},[i("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),i("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),i("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}})]),i("div",{staticClass:"carousel-inner"},[i("div",{staticClass:"carousel-item active"},[i("img",{staticClass:"d-block w-100",attrs:{src:"https://picsum.photos/1920/800/?random=54",alt:"First slide"}}),i("div",{staticClass:"carousel-caption d-none d-md-block"},[i("h5",[t._v("One-Stop Shop Anti-Cyber Bullying Guides")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nunc vel orci lacinia aliquet.")])])]),i("div",{staticClass:"carousel-item"},[i("img",{staticClass:"d-block w-100",attrs:{src:"https://picsum.photos/1920/800/?random=55",alt:"Second slide"}}),i("div",{staticClass:"carousel-caption d-none d-md-block"},[t._v("> "),i("h5",[t._v("One-Stop Shop Anti-Cyber Bullying Guides")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nunc vel orci lacinia aliquet.")])])]),i("div",{staticClass:"carousel-item"},[i("img",{staticClass:"d-block w-100",attrs:{src:"https://picsum.photos/1920/800/?random=56",alt:"Third slide"}}),i("div",{staticClass:"carousel-caption d-none d-md-block"},[t._v("> "),i("h5",[t._v("One-Stop Shop Anti-Cyber Bullying Guides")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nunc vel orci lacinia aliquet.")])])])]),i("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"prev"}},[i("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"sr-only"},[t._v("Previous")])]),i("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"next"}},[i("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"sr-only"},[t._v("Next")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","justify-content":"center"}},[i("div",{staticClass:"guide-image guide1"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"guide-desc"},[i("h3",{staticClass:"mt-4"},[t._v("Word can also hurt")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius urna, nec ullamcorper ex. Etiam a cursus lectus, vitae porttitor metus.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md-6 padding-40"},[i("div",{staticStyle:{display:"flex","justify-content":"center"}},[i("div",{staticClass:"guide-image guide2"})]),i("div",{staticClass:"guide-desc"},[i("h3",{staticClass:"mt-4"},[t._v("How to stop cyberbullying")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius urna, nec ullamcorper ex. Etiam a cursus lectus, vitae porttitor metus.")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md-6 padding-40"},[i("div",{staticStyle:{display:"flex","justify-content":"center"}},[i("div",{staticClass:"guide-image guide3"})]),i("div",{staticClass:"guide-desc"},[i("h3",{staticClass:"mt-4"},[t._v("Being Mature On Our Terms")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius urna, nec ullamcorper ex. Etiam a cursus lectus, vitae porttitor metus.")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md-6 padding-40"},[i("div",{staticStyle:{display:"flex","justify-content":"center"}},[i("div",{staticClass:"guide-image guide4"})]),i("div",{staticClass:"guide-desc"},[i("h3",{staticClass:"mt-4"},[t._v("Social Media and It's Harms")]),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius urna, nec ullamcorper ex. Etiam a cursus lectus, vitae porttitor metus.")])])])}],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._m(0),i("h3",[t._v("Installed CLI Plugins")]),t._m(1),i("h3",[t._v("Essential Links")]),t._m(2),i("h3",[t._v("Ecosystem")]),t._m(3)])},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),i("br"),t._v(" check out the "),i("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),i("li",[i("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),i("li",[i("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),i("li",[i("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),i("li",[i("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),i("li",[i("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),i("li",[i("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],w={name:"HelloWorld",props:{msg:String}},q=w,j=(i("272f"),Object(d["a"])(q,y,x,!1,null,"df2aa6b2",null)),k=j.exports,E={name:"Home",components:{HelloWorld:k}},S=E,O=(i("3d5b"),Object(d["a"])(S,_,C,!1,null,"1373859e",null)),$=O.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("div",{staticClass:"container"},[i("div",{staticClass:"back-button",on:{click:function(e){return t.$router.push("/")}}},[i("i",{staticClass:"fas fa-angle-left fa-2x"})]),i("div",{staticClass:"poster mt-5"}),i("h2",{staticStyle:{"font-size":"220%","text-align":"center",margin:"30px 0 20px"}},[t._v("Say No To Cyberbullying")]),t._m(1)])])},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header mb-3"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"bibit-bangsa",staticStyle:{padding:"20px 0",color:"rgb(97, 97, 97)","text-shadow":"none"}},[t._v("Bibit Bangsa")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"text-align":"justify",width:"80%",margin:"0 auto"}},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius urna, nec ullamcorper ex. Etiam a cursus lectus, vitae porttitor metus. Nunc vestibulum, dolor vel porta viverra, augue sapien posuere urna, quis lobortis risus sem dignissim orci. Ut velit tortor, porta nec volutpat at, vulputate et odio. Proin dui felis, maximus eget viverra non, bibendum in ante. Nullam eleifend lacus vitae commodo lacinia. Nunc ante elit, consectetur quis mollis et, pellentesque laoreet arcu. Ut sit amet purus eget dui semper aliquam. Ut vulputate est id tortor consequat lacinia.")]),i("p",[t._v("Suspendisse accumsan enim ac nibh tristique tempor. Aenean lobortis at mauris vitae placerat. Fusce id tellus sed arcu porta hendrerit. In semper, tellus sit amet iaculis egestas, elit turpis tempor sapien, id consequat massa lorem id augue. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vestibulum iaculis ex in pharetra. Phasellus fermentum posuere facilisis. Proin efficitur tristique neque, sed interdum leo molestie non. In vestibulum, tellus eget vehicula aliquam, nisl erat euismod orci, in malesuada dolor lorem ut eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas consequat at nunc vitae ultrices. Vivamus vehicula libero at augue fermentum, vel mattis ligula ullamcorper. Quisque quis luctus justo, eu dapibus purus. Nulla suscipit elit purus, at semper sapien volutpat eget.")]),i("p",[t._v("Suspendisse viverra et enim eget lobortis. Praesent volutpat dolor non neque rhoncus, vitae sodales ex tempus. Donec rhoncus ex sit amet metus vulputate tempor. Proin nec turpis non nunc varius consectetur. Morbi nisl massa, varius id blandit nec, semper non nulla. Maecenas mattis arcu sit amet arcu gravida tincidunt. Curabitur lacinia non sapien sed volutpat.")]),i("p",[t._v("Mauris feugiat lorem libero, quis hendrerit ipsum dictum ac. Aliquam at arcu feugiat magna auctor efficitur. Nunc iaculis vehicula diam quis mollis. Morbi vitae risus in ipsum vestibulum tincidunt. Nam sodales pharetra tortor in tincidunt. Duis fringilla aliquet vestibulum. Quisque elementum nisi ut tortor accumsan, et pretium nulla rhoncus. Nulla in condimentum quam, id sollicitudin nunc. Nulla tristique eu nisl quis porta. In varius odio lobortis massa lobortis tristique. Vivamus tempus purus dui, id pellentesque sem pellentesque ac. Morbi efficitur placerat felis et facilisis. Nulla arcu ex, blandit nec convallis quis, ultricies quis dolor.")])])}],M={data(){return{}},mounted(){},methods:{}},T=M,I=(i("366a"),Object(d["a"])(T,P,N,!1,null,"2b0bdc06",null)),L=I.exports;s["default"].use(b["a"]);const B=[{path:"/",name:"Home",component:$},{path:"/guide",name:"Guide",component:L},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],A=new b["a"]({mode:"history",base:"/",routes:B});var H=A,F=i("2f62");s["default"].use(F["a"]);var G=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["default"].use(a["a"]),s["default"].config.productionTip=!1,new s["default"]({router:H,store:G,render:function(t){return t(g)}}).$mount("#app")},"641b":function(t,e,i){"use strict";i("c913")},"812b":function(t,e,i){},8423:function(t,e,i){},"85ec":function(t,e,i){},c913:function(t,e,i){},f907:function(t,e,i){}});
//# sourceMappingURL=app.409b7e4c.js.map