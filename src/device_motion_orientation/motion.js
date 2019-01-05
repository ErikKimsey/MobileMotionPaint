import strokeManifestorizer from '../painting/stroke_manifestorizor';

let eventsHorizon, strokeMove, strokeMoveX=0, strokeMoveY;
const motionConstants = {
  x: {
    start: -50,
    end:50,
  },
  y: {
    start: -50,
    end:50,
  }
};

/**
 * @method deviceMotion
 * @param 
 */
const deviceMotion = (e) => {
  eventsHorizon = e;
  strokeMove = strokeManifestorizer(eventsHorizon, motionConstants);
  strokeMoveX = strokeMove.x;
}

export default deviceMotion;
export {strokeMove, strokeMoveX};