const sumAll = function(num1, num2) {
  for (let i = 1; i <= num2 - num1; i++) {
    num1 += 1;
  }
  return num1;
};

// Do not edit below this line
module.exports = sumAll;
