import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = (props) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand " to="/">
          MovieTvInfo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <a className="nav-item nav-link active" href="#">
              Home 
            </a> */}
            
          </div>
        </div>
      </nav>
    );
}
 
export default Navbar;