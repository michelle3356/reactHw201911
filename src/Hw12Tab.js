import React, { Component } from 'react';

const contentList = [
  '111111111111111111',
  '222222222222222222',
  '333333333333333333',
];

export default class HwTwelveTab extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    }
  }
  handleClick = (index) => {
    this.setState({ index })
  }
  render() {
    return (
      <div>
        <div id="tab">
          <ul>
            <li onClick={this.handleClick.bind(this, 0)}>tab1</li>
            <li onClick={this.handleClick.bind(this, 1)}>tab2</li>
            <li onClick={this.handleClick.bind(this, 2)}>tab3</li>
          </ul>
          <div><p>{contentList[this.state.index]}</p></div>
        </div>
      </div>
      )
    }
  }
  