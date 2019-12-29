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
    // this.handleToMMChange = this.handleToMMChange.bind(this);
    // this.handleToCMChange = this.handleToCMChange.bind(this);
    // this.handleToMChange = this.handleToMChange.bind(this);
    // this.handleToKMChange = this.handleToKMChange.bind(this);
    // this.state = ({
    //   lengthNum: ''
    // });
  }

  handleChange (e) {
    this.props.onLengthTrans(e.target.value)
  }

  // handleToMMChange = (lengthNum) => {
  //   this.setState({
  //     length:'mm', lengthNum
  //   })
  // }

  // handleToCMChange = (lengthNum) => {
  //   this.setState({
  //     length:'cm', lengthNum
  //   })
  // }

  // handleToMChange = (lengthNum) => {
  //   this.setState({
  //     length:'m', lengthNum
  //   })
  // }

  // handleToKMChange = (lengthNum) => {
  //   this.setState({
  //     length:'km', lengthNum
  //   })
  // }

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
