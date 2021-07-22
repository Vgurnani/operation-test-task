export const operatorResult = (operator, result, operent) => {
  let resultValue;
  switch (operator) {
    case "+":
      resultValue = Number(result) + Number(operent);
      break;
    case "-":
      resultValue = Number(result) - Number(operent);
      break;
    case "*":
      resultValue = (Number(result) * Number(operent)).toFixed(4);
      break;
    case "/":
      resultValue = (Number(result) / Number(operent)).toFixed(4);
      break;
    default:
  }
  return resultValue;
};

export const errorMessageObject = {
  firstNumber: "Please enter first number",
};
