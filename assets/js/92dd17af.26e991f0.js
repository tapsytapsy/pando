"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7774],{6935:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(3289);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},4433:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(5161),i=t(3289),o=t(5941),l=t(8629),s=t(2238),r="tabItem_BUXP";function c(e){var n,t,o,c=e.lazy,p=e.block,u=e.defaultValue,m=e.values,d=e.groupId,v=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,l.lx)(g,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(n=null!=u?u:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=h[0])?void 0:o.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),I=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,i.useState)(k),x=N[0],y=N[1],z=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=I[d];null!=T&&T!==x&&g.some((function(e){return e.value===T}))&&y(T)}var C=function(e){var n=e.currentTarget,t=z.indexOf(n),a=g[t].value;a!==x&&(E(n),y(a),null!=d&&w(d,a))},L=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=z.indexOf(e.currentTarget)+1;t=z[a]||z[0];break;case"ArrowLeft":var i=z.indexOf(e.currentTarget)-1;t=z[i]||z[z.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return z.push(e)},onKeyDown:L,onFocus:C,onClick:C},o,{className:(0,s.Z)("tabs__item",r,null==o?void 0:o.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),c?(0,i.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function p(e){var n=(0,o.Z)();return i.createElement(c,(0,a.Z)({key:String(n)},e))}},3445:function(e,n,t){t.d(n,{Z:function(){return x}});var a=t(5161),i=t(9675),o=t(3289),l=t(939),s="button_sEkW",r="chakra_ow8e",c="chakraCircle_c8Xz",p="list_rMMG",u="listItem_bLPI",m="icon_nzIq",d=["className"],v=o.createElement("svg",{className:m,focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"CodeRoundedIcon"},o.createElement("path",{d:"M8.7 15.9 4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4a.9839.9839 0 0 0-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0 3.9-3.9-3.9-3.9a.9839.9839 0 0 1 0-1.4c.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0a.9839.9839 0 0 1 0-1.4z"})),h=o.createElement("svg",{className:m,focusable:"false","aria-hidden":"true",viewBox:"0 0 1024 1024"},o.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}));var g={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:v,id:"source",href:"",label:"Show full source"},styled:{icon:h,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:o.createElement("svg",{className:m+" "+r,viewBox:"0 0 582 582",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true"},o.createElement("rect",{className:c,width:"582",height:"582",rx:"291"}),o.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:o.createElement("svg",{className:m,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32",fill:"none",focusable:"false","aria-hidden":"true"},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:h,id:"svelte",label:"View Svelte"}}};function f(e){var n=g.results[e.techId],t=(0,l._)({size:"xs"}).className,a="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return o.createElement("a",{"aria-label":n.label,className:t+" "+s,href:a,rel:"noopener noreferrer",target:"_blank",title:n.label},e.children)}function k(e){var n=e.techId,t=Object.assign({},(0,l._)({size:"xs"})),r=t.className,c=(0,i.Z)(t,d);return o.createElement("button",(0,a.Z)({className:r+" "+s,onClick:e.onToggleShow,title:g.results[n].label},c),o.createElement(b,{tabId:n}))}function b(e){return g.results[e.tabId].icon}function I(e){var n=e.techId;return o.createElement("li",{className:u},"source"===n?o.createElement(k,{onToggleShow:e.onToggleShow,techId:n}):o.createElement(f,{techId:n,href:e.sandboxList[n]},o.createElement(b,{tabId:n})))}function w(e){return o.createElement("ul",{className:p},g.items.map((function(n){return o.createElement(I,{key:n,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:n})})))}function N(e){var n=(0,o.useState)(!1),t=n[0],a=n[1];return o.createElement("div",null,o.createElement(w,{onToggleShow:function(){a((function(e){return!e}))},sandboxList:e.sandboxList}),t?e.fullCode:e.children)}var x=(0,o.memo)(N)},8971:function(e,n,t){t.r(n),t.d(n,{assets:function(){return N},contentTitle:function(){return I},default:function(){return z},frontMatter:function(){return b},metadata:function(){return w},toc:function(){return x}});var a=t(5161),i=t(9675),o=t(3289),l=t(3369),s=t(4433),r=t(6935),c=t(3445),p=t(9349);function u(){return o.createElement(p.Z,null,"const MenuIcon = (props) => (\n  <span {...getIconProps()} {...props}>\n    {menuIcon}\n  </span>\n)")}function m(){return o.createElement(p.Z,null,"import { menuIcon } from '@pluralsight/icons'\nimport { getIconProps } from '@pluralsight/headless-styles'\n\nconst MenuIcon = (props) => (\n  <span {...getIconProps()} {...props}>\n    {menuIcon}\n  </span>\n)\n\nexport default MenuIcon")}function d(){return o.createElement(p.Z,null,"<span {...getIconProps()}>{menuIcon}</span>\n<span {...getIconProps({ size: 'xs' })}>{menuIcon}</span>\n<span {...getIconProps({ size: 's' })}>{menuIcon}</span>\n<span {...getIconProps({ size: 'm' })}>{menuIcon}</span>\n<span {...getIconProps({ size: 'l' })}>{menuIcon}</span>")}function v(){return o.createElement(p.Z,null,"import { menuIcon } from '@pluralsight/icons'\nimport { getIconProps } from '@pluralsight/headless-styles'\n\nexport default function IconsSizes() {\n  return (\n    <div>\n      <span {...getIconProps()}>{menuIcon}</span>\n      <span {...getIconProps({ size: 'xs' })}>{menuIcon}</span>\n      <span {...getIconProps({ size: 's' })}>{menuIcon}</span>\n      <span {...getIconProps({ size: 'm' })}>{menuIcon}</span>\n      <span {...getIconProps({ size: 'l' })}>{menuIcon}</span>\n    </div>\n  );\n}")}var h="<div style={{\n  color: 'var(--ps-danger-text)'\n  background: 'var(--ps-danger-background)'\n}}>\n  ...\n  {/* icon color will match text */}\n  <span>{warningIcon}</span>\n  ...\n</div>";function g(){return o.createElement(p.Z,null,h)}function f(){return o.createElement(p.Z,null,"import { warningIcon } from '@pluralsight/icons'\n\nconst DangerBlock = (\n"+h.replace(/^(.)/gm,"  $1")+"\n)")}var k=["components"],b={sidebar_position:2,tags:["Development","Usage","Icons"]},I="API",w={unversionedId:"development/packages/icons/api",id:"development/packages/icons/api",title:"API",description:"This is unreleased documentation for Pluralsight Design icons package.",source:"@site/docs/development/packages/icons/api.mdx",sourceDirName:"development/packages/icons",slug:"/development/packages/icons/api",permalink:"/docs/development/packages/icons/api",editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/packages/icons/api.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Usage",permalink:"/docs/tags/usage"},{label:"Icons",permalink:"/docs/tags/icons"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Development","Usage","Icons"]},sidebar:"development",previous:{title:"Intro",permalink:"/docs/development/packages/icons/intro"},next:{title:"Roadmap",permalink:"/docs/development/discover-more/roadmap"}},N={},x=[{value:"Installation",id:"installation",level:2},{value:"Basic example",id:"basic-example",level:2},{value:"Importing by framework",id:"importing-by-framework",level:3},{value:"Icon colors",id:"icon-colors",level:2},{value:"Icon sizes",id:"icon-sizes",level:2},{value:"Icons",id:"icons",level:2},{value:"Icon size guide",id:"icon-size-guide",level:2},{value:"Importing SVG files (fallback)",id:"importing-svg-files-fallback",level:2}],y={toc:x};function z(e){var n=e.components,t=(0,i.Z)(e,k);return(0,l.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api"},"API"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is ",(0,l.kt)("strong",{parentName:"p"},"unreleased")," documentation for Pluralsight Design ",(0,l.kt)("strong",{parentName:"p"},"icons")," package."))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"To use icons in your application, install the npm package."),(0,l.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/icons@alpha\n"))),(0,l.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/icons@alpha\n")))),(0,l.kt)("h2",{id:"basic-example"},"Basic example"),(0,l.kt)(c.Z,{fullCode:(0,l.kt)(m,{mdxType:"BasicIconFullPreview"}),sandboxList:{chakra:"",joy:"",styled:"",svelte:""},mdxType:"LiveExampleTabs"},(0,l.kt)(u,{mdxType:"BasicIconPreview"})),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This library provides only the svg element to allow for maximum flexibility.\nAdditional attributes, such as sizing, will be provided by the ",(0,l.kt)("inlineCode",{parentName:"p"},"headless-styles")," package."))),(0,l.kt)("h3",{id:"importing-by-framework"},"Importing by framework"),(0,l.kt)("p",null,"Icons can be imported by name from the package root for React JSX."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { menuIcon } from '@pluralsight/icons'\n")),(0,l.kt)("p",null,"If you are using a different, supported framework, append its name to the path."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { menuIcon } from '@pluralsight/icons/svelte'\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If your bundler does not support tree shaking, please see our notes on ",(0,l.kt)("a",{parentName:"p",href:"#minimizing-bundle-size"},"minimizing bundle size")))),(0,l.kt)("h2",{id:"icon-colors"},"Icon colors"),(0,l.kt)("p",null,"By default the icons are monochromatic and will inherit the ",(0,l.kt)("inlineCode",{parentName:"p"},"color")," of their parent.\nThis ensures the icon color matches its context by default and facilitates theming while still allowing for control over the icon's color directly."),(0,l.kt)(c.Z,{fullCode:(0,l.kt)(f,{mdxType:"IconColorFullPreview"}),sandboxList:{chakra:"",joy:"",styled:"",svelte:""},mdxType:"LiveExampleTabs"},(0,l.kt)(g,{mdxType:"IconColorPreview"})),(0,l.kt)("h2",{id:"icon-sizes"},"Icon sizes"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Icons")," come in four size variants: xs, s, m (default), l."),(0,l.kt)(c.Z,{fullCode:(0,l.kt)(v,{mdxType:"IconSizesFullPreview"}),sandboxList:{chakra:"",joy:"",styled:"",svelte:""},mdxType:"LiveExampleTabs"},(0,l.kt)(d,{mdxType:"IconSizesPreview"})),(0,l.kt)("h2",{id:"icons"},"Icons"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"TBD")),(0,l.kt)("h2",{id:"icon-size-guide"},"Icon size guide"),(0,l.kt)("p",null,"We have defined four standard sizes for icons. This sizing should be applied using the ",(0,l.kt)("inlineCode",{parentName:"p"},"headless-styles")," package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example interface - does not exist in types"',title:'"Example',interface:!0,"-":!0,does:!0,not:!0,exist:!0,in:!0,'types"':!0},"interface IconSizeGuide {\n  xs: {\n    height: '1rem'\n    width: '1rem'\n  }\n  s: {\n    height: '1.25rem'\n    width: '1.25rem'\n  }\n  m: {\n    height: '1.5rem'\n    width: '1.5rem'\n  }\n  l: {\n    height: '3rem'\n    width: '3rem'\n  }\n}\n")),(0,l.kt)("h2",{id:"importing-svg-files-fallback"},"Importing SVG files (fallback)"),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Directly importing the SVG files is meant only for unsupported frameworks and is not recommended.\nThis approach requires that you provide any tooling necessary for importing and using the SVG elements in your environment."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Importing an icon as SVG file into an app created with create-react-app"',title:'"Importing',an:!0,icon:!0,as:!0,SVG:!0,file:!0,into:!0,app:!0,created:!0,with:!0,'create-react-app"':!0},"import { ReactComponent as MenuIcon } from '@pluralsight/icons/svg/navigation/menu.svg'\nimport { getIconProps } from '@pluralsight/headless-styles'\n\nconst MyMenuComponent = (props) => (\n  {/*\n    Props are applied to the parent rather than directly to the icon component\n    in order to maintain consistent structural assumptions.\n  */}\n  <span {...getIconProps()} {...props}>\n    <MenuIcon />\n  </span>\n)\n")))}z.isMDXComponent=!0},939:function(e,n,t){t.d(n,{_:function(){return s}});const a="text",i="m",o="";var l={base:"base_O69R",text:"text_bEjD","text-weak":"text-weak_Rbqr",weak:"weak_YT7G",medium:"medium_f1HB",strong:"strong_UdYx","size-xs":"size-xs_riZb","size-s":"size-s_LOav","size-l":"size-l_rnte",light:"light_EgN9",chakra:"chakra_sbGE"};function s(e){var n;const{kind:t,size:s,tech:r}=function(e){var n,t,l;return{kind:null!==(n=null==e?void 0:e.kind)&&void 0!==n?n:a,size:null!==(t=null==e?void 0:e.size)&&void 0!==t?t:i,tech:null!==(l=null==e?void 0:e.tech)&&void 0!==l?l:o}}(e),c=null!==(n=l[r])&&void 0!==n?n:"";return{className:`ps-btn ${l.base} ${l[t]} ${l[`size-${s}`]} ${c}`,type:"button"}}}}]);