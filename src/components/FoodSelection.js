import React from "react";
import './FoodSelection.css';



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
                <div class="itemselection" onClick={idcHandler()} id="idc">
                </div>
                <div class="itemselection" onClick={chineseHandler()} id="chinese">
                
                </div>
                <div class="itemselection" onClick={fastHandler()} id="fast">
                </div>
            </div>
            <div class="row2">
                <div class="itemselection" id="korean" onClick={koreanHandler()}>
                </div>
                <div class="itemselection" onClick={japaneseHandler()} id="japanese">
                </div>
                <div class="itemselection" onClick={indianHandler()} id="indian">
                
                </div>
            </div>

            <div class="row3">
                <div class="itemselection"  onClick={vietnameseHandler()} id="vietnamese">
                </div>
                <div class="itemselection" onClick={casualHandler()} id="casual dining">
                
                </div>
                <div class="itemselection" onClick={italianHandler()} id="italian">
            
                </div>
            </div>
            <div class="row4">
                <div class="itemselection" onClick={burgerHandler()} id="burger">
                </div>
                <div class="itemselection" onClick={brunchHandler()} id="brunch">
            
                </div>
                <div class="itemselection" onClick={cafeHandler()} id="cafe">
                </div>
            </div>
        
        </div>
    )
    
    
}


export default FoodSelection;