import React, { Component } from 'react'
import Hw22ShopCarItem from './Hw22ShopCarItem'
import Hw22List from './Hw22List'
export default class Hw22ShopCar extends Component {
  constructor(props){
    super(props);
    this.state = {
      totalFruitPrice: 0,
      fruitNum: {
        original: 0,
        flow: 0,
        ha: 0,
        apple:  0,
        purple:  0,
      }
    }
  };

  // 更改水果數量
  handleItem = (FruitNum, id) => {
    let { fruitNum } = this.state;
    fruitNum[id] = FruitNum + fruitNum[id];
    this.setState({
      fruitNum: fruitNum
    });
  };

  handleList = (id, FruitNum) => {
    console.log(FruitNum)
    let { fruitNum } = this.state;
    fruitNum[id] = FruitNum - 1;
    this.setState({
      FruitNum: fruitNum
    })
  };

  handleClear = () => {
    this.setState({
      fruitNum: {
        original: 0,
        flow: 0,
        ha: 0,
        apple:  0,
        purple:  0,
      }
    })
  }

  render() {
    const { fruitNum } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <Hw22ShopCarItem Fruit="橘子" Price="20" FruitNum={fruitNum.original} id="original" onItemhandle={this.handleItem.bind(this)} />
              <Hw22ShopCarItem Fruit="蓮霧" Price="30" FruitNum={fruitNum.flow} id="flow" onItemhandle={this.handleItem.bind(this)} />
              <Hw22ShopCarItem Fruit="哈密瓜" Price="40" FruitNum={fruitNum.ha} id="ha" onItemhandle={this.handleItem.bind(this)} />
              <Hw22ShopCarItem Fruit="蘋果" Price="50" FruitNum={fruitNum.apple} id="apple" onItemhandle={this.handleItem.bind(this)} />
              <Hw22ShopCarItem Fruit="葡萄柚" Price="15" FruitNum={fruitNum.purple} id="purple" onItemhandle={this.handleItem.bind(this)} />
            </div>
          </div>
          <div className="col-sm-4">
            <ul>
              {fruitNum.original > 0 && <Hw22List Fruit="橘子" totalFruitPrice={20 * fruitNum.original}  id="original" FruitNum={fruitNum.original} onListhandle={this.handleList.bind(this, "original")} onClearhandle={this.handleClear.bind(this)} />}
              {fruitNum.flow > 0 && <Hw22List Fruit="蓮霧" totalFruitPrice={30 * fruitNum.flow}  id="flow" FruitNum={fruitNum.flow} onListhandle={this.handleList.bind(this, "flow")} onClearhandle={this.handleClear.bind(this)} />}
              {fruitNum.ha > 0 && <Hw22List Fruit="哈密瓜" totalFruitPrice={40 * fruitNum.ha}  id="ha" FruitNum={fruitNum.ha} onListhandle={this.handleList.bind(this, "ha")} onClearhandle={this.handleClear.bind(this)} />}
              {fruitNum.apple > 0 && <Hw22List Fruit="蘋果" totalFruitPrice={50 * fruitNum.apple}  id="apple" FruitNum={fruitNum.apple} onListhandle={this.handleList.bind(this, "apple")} onClearhandle={this.handleClear.bind(this)} />}
              {fruitNum.purple > 0 && <Hw22List Fruit="葡萄柚" totalFruitPrice={15 * fruitNum.purple}  id="purple" FruitNum={fruitNum.purple} onListhandle={this.handleList.bind(this, "purple")} onClearhandle={this.handleClear.bind(this)} />}
              <li>=======================</li>
              <li>總計：${
                20 * fruitNum.original +
                30 * fruitNum.flow +
                40 * fruitNum.ha +
                50 * fruitNum.apple +
                15 * fruitNum.purple
              }</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
