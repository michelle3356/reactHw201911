import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[]
    }
  };

  handleClick = (event) =>{
    this.callApi(this.setState.list);
  };

  callApi = () =>{
    fetch(`https://randomuser.me/api/?results=25`)
    .then(res =>{
      return res.json()
    .then(json =>{
      console.log(json.results)
      return json.results;
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
          {this.state.list.map(function(user){
            <tr key={user.login.uuid}>
              <td><img src={user.picture.thumbnail} /></td>
              <td>{user.name.first}</td>
              <td>{user.gender}</td>
              <td>{user.emily}</td>
              <td>{user.dob.age}</td>
              <td>{user.phone}</td>
              <td>{user.location.country}</td>
            </tr>
          })}

        </tbody>
      </table>
      </div>
    );
  };
};