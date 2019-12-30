import React, { Component } from 'react'
import Hw15LCSon from './Hw15LCSon';

function convertLength(lengthNum, convert){
  const input = parseFloat(lengthNum);
  if(Number.isNaN(input)){
    return '';
  }
  const rounded = Math.round(input * 1000) / 1000;
  return rounded.toString();
}

const MM2MM = 1;
const MM2CM = 10;
const MM2M =  1000;
const MM2KM = 1000000;

export default class Hw15LengthConversion extends Component {
  constructor(props){
    super(props);
    this.state = {
      lengthNumMM: 0,
    }
  }

  handleChange = (LENUNIT, lengthNum) => {
    // lengthNum就是子層的e.target.value
    this.setState({
      lengthNumMM: lengthNum * LENUNIT
    });
  }

  // handleMMChange = (lengthNumMM) => {
  //   console.warn(lengthNumMM);
  //   this.setState({
  //     lengthNumMM
  //   })
  // }

  // handleCMChange = (lengthNumCM) => {
  //   console.warn(lengthNumCM);
  //   this.setState({
  //     lengthNumMM: lengthNumCM * MM2CM
  //   })
  // }

  // handleMChange = (lengthNumM) => {
  //   console.warn(lengthNumM);
  //   this.setState({
  //     lengthNumMM: lengthNumM * MM2M
  //   })
  // }

  // handleKMChange = (lengthNumKM) => {
  //   console.warn(lengthNumKM);
  //   this.setState({
  //     lengthNumMM: lengthNumKM * MM2KM
  //   })
  // }

  render() {
    const { lengthNumMM } = this.state;

    // let obj = {
    //   a: 'A',
    //   b: 'B',
    //   c: {
    //     cc: "CC"
    //   }
    // }

    // let { a, b, c: { cc } } = obj;

    // handleClick(({ target : { value }})) = {
    //   this.setState({
    //     value
    //   })
    // }gt

    return (
      <div>
      <h1>長度轉換</h1>
      <Hw15LCSon
        length="mm"
        onLengthTrans={this.handleChange.bind(this, MM2MM)}
        lengthNum={convertLength(lengthNumMM)} />
      <Hw15LCSon
        length="cm"
        onLengthTrans={this.handleChange.bind(this, MM2CM)}
        lengthNum={convertLength(lengthNumMM / MM2CM)} />
      <Hw15LCSon
        length="m"
        onLengthTrans={this.handleChange.bind(this, MM2M)}
        lengthNum={convertLength(lengthNumMM / MM2M)} />
      <Hw15LCSon
        length="km"
        onLengthTrans={this.handleChange.bind(this, MM2KM)}
        lengthNum={convertLength(lengthNumMM / MM2KM)} />
      </div>
    )
  }
}
