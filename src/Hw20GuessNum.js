import React, { Component } from 'react'

export default class Hw20GuessNum extends Component {
  constructor(props){
    super(props);
    this.state = ({
      ans: Math.floor(Math.random() * 1000),
      left: 1,
      right: 1000
    })
  }
  render() {
    const ans = this.state.ans;
    const left = this.state.left;
    const right = this.state.right;
    return (
      <div>
        <h1>現在範圍：{left}~{right}</h1>
        <input type="text" />
        <button>submit</button>
        <h1>答對了！答案就是{ans}</h1>
      </div>
    )
  }
}
