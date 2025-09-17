const fibonacci = function(n) {
  let a = 0;
  b = 1;
  let number = 0;
  for (let i = 1; i < n; i++) {
    number = a + b;
    a = b;
    b = number; 
  }
  return number;
};

// Do not edit below this line
module.exports = fibonacci;
