(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[7642],{71728:(_,u,o)=>{var r=o(86040),n=/^\s+/;function e(d){return d&&d.slice(0,r(d)+1).replace(n,"")}_.exports=e},86040:_=>{var u=/\s/;function o(r){for(var n=r.length;n--&&u.test(r.charAt(n)););return n}_.exports=o},86961:(_,u,o)=>{var r=o(13578),n=o(27138),e="[object Boolean]";function d(m){return m===!0||m===!1||n(m)&&r(m)==e}_.exports=d},92249:(_,u,o)=>{var r=o(37997);function n(e){return r(e)&&e!=+e}_.exports=n},37997:(_,u,o)=>{var r=o(13578),n=o(27138),e="[object Number]";function d(m){return typeof m=="number"||n(m)&&r(m)==e}_.exports=d},51527:(_,u,o)=>{var r=o(71728),n=o(3243),e=o(85194),d=0/0,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,b=/^0o[0-7]+$/i,t=parseInt;function i(a){if(typeof a=="number")return a;if(e(a))return d;if(n(a)){var f=typeof a.valueOf=="function"?a.valueOf():a;a=n(f)?f+"":f}if(typeof a!="string")return a===0?a:+a;a=r(a);var B=p.test(a);return B||b.test(a)?t(a.slice(2),B?2:8):m.test(a)?d:+a}_.exports=i},83337:(_,u,o)=>{"use strict";o.d(u,{U:()=>B,y:()=>a});var r=o(74081),n=o(27279),e=o(72450),d=o(52179),m=o(21837),p=o(78565),b=o(85898),t=o(52185);const i=({theme:v,expanded:l,variant:$,disabled:P,error:M})=>M?`1px solid ${v.colors.danger600} !important`:P?`1px solid ${v.colors.neutral150}`:l?`1px solid ${v.colors.primary600}`:$==="primary"?`1px solid ${v.colors.neutral0}`:`1px solid ${v.colors.neutral100}`,a=(0,e.ZP)(p.Z)``,f=(0,e.ZP)(t.x)`
  border: ${i};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:v})=>v.colors.primary600};

    ${a} {
      color: ${({theme:v,expanded:l})=>l?void 0:v.colors.primary700};
    }

    ${p.Z} {
      color: ${({theme:v,expanded:l})=>l?void 0:v.colors.primary600};
    }

    & > ${b.k} {
      background: ${({theme:v})=>v.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:v})=>v.colors.primary200};
    }
  }
`,B=({children:v,disabled:l=!1,error:$,expanded:P=!1,hasErrorMessage:M=!0,id:w,onToggle:Z,toggle:L,size:K="M",variant:T="primary",shadow:W})=>{const A=(0,m.M)(w),U=n.useMemo(()=>({expanded:P,onToggle:Z,toggle:L,id:A,size:K,variant:T,disabled:l}),[l,P,A,Z,K,L,T]);return(0,r.jsxs)(d.S.Provider,{value:U,children:[(0,r.jsx)(f,{"data-strapi-expanded":P,disabled:l,"aria-disabled":l,expanded:P,hasRadius:!0,variant:T,error:$,shadow:W,children:v}),$&&M&&(0,r.jsx)(t.x,{paddingTop:1,children:(0,r.jsx)(p.Z,{variant:"pi",textColor:"danger600",children:$})})]})}},82336:(_,u,o)=>{"use strict";o.d(u,{v:()=>d});var r=o(74081),n=o(52179),e=o(52185);const d=({children:m,...p})=>{const{expanded:b,id:t}=(0,n.A)();if(!b)return null;const i=`accordion-content-${t}`,a=`accordion-label-${t}`,f=`accordion-desc-${t}`;return(0,r.jsx)(e.x,{role:"region",id:i,"aria-labelledby":a,"aria-describedby":f,...p,children:m})}},52179:(_,u,o)=>{"use strict";o.d(u,{A:()=>e,S:()=>n});var r=o(27279);const n=(0,r.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),e=()=>(0,r.useContext)(n)},3408:(_,u,o)=>{"use strict";o.d(u,{B:()=>v});var r=o(74081),n=o(3494),e=o(72450),d=o(83337),m=o(52179);const p=({expanded:l,disabled:$,variant:P})=>{let M="neutral100";return l?M="primary100":$?M="neutral150":P==="primary"&&(M="neutral0"),M};var b=o(40810),t=o(57074),i=o(85898),a=o(78565);const f=(0,e.ZP)(b.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:l,expanded:$})=>$?l.colors.primary600:l.colors.neutral500};
    }
  }
`,B=(0,e.ZP)(i.k)`
  min-height: ${({theme:l,size:$})=>l.sizes.accordions[$]};
  border-radius: ${({theme:l,expanded:$})=>$?`${l.borderRadius} ${l.borderRadius} 0 0`:l.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:l})=>l.colors.primary600};
      }
    }
  }
`,v=({title:l,description:$,as:P="span",togglePosition:M="right",action:w,...Z})=>{const{onToggle:L,toggle:K,expanded:T,id:W,size:A,variant:U,disabled:k}=(0,m.A)(),Q=`accordion-content-${W}`,z=`accordion-label-${W}`,q=`accordion-desc-${W}`,S=A==="M"?6:4,F=A==="M"?S:S-2,rr=p({expanded:T,disabled:k,variant:U}),or={as:P,fontWeight:A==="S"?"bold":void 0,id:z,textColor:T?"primary600":"neutral700",ellipsis:!0,variant:A==="M"?"delta":void 0},tr=T?"primary600":"neutral600",er=T?"primary200":"neutral200",G=A==="M"?`${32/16}rem`:`${24/16}rem`,V=()=>{k||(K&&!L?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),K()):L&&L())},H=(0,r.jsx)(i.k,{justifyContent:"center",borderRadius:"50%",height:G,width:G,transform:T?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:er,cursor:k?"not-allowed":"pointer",onClick:V,shrink:0,children:(0,r.jsx)(t.J,{as:n.Z,width:A==="M"?`${11/16}rem`:`${8/16}rem`,color:T?"primary600":"neutral600"})});return(0,r.jsx)(B,{paddingBottom:F,paddingLeft:S,paddingRight:S,paddingTop:F,background:rr,expanded:T,size:A,justifyContent:"space-between",cursor:k?"not-allowed":"",children:(0,r.jsxs)(i.k,{gap:3,flex:1,maxWidth:"100%",children:[M==="left"&&H,(0,r.jsx)(f,{onClick:V,"aria-disabled":k,"aria-expanded":T,"aria-controls":Q,"aria-labelledby":z,"data-strapi-accordion-toggle":!0,expanded:T,type:"button",flex:1,minWidth:0,...Z,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.y,{...or,children:l}),$&&(0,r.jsx)(a.Z,{as:"p",id:q,textColor:tr,children:$})]})}),M==="right"&&(0,r.jsxs)(i.k,{gap:3,children:[H,w]}),M==="left"&&w]})})}},98447:(_,u,o)=>{"use strict";o.d(u,{Z:()=>e});var r=o(74081);const n=d=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,r.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),e=n},67216:(_,u,o)=>{"use strict";o.d(u,{Z:()=>e});var r=o(74081);const n=d=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,r.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,r.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,r.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,r.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,r.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,r.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,r.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),e=n},96112:(_,u,o)=>{"use strict";o.d(u,{Z:()=>e});var r=o(74081);const n=d=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,r.jsx)("path",{fill:"#32324D",d:"M3.5 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"})}),e=n},73576:(_,u,o)=>{"use strict";o.d(u,{Z:()=>e});var r=o(74081);const n=d=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,r.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,r.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),e=n},20090:(_,u,o)=>{"use strict";o.d(u,{G$:()=>n,Gt:()=>f,MG:()=>r,MR:()=>b,T:()=>p,TP:()=>e,Vb:()=>m,Vv:()=>i,ZC:()=>a,gK:()=>d,wG:()=>t});const r="success-light",n="danger-light",e="default",d="tertiary",m="secondary",p="danger",b="success",t="ghost",i=[r,n],a=[e,d,m,p,b,t,...i],f=["S","M","L"]},56954:(_,u,o)=>{"use strict";o.d(u,{PD:()=>b,sg:()=>d,tB:()=>p,yP:()=>m});var r=o(20090),n=o(19915);const e=t=>t===r.MG||t===r.G$?`${t.substring(0,t.lastIndexOf("-"))}`:t===r.gK?"neutral":t===r.TP||t===r.Vb||r.ZC.every(i=>i!==t)?"primary":`${t}`,d=({theme:t})=>`
    border: 1px solid ${t.colors.neutral200};
    background: ${t.colors.neutral150};
    ${n.Z} {
      color: ${t.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${t.colors.neutral600};
      }
    }
  `,m=({theme:t,variant:i})=>[...r.Vv,r.Vb].includes(i)?`
      background-color: ${t.colors.neutral0};
    `:i===r.gK?`
      background-color: ${t.colors.neutral100};
    `:i===r.wG?`
      background-color: ${t.colors.neutral100};
    `:i===r.TP?`
      border: 1px solid ${t.colors.buttonPrimary500};
      background: ${t.colors.buttonPrimary500};
    `:`
    border: 1px solid ${t.colors[`${e(i)}500`]};
    background: ${t.colors[`${e(i)}500`]};
  `,p=({theme:t,variant:i})=>[...r.Vv,r.Vb].includes(i)?`
      background-color: ${t.colors.neutral0};
      border: 1px solid ${t.colors[`${e(i)}600`]};
      ${n.Z} {
        color: ${t.colors[`${e(i)}600`]};
      }
      svg {
        > g, path {
          fill: ${t.colors[`${e(i)}600`]};
        }
      }
    `:i===r.gK?`
      background-color: ${t.colors.neutral150};
    `:`
    border: 1px solid ${t.colors[`${e(i)}600`]};
    background: ${t.colors[`${e(i)}600`]};
  `,b=({theme:t,variant:i})=>{switch(i){case r.G$:case r.MG:case r.Vb:return`
          border: 1px solid ${t.colors[`${e(i)}200`]};
          background: ${t.colors[`${e(i)}100`]};
          ${n.Z} {
            color: ${t.colors[`${e(i)}700`]};
          }
          svg {
            > g, path {
              fill: ${t.colors[`${e(i)}700`]};
            }
          }
        `;case r.gK:return`
          border: 1px solid ${t.colors.neutral200};
          background: ${t.colors.neutral0};
          ${n.Z} {
            color: ${t.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${t.colors.neutral800};
            }
          }
        `;case r.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${n.Z} {
          color: ${t.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${t.colors.neutral500};
          }
        }
      `;case r.MR:case r.T:return`
          border: 1px solid ${t.colors[`${e(i)}600`]};
          background: ${t.colors[`${e(i)}600`]};
          ${n.Z} {
            color: ${t.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${t.colors.buttonNeutral0};
            }
          }
        `}}},23614:(_,u,o)=>{"use strict";o.d(u,{r:()=>i});var r=o(74081),n=o(27279),e=o(34120),d=o(72450),m=o(19571),p=o(18041),b=o(19915);const t=(0,d.ZP)(p.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:a})=>a.spaces[2]};
  pointer-events: ${({disabled:a})=>a?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:a,theme:f})=>a?f.colors.neutral600:f.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:a})=>a.colors.primary500};
  }

  &:active {
    color: ${({theme:a})=>a.colors.primary700};
  }

  ${m.BF};
`,i=n.forwardRef(({children:a,href:f,disabled:B=!1,startIcon:v,endIcon:l,isExternal:$=!0,...P},M)=>(0,r.jsxs)(t,{ref:M,href:f,disabled:B,isExternal:$,...P,children:[v,(0,r.jsx)(b.Z,{textColor:B?"neutral600":"primary600",children:a}),l,f&&!l&&$&&(0,r.jsx)(e.Z,{})]}));i.displayName="Link"},56242:(_,u,o)=>{"use strict";o.d(u,{VY:()=>G,ck:()=>V,__:()=>H,fC:()=>tr,tu:()=>cr,rl:()=>lr,fF:()=>dr,xz:()=>er});var r=o(74081),n=o(27279),e=o(42803),d=o(3494),m=o(61043),p=o(72450),b=o(4032),t=o(23614),i=o(30085),a=o(20090),f=o(56954),B=o(3086),v=o(68263),l=o(19915),$=o(33110);const P=(0,p.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,M=(0,p.ZP)(i.Z)`
  animation: ${P} 2s infinite linear;
  will-change: transform;
`,w=(0,p.ZP)(B.Y)`
  height: ${({theme:c,size:E})=>c.sizes.button[E]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${f.sg}

    &:active {
      ${f.sg}
    }
  }

  &:hover {
    ${f.yP}
  }

  &:active {
    ${f.tB}
  }

  ${f.PD}
`,Z=n.forwardRef(({variant:c=a.TP,startIcon:E,endIcon:D,disabled:N=!1,children:sr,onClick:Y,size:X=a.Gt[0],loading:nr=!1,fullWidth:J=!1,...hr},ur)=>{const ar=N||nr;return(0,r.jsxs)(w,{ref:ur,"aria-disabled":ar,disabled:ar,size:X,variant:c,onClick:pr=>{!ar&&Y&&Y(pr)},fullWidth:J,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:J,justifyContent:J?"center":void 0,paddingLeft:4,paddingRight:4,width:J?"100%":void 0,...hr,children:[(E||nr)&&(0,r.jsx)(v.x,{"aria-hidden":!0,children:nr?(0,r.jsx)(M,{}):E}),(0,r.jsx)(l.Z,{variant:X==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:sr}),D&&(0,r.jsx)($.k,{"aria-hidden":!0,children:D})]})});Z.displayName="Button";const L=e.fC,K=(0,n.forwardRef)(({size:c,endIcon:E=(0,r.jsx)(d.Z,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...D},N)=>(0,r.jsx)(e.xz,{asChild:!0,children:(0,r.jsx)(Z,{ref:N,type:"button",variant:"ghost",endIcon:E,paddingTop:c==="S"?1:2,paddingBottom:c==="S"?1:2,paddingLeft:c==="S"?3:4,paddingRight:c==="S"?3:4,...D})})),T=(0,n.forwardRef)(({children:c,intersectionId:E,popoverPlacement:D="bottom-start",...N},sr)=>{const[Y,X]=D.split("-");return(0,r.jsx)(e.Uv,{children:(0,r.jsx)(e.VY,{align:X,side:Y,loop:!0,asChild:!0,children:(0,r.jsxs)(W,{ref:sr,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...N,children:[c,(0,r.jsx)(v.x,{id:E,width:"100%",height:"1px"})]})})})}),W=(0,p.ZP)($.k)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,A=({onSelect:c,disabled:E=!1,...D})=>(0,r.jsx)(e.ck,{asChild:!0,onSelect:c,disabled:E,children:D.isLink||D.isExternal?(0,r.jsx)(Q,{color:"neutral800",...D,isExternal:D.isExternal??!1,children:(0,r.jsx)(l.Z,{children:D.children})}):(0,r.jsx)(k,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...D,children:(0,r.jsx)(l.Z,{children:D.children})})}),U=({theme:c})=>(0,p.iv)`
  text-align: left;
  width: 100%;
  border-radius: ${c.borderRadius};
  padding: ${c.spaces[2]} ${c.spaces[4]};

  ${l.Z} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${l.Z} {
      color: ${c.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${c.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,k=(0,p.ZP)($.k)`
  ${U}
`,Q=(0,p.ZP)(t.r)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:c,color:E})=>(0,b.$)(c.colors,E,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${U}
`,z=(0,n.forwardRef)((c,E)=>(0,r.jsx)(e.__,{asChild:!0,children:(0,r.jsx)(q,{ref:E,variant:"sigma",textColor:"neutral600",...c})})),q=(0,p.ZP)(l.Z)`
  padding: ${({theme:c})=>c.spaces[2]} ${({theme:c})=>c.spaces[4]};
`,S=e.Tr,F=(0,n.forwardRef)(({disabled:c=!1,...E},D)=>(0,r.jsx)(e.fF,{asChild:!0,disabled:c,children:(0,r.jsxs)(rr,{ref:D,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...E,children:[(0,r.jsx)(l.Z,{children:E.children}),(0,r.jsx)(ir,{height:12,width:12})]})})),rr=(0,p.ZP)(k)`
  &[data-state='open'] {
    background-color: ${({theme:c})=>c.colors.primary100};
  }
`,ir=(0,p.ZP)(m.Z)`
  path {
    fill: ${({theme:c})=>c.colors.neutral500};
  }
`,or=(0,n.forwardRef)((c,E)=>(0,r.jsx)(e.Uv,{children:(0,r.jsx)(e.tu,{sideOffset:8,asChild:!0,children:(0,r.jsx)(W,{ref:E,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...c})})})),tr=L,er=K,G=T,V=A,H=z,lr=S,dr=F,cr=or},7809:(_,u,o)=>{"use strict";o.d(u,{sN:()=>m});var r=o(74081),n=o(27279),e=o(56242);const d=({children:p,onOpen:b,onClose:t,popoverPlacement:i,onReachEnd:a,...f})=>{const B=h(null),[v,l]=g(!1),$=Z=>{a&&a(Z)},P=Z=>{Z&&typeof b=="function"?b():!Z&&typeof t=="function"&&t(),l(Z)},M=y(),w=`intersection-${j(M)}`;return O(B,$,{selectorToWatch:`#${w}`,skipWhen:!v}),I(x,{onOpenChange:P,children:[s(R,{...f,children:f.label}),s(C,{intersectionId:w,popoverPlacement:i,children:p})]})},m=e.ck}}]);
