import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
    constructor(){
        super();
        this.state = {
            customers:[]
        }
    }
    //Making Call to back end
    componentDidMount () {
            fetch('/api/customers')
            .then(res => res.json())
            //getting response and setting the state
            .then(customers => this.setState({customers}, () => console.log('Customers fetched..', customers)));
    }
  render() {
    return (
      <div>
          <h2>Customers</h2>
          <ul>
            {this.state.customers.map(customer =>
            <li key={customer.id}> {customer.firstName} {customer.lastName}</li>
            )}
              </ul>
      </div>
    );
  }
}

export default Customers;
