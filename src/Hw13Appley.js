import React, { Component } from 'react'
import './Hw13Appley.css';

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
  /**
   * 提示: 應取得點擊之 index
   * 然後去修改 state.toDoListdata 裡對應項目的 done
   * 然後再把 toDoListdata setState 回去。
   */
  handleClick = (targetIndex) => {
    // 這裡傳入的index即是點擊當下所指定的項目的index，因此可以直接以此index找項目中所要取得的項目
    // arr = ['a', 'b', 'c'];是陣列
    // arr = [obj, obj, obj];也是陣列

    const list = this.state.toDoListdata
    if(list[targetIndex].done){
      list[targetIndex].done = false;
    }else{
      list[targetIndex].done = true;
    }
    this.setState({
      toDoListdata: list
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