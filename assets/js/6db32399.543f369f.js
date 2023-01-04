(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[3298],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9521:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={},u="Features that need a restart",s={unversionedId:"faq/Feature-requires-restart/How-to",id:"faq/Feature-requires-restart/How-to",isDocsHomePage:!1,title:"Features that need a restart",description:"What to know",source:"@site/docs/faq/Feature-requires-restart/How-to.mdx",sourceDirName:"faq/Feature-requires-restart",slug:"/faq/Feature-requires-restart/How-to",permalink:"/faq/Feature-requires-restart/How-to",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/Feature-requires-restart/How-to.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Local configuration for natural enrollments",permalink:"/local-enrollment"},next:{title:"If the metrics you need don\u2019t exist yet (in Core Metrics or Outcomes)?",permalink:"/faq/Metric Availability/non-guardrail-outcome"}},c=[{value:"What to know",id:"what-to-know",children:[]}],l={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"features-that-need-a-restart"},"Features that need a restart"),(0,o.kt)("h2",{id:"what-to-know"},"What to know"),(0,o.kt)("p",null,"This is how it works when a feature requires a restart:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"session 1: client enrolls, applies feature configuration, but the feature itself won't implement the changes until the next restart"),(0,o.kt)("li",{parentName:"ul"},"session 2: client is enrolled, feature configuration is applied, feature now shows changes")),(0,o.kt)("p",null,"IMPORTANT:  Share that this experiment needs a restart in your data science Jira ticket!!  And that there is custom work needed at analysis to not count the pre-restart data."))}p.isMDXComponent=!0}}]);