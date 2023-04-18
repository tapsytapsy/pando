"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9202],{61471:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(45721),r=t(94697),o=t(23038),s=t(31026),i=t(6115);function u(e){const{href:n}=e,t=(0,r.g)({href:n}),u=(0,o.g)(t.iconOptions),l=n.includes("github")?s.Z:i.Z;return a.createElement("a",t.link,a.createElement(l,u),e.children)}},34544:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=t(81648),r=(t(45721),t(70167)),o=t(61471);const s={tags:["React","Suspense","Image loading","Pre-loading images"],title:"useRovingTabIndex"},i=void 0,u={unversionedId:"reference/react-hooks/useRovingTabIndex",id:"reference/react-hooks/useRovingTabIndex",title:"useRovingTabIndex",description:"A hook for controlling the tabIndex prop when using a Roving Tabindex",source:"@site/docs/reference/react-hooks/useRovingTabIndex.mdx",sourceDirName:"reference/react-hooks",slug:"/reference/react-hooks/useRovingTabIndex",permalink:"/docs/next/reference/react-hooks/useRovingTabIndex",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/react-hooks/useRovingTabIndex.mdx",tags:[{label:"React",permalink:"/docs/next/tags/react"},{label:"Suspense",permalink:"/docs/next/tags/suspense"},{label:"Image loading",permalink:"/docs/next/tags/image-loading"},{label:"Pre-loading images",permalink:"/docs/next/tags/pre-loading-images"}],version:"current",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["React","Suspense","Image loading","Pre-loading images"],title:"useRovingTabIndex"},sidebar:"reference",previous:{title:"usePreloadedImage",permalink:"/docs/next/reference/react-hooks/usePreloadedImage"},next:{title:"useSubmenuInteraction",permalink:"/docs/next/reference/react-hooks/useSubmenuInteraction"}},l={},c=[{value:"Import",id:"import",level:2},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"My tabIndexes are not updating",id:"my-tabindexes-are-not-updating",level:3}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"A hook for controlling the tabIndex prop when using a Roving Tabindex strategy."),(0,r.kt)(o.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useRovingTabIndex.ts",mdxType:"ViewSourceLink"},"View source"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useRovingTabIndex } from '@pluralsight/react-utils'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"useRovingTabIndex()\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"useRovingTabIndex")," at the top level of the component that you would like use a Roving TabIndex strategy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {2,6}",showLineNumbers:!0,"{2,6}":!0},"export default function MenuItem(props) {\n  const rovingTabIndexProps = useRovingTabIndex()\n\n  return (\n    <li {...menuStyles.menuListItem}>\n      <button {...menuStyles.menuItem} {...rovingTabIndexProps}>\n        {props.children}\n      </button>\n    </li>\n  )\n}\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"This hook does not accept any parameters."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object containing a ",(0,r.kt)("inlineCode",{parentName:"p"},"tabIndex")," property of a Number value along with the event handlers needed to watch for focus events."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"my-tabindexes-are-not-updating"},"My tabIndexes are not updating"),(0,r.kt)("p",null,"Make sure you are spreading the return props given from this hook on the correct element. If you need to create multiple hooks, we recommend creating a reusable component that will keep the logic single-source and unique in instances."))}p.isMDXComponent=!0}}]);