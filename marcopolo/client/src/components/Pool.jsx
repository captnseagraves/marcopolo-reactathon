import React, {Component} from 'react';
import '../pool.css'
class Pool extends Component {
  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="well poolcont">
              <div className="media-left">
                <img className="media-object" src={this.props.pool.image} alt="A pool"/>
              </div>
              <div className="media-body">
                <h2 className="media-heading text-right">
                  {this.props.pool.name}
                </h2>
                <br />
                <br />
                <h3 className="text-left" id="description">
                  {this.props.pool.description}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pool;
