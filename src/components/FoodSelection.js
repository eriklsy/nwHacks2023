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





let user = [];
function FoodSelection() {
    let user = [];
    console.log(user);
    return(
        <div className="main">

            <div className="row1">
                <div className = "categ">
                    <img src = {idc} className="itemselection" id="idc" />
                    <p className = "fooddescription">I'm feeling lucky</p>
                </div>

                <div className = "categ">
                    <img src = {chinese} className="itemselection" />
                    <p className = "fooddescription">Chinese</p>
                </div>
                
                <div className = "categ">
                    <img src = {fast} className ="itemselection" />
                    <p className = "fooddescription">Fast Food</p> 
                </div>
            </div>

            <div className="row2">
                <div className = "categ">
                    <img src = {korean} className="itemselection"/>
                    <p className = "fooddescription">Korean</p>
                </div>

                <div className = "categ">
                    <img src = {japanese} class="itemselection" />
                    <p className = "fooddescription">Japanese</p>
                </div>

                <div className="categ">
                    <img src = {indian} class="itemselection"/>
                    <p className = "fooddescription">Indian</p>
                </div>
            </div>

            <div class="row3">
                <div className = "categ">
                    <img src = {viet} class="itemselection" />
                    <p className = "fooddescription">Vietnamese</p>
                </div>
                <div className = "categ">
                    <img src = {casual} class="itemselection" />
                    <p className = "fooddescription">Casual Dining</p>
                </div>
                <div className = "categ">
                    <img src = {italian} class="itemselection"/>
                    <p className= "fooddescription">Italian</p>
                </div>
            </div>

            <div class="row4">
                <div className = "categ">
                    <img src = {burger} class="itemselection" />
                    <p className = "fooddescription">Burger</p>
                </div>
                <div className = "categ">
                    <img src = {brunch} class="itemselection"/>
                    <p className = "fooddescription">Brunch</p>
                </div>
                <div className = "categ">
                   <img src = {cafe} class="itemselection" />
                   <p className = "fooddescription">Cafe</p>
                </div>
            </div>
        
    </div>
    )
    
    
}


export default FoodSelection;