(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5865],{1107:(b,E,t)=>{var a=t(84856),c=t(52593),m=c(a);b.exports=m},92403:(b,E,t)=>{var a=t(1107),c=t(47727);function m(i,l){var y=-1,g=c(i)?Array(i.length):[];return a(i,function(v,S,D){g[++y]=l(v,S,D)}),g}b.exports=m},16429:(b,E,t)=>{var a=t(36393),c=t(82393),m=t(90040),i=t(92403),l=t(63135),y=t(20435),g=t(9998),v=t(51339),S=t(26126);function D(O,p,f){p.length?p=a(p,function(x){return S(x)?function(j){return c(j,x.length===1?x[0]:x)}:x}):p=[v];var d=-1;p=a(p,y(m));var P=i(O,function(x,j,L){var w=a(p,function(C){return C(x)});return{criteria:w,index:++d,value:x}});return l(P,function(x,j){return g(x,j,f)})}b.exports=D},58200:(b,E,t)=>{var a=t(31507),c=t(55164);function m(i,l){return a(i,l,function(y,g){return c(i,g)})}b.exports=m},31507:(b,E,t)=>{var a=t(82393),c=t(67937),m=t(37345);function i(l,y,g){for(var v=-1,S=y.length,D={};++v<S;){var O=y[v],p=a(l,O);g(p,O)&&c(D,m(O,l),p)}return D}b.exports=i},63135:b=>{function E(t,a){var c=t.length;for(t.sort(a);c--;)t[c]=t[c].value;return t}b.exports=E},17654:(b,E,t)=>{var a=t(85194);function c(m,i){if(m!==i){var l=m!==void 0,y=m===null,g=m===m,v=a(m),S=i!==void 0,D=i===null,O=i===i,p=a(i);if(!D&&!p&&!v&&m>i||v&&S&&O&&!D&&!p||y&&S&&O||!l&&O||!g)return 1;if(!y&&!v&&!p&&m<i||p&&l&&g&&!y&&!v||D&&l&&g||!S&&g||!O)return-1}return 0}b.exports=c},9998:(b,E,t)=>{var a=t(17654);function c(m,i,l){for(var y=-1,g=m.criteria,v=i.criteria,S=g.length,D=l.length;++y<S;){var O=a(g[y],v[y]);if(O){if(y>=D)return O;var p=l[y];return O*(p=="desc"?-1:1)}}return m.index-i.index}b.exports=c},52593:(b,E,t)=>{var a=t(47727);function c(m,i){return function(l,y){if(l==null)return l;if(!a(l))return m(l,y);for(var g=l.length,v=i?g:-1,S=Object(l);(i?v--:++v<g)&&y(S[v],v,S)!==!1;);return l}}b.exports=c},25003:(b,E,t)=>{var a=t(62186),c=t(3243);function m(i,l,y,g,v,S){return c(i)&&c(l)&&(S.set(l,i),a(i,l,void 0,m,S),S.delete(l)),i}b.exports=m},75719:(b,E,t)=>{var a=t(51751),c=t(52431),m=t(25003),i=t(2897),l=c(function(y){return y.push(void 0,m),a(i,void 0,y)});b.exports=l},2897:(b,E,t)=>{var a=t(62186),c=t(48205),m=c(function(i,l,y,g){a(i,l,y,g)});b.exports=m},47184:(b,E,t)=>{var a=t(58200),c=t(16065),m=c(function(i,l){return i==null?{}:a(i,l)});b.exports=m},8243:(b,E,t)=>{var a=t(93367),c=t(16429),m=t(52431),i=t(65145),l=m(function(y,g){if(y==null)return[];var v=g.length;return v>1&&i(y,g[0],g[1])?g=[]:v>2&&i(g[0],g[1],g[2])&&(g=[g[0]]),c(y,a(g,1),[])});b.exports=l},42982:(b,E,t)=>{var a=t(83470);function c(m,i){return m==null?!0:a(m,i)}b.exports=c},9217:(b,E,t)=>{"use strict";t.d(E,{Z:()=>ge});var a=t(60832),c=t(27279),m=t(12439),i=t(80174),l=t(74372),y=t(58471),g=t(89651),v=t(20466),S=t(20381);function D(e,u){return Object.keys(e).reduce(function(n,r){return n[r]=(0,l.pi)({timeZone:u},e[r]),n},{})}function O(e,u){var n=Object.keys((0,l.pi)((0,l.pi)({},e),u));return n.reduce(function(r,s){return r[s]=(0,l.pi)((0,l.pi)({},e[s]||{}),u[s]||{}),r},{})}function p(e,u){if(!u)return e;var n=g.C.formats;return(0,l.pi)((0,l.pi)((0,l.pi)({},n),e),{date:O(D(n.date,u),D(e.date||{},u)),time:O(D(n.time,u),D(e.time||{},u))})}var f=function(e,u,n,r,s){var o=e.locale,h=e.formats,T=e.messages,M=e.defaultLocale,N=e.defaultFormats,R=e.fallbackOnEmptyString,U=e.onError,K=e.timeZone,ie=e.defaultRichTextElements;n===void 0&&(n={id:""});var se=n.id,Z=n.defaultMessage;(0,y.kG)(!!se,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var W=String(se),B=T&&Object.prototype.hasOwnProperty.call(T,W)&&T[W];if(Array.isArray(B)&&B.length===1&&B[0].type===S.wD.literal)return B[0].value;if(!r&&B&&typeof B=="string"&&!ie)return B.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=(0,l.pi)((0,l.pi)({},ie),r||{}),h=p(h,K),N=p(N,K),!B){if(R===!1&&B==="")return B;if((!Z||o&&o.toLowerCase()!==M.toLowerCase())&&U(new v.$6(n,o)),Z)try{var X=u.getMessageFormat(Z,M,N,s);return X.format(r)}catch(Y){return U(new v.X9('Error formatting default message for: "'.concat(W,'", rendering default message verbatim'),o,n,Y)),typeof Z=="string"?Z:W}return W}try{var X=u.getMessageFormat(B,o,h,(0,l.pi)({formatters:u},s||{}));return X.format(r)}catch(Y){U(new v.X9('Error formatting message: "'.concat(W,'", using ').concat(Z?"default message":"id"," as fallback."),o,n,Y))}if(Z)try{var X=u.getMessageFormat(Z,M,N,s);return X.format(r)}catch(Y){U(new v.X9('Error formatting the default message for: "'.concat(W,'", rendering message verbatim'),o,n,Y))}return typeof B=="string"?B:typeof Z=="string"?Z:W},d=t(26054),P=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function x(e,u,n){var r=e.locale,s=e.formats,o=e.onError;n===void 0&&(n={});var h=n.format,T=h&&(0,d.TB)(s,"number",h,o)||{},M=(0,d.L6)(n,P,T);return u(r,M)}function j(e,u,n,r){r===void 0&&(r={});try{return x(e,u,r).format(n)}catch(s){e.onError(new v.Qe("Error formatting number.",e.locale,s))}return String(n)}function L(e,u,n,r){r===void 0&&(r={});try{return x(e,u,r).formatToParts(n)}catch(s){e.onError(new v.Qe("Error formatting number.",e.locale,s))}return[]}var w=t(35993),C=["numeric","style"];function F(e,u,n){var r=e.locale,s=e.formats,o=e.onError;n===void 0&&(n={});var h=n.format,T=!!h&&(0,d.TB)(s,"relative",h,o)||{},M=(0,d.L6)(n,C,T);return u(r,M)}function I(e,u,n,r,s){s===void 0&&(s={}),r||(r="second");var o=Intl.RelativeTimeFormat;o||e.onError(new w.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,w.jK.MISSING_INTL_API));try{return F(e,u,s).format(n,r)}catch(h){e.onError(new v.Qe("Error formatting relative time.",e.locale,h))}return String(n)}var A=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function k(e,u,n,r){var s=e.locale,o=e.formats,h=e.onError,T=e.timeZone;r===void 0&&(r={});var M=r.format,N=(0,l.pi)((0,l.pi)({},T&&{timeZone:T}),M&&(0,d.TB)(o,u,M,h)),R=(0,d.L6)(r,A,N);return u==="time"&&!R.hour&&!R.minute&&!R.second&&!R.timeStyle&&!R.dateStyle&&(R=(0,l.pi)((0,l.pi)({},R),{hour:"numeric",minute:"numeric"})),n(s,R)}function z(e,u){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var s=n[0],o=n[1],h=o===void 0?{}:o,T=typeof s=="string"?new Date(s||0):s;try{return k(e,"date",u,h).format(T)}catch(M){e.onError(new v.Qe("Error formatting date.",e.locale,M))}return String(T)}function Q(e,u){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var s=n[0],o=n[1],h=o===void 0?{}:o,T=typeof s=="string"?new Date(s||0):s;try{return k(e,"time",u,h).format(T)}catch(M){e.onError(new v.Qe("Error formatting time.",e.locale,M))}return String(T)}function ee(e,u){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var s=n[0],o=n[1],h=n[2],T=h===void 0?{}:h,M=e.timeZone,N=e.locale,R=e.onError,U=(0,d.L6)(T,A,M?{timeZone:M}:{});try{return u(N,U).formatRange(s,o)}catch(K){R(new v.Qe("Error formatting date time range.",e.locale,K))}return String(s)}function G(e,u){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var s=n[0],o=n[1],h=o===void 0?{}:o,T=typeof s=="string"?new Date(s||0):s;try{return k(e,"date",u,h).formatToParts(T)}catch(M){e.onError(new v.Qe("Error formatting date.",e.locale,M))}return[]}function J(e,u){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var s=n[0],o=n[1],h=o===void 0?{}:o,T=typeof s=="string"?new Date(s||0):s;try{return k(e,"time",u,h).formatToParts(T)}catch(M){e.onError(new v.Qe("Error formatting time.",e.locale,M))}return[]}var V=["type"];function $(e,u,n,r){var s=e.locale,o=e.onError;r===void 0&&(r={}),Intl.PluralRules||o(new w.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,w.jK.MISSING_INTL_API));var h=(0,d.L6)(r,V);try{return u(s,h).select(n)}catch(T){o(new v.Qe("Error formatting plural.",s,T))}return"other"}var _=["type","style"],q=Date.now();function H(e){return"".concat(q,"_").concat(e,"_").concat(q)}function le(e,u,n,r){r===void 0&&(r={});var s=re(e,u,n,r).reduce(function(o,h){var T=h.value;return typeof T!="string"?o.push(T):typeof o[o.length-1]=="string"?o[o.length-1]+=T:o.push(T),o},[]);return s.length===1?s[0]:s.length===0?"":s}function re(e,u,n,r){var s=e.locale,o=e.onError;r===void 0&&(r={});var h=Intl.ListFormat;h||o(new w.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,w.jK.MISSING_INTL_API));var T=(0,d.L6)(r,_);try{var M={},N=n.map(function(R,U){if(typeof R=="object"){var K=H(U);return M[K]=R,K}return String(R)});return u(s,T).formatToParts(N).map(function(R){return R.type==="literal"?R:(0,l.pi)((0,l.pi)({},R),{value:M[R.value]||R.value})})}catch(R){o(new v.Qe("Error formatting list.",s,R))}return n}var ue=["style","type","fallback","languageDisplay"];function ce(e,u,n,r){var s=e.locale,o=e.onError,h=Intl.DisplayNames;h||o(new w.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,w.jK.MISSING_INTL_API));var T=(0,d.L6)(r,ue);try{return u(s,T).of(n)}catch(M){o(new v.Qe("Error formatting display name.",s,M))}}function fe(e){var u=e?e[Object.keys(e)[0]]:void 0;return typeof u=="string"}function me(e){e.onWarn&&e.defaultRichTextElements&&fe(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function de(e,u){var n=(0,d.ax)(u),r=(0,l.pi)((0,l.pi)({},d.Z0),e),s=r.locale,o=r.defaultLocale,h=r.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&h?h(new v.gb('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&h&&h(new v.gb('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(h&&h(new v.OV('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),me(r),(0,l.pi)((0,l.pi)({},r),{formatters:n,formatNumber:j.bind(null,r,n.getNumberFormat),formatNumberToParts:L.bind(null,r,n.getNumberFormat),formatRelativeTime:I.bind(null,r,n.getRelativeTimeFormat),formatDate:z.bind(null,r,n.getDateTimeFormat),formatDateToParts:G.bind(null,r,n.getDateTimeFormat),formatTime:Q.bind(null,r,n.getDateTimeFormat),formatDateTimeRange:ee.bind(null,r,n.getDateTimeFormat),formatTimeToParts:J.bind(null,r,n.getDateTimeFormat),formatPlural:$.bind(null,r,n.getPluralRules),formatMessage:f.bind(null,r,n),$t:f.bind(null,r,n),formatList:le.bind(null,r,n.getListFormat),formatListToParts:re.bind(null,r,n.getListFormat),formatDisplayName:ce.bind(null,r,n.getDisplayNames)})}var pe=t(97340);function te(e){return{locale:e.locale,timeZone:e.timeZone,fallbackOnEmptyString:e.fallbackOnEmptyString,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,onWarn:e.onWarn,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}function ne(e){return e&&Object.keys(e).reduce(function(u,n){var r=e[n];return u[n]=(0,pe.Gt)(r)?(0,i.dt)(r):r,u},{})}var ae=function(e,u,n,r){for(var s=[],o=4;o<arguments.length;o++)s[o-4]=arguments[o];var h=ne(r),T=f.apply(void 0,(0,a.ev)([e,u,n,h],s,!1));return Array.isArray(T)?c.Children.toArray(T):T},oe=function(e,u){var n=e.defaultRichTextElements,r=(0,a._T)(e,["defaultRichTextElements"]),s=ne(n),o=de((0,a.pi)((0,a.pi)((0,a.pi)({},i.Z0),r),{defaultRichTextElements:s}),u),h={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:s};return(0,a.pi)((0,a.pi)({},o),{formatMessage:ae.bind(null,h,o.formatters),$t:ae.bind(null,h,o.formatters)})},ve=function(e){(0,a.ZT)(u,e);function u(){var n=e!==null&&e.apply(this,arguments)||this;return n.cache=(0,d.Sn)(),n.state={cache:n.cache,intl:oe(te(n.props),n.cache),prevConfig:te(n.props)},n}return u.getDerivedStateFromProps=function(n,r){var s=r.prevConfig,o=r.cache,h=te(n);return(0,i.wU)(s,h)?null:{intl:oe(h,o),prevConfig:h}},u.prototype.render=function(){return(0,i.lq)(this.state.intl),c.createElement(m.zt,{value:this.state.intl},this.props.children)},u.displayName="IntlProvider",u.defaultProps=i.Z0,u}(c.PureComponent);const ge=ve},57150:(b,E,t)=>{"use strict";t.d(E,{P1:()=>S});var a="NOT_FOUND";function c(O){var p;return{get:function(d){return p&&O(p.key,d)?p.value:a},put:function(d,P){p={key:d,value:P}},getEntries:function(){return p?[p]:[]},clear:function(){p=void 0}}}function m(O,p){var f=[];function d(L){var w=f.findIndex(function(F){return p(L,F.key)});if(w>-1){var C=f[w];return w>0&&(f.splice(w,1),f.unshift(C)),C.value}return a}function P(L,w){d(L)===a&&(f.unshift({key:L,value:w}),f.length>O&&f.pop())}function x(){return f}function j(){f=[]}return{get:d,put:P,getEntries:x,clear:j}}var i=function(p,f){return p===f};function l(O){return function(f,d){if(f===null||d===null||f.length!==d.length)return!1;for(var P=f.length,x=0;x<P;x++)if(!O(f[x],d[x]))return!1;return!0}}function y(O,p){var f=typeof p=="object"?p:{equalityCheck:p},d=f.equalityCheck,P=d===void 0?i:d,x=f.maxSize,j=x===void 0?1:x,L=f.resultEqualityCheck,w=l(P),C=j===1?c(w):m(j,w);function F(){var I=C.get(arguments);if(I===a){if(I=O.apply(null,arguments),L){var A=C.getEntries(),k=A.find(function(z){return L(z.value,I)});k&&(I=k.value)}C.put(arguments,I)}return I}return F.clearCache=function(){return C.clear()},F}function g(O){var p=Array.isArray(O[0])?O[0]:O;if(!p.every(function(d){return typeof d=="function"})){var f=p.map(function(d){return typeof d=="function"?"function "+(d.name||"unnamed")+"()":typeof d}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+f+"]")}return p}function v(O){for(var p=arguments.length,f=new Array(p>1?p-1:0),d=1;d<p;d++)f[d-1]=arguments[d];var P=function(){for(var j=arguments.length,L=new Array(j),w=0;w<j;w++)L[w]=arguments[w];var C=0,F,I={memoizeOptions:void 0},A=L.pop();if(typeof A=="object"&&(I=A,A=L.pop()),typeof A!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof A+"]");var k=I,z=k.memoizeOptions,Q=z===void 0?f:z,ee=Array.isArray(Q)?Q:[Q],G=g(L),J=O.apply(void 0,[function(){return C++,A.apply(null,arguments)}].concat(ee)),V=O(function(){for(var _=[],q=G.length,H=0;H<q;H++)_.push(G[H].apply(null,arguments));return F=J.apply(null,_),F});return Object.assign(V,{resultFunc:A,memoizedResultFunc:J,dependencies:G,lastResult:function(){return F},recomputations:function(){return C},resetRecomputations:function(){return C=0}}),V};return P}var S=v(y),D=function(p,f){if(f===void 0&&(f=S),typeof p!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof p));var d=Object.keys(p),P=f(d.map(function(x){return p[x]}),function(){for(var x=arguments.length,j=new Array(x),L=0;L<x;L++)j[L]=arguments[L];return j.reduce(function(w,C,F){return w[d[F]]=C,w},{})});return P}},49969:(b,E,t)=>{"use strict";t.d(E,{D:()=>m});var a=t(74081),c=t(52185);const m=({children:i})=>(0,a.jsx)(c.x,{paddingLeft:10,paddingRight:10,children:i})},34041:(b,E,t)=>{"use strict";t.d(E,{T:()=>D});var a=t(74081),c=t(27279),m=t(72450);const i=f=>{const d=(0,c.useRef)(null),[P,x]=(0,c.useState)(!0),j=([L])=>{x(L.isIntersecting)};return(0,c.useEffect)(()=>{const L=d.current,w=new IntersectionObserver(j,f);return L&&w.observe(d.current),()=>{L&&w.disconnect()}},[d,f]),[d,P]};var l=t(66705);const y=(f,d)=>{const P=(0,l.W)(d);(0,c.useLayoutEffect)(()=>{const x=new ResizeObserver(P);return Array.isArray(f)?f.forEach(j=>{j.current&&x.observe(j.current)}):f.current&&x.observe(f.current),()=>{x.disconnect()}},[f,P])};var g=t(52185),v=t(85898),S=t(78565);const D=f=>{const d=(0,c.useRef)(null),[P,x]=(0,c.useState)(null),[j,L]=i({root:null,rootMargin:"0px",threshold:0});return y(j,()=>{j.current&&x(j.current.getBoundingClientRect())}),(0,c.useEffect)(()=>{d.current&&x(d.current.getBoundingClientRect())},[d]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{height:P?.height},ref:j,children:L&&(0,a.jsx)(p,{ref:d,...f})}),!L&&(0,a.jsx)(p,{...f,sticky:!0,width:P?.width})]})};D.displayName="HeaderLayout";const O=(0,m.ZP)(g.x)`
  width: ${({width:f})=>f?`${f/16}rem`:void 0};
  z-index: ${({theme:f})=>f.zIndices[1]};
`,p=c.forwardRef(({navigationAction:f,primaryAction:d,secondaryAction:P,subtitle:x,title:j,sticky:L,width:w,...C},F)=>{const I=typeof x=="string";return L?(0,a.jsx)(O,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:w,"data-strapi-header-sticky":!0,children:(0,a.jsxs)(v.k,{justifyContent:"space-between",children:[(0,a.jsxs)(v.k,{children:[f&&(0,a.jsx)(g.x,{paddingRight:3,children:f}),(0,a.jsxs)(g.x,{children:[(0,a.jsx)(S.Z,{variant:"beta",as:"h1",...C,children:j}),I?(0,a.jsx)(S.Z,{variant:"pi",textColor:"neutral600",children:x}):x]}),P?(0,a.jsx)(g.x,{paddingLeft:4,children:P}):null]}),(0,a.jsx)(v.k,{children:d?(0,a.jsx)(g.x,{paddingLeft:2,children:d}):void 0})]})}):(0,a.jsxs)(g.x,{ref:F,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:f?6:8,background:"neutral100","data-strapi-header":!0,children:[f?(0,a.jsx)(g.x,{paddingBottom:2,children:f}):null,(0,a.jsxs)(v.k,{justifyContent:"space-between",children:[(0,a.jsxs)(v.k,{minWidth:0,children:[(0,a.jsx)(S.Z,{as:"h1",variant:"alpha",...C,children:j}),P?(0,a.jsx)(g.x,{paddingLeft:4,children:P}):null]}),d]}),I?(0,a.jsx)(S.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:x}):x]})})},796:(b,E,t)=>{"use strict";t.d(E,{o:()=>l});var a=t(74081),c=t(72450),m=t(52185);const i=(0,c.ZP)(m.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:y="main-content-title",...g})=>(0,a.jsx)(i,{"aria-labelledby":y,as:"main",id:"main-content",tabIndex:-1,...g})},42582:(b,E,t)=>{"use strict";t.d(E,{z:()=>l});var a=t(74081),c=t(72450),m=t(52185);const i=(0,c.ZP)(m.x)`
  text-decoration: none;

  &:focus {
    left: ${({theme:y})=>y.spaces[3]};
    top: ${({theme:y})=>y.spaces[3]};
  }
`,l=({children:y})=>(0,a.jsx)(i,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",left:"-100%",padding:3,position:"absolute",top:"-100%",hasRadius:!0,zIndex:9999,children:y})},41802:(b,E,t)=>{"use strict";t.d(E,{$:()=>i});const a={color:{alternative100:"#181826",alternative200:"#4a4a6a",alternative500:"#ac73e6",alternative600:"#ac73e6",alternative700:"#e0c1f4",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#181826",danger200:"#4a4a6a",danger500:"#ee5e52",danger600:"#ee5e52",danger700:"#ee5e52",neutral0:"#212134",neutral100:"#181826",neutral1000:"#ffffff",neutral150:"#32324d",neutral200:"#4a4a6a",neutral300:"#666687",neutral400:"#a5a5ba",neutral500:"#c0c0cf",neutral600:"#a5a5ba",neutral700:"#eaeaef",neutral800:"#ffffff",neutral900:"#ffffff",primary100:"#181826",primary200:"#4a4a6a",primary500:"#4945ff",primary600:"#7b79ff",primary700:"#7b79ff",secondary100:"#181826",secondary200:"#4a4a6a",secondary500:"#66b7f1",secondary600:"#66b7f1",secondary700:"#b8e1ff",success100:"#181826",success200:"#4a4a6a",success500:"#5cb176",success600:"#5cb176",success700:"#c6f0c2",warning100:"#181826",warning200:"#4a4a6a",warning500:"#f29d41",warning600:"#f29d41",warning700:"#fae7b9"}},c={shadow:{filterShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",tableShadow:"1px 1px 10px rgba(3, 3, 5, 0.2)"}};var m=t(38297);const i={colors:a.color,shadows:c.shadow,...m.x}},13931:(b,E,t)=>{"use strict";t.d(E,{Z:()=>m});var a=t(74081);const c=i=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:(0,a.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),m=c},18602:(b,E,t)=>{"use strict";t.d(E,{Z:()=>m});var a=t(74081);const c=i=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:(0,a.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),m=c},41720:(b,E,t)=>{"use strict";t.d(E,{Z:()=>m});var a=t(74081);const c=i=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 25 25",...i,children:(0,a.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"m13.58.448 3.177 3.176L18.66 1.72a3.267 3.267 0 1 1 4.62 4.62l-1.904 1.904 3.175 3.175a1.528 1.528 0 0 1 0 2.162l-3.175 3.175L20.2 15.58a3.267 3.267 0 1 0-4.62 4.62l1.177 1.177-3.176 3.176a1.528 1.528 0 0 1-2.162 0l-3.175-3.175-1.902 1.902a3.267 3.267 0 1 1-4.62-4.62l1.902-1.902-3.176-3.176a1.528 1.528 0 0 1 0-2.162l3.176-3.176L4.8 9.42a3.267 3.267 0 0 0 4.62-4.62L8.244 3.623 11.419.448a1.528 1.528 0 0 1 2.162 0Z",clipRule:"evenodd"})}),m=c},51367:(b,E,t)=>{"use strict";t.d(E,{Z:()=>m});var a=t(74081);const c=i=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:(0,a.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.12 3.907c-.025 0-.055-.005-.087-.011a.72.72 0 0 0-.13-.016H5.929l-.27-1.805A2.413 2.413 0 0 0 3.26 0H1.078C.485 0 0 .485 0 1.078c0 .593.485 1.078 1.078 1.078H3.26c.135 0 .243.107.27.242L5.2 13.77a2.954 2.954 0 0 0 2.91 2.506h11.21c1.401 0 2.614-.997 2.91-2.371l1.752-8.757a1.065 1.065 0 0 0-.863-1.24Zm-4.932 13.927a2.8 2.8 0 0 0-2.802 2.802 2.8 2.8 0 0 0 2.802 2.802 2.8 2.8 0 0 0 2.803-2.802c-.027-1.536-1.267-2.802-2.803-2.802Zm-9.646 0a2.786 2.786 0 0 1 2.775 2.667c.081 1.536-1.132 2.83-2.667 2.91h-.054a2.762 2.762 0 0 1-2.749-2.667 2.819 2.819 0 0 1 2.695-2.91Z",clipRule:"evenodd"})}),m=c}}]);
