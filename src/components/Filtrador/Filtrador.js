import React from 'react'
import './Filtrador.css'

class Filtrador extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: false, value: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }
  handleChange(e) {
    const value = e.target.value
    this.setState({value})
    this.props.handleChange('filterText', value)
  }
  handleCheck() {
    this.setState({checked: !this.state.checked})
    this.props.handleChange('stockOnly',!this.state.checked)
  }
  render() {
    return (
      <div id="filtrador">
        <form>
          <input type="text" placeholder="Buscar..." onChange={this.handleChange} />
          <label className="switch">
            <input type="checkbox" onChange={this.handleCheck} />
            <span className="slider round"></span>
          </label>
          <label className="message">Mostrar unicamente los productos con stock</label>
        </form>
      </div>
    )
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.active
    }
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
    // tambien se puede obviar el bindeo de this declarandolo como una arrow func. ej:
    // handleClick = () => { ... }
    // o llamar a la funcion con una arrow func. "onClick={() => this.handleClick()}", (no recomendado)
  }
  handleClick() {
    this.setState({ active: !this.state.active })
    // se ejecuta la funcion recibida del padre
    this.props.handleShow(this.props.name, !this.state.active);
  }
  render() {
    return (
      <div className="toggle">
        <label className="switch">
          <input type="checkbox" checked={this.state.active} onChange={this.handleClick} />
          <span className="slider round"></span>
        </label>
        <label>Mostrar {this.props.name}? ({this.state.active ? 'Si' : 'No'})</label>
      </div>
    )
  }
}


export default Filtrador