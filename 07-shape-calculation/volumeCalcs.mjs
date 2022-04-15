
const errInputs = "There was an issue with your inputs."

// All inputs should be numbers > 0

const calcVolumeCylinder = (radius, height) => {
  if(checkInvalidInputs(radius) || checkInvalidInputs(height)) return errInputs;
  return ((radius ** 2) * height * Math.PI).toFixed(4);
}

const calcVolumeCuboid = (width, height, depth) => {
  if(checkInvalidInputs(width) || checkInvalidInputs(height) || checkInvalidInputs(depth)) return errInputs;
  return (width * height * depth);
}

const calcVolumeSphere = (radius) => {
  if(checkInvalidInputs(radius)) return errInputs;
  return (4 / 3 * (radius ** 3) * Math.PI).toFixed(4);
}

const checkInvalidInputs = (num) => {
  return isNaN(num) || num <= 0;
}

export {calcVolumeCylinder, calcVolumeCuboid, calcVolumeSphere};