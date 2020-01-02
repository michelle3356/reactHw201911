import React, { Component } from 'react';
import Hw16GuessNumSon from './Hw16GuessNumSon'

function toright(tru){
  return tru + 1;
}

function towrong(error){
  return error + 1;
}

function guess(value, guess) {
  console.log(value, guess)
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = guess(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const random = Math.round(Math.random(0,8)*10)
export default class Hw16GuessNumber extends Component {
  constructor(props){
    super(props);
    this.state = {
      random: random,
      guessNum: '',
      rightWrong:'right'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      random: random,
    })
  }
  render() {
    const random = this.state.random;
    const guessNum = this.state.guessNum;
    const rightWrong = this.state.rightWrong;
    const tru = rightWrong === 'right' ? guess(guessNum, toright) : guessNum;
    const error = rightWrong === 'wrong' ? guess(guessNum, towrong) : guessNum;
    return (
      <div>
        隨機產生 0 ~ 9 的數字，使用者於輸入格內輸入數字，統計正確與錯誤的數量
        <h1>{random}</h1>
        <input type="text"
        value={guessNum}
        onChange={this.handleChange}  />
        <Hw16GuessNumSon rightWrong="right" trueError={tru} />
        <Hw16GuessNumSon rightWrong="wrong" trueError={error} />
      </div>
    )
  }
}
