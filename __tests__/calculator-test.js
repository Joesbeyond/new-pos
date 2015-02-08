jest.dontMock('../js/model/calculator');

describe('calculator',  function() {
    describe('calculate', function() {
        it('should return correct payment', function() {
            var Calculator = require('../js/model/calculator');

            var calculator = new Calculator();
            var payment = calculator.calculate();
            expect(payment).toBe();

        });
    });
});