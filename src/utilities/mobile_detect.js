
const mobileDetect = () => {
  // console.log(window.navigator.userAgent);
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

export default mobileDetect;