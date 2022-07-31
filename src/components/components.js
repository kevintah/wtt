import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import { useEffect } from 'react';

var url1 ="https://cdn.pubnub.com/sdk/javascript/pubnub.4.21.7.js" ;

var url2 = "https://cdn.jsdelivr.net/npm/pubnub-js-webrtc@latest/dist/pubnub-js-webrtc.js";

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

import useScript from 'hooks/useScript';

props => {
  useScript(url1);
  useScript(url2);

  useScript("https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js");
  useScript("https://cdn.pubnub.com/pubnub-3.7.14.min.js");
  useScript("http://cdn.pubnub.com/webrtc/webrtc.js")
  // rest of your component 
}


const channels = {

     skyNews: '<iframe width ="100%"  height = "100%" src="https://www.youtube.com/embed/9Auq9mYxFEE?&autoplay=1" title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

     nbcNews: '<iframe width ="100%"  height = "100%" src="https://www.youtube.com/embed/UKvyMnTK5N0?&autoplay=1" title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

     skyNews2: '<iframe width ="100%"  height = "100%" src="https://www.youtube.com/embed/9Auq9mYxFEE?&autoplay=1" title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

     nbcNews2: '<iframe width ="100%"  height = "100%" src="https://www.youtube.com/embed/UKvyMnTK5N0?&autoplay=1" title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

var channelList = Object.values(channels);

console.log(channelList)
var counter = 0;
var link = "https://www.youtube.com/embed/UKvyMnTK5N0?&autoplay=1";



function previous(){
  if (counter == 0){
     var iFrame = channelList[counter]
     document.getElementById("watchBox").innerHTML = iFrame;     
     counter = channelList.length -1;
     console.log(counter);
     console.log(link);
 
  }
   else{
     counter = counter -1;
     var iFrame = channelList[counter]

     document.getElementById("watchBox").innerHTML = iFrame;     console.log(counter);
     console.log(link);
 
   }
}

function next(){
  if (counter == channelList.length -1){
     link = channelList[channelList.length -1]
     counter = 0;
     //var iFrame = document.getElementById("watchBox").innerHTML;
     var iFrame = channelList[counter]

     document.getElementById("watchBox").innerHTML = iFrame;

     

     console.log(counter);
     console.log(link);
     console.log(iFrame)
     
  }
   else{
     counter = counter + 1;
     var iFrame = channelList[counter]

     document.getElementById("watchBox").innerHTML = iFrame;    
     console.log(counter);
     console.log(link);


 
   }
}

class WatchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mssg: "https://www.youtube.com/embed/9Auq9mYxFEE?&autoplay=1",
    };
  }

  
  render() { 
     return(
        <div id ="watchBox" className = "watchBox">


      <iframe width ="100%"  height = "100%" src={link} title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


        </div>
          ); 
        }
   }


   class WatchButtons extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mssg:"https://www.youtube.com/embed/9Auq9mYxFEE?&autoplay=1",
      };

     
    }
     render() {
       return (

        <div className = "buttons">
         <button className ="theButton" id="previous" onClick={() => 
         previous()}>
       
         {this.props.value}
         PREVIOUS</button>

        <button className ="theButton" id="play" onClick={() => console.log('play')}>
        {this.props.value}
        PLAY</button>

        <button className ="theButton"  value ="Next" id="next" onClick={() => next()}>
        {this.props.value}
        NEXT</button>

        <button className ="theButton" id="Guide" onClick={() => console.log('guide')}>
        {this.props.value}
        GUIDE</button>
      </div>
     
       );
     }
   }

   
  //
  
  




   
   class VideoChatBox extends React.Component {
   
    

    render(){
    return (
       
     


      <div className = "chatArea">

        <Helmet>
        
        </Helmet>


        </div>

         
          );
    } 


  }




  



  class BelowTv extends React.Component {
    render(){
    return (
       

      <div className = "belowTv">
        <p> </p>
       </div>
    );
    } 
  }
   export  {WatchBox, WatchButtons,VideoChatBox,BelowTv};

