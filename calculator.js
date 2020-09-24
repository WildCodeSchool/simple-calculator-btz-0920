let firstValue = +prompt("first value");
let operand = prompt("operand");
let secondValue = +prompt("second value");

// let firstValue = parseInt(prompt("first value"));
// let operand = prompt("operand");
// let secondValue = parseInt(prompt("second value"));

// firstValue = parseInt(firstValue);
// secondValue = parseInt(secondValue);

let result;

switch (operand) {
  case "+":
    result = firstValue + secondValue;
    break;
  case "-":
    result = firstValue - secondValue;
    break;
  case "/":
    result = firstValue / secondValue;
    break;
  case "*":
    result = firstValue * secondValue;
    break;
  default:
    // result = "Invalid operator";
    throw new Error("Invalid operator");
}

console.log(result);
