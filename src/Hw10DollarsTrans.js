import React, { Component } from 'react'
import Hw10DollarsTransSon from './Hw10DollarsTransSon.js';

export default class Hw10DollarsTrans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
    }
  }

  /** 你使用了以下2個function 卻沒定義，所以會出錯 */
  handletoTWDChange = (value) => {
    console.warn(value);
    this.setState({
      number: value * 30
    })
  }

  handletoUSDChange = (value) => {
    console.warn(value);
    this.setState({
      number: value / 30
    })
  }

  render() {
    const number = this.state.number;
    return (
      <div>
        <h1>台幣(TWD) 與 美金(USD) 轉換</h1>
        <div>於台幣格 與 美金格 任意輸入數字，即可造成另一邊自動轉換</div>
        <div>1美金 = 30 台幣</div>
        <Hw10DollarsTransSon
          dollar="t"
          onDollarsTrans={this.handletoTWDChange}
          value={number} />
        <Hw10DollarsTransSon dollar="a"
          onDollarsTrans={this.handletoUSDChange}
          value={number} />
      </div>
    )
  }
}