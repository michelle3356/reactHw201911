import React, { Component } from 'react'

export default class HwFiveItemListKnowetarget extends Component {
constructor(props){
  super(props);
  this.state = {
    value:"",
    list:[]
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

/**
 * onChange 應該只改動 value，list 不會改變
 */
handleChange = (event) => {
  const target = event.target;
  const value = target.value;
  this.setState({
    value: value
  })
}

handleSubmit = (event) =>{
  event.preventDefault();
  const list = this.state.list;
  list.push(this.state.value);
  this.setState({
    list:list
  });
}

  /**
   * list 應該在 form submit 時才會新增進去，
   * 但完全沒看到你的 form 在哪裡
   */

  render() {
    return (
      <div>
        <h1>理解 e.target的清單</h1>
        <span>在輸入框任意輸入後 Enter 即可產生一筆新項目
          <br/>並且會把原本的輸入格清空
          <br/>若使用者輸入空白或沒輸入則不能新增
        </span>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          name="number"
          value={this.state.value}
          onChange={this.handleChange}
          />
          <ul>
            {this.state.list.map(item =>
            <li key={item.index}>{item}</li>
            )}
          </ul>
        </form>
      </div>
    )
  }
}
