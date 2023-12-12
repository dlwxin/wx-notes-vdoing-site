(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{552:function(t,e,s){"use strict";s.r(e);var n=s(26),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[s("a",{attrs:{href:"https://reactjs.org/docs/hooks-faq.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hooks FAQ"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"adoption-strategy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adoption-strategy"}},[t._v("#")]),t._v(" Adoption Strategy")]),t._v(" "),s("h2",{attrs:{id:"from-classes-to-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-classes-to-hooks"}},[t._v("#")]),t._v(" From Classes to Hooks")]),t._v(" "),s("h3",{attrs:{id:"how-do-lifecycle-methods-correspond-to-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-lifecycle-methods-correspond-to-hooks"}},[t._v("#")]),t._v(" How do lifecycle methods correspond to Hooks?")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("constructor")]),t._v(": Function components don’t need a constructor. You can initialize the state in the "),s("code",[t._v("useState")]),t._v(" call. If computing the initial state is expensive, you can pass a function to "),s("code",[t._v("useState")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("getDerivedStateFromProps")]),t._v(": Schedule an update "),s("a",{attrs:{href:"https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops",target:"_blank",rel:"noopener noreferrer"}},[t._v("while rendering"),s("OutboundLink")],1),t._v(" instead.")]),t._v(" "),s("li",[s("code",[t._v("shouldComponentUpdate")]),t._v(": See "),s("a",{attrs:{href:"https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-shouldcomponentupdate",target:"_blank",rel:"noopener noreferrer"}},[t._v("React.memo"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("render")]),t._v(": This is the function component body itself.")]),t._v(" "),s("li",[s("code",[t._v("componentDidMount")]),t._v(", "),s("code",[t._v("componentDidUpdate")]),t._v(", "),s("code",[t._v("componentWillUnmount")]),t._v(": The useEffect Hook can express all combinations of these (including less common "),s("a",{attrs:{href:"https://reactjs.org/docs/hooks-faq.html#can-i-run-an-effect-only-on-updates",target:"_blank",rel:"noopener noreferrer"}},[t._v("cases"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("li",[s("code",[t._v("getSnapshotBeforeUpdate")]),t._v(", "),s("code",[t._v("componentDidCatch")]),t._v(" and "),s("code",[t._v("getDerivedStateFromError")]),t._v(": There are no Hook equivalents for these methods yet, but they will be added soon.")])]),t._v(" "),s("h3",{attrs:{id:"how-can-i-do-data-fetching-with-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-do-data-fetching-with-hooks"}},[t._v("#")]),t._v(" How can I do data fetching with Hooks?")]),t._v(" "),s("p",[t._v("Here is a "),s("a",{attrs:{href:"https://codesandbox.io/s/jvvkoo8pq3",target:"_blank",rel:"noopener noreferrer"}},[t._v("small demo"),s("OutboundLink")],1),t._v(" to get you started. To learn more, check out "),s("a",{attrs:{href:"https://www.robinwieruch.de/react-hooks-fetch-data/",target:"_blank",rel:"noopener noreferrer"}},[t._v("this article"),s("OutboundLink")],1),t._v(" about data fetching with Hooks.")]),t._v(" "),s("h3",{attrs:{id:"is-there-something-like-instance-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#is-there-something-like-instance-variables"}},[t._v("#")]),t._v(" Is there something like instance variables?")]),t._v(" "),s("div",{attrs:{id:"something-like-instance-variables"}}),t._v(" "),s("p",[t._v("Yes! The "),s("a",{attrs:{href:"https://reactjs.org/docs/hooks-reference.html#useref",target:"_blank",rel:"noopener noreferrer"}},[t._v("useRef()"),s("OutboundLink")],1),t._v(" Hook isn’t just for DOM refs. The “ref” object is a generic container whose "),s("code",[t._v("current")]),t._v(" property is mutable and can hold any value, similar to an instance property on a class.")]),t._v(" "),s("p",[t._v("You can write to it from inside "),s("code",[t._v("useEffect")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Timer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" intervalRef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    intervalRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" id\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intervalRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("p",[t._v("If we just wanted to set an interval, we wouldn’t need the ref ("),s("code",[t._v("id")]),t._v(" could be local to the effect), but it’s useful if we want to clear the interval from an event handler:")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleCancelClick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intervalRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("Conceptually, you can think of refs as similar to instance variables in a class. Unless you’re doing "),s("a",{attrs:{href:"https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily",target:"_blank",rel:"noopener noreferrer"}},[t._v("lazy initialization"),s("OutboundLink")],1),t._v(", avoid setting refs during rendering — this can lead to surprising behavior. Instead, typically you want to modify refs in event handlers and effects.")]),t._v(" "),s("p",[t._v("A "),s("strong",[t._v("wrong")]),t._v(" usage below. You will see a tip which eslint report below.")]),t._v(" "),s("blockquote",[s("p",[t._v("Assignments to the 'timer' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect.")])]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Woring usage")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Timer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" id\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h2",{attrs:{id:"performance-optimizations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance-optimizations"}},[t._v("#")]),t._v(" Performance Optimizations")]),t._v(" "),s("h3",{attrs:{id:"is-it-safe-to-omit-functions-from-the-list-of-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#is-it-safe-to-omit-functions-from-the-list-of-dependencies"}},[t._v("#")]),t._v(" Is it safe to omit functions from the list of dependencies?")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies",target:"_blank",rel:"noopener noreferrer"}},[t._v("Is it safe to omit functions from the list of dependencies?"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"what-can-i-do-if-my-effect-dependencies-change-too-often"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-can-i-do-if-my-effect-dependencies-change-too-often"}},[t._v("#")]),t._v(" What can I do if my effect dependencies change too often?")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often",target:"_blank",rel:"noopener noreferrer"}},[t._v("What can I do if my effect dependencies change too often?"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"under-the-hood"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood"}},[t._v("#")]),t._v(" Under the Hood")])])}),[],!1,null,null,null);e.default=a.exports}}]);