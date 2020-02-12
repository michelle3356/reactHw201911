import React, { Component } from 'react'
import './Hw22.css'
export default class Hw22ShopCarItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: '',
      number: 0,
      totalPrice: 0
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let number = this.state.number;
    let totalPrice = this.state.totalPrice;
    number = number + parseInt(this.state.num);
    totalPrice = number * this.props.Price;

    this.setState({
      number: number,
      totalPrice: totalPrice
    });

    this.props.onListhandle(number, totalPrice);
  }

  handleChange = (e) => {
    this.setState({
      num: e.target.value
    })
  }
  render() {
    const { Fruit, Price } = this.props;
    const { num } = this.state;
    return (
      <div className="col-sm-3">
        <div className="Fruit">
          <div>{Fruit}</div>
          <div>${Price}</div>
          <form onSubmit={this.handleSubmit}>
            <input type="number" 
            placeholder="數量" 
            onChange = {this.handleChange}
            value={num} />
            <button className="btn btn-primary">Add to cart</button>
          </form>
        </div>
      </div>
    )
  }
}
