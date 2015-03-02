jest.dontMock('lodash');
jest.dontMock('../js/model/promotion/promotion');
jest.dontMock('../js/model/promotion/discount');
jest.dontMock('../js/model/promotion/brand-discount-decorator');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/cart-item');
describe('BrandDiscountDecorator', function() {
    describe('#getPromotionMoney()', function() {
        it('should return correct promotion money', function () {

            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');
            var BrandDiscountDecorator = require('../js/model/promotion/brand-discount-decorator');
            var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var item2 = new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐');

            var cartItems = [
                new CartItem(item, 20),
                new CartItem(item2, 30)
            ];
            var brandDiscountDec = new BrandDiscountDecorator('可口可乐', 0.90, ['可口可乐'], ['ITEM000000']);
            var promotionMoney = brandDiscountDec.getPromotionMoney(cartItems);
            expect(promotionMoney).toBe(12);
        });
    });
});
