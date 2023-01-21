import React, { Component, useState} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '50%'
};
const latitude = 0;
const longitude = 0;
export class MapContainer extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    },
    function(error){
      console.error("Error code =" +error.code +  error.msesage);
    });
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: latitude,
            lng: longitude
          }
        }
      />  
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA6MTpfVrCDiXw_JY5mBcd3Rjk0OdHi0VI'
})(MapContainer);