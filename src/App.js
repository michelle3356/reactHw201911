import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './Home';
import Redux from './Redux';
import Hw1Timer from './Hw1Timer';
import Hw2TimerList from './Hw2TimerList';
import Hw3AddList from './Hw3AddList';
import Hw4BMI from './Hw4BMI';
import Hw5ItemListKnowetarget from './Hw5ItemListKnowetarget';
import Hw6RemoveList from './Hw6RemoveList';
import Hw7TableList from './Hw7TableList';
import Hw8AddNumSum from './Hw8AddNumSum';
import Hw9TimeBackYear from './Hw9TimeBackYear';
import Hw10DollarsTrans from './Hw10DollarsTrans';
import Hw10DollarsTransSon from './Hw10DollarsTransSon';
// import Hw11ColorPadFather from './Hw11ColorPadFather';
import Hw12Tab from './Hw12Tab';
import Hw13Appley from './Hw13Appley';
import Hw14Pokemon from './Hw14Pokemon';
import Hw15LengthConversion from './Hw15LengthConversion';
import Hw16GuessNumber from './Hw16GuessNumber';
import Hw16GuessNumberSexyoung from './Hw16GuessNumberSexyoung';
import Hw17RandomNumber from './Hw17RandomNumber';
import Hw18QNum from './Hw18QNum';
import Hw19HitGopher from './Hw19HitGopher';
import Hw20GuessNum from './Hw20GuessNum';
import Hw21AorBGuessNum from './Hw21AorBGuessNum';
import HW22Ben from './HW22Ben';
import Hw22List from './Hw22List';
import Hw22ShopCar from './Hw22ShopCar';
import Hw23SunMoon from './Hw23SunMoon';
import Hw24Lottery from './Hw24Lottery';
// import Homework from './Hw24Lottery';

function App() {
  return (
    <div className="App">
      {/* <Homework /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/Redux"><Redux /></Route>
          <Route path="/Hw1Timer"><Hw1Timer /></Route>
          <Route path="/Hw2TimerList"><Hw2TimerList /></Route>
          <Route path="/Hw3AddList"><Hw3AddList /></Route>
          <Route path="/Hw4BMI"><Hw4BMI /></Route>
          <Route path="/Hw5ItemListKnowetarget"><Hw5ItemListKnowetarget /></Route>
          <Route path="/Hw6RemoveList"><Hw6RemoveList /></Route>
          <Route path="/Hw7TableList"><Hw7TableList /></Route>
          <Route path="/Hw8AddNumSum"><Hw8AddNumSum /></Route>
          <Route path="/Hw9TimeBackYear"><Hw9TimeBackYear /></Route>
          <Route path="/Hw10DollarsTrans"><Hw10DollarsTrans /></Route>
          <Route path="/Hw10DollarsTransSon"><Hw10DollarsTransSon /></Route>
          {/* <Route path="/Hw11ColorPadFather"><Hw11ColorPadFather /></Route> */}
          <Route path="/Hw12Tab"><Hw12Tab /></Route>
          <Route path="/Hw13Appley"><Hw13Appley /></Route>
          <Route path="/Hw14Pokemon"><Hw14Pokemon /></Route>
          <Route path="/Hw15LengthConversion"><Hw15LengthConversion /></Route>
          <Route path="/Hw16GuessNumber"><Hw16GuessNumber /></Route>
          <Route path="/Hw16GuessNumberSexyoung"><Hw16GuessNumberSexyoung /></Route>
          <Route path="/Hw17RandomNumber"><Hw17RandomNumber /></Route>
          <Route path="/Hw18QNum"><Hw18QNum /></Route>
          <Route path="/Hw19HitGopher"><Hw19HitGopher /></Route>
          <Route path="/Hw20GuessNum"><Hw20GuessNum /></Route>
          <Route path="/Hw21AorBGuessNum"><Hw21AorBGuessNum /></Route>
          <Route path="/HW22Ben"><HW22Ben /></Route>
          <Route path="/Hw22List"><Hw22List /></Route>
          <Route path="/Hw22ShopCar"><Hw22ShopCar /></Route>
          <Route path="/Hw23SunMoon"><Hw23SunMoon /></Route>
          <Route path="/Hw24Lottery"><Hw24Lottery /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
