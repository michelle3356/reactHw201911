import React, { Component } from 'react'

export default class HwSixRemoveList extends Component {
  constructor(props){
    super(props);
    this.state ={
      value:"",
      list:[]
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //可以簡寫成const {list,value} = this.state
    const list = this.state.list;
    const value = this.state.value;
    if(value !== '' && value.trim() !== '')
    this.setState({
      //unshift加在陣列最前面,等於list.unshift(this.state.value)
      list: [value, ...list],
      value: ''
    })
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      value: value
    })
  };

  handleClick = (index) => {
    /** 最好不要取 index1 這種名字 */
      var filterEmpty = this.state.list.filter((value, index1) =>
        index !== index1
      )
    this.setState({
      list: filterEmpty
    });
  }

  render() {
    const liList = this.state.list.map((item,index)=>
      <li key={index}>{item}
        <button onClick={this.handleClick.bind(this, index)}>remove</button>
      </li>
      )
      /**
       * 在 form 裡的任何 button 都會被視為 submit，所以你不應該把
       * ul 包在 form 裡
       */
    return (
      <div>
        <h1>可移除的清單</h1>
        <span>繼HW5後，新增可移除的功能</span>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
          name="number" 
          value={this.state.value}
          onChange={this.handleChange}
          />
          <ul>
            {liList}
          </ul>
        </form>
      </div>
    )
  }
}
