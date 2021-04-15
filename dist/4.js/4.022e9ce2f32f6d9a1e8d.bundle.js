webpackJsonp([4],{159:function(e,t,a){"use strict";var s=a(160).default,n=a(1).default,r=a(2),o=n(r),p=a(176),i=n(p);a(179);var c=function(e){var t=e.text,a=e.answers;return o.default.createElement("div",null,o.default.createElement("h1",{className:"tac question"},t),o.default.createElement("div",{className:"answers"},a.map(function(e,t){return o.default.createElement(i.default,s({key:t},e))})))};c.propTypes={text:r.PropTypes.string.isRequired,answers:r.PropTypes.array.isRequired},e.exports=c},160:function(e,t,a){"use strict";var s=a(161).default;t.default=s||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},t.__esModule=!0},161:function(e,t,a){e.exports={default:a(162),__esModule:!0}},162:function(e,t,a){a(163),e.exports=a(166).Object.assign},163:function(e,t,a){var s=a(164);s(s.S+s.F,"Object",{assign:a(169)})},164:function(e,t,a){var s=a(165),n=a(166),r=a(167),o="prototype",p=function(e,t,a){var i,c,u,y=e&p.F,h=e&p.G,E=e&p.S,l=e&p.P,d=e&p.B,f=e&p.W,x=h?n:n[t]||(n[t]={}),T=h?s:E?s[t]:(s[t]||{})[o];h&&(a=t);for(i in a)c=!y&&T&&i in T,c&&i in x||(u=c?T[i]:a[i],x[i]=h&&"function"!=typeof T[i]?a[i]:d&&c?r(u,s):f&&T[i]==u?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[o]=e[o],t}(u):l&&"function"==typeof u?r(Function.call,u):u,l&&((x[o]||(x[o]={}))[i]=u))};p.F=1,p.G=2,p.S=4,p.P=8,p.B=16,p.W=32,e.exports=p},165:79,166:80,167:[190,168],168:88,169:function(e,t,a){var s=a(170),n=a(171),r=a(173);e.exports=a(175)(function(){var e=Object.assign,t={},a={},s=Symbol(),n="abcdefghijklmnopqrst";return t[s]=7,n.split("").forEach(function(e){a[e]=e}),7!=e({},t)[s]||Object.keys(e({},a)).join("")!=n})?function(e,t){for(var a=n(e),o=arguments,p=o.length,i=1,c=s.getKeys,u=s.getSymbols,y=s.isEnum;p>i;)for(var h,E=r(o[i++]),l=u?c(E).concat(u(E)):c(E),d=l.length,f=0;d>f;)y.call(E,h=l[f++])&&(a[h]=E[h]);return a}:Object.assign},170:77,171:[191,172],172:93,173:[192,174],174:111,175:84,176:function(e,t,a){"use strict";var s=a(1).default,n=a(2),r=s(n),o=a(4);a(177);var p=function(e){var t=e.path,a=e.text;return r.default.createElement(o.Link,{className:"btn btn--interaction answer",to:t},a)};p.propTypes={path:n.PropTypes.string.isRequired,text:n.PropTypes.string.isRequired},e.exports=p},177:155,179:155,184:function(e,t,a){"use strict";var s=a(1).default;Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=s(n),o=a(159),p=s(o),i={1:{text:"Is the user being throttled?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/429"},{text:"No",type:"QUESTION",path:"/4XX/2"}]},2:{text:"Does the user need to authenticate?",type:"QUESTION",answers:[{text:"Yes",type:"QUESTION",path:"/4XX/3"},{text:"No",type:"QUESTION",path:"/4XX/4"}]},3:{text:"Are you using HTTP auth?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/401"},{text:"No",type:"QUESTION",path:"/4XX/5"}]},4:{text:"Does the user have access to the resource?",type:"QUESTION",answers:[{text:"Yes",type:"QUESTION",path:"/4XX/6"},{text:"No",type:"QUESTION",path:"/4XX/5"}]},5:{text:"Is the resource a secret?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/404"},{text:"No",type:"REDIRECT",path:"/code/403"}]},6:{text:"Does the resource even exist?",type:"QUESTION",answers:[{text:"Yes",type:"QUESTION",path:"/4XX/8"},{text:"No",type:"QUESTION",path:"/4XX/7"}]},7:{text:"Are you rage-quitting the internet?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/410"},{text:"No",type:"REDIRECT",path:"/code/404"}]},8:{text:"Is the HTTP method handled by the resource?",type:"QUESTION",answers:[{text:"Yes",type:"QUESTION",path:"/4XX/9"},{text:"No",type:"REDIRECT",path:"/code/405"}]},9:{text:"Problem with the headers?",type:"QUESTION",answers:[{text:"Yes",type:"QUESTION",path:"/4XX/10"},{text:"No",type:"QUESTION",path:"/4XX/11"}]},10:{text:"Which Header?",type:"QUESTION",answers:[{text:"Accept",type:"REDIRECT",path:"/code/406"},{text:"Content-Length",type:"REDIRECT",path:"/code/411"},{text:"If-*",type:"REDIRECT",path:"/code/412"},{text:"Content-Type",type:"REDIRECT",path:"/code/415"},{text:"Expect",type:"REDIRECT",path:"/code/417"},{text:"Other",type:"QUESTION",path:"/4XX/11"}]},11:{text:"Request incompatible with a previous request?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/409"},{text:"No",type:"QUESTION",path:"/4XX/12"}]},12:{text:"Is the body well-formed and yet still invalid?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/400"},{text:"No",type:"REDIRECT",path:"/code/422"}]}},c=r.default.createClass({displayName:"FOURXX",propTypes:{params:n.PropTypes.object.isRequired},getInitialState:function(){return{question:this.props.params.question||1}},componentWillReceiveProps:function(e){this.setState({question:e.params.question||1})},render:function(){var e=i[this.state.question];return r.default.createElement("section",{className:"container"},r.default.createElement(p.default,e))}});t.default=c,e.exports=t.default}});