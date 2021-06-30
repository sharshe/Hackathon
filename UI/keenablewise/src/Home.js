import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logo from './1912591.jpg';
import './App.css'



class Home extends Component {

 

  render() {
    return (
      <div>
      
        
          <Link to="/AddEntry">
           <button className="button is-white" color="primary">Employee Form</button>
           {/* <Button variant="contained" color="primary" ></Button> */}
          </Link>
      </div>
    );
  }
}

export default Home;
