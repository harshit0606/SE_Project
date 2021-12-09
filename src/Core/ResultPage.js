import React from 'react'
import {useState} from "react";
import "../Styles/search.css"
import Footer from "../Components/Footer";
import { Carousel } from "react-bootstrap";
import Header from "../Components/Header";
function ResultPage(props) {
    const [duration,setDuration]=useState(props.match.params.duration);
    const [destination,setDestination]=useState(props.match.params.destination);
    const [budget,setBudget]=useState(props.match.params.budget);

    
    return (

        <div>
            <Header/>
            <div className="home-carousel">
      <Carousel>
       
        <Carousel.Item className="container-fluid carousel-item item-two">
          <div className="landing-div">
            <h1 className="carousel-title">Discover new </h1>
            <h4 className="carousel-subtitle">
              
            </h4>
            <div>
            
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel>

    </div>
        <div className="resultpage_maindiv">
        
        </div>
            
            <Footer/>
        </div>
    )
}

export default ResultPage
