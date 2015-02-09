jest.dontMock('../js/model/cart-item');
jest.dontMock('lodash');
describe('CartItem',  function() {
    describe('toInventoryText()', function() {
        it('should return correct text', function() {
            var CartItem = require('../js/model/cart-item');
            var item = {
             barcode : 'ITEM000002',
             name : '云山苹果',
             unit : '斤',
             price : 5.50,
             brand : '云山'
             };
            var cartItem = new CartItem(item, 20);

            var text = cartItem.toInventoryText();
            expect(text).toBe('名称：云山苹果，数量：20斤，单价：5.50(元)，小计：110.00(元)\n');

        });
    });
});