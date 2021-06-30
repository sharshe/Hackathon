import React from 'react';
import logo from './party.jpg';
import './App.css';
import Link from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddEntry from './AddEntry';
import UpdateEntry from './UpdateEntry';
import Footer from './Footer';
import SectionCarousel from './SectionCarousel';
import API from './API';
import ControlledCarousel from './ControlledCarousel'
import AboutUs from './AboutUs';
import Home from  './Home'
import Navigation from './Navigation'


function App() {
  return (
    <div className="App" >
      
        {/* className="App-header"   style={{ backgroundImage: `url(${logo})` }} <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <h1 class="text-center text-black"> HACKATHON </h1> */}
      {/* <div>
        <img  className="App-header" src={logo} style={{  backgroundImage: `url(${logo})` , height:"100%" , width:"100%"}} />
      
        </div> */}

<header className="headerAll"  style={{ backgroundImage: `url(${logo})` }}>
       
      <Router >
      <Navigation />
     
        <Switch className="App-header"   style={{ backgroundImage: `url(${logo})` }}>
          <Route path="/AddEntry" exact component={() => <AddEntry />} />
          <Route path="/UpdateEntry" exact component={() => <UpdateEntry />} />
          <Route path="/SectionCarousel" exact component={() => <SectionCarousel />} />
          <Route path="/API" exact component={() => <API />} />
          {/* <Route path="/ControlledCarousel" exact component={() => <ControlledCarousel />} /> */}
          <Route path="/AboutUs" exact component={() => <AboutUs />} />
          <Route path="/" exact component={() => <Home />} />
        </Switch>
  
      </Router>

      {/* <button onClick={onsubmit} className="btn btn-primary">Submit</button>  */}
      
      <Footer/>
     
      </header>

     

    </div>
  );
}

export default App;
