import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  state = {
    totalNet: 0,
    products: [
      { id: 1, name: "Product A", price: 10.99, quantity: 50, netPrice: 549.5 },
      { id: 2, name: "Product B", price: 20.49, quantity: 30, netPrice: 614.7 },
      { id: 3, name: "Product C", price: 5.99, quantity: 100, netPrice: 599 },
      { id: 4, name: "Product D", price: 15.79, quantity: 20, netPrice: 315.8 },
    ],
  };
  componentDidMount() {
    this.calculateTotal();
  }

  calculateTotal = () => {
    const sum = this.state.products.reduce(
      (accumulator, currentValue) => accumulator + currentValue.netPrice,
      0
    );
    this.setState({
      totalNet: sum,
    });
  };

  updateProducts = (value) => {
    const freshArray = [...this.state.products];
    for (let i = 0; i < freshArray.length; i++) {
      if (freshArray[i].id === value.id) {
        freshArray[i].price = value.price;
        freshArray[i].quantity = value.quantity;
        freshArray[i].netPrice = value.netPrice;
      }
    }
    this.setState(
      {
        products: freshArray,
      },
      () => {
        this.calculateTotal();
      }
    );
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Net Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((record) => {
              return (
                <TableRow
                  key={record.id}
                  dataInfo={record}
                  updateProducts={this.updateProducts}
                />
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total:</td>
              <td>{this.state.totalNet.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
