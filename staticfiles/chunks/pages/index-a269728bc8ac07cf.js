(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(5075)}])},5075:function(e,t,l){"use strict";l.r(t);var r=l(5893),s=l(9008),a=l.n(s),c=l(5675),n=l.n(c),o=l(7294),i=l(6154);let x=()=>{let[e,t]=(0,o.useState)([]),l=async()=>{let e=await i.Z.get("http://localhost:8000/api/dashboard");t(e.data)};return(0,o.useEffect)(()=>{let e=setInterval(()=>{l()},2e3);return()=>clearInterval(e)},[]),console.log("Hello My django data: ",e),(0,r.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-center py-2",children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"My Data Project"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:"flex w-full flex-1 flex-col items-center  px-20 text-center",children:[(0,r.jsx)("h1",{className:"text-xl font-bold",children:"Welcome to My Dashboard "}),(0,r.jsx)("p",{className:"border text-gray-500",children:"Here we go..."}),e.map((e,t)=>(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsxs)("p",{className:"px-2 border text-xl",children:["Minute: ",e.match_status]}),(0,r.jsxs)("p",{className:"px-2 border text-xl",children:["Goal Pred: ",e.goal_pred]})]},t))]}),(0,r.jsx)("footer",{className:"flex h-24 w-full items-center justify-center border-t",children:(0,r.jsxs)("a",{className:"flex items-center justify-center gap-2",href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,r.jsx)(n(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})]})})]})};t.default=x}},function(e){e.O(0,[737,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);