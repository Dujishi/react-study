import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
// import Home from './components/Home'
// import News from './components/New'
// import Event from './components/Event'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Home/>
        <News/>
        <Event/> */}
        <List/>
      </header>
    </div>
  );
}

export default App;
