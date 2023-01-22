import React from "react";
import './Setup.css';
import './FoodSelection.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Checkbox, Stack} from '@chakra-ui/react'
import { useState } from 'react';
import poop from './1480289-200.png';
import FoodSelection from './FoodSelection';
import MapContainer from "./MapEmbed";

import "./DistanceBar.css"

import "./NumEaters";


function Setup() {
    const[location,setLocation] = useState({});
    let [eaters, setEaters] = useState(1);
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
    const [showPoop,setPoop] = useState(true);
    const [tabIndex, setTabIndex] = useState(0)
    function  handleExactLocation(){
        handleClick();
        getLocation()
        console.log(location)
    }

    window.onSelectMarker=(markerLocation) =>{
        setLocation(markerLocation);
        console.log(location)
        console.log(markerLocation)
    }

    function  submitLocation(){
        handleClick();

        console.log(location)
    }

    const handleSliderChange = (event) => {
        if (tabIndex !== 0 ) {
            setTabIndex((tabIndex + 1)%4);
            console.log(tabIndex);
        } else if(tabIndex >= 3){
            console.log(showPoop);
            setPoop(false);
            console.log(tabIndex);
        }
        
        
        else {
            console.log(showPoop)
            console.log(eaters);
            setTabIndex((tabIndex + 1)%4);
           
            console.log(tabIndex);
        }
        
    }
  
    
    const [isShown, setIsShown] = useState(false);
    
    const handleClick = event => {
       console.log (isShown);
        handleBoxClick();
        setIsShown(current => !current);
        console.log (isShown);

    }

    const [showBox, setBoxShown] = useState(true);
    const handleBoxClick = event => {
       console.log (showBox);
        setBoxShown(current => !current);
    }

   

    function sendData(){
        console.log(location)
        setIsShown(false)
        setBoxShown(true)
        setTabIndex(4)
        console.log(list)
    }

    const [list, setList] = useState([]);

    return(
        <div>
            <div style={!showBox ? {display: 'none'} : {}}>
                <Box id="setupbox">
                
            
                 <div
                 >
                     <button onClick={handleSliderChange} id="next-button"
                     style={{
                        display: tabIndex >= 2 ? 'none' : 'inline'
                     }}>
                        <img src={poop} id = "arrowimg" alt="next-button"/>
                        </button>
                        </div>
                <div
                style={{
                    display: tabIndex >= 2 ? 'none' : 'inline'
                 }}>
                    <button onClick={handleSliderChange} id="next-button">
                        <img src={poop} id = "arrowimg"  className = "invert" alt="next button"/>
                    </button>
                </div>
                <div>
                 
                    <Tabs 
                    align="center" 
                    isFitted variant='enclosed'
                    
                    index={tabIndex}>
                        <TabList>
                            <div className='listof'>   
                                <Tab className="items"  style={{
                                    backgroundColor: tabIndex >= 0 ? 'white': '#0F0F0F'
                                }} >
                                </Tab>
                                <Tab className='items' style={{
                                    backgroundColor: tabIndex >= 1 ? 'white': '#0F0F0F'
                                }}>
                                </Tab>
                                <Tab className='items'
                                 style={{
                                    backgroundColor: tabIndex >= 2 ? 'white': '#0F0F0F'
                                }}
                                 >
                                </Tab>
                                <Tab className='items'
                                 style={{
                                    backgroundColor: tabIndex >= 3 ? 'white': '#0F0F0F'
                                }} >
                                </Tab>
                                <Tab className='items'
                                 style={{
                                    backgroundColor: tabIndex >= 4 ? 'white': '#0F0F0F'
                                }} >
                                </Tab>
                            </div>
                        </TabList>
                        <TabPanels className="alltabs" borderRadius = "50%">
                            <TabPanel borderRadius = "50%" marginBottom = "-10px">
                            <div className='tab1' >
                                
                                <h3 class = "inputArea">
                                        <p id = "numberDial">

                                        <input
                                        type="number"
                                        min="1"
                                        pattern="[0-9]*"
                                            value={eaters}
                                            onChange={e => setEaters(e.target.value)}
                                        />
                                        </p>
                                    How many people will be going?
                                </h3>
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <div className='tab2'>
                                <div className="checklist">
                    
                                    <Stack textAlign= "center" zIndex = {5} spacing={30} direction={'row'} opacity = "90%" height = "80px">
                                        <div class = "boxList">
                                            <Checkbox marginTop = "13px" marginRight = "50px" zIndex = {2} colorScheme='red'>
                                                $
                                            </Checkbox>
                                            <Checkbox  marginTop = "13px"  marginRight = "50px" colorScheme='green'>
                                                $$
                                            </Checkbox>
                                            <Checkbox  marginTop = "13px"  marginRight = "50px" colorScheme='green'>
                                                $$$
                                            </Checkbox>
                                            <Checkbox marginTop = "13px"  marginRight = "auto" colorScheme='green'>
                                                $$$$
                                            </Checkbox>
                                        </div>
                                    </Stack>
                                </div>
                                <h3>
                                    What's the price range?
                                </h3>
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <div className='tab3'>
                                <div className="tab3container">
                                    <div className="tab3column">
                                        <img className= "image" id="near" src="https://cdn-icons-png.flaticon.com/512/67/67347.png" alt="near me"/>
                                        <button class="tab3button" onClick={handleExactLocation}>Near Me</button>
                                    </div>
                                    <div className="tab3column">
                                        <img className="image" id="map" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" alt="google maps"/>
                                        <button class="tab3button" onClick={handleSliderChange}>Use Map</button>
                                    </div>
                                </div>
                                <h3>
                                    Where are we eating?
                                </h3>


                                
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <div className='tab4'>
                                <MapContainer/>
                                <button class="tab3button" onClick={submitLocation} >Select Location</button>
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <div className='tab5'>
                                <h3>
                                    Restaurant:
                                </h3>
                            </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    
                </div>
                 </Box>
            </div>
            {isShown && 
        <div>
            <FoodSelection onList={(l)=>setList(l)}/>
    
            <div class="findButton">
                <button id="find" onClick={sendData}>Find a Restaurant</button>
            </div>
            
        </div>}
        </div>
    );
}


export default Setup;