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
// 因為 setState 它不會立刻改變 state，
// 而是透過 react 的內核去修改的，
// 也因為有這個 setState 的關係，才會重新觸發 render
// 所以 setState 不是立刻修改，而是「排程修改」
  handleChange = (e) => {
    let value = (e.target.value).replace(/\D/g,'')
    this.setState({
      inputValue: value
    })
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
