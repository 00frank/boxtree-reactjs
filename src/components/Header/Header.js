import React from 'react';
import logo from '../../logo.svg';
import { Link } from "react-router-dom";
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeMobile: false }
    this.toggleNavigation = this.toggleNavigation.bind(this)
  }
  toggleNavigation() {
    this.setState({activeMobile: !this.state.activeMobile})
    console.log('activeMobile:', !this.state.activeMobile);
  }
  render() {
    return (
      <header className="App-header">
        <div id="brand">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>BoxTree</h1>
          </Link>
        </div>
        <div id="sections">
          {SECTIONS.map(e => <Link to={e.href} key={e.name}>{e.name}</Link>)}
        </div>
        {/* Para diseño mobile */}
        <div id="mobile-navButton">
          <button onClick={this.toggleNavigation}>{!this.state.activeMobile ? 'Abrir' : 'Cerrar'}</button>
        </div>
        <div id="navigation" className={this.state.activeMobile ? 'show' : 'notShow'}>
          {SECTIONS.map(e => <Link to={e.href} key={e.name}>{e.name}</Link>)}
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