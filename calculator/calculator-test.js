
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 15000, years: 10, rate: 7.5};
  expect(calculateMonthlyPayment(values)).toBe('178.05');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 12636.71, years: 10, rate: 7.5};
  expect(calculateMonthlyPayment(values)).toBe('150.00');
});

it('should return a result of 0', function() {
  const values = {amount: 0, years: 10, rate: 7.5};
  expect(calculateMonthlyPayment(values)).toBe('0.00');
});

it('should return a result of NaN', function() {
  const values = {amount: 'hello', years: 10, rate: 7.5};
  expect(calculateMonthlyPayment(values)).toBe('NaN');
});

it('should return a result of Infinity', function() {
  const values = {amount: 10000, years: 0, rate: 7.5};
  expect(calculateMonthlyPayment(values)).toBe('Infinity');
});

/// etc
