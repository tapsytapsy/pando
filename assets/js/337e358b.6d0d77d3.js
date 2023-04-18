"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4714],{72032:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(81648),a=n(45721),r=n(31825),l=n(61471),i="grid_cC7H";function s(e){return a.createElement("li",(0,r.a)({colSpan:2}),a.createElement(l.Z,e,e.children))}function c(e){const{figma:t,github:n}=e,{className:l,...c}=(0,r.g)({cols:12,gap:8});return a.createElement("ul",(0,o.Z)({className:`${l} ${i}`},c),n&&a.createElement(s,{href:n},"View on Github"),t&&a.createElement(s,{href:t},"Figma Design"))}},27505:function(e,t,n){n(45721)},61471:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(45721),a=n(94697),r=n(23038),l=n(31026),i=n(6115);function s(e){const{href:t}=e,n=(0,a.g)({href:t}),s=(0,r.g)(n.iconOptions),c=t.includes("github")?l.Z:i.Z;return o.createElement("a",n.link,o.createElement(c,s),e.children)}},83292:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(81648),a=(n(45721),n(70167)),r=n(72032);n(27505);const l={tags:["page loading","route loading"],title:"Skeleton"},i=void 0,s={unversionedId:"reference/components/skeleton",id:"version-0.4.1/reference/components/skeleton",title:"Skeleton",description:"Used to display a loading state for page content.",source:"@site/versioned_docs/version-0.4.1/reference/components/skeleton.mdx",sourceDirName:"reference/components",slug:"/reference/components/skeleton",permalink:"/docs/reference/components/skeleton",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/skeleton.mdx",tags:[{label:"page loading",permalink:"/docs/tags/page-loading"},{label:"route loading",permalink:"/docs/tags/route-loading"}],version:"0.4.1",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["page loading","route loading"],title:"Skeleton"},sidebar:"reference",previous:{title:"Select",permalink:"/docs/reference/components/select"},next:{title:"Switch",permalink:"/docs/reference/components/switch"}},c={},p=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Text Skeleton",id:"text-skeleton",level:3},{value:"Content Block Skeleton",id:"content-block-skeleton",level:3},{value:"Circular Skeleton",id:"circular-skeleton",level:3},{value:"Fallback Example",id:"fallback-example",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to display a loading state for page content."),(0,a.kt)(r.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Skeleton",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getSkeletonProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SkeletonOptions {\n  kind?: 'content' | 'text' | 'circle'\n}\n\ngetSkeletonProps(options?: SkeletonOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { SkeletonOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container"),(0,a.kt)("li",{parentName:"ol"},"Content (optional)"),(0,a.kt)("li",{parentName:"ol"},"Text (optional)")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"text-skeleton"},"Text Skeleton"),(0,a.kt)("p",null,"Used to represent where lines of text may appear within your page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function TextSkeleton() {\n  const skellyProps = getSkeletonProps({ kind: 'text' })\n  return (\n    <div>\n      <div {...skellyProps} />\n      <div {...skellyProps} />\n      <div {...skellyProps} />\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"content-block-skeleton"},"Content Block Skeleton"),(0,a.kt)("p",null,"Used to represent where a block of content may appear within your page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ContentSkeleton() {\n  const skellyProps = getSkeletonProps({ kind: 'content' })\n  return (\n    <div>\n      <div {...skellyProps}>\n        <h2 data-site-override=\"hidden\">Some Title</h2>\n        <p>A description of the content.</p>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"circular-skeleton"},"Circular Skeleton"),(0,a.kt)("p",null,"Used to represent where circular shaped content may appear within your page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function CircleSkeleton() {\n  const skellyProps = getSkeletonProps({ kind: 'circle' })\n  return (\n    <div>\n      <div {...skellyProps} />\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"fallback-example"},"Fallback Example"),(0,a.kt)("p",null,"Used to design a Profile Card loading state to pass into a React ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense")," component via the ",(0,a.kt)("inlineCode",{parentName:"p"},"fallback")," property to easily managing the show/hide logic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ProfileCardFallback() {\n  const circleSkeletonProps = getSkeletonProps({ kind: 'circle' })\n  const contentSkeletonProps = getSkeletonProps({ kind: 'content' })\n  const textSkeletonProps = getSkeletonProps({ kind: 'text' })\n\n  return (\n    <div\n      style={{\n        border: '1px solid var(--ps-border-weak)',\n        borderRadius: '6px',\n        padding: '1rem',\n        textAlign: 'center',\n        width: '33%',\n      }}\n    >\n      <div style={{ paddingBottom: '1rem' }}>\n        <div\n          {...circleSkeletonProps}\n          style={{ height: '5rem', margin: '0 auto', width: '5rem' }}\n        />\n      </div>\n      <div\n        {...contentSkeletonProps}\n        style={{\n          margin: '0 auto',\n        }}\n      >\n        <h3 data-site-override=\"hidden\">That Person</h3>\n      </div>\n      <div {...textSkeletonProps} style={{ margin: '0 auto', width: '8rem' }} />\n    </div>\n  )\n}\n")),(0,a.kt)("admonition",{title:"Diving deeper into page loading",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Learn more about the page loading pattern in the ",(0,a.kt)("a",{parentName:"p",href:"../../learn/learn-pando/design-patterns/page-loading"},"Page Loading Pattern")," lesson.")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getSkeletonProps(options?: SkeletonOptions)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": A String value for the kind property of ",(0,a.kt)("inlineCode",{parentName:"li"},"'circle' | 'content' | 'text'")," which determines the styling for the Skeleton element.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("h3",{id:"layout"},"Layout"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use a 1px border when creating a container for Skeleton content."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the Skeleton for a container. Instead, use a border with multiple Skeletons that match the content within the container."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use a Skeleton to represent content of a ",(0,a.kt)("strong",{parentName:"p"},"page")," that is in the process of loading."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use a Skeleton for static content or as a placeholder for dynamic content."),(0,a.kt)("h2",{id:"accessbility"},"Accessbility"),(0,a.kt)("p",null,"The Pando Skeleton API combined with semantic HTML allow the Skeleton to be fully accessible and screen-readable."))}u.isMDXComponent=!0},31825:function(e,t,n){n.d(t,{a:function(){return p},g:function(){return c}});var o=n(39112),a=n(58105),r=n(50114);const l="gridCSS-module_gridContainer__sQmao",i="gridCSS-module_gridItem__nVMyV";(0,r.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const s="ps-grid";function c(e){const t=(0,a.g)(e);return{...(0,a.c)(t),...(0,o.c)(s,l)}}function p(e){const t=(0,a.a)(e);return{...(0,a.b)(t),...(0,o.c)("ps-grid-item",i)}}},58105:function(e,t,n){n.d(t,{a:function(){return r},b:function(){return i},c:function(){return l},g:function(){return a}});const o={6:.375,8:.5,12:.75,16:1,32:2};function a(e){return{cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function r(e){return{colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function l(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${o[e.gap]}rem`}}}function i(e){const{colSpan:t,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${t} / span ${n} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}}}]);