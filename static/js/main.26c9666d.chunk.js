(this.webpackJsonptienda=this.webpackJsonptienda||[]).push([[0],{27:function(e,s,c){},28:function(e,s,c){},29:function(e,s,c){},36:function(e,s,c){},37:function(e,s,c){},38:function(e,s,c){},39:function(e,s,c){},40:function(e,s,c){},41:function(e,s,c){"use strict";c.r(s);var a=c(1),n=c.n(a),t=c(20),r=c.n(t),l=(c(27),c(4)),j=c(5),i=c(7),o=c(6),d=(c(28),c.p+"static/media/logo.6ce24c58.svg"),b=c(14),h=(c(29),c(0)),p=function(e){Object(i.a)(c,e);var s=Object(o.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("div",{id:"brand",children:Object(h.jsxs)(b.b,{to:"/",children:[Object(h.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(h.jsx)("h1",{children:"BoxTree"})]})}),Object(h.jsx)("div",{id:"sections",children:O.map((function(e){return Object(h.jsx)(b.b,{to:e.href,children:e.name},e.name)}))})]})}}]),c}(n.a.Component),O=[{name:"Productos",href:"/"},{name:"Descuentos",href:"/"},{name:"Informaci\xf3n del proyecto",href:"/info-proyecto"},{name:"M\xe1s proyectos",href:"/proyectos"}],x=p,m=c(22),u=c(11),N=(c(36),function(e){Object(i.a)(c,e);var s=Object(o.a)(c);function c(e){var a;return Object(l.a)(this,c),(a=s.call(this,e)).state={checked:!1,value:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleCheck=a.handleCheck.bind(Object(u.a)(a)),a}return Object(j.a)(c,[{key:"handleChange",value:function(e){var s=e.target.value;this.setState({value:s}),this.props.handleChange("filterText",s)}},{key:"handleCheck",value:function(){this.setState({checked:!this.state.checked}),this.props.handleChange("stockOnly",!this.state.checked)}},{key:"render",value:function(){return Object(h.jsx)("div",{id:"filtrador",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"text",placeholder:"Buscar...",onChange:this.handleChange}),Object(h.jsxs)("label",{className:"switch",children:[Object(h.jsx)("input",{type:"checkbox",onChange:this.handleCheck}),Object(h.jsx)("span",{className:"slider round"})]}),Object(h.jsx)("label",{className:"message",children:"Mostrar unicamente los productos con stock"})]})})}}]),c}(n.a.Component)),g=(n.a.Component,N),f=(c(37),function(e){Object(i.a)(c,e);var s=Object(o.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){var e=this.props.filterText,s=this.props.stockOnly,c=[],a=null;return v.forEach((function(n){return-1===n.name.toUpperCase().indexOf(e.toUpperCase())||s&&!n.stocked?null:(n.category!==a&&c.push(Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:"2",className:"category",children:n.category})},n.category)),c.push(Object(h.jsx)(y,{product:n},n.name)),void(a=n.category))})),Object(h.jsxs)("table",{id:"productos",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Nombre"}),Object(h.jsx)("th",{children:"Precio"})]})}),Object(h.jsx)("tbody",{children:c})]})}}]),c}(n.a.Component)),y=function(e){Object(i.a)(c,e);var s=Object(o.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){var e=this.props.product,s=!0===e.stocked?e.name:Object(h.jsx)("span",{className:"no-stock",children:e.name});return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:s}),Object(h.jsx)("td",{children:e.price})]})}}]),c}(n.a.Component),v=[{category:"Deportes",price:"$49.99",stocked:!0,name:"Pelota de football"},{category:"Deportes",price:"$29.99",stocked:!1,name:"Pelota de basketball"},{category:"Deportes",price:"$4.99",stocked:!0,name:"Gorra de los Lakers"},{category:"Deportes",price:"$14.99",stocked:!0,name:"Short de PSG"},{category:"Deportes",price:"$19.99",stocked:!1,name:"Camiseta del Real Madrid"},{category:"Electronica",price:"$99.99",stocked:!0,name:"iPod Touch 6"},{category:"Electronica",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronica",price:"$199.99",stocked:!0,name:"Nexus 7"},{category:"Electronica",price:"$99.99",stocked:!0,name:"Heladera Phillips"},{category:"Electronica",price:"$499.99",stocked:!1,name:"Play Station 5"}],k=f,w=(c(38),function(e){Object(i.a)(c,e);var s=Object(o.a)(c);function c(e){var a;return Object(l.a)(this,c),(a=s.call(this,e)).state={filterText:"",stockOnly:!1},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(j.a)(c,[{key:"handleChange",value:function(e,s){this.setState(Object(m.a)({},e,s))}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{id:"filtrador-tabla",children:[Object(h.jsx)(g,{filterText:this.state.filterText,stockOnly:this.state.stockOnly,handleChange:this.handleChange}),Object(h.jsx)(k,{filterText:this.state.filterText,stockOnly:this.state.stockOnly})]})})}}]),c}(n.a.Component)),C=(c(39),function(e){Object(i.a)(c,e);var s=Object(o.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(j.a)(c,[{key:"componentDidMount",value:function(){document.title="BoxTree - Informaci\xf3n"}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{id:"info-proyecto",children:[Object(h.jsxs)("div",{className:"introduccion",children:[Object(h.jsx)("h1",{className:"titulo",children:"Informaci\xf3n sobre el proyecto"}),Object(h.jsx)("p",{className:"intro",children:"Esta p\xe1gina es un resumen de la informaci\xf3n del proyecto, usando un poco de la documentaci\xf3n de React y algunos recursos relacionados."}),Object(h.jsx)("hr",{}),Object(h.jsx)("ul",{children:q.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.href,children:e.name})},e.name)}))})]}),Object(h.jsxs)("div",{id:"que-es-react",children:[Object(h.jsx)("h2",{children:"Qu\xe9 es React?"}),Object(h.jsxs)("p",{children:["React es una biblioteca de JavaScript creada por Facebook para construir interfaces de usuario. Es tambi\xe9n una biblioteca que estuve aprendiendo por mi cuenta, leyendo ",Object(h.jsx)("a",{href:"https://es.reactjs.org",children:"la documentaci\xf3n"}),", viendo videos, y practicando un poco los ejemplos y ejercicios que dejan en la mayor\xeda de sus ",Object(h.jsx)("a",{href:"https://es.reactjs.org/docs/hello-world.html",children:"conceptos principales"}),"."]})]}),Object(h.jsxs)("div",{id:"bases",children:[Object(h.jsx)("h2",{children:"Bases del proyecto"}),Object(h.jsxs)("p",{children:["En el \xednterin de la creaci\xf3n del proyecto demuestro todos los conocimientos que aprend\xed, tanto como la creaci\xf3n de componentes reutilizables, el manejo de estados, las props de los componentes, funciones de componentes, levantar estados desde un componente hijo al componente padre, e incluso la utilizaci\xf3n de un m\xf3dulo para crear rutas ",Object(h.jsxs)("i",{children:["(fijate que si vas cambiando por las distintas secciones de la barra superior no se recarga la p\xe1gina, esa es una de las finalidades que tiene React, que la p\xe1gina se base en una aplicaci\xf3n de una sola p\xe1gina o ",Object(h.jsx)("a",{href:"https://es.wikipedia.org/wiki/Single-page_application",children:"SPA"}),", -Single Page Application para los amigos-)"]}),"  ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Para ver el c\xf3digo del proyecto, podes entrar al ",Object(h.jsx)("a",{href:"https://github.com/00frank/boxtree-reactjs",children:"repositorio de github"})]})]}),Object(h.jsxs)("div",{id:"rutas",children:[Object(h.jsx)("h2",{children:"Sistema de rutas"}),Object(h.jsxs)("p",{children:["Para dise\xf1ar el sistema de rutas use el m\xf3dulo ",Object(h.jsx)("a",{className:"red-link",href:"https://reactrouter.com/web/guides/quick-start",children:"react-router-dom"}),".",Object(h.jsx)("br",{}),"Si ya se tiene un proyecto con React lo que hay que hacer es instalar el m\xf3dulo con npm:"]}),Object(h.jsx)("pre",{children:Object(h.jsxs)("code",{className:"install",children:[Object(h.jsx)("span",{className:"orange",children:"npm"})," i react-router-dom"]})}),Object(h.jsxs)("p",{children:['Una vez que se tiene instalado el paquete hay que redise\xf1ar la clase principal para que se pueda construir una especie de "diccionario" que contenga los links a las distintas secciones que se puedan mostrar, en mi caso el componente principal (',"<App />",") quedo as\xed:"]}),Object(h.jsx)("pre",{children:Object(h.jsx)(P,{})}),Object(h.jsxs)("p",{children:["Mientras que el componente ","<Header />",", (que contiene los links en forma de botones a las distintas secciones) queda de la siguiente forma:"]}),Object(h.jsx)("pre",{children:Object(h.jsx)(R,{})}),Object(h.jsxs)("p",{children:["De nuevo, puede ver el c\xf3digo del proyecto en el ",Object(h.jsx)("a",{href:"https://github.com/00frank/boxtree-reactjs",children:"repositorio de github"})]})]}),Object(h.jsxs)("div",{id:"deploy",children:[Object(h.jsx)("h2",{children:"Deploy/lanzamiento"}),Object(h.jsxs)("p",{children:["Para facilitar el deploy, o el subir el proyecto a algun lugar para que sea de vista publica, tambien instale un m\xf3dulo llamado ",Object(h.jsx)("a",{className:"red-link",href:"https://www.npmjs.com/package/gh-pages",children:"gh-pages"})]}),Object(h.jsx)("pre",{children:Object(h.jsxs)("code",{className:"install",children:[Object(h.jsx)("span",{className:"orange",children:"npm"})," i gh-pages"]})}),Object(h.jsxs)("p",{children:["Facilita mucho el proceso ya que basta con hacer unos cambios en el archivo ",Object(h.jsx)("a",{href:"https://github.com/00frank/boxtree-reactjs/blob/master/package.json",children:Object(h.jsx)("i",{children:"package.json"})})," y tener un repositorio en github para que este listo el deploy del proyecto."]})]})]})})}}]),c}(n.a.Component)),q=[{name:"Qu\xe9 es React?",href:"#que-es-react"},{name:"Bases",href:"#bases"},{name:"Rutas",href:"#rutas"},{name:"Deploy",href:"#deploy"}];function P(){return Object(h.jsx)("code",{children:Object(h.jsxs)("div",{className:"codigo",children:[Object(h.jsx)("span",{className:"red",children:"import"})," ",Object(h.jsx)("span",{className:"violet",children:"React"})," ",Object(h.jsx)("span",{className:"red",children:"from"})," ",Object(h.jsx)("span",{className:"green",children:"'react'"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"red",children:"import"})," ",Object(h.jsx)("span",{className:"violet",children:"Header"})," ",Object(h.jsx)("span",{className:"red",children:"from"})," ",Object(h.jsx)("span",{className:"green",children:"'./components/Header/Header'"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"red",children:"import"})," ",Object(h.jsx)("span",{className:"violet",children:"FiltradorTabla"})," ",Object(h.jsx)("span",{className:"red",children:"from"})," ",Object(h.jsx)("span",{className:"green",children:"'./components/FiltradorTabla/FTabla'"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"red",children:"import"})," ",Object(h.jsx)("span",{className:"violet",children:"InfoProyecto"})," ",Object(h.jsx)("span",{className:"red",children:"from"})," ",Object(h.jsx)("span",{className:"green",children:"'./components/InfoProyecto/InfoProyecto'"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"red",children:"import"})," ",Object(h.jsx)("span",{className:"violet",children:"Proyectos"})," ",Object(h.jsx)("span",{className:"red",children:"from"})," ",Object(h.jsx)("span",{className:"green",children:"'./components/Proyectos/Proyectos'"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"red",children:"import"})," ",Object(h.jsxs)("span",{className:"orange",children:["{ ",Object(h.jsx)("span",{className:"violet",children:"BrowserRouter as Router, Switch, Route"})," }"]})," ",Object(h.jsx)("span",{className:"red",children:"from"})," ",Object(h.jsx)("span",{className:"green",children:"'react-router-dom'"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"violet",children:["export default class ",Object(h.jsx)("span",{className:"yellow",children:"App"})," extends ",Object(h.jsx)("span",{className:"yellow",children:"React.Component"})]})," ","{",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"lblue",children:"  render"})," ",Object(h.jsxs)("span",{className:"violet",children:["() ","{"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"violet",children:["   return ",Object(h.jsx)("span",{className:"lblue",children:"("})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["    ","<",Object(h.jsxs)("span",{className:"red",children:["div ",Object(h.jsxs)("span",{className:"orange",children:["className",Object(h.jsx)("span",{className:"lblue",children:"="}),Object(h.jsx)("span",{className:"green",children:'"App"'})]})]}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["      ","<",Object(h.jsx)("span",{className:"yellow",children:"Router"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["        ","<",Object(h.jsx)("span",{className:"yellow",children:"Header"}),"/>"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["        ","<",Object(h.jsx)("span",{className:"yellow",children:"Switch"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["          ","<",Object(h.jsx)("span",{className:"yellow",children:"Route"})," ",Object(h.jsx)("span",{className:"orange",children:"path"}),Object(h.jsx)("span",{className:"lblue",children:"="}),Object(h.jsx)("span",{className:"green",children:'"/proyectos"'}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["            ","<",Object(h.jsx)("span",{className:"yellow",children:"Proyectos"})," />"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["          ","</",Object(h.jsx)("span",{className:"yellow",children:"Route"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["          ","<",Object(h.jsx)("span",{className:"yellow",children:"Route"})," ",Object(h.jsx)("span",{className:"orange",children:"path"}),Object(h.jsx)("span",{className:"lblue",children:"="}),Object(h.jsx)("span",{className:"green",children:'"/info-proyecto"'}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["            ","<",Object(h.jsx)("span",{className:"yellow",children:"InfoProyecto"})," />"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["          ","</",Object(h.jsx)("span",{className:"yellow",children:"Route"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["          ","<",Object(h.jsx)("span",{className:"yellow",children:"Route"})," ",Object(h.jsx)("span",{className:"orange",children:"path"}),Object(h.jsx)("span",{className:"lblue",children:"="}),Object(h.jsx)("span",{className:"green",children:'"/"'}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["            ","<",Object(h.jsx)("span",{className:"yellow",children:"FiltradorTabla"})," />"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["          ","</",Object(h.jsx)("span",{className:"yellow",children:"Route"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["        ","</",Object(h.jsx)("span",{className:"yellow",children:"Switch"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["      ","</",Object(h.jsx)("span",{className:"yellow",children:"Router"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["    ","</",Object(h.jsx)("span",{className:"red",children:"div"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"lblue",children:["   ",")"]}),";",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"violet",children:"}"})]})})}function R(){return Object(h.jsx)("code",{children:Object(h.jsxs)("div",{className:"codigo",children:[Object(h.jsx)("span",{className:"red",children:"import"})," ",Object(h.jsx)("span",{className:"violet",children:"React"})," ",Object(h.jsx)("span",{className:"red",children:"from"})," ",Object(h.jsx)("span",{className:"green",children:"'react'"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"red",children:"import"})," ",Object(h.jsx)("span",{className:"violet",children:"logo"})," ",Object(h.jsx)("span",{className:"red",children:"from"})," ",Object(h.jsx)("span",{className:"green",children:"'../../logo.svg'"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"red",children:"import"})," ",Object(h.jsxs)("span",{className:"orange",children:["{ ",Object(h.jsx)("span",{className:"violet",children:"Link"})," }"]})," ",Object(h.jsx)("span",{className:"red",children:"from"})," ",Object(h.jsx)("span",{className:"green",children:"'react-router-dom'"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"violet",children:["export default class ",Object(h.jsx)("span",{className:"yellow",children:"Header"})," extends ",Object(h.jsx)("span",{className:"yellow",children:"React.Component"})]})," ","{",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"lblue",children:"  render"})," ",Object(h.jsxs)("span",{className:"violet",children:["() ","{"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"violet",children:["   return ",Object(h.jsx)("span",{className:"lblue",children:"("})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["    ","<",Object(h.jsxs)("span",{className:"red",children:["header ",Object(h.jsxs)("span",{className:"orange",children:["className",Object(h.jsx)("span",{className:"lblue",children:"="}),Object(h.jsx)("span",{className:"green",children:'"App-header"'})]})]}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["      ","<",Object(h.jsxs)("span",{className:"red",children:["div ",Object(h.jsxs)("span",{className:"orange",children:["id",Object(h.jsx)("span",{className:"lblue",children:"="}),Object(h.jsx)("span",{className:"green",children:'"brand"'})]})]}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["        ","<",Object(h.jsxs)("span",{className:"red",children:["a ",Object(h.jsxs)("span",{className:"orange",children:["href",Object(h.jsx)("span",{className:"lblue",children:"="}),Object(h.jsx)("span",{className:"green",children:'"/"'})]})]}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["          ","<",Object(h.jsxs)("span",{className:"red",children:["img ",Object(h.jsxs)("span",{className:"orange",children:["src",Object(h.jsx)("span",{className:"lblue",children:"="}),Object(h.jsx)("span",{className:"green",children:"{logo}"})]})," ",Object(h.jsxs)("span",{className:"orange",children:["className",Object(h.jsx)("span",{className:"lblue",children:"="}),Object(h.jsx)("span",{className:"green",children:'"App-logo"'})," ",Object(h.jsxs)("span",{className:"orange",children:["alt",Object(h.jsx)("span",{className:"lblue",children:"="}),Object(h.jsx)("span",{className:"green",children:'"logo"'})]})]})]})," ","/>"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["          ","<",Object(h.jsx)("span",{className:"red",children:"h1"}),">","BoxTree","</",Object(h.jsx)("span",{className:"red",children:"h1"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["        ","</",Object(h.jsx)("span",{className:"red",children:"a"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["      ","</",Object(h.jsx)("span",{className:"red",children:"div"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["      ","<",Object(h.jsxs)("span",{className:"red",children:["div ",Object(h.jsxs)("span",{className:"orange",children:["id",Object(h.jsx)("span",{className:"lblue",children:"="}),Object(h.jsx)("span",{className:"green",children:'"sections"'})]})]}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["        ","{",Object(h.jsx)("span",{className:"yellow",children:"SECTIONS"}),".",Object(h.jsxs)("span",{className:"lblue",children:["map",Object(h.jsxs)("span",{className:"violet",children:["(",Object(h.jsx)("span",{className:"red",children:"e"}),Object(h.jsxs)("span",{className:"violet",children:[" ","=>"]})]})," "]}),"<",Object(h.jsx)("span",{className:"yellow",children:"Link"})," ",Object(h.jsx)("span",{className:"orange",children:"to"}),Object(h.jsxs)("span",{className:"lblue",children:["={",Object(h.jsx)("span",{className:"red",children:"e.href"}),"}"]})," ",Object(h.jsx)("span",{className:"orange",children:"key"}),Object(h.jsxs)("span",{className:"lblue",children:["={",Object(h.jsx)("span",{className:"red",children:"e.name"}),"}"]}),">",Object(h.jsxs)("span",{className:"lblue",children:["{",Object(h.jsx)("span",{className:"red",children:"e.name"}),"}"]}),"</",Object(h.jsx)("span",{className:"yellow",children:"Link"}),">",Object(h.jsx)("span",{className:"violet",children:")"}),"}"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["      ","</",Object(h.jsx)("span",{className:"red",children:"div"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["    ","</",Object(h.jsx)("span",{className:"red",children:"header"}),">"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"lblue",children:["   ",")"]}),";",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"violet",children:"}"})]})})}var S=C,T=(c(40),function(e){Object(i.a)(c,e);var s=Object(o.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(j.a)(c,[{key:"componentDidMount",value:function(){document.title="BoxTree - M\xe1s proyectos"}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{id:"proyectos",children:Object(h.jsx)("p",{className:"typewriter",children:"En construcci\xf3n"})})})}}]),c}(n.a.Component)),D=c(2),E=function(e){Object(i.a)(c,e);var s=Object(o.a)(c);function c(){return Object(l.a)(this,c),s.apply(this,arguments)}return Object(j.a)(c,[{key:"componentDidMount",value:function(){document.title="BoxTree"}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(x,{}),Object(h.jsxs)(D.c,{children:[Object(h.jsx)(D.a,{path:"/proyectos",children:Object(h.jsx)(T,{})}),Object(h.jsx)(D.a,{path:"/info-proyecto",children:Object(h.jsx)(S,{})}),Object(h.jsx)(D.a,{path:"/",children:Object(h.jsx)(w,{})})]})]})})}}]),c}(n.a.Component),B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(s){var c=s.getCLS,a=s.getFID,n=s.getFCP,t=s.getLCP,r=s.getTTFB;c(e),a(e),n(e),t(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),B()}},[[41,1,2]]]);
//# sourceMappingURL=main.26c9666d.chunk.js.map