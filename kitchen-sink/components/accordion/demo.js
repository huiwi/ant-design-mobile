webpackJsonp([27],{337:function(n,a,t){n.exports={accordion:t(792),basic:t(799)}},630:function(n,a,t){"use strict";t(29),t(793)},631:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}(),e=c(t(0)),o=t(794),p=c(o);function c(n){return n&&n.__esModule?n:{default:n}}var l=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,e.default.Component),s(a,[{key:"render",value:function(){return e.default.createElement(p.default,this.props)}}]),a}();a.default=l,l.Panel=o.Panel,l.defaultProps={prefixCls:"am-accordion"},n.exports=a.default},792:function(n,a,t){n.exports={content:[["p","Accordion"]],meta:{order:1,title:{"zh-CN":"\u624b\u98ce\u7434\u6a21\u5f0f","en-US":"Accordion Mode"},filename:"components/accordion/demo/accordion.md",id:"components-accordion-demo-accordion"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Accordion<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">AccordionExmple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> marginBottom<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name">accordion</span> <span class="token attr-name">openAnimation</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-accordion<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion.Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title</span> <span class="token attr-name">1"</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>content <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>content <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>content <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion.Panel</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion.Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title</span> <span class="token attr-name">2"</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pad<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token keyword">this</span> is panel content2 or other<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion.Panel</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion.Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title</span> <span class="token attr-name">3"</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pad<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            text text text text text text text text text text text text text text text\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion.Panel</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionExmple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=t(0);t(0);t(630);var a=u(t(631)).default;t(630);var s=u(t(631)).default;t(630);var e=u(t(631)).default;t(630);var o=u(t(631)).default;t(130);var p=u(t(131)).default;t(130);var c=u(t(131)).default;t(130);var l=u(t(131)).default;t(130);var i=u(t(131)).default,r=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}();function u(n){return n&&n.__esModule?n:{default:n}}function k(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var f=function(t){function u(){var n,a,t;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,u);for(var s=arguments.length,e=Array(s),o=0;o<s;o++)e[o]=arguments[o];return a=t=k(this,(n=u.__proto__||Object.getPrototypeOf(u)).call.apply(n,[this].concat(e))),t.onChange=function(n){console.log(n)},k(t,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(u,n.Component),r(u,[{key:"render",value:function(){return n.createElement("div",{style:{marginTop:10,marginBottom:10}},n.createElement(a,{accordion:!0,openAnimation:{},className:"my-accordion",onChange:this.onChange},n.createElement(o.Panel,{header:"Title 1"},n.createElement(p,{className:"my-list"},n.createElement(i.Item,null,"content 1"),n.createElement(l.Item,null,"content 2"),n.createElement(c.Item,null,"content 3"))),n.createElement(e.Panel,{header:"Title 2",className:"pad"},"this is panel content2 or other"),n.createElement(s.Panel,{header:"Title 3",className:"pad"},"text text text text text text text text text text text text text text text")))}}]),u}();return n.createElement(f,null)},style:".my-accordion .pad .am-accordion-content-box {\n  padding: 10px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.my-accordion</span> <span class="token class">.pad</span> <span class="token class">.am-accordion-content-box</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},793:function(n,a){},794:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"Panel",function(){return e});var s=t(795);a.default=s.a;var e=s.a.Panel},795:function(n,a,t){"use strict";var s=t(0),e=t(1),o=t.n(e),p=t(796),c=t(798),l=t(3),i=t.n(l),r=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}();function u(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function k(n){var a=n;return Array.isArray(a)||(a=a?[a]:[]),a}var f=function(n){function a(n){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n)),s=t.props,e=s.activeKey,o=s.defaultActiveKey;return"activeKey"in t.props&&(o=e),t.state={openAnimation:t.props.openAnimation||Object(c.a)(t.props.prefixCls),activeKey:k(o)},t}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,s["Component"]),r(a,[{key:"componentWillReceiveProps",value:function(n){"activeKey"in n&&this.setState({activeKey:k(n.activeKey)}),"openAnimation"in n&&this.setState({openAnimation:n.openAnimation})}},{key:"onClickItem",value:function(n){var a=this.state.activeKey;if(this.props.accordion)a=a[0]===n?[]:[n];else{var t=(a=[].concat(function(n){if(Array.isArray(n)){for(var a=0,t=Array(n.length);a<n.length;a++)t[a]=n[a];return t}return Array.from(n)}(a))).indexOf(n);t>-1?a.splice(t,1):a.push(n)}this.setActiveKey(a)}},{key:"getItems",value:function(){var n=this,a=this.state.activeKey,t=this.props,e=t.prefixCls,o=t.accordion,p=t.destroyInactivePanel,c=[];return s.Children.forEach(this.props.children,function(t,l){if(t){var i=t.key||String(l),r=t.props,u=r.header,k=r.headerClass,f=r.disabled,d=!1;d=o?a[0]===i:a.indexOf(i)>-1;var m={key:i,header:u,headerClass:k,isActive:d,prefixCls:e,destroyInactivePanel:p,openAnimation:n.state.openAnimation,children:t.props.children,onItemClick:f?null:function(){return n.onClickItem(i)}};c.push(s.default.cloneElement(t,m))}}),c}},{key:"setActiveKey",value:function(n){"activeKey"in this.props||this.setState({activeKey:n}),this.props.onChange(this.props.accordion?n[0]:n)}},{key:"render",value:function(){var n,a=this.props,t=a.prefixCls,e=a.className,o=a.style,p=i()((u(n={},t,!0),u(n,e,!!e),n));return s.default.createElement("div",{className:p,style:o},this.getItems())}}]),a}();f.propTypes={children:o.a.any,prefixCls:o.a.string,activeKey:o.a.oneOfType([o.a.string,o.a.arrayOf(o.a.string)]),defaultActiveKey:o.a.oneOfType([o.a.string,o.a.arrayOf(o.a.string)]),openAnimation:o.a.object,onChange:o.a.func,accordion:o.a.bool,className:o.a.string,style:o.a.object,destroyInactivePanel:o.a.bool},f.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},f.Panel=p.a,a.a=f},796:function(n,a,t){"use strict";var s=t(0),e=t(1),o=t.n(e),p=t(3),c=t.n(p),l=t(797),i=t(136),r=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}();function u(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}var k=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,s["Component"]),r(a,[{key:"handleItemClick",value:function(){this.props.onItemClick&&this.props.onItemClick()}},{key:"render",value:function(){var n,a=this.props,t=a.className,e=a.id,o=a.style,p=a.prefixCls,r=a.header,k=a.headerClass,f=a.children,d=a.isActive,m=a.showArrow,y=a.destroyInactivePanel,h=a.disabled,g=c()(p+"-header",u({},k,k)),v=c()((u(n={},p+"-item",!0),u(n,p+"-item-active",d),u(n,p+"-item-disabled",h),n),t);return s.default.createElement("div",{className:v,style:o,id:e,role:"tablist"},s.default.createElement("div",{className:g,onClick:this.handleItemClick.bind(this),role:"tab","aria-expanded":d},m&&s.default.createElement("i",{className:"arrow"}),r),s.default.createElement(i.a,{showProp:"isActive",exclusive:!0,component:"",animation:this.props.openAnimation},s.default.createElement(l.a,{prefixCls:p,isActive:d,destroyInactivePanel:y},f)))}}]),a}();k.propTypes={className:o.a.oneOfType([o.a.string,o.a.object]),id:o.a.string,children:o.a.any,openAnimation:o.a.object,prefixCls:o.a.string,header:o.a.oneOfType([o.a.string,o.a.number,o.a.node]),headerClass:o.a.string,showArrow:o.a.bool,isActive:o.a.bool,onItemClick:o.a.func,style:o.a.object,destroyInactivePanel:o.a.bool,disabled:o.a.bool},k.defaultProps={showArrow:!0,isActive:!1,destroyInactivePanel:!1,onItemClick:function(){},headerClass:""},a.a=k},797:function(n,a,t){"use strict";var s=t(0),e=t(1),o=t.n(e),p=t(3),c=t.n(p),l=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}();function i(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}var r=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,s["Component"]),l(a,[{key:"shouldComponentUpdate",value:function(n){return this.props.isActive||n.isActive}},{key:"render",value:function(){var n;if(this._isActived=this._isActived||this.props.isActive,!this._isActived)return null;var a=this.props,t=a.prefixCls,e=a.isActive,o=a.children,p=a.destroyInactivePanel,l=c()((i(n={},t+"-content",!0),i(n,t+"-content-active",e),i(n,t+"-content-inactive",!e),n)),r=!e&&p?null:s.default.createElement("div",{className:t+"-content-box"},o);return s.default.createElement("div",{className:l,role:"tabpanel"},r)}}]),a}();r.propTypes={prefixCls:o.a.string,isActive:o.a.bool,children:o.a.any,destroyInactivePanel:o.a.bool},a.a=r},798:function(n,a,t){"use strict";var s=t(145);function e(n,a,t,e){var o=void 0;return Object(s.a)(n,t,{start:function(){a?(o=n.offsetHeight,n.style.height=0):n.style.height=n.offsetHeight+"px"},active:function(){n.style.height=(a?o:0)+"px"},end:function(){n.style.height="",e()}})}a.a=function(n){return{enter:function(a,t){return e(a,!0,n+"-anim",t)},leave:function(a,t){return e(a,!1,n+"-anim",t)}}}},799:function(n,a,t){n.exports={content:[["p","Accordion"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/accordion/demo/basic.md",id:"components-accordion-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Accordion<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">AccordionExmple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> marginBottom<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name">defaultActiveKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-accordion<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion.Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title</span> <span class="token attr-name">1"</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>content <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>content <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>content <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion.Panel</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion.Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title</span> <span class="token attr-name">2"</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pad<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token keyword">this</span> is panel content2 or other<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion.Panel</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion.Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title</span> <span class="token attr-name">3"</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pad<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            text text text text text text text text text text text text text text text\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion.Panel</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionExmple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=t(0);t(0);t(630);var a=u(t(631)).default;t(630);var s=u(t(631)).default;t(630);var e=u(t(631)).default;t(630);var o=u(t(631)).default;t(130);var p=u(t(131)).default;t(130);var c=u(t(131)).default;t(130);var l=u(t(131)).default;t(130);var i=u(t(131)).default,r=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}();function u(n){return n&&n.__esModule?n:{default:n}}function k(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var f=function(t){function u(){var n,a,t;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,u);for(var s=arguments.length,e=Array(s),o=0;o<s;o++)e[o]=arguments[o];return a=t=k(this,(n=u.__proto__||Object.getPrototypeOf(u)).call.apply(n,[this].concat(e))),t.onChange=function(n){console.log(n)},k(t,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(u,n.Component),r(u,[{key:"render",value:function(){return n.createElement("div",{style:{marginTop:10,marginBottom:10}},n.createElement(a,{defaultActiveKey:"0",className:"my-accordion",onChange:this.onChange},n.createElement(o.Panel,{header:"Title 1"},n.createElement(p,{className:"my-list"},n.createElement(i.Item,null,"content 1"),n.createElement(l.Item,null,"content 2"),n.createElement(c.Item,null,"content 3"))),n.createElement(e.Panel,{header:"Title 2",className:"pad"},"this is panel content2 or other"),n.createElement(s.Panel,{header:"Title 3",className:"pad"},"text text text text text text text text text text text text text text text")))}}]),u}();return n.createElement(f,null)},style:".my-accordion .pad .am-accordion-content-box {\n  padding: 10px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.my-accordion</span> <span class="token class">.pad</span> <span class="token class">.am-accordion-content-box</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}}});