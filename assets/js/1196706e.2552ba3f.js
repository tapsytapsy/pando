"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51716],{9637:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},76548:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},46997:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"person",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 8c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4Zm2 0c0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2s-2-.897-2-2ZM4.5 20a.5.5 0 0 1-.5-.5V19c0-3.533 3.29-6 8-6s8 2.467 8 6v.5a.5.5 0 0 1-.5.5h-15Zm13.342-2H6.159c.598-1.808 2.834-3 5.842-3 3.008 0 5.243 1.192 5.841 3Z"})})}},79630:function(e,t,n){var a=n(45721),l=n(60103),s=n(60853);function o(e){var t=(0,l.l4)({label:e.label,sentiment:"default",size:e.size});return a.createElement("span",t.wrapper,a.createElement("span",t.label,e.size))}t.Z=function(){return a.createElement(s.Z,null,a.createElement(o,{size:"xs"}),a.createElement(o,{size:"s"}),a.createElement(o,{size:"m"}),a.createElement(o,{size:"l"}),a.createElement(o,{size:"xl"}))}},12946:function(e,t,n){n.d(t,{K:function(){return s},m:function(){return o}});var a=n(45721),l=n(63467);function s(){return a.createElement(l.Z,null,"const avatar = getAvatarProps({\n  label: 'extra large avatar',\n  size: 'xl'\n})\n\n<span {...avatar.wrapper}>\n  <span {...avatar.label}>xl</span>\n</span>")}function o(){return a.createElement(l.Z,null,"import { getAvatarProps } from '@pluralsight/headless-styles'\n\nexport default function Avatar(props) {\n  const avatar = getAvatarProps({\n    label: props.label\n    sentiment: props.sentiment,\n    // highlight-next-line\n    size: props.size,\n  })\n\n  return (\n    <span {...avatar.wrapper}>\n      <span {...avatar.label}>{avatar.label.value}</span>\n    </span>\n  )\n}")}},71380:function(e,t,n){var a=n(45721),l=n(60103),s=n(46997),o=n(60853);function r(e){var t=(0,l.l4)({label:e.label,sentiment:e.sentiment,size:e.size});return a.createElement("span",t.wrapper,a.createElement(s.Z,(0,l.L1)(t.iconOptions)))}function i(e){var t=(0,l.l4)({label:e.label,sentiment:e.sentiment,size:e.size});return a.createElement("span",t.wrapper,a.createElement("span",t.label,t.label.value))}t.Z=function(){return a.createElement(o.Z,null,a.createElement(i,{sentiment:"default",label:"default avatar"}),a.createElement(r,{sentiment:"default",label:"default icon avatar"}),a.createElement(i,{sentiment:"action",label:"action avatar"}),a.createElement(r,{sentiment:"action",label:"action icon avatar"}))}},44194:function(e,t,n){n.d(t,{W:function(){return o},v:function(){return s}});var a=n(45721),l=n(63467);function s(){return a.createElement(l.Z,null,"const avatar = getAvatarProps({\n  label: 'Pluralsight avatar'\n  sentiment: 'default',\n})\n\n<span {...avatar.wrapper}>\n  <span {...avatar.label}>{avatar.label.value}</span>\n</span>")}function o(){return a.createElement(l.Z,null,"import { getAvatarProps } from '@pluralsight/headless-styles'\n\nexport default function Avatar(props) {\n  const avatar = getAvatarProps({\n    label: props.label,\n    // highlight-next-line\n    sentiment: props.sentiment,\n    size: props.size,\n  })\n\n  return (\n    <span {...avatar.wrapper}>\n      <span {...avatar.label}>{avatar.label.value}</span>\n    </span>\n  )\n}")}},60853:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),l={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"},s={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function o(e){var t,n;void 0===e&&(e=s);var o=null!=(t=e.type)?t:s.type,r=e.gridColumns?"repeat("+e.gridColumns+", minmax(auto, max-content))":"initial",i={alignItems:e.alignItems,gridTemplateColumns:r,justifyContent:e.justifyContent,textAlign:null!=(n=e.textAlign)?n:"center"};return a.createElement("div",{className:l[o],style:i},e.children)}},26652:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(60953),l=n(59005),s=n(45721),o=n(60103),r="button_sEkW",i="chakra_ow8e",p="chakraCircle_c8Xz",c="list_rMMG",u="listItem_bLPI",d="icon_nzIq",m="svelteBackground_c8BA",g="svelteOutline_tdvb",v=["className"],h=s.createElement("svg",{"aria-hidden":"true",className:d,focusable:"false",viewBox:"0 0 24 24"},s.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),f=s.createElement("svg",{"aria-hidden":"true",className:d,focusable:"false",viewBox:"0 0 1024 1024"},s.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),b=s.createElement("svg",{"aria-hidden":"true",className:""+d,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{className:g,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),s.createElement("path",{className:m,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var P={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:h,id:"source",href:"",label:"Show full source"},styled:{icon:f,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:s.createElement("svg",{"aria-hidden":"true",className:d+" "+i,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},s.createElement("rect",{className:p,width:"582",height:"582",rx:"291"}),s.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:s.createElement("svg",{"aria-hidden":"true",className:d,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:b,id:"svelte",label:"View Svelte"}}},k={size:"m",usage:"text"};function w(e){var t=P.results[e.techId],n=(0,o.Bb)(k).button.className,a="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return s.createElement("a",{"aria-label":t.label,className:n+" "+r,href:a,name:t.label,rel:"noopener noreferrer",target:"_blank",title:t.label},e.children)}function y(e){var t=e.techId,n=Object.assign({},(0,o.Bb)(k)).button,i=n.className,p=(0,l.Z)(n,v);return s.createElement("button",(0,a.Z)({className:i+" "+r,onClick:e.onToggleShow,title:P.results[t].label},p),s.createElement(N,{tabId:t}))}function N(e){return P.results[e.tabId].icon}function x(e){var t=e.techId;return s.createElement("li",{className:u},"source"===t?s.createElement(y,{onToggleShow:e.onToggleShow,techId:t}):s.createElement(w,{techId:t,href:e.sandboxList[t]},s.createElement(N,{tabId:t})))}function C(e){return s.createElement("ul",{className:c},P.items.map((function(t){return s.createElement(x,{key:t,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:t})})))}function S(e){var t=(0,s.useState)(!1),n=t[0],a=t[1];return s.createElement("div",null,s.createElement(C,{onToggleShow:function(){a((function(e){return!e}))},sandboxList:e.sandboxList}),n?e.fullCode:e.children)}var E=(0,s.memo)(S)},94880:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(45721),l=n(60103),s=n(9637),o=n(76548);function r(e){var t=e.href,n=(0,l.j8)({href:t}),r=(0,l.L1)(n.iconOptions),i=t.includes("github")?s.Z:o.Z;return a.createElement("a",n.link,a.createElement(i,r),e.children)}},80858:function(e,t,n){var a=n(45721),l=n(60103),s=n(16284),o=n(74149),r=n(99170),i=n(31072),p=n(88878),c=n(82657),u=n(56561),d=n(30814),m=n(90354),g=Object.assign({React:a},a,{getButtonProps:l._m,getFormControlProps:l.Np,getGridProps:l.XN,getGridItemProps:l.nF,getIconButtonProps:l.Bb,getIconProps:l.L1,getInputProps:l.TC,getMenuProps:l.tm,getMenuItemProps:l.H_,getPaginationProps:l.uX,getPopoverProps:l.Jw,getSelectProps:l.Sy,CalendarIcon:s.Z,ChevronDownIcon:o.Z,ChevronRightIcon:r.Z,CloseIcon:i.Z,EyeIcon:p.Z,EyeOffIcon:c.Z,PlaceholderIcon:u.Z,WarningTriangleFilledIcon:d.Z,useAutoFormatDate:m.y0,useMenuInteraction:m.P8,useRovingTabIndex:m.XZ,useSubmenuInteraction:m.iL});t.Z=g},89122:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(60953),l=n(59005),s=(n(45721),n(70167)),o=(n(71380),n(44194),n(79630),n(12946),n(94880)),r=(n(26652),["components"]),i={tags:["Development","Packages","Components","Headless Styles","Pagination"]},p=void 0,c={unversionedId:"development/headless-styles/Pagination",id:"version-0.3.1-beta/development/headless-styles/Pagination",title:"Pagination",description:"Pagination actions help users navigate between large lists of data.",source:"@site/versioned_docs/version-0.3.1-beta/development/headless-styles/Pagination.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/Pagination",permalink:"/docs/development/headless-styles/Pagination",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.3.1-beta/development/headless-styles/Pagination.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Components",permalink:"/docs/tags/components"},{label:"Headless Styles",permalink:"/docs/tags/headless-styles"},{label:"Pagination",permalink:"/docs/tags/pagination"}],version:"0.3.1-beta",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Pagination"]},sidebar:"development",previous:{title:"Modal",permalink:"/docs/development/headless-styles/Modal"},next:{title:"Popover",permalink:"/docs/development/headless-styles/Popover"}},u={},d=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Pagination",id:"basic-pagination",level:3},{value:"Two Button Pagination",id:"two-button-pagination",level:3},{value:"Pagination Bar",id:"pagination-bar",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"PaginationOptions",id:"paginationoptions",level:3},{value:"Props",id:"props",level:2},{value:"PaginationProps",id:"paginationprops",level:3},{value:"JSPaginationProps",id:"jspaginationprops",level:3}],m={toc:d};function g(e){var t=e.components,n=(0,l.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Pagination actions help users navigate between large lists of data."),(0,s.kt)(o.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/Pagination",mdxType:"ViewSourceLink"},"View source"),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getPaginationProps } from '@pluralsight/headless-styles'\n")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"basic-pagination"},"Basic Pagination"),(0,s.kt)("p",null,'For a simple approach to pagination using a "hybrid lazy" approach. Just use a the ',(0,s.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/Button"},"Button API")," to trigger your Fetch that loads more data into the page."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function PaginatedList() {\n  return <button {...getButtonProps().button}>Show more</button>\n}\n")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"Chakra")," and ",(0,s.kt)("strong",{parentName:"p"},"MUI")," do not support Pagination. We recommend using the native Headless-styles API we provide on this page.")),(0,s.kt)("h3",{id:"two-button-pagination"},"Two Button Pagination"),(0,s.kt)("p",null,'For an approach similar to Github, that allows users to navigate to "newer" or "older" content. Use the default ',(0,s.kt)("inlineCode",{parentName:"p"},"getPaginationProps")," helper."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function PaginationButtons() {\n  const styles = getPaginationProps()\n\n  return (\n    <div {...styles.container}>\n      <div>\n        <button {...styles.newer} data-disabled>\n          Newer\n        </button>\n        <button {...styles.older}>Older</button>\n      </div>\n    </div>\n  )\n}\n")),(0,s.kt)("h3",{id:"pagination-bar"},"Pagination Bar"),(0,s.kt)("p",null,"For an approach that allows filtering, page navigation, and text information, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"getPaginationProps")," helper with the ",(0,s.kt)("inlineCode",{parentName:"p"},"cols")," option set to the amount of information you would like to display."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function PaginationActions() {\n  const [rowOption, setRowOption] = useState('')\n  const selectStyles = getSelectProps({\n    id: 'row-count',\n    name: 'row_count',\n    placeholder: 'Choose row count',\n    size: 'm',\n    value: rowOption,\n  })\n  const styles = getPaginationProps({ cols: 3 })\n  const iconProps = getIconProps(selectStyles.iconOptions)\n\n  function handleSelectChange(e) {\n    setRowOption(e.target.value)\n  }\n\n  return (\n    <div\n      {...styles.container}\n      style={{\n        gridTemplateColumns: '1fr 1fr auto',\n      }}\n    >\n      <div>\n        <small {...styles.text}>\n          <strong>1-25</strong> of 1,2345\n        </small>\n      </div>\n      <div>\n        <div {...selectStyles.fieldWrapper}>\n          <div data-docsIgnore=\"iconSpacing\" {...selectStyles.selectWrapper}>\n            <select\n              {...selectStyles.select}\n              onChange={handleSelectChange}\n              style={{ marginTop: 'initial' }}\n            >\n              <option value=\"5\">5 Rows</option>\n              <option value=\"10\">10 Rows</option>\n              <option value=\"25\">25 Rows</option>\n            </select>\n            <span {...selectStyles.iconWrapper}>\n              <ChevronDownIcon {...iconProps} />\n            </span>\n          </div>\n        </div>\n      </div>\n      <div>\n        <button {...styles.newer} data-disabled>\n          Newer\n        </button>\n        <button {...styles.older}>Older</button>\n      </div>\n    </div>\n  )\n}\n")),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"getPaginationProps")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"options"),": ",(0,s.kt)("a",{parentName:"td",href:"#paginationOptions"},"PaginationOptions")),(0,s.kt)("td",{parentName:"tr",align:null},"cols: 1"),(0,s.kt)("td",{parentName:"tr",align:null},"Get CSS styles for pagination actions.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"getJSPaginationProps")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"options"),": ",(0,s.kt)("a",{parentName:"td",href:"#paginationOptions"},"PaginationOptions")),(0,s.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,s.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("h3",{id:"paginationoptions"},"PaginationOptions"),(0,s.kt)("p",null,"This interface is available as an ",(0,s.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface PaginationOptions {\n  cols: number\n  tech?: 'svelte' | ''\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { PaginationOptions } from '@pluralsight/headless-styles/types'\n")),(0,s.kt)("h2",{id:"props"},"Props"),(0,s.kt)("h3",{id:"paginationprops"},"PaginationProps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PaginationProps {\n  container: {\n    className: string\n    style: Record<CSSProps, string>\n  }\n  newer: {\n    className: string\n  }\n  older: {\n    className: string\n  }\n  text: {\n    className: string\n  }\n}\n")),(0,s.kt)("h3",{id:"jspaginationprops"},"JSPaginationProps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSPaginationProps {\n  container: {\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n  newer: {\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n  older: {\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n  text: {\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n}\n")))}g.isMDXComponent=!0}}]);