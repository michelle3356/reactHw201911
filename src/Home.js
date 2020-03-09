import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/Hw2TimerList">Hw2TimerList</Link></li>
          <li><Link to="/Hw1Timer">Hw1Timer</Link></li>
        </ul>
      </div>
    )
  }
}
