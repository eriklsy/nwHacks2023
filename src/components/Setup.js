import React from "react";
import './Setup.css';
import { Progress, Spinner } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

function Setup() {

    const [counter, setCounter] = useState(0);

    useEffect(function update(){
        Setup2();
    }, [counter]);

    return(
        <div id ="setu">
            <Spinner/>
            <div id="setupbox">
                
                <div class ="dots"></div>
                <div class ="dots" id="dot2"></div>
                <div class ="dots" id="dot3"></div>
                <Progress value={80} />
                <IconButton onClick={function() {setCounter(counter + 1)}} class="nextBtn"
                    colorScheme='blue'
                    aria-label='Search database'
                    size='lg'
                    icon={<ArrowRightIcon/>}/>
            </div>
        </div>  
    )
}

function Setup2(){
    return(
        
        <div id ="setu">
            <Spinner/>
            
        <div id="setupbox">
            
            <div class ="dots"></div>
            <div class ="dots" id="dot4"></div>
            <div class ="dots" id="dot3"></div>
            <Progress value={80} />
        </div>
        </div>
        
    )
}

export default Setup;