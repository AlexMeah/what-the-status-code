webpackJsonp([2],{143:function(e,t,n){"use strict";var r=n(144)["default"],a=n(1)["default"],o=n(2),s=a(o),i=n(160),p=a(i);n(163);var c=function(e){var t=e.text,n=e.answers;return s["default"].createElement("div",null,s["default"].createElement("h1",{className:"tac question"},t),s["default"].createElement("div",{className:"answers"},n.map(function(e,t){return s["default"].createElement(p["default"],r({key:t},e))})))};c.propTypes={text:o.PropTypes.string.isRequired,answers:o.PropTypes.array.isRequired},e.exports=c},144:function(e,t,n){"use strict";var r=n(145)["default"];t["default"]=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.__esModule=!0},145:function(e,t,n){e.exports={"default":n(146),__esModule:!0}},146:function(e,t,n){n(147),e.exports=n(150).Object.assign},147:function(e,t,n){var r=n(148);r(r.S+r.F,"Object",{assign:n(153)})},148:function(e,t,n){var r=n(149),a=n(150),o=n(151),s="prototype",i=function(e,t,n){var p,c,u,l=e&i.F,f=e&i.G,d=e&i.S,y=e&i.P,h=e&i.B,E=e&i.W,x=f?a:a[t]||(a[t]={}),m=f?r:d?r[t]:(r[t]||{})[s];f&&(n=t);for(p in n)c=!l&&m&&p in m,c&&p in x||(u=c?m[p]:n[p],x[p]=f&&"function"!=typeof m[p]?n[p]:h&&c?o(u,r):E&&m[p]==u?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[s]=e[s],t}(u):y&&"function"==typeof u?o(Function.call,u):u,y&&((x[s]||(x[s]={}))[p]=u))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,e.exports=i},149:62,150:63,151:[177,152],152:71,153:function(e,t,n){var r=n(154),a=n(155),o=n(157);e.exports=n(159)(function(){var e=Object.assign,t={},n={},r=Symbol(),a="abcdefghijklmnopqrst";return t[r]=7,a.split("").forEach(function(e){n[e]=e}),7!=e({},t)[r]||Object.keys(e({},n)).join("")!=a})?function(e,t){for(var n=a(e),s=arguments,i=s.length,p=1,c=r.getKeys,u=r.getSymbols,l=r.isEnum;i>p;)for(var f,d=o(s[p++]),y=u?c(d).concat(u(d)):c(d),h=y.length,E=0;h>E;)l.call(d,f=y[E++])&&(n[f]=d[f]);return n}:Object.assign},154:60,155:[178,156],156:76,157:[179,158],158:94,159:67,160:function(e,t,n){"use strict";var r=n(1)["default"],a=n(2),o=r(a),s=n(4);n(161);var i=function(e){var t=e.path,n=e.text;return o["default"].createElement(s.Link,{className:"btn btn--interaction answer",to:t},n)};i.propTypes={path:a.PropTypes.string.isRequired,text:a.PropTypes.string.isRequired},e.exports=i},161:[173,162],162:function(e,t,n){t=e.exports=n(140)(),t.push([e.id,".answer{text-align:center;margin:1rem;font-size:2rem}",""])},163:[173,164],164:function(e,t,n){t=e.exports=n(140)(),t.push([e.id,".question{font-size:3rem;line-height:1.5}.answers{display:flex;align-items:center;justify-content:center;flex-direction:row;flex-wrap:wrap;-webkit-align-content:flex-end;align-content:space-between}",""])},165:function(e,t,n){"use strict";var r=n(1)["default"];Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),o=r(a),s=n(143),i=r(s),p={1:{text:"Do you want to redirect the user to a new location?",type:"QUESTION",answers:[{text:"Yes",type:"QUESTION",path:"/2XXor3XX/2"},{text:"No",type:"QUESTION",path:"/2XXor3XX/3"}]},2:{text:"Is it to the same resource at a new location?",type:"QUESTION",answers:[{text:"Yes",type:"QUESTION",path:"/2XXor3XX/4"},{text:"No, a different resource",type:"QUESTION",path:"/2XXor3XX/5"}]},3:{text:"Will the request be completed later?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/202"},{text:"No, it's done",type:"QUESTION",path:"/2XXor3XX/6"}]},4:{text:"Can the method change to GET?",type:"QUESTION",answers:[{text:"Yes",type:"QUESTION",path:"/2XXor3XX/7"},{text:"No",type:"QUESTION",path:"/2XXor3XX/8"}]},5:{text:"Was the location created for the request?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/201"},{text:"No, it's done",type:"REDIRECT",path:"/code/303"}]},6:{text:"Do you want the users view to remain unchanged?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/204"},{text:"No",type:"REDIRECT",path:"/code/200"}]},7:{text:"Is the new location temporary?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/302"},{text:"No",type:"REDIRECT",path:"/code/301"}]},8:{text:"Is the new location temporary?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/307"},{text:"No",type:"REDIRECT",path:"/code/308"}]}},c=o["default"].createClass({displayName:"TWOXXorTHREEXX",propTypes:{params:a.PropTypes.object.isRequired},getInitialState:function(){return{question:this.props.params.question||1}},componentWillReceiveProps:function(e){this.setState({question:e.params.question||1})},render:function(){var e=p[this.state.question];return o["default"].createElement("section",{className:"container"},o["default"].createElement(i["default"],e))}});t["default"]=c,e.exports=t["default"]},173:function(e,t,n,r){var a=n(r);"string"==typeof a&&(a=[[e.id,a,""]]);n(141)(a,{});a.locals&&(e.exports=a.locals)}});