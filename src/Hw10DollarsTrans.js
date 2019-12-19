import React, { Component } from 'react'
import HwTenDollarsTransSon from './Hw10DollarsTransSon.js/index.js';

export default class HwTenDollarsTrans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
    }
  }

  /** 你使用了以下2個function 卻沒定義，所以會出錯 */
  handletoTWDChange = (value) => {
    console.warn(value);
  }

  handletoUSDChange = (value) => {
    console.warn(value);
  }

  render() {
    const number = this.state.number;
    return (
      <div>
        <h1>台幣(TWD) 與 美金(USD) 轉換</h1>
        <div>於台幣格 與 美金格 任意輸入數字，即可造成另一邊自動轉換</div>
        <div>1美金 = 30 台幣</div>
        <HwTenDollarsTransSon
          dollar="t"
          onDollarsTrans={this.handletoTWDChange} />
        <HwTenDollarsTransSon dollar="a"
          onDollarsTrans={this.handletoUSDChange} />
      </div>
    )
  }
}