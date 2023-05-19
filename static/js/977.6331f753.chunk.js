"use strict";(self.webpackChunkpurrfect_match_frontend=self.webpackChunkpurrfect_match_frontend||[]).push([[977],{5442:function(n,e,t){t.d(e,{Es:function(){return Z},Fg:function(){return P},Rn:function(){return S},fv:function(){return j},j7:function(){return w},jj:function(){return z},xH:function(){return k},xv:function(){return v}});var r,o,i,s,u,a,c,d,l,f,h,m=t(168),p=t(1087),x=t(6444),g=t(5705),Z=(0,x.ZP)(g.l0)(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: ",";\n  border-radius: 37px;\n  color: ",";\n  padding: 40px 12px;\n  @media (min-width: 481px) {\n    padding: 60px 75px;\n  }\n"])),(function(n){return n.theme.colors.backgroundModal}),(function(n){return n.theme.colors.color})),b=(0,x.ZP)(g.gN)(o||(o=(0,m.Z)(["\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid;\n  border-radius: ",";\n  background-color: ",";\n  color: ",";\n\n  ::placeholder {\n    font-weight: ",";\n    font-size: ",";\n    color: ",";\n  }\n  :focus {\n    outline: none;\n  }\n"])),(function(n){return n.theme.radius.normal}),(function(n){return n.theme.colors.backgroundModal}),(function(n){return n.theme.colors.inputColor}),(function(n){return n.theme.fontWeiths.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.grey})),w=(0,x.ZP)(b)(i||(i=(0,m.Z)(["\n  border-color: ",";\n"])),(function(n){return n.error})),j=((0,x.ZP)(b)(s||(s=(0,m.Z)(["\n  border-color: ",";\n"])),(function(n){return n.error})),x.ZP.div(u||(u=(0,m.Z)(["\n  display: flex;\n  margin-top: 40px;\n  margin-bottom: 60px;\n  flex-direction: column;\n  gap: 32px;\n  width: 100%;\n"])))),v=x.ZP.p(a||(a=(0,m.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: 16px;\n  color: ",";\n  margin-top: 20px;\n"])),(function(n){return n.theme.fontWeiths.normal}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.inputText})),P=(0,x.ZP)(p.rU)(c||(c=(0,m.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.link})),z=x.ZP.p(d||(d=(0,m.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n  padding-left: 12px;\n  margin-top: 4px;\n"])),(function(n){return n.theme.fontWeiths.normal}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.red})),k=x.ZP.label(l||(l=(0,m.Z)(["\n  position: relative;\n"]))),S=x.ZP.div(f||(f=(0,m.Z)(["\n  position: absolute;\n  right: 17px;\n  top: 17px;\n  transform: translate(35%, -35%);\n"])));x.ZP.button(h||(h=(0,m.Z)(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n"])))},7942:function(n,e,t){t.d(e,{Z:function(){return w}});var r,o,i,s,u,a=t(9439),c=t(2791),d=t(5705),l=t(9787),f=t(168),h=t(6444),m=(0,h.ZP)(d.gN)(r||(r=(0,f.Z)(["\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid;\n  border-color: ",";\n  border-radius: ",";\n  background: ",";\n  color: ",";\n\n  ::placeholder {\n    font-weight: ",";\n    font-size: ",";\n    color: ",";\n  }\n  :focus {\n    outline: none;\n  }\n"])),(function(n){return n.error}),(function(n){return n.theme.radius.normal}),(function(n){return n.theme.colors.backgroundModal}),(function(n){return n.theme.colors.inputText}),(function(n){return n.theme.fontWeiths.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.inputText})),p=h.ZP.p(o||(o=(0,f.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n  padding-left: 12px;\n  margin-top: 4px;\n"])),(function(n){return n.theme.fontWeiths.normal}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.red})),x=h.ZP.label(i||(i=(0,f.Z)(["\n  position: relative;\n"]))),g=h.ZP.div(s||(s=(0,f.Z)(["\n  position: absolute;\n  right: 17px;\n  top: 17px;\n  transform: translate(35%, -35%);\n"]))),Z=h.ZP.button(u||(u=(0,f.Z)(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n"]))),b=t(184),w=function(n){var e=n.error,t=n.touched,r=n.name,o=n.placeholder,i=n.value,s=(0,c.useState)("password"),u=(0,a.Z)(s,2),f=u[0],h=u[1],w=(0,c.useState)(!1),j=(0,a.Z)(w,2),v=j[0],P=j[1];return(0,c.useEffect)((function(){var n;i?i.lenght<6?n="Password must be at least 6 characters":i.lenght>16?n="Password must be less than 16 characters":/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/.test(i)?n||P(!0):n="Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number":n="Required"}),[i]),(0,b.jsxs)(x,{children:[(0,b.jsx)(m,{type:f,name:r,placeholder:o,error:e&&t?"#f43f5e":v?"#00C3AD":"#54adff",autoComplete:"off"}),(0,b.jsx)(g,{children:!e&&v?(0,b.jsx)(l.Z,{id:"complite",s:"#00C3AD"}):(0,b.jsx)(Z,{type:"button",onClick:function(){h("password"!==f?"password":"text")},children:"password"===f?(0,b.jsx)(l.Z,{id:"eye-closed",s:e&&t?"#f43f5e":"#54adff"}):(0,b.jsx)(l.Z,{id:"eye-open",s:e&&t?"#f43f5e":"#54adff"})})}),(0,b.jsx)(d.Bc,{component:p,name:r})]})}},5182:function(n,e,t){t.d(e,{Y:function(){return u},r:function(){return a}});var r,o,i=t(168),s=t(6444),u=s.ZP.div(r||(r=(0,i.Z)(["\n  max-width: 608px;\n  width: 100%;\n  box-shadow: ",";\n  border-radius: 40px;\n  @media (min-width: 768px) {\n    width: 608px;\n  }\n"])),(function(n){return n.theme.shadows.default})),a=s.ZP.div(o||(o=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: 100%;\n  padding: 0 20px;\n  @media (min-width: 768px) {\n    padding: 0 80px;\n  }\n  @media (min-width: 1240px) {\n    padding: 0;\n  }\n"])))},1977:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r=t(5182),o=t(2791),i=t(5705),s=t(6727),u=t(1405),a=t(5442),c=t(7942),d=t(7377),l=t(5891),f=t(9787),h=t(5822),m=t(7689),p=t(3159),x=t(184),g=s.Ry().shape({email:s.Z_().email("Invalid email address").required("Required"),password:s.Z_().min(6,"Password must be at least 6 characters").max(16,"Password must be less than 16 characters").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,"Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number").required("Required")}),Z=function(){var n=(0,m.s0)(),e=(0,p.Z)().isLoggedIn,t=(0,u.I0)();return(0,o.useEffect)((function(){e&&n("/notices/sell")}),[e,n]),(0,x.jsx)(i.J9,{initialValues:{email:"",password:""},onSubmit:function(n,e){t((0,h.x4)({email:n.email,password:n.password})),e.resetForm()},validationSchema:g,children:function(n){var e=n.errors,t=n.touched,r=n.values;return(0,x.jsxs)(a.Es,{children:[(0,x.jsx)(l.Z,{as:"p",weight:"500",tabSize:"36",tabLine:"1.36",tabweight:"500",deskWeight:"500",deskSize:"36",deskLine:"1.36",color:"inherit",children:"Login"}),(0,x.jsxs)(a.fv,{children:[(0,x.jsxs)(a.xH,{children:[(0,x.jsx)(a.j7,{type:"text",name:"email",placeholder:"Email",error:e.email&&t.email?"#f43f5e":"#54adff"}),e.email&&t.email&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a.Rn,{children:(0,x.jsx)(f.Z,{id:"cross",s:"red"})}),(0,x.jsx)(i.Bc,{component:a.jj,name:"email"})]})]}),(0,x.jsx)(c.Z,{error:e.password,touched:t.password,name:"password",placeholder:"Password",value:r.password})]}),(0,x.jsx)(d.Z,{shape:"solid",w:"100%",h:"48",children:"Login"}),(0,x.jsxs)(a.xv,{children:["Don't have an account?",(0,x.jsx)(a.Fg,{to:"/register",children:" Register"})]})]})}})},b=function(){return(0,x.jsx)(r.r,{children:(0,x.jsx)(r.Y,{children:(0,x.jsx)(Z,{})})})}},5891:function(n,e,t){t.d(e,{Z:function(){return d}});var r,o=t(1413),i=t(4925),s=(t(2791),t(168)),u=t(6444).ZP.h1(r||(r=(0,s.Z)(["\n  font-family: ",";\n  text-align: ",";\n  font-weight: ","; /*700*/\n  font-size: ","; /*24*/\n  line-height: ",";\n  color: ",";\n  letter-spacing: ",";\n\n  @media "," {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n  }\n  @media "," {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.font||n.theme.fonts.main}),(function(n){return n.align||"center"}),(function(n){return n.weight||n.theme.fontWeiths.bold}),(function(n){return n.size||n.theme.fontSizes.l}),(function(n){return n.line||"1.375"}),(function(n){return n.color||n.theme.colors.black}),(function(n){return n.letterSpacing||0}),(function(n){return n.theme.media.tab}),(function(n){return n.tabWeight||n.theme.fontWeiths.bold}),(function(n){return n.tabSize||n.theme.fontSizes.title}),(function(n){return n.tabLine||"1.375"}),(function(n){return n.theme.media.desk}),(function(n){return n.deskWeight||n.theme.fontWeiths.bold}),(function(n){return n.deskSize||n.theme.fontSizes.title}),(function(n){return n.deskLine||"1.375"})),a=t(184),c=["children"],d=function(n){var e=n.children,t=(0,i.Z)(n,c);return(0,a.jsx)(u,(0,o.Z)((0,o.Z)({},t),{},{children:e}))}}}]);
//# sourceMappingURL=977.6331f753.chunk.js.map