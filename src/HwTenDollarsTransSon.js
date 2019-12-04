import React, { Component } from 'react'

const dollarsCountry = {
  t: 'TWD',
  a: 'USD'
}

function toTWD(USD) {
  return USD / 30;
}

function toUSD(TWD) {
  return TWD * 30;
}

export default class AppTwo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handletoTWDChange = this.handletoTWDChange.bind(this);
    this.handletoUSDChange = this.handletoUSDChange.bind(this);
    // 為甚麼這裡的state格式不是={()}
    this.state = { number: '' };
  }

  handleChange(e) {
    // this.setState({
    // number: e.target.value
    // })
    this.props.onDollarsTrans(e.target.value);
  }

  // onDollarsTrans (e){
  // console.log(e)
  // }

  handletoTWDChange(number) {
    this.setState({ dollar: 't', number })
  }

  handletoUSDChange(number) {
    this.setState({ dollar: 'a', number })
  }

  render() {
    // const number = this.state.number;
    const number = this.props.number;
    const dollar = this.props.dollar;
    return (
      <div>
        <div>
          <input
            type="text"
            value={number}
            onChange={this.handleChange} />
          <label>{dollarsCountry[dollar]}</label>
        </div>
      </div>
    )
  }
}