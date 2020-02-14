import React, { Component } from 'react'
import './Hw22.css'
export default class Hw22ShopCarItem extends Component {
// 1. 顯示水果名 與價格
// 2. 輸入數量
// 3. 將輸入的數量送至右邊的清單
  constructor(props){
    super(props);
    this.state = {
      FruitNum: this.props.FruitNum,
      id: this.props.id
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.warn(this.props.id)
    let FruitNum = this.state.FruitNum
    let id = this.state.id
    this.setState({
      FruitNum: FruitNum,
      id: id
    });
    this.props.onItemhandle(FruitNum , id);
  }

  handleChange = (e) => {
    this.setState({
      FruitNum: e.target.value
    })
  }
  render() {
    const { Fruit, Price, id } = this.props;
    const { FruitNum } = this.state;
    return (
      <div className="col-sm-3">
        <div className="Fruit">
          <div>{Fruit}</div>
          <div>${Price}</div>
          <form className={id} onSubmit={this.handleSubmit.bind(this)}>
            <input type="number" 
            placeholder="數量" 
            onChange = {this.handleChange}
            value={FruitNum} />
            <button className="btn btn-primary">Add to cart</button>
          </form>
        </div>
      </div>
    )
  }
}
