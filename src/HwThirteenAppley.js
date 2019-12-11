import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value: "",
      toDoList: [],
      toDoListdata :[
        { id: Math.random(), content: '待辦事項1', done: false },
        { id: Math.random(), content: '待辦事項2', done: false },
        { id: Math.random(), content: '待辦事項3', done: true }
      ]
    };
  }
  
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  };
  
  handleClick = (e) => {
    console.warn(e)
  };
  
  render() {
    // console.warn(this.state.toDoListdata);
    const toDoList = this.state.toDoListdata.map((item, index) =>
    //!!不要再把ul寫進來map裡面了!!
    <li key={item.id} onClick={this.handleClick}>{item.content}</li>
    )
    
    return (
      <div>
      <div>一開始你會有一個清單，內有3個項目，內容如下：</div>
      <form onSubmit={this.handleSubmit}>
      <input type="text"/>
      <button>submit</button>
      </form>
      {/* !!不要再把ul寫進去map裡面了!! */}
      <ul>
      {toDoList}
      </ul>
      </div>
      )
    }
  }