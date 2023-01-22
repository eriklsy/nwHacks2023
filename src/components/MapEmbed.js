import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { React, useEffect, useState } from "react"

// class MapEmbed extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             lat: 49.2827291,
//             lng: -123.1207375
//         };
        
//     }
   
//     render() {
        
//     }
// }
export function MapEmbed(props) {
    const[location,setLocation] = useState({lat: 49.2827291, lng: -123.1207375});
    
    const handleMapClick = (event) => {
        console.log(event)
        // console.log(props);
        setLocation({
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        });
        window.onSelectMarker(location);
        // props.onSelectMarker(location);
        console.log(location);
    }

    useEffect(()=>{
        window.onSelectMarker(location);
    })

    return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: location.lat, lng: location.lng }}
                onClick={handleMapClick}
            >
                <Marker
                    position={{ lat: location.lat, lng: location.lng }}
                />
            </GoogleMap>
        );
}
const WrappedMapWithAMarker = withScriptjs(withGoogleMap(MapEmbed));

export function MapContainer(props) {
    return (
        <WrappedMapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6MTpfVrCDiXw_JY5mBcd3Rjk0OdHi0VI&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
}

export default MapContainer;