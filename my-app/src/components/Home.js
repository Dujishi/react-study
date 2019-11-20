import React from 'react'
import PropTypes from 'prop-types'

/**
 * 绑定属性 class 换成className 
 *  for 换成htmlFor
 * style换成行间样式 style={{}}
 */

class Home extends React.Component{
    constructor(props){
      super(props)

      this.state ={
          msg:'我是home组件',
          title:'我是一个title',
          color:'blue'
      }


      this.getMsg = this.getMsg.bind(this)
    }

    run(){
      alert('我是run方法')
    }

    getData(){
      alert(this.state.msg)
    }

    getMsg(){
      alert(this.state.msg)
    }

    getName=()=>{
      alert(this.state.msg)
    }

    setData=()=>{
        this.setState({
          msg:'改变后的值'
        })
    }

    setMsg=(str)=>{
      this.setState({
        msg:str
      })
  }

    render(){
      return (
        <div>

      <h1>我的数据{this.props.msgText}</h1>
        
          <h2>{this.state.msg}</h2> 
          
          <div title={this.state.title} className='red'>我是一个div</div>     

          <div style={{color:this.state.color}}>我是蓝色</div>    

          <button onClick={this.getData.bind(this)}>执行方法------第一种改变this指向</button>

          <button onClick={this.getMsg}>执行方法------第二种改变this指向</button>

          <button onClick={this.getName}>执行方法------第三种改变this指向</button>

          <button onClick={this.setData}>改变state值</button>

          <button onClick={this.setMsg.bind(this,'我是改变后的值')}>改变state值</button>

        </div>
      )
    }
    
 
  

}

Home.defaultProps={
  msgText:'没船只222'
}


Home.propTypes = {
  msgText:PropTypes.string
}
export default Home