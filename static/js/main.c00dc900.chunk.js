(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{10:function(e,t,a){e.exports={container:"Message_container__2CYkG",avatar:"Message_avatar__39FtG",content:"Message_content__2lNKh",content_text:"Message_content_text__19sqs",content_time:"Message_content_time__39eaV",name:"Message_name__19zTv",message:"Message_message__3WBqd",time:"Message_time__1o58L"}},23:function(e,t,a){e.exports={range:"SuperRange_range__AIuuT"}},25:function(e,t,a){e.exports={navbar:"Navbar_navbar__22Z73",navItem:"Navbar_navItem__eiqpm",active:"Navbar_active__G86A7"}},26:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__1sYM4",errorInput:"SuperInputText_errorInput__SDXMT",error:"SuperInputText_error__2ZEwo"}},27:function(e,t,a){e.exports={dateTime:"Clock_dateTime__1O7nz",time:"Clock_time__3AJXe",date:"Clock_date__1dYJU"}},28:function(e,t,a){e.exports={header:"Header_header__1Uujl",dropbtn:"Header_dropbtn__11qkN"}},29:function(e,t,a){e.exports={default:"SuperButton_default__38rKK",red:"SuperButton_red__1g4W3"}},30:function(e,t,a){e.exports={blue:"HW4_blue__3oqkO",column:"HW4_column__2Niqp"}},31:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__bk_C0",spanClassName:"SuperCheckbox_spanClassName__22cbd"}},32:function(e,t,a){},36:function(e,t,a){e.exports={superSelectSelect:"SuperSelect_superSelectSelect__2mRY5",superSelectOption:"SuperSelect_superSelectOption__1hbk7"}},37:function(e,t,a){e.exports={superRadioInput:"SuperRadio_superRadioInput__2WTZa",superRadioLabel:"SuperRadio_superRadioLabel__3_Jth"}},40:function(e,t,a){e.exports={dark:"HW12_dark__2NPpv","dark-text":"HW12_dark-text__1Dgv-",red:"HW12_red__1kmgD","red-text":"HW12_red-text__2cyFz",green:"HW12_green__1hD8y","green-text":"HW12_green-text__3eezp",yellow:"HW12_yellow__2mLKU","yellow-text":"HW12_yellow-text__1-m1N"}},51:function(e,t,a){e.exports={App:"App_App__Uff3t"}},52:function(e,t,a){e.exports={high:"Affair_high__1zQTf",middle:"Affair_middle__2nj2H",low:"Affair_low__3lmar"}},53:function(e,t,a){e.exports={errorText:"Greeting_errorText__Z4Zyc",error:"Greeting_error__1OFl-"}},54:function(e,t,a){e.exports={editableSpan:"SuperEditableSpan_editableSpan__2O6k1"}},55:function(e,t,a){e.exports={content:"Routes_content__1JGhr"}},57:function(e,t,a){e.exports=a.p+"static/media/loading-animation.0aadf035.gif"},58:function(e,t,a){e.exports={loadingAnimation:"HW10_loadingAnimation__2btQN"}},67:function(e,t,a){e.exports=a(96)},72:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(72),a(51)),u=a.n(o),i=a(1),m=a(28),s=a.n(m),d=a(25),E=a.n(d),p=a(2),_=a(10),v=a.n(_);var f=function(e){return r.a.createElement("div",{className:v.a.container},r.a.createElement("img",{className:v.a.avatar,src:e.avatar,alt:"Avatar"}),r.a.createElement("div",{className:v.a.content},r.a.createElement("div",{className:v.a.content_text},r.a.createElement("div",{className:v.a.name},e.name),r.a.createElement("div",{className:v.a.message},e.message)),r.a.createElement("div",{className:v.a.content_time},r.a.createElement("div",{className:v.a.time},e.time))))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Some Name",b="some text",k="22:00";var O=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(f,{avatar:h,name:g,message:b,time:k}),r.a.createElement("hr",null),r.a.createElement("hr",null))},C=a(52),N=a.n(C),S=a(3),j=a(29),y=a.n(j),x=function(e){var t=e.red,a=e.className,n=Object(S.a)(e,["red","className"]),l="".concat(t?y.a.red:y.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))};var w=function(e){return r.a.createElement("div",{className:N.a[e.affair.priority]},e.affair.name,r.a.createElement(x,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var T=function(e){var t=e.data.map((function(t){return r.a.createElement(w,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement(x,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(x,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(x,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(x,{onClick:function(){e.setFilter("low")}},"Low"))},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var R=function(){var e=Object(n.useState)(I),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],m=o[1],s=function(e,t){return"all"===t?e:e.filter((function(e){return t===e.priority}))}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(T,{data:s,setFilter:m,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return t!==e._id}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=a(20),H=a(53),L=a.n(H),J=a(26),U=a.n(J),W=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(S.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(U.a.error," ").concat(u||""),s="".concat(c?U.a.errorInput:U.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:s},i)),c&&r.a.createElement("span",{className:m},c))},F=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?L.a.error:"";return r.a.createElement("div",null,r.a.createElement(W,{value:t,onChange:a,className:o,onKeyPress:function(e){"Enter"===e.key&&n()},error:l}),r.a.createElement("div",null,r.a.createElement(x,{onClick:n},"add")),r.a.createElement("div",null,"Total users: ",c))},M=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),d=s[0],E=s[1],p=t.length;return r.a.createElement(F,{name:o,setNameCallback:function(e){u(e.currentTarget.value),E("")},addUser:function(){o.trim()?(a(o),alert("Hello  ".concat(o,"!"))):E("Blank field"),u("")},error:d,totalUsers:p})},P=a(108),D=function(e){var t=e.users,a=Object(n.useState)(!1),l=Object(i.a)(a,2),c=l[0],o=l[1];return r.a.createElement("div",null,!!t.length&&r.a.createElement(x,{onClick:function(){return o(!c)}},c?"Hide users":"Show users"),c&&t.map((function(e){return r.a.createElement("div",{key:e._id},e.name)})))};var B=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(M,{users:a,addUserCallback:function(e){var t={_id:Object(P.a)(),name:e};l([].concat(Object(A.a)(a),[t]))}}),r.a.createElement("hr",null),r.a.createElement(D,{users:a}),r.a.createElement("hr",null))},K=a(30),G=a.n(K),q=a(31),z=a.n(q),Z=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(S.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:o,checked:c.checked},c)),l&&r.a.createElement("span",{className:z.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(a),l(""))},u=Object(n.useState)(!1),m=Object(i.a)(u,2),s=m[0],d=m[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:G.a.column},r.a.createElement(W,{value:a,onChangeText:l,onEnter:o,error:c,className:G.a.blue}),r.a.createElement(x,{red:!!c,onClick:o},"delete "),r.a.createElement(Z,{checked:s,onChangeChecked:d},"some text "),r.a.createElement(Z,{checked:s,onChange:function(e){d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},X=a(54),Q=a.n(X),V=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(S.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(i.a)(o,2),m=u[0],s=u[1],d=l||{},E=d.children,p=d.onDoubleClick,_=d.className,v=Object(S.a)(d,["children","onDoubleClick","className"]),f="".concat(Q.a.editableSpan," ").concat(_);return r.a.createElement(r.a.Fragment,null,m?r.a.createElement(W,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),t&&t(e)},onEnter:function(){s(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),p&&p(e)},className:f},v),E||c.value))};function $(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function ee(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(V,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(x,{onClick:function(){$("editable-span-value",a)}},"save"),r.a.createElement(x,{onClick:function(){l(ee("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(R,null),r.a.createElement(B,null),r.a.createElement(Y,null),r.a.createElement(te,null))},ne=a(32),re=a.n(ne),le=a(12);var ce=function(){return r.a.createElement("div",{className:re.a.errorPage},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement("div",{className:re.a.homepage},r.a.createElement(le.b,{to:"/"},"Homepage")))},oe=a(55),ue=a.n(oe),ie=a(36),me=a.n(ie),se=function(e){var t=e.options,a=(e.onChange,e.onChangeOption),n=Object(S.a)(e,["options","onChange","onChangeOption"]),l=t?t.map((function(e,t){return r.a.createElement("option",{key:t,className:me.a.superSelectOption},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e.currentTarget.value)}},n,{className:me.a.superSelectSelect}),l)},de=a(37),Ee=a.n(de),pe=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(S.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&a&&l(e.currentTarget.value)}),o=a?a.map((function(e,a){return r.a.createElement("label",{key:a,className:Ee.a.superRadioLabel},r.a.createElement("input",{type:"radio",name:t,checked:e===n,value:e,onChange:c,className:Ee.a.superRadioInput}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},_e=["x","y","z"];var ve,fe=function(){var e=Object(n.useState)(_e[1]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(se,{options:_e,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(pe,{name:"radio",options:_e,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},he=function(e,t){switch(t.type){case ve.SORT:return"up"===t.payload?Object(A.a)(e).sort((function(e,t){return e.name>t.name?1:-1})):"down"===t.payload?Object(A.a)(e).sort((function(e,t){return e.name>t.name?-1:1})):e;case ve.CHECK:return e.filter((function(e){return e.age>=t.payload}));default:return e}},ge=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];!function(e){e.SORT="SORT",e.CHECK="CHECK"}(ve||(ve={}));var be=function(e){return{type:ve.SORT,payload:e}};var ke=function(){var e=Object(n.useState)(ge),t=Object(i.a)(e,2),a=t[0],l=t[1],c=r.a.createElement("table",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Age"),a.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.age))}))),o=function(e){var t;l(he(ge,(t=e,{type:ve.CHECK,payload:t})))};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){l(he(ge,be("up")))}},"sort up")),r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){l(he(ge,be("down")))}},"sort down")),r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){return o(18)}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Oe=a(27),Ce=a.n(Oe);var Ne=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(i.a)(c,2),u=o[0],m=o[1],s=Object(n.useState)(!1),d=Object(i.a)(s,2),E=d[0],p=d[1],_=function(){clearInterval(a)},v=null===u||void 0===u?void 0:u.toLocaleTimeString(),f=null===u||void 0===u?void 0:u.toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)},className:Ce.a.dateTime},r.a.createElement("span",{className:Ce.a.time},v),E&&r.a.createElement("span",{className:Ce.a.date}," ",f)),r.a.createElement(x,{onClick:function(){_();var e=window.setInterval((function(){m(new Date)}),1e3);l(e)}},"start"),r.a.createElement(x,{onClick:_},"stop"))};var Se,je=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(Ne,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},ye=a(11),xe=a(14);!function(e){e.SET_IS_LOADING="HW10/SET_IS_LOADING"}(Se||(Se={}));var we={isLoading:!1},Te=function(e){return{type:Se.SET_IS_LOADING,payload:{isLoading:e}}},Ie=a(57),Re=a.n(Ie),Ae=a(58),He=a.n(Ae);var Le=function(){var e=Object(ye.c)((function(e){return e.loading})),t=Object(ye.b)(),a=e.isLoading;return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",a?r.a.createElement("div",null,r.a.createElement("img",{src:Re.a,alt:"Loading Animation",className:He.a.loadingAnimation})):r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){t(Te(!0)),setTimeout((function(){return t(Te(!1))}),2e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Je=a(23),Ue=a.n(Je),We=a(107),Fe=function(e){e.type,e.onChange;var t=e.onChangeRange,a=e.className,n=e.value,l=(Object(S.a)(e,["type","onChange","onChangeRange","className","value"]),"".concat(Ue.a.range," ").concat(a||""));return r.a.createElement(r.a.Fragment,null,r.a.createElement(We.a,{className:l,value:n,onChange:t,valueLabelDisplay:"on","aria-labelledby":"range-slider"}))},Me=function(e){var t=e.onChangeRange,a=e.valueArr,n=e.className,l=e.min,c=e.max,o=e.step,u=e.disable,i="".concat(Ue.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement(We.a,{className:i,value:a,onChange:t,valueLabelDisplay:"on","aria-labelledby":"range-slider",min:l,max:c,step:o,disabled:u}))};var Pe,De=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(100),o=Object(i.a)(c,2),u=o[0],m=o[1],s=function(e,t){"number"===typeof t?t<u&&l(t):(t[0]<u&&l(t[0]),a<t[1]&&m(t[1]))};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement(Fe,{onChangeRange:s,value:a})),r.a.createElement("div",null,r.a.createElement(Me,{onChangeRange:s,valueArr:[a,u]})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Be=function(e){return r.a.createElement("div",null,r.a.createElement(fe,null),r.a.createElement(ke,null),r.a.createElement(je,null),r.a.createElement(Le,null),r.a.createElement(De,null))},Ke=a(40),Ge=a.n(Ke);!function(e){e.SET_THEME="HW12/SET_THEME"}(Pe||(Pe={}));var qe={theme:"dark"},ze=["dark","red","green","yellow"];var Ze=function(){var e=Object(ye.c)((function(e){return e.theme.theme})),t=Object(ye.b)();return r.a.createElement("div",{className:Ge.a[e]},r.a.createElement("hr",null),r.a.createElement("span",{className:Ge.a[e+"-text"]},"homeworks 12"),r.a.createElement("div",null,r.a.createElement(se,{options:ze,onChangeOption:function(e){t(function(e){return{type:Pe.SET_THEME,payload:{theme:e}}}(e))},value:e})),r.a.createElement("hr",null))},Ye=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e.onButtonClick},"Request"),r.a.createElement("input",{type:"checkbox",checked:e.checked,onChange:e.onInputChange}),r.a.createElement("div",null,e.request))},Xe=a(63),Qe=a.n(Xe).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/"}),Ve=function(e){return Qe.post("auth/test",{success:e})},$e=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),m=u[0],s=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("div",null,"homeworks 13"),r.a.createElement(Ye,{onButtonClick:function(){s("Loading..."),Ve(l).then((function(e){console.log(Object(xe.a)({},e)),s("receive response: ".concat(JSON.stringify(e.data.errorText)))})).catch((function(e){console.log(Object(xe.a)({},e)),s("receive error: ".concat(JSON.stringify(e.response?e.response.data.errorText:e.message)))}))},onInputChange:function(e){c(e.currentTarget.checked)},checked:l,request:m}))},et=function(e){return r.a.createElement("div",null,r.a.createElement(Ze,null),r.a.createElement($e,null))},tt={PRE_JUNIOR:{link:"/pre-junior",name:"preJunior"},JUNIOR:{link:"/junior",name:"Junior"},JUNIOR_PLUS:{link:"/junior-plus",name:"Junior Plus"}};var at=function(){return r.a.createElement("div",{className:ue.a.content},r.a.createElement(p.d,null,'\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 "/" \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR exact \u043d\u0443\u0436\u0435\u043d \u0447\u0442\u043e\u0431 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u0441\u043e\u0432\u043f\u043e\u0434\u0435\u043d\u0438\u0435 (\u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 "/" \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442)',r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(p.a,{to:tt.PRE_JUNIOR.link})}}),r.a.createElement(p.b,{path:tt.PRE_JUNIOR.link,render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(p.b,{path:tt.JUNIOR.link,render:function(){return r.a.createElement(Be,null)}}),r.a.createElement(p.b,{path:tt.JUNIOR_PLUS.link,render:function(){return r.a.createElement(et,null)}}),"// add routes \u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",r.a.createElement(p.b,{render:function(){return r.a.createElement(ce,null)}})))},nt=function(e){return r.a.createElement("div",{className:E.a.navbar},Object.keys(tt).map((function(t){return r.a.createElement("div",{key:t,onClick:e.onClick},r.a.createElement(le.b,{to:tt[t].link,className:E.a.navItem,activeClassName:E.a.active},tt[t].name))})))};var rt=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:s.a.header},r.a.createElement("div",{className:s.a.dropbtn,onClick:function(){return l(!a)}},"Select category"),a&&r.a.createElement(nt,{onClick:function(){return l(!1)}}))};var lt=function(){return r.a.createElement("div",null,r.a.createElement(le.a,null,r.a.createElement(rt,null),r.a.createElement(at,null)))};var ct=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(lt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ot=a(18),ut=Object(ot.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se.SET_IS_LOADING:return Object(xe.a)({},e,{},t.payload);default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe.SET_THEME:return Object(xe.a)({},e,{},t.payload);default:return e}}}),it=Object(ot.c)(ut),mt=it;window.store=it,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye.a,{store:mt},r.a.createElement(ct,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.c00dc900.chunk.js.map