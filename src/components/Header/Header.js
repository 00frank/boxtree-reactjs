import React from 'react';
import logo from '../../logo.svg';
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div id="brand">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>BoxTree</h1>
        </div>
        <div id="sections">
            {SECTIONS.map(e => <a key={e.name} href="#">{e.name}</a>)}
        </div>
      </header>
    )
  }
}

const SECTIONS = [
  { name: 'Productos'},
  { name: 'Descuentos'},
  { name: 'Sobre nosotros'},
  { name: 'Contacto'}
]


export default Header;