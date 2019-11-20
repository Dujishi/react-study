import React from 'react'

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log('01构造函数')
    this.state = { 
      msg:10086,
     };
  }

  componentWillMount(){
    console.log('02组件将要挂载')

  }

  componentDidMount(){
    console.log('04组件完成挂载')
  }

  render() {
    console.log('03数据渲染render')

    return (
      <div className='Life'>
      </div>
    );
  }
}

export default Life;