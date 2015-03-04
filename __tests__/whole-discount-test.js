/**
 * Created by joes on 3/4/15.
 */
jest.dontMock('lodash');
jest.dontMock('../js/model/promotion/promotion');
jest.dontMock('../js/model/promotion/discount');
jest.dontMock('../js/model/promotion/whole-discount');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/cart-item');
describe('WholeDiscount', function() {
     describe('#getPromotionMoney()', function() {
        it('should return correct reduced money', function() {
            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');
            var WholeDiscount =require('../js/model/promotion/whole-discount');
            var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var item1 = new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐');
            var item2 = new Item('ITEM000002', '云山苹果', '斤', 5.50, '云山');
            var item3 = new Item('ITEM000003', '云山荔枝', '斤', 15.00, '云山');
            var item4 = new Item('ITEM000001', '雪碧', '瓶', 3.00, '');
            var item5 = new Item('ITEM000007', '果粒橙', '瓶', 3.50, '');
            var cartItems = [
                new CartItem(item, 20),
                new CartItem(item1, 30),
                new CartItem(item4, 30),
                new CartItem(item5, 40),
                new CartItem(item3, 8),
                new CartItem(item2, 14)
            ];
            var wholeDiscount = new WholeDiscount('', 0.90, 'ITEM000001', 28);
            var reducedMoney = wholeDiscount.getPromotionMoney(cartItems);
            expect(reducedMoney).toBe(48.9);

        });
    });

    describe('getUnDiscountMoney()', function() {
        it('should return correct reduced money', function() {
            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');
            var WholeDiscount =require('../js/model/promotion/whole-discount');
            var item = new Item('ITEM000001', '雪碧', '瓶', 3.00, '');
            var cartItems = [
                new CartItem(item, 30)
            ];
            var wholeReduced = new WholeDiscount('', 0.90, 'ITEM000001', 28);
            var reducedMoney = wholeReduced.getUnDiscountMoney(cartItems);
            expect(reducedMoney).toBe(90);

        });
    });
});
