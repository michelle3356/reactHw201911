import React, { Component } from 'react'
import './HwTwelveTabCss.css';
import tab_content_1 from './HwTwelveTabCss.css';
import tab_content_2 from './HwTwelveTabCss.css';
import tab_content_3 from './HwTwelveTabCss.css';

export default class HwTwelveTab extends Component {
  handleClick = (e) => {
    console.log(e.target)
  }
  render() {
    return (
      <div>
        <span id="tab_1">1</span>
        <span id="tab_2">2</span>
        <span id="tab_3">3</span>
        <div id="tab">
          <ul>
            <li onClick={this.handleClick}><a href="#tab_1">tab1</a></li>
            <li><a href="#tab_2">tab2</a></li>
            <li><a href="#tab_3">tab3</a></li>
          </ul>
          <div className={tab_content_1}><p>111111</p></div>
          <div className={tab_content_2}><p>222222</p></div>
          <div className={tab_content_3}><p>333333</p></div>
        </div>
      </div>
      )
    }
  }
  