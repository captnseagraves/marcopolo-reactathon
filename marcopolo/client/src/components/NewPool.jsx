import React, {Component} from 'react';
import '../NewPool.css';

class NewPool extends Component {
  fun = () => {

  }

  render() {
    return (
      <form className="poolForm" name="poolForm">
        <div className="input-group text-left">
          <label>Pool Name</label>
          <br />
          <input type="text" className="form-control poolInput" />
        </div>
        <br />
        <div className="input-group text-left">
          <label>Pool Location</label>
          <br />
          <input type="text" className="form-control poolInput" />
        </div>
        <br />
        <div className="input-group text-left">
          <label>Pool Description</label>
          <br />
          <input type="text" className="form-control poolInput" />
        </div>
        <br />
        <div className="input-group text-left">
          <label>Pool Picture</label>
          <br />
          <input type="text" className="form-control poolInput" />
        </div>
      </form>
    )
  }
}


export default NewPool;
