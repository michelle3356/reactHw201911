import React, { Component } from 'react'
import Hw10DollarsTransSon from './Hw10DollarsTransSon.js';

function toTWD(USD) {
  return USD / 30;
}

function toUSD(TWD) {
  return TWD * 30;
}

function convert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
export default class Hw10DollarsTrans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      dollar: 't'
    }
  }

  /** 你使用了以下2個function 卻沒定義，所以會出錯 */
  handletoTWDChange = (number) => {
    console.warn(number);
    this.setState({
      dollar: 'a', number
    })
  }

  handletoUSDChange = (number) => {
    console.warn(number);
    this.setState({
      dollar: 't', number
    })
  }

  render() {
    const number = this.state.number;
    const dollar = this.state.dollar;
    const twd = dollar === 't' ? convert(number, toUSD) : number;
    const usd = dollar === 'a' ? convert(number, toTWD) : number;
    return (
      <div>
        <h1>台幣(TWD) 與 美金(USD) 轉換</h1>
        <div>於台幣格 與 美金格 任意輸入數字，即可造成另一邊自動轉換</div>
        <div>1美金 = 30 台幣</div>
        <Hw10DollarsTransSon
          dollar="t"
          onDollarsTrans={this.handletoTWDChange}
          number={twd} />
        <Hw10DollarsTransSon dollar="a"
          onDollarsTrans={this.handletoUSDChange}
          number={usd} />
      </div>
    )
  }
}