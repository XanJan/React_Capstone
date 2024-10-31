import React, { Component, useContext, useRef } from "react";
import { Button, Container } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import Header from './Header.js';
import "./StartPage.css";
import { FaPlus } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

// Import images using require.context
const images = require.context('../images/images_startpage', true);
const imageList = images.keys().map(image => images(image)); // Map image paths




function StartPage() {

    let navigate = useNavigate(); 
    const routeChange = () => { 
        let path = `/genImages`;  // Ensure the path matches the route defined in App.js
        navigate(path);
    }


    return (
        <div>
        <Header />
        
        <div className="grid">
            {imageList.map((image, index) => (
                // Some Webpack configurations require .default, some don't. Try without first.
                <img key={index} src={image.default || image} alt={`image-${index}`} className="grid-item" />
            ))}
        </div>


          <button color="primary" className="start-button"
            onClick={routeChange}>
                <FaRegCircle className="circle-icon"/>
              <FaPlus className="plus-icon"/>
            </button>
      
        </div>
    );
}

export default StartPage;