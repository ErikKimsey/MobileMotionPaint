import strokeManifestorizer from '../painting/stroke_manifestorizor';

let eventsHorizon, strokeMove, strokeMoveX=0, strokeMoveY=0;
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
  strokeMoveY = strokeMove.y;
}

export default deviceMotion;
export {strokeMove, strokeMoveX, strokeMoveY};