import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import "./BrowseImages.css";
import { GoTriangleLeft } from "react-icons/go";
import { FiRotateCcw } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";

const images = require.context('../images', true);
const imageList = images.keys().map(image => images(image)); // Map image paths



function BrowsePage() {

    let navigate = useNavigate(); 
    const routeChange = () => { 
    let path = `/genImages`;  // Ensure the path matches the route defined in App.js
    navigate(path);
}

    return (
        <div>
            <Header />
            <button className="go-back-button" onClick={routeChange}>
            <GoTriangleLeft color="white" fontSize={25}/>
                Go back
            </button>

            <div className="grid">
            {imageList.map((image, index) => (
                // Some Webpack configurations require .default, some don't. Try without first.
                <img key={index} src={image.default || image} alt={`image-${index}`} className="grid-item" />
            ))}
        </div>

        <button color="primary" className="gen-again-button">
                <FaRegCircle className="circle-icon"/>
                <FiRotateCcw className="rotate-icon"/>
            </button>

        </div>
    );
}

export default BrowsePage;