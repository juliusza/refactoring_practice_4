(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},22:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(10),r=a.n(o),c=(a(19),a(8)),i=a.n(c),l=a(11),d=a(3),u=a(4),h=a(6),p=a(5),m=a(7),f=(a(22),a(23),a(12)),w=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{"data-testid":"infobar",className:"infobar"},s.a.createElement("p",null,this.props.text),this.props.imageUrl&&s.a.createElement("img",{alt:"album art",src:this.props.imageUrl}))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={data:[],selectedRow:void 0,selectedCol:void 0,columns:[{Header:"Id",accessor:"id"},{Header:"Album Id",accessor:"albumId"},{Header:"Title",accessor:"title"},{Header:"URL",accessor:"url"}]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({data:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"isCellSelected",value:function(e,t){return this.state.selectedRow&&this.state.selectedCol&&e.index===this.state.selectedRow.index&&t.id===this.state.selectedCol.id}},{key:"render",value:function(){var e,t,a=this;if(this.state.selectedRow){var n=this.state.selectedCol.id;e=this.state.selectedRow.row[n],t="url"===n?e:void 0}else e="please select a table cell";return s.a.createElement("div",null,s.a.createElement(f.a,{data:this.state.data,columns:this.state.columns,pageSizeOptions:[10,50,5e3],defaultPageSize:10,getTdProps:function(e,t,n){return t?{onClick:function(e){a.setState({selectedRow:t,selectedCol:n})},style:{background:a.isCellSelected(t,n)?"grey":"white"}}:{}}}),s.a.createElement(w,{text:e,imageUrl:t}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.9265841b.chunk.js.map