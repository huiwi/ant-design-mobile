(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var n=a("mn0l"),l=a("iojd"),c=a("ahKI"),r=a.n(c),o=a("vumQ"),i=a("OFpX");a("Qf6j"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,c=e.showCopy,s=void 0===c||c,m=Object(i["useCopy"])(),d=Object(l["a"])(m,2),u=d[0],h=d[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(o["a"],Object(n["a"])({},o["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,n=e.style,l=e.tokens,c=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:a,style:n},s&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":h,onClick:()=>u(t)}),l.map(((e,t)=>r.a.createElement("div",c({line:e,key:t}),e.map(((e,t)=>r.a.createElement("span",o({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("mn0l"),a("ahKI"),a("2Pr/")},N0lm:function(e,t,a){"use strict";var n=a("mn0l"),l=a("ahKI"),c=a.n(l);a("tCeM");t["a"]=e=>c.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},VPpv:function(e,t,a){},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return j}));var n=a("ahKI"),l=a.n(n),c=a("iojd"),r=a("/7QA"),o=a("9kvl"),i=a("OFpX"),s=a("wQXD"),m=a.n(s),d="https://codesandbox.io/api/v1/sandboxes/define";function u(e){return m.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function h(e){var t=Boolean(e.sources._.tsx),a=t?".tsx":".jsx",n={},l={},r=Object.values(e.dependencies).filter((e=>e.css)),o="app".concat(a),i="index".concat(a);Object.entries(e.dependencies).forEach((e=>{var t=Object(c["a"])(e,2),a=t[0],n=t[1].version;l[a]=n})),l["react-dom"]||(l["react-dom"]=l.react||"latest"),n["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},n["index.html"]={content:'<div id="root"></div>'},n[i]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(r.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var s=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(c["a"])(e,2),a=t[0],l=t[1],r=l.tsx,i=l.jsx,m=l.content,d={content:r||i||m};n["_"===a?o:a]=d,s=s||d.content.includes("from 'demos'"),d.content=d.content.replace("from 'demos'","from './demos-util'")})),s&&(l["lorem-ipsum"]="^2.0.8",n["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),n["package.json"]={content:JSON.stringify({name:e.title,main:i,dependencies:l,devDependencies:t?{typescript:"^3"}:{}},null,2)},u({files:n})}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,a=Object(n["useState"])(),l=Object(c["a"])(a,2),r=l[0],o=l[1];return Object(n["useEffect"])((()=>{if(e){var a=document.createElement("form"),n=h(e);function l(e,t){var n=document.createElement("input");a.appendChild(n),n.name=e,n.value=t}return a.method="POST",a.target="_blank",a.style.display="none",a.action=t,l("parameters",n),l("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),a.setAttribute("data-demo",e.title||""),document.body.appendChild(a),o((()=>()=>a.submit())),()=>a.remove()}}),[e]),r}var p=a("Bjia");a("YWOM");function v(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var f=e=>{var t,a=Object(n["useRef"])(null),s=Object(n["useContext"])(i["context"]),m=s.locale,d=Object(i["useLocaleProps"])(m,e),u=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(d.identifier),h=1===Object.keys(d.sources).length,f=E(null!==(t=d.hideActions)&&void 0!==t&&t.includes("CSB")?null:d),b=Object(i["useMotions"])(d.motions||[],a.current),g=Object(c["a"])(b,2),k=g[0],y=g[1],w=Object(i["useCopy"])(),O=Object(c["a"])(w,2),j=O[0],_=O[1],x=Object(n["useState"])("_"),N=Object(c["a"])(x,2),L=N[0],C=N[1],I=Object(n["useState"])(v(L,d.sources[L])),A=Object(c["a"])(I,2),S=A[0],T=A[1],M=d.sources[L][S]||d.sources[L].content,V=Object(i["useTSPlaygroundUrl"])(m,M),P=Object(i["usePrefersColor"])(),Z=Object(c["a"])(P,1);Z[0];function D(e){C(e),T(v(e,d.sources[e]))}return l.a.createElement("div",{style:d.style,className:[d.className,"__dumi-default-previewer",u?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:d.identifier,"data-debug":d.debug||void 0},l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":d.title},d.title&&l.a.createElement(i["AnchorLink"],{to:"#".concat(d.identifier)},d.title),d.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},d.debug&&l.a.createElement("span",{className:"debug-badge"},"Debug Only"),f&&l.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:f}),d.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:y,onClick:()=>k()}),l.a.createElement("div",{className:"spacer"}),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":_,onClick:()=>j(M)}),"tsx"===S&&l.a.createElement(i["Link"],{target:"_blank",to:V},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&l.a.createElement(r["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:L,onChange:D},Object.keys(d.sources).map((e=>l.a.createElement(r["Tabs"].Tab,{title:"_"===e?"index.".concat(v(e,d.sources[e])):e,key:e})))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(p["a"],{code:M,lang:S,showCopy:!1}))))},b=f,g=(a("oeoJ"),a("NEWu")),k=(a("q9vG"),e=>{var t=e.url,a=Object(n["useState"])(Math.random()),o=Object(c["a"])(a,2),s=o[0],m=o[1],d=Object(i["usePrefersColor"])(),u=Object(c["a"])(d,1),h=u[0],E=Object(n["useContext"])(i["context"]),p=E.config.mode;return Object(n["useEffect"])((()=>{m(Math.random())}),[h]),Object(n["useEffect"])((()=>{var e=["light","dark"].map((e=>window.matchMedia("(prefers-color-scheme: ".concat(e,")")))),t=()=>{m(Math.random())};e.forEach((e=>e.addEventListener("change",t)))}),[]),l.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":p},l.a.createElement("iframe",{title:"dumi-previewer",src:t,key:s}),l.a.createElement("div",{className:"adm-doc-device-action"},l.a.createElement("a",{onClick:()=>m(Math.random())},y),l.a.createElement(r["Popover"],{content:l.a.createElement(g["a"],{value:t,size:96}),trigger:"click"},l.a.createElement("a",null,w)),l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},O)))}),y=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),w=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),O=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),j="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(i["useDemoUrl"])(e.identifier);return l.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},l.a.createElement("div",{className:"adm-doc-previewer-source"},l.a.createElement(b,e)),l.a.createElement("div",{className:"adm-doc-previewer-device"},l.a.createElement(k,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),c=a("eqKt"),r=a.n(c),o=e=>l.a.createElement("a",{className:r.a.card,href:e.link,target:"_blank"},e.image&&l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement("div",{className:r.a.content},l.a.createElement("div",{className:r.a.title},e.title),l.a.createElement("div",{className:r.a.description},e.description)));t["a"]=o},mVOg:function(e,t,a){"use strict";var n=a("iojd"),l=a("ahKI"),c=a.n(l),r=a("OFpX"),o=a("/7QA");t["a"]=()=>{var e=Object(l["useContext"])(r["context"]),t=e.locale,a=Object(l["useState"])(!1),i=Object(n["a"])(a,2),s=i[0],m=i[1];return c.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{verticalAlign:"-0.125em"}},c.a.createElement(o["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:s,mode:"dark"},c.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){},yylf:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),c=a("bIC1"),r=a.n(c);a("VPpv");function o(e,t){return u(e)||d(e,t)||s(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,c=[],r=!0,o=!1;try{for(a=a.call(e);!(r=(n=a.next()).done);r=!0)if(c.push(n.value),t&&c.length===t)break}catch(i){o=!0,l=i}finally{try{r||null==a["return"]||a["return"]()}finally{if(o)throw l}}return c}}function u(e){if(Array.isArray(e))return e}var h=function(e){var t=e.children,a=Object(n["useRef"])(),c=Object(n["useState"])(!1),i=o(c,2),s=i[0],m=i[1],d=Object(n["useState"])(!1),u=o(d,2),h=u[0],E=u[1];return Object(n["useEffect"])((function(){var e=a.current,t=r()((function(){m(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":s||void 0,"data-right-folded":h||void 0},l.a.createElement("table",null,t)))};t["a"]=h},zo6m:function(e,t,a){"use strict";a.r(t);var n=a("ahKI"),l=a.n(n),c=a("OFpX"),r=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),o=(a("gKi5"),a("Bjia"),a("0m3q"),a("yylf")),i=l.a.memo((e=>{var t=e.demos,a=t["check-list-demo1"].component,n=t["check-list-demo2"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"checklist"},l.a.createElement(c["AnchorLink"],{to:"#checklist","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CheckList"),l.a.createElement("p",null,"Checklist operation."),l.a.createElement("h2",{id:"when-to-use"},l.a.createElement(c["AnchorLink"],{to:"#when-to-use","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"When to Use"),l.a.createElement("p",null,"Select one or more of a set of list items."),l.a.createElement("p",null,"The bottom layer of ",l.a.createElement("code",null,"CheckList")," is implemented based on ",l.a.createElement("code",null,"List"),", which is a list that can be checked."),l.a.createElement("h2",{id:"demos"},l.a.createElement(c["AnchorLink"],{to:"#demos","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Demos")),l.a.createElement(r["default"],t["check-list-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement(r["default"],t["check-list-demo2"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"checklist-1"},l.a.createElement(c["AnchorLink"],{to:"#checklist-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CheckList"),l.a.createElement("h3",{id:"props"},l.a.createElement(c["AnchorLink"],{to:"#props","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Props"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"activeIcon"),l.a.createElement("td",null,"The icon displayed when selected"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,l.a.createElement("code",null,"<CheckOutline />"))),l.a.createElement("tr",null,l.a.createElement("td",null,"extra"),l.a.createElement("td",null,"The right area of the list item"),l.a.createElement("td",null,l.a.createElement("code",null,"(active: boolean) => ReactNode")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"defaultValue"),l.a.createElement("td",null,"The default items"),l.a.createElement("td",null,l.a.createElement("code",null,"string[]")),l.a.createElement("td",null,l.a.createElement("code",null,"[]"))),l.a.createElement("tr",null,l.a.createElement("td",null,"disabled"),l.a.createElement("td",null,"Is the check list disabled"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"multiple"),l.a.createElement("td",null,"Whether to allow multiple selection or not"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onChange"),l.a.createElement("td",null,"Triggered when the option changes"),l.a.createElement("td",null,l.a.createElement("code",null,"(value: string[]) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"readOnly"),l.a.createElement("td",null,"Is the check list item readonly"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"value"),l.a.createElement("td",null,"The selected items"),l.a.createElement("td",null,l.a.createElement("code",null,"string[]")),l.a.createElement("td",null,l.a.createElement("code",null,"[]"))))),l.a.createElement("p",null,"In addition, the ",l.a.createElement("code",null,"mode")," attribute of ",l.a.createElement(c["Link"],{to:"/components/list"},"List")," is also supported"),l.a.createElement("h3",{id:"css-variables"},l.a.createElement(c["AnchorLink"],{to:"#css-variables","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CSS Variables"),l.a.createElement("p",null,"The same as ",l.a.createElement(c["AnchorLink"],{to:"/components/list/#list-2"},"List")),l.a.createElement("h2",{id:"checklistitem"},l.a.createElement(c["AnchorLink"],{to:"#checklistitem","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CheckList.Item"),l.a.createElement("h3",{id:"props-1"},l.a.createElement(c["AnchorLink"],{to:"#props-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Props"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"disabled"),l.a.createElement("td",null,"Is the check list item disabled"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"readOnly"),l.a.createElement("td",null,"Is the check list item readonly"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"value"),l.a.createElement("td",null,"The option value"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,"-")))),l.a.createElement("p",null,"In addition, the following attributes of ",l.a.createElement(c["Link"],{to:"/components/list"},"List.Item")," are also supported: ",l.a.createElement("code",null,"title")," ",l.a.createElement("code",null,"children")," ",l.a.createElement("code",null,"description")," ",l.a.createElement("code",null,"prefix")," ",l.a.createElement("code",null,"onClick")),l.a.createElement("h3",{id:"css-variables-1"},l.a.createElement(c["AnchorLink"],{to:"#css-variables-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CSS Variables"),l.a.createElement("p",null,"The same as ",l.a.createElement(c["AnchorLink"],{to:"/components/list/#listitem-1"},"List.Item")))))}));t["default"]=e=>{var t=l.a.useContext(c["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}}}]);