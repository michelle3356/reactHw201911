import React, { Component } from 'react'



export default class HwOneTimer extends Component {
    constructor(props){
      super(props);
      this.state = {number: 1};
    }

  handleClick = (event) => {
    this.setState({
      number : this.state.number + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.handleClick}>Counter：{this.state.number}</button>
      </div>
    )
  }
}
