import React from "react";

class WatchBox extends React.Component {
  render() { 
     return(
        <div className = "watchBox">
        <p> </p>
        </div>
          ); 
        }
   }


   class WatchButtons extends React.Component {
     render() {
       return (

        <div className = "buttons">
         <button className ="theButton" id="previous" onClick={() => console.log('previous')}>
         {this.props.value}
         </button>

        <button className ="theButton" id="play" onClick={() => console.log('play')}>
        {this.props.value}
        </button>

        <button className ="theButton" id="next" onClick={() => console.log('next')}>
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

