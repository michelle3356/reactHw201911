import React, { Component } from 'react'
import Hw22ShopCarItem from './Hw22ShopCarItem'
export default class Hw22ShopCar extends Component {
  constructor(props){
    super(props);
    this.state = {
      Fruit: '',
      price: ''
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <Hw22ShopCarItem Fruit="橘子" Price="20" />
              <Hw22ShopCarItem Fruit="蓮霧" Price="30" />
              <Hw22ShopCarItem Fruit="哈密瓜" Price="40" />
              <Hw22ShopCarItem Fruit="蘋果" Price="50" />
              <Hw22ShopCarItem Fruit="葡萄柚" Price="15" />
            </div>
          </div>
          <div className="col-sm-4">
            <ul>
              
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
