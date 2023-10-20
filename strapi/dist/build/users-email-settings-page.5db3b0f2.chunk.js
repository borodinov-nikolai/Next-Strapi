"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[8418],{38977:(M,u,n)=>{n.r(u),n.d(u,{default:()=>le});var t=n(27279),l=n(86042),i=n(796),r=n(34041),c=n(49969),e=n(56545),a=n(61020),h=n(40464),g=n(84419),d=n(99688),B=n(81565),E=n(37386),m=n(23851),p=n(90529),o=n(49899),s=n(87549),$=n(3785),b=n(51413),L=n(37810),Z=n(93314),D=n(71563),z=n(70627),v=n.n(z),C=n(47853);const Y=C.Ry().shape({options:C.Ry().shape({from:C.Ry().shape({name:C.Z_().required(e.I0.required),email:C.Z_().email(e.I0.email).required(e.I0.required)}).required(),response_email:C.Z_().email(e.I0.email),object:C.Z_().required(e.I0.required),message:C.Z_().required(e.I0.required)}).required(e.I0.required)}),U=({template:f,onToggle:O,onSubmit:x})=>{const{formatMessage:T}=(0,a.Z)();return t.createElement(B.P,{onClose:O,labelledBy:`${T({id:(0,d.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${T({id:(0,d.OB)(f.display),defaultMessage:f.display})}`},t.createElement(E.x,null,t.createElement(L.O,{label:`${T({id:(0,d.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${T({id:(0,d.OB)(f.display),defaultMessage:f.display})}`},t.createElement(Z.$,null,T({id:(0,d.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),t.createElement(Z.$,{isCurrent:!0},T({id:(0,d.OB)(f.display),defaultMessage:f.display})))),t.createElement(D.J9,{onSubmit:x,initialValues:f,validateOnChange:!1,validationSchema:Y,enableReinitialize:!0},({errors:P,values:R,handleChange:S,isSubmitting:A})=>t.createElement(e.l0,null,t.createElement(m.f,null,t.createElement(p.r,{gap:5},t.createElement(o.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,d.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:S,value:R.options.from.name,error:P?.options?.from?.name,type:"text"})),t.createElement(o.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,d.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:S,value:R.options.from.email,error:P?.options?.from?.email,type:"text"})),t.createElement(o.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,d.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:S,value:R.options.response_email,error:P?.options?.response_email,type:"text"})),t.createElement(o.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,d.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:S,value:R.options.object,error:P?.options?.object,type:"text"})),t.createElement(o.P,{col:12,s:12},t.createElement(s.g,{label:T({id:(0,d.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:S,value:R.options.message,error:P?.options?.message&&T({id:P.options.message,defaultMessage:P.options.message})})))),t.createElement($.m,{startActions:t.createElement(b.z,{onClick:O,variant:"tertiary"},"Cancel"),endActions:t.createElement(b.z,{loading:A,type:"submit"},"Finish")}))))};U.propTypes={template:v().shape({display:v().string,icon:v().string,options:v().shape({from:v().shape({name:v().string,email:v().string}),message:v().string,object:v().string,response_email:v().string})}).isRequired,onSubmit:v().func.isRequired,onToggle:v().func.isRequired};const k=U;var q=n(92712),_=n(7609),I=n(66016),j=n(9465),F=n(17992),W=n(78565),ee=n(84428),w=n(57074),K=n(2667),te=n(69),N=n(9663),ae=n(82943);const Q=({canUpdate:f,onEditClick:O})=>{const{formatMessage:x}=(0,a.Z)();return t.createElement(q.i,{colCount:3,rowCount:3},t.createElement(_.h,null,t.createElement(I.Tr,null,t.createElement(j.Th,{width:"1%"},t.createElement(F.T,null,x({id:(0,d.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),t.createElement(j.Th,null,t.createElement(W.Z,{variant:"sigma",textColor:"neutral600"},x({id:(0,d.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),t.createElement(j.Th,{width:"1%"},t.createElement(F.T,null,x({id:(0,d.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),t.createElement(ee.p,null,t.createElement(I.Tr,{...(0,e.X7)({fn:()=>O("reset_password")})},t.createElement(j.Td,null,t.createElement(w.J,null,t.createElement(te.Z,{"aria-label":x({id:"global.reset-password",defaultMessage:"Reset password"})}))),t.createElement(j.Td,null,t.createElement(W.Z,null,x({id:"global.reset-password",defaultMessage:"Reset password"}))),t.createElement(j.Td,{...e.UW},t.createElement(K.h,{onClick:()=>O("reset_password"),label:x({id:(0,d.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:f&&t.createElement(N.Z,null)}))),t.createElement(I.Tr,{...(0,e.X7)({fn:()=>O("email_confirmation")})},t.createElement(j.Td,null,t.createElement(w.J,null,t.createElement(ae.Z,{"aria-label":x({id:(0,d.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),t.createElement(j.Td,null,t.createElement(W.Z,null,x({id:(0,d.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),t.createElement(j.Td,{...e.UW},t.createElement(K.h,{onClick:()=>O("email_confirmation"),label:x({id:(0,d.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:f&&t.createElement(N.Z,null)})))))};Q.propTypes={canUpdate:v().bool.isRequired,onEditClick:v().func.isRequired};const ne=Q,se=()=>t.createElement(e.O4,{permissions:g._.readEmailTemplates},t.createElement(ie,null)),ie=()=>{const{formatMessage:f}=(0,a.Z)(),{trackUsage:O}=(0,e.rS)(),{notifyStatus:x}=(0,l.G)(),T=(0,e.lm)(),{lockApp:P,unlockApp:R}=(0,e.o1)(),S=(0,h.useQueryClient)(),{get:A,put:oe}=(0,e.kY)(),{formatAPIError:V}=(0,e.So)();(0,e.go)();const[re,de]=t.useState(!1),[X,me]=t.useState(null),{isLoading:ce,allowedActions:{canUpdate:he}}=(0,e.ss)({update:g._.updateEmailTemplates}),{isLoading:ue,data:G}=(0,h.useQuery)(["users-permissions","email-templates"],async()=>{const{data:y}=await A("/users-permissions/email-templates");return y},{onSuccess(){x(f({id:(0,d.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(y){T({type:"warning",message:V(y)})}}),pe=ce||ue,H=()=>{de(y=>!y)},ge=y=>{me(y),H()},J=(0,h.useMutation)(y=>oe("/users-permissions/email-templates",{"email-templates":y}),{async onSuccess(){await S.invalidateQueries(["users-permissions","email-templates"]),T({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),O("didEditEmailTemplates"),R(),H()},onError(y){T({type:"warning",message:V(y)}),R()},refetchActive:!0}),fe=y=>{P(),O("willEditEmailTemplates");const Ee={...G,[X]:y};J.mutate(Ee)};return pe?t.createElement(i.o,{"aria-busy":"true"},t.createElement(e.SL,{name:f({id:(0,d.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(r.T,{title:f({id:(0,d.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(c.D,null,t.createElement(e.dO,null))):t.createElement(i.o,{"aria-busy":J.isLoading},t.createElement(e.SL,{name:f({id:(0,d.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(r.T,{title:f({id:(0,d.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(c.D,null,t.createElement(ne,{onEditClick:ge,canUpdate:he}),re&&t.createElement(k,{template:G[X],onToggle:H,onSubmit:fe})))},le=se},99688:(M,u,n)=>{n.d(u,{YX:()=>r,OB:()=>c.Z});var t=n(10124),l=n.n(t);const r=e=>Object.keys(e).reduce((a,h)=>{const g=e[h].controllers,d=Object.keys(g).reduce((B,E)=>(l()(g[E])||(B[E]=g[E]),B),{});return l()(d)||(a[h]={controllers:d}),a},{});var c=n(58655)},49969:(M,u,n)=>{n.d(u,{D:()=>i});var t=n(74081),l=n(52185);const i=({children:r})=>(0,t.jsx)(l.x,{paddingLeft:10,paddingRight:10,children:r})},34041:(M,u,n)=>{n.d(u,{T:()=>d});var t=n(74081),l=n(27279),i=n(72450);const r=m=>{const p=(0,l.useRef)(null),[o,s]=(0,l.useState)(!0),$=([b])=>{s(b.isIntersecting)};return(0,l.useEffect)(()=>{const b=p.current,L=new IntersectionObserver($,m);return b&&L.observe(p.current),()=>{b&&L.disconnect()}},[p,m]),[p,o]};var c=n(66705);const e=(m,p)=>{const o=(0,c.W)(p);(0,l.useLayoutEffect)(()=>{const s=new ResizeObserver(o);return Array.isArray(m)?m.forEach($=>{$.current&&s.observe($.current)}):m.current&&s.observe(m.current),()=>{s.disconnect()}},[m,o])};var a=n(52185),h=n(85898),g=n(78565);const d=m=>{const p=(0,l.useRef)(null),[o,s]=(0,l.useState)(null),[$,b]=r({root:null,rootMargin:"0px",threshold:0});return e($,()=>{$.current&&s($.current.getBoundingClientRect())}),(0,l.useEffect)(()=>{p.current&&s(p.current.getBoundingClientRect())},[p]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:o?.height},ref:$,children:b&&(0,t.jsx)(E,{ref:p,...m})}),!b&&(0,t.jsx)(E,{...m,sticky:!0,width:o?.width})]})};d.displayName="HeaderLayout";const B=(0,i.ZP)(a.x)`
  width: ${({width:m})=>m?`${m/16}rem`:void 0};
  z-index: ${({theme:m})=>m.zIndices[1]};
`,E=l.forwardRef(({navigationAction:m,primaryAction:p,secondaryAction:o,subtitle:s,title:$,sticky:b,width:L,...Z},D)=>{const z=typeof s=="string";return b?(0,t.jsx)(B,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:L,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(h.k,{justifyContent:"space-between",children:[(0,t.jsxs)(h.k,{children:[m&&(0,t.jsx)(a.x,{paddingRight:3,children:m}),(0,t.jsxs)(a.x,{children:[(0,t.jsx)(g.Z,{variant:"beta",as:"h1",...Z,children:$}),z?(0,t.jsx)(g.Z,{variant:"pi",textColor:"neutral600",children:s}):s]}),o?(0,t.jsx)(a.x,{paddingLeft:4,children:o}):null]}),(0,t.jsx)(h.k,{children:p?(0,t.jsx)(a.x,{paddingLeft:2,children:p}):void 0})]})}):(0,t.jsxs)(a.x,{ref:D,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:m?6:8,background:"neutral100","data-strapi-header":!0,children:[m?(0,t.jsx)(a.x,{paddingBottom:2,children:m}):null,(0,t.jsxs)(h.k,{justifyContent:"space-between",children:[(0,t.jsxs)(h.k,{minWidth:0,children:[(0,t.jsx)(g.Z,{as:"h1",variant:"alpha",...Z,children:$}),o?(0,t.jsx)(a.x,{paddingLeft:4,children:o}):null]}),p]}),z?(0,t.jsx)(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:s}):s]})})},796:(M,u,n)=>{n.d(u,{o:()=>c});var t=n(74081),l=n(72450),i=n(52185);const r=(0,l.ZP)(i.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,c=({labelledBy:e="main-content-title",...a})=>(0,t.jsx)(r,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...a})},68263:(M,u,n)=>{n.d(u,{x:()=>c});var t=n(72450),l=n(39878),i=n(4032);const r={color:!0,cursor:!0,height:!0,width:!0},c=t.ZP.div.withConfig({shouldForwardProp:(e,a)=>!r[e]&&a(e)})`
  // Font
  font-size: ${({fontSize:e,theme:a})=>(0,i.$)(a.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:a})=>(0,i.$)(e.colors,a,a)};
  color: ${({theme:e,color:a})=>(0,i.$)(e.colors,a,void 0)};

  // Spaces
  ${({theme:e,padding:a})=>(0,l.Z)("padding",a,e)}
  ${({theme:e,paddingTop:a})=>(0,l.Z)("padding-top",a,e)}
  ${({theme:e,paddingRight:a})=>(0,l.Z)("padding-right",a,e)}
  ${({theme:e,paddingBottom:a})=>(0,l.Z)("padding-bottom",a,e)}
  ${({theme:e,paddingLeft:a})=>(0,l.Z)("padding-left",a,e)}
  ${({theme:e,marginLeft:a})=>(0,l.Z)("margin-left",a,e)}
  ${({theme:e,marginRight:a})=>(0,l.Z)("margin-right",a,e)}
  ${({theme:e,marginTop:a})=>(0,l.Z)("margin-top",a,e)}
  ${({theme:e,marginBottom:a})=>(0,l.Z)("margin-bottom",a,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:a})=>a?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:a})=>a?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:a,borderRadius:h})=>a?e.borderRadius:h};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:a})=>(0,i.$)(a.colors,e,void 0)};
  border: ${({theme:e,borderColor:a,borderStyle:h,borderWidth:g})=>{if(a&&!h&&typeof g>"u")return`1px solid ${e.colors[a]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:a})=>(0,i.$)(e.shadows,a,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:a})=>e?e(a):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  right: ${({right:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  top: ${({top:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  bottom: ${({bottom:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  min-width: ${({minWidth:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  height: ${({height:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  min-height: ${({minHeight:e,theme:a})=>(0,i.$)(a.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:a})=>(0,i.$)(e.lineHeights,a,a)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},33110:(M,u,n)=>{n.d(u,{k:()=>c});var t=n(72450),l=n(39878),i=n(68263);const r={direction:!0},c=(0,t.ZP)(i.x).withConfig({shouldForwardProp:(e,a)=>!r[e]&&a(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:a})=>a?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:a})=>(0,l.Z)("gap",e,a)};
  justify-content: ${({justifyContent:e})=>e};
`},19915:(M,u,n)=>{n.d(u,{Z:()=>p});var t=n(72450);const l="alpha",i="beta",r="delta",c="epsilon",e="omega",a="pi",h="sigma",g=[l,i,r,c,e,a,h],d=({ellipsis:o=!1})=>o&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,B=({variant:o=e,theme:s})=>{switch(o){case l:return`
        font-weight: ${s.fontWeights.bold};
        font-size: ${s.fontSizes[5]};
        line-height: ${s.lineHeights[2]};
      `;case i:return`
        font-weight: ${s.fontWeights.bold};
        font-size: ${s.fontSizes[4]};
        line-height: ${s.lineHeights[1]};
      `;case r:return`
        font-weight: ${s.fontWeights.semiBold};
        font-size: ${s.fontSizes[3]};
        line-height: ${s.lineHeights[2]};
      `;case c:return`
        font-size: ${s.fontSizes[3]};
        line-height: ${s.lineHeights[6]};
      `;case e:return`
        font-size: ${s.fontSizes[2]};
        line-height: ${s.lineHeights[4]};
      `;case a:return`
        font-size: ${s.fontSizes[1]};
        line-height: ${s.lineHeights[3]};
      `;case h:return`
        font-weight: ${s.fontWeights.bold};
        font-size: ${s.fontSizes[0]};
        line-height: ${s.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${s.fontSizes[2]};
      `}};var E=n(4032);const m={fontSize:!0,fontWeight:!0},p=t.ZP.span.withConfig({shouldForwardProp:(o,s)=>!m[o]&&s(o)})`
  ${B}
  ${d}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:o,fontWeight:s})=>(0,E.$)(o.fontWeights,s,void 0)};
  font-size: ${({theme:o,fontSize:s})=>(0,E.$)(o.fontSizes,s,void 0)};
  line-height: ${({theme:o,lineHeight:s})=>(0,E.$)(o.lineHeights,s,s)};
  color: ${({theme:o,textColor:s})=>o.colors[s||"neutral800"]};
  text-align: ${({textAlign:o})=>o};
  text-decoration: ${({textDecoration:o})=>o};
  text-transform: ${({textTransform:o})=>o};
`},39878:(M,u,n)=>{n.d(u,{Z:()=>t});const t=(l,i,r)=>{if(!i)return;let c=Array.isArray(i)?i:[];if(!Array.isArray(i)&&typeof i=="object"&&(c=[i?.desktop,i?.tablet,i?.mobile]),c.length>0)return c.reduce((a,h,g)=>{if(h)switch(g){case 0:return`${a}${l}: ${r.spaces[h]};`;case 1:return`${a}${r.mediaQueries.tablet}{${l}: ${r.spaces[h]};}`;case 2:return`${a}${r.mediaQueries.mobile}{${l}: ${r.spaces[h]};}`;default:return a}return a},"");const e=r.spaces[i]||i;return`${l}: ${e};`}},4032:(M,u,n)=>{n.d(u,{$:()=>i});function t(r,c){return typeof r=="string"?!1:c in r}function l(r){return r&&typeof r=="object"&&!Array.isArray(r)}function i(r,c,e){return c&&t(r,c)?r[c]:e}},37810:(M,u,n)=>{n.d(u,{O:()=>g});var t=n(74081),l=n(27279),i=n(72450),r=n(68263),c=n(19915);const e=()=>(0,t.jsx)(r.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(c.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var a=n(33110);const h=(0,i.ZP)(a.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:d})=>`calc(-1*${d.spaces[2]})`};
  }
`,g=({label:d,children:B,...E})=>{const m=l.Children.toArray(B);return(0,t.jsx)(r.x,{"aria-label":d,...E,children:(0,t.jsx)(h,{as:"ol",children:l.Children.map(m,(p,o)=>{const s=m.length>1&&o+1<m.length;return(0,t.jsxs)(a.k,{inline:!0,as:"li",children:[p,s&&(0,t.jsx)(e,{})]})})})})};g.displayName="Breadcrumbs"},93314:(M,u,n)=>{n.d(u,{$:()=>r});var t=n(74081),l=n(68263),i=n(19915);const r=({children:c,isCurrent:e=!1,...a})=>(0,t.jsx)(l.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(i.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...a,children:c})});r.displayName="Crumb"}}]);
