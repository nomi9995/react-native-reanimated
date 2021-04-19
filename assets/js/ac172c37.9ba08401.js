(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{178:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(240)),i={id:"runOnJS",title:"runOnJS",sidebar_label:"runOnJS"},c={unversionedId:"api/runOnJS",id:"version-2.0.0/api/runOnJS",isDocsHomePage:!1,title:"runOnJS",description:"When you call a function on UI thread you can't be sure if you call a worklet or a callback from JS thread. To make it more transparent we introduced runOnJS, which calls a callback asynchronously. An exception will be thrown if you call a JS callback without this function.",source:"@site/versioned_docs/version-2.0.0/api/runonJS.md",slug:"/api/runOnJS",permalink:"/react-native-reanimated/docs/api/runOnJS",version:"2.0.0",sidebar_label:"runOnJS",sidebar:"version-2.0.0/docs",previous:{title:"scrollTo",permalink:"/react-native-reanimated/docs/api/nativeMethods/scrollTo"},next:{title:"Testing with Jest",permalink:"/react-native-reanimated/docs/testing"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When you call a function on UI thread you can't be sure if you call a worklet or a callback from JS thread. To make it more transparent we introduced ",Object(o.b)("inlineCode",{parentName:"p"},"runOnJS"),", which calls a callback asynchronously. An exception will be thrown if you call a JS callback without this function."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you want to invoke some function from external library in ",Object(o.b)("inlineCode",{parentName:"p"},"runOnJS")," please wrap it into a separate function."),Object(o.b)("p",{parentName:"div"},"Code like this may not work:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-js"},"useDerivedValue(() => {\n  runOnJS(externalLibraryFunction)(args);\n});\n")),Object(o.b)("p",{parentName:"div"},"But something like this will work:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-js"},"const wrapper = (args) => {\n  externalLibraryFunction(args);\n};\nuseDerivedValue(() => {\n  runOnJS(wrapper)(args);\n});\n")),Object(o.b)("p",{parentName:"div"},"This is because internally ",Object(o.b)("inlineCode",{parentName:"p"},"runOnJS")," uses ",Object(o.b)("inlineCode",{parentName:"p"},"Object.defineProperty"),". Therefore if we want to call a method of some object we may not have an access to ",Object(o.b)("inlineCode",{parentName:"p"},"this")," nside a called function."),Object(o.b)("p",{parentName:"div"},"This code shows how it works:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-js"},"class A {\n  foo() {\n    //... playing with [this]\n  }\n}\n\nconst a = new A();\nconst ob = {};\nObject.defineProperty(ob, 'foo', { enumerable: false, value: a.foo }); // we do something like this in runOnJS\n\na.foo(5); // normal [this] access\nob.foo(5); // [this] is not correct\n")))),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"fn-function"},Object(o.b)("inlineCode",{parentName:"h4"},"fn")," ","[function]"),Object(o.b)("p",null,"The first and the only argument is a function which is supposed to be run."),Object(o.b)("h3",{id:"returns"},"Returns"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"runOnJS")," returns a function which can be safely run from UI thread."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Here is an example of calling a javascript callback from the UI thread:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"{22}","{22}":!0},"import {\n  useSharedValue,\n  runOnJS,\n  useDerivedValue,\n  useAnimatedReaction,\n} from 'react-native-reanimated';\nimport { View, Button } from 'react-native';\nimport React from 'react';\n\nexport default function App() {\n  const randomWidth = useSharedValue(10);\n  const lastResults = [];\n\n  const recordResult = (result) => {\n    lastResults.push(result);\n    if (lastResults.length > 3) {\n      lastResults.shift();\n    }\n  };\n\n  useDerivedValue(() => {\n    runOnJS(recordResult)(randomWidth.value);\n  });\n\n  return (\n    <View>\n      <Button\n        title=\"toggle\"\n        onPress={() => {\n          randomWidth.value = Math.round(Math.random() * 350);\n        }}\n      />\n    </View>\n  );\n}\n")))}u.isMDXComponent=!0},240:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);