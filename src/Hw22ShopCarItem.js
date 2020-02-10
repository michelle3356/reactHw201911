import React, { Component } from 'react'
import './Hw22.css'
export default class Hw22ShopCarItem extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="Fruit">
          <div>one peace</div>
          <div>$$</div>
          <form>
            <input type="number" placeholder="數量"></input>
            <button className="btn btn-primary">加入購物車</button>
          </form>
        </div>
      </div>
    )
  }
}
