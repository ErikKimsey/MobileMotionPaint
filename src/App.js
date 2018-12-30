import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  componentDidMount(){
    let app = document.querySelector('.App');
    // console.log(app);
    app.style.width = window.innerWidth;
    app.style.height = window.innerHeight;
    window.addEventListener("deviceorientation", this.handleOrientation, true);
  }

  moveIcon = (dimens) => {
    let image = document.querySelector('img');
    let iw = 604;
    let ih = 412;
    // console.log("height: ", ih);
    console.log("dim alpha:", dimens.alpha);
    console.log("dim beta:", dimens.beta);
    console.log("dim gamma:", dimens.gamma);
    
    let xpos = (ih * dimens.alpha)/360;
    // console.log("xpos: ", xpos);
    
    image.style.top = xpos + "px";
  }

  handleOrientation = (event) => {
    // event.preventDefault();
    // console.log(event);
    
    this.moveIcon(event);
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
