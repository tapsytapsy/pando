"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7479],{61471:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(45721),r=n(94697),a=n(23038),s=n(31026),i=n(6115);function l(e){const{href:t}=e,n=(0,r.g)({href:t}),l=(0,a.g)(n.iconOptions),c=t.includes("github")?s.Z:i.Z;return o.createElement("a",n.link,o.createElement(c,l),e.children)}},64456:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=n(81648),r=(n(45721),n(70167)),a=n(61471);const s={tags:["React","Confirm Dialog","Modal","Keyboard Event","Focus Trap"],title:"useFocusTrap"},i=void 0,l={unversionedId:"reference/react-hooks/useFocusTrap",id:"reference/react-hooks/useFocusTrap",title:"useFocusTrap",description:"A hook for trapping focus within Modal and Dialog components.",source:"@site/docs/reference/react-hooks/useFocusTrap.mdx",sourceDirName:"reference/react-hooks",slug:"/reference/react-hooks/useFocusTrap",permalink:"/docs/next/reference/react-hooks/useFocusTrap",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/react-hooks/useFocusTrap.mdx",tags:[{label:"React",permalink:"/docs/next/tags/react"},{label:"Confirm Dialog",permalink:"/docs/next/tags/confirm-dialog"},{label:"Modal",permalink:"/docs/next/tags/modal"},{label:"Keyboard Event",permalink:"/docs/next/tags/keyboard-event"},{label:"Focus Trap",permalink:"/docs/next/tags/focus-trap"}],version:"current",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["React","Confirm Dialog","Modal","Keyboard Event","Focus Trap"],title:"useFocusTrap"},sidebar:"reference",previous:{title:"useEscToClose",permalink:"/docs/next/reference/react-hooks/useEscToClose"},next:{title:"useIsIndeterminate",permalink:"/docs/next/reference/react-hooks/useIsIndeterminate"}},c={},u=[{value:"Import",id:"import",level:2},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"My hook isn&#39;t trapping the focus",id:"my-hook-isnt-trapping-the-focus",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"A hook for trapping focus within Modal and Dialog components."),(0,r.kt)(a.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useFocusTrap.ts",mdxType:"ViewSourceLink"},"View source"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useFocusTrap } from '@pluralsight/react-utils'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FocusTrapOptions {\n  blockScroll?: boolean\n}\n\nuseFocusTrap(triggerRef: RefObject<HTMLButton>, options: FocusTrapOptions)\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," at the top level of the component in which you wish to trap the focus:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {3,6,14}",showLineNumbers:!0,"{3,6,14}":!0},"function AlertDialog(props, triggerRef) {\n  const { onClose, ...alertProps } = props\n  const { ref, onKeyDown } = useFocusTrap(triggerRef)\n\n  return (\n    <div {...alert.backdrop}>\n      <div {...alert.focusGuard} />\n\n      <div {...alert.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n        <section {...alert.section} ref={ref} onKeyDown={onKeyDown}>\n          <header {...alert.alertTitle}>Example Alert</header>\n          <p {...alert.alertBody}>\n            Performing this action will be permanent. Are you sure you want to\n            do it?\n          </p>\n          <footer {...alert.buttonGroup}>\n            <button {...cancelBtnProps} onClick={onClose}>\n              Cancel\n            </button>\n            <button {...primaryBtnProps}>Action</button>\n          </footer>\n        </section>\n      </div>\n\n      <div {...alert.focusGuard} />\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"triggerRef"),": a reference using ",(0,r.kt)("inlineCode",{parentName:"li"},"useRef")," placed on the trigger element that is responsible for displaying the Dialog/Modal (usually a Button)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": An Object containing blockScroll property that accepts a boolean value that indicates whether or not to prevent the page from scrolling.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object containing a ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," property to place on the element you would like to trap the focus within. An ",(0,r.kt)("inlineCode",{parentName:"p"},"onKeyDown")," event to place on the same element as the ",(0,r.kt)("inlineCode",{parentName:"p"},"ref"),' property to watch for "Tab" events within that section.'),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"my-hook-isnt-trapping-the-focus"},"My hook isn't trapping the focus"),(0,r.kt)("p",null,"Make sure you are placing the ",(0,r.kt)("a",{parentName:"p",href:"#returns"},"Return Props")," on the right elements."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ref")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onKeyDown")," should be placed on the same element that contain the focusable content."))}d.isMDXComponent=!0}}]);