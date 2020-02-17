import React, { Component } from 'react'
import './Hw23.css';

export default class Hw23SunMoon extends Component {
  constructor(props){
    super(props);
    this.state = ({
      oneDay: 'sun',
    })
  };

  handleClick = (e) => {
    this.setState({
      oneDay: this.state.oneDay === 'sun' ? 'moon' : 'sun'
    })
  }
  

  render() {
    const oneDay = this.state.oneDay;
    return (
      <div className={'HW23SunMoon text-center ' + oneDay}>
        <div>
          太陽圖片: https://img.icons8.com/cotton/256/000000/sun--v1.png
          <br></br>
          月亮圖片: https://img.icons8.com/cotton/256/000000/moon-satellite.png
          <br></br>
          請仔細觀察太陽與月亮的位置，「必須」對準正中央
        </div>
        <div className="dashboard">
          <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>切換成{oneDay === 'sun' ? '晚上' : '早上'}</button>
        </div>
        <div className="icon">
          <div>
            <img src="https://img.icons8.com/cotton/256/000000/sun--v1.png"></img>
          </div>
          <div>
            <img src="https://img.icons8.com/cotton/256/000000/moon-satellite.png"></img>
          </div>
        </div>
      </div>
    )
  }
}
