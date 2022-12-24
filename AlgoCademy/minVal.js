const minValue = (A, B, C) => {
  let minVal = A;
  if (B < minVal) {
    minVal = B;
  }
  if (C < minVal) {
    minVal = C;
  }
  console.log(minVal);
  return minVal;
};

minValue(2, 5, 10);
