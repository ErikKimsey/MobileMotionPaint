import {nuColor, snapColor, isTouched} from '../device_motion_orientation/orientation';
import map from '../utilities/map';
import {strokeMoveX, strokeMoveY} from '../device_motion_orientation/motion';

/**
 * @method thePainting
 * @param props
 */

const thePainting = (p) => {

  let w = window.innerWidth;
  let h = window.innerHeight;
  let stillChoosing = false;
  let chosenColor = {};
  
  p.redrawOnNewProps = (props) => {
    w = props.state.w;
    h = props.state.h;
  }   
  
  p.setup = () => {
    p.createCanvas(w, h, p.WEBGL);
    p.pixelDensity(4);
  }
  
  p.draw = () => {
    
    p.background('#000');
    if(isTouched === false){
      p.ellipse(0, 0, strokeMoveX*1.5, strokeMoveY);
      p.fill(nuColor.r,nuColor.g,nuColor.b);
    } else {
      p.ellipse(0, 0, 140, 140);
      p.fill(snapColor.r,snapColor.g,snapColor.b);
    }
  }
  
  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  }
  
}

export default thePainting;