import hexRgb from 'hex-rgb';

const useHexRgb = (hex) => {
  const rgb = hexRgb(hex);
  const formattedRgb = [rgb.red, rgb.green, rgb.blue];
  return formattedRgb;
};

export default useHexRgb;
