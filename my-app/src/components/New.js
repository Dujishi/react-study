import React from 'react'
import logo from '../assets/images/logo.svg'

class News extends React.Component{
  constructor(props){
    super(props)
    this.state={
        list:['11111','22222'],
        list2:[<h2>我是h2标签</h2>,<h2>我是h2标签2</h2>]
    }
  }

  render(){

    var listResult = this.state.list.map((item,index)=>{
      return <li key={index}>
        {item}
      </li>
    })
    return (
    <div>
      <p>我是新闻组件</p>

      <img src={logo} alt=''></img>
      <img src={require('../assets/images/logo.svg')}  alt=''></img>
      <ul>
        {listResult}
      </ul>

    </div>
    )
  }
}

export default News