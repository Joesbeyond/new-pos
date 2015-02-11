jest.dontMock('lodash');
jest.dontMock('../js/model/promotion/topful-with-reduced');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/cart-item');


describe('TopfulWithReduced', function() {
    describe('getPromotionMoney', function() {
        it('should return correct reduced money', function() {
            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');
            var TopfulWithReduced =require('../js/model/promotion/topful-with-reduced');
            var item = new Item('ITEM000002', '云山苹果', '斤', 5.50, '云山');
            var cartItem = [
                new CartItem(item, 30)
            ];
            var topfulWithReduced = new TopfulWithReduced('满100减3', 100, 3, ['ITEM000001', 'ITEM000003']);
            var reducedMoney = topfulWithReduced.getPromotionMoney(cartItem);
            expect(reducedMoney).toBe(3);

        });
    });
});