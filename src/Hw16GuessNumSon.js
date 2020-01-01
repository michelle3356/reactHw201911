import React, { Component } from 'react'

export default class Hw16GuessNumSon extends Component {
  render() {
    const rightWrong = this.props.rightWrong;
    return (
      <div>
        <h2>答對：{rightWrong}</h2>
        <h2>答錯：{rightWrong}</h2>
      </div>
    )
  }
}
