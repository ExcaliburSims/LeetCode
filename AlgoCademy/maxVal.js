const maxValNumOfOccurrences = (nums) => {
  let maxVal = nums[0],
    count = 0;
  for (let val of nums) {
    if (val > maxVal) {
      maxVal = val;
      count = 1;
    } else if (val == maxVal) {
      count++;
    }
  }
  console.log(`[${maxVal}, ${count}]`);
  return [maxVal, count];
};

maxValNumOfOccurrences([2, 7, 8, , 8, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]);
