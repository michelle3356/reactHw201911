import React, { Component } from 'react'

//不重複的四個數字
function isAns(){
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  arr.sort(function(){
    return Math.random() - 0.5;
  });
  return arr.slice(0,4).join("");
};

//驗證輸入數字是否符合規格
function isValid(inputNum){
  if(inputNum.length <= 4 && !isNaN(inputNum)){
    for(var i = 0; i < 4; i++){
      if(inputNum[i] !== inputNum[i+1]){
        checkAB(inputNum)
        return inputNum;
      }else{
        alert("輸入數字不可重複")
      }
    }
  }else{
    alert("格式不正確")
  }
};

//判斷幾Ａ幾Ｂ
function checkAB(inputNum){
  var arr;
  var aNum = 0;
  var bNum = 0;
  const list = [];
  isAns();
  
  for(var i = 0; i < 4; i++){
    inputNum = inputNum.substring(i, i+1);
    for(var j = 0; j < 4; j++){
      var ans = arr.substring(j, j+1)
      if(inputNum === ans){
        if(i === j){
          aNum++
        }else{
          bNum++
        }
      }
    }
  }
  list.push(inputNum + ':' + aNum + 'A' + bNum + 'B')
}

export default class Hw21AorBGuessNum extends Component {
  constructor(props){
    super(props);
    this.state = ({
      arr: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      list: []
    });
    }
  
  handleChange = (e) => {
    this.setState({
      inputNum: e.target.value
    })
  };

  handleClick = (e) => {
    const inputNum = this.state.inputNum;
    const list = this.state.list;

    isValid(inputNum);
    
  };

  handleRestClick = (e) => {
    isAns()
    this.setState({
      list: [],
    })
  }
  render() {
    const list = this.state.list.map((item,index)=>
        <li key={index}>{item}</li>
      )
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
        <div>答對了！遊戲結束，你要重新一局嗎？
          <button onClick={this.handleRestClick}>好，重新一局！</button>
        </div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
