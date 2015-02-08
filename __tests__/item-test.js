jest.dontMock('../js/model/item');
jest.dontMock('lodash');
describe('Item', function() {
    describe('findItemByBarcode', function() {
        it('should return correct info', function() {
            var Item = require('../js/model/item');


            var result = Item.findItemByBarcode('ITEM000001');
            expect(result.name).toBe('雪碧');
        });
    });
});