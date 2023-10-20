"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[7974],{21289:(x,g,e)=>{e.d(g,{I:()=>t,U:()=>n});const t="strapi_stage",n="strapi_assignee"},72026:(x,g,e)=>{e.r(g),e.d(g,{InformationBoxEE:()=>ee});var t=e(27279),n=e(56545),l=e(50236),r=e(35090),s=e(85898),f=e(71943),c=e(930),i=e(61020),u=e(40464),T=e(49402),E=e(21892),v=e(54920),p=e(36364),a=e(21289);function R(){const{initialData:O,layout:{uid:y},isSingleType:N,onChange:$}=(0,n.Wq)(),j=(0,T.v9)(p._),{formatMessage:d}=(0,i.Z)(),{formatAPIError:Z}=(0,n.So)(),M=(0,n.lm)(),{put:Y}=(0,n.kY)(),{allowedActions:{canReadUsers:C},isLoading:B}=(0,n.ss)({readUsers:j.settings.users.read}),{users:K,isLoading:G,isError:Q}=(0,v.R)({},{enabled:!B&&C}),k=O?.[a.U]??null,U=async({value:m})=>{h.mutate({entityId:O.id,assigneeId:parseInt(m,10),uid:y})},h=(0,u.useMutation)(async({entityId:m,assigneeId:X,uid:J})=>{const A=N?"single-types":"collection-types",{data:{data:P}}=await Y(`/admin/content-manager/${A}/${J}/${m}/assignee`,{data:{id:X}});return $({target:{name:a.U,value:P[a.U]}},!0),P},{onSuccess(){M({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}})}});return t.createElement(r.g,{name:a.U,id:a.U},t.createElement(s.k,{direction:"column",gap:2,alignItems:"stretch"},t.createElement(f.hQ,{clearLabel:d({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:Q&&C&&d({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||h.error&&Z(h.error),disabled:!B&&!G&&K.length===0,name:a.U,id:a.U,value:k?k.id:null,onChange:m=>U({value:m}),onClear:()=>U({value:null}),placeholder:d({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:d({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),loading:G||B||h.isLoading},K.map(m=>t.createElement(c.O,{key:m.id,value:m.id,textValue:(0,E.Gf)(m,d)},(0,E.Gf)(m,d))))))}var S=e(73105),D=e(78565),L=e(62475),I=e(11140),w=e(45804),F=e(75021),W=e(38705),o=e(86978);function z({id:O,layout:y}={},N={}){const{kind:$,uid:j}=y,d=$==="collectionType"?"collection-types":"single-types",{get:Z}=(0,n.kY)(),{data:M,isLoading:Y,refetch:C}=(0,u.useQuery)(["content-manager",d,y.uid,O,"stages"],async()=>{const{data:G}=await Z(`/admin/content-manager/${d}/${j}/${O}/stages`);return G},N),B=t.useMemo(()=>M?.meta??{},[M?.meta]),K=t.useMemo(()=>M?.data??[],[M?.data]);return{meta:B,stages:K,isLoading:Y,refetch:C}}var b=e(5318);function V(){const{initialData:O,layout:y,isSingleType:N,onChange:$}=(0,n.Wq)(),{put:j}=(0,n.kY)(),{formatMessage:d}=(0,i.Z)(),{formatAPIError:Z}=(0,n.So)(),M=(0,n.lm)(),{meta:Y,stages:C,isLoading:B,refetch:K}=z({id:O.id,layout:y},{enabled:!!O?.id}),{getFeature:G}=(0,F.q)(),[Q,k]=t.useState(!1),U=G("review-workflows"),h=O?.[a.I]??null,m=(0,u.useMutation)(async({entityId:A,stageId:P,uid:H})=>{const _=N?"single-types":"collection-types",{data:{data:q}}=await j(`/admin/content-manager/${_}/${H}/${A}/stage`,{data:{id:P}});return $({target:{name:a.I,value:q[a.I]}},!0),await K(),q},{onSuccess(){M({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}})}}),X=async({value:A})=>{try{U?.[o.Ef]&&parseInt(U[o.Ef],10)<Y.workflowCount?k("workflow"):U?.[o._X]&&parseInt(U[o._X],10)<C.length?k("stage"):m.mutateAsync({entityId:O.id,stageId:A,uid:y.uid})}catch{}},{themeColorName:J}=h?.color?(0,b.k)(h?.color):{};return t.createElement(t.Fragment,null,t.createElement(r.g,{hint:C.length===0&&d({id:"content-manager.reviewWorkflows.stages.no-transition",defaultMessage:"You don\u2019t have the permission to update this stage."}),name:a.I,id:a.I},t.createElement(s.k,{direction:"column",gap:2,alignItems:"stretch"},t.createElement(S.q4,{disabled:C.length===0,error:m.error&&Z(m.error)||null,name:a.I,id:a.I,value:h?.id,onChange:A=>X({value:A}),label:d({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:h&&t.createElement(s.k,{as:"span",height:2,background:h?.color,borderColor:J==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>t.createElement(s.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},t.createElement(D.Z,{textColor:"neutral800",ellipsis:!0},h?.name??""),B?t.createElement(L.a,{small:!0,style:{display:"flex"},"data-testid":"loader"}):null)},C.map(({id:A,color:P,name:H})=>{const{themeColorName:_}=(0,b.k)(P);return t.createElement(S.ag,{key:A,startIcon:t.createElement(s.k,{height:2,background:P,borderColor:_==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:A,textValue:H},H)})),t.createElement(I.J,null),t.createElement(w.c,null))),t.createElement(W.fC,{isOpen:Q==="workflow",onClose:()=>k(!1)},t.createElement(W.Dx,null,d({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),t.createElement(W.uT,null,d({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),t.createElement(W.fC,{isOpen:Q==="stage",onClose:()=>k(!1)},t.createElement(W.Dx,null,d({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),t.createElement(W.uT,null,d({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function ee(){const{isCreatingEntry:O,layout:{options:y}}=(0,n.Wq)(),N=y?.reviewWorkflows??!1;return t.createElement(l.d.Root,null,t.createElement(l.d.Title,null),N&&!O&&t.createElement(t.Fragment,null,t.createElement(V,null),t.createElement(R,null)),t.createElement(l.d.Body,null))}},75021:(x,g,e)=>{e.d(g,{q:()=>r});var t=e(27279),n=e(56545),l=e(40464);function r({enabled:s}={enabled:!0}){const{get:f}=(0,n.kY)(),{data:c,isError:i,isLoading:u}=(0,l.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:v}}=await f("/admin/license-limit-information");return v},{enabled:s}),T=t.useMemo(()=>c??{},[c]),E=t.useCallback(v=>(T?.features??[]).find(a=>a.name===v)?.options??{},[T?.features]);return{license:T,getFeature:E,isError:i,isLoading:u}}},38705:(x,g,e)=>{e.d(g,{uT:()=>I,fC:()=>W,Dx:()=>L});var t=e(27279),n=e(78565),l=e(85898),r=e(81565),s=e(23851),f=e(52185),c=e(2667),i=e(57747),u=e(85305),T=e(70627),E=e.n(T),v=e(61020),p=e(72450);const a=e.p+"0cd5f8915b265d5b1856.png",R="limits-title",S="https://strapi.io/pricing-cloud",D="https://strapi.io/contact-sales";function L({children:o}){return t.createElement(n.Z,{variant:"alpha",id:R},o)}L.propTypes={children:E().node.isRequired};function I({children:o}){return t.createElement(n.Z,{variant:"omega"},o)}I.propTypes={children:E().node.isRequired};function w(){const{formatMessage:o}=(0,v.Z)();return t.createElement(l.k,{gap:2,paddingTop:4},t.createElement(i.Q,{variant:"default",isExternal:!0,href:S},o({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(i.Q,{variant:"tertiary",isExternal:!0,href:D},o({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const F=p.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:o})=>`-${o.spaces[7]}`};
  margin-top: ${({theme:o})=>`-${o.spaces[7]}`};
  width: 360px;
`;function W({children:o,isOpen:z,onClose:b}){const{formatMessage:V}=(0,v.Z)();return z?t.createElement(r.P,{labelledBy:R},t.createElement(s.f,null,t.createElement(l.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(l.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},o,t.createElement(w,null)),t.createElement(l.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(F,{src:a,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(f.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(c.h,{icon:t.createElement(u.Z,null),"aria-label":V({id:"global.close",defaultMessage:"Close"}),onClick:b})))))):null}W.defaultProps={isOpen:!1},W.propTypes={children:E().node.isRequired,isOpen:E().bool,onClose:E().func.isRequired}},86978:(x,g,e)=>{e.d(g,{$k:()=>a,Ef:()=>I,FT:()=>D,Nj:()=>v,Ot:()=>T,QM:()=>i,VS:()=>R,_X:()=>w,bc:()=>E,gu:()=>l,k_:()=>p,lv:()=>S,qZ:()=>c,rg:()=>s,sN:()=>n,uL:()=>L,x4:()=>u,yq:()=>r,zn:()=>f});var t=e(20640);const n="settings_review-workflows",l="Settings/Review_Workflows/RESET_WORKFLOW",r="Settings/Review_Workflows/SET_CONTENT_TYPES",s="Settings/Review_Workflows/SET_IS_LOADING",f="Settings/Review_Workflows/SET_ROLES",c="Settings/Review_Workflows/SET_WORKFLOW",i="Settings/Review_Workflows/SET_WORKFLOWS",u="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",T="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",E="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",v="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",p="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",a="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",R="Settings/Review_Workflows/WORKFLOW_UPDATE",S={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},D=t.W.colors.primary600,L={STAGE:"stage"},I="numberOfWorkflows",w="stagesPerWorkflow"},5318:(x,g,e)=>{e.d(g,{k:()=>l,s:()=>r});var t=e(20640),n=e(86978);function l(s){if(!s)return null;const c=Object.entries(t.W.colors).filter(([,i])=>i.toUpperCase()===s.toUpperCase()).reduce((i,[u])=>(n.lv?.[u]&&(i=u),i),null);return c?{themeColorName:c,name:n.lv[c]}:null}function r(){return Object.entries(n.lv).map(([s,f])=>({hex:t.W.colors[s].toUpperCase(),name:f}))}},57747:(x,g,e)=>{e.d(g,{Q:()=>T});var t=e(74081),n=e(27279),l=e(72450),r=e(56954),s=e(3086),f=e(18041),c=e(33110),i=e(19915);const u=(0,l.ZP)(s.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${r.sg}
    &:active {
      ${r.sg}
    }
  }

  &:hover {
    ${r.yP}
  }

  &:active {
    ${r.tB}
  }

  ${r.PD}
`,T=n.forwardRef(({variant:E="default",startIcon:v,endIcon:p,disabled:a=!1,children:R,size:S="S",as:D=f.f,...L},I)=>{const w=S==="S"?2:"10px",F=4;return(0,t.jsxs)(u,{ref:I,"aria-disabled":a,size:S,variant:E,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:w,paddingLeft:F,paddingRight:F,paddingTop:w,pointerEvents:a?"none":void 0,...L,as:D||f.f,children:[v&&(0,t.jsx)(c.k,{"aria-hidden":!0,children:v}),(0,t.jsx)(i.Z,{variant:S==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:R}),p&&(0,t.jsx)(c.k,{"aria-hidden":!0,children:p})]})});T.displayName="LinkButton"}}]);