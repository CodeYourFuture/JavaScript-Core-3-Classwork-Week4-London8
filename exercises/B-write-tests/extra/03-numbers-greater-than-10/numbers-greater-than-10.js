/* Do not change this file */

function numbersGreaterThan10(numbersArray) {
  return numbersArray.filter(number => {
    return number > 10;
  });
};

module.exports = numbersGreaterThan10;

/*
  Let's trace this piece of code - what is the value of result with this input?

  The result value will be: [12, 100];

  const numbers = [1, 5, 10, 12, 100]
  const result = numbersGreaterThan10(numbers);
*/
