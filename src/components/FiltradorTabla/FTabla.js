import React from 'react'
import Filtrador from '../Filtrador/Filtrador'
import Tabla from '../PTable/PTable'
import './FTabla.css'

class FTabla extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="filtrador-tabla">
          <Filtrador />
          <Tabla />
        </div>
      </div>
    )
  }
}

export default FTabla