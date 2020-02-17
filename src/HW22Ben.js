import React, { Component } from 'react';

import FruitForm from './FruitForm';

const fruitObj = {
  apple:      {name: '橘子',   price: 20},
  orange:     {name: '蓮霧',   price: 30},
  waxApple:   {name: '哈密瓜', price: 40},
  cantaloupe: {name: '蘋果',   price: 50},
  grapefruit: {name: '葡萄柚', price: 15},
}

let fruitNum = {}

Object.keys(fruitObj).forEach(key => {
  fruitNum[key] = 0;
});

export default class HW22Ben extends Component {
  constructor(props){
    super(props);
    this.state = {
      fruitNum,
    }
  };

  handleInput = (key, num) => {
    this.setState({
      fruitNum: {
        ...this.state.fruitNum,
        [key]: this.state.fruitNum[key] + num
      }
    });
  }

  render() {
    const { fruitNum } = this.state;

    const fruitList = Object.keys(fruitNum)
          .filter(key => fruitNum[key]);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              {Object.keys(fruitObj).map(key =>
                <FruitForm
                  key={key}
                  name={fruitObj[key].name}
                  price={fruitObj[key].price}
                  onInput={this.handleInput.bind(this, key)}
                />
              )}
            </div>
          </div>
          <div className="col-sm-4">
            <ul>
                {fruitList.map(key =>
                    <li key={key}>
                      {fruitObj[key].name} x 
                      {fruitNum[key]} = 
                      ${fruitNum[key] * fruitObj[key].price}
                      <button onClick={this.handleInput.bind(this, key, -1)} className="btn btn-sm btn-warning">-1</button>
                      <button onClick={this.handleInput.bind(this, key, -fruitNum[key])} className="btn btn-sm btn-danger">clear</button>
                    </li>
                  )
                }
                {fruitList.length && <li>============</li>}
                {fruitList.length && (
                  <li>
                    ${fruitList.reduce((sum, key) => sum + fruitObj[key].price * fruitNum[key], 0)}
                  </li>
                )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
