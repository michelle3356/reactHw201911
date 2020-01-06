import React, { Component } from 'react'

function getRandom(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
};
export default class Hw17RandomNumber extends Component {
  constructor(props){
    super(props);
    this.state = ({
      randomTime: Math.floor(Math.random() * 10),
      ms: getRandom(500,1000)
    })
  };
  
  componentDidMount(){
    this.random = setInterval(
      () => this.callTime(),
      this.state.ms
    );
  }

  callTime(){
    this.setState({
      randomTime: Math.floor(Math.random() * 10),
      ms: getRandom(500,1000)
    })
  };

  render() {
    const randomTime = this.state.randomTime
    return (
      <div>
        <h2>請設定一個會隨機變化的數字(1~9)</h2>
        <h3>每次變的時間介於 500ms ~ 1000ms 之間</h3>
        <h1>{randomTime}</h1>
      </div>
    )
  }
}
