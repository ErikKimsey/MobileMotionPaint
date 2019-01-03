import colorManifestorIzer from '../painting/color_manifestor';

let eventsHorizon;
let nuColor = {};
let snapColor = {r:0,g:0,b:0};
let nuStroke = {startPos:{x:0,y:0}, endPos:{x:0,y:0}};
let isTouched = false;

window.addEventListener('touchstart', (e)=>{
  isTouched = true;
  nuStroke.startPos.x = e.touches[0].clientX;
  nuStroke.startPos.y = e.touches[0].clientY;
}, false);


const orientationConstants = {
  alpha: {
    start: 0,
    end: 360,
  },
  beta: {
    start: -180,
    end: 180,
  },
  gamma: {
    start: -90,
    end: 90,
  }
};

window.addEventListener('touchend', (e)=>{
  console.log("TouchH DoNE endDed");
  snapColor = colorManifestorIzer(eventsHorizon,orientationConstants);
  isTouched = false;
  nuStroke.endPos.x = e.changedTouches[0].clientX;
  nuStroke.endPos.y = e.changedTouches[0].clientY;
}, false);

/**
 * @method deviceOrientation
 * @param events from 'deviceorientation' listener
 */
const deviceOrientation = (e) => {
  eventsHorizon = e;
  nuColor = colorManifestorIzer(eventsHorizon, orientationConstants);
  console.log("nucolor vals >>> ",typeof nuColor.r);
  console.log("snapcolor >>>> ", snapColor);
}

export default deviceOrientation;
export {nuColor, snapColor, isTouched};
