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
    this.props.onInput(this.state.inputValue)
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
