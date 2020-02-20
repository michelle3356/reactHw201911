import React, { Component } from 'react'
import './Hw24Lottery.css'

export default class Hw24LotteryInput extends Component {
  constructor(props){
    super(props);
    this.state = ({
    })
  };
  
  handleChange = (e) => {
    this.props.onInput(e.target.value)
  }


  render() {
    const inputValue = this.props.inputValue;
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
