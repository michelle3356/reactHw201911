import React, { Component } from 'react'

export default class Hw19 extends Component {
  constructor(props){
    super(props);
    this.state = ({
      num: 'G',
    })
  }
  render() {
    const num = this.state.num;
    return (
      <div>
        <h1>打地鼠遊戲 Hit the gopher</h1>
        <div>
          <span>{num}</span>
          <span>{num}</span>
          <span>{num}</span>
        </div>
        <div>點擊G得1分，點擊減號扣分</div>
      </div>
      )
    }
  }