import React from "react";
import './DistanceBar.css'
import LocationButton from "./LocationButton";
function DistanceBar(){
    return(
    <div className="container">

    <img class="image" src="https://cdn-icons-png.flaticon.com/512/67/67347.png"/>
    <LocationButton class="button"/>
    <img class="image" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"/>
    <button class="button">Use Map</button>

    </div>
    )
}
export default DistanceBar;