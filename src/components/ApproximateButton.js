import React from "react";

class ApproximateButton extends React.Component {
  state = {
    isLoading: true,
    location: [],
    error: null
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

      console.log(location.city);
    }
    const { isLoading, location, error } = this.state;
    return (
      <div>
        <button onClick={handleButton}>
          click me
          </button>
          <div>{JSON.stringify(location, null, 2)}</div>

      </div>
    );
  }
}

export default ApproximateButton;