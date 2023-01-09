export const parseNumber = (num: number) => {
  // separates the number by . for every 3 digits
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
