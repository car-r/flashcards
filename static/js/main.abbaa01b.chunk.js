(this.webpackJsonpflashcards=this.webpackJsonpflashcards||[]).push([[0],{33:function(e,n,t){},35:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var r,c,i,a,o,s,u,l=t(0),d=t.n(l),f=t(23),b=t.n(f),j=(t(33),t(10)),p=t.n(j),h=t(28),m=t(24),O=t(5),g=(t(35),t(3)),x=t(4),v=x.a.div(r||(r=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border-radius: 0.25rem;\n    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);\n    background-color: transparent;\n    transform-style: preserve-3d;\n    transition: all 0.2s ease-in-out;\n    perspective: 1000px;\n    cursor: pointer;\n    height: ",";\n    transform: ",";\n\n    &:hover {\n        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.6);\n    }\n"])),(function(e){return e.height="".concat(e.height,"px")}),(function(e){return e.flip?"rotateY(180deg)":"rotateY(0)"})),w=x.a.div(c||(c=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    padding: 1em;\n    backface-visibility: hidden;\n    background-color: #fff;\n    height: 100%;\n    width: 100%;\n    left: 0;\n"]))),y=x.a.div(i||(i=Object(g.a)(["\n    margin-bottom: 1em;\n"]))),k=x.a.div(a||(a=Object(g.a)(["\n\n"]))),q=x.a.p(o||(o=Object(g.a)(["\n    margin-bottom: 0.5em;\n    color: #555;\n    font-size: 0.9rem;\n"]))),F=x.a.div(s||(s=Object(g.a)(["\n    display: flex;\n    position: absolute;\n    padding: 1em;\n    backface-visibility: hidden;\n    transform: rotateY(180deg);\n    background-color: #fff;\n    height: 100%;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n"]))),S=t(1),C=function(e){var n=e.flashcard,t=Object(l.useState)(!1),r=Object(O.a)(t,2),c=r[0],i=r[1],a=Object(l.useState)("initial"),o=Object(O.a)(a,2),s=o[0],u=o[1],d=Object(l.useRef)(),f=Object(l.useRef)(),b=Object(l.useRef)();return console.log(s),Object(l.useEffect)((function(){var e=d.current.clientHeight+b.current.clientHeight+45,n=f.current.clientHeight;u(Math.max(e,n,150))}),[n.question,n.answer,n.options]),Object(S.jsxs)(v,{onClick:function(){return i(!c)},flip:c,height:s,children:[Object(S.jsxs)(w,{children:[Object(S.jsx)(y,{ref:b,children:n.question}),Object(S.jsx)(k,{ref:d,children:n.options.map((function(e){return Object(S.jsx)(q,{children:e},e)}))})]}),Object(S.jsx)(F,{ref:f,children:n.answer})]})},E=x.a.div(u||(u=Object(g.a)(["\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n    gap: 1.5em;\n"]))),R=function(e){var n=e.flashcards;return Object(S.jsx)(E,{children:n.map((function(e){return Object(S.jsx)(C,{flashcard:e},e.id)}))})},H=t(12),M=t.n(H);var N=[{id:1,question:"what is 2 + 2?",answer:"4",options:["2","3","4","5"]},{id:2,question:"what is 10 + 10?",answer:"20",options:["20","33","40","15"]},{id:3,question:"what is 20 + 20?",answer:"40",options:["20","30","40","50"]}],_=function(){var e=Object(l.useState)(N),n=Object(O.a)(e,2),t=n[0],r=n[1],c=Object(l.useState)([]),i=Object(O.a)(c,2),a=i[0],o=i[1],s=Object(l.useRef)(),u=Object(l.useRef)();function d(e){var n=document.createElement("textarea");return n.innerHTML=e,n.value}return Object(l.useEffect)((function(){M.a.get("https://opentdb.com/api_category.php").then((function(e){o(e.data.trivia_categories)}))}),[]),Object(l.useEffect)((function(){(function(){var e=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M()("https://opentdb.com/api.php?amount=10");case 2:n=e.sent,r(n.data.results.map((function(e,n){var t=d(e.correct_answer),r=[].concat(Object(h.a)(e.incorrect_answers.map((function(e){return d(e)}))),[t]);return{id:"".concat(n,"-").concat(Date.now()),question:d(e.question),answer:t,options:r.sort((function(){return Math.random()-.5}))}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("form",{className:"header",onSubmit:function(e){e.preventDefault()},children:[Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{htmlFor:"category",children:"Category"}),Object(S.jsx)("select",{id:"category",ref:s,children:a.map((function(e){return Object(S.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("label",{htmlFor:"amount",children:"Number of Questions"}),Object(S.jsx)("input",{type:"number",id:"amount",min:"1",step:"1",defaultValue:10,ref:u})]})]}),Object(S.jsx)("div",{className:"AppContainer",children:Object(S.jsx)(R,{flashcards:t})})]})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),i(e),a(e)}))};b.a.render(Object(S.jsx)(d.a.StrictMode,{children:Object(S.jsx)(_,{})}),document.getElementById("root")),D()}},[[55,1,2]]]);
//# sourceMappingURL=main.abbaa01b.chunk.js.map