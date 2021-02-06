import React from 'react';
import './PTable.css'

class PTable extends React.Component {
  render() {
    const filterText = this.props.filterText
    const stockOnly = this.props.stockOnly

    const rows = []
    let lastCategory = null
    PRODUCTS.forEach(p => {
      if (p.name.toUpperCase().indexOf(filterText.toUpperCase()) === -1) {
        return null
      }
      // if (p.name.indexOf(filterText) === -1) {
      //   return null
      // }
      if (stockOnly && !p.stocked) {
        return null
      }
      if (p.category !== lastCategory) {
        rows.push(
          <tr key={p.category}>
            <td colSpan="2" className="category">{p.category}</td>
          </tr>
        )
      }
      rows.push(
        <ProductRow product={p} key={p.name} />
      )
      lastCategory = p.category;
    })
    return (
      <table id="productos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product
    const name = product.stocked === true ? product.name : <span className="no-stock">{product.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

const PRODUCTS = [
  { category: 'Deportes', price: '$49.99', stocked: true, name: 'Pelota de football' },
  { category: 'Deportes', price: '$29.99', stocked: false, name: 'Pelota de basketball' },
  { category: 'Deportes', price: '$4.99', stocked: true, name: 'Gorra de los Lakers' },
  { category: 'Deportes', price: '$14.99', stocked: true, name: 'Short de PSG' },
  { category: 'Deportes', price: '$19.99', stocked: false, name: 'Camiseta del Real Madrid' },
  { category: 'Electronica', price: '$99.99', stocked: true, name: 'iPod Touch 6' },
  { category: 'Electronica', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronica', price: '$199.99', stocked: true, name: 'Nexus 7' },
  { category: 'Electronica', price: '$99.99', stocked: true, name: 'Heladera Phillips' },
  { category: 'Electronica', price: '$499.99', stocked: false, name: 'Play Station 5' }
];

export default PTable;