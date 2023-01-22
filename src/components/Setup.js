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

    const [tabIndex, setTabIndex] = useState(0)
    function  handleExactLocation(){
        handleClick();
        getLocation()
        console.log(location)
    }
    
    function  handleMarkerLocation(){
        handleClick();
        setLocation({
            lat: 49.2827291,
            lng: -123.1207375,
        })
        console.log(location)
        
    }

    const handleSliderChange = (event) => {
        if (tabIndex != 0 ) {
            setTabIndex((tabIndex + 1)%4);
        } else {
            
            console.log(eaters);
            setTabIndex((tabIndex + 1)%4);
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
  function addValue(value){
    setLocation(value);
  }
    return(
        <div>
            <div style={!showBox ? {display: 'none'} : {}}>
            <Box id="setupbox">
            
                <div>
                    <button onClick={handleSliderChange} id="next-button">
                        <img src={poop} id = "arrowimg" alt="next button"/>
                    </button>
                </div>
                <div>
                
                    <Tabs 
                    align="center" 
                    isFitted variant='enclosed'
                    onChange={handleTabsChange}
                    index={tabIndex}>
                        <TabList>
                            <div className='listof'>   
                                <Tab className="items">
                                </Tab>
                                <Tab className='items'>
                                </Tab>
                                <Tab className='items'>
                                </Tab>
                                <Tab className='items'>
                                </Tab>
                            </div>
                        </TabList>
                        <TabPanels className="alltabs">
                            <TabPanel>
                            <div className='tab1'>
                                
                                <h3>
                                        <p>
                                        
                                        <input
                                        type="number"
                                        min="1"
                                        pattern="[0-9]*"
                                            value={eaters}
                                            onChange={e => setEaters(e.target.value)}
                                        />
                                        </p>
                                    how many eaters?
                                </h3>
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <div className='tab2'>
                                <div className="checklist">
                    
                                    <Stack zIndex = {5} spacing={40} direction={'row'}>
                                    <Checkbox zIndex = {2} marginLeft = "280px" colorScheme='red'>
                                        $
                                    </Checkbox>
                                    <Checkbox colorScheme='green'>
                                        $$
                                    </Checkbox>
                                    <Checkbox colorScheme='green'>
                                        $$$
                                    </Checkbox>
                                    <Checkbox marginRight = "auto" colorScheme='green'>
                                        $$$$
                                    </Checkbox>
                                    </Stack>
                                </div>
                                <h3>
                                    what's the price range?
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
                                <IconButton onClick={function(){handleClick()}} className="finalBtn"
                                    colorScheme='blue'
                                    aria-label='Search database'
                                    size='lg'
                                    icon={<ArrowRightIcon/>}/>

                                
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <div className='tab4'>
                            <button class="button" onClick={handleMarkerLocation}>Submit Marker</button>
                                <MapContainer

                                />
                            </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    
                </div>
                
            </Box>
            </div>
        {isShown && <FoodSelection/>}
        </div>
    );
}


export default Setup;