(this["webpackJsonparticle-analyzer-frontonly"]=this["webpackJsonparticle-analyzer-frontonly"]||[]).push([[0],{47:function(e,t,a){e.exports=a(68)},63:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),u=a(8),i=a(9),o=a(11),s=a(10),h=a(12),m=a(43),b=a(16),p=a(28),d=a(27),f=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{bg:"light",expand:"lg"},r.a.createElement(p.a.Brand,{href:"/"},"Article Annotator"),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(d.a.Link,{href:"/"},"Home"),r.a.createElement(d.a.Link,{href:"/about"},"About"))))}}]),t}(n.Component),j=a(20),y=a(24),O=a(33),E=a(46),v=a(32),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){fetch("http://article-analyzer-jiyu2.cloudapps.unc.edu/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({url:this.state.value})}).then((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(y.a,null,r.a.createElement(O.a,{className:"mb-3"},r.a.createElement(E.a,{placeholder:"lorem-ipsum.demo",value:this.state.value,onChange:this.handleChange,"aria-label":"Website URL","aria-describedby":"submitURL"}),r.a.createElement(O.a.Append,null,r.a.createElement(v.a,{variant:"secondary",onClick:function(t){return e.handleSubmit()}},"Annotate"))))}}]),t}(n.Component),k=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.urls.map((function(e){return r.a.createElement("li",{key:e._id},e.url)}));return r.a.createElement(y.a,null,r.a.createElement("ul",null,e))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={urls:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://article-analyzer-jiyu2.cloudapps.unc.edu/0").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({urls:t})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"This is a stand-in for actual GET functionality."),r.a.createElement(k,{urls:this.state.urls}))}}]),t}(n.Component),A=(a(63),function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/about"},r.a.createElement(C,null)),r.a.createElement(b.a,{path:"/"},r.a.createElement(g,null)))))}}]),t}(n.Component));a(67);c.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.7550ee9c.chunk.js.map