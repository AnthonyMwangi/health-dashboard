(this["webpackJsonphealth-dashboard"]=this["webpackJsonphealth-dashboard"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/confetti.c7de97c7.svg"},,,,,,,,function(e,a,t){e.exports=t(29)},,function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),r=(t(16),t(5)),l=t.n(r);t(20);function i(){return n.a.createElement("div",{className:"user-metadata"},n.a.createElement("div",{className:"avatar"},n.a.createElement("div",{className:"user-image image"}),n.a.createElement("div",{className:"button"})),n.a.createElement("div",{className:"fit-points"},n.a.createElement("div",{className:"count"},"81"),n.a.createElement("div",{className:"label"},"fit",n.a.createElement("br",null),"points")))}t(21);var s=t(6),m=t.n(s);function o(){var e=["Dr. Melendez","Dr. Shawn","Dr. Marcus"];return n.a.createElement("div",{className:"next-checkup"},n.a.createElement("div",{className:"title"},"Next check-up"),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"doctors noselect"},e.map((function(a){return n.a.createElement("div",{className:"doctor image",key:a,title:a,index:d(e,a)})}))),n.a.createElement("div",{className:"caption"},n.a.createElement("span",null,"You need to visit ",n.a.createElement("br",null)),n.a.createElement("b",null,"".concat(e.length," doctors")),n.a.createElement("span",null," next month"))),n.a.createElement("img",{src:m.a,alt:"confetti",className:"confetti"}))}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return a+1/e.length};t(22),t(23);function u(){return n.a.createElement("div",{className:"toggle-switch noselect"},n.a.createElement("input",{type:"checkbox",id:"switch"}),n.a.createElement("label",{className:"noselect",htmlFor:"switch"}))}t(24);function v(e){var a=e.theme,t=void 0===a?"dark":a,c=e.caption,r=void 0===c?"chart caption":c,l=e.dataset,i=void 0===l?[]:l,s=e.goalValue,m=void 0===s?0:s,o=e.goalMetric,d=void 0===o?"metric/day":o,u=e.className,v=void 0===u?"":u;return n.a.createElement("div",{className:"bar-chart ".concat(v)},n.a.createElement("div",{className:"chart-wrapper"},n.a.createElement("div",{className:"chart"},i.map((function(e,a){return n.a.createElement("div",{key:a,title:e,style:{gridRowStart:100-e},className:"".concat(t," bar-").concat(a+1)})}))),n.a.createElement("div",{className:"caption ".concat(t)},r)),n.a.createElement("div",{className:"goal ".concat(t)},n.a.createElement("div",{className:"value"},m),n.a.createElement("div",{className:"metric"},d)))}var E=t(7),N=t(8),h=t(12),p=t(13);t(25);function f(e){var a=e.progress,t=void 0===a?0:a;return n.a.createElement("div",{id:"progress-bar"},n.a.createElement(g,{radius:90,stroke:12,progress:t}),n.a.createElement("div",{className:"progress-label"},n.a.createElement("div",{className:"count"},"".concat(t,"%")),n.a.createElement("div",{className:"period"},"today")))}var g=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var c;Object(E.a)(this,t);var n=(c=a.call(this,e)).props,r=n.radius,l=n.stroke;return c.normalizedRadius=r-2*l,c.circumference=2*c.normalizedRadius*Math.PI,c}return Object(N.a)(t,[{key:"render",value:function(){var e=this.props,a=e.radius,t=e.stroke,c=e.progress,r=this.circumference-1*this.circumference,l=this.circumference-c/100*this.circumference;return n.a.createElement("svg",{height:2*a,width:2*a},n.a.createElement("circle",{stroke:"white",strokeOpacity:"0.2",fill:"transparent",strokeWidth:t,strokeDasharray:this.circumference+" "+this.circumference,style:{Dashoffset:r},r:this.normalizedRadius,cx:a,cy:a}),n.a.createElement("circle",{stroke:"white",fill:"transparent",strokeWidth:t,strokeLinecap:"round",strokeDasharray:this.circumference+" "+this.circumference,style:{strokeDashoffset:l},r:this.normalizedRadius,cx:a,cy:a}))}}]),t}(n.a.Component);function b(){return n.a.createElement("div",{className:"card dark coaching"},n.a.createElement("div",{className:"card-heading"},n.a.createElement("div",{className:"avatar image",title:"Coach Carter"}),n.a.createElement(u,null)),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"card-title"},"Coaching goal"),n.a.createElement("div",{className:"card-caption"},"Walk atleast 15 min in a row everyday at a brisk pace")),n.a.createElement("div",{className:"card-goal"},n.a.createElement("div",{className:"value"},"15"),n.a.createElement("div",{className:"metric"},"minute",n.a.createElement("br",null),"walk")))}t(26);var y=t(9),k=t(2),w=t(10);function O(){return n.a.createElement("div",{className:"card dark vitals"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"card-title"},"You're doing great"),n.a.createElement("div",{className:"card-caption"},"Main life metrics are normal")),n.a.createElement("div",{className:"vitals-wrapper"},n.a.createElement(S,{Icon:k.c,value:"115/68",label:"BLOOD PRESSURE"}),n.a.createElement(S,{Icon:y.a,value:"74",label:"PULSE"}),n.a.createElement(S,{Icon:w.a,value:"36.6",label:"TEMPERATURE"})))}var S=function(e){var a=e.Icon,t=e.value,c=void 0===t?"":t,r=e.label,l=void 0===r?"":r;return n.a.createElement("div",{className:"vital-reading"},n.a.createElement("div",{className:"icon"},n.a.createElement(a,null)),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"vital-value"},c),n.a.createElement("div",{className:"vital-label"},l)))},M=(t(27),t(11)),D=t(3);function R(e){var a=e.pages,t=void 0===a?0:a,c=e.statistics,r=void 0===c?[]:c,l=e.date,i=void 0===l?"Set Date":l,s=e.title,m=void 0===s?"Set Title":s,o=e.icon,d=void 0===o?"GrStatusGoodSmall":o,u=e.institution,v=void 0===u?"Medical Lab":u;0===r.length&&r.push({count:0,label:"NO PATHOLOGY"});var E=M[d];return n.a.createElement("div",{className:"medical-record noselect"},n.a.createElement("div",{className:"document"},n.a.createElement(E,{className:"icon"}),n.a.createElement("div",{className:"institution"},v),n.a.createElement("div",{className:"page-count"},"".concat(t," PAGES"))),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"title"},m),n.a.createElement("div",{className:"date"},i),n.a.createElement("div",{className:"stats"},r.map((function(e,a){return n.a.createElement(I,Object.assign({key:a},e))})))))}var I=function(e){var a=e.count,t=void 0===a?0:a,c=e.label,r=e.trajectory,l=void 0===r?"up":r,i="up"===l?D.b:D.a;return n.a.createElement("div",{className:"statistic ".concat(l)},n.a.createElement("div",{className:"count"},n.a.createElement("div",{className:"value"},t),n.a.createElement(i,{className:"icon ".concat(l)})),n.a.createElement("div",{className:"label"},c))};function x(){return n.a.createElement("section",{className:"app-body"},n.a.createElement("div",{className:"body-wrapper"},n.a.createElement("div",{className:"section-1"},n.a.createElement(i,null),n.a.createElement(o,null)),n.a.createElement("div",{className:"section-2"},n.a.createElement("div",{className:"card dark water-balance"},n.a.createElement(f,{progress:65}),n.a.createElement(v,{theme:"light",goalValue:2.5,className:"full",goalMetric:"litres/day",caption:"Water Balance",dataset:[65,75,90,70,60,63,45,34,50,70]})),n.a.createElement("div",{className:"card md light activity"},n.a.createElement(v,{theme:"dark",goalValue:31,caption:"Activity",goalMetric:"min/day",dataset:[65,75,90,70,60,63,45]})),n.a.createElement("div",{className:"card md light sleep"},n.a.createElement(v,{theme:"dark",caption:"Sleep",goalValue:7.3,goalMetric:"hours/day",dataset:[65,75,90,70,60,63,45]})),n.a.createElement(b,null),n.a.createElement(O,null)),n.a.createElement("div",{className:"section-3"},n.a.createElement("div",{className:"section-title"},"MEDICAL RECORDS"),n.a.createElement("div",{className:"section-wrapper"},n.a.createElement(R,{pages:5,icon:"GrFreebsd",date:"June 15",institution:"Synevo Laboratory",title:"Blood Biochemistry",statistics:[{count:3,label:"IMPROVED",trajectory:"up"},{count:1,label:"WORSENED",trajectory:"down"}]}),n.a.createElement(R,{pages:3,icon:"GrHorton",date:"May 12",institution:"Omnio Clinic",title:"Abdomen X-ray"}),n.a.createElement(R,{pages:10,icon:"GrFedora",date:"January 10",institution:"Atkinson Clinic",title:"Physical Exam",statistics:[{count:2,label:"NOTIFICATIONS",trajectory:"up"}]})))))}t(28);function j(){return n.a.createElement("section",{className:"side-bar"},n.a.createElement("div",{className:"sidebar-wrapper"},n.a.createElement("div",{className:"image logo"}),n.a.createElement("div",{className:"sidebar-menu noselect"},n.a.createElement("div",{className:"menu-item active"},n.a.createElement(k.b,{className:"icon"})),n.a.createElement("div",{className:"menu-item"},n.a.createElement(k.d,{className:"icon"})),n.a.createElement("div",{className:"menu-item badge"},n.a.createElement(k.a,{className:"icon"})),n.a.createElement("div",{className:"menu-item"},n.a.createElement(k.e,{className:"icon"}))),n.a.createElement("div",{className:"image avatar"})))}var A=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(j,null),n.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.b146e019.chunk.js.map