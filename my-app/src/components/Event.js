
/**
 * 事件对象  ：在触发Dom上某个事件会产生一个事件对象event 这个对象包含所有与事件相关的信息
 * 
 * 
 * 
 * 
 * 
 *  、键盘事件、表单事件、ref获取dom节点
 */




import React from 'react'

class Event extends React.Component{
  constructor(props){
    super(props)

    this.state={
        msg:'我是event组件'
    }
  }

  run=(event)=>{
    console.log(event)
    event.target.style.color='red'
    alert(event.target.getAttribute('aid'))
  }

  inputChange=(e)=>{
        console.log(e.target.value)
        this.setState({
          msg:e.target.value
        })
  }

  render(){
    return (
      <div>
          {this.state.msg}
          <h2>事件对象</h2>

          {/**事件对象 */}
          <button onClick={this.run} aid='123'>获取事件对象</button>

          <h2>表单事件</h2>

         {/**
          * 获取表单的值
          * 1.监听表单改变的事件
          * 2.在改变事件里面获取表单输入的值
          * 3.把表单输入的值赋值给userName
          * 4.点击按钮时候获取state里面的userName
          */}

          <input onChange={this.inputChange}/> <button>获取input值</button>

      </div>
    )
  }
}


export default Event