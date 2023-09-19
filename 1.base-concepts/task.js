"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let result;
  let d = b**2 - 4 * a * c;
  if (d < 0) {
    return arr;
  }
  else if (d === 0) {
   result = -b / (2 * a);
   arr.push(result);
 return arr;
  }
  else if (d > 0) {
   result = (-b + Math.sqrt(d)) / (2 * a);
   arr.push(result);
   result = (-b - Math.sqrt(d)) / (2 * a);
   arr.push(result);
  };
  return arr;
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = (percent / 100) / 12;
  let sum = amount - contribution;
  let monthlyFee = sum * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  let total = monthlyFee*countMonths;
  return Number(total.toFixed(2));
};