const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	if (num1 < num2) {
		let temp = num1;
		num1 = num2;
		num2 = temp;
	}
	return num1 - num2;
};

const sum = function(arr) {
	let n = arr.length;
	let sum = 0;
	for (int i = 0; i < n; i++) {
		sum += arr[i];
	}
	return sum;
};

const multiply = function(arr) {
	let n = arr.length;
	let mul = 0;
	for (int i = 0; i < n; i++) {
		mul *= arr[i];
	}
	return mul;
};

const power = function(base, expo) {
	return base**expo;
};

const factorial = function(num) {
	let fact = 1;
	for (let i = 1; i <= num; i++) {
		fact *= i;
	}
	return fact;	
	}	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
