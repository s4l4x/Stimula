export const radians = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};

export const normalizeBetween = (val: number, min: number, max: number) => {
  return (val - min) / (max - min);
};
