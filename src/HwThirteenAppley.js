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
      ],
      isShowDone: false
    };
  }
  
  handleChange = ({ target: { value } }) => {
    this.setState({ value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { toDoListdata } = this.state;
    const value = this.state.value;
    if(value !== '' && value.trim() !== '')
    this.setState({
      toDoListdata: [{
        id: Math.random(),
        content: value,
        done: false,
      }, ...toDoListdata],
      value: ''
    })
  };
  
  handleClick = (e) => {
    /**
     * 提示: 應取得點擊之 index
     * 然後去修改 state.toDoListdata 裡對應項目的 done
     * 然後再把 toDoListdata setState 回去。
     */
  };
  
  render() {
    const toDoListdata = this.state.toDoListdata.map((item) =>
      //!!不要再把ul寫進來map裡面了!!
      <li
        key={item.id}
        className={item.done ? 'done': ''}
        onClick={this.handleClick}
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