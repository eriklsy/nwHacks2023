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

let user = [];
function FoodSelection() {
    let user = [];
    console.log(user);
    return(
        <div class="main">
            <div class="row1">
                <div class = "categ">
                    <img src = {idc} class="itemselection" onClick={idcHandler()}/>
                    <p class = "fooddescription">I'm feeling lucky</p></div>
                <div>
                <img src = {chinese} class="itemselection" onClick={chineseHandler()}/>
                    <p class = "fooddescription">Chinese</p></div>
                <img src = {fast} class="itemselection" onClick={fastHandler()}/>
            </div>
            <div class="row2">
                
                <img src = {korean} class="itemselection" onClick={koreanHandler()}/>
                <img src = {japanese} class="itemselection" onClick={japaneseHandler()}/>
                <img src = {indian} class="itemselection" onClick={indianHandler()}/>
                
            </div>

            <div class="row3">
                <img src = {viet} class="itemselection" onClick={vietnameseHandler()}/>
                <img src = {casual} class="itemselection" onClick={casualHandler()}/>
                <img src = {italian} class="itemselection" onClick={italianHandler()}/>
            </div>
            <div class="row4">
                <img src = {burger} class="itemselection" onClick={burgerHandler()}/>
                <img src = {brunch} class="itemselection" onClick={brunchHandler()}/>
                <img src = {cafe} class="itemselection" onClick={cafeHandler()}/>
            </div>
        
        </div>
    )
    
    
}


export default FoodSelection;