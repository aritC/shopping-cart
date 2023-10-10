const couponGenerator = () => {
  return {
    code: couponCodeGenerator(),
    value: couponValueGenerator(5, 20),
  };
};

const couponCodeGenerator = () => {
  let couponCode = "";
  let possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 6; i++) {
    couponCode += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return couponCode;
};

const couponValueGenerator = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default couponGenerator;
