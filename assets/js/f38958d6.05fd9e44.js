"use strict";(self.webpackChunkteklifo_documentation=self.webpackChunkteklifo_documentation||[]).push([[718],{7295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"usage-example/authentication","title":"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f","description":"\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0430 Teklifo \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043f\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0441\u0441\u044b\u043b\u043a\u0435:","source":"@site/docs/usage-example/authentication.md","sourceDirName":"usage-example","slug":"/usage-example/authentication","permalink":"/documentation/docs/usage-example/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/teklifo/documentation/docs/usage-example/authentication.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0434\u0430\u0447\u0438","permalink":"/documentation/docs/usage-example/problem-formulation"},"next":{"title":"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438","permalink":"/documentation/docs/usage-example/company"}}');var i=n(4848),a=n(8453);const s={sidebar_position:2},c="\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",r={},l=[];function u(e){const t={a:"a",h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,i.jsxs)(t.p,{children:["\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0430 Teklifo \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043f\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0441\u0441\u044b\u043b\u043a\u0435:\n",(0,i.jsx)(t.a,{href:"https://teklifo.com/ru/login",children:"https://teklifo.com/ru/login"})]}),"\n",(0,i.jsx)(t.p,{children:"\u0422\u0443\u0442 \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0434\u0432\u0430 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430: \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u0438\u043b\u0438 \u0436\u0435 \u0447\u0435\u0440\u0435\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 Google."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"authentication",src:n(1815).A+"",width:"1920",height:"919"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'\u0415\u0441\u043b\u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c \u043f\u0435\u0440\u0432\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442, \u0442\u043e \u0432\u0432\u043e\u0434\u0438\u043c \u0430\u0434\u0440\u0435\u0441 \u043d\u0430\u0448\u0435\u0439 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u043f\u043e\u043b\u0435 \u0438 \u043d\u0430\u0436\u0438\u043c\u0430\u0435\u043c \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c". \u0412 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u043f\u0440\u0438\u0434\u0435\u0442 \u043f\u0438\u0441\u044c\u043c\u043e \u0441 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u043e\u0439, \u043f\u0435\u0440\u0435\u0439\u0434\u044f \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u044b \u0432\u0435\u0440\u043d\u0435\u043c\u0441\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u043d\u0430 \u0441\u0430\u0439\u0442 Teklifo, \u043d\u043e \u0442\u0435\u043f\u0435\u0440\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442 \u043d\u0430\u0441, \u043a\u0430\u043a \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.'}),"\n",(0,i.jsx)(t.li,{children:'\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 Google \u0435\u0449\u0435 \u043f\u0440\u043e\u0449\u0435: \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0436\u0438\u043c\u0430\u0435\u043c \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 "\u0412\u043e\u0439\u0442\u0438 \u0441 Google", \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c \u0432 \u043e\u0442\u043a\u0440\u044b\u0432\u0448\u0435\u043c\u0441\u044f \u043e\u043a\u043d\u0435 \u0441\u0432\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u2013 \u0438 \u043c\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b.'}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e ",(0,i.jsx)(t.a,{href:"./company",children:"\u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),", \u043e\u0442 \u043b\u0438\u0446\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u044b \u0438 \u0431\u0443\u0434\u0435\u043c \u0432\u0435\u0441\u0442\u0438 \u0442\u043e\u0440\u0433\u043e\u0432\u0443\u044e \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u043e \u0447\u0435\u043c \u043d\u0430\u0441, \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u0438 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u044f\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u0441\u0442\u043e\u043b\u0430."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1815:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/authentication-8856f7c222bd1dd593ea24dd46162a6b.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var o=n(6540);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);