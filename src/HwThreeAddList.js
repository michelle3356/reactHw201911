import React, { Component } from 'react'

export default class HwThreeAddList extends Component {
  constructor(props){
    super(props);
    /**
     * 如果我猜得沒錯，你 number 應該就是在計數的對吧，就是 1, 2, 3 .... n 這樣一直算下去的
     * 而你的 total 是把每次的 number 加總用的，對吧？
     */
    this.state={
      number: 0,
      total:2
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * 妳似乎沒用到 event，那就可以拿掉
   */
  handleClick=(event)=>{
    let number = this.state.number;

    /**
     * 這邊有一個非常錯誤的觀念，加總的動作只會把目前當下的 total 與 當下的 number 累加，然後再放進 total
     * 所以是不需要跑迴圈的
     */
    for(let i=0;i<this.state.total;i++){
      number = number+i;
    }

    /**
     * number 也放進 total? 不對吧？ 要放的應該是 舊total + number 才對吧？
     */
    this.setState({
      number: number,
      total:number
    })
  }
  render() {
    return (
      <div>
        <h1>+1,+2...+n</h1>
        <button value="" onClick={this.handleClick}>Click number add</button>
        <ul>
          {this.state.number}
        </ul>
      </div>
    )
  }
}
