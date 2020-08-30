export const increase = (price, amount = 0, limit = 50) => {
  const result = price + amount;
  return result > limit ? limit : result;
};

export const decrease = (price, amount = 0, limit = 0) => {
  const result = price - amount;
  return result < limit ? limit : result;
};
