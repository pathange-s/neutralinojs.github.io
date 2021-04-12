(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,g=s["".concat(a,".").concat(d)]||s[d]||b[d]||i;return t?o.a.createElement(g,c(c({ref:n},p),{},{components:t})):o.a.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=(t(0),t(109));const i={title:"Neutralino.debug"},a={unversionedId:"api/debug",id:"api/debug",isDocsHomePage:!1,title:"Neutralino.debug",description:"Neutralino.debug namespace contains application debugging utilities.",source:"@site/docs/api/debug.md",slug:"/api/debug",permalink:"/docs/api/debug",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/docs/api/debug.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.storage",permalink:"/docs/api/storage"},next:{title:"neutralino.config.json",permalink:"/docs/developer-environment/neutralino.config.json"}},c=[{value:"debug.log(LoggerOptions)",id:"debuglogloggeroptions",children:[{value:"LoggerOptions",id:"loggeroptions",children:[]}]}],l={toc:c};function p({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Neutralino.debug namespace contains application debugging utilities."),Object(o.b)("h2",{id:"debuglogloggeroptions"},"debug.log(LoggerOptions)"),Object(o.b)("p",null,"Writes messages to ",Object(o.b)("inlineCode",{parentName:"p"},"neutralino.log")," file.\xa0"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If your application is running via ",Object(o.b)("inlineCode",{parentName:"p"},"neu run")," or ",Object(o.b)("inlineCode",{parentName:"p"},"neu listen"),", you can see log\nmessages on your terminal."))),Object(o.b)("h3",{id:"loggeroptions"},"LoggerOptions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"type"),": Type of the message. Accepted values are ",Object(o.b)("inlineCode",{parentName:"li"},"INFO"),", ",Object(o.b)("inlineCode",{parentName:"li"},"WARN"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"ERROR"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"message"),": Content to be logged.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"await Neutralino.debug.log({\n  type: 'INFO',\n  message: 'Test message'\n});\n")))}p.isMDXComponent=!0}}]);