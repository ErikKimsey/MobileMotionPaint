/**
 * @method thePainting
 * @param props
 */


const thePainting = (p) => {
  let w = window.innerWidth;
  let h = window.innerHeight;

  p.redrawOnNewProps = (props) => {

  }

  p.setup = () => {
    p.createCanvas(w, h, p.WEBGL);
    p.pixelDensity(1);
  }

  p.draw = () => {
    p.background('#000');
  } 
  
}

export default thePainting;