jest.dontMock('../js/model/promotion/promotion-checker');

describe('PromotionChecker', function() {
    describe('check()', function() {
        it('should return correct cartItems', function(){
            var PromotionChecker = require('../js/model/promotion/promotion-checker');
            var promotionChecker = new PromotionChecker();
            var result = promotionChecker.check(cartItems);
            expect(result).toBe('brand');
        });
    });
});