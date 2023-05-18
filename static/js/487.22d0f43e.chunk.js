"use strict";(self.webpackChunkpurrfect_match_frontend=self.webpackChunkpurrfect_match_frontend||[]).push([[487],{6487:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,a,c,u,s,f=t(5861),d=t(9439),l=t(4687),h=t.n(l),p=t(2791),x=t(7872),m=t(9161),g=t(3916),v=t(3558).Z,Z=t(1413),b=t(4925),w=t(1951),y=t(168),j=t(6444),k=j.ZP.li(r||(r=(0,y.Z)(["\n  position: relative;\n  max-width: 336px;\n  border-radius: 20px;\n  box-shadow: ",";\n\n  scale: 1;\n  transition: scale 250ms ease;\n\n  &:hover {\n    scale: 1.03;\n    transition: scale 250ms ease;\n  }\n\n  @media "," {\n    max-width: calc((100% - 32px) / 2);\n    height: 556px;\n  }\n\n  @media "," {\n    max-width: calc((100% - 64px) / 3);\n    height: 534px;\n  }\n\n  &::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -20px;\n    left: 0;\n    right: 0;\n    height: 8px;\n    background: ",";\n    border-radius: 8px;\n\n    @media "," {\n      top: -22px;\n    }\n  }\n"])),(function(n){return n.theme.shadows.default}),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk}),(function(n){return n.theme.colors.gradient}),(function(n){return n.theme.media.tab})),P=j.ZP.img(i||(i=(0,y.Z)(["\n  object-fit: cover;\n  width: 100%;\n  height: 252px;\n  border-radius: 20px;\n"]))),F=j.ZP.h2(o||(o=(0,y.Z)(["\n  padding: 16px 12px;\n  line-height: 1.375;\n  letter-spacing: -0.01em;\n\n  @media "," {\n    height: 131px;\n    overflow: auto;\n  }\n"])),(function(n){return n.theme.media.tab})),S=j.ZP.p(a||(a=(0,y.Z)(["\n  padding: 0 12px;\n\n  @media "," {\n    height: 127px;\n    overflow: auto;\n  }\n\n  @media "," {\n    height: 105px;\n  }\n"])),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),z=j.ZP.div(c||(c=(0,y.Z)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 12px;\n  line-height: 1.375;\n\n  p {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.grey})),C=j.ZP.a(u||(u=(0,y.Z)(["\n  color: ",";\n  outline: none;\n  transition: border-bottom 250ms ease;\n\n  &:hover,\n  &:focus {\n    border-bottom: 1px solid currentColor;\n  }\n"])),(function(n){return n.theme.colors.link})),A=t(184),_=function(n){var e=n.imgUrl,t=n.title,r=n.text,i=n.date,o=n.url,a=function(n){return(0,w.default)(Date.parse(n),"dd/MM/yyyy")}(i);return(0,A.jsxs)(k,{children:[(0,A.jsx)(P,{src:e,alt:"Article theme"}),(0,A.jsx)(F,{children:t}),(0,A.jsx)(S,{children:r}),(0,A.jsxs)(z,{children:[(0,A.jsx)("p",{children:a}),(0,A.jsx)(C,{href:o,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})},D=j.ZP.ul(s||(s=(0,y.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 44px;\n  margin-top: 44px;\n  column-gap: 32px;\n\n  @media "," {\n    row-gap: 46px;\n    margin-top: 62px;\n  }\n\n  @media "," {\n    margin-top: 82px;\n  }\n"])),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),N=["id"],W=function(n){var e=n.items.map((function(n){var e=n.id,t=(0,b.Z)(n,N);return(0,A.jsx)(_,(0,Z.Z)({},t),e)}));return(0,A.jsx)(D,{children:e})};W.defaultProps={items:[]};var E=W,L=t(2966),I=t(14),B=function(){var n=(0,f.Z)(h().mark((function n(e){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.ZP.get("/api/news",{params:e});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),M=t(1087),T=function(){var n=(0,M.lr)(),e=(0,d.Z)(n,2),t=e[0],r=e[1],i=t.get("search"),o=(0,p.useState)([]),a=(0,d.Z)(o,2),c=a[0],u=a[1],s=(0,p.useState)((function(){var n=t.get("page");return n?Number(n):1})),l=(0,d.Z)(s,2),Z=l[0],b=l[1],w=(0,p.useState)(!1),y=(0,d.Z)(w,2),j=y[0],k=y[1],P=(0,p.useState)(null),F=(0,d.Z)(P,2),S=F[0],z=F[1];(0,p.useEffect)((function(){k(!0);var n={page:Z};i&&(n.search=i);var e=function(){var n=(0,f.Z)(h().mark((function n(e){var t,r;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B(e);case 3:t=n.sent,r=t.data,u(r.results),z(r.totalPages),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:return n.prev=12,k(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(e){return n.apply(this,arguments)}}();e(n)}),[Z,i]);var C=function(){var n=(0,f.Z)(h().mark((function n(e){var t,i,o;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={page:1,search:e.search},n.prev=1,n.next=4,B(t);case 4:i=n.sent,o=i.data,u(o.results),z(o.totalPages),b(1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:return n.prev=14,k(!1),n.finish(14);case 17:r(t);case 18:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(e){return n.apply(this,arguments)}}();return(0,A.jsxs)(m.Z,{children:[(0,A.jsx)(g.Z,{children:"News"}),(0,A.jsx)(v,{onFormSubmit:C,setItems:u}),j&&(0,A.jsx)(x.Z,{}),Boolean(c.length)?(0,A.jsx)(E,{items:c}):(0,A.jsx)("div",{children:"There is no result"}),S>1&&(0,A.jsx)(L.Z,{currentPage:Z,setCurrentPage:b,totalPages:S,setFetching:k})]})},G=T},9161:function(n,e,t){t.d(e,{Z:function(){return c}});t(2791);var r,i=t(168),o=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 20px;\n\n  @media "," {\n    max-width: 480px;\n  }\n\n  @media "," {\n    max-width: 768px;\n    padding: 0 32px;\n  }\n\n  @media "," {\n    max-width: 1280px;\n    padding: 0 16px;\n  }\n"])),(function(n){return n.theme.media.phone}),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),a=t(184),c=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},9839:function(n,e,t){var r=t(9787);e.Z=r.Z},3558:function(n,e,t){t.d(e,{Z:function(){return Z}});var r,i,o,a,c=t(9439),u=(t(2791),t(168)),s=t(5705),f=t(6444),d=(0,f.ZP)(s.l0)(r||(r=(0,u.Z)(["\n  max-width: 608px;\n  height: 44px;\n  position: relative;\n  margin: 24px auto 0;\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n  }\n"]))),l=(0,f.ZP)(s.gN)(i||(i=(0,u.Z)(["\n  padding: 14px 71px 14px 20px;\n  border: none;\n  width: 100%;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.214;\n  letter-spacing: 0.04em;\n  color: #888888;\n  background: #ffffff;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  margin: 0 auto;\n  display: block;\n  outline: none;\n\n  @media screen and (min-width: 768px) {\n    padding: 10px 71px 10px 20px;\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1.2;\n    max-width: 608px;\n  }\n"]))),h=f.ZP.div(o||(o=(0,u.Z)(["\n  display: flex;\n  position: absolute;\n  width: 78px;\n  transform: translate(-100%, -50%);\n  top: 50%;\n  left: 100%;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]))),p=f.ZP.button(a||(a=(0,u.Z)(["\n  background-color: transparent;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n\n  :last-child {\n    margin-right: 13px;\n    margin-left: 10px;\n  }\n"]))),x=t(9839),m=t(6727),g=t(1087),v=t(184),Z=function(n){var e=n.onFormSubmit,t=(0,g.lr)(),r=(0,c.Z)(t,1)[0].get("title"),i=m.Ry({search:m.Z_().trim("Type something").required("Type something")}),o=function(n){var e=n.name;return(0,v.jsx)(s.Bc,{name:e,render:function(n){return(0,v.jsx)("p",{style:{color:"tomato",marginLeft:"20px"},children:n})}})};return(0,v.jsx)(s.J9,{initialValues:{search:r||""},onSubmit:e,validationSchema:i,children:function(n){return(0,v.jsxs)(d,{children:[(0,v.jsx)(l,{name:"search",type:"text",placeholder:"Search",onBlur:function(){return n.setErrors(null)}}),(0,v.jsx)(o,{name:"search"}),(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{type:"submit",children:(0,v.jsx)(x.Z,{id:"search",f:"#54ADFF",s:"none"})}),n.values.search&&(0,v.jsx)(p,{type:"button",onClick:function(){n.setValues({search:""})},children:(0,v.jsx)(x.Z,{id:"cross",s:"#FFC107",style:{strokeWidth:"1.5px"}})})]})]})}})}},5891:function(n,e,t){t.d(e,{Z:function(){return f}});var r,i=t(1413),o=t(4925),a=(t(2791),t(168)),c=t(6444).ZP.h1(r||(r=(0,a.Z)(["\n  font-family: ",";\n  text-align: ",";\n  font-weight: ","; /*700*/\n  font-size: ","; /*24*/\n  line-height: ",";\n  color: ",";\n  letter-spacing: ",";\n\n  @media "," {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n  }\n  @media "," {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.font||n.theme.fonts.main}),(function(n){return n.align||"center"}),(function(n){return n.weight||n.theme.fontWeiths.bold}),(function(n){return n.size||n.theme.fontSizes.l}),(function(n){return n.line||"1.375"}),(function(n){return n.color||n.theme.colors.black}),(function(n){return n.letterSpacing||0}),(function(n){return n.theme.media.tab}),(function(n){return n.tabWeight||n.theme.fontWeiths.bold}),(function(n){return n.tabSize||n.theme.fontSizes.title}),(function(n){return n.tabLine||"1.375"}),(function(n){return n.theme.media.desk}),(function(n){return n.deskWeight||n.theme.fontWeiths.bold}),(function(n){return n.deskSize||n.theme.fontSizes.title}),(function(n){return n.deskLine||"1.375"})),u=t(184),s=["children"],f=function(n){var e=n.children,t=(0,o.Z)(n,s);return(0,u.jsx)(c,(0,i.Z)((0,i.Z)({},t),{},{children:e}))}},3916:function(n,e,t){var r=t(5891);e.Z=r.Z},2966:function(n,e,t){t.d(e,{Z:function(){return g}});var r,i,o,a=t(9439),c=(t(2791),t(1087)),u=t(168),s=t(6444),f=s.ZP.button(r||(r=(0,u.Z)(["\n  display: flex;\n  color: #cce4fb;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 35px;\n  height: 35px;\n  border: 1px solid #cce4fb;\n  border-radius: 50%;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 15px;\n\n  &.current_page {\n    color: #fef9f9;\n    background-color: #54adff;\n    border-color: #54adff;\n  }\n"]))),d=s.ZP.div(i||(i=(0,u.Z)(["\n  padding: 8px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #fef9f9;\n\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 45px;\n"]))),l=s.ZP.div(o||(o=(0,u.Z)(["\n  margin: 60px auto 105px;\n  width: 100%;\n  max-width: 320px;\n"]))),h=t(9839),p=t(3293),x=t(7689),m=t(184),g=function(n){var e=n.currentPage,t=n.setCurrentPage,r=n.totalPages,i=n.setFetching,o=(0,p.G)(["(max-width: 480px)"],[!0],!1),u=(0,c.lr)(),s=(0,a.Z)(u,2),g=s[0],v=s[1],Z=g.get("title"),b=g.get("search"),w=(0,x.UO)().categoryName,y=r<=5||e<3?Array.from({length:r>5?5:r},(function(n,e){return 1+e})):Array.from({length:5},(function(n,t){return e+2>r?r-4+t:e+t-2})),j=function(n){var r,o=n.target,a=(r=o.id,Number(r)),c={page:a};["sell","lost-found","for-free"].includes(w)&&(c.category=w),"favorite"===w&&(c.favorite=!0),"own"===w&&(c.own=!0),b&&(c.search=b),Z&&(c.title=Z),v(c),e!==a&&(t(a),i(!0))};return!o&&(0,m.jsx)(l,{children:(0,m.jsxs)(d,{children:[(0,m.jsx)(f,{type:"button",id:"prev",onClick:function(){if(1!==e){i(!0);var n={page:e-1};["sell","lost-found","for-free"].includes(w)&&(n.category=w),"favorite"===w&&(n.favorite=!0),"own"===w&&(n.own=!0),b&&(n.search=b),Z&&(n.title=Z),v(n),t((function(n){return n-1}))}},children:(0,m.jsx)(h.Z,{id:"arrow-left",s:"#54ADFF",f:"#54ADFF"})}),y.map((function(n){return(0,m.jsx)(f,{type:"button",className:n===e&&"current_page",id:n,onClick:j,children:n},n)})),(0,m.jsx)(f,{id:"next",onClick:function(){if(e!==r){i(!0);var n={page:e+1};["sell","lost-found","for-free"].includes(w)&&(n.category=w),"favorite"===w&&(n.favorite=!0),"own"===w&&(n.own=!0),b&&(n.search=b),Z&&(n.title=Z),v(n),t((function(n){return n+1}))}},type:"button",children:(0,m.jsx)(h.Z,{id:"arrow-left",s:"#54ADFF",f:"#54ADFF",style:{transform:"rotate(180deg)"}})})]})})}},3293:function(n,e,t){t.d(e,{G:function(){return o}});var r=t(9439),i=t(2791),o=function(n,e,t){var o=(0,i.useState)(t),a=(0,r.Z)(o,2),c=a[0],u=a[1];return(0,i.useEffect)((function(){var r=n.map((function(n){return window.matchMedia(n)})),i=function(){var n=r.findIndex((function(n){return n.matches}));u(-1===n?t:e[n])};i();var o=function(){return i()};return r.forEach((function(n){return n.addListener(o)})),function(){return r.forEach((function(n){return n.removeListener(o)}))}}),[t,n,e]),c}}}]);
//# sourceMappingURL=487.22d0f43e.chunk.js.map