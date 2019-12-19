import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      sum : 0,
    }
  }
  handleClick = (event) => {
    var value = parseInt(event.target.value);
    this.setState({
      sum : this.state.sum + value,
    })
  }
  render() {
    return (
      <div>
      <h1>加總按下的數字</h1>
      <button onClick={this.handleClick.bind(this)} value="1">1</button>
      <button onClick={this.handleClick.bind(this)} value="2">2</button>
      <button onClick={this.handleClick.bind(this)} value="3">3</button>
      <button onClick={this.handleClick.bind(this)} value="4">4</button>
      <button onClick={this.handleClick.bind(this)} value="5">5</button>
      <button onClick={this.handleClick.bind(this)} value="6">6</button>
      <button onClick={this.handleClick.bind(this)} value="7">7</button>
      <button onClick={this.handleClick.bind(this)} value="8">8</button>
      <button onClick={this.handleClick.bind(this)} value="9">9</button>
      <h2>{this.state.sum}</h2>
      </div>
    )
  }
}