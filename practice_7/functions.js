export function toString(stringArray) {
  let resultStr = "";
  for (let i = 0; i < stringArray.length; i++) {
    resultStr += "-" + stringArray[i];
  }
  return resultStr;
}

export function totalSum(numberArray) {
  let total = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (typeof numberArray === "number") {
      continue;
    }
    total += numberArray[i];
  }
  return total;
}

export function mapArray(stringArray) {
  const numberArray = [];

  for (let i = 0; i < stringArray.length; i++) {
    let number = stringArray[i];
    numberArray.push(number.length);
  }
  return numberArray;
}

export function findMax(numberArray) {
  let maxValue = numberArray[0];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > maxValue) {
      maxValue = numberArray[i];
    }
  }
  return maxValue;
}
