(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={container:"Message_container__2CYkG",avatar:"Message_avatar__39FtG",content:"Message_content__2lNKh",content_text:"Message_content_text__19sqs",content_time:"Message_content_time__39eaV",name:"Message_name__19zTv",message:"Message_message__3WBqd",time:"Message_time__1o58L"}},,,,,,,,,,,,function(e,t,a){e.exports={navbar:"Navbar_navbar__22Z73",navItem:"Navbar_navItem__eiqpm",active:"Navbar_active__G86A7"}},function(e,t,a){e.exports={superInput:"SuperInputText_superInput__1sYM4",errorInput:"SuperInputText_errorInput__SDXMT",error:"SuperInputText_error__2ZEwo"}},function(e,t,a){e.exports={dateTime:"Clock_dateTime__1O7nz",time:"Clock_time__3AJXe",date:"Clock_date__1dYJU"}},,function(e,t,a){e.exports={header:"Header_header__1Uujl",dropbtn:"Header_dropbtn__11qkN"}},function(e,t,a){e.exports={default:"SuperButton_default__38rKK",red:"SuperButton_red__1g4W3"}},function(e,t,a){e.exports={blue:"HW4_blue__3oqkO",column:"HW4_column__2Niqp"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__bk_C0",spanClassName:"SuperCheckbox_spanClassName__22cbd"}},function(e,t,a){},,,,function(e,t,a){e.exports={superSelectSelect:"SuperSelect_superSelectSelect__2mRY5",superSelectOption:"SuperSelect_superSelectOption__1hbk7"}},function(e,t,a){e.exports={superRadioInput:"SuperRadio_superRadioInput__2WTZa",superRadioLabel:"SuperRadio_superRadioLabel__3_Jth"}},,function(e,t,a){e.exports={dark:"HW12_dark__2NPpv","dark-text":"HW12_dark-text__1Dgv-",red:"HW12_red__1kmgD","red-text":"HW12_red-text__2cyFz",green:"HW12_green__1hD8y","green-text":"HW12_green-text__3eezp",yellow:"HW12_yellow__2mLKU","yellow-text":"HW12_yellow-text__1-m1N"}},,,,,,,,,,,function(e,t,a){e.exports={App:"App_App__Uff3t"}},function(e,t,a){e.exports={high:"Affair_high__1zQTf",middle:"Affair_middle__2nj2H",low:"Affair_low__3lmar"}},function(e,t,a){e.exports={errorText:"Greeting_errorText__Z4Zyc",error:"Greeting_error__1OFl-"}},function(e,t,a){e.exports={editableSpan:"SuperEditableSpan_editableSpan__2O6k1"}},function(e,t,a){e.exports={content:"Routes_content__1JGhr"}},,function(e,t,a){e.exports=a.p+"static/media/loading-animation.0aadf035.gif"},function(e,t,a){e.exports={loadingAnimation:"HW10_loadingAnimation__2btQN"}},,function(e,t,a){e.exports=a(83)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(59),a(45)),u=a.n(o),i=a(1),s=a(23),m=a.n(s),d=a(19),E=a.n(d),p=a(2),_=a(7),f=a.n(_);var v=function(e){return r.a.createElement("div",{className:f.a.container},r.a.createElement("img",{className:f.a.avatar,src:e.avatar,alt:"Avatar"}),r.a.createElement("div",{className:f.a.content},r.a.createElement("div",{className:f.a.content_text},r.a.createElement("div",{className:f.a.name},e.name),r.a.createElement("div",{className:f.a.message},e.message)),r.a.createElement("div",{className:f.a.content_time},r.a.createElement("div",{className:f.a.time},e.time))))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Some Name",b="some text",k="22:00";var O=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(v,{avatar:h,name:g,message:b,time:k}),r.a.createElement("hr",null),r.a.createElement("hr",null))},C=a(46),N=a.n(C),S=a(4),j=a(24),y=a.n(j),x=function(e){var t=e.red,a=e.className,n=Object(S.a)(e,["red","className"]),l="".concat(t?y.a.red:y.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))};var w=function(e){return r.a.createElement("div",{className:N.a[e.affair.priority]},e.affair.name,r.a.createElement(x,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var T=function(e){var t=e.data.map((function(t){return r.a.createElement(w,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement(x,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(x,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(x,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(x,{onClick:function(){e.setFilter("low")}},"Low"))},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var H=function(){var e=Object(n.useState)(I),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,t){return"all"===t?e:e.filter((function(e){return t===e.priority}))}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(T,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return t!==e._id}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},R=a(15),A=a(47),J=a.n(A),L=a(20),U=a.n(L),W=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(S.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(U.a.error," ").concat(u||""),m="".concat(c?U.a.errorInput:U.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},M=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?J.a.error:"";return r.a.createElement("div",null,r.a.createElement(W,{value:t,onChange:a,className:o,onKeyPress:function(e){"Enter"===e.key&&n()},error:l}),r.a.createElement("div",null,r.a.createElement(x,{onClick:n},"add")),r.a.createElement("div",null,"Total users: ",c))},P=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),d=m[0],E=m[1],p=t.length;return r.a.createElement(M,{name:o,setNameCallback:function(e){u(e.currentTarget.value),E("")},addUser:function(){o.trim()?(a(o),alert("Hello  ".concat(o,"!"))):E("Blank field"),u("")},error:d,totalUsers:p})},F=a(85),D=function(e){var t=e.users,a=Object(n.useState)(!1),l=Object(i.a)(a,2),c=l[0],o=l[1];return r.a.createElement("div",null,!!t.length&&r.a.createElement(x,{onClick:function(){return o(!c)}},c?"Hide users":"Show users"),c&&t.map((function(e){return r.a.createElement("div",{key:e._id},e.name)})))};var B=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(P,{users:a,addUserCallback:function(e){var t={_id:Object(F.a)(),name:e};l([].concat(Object(R.a)(a),[t]))}}),r.a.createElement("hr",null),r.a.createElement(D,{users:a}),r.a.createElement("hr",null))},K=a(25),G=a.n(K),q=a(26),z=a.n(q),Z=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(S.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:o,checked:c.checked},c)),l&&r.a.createElement("span",{className:z.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(a),l(""))},u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],d=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:G.a.column},r.a.createElement(W,{value:a,onChangeText:l,onEnter:o,error:c,className:G.a.blue}),r.a.createElement(x,{red:!!c,onClick:o},"delete "),r.a.createElement(Z,{checked:m,onChangeChecked:d},"some text "),r.a.createElement(Z,{checked:m,onChange:function(e){d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},X=a(48),Q=a.n(X),V=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(S.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=l||{},E=d.children,p=d.onDoubleClick,_=d.className,f=Object(S.a)(d,["children","onDoubleClick","className"]),v="".concat(Q.a.editableSpan," ").concat(_);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(W,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),t&&t(e)},onEnter:function(){m(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),p&&p(e)},className:v},f),E||c.value))};function $(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function ee(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(V,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(x,{onClick:function(){$("editable-span-value",a)}},"save"),r.a.createElement(x,{onClick:function(){l(ee("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(H,null),r.a.createElement(B,null),r.a.createElement(Y,null),r.a.createElement(te,null))},ne=a(27),re=a.n(ne),le=a(9);var ce=function(){return r.a.createElement("div",{className:re.a.errorPage},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement("div",{className:re.a.homepage},r.a.createElement(le.b,{to:"/"},"Homepage")))},oe=a(49),ue=a.n(oe),ie=a(31),se=a.n(ie),me=function(e){var t=e.options,a=(e.onChange,e.onChangeOption),n=Object(S.a)(e,["options","onChange","onChangeOption"]),l=t?t.map((function(e,t){return r.a.createElement("option",{key:t,className:se.a.superSelectOption},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e.currentTarget.value)}},n,{className:se.a.superSelectSelect}),l)},de=a(32),Ee=a.n(de),pe=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(S.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&a&&l(e.currentTarget.value)}),o=a?a.map((function(e,a){return r.a.createElement("label",{key:a,className:Ee.a.superRadioLabel},r.a.createElement("input",{type:"radio",name:t,checked:e===n,value:e,onChange:c,className:Ee.a.superRadioInput}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},_e=["x","y","z"];var fe,ve=function(){var e=Object(n.useState)(_e[1]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(me,{options:_e,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(pe,{name:"radio",options:_e,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},he=function(e,t){switch(t.type){case fe.SORT:return"up"===t.payload?Object(R.a)(e).sort((function(e,t){return e.name>t.name?1:-1})):"down"===t.payload?Object(R.a)(e).sort((function(e,t){return e.name>t.name?-1:1})):e;case fe.CHECK:return e.filter((function(e){return e.age>=t.payload}));default:return e}},ge=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];!function(e){e.SORT="SORT",e.CHECK="CHECK"}(fe||(fe={}));var be=function(e){return{type:fe.SORT,payload:e}};var ke=function(){var e=Object(n.useState)(ge),t=Object(i.a)(e,2),a=t[0],l=t[1],c=r.a.createElement("table",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Age"),a.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.age))}))),o=function(e){var t;l(he(ge,(t=e,{type:fe.CHECK,payload:t})))};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){l(he(ge,be("up")))}},"sort up")),r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){l(he(ge,be("down")))}},"sort down")),r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){return o(18)}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Oe=a(21),Ce=a.n(Oe);var Ne=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(i.a)(c,2),u=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),E=d[0],p=d[1],_=function(){clearInterval(a)},f=null===u||void 0===u?void 0:u.toLocaleTimeString(),v=null===u||void 0===u?void 0:u.toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)},className:Ce.a.dateTime},r.a.createElement("span",{className:Ce.a.time},f),E&&r.a.createElement("span",{className:Ce.a.date}," ",v)),r.a.createElement(x,{onClick:function(){_();var e=window.setInterval((function(){s(new Date)}),1e3);l(e)}},"start"),r.a.createElement(x,{onClick:_},"stop"))};var Se,je=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(Ne,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},ye=a(8),xe=a(10);!function(e){e.SET_IS_LOADING="HW10/SET_IS_LOADING"}(Se||(Se={}));var we={isLoading:!1},Te=function(e){return{type:Se.SET_IS_LOADING,payload:{isLoading:e}}},Ie=a(51),He=a.n(Ie),Re=a(52),Ae=a.n(Re);var Je,Le=function(){var e=Object(ye.c)((function(e){return e.loading})),t=Object(ye.b)(),a=e.isLoading;return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",a?r.a.createElement("div",null,r.a.createElement("img",{src:He.a,alt:"Loading Animation",className:Ae.a.loadingAnimation})):r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){t(Te(!0)),setTimeout((function(){return t(Te(!1))}),2e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ue=function(e){return r.a.createElement("div",null,r.a.createElement(ve,null),r.a.createElement(ke,null),r.a.createElement(je,null),r.a.createElement(Le,null))},We=a(34),Me=a.n(We);!function(e){e.SET_THEME="HW12/SET_THEME"}(Je||(Je={}));var Pe={theme:"dark"},Fe=["dark","red","green","yellow"];var De=function(){var e=Object(ye.c)((function(e){return e.theme.theme})),t=Object(ye.b)();return r.a.createElement("div",{className:Me.a[e]},r.a.createElement("hr",null),r.a.createElement("span",{className:Me.a[e+"-text"]},"homeworks 12"),r.a.createElement("div",null,r.a.createElement(me,{options:Fe,onChangeOption:function(e){t(function(e){return{type:Je.SET_THEME,payload:{theme:e}}}(e))},value:e})),r.a.createElement("hr",null))},Be=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e.onButtonClick},"Request"),r.a.createElement("input",{type:"checkbox",checked:e.checked,onChange:e.onInputChange}),r.a.createElement("div",null,e.request))},Ke=a(53),Ge=a.n(Ke).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/"}),qe=function(e){return Ge.post("auth/test",{success:e})},ze=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),s=u[0],m=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("div",null,"homeworks 13"),r.a.createElement(Be,{onButtonClick:function(){m("Loading..."),qe(l).then((function(e){console.log(Object(xe.a)({},e)),m("receive response: ".concat(JSON.stringify(e.data.errorText)))})).catch((function(e){console.log(Object(xe.a)({},e)),m("receive error: ".concat(JSON.stringify(e.response?e.response.data.errorText:e.message)))}))},onInputChange:function(e){c(e.currentTarget.checked)},checked:l,request:s}))},Ze=function(e){return r.a.createElement("div",null,r.a.createElement(De,null),r.a.createElement(ze,null))},Ye={PRE_JUNIOR:{link:"/pre-junior",name:"preJunior"},JUNIOR:{link:"/junior",name:"Junior"},JUNIOR_PLUS:{link:"/junior-plus",name:"Junior Plus"}};var Xe=function(){return r.a.createElement("div",{className:ue.a.content},r.a.createElement(p.d,null,'\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 "/" \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR exact \u043d\u0443\u0436\u0435\u043d \u0447\u0442\u043e\u0431 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u0441\u043e\u0432\u043f\u043e\u0434\u0435\u043d\u0438\u0435 (\u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 "/" \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442)',r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(p.a,{to:Ye.PRE_JUNIOR.link})}}),r.a.createElement(p.b,{path:Ye.PRE_JUNIOR.link,render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(p.b,{path:Ye.JUNIOR.link,render:function(){return r.a.createElement(Ue,null)}}),r.a.createElement(p.b,{path:Ye.JUNIOR_PLUS.link,render:function(){return r.a.createElement(Ze,null)}}),"// add routes \u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",r.a.createElement(p.b,{render:function(){return r.a.createElement(ce,null)}})))},Qe=function(e){return r.a.createElement("div",{className:E.a.navbar},Object.keys(Ye).map((function(t){return r.a.createElement("div",{onClick:e.onClick},r.a.createElement(le.b,{key:t,to:Ye[t].link,className:E.a.navItem,activeClassName:E.a.active},Ye[t].name))})))};var Ve=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:m.a.header},r.a.createElement("div",{className:m.a.dropbtn,onClick:function(){return l(!a)}},"Select category"),a&&r.a.createElement(Qe,{onClick:function(){return l(!1)}}))};var $e=function(){return r.a.createElement("div",null,r.a.createElement(le.a,null,r.a.createElement(Ve,null),r.a.createElement(Xe,null)))};var et=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement($e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var tt=a(14),at=Object(tt.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se.SET_IS_LOADING:return Object(xe.a)({},e,{},t.payload);default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Je.SET_THEME:return Object(xe.a)({},e,{},t.payload);default:return e}}}),nt=Object(tt.c)(at),rt=nt;window.store=nt,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye.a,{store:rt},r.a.createElement(et,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[54,1,2]]]);
//# sourceMappingURL=main.7a81059e.chunk.js.map