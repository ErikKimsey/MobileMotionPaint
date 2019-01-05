import React, { Component } from 'react';
import MobileDetect from './utilities/mobile_detect';
import P5Wrapper from './utilities/p5Wrapper';
import thePainting from './painting/paint';
import colorManifestorIzer from './painting/color_manifestor';
import deviceOrientation, {nuColor} from './device_motion_orientation/orientation';
import deviceMotion from './device_motion_orientation/motion';
import './App.scss';
import strokeManifestorizer from './painting/stroke_manifestorizor';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMobile: null,
      isLandscape: null,
      w: window.innerWidth,
      h: window.innerHeight,
    };
  }
  
  componentDidMount(){
    if(MobileDetect() === true){
      this.setState({isMobile: true});
      window.addEventListener('deviceorientation', this.handleOrientation, false);
      window.addEventListener('devicemotion', this.handleMotion, false);
      window.addEventListener('devicemotion', this.handleMotion, false);
    } else {
      this.setState({isMobile: false});
    }
  }

  
  handleMotion = (e) => {
    deviceMotion(e);
  }
  
  handleOrientation = (e) => {
    deviceOrientation(e);
    this.setState({w:window.innerWidth});
  }
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <P5Wrapper className="sketch" sketch={thePainting} state={this.state}/>
        </header>
      </div>
    );
  }
}

export default App;
