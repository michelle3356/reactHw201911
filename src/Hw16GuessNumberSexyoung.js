import React, { Component } from 'react';

const getRandom = () => {
  return Math.floor(Math.random() * 10);
}
export default class Hw16GuessNumber extends Component {
  constructor(props){
    super(props);
    this.state = {
      tru: 0,
      error: 0,
      random: getRandom(),
    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    const attr = +value === this.state.random ? 'tru': 'error'
    this.setState({
      random: getRandom(),
      [attr]: this.state[attr] + 1,
    });
  }
  render() {
    const {
      tru,
      error,
      random,
    } = this.state;
    return (
      <div>
        隨機產生 0 ~ 9 的數字，使用者於輸入格內輸入數字，統計正確與錯誤的數量
        <h1>{random}</h1>
        <input type="text"
          value=""
          onChange={this.handleChange}  />
          <h1>正確: {tru}</h1>
          <h1>錯誤: {error}</h1>
      </div>
    )
  }
}
