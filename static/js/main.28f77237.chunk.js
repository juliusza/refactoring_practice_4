(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},19:function(e,t,n){},22:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(5),c=n.n(r),s=(n(19),n(3)),i=n.n(s),u=n(6),d=n(7),l=n(8),h=n(11),p=n(9),f=n(12),m=(n(22),n(23),n(10)),w=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={data:[]},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({data:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement(m.a,{data:this.state.data,columns:[{Header:"Id",accessor:"id"},{Header:"Album Id",accessor:"albumId"},{Header:"Title",accessor:"title"},{Header:"URL",accessor:"url"}]})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.28f77237.chunk.js.map