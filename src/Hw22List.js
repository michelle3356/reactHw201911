import React, { Component } from 'react'
export default class Hw22List extends Component {
  constructor(props){
    super(props);
    this.handleDelOneClick = this.handleDelOneClick.bind(this);
    this.handleZeroClick = this.handleZeroClick.bind(this);
  };

  handleDelOneClick = (e) => {
    // this.delOne(this.props.number)
  };
  
  delOne(number){
    console.log(number)
    if(number){
      number = number - 1
    }else{
      number = 0
    }
    this.setState ({
      numList: number
    })
  };

  handleZeroClick = (e) => {
    // this.Zeroing(this.props.number)
  };

  Zeroing(number){
    number = 0
    this.setState({
      numList: number
    })
  };
  
  render() {
    const {number, Fruit, totalPrice, display} = this.props;
    return (
      <li className = {display}>
        {Fruit} * {number} = $ {totalPrice}
        <button className="btn btn-sm btn-warning" 
        onClick={this.handleDelOneClick}>-1</button>
        <button className="btn btn-sm btn-danger" 
        onClick={this.handleZeroClick}>clear</button>
      </li>
    )
  }
}
