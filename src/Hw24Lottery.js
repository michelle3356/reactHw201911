import React, { Component } from 'react'
import './Hw24Lottery.css'
import Hw24LotteryInput from './Hw24LotteryInput';

// 1.父元件輸入大樂透的input
// 2.設定大樂透規則01-49任選六個不重複的號碼一百組在componentDidMount
// 4.設定子元件li
// 4.Submit提交的數字有符合一百組的呈現黃色
function toDay() {
  var date = new Date();
  return date.getFullYear() + '/' + (+date.getMonth() + 1) + '/' + date.getDate();
}

const LotteryObj = {
  Lottery: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
            '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
            '41', '42', '43', '44', '45', '46', '47', '48', '49'],
}

//不重複的六個號碼
function lotteryResults(){
  var lottery = LotteryObj.Lottery
  //sort是用來排列，a - b得到正數 和 b - a 得到負數，因此用Math.random() - 0.5可得到正數或負數
  lottery.sort(function(a, b){
    return Math.random() - 0.5;
  });
  return lottery.slice(0,6).join(",");
};

const inputObj = {one: '', two: '', three: '', four: '', five: '', six: ''}


let inputNum = {}

Object.keys(inputObj).forEach(key => {
  inputNum[key]='';
})

// lottory.prototype = {
//   options: {
//    minNumber: '01',    // 預設最小選擇號碼
//    maxNumber: '49',    // 預設最大選擇號碼
//    tokenNum: 6,    // 預設選取數量
//   },

//[01,02,03,04.....,49]
//然後我再對他設定可以創造出一百組不重複的數字
//然後用一百組去對照我輸入的六位數字的陣列
//再印出  有對到的就變成黃色球球

export default class Hw24Lottery extends Component {
  constructor(props){
    super(props);
    this.state = ({
      date: toDay(),
      inputNum,
      state: 'disabled'
    })
  };
  
  //產生一百組開獎號碼
  componentDidMount(){
    // console.log(inputObj)
    var arr = [];
    for(var i = 0; i<100; i++){
      lotteryResults()
      arr.push(lotteryResults())
    };
    // console.warn(arr)
    return arr;
  }

// 1.接收子層傳上來的屬性
// 2.判斷子層傳上來的屬性小於49且不重複
// 3.判斷成功則該屬性的isCorrect===true button取消disable
  handleInputValue = (key, inputValue) => {
    this.setState({
      inputNum: {
        ...this.state.inputNum,
        [key]: inputValue
      },
    })
  }

  handleSubmitValue = (e) => {
    e.preventDefault();
    let inputNum = this.state.inputNum;

    console.warn(inputNum)
  }

    
  render() {
    let { inputNum, date } = this.state

    let lotteryList = Object.keys(inputNum).filter(key=>
      inputNum[key])
    
    return (
      <div className="HW24Lottery">
        <div className="container">
          <div className="block mx-auto">
            <div className="header">
              <h1>大樂透</h1>
              <div className="open-date">開獎日期：
                <span className="date">{date}</span>
              </div>
              <form onSubmit={this.handleSubmitValue.bind(this)}>
                <div className="numberList">
                  {Object.keys(inputObj).map(key => 
                    <Hw24LotteryInput
                      key={key}
                      value={inputObj[key].value}
                      onInput={this.handleInputValue.bind(this, key)}
                    />
                  )}
                </div>
                <button className="btn btn-primary btn-block">輸入</button>
              </form>
            </div>
            <ul className="content">
              <li>2e23rewfew</li>
              <li>{lotteryList}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
