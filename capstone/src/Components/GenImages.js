import React from "react";
import Header from "./Header";
import { List } from "reactstrap";

function GenImages(){
    return (
        <div>
            <Header />
            <h1 className="design-text">From vision to reality - generate <b>your</b> room</h1>
            <hr width="70%" />
            <h2>Design</h2>

            <div className="options">
            <label for="roomType">Type of room:</label>
            <select id="roomType" name="roomType">
                <option value="blank" selected disabled hidden>Select room</option>
                <option value="bedroom">Bedroom</option>
                <option value="dorm">Dorm room</option>
                <option value="studio">Studio Apartment</option>
            </select>

            <label for="roomSize">Type of room:</label>
            <input type="text" id="size" name="size"></input>
            
            </div>

        </div>
    );
}

export default GenImages;