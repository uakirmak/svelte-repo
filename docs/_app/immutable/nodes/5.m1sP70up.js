import{s as D,n as I}from"../chunks/scheduler.Ce_0Mfso.js";import{S as H,i as S,e as p,c as v,f as m,d,l as _,b as E,s as z,t as q,g as T,a as w,h as b,j as f,k as C,o as V,n as L}from"../chunks/index.DBSdQAmt.js";function j(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function y(a,e,l){const o=a.slice();return o[6]=e[l],o}function P(a){let e,l,o="Thank you for completing the quiz!",s,n,u,h=a[1].join(", ")+"",r;return{c(){e=p("div"),l=p("h2"),l.textContent=o,s=z(),n=p("p"),u=q("Your answers: "),r=q(h),this.h()},l(t){e=v(t,"DIV",{class:!0});var i=m(e);l=v(i,"H2",{"data-svelte-h":!0}),T(l)!=="svelte-1iev825"&&(l.textContent=o),s=w(i),n=v(i,"P",{});var c=m(n);u=b(c,"Your answers: "),r=b(c,h),c.forEach(d),i.forEach(d),this.h()},h(){_(e,"class","quiz-complete svelte-otpuo9")},m(t,i){E(t,e,i),f(e,l),f(e,s),f(e,n),f(n,u),f(n,r)},p(t,i){i&2&&h!==(h=t[1].join(", ")+"")&&C(r,h)},d(t){t&&d(e)}}}function U(a){let e,l,o=a[3][a[0]].question+"",s,n,u,h=j(a[3][a[0]].options),r=[];for(let t=0;t<h.length;t+=1)r[t]=A(y(a,h,t));return{c(){e=p("div"),l=p("h2"),s=q(o),n=z(),u=p("ul");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=v(t,"DIV",{class:!0});var i=m(e);l=v(i,"H2",{});var c=m(l);s=b(c,o),c.forEach(d),n=w(i),u=v(i,"UL",{class:!0});var g=m(u);for(let k=0;k<r.length;k+=1)r[k].l(g);g.forEach(d),i.forEach(d),this.h()},h(){_(u,"class","svelte-otpuo9"),_(e,"class","quiz-question svelte-otpuo9")},m(t,i){E(t,e,i),f(e,l),f(l,s),f(e,n),f(e,u);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(u,null)},p(t,i){if(i&1&&o!==(o=t[3][t[0]].question+"")&&C(s,o),i&25){h=j(t[3][t[0]].options);let c;for(c=0;c<h.length;c+=1){const g=y(t,h,c);r[c]?r[c].p(g,i):(r[c]=A(g),r[c].c(),r[c].m(u,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=h.length}},d(t){t&&d(e),V(r,t)}}}function A(a){let e,l,o=a[6]+"",s,n,u,h;function r(){return a[5](a[6])}return{c(){e=p("li"),l=p("button"),s=q(o),n=z(),this.h()},l(t){e=v(t,"LI",{class:!0});var i=m(e);l=v(i,"BUTTON",{class:!0});var c=m(l);s=b(c,o),c.forEach(d),n=w(i),i.forEach(d),this.h()},h(){_(l,"class","svelte-otpuo9"),_(e,"class","svelte-otpuo9")},m(t,i){E(t,e,i),f(e,l),f(l,s),f(e,n),u||(h=L(l,"click",r),u=!0)},p(t,i){a=t,i&1&&o!==(o=a[6]+"")&&C(s,o)},d(t){t&&d(e),u=!1,h()}}}function W(a){let e;function l(n,u){return n[2]?P:U}let o=l(a),s=o(a);return{c(){e=p("div"),s.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var u=m(e);s.l(u),u.forEach(d),this.h()},h(){_(e,"class","quiz-wrapper svelte-otpuo9")},m(n,u){E(n,e,u),s.m(e,null)},p(n,[u]){o===(o=l(n))&&s?s.p(n,u):(s.d(1),s=o(n),s&&(s.c(),s.m(e,null)))},i:I,o:I,d(n){n&&d(e),s.d()}}}function Y(a,e,l){let o=0,s=[],n=!1;const u=[{question:"What is your favorite subject?",options:["Math","Science","History","Art"]},{question:"Which career excites you the most?",options:["Engineer","Doctor","Artist","Entrepreneur"]}];function h(t){l(1,s[o]=t,s),o<u.length-1?l(0,o++,o):(l(2,n=!0),console.log("Quiz completed:",s))}return[o,s,n,u,h,t=>h(t)]}class N extends H{constructor(e){super(),S(this,e,Y,W,D,{})}}export{N as component};
