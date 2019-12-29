import React, { Component } from 'react'
import Hw15LCSon from './Hw15LCSon';

function toMM(lengthNum){
  return lengthNum / 10;   /* cm */
  return lengthNum / 1000;  /* m */
  return lengthNum / 1000000;  /* km */
}

function toCM(lengthNum){
  return lengthNum * 10;  /* mm */
  return lengthNum / 100;  /* m */
  return lengthNum / 1000000;  /* km */
}

function toM(lengthNum){
  return lengthNum * 1000;  /* mm */
  return lengthNum * 100;  /* cm */
  return lengthNum / 1000;  /* km */
}

function toKM(lengthNum){
  return lengthNum * 1000000;  /* mm */
  return lengthNum * 100000;  /* cm */
  return lengthNum * 1000;  /* m */
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
      lengthNum: 0,
      length: 'mm'
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
    const mmL = length === 'mm' ? convertLength(lengthNum, toMM) : lengthNum;
    const cmL = length === 'cm' ? convertLength(lengthNum, toCM) : lengthNum;
    const mL = length === 'm' ? convertLength(lengthNum, toM) : lengthNum;
    const kmL = length === 'km' ? convertLength(lengthNum, toKM) : lengthNum;
    return (
      <div>
      <h1>長度轉換</h1>
      <Hw15LCSon
      length="mm"
      onLengthTrans = {this.handleMMChange}
      lengthNum = {mmL} />
      <Hw15LCSon
      length="cm"
      onLengthTrans = {this.handleCMChange}
      lengthNum = {cmL} />
      <Hw15LCSon
      length="m"
      onLengthTrans = {this.handleMChange}
      lengthNum = {mL} />
      <Hw15LCSon
      length="km"
      onLengthTrans = {this.handleKMChange}
      lengthNum = {kmL} />
      </div>
    )
  }
}
