import React, { Component } from 'react'
import './HwThirteenAppley.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value: "",
      toDoListdata :[
        { id: Math.random(), content: '待辦事項1', done: false },
        { id: Math.random(), content: '待辦事項2', done: false },
        { id: Math.random(), content: '待辦事項3', done: true }
      ]
    };
  }
  
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      value: value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    const toDoListdata = this.state.toDoListdata;
    const value = this.state.value;
    if(value !== '' && value.trim() !== '')
    this.setState({
      toDoListdata: [{id: Math.random(), content: value, done: false}, ...toDoListdata],
      value: ''
    })
  };
  
  handleClick = (targetIndex) => {
    console.warn(targetIndex)
    var clickList = this.state.toDoListdata.map((item, index) =>
        console.log(item, index)
        // console.log(item.done)
        // targetIndex === index  !(item.done)
      )
    this.setState({
      toDoListdata: clickList
    })
  };
  
  render() {
    // console.warn(this.state.toDoListdata);
    const toDoListdata = this.state.toDoListdata.map((item, index) =>
      //!!不要再把ul寫進來map裡面了!!
      <li
        key={item.id}
        onClick={this.handleClick.bind(this, index)}
        className={item.done ? 'done': ''}
      >{item.content}</li>
    )
    
    return (
      <div>
        <div>一開始你會有一個清單，內有3個項目，內容如下：</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            onChange={this.handleChange}
          />
          <button>submit</button>
        </form>
        {/* !!不要再把ul寫進去map裡面了!! */}
        <ul>
          {toDoListdata}
        </ul>
      </div>
      )
    }
  }