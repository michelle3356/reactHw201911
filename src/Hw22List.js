import React, { Component } from 'react'
export default class Hw22List extends Component {
//  1. 當有水果數量進來時，它可以顯示某水果的「累計數量」
//  2. 顯示水果小計
//  3. 顯示水果總計
//  4. 可以減少小計水果數量
//  5. 可以清空小計水果數量
  constructor(props){
    super(props);
    this.state = {
      FruitNum: this.props.FruitNum
    }
  };

  handleDelOneClick = (e) => {
    let FruitNum = this.state.FruitNum;
    console.warn(FruitNum)
    this.props.onListhandle(FruitNum)
  };

  handleZeroClick = (e) => {
    // this.Zeroing(this.props.number)
  };
  
  render() {
    const { Fruit, display, totalFruitPrice, FruitNum} = this.props;
    return (
      <li className = {display}>
        {Fruit} * {FruitNum} = $ {totalFruitPrice}
        <button className="btn btn-sm btn-warning" 
        onClick={this.handleDelOneClick.bind(this)}>-1</button>
        <button className="btn btn-sm btn-danger" 
        onClick={this.handleZeroClick.bind(this)}>clear</button>
      </li>
    )
  }
}
