import React, { Component } from 'react'
import { gropherButton } from './Hw19Gopher.css'
const sign = ['-', 'G'];

export default class Hw19GopherSon extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: sign[Math.floor(Math.random() * 2)]
    }
  }

  componentDidMount(){
    this.tick();
  };

  tick() {
    this.random = setTimeout(
      () => {
        this.changNum();
        this.tick();
      },
      Math.floor(Math.random() * 4000) + 2000
    );
  }

  changNum(){
    this.setState({
      num: this.state.num === 'G'? '-': 'G'
    });
  };

  handleClick = () => {
    this.props.hitScore(this.state.num === 'G' ? 1: -1);
    this.setState({
      num: '-'
    })
  }

  render() {
    const { num } = this.state;
    return (
      <button className="gropherButton" onClick={this.handleClick}>
        {num}
      </button>
    )
  }
}
