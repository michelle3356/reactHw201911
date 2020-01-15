import React, { Component } from 'react';
import Hw19GopherSon from './Hw19GopherSon';

export default class Hw19 extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0
    }
  };

  hitScore = (scoreNum) => {
    this.setState({
      score: this.state.score + scoreNum
    })
  }

  render() {
    const { score } = this.state;
    return (
      <div>
        <h1>打地鼠遊戲 Hit the gopher</h1>
        <h1>分數：{score}</h1>
        <Hw19GopherSon hitScore={this.hitScore} />
        <Hw19GopherSon hitScore={this.hitScore} />
        <Hw19GopherSon hitScore={this.hitScore} />
        <br></br>
        <Hw19GopherSon hitScore={this.hitScore} />
        <Hw19GopherSon hitScore={this.hitScore} />
        <Hw19GopherSon hitScore={this.hitScore} />
        <br></br>
        <Hw19GopherSon hitScore={this.hitScore} />
        <Hw19GopherSon hitScore={this.hitScore} />
        <Hw19GopherSon hitScore={this.hitScore} />
        <div>點擊G得1分，點擊減號扣分</div>
      </div>
      )
    }
  }