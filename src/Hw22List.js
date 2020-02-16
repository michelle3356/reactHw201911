import React, { Component } from 'react'
export default class Hw22List extends Component {
//  1. 當有水果數量進來時，它可以顯示某水果的「累計數量」
//  2. 顯示水果小計
//  3. 顯示水果總計
//  4. 可以減少小計水果數量
//  5. 可以清空小計水果數量

// !!!!! constructor 的時機點是「建立元件時，觸發1次」!!!!!!
  constructor(props){
    super(props);
// 自己的 「state.FruitNum」只有在 constructor 的時候給！
// 之後就沒關係了
// 在 constructor 時給 0
// 之後 state.FruitNum 就是自己獨立運作
    this.state = {
      // FruitNum: this.props.FruitNum  會吃到父層一開始定義的constructor
    }
  };

  handleDelOneClick = (e) => {
    console.warn(this.props.FruitNum)
    this.props.onListhandle(this.props.FruitNum, this.props.id)
  };

  handleZeroClick = (e) => {
    this.props.onClearhandle(this.props.FruitNum, this.props.id)
  };
// render ： 如果 props 或 state 有改變時，它會重複觸發
// 也就是說 render 會觸發「多次」
  render() {
    const { Fruit, totalFruitPrice, FruitNum, id} = this.props;
    return (
      <li key={id}>
        {Fruit} * {FruitNum} = $ {totalFruitPrice}
        <button className="btn btn-sm btn-warning" 
        onClick={this.handleDelOneClick.bind(this)}>-1</button>
        <button className="btn btn-sm btn-danger" 
        onClick={this.handleZeroClick.bind(this)}>clear</button>
      </li>
    )
  }
}


// React的生命週期

// 1.constructor
// 2.render
// 3.componentDidMount
// 4;render
// 5.componentDidUpdatet
// (如果props or state有更新，以下2事件重複觸發)
// 6.render
// 7.componentDidUpdate