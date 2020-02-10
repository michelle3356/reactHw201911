import React, { Component } from 'react'
import Hw22ShopCarItem from './Hw22ShopCarItem'
export default class Hw22ShopCar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <Hw22ShopCarItem />
            </div>
          </div>
          <div className="col-sm-4">
          42544
          </div>
        </div>
      </div>
    )
  }
}
