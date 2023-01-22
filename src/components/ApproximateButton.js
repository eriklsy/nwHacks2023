import React from "react";
import MapEmbed from './MapEmbed'
class ApproximateButton extends React.Component {
  state = {
    isLoading: true,
    location: [],
    error: null,
    showMap: false,
  };

  fetchIpLocation() {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data =>
        this.setState({
          location: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchIpLocation();
  }
  render() {
    function handleButton(){
      this.setState({
        showMap:true,
      })
      console.log(this.state);
    }
    const { isLoading, location, error } = this.state;
    const city = location.city;
    return (
      <div>
        <button onClick={handleButton.bind(this)}>
          Approximate Location
          </button>
      {this.state.showMap && <MapEmbed/>}
      <h1>{this.state.showMap && <p>Approximate Location: {city}</p>}</h1>
      </div>
    );
  }
}

export default ApproximateButton;