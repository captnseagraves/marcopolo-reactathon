import React, { Component } from 'react';
import './App.css';
import NewPool from './components/NewPool.jsx';
import Pool from './components/Pool.jsx';


// const pool = {
//     "id": 1,
//     "name": "Dog Water",
//     "description": "This Pool is dog friendly!!",
//     "image": "../images/DogWater.jpg",
//     "created_at": "2016-06-26T14:26:16.000Z",
//     "updated_at": "2016-06-26T14:26:16.000Z"
// }

// let pools = [];
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
        <NewPool />
        {this.state.pools.map((e) => {
          return <Pool pool={e} key={e.id}/>
        })}
      </div>
    );
  }
}

export default App;
