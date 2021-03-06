import React, { Component } from 'react'

export default class Hw18 extends Component {
  constructor(props){
    super(props);
    this.state = ({
      qNum: 'Q',
      fraction: 0,
      guessNum: '',
      ms: Math.floor(Math.random() * 100),
      ss: Math.floor(Math.random() * 100),
    })
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount(){
    this.random = setInterval(
      () => this.changeDash(),
      10000
      
    );
    this.random = setInterval(
      () => this.changeQ(),
      2000
    );
  }

  changeDash(){
    this.setState({
      qNum: '-',
    })
  }

  changeQ(){
    this.setState({
      qNum: 'Q',
    })
  }

  handleChange = (e) => {
    const inputValue = e.target.value;
    console.log(this.state.qNum)
    console.log(inputValue)
    if(inputValue === this.state.qNum && inputValue !== '-'){
      this.setState({
        qNum: '-',
        fraction: this.state.fraction + 1
      })
    }else if(inputValue !== this.state.qNum){
      this.setState({
        fraction: this.state.fraction - 1
      })
    }
  }
  
  render() {
    const qNum = this.state.qNum;
    const fraction = this.state.fraction;
    const guessNum = this.state.guessNum;
    return (
      <div className="container">
        <div className="card text-center mx-auto mt-4" style={{width: '18rem'}}>
          <h1>{qNum}</h1>
          <h2>分數：{fraction}</h2>
          <h5>出現Q按Q</h5>
          <p>上面的字母會不定期顯示為 Q, 顯示為 Q 時，鍵盤按下 Q 則得1分，並且立刻改回 - ，沒出現 Q 或打其他鍵，則扣分。</p>
          <input type="text" 
          placeholder="todo..." 
          onChange = {this.handleChange}
          value = {guessNum} />
        </div>
      </div>
      )
    }
  }