import React, { Component } from 'react'

const lengthUnit = {
  mm: 'mm',
  cm: 'cm',
  m: 'm',
  km: 'km'
}

export default class Hw15LCSon extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.props.onLengthTrans(e.target.value)
  }

  render() {
    const lengthNum = this.props.lengthNum;
    const length = this.props.length;
    return (
      <div>
        <input type = "text"
        value = {lengthNum}
        onChange = {this.handleChange} />
        <span>{lengthUnit[length]}</span>
      </div>
    )
  }
}
