import{s as Q,n as K,r as W}from"../chunks/scheduler.Ce_0Mfso.js";import{S as Z,i as ee,e as r,s as y,c as l,b as L,g as N,h as g,d as I,l as e,a as te,j as t,m as P,n as w,p as se}from"../chunks/index.Cc7T5gXE.js";function re(h){let a,o,A="Explore Your Future Career Paths with Our App",T,i,B=`If you are a high school student interested in using our app to explore your career prospects,
		please provide us with feedback to help us improve!`,q,p,s,f,m,z="Name:",F,u,O,_,b,H="Email:",U,d,j,k,x,X="Your Feedback:",M,c,R,C,$="Submit",Y,G;return{c(){a=r("main"),o=r("h1"),o.textContent=A,T=y(),i=r("p"),i.textContent=B,q=y(),p=r("div"),s=r("form"),f=r("div"),m=r("label"),m.textContent=z,F=y(),u=r("input"),O=y(),_=r("div"),b=r("label"),b.textContent=H,U=y(),d=r("input"),j=y(),k=r("div"),x=r("label"),x.textContent=X,M=y(),c=r("textarea"),R=y(),C=r("button"),C.textContent=$,this.h()},l(v){a=l(v,"MAIN",{class:!0});var n=L(a);o=l(n,"H1",{class:!0,"data-svelte-h":!0}),N(o)!=="svelte-1tpvnw0"&&(o.textContent=A),T=g(n),i=l(n,"P",{class:!0,"data-svelte-h":!0}),N(i)!=="svelte-16hlxfx"&&(i.textContent=B),q=g(n),p=l(n,"DIV",{class:!0});var J=L(p);s=l(J,"FORM",{class:!0});var E=L(s);f=l(E,"DIV",{class:!0});var D=L(f);m=l(D,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),N(m)!=="svelte-ir8c70"&&(m.textContent=z),F=g(D),u=l(D,"INPUT",{type:!0,id:!0,class:!0}),D.forEach(I),O=g(E),_=l(E,"DIV",{class:!0});var S=L(_);b=l(S,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),N(b)!=="svelte-1flf0h4"&&(b.textContent=H),U=g(S),d=l(S,"INPUT",{type:!0,id:!0,class:!0}),S.forEach(I),j=g(E),k=l(E,"DIV",{class:!0});var V=L(k);x=l(V,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),N(x)!=="svelte-1yk81pj"&&(x.textContent=X),M=g(V),c=l(V,"TEXTAREA",{id:!0,class:!0}),L(c).forEach(I),V.forEach(I),R=g(E),C=l(E,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),N(C)!=="svelte-1ou7dtz"&&(C.textContent=$),E.forEach(I),J.forEach(I),n.forEach(I),this.h()},h(){e(o,"class","svelte-4reskt"),e(i,"class","svelte-4reskt"),e(m,"for","name"),e(m,"class","svelte-4reskt"),e(u,"type","text"),e(u,"id","name"),e(u,"class","hover:border-red-500 hover:border-solid hover:text-black-500 svelte-4reskt"),u.required=!0,e(f,"class","svelte-4reskt"),e(b,"for","email"),e(b,"class","svelte-4reskt"),e(d,"type","email"),e(d,"id","email"),e(d,"class","hover:border-red-500 hover:border-solid hover:text-black-500 svelte-4reskt"),d.required=!0,e(_,"class","svelte-4reskt"),e(x,"for","message"),e(x,"class","svelte-4reskt"),e(c,"id","message"),e(c,"class","hover:border-red-500 hover:border-solid hover:text-black-500 svelte-4reskt"),c.required=!0,e(k,"class","svelte-4reskt"),e(C,"type","submit"),e(C,"class","svelte-4reskt"),e(s,"class","svelte-4reskt"),e(p,"class","form-container svelte-4reskt"),e(a,"class","svelte-4reskt")},m(v,n){te(v,a,n),t(a,o),t(a,T),t(a,i),t(a,q),t(a,p),t(p,s),t(s,f),t(f,m),t(f,F),t(f,u),P(u,h[0]),t(s,O),t(s,_),t(_,b),t(_,U),t(_,d),P(d,h[1]),t(s,j),t(s,k),t(k,x),t(k,M),t(k,c),P(c,h[2]),t(s,R),t(s,C),Y||(G=[w(u,"input",h[4]),w(d,"input",h[5]),w(c,"input",h[6]),w(s,"submit",se(h[3]))],Y=!0)},p(v,[n]){n&1&&u.value!==v[0]&&P(u,v[0]),n&2&&d.value!==v[1]&&P(d,v[1]),n&4&&P(c,v[2])},i:K,o:K,d(v){v&&I(a),Y=!1,W(G)}}}function le(h,a,o){let A="",T="",i="";function B(){alert(`Thank you for your feedback, ${A}!`)}function q(){A=this.value,o(0,A)}function p(){T=this.value,o(1,T)}function s(){i=this.value,o(2,i)}return[A,T,i,B,q,p,s]}class oe extends Z{constructor(a){super(),ee(this,a,le,re,Q,{})}}export{oe as component};
