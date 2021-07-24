(this.webpackJsonpflashcards=this.webpackJsonpflashcards||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o,s,u,l=n(0),d=n.n(l),f=n(23),b=n.n(f),j=(n(33),n(10)),p=n.n(j),h=n(28),m=n(24),O=n(5),g=(n(35),n(3)),x=n(4),v=x.a.div(r||(r=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border-radius: 0.25rem;\n    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);\n    background-color: transparent;\n    transform-style: preserve-3d;\n    transition: all 0.2s ease-in-out;\n    perspective: 1000px;\n    cursor: pointer;\n    height: ",";\n    transform: ",";\n\n    &:hover {\n        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.6);\n    }\n"])),(function(e){return e.height="".concat(e.height,"px")}),(function(e){return e.flip?"rotateY(180deg)":"rotateY(0)"})),y=x.a.div(c||(c=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    padding: 1em;\n    backface-visibility: hidden;\n    background-color: #fff;\n    height: 100%;\n    width: 100%;\n    left: 0;\n"]))),w=x.a.div(a||(a=Object(g.a)(["\n    margin-bottom: 1em;\n"]))),k=x.a.div(i||(i=Object(g.a)(["\n\n"]))),F=x.a.p(o||(o=Object(g.a)(["\n    margin-bottom: 0.5em;\n    color: #555;\n    font-size: 0.9rem;\n"]))),N=x.a.div(s||(s=Object(g.a)(["\n    display: flex;\n    position: absolute;\n    padding: 1em;\n    backface-visibility: hidden;\n    transform: rotateY(180deg);\n    background-color: #fff;\n    height: 100%;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n"]))),S=n(1),C=function(e){var t=e.flashcard,n=Object(l.useState)(!1),r=Object(O.a)(n,2),c=r[0],a=r[1],i=Object(l.useState)("initial"),o=Object(O.a)(i,2),s=o[0],u=o[1],d=Object(l.useRef)(),f=Object(l.useRef)(),b=Object(l.useRef)();return console.log(s),Object(l.useEffect)((function(){var e=d.current.clientHeight+b.current.clientHeight+45,t=f.current.clientHeight;u(Math.max(e,t,150))}),[t.question,t.answer,t.options]),Object(S.jsxs)(v,{onClick:function(){return a(!c)},flip:c,height:s,children:[Object(S.jsxs)(y,{children:[Object(S.jsx)(w,{ref:b,children:t.question}),Object(S.jsx)(k,{ref:d,children:t.options.map((function(e){return Object(S.jsx)(F,{children:e},e)}))})]}),Object(S.jsx)(N,{ref:f,children:t.answer})]})},R=x.a.div(u||(u=Object(g.a)(["\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n    gap: 1.5em;\n"]))),q=function(e){var t=e.flashcards;return Object(S.jsx)(R,{children:t.map((function(e){return Object(S.jsx)(C,{flashcard:e},e.id)}))})},E=n(12),H=n.n(E);var M=function(){var e=Object(l.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(l.useState)([]),a=Object(O.a)(c,2),i=a[0],o=a[1],s=Object(l.useRef)(),u=Object(l.useRef)();function d(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}return Object(l.useEffect)((function(){H.a.get("https://opentdb.com/api_category.php").then((function(e){o(e.data.trivia_categories)}))}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("form",{className:"header",onSubmit:function(e){e.preventDefault(),function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H()("https://opentdb.com/api.php",{params:{amount:u.current.value,category:s.current.value}});case 2:t=e.sent,r(t.data.results.map((function(e,t){var n=d(e.correct_answer),r=[].concat(Object(h.a)(e.incorrect_answers.map((function(e){return d(e)}))),[n]);return{id:"".concat(t,"-").concat(Date.now()),question:d(e.question),answer:n,options:r.sort((function(){return Math.random()-.5}))}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()},children:[Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{htmlFor:"category",children:"Category"}),Object(S.jsx)("select",{id:"category",ref:s,children:i.map((function(e){return Object(S.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{htmlFor:"amount",children:"Number of Questions"}),Object(S.jsx)("input",{type:"number",id:"amount",min:"1",step:"1",defaultValue:10,ref:u})]}),Object(S.jsx)("div",{className:"form-group",children:Object(S.jsx)("button",{className:"btn",children:"Generate"})})]}),Object(S.jsx)("div",{className:"AppContainer",children:Object(S.jsx)(q,{flashcards:n})})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};b.a.render(Object(S.jsx)(d.a.StrictMode,{children:Object(S.jsx)(M,{})}),document.getElementById("root")),_()}},[[55,1,2]]]);
//# sourceMappingURL=main.3b7d37ca.chunk.js.map