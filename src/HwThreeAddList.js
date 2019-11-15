import React, { Component } from 'react'

export default class HwThreeAddList extends Component {
  constructor(props){
    super(props);
    this.state={
      number: 0,
      total:2
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick=(event)=>{
    let number = this.state.number;
    for(let i=0;i<this.state.total;i++){
      number = number+i;
    }
    this.setState({
      number: number,
      total:number
    })
  }
  render() {
    return (
      <div>
        <h1>+1,+2...+n</h1>
        <button value="" onClick={this.handleClick}>Click number add</button>
        <ul>
          {this.state.number}
        </ul>
      </div>
    )
  }
}
