/**
 * Created by joes on 3/3/15.
 */
jest.dontMock('lodash');
jest.dontMock('../js/model/promotion/promotion');
jest.dontMock('../js/model/promotion/discount');
jest.dontMock('../js/model/promotion/single-and-brand-discount');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/cart-item');
describe('SingleAndBrandDiscount', function() {
    describe('#getPromotionMoney()', function() {
        it('should return correct promotion money', function () {

            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');
            var SingleAndBrandDiscount = require('../js/model/promotion/single-and-brand-discount');
            var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var item2 = new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐');

            var cartItems = [
                new CartItem(item, 20),
                new CartItem(item2, 30)
            ];
            var singleAndBrand = new SingleAndBrandDiscount('可口可乐', 0.90, ['可口可乐'], ['ITEM000000'], 0.95);
            var promotionMoney = singleAndBrand.getPromotionMoney(cartItems);
            expect(promotionMoney).toBe(17.7);
        });
    });

    describe('#getSecondDiscountMoney()', function() {
        it('should return correct promotion money', function () {

            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');
            var SingleAndBrandDiscount = require('../js/model/promotion/single-and-brand-discount');
            var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var item2 = new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐');

            var cartItems = [
                new CartItem(item, 20),
                new CartItem(item2, 30)
            ];
            var singleAndBrand = new SingleAndBrandDiscount('可口可乐', 0.90, ['可口可乐'], ['ITEM000000'], 0.95);
            var promotionMoney = singleAndBrand.getSecondDiscountMoney(cartItems);
            expect(promotionMoney).toBe(3);
        });
    });
});
