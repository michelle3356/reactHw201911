import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/Redux">Redux</Link></li>
          <li><Link to="/Hw2TimerList">Hw2TimerList</Link></li>
          <li><Link to="/Hw1Timer">Hw1Timer</Link></li>
          <li><Link to="/Hw3AddList">Hw3AddList</Link></li>
          <li><Link to="/Hw4BMI">Hw4BMI</Link></li>
          <li><Link to="/Hw5ItemListKnowetarget">Hw5ItemListKnowetarget</Link></li>
          <li><Link to="/Hw6RemoveList">Hw6RemoveList</Link></li>
          <li><Link to="/Hw7TableList">Hw7TableList</Link></li>
          <li><Link to="/Hw8AddNumSum">Hw8AddNumSum</Link></li>
          <li><Link to="/Hw9TimeBackYear">Hw9TimeBackYear</Link></li>
          <li><Link to="/Hw10DollarsTrans">Hw10DollarsTrans</Link></li>
          <li><Link to="/Hw10DollarsTransSon">Hw10DollarsTransSon</Link></li>
          {/* <li><Link to="/Hw11ColorPadFather">Hw11ColorPadFather</Link></li> */}
          <li><Link to="/Hw12Tab">Hw12Tab</Link></li>
          <li><Link to="/Hw13Appley">Hw13Appley</Link></li>
          <li><Link to="/Hw14Pokemon">Hw14Pokemon</Link></li>
          <li><Link to="/Hw15LengthConversion">Hw15LengthConversion</Link></li>
          <li><Link to="/Hw16GuessNumber">Hw16GuessNumber</Link></li>
          <li><Link to="/Hw16GuessNumberSexyoung">Hw16GuessNumberSexyoung</Link></li>
          <li><Link to="/Hw17RandomNumber">Hw17RandomNumber</Link></li>
          <li><Link to="/Hw18QNum">Hw18QNum</Link></li>
          <li><Link to="/Hw19HitGopher">Hw19HitGopher</Link></li>
          <li><Link to="/Hw20GuessNum">Hw20GuessNum</Link></li>
          <li><Link to="/Hw21AorBGuessNum">Hw21AorBGuessNum</Link></li>
          <li><Link to="/HW22Ben">HW22Ben</Link></li>
          <li><Link to="/Hw22List">Hw22List</Link></li>
          <li><Link to="/Hw22ShopCar">Hw22ShopCar</Link></li>
          <li><Link to="/Hw23SunMoon">Hw23SunMoon</Link></li>
          <li><Link to="/Hw24Lottery">Hw24Lottery</Link></li>
          <li><Link to="/ToDoList">ToDoList</Link></li>
        </ul>
      </div>
    )
  }
}
