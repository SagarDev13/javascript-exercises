const reverseString = function(string) {
  let n = string.length; 
  let reversed = "";
  if (string.length = 0) {
    console.log("Error!");
  } else if (string.length = 0) {
    return string;
  }
  else {
  for (let i = 0; i < n; i++) {
    reversed[i] = string[n - i - 1];
  }
  return reversed;
  }
};

// Do not edit below this line
module.exports = reverseString;
