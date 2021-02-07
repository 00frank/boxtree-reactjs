import React from 'react'
import './InfoProyecto.css'

class InfoProyecto extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="info-proyecto">
          <h1>Información sobre el proyecto</h1>
          <p>Esta página es un resumen de la documentación de React y recursos relacionados.</p>
          <h2>React-router-dom para el control de rutas...</h2>
          <h3>Deploy con github pages</h3>
        </div>
      </div>
    )
  }
}

export default InfoProyecto