import React from "react";
import './Setup.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import { useState } from 'react';


function Setup() {
    const [tabIndex, setTabIndex] = useState(0)

    const handleSliderChange = (event) => {
      setTabIndex((tabIndex + 1)%4);
    }
  
    const handleTabsChange = (index) => {
      setTabIndex(index);
    }






    return(
        <Box id="setupbox">
            <div>
                <button onClick={handleSliderChange} id="next-button"> {tabIndex} Next </button>
            </div>
            <div>
                <Tabs 
                align="center" 
                isFitted variant='enclosed'
                onChange={handleTabsChange}
                index={tabIndex}>
                    <TabList>
                        <div class='select'>   
                            <Tab>
                            </Tab>
                            <Tab>
                            </Tab>
                            <Tab>
                            </Tab>
                            <Tab>
                            </Tab>
                        </div>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                        <p>How Many People?</p>
                        </TabPanel>
                        <TabPanel>
                        <p>Where are you</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </Box>
    );
}


export default Setup;