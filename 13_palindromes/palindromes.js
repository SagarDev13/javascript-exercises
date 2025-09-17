const palindromes = function (string) {
  let n = string.length;
  let arr = string.split("");
  let sum = 0;
  for (int i = 0; i < n; i++) {
    if (arr[i] != arr[n-1-i]) {
      sum = 1;
    }
  }
  if (sum == 0) {
    return true;
  } else if (sum == 1) {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
