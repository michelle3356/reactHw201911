import React, { Component } from 'react'

export default class Hw19GopherSon extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    if(e.target.value === 'G'){
      this.props.hitScore(1)
    }else{
      this.props.hitScore(-1)
    }
  }



  render() {
    const num = this.props.num
    return (
      <button onClick={this.handleClick.bind(this)} value={num}>{num}
      </button>
    )
  }
}
