(function(t){function e(e){for(var a,o,i=e[0],l=e[1],c=e[2],d=0,k=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&k.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(k.length)k.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-5"},[n("div",{staticClass:"row"}),n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"p-2 alert alert-secondary"},[n("h3",[t._v("Not Started ")]),n("p",{attrs:{id:"counttaskBackLog"}},[t._v("3")]),n("draggable",{staticClass:"list-group",attrs:{list:t.taskBackLog,group:"tasks"}},t._l(t.taskBackLog,(function(e){return n("div",{key:e.name,staticClass:"list-group-item"},[t._v(t._s(e.name))])})),0),n("div",{staticClass:"form-inLine"},[n("b-form-input",{attrs:{placeholder:"Add new task"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add.apply(null,arguments)}},model:{value:t.newtaskBackLog,callback:function(e){t.newtaskBackLog=e},expression:"newtaskBackLog"}}),n("b-button",{staticClass:"ml-2",attrs:{variant:"primary"},on:{click:t.addTask}},[t._v("Add")])],1)],1)]),n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"p-2 alert alert-primary"},[n("h3",[t._v("In Progress ")]),n("p",{attrs:{id:"counttaskInProgress"}},[t._v("1")]),n("draggable",{staticClass:"list-group",attrs:{list:t.taskInProgress,group:"tasks"}},t._l(t.taskInProgress,(function(e){return n("div",{key:e.name,staticClass:"list-group-item"},[t._v(t._s(e.name))])})),0),n("div",{staticClass:"form-inLine"},[n("b-form-input",{attrs:{placeholder:"Add new task"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add.apply(null,arguments)}},model:{value:t.newtaskInProgress,callback:function(e){t.newtaskInProgress=e},expression:"newtaskInProgress"}}),n("b-button",{staticClass:"ml-2",attrs:{variant:"primary"},on:{click:t.addTask}},[t._v("Add")])],1)],1)]),n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"p-2 alert alert-warning"},[n("h3",[t._v("Completed ")]),n("p",{attrs:{id:"counttaskDone"}},[t._v("1")]),n("draggable",{staticClass:"list-group",attrs:{list:t.taskDone,group:"tasks"}},t._l(t.taskDone,(function(e){return n("div",{key:e.name,staticClass:"list-group-item"},[t._v(t._s(e.name))])})),0),n("div",{staticClass:"form-inLine"},[n("b-form-input",{attrs:{placeholder:"Add new task"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add.apply(null,arguments)}},model:{value:t.newtaskDone,callback:function(e){t.newtaskDone=e},expression:"newtaskDone"}}),n("b-button",{staticClass:"ml-2",attrs:{variant:"primary"},on:{click:t.addTask}},[t._v("Add")])],1)],1)])])])},r=[],o=n("b76a"),i=n.n(o),l={name:"kanban-board",components:{draggable:i.a},data:function(){return{newtaskBackLog:"",newtaskInProgress:"",newtaskDone:"",taskBackLog:[{name:"Task A"},{name:"Task B"},{name:"Task C"}],taskInProgress:[{name:"Task D"}],taskDone:[{name:"Task E"}]}},methods:{addTask:function(){this.newtaskBackLog&&(this.taskBackLog.push({name:this.newtaskBackLog}),this.newtaskBackLog="",document.getElementById("counttaskBackLog").innerHTML=this.taskBackLog.length),this.newtaskInProgress&&(this.taskInProgress.push({name:this.newtaskInProgress}),this.newtaskInProgress="",document.getElementById("counttaskInProgress").innerHTML=this.taskInProgress.length),this.newtaskDone&&(this.taskDone.push({name:this.newtaskDone}),this.newtaskDone="",document.getElementById("counttaskDone").innerHTML=this.taskDone.length)}}},c=l,u=n("2877"),d=Object(u["a"])(c,s,r,!1,null,null,null),k=d.exports,p=n("5f5b"),f=n("b1e0");n("f9e3"),n("2dd8");a["default"].config.productionTip=!1,a["default"].use(p["a"]),a["default"].use(f["a"]),new a["default"]({render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=app.a6ee7df6.js.map