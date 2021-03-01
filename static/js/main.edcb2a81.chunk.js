(this["webpackJsonpreact-game"]=this["webpackJsonpreact-game"]||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(16),c=n.n(r),s=n(34),i=n(79),o="rgb(0, 0, 0)",l=Object(i.a)({palette:{primary:{main:o},secondary:{main:o}},typography:{fontFamily:"Jura",body2:{fontFamily:"Jura",fontSize:"1rem"}},shape:{borderRadius:20},overrides:{MuiChip:{root:{margin:"0 10px 20px 0"}},MuiTextField:{root:{borderColor:o,marginBottom:"20px",width:"370px","& .MuiInput-underline:before":{borderBottomColor:o},"&:hover":{borderBottomColor:o}}},MuiButton:{root:{fontWeight:"bold",fontSize:"16px","&:focus":{outline:"none"}}},MuiInputLabel:{root:{color:o}}}}),u=n(19),j=n(146),d=(n(91),n(24)),b={data:[],isLoading:!1,error:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"timra/posts/REQUEST":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0});case"timra/posts/SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{data:t.payload.data,isLoading:!1});case"timra/posts/SET_FAILURE":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,error:t.payload.error});default:return e}},m=n(27),p=n.n(m),x=n(42),h=n(67),f=n.n(h),g=function(e){return{id:e.id,title:e.title.rendered}},v=function(){var e=Object(x.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://timra.ru/timra/wp-json/wp/v2/posts?_embed&per_page=20&page=1");case 3:return t=e.sent,n=t.data,e.abrupt("return",n.map(g));case 8:e.prev=8,e.t0=e.catch(0),console.error("ERROR IN API = ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();v();var y,k=n(45),N=n(2),S=function(){return Object(N.jsx)("div",{className:"loader",children:"Loading..."})},w=n(151),F=Object(k.b)((function(e){return e}),{getPostsThunk:function(){return function(){var e=Object(x.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"timra/posts/REQUEST"}),e.next=3,v();case 3:n=e.sent,t({type:"timra/posts/SUCCESS",payload:{data:n}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.posts,n=e.getPostsThunk,r=Object(a.useState)(t.data),c=Object(u.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(t.isLoading),l=Object(u.a)(o,2),j=l[0],d=l[1];return Object(a.useEffect)((function(){t.data.length||n()}),[n,t.data.length]),Object(a.useEffect)((function(){i(t.data)}),[t.data]),Object(a.useEffect)((function(){d(t.isLoading)}),[t.isLoading,n]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h1",{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),j||!t.data.length?Object(N.jsx)(S,{}):null,s.map((function(e,t){var n=e.id,a=e.title;return Object(N.jsx)(w.a,{in:!0,timeout:200*t,children:Object(N.jsxs)("div",{children:[Object(N.jsxs)("strong",{children:[t,".__ "]})," ",a]})},n)}))]})})),_=n(143),B=function(){return Object(N.jsx)("svg",{className:"circle",children:Object(N.jsx)("circle",{r:"20",cx:"24",cy:"24",stroke:"#009688",strokeWidth:"5",fill:"none",strokeLinecap:"round"})})},R=function(){return Object(N.jsxs)("svg",{className:"cross",children:[Object(N.jsx)("line",{className:"first",x1:"5",y1:"5",x2:"40",y2:"40",stroke:"#606060",strokeWidth:"5",strokeLinecap:"round"}),Object(N.jsx)("line",{className:"second",x1:"40",y1:"5",x2:"5",y2:"40",stroke:"#606060",strokeWidth:"5",strokeLinecap:"round"})]})},C=function(e){var t=e.value,n=e.isWinner,a=e.setActive;return Object(N.jsxs)("button",{className:"square ".concat(n?"square--winner":""),onClick:a,children:["O"===t&&Object(N.jsx)(B,{}),"X"===t&&Object(N.jsx)(R,{})]})},E=function(){var e,t=Object(a.useState)(Array(9).fill(null)),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!0),i=Object(u.a)(s,2),o=i[0],l=i[1],j=Object(a.useState)(null),d=Object(u.a)(j,2),b=d[0],O=d[1],m=Object(a.useState)(!1),p=Object(u.a)(m,2),x=p[0],h=p[1],f=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(u.a)(t[n],3),r=a[0],c=a[1],s=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[s])return{winner:e[r],idxs:[r,c,s]}}return null};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"status ".concat(b||x?"status--win":""," ").concat(o?"status--nextX":""),children:["\xa0",function(e,t){return e?"Winner: "+e:x?"TIE !!":"Next: "+(t?"X":"0")}((null===(e=f(r))||void 0===e?void 0:e.winner)||null,o)]}),Object(N.jsx)("div",{className:b||x?"board  board--disabled":"board",children:r.map((function(e,t){var n;return Object(N.jsx)(C,{value:e,isWinner:(null===(n=f(r))||void 0===n?void 0:n.idxs.includes(t))||null,setActive:function(){return function(e){var t,n=r.slice();if(!f(n)&&!r[e]){n[e]=o?"X":"O",c(n),l(!o);var a=(null===(t=f(n))||void 0===t?void 0:t.winner)||null;O(a);var s=new Audio(o?"https://timra.ru/portfolio/audio/cross.mp3":"https://timra.ru/portfolio/audio/zero.mp3");s.volume=.1,s.play(),h(9===n.filter((function(e){return e})).length)}}(t)}},t)}))}),(b||x)&&Object(N.jsx)(_.a,{className:"play-again",variant:"contained",onClick:function(){c(Array(9).fill(null)),O(null),h(!1)},children:"Play again"})]})},L=function(e){var t=e.innerRef;return Object(N.jsx)("div",{className:"game",ref:t,children:Object(N.jsxs)("div",{className:"game--board",children:[Object(N.jsx)("h1",{className:"game--title",children:"Tic-Tac-Toe"}),Object(N.jsx)(E,{})]})})},T=n(37),q=n(145),W=n(152),I=n(11),A=n(153),M=n(147),z=n(148),P=n(144),U=n(72),J=n.n(U),X=n(74),D=n.n(X),Q=n.p+"static/media/rs_school_js.ad178c0d.svg",G=function(){return Object(N.jsxs)("a",{href:"/",className:"logo",children:[Object(N.jsx)("img",{src:Q,alt:"",className:"logo__img"}),Object(N.jsx)("span",{className:"logo__text",children:Object(N.jsx)("span",{className:"logo__title",children:"React game"})})]})},H=n(73),K=n.n(H),V=[{name:"Statistics",path:"/stat/"},{name:"Play",path:"/"}],Y=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("nav",{className:"nav",children:V.map((function(e,t){return Object(N.jsx)(_.a,{component:s.b,to:e.path,exact:!0,children:e.name},t)}))})})},Z=n(71),$=n.n(Z),ee=function(e){var t=e.onBtnFullScreenClick;return Object(N.jsx)(P.a,{onClick:t,children:Object(N.jsx)($.a,{})})},te=Object(q.a)((function(e){return Object(W.a)({root:{},menuButton:{marginLeft:e.spacing(2)},logo:{flexGrow:1},appBar:{boxShadow:"none",borderBottom:"1px solid "+Object(I.b)(e.palette.primary.light,.35)},sectionDesktop:Object(T.a)({display:"none"},e.breakpoints.up("sm"),{display:"flex",alignItems:"center"}),sectionMobile:Object(T.a)({display:"flex"},e.breakpoints.up("sm"),{display:"none"})})})),ne=function(e){var t=e.onBtnFullScreenClick,n=te();return Object(N.jsx)(A.a,{position:"sticky",color:"inherit",className:n.appBar,children:Object(N.jsx)(j.a,{maxWidth:"xl",children:Object(N.jsxs)(M.a,{children:[Object(N.jsx)(z.a,{className:n.logo,children:Object(N.jsx)(G,{})}),Object(N.jsxs)("div",{className:n.sectionDesktop,children:[Object(N.jsx)(Y,{}),Object(N.jsx)(P.a,{className:n.menuButton,children:Object(N.jsx)(J.a,{})}),Object(N.jsx)(P.a,{className:n.menuButton,children:Object(N.jsx)(K.a,{})}),Object(N.jsx)(ee,{onBtnFullScreenClick:t})]}),Object(N.jsx)("div",{className:n.sectionMobile,children:Object(N.jsx)(P.a,{className:n.menuButton,color:"primary",children:Object(N.jsx)(D.a,{})})})]})})})},ae=n(75),re=n.n(ae),ce=function(){return Object(N.jsxs)("footer",{children:[Object(N.jsx)(P.a,{color:"primary",href:"https://github.com/TimraWork",target:"_blank",children:Object(N.jsx)(re.a,{})}),Object(N.jsx)("div",{className:"copyright",children:"\xa9 2021"}),Object(N.jsx)("a",{href:"https://rs.school/react/",className:"footer-logo",target:"_blank",children:Object(N.jsx)("img",{src:Q,alt:"",className:"footer-logo__img"})})]})},se=n(9),ie=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(ne,{onBtnFullScreenClick:function(){var e=n;e&&e.requestFullscreen&&e.requestFullscreen(),e&&e.webkitRequestFullScreen&&e.webkitRequestFullScreen(),e&&e.msRequestFullscreen&&e.msRequestFullscreen(),e&&e.mozRequestFullScreen&&e.mozRequestFullScreen()}}),Object(N.jsx)(j.a,{maxWidth:"xl",children:Object(N.jsxs)(se.c,{children:[Object(N.jsx)(se.a,{exact:!0,path:"/",children:Object(N.jsx)(L,{innerRef:function(e){r(e)}})}),Object(N.jsx)(se.a,{exact:!0,path:"/stat",component:F})]})}),Object(N.jsx)(ce,{})]})},oe=n(17),le=Object(oe.c)({posts:O}),ue=n(76),je=n(52),de=n(77),be={key:"root",storage:n.n(de).a},Oe=Object(je.a)(be,le),me=oe.d,pe=(y={},Object(oe.e)(Oe,y,me(Object(oe.a)(ue.a)))),xe=Object(je.b)(pe),he=n(78),fe=n(149),ge=n(150);c.a.render(Object(N.jsx)(k.a,{store:pe,children:Object(N.jsx)(he.a,{loading:null,persistor:xe,children:Object(N.jsx)(s.a,{children:Object(N.jsxs)(fe.a,{theme:l,children:[Object(N.jsx)(ge.a,{}),Object(N.jsx)(ie,{})]})})})}),document.getElementById("root"))},91:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.edcb2a81.chunk.js.map