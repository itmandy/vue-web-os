(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69a15a3a"],{"0c95":function(t,e,i){},1141:function(t,e,i){},"1aef":function(t,e,i){},"1e13":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Modal",{attrs:{id:"one",fullscreen:t.fullscreen,"footer-hide":"",draggable:t.draggable,closable:!1},model:{value:t.isFiveViewBool,callback:function(e){t.isFiveViewBool=e},expression:"isFiveViewBool"}},[i("div",{staticStyle:{width:"100%",display:"flex","align-items":"center","justify-content":"space-between"},attrs:{slot:"header"},slot:"header"},[i("div",{staticStyle:{width:"50%",display:"flex","align-items":"center"}},[i("Icon",{staticStyle:{margin:"0.5rem"},attrs:{size:"25",type:t.menu.icon}}),i("span",{staticStyle:{color:"white"}},[i("b",[t._v(t._s(t.menu.menuName))])])],1),i("div",{staticStyle:{width:"90px",display:"flex","align-items":"center","justify-content":"space-between"}},[i("Button",{attrs:{size:"large",type:"text",ghost:"",icon:"md-remove"},on:{click:function(e){return t.mini()}}}),i("Button",{directives:[{name:"show",rawName:"v-show",value:!t.fullscreen,expression:"!fullscreen"}],attrs:{size:"large",type:"text",ghost:"",icon:"ios-expand"},on:{click:function(e){return t.big()}}}),i("Button",{directives:[{name:"show",rawName:"v-show",value:t.fullscreen,expression:"fullscreen"}],attrs:{size:"large",type:"text",ghost:"",icon:"md-expand"},on:{click:function(e){return t.small()}}}),i("Button",{attrs:{size:"large",type:"text",ghost:"",icon:"md-close"},on:{click:function(e){return t.closeView()}}})],1)]),i("div",[t._v("有多少人在为了它而奋斗")])])],1)},n=[],o={name:"five",props:{menu:""},data:function(){return{fullscreen:!1,draggable:!0}},computed:{isFiveViewBool:{get:function(){return this.$store.state.control.fiveViewBool},set:function(t){this.$store.commit("setFalseFiveVB")}}},methods:{closeView:function(){this.$store.commit("setFalseFiveVB"),this.$store.commit("deleteTaskList",this.menu)},small:function(){this.fullscreen=!1,this.draggable=!0},big:function(){this.fullscreen=!0,this.draggable=!1},mini:function(){this.$store.commit("setFalseFiveVB")}},mounted:function(){}},a=o,r=(i("df81"),i("2877")),l=Object(r["a"])(a,s,n,!1,null,"63d2c954",null);e["default"]=l.exports},"248e":function(t,e,i){},"250b":function(t,e,i){},2771:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Modal",{attrs:{id:"one",fullscreen:t.fullscreen,"footer-hide":"",draggable:t.draggable,closable:!1},model:{value:t.isThreeViewBool,callback:function(e){t.isThreeViewBool=e},expression:"isThreeViewBool"}},[i("div",{staticStyle:{width:"100%",display:"flex","align-items":"center","justify-content":"space-between"},attrs:{slot:"header"},slot:"header"},[i("div",{staticStyle:{width:"50%",display:"flex","align-items":"center"}},[i("Icon",{staticStyle:{margin:"0.5rem"},attrs:{size:"25",type:t.menu.icon}}),i("span",{staticStyle:{color:"white"}},[i("b",[t._v(t._s(t.menu.menuName))])])],1),i("div",{staticStyle:{width:"90px",display:"flex","align-items":"center","justify-content":"space-between"}},[i("Button",{attrs:{size:"large",type:"text",ghost:"",icon:"md-remove"},on:{click:function(e){return t.mini()}}}),i("Button",{directives:[{name:"show",rawName:"v-show",value:!t.fullscreen,expression:"!fullscreen"}],attrs:{size:"large",type:"text",ghost:"",icon:"ios-expand"},on:{click:function(e){return t.big()}}}),i("Button",{directives:[{name:"show",rawName:"v-show",value:t.fullscreen,expression:"fullscreen"}],attrs:{size:"large",type:"text",ghost:"",icon:"md-expand"},on:{click:function(e){return t.small()}}}),i("Button",{attrs:{size:"large",type:"text",ghost:"",icon:"md-close"},on:{click:function(e){return t.closeView()}}})],1)]),i("div",[t._v("各位兄台，请问你们最烦的难道不是它吗？")])])],1)},n=[],o={name:"three",props:{menu:""},data:function(){return{fullscreen:!1,draggable:!0}},computed:{isThreeViewBool:{get:function(){return this.$store.state.control.threeViewBool},set:function(t){this.$store.commit("setFalseThreeVB")}}},methods:{closeView:function(){this.$store.commit("setFalseThreeVB"),this.$store.commit("deleteTaskList",this.menu)},small:function(){this.fullscreen=!1,this.draggable=!0},big:function(){this.fullscreen=!0,this.draggable=!1},mini:function(){this.$store.commit("setFalseThreeVB")}},mounted:function(){console.log("three")}},a=o,r=(i("5259"),i("2877")),l=Object(r["a"])(a,s,n,!1,null,"593195b0",null);e["default"]=l.exports},"35a0":function(t,e,i){var s={"./five.vue":"1e13","./four.vue":"398d","./one.vue":"e31b","./three.vue":"2771","./two.vue":"751f"};function n(t){var e=o(t);return i(e)}function o(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id="35a0"},"398d":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Modal",{attrs:{id:"one",fullscreen:t.fullscreen,"footer-hide":"",draggable:t.draggable,closable:!1},model:{value:t.isFourViewBool,callback:function(e){t.isFourViewBool=e},expression:"isFourViewBool"}},[i("div",{staticStyle:{width:"100%",display:"flex","align-items":"center","justify-content":"space-between"},attrs:{slot:"header"},slot:"header"},[i("div",{staticStyle:{width:"50%",display:"flex","align-items":"center"}},[i("Icon",{staticStyle:{margin:"0.5rem"},attrs:{size:"25",type:t.menu.icon}}),i("span",{staticStyle:{color:"white"}},[i("b",[t._v(t._s(t.menu.menuName))])])],1),i("div",{staticStyle:{width:"90px",display:"flex","align-items":"center","justify-content":"space-between"}},[i("Button",{attrs:{size:"large",type:"text",ghost:"",icon:"md-remove"},on:{click:function(e){return t.mini()}}}),i("Button",{directives:[{name:"show",rawName:"v-show",value:!t.fullscreen,expression:"!fullscreen"}],attrs:{size:"large",type:"text",ghost:"",icon:"ios-expand"},on:{click:function(e){return t.big()}}}),i("Button",{directives:[{name:"show",rawName:"v-show",value:t.fullscreen,expression:"fullscreen"}],attrs:{size:"large",type:"text",ghost:"",icon:"md-expand"},on:{click:function(e){return t.small()}}}),i("Button",{attrs:{size:"large",type:"text",ghost:"",icon:"md-close"},on:{click:function(e){return t.closeView()}}})],1)]),i("div",[t._v("就这个东西，没玩过我是不会信的？")])])],1)},n=[],o={name:"four",props:{menu:""},data:function(){return{fullscreen:!1,draggable:!0}},computed:{isFourViewBool:{get:function(){return this.$store.state.control.fourViewBool},set:function(t){this.$store.commit("setFalseFourVB")}}},methods:{closeView:function(){this.$store.commit("setFalseFourVB"),this.$store.commit("deleteTaskList",this.menu)},small:function(){this.fullscreen=!1,this.draggable=!0},big:function(){this.fullscreen=!0,this.draggable=!1},mini:function(){this.$store.commit("setFalseFourVB")}},mounted:function(){}},a=o,r=(i("5eee"),i("2877")),l=Object(r["a"])(a,s,n,!1,null,"2869cf68",null);e["default"]=l.exports},"3abe":function(t,e,i){},"3f6b7":function(t,e,i){"use strict";var s=i("0c95"),n=i.n(s);n.a},5259:function(t,e,i){"use strict";var s=i("1141"),n=i.n(s);n.a},"5eee":function(t,e,i){"use strict";var s=i("f0ff"),n=i.n(s);n.a},6541:function(t,e,i){"use strict";var s=i("250b"),n=i.n(s);n.a},"6d0b":function(t,e,i){},7183:function(t,e,i){"use strict";var s=i("1aef"),n=i.n(s);n.a},"751f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Modal",{attrs:{id:"one",fullscreen:t.fullscreen,"footer-hide":"",draggable:t.draggable,closable:!1},model:{value:t.isTwoViewBool,callback:function(e){t.isTwoViewBool=e},expression:"isTwoViewBool"}},[i("div",{staticStyle:{width:"100%",display:"flex","align-items":"center","justify-content":"space-between"},attrs:{slot:"header"},slot:"header"},[i("div",{staticStyle:{width:"50%",display:"flex","align-items":"center"}},[i("Icon",{staticStyle:{margin:"0.5rem"},attrs:{size:"25",type:t.menu.icon}}),i("span",{staticStyle:{color:"white"}},[i("b",[t._v(t._s(t.menu.menuName))])])],1),i("div",{staticStyle:{width:"90px",display:"flex","align-items":"center","justify-content":"space-between"}},[i("Button",{attrs:{size:"large",type:"text",ghost:"",icon:"md-remove"},on:{click:function(e){return t.mini()}}}),i("Button",{directives:[{name:"show",rawName:"v-show",value:!t.fullscreen,expression:"!fullscreen"}],attrs:{size:"large",type:"text",ghost:"",icon:"ios-expand"},on:{click:function(e){return t.big()}}}),i("Button",{directives:[{name:"show",rawName:"v-show",value:t.fullscreen,expression:"fullscreen"}],attrs:{size:"large",type:"text",ghost:"",icon:"md-expand"},on:{click:function(e){return t.small()}}}),i("Button",{attrs:{size:"large",type:"text",ghost:"",icon:"md-close"},on:{click:function(e){return t.closeView()}}})],1)]),i("div",[t._v("苹果手机，就问你爱吗？")])])],1)},n=[],o={name:"two",props:{menu:""},data:function(){return{fullscreen:!1,draggable:!0}},computed:{isTwoViewBool:{get:function(){return this.$store.state.control.twoViewBool},set:function(t){this.$store.commit("setFalseTwoVB")}}},methods:{closeView:function(){this.$store.commit("setFalseTwoVB"),this.$store.commit("deleteTaskList",this.menu)},small:function(){this.fullscreen=!1,this.draggable=!0},big:function(){this.fullscreen=!0,this.draggable=!1},mini:function(){this.$store.commit("setFalseTwoVB")}},mounted:function(){console.log("two")}},a=o,r=i("2877"),l=Object(r["a"])(a,s,n,!1,null,"36ccbd6d",null);e["default"]=l.exports},"97ac":function(t,e,i){},9995:function(t,e,i){"use strict";var s=i("b4a1"),n=i.n(s);n.a},b4a1:function(t,e,i){},b5e5:function(t,e,i){"use strict";var s=i("6d0b"),n=i.n(s);n.a},c1f7:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"big",on:{contextmenu:t.showMenu}},[i("vue-context-menu",{attrs:{contextMenuData:t.contextMenuData},on:{showUser:t.showUser,refresh:t.refresh,shuaXin:t.shuaXin}}),i("div",{staticClass:"layout"},[i("div",{staticClass:"layout-up",on:{click:function(e){return t.danji()}}},[i("div",{staticStyle:{width:"100%",display:"flex","flex-direction":"column"}},[i("Main")],1),i("div",{staticStyle:{width:"650px"}},[i("Notes")],1)]),i("div",{staticClass:"layout-down"},[i("div",{staticStyle:{width:"100%",height:"0.5rem"}},[i("Start")],1),i("div",{staticStyle:{width:"100%",height:"2.5rem"}},[i("Task")],1)])])],1)},n=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("span",[t._v(" 河北金蟾软件 ")]),i("span",[i("span",[t._v("金蟾控制中心")]),i("i",{staticClass:"fa fa-heart"})])])}],r=(i("f3f3"),i("2877")),l={},c=Object(r["a"])(l,o,a,!1,null,"59a773d3",null),u=c.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"80%",margin:"0rem"}},t._l(t.menuList,(function(t){return i("Program",{key:t.menuName,attrs:{menu:t}})})),1)},f=[],d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ProgramButton"},[i("div",{staticClass:"zhong"},[i("Button",{staticClass:"buttonIcon",attrs:{type:t.menu.color,icon:t.menu.icon},on:{click:t.showView}}),i("div",{staticClass:"text"},[i("span",[i("b",[t._v(t._s(t.menu.menuName))])])])],1),t.componentBool?i(t.allComps[t.menu.englishName],{tag:"component",attrs:{menu:t.menu}}):t._e()],1)},h=[],g=(i("fb6a"),i("d3b7"),i("ac1f"),i("5319"),i("159b"),i("ddb0"),{}),p=i("35a0");p.keys().forEach((function(t){var e=p(t);g[t.replace(/^\.\/(.*)\.\w+$/,"$1")]=e.default}));var v=g,w={name:"Program",props:{menu:""},computed:{taskList:{get:function(){return this.$store.state.control.taskList}}},data:function(){return{allComps:v,componentBool:!1}},methods:{showView:function(){if(this.componentBool=!0,this.isTaskList(this.menu)){var t=this.menu.englishName.slice(0,1).toUpperCase()+this.menu.englishName.slice(1);this.$store.commit("setTrue"+t+"VB")}else{var e=this.menu.englishName.slice(0,1).toUpperCase()+this.menu.englishName.slice(1);this.$store.commit("setTrue"+e+"VB"),this.$store.commit("addTaskList",this.menu)}},isTaskList:function(t){for(var e in this.taskList)if(JSON.stringify(this.taskList[e])==JSON.stringify(t))return!0;return!1}},mounted:function(){}},y=w,b=(i("b5e5"),Object(r["a"])(y,d,h,!1,null,"5dc8d4e3",null)),x=b.exports,B={name:"Main",components:{Program:x},data:function(){return{menuList:[]}},methods:{getMenuList:function(){var t=JSON.parse(localStorage.getItem("menuList"));this.menuList=t}},mounted:function(){this.getMenuList()}},V=B,S=Object(r["a"])(V,m,f,!1,null,"9d8a51ba",null),k=S.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Modal",{staticStyle:{right:"2px"},attrs:{styles:{top:"20px"},"footer-hide":!0,width:"300",draggable:"",scrollable:"",title:"个人信息",id:"notes"},model:{value:t.isPersonalInformationViewBool,callback:function(e){t.isPersonalInformationViewBool=e},expression:"isPersonalInformationViewBool"}},[i("div",{staticStyle:{width:"100%",height:"8rem",display:"flex","align-items":"center"}},[i("div",{staticStyle:{width:"35%",height:"100%",display:"flex","flex-direction":"column","align-items":"center",border:"#000000 solid 1px"}},[i("Avatar",{staticStyle:{"margin-top":"0.75rem"},attrs:{src:t.userInfo.avatarUrl,icon:"ios-person",size:"70"}}),i("Button",{staticStyle:{margin:"0.75rem 0px"},attrs:{size:"small",type:"info"}},[t._v("修改资料")])],1),i("div",{staticStyle:{width:"20%",height:"100%",display:"flex","flex-direction":"column","align-items":"center"}},[i("div",{staticClass:"tableItem"},[i("span",[t._v("姓名")])]),i("div",{staticClass:"tableItem"},[i("span",[t._v("部门")])]),i("div",{staticClass:"tableItem"},[i("span",[t._v("职位")])]),i("div",{staticClass:"tableItem",staticStyle:{"border-bottom":"#000000 solid 1px"}},[i("span",[t._v("电话")])])]),i("div",{staticStyle:{width:"45%",height:"100%",display:"flex","flex-direction":"column","align-items":"center"}},[i("div",{staticClass:"tableItem"},[i("span",[t._v(t._s(t.userInfo.userName))])]),i("div",{staticClass:"tableItem"},[i("span",[t._v(t._s(t.userInfo.department))])]),i("div",{staticClass:"tableItem"},[i("span",[t._v(t._s(t.userInfo.position))])]),i("div",{staticClass:"tableItem",staticStyle:{"border-bottom":"#000000 solid 1px"}},[i("span",[t._v(t._s(t.userInfo.phone))])])])])])],1)},$=[],I={name:"Notes",data:function(){return{userInfo:""}},computed:{isPersonalInformationViewBool:{get:function(){return this.$store.state.control.personalInformationViewBool},set:function(t){this.$store.commit("setFalsePIVB")}}},methods:{getUserInfo:function(){this.userInfo=JSON.parse(localStorage.getItem("userInfo"))}},mounted:function(){this.getUserInfo()}},N=I,F=(i("f49a"),i("3f6b7"),Object(r["a"])(N,_,$,!1,null,"9fd7ab32",null)),L=F.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"task"},[i("div",{staticStyle:{width:"50px",height:"2.5rem"}},[i("Button",{attrs:{size:"large",type:"text",icon:"logo-windows",ghost:""},on:{click:function(e){return t.openStart()}}})],1),i("div",{staticStyle:{width:"100%",height:"2.5rem",display:"flex","align-items":"center","justify-content":"flex-start"}},t._l(t.taskList,(function(e){return i("div",{staticClass:"taskItem"},[i("a",{on:{click:function(i){return t.open(e)}}},[i("Icon",{staticStyle:{margin:"0.5rem"},attrs:{color:"white",size:"large",type:e.icon}}),i("span",{staticStyle:{color:"white","margin-right":"0.5rem"}},[i("b",[t._v(t._s(e.menuName))])])],1)])})),0),i("div",{staticStyle:{width:"150px",height:"2.5rem",display:"flex","align-items":"center","justify-content":"flex-end"}},[i("div",{staticStyle:{width:"95%",height:"2.5rem",display:"flex","align-items":"center"}}),i("div",{staticStyle:{width:"5%",height:"2.5rem","border-left":"whitesmoke solid 1px"},on:{click:function(e){return t.refresh()}}})])])},C=[],z={name:"Task",data:function(){return{}},computed:{taskList:{get:function(){return this.$store.state.control.taskList}},startInformationViewBool:{get:function(){return this.$store.state.control.startInformationViewBool}}},methods:{refresh:function(){this.$store.commit("refresh")},open:function(t){var e=t.englishName.slice(0,1).toUpperCase()+t.englishName.slice(1);this.$store.commit("setTrue"+e+"VB")},openStart:function(){this.startInformationViewBool?this.$store.commit("setFalseSIVB"):this.$store.commit("setTrueSIVB")}},mounted:function(){}},O=z,j=(i("7183"),Object(r["a"])(O,T,C,!1,null,"2283605a",null)),M=j.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.startInformationViewBool?i("div",{staticClass:"startView"},[i("div",{staticClass:"taskBar"},[i("Scroll",{staticStyle:{width:"100%"},attrs:{height:"450"}},t._l(t.menuList,(function(e){return i("div",{staticClass:"taskItem"},[i("a",{staticStyle:{width:"95%"},on:{click:function(i){return t.open(e)}}},[i("Icon",{staticStyle:{margin:"1rem"},attrs:{color:"white",size:"35",type:e.icon}}),i("span",{staticStyle:{color:"white","margin-right":"0.5rem"}},[i("b",[t._v(t._s(e.menuName))])])],1)])})),0)],1),i("div",{staticClass:"toolbar"},[i("div",{staticClass:"toolbarLine"},[i("el-button",{staticStyle:{width:"30%",height:"100%","margin-left":"1px"},attrs:{type:"info",icon:"el-icon-switch-button"},on:{click:function(e){return t.out()}}})],1)])]):t._e()])},U=[],P={name:"Start",data:function(){return{menuList:[]}},computed:{startInformationViewBool:{get:function(){return this.$store.state.control.startInformationViewBool},set:function(t){this.$store.commit("setFalseSIVB")}},taskList:{get:function(){return this.$store.state.control.taskList}}},methods:{out:function(){this.$store.commit("refresh"),localStorage.clear(),this.$router.push("/signin")},open:function(t){if(this.isTaskList(t)){var e=t.englishName.slice(0,1).toUpperCase()+t.englishName.slice(1);this.$store.commit("setTrue"+e+"VB"),this.$store.commit("setFalseSIVB")}else{var i=t.englishName.slice(0,1).toUpperCase()+t.englishName.slice(1);this.$store.commit("setTrue"+i+"VB"),this.$store.commit("addTaskList",t),this.$store.commit("setFalseSIVB")}},isTaskList:function(t){for(var e in this.taskList)if(JSON.stringify(this.taskList[e])==JSON.stringify(t))return!0;return!1},getMenuList:function(){var t=JSON.parse(localStorage.getItem("menuList"));this.menuList=t}},mounted:function(){this.getMenuList()}},J=P,D=(i("9995"),Object(r["a"])(J,E,U,!1,null,"1c9f58cc",null)),A=D.exports,X={name:"layout",components:{Footer:u,Main:k,Notes:L,Task:M,Start:A},data:function(){return{contextMenuData:{menuName:"demo",axis:{x:null,y:null},menulists:[{fnHandler:"showUser",icoName:"el-icon-user-solid",btnName:"个人信息"},{fnHandler:"shuaXin",icoName:"el-icon-refresh",btnName:"刷新"},{fnHandler:"refresh",icoName:"el-icon-view",btnName:"显示桌面"}]}}},computed:{startInformationViewBool:{get:function(){return this.$store.state.control.startInformationViewBool},set:function(t){this.$store.commit("setFalseSIVB")}}},methods:{shuaXin:function(){this.$message({message:"刷新个脑袋，不提醒你还真以为是Windows了！",type:"warning"})},refresh:function(){this.$store.commit("refresh")},showMenu:function(){event.preventDefault();var t=event.clientX,e=event.clientY;this.contextMenuData.axis={x:t,y:e}},showUser:function(){this.$store.commit("setTruePIVB")},danji:function(){this.startInformationViewBool&&this.$store.commit("setFalseSIVB")}},mounted:function(){}},H=X,W=(i("ced6"),Object(r["a"])(H,s,n,!1,null,"458b3900",null));e["default"]=W.exports},ced6:function(t,e,i){"use strict";var s=i("97ac"),n=i.n(s);n.a},df81:function(t,e,i){"use strict";var s=i("248e"),n=i.n(s);n.a},e31b:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Modal",{attrs:{id:"one",fullscreen:t.fullscreen,"footer-hide":"",draggable:t.draggable,closable:!1},model:{value:t.isOneViewBool,callback:function(e){t.isOneViewBool=e},expression:"isOneViewBool"}},[i("div",{staticStyle:{width:"100%",display:"flex","align-items":"center","justify-content":"space-between"},attrs:{slot:"header"},slot:"header"},[i("div",{staticStyle:{width:"50%",display:"flex","align-items":"center"}},[i("Icon",{staticStyle:{margin:"0.5rem"},attrs:{size:"25",type:t.menu.icon}}),i("span",{staticStyle:{color:"white"}},[i("b",[t._v(t._s(t.menu.menuName))])])],1),i("div",{staticStyle:{width:"90px",display:"flex","align-items":"center","justify-content":"space-between"}},[i("Button",{attrs:{size:"large",type:"text",ghost:"",icon:"md-remove"},on:{click:function(e){return t.mini()}}}),i("Button",{directives:[{name:"show",rawName:"v-show",value:!t.fullscreen,expression:"!fullscreen"}],attrs:{size:"large",type:"text",ghost:"",icon:"ios-expand"},on:{click:function(e){return t.big()}}}),i("Button",{directives:[{name:"show",rawName:"v-show",value:t.fullscreen,expression:"fullscreen"}],attrs:{size:"large",type:"text",ghost:"",icon:"md-expand"},on:{click:function(e){return t.small()}}}),i("Button",{attrs:{size:"large",type:"text",ghost:"",icon:"md-close"},on:{click:function(e){return t.closeView()}}})],1)]),i("div",[t._v("各位司机，请问迅雷是不是神器？")])])],1)},n=[],o={name:"one",props:{menu:""},data:function(){return{fullscreen:!1,draggable:!0}},computed:{isOneViewBool:{get:function(){return this.$store.state.control.oneViewBool},set:function(t){this.$store.commit("setFalseOneVB")}}},methods:{closeView:function(){this.$store.commit("setFalseOneVB"),this.$store.commit("deleteTaskList",this.menu)},small:function(){this.fullscreen=!1,this.draggable=!0},big:function(){this.fullscreen=!0,this.draggable=!1},mini:function(){this.$store.commit("setFalseOneVB")}},mounted:function(){console.log("one")}},a=o,r=(i("6541"),i("2877")),l=Object(r["a"])(a,s,n,!1,null,"3e45e834",null);e["default"]=l.exports},f0ff:function(t,e,i){},f3f3:function(t,e,i){"use strict";var s=i("3abe"),n=i.n(s);n.a},f49a:function(t,e,i){"use strict";var s=i("f778"),n=i.n(s);n.a},f778:function(t,e,i){},fb6a:function(t,e,i){"use strict";var s=i("23e7"),n=i("861d"),o=i("e8b5"),a=i("23cb"),r=i("50c4"),l=i("fc6a"),c=i("8418"),u=i("1dde"),m=i("b622"),f=m("species"),d=[].slice,h=Math.max;s({target:"Array",proto:!0,forced:!u("slice")},{slice:function(t,e){var i,s,u,m=l(this),g=r(m.length),p=a(t,g),v=a(void 0===e?g:e,g);if(o(m)&&(i=m.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?n(i)&&(i=i[f],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return d.call(m,p,v);for(s=new(void 0===i?Array:i)(h(v-p,0)),u=0;p<v;p++,u++)p in m&&c(s,u,m[p]);return s.length=u,s}})}}]);