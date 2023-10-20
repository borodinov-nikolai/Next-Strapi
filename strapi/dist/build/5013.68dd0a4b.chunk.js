"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5013],{75021:(C,r,t)=>{t.d(r,{q:()=>o});var e=t(27279),c=t(56545),i=t(40464);function o({enabled:m}={enabled:!0}){const{get:M}=(0,c.kY)(),{data:l,isError:_,isLoading:E}=(0,i.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:n}}=await M("/admin/license-limit-information");return n},{enabled:m}),s=e.useMemo(()=>l??{},[l]),a=e.useCallback(n=>(s?.features??[]).find(d=>d.name===n)?.options??{},[s?.features]);return{license:s,getFeature:a,isError:_,isLoading:E}}},65013:(C,r,t)=>{t.r(r),t.d(r,{AdminSeatInfoEE:()=>g});var e=t(27279),c=t(49899),i=t(78565),o=t(85898),m=t(62750),M=t(57074),l=t(23614),_=t(56545),E=t(23634),s=t(34120),a=t(61020),n=t(49402),O=t(36364),d=t(75021);const D="https://cloud.strapi.io/profile/billing",L="https://strapi.io/billing/request-seats",g=()=>{const{formatMessage:P}=(0,a.Z)(),v=(0,n.v9)(O._),{isLoading:u,allowedActions:{canRead:A,canCreate:B,canUpdate:R,canDelete:U}}=(0,_.ss)(v.settings.users),{license:{licenseLimitStatus:T,enforcementUserCount:I,permittedSeats:p,isHostedOnStrapiCloud:f},isError:h,isLoading:W}=(0,d.q)({enabled:!u&&A&&B&&R&&U});return h||(u||W)||!p?null:e.createElement(c.P,{col:6,s:12},e.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},P({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})),e.createElement(o.k,{gap:2},e.createElement(o.k,null,e.createElement(i.Z,{as:"p"},P({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:p,enforcementUserCount:I,text:K=>e.createElement(i.Z,{fontWeight:"semiBold",textColor:I>p?"danger500":null},K)}))),T==="OVER_LIMIT"&&e.createElement(m.u,{description:P({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"})},e.createElement(M.J,{width:`${(0,_.Q1)(14)}rem`,height:`${(0,_.Q1)(14)}rem`,color:"danger500",as:E.Z}))),e.createElement(l.r,{href:f?D:L,isExternal:!0,endIcon:e.createElement(s.Z,null)},P({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:f})))}},23614:(C,r,t)=>{t.d(r,{r:()=>E});var e=t(74081),c=t(27279),i=t(34120),o=t(72450),m=t(19571),M=t(18041),l=t(19915);const _=(0,o.ZP)(M.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:s})=>s.spaces[2]};
  pointer-events: ${({disabled:s})=>s?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:s,theme:a})=>s?a.colors.neutral600:a.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:s})=>s.colors.primary500};
  }

  &:active {
    color: ${({theme:s})=>s.colors.primary700};
  }

  ${m.BF};
`,E=c.forwardRef(({children:s,href:a,disabled:n=!1,startIcon:O,endIcon:d,isExternal:D=!0,...L},g)=>(0,e.jsxs)(_,{ref:g,href:a,disabled:n,isExternal:D,...L,children:[O,(0,e.jsx)(l.Z,{textColor:n?"neutral600":"primary600",children:s}),d,a&&!d&&D&&(0,e.jsx)(i.Z,{})]}));E.displayName="Link"}}]);
