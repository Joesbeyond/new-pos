jest.dontMock('lodash');
jest.dontMock('../js/model/promotion/promotion');
jest.dontMock('../js/model/promotion/reduced');
jest.dontMock('../js/model/promotion/whole-reduced');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/cart-item');

describe('WholeReduced', function() {
    describe('getPromotionMoney', function() {
        it('should return correct reduced money', function() {
            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');
            var WholeReduced =require('../js/model/promotion/whole-reduced');
            var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var item1 = new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐');
            var item2 = new Item('ITEM000002', '云山苹果', '斤', 5.50, '云山');
            var item3 = new Item('ITEM000003', '云山荔枝', '斤', 15.00, '云山');
            var item4 = new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅');
            var item5 = new Item('ITEM000008', '康师傅冰红茶', '瓶', 3.00, '康师傅');

            var cartItems = [
                new CartItem(item, 20),
                new CartItem(item1, 30),
                new CartItem(item2, 14),
                new CartItem(item3, 8),
                new CartItem(item4, 30),
                new CartItem(item5, 25)

            ];
            var wholeReduced = new WholeReduced('', 5, 100, 'ITEM000002', 24.70);
            var reducedMoney = wholeReduced.getPromotionMoney(cartItems);
            expect(reducedMoney).toBe(20);

        });
    });

    describe('getUnDiscountMoney()', function() {
        it('should return correct reduced money', function() {
            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');
            var WholeReduced =require('../js/model/promotion/whole-reduced');
            var item = new Item('ITEM000002', '云山苹果', '斤', 5.50, '云山');
            var cartItems = [
                new CartItem(item, 14)
            ];
            var wholeReduced = new WholeReduced('', 5, 100, 'ITEM000002', 24.70);
            var reducedMoney = wholeReduced.getUnDiscountMoney(cartItems);
            expect(reducedMoney).toBe(77);

        });
    });
});