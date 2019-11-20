import React from 'react'
class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[]
     };
  }
  addData=()=>{
    var temList = this.state.list
    temList.push(this.refs.title.value)
    this.refs.title.value = ''
    this.setState({
      list:temList
    })
  }

  removeData=(index)=>{
    var temList = this.state.list
    temList.splice(index,1)
    this.setState({
      list:temList
    })
  }

  render() {
    return (
      <div>
        <h2>React todolist 案例</h2>
        <input ref='title' className='el-input__inner'></input>  <button onClick={this.addData} className='el-button'>增加</button>
        <h2>待办事项</h2>
        <ul >
         {
           this.state.list.map((item,index)=>{
             return (
               <li key={index}>{item}
               <button onClick={this.removeData.bind(this,index)} className='el-button'>删除</button>
               </li>
             )
           })
         }
        </ul>
 
        <h2>已完成事项</h2>
        <ul >
         {
           this.state.list.map((item,index)=>{
             return (
               <li key={index}>{item}
               <button onClick={this.removeData.bind(this,index)} className='el-button'>删除</button>
               </li>
             )
           })
         }
        </ul>


      </div>
    );
  }
}

export default Todolist;