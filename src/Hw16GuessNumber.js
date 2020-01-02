import React, { Component } from 'react';
import Hw16GuessNumSon from './Hw16GuessNumSon'

const random = Math.round(Math.random()*10)
export default class Hw16GuessNumber extends Component {
  constructor(props){
    super(props);
    this.state = {
      random: random,
      guessNum: '',
      rightWrong:'right',
      tru: 0,
      error: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const guessInput = e.target.value;
    // console.log(guessInput)
    // console.log(this.state.random)
    if(+guessInput === +this.state.random){
      this.setState({
        tru: this.state.tru + 1,
        random: Math.round(Math.random()*10)
      });
    }else{
      this.setState({
        error: this.state.error + 1,
        random: Math.round(Math.random()*10)
      })
    }
  }
  render() {
    const random = this.state.random;
    const guessNum = this.state.guessNum;
    const tru = this.state.tru;
    const error = this.state.error;
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
