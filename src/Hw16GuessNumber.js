import React, { Component } from 'react';
import Hw16GuessNumSon from './Hw16GuessNumSon'

export default class Hw16GuessNumber extends Component {
  constructor(props){
    super(props);
    const random = Math.round(Math.random(0,8)*10)
    this.state = {
      random: random,
      guessNum: '',
      rightWrong: 0
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
  }
  render() {
    const guessNum = this.state.guessNum;
    const random = this.state.random;
    const rightWrong = this.state.rightWrong;
    return (
      <div>
        隨機產生 0 ~ 9 的數字，使用者於輸入格內輸入數字，統計正確與錯誤的數量
        <h1>{random}</h1>
        <input type="text"
        value={guessNum}
        onChange={this.handleChange}  />
        <Hw16GuessNumSon rightWrong={rightWrong} />
      </div>
    )
  }
}
