(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-035c78a3"],{"0393":function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("0481"),n("4160"),n("4069"),n("e439"),n("dbb4"),n("b64b"),n("159b");var s=n("ade3"),r=(n("210b"),n("604c")),i=n("d9bd");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t["a"]=r["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return a({},r["a"].options.computed.classes.call(this),{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(i["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(i["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),s=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(s)}}})},"0467":function(e,t,n){},"210b":function(e,t,n){},"49e2":function(e,t,n){"use strict";var s=n("0789"),r=n("9d65"),i=n("a9ad"),o=n("3206"),a=n("80d2"),c=n("58df"),l=Object(c["a"])(r["a"],i["a"],Object(o["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["a"]=l.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){return e(s["a"],[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),this.showLazyContent([e("div",{class:"v-expansion-panel-content__wrap"},Object(a["m"])(this))]))])}})},"5a2b":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.courses,(function(e){return n("v-expansion-panel-content",{key:e.courseCode},[n("CourseCard",{attrs:{course:e}})],1)})),1)},r=[],i=n("664c"),o={name:"CourseList",components:{CourseCard:i["a"]},props:{courses:Array}},a=o,c=n("2877"),l=n("6544"),p=n.n(l),u=n("49e2"),d=Object(c["a"])(a,s,r,!1,null,null,null);t["a"]=d.exports;p()(d,{VExpansionPanelContent:u["a"]})},"63ef":function(e,t,n){"use strict";var s=n("9bec"),r=n.n(s);r.a},"763a":function(e,t,n){"use strict";var s=n("847f"),r=n.n(s);r.a},"847f":function(e,t,n){},"9bec":function(e,t,n){},c865:function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var s=n("ade3"),r=n("0789"),i=n("9d26"),o=n("a9ad"),a=n("3206"),c=n("5607"),l=n("80d2"),p=n("58df");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=Object(p["a"])(o["a"],Object(a["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["a"]=b.extend().extend({name:"v-expansion-panel-header",directives:{ripple:c["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(l["m"])(this,"actions")||[this.$createElement(i["a"],this.expandIcon)];return this.$createElement(r["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:d({},this.$listeners,{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[Object(l["m"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var s=n("ade3"),r=n("4e82"),i=n("3206"),o=n("80d2"),a=n("58df");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t["a"]=Object(a["a"])(Object(r["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(i["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return l({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(o["m"])(this))}})},e65a:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-step-11"},[n("v-expansion-panels",{staticClass:"mt-1"},[n("v-expansion-panel",{attrs:{id:"total-credits"}},[n("CourseListsProgress",{attrs:{list:"Total Credits",completed:e.coursesCompleted,inProgress:e.coursesInProgress,saved:e.coursesSaved,properties:["credits"],progressRequirement:{name:"Total Credits",value:e.creditRequirements},searchSort:"credits"}})],1)],1),n("v-toolbar",{staticClass:"mt-2 mb-n1",attrs:{dense:""}},[n("v-spacer"),n("v-toolbar-title",[e._v("Accreditation Units (AUs)")]),n("v-spacer")],1),n("v-expansion-panels",{attrs:{multiple:""}},[e._l(e.auBaseRequirements,(function(t){return n("v-expansion-panel",{key:t.name,attrs:{id:"au-base-reqs"}},[n("CourseListsProgress",{attrs:{list:t.name.substring(0,t.name.indexOf("(")),completed:e.statusTypeProperties("completed","accreditationUnits",t.aus),inProgress:e.statusTypeProperties("inProgress","accreditationUnits",t.aus),saved:e.statusTypeProperties("saved","accreditationUnits",t.aus),properties:t.aus,propertyType:"accreditationUnits",progressRequirement:t,searchSort:t.aus[0]}})],1)})),e._l(e.auCombinedRequirements,(function(t){return n("v-expansion-panel",{key:t.name,attrs:{id:"au-combine-reqs"}},[n("CourseListsProgress",{attrs:{list:t.name,completed:e.statusTypeProperties("completed","accreditationUnits",t.aus),inProgress:e.statusTypeProperties("inProgress","accreditationUnits",t.aus),saved:e.statusTypeProperties("saved","accreditationUnits",t.aus),properties:t.aus,propertyType:"accreditationUnits",progressRequirement:t,searchSort:t.aus[0]}})],1)}))],2),n("v-toolbar",{staticClass:"mt-2 mb-n1",attrs:{dense:""}},[n("v-spacer"),n("v-toolbar-title",[e._v("Additional Requirements")]),n("v-spacer")],1),n("v-expansion-panels",{attrs:{multiple:""}},e._l(e.additionalRequirements,(function(t){return n("v-expansion-panel",{key:t.name,attrs:{id:"additional-reqs"}},[n("CourseListsProgress",{attrs:{list:t.name,completed:e.statusTypeProperties("completed","labels",t.labels),inProgress:e.statusTypeProperties("inProgress","labels",t.labels),saved:e.statusTypeProperties("saved","labels",t.labels),properties:t.labels,propertyType:"labels",progressRequirement:t,searchLabels:t.labels.map((function(t){return e.labelNames[t]}))}})],1)})),1),n("v-banner",{staticClass:"mt-2",attrs:{elevation:"3",icon:"mdi-alert-circle","icon-color":e.alertColor}},[e._v("To be eligible for graduation, all requirments must be satisfied")]),0!=e.labelsExceeded.length?n("v-banner",{staticClass:"mt-1",attrs:{icon:"mdi-alert","icon-color":e.alertColor,elevation:"3"}},e._l(e.labelsExceeded,(function(t){return n("div",{key:t[0]},[e._v("You are taking "+e._s(t[2])+" too many courses with the "+e._s(e.labelNames[t[0]])+" label. Only "+e._s(t[1])+" of them will count towards graduation requirements.")])})),0):e._e()],1)},r=[],i=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-expansion-panel-header",{staticClass:"headline py-2"},[n("v-row",{staticClass:"mb-n1",attrs:{"no-gutters":""}},[n("v-col",{staticStyle:{"max-width":"257px"},attrs:{cols:"5"}},[e._v(e._s(e.list))]),n("v-col",[n("div",{staticClass:"pt-1 body-1",attrs:{cols:"auto"}},[n("ProgressBar",{attrs:{properties:e.properties,propertyType:e.propertyType,type:e.progressRequirement.type,requirement:e.progressRequirement.value}})],1)]),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{staticClass:"mx-3",attrs:{text:"",rounded:"",right:"","max-width":"120",id:"find-more"},on:{click:function(e){e.stopPropagation()}}},[n("router-link",{attrs:{to:{path:"/search",query:{sortBy:e.searchSort,selectedLabels:e.searchLabels}}}},[e._v("Find More")])],1)],1)],1)],1),n("v-expand-transition",[e.completed.length>0?n("div",[n("v-expansion-panel-content",[n("div",[e._v("Completed - "+e._s(this.sumCompletedProperties(e.propertyType,e.properties))+" / "+e._s(e.progressRequirement.value)+" "+e._s(e.progressRequirement.type))])]),n("CourseList",{attrs:{courses:e.completed}})],1):e._e()]),n("v-expand-transition",[e.inProgress.length>0?n("div",[n("v-expansion-panel-content",[n("div",[e._v("In Progress - "+e._s(this.sumInProgressProperties(e.propertyType,e.properties))+" / "+e._s(e.progressRequirement.value)+" "+e._s(e.progressRequirement.type))])]),n("CourseList",{attrs:{courses:e.inProgress}})],1):e._e()]),n("v-expand-transition",[e.saved.length>0?n("div",[n("v-expansion-panel-content",[n("div",[e._v("Saved - "+e._s(this.sumSavedProperties(e.propertyType,e.properties))+" / "+e._s(e.progressRequirement.value)+" "+e._s(e.progressRequirement.type))])]),n("CourseList",{attrs:{courses:e.saved}})],1):e._e()]),n("v-snackbar",{attrs:{bottom:"",timeout:3e3},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" Undo course removal? "),n("v-btn",{attrs:{text:""},on:{click:[e.undoRemove,function(e){e.stopPropagation()}]}},[e._v("Undo")])],1)],1)},a=[],c=n("5a2b"),l=n("b6b4"),p=n("2f62");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={props:{list:String,completed:Array,inProgress:Array,saved:Array,progressRequirement:Object,properties:Array,propertyType:String,searchSort:{type:String,default:"prefix"},searchLabels:{type:Array,default:function(){return[]}}},components:{CourseList:c["a"],ProgressBar:l["a"]},computed:d({},Object(p["b"])(["sumCompletedProperties","sumInProgressProperties","sumSavedProperties"]),{snackbar:{get:function(){return this.$store.getters.showRemovedSnackbarProgress},set:function(e){this.$store.commit("updateRemovedSnackbarProgress",e)}}}),methods:{undoRemove:function(){this.$store.dispatch("undoRecentRemoval"),this.$store.commit("updateRemovedSnackbarProgress",!1)}}},h=b,v=(n("63ef"),n("2877")),f=n("6544"),m=n.n(f),y=n("8336"),g=n("62ad"),O=n("0789"),P=n("49e2"),x=n("c865"),j=n("0fd9"),C=n("2db4"),w=Object(v["a"])(h,o,a,!1,null,"0f451249",null),_=w.exports;function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}m()(w,{VBtn:y["a"],VCol:g["a"],VExpandTransition:O["a"],VExpansionPanelContent:P["a"],VExpansionPanelHeader:x["a"],VRow:j["a"],VSnackbar:C["a"]});var S={name:"Progress",data:function(){return{alertColor:"amber accent-4"}},components:{CourseListsProgress:_},computed:R({auBaseRequirements:function(){return this.graduationRequirements["auBaseRequirements"]},auCombinedRequirements:function(){return this.graduationRequirements["auCombinedRequirements"]},additionalRequirements:function(){return this.graduationRequirements["additionalRequirements"]},creditRequirements:function(){return this.graduationRequirements["totalCredits"]}},Object(p["c"])(["labelNames","graduationRequirements"]),{},Object(p["b"])(["coursesCompleted","coursesInProgress","coursesSaved","labelsExceeded"])),methods:{statusTypeProperties:function(e,t,n){var s,r,i;return s="completed"===e?this.coursesCompleted:"inProgress"===e?this.coursesInProgress:this.coursesSaved,s.filter((function(e){for(r in n)if(i=n[r],e[t][i]&&0!=e[t][i])return!0}))}}},q=S,B=(n("763a"),n("a9e3"),n("0467"),n("10d2")),A=n("713a"),D=n("9d26"),E=n("f2e7"),$=n("58df"),T=n("80d2");function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=Object($["a"])(B["a"],E["a"]).extend({name:"v-banner",inheritAttrs:!1,props:{app:Boolean,icon:String,iconColor:String,mobileBreakPoint:{type:[Number,String],default:960},singleLine:Boolean,sticky:Boolean,tile:{type:Boolean,default:!0},value:{type:Boolean,default:!0}},computed:{classes:function(){return L({},B["a"].options.computed.classes.call(this),{"v-banner--has-icon":this.hasIcon,"v-banner--is-mobile":this.isMobile,"v-banner--single-line":this.singleLine,"v-banner--sticky":this.isSticky})},hasIcon:function(){return Boolean(this.icon||this.$slots.icon)},isMobile:function(){return this.$vuetify.breakpoint.width<Number(this.mobileBreakPoint)},isSticky:function(){return this.sticky||this.app},styles:function(){var e=L({},B["a"].options.computed.styles.call(this));if(this.isSticky){var t=this.app?this.$vuetify.application.bar+this.$vuetify.application.top:0;e.top=Object(T["f"])(t),e.position="sticky",e.zIndex=1}return e}},methods:{toggle:function(){this.isActive=!this.isActive},iconClick:function(e){this.$emit("click:icon",e)},genIcon:function(){var e;if(this.hasIcon)return e=this.icon?this.$createElement(D["a"],{props:{color:this.iconColor,size:28}},[this.icon]):this.$slots.icon,this.$createElement(A["a"],{staticClass:"v-banner__icon",props:{color:this.color,size:40},on:{click:this.iconClick}},[e])},genText:function(){return this.$createElement("div",{staticClass:"v-banner__text"},this.$slots.default)},genActions:function(){var e=this,t=Object(T["m"])(this,"actions",{dismiss:function(){return e.isActive=!1}});if(t)return this.$createElement("div",{staticClass:"v-banner__actions"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-banner__content"},[this.genIcon(),this.genText()])},genWrapper:function(){return this.$createElement("div",{staticClass:"v-banner__wrapper"},[this.genContent(),this.genActions()])}},render:function(e){return e(O["a"],[e("div",this.setBackgroundColor(this.color,{staticClass:"v-banner",attrs:this.attrs$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]}),[this.genWrapper()])])}}),U=n("cd55"),M=n("0393"),H=n("2fa4"),N=n("71d9"),z=n("2a7f"),J=Object(v["a"])(q,s,r,!1,null,"50ea1eaf",null);t["default"]=J.exports;m()(J,{VBanner:V,VExpansionPanel:U["a"],VExpansionPanels:M["a"],VSpacer:H["a"],VToolbar:N["a"],VToolbarTitle:z["a"]})}}]);
//# sourceMappingURL=chunk-035c78a3.a07adb79.js.map