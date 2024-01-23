function sumWithClosure(firstNum = 0) {
  function sum(secondNum = 0) {
    console.log(firstNum + secondNum);
    return firstNum + secondNum;
  }
  return sum;
}

sumWithClosure(2)(3);
