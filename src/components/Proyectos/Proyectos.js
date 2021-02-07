import React from 'react'
import './Proyectos.css'

class Proyectos extends React.Component {
  componentDidMount() {
    document.title = "BoxTree - Más proyectos";
  }
  render() {
    return (
      <div className="container">
        <div id="proyectos">
          <p className="typewriter">En construcción</p>
        </div>
      </div>
    )
  }
}

export default Proyectos