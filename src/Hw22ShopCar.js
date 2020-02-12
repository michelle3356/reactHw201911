import React, { Component } from 'react'
import Hw22ShopCarItem from './Hw22ShopCarItem'
import Hw22List from './Hw22List'
export default class Hw22ShopCar extends Component {
  constructor(props){
    super(props);
    this.state = {
      Fruit: '',
      price: '',
      list:[],
      number: 0,
      totalPrice: 0,
      display: 'hide'
    }
    
  };

  handleList = (number, totalPrice) => {
    this.setState({
      number: number,
      totalPrice: totalPrice,
      display: number ? 'show': 'hide'
    })

  };


  render() {
    const { number , totalPrice, display } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <Hw22ShopCarItem Fruit="橘子" Price="20" onListhandle={this.handleList.bind(this)} />
              <Hw22ShopCarItem Fruit="蓮霧" Price="30" onListhandle={this.handleList.bind(this)} />
              <Hw22ShopCarItem Fruit="哈密瓜" Price="40" onListhandle={this.handleList.bind(this)} />
              <Hw22ShopCarItem Fruit="蘋果" Price="50" onListhandle={this.handleList.bind(this)} />
              <Hw22ShopCarItem Fruit="葡萄柚" Price="15" onListhandle={this.handleList.bind(this)} />
            </div>
          </div>
          <div className="col-sm-4">
            <ul>
              <Hw22List Fruit="橘子" totalPrice={totalPrice}  number={number} display={display} />
              <Hw22List Fruit="蓮霧" totalPrice={totalPrice}  number={number} display={display} />
              <Hw22List Fruit="哈密瓜" totalPrice={totalPrice}  number={number} display={display} />
              <Hw22List Fruit="蘋果" totalPrice={totalPrice}  number={number} display={display} />
              <Hw22List Fruit="葡萄柚" totalPrice={totalPrice}  number={number} display={display} />
              <li>=======================</li>
              <li>總計：$</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
