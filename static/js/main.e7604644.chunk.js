(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(23),r=(c(33),c(34),c(7)),a=c(3),s=(c(35),c(11)),j=c.n(s),i=c(2),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(r.c,{to:"/",className:l,children:"Home"}),Object(i.jsx)(r.c,{to:"/people",className:l,children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(a.b,{})})})]})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},d=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},h=c(24),O=c(4),x=c(0);function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){if(e.ok)return e.json();throw new Error("Error")}));var e}c(37);var m=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},p=function(e){var t=e.person;return Object(i.jsx)(r.b,{to:"/people/".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},f=function(e){var t=e.people,c=e.selectedPerson;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":(null===c||void 0===c?void 0:c.slug)===e.slug}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(p,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:e.motherName?Object(i.jsx)(i.Fragment,{children:void 0!==e.mother?Object(i.jsx)(p,{person:e.mother}):e.motherName}):"-"}),Object(i.jsx)("td",{children:e.fatherName?Object(i.jsx)(i.Fragment,{children:void 0!==e.father?Object(i.jsx)(p,{person:e.father}):e.fatherName}):"-"})]},e.slug)}))})]})},v=function(){var e=Object(x.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],r=Object(x.useState)(!1),s=Object(O.a)(r,2),j=s[0],l=s[1],o=Object(x.useState)(!1),b=Object(O.a)(o,2),d=b[0],p=b[1],v=Object(a.r)().slug;Object(x.useEffect)((function(){l(!0),u().then((function(e){n(function(e){return e.map((function(t){var c=Object(h.a)({},t);return c.father=e.find((function(e){return e.name===c.fatherName})),c.mother=e.find((function(e){return e.name===c.motherName})),c}))}(e))})).catch((function(){return p(!0)})).finally((function(){return l(!1)}))}),[]);var g=c.find((function(e){return e.slug===v}));return Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),j?Object(i.jsx)(m,{}):Object(i.jsx)(i.Fragment,{children:d?Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):Object(i.jsx)(i.Fragment,{children:c.length?Object(i.jsx)(f,{people:c,selectedPerson:g}):Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})})})]})})},g=function(){return Object(i.jsx)(r.a,{children:Object(i.jsxs)(a.e,{children:[Object(i.jsxs)(a.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(d,{})}),Object(i.jsx)(a.c,{path:"home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})}),Object(i.jsxs)(a.c,{path:"people",children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(v,{})}),Object(i.jsx)(a.c,{path:":slug",element:Object(i.jsx)(v,{})})]})]}),Object(i.jsx)(a.c,{path:"*",element:Object(i.jsx)(b,{})})]})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(g,{}))}},[[38,1,2]]]);
//# sourceMappingURL=main.e7604644.chunk.js.map