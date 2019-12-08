import React, { Component } from 'react'
const squareCololr ={
  r:'Red',
  g:'Green',
  b:'Blue'
}

export default class HwElevenColorPadSon extends Component {
  constructor(props) {
    super(props);
    this.state={
      number: 0
    }
    this.handleChange = this.handleChange.bind(this);
  };
  
  handleChange = (event) => {
    this.setState({
      number: event.target.value
    })
  }
  render() {
    const color = this.props.color;
    const number = this.props.number;
    return (
      <div>
      <label>{squareCololr[color]}</label>
      <input
      type="range"
      min="0"
      max="255"
      step="1"
      value={number}
      onChange={this.handleChange.bind(this)}
      />
      </div>
      )
    }
  }