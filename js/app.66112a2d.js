(function(e){function t(t){for(var r,a,o=t[0],i=t[1],u=t[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1139f2d1":"2cec4dee","chunk-d969ec9c":"713fd1ea","chunk-fef4bb44":"dce48c3b"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1139f2d1":1,"chunk-d969ec9c":1,"chunk-fef4bb44":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1139f2d1":"277a034e","chunk-d969ec9c":"f93cbd3e","chunk-fef4bb44":"a9b985b8"}[e]+".css",s=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===r||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t,n){e.exports=n("56d7")},10:function(e,t){},11:function(e,t){},12:function(e,t){},12996:function(e,t,n){"use strict";n("8be7")},13:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="4678"},5:function(e,t){},"51e2":function(e,t,n){"use strict";n("e187")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("router-view")],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("Header"),n("main",{attrs:{role:"main"}},[e._t("default")],2)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header",attrs:{role:"banner"}},[n("router-link",{staticClass:"toplink",attrs:{to:{name:"checkout"}}},[e._v("Online telescope")]),e._m(0)],1)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"nav-g"},[n("details",{staticClass:"nav-expand",attrs:{tabindex:"0"}},[n("summary",{staticClass:"icon"},[e._v("?")]),n("div",{staticClass:"nav-expand-content"},[n("h4",[e._v("Have a question?")]),n("p",[e._v("Please contact us by "),n("a",{attrs:{href:"https://discord.gg/H7FndCWb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord")]),e._v(".")])])]),n("details",{staticClass:"nav-expand",attrs:{tabindex:"0"}},[n("summary",{staticClass:"icon"},[e._v("i")]),n("div",{staticClass:"nav-expand-content"},[n("h4",[e._v("First Beyond the Sky")]),n("p",[e._v("This digital experience explores the interconnection of realverse and metaverse. ")]),n("p",[n("a",{attrs:{href:"https://medium.com/merklebot/mint-nfts-with-telescope-in-chile-371eb773189",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn more")])]),n("h4",[e._v("Technologies used")]),n("p",[e._v("Blockchain, "),n("a",{attrs:{href:"https://robonomics.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Robonomics")]),e._v(", "),n("a",{attrs:{href:"https://kusama.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kusama")]),e._v(", "),n("a",{attrs:{href:"https://ipfs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IPFS")]),e._v(", "),n("a",{attrs:{href:"https://www.rmrk.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RMRK")])])])])])}],l=(n("d3b7"),n("159b"),{mounted:function(){document.body.onclick=function(e){var t=e.target.parentNode;document.body.querySelectorAll("details").forEach((function(e){e!==t&&(e.open=!1)}))}}}),d=l,f=(n("9591"),n("2877")),p=Object(f["a"])(d,i,u,!1,null,"679a4d6b",null),h=p.exports,m={name:"Layout",components:{Header:h}},b=m,v=Object(f["a"])(b,c,o,!1,null,null,null),g=v.exports,_={name:"App",components:{Layout:g}},j=_,y=(n("034f"),Object(f["a"])(j,a,s,!1,null,null,null)),k=y.exports,w=n("8c4f"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",{staticStyle:{"text-align":"center"}},[n("Spot"),n("h1",[e._v("Your payment is successfull!")]),n("p",[e._v("Now you may book 1 hour-long remote session with Boston Dynamics Spot robot")]),n("router-link",{staticClass:"button",attrs:{to:{name:"checkout"}}},[e._v("Rent Spot")])],1)},S=[],x=(n("3ca3"),n("ddb0"),{components:{Spot:function(){return n.e("chunk-1139f2d1").then(n.bind(null,"6412"))}}}),E=x,O=(n("12996"),Object(f["a"])(E,C,S,!1,null,"3b6aaa7a",null)),N=O.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",{staticStyle:{"text-align":"center"}},[n("h1",{staticClass:"red"},[e._v("Transaction was cancelled")]),n("p",[e._v("Your payment was cancelled, would you like to "),n("router-link",{attrs:{to:{name:"checkout"}}},[e._v("begin the process again")]),e._v("?")],1)])},R=[],A={},P=Object(f["a"])(A,T,R,!1,null,null,null),$=P.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"banner",class:e.telescopeOn()?"on":"off"},[n("div",{staticClass:"banner-top",class:e.dayStatusName},[n("div",{staticClass:"banner-top-content"},[n("h1",[e._v("Connecting Universe to Metaverse!")]),e._m(0),!e.isReady&&null===e.error&&e.connectAccountClicked?[n("span",{staticClass:"loader"})]:e._e(),!e.connectAccountClicked||!e.isReady&&null!==e.error?n("Button",{nativeOn:{click:function(t){return e.jump("#start")}}},[e._v("Start")]):e._e(),e.isReady&&e.accounts.length>0?[this.account?n("a",{attrs:{href:"https://singular.rmrk.app/space/"+this.account+"?tab=owned&owner=yes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Check your NFTs")]):n("a",{attrs:{href:"#step-1"},on:{click:function(t){return t.preventDefault(),e.jump("#step-1")}}},[e._v("Connect account to check NFTs")]),n("section",{staticClass:"small m-b-0"},[e._v("or")]),n("Button",{staticClass:"m-t-0",attrs:{size:"mid"},nativeOn:{click:function(t){return e.jump("#step-1")}}},[e._v("Buy more")])]:e._e(),e._m(1)],2),e._m(2)]),n("div",{staticClass:"banner-bottom"},[e.telescopeOn()?e._e():n("div",{staticClass:"telecopePause layout-narrow"},["night"!==e.dayStatusName?n("div",{staticClass:"telecopePause-content"},[n("p",{staticClass:"telecopePause-title"},[e._v("Telescope is Waiting for night…")]),n("p",[e._v(e._s(e.time)+" left")])]):e._e()])])]),e._m(3),n("section",{staticClass:"section-blue-mid",attrs:{id:"step-1"}},[n("div",{staticClass:"layout-narrow"},[n("h3",[e._v("1. Create or choose your account")]),e._m(4),e.isReady||e.connectAccountClicked?e._e():n("section",[n("Button",{nativeOn:{click:function(t){return e.connectAccount.apply(null,arguments)}}},[e._v("Connect account")])],1),!e.isReady&&null===e.error&&e.connectAccountClicked?[e._m(5)]:e._e(),e.isReady?[e.accounts.length>0?[n("section",[n("form",[n("p",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],staticClass:"container-full",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.account=t.target.multiple?n:n[0]}}},e._l(e.accounts,(function(t,r){return n("option",{key:r,domProps:{value:t.address}},[e._v(" "+e._s(t.meta.name)+" – "+e._s(e.addressShort(t.address))+" ")])})),0)])])])]:[e._m(6)]]:e.error&&e.connectAccountClicked?["NOT_FOUND_EXTENSION"===e.error?[e._m(7)]:!e.accounts||e.accounts.length<1?[e._m(8)]:[n("section",[n("p",{staticClass:"error-title"},[e._v("Some error occured")]),n("p",{staticClass:"error-text"},[e._v(e._s(e.error))])])]]:e._e()],2)]),n("section",{staticClass:"section-blue-dark p-b-0"},[e._m(9),n("section",{staticClass:"tokenSection layout-sm"},[n("div",{staticClass:"tokenSection-info"},[n("h4",[e._v("Your balance "),n("span",[e._v(e._s(e.balance)+" $STRGZN")])]),n("p",[e._v("1 $STRGZN = "+e._s(e.pricePerToken)+" USD")]),n("p",[e._v("With 1 $STRGZN you can get 1 telescope NFT")])]),n("div",{staticClass:"tokenSection-form"},[n("h4",[e._v("Purchase tokens")]),e.accounts.length<1||!e.isReady?n("p",{staticClass:"error-title text-small"},[e._v("Please "),n("a",{attrs:{href:"#step-1"},on:{click:function(t){return t.preventDefault(),e.jump("#step-1")}}},[e._v("connect")]),e._v(" the account first")]):e._e(),n("form",{class:{disabled:e.accounts.length<1||!e.isReady},on:{onChange:e.onChange,submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[n("div",{staticClass:"inputNumbers"},[n("div",{staticClass:"less",on:{click:function(t){return e.setQuantity(-1)}}},[e._v("-")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.quantity,expression:"quantity",modifiers:{number:!0}}],attrs:{type:"number",value:"quantity",required:""},domProps:{value:e.quantity},on:{input:function(t){t.target.composing||(e.quantity=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("div",{staticClass:"more",on:{click:function(t){return e.setQuantity(1)}}},[e._v("+")])]),n("h5",[e._v("Total: "+e._s(e.totalPaymentUSD)+" USD")]),n("Button",{staticClass:"container-full",attrs:{size:"mid"}},[n("span",{staticClass:"text"},[e._v("Pay with")]),n("img",{staticClass:"label",attrs:{alt:"Stripe",src:"i/stripe.svg"}})])],1)])])]),n("astronomicalObjectCard",{attrs:{accounts:this.accounts,isReady:this.isReady,balance:this.balance}})],1)},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-narrow"},[n("p",[e._v("Connect to our autonomous telescope in the dark night of Atacama desert in Chile, select an astronomical object and mint unique NFTs in a few clicks.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner-telescope",attrs:{"aria-hidden":"true"}},[n("img",{staticClass:"banner-telescope-pod-1",attrs:{"aria-hidden":"true",src:"i/banner-telescope-pod-1.png"}}),n("img",{staticClass:"banner-telescope-pod-2",attrs:{"aria-hidden":"true",src:"i/banner-telescope-pod-2.png"}}),n("img",{staticClass:"banner-telescope-head",attrs:{"aria-hidden":"true",src:"i/banner-telescope-head.png"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner-top-art",attrs:{"aria-hidden":"true"}},[n("div",{staticClass:"banner-grass"}),n("img",{staticClass:"banner-stone",attrs:{"aria-hidden":"true",src:"i/banner-stone.png"}}),n("img",{staticClass:"banner-sights",attrs:{"aria-hidden":"true",src:"i/banner-sights.png"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section-blue",attrs:{id:"start"}},[n("div",{staticClass:"layout-narrow"},[n("h2",[e._v("Follow the steps and mint your nft Of astronomical object")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"hyphens"},[e._v(" We use "),n("a",{attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[e._v("Polkadot.js extension")]),e._v(" to manage user accounts. Here is the "),n("a",{attrs:{href:"https://medium.com/merklebot/how-to-create-an-account-using-polkadot-js-extension-bd02a0953946",target:"_blank"}},[e._v("initial setup guide.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("span",{staticClass:"loader"}),n("i",[e._v("Checking Polkadot.js extension")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",{staticClass:"error-title"},[e._v("Account not found")]),n("p",{staticClass:"error-text"},[e._v("Please create an account or switch on account's visibility in "),n("a",{attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[e._v("Polkadot.js extension")]),e._v(". Then reload this page.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",{staticClass:"error-title"},[e._v("Extension not found")]),n("p",{staticClass:"error-text"},[e._v("Please install "),n("a",{attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[e._v("Polkadot.js extension")]),e._v(", create and add Web3 account. Then reload this page.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",{staticClass:"error-title"},[e._v("You currently don't have any accounts")]),n("p",{staticClass:"error-text"},[e._v("Please create an account or switch on account's visibility in "),n("a",{attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[e._v("Polkadot.js extension")]),e._v(". Then reload this page.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-narrow"},[n("h3",[e._v("2. Get telescope tokens")]),n("p",{staticClass:"hyphens"},[e._v(" Our telescope only accepts special $STRGZN tokens and you can buy them below using your credit card. ")])])}],D=n("1da1"),B=(n("96cf"),n("b680"),n("130f"),n("fb6a"),n("b0c0"),n("7424")),q=n("db49"),F=Stripe(q["a"].STRIPE_KEY),H=F,M=n("ef36");function U(e){return new Promise((function(t,n){var r=document.createElement("script");r.src=e,r.onload=t,r.onerror=n,document.body.appendChild(r)}))}var L=n("7f45"),K=n.n(L),W={components:{astronomicalObjectCard:function(){return n.e("chunk-d969ec9c").then(n.bind(null,"d4e6"))},Button:function(){return n.e("chunk-fef4bb44").then(n.bind(null,"e0dab"))}},data:function(){return{isReady:!1,connectAccountClicked:localStorage.getItem("connectAccountClicked")||!1,error:null,api:null,unsubscribe:null,balance:0,accounts:[],accountDefault:"",status:!1,serviceStatus:{status:void 0,message:""},quantity:50,pricePerToken:(q["a"].PRICE_PER_LESSON_CENTS/100).toFixed(2),time:"00:00:00",hourStartNight:"06",hourEndNight:"02",currentHour:"00",dayStatusName:"day"}},created:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,setImmediate(Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(B["d"])();case 2:e.serviceStatus=t.sent;case 3:case"end":return t.stop()}}),t)})))),setInterval(Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(B["d"])();case 2:e.serviceStatus=t.sent,console.log("Service status:",{status:e.serviceStatus.status,message:e.serviceStatus.message});case 4:case"end":return t.stop()}}),t)}))),1e4),!e.connectAccountClicked){t.next=6;break}return t.next=6,e.connectAccount();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.error=t.t0.message;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},mounted:function(){var e=this;this.time=this.countdown(this.currentTime()),this.currentHour=this.getCurrentHour(),setInterval((function(){e.time=e.countdown(e.currentTime()),e.currentHour=e.getCurrentHour()}),1e4)},destroyed:function(){this.unsubscribe&&this.unsubscribe()},watch:{status:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!1!==n||!0!==t){e.next=3;break}return e.next=3,U("https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js");case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),account:function(e,t){this.onChange({name:"account",newValue:e,oldValue:t})},currentHour:function(){this.dayStatusName=this.dayStatus()}},computed:{totalPaymentUSD:{get:function(){return(this.quantity*this.pricePerToken).toFixed(2)}},account:{get:function(){return this.$store.state.accountActive?this.$store.state.accountActive:this.accountDefault},set:function(e){this.$store.commit("setAccountActive",e)}},email:{get:function(){return this.$store.state.email},set:function(e){this.$store.commit("setEmail",e)}}},methods:{setQuantity:function(e){this.quantity+e>=q["a"].MIN_TOKENS_BUY&&this.quantity+e<=q["a"].MAX_TOKENS_BUY&&(this.quantity+=e)},connectAccount:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.connectAccountClicked||(localStorage.setItem("connectAccountClicked",!0),e.connectAccountClicked=!0),t.prev=1,n=Object(M["c"])(),n.on("error",(function(){e.error="Disconnected provider",e.isReady=!1})),n.on("connect",(function(){e.isReady=!0})),t.next=7,Object(M["b"])();case 7:return e.api=t.sent,t.next=10,Object(M["a"])(e.api);case 10:return e.accounts=t.sent,e.accounts&&(e.accountDefault=e.accounts[0].address),0===e.accounts.length&&(e.error="Not found account"),e.isReady=!0,e.status=!0,t.next=17,e.api.query.assets.account(q["a"].ID_ASSET,e.account,(function(t){var n=t.balance;e.balance=n.toNumber()}));case 17:e.unsubscribe=t.sent,t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](1),e.error=t.t0.message;case 23:case"end":return t.stop()}}),t,null,[[1,20]])})))()},addressShort:function(e){return e.slice(0,6)+"..."+e.slice(-4)},onChange:function(e){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.name,a=e.newValue,"account"!==r){n.next=6;break}return t.unsubscribe&&t.unsubscribe(),n.next=5,t.api.query.assets.account(q["a"].ID_ASSET,a,(function(e){var n=e.balance;t.balance=n.toNumber()}));case 5:t.unsubscribe=n.sent;case 6:case"end":return n.stop()}}),n)})))()},handleSubmit:function(){this.account&&this.checkout(this.account,this.quantity)},checkout:function(e,t){var n=this;return Object(D["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.proccess=!0,r.prev=1,r.next=4,Object(B["b"])({account:e,quantity:t});case 4:return a=r.sent,r.next=7,H.redirectToCheckout({sessionId:a.id});case 7:s=r.sent,s.error&&console.error(s.error.message),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](1),console.log("Checkout error:",r.t0);case 14:n.proccess=!1;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()},jump:function(e){window.scrollTo({top:document.querySelector(e).offsetTop,behavior:"smooth"})},getCurrentHour:function(){return(new Date).toLocaleString("en-US",{timeZone:"America/Santiago",hour:"numeric",hour12:!1})},currentTime:function(){return(new Date).toLocaleString("en-US",{timeZone:"America/Santiago",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})},countdown:function(e){var t=K.a.duration(this.hourStartNight+":00:00"),n=t.subtract(e),r="";return n.hours()>0&&(r+=n.hours()+" hours "),n.minutes()>=0&&(r+=n.minutes()+" minute(s) "),r},dayStatus:function(){return this.currentHour>=this.hourEndNight+1&&this.currentHour<this.hourStartNight-1?"day":this.currentHour>=this.hourStartNight||this.currentHour<=this.hourEndNight?"night":this.currentHour>this.hourEndNight&&this.currentHour<=this.hourEndNight+1?"dawn":this.currentHour>=this.hourStartNight-1&&this.currentHour<this.hourStartNight?"sunset":void 0},telescopeOn:function(){if("night"===this.dayStatus())return!0}}},Y=W,Z=(n("6bcb"),Object(f["a"])(Y,z,I,!1,null,"ed0eba50",null)),G=Z.exports;r["a"].use(w["a"]);var X=new w["a"]({routes:[{path:"/",name:"checkout",component:G},{path:"/success",name:"success",component:N},{path:"/cancel",name:"cancel",component:$},{path:"*",redirect:"/"}]}),V=(n("4de4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:[{"container-full":e.fullWidth},e.size?"btn-"+e.size:null,"btn-"+e.color],on:{click:function(t){return e.$emit("click",t)}}},[e._t("default")],2)}),J=[],Q=(n("caad"),{props:{fullWidth:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["big","sm"].includes(e)},require:!1},color:{type:String,validator:function(e){return["green","blue"].includes(e)},default:"blue"}}}),ee=Q,te=Object(f["a"])(ee,V,J,!1,null,null,null),ne=te.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{on:{click:function(t){return e.up(!e.flag)}}},[e.flag?[e._v("–")]:[e._v("+")]],2)},ae=[],se={model:{prop:"value",event:"toggle"},props:{value:{type:Boolean,default:!0},id:String},data:function(){return{flag:this.value}},created:function(){if(this.id){var e=localStorage.getItem("toogle:".concat(this.id));"true"===e?this.up(!0):"false"===e&&this.up(!1)}},methods:{up:function(e){this.flag=e,this.$emit("toggle",this.flag),this.id&&localStorage.setItem("toogle:".concat(this.id),this.flag)}}},ce=se,oe=Object(f["a"])(ce,re,ae,!1,null,null,null),ie=oe.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section-light"},[e._t("default")],2)},le=[],de={},fe=Object(f["a"])(de,ue,le,!1,null,null,null),pe=fe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",[n("div",{staticClass:"window-head"},[n("span",{domProps:{innerHTML:e._s(e.title)}}),n("Toggle",{staticClass:"window-head-toggle",attrs:{id:e.id},model:{value:e.isShow,callback:function(t){e.isShow=t},expression:"isShow"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"window-content"},[e._t("default")],2)])},me=[],be={props:["title","id"],components:{Card:pe,Toggle:ie},data:function(){return{isShow:!0}}},ve=be,ge=Object(f["a"])(ve,he,me,!1,null,null,null),_e=ge.exports,je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"form-section-title"},[e._v(e._s(e.title))]),e._t("default")],2)},ye=[],ke={props:{title:String}},we=ke,Ce=Object(f["a"])(we,je,ye,!1,null,null,null),Se=Ce.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-item form-line-label"},[e._t("default")],2)},Ee=[],Oe={},Ne=Object(f["a"])(Oe,xe,Ee,!1,null,null,null),Te=Ne.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[e._t("default"),e._v(": "),e.isError?n("span",{staticClass:"input-msg"},[e._v(e._s(e.msgError))]):e._e()],2)},Ae=[],Pe={props:{msgError:{type:String,default:"Check if data correct, please."},isError:{type:Boolean,default:!1}}},$e=Pe,ze=Object(f["a"])($e,Re,Ae,!1,null,null,null),Ie=ze.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.paginatedData,(function(t,r){return n("div",{key:r},[e._t("default",null,{item:t})],2)})),n("div",{staticClass:"pagination"},[n("button",{attrs:{disabled:0===e.pageNumber},on:{click:e.prevPage}},[e._v("Previous")]),n("b",[e._v(e._s(e.pageCount>0?e.pageNumber+1:0)+" / "+e._s(e.pageCount))]),n("button",{attrs:{disabled:e.pageNumber>=e.pageCount-1},on:{click:e.nextPage}},[e._v(" Next ")])])],2)},Be=[],qe=(n("a9e3"),{props:{listData:{type:Array,required:!0},currentPage:{type:Number,required:!1,default:0},size:{type:Number,required:!1,default:1}},data:function(){return{pageNumber:this.currentPage}},watch:{currentPage:function(e){this.pageNumber=e}},computed:{pageCount:function(){var e=this.listData.length,t=this.size;return Math.ceil(e/t)},paginatedData:function(){var e=this.pageNumber*this.size,t=e+this.size;return this.listData.slice(e,t)}},methods:{nextPage:function(){this.pageNumber++,this.$emit("page",this.pageNumber)},prevPage:function(){this.pageNumber--,this.$emit("page",this.pageNumber)}}}),Fe=qe,He=(n("51e2"),Object(f["a"])(Fe,De,Be,!1,null,"f5fce9e0",null)),Me=He.exports,Ue=(n("99af"),function(e){return e.slice(0,6)+"..."+e.slice(-4)});function Le(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"address",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r="etherscan.io";""===t&&(t="address");var a="";return 4===n&&(a="rinkeby."),r=a+r,"https://".concat(r,"/").concat(t,"/").concat(e)}function Ke(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ipfs",n="ipfs.io";return""===t&&(t="ipfs"),"https://".concat(n,"/").concat(t,"/").concat(e)}r["a"].component("Button",ne),r["a"].component("Toggle",ie),r["a"].component("Card",pe),r["a"].component("CardToggle",_e),r["a"].component("FormSection",Se),r["a"].component("FormField",Te),r["a"].component("FormFieldLabel",Ie),r["a"].component("Pagination",Me),r["a"].filter("labelAddress",Ue),r["a"].filter("urlChainExplorer",Le),r["a"].filter("urlIpfsExplorer",Ke);var We=n("3f08"),Ye=n("2f62"),Ze=n("5d95"),Ge=n("342d"),Xe=n.n(Ge),Ve=n("2ead"),Je=n.n(Ve);r["a"].use(We["a"].Plugin),r["a"].use(Ye["a"]),r["a"].use(Xe.a),r["a"].use(Je.a,{moment:K.a});var Qe=new Ye["a"].Store({state:{accountActive:localStorage.accountActive?localStorage.accountActive:"",email:localStorage.email?localStorage.email:""},mutations:{setAccountActive:function(e,t){Object(Ze["a"])(t,2)[0]&&(e.accountActive=t,localStorage.setItem("accountActive",e.accountActive))},setEmail:function(e,t){e.email=t,localStorage.setItem("email",e.email)}}});r["a"].config.productionTip=!1,new r["a"]({router:X,render:function(e){return e(k)},store:Qe}).$mount("#app")},6:function(e,t){},"6bcb":function(e,t,n){"use strict";n("e51d")},7:function(e,t){},7424:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return m}));var r=n("1da1"),a=(n("96cf"),n("bc3a")),s=n.n(a),c=n("db49");function o(e){return i.apply(this,arguments)}function i(){return i=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat(c["a"].API_SERVER,"/checkout"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function u(){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://api.merklebot.com/beyond-the-sky/astronomical-objects");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://api.merklebot.com/beyond-the-sky/status");case 2:return t=e.sent,e.abrupt("return",{status:t.data.status,message:t.data.message});case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://api.merklebot.com/beyond-the-sky/telescopes/{telescope_id}/is_free");case 2:return t=e.sent,e.abrupt("return",{isFree:t.data});case 4:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function m(e,t){return b.apply(this,arguments)}function b(){return b=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://api.merklebot.com/beyond-the-sky/nft",{params:{name:t,sender:n,block_number:0,block_hash:"0x00"}});case 2:r=e.sent,console.log("Сreate NFT response:",r);case 4:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}},8:function(e,t){},"85ec":function(e,t,n){},"8be7":function(e,t,n){},9:function(e,t){},9591:function(e,t,n){"use strict";n("a0b2")},a0b2:function(e,t,n){},db49:function(e,t,n){"use strict";var r;t["a"]={API_SERVER:"https://api.merklebot.com/beyond-the-sky",STRIPE_KEY:"pk_live_51IvSZKJXrK78CsUSfSb5Jyjo3AkjZ2k6ZMr0c8miMMIcWcQiBKtCapD5ho2Bk45MjMh3QTlpLamkrOiG9gMJzMh100iGhW3ehO",TYPEFORM_ID:"qiVH1bjz",PRICE_PER_LESSON_CENTS:null!==(r="100")&&void 0!==r?r:2e3,ID_ASSET:"1607",SUBSTRATE:{url:"wss://statemine-rpc.polkadot.io",types:{},keyring:{isDevelopment:!1,type:"sr25519"}},ACCESS_TOKEN_RECV_ACCOUNT:"Gecm9tRWX5sFzttHLB2j6PurJBeNM3oLHABvztnqXCnmHwZ",MIN_TOKENS_BUY:1,MAX_TOKENS_BUY:100,NFT_PRICE:1}},e187:function(e,t,n){},e51d:function(e,t,n){},ef36:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return _})),n.d(t,"d",(function(){return j}));var r=n("5530"),a=(n("d4ec"),n("bee2"),n("1da1")),s=(n("96cf"),n("d3b7"),n("b64b"),n("99af"),n("d81d"),n("159b"),n("25f0"),n("ec14")),c=n("22a5"),o=n("0b67"),i=n("077d"),u=(n("26af"),n("db49")),l=null,d=null;function f(){return l||(l=new s["a"](u["a"].SUBSTRATE.url),l)}function p(){return h.apply(this,arguments)}function h(){return h=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!d){e.next=2;break}return e.abrupt("return",d);case 2:return e.next=4,c["a"].create({provider:f(),types:u["a"].SUBSTRATE.types});case 4:return d=e.sent,e.abrupt("return",d);case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function m(){return new Promise((function(e,t){var n=setTimeout((function(){return clearTimeout(n),clearInterval(r),t(new Error("NOT_FOUND_EXTENSION"))}),3e3),r=setInterval((function(){if(Object.keys(window.injectedWeb3).length>0)return clearTimeout(n),clearInterval(r),e()}),100)}))}var b=!1;function v(e){return g.apply(this,arguments)}function g(){return g=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return e.next=4,Object(i["b"])("robonomics");case 4:if(n=e.sent,0!==n.length){e.next=7;break}throw new Error("NOT_FOUND_EXTENSION");case 7:return e.next=9,Object(i["a"])();case 9:return a=e.sent,s=a.map((function(e){var t=e.address,n=e.meta;return{address:t,meta:n}})),o["a"].loadAll(Object(r["a"])({genesisHash:t.genesisHash,ss58Format:t.registry.chainSS58},u["a"].SUBSTRATE.keyring),s),b=!0,e.abrupt("return",o["a"].getPairs());case 14:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function _(e){return b?o["a"].getPairs():v(e)}function j(e,t,n,r){return y.apply(this,arguments)}function y(){return y=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r,a){var s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["c"])(t);case 2:return s=e.sent,c=d.tx.utility.batch([d.tx.assets.transfer(r,n,a)]),e.prev=4,e.next=7,c.signAndSend(t,{signer:s.signer},(function(e){e.status.isInBlock?e.events.forEach((function(t){var n=t.event,r=n.method,a=n.section;"system"===a&&"ExtrinsicFailed"===r?console.log("ExtrinsicFailed",{block:e.status.asInBlock.toString(),tx:c.hash.toString()}):"system"===a&&"ExtrinsicSuccess"===r&&console.log(null,{block:e.status.asInBlock.toString(),tx:c.hash.toString()})})):e.status.isFinalized&&console.log("Asset send tx is finalized")}));case 7:return e.abrupt("return",!0);case 10:e.prev=10,e.t0=e["catch"](4),console.log("Asset send error:",e.t0);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[4,10]])}))),y.apply(this,arguments)}}});
//# sourceMappingURL=app.66112a2d.js.map