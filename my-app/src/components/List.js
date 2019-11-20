import React from 'react'
import Home from './Home'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      msg:10086,
     };
  }

  render() {
    return (
      <div className='list'>
        <h2 style={{color:'red'}} className='bigFont'>{this.state.msg}</h2>
        <Home msgText={this.state.msg}/>
      </div>
    );
  }
}

export default List;