import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue} from "firebase/database";




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




   
   class VideoChatBox extends React.Component {
   
    

    render(){
    return (
       
     
  
  <body class="chatArea" onload="showMyFace()">
    <Helmet>
      <script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
      </Helmet>
    <video class="video1" id="yourVideo" autoplay muted playsinline></video>
    <video class="video1"  id="friendsVideo" autoplay playsinline></video>
    <br />
    <button class="button1" onclick="showFriendsFace()" type="button" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span> Call</button>
  </body>




         
          );
    } 


  }


  

 // video chat
  //Create an account on Firebase, and use the credentials they give you in place of the following
  var config = {
    apiKey: "AIzaSyDPxd4u5sn5K6L5a-dGeeJLoa7aiWHUNRc",
    authDomain: "wtt-projec.firebaseapp.com",
    projectId: "wtt-projec",
    storageBucket: "wtt-projec.appspot.com",
    databaseURL: "https://wtt-projec-default-rtdb.firebaseio.com/",
    messagingSenderId: "946546335937",
    appId: "1:946546335937:web:211851221c251f072ef440",
    measurementId: "G-TQGZDLT8XW"
  };

var app = initializeApp(config);
var database = getDatabase(app);
console.log(database);
//const analytics = getAnalytics(app);
  
//firebase.initializeApp(config);

//var database = firebase.database().ref();
//var database = db.ref;

//var database = database.ref();

var yourVideo = document.getElementById("yourVideo");
var friendsVideo = document.getElementById("friendsVideo");
var yourId = Math.floor(Math.random()*1000000000);
var servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'stun:stun.l.google.com:19302'}]};
var pc = new RTCPeerConnection(servers);
pc.onicecandidate = (event => event.candidate?sendMessage(yourId, JSON.stringify({'ice': event.candidate})):console.log("Sent All Ice") );
pc.onaddstream = (event => friendsVideo.srcObject = event.stream);




function sendMessage(senderId, data) {
  const database = getDatabase(app);
  set(ref(database, 'sender' + senderId), {
    message: data,
   
  });
}



function readMessage(data) {
  var msg = JSON.parse(data.val().message);
  var sender = data.val().sender;
  if (sender != yourId) {
    if (msg.ice != undefined)
      pc.addIceCandidate(new RTCIceCandidate(msg.ice));
    else if (msg.sdp.type == "offer")
      pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
        .then(() => pc.createAnswer())
        .then(answer => pc.setLocalDescription(answer))
        .then(() => sendMessage(yourId, JSON.stringify({'sdp': pc.localDescription})));
    else if (msg.sdp.type == "answer")
      pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
  }
};



var c_add = ref(database, 'child_added' , readMessage);
 c_add;
 console.log(c_add);


function showMyFace() {
  navigator.mediaDevices.getUserMedia({audio:true, video:true})
    .then(stream => yourVideo.srcObject = stream)
    .then(stream => pc.addStream(stream));
}



function showFriendsFace() {
  pc.createOffer()
    .then(offer => pc.setLocalDescription(offer) )
    .then(() => sendMessage(yourId, JSON.stringify({'sdp': pc.localDescription})) );
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

