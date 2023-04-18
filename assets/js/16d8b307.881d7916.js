"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4731],{72032:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(81648),r=t(45721),s=t(31825),i=t(61471),l="grid_cC7H";function o(e){return r.createElement("li",(0,s.a)({colSpan:2}),r.createElement(i.Z,e,e.children))}function p(e){const{figma:n,github:t}=e,{className:i,...p}=(0,s.g)({cols:12,gap:8});return r.createElement("ul",(0,a.Z)({className:`${i} ${l}`},p),t&&r.createElement(o,{href:t},"View on Github"),n&&r.createElement(o,{href:n},"Figma Design"))}},27505:function(e,n,t){t(45721)},61471:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(45721),r=t(94697),s=t(23038),i=t(31026),l=t(6115);function o(e){const{href:n}=e,t=(0,r.g)({href:n}),o=(0,s.g)(t.iconOptions),p=n.includes("github")?i.Z:l.Z;return a.createElement("a",t.link,a.createElement(p,o),e.children)}},99408:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var a=t(81648),r=(t(45721),t(70167)),s=t(72032);t(27505);const i={tags:["field","forms","error messages"],title:"Field Messages"},l=void 0,o={unversionedId:"reference/components/field-message",id:"version-0.4.1/reference/components/field-message",title:"Field Messages",description:"Used to display a helper text message for a form field.",source:"@site/versioned_docs/version-0.4.1/reference/components/field-message.mdx",sourceDirName:"reference/components",slug:"/reference/components/field-message",permalink:"/docs/reference/components/field-message",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/field-message.mdx",tags:[{label:"field",permalink:"/docs/tags/field"},{label:"forms",permalink:"/docs/tags/forms"},{label:"error messages",permalink:"/docs/tags/error-messages"}],version:"0.4.1",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["field","forms","error messages"],title:"Field Messages"},sidebar:"reference",previous:{title:"Confirm Dialog",permalink:"/docs/reference/components/confirm-dialog"},next:{title:"Form Control",permalink:"/docs/reference/components/form-control"}},p={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Helper Message",id:"helper-message",level:3},{value:"Error Message",id:"error-message",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],m={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used to display a helper text message for a form field."),(0,r.kt)(s.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/FieldMessage",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getFieldMessageProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FieldMessageOptions {\n  id: string\n  message: string\n}\n\ngetFieldMessageProps(options?: FieldMessageOptions)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { FieldMessageOptions } from '@pluralsight/headless-styles/types'\n")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Form Control"),(0,r.kt)("li",{parentName:"ol"},"Label"),(0,r.kt)("li",{parentName:"ol"},"Input"),(0,r.kt)("li",{parentName:"ol"},"Message")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{title:"Form Control manages state",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Form Control was designed to manage the state of the field you are using it on instead of managing it yourself in all the sister components.")),(0,r.kt)("h3",{id:"helper-message"},"Helper Message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicFormField() {\n  const formId = 'email'\n  const [email, setEmail] = useState('')\n  const { fieldOptions } = getFormControlProps()\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: formId,\n    value: 'Email alerts',\n  })\n  const { value: helpText, ...message } = getFieldMessageProps({\n    id: 'email:help',\n    message: 'We will never share your email.',\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    describedBy: message.id,\n    id: formId,\n    name: 'basic-form',\n    placeholder: 'email@example.com',\n    type: 'email',\n    value: email,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div>\n      <label {...labelProps}>{value}</label>\n      <div {...inputProps.inputWrapper}>\n        <input {...inputProps.input} onChange={handleChange} />\n      </div>\n      <small {...message}>{helpText}</small>\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"error-message"},"Error Message"),(0,r.kt)("admonition",{title:"Easy to understand invalid states",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To display an invalid state that is easy to understand for the user, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldOptions")," to your ",(0,r.kt)("strong",{parentName:"p"},"Error Message")," component and add a WarningTriangleFilled ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/general/icons"},"Icon"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ErrorEmailField() {\n  const fieldId = 'email'\n  const [email, setEmail] = useState('')\n  const { fieldOptions } = getFormControlProps({\n    invalid: true,\n    required: true,\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: fieldId,\n    value: 'Email alerts',\n  })\n  // Just use the ErrorMessage version and pass in the fieldOptions\n  const error = getErrorMessageProps({\n    ...fieldOptions,\n    id: 'fieldId',\n    message: 'Please enter your email.',\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    describedBy: `${error.container.id},${error.id}`,\n    id: fieldId,\n    name: 'basic-form',\n    placeholder: 'email@example.com',\n    type: 'email',\n    value: email,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div>\n      <label {...labelProps}>{value}</label>\n      <div {...inputProps.inputWrapper}>\n        <input {...inputProps.input} onChange={handleChange} />\n        {fieldOptions.invalid && (\n          <span {...inputProps.invalidIconWrapper}>\n            <WarningTriangleFilledIcon\n              {...getIconProps(inputProps.invalidIconOptions)}\n            />\n          </span>\n        )}\n      </div>\n      {fieldOptions.invalid && (\n        <div {...error.container}>\n          <small {...error.message}>{error.message.value}</small>\n        </div>\n      )}\n    </div>\n  )\n}\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getFieldMessageProps(options?: FieldMessageOptions)\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": A string value for properties id and message that produce style and a11y properties for the Message components.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object matching the ",(0,r.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties. Additionally, it returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property that holds the message content."),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("h3",{id:"patterns"},"Patterns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," stack form fields vertically when displaying a set."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use more than one form field within the same row."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the Field Message on all form field to help provide context where necessary."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use the Error Message unless there is a field that has an invalid state."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the Error Message on all form fields that are invalid."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," eliminate the Error Message from an invalid form field, the Error Message is required to help provide visual context and a11y."),(0,r.kt)("h2",{id:"accessbility"},"Accessbility"),(0,r.kt)("p",null,"The Pando Field & Error Message APIs combined with semantic HTML allow the Field & Error Messages to be fully accessible and screen-readable."))}u.isMDXComponent=!0},31825:function(e,n,t){t.d(n,{a:function(){return d},g:function(){return p}});var a=t(39112),r=t(58105),s=t(50114);const i="gridCSS-module_gridContainer__sQmao",l="gridCSS-module_gridItem__nVMyV";(0,s.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const o="ps-grid";function p(e){const n=(0,r.g)(e);return{...(0,r.c)(n),...(0,a.c)(o,i)}}function d(e){const n=(0,r.a)(e);return{...(0,r.b)(n),...(0,a.c)("ps-grid-item",l)}}},58105:function(e,n,t){t.d(n,{a:function(){return s},b:function(){return l},c:function(){return i},g:function(){return r}});const a={6:.375,8:.5,12:.75,16:1,32:2};function r(e){return{cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function s(e){return{colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function i(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${a[e.gap]}rem`}}}function l(e){const{colSpan:n,rowSpan:t}=e;return t?{style:{gridArea:`span ${t} / span ${n} / span ${t} / span ${n}`}}:{style:{gridColumn:`span ${n} / span ${n}`}}}}}]);