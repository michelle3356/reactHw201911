import React, { Component } from 'react'

const dollarsCountry = {
  t: 'TWD',
  a: 'USD'
}

export default class Hw10DollarsTransSon extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // 為甚麼這裡的state格式不是={()}
    // this.state = { number: '' };
  }

  handleChange(e) {
    // this.setState({
    // number: e.target.value
    // })
    this.props.onDollarsTrans(e.target.value);
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