"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3085],{40966:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var a=t(45721),r=t(88795),l=t(30820),i=t(94494),c=t(66292),o=t(60852),s=t(39741),u="mdxPageWrapper_TLRC";function m(e){var n=e.content,t=n.metadata,m=t.title,d=t.description,v=t.frontMatter,f=v.wrapperClassName,g=v.hide_table_of_contents;return a.createElement(l.FG,{className:(0,r.Z)(null!=f?f:i.k.wrapper.mdxPages,i.k.page.mdxPage)},a.createElement(l.d,{title:m,description:d}),a.createElement(c.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,r.Z)("row",u)},a.createElement("div",{className:(0,r.Z)("col",!g&&"col--8")},a.createElement("article",null,a.createElement(o.Z,null,a.createElement(n,null)))),!g&&n.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:n.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level}))))))}},39741:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(60953),r=t(59005),l=t(45721),i=t(88795),c=t(98138),o="tableOfContents_M8wi",s=["className"];function u(e){var n=e.className,t=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",n)},l.createElement(c.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},98138:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(60953),r=t(59005),l=t(45721),i=t(91829),c=["parentIndex"];function o(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,l=(0,r.Z)(e,c);t>=0?n[t].children.push(l):a.push(l)})),a}function s(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function u(e){var n=e.getBoundingClientRect();return n.top===n.bottom?u(e.parentNode):n}function m(e,n){var t,a,r=n.anchorTopOffset,l=e.find((function(e){return u(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,l.useRef)(0),n=(0,i.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function v(e){var n=(0,l.useRef)(void 0),t=d();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],r=n;r<=t;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=m(c,{anchorTopOffset:t.current}),s=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function f(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(f,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}var g=l.memo(f),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var n=e.toc,t=e.className,c=void 0===t?"table-of-contents table-of-contents__left-border":t,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,f=void 0===d?void 0:d,h=e.minHeadingLevel,L=e.maxHeadingLevel,N=(0,r.Z)(e,p),C=(0,i.L)(),E=null!=h?h:C.tableOfContents.minHeadingLevel,H=null!=L?L:C.tableOfContents.maxHeadingLevel,x=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:o(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:E,maxHeadingLevel:H});return v((0,l.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:E,maxHeadingLevel:H}}),[m,f,E,H])),l.createElement(g,(0,a.Z)({toc:x,className:c,linkClassName:m},N))}},80858:function(e,n,t){var a=t(45721),r=t(93595),l=t(77499),i=t(38756),c=t(84637),o=t(5314),s=t(22534),u=t(69043),m=t(28948),d=Object.assign({React:a},a,{getButtonProps:r._m,getFormControlProps:r.Np,getGridProps:r.Cg,getGridItemProps:r.$L,getIconButtonProps:r.Bb,getIconProps:r.L1,getInputProps:r.TC,getPaginationProps:r.Dx,getSelectProps:r.gQ,CalendarIcon:l.Z,ChevronDownIcon:i.Z,EyeIcon:c.Z,EyeOffIcon:o.Z,PlaceholderIcon:s.Z,WarningTriangleFilledIcon:u.Z,useAutoFormatDate:m.Iq});n.Z=d}}]);