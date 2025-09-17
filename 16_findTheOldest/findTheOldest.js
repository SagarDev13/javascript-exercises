const findTheOldest = function(arr) {
  let birthDates = [];
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    birthDates[i] = arr[i].dateOfBirth;
  }
  let oldest = birthDates[0];
  for (let i = 1; i < l; i++) {
    if (birthDates[i] >= oldest {
      oldest = birthDates[i];
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
