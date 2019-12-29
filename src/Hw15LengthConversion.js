import React, { Component } from 'react'
import Hw15LCSon from './Hw15LCSon';

export default class Hw15LengthConversion extends Component {
  constructor(props){
    super(props);
    this.state = {
      lengthNum: "",
    }
  }

  handleMMChange = (value) => {
    console.warn(value);
    // this.setState({
    //   lengthNum: value.target.value
    // })
  }

  handleCMChange = (value) => {
    console.warn(value);
    // this.setState({
    //   lengthNum: value.target.value
    // })
  }

  handleMChange = (value) => {
    console.warn(value);
    // this.setState({
    //   lengthNum: value.target.value
    // })
  }

  handleKMChange = (value) => {
    console.warn(value);
    // this.setState({
    //   lengthNum: value.target.value
    // })
  }

  render() {
    const lengthNum = this.state.lengthNum;
    return (
      <div>
      <h1>長度轉換</h1>
      <Hw15LCSon
      length="mm"
      onLengthTrans = {this.handleMMChange}
      lengthNum = {lengthNum} />
      <Hw15LCSon
      length="cm"
      onLengthTrans = {this.handleCMChange}
      lengthNum = {lengthNum} />
      <Hw15LCSon
      length="m"
      onLengthTrans = {this.handleMChange}
      lengthNum = {lengthNum} />
      <Hw15LCSon
      length="km"
      onLengthTrans = {this.handleKMChange}
      lengthNum = {lengthNum} />
      </div>
    )
  }
}
