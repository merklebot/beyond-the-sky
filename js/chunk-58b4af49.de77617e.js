(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58b4af49"],{1276:function(t,e,n){"use strict";var a=n("2ba4"),r=n("c65b"),s=n("e330"),i=n("d784"),o=n("44e7"),c=n("825a"),l=n("1d80"),u=n("4840"),d=n("8aa5"),f=n("50c4"),p=n("577e"),b=n("dc4a"),m=n("4dae"),h=n("14c3"),v=n("9263"),g=n("9f7f"),_=n("d039"),S=g.UNSUPPORTED_Y,j=4294967295,x=Math.min,w=[].push,y=s(/./.exec),O=s(w),k=s("".slice),C=!_((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(t,e,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=p(l(this)),i=void 0===n?j:n>>>0;if(0===i)return[];if(void 0===t)return[s];if(!o(t))return r(e,s,t,i);var c,u,d,f=[],b=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,b+"g");while(c=r(v,g,s)){if(u=g.lastIndex,u>h&&(O(f,k(s,h,c.index)),c.length>1&&c.index<s.length&&a(w,f,m(c,1)),d=c[0].length,h=u,f.length>=i))break;g.lastIndex===c.index&&g.lastIndex++}return h===s.length?!d&&y(g,"")||O(f,""):O(f,k(s,h)),f.length>i?m(f,0,i):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r(e,this,t,n)}:e,[function(e,n){var a=l(this),i=void 0==e?void 0:b(e,t);return i?r(i,e,a,n):r(s,p(a),e,n)},function(t,a){var r=c(this),i=p(t),o=n(s,r,i,a,s!==e);if(o.done)return o.value;var l=u(r,RegExp),b=r.unicode,m=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(S?"g":"y"),v=new l(S?"^(?:"+r.source+")":r,m),g=void 0===a?j:a>>>0;if(0===g)return[];if(0===i.length)return null===h(v,i)?[i]:[];var _=0,w=0,y=[];while(w<i.length){v.lastIndex=S?0:w;var C,T=h(v,S?k(i,w):i);if(null===T||(C=x(f(v.lastIndex+(S?w:0)),i.length))===_)w=d(i,w,b);else{if(O(y,k(i,_,w)),y.length===g)return y;for(var $=1;$<=T.length-1;$++)if(O(y,T[$]),y.length===g)return y;w=_=C}}return O(y,k(i,_)),y}]}),!C,S)},"14c3":function(t,e,n){var a=n("da84"),r=n("c65b"),s=n("825a"),i=n("1626"),o=n("c6b6"),c=n("9263"),l=a.TypeError;t.exports=function(t,e){var n=t.exec;if(i(n)){var a=r(n,t,e);return null!==a&&s(a),a}if("RegExp"===o(t))return r(c,t,e);throw l("RegExp#exec called on incompatible receiver")}},2935:function(t,e,n){"use strict";n("b952")},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},a15b:function(t,e,n){"use strict";var a=n("23e7"),r=n("e330"),s=n("44ad"),i=n("fc6a"),o=n("a640"),c=r([].join),l=s!=Object,u=o("join",",");a({target:"Array",proto:!0,forced:l||!u},{join:function(t){return c(i(this),void 0===t?",":t)}})},b952:function(t,e,n){},c740:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").findIndex,s=n("44d2"),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a({target:"Array",proto:!0,forced:o},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(i)},d4e6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wrapper",attrs:{id:"step-3"}},[t._m(0),n("section",[n("div",{staticClass:"layout-narrow"},[n("h4",[t._v("Choose one from "+t._s(this.astronomicalObj.length)+" astronomical objects")])]),n("div",{staticClass:"objects layout-mid"},t._l(t.astronomicalObj,(function(e,a){return n("div",{key:a,staticClass:"obj",class:{active:e.friendly_name===t.astronomicalObjSelected.friendly_name}},[n("details",{attrs:{tabindex:"0"}},[n("summary",[n("div",{class:t.makeClassName(e.kind)})]),n("div",{staticClass:"obj-expand"},[n("ul",[n("li",[n("b",[t._v(t._s(e.friendly_name))])]),n("li",[t._v(t._s(e.kind))]),n("li",[t._v(t._s(e.catalog_name))])]),e.friendly_name!==t.astronomicalObjSelected.friendly_name?n("div",{staticClass:"obj-select"},[n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.setObjFromDetails(e)}}},[t._v("Select this object")])]):t._e()])])])})),0)]),t.$store.state.app.account&&t.astronomicalObjSelected&&t.nftStatus?n("section",{staticClass:"order layout-narrow"},[n("h2",[t._v("Your order")]),n("ul",{staticClass:"dashed tablelike"},[n("li",[n("span",[t._v("Account:")]),n("span",{domProps:{innerHTML:t._s(t.addressShort(t.$store.state.app.account))}})]),n("li",[n("span",[t._v("Object:")]),n("span",[t._v(t._s(t.astronomicalObjSelected.friendly_name)+" - "+t._s(t.astronomicalObjSelected.kind))])]),n("li",[n("span",[t._v("Status:")]),"waiting"===t.nftStatus?n("div",[n("p",[n("span",{staticClass:"loader"}),n("span",[t._v(t._s(t.nftStatus))])]),n("p",[n("a",{attrs:{href:"https://singular.rmrk.app/space/"+t.$store.state.app.account+"?tab=owned&owner=yes",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Check your NFT(s) ")])])]):t._e(),"done"===t.nftStatus?n("div",[n("p",{staticClass:"title-checked"},[t._v(t._s(t.nftStatus))])]):t._e()]),"done"===t.nftStatus?n("li",[n("span",[t._v("Your next steps:")]),n("div",[n("p",{staticClass:"order-servicelinks"},[n("a",{attrs:{href:"https://singular.rmrk.app/space/"+t.$store.state.app.account+"?tab=owned&owner=yes",target:"_blank",rel:"noopener noreferrer",title:"Check your NFT(s)"}},[n("i-singular",{staticClass:"logo"})],1),n("a",{attrs:{href:"https://twitter.com/intent/tweet?text=✨%20Just%20got%20my%20%23NFT%20with%20"+t.astronomicalObjSelected.kind+"%20"+t.astronomicalObjSelected.friendly_name+"%20from%20online%20telescope%20in%20Atacama%20desert&url=https%3A%2F%2Ftelescope.merklebot.com",target:"_blank",rel:"noopener noreferrer",title:"Share on Twitter"}},[n("i-twitter",{staticClass:"logo"})],1),n("a",{attrs:{href:t.$discord,target:"_blank",rel:"noopener noreferrer",title:"Chat with us in Discord"}},[n("i-discord",{staticClass:"logo"})],1)])])]):t._e()])]):t._e(),n("section",{staticClass:"order-form layout-narrow"},[n("form",[n("p",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.astronomicalObjSelected,expression:"astronomicalObjSelected"}],staticClass:"container-full",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.astronomicalObjSelected=e.target.multiple?n:n[0]}}},[t._l(t.astronomicalObj,(function(e,a){return n("option",{key:a,domProps:{value:e}},[t._v(" "+t._s(e.friendly_name)+" ")])})),0===t.astronomicalObj.length?n("option",[t._v("Loading...")]):t._e()],2)]),n("p",[n("Button",{staticClass:"container-full",attrs:{disabled:!t.submitStatus},nativeOn:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v("Submit")])],1),t.submitMessage?n("p",{staticClass:"error-title text-small",domProps:{innerHTML:t._s(t.submitMessage)}}):t._e()])]),n("Stars")],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-narrow"},[n("h3",[t._v("3. Enjoy the stars")]),n("p",{staticClass:"hyphens"},[t._v("Choose an astronomical object below and hit the submit button. The telescope will start moving and will mint your NFT in a few minutes.")])])}],s=n("1da1"),i=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("c740"),n("a15b"),n("ac1f"),n("1276"),n("fb6a"),n("7424")),o=n("ef36"),c=n("db49"),l={data:function(){return{nftPrice:null,astronomicalObjSelected:[],submitStatus:!0,submitMessage:null,nftStatus:null}},components:{Button:function(){return n.e("chunk-a41c70ae").then(n.bind(null,"e0dab"))},Stars:function(){return n.e("chunk-3aa17dd8").then(n.bind(null,"09be"))},iSingular:function(){return n.e("chunk-675cd95a").then(n.bind(null,"b3c8"))},iTwitter:function(){return n.e("chunk-d618418c").then(n.bind(null,"4abc"))},iDiscord:function(){return n.e("chunk-34995a90").then(n.bind(null,"a30a"))}},computed:{astronomicalObj:function(){return this.$store.state.astronomicalObjects?this.$store.state.astronomicalObjects:[]}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["c"])();case 2:t.nftPrice=e.sent;case 3:case"end":return e.stop()}}),e)})))()},watch:{astronomicalObj:function(){this.astronomicalObj.length>0&&(0===this.astronomicalObjSelected.length||this.getSelectedIndex()<0)&&(this.astronomicalObjSelected=this.astronomicalObj[0])},submitStatus:function(){var t=this;this.submitStatus||setTimeout((function(){t.submitStatus=!0,t.submitMessage=null}),1e4)}},methods:{getSelectedIndex:function(){var t=this;return this.astronomicalObj.findIndex((function(e){var n=e.catalog_name;return n===t.astronomicalObjSelected.catalog_name}))},onSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.submitMessage=null,t.submitStatus=!1,"off"===t.$store.state.service.status&&(t.submitMessage="Please wait for the telescope to turn on"),t.$store.state.app.balance<1&&(t.submitMessage='Please <a href="#step-2">buy $STRGZN tokens</a>'),t.$store.state.app.account&&"extension ready"===t.$store.state.app.status||(t.submitMessage='Please <a href="#step-1">connect your account</a>'),"off"!==t.$store.state.service.status&&t.$store.state.app.account&&"extension ready"===t.$store.state.app.status&&!(t.$store.state.app.balance<25)){e.next=7;break}return e.abrupt("return");case 7:return t.nftStatus="waiting",e.next=10,Object(o["d"])(t.$store.state.app.account,c["a"].ACCESS_TOKEN_RECV_ACCOUNT,c["a"].ID_ASSET,25);case 10:if(n=e.sent,n){e.next=14;break}return t.submitMessage="Tokens not sent. Please, contact us or try later",e.abrupt("return");case 14:return e.next=16,Object(i["b"])(t.$store.state.app.account,t.astronomicalObjSelected.catalog_name);case 16:a=e.sent,console.log("Create NFT:",a),200==a.status&&(t.submitStatus=!0,t.nftStatus="done");case 19:case"end":return e.stop()}}),e)})))()},makeClassName:function(t){return t.split(" ").join("")},setObjFromDetails:function(t){this.astronomicalObjSelected=t,event.target.closest("details").open=!1},jump:function(t){window.scrollTo({top:document.querySelector(t).offsetTop,behavior:"smooth"})},addressShort:function(t){return t.slice(0,6)+"..."+t.slice(-4)}}},u=l,d=(n("2935"),n("2877")),f=Object(d["a"])(u,a,r,!1,null,"15c272c5",null);e["default"]=f.exports},d784:function(t,e,n){"use strict";n("ac1f");var a=n("e330"),r=n("6eeb"),s=n("9263"),i=n("d039"),o=n("b622"),c=n("9112"),l=o("species"),u=RegExp.prototype;t.exports=function(t,e,n,d){var f=o(t),p=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),b=p&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!p||!b||n){var m=a(/./[f]),h=e(f,""[t],(function(t,e,n,r,i){var o=a(t),c=e.exec;return c===s||c===u.exec?p&&!i?{done:!0,value:m(e,n,r)}:{done:!0,value:o(n,e,r)}:{done:!1}}));r(String.prototype,t,h[0]),r(u,f,h[1])}d&&c(u[f],"sham",!0)}}}]);
//# sourceMappingURL=chunk-58b4af49.de77617e.js.map