import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
        <div className='hey'>Hey, this is the app component.</div>
        <div className='love'>It loves life.</div>
      </div>
    );
  }
}

export default App;
