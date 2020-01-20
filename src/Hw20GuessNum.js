import React, { Component } from 'react'
import rightShow from './Hw20.css'
export default class Hw20GuessNum extends Component {
  constructor(props){
    super(props);
    this.state = ({
      ans: Math.floor(Math.random() * 1000),
      left: 1,
      right: 1000,
      display: 'hide'
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.state.value;
    const ans = this.state.ans;
    if(value < ans){
      this.setState({
        left: value
      })
    }else if(value > ans){
      this.setState({
        right: value
      })
    }else if(+value === +ans){
      this.setState({
        display: 'show'
      })
    }
  };

  // handleChange = ({target: {value}}) => {
  //   this.setState({
  //     value
  //   })
  // };
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      ans: Math.floor(Math.random() * 1000),
      display: 'hide',
      left: 1,
      right: 1000,
    })
  }

  render() {
    const ans = this.state.ans;
    const left = this.state.left;
    const right = this.state.right;
    const display = this.state.display;
    return (
      <div>
        <h1>現在範圍：{left}~{right}</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="text" 
        onChange={this.handleChange} />
        <button>submit</button>
        </form>
        <h1 className={display}>答對了！答案就是{ans}</h1>
        <button onClick={this.handleClick} className={display}>重新一局！</button>
      </div>
    )
  }
}
