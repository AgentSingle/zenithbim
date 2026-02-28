import{_ as d,c as i,a as e,F as u,s as h,t as a,r as v,m as p,o,n as _,x as g,D as b,i as m}from"./index-ChdFePaL.js";const f={class:"industry-wrapper"},x={class:"industry-tabs"},w=["onClick"],y={class:"icon"},I={class:"label"},C={class:"section-title"},B={__name:"listpageTabs",setup(k){const n=[{id:"all",label:"All Industries",icon:{template:`<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="5" r="3"/>
              <circle cx="19" cy="5" r="3"/>
              <circle cx="12" cy="19" r="3"/>
            </svg>`}},{id:"aec",label:"Architecture, Engineering & Construction",icon:{template:`<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 21h18L12 3 3 21z"/>
            </svg>`}},{id:"pdm",label:"Product Design & Manufacturing",icon:{template:`<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
            </svg>`}},{id:"media",label:"Media & Entertainment",icon:{template:`<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21"/>
            </svg>`}}],c=m("all"),l=p(()=>n.find(t=>t.id===c.value)?.label||""),r=t=>{c.value=t};return(t,E)=>(o(),i("div",f,[e("div",x,[(o(),i(u,null,h(n,s=>e("button",{key:s.id,class:_(["tab",{active:c.value===s.id}]),onClick:L=>r(s.id)},[e("span",y,[(o(),g(b(s.icon)))]),e("span",I,a(s.label),1)],10,w)),64))]),e("div",C,[e("h2",null,a(l.value)+" products",1),v(t.$slots,"default",{},void 0)])]))}},z=d(B,[["__scopeId","data-v-86e56997"]]);export{z as s};
