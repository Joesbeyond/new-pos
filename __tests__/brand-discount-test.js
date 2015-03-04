jest.dontMock('lodash');
jest.dontMock('../js/model/promotion/promotion');
jest.dontMock('../js/model/promotion/discount');
jest.dontMock('../js/model/promotion/brand-discount');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/cart-item');
jest.dontMock('../js/model/promotion/discount');
jest.dontMock('../js/model/promotion/promotion-decorator');
jest.dontMock('../js/model/promotion/promotion');
jest.dontMock('../js/model/promotion/interface');

describe('BrandDiscount', function() {
    describe('buildPromotionName', function() {
        it('should return correct string', function() {

            var BrandDiscount = require('../js/model/promotion/brand-discount');
            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');

            var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');


            var cartItems = [
                new CartItem(item, 20),
            ];
            var brandDiscount = new BrandDiscount('可口可乐', 0.90, ['可口可乐']);
            var promotionName = brandDiscount.buildPromotionName();
            expect(promotionName).toBe(18);
        });
    });

    /*describe('getPromotionMoney', function() {
        it('should return correct promotion money', function() {

            var BrandDiscount = require('../js/model/promotion/brand-discount');
            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');

            var item = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
            var item2 = new Item('ITEM000001', '可口可乐550ml', '瓶', 4.00, '可口可乐');
            var item3 = new Item('ITEM000002', '雪碧', '瓶', 3.00, '');

            var cartItems = [
                new CartItem(item, 20),
                new CartItem(item2, 30),
                new CartItem(item3, 20)
                ];
            var brandDiscount = new BrandDiscount('可口可乐', 0.90, ['可口可乐']);
<<<<<<< HEAD
            var promotionMoney = brandDiscount.getPromotionMoney(cartItems);
=======
            var promotionMoney = brandDiscount.getPromotionMoney(cartItem);
>>>>>>> new_branch_name
            expect(promotionMoney).toBe(18);
        });
    });*/

    /*describe('getPromotionString', function() {
        it('should return correct promotion string', function() {

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
            var brandDiscount = new BrandDiscount('可口可乐', 0.90, ['可口可乐']);
            var promotionString = brandDiscount.getPromotionString(cartItem);
            expect(promotionString).toBe('名称：可口可乐品牌打折，金额：18.00元\n');
        });
    });*/
});
