"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5543],{3086:(F,E,o)=>{o.d(E,{G:()=>i,Y:()=>p});var r=o(74081),n=o(27279),f=o(72450),s=o(19571),c=o(33110);const i=(0,f.ZP)(c.k)`
  > svg {
    height: ${({theme:h})=>h.spaces[3]};
    width: ${({theme:h})=>h.spaces[3]};

    > g,
    path {
      fill: ${({theme:h})=>h.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${s.BF}
`,p=n.forwardRef(({disabled:h,children:g,background:d="neutral0",...m},D)=>(0,r.jsx)(i,{ref:D,"aria-disabled":h,as:"button",type:"button",disabled:h,padding:2,hasRadius:!0,background:d,borderColor:"neutral200",cursor:"pointer",...m,children:g}));p.displayName="BaseButton"},19571:(F,E,o)=>{o.d(E,{BF:()=>s,k3:()=>f});var r=o(72450);const n=c=>({theme:i,size:p})=>i.sizes[c][p],f=(c="&")=>({theme:i,hasError:p=!1})=>(0,r.iv)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${c}:focus-within {
      border: 1px solid ${p?i.colors.danger600:i.colors.primary600};
      box-shadow: ${p?i.colors.danger600:i.colors.primary600} 0px 0px 0px 2px;
    }
  `,s=({theme:c})=>(0,r.iv)`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${c.colors.primary600};
    }
  }
`},82363:(F,E,o)=>{o.d(E,{m:()=>g});var r=o(74081),n=o(72450),f=o(39878),s=o(68263);const c=(0,n.ZP)(s.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:d})=>d}, 1fr);
  ${({theme:d,gap:m})=>(0,f.Z)("gap",m,d)}
`,i=d=>{const{gap:m="0",gridCols:D=12,...u}=d;return(0,r.jsx)(c,{gap:m,gridCols:D,...u})},p=`${232/16}rem`,h=(0,n.ZP)(i)`
  width: ${p};
  background: ${({theme:d})=>d.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:d})=>d.colors.neutral200};
  z-index: 1;
`,g=({ariaLabel:d,...m})=>(0,r.jsx)(h,{"aria-label":d,as:"nav",...m})},78045:(F,E,o)=>{o.d(E,{p:()=>ce});var r=o(74081),n=o(27279),f=o(89577),s=o(72450);const c={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};var i=o(73777);const p=e=>{const a=(0,n.useRef)();return(0,n.useEffect)(()=>{a.current=e}),a.current};var h=o(61696),g=o(68263);const d=e=>(0,r.jsx)("form",{...e,role:"search"});var m=o(85305);function D(e,a){typeof e=="function"?e(a):e!=null&&(e.current=a)}function u(...e){return a=>e.forEach(l=>D(l,a))}function O(...e){return t.useCallback(u(...e),e)}var b=o(19571);const M=(0,n.createContext)({id:"",required:!1}),B=()=>(0,n.useContext)(M);var C=o(33110);const Z={S:6.5,M:10.5},w=(0,n.forwardRef)(({endAction:e,startAction:a,disabled:l=!1,onChange:x,size:y="M",...P},j)=>{const{id:v,error:R,hint:$,name:L,required:T}=B();let A;R?A=`${v}-error`:$&&(A=`${v}-hint`);const I=!!R,S=N=>{!l&&x&&x(N)};return(0,r.jsxs)(U,{justifyContent:"space-between",hasError:I,disabled:l,children:[a?(0,r.jsx)(g.x,{paddingLeft:3,paddingRight:2,children:a}):null,(0,r.jsx)(K,{id:v,name:L,ref:j,"aria-describedby":A,"aria-invalid":I,"aria-disabled":l,disabled:l,"data-disabled":l?"":void 0,hasLeftAction:!!a,hasRightAction:!!e,onChange:S,"aria-required":T,$size:y,...P}),e?(0,r.jsx)(g.x,{paddingLeft:2,paddingRight:3,children:e}):null]})}),K=s.ZP.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-bottom: ${({$size:e})=>`${Z[e]/16}rem`};
  padding-left: ${({theme:e,hasLeftAction:a})=>a?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:a})=>a?0:e.spaces[4]};
  padding-top: ${({$size:e})=>`${Z[e]/16}rem`};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,U=(0,s.ZP)(C.k)`
  border: 1px solid ${({theme:e,hasError:a})=>a?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  ${(0,b.k3)()}

  ${({theme:e,disabled:a})=>a?(0,s.iv)`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0}
`;var _=o(30249);const k=(0,s.ZP)(C.k)`
  font-size: 1.6rem;
  padding: 0;
`,V=(0,n.forwardRef)(({label:e,children:a,...l},x)=>(0,r.jsxs)(k,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...l,as:"button",ref:x,children:[(0,r.jsx)(_.T,{as:"span",children:e}),(0,n.cloneElement)(a,{"aria-hidden":!0,focusable:!1})]})),J=(0,n.forwardRef)(({children:e,name:a,error:l,hint:x,id:y,required:P=!1,...j},v)=>{const R=(0,i.M)(y),$=(0,n.useMemo)(()=>({name:a,id:R,error:l,hint:x,required:P}),[l,R,x,a,P]);return(0,r.jsx)(g.x,{ref:v,...j,children:(0,r.jsx)(M.Provider,{value:$,children:e})})}),X="[@strapi/design-system]:",Q=e=>{const a=e;let l=!1;if(typeof a!="function")throw new TypeError(`${X} once requires a function parameter`);return(...x)=>{l||(a(...x),l=!0)}};var z=o(19915);const q=Q(console.warn),ee=(0,n.forwardRef)(({children:e,action:a,required:l,...x},y)=>{const{id:P,required:j}=B(),v=j||l;return l!==void 0&&q('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,r.jsxs)(re,{ref:y,variant:"pi",textColor:"neutral800",htmlFor:P,fontWeight:"bold",as:"label",...x,children:[e,v&&(0,r.jsx)(te,{textColor:"danger600",children:"*"}),a&&(0,r.jsx)(oe,{marginLeft:1,children:a})]})}),re=(0,s.ZP)(z.Z)`
  display: flex;
  align-items: center;
`,te=(0,s.ZP)(z.Z)`
  line-height: 0;
`,oe=(0,s.ZP)(C.k)`
  line-height: 0;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,ae=(0,s.ZP)(m.Z)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,H=(0,s.ZP)(f.Z)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,ne=s.ZP.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${H} {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }

  ${U} {
    border: 1px solid transparent;
  }

  ${(0,b.k3)(U)}
`,se=(0,n.forwardRef)(({name:e,size:a="M",children:l,value:x="",onClear:y,clearLabel:P,...j},v)=>{const R=(0,n.useRef)(null),$=x.length>0,L=A=>{y(A),R.current.focus()},T=u(v,R);return(0,r.jsx)(ne,{children:(0,r.jsxs)(J,{name:e,children:[(0,r.jsx)(_.T,{children:(0,r.jsx)(ee,{children:l})}),(0,r.jsx)(w,{ref:T,value:x,startAction:(0,r.jsx)(H,{"aria-hidden":!0}),size:a,endAction:$?(0,r.jsx)(V,{label:P,onClick:L,children:(0,r.jsx)(ae,{})}):void 0,...j})]})})});var le=o(39631),ie=o(3086);const de=n.forwardRef(({label:e,background:a,borderWidth:l,noBorder:x=!1,children:y,icon:P,disabled:j=!1,onClick:v,"aria-label":R,...$},L)=>{const T=(0,r.jsxs)(G,{"aria-disabled":j,background:j?"neutral150":a,borderWidth:x?0:l,justifyContent:"center",height:"2rem",width:"2rem",...$,ref:L,onClick:A=>{!j&&v&&v(A)},children:[(0,r.jsx)(_.T,{as:"span",children:e??R}),n.cloneElement(P||y,{"aria-hidden":!0,focusable:!1})]});return e?(0,r.jsx)(le.u,{label:e,children:T}):T}),G=(0,s.ZP)(ie.Y)`
  svg {
    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }

  &:hover {
    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }

  &:active {
    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral400};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
`,xe=(0,s.ZP)(C.k)`
  & span:first-child button {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${G} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:e})=>e.colors.neutral150};
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral600};
        }
      }
    }
  }
`,Y=(0,s.ZP)(h.i)`
  width: ${24/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`,ce=({as:e="h2",label:a,searchLabel:l="",searchable:x=!1,onChange:y=()=>{},value:P="",onClear:j=()=>{},onSubmit:v=()=>{},id:R})=>{const[$,L]=(0,n.useState)(!1),T=p($),A=(0,i.M)(R),I=(0,n.useRef)(void 0),S=(0,n.useRef)(void 0);(0,n.useEffect)(()=>{$&&I.current&&I.current.focus(),T&&!$&&S.current&&S.current.focus()},[$,T]);const N=()=>{L(W=>!W)},he=W=>{j(W),I.current.focus()},ue=W=>{W.relatedTarget?.id!==A&&L(!1)},pe=W=>{W.key===c.ESCAPE&&L(!1)};return $?(0,r.jsxs)(g.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,r.jsx)(d,{children:(0,r.jsx)(se,{name:"searchbar",value:P,onChange:y,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:pe,ref:I,onBlur:ue,onClear:he,onSubmit:v,clearLabel:"Clear",size:"S",children:l})}),(0,r.jsx)(g.x,{paddingLeft:2,paddingTop:4,children:(0,r.jsx)(Y,{})})]}):(0,r.jsxs)(g.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,r.jsxs)(C.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,r.jsx)(z.Z,{variant:"beta",as:e,children:a}),x&&(0,r.jsx)(de,{ref:S,onClick:N,label:l,icon:(0,r.jsx)(f.Z,{})})]}),(0,r.jsx)(g.x,{paddingTop:4,children:(0,r.jsx)(Y,{})})]})}},35290:(F,E,o)=>{o.d(E,{E:()=>D});var r=o(74081),n=o(27279),f=o(1939),s=o(72450),c=o(68263),i=o(19915),p=o(33110),h=o(18041);const g=(0,s.ZP)(c.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:u})=>u.colors.neutral800};
  svg > * {
    fill: ${({theme:u})=>u.colors.neutral600};
  }

  &.active {
    ${({theme:u})=>`
      background-color: ${u.colors.primary100};
      border-right: 2px solid ${u.colors.primary600};
      svg > * {
        fill: ${u.colors.primary700};
      }
      ${i.Z} {
        color: ${u.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,d=(0,s.ZP)(f.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:u,$active:O})=>O?u.colors.primary600:u.colors.neutral600};
  }
`,m=s.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,D=n.forwardRef(({children:u,icon:O=null,withBullet:b=!1,as:M=h.f,isSubSectionChild:B=!1,...C},Z)=>(0,r.jsxs)(g,{as:M,icon:O,background:"neutral100",paddingLeft:B?9:7,paddingBottom:2,paddingTop:2,ref:Z,...C,children:[(0,r.jsxs)(p.k,{children:[O?(0,r.jsx)(m,{children:O}):(0,r.jsx)(d,{}),(0,r.jsx)(c.x,{paddingLeft:2,children:(0,r.jsx)(i.Z,{as:"span",children:u})})]}),b&&(0,r.jsx)(c.x,{as:p.k,paddingRight:4,children:(0,r.jsx)(d,{$active:!0})})]}))},13617:(F,E,o)=>{o.d(E,{D:()=>O});var r=o(74081),n=o(27279),f=o(72450),s=o(3494),c=o(33110),i=o(68263),p=o(19915);const h=(0,f.ZP)(c.k)`
  border: none;
  padding: 0;
  background: transparent;
`,g=f.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:b})=>b?"0deg":"180deg"});
`,d=({collapsable:b=!1,label:M,onClick:B=()=>{},ariaExpanded:C,ariaControls:Z})=>b?(0,r.jsxs)(h,{as:"button",onClick:B,"aria-expanded":C,"aria-controls":Z,textAlign:"left",children:[(0,r.jsx)(i.x,{paddingRight:1,children:(0,r.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:M})}),b&&(0,r.jsx)(g,{rotated:C,children:(0,r.jsx)(s.Z,{"aria-hidden":!0})})]}):(0,r.jsx)(h,{children:(0,r.jsx)(i.x,{paddingRight:1,children:(0,r.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:M})})});var m=o(73777),D=o(15050);const u=(0,f.ZP)(i.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:b})=>b.colors.neutral500};
    }
  }
`,O=({collapsable:b=!1,label:M,badgeLabel:B,children:C,id:Z})=>{const[w,K]=(0,n.useState)(!0),U=(0,m.M)(Z);return(0,r.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,r.jsx)(u,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,r.jsxs)(i.x,{position:"relative",paddingRight:B?6:0,children:[(0,r.jsx)(d,{onClick:()=>{K(_=>!_)},ariaExpanded:w,ariaControls:U,collapsable:b,label:M}),B&&(0,r.jsx)(D.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:B})]})}),(!b||w)&&(0,r.jsx)("ol",{id:U,children:n.Children.map(C,(_,k)=>(0,r.jsx)("li",{children:_},k))})]})}},82018:(F,E,o)=>{o.d(E,{Z:()=>c});var r=o(74081),n=o(27279),f=o(68263),s=o(33110);const c=({children:i,spacing:p=2,horizontal:h=!1,...g})=>(0,r.jsx)(f.x,{paddingTop:2,paddingBottom:4,children:(0,r.jsx)(s.k,{as:"ol",gap:p,direction:h?"row":"column",alignItems:h?"center":"stretch",...g,children:n.Children.map(i,(d,m)=>(0,r.jsx)("li",{children:d},m))})})}}]);
