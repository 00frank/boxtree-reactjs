import React from 'react';
import logo from '../../logo.svg';
import { Link } from "react-router-dom";
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div id="brand">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>BoxTree</h1>
          </a>
        </div>
        <div id="sections">
          {SECTIONS.map(e => <Link to={e.href}>{e.name}</Link>)}
        </div>
      </header>
    )
  }
}

const SECTIONS = [
  { name: 'Productos', href: '/' },
  { name: 'Descuentos', href: '/' },
  { name: 'Información del proyecto', href: '/info-proyecto' },
  { name: 'Más proyectos', href: '/proyectos' }
]


export default Header;