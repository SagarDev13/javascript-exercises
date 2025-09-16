const repeatString = function() {
  repearString('hey', 3) // should return heyheyhey
    let string = 'hey';
    for (let i = 0; i < 3; i++) {
      string += string;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
