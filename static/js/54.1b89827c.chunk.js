"use strict";(self.webpackChunkpurrfect_match_frontend=self.webpackChunkpurrfect_match_frontend||[]).push([[54],{977:function(n,e,t){t.d(e,{Z:function(){return v}});var i,r,o,a,s,l,c=t(3293),d=t(4302),p=t(168),x=t(6444),m=x.ZP.div(i||(i=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 60px 16px;\n  text-align: center;\n  @media screen and (min-width: 768px) {\n    width: 608px;\n  }\n"]))),h=x.ZP.h2(r||(r=(0,p.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 33px;\n  margin-bottom: 52px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 40px;\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 28px;\n    line-height: 38px;\n    letter-spacing: -0.01em;\n  }\n"]))),u=x.ZP.p(o||(o=(0,p.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.04em;\n\n  margin-bottom: 40px;\n\n  @media screen and (min-width: 768px) {\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 22px;\n    text-align: center;\n    letter-spacing: -0.01em;\n\n    margin-bottom: 48px;\n  }\n"]))),f=x.ZP.div(a||(a=(0,p.Z)(["\n  display: flex;\n  text-align: center;\n  max-width: 393px;\n"]))),g=x.ZP.span(s||(s=(0,p.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n  letter-spacing: -0.01em;\n"]))),Z=x.ZP.div(l||(l=(0,p.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n  }\n"]))),j=t(9839),w=t(184),v=function(n){var e=n.close,t=n.approve,i="mobile"===(0,c.G)(["(min-width: 1280px)","(min-width: 768px)","(min-width: 480px)"],["desktop","tablet","mobile"],"xs");return(0,w.jsxs)(m,{children:[(0,w.jsx)(h,{children:"Delete adverstiment?!"}),(0,w.jsx)(f,{children:(0,w.jsxs)(u,{children:["Are you sure you want to delete"," ",(0,w.jsx)(g,{children:"\u201cCute dog looking for a home\u201d"}),"? ",(0,w.jsx)("br",{}),"You can`t undo this action."]})}),i?(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(Z,{children:[(0,w.jsx)(d.Z,{type:"button",onClick:e,w:"256",h:"40",style:{marginBottom:"8px"},children:"Cancel"}),(0,w.jsxs)(d.Z,{type:"button",onClick:t,w:"256",h:"40",shape:"solid",g:"8",children:["Yes",(0,w.jsx)(j.Z,{id:"trash",s:"#FEF9F9"})]})]})}):(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(Z,{children:[(0,w.jsx)(d.Z,{type:"button",onClick:e,w:"129",h:"40",style:{marginRight:"17px"},children:"Cancel"}),(0,w.jsxs)(d.Z,{type:"button",onClick:t,w:"129",h:"40",shape:"solid",g:"8",children:["Yes",(0,w.jsx)(j.Z,{id:"trash",s:"#FEF9F9"})]})]})})]})}},1054:function(n,e,t){t.r(e),t.d(e,{User:function(){return xe},default:function(){return me}});var i=t(9439),r=t(2791),o=t(7689),a=t(1413),s=t(5861),l=t(4687),c=t.n(l),d=t(1405),p=t(9787),x=t(14),m=function(n){var e=new Date(n),t=e.getDate(),i=e.getMonth()+1,r=e.getFullYear();return"".concat(t<10?"0"+t:t,".").concat(i<10?"0"+i:i,".").concat(r)},h=t(6877),u=t(4043),f=t(184),g={name:"",email:"",birthday:"",phone:"",city:"",avatarUrl:null},Z=function(n){var e=(0,r.useState)(g),t=(0,i.Z)(e,2),o=t[0],l=t[1],Z=(0,r.useState)(!1),j=(0,i.Z)(Z,2),w=j[0],v=j[1],y=(0,d.v9)((function(n){return n.auth.token}));(0,r.useEffect)((function(){var n=function(){var n=(0,s.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,x.TE)(e);case 2:t=n.sent,l(t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();n(y)}),[y]);var b=function(){var n=(0,s.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(o.photo),n.next=3,(0,x.t9)(y,{avatar:o.avatarUrl});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(An,{children:[(0,f.jsx)(Tn,{children:"My information:"}),(0,f.jsxs)(Sn,{children:[(0,f.jsxs)(In,{children:[(0,f.jsxs)(Gn,{children:[(0,f.jsx)("input",{type:"file",onChange:function(n){l((0,a.Z)((0,a.Z)({},o),{},{avatarUrl:n.target.files[0]}))},accept:"image/png, image/jpeg",multiple:!1}),o.avatarUrl?(0,f.jsx)(Hn,{src:o.avatarUrl,alt:"Selected file"}):(0,f.jsx)(p.Z,{id:"add-photo-pet",w:"48",h:"48",s:"#54ADFF"}),(0,f.jsx)("input",{})]}),(0,f.jsxs)(Jn,{onClick:b,children:[(0,f.jsx)(p.Z,{id:"camera",s:"#54ADFF"}),(0,f.jsx)(Qn,{children:"Edit photo"})]})]}),(0,f.jsxs)(Wn,{children:[(0,f.jsx)(te,{name:"name",type:"text",value:o.name||"User"}),(0,f.jsx)(te,{name:"email",type:"text",value:o.email}),(0,f.jsx)(te,{name:"birthday",type:"text",value:m(o.birthday)||""}),(0,f.jsx)(te,{name:"phone",type:"text",value:o.phone}),(0,f.jsx)(te,{name:"city",type:"text",value:o.city||""}),(0,f.jsxs)(Kn,{onClick:function(){v(!0)},children:[(0,f.jsx)(p.Z,{id:"logout",s:"#54ADFF"}),(0,f.jsx)(Vn,{children:"Log Out"})]})]}),w&&(0,f.jsx)(h.Z,{close:function(){return v(!1)},children:(0,f.jsx)(u.Z,{close:function(){return v(!1)}})})]})]})})},j=t(4302),w=t(5593),v=function(n){return n.myPets.myPets},y=t(977),b=function(){var n=(0,r.useState)(!1),e=(0,i.Z)(n,2),t=e[0],a=e[1],s=(0,d.v9)(v).results,l=void 0===s?[]:s;console.log(l);var c=(0,d.I0)(),x=(0,o.s0)();(0,r.useEffect)((function(){c((0,w.mj)())}),[c]);var u=function(n){return(0,f.jsxs)(Yn,{children:[(0,f.jsx)(Ln,{src:n.photoUrl}),(0,f.jsxs)(Rn,{children:[(0,f.jsx)(On,{onClick:function(){return a(!0)},children:(0,f.jsx)(p.Z,{id:"trash",s:"#54ADFF"})}),(0,f.jsxs)(Bn,{children:[(0,f.jsx)(Nn,{children:"Name:"})," ",n.name]}),(0,f.jsxs)(Bn,{children:[(0,f.jsx)(Nn,{children:"Date of Birth:"})," ",m(n.birthday)]}),(0,f.jsxs)(Bn,{children:[(0,f.jsx)(Nn,{children:"Breed:"})," ",n.breed]}),(0,f.jsxs)(Bn,{children:[(0,f.jsx)(Nn,{children:"Comments:"})," ",n.comments]})]}),t&&(0,f.jsx)(h.Z,{close:function(){return a(!1)},children:(0,f.jsx)(y.Z,{approve:function(){return e=n._id,void c((0,w.fj)(e));var e},close:function(){return a(!1)}})})]},n._id)};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(Un,{children:[(0,f.jsxs)(_n,{children:[(0,f.jsx)(Tn,{children:"My pets:"}),(0,f.jsxs)(j.Z,{onClick:function(){x("/add-pet",{replace:!0})},type:"button",shape:"solid",g:"8",children:[(0,f.jsx)("p",{children:"Add pet"}),(0,f.jsx)(p.Z,{id:"plus-small",s:"#FEF9F9"})]})]}),l.length?l.map((function(n){return u(n)})):(0,f.jsx)(qn,{children:"You have no own added pets yet \ud83d\ude14"})]})})},P=t(4942),k=t(3216),F=t(8527),C=t(4189),M=t(4522);var z,D,E,S,A,U,Y,T,_,R,B,N,O,G,H,I,L,q,J,K,Q,V,W,X,$,nn,en,tn,rn=function(n){return function(n,e){var t,i;(0,M.Z)(1,arguments);var r=(0,F.default)(n);if(isNaN(r.getTime()))throw new RangeError("Invalid time value");var o=String(null!==(t=null===e||void 0===e?void 0:e.format)&&void 0!==t?t:"extended"),a=String(null!==(i=null===e||void 0===e?void 0:e.representation)&&void 0!==i?i:"complete");if("extended"!==o&&"basic"!==o)throw new RangeError("format must be 'extended' or 'basic'");if("date"!==a&&"time"!==a&&"complete"!==a)throw new RangeError("representation must be 'date', 'time', or 'complete'");var s="",l="",c="extended"===o?"-":"",d="extended"===o?":":"";if("time"!==a){var p=(0,C.Z)(r.getDate(),2),x=(0,C.Z)(r.getMonth()+1,2),m=(0,C.Z)(r.getFullYear(),4);s="".concat(m).concat(c).concat(x).concat(c).concat(p)}if("date"!==a){var h=r.getTimezoneOffset();if(0!==h){var u=Math.abs(h),f=(0,C.Z)(Math.floor(u/60),2),g=(0,C.Z)(u%60,2);l="".concat(h<0?"+":"-").concat(f,":").concat(g)}else l="Z";var Z=""===s?"":"T",j=[(0,C.Z)(r.getHours(),2),(0,C.Z)(r.getMinutes(),2),(0,C.Z)(r.getSeconds(),2)].join(d);s="".concat(s).concat(Z).concat(j).concat(l)}return s}((0,k.default)(n,"dd.MM.yyyy",new Date))},on=function(n){var e=n.name,t=n.type,o=n.pattern,a=n.value,l=(0,r.useState)(a),m=(0,i.Z)(l,2),h=m[0],u=m[1],g=(0,r.useState)(!0),Z=(0,i.Z)(g,2),j=Z[0],w=Z[1],v=(0,d.v9)((function(n){return n.auth.token}));(0,r.useEffect)((function(){u(a)}),[a]);var y=function(){var n=(0,s.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="birthday"===e?(0,P.Z)({},e,rn(h)):(0,P.Z)({},e,h),n.next=3,(0,x.gS)(v,t);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,f.jsxs)(ne,{children:[(0,f.jsxs)(ee,{children:[e,":"]}),(0,f.jsx)(Xn,{type:t,value:h,onChange:function(n){return u(n.target.value)},pattern:o,name:e,disabled:j,autoFocus:!j}),j?(0,f.jsx)($n,{onClick:function(){w(!1)},children:(0,f.jsx)(p.Z,{id:"edit",s:"#54ADFF"})}):(0,f.jsx)($n,{onClick:y,children:(0,f.jsx)(p.Z,{id:"check",s:"#00C3AD"})})]})},an=t(168),sn=t(6444),ln=sn.ZP.div(z||(z=(0,an.Z)(["\n  width: 100%;\n  height: auto;\n  margin-left: auto;\n  background-color: ",";\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  margin-top: 18px;\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row-reverse;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 395px;\n    flex-direction: column;\n  }\n"])),(function(n){return n.theme.colors.backgroundModal})),cn=sn.ZP.div(D||(D=(0,an.Z)(["\n  @media screen and (min-width: 1280px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]))),dn=sn.ZP.p(E||(E=(0,an.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 27px;\n  letter-spacing: 0.04em;\n  color: ",";\n"])),(function(n){return n.theme.colors.titleColor})),pn=sn.ZP.div(S||(S=(0,an.Z)(["\n  width: 182px;\n  height: 182px;\n  background-color: #54adff;\n  border-radius: 40px;\n  margin-top: 20px;\n"]))),xn=sn.ZP.img(A||(A=(0,an.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),mn=sn.ZP.div(U||(U=(0,an.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    margin-left: 71px;\n    margin-right: 76px;\n    margin-bottom: 28px;\n  }\n"]))),hn=sn.ZP.button(Y||(Y=(0,an.Z)(["\n  display: flex;\n  gap: 8px;\n  border: none;\n  background-color: transparent;\n  margin-top: 15px;\n  align-items: center;\n"]))),un=sn.ZP.button(T||(T=(0,an.Z)(["\n  display: flex;\n  align-self: flex-start;\n  gap: 12px;\n  border: none;\n  background-color: transparent;\n  margin-top: 21px;\n  margin-bottom: 25px;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    position: absolute;\n    left: 0px;\n    bottom: -60px;\n  }\n"]))),fn=sn.ZP.p(_||(_=(0,an.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 22px;\n"]))),gn=sn.ZP.p(R||(R=(0,an.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.04em;\n  color: ",";\n"])),(function(n){return n.theme.colors.inputText})),Zn=sn.ZP.div(B||(B=(0,an.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 21px;\n  padding: 0 8px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    position: relative;\n    gap: 8px;\n    margin-bottom: 56px;\n  }\n"]))),jn=sn.ZP.div(N||(N=(0,an.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),wn=sn.ZP.input(O||(O=(0,an.Z)(["\n  width: 190px;\n  border: 1px solid ",";\n  border-radius: 20px;\n  padding: 4px 12px;\n  color: ",";\n"])),(function(n){return n.theme.colors.link}),(function(n){return n.theme.colors.titleColor})),vn=sn.ZP.button(G||(G=(0,an.Z)(["\n  position: absolute;\n  right: 28px;\n  background-color: transparent;\n  border: none;\n\n  @media screen and (min-width: 768px) {\n    right: 10px;\n  }\n"]))),yn=sn.ZP.label(H||(H=(0,an.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.titleColor})),bn=sn.ZP.div(I||(I=(0,an.Z)(["\n  width: 100%;\n  height: auto;\n  margin-left: auto;\n  background-color: ",";\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 18px;\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-left: 32px;\n  }\n"])),(function(n){return n.theme.colors.backgroundModal})),Pn=sn.ZP.div(L||(L=(0,an.Z)(["\n  @media screen and (min-width: 1280px) {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n  }\n"]))),kn=sn.ZP.img(q||(q=(0,an.Z)(["\n  align-self: center;\n  width: 240px;\n  height: 240px;\n  background: #54adff;\n  border-radius: 20px;\n  margin: 20px 0;\n\n  @media screen and (min-width: 768px) {\n    width: 128px;\n    height: 128px;\n    margin-right: 20px;\n    margin-bottom: 108px;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 31px;\n  }\n"]))),Fn=sn.ZP.div(J||(J=(0,an.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 46px;\n  margin-bottom: 31px;\n\n  @media screen and (min-width: 1280px) {\n    margin: 0;\n  }\n"]))),Cn=sn.ZP.p(K||(K=(0,an.Z)(["\n  text-align: center;\n"]))),Mn=sn.ZP.div(Q||(Q=(0,an.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  align-items: flex-start;\n  margin-bottom: 40px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 20px;\n    margin-right: 20px;\n    flex-grow: 1;\n    width: auto;\n  }\n"]))),zn=sn.ZP.p(V||(V=(0,an.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.57;\n  letter-spacing: 0.04em;\n\n  color: ",";\n"])),(function(n){return n.theme.colors.titleColor})),Dn=sn.ZP.span(W||(W=(0,an.Z)(["\n  font-weight: 700;\n"]))),En=sn.ZP.button(X||(X=(0,an.Z)(["\n  padding: 0;\n  position: absolute;\n  right: 0px;\n  border: none;\n  background-color: transparent;\n"]))),Sn=ln,An=cn,Un=Pn,Yn=bn,Tn=dn,_n=Fn,Rn=Mn,Bn=zn,Nn=Dn,On=En,Gn=pn,Hn=xn,In=mn,Ln=kn,qn=Cn,Jn=hn,Kn=un,Qn=fn,Vn=gn,Wn=Zn,Xn=wn,$n=vn,ne=jn,ee=yn,te=on,ie=b,re=Z,oe=t(9434),ae=sn.ZP.div($||($=(0,an.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 68px 16px 60px 16px;\n  @media screen and (min-width: 768px) {\n    padding: 60px 16px;\n    width: 608px;\n  }\n"]))),se=sn.ZP.h2(nn||(nn=(0,an.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 33px;\n  margin-bottom: 24px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 52px;\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 49px;\n    letter-spacing: 0.04em;\n  }\n"]))),le=sn.ZP.p(en||(en=(0,an.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.04em;\n  margin-bottom: 40px;\n  \n  @media screen and (min-width: 768px) {\n    margin-bottom: 60px;\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 33px;\n    letter-spacing: 0.04em;\n  }\n"]))),ce=t(9839),de=function(n){var e=n.close;return(0,f.jsxs)(ae,{children:[(0,f.jsx)(se,{children:"Congrats!"}),(0,f.jsx)(le,{children:"You're registration is success"}),(0,f.jsxs)(j.Z,{onClick:e,w:"256",h:"40",shape:"solid",g:"8",children:["Go to profile",(0,f.jsx)(ce.Z,{id:"paw",f:"white"})]})]})},pe=function(){var n=(0,o.TH)();console.log(n);var e=(0,r.useState)(!1),t=(0,i.Z)(e,2),a=t[0],s=t[1];return(0,r.useEffect)((function(){var e=n.state;if(e){console.log(e);var t=n.state.isModalOpen;s(t)}}),[n.state]),(0,f.jsxs)(oe.Z,{children:[(0,f.jsxs)(xe,{children:[(0,f.jsx)(re,{}),(0,f.jsx)(ie,{})]}),a&&(0,f.jsx)(h.Z,{close:function(){return s(!1)},children:(0,f.jsx)(de,{close:function(){return s(!1)}})})]})},xe=sn.ZP.div(tn||(tn=(0,an.Z)(["\n  margin-top: 40px;\n  margin-bottom: 137px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 121px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    display: flex;\n  }\n"]))),me=pe}}]);
//# sourceMappingURL=54.1b89827c.chunk.js.map