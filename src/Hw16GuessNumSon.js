import React, { Component } from 'react'

const tureError = {
  right: '答對',
  wrong: '答錯'
}
export default class Hw16GuessNumSon extends Component {
  render() {
    const rightWrong = this.props.rightWrong;
    const trueError = this.props.trueError;
    
    return (
      <div>
        <h2>{tureError[rightWrong]}{trueError}</h2>
      </div>
    )
  }
}
