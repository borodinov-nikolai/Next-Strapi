(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[375],{24654:function(){},41557:function(e,t,n){Promise.resolve().then(n.t.bind(n,46685,23)),Promise.resolve().then(n.bind(n,20028)),Promise.resolve().then(n.bind(n,86640)),Promise.resolve().then(n.bind(n,48129)),Promise.resolve().then(n.t.bind(n,63222,23)),Promise.resolve().then(n.bind(n,94211)),Promise.resolve().then(n.bind(n,28170)),Promise.resolve().then(n.bind(n,20049)),Promise.resolve().then(n.t.bind(n,42682,23))},48129:function(e,t,n){"use strict";n.r(t);var r=n(57437),a=n(24033);n(2265),t.default=e=>{let{children:t,id:n}=e,i=(0,a.useRouter)(),s=(0,a.usePathname)();return(0,r.jsx)("div",{onClick:()=>i.push("".concat(s+"/"+n)),children:t})}},20049:function(e,t,n){"use strict";n.r(t);var r=n(57437),a=n(83749);n(2265),t.default=e=>{let{rating:t}=e,n=t.reduce((e,t)=>e+t.attributes.value,0)/t.length;return(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{disabled:!0,allowHalf:!0,value:n,defaultValue:0})})}},94211:function(e,t,n){"use strict";n.r(t);var r=n(57437),a=n(82993),i=n(17098),s=n(88110),l=n.n(s),o=n(33116);n(2265),t.default=e=>{let{item:t}=e,n=(0,a.T)(),[s,u]=o.ZP.useMessage(),c=()=>{s.open({type:"success",content:"Товар добавлен в корзину!"})},d=async e=>{e.stopPropagation(),n((0,i.jX)({...t,count:1})),c()};return(0,r.jsxs)(r.Fragment,{children:[u,(0,r.jsx)(l(),{onClick:e=>d(e),children:"В корзину"})]})}},86640:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(57437),a=n(2265),i=n(67848),s=e=>{let{setBrand:t,value:n,brand:a,brands:s}=e;return(0,r.jsxs)(i.ZP.Group,{value:a||n,defaultValue:"all",onChange:e=>t(e.target.value),buttonStyle:"solid",children:[(0,r.jsx)(i.ZP.Button,{value:"all",children:"Все"}),null==s?void 0:s.map(e=>(0,r.jsx)(i.ZP.Button,{value:e.attributes.name,children:e.attributes.name},e.id))]})},l=n(45623),o=e=>{let{setSort:t,value:n,sort:a}=e;return(0,r.jsx)(l.default,{defaultValue:"price:asc",value:a||n||"price:asc",style:{width:190},onChange:e=>t(e),options:[{value:"price:asc",label:"Цена по возрастанию"},{value:"price:desc",label:"Цена по убыванию"},{value:"deviceRating:asc",label:"Рейтинг по возрастанию"},{value:"deviceRating:desc",label:"Рейтинг по убыванию"}]})},u=n(49971),c=n.n(u),d=n(43574),m=e=>{let{setSearch:t,search:n}=e;return(0,r.jsx)(d.default,{value:n,onChange:e=>t(e.target.value),placeholder:"Поиск"})},f=n(76548),p=n.n(f),v=n(24033),h=n(63739),_=n(82993),g=n(40382),b=e=>{let{brandValue:t,sortValue:n,pagination:i,brands:l}=e,[u,d]=a.useState(""),[f,b]=a.useState(""),[P,x]=a.useState(""),{page:j}=(0,_.C)(e=>e.filters),C=(0,_.T)(),S=(0,h.Nr)(P,700),y=(0,v.useRouter)(),Z=(0,v.useSearchParams)();return a.useEffect(()=>{Z.size<1&&(b("price:asc"),d("all"),x(""))},[Z]),a.useEffect(()=>{P&&d("all"),(null==i?void 0:i.pageCount)<j&&C((0,g.YA)(1));let e=p().stringify({pagination:{page:j||(null==i?void 0:i.page)},sort:[f||n||"price:asc"],filters:{name:{$containsi:S||void 0},brand:{name:u?"all"===u?void 0:u:t}}});y.replace("?".concat(e))},[u,f,S,j,null==i?void 0:i.pageCount]),(0,r.jsxs)("div",{className:c().root,children:[(0,r.jsx)("div",{className:c().brands,children:(0,r.jsx)(s,{brands:l,brand:u,value:t,setBrand:d})}),(0,r.jsx)("div",{className:c().search,children:(0,r.jsx)(m,{search:P,setSearch:x})}),(0,r.jsx)("div",{className:c().sort,children:(0,r.jsx)(o,{value:n,sort:f,setSort:b})})]})}},20028:function(e,t,n){"use strict";n.r(t);var r=n(57437);n(2265);var a=n(65473),i=n(82993),s=n(40382);t.default=e=>{let{pagination:t}=e,n=(0,i.T)();return(0,r.jsx)(a.Z,{hideOnSinglePage:!0,current:(null==t?void 0:t.page)||1,defaultCurrent:1,pageSize:(null==t?void 0:t.pageSize)||1,showSizeChanger:!1,onChange:e=>{n((0,s.YA)(e))},total:null==t?void 0:t.total})}},82993:function(e,t,n){"use strict";n.d(t,{C:function(){return i},T:function(){return a}});var r=n(3198);let a=r.I0,i=r.v9},17098:function(e,t,n){"use strict";n.d(t,{H5:function(){return u},cl:function(){return l},jX:function(){return i},uz:function(){return s},yh:function(){return o}});var r=n(98340);let a=(0,r.oM)({name:"cart",initialState:{items:[],totalCount:0,totalPrice:0},reducers:{addItem:(e,t)=>{let n=e.items.find(e=>e.id===t.payload.id);n?n.count++:e.items.push(t.payload),e.totalPrice=e.items.reduce((e,t)=>e+t.price*t.count,0),e.totalCount=e.items.reduce((e,t)=>e+t.count,0)},minusItem:(e,t)=>{let n=e.items.find(e=>e.id===t.payload.id);n&&(n.count=t.payload.count),e.totalPrice=e.items.reduce((e,t)=>e+t.price*t.count,0),e.totalCount=e.items.reduce((e,t)=>e+t.count,0)},removeItem:(e,t)=>{let n=e.items.find(e=>e.id===t.payload.id);n&&(e.items=e.items.filter(e=>e.id!==t.payload.id)),e.totalPrice=e.items.reduce((e,t)=>e+t.price*t.count,0),e.totalCount=e.items.reduce((e,t)=>e+t.count,0)},replaceItems:(e,t)=>{e.items=t.payload,e.totalPrice=e.items.reduce((e,t)=>e+t.price*t.count,0),e.totalCount=e.items.reduce((e,t)=>e+t.count,0)},clearItems:e=>{e.items=[],e.totalPrice=0,e.totalCount=0}}}),{addItem:i,minusItem:s,removeItem:l,replaceItems:o,clearItems:u}=a.actions;t.ZP=a.reducer},40382:function(e,t,n){"use strict";n.d(t,{YA:function(){return i}});var r=n(98340);let a=(0,r.oM)({name:"filters",initialState:{sort:"",search:"",brand:"",page:0},reducers:{setPage:(e,t)=>{e.page=t.payload}}}),{setPage:i}=a.actions;t.ZP=a.reducer},42682:function(e){e.exports={root:"Smartpones_root__Q0TSy",breadcrumb:"Smartpones_breadcrumb__yRng7",filters:"Smartpones_filters__DULyD",grid:"Smartpones_grid__DsfxP",pagination:"Smartpones_pagination__Y1Qn0"}},49971:function(e){e.exports={root:"Filters_root__g_KZJ",brands:"Filters_brands__7l_q0",search:"Filters_search__GIhum",sort:"Filters_sort__zfVkB"}}},function(e){e.O(0,[377,222,599,685,947,100,971,596,744],function(){return e(e.s=41557)}),_N_E=e.O()}]);