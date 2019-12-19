import React, { Component } from 'react'

export default class Hw14Pokemon extends Component {
  render() {
    return (
      <div>
        <h2>Pokemon</h2>
        <h3>前提</h3>
        <div>
          <div>請使用 https://pokeapi.co/api/v2/pokemon/?limit=100 來抓取100取寶可夢資訊</div>
          <div>每隻寶可夢的資料皆有 name, url 可從 url 取得該寶可夢的 id</div>
          <div>每隻寶可夢的圖片位址為： </div>
          <div>https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/[id].png</div>
        </div>
        <h3>目標</h3>
        <ol>
          <li>利抓取 100 隻寶可夢的名字 與 圖片</li>
          <li>可以依名字篩選出寶可夢</li>
        </ol>
      </div>
    )
  }
}
