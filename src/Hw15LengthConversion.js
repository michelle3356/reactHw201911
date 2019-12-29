import React, { Component } from 'react'
import Hw15LCSon from './Hw15LCSon';

function toMM(lengthNum){
  return lengthNum / 100;
}

function toCM(lengthNum){
  return lengthNum / 100;
}

function toM(lengthNum){
  return lengthNum / 100;
}

function toKM(lengthNum){
  return lengthNum / 100;
}

function convertLength(lengthNum, convert){
  const input = parseFloat(lengthNum);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default class Hw15LengthConversion extends Component {
  constructor(props){
    super(props);
    this.state = {
      lengthNum: "",
      length: 'm'
    }
  }

  handleMMChange = (lengthNum) => {
    console.warn(lengthNum);
    this.setState({
      length: 'mm', lengthNum
    })
  }

  handleCMChange = (lengthNum) => {
    console.warn(lengthNum);
    this.setState({
      length: 'cm', lengthNum
    })
  }

  handleMChange = (lengthNum) => {
    console.warn(lengthNum);
    this.setState({
      length: 'm', lengthNum
    })
  }

  handleKMChange = (lengthNum) => {
    console.warn(lengthNum);
    this.setState({
      length: 'km', lengthNum
    })
  }

  render() {
    const lengthNum = this.state.lengthNum;
    const length = this.state.length;
    const mm = length = 'mm' ? convertLength(lengthNum, toMM) : lengthNum;
    const cm = length = 'cm' ? convertLength(lengthNum, toCM) : lengthNum;
    const m = length = 'm' ? convertLength(lengthNum, toM) : lengthNum;
    const km = length = 'km' ? convertLength(lengthNum, toKM) : lengthNum;
    return (
      <div>
      <h1>長度轉換</h1>
      <Hw15LCSon
      length="mm"
      onLengthTrans = {this.handleMMChange}
      lengthNum = {mm} />
      <Hw15LCSon
      length="cm"
      onLengthTrans = {this.handleCMChange}
      lengthNum = {cm} />
      <Hw15LCSon
      length="m"
      onLengthTrans = {this.handleMChange}
      lengthNum = {m} />
      <Hw15LCSon
      length="km"
      onLengthTrans = {this.handleKMChange}
      lengthNum = {km} />
      </div>
    )
  }
}
