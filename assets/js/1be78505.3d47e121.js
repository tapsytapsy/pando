"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29514,58372],{71304:function(e,t,n){n.r(t),n.d(t,{default:function(){return Te}});var a=n(45721),r=n(88795),l=n(30820),i=n(94494),o=n(98912),c=n(22425),d=n(78926),s=n(67426),u=n(66292),m=n(47506),b=n(13554),p=n(83224);var v="backToTopButton_yJQx",h="backToTopButtonShow_xw0X";function f(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],l=n[1],i=(0,a.useRef)(!1),o=(0,b.Ct)(),c=o.startScroll,d=o.cancelScroll;return(0,b.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(i.current?i.current=!1:a>=r?(d(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((function(e){e.location.hash&&(i.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.k.common.backToTopButton,v,t&&h),type:"button",onClick:n})}var E=n(34989),g=n(13367),k=n(91829),_=n(28648),C=n(60953);function I(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var N="collapseSidebarButton_dTuw",S="collapseSidebarButtonIcon_ATxR";function Z(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",N),onClick:t},a.createElement(I,{className:S}))}var x=n(29589),T=n(59005),y=n(36916),w=Symbol("EmptyContext"),L=a.createContext(w);function A(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],i=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(L.Provider,{value:i},t)}var M=n(14880),F=n(74374),P=n(14541),B=n(63631),H=["item","onItemClick","activePath","level","index"];function R(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function W(e){var t=e.item,n=e.onItemClick,l=e.activePath,o=e.level,d=e.index,s=(0,T.Z)(e,H),u=t.items,m=t.label,b=t.collapsible,p=t.className,v=t.href,h=(0,k.L)().docs.sidebar.autoCollapseCategories,f=function(e){var t=(0,B.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,l),g=(0,F.Mg)(v,l),_=(0,M.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),I=_.collapsed,N=_.setCollapsed,S=function(){var e=(0,a.useContext)(L);if(e===w)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=S.expandedItem,x=S.setExpandedItem,A=function(e){void 0===e&&(e=!I),x(e?null:d),N(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,l=(0,y.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:E,collapsed:I,updateCollapsed:A}),(0,a.useEffect)((function(){b&&null!=Z&&Z!==d&&h&&N(!0)}),[b,Z,d,N,h]),a.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":I},p)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(P.Z,(0,C.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":E}),onClick:b?function(e){null==n||n(t),v?A(!1):(e.preventDefault(),A())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=f?f:"#":f},s),m),v&&b&&a.createElement(R,{categoryLabel:m,onClick:function(e){e.preventDefault(),A()}})),a.createElement(M.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(X,{items:u,tabIndex:I?-1:0,onItemClick:n,activePath:l,level:o+1})))}var D=n(29035),V=n(40925),z="menuExternalLink_R_r7",U=["item","onItemClick","activePath","level","index"];function q(e){var t=e.item,n=e.onItemClick,l=e.activePath,o=e.level,d=(e.index,(0,T.Z)(e,U)),s=t.href,u=t.label,m=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,l),v=(0,D.Z)(s);return a.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},a.createElement(P.Z,(0,C.Z)({className:(0,r.Z)("menu__link",!v&&z,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},v&&{onClick:n?function(){return n(t)}:void 0},d),u,!v&&a.createElement(V.Z,null)))}var Y="menuHtmlItem_WkIn";function G(e){var t=e.item,n=e.level,l=e.index,o=t.value,c=t.defaultStyle,d=t.className;return a.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(n),c&&[Y,"menu__list-item"],d),key:l,dangerouslySetInnerHTML:{__html:o}})}var J=["item"];function K(e){var t=e.item,n=(0,T.Z)(e,J);switch(t.type){case"category":return a.createElement(W,(0,C.Z)({item:t},n));case"html":return a.createElement(G,(0,C.Z)({item:t},n));default:return a.createElement(q,(0,C.Z)({item:t},n))}}var O=["items"];function Q(e){var t=e.items,n=(0,T.Z)(e,O);return a.createElement(A,null,t.map((function(e,t){return a.createElement(K,(0,C.Z)({key:t,item:e,index:t},n))})))}var X=(0,a.memo)(Q),j="menu_ck8M",$="menuWithAnnouncementBar_dNoH";function ee(e){var t=e.path,n=e.sidebar,l=e.className,o=function(){var e=(0,x.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,b.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",j,o&&$,l)},a.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(X,{items:n,activePath:t,level:1})))}var te="sidebar_iUNo",ne="sidebarWithHideableNavbar_o5do",ae="sidebarHidden_L8ni",re="sidebarLogo_meDR";function le(e){var t=e.path,n=e.sidebar,l=e.onCollapse,i=e.isHidden,o=(0,k.L)(),c=o.navbar.hideOnScroll,d=o.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.Z)(te,c&&ne,i&&ae)},c&&a.createElement(_.Z,{tabIndex:-1,className:re}),a.createElement(ee,{path:t,sidebar:n}),d&&a.createElement(Z,{onClick:l}))}var ie=a.memo(le),oe=n(76222),ce=n(20879),de=function(e){var t=e.sidebar,n=e.path,l=(0,ce.e)();return a.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(X,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function se(e){return a.createElement(oe.Zo,{component:de,props:e})}var ue=a.memo(se);function me(e){var t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ie,e),r&&a.createElement(ue,e))}var be="expandButton_hMxG",pe="expandButtonIcon_qN0_";function ve(e){var t=e.toggleSidebar;return a.createElement("div",{className:be,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:pe}))}var he="docSidebarContainer_UFMS",fe="docSidebarContainerHidden__xla";function Ee(e){var t,n=e.children,r=(0,s.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function ge(e){var t=e.sidebar,n=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,o=(0,E.TH)().pathname,c=(0,a.useState)(!1),d=c[0],s=c[1],u=(0,a.useCallback)((function(){d&&s(!1),l((function(e){return!e}))}),[l,d]);return a.createElement("aside",{className:(0,r.Z)(i.k.docs.docSidebarContainer,he,n&&fe),onTransitionEnd:function(e){e.currentTarget.classList.contains(he)&&n&&s(!0)}},a.createElement(Ee,null,a.createElement(me,{sidebar:t,path:o,onCollapse:u,isHidden:d})),d&&a.createElement(ve,{toggleSidebar:u}))}var ke={docMainContainer:"docMainContainer_koWV",docMainContainerEnhanced:"docMainContainerEnhanced_E_C1",docItemWrapperEnhanced:"docItemWrapperEnhanced_od5N"};function _e(e){var t=e.hiddenSidebarContainer,n=e.children,l=(0,s.V)();return a.createElement("main",{className:(0,r.Z)(ke.docMainContainer,(t||!l)&&ke.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ke.docItemWrapper,t&&ke.docItemWrapperEnhanced)},n))}var Ce="docPage_ikVz",Ie="docsWrapper_ao8x";function Ne(e){var t=e.children,n=(0,s.V)(),r=(0,a.useState)(!1),l=r[0],i=r[1];return a.createElement(u.Z,{wrapperClassName:Ie},a.createElement(f,null),a.createElement("div",{className:Ce},n&&a.createElement(ge,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:i}),a.createElement(_e,{hiddenSidebarContainer:l},t)))}var Se=n(58372),Ze=n(30464);function xe(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(Ze.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Te(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(Se.default,null);var o=n.docElement,u=n.sidebarName,m=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(xe,e),a.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(d.q,{version:t},a.createElement(s.b,{name:u,items:m},a.createElement(Ne,null,o)))))}},58372:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(45721),r=n(47506),l=n(30820),i=n(66292);function o(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(i.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},78926:function(e,t,n){n.d(t,{E:function(){return o},q:function(){return i}});var a=n(45721),r=n(36916),l=a.createContext(null);function i(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function o(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);