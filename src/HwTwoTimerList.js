import React, { Component } from 'react'

export default class HwTwoTimerList extends Component {
  constructor(props){
    super(props);
    this.state = {number: 1};
    this.list =[];
    const list = this.number.map((number) =>
     <li>{number}</li>
    );
  };

  handleSubmit = (event) => {
    this.setState({
      number : this.state.number + 1
    })
    event.preventDefault();
  };
/* <li>{this.state.number}</li> */
  render() {
    return (
      <div>
        <h1>HW2CounterList</h1>
        <button value="submit" onSubmit={this.handleSubmit}></button>
          <ul>
            {this.number}
          </ul>
      </div>
    )
  }
}
