"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[2282],{1431:(L,p,a)=>{a.r(p),a.d(p,{ProvidersPage:()=>de,default:()=>Le});var n=a(27279),i=a(1296),s=a(796),l=a(34041),c=a(49969),e=a(92712),t=a(7609),h=a(66016),v=a(9465),b=a(78565),R=a(17992),E=a(84428),m=a(2667),o=a(56545),d=a(9663),r=a(51943),P=a.n(r),M=a(61020),Z=a(40464),K=a(81565),V=a(37386),k=a(23851),ge=a(85898),pe=a(90529),fe=a(49899),ve=a(3785),ne=a(51413),be=a(37810),xe=a(93314),$e=a(71563),ye=a(70627),u=a.n(ye),Ee=a(94707),Pe=a(19098);const X=({description:$,disabled:U,intlLabel:z,error:C,name:T,onChange:W,placeholder:x,providerToEditName:D,type:S,value:B})=>{const{formatMessage:O}=(0,M.Z)(),I=T==="noName"?`${window.strapi.backendURL}/api/connect/${D}/callback`:B,w=O({id:z.id,defaultMessage:z.defaultMessage},{provider:D,...z.values}),j=$?O({id:$.id,defaultMessage:$.defaultMessage},{provider:D,...$.values}):"";if(S==="bool")return n.createElement(Ee.s,{"aria-label":T,checked:B,disabled:U,hint:j,label:w,name:T,offLabel:O({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:O({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:F=>{W({target:{name:T,value:F.target.checked}})}});const q=x?O({id:x.id,defaultMessage:x.defaultMessage},{...x.values}):"",_=C?O({id:C,defaultMessage:C}):"";return n.createElement(Pe.o,{"aria-label":T,disabled:U,error:_,label:w,name:T,onChange:W,placeholder:q,type:S,value:I})};X.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},X.propTypes={description:u().shape({id:u().string.isRequired,defaultMessage:u().string.isRequired,values:u().object}),disabled:u().bool,error:u().string,intlLabel:u().shape({id:u().string.isRequired,defaultMessage:u().string.isRequired,values:u().object}).isRequired,name:u().string.isRequired,onChange:u().func.isRequired,placeholder:u().shape({id:u().string.isRequired,defaultMessage:u().string.isRequired,values:u().object}),providerToEditName:u().string.isRequired,type:u().string.isRequired,value:u().oneOfType([u().bool,u().string])};const Me=X,Q=({headerBreadcrumbs:$,initialData:U,isSubmiting:z,layout:C,isOpen:T,onSubmit:W,onToggle:x,providerToEditName:D})=>{const{formatMessage:S}=(0,M.Z)();return T?n.createElement(K.P,{onClose:x,labelledBy:"title"},n.createElement(V.x,null,n.createElement(be.O,{label:$.join(", ")},$.map((B,O,I)=>n.createElement(xe.$,{isCurrent:O===I.length-1,key:B},B)))),n.createElement($e.J9,{onSubmit:B=>W(B),initialValues:U,validationSchema:C.schema,validateOnChange:!1},({errors:B,handleChange:O,values:I})=>n.createElement(o.l0,null,n.createElement(k.f,null,n.createElement(ge.k,{direction:"column",alignItems:"stretch",gap:1},n.createElement(pe.r,{gap:5},C.form.map(w=>w.map(j=>n.createElement(fe.P,{key:j.name,col:j.size,xs:12},n.createElement(Me,{...j,error:B[j.name],onChange:O,value:I[j.name],providerToEditName:D}))))))),n.createElement(ve.m,{startActions:n.createElement(ne.z,{variant:"tertiary",onClick:x,type:"button"},S({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:n.createElement(ne.z,{type:"submit",loading:z},S({id:"global.save",defaultMessage:"Save"}))})))):null};Q.defaultProps={initialData:null,providerToEditName:null},Q.propTypes={headerBreadcrumbs:u().arrayOf(u().string).isRequired,initialData:u().object,layout:u().shape({form:u().arrayOf(u().array),schema:u().object}).isRequired,isOpen:u().bool.isRequired,isSubmiting:u().bool.isRequired,onSubmit:u().func.isRequired,onToggle:u().func.isRequired,providerToEditName:u().string};const Oe=Q;var ae=a(84419),y=a(99688),g=a(47853);const se={id:(0,y.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},re={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},G={id:(0,y.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,y.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ie={id:(0,y.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},oe={id:(0,y.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},A={id:(0,y.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},le={id:(0,y.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6}]],schema:g.Ry().shape({enabled:g.Xg().required(o.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:A,size:12,validations:{required:!0}}],[{intlLabel:le,name:"secret",type:"text",placeholder:A,size:12,validations:{required:!0}}],[{intlLabel:se,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:g.Ry().shape({enabled:g.Xg().required(o.I0.required),key:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()}),secret:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()}),callback:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:A,size:12,validations:{required:!0}}],[{intlLabel:le,name:"secret",type:"text",placeholder:A,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,y.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:A,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,y.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,y.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:se,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:g.Ry().shape({enabled:g.Xg().required(o.I0.required),key:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()}),secret:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()}),subdomain:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()}),callback:g.Z_().when("enabled",{is:!0,then:g.Z_().required(o.I0.required),otherwise:g.Z_()})})}},de=()=>{const{formatMessage:$,locale:U}=(0,M.Z)(),z=(0,Z.useQueryClient)(),{trackUsage:C}=(0,o.rS)(),[T,W]=n.useState(!1),[x,D]=n.useState(null),S=(0,o.lm)(),{lockApp:B,unlockApp:O}=(0,o.o1)(),{get:I,put:w}=(0,o.kY)(),{formatAPIError:j}=(0,o.So)(),q=(0,o.Xe)(U,{sensitivity:"base"});(0,o.go)();const{isLoading:_,allowedActions:{canUpdate:F}}=(0,o.ss)({update:ae._.updateProviders}),{isLoading:Re,data:ee}=(0,Z.useQuery)(["users-permissions","get-providers"],async()=>{const{data:f}=await I("/users-permissions/providers");return f},{initialData:{}}),ue=(0,Z.useMutation)(f=>w("/users-permissions/providers",f),{async onSuccess(){await z.invalidateQueries(["users-permissions","providers"]),S({type:"success",message:{id:(0,y.OB)("notification.success.submit")}}),C("didEditAuthenticationProvider"),te(),O()},onError(f){S({type:"warning",message:j(f)}),O()},refetchActive:!1}),N=Object.entries(ee).reduce((f,[H,je])=>{const{icon:he,enabled:Ze,subdomain:Se}=je;return f.push({name:H,icon:he==="envelope"?["fas","envelope"]:["fab",he],enabled:Ze,subdomain:Se}),f},[]).sort((f,H)=>q.compare(f.name,H.name)),Be=Re||_,ce=n.useMemo(()=>x?!!N.find(H=>H.name===x)?.subdomain:!1,[N,x]),Te=n.useMemo(()=>x==="email"?Y.email:ce?Y.providersWithSubdomain:Y.providers,[x,ce]),te=()=>{W(f=>!f)},me=f=>{F&&(D(f.name),te())},Ce=async f=>{B(),C("willEditAuthenticationProvider"),ue.mutate({providers:{...ee,[x]:f}})};return n.createElement(i.A,null,n.createElement(o.SL,{name:$({id:(0,y.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),n.createElement(s.o,null,n.createElement(l.T,{title:$({id:(0,y.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Be?n.createElement(o.dO,null):n.createElement(c.D,null,n.createElement(e.i,{colCount:3,rowCount:N.length+1},n.createElement(t.h,null,n.createElement(h.Tr,null,n.createElement(v.Th,null,n.createElement(b.Z,{variant:"sigma",textColor:"neutral600"},$({id:"global.name",defaultMessage:"Name"}))),n.createElement(v.Th,null,n.createElement(b.Z,{variant:"sigma",textColor:"neutral600"},$({id:(0,y.OB)("Providers.status"),defaultMessage:"Status"}))),n.createElement(v.Th,null,n.createElement(b.Z,{variant:"sigma"},n.createElement(R.T,null,$({id:"global.settings",defaultMessage:"Settings"})))))),n.createElement(E.p,null,N.map(f=>n.createElement(h.Tr,{key:f.name,...(0,o.X7)({fn:()=>me(f),condition:F})},n.createElement(v.Td,{width:"45%"},n.createElement(b.Z,{fontWeight:"semiBold",textColor:"neutral800"},f.name)),n.createElement(v.Td,{width:"65%"},n.createElement(b.Z,{textColor:f.enabled?"success600":"danger600","data-testid":`enable-${f.name}`},f.enabled?$({id:"global.enabled",defaultMessage:"Enabled"}):$({id:"global.disabled",defaultMessage:"Disabled"}))),n.createElement(v.Td,{...o.UW},F&&n.createElement(m.h,{onClick:()=>me(f),noBorder:!0,icon:n.createElement(d.Z,null),label:"Edit"})))))))),n.createElement(Oe,{initialData:ee[x],isOpen:T,isSubmiting:ue.isLoading,layout:Te,headerBreadcrumbs:[$({id:(0,y.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),P()(x)],onToggle:te,onSubmit:Ce,providerToEditName:x}))},Le=()=>n.createElement(o.O4,{permissions:ae._.readProviders},n.createElement(de,null))},99688:(L,p,a)=>{a.d(p,{YX:()=>l,OB:()=>c.Z});var n=a(10124),i=a.n(n);const l=e=>Object.keys(e).reduce((t,h)=>{const v=e[h].controllers,b=Object.keys(v).reduce((R,E)=>(i()(v[E])||(R[E]=v[E]),R),{});return i()(b)||(t[h]={controllers:b}),t},{});var c=a(58655)},49969:(L,p,a)=>{a.d(p,{D:()=>s});var n=a(74081),i=a(52185);const s=({children:l})=>(0,n.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:l})},34041:(L,p,a)=>{a.d(p,{T:()=>b});var n=a(74081),i=a(27279),s=a(72450);const l=m=>{const o=(0,i.useRef)(null),[d,r]=(0,i.useState)(!0),P=([M])=>{r(M.isIntersecting)};return(0,i.useEffect)(()=>{const M=o.current,Z=new IntersectionObserver(P,m);return M&&Z.observe(o.current),()=>{M&&Z.disconnect()}},[o,m]),[o,d]};var c=a(66705);const e=(m,o)=>{const d=(0,c.W)(o);(0,i.useLayoutEffect)(()=>{const r=new ResizeObserver(d);return Array.isArray(m)?m.forEach(P=>{P.current&&r.observe(P.current)}):m.current&&r.observe(m.current),()=>{r.disconnect()}},[m,d])};var t=a(52185),h=a(85898),v=a(78565);const b=m=>{const o=(0,i.useRef)(null),[d,r]=(0,i.useState)(null),[P,M]=l({root:null,rootMargin:"0px",threshold:0});return e(P,()=>{P.current&&r(P.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{o.current&&r(o.current.getBoundingClientRect())},[o]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{height:d?.height},ref:P,children:M&&(0,n.jsx)(E,{ref:o,...m})}),!M&&(0,n.jsx)(E,{...m,sticky:!0,width:d?.width})]})};b.displayName="HeaderLayout";const R=(0,s.ZP)(t.x)`
  width: ${({width:m})=>m?`${m/16}rem`:void 0};
  z-index: ${({theme:m})=>m.zIndices[1]};
`,E=i.forwardRef(({navigationAction:m,primaryAction:o,secondaryAction:d,subtitle:r,title:P,sticky:M,width:Z,...K},V)=>{const k=typeof r=="string";return M?(0,n.jsx)(R,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:Z,"data-strapi-header-sticky":!0,children:(0,n.jsxs)(h.k,{justifyContent:"space-between",children:[(0,n.jsxs)(h.k,{children:[m&&(0,n.jsx)(t.x,{paddingRight:3,children:m}),(0,n.jsxs)(t.x,{children:[(0,n.jsx)(v.Z,{variant:"beta",as:"h1",...K,children:P}),k?(0,n.jsx)(v.Z,{variant:"pi",textColor:"neutral600",children:r}):r]}),d?(0,n.jsx)(t.x,{paddingLeft:4,children:d}):null]}),(0,n.jsx)(h.k,{children:o?(0,n.jsx)(t.x,{paddingLeft:2,children:o}):void 0})]})}):(0,n.jsxs)(t.x,{ref:V,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:m?6:8,background:"neutral100","data-strapi-header":!0,children:[m?(0,n.jsx)(t.x,{paddingBottom:2,children:m}):null,(0,n.jsxs)(h.k,{justifyContent:"space-between",children:[(0,n.jsxs)(h.k,{minWidth:0,children:[(0,n.jsx)(v.Z,{as:"h1",variant:"alpha",...K,children:P}),d?(0,n.jsx)(t.x,{paddingLeft:4,children:d}):null]}),o]}),k?(0,n.jsx)(v.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:r}):r]})})},1296:(L,p,a)=>{a.d(p,{A:()=>e});var n=a(74081),i=a(72450),s=a(52185);const l=(0,i.ZP)(s.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:t})=>t?"auto 1fr":"1fr"};
`,c=(0,i.ZP)(s.x)`
  overflow-x: hidden;
`,e=({sideNav:t,children:h})=>(0,n.jsxs)(l,{hasSideNav:Boolean(t),children:[t,(0,n.jsx)(c,{paddingBottom:10,children:h})]})},796:(L,p,a)=>{a.d(p,{o:()=>c});var n=a(74081),i=a(72450),s=a(52185);const l=(0,i.ZP)(s.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,c=({labelledBy:e="main-content-title",...t})=>(0,n.jsx)(l,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...t})},68263:(L,p,a)=>{a.d(p,{x:()=>c});var n=a(72450),i=a(39878),s=a(4032);const l={color:!0,cursor:!0,height:!0,width:!0},c=n.ZP.div.withConfig({shouldForwardProp:(e,t)=>!l[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>(0,s.$)(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>(0,s.$)(e.colors,t,t)};
  color: ${({theme:e,color:t})=>(0,s.$)(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>(0,i.Z)("padding",t,e)}
  ${({theme:e,paddingTop:t})=>(0,i.Z)("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>(0,i.Z)("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>(0,i.Z)("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>(0,i.Z)("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>(0,i.Z)("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>(0,i.Z)("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>(0,i.Z)("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>(0,i.Z)("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:h})=>t?e.borderRadius:h};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>(0,s.$)(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:h,borderWidth:v})=>{if(t&&!h&&typeof v>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>(0,s.$)(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>(0,s.$)(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>(0,s.$)(t.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:t})=>(0,s.$)(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},33110:(L,p,a)=>{a.d(p,{k:()=>c});var n=a(72450),i=a(39878),s=a(68263);const l={direction:!0},c=(0,n.ZP)(s.x).withConfig({shouldForwardProp:(e,t)=>!l[e]&&t(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:t})=>t?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>(0,i.Z)("gap",e,t)};
  justify-content: ${({justifyContent:e})=>e};
`},19915:(L,p,a)=>{a.d(p,{Z:()=>o});var n=a(72450);const i="alpha",s="beta",l="delta",c="epsilon",e="omega",t="pi",h="sigma",v=[i,s,l,c,e,t,h],b=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,R=({variant:d=e,theme:r})=>{switch(d){case i:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[5]};
        line-height: ${r.lineHeights[2]};
      `;case s:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[4]};
        line-height: ${r.lineHeights[1]};
      `;case l:return`
        font-weight: ${r.fontWeights.semiBold};
        font-size: ${r.fontSizes[3]};
        line-height: ${r.lineHeights[2]};
      `;case c:return`
        font-size: ${r.fontSizes[3]};
        line-height: ${r.lineHeights[6]};
      `;case e:return`
        font-size: ${r.fontSizes[2]};
        line-height: ${r.lineHeights[4]};
      `;case t:return`
        font-size: ${r.fontSizes[1]};
        line-height: ${r.lineHeights[3]};
      `;case h:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[0]};
        line-height: ${r.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${r.fontSizes[2]};
      `}};var E=a(4032);const m={fontSize:!0,fontWeight:!0},o=n.ZP.span.withConfig({shouldForwardProp:(d,r)=>!m[d]&&r(d)})`
  ${R}
  ${b}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:d,fontWeight:r})=>(0,E.$)(d.fontWeights,r,void 0)};
  font-size: ${({theme:d,fontSize:r})=>(0,E.$)(d.fontSizes,r,void 0)};
  line-height: ${({theme:d,lineHeight:r})=>(0,E.$)(d.lineHeights,r,r)};
  color: ${({theme:d,textColor:r})=>d.colors[r||"neutral800"]};
  text-align: ${({textAlign:d})=>d};
  text-decoration: ${({textDecoration:d})=>d};
  text-transform: ${({textTransform:d})=>d};
`},39878:(L,p,a)=>{a.d(p,{Z:()=>n});const n=(i,s,l)=>{if(!s)return;let c=Array.isArray(s)?s:[];if(!Array.isArray(s)&&typeof s=="object"&&(c=[s?.desktop,s?.tablet,s?.mobile]),c.length>0)return c.reduce((t,h,v)=>{if(h)switch(v){case 0:return`${t}${i}: ${l.spaces[h]};`;case 1:return`${t}${l.mediaQueries.tablet}{${i}: ${l.spaces[h]};}`;case 2:return`${t}${l.mediaQueries.mobile}{${i}: ${l.spaces[h]};}`;default:return t}return t},"");const e=l.spaces[s]||s;return`${i}: ${e};`}},4032:(L,p,a)=>{a.d(p,{$:()=>s});function n(l,c){return typeof l=="string"?!1:c in l}function i(l){return l&&typeof l=="object"&&!Array.isArray(l)}function s(l,c,e){return c&&n(l,c)?l[c]:e}},37810:(L,p,a)=>{a.d(p,{O:()=>v});var n=a(74081),i=a(27279),s=a(72450),l=a(68263),c=a(19915);const e=()=>(0,n.jsx)(l.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,n.jsx)(c.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var t=a(33110);const h=(0,s.ZP)(t.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:b})=>`calc(-1*${b.spaces[2]})`};
  }
`,v=({label:b,children:R,...E})=>{const m=i.Children.toArray(R);return(0,n.jsx)(l.x,{"aria-label":b,...E,children:(0,n.jsx)(h,{as:"ol",children:i.Children.map(m,(o,d)=>{const r=m.length>1&&d+1<m.length;return(0,n.jsxs)(t.k,{inline:!0,as:"li",children:[o,r&&(0,n.jsx)(e,{})]})})})})};v.displayName="Breadcrumbs"},93314:(L,p,a)=>{a.d(p,{$:()=>l});var n=a(74081),i=a(68263),s=a(19915);const l=({children:c,isCurrent:e=!1,...t})=>(0,n.jsx)(i.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,n.jsx)(s.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...t,children:c})});l.displayName="Crumb"}}]);
