/*
jest.dontMock('../js/model/promotion/promotion-checker');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/cart-item');
describe('PromotionChecker', function() {
    describe('check()', function() {
        it('should return correct cartItems', function(){
            var PromotionChecker = require('../js/model/promotion/promotion-checker');
            var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var item2 = new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐');
            var item3 = new Item('ITEM000002', '雪碧', '瓶', 3.00, '');

            var cartItem = [
                new CartItem(item, 20),
                new CartItem(item2, 30),
                new CartItem(item3, 20)
            ];

            var promotionChecker = new PromotionChecker();
            var result = promotionChecker.check(cartItems);
            expect(result).toBe('brand');
        });
    });
});*/
