import React from 'react';
import './PTable.css'

class PTable extends React.Component {
  render() {
    return (
      <table id="productos">
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
        {PRODUCTS.map(e =>
          <tr key={e.name}>
            <td className={!e.stocked ? 'no-stock' : ''}>{e.name}</td>
            <td>{e.price}</td>
          </tr>)}
      </table>
    )
  }
}

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

export default PTable;