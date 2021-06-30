import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
          HACKATHON
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/AddEntry" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/AddEntry">
                Add Entry
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/UpdateEntry" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/UpdateEntry">
                Update Entry
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/AboutUs" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/AboutUs">
                About Us
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);