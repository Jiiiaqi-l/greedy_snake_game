(this.webpackJsonpgreedy_snake_game=this.webpackJsonpgreedy_snake_game||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=n(4),l=n(2),s=(n(12),function(e){var t=e.redPoint[0]===e.row&&e.redPoint[1]===e.col,n=1===e.sneakPoint.filter((function(t){return t[0]===e.row&&t[1]===e.col})).length;return r.a.createElement("div",{className:"box ".concat(t?"red":n?"green":"")})});function u(){var e=Object(a.useState)([21,27]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("right"),u=Object(l.a)(o,2),f=u[0],d=u[1],w=Object(a.useState)([[15,15],[15,14],[15,13],[15,12]]),b=Object(l.a)(w,2),m=b[0],h=b[1],k=Object(a.useCallback)((function(e){switch(e.keyCode){case 37:d("right"!==f?"left":"right");break;case 38:d("down"!==f?"up":"down");break;case 39:d("left"!==f?"right":"left");break;case 40:d("up"!==f?"down":"up")}}),[f]);return Object(a.useEffect)((function(){return window.addEventListener("keydown",k),function(){window.removeEventListener("keydown",k)}}),[k]),Object(a.useEffect)((function(){var e=window.setTimeout((function(){var e=m[0].slice(),t=Object(l.a)(e,2),a=t[0],r=t[1];switch(f){case"left":r=0===r?29:r-1;break;case"up":a=0===a?29:a-1;break;case"right":r=29===r?0:r+1;break;case"down":a=29===a?0:a+1}if(0!==m.filter((function(e){return e[0]===a&&e[1]===r})).length)return alert("Oh no!!! Want to try again?"),h([[15,15],[15,14],[15,13],[15,12]]),d("right"),void c([21,27]);if(a===n[0]&&r===n[1])c([Math.floor(29*Math.random()),Math.floor(29*Math.random())]),h([[a,r]].concat(Object(i.a)(m)));else{var o=m.slice();o.pop(),h([[a,r]].concat(Object(i.a)(o)))}}),70);return function(){window.clearInterval(e)}}),[m,f,n]),r.a.createElement("div",{className:"container"},new Array(30).fill(new Array(30).fill(1)).map((function(e,t){return r.a.createElement("div",{className:"flex_row",key:"row"+t},e.map((function(e,a){return r.a.createElement(s,{col:a,row:t,sneakPoint:m,redPoint:n,key:a+t})})))})))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.3ae6775d.chunk.js.map