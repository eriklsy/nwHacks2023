import { React, useState } from "react";
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
import './imageGrid.css'

function findMode(arr) {
    var modeMap = {};
    var maxEl = arr[0], maxCount = 1;
    for(var i = 0; i < arr.length; i++)
    {
        var el = arr[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return [maxEl];
    console.log(maxEl);
}







function FoodSelection(props){

    const [numPeople, setPeople] = useState(5);
    const value = false;

    const handleReducePerson = (id) =>{
        setPeople(numPeople - 1)
        console.log(numPeople);
    }

    const [list, setList] = useState([]);

    const handleConcatList = (newList) =>{
        setList(list.concat(newList))
        handleEmptyFood();
        handleReducePerson();
        console.log(list)
        var mode = findMode(list);
        console.log(mode);
        props.onList(mode);
    }


    
    const [listofFoods, setFood] = useState([]);

    const handleAddFood = (id) =>{
        setFood([...listofFoods,id])
        console.log(listofFoods)
    }

    const handleEmptyFood = (id) =>{
        setFood([]);
    }
    
  const handleRemoveFood = (id) => {
    setFood(listofFoods.filter(listofFoods => listofFoods !== id));
  }
    return(
        <div className="main">
            <div className="nextBB">
                <button className= "button" id="next" type = "button" onClick={() => handleConcatList(listofFoods)} >Next Person</button>
            </div>
        {/* <Setup value={value} /> */}
        



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
                  }} alt="image1"/>
                
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
                  }} alt="image2"
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
                  }} alt="image3"/>
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
                  }} alt="image4"/>
                <p className = "fooddescription">Korean</p>
            </div>

            <div className = "categ">
            
                <img src = {japanese} className="itemselection" onClick={() =>{
                    if(listofFoods.includes("Japanese")){
                        handleRemoveFood("Japanese");
                    }else{
                        handleAddFood("Japanese");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Japanese") ? '5px solid green' : 'none'
                  }} alt="image5"/>
                <p className = "fooddescription">Japanese</p>
            </div>

            <div className="categ">
            
                <img src = {indian} className="itemselection" onClick={() =>{
                    if(listofFoods.includes("Indian")){
                        handleRemoveFood("Indian");
                    }else{
                        handleAddFood("Indian");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Indian") ? '5px solid green' : 'none'
                  }} alt="image6"/>
                <p className = "fooddescription">Indian</p>
            </div>
        </div>

        <div className="row3">
            <div className = "categ">
            
                <img src = {viet} className="itemselection" onClick={() =>{
                    if(listofFoods.includes("Vietnamese")){
                        handleRemoveFood("Vietnamese");
                    }else{
                        handleAddFood("Vietnamese");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Vietnamese") ? '5px solid green' : 'none'
                  }} alt="image7"/>
                <p className = "fooddescription">Vietnamese</p>
            </div>
            <div className = "categ">
            
                <img src = {casual} className="itemselection"onClick={() =>{
                    if(listofFoods.includes("Casual")){
                        handleRemoveFood("Casual");
                    }else{
                        handleAddFood("Casual");
                    }
                }}
                style={{
                    border: listofFoods.includes("Casual") ? '5px solid green' : 'none'
                  }} alt="image8"/>
                <p className = "fooddescription">Casual Dining</p>
            </div>
            <div className = "categ">
            
                <img src = {italian} className="itemselection" onClick={() =>{
                    if(listofFoods.includes("Italian")){
                        handleRemoveFood("Italian");
                    }else{
                        handleAddFood("Italian");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Italian") ? '5px solid green' : 'none'
                  }} alt="image9"/>
                <p className= "fooddescription">Italian</p>
            </div>
        </div>

        <div className="row4">
            <div className = "categ">
            
                <img src = {burger} className="itemselection" onClick={() =>{
                    if(listofFoods.includes("Burger")){
                        handleRemoveFood("Burger");
                    }else{
                        handleAddFood("Burger");
                    }
                }}
                style={{
                    border: listofFoods.includes("Burger") ? '5px solid green' : 'none'
                  }} alt="image10"/>
                <p className = "fooddescription">Burger</p>
            </div>
            <div className = "categ">
            
                <img src = {brunch} className="itemselection"onClick={() =>{
                    if(listofFoods.includes("Brunch")){
                        handleRemoveFood("Brunch");
                    }else{
                        handleAddFood("Brunch");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Brunch") ? '5px solid green' : 'none'
                  }} alt="image11"/>
                <p className = "fooddescription">Brunch</p>
            </div>
            <div className = "categ">
            
               <img src = {cafe} className="itemselection" onClick={() =>{
                    if(listofFoods.includes("Cafe")){
                        handleRemoveFood("Cafe");
                    }else{
                        handleAddFood("Cafe");
                    }
                }} 
                style={{
                    border: listofFoods.includes("Cafe") ? '5px solid green' : 'none'
                  }} alt="image12"/>
               <p className = "fooddescription">Cafe</p>
            </div>
        </div>
    
</div>
);
}
  
    

export default FoodSelection;