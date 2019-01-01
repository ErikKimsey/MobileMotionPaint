import colorManifestorIzer from '../painting/color_manifestor';

/**
 * @method deviceOrientation
 * @param 
 */

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

const deviceOrientation = (e) => {
  let eventsHorizon = e;
  colorManifestorIzer(eventsHorizon, orientationConstants);
}

export default deviceOrientation;
