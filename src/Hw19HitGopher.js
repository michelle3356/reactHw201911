import React, { Component } from 'react'
import Hw19GopherSon from './Hw19GopherSon'

export default class Hw19 extends Component {
  constructor(props){
    super(props);
    this.state = ({
      num: 'G',
      score: 0
    })
  };

  componentDidMount(){
    this.random = setInterval(
      () => this.changNum(),
      Math.floor(Math.random() * 9000)
    );
  };

  changNum(){
    if(this.state.num === 'G'){
      this.setState({
        num: '-'
      })
    }else{
      this.setState({
        num: 'G'
      })
    }
  };

  hitScore = (scoreNum) => {
    this.setState({
      score: this.state.score + scoreNum
    })
  }

  render() {
    const num = this.state.num;
    const score = this.state.score;
    return (
      <div>
        <h1>打地鼠遊戲 Hit the gopher</h1>
        <h1>分數：{score}</h1>
        <Hw19GopherSon hitScore={this.hitScore} num={num}/>
        <Hw19GopherSon hitScore={this.hitScore} num={num}/>
        <Hw19GopherSon hitScore={this.hitScore} num={num}/>
        <br></br>
        <Hw19GopherSon hitScore={this.hitScore} num={num}/>
        <Hw19GopherSon hitScore={this.hitScore} num={num}/>
        <Hw19GopherSon hitScore={this.hitScore} num={num}/>
        <br></br>
        <Hw19GopherSon hitScore={this.hitScore} num={num}/>
        <Hw19GopherSon hitScore={this.hitScore} num={num}/>
        <Hw19GopherSon hitScore={this.hitScore} num={num}/>
        <div>點擊G得1分，點擊減號扣分</div>
      </div>
      )
    }
  }