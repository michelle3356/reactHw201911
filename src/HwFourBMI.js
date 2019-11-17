import React, { Component } from 'react'

export default class HwFourBMI extends Component {
  constructor(props){
    super(props);
    this.state={
      value:'',
      bmiValue:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }
//把事件綁在這
  handleSubmit(event){
    event.preventDefault();
  }
  render() {
    /**
     * 妳的 BMI 計算公式寫錯了，我都寫在題目上了 = =
     * 而且也不應該在這邊算，我的做法明明就是在按下按鈕時才算
     */
    const bmiValue = this.state.weight/(this.state.height*this.state.height);
    return (
      <div>
        <h1>BMI 計算公式: 體重(公斤) / 身高(公尺) 的 2次方</h1>
        <form onSubmit={this.handleSubmit}>
          <label>身高:
            <input type="text" 
            name="height"
            value={this.state.height} 
            onChange={this.handleChange}/>cm
            {/* 妳的 value 綁定了 this.state.height 但你在 constructor 沒有定義 height? */}
          </label>
          <br/>
          <label>體重:
          <input type="text"
          name="weight"
          value={this.state.weight}
          onChange={this.handleChange} /></label>kg
          <br />
          <input type="submit" value="calculate" />
        </form>
        <label>BMI:{bmiValue}</label>
      </div>
    )
  }
}
