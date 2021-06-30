import React from 'react';
import logo from './party.jpg';
import us from './img/us.jpg';
import './App.css';
//import './About.css';


function AboutUs() {
  return (
    <div>
        <header  style={{ backgroundImage: `url(${logo})` }}>
            <div>
        <img src={us} style={{ height:"100%" , width:"100%"}} alt="" />
        </div>
      <div class="py-4 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">+91 120 421 7213  </p>

          <p class="m-0 text-center text-white">sales@keenable.in  </p>

          <p class="m-0 text-center text-white">B149, Ground Floor, Sector 63, Noida, India - 201301  </p>

          <p class="m-0 text-center text-white">1st Floor, SCO M37, Old DLF Colony, Sector 14, Gurugram, India - 122003  </p>
       
        <br/>

        <p class="m-0 text-center text-white">©2021 by Keen and Able Computers Pvt. Ltd.</p>
        </div>
      </div>
    
      </header>
    </div>
  );
}

export default AboutUs;