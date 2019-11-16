import React, { Component } from 'react'

export default class HwFiveItemListKnowetarget extends Component {
constructor(props){
  super(props);
  this.state = {
    value:"",
    list:[]

  };
  this.handleChange = this.handleChange.bind(this);
}

handleChange = (event) => {
  const target = event.target;
  const value = target.value;
  const list = this.state.list;
  list.push(this.state.value)
  this.setState({
    value: value,
    list: list
  })
}

  render() {
    return (
      <div>
        <h1>理解 e.target的清單</h1>
        <span>在輸入框任意輸入後 Enter 即可產生一筆新項目
          <br/>並且會把原本的輸入格清空
          <br/>若使用者輸入空白或沒輸入則不能新增
        </span>
        <div>
          <input type="text" 
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          />
          <ul>
            {this.state.list.map(item =>
            <li key={item.index}>{item}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
