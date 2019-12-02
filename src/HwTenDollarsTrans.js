import React, { Component } from 'react'

export default class HwTenDollarsTrans extends Component {
constructor(props){
super(props)
this.state = {
taiwanDollar : 0,
usDollar : 0
}
}

handleChange = (event) => {
console.log(event.target.value)
const value = event.target.value;
this.setState = ({
taiwanDollar : value
})
}

render() {
return (
<div>
<h1>台幣(TWD) 與 美金(USD) 轉換</h1>
<div>於台幣格 與 美金格 任意輸入數字，即可造成另一邊自動轉換</div>
<div>1美金 = 30 台幣</div>
<div>
<input type="text"
name="taiwanDollar"
value={this.state.taiwanDollar}
onChange={this.handleChange.bind(this)}
placeholder="輸入TWD"/>
<label>TWD</label>
</div>
<div>
<input type="text"
name="usDollar"
value={this.state.usDollar}
onChange={this.handleChange.bind(this)}
placeholder="輸入USD"/>
<label>USD</label>
</div>
</div>
)
}
}