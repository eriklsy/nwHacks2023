import React from "react";
import './Setup.css';
import './FoodSelection.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import { useState } from 'react';
import poop from './1480289-200.png';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import FoodSelection from './FoodSelection';


function Setup() {
    const [tabIndex, setTabIndex] = useState(0)

    const handleSliderChange = (event) => {
      setTabIndex((tabIndex + 1)%4);
    }
  
    const handleTabsChange = (index) => {
      setTabIndex(index);
    }

    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
       console.log (isShown);
        setIsShown(current => !current);
    }




    return(
        <Box id="setupbox">
            <div>
                <button onClick={handleSliderChange} id="next-button">
                    <img src={poop} alt="next button"/>
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
                                how many eaters?
                            </h3>
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className='tab2'>
                            <h3>
                                what's the price range?
                            </h3>
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className='tab3'>
                            <h3>
                                where are we eating?
                            </h3>
                            <IconButton onClick={function() {handleClick()}} className="finalBtn"
                                colorScheme='blue'
                                aria-label='Search database'
                                size='lg'
                                icon={<ArrowRightIcon/>}/>
                            {isShown && <FoodSelection/>}
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
    );
}


export default Setup;