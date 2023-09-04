import{_ as K}from"../chunks/preload-helper.a4192956.js";import{H as ot}from"../chunks/control.f5b05b5f.js";import{s as rt}from"../chunks/scheduler.934c1f23.js";import{S as st,i as lt,q as Q,g as d,s as M,m as D,r as W,B as it,h,f as _,c as R,j as P,n as I,u as ct,k as p,x as u,a as z,v as X,o as B,t as Y,b as ut,d as Z,C as mt,w as x,p as _t}from"../chunks/index.9e7b4402.js";import{f as tt,e as et}from"../chunks/utils.5a2a39e1.js";const ft=(n,e)=>{const s=n[e];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((o,m)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(m.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function pt(n,e){return new ot(n,e)}new TextEncoder;async function dt({params:n}){try{const e=await ft(Object.assign({"../../posts/first-post.md":()=>K(()=>import("../chunks/first-post.b25d07f7.js"),["../chunks/first-post.b25d07f7.js","../chunks/scheduler.934c1f23.js","../chunks/index.9e7b4402.js","../chunks/mdsvex.88d9a793.js"],import.meta.url),"../../posts/second-post.md":()=>K(()=>import("../chunks/second-post.712b0c05.js"),["../chunks/second-post.712b0c05.js","../chunks/scheduler.934c1f23.js","../chunks/index.9e7b4402.js","../chunks/mdsvex.88d9a793.js"],import.meta.url)}),`../../posts/${n.slug}.md`);return{content:e.default,meta:e.metadata}}catch{throw pt(404,`Could not find ${n.slug}`)}}const Pt=Object.freeze(Object.defineProperty({__proto__:null,load:dt},Symbol.toStringTag,{value:"Module"}));function at(n,e,s){const o=n.slice();return o[1]=e[s],o}function nt(n){let e,s,o=n[1]+"",m;return{c(){e=d("span"),s=D("#"),m=D(o),this.h()},l(f){e=h(f,"SPAN",{class:!0});var l=P(e);s=I(l,"#"),m=I(l,o),l.forEach(_),this.h()},h(){p(e,"class","surface-4 svelte-8uncrq")},m(f,l){z(f,e,l),u(e,s),u(e,m)},p(f,l){l&1&&o!==(o=f[1]+"")&&B(m,o)},d(f){f&&_(e)}}}function ht(n){let e,s,o,m,f,l,g,w,T=n[0].meta.title+"",O,S,E,j,A=tt(n[0].meta.date)+"",H,C,y,V,$,r,v;document.title=e=n[0].meta.title;let q=et(n[0].meta.categories),i=[];for(let t=0;t<q.length;t+=1)i[t]=nt(at(n,q,t));var k=n[0].content;function G(t,c){return{}}return k&&(r=Q(k,G())),{c(){s=d("meta"),o=d("meta"),f=M(),l=d("article"),g=d("hgroup"),w=d("h1"),O=D(T),S=M(),E=d("p"),j=D("Published at "),H=D(A),C=M(),y=d("div");for(let t=0;t<i.length;t+=1)i[t].c();V=M(),$=d("div"),r&&W(r.$$.fragment),this.h()},l(t){const c=it("svelte-ylbs26",document.head);s=h(c,"META",{property:!0,content:!0}),o=h(c,"META",{property:!0,content:!0}),c.forEach(_),f=R(t),l=h(t,"ARTICLE",{class:!0});var a=P(l);g=h(a,"HGROUP",{});var b=P(g);w=h(b,"H1",{class:!0});var N=P(w);O=I(N,T),N.forEach(_),S=R(b),E=h(b,"P",{class:!0});var L=P(E);j=I(L,"Published at "),H=I(L,A),L.forEach(_),b.forEach(_),C=R(a),y=h(a,"DIV",{class:!0});var F=P(y);for(let U=0;U<i.length;U+=1)i[U].l(F);F.forEach(_),V=R(a),$=h(a,"DIV",{class:!0});var J=P($);r&&ct(r.$$.fragment,J),J.forEach(_),a.forEach(_),this.h()},h(){p(s,"property","og:type"),p(s,"content","article"),p(o,"property","og:title"),p(o,"content",m=n[0].meta.title),p(w,"class","svelte-8uncrq"),p(E,"class","svelte-8uncrq"),p(y,"class","tags svelte-8uncrq"),p($,"class","prose"),p(l,"class","svelte-8uncrq")},m(t,c){u(document.head,s),u(document.head,o),z(t,f,c),z(t,l,c),u(l,g),u(g,w),u(w,O),u(g,S),u(g,E),u(E,j),u(E,H),u(l,C),u(l,y);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(y,null);u(l,V),u(l,$),r&&X(r,$,null),v=!0},p(t,[c]){if((!v||c&1)&&e!==(e=t[0].meta.title)&&(document.title=e),(!v||c&1&&m!==(m=t[0].meta.title))&&p(o,"content",m),(!v||c&1)&&T!==(T=t[0].meta.title+"")&&B(O,T),(!v||c&1)&&A!==(A=tt(t[0].meta.date)+"")&&B(H,A),c&1){q=et(t[0].meta.categories);let a;for(a=0;a<q.length;a+=1){const b=at(t,q,a);i[a]?i[a].p(b,c):(i[a]=nt(b),i[a].c(),i[a].m(y,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=q.length}if(c&1&&k!==(k=t[0].content)){if(r){_t();const a=r;Y(a.$$.fragment,1,0,()=>{x(a,1)}),ut()}k?(r=Q(k,G()),W(r.$$.fragment),Z(r.$$.fragment,1),X(r,$,null)):r=null}},i(t){v||(r&&Z(r.$$.fragment,t),v=!0)},o(t){r&&Y(r.$$.fragment,t),v=!1},d(t){t&&(_(f),_(l)),_(s),_(o),mt(i,t),r&&x(r)}}}function vt(n,e,s){let{data:o}=e;return n.$$set=m=>{"data"in m&&s(0,o=m.data)},[o]}class wt extends st{constructor(e){super(),lt(this,e,vt,ht,rt,{data:0})}}export{wt as component,Pt as universal};