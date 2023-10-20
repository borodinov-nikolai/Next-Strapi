(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[2544],{4644:(W,$,n)=>{"use strict";n.d($,{V:()=>x});var e=n(56545),f=n(40464);const x=(h={},M={})=>{const{id:v,...P}=h,{get:C}=(0,e.kY)();if(!v&&(M?.enabled===void 0||M?.enabled))throw new Error('"id" is a required argument');const{data:A,error:N,isError:a,isLoading:k,refetch:u}=(0,f.useQuery)(["roles",v,"permissions",P],async()=>{const{data:{data:S}}=await C(`/admin/roles/${v}/permissions`,{params:P});return S},M);return{permissions:A,error:N,isError:a,isLoading:k,refetch:u}}},51754:(W,$,n)=>{"use strict";n.d($,{F:()=>M});var e=n(27279),f=n(56545),x=n(61020),h=n(40464);const M=(v={},P={})=>{const{id:C="",...A}=v,{get:N}=(0,f.kY)(),{locale:a}=(0,x.Z)(),k=(0,f.Xe)(a,{sensitivity:"base"}),{data:u,error:S,isError:F,isLoading:g,refetch:R}=(0,h.useQuery)(["roles",C,A],async()=>{const{data:w}=await N(`/admin/roles/${C??""}`,{params:A});return w},P);return{roles:e.useMemo(()=>{let w=[];return C&&u?w=[u.data]:Array.isArray(u?.data)&&(w=u.data),[...w].sort((oe,ee)=>k.compare(oe.name,ee.name))},[u,C,k]),error:S,isError:F,isLoading:g,refetch:R}}},25545:(W,$,n)=>{"use strict";n.r($),n.d($,{CreatePage:()=>Pe,default:()=>Se});var e=n(27279),f=n(796),x=n(34041),h=n(85898),M=n(51413),v=n(49969),P=n(52185),C=n(78565),A=n(90529),N=n(49899),a=n(19098),k=n(87549),u=n(56545),S=n(98447),F=n(86492),g=n(71563),R=n(10124),G=n.n(R),w=n(61020),oe=n(49402),ee=n(51447),b=n(72450),pe=n(4644),Q=n(36364),H=n(442),te=n(90065),Ce=n(47853);const xe=Ce.Ry().shape({name:Ce.Z_().required(u.I0.required),description:Ce.Z_().required(u.I0.required)}),ie=b.ZP.div`
  border: 1px solid ${({theme:z})=>z.colors.primary200};
  background: ${({theme:z})=>z.colors.primary100};
  padding: ${({theme:z})=>`${z.spaces[2]} ${z.spaces[4]}`};
  color: ${({theme:z})=>z.colors.primary600};
  border-radius: ${({theme:z})=>z.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Pe=()=>{const z=(0,ee.$B)("/settings/roles/duplicate/:id"),Y=(0,u.lm)(),{lockApp:re,unlockApp:X}=(0,u.o1)(),{formatMessage:j}=(0,w.Z)(),[J,le]=(0,e.useState)(!1),{replace:ge}=(0,ee.k6)(),q=(0,e.useRef)(),{trackUsage:ue}=(0,u.rS)(),{post:Be,put:ke}=(0,u.kY)(),{params:Ee}=z??{},{isLoading:Ze,data:Le}=(0,te.d)(Ee?.id,{cacheTime:0}),{permissions:ye,isLoading:Me}=(0,pe.V)({id:Ee?.id},{cacheTime:0,enabled:!!Ee?.id}),Fe=Re=>{re(),le(!0),Ee?.id?ue("willDuplicateRole"):ue("willCreateNewRole"),Promise.resolve(Be("/admin/roles",Re)).then(async({data:ne})=>{const{permissionsToSend:ce}=q.current.getPermissions();return Ee?.id?ue("didDuplicateRole"):ue("didCreateNewRole"),ne.data.id&&!G()(ce)&&await ke(`/admin/roles/${ne.data.id}/permissions`,{permissions:ce}),ne}).then(ne=>{le(!1),Y({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),ge(`/settings/roles/${ne.data.id}`)}).catch(ne=>{console.error(ne),le(!1),Y({type:"warning",message:{id:"notification.error"}})}).finally(()=>{X()})},Ue=`${j({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,F.Z)(new Date,"PPP")}`;return e.createElement(f.o,null,e.createElement(u.SL,{name:"Roles"}),e.createElement(g.J9,{initialValues:{name:"",description:Ue},onSubmit:Fe,validationSchema:xe,validateOnChange:!1},({handleSubmit:Re,values:ne,errors:ce,handleReset:de,handleChange:me})=>e.createElement(u.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(x.T,{primaryAction:e.createElement(h.k,{gap:2},e.createElement(M.z,{variant:"secondary",onClick:()=>{de(),q.current.resetForm()},size:"L"},j({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(M.z,{onClick:Re,loading:J,size:"L"},j({id:"global.save",defaultMessage:"Save"}))),title:j({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:j({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(u.rU,{startIcon:e.createElement(S.Z,null),to:"/settings/roles"},j({id:"global.back",defaultMessage:"Back"}))}),e.createElement(v.D,null,e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(P.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(h.k,{justifyContent:"space-between"},e.createElement(P.x,null,e.createElement(P.x,null,e.createElement(C.Z,{fontWeight:"bold"},j({id:"global.details",defaultMessage:"Details"}))),e.createElement(P.x,null,e.createElement(C.Z,{variant:"pi",textColor:"neutral600"},j({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(ie,null,j({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(A.r,{gap:4},e.createElement(N.P,{col:6},e.createElement(a.o,{name:"name",error:ce.name&&j({id:ce.name}),label:j({id:"global.name",defaultMessage:"Name"}),onChange:me,required:!0,value:ne.name})),e.createElement(N.P,{col:6},e.createElement(k.g,{label:j({id:"global.description",defaultMessage:"Description"}),id:"description",error:ce.description&&j({id:ce.description}),onChange:me},ne.description))))),!Ze&&!Me?e.createElement(P.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(H.Z,{isFormDisabled:!1,ref:q,permissions:ye,layout:Le})):e.createElement(P.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(u.dO,null))))))))};function Se(){const z=(0,oe.v9)(Q._);return e.createElement(u.O4,{permissions:z.settings.roles.create},e.createElement(Pe,null))}},442:(W,$,n)=>{"use strict";n.d($,{Z:()=>ts});var e=n(27279),f=n(12826),x=n(87161),h=n(33832),M=n(56545),v=n(10131),P=n.n(v),C=n(10124),A=n.n(C),N=n(70627),a=n.n(N),k=n(61020),u=n(52185),S=n(8243),F=n.n(S),g=n(72450),R=n(85898),G=n(83667),w=n(46078),oe=n(34268),ee=n(98934),b=n.n(ee),pe=n(74919),Q=n.n(pe),H=n(20838),te=n(51413),Ce=n(18602);const be=g.ZP.div`
  position: relative;

  ${({hasConditions:t,disabled:s,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${s?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,xe=({onClick:t,className:s,hasConditions:r,variant:o})=>{const{formatMessage:i}=(0,k.Z)();return e.createElement(be,{hasConditions:r,className:s},e.createElement(te.z,{variant:o,startIcon:e.createElement(Ce.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};xe.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},xe.propTypes={onClick:a().func.isRequired,className:a().string,hasConditions:a().bool,variant:a().string};const ie=(0,g.ZP)(xe)``;var Pe=n(81565),Se=n(37386),z=n(23851),Y=n(78565),re=n(3785),X=n(37810),j=n(93314),J=n(61815),le=n(63799),ge=n.n(le),q=n(51943),ue=n.n(q),Be=n(14291);const ke=t=>Object.values(t).map(s=>Object.entries(s).filter(([,r])=>r).map(([r])=>r)).flat(),Ee=t=>t.reduce((s,[r,o])=>(s.push({label:ue()(r),children:o.map(i=>({label:i.displayName,value:i.id}))}),s),[]),Ze=(t,s)=>t.map(([,r])=>r).flat().reduce((r,o)=>({[o.id]:s.includes(o.id),...r}),{}),Le=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:s,isGrey:r,label:o,name:i,onChange:l,value:c})=>{const{formatMessage:d}=(0,k.Z)(),p=m=>{l(i,Ze(t,m))};return e.createElement(R.k,{as:"li",background:r?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(R.k,{paddingLeft:6,style:{width:180}},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(Y.Z,{variant:"sigma",title:o,textColor:"primary600",ellipsis:!0},d({id:`Settings.roles.form.permissions.${o.toLowerCase()}`,defaultMessage:o})),e.createElement(Y.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(u.x,{style:{maxWidth:430,width:"100%"}},e.createElement(Be.Q,{id:i,customizeContent:m=>`${m.length} currently selected`,onChange:p,value:ke(c),options:Ee(t),disabled:s})))};Le.propTypes={arrayOfOptionsGroupedByCategory:a().array.isRequired,isFormDisabled:a().bool.isRequired,isGrey:a().bool.isRequired,label:a().string.isRequired,name:a().string.isRequired,value:a().object.isRequired,onChange:a().func.isRequired};const ye=Le,Me=(t,s)=>t.reduce((r,o)=>(r[o.id]=b()(s,o.id,!1),r),{}),Fe=(t,s)=>t.reduce((r,o)=>{const[i,l]=o,c=Me(l,s);return r[i]=c,r},{}),Re=(t,s,r)=>t.reduce((o,i)=>{const l=b()(s,[...i.pathToConditionsObject,"conditions"],{}),c=Fe(r,l);return o[i.pathToConditionsObject.join("..")]=c,o},{}),ne=({actions:t,headerBreadCrumbs:s,isFormDisabled:r,onClosed:o,onToggle:i})=>{const{formatMessage:l}=(0,k.Z)(),{availableConditions:c,modifiedData:d,onChangeConditions:p}=(0,H.$_)(),m=(0,e.useMemo)(()=>Object.entries(ge()(c,"category")),[c]),y=t.filter(({isDisplayed:E,hasSomeActionsSelected:B,hasAllActionsSelected:L})=>E&&(B||L)),T=(0,e.useMemo)(()=>Re(y,d,m),[y,d,m]),[D,V]=(0,e.useState)(T),I=(E,B)=>{V((0,J.ZP)(L=>{L[E]||(L[E]={}),L[E].default||(L[E].default={}),L[E].default=B}))},O=()=>{const E=Object.entries(D).reduce((B,L)=>{const[Z,se]=L,U=Object.values(se).reduce((_,K)=>({..._,...K}),{});return B[Z]=U,B},{});p(E),i()};return e.createElement(Pe.P,{labelledBy:"condition-modal-breadcrumbs",onClose:o},e.createElement(Se.x,null,e.createElement(X.O,{id:"condition-modal-breadcrumbs",label:s.join(", ")},s.map((E,B,L)=>e.createElement(j.$,{isCurrent:B===L.length-1,key:E},ue()(l({id:E,defaultMessage:E})))))),e.createElement(z.f,null,y.length===0&&e.createElement(Y.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,y.map(({actionId:E,label:B,pathToConditionsObject:L},Z)=>{const se=L.join("..");return e.createElement(ye,{key:E,arrayOfOptionsGroupedByCategory:m,label:B,isFormDisabled:r,isGrey:Z%2===0,name:se,onChange:I,value:b()(D,se,{})})}))),e.createElement(re.m,{startActions:e.createElement(te.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(te.z,{onClick:O},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};ne.propTypes={actions:a().arrayOf(a().shape({actionId:a().string.isRequired,checkboxName:a().string,hasSomeActionsSelected:a().bool.isRequired,hasAllActionsSelected:a().bool,isDisplayed:a().bool.isRequired,label:a().string})).isRequired,headerBreadCrumbs:a().arrayOf(a().string).isRequired,isFormDisabled:a().bool.isRequired,onClosed:a().func.isRequired,onToggle:a().func.isRequired};const ce=ne,de=`${120/16}rem`,me=`${200/16}rem`,Ae=`${53/16}rem`,Ne=g.ZP.div`
  width: ${de};
`,rt=(0,g.ZP)(R.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ge=({children:t,isCollapsable:s,isActive:r,isFormDisabled:o,label:i,onChange:l,onClick:c,checkboxName:d,someChecked:p,value:m})=>{const{formatMessage:y}=(0,k.Z)();return e.createElement(R.k,{alignItems:"center",paddingLeft:6,style:{width:me,flexShrink:0}},e.createElement(u.x,{paddingRight:2},e.createElement(G.C,{name:d,"aria-label":y({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:o,onValueChange:T=>l({target:{name:d,value:T}}),indeterminate:p,value:m})),e.createElement(rt,{title:i,alignItems:"center",isCollapsable:s,...s&&{onClick:c,"aria-expanded":r,onKeyDown:({key:T})=>(T==="Enter"||T===" ")&&c(),tabIndex:0,role:"button"}},e.createElement(Y.Z,{fontWeight:r?"bold":"",textColor:r?"primary600":"neutral800",ellipsis:!0},ue()(i)),t))};Ge.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ge.propTypes={checkboxName:a().string,children:a().node,label:a().string.isRequired,isCollapsable:a().bool,isFormDisabled:a().bool.isRequired,onChange:a().func,onClick:a().func.isRequired,someChecked:a().bool,value:a().bool,isActive:a().bool.isRequired};const at=(0,e.memo)(Ge);var Nt=n(39738),Wt=n.n(Nt),Vt=n(3243),Te=n.n(Vt);const it=t=>Te()(t)?Wt()(Object.values(t).map(s=>Te()(s)?it(s):s)):[],je=it,ze=t=>t?Object.keys(t).reduce((s,r)=>(r!=="conditions"&&(s[r]=t[r]),s),{}):null,Oe=t=>{const s=ze(t),r=je(s);if(!r.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const o=r.every(l=>l),i=r.some(l=>l)&&!o;return{hasAllActionsSelected:o,hasSomeActionsSelected:i}};var Kt=n(3494);const We=(0,g.ZP)(Kt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ve=t=>`
  ${Y.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${We} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ut=(t,s,r)=>t.map(({actionId:o,isDisplayed:i,applyToProperties:l,label:c})=>{if(!i)return{actionId:o,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...r.split(".."),o],p=A()(l)?[...d,"properties","enabled"]:d,m=p.join(".."),y=b()(s,[...d,"conditions"],null),T=je(y).some(O=>O);if(A()(l)){const O=b()(s,p,!1);return{actionId:o,checkboxName:m,hasAllActionsSelected:O,hasConditions:T,hasSomeActionsSelected:O,isDisplayed:i,isParentCheckbox:!1,label:c,pathToConditionsObject:d}}const D=b()(s,p,null),{hasAllActionsSelected:V,hasSomeActionsSelected:I}=Oe(D);return{actionId:o,checkboxName:m,hasAllActionsSelected:V,hasConditions:T,hasSomeActionsSelected:I,isDisplayed:i,isParentCheckbox:!0,label:c,pathToConditionsObject:d}}),Ye=(t,s)=>`
  ${lt} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${s?"2px 2px 0 0":"2px"};
  }
  ${dt} {
    display: flex;
  }
  ${ie} {
    display: block;
  }
  &:hover {
   ${Ve(t)}
  }

  &:focus-within {
    ${({theme:r,isActive:o})=>Ye(r,o)}
  }
  
`,lt=g.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Ae};
  background-color: ${({isGrey:t,theme:s})=>t?s.colors.neutral100:s.colors.neutral0};
  border: 1px solid transparent;
`,Ht=g.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${ie} {
    display: none;
  }
  ${({isActive:t,theme:s})=>t&&Ye(s,t)}
  &:hover {
    ${({theme:t,isActive:s})=>Ye(t,s)}
  }
`,ct=(0,g.ZP)(R.k)`
  width: ${de};
  position: relative;
`,dt=(0,g.ZP)(u.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ut=g.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Gt=(0,g.ZP)(u.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,mt=({availableActions:t,isActive:s,isGrey:r,isFormDisabled:o,label:i,onClickToggle:l,pathToData:c})=>{const[d,p]=(0,e.useState)(!1),{formatMessage:m}=(0,k.Z)(),{modifiedData:y,onChangeParentCheckbox:T,onChangeSimpleCheckbox:D}=(0,H.$_)(),V=()=>{p(U=>!U)},I=()=>{p(!1)},O=b()(y,c.split(".."),{}),E=(0,e.useMemo)(()=>Object.keys(O).reduce((U,_)=>(U[_]=Q()(O[_],"conditions"),U),{}),[O]),{hasAllActionsSelected:B,hasSomeActionsSelected:L}=Oe(E),Z=(0,e.useMemo)(()=>Ut(t,y,c),[t,y,c]),se=Z.some(({hasConditions:U})=>U);return e.createElement(Ht,{isActive:s},e.createElement(lt,{isGrey:r},e.createElement(at,{isCollapsable:!0,isFormDisabled:o,label:i,checkboxName:c,onChange:T,onClick:l,someChecked:L,value:B,isActive:s},e.createElement(dt,{paddingLeft:2},s?e.createElement(w.Z,null):e.createElement(oe.Z,null))),e.createElement(R.k,{style:{flex:1}},Z.map(({actionId:U,hasConditions:_,hasAllActionsSelected:K,hasSomeActionsSelected:he,isDisplayed:Ie,isParentCheckbox:ae,checkboxName:ve,label:Ke})=>Ie?ae?e.createElement(ct,{key:U,justifyContent:"center",alignItems:"center"},_&&e.createElement(ut,null),e.createElement(G.C,{disabled:o,name:ve,"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${Ke} ${i}`}),onValueChange:$e=>{T({target:{name:ve,value:$e}})},indeterminate:he,value:K})):e.createElement(ct,{key:U,justifyContent:"center",alignItems:"center"},_&&e.createElement(ut,null),e.createElement(G.C,{disabled:o,indeterminate:_,name:ve,onValueChange:$e=>{D({target:{name:ve,value:$e}})},value:K})):e.createElement(Ne,{key:U}))),d&&e.createElement(ce,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:Z,isFormDisabled:o,onClosed:I,onToggle:V})),e.createElement(Gt,null,e.createElement(ie,{onClick:V,hasConditions:se})))};mt.propTypes={availableActions:a().array.isRequired,isActive:a().bool.isRequired,isGrey:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggle:a().func.isRequired,pathToData:a().string.isRequired};const zt=mt,Yt=g.ZP.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,pt=()=>e.createElement(Yt,null,"*"),Xt=(t,s)=>t.map(r=>{const o=Array.isArray(r.subjects)&&r.subjects.indexOf(s)!==-1;return{...r,isDisplayed:o}}),wt=(0,g.ZP)(u.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Qt=g.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:s})=>t.colors[s]};
  }
`,Xe=t=>e.createElement(wt,null,e.createElement(Qt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Xe.defaultProps={fill:"primary200"},Xe.propTypes={fill:a().string};const Jt=(0,e.memo)(Xe),gt=(0,g.ZP)(R.k)`
  width: ${de};
  position: relative;
`,qt=(0,g.ZP)(R.k)`
  height: ${Ae};
`,_t=(0,g.ZP)(u.x)`
  padding-left: ${31/16}rem;
`,en=(0,g.ZP)(u.x)`
  border-left: ${({isVisible:t,theme:s})=>t?`4px solid ${s.colors.primary200}`:"4px solid transparent"};
`,tn=(0,g.ZP)(R.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:s})=>t&&`
      ${We} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${Ve(s)}
      }
  `}
  ${({isActive:t,theme:s})=>t&&Ve(s)};
`,nn=g.ZP.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,we=({childrenForm:t,isFormDisabled:s,recursiveLevel:r,pathToDataFromActionRow:o,propertyActions:i,parentName:l,propertyName:c})=>{const{formatMessage:d}=(0,k.Z)(),{modifiedData:p,onChangeParentCheckbox:m,onChangeSimpleCheckbox:y}=(0,H.$_)(),[T,D]=(0,e.useState)(null),V=O=>{D(E=>E===O?null:O)},I=(0,e.useMemo)(()=>T?t.find(({value:O})=>O===T):null,[T,t]);return e.createElement(_t,null,e.createElement(nn,null),t.map(({label:O,value:E,required:B,children:L},Z)=>{const se=Z+1<t.length,U=Array.isArray(L),_=T===E;return e.createElement(en,{key:E,isVisible:se},e.createElement(qt,null,e.createElement(Jt,{color:"primary200"}),e.createElement(R.k,{style:{flex:1}},e.createElement(tn,{level:r,isActive:_,isCollapsable:U},e.createElement(rt,{alignItems:"center",isCollapsable:U,...U&&{onClick:()=>V(E),"aria-expanded":_,onKeyDown:({key:K})=>(K==="Enter"||K===" ")&&V(E),tabIndex:0,role:"button"},title:O},e.createElement(Y.Z,{ellipsis:!0},ue()(O)),B&&e.createElement(pt,null),e.createElement(We,{$isActive:_}))),e.createElement(R.k,{style:{flex:1}},i.map(({actionId:K,label:he,isActionRelatedToCurrentProperty:Ie})=>{if(!Ie)return e.createElement(Ne,{key:K});const ae=[...o.split(".."),K,"properties",c,...l.split(".."),E],ve=b()(p,ae,!1);if(!L)return e.createElement(gt,{key:he,justifyContent:"center",alignItems:"center"},e.createElement(G.C,{disabled:s,name:ae.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${O} ${he}`}),onValueChange:De=>{y({target:{name:ae.join(".."),value:De}})},value:ve}));const{hasAllActionsSelected:Ke,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(gt,{key:he,justifyContent:"center",alignItems:"center"},e.createElement(G.C,{key:he,disabled:s,name:ae.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${O} ${he}`}),onValueChange:De=>{m({target:{name:ae.join(".."),value:De}})},value:Ke,indeterminate:$e}))})))),I&&_&&e.createElement(u.x,{paddingBottom:2},e.createElement(we,{isFormDisabled:s,parentName:`${l}..${E}`,pathToDataFromActionRow:o,propertyActions:i,propertyName:c,recursiveLevel:r+1,childrenForm:I.children})))}))};we.propTypes={childrenForm:a().array.isRequired,isFormDisabled:a().bool.isRequired,parentName:a().string.isRequired,pathToDataFromActionRow:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,recursiveLevel:a().number.isRequired};const sn=(0,e.memo)(we),on=t=>t.reduce((r,o)=>(o.isActionRelatedToCurrentProperty&&r.push(o.actionId),r),[]),rn=(t,s,r,o,i)=>{const c=on(t).reduce((d,p)=>{const m=[...r.split(".."),p,"properties",o,i],y=b()(s,m,!1);return d[p]=y,d},{});return Oe(c)},ft=(0,g.ZP)(R.k)`
  width: ${de};
  position: relative;
`,an=(0,g.ZP)(R.k)`
  height: ${Ae};
  flex: 1;

  ${({isCollapsable:t,theme:s})=>t&&`
      ${We} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${Ve(s)}
      }
  `}
  ${({isActive:t,theme:s})=>t&&Ve(s)};
`,Qe=({childrenForm:t,label:s,isFormDisabled:r,name:o,required:i,pathToData:l,propertyActions:c,propertyName:d,isOdd:p})=>{const{formatMessage:m}=(0,k.Z)(),[y,T]=(0,e.useState)(null),{modifiedData:D,onChangeCollectionTypeLeftActionRowCheckbox:V,onChangeParentCheckbox:I,onChangeSimpleCheckbox:O}=(0,H.$_)(),E=y===o,B=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),L=B.length>0,Z=(0,e.useCallback)(()=>{L&&T(K=>K===o?null:o)},[L,o]),se=({target:{value:K}})=>{V(l,d,o,K)},{hasAllActionsSelected:U,hasSomeActionsSelected:_}=(0,e.useMemo)(()=>rn(c,D,l,d,o),[c,D,l,d,o]);return e.createElement(e.Fragment,null,e.createElement(an,{alignItems:"center",isCollapsable:L,isActive:E,background:p?"neutral100":"neutral0"},e.createElement(R.k,null,e.createElement(at,{onChange:se,onClick:Z,isCollapsable:L,isFormDisabled:r,label:s,someChecked:_,value:U,isActive:E},i&&e.createElement(pt,null),e.createElement(We,{$isActive:E})),e.createElement(R.k,null,c.map(({label:K,isActionRelatedToCurrentProperty:he,actionId:Ie})=>{if(!he)return e.createElement(Ne,{key:K});const ae=[...l.split(".."),Ie,"properties",d,o];if(!L){const De=b()(D,ae,!1);return e.createElement(ft,{key:Ie,justifyContent:"center",alignItems:"center"},e.createElement(G.C,{disabled:r,name:ae.join(".."),"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${K}`}),onValueChange:ns=>{O({target:{name:ae.join(".."),value:ns}})},value:De}))}const ve=b()(D,ae,{}),{hasAllActionsSelected:Ke,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(ft,{key:K,justifyContent:"center",alignItems:"center"},e.createElement(G.C,{disabled:r,name:ae.join(".."),onValueChange:De=>{I({target:{name:ae.join(".."),value:De}})},"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${K}`}),value:Ke,indeterminate:$e}))})))),E&&e.createElement(sn,{childrenForm:B,isFormDisabled:r,parentName:o,pathToDataFromActionRow:l,propertyName:d,propertyActions:c,recursiveLevel:0}))};Qe.defaultProps={childrenForm:[],required:!1},Qe.propTypes={childrenForm:a().array,label:a().string.isRequired,isFormDisabled:a().bool.isRequired,name:a().string.isRequired,pathToData:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,required:a().bool,isOdd:a().bool.isRequired};const ln=(0,e.memo)(Qe),ht=(0,g.ZP)(R.k)`
  width: ${de};
  flex-shrink: 0;
`,cn=(0,g.ZP)(R.k)`
  width: ${me};
  height: ${Ae};
  flex-shrink: 0;
`,yt=({headers:t,label:s})=>{const{formatMessage:r}=(0,k.Z)(),o=r({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:s});return e.createElement(R.k,null,e.createElement(cn,{alignItems:"center",paddingLeft:6},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral500"},o)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ht,{justifyContent:"center",key:i.label},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral500"},r({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ht,{key:i.label})))};yt.propTypes={headers:a().arrayOf(a().shape({label:a().string.isRequired,isActionRelatedToCurrentProperty:a().bool.isRequired})).isRequired,label:a().string.isRequired};const dn=yt,un=(t,s)=>t.map(r=>{const o=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(s)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:o}}),mn=g.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,Ct=({availableActions:t,childrenForm:s,isFormDisabled:r,label:o,pathToData:i,propertyName:l})=>{const c=(0,e.useMemo)(()=>un(t,l),[t,l]);return e.createElement(mn,null,e.createElement(dn,{label:o,headers:c}),e.createElement(u.x,null,s.map(({children:d,label:p,value:m,required:y},T)=>e.createElement(ln,{childrenForm:d,key:m,label:p,isFormDisabled:r,name:m,required:y,propertyActions:c,pathToData:i,propertyName:l,isOdd:T%2===0}))))};Ct.propTypes={childrenForm:a().array.isRequired,availableActions:a().array.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,pathToData:a().string.isRequired,propertyName:a().string.isRequired};const pn=Ct,gn=g.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:s})=>s&&`border: 1px solid ${t.colors.primary600};`}
`,Et=({allActions:t,contentTypeName:s,label:r,index:o,isActive:i,isFormDisabled:l,onClickToggleCollapse:c,pathToData:d,properties:p})=>{const m=(0,e.useCallback)(()=>{c(s)},[s,c]),y=(0,e.useMemo)(()=>Xt(t,s),[t,s]);return e.createElement(gn,{isActive:i},e.createElement(zt,{availableActions:y,isActive:i,isGrey:o%2===0,isFormDisabled:l,label:r,onClickToggle:m,pathToData:d}),i&&p.map(({label:T,value:D,children:V})=>e.createElement(pn,{availableActions:y,childrenForm:V,isFormDisabled:l,label:T,pathToData:d,propertyName:D,key:D})))};Et.propTypes={allActions:a().array.isRequired,contentTypeName:a().string.isRequired,index:a().number.isRequired,isActive:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggleCollapse:a().func.isRequired,pathToData:a().string.isRequired,properties:a().array.isRequired};const fn=Et,Je=({actions:t,isFormDisabled:s,pathToData:r,subjects:o})=>{const[i,l]=(0,e.useState)(null),c=d=>{l(i===d?null:d)};return o.map(({uid:d,label:p,properties:m},y)=>e.createElement(fn,{allActions:t,key:d,contentTypeName:d,label:p,isActive:i===d,isFormDisabled:s,index:y,onClickToggleCollapse:c,pathToData:`${r}..${d}`,properties:m}))};Je.defaultProps={actions:[],subjects:[]},Je.propTypes={actions:a().array.isRequired,isFormDisabled:a().bool.isRequired,pathToData:a().string.isRequired,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))};const hn=(0,e.memo)(Je),yn=t=>t.filter(({subjects:s})=>s&&s.length),Cn=t=>t.map(({actionId:s})=>s),En=(t,s)=>t.reduce((r,o)=>(Object.keys(s).forEach(i=>{const l=b()(s,[i,o],{}),c={[i]:ze(l)};r[o]?r[o]={...r[o],...c}:r[o]=c}),r),{}),vn=(t,s)=>{const r=Cn(t),o=En(r,s);return Object.keys(o).reduce((l,c)=>(l[c]=Oe(o[c]),l),{})},bn=(0,g.ZP)(R.k)`
  width: ${de};
  flex-shrink: 0;
`,qe=({actions:t,isFormDisabled:s,kind:r})=>{const{formatMessage:o}=(0,k.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,H.$_)(),c=(0,e.useMemo)(()=>yn(t),[t]),d=(0,e.useMemo)(()=>vn(c,i[r]),[i,c,r]);return e.createElement(u.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:me}},e.createElement(R.k,{gap:0},c.map(({label:p,actionId:m})=>e.createElement(bn,{direction:"column",alignItems:"center",justifyContent:"center",key:m,gap:3},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral500"},o({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})),e.createElement(G.C,{disabled:s,onValueChange:y=>{l(r,m,y)},name:m,"aria-label":o({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:o({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:b()(d,[m,"hasAllActionsSelected"],!1),indeterminate:b()(d,[m,"hasSomeActionsSelected"],!1)})))))};qe.defaultProps={actions:[]},qe.propTypes={actions:a().arrayOf(a().shape({label:a().string.isRequired,actionId:a().string.isRequired,subjects:a().array.isRequired})),isFormDisabled:a().bool.isRequired,kind:a().string.isRequired};const xn=(0,e.memo)(qe),Pn=(0,g.ZP)(u.x)`
  overflow-x: auto;
`,vt=({isFormDisabled:t,kind:s,layout:{actions:r,subjects:o}})=>{const i=F()([...o],"label");return e.createElement(Pn,{background:"neutral0"},e.createElement(xn,{actions:r,kind:s,isFormDisabled:t}),e.createElement(hn,{actions:r,isFormDisabled:t,pathToData:s,subjects:i}))};vt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().shape({actions:a().array,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))}).isRequired};const bt=(0,e.memo)(vt);var Rn=n(74481);const xt=({children:t,value:s})=>e.createElement(Rn.$l.Provider,{value:s},t);xt.propTypes={children:a().node.isRequired,value:a().exact({availableConditions:a().array.isRequired,modifiedData:a().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:a().func.isRequired,onChangeConditions:a().func.isRequired,onChangeSimpleCheckbox:a().func.isRequired,onChangeParentCheckbox:a().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:a().func.isRequired}).isRequired};const An=xt;var Tn=n(83337),Sn=n(3408),Mn=n(82336),Pt=n(31078),On=n(90529),$n=n(49899);const Dn=(t,s,r)=>t.map(o=>{const i=[...r,o.action,"properties","enabled"],l=b()(s,i,!1),c=b()(s,[...r,o.action,"conditions"],{}),d=je(c).some(p=>p);return{...o,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:d,label:o.displayName,actionId:o.action,pathToConditionsObject:[...r,o.action]}}),Ln=t=>{const s=Object.entries(t).reduce((o,i)=>{const[l,{conditions:c}]=i;return o[l]=c,o},{});return je(s).some(o=>o)},jn=g.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,In=g.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:s,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${s?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Rt=({categoryName:t,isFormDisabled:s,subCategoryName:r,actions:o,pathToData:i})=>{const[l,c]=(0,e.useState)(!1),{modifiedData:d,onChangeParentCheckbox:p,onChangeSimpleCheckbox:m}=(0,H.$_)(),{formatMessage:y}=(0,k.Z)(),T=b()(d,i,{}),D=(0,e.useMemo)(()=>Object.keys(T).reduce((Z,se)=>(Z[se]=ze(T[se]),Z),{}),[T]),{hasAllActionsSelected:V,hasSomeActionsSelected:I}=Oe(D),O=()=>{c(Z=>!Z)},E=()=>{c(!1)},B=Dn(o,d,i),L=Ln(b()(d,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(u.x,null,e.createElement(R.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(u.x,{paddingRight:4},e.createElement(Y.Z,{variant:"sigma",textColor:"neutral600"},r)),e.createElement(jn,null),e.createElement(u.x,{paddingLeft:4},e.createElement(Pt.X,{name:i.join(".."),disabled:s,onValueChange:Z=>{p({target:{name:i.join(".."),value:Z}})},indeterminate:I,value:V},y({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(R.k,{paddingTop:6,paddingBottom:6},e.createElement(On.r,{gap:2,style:{flex:1}},B.map(({checkboxName:Z,value:se,action:U,displayName:_,hasConditions:K})=>e.createElement($n.P,{col:3,key:U},e.createElement(In,{disabled:s,hasConditions:K},e.createElement(Pt.X,{name:Z,disabled:s,onValueChange:he=>{m({target:{name:Z,value:he}})},value:se},_))))),e.createElement(ie,{hasConditions:L,onClick:O}))),l&&e.createElement(ce,{headerBreadCrumbs:[t,r],actions:B,isFormDisabled:s,onClosed:E,onToggle:O}))};Rt.propTypes={actions:a().array.isRequired,categoryName:a().string.isRequired,isFormDisabled:a().bool.isRequired,subCategoryName:a().string.isRequired,pathToData:a().array.isRequired};const Bn=Rt,_e=({childrenForm:t,kind:s,name:r,isOpen:o,isFormDisabled:i,isWhite:l,onOpenCategory:c,pathToData:d})=>{const{formatMessage:p}=(0,k.Z)(),m=()=>{c(r)},y=(0,e.useMemo)(()=>r.split("::").pop(),[r]);return e.createElement(Tn.U,{expanded:o,onToggle:m,id:`accordion-${r}`,variant:l?"primary":"secondary"},e.createElement(Sn.B,{title:ue()(y),description:`${p({id:"Settings.permissions.category"},{category:y})} ${s==="plugins"?"plugin":s}`}),e.createElement(Mn.v,null,e.createElement(u.x,{padding:6},t.map(({actions:T,subCategoryName:D,subCategoryId:V})=>e.createElement(Bn,{key:D,actions:T,categoryName:y,isFormDisabled:i,subCategoryName:D,pathToData:[...d,V]})))))};_e.defaultProps={},_e.propTypes={childrenForm:a().array.isRequired,isOpen:a().bool.isRequired,isFormDisabled:a().bool.isRequired,isWhite:a().bool.isRequired,kind:a().string.isRequired,name:a().string.isRequired,onOpenCategory:a().func.isRequired,pathToData:a().array.isRequired};const kn=_e,At=({isFormDisabled:t,kind:s,layout:r})=>{const[o,i]=(0,e.useState)(null),l=c=>{i(c===o?null:c)};return e.createElement(u.x,{padding:6,background:"neutral0"},r.map(({category:c,categoryId:d,childrenForm:p},m)=>e.createElement(kn,{key:c,childrenForm:p,kind:s,isFormDisabled:t,isOpen:o===c,isWhite:m%2===1,name:c,onOpenCategory:l,pathToData:[s,d]})))};At.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().arrayOf(a().shape({category:a().string.isRequired,categoryId:a().string.isRequired,childrenForm:a().arrayOf(a().shape({actions:a().array.isRequired})).isRequired}).isRequired).isRequired};const Tt=At;var Zn=n(87830),Fn=n.n(Zn),Nn=n(43433),fe=n.n(Nn);const St=(t,s,r)=>t.find(o=>o.action===s&&o.subject===r),Mt=(t,s=[])=>t.reduce((r,o)=>(r[o.id]=s.indexOf(o.id)!==-1,r),{}),Ot=({children:t},s,r="")=>t.reduce((o,i)=>{if(i.children)return{...o,[i.value]:Ot(i,s,`${r}${i.value}.`)};const l=s.indexOf(`${r}${i.value}`)!==-1;return o[i.value]=l,o},{}),Wn=(t,s,r)=>t.reduce((o,i)=>{const l=s.properties.find(({value:c})=>c===i);if(l){const c=b()(r,["properties",l.value],[]),d=Ot(l,c);o.properties[i]=d}return o},{properties:{}}),Vn=(t,s)=>s.reduce((r,o)=>{const i=t.find(({uid:l})=>l===o)||null;return i&&(r[o]=i),r},{}),$t=({subjects:t},s,r,o=[])=>s.reduce((i,l)=>{const c=l.subjects,d=Vn(t,c);if(A()(d))return i;const p=Object.keys(d).reduce((m,y)=>{const{actionId:T,applyToProperties:D}=l,O=d[y].properties.map(({value:Z})=>Z).every(Z=>(D||[]).indexOf(Z)===-1),E=St(o,T,y),B=Mt(r,b()(E,"conditions",[]));if(A()(D)||O)return fe()(m,[y,T],{properties:{enabled:E!==void 0},conditions:B}),m;const L=Wn(D,d[y],E);return fe()(m,[y,T],{...L,conditions:B}),m},{});return Fn()(i,p)},{}),Kn=(t,s,r)=>t.reduce((o,i)=>{const l=St(r,i.action,null);return o[i.action]={properties:{enabled:l!==void 0},conditions:Mt(s,l?.conditions??[])},o},{}),Un=(t,s,r)=>t.reduce((o,i)=>(o[i.subCategoryId]=Kn(i.actions,s,r),o),{}),Dt=(t,s,r=[])=>t.reduce((o,{categoryId:i,childrenForm:l})=>{const c=Un(l,s,r);return o[i]=c,o},{}),Lt=t=>t.split(" ").join("-"),jt=(t,s)=>Object.entries(ge()(t,s)).map(([r,o])=>({category:r,categoryId:Lt(r),childrenForm:Object.entries(ge()(o,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:Lt(i),actions:l}))})),Hn=(t,s)=>{const{conditions:r,sections:{collectionTypes:o,singleTypes:i,plugins:l,settings:c}}=t,d={collectionTypes:o,singleTypes:i,plugins:jt(l,"plugin"),settings:jt(c,"category")},p={collectionTypes:$t(o,o.actions||[],r,s),singleTypes:$t(i,i.actions||[],r,s),plugins:Dt(d.plugins,r,s),settings:Dt(d.settings,r,s)};return{initialData:p,modifiedData:p,layouts:d}};var Gn=n(8175),et=n.n(Gn);const It=t=>Object.keys(t).reduce((s,r)=>{const o=t[r];if(Te()(o)&&!P()(o,"conditions"))return{...s,[r]:It(o)};if(Te()(o)&&P()(o,"conditions")&&!je(Q()(o,"conditions")).some(l=>l)){const l=Object.keys(o.conditions).reduce((c,d)=>(c[d]=!1,c),{});return{...s,[r]:{...o,conditions:l}}}return s[r]=o,s},{}),tt=It,Bt=(t,s,r=!1)=>Object.keys(t).reduce((o,i)=>{const l=t[i];return i==="conditions"&&!r?(o[i]=l,o):Te()(l)?{...o,[i]:Bt(l,s,i==="fields")}:(o[i]=s,o)},{}),He=Bt,zn={initialData:{},modifiedData:{},layouts:{}},Yn=(t,s)=>(0,J.ZP)(t,r=>{switch(s.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:o,actionId:i,value:l}=s,c=["modifiedData",o];Object.keys(b()(t,c)).forEach(d=>{const p=b()(t,[...c,d,i],void 0);if(p){let m=He(p,l);if(!l&&m.conditions){const y=He(m.conditions,!1);m={...m,conditions:y}}fe()(r,[...c,d,i],m)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:o,propertyName:i,rowName:l,value:c}=s;let d=et()(t.modifiedData);const p=o.split(".."),m=b()(d,p,{});Object.keys(m).forEach(y=>{if(P()(m[y],`properties.${i}`)){const T=b()(m,[y,"properties",i,l]),D=[...p,y,"properties",i,l];if(!Te()(T))fe()(d,D,c);else{const V=He(T,c);fe()(d,D,V)}}}),c||(d=tt(d)),fe()(r,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(s.conditions).forEach(o=>{const[i,l]=o;fe()(r,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let o=et()(t.modifiedData);fe()(o,[...s.keys.split("..")],s.value),s.value||(o=tt(o)),fe()(r,"modifiedData",o);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:o,value:i}=s,l=[...o.split("..")];let c=et()(t.modifiedData);const d=b()(c,l,{}),p=He(d,i);fe()(c,l,p),i||(c=tt(c)),fe()(r,["modifiedData"],c);break}case"RESET_FORM":{r.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{r.initialData=t.modifiedData;break}default:return r}}),nt=t=>Object.entries(t).filter(([,s])=>s).map(([s])=>s),Xn=t=>{const[s,{conditions:r}]=t;return{action:s,subject:null,conditions:nt(r),properties:{}}},wn=t=>Object.values(t).reduce((s,r)=>{const o=Object.entries(r).reduce((i,l)=>{const[,{properties:{enabled:c}}]=l;if(!c)return i;const d=Xn(l);return i.push(d),i},[]);return[...s,...o]},[]),kt=t=>Object.values(t).reduce((s,r)=>{const o=wn(r);return[...s,...o]},[]),Zt=(t,s="")=>Object.entries(t).reduce((r,o)=>{const[i,l]=o;return Te()(l)?[...r,...Zt(l,`${s}${i}.`)]:(l&&!Te()(l)&&r.push(`${s}${i}`),r)},[]),Qn=(t,s,{conditions:r,properties:o})=>Object.entries(o).reduce((i,l)=>{const[c,d]=l;return i.properties[c]=Zt(d),i},{action:t,subject:s,conditions:nt(r),properties:{}}),Jn=(t,s,{conditions:r})=>({action:t,subject:s,properties:{},conditions:nt(r)}),qn=(t,s)=>Object.entries(s).reduce((o,i)=>{const[l,c]=i;if(!je(c).some(m=>m))return o;if(!c?.properties?.enabled){const m=Qn(l,t,c);return[...o,m]}if(!c.properties.enabled)return o;const p=Jn(l,t,c);return o.push(p),o},[]),Ft=t=>Object.entries(t).reduce((r,o)=>{const[i,l]=o,c=qn(i,l);return[...r,...c]},[]),_n=t=>{const s=kt(t.plugins),r=kt(t.settings),o=Ft(t.collectionTypes),i=Ft(t.singleTypes);return[...s,...r,...o,...i]},es=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],st=(0,e.forwardRef)(({layout:t,isFormDisabled:s,permissions:r},o)=>{const[{initialData:i,layouts:l,modifiedData:c},d]=(0,e.useReducer)(Yn,zn,()=>Hn(t,r)),{formatMessage:p}=(0,k.Z)();(0,e.useImperativeHandle)(o,()=>({getPermissions(){const I=(0,M.e5)(i.collectionTypes,c.collectionTypes),O=(0,M.e5)(i.singleTypes,c.singleTypes),E={...I,...O};let B;return A()(E)?B=!1:B=Object.values(E).some(L=>Object.values(L).some(Z=>P()(Z,"conditions"))),{permissionsToSend:_n(c),didUpdateConditions:B}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const m=(I,O,E,B)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:I,propertyName:O,rowName:E,value:B})},y=(I,O,E)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:I,actionId:O,value:E})},T=I=>{d({type:"ON_CHANGE_CONDITIONS",conditions:I})},D=(0,e.useCallback)(({target:{name:I,value:O}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:I,value:O})},[]),V=(0,e.useCallback)(({target:{name:I,value:O}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:I,value:O})},[]);return e.createElement(An,{value:{availableConditions:t.conditions,modifiedData:c,onChangeConditions:T,onChangeSimpleCheckbox:D,onChangeParentCheckbox:V,onChangeCollectionTypeLeftActionRowCheckbox:m,onChangeCollectionTypeGlobalActionCheckbox:y}},e.createElement(f.v,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(x.m,null,es.map(I=>e.createElement(x.O,{key:I.id},p({id:I.labelId,defaultMessage:I.defaultMessage})))),e.createElement(h.n,{style:{position:"relative"}},e.createElement(h.x,null,e.createElement(bt,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:s})),e.createElement(h.x,null,e.createElement(bt,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:s})),e.createElement(h.x,null,e.createElement(Tt,{layout:l.plugins,kind:"plugins",isFormDisabled:s})),e.createElement(h.x,null,e.createElement(Tt,{layout:l.settings,kind:"settings",isFormDisabled:s})))))});st.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},st.propTypes={layout:a().object,isFormDisabled:a().bool.isRequired,permissions:a().array};const ts=(0,e.memo)(st)},63727:(W,$,n)=>{"use strict";n.r($),n.d($,{default:()=>Y});var e=n(27279),f=n(56545),x=n(49402),h=n(51447),M=n(36364),v=n(796),P=n(34041),C=n(85898),A=n(51413),N=n(49969),a=n(52185),k=n(98447),u=n(71563),S=n(61020),F=n(4644),g=n(51754),R=n(90065),G=n(442),w=n(78565),oe=n(90529),ee=n(49899),b=n(19098),pe=n(87549),Q=n(70627),H=n.n(Q);const te=({disabled:re,role:X,values:j,errors:J,onChange:le,onBlur:ge})=>{const{formatMessage:q}=(0,S.Z)();return e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(C.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(C.k,{justifyContent:"space-between"},e.createElement(a.x,null,e.createElement(a.x,null,e.createElement(w.Z,{fontWeight:"bold"},X?X.name:q({id:"global.details",defaultMessage:"Details"}))),e.createElement(a.x,null,e.createElement(w.Z,{textColor:"neutral500",variant:"pi"},X?X.description:q({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(A.z,{disabled:!0,variant:"secondary"},q({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:X.usersCount}))),e.createElement(oe.r,{gap:4},e.createElement(ee.P,{col:6},e.createElement(b.o,{disabled:re,name:"name",error:J.name&&q({id:J.name}),label:q({id:"global.name",defaultMessage:"Name"}),onChange:le,onBlur:ge,required:!0,value:j.name||""})),e.createElement(ee.P,{col:6},e.createElement(pe.g,{disabled:re,label:q({id:"global.description",defaultMessage:"Description"}),id:"description",error:J.name&&q({id:J.name}),onChange:le,onBlur:ge},j.description||"")))))};te.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},te.propTypes={disabled:H().bool,errors:H().object.isRequired,onBlur:H().func.isRequired,onChange:H().func.isRequired,role:H().object,values:H().object};const Ce=te;var be=n(47853);const ie=be.Ry().shape({name:be.Z_().required(f.I0.required)}),Se=()=>{const re=(0,f.lm)(),{formatMessage:X}=(0,S.Z)(),{params:{id:j}}=(0,h.$B)("/settings/roles/:id"),{put:J}=(0,f.kY)(),[le,ge]=(0,e.useState)(!1),q=(0,e.useRef)(),{lockApp:ue,unlockApp:Be}=(0,f.o1)(),{trackUsage:ke}=(0,f.rS)(),{formatAPIError:Ee}=(0,f.So)(),{isLoading:Ze,data:Le}=(0,R.d)(j,{cacheTime:0}),{roles:[ye={}],isLoading:Me,refetch:Fe}=(0,g.F)({id:j},{cacheTime:0}),{permissions:Ue,isLoading:Re}=(0,F.V)({id:j},{cacheTime:0}),ne=async de=>{try{ue(),ge(!0);const{permissionsToSend:me,didUpdateConditions:Ae}=q.current.getPermissions();await J(`/admin/roles/${j}`,de),ye.code!=="strapi-super-admin"&&(await J(`/admin/roles/${j}/permissions`,{permissions:me}),Ae&&ke("didUpdateConditions")),q.current.setFormAfterSubmit(),await Fe(),re({type:"success",message:{id:"notification.success.saved"}})}catch(me){re({type:"warning",message:Ee(me)})}finally{ge(!1),Be()}},ce=!Me&&ye.code==="strapi-super-admin";return e.createElement(v.o,null,e.createElement(f.SL,{name:"Roles"}),e.createElement(u.J9,{enableReinitialize:!0,initialValues:{name:ye.name,description:ye.description},onSubmit:ne,validationSchema:ie,validateOnChange:!1},({handleSubmit:de,values:me,errors:Ae,handleChange:ot,handleBlur:Ne})=>e.createElement("form",{onSubmit:de},e.createElement(P.T,{primaryAction:e.createElement(C.k,{gap:2},e.createElement(A.z,{disabled:ye.code==="strapi-super-admin",onClick:de,loading:le,size:"L"},X({id:"global.save",defaultMessage:"Save"}))),title:X({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:X({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(f.rU,{startIcon:e.createElement(k.Z,null),to:"/settings/roles"},X({id:"global.back",defaultMessage:"Back"}))}),e.createElement(N.D,null,e.createElement(C.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(Ce,{isLoading:Me||Re,disabled:ce,errors:Ae,values:me,onChange:ot,onBlur:Ne,role:ye}),!Ze&&!Me&&!Re?e.createElement(a.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(G.Z,{isFormDisabled:ce,permissions:Ue,ref:q,layout:Le})):e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(f.dO,null)))))))},Y=()=>{const re=(0,x.v9)(M._),{isLoading:X,allowedActions:{canRead:j,canUpdate:J}}=(0,f.ss)({read:re.settings.roles.read,update:re.settings.roles.update});return X?e.createElement(f.dO,null):!j&&!J?e.createElement(h.l_,{to:"/"}):e.createElement(Se,null)}},90065:(W,$,n)=>{"use strict";n.d($,{d:()=>x});var e=n(56545),f=n(40464);const x=(h,M={})=>{const{get:v}=(0,e.kY)(),{data:P,error:C,isError:A,isLoading:N}=(0,f.useQuery)(["permissions",h],async()=>{const{data:{data:a}}=await v("/admin/permissions",{params:{role:h}});return a},M);return{data:P,error:C,isError:A,isLoading:N}}},29520:W=>{function $(n,e,f,x){for(var h=-1,M=n==null?0:n.length;++h<M;){var v=n[h];e(x,v,f(v),n)}return x}W.exports=$},98694:(W,$,n)=>{var e=n(1107);function f(x,h,M,v){return e(x,function(P,C,A){h(v,P,M(P),A)}),v}W.exports=f},37177:(W,$,n)=>{var e=n(29520),f=n(98694),x=n(90040),h=n(26126);function M(v,P){return function(C,A){var N=h(C)?e:f,a=P?P():{};return N(C,v,x(A,2),a)}}W.exports=M},39738:(W,$,n)=>{var e=n(93367),f=1/0;function x(h){var M=h==null?0:h.length;return M?e(h,f):[]}W.exports=x},63799:(W,$,n)=>{var e=n(71041),f=n(37177),x=Object.prototype,h=x.hasOwnProperty,M=f(function(v,P,C){h.call(v,C)?v[C].push(P):e(v,C,[P])});W.exports=M},83337:(W,$,n)=>{"use strict";n.d($,{U:()=>k,y:()=>N});var e=n(74081),f=n(27279),x=n(72450),h=n(52179),M=n(21837),v=n(78565),P=n(85898),C=n(52185);const A=({theme:u,expanded:S,variant:F,disabled:g,error:R})=>R?`1px solid ${u.colors.danger600} !important`:g?`1px solid ${u.colors.neutral150}`:S?`1px solid ${u.colors.primary600}`:F==="primary"?`1px solid ${u.colors.neutral0}`:`1px solid ${u.colors.neutral100}`,N=(0,x.ZP)(v.Z)``,a=(0,x.ZP)(C.x)`
  border: ${A};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:u})=>u.colors.primary600};

    ${N} {
      color: ${({theme:u,expanded:S})=>S?void 0:u.colors.primary700};
    }

    ${v.Z} {
      color: ${({theme:u,expanded:S})=>S?void 0:u.colors.primary600};
    }

    & > ${P.k} {
      background: ${({theme:u})=>u.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:u})=>u.colors.primary200};
    }
  }
`,k=({children:u,disabled:S=!1,error:F,expanded:g=!1,hasErrorMessage:R=!0,id:G,onToggle:w,toggle:oe,size:ee="M",variant:b="primary",shadow:pe})=>{const Q=(0,M.M)(G),H=f.useMemo(()=>({expanded:g,onToggle:w,toggle:oe,id:Q,size:ee,variant:b,disabled:S}),[S,g,Q,w,ee,oe,b]);return(0,e.jsxs)(h.S.Provider,{value:H,children:[(0,e.jsx)(a,{"data-strapi-expanded":g,disabled:S,"aria-disabled":S,expanded:g,hasRadius:!0,variant:b,error:F,shadow:pe,children:u}),F&&R&&(0,e.jsx)(C.x,{paddingTop:1,children:(0,e.jsx)(v.Z,{variant:"pi",textColor:"danger600",children:F})})]})}},82336:(W,$,n)=>{"use strict";n.d($,{v:()=>h});var e=n(74081),f=n(52179),x=n(52185);const h=({children:M,...v})=>{const{expanded:P,id:C}=(0,f.A)();if(!P)return null;const A=`accordion-content-${C}`,N=`accordion-label-${C}`,a=`accordion-desc-${C}`;return(0,e.jsx)(x.x,{role:"region",id:A,"aria-labelledby":N,"aria-describedby":a,...v,children:M})}},52179:(W,$,n)=>{"use strict";n.d($,{A:()=>x,S:()=>f});var e=n(27279);const f=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),x=()=>(0,e.useContext)(f)},3408:(W,$,n)=>{"use strict";n.d($,{B:()=>u});var e=n(74081),f=n(3494),x=n(72450),h=n(83337),M=n(52179);const v=({expanded:S,disabled:F,variant:g})=>{let R="neutral100";return S?R="primary100":F?R="neutral150":g==="primary"&&(R="neutral0"),R};var P=n(40810),C=n(57074),A=n(85898),N=n(78565);const a=(0,x.ZP)(P.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:S,expanded:F})=>F?S.colors.primary600:S.colors.neutral500};
    }
  }
`,k=(0,x.ZP)(A.k)`
  min-height: ${({theme:S,size:F})=>S.sizes.accordions[F]};
  border-radius: ${({theme:S,expanded:F})=>F?`${S.borderRadius} ${S.borderRadius} 0 0`:S.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:S})=>S.colors.primary600};
      }
    }
  }
`,u=({title:S,description:F,as:g="span",togglePosition:R="right",action:G,...w})=>{const{onToggle:oe,toggle:ee,expanded:b,id:pe,size:Q,variant:H,disabled:te}=(0,M.A)(),Ce=`accordion-content-${pe}`,be=`accordion-label-${pe}`,xe=`accordion-desc-${pe}`,ie=Q==="M"?6:4,Pe=Q==="M"?ie:ie-2,Se=v({expanded:b,disabled:te,variant:H}),Y={as:g,fontWeight:Q==="S"?"bold":void 0,id:be,textColor:b?"primary600":"neutral700",ellipsis:!0,variant:Q==="M"?"delta":void 0},re=b?"primary600":"neutral600",X=b?"primary200":"neutral200",j=Q==="M"?`${32/16}rem`:`${24/16}rem`,J=()=>{te||(ee&&!oe?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),ee()):oe&&oe())},le=(0,e.jsx)(A.k,{justifyContent:"center",borderRadius:"50%",height:j,width:j,transform:b?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:X,cursor:te?"not-allowed":"pointer",onClick:J,shrink:0,children:(0,e.jsx)(C.J,{as:f.Z,width:Q==="M"?`${11/16}rem`:`${8/16}rem`,color:b?"primary600":"neutral600"})});return(0,e.jsx)(k,{paddingBottom:Pe,paddingLeft:ie,paddingRight:ie,paddingTop:Pe,background:Se,expanded:b,size:Q,justifyContent:"space-between",cursor:te?"not-allowed":"",children:(0,e.jsxs)(A.k,{gap:3,flex:1,maxWidth:"100%",children:[R==="left"&&le,(0,e.jsx)(a,{onClick:J,"aria-disabled":te,"aria-expanded":b,"aria-controls":Ce,"aria-labelledby":be,"data-strapi-accordion-toggle":!0,expanded:b,type:"button",flex:1,minWidth:0,...w,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(h.y,{...Y,children:S}),F&&(0,e.jsx)(N.Z,{as:"p",id:xe,textColor:re,children:F})]})}),R==="right"&&(0,e.jsxs)(A.k,{gap:3,children:[le,G]}),R==="left"&&G]})})}},14291:(W,$,n)=>{"use strict";n.d($,{Q:()=>h});var e=n(74081),f=n(72450),x=n(35632);const h=({options:v,...P})=>(0,e.jsx)(x.NU,{...P,children:v.map(C=>"children"in C?(0,e.jsx)(x.Ab,{label:C.label,values:C.children.map(A=>A.value.toString()),children:C.children.map(A=>(0,e.jsx)(M,{value:A.value,children:A.label},A.value))},C.label):(0,e.jsx)(x.ML,{value:C.value,children:C.label},C.value))}),M=(0,f.ZP)(x.ML)`
  padding-left: ${({theme:v})=>v.spaces[7]};
`},37810:(W,$,n)=>{"use strict";n.d($,{O:()=>A});var e=n(74081),f=n(27279),x=n(72450),h=n(68263),M=n(19915);const v=()=>(0,e.jsx)(h.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,e.jsx)(M.Z,{variant:"pi",textColor:"neutral500",children:"/"})});v.displayName="Divider";var P=n(33110);const C=(0,x.ZP)(P.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:N})=>`calc(-1*${N.spaces[2]})`};
  }
`,A=({label:N,children:a,...k})=>{const u=f.Children.toArray(a);return(0,e.jsx)(h.x,{"aria-label":N,...k,children:(0,e.jsx)(C,{as:"ol",children:f.Children.map(u,(S,F)=>{const g=u.length>1&&F+1<u.length;return(0,e.jsxs)(P.k,{inline:!0,as:"li",children:[S,g&&(0,e.jsx)(v,{})]})})})})};A.displayName="Breadcrumbs"},93314:(W,$,n)=>{"use strict";n.d($,{$:()=>h});var e=n(74081),f=n(68263),x=n(19915);const h=({children:M,isCurrent:v=!1,...P})=>(0,e.jsx)(f.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,e.jsx)(x.Z,{variant:"pi",textColor:"neutral800",fontWeight:v?"bold":"normal","aria-current":v,...P,children:M})});h.displayName="Crumb"}}]);
