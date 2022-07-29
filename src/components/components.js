import React from "react";
import {previous,next, channels,link} from "../channels/channels.js"

class WatchBox extends React.Component {


  state = {
    mssg: link
  };



  
  render() { 
     return(
        <div className = "watchBox">
         <iframe width ="100%"  src={this.state.mssg} frameborder="0" controls="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         
        </div>
        
         
          ); 

        }
   }


   class WatchButtons extends React.Component {
     render() {
       return (

        <div className = "buttons">
         <button className ="theButton" id="previous" onClick={() => {
          previous(channels) 
          this.setState({ mssg: link });
          console.log(this.state)}}>
         {this.props.value}
         </button>

        <button className ="theButton" id="play" onClick={() => console.log('play')}>
        {this.props.value}
        </button>

        <button className ="theButton" id="next" onClick={

          () => {
          next(channels) 
          this.setState({ mssg: link });
          console.log(this.state)
          }
          
          
          }>
        {this.props.value}
        </button>

        <button className ="theButton" id="Guide" onClick={() => console.log('guide')}>
        {this.props.value}
        </button>
      </div>
     
       );
     }
   }


   
   class VideoChatBox extends React.Component {
    render(){
    return (
       

      <div className = "chatArea">
        <p>Chat Area </p>
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

