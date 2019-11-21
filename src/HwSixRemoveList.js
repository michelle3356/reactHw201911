import React, { Component } from 'react'

export default class HwSixRemoveList extends Component {
  constructor(props){
    super(props);
    this.state ={
      value:"",
      list:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const list = this.state.list;
    list.push(this.state.value);
    this.setState({
      list:list
    })
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      value: value
    })
  };

  handleClick = (index) => {
      var filterEmpty = this.state.list.filter(function(filterList, idx, array){
        if(filterList.idx !== index) return filterList;
      })
    this.setState({
      list: filterEmpty
    })

  }

  render() {
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
            {this.state.list.map((item,index)=>
            <li key={index}>{item}
              <button onClick={this.handleClick.bind(this, index)}>remove</button>
            </li>
            )}
          </ul>
        </form>
      </div>
    )
  }
}
