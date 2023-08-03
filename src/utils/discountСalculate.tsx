export const discountCalculate = (discount: number, price: number) => {
  const result = price - (discount * price) / 100;
  return result;
};
