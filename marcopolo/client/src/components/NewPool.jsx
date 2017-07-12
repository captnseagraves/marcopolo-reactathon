import React, {Component} from 'react';
import '../NewPool.css';

class NewPool extends Component {
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
{/* <form className="poolForm" name="poolForm">
  <label className="row text-left">Pool Name
    <br/>
    <input type="text" className="col-xs-12"></input>

  <br/>
  <label className="row text-left">Pool Location
    <br/>
    <input type="text" className="col-xs-12"></input>
  </label>
  <br/>
  <label className="row text-left">Pool Description
    <br/>
    <textarea className="col-xs-12"></textarea>
  </label>
  <br/>
  <label className="row text-left">Pool Picture
    <br/>
    <input type="text" className="col-xs-12"></input>
  </label>
</form> */}
