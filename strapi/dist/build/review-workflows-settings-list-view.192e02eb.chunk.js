"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[349],{40784:(h,g,t)=>{t.d(g,{r:()=>u});var e=t(74081),a=t(52185),o=t(67621),d=t.n(o);function E(i,n,s){if(!i||!n||!s)return{display:"none"};const{x:r,y:l}=s;return{transform:`translate(${r}px, ${l}px)`}}const u=({renderItem:i})=>{const{itemType:n,isDragging:s,item:r,initialOffset:l,currentOffset:c,mouseOffset:O}=(0,o.useDragLayer)(f=>({item:f.getItem(),itemType:f.getItemType(),initialOffset:f.getInitialSourceClientOffset(),currentOffset:f.getSourceClientOffset(),isDragging:f.isDragging(),mouseOffset:f.getClientOffset()}));return s?(0,e.jsx)(a.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,e.jsx)(a.x,{style:E(l,c,O),children:i({type:n,item:r})})}):null}},75021:(h,g,t)=>{t.d(g,{q:()=>d});var e=t(27279),a=t(56545),o=t(40464);function d({enabled:E}={enabled:!0}){const{get:u}=(0,a.kY)(),{data:i,isError:n,isLoading:s}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:c}}=await u("/admin/license-limit-information");return c},{enabled:E}),r=e.useMemo(()=>i??{},[i]),l=e.useCallback(c=>(r?.features??[]).find(f=>f.name===c)?.options??{},[r?.features]);return{license:r,getFeature:l,isError:n,isLoading:s}}},43390:(h,g,t)=>{t.d(g,{eJ:()=>R,lx:()=>M,h4:()=>T,fC:()=>S});var e=t(27279),a=t(1296),o=t(796),d=t(49969),E=t(34041),u=t(56545),i=t(98447),n=t(61020),s=t(40784),r=t(86978),l=t(85898),c=t(78565),O=t(3494),f=t(70627),p=t.n(f),y=t(72450);const P=(0,y.ZP)(l.k)`
  svg path {
    fill: ${({theme:w})=>w.colors.neutral600};
  }
`;function L({name:w}){return e.createElement(l.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,u.Q1)(300)},e.createElement(P,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},e.createElement(O.Z,{width:`${8/16}rem`})),e.createElement(c.Z,{fontWeight:"bold"},w))}L.propTypes={name:p().string.isRequired};function D({type:w,item:C}){switch(w){case r.uL.STAGE:return e.createElement(L,{...C});default:return null}}function M(){return e.createElement(s.r,{renderItem:D})}function S({children:w}){return e.createElement(a.A,null,e.createElement(o.o,{tabIndex:-1},e.createElement(d.D,null,w)))}function R({href:w}){const{formatMessage:C}=(0,n.Z)();return e.createElement(u.rU,{startIcon:e.createElement(i.Z,null),to:w},C({id:"global.back",defaultMessage:"Back"}))}function T({title:w,subtitle:C,navigationAction:W,primaryAction:A}){return e.createElement(e.Fragment,null,e.createElement(u.SL,{name:w}),e.createElement(E.T,{navigationAction:W,primaryAction:A,title:w,subtitle:C}))}},38705:(h,g,t)=>{t.d(g,{uT:()=>D,fC:()=>R,Dx:()=>L});var e=t(27279),a=t(78565),o=t(85898),d=t(81565),E=t(23851),u=t(52185),i=t(2667),n=t(57747),s=t(85305),r=t(70627),l=t.n(r),c=t(61020),O=t(72450);const f=t.p+"0cd5f8915b265d5b1856.png",p="limits-title",y="https://strapi.io/pricing-cloud",P="https://strapi.io/contact-sales";function L({children:T}){return e.createElement(a.Z,{variant:"alpha",id:p},T)}L.propTypes={children:l().node.isRequired};function D({children:T}){return e.createElement(a.Z,{variant:"omega"},T)}D.propTypes={children:l().node.isRequired};function M(){const{formatMessage:T}=(0,c.Z)();return e.createElement(o.k,{gap:2,paddingTop:4},e.createElement(n.Q,{variant:"default",isExternal:!0,href:y},T({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),e.createElement(n.Q,{variant:"tertiary",isExternal:!0,href:P},T({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const S=O.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:T})=>`-${T.spaces[7]}`};
  margin-top: ${({theme:T})=>`-${T.spaces[7]}`};
  width: 360px;
`;function R({children:T,isOpen:w,onClose:C}){const{formatMessage:W}=(0,c.Z)();return w?e.createElement(d.P,{labelledBy:p},e.createElement(E.f,null,e.createElement(o.k,{gap:2,paddingLeft:7,position:"relative"},e.createElement(o.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},T,e.createElement(M,null)),e.createElement(o.k,{justifyContent:"end",height:"100%",width:"40%"},e.createElement(S,{src:f,"aria-hidden":!0,alt:"",loading:"lazy"}),e.createElement(u.x,{display:"flex",position:"absolute",right:0,top:0},e.createElement(i.h,{icon:e.createElement(s.Z,null),"aria-label":W({id:"global.close",defaultMessage:"Close"}),onClick:C})))))):null}R.defaultProps={isOpen:!1},R.propTypes={children:l().node.isRequired,isOpen:l().bool,onClose:l().func.isRequired}},86978:(h,g,t)=>{t.d(g,{$k:()=>f,Ef:()=>D,FT:()=>P,Nj:()=>c,Ot:()=>r,QM:()=>n,VS:()=>p,_X:()=>M,bc:()=>l,gu:()=>o,k_:()=>O,lv:()=>y,qZ:()=>i,rg:()=>E,sN:()=>a,uL:()=>L,x4:()=>s,yq:()=>d,zn:()=>u});var e=t(20640);const a="settings_review-workflows",o="Settings/Review_Workflows/RESET_WORKFLOW",d="Settings/Review_Workflows/SET_CONTENT_TYPES",E="Settings/Review_Workflows/SET_IS_LOADING",u="Settings/Review_Workflows/SET_ROLES",i="Settings/Review_Workflows/SET_WORKFLOW",n="Settings/Review_Workflows/SET_WORKFLOWS",s="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",r="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",l="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",c="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",O="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",f="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",p="Settings/Review_Workflows/WORKFLOW_UPDATE",y={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},P=e.W.colors.primary600,L={STAGE:"stage"},D="numberOfWorkflows",M="stagesPerWorkflow"},52258:(h,g,t)=>{t.d(g,{n:()=>d});var e=t(27279),a=t(56545),o=t(40464);function d(E={}){const{get:u}=(0,a.kY)(),{id:i="",...n}=E,s={populate:"stages"},{data:r,isLoading:l,status:c,refetch:O}=(0,o.useQuery)(["review-workflows","workflows",i],async()=>(await u(`/admin/review-workflows/workflows/${i}`,{params:{...s,...n}})).data),f=e.useMemo(()=>i&&r?.data?[r.data]:Array.isArray(r?.data)?r.data:[],[r?.data,i]);return{meta:e.useMemo(()=>r?.meta??{},[r?.meta]),workflows:f,isLoading:l,status:c,refetch:O}}},26259:(h,g,t)=>{t.r(g),t.d(g,{default:()=>z});var e=t(27279),a=t(56545),o=t(49402),d=t(36364),E=t(85898),u=t(62475),i=t(92712),n=t(89630),s=t(7609),r=t(66016),l=t(9465),c=t(78565),O=t(17992),f=t(84428),p=t(2667),y=t(25659),P=t(9663),L=t(18076),D=t(61020),M=t(40464),S=t(51447),R=t(72450),T=t(92686),w=t(75021),C=t(43390),W=t(38705),A=t(86978),V=t(52258);const H=(0,R.ZP)(a.rU)`
  align-items: center;
  height: ${(0,a.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:m})=>`${m.spaces[2]}}`};
  width: ${(0,a.Q1)(32)};

  svg {
    height: ${(0,a.Q1)(12)};
    width: ${(0,a.Q1)(12)};

    path {
      fill: ${({theme:m})=>m.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:m})=>m.colors.neutral800};
      }
    }
  }
`;function Y(){const{formatMessage:m}=(0,D.Z)(),{push:U}=(0,S.k6)(),{collectionTypes:X,singleTypes:J,isLoading:_}=(0,T.G)(),{meta:I,workflows:j,isLoading:k,refetch:q}=(0,V.n)(),[Z,K]=e.useState(null),[ee,x]=e.useState(!1),{del:te}=(0,a.kY)(),{formatAPIError:ne}=(0,a.So)(),G=(0,a.lm)(),{getFeature:se,isLoading:F}=(0,w.q)(),{trackUsage:b}=(0,a.rS)(),ae=(0,o.v9)(d._),{allowedActions:{canCreate:Q,canDelete:oe}}=(0,a.ss)(ae.settings["review-workflows"]),$=se("review-workflows"),{mutateAsync:re,isLoading:le}=(0,M.useMutation)(async({workflowId:v,stages:B})=>{const{data:{data:N}}=await te(`/admin/review-workflows/workflows/${v}`,{data:B});return N},{onSuccess(){G({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),ie=v=>[...X,...J].find(N=>N.uid===v).info.displayName,de=v=>{K(v)},ce=()=>{K(null)},ue=async()=>{try{const v=await re({workflowId:Z});return await q(),K(null),v}catch(v){return G({type:"warning",message:ne(v)}),null}};return e.useEffect(()=>{!k&&!F&&$?.[A.Ef]&&I?.workflowCount>parseInt($[A.Ef],10)&&x(!0)},[F,k,$,I?.workflowCount,I.workflowsTotal]),e.createElement(e.Fragment,null,e.createElement(C.h4,{primaryAction:Q&&e.createElement(a.Qj,{startIcon:e.createElement(y.Z,null),size:"S",to:"/settings/review-workflows/create",onClick:v=>{$?.[A.Ef]&&I?.workflowCount>=parseInt($[A.Ef],10)?(v.preventDefault(),x(!0)):b("willCreateWorkflow")}},m({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),subtitle:m({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:m({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),e.createElement(C.fC,null,k||_?e.createElement(E.k,{justifyContent:"center"},e.createElement(u.a,null,m({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"}))):e.createElement(i.i,{colCount:3,footer:Q&&e.createElement(n.c,{icon:e.createElement(y.Z,null),onClick:()=>{$?.[A.Ef]&&I?.workflowCount>=parseInt($[A.Ef],10)?x(!0):(U("/settings/review-workflows/create"),b("willCreateWorkflow"))}},m({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),rowCount:1},e.createElement(s.h,null,e.createElement(r.Tr,null,e.createElement(l.Th,null,e.createElement(c.Z,{variant:"sigma"},m({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}))),e.createElement(l.Th,null,e.createElement(c.Z,{variant:"sigma"},m({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}))),e.createElement(l.Th,null,e.createElement(c.Z,{variant:"sigma"},m({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}))),e.createElement(l.Th,null,e.createElement(O.T,null,m({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"}))))),e.createElement(f.p,null,j.map(v=>e.createElement(r.Tr,{...(0,a.X7)({fn(B){B.target.nodeName!=="BUTTON"&&U(`/settings/review-workflows/${v.id}`)}}),key:`workflow-${v.id}`},e.createElement(l.Td,{width:(0,a.Q1)(250)},e.createElement(c.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},v.name)),e.createElement(l.Td,null,e.createElement(c.Z,{textColor:"neutral800"},v.stages.length)),e.createElement(l.Td,null,e.createElement(c.Z,{textColor:"neutral800"},(v?.contentTypes??[]).map(ie).join(", "))),e.createElement(l.Td,null,e.createElement(E.k,{alignItems:"center",justifyContent:"end"},e.createElement(H,{to:`/settings/review-workflows/${v.id}`,"aria-label":m({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:v.name})},e.createElement(P.Z,null)),j.length>1&&oe&&e.createElement(p.h,{"aria-label":m({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:e.createElement(L.Z,null),noBorder:!0,onClick:()=>{de(v.id)}}))))))),e.createElement(a.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:le,isOpen:!!Z,onToggleDialog:ce,onConfirm:ue}),e.createElement(W.fC,{isOpen:ee,onClose:()=>x(!1)},e.createElement(W.Dx,null,m({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(W.uT,null,m({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})))))}function z(){const m=(0,o.v9)(d._);return e.createElement(a.O4,{permissions:m.settings["review-workflows"].main},e.createElement(Y,null))}},89630:(h,g,t)=>{t.d(g,{c:()=>s});var e=t(74081),a=t(72450),o=t(52185),d=t(67393),E=t(85898),u=t(78565);const i=(0,a.ZP)(o.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:r})=>r.colors.primary600};
  }
`,n=(0,a.ZP)(o.x)`
  border-radius: 0 0 ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,s=({children:r,icon:l,...c})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(d.i,{}),(0,e.jsx)(n,{as:"button",background:"primary100",padding:5,...c,children:(0,e.jsxs)(E.k,{children:[(0,e.jsx)(i,{"aria-hidden":!0,background:"primary200",children:l}),(0,e.jsx)(o.x,{paddingLeft:3,children:(0,e.jsx)(u.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:r})})]})})]})},98447:(h,g,t)=>{t.d(g,{Z:()=>o});var e=t(74081);const a=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),o=a},20090:(h,g,t)=>{t.d(g,{G$:()=>a,Gt:()=>l,MG:()=>e,MR:()=>i,T:()=>u,TP:()=>o,Vb:()=>E,Vv:()=>s,ZC:()=>r,gK:()=>d,wG:()=>n});const e="success-light",a="danger-light",o="default",d="tertiary",E="secondary",u="danger",i="success",n="ghost",s=[e,a],r=[o,d,E,u,i,n,...s],l=["S","M","L"]},56954:(h,g,t)=>{t.d(g,{PD:()=>i,sg:()=>d,tB:()=>u,yP:()=>E});var e=t(20090),a=t(19915);const o=n=>n===e.MG||n===e.G$?`${n.substring(0,n.lastIndexOf("-"))}`:n===e.gK?"neutral":n===e.TP||n===e.Vb||e.ZC.every(s=>s!==n)?"primary":`${n}`,d=({theme:n})=>`
    border: 1px solid ${n.colors.neutral200};
    background: ${n.colors.neutral150};
    ${a.Z} {
      color: ${n.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${n.colors.neutral600};
      }
    }
  `,E=({theme:n,variant:s})=>[...e.Vv,e.Vb].includes(s)?`
      background-color: ${n.colors.neutral0};
    `:s===e.gK?`
      background-color: ${n.colors.neutral100};
    `:s===e.wG?`
      background-color: ${n.colors.neutral100};
    `:s===e.TP?`
      border: 1px solid ${n.colors.buttonPrimary500};
      background: ${n.colors.buttonPrimary500};
    `:`
    border: 1px solid ${n.colors[`${o(s)}500`]};
    background: ${n.colors[`${o(s)}500`]};
  `,u=({theme:n,variant:s})=>[...e.Vv,e.Vb].includes(s)?`
      background-color: ${n.colors.neutral0};
      border: 1px solid ${n.colors[`${o(s)}600`]};
      ${a.Z} {
        color: ${n.colors[`${o(s)}600`]};
      }
      svg {
        > g, path {
          fill: ${n.colors[`${o(s)}600`]};
        }
      }
    `:s===e.gK?`
      background-color: ${n.colors.neutral150};
    `:`
    border: 1px solid ${n.colors[`${o(s)}600`]};
    background: ${n.colors[`${o(s)}600`]};
  `,i=({theme:n,variant:s})=>{switch(s){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${n.colors[`${o(s)}200`]};
          background: ${n.colors[`${o(s)}100`]};
          ${a.Z} {
            color: ${n.colors[`${o(s)}700`]};
          }
          svg {
            > g, path {
              fill: ${n.colors[`${o(s)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${n.colors.neutral200};
          background: ${n.colors.neutral0};
          ${a.Z} {
            color: ${n.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${n.colors.neutral800};
            }
          }
        `;case e.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${a.Z} {
          color: ${n.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${n.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${n.colors[`${o(s)}600`]};
          background: ${n.colors[`${o(s)}600`]};
          ${a.Z} {
            color: ${n.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${n.colors.buttonNeutral0};
            }
          }
        `}}},57747:(h,g,t)=>{t.d(g,{Q:()=>r});var e=t(74081),a=t(27279),o=t(72450),d=t(56954),E=t(3086),u=t(18041),i=t(33110),n=t(19915);const s=(0,o.ZP)(E.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${d.sg}
    &:active {
      ${d.sg}
    }
  }

  &:hover {
    ${d.yP}
  }

  &:active {
    ${d.tB}
  }

  ${d.PD}
`,r=a.forwardRef(({variant:l="default",startIcon:c,endIcon:O,disabled:f=!1,children:p,size:y="S",as:P=u.f,...L},D)=>{const M=y==="S"?2:"10px",S=4;return(0,e.jsxs)(s,{ref:D,"aria-disabled":f,size:y,variant:l,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:M,paddingLeft:S,paddingRight:S,paddingTop:M,pointerEvents:f?"none":void 0,...L,as:P||u.f,children:[c&&(0,e.jsx)(i.k,{"aria-hidden":!0,children:c}),(0,e.jsx)(n.Z,{variant:y==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:p}),O&&(0,e.jsx)(i.k,{"aria-hidden":!0,children:O})]})});r.displayName="LinkButton"}}]);
