import React, { Component } from 'react'

export default class Hw19GopherSon extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    console.warn(e.target.value)
  }



  render() {
    const num = this.props.num
    return (
      <button onClick = {this.handleClick.bind(this)}>
        {num}
      </button>
    )
  }
}
