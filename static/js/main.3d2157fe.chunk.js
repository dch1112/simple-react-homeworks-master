(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={container:"Message_container__2CYkG",avatar:"Message_avatar__39FtG",content:"Message_content__2lNKh",content_text:"Message_content_text__19sqs",content_time:"Message_content_time__39eaV",name:"Message_name__19zTv",message:"Message_message__3WBqd",time:"Message_time__1o58L"}},,,,,function(e,a,t){e.exports={navbar:"Navbar_navbar__22Z73",navItem:"Navbar_navItem__eiqpm",active:"Navbar_active__G86A7"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1sYM4",errorInput:"SuperInputText_errorInput__SDXMT",error:"SuperInputText_error__2ZEwo"}},,function(e,a,t){e.exports={header:"Header_header__1Uujl",dropbtn:"Header_dropbtn__11qkN"}},function(e,a,t){e.exports={default:"SuperButton_default__38rKK",red:"SuperButton_red__1g4W3"}},function(e,a,t){e.exports={blue:"HW4_blue__3oqkO",column:"HW4_column__2Niqp"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__bk_C0",spanClassName:"SuperCheckbox_spanClassName__22cbd"}},function(e,a,t){},,,,,,,function(e,a,t){e.exports={App:"App_App__Uff3t"}},function(e,a,t){e.exports={high:"Affair_high__1zQTf",middle:"Affair_middle__2nj2H",low:"Affair_low__3lmar"}},function(e,a,t){e.exports={errorText:"Greeting_errorText__Z4Zyc",error:"Greeting_error__1OFl-"}},function(e,a,t){e.exports={editableSpan:"SuperEditableSpan_editableSpan__2O6k1"}},function(e,a,t){e.exports={content:"Routes_content__1JGhr"}},,,function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(37),t(25)),u=t.n(o),i=t(2),s=t(14),m=t.n(s),d=t(11),E=t.n(d),_=t(1),f=t(6),p=t.n(f);var v=function(e){return r.a.createElement("div",{className:p.a.container},r.a.createElement("img",{className:p.a.avatar,src:e.avatar,alt:"Avatar"}),r.a.createElement("div",{className:p.a.content},r.a.createElement("div",{className:p.a.content_text},r.a.createElement("div",{className:p.a.name},e.name),r.a.createElement("div",{className:p.a.message},e.message)),r.a.createElement("div",{className:p.a.content_time},r.a.createElement("div",{className:p.a.time},e.time))))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",b="Some Name",k="some text",g="22:00";var N=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(v,{avatar:h,name:b,message:k,time:g}),r.a.createElement("hr",null),r.a.createElement("hr",null))},C=t(26),O=t.n(C),j=t(5),x=t(15),S=t.n(x),y=function(e){var a=e.red,t=e.className,n=Object(j.a)(e,["red","className"]),l="".concat(a?S.a.red:S.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var w=function(e){return r.a.createElement("div",{className:O.a[e.affair.priority]},e.affair.name,r.a.createElement(y,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var I=function(e){var a=e.data.map((function(a){return r.a.createElement(w,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement(y,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(y,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(y,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(y,{onClick:function(){e.setFilter("low")}},"Low"))},P=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var J=function(){var e=Object(n.useState)(P),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return a===e.priority}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(I,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return a!==e._id}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(31),U=t(27),A=t.n(U),R=t(12),F=t.n(R),M=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(j.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(F.a.error," ").concat(u||""),m="".concat(c?F.a.errorInput:F.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},B=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?A.a.error:"";return r.a.createElement("div",null,r.a.createElement(M,{value:a,onChange:t,className:o,onKeyPress:function(e){"Enter"===e.key&&n()},error:l}),r.a.createElement("div",null,r.a.createElement(y,{onClick:n},"add")),r.a.createElement("div",null,"Total users: ",c))},H=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),d=m[0],E=m[1],_=a.length;return r.a.createElement(B,{name:o,setNameCallback:function(e){u(e.currentTarget.value),E("")},addUser:function(){o.trim()?(t(o),alert("Hello  ".concat(o,"!"))):E("Blank field"),u("")},error:d,totalUsers:_})},W=t(45),q=function(e){var a=e.users,t=Object(n.useState)(!1),l=Object(i.a)(t,2),c=l[0],o=l[1];return r.a.createElement("div",null,!!a.length&&r.a.createElement(y,{onClick:function(){return o(!c)}},c?"Hide users":"Show users"),c&&a.map((function(e){return r.a.createElement("div",{key:e._id},e.name)})))};var G=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(H,{users:t,addUserCallback:function(e){var a={_id:Object(W.a)(),name:e};l([].concat(Object(T.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement(q,{users:t}),r.a.createElement("hr",null))},K=t(16),Z=t.n(K),D=t(17),L=t.n(D),X=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(j.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(L.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o,checked:c.checked},c)),l&&r.a.createElement("span",{className:L.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),l(""))},u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],d=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:Z.a.column},r.a.createElement(M,{value:t,onChangeText:l,onEnter:o,error:c,className:Z.a.blue}),r.a.createElement(y,{red:!!c,onClick:o},"delete "),r.a.createElement(X,{checked:m,onChangeChecked:d},"some text "),r.a.createElement(X,{checked:m,onChange:function(e){d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},z=t(28),Q=t.n(z),V=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(j.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=l||{},E=d.children,_=d.onDoubleClick,f=d.className,p=Object(j.a)(d,["children","onDoubleClick","className"]),v="".concat(Q.a.editableSpan," ").concat(f);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(M,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),_&&_(e)},className:v},p),E||c.value))};function $(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ee(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(V,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(y,{onClick:function(){$("editable-span-value",t)}},"save"),r.a.createElement(y,{onClick:function(){l(ee("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var te=function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(J,null),r.a.createElement(G,null),r.a.createElement(Y,null),r.a.createElement(ae,null))},ne=t(18),re=t.n(ne);var le=function(){return r.a.createElement("div",{className:re.a.errorPage},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement("div",{className:re.a.homepage},"Homepage"))},ce=t(29),oe=t.n(ce),ue=function(e){return r.a.createElement("div",null,"Junior Page under development ...")},ie=function(e){return r.a.createElement("div",null,"Junior Plus Page under development ...")},se={PRE_JUNIOR:{link:"/pre-junior",name:"preJunior"},JUNIOR:{link:"/junior",name:"Junior"},JUNIOR_PLUS:{link:"/junior-plus",name:"Junior Plus"}};var me=function(){return r.a.createElement("div",{className:oe.a.content},r.a.createElement(_.d,null,'\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 "/" \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR exact \u043d\u0443\u0436\u0435\u043d \u0447\u0442\u043e\u0431 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u0441\u043e\u0432\u043f\u043e\u0434\u0435\u043d\u0438\u0435 (\u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 "/" \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442)',r.a.createElement(_.b,{path:"/",exact:!0,render:function(){return r.a.createElement(_.a,{to:se.PRE_JUNIOR.link})}}),r.a.createElement(_.b,{path:se.PRE_JUNIOR.link,render:function(){return r.a.createElement(te,null)}}),r.a.createElement(_.b,{path:se.JUNIOR.link,render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(_.b,{path:se.JUNIOR_PLUS.link,render:function(){return r.a.createElement(ie,null)}}),"// add routes \u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",r.a.createElement(_.b,{render:function(){return r.a.createElement(le,null)}})))},de=t(8),Ee=function(e){return r.a.createElement("div",{className:E.a.navbar},Object.keys(se).map((function(a){return r.a.createElement("div",{onClick:e.onClick},r.a.createElement(de.b,{key:a,to:se[a].link,className:E.a.navItem,activeClassName:E.a.active},se[a].name))})))};var _e=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:m.a.header},r.a.createElement("div",{className:m.a.dropbtn,onClick:function(){return l(!t)}},"Select category"),t&&r.a.createElement(Ee,{onClick:function(){return l(!1)}}))};var fe=function(){return r.a.createElement("div",null,r.a.createElement(de.a,null,r.a.createElement(_e,null),r.a.createElement(me,null)))};var pe=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(fe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.3d2157fe.chunk.js.map