"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[896],{3896:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var r=t(2791),a=t(9434),o=t(6907),u="ContactList_contacts__list__hSN0M",c=t(3634),i="ContactsItem_delete__contacts__+ULTl",s="ContactsItem_contactsItem__woGWp",l=t(184),f=function(e){var n=e.id,t=e.name,r=e.phone,o=(0,a.I0)();return(0,l.jsxs)("li",{className:s,children:[t+": "+r,(0,l.jsx)("button",{className:i,type:"button",onClick:function(){return o((0,c._f)(n))},children:"Delete"})]})},p="NOT_FOUND";var d=function(e,n){return e===n};function m(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?d:r,o=t.maxSize,u=void 0===o?1:o,c=t.resultEqualityCheck,i=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),s=1===u?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:p},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(i):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return p}return{get:r,put:function(n,a){r(n)===p&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,i);function l(){var n=s.get(arguments);if(n===p){if(n=e.apply(null,arguments),c){var t=s.getEntries(),r=t.find((function(e){return c(e.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return l.clearCache=function(){return s.clear()},l}function v(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function h(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var o,u=0,c={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(c=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=c,l=s.memoizeOptions,f=void 0===l?t:l,p=Array.isArray(f)?f:[f],d=v(r),m=e.apply(void 0,[function(){return u++,i.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return o=m.apply(null,e)}));return Object.assign(h,{resultFunc:i,memoizedResultFunc:m,dependencies:d,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return a}var _=h(m),y=function(e){return e.filter},g=function(e){return e.contacts.items},x=function(e){return e.contacts.isLoading},C=_([g,y],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),b=function(){var e=(0,a.v9)(C);return(0,l.jsx)("ul",{className:u,children:e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,l.jsx)(f,{id:n,name:t,phone:r},n)}))})},j=t(9439),w="ContactForm_addContacts__5b4Ah",N="ContactForm_form__dhl+T",k="ContactForm_contactsLable__wW0ez",A="ContactForm_contactsInput__H4gys",F=function(){var e=(0,r.useState)(""),n=(0,j.Z)(e,2),t=n[0],o=n[1],u=(0,r.useState)(""),i=(0,j.Z)(u,2),s=i[0],f=i[1],p=(0,a.I0)(),d=(0,a.v9)(g);return(0,l.jsx)("div",{children:(0,l.jsxs)("form",{className:N,onSubmit:function(e){e.preventDefault();var n=d.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}));n?alert("".concat(t," is already in contacts.")):(p((0,c.el)({name:t,number:s})),o(""),f(""))},children:[(0,l.jsx)("label",{className:k,children:"Contact name"}),(0,l.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(e){o(e.target.value)},placeholder:"Mango...",className:A}),(0,l.jsx)("label",{className:k,children:"Phone"}),(0,l.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:s,onChange:function(e){f(e.target.value)},placeholder:"+1111111111111",className:A}),(0,l.jsx)("button",{type:"submit",className:w,children:"Add contact"})]})})},I=t(1634),z="Filter_filterContainer__8G57N",L="Filter_filterInput__1Cysk",E=function(){var e=(0,a.I0)(),n=(0,a.v9)(y);return(0,l.jsxs)("div",{className:z,children:[(0,l.jsx)("label",{children:" Find contacts by name"}),(0,l.jsx)("input",{type:"text",className:L,value:n,onChange:function(n){return e((0,I.sP)(n.target.value))}})]})},S="Contacts_contactsContainer__7xvg8";function q(){var e=(0,a.I0)(),n=(0,a.v9)(x);return(0,r.useEffect)((function(){e((0,c.yF)())}),[e]),(0,l.jsx)("div",{className:S,children:(0,l.jsx)("div",{children:(0,l.jsxs)(o.B6,{children:[(0,l.jsx)(F,{}),(0,l.jsx)(E,{}),(0,l.jsx)("div",{children:n&&"Request in progress..."}),(0,l.jsx)(b,{})]})})})}}}]);
//# sourceMappingURL=896.dc91034f.chunk.js.map