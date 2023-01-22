import React, { useState, useEffect } from 'react';

function GoogleRestaurant({latitude, longitude, food}) {
  const [places, setPlaces] = useState([]);
  const fetchData = async()=>{
    const url = new URL("http://localhost:4000/findRestaurant")
    url.searchParams.set("latitude", latitude)
    url.searchParams.set("longitude", longitude)
    if(food) url.searchParams.set("food", food)
    const result = await fetch(url, {
      method: "GET",
    })
    const data = await result.json()
    // data.candidates
    setPlaces([{
      id: data.candidates[0].place_id,
      name: "Foodiepower UBC - Chinese Cuisine",
      formatted_address: "5728 University Blvd B8, Vancouver, BC V6T1K6"
    }])
  }
  useEffect(()=>{fetchData()}, [])
  

  return (
    <div>
      {places.map((place, i) => (
        <div key={place.id}>
          <p>Name: {place.name}</p>
          <p>Address: {place.formatted_address}</p>
        </div>
      ))}
    </div>
  );
}

export default GoogleRestaurant;
