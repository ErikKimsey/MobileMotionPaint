import React, { Component } from 'react';
import MobileDetect from './utilities/mobile_detect';
import P5Wrapper from './utilities/p5Wrapper';
import thePainting from './painting/paint';
import deviceOrientation from './device_motion_orientation/orientation';
import './App.scss';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMobile: null,
    };
  }

  componentDidMount(){
    if(MobileDetect() === true){
      console.log("mobile!@");
      this.setState({isMobile: true});
      window.addEventListener('deviceorientation', this.handleOrientation, false);
      window.addEventListener('devicemotion', this.handleMotion, false);
      window.addEventListener('devicemotion', this.handleMotion, false);
    } else {
      console.log("desktop!!");
      this.setState({isMobile: false});
    }
  }

  handleMotion = (e) => {
    // painting
  }

  handleOrientation = (e) => {
    // picking color
    deviceOrientation(e);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <P5Wrapper sketch={thePainting}/>
        </header>
      </div>
    );
  }
}

export default App;
