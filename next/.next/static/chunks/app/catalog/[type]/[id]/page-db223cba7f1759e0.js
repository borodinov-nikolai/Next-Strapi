(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[294],{89543:function(e,t,i){Promise.resolve().then(i.bind(i,51718)),Promise.resolve().then(i.bind(i,80181)),Promise.resolve().then(i.bind(i,55854)),Promise.resolve().then(i.bind(i,94211)),Promise.resolve().then(i.bind(i,79845)),Promise.resolve().then(i.t.bind(i,2741,23)),Promise.resolve().then(i.t.bind(i,7385,23))},15919:function(e,t,i){"use strict";i.d(t,{M:function(){return a},W:function(){return n}});var r=i(29222);let n=r.Z.create({baseURL:"http://31.129.103.119/api"}),a=r.Z.create({baseURL:"http://31.129.103.119:1337/api"})},79845:function(e,t,i){"use strict";i.r(t);var r=i(57437),n=i(52955),a=i(6073),o=i.n(a),s=i(2265);t.default=e=>{let{device:t}=e,[i,a]=s.useState(0);return(0,r.jsxs)("div",{className:o().root,children:[(0,r.jsx)("div",{className:o().imagePreview,children:t.image.data.map((e,t)=>(0,r.jsx)("img",{className:t===i?o().selectedPreviewImage:o().previewImage,onClick:()=>a(t),width:100,src:"http://31.129.103.119:1337"+e.attributes.url,alt:""},e.id))}),(0,r.jsx)("div",{className:o().image,children:(0,r.jsx)(n.Z,{height:400,src:"http://31.129.103.119:1337"+t.image.data[i].attributes.url})})]})}},80181:function(e,t,i){"use strict";i.r(t);var r=i(57437),n=i(45200),a=i(83749),o=i(2265),s=i(24033);t.default=e=>{let{deviceID:t,user:i}=e,[u,c]=o.useState(0),[l,d]=o.useState(0),[m,_]=o.useState(),[v,f]=o.useState(!1),p=(0,s.useRouter)();return(o.useEffect(()=>{let e=async()=>{var e,r,a,o;let s=await (0,n.NC)(t,null==i?void 0:i.id);d(null==s?void 0:null===(r=s.data)||void 0===r?void 0:null===(e=r.data[0])||void 0===e?void 0:e.attributes.value),_(null==s?void 0:null===(o=s.data)||void 0===o?void 0:null===(a=o.data[0])||void 0===a?void 0:a.id)};e()},[null==i?void 0:i.id,u]),i)?(0,r.jsxs)("div",{style:{fontSize:"18px",marginTop:"20px"},children:["Оцените товар:",(0,r.jsx)(a.Z,{allowClear:!1,style:{fontSize:"50px"},onChange:e=>{c(e),(0,n.IO)(e,t,null==i?void 0:i.id,m,u,v,p)},value:u||l,defaultValue:0})]}):(0,r.jsx)("div",{style:{marginTop:"40px",fontSize:"18px "},children:"Авторизуйтесь чтобы ставить оценку"})}},55854:function(e,t,i){"use strict";i.r(t);var r=i(57437),n=i(2265),a=i(88110),o=i.n(a),s=i(43574),u=i(83686),c=i.n(u),l=i(45200),d=i(32207),m=i(92608),_=i(24033);let{TextArea:v}=s.default;t.default=e=>{let{deviceID:t,comments:i,user:a}=e,[s,u]=n.useState(""),[f,p]=n.useState(!1),h=(0,_.useRouter)(),g=null==i?void 0:i.find(e=>{var t,i,r;return(null==e?void 0:null===(r=e.attributes)||void 0===r?void 0:null===(i=r.users_permissions_user)||void 0===i?void 0:null===(t=i.data)||void 0===t?void 0:t.id)===(null==a?void 0:a.id)});return(null==a?void 0:a.id)?g&&!f?(0,r.jsxs)("div",{className:c().root,children:[(0,r.jsx)("div",{children:"Ваш отзыв:"}),(0,r.jsxs)("div",{className:c().comment,children:[(0,r.jsxs)("div",{className:c().userName,children:[a.username,":"]}),(0,r.jsx)("div",{children:g.attributes.text}),(0,r.jsx)(o(),{onClick:()=>p(!0),className:c().editBtn,children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)(o(),{onClick:()=>{(0,l.PN)(t,a.id,h)},className:c().deleteBtn,children:(0,r.jsx)(m.Z,{})})]})]}):(0,r.jsxs)("div",{className:c().root,children:[(0,r.jsx)("div",{className:c().inputTitle,children:"Оставить отзыв:"}),(0,r.jsx)(v,{className:c().textArea,size:"large",showCount:!0,maxLength:200,onChange:e=>{u(e.target.value)},defaultValue:null==g?void 0:g.attributes.text}),(0,r.jsx)(o(),{onClick:()=>{(0,l.Ir)(s,t,a.id,h),p(!1)},className:c().button,children:"Отправить"})]}):(0,r.jsx)("div",{children:"Авторизуйтесь чтобы оставлять отзывы"})}},94211:function(e,t,i){"use strict";i.r(t);var r=i(57437),n=i(82993),a=i(17098),o=i(88110),s=i.n(o),u=i(33116);i(2265),t.default=e=>{let{item:t}=e,i=(0,n.T)(),[o,c]=u.ZP.useMessage(),l=()=>{o.open({type:"success",content:"Товар добавлен в корзину!"})},d=async e=>{e.stopPropagation(),i((0,a.jX)({...t,count:1})),l()};return(0,r.jsxs)(r.Fragment,{children:[c,(0,r.jsx)(s(),{onClick:e=>d(e),children:"В корзину"})]})}},82993:function(e,t,i){"use strict";i.d(t,{C:function(){return a},T:function(){return n}});var r=i(3198);let n=r.I0,a=r.v9},17098:function(e,t,i){"use strict";i.d(t,{H5:function(){return c},cl:function(){return s},jX:function(){return a},uz:function(){return o},yh:function(){return u}});var r=i(98340);let n=(0,r.oM)({name:"cart",initialState:{items:[],totalCount:0,totalPrice:0},reducers:{addItem:(e,t)=>{let i=e.items.find(e=>e.id===t.payload.id);i?i.count++:e.items.push(t.payload),e.totalPrice=e.items.reduce((e,t)=>e+t.price*t.count,0),e.totalCount=e.items.reduce((e,t)=>e+t.count,0)},minusItem:(e,t)=>{let i=e.items.find(e=>e.id===t.payload.id);i&&(i.count=t.payload.count),e.totalPrice=e.items.reduce((e,t)=>e+t.price*t.count,0),e.totalCount=e.items.reduce((e,t)=>e+t.count,0)},removeItem:(e,t)=>{let i=e.items.find(e=>e.id===t.payload.id);i&&(e.items=e.items.filter(e=>e.id!==t.payload.id)),e.totalPrice=e.items.reduce((e,t)=>e+t.price*t.count,0),e.totalCount=e.items.reduce((e,t)=>e+t.count,0)},replaceItems:(e,t)=>{e.items=t.payload,e.totalPrice=e.items.reduce((e,t)=>e+t.price*t.count,0),e.totalCount=e.items.reduce((e,t)=>e+t.count,0)},clearItems:e=>{e.items=[],e.totalPrice=0,e.totalCount=0}}}),{addItem:a,minusItem:o,removeItem:s,replaceItems:u,clearItems:c}=n.actions;t.ZP=n.reducer},45200:function(e,t,i){"use strict";i.d(t,{I8:function(){return o},IO:function(){return l},Ir:function(){return m},NC:function(){return d},PN:function(){return _},Xq:function(){return c},bu:function(){return s},kS:function(){return u},mM:function(){return a},z2:function(){return n},zx:function(){return v}});var r=i(15919);let n=async(e,t,i,n,a,o)=>{try{await r.W.post("/auth/register",{username:e,email:t,password:i}),n(!0),setTimeout(()=>{a.refresh(),o(!1)},3e3),setTimeout(()=>n(!1),3500)}catch(e){console.error(e)}},a=async(e,t,i,n)=>{try{await r.W.post("/auth/register",{username:e,email:t,password:i}),n(!0),setTimeout(()=>n(!1),3500)}catch(e){console.error(e)}},o=async(e,t,i,n)=>{try{let{data:a}=await r.W.post("/auth/login",{identifier:e,password:t});return i.refresh(),n(!1),a}catch(e){console.error(e.message)}},s=async(e,t)=>{try{let{data:i}=await r.W.post("/auth/login",{identifier:e,password:t});return i}catch(e){console.error(e.message)}},u=async(e,t)=>{try{await r.W.post("/auth/logout"),e.refresh(),t(!1)}catch(e){console.error(e)}},c=async(e,t)=>{var i;await r.W.put("/cart",{id:null==e?void 0:null===(i=e.cart)||void 0===i?void 0:i.id,items:t})},l=async(e,t,i,n,a,o,s)=>{!i||n||a?n&&(await r.W.put("/rating",{value:e,id:n,device:t}),s.refresh()):(await r.W.post("/rating",{value:e,device:t,users_permissions_user:i}),s.refresh())},d=async(e,t)=>{if(t)try{let i=await r.M.get("/ratings",{params:{filters:{users_permissions_user:{id:t},device:{id:e}}}});return i}catch(e){console.error(e)}},m=async(e,t,i,n)=>{try{i&&await r.W.post("/comment",{text:e,device:t,user:i}),n.refresh()}catch(e){console.error(e)}},_=async(e,t,i)=>{try{await r.W.post("/comment",{device:e,user:t}),i.refresh()}catch(e){console.error(e)}},v=async(e,t,i,n,a,o)=>{try{await r.W.put("/account",{userID:e,dataType:t,dataValue:i}),n.refresh(),a(""),o("")}catch(e){console.error(e)}}},2741:function(e){e.exports={root:"Device_root__QwU5d",description:"Device_description__3iqxZ",imageViewer:"Device_imageViewer__u7dVY",icon:"Device_icon__5kfnT",name:"Device_name__uUwRn",rating:"Device_rating__zYEkR",comments:"Device_comments__bLjzz",price:"Device_price__rvSaF"}},6073:function(e){e.exports={root:"ImageViewer_root__pTqX4",imagePreview:"ImageViewer_imagePreview__qW37G",previewImage:"ImageViewer_previewImage__tjhPi",selectedPreviewImage:"ImageViewer_selectedPreviewImage__9AMDq",image:"ImageViewer_image__ooWPn"}},7385:function(e){e.exports={root:"Comments_root__8BRrL",title:"Comments_title__8fqLj",inputTitle:"Comments_inputTitle__F0MgW",input:"Comments_input__5EZR_",comment:"Comments_comment__0uFGy",userName:"Comments_userName__0zqFx"}},83686:function(e){e.exports={root:"addComment_root__3M6Za",inputTitle:"addComment_inputTitle__ITyfC",textArea:"addComment_textArea__LhqrG",button:"addComment_button__qJPgW",comment:"addComment_comment__yT9Za",deleteBtn:"addComment_deleteBtn__PmR4b",editBtn:"addComment_editBtn__FfwPv",userName:"addComment_userName__6fPF5"}}},function(e){e.O(0,[377,599,927,947,516,593,971,596,744],function(){return e(e.s=89543)}),_N_E=e.O()}]);