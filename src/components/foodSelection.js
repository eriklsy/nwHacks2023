import React from "react";
import './FoodSelection.css';
import indian from './pics/india.jpg';
import brunch from './pics/brunch.jpg';
import cafe from './pics/cafe.jpg';
import casual from './pics/casual.jpg';
import chinese from './pics/chinese.jpg';
import fast from './pics/fast.jpg';
import italian from './pics/italian.jpg';
import idc from './pics/idc.jpg';
import japanese from './pics/japanese.jpg';
import korean from './pics/korean.jpg';
import viet from './pics/viet.jpg';
import burger from './pics/burger.jpg';
import { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import './imageGrid.css'






function FoodSelection(){  
    const [listofFoods, setFood] = useState([]);

    const handleAddFood = (id) =>{
        setFood([...listofFoods,id])
        console.log(listofFoods)
    }
    
  const handleRemoveFood = (id) => {
    setFood(listofFoods.filter(listofFoods => listofFoods !== id));
  }
    return(
        <div className="main">
        



        <div className="row1">
            <div className = "categ" >
                <img src = {idc} className="itemselection" onClick={() =>{
                    if(listofFoods.includes("idc")){
                        handleRemoveFood("idc");
                    }else{
                        handleAddFood("idc");
                    }
                }}
                style={{
                    border: listofFoods.includes("idc") ? '5px solid green' : 'none'
                  }}/>
                
                <p className = "fooddescription">I'm feeling lucky</p>
            </div>

            <div className = "categ">
            
                <img src = {chinese} className="itemselection" onClick={() =>{
                    if(listofFoods.includes("Chinese")){
                        handleRemoveFood("Chinese");
                    }else{
                        handleAddFood("Chinese");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Chinese") ? '5px solid green' : 'none'
                  }}
                />
                <p className = "fooddescription">Chinese</p>
            </div>
            
            <div className = "categ">
                <img src = {fast} className ="itemselection" onClick={() =>{
                    if(listofFoods.includes("Fastfood")){
                        handleRemoveFood("Fastfood");
                    }else{
                        handleAddFood("Fastfood");
                    }
                }}
                style={{
                    border: listofFoods.includes("Fastfood") ? '5px solid green' : 'none'
                  }} />
                <p className = "fooddescription">Fast Food</p> 
            </div>
        </div>

        <div className="row2">
            <div className = "categ">
       
                <img src = {korean} className="itemselection" onClick={() =>{
                    if(listofFoods.includes("Korean")){
                        handleRemoveFood("Korean");
                    }else{
                        handleAddFood("Korean");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Korean") ? '5px solid green' : 'none'
                  }}/>
                <p className = "fooddescription">Korean</p>
            </div>

            <div className = "categ">
            
                <img src = {japanese} class="itemselection" onClick={() =>{
                    if(listofFoods.includes("Japanese")){
                        handleRemoveFood("Japanese");
                    }else{
                        handleAddFood("Japanese");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Japanese") ? '5px solid green' : 'none'
                  }}/>
                <p className = "fooddescription">Japanese</p>
            </div>

            <div className="categ">
            
                <img src = {indian} class="itemselection" onClick={() =>{
                    if(listofFoods.includes("Indian")){
                        handleRemoveFood("Indian");
                    }else{
                        handleAddFood("Indian");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Indian") ? '5px solid green' : 'none'
                  }}/>
                <p className = "fooddescription">Indian</p>
            </div>
        </div>

        <div class="row3">
            <div className = "categ">
            
                <img src = {viet} class="itemselection" onClick={() =>{
                    if(listofFoods.includes("Vietnamese")){
                        handleRemoveFood("Vietnamese");
                    }else{
                        handleAddFood("Vietnamese");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Vietnamese") ? '5px solid green' : 'none'
                  }}/>
                <p className = "fooddescription">Vietnamese</p>
            </div>
            <div className = "categ">
            
                <img src = {casual} class="itemselection"onClick={() =>{
                    if(listofFoods.includes("Casual")){
                        handleRemoveFood("Casual");
                    }else{
                        handleAddFood("Casual");
                    }
                }}
                style={{
                    border: listofFoods.includes("Casual") ? '5px solid green' : 'none'
                  }} />
                <p className = "fooddescription">Casual Dining</p>
            </div>
            <div className = "categ">
            
                <img src = {italian} class="itemselection" onClick={() =>{
                    if(listofFoods.includes("Italian")){
                        handleRemoveFood("Italian");
                    }else{
                        handleAddFood("Italian");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Italian") ? '5px solid green' : 'none'
                  }}/>
                <p className= "fooddescription">Italian</p>
            </div>
        </div>

        <div class="row4">
            <div className = "categ">
            
                <img src = {burger} class="itemselection" onClick={() =>{
                    if(listofFoods.includes("Burger")){
                        handleRemoveFood("Burger");
                    }else{
                        handleAddFood("Burger");
                    }
                }}
                style={{
                    border: listofFoods.includes("Burger") ? '5px solid green' : 'none'
                  }} />
                <p className = "fooddescription">Burger</p>
            </div>
            <div className = "categ">
            
                <img src = {brunch} class="itemselection"onClick={() =>{
                    if(listofFoods.includes("Brunch")){
                        handleRemoveFood("Brunch");
                    }else{
                        handleAddFood("Brunch");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Brunch") ? '5px solid green' : 'none'
                  }}/>
                <p className = "fooddescription">Brunch</p>
            </div>
            <div className = "categ">
            
               <img src = {cafe} class="itemselection" onClick={() =>{
                    if(listofFoods.includes("Cafe")){
                        handleRemoveFood("Cafe");
                    }else{
                        handleAddFood("Cafe");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Cafe") ? '5px solid green' : 'none'
                  }}/>
               <p className = "fooddescription">Cafe</p>
            </div>
        </div>
    
</div>
);
}
  
    

export default FoodSelection;