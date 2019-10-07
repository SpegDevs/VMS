(window.webpackJsonpvms=window.webpackJsonpvms||[]).push([[0],{24:function(e,t,a){e.exports={sidebar:"Ide_sidebar__ADrPC",logo:"Ide_logo__3mkxC",env:"Ide_env__1rt9U",actions:"Ide_actions__lRmzn",workspace:"Ide_workspace__AiCY3"}},29:function(e,t,a){e.exports={wrapper:"SideTools_wrapper__1s6vx",main:"SideTools_main__2cUTv",coverBar:"SideTools_coverBar__1DtbU"}},30:function(e,t,a){e.exports={item:"SideItems_item__3VAvx",item_logo:"SideItems_item_logo__11pdu",title:"SideItems_title__uDhnf"}},51:function(e,t,a){e.exports={workspace:"Workspace_workspace__wldad"}},57:function(e,t,a){e.exports=a(90)},6:function(e,t,a){e.exports={tooltip:"Modal_tooltip__32SUo",tooltipText:"Modal_tooltipText__AL2OT",sucess:"Modal_sucess__1RJV8",ifBody:"Modal_ifBody__3cL2f"}},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(25),r=a.n(o),i=(a(62),a(63),a(13)),s=a(14),l=a(15),u=a(17),p=a(16),m=a(5),d=a(18),h=a(24),g=a.n(h),f=(a(64),function(e){return c.a.createElement("i",{className:"material-icons",id:e.name,onClick:function(){e.action(e.code)}},e.name)}),O=(a(65),function(e){var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download","code.moe"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}),b=[{icon:"play_arrow",action:"play"},{icon:"bug_report",action:"debug"},{icon:"stop",action:"stop"},{icon:"file_download",action:function(e){O(e)}}],y=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("ul",null,b.map((function(t,a){if(t.action)return c.a.createElement(f,{name:t.icon,code:e.props.code,action:t.action,key:a})})))}}]),t}(c.a.Component),v=a(29),E=a.n(v),j=a(28),w=a(30),C=a.n(w),k=a(20),_="component",I=function(e){var t=Object(k.c)({item:{type:_,id:e.item.id},collect:function(e){return{opacity:e.isDragging()?.5:1}}}),a=Object(j.a)(t,2),n=a[0].opacity,o=a[1];return c.a.createElement("div",{className:C.a.item,ref:o,style:{opacity:n}},c.a.createElement("div",{className:C.a.item_logo},c.a.createElement("img",{src:e.item.img,alt:e.item.title})),c.a.createElement("div",{className:C.a.title},c.a.createElement("p",null,e.item.title)))},S=a(56),A="IF",N="DECLARE",x="ASIGN",D="ITERATION",P="IO",T="IN",M="OUT",B=[{id:A,img:"/img/IF.png",title:"if"},{id:N,img:"/img/declare.png",title:"declare"},{id:x,img:"/img/operation.png",title:"asign"},{id:D,img:"/img/iteration.png",title:"iteration"},{id:P,img:"/img/asign.png",title:"IO"}],q=function(e){return c.a.createElement("div",{className:E.a.wrapper},c.a.createElement("div",{className:E.a.main},B.map((function(e,t){return c.a.createElement(k.b,{backend:S.a,key:t},c.a.createElement(I,{item:e}))}))),c.a.createElement("div",{className:E.a.coverBar}))},F=a(32),U=a(51),L=a.n(U),R=a(96),V=a(91),H=a(92),z=a(93),J=a(94),W=a(95),G=a(6),Y=a.n(G),$=function(e){return c.a.createElement(R.a,{isOpen:e.isOpen,toggle:e.toggle,className:Y.a.modal},c.a.createElement(V.a,{tag:"div"},c.a.createElement("h3",null,"If statement"),c.a.createElement("div",{className:Y.a.tooltip},c.a.createElement("i",{className:"material-icons"},"info_outline"),c.a.createElement("span",{className:Y.a.tooltipText},e.tutorial))),c.a.createElement(H.a,null,c.a.createElement("div",{className:Y.a.ifBody},c.a.createElement("label",{htmlFor:"condition"},"Enter a condition"),c.a.createElement(z.a,{type:"text",id:"condition"}))),c.a.createElement(R.a,null),c.a.createElement(J.a,null,c.a.createElement(W.a,{color:"danger",onClick:function(){e.toggle(A)}},"Cancel"),c.a.createElement(W.a,{className:Y.a.sucess,onClick:function(){e.toggle(A,document.querySelector("#condition").value)}},"Continue")))};function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X=["int","dec","str","char","bool"],Z=["variable","array"],ee={isArray:!1},te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state=Q({},ee),a.changeArray=a.changeArray.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"changeArray",value:function(e){var t=e===Z[1];this.setState(Q({},this.state,{isArray:t}))}},{key:"render",value:function(){var e=this;return c.a.createElement(R.a,{isOpen:this.props.isOpen,toggle:this.props.toggle},c.a.createElement(V.a,{tag:"div"},c.a.createElement("h3",null,"Declare statement"),c.a.createElement("div",{className:Y.a.tooltip},c.a.createElement("i",{className:"material-icons"},"info_outline"),c.a.createElement("span",{className:Y.a.tooltipText},this.props.tutorial))),c.a.createElement(H.a,null,c.a.createElement("h3",null,"Declaration"),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"declare"},"Enter a variable"),c.a.createElement(z.a,{type:"select",id:"declareVariable",onChange:function(t){e.changeArray(t.target.options[t.target.selectedIndex].value)}},Z.map((function(e,t){return c.a.createElement("option",{value:e,key:t},e)}))),c.a.createElement(z.a,{type:"select",id:"declareType"},X.map((function(e,t){return c.a.createElement("option",{value:e,key:t},e)}))),this.state.isArray&&c.a.createElement(z.a,{type:"number",id:"arrayLength",placeholder:"Array size",min:"1"}),c.a.createElement(z.a,{type:"text",id:"declare"}))),c.a.createElement(R.a,null),c.a.createElement(J.a,null,c.a.createElement(W.a,{color:"danger",onClick:function(){e.props.toggle(N),e.setState({isArray:!1})}},"Cancel"),c.a.createElement(W.a,{className:Y.a.sucess,onClick:function(){var t=document.querySelector("#declareType"),a=document.querySelector("#declare").value,n="",c=t.options[t.selectedIndex].value;n=e.state.isArray?"arr[".concat(c,", ").concat(document.querySelector("#arrayLength").value,"] ").concat(a):"".concat(c," ").concat(a),e.props.toggle(N,n),e.setState({isArray:!1})}},"Continue")))}}]),t}(c.a.Component),ae=function(e){return c.a.createElement(R.a,{isOpen:e.isOpen,toggle:e.toggle},c.a.createElement(V.a,{tag:"div"},c.a.createElement("h3",null,"Asign statement"),c.a.createElement("div",{className:Y.a.tooltip},c.a.createElement("i",{className:"material-icons"},"info_outline"),c.a.createElement("span",{className:Y.a.tooltipText},e.tutorial))),c.a.createElement(H.a,null,c.a.createElement("h3",null,"Asign"),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"asign"},"Asign a variable a value"),c.a.createElement(z.a,{type:"text",id:"asign"}))),c.a.createElement(R.a,null),c.a.createElement(J.a,null,c.a.createElement(W.a,{color:"danger",onClick:function(){e.toggle(x)}},"Cancel"),c.a.createElement(W.a,{className:Y.a.sucess,onClick:function(){e.toggle(x,document.querySelector("#asign").value)}},"Continue")))},ne=a(53),ce=a.n(ne),oe={x:0,y:0,"line-width":3,"line-length":50,"text-margin":10,"font-size":14,"font-color":"white","line-color":"#222831","element-color":"1e9ba0",fill:"var(--primary-dark)","yes-text":"yes","no-text":"no","arrow-end":"block",scale:1,symbols:{start:{"font-color":"white","element-color":"#1e9ba0","font-weight":"bold"},end:{"font-color":"white","element-color":"#1e9ba0","font-weight":"bold"}}},re=function(e){var t=e.code.reduce((function(e,t){return"".concat(e,"\n    ").concat(t)}),"");return c.a.createElement(ce.a,{chartCode:t,options:oe})};function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var le=["Input","Output"],ue={isInput:!0},pe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state=se({},ue),a.inputChangeHandler=a.inputChangeHandler.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"inputChangeHandler",value:function(e){var t=e===le[0];this.setState(se({},this.state,{isInput:t}))}},{key:"render",value:function(){var e=this;return c.a.createElement(R.a,{isOpen:this.props.isOpen,toggle:this.props.toggle,className:Y.a.modal},c.a.createElement(V.a,{tag:"div"},c.a.createElement("h3",null,"Input - Output statement"),c.a.createElement("div",{className:Y.a.tooltip},c.a.createElement("i",{className:"material-icons"},"info_outline"),c.a.createElement("span",{className:Y.a.tooltipText},this.props.tutorial))),c.a.createElement(H.a,null,c.a.createElement("div",{className:Y.a.ifBody},c.a.createElement("label",{htmlFor:"type"},"Enter a condition"),c.a.createElement(z.a,{type:"select",id:"type",onChange:function(t){e.inputChangeHandler(t.target.options[t.target.selectedIndex].value)}},le.map((function(e,t){return c.a.createElement("option",{key:t,value:e},e)}))),this.state.isInput&&c.a.createElement(z.a,{id:"variable",placeholder:"Enter a variable"}),c.a.createElement(z.a,{id:"input",placeholder:"Enter a text"}))),c.a.createElement(J.a,null,c.a.createElement(W.a,{color:"danger",onClick:function(){e.props.toggle(P)}},"Cancel"),c.a.createElement(W.a,{className:Y.a.sucess,onClick:function(){e.state.isInput?e.props.toggle(T,"".concat(document.querySelector("#variable").value,"=in(").concat(document.querySelector("#input").value,")")):e.props.toggle(T,"out(".concat(document.querySelector("#input").value,")"))}},"Continue")))}}]),t}(c.a.Component);function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function de(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var he="Enter an logic expresion such as x>10.\nValid expresions: >, <, >=, <=, ==, !=, !, &&, ||",ge="Select a variable type and name it, you can create multiple variables of the same type separating them with a comma",fe="Asign a value to an existing variable, you can do multiple asignments separating them with an semicolon with no space",Oe="Select input if you want write a text or number or output if you want to print a variable or a plain text",be=function(e){var t=Object(k.d)({accept:_,drop:function(t){e.handler(t.id)}}),a=Object(j.a)(t,2),n=(a[0],a[1]);return c.a.createElement("div",{ref:n,className:L.a.workspace},c.a.createElement(re,{code:e.code}))},ye={text:"",isIfOpen:!1,isDeclareOpen:!1,isAsignOpen:!1,isIterationOpen:!1,isSelectingArray:!1,isIOOpen:!1,count:0,flowCode:["start=>start: start","end=>end: end","start->end"]},ve=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state=de({},ye),a.toggleModals=a.toggleModals.bind(Object(m.a)(a)),a.pushToCode=a.pushToCode.bind(Object(m.a)(a)),a.pushIf=a.pushIf.bind(Object(m.a)(a)),a.pushDeclare=a.pushDeclare.bind(Object(m.a)(a)),a.pushAsign=a.pushAsign.bind(Object(m.a)(a)),a.selectingArray=a.selectingArray.bind(Object(m.a)(a)),a.pushIO=a.pushIO.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggleModals",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=this.props.code;switch(e){case A:if(""!==t){var n=this.state.flowCode,c=n[n.length-1],o="cond".concat(this.state.count,"=>condition: ").concat(t),r="".concat(c.split("->")[0],"->cond").concat(this.state.count),i="cond".concat(this.state.count,"(yes)->").concat(c.split("->")[1]);n.pop(),n.push(o),n.push(r),n.push("cond".concat(this.state.count,"(no)->end")),n.push(i),this.setState(de({},this.state,{flowCode:n}))}this.setState(de({},this.state,{isIfOpen:!this.state.isIfOpen,count:this.state.count+1}));break;case N:if(""!==t){var s=this.state.flowCode,l=s[s.length-1],u="declare".concat(this.state.count,"=>operation: ").concat(t),p="".concat(l.split("->")[0],"->declare").concat(this.state.count),m="declare".concat(this.state.count,"->").concat(l.split("->")[1]);s.pop(),s.push(u),s.push(p),s.push(m),a="".concat(a,"\n").concat(t,";")}this.setState(de({},this.state,{isDeclareOpen:!this.state.isDeclareOpen,count:this.state.count+1,isSelectingArray:!1})),this.props.addToCode(a);break;case x:if(""!==t){var d=this.state.flowCode,h=(Object(F.a)(d),d[d.length-1]),g="asign".concat(this.state.count,"=>subroutine: ").concat(t),f="".concat(h.split("->")[0],"->asign").concat(this.state.count),O="asign".concat(this.state.count,"->").concat(h.split("->")[1]);d.pop(),d.push(g),d.push(f),d.push(O),a="".concat(a,"\n").concat(t,";")}this.setState(de({},this.state,{isAsignOpen:!this.state.isAsignOpen,count:this.state.count+1})),this.props.addToCode(a);break;case M:if(""!==t){var b=this.state.flowCode,y=(Object(F.a)(b),b[b.length-1]),v="out".concat(this.state.count,"=>inputoutput: ").concat(t),E="".concat(y.split("->")[0],"->out").concat(this.state.count),j="out".concat(this.state.count,"->").concat(y.split("->")[1]);b.pop(),b.push(v),b.push(E),b.push(j),a="".concat(a,"\n").concat(t,";")}this.setState(de({},this.state,{isIOOpen:!this.state.isIOOpen,count:this.state.count+1})),this.props.addToCode(a);break;case T:if(""!==t){var w=this.state.flowCode,C=(Object(F.a)(w),w[w.length-1]),k="in".concat(this.state.count,"=>inputoutput: ").concat(t),_="".concat(C.split("->")[0],"->in").concat(this.state.count),I="in".concat(this.state.count,"->").concat(C.split("->")[1]);w.pop(),w.push(k),w.push(_),w.push(I),a="".concat(a,"\n").concat(t,";")}this.setState(de({},this.state,{isIOOpen:!this.state.isIOOpen,count:this.state.count+1})),this.props.addToCode(a)}}},{key:"pushIf",value:function(){this.setState(de({},this.state,{isIfOpen:!0}))}},{key:"pushDeclare",value:function(){this.setState(de({},this.state,{isDeclareOpen:!0}))}},{key:"pushAsign",value:function(){this.setState(de({},this.state,{isAsignOpen:!0}))}},{key:"selectingArray",value:function(e){this.setState(de({},this.state,{isSelectingArray:e}))}},{key:"pushIO",value:function(){this.setState(de({},this.state,{isIOOpen:!0}))}},{key:"pushToCode",value:function(e){switch(e){case A:this.pushIf();break;case N:this.pushDeclare();break;case x:this.pushAsign();break;case D:break;case P:this.pushIO()}}},{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement($,{isOpen:this.state.isIfOpen,toggle:this.toggleModals,tutorial:he}),c.a.createElement(te,{isOpen:this.state.isDeclareOpen,toggle:this.toggleModals,tutorial:ge,selectingArray:this.selectingArray,isSelectingArray:this.state.isSelectingArray}),c.a.createElement(ae,{isOpen:this.state.isAsignOpen,toggle:this.toggleModals,tutorial:fe}),c.a.createElement(pe,{isOpen:this.state.isIOOpen,toggle:this.toggleModals,tutorial:Oe}),c.a.createElement(be,{handler:this.pushToCode,text:this.state.text,code:this.state.flowCode}))}}]),t}(c.a.Component);function Ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var je={moeCode:""},we=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ee(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},je),a.addToCode=a.addToCode.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"addToCode",value:function(e){this.setState({moeCode:e})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("main",null,c.a.createElement("div",{className:g.a.sidebar},c.a.createElement("div",{className:g.a.logo},c.a.createElement("img",{src:"vms.png",alt:"VMS logo"})),c.a.createElement("div",{className:g.a.tools},c.a.createElement(q,null))),c.a.createElement("div",{className:g.a.env},c.a.createElement("div",{className:g.a.actions},c.a.createElement(y,{code:this.state.moeCode})),c.a.createElement("div",{className:g.a.workspace},c.a.createElement(k.b,null,c.a.createElement(ve,{addToCode:this.addToCode,code:this.state.moeCode}))))),c.a.createElement("footer",null))}}]),t}(c.a.Component),Ce=a(54),ke=a(21);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement((function(){return c.a.createElement(Ce.a,null,c.a.createElement(ke.c,null,c.a.createElement(ke.a,{path:"/"},c.a.createElement(we,null))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.e70d60d4.chunk.js.map