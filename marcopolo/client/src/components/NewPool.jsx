import React, {Component} from 'react';
import '../NewPool.css';

class NewPool extends Component {
  constructor() {
    super();
    this.state = {
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  submitForm = (e) => {
    e.preventDefault();
    let data = JSON.stringify(this.state);
    fetch('http://localhost:3003', {
      method:'POST',
      mode:'',
      type: '',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then(result => {
      return result.json();
    })
    .then(json => {
      console.log(json);
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
    // this.setState({[e.target.description]: e.target.value})
    // this.setState({[e.target.image]:e.target.value})

  }

  render() {
    return (
      <form className="poolForm" name="poolForm" onSubmit={this.submitForm}>
        <div className="input-group text-left">
          <label>Pool Name</label>
          <br />
          <input name="name" value={this.state.name} onChange={this.handleChange} type="text" className="form-control poolInput" />
        </div>
        <br />
        <div className="input-group text-left">
          <label>Pool Description</label>
          <br />
          <input name="description" value={this.state.description} type="text" className="form-control poolInput" onChange={this.handleChange}/>
        </div>
        <br />
        <div className="input-group text-left">
          <label>Pool Picture</label>
          <br />
          <input name="image" value={this.props.image} type="text" className="form-control poolInput" onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}


export default NewPool;
