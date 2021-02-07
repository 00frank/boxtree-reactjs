import React from 'react'
import './InfoProyecto.css'
// import hljs from 'highlight.js/lib/core'
// import 'highlight.js/styles/monokai-sublime.css'
// import javascript from 'highlight.js/lib/languages/javascript'
// hljs.registerLanguage('javascript', javascript)
// hljs.initHighlightingOnLoad();

class InfoProyecto extends React.Component {
  componentDidMount() {
    document.title = "BoxTree - Información";

  }
  render() {
    return (
      <div className="container">
        <div id="info-proyecto">
          <div className="introduccion">
            <h1 className="titulo">Información sobre el proyecto</h1>
            <p className="intro">Esta página es un resumen de la información del proyecto, usando un poco
            de la documentación de React y algunos recursos relacionados.</p>
            <hr />
            <ul>
              {LINKS.map(e => <li key={e.name}><a href={e.href}>{e.name}</a></li>)}
            </ul>
          </div>
          <div id="que-es-react">
            <h2>Qué es React?</h2>
            <p>React es una biblioteca de JavaScript creada por Facebook para construir interfaces de usuario.
            Es también una biblioteca que estuve aprendiendo por mi cuenta, leyendo <a href="https://es.reactjs.org">la
            documentación</a>, viendo videos, y practicando un poco los ejemplos y ejercicios que dejan en la mayoría
            de sus <a href="https://es.reactjs.org/docs/hello-world.html">conceptos principales</a>.
            </p>
          </div>
          <div id="bases">
            <h2>Bases del proyecto</h2>
            <p>En el ínterin de la creación del proyecto demuestro todos los conocimientos que
            aprendí, tanto como la creación de componentes reutilizables, el manejo de estados,
            las props de los componentes, funciones de componentes, levantar estados desde un componente
            hijo al componente padre, e incluso la utilización de un módulo para crear rutas <i>(fijate
              que si vas cambiando por las distintas secciones de la barra superior no se recarga la página, esa
              es una de las finalidades que tiene React, que la página se base en una aplicación de una
            sola página o <a href="https://es.wikipedia.org/wiki/Single-page_application">SPA</a>,
            -Single Page Application para los amigos-)</i>  <br /><br />

            Para ver el código del proyecto, podes entrar al <a href="https://github.com/00frank/boxtree-reactjs">repositorio de github</a>
            </p>
          </div>
          <div id="rutas">
            <h2>Sistema de rutas</h2>
            <p>Para diseñar el sistema de rutas use el módulo <a className="red-link"
              href="https://reactrouter.com/web/guides/quick-start">react-router-dom</a>.<br />
            Si ya se tiene un proyecto con React lo que hay que hacer es instalar el módulo con npm:
            </p>
            <pre>
              <code className="install">
                <span className="orange">npm</span> i react-router-dom
              </code>
            </pre>
            <p>Una vez que se tiene instalado el paquete hay que rediseñar la clase principal para
            que se pueda construir una especie de "diccionario" que contenga los links a las distintas
            secciones que se puedan mostrar, en mi caso el componente principal ({'<App />'}) quedo así:
            </p>
            <pre>
              <AppCode />
            </pre>
            <p>Mientras que el componente {'<Header />'}, (que contiene los links en forma de botones a las distintas secciones) queda
            de la siguiente forma:</p>
            <pre>
              <HeaderCode />
            </pre>
            <p>De nuevo, puede ver el código del proyecto en el <a href="https://github.com/00frank/boxtree-reactjs">repositorio de github</a></p>
          </div>
          <div id="deploy">
            <h2>Deploy/lanzamiento</h2>
            <p>Para facilitar el deploy, o el subir el proyecto a algun lugar para que sea de vista publica, tambien
              instale un módulo llamado <a className="red-link" href="https://www.npmjs.com/package/gh-pages">gh-pages</a>
            </p>
            <pre>
              <code className="install">
                <span className="orange">npm</span> i gh-pages
              </code>
            </pre>
            <p>Facilita mucho el proceso ya que basta con hacer unos cambios en el 
            archivo <a href="https://github.com/00frank/boxtree-reactjs/blob/master/package.json"><i>package.json</i></a> y
            tener un repositorio en github para que este listo el deploy del proyecto.</p>
          </div>
        </div>
      </div>
    )
  }
}

const LINKS = [
  { name: "Qué es React?", href: "#que-es-react" },
  { name: "Bases", href: "#bases" },
  { name: "Rutas", href: "#rutas" },
  { name: "Deploy", href: "#deploy" }
]

function AppCode() {
  return (
    <code>
      <div className="codigo">
        <span className="red">import</span> <span className="violet">React</span> <span className="red">from</span> <span className="green">'react'</span><br />
        <span className="red">import</span> <span className="violet">Header</span> <span className="red">from</span> <span className="green">'./components/Header/Header'</span><br />
        <span className="red">import</span> <span className="violet">FiltradorTabla</span> <span className="red">from</span> <span className="green">'./components/FiltradorTabla/FTabla'</span><br />
        <span className="red">import</span> <span className="violet">InfoProyecto</span> <span className="red">from</span> <span className="green">'./components/InfoProyecto/InfoProyecto'</span><br />
        <span className="red">import</span> <span className="violet">Proyectos</span> <span className="red">from</span> <span className="green">'./components/Proyectos/Proyectos'</span><br />
        <span className="red">import</span> <span className="orange">{`{ `}<span className="violet">BrowserRouter as Router, Switch, Route</span>{` }`}</span> <span className="red">from</span> <span className="green">'react-router-dom'</span><br /><br />
        <span className="violet">export default class <span className="yellow">App</span> extends <span className="yellow">React.Component</span></span> {'{'}<br />
        <span className="lblue">  render</span> <span className="violet">() {'{'}</span><br />
        <span className="violet">   return <span className="lblue">{'('}</span></span><br />
        <span>    {'<'}<span className="red">div <span className="orange">className<span className="lblue">=</span><span className="green">"App"</span></span></span>{'>'}</span><br />
        <span>      {'<'}<span className="yellow">Router</span>{'>'}</span><br />
        <span>        {'<'}<span className="yellow">Header</span>{'/>'}</span><br />
        <span>        {'<'}<span className="yellow">Switch</span>{'>'}</span><br />
        <span>          {'<'}<span className="yellow">Route</span> <span className="orange">path</span><span className="lblue">=</span><span className="green">"/proyectos"</span>{'>'}</span><br />
        <span>            {'<'}<span className="yellow">Proyectos</span>{' />'}</span><br />
        <span>          {'</'}<span className="yellow">Route</span>{'>'}</span><br />
        <span>          {'<'}<span className="yellow">Route</span> <span className="orange">path</span><span className="lblue">=</span><span className="green">"/info-proyecto"</span>{'>'}</span><br />
        <span>            {'<'}<span className="yellow">InfoProyecto</span>{' />'}</span><br />
        <span>          {'</'}<span className="yellow">Route</span>{'>'}</span><br />
        <span>          {'<'}<span className="yellow">Route</span> <span className="orange">path</span><span className="lblue">=</span><span className="green">"/"</span>{'>'}</span><br />
        <span>            {'<'}<span className="yellow">FiltradorTabla</span>{' />'}</span><br />
        <span>          {'</'}<span className="yellow">Route</span>{'>'}</span><br />
        <span>        {'</'}<span className="yellow">Switch</span>{'>'}</span><br />
        <span>      {'</'}<span className="yellow">Router</span>{'>'}</span><br />
        <span>    {'</'}<span className="red">div</span>{'>'}</span><br />
        <span className="lblue">   {')'}</span>;<br />
        <span className="violet">{'}'}</span>
      </div>
    </code>
  )
}

function HeaderCode() {
  return (
    <code>
      <div className="codigo">
        <span className="red">import</span> <span className="violet">React</span> <span className="red">from</span> <span className="green">'react'</span><br />
        <span className="red">import</span> <span className="violet">logo</span> <span className="red">from</span> <span className="green">'../../logo.svg'</span><br />
        <span className="red">import</span> <span className="orange">{`{ `}<span className="violet">Link</span>{` }`}</span> <span className="red">from</span> <span className="green">'react-router-dom'</span><br /><br />
        <span className="violet">export default class <span className="yellow">Header</span> extends <span className="yellow">React.Component</span></span> {'{'}<br />
        <span className="lblue">  render</span> <span className="violet">() {'{'}</span><br />
        <span className="violet">   return <span className="lblue">{'('}</span></span><br />
        <span>    {'<'}<span className="red">header <span className="orange">className<span className="lblue">=</span><span className="green">"App-header"</span></span></span>{'>'}</span><br />
        <span>      {'<'}<span className="red">div <span className="orange">id<span className="lblue">=</span><span className="green">"brand"</span></span></span>{'>'}</span><br />
        <span>        {'<'}<span className="red">a <span className="orange">href<span className="lblue">=</span><span className="green">"/"</span></span></span>{'>'}</span><br />
        <span>          {'<'}<span className="red">img <span className="orange">src<span className="lblue">=</span><span className="green">{'{logo}'}</span></span> <span className="orange">className<span className="lblue">=</span><span className="green">"App-logo"</span> <span className="orange">alt<span className="lblue">=</span><span className="green">"logo"</span></span></span></span> {'/>'}</span><br />
        <span>          {'<'}<span className="red">h1</span>{'>'}BoxTree{'</'}<span className="red">h1</span>{'>'}</span><br />
        <span>        {'</'}<span className="red">a</span>{'>'}</span><br />
        <span>      {'</'}<span className="red">div</span>{'>'}</span><br />
        <span>      {'<'}<span className="red">div <span className="orange">id<span className="lblue">=</span><span className="green">"sections"</span></span></span>{'>'}</span><br />
        <span>        {'{'}<span className="yellow">SECTIONS</span>.<span className="lblue">map<span className="violet">(<span className="red">e</span><span className="violet"> {'=>'}</span></span> </span>{'<'}<span className="yellow">Link</span> <span className="orange">to</span><span className="lblue">{'={'}<span className="red">{'e.href'}</span>{'}'}</span> <span className="orange">key</span><span className="lblue">{'={'}<span className="red">{'e.name'}</span>{'}'}</span>{'>'}<span className="lblue">{'{'}<span className="red">{'e.name'}</span>{'}'}</span>{'</'}<span className="yellow">Link</span>{'>'}<span className="violet">)</span>{'}'}</span><br />
        <span>      {'</'}<span className="red">div</span>{'>'}</span><br />
        <span>    {'</'}<span className="red">header</span>{'>'}</span><br />
        <span className="lblue">   {')'}</span>;<br />
        <span className="violet">{'}'}</span>
      </div>
    </code>
  )
}

export default InfoProyecto