import React from 'react';
import './PTable.css'

class PTable extends React.Component {
  render() {
    const rows = []
    let lastCategory = null
    PRODUCTS.forEach(p => {
      if(p.category !== lastCategory){
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
    return(
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

const PRODUCTS = [
  { category: 'Deportes', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Deportes', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Deportes', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronica', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronica', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronica', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

export default PTable;