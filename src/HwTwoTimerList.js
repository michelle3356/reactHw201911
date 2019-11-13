import React, { Component } from 'react'

export default class HwTwoTimerList extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 1,
      list:[]
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick = (event) => {

    let list = this.state.list;
    list.push(this.state.number);
    this.setState({
      number : this.state.number + 1,
      list: list
    })
    console.log(this)
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>HW2CounterList</h1>

        {/* 這邊，因為不是用 onSubmit, 按鈕不會有 onSubmit事件 */}
        {/* 你應該用 onClick 事件… */}
        <button value="submit" onClick={this.handleClick}>Submit</button>
          <ul>
            {this.state.list.map(item=>
            <li key={item}>{item}</li>
            )}
          </ul>
      </div>
    )
  }
}
