/**
 * Created by joes on 15-2-7.
 */
jest.dontMock('lodash');
jest.dontMock('../js/model/cart');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/cart-item');
describe('Cart', function() {
    describe('#getCartItems', function() {
        it('should return correct info', function() {
            var Cart = require('../js/model/cart');
            var inputs = [
                {'ITEM000001': 2}
            ];

            var cart = new Cart();
            var result = cart.getCartItems(inputs);
            expect(result).toBe('雪碧');
        });
    });
});