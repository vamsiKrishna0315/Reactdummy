import React, { Component } from 'react';
import ListComponent from './listComponent';

class NavBar extends Component {
  state = {
    menuItems: [
      { menuName: 'Home', to: '/' },
      { menuName: 'Analytics', to: '/analytics' },
      { menuName: 'Rent', to: '/rent' },
      { menuName: 'Login Form', to: '/loginform' },
      { menuName: 'Product', to: '/product' }
    ]
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          Movies Back End
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
            <ListComponent menuItems={this.state.menuItems} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
