const duplicates = (nums) => {
  const repeated = nums.reduce((acc, num) => {
    if (acc[num]) {
      acc[num]++;
    } else {
      acc[num] = 1;
    }

    return acc;
  }, {});

  return Object.keys(repeated).filter(num => repeated[num] > 1).length;
}

console.log(duplicates([1, 2, 2, 3, 4, 4, 4, 5]));
