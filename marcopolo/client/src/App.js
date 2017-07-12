import React, { Component } from 'react';
import './App.css';
import NewPool from './components/NewPool.jsx';
import Pool from './components/Pool.jsx';
import Navbar from './components/Navbar.jsx';

class App extends Component {
  state = {
    pools: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3003')
    const json = await response.json()
    this.setState({pools: json})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <NewPool />
        <br />
        <br />
        { this.state.pools.map(e => <Pool pool={e} key={e.id}/> ) }
      </div>
    );
  }
}

export default App;
