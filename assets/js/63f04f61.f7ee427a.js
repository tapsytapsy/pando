"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9813],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(n),u=o,h=g["".concat(s,".").concat(u)]||g[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},73974:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var a=n(81648),o=(n(45721),n(70167));const r={tags:["Circular Progress","Skeleton"],title:"Page Loading"},i=void 0,l={unversionedId:"learn/learn-pando/design-patterns/page-loading",id:"learn/learn-pando/design-patterns/page-loading",title:"Page Loading",description:"In order to provide a great user experience, you should design and develop initial Page Loading experiences to be handled differently than updating a section of the page after the page has loaded.",source:"@site/docs/learn/learn-pando/design-patterns/page-loading.mdx",sourceDirName:"learn/learn-pando/design-patterns",slug:"/learn/learn-pando/design-patterns/page-loading",permalink:"/docs/next/learn/learn-pando/design-patterns/page-loading",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/learn/learn-pando/design-patterns/page-loading.mdx",tags:[{label:"Circular Progress",permalink:"/docs/next/tags/circular-progress"},{label:"Skeleton",permalink:"/docs/next/tags/skeleton"}],version:"current",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["Circular Progress","Skeleton"],title:"Page Loading"},sidebar:"learn",previous:{title:"Entering Dates",permalink:"/docs/next/learn/learn-pando/design-patterns/entering-dates"},next:{title:"Displaying Large Lists",permalink:"/docs/next/learn/learn-pando/design-patterns/pagination"}},s={},d=[{value:"Page Loading vs. Content Loading",id:"page-loading-vs-content-loading",level:2},{value:"Page Loading",id:"page-loading",level:3},{value:"Content Loading",id:"content-loading",level:3},{value:"Skeletons for Page Loading",id:"skeletons-for-page-loading",level:2},{value:"Using with React.Suspense",id:"using-with-reactsuspense",level:3},{value:"Circular Progress for Content Loading",id:"circular-progress-for-content-loading",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to provide a great user experience, you should design and develop initial Page Loading experiences to be handled differently than updating a section of the page ",(0,o.kt)("em",{parentName:"p"},"after")," the page has loaded."),(0,o.kt)("h2",{id:"page-loading-vs-content-loading"},"Page Loading vs. Content Loading"),(0,o.kt)("p",null,'Let\'s define what we actually mean when we say the words "page loading". In a browser experience there is typically a lifecycle of a page regarding rendering content: Page Loading and Content Loading.'),(0,o.kt)("h3",{id:"page-loading"},"Page Loading"),(0,o.kt)("p",null,"Page loading refers to the initial page rendering when you ",(0,o.kt)("strong",{parentName:"p"},"first land on a web-page/route"),". For example, if you go to pluralsight.com and your dashboard (assuming you are logged in) for the first time, you may get a Dashboard page that has to initially load different types of information from the server in order to display the page you are supposed to be viewing."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Page Loading is when the browser fetches and displays a web page for the first time upon going to a specific route/URL.")),(0,o.kt)("h3",{id:"content-loading"},"Content Loading"),(0,o.kt)("p",null,"After the browser has finished the Page Loading stage, there may be a button that will ",(0,o.kt)("strong",{parentName:"p"},"update some information")," on that page when you click it, this is known as Content Loading."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Content Loading is when the browser updates a specific section of UI within a previously loaded web page.")),(0,o.kt)("p",null,"Now that you are more familiar with what we mean by Page Loading, let's discuss the pattern we recommend using."),(0,o.kt)("h2",{id:"skeletons-for-page-loading"},"Skeletons for Page Loading"),(0,o.kt)("p",null,"In Pando, we recommend the use of Skeletons for initial Page Loading experiences."),(0,o.kt)("p",null,"In this example, we are creating a Fallback component for a Profile Section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ProfileSkeleton() {\n  const circleSkeletonProps = getSkeletonProps({ kind: 'circle' })\n  const contentSkeletonProps = getSkeletonProps({ kind: 'content' })\n  const textSkeletonProps = getSkeletonProps({ kind: 'text' })\n\n  return (\n    <div style={{ display: 'flex', width: '100%' }}>\n      <div {...circleSkeletonProps} />\n      <div style={{ paddingInlineStart: '1rem', width: '50%' }}>\n        <div {...textSkeletonProps} />\n        <div {...textSkeletonProps} style={{ width: '6rem' }} />\n        <div {...contentSkeletonProps}>\n          <h2 style={{ visibility: 'hidden' }}>Some Title</h2>\n          <p>A description of the content.</p>\n        </div>\n      </div>\n    </div>\n  )\n}\n")),(0,o.kt)("h3",{id:"using-with-reactsuspense"},"Using with React.Suspense"),(0,o.kt)("p",null,"If you use React, you can easily create a Skeleton layout of what you want to display, then use the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactsuspense"},(0,o.kt)("inlineCode",{parentName:"a"},"Suspense"))," tag to automagically manage when they will appear and dissapear."),(0,o.kt)("p",null,"In the sandbox example below, we are using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/reference/react-hooks/usePreloadedImage"},"usePreloadedImage hook"),", which delivers a Promise so Suspense knows when to display the fallback or content."),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/ps-react-forked-5429oc?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"Preloaded Avatar Example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,o.kt)("h2",{id:"circular-progress-for-content-loading"},"Circular Progress for Content Loading"),(0,o.kt)("p",null,"Whenever you need to display a loading state within a section of a page that needs updating, use the Circular Progress."),(0,o.kt)("p",null,"Because this example requires more verbose code to mimic a data update, we will use a Sandbox preview:"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/epic-herschel-kdnlv3?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"epic-herschel-kdnlv3",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}c.isMDXComponent=!0}}]);