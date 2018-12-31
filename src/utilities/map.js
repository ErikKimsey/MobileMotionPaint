
/**
 * The 'constrain()' and 'map()' functions below are borrowed from the Processing Org's p5js library and subsequently altered for this project.
 */

const constrain = function(n, low, high) {
  return Math.floor(Math.max(Math.min(n, high), low));
};

/*
* @method map
* @param  {Number} value the incoming value to be converted
* @param  {Number} start1 lower bound of the value's current range
* @param  {Number} stop1 upper bound of the value's current range
* @param  {Number} start2 lower bound of the value's target range
* @param  {Number} stop2 upper bound of the value's target range
* @param  {Boolean} [withinBounds] constrain the value to the newly mapped range
* @return {Number} remapped number
*/

const map = function(n, start1, stop1, start2, stop2, withinBounds) {
  // p5._validateParameters('map', arguments);
  let newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return constrain(newval, start2, stop2);
  } else {
    return constrain(newval, stop2, start2);
  }
};


console.log(map(3, -180, 180, 0, 255, true));
console.log(map(180, -90, 90, 0, 255, true));
console.log(map(270, 0, 360, 0, 255, true));

export default map;

