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



<<<<<<< HEAD
=======
function idcHandler(){
    user.push("idc");
    console.log(user);
}
function chineseHandler(){
    user.push("chinese");
    console.log(user);
}
function fastHandler(){
    user.push("fast");
    console.log(user);
}
function koreanHandler(){
    user.push("korean");
    console.log(user);
}
function japaneseHandler(){
    user.push("japanese");
    console.log(user);
}
function indianHandler(){
    user.push("indian");
    console.log(user);
}
function vietnameseHandler(){
    user.push("viet");
    console.log(user);
}
function casualHandler(){
    user.push("casualDining");
    console.log(user);
}
function italianHandler(){
    user.push("italian");
    console.log(user);
}
function burgerHandler(){
    user.push("burger");
    console.log(user);
}
function brunchHandler(){
    user.push("brunch");
    console.log(user);
}
function cafeHandler(){
    user.push("cafe");
    console.log(user);
}
  

>>>>>>> origin/100000-ui


let user = [];
function FoodSelection() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    }


    let user = [];
    console.log(user);
    return(
        <div className="main">
            <Button marginLeft = "200px" width = "100px" marginTop = "170px" marginBottom = "-240px" colorScheme='blue'>Next Person</Button>

            <div className="row1">
<<<<<<< HEAD
                <div className = "categ">
                    <img src = {idc} className="itemselection" id="idc" />
=======
                <div className = "categ" >
                    <img src = {idc} className="itemselection" onClick={idcHandler()} className={isClicked ? 'clicked' : 'itemselection'} 
                    onClick={handleClick}/>
                    
>>>>>>> origin/100000-ui
                    <p className = "fooddescription">I'm feeling lucky</p>
                </div>

                <div className = "categ">
<<<<<<< HEAD
                    <img src = {chinese} className="itemselection" />
=======
                
                    <img src = {chinese} className="itemselection" onClick={idcHandler()} 
                    />
>>>>>>> origin/100000-ui
                    <p className = "fooddescription">Chinese</p>
                </div>
                
                <div className = "categ">
                    <img src = {fast} className ="itemselection" />
                    <p className = "fooddescription">Fast Food</p> 
                </div>
            </div>

            <div className="row2">
                <div className = "categ">
<<<<<<< HEAD
                    <img src = {korean} className="itemselection"/>
=======
           
                    <img src = {korean} className="itemselection" onClick={koreanHandler()}/>
>>>>>>> origin/100000-ui
                    <p className = "fooddescription">Korean</p>
                </div>

                <div className = "categ">
<<<<<<< HEAD
                    <img src = {japanese} class="itemselection" />
=======
                
                    <img src = {japanese} class="itemselection" onClick={japaneseHandler()}/>
>>>>>>> origin/100000-ui
                    <p className = "fooddescription">Japanese</p>
                </div>

                <div className="categ">
<<<<<<< HEAD
                    <img src = {indian} class="itemselection"/>
=======
                
                    <img src = {indian} class="itemselection" onClick={indianHandler()}/>
>>>>>>> origin/100000-ui
                    <p className = "fooddescription">Indian</p>
                </div>
            </div>

            <div class="row3">
                <div className = "categ">
<<<<<<< HEAD
                    <img src = {viet} class="itemselection" />
                    <p className = "fooddescription">Vietnamese</p>
                </div>
                <div className = "categ">
                    <img src = {casual} class="itemselection" />
                    <p className = "fooddescription">Casual Dining</p>
                </div>
                <div className = "categ">
                    <img src = {italian} class="itemselection"/>
=======
                
                    <img src = {viet} class="itemselection" onClick={vietnameseHandler()}/>
                    <p className = "fooddescription">Vietnamese</p>
                </div>
                <div className = "categ">
                
                    <img src = {casual} class="itemselection" onClick={casualHandler()}/>
                    <p className = "fooddescription">Casual Dining</p>
                </div>
                <div className = "categ">
                
                    <img src = {italian} class="itemselection" onClick={italianHandler()}/>
>>>>>>> origin/100000-ui
                    <p className= "fooddescription">Italian</p>
                </div>
            </div>

            <div class="row4">
                <div className = "categ">
<<<<<<< HEAD
                    <img src = {burger} class="itemselection" />
                    <p className = "fooddescription">Burger</p>
                </div>
                <div className = "categ">
                    <img src = {brunch} class="itemselection"/>
                    <p className = "fooddescription">Brunch</p>
                </div>
                <div className = "categ">
                   <img src = {cafe} class="itemselection" />
=======
                
                    <img src = {burger} class="itemselection" onClick={burgerHandler()}/>
                    <p className = "fooddescription">Burger</p>
                </div>
                <div className = "categ">
                
                    <img src = {brunch} class="itemselection" onClick={brunchHandler()}/>
                    <p className = "fooddescription">Brunch</p>
                </div>
                <div className = "categ">
                
                   <img src = {cafe} class="itemselection" onClick={cafeHandler()}/>
>>>>>>> origin/100000-ui
                   <p className = "fooddescription">Cafe</p>
                </div>
            </div>
        
    </div>
    )
    
    
}


export default FoodSelection;