import React, { Component } from 'react'
import './Hw22.css'
export default class Hw22ShopCarItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: '',
      list: []
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const list = this.state.list;
    list.push(this.props.Fruit + ' * ' + this.props.Price + ' = $' + this.state.num * this.props.Price)
    console.log(list)
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
