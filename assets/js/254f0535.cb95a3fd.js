"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6163],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||s;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l}});var o=n(81648),r=(n(45721),n(70167));const s={tags:["NextJS","Next 13"],title:"Using with Next 13"},i=void 0,a={unversionedId:"learn/learn-pando/next13",id:"learn/learn-pando/next13",title:"Using with Next 13",description:"Pando is compatible with Server components out of the box via the JS version of the Headless-styles APIs.",source:"@site/docs/learn/learn-pando/next13.mdx",sourceDirName:"learn/learn-pando",slug:"/learn/learn-pando/next13",permalink:"/docs/next/learn/learn-pando/next13",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/learn/learn-pando/next13.mdx",tags:[{label:"NextJS",permalink:"/docs/next/tags/next-js"},{label:"Next 13",permalink:"/docs/next/tags/next-13"}],version:"current",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["NextJS","Next 13"],title:"Using with Next 13"},sidebar:"learn",previous:{title:"Migrating from Classic",permalink:"/docs/next/learn/learn-pando/migration"},next:{title:"Integrations",permalink:"/docs/next/learn/learn-pando/third-party"}},p={},l=[{value:"Setup",id:"setup",level:2},{value:"Using Server Components",id:"using-server-components",level:2},{value:"Naming convention",id:"naming-convention",level:3},{value:"Knowing when to use Server Components",id:"knowing-when-to-use-server-components",level:3},{value:"Using Client Components",id:"using-client-components",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Pando supports Server Components",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Pando is compatible with Server components out of the box via the JS version of the Headless-styles APIs.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://beta.nextjs.org/docs/getting-started"},"NextJS")," is a powerful tool that allows developers to build custom React apps that utilize the power of server rendering."),(0,r.kt)("p",null,"In version 13, the Next team decided to restructure the project to use ",(0,r.kt)("a",{parentName:"p",href:"https://beta.nextjs.org/docs/rendering/server-and-client-components"},"Server Components")," which means that if you would like to take advantage of this feature, you will need to take a slightly different approach to your development."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This article assumes you are already familiar with Next 13. If you are not, we recommend you ",(0,r.kt)("a",{parentName:"p",href:"https://beta.nextjs.org/docs/getting-started"},"learn the fundamentals")," before continuing.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"There is no additional setup required for NextJS outside of the ",(0,r.kt)("strong",{parentName:"p"},"first two steps")," in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/learn/get-started/installation/add-to-website"},"Adding Pando to a website")," page."),(0,r.kt)("h2",{id:"using-server-components"},"Using Server Components"),(0,r.kt)("p",null,"When you are building components that don't require any client-side features from React, you simply just need to use the Javascript version of any API provided from the Headless-styles package."),(0,r.kt)("h3",{id:"naming-convention"},"Naming convention"),(0,r.kt)("p",null,'If you use Typescript, you will automagically see the JS API versions from your import menu list in your IDE. If you do not use Typescript, simply append "JS" to the end of the component name for the JS API:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"get[Component]JSProps > getButtonJSProps > getBadgeJSProps\n")),(0,r.kt)("admonition",{title:"Learn more about JS APIs",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are unfamiliar with the Headless-styles JS APIs we recommend reading our guide on using ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/learn/learn-pando/third-party#js-style-objects"},"JS Style Objects"),".")),(0,r.kt)("h3",{id:"knowing-when-to-use-server-components"},"Knowing when to use Server Components"),(0,r.kt)("p",null,"In order to determine whether you should use a Server Component or Client is easier than it seems."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Server Components should be used when a component doesn't require any React hooks/events.")),(0,r.kt)("p",null,"This means, if you have a component that doesn't use any hooks or click events, you can and should use a Server Component to help performance."),(0,r.kt)("p",null,"In this example, we are creating a global Nav Server Component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'showLineNumbers title="Creating a Nav Component"',showLineNumbers:!0,title:'"Creating',a:!0,Nav:!0,'Component"':!0},"import {\n  getJSTextLinkProps,\n  getJSGridProps,\n  getJSGridItemProps,\n  getJSIconProps,\n} from '@pluralsight/headless-styles'\nimport { HomeIcon, BriefcaseIcon } from '@pluralsight/icons'\nimport Link from 'next/link'\nimport { type PropsWithChildren } from 'react'\nimport styles from './nav.module.css'\n\nfunction NavListItem(props: PropsWithChildren<{}>) {\n  const gridItemProps = getJSGridItemProps({ colSpan: 6 })\n  return (\n    <li className={styles.listItem} style={gridItemProps.styles}>\n      {props.children}\n    </li>\n  )\n}\n\ninterface NavLinkProps {\n  href: string\n  icon: any\n}\n\nfunction NavLink(props: PropsWithChildren<NavLinkProps>) {\n  const linkProps = getJSTextLinkProps({\n    href: props.href,\n  })\n  const Icon = props.icon\n  const iconProps = getJSIconProps(linkProps.iconOptions)\n\n  return (\n    <Link style={linkProps.styles} {...linkProps.link}>\n      <Icon {...iconProps.a11yProps} style={iconProps.styles} />\n      {props.children}\n    </Link>\n  )\n}\n\nexport default function Nav() {\n  const gridProps = getJSGridProps({ cols: 12, gap: 6 })\n\n  return (\n    <nav className={styles.container}>\n      <ul className={styles.navList} style={gridProps.styles}>\n        <NavListItem>\n          <NavLink href=\"/\" icon={HomeIcon}>\n            Home\n          </NavLink>\n        </NavListItem>\n\n        <NavListItem>\n          <NavLink href=\"/work\" icon={BriefcaseIcon}>\n            Work\n          </NavLink>\n        </NavListItem>\n      </ul>\n    </nav>\n  )\n}\n")),(0,r.kt)("h2",{id:"using-client-components"},"Using Client Components"),(0,r.kt)("p",null,"Whenever you need to build a component that uses advanced React functionality like hooks or click events, just use the default Headless-styles APIs."),(0,r.kt)("p",null,"Here is an example of creating a Button Client Component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'showLineNumbers title="Button Component"',showLineNumbers:!0,title:'"Button','Component"':!0},"'use client'\n\nimport { getButtonProps } from '@pluralsight/headless-styles'\nimport type { ButtonOptions } from '@pluralsight/headless-styles/types'\nimport type { HTMLProps, PropsWithChildren } from 'react'\n\ninterface ButtonProps extends ButtonOptions, HTMLProps<HTMLButtonElement> {}\n\nexport default function Button(props: PropsWithChildren<ButtonProps>) {\n  const { children, onClick, ...btnProps } = props\n  const { button } = getButtonProps(btnProps)\n\n  return (\n    <button {...button} onClick={props.onClick}>\n      {props.children}\n    </button>\n  )\n}\n")))}c.isMDXComponent=!0}}]);