export const checkOutOfBounds = (x: number, contentWidthDiff: number) => {
  if (x < 0 && Math.abs(x) > contentWidthDiff) return -contentWidthDiff;
  return x > 0 ? 0 : x;
};
