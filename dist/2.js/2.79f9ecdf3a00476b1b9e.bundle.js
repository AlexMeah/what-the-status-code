webpackJsonp([2],{143:function(e,t,a){"use strict";var s=a(1)["default"],r=a(2),n=s(r),o=a(144),p=s(o),u=function(e){var t=e.text,a=e.answers;return n["default"].createElement("div",null,n["default"].createElement("h1",{className:"tac question"},t),n["default"].createElement("div",{className:"answers"},a.map(function(e){return n["default"].createElement(p["default"],{answer:e})})))};u.propTypes={text:r.PropTypes.string.isRequired,answers:r.PropTypes.array.isRequired},e.exports=u},144:function(e,t,a){"use strict";var s=a(1)["default"],r=a(2),n=s(r),o=a(145),p=s(o),u=function(e){var t=e.answer;return n["default"].createElement("div",{className:"btn btn--interaction answer",onClick:p["default"].handleAnswer.bind(null,t)},t.text)};u.propTypes={answer:r.PropTypes.object.isRequired},e.exports=u},145:function(e,t,a){"use strict";var s=a(146);e.exports={handleAnswer:function(e){return"REDIRECT"===e.type?s.pushState(null,e.path):"QUESTION"===e.type?s.pushState(null,e.path):void 0}}},147:function(e,t,a){"use strict";var s=a(1)["default"];Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),n=s(r),o=a(143),p=s(o),u={1:{text:"Do you want to redirect the user to a new location?",type:"QUESTION",answers:[{text:"Yes",type:"QUESTION",path:"/2XXor3XX/2"},{text:"No",type:"QUESTION",path:"/2XXor3XX/3"}]},2:{text:"Is it to the same resource at a new location?",type:"QUESTION",answers:[{text:"Yes",type:"QUESTION",path:"/2XXor3XX/4"},{text:"No, a different resource",type:"QUESTION",path:"/2XXor3XX/5"}]},3:{text:"Will the request be completed later?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/202"},{text:"No, it's done",type:"QUESTION",path:"/2XXor3XX/6"}]},4:{text:"Can the method change to GET?",type:"QUESTION",answers:[{text:"Yes",type:"QUESTION",path:"/2XXor3XX/7"},{text:"No",type:"QUESTION",path:"/2XXor3XX/8"}]},5:{text:"Was the location created for the request?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/201"},{text:"No, it's done",type:"REDIRECT",path:"/code/303"}]},6:{text:"Do you want the users view to remain unchanged?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/204"},{text:"No",type:"REDIRECT",path:"/code/200"}]},7:{text:"Is the new location temporary?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/302"},{text:"No",type:"REDIRECT",path:"/code/301"}]},8:{text:"Is the new location temporary?",type:"QUESTION",answers:[{text:"Yes",type:"REDIRECT",path:"/code/307"},{text:"No",type:"REDIRECT",path:"/code/308"}]}},i=n["default"].createClass({displayName:"TWOXXorTHREEXX",propTypes:{params:r.PropTypes.object.isRequired},getInitialState:function(){return{question:this.props.params.question||1}},componentWillReceiveProps:function(e){this.setState({question:e.params.question||1})},render:function(){var e=u[this.state.question];return n["default"].createElement("section",{className:"container"},n["default"].createElement(p["default"],e))}});t["default"]=i,e.exports=t["default"]}});