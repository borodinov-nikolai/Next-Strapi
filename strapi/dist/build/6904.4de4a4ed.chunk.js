(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[6904],{64060:(v,l,t)=>{var s=t(98934);function i(a,c){for(var h=-1,r=c.length,e=Array(r),o=a==null;++h<r;)e[h]=o?void 0:s(a,c[h]);return e}v.exports=i},33812:(v,l,t)=>{var s=t(64060),i=t(16065),a=i(s);v.exports=a},36294:(v,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.isSafari=l.isFirefox=void 0;var s=t(64799);const i=s.memoize(()=>/firefox/i.test(navigator.userAgent));l.isFirefox=i;const a=s.memoize(()=>Boolean(window.safari));l.isSafari=a},81564:(v,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});var s=t(64799);class i{enter(c){const h=this.entered.length,r=e=>this.isNodeInDocument(e)&&(!e.contains||e.contains(c));return this.entered=s.union(this.entered.filter(r),[c]),h===0&&this.entered.length>0}leave(c){const h=this.entered.length;return this.entered=s.without(this.entered.filter(this.isNodeInDocument),c),h>0&&this.entered.length===0}reset(){this.entered=[]}constructor(c){this.entered=[],this.isNodeInDocument=c}}l.EnterLeaveCounter=i},69456:(v,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});var s=t(81564),i=t(36975),a=t(56635),c=e(t(20911)),h=t(71169);function r(f,n,u){return n in f?Object.defineProperty(f,n,{value:u,enumerable:!0,configurable:!0,writable:!0}):f[n]=u,f}function e(f){if(f&&f.__esModule)return f;var n={};if(f!=null){for(var u in f)if(Object.prototype.hasOwnProperty.call(f,u)){var E=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(f,u):{};E.get||E.set?Object.defineProperty(n,u,E):n[u]=f[u]}}return n.default=f,n}function o(f){for(var n=1;n<arguments.length;n++){var u=arguments[n]!=null?arguments[n]:{},E=Object.keys(u);typeof Object.getOwnPropertySymbols=="function"&&(E=E.concat(Object.getOwnPropertySymbols(u).filter(function(g){return Object.getOwnPropertyDescriptor(u,g).enumerable}))),E.forEach(function(g){r(f,g,u[g])})}return f}class m{profile(){var n,u;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((n=this.dragStartSourceIds)===null||n===void 0?void 0:n.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((u=this.dragOverTargetIds)===null||u===void 0?void 0:u.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const n=this.rootElement;if(n!==void 0){if(n.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");n.__isReactDndBackendSetUp=!0,this.addEventListeners(n)}}teardown(){const n=this.rootElement;if(n!==void 0&&(n.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var u;(u=this.window)===null||u===void 0||u.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(n,u,E){return this.sourcePreviewNodeOptions.set(n,E),this.sourcePreviewNodes.set(n,u),()=>{this.sourcePreviewNodes.delete(n),this.sourcePreviewNodeOptions.delete(n)}}connectDragSource(n,u,E){this.sourceNodes.set(n,u),this.sourceNodeOptions.set(n,E);const g=p=>this.handleDragStart(p,n),d=p=>this.handleSelectStart(p);return u.setAttribute("draggable","true"),u.addEventListener("dragstart",g),u.addEventListener("selectstart",d),()=>{this.sourceNodes.delete(n),this.sourceNodeOptions.delete(n),u.removeEventListener("dragstart",g),u.removeEventListener("selectstart",d),u.setAttribute("draggable","false")}}connectDropTarget(n,u){const E=p=>this.handleDragEnter(p,n),g=p=>this.handleDragOver(p,n),d=p=>this.handleDrop(p,n);return u.addEventListener("dragenter",E),u.addEventListener("dragover",g),u.addEventListener("drop",d),()=>{u.removeEventListener("dragenter",E),u.removeEventListener("dragover",g),u.removeEventListener("drop",d)}}addEventListeners(n){n.addEventListener&&(n.addEventListener("dragstart",this.handleTopDragStart),n.addEventListener("dragstart",this.handleTopDragStartCapture,!0),n.addEventListener("dragend",this.handleTopDragEndCapture,!0),n.addEventListener("dragenter",this.handleTopDragEnter),n.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),n.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),n.addEventListener("dragover",this.handleTopDragOver),n.addEventListener("dragover",this.handleTopDragOverCapture,!0),n.addEventListener("drop",this.handleTopDrop),n.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(n){n.removeEventListener&&(n.removeEventListener("dragstart",this.handleTopDragStart),n.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),n.removeEventListener("dragend",this.handleTopDragEndCapture,!0),n.removeEventListener("dragenter",this.handleTopDragEnter),n.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),n.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),n.removeEventListener("dragover",this.handleTopDragOver),n.removeEventListener("dragover",this.handleTopDragOverCapture,!0),n.removeEventListener("drop",this.handleTopDrop),n.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const n=this.monitor.getSourceId(),u=this.sourceNodeOptions.get(n);return o({dropEffect:this.altKeyPressed?"copy":"move"},u||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const n=this.monitor.getSourceId(),u=this.sourcePreviewNodeOptions.get(n);return o({anchorX:.5,anchorY:.5,captureDraggingState:!1},u||{})}isDraggingNativeItem(){const n=this.monitor.getItemType();return Object.keys(c).some(u=>c[u]===n)}beginDragNativeItem(n,u){this.clearCurrentDragSourceNode(),this.currentNativeSource=a.createNativeDragSource(n,u),this.currentNativeHandle=this.registry.addSource(n,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(n){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=n;const u=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var E;return(E=this.rootElement)===null||E===void 0?void 0:E.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},u)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var n;(n=this.window)===null||n===void 0||n.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(n,u){n.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(u))}handleDragEnter(n,u){this.dragEnterTargetIds.unshift(u)}handleDragOver(n,u){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(u)}handleDrop(n,u){this.dropTargetIds.unshift(u)}constructor(n,u,E){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=g=>{const d=this.sourceNodes.get(g);return d&&i.getNodeClientOffset(d)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=g=>Boolean(g&&this.document&&this.document.body&&this.document.body.contains(g)),this.endDragIfSourceWasRemovedFromDOM=()=>{const g=this.currentDragSourceNode;g==null||this.isNodeInDocument(g)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=g=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(g||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=g=>{if(g.defaultPrevented)return;const{dragStartSourceIds:d}=this;this.dragStartSourceIds=null;const p=i.getEventClientOffset(g);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(d||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:p});const{dataTransfer:I}=g,L=a.matchNativeItemType(I);if(this.monitor.isDragging()){if(I&&typeof I.setDragImage=="function"){const _=this.monitor.getSourceId(),T=this.sourceNodes.get(_),O=this.sourcePreviewNodes.get(_)||T;if(O){const{anchorX:P,anchorY:x,offsetX:R,offsetY:$}=this.getCurrentSourcePreviewNodeOptions(),N={anchorX:P,anchorY:x},M={offsetX:R,offsetY:$},A=i.getDragPreviewOffset(T,O,p,N,M);I.setDragImage(O,A.x,A.y)}}try{I?.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(g.target);const{captureDraggingState:D}=this.getCurrentSourcePreviewNodeOptions();D?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(L)this.beginDragNativeItem(L);else{if(I&&!I.types&&(g.target&&!g.target.hasAttribute||!g.target.hasAttribute("draggable")))return;g.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=g=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var d;(d=this.currentNativeSource)===null||d===void 0||d.loadDataTransfer(g.dataTransfer)}if(!this.enterLeaveCounter.enter(g.target)||this.monitor.isDragging())return;const{dataTransfer:I}=g,L=a.matchNativeItemType(I);L&&this.beginDragNativeItem(L,I)},this.handleTopDragEnter=g=>{const{dragEnterTargetIds:d}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=g.altKey,d.length>0&&this.actions.hover(d,{clientOffset:i.getEventClientOffset(g)}),d.some(I=>this.monitor.canDropOnTarget(I))&&(g.preventDefault(),g.dataTransfer&&(g.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=g=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var d;(d=this.currentNativeSource)===null||d===void 0||d.loadDataTransfer(g.dataTransfer)}},this.handleTopDragOver=g=>{const{dragOverTargetIds:d}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){g.preventDefault(),g.dataTransfer&&(g.dataTransfer.dropEffect="none");return}this.altKeyPressed=g.altKey,this.lastClientOffset=i.getEventClientOffset(g),this.scheduleHover(d),(d||[]).some(I=>this.monitor.canDropOnTarget(I))?(g.preventDefault(),g.dataTransfer&&(g.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?g.preventDefault():(g.preventDefault(),g.dataTransfer&&(g.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=g=>{this.isDraggingNativeItem()&&g.preventDefault(),this.enterLeaveCounter.leave(g.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=g=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var d;g.preventDefault(),(d=this.currentNativeSource)===null||d===void 0||d.loadDataTransfer(g.dataTransfer)}else a.matchNativeItemType(g.dataTransfer)&&g.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=g=>{const{dropTargetIds:d}=this;this.dropTargetIds=[],this.actions.hover(d,{clientOffset:i.getEventClientOffset(g)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=g=>{const d=g.target;typeof d.dragDrop=="function"&&(d.tagName==="INPUT"||d.tagName==="SELECT"||d.tagName==="TEXTAREA"||d.isContentEditable||(g.preventDefault(),d.dragDrop()))},this.options=new h.OptionsReader(u,E),this.actions=n.getActions(),this.monitor=n.getMonitor(),this.registry=n.getRegistry(),this.enterLeaveCounter=new s.EnterLeaveCounter(this.isNodeInDocument)}}l.HTML5BackendImpl=m},82272:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});class t{interpolate(i){const{xs:a,ys:c,c1s:h,c2s:r,c3s:e}=this;let o=a.length-1;if(i===a[o])return c[o];let m=0,f=e.length-1,n;for(;m<=f;){n=Math.floor(.5*(m+f));const g=a[n];if(g<i)m=n+1;else if(g>i)f=n-1;else return c[n]}o=Math.max(0,f);const u=i-a[o],E=u*u;return c[o]+h[o]*u+r[o]*E+e[o]*u*E}constructor(i,a){const{length:c}=i,h=[];for(let d=0;d<c;d++)h.push(d);h.sort((d,p)=>i[d]<i[p]?-1:1);const r=[],e=[],o=[];let m,f;for(let d=0;d<c-1;d++)m=i[d+1]-i[d],f=a[d+1]-a[d],e.push(m),r.push(f),o.push(f/m);const n=[o[0]];for(let d=0;d<e.length-1;d++){const p=o[d],I=o[d+1];if(p*I<=0)n.push(0);else{m=e[d];const L=e[d+1],D=m+L;n.push(3*D/((D+L)/p+(D+m)/I))}}n.push(o[o.length-1]);const u=[],E=[];let g;for(let d=0;d<n.length-1;d++){g=o[d];const p=n[d],I=1/e[d],L=p+n[d+1]-g-g;u.push((g-p-L)*I),E.push(L*I*I)}this.xs=i,this.ys=a,this.c1s=n,this.c2s=u,this.c3s=E}}l.MonotonicInterpolant=t},75679:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});class t{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(i=>{Object.defineProperty(this.item,i,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${i}" until the drop event.`),null}})})}loadDataTransfer(i){if(i){const a={};Object.keys(this.config.exposeProperties).forEach(c=>{const h=this.config.exposeProperties[c];h!=null&&(a[c]={value:h(i,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,a)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(i,a){return a===i.getSourceId()}endDrag(){}constructor(i){this.config=i,this.item={},this.initializeExposedProperties()}}l.NativeDragSource=t},28779:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.getDataFromDataTransfer=t;function t(s,i,a){const c=i.reduce((h,r)=>h||s.getData(r),"");return c??a}},56635:(v,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.createNativeDragSource=a,l.matchNativeItemType=c;var s=t(66420),i=t(75679);function a(h,r){const e=s.nativeTypesConfig[h];if(!e)throw new Error(`native type ${h} has no configuration`);const o=new i.NativeDragSource(e);return o.loadDataTransfer(r),o}function c(h){if(!h)return null;const r=Array.prototype.slice.call(h.types||[]);return Object.keys(s.nativeTypesConfig).filter(e=>{const o=s.nativeTypesConfig[e];return o?.matchesTypes?o.matchesTypes.some(m=>r.indexOf(m)>-1):!1})[0]||null}},66420:(v,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.nativeTypesConfig=void 0;var s=a(t(20911)),i=t(28779);function a(h){if(h&&h.__esModule)return h;var r={};if(h!=null){for(var e in h)if(Object.prototype.hasOwnProperty.call(h,e)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(h,e):{};o.get||o.set?Object.defineProperty(r,e,o):r[e]=h[e]}}return r.default=h,r}const c={[s.FILE]:{exposeProperties:{files:h=>Array.prototype.slice.call(h.files),items:h=>h.items,dataTransfer:h=>h},matchesTypes:["Files"]},[s.HTML]:{exposeProperties:{html:(h,r)=>i.getDataFromDataTransfer(h,r,""),dataTransfer:h=>h},matchesTypes:["Html","text/html"]},[s.URL]:{exposeProperties:{urls:(h,r)=>i.getDataFromDataTransfer(h,r,"").split(`
`),dataTransfer:h=>h},matchesTypes:["Url","text/uri-list"]},[s.TEXT]:{exposeProperties:{text:(h,r)=>i.getDataFromDataTransfer(h,r,""),dataTransfer:h=>h},matchesTypes:["Text","text/plain"]}};l.nativeTypesConfig=c},20911:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.HTML=l.TEXT=l.URL=l.FILE=void 0;const t="__NATIVE_FILE__";l.FILE=t;const s="__NATIVE_URL__";l.URL=s;const i="__NATIVE_TEXT__";l.TEXT=i;const a="__NATIVE_HTML__";l.HTML=a},36975:(v,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.getNodeClientOffset=c,l.getEventClientOffset=h,l.getDragPreviewOffset=o;var s=t(36294),i=t(82272);const a=1;function c(m){const f=m.nodeType===a?m:m.parentElement;if(!f)return null;const{top:n,left:u}=f.getBoundingClientRect();return{x:u,y:n}}function h(m){return{x:m.clientX,y:m.clientY}}function r(m){var f;return m.nodeName==="IMG"&&(s.isFirefox()||!(!((f=document.documentElement)===null||f===void 0)&&f.contains(m)))}function e(m,f,n,u){let E=m?f.width:n,g=m?f.height:u;return s.isSafari()&&m&&(g/=window.devicePixelRatio,E/=window.devicePixelRatio),{dragPreviewWidth:E,dragPreviewHeight:g}}function o(m,f,n,u,E){const g=r(f),p=c(g?m:f),I={x:n.x-p.x,y:n.y-p.y},{offsetWidth:L,offsetHeight:D}=m,{anchorX:_,anchorY:T}=u,{dragPreviewWidth:O,dragPreviewHeight:P}=e(g,f,L,D),x=()=>{let w=new i.MonotonicInterpolant([0,.5,1],[I.y,I.y/D*P,I.y+P-D]).interpolate(T);return s.isSafari()&&g&&(w+=(window.devicePixelRatio-1)*P),w},R=()=>new i.MonotonicInterpolant([0,.5,1],[I.x,I.x/L*O,I.x+O-L]).interpolate(_),{offsetX:$,offsetY:N}=E,M=$===0||$,A=N===0||N;return{x:M?$:R(),y:A?N:x()}}},71169:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});class t{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var i;return!((i=this.globalContext)===null||i===void 0)&&i.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var i;return((i=this.optionsArgs)===null||i===void 0?void 0:i.rootElement)||this.window}constructor(i,a){this.ownerDocument=null,this.globalContext=i,this.optionsArgs=a}}l.OptionsReader=t},48627:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.getEmptyImage=s;let t;function s(){return t||(t=new Image,t.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),t}},92241:(v,l,t)=>{"use strict";var s;s={value:!0},Object.defineProperty(l,"rX",{enumerable:!0,get:function(){return c.getEmptyImage}}),l.PD=s=void 0;var i=t(69456),a=h(t(20911)),c=t(48627);s=a;function h(e){if(e&&e.__esModule)return e;var o={};if(e!=null){for(var m in e)if(Object.prototype.hasOwnProperty.call(e,m)){var f=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,m):{};f.get||f.set?Object.defineProperty(o,m,f):o[m]=e[m]}}return o.default=e,o}const r=function(o,m,f){return new i.HTML5BackendImpl(o,m,f)};l.PD=r},64799:(v,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.memoize=t,l.without=s,l.union=i;function t(a){let c=null;return()=>(c==null&&(c=a()),c)}function s(a,c){return a.filter(h=>h!==c)}function i(a,c){const h=new Set,r=o=>h.add(o);a.forEach(r),c.forEach(r);const e=[];return h.forEach(o=>e.push(o)),e}},45669:(v,l,t)=>{const s=t(18774),{MAX_LENGTH:i,MAX_SAFE_INTEGER:a}=t(70983),{safeRe:c,t:h}=t(3094),r=t(43363),{compareIdentifiers:e}=t(33503);class o{constructor(f,n){if(n=r(n),f instanceof o){if(f.loose===!!n.loose&&f.includePrerelease===!!n.includePrerelease)return f;f=f.version}else if(typeof f!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof f}".`);if(f.length>i)throw new TypeError(`version is longer than ${i} characters`);s("SemVer",f,n),this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease;const u=f.trim().match(n.loose?c[h.LOOSE]:c[h.FULL]);if(!u)throw new TypeError(`Invalid Version: ${f}`);if(this.raw=f,this.major=+u[1],this.minor=+u[2],this.patch=+u[3],this.major>a||this.major<0)throw new TypeError("Invalid major version");if(this.minor>a||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>a||this.patch<0)throw new TypeError("Invalid patch version");u[4]?this.prerelease=u[4].split(".").map(E=>{if(/^[0-9]+$/.test(E)){const g=+E;if(g>=0&&g<a)return g}return E}):this.prerelease=[],this.build=u[5]?u[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(f){if(s("SemVer.compare",this.version,this.options,f),!(f instanceof o)){if(typeof f=="string"&&f===this.version)return 0;f=new o(f,this.options)}return f.version===this.version?0:this.compareMain(f)||this.comparePre(f)}compareMain(f){return f instanceof o||(f=new o(f,this.options)),e(this.major,f.major)||e(this.minor,f.minor)||e(this.patch,f.patch)}comparePre(f){if(f instanceof o||(f=new o(f,this.options)),this.prerelease.length&&!f.prerelease.length)return-1;if(!this.prerelease.length&&f.prerelease.length)return 1;if(!this.prerelease.length&&!f.prerelease.length)return 0;let n=0;do{const u=this.prerelease[n],E=f.prerelease[n];if(s("prerelease compare",n,u,E),u===void 0&&E===void 0)return 0;if(E===void 0)return 1;if(u===void 0)return-1;if(u===E)continue;return e(u,E)}while(++n)}compareBuild(f){f instanceof o||(f=new o(f,this.options));let n=0;do{const u=this.build[n],E=f.build[n];if(s("prerelease compare",n,u,E),u===void 0&&E===void 0)return 0;if(E===void 0)return 1;if(u===void 0)return-1;if(u===E)continue;return e(u,E)}while(++n)}inc(f,n,u){switch(f){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",n,u);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",n,u);break;case"prepatch":this.prerelease.length=0,this.inc("patch",n,u),this.inc("pre",n,u);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",n,u),this.inc("pre",n,u);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const E=Number(u)?1:0;if(!n&&u===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[E];else{let g=this.prerelease.length;for(;--g>=0;)typeof this.prerelease[g]=="number"&&(this.prerelease[g]++,g=-2);if(g===-1){if(n===this.prerelease.join(".")&&u===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(E)}}if(n){let g=[n,E];u===!1&&(g=[n]),e(this.prerelease[0],n)===0?isNaN(this.prerelease[1])&&(this.prerelease=g):this.prerelease=g}break}default:throw new Error(`invalid increment argument: ${f}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}v.exports=o},58328:(v,l,t)=>{const s=t(45669),i=(a,c,h)=>new s(a,h).compare(new s(c,h));v.exports=i},64797:(v,l,t)=>{const s=t(58328),i=(a,c,h)=>s(a,c,h)<0;v.exports=i},53077:(v,l,t)=>{const s=t(45669),i=(a,c,h=!1)=>{if(a instanceof s)return a;try{return new s(a,c)}catch(r){if(!h)return null;throw r}};v.exports=i},85811:(v,l,t)=>{const s=t(53077),i=(a,c)=>{const h=s(a,c);return h?h.version:null};v.exports=i},70983:v=>{const l="2.0.0",s=Number.MAX_SAFE_INTEGER||9007199254740991,i=16,a=256-6,c=["major","premajor","minor","preminor","patch","prepatch","prerelease"];v.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:i,MAX_SAFE_BUILD_LENGTH:a,MAX_SAFE_INTEGER:s,RELEASE_TYPES:c,SEMVER_SPEC_VERSION:l,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},18774:v=>{const l=typeof process=="object"&&{ADMIN_PATH:"/admin/",NODE_ENV:"production",STRAPI_ADMIN_BACKEND_URL:"",STRAPI_TELEMETRY_DISABLED:void 0}&&{ADMIN_PATH:"/admin/",NODE_ENV:"production",STRAPI_ADMIN_BACKEND_URL:"",STRAPI_TELEMETRY_DISABLED:void 0}.NODE_DEBUG&&/\bsemver\b/i.test({ADMIN_PATH:"/admin/",NODE_ENV:"production",STRAPI_ADMIN_BACKEND_URL:"",STRAPI_TELEMETRY_DISABLED:void 0}.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};v.exports=l},33503:v=>{const l=/^[0-9]+$/,t=(i,a)=>{const c=l.test(i),h=l.test(a);return c&&h&&(i=+i,a=+a),i===a?0:c&&!h?-1:h&&!c?1:i<a?-1:1},s=(i,a)=>t(a,i);v.exports={compareIdentifiers:t,rcompareIdentifiers:s}},43363:v=>{const l=Object.freeze({loose:!0}),t=Object.freeze({}),s=i=>i?typeof i!="object"?l:i:t;v.exports=s},3094:(v,l,t)=>{const{MAX_SAFE_COMPONENT_LENGTH:s,MAX_SAFE_BUILD_LENGTH:i,MAX_LENGTH:a}=t(70983),c=t(18774);l=v.exports={};const h=l.re=[],r=l.safeRe=[],e=l.src=[],o=l.t={};let m=0;const f="[a-zA-Z0-9-]",n=[["\\s",1],["\\d",a],[f,i]],u=g=>{for(const[d,p]of n)g=g.split(`${d}*`).join(`${d}{0,${p}}`).split(`${d}+`).join(`${d}{1,${p}}`);return g},E=(g,d,p)=>{const I=u(d),L=m++;c(g,L,d),o[g]=L,e[L]=d,h[L]=new RegExp(d,p?"g":void 0),r[L]=new RegExp(I,p?"g":void 0)};E("NUMERICIDENTIFIER","0|[1-9]\\d*"),E("NUMERICIDENTIFIERLOOSE","\\d+"),E("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${f}*`),E("MAINVERSION",`(${e[o.NUMERICIDENTIFIER]})\\.(${e[o.NUMERICIDENTIFIER]})\\.(${e[o.NUMERICIDENTIFIER]})`),E("MAINVERSIONLOOSE",`(${e[o.NUMERICIDENTIFIERLOOSE]})\\.(${e[o.NUMERICIDENTIFIERLOOSE]})\\.(${e[o.NUMERICIDENTIFIERLOOSE]})`),E("PRERELEASEIDENTIFIER",`(?:${e[o.NUMERICIDENTIFIER]}|${e[o.NONNUMERICIDENTIFIER]})`),E("PRERELEASEIDENTIFIERLOOSE",`(?:${e[o.NUMERICIDENTIFIERLOOSE]}|${e[o.NONNUMERICIDENTIFIER]})`),E("PRERELEASE",`(?:-(${e[o.PRERELEASEIDENTIFIER]}(?:\\.${e[o.PRERELEASEIDENTIFIER]})*))`),E("PRERELEASELOOSE",`(?:-?(${e[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${e[o.PRERELEASEIDENTIFIERLOOSE]})*))`),E("BUILDIDENTIFIER",`${f}+`),E("BUILD",`(?:\\+(${e[o.BUILDIDENTIFIER]}(?:\\.${e[o.BUILDIDENTIFIER]})*))`),E("FULLPLAIN",`v?${e[o.MAINVERSION]}${e[o.PRERELEASE]}?${e[o.BUILD]}?`),E("FULL",`^${e[o.FULLPLAIN]}$`),E("LOOSEPLAIN",`[v=\\s]*${e[o.MAINVERSIONLOOSE]}${e[o.PRERELEASELOOSE]}?${e[o.BUILD]}?`),E("LOOSE",`^${e[o.LOOSEPLAIN]}$`),E("GTLT","((?:<|>)?=?)"),E("XRANGEIDENTIFIERLOOSE",`${e[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),E("XRANGEIDENTIFIER",`${e[o.NUMERICIDENTIFIER]}|x|X|\\*`),E("XRANGEPLAIN",`[v=\\s]*(${e[o.XRANGEIDENTIFIER]})(?:\\.(${e[o.XRANGEIDENTIFIER]})(?:\\.(${e[o.XRANGEIDENTIFIER]})(?:${e[o.PRERELEASE]})?${e[o.BUILD]}?)?)?`),E("XRANGEPLAINLOOSE",`[v=\\s]*(${e[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[o.XRANGEIDENTIFIERLOOSE]})(?:${e[o.PRERELEASELOOSE]})?${e[o.BUILD]}?)?)?`),E("XRANGE",`^${e[o.GTLT]}\\s*${e[o.XRANGEPLAIN]}$`),E("XRANGELOOSE",`^${e[o.GTLT]}\\s*${e[o.XRANGEPLAINLOOSE]}$`),E("COERCE",`(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?(?:$|[^\\d])`),E("COERCERTL",e[o.COERCE],!0),E("LONETILDE","(?:~>?)"),E("TILDETRIM",`(\\s*)${e[o.LONETILDE]}\\s+`,!0),l.tildeTrimReplace="$1~",E("TILDE",`^${e[o.LONETILDE]}${e[o.XRANGEPLAIN]}$`),E("TILDELOOSE",`^${e[o.LONETILDE]}${e[o.XRANGEPLAINLOOSE]}$`),E("LONECARET","(?:\\^)"),E("CARETTRIM",`(\\s*)${e[o.LONECARET]}\\s+`,!0),l.caretTrimReplace="$1^",E("CARET",`^${e[o.LONECARET]}${e[o.XRANGEPLAIN]}$`),E("CARETLOOSE",`^${e[o.LONECARET]}${e[o.XRANGEPLAINLOOSE]}$`),E("COMPARATORLOOSE",`^${e[o.GTLT]}\\s*(${e[o.LOOSEPLAIN]})$|^$`),E("COMPARATOR",`^${e[o.GTLT]}\\s*(${e[o.FULLPLAIN]})$|^$`),E("COMPARATORTRIM",`(\\s*)${e[o.GTLT]}\\s*(${e[o.LOOSEPLAIN]}|${e[o.XRANGEPLAIN]})`,!0),l.comparatorTrimReplace="$1$2$3",E("HYPHENRANGE",`^\\s*(${e[o.XRANGEPLAIN]})\\s+-\\s+(${e[o.XRANGEPLAIN]})\\s*$`),E("HYPHENRANGELOOSE",`^\\s*(${e[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${e[o.XRANGEPLAINLOOSE]})\\s*$`),E("STAR","(<|>)?=?\\s*\\*"),E("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),E("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},9964:(v,l,t)=>{"use strict";t.d(l,{Z:()=>a});var s=t(74081);const i=c=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,s.jsx)("path",{fill:"#212134",d:"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7Zm-6-2v-2h6v2h6v-3H6.5a1.5 1.5 0 1 0 0 3H7ZM7 5v2h2V5H7Zm0 3v2h2V8H7Zm0 3v2h2v-2H7Z"})}),a=i},13150:(v,l,t)=>{"use strict";t.d(l,{Z:()=>a});var s=t(74081);const i=c=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:[(0,s.jsx)("path",{fill:"#212134",d:"M11.987 23.036v-.964H1.876V1.876h10.111V0H0v24h11.987v-.964Z"}),(0,s.jsx)("path",{fill:"#212134",d:"M8 11.2c0-.11.09-.2.2-.2h11.973l-5.445-5.445a.2.2 0 0 1 0-.283l1.13-1.13a.2.2 0 0 1 .283 0l7.718 7.717a.2.2 0 0 1 0 .282L16.14 19.86a.2.2 0 0 1-.282 0l-1.13-1.13a.2.2 0 0 1 0-.284L20.172 13H8.2a.2.2 0 0 1-.2-.2v-1.6Z"})]}),a=i},20645:(v,l,t)=>{"use strict";t.d(l,{Z:()=>a});var s=t(74081);const i=c=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,s.jsx)("path",{fill:"#212134",d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455ZM7 10v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Z"})}),a=i},59620:(v,l,t)=>{"use strict";t.d(l,{Z:()=>a});var s=t(74081);const i=c=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,s.jsx)("path",{fill:"#212134",d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.53-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685Z"})}),a=i},99842:(v,l,t)=>{"use strict";t.d(l,{Z:()=>a});var s=t(74081);const i=c=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 8 8",...c,children:(0,s.jsx)("path",{fill:"#212134",d:"M2 .93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84l-4.6 3.06A.5.5 0 0 1 2 7.07V.93Z"})}),a=i},24780:(v,l,t)=>{"use strict";t.d(l,{Z:()=>a});var s=t(74081);const i=c=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 15 14",...c,children:(0,s.jsx)("path",{fill:"#212134",d:"M5.08 4.1c0-1.19 1.18-2.17 2.42-2.17s2.43.98 2.43 2.17c0 1.1-.56 1.61-1.31 2.28l-.03.03c-.75.65-1.66 1.47-1.66 3.09a.57.57 0 1 0 1.15 0c0-1.08.55-1.6 1.3-2.26l.02-.02c.75-.66 1.67-1.48 1.67-3.12C11.07 2.13 9.22.78 7.5.78 5.78.78 3.93 2.13 3.93 4.1a.57.57 0 1 0 1.15 0Zm2.42 9.26a.88.88 0 1 0 0-1.75.88.88 0 0 0 0 1.75Z"})}),a=i},41433:(v,l,t)=>{"use strict";t.d(l,{Z:()=>a});var s=t(74081);const i=c=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,s.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.707.297A1 1 0 0 0 23 .004h-2a13.907 13.907 0 0 0-5.38 1.077 1 1 0 0 0-.615.923V4.92a.035.035 0 0 1-.022.038l-2-1.47a1 1 0 0 0-1.265.052A14 14 0 0 0 7 14.004v1.585l-2.707 2.707a1 1 0 1 0 1.415 1.415l2.707-2.708H10a14.014 14.014 0 0 0 14-14v-2a1 1 0 0 0-.293-.706ZM18 23.999H3a3 3 0 0 1-3-3V6A3 3 0 0 1 3 3h3a1 1 0 1 1 0 2H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3Z",clipRule:"evenodd"})}),a=i},15050:(v,l,t)=>{"use strict";t.d(l,{C:()=>r});var s=t(74081),i=t(72450),a=t(33110),c=t(19915);const h=(0,i.ZP)(a.k)`
  border-radius: ${({theme:e,size:o})=>o==="S"?"2px":e.borderRadius};
  height: ${({size:e,theme:o})=>o.sizes.badge[e]};
`,r=({active:e=!1,size:o="M",textColor:m="neutral600",backgroundColor:f="neutral150",children:n,minWidth:u=5,...E})=>{const g=o==="S"?1:2;return(0,s.jsx)(h,{inline:!0,alignItem:"center",justifyContent:"center",minWidth:u,paddingLeft:g,paddingRight:g,background:e?"primary200":f,size:o,...E,children:(0,s.jsx)(c.Z,{variant:"sigma",textColor:e?"primary600":m,children:n})})}},18041:(v,l,t)=>{"use strict";t.d(l,{f:()=>c});var s=t(74081),i=t(27279),a=t(68263);const c=i.forwardRef(({href:h,rel:r="noreferrer noopener",target:e="_self",disabled:o=!1,isExternal:m=!1,...f},n)=>(0,s.jsx)(a.x,{as:"a",ref:n,target:m?"_blank":e,rel:m?r:void 0,href:o?"#":h,"aria-disabled":o,cursor:"pointer",...f}));c.displayName="BaseLink"},68263:(v,l,t)=>{"use strict";t.d(l,{x:()=>h});var s=t(72450),i=t(39878),a=t(4032);const c={color:!0,cursor:!0,height:!0,width:!0},h=s.ZP.div.withConfig({shouldForwardProp:(r,e)=>!c[r]&&e(r)})`
  // Font
  font-size: ${({fontSize:r,theme:e})=>(0,a.$)(e.fontSizes,r,r)};

  // Colors
  background: ${({theme:r,background:e})=>(0,a.$)(r.colors,e,e)};
  color: ${({theme:r,color:e})=>(0,a.$)(r.colors,e,void 0)};

  // Spaces
  ${({theme:r,padding:e})=>(0,i.Z)("padding",e,r)}
  ${({theme:r,paddingTop:e})=>(0,i.Z)("padding-top",e,r)}
  ${({theme:r,paddingRight:e})=>(0,i.Z)("padding-right",e,r)}
  ${({theme:r,paddingBottom:e})=>(0,i.Z)("padding-bottom",e,r)}
  ${({theme:r,paddingLeft:e})=>(0,i.Z)("padding-left",e,r)}
  ${({theme:r,marginLeft:e})=>(0,i.Z)("margin-left",e,r)}
  ${({theme:r,marginRight:e})=>(0,i.Z)("margin-right",e,r)}
  ${({theme:r,marginTop:e})=>(0,i.Z)("margin-top",e,r)}
  ${({theme:r,marginBottom:e})=>(0,i.Z)("margin-bottom",e,r)}

  // Responsive hiding
  ${({theme:r,hiddenS:e})=>e?`${r.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:r,hiddenXS:e})=>e?`${r.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:r,hasRadius:e,borderRadius:o})=>e?r.borderRadius:o};
  border-style: ${({borderStyle:r})=>r};
  border-width: ${({borderWidth:r})=>r};
  border-color: ${({borderColor:r,theme:e})=>(0,a.$)(e.colors,r,void 0)};
  border: ${({theme:r,borderColor:e,borderStyle:o,borderWidth:m})=>{if(e&&!o&&typeof m>"u")return`1px solid ${r.colors[e]}`}};

  // Shadows
  box-shadow: ${({theme:r,shadow:e})=>(0,a.$)(r.shadows,e,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:r})=>r};
  &:hover {
    ${({_hover:r,theme:e})=>r?r(e):void 0}
  }

  // Display
  display: ${({display:r})=>r};

  // Position
  position: ${({position:r})=>r};
  left: ${({left:r,theme:e})=>(0,a.$)(e.spaces,r,r)};
  right: ${({right:r,theme:e})=>(0,a.$)(e.spaces,r,r)};
  top: ${({top:r,theme:e})=>(0,a.$)(e.spaces,r,r)};
  bottom: ${({bottom:r,theme:e})=>(0,a.$)(e.spaces,r,r)};
  z-index: ${({zIndex:r})=>r};
  overflow: ${({overflow:r})=>r};

  // Size
  width: ${({width:r,theme:e})=>(0,a.$)(e.spaces,r,r)};
  max-width: ${({maxWidth:r,theme:e})=>(0,a.$)(e.spaces,r,r)};
  min-width: ${({minWidth:r,theme:e})=>(0,a.$)(e.spaces,r,r)};
  height: ${({height:r,theme:e})=>(0,a.$)(e.spaces,r,r)};
  max-height: ${({maxHeight:r,theme:e})=>(0,a.$)(e.spaces,r,r)};
  min-height: ${({minHeight:r,theme:e})=>(0,a.$)(e.spaces,r,r)};

  // Animation
  transition: ${({transition:r})=>r};
  transform: ${({transform:r})=>r};
  animation: ${({animation:r})=>r};

  //Flexbox children props
  flex-shrink: ${({shrink:r})=>r};
  flex-grow: ${({grow:r})=>r};
  flex-basis: ${({basis:r})=>r};
  flex: ${({flex:r})=>r};

  // Text
  text-align: ${({textAlign:r})=>r};
  text-transform: ${({textTransform:r})=>r};
  line-height: ${({theme:r,lineHeight:e})=>(0,a.$)(r.lineHeights,e,e)};

  // Cursor
  cursor: ${({cursor:r})=>r};
`},61696:(v,l,t)=>{"use strict";t.d(l,{i:()=>h});var s=t(74081),i=t(72450),a=t(68263);const c=(0,i.ZP)(a.x)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:r})=>r?"margin: 0;":""}
`,h=({unsetMargin:r=!0,...e})=>(0,s.jsx)(c,{...e,background:"neutral150",as:"hr",unsetMargin:r})},33110:(v,l,t)=>{"use strict";t.d(l,{k:()=>h});var s=t(72450),i=t(39878),a=t(68263);const c={direction:!0},h=(0,s.ZP)(a.x).withConfig({shouldForwardProp:(r,e)=>!c[r]&&e(r)})`
  align-items: ${({alignItems:r="center"})=>r};
  display: ${({display:r="flex",inline:e})=>e?"inline-flex":r};
  flex-direction: ${({direction:r="row"})=>r};
  flex-shrink: ${({shrink:r})=>r};
  flex-wrap: ${({wrap:r})=>r};
  ${({gap:r,theme:e})=>(0,i.Z)("gap",r,e)};
  justify-content: ${({justifyContent:r})=>r};
`},39631:(v,l,t)=>{"use strict";t.d(l,{u:()=>L});var s=t(74081),i=t(27279),a=t(72450);const c=D=>{const[_,T]=(0,i.useState)(!1),O=(0,i.useRef)(null),P=()=>{typeof O.current=="number"&&(clearTimeout(O.current),O.current=null)};return(0,i.useEffect)(()=>()=>{P()},[]),{visible:_,onFocus:()=>{T(!0)},onBlur:()=>{T(!1)},onMouseEnter:()=>{O.current=setTimeout(()=>{T(!0)},D)},onMouseLeave:()=>{P(),T(!1)}}},h=(D,_)=>{const T=(D.width-_.width)/2,O=_.left-T,P=_.top+_.height+8+window.pageYOffset;return{left:O,top:P}},r=(D,_)=>{const T=(D.height-_.height)/2,O=_.left+_.width+8,P=_.top-T+window.pageYOffset;return{left:O,top:P}},e=(D,_)=>{const T=(D.height-_.height)/2,O=_.left-D.width-8,P=_.top-T+window.pageYOffset;return{left:O,top:P}},o=(D,_)=>{const T=(D.width-_.width)/2;let O=_.left-T,P=_.top-D.height-8+window.pageYOffset;const x=window.innerWidth-_.right;return _.left+D.width-x>window.innerWidth?(O=_.left-D.width-8,P=_.top+window.scrollY-_.height/2):O<0?(O=_.width+_.left+8,P=_.top+window.scrollY-D.height/2+8):P<0&&O>0&&(P=_.top+_.height+8),{left:O,top:P}},m=(D,_,T)=>{const O=D.getBoundingClientRect(),P=_.getBoundingClientRect();return T==="bottom"?h(O,P):T==="right"?r(O,P):T==="left"?e(O,P):o(O,P)},f=(D,_)=>{const T=(0,i.useRef)(null),O=(0,i.useRef)(null);return(0,i.useLayoutEffect)(()=>{if(D){const P=T.current,x=O.current;if(P&&x){const R=m(P,x,_);P.style.left=`${R.left}px`,P.style.top=`${R.top}px`}}},[_,D]),{tooltipWrapperRef:T,toggleSourceRef:O}};var n=t(73777),u=t(69530),E=t(68263);const g=i.forwardRef(({container:D=globalThis?.document?.body,..._},T)=>D?(0,u.createPortal)((0,s.jsx)(E.x,{ref:T,..._}),D):null);g.displayName="Portal";var d=t(30249),p=t(19915);const I=(0,a.ZP)(E.x)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:D})=>D?"revert":"none"};
`,L=({children:D,label:_,description:T,delay:O=500,position:P="top",id:x,...R})=>{const $=(0,n.M)(x),N=(0,n.M)(),{visible:M,...A}=c(O),{tooltipWrapperRef:C,toggleSourceRef:w}=f(M,P),y=i.cloneElement(D,{tabIndex:0,"aria-labelledby":_?$:void 0,"aria-describedby":T?$:void 0,...A});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{children:(0,s.jsxs)(I,{id:$,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:C,visible:M,position:"absolute",...R,children:[M&&(0,s.jsx)(d.T,{id:N,children:T}),(0,s.jsx)(p.Z,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:_||T})]})}),(0,s.jsx)("span",{ref:w,children:y})]})}},19915:(v,l,t)=>{"use strict";t.d(l,{Z:()=>g});var s=t(72450);const i="alpha",a="beta",c="delta",h="epsilon",r="omega",e="pi",o="sigma",m=[i,a,c,h,r,e,o],f=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,n=({variant:d=r,theme:p})=>{switch(d){case i:return`
        font-weight: ${p.fontWeights.bold};
        font-size: ${p.fontSizes[5]};
        line-height: ${p.lineHeights[2]};
      `;case a:return`
        font-weight: ${p.fontWeights.bold};
        font-size: ${p.fontSizes[4]};
        line-height: ${p.lineHeights[1]};
      `;case c:return`
        font-weight: ${p.fontWeights.semiBold};
        font-size: ${p.fontSizes[3]};
        line-height: ${p.lineHeights[2]};
      `;case h:return`
        font-size: ${p.fontSizes[3]};
        line-height: ${p.lineHeights[6]};
      `;case r:return`
        font-size: ${p.fontSizes[2]};
        line-height: ${p.lineHeights[4]};
      `;case e:return`
        font-size: ${p.fontSizes[1]};
        line-height: ${p.lineHeights[3]};
      `;case o:return`
        font-weight: ${p.fontWeights.bold};
        font-size: ${p.fontSizes[0]};
        line-height: ${p.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${p.fontSizes[2]};
      `}};var u=t(4032);const E={fontSize:!0,fontWeight:!0},g=s.ZP.span.withConfig({shouldForwardProp:(d,p)=>!E[d]&&p(d)})`
  ${n}
  ${f}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:d,fontWeight:p})=>(0,u.$)(d.fontWeights,p,void 0)};
  font-size: ${({theme:d,fontSize:p})=>(0,u.$)(d.fontSizes,p,void 0)};
  line-height: ${({theme:d,lineHeight:p})=>(0,u.$)(d.lineHeights,p,p)};
  color: ${({theme:d,textColor:p})=>d.colors[p||"neutral800"]};
  text-align: ${({textAlign:d})=>d};
  text-decoration: ${({textDecoration:d})=>d};
  text-transform: ${({textTransform:d})=>d};
`},30249:(v,l,t)=>{"use strict";t.d(l,{T:()=>i});var s=t(72450);const i=s.ZP.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`},39878:(v,l,t)=>{"use strict";t.d(l,{Z:()=>s});const s=(i,a,c)=>{if(!a)return;let h=Array.isArray(a)?a:[];if(!Array.isArray(a)&&typeof a=="object"&&(h=[a?.desktop,a?.tablet,a?.mobile]),h.length>0)return h.reduce((e,o,m)=>{if(o)switch(m){case 0:return`${e}${i}: ${c.spaces[o]};`;case 1:return`${e}${c.mediaQueries.tablet}{${i}: ${c.spaces[o]};}`;case 2:return`${e}${c.mediaQueries.mobile}{${i}: ${c.spaces[o]};}`;default:return e}return e},"");const r=c.spaces[a]||a;return`${i}: ${r};`}},4032:(v,l,t)=>{"use strict";t.d(l,{$:()=>a});function s(c,h){return typeof c=="string"?!1:h in c}function i(c){return c&&typeof c=="object"&&!Array.isArray(c)}function a(c,h,r){return h&&s(c,h)?c[h]:r}},73777:(v,l,t)=>{"use strict";t.d(l,{M:()=>c});var s=t(27279);const i=s["useId".toString()]||(()=>{});let a=0;const c=h=>{const[r,e]=(0,s.useState)(i());return(0,s.useLayoutEffect)(()=>{h||e(o=>o??String(a++))},[h]),h?.toString()??(r||"")}},31380:(v,l,t)=>{"use strict";t.d(l,{$:()=>r});var s=t(74081),i=t(72450),a=t(15356),c=t(33110);const h=(0,i.ZP)(c.k)`
  width: ${({condensed:e})=>e?"max-content":`${224/16}rem`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
`,r=({condensed:e=!1,...o})=>(0,s.jsx)(a.f.Provider,{value:e,children:(0,s.jsx)(h,{alignItems:"normal",as:"nav",background:"neutral0",condensed:e,direction:"column",height:"100vh",position:"sticky",top:0,zIndex:2,...o})})},15356:(v,l,t)=>{"use strict";t.d(l,{S:()=>a,f:()=>i});var s=t(27279);const i=(0,s.createContext)(!1),a=()=>(0,s.useContext)(i)},74577:(v,l,t)=>{"use strict";t.d(l,{D:()=>u});var s=t(74081),i=t(27279),a=t(72450),c=t(15356),h=t(18041),r=t(68263),e=t(30249),o=t(33110),m=t(19915);const f=a.ZP.div`
  border-radius: ${({theme:E})=>E.borderRadius};

  svg,
  img {
    height: ${({condensed:E})=>E?`${40/16}rem`:`${32/16}rem`};
    width: ${({condensed:E})=>E?`${40/16}rem`:`${32/16}rem`};
  }
`,n=(0,a.ZP)(h.f)`
  text-decoration: unset;
  color: inherit;
`,u=i.forwardRef(({workplace:E,title:g,icon:d,...p},I)=>{const L=(0,c.S)();return p.to=p?.to??"/",L?(0,s.jsx)(h.f,{ref:I,...p,children:(0,s.jsx)(r.x,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4,children:(0,s.jsxs)(f,{condensed:!0,children:[d,(0,s.jsxs)(e.T,{children:[(0,s.jsx)("span",{children:g}),(0,s.jsx)("span",{children:E})]})]})})}):(0,s.jsx)(n,{ref:I,...p,children:(0,s.jsx)(r.x,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4,children:(0,s.jsxs)(o.k,{children:[(0,s.jsx)(f,{"aria-hidden":!0,tabIndex:-1,children:d}),(0,s.jsxs)(r.x,{paddingLeft:2,children:[(0,s.jsxs)(m.Z,{fontWeight:"bold",textColor:"neutral800",as:"span",children:[g,(0,s.jsx)(e.T,{as:"span",children:E})]}),(0,s.jsx)(m.Z,{variant:"pi",as:"p",textColor:"neutral600","aria-hidden":!0,children:E})]})]})})})})},55823:(v,l,t)=>{"use strict";t.d(l,{w:()=>g});var s=t(74081),i=t(61043),a=t(34941),c=t(72450),h=t(15356),r=t(33110),e=t(27279),o=t(4032),m=t(68263);const f=(0,c.ZP)(m.x)`
  path {
    fill: ${({color:d,theme:p})=>(0,o.$)(p.colors,d,void 0)};
  }
  ${({theme:d,colors:p})=>p(d)}
`,n=e.forwardRef(({color:d="neutral600",colors:p=()=>"",...I},L)=>(0,s.jsx)(f,{ref:L,color:d,colors:p,...I}));n.displayName="Icon";var u=t(30249);const E=(0,c.ZP)(r.k).attrs(d=>({justifyContent:"center",...d}))`
  background: ${({theme:d})=>d.colors.neutral0};
  border: 1px solid ${({theme:d})=>d.colors.neutral150};
  border-radius: ${({theme:d})=>d.borderRadius};
  position: absolute;
  bottom: ${(9+4)/16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({theme:d,condensed:p})=>p?0:d.spaces[5]};
  transform: ${({condensed:d})=>d?"translateX(50%)":void 0};
  z-index: 2;
  width: ${18/16}rem;
  height: ${25/16}rem;

  svg {
    width: ${6/16}rem;
    height: ${9/16}rem;
  }
`,g=({children:d,...p})=>{const I=(0,h.S)();return(0,s.jsxs)(E,{as:"button",condensed:I,...p,children:[(0,s.jsx)(n,{as:I?i.Z:a.Z,"aria-hidden":!0,color:"neutral600"}),(0,s.jsx)(u.T,{children:d})]})}},69254:(v,l,t)=>{"use strict";t.d(l,{q:()=>a});var s=t(74081),i=t(68263);const a=({children:c})=>(0,s.jsx)(i.x,{position:"relative",children:c})},47061:(v,l,t)=>{"use strict";t.d(l,{O:()=>d});var s=t(74081),i=t(27279),a=t(72450),c=t(15356),h=t(68263),r=t(18041),e=t(19915),o=t(33110),m=t(15050),f=t(39631);const n=(0,a.ZP)(h.x)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`,u=(0,a.ZP)(r.f)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({theme:p})=>p.borderRadius};
  background: ${({theme:p})=>p.colors.neutral0};

  ${e.Z} {
    color: ${({theme:p})=>p.colors.neutral600};
  }

  svg path {
    fill: ${({theme:p})=>p.colors.neutral500};
  }

  &:hover {
    background: ${({theme:p})=>p.colors.neutral100};

    ${e.Z} {
      color: ${({theme:p})=>p.colors.neutral700};
    }

    svg path {
      fill: ${({theme:p})=>p.colors.neutral600};
    }
  }

  &.active {
    background: ${({theme:p})=>p.colors.primary100};

    svg path {
      fill: ${({theme:p})=>p.colors.primary600};
    }

    ${e.Z} {
      color: ${({theme:p})=>p.colors.primary600};
      font-weight: 500;
    }
  }
`,E=(0,a.ZP)(o.k)`
  padding: ${({theme:p})=>`${p.spaces[2]} ${p.spaces[3]}`};
`,g=(0,a.ZP)(m.C)`
  ${({theme:p,condensed:I})=>I&&`
	  position: absolute;
    // Values based on visual aspect 
    top: -${p.spaces[3]};
    right:  -${p.spaces[1]};
  `}

  ${e.Z} {
    //find a solution to remove !important
    color: ${({theme:p})=>p.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({theme:p})=>p.spaces[6]};
  height: ${({theme:p})=>p.spaces[5]};
  padding: ${({theme:p})=>`0 ${p.spaces[2]}`};
  border-radius: ${({theme:p})=>p.spaces[10]};
  background: ${({theme:p})=>p.colors.primary600};
`,d=i.forwardRef(({children:p,icon:I,badgeContent:L,badgeAriaLabel:D,..._},T)=>(0,c.S)()?(0,s.jsx)(u,{ref:T,..._,children:(0,s.jsx)(f.u,{position:"right",label:p,children:(0,s.jsxs)(E,{as:"span",justifyContent:"center",children:[(0,s.jsx)(n,{"aria-hidden":!0,paddingRight:0,as:"span",children:I}),L&&(0,s.jsx)(g,{condensed:!0,"aria-label":D,children:L})]})})}):(0,s.jsx)(u,{ref:T,..._,children:(0,s.jsxs)(E,{as:"span",justifyContent:"space-between",children:[(0,s.jsxs)(o.k,{children:[(0,s.jsx)(n,{"aria-hidden":!0,paddingRight:3,as:"span",children:I}),(0,s.jsx)(e.Z,{children:p})]}),L&&(0,s.jsx)(g,{justifyContent:"center","aria-label":D,children:L})]})}))},57661:(v,l,t)=>{"use strict";t.d(l,{y:()=>m});var s=t(74081),i=t(27279),a=t(15356),c=t(33110),h=t(68263),r=t(61696),e=t(30249),o=t(19915);const m=({label:f,children:n,horizontal:u=!1,spacing:E=2,...g})=>(0,a.S)()?(0,s.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsxs)(h.x,{paddingTop:1,paddingBottom:1,background:"neutral0",hasRadius:!0,as:"span",children:[(0,s.jsx)(r.i,{}),(0,s.jsx)(e.T,{children:(0,s.jsx)("span",{children:f})})]}),(0,s.jsx)(c.k,{as:"ul",gap:E,direction:u?"row":"column",alignItems:u?"center":"stretch",...g,children:i.Children.map(n,(d,p)=>(0,s.jsx)("li",{children:d},p))})]}):(0,s.jsxs)(c.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsx)(h.x,{paddingTop:1,paddingBottom:1,background:"neutral0",paddingRight:3,paddingLeft:3,hasRadius:!0,as:"span",children:(0,s.jsx)(o.Z,{variant:"sigma",textColor:"neutral600",children:f})}),(0,s.jsx)(c.k,{as:"ul",gap:E,direction:u?"row":"column",alignItems:u?"center":"stretch",...g,children:i.Children.map(n,(d,p)=>(0,s.jsx)("li",{children:d},p))})]})},74729:(v,l,t)=>{"use strict";t.d(l,{_:()=>e});var s=t(74081),i=t(27279),a=t(72450),c=t(68263),h=t(33110);const r=(0,a.ZP)(c.x)`
  flex-grow: 1;
  overflow-y: auto;
`,e=({children:o,spacing:m=4,horizontal:f=!1,...n})=>(0,s.jsx)(r,{paddingLeft:3,paddingRight:2,paddingTop:3,paddingBottom:8,children:(0,s.jsx)(h.k,{as:"ul",gap:m,direction:f?"row":"column",alignItems:f?"center":"stretch",...n,children:i.Children.map(o,(u,E)=>(0,s.jsx)("li",{children:u},E))})})},15698:(v,l,t)=>{"use strict";t.d(l,{r:()=>L});var s=t(74081),i=t(27279),a=t(72450),c=t(15356),h=t(68263),r=t(33110);const e=32,o=64;var m=t(19915);const f=a.ZP.img`
  border-radius: 50%;
  object-fit: cover;
  display: block;
  position: relative;
`,n=a.ZP.img`
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  transform: translate(-${(o-e)/2}px, -100%);
  margin-top: -${({theme:D})=>D.spaces[1]};
`,u=(0,a.ZP)(h.x)`
  opacity: 0.4;
`,E=({src:D,alt:_,preview:T})=>{const[O,P]=i.useState(!1),x=!!(T&&O);return(0,s.jsxs)("span",{children:[x?(0,s.jsx)(n,{"aria-hidden":!0,alt:"",width:`${o}px`,height:`${o}px`,src:T===!0?D:typeof T=="string"?T:""}):null,(0,s.jsxs)(h.x,{zIndex:x?1:void 0,position:"relative",onMouseEnter:()=>P(!0),onMouseLeave:()=>P(!1),width:`${e}px`,height:`${e}px`,children:[x?(0,s.jsx)(u,{background:"neutral0",borderRadius:"50%",position:"absolute",width:`${e}px`,height:`${e}px`,zIndex:1}):null,(0,s.jsx)(f,{src:D,alt:_,width:`${e}px`,height:`${e}px`})]})]})},g=(0,a.ZP)(r.k)`
  span {
    line-height: 0;
  }
`,d=({children:D,background:_="primary600",textColor:T="buttonNeutral0"})=>(0,s.jsx)(g,{background:_,borderRadius:"50%",width:`${e}px`,height:`${e}px`,justifyContent:"center",children:(0,s.jsx)(m.Z,{fontSize:0,fontWeight:"bold",textColor:T,textTransform:"uppercase",children:D})});var p=t(30249);const I=(0,a.ZP)(h.x)`
  border-top: 1px solid ${({theme:D})=>D.colors.neutral150};
`,L=i.forwardRef(({src:D,children:_,initials:T,...O},P)=>{const x=(0,c.S)();return(0,s.jsx)(I,{paddingTop:3,paddingBottom:3,paddingLeft:5,paddingRight:5,...O,children:(0,s.jsxs)(r.k,{as:"button",justifyContent:x?"center":void 0,ref:P,children:[D?(0,s.jsx)(E,{src:D,alt:"","aria-hidden":!0}):(0,s.jsx)(d,{children:T}),x?(0,s.jsx)(p.T,{children:(0,s.jsx)("span",{children:_})}):(0,s.jsx)(h.x,{width:`${130/16}rem`,paddingLeft:2,as:"span",children:(0,s.jsx)(m.Z,{ellipsis:!0,textColor:"neutral600",children:_})})]})})})}}]);
