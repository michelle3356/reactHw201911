import React, { Component } from 'react'

export default class HwTwoTimerList extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 1,
      list:[]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit = (event) => {
    this.setState({
      number : this.state.number + 1,
      list: this.number.push()
    })
    console.log(this)
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>HW2CounterList</h1>
        <button value="submit" onSubmit={this.handleSubmit}>Submit</button>
          <ul>
            {this.state.list.map(item=>
            <li>{item}</li>
            )}
          </ul>
      </div>
    )
  }
}
