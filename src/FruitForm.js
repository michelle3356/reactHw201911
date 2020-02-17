import React, { Component } from 'react';

export default class FruitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  handleChange = e => {
    this.setState({ num: +e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onInput(this.state.num);
    this.setState({ num: 0 });
  }

  render() {
    const { num } = this.state;
    const { name, price } = this.props;
    return (
      <div className="col-sm-3">
        <div className="Fruit">
          <div>{name}</div>
          <div>${price}</div>
          <form onSubmit={this.handleSubmit}>
            <input type="number" 
              value={num}
              placeholder="數量" 
              onChange = {this.handleChange}
            />
            <button className="btn btn-primary">Add to cart</button>
          </form>
        </div>
      </div>
    )
  }
}
