import React from 'react'
import Filtrador from '../Filtrador/Filtrador'
import Tabla from '../PTable/PTable'
import './FTabla.css'

class FTabla extends React.Component {
  constructor(props) {
    super(props)
    this.state = { filterText: '', stockOnly: false }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    document.title = "BoxTree";
  }
  handleChange(name, value) {
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="container">
        <div id="filtrador-tabla">
          <Filtrador filterText={this.state.filterText} stockOnly={this.state.stockOnly} handleChange={this.handleChange} />
          <Tabla filterText={this.state.filterText} stockOnly={this.state.stockOnly} />
        </div>
      </div>
    )
  }
}

export default FTabla