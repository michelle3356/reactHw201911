import React, { Component } from 'react'

export default class HwFourBMI extends Component {
  constructor(props){
    super(props);
    this.state={
      value:''
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
    return (
      <div>
        <h1>BMI 計算公式: 體重(公斤) / 身高(公尺) 的 2次方</h1>
        <form onSubmit={this.handleSubmit}>
          <label>身高:
            <input type="text" 
            name="height"
            value={this.state.height} 
            onChange={this.handleChange}/>cm
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
        <label>BMI:</label>
      </div>
    )
  }
}
