import React from 'react'
import './Filtrador.css'

class Filtrador extends React.Component {
  render() {
    return (
      <div id="filtrador">
        <form>
          <input type="text" placeholder="Buscar..." />
          <label>
            <input type="checkbox" />
          Solo mostrar productos con stock
          </label>
        </form>
      </div>
    )
  }
}

export default Filtrador