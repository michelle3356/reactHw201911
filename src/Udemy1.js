import React, { Component } from 'react';
import ReactDom from 'react-dom';

// const e = React.createElement('input');

//讓input有屬性和名稱
const e = React.createElement('input', {
  id: 'input',
  type: 'number',
  readOnly: true, //必須使用駝峰式
  className: 'input', //class和for在js裡面都是保留字,皆有用途,因此在react中需要改名稱
  htmlFor: 'input',
  style: {  //style用物件
    color: 'blue',
    border: '1px solid red',
    borderRadius: '4px'  //也需要駝峰式
  }
})

//事件
function myFunction(){
  window.alert('嘿嘿');
}

const myFunction2 = () => {
  window.alert('haha');
}



const e2 = React.createElement('input', {
  onInput: myFunction  //第一種方式,放入函式的名稱

  //第二種方式,直接將匿名函式內的事件放入
  // onInput: () => {
  //   window.alert('haha');
  // }
})




const root = document.getElementById('root');

ReactDom.render(e, root);