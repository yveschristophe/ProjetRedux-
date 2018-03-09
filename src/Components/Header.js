import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
       <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">Logo</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#!"><i class="fas fa-shopping-basket fa-2x"></i></a></li>
        </ul>
      </div>
    </nav>
  </div>
    );
  }
}

export default Header;
