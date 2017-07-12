import React, {Component} from 'react';
import '../NewPool.css';

class NewPool extends Component {
  constructor() {
    super();
    this.state = {
      name: 'name-value'
    };
     this.submitForm = this.submitForm.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }

  async submitForm (e){
    e.preventDefault();
    console.log(this.state);
    let data = {name:this.state.name, description:this.state.description, image:this.state.description}

    const response = await fetch('http://localhost:3003', {
      method:'post',
      body: data
    })
    //const json = response.json()
    console.log(response)

  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
    this.setState({[e.target.description]: e.target.value})
    this.setState({[e.target.image]:e.target.value})
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
