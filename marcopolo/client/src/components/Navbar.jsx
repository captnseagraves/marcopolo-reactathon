import React, {Component} from 'react';
import '../Nav.css'
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" id="navfix">
        <div className="container-fluid">
        {/* <div className="navbar-header"> */}
            {/* <a className="navbar-brand" href="#" id="textalign"> */}
              <div id="brand">Pool Post</div>
            {/* </a> */}
          {/* </div> */}
        </div>
      </nav>
    )
  }
}

export default Navbar;
