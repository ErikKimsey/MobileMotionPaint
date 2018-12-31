import React, { Component } from 'react';
import logo from './logo.svg';
import MobileDetect from './utilities/mobile_detect';
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
    } else {
      console.log("desktop!!");
      this.setState({isMobile: false});
    }
  }

  handleMotion = (e) => {

  }

  handleOrientation = (e) => {
    deviceOrientation(e);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
