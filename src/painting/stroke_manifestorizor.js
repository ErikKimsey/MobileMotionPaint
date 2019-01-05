import map from '../utilities/map';

const strokeManifestorizer = (evts, motown) => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  
  let xAcc = evts.acceleration.x;
  let yAcc = evts.acceleration.y;
  // console.log("xAcc >> ", xAcc);
  
  let strokeX = map( xAcc,motown.x.start, motown.x.end, 0, width, true);
  let strokeY = map( yAcc,motown.y.start, motown.y.end, 0, height, true);
  
  let stroke = {x:strokeX, y: strokeY};
  return stroke;
};

export default strokeManifestorizer;