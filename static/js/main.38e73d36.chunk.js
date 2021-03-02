(this["webpackJsonpreact-game"]=this["webpackJsonpreact-game"]||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(17),s=n.n(r),a=n(68),i=n(66),o="rgb(0, 0, 0)",l=Object(i.a)({palette:{primary:{main:o},secondary:{main:o}},typography:{fontFamily:"Jura"},shape:{borderRadius:20},overrides:{MuiButton:{root:{fontWeight:"bold",fontSize:"17px","&:focus":{outline:"none"}}}}}),u=(n(80),n(14)),j=n(128),b=n(2),d=function(){return Object(b.jsx)("svg",{className:"circle",children:Object(b.jsx)("circle",{r:"20",cx:"24",cy:"24",stroke:"#009688",strokeWidth:"5",fill:"none",strokeLinecap:"round"})})},O=function(){return Object(b.jsxs)("svg",{className:"cross",children:[Object(b.jsx)("line",{className:"first",x1:"5",y1:"5",x2:"40",y2:"40",stroke:"#606060",strokeWidth:"5",strokeLinecap:"round"}),Object(b.jsx)("line",{className:"second",x1:"40",y1:"5",x2:"5",y2:"40",stroke:"#606060",strokeWidth:"5",strokeLinecap:"round"})]})},f=function(e){var t=e.value,n=e.isWinner,c=e.setActive;return Object(b.jsxs)("button",{className:"square ".concat(n?"square--winner":""),onClick:c,children:["O"===t&&Object(b.jsx)(d,{}),"X"===t&&Object(b.jsx)(O,{})]})},m=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(u.a)(t[n],3),r=c[0],s=c[1],a=c[2];if(e[r]&&e[r]===e[s]&&e[r]===e[a])return{winner:e[r],idxs:[r,s,a]}}return null},x=function(e,t,n){return e?"Winner: "+e:n?"TIE !!!":"Next: "+(t?"X":"0")},h=function(e,t){if(!t){var n="https://timra.ru/portfolio/audio/".concat(e,".mp3"),c=new Audio(n);c.volume=.1,c.play()}},p=function(e){var t,n=e.isMute,r=Object(c.useState)(Array(9).fill(null)),s=Object(u.a)(r,2),a=s[0],i=s[1],o=Object(c.useState)(!0),l=Object(u.a)(o,2),d=l[0],O=l[1],p=Object(c.useState)(null),g=Object(u.a)(p,2),v=g[0],k=g[1],y=Object(c.useState)(!1),N=Object(u.a)(y,2),S=N[0],w=N[1];Object(c.useEffect)((function(){var e,t=(null===(e=m(a))||void 0===e?void 0:e.winner)||null;k(t),t&&w(!1)}),[a,d]);return Object(c.useEffect)((function(){setTimeout((function(){v&&!S&&h("win",n)}),2e3)}),[S,v]),Object(c.useEffect)((function(){console.log(S,v),setTimeout((function(){S&&h("tie",n)}),1500)}),[S]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"status ".concat(v||S?"status--win":""," ").concat(d?"status--nextX":""),children:["\xa0 ",x((null===(t=m(a))||void 0===t?void 0:t.winner)||null,d,S)]}),Object(b.jsx)("div",{className:v||S?"board  board--disabled":"board",children:a.map((function(e,t){var c;return Object(b.jsx)(f,{value:e,isWinner:(null===(c=m(a))||void 0===c?void 0:c.idxs.includes(t))||null,setActive:function(){return function(e){var t=a.slice();m(t)||a[e]||(t[e]=d?"X":"O",i(t),O(!d),h(d?"cross":"zero",n),w(9===t.filter((function(e){return e})).length))}(t)}},t)}))}),(v||S)&&Object(b.jsx)(j.a,{className:"btn-new-game",variant:"contained",onClick:function(){i(Array(9).fill(null)),k(null),w(!1)},children:"new game"})]})},g=function(e){var t=e.innerRef,n=e.isMute;return Object(b.jsx)("div",{className:"game",ref:t,children:Object(b.jsxs)("div",{className:"game--board",children:[Object(b.jsx)("h1",{className:"game--title",children:"Tic-Tac-Toe"}),Object(b.jsx)(p,{isMute:n})]})})},v=n(129),k=n.p+"static/media/rs_school_js.ad178c0d.svg",y=function(){return Object(b.jsxs)("a",{href:"/",className:"logo",children:[Object(b.jsx)("img",{src:k,alt:"",className:"logo__img"}),Object(b.jsx)("span",{className:"logo__text",children:Object(b.jsx)("span",{className:"logo__title",children:"React game"})})]})},N=n(54),S=n.n(N),w=n(57),R=n.n(w),_=n(58),F=n.n(_),C=n(56),E=n.n(C),M=n(55),q=n.n(M),T=function(e){var t=e.onBtnFullScreenClick,n=e.onBtnVolumeMuteClick,r=e.isMute,s=Object(c.useState)(!1),a=Object(u.a)(s,2),i=a[0],o=a[1],l=Object(c.useRef)(null);return Object(b.jsxs)("header",{children:[Object(b.jsx)(y,{}),Object(b.jsx)(v.a,{onClick:t,children:Object(b.jsx)(S.a,{})}),Object(b.jsx)(v.a,{onClick:function(){o(!i),l.current&&(i?(l.current.defaultMuted=!1,l.current.muted=!1):(l.current.defaultMuted=!0,l.current.muted=!0))},children:i?Object(b.jsx)(E.a,{}):Object(b.jsx)(q.a,{})}),Object(b.jsx)("audio",{autoPlay:!0,loop:!0,ref:l,src:"https://timra.ru/portfolio/audio/music.mp3"}),Object(b.jsx)(v.a,{onClick:n,children:r?Object(b.jsx)(F.a,{}):Object(b.jsx)(R.a,{})})]})},L=n(59),W=n.n(L),A=function(){return Object(b.jsxs)("footer",{children:[Object(b.jsx)(v.a,{color:"primary",href:"https://github.com/TimraWork",target:"_blank",children:Object(b.jsx)(W.a,{})}),Object(b.jsx)("div",{className:"copyright",children:"\xa9 2021"}),Object(b.jsx)("a",{href:"https://rs.school/react/",className:"footer-logo",target:"_blank",children:Object(b.jsx)("img",{src:k,alt:"",className:"footer-logo__img"})})]})},B=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),a=Object(u.a)(s,2),i=a[0],o=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(T,{onBtnFullScreenClick:function(){var e=n;e&&e.requestFullscreen&&e.requestFullscreen(),e&&e.webkitRequestFullScreen&&e.webkitRequestFullScreen(),e&&e.msRequestFullscreen&&e.msRequestFullscreen(),e&&e.mozRequestFullScreen&&e.mozRequestFullScreen()},onBtnVolumeMuteClick:function(){i&&h("mute",i),o(!i)},isMute:i}),Object(b.jsx)(g,{innerRef:function(e){r(e)},isMute:i}),Object(b.jsx)(A,{})]})},I=n(13),z=n(19),X={data:[],isLoading:!1,error:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"timra/posts/REQUEST":return Object(z.a)(Object(z.a)({},e),{},{isLoading:!0});case"timra/posts/SUCCESS":return Object(z.a)(Object(z.a)({},e),{},{data:t.payload.data,isLoading:!1});case"timra/posts/SET_FAILURE":return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,error:t.payload.error});default:return e}},U=n(25),P=n.n(U),V=n(34),Q=n(60),D=n.n(Q),G=function(e){return{id:e.id,title:e.title.rendered}},H=function(){var e=Object(V.a)(P.a.mark((function e(){var t,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("https://timra.ru/timra/wp-json/wp/v2/posts?_embed&per_page=20&page=1");case 3:return t=e.sent,n=t.data,e.abrupt("return",n.map(G));case 8:e.prev=8,e.t0=e.catch(0),console.error("ERROR IN API = ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();H();var K,Y=Object(I.c)({posts:J}),Z=n(62),$=n(39),ee=n(63),te={key:"root",storage:n.n(ee).a},ne=Object($.a)(te,Y),ce=I.d,re=(K={},Object(I.e)(ne,K,ce(Object(I.a)(Z.a)))),se=Object($.b)(re),ae=n(64),ie=n(67),oe=n(130),le=n(131);s.a.render(Object(b.jsx)(ie.a,{store:re,children:Object(b.jsx)(ae.a,{loading:null,persistor:se,children:Object(b.jsx)(a.a,{children:Object(b.jsxs)(oe.a,{theme:l,children:[Object(b.jsx)(le.a,{}),Object(b.jsx)(B,{})]})})})}),document.getElementById("root"))},80:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.38e73d36.chunk.js.map