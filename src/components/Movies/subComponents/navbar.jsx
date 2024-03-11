import React, { Component } from 'react';
import ListComponent from './listComponent';

class NavBar extends Component {
  state = {
    menuNames: ['Home', 'Analytics', 'Rent', 'Add Movie']
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Movies Back End
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <ListComponent menuNames={this.state.menuNames} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
