import React, { Component } from 'react'

export default class Hw22List extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    const addSum = this.props.addSum;
    const Fruit = this.props.Fruit;
    const Price = this.props.Price;
    return (
      <li>
        {Fruit} * {addSum} = $ {Price}
        <button className="btn btn-sm btn-warning">-1</button>
        <button className="btn btn-sm btn-danger">clear</button>
      </li>
    )
  }
}
