(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ceb3751a"],{bd7f:function(t,n,e){"use strict";e("eb11")},e6e6:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.ready?e("div",{staticClass:"page-container"},[e("div",{staticClass:"content-container"},[e("div",{staticClass:"title logo"},[e("span",[t._v(t._s(t.info.title))]),e("span",{staticClass:"dark-btn pointer",on:{click:function(n){return t.darkAction()}}},[e("c-icon",{attrs:{type:"icon-dark"}})],1)]),e("div",{staticClass:"color-row bg-gray slogan"},[t._v(" "+t._s(t.info.slogan)+" ")]),e("div",{staticClass:"color-row bg-gray-light nav"},t._l(t.info.nav.items,(function(n){return e("span",{key:n.id,on:{click:function(e){return t.$router.push({path:n.value})}}},[t._v(" "+t._s(n.extend?n.extend.name:n.code)+" ")])})),0),e("div",{staticClass:"color-row bg-gray site"},t._l(t.info.site.items,(function(n){return e("span",{key:n.id,on:{click:function(e){return t.turnTo(n)}}},[t._v(" "+t._s(n.extend?n.extend.name:n.code)+" ")])})),0),e("div",{staticClass:"color-row bg-gray-light social"},t._l(t.info.social.items,(function(n){return e("span",{key:n.id,attrs:{title:n.code},on:{click:function(e){return t.turnTo(n)}}},[e("c-icon",{attrs:{type:"icon-"+n.extend.icon}})],1)})),0),e("div",{staticClass:"info"},[e("div",{staticClass:"beian pointer"},[e("svg",{attrs:{width:"200",height:"11.52"},on:{click:function(n){return t.turnTo({extend:{},value:"https://beian.miit.gov.cn/"})}}},[e("text",{attrs:{"dominant-baseline":"baseline","font-size":"10",y:"9.52",x:"200","text-anchor":"end"}},[t._v(" "+t._s(t.$config.beian)+" ")])])]),e("div",{staticClass:"beian pointer"},[e("svg",{attrs:{width:"200",height:"11.52"},on:{click:function(n){return t.turnTo({extend:{},value:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode="+t.$config.policeBeianNum})}}},[e("text",{attrs:{"dominant-baseline":"baseline","font-size":"10",y:"9.52",x:"200","text-anchor":"end"}},[t._v(" "+t._s(t.$config.policeBeian)+" ")])])]),e("div",{staticClass:"run-time"},[e("svg",{attrs:{width:"300",height:"11.52"}},[e("text",{attrs:{"dominant-baseline":"baseline","font-size":"10",y:"9.52",x:"300","text-anchor":"end"}},[t._v(" CODE && DESIGN BY CONTEMAN ©"+t._s(t.$config.siteCreateTime)+"-"+t._s(t.$dayjs().format("YYYY"))+" ")])])])])])]):t._e()},a=[],o=e("5530"),s=(e("b64b"),e("ac0d")),c=e("2f62"),r=e("9fb0"),l={name:"Landpage",mixins:[s["d"]],computed:{ready:function(){return Object.keys(this.info).length>0}},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])("app",{darkAction:r["d"]})),{},{turnTo:function(t){var n=t.extend;return n.type&&"route"===n.type?this.$router.push({path:t.value}):window.location.href=t.value,!0}})},d=l,u=(e("bd7f"),e("2877")),f=Object(u["a"])(d,i,a,!1,null,"07f74062",null),v=f.exports;n["default"]=v},eb11:function(t,n,e){}}]);