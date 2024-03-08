import React, { Component } from "react";

export default class MainComponent extends Component {
  state = {
    pageTitle: "Customers",
    customerCount: 5,
    customers: [
      {
        id: 1,
        name: "John Doe",
        phone: "123-456-7890",
        address: {
          city: "New York",
        },
        photo: "https://picsum.photos/id/1000/60",
      },
      {
        id: 2,
        name: "Jane Smith",
        phone: "987-654-3210",
        address: {
          city: "Los Angeles",
        },
        photo: "https://picsum.photos/id/1001/60",
      },
      {
        id: 3,
        name: "Michael Johnson",
        phone: "555-123-4567",
        address: {
          city: "Chicago",
        },
        photo: "https://picsum.photos/id/1002/60",
      },
      {
        id: 4,
        name: "Emily Brown",
        phone: "333-444-5555",
        address: {
          city: "Houston",
        },
        photo: "https://picsum.photos/id/1003/60",
      },
      {
        id: 5,
        name: "David Lee",
        phone: "666-777-8888",
        address: {
          city: "San Francisco",
        },
        photo: "https://picsum.photos/id/1004/60",
      },
    ],
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="align-items-center d-flex gap-3">
              <h1>{this.state.pageTitle}</h1>
              <span className="btn btn-warning">
                {this.state.customerCount}
              </span>
              <button className="btn btn-info" onClick={this.onRefreshClick}>
                Refresh
              </button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Customer Name</th>
                  <th>Phone</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>{this.getCustomerRows()}</tbody>
            </table>
          </div>
        </div>
      </>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customerCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) {
      return phone;
    } else {
      return <span className="bg-warning p-1">no phone</span>;
    }
  };

  getCustomerRows = () => {
    return this.state.customers.map((customer) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>
            <img src={customer.photo} alt="Customer" />
          </td>
          <td>{customer.name}</td>
          <td>{this.getPhoneToRender(customer.phone)}</td>
          <td>{customer.address.city}</td>
        </tr>
      );
    });
  };
}
