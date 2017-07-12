import React, { Component } from 'react';
import './App.css';
import NewPool from './components/NewPool.jsx';
import Pool from './components/Pool.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewPool />
        <Pool />
      </div>
    );
  }
}

export default App;
