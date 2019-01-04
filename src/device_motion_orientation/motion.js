import strokeManifestorizer from '../painting/stroke_manifestorizor';

let eventsHorizon;
const motionConstants = {
  x: {
    start: 20,
    end:20,
  },
  y: {
    start: 20,
    end:20,
  }
};

/**
 * @method deviceMotion
 * @param 
 */
const deviceMotion = (e) => {
  eventsHorizon = e;
  let strokeMove = strokeManifestorizer(eventsHorizon, motionConstants);
}

export default deviceMotion;