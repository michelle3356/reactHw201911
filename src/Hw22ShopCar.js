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
      id: ''
    }
  };

  handleItem = (FruitNum, Price, id) => {
    let finalFruitNum = parseInt(this.state.FruitNum) + parseInt(FruitNum);
    let totalFruitPrice = Price * finalFruitNum;
    let fid = id
    this.setState({
      display: finalFruitNum ? 'show': 'hide',
      FruitNum: finalFruitNum ? finalFruitNum : 0,
      totalFruitPrice: totalFruitPrice,
      id: fid
    })
  };

  handleList = (FruitNum) => {
    let delOne = FruitNum - 1;
    this.setState({
      FruitNum: delOne > 0 ? delOne : 0,
      display: delOne > 0 ? 'show': 'hide'
    })
  };

  handleClear = (FruitNum) => {
    this.setState({
      display: this.state.display==='show' ? 'hide' : 'show',
      FruitNum: 0
    })
  }

  render() {
    const { display, FruitNum, totalFruitPrice, id } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <Hw22ShopCarItem Fruit="橘子" Price="20" FruitNum={FruitNum} id="0" onItemhandle={this.handleItem.bind(this)} />
              <Hw22ShopCarItem Fruit="蓮霧" Price="30" FruitNum={FruitNum} id="1" onItemhandle={this.handleItem.bind(this)} />
              <Hw22ShopCarItem Fruit="哈密瓜" Price="40" FruitNum={FruitNum} id="2" onItemhandle={this.handleItem.bind(this)} />
              <Hw22ShopCarItem Fruit="蘋果" Price="50" FruitNum={FruitNum} id="3" onItemhandle={this.handleItem.bind(this)} />
              <Hw22ShopCarItem Fruit="葡萄柚" Price="15" FruitNum={FruitNum} id="4" onItemhandle={this.handleItem.bind(this)} />
            </div>
          </div>
          <div className="col-sm-4">
            <ul>
              <Hw22List Fruit="橘子" totalFruitPrice={totalFruitPrice}  id="0" FruitNum={FruitNum} display={display} onListhandle={this.handleList.bind(this, id)} onClearhandle={this.handleClear.bind(this)} />
              <Hw22List Fruit="蓮霧" totalFruitPrice={totalFruitPrice}  id="1" FruitNum={FruitNum} display={display} onListhandle={this.handleList.bind(this, id)} onClearhandle={this.handleClear.bind(this)} />
              <Hw22List Fruit="哈密瓜" totalFruitPrice={totalFruitPrice}  id="2" FruitNum={FruitNum} display={display} onListhandle={this.handleList.bind(this, id)} onClearhandle={this.handleClear.bind(this)} />
              <Hw22List Fruit="蘋果" totalFruitPrice={totalFruitPrice}  id="3" FruitNum={FruitNum} display={display} onListhandle={this.handleList.bind(this, id)} onClearhandle={this.handleClear.bind(this)} />
              <Hw22List Fruit="葡萄柚" totalFruitPrice={totalFruitPrice}  id="4" FruitNum={FruitNum} display={display} onListhandle={this.handleList.bind(this, id)} onClearhandle={this.handleClear.bind(this)} />
              <li>=======================</li>
              <li>總計：${FruitNum * totalFruitPrice}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
