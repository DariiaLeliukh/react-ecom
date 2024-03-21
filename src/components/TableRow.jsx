import React, { Component, useRef } from "react";

export default class TableRow extends Component {
  state = {
    id: this.props.dataInfo.id,
    name: this.props.dataInfo.name,
    price: this.props.dataInfo.price,
    quantity: this.props.dataInfo.quantity,
    netPrice: this.props.dataInfo.netPrice,
  };

  changePrice = (value) => {
    this.setState(
      {
        price: parseFloat(value),
        netPrice: Math.round(this.state.quantity * value * 100) / 100,
      },
      () => {
        this.props.updateProducts(this.state);
      }
    );
  };
  changeQuantity = (value) => {
    this.setState(
      {
        quantity: parseFloat(value),
        netPrice: Math.round(value * this.state.price * 100) / 100,
      },
      () => {
        this.props.updateProducts(this.state);
      }
    );
  };

  render() {
    return (
      <tr>
        <td data-label="ID">{this.state.id}</td>
        <td data-label="Product Name">{this.state.name}</td>
        <td data-label="Price">
          <input
            type="text"
            inputMode="numeric"
            value={this.state.price}
            onChange={(e) => this.changePrice(e.target.value)}
          />
        </td>
        <td data-label="Quantity">
          <input
            type="text"
            inputMode="numeric"
            value={this.state.quantity}
            onChange={(e) => this.changeQuantity(e.target.value)}
          />
        </td>
        <td data-label="Net Price">{this.state.netPrice.toFixed(2)}</td>
      </tr>
    );
  }
}
