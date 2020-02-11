import React, { Component } from 'react'
import Hw22ShopCarItem from './Hw22ShopCarItem'
import Hw22List from './Hw22List'
export default class Hw22ShopCar extends Component {
  constructor(props){
    super(props);
    this.state = {
      Fruit: '',
      price: '',
      list:[]
    }
  };

  handleList = (listItem, addSum) => {
    let listOne = this.state.list;
    listOne.push(listItem);
    console.warn(addSum)
    this.setState({
      list: listOne
    })
    console.warn(this.state.list)
  };


  render() {
    const FruitListdata = this.state.list.map((item, index) =>
      <li key={index}>{item.addSum}</li>
    )
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <Hw22ShopCarItem Fruit="橘子" Price="20" onListhandle={this.handleList} />
              <Hw22ShopCarItem Fruit="蓮霧" Price="30" onListhandle={this.handleList} />
              <Hw22ShopCarItem Fruit="哈密瓜" Price="40" onListhandle={this.handleList} />
              <Hw22ShopCarItem Fruit="蘋果" Price="50" onListhandle={this.handleList} />
              <Hw22ShopCarItem Fruit="葡萄柚" Price="15" onListhandle={this.handleList} />
            </div>
          </div>
          <div className="col-sm-4">
            <ul>
            {FruitListdata}
              <Hw22List />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
