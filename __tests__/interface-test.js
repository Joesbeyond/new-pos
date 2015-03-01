/*
jest.dontMock('../js/model/promotion/interface');
jest.dontMock('../js/model/promotion/promotion');
describe('Promotion', function() {
    describe('ensureImplements', function() {
        it('should return correct info', function() {
            var Interface = require('../js/model/promotion/interface');
            var Promotion = require('../js/model/promotion/promotion');
            var interface = new Interface('Promotion', ['getPromotionString','getPromotionMoney']);
            var promotion = new Promotion();
            var result = Interface.ensureImplements(promotion, interface);
            expect(result).toBe(undefined);//passed
        });
    });
});*/
