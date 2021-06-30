import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
//import LocationOn from "@material-ui/icons/LocationOn";
//import HomeIcon from "@material-ui/icons/HomeIcon";
// core components
import GridContainer from "./components/GridContainer.js";
import GridItem from "./components/GridItem.js";
import Card from "./components/Card.js";

import image1 from "./img/bg.jpg";
import image2 from "./img/bg2.jpg";
import image3 from "./img/bg3.jpg";

export default function SectionCarousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <GridContainer>
      <GridItem xs={3} sm={4} md={4}>
        <Card>
          <Carousel span={12} style={{ marginTop: 20 }}>
            <div style={{ height: 50 }}>
              <img
                style={{ width: "50%", height: "50%" }}
                src={image1}
                alt="First slide"
               
              />
             
            </div>
            <div style={{ height: 400 }}>
              <img
                src={image2}
                alt="Second slide"
                className="slick-image"
              />
              
            </div>
            <div style={{ height: 400 }}>
              <img
                src={image3}
                alt="Third slide"
                className="slick-image"
              />
             
            </div>
          </Carousel>
        </Card>
      </GridItem>
    </GridContainer>
  );
}