/*
'use strict';
jest.dontMock('lodash');
jest.dontMock('../js/model/promotion/promotion');
jest.dontMock('../js/model/promotion/reduced');
jest.dontMock('../js/model/promotion/full-with-reduced');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/cart-item');

describe('FullWithReduced', function() {
    describe('getPromotionMoney', function() {
        it('should return correct reduced money', function() {
            var Item = require('../js/model/item');
            var CartItem = require('../js/model/cart-item');
            var FullWithReduced =require('../js/model/promotion/full-with-reduced');
            var item = new Item('ITEM000002', '云山苹果', '斤', 5.50, '云山');

            var cartItems = [
                new CartItem(item, 30)

            ];
            var fullWithReduced = new FullWithReduced('满100减3', 3, 100, ['ITEM000003']);
            var reducedMoney = fullWithReduced.getPromotionMoney(cartItems);
            expect(reducedMoney).toBe(3);

        });
    });
});*/
