/**
 * Created by joes on 3/1/15.
 */
jest.dontMock('lodash');
jest.dontMock('../js/model/promotion/promotion');
jest.dontMock('../js/model/promotion/discount');
jest.dontMock('../js/model/promotion/single-or-brand-discount');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/cart-item');

describe('SingleOrBrandDiscount', function() {
    describe('getPromotionMoney', function() {
        it('should return correct discount money', function() {
            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');
            var SingleOrBrandDiscount =require('../js/model/promotion/single-or-brand-discount');
            var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');

            var cartItems = [
                new CartItem(item, 30)

            ];
            var singleOrBrand = new SingleOrBrandDiscount('可口可乐350ml', 0.95, ['可口可乐'], ['ITEM000000']);
            var discountMoney = singleOrBrand.getPromotionMoney(cartItems);
            expect(discountMoney).toBe(4.5);

        });
    });
});
