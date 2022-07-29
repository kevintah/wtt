import React from "react";
import WatchBox from "../components/components.js"


var channels = {
  
    "Sky News":"https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1",
    "NBC News":"https://www.youtube.com/embed/UKvyMnTK5N0?autoplay=1" 
  }

 

var counter = 0;

var link ="https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1"

function previous(object){

  
  if (counter == 0){
    link = Object.values(channels)[0]; 
    console.log(link);
   }

  else{
    counter = counter -1;
    link = Object.values(channels)[counter]
    console.log(counter)
    console.log(link);

  }
  
}



function next(object){
  if (counter == 1){
    link = Object.values(channels)[counter]; 
    console.log(counter)
    console.log(link);
    

   }

  else{
    counter = counter +1;
    link =Object.values(channels)[counter]
    console.log(link);

    

  }

  

}


export{previous,next,channels,link}