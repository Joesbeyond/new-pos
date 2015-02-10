jest.dontMock('lodash');
jest.dontMock('../js/model/promotion/promotion');
jest.dontMock('../js/model/promotion/discount');
jest.dontMock('../js/model/promotion/brand-discount');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/cart-item');
describe('BrandDiscount', function() {
    describe('getPromotionMoney', function() {
        it('should return correct promotion money', function() {

            var BrandDiscount = require('../js/model/promotion/brand-discount');
            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');

            var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var item2 = new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐');
            var item3 = new Item('ITEM000002', '雪碧', '瓶', 3.00, '');

            var cartItem = [
                new CartItem(item, 20),
                new CartItem(item2, 30),
                new CartItem(item3, 20)
                ];
            var brandDiscount = new BrandDiscount('可口可乐品牌打折', 0.90, '可口可乐');
            var promotionMoney = brandDiscount.getPromotionMoney(cartItem);
            expect(promotionMoney).toBe(18);
        });
    });

    describe('getPromotionString', function() {
        it('should return correct promotion money', function() {

            var BrandDiscount = require('../js/model/promotion/brand-discount');
            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');

            var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var item2 = new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐');
            var item3 = new Item('ITEM000002', '雪碧', '瓶', 3.00, '');

            var cartItem = [
                new CartItem(item, 20),
                new CartItem(item2, 30),
                new CartItem(item3, 20)
            ];
            var brandDiscount = new BrandDiscount('可口可乐品牌打折', 0.90, '可口可乐');
            var promotionMoney = brandDiscount.getPromotionMoney(cartItem);
            expect(promotionMoney).toBe(18);
        });
    });
});
