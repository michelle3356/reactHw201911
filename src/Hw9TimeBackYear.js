import React, { Component } from 'react'

export default class App extends Component {
constructor(props){
super(props)
this.state = {
dateNow : +new Date()
}
}

componentDidMount() {
this.timerID = setInterval(
() => this.tick(),1000
);
}

tick(){
this.setState({
dateNow: (+new Date("2020/01/01 00:00:00") - +new Date())/1000
})
}


render() {
return (
<div>
<h1>離2020跨年還有:{Math.floor(this.state.dateNow/86400)}天
{Math.floor(Math.floor((this.state.dateNow/60)/60)%24)}時
{Math.floor(this.state.dateNow/60)%60}分
{Math.floor(this.state.dateNow%60)}秒</h1>
</div>
)
}
}