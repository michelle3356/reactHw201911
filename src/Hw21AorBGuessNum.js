import React, { Component } from 'react';
import './Hw21.css';
/**
 * 1. makeAns (valid)
 * 2. user input data
 * 3. validation user data, return step 2 if data is invalid
 * 4. makeAB
 * 5. append list
 * 6. if AB = 4A, end, else return step 2.
 */


//不重複的四個數字
function makeAns(){
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //sort是用來排列，a - b得到正數 和 b - a 得到負數，因此用Math.random() - 0.5可得到正數或負數
  arr.sort(function(a, b){
    return Math.random() - 0.5;
  });
  return arr.slice(0,4).join("");
};

//驗證輸入數字是否符合規格,只做驗證不做產生的動作！！
function isValid(inputNum){

  //正規表達式會用兩個斜線包在一起 => /正規表達式 /
  //digital代表數字的0-9，用 \d 代表，也可寫[0-9]{大括弧中代表幾位數}
  if(!/\d{4}/.test(inputNum)) return false;

  for(var i = 0; i < 4; i++){
    for(var j = i + 1; j < 4; j++) {
      if(inputNum[i] === inputNum[j]) return false;
    }
  }
  return true;
};

//判斷幾Ａ幾Ｂ
function checkAB(inputNum, ans){
  var aNum = 0;
  var bNum = 0;
  //length 依賴長度
  for(var i = 0; i < inputNum.length; i++){
    for(var j = 0; j < ans.length; j++){
      if(inputNum[i] === ans[j]){
        if(i === j) { aNum++; } else { bNum++; }
        break;
      }
    }
  }
  return inputNum + ':' + aNum + 'A' + bNum + 'B'
}
// '1234'
// '0243'

console.warn(checkAB('1234', '0243'));

export default class Hw21AorBGuessNum extends Component {
  constructor(props){
    super(props);
    this.state = ({
      arr: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      list: [],
      ans: makeAns(),
      inputNum: '',
      display: 'hide'
    });
  }
  
  handleChange = (e) => {
    this.setState({
      inputNum: e.target.value
    })
  };

  handleClick = (e) => {
    const { inputNum, ans } = this.state;
    let { list } = this.state;

    if(!isValid(inputNum)) return false;

    const result = checkAB(inputNum, ans);
    list.push(result);
    this.setState({
      list: list
    })
    if(result === inputNum + ':4A0B') 
    this.setState({
      display: 'show'
    })
  };

  handleRestClick = (e) => {
    this.setState({
      list: [],
      ans: makeAns(),
      display: 'hide'
    })
  };

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
          value={this.state.inputNum}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Guess!</button>
        <div className={this.state.display}>答對了！遊戲結束，你要重新一局嗎？
          <button onClick={this.handleRestClick}>好，重新一局！</button>
        </div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
