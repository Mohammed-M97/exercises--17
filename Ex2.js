// Factorial
function factorial(n) {
  if (n > 12 || n < 0) {
    throw RangeError;
  } else if (n < 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
console.log(factorial(3));