import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './Home';
import Hw1Timer from './Hw1Timer';
import Hw2TimerList from './Hw2TimerList';
// import Homework from './Hw24Lottery';

function App() {
  return (
    <div className="App">
      {/* <Homework /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/Hw1Timer"><Hw1Timer /></Route>
          <Route path="/Hw2TimerList"><Hw2TimerList /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
