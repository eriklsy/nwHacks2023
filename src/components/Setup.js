import React from "react";
import './Setup.css';
import './FoodSelection.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Checkbox, CheckboxGroup, Stack} from '@chakra-ui/react'
import { useState } from 'react';
import poop from './1480289-200.png';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import FoodSelection from './FoodSelection';
import MapContainer from "./MapEmbed";

import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
  } from '@chakra-ui/react';
import "./DistanceBar.css"

import NumEaters from "./NumEaters";


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


    const handleSliderChange = (event) => {
        if (tabIndex != 0 ) {
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
  
    const handleTabsChange = (index) => {
      setTabIndex(index);
    }
    
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
       console.log (isShown);
        handleBoxClick();
        setIsShown(current => !current);

    }

    const [showBox, setBoxShown] = useState(true);
    const handleBoxClick = event => {
       console.log (showBox);
        setBoxShown(current => !current);
    }



    let elementStyle = {};
    if (!showBox) {
    elementStyle = { display: 'none' };
  }
   function sendData(){
    console.log(location)
   }

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
                                <Tab className="items" >
                                </Tab>
                                <Tab className='items'>
                                </Tab>
                                <Tab className='items' >
                                </Tab>
                                <Tab className='items' >
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
                            <div className="container">
                                <img class="image" src="https://cdn-icons-png.flaticon.com/512/67/67347.png"/>
                                <button class="button" onClick={handleExactLocation}>Near Me</button>
                                <img class="image" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"/>
                                <button class="button" onClick={handleSliderChange}>Use Map</button>
                                </div>
                                <h3>
                                    where are we eating?
                                </h3>


                                
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <div className='tab4'>
                                <MapContainer/>
                            </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    
                </div>
                 </Box>
            </div>
        {isShown && 
        <div>
            <FoodSelection/>
            <div class="findButton">
                <button id="find" onClick={sendData}>Find a Restaurant</button>
            </div>
        </div>}
        </div>
    );
}


export default Setup;