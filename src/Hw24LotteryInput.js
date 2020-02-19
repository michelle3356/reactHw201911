import React, { Component } from 'react'
import './Hw24Lottery.css'

export default class Hw24LotteryInput extends Component {
  render() {
    return (
      <div className="numberList">
        <input type="text"
            maxLength="2"
            className="inputNum" />
        <input type="text"
          maxLength="2"
          className="inputNum" />
        <input type="text"
          maxLength="2"
          className="inputNum" />
        <input type="text"
          maxLength="2"
          className="inputNum" />
        <input type="text"
          maxLength="2"
          className="inputNum" />
        <input type="text"
          maxLength="2"
          className="inputNum" />
      </div>
    )
  }
}
