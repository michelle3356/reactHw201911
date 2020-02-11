import React, { Component } from 'react'
import './Hw22.css'
export default class Hw22ShopCarItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: '',
      list: [],
      addSum: 0,
      price: 0
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const list = this.state.list;
    let addSum = this.state.addSum;
    let price = this.state.price;
    addSum = addSum + parseInt(this.state.num);
    price = addSum * this.props.Price;
    this.setState({
      list: [],
      addSum: addSum,
      price: price
    });
    list.push(this.props.Fruit + ' * ' + addSum + ' = $' + addSum * this.props.Price)
    this.props.onListhandle(list, addSum, price);
  }

  handleChange = (e) => {
    this.setState({
      num: e.target.value
    })
  }
  render() {
    const Fruit = this.props.Fruit;
    const Price = this.props.Price;
    const num = this.state.num;
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
