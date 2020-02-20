import React, { Component } from 'react'
import './Hw24Lottery.css'

export default class Hw24LotteryInput extends Component {
  constructor(props){
    super(props);
    this.state = ({
      inputValue: ''
    })
  };
  
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
    console.warn((e.target.value))
    console.log((this.state.inputValue))

    //這裡傳出去的e.target.value只抓得到輸入的第一位數
    this.props.onInput(e.target.value)
  }


  render() {
    const inputValue = this.state.inputValue;
    return (
        <input 
          type="text"
          maxLength="2"
          className="inputNum"
          value={inputValue}
          onChange={this.handleChange.bind(this)}
        />
    )
  }
}
