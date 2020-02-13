import React, { Component } from 'react'
import Hw22ShopCarItem from './Hw22ShopCarItem'
import Hw22List from './Hw22List'
export default class Hw22ShopCar extends Component {
  constructor(props){
    super(props);
    this.state = {
      Fruit: '',
      price: '',
      FruitNum: 0,
      totalPrice: 0,
      display: 'hide',
      totalFruitPrice: 0,
      calNum: 0
    }
  };

  handleItem = (FruitNum, Price) => {
    let finalFruitNum = parseInt(this.state.FruitNum) + parseInt(FruitNum);
    let totalFruitPrice = Price * finalFruitNum;
    this.setState({
      display: finalFruitNum ? 'show': 'hide',
      FruitNum: finalFruitNum ? finalFruitNum : 0,
      totalFruitPrice: totalFruitPrice,
      calNum: finalFruitNum
    })
  };

  handleList = (FruitNum) => {
    console.log(FruitNum)

  }

  render() {
    const { display, FruitNum, totalFruitPrice, calNum } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <Hw22ShopCarItem Fruit="橘子" Price="20" FruitNum={FruitNum} onItemhandle={this.handleItem.bind(this)} />
              <Hw22ShopCarItem Fruit="蓮霧" Price="30" FruitNum={FruitNum} onItemhandle={this.handleItem.bind(this)} />
              <Hw22ShopCarItem Fruit="哈密瓜" Price="40" FruitNum={FruitNum} onItemhandle={this.handleItem.bind(this)} />
              <Hw22ShopCarItem Fruit="蘋果" Price="50" FruitNum={FruitNum} onItemhandle={this.handleItem.bind(this)} />
              <Hw22ShopCarItem Fruit="葡萄柚" Price="15" FruitNum={FruitNum} onItemhandle={this.handleItem.bind(this)} />
            </div>
          </div>
          <div className="col-sm-4">
            <ul>
              <Hw22List Fruit="橘子" totalFruitPrice={totalFruitPrice}  FruitNum={FruitNum} display={display} onListhandle={this.handleList.bind(this)} />
              <Hw22List Fruit="蓮霧" totalFruitPrice={totalFruitPrice}  FruitNum={FruitNum} display={display} onListhandle={this.handleList.bind(this)} />
              <Hw22List Fruit="哈密瓜" totalFruitPrice={totalFruitPrice}  FruitNum={FruitNum} display={display} onListhandle={this.handleList.bind(this)} />
              <Hw22List Fruit="蘋果" totalFruitPrice={totalFruitPrice}  FruitNum={FruitNum} display={display} onListhandle={this.handleList.bind(this)} />
              <Hw22List Fruit="葡萄柚" totalFruitPrice={totalFruitPrice}  FruitNum={FruitNum} display={display} onListhandle={this.handleList.bind(this)} />
              <li>=======================</li>
              <li>總計：$</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
