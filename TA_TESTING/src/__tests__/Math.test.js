import {
  Add,
  Substract,
  Multiplication
} from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 5;
  const b = 2;
  const expected = 7;
  // Act
  const coba = Add(a, b);

  // Assert
  expect(coba).toBe(expected)
})

test('Return substraction of a - b', () => {
  // Arrange
  const x = 5;
  const y = 2;
  const expected = 3;

  // Act
  const coba = Substract(x, y)

  // Assert
  expect(coba).toBe(expected)

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const x = 5;
  const y = 2;
  const expected = 10;

  // Act
  const coba = Multiplication(x, y)

  // Assert
  expect(coba).toBe(expected)
})