import React, { Component } from 'react'


// fetch('網址')
// .then(function(response) {
//     // 處理 response
// }).catch(function(err) {
//     // 錯誤處理
// });
export default class Hw14Pokemon extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword:"",
      pok:[]
    }
  }

  /**
   * 你這邊只是定義 callApi 這個程式，但沒有呼叫，如果你要呼叫的話，不用特別寫 this.callApi = XXX
   * 直接呼叫就可以了，像這樣…
   * 然後呢，如果你的 => FUNCTION 只有一個return值，你可以省略 return 與 { .... }
   * 那是當然的，因為 url 根本就不是圖片的網址，而且我的說明裡其實就有講到…↓
   */
  componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        pok: json.results
      })
    });
  }

  handleChange = (e) => {
    this.setState({
      keyword:e.target.value
    })
  }
  render() {
    const pokData = this.state.pok.filter(element =>
      element.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1
      )
    return (
      <div>
        <h2>Pokemon</h2>
        <h3>前提</h3>
        <div>
          <div>請使用 https://pokeapi.co/api/v2/pokemon/?limit=100 來抓取100取寶可夢資訊</div>
          {/* 這邊有提到 id 可以從 url 中取得，但url並不是圖片位置，你要想辦法取的那個 id */}
          <div>每隻寶可夢的資料皆有 name, url 可從 url 取得該寶可夢的 id</div>
          <div>每隻寶可夢的圖片位址為： </div>
          {/*  我這邊就有說到，看這邊 */}
          <div>https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/[id].png</div>
        </div>
        <h3>目標</h3>
        <ol>
          <li>利抓取 100 隻寶可夢的名字 與 圖片</li>
          <li>可以依名字篩選出寶可夢</li>
          <span>keyword
            <input type="text"
              placeholder="name..."
              value={this.state.keyword}
              onChange={this.handleChange}
            />
          </span>
        </ol>
        <table>
        <tbody>
        {/* 而且…你這邊的 pokemon.index 是怎麼回事啊，你拿回來的資料裡，每個物件中有 index 
        如果你要設key，我建議你可以直接用 name，因為 pokemon的名字不會重複*/}
        {pokData.map(function(pokemon){
            return(
            <tr key={pokemon.name}>
              {/* 然後這邊的url不是圖片位置，請注意。 */}
              <td><img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(pokemon.url).slice(34,-1)+'.png'} /></td>
              <td>{pokemon.name}</td>
            </tr>
            )
          })}
        </tbody>
        </table>
      </div>
    )
  }
}
