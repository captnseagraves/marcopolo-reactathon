import React, { Component } from 'react';

class NewPool extends Component {
  render() {
    return (
      <form className="poolForm" name="poolForm">
        <label>Pool Name</label>
          <input type="text"></input>
        <label>Pool Location</label>
          <input type="text"></input>
        <label>Pool Description</label>
          <textarea></textarea>
        <label>Pool Picture</label>
          <input type="text"></input>
      </form>
    );
  }
}

export default NewPool;
