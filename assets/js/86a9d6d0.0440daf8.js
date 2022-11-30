"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47171],{70167:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64541:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(60953),r=n(59005),l=(n(45721),n(70167)),i=["components"],o={tags:["form","text","select","textarea","input","label","helper","caption"],title:"Form Control"},s=void 0,u={unversionedId:"design/components/form-control",id:"version-0.3.1-beta/design/components/form-control",title:"Form Control",description:"Description",source:"@site/versioned_docs/version-0.3.1-beta/design/components/form-control.md",sourceDirName:"design/components",slug:"/design/components/form-control",permalink:"/docs/design/components/form-control",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.3.1-beta/design/components/form-control.md",tags:[{label:"form",permalink:"/docs/tags/form"},{label:"text",permalink:"/docs/tags/text"},{label:"select",permalink:"/docs/tags/select"},{label:"textarea",permalink:"/docs/tags/textarea"},{label:"input",permalink:"/docs/tags/input"},{label:"label",permalink:"/docs/tags/label"},{label:"helper",permalink:"/docs/tags/helper"},{label:"caption",permalink:"/docs/tags/caption"}],version:"0.3.1-beta",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["form","text","select","textarea","input","label","helper","caption"],title:"Form Control"},sidebar:"design",previous:{title:"Confirm Dialog",permalink:"/docs/design/components/confirm-dialog"},next:{title:"Input and Textarea",permalink:"/docs/design/components/input"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"State",id:"state",level:3},{value:"Types",id:"types",level:3},{value:"Size",id:"size",level:3},{value:"States",id:"states",level:2},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Content considerations",id:"content-considerations",level:3},{value:"Research",id:"research",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"A combination of label, input, and caption to collect or manipulate data."),(0,l.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Label",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Required flag"),(0,l.kt)("li",{parentName:"ul"},"Optional flag"),(0,l.kt)("li",{parentName:"ul"},"Info icon"))),(0,l.kt)("li",{parentName:"ul"},"Input type (text, textarea, select)"),(0,l.kt)("li",{parentName:"ul"},"Caption")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Form control uses embedded input, textarea or select components."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Required fields will show "(required)" following the label.'),(0,l.kt)("li",{parentName:"ul"},"Optional fields will only include the label."),(0,l.kt)("li",{parentName:"ul"},"An info icon can be placed after the Label to trigger a tooltip explaining the Form Control in more detail.")),(0,l.kt)("h3",{id:"state"},"State"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default use for forms, individual inputs"))),(0,l.kt)("li",{parentName:"ul"},"Error",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Indicates missing or invalid data")))),(0,l.kt)("h3",{id:"types"},"Types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Input"),(0,l.kt)("li",{parentName:"ul"},"Textarea"),(0,l.kt)("li",{parentName:"ul"},"Select",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"See more on usage in Input, Textarea, and Select")))),(0,l.kt)("h3",{id:"size"},"Size"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"L",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default, use in most cases"))),(0,l.kt)("li",{parentName:"ul"},"M",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use within another widget or experience, when space is at a premium, e.g. Pagination (table)")))),(0,l.kt)("h2",{id:"states"},"States"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default"),(0,l.kt)("li",{parentName:"ul"},"Hover"),(0,l.kt)("li",{parentName:"ul"},"Focus"),(0,l.kt)("li",{parentName:"ul"},"Error",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Note: The warning icon is required for all error-state input fields, as an additional indicator that doesn't rely on color."))),(0,l.kt)("li",{parentName:"ul"},"Disabled")),(0,l.kt)("h3",{id:"dos-and-donts"},"Dos and don'ts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Do stack form fields when displaying a set. This allows users to better scan down the list of fields."),(0,l.kt)("li",{parentName:"ul"},"Do not use a Form Control with a Select for less than 5 options. Instead, use a Radio Group."),(0,l.kt)("li",{parentName:"ul"},"Do display a required flag on all required fields. Though potentially redundant, this helps to eliminate cognitive load for users.")),(0,l.kt)("h3",{id:"best-practices"},"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Labels should be present in most use cases for Form Controls. If not visually present, label content should be provided as it will still be made available to assistive technologies.")),(0,l.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,l.kt)("h3",{id:"microcopy"},"Microcopy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Labels accompanying text inputs are written in sentence-case."),(0,l.kt)("li",{parentName:"ul"},"Label length should be limited to 16 characters or approximately 3 words."),(0,l.kt)("li",{parentName:"ul"},"Do not end labels in punctuation unless you are using a full sentence (which should not be common)."),(0,l.kt)("li",{parentName:"ul"},'Captions, when written as examples, should precede the example with "e.g.,".'),(0,l.kt)("li",{parentName:"ul"},"Do not exceed 40 characters for captions."),(0,l.kt)("li",{parentName:"ul"},"Use sentence case and punctuation for captions."),(0,l.kt)("li",{parentName:"ul"},"See Content Guidelines for proper pronoun/determiner use.")),(0,l.kt)("h3",{id:"content-considerations"},"Content considerations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Captions should never repeat the label verbatim."),(0,l.kt)("li",{parentName:"ul"},"Replace the need for placeholders in text inputs and textareas with just enough direction in captions."),(0,l.kt)("li",{parentName:"ul"},"When it works, use the original caption in error states, but style accordingly. If needed, replace the original caption with concise, error-based information in the event of an error.")),(0,l.kt)("h2",{id:"research"},"Research"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nngroup.com/articles/required-fields/"},"https://www.nngroup.com/articles/required-fields/"))))}m.isMDXComponent=!0}}]);