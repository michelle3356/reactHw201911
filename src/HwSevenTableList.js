import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[]
    }
  };

  handleClick = (event) =>{
    /**
     * 1. 應該是 this.state.list 而不是 this.setState.list
     * 2. 你丟參數給 callApi, 但 callApi 沒有接任何東西？
     */
    this.callApi(this.state.list);
  };

  callApi = () =>{
    fetch(`https://randomuser.me/api/?results=25`)
    .then(res =>{
      return res.json()
    .then(json =>{
      this.setState({
        list: json.results
      })
      /** 你應該是要在這邊 把 json.results setState 才對
       * this.setState({
       *  list: json.results
       * })
       */
    })
    })
  };

  render(){
    return (
      <div className="App">
      <h1>使用者表格</h1>
      <div>利用<b>https://randomuser.me/api/?results=25</b>取得一批隨機使用者清單，並呈現在於一個表格，可以刷新內容</div>
      <button onClick={this.handleClick}>Update List</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {/* 你的 function 裡面要 return，使用箭頭函數而且只有一道命令才不用 return */}
          {this.state.list.map(function(user){
            return(
            <tr key={user.login.uuid}>
              <td><img src={user.picture.thumbnail} /></td>
              <td>{user.name.first}</td>
              <td>{user.gender}</td>
              <td>{user.emily}</td>
              <td>{user.dob.age}</td>
              <td>{user.phone}</td>
              <td>{user.location.country}</td>
            </tr>
            )
          })}

        </tbody>
      </table>
      </div>
    );
  };
};