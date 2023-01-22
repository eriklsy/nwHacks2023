import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from "react"

class MapEmbed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 49.2827291,
            lng: -123.1207375
        };
    }
    handleMapClick = (event) => {
        this.setState({
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        });
    }
    render() {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
                onClick={this.handleMapClick}
            >
                <Marker
                    position={{ lat: this.state.lat, lng: this.state.lng }}
                />
            </GoogleMap>
        );
    }
}

const WrappedMapWithAMarker = withScriptjs(withGoogleMap(MapEmbed));

function MapContainer() {
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