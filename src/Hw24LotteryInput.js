import React, { Component } from 'react'
import './Hw24Lottery.css'

export default class Hw24LotteryInput extends Component {
  constructor(props){
    super(props);
    this.state = ({
      inputValue: ''
    })
  };
  
  //在這裡設定不可以輸入數字以外的數值
  //不確定子層的判斷方式是否正確
  handleChange = (e) => {
    let inputValue = this.state.inputValue
    this.setState({
      inputValue: e.target.value.replace(/\D/g,'')
    })
    let value = (e.target.value).replace(/\D/g,'')
    this.props.onInput(value)
  }

  render() {
    let inputValue = this.state.inputValue;
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
