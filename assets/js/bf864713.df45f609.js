(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{188:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),a=(t(0),t(240)),i={},l={unversionedId:"nodes/interpolateColors",id:"version-1.x.x/nodes/interpolateColors",isDocsHomePage:!1,title:"interpolateColors",description:"interpolateColors",source:"@site/versioned_docs/version-1.x.x/nodes/interpolateColors.md",slug:"/nodes/interpolateColors",permalink:"/react-native-reanimated/docs/1.x.x/nodes/interpolateColors",version:"1.x.x",sidebar:"version-1.x.x/docs",previous:{title:"interpolate",permalink:"/react-native-reanimated/docs/1.x.x/nodes/interpolate"},next:{title:"onChange",permalink:"/react-native-reanimated/docs/1.x.x/nodes/onChange"}},c=[{value:"<code>interpolateColors</code>",id:"interpolatecolors",children:[]}],p={toc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"interpolatecolors"},Object(a.b)("inlineCode",{parentName:"h2"},"interpolateColors")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'interpolateColors(node, {\n  // Input range for the interpolation. Should be monotonically increasing.\n  inputRange: [nodeOrValue, ...],\n\n  // Output colors range for the interpolation.\n  // Should be the same length as the input range.\n  //\n  // Each color should be a string like "red" "#ff0" "#ff0000" "rgba(255, 0, 0, 1)"\n  // or a number like `0xrrggbbaa`.\n  outputColorRange: [color, ...],\n})\n')),Object(a.b)("p",null,"Maps an input value within a range to an output value within a color range."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const color = Animated.interpolateColors(node, {\n  inputRange: [0, 1],\n  outputColorRange: ['red', 'blue'],\n});\n\nreturn <Animated.View style={{ backgroundColor: color }} />;\n")))}u.isMDXComponent=!0},240:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,f=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return t?o.a.createElement(f,l(l({ref:n},p),{},{components:t})):o.a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);