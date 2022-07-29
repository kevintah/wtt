import React from "react";

const channels = {

     skyNews: "https://www.youtube.com/embed/9Auq9mYxFEE?&autoplay=1",
     nbcNews: "https://www.youtube.com/embed/UKvyMnTK5N0?&autoplay=1",
     skyNews2: "https://www.youtube.com/embed/9Auq9mYxFEE?&autoplay=1",
     nbcNews2: "https://www.youtube.com/embed/UKvyMnTK5N0?&autoplay=1"
}

const channelList = Object.values(channels);
console.log(channelList)
var counter = 0;
var link = "https://www.youtube.com/embed/9Auq9mYxFEE?&autoplay=1";

this.state = {
  mssg: link,
};

function previous(){
  if (counter == 0){
     link = channelList[0]
     counter = channelList.length -1;
     console.log(counter);
     console.log(link);
     this.setState({
      mssg: link,
});
  }
   else{
     counter = counter -1;
     link = channelList[counter];
     console.log(counter);
     console.log(link);
     this.setState({
      mssg: link,
});
   }
}

function next(){
  if (counter == channelList.length -1){
     link = channelList[channelList.length -1]
     counter = 0;
     console.log(counter);
     console.log(link);
     this.setState({
      mssg: link,
});
  }
   else{
     counter = counter + 1;
     link = channelList[counter];
     console.log(counter);
     console.log(link);
     this.setState({
      mssg: link,
});
   }
}

class WatchBox extends React.Component {
  render() { 
     return(
        <div className = "watchBox">


      <iframe width ="100%"  height = "100%" src={link} title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


        </div>
          ); 
        }
   }


   class WatchButtons extends React.Component {
     render() {
       return (

        <div className = "buttons">
         <button className ="theButton" id="previous" onClick={() => 
         previous()}>
       
         {this.props.value}
         </button>

        <button className ="theButton" id="play" onClick={() => console.log('play')}>
        {this.props.value}
        </button>

        <button className ="theButton" id="next" onClick={() => next()}>
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

