import React, { Component, useState} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import Geocode from "react-geocode";
const mapStyles = {
  width: '25%',
  height: '85%'
};
Geocode.setApiKey("AIzaSyA6MTpfVrCDiXw_JY5mBcd3Rjk0OdHi0VI");

export class MapContainer extends Component {
  constructor(props){
    super(props);
  
  }
  state ={
    city: "Vancouver",
    latitude: 49.2827291,
    longitude: -123.1207375,
    selectedLat: 49.2827291,
  }
  componentDidMount() {
    console.log(this.props.city)
   /* Geocode.fromAddress(this.props.city).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
       console.log(lat);
       console.log(lng);
      },
      (error) => {
        console.error(error);
      }
    );*/
  }
  render() {  
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: this.state.latitude,
            lng: this.state.longitude
          }
        }
      />
    
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA6MTpfVrCDiXw_JY5mBcd3Rjk0OdHi0VI'
})(MapContainer);