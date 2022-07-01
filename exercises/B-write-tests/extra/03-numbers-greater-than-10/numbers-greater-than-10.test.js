const numbersGreaterThan10 = require("./numbers-greater-than-10");

/* Complete the tests */

test("Get numbers greater than 10", () => {
  // Arrange
  const numbers = [1, 5, 10, 12, 100];
  const exp = numbersGreaterThan10(numbers);
  // Act
  let result = [12,100]
  // Assert
  expect(exp).toEqual(result)
});
