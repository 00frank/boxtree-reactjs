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
            Es también una biblioteca que estuve aprendiendo por mi cuenta, leyendo <a href="https://es.reactjs.org">
                la documentación</a>, viendo videos, y practicando un poco los ejemplos y ejercicios que dejan en la mayoria
            de sus <a href="https://es.reactjs.org/docs/hello-world.html">conceptos principales</a>.
            </p>
          </div>
          <div id="bases">
            <h2>Bases del proyecto</h2>
            <p>En el ínterin de la creación del proyecto demuestro todos los conocimientos que
            aprendi, tanto como la creacion de componentes reutilizables, el manejo de estados,
            las props de los componentes, funciones de componentes, levantar estados desde un componente
            hijo al componente padre, e incluso la utilización de un modulo para crear rutas <i>(fijate
              que si te moves por las distintas secciones de la barra superior no se recarga la página, esa
              es una de las finalidades que tiene React, que la página se base en una aplicación de una
            sola página o <a href="https://es.wikipedia.org/wiki/Single-page_application">SPA</a>,
            -Single Page Application para los amigos-)</i>  <br /><br />

            Para ver el codigo del proyecto, podes entrar al <a href="https://github.com/00frank/boxtree-reactjs">repositorio de github</a>
            </p>
          </div>
          <div id="rutas">
            <h2>Sistema de rutas</h2>
            <p>Para diseñar el sistema de rutas use el módulo <a className="red-link"
              href="https://reactrouter.com/web/guides/quick-start">react-router-dom</a>.<br />
            Si ya se tiene un proyecto con React lo que hay que hacer es instalar el módulo con npm:
            </p>
            <pre>
              <code id="install">
                <span className="orange">npm</span> install react-router-dom
              </code>
            </pre>
            <p>Una vez que se tiene instalado el paquete hay que rediseñar la clase principal para
            que se pueda construir una especie de "diccionario" que contenga los links a las distintas
            secciones que se puedan mostrar, en mi caso la clase principal quedo así:
            </p>
            <pre>
              <AppCode />
            </pre>
          </div>
          <div id="deploy">
            <h2>Deploy/lanzamiento</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque provident
            nostrum asperiores ut unde! Explicabo, porro autem doloribus nam eveniet eum,
            omnis repellat quibusdam vitae atque obcaecati esse est, dolorem voluptates
            vel quam temporibus. Fuga amet aliquid quae exercitationem illum mollitia
            blanditiis eum dolor! Accusantium nulla provident temporibus quidem, quos
            qui animi aliquid! Quae at doloribus illo, nulla perspiciatis vel voluptatum
            fugit quibusdam officiis sit distinctio facere aut impedit quo. Aspernatur
            officia at enim fugit necessitatibus autem aliquid nostrum ut, architecto
            iure. Labore molestias error tenetur repellat esse vero asperiores similique
            ab eaque corrupti aspernatur impedit totam at et quo corporis eveniet, repudiandae
            sunt dignissimos vel odio laudantium delectus. Temporibus, sunt sed quo officiis
            maiores nisi provident ullam facilis, delectus nulla nobis necessitatibus error
            sint nihil alias. Aperiam odit cum voluptatibus vitae, commodi eos dolores illo
            excepturi quo illum, atque cumque unde beatae rerum odio perferendis? Autem delectus
            facere velit!</p>
          </div>
        </div>
      </div>
    )
  }
}

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
        <span className="lblue">  render</span> <span className="violet">() {'{'}<br />
        <span>   return <span className="lblue">{'('}</span></span></span><br />
        <span>    {'<'}<span className="red">div <span className="orange">className<span className="lblue">=</span><span className="green">"App"</span></span></span>{'>'}</span><br/>
        <span>      {'<'}<span className="yellow">Router</span>{'>'}</span><br/>
        <span>        {'<'}<span className="yellow">Header</span>{'/>'}</span><br/>
        <span>        {'<'}<span className="yellow">Switch</span>{'>'}</span><br/>
        <span>          {'<'}<span className="yellow">Route</span> <span className="orange">path</span><span className="lblue">=</span><span className="green">"/proyectos"</span>{'>'}</span><br/>
        <span>            {'<'}<span className="yellow">Proyectos</span>{' />'}</span><br/>
        <span>          {'</'}<span className="yellow">Route</span>{'>'}</span><br/>
        <span>          {'<'}<span className="yellow">Route</span> <span className="orange">path</span><span className="lblue">=</span><span className="green">"/info-proyecto"</span>{'>'}</span><br/>
        <span>            {'<'}<span className="yellow">InfoProyecto</span>{' />'}</span><br/>
        <span>          {'</'}<span className="yellow">Route</span>{'>'}</span><br/>
        <span>          {'<'}<span className="yellow">Route</span> <span className="orange">path</span><span className="lblue">=</span><span className="green">"/"</span>{'>'}</span><br/>
        <span>            {'<'}<span className="yellow">FiltradorTabla</span>{' />'}</span><br/>
        <span>          {'</'}<span className="yellow">Route</span>{'>'}</span><br/>
        <span>        {'</'}<span className="yellow">Switch</span>{'>'}</span><br/>
        <span>      {'</'}<span className="yellow">Router</span>{'>'}</span><br/>
        <span>    {'</'}<span className="red">div</span>{'>'}</span><br/>
        <span className="lblue">   {')'}</span>;<br />
        {'}'}
      </div>
    </code>
  )
}

const LINKS = [
  { name: "Qué es React?", href: "#que-es-react" },
  { name: "Bases", href: "#bases" },
  { name: "Rutas", href: "#rutas" },
  { name: "Deploy", href: "#deploy" }
]

export default InfoProyecto