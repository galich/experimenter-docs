(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[5031],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=i,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6581:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o={},s="Feature metrics aren't there?",u={unversionedId:"faq/Metric Availability/non-guardrail-outcome",id:"faq/Metric Availability/non-guardrail-outcome",isDocsHomePage:!1,title:"Feature metrics aren't there?",description:"Watch this video to know how metrics work with experiments.  It covers the steps below; They are there for ease of reference and links.",source:"@site/docs/faq/Metric Availability/non-guardrail-outcome.mdx",sourceDirName:"faq/Metric Availability",slug:"/faq/Metric Availability/non-guardrail-outcome",permalink:"/faq/Metric Availability/non-guardrail-outcome",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/Metric Availability/non-guardrail-outcome.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"What to know",permalink:"/faq/Feature-requires-restart/How-to"},next:{title:"Re-enrolled in the same experiment?",permalink:"/faq/Unenrollment/Reenrolling-in-experiments"}},c=[],l={toc:c};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"feature-metrics-arent-there"},"Feature metrics aren't there?"),(0,a.kt)("p",null,"Watch ",(0,a.kt)("a",{parentName:"p",href:"https://mozilla.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7f677cde-3b61-4cd5-8119-af7b013c7579"},"this video")," to know how metrics work with experiments.  It covers the steps below; They are there for ease of reference and links."),(0,a.kt)("p",null,"After completing your experiment brief and defining your learning goals - attend an office hours to discuss how you could measure the changes.  Based on that discussion - go through the steps below until the metrics needed for this experiment are covered.  You do not need to complete all the steps - just enough to answer your questions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1")," - Check  ",(0,a.kt)("a",{parentName:"p",href:"https://experimenter.info/jetstream/metrics/#how-do-i-add-a-metric-to-my-experiment"},"here")," to learn if the existing Guardrail/Core metrics or Outcomes will answer your questions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2")," - Did an experiment run previously had these metrics you need?  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Look at previous experiments in your feature area - do those metrics meet your needs?  Re-using metrics is a much quicker than writing custom metrics from scratch.   "),(0,a.kt)("li",{parentName:"ul"},"If yes, create a ",(0,a.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/jira/software/c/projects/DO/boards/269"},"DO Jira ticket")," including:  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the link to your current experiment "),(0,a.kt)("li",{parentName:"ul"},"the link to the previous experiment(s) results.  Specify the metrics from the previous experiment you are interested in and how they answer your question.    "))),(0,a.kt)("li",{parentName:"ul"},"BEST PRACTICE: If you want these metrics for future experiments on this feature - ask to have an Outcome added instead of a custom config file.  Adding an Outcome means these metrics will be available to select from the Outcome drop down in Metrics for future experiments.  ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3")," - Provide information to create a custom metric for this experiment."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a ",(0,a.kt)("a",{parentName:"li",href:"https://mozilla-hub.atlassian.net/jira/software/c/projects/DO/boards/269"},"DO Jira ticket")," including: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the link to your current experiment  "),(0,a.kt)("li",{parentName:"ul"},"the questions you need to answer about the feature (that aren't covered by metrics from step 1 or step 2)"),(0,a.kt)("li",{parentName:"ul"},"the specific telemetry probes in your feature that will be used to answer the question - including the possible values those probes collect and when they are sent. "))),(0,a.kt)("li",{parentName:"ul"},"A data scientist will work with feature product and engineering to create a custom jetstream config file to add these metrics.  Provided the telemetry probes exist and are testing - the custom configuration file can be written after experiment launch (before end) and applied.")))}p.isMDXComponent=!0}}]);