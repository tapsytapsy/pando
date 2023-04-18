"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6169],{72032:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(81648),r=n(45721),i=n(31825),o=n(61471),s="grid_cC7H";function l(e){return r.createElement("li",(0,i.a)({colSpan:2}),r.createElement(o.Z,e,e.children))}function c(e){const{figma:t,github:n}=e,{className:o,...c}=(0,i.g)({cols:12,gap:8});return r.createElement("ul",(0,a.Z)({className:`${o} ${s}`},c),n&&r.createElement(l,{href:n},"View on Github"),t&&r.createElement(l,{href:t},"Figma Design"))}},27505:function(e,t,n){n(45721)},61471:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),r=n(94697),i=n(23038),o=n(31026),s=n(6115);function l(e){const{href:t}=e,n=(0,r.g)({href:t}),l=(0,i.g)(n.iconOptions),c=t.includes("github")?o.Z:s.Z;return a.createElement("a",n.link,a.createElement(c,l),e.children)}},62362:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=n(81648),r=(n(45721),n(70167)),i=n(72032);n(27505);const o={tags:["breadcrumb"],title:"Tag"},s=void 0,l={unversionedId:"reference/components/tag",id:"reference/components/tag",title:"Tag",description:"Used to label and link to categorized content.",source:"@site/docs/reference/components/tag.mdx",sourceDirName:"reference/components",slug:"/reference/components/tag",permalink:"/docs/next/reference/components/tag",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/tag.mdx",tags:[{label:"breadcrumb",permalink:"/docs/next/tags/breadcrumb"}],version:"current",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["breadcrumb"],title:"Tag"},sidebar:"reference",previous:{title:"Tabs",permalink:"/docs/next/reference/components/tabs"},next:{title:"Textarea",permalink:"/docs/next/reference/components/text-area"}},c={},p=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Tag",id:"basic-tag",level:3},{value:"Size Mapping",id:"size-mapping",level:4},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used to label and link to categorized content."),(0,r.kt)(i.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Tag",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getTagProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TagOptions {\n  size?: 's' | 'm'\n}\n\ngetTagProps(options?: TagOptions)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { TagOptions } from '@pluralsight/headless-styles/types'\n")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Icon (optional)"),(0,r.kt)("li",{parentName:"ol"},"Tag")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic-tag"},"Basic Tag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicTags() {\n  const tagProps = getTagProps()\n\n  return (\n    <div\n      data-site-override="alignGridCenter"\n      {...getGridProps({ cols: 12, gap: 16 })}\n    >\n      <div {...getGridItemProps({ colSpan: 1 })}>\n        <a href="#" {...getTagProps({ size: \'s\' }).tag}>\n          small\n        </a>\n      </div>\n\n      <div {...getGridItemProps({ colSpan: 2 })}>\n        <a href="#" {...tagProps.tag}>\n          default\n        </a>\n      </div>\n\n      <div {...getGridItemProps({ colSpan: 2 })}>\n        <a href="#" {...tagProps.tag}>\n          <PlaceholderIcon {...getIconProps(getTagProps.iconOptions)} />\n          default\n        </a>\n      </div>\n    </div>\n  )\n}\n')),(0,r.kt)("h4",{id:"size-mapping"},"Size Mapping"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Tag size rules."',title:'"Tag',size:!0,'rules."':!0},"{\n  s: 'For smaller/tighter experiences where the default size (m) cannot be supported.',\n  m: 'Should be used in most, if not all cases.'\n}\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getTagProps(options?: TagOptions)\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": A String value of either ",(0,r.kt)("inlineCode",{parentName:"li"},"'s' | 'm'")," to display the size styles.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object matching the ",(0,r.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"iconOptions")," Object to use as the parameters for the Icon API."),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the Tag when you need to link to a category/content."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use a Tag without a link to a category. Instead use a Badge."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the Pando Icons within the Tag for visual interest."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use emojis within the Tag."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use in moderation to prevent too much visual noise."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," exceed more than 3 rows of Tags within a page."),(0,r.kt)("h2",{id:"accessbility"},"Accessbility"),(0,r.kt)("p",null,"The Pando Tag, and Icon APIs combined with semantic HTML allow the Tag to be fully accessible and screen-readable."))}d.isMDXComponent=!0},31825:function(e,t,n){n.d(t,{a:function(){return p},g:function(){return c}});var a=n(39112),r=n(58105),i=n(50114);const o="gridCSS-module_gridContainer__sQmao",s="gridCSS-module_gridItem__nVMyV";(0,i.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="ps-grid";function c(e){const t=(0,r.g)(e);return{...(0,r.c)(t),...(0,a.c)(l,o)}}function p(e){const t=(0,r.a)(e);return{...(0,r.b)(t),...(0,a.c)("ps-grid-item",s)}}},58105:function(e,t,n){n.d(t,{a:function(){return i},b:function(){return s},c:function(){return o},g:function(){return r}});const a={6:.375,8:.5,12:.75,16:1,32:2};function r(e){return{cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function i(e){return{colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function o(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${a[e.gap]}rem`}}}function s(e){const{colSpan:t,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${t} / span ${n} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}}}]);