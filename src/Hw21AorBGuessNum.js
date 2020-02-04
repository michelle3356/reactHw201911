import React, { Component } from 'react'

//不重複的四個數字
function isAns(){
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  arr.sort(function(){
    return Math.random() - 0.5;
  });
  return arr.slice(0,4).join("");
};

function isValid(inputNum){
  if(inputNum.length <= 4 && !isNaN(inputNum)){
    for(var i = 0; i < 4; i++){
      if(inputNum[i] !== inputNum[i+1]){
        return inputNum;
      }else{
        alert("輸入數字不可重複")
      }
    }
  }else{
    alert("格式不正確")
  }
};

// var fourString = '';
// var fourArr = [];
// for(let i = 0; i < 4; i++){
//   fourString = Math.floor(Math.random() * 10);
//   for(let j = 0; j < fourArr.length; j++){
//     if(fourArr[j] === fourString){
//       fourArr.splice(j,1);
//       i--;
//     }
//   }
//   fourArr.push(fourString);
// }
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
    var aNum = 0;
    var bNum = 0;

    isValid(inputNum);
    
    // if(inputNum.length <= 4 && !isNaN(inputNum)){
    //   (inputNum.split("")).filter(function(element, index, arr){
    //     if(arr.indexOf(element) === index){
    //       list.push(inputNum);
          
    //       for(var i = 0; i < 4; i++){
    //         var guess1 = inputNum.substring(i, i+1);
    //         for(var j = 0; j < 4; j++){
    //           var ansFinal = fourArr.join("").substring(j, j+1)
    //           if(guess1 === ansFinal){
    //             if(i === j){
    //               aNum++
    //             }else{
    //               bNum++
    //             }
    //             list.push(inputNum + ':' + aNum + 'A' + bNum + 'B')
    //           }
    //         }
    //       }
    //     }else if(arr.indexOf(element) !== index){
    //       alert('輸入數字不可重複')
    //     }
    //   });
    // }else{
    //   alert('格式不正確')
    // }
  };

  handleRestClick = (e) => {
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
