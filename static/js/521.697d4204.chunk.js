"use strict";(self.webpackChunkgym=self.webpackChunkgym||[]).push([[521],{8857:function(e,n,t){function r(){document.querySelector("#loading-screen").style.opacity="0",setTimeout((function(){return document.querySelector("#loading-screen").style.display="none"}),300)}t.d(n,{Z:function(){return r}})},638:function(e,n,t){function r(){}t.d(n,{Z:function(){return r}})},6521:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(4165),a=t(1413),s=t(5861),i=t(885),c=t(2791),o=t(2266),u=(t(830),t(8452),t(2892)),l=t(6724),d=t(8218),p=t(184);var f=function(e){var n=e.bokadText;return(0,p.jsx)("div",{id:"check-modal",children:(0,p.jsxs)("div",{className:"booking-modal",children:[(0,p.jsx)(d.l,{className:"check-icon"}),(0,p.jsxs)("h1",{children:["Pass ",n,"!"]}),(0,p.jsxs)("p",{children:["Se dina bokade pass under ",(0,p.jsx)("a",{href:"#",children:"Min sidor"})]}),(0,p.jsx)("button",{onClick:function(){document.querySelector("#check-modal").style.display="none"},children:"OK"})]})})},h=(t(8254),t(638)),x=t(8857),v=t(9207);t(5854);var k=function(){var e=(0,c.useState)(),n=(0,i.Z)(e,2),t=(n[0],n[1]),d=(0,c.useState)({}),k=(0,i.Z)(d,2),m=(k[0],k[1],(0,c.useState)(new Date)),g=(0,i.Z)(m,2),j=g[0],Z=g[1],b=(0,c.useState)([]),S=(0,i.Z)(b,2),w=S[0],y=S[1],N=(0,c.useState)(JSON.parse(localStorage.getItem("user"))),C=(0,i.Z)(N,2),P=C[0],J=(C[1],(0,c.useRef)(null)),D=(0,l.hJ)(u.db,"pass"),A=(0,c.useState)([]),M=(0,i.Z)(A,2),T=M[0],F=M[1],V=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,h.Z)(),console.log("getPass k\xf6rs"),e.next=4,(0,l.PL)(D);case 4:n=e.sent,F(n.docs.map((function(e){return(0,a.Z)((0,a.Z)({},e.data()),{},{id:e.id})}))),(0,x.Z)();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.PL)(D);case 2:n=e.sent,F(n.docs.map((function(e){return(0,a.Z)((0,a.Z)({},e.data()),{},{id:e.id})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){q()}),[]);var I=(0,l.hJ)(u.db,"profiler"),L=(0,c.useState)([]),O=(0,i.Z)(L,2),U=(O[0],O[1]);(0,c.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.PL)(I);case 2:n=e.sent,U(n.docs.map((function(e){return(0,a.Z)((0,a.Z)({},e.data()),{},{id:e.id})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var B=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P?(P.bokadePass.find((function(e){n==e&&K()})),(0,h.Z)(),a(n)):alert("go to login / sign up"),a=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t,a,s,i,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P.id,a=P.bokadePass,s=[],a?a.map((function(e,t){s.push(n),s.push(e)})):s.push(n),i=(0,l.JU)(u.db,"profiler",t),c={bokadePass:s},e.next=8,(0,l.r7)(i,c);case 8:(0,v.Z)(P.id),V(),(0,x.Z)(),document.querySelector("#check-modal").style.display="flex";case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),K=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,t){var a,s,i,c,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],P.bokadePass.find((function(e){n==e||a.push(e)})),s=(0,l.JU)(u.db,"profiler",P.id),i={bokadePass:a},e.next=6,(0,l.r7)(s,i);case 6:return(0,v.Z)(P.id),t--,c=(0,l.JU)(u.db,"pass",n),o={platser:t},e.next=12,(0,l.r7)(c,o);case 12:V();case 13:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),E=function(){var e;null===(e=J.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("article",{className:"booking-page-container",children:[(0,p.jsx)("div",{className:"booking-page-header-desktop",children:(0,p.jsx)("h1",{children:"Boka Pass"})}),(0,p.jsxs)("div",{className:"booking-content",children:[(0,p.jsxs)("section",{className:"blue-wrapper center",children:[(0,p.jsx)("div",{className:"booking-page-header-mobile",children:(0,p.jsx)("h1",{children:"Kalender"})}),(0,p.jsx)(o.ZP,{onChange:Z,value:j,onClickDay:function(e){var n=T.filter((function(n){return n.dag==e}));y(n),E()}})]}),(0,p.jsxs)("section",{className:"blue-wrapper center",children:[(0,p.jsxs)("div",{className:"booking-page-header-mobile",children:[" ",(0,p.jsx)("h1",{children:"Pass"})," "]}),(0,p.jsxs)("select",{className:"drop-down",name:"v\xe4lj pass",onChange:function(e){return function(e){var n=T.filter((function(n){return n.kategori==e}));y(n),E(),t(e)}(e.target.value)},children:[(0,p.jsx)("option",{value:"null",children:"V\xe4lj pass"}),(0,p.jsx)("option",{value:"kondition",children:"Kondition"}),(0,p.jsx)("option",{value:"spinning",children:"Styrka"}),(0,p.jsx)("option",{value:"styrka",children:"Crossfit"}),(0,p.jsx)("option",{value:"flexebilitet",children:"Funktionell Tr\xe4ning"}),(0,p.jsx)("option",{value:"mindfullnes",children:"Mindfullnes"}),(0,p.jsx)("option",{value:"crossfit",children:"Crossfit"}),(0,p.jsx)("option",{value:"funktionell-tr\xe4ning",children:"Funktionell tr\xe4ning"})]}),w.map((function(e,n){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"pass-card center",ref:J,children:[(0,p.jsxs)("h2",{className:"booking-antal",style:e.platser==e.maxAntal?{color:"red"}:{color:"white"},children:[e.platser?e.platser:0,"/",e.maxAntal]}),(0,p.jsxs)("div",{className:"aktv-tid-div",children:[(0,p.jsx)("h1",{children:e.aktivitet}),(0,p.jsxs)("p",{children:[e.dayString,", ",e.dateString," ",e.monthString," ",(0,p.jsx)("br",{}),e.tid]})]}),(0,p.jsxs)("h2",{children:["instrukt\xf6r: ",e.instrukt\u00f6r]}),(0,p.jsx)("button",{class:"myButton booking-btn",onClick:function(){return B(e.id,"pass",e.platser)},children:"Boka"})]},n)})})),(0,p.jsx)(f,{bokadText:"Bokat"})]})]})]})})}},8254:function(e,n,t){var r=t(4165),a=t(5861),s=t(885),i=t(2791),c=(t(8452),t(8336)),o=t(2892),u=t(6724),l=t(2266),d=t(638),p=t(8857),f=t(184);n.Z=function(e){var n=e.id,t=e.aktivitet,h=e.instrukt\u00f6r,x=e.maxAntal,v=(e.platser,e.tid),k=e.dag,m=e.getPass,g=e.prevDayString,j=e.prevMonthSpring,Z=e.prevDateString,b=e.kategori,S=(0,i.useState)(t),w=(0,s.Z)(S,2),y=w[0],N=w[1],C=(0,i.useState)(b),P=(0,s.Z)(C,2),J=P[0],D=P[1],A=(0,i.useState)(h),M=(0,s.Z)(A,2),T=M[0],F=M[1],V=(0,i.useState)(x),q=(0,s.Z)(V,2),I=q[0],L=q[1],O=(0,i.useState)(v),U=(0,s.Z)(O,2),B=U[0],K=U[1],E=(0,i.useState)(k),R=(0,s.Z)(E,2),z=R[0],G=(R[1],(0,i.useState)("")),H=(0,s.Z)(G,2),Q=H[0],W=H[1],X=(0,i.useState)(g),Y=(0,s.Z)(X,2),$=Y[0],_=Y[1],ee=(0,i.useState)(j),ne=(0,s.Z)(ee,2),te=ne[0],re=ne[1],ae=(0,i.useState)(Z),se=(0,s.Z)(ae,2),ie=se[0],ce=se[1],oe=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,d.Z)(),de(),a=(0,u.JU)(o.db,t,n),console.log("newAktivitet: ",y,"newInstrukt\xf6r: ",T,"newMaxAntal: ",I,"newTid: ",B,"newDate: ",z,"dayString: ",$,"dateString: ",ie,"monthString: ",te),s={aktivitet:y,"instrukt\xf6r":T,maxAntal:I,tid:B,dag:String(z),dateString:$,dayString:ie,monthString:te,kategori:J},e.next=7,(0,u.r7)(a,s);case 7:m(),(0,p.Z)(),alert("Pass uppdaterat!"),le();case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ue=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Radera pass?")){e.next=8;break}return(0,d.Z)(),a=(0,u.JU)(o.db,t,n),e.next=5,(0,u.oe)(a);case 5:m(),le(),(0,p.Z)();case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),le=function(){document.querySelector("#update-modal-".concat(n)).style.display="none"},de=function(e){var n=new Date(e).getTime(),t=new Date(n);ce(t.getDate()),W(e);var r="";switch(t.getDay()){case 0:r="S\xf6ndag";break;case 1:r="M\xe5ndag";break;case 2:r="Tisdag";break;case 3:r="Onsdag";break;case 4:r="Torsdag";break;case 5:r="Fredag";break;case 6:r="L\xf6rdag"}_(r);var a="";switch(t.getMonth()){case 0:a="Januari";break;case 1:a="Februari";break;case 2:a="Mars";break;case 3:a="April";break;case 4:a="Maj";break;case 5:a="Juni";break;case 6:a="Juli";break;case 7:a="Agusti";break;case 8:a="September";break;case 9:a="Oktober";break;case 10:a="November";break;case 11:a="December"}re(a)};return(0,f.jsx)("section",{id:"update-modal-".concat(n),className:"update-modal-wrapper",children:(0,f.jsxs)("article",{className:"update-modal",children:[(0,f.jsx)(c.v,{className:"close-icon",onClick:le}),(0,f.jsxs)("div",{className:"modal-input-wrapper",children:[(0,f.jsx)("h1",{children:"\xc4ndra namn p\xe5 aktivitet:"}),(0,f.jsx)("input",{type:"text",placeholder:t,onChange:function(e){N(e.target.value)},defaultValue:t})]}),(0,f.jsxs)("div",{className:"modal-input-wrapper",children:[(0,f.jsx)("h1",{children:"\xc4ndra kategori:"}),(0,f.jsxs)("select",{className:"drop-down input-select",name:"v\xe4lj pass",onChange:function(e){return D(e.target.value)},children:[(0,f.jsx)("option",{value:"",children:"V\xe4lj kategori"}),(0,f.jsx)("option",{value:"kondition",children:"Kondition"}),(0,f.jsx)("option",{value:"spinning",children:"Spinning"}),(0,f.jsx)("option",{value:"styrka",children:"Styrka"}),(0,f.jsx)("option",{value:"flexebilitet",children:"Flexebilitet"}),(0,f.jsx)("option",{value:"mindfullnes",children:"Mindfullnes"}),(0,f.jsx)("option",{value:"crossfit",children:"Crossfit"}),(0,f.jsx)("option",{value:"funktionell-tr\xe4ning",children:"Funktionell tr\xe4ning"})]})]}),(0,f.jsxs)("div",{className:"modal-input-wrapper",children:[(0,f.jsx)("h1",{children:"\xc4ndra instrukt\xf6r: "}),(0,f.jsx)("input",{type:"text",placeholder:h,onChange:function(e){F(e.target.value)},defaultValue:h})]}),(0,f.jsxs)("div",{className:"center",children:[(0,f.jsx)("p",{children:"Dag: "}),(0,f.jsx)(l.ZP,{value:Q,onClickDay:de})]}),(0,f.jsxs)("div",{className:"modal-input-wrapper",children:[(0,f.jsx)("h1",{children:"\xc4ndra tid: "}),(0,f.jsx)("input",{type:"text",placeholder:v,onChange:function(e){K(e.target.value)},defaultValue:v})]}),(0,f.jsxs)("div",{className:"modal-input-wrapper",children:[(0,f.jsx)("h1",{children:"\xc4ndra maxAntal: "}),(0,f.jsx)("input",{type:"text",placeholder:x,onChange:function(e){L(e.target.value)},defaultValue:x})]}),(0,f.jsxs)("div",{className:"m30",children:[(0,f.jsx)("button",{onClick:function(){oe("pass")},children:"Spara"}),(0,f.jsx)("button",{onClick:function(){ue(n,"pass")},children:"Ta bort pass"})]})]})})}},9207:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(4165),a=t(1413),s=t(5861),i=t(2892),c=t(6724);function o(e){var n=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(){var t,s,o,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=[],s=(0,c.hJ)(i.db,"profiler"),n.next=4,(0,c.PL)(s);case 4:o=n.sent,t=o.docs.map((function(e){return(0,a.Z)((0,a.Z)({},e.data()),{},{id:e.id})})),u=t.find((function(n){return console.log("profil.id: ",n.id),n.id==e})),localStorage.setItem("user",JSON.stringify(u));case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();localStorage.removeItem("user"),n()}},8452:function(){}}]);
//# sourceMappingURL=521.697d4204.chunk.js.map