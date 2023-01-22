import React from "react";
import './Setup.css';
import './FoodSelection.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Checkbox, CheckboxGroup, Stack} from '@chakra-ui/react'
import { useState } from 'react';
import poop from './1480289-200.png';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import FoodSelection from './FoodSelection';
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
        setTabIndex((tabIndex+1))
        getLocation()
        console.log(location)
    }

    const handleSliderChange = (event) => {
      setTabIndex((tabIndex + 1)%4);
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
                                <NumEaters/>
                                    how many eaters?
                                </h3>
                            </div>
                            </TabPanel>
                            <TabPanel>
                            <div className='tab2'>
                                <div className="checklist">
                    
                                    <Stack zIndex = {5} spacing={35} direction='row'>
                                    <Checkbox zIndex = {2} marginLeft = "280px" colorScheme='red' defaultChecked>
                                        $
                                    </Checkbox>
                                    <Checkbox colorScheme='green' defaultChecked>
                                        $$
                                    </Checkbox>
                                    <Checkbox colorScheme='green' defaultChecked>
                                        $$$
                                    </Checkbox>
                                    <Checkbox marginRight = "auto" colorScheme='green' defaultChecked>
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
                                <button class="button">Use Map</button>
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