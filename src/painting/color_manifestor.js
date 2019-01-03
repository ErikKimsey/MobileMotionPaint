import map from '../utilities/map';
/**
 * 1. Pass in alpha, beta, gamma values as args
 * 2. Detect if alpha, beta, or gamma
 * 3. Call map with gyro value
 * 4. Place mapped values into RGB fields
 * 5. Return RGB color
 */

const rgbStart = 0, rgbEnd = 255;

const colorManifestorIzer = (evts, ornt) => {
  let theColor = {r: 0, g: 0, b: 0};
  // console.log("e forom color manif >> ",ornt.alpha);
  let a = evts.alpha, b = evts.beta, g = evts.gamma;
  theColor.r = map(a, ornt.alpha.start, ornt.alpha.end, rgbStart, rgbEnd, true);
  theColor.g = map(b, ornt.beta.start, ornt.beta.end, rgbStart, rgbEnd, true);
  theColor.b = map(g, ornt.gamma.start, ornt.gamma.end, rgbStart, rgbEnd, true);
  return theColor;
};

export default colorManifestorIzer;