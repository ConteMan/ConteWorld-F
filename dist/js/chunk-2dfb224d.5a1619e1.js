(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2dfb224d"],{"0ef8":function(t,e,n){"use strict";n("279a")},"279a":function(t,e,n){},e6e6:function(t,e,n){"use strict";n.r(e);var i=n("5530"),o=(n("b64b"),n("ac0d")),a=n("2f62"),s=n("9fb0"),c={name:"Landpage",mixins:[o.d],beforeRouteEnter:function(t,e,n){document.querySelector("body").classList.add("overflow-y-hidden"),n()},beforeRouteLeave:function(t,e,n){document.querySelector("body").classList.remove("overflow-y-hidden"),n()},computed:{ready:function(){return Object.keys(this.info).length>0}},methods:Object(i.a)(Object(i.a)({},Object(a.b)("app",{darkAction:s.d})),{},{turnTo:function(t){var e=t.extend;return e.type&&"route"===e.type?this.$router.push({path:t.value}):window.location.href=t.value,!0}})},r=(n("0ef8"),n("2877")),d=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ready?n("div",{staticClass:"page-container"},[n("div",{staticClass:"content-container"},[n("div",{staticClass:"title logo"},[n("span",[t._v(t._s(t.info.title))])]),n("div",{staticClass:"color-row slogan"},[t._v(" "+t._s(t.info.slogan)+" ")]),n("div",{staticClass:"color-row nav"},t._l(t.info.nav.items,(function(e){return n("span",{key:e.id,on:{click:function(n){return t.$router.push({path:e.value})}}},[t._v(" "+t._s(e.extend?e.extend.name:e.code)+" ")])})),0),n("div",{staticClass:"color-row site"},t._l(t.info.site.items,(function(e){return n("span",{key:e.id,on:{click:function(n){return t.turnTo(e)}}},[t._v(" "+t._s(e.extend?e.extend.name:e.code)+" ")])})),0),n("div",{staticClass:"color-row social"},[t._l(t.info.social.items,(function(e){return n("span",{key:e.id,attrs:{title:e.code},on:{click:function(n){return t.turnTo(e)}}},[n("c-icon",{attrs:{type:"icon-"+e.extend.icon}})],1)})),n("span",{attrs:{title:"Dark Mode"},on:{click:function(e){return t.darkAction("default")}}},[n("c-icon",{attrs:{type:"icon-dark"}})],1)],2),n("div",{staticClass:"info"},[n("div",{staticClass:"beian pointer"},[n("svg",{attrs:{width:"200",height:"11.52"},on:{click:function(e){return t.turnTo({extend:{},value:"https://beian.miit.gov.cn/"})}}},[n("text",{attrs:{"dominant-baseline":"baseline","font-size":"10",y:"9.52",x:"200","text-anchor":"end"}},[t._v(" "+t._s(t.$config.beian)+" ")])])]),n("div",{staticClass:"beian pointer"},[n("svg",{attrs:{width:"200",height:"11.52"},on:{click:function(e){return t.turnTo({extend:{},value:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode="+t.$config.policeBeianNum})}}},[n("text",{attrs:{"dominant-baseline":"baseline","font-size":"10",y:"9.52",x:"200","text-anchor":"end"}},[t._v(" "+t._s(t.$config.policeBeian)+" ")])])]),n("div",{staticClass:"run-time"},[n("svg",{attrs:{width:"300",height:"11.52"}},[n("text",{attrs:{"dominant-baseline":"baseline","font-size":"10",y:"9.52",x:"300","text-anchor":"end"}},[t._v(" CODE && DESIGN BY CONTEMAN ©"+t._s(t.$config.siteCreateTime)+"-"+t._s(t.$dayjs().format("YYYY"))+" ")])])])])])]):t._e()}),[],!1,null,"5099461e",null).exports;e.default=d}}]);