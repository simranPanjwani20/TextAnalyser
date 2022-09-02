import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">
            {/* making title a variable which can be passed according to the requirements */}
         { props.title} 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          
        </div>
      </nav>
     
      <div class="form-check form-switch my-3 mx-3">
  <input onClick={props.togglingmode} class="form-check-input" type="checkbox"  id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable dark mode</label>
</div>
{/* <div class="form-check form-switch my-3 mx-3">
  <input onClick={props.togglingmode} class="form-check-input" type="checkbox"  id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable red dark mode</label>
</div>
<div class="form-check form-switch my-3 mx-3">
  <input onClick={props.togglingmode} class="form-check-input" type="checkbox"  id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable green dark mode</label>
</div> */}

    </>
  )
}
Navbar.propTypes ={
    title: PropTypes.string.isRequired, //set proptype as required always 
    about : PropTypes.string
}
Navbar.defaultProps = { //setting default props if no value is passed
    title: 'Stranger'
  };
