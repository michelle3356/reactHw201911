import React, { Component } from 'react'

export default class Hw21AorBGuessNum extends Component {
  constructor(props){
    super(props);
    this.state = ({
      arr: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      newArr: [],
      num: Math.floor(Math.random() * 10)
    })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  handleClick = (e) => {
    const value = this.state.value;
    const newArr = this.state.newArr;
    const arr = this.state.arr;
    const num = this.state.njum;
    if(value.length <= 4){
      // console.log(value.split(""))
      console.log(arr[num])
      if((value.split("")).indexOf(arr[num]) === -1){
        console.log('？？？')
      }else{
        alert('輸入數字不可重複')
      }
    }else{
      alert('格式不正確')
    }
  };
  render() {
    return (
      <div>
        <h1>猜數字</h1>
        <ol>
          <li>一進到遊戲電腦隨機產生4位不重複數字</li>
          <li>使用者送出答案，若不符合「不重複4位數字」則跳錯誤訊息</li>
          <li>送出的答案跟正確答案比較，位置一樣則A，位置不同則B</li>
          <li>會累積過去猜過的答案與結果</li>
          <li>如果猜到 4A 則遊戲結束，並可以另開新局。</li>
        </ol>
        <input type="text" 
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Guess!</button>
      </div>
    )
  }
}
