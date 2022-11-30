"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54777],{70167:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(45721);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=h(a),m=s,c=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var h=2;h<o;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27877:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return h},toc:function(){return u}});var n=a(60953),s=a(59005),o=(a(45721),a(70167)),i=["components"],r={slug:"v0.1.0-alpha-release",title:"Announcing Alpha Release",authors:["casey"],tags:["pluralsight","development","v0.1.0-alpha-release","headless-styles","ui-library","design-tokens","react-utils"],hide_table_of_contents:!1},l=void 0,h={permalink:"/blog/v0.1.0-alpha-release",editUrl:"https://github.com/pluralsight/tva/edit/main/website/blog/blog/2022-09-14-dev-alpha/index.md",source:"@site/blog/2022-09-14-dev-alpha/index.md",title:"Announcing Alpha Release",description:"Today, marks a big milestone for the Design System developer suite as we happily introduce the alpha version!",date:"2022-09-14T00:00:00.000Z",formattedDate:"September 14, 2022",tags:[{label:"pluralsight",permalink:"/blog/tags/pluralsight"},{label:"development",permalink:"/blog/tags/development"},{label:"v0.1.0-alpha-release",permalink:"/blog/tags/v-0-1-0-alpha-release"},{label:"headless-styles",permalink:"/blog/tags/headless-styles"},{label:"ui-library",permalink:"/blog/tags/ui-library"},{label:"design-tokens",permalink:"/blog/tags/design-tokens"},{label:"react-utils",permalink:"/blog/tags/react-utils"}],readingTime:7.99,hasTruncateMarker:!0,authors:[{name:"Casey Baggz",title:"Admin & Maintainer (Pluralsight Design Suite)",url:"https://caseybaggz.com",imageURL:"https://github.com/caseybaggz.png",key:"casey"}],frontMatter:{slug:"v0.1.0-alpha-release",title:"Announcing Alpha Release",authors:["casey"],tags:["pluralsight","development","v0.1.0-alpha-release","headless-styles","ui-library","design-tokens","react-utils"],hide_table_of_contents:!1},nextItem:{title:"Announcing React Utils",permalink:"/blog/experimental-release-30088c"}},p={authorsImageUrls:[void 0]},u=[{value:"Alpha Phase",id:"alpha-phase",level:2},{value:"Release Channels",id:"release-channels",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Docs",id:"docs",level:2},{value:"Design Tokens",id:"design-tokens",level:2},{value:"Theme Refresh",id:"theme-refresh",level:3},{value:"New Meta Files",id:"new-meta-files",level:3},{value:"Headless Styles",id:"headless-styles",level:2},{value:"New Styles",id:"new-styles",level:3},{value:"New API Design",id:"new-api-design",level:3},{value:"Typography Styles",id:"typography-styles",level:3},{value:"Better Named Components",id:"better-named-components",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"What about Components?",id:"what-about-components",level:2},{value:"Thanks",id:"thanks",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Installing",id:"installing",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today, marks a big milestone for the Design System developer suite as we happily introduce the alpha version! \ud83c\udf89"),(0,o.kt)("h2",{id:"alpha-phase"},"Alpha Phase"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Stable APIs are here to stay.")),(0,o.kt)("p",null,"A lot has changed in the past month (for the better!) from our docs design to our APIs. As scary as this sounds, it brings us into a new era for our users and company in general. As some of you may know, we recently celebrated PS-Refresh day which was another awesome experience that will help drive us into 2023."),(0,o.kt)("p",null,"In honor of PS-Refresh, we felt that our suite was in a good enough spot to mature it into the next phase of it's life span bringing a shared API design that spans across all of our packages."),(0,o.kt)("p",null,"Let's dive in! \u26a1"),(0,o.kt)("h2",{id:"release-channels"},"Release Channels"),(0,o.kt)("p",null,"As of alpha, we have a fully automated release channel pipeline which allows users to opt-in to different API experiences."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"experimental:")," All packages with this tag have access to ",(0,o.kt)("inlineCode",{parentName:"li"},"unstable_")," features that are in development mode. We of course, don't recommend ever using this version, unless you just want to stay as green as possible. API's here will more than likely change."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"next:")," The packages with this tag will provide ",(0,o.kt)("em",{parentName:"li"},"new"),' APIs that we believe are stable enough to use without consequences, but are technically still in the "testing phase". If you need a new feature ',(0,o.kt)("strong",{parentName:"li"},"now"),", or want to test an integration in your project, this is the one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"latest:")," This is the most stable version of our packages and what we recommend everyone uses.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For more details about our release channels, check out the official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/53"},"Release Channel Guide"),".")),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"Along with our release channels, we've also updated our version policy to match our standard. The new guide should help set expectations and ease anxiety that you might have for future releases. Thanks to our release channels, we can guarantee releases that are backwards compatible and safe to use (i.e. we will rarely ship a breaking change)."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For more information about our versioning standards and development practices regarding stability and breaking changes, check out our ",(0,o.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/discover-more/versions"},"Versions Page"),".")),(0,o.kt)("h2",{id:"docs"},"Docs"),(0,o.kt)("p",null,"As you might have noticed, our docs have receieved a nice little update to match where the new brand is headed. Additionally, we have re-organized the main nav to be more user friendly."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Start Here")," is our introductory section for core concepts that span into both design and development. This section also helps readers understand how to use the site more successfully."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Design")," is the central hub for all the resources a designer may need to reference."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Development")," is the place where you can find all information regarding the NPM packages we offer in our engineering suite and any other information related to our engineering practices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Blog")," where we make announcements for both design and development about meaningful updates.")),(0,o.kt)("p",null,'That\'s not all, if you look in the top right corner, you will notice a "0.1.0-alpha" dropdown which means our docs officially have a version history! \ud83c\udf89'),(0,o.kt)("p",null,'If you are ever interested in seeing what is coming in the next release (Beta), just click on the dropdown and choose "Beta \ud83d\udea7".'),(0,o.kt)("h2",{id:"design-tokens"},"Design Tokens"),(0,o.kt)("p",null,"The alpha version of design tokens introduces a ",(0,o.kt)("strong",{parentName:"p"},"BREAKING CHANGE"),", but includes some really nice features."),(0,o.kt)("h3",{id:"theme-refresh"},"Theme Refresh"),(0,o.kt)("p",null,"After testing our original token theme for a few months, we found that there were some major inconsistencies with the original UI Kit and values being used incorrectly. Likewise, there were a ton of tokens that weren't being used at all. As a result, we re-organized the tokens to work more successfully with the UI Kit and be more functional."),(0,o.kt)("p",null,"Check out the new ",(0,o.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/tokens/colors"},"token colors list"),"."),(0,o.kt)("h3",{id:"new-meta-files"},"New Meta Files"),(0,o.kt)("p",null,"There are certain times when using tokens is just not enough and you need some extra help. In alpha, we added 2 new meta-data files to the tokens package."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CSS Properties")," is a JS file that sources the CSS property definition. If you are using CSS-in-JS, when combined with our ",(0,o.kt)("a",{parentName:"li",href:"https://design.pluralsight.com/docs/development/getting-started/installation/#normalizecss"},"Normalize setup"),", this will allow you to use themes seamlessly without requiring an unnecessary Provider component. This is also what we use under the hood in Healdess-styles for all of our CSS-in-JS API's."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Normalized Data")," is a raw JSON file of normalized data from our tokens, and makes things like mapping and loops much easier and performant.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about our new Design Tokens, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/tokens/intro#web-meta"},"Web Meta section")," in the docs.")),(0,o.kt)("h2",{id:"headless-styles"},"Headless Styles"),(0,o.kt)("p",null,"With the token overhaul, by nature, we've had to internally update most of our styles. So, in justifying the work, we went ahead and updated multiple things in this package."),(0,o.kt)("h3",{id:"new-styles"},"New Styles"),(0,o.kt)("p",null,"The majority of our helpers were built while the Brand design team was still figuring out the direction that they wanted to take our company. As a result, this dramatically changed some components in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/PS-Design---Web-UI-Kit-%5BALPHA%5D?node-id=1214%3A50531"},"Web UI Kit")," from Buttons down to Tags. In alpha, all of the helpers now reflect the latest visual styles from our UI Kit."),(0,o.kt)("h3",{id:"new-api-design"},"New API Design"),(0,o.kt)("p",null,"Another area we enhanced this package is in the overall API design. Some APIs were completely overhauled to be more scalable (",(0,o.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/headless-styles/Button"},"Button"),") and others just to use a standard naming convention."),(0,o.kt)("p",null,"With the naming convention, we decided to share the ",(0,o.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/tokens/intro#naming-convention"},"Semantic Tokens")," design to help bring the suite together into a cohesive body."),(0,o.kt)("h3",{id:"typography-styles"},"Typography Styles"),(0,o.kt)("p",null,"One topic that has always been disconnected from design and engineering in design systems is Typography. Historically, designers create systems of typography styles that don't really compliment how the browser semantically works with text, which by nature, makes typography less accessible."),(0,o.kt)("p",null,"We are happy to state that the new Web UI Kit typography styles do just that, which makes it the most functional use case to date!"),(0,o.kt)("p",null,"What we mean is that our typography styles ",(0,o.kt)("strong",{parentName:"p"},"ship with our Normalize setup"),", this means that to get a header - just use the HTML syntax for header ",(0,o.kt)("inlineCode",{parentName:"p"},"h1-6"),". To get normal text styles, just us a ",(0,o.kt)("inlineCode",{parentName:"p"},"p"),". \ud83d\ude4c"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about text styling, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/headless-styles/Typography"},"Typography Page"),".")),(0,o.kt)("h3",{id:"better-named-components"},"Better Named Components"),(0,o.kt)("p",null,"The final change we made was renaming a few components in the Web UI Kit to better reflect browser the APIs they are meant to mimic."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Alert is now ",(0,o.kt)("a",{parentName:"li",href:"https://design.pluralsight.com/docs/development/headless-styles/Admonition"},"Admonition")),(0,o.kt)("li",{parentName:"ul"},"Alert Dialog is now ",(0,o.kt)("a",{parentName:"li",href:"https://design.pluralsight.com/docs/development/headless-styles/ConfirmDialog"},"Confirm Dialog"))),(0,o.kt)("p",null,"These small changes allow us to scale our kit even further by making more unique Dialogs that serve a purpose (i.e. Prompt Dialog, Alert Dialog, and Modal) or actual alert differences (i.e. Alert, Toast, etc.)."),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"From this point until v1 it's all about the ",(0,o.kt)("strong",{parentName:"p"},"features"),"!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Headless-Styles"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FEAT")," - Menu, Tabs, Modal, Select, Datepicker, Pagination, Popover, Table, and Tooltip"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"React-utils"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FEAT")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"usePreloadResource")," custom hook for a better UI experience via preoloading assets (from images to scripts).")))),(0,o.kt)("p",null,"Our next planned release is Beta which should conclude all missing components in the Web UI Kit, unless more are added in the future (always a possibility)."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For a view of where we plan on going leading up to v1 at Q4, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/projects/2"},"Check out our 2022 Roadmap"),".")),(0,o.kt)("h2",{id:"what-about-components"},"What about Components?"),(0,o.kt)("p",null,"When we started building the Design Suite at the start of this year, we wanted to make sure we were building something that not only was unique, but something that does not follow trends and potentially fade away after a few years."),(0,o.kt)("p",null,"As a team, ",(0,o.kt)("strong",{parentName:"p"},"we believe that the Component design has reached it's full potential"),' and will soon be "the old way of doing things". We respect and value your opinion if you don\'t believe this to be true. \u2764\ufe0f'),(0,o.kt)("p",null,"Ultimately, this, ",(0,o.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/discover-more/faq#why-doesnt-your-suite-provide-a-components-package"},"along with other reasons"),", is why we have moved past components and are building something that is more scalable and lightweight in nature."),(0,o.kt)("p",null,"Having said that, we also understand there are many people who are not front-end developers that find themselves forced into having to build things on the front end. These are the users who might actually benefit from using a traditional Components Library if they are unwilling to learn the common practices and skills for front-end development."),(0,o.kt)("p",null,"So, as a team, we decided to draw up an agreement theorizing how a component library would fit in our suite of tools. What purpose would it solve when working alongside our other packages? Where would the lines in the sand be drawn to prevent duplicated work or responsibility?"),(0,o.kt)("p",null,"So, we created a discussion on our repo that contains a ",(0,o.kt)("strong",{parentName:"p"},"poll"),". We will be monitoring this for the rest of the year. If there is a large enough response, we will consider creating a components package in the future that follows our agreement guidelines."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To read the agreement and contribute to the poll, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/577"},"check out our Discussion"),". All we ask is that you approach this topic ",(0,o.kt)("strong",{parentName:"p"},"without bias")," as we will do the same in reviewing the results.")),(0,o.kt)("h2",{id:"thanks"},"Thanks"),(0,o.kt)("p",null,"Some features in this release wouldn't be possible without the contribution of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/josh-degraw"},"Josh Degraw"),". \ud83c\udf89"),(0,o.kt)("h2",{id:"upgrading"},"Upgrading"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @pluralsight/{headless-styles,react-utils}@latest\n\n# Yarn Classic\nyarn upgrade @pluralsight/{headless-styles,react-utils}@latest\n\n# Yarn Berry\nyarn up @pluralsight/{headless-styles,react-utils}@latest\n")),(0,o.kt)("h2",{id:"installing"},"Installing"),(0,o.kt)("p",null,"If it is your first time using any of our packages, check out our\n",(0,o.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/getting-started/installation"},"Installation Guide"),"\nor the ",(0,o.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/react-utils/intro"},"Intro Page"),"\nof whichever package you are interested in using."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As always, if you have any questions or ideas, please drop us a thread in our\n",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/pluralsight/tva/discussions"},"Discussions Page"),".")))}m.isMDXComponent=!0}}]);