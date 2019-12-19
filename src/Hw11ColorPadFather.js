import React, { Component } from 'react'
import './HwElevenCss.css';
import HwElevenColorPadSon from './Hw11ColorPadSon';

export default class HwElevenColorPadFather extends Component {
  constructor(props){
    super(props);
    this.state={
      r: 0,
      g: 0,
      b: 0
    }
  }
  render() {
    const number = this.state.number;
    const r = this.state.r;
    const g = this.state.g;
    const b = this.state.b;
    
    return (
      <div>
      <h1>調色盤</h1>
      <h3>input type="range" 可以做出像拉桿一樣的東西</h3>
      <HwElevenColorPadSon color="r" />
      <HwElevenColorPadSon color="g" />
      <HwElevenColorPadSon color="b" />
      <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`,width: 100,height: 100}}></div>
      </div>
      )
    }
  }