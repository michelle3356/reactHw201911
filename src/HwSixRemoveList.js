import React, { Component } from 'react'

export default class HwSixRemoveList extends Component {
  constructor(props){
    super(props);
    this.state ={

    }
  };



  render() {
    return (
      <div>
        <h1>可移除的清單</h1>
        <span>繼HW5後，新增可移除的功能</span>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
          name="number" 
          value={this.state.input}
          onChange={this.handleChange}
          />
          <ul>
            
          </ul>

        </form>
        
      </div>
    )
  }
}
