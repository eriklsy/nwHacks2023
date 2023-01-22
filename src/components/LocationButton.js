import React, {useState } from "react";

function LocationButton(){

    const[location,setLocation] = useState({});
    function getLocation(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                
              });
            },
            (error) => console.log(error)
          );
    }
return(
    <div>
        <button
         w="100"
         onClick={getLocation}>
            Exact Location
            <p>
            {location.lat};
            {location.lng};
            </p>
        </button>
    </div>
    
);
}

export default LocationButton;