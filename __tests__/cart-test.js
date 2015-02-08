/**
 * Created by joes on 15-2-7.
 */
jest.dontMock('lodash');
jest.dontMock('../js/model/cart');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/cart-item');
describe('Cart', function() {
    describe('getCartItems', function() {
        it('should return correct info', function() {
            var Cart = require('../js/model/cart');
            var inputs = [
                {'ITEM000001': 2},
                {'ITEM000003': 3}
            ];

            var cart = new Cart();
            var cartItems = cart.getCartItems(inputs);
            expect(cartItems[0].item.name).toBe('雪碧');
            expect(cartItems[0].count).toBe(2);
            expect(cartItems[1].item.brand).toBe('云山');
            expect(cartItems[1].count).toBe(3);
        });
    });
});