import {nuColor, snapColor, isTouched} from '../device_motion_orientation/orientation';

/**
 * @method thePainting
 * @param props
 */

const makePermColor = (c) => {

}


const thePainting = (p) => {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let stillChoosing = false;
  let chosenColor = {};
  
  p.redrawOnNewProps = (props) => {
    
  }   
  
  p.setup = () => {
    p.createCanvas(w, h, p.WEBGL);
    p.pixelDensity(4);
  }
  
  p.draw = () => {
    p.background('#000');
      p.ellipse(0, 0, 140, 140);
      p.fill('#fff');
    // if(isTouched === false){
    //   p.ellipse(0, 0, 140, 140);
    //   p.fill(nuColor.r,nuColor.g,nuColor.b);
    // } else {
    //   p.ellipse(0, 0, 140, 140);
    //   p.fill(snapColor.r,snapColor.g,snapColor.b);
    // }
  } 
  
}

export default thePainting;